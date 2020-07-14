/* eslint-disable max-lines */

// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropdownItem from 'react-bootstrap/DropdownItem';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tooltip from 'react-bootstrap/Tooltip';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import isNumberArray from '@stdlib/assert/is-number-array';
import isObjectArray from '@stdlib/assert/is-object-array';
import isObject from '@stdlib/assert/is-object';
import isArray from '@stdlib/assert/is-array';
import contains from '@stdlib/assert/contains';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import isJSON from '@stdlib/assert/is-json';
import hasProp from '@stdlib/assert/has-property';
import copy from '@stdlib/utils/copy';
import objectKeys from '@stdlib/utils/keys';
import noop from '@stdlib/utils/noop';
import incrspace from '@stdlib/math/utils/incrspace';
import generateUID from 'utils/uid';
import Loadable from 'components/internal/loadable';
import Draggable from 'components/draggable';
import SelectInput from 'components/input/select';
const ContingencyTable = Loadable( () => import( 'components/data-explorer/contingency_table' ) );
const FrequencyTable = Loadable( () => import(  'components/data-explorer/frequency_table' ) );
const SummaryStatistics = Loadable( () => import(  'components/data-explorer/summary_statistics' ) );
const VariableTransformer = Loadable( () => import(  'components/data-explorer/variable-transformer' ) );
const ToolboxTutorialButton = Loadable( () => import(  'components/data-explorer/toolbox-tutorial-button' ) );
const TextEditor = Loadable( () => import( 'components/text-editor' ) );
import GridLayout from './grid_layout.js';
import Pages from 'components/pages';
import Gate from 'components/gate';
import RealtimeMetrics from 'components/metrics/realtime';
import Plotly from 'components/plotly';
import OverlayTrigger from 'components/overlay-trigger';
const SpreadsheetUpload = Loadable( () => import(  'components/spreadsheet-upload' ) );
const RPlot = Loadable( () => import( 'components/r/plot' ) );
const DataTable = Loadable( () => import(  'components/data-table' ) );
import SessionContext from 'session/context.js';
import OutputPanel from './output_panel.js';
import createOutputElement from './create_output_element.js';
import formatFilters from './format_filters.js';
import valuesFromFormula from './variable-transformer/values_from_formula.js';
import retrieveBinnedValues from './variable-transformer/retrieve_binned_values.js';
import recodeCategorical from './variable-transformer/recode_categorical.js';
import { DATA_EXPLORER_BIN_TRANSFORMER, DATA_EXPLORER_CAT_TRANSFORMER,
	DATA_EXPLORER_DELETE_VARIABLE, DATA_EXPLORER_VARIABLE_TRANSFORMER } from 'constants/actions.js';
import { RETRIEVED_CURRENT_USER_ACTIONS } from 'constants/events.js';
import './data_explorer.css';


// MODEL COMPONENTS //

import DecisionTree from 'components/data-explorer/decision_tree.js';
import LassoRegression from 'components/data-explorer/lasso_regression.js';
import LogisticRegression from 'components/data-explorer/logistic_regression';
import MultipleLinearRegression from 'components/data-explorer/multiple_linear_regression';
import RandomForest from 'components/data-explorer/random_forest.js';
import SimpleLinearRegression from 'components/data-explorer/simple_linear_regression';
import PrincipalComponentAnalysis from 'components/data-explorer/principal_component_analysis';
import HierarchicalClustering from 'components/data-explorer/hierarchical_clustering.js';
import KMeans from 'components/data-explorer/kmeans';
import NaiveBayes from 'components/data-explorer/naive_bayes.js';


// PLOT COMPONENTS //

import Barchart, { generateBarchartConfig } from 'components/data-explorer/barchart';
import Boxplot, { generateBoxplotConfig } from 'components/data-explorer/boxplot';
import Heatmap, { generateHeatmapConfig } from 'components/data-explorer/heatmap';
import Histogram, { generateHistogramConfig } from 'components/data-explorer/histogram';
import Lineplot, { generateLineplotConfig } from 'components/data-explorer/lineplot';
import Map, { generateMapConfig } from 'components/data-explorer/map';
import MosaicPlot, { generateMosaicPlotCode } from 'components/data-explorer/mosaicplot';
import Piechart, { generatePiechartConfig } from 'components/data-explorer/piechart';
import QQPlot, { generateQQPlotConfig } from 'components/data-explorer/qqplot';
import Scatterplot, { generateScatterplotConfig } from 'components/data-explorer/scatterplot';
import Violinplot, { generateViolinplotConfig } from 'components/data-explorer/violinplot';
import ContourChart, { generateContourChart } from 'components/data-explorer/contour.js';


// TEST COMPONENTS //

import MeanTest from 'components/data-explorer/meantest';
import MeanTest2 from 'components/data-explorer/meantest2';
import CorrTest from 'components/data-explorer/corrtest';
import Chi2Test from 'components/data-explorer/chi2';
import PropTest from 'components/data-explorer/proptest';
import PropTest2 from 'components/data-explorer/proptest2';
import Anova from 'components/data-explorer/anova';
import Kruskal from 'components/data-explorer/kruskal';


// VARIABLES //

const debug = logger( 'isle:data-explorer' );
const uid = generateUID( 'data-explorer' );


// FUNCTIONS //

function checkVariables( data, variables ) {
	if ( variables.length === 0 ) {
		return true;
	}
	const keys = objectKeys( data );
	for ( let i = 0; i < variables.length; i++ ) {
		if ( !contains( keys, String( variables[ i ] ) ) ) {
			return false;
		}
	}
	return true;
}


// MAIN //

/**
* This component is used by students to briefly summarize data as it is presented and perform various statistical tests.
*
* @property {Array} categorical - array of strings indicating the name of each categorical variable
* @property {Array} quantitative - array of strings indicating the name of each quantitative variable
* @property {(Object|Array)} data - data object or array to be viewed. If it is an object, the keys correspond to column values while an array will expect an array of objects with a named field corresponding to each column. If you wish to allow students the ability to import a `.csv` file, set the `data` option to be `false`
* @property {Object} dataInfo - object containing the keys \'name\', whose value is a string, \'info\', whose value is an array of strings in which each element in the array is a new line and \'variables\', an object with keys as variable names and values as variable descriptions
* @property {boolean} editor - boolean indicating whether to show the editor to the user
* @property {Object} editorProps - object to be passed to `TextEditor` indicating properties to be used
* @property {string} editorTitle - string indicating the title of the explorer to be displayed
* @property {string} reportMode - controls whether to sync editor changes for everyone (`collaborative`), across users in groups (`group`), or not (`individual`)
* @property {boolean} dataTable - boolean value indicating whether to hide the data table from view
* @property {boolean} histogramDensities - boolean value indicating whether to display histogram densities
* @property {Array<string>} models - array of strings indicating models that may be fit on the data
* @property {string} opened - page opened at startup
* @property {Array<string>} plots - array of strings indicating which plots to show to the user
* @property {Array<node>} questions - array of nodes indicating surrounding text and question components to be displayed in a tabbed window
* @property {boolean} showTestDecisions - boolean indicating whether to show the decisions made for each test based on the calculated p-values
* @property {Array<string>} statistics - array of strings indicating which summary statistics may be calculated
* @property {Array<string>} tables - array of strings indicating which tables may be created from the data
* @property {Array<Object>} tabs - array of objects and keys indicating any custom tabs to add
* @property {Array<string>} tests - array of strings indicating which hypothesis tests to include
* @property {boolean} transformer - boolean indicating whether one wants to display a variable transformer
* @property {Function} onTutorialCompletion - function invoked when user has completed the data explorer tutorial
* @property {Function} onTutorialStart - function invoked when user starts the data explorer tutorial
* @property {Object} style - CSS inline styles for main container
*/
class DataExplorer extends Component {
	/**
	* Constructor function
	*/
	constructor( props ) {
		super( props );
		let data = props.data;
		let quantitative;
		let categorical;
		let groupVars;
		if ( props.data ) {
			quantitative = props.quantitative;
			categorical = props.categorical;
			groupVars = props.categorical.slice();
		} else {
			quantitative = [];
			categorical = [];
			groupVars = [];
		}
		let ready = false;
		let validVariables = true;
		if (
			isObject( data ) &&
			( quantitative.length > 0 || categorical.length > 0 )
		) {
			ready = true;
			validVariables = checkVariables( data, quantitative.concat( categorical ) );
		}
		this.id = props.id || uid( props );
		this.state = {
			data: data,
			quantitative: quantitative,
			categorical: categorical,
			validVariables,
			output: [],
			groupVars,
			ready,
			showStudentPlots: false,
			showToolbox: false,
			disableToolbarDragging: false,
			openedNav: props.opened || ( isArray( props.questions ) && props.questions.length > 0 ? 'questions' : 'data' ),
			studentPlots: [],
			subsetFilters: null,
			unaltered: {
				data: props.data,
				quantitative: props.quantitative,
				categorical: props.categorical
			},
			filters: []
		};

		this.logAction = ( type, value ) => {
			if ( this.state.subsetFilters ) {
				value = { ...value, filters: this.state.subsetFilters };
			}
			const session = this.context;
			session.log({
				id: this.id,
				type,
				value
			});
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		const newState = {};
		if (
			nextProps.data !== prevState.unaltered.data
		) {
			newState.data = nextProps.data;
		}
		if ( nextProps.data ) {
			if ( nextProps.quantitative !== prevState.unaltered.quantitative ) {
				newState.quantitative = nextProps.quantitative;
			}
			if ( nextProps.categorical !== prevState.unaltered.categorical ) {
				newState.categorical = nextProps.categorical;
			}
			newState.validVariables = checkVariables(
				nextProps.data,
				nextProps.quantitative.concat( nextProps.categorical )
			);
		}
		if ( !isEmptyObject( newState ) ) {
			newState.unaltered = {
				data: nextProps.data,
				quantitative: nextProps.quantitative,
				categorical: nextProps.categorical
			};
			return newState;
		}
		return null;
	}

	componentDidMount() {
		const session = this.context;
		if ( !this.props.data ) {
			const promiseData = session.store.getItem( this.id+'_data' );
			const promisequantitative = session.store.getItem( this.id+'_quantitative' );
			const promiseCategorical = session.store.getItem( this.id+'_categorical' );
			Promise.all([ promiseData, promisequantitative, promiseCategorical ])
				.then( ( values ) => {
					const data = values[ 0 ] || null;
					const quantitative = values[ 1 ] || [];
					const categorical = values[ 2 ] || [];
					const groupVars = ( categorical || [] ).slice();
					this.setState({
						data, quantitative, categorical, groupVars, ready: true
					});
				})
				.catch( ( err ) => {
					debug( err );
				});
		}
		if ( session.currentUserActions ) {
			const actions = session.currentUserActions[ this.id ];
			if ( this.props.data && isObjectArray( actions ) ) {
				this.restoreTransformations( actions );
			}
		}
		this.unsubscribe = session.subscribe( ( type, value ) => {
			if ( type === RETRIEVED_CURRENT_USER_ACTIONS ) {
				const currentUserActions = value;
				const actions = currentUserActions[ this.id ];
				if ( this.props.data && isObjectArray( actions ) ) {
					this.restoreTransformations( actions );
				}
			}
		});
	}

	componentDidUpdate( prevProps, prevState ) {
		debug( 'Component did update...' );
		if ( this.state.output !== prevState.output && this.outputPanel ) {
			this.outputPanel.scrollToBottom();
		}
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	restoreTransformations = ( actions ) => {
		let state = this.state;
		console.log( 'Restoring transformations...' );
		for ( let i = actions.length - 1; i >= 0; i-- ) {
			const action = actions[ i ];
			switch ( action.type ) {
				case DATA_EXPLORER_VARIABLE_TRANSFORMER:
					console.log( `Should add transformed variable ${action.value.name}` );
					if ( !hasProp( this.props.data, action.value.name ) ) {
						const values = valuesFromFormula( action.value.code, state.data );
						state = this.transformVariable( action.value.name, values, state );
					}
				break;
				case DATA_EXPLORER_BIN_TRANSFORMER: {
					const { name, variable, breaks, catNames } = action.value;
					console.log( `Should add binned variable ${name}` );
					if ( !hasProp( this.props.data, name ) ) {
						const rawData = state.data[ variable ];
						const values = retrieveBinnedValues( rawData, catNames, breaks );
						state = this.transformVariable( name, values, state );
					}
				}
				break;
				case DATA_EXPLORER_CAT_TRANSFORMER: {
					const { name, firstVar, secondVar, nameMappings, castNumeric } = action.value;
					console.log( `Should add recoded variable ${name}` );
					if ( !hasProp( this.props.data, name ) ) {
						if ( state.data[ firstVar ]) {
							const values = recodeCategorical( firstVar, secondVar, nameMappings, state.data, castNumeric );
							state = this.transformVariable( name, values, state );
						}
					}
				}
				break;
				case DATA_EXPLORER_DELETE_VARIABLE:
					state = this.deleteVariable( action.value, state );
				break;
			}
		}
		state.data = copy( state.data, 1 );
		this.setState( state );
	}

	resetStorage = () => {
		const session = this.context;
		session.store.removeItem( this.id+'_data' );
		session.store.removeItem( this.id+'_quantitative' );
		session.store.removeItem( this.id+'_categorical' );
		this.setState({
			data: null,
			categorical: [],
			quantitative: [],
			ready: false
		});
	}

	/**
	* Display gallery of recently created plots by the students.
	*/
	toggleStudentPlots = () => {
		this.setState({
			showStudentPlots: !this.state.showStudentPlots
		});
	}

	toggleToolbox = () => {
		this.setState({
			showToolbox: !this.state.showToolbox
		});
	}

	/**
	* Remove output element at the specified index.
	*/
	clearOutput = ( idx ) => {
		let newOutputs = this.state.output.slice();
		newOutputs[ idx ] = null;
		this.setState({
			output: newOutputs
		});
	}

	/**
	* Remove all currently saved student plots.
	*/
	clearPlots = () => {
		this.setState({
			studentPlots: []
		});
	}

	/**
	* Stores all plot actions in the internal state.
	*/
	onUserAction = ( action ) => {
		let config;
		let value = action.value;
		if ( isJSON( value ) ) {
			value = JSON.parse( value );
		}
		switch ( action.type ) {
		case 'DATA_EXPLORER_SHARE_BARCHART':
			config = generateBarchartConfig({ data: this.state.data, ...value });
			break;
		case 'DATA_EXPLORER_SHARE_BOXPLOT':
			config = generateBoxplotConfig({ data: this.state.data, ...value });
			break;
		case 'DATA_EXPLORER_SHARE_CONTOURCHART':
			config = generateContourChart({ data: this.state.data, ...value });
			break;
		case 'DATA_EXPLORER_SHARE_HEATMAP':
			config = generateHeatmapConfig({ data: this.state.data, ...value });
			break;
		case 'DATA_EXPLORER_SHARE_HISTOGRAM':
			config = generateHistogramConfig({ data: this.state.data, ...value });
			break;
		case 'DATA_EXPLORER_SHARE_LINEPLOT':
			config = generateLineplotConfig({ data: this.state.data, ...value });
			break;
		case 'DATA_EXPLORER_SHARE_MAP':
			config = generateMapConfig({ data: this.state.data, ...value });
			break;
		case 'DATA_EXPLORER_SHARE_MOSAIC':
			config = generateMosaicPlotCode({ data: this.state.data, ...value });
			break;
		case 'DATA_EXPLORER_SHARE_PIECHART':
			config = generatePiechartConfig({ data: this.state.data, ...value });
			break;
		case 'DATA_EXPLORER_SHARE_QQPLOT':
			config = generateQQPlotConfig({ data: this.state.data, ...value });
			break;
		case 'DATA_EXPLORER_SHARE_SCATTERPLOT':
			config = generateScatterplotConfig({ data: this.state.data, ...value });
			break;
		case 'DATA_EXPLORER_SHARE_VIOLINPLOT':
			config = generateViolinplotConfig({ data: this.state.data, ...value });
		}
		if ( config ) {
			const newStudentPlots = this.state.studentPlots.slice();
			const configString = JSON.stringify( config );
			let found = false;
			for ( let i = 0; i < newStudentPlots.length; i++ ) {
				if ( newStudentPlots[ i ].config === configString ) {
					newStudentPlots[ i ].count += 1;
					found = true;
					break;
				}
			}
			if ( !found ) {
				newStudentPlots.push({
					config: configString,
					count: 1
				});
			}
			this.setState({
				studentPlots: newStudentPlots
			});
		}
	}

	onFilters = ( newFilters ) => {
		this.setState({
			filters: newFilters
		}, () => {
			this.onFilterCreate();
		});
	}

	/**
	* Adds the supplied element to the array of outputs.
	*/
	addToOutputs = ( val ) => {
		const newOutput = this.state.output.slice();
		if ( isArray( val ) ) {
			for ( let i = 0; i < val.length; i++ ) {
				const element = createOutputElement( val[ i ], newOutput.length, this.clearOutput, this.state.subsetFilters, this.onFilters );
				newOutput.push( element );
			}
		} else {
			const element = createOutputElement( val, newOutput.length, this.clearOutput, this.state.subsetFilters, this.onFilters );
			newOutput.push( element );
		}
		this.setState({
			output: newOutput
		});
	}

	transformVariable = ( name, values, varState ) => {
		let newquantitative;
		let newCategorical;
		let groupVars;
		let newData;
		if ( !varState ) {
			newData = copy( this.state.data, 1 );
			newquantitative = this.state.quantitative.slice();
			newCategorical = this.state.categorical.slice();
			groupVars = this.state.groupVars.slice();
		} else {
			newData = copy( varState.data, 1 );
			newquantitative = varState.quantitative.slice();
			newCategorical = varState.categorical.slice();
			groupVars = varState.groupVars.slice();
		}
		newData[ name ] = values;
		let previous;
		if ( isNumberArray( values ) ) {
			if ( !contains( newquantitative, name ) ) {
				newquantitative.push( name );
				previous = newCategorical.indexOf( name );
				if ( previous > 0 ) {
					newCategorical.splice( previous, 1 );
					groupVars = newCategorical.slice();
				}
			}
		} else {
			if ( !contains( newCategorical, name ) ) {
				newCategorical.push( name );
				previous = newquantitative.indexOf( name );
				if ( previous > 0 ) {
					newquantitative.splice( previous, 1 );
				}
			}
			groupVars = newCategorical.slice();
		}
		const newVarState = {
			data: newData,
			categorical: newCategorical,
			quantitative: newquantitative,
			groupVars: groupVars
		};
		return newVarState;
	}

	onGenerateTransformedVariable = ( name, values ) => {
		const session = this.context;
		if ( hasProp( this.props.data, name ) ) {
			return session.addNotification({
				title: 'Variable exists',
				message: 'The original variables of the data set cannot be overwritten.',
				level: 'error',
				position: 'tr'
			});
		}
		session.addNotification({
			title: 'Variable created',
			message: `The variable with the name ${name} has been successfully generated`,
			level: 'success',
			position: 'tr'
		});
		this.setState({ ...this.transformVariable( name, values ) });
	}

	onColumnDelete = ( variable ) => {
		debug( 'Should remove variable with name '+variable );
		const session = this.context;
		this.logAction( DATA_EXPLORER_DELETE_VARIABLE, variable );
		session.addNotification({
			title: 'Variable removed',
			message: `The variable with the name ${variable} has been successfully removed`,
			level: 'success',
			position: 'tr'
		});
		const varState = this.deleteVariable( variable );
		varState.data = copy( varState.data, 1 );
		this.setState( varState );
	}

	onColumnNameChange = ( oldName, newName ) => {
		const state = this.state;
		const keys = objectKeys( this.state.data );
		const newData = {};
		for ( let i = 0; i < keys.length; i++ ) {
			const key = keys[ i ];
			if ( key === oldName ) {
				newData[ newName ] = this.state.data[ oldName ];
			} else {
				newData[ key ] = this.state.data[ key ];
			}
		}
		const newQuantitative = state.quantitative.map( x => x === oldName ? newName : x );
		const newCategorical = state.categorical.map( x => x === oldName ? newName : x );
		const newGroupVars = state.groupVars.map( x => x === oldName ? newName : x );
		this.setState({
			data: newData,
			quantitative: newQuantitative,
			categorical: newCategorical,
			groupVars: newGroupVars
		});
	}

	onColumnDrag = ( vars ) => {
		const state = this.state;
		const sorter = ( a, b ) => {
			a = vars.indexOf( String( a ) );
			b = vars.indexOf( String( b ) );
			if ( a === -1 || b === -1 ) {
				return 0;
			}
			if ( a < b ) {
				return -1;
			} else if ( a > b ) {
				return 1;
			}
			return 0;
		};
		const newQuantitative = state.quantitative.slice().sort( sorter );
		const newCategorical = state.categorical.slice().sort( sorter );
		const newGroupVars = state.groupVars.slice().sort( sorter );
		this.setState({
			quantitative: newQuantitative,
			categorical: newCategorical,
			groupVars: newGroupVars
		});
	}

	deleteVariable = ( variable, varState ) => {
		let state = varState || this.state;
		let newData;
		if ( !varState ) {
			newData = copy( this.state.data, 1 );
		} else {
			newData = varState.data;
		}
		delete newData[ variable ];
		let newQuantitative = state.quantitative.filter( x => x !== variable );
		let newCategorical = state.categorical.filter( x => x !== variable );
		let newGroupVars = state.groupVars.filter( x => x !== variable );
		let filters = ( state.filters || [] ).filter( x => x.id !== variable );
		return {
			data: newData,
			quantitative: newQuantitative,
			categorical: newCategorical,
			groupVars: newGroupVars,
			filters
		};
	}

	onFileUpload = ( err, output ) => {
		const session = this.context;
		if ( !err ) {
			const data = {};
			const columnNames = objectKeys( output[ 0 ] ).filter( x => x !== '' );
			for ( let j = 0; j < columnNames.length; j++ ) {
				let col = columnNames[ j ];
				data[ col ] = new Array( output.length );
			}
			for ( let i = 0; i < output.length; i++ ) {
				for ( let j = 0; j < columnNames.length; j++ ) {
					let col = columnNames[ j ];
					data[ col ][ i ] = output[ i ][ col ];
				}
			}
			const categoricalGuesses = [];
			const quantitativeGuesses = [];
			columnNames.forEach( variable => {
				if ( isNumberArray( data[ variable ]) ) {
					quantitativeGuesses.push( variable );
				} else {
					categoricalGuesses.push( variable );
				}
			});
			this.setState({
				quantitative: quantitativeGuesses,
				categorical: categoricalGuesses,
				data
			}, () => {
				session.store.setItem( this.id+'_data', this.state.data, debug );
			});
		}
	}

	onFilterCreate = () => {
		let indices = new Set();
		for ( let i = 0; i < this.state.filters.length; i++ ) {
			const filter = this.state.filters[ i ];
			const col = this.state.data[ filter.id ];
			if ( contains( this.state.quantitative, filter.id ) ) {
				// Case: We have a filter for a quantitative variable, which has a min and max value
				for ( let z = 0; z < col.length; z++ ) {
					if ( col[ z ] < filter.value.min || col[ z ] > filter.value.max ) {
						indices.add( z );
					}
				}
			} else {
				// Case: We have a categorical variable
				for ( let z = 0; z < col.length; z++ ) {
					if ( !contains( filter.value, String( col[ z ] ) ) ) {
						indices.add( z );
					}
				}
			}
		}
		const vars = objectKeys( this.state.data );
		const newData = {};
		const nOriginal = this.state.data[ vars[0] ].length;
		for ( let c = 0; c < vars.length; c++ ) {
			const varName = vars[ c ];
			newData[ varName ] = [];
		}
		const ids = [];
		for ( let j = 0; j < nOriginal; j++ ) {
			if ( !indices.has( j ) ) {
				for ( let colInd = 0; colInd < vars.length; colInd++ ) {
					let varName = vars[ colInd ];
					newData[ varName ].push( this.state.data[ varName ][ j ] );
				}
				if ( this.state.data[ 'id' ] ) {
					ids.push( this.state.data[ 'id' ][ j ] );
				} else {
					ids.push( j+1 );
				}
			}
		}
		newData[ 'id' ] = ids;
		this.setState({
			data: newData,
			oldData: this.state.data,
			subsetFilters: this.state.filters
		});
	}

	onRestoreData = () => {
		const newVars = objectKeys( this.state.data );
		const oldVars = objectKeys( this.state.oldData );
		const data = copy( this.props.data, 1 );
		const originalVariables = this.props.quantitative.concat( this.props.categorical );
		const ids = this.state.data.id;
		const nOriginal = this.props.data[ oldVars[ 0 ] ].length;
		const oldIds = this.state.oldData.id || incrspace( 1, nOriginal+1, 1 );
		for ( let i = 0; i < oldVars.length; i++ ) {
			const name = oldVars[ i ];
			if ( name !== 'id' && !contains( originalVariables, name ) ) {
				data[ name ] = new Array( nOriginal ).fill( null );
				for ( let j = 0; j < oldIds.length; j++ ) {
					const idx = oldIds[ j ] - 1;
					data[ name ][ idx ] = this.state.oldData[ name ][ j ];
				}
			}
		}
		for ( let i = 0; i < newVars.length; i++ ) {
			const name = newVars[ i ];
			if ( name !== 'id' && !contains( originalVariables, name ) ) {
				if ( !data[ name ] ) {
					data[ name ] = new Array( nOriginal ).fill( null );
				}
				for ( let j = 0; j < ids.length; j++ ) {
					const idx = ids[ j ] - 1;
					data[ name ][ idx ] = this.state.data[ name ][ j ];
				}
			}
		}
		this.setState({
			data,
			subsetFilters: null,
			filters: []
		});
	}

	on2dSelection = ( names, selected ) => {
		const newFilters = this.state.filters.filter(
			x => x.id !== names.x && x.id !== names.y
		);
		newFilters.push({
			id: names.x,
			value: {
				min: selected.range.x[ 0 ],
				max: selected.range.x[ 1 ]
			}
		});
		newFilters.push({
			id: names.y,
			value: {
				min: selected.range.y[ 0 ],
				max: selected.range.y[ 1 ]
			}
		});
		this.setState({
			filters: newFilters
		});
	}

	onBarchartSelection = ( name, selected ) => {
		const newFilters = this.state.filters.filter(
			x => x.id !== name
		);
		newFilters.push({
			id: name,
			value: selected.range.x
		});
		this.setState({
			filters: newFilters
		});
	}

	onHistogramSelection = ( name, selected ) => {
		const newFilters = this.state.filters.filter(
			x => x.id !== name
		);
		newFilters.push({
			id: name,
			value: {
				min: selected.range.x[ 0 ],
				max: selected.range.x[ 1 ]
			}
		});
		this.setState({
			filters: newFilters
		});
	}

	/**
	* React component render method.
	*/
	render() {
		debug( 'Render component...' );
		if ( !this.state.data ) {
			return (
				<SpreadsheetUpload
					title="Data Explorer"
					onUpload={this.onFileUpload}
				/>
			);
		}
		if ( !this.state.ready ) {
			const variableNames = objectKeys( this.state.data );
			return ( <Card>
				<Card.Header as="h3">
					Data Explorer
				</Card.Header>
				<Card.Body>
					<h4>Please select which variables should be treated as numeric and which ones as categorical:</h4>
					<SelectInput
						legend="quantitative:"
						options={variableNames}
						defaultValue={this.state.quantitative}
						multi
						onChange={( quantitative ) => {
							this.setState({ quantitative });
						}}
					/>
					<SelectInput
						legend="Categorical:"
						options={variableNames}
						defaultValue={this.state.categorical}
						multi
						onChange={( categorical ) => {
							this.setState({ categorical });
						}}
					/>
					<Button onClick={() => {
						const groupVars = this.state.categorical.slice();
						const ready = true;
						this.setState({
							groupVars,
							ready
						}, () => {
							const session = this.context;
							session.store.setItem( this.id+'_quantitative', this.state.quantitative, debug );
							session.store.setItem( this.id+'_categorical', this.state.categorical, debug );
						});
					}}>Submit</Button>
					<DataTable data={this.state.data} id={this.id + '_table'} />
				</Card.Body>
			</Card> );
		}
		if ( isEmptyObject( this.state.data ) ) {
			return <Alert variant="danger">Data set is empty.</Alert>;
		}
		if ( !this.state.validVariables ) {
			return <Alert variant="danger">The <b>quantitative</b> or <b>categorical</b> data arrays contain variable names not present in the <b>data</b> object.</Alert>;
		}
		let nStatistics = this.props.statistics.length;
		let defaultActiveKey = '1';
		if ( nStatistics === 0 ) {
			if ( this.props.tables.length > 0 ) {
				defaultActiveKey = '2.1';
			}
			else {
				defaultActiveKey = '3.1';
			}
		}
		const categoricalProps = {
			data: this.state.data,
			variables: this.state.categorical,
			groupingVariables: this.state.groupVars,
			onCreated: this.addToOutputs,
			onPlotDone: this.outputPanel ? this.outputPanel.scrollToBottom : noop
		};
		const quantitativeProps = {
			data: this.state.data,
			variables: this.state.quantitative,
			groupingVariables: this.state.groupVars,
			onCreated: this.addToOutputs,
			onPlotDone: this.outputPanel ? this.outputPanel.scrollToBottom : noop
		};

		const navbar = <Nav variant="tabs">
			{ nStatistics > 0 ?
				<Nav.Item className="nav-statistics" >
					<Nav.Link eventKey="1">Statistics</Nav.Link>
				</Nav.Item> : null
			}
			{ this.props.tables.length > 0 && this.state.categorical.length > 0 ?
				<NavDropdown
					title="Tables"
					className="nav-tables"
				>
					{ this.props.tables.map(
						( e, i ) => <DropdownItem key={i} eventKey={`2.${i+1}`}>{e}</DropdownItem>
					) }
				</NavDropdown> : null
			}
			{ this.props.plots.length > 0 ?
				<NavDropdown
					title="Plots"
					className="nav-plots"
				>
					{ this.props.plots.map( ( e, i ) => {
						const item = <DropdownItem key={i} eventKey={`3.${i+1}`}>{e}</DropdownItem>;
						if (
							e === 'Histogram' && this.props.plots[ i-1 ] === 'Mosaic Plot' ||
							e === 'Line Plot' && this.props.plots[ i-1 ] === 'Box Plot'
						) {
							return ( <Fragment key={i} >
								<NavDropdown.Divider key={`${i}-div`} />
								{item}
							</Fragment> );
						}
						return item;
					})}
				</NavDropdown> : null
			}
			{ this.props.tests.length > 0 ?
				<NavDropdown
					title="Tests"
					className="nav-tests"
				>
					{ this.props.tests.map( ( e, i ) => {
						const item = <DropdownItem key={i} eventKey={`4.${i+1}`}>{e}</DropdownItem>;
						if (
							e === 'One-Sample Proportion Test' && this.props.tests[ i-1 ] === 'One-Way ANOVA' ||
							e === 'Correlation Test' && this.props.tests[ i-1 ] === 'Two-Sample Proportion Test'
						) {
							return ( <Fragment key={i} >
								<NavDropdown.Divider key={`${i}-div`} />
								{item}
							</Fragment> );
						}
						return item;
					}) }
				</NavDropdown> : null
			}
			{ this.props.models.length > 0 ?
				<NavDropdown
					title="Models"
					className="nav-models"
				>
					{this.props.models.map( ( e, i ) => {
						const item = <DropdownItem key={i} eventKey={`5.${i+1}`}>{e}</DropdownItem>;
						if (
							e === 'Decision Tree' && this.props.models[ i-1 ] === 'LASSO' ||
							e === 'PCA' && this.props.models[ i-1 ] === 'Naive Bayes'
						) {
							return ( <Fragment key={i} >
								<NavDropdown.Divider key={`${i}-div`} />
								{item}
							</Fragment> );
						}
						return item;
					})}
				</NavDropdown> : null
			}
			{ this.props.transformer ?
				<Nav.Item className="nav-transform" >
					<Nav.Link eventKey="6">Transform</Nav.Link>
				</Nav.Item> : null
			}
		</Nav>;

		const tabs = <Tab.Content>
			<Tab.Pane eventKey="1">
				<SummaryStatistics
					{...quantitativeProps}
					statistics={this.props.statistics}
					logAction={this.logAction}
				/>
			</Tab.Pane>
			{this.props.tables.map( ( e, i ) => {
				let content = null;
				switch ( e ) {
				case 'Frequency Table':
					content = <FrequencyTable
						{...categoricalProps}
						logAction={this.logAction}
					/>;
					break;
				case 'Contingency Table':
					content = <ContingencyTable
						{...categoricalProps}
						logAction={this.logAction}
						session={this.context}
					/>;
					break;
				}
				return ( <Tab.Pane key={i} eventKey={`2.${i+1}`}>
					{content}
				</Tab.Pane> );
			})}
			{this.props.plots.map( ( e, i ) => {
				let content = null;
				switch ( e ) {
				case 'Bar Chart':
					content = <Barchart
						{...categoricalProps}
						quantitative={this.state.quantitative}
						logAction={this.logAction}
						session={this.context}
						onSelected={this.onBarchartSelection}
					/>;
					break;
				case 'Box Plot':
					content = <Boxplot
						{...quantitativeProps}
						logAction={this.logAction}
						session={this.context}
					/>;
					break;
				case 'Contour Chart':
					content = <ContourChart
						{...quantitativeProps}
						logAction={this.logAction}
						session={this.context}
						onSelected={this.on2dSelection}
					/>;
					break;
				case 'Heat Map':
					content = <Heatmap
						{...quantitativeProps}
						logAction={this.logAction}
						session={this.context}
						onSelected={this.on2dSelection}
					/>;
					break;
				case 'Histogram':
					content = <Histogram
						{...quantitativeProps}
						logAction={this.logAction}
						session={this.context}
						showDensityOption={this.props.histogramDensities}
						onSelected={this.onHistogramSelection}
					/>;
					break;
				case 'Line Plot':
					content = <Lineplot
						{...quantitativeProps}
						logAction={this.logAction}
						session={this.context}
					/>;
					break;
				case 'Mosaic Plot':
					content = <MosaicPlot
						{...categoricalProps}
						logAction={this.logAction}
						session={this.context}
					/>;
					break;
				case 'Pie Chart':
					content = <Piechart
						{...categoricalProps}
						logAction={this.logAction}
						session={this.context}
					/>;
					break;
				case 'QQ Plot':
					content = <QQPlot
						{...quantitativeProps}
						logAction={this.logAction}
						session={this.context}
					/>;
					break;
				case 'Scatterplot':
					content = <Scatterplot
						{...quantitativeProps}
						logAction={this.logAction}
						session={this.context}
						onSelected={this.on2dSelection}
					/>;
					break;
				case 'Violin Plot':
					content = <Violinplot
						{...quantitativeProps}
						logAction={this.logAction}
						session={this.context}
					/>;
					break;
				case 'Map':
					content = <Map
						{...quantitativeProps}
						logAction={this.logAction}
						session={this.context}
					/>;
					break;
				}
				return ( <Tab.Pane key={i} eventKey={`3.${i+1}`}>
					{content}
				</Tab.Pane> );
			})}
			{this.props.tests.map( ( e, i ) => {
				let content = null;
				switch ( e ) {
				case 'One-Sample Mean Test':
					content = <MeanTest
						onCreated={this.addToOutputs}
						data={this.state.data}
						quantitative={this.state.quantitative}
						logAction={this.logAction}
						showDecision={this.props.showTestDecisions}
					/>;
					break;
				case 'Two-Sample Mean Test':
					content = <MeanTest2
						onCreated={this.addToOutputs}
						data={this.state.data}
						quantitative={this.state.quantitative}
						categorical={this.state.categorical}
						logAction={this.logAction}
						session={this.context}
						showDecision={this.props.showTestDecisions}
					/>;
					break;
				case 'One-Sample Proportion Test':
					content = <PropTest
						onCreated={this.addToOutputs}
						data={this.state.data}
						categorical={this.state.categorical}
						logAction={this.logAction}
						showDecision={this.props.showTestDecisions}
					/>;
					break;
				case 'Two-Sample Proportion Test':
					content = <PropTest2
						onCreated={this.addToOutputs}
						data={this.state.data}
						categorical={this.state.categorical}
						logAction={this.logAction}
						session={this.context}
						showDecision={this.props.showTestDecisions}
					/>;
					break;
				case 'One-Way ANOVA':
					content = <Anova
						onCreated={this.addToOutputs}
						data={this.state.data}
						quantitative={this.state.quantitative}
						categorical={this.state.categorical}
						logAction={this.logAction}
						showDecision={this.props.showTestDecisions}
					/>;
					break;
				case 'Correlation Test':
					content = <CorrTest
						onCreated={this.addToOutputs}
						data={this.state.data}
						quantitative={this.state.quantitative}
						logAction={this.logAction}
						showDecision={this.props.showTestDecisions}
					/>;
					break;
				case 'Chi-squared Independence Test':
					content = <Chi2Test
						onCreated={this.addToOutputs}
						data={this.state.data}
						categorical={this.state.categorical}
						logAction={this.logAction}
						showDecision={this.props.showTestDecisions}
					/>;
					break;
				case 'Kruskal-Wallis Test':
					content = <Kruskal
						onCreated={this.addToOutputs}
						data={this.state.data}
						quantitative={this.state.quantitative}
						categorical={this.state.categorical}
						logAction={this.logAction}
						showDecision={this.props.showTestDecisions}
					/>;
					break;
				}
				return ( <Tab.Pane key={i} eventKey={`4.${i+1}`}>
					{content}
				</Tab.Pane> );
			})}
			{this.props.models.map( ( e, i ) => {
				let content = null;
				switch ( e ) {
				case 'Multiple Linear Regression':
					content = <MultipleLinearRegression
						categorical={this.state.categorical}
						quantitative={this.state.quantitative}
						onCreated={this.addToOutputs}
						data={this.state.data}
						logAction={this.logAction}
						session={this.context}
						onGenerate={( quantitative, data ) => {
							this.setState({
								quantitative,
								data
							});
						}}
					/>;
				break;
				case 'Decision Tree':
					content = <DecisionTree
						categorical={this.state.categorical}
						quantitative={this.state.quantitative}
						onCreated={this.addToOutputs}
						data={this.state.data}
						logAction={this.logAction}
						session={this.context}
						onGenerate={( quantitative, categorical, data ) => {
							this.setState({
								quantitative,
								categorical,
								groupVars: categorical.slice(),
								data
							});
						}}
					/>;
				break;
				case 'Random Forest':
					content = <RandomForest
						categorical={this.state.categorical}
						quantitative={this.state.quantitative}
						onCreated={this.addToOutputs}
						data={this.state.data}
						logAction={this.logAction}
						session={this.context}
						onGenerate={( quantitative, categorical, data ) => {
							this.setState({
								quantitative,
								categorical,
								groupVars: categorical.slice(),
								data
							});
						}}
					/>;
				break;
				case 'LASSO':
					content = <LassoRegression
						categorical={this.state.categorical}
						quantitative={this.state.quantitative}
						onCreated={this.addToOutputs}
						data={this.state.data}
						logAction={this.logAction}
						session={this.context}
						onGenerate={( quantitative, data ) => {
							this.setState({
								quantitative,
								data
							});
						}}
					/>;
				break;
				case 'Logistic Regression':
					content = <LogisticRegression
						categorical={this.state.categorical}
						quantitative={this.state.quantitative}
						onCreated={this.addToOutputs}
						data={this.state.data}
						logAction={this.logAction}
						session={this.context}
						onGenerate={( quantitative, categorical, data ) => {
							this.setState({
								quantitative,
								categorical,
								groupVars: categorical.slice(),
								data
							});
						}}
					/>;
				break;
				case 'Simple Linear Regression':
					content = <SimpleLinearRegression
						categorical={this.state.categorical}
						quantitative={this.state.quantitative}
						onCreated={this.addToOutputs}
						data={this.state.data}
						logAction={this.logAction}
						session={this.context}
						onGenerate={( quantitative, data ) => {
							this.setState({
								quantitative,
								data
							});
						}}
					/>;
					break;
				case 'PCA':
					content = <PrincipalComponentAnalysis
						quantitative={this.state.quantitative}
						originalQuantitative={this.props.quantitative}
						onCreated={this.addToOutputs}
						onGenerate={( quantitative, data ) => {
							this.setState({
								quantitative,
								data
							});
						}}
						data={this.state.data}
						logAction={this.logAction}
						session={this.context}
					/>;
					break;
				case 'Hierarchical Clustering':
					content = <HierarchicalClustering
						quantitative={this.state.quantitative}
						categorical={this.state.categorical}
						originalQuantitative={this.props.quantitative}
						onCreated={this.addToOutputs}
						onGenerate={( categorical, data ) => {
							const groupVars = categorical.slice();
							this.setState({
								categorical,
								groupVars,
								data
							});
						}}
						data={this.state.data}
						logAction={this.logAction}
						session={this.context}
					/>;
					break;
				case 'kmeans':
					content = <KMeans
						quantitative={this.state.quantitative}
						categorical={this.state.categorical}
						originalQuantitative={this.props.quantitative}
						onCreated={this.addToOutputs}
						onGenerate={( categorical, data ) => {
							const groupVars = categorical.slice();
							this.setState({
								categorical,
								groupVars,
								data
							});
						}}
						data={this.state.data}
						logAction={this.logAction}
						session={this.context}
					/>;
					break;
					case 'Naive Bayes':
						content = <NaiveBayes
							categorical={this.state.categorical}
							quantitative={this.state.quantitative}
							onCreated={this.addToOutputs}
							data={this.state.data}
							logAction={this.logAction}
							session={this.context}
							onGenerate={( quantitative, categorical, data ) => {
								this.setState({
									quantitative,
									categorical,
									groupVars: categorical.slice(),
									data
								});
							}}
						/>;
					break;
				}
				return ( <Tab.Pane key={i} eventKey={`5.${i+1}`}>
					{content}
				</Tab.Pane> );
			})}
			{ this.props.transformer ?
				<Tab.Pane eventKey="6" >
					<VariableTransformer
						data={this.state.data}
						quantitative={this.state.quantitative}
						categorical={this.state.categorical}
						logAction={this.logAction}
						session={this.context}
						onGenerate={this.onGenerateTransformedVariable}
						onActive={( active ) => {
							this.setState({
								disableToolbarDragging: active
							});
						}}
					/>
				</Tab.Pane> : null
			}
		</Tab.Content>;
		const hasQuestions = isArray( this.props.questions ) && this.props.questions.length > 0;
		const mainContainer = <Row className="no-gutter data-explorer" style={this.props.style} >
			<Col xs={6} md={6}>
				<Card>
					<Navbar className="data-explorer-navbar" onSelect={( eventKey => this.setState({ openedNav: eventKey }))}>
						<Nav>
							{ hasQuestions ? <Nav.Item className="explorer-data-nav">
								<Nav.Link eventKey="questions" active={this.state.openedNav === 'questions'}>Questions</Nav.Link>
							</Nav.Item> : null }
							{ this.props.dataTable ? <Nav.Item className="explorer-data-nav" >
								<Nav.Link eventKey="data" active={this.state.openedNav === 'data'}>Data</Nav.Link>
							</Nav.Item> : null }
							{ this.props.editor ?
								<Nav.Item className="explorer-editor-nav">
									<Nav.Link
										active={this.state.openedNav === 'editor'}
										eventKey="editor"
									>{this.props.editorTitle}</Nav.Link>
								</Nav.Item> : null
							}
							{ this.props.tabs.length > 0 ? this.props.tabs.map( ( e, i ) => {
								return (
									<Nav.Item key={i} className="explorer-tabs-nav">
										<Nav.Link
											active={this.state.openedNav === e.title}
											eventKey={e.title}
										>{e.title}</Nav.Link>
									</Nav.Item>
								);
							}) : null }
						</Nav>
						<Button
							variant="secondary" size="sm" className="hide-toolbox-button"
							onClick={this.toggleToolbox}
						>{this.state.showToolbox ? 'Hide Toolbox' : 'Show Toolbox' }</Button>
					</Navbar>
					<Card.Body>
						{ hasQuestions ?<Pages
							id={this.id + '_questions'}
							height={( window.innerHeight*0.9 ) - 165}
							size="small"
							className="data-explorer-questions"
							style={{
								display: this.state.openedNav !== 'questions' ? 'none' : null
							}}
						>{this.props.questions}</Pages> : null }
						<div
							style={{
								display: this.state.openedNav !== 'data' ? 'none' : null
							}}
						>
								{ !this.props.data ? <Button size="small" onClick={this.resetStorage} style={{ position: 'absolute', top: '80px', zIndex: 2 }}>Clear Data</Button> : null }
								<DataTable
									data={this.state.data}
									dataInfo={this.props.dataInfo}
									undeletableVars={objectKeys( this.props.data )}
									filters={this.state.filters}
									onFilteredChange={( filtered ) => {
										debug( 'Filters have changed...' );
										this.setState({
											filters: filtered
										});
									}}
									onColumnDelete={this.onColumnDelete}
									onColumnNameChange={this.onColumnNameChange}
									onColumnDrag={this.onColumnDrag}
									deletable
									id={this.id + '_table'}
								/>
								<Row>
									<Col md={4} >
										{ this.state.filters.length > 0 && this.state.subsetFilters !== this.state.filters ?
											<OverlayTrigger placement="top" overlay={<Tooltip>Create new dataset from currently active filters</Tooltip>} >
												<Button
													onClick={this.onFilterCreate}
													variant="secondary"
													size="xsmall"
													style={{ float: 'left' }}
												>
													Create filtered dataset
													</Button>
												</OverlayTrigger> : null
											}
									</Col>
									<Col md={4} >
										{ this.state.subsetFilters ? <pre className="data-explorer-subset-filter-display">
											{formatFilters( this.state.subsetFilters )}
										</pre> : null }
									</Col>
									<Col md={4} >
										{ this.state.subsetFilters ? <OverlayTrigger placement="top" overlay={<Tooltip>Restore original dataset with all observations</Tooltip>} >
											<Button
												onClick={this.onRestoreData}
												variant="secondary"
												size="xsmall"
												style={{ float: 'right' }}
											>
												Restore original dataset
											</Button>
										</OverlayTrigger> : null }
									</Col>
								</Row>
						</div>
						{ this.props.editor ?
						<TextEditor {...this.props.editorProps}
							mode={this.props.reportMode}
							id={this.id + '_editor'}
							style={{ display: this.state.openedNav !== 'editor' ? 'none' : null }}
							submitButton /> : null
						}
						{this.props.tabs.map( ( e, i ) => {
							return ( this.state.openedNav === e.title ?
								e.content : null );
						})}
					</Card.Body>
				</Card>
			</Col>
			<Col xs={6} md={6}>
				<div className="card card-default" style={{ minHeight: window.innerHeight*0.9, padding: 0 }}>
					<div className="card-header clearfix">
						<h3 className="data-explorer-output-header">Output</h3>
						<Gate owner>
							<Modal
								show={this.state.showStudentPlots}
								onHide={this.toggleStudentPlots}
								dialogClassName="modal-100w"
							>
								<Modal.Header closeButton >
									<Modal.Title>Plots</Modal.Title>
								</Modal.Header>
								<Modal.Body style={{ height: 0.80 * window.innerHeight, overflowY: 'scroll' }}>
									{ this.state.studentPlots.length > 0 ?
										<GridLayout>
											{this.state.studentPlots.map( ( elem, idx ) => {
												const config = JSON.parse( elem.config );
												return (
													<div key={idx} style={{ height: '450px' }}>
														{
															isString( config ) ?
																<RPlot
																	code={config}
																	libraries={[ 'MASS' ]}
																/>:
																<Plotly
																	data={config.data}
																	layout={config.layout}
																	removeButtons
																/>
														}
														<span>
															<b>Count: </b>{elem.count}
														</span>
													</div>
												);
											})}
										</GridLayout> :
										<Card body className="bg-light">
											No plots have been created yet...
										</Card>
									}
								</Modal.Body>
								<Modal.Footer>
									<Button variant="danger" onClick={this.clearPlots}>Clear Plots</Button>
									<Button onClick={this.toggleStudentPlots}>Close</Button>
								</Modal.Footer>
							</Modal>
							<Button variant="secondary" size="sm" style={{ float: 'right' }} onClick={this.toggleStudentPlots} >Open Shared Plots</Button>
							<RealtimeMetrics returnFullObject for={[ this.id ]} onDatum={this.onUserAction} />
						</Gate>
					</div>
					<OutputPanel output={this.state.output} ref={( div ) => {
						this.outputPanel = div;
					}} />
					<Button size="sm" variant="outline-danger" block onClick={() => {
						this.setState({ output: []});
					}}>Clear All</Button>
				</div>
			</Col>
		</Row>;

		return (
			<Fragment>
				{mainContainer}
				<Draggable
					cancel=".input" disabled={this.state.disableToolbarDragging}
					style={{
						display: this.state.showToolbox ? 'inline' : 'none'
					}}
				>
					<Card
						border="secondary"
						id={`${this.id}-toolbox`}
						className="data-explorer-toolbox"
						role="button" tabIndex={0}
					>
						<Card.Header className="data-explorer-toolbox-header" >
							<Card.Title as="h3" unselectable="on" className="data-explorer-toolbox-title" >Toolbox</Card.Title>
							<ToolboxTutorialButton
								onTutorialStart={() => {
									this.setState({
										disableToolbarDragging: true
									});
									this.props.onTutorialStart();
								}}
								onTutorialCompletion={() => {
									this.setState({
										disableToolbarDragging: false
									});
									this.props.onTutorialCompletion();
								}}
								id={`${this.id}-toolbox`}
							/>
							<Button variant="secondary" size="sm" style={{ position: 'absolute', right: '20px' }}onClick={this.toggleToolbox} >Hide Toolbox</Button>
						</Card.Header>
						<Card.Body style={{ paddingBottom: '0px', overflowY: 'auto', maxHeight: '90vh' }}>
							<Tab.Container defaultActiveKey={defaultActiveKey}>
								{navbar}
								{tabs}
							</Tab.Container>
						</Card.Body>
					</Card>
				</Draggable>
			</Fragment>
		);
	}
}


// PROPERTIES //

DataExplorer.defaultProps = {
	data: {},
	dataInfo: {
		'info': '',
		'name': '',
		'variables': null,
		'showOnStartup': false
	},
	dataTable: true,
	tabs: [],
	questions: [],
	transformer: true,
	statistics: [
		'Mean',
		'Median',
		'Min',
		'Max',
		'Range',
		'Interquartile Range',
		'Standard Deviation',
		'Variance',
		'Correlation',
		'Skewness',
		'Excess Kurtosis'
	],
	plots: [
		'Bar Chart',
		'Pie Chart',
		'Mosaic Plot',
		'Histogram',
		'Box Plot',
		'Line Plot',
		'Scatterplot',
		'Heat Map',
		'Contour Chart',
		'QQ Plot'
	],
	tables: [
		'Frequency Table',
		'Contingency Table'
	],
	tests: [
		'One-Sample Mean Test',
		'Two-Sample Mean Test',
		'One-Way ANOVA',
		'One-Sample Proportion Test',
		'Two-Sample Proportion Test',
		'Correlation Test',
		'Chi-squared Independence Test',
		'Kruskal-Wallis Test'
	],
	models: [
		'Simple Linear Regression',
		'Multiple Linear Regression',
		'LASSO',
		'Decision Tree',
		'Random Forest',
		'Logistic Regression',
		'Naive Bayes',
		'PCA',
		'Hierarchical Clustering',
		'kmeans'
	],
	opened: null,
	categorical: [],
	quantitative: [],
	editor: true,
	editorProps: null,
	editorTitle: 'Report',
	reportMode: 'individual',
	histogramDensities: true,
	showTestDecisions: true,
	onTutorialCompletion() {},
	onTutorialStart() {},
	style: {}
};

DataExplorer.propTypes = {
	categorical: PropTypes.array,
	quantitative: PropTypes.array,
	data: PropTypes.object,
	dataInfo: PropTypes.object,
	editor: PropTypes.bool,
	editorProps: PropTypes.object,
	editorTitle: PropTypes.string,
	dataTable: PropTypes.bool,
	reportMode: PropTypes.oneOf([ 'individual', 'group', 'collaborative' ]),
	histogramDensities: PropTypes.bool,
	models: PropTypes.array,
	opened: PropTypes.oneOf([ 'data', 'toolbox', 'editor' ]),
	plots: PropTypes.array,
	questions: PropTypes.array,
	showTestDecisions: PropTypes.bool,
	statistics: PropTypes.array,
	style: PropTypes.object,
	tables: PropTypes.array,
	tabs: PropTypes.array,
	tests: PropTypes.array,
	transformer: PropTypes.bool,
	onTutorialCompletion: PropTypes.func,
	onTutorialStart: PropTypes.func
};

DataExplorer.contextType = SessionContext;


// EXPORTS //

export default DataExplorer;
