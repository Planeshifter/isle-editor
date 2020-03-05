// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Popover from 'react-bootstrap/Popover';
import PopoverTitle from 'react-bootstrap/PopoverTitle';
import PopoverContent from 'react-bootstrap/PopoverContent';
import Button from 'react-bootstrap/Button';
import noop from '@stdlib/utils/noop';
import Draggable from 'components/draggable';
import VoiceControl from 'components/voice-control';
import Tooltip from 'components/tooltip';
import OverlayTrigger from 'components/overlay-trigger';
import KeyControls from 'components/key-controls';
import scrollTo from 'utils/scroll-to';
import isElectron from 'utils/is-electron';
import SessionContext from 'session/context.js';
import { CHAT_MESSAGE, MARK_MESSAGES, MEMBER_HAS_JOINED_CHAT, MEMBER_HAS_LEFT_CHAT } from 'constants/events.js';
import renderTime from './render_time.js';
import VOICE_COMMANDS from './voice_commands.json';
import './chat.css';


// VARIABLES //

const debug = logger( 'isle:statusbar:chat' );


// MAIN //

class Chat extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			opened: true,
			value: '',
			hasNews: false,
			maximized: false
		};
	}

	componentDidMount() {
		debug( 'Component has mounted. Subscribe to session: ' );
		const session = this.context;
		this.unsubscribe = session.subscribe( ( type ) => {
			if (
				type === CHAT_MESSAGE ||
				type === MEMBER_HAS_JOINED_CHAT ||
				type === MEMBER_HAS_LEFT_CHAT
			) {
				this.setState({
					hasNews: true
				});
			}
			else if ( type === MARK_MESSAGES ) {
				this.setState({
					hasNews: false
				});
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	onScroll = () => {
		if (
			this.chatbody.scrollTop + this.chatbody.clientHeight >= this.chatbody.scrollHeight
		) {
			const session = this.context;
			session.markChatMessagesAsRead( this.props.chat.name );
		}
	}

	sendMessage = () => {
		const session = this.context;
		session.sendChatMessage( this.props.chat.name, this.state.value );
		scrollTo( this.chatbody, this.chatbody.scrollHeight, 1000 );

		this.setState({
			value: ''
		});
	}

	changedText = ( event ) => {
		this.setState({
			value: event.target.value,
			hasNews: false
		});
	}

	insertText = ( text ) => {
		this.setState({
			value: this.state.value + ' ' + text
		});
	}

	closeChat = () => {
		const session = this.context;
		session.leaveChat( this.props.chat.name );
	}

	onMouseOver = () => {
		if ( !this.state.opened ) {
			this.chat.style.opacity = this.state.opened ? 0.7 : 1.0;
		}
	}

	onMouseOut = () => {
		if ( !this.state.opened ) {
			this.chat.style.opacity = this.state.opened ? 1.0 : 0.7;
		}
	}

	toggleMaximize = () => {
		const newState = {
			maximized: !this.state.maximized
		};
		if ( newState.maximized && !this.state.opened ) {
			newState.opened = true;
		}
		this.setState( newState );
	}

	toggleChat = () => {
		this.setState({
			opened: !this.state.opened,
			hasNews: false
		});
	}

	renderMembers() {
		const { chat } = this.props;
		const userlistPopover = <Popover id="userlistPopover" >
			<PopoverTitle>Members of {chat.name} chat:</PopoverTitle>
			<PopoverContent>
				<ListGroup>
					{chat.members.map( ( member, idx ) => {
						return <ListGroupItem style={{ padding: '3px 3px' }} key={idx}>{member.name}</ListGroupItem>;
					})}
				</ListGroup>
			</PopoverContent>
		</Popover>;
		return ( <OverlayTrigger trigger={[ 'hover', 'focus' ]} placement="bottom" overlay={userlistPopover}>
			<div
				className="chat-members"
				style={{
					display: this.state.opened ? 'block' : 'none'
				}}
			>
				{chat.members.map( ( member, idx ) => {
					return <span key={idx}>{member.name}{ idx !== chat.members.length-1 ? ', ' : null }</span>;
				})}
			</div>
		</OverlayTrigger> );
	}

	renderChatBody() {
		const { chat } = this.props;
		const session = this.context;
		return (
			<div
				className="chat-body-outer"
				style={{
					display: this.state.opened ? 'block' : 'none'
				}}
			>
				<div
					className="chat-body cancel"
					ref={( chatbody ) => { this.chatbody = chatbody; }}
					onScroll={this.onScroll}
					style={{
						height: this.state.maximized ? '70vh' : '196px'
					}}
				>
					{chat.messages.map( ( msg, idx ) => (<div className={msg.unread ? 'chat-message unread' : 'chat-message'} key={idx} >
						<img
							className="chat-picture"
							src={session.server + '/thumbnail/' + ( msg.picture ? msg.picture : 'anonymous.jpg' )}
							alt="Profile Pic"
						/>
						<div className="chat-message-right" >
							<span className="chat-user">{msg.user}</span>
							{' - '}
							<span className="chat-time">{renderTime( msg.time )}</span>
							{': '}
							<br />
							<span className="chat-message-content">{msg.content}</span>
						</div>
					</div>) )}
				</div>
				<FormControl
					as="textarea"
					className="chat-textarea cancel"
					onChange={this.changedText}
					value={this.state.value}
					placeholder="Type your message..."
					rows={3}
				/>
				<Button
					className="center" size="sm" variant="secondary"
					style={{ marginTop: '4px', marginBottom: '4px' }}
					onClick={this.state.value === '' ? noop : this.sendMessage}
				>Send Message</Button>
				<VoiceControl id={this.props.chat.name} reference={this}
					commands={VOICE_COMMANDS}
				/>
				<KeyControls
					actions={{
						'Enter': () => {
							if ( this.state.value.length > 0 ) {
								this.sendMessage();
							}
						}
					}}
				/>
			</div>
		);
	}

	render() {
		let { chat, left, width } = this.props;
		const style = {
			position: isElectron ? 'absolute' : 'fixed',
			left
		};
		if ( this.state.maximized && this.state.opened ) {
			style.width = '40vw';
		} else {
			style.width = width;
		}
		const ident = 'chat_' + chat.name;
		return (
			<Draggable cancel=".cancel" >
				<div id={ident} className="chat-outer-div" style={style} >
					<div
						className="chat-div"
						style={{
							opacity: this.state.opened ? 1.0 : 0.7
						}}
						ref={( chat ) => { this.chat = chat; }}
						onMouseOver={this.onMouseOver}
						onFocus={this.onMouseOver}
						onMouseOut={this.onMouseOut}
						onBlur={this.onMouseOut}
					>{chat.name}
						<span className="chat-presence" style={{
							display: this.state.hasNews ? 'inline' : 'none'
						}} />
						<Tooltip tooltip="Close" placement="right">
							<button className="chat-header-button" onClick={this.closeChat}>
								<i className="fas fa-times"></i>
							</button>
						</Tooltip>
						<Tooltip tooltip="Maximize" placement="left">
							<button className="chat-header-button" onClick={this.toggleMaximize} >
								<i className="far fa-window-maximize" ></i>
							</button>
						</Tooltip>
						<Tooltip tooltip="Minimize" placement="left">
							<button className="chat-header-button" onClick={this.toggleChat}>
								<i className="far fa-window-minimize"></i>
							</button>
						</Tooltip>
					</div>
					{this.renderMembers()}
					{this.renderChatBody()}
				</div>
			</Draggable>
		);
	}
}


// TYPES //

Chat.defaultProps = {
	left: 400,
	width: 600
};

Chat.propTypes = {
	chat: PropTypes.object.isRequired,
	left: PropTypes.number,
	width: PropTypes.number
};

Chat.contextType = SessionContext;


// EXPORTS //

export default Chat;
