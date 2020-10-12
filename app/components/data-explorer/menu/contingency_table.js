// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import NumberInput from 'components/input/number';
import ContingencyTable from 'components/tables/contingency-table';
import { DATA_EXPLORER_CONTINGENCY_TABLE } from 'constants/actions.js';
import QuestionButton from './../question_button.js';


// VARIABLES //

const debug = logger( 'isle:data-explorer:contingency-table' );
const DESCRIPTION = 'A contingency table displays either the raw absolute or relative frequencies of two categorical variable\'s values alongside their row and column totals.';


// MAIN //

class ContingencyTableMenu extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			relativeFreqs: false,
			rowVar: props.defaultRowVar || props.variables[ 0 ],
			colVar: props.defaultColVar || props.variables[ 1 ],
			group: null, // eslint-disable-line react/no-unused-state
			nDecimalPlaces: 3,
			variables: props.variables,
			display: []
		};
	}

	static getDerivedStateFromProps( props, state ) {
		if ( props.variables.length !== state.variables.length ) {
			debug( 'Available variables have changed...' );
			return {
				rowVar: props.defaultRowVar || props.variables[ 0 ],
				colVar: props.defaultColVar || props.variables[ 1 ],
				variables: props.variables
			};
		}
		return null;
	}

	generateContingencyTable() {
		const { rowVar, colVar, group, relativeFreqs, nDecimalPlaces, display } = this.state;
		if ( !rowVar || !colVar ) {
			return this.props.session.addNotification({
				title: 'Select Variables',
				message: 'You need to select a row and column variable for the contingency table',
				level: 'warning',
				position: 'tr'
			});
		}
		const output = <ContingencyTable
			rowVar={rowVar}
			colVar={colVar}
			group={group}
			relativeFreqs={relativeFreqs}
			nDecimalPlaces={nDecimalPlaces}
			display={display}
			data={this.props.data}
		/>;
		this.props.logAction( DATA_EXPLORER_CONTINGENCY_TABLE, {
			rowVar, colVar, group, relativeFreqs, display
		});
		this.props.onCreated( output );
	}

	render() {
		const { variables, groupingVariables } = this.props;
		return (
			<Card>
				<Card.Header as="h4">
					Contingency Table
					<QuestionButton title="Contingency Table" content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					<SelectInput
						legend="Row Variable:"
						defaultValue={this.state.rowVar}
						options={variables}
						onChange={( value )=>{
							this.setState({
								rowVar: value
							});
						}}
					/>
					<SelectInput
						legend="Column Variable:"
						defaultValue={this.state.colVar}
						options={variables}
						onChange={( value )=>{
							this.setState({
								colVar: value
							});
						}}
					/>
					<SelectInput
						legend="Group By:"
						options={groupingVariables}
						clearable={true}
						menuPlacement="top"
						onChange={( value )=>{
							this.setState({
								group: value // eslint-disable-line react/no-unused-state
							});
						}}
						tooltip="Generate a contingency table for each category of a chosen grouping variable"
					/>
					<CheckboxInput
						legend="Relative Frequency"
						defaultValue={false}
						onChange={() => {
							this.setState({
								relativeFreqs: !this.state.relativeFreqs
							});
						}}
					/>
					<SelectInput
						legend="Display:"
						options={['Row Percent', 'Column Percent']}
						multi
						onChange={( display ) => {
							this.setState({
								display: display ? display : []
							});
						}}
					/>
					{ this.state.relativeFreqs || this.state.display.length > 0 ? <p>Report relative frequencies to
						<NumberInput
							inline
							width={50}
							max={16}
							min={0}
							defaultValue={this.state.nDecimalPlaces}
							onChange={( value ) => {
								this.setState({
									nDecimalPlaces: value
								});
							}}
						/>
						decimal place(s).
					</p> : null }
					<Button variant="primary" block onClick={this.generateContingencyTable.bind( this )}>Generate</Button>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

ContingencyTableMenu.defaultProps = {
	defaultRowVar: null,
	defaultColVar: null,
	groupingVariables: null,
	logAction() {},
	session: {}
};

ContingencyTableMenu.propTypes = {
	data: PropTypes.object.isRequired,
	defaultColVar: PropTypes.string,
	defaultRowVar: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	session: PropTypes.object,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default ContingencyTableMenu;
