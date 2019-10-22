/**
* Adapted from pull request #39 for codemirror-spell-checker.
*
* @link https://raw.githubusercontent.com/sparksuite/codemirror-spell-checker
* @license MIT
*/

// MODULES //

import Typo from 'typo-js';
import contains from '@stdlib/assert/contains';
import isFunction from '@stdlib/assert/is-function';
import isCapitalized from '@stdlib/assert/is-capitalized';
import isDigitString from '@stdlib/assert/is-digit-string';
import logger from 'debug';


// VARIABLES //

const debug = logger( 'isle:markdown-editor:spell-checker' );
const RX_WORD = '!\'"#$%&()*+,-./:;<=>?@[\\]^_`{|}~ ';
const AFF_URL_EN = 'https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.aff';
const DIC_URL_EN = 'https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.dic';
const AFF_URL_DE = 'https://unpkg.com/dictionary-de@2.0.0/index.aff';
const DIC_URL_DE = 'https://unpkg.com/dictionary-de@2.0.0/index.dic';
const AFF_URL_FR = 'https://unpkg.com/dictionary-fr@2.0.0/index.aff';
const DIC_URL_FR = 'https://unpkg.com/dictionary-fr@2.0.0/index.dic';
const AFF_URL_IT = 'https://unpkg.com/dictionary-it@2.0.0/index.aff';
const DIC_URL_IT = 'https://unpkg.com/dictionary-it@2.0.0/index.dic';
const AFF_URL_PT = 'https://unpkg.com/dictionary-pt@2.0.0/index.aff';
const DIC_URL_PT = 'https://unpkg.com/dictionary-pt@2.0.0/index.dic';
const AFF_URL_SV = 'https://unpkg.com/dictionary-sv@2.0.0/index.aff';
const DIC_URL_SV = 'https://unpkg.com/dictionary-sv@2.0.0/index.dic';


// MAIN //

function SpellChecker( options ) {
	// Initialize
	options = options || {};
	const language = options.language;

	let AFF_URL;
	let DIC_URL;
	switch ( language ) {
	case 'en-US':
		AFF_URL = AFF_URL_EN;
		DIC_URL = DIC_URL_EN;
	break;
	case 'de':
		AFF_URL = AFF_URL_DE;
		DIC_URL = DIC_URL_DE;
	break;
	case 'fr':
		AFF_URL = AFF_URL_FR;
		DIC_URL = DIC_URL_FR;
	break;
	case 'it':
		AFF_URL = AFF_URL_IT;
		DIC_URL = DIC_URL_IT;
	break;
	case 'pt':
		AFF_URL = AFF_URL_PT;
		DIC_URL = DIC_URL_PT;
	break;
	case 'sv':
		AFF_URL = AFF_URL_SV;
		DIC_URL = DIC_URL_SV;
	break;
	}

	if ( !isFunction( options.codeMirrorInstance )|| !isFunction( options.codeMirrorInstance.defineMode ) ) {
		throw new TypeError( 'You must provide an instance of CodeMirror via the option `codeMirrorInstance`' );
	}

	// Define the new mode
	options.codeMirrorInstance.defineMode( 'spell-checker', function onConfig( config ) {
		// Load AFF/DIC data
		if ( !SpellChecker.affLoading ) {
			SpellChecker.affLoading = true;
			const xhrAFF = new XMLHttpRequest();
			xhrAFF.open('GET', AFF_URL, true);
			xhrAFF.onload = function onLoad() {
				if ( xhrAFF.readyState === 4 && xhrAFF.status === 200) {
					SpellChecker.affData = xhrAFF.responseText;
					SpellChecker.numLoaded++;

					if ( SpellChecker.numLoaded === 2 ) {
						SpellChecker.typo = new Typo('en_US', SpellChecker.affData, SpellChecker.dicData, {
							platform: 'any'
						});
					}
				}
			};
			xhrAFF.send( null );
		}

		if ( !SpellChecker.dicLoading ) {
			SpellChecker.dicLoading = true;
			const xhrDIC = new XMLHttpRequest();
			xhrDIC.open('GET', DIC_URL, true);
			xhrDIC.onload = function onLoad() {
				if ( xhrDIC.readyState === 4 && xhrDIC.status === 200 ) {
					SpellChecker.dicData = xhrDIC.responseText;
					SpellChecker.numLoaded++;

					if ( SpellChecker.numLoaded === 2 ) {
						SpellChecker.typo = new Typo( 'en_US', SpellChecker.affData, SpellChecker.dicData, {
							platform: 'any'
						});
					}
				}
			};
			xhrDIC.send(null);
		}

		// Create the overlay and such
		const overlay = {
			token: function process( stream ) {
				let ch = stream.peek();
				let word = '';
				debug( 'Process character: '+ch );
				if ( ch && contains( RX_WORD, ch ) ) {
					stream.next();
					return null;
				}
				ch = stream.peek();
				while (
					ch &&
					!contains( RX_WORD, ch )
				) {
					word += ch;
					stream.next();
					ch = stream.peek();
				}
				// Do not flag digits:
				if ( isDigitString( word ) ) {
					return null;
				}
				// Assume that unknown capitalized words inside a sentence refer to proper nouns...
				if (
					language === 'en-US' &&
					isCapitalized( word ) &&
					SpellChecker.typo &&
					SpellChecker.typo.suggest( word ).length === 0
				) {
					return null;
				}
				if (
					SpellChecker.typo &&
					!SpellChecker.typo.check( word )
				) {
					return 'spell-error'; // CSS class: cm-spell-error
				}
				return null;
			}
		};

		const mode = options.codeMirrorInstance.getMode(
			config, config.backdrop || 'text/plain'
		);
		return options.codeMirrorInstance.overlayMode( mode, overlay, true );
	});
}


// Initialize data globally to reduce memory consumption
SpellChecker.numLoaded = 0;
SpellChecker.affLoading = false;
SpellChecker.dicLoading = false;
SpellChecker.affData = '';
SpellChecker.dicData = '';


// EXPORTS //

export default SpellChecker;
