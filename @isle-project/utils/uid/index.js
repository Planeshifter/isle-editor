/**
* Copyright (C) 2020-present The ISLE Authors
*
* The isle-dashboard program is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as
* published by the Free Software Foundation, either version 3 of the
* License, or (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

// MODULES //

import { isPrimitive as isString } from '@stdlib/assert/is-string';


// MAIN //

/**
* Returns a function for generating unique identifiers of a specified type.
*
* ## Notes
*
* -   IDs are generated by incrementing an internal counter
*
* @param {string} prefix - type prefix to prepend to generated id
* @returns {Function} function which returns identifiers
*/
function generateUID( prefix ) {
	let counter = 1;
	const map = new WeakMap();

	/**
	* Returns an identifier.
	*
	* @param {Object} item - props of component for which to generate identifier
	* @returns {string} identifier
	*/
	const uid = ( item ) => {
		if ( isString( item ) ) {
			return `${prefix}-${item}`;
		}
		if ( !map.has( item ) ) {
			map.set( item, `${prefix}-${counter++}` );
			return uid( item );
		}
		return map.get( item );
	};
	return uid;
}


// EXPORTS //

export default generateUID;
