// MODULES //

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExportPage from 'editor-components/export-page';
import { convertMarkdown, toggleScrolling, changeNamespace } from 'actions';


// MAIN //

class Export extends Component {
	render() {
		return (
			<ExportPage
				content={this.props.markdown}
				filePath={this.props.filePath}
				fileName={this.props.fileName}
				namespaceName={this.props.namespaceName}
				changeNamespace={this.props.changeNamespace}
			/>
		);
	}
}

// TYPES //

Export.propTypes = {
	fileName: PropTypes.string,
	filePath: PropTypes.string,
	markdown: PropTypes.string,
	namespaceName: PropTypes.string
};

Export.defaultProps = {
	fileName: null,
	filePath: null,
	markdown: '',
	namespaceName: null
};


// EXPORTS //

export default connect( mapStateToProps, {
	convertMarkdown,
	toggleScrolling,
	changeNamespace
})( Export );

function mapStateToProps({ markdown }) {
	return markdown;
}
