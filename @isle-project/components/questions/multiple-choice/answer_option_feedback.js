// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Popover from 'react-bootstrap/Popover';
import isObject from '@stdlib/assert/is-plain-object';
import OverlayTrigger from '@isle-project/components/overlay-trigger';
import convertJSONtoJSX from '@isle-project/utils/json-to-jsx';
import './multiple-choice-styles.css';


// FUNCTIONS //

function isHTMLConfig( elem ) {
	return (
		isObject( elem ) &&
		elem.component
	);
}


// MAIN //

const AnswerOption = ( props ) => {
	let variant;
	if ( props.correct === true ) {
		variant = 'success';
	}
	else if ( props.correct === false ) {
		variant = 'danger';
	}
	else if ( props.solution === true ) {
		// Case: User did not pick correct answer...
		variant = 'warning';
	}
	const answerContent = isHTMLConfig( props.answerContent ) ?
		convertJSONtoJSX( props.answerContent ) :
		props.answerContent;
	const popover =
		<Popover id={props.no}>
			<strong>{ props.solution ? 'Correct answer' : 'Incorrect answer' }{props.answerExplanation ? ': ' : ''}</strong>
			{props.answerExplanation}
		</Popover>;

	if ( props.disabled ) {
		return (
			<ListGroupItem className="multiple-choice-answer"
				variant={variant}
				disabled
			>
				{answerContent}
			</ListGroupItem>
		);
	}
	else if ( props.submitted ) {
		return (
			<OverlayTrigger
				trigger={[ 'click', 'hover' ]}
				placement="auto"
				overlay={popover}
			>
				<ListGroupItem className="multiple-choice-answer"
					onClick={props.onAnswerSelected}
					onKeyPress={props.onAnswerSelected}
					variant={variant}
					tabIndex={0} role="button"
				>
					{answerContent}
				</ListGroupItem>
			</OverlayTrigger>
		);
	}
	return (
		<ListGroupItem className="multiple-choice-answer"
			onClick={props.onAnswerSelected}
			onKeyPress={props.onAnswerSelected}
			active={props.active}
			tabIndex={0} role="button"
		>
			{answerContent}
		</ListGroupItem>
	);
};


// TYPES //

AnswerOption.propTypes = {
	active: PropTypes.bool.isRequired,
	answerContent: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.string
	]).isRequired,
	answerExplanation: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.element,
		PropTypes.string
	]).isRequired,
	correct: PropTypes.bool,
	disabled: PropTypes.bool.isRequired,
	no: PropTypes.number.isRequired,
	onAnswerSelected: PropTypes.func.isRequired,
	solution: PropTypes.bool.isRequired,
	submitted: PropTypes.bool.isRequired
};

AnswerOption.defaultProps = {
	correct: null
};


// EXPORTS //

export default AnswerOption;
