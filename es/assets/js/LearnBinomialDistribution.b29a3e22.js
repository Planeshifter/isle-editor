/*! For license information please see LearnBinomialDistribution.b29a3e22.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[490],{1160:function(t,e,a){"use strict";var n=a(452);t.exports=function(t){return n(t)===t&&t>=0}},2819:function(t,e,a){"use strict";var n=a(3806);t.exports=n},3806:function(t,e,a){"use strict";var n=a(686),r=a(537),i=a(590),o=a(482),c=a(502),s=a(451),l=a(1446),u=a(458),d=a(429),f=a(3807);t.exports=function(t,e){var a,v,b;return v=c(t,e),b=o(t,e),v<0?NaN:0===v?d:b===d?u:v>=10?(a=f(v)+f(b)-f(v+b),-.5*s(b)+l+a+(v-.5)*s(v/(v+b))+b*r(-v/(v+b))):b>=10?(a=f(b)-f(v+b),n(v)+a+v-v*s(v+b)+(b-.5)*r(-v/(v+b))):s(i(v)*(i(b)/i(v+b)))}},3807:function(t,e,a){"use strict";var n=a(443),r=a(3808);t.exports=function(t){return t<10?NaN:t>=3745194030963158e291?0:t<94906265.62425156?r(2*n(10/t,2)-1)/t:1/(12*t)}},3808:function(t,e,a){"use strict";var n=[1276642195630063e-46,-3.401102254316749e-30,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2.868042435334643e-20,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,9.81082564692473e-9,-1384948176067564e-20,.16663894804518634],r=n.length;t.exports=function(t){var e,a,i,o,c;if(t<-1.1||t>1.1)return NaN;for(i=0,o=0,e=2*t,c=0;c<r;c++)a=i,o=e*(i=o)-a+n[c];return.5*(o-a)}},3809:function(t,e,a){"use strict";var n=a(423),r=a(3810);n(r,"factory",a(3811)),t.exports=r},3810:function(t,e,a){"use strict";var n=a(420);t.exports=function(t,e){return n(t)||n(e)?NaN:t===e?1:0}},3811:function(t,e,a){"use strict";var n=a(469),r=a(420);t.exports=function(t){return r(t)?n(NaN):function(e){if(r(e))return NaN;return e===t?1:0}}},3812:function(t,e,a){"use strict";var n=a(3813);t.exports=n},3813:function(t,e,a){"use strict";var n=a(432).isPrimitive;t.exports=function(t){if(!n(t))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+t+"`.");return""===t?"":t.charAt(0).toUpperCase()+t.slice(1)}},4203:function(t,e,a){"use strict";var n=a(4911);t.exports=n},453:function(t,e,a){"use strict";a.d(e,"b",(function(){return i}));var n=a(0),r=a.n(n).a.createContext(null),i=function(t,e){return void 0===e&&(e=null),null!=t?String(t):e||null};e.a=r},471:function(t,e,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);e.a=r},479:function(t,e,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);r.displayName="NavContext",e.a=r},4909:function(t,e,a){"use strict";var n=a(423),r=a(4910);n(r,"factory",a(4912)),t.exports=r},4910:function(t,e,a){"use strict";var n=a(766),r=a(4203),i=a(420),o=a(537),c=a(449),s=a(451),l=a(429);t.exports=function(t,e,a){var u;return i(t)||i(e)||i(a)||a<0||a>1||!n(e)||e===l?NaN:n(t)?t>e?0:0===a?0===t?1:0:1===a?t===e?1:0:(u=r(e,t),u+=t*s(a)+(e-t)*o(-a),c(u)):0}},4911:function(t,e,a){"use strict";var n=a(559),r=a(420),i=a(2819),o=a(431),c=a(451),s=a(458);t.exports=function t(e,a){return r(e)||r(a)?NaN:n(e)&&n(a)?e<0?t(-e+a-1,a):a<0?s:0===a?0:1===a?c(o(e)):e<a?s:e-a<2?t(e,e-a):-c(e+1)-i(e-a+1,a+1):NaN}},4912:function(t,e,a){"use strict";var n=a(766),r=a(469),i=a(4203),o=a(3809).factory,c=a(420),s=a(537),l=a(449),u=a(451),d=a(429);t.exports=function(t,e){return c(t)||c(e)||!n(t)||t===d||e<0||e>1?r(NaN):0===e||0===t?o(0):1===e?o(t):function(a){var r;if(c(a))return NaN;if(n(a))return a>t?0:(r=i(t,a),r+=a*u(e)+(t-a)*s(-e),l(r));return 0}}},4913:function(t,e,a){"use strict";var n=a(423),r=a(4914);n(r,"factory",a(4915)),t.exports=r},4914:function(t,e,a){"use strict";var n=a(766),r=a(685),i=a(420),o=a(452),c=a(429);t.exports=function(t,e,a){return i(t)||i(e)||i(a)||a<0||a>1||!n(e)||e===c?NaN:t<0?0:t>=e?1:(t=o(t+1e-7),r(a,t+1,e-t,!0,!0))}},4915:function(t,e,a){"use strict";var n=a(766),r=a(469),i=a(685),o=a(420),c=a(452),s=a(429);t.exports=function(t,e){return o(t)||o(e)||e<0||e>1||!n(t)||t===s?r(NaN):function(a){if(o(a))return NaN;if(a<0)return 0;if(a>=t)return 1;return a=c(a+1e-7),i(e,a+1,t-a,!0,!0)}}},497:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(t,e){return n(t.querySelectorAll(e))}},512:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),l=a(464),u=a(538),d=a(411),f={disabled:!1,as:l.a},v=s.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.disabled,c=t.className,l=t.href,f=t.eventKey,v=t.onSelect,b=t.as,p=Object(r.a)(t,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return a=Object(d.a)(a,"nav-link"),s.a.createElement(u.a,Object(n.a)({},p,{href:l,ref:e,eventKey:f,as:b,disabled:i,onSelect:v,className:o()(c,a,i&&"disabled")}))}));v.displayName="NavLink",v.defaultProps=f,e.a=v},514:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),l=a(411),u=s.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.className,c=t.children,u=t.as,d=void 0===u?"div":u,f=Object(r.a)(t,["bsPrefix","className","children","as"]);return a=Object(l.a)(a,"nav-item"),s.a.createElement(d,Object(n.a)({},f,{ref:e,className:o()(i,a)}),c)}));u.displayName="NavItem",e.a=u},520:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(474),o=a(471),c=a(453);e.a=function(t){var e=Object(i.a)(t,{activeKey:"onSelect"}),a=e.id,s=e.generateChildId,l=e.onSelect,u=e.activeKey,d=e.transition,f=e.mountOnEnter,v=e.unmountOnExit,b=e.children,p=Object(n.useMemo)((function(){return s||function(t,e){return a?a+"-"+e+"-"+t:null}}),[a,s]),m=Object(n.useMemo)((function(){return{onSelect:l,activeKey:u,transition:d,mountOnEnter:f||!1,unmountOnExit:v||!1,getControlledId:function(t){return p(t,"tabpane")},getControllerId:function(t){return p(t,"tab")}}}),[l,u,d,f,v,p]);return r.a.createElement(o.a.Provider,{value:m},r.a.createElement(c.a.Provider,{value:l||null},b))}},521:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),l=a(411),u=s.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.as,c=void 0===i?"div":i,u=t.className,d=Object(r.a)(t,["bsPrefix","as","className"]),f=Object(l.a)(a,"tab-content");return s.a.createElement(c,Object(n.a)({ref:e},d,{className:o()(u,f)}))}));e.a=u},522:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),l=a(411),u=a(471),d=a(453),f=a(626);var v=s.a.forwardRef((function(t,e){var a=function(t){var e=Object(c.useContext)(u.a);if(!e)return t;var a=e.activeKey,i=e.getControlledId,o=e.getControllerId,s=Object(r.a)(e,["activeKey","getControlledId","getControllerId"]),l=!1!==t.transition&&!1!==s.transition,v=Object(d.b)(t.eventKey);return Object(n.a)({},t,{active:null==t.active&&null!=v?Object(d.b)(a)===v:t.active,id:i(t.eventKey),"aria-labelledby":o(t.eventKey),transition:l&&(t.transition||s.transition||f.a),mountOnEnter:null!=t.mountOnEnter?t.mountOnEnter:s.mountOnEnter,unmountOnExit:null!=t.unmountOnExit?t.unmountOnExit:s.unmountOnExit})}(t),i=a.bsPrefix,v=a.className,b=a.active,p=a.onEnter,m=a.onEntering,y=a.onEntered,x=a.onExit,h=a.onExiting,O=a.onExited,g=a.mountOnEnter,E=a.unmountOnExit,j=a.transition,C=a.as,N=void 0===C?"div":C,P=(a.eventKey,Object(r.a)(a,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),w=Object(l.a)(i,"tab-pane");if(!b&&!j&&E)return null;var K=s.a.createElement(N,Object(n.a)({},P,{ref:e,role:"tabpanel","aria-hidden":!b,className:o()(v,w,{active:b})}));return j&&(K=s.a.createElement(j,{in:b,onEnter:p,onEntering:m,onEntered:y,onExit:x,onExiting:h,onExited:O,mountOnEnter:g,unmountOnExit:E},K)),s.a.createElement(u.a.Provider,{value:null},s.a.createElement(d.a.Provider,{value:null},K))}));v.displayName="TabPane",e.a=v},524:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a(0);function r(){return Object(n.useReducer)((function(t){return!t}),!1)[1]}},538:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),l=a(523),u=(a(532),a(479)),d=a(453),f=s.a.forwardRef((function(t,e){var a=t.active,i=t.className,f=t.eventKey,v=t.onSelect,b=t.onClick,p=t.as,m=Object(r.a)(t,["active","className","eventKey","onSelect","onClick","as"]),y=Object(d.b)(f,m.href),x=Object(c.useContext)(d.a),h=Object(c.useContext)(u.a),O=a;if(h){m.role||"tablist"!==h.role||(m.role="tab");var g=h.getControllerId(y),E=h.getControlledId(y);m["data-rb-event-key"]=y,m.id=g||m.id,m["aria-controls"]=E||m["aria-controls"],O=null==a&&null!=y?h.activeKey===y:a}"tab"===m.role&&(m.disabled&&(m.tabIndex=-1,m["aria-disabled"]=!0),m["aria-selected"]=O);var j=Object(l.a)((function(t){b&&b(t),null!=y&&(v&&v(y,t),x&&x(y,t))}));return s.a.createElement(p,Object(n.a)({},m,{ref:e,onClick:j,className:o()(i,O&&"active")}))}));f.defaultProps={disabled:!1},e.a=f},539:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(497),o=a(0),c=a.n(o),s=a(524),l=a(556),u=a(479),d=a(453),f=a(471),v=function(){},b=c.a.forwardRef((function(t,e){var a,b,p=t.as,m=void 0===p?"ul":p,y=t.onSelect,x=t.activeKey,h=t.role,O=t.onKeyDown,g=Object(r.a)(t,["as","onSelect","activeKey","role","onKeyDown"]),E=Object(s.a)(),j=Object(o.useRef)(!1),C=Object(o.useContext)(d.a),N=Object(o.useContext)(f.a);N&&(h=h||"tablist",x=N.activeKey,a=N.getControlledId,b=N.getControllerId);var P=Object(o.useRef)(null),w=function(t){var e=P.current;if(!e)return null;var a=Object(i.a)(e,"[data-rb-event-key]:not(.disabled)"),n=e.querySelector(".active");if(!n)return null;var r=a.indexOf(n);if(-1===r)return null;var o=r+t;return o>=a.length&&(o=0),o<0&&(o=a.length-1),a[o]},K=function(t,e){null!=t&&(y&&y(t,e),C&&C(t,e))};Object(o.useEffect)((function(){if(P.current&&j.current){var t=P.current.querySelector("[data-rb-event-key].active");t&&t.focus()}j.current=!1}));var k=Object(l.a)(e,P);return c.a.createElement(d.a.Provider,{value:K},c.a.createElement(u.a.Provider,{value:{role:h,activeKey:Object(d.b)(x),getControlledId:a||v,getControllerId:b||v}},c.a.createElement(m,Object(n.a)({},g,{onKeyDown:function(t){var e;switch(O&&O(t),t.key){case"ArrowLeft":case"ArrowUp":e=w(-1);break;case"ArrowRight":case"ArrowDown":e=w(1);break;default:return}e&&(t.preventDefault(),K(e.dataset.rbEventKey,t),j.current=!0,E())},ref:k,role:h}))))}));e.a=b},540:function(t,e,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);r.displayName="NavbarContext",e.a=r},561:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=(a(599),a(0)),s=a.n(c),l=a(474),u=a(411),d=a(540),f=a(663),v=a(539),b=a(514),p=a(512),m=s.a.forwardRef((function(t,e){var a,i,b,p=Object(l.a)(t,{activeKey:"onSelect"}),m=p.as,y=void 0===m?"div":m,x=p.bsPrefix,h=p.variant,O=p.fill,g=p.justify,E=p.navbar,j=p.className,C=p.children,N=p.activeKey,P=Object(r.a)(p,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),w=Object(u.a)(x,"nav"),K=!1,k=Object(c.useContext)(d.a),F=Object(c.useContext)(f.a);return k?(i=k.bsPrefix,K=null==E||E):F&&(b=F.cardHeaderBsPrefix),s.a.createElement(v.a,Object(n.a)({as:y,ref:e,activeKey:N,className:o()(j,(a={},a[w]=!K,a[i+"-nav"]=K,a[b+"-"+h]=!!b,a[w+"-"+h]=!!h,a[w+"-fill"]=O,a[w+"-justified"]=g,a))},P),C)}));m.displayName="Nav",m.defaultProps={justify:!1,fill:!1},m.Item=b.a,m.Link=p.a,e.a=m},562:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return o}));var n=a(0),r=a.n(n);function i(t,e){var a=0;return r.a.Children.map(t,(function(t){return r.a.isValidElement(t)?e(t,a++):t}))}function o(t,e){var a=0;r.a.Children.forEach(t,(function(t){r.a.isValidElement(t)&&e(t,a++)}))}},568:function(t,e,a){"use strict";var n=a(535),r=a(0),i=a.n(r),o=a(520),c=a(521),s=a(522),l=function(t){function e(){return t.apply(this,arguments)||this}return Object(n.a)(e,t),e.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},e}(i.a.Component);l.Container=o.a,l.Content=c.a,l.Pane=s.a,e.a=l},591:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(0),o=a.n(i),c=(a(577),a(474)),s=a(561),l=a(512),u=a(514),d=a(520),f=a(521),v=a(522),b=a(562);function p(t){var e=t.props,a=e.title,n=e.eventKey,r=e.disabled,i=e.tabClassName,c=e.id;return null==a?null:o.a.createElement(u.a,{as:l.a,eventKey:n,disabled:r,id:c,className:i},a)}var m=function(t){var e=Object(c.a)(t,{activeKey:"onSelect"}),a=e.id,i=e.onSelect,l=e.transition,u=e.mountOnEnter,m=e.unmountOnExit,y=e.children,x=e.activeKey,h=void 0===x?function(t){var e;return Object(b.a)(t,(function(t){null==e&&(e=t.props.eventKey)})),e}(y):x,O=Object(r.a)(e,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return o.a.createElement(d.a,{id:a,activeKey:h,onSelect:i,transition:l,mountOnEnter:u,unmountOnExit:m},o.a.createElement(s.a,Object(n.a)({},O,{role:"tablist",as:"nav"}),Object(b.b)(y,p)),o.a.createElement(f.a,null,Object(b.b)(y,(function(t){var e=Object(n.a)({},t.props);return delete e.title,delete e.disabled,delete e.tabClassName,o.a.createElement(v.a,e)}))))};m.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},m.displayName="Tabs",e.a=m},6443:function(t,e,a){"use strict";a.r(e);a(438),a(436),a(441),a(440),a(437),a(427),a(416),a(421);var n=a(407),r=a.n(n),i=a(414),o=a.n(i),c=a(415),s=a.n(c),l=a(425),u=a.n(l),d=a(418),f=a.n(d),v=a(419),b=a.n(v),p=a(417),m=a.n(p),y=a(412),x=a.n(y),h=a(0),O=(a(404),a(4172)),g=a(465),E=a(591),j=a(568),C=a(454),N=a(509),P=a(493),w=a(476),K=a(6534),k=a(6515),F=a(4680),S=a(6397),D=a(6524),I=a(473),A=a.n(I),L=a(666),R=a.n(L),M=a(4909),T=a.n(M),V=a(4913),X=a.n(V),W=a(3812),_=a.n(W),q=a(628),U=a(490),B=a(582),H=a(534),J=a(494),z=a(422);function G(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function Q(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?G(Object(a),!0).forEach((function(e){x()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):G(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function Y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=m()(t);if(e){var r=m()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return b()(this,a)}}Object(z.a)("LearnDistribution");var Z=r()(J.a,{raw:"P(X = x)"}),$=r()(K.a,{dependentAxis:!0}),tt=r()(K.a,{dependentAxis:!0}),et=r()(J.a,{raw:"P(X \\le x_0)"}),at=r()(K.a,{dependentAxis:!0}),nt=r()(K.a,{dependentAxis:!0}),rt=r()(J.a,{raw:"P(X > x_0)"}),it=r()(K.a,{dependentAxis:!0}),ot=r()(K.a,{dependentAxis:!0}),ct=r()(J.a,{raw:"P( x_0 \\le X \\le x_1)"}),st=r()(K.a,{dependentAxis:!0}),lt=r()(K.a,{dependentAxis:!0}),ut=r()(q.a,{id:"binomial_distribution"}),dt=function(t){f()(a,t);var e=Y(a);function a(t){var n;o()(this,a),n=e.call(this,t),x()(u()(n),"handleTrialsChange",(function(t){for(var e=R()(0,t+1,1),a=new Array(e.length),r=0;r<e.length;r++)a[r]={x:e[r],y:T()(e[r],t,n.state.p)};n.setState({data:a,n:t})})),x()(u()(n),"handlePropChange",(function(t){for(var e=R()(0,n.state.n+1,1),a=new Array(e.length),r=0;r<e.length;r++)a[r]={x:e[r],y:T()(e[r],n.state.n,n.state.p)};n.setState({data:a,p:t})})),x()(u()(n),"handleLowerChange",(function(t){n.setState({x0:t})})),x()(u()(n),"handleUpperChange",(function(t){n.setState({x1:t})}));for(var r=R()(0,11,1),i=new Array(r.length),c=0;c<r.length;c++)i[c]={x:r[c],y:T()(r[c],10,.5)};return n.state={n:10,p:.5,x0:0,x1:1,data:i},n}return s()(a,[{key:"renderInputs",value:function(t){var e=this.props.t;return r()(h.Fragment,{},void 0,r()(U.b,{legend:"".concat(e("number-of-trials")," (n)"),defaultValue:this.state.n,min:1,step:1,onChange:this.handleTrialsChange},"".concat(t,"-n")),r()(U.b,{legend:"".concat(e("success-probability")," (p)"),defaultValue:this.state.p,step:this.props.step,onChange:this.handlePropChange,min:0,max:1},"".concat(t,"-p")),r()(B.a,{legend:"x0",defaultValue:this.state.x0,step:1,min:0,max:this.state.n,onChange:this.handleLowerChange},"".concat(t,"-x0")),"range"===t?r()(B.a,{legend:"x1",defaultValue:this.state.x1,min:0,max:this.state.n,step:1,onChange:this.handleUpperChange}):null)}},{key:"render",value:function(){var t=this,e=this.state,a=e.x0,n=e.x1,i=e.n,o=e.p,c=this.props.t;return r()(g.a,{style:Q({maxWidth:1200,margin:"10px auto"},this.props.style)},void 0,r()(g.a.Header,{as:"h3"},void 0,c("binomial-distribution")),r()(g.a.Body,{},void 0,r()(E.a,{defaultActiveKey:0,id:"binomial-tabs"},void 0,r()(j.a,{eventKey:0,title:Z},void 0,r()(N.a,{},void 0,r()(w.a,{},void 0,r()(P.a,{md:5},void 0,r()(H.a,{title:c("binomial-probabilities")},void 0,r()("span",{},void 0,_()(c("for"))),r()(U.b,{inline:!0,legend:"n",defaultValue:i,step:1,min:0,max:999,onChange:this.handleTrialsChange}),r()("span",{},void 0,c("trials-and-success-probability")),r()(U.b,{inline:!0,legend:"p",defaultValue:o,step:.01,max:1,min:0,onChange:this.handlePropChange}),r()("span",{},void 0,c("we-get")),r()(J.a,{raw:"P(X=x)= \\Large \\tbinom{".concat(i,"}{x} ").concat(o,"^x ").concat(A()(1-o,-4),"^{").concat(i,"-x}"),displayMode:!0}),r()("span",{},void 0,c("evaluated-at")," "),r()(U.b,{inline:!0,legend:"x",defaultValue:0,step:1,max:i,min:0,onChange:this.handleLowerChange})," ",r()("span",{},void 0,c("we-get")),r()(J.a,{raw:"P(X=".concat(a,")= \\Large \\tbinom{").concat(i,"}{").concat(a,"} ").concat(o,"^{").concat(a,"} ").concat(A()(1-o,-4),"^{").concat(i,"-").concat(a,"} \\approx ").concat(T()(a,this.state.n,o).toFixed(4)),displayMode:!0}))),r()(P.a,{md:7},void 0,r()(H.a,{header:c("probability-plot")},void 0,r()(w.a,{},void 0,r()(P.a,{md:6},void 0,r()(k.a,{theme:F.a.material},void 0,$,r()(K.a,{label:"PMF",tickFormat:function(t){return A()(t,-2)},style:{axisLabel:{padding:40}}}),r()(S.a,{data:this.state.data,style:{data:{fill:function(t){return t.datum.x===a?"tomato":"steelblue"}}}}))),this.props.hideCDF?null:r()(P.a,{md:6},void 0,r()(k.a,{theme:F.a.material},void 0,tt,r()(K.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),r()(D.a,{samples:600,y:function(t){return X()(t.x,i,o)},domain:{x:[0,i+1],y:[0,1.1]}}),r()(D.a,{data:[{x:a,y:0},{x:a,y:X()(a,i,o)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),r()(D.a,{data:[{x:0,y:X()(a,i,o)},{x:a,y:X()(a,i,o)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),r()(j.a,{eventKey:1,title:et},void 0,r()(N.a,{},void 0,r()(w.a,{},void 0,r()(P.a,{md:4},void 0,r()(H.a,{},void 0,this.renderInputs("smaller"),r()(J.a,{raw:"P(X \\le".concat(A()(a,-4),") = ").concat(A()(X()(a,i,o),-4)),displayMode:!0,tag:""}))),r()(P.a,{md:8},void 0,r()(H.a,{header:c("probability-plot")},void 0,r()(w.a,{},void 0,r()(P.a,{md:6},void 0,r()(k.a,{theme:F.a.material},void 0,at,r()(K.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(S.a,{data:this.state.data,style:{data:{fill:function(t){return t.datum.x<=a?"tomato":"steelblue"}}}}))),this.props.hideCDF?null:r()(P.a,{md:6},void 0,r()(k.a,{theme:F.a.material},void 0,nt,r()(K.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(D.a,{samples:600,y:function(t){return X()(t.x,i,o)},domain:{x:[0,i+1],y:[0,1.1]}}),r()(D.a,{data:[{x:a,y:0},{x:a,y:X()(a,i,o)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),r()(D.a,{data:[{x:0,y:X()(a,i,o)},{x:a,y:X()(a,i,o)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),r()(j.a,{eventKey:2,title:rt},void 0,r()(N.a,{},void 0,r()(w.a,{},void 0,r()(P.a,{md:4},void 0,r()(H.a,{},void 0,this.renderInputs("greater"),r()(J.a,{raw:"P(X >".concat(A()(a,-4),") = ").concat(A()(1-X()(a,i,o),-4)),displayMode:!0,tag:""}))),r()(P.a,{md:8},void 0,r()(H.a,{header:c("probability-plot")},void 0,r()(w.a,{},void 0,r()(P.a,{md:6},void 0,r()(k.a,{theme:F.a.material},void 0,it,r()(K.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(S.a,{data:this.state.data,style:{data:{fill:function(e){return e.datum.x>t.state.x0?"tomato":"steelblue"}}}}))),this.props.hideCDF?null:r()(P.a,{md:6},void 0,r()(k.a,{theme:F.a.material},void 0,ot,r()(K.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(D.a,{samples:600,y:function(t){return X()(t.x,i,o)},domain:{x:[0,i+1],y:[0,1.1]}}),r()(D.a,{data:[{x:a,y:0},{x:a,y:X()(a,i,o)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),r()(D.a,{data:[{x:0,y:X()(a,i,o)},{x:a,y:X()(a,i,o)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),r()(j.a,{eventKey:3,title:ct},void 0,r()(N.a,{},void 0,r()(w.a,{},void 0,r()(P.a,{md:4},void 0,r()(H.a,{},void 0,this.renderInputs("range"),n>=a?r()(J.a,{raw:"P(".concat(A()(a,-4)," \\le X \\le ").concat(A()(n,-4),") = ").concat(A()(X()(n,i,o)-X()(a-1,i,o),-4)),displayMode:!0,tag:""}):r()(C.a,{variant:"warning"},void 0,c("lower-bound-smaller-equal-upper-bound")))),r()(P.a,{md:8},void 0,r()(H.a,{header:c("probability-plot")},void 0,r()(w.a,{},void 0,r()(P.a,{md:6},void 0,r()(k.a,{theme:F.a.material},void 0,st,r()(K.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(S.a,{data:this.state.data,style:{data:{fill:function(e){return t.state.x0<=e.datum.x&&e.datum.x<=t.state.x1?"tomato":"steelblue"}}}}))),this.props.hideCDF?null:r()(P.a,{md:6},void 0,r()(k.a,{theme:F.a.material},void 0,lt,r()(K.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(D.a,{samples:600,y:function(t){return X()(t.x,i,o)},domain:{x:[0,i+1],y:[0,1.1]}})))))))))),ut))}}]),a}(h.Component);dt.defaultProps={hideCDF:!1,step:.01,style:{}},e.default=Object(O.a)("LearnDistribution")(dt)},766:function(t,e,a){"use strict";var n=a(1160);t.exports=n}}]);