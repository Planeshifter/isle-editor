// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DataTable from 'components/data-table';
import Spinner from 'components/spinner';
import createPrependCode from 'components/r/utils/create-prepend-code';
import { SessionContext } from 'session';


// MAIN //

/**
* Component for rendering a R data frame or matrix in a tabular display.
*
* @property {string} code - R code returning a data.frame containing the data to be displayed in the table
* @property {Array<string>} libraries - R libraries that should be loaded automatically when the input `code` is executed
* @property {(string|Array<string>)} prependCode - R code `string` (or `array` of R code blocks) to be prepended to the code stored in `code` when evaluating
* @property {number} width - width (between 0 and 1)
*/
class RTable extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			data: null,
			last: '',
			waiting: false
		};
	}

	componentDidMount() {
		this.getTable();
	}

	componentDidUpdate() {
		this.getTable( this.props );
	}

	getTable = ( nextProps ) => {
		let code;
		if ( nextProps ) {
			code = nextProps.code;
		} else {
			code = this.props.code;
		}
		if ( code !== this.state.last ) {
			this.setState({
				waiting: true,
				last: this.props.code
			});
			const session = this.context;
			let { libraries, prependCode } = this.props;
			let jsonCode = 'library( jsonlite );\n';
			prependCode = createPrependCode( libraries, prependCode, session );

			jsonCode = jsonCode +
				prependCode +
				code.replace( /\n\s*([ A-Z0-9._():=]+)\n*$/i, '\n toJSON($1)' );

			session.executeRCode({
				code: jsonCode,
				onResult: ( err, res, body ) => {
					this.setState({
						data: JSON.parse( body ),
						waiting: false
					});
				}
			});
		}
	}

	render() {
		const props = this.props;
		return (
			<div className="rtable" >
				<Spinner running={this.state.waiting} width={256} height={128} />
				{ this.state.data && !this.state.waiting ?
					<div
						style={{
							marginTop: '10px',
							marginBottom: '10px'
						}}
					>
						<DataTable data={this.state.data} width={`${props.width * 100}%`} />
					</div> :
					<span />
				}
			</div>
		);
	}
}


// PROPERTIES //

RTable.propTypes = {
	code: PropTypes.string,
	libraries: PropTypes.array,
	prependCode: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array
	]),
	width: PropTypes.number
};

RTable.defaultProps = {
	code: '',
	width: 0.5,
	libraries: [],
	prependCode: ''
};

RTable.contextType = SessionContext;


// EXPORTS //

export default RTable;
