// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './vertical-slider.css';


// MAIN //

/**
* An ISLE component that allows to slideDown and slideUp - JQuery style - the header section.
*/
class VSHeader extends Component {
	constructor( props ) {
		super( props );
		this.state = {};
	}

	render() {
		return (
			<button onClick={this.props.onClick} className="vertical-slider-header">
				<h3>
					{this.props.children}
				</h3>
			</button>
		);
	}
}


// PROPERTIES //

VSHeader.propTypes = {
	onClick: PropTypes.func.isRequired
};

VSHeader.defaultProps = {};


// EXPORTS //

export default VSHeader;
