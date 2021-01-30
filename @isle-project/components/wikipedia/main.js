// MODULES //

import React, { useCallback, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import VoiceInput from '@isle-project/components/input/voice';
import SessionContext from '@isle-project/session/context.js';
import { i18n, addResources } from '@isle-project/locales';
import { WIKIPEDIA_SEARCH } from '@isle-project/constants/actions.js';
import './wikipedia.css';


// VARIABLES //

addResources( 'Wikipedia' );


// FUNCTIONS //

function extractTopic( value ) {
	const marker = i18n.t('Wikipedia:about' );
	const x = value.search( marker );
	if ( x !== -1 ){
		x += ( marker.length +1 );
		return value.substring( x, value.length );
	}
	return value;
}


// MAIN //

/**
* The **Wikipedia** component scans the **Wikipedia** and returns an article if anything valid is found under the entered search term.
*
* @property {string} defaultArticle - default article to display
* @property {Object} style - CSS inline styles
*/
const Wikipedia = ({ defaultArticle, style }) => {
	const [ text, setText ] = useState( '' );
	const [ response, setResponse ] = useState( '' );
	const { t } = useTranslation( 'Wikipedia' );
	const session = useContext( SessionContext );

	const getResult = useCallback( ( text ) => {
		session.log({
			id: 'wikipedia',
			type: WIKIPEDIA_SEARCH,
			value: text
		});
		text = extractTopic( text );
		text = text.replace( ' ', '_' );
		text = 'https://' + i18n.language + '.wikipedia.org/wiki/' + text;
		setResponse( text );
	}, [ session ] );

	useEffect(() => {
		if ( isString( defaultArticle ) ) {
			getResult( defaultArticle );
		}
	}, [ defaultArticle, getResult ] );

	return (
		<Card className="wikipedia" style={style} >
			<Card.Header>
				<Card.Title as="h3">
					{t('browse-wikipedia')}
				</Card.Title>
				{ isString( defaultArticle ) ? <Button
					className="wikipedia-reset-button"
					variant="secondary"
					onClick={() => {
						getResult( defaultArticle );
					}}
				>{t('reset')}</Button> : null }
			</Card.Header>
			<Card.Body>
				<VoiceInput
					className="wikipedia-voice-input"
					language={i18n.language}
					onChange={setText}
					onSubmit={getResult}
					onFinalText={getResult}
					placeholder={t('enter-text-and-click-globe')}
				/>
				<button
					onClick={() => {
						getResult( text );
					}}
					className="wikipedia-logo"
				>
				</button>
				<div className="wikipedia-separator"></div>
				{ response ? <div className="wikipedia-result" >
					<iframe
						title={t('wikipedia-page')}
						src={response}
						width="100%"
						height={600}
					/>
				</div> : null }
			</Card.Body>
		</Card>
	);
};


// PROPERTIES //

Wikipedia.defaultProps = {
	defaultArticle: null,
	style: {}
};

Wikipedia.propTypes = {
	defaultArticle: PropTypes.string,
	style: PropTypes.object
};


// EXPORTS //

export default Wikipedia;
