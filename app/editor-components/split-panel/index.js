// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';


// MAIN //

class SplitPanel extends Component {
	constructor( props ) {
		super( props );

		this.scrollPercentage = 0;
		this.scrollTop = null;
		this.scrollHeight = null;
		this.offsetHeight = null;
		this.ignoreScrollEvents = false;
	}

	componentDidMount() {
		this.scrollTop = this.panel.scrollTop;
		this.scrollHeight = this.panel.scrollHeight;
		this.offsetHeight = this.panel.offsetHeight;
	}

	componentDidUpdate() {
		this.scrollTop = this.panel.scrollTop;
		this.scrollHeight = this.panel.scrollHeight;
		this.offsetHeight = this.panel.offsetHeight;
		this.setScrollTop( this.scrollPercentage );
	}

	handleScroll = () => {
		this.scrollTop = this.panel.scrollTop;
		this.scrollHeight = this.panel.scrollHeight;
		this.offsetHeight = this.panel.offsetHeight;

		if ( !this.ignoreScrollEvents ) {
			this.props.onScroll(
				this.scrollTop,
				this.scrollHeight,
				this.offsetHeight
			);
			this.ignoreScrollEvents = true;
		} else {
			this.ignoreScrollEvents = false;
		}
	}

	setScrollTop = ( percentage ) => {
		const scrollHeight = this.scrollHeight;
		const offsetHeight = this.offsetHeight;
		this.ignoreScrollEvents = true;
		this.panel.scrollTop = percentage * (
			scrollHeight - offsetHeight ) / 100;
		this.scrollPercentage = percentage;
		setTimeout( () => {
			this.ignoreScrollEvents = false;
		}, 20 );
	}

	render() {
		return (
			<div ref={( div ) => { this.panel = div; }} onScroll={this.handleScroll} style={{
				height: 'calc(100vh - 90px)',
				overflow: this.props.overflow
			}}>
				{this.props.children}
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

SplitPanel.defaultProps = {
	overflow: 'scroll',
	onScroll() {}
};


// PROPERTY TYPES //

SplitPanel.propTypes = {
	overflow: PropTypes.string,
	onScroll: PropTypes.func
};


// EXPORTS //

export default SplitPanel;
