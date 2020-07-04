// MODULES //

/*
	Disable no-new-func warning as evaluating code in an editor is one of the few valid use-cases of this otherwise dangerous function:
*/
/* eslint no-new-func: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { transformSync } from '@babel/core';
import logger from 'debug';
import objectKeys from '@stdlib/utils/keys';
import isObjectArray from '@stdlib/assert/is-object-array';
import isObject from '@stdlib/assert/is-object';
import repeat from '@stdlib/string/repeat';
import replace from '@stdlib/string/replace';
import markdownToHTML from 'utils/markdown-to-html';
import pluginTransformJSX from 'babel-plugin-transform-react-jsx';
import Provider from 'components/provider';
import Session from 'session';
import transformToPresentation from 'utils/transform-to-presentation';
import isleFileIncludes from './isle_file_includes.js';
import createScope from './create_scope.js';
import loadRequires from './load_requires.js';
import applyStyles from './apply_styles.js';
import './preview.css';


// VARIABLES //

const OPTS = {
	plugins: [ pluginTransformJSX ]
};
const debug = logger( 'isle-editor:preview' );
const RE_LINES = /\r?\n/g;


// FUNCTIONS //

function clearGlobalVariables( oldPreamble ) {
	const { require } = oldPreamble;
	let keys = objectKeys( require );
	for ( let i = 0; i < keys.length; i++ ) {
		global[ keys[ i ] ] = void 0;
	}
}


// MAIN //

class Preview extends Component {
	constructor( props ) {
		debug( 'Create preview pane...' );
		super( props );

		const offline = props.currentMode === 'offline';
		const session = new Session( props.preamble, offline );
		this.session = session;
		this.scope = createScope( session );
		const lessonState = session.config.state;
		this.state = {
			...lessonState,
			isLoading: true,
			includes: null
		};
		global.lesson = this;
		if ( isObject( props.preamble ) ) {
			try {
				applyStyles( props.preamble, props.filePath || '' );
			} catch ( err ) {
				props.encounteredError( err );
			}
		}
	}

	async componentDidMount() {
		debug( 'Preview did mount.' );
		this._isMounted = true;
		const { preamble, filePath } = this.props;
		if ( isObject( preamble ) ) {
			await this.loadRequires( preamble, filePath );
		}
		const includes = await isleFileIncludes( this.props.code, preamble, filePath );

		// eslint-disable-next-line react/no-did-mount-set-state
		this.setState({
			includes
		});
	}

	shouldComponentUpdate( nextProps, nextState ) {
		if (
			this.props.code !== nextProps.code ||
			this.props.preambleText !== nextProps.preambleText ||
			this.props.currentMode !== nextProps.currentMode ||
			this.props.currentRole !== nextProps.currentRole ||
			this.props.unavailableHeight !== nextProps.unavailableHeight ||
			this.state.isLoading !== nextState.isLoading ||
			this.state.includes !== nextState.includes
		) {
			return true;
		}
		const lessonState = this.session.config.state;
		const keys = objectKeys( lessonState );
		for ( let i = 0; i < keys.length; i++ ) {
			if ( this.state[ keys[ i ] ] !== nextState[ keys[ i ] ] ) {
				return true;
			}
		}
		return false;
	}

	componentDidUpdate( prevProps ) {
		debug( 'Preview did update.' );
		if (
			this.props.preambleText !== prevProps.preambleText ||
			this.props.currentMode !== prevProps.currentMode ||
			this.props.currentRole !== prevProps.currentRole
		) {
			const offline = this.props.currentMode === 'offline';
			const session = new Session( this.props.preamble, offline );
			this.session = session;
			this.scope = createScope( session );
			let lessonState = session.config.state;
			this.setState({
				...lessonState,
				isLoading: true
			}, async () => {
				clearGlobalVariables( prevProps.preamble );
				await this.handlePreambleChange( this.props.preamble );
			});
		}
	}

	componentWillUnmount() {
		debug( 'Preview will unmount...' );
		this._isMounted = false;
	}

	async loadRequires( preamble, filePath ) {
		const { encounteredError } = this.props;
		try {
			const err = await loadRequires( preamble.require, filePath || '' );
			if ( !err && !this._isMounted ) {
				return this.props.resetError();
			}
			this.setState({
				isLoading: false
			}, () => {
				if ( err ) {
					encounteredError( new Error( `Error encountered while loading 'require' statements: ${err.message}` ) );
				}
				debug( 'Finished loading all `requires`...' );
			});
		} catch ( err ) {
			if ( this._isMounted ) {
				this.setState({
					isLoading: false
				}, () => {
					encounteredError( err );
				});
			}
		}
	}

	handlePreambleChange = async ( newPreamble ) => {
		debug( 'Handle preamble change...' );
		await this.loadRequires( newPreamble, this.props.filePath || '' );
		try {
			applyStyles( newPreamble, this.props.filePath || '' );
		} catch ( err ) {
			return this.props.encounteredError( err );
		}
	}

	renderPreview = () => {
		debug( 'Should render the lesson...' );
		let es5code;
		let { code, preamble } = this.props;

		// Remove preamble and comments:
		let noEmptyLines = 0;

		const keys = objectKeys( this.state.includes );
		for ( let i = 0; i < keys.length; i++ ) {
			code = code.replace( keys[ i ], this.state.includes[ keys[ i ] ] );
		}

		const replacer = ( match, p1 ) => {
			noEmptyLines += ( p1.match( RE_LINES ) || '' ).length;
			return '';
		};

		// Replace preamble with empty lines:
		code = code.replace( /---([\S\s]*?)---/, replacer );

		// Replace comments with empty lines:
		code = code.replace( /<!--([\S\s]*?)-->/g, replacer );

		// Replace Markdown by HTML...
		try {
			code = markdownToHTML( code, {
				filePath: this.props.filePath,
				addEmptySpans: preamble.type !== 'presentation',
				lineNumber: noEmptyLines,
				addLineWrappers: true
			});
		} catch ( err ) {
			err.message = replace( err.message, '\n', '\n | ' );
			return this.props.encounteredError( err );
		}
		if ( preamble.type === 'presentation' ) {
			debug( 'Should render a presentation...' );
			code = transformToPresentation( code, preamble );
		}
		let additions = '';
		if ( !preamble.removeStatusBar ) {
			additions = '<StatusBar className="fixedPos" />';
		}
		if ( !preamble.removeToolbar ) {
			let elements = '[';
			if ( isObjectArray( preamble.toolbar ) ) {
				preamble.toolbar.forEach( ( x, i ) => {
					elements += `{name: '${x.name}', component: ${x.component}, icon: '${x.icon}' }`;
					if ( i < preamble.toolbar.length - 1 ) {
						elements += ', ';
					}
				});
			}
			elements += ']';
			additions += `<Toolbar elements={${elements}} />`;
		}
		additions += '\n';
		noEmptyLines += 1;
		code = additions + code;

		// Prepend empty lines so line numbers in error stack traces match:
		code = repeat( '\n', noEmptyLines ) + code;
		code = `<Lesson
			className="${preamble.type === 'presentation' ? 'Presentation' : 'Lesson'}"
			style={{
				overflowY: 'scroll',
				overflowX: 'auto',
				height: 'calc(100vh - ${this.props.unavailableHeight}px)',
				minHeight: 'calc(100vh - ${this.props.unavailableHeight}px)',
				zIndex: 2
			}}
		>
			${code}
		</Lesson>`;
		code = `const out = ${code}`;
		this.props.onCode( code );

		debug( 'Transpile code to ES5...' );
		try {
			es5code = transformSync( code, OPTS );
		}
		catch ( err ) {
			this.props.encounteredError( err );
			return null;
		}
		es5code.code += '\n\n return out;';
		if ( es5code && es5code.code ) {
			const SCOPE_KEYS = Object.keys( this.scope );
			const SCOPE_VALUES = SCOPE_KEYS.map( key => this.scope[key] );
			const f = new Function( '_poly', ...SCOPE_KEYS, es5code.code ).bind( this );
			try {
				const out = f( '_poly', ...SCOPE_VALUES );
				return out;
			}
			catch ( err ) {
				this.props.encounteredError( err );
				return null;
			}
		}
	}

	render() {
		debug( 'Rendering preview...' );
		return ( <Provider session={this.session} currentRole={this.props.currentRole} >
			{ this.state.isLoading ? 'Loading...' : this.renderPreview()}
		</Provider> );
	}
}


// PROPERTIES //

Preview.defaultProps = {
	code: '',
	onCode() {}
};

Preview.propTypes = {
	code: PropTypes.string,
	currentMode: PropTypes.string.isRequired,
	currentRole: PropTypes.string.isRequired,
	encounteredError: PropTypes.func.isRequired,
	resetError: PropTypes.func.isRequired,
	onCode: PropTypes.func,
	preamble: PropTypes.object.isRequired,
	preambleText: PropTypes.string.isRequired,
	unavailableHeight: PropTypes.number.isRequired
};


// EXPORTS //

export default Preview;
