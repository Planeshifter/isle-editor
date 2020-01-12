// MODULES //

import React, { Component, Fragment, lazy, Suspense } from 'react';
import Button from 'react-bootstrap/Button';
import round from '@stdlib/math/base/special/round';
import ceil from '@stdlib/math/base/special/ceil';
import max from '@stdlib/math/base/special/max';
import min from '@stdlib/math/base/special/min';
import sample from '@stdlib/random/sample';
import logger from 'debug';
import Signup from 'components/signup';
import Login from 'components/login';
import Gate from 'components/gate';
import VoiceInput from 'components/input/voice';
import Chat from 'components/statusbar/chat';
import Tooltip from 'components/tooltip';
import KeyControls from 'components/key-controls';
import Seal from 'components/seal';
import ProgressBar from 'react-bootstrap/ProgressBar';
import isElectron from 'utils/is-electron';
import animatePosition from 'utils/animate-position';
import SessionContext from 'session/context.js';
import ConfirmModal from './confirm_modal.js';
import Score from './score';
import './statusbar.css';
const InstructorView = lazy( () => import( 'components/statusbar/instructor-view' ) );


// VARIABLES //

const debug = logger( 'isle:statusbar' );
const LOGGED_IN_COLOR = 'rgb(130, 224, 160)';
const LOGGED_OUT_COLOR = 'rgb(209, 107, 71)';


// FUNCTIONS //

function getDuration( session ) {
	let dur = new Date().getTime() - session.startTime;
	dur = round( dur / (1000 * 60) );
	return dur;
}

function isHidden( el ) {
	return el.offsetParent === null;
}

function preventPropagation( event ) {
	event.stopPropagation();
}


// MAIN //

class StatusBar extends Component {
	constructor( props, context ) {
		super( props );
		const statusbarWidth = max( 0.34 * window.innerWidth, 300 );
		const side = ( window.innerWidth - statusbarWidth ) / 2.0;

		this.state = {
			visibleSignup: false,
			visibleLogin: false,
			visibleLogout: false,
			statusbarWidth,
			side,
			recordedText: null,
			showStatusBar: !context.config.hideStatusBar,
			showProgressBar: false,
			isProgressLeaving: false,
			progress: 0,
			duration: '0'
		};
		this.hidden = true;
	}

	componentDidMount() {
		let sentNotification = false;
		const promptLogin = () => {
			const session = this.context;
			if ( !isElectron && this.state.showStatusBar ) {
				session.addNotification({
					title: 'Login',
					message: 'Please connect with your ISLE account or create a new one.',
					level: 'success',
					autoDismiss: session.config.noLoginDismiss ? 0 : 15,
					position: 'tl',
					children: <div style={{ marginBottom: '30px' }}>
						<Button size="sm" style={{ float: 'right', marginRight: '10px' }} onClick={this.signup}>Sign up</Button>
						<Button size="sm" variant="primary" style={{ float: 'right', marginRight: '10px' }} onClick={this.login}>Login</Button>
					</div>
				});
			}
		};

		const session = this.context;
		this.unsubscribe = session.subscribe( ( type, data ) => {
			setTimeout( () => {
				if ( !sentNotification && session.anonymous && session.live ) {
					promptLogin();
					sentNotification = true;
				}
			}, 3000);

			if ( type === 'self_initial_progress' ) {
				this.setState({
					progress: round( Number( data ) * 100 )
				});
			}
			else if (
				type === 'self_updated_progress' ||
				type === 'self_updated_score'
			) {
				const newState = {
					showProgressBar: true,
					isProgressLeaving: true
				};
				if ( type === 'self_updated_progress' ) {
					newState.progress = round( Number( data ) * 100 );
				}
				this.setState( newState );
				if ( this.progressTimeout ) {
					clearTimeout( this.progressTimeout );
					this.progressTimeout = null;
				}
				this.progressTimeout = setTimeout(() => {
					this.setState({
						showProgressBar: false,
						isProgressLeaving: false,
						duration: getDuration( session )
					});
					this.progressTimeout = null;
				}, 4000 );
			}
			this.forceUpdate();
		});
		window.addEventListener( 'resize', this.getStatusbarInfo );

		this.renderTextInterval = setInterval( this.renderRecordedText, 1000 );
	}

	componentWillUnmount() {
		this.unsubscribe();
		if ( this.renderTextInterval ) {
			clearInterval( this.renderTextInterval );
		}
		window.removeEventListener( 'resize', this.getStatusbarInfo );
	}

	closeSignup = () => {
		this.setState({
			visibleSignup: false
		});
	}

	closeLogin = () => {
		this.setState({
			visibleLogin: false
		});
	}

	closeLogout = () => {
		this.setState({
			visibleLogout: false
		});
	}

	toggleBarVisibility = ( event ) => {
		if ( event ) {
			event.stopPropagation();
		}
		const session = this.context;
		session.togglePresentationView();
		debug( 'Toggle visibility of statusbar...' );
		this.setState({
			showStatusBar: !this.state.showStatusBar
		});
	}

	toggleBar = () => {
		if ( this.hidden ) {
			animatePosition( this.statusbar, 'top', 0, 300 );
			this.statusbar.style.opacity = 1.0;
			this.hidden = false;
		} else {
			animatePosition( this.statusbar, 'top', -32, 300 );
			this.statusbar.style.opacity = 0.7;
			this.hidden = true;
		}
	}

	onMouseOver = () => {
		if ( this.hidden ) {
			this.statusbar.style.opacity = 1.0;
		}
	}

	onMouseOut = () => {
		if ( this.hidden ) {
			this.statusbar.style.opacity = 0.7;
		}
	}

	login = ( e ) => {
		e.stopPropagation();
		this.setState({
			visibleLogin: true
		});
	}

	signup = ( e ) => {
		e.stopPropagation();
		this.setState({
			visibleSignup: true
		});
	}

	logout = ( e ) => {
		e.stopPropagation();
		this.setState({
			visibleLogout: true
		});
	}

	handleLogout = () => {
		const session = this.context;
		session.logout();
		this.closeLogout();
	}

	getStatusbarInfo = () => {
		const statusbarWidth = max( 0.34 * window.innerWidth, 300 );
		const side = ( window.innerWidth - statusbarWidth ) / 2.0;
		this.setState({
			statusbarWidth,
			side
		});
	}

	handleBarClick = ( event ) => {
		this.toggleBar();
	}

	handleBarKeyPress = () => {
		this.toggleBar();
	}

	handleVoiceInput = ( text ) => {
		debug( 'Received voice input: ' + text );
		this.setState({
			recordedText: text
		});
		setTimeout(() => {
			this.setState({ recordedText: null });
		}, 3000 );
		const session = this.context;
		session.speechInterface.check( text );
	}

	handleVoiceInputChange = ( event ) => {
		event.stopPropagation();
	}

	renderRecordedText = () => {
		if ( this.state.recordedText ) {
			this.displayedText.innerHTML = sample( this.state.recordedText, {
				'size': 1
			});
		}
	}

	toggleProgress = () => {
		const session = this.context;
		if ( this.state.isProgressLeaving || session.isOwner() ) {
			return;
		}
		if ( !this.state.showProgressBar ) {
			this.setState({
				showProgressBar: true,
				duration: getDuration( this.context )
			});
		} else {
			this.progressTimeout = setTimeout(() => {
				this.setState({
					showProgressBar: false,
					isProgressLeaving: false,
					duration: getDuration( this.context )
				});
				this.progressTimeout = null;
			}, 12000 );
		}
	}

	jumpToUnfinished = ( event ) => {
		event.stopPropagation();
		const session = this.context;
		const first = session.unfinished[ 0 ];
		if ( first ) {
			const elem = document.getElementById( first );
			if ( isHidden( elem ) ) {
				const clone = elem.cloneNode( true );
				const newDiv = document.createElement( 'div' );
				newDiv.id = 'unfinished-container';
				clone.id = 'unfinished-elem';
				clone.classList.add( 'focus-glow' );
				newDiv.append( clone );
				document.body.appendChild( newDiv );
				setTimeout( () => {
					const element = document.getElementById( 'unfinished-container' );
					if ( element ) {
						element.parentNode.removeChild( element );
					}
				}, 4000 );
			} else {
				elem.classList.add( 'focus-glow' );
				elem.scrollIntoView();
				setTimeout( () => {
					elem.classList.remove( 'focus-glow' );
				}, 4000 );
			}
		}
	}

	getChatPosition( idx ) {
		const session = this.context;
		const margin = 10;
		const nChatsPerSide = ceil( session.chats.length / 2 );
		const maxWidth = this.state.side * 0.6;
		const width = min( ( this.state.side - margin - margin*nChatsPerSide ) / nChatsPerSide, maxWidth );
		let left = margin + ( idx * ( width + margin ) );
		if ( idx > ( nChatsPerSide-1 ) ) {
			left += this.state.statusbarWidth;
			if ( nChatsPerSide === 1 && idx === 1 ) {
				left += width + margin;
			}
		}
		const pos = {
			left,
			width
		};
		debug( 'New chat position: ' + JSON.stringify( pos ) );
		return pos;
	}

	render() {
		const session = this.context;
		const finishedLesson = this.state.progress === 100;
		const preventPropForUsers = ( evt ) => {
			if ( !this.context.anonymous ) {
				evt.stopPropagation();
			}
		};
		/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-static-element-interactions */
		const duration = <Fragment>
			<img className="statusbar-profile" alt="User Profile Pic" src={session.user.picture} onClick={preventPropagation} />
			<Tooltip placement="bottom" tooltip="Time spent in current session">
				<div className="progress-time" onClick={preventPropagation}>
					DUR: {this.state.duration} MIN
				</div>
			</Tooltip>
		</Fragment>;
		/* eslint-enable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-static-element-interactions */
		return (
			<Fragment>
				<div>
					{session.chats.map( ( chat, idx ) => {
						const pos = this.getChatPosition( idx );
						return <Chat chat={chat} idx={idx} key={idx} left={pos.left} width={pos.width} />;
					})}
					<div
						className="statusbar unselectable"
						role="button" tabIndex={0}
						ref={( statusbar ) => { this.statusbar = statusbar; }}
						onClick={this.handleBarClick} onKeyPress={this.handleBarKeyPress}
						onMouseOver={this.onMouseOver} onFocus={this.onMouseOver}
						onMouseOut={this.onMouseOut} onBlur={this.onMouseOut}
						style={{
							top: '-32px',
							display: !this.state.showStatusBar ? 'none' : null
						}}
					>
						<div className="statusbar-left"></div>
						<div className="statusbar-middle">
							<div
								className="statusbar-voice"
								style={{
									display: !session.config.hideVoiceControl ? 'inherit' : 'none'
								}}
							>
								<VoiceInput
									id="statusbar-voice"
									onClick={this.handleVoiceInputChange}
									mode="microphone" width={18} height={18}
									stopTooltip="Disable voice control (F9)"
									startTooltip="Enable voice control (F9)"
									onFinalText={this.handleVoiceInput}
									maxAlternatives={5}
									remote={{
										toggle: 120 // F9
									}}
								/>
								<span ref={( span ) => { this.displayedText = span; }} className="statusbar-voice-text" ></span>
							</div>
							{( session.hasOwner || isElectron ) ?
								<Tooltip placement="bottom" tooltip="Enter presentation mode (F7)" >
									<span role="button" tabIndex={0}
										onClick={this.toggleBarVisibility} onKeyPress={this.toggleBarVisibility}
										className="statusbar-presentation-mode"
									>
										<span className="fa fa-xs fa-eye-slash statusbar-icon" />
									</span>
								</Tooltip> : null }
							<div className="statusbar-presence" style={{
								backgroundColor: session.anonymous ? LOGGED_OUT_COLOR : LOGGED_IN_COLOR
							}}>
								<div className="statusbar-inner-presence"></div>
							</div>
							<div
								role="button" tabIndex={0}
								style={{ cursor: this.context.anonymous ? 'pointer' : 'help' }}
								className="statusbar-username"
								onClick={preventPropForUsers} onKeyPress={preventPropForUsers}
								onMouseEnter={this.toggleProgress} onFocus={this.toggleProgress}
								onMouseOut={this.toggleProgress} onBlur={this.toggleProgress}
							>
								{ session.anonymous ? 'Anonymous' : session.user.name }
							</div>
							{ session.anonymous ?
								<div>
									<Button
										size="sm"
										className="statusbar-button"
										variant="outline-secondary"
										style={{ float: 'right', marginRight: '-20px' }}
										onClick={this.signup}
										disabled={!session.live}
									>Sign up</Button>
									<Button
										size="sm"
										className="statusbar-button"
										variant="outline-secondary"
										style={{ float: 'right', marginRight: '10px' }}
										onClick={this.login}
										disabled={!session.live}
									>Login</Button>
								</div> :
								<Fragment>
									<Button size="sm" className="statusbar-button" variant="outline-secondary" style={{ float: 'right', marginRight: '10px' }} onClick={this.logout}>Log Out</Button>
									<a href={session.server} target="_blank"><Button size="sm" className="statusbar-button" variant="outline-secondary" style={{ float: 'right', marginRight: '10px' }}>Go to Dashboard</Button></a>
								</Fragment> }
							<div className="statusbar-text">
								ISLE
							</div>
						</div>
						<div className="statusbar-right"></div>
						<div
							className={`statusbar-progress ${this.state.isProgressLeaving ? 'progress-fade-out' : ''} `}
							style={{
								display: !session.config.hideProgressBar && this.state.showProgressBar ? 'inherit' : 'none'
							}}
						>
							<Gate user>
								{duration}
								<Tooltip placement="bottom" tooltip={!finishedLesson ? 'Click to preview unfinished' : 'Completed!'} >
									<div className="outer-statusbar-progress-bar">
										<ProgressBar
											label={`COMPLETION RATE: ${this.state.progress}%`}
											variant="success"
											now={this.state.progress} style={{
												height: 16,
												animation: 'anim-fade-in 0.7s',
												border: 'solid 1px darkgrey'
											}}
											onClick={this.jumpToUnfinished}
										/>
									</div>
								</Tooltip>
								<Score />
							</Gate>
						</div>
					</div>
					<Suspense fallback={null} >
						<Gate owner>
							<InstructorView />
						</Gate>
					</Suspense>
				</div>
				<Login show={this.state.visibleLogin} onClose={this.closeLogin} />
				<Signup show={this.state.visibleSignup} onClose={this.closeSignup} />
				<ConfirmModal
					show={this.state.visibleLogout}
					close={this.closeLogout}
					title="Logout"
					message="Do you really want to log out? To log in again, you will need your password."
					onConfirm={this.handleLogout}
				/>
				<KeyControls
					actions={{
						'F7': this.toggleBarVisibility
					}}
				/>
				{ finishedLesson && !session.config.hideProgressBar ?
					<Seal
						title="100%"
						upper="Congratulations!"
						lower="Lesson Completed!"
						upperArc={120}
						lowerArc={120}
						noOrnaments
						removable
						style={{
							position: 'fixed',
							right: '0px',
							bottom: '5%',
							transform: `rotate(-17deg) scale(${window.innerWidth / 1920})`,
							transformOrigin: '100% 100%',
							animation: 'anim-fade-in 1s forwards',
							background: 'linear-gradient(to right, white, silver, white)',
							fontFamily: 'Courier',
							zIndex: 1002
						}}
						innerStyle={{
							background: 'linear-gradient(to right, ghostwhite, #ffc107, ghostwhite, #ffc107, silver)'
						}}
					/> : null }
			</Fragment>
		);
	}
}


// TYPES //

StatusBar.contextType = SessionContext;


// EXPORTS //

export default StatusBar;
