// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import PopoverTitle from 'react-bootstrap/PopoverTitle';
import PopoverContent from 'react-bootstrap/PopoverContent';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


// MAIN //

const QuestionButton = ( props ) => {
	const popover = <Popover id="popover-positioned-right">
		<PopoverTitle>{props.title}</PopoverTitle>
		<PopoverContent>{props.content}</PopoverContent>
	</Popover>;

	return (
		<OverlayTrigger trigger="hover" placement="left" rootClose overlay={popover}>
			<Button
				size="sm"
				variant="outline-secondary"
				style={{ float: 'right', padding: '0rem .4rem' }}
			>
				<div className="fa fa-question" />
			</Button>
		</OverlayTrigger>
	);
};

QuestionButton.propTypes = {
	'content': PropTypes.oneOfType([ PropTypes.string, PropTypes.node ]).isRequired,
	'title': PropTypes.string.isRequired
};


// EXPORTS //

export default QuestionButton;
