// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/input';
import roundn from '@stdlib/math/base/special/roundn';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import './slider.css';


// MAIN //

class SliderInput extends Input {

	constructor( props, context ) {
		super( props );

		const { session } = context;
		this.state = {
			value: !props.bind ?
				props.defaultValue :
				session.config.state[ props.bind ]
		};

		this.handleInputChange = ( event ) => {
			const value = event.target.value;
			const { min, max } = this.props;

			if (
				( min === null || value >= min || min > 0 ) &&
				( max === null || value <= max )
			) {
				this.setState({
					value
				}, () => {
					this.props.onChange( value );
					if ( this.props.bind ) {
						global.lesson.setState({
							[ this.props.bind ]: value
						}, () => {
							if ( this.context.autoUpdate ) {
								this.context.triggerDashboardClick();
							}
						});
					} else {
						if ( this.context.autoUpdate ) {
							this.context.triggerDashboardClick();
						}
					}
				});
			}
		};
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

	componentWillReceiveProps( nextProps ) {
		let newState = {};
		if ( nextProps.defaultValue !== this.props.defaultValue ) {
			newState.value = nextProps.defaultValue;
		} else if ( nextProps.bind !== this.props.bind ) {
			newState.value = global.lesson.state[ nextProps.bind ];
		}
		if ( !isEmptyObject( newState ) ) {
			this.setState( newState );
		}
	}

	render() {
		const rangeInput = <input
			type="range"
			min={this.props.min}
			max={this.props.max}
			step={this.props.step}
			style={{
				width: '50%',
				marginBottom: '4px',
				marginLeft: '8px',
				float: 'left'
			}}
			value={this.state.value}
			onChange={this.handleInputChange}
		/>;
		const numberInput = <input
			type="number"
			name="input"
			style={{
				width: '80px',
				marginRight: '8px',
				marginBottom: '4px',
				paddingLeft: '16px',
				paddingRight: '4px',
				background: 'rgb(186, 204, 234)',
				border: 'solid 1px darkgrey',
				borderRadius: '2px',
				textAlign: 'center',
				float: 'right',
			}}
			min={this.props.min}
			max={this.props.max}
			step={this.props.step}
			value={this.props.fractionDigits ?
				parseFloat( this.state.value ).toFixed( this.props.fractionDigits ) :
				roundn( this.state.value, -10 )
			}
			onChange={this.handleInputChange}
		/>;

		if ( this.props.inline ) {
			return (
				<span style={{
					padding: '5px'
				}}>
					<label>{this.props.legend}:</label>
					{rangeInput}
					{numberInput}
				</span>
			);
		}
		return (
			<div className="slider-outer-div">
				<label style={{
					marginLeft: '8px',
				}}>{this.props.legend}:</label>
				<br />
				{rangeInput}
				{numberInput}
				<br />
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

SliderInput.defaultProps = {
	inline: false,
	min: 0,
	max: 100,
	step: 1,
	defaultValue: 10,
	onChange() {},
	fractionDigits: null
};


// PROPERTY TYPES //

SliderInput.propTypes = {
	inline: PropTypes.bool,
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	defaultValue: PropTypes.number,
	onChange: PropTypes.func,
	fractionDigits: PropTypes.number
};


// CONTEXT TYPES //

SliderInput.contextTypes = {
	triggerDashboardClick: PropTypes.func,
	autoUpdate: PropTypes.bool,
	session: PropTypes.object
};


// EXPORTS //

export default SliderInput;
