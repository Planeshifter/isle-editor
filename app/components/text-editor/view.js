// MODULES //

import React, { Component, Fragment } from 'react';
import logger from 'debug';
import { DOMParser as ProseMirrorParser, Node } from 'prosemirror-model';
import PropTypes from 'prop-types';
import { EditorView } from 'prosemirror-view';
import { EditorState } from 'prosemirror-state';
import { fixTables } from 'prosemirror-tables';
import isJSON from '@stdlib/assert/is-json';
import plugins from './config/plugins';
import MenuBar from './menubar.js';
import schema from './config/schema';
import FootnoteView from './views/footnote';
import ImageNodeView from './config/ui/image_node_view.js';
import { toggleCursorParking } from './config/cursor_parking';
import countWords from './count_words.js';
import handleDrop from './handle_drop.js';


// VARIABLES //

const debug = logger( 'isle:text-editor' );


// FUNCTIONS //

const StatusBar = ( props ) => {
	return ( <div className="prose-statusbar">
		<span>words: {props.nWords}</span>
		<span style={{ marginLeft: 5 }}>characters: {props.nChars}</span>
	</div> );
};

const parser = ( content ) => {
	const domNode = document.createElement( 'div' );
	domNode.innerHTML = content;
	return ProseMirrorParser.fromSchema( schema ).parse( domNode );
};


// MAIN //

class ProseMirror extends Component {
	constructor( props ) {
		super( props );
		const doc = isJSON( props.defaultValue ) ?
		Node.fromJSON( schema, JSON.parse( props.defaultValue ) ) :
			parser( props.defaultValue );
		this.state = {
			editorState: EditorState.create({
				doc,
				schema,
				plugins
			})
		};
	}

	componentDidUpdate( prevProps ) {
		if (
			this.props.defaultValue !== prevProps.defaultValue ||
			this.props.docId !== prevProps.docId
		) {
			debug( 'Re-creating editor state...' );
			const doc = isJSON( this.props.defaultValue ) ?
				Node.fromJSON( schema, JSON.parse( this.props.defaultValue ) ) :
				parser( this.props.defaultValue );
			this.setState({
				editorState: EditorState.create({
					doc,
					schema,
					plugins
				})
			}, () => {
				this.editorView.destroy();
				this._createEditorView( this.editorDiv );
			});
		}
	}

	componentWillUnmount() {
		if ( this.editorView ) {
			this.editorView.destroy();
		}
	}

	_createEditorView = ( element ) => {
		this.editorDiv = element;
		if ( element !== null ) {
			this.editorView = new EditorView( element, {
				state: this.state.editorState,
				dispatchTransaction: this.dispatchTransaction,
				nodeViews: {
					footnote: ( node, view, getPos, decorations ) => { return new FootnoteView( node, view, getPos, decorations ); },
					image: ( node, view, getPos, decorations ) => { return new ImageNodeView( node, view, getPos, decorations ); },
					plot: ( node, view, getPos, decorations ) => { return new ImageNodeView( node, view, getPos, decorations ); },
					plotContainer: ( node, view, getPos, decorations ) => { return new ImageNodeView( node, view, getPos, decorations ); }
				},
				handleDOMEvents: {
					'dragenter': ( view ) => {
						debug( 'Handle drag enter event...' );
						toggleCursorParking( view );
					},
					'drop': handleDrop
				}
			});
		}
		this.props.onMount( this.editorDiv );
	}

	onEditorState = ( editorState ) => {
		let nChars = 0;
		let nWords = 0;
		editorState.doc.forEach( blockNode => {
			blockNode.forEach( inlineNode => {
				if ( inlineNode.text ) {
					nChars += inlineNode.text.length;
					nWords += countWords( inlineNode.text );
				}
			});
		});
		this.props.onEditorState( editorState );
		this.setState({ editorState, nWords, nChars });
	}

	dispatchTransaction = ( tx ) => {
		let editorState = this.state.editorState.apply( tx );
		if ( this.editorView !== null ) {
			this.editorView.updateState( editorState );
		}
		let fix = fixTables( this.state.editorState );
		if ( fix ) {
			editorState = editorState.
				apply( fix.setMeta( 'addToHistory', false ) );
		}
		this.onEditorState( editorState );
	};

	focus() {
		if ( this.editorView ) {
			this.editorView.focus();
		}
	}

	render() {
		return ( <Fragment>
			<MenuBar
				menu={this.props.menu}
				state={this.state.editorState}
				dispatch={this.dispatchTransaction}
				view={this.editorView}
				fullscreen={this.props.fullscreen}
				showColorPicker={this.props.showColorPicker}
				onColorChoice={this.props.onColorChoice}
			/>
			<div ref={this._createEditorView} />
			<StatusBar nWords={this.state.nWords} nChars={this.state.nChars} />
		</Fragment> );
	}
}


// PROPERTIES //

ProseMirror.propTypes = {
	defaultValue: PropTypes.string.isRequired,
	docId: PropTypes.number.isRequired,
	fullscreen: PropTypes.bool.isRequired,
	showColorPicker: PropTypes.bool.isRequired,
	menu: PropTypes.object.isRequired,
	onColorChoice: PropTypes.func,
	onEditorState: PropTypes.func,
	onMount: PropTypes.func
};

ProseMirror.defaultProps = {
	onColorChoice() {},
	onEditorState() {},
	onMount() {}
};


// EXPORTS //

export default ProseMirror;
