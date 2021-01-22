// MODULES //

import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import logger from 'debug';
import isArray from '@stdlib/assert/is-array';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import { isPrimitive as isBoolean } from '@stdlib/assert/is-boolean';
import isObject from '@stdlib/assert/is-object';
import Tooltip from '@isle-project/components/tooltip';
import generateUID from '@isle-project/utils/uid';
import customStyles from './styles.js';


// VARIABLES //

const debug = logger( 'isle:select-input' );
const uid = generateUID( 'select-input' );


// FUNCTIONS //

const transformMultiValue = ( value ) => {
	let out;
	if ( isArray( value ) ) {
		out = value.map( val => {
			return { 'label': val, 'value': val };
		});
	} else if ( value === '' ) {
		out = [];
	} else {
		out = { 'label': value, 'value': value };
	}
	return out;
};

const transformValue = ( value ) => {
	let out;
	if ( isArray( value ) ) {
		out = value.map( val => {
			return { 'label': val, 'value': val };
		});
	} else {
		out = { 'label': value, 'value': value };
	}
	return out;
};


// MAIN //

/**
* A select input component. Can be used as part of an ISLE dashboard or standalone. In the latter case, you want to handle changes via the `onChange` attribute or bind the value to a global variable via the `bind` attribute.
*
* @property {Array} options - array of indicating the choices available the user
* @property {string} bind - name of global variable for the number to be assigned to
* @property {Function} onChange - callback function to be invoked when a choice is made
* @property {boolean} clearable - boolean value indicating whether one may clear choice(s) made
* @property {string} defaultValue - default value of the input at startup
* @property {boolean} disabled - controls whether the input is active or not
* @property {boolean} inline - indicates whether the input is displayed inline
* @property {string} legend - text displayed next to the input
* @property {boolean} multi - controls whether one may select multiple answers
* @property {string} menuPlacement - placement of the menu in relation to the control (either `auto`, `top`, or `bottom`)
* @property {string} placeholder - value to be displayed before an initial choice is made
* @property {string} tooltip - text displayed when hovering over legend
* @property {Object} style - CSS inline styles
*/
const SelectInput = ( props ) => {
	const { bind, defaultValue, multi, onChange } = props;
	let initialValue = null;
	if ( defaultValue ) {
		initialValue = multi ?
		transformMultiValue( defaultValue ) :
		transformValue( defaultValue );
	}
	const [ value, setValue ] = useState( initialValue );
	const { t } = useTranslation( 'Input' );
	const id = useRef( props.id || uid( props ) );

	useEffect( () => {
		if ( bind ) {
			const globalValue = global.lesson.state[ bind ];
			if ( globalValue !== value ) {
				setValue( globalValue );
			}
		}
	}, [ bind, value ]);
	useEffect( () => {
		debug( 'Default value has changed...' );
		if ( defaultValue ) {
			setValue(
				multi ?
				transformMultiValue( defaultValue ) :
				transformValue( defaultValue )
			);
		}
	}, [ defaultValue, multi ] );
	useEffect( () => {
		if ( bind ) {
			setValue( global.lesson.state[ bind ] );
		}
	}, [ bind ]);

	const options = props.options.map( e => {
		return { 'label': e, 'value': e };
	});
	const handleChange = useCallback( ( newValue ) => {
		debug( 'Received a new value: ' + JSON.stringify( newValue ) );
		setValue( newValue );
		let val = null;
		if ( isObject( newValue ) || isArray( newValue ) ) {
			val = multi ?
				newValue.map( x => x.value ) :
				newValue.value;
		}
		onChange( val );
		if ( bind ) {
			global.lesson.setState({
				[ bind ]: val
			});
		}
	}, [ bind, multi, onChange ] );

	debug( 'Render select component...' );
	let renderedValue;
	let style;
	if ( props.value !== void 0 ) {
		if ( isArray( props.value ) ) {
			renderedValue = ( props.value ).map( e => {
				return { 'label': e, 'value': e };
			});
		} else if ( isString( props.value ) ) {
			renderedValue = { 'label': props.value, 'value': props.value };
		} else {
			renderedValue = [];
		}
	}
	else {
		renderedValue = value;
	}
	if ( props.inline ) {
		style = {
			width: '180px',
			display: 'inline-block',
			...props.style
		};
	} else {
		style = {
			...props.style
		};
	}
	let clearable = multi ? true : false;
	if ( isBoolean( props.clearable ) ) {
		clearable = props.clearable;
	}
	console.log( defaultValue );
	console.log( props.value );
	console.log( value );
	return (
		<Form className="input" style={{ ...style }} >
			<FormGroup controlId={`${id}-form`} >
				{ props.legend ?
					<Tooltip tooltip={props.tooltip}>
						<label htmlFor={id} >{props.legend}</label>
					</Tooltip> :
					null
				}
				<Select
					id={id}
					name="form-field-name"
					{...props}
					value={renderedValue}
					options={options}
					onChange={handleChange}
					placeholder={isString( props.placeholder ) ? props.placeholder : t('select-placeholder')}
					isMulti={multi}
					styles={customStyles}
					isClearable={clearable}
					isDisabled={props.disabled}
					menuPlacement={props.menuPlacement}
					menuPortalTarget={document.body}
				/>
			</FormGroup>
		</Form>
	);
};


// PROPERTIES //

SelectInput.defaultProps = {
	bind: '',
	clearable: null,
	onChange() {},
	defaultValue: null,
	disabled: false,
	inline: false,
	legend: '',
	menuPlacement: 'auto',
	options: [],
	multi: false,
	placeholder: null,
	tooltip: null,
	style: {}
};

SelectInput.propTypes = {
	bind: PropTypes.string,
	clearable: PropTypes.bool,
	defaultValue: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.array,
		PropTypes.object // accept `String` objects (e.g., for factor variables)
	]),
	disabled: PropTypes.bool,
	inline: PropTypes.bool,
	legend: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	menuPlacement: PropTypes.oneOf([
		'auto',
		'top',
		'bottom'
	]),
	multi: PropTypes.bool,
	onChange: PropTypes.func,
	options: PropTypes.array,
	placeholder: PropTypes.string,
	tooltip: PropTypes.string,
	style: PropTypes.object
};


// EXPORTS //

export default SelectInput;
