// MODULES //

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import logger from 'debug';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import Form from 'react-bootstrap/Form';
import Overlay from 'react-bootstrap/Overlay';
import Modal from 'react-bootstrap/Modal';
import Popover from 'react-bootstrap/Popover';
import PopoverTitle from 'react-bootstrap/PopoverTitle';
import PopoverContent from 'react-bootstrap/PopoverContent';
import { SessionContext } from '@isle-project/session';
import './login.css';


// VARIABLES //

const debug = logger( 'isle:login' );


// MAIN //

/**
* Login modal window.
*
* @property {boolean} show - controls whether to display the modal window
* @property {Function} onClose - callback invoked when closing the modal window
*/
class Login extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			email: '',
			password: '',
			show: props.show
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if ( nextProps.show !== prevState.show ) {
			return {
				email: '',
				password: '',
				show: nextProps.show
			};
		}
		return null;
	}

	handleInputChange = ( event ) => {
		event.stopPropagation();
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[ name ]: value
		});
	}

	handleForgotPassword = ( event ) => {
		event.preventDefault();
		if ( this.state.email === '' ) {
			this.setState({
				showInputOverlay: true,
				overlayTarget: ReactDOM.findDOMNode( this.emailInput ),
				invalidInputMessage: 'Please enter your email address before requesting a new password.'
			});
		} else {
			const session = this.context;
			session.forgotPassword( this.state.email );
		}
	}

	hideAfterDelay = () => {
		setTimeout( () => {
			this.setState({
				showInputOverlay: false
			});
		}, 2000 );
	}

	handleKeyPress = ( event ) => {
		event.stopPropagation();
		if ( event.charCode === 13 ) {
			this.handleSubmit( event );
		}
	}

	handleSubmit = ( event ) => {
		event.preventDefault();
		const form = {
			password: this.state.password,
			email: this.state.email
		};
		if ( form.email === '' ) {
			debug( 'Email input field is empty, show message...' );
			this.setState({
				showInputOverlay: true,
				overlayTarget: ReactDOM.findDOMNode( this.emailInput ),
				invalidInputMessage: 'Enter your email address.'
			}, this.hideAfterDelay );
		}
		else if ( form.password === '' ) {
			debug( 'Password input field is empty, show message...' );
			this.setState({
				showInputOverlay: true,
				overlayTarget: ReactDOM.findDOMNode( this.passwordInput ),
				invalidInputMessage: 'Enter your password.'
			}, this.hideAfterDelay );
		}
		else {
			const session = this.context;
			session.login( form, ( err, res, body ) => {
				if ( !err ) {
					const { message, type } = body;
					if ( message === 'ok' ) {
						this.props.onClose();
					} else {
						this.setState({
							showInputOverlay: true,
							overlayTarget: type === 'no_user' ? this.emailInput : this.passwordInput,
							invalidInputMessage: message
						}, this.hideAfterDelay );
					}
				}
			});
		}
	}

	render() {
		return (
			<Modal
				show={this.props.show}
				className="login-modal"
				onHide={this.props.onClose}
			>
				<Modal.Header closeButton >
					<Modal.Title as="h3">Login</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form horizontal>
						<FormGroup controlId="form-email" >
							<Col sm={2}>
								<FormLabel>Email</FormLabel>
							</Col>
							<Col sm={10}>
								<FormControl
									name="email"
									type="email"
									placeholder="Email"
									autoComplete="username"
									onChange={this.handleInputChange}
									onKeyPress={this.handleKeyPress}
									ref={( input ) => { this.emailInput = input; }}
								/>
							</Col>
						</FormGroup>
						<FormGroup controlId="form-password" >
							<Col sm={2}>
								<FormLabel>Password</FormLabel>
							</Col>
							<Col sm={10}>
								<FormControl
									name="password"
									type="password"
									placeholder="Password"
									autoComplete="current-password"
									onChange={this.handleInputChange}
									onKeyPress={this.handleKeyPress}
									ref={( input ) => { this.passwordInput = input; }}
								/>
							</Col>
						</FormGroup>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<button className="forgot-password-button" onClick={this.handleForgotPassword}>Forgot password?</button>
					<Button
						variant="primary"
						type="submit"
						onClick={this.handleSubmit}
					>Sign in</Button>
					<Button onClick={this.props.onClose}>Close</Button>
				</Modal.Footer>
				<Overlay
					show={this.state.showInputOverlay}
					target={this.state.overlayTarget}
					placement="right"
					containerPadding={20}
				>
					<Popover id="popover-contained">
						<PopoverTitle>Not valid</PopoverTitle>
						<PopoverContent>{this.state.invalidInputMessage}</PopoverContent>
					</Popover>
				</Overlay>
			</Modal>
		);
	}
}


// PROPERTIES //

Login.defaultProps = {
	onClose() {},
	show: false
};

Login.propTypes = {
	onClose: PropTypes.func,
	show: PropTypes.bool
};

Login.contextType = SessionContext;


// EXPORTS //

export default Login;
