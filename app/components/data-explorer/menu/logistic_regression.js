// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniq from 'uniq';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import isArray from '@stdlib/assert/is-array';
import contains from '@stdlib/assert/contains';
import copy from '@stdlib/utils/copy';
import SelectInput from 'components/input/select';
import CheckboxInput from 'components/input/checkbox';
import { DATA_EXPLORER_LOGISTIC_REGRESSION } from 'constants/actions.js';
import extractCategoriesFromValues from 'utils/extract-categories-from-values';
import LogisticRegression from 'components/models/logistic-regression';
import QuestionButton from './../question_button.js';


// VARIABLES //

const DESCRIPTION = 'Predict a categorical response variable using one or more explanatory variables.';


// MAIN //

class LogisticRegressionMenu extends Component {
	constructor( props ) {
		super( props );

		let categories;
		let y;
		let success;
		if ( isArray( props.categorical ) && props.categorical.length > 0 ) {
			y = props.categorical[ 0 ];
			categories = extractCategoriesFromValues( props.data[ y ], y );
			success = categories[ categories.length-1 ];
		} else {
			categories = [];
			success = null;
		}
		this.state = {
			categories,
			y,
			success,
			x: props.quantitative[ 0 ],
			intercept: true,
			omitMissing: false
		};
	}

	compute = () => {
		const { y, success, x, intercept, omitMissing } = this.state;
		const output = <LogisticRegression
			data={this.props.data}
			x={x} y={y}
			success={success}
			intercept={intercept}
			omitMissing={omitMissing}
			quantitative={this.props.quantitative}
			onPredict={( yhat, probs, resid, counter ) => {
				const newData = copy( this.props.data, 1 );
				const newQuantitative = this.props.quantitative.slice();
				const newCategorical = this.props.categorical.slice();
				let name = 'probs_logis' + counter;
				newData[ name ] = probs;
				if ( !contains( newQuantitative, name ) ) {
					newQuantitative.push( name );
				}
				name = 'pred_logis' + counter;
				newData[ name ] = yhat;
				if ( !contains( newCategorical, name ) ) {
					newCategorical.push( name );
				}
				name = 'resid_logis' + counter;
				if ( !contains( newQuantitative, name ) ) {
					newQuantitative.push( name );
				}
				newData[ name ] = resid;
				this.props.onGenerate( newQuantitative, newCategorical, newData );
			}}
		/>;
		this.props.logAction( DATA_EXPLORER_LOGISTIC_REGRESSION, {
			y, x, intercept
		});
		this.props.onCreated( output );
	}

	render() {
		const { categorical, quantitative, data } = this.props;
		const { x, y, categories, success, intercept } = this.state;
		return (
			<Card
				style={{ fontSize: '14px', maxWidth: 500 }}
			>
				<Card.Header as="h4">
					{this.props.t('Logistic Regression')}<QuestionButton title={this.props.t('Logistic Regression')} content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					<Row>
						<Col md={6}>
							<SelectInput
								legend="Outcome (Y):"
								options={categorical}
								defaultValue={y}
								onChange={( y ) => {
									const categories = extractCategoriesFromValues( data[ y ], y );
									this.setState({
										categories,
										success: categories[ categories.length-1 ],
										y
									});
								}}
							/>
						</Col>
						<Col md={6}>
							<SelectInput
								legend="Success (Y = 1):"
								defaultValue={success}
								options={categories}
								onChange={( value ) => {
									this.setState({
										success: value
									});
								}}
							/>
						</Col>
					</Row>
					<SelectInput
						legend="Predictors (X):" multi
						options={uniq( quantitative.concat( categorical ) )}
						defaultValue={x || ''}
						onChange={( x ) => this.setState({ x })}
						closeMenuOnSelect={false}
						selectAllOption
					/>
					<CheckboxInput
						legend="Include intercept?"
						defaultValue={intercept}
						onChange={( intercept ) => this.setState({ intercept })}
					/>
					<CheckboxInput
						legend={this.props.t('omit-missing')}
						defaultValue={false}
						onChange={( omitMissing ) => this.setState({ omitMissing })}
					/>
					<Button disabled={!x || x.length === 0} variant="primary" block onClick={this.compute}>
						{this.props.t('calculate')}
					</Button>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

LogisticRegressionMenu.defaultProps = {
	logAction() {}
};

LogisticRegressionMenu.propTypes = {
	categorical: PropTypes.array.isRequired,
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onGenerate: PropTypes.func.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default LogisticRegressionMenu;
