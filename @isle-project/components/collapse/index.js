// MODULES //

import Loadable from '@isle-project/components/internal/loadable';


// MAIN //

const Collapse = Loadable( () => import( /* webpackChunkName: "Collapse" */ './main.js' ) );


// EXPORTS //

export default Collapse;
