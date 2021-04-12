/*! For license information please see LearnBinomialDistribution.82df502d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[503],{1135:function(t,e,a){"use strict";var n=a(452);t.exports=function(t){return n(t)===t&&t>=0}},2765:function(t,e,a){"use strict";var n=a(3737);t.exports=n},3737:function(t,e,a){"use strict";var n=a(672),r=a(541),i=a(586),o=a(482),c=a(501),s=a(451),l=a(1439),u=a(457),d=a(427),f=a(3738);t.exports=function(t,e){var a,v,b;return v=c(t,e),b=o(t,e),v<0?NaN:0===v?d:b===d?u:v>=10?(a=f(v)+f(b)-f(v+b),-.5*s(b)+l+a+(v-.5)*s(v/(v+b))+b*r(-v/(v+b))):b>=10?(a=f(b)-f(v+b),n(v)+a+v-v*s(v+b)+(b-.5)*r(-v/(v+b))):s(i(v)*(i(b)/i(v+b)))}},3738:function(t,e,a){"use strict";var n=a(446),r=a(3739);t.exports=function(t){return t<10?NaN:t>=3745194030963158e291?0:t<94906265.62425156?r(2*n(10/t,2)-1)/t:1/(12*t)}},3739:function(t,e,a){"use strict";var n=[1276642195630063e-46,-3.401102254316749e-30,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2.868042435334643e-20,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,9.81082564692473e-9,-1384948176067564e-20,.16663894804518634],r=n.length;t.exports=function(t){var e,a,i,o,c;if(t<-1.1||t>1.1)return NaN;for(i=0,o=0,e=2*t,c=0;c<r;c++)a=i,o=e*(i=o)-a+n[c];return.5*(o-a)}},3740:function(t,e,a){"use strict";var n=a(422),r=a(3741);n(r,"factory",a(3742)),t.exports=r},3741:function(t,e,a){"use strict";var n=a(415);t.exports=function(t,e){return n(t)||n(e)?NaN:t===e?1:0}},3742:function(t,e,a){"use strict";var n=a(470),r=a(415);t.exports=function(t){return r(t)?n(NaN):function(e){if(r(e))return NaN;return e===t?1:0}}},3743:function(t,e,a){"use strict";var n=a(3744);t.exports=n},3744:function(t,e,a){"use strict";var n=a(432).isPrimitive;t.exports=function(t){if(!n(t))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+t+"`.");return""===t?"":t.charAt(0).toUpperCase()+t.slice(1)}},4131:function(t,e,a){"use strict";var n=a(4849);t.exports=n},453:function(t,e,a){"use strict";a.d(e,"b",(function(){return i}));var n=a(0),r=a.n(n).a.createContext(null),i=function(t,e){return void 0===e&&(e=null),null!=t?String(t):e||null};e.a=r},472:function(t,e,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);e.a=r},480:function(t,e,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);r.displayName="NavContext",e.a=r},4847:function(t,e,a){"use strict";var n=a(422),r=a(4848);n(r,"factory",a(4850)),t.exports=r},4848:function(t,e,a){"use strict";var n=a(748),r=a(4131),i=a(415),o=a(541),c=a(449),s=a(451),l=a(427);t.exports=function(t,e,a){var u;return i(t)||i(e)||i(a)||a<0||a>1||!n(e)||e===l?NaN:n(t)?t>e?0:0===a?0===t?1:0:1===a?t===e?1:0:(u=r(e,t),u+=t*s(a)+(e-t)*o(-a),c(u)):0}},4849:function(t,e,a){"use strict";var n=a(563),r=a(415),i=a(2765),o=a(431),c=a(451),s=a(457);t.exports=function t(e,a){return r(e)||r(a)?NaN:n(e)&&n(a)?e<0?t(-e+a-1,a):a<0?s:0===a?0:1===a?c(o(e)):e<a?s:e-a<2?t(e,e-a):-c(e+1)-i(e-a+1,a+1):NaN}},4850:function(t,e,a){"use strict";var n=a(748),r=a(470),i=a(4131),o=a(3740).factory,c=a(415),s=a(541),l=a(449),u=a(451),d=a(427);t.exports=function(t,e){return c(t)||c(e)||!n(t)||t===d||e<0||e>1?r(NaN):0===e||0===t?o(0):1===e?o(t):function(a){var r;if(c(a))return NaN;if(n(a))return a>t?0:(r=i(t,a),r+=a*u(e)+(t-a)*s(-e),l(r));return 0}}},4851:function(t,e,a){"use strict";var n=a(422),r=a(4852);n(r,"factory",a(4853)),t.exports=r},4852:function(t,e,a){"use strict";var n=a(748),r=a(671),i=a(415),o=a(452),c=a(427);t.exports=function(t,e,a){return i(t)||i(e)||i(a)||a<0||a>1||!n(e)||e===c?NaN:t<0?0:t>=e?1:(t=o(t+1e-7),r(a,t+1,e-t,!0,!0))}},4853:function(t,e,a){"use strict";var n=a(748),r=a(470),i=a(671),o=a(415),c=a(452),s=a(427);t.exports=function(t,e){return o(t)||o(e)||e<0||e>1||!n(t)||t===s?r(NaN):function(a){if(o(a))return NaN;if(a<0)return 0;if(a>=t)return 1;return a=c(a+1e-7),i(e,a+1,t-a,!0,!0)}}},496:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(t,e){return n(t.querySelectorAll(e))}},512:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),l=a(463),u=a(537),d=a(411),f={disabled:!1,as:l.a},v=s.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.disabled,c=t.className,l=t.href,f=t.eventKey,v=t.onSelect,b=t.as,p=Object(r.a)(t,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return a=Object(d.a)(a,"nav-link"),s.a.createElement(u.a,Object(n.a)({},p,{href:l,ref:e,eventKey:f,as:b,disabled:i,onSelect:v,className:o()(c,a,i&&"disabled")}))}));v.displayName="NavLink",v.defaultProps=f,e.a=v},513:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),l=a(411),u=s.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.className,c=t.children,u=t.as,d=void 0===u?"div":u,f=Object(r.a)(t,["bsPrefix","className","children","as"]);return a=Object(l.a)(a,"nav-item"),s.a.createElement(d,Object(n.a)({},f,{ref:e,className:o()(i,a)}),c)}));u.displayName="NavItem",e.a=u},519:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(474),o=a(472),c=a(453);e.a=function(t){var e=Object(i.a)(t,{activeKey:"onSelect"}),a=e.id,s=e.generateChildId,l=e.onSelect,u=e.activeKey,d=e.transition,f=e.mountOnEnter,v=e.unmountOnExit,b=e.children,p=Object(n.useMemo)((function(){return s||function(t,e){return a?a+"-"+e+"-"+t:null}}),[a,s]),m=Object(n.useMemo)((function(){return{onSelect:l,activeKey:u,transition:d,mountOnEnter:f||!1,unmountOnExit:v||!1,getControlledId:function(t){return p(t,"tabpane")},getControllerId:function(t){return p(t,"tab")}}}),[l,u,d,f,v,p]);return r.a.createElement(o.a.Provider,{value:m},r.a.createElement(c.a.Provider,{value:l||null},b))}},520:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),l=a(411),u=s.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.as,c=void 0===i?"div":i,u=t.className,d=Object(r.a)(t,["bsPrefix","as","className"]),f=Object(l.a)(a,"tab-content");return s.a.createElement(c,Object(n.a)({ref:e},d,{className:o()(u,f)}))}));e.a=u},521:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),l=a(411),u=a(472),d=a(453),f=a(622);var v=s.a.forwardRef((function(t,e){var a=function(t){var e=Object(c.useContext)(u.a);if(!e)return t;var a=e.activeKey,i=e.getControlledId,o=e.getControllerId,s=Object(r.a)(e,["activeKey","getControlledId","getControllerId"]),l=!1!==t.transition&&!1!==s.transition,v=Object(d.b)(t.eventKey);return Object(n.a)({},t,{active:null==t.active&&null!=v?Object(d.b)(a)===v:t.active,id:i(t.eventKey),"aria-labelledby":o(t.eventKey),transition:l&&(t.transition||s.transition||f.a),mountOnEnter:null!=t.mountOnEnter?t.mountOnEnter:s.mountOnEnter,unmountOnExit:null!=t.unmountOnExit?t.unmountOnExit:s.unmountOnExit})}(t),i=a.bsPrefix,v=a.className,b=a.active,p=a.onEnter,m=a.onEntering,y=a.onEntered,x=a.onExit,h=a.onExiting,O=a.onExited,g=a.mountOnEnter,E=a.unmountOnExit,j=a.transition,C=a.as,N=void 0===C?"div":C,P=(a.eventKey,Object(r.a)(a,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),w=Object(l.a)(i,"tab-pane");if(!b&&!j&&E)return null;var K=s.a.createElement(N,Object(n.a)({},P,{ref:e,role:"tabpanel","aria-hidden":!b,className:o()(v,w,{active:b})}));return j&&(K=s.a.createElement(j,{in:b,onEnter:p,onEntering:m,onEntered:y,onExit:x,onExiting:h,onExited:O,mountOnEnter:g,unmountOnExit:E},K)),s.a.createElement(u.a.Provider,{value:null},s.a.createElement(d.a.Provider,{value:null},K))}));v.displayName="TabPane",e.a=v},524:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a(0);function r(){return Object(n.useReducer)((function(t){return!t}),!1)[1]}},537:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),l=a(522),u=(a(535),a(480)),d=a(453),f=s.a.forwardRef((function(t,e){var a=t.active,i=t.className,f=t.eventKey,v=t.onSelect,b=t.onClick,p=t.as,m=Object(r.a)(t,["active","className","eventKey","onSelect","onClick","as"]),y=Object(d.b)(f,m.href),x=Object(c.useContext)(d.a),h=Object(c.useContext)(u.a),O=a;if(h){m.role||"tablist"!==h.role||(m.role="tab");var g=h.getControllerId(y),E=h.getControlledId(y);m["data-rb-event-key"]=y,m.id=g||m.id,m["aria-controls"]=E||m["aria-controls"],O=null==a&&null!=y?h.activeKey===y:a}"tab"===m.role&&(m.disabled&&(m.tabIndex=-1,m["aria-disabled"]=!0),m["aria-selected"]=O);var j=Object(l.a)((function(t){b&&b(t),null!=y&&(v&&v(y,t),x&&x(y,t))}));return s.a.createElement(p,Object(n.a)({},m,{ref:e,onClick:j,className:o()(i,O&&"active")}))}));f.defaultProps={disabled:!1},e.a=f},538:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(496),o=a(0),c=a.n(o),s=a(524),l=a(559),u=a(480),d=a(453),f=a(472),v=function(){},b=c.a.forwardRef((function(t,e){var a,b,p=t.as,m=void 0===p?"ul":p,y=t.onSelect,x=t.activeKey,h=t.role,O=t.onKeyDown,g=Object(r.a)(t,["as","onSelect","activeKey","role","onKeyDown"]),E=Object(s.a)(),j=Object(o.useRef)(!1),C=Object(o.useContext)(d.a),N=Object(o.useContext)(f.a);N&&(h=h||"tablist",x=N.activeKey,a=N.getControlledId,b=N.getControllerId);var P=Object(o.useRef)(null),w=function(t){var e=P.current;if(!e)return null;var a=Object(i.a)(e,"[data-rb-event-key]:not(.disabled)"),n=e.querySelector(".active");if(!n)return null;var r=a.indexOf(n);if(-1===r)return null;var o=r+t;return o>=a.length&&(o=0),o<0&&(o=a.length-1),a[o]},K=function(t,e){null!=t&&(y&&y(t,e),C&&C(t,e))};Object(o.useEffect)((function(){if(P.current&&j.current){var t=P.current.querySelector("[data-rb-event-key].active");t&&t.focus()}j.current=!1}));var k=Object(l.a)(e,P);return c.a.createElement(d.a.Provider,{value:K},c.a.createElement(u.a.Provider,{value:{role:h,activeKey:Object(d.b)(x),getControlledId:a||v,getControllerId:b||v}},c.a.createElement(m,Object(n.a)({},g,{onKeyDown:function(t){var e;switch(O&&O(t),t.key){case"ArrowLeft":case"ArrowUp":e=w(-1);break;case"ArrowRight":case"ArrowDown":e=w(1);break;default:return}e&&(t.preventDefault(),K(e.dataset.rbEventKey,t),j.current=!0,E())},ref:k,role:h}))))}));e.a=b},539:function(t,e,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);r.displayName="NavbarContext",e.a=r},561:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=(a(590),a(0)),s=a.n(c),l=a(474),u=a(411),d=a(539),f=a(645),v=a(538),b=a(513),p=a(512),m=s.a.forwardRef((function(t,e){var a,i,b,p=Object(l.a)(t,{activeKey:"onSelect"}),m=p.as,y=void 0===m?"div":m,x=p.bsPrefix,h=p.variant,O=p.fill,g=p.justify,E=p.navbar,j=p.className,C=p.children,N=p.activeKey,P=Object(r.a)(p,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),w=Object(u.a)(x,"nav"),K=!1,k=Object(c.useContext)(d.a),F=Object(c.useContext)(f.a);return k?(i=k.bsPrefix,K=null==E||E):F&&(b=F.cardHeaderBsPrefix),s.a.createElement(v.a,Object(n.a)({as:y,ref:e,activeKey:N,className:o()(j,(a={},a[w]=!K,a[i+"-nav"]=K,a[b+"-"+h]=!!b,a[w+"-"+h]=!!h,a[w+"-fill"]=O,a[w+"-justified"]=g,a))},P),C)}));m.displayName="Nav",m.defaultProps={justify:!1,fill:!1},m.Item=b.a,m.Link=p.a,e.a=m},564:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return o}));var n=a(0),r=a.n(n);function i(t,e){var a=0;return r.a.Children.map(t,(function(t){return r.a.isValidElement(t)?e(t,a++):t}))}function o(t,e){var a=0;r.a.Children.forEach(t,(function(t){r.a.isValidElement(t)&&e(t,a++)}))}},569:function(t,e,a){"use strict";var n=a(540),r=a(0),i=a.n(r),o=a(519),c=a(520),s=a(521),l=function(t){function e(){return t.apply(this,arguments)||this}return Object(n.a)(e,t),e.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},e}(i.a.Component);l.Container=o.a,l.Content=c.a,l.Pane=s.a,e.a=l},587:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(0),o=a.n(i),c=(a(576),a(474)),s=a(561),l=a(512),u=a(513),d=a(519),f=a(520),v=a(521),b=a(564);function p(t){var e=t.props,a=e.title,n=e.eventKey,r=e.disabled,i=e.tabClassName,c=e.id;return null==a?null:o.a.createElement(u.a,{as:l.a,eventKey:n,disabled:r,id:c,className:i},a)}var m=function(t){var e=Object(c.a)(t,{activeKey:"onSelect"}),a=e.id,i=e.onSelect,l=e.transition,u=e.mountOnEnter,m=e.unmountOnExit,y=e.children,x=e.activeKey,h=void 0===x?function(t){var e;return Object(b.a)(t,(function(t){null==e&&(e=t.props.eventKey)})),e}(y):x,O=Object(r.a)(e,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return o.a.createElement(d.a,{id:a,activeKey:h,onSelect:i,transition:l,mountOnEnter:u,unmountOnExit:m},o.a.createElement(s.a,Object(n.a)({},O,{role:"tablist",as:"nav"}),Object(b.b)(y,p)),o.a.createElement(f.a,null,Object(b.b)(y,(function(t){var e=Object(n.a)({},t.props);return delete e.title,delete e.disabled,delete e.tabClassName,o.a.createElement(v.a,e)}))))};m.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},m.displayName="Tabs",e.a=m},6379:function(t,e,a){"use strict";a.r(e);a(421),a(437),a(433),a(430),a(438),a(439);var n,r,i,o,c,s,l,u,d,f,v,b,p,m=a(407),y=a.n(m),x=a(414),h=a.n(x),O=a(416),g=a.n(O),E=a(424),j=a.n(E),C=a(418),N=a.n(C),P=a(419),w=a.n(P),K=a(417),k=a.n(K),F=a(412),S=a.n(F),I=a(0),D=(a(404),a(4101)),A=a(464),L=a(587),R=a(569),M=a(454),T=a(506),V=a(491),X=a(478),W=a(6451),B=a(4612),_=a(6470),q=a(6334),U=a(6460),H=a(475),J=a.n(H),z=a(661),G=a.n(z),Q=a(4847),Y=a.n(Q),Z=a(4851),$=a.n(Z),tt=a(3743),et=a.n(tt),at=a(624),nt=a(488),rt=a(581),it=a(518),ot=a(493),ct=a(420);function st(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function lt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?st(Object(a),!0).forEach((function(e){S()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):st(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function ut(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=k()(t);if(e){var r=k()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return w()(this,a)}}Object(ct.a)("LearnDistribution");var dt=function(t){N()(a,t);var e=ut(a);function a(t){var n;h()(this,a),n=e.call(this,t),S()(j()(n),"handleTrialsChange",(function(t){for(var e=G()(0,t+1,1),a=new Array(e.length),r=0;r<e.length;r++)a[r]={x:e[r],y:Y()(e[r],t,n.state.p)};n.setState({data:a,n:t})})),S()(j()(n),"handlePropChange",(function(t){for(var e=G()(0,n.state.n+1,1),a=new Array(e.length),r=0;r<e.length;r++)a[r]={x:e[r],y:Y()(e[r],n.state.n,n.state.p)};n.setState({data:a,p:t})})),S()(j()(n),"handleLowerChange",(function(t){n.setState({x0:t})})),S()(j()(n),"handleUpperChange",(function(t){n.setState({x1:t})}));for(var r=G()(0,11,1),i=new Array(r.length),o=0;o<r.length;o++)i[o]={x:r[o],y:Y()(r[o],10,.5)};return n.state={n:10,p:.5,x0:0,x1:1,data:i},n}return g()(a,[{key:"renderInputs",value:function(t){var e=this.props.t;return y()(I.Fragment,{},void 0,y()(nt.b,{legend:"".concat(e("number-of-trials")," (n)"),defaultValue:this.state.n,min:1,step:1,onChange:this.handleTrialsChange},"".concat(t,"-n")),y()(nt.b,{legend:"".concat(e("success-probability")," (p)"),defaultValue:this.state.p,step:this.props.step,onChange:this.handlePropChange,min:0,max:1},"".concat(t,"-p")),y()(rt.a,{legend:"x0",defaultValue:this.state.x0,step:1,min:0,max:this.state.n,onChange:this.handleLowerChange},"".concat(t,"-x0")),"range"===t?y()(rt.a,{legend:"x1",defaultValue:this.state.x1,min:0,max:this.state.n,step:1,onChange:this.handleUpperChange}):null)}},{key:"render",value:function(){var t=this,e=this.state,a=e.x0,m=e.x1,x=e.n,h=e.p,O=this.props.t;return y()(A.a,{style:lt({maxWidth:1200,margin:"10px auto"},this.props.style)},void 0,y()(A.a.Header,{as:"h3"},void 0,O("binomial-distribution")),y()(A.a.Body,{},void 0,y()(L.a,{defaultActiveKey:0,id:"binomial-tabs"},void 0,y()(R.a,{eventKey:0,title:n||(n=y()(ot.a,{raw:"P(X = x)"}))},void 0,y()(T.a,{},void 0,y()(X.a,{},void 0,y()(V.a,{md:5},void 0,y()(it.a,{title:O("binomial-probabilities")},void 0,y()("span",{},void 0,et()(O("for"))),y()(nt.b,{inline:!0,legend:"n",defaultValue:x,step:1,min:0,max:999,onChange:this.handleTrialsChange}),y()("span",{},void 0,O("trials-and-success-probability")),y()(nt.b,{inline:!0,legend:"p",defaultValue:h,step:.01,max:1,min:0,onChange:this.handlePropChange}),y()("span",{},void 0,O("we-get")),y()(ot.a,{raw:"P(X=x)= \\Large \\tbinom{".concat(x,"}{x} ").concat(h,"^x ").concat(J()(1-h,-4),"^{").concat(x,"-x}"),displayMode:!0}),y()("span",{},void 0,O("evaluated-at")," "),y()(nt.b,{inline:!0,legend:"x",defaultValue:0,step:1,max:x,min:0,onChange:this.handleLowerChange})," ",y()("span",{},void 0,O("we-get")),y()(ot.a,{raw:"P(X=".concat(a,")= \\Large \\tbinom{").concat(x,"}{").concat(a,"} ").concat(h,"^{").concat(a,"} ").concat(J()(1-h,-4),"^{").concat(x,"-").concat(a,"} \\approx ").concat(Y()(a,this.state.n,h).toFixed(4)),displayMode:!0}))),y()(V.a,{md:7},void 0,y()(it.a,{header:O("probability-plot")},void 0,y()(X.a,{},void 0,y()(V.a,{md:6},void 0,y()(W.a,{theme:B.a.material},void 0,r||(r=y()(_.a,{dependentAxis:!0})),y()(_.a,{label:"PMF",tickFormat:function(t){return J()(t,-2)},style:{axisLabel:{padding:40}}}),y()(q.a,{data:this.state.data,style:{data:{fill:function(t){return t.datum.x===a?"tomato":"steelblue"}}}}))),this.props.hideCDF?null:y()(V.a,{md:6},void 0,y()(W.a,{theme:B.a.material},void 0,i||(i=y()(_.a,{dependentAxis:!0})),y()(_.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),y()(U.a,{samples:600,y:function(t){return $()(t.x,x,h)},domain:{x:[0,x+1],y:[0,1.1]}}),y()(U.a,{data:[{x:a,y:0},{x:a,y:$()(a,x,h)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),y()(U.a,{data:[{x:0,y:$()(a,x,h)},{x:a,y:$()(a,x,h)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),y()(R.a,{eventKey:1,title:o||(o=y()(ot.a,{raw:"P(X \\le x_0)"}))},void 0,y()(T.a,{},void 0,y()(X.a,{},void 0,y()(V.a,{md:4},void 0,y()(it.a,{},void 0,this.renderInputs("smaller"),y()(ot.a,{raw:"P(X \\le".concat(J()(a,-4),") = ").concat(J()($()(a,x,h),-4)),displayMode:!0,tag:""}))),y()(V.a,{md:8},void 0,y()(it.a,{header:O("probability-plot")},void 0,y()(X.a,{},void 0,y()(V.a,{md:6},void 0,y()(W.a,{theme:B.a.material},void 0,c||(c=y()(_.a,{dependentAxis:!0})),y()(_.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),y()(q.a,{data:this.state.data,style:{data:{fill:function(t){return t.datum.x<=a?"tomato":"steelblue"}}}}))),this.props.hideCDF?null:y()(V.a,{md:6},void 0,y()(W.a,{theme:B.a.material},void 0,s||(s=y()(_.a,{dependentAxis:!0})),y()(_.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),y()(U.a,{samples:600,y:function(t){return $()(t.x,x,h)},domain:{x:[0,x+1],y:[0,1.1]}}),y()(U.a,{data:[{x:a,y:0},{x:a,y:$()(a,x,h)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),y()(U.a,{data:[{x:0,y:$()(a,x,h)},{x:a,y:$()(a,x,h)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),y()(R.a,{eventKey:2,title:l||(l=y()(ot.a,{raw:"P(X > x_0)"}))},void 0,y()(T.a,{},void 0,y()(X.a,{},void 0,y()(V.a,{md:4},void 0,y()(it.a,{},void 0,this.renderInputs("greater"),y()(ot.a,{raw:"P(X >".concat(J()(a,-4),") = ").concat(J()(1-$()(a,x,h),-4)),displayMode:!0,tag:""}))),y()(V.a,{md:8},void 0,y()(it.a,{header:O("probability-plot")},void 0,y()(X.a,{},void 0,y()(V.a,{md:6},void 0,y()(W.a,{theme:B.a.material},void 0,u||(u=y()(_.a,{dependentAxis:!0})),y()(_.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),y()(q.a,{data:this.state.data,style:{data:{fill:function(e){return e.datum.x>t.state.x0?"tomato":"steelblue"}}}}))),this.props.hideCDF?null:y()(V.a,{md:6},void 0,y()(W.a,{theme:B.a.material},void 0,d||(d=y()(_.a,{dependentAxis:!0})),y()(_.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),y()(U.a,{samples:600,y:function(t){return $()(t.x,x,h)},domain:{x:[0,x+1],y:[0,1.1]}}),y()(U.a,{data:[{x:a,y:0},{x:a,y:$()(a,x,h)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),y()(U.a,{data:[{x:0,y:$()(a,x,h)},{x:a,y:$()(a,x,h)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),y()(R.a,{eventKey:3,title:f||(f=y()(ot.a,{raw:"P( x_0 \\le X \\le x_1)"}))},void 0,y()(T.a,{},void 0,y()(X.a,{},void 0,y()(V.a,{md:4},void 0,y()(it.a,{},void 0,this.renderInputs("range"),m>=a?y()(ot.a,{raw:"P(".concat(J()(a,-4)," \\le X \\le ").concat(J()(m,-4),") = ").concat(J()($()(m,x,h)-$()(a-1,x,h),-4)),displayMode:!0,tag:""}):y()(M.a,{variant:"warning"},void 0,O("lower-bound-smaller-equal-upper-bound")))),y()(V.a,{md:8},void 0,y()(it.a,{header:O("probability-plot")},void 0,y()(X.a,{},void 0,y()(V.a,{md:6},void 0,y()(W.a,{theme:B.a.material},void 0,v||(v=y()(_.a,{dependentAxis:!0})),y()(_.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),y()(q.a,{data:this.state.data,style:{data:{fill:function(e){return t.state.x0<=e.datum.x&&e.datum.x<=t.state.x1?"tomato":"steelblue"}}}}))),this.props.hideCDF?null:y()(V.a,{md:6},void 0,y()(W.a,{theme:B.a.material},void 0,b||(b=y()(_.a,{dependentAxis:!0})),y()(_.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),y()(U.a,{samples:600,y:function(t){return $()(t.x,x,h)},domain:{x:[0,x+1],y:[0,1.1]}})))))))))),p||(p=y()(at.a,{id:"binomial_distribution"}))))}}]),a}(I.Component);dt.defaultProps={hideCDF:!1,step:.01,style:{}},e.default=Object(D.a)("LearnDistribution")(dt)},748:function(t,e,a){"use strict";var n=a(1135);t.exports=n}}]);