// MODULES //

import Loadable from 'components/internal/loadable';


// MAIN //

const TimedButton = Loadable( () => import( /* webpackChunkName: "TimedButton" */ './main.js' ) );


// EXPORTS //

export default TimedButton;
