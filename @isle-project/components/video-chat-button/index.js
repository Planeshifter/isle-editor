// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Video' );


// MAIN //

const VideoChatButton = Loadable( () => import( /* webpackChunkName: "VideoChatButton" */ './main.js' ) );


// EXPORTS //

export default VideoChatButton;
