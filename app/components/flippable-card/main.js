// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDraggable from 'react-draggable';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import isArray from '@stdlib/assert/is-array';


// MAIN //

/**
* An ISLE component that allows two render two-sides.
*
* @property {(string|node)} button - button label
* @property {Array<Object>} cardStyles - allows to override the given styles
* @property {boolean} draggable - controls whether the card may be dragged around
* @property {number} flipSpeedBackToFront - the speed by which the card turns from background to foreground, in seconds
* @property {number} flipSpeedFrontToBack {number} the speed by which the card turns from foreground to background, in seconds
* @property {boolean} defaultValue - initial flip state of the card
* @property {boolean} value - flip state of the card (for controlled component)
* @property {number} perspective - CSS property value to give 3d-positioned element a perspective
* @property {boolean} oneTime - indicates whether the flip process may be executed just once
* @property {Function} onChange - callback invoked once the card is flipped; receives the current flipped status as its sole argument
*/
class FlippableCard extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			isFlipped: props.defaultValue,
			fired: false
		};
	}

	componentDidUpdate( nextProps ) {
		if ( nextProps.defaultValue !== this.props.defaultValue ) {
			this.setState({
				isFlipped: nextProps.defaultValue
			});
		}
	}

	oneShot = () => {
		if ( !this.state.fired ) {
			this.setState({
				fired: true,
				isFlipped: !this.state.isFlipped
			}, () => {
				this.props.onChange( this.state.isFlipped );
			});
		}
	}

	handleToggle = () => {
		if ( this.props.value !== void 0 ) {
			return this.props.onChange( !this.props.value );
		}
		if ( !this.props.oneTime )
			{
			this.setState({
				isFlipped: !this.state.isFlipped
			}, () => {
				this.props.onChange( this.state.isFlipped );
			});
		} else {
			this.oneShot();
		}
	}

	renderButton() {
		if ( this.props.button !== null ) {
			return (
				<Button onClick={this.handleToggle} block >
					{this.props.button}
				</Button>
			);
		}
		return null;
	}

	interaction = () => {
		if ( this.props.button === null ) {
			this.handleToggle();
		}
	}

	render() {
		if ( !isArray( this.props.children ) ) {
			return <Alert variant="danger" >The flippable card requires two child elements.</Alert>;
		}
		const isFlipped = this.props.value !== void 0? this.props.value : this.state.isFlipped;
		const styles = {
			container: {
				perspective: this.props.perspective,
				transformStyle: 'preserve-3d',
				width: 400,
				height: 400,
				cursor: 'pointer',
				...this.props.cardStyles.container
			},
			flipper: {
				position: 'relative',
				transformStyle: 'preserve-3d',
				width: '100%',
				height: '100%'
			},
			front: {
				WebkitBackfaceVisibility: 'hidden',
				backfaceVisibility: 'hidden',
				left: '0',
				position: 'absolute',
				top: '0',
				transform: `rotateY(${isFlipped ? 180 : 0 }deg)`,
				transformStyle: 'preserve-3d',
				width: '100%',
				height: '100%',
				zIndex: '2',
				transition: `${this.props.flipSpeedBackToFront}s`,
				...this.props.cardStyles.front
			},
			back: {
				WebkitBackfaceVisibility: 'hidden',
				backfaceVisibility: 'hidden',
				left: '0',
				position: 'absolute',
				transform: `rotateY(${isFlipped ? 0 : -180 }deg)`,
				transformStyle: 'preserve-3d',
				top: '0',
				width: '100%',
				height: '100%',
				zIndex: 2,
				transition: `${this.props.flipSpeedFrontToBack}s`,
				...this.props.cardStyles.back
			}
		};
		const out = <div
			id={this.props.id} role="button" tabIndex={0}
			onClick={this.interaction} onKeyPress={this.interaction}
			className="react-card-flip" style={styles.container}
		>
			<div className="react-card-flipper" style={styles.flipper} >
				<div className="react-card-front" style={styles.front} >
					{this.props.children[ 0 ]}
					{this.renderButton()}
				</div>
				<div className="react-card-back" style={styles.back} >
					{this.props.children[ 1 ]}
					{this.renderButton()}
				</div>
			</div>
		</div>;
		if ( this.props.draggable ) {
			return ( <ReactDraggable>{out}</ReactDraggable> );
		}
		return out;
	}
}

// PROPERTIES //

FlippableCard.propTypes = {
	button: PropTypes.string,
	cardStyles: PropTypes.shape({
		container: PropTypes.object,
		front: PropTypes.object,
		back: PropTypes.object
	}),
	children: ( props, propName, componentName ) => {
		if ( React.Children.count( props[ propName ] ) !== 2 ) {
			return new Error( `${componentName} requires two children.` );
		}
		return null;
	},
	draggable: PropTypes.bool,
	flipSpeedBackToFront: PropTypes.number,
	flipSpeedFrontToBack: PropTypes.number,
	onChange: PropTypes.func,
	oneTime: PropTypes.bool,
	perspective: PropTypes.number,
	value: PropTypes.bool,
	defaultValue: PropTypes.bool
};

FlippableCard.defaultProps = {
	button: null,
	cardStyles: {
		container: {},
		front: {},
		back: {}
	},
	children: null,
	draggable: false,
	flipSpeedBackToFront: 1,
	flipSpeedFrontToBack: 1,
	onChange() {},
	oneTime: false,
	perspective: 1000,
	value: void 0,
	defaultValue: false
};


// EXPORTS //

export default FlippableCard;
