// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from '@isle-project/components/overlay-trigger';


// MAIN //

/**
* A tooltip overlay.
*
* @property {string} id - identifier
* @property {string} tooltip - tooltip content
* @property {string} placement - direction of the tooltip
* @property {boolean} show - controls whether the tooltip shall be displayed
* @property {Function} onToggle - function invoked when tooltip is toggled
*/
class Wrapper extends Component {
	render() {
		const id = this.props.id;
		if ( !this.props.tooltip || !this.props.show ) {
			return this.props.children;
		}
		const tooltip = <Tooltip id={id} >{this.props.tooltip}</Tooltip>;
		return (
			<OverlayTrigger placement={this.props.placement} onToggle={this.props.onToggle} overlay={tooltip} >
				{this.props.children}
			</OverlayTrigger>
		);
	}
}


// PROPERTIES //

Wrapper.propTypes = {
	id: PropTypes.string,
	show: PropTypes.bool,
	tooltip: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	placement: PropTypes.oneOf([ 'top', 'right', 'bottom', 'left' ]),
	onToggle: PropTypes.func
};

Wrapper.defaultProps = {
	id: 'tooltip',
	placement: 'right',
	show: true,
	tooltip: null,
	onToggle: null
};


// EXPORTS //

export default Wrapper;
