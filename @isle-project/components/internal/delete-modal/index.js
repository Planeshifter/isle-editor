// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'DeleteModal' );


// MAIN //

const DeleteModal = Loadable( () => import( /* webpackChunkName: "DeleteModal" */ './main.js' ) );


// EXPORTS //

export default DeleteModal;
