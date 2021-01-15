// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import capitalize from '@stdlib/string/capitalize';
import VoiceInput from '@isle-project/components/input/voice';
import SessionContext from '@isle-project/session/context.js';
import { addResources } from '@isle-project/locales';
import newslist from './list.json';
import EXCEPTIONS from './exceptions.json';
import './styles.css';


// VARIABLES //

const debug = logger( 'isle:news' );
addResources( 'News' );


// FUNCTIONS //

function exceptions( name ) {
	const x = EXCEPTIONS[ name ];
	if ( x ) {
		return x;
	}
	return capitalize( name );
}


// MAIN //

/**
* The **News** component scans the public **News API** (consisting of 71 international  newspapers) and displays the latest 10 articles of the given newspaper. There are two ways to enter a source: one by typing into the search field and submitting via the ENTER button, the second via voice.
*
* @property {boolean} invisible - indicates whether to show the input fields or rely solely on voice control to be triggered
* @property {string} key - authentication key for the News API
* @property {string} language - language identifier
* @property {string} voiceID - voice control identifier
* @property {Function} onArticles - callback function invoked with an array of article objects once they are received
*/
class News extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			articles: null,
			visible: null
		};
	}

	componentDidMount() {
		this.list = newslist;
		if ( this.props.voiceID ) {
			this.register();
		}
	}

	register = () => {
		const session = this.context;
		session.speechInterface.register({
			name: this.props.voiceID,
			ref: this,
			commands: [
				{
					command: 'trigger',
					trigger: [ 'news', 'articles' ],
					text: true
				},
				{
					command: 'hide',
					trigger: [ 'close' ]
				}
			]
		});
	}

	displayArticles = ( data ) => {
		this.props.onArticles( data );
		this.setState({
			visible: true,
			articles: data
		});
	}

	getArticles( source ) {
		const base = 'https://newsapi.org/v1/articles?source=';
		const type = '&sortBy=latest&apiKey=';
		const url = base + source + type + this.props.key;
		fetch( url ).then( res => res.json() )
			.then( data => {
				if ( data.articles ) {
					this.displayArticles( data.articles );
				}
			})
			.catch( err => {
				this.addNotification({
					title: 'Couldn\'t retrieve data.',
					message: err.message,
					position: 'tr',
					level: 'failure'
				});
			});
	}

	find = ( name ) => {
		name = name.replace( 'the ', '' );
		name = exceptions( name );

		let result = null;
		for ( let i = 0; i < newslist.length; i++ ) {
			const item = newslist[ i ].title;
			if ( item.search( name ) !== -1 ) {
				result = newslist[ i ].trig;
			}
		}
		if ( result ) {
			this.getArticles( result );
		}
	}

	trigger = ( value ) => {
		debug( 'News component is externally triggered...' );
		let marker = 'in';
		switch ( this.props.language ) {
		case 'en-US':
			marker = 'in';
			break;
		case 'de-DE':
			marker = 'in';
			break;
		case 'fr-FR':
			marker = 'dans';
			break;
		default:
			marker = 'in';
			break;
		}
		let x = value.search( marker );
		if ( x !== -1 ){
			x += ( marker.length +1 );
			const text = value.substring( x, value.length );
			this.find( text );
		}
	}

	hide = () => {
		this.setState({
			visible: null
		});
	}

	getDate( date ) {
		return ( new Date( date ).toLocaleString( this.props.language ) );
	}

	getArticle( item, id ) {
		let author = item.author;
		if ( author === 'null' ) {
			author = '';
		}
		const date = this.getDate( item.publishedAt );
		return (
			<div className="article">
				<div className="article-author">{author}</div>
				<div className="article-title">{item.title}</div>
				<div className="image"><img src={item.urlToImage} alt="Article Preview" /></div>
				<div className="article-description">{item.description}</div>
				<div className="article-source">
					<a href={item.url} >{date}</a>
				</div>
			</div>
		);
	}

	articles() {
		if ( !this.state.articles ) {
			return null;
		}
		const list = [];
		for ( let i = 0; i < this.state.articles.length; i++ ) {
			const item = this.state.articles[ i ];
			list.push(
				this.getArticle( item, i )
			);
		}
		return list;
	}

	renderArticles() {
		if ( !this.state.visible ) {
			return null;
		}
		return (
			<Modal.Body className="articles">
				{this.articles()}
			</Modal.Body>
		);
	}

	render() {
		const { t } = this.props;
		return (
			<Modal
				show={this.state.visible || !this.props.invisible}
				id={this.props.id}
				className="article-container"
				backdrop={false}
				enforceFocus={false}
			>
				<Modal.Header>
					<span className="article-header">{t('news')}</span>
					{ !this.props.invisible ? <VoiceInput
						placeholder={this.props.t('pick-newspaper')}
						style={{ float: 'left', width: '45%', marginTop: 10 }}
						language={this.props.language}
						onSubmit={this.find}
						onFinalText={this.trigger}
					/> : null }
					{ this.state.articles ? <Button onClick={this.hide} className="articles-exit">{t('clear')}</Button> : null }
				</Modal.Header>
				{this.renderArticles()}
			</Modal>
		);
	}
}


// PROPERTIES //

News.defaultProps = {
	language: 'en-US',
	invisible: false,
	key: '2987fd19bd374249979c4e38e40ef8b8',
	voiceID: null,
	onArticles() {}
};

News.propTypes = {
	invisible: PropTypes.bool,
	key: PropTypes.string,
	language: PropTypes.string,
	voiceID: PropTypes.string,
	onArticles: PropTypes.func
};

News.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'News' )( News );
