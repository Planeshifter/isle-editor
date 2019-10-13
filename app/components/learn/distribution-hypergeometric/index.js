// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { VictoryAxis, VictoryChart, VictoryBar, VictoryLine, VictoryTheme } from 'victory';
import roundn from '@stdlib/math/base/special/roundn';
import incrspace from '@stdlib/math/utils/incrspace';
import dhypergeom from '@stdlib/stats/base/dists/hypergeometric/pmf';
import phypergeom from '@stdlib/stats/base/dists/hypergeometric/cdf';
import FeedbackButtons from 'components/feedback';
import NumberInput from 'components/input/number';
import SliderInput from 'components/input/slider';
import Panel from 'components/panel';
import TeX from 'components/tex';


// MAIN //

/**
* A learning component for calculating probabilities of a hypergeometric distribution.
*
* @property {number} step - step size of the scroll input
* @property {Object} style - CSS inline styles
*/
class HypergeometricProbs extends Component {
	constructor( props ) {
		super( props );

		const N = 10;
		const K = 5;
		const n = 2;
		const x = incrspace( 0, n+1, 1 );
		const data = new Array( x.length );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dhypergeom( x[ i ], N, K, n )
			};
		}
		this.state = {
			N, K, n, x0: 0, x1: 1, data
		};
	}

	handlePopSizeChange = ( N ) => {
		const x = incrspace( 0, this.state.n+1, 1 );
		const data = new Array( x.length );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dhypergeom( x[ i ], N, this.state.K, this.state.n )
			};
		}
		this.setState({ data, N });
	}

	handleSuccessesChange = ( K ) => {
		const x = incrspace( 0, this.state.n+1, 1 );
		const data = new Array( x.length );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dhypergeom( x[ i ], this.state.N, K, this.state.n )
			};
		}
		this.setState({ data, K });
	}

	handleDrawsChange = ( n ) => {
		const x = incrspace( 0, n+1, 1 );
		const data = new Array( x.length );
		for ( let i = 0; i < x.length; i++ ) {
			data[ i ] = {
				x: x[ i ],
				y: dhypergeom( x[ i ], this.state.N, this.state.K, n )
			};
		}
		this.setState({ data, n });
	}

	handleLowerChange = ( x0 ) => {
		this.setState({ x0 });
	}

	handleUpperChange = ( x1 ) => {
		this.setState({ x1 });
	}

	renderInputs( type) {
		return (
			<Fragment>
				<NumberInput
					key={`${type}-N`}
					legend="Population size"
					defaultValue={this.state.N}
					min={1}
					step={1}
					onChange={this.handlePopSizeChange}
				/>
				<NumberInput
					key={`${type}-K`}
					legend="Number of successes"
					defaultValue={this.state.K}
					step={1}
					onChange={this.handleSuccessesChange}
					min={0}
					max={this.state.N}
				/>
				<NumberInput
					key={`${type}-n`}
					legend="Number of draws / trials"
					defaultValue={this.state.n}
					step={1}
					min={0}
					max={this.state.N}
					onChange={this.handleDrawsChange}
				/>
				<SliderInput
					key={`${type}-x0`}
					legend="x0"
					defaultValue={this.state.x0}
					step={1}
					min={0}
					max={this.state.n+1}
					onChange={this.handleLowerChange}
				/>
				{ type === 'range' ?
					<SliderInput
						legend="x1"
						defaultValue={this.state.x1}
						min={0}
						max={this.state.n+1}
						step={1}
						onChange={this.handleUpperChange}
					/> : null
				}
			</Fragment>
		);
	}

	render() {
		const { x0, x1, N, K, n } = this.state;
		return ( <Card style={{ maxWidth: 1200, margin: '0 auto', ...this.props.style }}>
			<Card.Header as="h3">
				Hypergeometric Distribution
			</Card.Header>
			<Card.Body>
				<Tabs defaultActiveKey={0} id="hypergeometric-tabs">
					<Tab eventKey={0} title={<TeX raw="P(X = x)" />}>
						<Container>
							<Row>
								<Col md={5} >
								<Panel title="Hypergeometric probabilities">
									<span>For population size </span><NumberInput
										inline
										legend="N"
										defaultValue={N}
										step={1}
										min={0}
										max={999}
										onChange={this.handlePopSizeChange}
									/><span>, number of successes</span>
									<NumberInput
										inline
										legend="r"
										defaultValue={K}
										step={1}
										max={N}
										min={0}
										onChange={this.handleSuccessesChange}
									/>
									<span>and number of draws</span>
									<NumberInput
										inline
										legend="n"
										defaultValue={this.state.n}
										step={1}
										min={0}
										max={N}
										onChange={this.handleDrawsChange}
									/>
									<span>we get</span>
									<TeX raw={`P(X=x)= \\Large {{r \\choose x}{{ N-r \\choose {n-x}}} \\over {N \\choose n}} = \\Large {{${K} \\choose x}{{${N-K} \\choose {${n}-x}}} \\over {${N} \\choose ${n}}}`} displayMode />
									<span>Evaluated at </span><NumberInput
										inline
										legend="x"
										defaultValue={0}
										step={1}
										max={n+1}
										min={0}
										onChange={this.handleLowerChange}
									/> <span>we get</span>
									<TeX raw={`P(X=x)= \\Large {{${K} \\choose ${x0}}{{${N-K} \\choose {${n}-${x0}}}} \\over {${N} \\choose ${n}}} \\approx ${dhypergeom(x0, N, K, n).toFixed(4)}`} displayMode />
								</Panel>
								</Col>
								<Col md={7} >
									<Panel header="Probability Plot">
										<Row>
											<Col md={6} >
												<VictoryChart theme={VictoryTheme.material}>
												<VictoryAxis dependentAxis />
												<VictoryAxis
													label="PMF" tickFormat={(x) => roundn(x, -2)}
													style={{ axisLabel: { padding: 40 }}}
												/>
												<VictoryBar
													data={this.state.data}
													style={{
														data: {
															fill: data => ( data.x === x0 ) ? 'tomato' : 'steelblue'
														}
													}}
												/>
												</VictoryChart>
											</Col>
											<Col md={6} >
												<VictoryChart theme={VictoryTheme.material} >
													<VictoryAxis dependentAxis />
													<VictoryAxis
														label="CDF" tickFormat={(x) => `${x}`} crossAxis={false}
														style={{ axisLabel: { padding: 40 }}}
													/>
													<VictoryLine
														samples={600}
														y={( data ) => {
															return phypergeom( data.x, N, K, n );
														}}
														domain={{
															x: [ 0, n+1 ],
															y: [ 0, 1.1 ]
														}}
													/>
													<VictoryLine
														data={[
															{ x: x0, y: 0 },
															{ x: x0, y: phypergeom( x0, N, K, n ) }
														]}
														style={{
															data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
														}}
													/>
													<VictoryLine
														data={[
															{ x: 0, y: phypergeom( x0, N, K, n ) },
															{ x: x0, y: phypergeom( x0, N, K, n ) }
														]}
														style={{
															data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
														}}
													/>
												</VictoryChart>
											</Col>
										</Row>
									</Panel>
								</Col>
							</Row>
						</Container>
					</Tab>
					<Tab eventKey={1} title={<TeX raw="P(X \le x_0)" />}>
						<Container>
							<Row>
								<Col md={4} >
									<Panel>
										{this.renderInputs( 'smaller' )}
										<TeX raw={`P(X \\le${roundn( x0, -4 )}) = ${roundn( phypergeom( x0, N, K, n ), -4 )}`} displayMode tag="" />
									</Panel>
								</Col>
								<Col md={8} >
									<Panel header="Probability Plot">
										<Row>
											<Col md={6} >
												<VictoryChart theme={VictoryTheme.material}>
													<VictoryAxis dependentAxis />
													<VictoryAxis
														label="PMF" tickFormat={(x) => `${x}`}
														style={{ axisLabel: { padding: 40 }}}
													/>
													<VictoryBar
														data={this.state.data}
														style={{
															data: {
																fill: data => ( data.x <= x0 ) ? 'tomato' : 'steelblue'
															}
														}}
													/>
												</VictoryChart>
											</Col>
											<Col md={6} >
												<VictoryChart theme={VictoryTheme.material} >
													<VictoryAxis dependentAxis />
													<VictoryAxis
														label="CDF" tickFormat={(x) => `${x}`}
														style={{ axisLabel: { padding: 40 }}}
													/>
													<VictoryLine
														samples={600}
														y={( data ) => {
															return phypergeom( data.x, N, K, n );
														}}
														domain={{
															x: [ 0, n+1 ],
															y: [ 0, 1.1 ]
														}}
													/>
													<VictoryLine
														data={[
															{ x: x0, y: 0 },
															{ x: x0, y: phypergeom( x0, N, K, n ) }
														]}
														style={{
															data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
														}}
													/>
													<VictoryLine
														data={[
															{ x: 0, y: phypergeom( x0, N, K, n ) },
															{ x: x0, y: phypergeom( x0, N, K, n ) }
														]}
														style={{
															data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
														}}
													/>
												</VictoryChart>
											</Col>
										</Row>
									</Panel>
								</Col>
							</Row>
						</Container>
					</Tab>
					<Tab eventKey={2} title={<TeX raw="P(X > x_0)" />}>
						<Container>
							<Row>
								<Col md={4} >
									<Panel>
										{this.renderInputs( 'greater' )}
										<TeX raw={`P(X >${roundn( x0, -4 )}) = ${roundn( 1.0 - phypergeom( x0, N, K, n ), -4 )}`} displayMode tag="" />
									</Panel>
								</Col>
								<Col md={8} >
									<Panel header="Probability Plot">
										<Row>
											<Col md={6} >
												<VictoryChart theme={VictoryTheme.material}>
													<VictoryAxis dependentAxis />
													<VictoryAxis
														label="PMF" tickFormat={(x) => `${x}`}
														style={{ axisLabel: { padding: 40 }}}
													/>
													<VictoryBar
														data={this.state.data}
														style={{
															data: {
																fill: data => ( data.x > this.state.x0 ) ? 'tomato' : 'steelblue'
															}
														}}
													/>
												</VictoryChart>
											</Col>
											<Col md={6} >
												<VictoryChart theme={VictoryTheme.material} >
													<VictoryAxis dependentAxis />
													<VictoryAxis
														label="CDF" tickFormat={(x) => `${x}`}
														style={{ axisLabel: { padding: 40 }}}
													/>
													<VictoryLine
														samples={600}
														y={( data ) => {
															return phypergeom( data.x, N, K, n );
														}}
														domain={{
															x: [ 0, n+1 ],
															y: [ 0, 1.1 ]
														}}
													/>
													<VictoryLine
														data={[
															{ x: x0, y: 0 },
															{ x: x0, y: phypergeom( x0, N, K, n ) }
														]}
														style={{
															data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
														}}
													/>
													<VictoryLine
														data={[
															{ x: 0, y: phypergeom( x0, N, K, n ) },
															{ x: x0, y: phypergeom( x0, N, K, n ) }
														]}
														style={{
															data: { stroke: '#e95f46', strokeWidth: 1, opacity: 0.5 }
														}}
													/>
												</VictoryChart>
											</Col>
										</Row>
									</Panel>
								</Col>
							</Row>
						</Container>
					</Tab>
					<Tab eventKey={3} title={<TeX raw="P( x_0 \le X \le x_1)" />}>
						<Container>
							<Row>
								<Col md={4} >
									<Panel>
										{this.renderInputs( 'range' )}
										{ x1 >= x0 ?
											<TeX raw={`P(${roundn( x0, -4 )} \\le X \\le ${roundn( x1, -4 )}) = ${roundn( phypergeom( x1, N, K, n ) - phypergeom( x0 - 1, N, K, n ), -4 )}`} displayMode tag="" /> :
											<Alert variant="warning">Lower bound must be smaller than or equal to upper bound.</Alert>
										}
									</Panel>
								</Col>
								<Col md={8} >
									<Panel header="Probability Plot">
										<Row>
											<Col md={6} >
												<VictoryChart theme={VictoryTheme.material}>
													<VictoryAxis dependentAxis />
													<VictoryAxis
														label="PMF" tickFormat={(x) => `${x}`}
														style={{ axisLabel: { padding: 40 }}}
													/>
													<VictoryBar
														data={this.state.data}
														style={{
															data: {
																fill: data => ( this.state.x0 <= data.x && data.x <= this.state.x1 ) ? 'tomato' : 'steelblue'
															}
														}}
													/>
												</VictoryChart>
											</Col>
											<Col md={6} >
												<VictoryChart theme={VictoryTheme.material} >
													<VictoryAxis dependentAxis />
													<VictoryAxis
														label="CDF" tickFormat={(x) => `${x}`}
														style={{ axisLabel: { padding: 40 }}}
													/>
													<VictoryLine
														samples={600}
														y={( data ) => {
															return phypergeom( data.x, N, K, n );
														}}
														domain={{
															x: [ 0, n+1 ],
															y: [ 0, 1.1 ]
														}}
													/>
												</VictoryChart>
											</Col>
										</Row>
									</Panel>
								</Col>
							</Row>
						</Container>
					</Tab>
				</Tabs>
				<FeedbackButtons
					id="hypergeometric_distribution"
				/>
			</Card.Body>
		</Card> );
	}
}


// PROPERTIES //

HypergeometricProbs.propTypes = {
	style: PropTypes.object
};

HypergeometricProbs.defaultProps = {
	style: {}
};


// EXPORTS //

export default HypergeometricProbs;
