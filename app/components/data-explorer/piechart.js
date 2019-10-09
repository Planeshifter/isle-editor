// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import Plotly from 'components/plotly';
import RShell from 'components/r/shell';
import randomstring from 'utils/randomstring/alphanumeric';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import objectKeys from '@stdlib/utils/keys';
import countBy from '@stdlib/utils/count-by';
import identity from '@stdlib/utils/identity-function';
import floor from '@stdlib/math/base/special/floor';
import ceil from '@stdlib/math/base/special/ceil';
import { DATA_EXPLORER_SHARE_PIECHART, DATA_EXPLORER_PIECHART } from 'constants/actions.js';
import QuestionButton from './question_button.js';
import by from './by.js';


// VARIABLES //

const DESCRIPTION = 'Statistical display for categorical data. The arc length of each slice in the pie is proportional to the quantity of the respective category. An alternative display for categorical data is a bar chart.';


// FUNCTIONS //

export function generatePiechartConfig({ data, variable, group }) {
	let annotations;
	let traces;
	if ( !group ) {
		const freqs = countBy( data[ variable ], identity );
		const categories = variable.categories || objectKeys( freqs );
		const counts = new Array( categories.length );
		for ( let i = 0; i < categories.length; i++ ) {
			counts[ i ] = freqs[ categories[ i ] ];
		}
		traces = [ {
			values: counts,
			labels: categories,
			type: 'pie'
		} ];
	} else {
		const freqs = by( data[ variable ], data[ group ], arr => {
			return countBy( arr, identity );
		});
		const keys = group.categories || objectKeys( freqs );
		const nPlots = keys.length;
		const nRows = ceil( nPlots / 2 );
		const nCols = 2;
		traces = [];
		annotations = [];

		for ( let i = 0; i < keys.length; i++ ) {
			const key = keys[ i ];
			const row = floor( i / nCols );
			const col = i - ( row*nCols );
			const val = freqs[ key ];
			const categories = variable.categories || objectKeys( val );
			const counts = new Array( categories.length );
			for ( let i = 0; i < categories.length; i++ ) {
				counts[ i ] = val[ categories[ i ] ];
			}
			traces.push({
				values: counts,
				labels: categories,
				type: 'pie',
				name: key,
				domain: {
					x: [ ( col ) / nCols, ( col+1 ) / nCols ],
					y: [ ( row ) / nRows, ( row+0.8 ) / nRows ]
				}
			});
			annotations.push({
				text: key,
				x: ( col % 2 ? col+0.8 : col+0.2 ) / nCols,
				y: ( row+0.9 ) / nRows,
				font: {
					size: 18
				},
				showarrow: false
			});
		}
	}
	const layout = {
		annotations,
		title: group ? `${variable} given ${group}` : variable
	};
	return {
		layout,
		data: traces
	};
}


// MAIN //

class PieChart extends Component {
	constructor( props ) {
		super( props );
	}

	generatePiechart( variable, group ) {
		const config = generatePiechartConfig({ data: this.props.data, variable, group });
		const plotId = randomstring( 6 );
		const action = {
			variable, group, plotId
		};
		const output = {
			variable: variable,
			type: 'Chart',
			value: <Plotly
				editable
				draggable
				id={plotId}
				fit
				meta={action}
				data={config.data}
				layout={config.layout}
				onShare={() => {
					this.props.session.addNotification({
						title: 'Plot shared.',
						message: 'You have successfully shared your plot.',
						level: 'success',
						position: 'tr'
					});
					this.props.logAction( DATA_EXPLORER_SHARE_PIECHART, action );
				}}
			/>
		};
		this.props.logAction( DATA_EXPLORER_PIECHART, action );
		this.props.onCreated( output );
	}

	toggleRModal = () => {
		this.setState({
			showRModal: true
		});
	}

	generateRModal = () => {
		// handle the prepended code first --> array of commands
		// https://isle.heinz.cmu.edu/demonstrations_youtube.json
		/*
		https://phd-serv5.heinz.cmu.edu/ocpu/library/';
		*/
		var preCode = [''];
		const nameReg = /\_(.*?).\w+/;
		const dataNameWUnderscore = nameReg.exec(this.props.url)[0]; // captures including the _, need to remove it
		const dataName = dataNameWUnderscore.substring(1, dataNameWUnderscore.length);
		if ( !isUndefinedOrNull( this.props.url ) ) {
			preCode = [`${dataName} <- data.frame(jsonlite::fromJSON("${this.props.url}"))`, `attach(${dataName})`];
		}

		let RCode = '';
		RCode += `ggplot(data = ${dataName}, aes(x = factor(1), fill = ${this.state.variable}))`;
		RCode += ' + geom_bar(width = 1) + coord_polar("y")';

		return (
			<Modal
				className="Lesson input"
				dialogClassName="modal-40w"
				show={this.state.showRModal}
				onHide={
					()=>{
						this.setState({
							showRModal: false
						});
				}}>
				<Modal.Header closeButton>
					<Modal.Title>
						R Code
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<RShell
						prependCode={preCode}
						code={RCode}
						libraries={['jsonlite', 'ggplot2']}
						resettable
					/>
				</Modal.Body>
			</Modal>
		);
	}

	render() {
		const { variables, defaultValue, groupingVariables } = this.props;
		return (
			<Dashboard
				title={<span>Pie Chart<QuestionButton title="Pie Chart" content={DESCRIPTION} /></span>}
				autoStart={false}
				onGenerate={this.generatePiechart.bind( this )}
			>
				<SelectInput
					legend="Variable:"
					defaultValue={defaultValue || variables[ 0 ]}
					options={variables}
				/>
				<SelectInput
					legend="Group By:"
					options={groupingVariables}
					clearable={true}
					menuPlacement="top"
				/>
			</Dashboard>
		);
	}
}


// DEFAULT PROPERTIES //

PieChart.defaultProps = {
	defaultValue: null,
	groupingVariables: null,
	logAction() {},
	session: {},
	showRCode: false
};


// PROPERTIES //

PieChart.propTypes = {
	data: PropTypes.object.isRequired,
	defaultValue: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	session: PropTypes.object,
	showRCode: PropTypes.bool,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default PieChart;
