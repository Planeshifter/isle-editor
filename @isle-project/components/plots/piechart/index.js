// MODULES //

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import { i18n } from '@isle-project/locales';
import Plotly from '@isle-project/components/plotly';
import countBy from '@stdlib/utils/count-by';
import identity from '@stdlib/utils/identity-function';
import floor from '@stdlib/math/base/special/floor';
import ceil from '@stdlib/math/base/special/ceil';
import extractUsedCategories from '@isle-project/utils/extract-used-categories';
import sum from '@isle-project/utils/statistic/sum';
import by from '@isle-project/utils/by';
import by2 from '@isle-project/utils/by2';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { Factor } from '@isle-project/utils/factor-variable';


// FUNCTIONS //

export function generatePiechartConfig({ data, variable, group, summaryVariable }) {
	let annotations;
	let traces;
	if ( !group ) {
		let freqs;
		if ( summaryVariable ) {
			if ( !data[ summaryVariable] || !data[ variable ] ) {
				return {};
			}
			freqs = by( data[ summaryVariable ], data[ variable ], sum );
		} else {
			if ( !data[ variable ] ) {
				return {};
			}
			freqs = countBy( data[ variable ], identity );
		}
		const categories = extractUsedCategories( freqs, variable );
		const counts = new Array( categories.length );
		for ( let i = 0; i < categories.length; i++ ) {
			counts[ i ] = freqs[ categories[ i ] ];
		}
		traces = [ {
			values: counts,
			labels: categories,
			type: 'pie'
		} ];
	} else {
		let freqs;
		if ( summaryVariable ) {
			if ( !data[ summaryVariable] || !data[ variable ] || !data[ group ] ) {
				return {};
			}
			freqs = by2( data[ variable ], data[ summaryVariable ], data[ group ], ( categories, values ) => {
				const counts = {};
				for ( let i = 0; i < categories.length; i++ ) {
					const key = categories[ i ];
					if ( !counts[ key ] ) {
						counts[ key ] = values[ i ];
					} else {
						counts[ key ] += values[ i ];
					}
				}
				return counts;
			});
		} else {
			if ( !data[ variable] || !data[ group ] ) {
				return {};
			}
			freqs = by( data[ variable ], data[ group ], arr => {
				return countBy( arr, identity );
			});
		}
		const keys = extractUsedCategories( freqs, group );
		const nPlots = keys.length;
		const nRows = ceil( nPlots / 2 );
		const nCols = 2;
		traces = [];
		annotations = [];

		for ( let i = 0; i < keys.length; i++ ) {
			const key = keys[ i ];
			const row = floor( i / nCols );
			const col = i - ( row*nCols );
			const val = freqs[ key ];
			const categories = extractUsedCategories( val, variable );
			const counts = new Array( categories.length );
			for ( let i = 0; i < categories.length; i++ ) {
				counts[ i ] = val[ categories[ i ] ];
			}
			traces.push({
				values: counts,
				labels: categories,
				type: 'pie',
				name: key,
				domain: {
					x: [ ( col ) / nCols, ( col+1 ) / nCols ],
					y: [ ( row ) / nRows, ( row+0.8 ) / nRows ]
				}
			});
			annotations.push({
				text: key,
				x: ( col % 2 ? col+0.8 : col+0.2 ) / nCols,
				y: ( row+0.9 ) / nRows,
				font: {
					size: 18
				},
				showarrow: false
			});
		}
	}
	let title;
	const tmp = group ? `${variable} ${i18n.t('plotly:given')} ${group}` : variable;
	if ( summaryVariable ) {
		title = `${summaryVariable} ${i18n.t('plotly:per')} ${tmp}`;
	} else {
		title = tmp;
	}
	const layout = {
		annotations,
		title
	};
	return {
		layout,
		data: traces
	};
}


// MAIN //

function PieChart({ variable, group, data, summaryVariable, id, action, onShare }) {
	const config = useMemo( () => {
		if ( !data ) {
			return {};
		}
		return generatePiechartConfig({
			data,
			variable,
			group,
			summaryVariable
		});
	}, [ data, group, summaryVariable, variable ] );
	if ( !data ) {
		return <Alert variant="danger">{i18n.t('plotly:data-missing')}</Alert>;
	}
	return ( <Plotly
		editable
		draggable
		id={id}
		fit
		meta={action}
		data={config.data}
		layout={config.layout}
		onShare={onShare}
	/> );
}


// PROPERTIES //

PieChart.defaultProps = {
	group: null,
	summaryVariable: null
};

PieChart.propTypes = {
	data: PropTypes.object.isRequired,
	variable: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]).isRequired,
	group: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]),
	summaryVariable: PropTypes.string
};


// EXPORTS //

/**
* A pie chart component that by default displays the counts of all categories from a chosen variable.
*
* @property {Object} data - object of value arrays
* @property {(string|Factor)} variable - variable to display
* @property {(string|Factor)} group - grouping variable
* @property {string} summaryVariable - optional variable whose sum to display for each `variable` category
*/
export default withPropCheck( PieChart );
