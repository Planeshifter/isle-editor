// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import Spinner from '@isle-project/components/internal/spinner';
import createPrependCode from '@isle-project/components/r/utils/create-prepend-code';
import SessionContext from '@isle-project/session/context.js';


// FUNCTIONS //

const showResult = ( res ) => {
	if ( res ) {
		let sanitized = {
			__html: DOMPurify.sanitize( res )
		};
		// eslint-disable-next-line react/no-danger
		return <pre id="output"><span dangerouslySetInnerHTML={sanitized} /></pre>;
	}
	return <span />;
};


// MAIN //

/**
* Component for rendering R output inside an ISLE lesson.
*
* @property {string} code - R code used to evaluate
* @property {Array<string>} libraries - R libraries that should be loaded automatically when the input `code` is executed
* @property {(string|Array<string>)} prependCode - R code (or `array` of code blocks) to be prepended to the code stored in `code` when evaluating
* @property {Function} onResult - callback invoked with `error` (`null` if operation was successful) and `result` holding R output
* @property {Function} onPlots - callback invoked with any generated plots
*/
class ROutput extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			result: null,
			running: false,
			last: ''
		};
	}

	componentDidMount() {
		this.getResult( this.props );
	}

	componentDidUpdate() {
		this.getResult( this.props );
	}

	getResult = ( nextProps ) => {
		let code;
		if ( nextProps ) {
			code = nextProps.code;
		} else {
			code = this.props.code;
		}
		if ( code !== this.state.last ) {
			this.setState({
				last: this.props.code,
				running: true
			});

			const session = this.context;
			const prependCode = createPrependCode( this.props.libraries, this.props.prependCode, session );
			const fullCode = prependCode + code;
			session.executeRCode({
				code: fullCode,
				onError: ( error ) => {
					this.setState({
						result: error,
						running: false
					});
					this.props.onResult( error );
				},
				onPlots: this.props.onPlots,
				onResult: ( err, res, body ) => {
					this.setState({
						result: body,
						running: false
					});
					this.props.onResult( err, body );
				}
			});
		}
	}

	render() {
		return (
			<span className="ROutput">
				{ this.state.result ?
					<div
						style={{
							marginLeft: 'auto',
							marginRight: 'auto',
							marginTop: '10px',
							marginBottom: '10px'
						}}
					>
						<Spinner
							width={128}
							height={64}
							style={{
								marginTop: '8px',
								marginBottom: '-12px'
							}}
							running={this.state.running}
						/>
						{ !this.state.running ?
							showResult( this.state.result ) :
							<span />
						}
					</div> :
					<span />
				}
			</span>
		);
	}
}


// PROPERTIES //

ROutput.propTypes = {
	code: PropTypes.string,
	libraries: PropTypes.array,
	prependCode: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array
	]),
	onPlots: PropTypes.func,
	onResult: PropTypes.func
};

ROutput.defaultProps = {
	code: '',
	libraries: [],
	prependCode: '',
	onPlots() {},
	onResult() {}
};

ROutput.contextType = SessionContext;


// EXPORTS //

export default ROutput;
