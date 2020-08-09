// MODULES //

import React, { Component, Fragment } from 'react';
import logger from 'debug';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import copy from '@stdlib/utils/copy';
import keys from '@stdlib/utils/keys';
import contains from '@stdlib/assert/contains';
import isArray from '@stdlib/assert/is-array';
import generateUID from 'utils/uid';
import HintButton from 'components/hint-button';
import ResponseVisualizer from 'components/response-visualizer';
import ChatButton from 'components/chat-button';
import Text from 'components/text';
import FeedbackButtons from 'components/feedback';
import SessionContext from 'session/context.js';
import { SELECT_QUESTION_MATRIX_SUBMISSION } from 'constants/actions.js';
import './load_translations.js';
import './select-question-matrix.css';


// VARIABLES //

const debug = logger( 'isle:select-question-matrix' );
const uid = generateUID( 'select-question-matrix' );


// MAIN //

/**
* A question with an answer consisting of multiple select boxes.
*
* @param {(node|string)} question - question to be displayed at the top of the select question matrix
* @param {Array} cols - column labels
* @param {Object} options - object with key-value pairs with keys having the form `row:col`, e.g. `0:0`, `0:1`, `1:0` etc., and their corresponding values being arrays of the possible answer choices for the individual select questions
* @param {Object} solution - solution object with key-value pairs with keys having the form `row:col`, e.g. `0:0`, `0:1`, `1:0` etc., and their corresponding values being the index of the correct answer element from the respective `options` array
* @property {Array<(string|node)>} hints - hints providing guidance on how to answer the question
* @property {string} hintPlacement - placement of the hints (either `top`, `left`, `right`, or `bottom`)
* @property {boolean} feedback - controls whether to display feedback buttons
* @property {boolean} provideFeedback - whether to provide `none` feedback at all, `individual` feedback on the submitted answer(s), or `overall` feedback for all questions
* @property {string} failureMsg - notification text displayed upon submitting incorrect answers
* @property {string} successMsg - notification text displayed upon submitting correct answers
* @property {boolean} chat - controls whether the element should have an integrated chat
* @property {string} className - class name
* @property {Object} style - CSS inline styles
* @property {Function} onSubmit - callback function invoked upon submission with the answers as a first and a boolean indicating correctness as second parameter
*/
class SelectQuestionMatrix extends Component {
	constructor( props ) {
		super( props );
		this.id = props.id || uid( props );
		this.state = {
			answers: {},
			submitted: false,
			answerState: null
		};
	}

	renderColumnNames() {
		const len = this.props.cols.length;
		let offset;
		if ( len > 7 ) {
			offset = 1;
		} else if ( len > 4 ) {
			offset = 2;
		} else {
			offset = 3;
		}
		return (
			<Form.Row className="multiple-choice-matrix-question-header" >
				<Col sm={offset}></Col>
				{this.props.cols.map( ( elem, idx ) => {
					return ( <Col key={idx}>
						<Form.Label>
							{ isString( elem ) ? <Text raw={elem} /> : elem }
						</Form.Label>
					</Col> );
				})}
			</Form.Row>
		);
	}

	handleChangeFactory = ( label ) => {
		return ( selected ) => {
			debug( `Received a new value for ${label}...` );
			const answers = copy( this.state.answers, 1 );
			answers[ label ] = selected.value;
			this.setState({
				answers
			});
		};
	}

	handleSubmit = () => {
		const session = this.context;
		let correct = true;
		const labels = keys( this.props.solution );
		this.submittedAnswers = copy( this.state.answers );
		for ( let i = 0; i < labels.length; i++ ) {
			const key = labels[ i ];
			const sol = this.props.solution[ key ];
			const answer = this.state.answers[ key ];
			if ( isArray( sol ) ) {
				if ( !contains( sol, answer ) ) {
					correct = false;
				}
			}
			else if ( sol !== answer ) {
				correct = false;
			}
		}
		if ( this.props.provideFeedback !== 'none' ) {
			if ( correct ) {
				session.addNotification({
					title: 'Correct',
					message: this.props.successMsg || this.props.t('success-message'),
					level: 'success'
				});
			} else {
				session.addNotification({
					title: 'Incorrect',
					message: this.props.failureMsg || this.props.t('failure-message'),
					level: 'error'
				});
			}
		} else {
			session.addNotification({
				title: this.state.submitted ? this.props.t('answer-resubmitted') : this.props.t('answer-submitted'),
				message: this.state.submitted ?
					this.props.t('resubmit-message') :
					this.props.t('submit-message'),
				level: 'info'
			});
		}
		session.log({
			id: this.id,
			type: SELECT_QUESTION_MATRIX_SUBMISSION,
			value: this.state.answers
		});
		this.props.onSubmit( this.state.answers, correct );
		let answerState = null;
		if ( this.props.provideFeedback ) {
			answerState = correct ? 'success' : 'danger';
		}
		this.setState({
			submitted: true,
			answerState
		});
	}

	renderSelectInput( row, i ) {
		const label = row + ':' + i;
		let options = this.props.options[ label ];
		options = options.map( ( e, i ) => {
			return { 'label': e, 'value': i };
		});
		let valueColor;
		if ( this.props.provideFeedback === 'individual' && this.state.submitted ) {
			valueColor = this.submittedAnswers[ label ] === this.props.solution[ label ] ? 'green' : 'red';
		}
		return (
			<Select
				name="form-field-name"
				className="select-field"
				isDisabled={this.state.submitted && this.state.answerState === 'success'}
				isSearchable={false}
				options={options}
				onChange={this.handleChangeFactory( label )}
				menuPlacement="top"
				menuPortalTarget={document.body}
				styles={{
					menuPortal: base => ({
						...base,
						zIndex: 1010
					}),
					singleValue: ( base ) => ({
						...base,
						color: valueColor
					})
				}}
			/>
		);
	}

	renderRowSelects( row ) {
		const len = this.props.cols.length;
		const buttons = new Array( len );
		for ( let i = 0; i < len; i++ ) {
			buttons[ i ] = <Col key={i}>
				{this.renderSelectInput( row, i )}
			</Col>;
		}
		return ( <Fragment>
			{buttons}
		</Fragment> );
	}

	renderRows() {
		const len = this.props.rows.length;
		let offset;
		if ( len > 7 ) {
			offset = 1;
		} else if ( len > 4 ) {
			offset = 2;
		} else {
			offset = 3;
		}
		return this.props.rows.map( ( rowLabel, idx ) => {
			return (
				<Form.Row key={idx} style={{ marginBottom: 15, marginTop: 15 }} >
					<Col sm={offset}>
						<Form.Label column style={{ textAlign: 'right' }}>
							{ isString( rowLabel ) ? <Text raw={rowLabel} /> : rowLabel }
						</Form.Label>
					</Col>
					{this.renderRowSelects( idx )}
				</Form.Row>
			);
		});
	}

	render() {
		const nHints = this.props.hints.length;
		const nAnswers = keys( this.state.answers ).length;
		const nInputs = keys( this.props.options ).length;
		return (
			<Card id={this.id} border={this.state.answerState} className={`select-question-matrix ${this.props.className}`} style={this.props.style} body >
				{ this.props.question ? <label>{this.props.question}</label> : null }
				{this.renderColumnNames()}
				{this.renderRows()}
				<div className="select-question-matrix-toolbar">
					<Button className="submit-button"
						variant="primary" size="sm" onClick={this.handleSubmit}
						disabled={nAnswers < nInputs || this.state.submitted && this.state.answerState === 'success'}
					>
						{ this.state.submitted ? this.props.t('resubmit') : this.props.t('submit') }
					</Button>
					{ nHints > 0 ?
						<HintButton onClick={this.logHint} hints={this.props.hints} placement={this.props.hintPlacement} /> :
						null
					}
					{
						this.props.chat ? <ChatButton for={this.id} /> : null
					}
				</div>
				<div>
					<ResponseVisualizer
						id={this.id}
						data={{
							type: 'tensor',
							rows: this.props.rows,
							cols: this.props.cols,
							question: this.props.question
						}}
						info={SELECT_QUESTION_MATRIX_SUBMISSION}
					/>
					{ this.props.feedback ? <FeedbackButtons
						id={this.id+'_feedback'}
						style={{ float: 'left' }}
					/> : null }
				</div>
			</Card>
		);
	}
}


// PROPERTIES //

SelectQuestionMatrix.defaultProps = {
	question: '',
	rows: [],
	cols: [],
	solution: {},
	options: {},
	hints: [],
	hintPlacement: 'bottom',
	feedback: true,
	provideFeedback: 'individual',
	failureMsg: null,
	successMsg: null,
	chat: false,
	className: '',
	style: {},
	onSubmit() {}
};

SelectQuestionMatrix.propTypes = {
	question: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	rows: PropTypes.array,
	cols: PropTypes.array,
	options: PropTypes.object,
	solution: PropTypes.object,
	hints: PropTypes.arrayOf(
		PropTypes.oneOfType([ PropTypes.string, PropTypes.node ])
	),
	hintPlacement: PropTypes.string,
	feedback: PropTypes.bool,
	provideFeedback: PropTypes.oneOf([ 'none', 'overall', 'individual' ]),
	failureMsg: PropTypes.string,
	successMsg: PropTypes.string,
	chat: PropTypes.bool,
	className: PropTypes.string,
	style: PropTypes.object,
	onSubmit: PropTypes.func
};

SelectQuestionMatrix.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'select-question-matrix' )( SelectQuestionMatrix );
