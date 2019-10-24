// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import uniq from 'uniq';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import ndarray from '@stdlib/ndarray/array';
import contains from '@stdlib/assert/contains';
import copy from '@stdlib/utils/copy';
import isArray from '@stdlib/assert/is-array';
import roundn from '@stdlib/math/base/special/roundn';
import abs from '@stdlib/math/base/special/abs';
import pnorm from '@stdlib/stats/base/dists/normal/cdf';
import SelectInput from 'components/input/select';
import CheckboxInput from 'components/input/checkbox';
import Tooltip from 'components/tooltip';
import { DATA_EXPLORER_LOGISTIC_REGRESSION } from 'constants/actions.js';
import subtract from 'utils/subtract';
import QuestionButton from './question_button.js';
import irls from './glm/logistic_regression.js';


// VARIABLES //

const DESCRIPTION = 'Predict a categorical response variable using one or more explanatory variables.';
let COUNTER = 0;


// FUNCTIONS //

function designMatrix( x, data, quantitative, intercept ) {
	const predictors = [];
	const hash = {};
	const nobs = data[ x[ 0 ] ].length;
	for ( let j = 0; j < x.length; j++ ) {
		const values = data[ x[ j ] ];
		if ( contains( quantitative, x[ j ] ) ) {
			predictors.push( x[ j ] );
		} else {
			const categories = x[ j ].categories || uniq( values.slice() );
			for ( let k = intercept ? 1 : 0; k < categories.length; k++ ) {
				predictors.push( `${x[ j ]}_${categories[ k ]}` );
			}
			hash[ x[ j ] ] = categories;
		}
	}
	const buffer = new Float64Array( nobs * (predictors.length+1) );
	for ( let i = 0; i < nobs; i++ ) {
		if ( intercept ) {
			buffer[ (predictors.length+1)*i ] = 1;
		}
		let colIndex = 0;
		for ( let j = 0; j < x.length; j++ ) {
			const values = data[ x[ j ] ];
			if ( contains( quantitative, x[ j ] ) ) {
				colIndex += 1;
				buffer[ (predictors.length+1)*i + colIndex ] = values[ i ];
			} else {
				const categories = hash[ x[ j ] ];
				const val = values[ i ];
				for ( let k = intercept ? 1 : 0; k < categories.length; k++ ) {
					colIndex += 1;
					buffer[ (predictors.length+1)*i + colIndex ] = ( val === categories[ k ] ) ? 1 : 0;
				}
			}
		}
	}
	const matrix = ndarray( buffer, {
		shape: [ nobs, predictors.length+1 ]
	});
	return { matrix, predictors };
}

const summaryTable = ( x, intercept, result ) => {
	return (
		<Table bordered size="sm">
			<thead>
				<tr>
					<th>Predictor</th>
					<th>Coefficient</th>
					<th>Std. Error</th>
					<th>t</th>
					<th>p-value</th>
				</tr>
			</thead>
			<tbody>
				{ intercept ? <tr>
					<th>Intercept</th>
					<td>{result.coefficients[ 0 ].toFixed( 6 )}</td>
					<td>{result.stdErrors[ 0 ].toFixed( 4 )}</td>
					<td>{( result.coefficients[ 0 ] / result.stdErrors[ 0 ] ).toFixed( 4 )}</td>
					<td>{( 2.0 * pnorm( -abs( result.coefficients[ 0 ] / result.stdErrors[ 0 ] ), 0.0, 1.0 ) ).toFixed( 4 )}</td>
				</tr> : null }
				{x.map( ( name, idx ) => {
					idx = idx + Number( intercept );
					const tStat = result.coefficients[ idx ]/ result.stdErrors[ idx ];
					const pVal = 2.0 * pnorm( -abs( tStat ), 0.0, 1.0 );
					return (
						<tr key={idx} >
							<th>{name}</th>
							<td>{result.coefficients[ idx ].toFixed( 6 )}</td>
							<td>{result.stdErrors[ idx ].toFixed( 4 )}</td>
							<td>{tStat.toFixed( 4 )}</td>
							<td>{pVal.toFixed( 4 )}</td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
};


// MAIN //

class LogisticRegression extends Component {
	constructor( props ) {
		super( props );

		let categories;
		let y;
		let success;
		if ( isArray( props.categorical ) && props.categorical.length > 0 ) {
			y = props.categorical[ 0 ];
			if ( y.categories ) {
				categories = y.categories;
			} else {
				categories = props.data[ y ].slice();
				uniq( categories );
			}
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
			probabilityThreshold: 0.5
		};
	}

	compute = () => {
		COUNTER += 1;
		let { y, success, x, intercept } = this.state;
		const yvalues = this.props.data[ y ].map( v => {
			return v === success ? 1 : 0;
		});
		const n = yvalues.length;
		if ( !isArray( x ) ) {
			x = [ x ];
		}
		const { matrix, predictors } = designMatrix( x, this.props.data, this.props.quantitative, intercept );
		const results = irls( matrix, yvalues, n );
		this.props.logAction( DATA_EXPLORER_LOGISTIC_REGRESSION, {
			y, x, intercept
		});
		const output = {
			variable: 'Regression Summary',
			type: 'Logistic Regression',
			value: <div style={{ overflowX: 'auto', width: '100%' }}>
				<span className="title" >Regression Summary for Response {y} (model id: logis{COUNTER})</span>
				{summaryTable( predictors, intercept, results )}
				<i>The algorithm {results.converged ? 'converged' : <Fragment>did <b>not</b> converge</Fragment>} after {results.iterations} Fisher Scoring iterations</i>
				<p>Akaike Information Criterion (AIC): {roundn( results.aic, -3 )}</p>
				<ButtonGroup>
					<Tooltip tooltip="Probabilities, residuals, and predicted categories (using the chosen probability threshold to be exceeded for predicting a success) will be attached to the data table">
						<Button variant="secondary" size="sm" onClick={() => {
							const { matrix } = designMatrix( x, this.props.data, this.props.quantitative, intercept );
							const probs = results.predict( matrix );
							const yvalues = this.props.data[ y ].map( v => {
								return v === success ? 1 : 0;
							});
							const resid = subtract( probs, yvalues );
							const newData = copy( this.props.data, 1 );
							const newQuantitative = this.props.quantitative.slice();
							const newCategorical = this.props.categorical.slice();

							let name = 'probs_logis' + COUNTER;
							newData[ name ] = probs;
							if ( !contains( newQuantitative, name ) ) {
								newQuantitative.push( name );
							}
							const yhat = probs.map( x => x > this.state.probabilityThreshold );
							name = 'pred_logis' + COUNTER;
							newData[ name ] = yhat;
							if ( !contains( newCategorical, name ) ) {
								newCategorical.push( name );
							}
							name = 'resid_logis' + COUNTER;
							if ( !contains( newQuantitative, name ) ) {
								newQuantitative.push( name );
							}
							newData[ name ] = resid;
							this.props.onGenerate( newQuantitative, newCategorical, newData );
						}}>Use this model to predict for currently selected data</Button>
					</Tooltip>
					<InputGroup size="sm" >
						<InputGroup.Prepend>
							<InputGroup.Text>Threshold:</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl
							type="number"
							min={0}
							max={1}
							defaultValue={0.5}
							step={0.01}
							onChange={( event ) => {
								this.setState({
									probabilityThreshold: event.target.value
								});
							}}
						/>
					</InputGroup>
			</ButtonGroup>
			</div>
		};
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
					Logistic Regression<QuestionButton title="Logistic Regression" content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					<Row>
						<Col md={6}>
							<SelectInput
								legend="Outcome (Y):"
								options={categorical}
								defaultValue={y}
								onChange={( y ) => {
									const categories = data[ y ].slice();
									uniq( categories );
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
						options={quantitative.concat( categorical )}
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
					<Button disabled={!x || x.length === 0} variant="primary" block onClick={this.compute}>Calculate</Button>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

LogisticRegression.defaultProps = {
	logAction() {}
};

LogisticRegression.propTypes = {
	categorical: PropTypes.array.isRequired,
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onGenerate: PropTypes.func.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default LogisticRegression;
