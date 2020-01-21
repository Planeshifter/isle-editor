// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import tokenize from '@stdlib/nlp/tokenize';
import contains from '@stdlib/assert/contains';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import isStrictEqual from '@stdlib/assert/is-strict-equal';
import isArray from '@stdlib/assert/is-array';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import isEmptyString from '@stdlib/assert/is-empty-string';
import uncapitalize from '@stdlib/string/uncapitalize';
import lowercase from '@stdlib/string/lowercase';
import removeLast from '@stdlib/string/remove-last';
import ndarray from '@stdlib/ndarray/array';
import objectKeys from '@stdlib/utils/keys';
import tabulate from '@stdlib/utils/tabulate';
import indexOf from '@stdlib/utils/index-of';
import floor from '@stdlib/math/base/special/floor';
import max from '@stdlib/math/base/special/max';
import absdiff from '@stdlib/math/base/utils/absolute-difference';
import NINF from '@stdlib/constants/math/float64-ninf';
import Alert from 'react-bootstrap/Alert';
import Table from 'components/table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Modal from 'react-bootstrap/Modal';
import ReactList from 'react-list';
import innerText from 'react-innertext';
import Highlighter from 'react-highlight-words';
import Checkbox from 'components/input/checkbox';
import Plotly from 'components/plotly';
import Switch from 'components/switch';
import WordCloud from 'components/word-cloud';
import SessionContext from 'session/context.js';
import { CAT20 as COLORS } from 'constants/colors';
import Search from './search.js';
import SingleActionModal from './single_action_modal.js';
import FullscreenHeader from './fullscreen_header';
import TextClustering from './text-clustering';
import './fullscreen_action_display.css';


// VARIABLES //

const debug = logger( 'isle:response-visualizer' );
const LINE_HEIGHT = 15;
const TEXT_LINE_HEIGHT = 23;
const RE_NEWLINE = /\r?\n/g;
const UPDATE_THRESHOLD = 5;


// FUNCTIONS //

const wordWrap = ( str ) => {
	const n = floor( ( window.innerWidth * 0.5 ) / ( 16*0.575 ) );
	const RE_LINE_BREAKS = new RegExp(`(?![^\\n]{1,${n}}$)([^\\n]{1,${n}})\\s`, 'g' );
	return str.replace( RE_LINE_BREAKS, '$1\n' );
};

const tabulateValues = ( actions, levels ) => {
	if ( !actions ) {
		return [];
	}
	const table = {};
	for ( let i = 0; i < actions.length; i++ ) {
		const v = actions[ i ];
		if ( isArray( v.value ) ) {
			for ( let j = 0; j < v.value.length; j++ ) {
				const bool = v.value[ j ];
				if ( bool ) {
					const key = levels[ j ];
					if ( !table[ key ] ) {
						table[ key ] = 1;
					} else {
						table[ key ] += 1;
					}
				}
			}
		} else {
			const key = isString( v.value ) ? v.value : levels[ v.value ];
			if ( !table[ key ] ) {
				table[ key ] = 1;
			} else {
				table[ key ] += 1;
			}
		}
	}
	let maxVal = NINF;
	const counts = new Array( levels.length );
	for ( let i = 0; i < levels.length; i++ ) {
		if ( table[ levels[ i ] ] > maxVal ) {
			maxVal = table[ levels[ i ] ];
		}
		counts[ i ] = table[ levels[ i ] ];
	}
	return counts;
};

const generateValueLabel = ({ value, type, levels, rows, cols }) => {
	if ( type === 'factor' ) {
		if ( isArray( value ) ) {
			let str = '';
			value.forEach( ( v, idx ) => {
				if ( v ) {
					if ( str ) {
						str += ', ';
					}
					str += levels[ idx ];
				}
			});
			value = str || 'None';
		} else if ( !isString( value ) ) {
			value = levels[ value ] || 'None';
		}
	}
	else if ( type === 'matches' ) {
		let str = '';
		if ( isArray( value ) ) {
			for ( let i = 0; i < value.length; i++ ) {
				str += value[ i ].a + ' - '+value[ i ].b+'; ';
			}
		}
		value = str || 'None';
	}
	else if ( type === 'matrix' ) {
		let str = '';
		for ( let i = 0; i < rows.length; i++ ) {
			for ( let j = 0; j < cols.length; j++ ) {
				if ( value[ i ][ j ] ) {
					str += rows[ i ] + ' - '+cols[ j ]+'; ';
				}
			}
		}
		value = str || 'None';
	}
	else if ( type === 'tensor' ) {
		let str = '';
		for ( let i = 0; i < rows.length; i++ ) {
			for ( let j = 0; j < cols.length; j++ ) {
				const rv = rows[ i ];
				const cv = cols[ j ];
				str += isString( rv ) && !isEmptyString( rv ) ? rv : i;
				str += '-';
				str += isString( cv ) && !isEmptyString( cv ) ? cv : j;
				str += ': ';
				str += value[ i+':'+j ] + '; ';
			}
		}
		value = str || 'None';
	}
	return value;
};


// MAIN //

class FullscreenActionDisplay extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			filtered: props.actions.slice( 0 ),
			searchwords: [],
			actions: props.actions.slice( 0 ),
			showModal: false,
			modalContent: {},
			clusters: [],
			handleMultipleResponses: 'first',
			removeQuestionWords: true
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		let newState = {};
		const diff = absdiff( nextProps.actions.length, prevState.actions.length );
		if ( diff >= UPDATE_THRESHOLD || nextProps.actions.length === prevState.actions.length - 1 ) {
			newState.filtered = nextProps.actions.slice();
		}
		if ( !isEmptyObject( newState ) ) {
			newState.actions = nextProps.actions.slice();
			newState.clusters = [];
			return newState;
		}
		return null;
	}

	searchFilter = ( value, caseSensitive, exact ) => {
		if ( isStrictEqual( value, '' ) ) {
			this.setState({
				filtered: this.props.actions,
				searchwords: [],
				clusters: []
			});
		} else {
			const newFilter = [];
			if ( !exact ) {
				for ( let i = 0; i < this.props.actions.length; i++ ) {
					const action = this.props.actions[ i ];
					const flags = caseSensitive ? '' : 'i';
					const expr = new RegExp( value, flags );
					const actionValue = generateValueLabel({ value: action.value, ...this.props.data });
					if (
						this.props.showExtended &&
						(
							String( actionValue ).search( expr ) !== -1 ||
							String( action.email ).search( expr ) !== -1 ||
							String( action.name ).search( expr ) !== -1
						)
					) {
						newFilter.push( this.props.actions[ i ] );
					} else if ( String( actionValue ).search( expr ) !== -1 ) {
						newFilter.push( this.props.actions[ i ] );
					}
				}
			} else {
				const flags = caseSensitive ? '' : 'i';
				const expr = new RegExp( '(?:^|[^\\w])' + value + '(?:$|[^\\w])', flags );
				for ( let i = 0; i < this.props.actions.length; i++ ) {
					const action = this.props.actions[ i ];
					const actionValue = generateValueLabel({ value: action.value, ...this.props.data });
					if (
						this.props.showExtended &&
						(
							expr.test( actionValue ) ||
							expr.test( action.email ) ||
							expr.test( action.name )
						)
					) {
						newFilter.push( action );
					} else if ( expr.test( actionValue ) ) {
						newFilter.push( action );
					}
				}
			}
			this.setState({
				filtered: newFilter,
				searchwords: [ value ],
				clusters: []
			});
		}
	}

	itemSizeGetter = ( index ) => {
		let lines = 2.0 * LINE_HEIGHT;
		const action = this.state.actions[ index ];
		if ( !action ) {
			return 0;
		}
		const value = wordWrap( String( action.value ) );
		const noLines = ( value.match( RE_NEWLINE ) || '' ).length + 1;
		lines += noLines * TEXT_LINE_HEIGHT;
		debug( `Element at position ${index} is estimated to have ${noLines} lines.` );
		return lines;
	}

	showModalFactory = ( elem ) => {
		return () => {
			debug( 'Show model for prominently displaying a single answer...' );
			this.setState({
				modalContent: elem,
				showModal: true
			});
		};
	}

	hideModal = () => {
		this.setState({
			showModal: false
		});
	}

	getActions = () => {
		let actions;
		const seenEmails = new Set();
		if ( this.state.handleMultipleResponses === 'last' ) {
			actions = this.props.actions.slice();
			actions.sort( ( a, b ) => b.absoluteTime - a.absoluteTime );
			actions = actions.filter( x => {
				if ( !seenEmails.has( x.email ) ) {
					seenEmails.add( x.email );
					return true;
				}
				return false;
			});
		}
		else if ( this.state.handleMultipleResponses === 'first' ) {
			actions = this.props.actions.slice();
			actions.sort( ( a, b ) => a.absoluteTime - b.absoluteTime );
			actions = actions.filter( x => {
				if ( !seenEmails.has( x.email ) ) {
					seenEmails.add( x.email );
					return true;
				}
				return false;
			});
		}
		else {
			actions = this.props.actions;
		}
		return actions;
	}

	renderWordCloud() {
		debug( 'Rendering word cloud...' );
		const actions = this.getActions();
		const texts = actions.map( x => x.value );
		let stopwords = [];
		if (
			this.state.removeQuestionWords &&
			isString( this.props.data.question )
		) {
			stopwords = tokenize( this.props.data.question );
		}
		return (
			<Fragment>
				<WordCloud
					data={texts}
					height={0.65 * window.innerHeight}
					width={0.45*window.innerWidth}
					rotate={0}
					triggerRender={true}
					onClick={( d ) => {
						if ( contains( this.state.searchwords, d.text ) ) {
							this.searchFilter( '' );
						} else {
							this.searchFilter( d.text );
						}
					}}
					style={{
						marginTop: 20
					}}
					stopwords={stopwords}
				/>
				<TextClustering
					texts={this.state.filtered.map( x => x.value )}
					actionLabel={this.props.actionLabel}
					onClusters={( data ) => {
						debug( 'Received clusters...' );
						this.setState({
							clusters: data
						});
					}}
				/>
				<Checkbox
					size="small" inline legend="Remove question words"
					defaultValue={this.state.removeQuestionWords}
					onChange={( value ) => {
						this.setState({ removeQuestionWords: value });
					}}
					style={{
						right: '20px',
						bottom: '35px',
						position: 'absolute'
					}}
				/>
			</Fragment>
		);
	}

	renderBarchart() {
		const actions = this.getActions();
		let maxLength = 0;
		let levels = this.props.data.levels.map( ( x, i ) => {
			let out = isString( x ) ? x : innerText( x );
			if ( !out ) {
				out = `Choice ${i+1}`;
			}
			if ( out.length > maxLength ) {
				maxLength = out.length;
			}
			return out;
		});
		let leftMargin = max( 250, maxLength * 7.5 );
		let counts = tabulateValues( actions, levels );
		if ( levels.length > 7 ) {
			// Drop empty labels in case of many levels for readability of plot:
			levels = levels.filter( ( _, idx ) => counts[ idx ] > 0 );
			counts = counts.filter( val => val > 0 );
		}
		return (
			<div style={{ height: 0.75 * window.innerHeight }}>
				<Plotly
					data={[
						{
							y: levels,
							x: counts,
							type: 'bar',
							orientation: 'h'
						}
					]}
					fit
					layout={{
						xaxis: {
							title: 'Count'
						},
						yaxis: {
							title: 'Value',
							categoryorder: 'array',
							categoryarray: levels
						},
						margin: {
							l: leftMargin
						}
					}}
				/>
			</div>
		);
	}

	renderSankeyDiagram() {
		const { left, right } = this.props.data;
		const labels = left.concat( right );
		const actions = this.getActions();
		const paths = {};
		for ( let i = 0; i < actions.length; i++ ) {
			const arr = actions[ i ].value;
			if ( isArray( arr ) ) {
				for ( let j = 0; j < arr.length; j++ ) {
					const { a, b } = arr[ j ];
					if ( paths[ a+'-'+b ] ) {
						paths[ a+'-'+b ] += 1;
					} else {
						paths[ a+'-'+b ] = 1;
					}
				}
			}
		}
		const keys = objectKeys( paths );
		const source = new Array( keys.length );
		const target = new Array( keys.length );
		const value = new Array( keys.length );
		for ( let i = 0; i < keys.length; i++ ) {
			const elems = keys[ i ].split( '-' );
			source[ i ] = indexOf( left, elems[ 0 ] );
			target[ i ] = left.length + indexOf( right, elems[ 1 ] );
			value[ i ] = paths[ keys[ i ] ];
		}
		return (
			<div style={{ height: 0.75 * window.innerHeight }}>
				<Plotly
					data={[{
						type: 'sankey',
						orientation: 'h',
						node: {
							pad: 15,
							thickness: 30,
							line: {
								color: 'black',
								width: 0.5
							},
							label: labels,
							color: 'blue'
						},
						link: {
							source,
							target,
							value
						}
					}]}
					fit
					layout={{
						fontSize: 10
					}}
				/>
			</div>
		);
	}

	renderHistogram() {
		const actions = this.getActions();
		const values = actions.map( x => x.value );
		let freqs = tabulate( values );
		freqs = freqs.sort( ( a, b ) => {
			return b[ 2 ] - a[ 2 ];
		});
		return (
			<div>
				<div className="scrollable-table" style={{ height: 0.3 * window.innerHeight }} >
					<Table>
						<thead>
							<tr>
								<th>Value</th>
								<th>Absolute</th>
								<th>Relative</th>
							</tr>
						</thead>
						<tbody >
							{freqs.map( ( val, idx ) => {
								return ( <tr key={idx} >
									<td>{val[ 0 ]}</td>
									<td>{val[ 1 ]}</td>
									<td>{val[ 2 ].toFixed( 3 )}</td>
								</tr> );
							})}
						</tbody>
					</Table>
				</div>
				<div style={{ height: 0.4 * window.innerHeight }}>
					<Plotly
						data={[
							{
								x: values,
								type: 'histogram',
								name: 'histogram'
							}
						]}
						fit
						layout={{
							xaxis: {
								title: 'Value'
							},
							yaxis: {
								title: 'Count'
							}
						}}
					/>
				</div>
			</div>
		);
	}

	renderTable() {
		const nRows = this.props.data.rows.length;
		const nCols = this.props.data.cols.length;
		const counts = ndarray({
			'shape': [ nRows, nCols ],
			'dtype': 'int32'
		});
		const actions = this.getActions();
		for ( let i = 0; i < actions.length; i++ ) {
			const elem = actions[ i ].value;
			for ( let j = 0; j < nRows; j++ ) {
				for ( let k = 0; k < nCols; k++ ) {
					if ( elem[ j ][ k ] === true ) {
						counts.set( j, k, Number( counts.get( j, k ) ) + 1 );
					}
				}
			}
		}
		const table = <table className="table table-bordered" >
			<thead>
				<th></th>
				{this.props.data.cols.map( ( c, i ) => <th key={i} >{c}</th> )}
			</thead>
			<tbody>
				{this.props.data.rows.map( ( r, idx ) => {
					const row = new Array( nCols+1 );
					row[ 0 ] = <th>{r}</th>;
					for ( let i = 0; i < nCols; i++ ) {
						row.push( <td>{counts.get( idx, i )}</td> );
					}
					return <tr key={idx}>{row}</tr>;
				})}
			</tbody>
		</table>;
		return (
			<div style={{ height: 0.75 * window.innerHeight }} >
				{table}
			</div>
		);
	}

	renderNestedTable = () => {
		return null;
	}

	renderListGroupItem = ( index, key ) => {
		debug( `Rendering item at position ${index}...` );
		const elem = this.state.filtered[ index ];
		const value = generateValueLabel({ value: elem.value, ...this.props.data });
		const higlighter = isString( value ) ? <Highlighter
			className="response-visualizer-text"
			searchWords={this.state.searchwords}
			autoEscape={true}
			textToHighlight={wordWrap( String( value ) )}
		/> : value;
		const name = elem.name;
		const style = {
			padding: '0.75rem'
		};
		if ( this.state.clusters.length > 0 ) {
			const opacity = 0.1;
			const col = COLORS[ this.state.clusters[ index ] % 20 ];
			let rgba = 'rgba(' + parseInt( col.substring( 1, 3 ), 16 ) + ','+ parseInt( col.substring( 3, 5 ), 16 );
			rgba += ',' + parseInt( col.substring( 5, 7 ), 16 ) + ',' + opacity + ')';
			style.background = rgba;
			style.border = '1px solid '+col;
		}
		const date = new Date( elem.absoluteTime );
		return ( <ListGroupItem key={key} style={style}>
			{ this.props.showExtended ?
				<span style={{ textAlign: 'left' }}>
					<b>{name} ({elem.email}) ({date.toLocaleTimeString() + ' ' + date.toLocaleDateString()}):</b>
					<br />
					{higlighter}
				</span> :
				higlighter
			}
			<ButtonGroup className="action-display-button-group">
				<Button
					variant="outline-secondary"
					size="sm"
					onClick={this.showModalFactory({ ...elem, value: value })}
				>
					<span className="fa fa-search-plus" />
				</Button>
			{ this.props.showExtended ?
					<Button
						variant="outline-danger"
						size="sm"
						onClick={this.props.deleteFactory( index )}
					>
						<span className="fa fa-trash" />
					</Button> :
				null
			}
			</ButtonGroup>
		</ListGroupItem> );
	}

	renderRanges = () => {
		const halfWidth = [];
		const values = [];
		const mids = [];
		const inds = [];
		const actions = this.getActions();
		for ( let i = 0; i < actions.length; i++ ) {
			values.push( JSON.parse( actions[ i ].value ) );

			// Value is an array of length 2:
			mids.push( 0.5 * ( values[ i ][ 0 ] + values[ i ][ 1 ] ) );
			halfWidth.push( 0.5 * ( values[ i ][ 1 ] - values[ i ][ 0 ] ) );
			inds.push( i );
		}
		return (
			<div style={{ height: 0.75 * window.innerHeight }}>
				<Plotly
					data={[
						{
							y: mids,
							x: inds,
							text: inds.map( i => {
								return `[${values[ i ][ 0 ]}, ${values[ i ][ 1 ]}]`;
							}),
							error_y: {
								type: 'data',
								array: halfWidth,
								visible: true
							},
							type: 'scatter',
							mode: 'markers',
							orientation: 'h'
						}
					]}
					fit
					layout={{
						xaxis: {
							showticklabels: false,
							showline: false
						},
						yaxis: {
							title: 'Value'
						}
					}}
				/>
			</div>
		);
	}

	renderPlot() {
		let plot;
		if ( this.props.actions.length === 0 ) {
			return <Alert variant="warning" >No data available (yet) to be visualized</Alert>;
		}
		switch ( this.props.data.type ) {
			case 'text':
			default:
				plot = this.renderWordCloud();
				break;
			case 'factor':
				plot = this.renderBarchart();
				break;
			case 'number':
				plot = this.renderHistogram();
				break;
			case 'matrix':
				plot = this.renderTable();
				break;
			case 'tensor':
				plot = this.renderNestedTable();
				break;
			case 'matches':
				plot = this.renderSankeyDiagram();
				break;
			case 'range':
				plot = this.renderRanges();
				break;
		}
		const label = removeLast( lowercase( this.props.actionLabel ) );
		return ( <div>
			{plot}
			<Switch style={{ zIndex: 2000 }} onChange={( idx ) => {
				let type;
				switch ( idx ) {
					case 0:
						type = 'first';
						break;
					case 1:
						type = 'all';
						break;
					case 2:
						type = 'last';
						break;
				}
				this.setState({ handleMultipleResponses: type });
			}}>
				<i><b>Only</b> include first {label} for any student.</i>
				<i>Include <b>all</b> {label}s for any student.</i>
				<i><b>Only</b> include latest {label} for any student.</i>
			</Switch>
		</div> );
	}

	render() {
		return ( <Fragment>
			<Modal
				show={true}
				onHide={this.props.toggleActions}
				dialogClassName="modal-100w"
			>
				<FullscreenHeader
					componentID={this.props.componentID}
					actionLabel={this.props.actionLabel}
					onPeriodChange={this.props.onPeriodChange}
					cohorts={this.context.cohorts}
					selectedCohort={this.props.selectedCohort}
					onCohortChange={this.props.onCohortChange}
				/>
				<Modal.Body style={{ minHeight: 0.75 * window.innerHeight, padding: 0 }} >
					<Row>
						<Col md={6}>
							{ this.state.filtered.length > 0 ?
								<div style={{ marginLeft: 0, overflowY: 'scroll', height: 0.75 * window.innerHeight }}>
									<ReactList
										initialIndex={0}
										itemRenderer={this.renderListGroupItem}
										length={this.state.filtered.length}
										type="variable"
										pageSize={50}
										minSize={10}
										itemSizeGetter={this.itemSizeGetter}
									/>
								</div> :
								<Card body className="bg-light">
									<h2>There are no data matching the selected parameters.</h2>
								</Card>
							}
						</Col>
						<Col md={6} style={{ overflowY: 'auto', maxWidth: '49.2%' }}>
							{this.renderPlot()}
						</Col>
					</Row>
				</Modal.Body>
				<Modal.Footer>
					<h4>
						<Badge variant="secondary">
							{`# of displayed ${uncapitalize( this.props.actionLabel )}: ${this.state.filtered.length}`}
						</Badge>
					</h4>
					<Search
						onClick={this.searchFilter}
						extended={this.props.showExtended}
					/>
					<Button variant="secondary" onClick={this.props.toggleExtended}>{ this.props.showExtended ? 'Hide Extended' : 'Show Extended' }</Button>
					<Button onClick={this.props.toggleActions}>Close</Button>
				</Modal.Footer>
			</Modal>
			<SingleActionModal show={this.state.showModal} onHide={this.hideModal} modalContent={this.state.modalContent} actionLabel={this.props.actionLabel} showExtended={this.state.showExtended} />
		</Fragment> );
	}
}


// PROPERTIES //

FullscreenActionDisplay.propTypes = {
	actions: PropTypes.array.isRequired,
	actionLabel: PropTypes.string,
	data: PropTypes.object.isRequired,
	componentID: PropTypes.string.isRequired,
	deleteFactory: PropTypes.func.isRequired,
	onPeriodChange: PropTypes.func.isRequired,
	showExtended: PropTypes.bool.isRequired,
	toggleActions: PropTypes.func.isRequired,
	toggleExtended: PropTypes.func.isRequired
};

FullscreenActionDisplay.defaultProps = {
	actionLabel: 'Responses'
};

FullscreenActionDisplay.contextType = SessionContext;


// EXPORTS //


export default FullscreenActionDisplay;
