// MODULES //

import path from 'path';
import fs from 'fs';
import windowStateKeeper from 'electron-window-state';
import { shell } from 'electron';
import logger from 'debug';
import window from './window_manager.js';


// VARIABLES //

const debug = logger( 'isle-editor' );


// MAIN //

function createWindow( filePath, callback ) {
	/* eslint-disable no-process-env */
	debug( `Should create the browser window for file ${filePath}.` );

	const mainWindowState = windowStateKeeper({
		defaultWidth: 1000,
		defaultHeight: 800
	});

	const mainWindow = window.createWindow({
		x: mainWindowState.x,
		y: mainWindowState.y,
		width: mainWindowState.width,
		height: mainWindowState.height
	});

	let indexPath;
	if ( process.env.NODE_ENV === 'development' ) {
		indexPath = path.resolve( __dirname, '..', 'app.html' );
	} else if ( process.env.NODE_ENV === 'production' ) {
		indexPath = path.resolve( __dirname, 'app', 'app.html' );
	}
	mainWindow.showUrl( indexPath, () => {
		debug( 'Open file: ' + filePath );
		if ( filePath ) {
			fs.readFile( filePath, 'utf-8', ( err, file ) => {
				console.log( err );
				if ( err ) {
					return console.error( `Encountered an error: ${err.message}` ); // eslint-disable-line no-console
				}
				mainWindow.webContents.send( 'file-loaded', {
					file,
					fileName: path.basename( filePath ),
					filePath
				});
				mainWindow.setTitle( 'ISLE Editor -- ' + filePath );
			});
		} else {
			mainWindow.setTitle( 'ISLE Editor -- Untitled Document' );
		}
		if ( callback ) {
			return callback( mainWindow );
		}
	});

	mainWindowState.manage( mainWindow );

	function openExternal( e, url ) {
		e.preventDefault();
		shell.openExternal( url );
	}
	mainWindow.webContents.on( 'new-window', openExternal );
	mainWindow.webContents.on( 'will-navigate', openExternal );
	return mainWindow;
}


// EXPORTS //

export default createWindow;
