// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import axios from 'axios';
import VoiceControl from 'components/internal/voice-control';
import SessionContext from 'session/context.js';
import Description from './description.js';
import Location from './location.js';
import './weather.css';


// VARIABLES //

const debug = logger( 'isle:weather' );
const VOICE_COMMANDS = [
	{
		command: 'trigger',
		trigger: [ 'in' ],
		description: 'Location name',
		text: true
	},
	{
		command: 'reset',
		trigger: [ 'close' ],
		description: 'Close weather modal window'
	}
];


// MAIN //

/**
* A component for displaying the current weather at a designated location.
*
* @property {string} location - location name
* @property {string} language - language identifier
* @property {string} voiceID - voice control identifier
* @property {Object} style - CSS inline styles
*/
class Weather extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			data: null,
			temperature: 'celsius'
		};
	}

	componentDidMount() {
		this.getData( this.props.location );
		if ( this.props.voiceID ) {
			this.register();
		}
	}

	register = () => {
		const session = this.context;
		session.speechInterface.register({
			name: this.props.voiceID,
			ref: this,
			commands: VOICE_COMMANDS
		});
	}

	reset = () => {
		this.setState({
			data: null
		});
	}

	trigger = ( text, callback ) => {
		debug( 'Trigger weather retrieveal...' );
		if ( callback ) {
			this.callback = callback;
		} else {
			this.callback = null;
		}
		let marker = 'in';
		switch ( this.props.language ) {
		case 'en-US':
			marker= ' in';
			break;
		case 'de-DE':
			marker= ' in';
			break;
		case 'fr-FR':
			marker = ' à';
			break;
		}
		let n = text.search( marker );
		n += ( marker.length + 1 );
		if ( n !== -1 ) {
			let location = text.substring( n, text.length );
			debug( 'Get weather info for location: '+ location );
			this.getData( location );
		}
	}

	getData = ( location ) => {
		const session = this.context;
		if ( location && session.server ) {
			axios.get( `${session.server}/apixu_weather?location=${location}` )
				.then( response => {
					this.setWeatherData( response.data );
				})
				.catch( ( err ) => {
					debug( 'Encountered an error: '+err.message );
				});
		}
	}

	setWeatherData = ( data ) => {
		if ( this.callback ) {
			this.callback( data );
		}
		this.setState({
			data: data
		});
	}

	changeTemperatureType = () => {
		const temperature = this.state.temperature === 'celsius' ?
			'fahrenheit' :
			'celsius';
		this.setState({
			temperature
		});
	}

	renderTemperature( current ) {
		let label;
		let type;
		if ( this.state.temperature === 'celsius' ) {
			label = current.temp_c;
			type = 'C';
		} else {
			label = current.temp_f;
			type = 'F';
		}
		return (
			<div className="weather-temperature">{label}°
				<span
					role="button"
					onClick={this.changeTemperatureType}
					onKeyPress={this.changeTemperatureType}
					className="weather-temperature-type"
					tabIndex={0}
				>{type}</span>
			</div>
		);
	}

	renderWind( current ) {
		let content;
		if ( this.state.temperature === 'celsius' ) {
			content = `wind: ${current.wind_kph} kmh / ${current.wind_dir}`;
		} else {
			content = `wind: ${current.wind_mph} mph / ${current.wind_dir}`;
		}
		return <div className="weather-wind">{content}</div>;
	}

	renderPrecipitation( current ) {
		return (
			<div className="weather-wind">
				precipitation: {this.state.temperature === 'celsius' ?
					current.precip_mm + ' mm':
					current.precip_in + ' in'
				}
			</div>
		);
	}

	renderDetails( current ) {
		return (
			<div className="weather-details">
				<div className="weather-humidity">
					humidity: {current.humidity}%
				</div>
				{this.renderWind( current )}
				{this.renderPrecipitation( current )}
			</div>
		);
	}

	render() {
		let voice = null;
		if ( this.props.voiceID ) {
			voice = <VoiceControl
				id={this.props.voiceID}
				reference={this}
				commands={VOICE_COMMANDS}
			/>;
		}
		if ( !this.state.data ) {
			return voice;
		}
		let current = this.state.data.current;
		return (
			<div className="weather" style={this.props.style} >
				{voice}
				<Location {...this.state.data.location} />
				<Description {...current} />
				<br />
				{this.renderTemperature(current)}
				{this.renderDetails(current)}
			</div>
		);
	}
}


// PROPERTIES //

Weather.propTypes = {
	language: PropTypes.string,
	location: PropTypes.string,
	voiceID: PropTypes.string,
	style: PropTypes.object
};

Weather.defaultProps = {
	language: 'en-US',
	location: null,
	voiceID: null,
	style: {}
};

Weather.contextType = SessionContext;


// EXPORTS //

export default Weather;
