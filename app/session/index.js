/* eslint-disable class-methods-use-this, max-lines */

// MODULES //

import qs from 'querystring';
import logger from 'debug';
import localforage from 'localforage';
import { basename } from 'path';
import contains from '@stdlib/assert/contains';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import isFunction from '@stdlib/assert/is-function';
import isEmptyArray from '@stdlib/assert/is-empty-array';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import hasOwnProp from '@stdlib/assert/has-own-property';
import objectKeys from '@stdlib/utils/keys';
import countBy from '@stdlib/utils/count-by';
import pluck from '@stdlib/utils/pluck';
import identity from '@stdlib/utils/identity-function';
import copy from '@stdlib/utils/copy';
import clamp from '@stdlib/math/base/special/clamp';
import { OPEN_CPU_DEFAULT_SERVER, OPEN_CPU_IDENTITY } from 'constants/opencpu';
import isElectron from 'utils/is-electron';
import randomstring from 'utils/randomstring/alphanumeric';
import io from 'socket.io-client';
import SpeechInterface from 'speech-interface';
import { TOGGLE_PRESENTATION_MODE } from 'constants/actions.js';
import { CHAT_MESSAGE, COLLABORATIVE_EDITING_EVENTS, DISCONNECTED_FROM_SERVER,
	FOCUS_ELEMENT, LOSE_FOCUS_ELEMENT, JOINED_COLLABORATIVE_EDITING,
	LOGGED_IN, LOGGED_OUT, MARK_MESSAGES, MEMBER_ACTION,
	MEMBER_HAS_JOINED_CHAT, MEMBER_HAS_LEFT_CHAT, OWN_CHAT_MESSAGE, POLLED_COLLABORATIVE_EDITING_EVENTS,
	RECEIVED_CHAT_HISTORY, RECEIVED_LESSON_INFO, RECEIVED_USERS, RETRIEVED_CURRENT_USER_ACTIONS,
	RETRIEVED_USER_ACTIONS, RECEIVED_USER_RIGHTS, REMOVED_CHAT, RETRIEVED_COHORTS, SELF_HAS_JOINED_CHAT,
	SELF_HAS_LEFT_CHAT, SELF_INITIAL_PROGRESS, SELF_UPDATED_PROGRESS, SELF_UPDATED_SCORE,
	SENT_COLLABORATIVE_EDITING_EVENTS, SERVER_IS_LIVE, USER_JOINED, USER_LEFT } from 'constants/events.js';
import beforeUnload from 'utils/before-unload';
import POINTS from 'constants/points.js';


// VARIABLES //

const debug = logger( 'isle:session' );
const PATH_REGEXP = /^\/([^/]*)\/([^/]*)\//i;
const STDOUT_REGEX = /\/ocpu\/tmp\/[^/]+\/stdout/;
const GRAPHICS_REGEX = /\/ocpu\/tmp\/[^/]+\/graphics\/[^\n]*/g;
const ERR_REGEX = /\nIn call:[\s\S]*$/gm;
const HELP_PATH_REGEX = /\/(?:site-)?library\/([^/]*)\/help\/([^/"]*)/;
let userRights = null;
let initializedProgress = false;
let updateTime = new Date().getTime();
let addedScore = 0;

const PRIVATE_VARS = {
	progress: null,
	score: null,
	elapsed: 0,
	feedbacks: 0,
	addedChatMessages: 0,
	addedActionTypes: [],
	active: true
};


// FUNCTIONS //

function titleCompare( a, b ) {
	return ( '' + a.title ).localeCompare( b.title );
}

function arrayBufferToBase64(buffer) {
	let binary = '';
	const bytes = [].slice.call( new Uint8Array( buffer ) );
	bytes.forEach( ( b ) => {
		binary += String.fromCharCode( b );
	});
	return window.btoa( binary );
}


// MAIN //

class Session {
	constructor( config = {}, offline ) {
		debug( 'Should create session...' );

		// Address where ISLE server is running:
		this.server = window.location.origin;

		// Set whether the session tries to communicate with the server
		this._offline = offline || false;

		// Array of subscribed components listening for session updates:
		this.listeners = [];

		// Address in local storage for user information:
		this.userVal = 'ISLE_USER_' + this.server;

		// Boolean indicating whether user is logged in or not:
		this.anonymous = true;

		// Assign unique ID to anonymous user:
		const anonStorageID = 'ISLE_ANONYMOUS_' + config.server;
		let item = localStorage.getItem( anonStorageID );
		if ( item ) {
			this.anonymousIdentifier = item;
		} else {
			this.anonymousIdentifier = 'anonymous_'+randomstring( 8 );
			localStorage.setItem( anonStorageID, this.anonymousIdentifier );
		}

		// String for distinguishing multiple browser windows from each other:
		this.sessionID = randomstring( 3 );

		// User object container:
		this.user = {};

		// If user token is available in local storage, login to server:
		item = localStorage.getItem( this.userVal );
		if ( item ) {
			item = JSON.parse( item );
			this.handleLogin( item, true );
		}

		// Boolean whether lesson is finished:
		this.finished = false;

		// Boolean indicating whether the server is responding:
		this.live = false;

		// Actions for the current user:
		this.actions = [];
		this.currentUserActions = {};

		// Cohort of logged-in user:
		this.cohort = null;

		// Array of available cohorts (only filled for owners):
		this.cohorts = null;

		// Actions received from other users via socket communication:
		this.socketActions = [];

		// Registered response visualizers:
		this.responseVisualizers = {};

		// Presentation mode for the owners (hiding owner elements)
		this.presentationMode = false;

		// List of currently logged-in users:
		this.userList = [];
		this.userFocuses = {};

		// Keep track of whether an owner is present in the session:
		this.hasOwner = false;

		// Array of open chats:
		this.chats = [];

		// State variables of the given lesson:
		this.state = config.state;

		// Register speech interface:
		this.speechInterface = new SpeechInterface();

		// Time variables:
		this.startTime = new Date().getTime();
		this.endTime = null;
		this.duration = 0;

		// YAML configuration object:
		this.config = config;

		// IDs in the database:
		this.lessonID = null;
		this.namespaceID = null;

		// Extract namespace and lesson name from URL:
		this.namespaceName = null;
		this.lessonName = null;
		if ( !isElectron ) {
			const url = window.location.pathname;
			if ( isString( url ) ) {
				const matches = url.match( PATH_REGEXP );
				if ( matches && matches.length >= 2 && url.endsWith( '/' ) ) {
					this.namespaceName = decodeURIComponent( matches[ 1 ]);
					this.lessonName = decodeURIComponent( matches[ 2 ]);
				}
			}
		} else {
			this.lessonName = config.lesson;
			this.namespaceName = config.namespace;
		}

		// Create instance of indexedDB database:
		this.store = localforage.createInstance({
			driver: localforage.INDEXEDDB,
			name: `ISLE_${this.namespaceName}_${this.lessonName}`,
			description: 'Persistent data storage for ISLE lesson'
		});

		// Connect via WebSockets to other users...
		if ( !isEmptyObject( this.user ) && this.server && !this._offline ) {
			this.socketConnect();
		}

		if ( !this._offline ) {
			// Ping server to check status:
			this.startPingServer();
		}

		if ( !this.lessonID && !this.namespaceID && !this._offline ) {
			debug( '[1] Retrieve lesson information:' );
			this.getLessonInfo();
		}

		if ( !isElectron ) {
			document.addEventListener( 'focusin', this.focusInListener );
			document.addEventListener( 'focusout', this.focusOutListener );
			document.addEventListener( 'beforeunload', this.beforeUnloadListener );
			document.addEventListener( 'visibilitychange', this.visibilityChangeListener );
		}
	}

	onLessonMount = () => {
		debug( 'Lesson has mounted...' );
		if ( !this.anonymous && !isEmptyObject( this.currentUserActions ) ) {
			// Log session data to database in regular interval:
			setInterval( this.logSession, 5*60000 );
		}
	}

	beforeUnloadListener = () => {
		debug( 'Page is either closed or refreshed...' );
		this.reset();
	}

	visibilityChangeListener = () => {
		if ( document.hidden ) {
			this.stopPingServer();
		} else {
			this.startPingServer();
			if ( this.socket.disconnected ) {
				this.socketConnect();
			}
		}
		this.logSession();
	}

	focusInListener = ( event ) => {
		let activeElement = document.activeElement;
		let id;
		if ( activeElement ) {
			id = activeElement.id;
			while ( !id && activeElement ) {
				activeElement = activeElement.parentElement;
				if ( activeElement ) {
					id = activeElement.id;
				}
			}
		}
		debug( `Focused element with id ${id}` );
		this.log({
			type: FOCUS_ELEMENT,
			value: this.user.email,
			id: id,
			noSave: true
		}, 'owners' );
	}

	focusOutListener = ( event ) => {
		debug( `Users ${this.user.email} lost focus...` );
		this.log({
			type: LOSE_FOCUS_ELEMENT,
			id: this.userFocuses[ this.user.email ],
			value: this.user.email,
			noSave: true
		}, 'owners' );
	}

	/**
	* Logs session object to database if logged-in.
	*
	* @returns {void}
	*/
	logSession = () => {
		debug( 'Logging current session object to database...' );
		if ( !this.anonymous && this.live ) {
			this.updateDatabase();
		}
	}

	/**
	* Registers a listener by pushing it to the array of listeners and returns a function to unsubscribe the listener.
	*/
	subscribe = ( listener ) => {
		this.listeners.push( listener );
		return () => {
			this.listeners = this.listeners.filter( l => l !== listener );
		};
	}

	/**
	* Pings the server and starts retrieving lesson info if server is live.
	*
	* @returns {void}
	*/
	pingServer = () => {
		debug( `Should ping the server at ${this.server}...` );
		fetch( this.server + '/ping' )
			.then( ( response ) => {
				return response.text();
			})
			.then( ( body ) => {
				if ( body === 'live' ) {
					this.live = true;
					if ( !this.lessonID && !this.namespaceID ) {
						// [1] Retrieve lesson information:
						this.getLessonInfo();
					}
				} else {
					this.live = false;

					// Override server property with value from preamble:
					if ( this.config.server ) {
						this.server = this.config.server;
					}
				}
				this.update( SERVER_IS_LIVE );
			})
			.catch( err => {
				debug( 'Encountered an error: '+err.message );

				// Override server property with value from preamble:
				if ( this.config.server ) {
					this.server = this.config.server;
				}
			});
	}

	/**
	* Pings the server in a regular interval when lesson is deployed.
	*
	* @returns {void}
	*/
	startPingServer = () => {
		this.pingServer();
		this.pingInterval = setInterval( this.pingServer, 10000 );
	}

	/**
	* Stops pinging the server once socket connection is established.
	*
	* @returns {void}
	*/
	stopPingServer = () => {
		debug( 'Should clear the interval pinging the server' );
		clearInterval( this.pingInterval );
	}

	/**
	*  Executes R code via OpenCPU.
	*
	* @param {Object} opt - options
	* @param {string} opt.code - R code
	* @param {Function} opt.onPlots - callback invoked with array of generated plots
	* @param {Function} opt.onResult - callback invoked with output of code evaluation
	* @param {Function} opt.onError - callback invoked when error is encountered
	* @returns {void}
	*/
	executeRCode = ({ code, onPlots, onResult, onError }) => {
		debug( 'Executing R code...' );
		const OPEN_CPU = this.getOpenCPUServer();
		debug( `Post request at ${OPEN_CPU + OPEN_CPU_IDENTITY} for code "${code}"` );

		const getElem = ( elem ) => {
			fetch( OPEN_CPU + elem )
				.then( res => {
					res.text().then( body => {
						onResult( null, res, body );
					});
				})
				.catch( err => onResult( err ) );
		};
		const formData = new FormData();
		formData.append( 'x', code );
		fetch( OPEN_CPU + OPEN_CPU_IDENTITY, {
			method: 'POST',
			body: formData
		})
		.then( response => {
			response.text().then( body => {
				debug( 'Received body:\n '+body );
				debug( 'Response status: '+response.status );
				const plots = [];
				if ( response.status !== 400 ) {
					const stdout = body.match( STDOUT_REGEX );
					if ( stdout && stdout[ 0 ] ) {
						getElem( stdout[ 0 ] );
					}
					const matches = body.matchAll( GRAPHICS_REGEX );
					for ( const match of matches ) {
						const imgURL = OPEN_CPU + match[ 0 ] + '/svg';
						plots.push( imgURL );
					}
					if ( isFunction( onPlots ) ) {
						onPlots( plots );
					}
				} else {
					onError( body.replace( ERR_REGEX, '' ) );
				}
			});
		})
		.catch( error => debug( 'Encountered an error: '+error.message ) );
	}

	/**
	* Retrieves help page for R help command, e.g. `help(mean)`.
	*
	* @param {string} helpCommand - R help command
	* @param {Function} clbk - callback function invoked with retrieved help page
	* @returns {void}
	*/
	getRHelpPage = ( helpCommand, clbk ) => {
		const OPEN_CPU = this.getOpenCPUServer();
		const fetchElem = ( elem ) => {
			fetch( OPEN_CPU + elem )
				.then( res => res.text() )
				.then( helpPath => {
					const [ , lib, topic ] = helpPath.match( HELP_PATH_REGEX );
					fetch( `https://public.opencpu.org/ocpu/library/${lib}/man/${topic}/html` ).then( res => {
						res.text().then( body => {
							clbk( null, res, body );
						})
						.catch( err => clbk( err ) );
					});
				});
		};
		const formData = new FormData();
		formData.append( 'x', 'y = ' + helpCommand + '; y[1]' );
		fetch( OPEN_CPU + OPEN_CPU_IDENTITY, {
			method: 'POST',
			body: formData
		})
		.then( response => {
			if ( response.status !== 400 ) {
				return response.text();
			}
		})
		.then( body => {
			const arr = body.split( '\n' );
			arr.forEach( elem => {
				if ( STDOUT_REGEX.test( elem ) === true ) {
					fetchElem( elem );
				}
			});
		})
		.catch( error => debug( 'Encountered an error: '+error.message ) );
	}

	/**
	* Retrieves help page for the specified function.
	*
	* @param {string} library - R library the function resides in
	* @param {string} functionName - name of function to get help page for
	* @param {Function} clbk - callback function invoked with retrieved page
	* @returns {void}
	*/
	getRHelp = ( library, functionName, clbk ) => {
		const OPEN_CPU = this.getOpenCPUServer();
		fetch( OPEN_CPU + `/ocpu/library/${library}/man/${functionName}/html` )
			.then( res => {
				res.text().then( body => {
					clbk( null, res, body );
				})
				.catch( err => clbk( err ) );
			});
	}

	/**
	* Generates R plot via OpenCPU.
	*
	* @param {string} code - R code to generate plot
	* @param {string} filetype - file extension of generated plot
	* @param {Function} clbk - callback function invoked with `error`, the URL of the image, and the response body (in that order)
	* @returns {void}
	*/
	getRPlot = ( code, filetype, clbk ) => {
		const OPEN_CPU = this.getOpenCPUServer();

		const fetchImage = ( imgURL ) => {
			fetch( imgURL )
				.then( res => {
					if ( filetype === 'png' ) {
						res.arrayBuffer().then( buffer => {
							const mimeType = res.headers.get( 'Content-Type' );
							const base64String = `data:${mimeType};base64,${arrayBufferToBase64( buffer )}`;
							clbk( null, imgURL, base64String );
						});
					} else {
						res.text().then( body => {
							clbk( null, imgURL, body );
						});
					}
				})
				.catch( err => clbk( err ) );
		};
		const formData = new FormData();
		formData.append( 'x', code );
		fetch( OPEN_CPU + OPEN_CPU_IDENTITY, {
			method: 'POST',
			body: formData
		})
			.then( res => res.text() )
			.then( body => {
				const arr = body.split( '\n' );
				arr.forEach( elem => {
					if ( GRAPHICS_REGEX.test( elem ) === true ) {
						const imgURL = OPEN_CPU + elem + '/' + filetype;
						fetchImage( imgURL );
					}
				});
			})
			.catch( error => clbk( error ) );
	}

	/**
	* Send data packet to specified group of users or a single user.
	*
	* @param {Object} data - message data
	* @param {string} [to='owners] - group of people to send message to. Can be either of `owners`, `members`, or an email address of a single user
	* @returns {void}
	*/
	sendSocketMessage = ( data, to ) => {
		if ( !to ) {
			to = 'owners';
		}
		if ( this.socket ) {
			this.socket.emit( 'event', data, to );
		} else {
			// Send data to self for components to update properly:
			data.email = 'anonymous';
			data.name = 'anonymous';
			this.saveAction( data );
		}
	}

	/**
	* Retrieves information from server on whether user is enrolled or owner of the course of the lesson. Pulls down logged actions in case user is an owner.
	*
	* @returns {void}
	*/
	getUserRights = () => {
		if (
			!this.anonymous &&
			!this.userRightsQuestionPosed &&
			!this._offline &&
			!userRights &&
			this.lessonID &&
			this.namespaceID
		) {
			debug( 'Retrieve user rights...' );
			this.userRightsQuestionPosed = true;
			fetch( this.server+'/get_user_rights', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'JWT ' + this.user.token
				},
				body: JSON.stringify({
					namespaceName: this.namespaceName,
					lessonName: this.lessonName
				})
			})
			.then( res => res.json() )
			.then( json => {
				userRights = json;
				this.cohort = userRights.cohort;
				if ( userRights.owner && isEmptyArray( this.socketActions ) ) {
					debug( '[3a] Retrieve all user actions for owners:' );
					this.getUserActions();
				} else {
					debug( '[3b] Retrieve only own actions otherwise:' );
					this.getCurrentUserActions();
				}
				// Send message to subscribed components:
				this.update( RECEIVED_USER_RIGHTS, userRights );
			})
			.catch( err => {
				this.userRightsQuestionPosed = false;
				debug( 'Encountered an error '+err.message );
			});
		}
	}

	/**
	* Sets the userRights variable to null.
	*/
	removeUserRights = () => {
		userRights = null;
		this.userRightsQuestionPosed = false;
	}

	/**
	* Checks whether user is enrolled in the course.
	*
	* @returns {boolean} boolean indicating whether user is enrolled
	*/
	isEnrolled = () => {
		debug( 'Check whether user is enrolled...' );
		if ( !userRights ) {
			return false;
		}
		return userRights.enrolled;
	}

	/**
	* Checks whether user is an owner of the course.
	*
	* @returns {boolean} boolean indicating whether user is course owner
	*/
	isOwner = () => {
		debug( 'Check whether user is an owner...' );
		if ( !userRights ) {
			return false;
		}
		return userRights.owner;
	}

	/**
	* Checks whether the lesson is active.
	*
	* @returns {boolean} boolean indicating whether lesson is active
	*/
	isActive = () => {
		return PRIVATE_VARS[ 'active' ];
	}

	/**
	* Joins the specified chat in case of an existing socket connection.
	*
	* @param {string} name - chat room name
	*/
	joinChat( name ) {
		if ( this.socket ) {
			let found = false;
			for ( let i = 0; i < this.chats.length; i++ ) {
				if ( this.chats[ i ].name === name ) {
					found = true;
				}
			}
			if ( !found ) {
				this.chats.push({ name: name, messages: [], members: []});
				this.update();
				this.socket.emit( 'join_chat', name );
			}
		}
	}

	/**
	* Joins collaborative editing of document.
	*
	* @param {string} name - document identifier
	*/
	joinCollaborativeEditing( name ) {
		name = `${this.namespaceName}-${this.lessonName}-${name}`;
		if ( this.socket ) {
			this.socket.emit( 'join_collaborative_editing', name );
		}
	}

	/**
	* Send document edits.
	*
	* @param {string} name - document identifier
	* @param {Object} data - document edit events
	*/
	sendCollaborativeEvents( name, data ) {
		if ( this.socket ) {
			name = `${this.namespaceName}-${this.lessonName}-${name}`;
			this.socket.emit( 'send_collaborative_editing_events', {
				docID: name,
				data: data
			});
		}
	}

	/**
	* Poll server for collaborative editing events.
	*
	* @param {string} name - document identifier
	* @param {Object} data - object with `version` and `commentVersion`
	*/
	pollCollaborativeEditingEvents( name, data ) {
		if ( this.socket ) {
			name = `${this.namespaceName}-${this.lessonName}-${name}`;
			this.socket.emit( 'poll_collaborative_editing_events', {
				docID: name,
				data
			});
		}
	}

	/**
	* Marks all chat messages in the specified room as read.
	*
	* @param {string} name - name of chat room
	* @returns {void}
	*/
	markChatMessagesAsRead( name ) {
		const chat = this.getChat( name );
		chat.messages = chat.messages.map( m => {
			m.unread = false;
			return m;
		});
		this.update( MARK_MESSAGES );
	}

	/**
	* Sends the supplied message to all members in the given chat room.
	*
	* @param {string} name - chat room name
	* @param {string} msg - chat message
	*/
	sendChatMessage( name, msg ) {
		PRIVATE_VARS[ 'addedChatMessages' ] += 1;
		if ( this.socket ) {
			const msgObj = {
				time: new Date().getTime(),
				user: this.user.name,
				picture: basename( this.user.picture ),
				content: msg
			};
			const chat = this.getChat( name );
			chat.messages.push( msgObj );
			this.markChatMessagesAsRead( name );
			debug( 'Should emit message to room '+name+': ' + JSON.stringify( msgObj ) );
			this.socket.emit( 'chat_message', {
				msg: msgObj,
				namespaceName: this.namespaceName,
				lessonName: this.lessonName,
				chatroom: name
			});
			this.update( OWN_CHAT_MESSAGE, name );
		}
	}

	/**
	* Retrieves chat room object.
	*
	* @param {string} name - chat room name
	* @returns {(Object|null)} chat room if found, null otherwise
	*/
	getChat( name ) {
		name = this.stripChatName( name );
		for ( let i = 0; i < this.chats.length; i++ ) {
			let chat = this.chats[ i ];
			if ( chat.name === name ) {
				return chat;
			}
		}
		return null;
	}

	stripChatName( name ) {
		let idx = name.indexOf( ':' );
		if ( idx !== -1 ) {
			name = name.substr( idx+1 );
		}
		return name;
	}

	removeChat = ( name ) => {
		name = this.stripChatName( name );
		debug( `Remove the "${name}" chat from the list of chats` );
		for ( let i = this.chats.length - 1; i >= 0; i-- ) {
			if ( this.chats[ i ].name === name ) {
				this.chats.splice( i, 1 );
			}
		}
		this.update( REMOVED_CHAT, name );
	}

	/**
	* Leaves chat with the given name and removes it from the current list of chats.
	*
	* @param {string} name - chat room name
	* @returns {void}
	*/
	leaveChat( name ) {
		this.removeChat( name );
		if ( this.socket ) {
			this.socket.emit( 'leave_chat', name );
		}
	}

	/**
	* Establishes socket connection with other users.
	*
	* @returns {void}
	*/
	socketConnect() {
		debug( 'Connecting via socket to server... ' );
		if ( this.socket ) {
			// Close existing socket connection:
			this.socket.close();
			this.socket = null;
		}

		const socket = io.connect( this.server, {
			transports: [ 'websocket' ]
		});

		socket.on( 'connect', () => {
			debug( 'I am connected...' );
			this.stopPingServer();
		});

		const config = {
			namespaceName: this.namespaceName,
			lessonName: this.lessonName,
			userID: this.user.id,
			userName: this.user.name,
			userEmail: this.user.email
		};
		socket.emit( 'join', config );
		socket.on( 'console', function onConsole( msg ) {
			debug( msg );
		});

		socket.on( 'userlist', ( data ) => {
			debug( 'Received list of users currently in the lesson: ' + data );
			this.userList = JSON.parse( data );
			for ( let i = 0; i < this.userList.length; i++ ) {
				const user = this.userList[ i ];
				if ( user.owner ) {
					this.hasOwner = true;
					break;
				}
			}
			this.update( RECEIVED_USERS );
		});

		socket.on( 'user_joins', ( data ) => {
			debug( 'A user has joined and should be added to the user list: ' + data );
			data = JSON.parse( data );
			if ( data.owner ) {
				this.hasOwner = true;
			}
			this.userList = this.userList.filter( user => user.email !== data.email );
			this.userList.push( data );
			const isUser = data.email === this.user.email;
			if ( this.config.joinNotifications && !isUser ) {
				this.addNotification({
					title: 'User has joined',
					message: `User ${data.name} (${data.email}) has joined us.`,
					level: 'success',
					position: 'tl'
				});
			}
			this.update( USER_JOINED, data );
		});

		socket.on( 'user_leaves', ( data ) => {
			if ( !isEmptyObject( this.user ) ) {
				debug( 'A user has disconnected and should be removed: ' + data );
				data = JSON.parse( data );
				this.userList = this.userList.map( user => {
					if ( user.email === data.email ) {
						user.inactive = true;
						user.exitTime = data.exitTime;
					}
					return user;
				});
				const isUser = data.email === this.user.email;
				this.update( USER_LEFT, data.email );
				if ( this.config.joinNotifications && !isUser ) {
					this.addNotification({
						title: 'User has left',
						message: `User ${data.name} (${data.email}) has left us.`,
						level: 'success',
						position: 'tl'
					});
				} else if ( isUser ) {
					// Case: Oneself has logged off on another browser tab
					this.forcedLogout();
				}
			}
		});

		socket.on( 'chat_history', ({ name, messages, members }) => {
			debug( 'Received chat history: ' + JSON.stringify( messages ) );
			let chat = this.getChat( name );
			if ( !chat ) {
				name = this.stripChatName( name );
				chat = { name, messages, members };
				this.chats.push( chat );
			} else {
				chat.messages = messages;
				chat.members = members;
			}
			this.update( RECEIVED_CHAT_HISTORY, chat );
		});

		socket.on( 'member_has_joined_chat', ({ name, member }) => {
			debug( `Member ${member.name} has joined chat ${name}` );
			let chat = this.getChat( name );
			name = this.stripChatName( name );
			if ( chat ) {
				chat.members.push( member );
				this.update( MEMBER_HAS_JOINED_CHAT, chat );
			} else if ( member.email === this.user.email ) {
				chat = { name: name, messages: [], members: []};
				this.chats.push( chat );
				this.socket.emit( 'join_chat', name );
				this.update( SELF_HAS_JOINED_CHAT, chat );
			}
		});

		socket.on( 'member_has_left_chat', ({ name, member }) => {
			debug( `Member ${member.name} has left chat ${name}` );
			const chat = this.getChat( name );
			name = this.stripChatName( name );
			chat.members = chat.members.filter( m => m.email !== member.email );
			if ( this.user.email === member.email ) {
				debug( 'I have left the chat...' );
				this.removeChat( name );
				this.update( SELF_HAS_LEFT_CHAT, name );
			} else {
				debug( 'Somebody else has left the chat' );
				this.update( MEMBER_HAS_LEFT_CHAT, name );
			}
		});

		socket.on( 'joined_collaborative_editing', ( id, data ) => {
			this.update( JOINED_COLLABORATIVE_EDITING, { id, data });
		});

		socket.on( 'sent_collaborative_editing_events', ( id, data ) => {
			this.update( SENT_COLLABORATIVE_EDITING_EVENTS, { id, data });
		});

		socket.on( 'polled_collaborative_editing_events', ( id, data ) => {
			this.update( POLLED_COLLABORATIVE_EDITING_EVENTS, { id, data });
		});

		socket.on( 'collaborative_editing_events', ( id, data ) => {
			this.update( COLLABORATIVE_EDITING_EVENTS, { id, data });
		});

		socket.on( 'chat_message', ( data ) => {
			const chat = this.getChat( data.chatroom );
			if ( chat ) {
				data.msg.unread = true;
				chat.messages.push( data.msg );
			}
			this.update( CHAT_MESSAGE, data.chatroom );
		});

		socket.on( 'memberAction', this.saveAction );

		socket.on( 'error', console.error.bind( console ) ); // eslint-disable-line no-console

		socket.on( 'disconnect', () => {
			debug( 'I am disconnected from the server...' );
			this.live = false;
			this.startPingServer();
			this.update( DISCONNECTED_FROM_SERVER );
		});

		this.socket = socket;
	}

	getFakeUsers = ( clbk ) => {
		fetch( this.server+'/get_fake_users', {
			headers: {
				'Authorization': 'JWT ' + this.user.token
			}
		})
		.then( response => {
			if ( response.status === 200 ) {
				response.json().then( body => {
					clbk( null, body );
				});
			}
		})
		.catch( error => clbk( error ) );
	}

	/**
	* Retrieves all actions by users for the current lesson for course owners.
	*
	* @returns {void}
	*/
	getUserActions = () => {
		debug( 'Retrieve user actions...' );

		fetch( this.server+'/get_user_actions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'JWT ' + this.user.token
			},
			body: JSON.stringify({
				lessonID: this.lessonID,
				anonymous: true
			})
		})
		.then( ( response ) => {
			debug( '/get_user_actions response status: '+response.status );
			if ( response.status === 200 ) {
				response.json().then( json => {
					debug( `Received ${json.actions.length} actions for lesson ${this.lessonName} (id: ${this.lessonID})...` );
					this.socketActions = json.actions;
					this.update( RETRIEVED_USER_ACTIONS, json.actions );
					debug( '[4] Retrieve cohort information...' );
					this.getCohorts();
				});
			}
		})
		.catch( error => debug( 'Encountered an error: '+error.message ) );
	}

	/**
	* Retrieves cohort information for course owners.
	*/
	getCohorts = () => {
		fetch( this.server+'/get_cohorts?'+qs.stringify({ namespaceID: this.namespaceID, memberFields: 'email' }), {
			headers: {
				'Authorization': 'JWT ' + this.user.token
			}
		})
		.then( response => {
			if ( response.status === 200 ) {
				response.json().then( body => {
					const cohorts = body.cohorts;
					cohorts.forEach( cohort => {
						cohort.members = pluck( cohort.members, 'email' );
					});
					this.cohorts = cohorts.sort( titleCompare );
					this.update( RETRIEVED_COHORTS, this.cohorts );
				});
			}
		})
		.catch( error => debug( 'Encountered an error: '+error.message ) );
	}

	/**
	* Retrieves all actions by the current user for the active lesson.
	*
	* @returns {void}
	*/
	getCurrentUserActions = () => {
		fetch( this.server+'/get_current_user_actions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'JWT ' + this.user.token
			},
			body: JSON.stringify({
				lessonID: this.lessonID
			})
		})
		.then( ( response ) => {
			debug( 'Received current user actions...' );
			if ( response.status === 200 ) {
				response.json().then( body => {
					this.currentUserActions = body.actions;
					this.update( RETRIEVED_CURRENT_USER_ACTIONS, this.currentUserActions );
				});
			}
		})
		.catch( error => debug( 'Encountered an error: '+error.message ) );
	}

	/**
	* Sends action to listening components and saves it to array of socket actions, if not silenced.
	*
	* @param {Object} action - user action object
	* @returns {void}
	*/
	saveAction = ( action ) => {
		debug( 'Received a member action...' );
		if ( !action.noSave ) {
			let newArray = this.socketActions;
			newArray.unshift( action );
			this.socketActions = newArray;
			debug( 'Number of actions: ' + this.socketActions.length );
		}
		if ( action.type === FOCUS_ELEMENT ) {
			debug( `Received focus for element with ID ${action.id} by ${action.email}` );
			this.userFocuses[ action.email ] = action.id;
		}
		else if ( action.type === LOSE_FOCUS_ELEMENT ) {
			debug( `Remove focus for user ${action.email}` );
			delete this.userFocuses[ action.email ];
		}
		this.update( MEMBER_ACTION, action );
	}

	/**
	* Update all lesson components that have subscribed to session updates.
	*
	* @param {string} type - event type
	* @param {*} data - event data
	*/
	update( type, data ) {
		this.listeners.forEach( listener => listener( type, data ) );
	}

	registerUser( data, clbk ) {
		fetch( this.server+'/create_user', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify( data )
		})
		.then( ( response ) => {
			if ( response.status !== 200 ) {
				response.text().then( message => {
					this.addNotification({
						title: 'User not created',
						message: message,
						level: 'error',
						position: 'tl'
					});
				});
			} else {
				this.addNotification({
					title: 'User created',
					message: 'You have successfully signed up.',
					level: 'success',
					position: 'tl'
				});
				this.login({ email: data.email, password: data.password }, clbk );
			}
		})
		.catch( ( err ) => {
			debug( 'Encountered an error: '+err.message );
			clbk( err );
		});
	}

	/**
	* Logs out the currently logged-in user and remove his meta-data from localStorage.
	*
	* @returns {void}
	*/
	logout() {
		debug( `Logout initiated by user ${this.user.name}` );
		localStorage.removeItem( this.userVal );
		this.socket.emit( 'leave' );
		this.socket.close();
		this.user = {};
		this.anonymous = true;
		this.userRightsQuestionPosed = false;
		this.reset();
		this.addNotification({
			title: 'Logged out',
			message: 'You have successfully logged out.',
			level: 'success',
			position: 'tl'
		});
		this.update( LOGGED_OUT );
	}

	/**
	* Re-establish connection if user has logged out in another tab.
	*
	* @returns {void}
	*/
	forcedLogout() {
		debug( `Forced logout of user ${this.user.name} by server, connect again` );
		let item = localStorage.getItem( this.userVal );
		this.reset();
		if ( item ) {
			item = JSON.parse( item );
			this.handleLogin( item, true );
		}
	}

	/**
	* Resets session instance variables.
	*
	* @returns {void}
	*/
	reset() {
		this.chats = [];
		this.actions = [];
		this.socketActions = [];
		this.currentUserActions = null;
		this.userList = [];
		this.removeUserRights();
	}

	/**
	* Logs user in.
	*
	* @param {Object} form - form data
	* @param {string} form.email - email address
	* @param {string} form.password - user password
	* @param {Function} clbk - callback function
	* @returns {void}
	*/
	login = ( form, clbk ) => {
		fetch( this.server+'/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify( form )
		})
		.then( response => {
			if ( response.status === 404 ) {
				return this.addNotification({
					title: response.statusText,
					message: 'A user with the supplied email address does not exist',
					level: 'error',
					position: 'tl'
				});
			}
			if ( response.status === 401 ) {
				return this.addNotification({
					title: response.statusText,
					message: 'Please make sure that you enter the correct password. You can set a new password by clicking on the "Forgot password?" link',
					level: 'error',
					position: 'tl'
				});
			}
			response.json().then( body => {
				const { token, id, message } = body;

				// Save user token to local storage:
				localStorage.setItem( this.userVal, JSON.stringify({
					token,
					id
				}) );
				if ( message === 'ok' ) {
					this.handleLogin({ token, id });
				}
				clbk( null, response, body );
			});
		})
		.catch( ( err ) => {
			clbk( err );
		});
	}

	/**
	* Sends a "Reset Password" link to the supplied email address.
	*
	* @param {string} email - email address
	* @returns {void}
	*/
	forgotPassword( email ) {
		fetch( this.server+'/forgot_password?'+qs.stringify({ email }) )
			.then( ( res ) => {
				debug( 'GET: /forgot_password' );
				if ( res.status < 400 ) {
					this.addNotification({
						title: 'New Password',
						message: 'Check your email inbox for a link to choose a new password.',
						level: 'success',
						position: 'tl'
					});
				} else {
					return res.text();
				}
			})
			.then( ( body ) => {
				if ( body ) {
					this.addNotification({
						title: 'New Password',
						message: body,
						level: 'error',
						position: 'tl'
					});
				}
			})
			.catch( ( error ) => {
				this.addNotification({
					title: 'New Password',
					message: error.message,
					level: 'error',
					position: 'tl'
				});
			});
	}

	/**
	* Retrieves the ID for the lesson and namespace from the database.
	*/
	getLessonInfo = () => {
		const { lessonName, namespaceName, server } = this;
		debug( `Retrieve lesson info for ${namespaceName}/${lessonName} from ${server}` );
		if ( lessonName && namespaceName ) {
			fetch( this.server+'/get_lesson_info?'+qs.stringify({ lessonName, namespaceName }) )
			.then( res => res.json() )
			.then( ( body ) => {
				this.lessonID = body.lessonID;
				this.namespaceID = body.namespaceID;
				PRIVATE_VARS[ 'active' ] = ( body.active === void 0 ) ? true : body.active;
				debug( '[2] Retrieve user rights for said lesson and its namespace' );
				this.update( RECEIVED_LESSON_INFO, body );
				this.getUserRights();
			})
			.catch( ( err ) => {
				debug( 'Encountered an error: '+err.message );
			});
		}
	}

	/**
	* Retrieves data from database.
	*
	* @param {Object} query - query for actions to obtain from database
	* @param {Function} onData - callback invoked with error or retrieved data
	* @returns {void}
	*/
	retrieveData( query, onData ) {
		fetch( this.server + '/retrieve_data', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				query,
				user: this.user
			})
		})
			.then( res => res.json() )
			.then( body => onData( null, body ) )
			.catch( error => onData( error ) );
	}

	/**
	* Verifies user credentials via JSON Web Token to finish login process.
	*
	* @param {Object} obj - user object with `token` and `id` fields
	* @param silent - controls whether to display notification or not
	* @returns {void}
	*/
	handleLogin = ( obj, silent = false ) => {
		fetch( this.server+'/credentials', {
			method: 'POST',
			headers: {
				'Authorization': 'JWT ' + obj.token,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id: obj.id
			})
		})
		.then( ( response ) => {
			return response.json();
		})
		.then( ( json ) => {
			if ( !silent ) {
				this.addNotification({
					title: 'Logged in',
					message: 'You have successfully logged in.',
					level: 'success',
					position: 'tl'
				});
			}
			const user = {
				...obj,
				...json
			};
			this.user = user;
			if ( this.user && this.user.picture ) {
				this.user.picture = this.server + '/avatar/' + this.user.picture;
			}
			PRIVATE_VARS[ 'score' ] = user.score;
			this.anonymous = false;
			this.socketConnect();
			if ( !userRights ) {
				this.getUserRights();
			}
			this.update( LOGGED_IN );
		})
		.catch( ( err ) => {
			debug( 'Encountered an error: '+err.message );
		});
	}

	/**
	* Retrieves the value of a session variable.
	*
	* @param {string} name - variable name
	* @returns {*} variable value
	*/
	get( name ) {
		return PRIVATE_VARS[ name ];
	}

	/**
	* Finalizes session once user clicks on "Submit Lesson" button.
	*
	* @returns {void}
	*/
	finalize() {
		this.endTime = new Date().getTime();
		this.duration = this.endTime - this.startTime;
		this.finished = true;
		if ( this.anonymous === false ) {
			this.updateDatabase();
		}
	}

	/**
	* Sets the user's progress for the lesson.
	*
	* @param {string} [id] - action id
	*/
	setProgress( id ) {
		if (
			this.anonymous ||
			isEmptyObject( this.currentUserActions ) ||
			( userRights && userRights.owner )
		) {
			return;
		}
		const ids = objectKeys( this.responseVisualizers );
		if ( !this.unfinished ) {
			this.unfinished = ids.slice();
		}
		if ( !initializedProgress ) {
			debug( 'Set initial progress...' );
			let progress = 0;
			for ( let i = ids.length - 1; i >= 0; i-- ) {
				const key = ids[ i ];
				const actions = this.currentUserActions[ key ];
				const ref = this.responseVisualizers[ key ];
				if ( !ref ) {
					continue;
				}
				const type = ref.type;
				if ( actions ) {
					for ( let j = 0; j < actions.length; j++ ) {
						if ( actions[ j ].type === type ) {
							this.unfinished.splice( i, 1 );
							progress += 1.0 / ids.length;
							break;
						}
					}
				}
			}
			PRIVATE_VARS[ 'progress' ] = clamp( progress, 0, 1 );
			this.update( SELF_INITIAL_PROGRESS, progress );
			this.logSession();
			initializedProgress = true;
		}
		if ( id ) {
			// Received a new action, check whether we need to increment progress...
			const actions = this.currentUserActions[ id ];
			const ref = this.responseVisualizers[ id ];
			if ( ref ) {
				const type = ref.type;
				for ( let j = 0; j < actions.length; j++ ) {
					if ( actions[ j ].type === type ) {
						if ( j < actions.length - 1 ) {
							break;
						}
						else if ( j === actions.length - 1 ) {
							PRIVATE_VARS[ 'progress' ] = clamp( this.get( 'progress' ) + 1.0 / ids.length, 0, 1 );
							this.update( SELF_UPDATED_PROGRESS, this.get( 'progress' ) );
							this.unfinished = this.unfinished.filter( x => x !== id );
							this.logSession();
						}
					}
				}
			}
		}
	}

	setScore( action ) {
		if (
			this.anonymous ||
			isEmptyObject( this.currentUserActions ) ||
			( userRights && userRights.owner )
		) {
			return;
		}
		const actions = this.currentUserActions;
		if ( actions ) {
			const arr = actions[ action.id ];
			const pts = POINTS[ action.type ] || 1;
			if ( !arr ) {
				addedScore += pts;
				PRIVATE_VARS[ 'score' ] = this.get( 'score' ) + pts;
				this.update( SELF_UPDATED_SCORE, pts );
			}
			else {
				const types = arr.map( x => x.type );
				if ( !contains( types, action.type ) ) {
					addedScore += pts;
					PRIVATE_VARS[ 'score' ] = this.get( 'score' ) + pts;
					this.update( SELF_UPDATED_SCORE, pts );
				}
			}
		}
	}

	togglePresentationView() {
		this.presentationMode = !this.presentationMode;
		this.update( TOGGLE_PRESENTATION_MODE, this.presentationMode );

		let msg = 'You have started the presentation mode which hides the status bar, the instructorView and all owner elements. Hit F7 to leave the it.';
		let title = 'Started presentation mode';

		if ( this.presentationMode === false) {
			msg = 'You have finished the presentation mode. Hit F7 to start it again.';
			title = 'Finished presentation mode';
		}

		this.addNotification({
			title: title,
			message: msg,
			level: 'success',
			position: 'tl'
		});
	}

	/**
	* Updates session instance in the remote database.
	*
	* @returns {void}
	*/
	updateDatabase() {
		let now = new Date().getTime();
		let timeDiff = now - updateTime;
		updateTime = now;

		debug( 'Updates session object in database...' );
		const currentSession = {
			elapsed: timeDiff,
			addedScore: addedScore,
			addedChatMessages: this.get( 'addedChatMessages' ),
			vars: this.vars,
			lessonID: this.lessonID,
			progress: this.get( 'progress' ),
			addedActionTypes: countBy( this.get( 'addedActionTypes' ), identity )
		};
		addedScore = 0;
		PRIVATE_VARS[ 'addedChatMessages' ] = 0;
		PRIVATE_VARS[ 'addedActionTypes' ] = [];

		if ( !this._offline && !this.anonymous ) {
			fetch( this.server+'/update_user_session', {
				method: 'POST',
				body: JSON.stringify( currentSession ),
				headers: {
					'Authorization': 'JWT ' + this.user.token,
					'Content-Type': 'application/json'
				}
			})
			.catch( err => debug( 'Encountered an error: '+err.message ) )
			.then( ( res ) => {
				debug( '/update_user_session returns: '+res.status );
			});
		}
	}

	/**
	* Logs data to database.
	*
	* @param {string} type - type of data to log (`vars` or `action`)
	* @param {Object} data - data to log
	* @param {Function} clbk - callback invoked with `err` and `res` arguments
	* @returns {void}
	*/
	logToDatabase( type, data, clbk ) {
		debug( `Logging ${type} to database...` );
		const obj = {
			startTime: this.startTime,
			userID: this.user.id,
			lessonID: this.lessonID,
			type,
			data
		};
		if ( !this._offline ) {
			PRIVATE_VARS[ 'addedActionTypes' ].push( data.type );
			const body = JSON.stringify( obj );
			debug( 'Storing session element: '+body );
			fetch( this.server+'/store_session_element', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: body
			})
				.then( ( res ) => {
					debug( '/store_session_element status code: '+res.status );
					return res;
				})
				.then( res => res.json() )
				.then( body => {
					clbk( null, body );
				})
				.catch( err => {
					debug( `Encountered an error: ${err.message}.` );
					clbk( err );
				});
		}
	}

	removeSessionElementFromDB( sessionElementID, clbk ) {
		fetch( this.server+'/delete_session_element?' + qs.stringify({
			_id: sessionElementID
		}), {
			headers: {
				'Authorization': 'JWT ' + this.user.token
			}
		})
		.then( () => {
			for ( let i = 0; i < this.socketActions.length; i++ ) {
				if ( this.socketActions[ i ].sessiondataID === sessionElementID ) {
					this.socketActions.splice( i, 1 );
					break;
				}
			}
			this.addNotification({
				title: 'Deleted',
				message: 'You have successfully deleted the action.',
				level: 'success',
				position: 'tl'
			});
			clbk( null );
		})
		.catch( error => {
			this.addNotification({
				title: 'Error encountered',
				message: error.message,
				level: 'error',
				position: 'tl'
			});
			clbk( error );
		});
	}

	/**
	* Logs session action to database and sends it via socket connection to specified user(s).
	*
	* @param {Object} action - action object
	* @param {string} to - group to send log message to (either `owners`, `members`, or email address of an individual user)
	* @returns {void}
	*/
	log( action, to ) {
		const onLogged = ( err, res ) => {
			if ( err ) {
				return debug( 'Encountered an error: '+err.message );
			}
			// Attach received action ID:
			action.sessiondataID = res.id;

			// Push to respective array of currentUserActions hash table:
			const actions = this.currentUserActions;
			this.setScore( action );
			if ( actions ) {
				if ( !actions[ action.id ]) {
					actions[ action.id ] = [ action ];
				} else {
					actions[ action.id ].push( action );
				}
			}
			this.setProgress( action.id );

			debug( 'Send to socket connections after ID is attached...' );
			this.sendSocketMessage( action, to );

			// If first action, create session on server:
			if ( this.actions.length === 1 ) {
				this.updateDatabase();
			}
		};

		if ( action && action.id ) {
			action.absoluteTime = new Date().getTime();
			action.time = action.absoluteTime - this.startTime;
			action.owner = this.isOwner();
			if ( this.anonymous ) {
				action.email = this.anonymousIdentifier;
				action.name = this.anonymousIdentifier;
			} else {
				action.email = this.user.email;
				action.name = this.user.name;
			}
			if ( !action.noSave ) {
				debug( 'Save action...' );
				this.actions.push( action );
				this.logToDatabase( 'action', action, onLogged );
			} else {
				// Send only to socket connections and do not save to database:
				this.sendSocketMessage( action, to );
			}
		}
	}

	getLessonOwnerFiles = ( clbk ) => {
		if ( this.lessonName && this.namespaceName ) {
			let url = this.server + '/get_files';
			url += '?'+qs.stringify({ namespaceName: this.namespaceName, lessonName: this.lessonName, owner: true });
			fetch( url, {
				headers: {
					'Authorization': 'JWT ' + this.user.token
				}
			})
				.then( res => res.json() )
				.then( body => {
					clbk( null, body.files );
				});
		}
	}

	/**
	* Uploads a file.
	*
	* @param {Object} options - options object
	* @param {Object} options.formData - form data object
	* @param {Function} [options.callback] - callback function
	* @param {boolean} [options.showNotification] - controls whether to show upload notification
	* @returns {void}
	*/
	uploadFile({ formData, callback = () => {}, showNotification = true }) {
		if ( this.lessonName ) {
			formData.append( 'lessonName', this.lessonName );
		}
		if ( this.namespaceName ) {
			formData.append( 'namespaceName', this.namespaceName );
		}
		if ( this.isOwner() ) {
			formData.append( 'owner', true );
		}
		if ( isEmptyObject( this.user ) ) {
			return this.addNotification({
				title: 'File Upload',
				message: 'You have to be signed in in order to upload files.',
				level: 'warning',
				position: 'tl'
			});
		}
		const xhr = new XMLHttpRequest();
		xhr.open( 'POST', this.server+'/upload_file', true );
		xhr.setRequestHeader( 'Authorization', 'JWT ' + this.user.token );
		xhr.onreadystatechange = () => {
			if ( xhr.readyState === XMLHttpRequest.DONE ) {
				let message;
				let level;
				let body;
				let err;

				err = null;
				if ( xhr.status === 200 ) {
					body = JSON.parse( xhr.responseText );
					message = body.message;
					level = 'success';
				} else {
					message = xhr.responseText;
					level = 'error';
					err = new Error( xhr.responseText );
				}
				if ( showNotification ) {
					this.addNotification({
						title: 'File Upload',
						message,
						level,
						position: 'tl'
					});
				}
				return callback( err, body );
			}
		};
		xhr.send( formData );
	}

	/**
	* Sends an email.
	*
	* @param {Object} mail - email object
	* @param {string} to - email address of receiver
	* @returns {void}
	*/
	sendMail( mail, to ) {
		const mailOptions = copy( mail );
		if ( !hasOwnProp( mailOptions, 'from' ) ) {
			mailOptions.from = this.config.email || 'robinson@isle.cmu.edu';
		}
		if ( !hasOwnProp( mailOptions, 'to' ) ) {
			mailOptions.to = to;
		}
		fetch( this.server + '/send_mail', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify( mailOptions )
		})
		.catch( error => debug( 'Encountered an error: '+error.message ) );
	}

	/**
	* Get the OpenCPU server address.
	*
	* @returns {string} OpenCPU address
	*/
	getOpenCPUServer() {
		return this.config.rshell && this.config.rshell.server ?
			this.config.rshell.server :
			OPEN_CPU_DEFAULT_SERVER;
	}

	/**
	* Displays a notification.
	*
	* @param {Object} notification configuration
	* @returns {(null|Notification)}
	*/
	addNotification( config ) {
		if ( !config.onAdd && !config.onRemove ) {
			config.onAdd = () => {
				window.addEventListener( 'beforeunload', beforeUnload );
			};
			config.onRemove = () => {
				window.removeEventListener( 'beforeunload', beforeUnload );
			};
		}
		if ( !config.position ) {
			config.position = 'tc';
		}
		if ( global.notificationSystemISLE ) {
			return global.notificationSystemISLE.addNotification( config );
		}
		return null;
	}

	/**
	* Removes a notification.
	*
	* @param {(Object|string)} notification - notification or `uid`
	* @returns {void}
	*/
	removeNotification( notification ) {
		if ( global.notificationSystemISLE ) {
			global.notificationSystemISLE.removeNotification( notification );
		}
	}
}


// EXPORTS //

export default Session;
