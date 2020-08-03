// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';
import Overlay from 'react-bootstrap/Overlay';
import NumberInput from 'components/input/number';
import Button from 'react-bootstrap/Button';
import round from '@stdlib/math/base/special/round';


// MAIN //

class FilterInputRange extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			currentValue: props.defaultValue,
			defaultValue: props.defaultValue,
			showRangeInput: false
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if ( nextProps.defaultValue !== prevState.defaultValue ) {
			const newState = {
				currentValue: nextProps.defaultValue,
				defaultValue: nextProps.defaultValue
			};
			return newState;
		}
		return null;
	}

	showRangeInput = () => {
		this.setState({
			showRangeInput: true
		});
	}

	hideRangeInput = () => {
		this.setState({
			showRangeInput: false
		});
	}

	render() {
		const { currentValue } = this.state;
		return ( <div className="input-range-wrapper" ref={( div ) => {
			this.inputRange = div;
		}} >
			<InputRange
				allowSameValues
				maxValue={this.props.maxValue}
				minValue={this.props.minValue}
				value={currentValue}
				onChange={( currentValue ) => {
					this.setState({ currentValue });
				}}
				onChangeComplete={( newValue ) => {
					this.props.onChange( newValue );
				}}
				formatLabel={( val ) => {
					return ( <span
						role="button" tabIndex={0}
						onKeyPress={this.showRangeInput}
						onClick={this.showRangeInput}
					>
						{round( val )}
					</span> );
				}}
				style={{ float: 'left' }}
			/>
			<Overlay
				show={this.state.showRangeInput}
				target={this.inputRange}
			>
				{({ placement, scheduleUpdate, arrowProps, outOfBoundaries, show, ...props }) => {
					return (
						<div className="input-range-number-entry"
							{...props}
							style={{
								...props.style
							}}
						>
							<NumberInput
								inline
								value={currentValue.min}
								min={this.props.minValue}
								max={currentValue.max}
								onChange={( v ) => {
									const newValue = {
										min: Number( v ),
										max: this.state.currentValue.max
									};
									this.setState({
										currentValue: newValue
									});
								}}
								step={0.1}
							/>
							<NumberInput
								inline value={currentValue.max}
								min={currentValue.min}
								max={this.props.maxValue}
								onChange={( v ) => {
									const newValue = {
										min: this.state.currentValue.min,
										max: Number( v )
									};
									this.setState({
										currentValue: newValue
									});
								}}
								step={0.1}
							/>
							<Button
								variant="outline-secondary" size="sm"
								onClick={this.hideRangeInput}
							>
								<i className="fas fa-times"></i>
							</Button>
						</div>
					);
				}}
			</Overlay>
		</div> );
	}
}


// PROPERTIES //

FilterInputRange.propTypes = {
	defaultValue: PropTypes.object.isRequired,
	maxValue: PropTypes.number.isRequired,
	minValue: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired
};


// EXPORTS //

export default FilterInputRange;
