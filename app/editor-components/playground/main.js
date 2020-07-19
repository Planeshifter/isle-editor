// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import { withTranslation } from 'react-i18next';
import {
	LiveProvider,
	LiveEditor,
	LiveError,
	LivePreview
} from 'react-live';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import isArray from '@stdlib/assert/is-array';
import isError from '@stdlib/assert/is-error';
import SessionContext from 'session/context.js';
import formatError from 'utils/format-error';
import styles from './styles.json';
import theme from './theme.js';
import './playground.css';
import './load_translations.js';


// MAIN //

/**
* Playground component to experiment with ISLE components.
*
* @property {number} value - code value (for controlled component)
* @property {number} defaultValue - value indicating the default code
* @property {Object} scope - scope object with variables / components which should be made available to the executed code; most often this is the name of the component you wish to display
* @property {Object} editorProps - properties passed down to code editor
* @property {Object} previewProps - properties passed down to the preview pane
* @property {Function} transformCode - function transforming the code before it is rendered
* @property {Object} style - CSS inline styles
* @property {Function} onChange - callback invoked with new code once code in editor changes
*/
class Playground extends Component {
	constructor( props, context ) {
		super( props );

		this.state = {
			value: props.value || props.defaultValue,
			prevProps: props
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		const newState = {};
		const { prevProps } = prevState;
		if ( nextProps.defaultValue !== prevProps.defaultValue ) {
			newState.value = nextProps.defaultValue;
		}
		if ( !isEmptyObject( newState ) ) {
			newState.prevProps = nextProps;
			return newState;
		}
		return null;
	}

	componentDidUpdate() {
		const node = ReactDom.findDOMNode( this );
		let slide = node.closest ? node.closest( '.spectacle-content' ) : null;
		if ( slide ) {
			let computedStyle = window.getComputedStyle( slide );
			let transform = computedStyle.getPropertyValue( 'transform' );
			let match = /matrix\(([0-9.]*)/.exec( transform );
			if ( isArray( match ) && match.length > 1 ) {
				let scaleFactor = match[ 1 ];
				node.style.transform = `scale(${1/scaleFactor})`;
			}
		}
	}

	handleChange = ( value ) => {
		this.props.onChange( value );
		if ( !this.props.code ) {
			this.setState({
				value
			});
		}
	}

	transformCode = ( code ) => {
		const session = this.context;
		if ( this.props.transformCode ) {
			code = this.props.transformCode( code );
		}
		if ( isError( code ) ) {
			return formatError( code.message );
		}
		return `<Provider session={session}>
			<Lesson
				className="${session.config.type === 'presentation' ? 'Presentation' : 'Lesson'}"
			>${code}</Lesson>
		</Provider>`;
	}

	render() {
		const scope = {
			React,
			session: this.context,
			...this.props.scope
		};
		let { value } = this.state;
		if ( this.props.value ) {
			value = this.props.value;
		}
		return (
			<div className="component-documentation" style={this.props.style} >
				<div className="playground-editable unselectable">{this.props.t('editable-source')}</div>
				<LiveProvider code={value} scope={scope} theme={theme} transformCode={this.transformCode} >
					<div className="playground-live-editor" >
						<LiveEditor
							onChange={this.handleChange}
							style={{
								fontSize: '1.25em',
								fontFamily: '\'Source Code Pro\', monospace'
							}}
							{...this.props.editorProps}
						/>
					</div>
					<LivePreview
						className="playground-live-preview"
						style={{
							...styles.livePreview,
							overflowY: 'hidden',
							transform: 'translateZ(0)'
						}}
						{...this.props.previewProps}
					/>
					<LiveError
						style={styles.liveError}
					/>
				</LiveProvider>
			</div>
		);
	}
}


// PROPERTIES //

Playground.propTypes = {
	defaultValue: PropTypes.string,
	value: PropTypes.string,
	scope: PropTypes.object,
	editorProps: PropTypes.object,
	previewProps: PropTypes.object,
	transformCode: PropTypes.func,
	onChange: PropTypes.func,
	style: PropTypes.object
};

Playground.defaultProps = {
	defaultValue: '',
	value: null,
	scope: {},
	editorProps: {},
	previewProps: {},
	transformCode: null,
	onChange() {},
	style: {}
};

Playground.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'playground' )( Playground );
