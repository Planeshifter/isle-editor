(window.webpackJsonp=window.webpackJsonp||[]).push([[697],{1397:function(e,t,n){"use strict";n.d(t,"a",(function(){return ee})),n.d(t,"b",(function(){return ie})),n.d(t,"c",(function(){return F}));n(421);var o=n(414),i=n.n(o),r=n(416),s=n.n(r),a=n(424),u=n.n(a),l=n(418),c=n.n(l),d=n(419),p=n.n(d),f=n(417),h=n.n(f),v=n(412),m=n.n(v),b=(n(627),n(0)),y=n.n(b),g=n(404),M=n.n(g),C=n(409),w=n.n(C);n(468),n(869),n(76);function k(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return"function"==typeof e&&e.apply(void 0,n)}function O(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var R="react-contextmenu",E="react-contextmenu--visible",T="react-contextmenu-wrapper",x="react-contextmenu-item",S="react-contextmenu-item--active",I="react-contextmenu-item--disabled",H="react-contextmenu-item--divider",L="react-contextmenu-item--selected",N="react-contextmenu-submenu",D={},P=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement),B="REACT_CONTEXTMENU_SHOW",j="REACT_CONTEXTMENU_HIDE";function U(e,t){var n,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window;"function"==typeof window.CustomEvent?n=new window.CustomEvent(e,{detail:t}):(n=document.createEvent("CustomEvent")).initCustomEvent(e,!1,!0,t),o&&(o.dispatchEvent(n),Object.assign(D,t))}function K(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;U(B,Object.assign({},e,{type:B}),t)}function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;U(j,Object.assign({},e,{type:j}),t)}var W=new function e(){var t=this;i()(this,e),m()(this,"handleShowEvent",(function(e){for(var n in t.callbacks)O(t.callbacks,n)&&t.callbacks[n].show(e)})),m()(this,"handleHideEvent",(function(e){for(var n in t.callbacks)O(t.callbacks,n)&&t.callbacks[n].hide(e)})),m()(this,"register",(function(e,n){var o=Math.random().toString(36).substring(7);return t.callbacks[o]={show:e,hide:n},o})),m()(this,"unregister",(function(e){e&&t.callbacks[e]&&delete t.callbacks[e]})),this.callbacks={},P&&(window.addEventListener(B,this.handleShowEvent),window.addEventListener(j,this.handleHideEvent))},_=(n(428),n(489)),A=n.n(_);function X(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=h()(e);if(t){var i=h()(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return p()(this,n)}}var q=function(e){c()(n,e);var t=X(n);function n(){var e;i()(this,n);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return e=t.call.apply(t,[this].concat(r)),m()(u()(e),"handleClick",(function(t){0!==t.button&&1!==t.button&&t.preventDefault(),e.props.disabled||e.props.divider||(k(e.props.onClick,t,Object.assign({},e.props.data,D.data),D.target),e.props.preventClose||V())})),e}return s()(n,[{key:"render",value:function(){var e,t=this,n=this.props,o=n.attributes,i=n.children,r=n.className,s=n.disabled,a=n.divider,u=n.selected,l=w()(r,x,o.className,(e={},m()(e,w()(I,o.disabledClassName),s),m()(e,w()(H,o.dividerClassName),a),m()(e,w()(L,o.selectedClassName),u),e));return y.a.createElement("div",A()({},o,{className:l,role:"menuitem",tabIndex:"-1","aria-disabled":s?"true":"false",ref:function(e){t.ref=e},onMouseMove:this.props.onMouseMove,onMouseLeave:this.props.onMouseLeave,onTouchEnd:this.handleClick,onClick:this.handleClick}),a?null:i)}}]),n}(b.Component);m()(q,"defaultProps",{attributes:{},children:null,className:"",data:{},disabled:!1,divider:!1,onClick:function(){return null},onMouseMove:function(){return null},onMouseLeave:function(){return null},preventClose:!1,selected:!1});var F=q;function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=h()(e);if(t){var i=h()(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return p()(this,n)}}var Y=function(e){c()(n,e);var t=z(n);function n(e){var o;return i()(this,n),o=t.call(this,e),m()(u()(o),"handleKeyNavigation",(function(e){if(!1!==o.state.isVisible)switch(e.keyCode){case 37:case 27:e.preventDefault(),o.hideMenu(e);break;case 38:e.preventDefault(),o.selectChildren(!0);break;case 40:e.preventDefault(),o.selectChildren(!1);break;case 39:o.tryToOpenSubMenu(e);break;case 13:e.preventDefault(),o.tryToOpenSubMenu(e);var t=o.seletedItemRef&&o.seletedItemRef.props&&o.seletedItemRef.props.disabled;o.seletedItemRef&&o.seletedItemRef.ref instanceof HTMLElement&&!t?o.seletedItemRef.ref.click():o.hideMenu(e)}})),m()(u()(o),"handleForceClose",(function(){o.setState({forceSubMenuOpen:!1})})),m()(u()(o),"tryToOpenSubMenu",(function(e){o.state.selectedItem&&o.state.selectedItem.type===o.getSubMenuType()&&(e.preventDefault(),o.setState({forceSubMenuOpen:!0}))})),m()(u()(o),"selectChildren",(function(e){var t=o.state.selectedItem,n=[],i=0,r={};if(y.a.Children.forEach(o.props.children,(function e(t,s){t&&([F,o.getSubMenuType()].indexOf(t.type)<0?y.a.Children.forEach(t.props?t.props.children:[],e):t.props.divider||(t.props.disabled&&(++i,r[s]=!0),n.push(t)))})),i!==n.length){var s=function(t){var o=t;do{e?--o:++o,o<0?o=n.length-1:o>=n.length&&(o=0)}while(o!==t&&r[o]);return o===t?null:o}(n.indexOf(t));null!==s&&o.setState({selectedItem:n[s],forceSubMenuOpen:!1})}})),m()(u()(o),"onChildMouseMove",(function(e){o.state.selectedItem!==e&&o.setState({selectedItem:e,forceSubMenuOpen:!1})})),m()(u()(o),"onChildMouseLeave",(function(){o.setState({selectedItem:null,forceSubMenuOpen:!1})})),m()(u()(o),"renderChildren",(function(e){return y.a.Children.map(e,(function(e){var t={};return y.a.isValidElement(e)?[F,o.getSubMenuType()].indexOf(e.type)<0?(t.children=o.renderChildren(e.props?e.props.children:[]),y.a.cloneElement(e,t)):(t.onMouseLeave=o.onChildMouseLeave.bind(u()(o)),e.type===o.getSubMenuType()&&(t.forceOpen=o.state.forceSubMenuOpen&&o.state.selectedItem===e,t.forceClose=o.handleForceClose,t.parentKeyNavigationHandler=o.handleKeyNavigation),e.props.divider||o.state.selectedItem!==e?(t.onMouseMove=function(){return o.onChildMouseMove(e)},y.a.cloneElement(e,t)):(t.selected=!0,t.ref=function(e){o.seletedItemRef=e},y.a.cloneElement(e,t))):e}))})),o.seletedItemRef=null,o.state={selectedItem:null,forceSubMenuOpen:!1},o}return n}(b.Component);function J(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=h()(e);if(t){var i=h()(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return p()(this,n)}}var G=function(e){c()(n,e);var t=J(n);function n(e){var o;return i()(this,n),o=t.call(this,e),m()(u()(o),"getMenuPosition",(function(){var e=window,t=e.innerWidth,n=e.innerHeight,i=o.subMenu.getBoundingClientRect(),r={};return i.bottom>n?r.bottom=0:r.top=0,i.right<t?r.left="100%":r.right="100%",r})),m()(u()(o),"getRTLMenuPosition",(function(){var e=window.innerHeight,t=o.subMenu.getBoundingClientRect(),n={};return t.bottom>e?n.bottom=0:n.top=0,t.left<0?n.left="100%":n.right="100%",n})),m()(u()(o),"hideMenu",(function(e){e.preventDefault(),o.hideSubMenu(e)})),m()(u()(o),"hideSubMenu",(function(e){e.detail&&e.detail.id&&o.menu&&e.detail.id!==o.menu.id||(o.props.forceOpen&&o.props.forceClose(),o.setState({visible:!1,selectedItem:null}),o.unregisterHandlers())})),m()(u()(o),"handleClick",(function(e){e.preventDefault(),o.props.disabled||(k(o.props.onClick,e,Object.assign({},o.props.data,D.data),D.target),o.props.onClick&&!o.props.preventCloseOnClick&&V())})),m()(u()(o),"handleMouseEnter",(function(){o.closetimer&&clearTimeout(o.closetimer),o.props.disabled||o.state.visible||(o.opentimer=setTimeout((function(){return o.setState({visible:!0,selectedItem:null})}),o.props.hoverDelay))})),m()(u()(o),"handleMouseLeave",(function(){o.opentimer&&clearTimeout(o.opentimer),o.state.visible&&(o.closetimer=setTimeout((function(){return o.setState({visible:!1,selectedItem:null})}),o.props.hoverDelay))})),m()(u()(o),"menuRef",(function(e){o.menu=e})),m()(u()(o),"subMenuRef",(function(e){o.subMenu=e})),m()(u()(o),"registerHandlers",(function(){document.removeEventListener("keydown",o.props.parentKeyNavigationHandler),document.addEventListener("keydown",o.handleKeyNavigation)})),m()(u()(o),"unregisterHandlers",(function(e){document.removeEventListener("keydown",o.handleKeyNavigation),e||document.addEventListener("keydown",o.props.parentKeyNavigationHandler)})),o.state=Object.assign({},o.state,{visible:!1}),o}return s()(n,[{key:"componentDidMount",value:function(){this.listenId=W.register((function(){}),this.hideSubMenu)}},{key:"getSubMenuType",value:function(){return n}},{key:"shouldComponentUpdate",value:function(e,t){return this.isVisibilityChange=!(this.state.visible===t.visible&&this.props.forceOpen===e.forceOpen||this.state.visible&&e.forceOpen||this.props.forceOpen&&t.visible),!0}},{key:"componentDidUpdate",value:function(){var e=this;if(this.isVisibilityChange)if(this.props.forceOpen||this.state.visible){(window.requestAnimationFrame||setTimeout)((function(){var t=e.props.rtl?e.getRTLMenuPosition():e.getMenuPosition();e.subMenu.style.removeProperty("top"),e.subMenu.style.removeProperty("bottom"),e.subMenu.style.removeProperty("left"),e.subMenu.style.removeProperty("right"),O(t,"top")&&(e.subMenu.style.top=t.top),O(t,"left")&&(e.subMenu.style.left=t.left),O(t,"bottom")&&(e.subMenu.style.bottom=t.bottom),O(t,"right")&&(e.subMenu.style.right=t.right),e.subMenu.classList.add(E),e.registerHandlers(),e.setState({selectedItem:null})}))}else{this.subMenu.addEventListener("transitionend",(function t(){e.subMenu.removeEventListener("transitionend",t),e.subMenu.style.removeProperty("bottom"),e.subMenu.style.removeProperty("right"),e.subMenu.style.top=0,e.subMenu.style.left="100%",e.unregisterHandlers()})),this.subMenu.classList.remove(E)}}},{key:"componentWillUnmount",value:function(){this.listenId&&W.unregister(this.listenId),this.opentimer&&clearTimeout(this.opentimer),this.closetimer&&clearTimeout(this.closetimer),this.unregisterHandlers(!0)}},{key:"render",value:function(){var e,t=this.props,n=t.children,o=t.attributes,i=t.disabled,r=t.title,s=t.selected,a=this.state.visible,u={ref:this.menuRef,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,className:w()(x,N,o.listClassName),style:{position:"relative"}},l={className:w()(x,o.className,(e={},m()(e,w()(I,o.disabledClassName),i),m()(e,w()(S,o.visibleClassName),a),m()(e,w()(L,o.selectedClassName),s),e)),onMouseMove:this.props.onMouseMove,onMouseOut:this.props.onMouseOut,onClick:this.handleClick},c={ref:this.subMenuRef,style:{position:"absolute",transition:"opacity 1ms",top:0,left:"100%"},className:w()(R,this.props.className)};return y.a.createElement("nav",A()({},u,{role:"menuitem",tabIndex:"-1","aria-haspopup":"true"}),y.a.createElement("div",A()({},o,l),r),y.a.createElement("nav",A()({},c,{role:"menu",tabIndex:"-1"}),this.renderChildren(n)))}}]),n}(Y);m()(G,"propTypes",{children:M.a.node.isRequired,attributes:M.a.object,title:M.a.node.isRequired,className:M.a.string,disabled:M.a.bool,hoverDelay:M.a.number,rtl:M.a.bool,selected:M.a.bool,onMouseMove:M.a.func,onMouseOut:M.a.func,forceOpen:M.a.bool,forceClose:M.a.func,parentKeyNavigationHandler:M.a.func}),m()(G,"defaultProps",{disabled:!1,hoverDelay:500,attributes:{},className:"",rtl:!1,selected:!1,onMouseMove:function(){return null},onMouseOut:function(){return null},forceOpen:!1,forceClose:function(){return null},parentKeyNavigationHandler:function(){return null}});var Q=G;function Z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=h()(e);if(t){var i=h()(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return p()(this,n)}}var $=function(e){c()(n,e);var t=Z(n);function n(e){var o;return i()(this,n),o=t.call(this,e),m()(u()(o),"registerHandlers",(function(){document.addEventListener("mousedown",o.handleOutsideClick),document.addEventListener("touchstart",o.handleOutsideClick),o.props.preventHideOnScroll||document.addEventListener("scroll",o.handleHide),o.props.preventHideOnContextMenu||document.addEventListener("contextmenu",o.handleHide),document.addEventListener("keydown",o.handleKeyNavigation),o.props.preventHideOnResize||window.addEventListener("resize",o.handleHide)})),m()(u()(o),"unregisterHandlers",(function(){document.removeEventListener("mousedown",o.handleOutsideClick),document.removeEventListener("touchstart",o.handleOutsideClick),document.removeEventListener("scroll",o.handleHide),document.removeEventListener("contextmenu",o.handleHide),document.removeEventListener("keydown",o.handleKeyNavigation),window.removeEventListener("resize",o.handleHide)})),m()(u()(o),"handleShow",(function(e){if(e.detail.id===o.props.id&&!o.state.isVisible){var t=e.detail.position,n=t.x,i=t.y;o.setState({isVisible:!0,x:n,y:i}),o.registerHandlers(),k(o.props.onShow,e)}})),m()(u()(o),"handleHide",(function(e){!o.state.isVisible||e.detail&&e.detail.id&&e.detail.id!==o.props.id||(o.unregisterHandlers(),o.setState({isVisible:!1,selectedItem:null,forceSubMenuOpen:!1}),k(o.props.onHide,e))})),m()(u()(o),"handleOutsideClick",(function(e){o.menu.contains(e.target)||V()})),m()(u()(o),"handleMouseLeave",(function(e){e.preventDefault(),k(o.props.onMouseLeave,e,Object.assign({},o.props.data,D.data),D.target),o.props.hideOnLeave&&V()})),m()(u()(o),"handleContextMenu",(function(e){e.preventDefault(),o.handleHide(e)})),m()(u()(o),"hideMenu",(function(e){27!==e.keyCode&&13!==e.keyCode||V()})),m()(u()(o),"getMenuPosition",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n={top:t,left:e};if(!o.menu)return n;var i=window,r=i.innerWidth,s=i.innerHeight,a=o.menu.getBoundingClientRect();return t+a.height>s&&(n.top-=a.height),e+a.width>r&&(n.left-=a.width),n.top<0&&(n.top=a.height<s?(s-a.height)/2:0),n.left<0&&(n.left=a.width<r?(r-a.width)/2:0),n})),m()(u()(o),"getRTLMenuPosition",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n={top:t,left:e};if(!o.menu)return n;var i=window,r=i.innerWidth,s=i.innerHeight,a=o.menu.getBoundingClientRect();return n.left=e-a.width,t+a.height>s&&(n.top-=a.height),n.left<0&&(n.left+=a.width),n.top<0&&(n.top=a.height<s?(s-a.height)/2:0),n.left+a.width>r&&(n.left=a.width<r?(r-a.width)/2:0),n})),m()(u()(o),"menuRef",(function(e){o.menu=e})),o.state=Object.assign({},o.state,{x:0,y:0,isVisible:!1}),o}return s()(n,[{key:"getSubMenuType",value:function(){return Q}},{key:"componentDidMount",value:function(){this.listenId=W.register(this.handleShow,this.handleHide)}},{key:"componentDidUpdate",value:function(){var e=this,t=window.requestAnimationFrame||setTimeout;this.state.isVisible?t((function(){var n=e.state,o=n.x,i=n.y,r=e.props.rtl?e.getRTLMenuPosition(o,i):e.getMenuPosition(o,i),s=r.top,a=r.left;t((function(){e.menu&&(e.menu.style.top="".concat(s,"px"),e.menu.style.left="".concat(a,"px"),e.menu.style.opacity=1,e.menu.style.pointerEvents="auto")}))})):t((function(){e.menu&&(e.menu.style.opacity=0,e.menu.style.pointerEvents="none")}))}},{key:"componentWillUnmount",value:function(){this.listenId&&W.unregister(this.listenId),this.unregisterHandlers()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,o=e.style,i=this.state.isVisible,r=Object.assign({},o,{position:"fixed",opacity:0,pointerEvents:"none"}),s=w()(R,n,m()({},E,i));return y.a.createElement("nav",{role:"menu",tabIndex:"-1",ref:this.menuRef,style:r,className:s,onContextMenu:this.handleContextMenu,onMouseLeave:this.handleMouseLeave},this.renderChildren(t))}}]),n}(Y);m()($,"propTypes",{id:M.a.string.isRequired,children:M.a.node.isRequired,data:M.a.object,className:M.a.string,hideOnLeave:M.a.bool,rtl:M.a.bool,onHide:M.a.func,onMouseLeave:M.a.func,onShow:M.a.func,preventHideOnContextMenu:M.a.bool,preventHideOnResize:M.a.bool,preventHideOnScroll:M.a.bool,style:M.a.object}),m()($,"defaultProps",{className:"",data:{},hideOnLeave:!1,rtl:!1,onHide:function(){return null},onMouseLeave:function(){return null},onShow:function(){return null},preventHideOnContextMenu:!1,preventHideOnResize:!1,preventHideOnScroll:!1,style:{}});var ee=$;function te(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=h()(e);if(t){var i=h()(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return p()(this,n)}}var ne=["input","textarea"],oe=function(e){c()(n,e);var t=te(n);function n(){var e;i()(this,n);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return e=t.call.apply(t,[this].concat(r)),m()(u()(e),"touchHandled",!1),m()(u()(e),"handleMouseDown",(function(t){e.props.holdToDisplay>=0&&0===t.button&&(t.persist(),t.stopPropagation(),e.mouseDownTimeoutId=setTimeout((function(){return e.handleContextClick(t)}),e.props.holdToDisplay)),k(e.props.attributes.onMouseDown,t)})),m()(u()(e),"handleMouseUp",(function(t){0===t.button&&clearTimeout(e.mouseDownTimeoutId),k(e.props.attributes.onMouseUp,t)})),m()(u()(e),"handleMouseOut",(function(t){0===t.button&&clearTimeout(e.mouseDownTimeoutId),k(e.props.attributes.onMouseOut,t)})),m()(u()(e),"handleTouchstart",(function(t){e.touchHandled=!1,e.props.holdToDisplay>=0&&(t.persist(),t.stopPropagation(),e.touchstartTimeoutId=setTimeout((function(){e.handleContextClick(t),e.touchHandled=!0}),e.props.holdToDisplay)),k(e.props.attributes.onTouchStart,t)})),m()(u()(e),"handleTouchEnd",(function(t){e.touchHandled&&t.preventDefault(),clearTimeout(e.touchstartTimeoutId),k(e.props.attributes.onTouchEnd,t)})),m()(u()(e),"handleContextMenu",(function(t){t.button===e.props.mouseButton&&e.handleContextClick(t),k(e.props.attributes.onContextMenu,t)})),m()(u()(e),"handleMouseClick",(function(t){t.button===e.props.mouseButton?e.handleContextClick(t):e.props.holdToDisplay>0&&V(),k(e.props.attributes.onClick,t)})),m()(u()(e),"handleContextClick",(function(t){if(!(e.props.disable||e.props.disableIfShiftIsPressed&&t.shiftKey)){var n=document.activeElement;if(!(n&&(-1!==ne.indexOf(n.tagName.toLowerCase())||n.isContentEditable))){t.preventDefault(),t.stopPropagation();var o=t.clientX||t.touches&&t.touches[0].pageX,i=t.clientY||t.touches&&t.touches[0].pageY;e.props.posX&&(o-=e.props.posX),e.props.posY&&(i-=e.props.posY),V();var r=k(e.props.collect,e.props),s={position:{x:o,y:i},target:e.elem,id:e.props.id};r&&"function"==typeof r.then?r.then((function(e){s.data=Object.assign({},e,{target:t.target}),K(s)})):(s.data=Object.assign({},r,{target:t.target}),K(s))}}})),m()(u()(e),"elemRef",(function(t){e.elem=t})),e}return s()(n,[{key:"render",value:function(){var e=this.props,t=e.renderTag,n=e.attributes,o=e.children,i=Object.assign({},n,{className:w()(T,n.className),onContextMenu:this.handleContextMenu,onClick:this.handleMouseClick,onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onTouchStart:this.handleTouchstart,onTouchEnd:this.handleTouchEnd,onMouseOut:this.handleMouseOut,ref:this.elemRef});return y.a.createElement(t,i,o)}}]),n}(b.Component);oe.defaultProps={attributes:{},collect:function(){return null},disable:!1,holdToDisplay:1e3,renderTag:"div",posX:0,posY:0,mouseButton:2,disableIfShiftIsPressed:!1};var ie=oe;n(634)},6466:function(e,t,n){"use strict";n.r(t);n(421);var o=n(407),i=n.n(o),r=n(414),s=n.n(r),a=n(416),u=n.n(a),l=n(418),c=n.n(l),d=n(419),p=n.n(d),f=n(417),h=n.n(f),v=n(0),m=(n(404),n(4101)),b=n(432),y=n(961),g=n.n(y),M=n(1397),C=n(459),w=n(424),k=n.n(w),O=n(412),R=n.n(O),E=n(450),T=n.n(E),x=n(458);function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=h()(e);if(t){var i=h()(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return p()(this,n)}}var I=T()("isle:link:contextmenu"),H=function(e){c()(n,e);var t=S(n);function n(e){var o;return s()(this,n),o=t.call(this,e),R()(k()(o),"copyToClipboard",(function(e){I("Copying selection to clipboard... "),navigator.clipboard.writeText(o.props.url)})),R()(k()(o),"textToSpeech",(function(){var e=o.props.url,t=o.props.session,n=new SpeechSynthesisUtterance(e);n.lang=t.config.language||"en-US",window.speechSynthesis.speak(n)})),R()(k()(o),"openInTab",(function(){var e=o.props.url;I("Open ".concat(e," in new tab")),window.open(e,"_blank"),o.props.session.log({id:e,type:x.Ib,value:"tab"})})),R()(k()(o),"openInWindow",(function(){var e=o.props.url;I("Open ".concat(e," in new window")),window.open(e,"_blank","location=no,scrollbars=yes,status=yes"),o.props.session.log({id:e,type:x.Ib,value:"window"})})),o}return u()(n,[{key:"render",value:function(){var e=[i()(M.c,{onClick:this.copyToClipboard},0,this.props.t("copy-link"))];return"_blank"===this.props.target?(e.push(i()(M.c,{onClick:this.openInTab},1,this.props.t("open-link-tab"))),e.push(i()(M.c,{onClick:this.openInWindow},2,this.props.t("open-link-window")))):e=[],e.push(i()(M.c,{onClick:this.textToSpeech},3,this.props.t("read-aloud"))),i()(M.a,{id:"".concat(this.props.url,"-context-menu")},void 0,e)}}]),n}(v.Component);H.defaultProps={url:""};var L=H,N=n(420);function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=h()(e);if(t){var i=h()(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return p()(this,n)}}Object(N.a)("Link");var P=function(e){c()(n,e);var t=D(n);function n(e){var o;return s()(this,n),(o=t.call(this,e)).state={url:null,href:null,target:e.target},o}return u()(n,[{key:"render",value:function(){var e=this;return i()(v.Fragment,{},void 0,i()(M.b,{holdToDisplay:-1,disableIfShiftIsPressed:!0,id:"".concat(this.state.url,"-context-menu"),renderTag:"span"},void 0,i()("a",{className:this.props.className,href:this.state.url,target:this.state.target,style:this.props.style,onClick:function(){e.context.log({id:e.state.url,type:x.Ib,value:"click"})}},void 0,this.props.children)),i()(L,{session:this.context,url:this.state.url,target:this.state.target,t:this.props.t}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.href!==t.href){var n={href:e.href};return!Object(b.isPrimitive)(e.href)||g()(e.href,"http")||g()(e.href,"mailto")||g()(e.href,"#")?(n.url=e.href,n.target=e.target):(n.url="http://"+e.href,n.target=e.target),n}return null}}]),n}(v.Component);P.defaultProps={target:"_blank",className:"",style:{}},P.contextType=C.a;t.default=Object(m.a)("Link")(P)},869:function(e,t,n){"use strict";n(896);var o=n(509),i=n(663),r=n(530),s="toString",a=/./.toString,u=function(e){n(562)(RegExp.prototype,s,e,!0)};n(510)((function(){return"/a/b"!=a.call({source:"a",flags:"b"})}))?u((function(){var e=o(this);return"/".concat(e.source,"/","flags"in e?e.flags:!r&&e instanceof RegExp?i.call(e):void 0)})):a.name!=s&&u((function(){return a.call(this)}))},896:function(e,t,n){n(530)&&"g"!=/./g.flags&&n(528).f(RegExp.prototype,"flags",{configurable:!0,get:n(663)})}}]);