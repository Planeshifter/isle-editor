// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Panel from 'react-bootstrap/lib/Panel';
import logger from 'debug';
import PINF from '@stdlib/constants/math/float64-pinf';
import NINF from '@stdlib/constants/math/float64-ninf';
import min from '@stdlib/math/base/special/min';
import max from '@stdlib/math/base/special/max';
import roundn from '@stdlib/math/base/special/roundn';
import ChatButton from 'components/chat-button';
import InstructorBar from 'components/instructor-bar';
import NumberInput from 'components/input/number';
import HintButton from 'components/hint-button';


// VARIABLES //

const debug = logger( 'isle:range-question' );


// MAIN //

class RangeQuestion extends Component {
	/**
	* Create a number question with a number input field.
	*
	* @param {Object} props
	*/
	constructor( props ) {
		super( props );

		// Initialize state variables...
		this.state = {
			lower: props.min,
			upper: props.max,
			submitted: false
		};
	}

	componentDidUpdate( prevProps ) {
		if (
			this.props.question !== prevProps.question ||
			this.props.solution[1] !== prevProps.solution[1] ||
			this.props.solution[0] !== prevProps.solution[0]
		) {
			this.setState({
				lower: void 0,
				upper: void 0,
				submitted: false
			});
		}
	}

	/*
	* Event handler invoked when text area value changes. Updates `value` and invokes `onChange` callback with the new value as its first argument
	*/
	handleChangeUpper = ( newValue ) => {
		this.setState({ upper: newValue });
		this.props.onChangeUpper( max(newValue, this.state.lower) );
	}

	handleChangeLower = ( newValue ) => {
		this.setState({ lower: newValue });
		this.props.onChangeLower( min(newValue, this.state.upper) );
	}

	submitHandler = ( event ) => {
		const { digits, solution } = this.props;
		const { session } = this.context;
		if ( solution ) {
			const lowerVal = parseFloat( this.state.lower );
			const upperVal = parseFloat( this.state.upper );
			const upperSol = solution[1];
			const lowerSol = solution[0];
			let correct;
			if ( digits === void 0 ) {
				correct = (lowerVal === lowerSol && upperVal === upperSol);
			} else {
				correct = (roundn( lowerVal, -digits ) === roundn( lowerVal, -digits ) &&
					(roundn(upperVal, -digits) === roundn(upperSol, -digits)));
			}
			session.addNotification({
				title: 'Answer submitted.',
				message: correct ? 'Congratulations, that is correct!' : 'Not quite. Compare your answer with the solution.',
				level: correct ? 'success' : 'error',
				position: 'tr'
			});
		} else {
			session.addNotification({
				title: this.state.submitted ? 'Answer re-submitted.' : 'Answer submitted.',
				message: this.state.submitted ?
					'You have successfully re-submitted your answer.' :
					'Your answer has been submitted.',
				level: 'info',
				position: 'tr'
			});
		}
		this.setState({
			submitted: true
		});
		if ( this.props.id ) {
			session.log({
				id: this.props.id,
				type: 'RANGE_QUESTION_SUBMIT_ANSWER',
				value: `${this.state.lower} , ${this.state.upper}`
			});
		}
	}

	onNoClickUpper = (val) => {
		if (val <= this.state.lower) {
			this.setState({ upper: this.state.lower });
		}
	}

	onNoClickLower = (val) => {
		if (val >= this.state.upper) {
			this.setState({ lower: this.state.upper });
		}
	}

	logHint = ( idx ) => {
		debug( 'Logging hint...' );
		const { session } = this.context;
		if ( this.props.id ) {
			session.log({
				id: this.props.id,
				type: 'RANGE_QUESTION_OPEN_HINT',
				value: idx
			});
		}
	}

	/*
	* React component render method.
	*/
	render() {
		const nHints = this.props.hints.length;
		return (
			<Panel className="range-question">
				<Panel.Body>
					{ this.props.question ? <p><label>{this.props.question}</label></p> : null }
					<NumberInput
						step="any"
						legend="Lower"
						onChange={this.handleChangeLower}
						value={this.state.lower}
						disabled={this.state.submitted && this.props.solution}
						inline
						width={90}
						min={this.props.min}
						max={this.props.max}
						numbersOnly={false}
						onBlur={this.onNoClickLower}
					/>
					<NumberInput
						step="any"
						legend="Upper"
						onChange={this.handleChangeUpper}
						value={this.state.upper}
						disabled={this.state.submitted && this.props.solution}
						inline
						width={90}
						min={this.props.min}
						max={this.props.max}
						numbersOnly={false}
						onBlur={this.onNoClickUpper}
					/>
					{ this.state.submitted && this.props.solution ?
						<span>
							<br />
							<label>Solution:</label>
							<span> {this.props.solution[0]}, {this.props.solution[1]} </span>
						</span>:
						null
					}
					<ButtonToolbar style={{ marginTop: '8px', marginBottom: '4px' }}>
						<Button
							bsStyle="primary"
							bsSize="sm"
							disabled={this.state.submitted && this.props.solution}
							onClick={this.submitHandler}
						>
							{ ( this.state.submitted && !this.props.solution ) ? 'Resubmit' : 'Submit' }
						</Button>
						{ nHints > 0 ?
							<HintButton onClick={this.logHint} hints={this.props.hints} placement={this.props.hintPlacement} /> :
							null
						}
						{
							this.props.chat && this.props.id ?
								<div style={{ display: 'inline-block', marginLeft: '4px' }}>
									<ChatButton for={this.props.id} />
								</div> : null
						}
					</ButtonToolbar>
					<InstructorBar id={this.props.id} dataType="number" />
				</Panel.Body>
			</Panel>
		);
	}
}


// DEFAULT PROPERTIES //

RangeQuestion.defaultProps = {
	chat: false,
	digits: void 0,
	hints: [],
	hintPlacement: 'bottom',
	max: PINF,
	min: NINF,
	onChangeUpper() {},
	onChangeLower() {},
	question: '',
	solution: null
};


// PROPERTY TYPES //

RangeQuestion.propTypes = {
	chat: PropTypes.bool,
	digits: PropTypes.number,
	hintPlacement: PropTypes.string,
	hints: PropTypes.arrayOf( PropTypes.string ),
	max: PropTypes.number,
	min: PropTypes.number,
	onChangeLower: PropTypes.func,
	onChangeUpper: PropTypes.func,
	question: PropTypes.string,
	solution: PropTypes.arrayOf( PropTypes.number )
};

RangeQuestion.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default RangeQuestion;
