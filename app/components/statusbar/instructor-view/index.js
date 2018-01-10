// MODULES //

import React, { Component } from 'react';
import { Panel, PanelGroup, Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import PropTypes from 'prop-types';
import moment from 'moment';
import $ from 'jquery';
import logger from 'debug';
import FileSaver from 'file-saver';
import stringify from 'csv-stringify';
import max from '@stdlib/math/base/special/max';
import isElectron from 'utils/is-electron';
import ActionLog from 'components/statusbar/action-log';
import RangePicker from 'components/range-picker';
import UserList from './user_list.js';
import './instructor_view.css';


// VARIABLES //

const EDITOR_OFFSET = isElectron ? '15px' : '0px';
const debug = logger( 'isle-editor' );


// MAIN //

class InstructorView extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			hidden: true,
			actionLogHeader: <span>Action Log</span>,
			period: {
				from: moment( 0 ).startOf( 'day' ),
				to: moment().endOf( 'day' )
			},
			nActions: null
		};
	}

	componentDidMount() {
		const { session } = this.context;
		this.setState({
			nActions: session.socketActions.length
		});
		this.unsubscribe = session.subscribe( ( type, value ) => {
			if ( type === 'logout' ) {
				debug( 'Should reset the filters after user logout:' );
				this.setState({
					actionLogHeader: <span>Action Log</span>
				});
			}
			else if ( type === 'member_action' ) {
				const { session } = this.context;
				this.setState({
					nActions: session.socketActions.length
				});
			}
			else if ( type === 'retrieved_user_actions' ) {
				this.setState({
					nActions: value.length
				});
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	toggleBar() {
		if ( this.state.hidden ) {
			$( this.instructorView ).animate({ right: EDITOR_OFFSET }, 400 );
			$( this.handler ).css( 'opacity', 0.7 );
			this.setState({
				hidden: false
			});
		} else {
			$( this.instructorView ).animate({ right: -max( window.innerWidth * 0.45, 400 ) }, 400 );
			$( this.handler ).css( 'opacity', 0.7 );
			this.setState({
				hidden: true
			});
		}
	}

	onMouseOver() {
		if ( this.state.hidden ) {
			$( this.handler ).css( 'opacity', 1.0 );
		}
	}

	onMouseOut() {
		if ( this.state.hidden ) {
			$( this.handler ).css( 'opacity', 0.7 );
		}
	}

	saveJSON = () => {
		const { session } = this.context;
		const blob = new Blob([ JSON.stringify( session.socketActions ) ], {
			type: 'application/json'
		});
		const name = `actions_${session.namespaceName}_${session.lessonName}.json`;
		FileSaver.saveAs( blob, name );
	}

	saveCSV = () => {
		const { session } = this.context;
		stringify( session.socketActions, {
			header: true
		}, ( err, output ) => {
			const blob = new Blob([ output ], {
				type: 'text/plain'
			});
			const name = `actions_${session.namespaceName}_${session.lessonName}.csv`;
			FileSaver.saveAs( blob, name );
		});
	}

	renderAccordion = () => {
		const { session } = this.context;
		return ( <PanelGroup accordion >
			<Panel eventKey="1">
				<Panel.Heading>
					<Panel.Title toggle>Active Users</Panel.Title>
				</Panel.Heading>
				<Panel.Body collapsible>
					<UserList session={session} />
				</Panel.Body>
			</Panel>
			<Panel eventKey="2">
				<Panel.Heading>
					<Panel.Title toggle>
						{this.state.actionLogHeader}
					</Panel.Title>
				</Panel.Heading>
				<Panel.Body collapsible>
					<RangePicker onChange={( newPeriod ) => {
						this.setState({
							period: newPeriod
						});
					}} />
					<ActionLog
						period={this.state.period}
						onFilter={( newHeader, nActions ) => {
							this.setState({
								actionLogHeader: newHeader,
								nActions: nActions
							});
						}}
						onTimeRangeChange={( from, to, nActions ) => {
							this.setState({
								nActions
							});
						}}
					/>
					<ButtonToolbar>
						<ButtonGroup bsSize="xsmall">
							<Button onClick={this.saveJSON} >Save JSON</Button>
							<Button onClick={this.saveCSV} >Save CSV</Button>
						</ButtonGroup>
						<ButtonGroup>
							<span style={{ fontSize: '12px', fontWeight: 600 }}>
								{'# of Actions: '+this.state.nActions}
							</span>
						</ButtonGroup>
					</ButtonToolbar>
				</Panel.Body>
			</Panel>
		</PanelGroup> );
	}

	render() {
		return (
			<div
				className="instructor-view unselectable"
				ref={( instructorView ) => { this.instructorView = instructorView; }}
				style={{
					right: -max( window.innerWidth * 0.45, 400 )
				}}
			>
				<div className="instructor-view-top">
					<h3 style={{ marginTop: '20px' }}>Instructor Panel</h3>
					<hr style={{ background: '#333', backgroundImage: 'linear-gradient(to right, #ccc, #333, #ccc)', height: '1px', border: 0 }} />
				</div>
				<div className="instructor-view-middle">
					{this.renderAccordion()}
				</div>
				<div className="instructor-view-bottom"></div>
				<div className="instructor-view-handler"
					onClick={this.toggleBar.bind( this )}
					onMouseOver={this.onMouseOver.bind( this )}
					onMouseOut={this.onMouseOut.bind( this )}
					ref={( handler ) => { this.handler = handler; }}
					style={{
						right: this.state.hidden ? '105%' : '102%',
						borderWidth: this.state.hidden ? '20px 34.6px 20px 0' : '20px 0 20px 34.6px',
						borderColor: this.state.hidden ? 'transparent #fa9417 transparent transparent' : 'transparent transparent transparent silver'
					}}>
				</div>
			</div>
		);
	}
}


// TYPES //

InstructorView.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default InstructorView;
