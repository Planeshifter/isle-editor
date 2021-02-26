// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import anova1 from '@stdlib/stats/anova1';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';
import isNull from '@stdlib/assert/is-null';
import { withPropCheck } from 'utils/prop-check';


// MAIN //

function Anova({ data, variable, group, showDecision }) {
	const { t } = useTranslation( 'Tests' );
	if ( !data ) {
		return <Alert variant="danger">{t('data-missing')}</Alert>;
	}
	const vals = data[ variable ];
	const groups = data[ group ];
	const groupsFiltered = [];
	const valsFiltered = [];
	for ( let i = 0; i < vals.length; i++ ) {
		if (
			( isNumber( vals[i] ) && !isnan( vals[i] ) ) &&
			( !isNull( groups[i] ) && groups[i] !== '' )
		) {
			valsFiltered.push( vals[ i ] );
			groupsFiltered.push( `"${groups[i]}"` );
		}
	}
	return (
		<div style={{ overflowX: 'auto', width: '100%' }}>
			<label>{t('anova', { variable, group })}</label>
			<pre style={{ marginTop: 10 }}>{anova1( valsFiltered, groupsFiltered ).print({
				decision: showDecision
			})}</pre>
		</div>
	);
}


// PROPERTIES //

Anova.defaultProps = {
	group: null,
	showDecision: false
};

Anova.propTypes = {
	data: PropTypes.object.isRequired,
	variable: PropTypes.string.isRequired,
	group: PropTypes.string,
	showDecision: PropTypes.bool
};


// EXPORTS //

/**
* Analysis of variance.
*
* @property {Object} data - object of value arrays
* @property {string} variable - name of variable to be displayed
* @property {string} group - name of grouping variable
* @property {boolean} showDecision - controls whether to display the test decision
*/
export default withPropCheck( Anova );
