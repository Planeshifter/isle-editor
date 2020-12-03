// MODULES //

import React, { Component } from 'react';
import scrollTo from '@isle-project/utils/scroll-to';


// MAIN //

/**
* Returns the filled output panel.
*/
class OutputPanel extends Component {
	/**
	* Scrolls to the bottom of the output panel after result has been inserted.
	*/
	scrollToBottom() {
		if ( this.outputPanel ) {
			scrollTo( this.outputPanel, this.outputPanel.scrollHeight, 1000 );
		}
	}

	render() {
		return (
			<div
				className="data-explorer-output-panel"
				style={{
					height: ( window.innerHeight*0.9 ) - 80
				}}
				ref={( div ) => {
					this.outputPanel = div;
				}}
			>
				{this.props.output}
			</div>
		);
	}
}


// EXPORTS //

export default OutputPanel;
