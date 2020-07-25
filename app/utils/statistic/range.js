/*
* Adapted from MIT-licensed code.
*
* Copyright (c) 2014. Athan Reines.
*
* @source https://github.com/compute-io/range
*/

// MODULES //

import { isPrimitive as isNumber } from '@stdlib/assert/is-number';


// MAIN //

/**
* Returns the arithmetic range of an array.
*
* @param {Array} arr - input array
* @returns {Array} arithmetic range
*/
function range( arr ) {
	const len = arr.length;
	if ( len === 0 ) {
		return [ NaN, NaN, NaN ];
	}
	let min = arr[ 0 ];
	let max = min;
	for ( let i = 1; i < len; i++ ) {
		let x = arr[ i ];
		if ( !isNumber( x ) ) {
			return [ NaN, NaN, NaN ];
		}
		if ( x < min ) {
			min = x;
		} else if ( x > max ) {
			max = x;
		}
	}
	return [ max-min, min, max ];
}


// EXPORTS //

export default range;
