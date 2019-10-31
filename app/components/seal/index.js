// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sin from '@stdlib/math/base/special/sin';
import cos from '@stdlib/math/base/special/cos';
import PI from '@stdlib/constants/math/float64-pi';
import './seal.css';


// FUNCTIONS //

function sinDegrees( angleDegrees ) {
	return sin( angleDegrees * PI/180 );
}

function cosDegrees( angleDegrees ) {
	return cos( angleDegrees * PI/180 );
}


// VARIABLES //

const DIFF = 4;


// MAIN //

/**
* An approval seal.
*
* @property {boolean} active - controls whether seal is active or greyed out
* @property {number} scale - the size of the object, default = 1
* @property {string} title - seal title
* @property {string} lower - the lower text
* @property {number} lowerArc - the arc for the lower text
* @property {string} upper - the upper text
* @property {number} upperArc - the arc for the upper text
* @property {Object} style - the style for the element
* @property {Object} innerStyle - the style for the inner circle
* @property {boolean} noOrnaments - prevents rendering of the ornaments
* @property {boolean} removable - controls whether the note is removed when clicked
* @property {Function} onClick - callback function invoked when the note is clicked
*/
class Seal extends Component {
	constructor( props ) {
		super( props );
		this.ref = React.createRef();
		this.lowerRef = React.createRef();
		this.upperRef = React.createRef();

		this.state = {
			exit: false
		};
	}

	componentDidUpdate( prevProps ) {
		if ( this.props.active === true && prevProps.active === false ) {
			this.props.onActivate();
		}
	}

	curvedText = ( txt, size, arc, offset ) => {
		txt = txt.split( '' );
		const deg = arc / (txt.length-1);
		let origin = 184 - (arc/2)*-1;
		origin -= offset;
		const lines = [];

		const radius = size/2;
		txt.forEach((ea) => {
			const sin = sinDegrees(origin);
			const cos = cosDegrees(origin);

			const left = (radius*sin) + radius + DIFF;
			const top = (radius*cos) + radius;

			let rotation = origin*-1 - 180;
			rotation = 'rotate(' + rotation + 'deg)';

			const style = {
				position: 'absolute',
				left: left,
				top: top,
				transformOrigin: '0% 0%',
				transform: rotation
			};

			const l = <p style={style}>{ea}</p>;
			lines.push(l);
			origin -= deg;
		});
		return lines;
	}

	curvedInvertedText = ( txt, size, arc, offset ) => {
		txt = txt.split('');
		const deg = arc / (txt.length-1);
		let origin = 0 - (arc/2);
		const lines = [];
		const radius = size/2;

		txt.forEach((ea) => {
			const sin = sinDegrees(origin);
			const cos = cosDegrees(origin);

			const left = (radius*sin) + radius + DIFF;
			const top = (radius*cos) + radius;

			let rotation = origin*-1;
			rotation = 'rotate(' + rotation + 'deg)';

			const style = {
				position: 'absolute',
				left: left,
				top: top,
				transformOrigin: '50% 50%',
				transform: rotation
			};

			const l = <p style={style}>{ea}</p>;
			lines.push(l);
			origin += deg;
		});
		return lines;
	}

	getUpperLine = () => {
		let curvedText = this.curvedText(this.props.upper, 195, this.props.upperArc, 0);
		return (
			<div>{curvedText}</div>
		);
	}

	getLowerLine = () => {
		let curvedText = this.curvedInvertedText( this.props.lower, 180, this.props.lowerArc, 0);
		return (
			<div>{curvedText}</div>
		);
	}

	getStyle() {
		let style = Object.assign( {}, this.props.style );
		if ( this.props.removable ) {
			if ( this.state.exit ) {
				style.pointerEvents = 'none';
			} else {
				style.cursor = 'pointer';
			}
		}
		if ( this.props.active === false ) {
			style.webkitFilter = 'grayscale(100%)';
			style.filter = 'grayscale(100%)';
			style.opacity = 0.3;
			if ( this.props.scale ) {
				if ( style.transform) style.transform += 'scale(' + this.props.scale + ')';
				else style.transform = 'scale(' + this.props.scale + ')';
			}
		}
		else {
			style.opacity = 1;
			style.filter = 'grayscale(0%)';
			style.webkitFilter = 'grayscale(0%)';
			if ( this.props.scale ) {
				if (style.transform) style.transform += 'scale(' + this.props.scale + ')';
				else style.transform = 'scale(' + this.props.scale + ')';
			}
		}
		return style;
	}

	getInnerStyle() {
		let style = null;
		if ( this.props.innerStyle ) {
			style = Object.assign({}, this.props.innerStyle);
		}
		return style;
	}

	triggerClick = () => {
		this.props.onClick();
		if ( this.props.removable ) {
			this.setState({
				exit: true
			});
		}
	}

	render() {
		let style = this.getStyle();
		let innerStyle = this.getInnerStyle();
		let className = 'seal-container';
		if ( this.state.exit ) {
			className += ' seal-exit';
		}
		return (
			<div
				role="button" tabIndex={0}
				onClick={this.triggerClick} onKeyPress={this.triggerClick}
				ref={this.ref} style={style} className={className}
			>
				<div className="seal-outer-border" />
				<div className="seal-fine-border" />
				<div style={innerStyle} className="seal-inner-circle" />
				{ !this.props.noOrnaments ? <div className="seal-logo" /> : null }
				{ !this.props.noOrnaments ? <div className="seal-lower-logo" /> : null }
				<div className="seal-wrapper">
					<div className="seal-title">{ this.props.title}</div>
				</div>
				<div ref={this.lowerRef} className="seal-lower-line">{ this.getLowerLine() }</div>
				<div ref={this.upperRef} className="seal-upper">{ this.getUpperLine() }</div>
			</div>
		);
	}
}


// PROPERTIES //

Seal.propTypes = {
	active: PropTypes.bool,
	onActivate: PropTypes.func,
	onClick: PropTypes.func,
	scale: PropTypes.number,
	innerStyle: PropTypes.object,
	lower: PropTypes.string,
	lowerArc: PropTypes.number,
	noOrnaments: PropTypes.bool,
	removable: PropTypes.bool,
	style: PropTypes.object,
	title: PropTypes.string,
	upper: PropTypes.string,
	upperArc: PropTypes.number
};

Seal.defaultProps = {
	active: true,
	onActivate() {},
	onClick() {},
	scale: null,
	lower: 'The lower text',
	lowerArc: 150,
	removable: false,
	style: {},
	innerStyle: null,
	upper: 'The upper text',
	upperArc: 150,
	title: 'Enter a title',
	noOrnaments: false
};


// EXPORTS //

export default Seal;
