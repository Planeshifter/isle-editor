// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'components/overlay-trigger';


// MAIN //

class SolutionButton extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			showSolution: false
		};
	}

	handleClick = () => {
		this.setState({
			showSolution: !this.state.showSolution
		});
		this.props.onClick();
	}

	render() {
		const tooltip = (
			<Tooltip
				id="tooltip"
			>
				Solution becomes available after answer is submitted
				{this.props.hasHints ? 'and all hints have been requested.' : '.'}
			</Tooltip>
		);
		return ( !this.props.disabled ?
			<div style={{ display: 'inline-block' }}>
				<Button
					className="solution-button"
					variant="warning"
					size="sm"
					onClick={this.handleClick}
				>
					{ !this.state.showSolution ? 'Show Solution' : 'Hide Solution' }
				</Button>
			</div> :
			<OverlayTrigger
				placement="top"
				positionLeft={100}
				overlay={tooltip}
				rootClose={true}
			>
				<div style={{ display: 'inline-block' }}>
					<Button
						className="solution-button"
						variant="warning"
						size="sm"
						disabled
						style={{
							pointerEvents: 'none'
						}}
					>Show Solution</Button>
				</div>
			</OverlayTrigger>
		);
	}
}


// PROPERTIES //

SolutionButton.propTypes = {
	disabled: PropTypes.bool.isRequired,
	hasHints: PropTypes.bool,
	onClick: PropTypes.func.isRequired
};

SolutionButton.defaultProps = {
	hasHints: true
};


// EXPORTS //

export default SolutionButton;
