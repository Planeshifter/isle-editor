// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ProgressBar from 'react-bootstrap/ProgressBar';
import indexOf from '@stdlib/utils/index-of';
import contains from '@stdlib/assert/contains';
import isFunction from '@stdlib/assert/is-function';
import keys from '@stdlib/utils/keys';
import ChatButton from 'components/chat-button';
import VideoChatButton from 'components/video-chat-button';
import Tooltip from 'components/tooltip';
import { CAT20 } from 'constants/colors';
import { FOCUS_ELEMENT, LOSE_FOCUS_ELEMENT, MEMBER_ACTION, RECEIVED_USERS,
	SELECTED_COHORT, USER_JOINED, USER_LEFT, USER_PROGRESS } from 'constants/events.js';
import './user_list.css';


// VARIABLES //

const debug = logger( 'isle:statusbar:instructor-view' );
const IDs = []; // array of IDs for lesson elements


// FUNCTIONS //

function isHidden( el ) {
	return el.offsetParent === null;
}

function removeGlowElems() {
	// Remove glow effect from previously highlighted elements:
	const focused = document.getElementsByClassName( 'focus-glow' );
	while ( focused.length ) {
		focused[0].classList.remove( 'focus-glow' );
	}
	const element = document.getElementById( 'duplicated-container' );
	if ( element ) {
		element.parentNode.removeChild( element );
	}
}


// MAIN //

class UserList extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			filter: null,
			selected: null
		};
	}

	componentDidMount() {
		const session = this.props.session;
		this.unsubscribe = session.subscribe( ( type, action ) => {
			if (
				type === RECEIVED_USERS ||
				type === USER_JOINED ||
				type === USER_LEFT ||
				type === SELECTED_COHORT ||
				type === USER_PROGRESS
			) {
				debug( 'Should render the user list...' );
				this.forceUpdate();
			}
			else if (
				type === MEMBER_ACTION &&
				( action.type === FOCUS_ELEMENT || action.type === LOSE_FOCUS_ELEMENT )
			) {
				if ( action.email === this.state.selected ) {
					this.highlightElement( action.email );
				}
				this.forceUpdate();
			}
		});
	}

	componentWillUnmount() {
		debug( 'Unmount user list...' );
		if ( isFunction( this.unsubscribe ) ) {
			this.unsubscribe();
		}
		removeGlowElems();
	}

	highlightElement = ( email ) => {
		const session = this.props.session;
		const userFocuses = session.userFocuses;
		const id = userFocuses[ email ];
		debug( 'ID of element to be focused is: '+id );

		removeGlowElems();
		const elem = document.getElementById( id );
		if ( elem ) {
			debug( 'Found element, should add glow effect...' );
			if ( isHidden( elem ) ) {
				const clone = elem.cloneNode( true );
				const newDiv = document.createElement( 'div' );
				newDiv.id = 'duplicated-container';
				clone.id = 'duplicated-elem';
				clone.classList.add( 'focus-glow' );
				newDiv.append( clone );
				document.body.appendChild( newDiv );
			} else {
				elem.classList.add( 'focus-glow' );
				elem.scrollIntoView();
			}
		}
	}

	handleClickFactory = ( email ) => {
		return () => {
			if ( this.state.selected === email ) {
				removeGlowElems();
				return this.setState({
					selected: null
				});
			}
			this.highlightElement( email );
			this.setState({
				selected: email
			});
		};
	}

	thumbnailClickFactory = ( email ) => {
		return ( event ) => {
			event.stopPropagation();
			this.props.onThumbnailClick( email );
		};
	}

	filter = ( evt ) => {
		debug( 'Clicked on progressbar...' );
		const id = evt.target.innerText;
		let newFilter;
		if ( this.state.filter === id ) {
			newFilter = null;
		} else {
			newFilter = id;
		}
		this.setState({
			filter: newFilter
		});
	}

	render() {
		const session = this.props.session;
		const userFocuses = session.userFocuses;
		const userProgress = session.userProgress;
		const ID_COUNTS = {};
		let ID_COUNT_SUM = 0;
		const list = <ListGroup className="user-list-group" style={{ height: window.innerHeight / 1.5 }}>
			{session.userList.filter( user => {
				if (
					session.selectedCohort &&
					!contains( session.selectedCohort.members, user.email )
				) {
					return false;
				}
				const id = userFocuses[ user.email ];
				if ( id ) {
					let pos = indexOf( IDs, id );
					if ( pos === -1 ) {
						pos = IDs.length;
						IDs.push( id );
					}
					ID_COUNTS[ id ] = ( ID_COUNTS[ id ] || 0 ) + 1;
					ID_COUNT_SUM += 1;
				}
				if ( !this.state.filter ) {
					return true;
				}
				return id === this.state.filter;
			}).map( ( user, idx ) => {
				let focusedID = null;
				const id = userFocuses[ user.email ];
				if ( id ) {
					let pos = indexOf( IDs, id );
					focusedID = (
						<span style={{
							float: 'right',
							color: CAT20[ pos % CAT20.length ]
						}}>
							{id}
						</span>
					);
				}
				const color = user.owner ? '#3c763d' : 'black';
				let background;
				if ( this.state.selected === user.email ) {
					background = '#e0a800';
				} else {
					background = user.inactive ? 'lightgrey' : 'transparent';
				}
				const src = session.server + '/thumbnail/' + user.picture;
				const handleClick = this.thumbnailClickFactory( user.email );
				const showInteractionButtons =
					session.user.email !== user.email &&
					!user.inactive;
				return (
					<ListGroupItem
						className="user-list-item"
						key={idx}
					>
						<div style={{ width: '100%' }} >
							<Tooltip placement="right" tooltip="Click to open user actions" >
								<span role="button" tabIndex={0} onClick={handleClick} onKeyPress={handleClick}>
									<img
										className="user-thumbnail"
										alt="User thumbnail"
										src={src}
									/>
								</span>
							</Tooltip>
							<Tooltip placement="bottom" tooltip="Lesson Progress">
								<ProgressBar className="user-list-progress" now={userProgress[ user.email ] * 100} />
							</Tooltip>
							{ showInteractionButtons ? <ChatButton showTooltip={false} for={`Chat with ${user.name}`} /> : null }
							{ showInteractionButtons ? <VideoChatButton showTooltip={false} for={`${session.user.name}-${user.name}`} subject={`Video with ${user.name}`} style={{ marginLeft: 5 }} /> : null }
						</div>
						<div style={{ width: '100%', color }} >
							{user.name} ({user.email}) | {user.joinTime} - {user.exitTime}
							{ focusedID ? <Tooltip placement="left" tooltip="Element user is interacting with" >
								<Button
									className="user-list-active-button"
									variant="outline-secondary"
									size="sm"
									onClick={this.handleClickFactory( user.email )}
									style={{
										background
									}}
								>
									{focusedID}
								</Button>
							</Tooltip> : null }
						</div>
					</ListGroupItem>
				);
			})}
		</ListGroup>;
		const activeIDs = keys( ID_COUNTS );
		return (
			<Fragment>
				<ProgressBar style={{ cursor: 'pointer' }} onClick={this.filter} >
					{activeIDs.map( ( id, key ) => {
						const pos = indexOf( IDs, id );
						const color = CAT20[ pos % CAT20.length ];
						return ( <ProgressBar
							style={{
								background: this.state.filter !== id ? color : 'gold'
							}}
							key={key}
							now={( ID_COUNTS[ id ] / ID_COUNT_SUM ) * 100.0}
							label={id}
						/> );
					})}
				</ProgressBar>
				{list}
			</Fragment>
		);
	}
}


// PROPERTIES //

UserList.propTypes = {
	onThumbnailClick: PropTypes.func.isRequired,
	session: PropTypes.object.isRequired
};


// EXPORTS //

export default UserList;
