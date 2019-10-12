// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';
import FormGroup from 'react-bootstrap/FormGroup';
import FormText from 'react-bootstrap/FormText';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import TextArea from 'components/input/text-area';
import incrspace from '@stdlib/math/utils/incrspace';
import contains from '@stdlib/assert/contains';
import replace from '@stdlib/string/replace';
import { DATA_EXPLORER_VARIABLE_TRANSFORMER } from 'constants/actions.js';
import valuesFromFormula from './values_from_formula.js';
import FUNCTION_KEYS from './function_keys.json';
import './formula_transformer.css';


// VARIABLES //

const DIGITS = incrspace( 0, 10, 1 );
const RE_LAST_EXPRESSION = /(?:^|\n)([^\n]*)$/;


// FUNCTIONS //

class CustomMenu extends Component {
	constructor( props, context ) {
		super( props, context );

		this.state = {
			value: ''
		};
	}

	handleChange = ( e ) => {
		this.setState({ value: e.target.value.toLowerCase().trim() });
	}

	render() {
		const {
			children,
			style,
			className,
			'aria-labelledby': labeledBy
		} = this.props;
		const { value } = this.state;
		return (
		<div style={style} className={className} aria-labelledby={labeledBy}>
			<FormControl
				className="mx-3 my-2 w-auto"
				placeholder="Type to filter..."
				onChange={this.handleChange}
				value={value}
			/>
			<ul className="list-unstyled">
			{React.Children.toArray( children )
				.filter( ( child, idx ) => {
					return child.props.children.toLowerCase().startsWith( value );
				})
			}
			</ul>
		</div>
		);
	}
}


// MAIN //

class FormulaTransformer extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			code: props.defaultCode,
			selection: null,
			name: ''
		};
	}

	handleGenerate = () => {
		let { code, name } = this.state;
		if ( !contains( code, 'return ' ) ) {
			code = replace( code, RE_LAST_EXPRESSION, '\nreturn $1' );
		}
		let values;
		try {
			values = valuesFromFormula( code, this.props.data );
			this.props.logAction( DATA_EXPLORER_VARIABLE_TRANSFORMER, {
				code, name
			});
			this.props.onGenerate( name, values );
		} catch ( err ) {
			return this.props.session.addNotification({
				title: 'Errored',
				message: 'Encountered the following error: '+err.message,
				level: 'error',
				position: 'tr'
			});
		}
		this.props.onHide();
	}

	handleNameChange = ( event ) => {
		this.setState({
			name: event.target.value
		});
	}

	handleCodeChange = ( value ) => {
		this.setState({
			code: value
		});
	}

	insertVarFactory = ( name ) => {
		return () => {
			let newCode = this.state.code.substring( 0, this.state.selection );
			let replacement = 'datum';
			const literal = !contains( name, ' ' ) && !contains( name, '.' );
			replacement += literal ? `.${name}` : `['${name}']`;
			newCode += replacement;
			newCode += this.state.code.substring( this.state.selection );
			this.setState({
				code: newCode,
				selection: this.state.selection + replacement.length
			});
		};
	}

	insertLiteralFactory = ( operator ) => {
		return () => {
			let newCode = this.state.code.substring( 0, this.state.selection );
			const replacement = operator;
			newCode += replacement;
			newCode += this.state.code.substring( this.state.selection );
			this.setState({
				code: newCode,
				selection: this.state.selection + replacement.length
			});
		};
	}

	insertFuncFactory = ( funcName ) => {
		return () => {
			let newCode = this.state.code.substring( 0, this.state.selection );
			const replacement = ' '+funcName+'()';
			newCode += replacement;
			newCode += this.state.code.substring( this.state.selection );
			this.setState({
				code: newCode,
				selection: this.state.selection + replacement.length - 1
			});
		};
	}

	render() {
		const continousItems = this.props.quantitative.map( ( v, i ) => {
			return <Dropdown.Item key={i} onClick={this.insertVarFactory( v )} eventKey={i}>{v}</Dropdown.Item>;
		});
		return (
			<Modal
				show={this.props.show}
				onHide={this.props.onHide}
				dialogClassName='modal-75w input'
			>
				<Modal.Header closeButton>
					<Modal.Title>Create a new variable as a function of existing variables</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="formula-transformer-body">
						<Card className="mb-2" >
							<Card.Body>
								<p></p>
								<ButtonToolbar style={{ marginBottom: 5 }} >
									<Dropdown className="mr-2">
										<Dropdown.Toggle variant="light" as={Button} id="dropdown-custom-components">
											Quantitative
										</Dropdown.Toggle>
										<Dropdown.Menu variant="light" as={CustomMenu} id="bg-nested-dropdown">
											{continousItems}
										</Dropdown.Menu>
									</Dropdown>
									<Dropdown className="mr-2">
										<Dropdown.Toggle variant="light" as={Button} id="dropdown-custom-components">
											Categorical
										</Dropdown.Toggle>
										<Dropdown.Menu variant="light" as={CustomMenu} id="bg-nested-dropdown">
											{this.props.categorical.map( ( v, i ) => {
												return <Dropdown.Item key={i} onClick={this.insertVarFactory( v )} eventKey={i}>{v}</Dropdown.Item>;
											})}
										</Dropdown.Menu>
									</Dropdown>
									<ButtonGroup size="sm" className="mr-2" >
										<Button variant="light" onClick={this.insertLiteralFactory(' < ')} >{'<'}</Button>
										<Button variant="light" onClick={this.insertLiteralFactory(' > ')} >{'>'}</Button>
										<Button variant="light" onClick={this.insertLiteralFactory(' <= ')} >{'<='}</Button>
										<Button variant="light" onClick={this.insertLiteralFactory(' >= ')} >{'>='}</Button>
									</ButtonGroup>
									<ButtonGroup size="sm" className="mr-2" >
										<Button variant="light" onClick={this.insertLiteralFactory(' ( ')} >(</Button>
										<Button variant="light" onClick={this.insertLiteralFactory(' ) ')} >)</Button>
									</ButtonGroup>
									<ButtonGroup size="sm" className="mr-2" >
										<Button variant="light" onClick={this.insertLiteralFactory(' + ')} >+</Button>
										<Button variant="light" onClick={this.insertLiteralFactory(' - ')} >-</Button>
										<Button variant="light" onClick={this.insertLiteralFactory(' * ')} >*</Button>
										<Button variant="light" onClick={this.insertLiteralFactory(' / ')} >/</Button>
									</ButtonGroup>
								</ButtonToolbar>
								<ButtonToolbar style={{ marginBottom: 5 }} >
									<ButtonGroup size="sm" className="mr-2" >
										<Button variant="light" onClick={this.insertLiteralFactory(' && ')} >and</Button>
										<Button variant="light" onClick={this.insertLiteralFactory(' || ')} >or</Button>
										<Button variant="light" onClick={this.insertLiteralFactory(' !')} >not</Button>
									</ButtonGroup>
									<ButtonGroup size="sm" className="mr-2" >
										{DIGITS.map( ( d, i ) => {
											return <Button key={i} variant="light" onClick={this.insertLiteralFactory( `${d}`)} >{d}</Button>;
										})}
										<Button variant="light" onClick={this.insertLiteralFactory('.')} >.</Button>
									</ButtonGroup>
									<ButtonGroup>
										{FUNCTION_KEYS.map( ( v, i ) => {
											return <Button key={i} variant="light" onClick={this.insertFuncFactory( v )} eventKey={i}>{v}</Button>;
										})}
									</ButtonGroup>
								</ButtonToolbar>
							</Card.Body>
						</Card>
						<Card className="mb-2" >
							<Card.Body>
								<TextArea
									ref={div => { this.textarea = div; }}
									legend="Expression:"
									placeholder="Enter formula..."
									value={this.state.code}
									onChange={this.handleCodeChange}
									onBlur={( event ) => {
										const selectionStart = event.target.selectionStart;
										this.setState({
											selection: selectionStart
										});
									}}
									rows={3}
								/>
							</Card.Body>
						</Card>
						<FormGroup style={{ margin: 8 }}>
							<FormLabel>Name of new variable:</FormLabel>
							<FormControl
								type="text"
								placeholder="Select name..."
								onChange={this.handleNameChange}
							/>
							<FormText>
								The new variable will be appended as a new column to the data table.
							</FormText>
						</FormGroup>
					</div>
				</Modal.Body>
				<Modal.Footer style={{ justifyContent: 'center' }} >
					<Button onClick={this.handleGenerate} disabled={this.state.name.length < 2} >Create new variable</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}


// PROPERTIES //

FormulaTransformer.defaultProps = {
	logAction() {},
	onGenerate() {},
	defaultCode: '',
	session: {}
};

FormulaTransformer.propTypes = {
	show: PropTypes.bool.isRequired,
	categorical: PropTypes.array.isRequired,
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	defaultCode: PropTypes.string,
	logAction: PropTypes.func,
	onGenerate: PropTypes.func,
	onHide: PropTypes.func.isRequired,
	session: PropTypes.object
};


// EXPORTS //

export default FormulaTransformer;
