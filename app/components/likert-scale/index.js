// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/lib/Card';
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import SessionContext from 'session/context.js';


// MAIN //

class LikertScale extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			value: props.defaultValue,
			submitted: false
		};
	}

	submitHandler = ( event ) => {
		const session = this.context;
		if ( !this.props.disableSubmitNotification ) {
			session.addNotification({
				title: 'Answer submitted.',
				message: 'Your answer was successfully stored',
				level: 'success',
				position: 'tr'
			});
		}
		this.setState({
			submitted: true
		});
		if ( this.props.id ) {
			session.log({
				id: this.props.id,
				type: 'LIKERT_SCALE_SUBMISSION',
				value: this.state.value
			});
		}
	}

	handleChange = ( event ) => {
		this.setState({
			value: event.target.value
		});
	}

	render() {
		return (
			<Card style={{ width: '75%' }} >
				<Card.Body>
					<FormGroup className="center" >
						<label>{this.props.question}</label>
						<br />
						{this.props.options.map( ( elem, idx ) => {
							return (
								<Form.Check
									type="radio"
									label={elem}
									checked={this.state.value === elem}
									value={elem}
									key={idx}
									inline
									onClick={this.handleChange}
								/>
							);
						})}
					</FormGroup>
					<br />
					<Button
						className="submit-button"
						variant="primary"
						onClick={this.submitHandler}
					>
						{ ( this.state.submitted ) ? 'Resubmit' : 'Submit' }
					</Button>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

LikertScale.propTypes = {
	question: PropTypes.string,
	defaultValue: PropTypes.string,
	options: PropTypes.array,
	disableSubmitNotification: PropTypes.bool
};

LikertScale.defaultProps = {
	question: '',
	defaultValue: 'Neither agree nor disagree',
	options: [
		'Strongly disagree',
		'Disagree',
		'Neither agree nor disagree',
		'Agree',
		'Strongly agree'
	],
	disableSubmitNotification: false
};

LikertScale.contextType = SessionContext;


// EXPORTS //

export default LikertScale;
