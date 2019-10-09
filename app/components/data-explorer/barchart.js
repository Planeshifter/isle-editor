// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import SelectInput from 'components/input/select';
import Plotly from 'components/plotly';
import RShell from 'components/r/shell';
import CheckboxInput from 'components/input/checkbox';
import objectKeys from '@stdlib/utils/keys';
import countBy from '@stdlib/utils/count-by';
import identity from '@stdlib/utils/identity-function';
import randomstring from 'utils/randomstring/alphanumeric';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import isNull from '@stdlib/assert/is-null';
import { DATA_EXPLORER_SHARE_BARCHART, DATA_EXPLORER_BARCHART } from 'constants/actions.js';
import QuestionButton from './question_button.js';
import by from './by.js';


// VARIABLES //

const DESCRIPTION = 'A bar chart is a graph that displays categorical data as rectangular bars with the bar heights being proportional to the frequency of each category. When grouping by a second variable, the bar chart becomes a grouped bar chart, in which multiple bars are shown for each category. An alternative would be to stack the bars on top of each other; in this case, the chart is called a stacked bar chart.';


// FUNCTIONS //


export function generateBarchartConfig({ data, variable, group, horiz, stackBars, relative, totalPercent, xOrder }) {
	let traces;
	let transforms;
	if ( xOrder ) {
		let order;
		if ( xOrder === 'Ascending Y' ) {
			order = 'ascending';
		} else {
			order = 'descending';
		}
		transforms = [{
			type: 'sort',
			target: horiz ? 'x' : 'y',
			order: order
		}];
	}
	const nObs = data[ variable ].length;
	if ( !group ) {
		let freqs = countBy( data[ variable ], identity );
		const categories = variable.categories || objectKeys( freqs );
		const counts = new Array( categories.length );
		for ( let i = 0; i < categories.length; i++ ) {
			counts[ i ] = freqs[ categories[ i ] ];
		}
		if ( totalPercent ) {
			// faster than map
			for ( let i = 0; i < counts.length; i++ ) {
				counts[ i ] = counts[ i ] / nObs;
			}
		}
		if ( horiz ) {
			traces = [ {
				y: categories,
				x: counts,
				type: 'bar',
				orientation: 'h',
				transforms: transforms
			} ];
		} else {
			traces = [ {
				y: counts,
				x: categories,
				type: 'bar',
				transforms: transforms
			} ];
		}
	} else {
		let freqs = by( data[ variable ], data[ group ], arr => {
			return countBy( arr, identity );
		});
		traces = [];
		const keys = group.categories || objectKeys( freqs );
		if ( relative ) {
			var catCounts = countBy( data[ variable ], identity );
			for ( let i = 0; i < keys.length; i++ ) {
				const key = keys[ i ];
				const val = freqs[ key ];
				const categories = variable.categories || objectKeys( val );
				const counts = new Array( categories.length );
				for ( let i = 0; i < categories.length; i++ ) {
					counts[ i ] = val[ categories[ i ] ] / catCounts[ categories[ i ] ];
				}
				if ( totalPercent ) {
					// faster than map
					for ( let i = 0; i < counts.length; i++ ) {
						counts[ i ] = counts[ i ] / nObs;
					}
				}
				if ( horiz ) {
					traces.push({
						y: categories,
						x: counts,
						type: 'bar',
						name: key,
						orientation: 'h'
					});
				} else {
					traces.push({
						y: counts,
						x: categories,
						type: 'bar',
						name: key
					});
				}
			}
		} else {
			for ( let i = 0; i < keys.length; i++ ) {
				const key = keys[ i ];
				const val = freqs[ key ];
				const categories = variable.categories || objectKeys( val );
				const counts = new Array( categories.length );
				for ( let i = 0; i < categories.length; i++ ) {
					counts[ i ] = val[ categories[ i ] ];
				}
				if ( totalPercent ) {
					// faster than map
					for ( let i = 0; i < counts.length; i++ ) {
						counts[ i ] = counts[ i ] / nObs;
					}
				}
				if ( horiz ) {
					traces.push({
						y: categories,
						x: counts,
						type: 'bar',
						name: key,
						orientation: 'h'
					});
				} else {
					traces.push({
						y: counts,
						x: categories,
						type: 'bar',
						name: key
					});
				}
			}
		}
	}
	return {
		data: traces,
		layout: {
			barmode: stackBars ? 'stack' : null,
			xaxis: {
				title: variable
			},
			yaxis: {
				title: totalPercent ? 'Percentage' : 'Count'
			},
			title: group ? `${variable} given ${group}` : variable
		}
	};
}


// MAIN //

class Barchart extends Component {
	constructor( props ) {
		super( props );

		const { variables, defaultValue } = props;
		this.state = {
			xVar: defaultValue || variables[ 0 ],
			groupVar: null,
			horiz: false,
			stackBars: false,
			relative: false,
			totalPercent: false,
			xOrder: null,
			showRModal: false
		};
	}

	generateBarchart() {
		const { xVar, groupVar } = this.state;
		const config = generateBarchartConfig(
			{
				data: this.props.data,
				variable: xVar,
				group: groupVar,
				...this.state
			});
		const plotId = randomstring( 6 );
		const action = {
			xVar, groupVar, plotId
		};
		const output = {
			variable: xVar,
			type: 'Chart',
			value: <Plotly
				editable draggable id={plotId} fit data={config.data}
				layout={config.layout}
				meta={action}
				onShare={() => {
					this.props.session.addNotification({
						title: 'Plot shared.',
						message: 'You have successfully shared your plot.',
						level: 'success',
						position: 'tr'
					});
					this.props.logAction( DATA_EXPLORER_SHARE_BARCHART, action );
				}}
				onSelected={( selected ) => {
					this.props.onSelected( xVar, selected );
				}}
			/>
		};
		this.props.logAction( DATA_EXPLORER_BARCHART, action );
		this.props.onCreated( output );
	}

	toggleRModal = () => {
		this.setState({
			showRModal: true
		});
	}

	generateRModal = () => {
		var preCode = [''];
		const nameReg = /\_(.*?).\w+/;
		const dataNameWUnderscore = nameReg.exec(this.props.url)[0]; // captures including the _, need to remove it
		const dataName = dataNameWUnderscore.substring(1, dataNameWUnderscore.length);
		if ( !isNull( this.props.url ) ) {
			preCode = [`${dataName} <- data.frame(jsonlite::fromJSON("${this.props.url}"))`, `attach(${dataName})`];
		}
		var RCode = '';
		// in ggplot2 functionality
		RCode += `ggplot(data = ${dataName}, aes(x = ${this.state.xVar}`;
		// do the fill
		if ( !isUndefinedOrNull(this.state.groupVar) ) {
			if ( this.state.totalPercent ) {
				RCode += `, fill = ${this.state.groupVar})) + geom_bar(aes(y = ..count../sum(..count..)), position="dodge")`;
			} else {
				RCode += `, fill = ${this.state.groupVar})) + geom_bar(aes(y = ..count..), position="dodge")`;
			}
		}

		if ( this.state.horiz ) {
			RCode += ' + coord_flip()';
		}

		// TO-DO: investiage the lattice::barplot function to group-by, see https://stackoverflow.com/questions/17721126/simplest-way-to-do-grouped-barplot

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
						libraries={['jsonlite']}
						resettable
					/>
				</Modal.Body>
			</Modal>
		);
	}

	render() {
		let modal = null;
		if ( this.state.showRModal ) {
			modal = this.generateRModal();
		}
		return (
			<Card>
				<Card.Header as="h4">
					Bar Chart
					<QuestionButton title="Bar Chart" content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					<SelectInput
						legend="Variable:"
						defaultValue={this.state.xVar}
						options={this.props.variables}
						onChange={( value )=>{
							this.setState({
								xVar: value
							});
						}}
					/>
					<SelectInput
						legend="Group By:"
						defaultValue={this.state.groupVar}
						options={this.props.groupingVariables}
						clearable={true}
						menuPlacement="top"
						onChange={( value )=>{
							this.setState({
								groupVar: value
							});
						}}
					/>
					<SelectInput
						legend="Order X Axis:"
						defaultValue={this.state.xOrder}
						disabled={isUndefinedOrNull( this.state.groupVar )}
						options={['Ascending Y', 'Descending Y']}
						clearable={true}
						menuPlacement="top"
						onChange={( value )=>{
							this.setState({
								xOrder: value
							});
						}}
					/>
					<CheckboxInput
						legend="Display Percentages"
						defaultValue={this.state.totalPercent}
						onChange={( value )=>{
							this.setState({
								totalPercent: value
							});
						}}
						disabled={this.state.stackBars & this.state.relative}
						style={{
							opacity: this.state.stackBars & this.state.relative ? 0.2 : 1
						}}
					/>
					<CheckboxInput
						legend="Horizontal Alignment"
						defaultValue={this.state.horiz}
						onChange={( value )=>{
							this.setState({
								horiz: value
							});
						}}
					/>
					<CheckboxInput
						legend="Stack bars"
						defaultValue={this.state.stackBars}
						onChange={( value )=>{
							this.setState({
								stackBars: value
							});
						}}
						disabled={!this.state.groupVar}
						style={{
							opacity: this.state.groupVar ? 1.0 : 0.2
						}}

					/>
					<CheckboxInput
						legend="Relative frequencies for each bar"
						defaultValue={this.state.relative}
						onChange={( value )=>{
							this.setState({
								relative: value
							});
						}}
						disabled={(!this.state.stackBars) || (this.state.stackBars & this.state.totalPercent)}
						style={{
							opacity: (!this.state.stackBars) || (this.state.stackBars & this.state.totalPercent) ? 0.2 : 1
						}}
					/>
					<Button variant="primary" block onClick={this.generateBarchart.bind( this )}>Generate</Button>
					<Button variant="light" onClick={this.toggleRModal} disabled={isNull(this.props.url)}>Show R Code</Button>
				</Card.Body>
				{modal}
			</Card>
		);
	}
}


// PROPERTIES //

Barchart.defaultProps = {
	defaultValue: null,
	groupingVariables: null,
	logAction() {},
	onCreated() {},
	onSelected() {},
	session: {},
	url: null
};

Barchart.propTypes = {
	data: PropTypes.object.isRequired,
	defaultValue: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onCreated: PropTypes.func,
	onSelected: PropTypes.func,
	session: PropTypes.object,
	variables: PropTypes.array.isRequired,
	url: PropTypes.string
};


// EXPORTS //

export default Barchart;
