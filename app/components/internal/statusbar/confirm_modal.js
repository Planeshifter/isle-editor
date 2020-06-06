// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


// MAIN //

const ConfirmModal = ( props ) => (
	<Modal show={props.show} onHide={props.close}>
		<Modal.Header>
			<Modal.Title>{props.title}</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			{props.message}
		</Modal.Body>
		<Modal.Footer>
			<Button onClick={props.close}>{props.t( 'cancel' )}</Button>
			<Button variant="danger" onClick={props.onConfirm}>{props.t( 'confirm' )}</Button>
		</Modal.Footer>
	</Modal>
);


// TYPES //

ConfirmModal.propTypes = {
	close: PropTypes.func.isRequired,
	message: PropTypes.string.isRequired,
	onConfirm: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired
};


// EXPORTS //

export default ConfirmModal;
