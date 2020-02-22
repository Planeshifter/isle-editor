// MODULES //

import { hot } from 'react-hot-loader/root';
import React from 'react';
import { createHashHistory } from 'history';
import Root from 'editor-containers/root';
import configureStore from 'store/configure_store.js';
import configureIpcRenderer from './configure_ipc_renderer.js';
import './app.global.css';


// VARIABLES //

const history = createHashHistory();
const store = configureStore();
configureIpcRenderer( store );


// MAIN //

const App = () => <Root store={store} history={history} />;


// EXPORTS //

export default hot( App );
