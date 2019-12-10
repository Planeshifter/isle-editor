// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import stringify from 'csv-stringify';
import moment from 'moment';
import logger from 'debug';
import copy from '@stdlib/utils/copy';
import contains from '@stdlib/assert/contains';
import isFunction from '@stdlib/assert/is-function';
import hasOwnProp from '@stdlib/assert/has-own-property';
import RangePicker from 'components/range-picker';
import CheckboxInput from 'components/input/checkbox';
import saveAs from 'utils/file-saver';
import SessionContext from 'session/context.js';
import ActionList from './list.js';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import createFilters from './create_filters';


// VARIABLES //

const debug = logger( 'isle:statusbar:action-log' );
moment.locale( 'us' );


// MAIN //

class ActionLog extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			anonymized: true,
			onlyStudents: false,
			filters: <span className="title">Filters:</span>,
			period: {
				from: moment( 0 ).startOf( 'day' ),
				to: moment().endOf( 'day' )
			},
			actions: []
		};
	}

	componentDidMount() {
		const session = this.context;
		if ( session.socketActions && session.socketActions.length > 0 ) {
			debug( 'Initial construction of actions array...' );
			this.setState({ // eslint-disable-line react/no-did-mount-set-state
				actions: this.buildActionsArray()
			});
		}
		this.unsubscribe = session.subscribe( ( type, value ) => {
			if ( type === 'logout' ) {
				debug( 'Should reset the filters after user logout:' );
				this.setState({ // eslint-disable-line react/no-did-mount-set-state
					filters: <span className="title">Filters:</span>
				});
			}
			else if (
				type === 'selected_cohort' ||
				type === 'member_action' ||
				type === 'retrieved_user_actions'
			) {
				this.setState({ // eslint-disable-line react/no-did-mount-set-state
					actions: this.buildActionsArray()
				});
			}
			if ( session.socketActions.length === 0 && this.state.filter !== null ) {
				this.setState({ // eslint-disable-line react/no-did-mount-set-state
					filter: {},
					filters: <span className="title">Filters:</span>
				});
			}
		});
	}

	componentDidUpdate( prevProps, prevState ) {
		if ( this.props.selectedEmail !== prevProps.selectedEmail ) {
			this.setState({
				filter: { email: this.props.selectedEmail },
				filters: <Fragment>
				<span className="title">Filters:</span>
				<span style={{ position: 'relative', width: 'auto', fontSize: '12px', fontFamily: 'Open Sans' }}>
					<span
						role="button" tabIndex={0}
						onClick={this.handleEmailFilterClick}
						onKeyPress={this.handleEmailFilterClick}
						style={{ marginLeft: 10, background: 'lightcoral', cursor: 'pointer' }}
					>{'email'}: {this.props.selectedEmail}</span>
				</span>
			</Fragment>
			});
		}
		else if ( this.props.selectedID !== prevProps.selectedID ) {
			this.setState({
				filter: { id: this.props.selectedID },
				filters: <Fragment>
				<span className="title">Filters:</span>
				<span style={{ position: 'relative', width: 'auto', fontSize: '12px', fontFamily: 'Open Sans' }}>
					<span
						role="button" tabIndex={0}
						onClick={this.handleIDFilterClick}
						onKeyPress={this.handleIDFilterClick}
						style={{ marginLeft: 10, background: 'lightcoral', cursor: 'pointer' }}
					>{'id'}: {this.props.selectedID}</span>
				</span>
			</Fragment>
			});
		}
		else if ( this.state.filter !== prevState.filter ) {
			debug( 'Should filter out actions...' );
			this.setState({ actions: this.buildActionsArray() });
		}
		else if (
			this.state.period.from !== prevState.period.from ||
			this.state.period.to !== prevState.period.to
		) {
			this.setState({ actions: this.buildActionsArray() });
		}
	}

	componentWillUnmount() {
		if ( isFunction( this.unsubscribe ) ) {
			this.unsubscribe();
		}
	}

	handleEmailFilterClick = ( event ) => {
		event.stopPropagation();
		let newFilter = copy( this.state.filter );
		delete newFilter[ 'email' ];
		if ( isEmptyObject( newFilter ) ) {
			newFilter = null;
		}
		const newFilters = createFilters( newFilter, ( newFilter, newFilters ) =>{
			this.setState({
				filter: newFilter,
				filters: newFilters
			});
		});
		this.setState({
			filter: newFilter,
			filters: newFilters
		});
	}

	handleIDFilterClick = ( event ) => {
		event.stopPropagation();
		let newFilter = copy( this.state.filter );
		delete newFilter[ 'id' ];
		if ( isEmptyObject( newFilter ) ) {
			newFilter = null;
		}
		const newFilters = createFilters( newFilter, (newFilter, newFilters) =>{
			this.setState({
				filter: newFilter,
				filters: newFilters
			});
		});

		this.setState({
			filter: newFilter,
			filters: newFilters
		});
	}

	buildActionsArray() {
		let { from, to } = this.state.period;
		debug( 'Building action array...' );
		if ( from && to ) {
			from = from.toDate();
			to = to.toDate();
			const session = this.context;
			let actions = [];
			for ( let i = 0; i < session.socketActions.length; i++ ) {
				let action = session.socketActions[ i ];
				if (
					this.props.selectedCohort &&
					!contains( this.props.selectedCohort.members, action.email )
				) {
					continue;
				}
				if (
					action.absoluteTime > from && action.absoluteTime < to
				) {
					actions.push( action );
				}
			}
			if ( this.state.filter ) {
				debug( 'Should filter actions: ' + actions.length );
				this.removeMarkedActions( actions );
			}
			return actions;
		}
		return [];
	}

	removeMarkedActions( actions ) {
		for ( let i = actions.length - 1; i >= 0; i-- ) {
			let action = actions[ i ];
			let markedForRemoval = false;
			for ( let key in this.state.filter ) {
				if ( hasOwnProp( this.state.filter, key ) ) {
					let val = this.state.filter[ key ];
					if ( action[ key ] !== val ) {
						markedForRemoval = true;
					}
				}
			}
			if ( markedForRemoval ) {
				actions.splice( i, 1 );
			}
		}
	}

	handleRadioChange = ( val ) => {
		this.setState({
			anonymized: !this.state.anonymized
		});
	}

	prepareActionsForExport( hash ) {
		let actions;
		const len = this.state.actions.length;
		if ( this.state.anonymized ) {
			if ( this.state.onlyStudents ) {
				actions = [];
				for ( let i = 0; i < len; i++ ) {
					if ( !this.state.actions[ i ].owner ) {
						const action = copy( this.state.actions[ i ] );
						action.name = hash.name[ action.name ];
						action.email = hash.email[ action.email ];
						actions.push( action );
					}
				}
			} else {
				actions = new Array( len );
				for ( let i = 0; i < len; i++ ) {
					const action = copy( this.state.actions[ i ] );
					action.name = hash.name[ action.name ];
					action.email = hash.email[ action.email ];
					actions[ i ] = action;
				}
			}
		}
		else if ( this.state.onlyStudents ) {
			actions = [];
			for ( let i = 0; i < len; i++ ) {
				if ( !this.state.actions[ i ].owner ) {
					actions.push( this.state.actions[ i ] );
				}
			}
		}
		else {
			actions = this.state.actions;
		}
		return actions;
	}

	saveJSON = () => {
		const session = this.context;
		session.getFakeUsers( ( err, hash ) => {
			if ( err ) {
				return session.addNotification({
					title: 'Error encountered',
					message: 'Encountered an error while generating fake users: '+err.message,
					level: 'error',
					position: 'tl'
				});
			}
			const actions = this.prepareActionsForExport( hash );
			const blob = new Blob([ JSON.stringify( actions ) ], {
				type: 'application/json'
			});
			const name = `actions_${session.namespaceName}_${session.lessonName}.json`;
			saveAs( blob, name );
		});
	}

	saveCSV = () => {
		const session = this.context;
		session.getFakeUsers( ( err, hash ) => {
			if ( err ) {
				return session.addNotification({
					title: 'Error encountered',
					message: 'Encountered an error while generating fake users: '+err.message,
					level: 'error',
					position: 'tl'
				});
			}
			const actions = this.prepareActionsForExport( hash );
			stringify( actions, {
				header: true
			}, ( err, output ) => {
				if ( err ) {
					return session.addNotification({
						title: 'Error encountered',
						message: 'Encountered an error while creating CSV: '+err.message,
						level: 'error',
						position: 'tl'
					});
				}
				const blob = new Blob([ output ], {
					type: 'text/plain'
				});
				const name = `actions_${session.namespaceName}_${session.lessonName}.csv`;
				saveAs( blob, name );
			});
		});
	}

	render() {
		return (
			<Card.Body>
				<RangePicker size="sm" onChange={( newPeriod ) => {
					this.setState({
						period: newPeriod
					});
				}} />
				<ActionList
					actions={this.state.actions}
					period={this.state.period}
					filter={this.state.filter}
					height={window.innerHeight / 2.0}
					onFilterChange={( newFilter, newFilters ) => {
						this.setState({
							filter: newFilter,
							filters: newFilters
						});
					}}
				/>
				{this.state.filters}
				<ButtonToolbar>
					<ButtonGroup>
						<span style={{ fontSize: '14px', marginRight: 20, paddingTop: 5, fontWeight: 600 }}>
							{'# of Actions: '+this.state.actions.length}
						</span>
					</ButtonGroup>
					<ToggleButtonGroup
						name="options"
						onChange={this.handleRadioChange}
						type="radio"
						size="small"
						value={this.state.anonymized}
					>
						<ToggleButton
							size="sm"
							variant="light"
							value={false}
							style={{
								fontSize: '12px',
								color: this.state.anonymized ? '#A9A9A9' : 'black'
							}}
						>Original</ToggleButton>
						<ToggleButton
							size="sm"
							variant="light"
							value={true}
							style={{
								fontSize: '12px',
								color: this.state.anonymized ? 'black' : '#A9A9A9'
							}}
						>Anonymized</ToggleButton>
					</ToggleButtonGroup>
					<CheckboxInput
						legend="Only student data"
						defaultValue={this.state.onlyStudents}
						onChange={() => this.setState({ onlyStudents: !this.state.onlyStudents })}
						style={{ marginRight: '5px', marginTop: '0px', marginBottom: '0px' }}
					/>
					<ButtonGroup size="sm">
						<Button variant="primary" onClick={this.saveJSON} >Save JSON</Button>
						<Button variant="primary" onClick={this.saveCSV} >Save CSV</Button>
					</ButtonGroup>
				</ButtonToolbar>
			</Card.Body>
		);
	}
}


// PROPERTIES //

ActionLog.contextType = SessionContext;

ActionLog.propTypes = {
	selectedCohort: PropTypes.object,
	selectedEmail: PropTypes.string,
	selectedID: PropTypes.string
};

ActionLog.defaultProps = {
	selectedCohort: null,
	selectedEmail: null,
	selectedID: null
};


// EXPORTS //

export default ActionLog;
