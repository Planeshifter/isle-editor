// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import abs from '@stdlib/math/base/special/abs';
import sqrt from '@stdlib/math/base/special/sqrt';
import sample from '@stdlib/random/sample';
import { VictoryAxis, VictoryChart, VictoryErrorBar, VictoryLine, VictoryTheme } from 'victory';
import qt from '@stdlib/stats/base/dists/t/quantile';
import qnorm from '@stdlib/stats/base/dists/normal/quantile';
import roundn from '@stdlib/math/base/special/roundn';
import hasOwnProp from '@stdlib/assert/has-own-property';
import isNumberArray from '@stdlib/assert/is-number-array';
import { NumberInput, SelectInput } from 'components/input';
import Panel from 'components/panel';
import TeX from 'components/tex';
import min from 'utils/statistic/min';
import mean from 'utils/statistic/mean';
import stdev from 'utils/statistic/stdev';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';


// FUNCTIONS //

const isBinaryArray = ( arr, guess = true ) => {
	const cache = {};
	let counter = 0;
	for ( let j = 0; j < arr.length; j++ ) {
		if ( !hasOwnProp( cache, arr[ j ]) ) {
			cache[ arr[ j ] ] = true;
			counter += 1;
		}
		if ( counter > 2 ) {
			return false;
		}
		if ( guess && j > 50 ) {
			break;
		}
	}
	return counter === 2 ? true : false;
};


// MAIN //

/**
* A learning component illustrating the Central Limit Theorem (CLT) when sampling from a supplied data set.
*
* @property {Object} data - data object with keys correspond to variable names and values holding the values of respective variables
* @property {Array<string>} variables - names of variables that can be sampled from
* @property {(Array<number>|number)} samples - array of numbers or a single numbers denoting the sample sizes that can be drawn
*/
class ConfidenceCoverageSample extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			variable: null,
			type: 'none',
			errorBars: [],
			nTrapped: 0,
			nLower: 0,
			nHigher: 0,
			sampleSize: 25,
			level: 0.95
		};
	}

	clear() {
		this.setState({
			errorBars: [],
			nTrapped: 0,
			nLower: 0,
			nHigher: 0
		});
	}

	renderChart() {
		const { errorBars } = this.state;
		if ( !errorBars || errorBars.length === 0 ) {
			return null;
		}
		const mu = this.state.trueMean;
		return ( <VictoryChart
			padding={{ top: 20, bottom: 30, left: 40, right: 20 }}
			height={this.state.errorBars.length * 2.5 + 50}
			theme={VictoryTheme.material}
		>
			<VictoryAxis
				padding={20}
				standalone={false}
				style={{
					tickLabels: {
						fontSize: '9px'
					}
				}}
			/>
			<VictoryAxis
				dependentAxis
				padding={20}
				standalone={false}
			/>
			<VictoryErrorBar
				animate={{ duration: 100 }}
				style={{
					data: {
						stroke: ( val ) => {
							return (
								( val.datum.yval - val.datum.err > mu ) ||
								( val.datum.yval + val.datum.err < mu )
							) ? 'darkred' : 'steelblue';
						}
					}
				}}
				data={this.state.errorBars}
				x="yval"
				y="num"
				errorX={( d ) => d.err}
			/>
			<VictoryLine
				data={[
					{ x: mu, y: 0 },
					{ x: mu, y: this.state.errorBars.length }
				]}
			/>
		</VictoryChart> );
	}

	drawSamples = ( numSamples ) => {
		if ( this.state.type === 'numeric' ) {
			this.drawQuantitative( numSamples );
		}
		else if ( this.state.type === 'binary' ) {
			this.drawBinary( numSamples );
		}
	}

	drawQuantitative = ( numSamples ) => {
		let { nTrapped, nLower, nHigher } = this.state;
		const alpha = 1.0 - this.state.level;
		const errorBars = this.state.errorBars.slice();
		const mu = this.state.trueMean;
		const sampleSize = this.state.sampleSize;
		for ( let i = 0; i < numSamples; i++ ) {
			const data = sample( this.state.values, {
				size: sampleSize
			});
			const avg = mean( data );
			const stderr = stdev( data ) / sqrt( sampleSize );
			const err = abs( stderr * qt( 1.0 - alpha/ 2.0, sampleSize - 1 ) );
			const o = {
				'num': errorBars.length + 1,
				'yval': avg,
				'err': err
			};
			if ( o.yval - o.err > mu ) {
				nHigher += 1;
			}
			else if ( o.yval + o.err < mu ) {
				nLower += 1;
			}
			else {
				nTrapped += 1;
			}
			errorBars.push( o );
		}
		this.setState({
			nTrapped,
			nLower,
			nHigher,
			errorBars
		});
	}

	drawBinary = ( numSamples ) => {
		let { nTrapped, nLower, nHigher } = this.state;
		const alpha = 1.0 - this.state.level;
		const errorBars = this.state.errorBars.slice();
		const p = this.state.trueMean;
		for ( let i = 0; i < numSamples; i++ ) {
			const data = sample( this.state.values, {
				size: this.state.sampleSize
			});
			const phat = mean( data );
			const sd = sqrt( phat * ( 1.0-phat ) / this.state.sampleSize );
			const o = {
				'num': errorBars.length + 1,
				'yval': phat,
				'err': abs( sd * qnorm( 1.0 - alpha/ 2.0, 0.0, 1.0 ) )
			};
			if ( o.yval - o.err > p ) {
				nHigher += 1;
			}
			else if ( o.yval + o.err < p ) {
				nLower += 1;
			}
			else {
				nTrapped += 1;
			}
			errorBars.push( o );
		}
		this.setState({
			nTrapped,
			nLower,
			nHigher,
			errorBars
		});
	}

	onSelectVariable = ( variable ) => {
		let values = this.props.data[ variable ];
		values = values.filter(
			x => x !== null && x !== ''
		);
		let type = 'none';
		let trueMean;
		let categories;
		if ( isNumberArray( values ) ) {
			type = 'numeric';
			trueMean = mean( values );
		}
		if ( isBinaryArray( values ) ) {
			type = 'binary';
			categories = [ ...new Set( values ) ].sort();
			let nSuccesses = 0;
			for ( let i = 0; i < values.length; i++ ) {
				if ( values[ i ] === categories[ 1 ]) {
					nSuccesses += 1;
				}
			}
			trueMean = nSuccesses / values.length;
		}
		let sampleSize = this.state.sampleSize;
		if ( sampleSize > values.length ) {
			sampleSize = values.length;
		}
		this.setState({
			variable,
			values,
			sampleSize,
			type,
			trueMean
		});
	}

	render() {
		const nobs = this.state.errorBars.length;
		const center = this.state.type === 'numeric' ? 'mean' : 'proportion';
		return (
			<Container style={{ maxWidth: 1200 }}>
				<SelectInput legend="Select a variable" options={this.props.variables} onChange={this.onSelectVariable} />
				{ this.state.type === 'numeric' || this.state.type === 'binary' ?
					<Row>
						<Col md={6}>
							<Panel
								header={<span>Confidence Intervals for {this.state.variable}</span>}
								style={{
									height: '85vh'
								}}
							>
								{this.renderChart()}
							</Panel>
						</Col>
						<Col md={6}>
							{ this.state.type === 'numeric' || this.state.type === 'binary' ?
								<Panel header="Parameters">
									<NumberInput
										legend="Sample Size"
										step={1}
										min={1}
										value={this.state.sampleSize}
										max={this.state.values.length}
										onChange={( sampleSize ) => this.setState({ 'sampleSize': sampleSize })}
									/>
									<NumberInput
										legend="Confidence Level"
										step={0.01} min={0} max={1}
										value={this.state.level}
										onChange={( level ) => this.setState({ 'level': level })}
									/>
									<ButtonGroup>
										{isNumberArray( this.props.samples ) ?
											this.props.samples.map( ( n, idx ) => {
												return ( <Button key={idx} onClick={() => {
													this.drawSamples( n );
												}}>
													Draw {n} Samples
												</Button> );
											}) : <Button onClick={() => {
													this.drawSamples( this.props.samples );
												}}>
													Draw {this.props.samples} Samples
												</Button>
										}
										<Button onClick={this.clear.bind( this )}>
											Clear
										</Button>
									</ButtonGroup>
								</Panel> : null
							}
							<Panel header="Statistics">
								Number of confidence intervals covering the population {center} of
								&nbsp;<TeX raw={roundn( this.state.trueMean, -3 )} />: <br />
								<TeX raw={`\\text{Covering population ${center}: }${this.state.nTrapped} \\text{ out of } ${nobs}`} displayMode />
								{ this.state.errorBars.length > 0 ?
									<Fragment>
										<TeX raw={`\\text{Coverage: }${roundn( this.state.nTrapped / nobs, -3 )}\\%`} displayMode />
										<TeX raw={`\\text{Interval above population ${center}: }${this.state.nHigher}`} displayMode />
										<TeX raw={`\\text{Interval below population ${center}: }${this.state.nLower}`} displayMode />
									</Fragment> : null }
							</Panel>
						</Col>
					</Row> :
					<Alert variant="info" style={{ fontSize: 24 }}>
						Please sample from either a numeric variable or a categorical variable with two categories.
					</Alert>
				}
			</Container>
		);
	}
}


// PROPERTIES //

ConfidenceCoverageSample.propTypes = {
	data: PropTypes.array.isRequired,
	samples: PropTypes.oneOfType([ PropTypes.arrayOf( PropTypes.number ), PropTypes.number ]),
	variables: PropTypes.array.isRequired
};

ConfidenceCoverageSample.defaultProps = {
	samples: 25
};


// EXPORTS //

export default ConfidenceCoverageSample;
