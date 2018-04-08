// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import Plotly from 'components/plotly';
import lowess from '@stdlib/stats/lowess';
import linspace from '@stdlib/math/utils/linspace';
import mapValues from '@stdlib/utils/map-values';
import groupBy from '@stdlib/utils/group-by';
import group from '@stdlib/utils/group';
import copy from '@stdlib/utils/copy';
import unique from 'uniq';
import mean from 'compute-mean';
import max from 'compute-max';
import min from 'compute-min';


// VARIABLES //

var COLORS = [
	'#1f77b4',
	'#ff7f0e',
	'#2ca02c',
	'#d62728',
	'#9467bd',
	'#8c564b',
	'#c49c94',
	'#e377c2',
	'#17becf',
	'#aec7e8',
	'#ffbb78',
	'#ff9896',
	'#98df8a',
	'#7f7f7f',
	'#c5b0d5',
	'#f7b6d2',
	'#bcbd22',
	'#c7c7c7',
	'#dbdb8d',
	'#9edae5'
];

var SYMBOLS = [
	'circle',
	'square-open',
	'diamond',
	'hexagon-open',
	'cross-open',
	'star-open',
	'pentagon',
	'triangle-up',
	'circle-open',
	'bowtie',
	'star',
	'triangle-down',
	'hexagram',
	'hourglass',
	'diamond-cross',
	'square-cross',
	'star-square',
	'star-square-open'
];

// FUNCTIONS //

function calculateCoefficients( x, y ) {
	const xmu = mean( x );
	const ymu = mean( y );
	let C1 = 0;
	let C2 = 0;
	const len = x.length;
	for ( let i = 0; i < len; i++ ) {
		let xdelta = x[ i ] - xmu;
		let ydelta = y[ i ] - ymu;
		C1 += xdelta * xdelta;
		C2 += xdelta * ydelta;
	}
	const slope = C2 / C1;
	const yint = ymu - slope*xmu;
	return [ yint, slope ];
}

function scale( arr, a, b ) {
	const minimum = min( arr );
	const maximum = max( arr );
	const range = maximum - minimum;
	const out = new Array( arr.length );
	for ( let i = 0; i < out.length; i++ ) {
		out[ i ] = ( ( b - a ) * ( arr[ i ] - minimum ) / range ) + a;
	}
	return out;
}

export function generateScatterplotConfig({ data, xval, yval, color, type, size, regressionLine, regressionMethod, lineBy }) {
	let nColors;
	let traces;

	if ( color && type ) {
		const colors = data[ color ];
		const types = data[ type ];
		const uniqueColors = copy( colors );
		unique( uniqueColors );
		nColors = uniqueColors.length;
		const uniqueTypes = copy( types );
		unique( uniqueTypes );

		traces = [];
		const xgrouped = groupBy( data[ xval ], ( v, i ) => {
			return colors[ i ] + ':' + types[ i ];
		});
		const ygrouped = groupBy( data[ yval ], ( v, i ) => {
			return colors[ i ] + ':' + types[ i ];
		});
		let sizegrouped;
		if ( size ) {
			sizegrouped = groupBy( data[ size ], ( v, i ) => {
				return colors[ i ] + ':' + types[ i ];
			});
			sizegrouped = mapValues( sizegrouped, ( value ) => {
				return scale( value, 5.0, 10.0 );
			});
		}
		for ( let i = 0; i < uniqueColors.length; i++ ) {
			for ( let j = 0; j < uniqueTypes.length; j++ ) {
				const grouping = uniqueColors[ i ] + ':' + uniqueTypes[ j ];
				traces.push({
					x: xgrouped[ grouping ],
					y: ygrouped[ grouping ],
					type: 'scatter',
					mode: 'markers',
					name: grouping,
					marker: {
						symbol: SYMBOLS[ j ],
						size: size ? sizegrouped[ grouping ] : 5.0,
						autocolorscale: false,
						color: COLORS[ i ]
					}
				});
			}
		}
	}
	else if ( type ) {
		const groups = copy( data[ type ]);
		unique( groups );
		const xgrouped = group( data[ xval ], data[ type ]);
		const ygrouped = group( data[ yval ], data[ type ]);
		traces = new Array( groups.length );
		for ( let i = 0; i < groups.length; i++ ) {
			traces[ i ] = {
				x: xgrouped[ groups[ i ] ],
				y: ygrouped[ groups[ i ] ],
				type: 'scatter',
				mode: 'markers',
				name: groups[ i ],
				marker: {
					symbol: SYMBOLS[ i ],
					size: size ? scale( group( data[ size ], data[ type ])[ groups[ i ] ], 5.0, 10.0 ) : 5.0,
					autocolorscale: false,
					color: 'rgba(0,0,0,1)'
				}
			};
		}
	}
	else if ( color ) {
		const groups = copy( data[ color ]);
		unique( groups );
		nColors = groups.length;
		const xgrouped = group( data[ xval ], data[ color ]);
		const ygrouped = group( data[ yval ], data[ color ]);
		traces = new Array( nColors );
		for ( let i = 0; i < nColors; i++ ) {
			traces[ i ] = {
				x: xgrouped[ groups[ i ] ],
				y: ygrouped[ groups[ i ] ],
				type: 'scatter',
				mode: 'markers',
				name: groups[ i ],
				marker: {
					symbol: 'circle',
					size: size ? scale( group( data[ size ], data[ color ])[ groups[ i ] ], 5.0, 10.0 ) : 5.0,
					autocolorscale: false,
					color: COLORS[ i ]
				}
			};
		}
	} else {
		traces = [ {
			x: data[ xval ],
			y: data[ yval ],
			type: 'scatter',
			mode: 'markers',
			name: 'Points',
			marker: {
				symbol: 'circle',
				size: size ? scale( data[ size ], 5.0, 10.0 ) : 5.0
			}
		} ];
	}

	if ( regressionLine ) {
		if ( lineBy ) {
			const groups = copy( data[ lineBy ]);
			unique( groups );
			const xgrouped = group( data[ xval ], data[ lineBy ]);
			const ygrouped = group( data[ yval ], data[ lineBy ]);
			let colorOffset = 0;
			if ( color && color !== lineBy ) {
				colorOffset += nColors;
			}
			for ( let i = 0; i < groups.length; i++ ) {
				const xvals = xgrouped[ groups[ i ] ];
				const yvals = ygrouped[ groups[ i ] ];
				let predicted;
				let values;
				if ( regressionMethod === 'linear' ) {
					values = linspace( min( xvals ), max( xvals ), 100 );
					const coefs = calculateCoefficients( xvals, yvals );
					predicted = values.map( x => coefs[ 0 ] + coefs[ 1 ]*x );
				} else if ( regressionMethod === 'smooth' ) {
					const out = lowess( xvals, yvals );
					values = out.x;
					predicted = out.y;
				}
				traces.push({
					x: values,
					y: predicted,
					mode: 'lines',
					name: groups[ i ],
					type: 'line',
					line: {
						color: COLORS[ colorOffset+i ],
						width: 1.5
					}
				});
			}
		} else {
			let xvals = data[ xval ];
			let yvals = data[ yval ];
			let predicted;
			let values;
			let name;
			if ( regressionMethod === 'linear' ) {
				const coefs = calculateCoefficients( xvals, yvals );
				values = linspace( min( xvals ), max( xvals ), 100 );
				predicted = values.map( x => coefs[ 0 ] + coefs[ 1 ]*x );
				name = 'Linear Fit';
			}
			else if ( regressionMethod === 'smooth' ) {
				const out = lowess( xvals, yvals );
				values = out.x;
				predicted = out.y;
				name = 'Smoothed Fit';
			}
			traces.push({
				x: values,
				y: predicted,
				mode: 'lines',
				name: name,
				type: 'line'
			});
		}
	}
	return {
		data: traces,
		layout: {
			hovermode: 'closest',
			xaxis: {
				title: xval
			},
			yaxis: {
				title: yval
			},
			legend: {
				traceorder: 'normal',
				font: {
					family: 'sans-serif',
					size: 10,
					color: '#000'
				},
				bordercolor: '#E2E2E2',
				borderwidth: 2
			},
			title: `${xval} against ${yval}`
		}
	};
}


// MAIN //

class Scatterplot extends Component {
	constructor( props ) {
		super( props );

		const { variables, defaultX, defaultY } = props;

		this.state = {
			xval: defaultX || variables[ 0 ],
			yval: defaultY || variables[ 1 ],
			color: null,
			type: null,
			regressionLine: false,
			regressionMethod: 'linear',
			lineBy: null
		};
	}

	generateScatterplot = () => {
		const config = generateScatterplotConfig({ data: this.props.data, ...this.state });

		const output = {
			variable: `${this.state.xval} against ${this.state.yval}`,
			type: 'Chart',
			value: <Plotly
				editable
				fit
				data={config.data}
				layout={config.layout}
				onShare={() => {
					this.props.session.addNotification({
						title: 'Plot shared.',
						message: 'You have successfully shared your plot.',
						level: 'success',
						position: 'tr'
					});
					this.props.logAction( 'DATA_EXPLORER_SHARE:SCATTERPLOT', this.state );
				}}
			/>
		};
		this.props.logAction( 'DATA_EXPLORER:SCATTERPLOT', this.state );
		this.props.onCreated( output );
	}

	renderInputs() {
		const { variables, groupingVariables } = this.props;
		return ( <Fragment>
			<SelectInput
				legend="Variable on x-axis:"
				defaultValue={this.state.xval}
				options={variables}
				onChange={( value ) => {
					this.setState({
						xval: value
					});
				}}
			/>
			<SelectInput
				legend="Variable on y-axis:"
				defaultValue={this.state.yval}
				options={variables}
				onChange={( value ) => {
					this.setState({
						yval: value
					});
				}}
			/>
			<div style={{ width: '100%' }}>
				<SelectInput
					legend="Color:"
					options={groupingVariables}
					clearable={true}
					style={{ float: 'left', paddingRight: 10, width: '33.3%' }}
					onChange={( value ) => {
						this.setState({
							color: value
						});
					}}
				/>
				<SelectInput
					legend="Type:"
					options={groupingVariables}
					clearable={true}
					style={{ float: 'left', paddingLeft: 10, paddingRight: 10, width: '33.3%' }}
					onChange={( value ) => {
						this.setState({
							type: value
						});
					}}
				/>
				<SelectInput
					legend="Size:"
					options={variables}
					clearable={true}
					style={{ float: 'left', paddingLeft: 10, width: '33.3%' }}
					onChange={( value ) => {
						this.setState({
							size: value
						});
					}}
				/>
			</div>
		</Fragment> );
	}

	renderRegressionLineOptions() {
		return ( <div style={{
			opacity: this.props.showRegressionOption ? 1.0 : 0.0
		}}>
			<CheckboxInput
				inline
				legend="Show Regression Model"
				defaultValue={false}
				onChange={() => {
					this.setState({
						regressionLine: !this.state.regressionLine
					});
				}}
			/>
			<div style={{ width: '100%' }}>
				<SelectInput
					legend="Method:"
					defaultValue="linear"
					options={[ 'linear', 'smooth' ]}
					style={{ float: 'right', paddingLeft: 10, width: '45%' }}
					disabled={!this.state.regressionLine}
					onChange={( value ) => {
						this.setState({
							regressionMethod: value
						});
					}}
				/>
				<SelectInput
					legend="Split By:"
					options={this.props.groupingVariables}
					clearable={true}
					style={{ float: 'right', paddingLeft: 10, width: '45%' }}
					disabled={!this.state.regressionLine}
					onChange={( value ) => {
						this.setState({
							lineBy: value
						});
					}}
				/>
			</div>
		</div> );
	}

	render() {
		return (
			<Panel>
				<Panel.Heading >
					<Panel.Title componentClass="h4" >Scatterplot</Panel.Title>
				</Panel.Heading>
				<Panel.Body>
					{this.renderInputs()}
					<div style={{ clear: 'both' }}></div>
					{this.renderRegressionLineOptions()}
					<div style={{ clear: 'both' }}></div>
					<Button bsStyle="primary" block onClick={this.generateScatterplot}>Generate</Button>
				</Panel.Body>
			</Panel>
		);
	}
}


// DEFAULT PROPERTIES //

Scatterplot.defaultProps = {
	defaultX: null,
	defaultY: null,
	groupingVariables: null,
	logAction() {},
	session: {},
	showRegressionOption: true
};


// PROPERTY TYPES //

Scatterplot.propTypes = {
	data: PropTypes.object.isRequired,
	defaultX: PropTypes.string,
	defaultY: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	session: PropTypes.object,
	showRegressionOption: PropTypes.bool,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default Scatterplot;
