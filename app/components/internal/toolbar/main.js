// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Overlay from 'react-bootstrap/Overlay';
import Calculator from 'components/calculator';
import Draggable from 'components/draggable';
import Queue from 'components/queue';
import Gate from 'components/gate';
import Tooltip from 'components/tooltip';
import Sketchpad from 'components/sketchpad';
import Panel from 'components/panel';
import KeyControls from 'components/key-controls';
import isElectron from 'utils/is-electron';
import SessionContext from 'session/context.js';
import pixelsToNumber from 'utils/pixels-to-number';
import { ENGAGEMENT_SURVEY_START, ENGAGEMENT_SURVEY_END, TOGGLE_PRESENTATION_MODE } from 'constants/actions.js';
import { MEMBER_ACTION, RECEIVED_USERS, USER_JOINED } from 'constants/events.js';
import HelpPage from './help.js';
import Engagement from './engagement';
import './load_translations.js';
import './toolbar.css';


// MAIN //

/**
* Toolbar of widgets for students to use during the course of a lesson.
*
* @property {Array} elements - array of elements with `name`, `icon` (a font-awesome icon name), and `component` (React node to be rendered) keys
*/
class Toolbar extends Component {
	constructor( props ) {
		super( props );

		const state = {
			calculator: false,
			queue: false,
			help: false,
			sketchpad: false,
			engagementMenu: false,
			engagementInProgress: false,
			queueSize: 0,
			elements: [],
			showToolbar: true,
			sketchpadHeight: window.innerHeight * 0.6,
			sketchpadWidth: window.innerWidth * 0.75
		};
		this.state = state;
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if (
			nextProps.elements && !prevState.elements ||
			nextProps.elements.length !== prevState.elements.length
		) {
			const newState = {};
			nextProps.elements.forEach( x => {
				newState[ x.name ] = false;
				if ( x.name === 'queue' ) {
					newState.hideQueue = true;
				}
				if ( x.name === 'calculator' ) {
					newState.hideCalculator = true;
				}
				if ( x.name === 'sketchpad' ) {
					newState.hideSketchpad = true;
				}
			});
			newState.elements = nextProps.elements;
			return newState;
		}
		return null;
	}

	componentDidMount() {
		const session = this.context;
		this.unsubscribe = session.subscribe( ( type, value ) => {
			if ( type === TOGGLE_PRESENTATION_MODE ) {
				this.setState({
					showToolbar: !value
				});
			}
			if ( type === RECEIVED_USERS || type === USER_JOINED ) {
				this.forceUpdate();
			}
			else if ( type === MEMBER_ACTION && value.id === 'engagement' ) {
				const actionType = value.type;
				if ( actionType === ENGAGEMENT_SURVEY_START ) {
					this.setState({
						engagementInProgress: true,
						engagementMenu: false
					});
				}
				else if ( actionType === ENGAGEMENT_SURVEY_END ) {
					this.setState({
						engagementInProgress: false
					});
				}
			}
		});
	}

	componentWillUnmount() {
		if ( this.unsubscribe ) {
			this.unsubscribe();
		}
	}

	toggleCalculator = () => {
		this.setState({
			calculator: !this.state.calculator
		});
	}

	toggleQueue = () => {
		this.setState({
			queue: !this.state.queue
		});
	}

	toggleSketchpad = () => {
		this.setState({
			sketchpad: !this.state.sketchpad
		});
	}

	toggleEngagement = () => {
		const session = this.context;
		if ( this.state.engagementInProgress ) {
			const action = {
				id: 'engagement',
				type: ENGAGEMENT_SURVEY_END
			};
			return session.log( action, 'members' );
		}
		this.setState({
			engagementMenu: !this.state.engagementMenu
		});
	}

	toggleHelp = () => {
		this.setState({
			help: !this.state.help
		});
	}

	renderButton( elem, key ) {
		const toggleElement = () => {
			this.setState({ [elem.name]: !this.state[ elem.name ] });
		};
		return (
			<Tooltip key={key} tooltip={`${this.state[ elem.name ] ? this.props.t( 'close' ) : this.props.t( 'open' )} ${elem.name}`} placement="right" >
				<Button
					variant="light"
					className="toolbar-button"
					onClick={toggleElement}
					onKeyPress={toggleElement}
					style={{
						display: 'inherit'
					}}
				>
					<span className={`fa fa-lg fa-${elem.icon} toolbar-icon`} />
				</Button>
			</Tooltip>
		);
	}

	renderEngagementButtons = ( props ) => {
		const session = this.context;
		return (
			<ButtonGroup className="toolbar-engagement-buttons" {...props} >
				<Tooltip tooltip={this.props.t( 'yes-no' )} placement="bottom" >
					<Button
						variant="light"
						className="toolbar-button"
						onClick={() => {
							const action = {
								id: 'engagement',
								type: ENGAGEMENT_SURVEY_START,
								value: 'yes:no'
							};
							session.log( action, 'members' );
						}}
						aria-label={`${this.props.t( 'yes-no' )} ${this.props.t( 'poll' )}`}
					>
						<span className="fa fa-lg fa-check toolbar-icon" />
					</Button>
				</Tooltip>
				<Tooltip tooltip={this.props.t( 'slow-fast' )} placement="bottom" >
					<Button
						variant="light"
						className="toolbar-button"
						onClick={() => {
							const action = {
								id: 'engagement',
								type: ENGAGEMENT_SURVEY_START,
								value: 'too-slow:too-fast'
							};
							session.log( action, 'members' );
						}}
						aria-label={`${this.props.t( 'slow-fast' )} ${this.props.t( 'poll' )}`}
					>
						<span className="fa fa-lg fa-tachometer-alt toolbar-icon" />
					</Button>
				</Tooltip>
				<Tooltip tooltip={this.props.t( 'like-dislike' )} placement="bottom" >
					<Button
						variant="light"
						className="toolbar-button"
						onClick={() => {
							const action = {
								id: 'engagement',
								type: ENGAGEMENT_SURVEY_START,
								value: 'like:dislike'
							};
							session.log( action, 'members' );
						}}
						aria-label={`${this.props.t( 'like-dislike' )} ${this.props.t( 'poll' )}`}
					>
						<span className="fa fa-lg fa-thumbs-up toolbar-icon" />
					</Button>
				</Tooltip>
				<Tooltip tooltip={this.props.t( 'survey' )} placement="bottom" >
					<Button
						variant="light"
						className="toolbar-button"
						onClick={() => {
							const action = {
								id: 'engagement',
								type: ENGAGEMENT_SURVEY_START,
								value: 'survey'
							};
							session.log( action, 'members' );
						}}
						aria-label={this.props.t( 'survey' )}
					>
						<span className="fa fa-lg fa-poll toolbar-icon" />
					</Button>
				</Tooltip>
			</ButtonGroup>
		);
	}

	render() {
		const session = this.context;
		const { t } = this.props;
		const close = t( 'close' );
		const open = t( 'open' );
		return (
			<Fragment>
				<ButtonGroup vertical className="toolbar-buttongroup" style={{
					display: this.state.showToolbar ? 'inherit' : 'none'
				}} >
					{this.state.elements.filter( x => !!x.component ).map( ( x, i ) => this.renderButton( x, i ))}
					<Tooltip tooltip={`${this.state.calculator ? close : open} ${t( 'calculator' )} (F2)`} placement="right" >
						<Button
							variant={this.state.calculator ? 'success' : 'light'}
							className="toolbar-button"
							onClick={this.toggleCalculator}
							onKeyPress={this.toggleCalculator}
							style={{
								display: !this.state.hideCalculator ? 'inherit' : 'none'
							}}
							aria-label={`${this.state.calculator ? close : open} ${t( 'calculator' )}`}
						>
							<span className="fa fa-lg fa-calculator toolbar-icon" />
						</Button>
					</Tooltip>
					{( session.hasOwner || isElectron ) ?
						<Button
							variant={this.state.queue ? 'success' : 'light'}
							className="toolbar-button"
							onClick={this.toggleQueue} onKeyPress={this.toggleQueue}
							style={{
								display: !this.state.hideQueue ? 'inherit' : 'none'
							}}
							aria-label={`${this.state.queue ? close : open} ${t( 'help-queue' )}`}
						>
							<Tooltip tooltip={`${this.state.queue ? close : open} ${t( 'help-queue' )}`} placement="right" >
								<span className="fa fa-lg fa-question-circle toolbar-icon" />
							</Tooltip>
							<Tooltip placement="right" tooltip={t( 'num-open-questions' )} >
								<span className="toolbar-queue-counter" >{`   ${this.state.queueSize}`}</span>
							</Tooltip>
						</Button> : null
					}
					<Gate owner >
						<Tooltip
							tooltip={this.state.engagementInProgress ? this.props.t( 'finish-poll' ) : this.props.t( 'polls' )}
							placement={this.state.engagementInProgress ? 'right' : 'top'}
						>
							<Button
								variant={this.state.engagementInProgress ? 'warning' : ( this.state.engagementMenu ? 'success' : 'light' )}
								className="toolbar-button"
								onClick={this.toggleEngagement}
								ref={div => {
									this.engagementButton = div;
								}}
								aria-label={this.state.engagementInProgress ? this.props.t( 'finish-poll' ) : this.props.t( 'open-poll-menu' )}
							>
								<span className="fa fa-lg fa-poll-h toolbar-icon" />
							</Button>
						</Tooltip>
						<Overlay
							placement="right"
							show={this.state.engagementMenu}
							target={this.engagementButton}
							trigger="click"
						>
							{this.renderEngagementButtons()}
						</Overlay>
					</Gate>
					<Tooltip tooltip={`${this.state.sketchpad ? close : open} ${t( 'sketchpad' )}`} placement="right" >
						<Button
							variant={this.state.sketchpad ? 'success' : 'light'}
							className="toolbar-button"
							onClick={this.toggleSketchpad}
							onKeyPress={this.toggleSketchpad}
							style={{
								display: !this.state.hideSketchpad ? 'inherit' : 'none'
							}}
							aria-label={`${this.state.sketchpad ? close : open} ${t( 'sketchpad' )}`}
						>
							<span className="fa fa-lg fa-paint-brush toolbar-icon" />
						</Button>
					</Tooltip>
					<Tooltip tooltip={`${this.state.help ? close : open} ${t( 'documentation' )}`} placement="right" >
						<Button
							variant={this.state.help ? 'success' : 'light'}
							className="toolbar-button"
							onClick={this.toggleHelp}
							onKeyPress={this.toggleHelp}
							aria-label={`${this.state.help ? close : open} ${t( 'documentation' )}`}
						>
							<span className="fa fa-lg fa-book toolbar-icon" />
						</Button>
					</Tooltip>
				</ButtonGroup>
				<Engagement session={this.context} onHide={this.toggleEngagement} />
				{this.state.sketchpad ?
					<Draggable resizable onResize={( event, direction, ref ) => {
						this.setState({
							sketchpadWidth: pixelsToNumber( ref.style.width ) - 50,
							sketchpadHeight: pixelsToNumber( ref.style.height ) - 150
						});
					}} default={{
						width: this.state.sketchpadWidth + 50,
						height: this.state.sketchpadHeight + 150
					}} minWidth={510} minHeight={300} >
						<Panel
							title={this.props.t( 'sketchpad' )}
							style={{ maxWidth: 'none' }}
							header={this.props.t( 'sketchpad' )} onHide={this.toggleSketchpad} minimizable
							ref={( div ) => {
								this.sketchpad = div;
							}}
						>
							<Sketchpad
								id={`${session.namespaceName}-${session.lessonName}-toolbar-sketchpad`}
								canvasWidth={this.state.sketchpadWidth} canvasHeight={this.state.sketchpadHeight}
								dynamicallyHideButtons
							/>
						</Panel>
					</Draggable> : null
				}
				<Calculator show={this.state.calculator} onHide={this.toggleCalculator} />
				<Queue
					id="main_queue"
					show={this.state.queue}
					onHide={this.toggleQueue}
					onQueueSize={( queueSize ) => {
						this.setState({
							queueSize
						});
					}}
					onNewQuestion={() => {
						session.addNotification({
							title: t( 'queue' ),
							message: t( 'posted-to-queue' ),
							level: 'success',
							position: 'tr',
							action: {
								label: t( 'open-queue'),
								callback: () => {
									this.setState({
										queue: true
									});
								}
							}
						});
					}}
				/>
				{this.state.elements.filter( x => !!x.component ).map( ( x, key ) => {
					const toggleElement = () => {
						this.setState({ [x.name]: !this.state[ x.name ] });
					};
					const elem = x.component;
					return this.state[ x.name ] ?
					<Draggable bounds="#Lesson" cancel=".card-body,.cancel" key={key} >
						<div className="toolbar-outer-element" >
							<div className="toolbar-inner-element" tabIndex={0} role="button" >
								<elem.type {...elem.props} style={{
									position: 'inherit',
									margin: '0px'
								}} >
									{elem.props.children}
								</elem.type>
							</div>
							<button
								name={elem.props.name}
								className="toolbar-hide-button fa fa-times"
								onClick={toggleElement}
							/>
						</div>
					</Draggable> : null;
				})}
				{this.state.help ? <HelpPage session={this.context} onClose={this.toggleHelp} /> : null }
				<KeyControls
					actions={{
						'F2': this.toggleCalculator
					}}
				/>
			</Fragment>
		);
	}
}


// PROPERTIES //

Toolbar.propTypes = {
	elements: PropTypes.array // eslint-disable-line react/no-unused-prop-types
};

Toolbar.defaultProps = {
	elements: []
};

Toolbar.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'toolbar' )( Toolbar );
