// MAIN //

/**
* Converts a base-64 encoded string to a blob.
*
* @param {string} b64Data - base-64 encoded string
* @param {string} [contentType=''] - content type
* @param {integer} [sliceSize=512] - slice size
* @returns {Blob} created blob
*/
function base64toBlob( b64Data, contentType = '', sliceSize = 512 ) {
	const byteCharacters = atob( b64Data );
	const byteArrays = [];
	for ( let offset = 0; offset < byteCharacters.length; offset += sliceSize ) {
		const slice = byteCharacters.slice( offset, offset + sliceSize );
		const byteNumbers = new Array( slice.length );
		for ( let i=0; i < slice.length; i++ ) {
			byteNumbers[ i ] = slice.charCodeAt( i );
		}
		const byteArray = new Uint8Array( byteNumbers );
		byteArrays.push( byteArray );
	}
	const blob = new Blob( byteArrays, {
		type: contentType
	});
	return blob;
}


// EXPORTS //

export default base64toBlob;
