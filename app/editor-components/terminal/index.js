// MODULES //

import React, { Component } from 'react';
import os from 'os';
import { dirname } from 'path';
import PropTypes from 'prop-types';
import logger from 'debug';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import { WebLinksAddon } from 'xterm-addon-web-links';
import { SearchAddon } from 'xterm-addon-search';
import IS_WINDOWS from '@stdlib/assert/is-windows';
const pty = require( 'node-pty' );
import './terminal.css';


// VARIABLES //

const debug = logger( 'isle-editor:terminal' );


// FUNCTIONS //

function calculateColumns( width, fontSize ) {
	return width / ( 0.79 * fontSize );
}

function calculateRows( height, fontSize ) {
	if ( height < 17 ) {
		height = 17;
	}
	return height / ( 1.1 * fontSize );
}


// MAIN //

class TerminalWrapper extends Component {
	constructor( props ) {
		super( props );
		this.searchAddon = new SearchAddon();
		this.linksAddon = new WebLinksAddon();
		this.fitAddon = new FitAddon();
	}

	componentDidMount() {
		this.xterm = new Terminal({
			fontSize: this.props.fontSize,
			lineHeight: 1,
			scrollback: 500,
			cursorStyle: 'block',
			windowsMode: IS_WINDOWS,
			theme: {
				background: 'gainsboro',
				foreground: 'darkslategrey',
				black: '#000000',
				blue: '#0a2fc4',
				brightBlack: '#686868',
				brightBlue: '#6a76fb',
				brightCoral: '#f08080',
				brightCyan: '#68fdfe',
				brightGreen: '#5acc60',
				brightMagenta: '#Fd7cfc',
				brightRed: '#fd6f6b',
				brightWhite: '#ffffff',
				brightYellow: '#fffa72',
				cyan: '#20c5c6',
				green: '#169e19',
				magenta: '#c839c5',
				red: '#c51e14',
				white: '#c7c7c7',
				yellow: '#c7c329'
			}
		});
		this.xterm.loadAddon( this.fitAddon );
		this.xterm.loadAddon( this.linksAddon );
		this.xterm.open( this.terminal );
		this.fitAddon.fit();
		this.createShell();
		this.xterm.onData( ( data ) => {
			this.ptyProcess.write( data );
		});
	}

	componentDidUpdate( prevProps ) {
		if ( this.props.fontSize !== prevProps.fontSize ) {
			this.xterm.setOption( 'fontSize', this.props.fontSize );
		}
		if (
			this.props.width !== prevProps.width ||
			this.props.height !== prevProps.height ||
			this.props.fontSize !== prevProps.fontSize
		) {
			this.fitAddon.fit();
			this.ptyProcess.resize(
				calculateColumns( this.props.width, this.props.fontSize ),
				calculateRows( this.props.height, this.props.fontSize )
			);
		}
		if ( this.props.height !== prevProps.height ) {
			this.fitAddon.fit();
		}
		if ( this.props.filePath !== prevProps.filePath ) {
			this.createShell();
		}
	}

	createShell() {
		const shell = process.env[ os.platform() === 'win32' ? 'COMSPEC' : 'SHELL']; // eslint-disable-line no-process-env
		let dir;
		if ( this.props.filePath ) {
			dir = dirname( this.props.filePath );
		} else {
			dir = os.homedir();
		}
		debug( `Open ${dir} directory in shell...` );
		this.ptyProcess = pty.spawn( shell, [], {
			name: 'xterm-color',
			cols: calculateColumns( this.props.width, this.props.fontSize ),
			rows: calculateRows( this.props.height, this.props.fontSize ),
			cwd: dir,
			env: process.env // eslint-disable-line no-process-env
		});
		this.ptyProcess.on( 'data', ( data ) => {
			this.xterm.write( data );
		});
	}

	render() {
		return (
			<div className="terminal-wrapper"
				style={{
					pointerEvents: this.props.height < 17 ? 'none' : 'all',
					opacity: this.props.height < 17 ? 0.0 : 1.0
				}}
			>
				<div
					className="terminal"
					style={{
						height: this.props.height,
						width: '100%'
					}}
					ref={( div ) => {
						this.terminal = div;
					}}
				></div>
			</div>
		);
	}
}


// PROPERTIES //

TerminalWrapper.propTypes = {
	fontSize: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired
};


// EXPORTS //

export default TerminalWrapper;
