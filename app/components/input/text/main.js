// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import Input from 'components/input/base';
import generateUID from 'utils/uid';
import SessionContext from 'session/context.js';
import './text.css';


// VARIABLES //

const uid = generateUID( 'text-input' );


// MAIN //

/**
* A text input component. Can be used as part of an ISLE dashboard or standalone. In the latter case, you want to handle changes via the `onChange` attribute or bind the value to a global variable via the `bind` attribute.
*
* @property {Function} onChange - A function to be called when a text value is changed
* @property {string} defaultValue - A value indicating the default value of the input at start
* @property {boolean} disabled - A boolean indicating whether the input is active or not
* @property {number} width - A number indicating the width of the input in pixels
* @property {boolean} inline - Indicates whether the input is displayed inline
* @property {string} legend - A string indicating the text displayed next to the number input
* @property {string} value - text value (for controlled component)
* @property {string} bind - name of global variable for the number to be assigned to
* @property {string} placeholder - A string indicating the value to be displayed before an initial choice is made
* @property {Object} style - CSS inline styles
* @property {Function} onBlur - callback function invoked when the text area loses focus
* @property {Function} onKeyPress - callback function to be invoked when any key is entered
* @property {Function} onKeyDown - callback function to be invoked when any key is pressed down
* @property {Function} onKeyUp - callback function to be invoked when key is released
*/
class TextInput extends Input {
	constructor( props, context ) {
		super( props );

		const session = context;
		this.state = {
			value: props.bind && session.state ?
				session.state[ props.bind ]:
				props.defaultValue,
			prevProps: props
		};

		this.id = props.id || uid( props );
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		const newState = {};
		const { prevProps } = prevState;
		if ( nextProps.defaultValue !== prevProps.defaultValue ) {
			newState.value = nextProps.defaultValue;
		} else if ( nextProps.bind !== prevProps.bind ) {
			newState.value = global.lesson.state[ nextProps.bind ];
		}
		if ( !isEmptyObject( newState ) ) {
			newState.prevProps = nextProps;
			return newState;
		}
		return null;
	}

	componentDidUpdate() {
		if ( this.props.bind ) {
			let globalVal = global.lesson.state[ this.props.bind ];
			if ( globalVal !== this.state.value ) {
				this.setState({
					value: globalVal
				});
			}
		}
	}

	handleChange = ( event ) => {
		const value = event.target.value;
		this.setState({
			value
		}, () => {
			this.props.onChange( value );
			if ( this.props.bind ) {
				global.lesson.setState({
					[ this.props.bind ]: value
				});
			}
		});
	};

	focus = () => {
		this.textInput.focus();
	}

	render() {
		if ( this.props.inline ) {
			return (
				<span className="input" style={this.props.style} >
					{ this.props.legend ? <label htmlFor={this.id} >
						{this.props.legend}:
					</label> : <span /> }
					<input
						id={this.id}
						className="text-inline-input"
						type="text"
						name="input"
						placeholder={this.props.placeholder}
						value={this.state.value}
						ref={( input ) => {
							this.textInput = input;
						}}
						style={{
							width: this.props.width
						}}
						onChange={this.handleChange}
						onKeyPress={this.props.onKeyPress}
						onKeyDown={this.props.onKeyDown}
						onKeyUp={this.props.onKeyUp}
					/>
					{ this.props.description ?
						<span> ({this.props.description}) </span> :
						<span />
					}
				</span>
			);
		}
		return (
			<div className="input text-container-div" style={this.props.style} >
				<span>
					{ this.props.legend ?
						<label htmlFor={this.id} >{this.props.legend}:</label> :
						null
					}
					{ this.props.description ?
						<span> {this.props.description}</span> :
						<span />
					}
				</span>
				<input
					id={this.id}
					className="text-input"
					type="text"
					name="input"
					placeholder={this.props.placeholder}
					value={this.state.value}
					ref={( input ) => {
						this.textInput = input;
					}}
					style={{
						width: this.props.width
					}}
					onBlur={this.props.onBlur}
					onChange={this.handleChange}
					onKeyPress={this.props.onKeyPress}
					onKeyDown={this.props.onKeyDown}
					onKeyUp={this.props.onKeyUp}
				/>
			</div>
		);
	}
}


// PROPERTIES //

TextInput.defaultProps = {
	bind: null,
	defaultValue: '',
	legend: '',
	width: 80,
	onBlur() {},
	onChange() {},
	onKeyDown() {},
	onKeyPress() {},
	onKeyUp() {},
	inline: false,
	placeholder: 'Enter text',
	style: {}
};

TextInput.propTypes = {
	bind: PropTypes.string,
	defaultValue: PropTypes.string,
	legend: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	inline: PropTypes.bool,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	onKeyDown: PropTypes.func,
	onKeyPress: PropTypes.func,
	onKeyUp: PropTypes.func,
	placeholder: PropTypes.string,
	width: PropTypes.number,
	style: PropTypes.object
};

TextInput.contextType = SessionContext;


// EXPORTS //

export default TextInput;
