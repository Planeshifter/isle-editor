// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Modal from 'react-bootstrap/lib/Modal';
import Col from 'react-bootstrap/lib/Col';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import typeOf from '@stdlib/utils/type-of';
import replace from '@stdlib/string/replace';
import contains from '@stdlib/assert/contains';
import objectKeys from '@stdlib/utils/keys';


// VARIABLES //

const debug = logger( 'isle-editor' );


// FUNCTIONS //

function extractType( fcn ) {
	if ( fcn === PropTypes.string ) {
		return 'string';
	}
	if ( fcn === PropTypes.number ) {
		return 'number';
	}
	if ( fcn === PropTypes.bool ) {
		return 'boolean';
	}
	if ( fcn === PropTypes.func ) {
		return 'function';
	}
	if ( fcn === PropTypes.object ) {
		return 'object';
	}
	if ( fcn === PropTypes.array ) {
		return 'array';
	}
	return null;
}


// MAIN //

class ComponentConfigurator extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			componentClass: null,
			name: props.name,
			value: `<${props.name} />`
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		let newState = {};
		if ( nextProps.name !== prevState.name ) {
			newState.name = nextProps.name;
			newState.value = `<${nextProps.name} />`;
			newState.componentClass = null;
		}
		if ( !isEmptyObject( newState ) ) {
			return newState;
		}
		return null;
	}

	componentDidUpdate() {
		const comp = this.props.scope[ this.state.name ];
		if ( comp && !this.state.componentClass ) {
			debug( `Preparing configuration menu for ${comp.name} component...` );
			if ( comp.name === 'LoadableComponent' ) {
				const { loader } = comp;
				debug( 'Loading component...' );
				let promise = loader();
				promise.then( loaded => {
					this.setState({
						componentClass: loaded
					});
				}).catch( err => {
					throw err;
				});
			} else {
				this.setState({
					componentClass: comp
				});
			}
		}
	}

	clickHide = () => {
		this.props.onHide();
	}

	/*
	* Event handler invoked when text area value changes. Updates `value` and invokes
	* `onChange` callback with the new text as its first argument
	*/
	handleChange = ( event ) => {
		const newValue = event.target.value;
		this.setState({
			value: newValue
		});
	};

	handleClick = () => {
		if ( this.state.value ) {
			this.props.onInsert( this.state.value );
		}
	}

	handleReset = () => {
		this.setState({
			value: `<${this.props.name} />`
		});
	}

	checkboxClickFactory = ( key, defaultValue ) => {
		let replacement;
		const type = typeOf( defaultValue );
		switch ( type ) {
			case 'boolean':
				replacement = '{'+!defaultValue+'}';
			break;
			case 'function':
				replacement = '{() => {\n\n}}';
			break;
			case 'object':
			case 'array':
				replacement = '{'+JSON.stringify( defaultValue )+'}';
			break;
			case 'string':
				if ( contains( defaultValue, '\n' ) ) {
					replacement = '{`'+defaultValue+'`}';
				} else {
					replacement = `"${defaultValue}"`;
				}
			break;
			case 'number':
				replacement = '{'+defaultValue+'}';
			break;
			default:
				replacement = '{}';
			break;
		}
		return () => {
			let { value } = this.state;
			if ( !contains( value, key ) ) {
				value = value.substring( 0, value.length - 3 );
				value += ` ${key}=${replacement} />`;
			} else {
				let RE_KEY = new RegExp( key+'=[\\s\\S]*? (?=[a-z]+=|\\/>)', 'i' );
				value = replace( value, RE_KEY, '' );
			}
			this.setState({
				value
			});
		};
	}

	renderPropertyControls() {
		const { componentClass } = this.state;
		global.componentClass = componentClass;
		if ( !componentClass ) {
			return <span>Loading component specification...</span>;
		}
		const controls = [];
		const keys = objectKeys( componentClass.propTypes );
		for ( let i = 0; i < keys.length; i++ ) {
			let key = keys[ i ];
			let defaultValue = componentClass.defaultProps[ key ];
			let type = extractType( componentClass.propTypes[ key ] );
			let elem = <FormGroup key={i}>
				<Col sm={4} style={{ padding: 0 }}>
					<Checkbox checked={contains( this.state.value, key )} onClick={this.checkboxClickFactory( key, defaultValue )} style={{ marginTop: 0, marginBottom: 0 }} >{key}</Checkbox>
				</Col>
				<Col sm={3} style={{ padding: 0 }}>
					{ type ? `Type: ${type}.` : '' }
				</Col>
				<Col sm={5} style={{ padding: 0 }}>
					{ defaultValue !== null && defaultValue !== void 0 ?
						'Default: '+JSON.stringify( defaultValue, null, 2 )+'.' :
						'Default: none.'
					}
				</Col>
			</FormGroup>;
			controls.push( elem );
		}
		return controls;
	}

	render() {
		return (
			<Modal
				onHide={this.clickHide}
				show={this.props.show}
				bsSize="large"
			>
				<Modal.Header closeButton>
					<Modal.Title>Configure Component</Modal.Title>
				</Modal.Header>
				<Modal.Body style={{ height: '300px' }}>
					<FormGroup style={{ height: '280px', width: '58%', float: 'left', overflowY: 'scroll' }}>
						{this.renderPropertyControls()}
					</FormGroup>
					<FormGroup style={{ width: '40%', float: 'right' }}>
						<ControlLabel>Code:</ControlLabel>
						<FormControl
							componentClass="textarea"
							rows={10}
							value={this.state.value}
							onChange={this.handleChange}
							style={{ resize: 'none' }}
						/>
						<Button
							bsStyle="primary" block
							onClick={this.handleReset}
						>Reset</Button>
					</FormGroup>
				</Modal.Body>
				<Modal.Footer>
					<Button
						block bsStyle="success"
						onClick={this.handleClick}
					>Insert</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}


// PROPERTY TYPES //

ComponentConfigurator.propTypes = {
	name: PropTypes.string,
	onHide: PropTypes.func,
	onInsert: PropTypes.func,
	scope: PropTypes.object,
	show: PropTypes.bool.isRequired
};

ComponentConfigurator.defaultProps = {
	name: null,
	onHide() {},
	onInsert() {},
	scope: {}
};


// EXPORTS //

export default ComponentConfigurator;
