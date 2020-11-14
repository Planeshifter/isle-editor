// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Badge from 'react-bootstrap/Badge';
import Input from 'components/input/base';
import Tooltip from 'components/tooltip';
import roundn from '@stdlib/math/base/special/roundn';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import PINF from '@stdlib/constants/math/float64-pinf';
import NINF from '@stdlib/constants/math/float64-ninf';
import SessionContext from 'session/context.js';
import './slider.css';


// VARIABLES //

const debug = logger( 'isle:slider-input' );


// FUNCTIONS //

function createTooltip( props ) {
	let tooltip = `Enter a${ props.step === 1 ? 'n integer' : ' number'} `;
	if ( props.max !== PINF && props.min !== NINF ) {
		tooltip += `between ${props.min} and ${props.max}:`;
	} else if ( props.min !== NINF ) {
		tooltip += `larger or equal to ${props.min}:`;
	} else if ( props.max !== PINF ) {
		tooltip += `smaller or equal to ${props.max}:`;
	} else {
		tooltip += ':';
	}
	return tooltip;
}


// MAIN //

/**
* A slider input component. Can be used as part of an ISLE dashboard or standalone. In the latter case, you want to handle changes via the `onChange` attribute or bind the value to a global variable via the `bind` attribute.
*
* @property {string} legend - caption of the input
* @property {number} defaultValue - The starting value of the slider
* @property {number} min - The minimum value of the slider
* @property {number} max - The maximum value of the slider
* @property {(number|string)} step - step size of the slider
* @property {boolean} inline - controls whether to place the slider inline with text or outside
* @property {number} precision - rounding of the input. The value will be rounded to have no more significant digits than the precision. For example, if one wishes to only use integers, a precision of 10 would be used, while if one wishes to round to the hundreds place, one would use a precision of 0.001
* @property {boolean} disabled - controls whether the slider input is active or not. If set to true, the slider will be present on the screen, albeit grayed-out
* @property {string} minLabel - label to be displayed to the left of slider instead of minimum value
* @property {string} maxLabel - label to be displayed to the right of slider instead of maximum value
* @property {boolean} hideTooltip - controls whether to hide tooltip
* @property {Object} style - CSS inline styles
* @property {Object} numberInputStyle - CSS inline styles for number input component
* @property {Object} rangeInputStyle - CSS inline style for range input component
* @property {Function} onChange - callback invoked with the new value when the slider value changes
*/
class SliderInput extends Input {
	constructor( props, context ) {
		super( props );

		const session = context;
		this.state = {
			tooltip: createTooltip( props ),
			value: props.bind && session.state ?
				session.state[ props.bind ]:
				props.defaultValue,
			prevProps: props
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		let newState = {};
		const { prevProps } = prevState;
		if ( nextProps.defaultValue !== prevProps.defaultValue ) {
			newState.value = nextProps.defaultValue;
		} else if ( nextProps.bind !== prevProps.bind ) {
			newState.value = global.lesson.state[ nextProps.bind ];
		}
		if ( nextProps.min !== prevProps.min || nextProps.max !== prevProps.max ) {
			newState.tooltip = createTooltip( nextProps );
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

	finishChange = ( event ) => {
		debug( 'Finalizing change...' );
		const { max, min, step } = this.props;
		let value = event.target.value;
		if ( value !== '' ) {
			value = parseFloat( value );
		}
		if ( value > max ) {
			value = max;
		}
		else if ( value < min ) {
			value = min;
		}
		else if ( step === 1.0 && value !== '' ) {
			value = value - value % this.props.step;
		}
		debug( `Setting state value to: ${value}...` );
		if ( value !== this.state.value ) {
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
		}
	}

	handleInputChange = ( event ) => {
		const valid = event.target.validity.valid;
		let value = event.target.value;
		debug( `Input value changed to ${value}` );
		this.setState({
			value
		}, () => {
			if ( valid && value !== '' ) {
				value = parseFloat( value );
				this.props.onChange( value );
				if ( this.props.bind ) {
					global.lesson.setState({
						[ this.props.bind ]: value
					});
				}
			} else if ( this.props.bind ) {
				global.lesson.setState({
					[ this.props.bind ]: value
				});
			}
		});
	}

	render() {
		let { value } = this.state;
		const { legend, disabled, inline, min, max, precision, step, minLabel, maxLabel } = this.props;
		if ( value !== '' ) {
			roundn( value, ( -1.0 )*precision );
		}
		const rangeInput = <input
			type="range"
			className="slider-range-input"
			min={min}
			max={max}
			step={step}
			value={value}
			disabled={disabled}
			onChange={this.handleInputChange}
			style={{
				width: '160px',
				float: inline ? 'none' : 'left',
				display: inline ? 'inline' : 'block',
				...this.props.rangeInputStyle
			}}
		/>;
		const numberInput = <input
			type="number"
			name="input"
			className="slider-number-input"
			disabled={disabled}
			min={min}
			max={max}
			step={step}
			value={value}
			onChange={this.handleInputChange}
			onBlur={this.finishChange}
			style={{
				float: inline ? 'none' : 'right',
				marginTop: legend && !inline ? -22 : 0,
				...this.props.numberInputStyle
			}}
			autoComplete="off"
		/>;

		if ( inline ) {
			return (
				<span className="input" style={{
					padding: '5px',
					opacity: disabled ? 0.2 : 1.0,
					...this.props.style
				}}>
					{ legend ?
						<label>{legend}:</label> :
						null
					}
					<span className="slider-range-wrapper" >
						<Badge>{minLabel || min}</Badge>
						{rangeInput}
						<Badge>{maxLabel || max}</Badge>
					</span>
					{numberInput}
				</span>
			);
		}
		return (
			<Tooltip
				id="sliderTooltip"
				placement="top"
				show={!this.props.hideTooltip}
				tooltip={disabled ? 'The slider input is disabled right now.' : this.state.tooltip}
			>
				<div
					className="slider-outer-div input"
					style={{
						opacity: disabled ? 0.2 : 1.0,
						...this.props.style
					}}
				>
					{ legend ?
						<label>{legend}:</label> :
						null
					}
					<br />
					<span className="slider-range-wrapper" >
						<Badge variant="secondary" style={{ float: 'left' }} >{minLabel || min}</Badge>
						{rangeInput}
						<Badge variant="secondary" style={{ float: 'left' }} >{maxLabel || max}</Badge>
					</span>
					{numberInput}
					<br />
				</div>
			</Tooltip>
		);
	}
}


// PROPERTIES //

SliderInput.defaultProps = {
	inline: false,
	legend: null,
	min: 0,
	minLabel: null,
	max: 100,
	maxLabel: null,
	step: 1,
	defaultValue: 10,
	onChange() {},
	precision: 10,
	disabled: false,
	hideTooltip: false,
	style: {},
	numberInputStyle: {},
	rangeInputStyle: {}
};

SliderInput.propTypes = {
	defaultValue: PropTypes.number,
	disabled: PropTypes.bool,
	inline: PropTypes.bool,
	legend: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	max: PropTypes.number,
	maxLabel: PropTypes.string,
	min: PropTypes.number,
	minLabel: PropTypes.string,
	onChange: PropTypes.func,
	precision: PropTypes.number,
	step: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	hideTooltip: PropTypes.bool,
	style: PropTypes.object,
	numberInputStyle: PropTypes.object,
	rangeInputStyle: PropTypes.object
};

SliderInput.contextType = SessionContext;


// EXPORTS //

export default SliderInput;
