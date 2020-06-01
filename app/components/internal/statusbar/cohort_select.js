// MODULES //

import React from 'react';
import isArray from '@stdlib/assert/is-array';


// MAIN //

const CohortSelect = ( props ) => {
	const session = props.session;
	const cohorts = session.cohorts;
	if ( !isArray( cohorts ) ) {
		return null;
	}

	const handleCohortChange = ( event ) => {
		session.selectCohort( event.target.value );
	};
	const select = ( <select
		id={props.id}
		className="cohort-select"
		onChange={handleCohortChange} onBlur={handleCohortChange}
		value={session.selectedCohort ? session.selectedCohort.title : 'all'}
	>
		<option value="all">All Cohorts</option>
		{cohorts.map( ( v, key ) => {
			return (
				<option
					key={key}
					value={v.title}
				>{v.title}</option>
			);
		})}
	</select> );
	return ( <div style={{ padding: '5px' }}>
		<label htmlFor={props.id} style={{ marginRight: 5 }}>{props.label}</label>
		{select}
	</div> );
};


// EXPORTS //

export default CohortSelect;
