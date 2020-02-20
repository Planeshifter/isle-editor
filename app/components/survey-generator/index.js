// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import logger from 'debug';
import generateUID from 'utils/uid/incremental';
import Gate from 'components/gate';
import { CheckboxInput, SelectInput, TextInput } from 'components/input';
import TextArea from 'components/input/text-area';
import MultipleChoiceSurvey from 'components/multiple-choice-survey';
import NumberSurvey from 'components/number-survey';
import FreeTextSurvey from 'components/free-text-survey';
import SessionContext from 'session/context.js';
import { STOP_SURVEY, START_SURVEY } from 'constants/actions.js';
import { MEMBER_ACTION } from 'constants/events.js';


// VARIABLES //

const debug = logger( 'isle:survey-generator' );
const uid = generateUID( 'survey-generator' );


// MAIN //

/**
* Component allowing instructors to create multiple-choice surveys, free text surveys and number surveys on the fly in real-time through an easy-to-use interface.
*
* @property {boolean} owner - controls whether owners can see the survey generator; the default should not be changed for most use-cases
* @property {boolean} user - controls whether users can see the survey generator; the default should not be changed for most use-cases
* @property {boolean} anonymous - controls whether owners can see the survey generator; the default should not be changed for most use-cases
*/
class SurveyGenerator extends Component {
	constructor( props ) {
		super( props );
		this.id = props.id || uid();
		this.state = {
			answers: [],
			question: '',
			type: null,
			showSurvey: false,
			anonymous: true,
			disabled: true
		};
	}

	componentDidMount() {
		const session = this.context;
		this.unsubscribe = session.subscribe( ( type, action ) => {
			debug( 'Received member action...' );
			if ( type === MEMBER_ACTION ) {
				if ( action.type === START_SURVEY ) {
					debug( 'Should start the survey...' );
					if ( this.id === action.id ) {
						this.setState({
							question: action.value.question,
							type: action.value.type,
							answers: action.value.answers,
							showSurvey: true
						});
					}
				}
				else if ( action.type === STOP_SURVEY ) {
					debug( 'Should stop the survey...' );
					if ( this.id === action.id ) {
						this.setState({
							showSurvey: false
						});
					}
				}
				this.forceUpdate();
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	setQuestion = ( text ) => {
		let disabled = true;
		if (
			text.length > 3 &&
			(
				this.state.answers.length > 1 ||
				this.state.type !== 'multiple-choice'
			)
		) {
			disabled = false;
		}
		this.setState({
			question: text,
			disabled
		});
	}

	setType = ( type ) => {
		this.questionDIV.focus();
		this.setState({
			type
		});
	}

	startSurvey = () => {
		const session = this.context;
		if ( this.state.showSurvey ) {
			session.log({
				id: this.id,
				type: STOP_SURVEY,
				value: null
			}, 'members' );
		} else {
			session.log({
				id: this.id,
				type: START_SURVEY,
				value: {
					answers: this.state.answers,
					type: this.state.type,
					question: this.state.question
				}
			}, 'members' );
		}
	}

	getAnswers = ( text ) => {
		const answers = text.split( '\n' );
		let disabled = true;
		if (
			this.state.question.length > 3 && answers.length > 1
		) {
			disabled = false;
		}
		this.setState({
			answers,
			disabled
		});
	}

	toggleAnonymous = ( value ) => {
		this.setState({
			anonymous: value
		});
	}

	render() {
		return ( <Card body id={this.id} >
			<Gate {...this.props} >
				<Card body className="bg-light" style={{
					maxWidth: '800px',
					border: 'solid 2px rgb(186, 204, 234)'
				}}>
					<Card.Title as="h2">Survey Generator</Card.Title>
					<FormGroup>
						<Row>
							<Col md={3}><FormLabel>Question Type:</FormLabel></Col>
							<Col md={9}>
								<SelectInput options={[ 'multiple-choice', 'number', 'free-text' ]} onChange={this.setType} />
							</Col>
						</Row>
					</FormGroup>
					<TextInput
						legend="Question"
						ref={( questionDIV ) => { this.questionDIV = questionDIV; }}
						width={300}
						onChange={this.setQuestion}
					/>
					{ this.state.type === 'multiple-choice' ?
						<FormGroup>
							<TextArea legend="Answer Options (new-line delimited)" onChange={this.getAnswers} />
						</FormGroup> : null
					}
					<CheckboxInput
						legend="Make the survey anonymous"
						defaultValue={true}
						onChange={this.toggleAnonymous}
					/>
					<Button
						disabled={this.state.disabled && !this.state.showSurvey}
						onClick={this.startSurvey}
						style={{ float: 'right' }}
					>
						{ !this.state.showSurvey ? 'Start Survey' : 'Stop Survey' }
					</Button>
				</Card>
			</Gate>
			{ this.state.showSurvey ?
				<div>
					{ this.state.type === 'multiple-choice' ?
						<MultipleChoiceSurvey
							user
							question={this.state.question}
							answers={this.state.answers}
							id={this.id+':question'}
							anonymous={this.state.anonymous}
						/> : null
					}
					{ this.state.type === 'number' ?
						<NumberSurvey
							user
							question={this.state.question}
							id={this.id+':question'}
							anonymous={this.state.anonymous}
						/> : null
					}
					{ this.state.type === 'free-text' ?
						<FreeTextSurvey
							user
							question={this.state.question}
							answers={this.state.answers}
							id={this.id+':question'}
							anonymous={this.state.anonymous}
						/> : null
					}
					<label>Data is { !this.state.anonymous ? 'not' : '' }collected anonymously.</label>
				</div> : <h3>The survey has not been started yet.</h3>
			}
		</Card> );
	}
}


// PROPERTIES //

SurveyGenerator.defaultProps = {
	owner: true,
	user: false,
	anonymous: false
};

SurveyGenerator.propTypes = {
	id: PropTypes.string.isRequired,
	owner: PropTypes.bool,
	user: PropTypes.bool,
	anonymous: PropTypes.bool
};

SurveyGenerator.contextType = SessionContext;


// EXPORTS //

export default SurveyGenerator;
