// MODULES //

import React, { Component, Fragment } from 'react';
import logger from 'debug';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import isNull from '@stdlib/assert/is-null';
import Panel from 'components/panel';
import Gate from 'components/gate';
import generateUID from 'utils/uid';
import { SessionContext } from 'session';
import { REVEAL_CONTENT, HIDE_CONTENT } from 'constants/actions.js';
import { MEMBER_ACTION, RETRIEVED_COHORTS, USER_JOINED } from 'constants/events.js';


// VARIABLES //

const debug = logger( 'isle:revealer' );
const uid = generateUID( 'revealer' );


// MAIN //

/**
* An ISLE component that instructors may use to selectively reveal or hide children content to all users.
*
* @property {string} message - message to be displayed when content is hidden
* @property {boolean} show - controls whether to initially display child elements
*/
class Revealer extends Component {
	constructor( props ) {
		super( props );

		this.id = props.id || uid( props );

		this.state = {
			showChildren: props.show,
			selectedCohort: null,
			showProp: props.show
		};
	}

	static getDerivedStateFromProps( props, state ) {
		if ( props.show !== state.showProp ) {
			return {
				showChildren: props.show,
				showProp: props.show
			};
		}
		return null;
	}

	componentDidMount() {
		debug( 'Component did mount...' );
		const session = this.context;
		if ( session ) {
			this.unsubscribe = session.subscribe( ( type, action ) => {
				if ( type === RETRIEVED_COHORTS ) {
					this.forceUpdate();
				}
				else if ( type === MEMBER_ACTION ) {
					if ( action.id === this.id ) {
						const cohortName = action.value;
						debug( `Received action for cohort ${cohortName}: ` );
						if (
							!cohortName ||
							( session.cohort && session.cohort === cohortName )
						) {
							if ( action.type === REVEAL_CONTENT ) {
								debug( 'Reveal content...' );
								this.setState({
									showChildren: true
								});
							} else if ( action.type === HIDE_CONTENT ) {
								debug( 'Hide content...' );
								this.setState({
									showChildren: false
								});
							}
						}
						if ( this.state.selectedCohort === cohortName ) {
							if ( action.type === REVEAL_CONTENT ) {
								debug( 'Reveal content...' );
								this.setState({
									showChildren: true
								});
							} else if ( action.type === HIDE_CONTENT ) {
								debug( 'Hide content...' );
								this.setState({
									showChildren: false
								});
							}
						}
					}
				}
				else if (
					type === USER_JOINED &&
					session.user.email !== action.email &&
					( session.isOwner() || action.owner )
				) {
					debug( `Update revealer state for ${action.email}` );
					const session = this.context;
					if ( this.state.showChildren ) {
						session.log({
							id: this.id,
							type: REVEAL_CONTENT,
							value: this.state.selectedCohort,
							noSave: true
						}, action.email );
					} else {
						session.log({
							id: this.id,
							type: HIDE_CONTENT,
							value: this.state.selectedCohort,
							noSave: true
						}, action.email );
					}
				}
			});
		}
	}

	componentWillUnmount() {
		debug( 'Component will unmount...' );
		if ( this.unsubscribe ) {
			this.unsubscribe();
		}
	}

	toggleContent = () => {
		this.setState({
			showChildren: !this.state.showChildren
		}, () => {
			// Send message to other users:
			const session = this.context;
			if ( this.state.showChildren ) {
				session.log({
					id: this.id,
					type: REVEAL_CONTENT,
					value: this.state.selectedCohort
				}, 'members' );
			} else {
				session.log({
					id: this.id,
					type: HIDE_CONTENT,
					value: this.state.selectedCohort
				}, 'members' );
			}
		});
	}

	handleCohortChange = ( event ) => {
		const value = event.target.value;
		if (
			value !== this.state.selectedCohort ||
			( value === 'all' && isNull( this.state.selectedCohort ) )
		) {
			debug( 'Handle cohort change: '+value );
			this.setState({
				selectedCohort: value === 'all' ? null : value
			});
		}
	}

	stopPropagation = ( event ) => {
		event.stopPropagation();
	}

	render() {
		const cohorts = this.context.cohorts || [];
		const header = <h3 className="center" >{this.props.message}</h3>;
		return (<Fragment>
			<Gate owner >
				<Panel
					className="center"
					style={{
						marginBottom: '10px',
						width: 'fit-content'
					}}
				>
					<Button
						onClick={this.toggleContent}
						style={{ marginRight: 10 }}
					>{this.state.showChildren ? 'Hide' : 'Reveal'}</Button>
					contents of <i>{this.id}</i> {this.state.showChildren ? 'from' : 'to'}
					<select
						style={{ width: '150px', background: '#2e4468', marginLeft: '10px', padding: '2px', color: 'white' }}
						onChange={this.handleCohortChange}
						onBlur={this.handleCohortChange}
						onClick={this.stopPropagation}
						value={this.state.selectedCohort || 'all'}
					>
						<option value="all">All students</option>
						{cohorts.map( ( v, key ) => {
							return (
								<option
									key={key}
									value={v.title}
								>{v.title}</option>
							);
						})}
					</select>
				</Panel>
			</Gate>
				{this.state.showChildren ? this.props.children : header}
		</Fragment> );
	}
}


// PROPERTIES //

Revealer.defaultProps = {
	message: 'Content hidden by instructor',
	show: false
};

Revealer.propTypes = {
	message: PropTypes.string,
	show: PropTypes.bool
};

Revealer.contextType = SessionContext;


// EXPORTS //

export default Revealer;
