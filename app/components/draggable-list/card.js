// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';


// VARIABLES //

const style = {
	border: '1px dashed gray',
	padding: '0.5rem 1rem',
	marginBottom: '.5rem',
	backgroundColor: 'white',
	cursor: 'move'
};

const cardSource = {
	beginDrag( props ) {
		return {
			id: props.id,
			index: props.index
		};
	}
};

const cardTarget = {
	hover( props, monitor, component ) {
		const dragIndex = monitor.getItem().index;
		const hoverIndex = props.index;

		// Don't replace items with themselves
		if ( dragIndex === hoverIndex ) {
			return;
		}

		// Determine rectangle on screen
		const hoverBoundingRect = findDOMNode( component ).getBoundingClientRect();

		// Get vertical middle
		const hoverMiddleY = ( hoverBoundingRect.bottom - hoverBoundingRect.top ) / 2;

		// Determine mouse position
		const clientOffset = monitor.getClientOffset();

		// Get pixels to the top
		const hoverClientY = clientOffset.y - hoverBoundingRect.top;

		// Only perform the move when the mouse has crossed half of the items height
		// When dragging downwards, only move when the cursor is below 50%
		// When dragging upwards, only move when the cursor is above 50%

		// Dragging downwards
		if ( dragIndex < hoverIndex && hoverClientY < hoverMiddleY ) {
			return;
		}

		// Dragging upwards
		if ( dragIndex > hoverIndex && hoverClientY > hoverMiddleY ) {
			return;
		}

		// Time to actually perform the action
		props.moveCard( dragIndex, hoverIndex );

		// Note: we're mutating the monitor item here!
		// Generally it's better to avoid mutations, but it's good here for the sake of performance to avoid expensive index searches.
		monitor.getItem().index = hoverIndex;
	}
};


// FUNCTIONS //

const sourceCollect = ( connect, monitor ) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging()
});

const targetCollect = connect => ({
	connectDropTarget: connect.dropTarget()
});


// MAIN //

class Card extends Component {
	render() {
		const { text, isDragging, connectDragSource, connectDropTarget } = this.props;
		const opacity = isDragging ? 0 : 1;
		return connectDragSource( connectDropTarget(
			<div style={{ ...style, opacity }}>
				{text}
			</div>
		) );
	}
}


// PROPERTIES //

Card.propTypes = {
	connectDragSource: PropTypes.func.isRequired,
	connectDropTarget: PropTypes.func.isRequired,
	id: PropTypes.any.isRequired,   // eslint-disable-line
	index: PropTypes.number.isRequired, // eslint-disable-line
	isDragging: PropTypes.bool.isRequired,
	moveCard: PropTypes.func.isRequired, // eslint-disable-line
	text: PropTypes.string.isRequired
};


// EXPORTS //

export default DragSource( 'card', cardSource, sourceCollect )(
	DropTarget( 'card', cardTarget, targetCollect )( Card )
);
