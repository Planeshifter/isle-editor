/*! For license information please see LearnPoissonDistribution.87aee981.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[606],{1160:function(t,e,a){"use strict";var n=a(452);t.exports=function(t){return n(t)===t&&t>=0}},2718:function(t,e,a){"use strict";var n=a(3822);t.exports=n},2822:function(t,e,a){"use strict";var n=a(423),r=a(4960);n(r,"factory",a(4961)),t.exports=r},3809:function(t,e,a){"use strict";var n=a(423),r=a(3810);n(r,"factory",a(3811)),t.exports=r},3810:function(t,e,a){"use strict";var n=a(420);t.exports=function(t,e){return n(t)||n(e)?NaN:t===e?1:0}},3811:function(t,e,a){"use strict";var n=a(469),r=a(420);t.exports=function(t){return r(t)?n(NaN):function(e){if(r(e))return NaN;return e===t?1:0}}},3822:function(t,e,a){"use strict";var n=a(3823),r=a(686);t.exports=function(t){return n(t)?NaN:r(t+1)}},3823:function(t,e,a){"use strict";var n=a(3824);t.exports=n},3824:function(t,e,a){"use strict";var n=a(452);t.exports=function(t){return n(t)===t&&t<0}},4209:function(t,e,a){"use strict";var n,r=a(2822);n={left:function(t,e,a){for(;;){if(0===t||r(t-1,a)<e)return t;t-=1}},right:function(t,e,a){for(;;)if(r(t+=1,a)>=e)return t}},t.exports=n},453:function(t,e,a){"use strict";a.d(e,"b",(function(){return i}));var n=a(0),r=a.n(n).a.createContext(null),i=function(t,e){return void 0===e&&(e=null),null!=t?String(t):e||null};e.a=r},471:function(t,e,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);e.a=r},479:function(t,e,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);r.displayName="NavContext",e.a=r},4957:function(t,e,a){"use strict";var n=a(423),r=a(4958);n(r,"factory",a(4959)),t.exports=r},4958:function(t,e,a){"use strict";var n=a(766),r=a(2718),i=a(420),o=a(449),c=a(451),s=a(429);t.exports=function(t,e){var a;return i(t)||i(e)||e<0?NaN:0===e?0===t?1:0:n(t)&&t!==s?(a=t*c(e)-e-r(t),o(a)):0}},4959:function(t,e,a){"use strict";var n=a(766),r=a(469),i=a(2718),o=a(3809).factory,c=a(420),s=a(449),u=a(451),l=a(429);t.exports=function(t){return c(t)||t<0?r(NaN):0===t?o(0):function(e){var a;if(c(e))return NaN;if(n(e)&&e!==l)return a=e*u(t)-t-i(e),s(a);return 0}}},4960:function(t,e,a){"use strict";var n=a(809),r=a(420),i=a(452),o=a(429);t.exports=function(t,e){return r(t)||r(e)||e<0?NaN:t<0?0:0===e||t===o?1:n(e,i(t)+1,!0,!0)}},4961:function(t,e,a){"use strict";var n=a(469),r=a(1149).factory,i=a(809),o=a(420),c=a(452),s=a(429);t.exports=function(t){return o(t)||t<0?n(NaN):0===t?r(0):function(e){if(o(e))return NaN;if(e<0)return 0;if(e===s)return 1;return i(t,c(e)+1,!0,!0)}}},4962:function(t,e,a){"use strict";var n=a(423),r=a(4963);n(r,"factory",a(4964)),t.exports=r},4963:function(t,e,a){"use strict";var n=a(704),r=a(420),i=a(548),o=a(433),c=a(2822),s=a(830),u=a(429),l=a(4209);t.exports=function(t,e){var a,d,f,v;return r(e)||e<0||r(t)||t<0||t>1?NaN:0===e||0===t?0:1===t?u:(a=1/(f=o(e)),v=t<.5?-n(2*t)*s:n(2*(1-t))*s,d=i(e+f*(v+a*(v*v-1)/6)),c(d,e)>=t?l.left(d,t,e):l.right(d,t,e))}},4964:function(t,e,a){"use strict";var n=a(469),r=a(1442).factory,i=a(704),o=a(420),c=a(548),s=a(433),u=a(2822),l=a(830),d=a(429),f=a(4209);t.exports=function(t){var e,a;return o(t)||t<0?n(NaN):0===t?r(0):(a=s(t),e=1/a,function(n){var r,s;if(o(n)||n<0||n>1)return NaN;if(0===n)return 0;if(1===n)return d;s=n<.5?-i(2*n)*l:i(2*(1-n))*l;return r=c(t+a*(s+e*(s*s-1)/6)),u(r,t)>=n?f.left(r,n,t):f.right(r,n,t)})}},497:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(t,e){return n(t.querySelectorAll(e))}},512:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),u=a(464),l=a(538),d=a(411),f={disabled:!1,as:u.a},v=s.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.disabled,c=t.className,u=t.href,f=t.eventKey,v=t.onSelect,m=t.as,b=Object(r.a)(t,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return a=Object(d.a)(a,"nav-link"),s.a.createElement(l.a,Object(n.a)({},b,{href:u,ref:e,eventKey:f,as:m,disabled:i,onSelect:v,className:o()(c,a,i&&"disabled")}))}));v.displayName="NavLink",v.defaultProps=f,e.a=v},514:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),u=a(411),l=s.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.className,c=t.children,l=t.as,d=void 0===l?"div":l,f=Object(r.a)(t,["bsPrefix","className","children","as"]);return a=Object(u.a)(a,"nav-item"),s.a.createElement(d,Object(n.a)({},f,{ref:e,className:o()(i,a)}),c)}));l.displayName="NavItem",e.a=l},520:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(474),o=a(471),c=a(453);e.a=function(t){var e=Object(i.a)(t,{activeKey:"onSelect"}),a=e.id,s=e.generateChildId,u=e.onSelect,l=e.activeKey,d=e.transition,f=e.mountOnEnter,v=e.unmountOnExit,m=e.children,b=Object(n.useMemo)((function(){return s||function(t,e){return a?a+"-"+e+"-"+t:null}}),[a,s]),p=Object(n.useMemo)((function(){return{onSelect:u,activeKey:l,transition:d,mountOnEnter:f||!1,unmountOnExit:v||!1,getControlledId:function(t){return b(t,"tabpane")},getControllerId:function(t){return b(t,"tab")}}}),[u,l,d,f,v,b]);return r.a.createElement(o.a.Provider,{value:p},r.a.createElement(c.a.Provider,{value:u||null},m))}},521:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),u=a(411),l=s.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.as,c=void 0===i?"div":i,l=t.className,d=Object(r.a)(t,["bsPrefix","as","className"]),f=Object(u.a)(a,"tab-content");return s.a.createElement(c,Object(n.a)({ref:e},d,{className:o()(l,f)}))}));e.a=l},522:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),u=a(411),l=a(471),d=a(453),f=a(626);var v=s.a.forwardRef((function(t,e){var a=function(t){var e=Object(c.useContext)(l.a);if(!e)return t;var a=e.activeKey,i=e.getControlledId,o=e.getControllerId,s=Object(r.a)(e,["activeKey","getControlledId","getControllerId"]),u=!1!==t.transition&&!1!==s.transition,v=Object(d.b)(t.eventKey);return Object(n.a)({},t,{active:null==t.active&&null!=v?Object(d.b)(a)===v:t.active,id:i(t.eventKey),"aria-labelledby":o(t.eventKey),transition:u&&(t.transition||s.transition||f.a),mountOnEnter:null!=t.mountOnEnter?t.mountOnEnter:s.mountOnEnter,unmountOnExit:null!=t.unmountOnExit?t.unmountOnExit:s.unmountOnExit})}(t),i=a.bsPrefix,v=a.className,m=a.active,b=a.onEnter,p=a.onEntering,x=a.onEntered,y=a.onExit,h=a.onExiting,O=a.onExited,g=a.mountOnEnter,E=a.unmountOnExit,j=a.transition,N=a.as,C=void 0===N?"div":N,w=(a.eventKey,Object(r.a)(a,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),P=Object(u.a)(i,"tab-pane");if(!m&&!j&&E)return null;var K=s.a.createElement(C,Object(n.a)({},w,{ref:e,role:"tabpanel","aria-hidden":!m,className:o()(v,P,{active:m})}));return j&&(K=s.a.createElement(j,{in:m,onEnter:b,onEntering:p,onEntered:x,onExit:y,onExiting:h,onExited:O,mountOnEnter:g,unmountOnExit:E},K)),s.a.createElement(l.a.Provider,{value:null},s.a.createElement(d.a.Provider,{value:null},K))}));v.displayName="TabPane",e.a=v},524:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a(0);function r(){return Object(n.useReducer)((function(t){return!t}),!1)[1]}},538:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),u=a(523),l=(a(532),a(479)),d=a(453),f=s.a.forwardRef((function(t,e){var a=t.active,i=t.className,f=t.eventKey,v=t.onSelect,m=t.onClick,b=t.as,p=Object(r.a)(t,["active","className","eventKey","onSelect","onClick","as"]),x=Object(d.b)(f,p.href),y=Object(c.useContext)(d.a),h=Object(c.useContext)(l.a),O=a;if(h){p.role||"tablist"!==h.role||(p.role="tab");var g=h.getControllerId(x),E=h.getControlledId(x);p["data-rb-event-key"]=x,p.id=g||p.id,p["aria-controls"]=E||p["aria-controls"],O=null==a&&null!=x?h.activeKey===x:a}"tab"===p.role&&(p.disabled&&(p.tabIndex=-1,p["aria-disabled"]=!0),p["aria-selected"]=O);var j=Object(u.a)((function(t){m&&m(t),null!=x&&(v&&v(x,t),y&&y(x,t))}));return s.a.createElement(b,Object(n.a)({},p,{ref:e,onClick:j,className:o()(i,O&&"active")}))}));f.defaultProps={disabled:!1},e.a=f},539:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(497),o=a(0),c=a.n(o),s=a(524),u=a(556),l=a(479),d=a(453),f=a(471),v=function(){},m=c.a.forwardRef((function(t,e){var a,m,b=t.as,p=void 0===b?"ul":b,x=t.onSelect,y=t.activeKey,h=t.role,O=t.onKeyDown,g=Object(r.a)(t,["as","onSelect","activeKey","role","onKeyDown"]),E=Object(s.a)(),j=Object(o.useRef)(!1),N=Object(o.useContext)(d.a),C=Object(o.useContext)(f.a);C&&(h=h||"tablist",y=C.activeKey,a=C.getControlledId,m=C.getControllerId);var w=Object(o.useRef)(null),P=function(t){var e=w.current;if(!e)return null;var a=Object(i.a)(e,"[data-rb-event-key]:not(.disabled)"),n=e.querySelector(".active");if(!n)return null;var r=a.indexOf(n);if(-1===r)return null;var o=r+t;return o>=a.length&&(o=0),o<0&&(o=a.length-1),a[o]},K=function(t,e){null!=t&&(x&&x(t,e),N&&N(t,e))};Object(o.useEffect)((function(){if(w.current&&j.current){var t=w.current.querySelector("[data-rb-event-key].active");t&&t.focus()}j.current=!1}));var k=Object(u.a)(e,w);return c.a.createElement(d.a.Provider,{value:K},c.a.createElement(l.a.Provider,{value:{role:h,activeKey:Object(d.b)(y),getControlledId:a||v,getControllerId:m||v}},c.a.createElement(p,Object(n.a)({},g,{onKeyDown:function(t){var e;switch(O&&O(t),t.key){case"ArrowLeft":case"ArrowUp":e=P(-1);break;case"ArrowRight":case"ArrowDown":e=P(1);break;default:return}e&&(t.preventDefault(),K(e.dataset.rbEventKey,t),j.current=!0,E())},ref:k,role:h}))))}));e.a=m},540:function(t,e,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);r.displayName="NavbarContext",e.a=r},561:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=(a(599),a(0)),s=a.n(c),u=a(474),l=a(411),d=a(540),f=a(663),v=a(539),m=a(514),b=a(512),p=s.a.forwardRef((function(t,e){var a,i,m,b=Object(u.a)(t,{activeKey:"onSelect"}),p=b.as,x=void 0===p?"div":p,y=b.bsPrefix,h=b.variant,O=b.fill,g=b.justify,E=b.navbar,j=b.className,N=b.children,C=b.activeKey,w=Object(r.a)(b,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),P=Object(l.a)(y,"nav"),K=!1,k=Object(c.useContext)(d.a),S=Object(c.useContext)(f.a);return k?(i=k.bsPrefix,K=null==E||E):S&&(m=S.cardHeaderBsPrefix),s.a.createElement(v.a,Object(n.a)({as:x,ref:e,activeKey:C,className:o()(j,(a={},a[P]=!K,a[i+"-nav"]=K,a[m+"-"+h]=!!m,a[P+"-"+h]=!!h,a[P+"-fill"]=O,a[P+"-justified"]=g,a))},w),N)}));p.displayName="Nav",p.defaultProps={justify:!1,fill:!1},p.Item=m.a,p.Link=b.a,e.a=p},562:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return o}));var n=a(0),r=a.n(n);function i(t,e){var a=0;return r.a.Children.map(t,(function(t){return r.a.isValidElement(t)?e(t,a++):t}))}function o(t,e){var a=0;r.a.Children.forEach(t,(function(t){r.a.isValidElement(t)&&e(t,a++)}))}},568:function(t,e,a){"use strict";var n=a(535),r=a(0),i=a.n(r),o=a(520),c=a(521),s=a(522),u=function(t){function e(){return t.apply(this,arguments)||this}return Object(n.a)(e,t),e.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},e}(i.a.Component);u.Container=o.a,u.Content=c.a,u.Pane=s.a,e.a=u},591:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(0),o=a.n(i),c=(a(577),a(474)),s=a(561),u=a(512),l=a(514),d=a(520),f=a(521),v=a(522),m=a(562);function b(t){var e=t.props,a=e.title,n=e.eventKey,r=e.disabled,i=e.tabClassName,c=e.id;return null==a?null:o.a.createElement(l.a,{as:u.a,eventKey:n,disabled:r,id:c,className:i},a)}var p=function(t){var e=Object(c.a)(t,{activeKey:"onSelect"}),a=e.id,i=e.onSelect,u=e.transition,l=e.mountOnEnter,p=e.unmountOnExit,x=e.children,y=e.activeKey,h=void 0===y?function(t){var e;return Object(m.a)(t,(function(t){null==e&&(e=t.props.eventKey)})),e}(x):y,O=Object(r.a)(e,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return o.a.createElement(d.a,{id:a,activeKey:h,onSelect:i,transition:u,mountOnEnter:l,unmountOnExit:p},o.a.createElement(s.a,Object(n.a)({},O,{role:"tablist",as:"nav"}),Object(m.b)(x,b)),o.a.createElement(f.a,null,Object(m.b)(x,(function(t){var e=Object(n.a)({},t.props);return delete e.title,delete e.disabled,delete e.tabClassName,o.a.createElement(v.a,e)}))))};p.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},p.displayName="Tabs",e.a=p},6452:function(t,e,a){"use strict";a.r(e);a(438),a(436),a(441),a(440),a(437),a(427),a(416),a(421);var n=a(407),r=a.n(n),i=a(414),o=a.n(i),c=a(415),s=a.n(c),u=a(425),l=a.n(u),d=a(418),f=a.n(d),v=a(419),m=a.n(v),b=a(417),p=a.n(b),x=a(412),y=a.n(x),h=a(0),O=(a(404),a(4172)),g=a(454),E=a(465),j=a(591),N=a(568),C=a(509),w=a(476),P=a(493),K=a(6534),k=a(6515),S=a(4680),F=a(6397),I=a(6524),R=a(473),L=a.n(R),A=a(666),D=a.n(A),X=a(4957),M=a.n(X),T=a(2822),V=a.n(T),W=a(4962),_=a.n(W),q=a(582),B=a(490),U=a(534),H=a(494),J=a(422);function z(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function G(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?z(Object(a),!0).forEach((function(e){y()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):z(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function Q(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=p()(t);if(e){var r=p()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return m()(this,a)}}Object(J.a)("LearnDistribution");var Y=.999,Z=r()(H.a,{raw:"P(X = x_0)"}),$=r()(H.a,{raw:"X"}),tt=r()(H.a,{raw:"\\lambda"}),et=r()(K.a,{dependentAxis:!0}),at=r()(K.a,{dependentAxis:!0}),nt=r()(H.a,{raw:"P(X \\le x_0)"}),rt=r()(K.a,{dependentAxis:!0}),it=r()(K.a,{dependentAxis:!0}),ot=r()(H.a,{raw:"P(X > x_0)"}),ct=r()(K.a,{dependentAxis:!0}),st=r()(K.a,{dependentAxis:!0}),ut=r()(H.a,{raw:"P( x_0 \\le X \\le x_1)"}),lt=r()(K.a,{dependentAxis:!0}),dt=r()(K.a,{dependentAxis:!0}),ft=function(t){f()(a,t);var e=Q(a);function a(t){var n;o()(this,a),n=e.call(this,t),y()(l()(n),"handleRateChange",(function(t){for(var e=D()(0,_()(Y,t)+1,1),a=new Array(e.length),r=0;r<e.length;r++)a[r]={x:e[r],y:M()(e[r],t)};n.setState({data:a,rate:t})})),y()(l()(n),"handleLowerChange",(function(t){n.setState({x0:t})})),y()(l()(n),"handleUpperChange",(function(t){n.setState({x1:t})}));for(var r=D()(0,_()(Y,1),1),i=new Array(r.length),c=0;c<r.length;c++)i[c]={x:r[c],y:M()(r[c],1)};return n.state={rate:1,x0:0,x1:1,data:i},n}return s()(a,[{key:"renderInputs",value:function(t){var e=this.props.t;return r()(h.Fragment,{},void 0,r()(q.a,{legend:e("rate"),defaultValue:this.state.rate,min:1e-12,step:this.props.step,max:99,onChange:this.handleRateChange},"".concat(t,"-rate")),r()(q.a,{legend:"x0",defaultValue:this.state.x0,min:0,max:_()(Y,this.state.rate),step:this.props.step,onChange:this.handleLowerChange},"".concat(t,"-x0")),"range"===t?r()(q.a,{legend:"x1",defaultValue:this.state.x1,min:0,max:_()(Y,this.state.rate),step:this.props.step,onChange:this.handleUpperChange}):null)}},{key:"render",value:function(){var t=this,e=this.state,a=e.x0,n=e.x1,i=e.rate,o=this.props.t;return r()(E.a,{style:G({maxWidth:1200,margin:"10px auto"},this.props.style)},void 0,r()(E.a.Header,{as:"h3"},void 0,o("poisson-distribution")),r()(E.a.Body,{},void 0,r()(j.a,{defaultActiveKey:0,id:"poisson-tabs"},void 0,r()(N.a,{eventKey:0,title:Z},void 0,r()(C.a,{},void 0,r()(w.a,{},void 0,r()(P.a,{md:5},void 0,r()(U.a,{title:o("poisson-probabilities")},void 0,r()("p",{},void 0,o("let")," ",$," ",o("number-of-occurrences")),r()("span",{},void 0,o("rate-parameter")),r()(B.b,{inline:!0,legend:tt,defaultValue:1,step:.01,max:99,min:0,onChange:this.handleRateChange}),r()("span",{},void 0,o("we-get")),r()(H.a,{raw:"P(X=x)= \\Large \\frac{".concat(i,"^x e^{-").concat(i,"}}{x!}"),displayMode:!0}),r()("span",{},void 0,o("evaluated-at")),r()(B.b,{inline:!0,legend:"x",defaultValue:1,step:1,max:_()(Y,i)+1,min:0,onChange:this.handleLowerChange})," ",r()("span",{},void 0,o("we-get")),r()(H.a,{raw:"P(X=".concat(a,")= \\Large \\frac{").concat(i,"^").concat(a," e^{-").concat(i,"}}{").concat(a,"!} = ").concat(M()(a,i).toFixed(4)),displayMode:!0}))),r()(P.a,{md:7},void 0,r()(U.a,{header:"Probability Plot"},void 0,r()(w.a,{},void 0,r()(P.a,{md:6},void 0,r()(k.a,{theme:S.a.material},void 0,et,r()(K.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(F.a,{data:this.state.data,style:{data:{fill:function(t){return t.datum.x===a?"tomato":"steelblue"}}}}))),r()(P.a,{md:6},void 0,r()(k.a,{theme:S.a.material},void 0,at,r()(K.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),r()(I.a,{samples:600,y:function(t){return V()(t.x,i)},domain:{x:[0,_()(Y,i)+1],y:[0,1.1]}}),r()(I.a,{data:[{x:a,y:0},{x:a,y:V()(a,i)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),r()(I.a,{data:[{x:0,y:V()(a,i)},{x:a,y:V()(a,i)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),r()(N.a,{eventKey:1,title:nt},void 0,r()(C.a,{},void 0,r()(w.a,{},void 0,r()(P.a,{md:4},void 0,r()(U.a,{},void 0,this.renderInputs("smaller"),r()(H.a,{raw:"P(X \\le ".concat(L()(a,-4),") = ").concat(L()(V()(a,i),-4))}))),r()(P.a,{md:8},void 0,r()(C.a,{},void 0,r()(w.a,{},void 0,r()(P.a,{md:6},void 0,r()(k.a,{domain:{x:[0,_()(Y,this.state.rate)+2]},theme:S.a.material},void 0,rt,r()(K.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(F.a,{data:this.state.data,style:{data:{fill:function(e){return e.datum.x<=t.state.x0?"tomato":"steelblue"}}}}))),r()(P.a,{md:6},void 0,r()(k.a,{theme:S.a.material},void 0,it,r()(K.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(I.a,{samples:600,y:function(e){return V()(e.x,t.state.rate)},domain:{x:[0,_()(Y,this.state.rate)+1],y:[0,1.1]}}),r()(I.a,{data:[{x:a,y:0},{x:a,y:V()(a,this.state.rate)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),r()(I.a,{data:[{x:0,y:V()(a,this.state.rate)},{x:a,y:V()(a,this.state.rate)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),r()(N.a,{eventKey:2,title:ot},void 0,r()(C.a,{},void 0,r()(w.a,{},void 0,r()(P.a,{md:4},void 0,r()(U.a,{},void 0,this.renderInputs("greater"),r()(H.a,{raw:"P(X > ".concat(L()(a,-4),") = ").concat(L()(1-V()(a,i),-4))}))),r()(P.a,{md:8},void 0,r()(w.a,{},void 0,r()(P.a,{md:6},void 0,r()(k.a,{domain:{x:[0,_()(Y,i)+2]},theme:S.a.material},void 0,ct,r()(K.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(F.a,{data:this.state.data,style:{data:{fill:function(e){return e.datum.x>=t.state.x0?"tomato":"steelblue"}}}}))),r()(P.a,{md:6},void 0,r()(k.a,{theme:S.a.material},void 0,st,r()(K.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(I.a,{samples:600,y:function(t){return V()(t.x,i)},domain:{x:[0,_()(Y,i)+1],y:[0,1.1]}}),r()(I.a,{data:[{x:a,y:0},{x:a,y:V()(a,i)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),r()(I.a,{data:[{x:0,y:V()(a,i)},{x:a,y:V()(a,i)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))))),r()(N.a,{eventKey:3,title:ut},void 0,r()(C.a,{},void 0,r()(w.a,{},void 0,r()(P.a,{md:4},void 0,r()(U.a,{},void 0,this.renderInputs("range"),n>=a?r()(H.a,{raw:"P( ".concat(L()(a,-4)," \\le X \\le ").concat(L()(n,-4),") = ").concat(L()(V()(n,i)-V()(a-1,i),-4))}):r()(g.a,{variant:"warning"},void 0,o("lower-bound-smaller-equal-upper-bound")))),r()(P.a,{md:8},void 0,r()(w.a,{},void 0,r()(P.a,{md:6},void 0,r()(k.a,{domain:{x:[0,_()(Y,i)+2]},theme:S.a.material},void 0,lt,r()(K.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(F.a,{data:this.state.data,style:{data:{fill:function(e){return t.state.x0<=e.datum.x&&e.datum.x<=t.state.x1?"tomato":"steelblue"}}}}))),r()(P.a,{md:6},void 0,r()(k.a,{theme:S.a.material},void 0,dt,r()(K.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(I.a,{samples:600,y:function(t){return V()(t.x,i)},domain:{x:[0,_()(Y,i)+1],y:[0,1.1]}})))))))))))}}]),a}(h.Component);ft.defaultProps={step:.1,style:{}},e.default=Object(O.a)("LearnDistribution")(ft)},766:function(t,e,a){"use strict";var n=a(1160);t.exports=n}}]);