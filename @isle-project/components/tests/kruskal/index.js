// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import kruskalTest from '@stdlib/stats/kruskal-test';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';
import isNull from '@stdlib/assert/is-null';
import { addResources } from '@isle-project/locales';
import { withPropCheck } from 'utils/prop-check';


// VARIABLES //

addResources( 'Tests' );


// MAIN //

function Kruskal({ data, variable, group, showDecision }) {
	const { t } = useTranslation( 'Tests' );
	if ( !data ) {
		return <Alert variant="danger">{t('data-missing')}</Alert>;
	}
	const values = data[ variable ];
	const groups = data[ group ];
	const groupsFiltered = [];
	const valsFiltered = [];
	for ( let i = 0; i < values.length; i++ ) {
		if (
			( isNumber( values[i] ) && !isnan( values[i] ) ) &&
			( !isNull( groups[i] ) && groups[i] !== '' )
		) {
			valsFiltered.push( values[ i ] );
			groupsFiltered.push( `"${groups[i]}"` );
		}
	}
	return (
		<div style={{ overflowX: 'auto', width: '100%' }}>
			<label>{t('kruskal-wallis-test', { variable, group })}</label>
			<pre style={{ marginTop: 10 }}>{kruskalTest( valsFiltered, { groups: groupsFiltered }).print({
				decision: showDecision
			})}</pre>
		</div>
	);
}

// PROPERTIES //

Kruskal.defaultProps = {
	group: null,
	showDecision: false
};

Kruskal.propTypes = {
	data: PropTypes.object.isRequired,
	variable: PropTypes.string.isRequired,
	group: PropTypes.string,
	showDecision: PropTypes.bool
};


// EXPORTS //

/**
* Kruskal-Wallis Test.
*
* @property {Object} data - object of value arrays
* @property {string} variable - variable name
* @property {string} group - grouping variable
* @property {boolean} showDecision - controls whether to display if the null hypothesis is rejected at the specified significance level
*/
export default withPropCheck( Kruskal );
