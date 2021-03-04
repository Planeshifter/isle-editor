/*! For license information please see LearnNegativeBinomialDistribution.29c59d7d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[609],{1160:function(t,e,a){"use strict";var n=a(452);t.exports=function(t){return n(t)===t&&t>=0}},2821:function(t,e,a){"use strict";var n=a(423),r=a(4952);n(r,"factory",a(4953)),t.exports=r},4207:function(t,e,a){"use strict";var n=a(4950);t.exports=function(t,e,a){var r;return 1===t?0:(r=n(e,a,t,1-t,!0),r/=(1-t)*t)}},4208:function(t,e,a){"use strict";var n,r=a(2821);n={left:function(t,e,a,n){for(;;){if(0===t||r(t-1,a,n)<e)return t;t-=1}},right:function(t,e,a,n){for(;;)if(r(t+=1,a,n)>=e)return t}},t.exports=n},453:function(t,e,a){"use strict";a.d(e,"b",(function(){return i}));var n=a(0),r=a.n(n).a.createContext(null),i=function(t,e){return void 0===e&&(e=null),null!=t?String(t):e||null};e.a=r},471:function(t,e,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);e.a=r},479:function(t,e,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);r.displayName="NavContext",e.a=r},4948:function(t,e,a){"use strict";var n=a(423),r=a(4949);n(r,"factory",a(4951)),t.exports=r},4949:function(t,e,a){"use strict";var n=a(420),r=a(766),i=a(4207);t.exports=function(t,e,a){return n(t)||n(e)||n(a)||e<=0||a<=0||a>1?NaN:r(t)&&0!==a?a/(e+t)*i(a,e,t+1):0}},4950:function(t,e,a){"use strict";var n=a(790),r=a(696),i=a(537),o=a(433),c=a(431),s=a(449),l=a(443),u=a(482),d=a(502),f=a(451),v=a(641),b=a(687),m=a(731),p=a(665);t.exports=function(t,e,a,x,y){var h,O,g,E,j,C,N,P,w,K,k,S,F,I;if(!y)return l(a,t)*l(x,e);if(E=t+m-.5,j=e+m-.5,C=(F=t+e)+m-.5,h=n(F),h/=n(t)*n(e),h*=o(j/p),h*=o(E/C),P=(x*t-a*j)/j,d(c(N=(a*e-x*E)/E),c(P))<.2)if(N*P>0||d(t,e)<1)c(N)<.1?h*=s(t*i(N)):h*=l(a*C/E,t),c(P)<.1?h*=s(e*i(P)):h*=l(x*C/j,e);else if(u(c(N),c(P))<.5)g=e/t,(O=t<e)&&g*P<.1||!O&&N/g>.1?(w=r(g*i(P)),w=t*i(w=N+w+w*N),h*=s(w)):(w=r(i(N)/g),w=e*i(w=P+w+w*P),h*=s(w));else if(c(N)<c(P))if((I=t*i(N)+e*f(x*C/j))<=b||I>=v){if((I+=f(h))>=v)return NaN;h=s(I)}else h*=s(I);else if((I=e*i(P)+t*f(a*C/E))<=b||I>=v){if((I+=f(h))>=v)return NaN;h=s(I)}else h*=s(I);else if(S=x*C/j,N=t*f(k=a*C/E),P=e*f(S),N>=v||N<=b||P>=v||P<=b)if(t<e)if(K=l(S,e/t),(w=t*(f(k)+f(K)))<v&&w>b)h*=l(K*k,t);else{if((P+=N+f(h))>=v)return NaN;h=s(P)}else if(K=l(k,t/e),(w=(f(K)+f(S))*e)<v&&w>b)h*=l(K*S,e);else{if((P+=N+f(h))>=v)return NaN;h=s(P)}else h*=l(k,t)*l(S,e);return h}},4951:function(t,e,a){"use strict";var n=a(766),r=a(469),i=a(420),o=a(4207);t.exports=function(t,e){return i(t)||i(e)||t<=0||e<=0||e>1?r(NaN):function(a){if(i(a))return NaN;if(!n(a))return 0;return e/(t+a)*o(e,t,a+1)}}},4952:function(t,e,a){"use strict";var n=a(685),r=a(420),i=a(452),o=a(429);t.exports=function(t,e,a){var c;return r(t)||r(e)||r(a)||e<=0||a<0||a>1?NaN:t<0?0:t===o?1:(c=i(t+1e-7),n(a,e,c+1))}},4953:function(t,e,a){"use strict";var n=a(469),r=a(685),i=a(420),o=a(452),c=a(429);t.exports=function(t,e){return i(t)||i(e)||t<=0||e<0||e>1?n(NaN):function(a){var n;if(i(a))return NaN;if(a<0)return 0;if(a===c)return 1;return n=o(a+1e-7),r(e,t,n+1)}}},4954:function(t,e,a){"use strict";var n=a(423),r=a(4955);n(r,"factory",a(4956)),t.exports=r},4955:function(t,e,a){"use strict";var n=a(2821),r=a(704),i=a(420),o=a(548),c=a(433),s=a(830),l=a(429),u=a(4208);t.exports=function(t,e,a){var d,f,v,b,m,p;return i(e)||i(a)||i(t)||e<=0||a<0||a>1||t<0||t>1?NaN:0===t?0:1===t?l:(b=e*(p=1-a)/a,d=1/(v=c(e*p)/a),m=t<.5?-r(2*t)*s:r(2*(1-t))*s,f=o(b+v*(m+d*(m*m-1)/6)),n(f,e,a)>=t?u.left(f,t,e,a):u.right(f,t,e,a))}},4956:function(t,e,a){"use strict";var n=a(469),r=a(2821),i=a(704),o=a(420),c=a(548),s=a(433),l=a(830),u=a(429),d=a(4208);t.exports=function(t,e){var a,f,v,b;return o(t)||o(e)||t<=0||e<0||e>1?n(NaN):(v=t*(b=1-e)/e,f=s(t*b)/e,a=(2/e-1)/f,function(n){var s,b;if(o(n)||n<0||n>1)return NaN;if(0===n)return 0;if(1===n)return u;b=n<.5?-i(2*n)*l:i(2*(1-n))*l;return s=c(v+f*(b+a*(b*b-1)/6)),r(s,t,e)>=n?d.left(s,n,t,e):d.right(s,n,t,e)})}},497:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(t,e){return n(t.querySelectorAll(e))}},512:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),l=a(464),u=a(538),d=a(411),f={disabled:!1,as:l.a},v=s.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.disabled,c=t.className,l=t.href,f=t.eventKey,v=t.onSelect,b=t.as,m=Object(r.a)(t,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return a=Object(d.a)(a,"nav-link"),s.a.createElement(u.a,Object(n.a)({},m,{href:l,ref:e,eventKey:f,as:b,disabled:i,onSelect:v,className:o()(c,a,i&&"disabled")}))}));v.displayName="NavLink",v.defaultProps=f,e.a=v},514:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),l=a(411),u=s.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.className,c=t.children,u=t.as,d=void 0===u?"div":u,f=Object(r.a)(t,["bsPrefix","className","children","as"]);return a=Object(l.a)(a,"nav-item"),s.a.createElement(d,Object(n.a)({},f,{ref:e,className:o()(i,a)}),c)}));u.displayName="NavItem",e.a=u},520:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(474),o=a(471),c=a(453);e.a=function(t){var e=Object(i.a)(t,{activeKey:"onSelect"}),a=e.id,s=e.generateChildId,l=e.onSelect,u=e.activeKey,d=e.transition,f=e.mountOnEnter,v=e.unmountOnExit,b=e.children,m=Object(n.useMemo)((function(){return s||function(t,e){return a?a+"-"+e+"-"+t:null}}),[a,s]),p=Object(n.useMemo)((function(){return{onSelect:l,activeKey:u,transition:d,mountOnEnter:f||!1,unmountOnExit:v||!1,getControlledId:function(t){return m(t,"tabpane")},getControllerId:function(t){return m(t,"tab")}}}),[l,u,d,f,v,m]);return r.a.createElement(o.a.Provider,{value:p},r.a.createElement(c.a.Provider,{value:l||null},b))}},521:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),l=a(411),u=s.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.as,c=void 0===i?"div":i,u=t.className,d=Object(r.a)(t,["bsPrefix","as","className"]),f=Object(l.a)(a,"tab-content");return s.a.createElement(c,Object(n.a)({ref:e},d,{className:o()(u,f)}))}));e.a=u},522:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),l=a(411),u=a(471),d=a(453),f=a(626);var v=s.a.forwardRef((function(t,e){var a=function(t){var e=Object(c.useContext)(u.a);if(!e)return t;var a=e.activeKey,i=e.getControlledId,o=e.getControllerId,s=Object(r.a)(e,["activeKey","getControlledId","getControllerId"]),l=!1!==t.transition&&!1!==s.transition,v=Object(d.b)(t.eventKey);return Object(n.a)({},t,{active:null==t.active&&null!=v?Object(d.b)(a)===v:t.active,id:i(t.eventKey),"aria-labelledby":o(t.eventKey),transition:l&&(t.transition||s.transition||f.a),mountOnEnter:null!=t.mountOnEnter?t.mountOnEnter:s.mountOnEnter,unmountOnExit:null!=t.unmountOnExit?t.unmountOnExit:s.unmountOnExit})}(t),i=a.bsPrefix,v=a.className,b=a.active,m=a.onEnter,p=a.onEntering,x=a.onEntered,y=a.onExit,h=a.onExiting,O=a.onExited,g=a.mountOnEnter,E=a.unmountOnExit,j=a.transition,C=a.as,N=void 0===C?"div":C,P=(a.eventKey,Object(r.a)(a,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),w=Object(l.a)(i,"tab-pane");if(!b&&!j&&E)return null;var K=s.a.createElement(N,Object(n.a)({},P,{ref:e,role:"tabpanel","aria-hidden":!b,className:o()(v,w,{active:b})}));return j&&(K=s.a.createElement(j,{in:b,onEnter:m,onEntering:p,onEntered:x,onExit:y,onExiting:h,onExited:O,mountOnEnter:g,unmountOnExit:E},K)),s.a.createElement(u.a.Provider,{value:null},s.a.createElement(d.a.Provider,{value:null},K))}));v.displayName="TabPane",e.a=v},524:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a(0);function r(){return Object(n.useReducer)((function(t){return!t}),!1)[1]}},538:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),l=a(523),u=(a(532),a(479)),d=a(453),f=s.a.forwardRef((function(t,e){var a=t.active,i=t.className,f=t.eventKey,v=t.onSelect,b=t.onClick,m=t.as,p=Object(r.a)(t,["active","className","eventKey","onSelect","onClick","as"]),x=Object(d.b)(f,p.href),y=Object(c.useContext)(d.a),h=Object(c.useContext)(u.a),O=a;if(h){p.role||"tablist"!==h.role||(p.role="tab");var g=h.getControllerId(x),E=h.getControlledId(x);p["data-rb-event-key"]=x,p.id=g||p.id,p["aria-controls"]=E||p["aria-controls"],O=null==a&&null!=x?h.activeKey===x:a}"tab"===p.role&&(p.disabled&&(p.tabIndex=-1,p["aria-disabled"]=!0),p["aria-selected"]=O);var j=Object(l.a)((function(t){b&&b(t),null!=x&&(v&&v(x,t),y&&y(x,t))}));return s.a.createElement(m,Object(n.a)({},p,{ref:e,onClick:j,className:o()(i,O&&"active")}))}));f.defaultProps={disabled:!1},e.a=f},539:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(497),o=a(0),c=a.n(o),s=a(524),l=a(556),u=a(479),d=a(453),f=a(471),v=function(){},b=c.a.forwardRef((function(t,e){var a,b,m=t.as,p=void 0===m?"ul":m,x=t.onSelect,y=t.activeKey,h=t.role,O=t.onKeyDown,g=Object(r.a)(t,["as","onSelect","activeKey","role","onKeyDown"]),E=Object(s.a)(),j=Object(o.useRef)(!1),C=Object(o.useContext)(d.a),N=Object(o.useContext)(f.a);N&&(h=h||"tablist",y=N.activeKey,a=N.getControlledId,b=N.getControllerId);var P=Object(o.useRef)(null),w=function(t){var e=P.current;if(!e)return null;var a=Object(i.a)(e,"[data-rb-event-key]:not(.disabled)"),n=e.querySelector(".active");if(!n)return null;var r=a.indexOf(n);if(-1===r)return null;var o=r+t;return o>=a.length&&(o=0),o<0&&(o=a.length-1),a[o]},K=function(t,e){null!=t&&(x&&x(t,e),C&&C(t,e))};Object(o.useEffect)((function(){if(P.current&&j.current){var t=P.current.querySelector("[data-rb-event-key].active");t&&t.focus()}j.current=!1}));var k=Object(l.a)(e,P);return c.a.createElement(d.a.Provider,{value:K},c.a.createElement(u.a.Provider,{value:{role:h,activeKey:Object(d.b)(y),getControlledId:a||v,getControllerId:b||v}},c.a.createElement(p,Object(n.a)({},g,{onKeyDown:function(t){var e;switch(O&&O(t),t.key){case"ArrowLeft":case"ArrowUp":e=w(-1);break;case"ArrowRight":case"ArrowDown":e=w(1);break;default:return}e&&(t.preventDefault(),K(e.dataset.rbEventKey,t),j.current=!0,E())},ref:k,role:h}))))}));e.a=b},540:function(t,e,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);r.displayName="NavbarContext",e.a=r},561:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=(a(599),a(0)),s=a.n(c),l=a(474),u=a(411),d=a(540),f=a(663),v=a(539),b=a(514),m=a(512),p=s.a.forwardRef((function(t,e){var a,i,b,m=Object(l.a)(t,{activeKey:"onSelect"}),p=m.as,x=void 0===p?"div":p,y=m.bsPrefix,h=m.variant,O=m.fill,g=m.justify,E=m.navbar,j=m.className,C=m.children,N=m.activeKey,P=Object(r.a)(m,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),w=Object(u.a)(y,"nav"),K=!1,k=Object(c.useContext)(d.a),S=Object(c.useContext)(f.a);return k?(i=k.bsPrefix,K=null==E||E):S&&(b=S.cardHeaderBsPrefix),s.a.createElement(v.a,Object(n.a)({as:x,ref:e,activeKey:N,className:o()(j,(a={},a[w]=!K,a[i+"-nav"]=K,a[b+"-"+h]=!!b,a[w+"-"+h]=!!h,a[w+"-fill"]=O,a[w+"-justified"]=g,a))},P),C)}));p.displayName="Nav",p.defaultProps={justify:!1,fill:!1},p.Item=b.a,p.Link=m.a,e.a=p},562:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return o}));var n=a(0),r=a.n(n);function i(t,e){var a=0;return r.a.Children.map(t,(function(t){return r.a.isValidElement(t)?e(t,a++):t}))}function o(t,e){var a=0;r.a.Children.forEach(t,(function(t){r.a.isValidElement(t)&&e(t,a++)}))}},568:function(t,e,a){"use strict";var n=a(535),r=a(0),i=a.n(r),o=a(520),c=a(521),s=a(522),l=function(t){function e(){return t.apply(this,arguments)||this}return Object(n.a)(e,t),e.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},e}(i.a.Component);l.Container=o.a,l.Content=c.a,l.Pane=s.a,e.a=l},591:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(0),o=a.n(i),c=(a(577),a(474)),s=a(561),l=a(512),u=a(514),d=a(520),f=a(521),v=a(522),b=a(562);function m(t){var e=t.props,a=e.title,n=e.eventKey,r=e.disabled,i=e.tabClassName,c=e.id;return null==a?null:o.a.createElement(u.a,{as:l.a,eventKey:n,disabled:r,id:c,className:i},a)}var p=function(t){var e=Object(c.a)(t,{activeKey:"onSelect"}),a=e.id,i=e.onSelect,l=e.transition,u=e.mountOnEnter,p=e.unmountOnExit,x=e.children,y=e.activeKey,h=void 0===y?function(t){var e;return Object(b.a)(t,(function(t){null==e&&(e=t.props.eventKey)})),e}(x):y,O=Object(r.a)(e,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return o.a.createElement(d.a,{id:a,activeKey:h,onSelect:i,transition:l,mountOnEnter:u,unmountOnExit:p},o.a.createElement(s.a,Object(n.a)({},O,{role:"tablist",as:"nav"}),Object(b.b)(x,m)),o.a.createElement(f.a,null,Object(b.b)(x,(function(t){var e=Object(n.a)({},t.props);return delete e.title,delete e.disabled,delete e.tabClassName,o.a.createElement(v.a,e)}))))};p.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},p.displayName="Tabs",e.a=p},6450:function(t,e,a){"use strict";a.r(e);a(438),a(436),a(441),a(440),a(437),a(427),a(416),a(421);var n=a(407),r=a.n(n),i=a(414),o=a.n(i),c=a(415),s=a.n(c),l=a(425),u=a.n(l),d=a(418),f=a.n(d),v=a(419),b=a.n(v),m=a(417),p=a.n(m),x=a(412),y=a.n(x),h=a(0),O=(a(404),a(4172)),g=a(465),E=a(454),j=a(591),C=a(568),N=a(509),P=a(493),w=a(476),K=a(6534),k=a(6515),S=a(4680),F=a(6397),I=a(6524),L=a(473),A=a.n(L),D=a(666),R=a.n(D),T=a(4948),M=a.n(T),X=a(2821),V=a.n(X),W=a(4954),_=a.n(W),q=a(628),B=a(490),U=a(582),H=a(534),J=a(494),z=a(422);function G(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function Q(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?G(Object(a),!0).forEach((function(e){y()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):G(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function Y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=p()(t);if(e){var r=p()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return b()(this,a)}}Object(z.a)("LearnDistribution");var Z=.999,$=r()(J.a,{raw:"P(X = x)"}),tt=r()(K.a,{dependentAxis:!0}),et=r()(K.a,{dependentAxis:!0}),at=r()(J.a,{raw:"P(X \\le x_0)"}),nt=r()(K.a,{dependentAxis:!0}),rt=r()(K.a,{dependentAxis:!0}),it=r()(J.a,{raw:"P(X > x_0)"}),ot=r()(K.a,{dependentAxis:!0}),ct=r()(K.a,{dependentAxis:!0}),st=r()(J.a,{raw:"P( x_0 \\le X \\le x_1)"}),lt=r()(K.a,{dependentAxis:!0}),ut=r()(K.a,{dependentAxis:!0}),dt=r()(q.a,{id:"negative_binomial_distribution"}),ft=function(t){f()(a,t);var e=Y(a);function a(t){var n;o()(this,a),n=e.call(this,t),y()(u()(n),"handleSuccessesChange",(function(t){for(var e=n.props.countTrials?t:0,a=_()(Z,t,n.state.p)+1+e,r=R()(e,a+1,1),i=new Array(r.length),o=0;o<r.length;o++)i[o]={x:r[o],y:M()(r[o]-e,t,n.state.p)};n.setState({r:t,data:i,max:a})})),y()(u()(n),"handleProbChange",(function(t){for(var e=n.props.countTrials?n.state.r:0,a=_()(Z,n.state.r,t)+1+e,r=R()(e,a+1,1),i=new Array(r.length),o=0;o<r.length;o++)i[o]={x:r[o],y:M()(r[o]-e,n.state.r,t)};n.setState({p:t,data:i,max:a})})),y()(u()(n),"handleLowerChange",(function(t){n.setState({x0:t})})),y()(u()(n),"handleUpperChange",(function(t){n.setState({x1:t})}));for(var r=t.countTrials?10:0,i=_()(Z,10,.5)+1+r,c=R()(r,i+1,1),s=new Array(c.length),l=0;l<c.length;l++)s[l]={x:c[l],y:M()(c[l]-r,10,.5)};return n.state={r:10,p:.5,x:0,x0:0,x1:1,data:s,max:i},n}return s()(a,[{key:"renderInputs",value:function(t){var e=this.props.t;return r()(h.Fragment,{},void 0,r()(B.b,{legend:"".concat(e("success-until-stop")," (r)"),defaultValue:this.state.r,min:1,step:1,onChange:this.handleSuccessesChange},"".concat(t,"-r")),r()(B.b,{legend:"".concat(e("success-probability")," (p)"),defaultValue:this.state.p,step:this.props.step,max:.99,min:.01,onChange:this.handleProbChange},"".concat(t,"-p")),r()(U.a,{legend:"x0",defaultValue:this.state.x0,step:1,min:0,max:this.state.max,onChange:this.handleLowerChange},"".concat(t,"-x0")),"range"===t?r()(U.a,{legend:"x1",defaultValue:this.state.x1,min:0,max:this.state.max,step:1,onChange:this.handleUpperChange},"".concat(t,"-x1")):null)}},{key:"render",value:function(){var t=this,e=this.state,a=e.x,n=e.x0,i=e.x1,o=e.r,c=e.p,s=e.max,l=this.props.t,u=this.props.countTrials?o:0;return r()(g.a,{style:Q({maxWidth:1200,margin:"10px auto"},this.props.style)},void 0,r()(g.a.Header,{as:"h3"},void 0,l("negative-binomial-distribution")),r()(g.a.Body,{},void 0,r()(j.a,{defaultActiveKey:0,id:"negative-binomial-tabs"},void 0,r()(C.a,{eventKey:0,title:$},void 0,r()(N.a,{},void 0,r()(w.a,{},void 0,r()(P.a,{md:5},void 0,r()(H.a,{title:l("negative-binomial-probabilities")},void 0,r()("span",{},void 0,l("number-of-successes-until-experiment-stopped")," "),r()(B.b,{inline:!0,legend:"r",defaultValue:this.state.r,step:1,min:1,max:999,onChange:this.handleSuccessesChange}),r()("span",{},void 0," ",l("success-probability-of")),r()(B.b,{inline:!0,legend:"p",defaultValue:this.state.p,step:.01,max:.99,min:.01,onChange:this.handleProbChange}),r()("span",{},void 0,l("we-get")),this.props.countTrials?r()(J.a,{raw:"P(X=x)= \\Large \\tbinom{x - 1}{".concat(o,"-1} ").concat(c,"^{").concat(o,"} ").concat(A()(1-c,-4),"^{x-").concat(o,"}"),displayMode:!0}):r()(J.a,{raw:"P(X=x)= \\Large \\tbinom{x + ".concat(o," - 1}{x} ").concat(c,"^{").concat(o,"} ").concat(A()(1-c,-4),"^{x}"),displayMode:!0}),r()("span",{},void 0,l("evaluated-at")," "),r()(B.b,{inline:!0,legend:"x",defaultValue:this.state.x,step:1,max:s,min:0,onChange:function(e){return t.setState({x:e})}})," ",r()("span",{},void 0,l("we-get")),this.props.countTrials?r()(J.a,{raw:"P(X=".concat(a,") = \\Large \\tbinom{").concat(a-1,"}{").concat(o-1,"} ").concat(c,"^{").concat(o,"} ").concat(A()(1-c,-4),"^{").concat(a-o,"} \\approx ").concat(M()(a-u,o,c).toFixed(4)),displayMode:!0}):r()(J.a,{raw:"P(X=".concat(a,") = \\Large \\tbinom{").concat(o+a-1,"}{").concat(a,"} ").concat(c,"^{").concat(o,"} ").concat(A()(1-c,-4),"^{").concat(a,"} \\approx ").concat(M()(a-u,o,c).toFixed(4)),displayMode:!0}),r()("p",{},void 0,this.props.countTrials?l("random-variable-denotes-trials"):l("random-variable-denotes-failures")))),r()(P.a,{md:7},void 0,r()(H.a,{header:l("probability-plot")},void 0,r()(w.a,{},void 0,r()(P.a,{md:6},void 0,r()(k.a,{theme:S.a.material},void 0,tt,r()(K.a,{label:"PMF",tickFormat:function(t){return A()(t,-2)},style:{axisLabel:{padding:40}}}),r()(F.a,{data:this.state.data,style:{data:{fill:function(t){return t.datum.x===n?"tomato":"steelblue"}}}}))),r()(P.a,{md:6},void 0,r()(k.a,{theme:S.a.material},void 0,et,r()(K.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),r()(I.a,{samples:600,y:function(t){return V()(t.x-u,o,c)},domain:{x:[0,s+1],y:[0,1.1]}}),r()(I.a,{data:[{x:n,y:0},{x:n,y:V()(n-u,o,c)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),r()(I.a,{data:[{x:0,y:V()(n-u,o,c)},{x:n,y:V()(n-u,o,c)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),r()(C.a,{eventKey:1,title:at},void 0,r()(N.a,{},void 0,r()(w.a,{},void 0,r()(P.a,{md:4},void 0,r()(H.a,{},void 0,this.renderInputs("smaller"),r()(J.a,{raw:"P(X \\le ".concat(A()(n,-4)," ) = ").concat(A()(V()(n-u,o,c),-4)),displayMode:!0,tag:""}))),r()(P.a,{md:8},void 0,r()(H.a,{header:"Probability Plot"},void 0,r()(w.a,{},void 0,r()(P.a,{md:6},void 0,r()(k.a,{theme:S.a.material},void 0,nt,r()(K.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(F.a,{data:this.state.data,style:{data:{fill:function(t){return t.datum.x<=n?"tomato":"steelblue"}}}}))),r()(P.a,{md:6},void 0,r()(k.a,{theme:S.a.material},void 0,rt,r()(K.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(I.a,{samples:600,y:function(t){return V()(t.x-u,o,c)},domain:{x:[0,s+1],y:[0,1.1]}}),r()(I.a,{data:[{x:n,y:0},{x:n,y:V()(n-u,o,c)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),r()(I.a,{data:[{x:0,y:V()(n-u,o,c)},{x:n,y:V()(n-u,o,c)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),r()(C.a,{eventKey:2,title:it},void 0,r()(N.a,{},void 0,r()(w.a,{},void 0,r()(P.a,{md:4},void 0,r()(H.a,{},void 0,this.renderInputs("greater"),r()(J.a,{raw:"P(X > ".concat(A()(n,-4),") = ").concat(A()(1-V()(n-u,o,c),-4)),displayMode:!0,tag:""}))),r()(P.a,{md:8},void 0,r()(H.a,{header:l("probability-plot")},void 0,r()(w.a,{},void 0,r()(P.a,{md:6},void 0,r()(k.a,{theme:S.a.material},void 0,ot,r()(K.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(F.a,{data:this.state.data,style:{data:{fill:function(e){return e.datum.x>t.state.x0?"tomato":"steelblue"}}}}))),r()(P.a,{md:6},void 0,r()(k.a,{theme:S.a.material},void 0,ct,r()(K.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(I.a,{samples:600,y:function(t){return V()(t.x-u,o,c)},domain:{x:[0,s],y:[0,1.1]}}),r()(I.a,{data:[{x:n,y:0},{x:n,y:V()(n-u,o,c)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),r()(I.a,{data:[{x:0,y:V()(n-u,o,c)},{x:n,y:V()(n-u,o,c)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),r()(C.a,{eventKey:3,title:st},void 0,r()(N.a,{},void 0,r()(w.a,{},void 0,r()(P.a,{md:4},void 0,r()(H.a,{},void 0,this.renderInputs("range"),i>=n?r()(J.a,{raw:"P(".concat(A()(n,-4)," \\le X \\le ").concat(A()(i,-4),") = ").concat(A()(V()(i-u,o,c)-V()(n-u-1,o,c),-4)),displayMode:!0,tag:""}):r()(E.a,{variant:"warning"},void 0,l("lower-bound-smaller-equal-upper-bound")))),r()(P.a,{md:8},void 0,r()(H.a,{header:l("probability-plot")},void 0,r()(w.a,{},void 0,r()(P.a,{md:6},void 0,r()(k.a,{theme:S.a.material},void 0,lt,r()(K.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(F.a,{data:this.state.data,style:{data:{fill:function(t){return n<=t.datum.x&&t.datum.x<=i?"tomato":"steelblue"}}}}))),r()(P.a,{md:6},void 0,r()(k.a,{theme:S.a.material},void 0,ut,r()(K.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(I.a,{samples:600,y:function(t){return V()(t.x-u,o,c)},domain:{x:[0,s],y:[0,1.1]}})))))))))),dt))}}]),a}(h.Component);ft.defaultProps={countTrials:!1,step:.01,style:{}},e.default=Object(O.a)("LearnDistribution")(ft)},766:function(t,e,a){"use strict";var n=a(1160);t.exports=n}}]);