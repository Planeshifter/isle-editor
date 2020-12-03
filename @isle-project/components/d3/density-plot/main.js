// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import D3Plot from '@isle-project/components/d3';
import * as d3 from 'd3';
import abs from '@stdlib/math/base/special/abs';
import isArray from '@stdlib/assert/is-array';


// VARIABLES //

const COLORS = [
	'#3366cc', '#dc3912', '#ff9900', '#109618',
	'#990099', '#0099c6', '#dd4477', '#66aa00',
	'#b82e2e', '#316395', '#994499', '#22aa99',
	'#aaaa11', '#6633cc', '#e67300', '#8b0707',
	'#651067', '#329262', '#5574a6', '#3b3eac'
];


// FUNCTIONS //

function kernelDensityEstimator( kernel, x ) {
	return ( sample ) => {
		return x.map( ( x ) => {
			return [ x, d3.mean( sample, v => kernel( x - v ) ) ];
		});
	};
}

function epanechnikovKernel( bandwidth ) {
	return ( u ) => {
		u = u / bandwidth;
		if ( abs( u ) <= 1.0 ) {
			return 0.75 * ( 1.0 - u * u ) / bandwidth;
		}
		return 0.0;
	};
}


// MAIN //

/**
* A d3-based density plot component.
*
* @property {Array} data - an `array` or `array of arrays` holding the data for which the density plot should be created
* @property {boolean} histogram - show a histogram alongside the density plot
* @property {Object} vline - if supplied, will display a vertical line at the supplied `value` with a given `label`
* @property {string} xlab - x-axis label
* @property {number} xmin - minimum value displayed on the x-axis
* @property {number} xmax - maximum value displayed on the x-axis
* @property {number} ymax - maximum value displayed on the y-axis
* @property {number} width - width of the created plot (in px)
* @property {number} height - height of the created plot (in px)
* @property {number} nBins - number of bins for the overlaid histogram.
* @property {number} bandwidth - smoothing parameter for the kernel density estimator
*/
class DensityPlot extends D3Plot {
	constructor( props ) {
		super( props );

		let width = props.width - this.opts.margin.left - this.opts.margin.right;
		let height = props.height - this.opts.margin.top - this.opts.margin.bottom;

		let x = d3.scaleLinear()
			.domain([ props.xmin, props.xmax ])
			.range([ 0, width ]);
		let y = d3.scaleLinear()
			.domain([ 0, this.props.ymax ])
			.range([ height, 0.0 ]);
		let line = d3.line()
			.x( d => x( d[ 0 ]) )
			.y( d => y( d[ 1 ]) );

		this.state = {
			x,
			y,
			line
		};
	}

	initialize( chart, data, opts ) {
		let width = this.props.width - opts.margin.left - opts.margin.right;
		let height = this.props.height - opts.margin.top - opts.margin.bottom;
		let xAxis = d3.axisBottom( this.state.x );
		let yAxis = d3.axisLeft( this.state.y );

		// Draw the background...
		chart.append( 'g' )
			.attr( 'class', 'x axis' )
			.attr( 'transform', 'translate(0,' + height + ')' )
			.call( xAxis )
			.append( 'text' )
			.attr( 'class', 'd3label' )
			.attr( 'x', width )
			.attr( 'y', -6 )
			.style( 'fill', 'none' )
			.text( this.props.xlab );

		// Add vertical line:
		let vline = this.props.vline;
		if ( vline !== void 0 ) {
			chart.append( 'line' )
				.attr( 'y1', this.state.y( 0.0 ) )
				.attr( 'y2', this.state.y( this.props.ymax ) )
				.attr( 'x1', this.state.x( vline.value ) )
				.attr( 'x2', this.state.x( vline.value ) )
				.attr( 'stroke', 'black' )
				.attr( 'stroke-width', '2' );

			chart.append( 'text' )
				.attr( 'x', this.state.x( vline.value ) * 1.1 )
				.attr( 'y', this.state.y( this.props.ymax / 1.2 ) )
				.attr( 'y', '.2em' )
				.text( vline.label );
		}

		chart.select( '.line' )
			.style( 'fill', 'none' )
			.style( 'stroke', '#000' )
			.style( 'stroke-width', '1.5px' );
		chart.select( '.axis path' )
			.style( 'fill', 'none' )
			.style( 'stroke', '#000' )
			.style( 'shape-rendering', 'crispEdges' );
		chart.select( '.axis line' )
			.style( 'fill', 'none' )
			.style( 'stroke', '#000' )
			.style( 'shape-rendering', 'crispEdges' );
		chart.append( 'g' )
			.attr( 'class', 'y axis' )
			.call( yAxis );
		chart.select( '.y.axis path' )
			.style( 'display', 'none' );
	}

	update( chart, data, opts ) {
		if ( isArray( data ) ) {
			let kde = kernelDensityEstimator( epanechnikovKernel( this.props.bandwidth ), this.state.x.ticks( 100 ) );
			let height = this.props.height - opts.margin.top - opts.margin.bottom;

			chart.selectAll( '.dline' ).remove();
			chart.selectAll( '.bar' ).remove();

			if ( isArray( data[ 0 ]) ) {
				data.forEach( ( d, i ) => {
					chart.append( 'path' )
						.datum( kde( d ) )
						.attr( 'class', 'dline' )
						.attr( 'd', this.state.line )
						.style( 'fill', 'none' )
						.style( 'stroke', COLORS[ i ])
						.style( 'stroke-width', '1.5px' );
				});
			} else {
				if ( this.props.histogram ) {
					let histogram = d3.histogram()
						.domain([ this.props.xmin, this.props.xmax ])
						.thresholds( this.props.nBins );
					let histData = histogram( data );
					const { x, y } = this.state;

					chart.selectAll( '.bar' )
						.data( histData )
						.enter()
						.insert( 'rect', '.axis' )
						.attr( 'class', 'bar' )
						.attr( 'x', 1 )
						.attr( 'transform', d => 'translate(' + x( d.x0 ) + ',' + y( d.length / data.length ) + ')' )
						.attr( 'width', d => x( d.x1 ) - x( d.x0 ) - 1 )
						.attr( 'height', d => ( height - y( d.length / data.length ) ) )
						.style( 'fill', '#bbb' )
						.style( 'shape-rendering', 'crispEdges' );
				}

				chart.append( 'path' )
					.datum( kde( data ) )
					.attr( 'class', 'dline' )
					.attr( 'd', this.state.line )
					.style( 'fill', 'none' )
					.style( 'stroke', 'steelblue' )
					.style( 'stroke-width', '1.5px' );
			}
		}
	}
}


// PROPERTIES //

DensityPlot.propTypes = {
	bandwidth: PropTypes.number,
	histogram: PropTypes.bool,
	nBins: PropTypes.number,
	vline: PropTypes.object,
	xlab: PropTypes.string,
	xmax: PropTypes.number,
	xmin: PropTypes.number,
	ymax: PropTypes.number
};

DensityPlot.defaultProps = {
	bandwidth: 4,
	height: 300,
	histogram: true,
	nBins: 8,
	vline: void 0,
	width: 600,
	xlab: 'value',
	xmax: 1.0,
	xmin: 0.0,
	ymax: 0.15
};


// EXPORTS //

export default DensityPlot;
