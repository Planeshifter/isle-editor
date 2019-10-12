// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import BinTransformer from './bin_transformer.js';
import FormulaTransformer from './formula_transformer.js';
import CategoricalModal from './categorical_transformer.js';


// MAIN //

class Transformer extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			formulaModalActive: false,
			binModalActive: false,
			categoricalModalActive: false
		};
	}

	renderFormulaModal = () => {
		if ( !this.state.formulaModalActive || !this.props.data ) {
			return null;
		}
		return (
			<FormulaTransformer
				show={this.state.formulaModalActive}
				onHide={this.toggleFormulaModal}
				categorical={this.props.categorical}
				quantitative={this.props.quantitative}
				data={this.props.data}
				defaultCode={this.props.defaultCode}
				logAction={this.props.logAction}
				onGenerate={this.props.onGenerate}
				session={this.props.session}
			/>
		);
	}

	renderBinModal = () => {
		if ( !this.state.binModalActive || !this.props.data ) {
			return null;
		}
		return (
			<BinTransformer
				show={this.state.binModalActive}
				onHide={this.toggleBinModal}
				quantitative={this.props.quantitative}
				logAction={this.props.logAction}
				onGenerate={this.props.onGenerate}
				data={this.props.data}
			/>
		);
	}

	renderCategoricalModal = () => {
		if ( !this.state.categoricalModalActive || !this.props.data ) {
			return null;
		}
		return (
			<CategoricalModal
				show={this.state.categoricalModalActive}
				onHide={this.toggleCategoricalModal}
				categorical={this.props.categorical}
				logAction={this.props.logAction}
				onGenerate={this.props.onGenerate}
				data={this.props.data}
			/>
		);
	}

	toggleFormulaModal = () => {
		this.setState({
			formulaModalActive: !this.state.formulaModalActive
		});
	}

	toggleBinModal = () => {
		this.setState({
			binModalActive: !this.state.binModalActive
		});
	}

	toggleCategoricalModal = () => {
		this.setState({
			categoricalModalActive: !this.state.categoricalModalActive
		});
	}

	render() {
		return (
			<div className="well" style={{ padding: 15, margin: 15 }} >
				<div>
					<Button
						onClick={this.toggleFormulaModal}
						variant="primary"
						size="large"
						block
					>
						Interactions, Transformations (e.g., sqrt), Functions
					</Button>
				</div>
				<div>
					<Button
						onClick={this.toggleBinModal}
						variant="primary"
						size="large"
						block
					>
						Bin quantitative variables into categorical
					</Button>
				</div>
				<div>
					<Button
						onClick={this.toggleCategoricalModal}
						variant="primary"
						size="large"
						block
					>
						Rename or combine categories
					</Button>
				</div>
				{this.renderBinModal()}
				{this.renderFormulaModal()}
				{this.renderCategoricalModal()}
			</div>
		);
	}
}


// PROPERTIES //

Transformer.defaultProps = {
	logAction() {},
	onGenerate() {},
	defaultCode: '',
	session: {}
};

Transformer.propTypes = {
	categorical: PropTypes.array.isRequired,
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	defaultCode: PropTypes.string,
	logAction: PropTypes.func,
	onGenerate: PropTypes.func,
	session: PropTypes.object
};


// EXPORTS //

export default Transformer;
