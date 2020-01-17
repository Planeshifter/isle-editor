'use strict';

// MODULES //

const path = require( 'path' );
const { spawn } = require( 'child_process' );
const fs = require( 'fs' );
const replace = require( '@stdlib/string/replace' );


// VARIABLES //

const RE_NODE_MODULE = /^[\s\S]*?\/node_modules\/([\s\S]+$)/;
const pkgPath = path.join( __dirname, '..', 'package.json' );
const pkg = require( pkgPath );


// MAIN //

const extraResources = [
	'app/css/*',
	'app/constants/*',
	'app/components/**/*',
	'app/session/*',
	'app/speech-interface/*',
	'app/utils/**/*',
	'app/img/*',
	'app/bundler/index.html',
	'app/bundler/minify.js',
	'node_modules/**/*',
	'!node_modules/@stdlib/**/*',
	'!node_modules/@stdlib/stdlib/**/*',
	'!node_modules/.cache/**/*',
	'!node_modules/@icons/**/*'
];
const DEV_DEPS = new Set();
const listDevDeps = spawn( 'npm', [ 'ls', '--only=dev', '--parseable' ] );

listDevDeps.stdout.on( 'data', ( data ) => {
	const lines = data.toString().split( '\n' );
	for ( let i = 1; i < lines.length - 1; i++ ) {
		DEV_DEPS.add( lines[ i ] );
	}
});

listDevDeps.stdout.on( 'close', ( code ) => {
	console.log( `npm ls --dev exited with code ${code}` );
	console.log( `The isle-editor has ${DEV_DEPS.size} development dependencies.` );

	const listProdDeps = spawn( 'npm', [ 'ls', '--only=prod', '--parseable' ]);
	listProdDeps.stdout.on( 'data', ( data ) => {
		const lines = data.toString().split( '\n' );
		for ( let i = 1; i < lines.length - 1; i++ ) {
			const val = lines[ i ];
			if ( DEV_DEPS.has( val ) ) {
				DEV_DEPS.delete( val );
			}
		}
	});

	listProdDeps.stdout.on( 'close', ( code ) => {
		console.log( `npm ls --prod exited with code ${code}` );
		console.log( `The isle-editor has ${DEV_DEPS.size} development dependencies that are not also used by production dependencies.` );

		DEV_DEPS.forEach( ( value ) => {
			const ignorePattern = replace( value, RE_NODE_MODULE, '!node_modules/$1/**/*' );
			extraResources.push( ignorePattern );
		});

		pkg.build.extraResources = extraResources;

		fs.writeFileSync( pkgPath, JSON.stringify( pkg, null, 2 ) );
	});
});
