(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{4477:function(t,e,n){"use strict";n.r(e);n(437),n(433),n(425),n(424),n(434),n(411),n(403),n(415);var r=n(400),o=n.n(r),c=n(407),u=n.n(c),i=n(410),s=n.n(i),a=n(420),l=n.n(a),f=n(413),p=n.n(f),d=n(414),v=n.n(d),b=n(412),h=n.n(b),y=n(404),O=n.n(y),j=n(0),m=n.n(j),g=n(4125),w=(n(396),n(428)),P=n(465),F=n(672),R=n(489),D=n(698),E=n(418);function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(Object(n),!0).forEach((function(e){O()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var o=h()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v()(this,n)}}Object(E.a)("FullscreenButton");var C=o()("span",{className:"fa fa-window-maximize"}),B=function(t){p()(n,t);var e=k(n);function n(){var t;return u()(this,n),t=e.call(this),O()(l()(t),"toggleFullscreen",(function(){t.setState({fullscreen:!t.state.fullscreen})})),t.state={fullscreen:!1},t}return s()(n,[{key:"render",value:function(){return o()(j.Fragment,{},void 0,m.a.createElement(D.a,this.props,o()(R.a,{id:"fullscreen_tooltip",placement:"bottom",tooltip:this.props.t("fullscreen-tooltip")},void 0,o()(w.a,{variant:"outline-secondary",size:"sm",onClick:this.toggleFullscreen,style:N({position:"absolute",top:0,right:0,fontSize:12},this.props.style)},void 0,C))),this.state.fullscreen?o()(F.a,{show:this.state.fullscreen,onHide:this.toggleFullscreen,dialogClassName:"modal-100w"},void 0,o()(F.a.Header,{closeButton:!0},void 0,o()(F.a.Title,{as:"h1"},void 0,this.props.header||this.props.t("fullscreen-header"))),o()(F.a.Body,{style:{height:.75*window.innerHeight}},void 0,this.props.wrapInCard?o()(P.a,{body:!0,className:"".concat(this.props.className," panel-fullscreen-view")},void 0,this.props.body):this.props.body),o()(F.a.Footer,{},void 0,this.props.footer,o()(w.a,{onClick:this.toggleFullscreen},void 0,this.props.t("close")))):null)}}]),n}(j.Component);B.defaultProps={className:"",header:null,wrapInCard:!0,style:{}},e.default=Object(g.a)("FullscreenButton")(B)},501:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function o(t,e){return r(t.querySelectorAll(e))}},610:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(0);function o(){return Object(r.useState)(null)}},639:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(644),o=n(0),c=function(t){var e;return"undefined"==typeof document?null:null==t?Object(r.a)().body:("function"==typeof t&&(t=t()),t&&"current"in t&&(t=t.current),(null==(e=t)?void 0:e.nodeType)&&t||null)};function u(t,e){var n=Object(o.useState)((function(){return c(t)})),r=n[0],u=n[1];if(!r){var i=c(t);i&&u(i)}return Object(o.useEffect)((function(){e&&r&&e(r)}),[e,r]),Object(o.useEffect)((function(){var e=c(t);e!==r&&u(e)}),[t,r]),r}},703:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(0);function o(t){var e,n,o=(e=t,(n=Object(r.useRef)(e)).current=e,n);Object(r.useEffect)((function(){return function(){return o.current()}}),[])}},716:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(0);function o(){var t=Object(r.useRef)(!0),e=Object(r.useRef)((function(){return t.current}));return Object(r.useEffect)((function(){return function(){t.current=!1}}),[]),e.current}},717:function(t,e,n){"use strict";function r(t,e){return t.contains?t.contains(e):t.compareDocumentPosition?t===e||!!(16&t.compareDocumentPosition(e)):void 0}n.d(e,"a",(function(){return r}))},808:function(t,e,n){"use strict";function r(t,e){return t.classList?!!e&&t.classList.contains(e):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")}n.d(e,"a",(function(){return r}))},809:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(0);function o(t){var e=Object(r.useRef)(null);return Object(r.useEffect)((function(){e.current=t})),e.current}}}]);