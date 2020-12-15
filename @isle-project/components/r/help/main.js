// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SessionContext from '@isle-project/session/context.js';
import './rhelp.css';


// MAIN //

/**
* Make words pull up R documentation in a modal window when clicked.
*
* @property {Function} func - name of the `R function` for which to open the documentation. If not supplied, the content of the `RHelp` tag is assumed to be equal to the name of the function
* @property {string} library - name of the R package in which the function resides
* @property {boolean} visible - controls whether the help modal window should be opened at startup
*/
class RHelp extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			visible: this.props.visible,
			body: ''
		};
	}

	hideModal = () => {
		this.setState({
			visible: false
		});
	}

	showModal = () => {
		const functionName = this.props.func || this.props.children;
		if ( this.state.body === '' ) {
			const session = this.context;
			session.getRHelp( this.props.library, functionName, ( error, response, body ) => {
				if ( !error ) {
					this.setState({
						body,
						visible: true
					});
				}
			});
		}
		else {
			this.setState({
				visible: !this.state.visible
			});
		}
	}

	render() {
		const { t } = this.props;
		return (
			<span
				role="button" tabIndex={0}
				className="RHelp"
				onClick={this.showModal} onKeyPress={this.showModal}
			>
				<Modal
					backdrop={false}
					show={this.state.visible}
					title={t('r-help')}
					onHide={this.hideModal}
					className="r-help-modal"
					enforceFocus={false}
				>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-lg">{t('r-help')}</Modal.Title>
					</Modal.Header>
					<Modal.Body className="r-help-modal-body" >
						<span dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
							__html: this.state.body
						}}></span>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.hideModal}>{t('close')}</Button>
					</Modal.Footer>
				</Modal>
				<code style={{ cursor: 'pointer' }}>{this.props.children || this.props.func}</code>
			</span>
		);
	}
}


// PROPERTIES //

RHelp.propTypes = {
	func: PropTypes.string,
	library: PropTypes.string,
	visible: PropTypes.bool
};

RHelp.defaultProps = {
	func: '',
	library: 'base',
	visible: false
};

RHelp.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'R' )( RHelp );
