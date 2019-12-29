// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ttest2 from '@stdlib/stats/ttest2';
import ztest2 from '@stdlib/stats/ztest2';
import replace from '@stdlib/string/replace';
import bifurcateBy from '@stdlib/utils/bifurcate-by';
import stdev from 'utils/statistic/stdev';
import NumberInput from 'components/input/number';
import SelectInput from 'components/input/select';
import TeX from 'components/tex';
import { DATA_EXPLORER_TESTS_TWO_SAMPLE_ZTEST } from 'constants/actions.js';
import QuestionButton from './question_button.js';
import getBinaryVars from './get_binary_vars.js';


// VARIABLES //

const RE_ONESIDED_SMALLER = /\d{2}% confidence interval: \[-Infinity,[\d.]+\]/;
const RE_ONESIDED_GREATER = /\d{2}% confidence interval: \[[\d.]+,Infinity\]/;
const DESCRIPTION = 'A test for equality of means across two groups.';


// MAIN //

class MeanTest2 extends Component {
	constructor( props ) {
		super( props );

		const xvar = props.quantitative[ 0 ];
		this.state = {
			xvar,
			grouping: null,
			yvar: null,
			diff: 0,
			direction: 'two-sided',
			alpha: 0.05,
			type: 'T Test',
			xstdev: null,
			ystdev: null,
			xvalues: props.data[ xvar ],
			yvalues: null,
			firstCategory: null,
			secondCategory: null
		};
	}

	calculateTwoSampleZTest = () => {
		const { xvar, grouping, yvar, diff, direction, alpha, type, xstdev, ystdev, firstCategory, secondCategory } = this.state;
		const { showDecision } = this.props;
		const x = this.state.xvalues;
		const y = this.state.yvalues;
		let value;

		if ( grouping ) {
			let result;
			if ( type === 'Z Test' ) {
				result = ztest2( x, y, xstdev, ystdev, {
					'alpha': alpha,
					'alternative': direction,
					'difference': diff
				});
			} else {
				result = ttest2( x, y, {
					'alpha': alpha,
					'alternative': direction,
					'difference': diff
				});
			}
			let arrow = '\\ne';
			if ( direction === 'less' ) {
				arrow = '<';
			} else if ( direction === 'greater' ){
				arrow = '>';
			}
			let printout = result.print({
				decision: showDecision
			});
			printout = replace( printout, RE_ONESIDED_SMALLER, '' );
			printout = replace( printout, RE_ONESIDED_GREATER, '' );
			value = <div style={{ overflowX: 'auto', width: '100%' }}>
				<span className="title" >Hypothesis test for {xvar} between {grouping}:</span>
				<TeX
					displayMode
					raw={`H_0: \\mu_{\\text{${grouping}:${firstCategory}}} - \\mu_{\\text{${grouping}:${secondCategory}}} = ${diff}`}
					tag=""
				/>
				<span> vs. </span>
				<TeX
					displayMode
					raw={`H_1: \\mu_{\\text{${grouping}:${firstCategory}}} - \\mu_{\\text{${grouping}:${secondCategory}}} ${arrow} ${diff}`}
					tag="" />
				<pre>
					{printout}
				</pre>
			</div>;
		} else if ( yvar ) {
			let result;
			if ( type === 'Z Test' ) {
				result = ztest2( x, y, xstdev, ystdev, {
					'alpha': alpha,
					'alternative': direction,
					'difference': diff
				});
			} else {
				result = ttest2( x, y, {
					'alpha': alpha,
					'alternative': direction,
					'difference': diff
				});
			}
			let arrow = '\\ne';
			if ( direction === 'less' ) {
				arrow = '<';
			} else if ( direction === 'greater' ){
				arrow = '>';
			}
			let printout = result.print({
				decision: showDecision
			});
			printout = replace( printout, RE_ONESIDED_SMALLER, '' );
			printout = replace( printout, RE_ONESIDED_GREATER, '' );
			value = <div style={{ overflowX: 'auto', width: '100%' }}>
				<label>Hypothesis test for {xvar} against {yvar}:</label>
				<TeX
					displayMode
					raw={`H_0: \\mu_{${xvar}} - \\mu_{${yvar}} = ${diff}`}
					tag=""
				/>
				<span>vs.</span>
				<TeX
					displayMode
					raw={`\\; H_1: \\mu_{${xvar}} - \\mu_{${yvar}} ${arrow} ${diff}`}
					tag=""
				/>
				<pre>
					{printout}
				</pre>
			</div>;
		} else {
			this.props.session.addNotification({
				title: 'Action required',
				message: `Please select either a grouping variable or a second variable to compare ${xvar} against.`,
				level: 'warning',
				position: 'tr'
			});
		}
		if ( value ) {
			const output = {
				variable: 'Two-Sample Z-Test',
				type: 'Test',
				value: value
			};
			this.props.logAction( DATA_EXPLORER_TESTS_TWO_SAMPLE_ZTEST, {
				xvar, grouping, yvar, diff, direction, alpha
			});
			this.props.onCreated( output );
		}
	}

	renderInputs() {
		const { quantitative, categorical, data } = this.props;
		const binary = getBinaryVars( categorical, data );
		return ( <Fragment>
			<SelectInput
				legend="Type of Test:"
				defaultValue={this.state.type}
				options={[ 'T Test', 'Z Test' ]}
				onChange={( value ) => {
					this.setState({
						type: value
					});
				}}
			/>
			<SelectInput
				legend="Variable:"
				defaultValue={this.state.xvar}
				options={quantitative}
				onChange={( xvar ) => {
					if ( this.state.grouping ) {
						const categories = data[ this.state.grouping ];
						let firstCategory = categories[ 0 ];
						let secondCategory;
						for ( let i = 1; i < categories.length; i++ ) {
							if ( categories[ i ] !== firstCategory ) {
								secondCategory = categories[ i ];
								break;
							}
						}
						const splitted = bifurcateBy( data[ this.state.xvar ], function splitter( x, idx ) {
							return categories[ idx ] === firstCategory;
						});
						const xvalues = splitted[ 0 ];
						const yvalues = splitted[ 1 ];
						this.setState({
							yvar: null,
							xvalues,
							yvalues,
							firstCategory,
							secondCategory,
							xstdev: stdev( xvalues ),
							ystdev: stdev( yvalues )
						});
					}
					else if ( this.state.yvar ) {
						const x = data[ xvar ];
						const y = data[ this.state.yvar ];
						this.setState({
							xvalues: x,
							yvalues: y,
							xvar,
							grouping: null,
							xstdev: stdev( x ),
							ystdev: stdev( y )
						});
					}
					else {
						this.setState({
							xvar
						});
					}
				}}
			/>
			<Row>
				<Col md={5}>
					<SelectInput
						legend="Groups:"
						options={binary}
						defaultValue={this.state.grouping}
						clearable
						onChange={( grouping ) => {
							if ( !grouping ) {
								return this.setState({
									yvar: null,
									grouping
								});
							}
							const categories = data[ grouping ];
							let firstCategory = categories[ 0 ];
							let secondCategory;
							for ( let i = 1; i < categories.length; i++ ) {
								if ( categories[ i ] !== firstCategory ) {
									secondCategory = categories[ i ];
									break;
								}
							}
							const splitted = bifurcateBy( data[ this.state.xvar ], function splitter( x, idx ) {
								return categories[ idx ] === firstCategory;
							});
							const xvalues = splitted[ 0 ];
							const yvalues = splitted[ 1 ];
							this.setState({
								grouping,
								yvar: null,
								xvalues,
								yvalues,
								firstCategory,
								secondCategory,
								xstdev: stdev( xvalues ),
								ystdev: stdev( yvalues )
							});
						}}
					/>
				</Col>
				<Col md={2}>
					<p>OR</p>
				</Col>
				<Col md={5}>
					<SelectInput
						legend="Second Variable:"
						options={quantitative}
						defaultValue={this.state.yvar}
						clearable
						onChange={( yvar ) => {
							if ( !yvar ) {
								return this.setState({
									yvar,
									grouping: null
								});
							}
							const x = data[ this.state.xvar ];
							const y = data[ yvar ];
							this.setState({
								xvalues: x,
								yvalues: y,
								yvar,
								grouping: null,
								xstdev: stdev( x ),
								ystdev: stdev( y )
							});
						}}
					/>
				</Col>
			</Row>
			{ this.state.type === 'Z Test' ?
				<Row>
					<Col>
						<NumberInput
							legend="1st Standard Deviation"
							defaultValue={this.state.xstdev || 1}
							step="any"
							min={0}
							onChange={( value ) => {
								this.setState({
									xstdev: value
								});
							}}
						/>
					</Col>
					<Col>
						<NumberInput
							legend="2nd Standard Deviation"
							defaultValue={this.state.ystdev || 1}
							step="any"
							min={0}
							onChange={( value ) => {
								this.setState({
									ystdev: value
								});
							}}
							tooltipPlacement="top"
						/>
					</Col>
				</Row>: null
			}
			<Row>
				<Col>
					<NumberInput
						legend="Difference under H0"
						defaultValue={this.state.diff}
						step="any"
						onChange={( value ) => {
							this.setState({
								diff: value
							});
						}}
					/>
				</Col>
				<Col>
					<NumberInput
						legend={<span>Significance level <TeX raw="\alpha" /></span>}
						defaultValue={this.state.alpha}
						min={0.0}
						max={1.0}
						step="any"
						onChange={( value ) => {
							this.setState({
								alpha: value
							});
						}}
						tooltipPlacement="bottom"
					/>
				</Col>
			</Row>
			<SelectInput
				legend="Direction:"
				defaultValue={this.state.direction}
				options={[ 'less', 'greater', 'two-sided' ]}
				onChange={( value ) => {
					this.setState({
						direction: value
					});
				}}
				menuPlacement="top"
			/>
		</Fragment> );
	}

	render() {
		return (
			<Card
				style={{ fontSize: '14px' }}
			>
				<Card.Header as="h4">
					Two-Sample Mean Test
					<QuestionButton title="Two-Sample Mean Test" content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					{this.renderInputs()}
					<Button variant="primary" block onClick={this.calculateTwoSampleZTest}>Calculate</Button>
				</Card.Body>
			</Card>
		);
	}
}


// DEFAULT PROPERTIES //

MeanTest2.defaultProps = {
	categorical: null,
	logAction() {},
	session: {},
	showDecision: true
};


// PROPERTIES //

MeanTest2.propTypes = {
	categorical: PropTypes.array,
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	session: PropTypes.object,
	showDecision: PropTypes.bool
};


// EXPORTS //

export default MeanTest2;
