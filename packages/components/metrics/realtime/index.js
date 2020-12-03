// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import indexOf from '@stdlib/utils/index-of';
import SessionContext from 'session/context.js';
import { FOCUS_ELEMENT, LOSE_FOCUS_ELEMENT, MEMBER_ACTION } from 'constants/events.js';


// VARIABLES //

const debug = logger( 'isle:real-time-metrics' );


// MAIN //

/**
* Invisible component listening to incoming member actions and invoking a given callback.
*
* @property {string} for - ID of component whose actions should trigger callback(s)
* @property {Function} onData - callback function called with an array of all actions when a new member action arrives
* @property {Function} onDatum - callback function invoked with every individual incoming member action
* @property {boolean} returnFullObject - controls whether to invoke the supplied callback(s) with the full action object or only its value
*/
class RealTimeMetrics extends Component {
	constructor() {
		super();
		this.state = {
			actions: []
		};
	}

	componentDidMount() {
		this._isMounted = true;
		const session = this.context;
		if ( session ) {
			debug( 'Listening for all actions with id: '+this.props.for );
			this.unsubscribe = session.subscribe( ( type, action ) => {
				if ( type === MEMBER_ACTION ) {
					if ( action.type === FOCUS_ELEMENT || action.type === LOSE_FOCUS_ELEMENT ) {
						return null;
					}
					const idx = indexOf( this.props.for, action.id );
					if ( idx !== -1 ) {
						let actions = this.state.actions.slice();
						actions.push( this.props.returnFullObject ? action : action.value );
						this.setState({
							actions
						}, () => {
							debug( 'A new value for the given IDs was submitted: ' + JSON.stringify( this.state.actions ) );
							this.props.onData( this.state.actions, idx );
							this.props.onDatum( this.state.actions[ this.state.actions.length-1 ], idx );
						});
					}
				}
				if ( this._isMounted ) {
					this.forceUpdate();
				}
			});
		}
	}

	componentWillUnmount() {
		this._isMounted = false;
		if ( this.unsubscribe ) this.unsubscribe();
	}

	render() {
		return (
			<div></div>
		);
	}
}


// PROPERTIES //

RealTimeMetrics.defaultProps = {
	onData() {},
	onDatum() {},
	returnFullObject: false
};

RealTimeMetrics.propTypes = {
	for: PropTypes.array.isRequired,
	onData: PropTypes.func,
	onDatum: PropTypes.func,
	returnFullObject: PropTypes.bool
};

RealTimeMetrics.contextType = SessionContext;


// EXPORTS //

export default RealTimeMetrics;
