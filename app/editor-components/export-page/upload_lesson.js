// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';
import { resolve } from 'url';
import https from 'https';
import http from 'http';
import os from 'os';
import qs from 'querystring';
import FormData from 'form-data';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import randomstring from 'utils/randomstring/ascii';
import contains from '@stdlib/assert/contains';
import replace from '@stdlib/string/replace';
import endsWith from '@stdlib/string/ends-with';
import removeLast from '@stdlib/string/remove-last';
import bundler from 'bundler';
import CheckboxInput from 'components/input/checkbox';
import Spinner from 'components/internal/spinner';
import KeyControls from 'components/key-controls';


// VARIABLES //

const ELECTRON_REGEXP = /node_modules[\\/]electron[\\/]dist/;
const IS_PACKAGED = !( ELECTRON_REGEXP.test( process.resourcesPath ) );
const debug = logger( 'isle-editor:export-page' );


// MAIN //

class UploadLesson extends Component {
	constructor( props ) {
		super( props );

		const lessonName = props.fileName ? replace( props.fileName, /.[^.]*$/, '' ) : '';

		// Initialize state variables...
		this.state = {
			error: null,
			spinning: false,
			namespaces: [],
			minify: true,
			loadFromCDN: true,
			lessonName,
			dirname: randomstring( 16, 65, 90 ),
			server: localStorage.getItem( 'server' ),
			token: localStorage.getItem( 'token' ),
			showResponseModal: false,
			showConfirmModal: false,
			invalidLessonName: false
		};
	}

	componentDidMount() {
		if ( this.state.token ) {
			fetch( this.state.server+'/get_namespaces', {
				headers: {
					'Authorization': 'JWT ' + this.state.token
				}
			})
			.then( res => res.json() )
			.then( body => {
				debug( 'Received namespaces...' );
				this.setState({
					namespaces: body.namespaces
				}, () => {
					if (
						this.state.namespaces.length > 0 &&
						(
							!this.props.namespaceName ||
							this.state.namespaces.filter( x => x.title === this.props.namespaceName ).length === 0
						)
					) {
						this.props.changeNamespace( this.state.namespaces[ 0 ].title );
					}
				});
			})
			.catch( error => {
				debug( 'Encountered an error: '+error.message );
				return this.setState({
					error
				});
			});
		}
	}

	handleLessonChange = ( event ) => {
		const lessonName = event.target.value;
		this.setState({
			lessonName,
			invalidLessonName: contains( lessonName, ' ' )
		});
	}

	handleSelectChange = ( event ) => {
		debug( 'Change the selected namespace...' );
		const target = event.target;
		const value = target.value;
		debug( 'The selected namespace is: ' + value );
		this.props.changeNamespace( value );
	}

	closeResponseModal = () => {
		this.setState({
			showResponseModal: false
		});
	}

	closeConfirmModal = () => {
		this.setState({
			showConfirmModal: false
		});
	}

	zipLesson = ( outputPath, outputDir, clbk ) => {
		let output = createWriteStream( join( outputPath, outputDir+'.zip' ) );
		import( 'archiver' ).then( main => {
			const archiver = main.default;
			let archive = archiver( 'zip', {
				store: true
			});
			output.on( 'close', function onClose() {
				debug( archive.pointer() + ' total bytes' );
				debug( 'archiver has been finalized and the output file descriptor has closed.' );
				clbk();
			});
			archive.on( 'error', ( error ) => {
				return this.setState({
					error
				});
			});
			archive.pipe( output );
			archive.directory( join( outputPath, outputDir ), '/' );
			archive.finalize();
		});
	};

	upstreamData = ({ outputPath, outputDir }) => {
		let { lessonName } = this.state;
		let { namespaceName } = this.props;

		debug( 'Sending POST request to create lesson...' );
		const form = new FormData();
		form.append( 'namespaceName', namespaceName );
		form.append( 'lessonName', lessonName );
		const zipPath = join( outputPath, outputDir+'.zip' );
		form.append( 'zipped', createReadStream( zipPath ) );

		const headers = form.getHeaders();
		headers[ 'Authorization' ] = 'JWT ' + this.state.token;

		const options = {
			method: 'post',
			path: '/create_lesson',
			headers: headers
		};
		let request;
		const re = /^https?:\/\/([^:]+):?([0-9]{0,5})/i;
		const matches = this.state.server.match( re );
		debug( 'Matches %s', matches );
		options.host = matches[ 1 ];
		if ( endsWith( options.host, '/' ) ) {
			options.host = removeLast( options.host );
		}
		if ( matches[ 2 ]) {
			options.port = matches[ 2 ];
		}
		if ( contains( this.state.server, 'https' ) ) {
			options.rejectUnauthorized = false;
			request = https.request( options );
		} else {
			request = http.request( options );
		}
		form.pipe( request );

		request.on( 'response', ( res ) => {
			if ( res.statusCode === 200 ) {
				const lessonLink = resolve( this.state.server, namespaceName + '/' + lessonName );
				const msg = <span>
					The lesson has been uploaded successfully and can be accessed at the following address: <a href={lessonLink}>{lessonLink}</a>
				</span>;
				this.setState({
					spinning: false,
					showResponseModal: true,
					modalMessage: msg,
					dirname: randomstring( 16, 65, 90 )
				});
			} else {
				const msg = 'Operation not successful. Message: '+res.statusMessage+' (status code: '+res.statusCode+')';
				this.setState({
					error: new Error( msg )
				});
			}
		});
		request.on( 'error', ( error ) => {
			debug( 'Encountered error: ' + error.message );
			this.setState({ error });
		});
	}

	checkLesson = () => {
		const form = {
			namespaceName: this.props.namespaceName,
			lessonName: this.state.lessonName
		};
		const query = qs.stringify( form );
		debug( 'Querystring: '+query );
		fetch( this.state.server + '/get_lesson?'+query )
			.then( res => {
				if ( res.status === 200 ) {
					return res.json();
				}
			})
			.then( body => {
				if ( body.lesson ) {
					this.setState({
						showConfirmModal: true
					});
				} else {
					// Lesson does not exist:
					this.publishLesson();
				}
			})
			.catch( error => {
				return this.setState({ error });
			});
	}

	publishLesson = () => {
		this.setState({
			spinning: true,
			error: null
		});
		const settings = {
			outputPath: os.tmpdir(),
			filePath: this.props.filePath,
			basePath: IS_PACKAGED ? process.resourcesPath : '.',
			content: this.props.content,
			outputDir: this.state.dirname,
			minify: this.state.minify,
			loadFromCDN: this.state.loadFromCDN
		};
		bundler( settings, ( error ) => {
			if ( error ) {
				return this.setState({
					error,
					spinning: false,
					dirname: randomstring( 16, 65, 90 )
				});
			}
			debug( 'Lesson successfully bundled...' );
			this.zipLesson( settings.outputPath, settings.outputDir, () => {
				debug( 'Lesson successfully zipped...' );
				this.upstreamData( settings );
			});
		});
	}

	renderResponseModal = () => {
		return (
			<Modal show={this.state.showResponseModal} onHide={this.closeResponseModal}>
				<Modal.Header closeButton>
					<Modal.Title>Server Response</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{this.state.modalMessage}
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.closeResponseModal}>Close</Button>
				</Modal.Footer>
			</Modal>
		);
	}

	renderConfirmModal = () => {
		if ( !this.state.showConfirmModal ) {
			return null;
		}
		return (
			<Modal show={this.state.showConfirmModal}>
				<Modal.Header>
					<Modal.Title>Overwrite Lesson?</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					A lesson with the name <b>{this.state.lessonName}</b> is already present in the namespace. Please confirm that you wish to overwrite the lesson or cancel the upload procedure and choose a different name.
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.closeConfirmModal}>Cancel</Button>
					<Button variant="warning"
						onClick={() => {
							this.publishLesson();
							this.setState({
								showConfirmModal: false
							});
						}}
					>Overwrite</Button>
				</Modal.Footer>
				<KeyControls
					actions={{
						'Enter': () => {
							this.publishLesson();
							this.setState({
								showConfirmModal: false
							});
						},
						'Escape': () => {
							this.setState({
								showConfirmModal: false
							});
						}
					}}
				/>
			</Modal>
		);
	}

	renderProgress() {
		return ( <Fragment>
			<Spinner width={128} height={64} running={this.state.spinning} />
			{ this.state.error ? <Card bg="danger" text="white" >
				<Card.Header as="h5">
					Error encountered
				</Card.Header>
				<Card.Body>
					<p>{this.state.error.message}</p>
				</Card.Body>
			</Card> : null }
		</Fragment>);
	}

	handleKeyPress = ( event ) => {
		if (
			event.charCode === 13 && !this.state.spinning &&
			this.state.token && this.state.lessonName &&
			this.state.lessonName && !this.state.invalidLessonName
		) {
			this.checkLesson( event );
		}
	}

	renderUploadPanel = () => {
		let formGroups;
		if ( this.state.namespaces.length > 0 ) {
			formGroups = <Fragment>
				<FormGroup>
					<FormLabel>Select Course</FormLabel>
					<FormControl
						name="namespaceName"
						onChange={this.handleSelectChange}
						as="select"
						value={this.props.namespaceName}
						disabled={this.state.spinning}
					>
						{this.state.namespaces.map( ( ns, id ) =>
							<option key={id} value={ns.title}>{ns.title}</option>
						)}
					</FormControl>
				</FormGroup>
				<FormGroup
					controlId="lesson-name"
				>
					<FormLabel>Lesson Name</FormLabel>
					<FormControl
						name="lessonName"
						type="text"
						placeholder="Enter lesson name"
						onChange={this.handleLessonChange}
						value={this.state.lessonName}
						disabled={this.state.spinning}
						onKeyPress={this.handleKeyPress}
						isInvalid={this.state.invalidLessonName}
					/>
					<FormControl.Feedback type="invalid" >
						Please provide a lesson name of lowercase characters without spaces.
					</FormControl.Feedback>
				</FormGroup>
				<FormGroup>
					<FormLabel>Settings</FormLabel>
					<CheckboxInput
						legend="Minify code"
						tooltip="Disabling this option slightly reduces build time but results in more data to be downloaded by users"
						onChange={( value ) => {
							this.setState({
								minify: value
							});
						}}
						disabled={this.state.spinning}
						defaultValue={true}
					/>
					<CheckboxInput
						legend="Load ISLE resources from CDN"
						tooltip="WARNING: Disabling this option will massively increase upload time and bundle sizes"
						onChange={( value ) => {
							this.setState({
								loadFromCDN: value
							});
						}}
						defaultValue={this.state.loadFromCDN}
						disabled={this.state.spinning}
					/>
				</FormGroup>
			</Fragment>;
		} else {
			formGroups = <Card bg="danger" text="white">
				<Card.Header as="h5">
					No courses found
				</Card.Header>
				<Card.Body>
					Please create a course on the ISLE dashboard or request to be added as an owner to an existing course.
				</Card.Body>
			</Card>;
		}
		return (
			<Card border="primary">
				<Card.Header as="h5" className="unselectable" >
					Upload Lesson
				</Card.Header>
				<Card.Body>
					<p>Upload and deploy currently opened lesson directly to connected ISLE server.</p>
					{ this.state.token ?
						<Fragment>
							{formGroups}
							<Button
								variant="success"
								size="sm"
								block
								onClick={this.checkLesson}
								disabled={this.state.spinning || !this.state.token || !this.state.lessonName || this.state.invalidLessonName}
							>Upload</Button>
							<br />
							{this.renderProgress()}
						</Fragment>:
						<Card bg="warning" body >
							You need to connect the ISLE editor to an ISLE server under settings before you can upload lessons.
						</Card>
					}
				</Card.Body>
			</Card>
		);
	}

	render() {
		return (
			<Fragment>
				{this.renderUploadPanel()}
				{this.renderResponseModal()}
				{this.renderConfirmModal()}
			</Fragment>
		);
	}
}


// TYPES //

UploadLesson.defaultProps = {
	content: '',
	fileName: '',
	filePath: ''
};

UploadLesson.propTypes = {
	changeNamespace: PropTypes.func.isRequired,
	namespaceName: PropTypes.string.isRequired,
	content: PropTypes.string,
	fileName: PropTypes.string,
	filePath: PropTypes.string
};


// EXPORTS //

export default UploadLesson;
