
// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import TimedButton from 'components/timed-button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'components/overlay-trigger';


// VARIABLES //

const debug = logger( 'isle:hint-button' );


// FUNCTIONS //

/**
* Returns a popover displaying the unlocked hints.
*
* @private
* @param {integer} id - current hint index
* @param {Array} hints - array of hints
* @returns {Node} popover with hints
*/
const displayHint = ( id, hints ) => {
	return (
		<Popover
			id="popover-positioned-top"
			title="Hints"
			style={{
				minWidth: '400px',
				padding: '3px'
			}}
		>
			{ hints
				.filter( ( e, i ) => i <= id )
				.map( ( hintText, i ) => ( <span key={i}>
					<label style={{ marginBottom: 0 }}>Hint {i+1}:</label>
					<br />
					<span>{hintText}</span>
					<br />
				</span> ) )
			}
		</Popover>
	);
};

/**
* Returns a hint button label.
*
* @private
* @param {integer} id - current hint index
* @param {integer} noHints - total number of hints
* @param {boolean} hintOpen - indicates whether hint popover is opened
* @returns {string} hint button label
*/
const getHintLabel = ( id, noHints, hintOpen ) => {
	if ( hintOpen ) {
		return id <= 1 ? 'Close Hint' : 'Close Hints';
	}
	if ( id === 0 ) {
		return 'Get Hint';
	}
	if ( id === noHints ) {
		return 'Show Hints';
	}
	return 'Next Hint';
};


// MAIN //

/**
* A button for displaying question hints.
*
* @param {boolean} disabled - controls whether the button is disabled
* @param {Array<string|node>} hints - array of hints
* @param {Function} onClick - event handler invoked when user clicks on the button
* @param {Function} onFinished - event handler invoked once all hints are exhausted
* @param {string} placement - tooltip placement
* @param {string} size - button size
* @param {Object} style - CSS inline styles
*/
class HintButton extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			hintOpen: false,
			currentHint: 0
		};
	}

	handleHintClick = ( callback ) => {
		debug( 'Clicked on a hint button...' );
		const { currentHint, hintOpen } = this.state;
		const { hints } = this.props;
		if ( currentHint < hints.length && hintOpen === false ) {
			this.props.onClick( currentHint );
			this.setState({
				currentHint: currentHint + 1,
				hintOpen: true
			}, () => {
				if ( this.state.currentHint === hints.length ) {
					this.props.onFinished();
				}
				callback( false );
			});
		} else {
			this.setState({
				hintOpen: !this.state.hintOpen
			});
			return callback( this.state.hintOpen );
		}
	};

	render() {
		const label = getHintLabel( this.state.currentHint, this.props.hints.length, this.state.hintOpen );
		return (
			<OverlayTrigger
				trigger="click"
				placement={this.props.placement}
				overlay={displayHint( this.state.currentHint - 1, this.props.hints )}
			>
				<TimedButton
					className="hint-button"
					variant="success"
					size={this.props.size}
					onClick={this.handleHintClick}
					disabled={this.props.disabled}
					autoActivate={false}
					style={this.props.style}
				>{label}</TimedButton>
			</OverlayTrigger>
		);
	}
}


// TYPES //

HintButton.propTypes = {
	disabled: PropTypes.bool,
	hints: PropTypes.arrayOf( PropTypes.oneOfType( [
		PropTypes.string, PropTypes.element
	]) ).isRequired,
	onClick: PropTypes.func,
	onFinished: PropTypes.func,
	placement: PropTypes.string,
	size: PropTypes.string,
	style: PropTypes.object
};

HintButton.defaultProps = {
	disabled: false,
	onClick() {},
	onFinished() {},
	placement: 'left',
	size: 'sm',
	style: {}
};


// EXPORTS //

export default HintButton;
