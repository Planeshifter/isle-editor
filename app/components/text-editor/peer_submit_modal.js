// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// MAIN //

class PeerSubmitModal extends Component {
	clickHide = () => {
		this.props.onHide();
	}

	handleSubmissionToReviewer = () => {
		this.props.onSubmitToReviewer();
		this.props.onHide();
	}

	handleSubmissionComments = () => {
		this.props.onSubmitComments();
		this.props.onHide();
	}

	handleFinalSubmission = () => {
		this.props.onFinalSubmit();
		this.props.onHide();
	}

	render() {
		return ( <Modal
			onHide={this.clickHide}
			show={this.props.show}
			dialogClassName="modal-75w"
		>
			<Modal.Header closeButton>
				<Modal.Title>Peer Review Submission</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				To send your report to the individual review it, click the left-hand button that reads &ldquo;Submit to Reviewer&rdquo;. If you are sending comments to an individual, click the right-hand button entitled &ldquo;Send Review Comments&rdquo;.
			</Modal.Body>
			<Modal.Footer>
				<Container>
					<Row>
						<Col style={{ margin: 8 }}><Button variant="success" disabled={this.props.disabledSubmitButton} onClick={this.handleSubmissionToReviewer}>{this.props.submitButtonLabel}</Button></Col>
						<Col style={{ margin: 8 }}><Button variant="success" disabled={this.props.disabledReviewButton} onClick={this.handleSubmissionComments}>{this.props.reviewButtonLabel}</Button></Col>
						<Col style={{ margin: 8 }}><Button variant="success" disabled={this.props.disabledFinalButton} onClick={this.handleFinalSubmission}>{this.props.finalButtonLabel}</Button></Col>
					</Row>
				</Container>
			</Modal.Footer>
		</Modal> );
	}
}


// PROPERTIES //

PeerSubmitModal.propTypes = {
	onHide: PropTypes.func,
	disabledFinalButton: PropTypes.bool,
	disabledSubmitButton: PropTypes.bool,
	disabledReviewButton: PropTypes.bool,
	onFinalSubmit: PropTypes.func,
	onSubmitToReviewer: PropTypes.func,
	onSubmitComments: PropTypes.func,
	finalButtonLabel: PropTypes.string,
	submitButtonLabel: PropTypes.string,
	reviewButtonLabel: PropTypes.string,
	show: PropTypes.bool.isRequired
};

PeerSubmitModal.defaultProps = {
	finalButtonLabel: 'Submit Final Report',
	submitButtonLabel: 'Submit to Reviewer',
	reviewButtonLabel: 'Send Review Comments',
	disabledFinalButton: false,
	disabledSubmitButton: false,
	disabledReviewButton: false,
	onHide() {},
	onFinalSubmit() {},
	onSubmitToReviewer() {},
	onSubmitComments() {}
};


// EXPORTS //

export default PeerSubmitModal;
