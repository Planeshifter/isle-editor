// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import TeX from '@isle-project/components/tex';
import pcorrtest from '@stdlib/stats/pcorrtest';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';


// MAIN //

function CorrTest({ data, var1, var2, direction, alpha, rho0, showDecision }) {
	const x = data[ var1 ];
	const y = data[ var2 ];
	const xFiltered = [];
	const yFiltered = [];
	for ( let i = 0; i < x.length; i++ ) {
		if (
			( isNumber( x[i] ) && !isnan( x[i] ) ) &&
			( isNumber( y[i] ) && !isnan( y[i] ) )
		) {
			xFiltered.push( x[i] );
			yFiltered.push( y[i] );
		}
	}
	const result = pcorrtest( xFiltered, yFiltered, {
		'alpha': alpha,
		'alternative': direction,
		'rho': rho0
	});
	let arrow = '\\ne';
	if ( direction === 'less' ) {
		arrow = '<';
	} else if ( direction === 'greater' ){
		arrow = '>';
	}
	return (
		<div style={{ overflowX: 'auto', width: '100%' }}>
			<label>Correlation test between {var1} and {var2}:</label>
			<TeX displayMode raw={`H_0: \\rho = ${rho0} \\; vs. \\; H_1: \\rho ${arrow} ${rho0}`} tag="" />
			<pre>
				{result.print({
					decision: showDecision
				})}
			</pre>
		</div>
	);
}


// PROPERTIES //

CorrTest.defaultProps = {
	rho0: 0,
	alpha: 0.05,
	direction: 'two-sided',
	showDecision: false
};

CorrTest.propTypes = {
	data: PropTypes.object.isRequired,
	var1: PropTypes.string.isRequired,
	var2: PropTypes.string.isRequired,
	rho0: PropTypes.number,
	alpha: PropTypes.number,
	direction: PropTypes.oneOf([ 'less', 'greater', 'two-sided' ]),
	showDecision: PropTypes.bool
};


// EXPORTS //

/**
* Correlation test.
*
* @property {Object} data - object of value arrays
* @property {string} var1 - name of first variable
* @property {string} var2 - name of second variable
* @property {number} alpha - significance level
* @property {number} rho0 - correlation value under the null hypothesis
* @property {string} direction - test direction (either `less`, `greater`, or `two-sided`)
* @property {boolean} showDecision - controls whether to display if the null hypothesis is rejected at the specified significance level
*/
export default CorrTest;
