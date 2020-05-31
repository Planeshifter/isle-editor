// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContextMenu, MenuItem } from 'react-contextmenu';
import logger from 'debug';
import replace from '@stdlib/string/replace';
import isEmptyArray from '@stdlib/assert/is-empty-array';


// VARIABLES //

const debug = logger( 'isle:lesson:contextmenu' );
const INPUTS = [ 'input', 'textarea' ];


// FUNCTIONS //

/**
* Adapted from: https://stackoverflow.com/questions/28269431/how-to-check-if-the-selected-text-is-editable
*/
function isEditable() {
	let el = document.activeElement; // focused element
	if ( el && ~INPUTS.indexOf( el.tagName.toLowerCase() ) ) {
		return !el.readOnly && !el.disabled;
	}
	el = getSelection().anchorNode; // selected node
	if ( !el ) {
		return void 0; // no selected node
	}
	el = el.parentNode; // selected element
	return el.isContentEditable;
}


// MAIN //

class LessonContextMenu extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			lastRange: null,
			lastText: '',
			contextMenuIsOpen: false,
			editable: false
		};
	}

	componentDidMount() {
		document.addEventListener( 'selectionchange', this.handleSelectionChange );
	}

	componentWillUnmount() {
		document.removeEventListener( 'selectionchange', this.handleSelectionChange );
	}

	handleSelectionChange = ( event ) => {
		if ( this.state.contextMenuIsOpen ) {
			return;
		}
		const selection = window.getSelection();
		const editable = isEditable();
		const active = document.activeElement;

		if ( INPUTS.indexOf( active.tagName.toLowerCase() ) !== -1 ) {
			const text = active.value.slice( active.selectionStart, active.selectionEnd );
			return this.setState({
				lastText: text,
				lastActive: active,
				editable
			});
		}
		if ( !selection.isCollapsed || selection.type === 'Range' ) {
			this.lastSelection = selection;
			if ( selection.getRangeAt && selection.rangeCount ) {
				const range = selection.getRangeAt( 0 );
				const text = selection.toString();
				this.setState({
					lastActive: active,
					lastRange: range,
					lastText: text,
					editable
				});
			}
		} else {
			setTimeout( () => {
				this.forceUpdate();
			}, 150 );
		}
	}

	highlightText = ( event ) => {
		debug( 'Highlight the selected text...' );
		document.designMode = 'on';
		const sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange( this.state.lastRange );
		document.execCommand( 'styleWithCSS', false, true );
		document.execCommand( 'backColor', false, 'yellow' );
		document.designMode = 'off';
	}

	removeHighlight = ( event ) => {
		debug( 'Highlight the selected text...' );
		const sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange( this.state.lastRange );
		document.designMode = 'on';
		document.execCommand( 'styleWithCSS', false, true );
		document.execCommand( 'backColor', false, 'inherit' );
		document.designMode = 'off';
	}

	cutSelection = () => {
		const lastActive = this.state.lastActive;
		if ( INPUTS.indexOf( lastActive.tagName.toLowerCase() ) !== -1 ) {
			lastActive.value = replace( lastActive.value, this.state.lastText, '' );
			return navigator.clipboard.writeText( this.state.lastText );
		}
		const sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange( this.state.lastRange );
		document.execCommand( 'cut' );
	}

	copyToClipboard = ( event ) => {
		debug( 'Copying selection to clipboard... ' );
		navigator.clipboard.writeText( this.state.lastText );
	}

	copyFromClipboard = () => {
		navigator.clipboard.readText().then( ( text ) => {
			if ( !text ) {
				return this.props.session.addNotification({
					title: 'Clipboard is empty',
					message: 'Failed to insert text. The clipboard is currently empty.',
					level: 'error',
					position: 'tr'
				});
			}
			const lastActive = this.state.lastActive;
			if ( lastActive ) {
				lastActive.focus();
			}
			document.execCommand( 'insertText', false, text );
		});
	}

	textToSpeech = () => {
		const str = this.state.lastText;
		debug( 'Read aloud: '+str );
		const session = this.props.session;
		if ( isEmptyArray( window.speechSynthesis.getVoices() ) ) {
			return session.addNotification({
				title: 'Not supported.',
				message: 'The text-to-speech functionality is currently not supported on your browser. Please try Google Chrome.',
				level: 'error',
				position: 'tr'
			});
		}
		const ssu = new SpeechSynthesisUtterance( str );
		ssu.lang = session.config.language || 'en-US';
		window.speechSynthesis.speak( ssu );
	}

	render() {
		const menuItems = [];
		const sel = window.getSelection();
		const el = document.activeElement;
		const inTextField = el && ( INPUTS.indexOf( el.tagName.toLowerCase() ) !== -1 );
		if ( !sel.isCollapsed || sel.type === 'Range' ) {
			if ( this.state.editable ) {
				menuItems.push( <MenuItem key={0} onClick={this.cutSelection}>
					Cut
				</MenuItem> );
			}
			menuItems.push( <MenuItem key={1} onClick={this.copyToClipboard}>
				Copy
			</MenuItem> );
			menuItems.push( <MenuItem key={2} onClick={this.textToSpeech}>
				Read aloud
			</MenuItem> );
			if ( !inTextField && !el.isContentEditable ) {
				menuItems.push( <MenuItem key={3} onClick={this.highlightText}>
					Highlight
				</MenuItem> );
				if ( sel && sel.focusNode ) {
					const elem = sel.focusNode.parentElement;
					if ( elem && elem.style.backgroundColor === 'yellow' ) {
						menuItems.push( <MenuItem key={4} onClick={this.removeHighlight}>
							Remove Highlight
						</MenuItem> );
					}
				}
			}
		}
		if ( inTextField ) {
			menuItems.push( <MenuItem key={5} onClick={this.copyFromClipboard}>
				Paste
			</MenuItem> );
		} else if ( !el.isContentEditable ) {
			menuItems.push(
				<MenuItem key={6} onClick={( event ) => {
					this.props.addNote({ left: event.pageX, top: event.pageY });
				}}>
					Add Note
				</MenuItem>
			);
		}
		return ( <ContextMenu
			id="lessonWindow"
			onShow={() => {
				debug( 'Context menu has been opened...' );
				this.setState({ contextMenuIsOpen: true });
			}}
			onHide={() => {
				debug( 'Context menu has been closed...' );
				this.setState({ contextMenuIsOpen: false });
			}}
		>
			{menuItems}
		</ContextMenu> );
	}
}


// PROPERTIES //

LessonContextMenu.propTypes = {
	addNote: PropTypes.func.isRequired,
	session: PropTypes.object.isRequired
};


// EXPORTS //

export default LessonContextMenu;
