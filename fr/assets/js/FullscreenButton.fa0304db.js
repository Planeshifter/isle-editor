(window.webpackJsonp=window.webpackJsonp||[]).push([[342],{422:function(e,t,r){"use strict";var n=r(406),o=r(408),a=r(409),s=r.n(a),c=r(0),i=r.n(c),l=r(411),u=r(470),p=i.a.forwardRef((function(e,t){var r=e.bsPrefix,a=e.variant,c=e.size,p=e.active,f=e.className,d=e.block,b=e.type,h=e.as,v=Object(o.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=Object(l.a)(r,"btn"),m=s()(f,y,p&&"active",a&&y+"-"+a,d&&y+"-block",c&&y+"-"+c);if(v.href)return i.a.createElement(u.a,Object(n.a)({},v,{as:h,ref:t,className:s()(m,v.disabled&&"disabled")}));t&&(v.ref=t),b?v.type=b:h||(v.type="button");var O=h||"button";return i.a.createElement(O,Object(n.a)({},v,{className:m}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=p},4438:function(e,t,r){"use strict";r.r(t);r(420),r(437),r(434),r(469),r(478),r(438);var n=r(407),o=r.n(n),a=r(414),s=r.n(a),c=r(415),i=r.n(c),l=r(424),u=r.n(l),p=r(417),f=r.n(p),d=r(418),b=r.n(d),h=r(416),v=r.n(h),y=r(412),m=r.n(y),O=r(0),w=r.n(O),g=r(4096),j=(r(404),r(422)),P=r(466),F=r(592),N=r(484),k=r(642),B=r(421);function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){m()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=v()(e);if(t){var o=v()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return b()(this,r)}}Object(B.a)("FullscreenButton");var z=o()("span",{className:"fa fa-window-maximize"}),S=function(e){f()(r,e);var t=E(r);function r(){var e;return s()(this,r),e=t.call(this),m()(u()(e),"toggleFullscreen",(function(){e.setState({fullscreen:!e.state.fullscreen})})),e.state={fullscreen:!1},e}return i()(r,[{key:"render",value:function(){return o()(O.Fragment,{},void 0,w.a.createElement(k.a,this.props,o()(N.a,{id:"fullscreen_tooltip",placement:"bottom",tooltip:this.props.t("fullscreen-tooltip")},void 0,o()(j.a,{variant:"outline-secondary",size:"sm",onClick:this.toggleFullscreen,style:C({position:"absolute",top:0,right:0,fontSize:12},this.props.style),"aria-label":this.props.t("fullscreen-tooltip")},void 0,z))),this.state.fullscreen?o()(F.a,{show:this.state.fullscreen,onHide:this.toggleFullscreen,dialogClassName:"modal-100w"},void 0,o()(F.a.Header,{closeButton:!0},void 0,o()(F.a.Title,{as:"h1"},void 0,this.props.header||this.props.t("fullscreen-header"))),o()(F.a.Body,{style:{height:.75*window.innerHeight}},void 0,this.props.wrapInCard?o()(P.a,{body:!0,className:"".concat(this.props.className," panel-fullscreen-view")},void 0,this.props.body):this.props.body),o()(F.a.Footer,{},void 0,this.props.footer,o()(j.a,{onClick:this.toggleFullscreen},void 0,this.props.t("close")))):null)}}]),r}(O.Component);S.defaultProps={className:"",header:null,wrapInCard:!0,style:{}},t.default=Object(g.a)("FullscreenButton")(S)},511:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function o(e,t){return n(e.querySelectorAll(t))}},686:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0);function o(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){t.current=e})),t.current}}}]);