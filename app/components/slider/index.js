// MODULES //

import React, { Component, PropTypes } from 'react';
import { Button, Panel } from 'react-bootstrap';
import Slider from 'react-slick';


// VARIABLES //

const RE = /disabled/;


// COMPONENTS //

class NextArrow extends Component {
	render() {
		const disabled = RE.test( this.props.className );
		return (
			<Button
				bsSize="small"
				onClick={this.props.onClick}
				style={{
					position: 'absolute',
					display: 'block',
					right: '-10px',
					bottom: '-25px',
					zIndex: 100
				}}
				disabled={disabled}
			>Next</Button>
		);
	}
}

class PrevArrow extends Component {
	render() {
		const disabled = RE.test( this.props.className );
		return (
			<Button
				bsSize="small"
				onClick={this.props.onClick}
				style={{
					position: 'absolute',
					display: 'block',
					left: '-10px',
					bottom: '-25px',
					zIndex: 100
				}}
				disabled={disabled}
			>Previous</Button>
		);
	}
}



// DEFAULT SLIDER //

class DefaultSlider extends Component {
	render() {

		const settings = {
			className: 'center',
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: <PrevArrow />,
			nextArrow: <NextArrow />,
			...this.props
		};
		return (
			<Panel
				bsSize="large"
				style={{
					margin: '0 auto',
					marginTop: '5px',
					marginBottom: '5px',
					paddingBottom: '20px',
					width: '100%',
					height: '100%'
				}}
				header={<h4>{this.props.title}</h4>}
			>
				<Slider {...settings}>
					{ React.Children.map( this.props.children, child => <div> {child} </div> ) }
				</Slider>
			</Panel>
		);
	}
}


// DEFAULT PROPERTIES //

DefaultSlider.defaultProps = {
	dots: true,
	draggable: true,
	fade: false,
	infinite: false,
	swipeToSlide: true,
	title: ''
};


// PROPERTY TYPES //

DefaultSlider.propTypes = {
	dots: PropTypes.bool,
	draggable: PropTypes.bool,
	fade: PropTypes.bool,
	infinite: PropTypes.bool,
	swipeToSlide: PropTypes.bool,
	title: PropTypes.string
};


// EXPORTS //

export default DefaultSlider;
