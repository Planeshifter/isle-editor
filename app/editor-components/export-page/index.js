// MODULES //

import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Loadable from '@isle-project/components/internal/loadable';
const ExportLesson = Loadable( () => import( './export_lesson.js' ) );
const UploadLesson = Loadable( () => import( './upload_lesson.js' ) );
import './export_page.css';


// MAIN //

class ExportPage extends Component {
	constructor( props ) {
		super( props );
	}
	render() {
		return (
			<div className="export-page">
				<Container>
					<Row>
						<Col md={4} >
							<UploadLesson {...this.props} />
						</Col>
						<Col md={2} >
							<h1 style={{ textAlign: 'center' }}> OR </h1>
						</Col>
						<Col md={6} >
							<ExportLesson {...this.props} />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}


// EXPORTS //

export default ExportPage;
