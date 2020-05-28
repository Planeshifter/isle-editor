
// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import logger from 'debug';
import generateUID from 'utils/uid';
import ProportionsInput from 'components/input/proportions';
import Gate from 'components/gate';
import ResponseVisualizer from 'components/response-visualizer';
import RealtimeMetrics from 'components/metrics/realtime';
import { SessionContext } from '@isle-project/session';
import { PROPORTIONS_SURVEY_SUBMISSION } from 'constants/actions.js';


// VARIABLES //

const debug = logger( 'isle:proportions-survey' );
const uid = generateUID( 'proportions-survey' );


// MAIN //

/**
* Component that allows a group of people to vote on the weights and importance of given options.
*
* @property {number} question - the question to be displayed
* @property {boolean} allowMultipleAnswers - controls whether one wishes to allow students to answer the survey multiple times
* @property {boolean} anonymous - controls whether student answers are anonymized
* @property {boolean} disabled - controls whether the survey is deactivated
* @property {number} nElements - number of elements that shall be weighed
* @property {Array} legends - legend labels that describe the options to be weighed
* @property {number} group - group display heading
* @property {number} precision - displayed precision of proportion values
* @property {number} step - the step of the arrows seen when hovering the cursor above the input box
* @property {number} colors - array of colors for the pie chart components. If not defined, a custom color scale will be used
* @property {number} personalHeight - proportions input height for individual student (in px)
* @property {number} personalInnerRadius - inner radius of proportions pie chart for individual student (in px)
* @property {number} groupHeight - proportions input height for group display (in px)
* @property {number} groupInnerRadius - inner radius of proportions pie chart for group display (in px)
* @property {number} margin - proportion input margin (in px)
* @property {Function} onSubmit - callback function invoked once students submits an answer
*/
class ProportionsSurvey extends Component {
	constructor( props ) {
		super( props );

		this.id = props.id || uid( props );
		this.results = [];
		this.state = {
			submitted: false,
			value: null,
			resultValues: null,
			nResults: 0
		};
	}

	submitQuestion = () => {
		debug( 'Sending the data: ' + this.state.value );
		const session = this.context;
		session.log({
			id: this.id,
			type: PROPORTIONS_SURVEY_SUBMISSION,
			value: JSON.stringify( this.state.value ),
			anonymous: this.props.anonymous
		}, 'members' );
		this.setState({
			submitted: true
		});
		session.addNotification({
			title: 'Submitted',
			message: 'Your answer has been submitted.',
			level: 'success'
		});
		this.props.onSubmit( this.state.value );
	}

	onData = ( data ) => {
		debug( 'ProportionsSurvey is receiving data: ' + JSON.stringify( data ) );
		data = data[ this.id ];
		this.getAverage( data );
	}

	getAverage( data ) {
		const list = new Array( data.length );
		for ( let i = 0; i < data.length; i++ ) {
			list[ i ] = JSON.parse( data[ i ] );
		}
		const sum = new Array( this.props.nElements ).fill( 0 );
		const mean = new Array( this.props.nElements ).fill( 0 );
		for ( let i = 0; i < list.length; i++ ) {
			// Reflects arrays of arrays = results
			for ( let j = 0; j < list[ i ].length; j++ ) {
				sum[ j ] += list[ i ][ j ];
			}
		}
		debug( 'The sum is '+ sum );
		for ( let j = 0; j < this.props.nElements; j++ ) {
			mean[ j ] = sum[ j ] / list.length;
		}
		debug( 'The mean is ' + mean );
		this.setState({
			resultValues: mean,
			nResults: list.length
		});
	}

	render() {
		const disabled = (
			( this.state.submitted && !this.props.allowMultipleAnswers ) ||
			this.props.disabled
		);
		return (
			<Gate user banner={<h2>Please sign in...</h2>} >
				<Container>
					<Col md={6}>
						<Card body className="ProportionsSurvey" style={{
							margin: '0 auto 10px',
							maxWidth: 600,
							marginTop: '8px'
						}}>
							<h3>{this.props.question}</h3>
							<ProportionsInput
								legends={this.props.legends}
								precision={this.props.precision}
								step={this.props.step}
								height={this.props.personalHeight}
								innerRadius={this.props.personalInnerRadius}
								colors={this.props.colors}
								margin={this.props.margin}
								nElements={this.props.nElements}
								onChange={( value ) => {
									this.setState({
										value
									});
								}}
							/>
							<Button
								size="small"
								variant="success"
								block fill
								onClick={this.submitQuestion}
								disabled={disabled}
							>{ disabled ? 'Submitted' : 'Submit'}</Button>
						</Card>
					</Col>

					<Col md={6}>
						<Card body className="ProportionsSurvey" style={{
							margin: '0 auto 10px',
							maxWidth: 600,
							marginTop: '8px'
						}}>
							<h3>{ this.props.group}</h3>
							<RealtimeMetrics for={[ this.id ]} onData={this.onData} />
							<h4>Number of votes: { this.state.nResults } </h4>
							<ProportionsInput
								legends={this.props.legends}
								precision={this.props.precision}
								step={this.props.step}
								height={this.props.groupHeight}
								innerRadius={this.props.groupInnerRadius}
								colors={this.props.colors}
								disabled={true}
								margin={this.props.margin}
								values={this.state.resultValues}
								nElements={this.props.nElements}
							/>
						</Card>
					</Col>
				</Container>
				<ResponseVisualizer buttonLabel="Responses" id={this.id} />
			</Gate>
		);
	}
}


// PROPERTIES //

ProportionsSurvey.defaultProps = {
	onSubmit() {},
	allowMultipleAnswers: false,
	question: '',
	anonymous: false,
	disabled: false,
	nElements: 6,
	legends: null,
	group: 'group results',
	precision: 2,
	step: 0.25,
	colors: [
		'tomato',
		'orange',
		'gold',
		'darkcyan',
		'salmon',
		'lightgreen',
		'gainsboro',
		'lightpurple',
		'darkkhaki',
		'darkseagreen'
	],
	personalHeight: 200,
	personalInnerRadius: 60,
	groupHeight: 100,
	groupInnerRadius: 40,
	margin: '40px'
};

ProportionsSurvey.propTypes = {
	id: PropTypes.string.isRequired,
	allowMultipleAnswers: PropTypes.bool,
	anonymous: PropTypes.bool,
	colors: PropTypes.array,
	disabled: PropTypes.bool,
	group: PropTypes.string,
	groupHeight: PropTypes.number,
	groupInnerRadius: PropTypes.number,
	legends: PropTypes.array,
	margin: PropTypes.string,
	nElements: PropTypes.number,
	onSubmit: PropTypes.func,
	personalHeight: PropTypes.number,
	personalInnerRadius: PropTypes.number,
	precision: PropTypes.number,
	question: PropTypes.string,
	step: PropTypes.number
};

ProportionsSurvey.contextType = SessionContext;


// EXPORTS //

export default ProportionsSurvey;
