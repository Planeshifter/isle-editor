// MODULES //

import React, { Component } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import papply from '@stdlib/utils/papply';
import absdiff from '@stdlib/math/base/utils/absolute-difference';
import isArray from '@stdlib/assert/is-array';
import generateUID from 'utils/uid';
import VoiceControl from 'components/voice-control';
import SessionContext from 'session/context.js';
import { PAGES_FIRST_PAGE, PAGES_NEXT_PAGE, PAGES_PREVIOUS_PAGE, PAGES_LAST_PAGE, PAGES_JUMP_PAGE } from 'constants/actions.js';
import VOICE_COMMANDS from './voice_commands.json';
import './pages.css';


// VARIABLES //

const uid = generateUID( 'pages' );


// MAIN //

/**
* An ISLE pagination component that allows the user to step through a sequence of pages.
*
* @property {string} title - displayed title of the pages container
* @property {string} size - size of the pagination buttons (one of `default`, `lg`, `large`, `sm`, `small`, `xs`, or `xsmall`)
* @property {number} height - the maximum height of the container. If an embedded page is taller, a vertical scrollbar is added
* @property {number} activePage - active page
* @property {boolean} disabled - controls whether the navigation bar is active or not
* @property {strings} voiceID - voice control identifier
* @property {Object} style - CSS inline styles
* @property {Function} onSelect - Function invoked when active change is changed. Receives the new active page index as a sole parameter
*/
class Pages extends Component {
	constructor( props ) {
		super( props );
		this.id = props.id || uid( props );
		this.state = {
			activePage: props.activePage,
			rawActivePage: props.activePage
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if ( nextProps.activePage !== prevState.rawActivePage ) {
			let newState = {};
			newState.activePage = nextProps.activePage;
			newState.rawActivePage = nextProps.activePage;
			return newState;
		}
		return null;
	}

	log = ( type, value ) => {
		const session = this.context;
		if ( session && session.log ) {
			session.log({
				id: this.id,
				type: type,
				value: value
			});
		}
	}

	firstPage = () => {
		this.props.onSelect( 1 );
		if ( this.wrapper ) {
			this.wrapper.scrollTop = 0;
		}
		this.log( PAGES_FIRST_PAGE, 0 );
		this.setState({
			activePage: 1
		});
	}

	nextPage = () => {
		const nPages = this.props.children.length || 1;
		if ( this.state.activePage === nPages ) {
			return this.props.onSelect( this.state.activePage );
		}
		this.props.onSelect( this.state.activePage + 1 );
		if ( this.wrapper ) {
			this.wrapper.scrollTop = 0;
		}
		this.log( PAGES_NEXT_PAGE, this.state.activePage + 1 );
		this.setState({
			activePage: this.state.activePage + 1
		});
	}

	prevPage = () => {
		if ( this.state.activePage === 1 ) {
			return this.props.onSelect( this.state.activePage );
		}
		this.props.onSelect( this.state.activePage - 1 );
		if ( this.wrapper ) {
			this.wrapper.scrollTop = 0;
		}
		this.log( PAGES_PREVIOUS_PAGE, this.state.activePage - 1 );
		this.setState({
			activePage: this.state.activePage - 1
		});
	}

	lastPage = () => {
		this.props.onSelect( this.props.children.length );
		if ( this.wrapper ) {
			this.wrapper.scrollTop = 0;
		}
		this.log( PAGES_LAST_PAGE, this.props.children.length );
		this.setState({
			activePage: this.props.children.length
		});
	}

	jumpTo = ( page ) => {
		const nPages = this.props.children.length || 1;
		if ( page < 1 || page > nPages ) {
			return this.props.onSelect( this.state.activePage );
		}
		this.props.onSelect( page );
		if ( this.wrapper ) {
			this.wrapper.scrollTop = 0;
		}
		this.log( PAGES_JUMP_PAGE, page );
		this.setState({
			activePage: page
		});
	}

	render() {
		if ( !this.props.children ) {
			return null;
		}
		const nChildren = this.props.children.length;
		const header = <Card.Header>
			<h3>{this.props.title}</h3>
		</Card.Header>;
		const items = [];
		if ( nChildren <= 6 ) {
			for ( let i = 1; i <= nChildren; i++) {
				items.push(
					<Pagination.Item
						disabled={this.props.disabled}
						key={i}
						active={i === this.state.activePage}
						onClick={papply( this.jumpTo, i )}
					>
						{i}
					</Pagination.Item>
				);
			}
		} else {
			let cutoff = 2;
			if ( this.state.activePage < 3 ) {
				cutoff += 3 - this.state.activePage;
			}
			else if ( this.state.activePage > nChildren - 2 ) {
				cutoff += 2 - ( nChildren - this.state.activePage );
			}
			for ( let i = 1; i <= nChildren; i++) {
				if ( i !== 1 && i !== nChildren ) {
					if ( absdiff( i, this.state.activePage ) > cutoff ) {
						continue;
					}
					if ( absdiff( i, this.state.activePage ) === cutoff ) {
						items.push( <Pagination.Ellipsis disabled={this.props.disabled} key={i} /> );
						continue;
					}
				}
				items.push(
					<Pagination.Item
						key={i}
						disabled={this.props.disabled}
						active={i === this.state.activePage}
						onClick={papply( this.jumpTo, i )}
					>
						{i}
					</Pagination.Item>
				);
			}
		}
		return (
			<Card
				className="pages"
				id={this.id}
				style={this.props.style}
			>
				{ this.props.title ? header : null }
				<VoiceControl reference={this} id={this.props.voiceID} commands={VOICE_COMMANDS} />
				<Pagination className="my-pagination"
					size={this.props.size}
					items={this.props.children.length || 1}
				>
					<Pagination.Prev disabled={this.props.disabled || ( this.state.activePage === 1 )} key="prev" onClick={this.prevPage} />
					{items}
					<Pagination.Next disabled={this.props.disabled || ( this.state.activePage === this.props.children.length )} key="next" onClick={this.nextPage} />
				</Pagination>
				<div className="page-children-wrapper"
					ref={( div ) => {
						this.wrapper = div;
					}}
					style={{
						height: this.props.height,
						...this.props.style
					}}
				>
					{ isArray( this.props.children ) ? this.props.children.map( ( elem, idx ) => {
						return ( <div
							className={this.state.activePage-1 !== idx ? 'invisible-page' : 'visible-page'}
							key={idx}
						>
							{elem}
						</div> );
					}) : this.props.children }
				</div>
			</Card>
		);
	}
}


// PROPERTIES //

Pages.propTypes = {
	activePage: PropTypes.number,
	disabled: PropTypes.bool,
	title: PropTypes.string,
	size: PropTypes.oneOf([
		'default',
		'lg',
		'large',
		'sm',
		'small'
	]),
	height: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	voiceID: PropTypes.string,
	style: PropTypes.object,
	onSelect: PropTypes.func
};

Pages.defaultProps = {
	activePage: 1,
	disabled: false,
	title: '',
	size: 'default',
	height: null,
	voiceID: null,
	style: {},
	onSelect() {}
};

Pages.contextType = SessionContext;


// EXPORTS //

export default Pages;
