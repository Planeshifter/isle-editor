// MODULES //

import * as actions from './../actions';


// EXPORTS //

export default {
	label: 'Help',
	submenu: [
		{
			label: 'Report issue',
			accelerator: '',
			click: () => {
				actions.openBrowser( 'https://github.com/isle-project/isle-editor/issues/new' );
			}
		},
		{
			label: 'Search issues',
			accelerator: '',
			click: () => {
				actions.openBrowser( 'https://github.com/isle-project/isle-editor/issues' );
			}
		}
	]
};
