/*! For license information please see LearnGeometricDistribution.e6088180.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[568],{1160:function(t,e,a){"use strict";var n=a(452);t.exports=function(t){return n(t)===t&&t>=0}},453:function(t,e,a){"use strict";a.d(e,"b",(function(){return i}));var n=a(0),r=a.n(n).a.createContext(null),i=function(t,e){return void 0===e&&(e=null),null!=t?String(t):e||null};e.a=r},471:function(t,e,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);e.a=r},479:function(t,e,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);r.displayName="NavContext",e.a=r},4934:function(t,e,a){"use strict";var n=a(423),r=a(4935);n(r,"factory",a(4936)),t.exports=r},4935:function(t,e,a){"use strict";var n=a(766),r=a(420),i=a(443);t.exports=function(t,e){return r(t)||r(e)||e<0||e>1?NaN:n(t)?e*i(1-e,t):0}},4936:function(t,e,a){"use strict";var n=a(766),r=a(469),i=a(420),o=a(443);t.exports=function(t){return i(t)||t<0||t>1?r(NaN):function(e){if(i(e))return NaN;if(n(e))return t*o(1-t,e);return 0}}},4937:function(t,e,a){"use strict";var n=a(423),r=a(4938);n(r,"factory",a(4939)),t.exports=r},4938:function(t,e,a){"use strict";var n=a(420),r=a(452),i=a(443),o=a(429);t.exports=function(t,e){return n(t)||n(e)||e<0||e>1?NaN:t<0?0:t===o?1:(t=r(t),1-i(1-e,t+1))}},4939:function(t,e,a){"use strict";var n=a(469),r=a(420),i=a(452),o=a(443),c=a(429);t.exports=function(t){return r(t)||t<0||t>1?n(NaN):function(e){if(r(e))return NaN;if(e<0)return 0;if(e===c)return 1;return e=i(e),1-o(1-t,e+1)}}},4940:function(t,e,a){"use strict";var n=a(423),r=a(4941);n(r,"factory",a(4942)),t.exports=r},4941:function(t,e,a){"use strict";var n=a(420),r=a(537),i=a(622),o=a(482),c=a(451),s=a(429);t.exports=function(t,e){return n(e)||n(t)||e<0||e>1||t<0||t>1?NaN:1===t?s:o(0,i(c(1-t)/r(-e)-(1+1e-12)))}},4942:function(t,e,a){"use strict";var n=a(469),r=a(420),i=a(537),o=a(622),c=a(482),s=a(451),u=a(429);t.exports=function(t){return r(t)||t<0||t>1?n(NaN):function(e){if(r(e)||e<0||e>1)return NaN;if(1===e)return u;return c(0,o(s(1-e)/i(-t)-(1+1e-12)))}}},497:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(t,e){return n(t.querySelectorAll(e))}},512:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),u=a(464),l=a(538),d=a(411),f={disabled:!1,as:u.a},v=s.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.disabled,c=t.className,u=t.href,f=t.eventKey,v=t.onSelect,b=t.as,m=Object(r.a)(t,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return a=Object(d.a)(a,"nav-link"),s.a.createElement(l.a,Object(n.a)({},m,{href:u,ref:e,eventKey:f,as:b,disabled:i,onSelect:v,className:o()(c,a,i&&"disabled")}))}));v.displayName="NavLink",v.defaultProps=f,e.a=v},514:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),u=a(411),l=s.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.className,c=t.children,l=t.as,d=void 0===l?"div":l,f=Object(r.a)(t,["bsPrefix","className","children","as"]);return a=Object(u.a)(a,"nav-item"),s.a.createElement(d,Object(n.a)({},f,{ref:e,className:o()(i,a)}),c)}));l.displayName="NavItem",e.a=l},520:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(474),o=a(471),c=a(453);e.a=function(t){var e=Object(i.a)(t,{activeKey:"onSelect"}),a=e.id,s=e.generateChildId,u=e.onSelect,l=e.activeKey,d=e.transition,f=e.mountOnEnter,v=e.unmountOnExit,b=e.children,m=Object(n.useMemo)((function(){return s||function(t,e){return a?a+"-"+e+"-"+t:null}}),[a,s]),p=Object(n.useMemo)((function(){return{onSelect:u,activeKey:l,transition:d,mountOnEnter:f||!1,unmountOnExit:v||!1,getControlledId:function(t){return m(t,"tabpane")},getControllerId:function(t){return m(t,"tab")}}}),[u,l,d,f,v,m]);return r.a.createElement(o.a.Provider,{value:p},r.a.createElement(c.a.Provider,{value:u||null},b))}},521:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),u=a(411),l=s.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.as,c=void 0===i?"div":i,l=t.className,d=Object(r.a)(t,["bsPrefix","as","className"]),f=Object(u.a)(a,"tab-content");return s.a.createElement(c,Object(n.a)({ref:e},d,{className:o()(l,f)}))}));e.a=l},522:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),u=a(411),l=a(471),d=a(453),f=a(626);var v=s.a.forwardRef((function(t,e){var a=function(t){var e=Object(c.useContext)(l.a);if(!e)return t;var a=e.activeKey,i=e.getControlledId,o=e.getControllerId,s=Object(r.a)(e,["activeKey","getControlledId","getControllerId"]),u=!1!==t.transition&&!1!==s.transition,v=Object(d.b)(t.eventKey);return Object(n.a)({},t,{active:null==t.active&&null!=v?Object(d.b)(a)===v:t.active,id:i(t.eventKey),"aria-labelledby":o(t.eventKey),transition:u&&(t.transition||s.transition||f.a),mountOnEnter:null!=t.mountOnEnter?t.mountOnEnter:s.mountOnEnter,unmountOnExit:null!=t.unmountOnExit?t.unmountOnExit:s.unmountOnExit})}(t),i=a.bsPrefix,v=a.className,b=a.active,m=a.onEnter,p=a.onEntering,y=a.onEntered,x=a.onExit,h=a.onExiting,O=a.onExited,g=a.mountOnEnter,E=a.unmountOnExit,j=a.transition,C=a.as,N=void 0===C?"div":C,P=(a.eventKey,Object(r.a)(a,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),w=Object(u.a)(i,"tab-pane");if(!b&&!j&&E)return null;var K=s.a.createElement(N,Object(n.a)({},P,{ref:e,role:"tabpanel","aria-hidden":!b,className:o()(v,w,{active:b})}));return j&&(K=s.a.createElement(j,{in:b,onEnter:m,onEntering:p,onEntered:y,onExit:x,onExiting:h,onExited:O,mountOnEnter:g,unmountOnExit:E},K)),s.a.createElement(l.a.Provider,{value:null},s.a.createElement(d.a.Provider,{value:null},K))}));v.displayName="TabPane",e.a=v},524:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a(0);function r(){return Object(n.useReducer)((function(t){return!t}),!1)[1]}},538:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),u=a(523),l=(a(532),a(479)),d=a(453),f=s.a.forwardRef((function(t,e){var a=t.active,i=t.className,f=t.eventKey,v=t.onSelect,b=t.onClick,m=t.as,p=Object(r.a)(t,["active","className","eventKey","onSelect","onClick","as"]),y=Object(d.b)(f,p.href),x=Object(c.useContext)(d.a),h=Object(c.useContext)(l.a),O=a;if(h){p.role||"tablist"!==h.role||(p.role="tab");var g=h.getControllerId(y),E=h.getControlledId(y);p["data-rb-event-key"]=y,p.id=g||p.id,p["aria-controls"]=E||p["aria-controls"],O=null==a&&null!=y?h.activeKey===y:a}"tab"===p.role&&(p.disabled&&(p.tabIndex=-1,p["aria-disabled"]=!0),p["aria-selected"]=O);var j=Object(u.a)((function(t){b&&b(t),null!=y&&(v&&v(y,t),x&&x(y,t))}));return s.a.createElement(m,Object(n.a)({},p,{ref:e,onClick:j,className:o()(i,O&&"active")}))}));f.defaultProps={disabled:!1},e.a=f},539:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(497),o=a(0),c=a.n(o),s=a(524),u=a(556),l=a(479),d=a(453),f=a(471),v=function(){},b=c.a.forwardRef((function(t,e){var a,b,m=t.as,p=void 0===m?"ul":m,y=t.onSelect,x=t.activeKey,h=t.role,O=t.onKeyDown,g=Object(r.a)(t,["as","onSelect","activeKey","role","onKeyDown"]),E=Object(s.a)(),j=Object(o.useRef)(!1),C=Object(o.useContext)(d.a),N=Object(o.useContext)(f.a);N&&(h=h||"tablist",x=N.activeKey,a=N.getControlledId,b=N.getControllerId);var P=Object(o.useRef)(null),w=function(t){var e=P.current;if(!e)return null;var a=Object(i.a)(e,"[data-rb-event-key]:not(.disabled)"),n=e.querySelector(".active");if(!n)return null;var r=a.indexOf(n);if(-1===r)return null;var o=r+t;return o>=a.length&&(o=0),o<0&&(o=a.length-1),a[o]},K=function(t,e){null!=t&&(y&&y(t,e),C&&C(t,e))};Object(o.useEffect)((function(){if(P.current&&j.current){var t=P.current.querySelector("[data-rb-event-key].active");t&&t.focus()}j.current=!1}));var k=Object(u.a)(e,P);return c.a.createElement(d.a.Provider,{value:K},c.a.createElement(l.a.Provider,{value:{role:h,activeKey:Object(d.b)(x),getControlledId:a||v,getControllerId:b||v}},c.a.createElement(p,Object(n.a)({},g,{onKeyDown:function(t){var e;switch(O&&O(t),t.key){case"ArrowLeft":case"ArrowUp":e=w(-1);break;case"ArrowRight":case"ArrowDown":e=w(1);break;default:return}e&&(t.preventDefault(),K(e.dataset.rbEventKey,t),j.current=!0,E())},ref:k,role:h}))))}));e.a=b},540:function(t,e,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);r.displayName="NavbarContext",e.a=r},561:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=(a(599),a(0)),s=a.n(c),u=a(474),l=a(411),d=a(540),f=a(663),v=a(539),b=a(514),m=a(512),p=s.a.forwardRef((function(t,e){var a,i,b,m=Object(u.a)(t,{activeKey:"onSelect"}),p=m.as,y=void 0===p?"div":p,x=m.bsPrefix,h=m.variant,O=m.fill,g=m.justify,E=m.navbar,j=m.className,C=m.children,N=m.activeKey,P=Object(r.a)(m,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),w=Object(l.a)(x,"nav"),K=!1,k=Object(c.useContext)(d.a),S=Object(c.useContext)(f.a);return k?(i=k.bsPrefix,K=null==E||E):S&&(b=S.cardHeaderBsPrefix),s.a.createElement(v.a,Object(n.a)({as:y,ref:e,activeKey:N,className:o()(j,(a={},a[w]=!K,a[i+"-nav"]=K,a[b+"-"+h]=!!b,a[w+"-"+h]=!!h,a[w+"-fill"]=O,a[w+"-justified"]=g,a))},P),C)}));p.displayName="Nav",p.defaultProps={justify:!1,fill:!1},p.Item=b.a,p.Link=m.a,e.a=p},562:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return o}));var n=a(0),r=a.n(n);function i(t,e){var a=0;return r.a.Children.map(t,(function(t){return r.a.isValidElement(t)?e(t,a++):t}))}function o(t,e){var a=0;r.a.Children.forEach(t,(function(t){r.a.isValidElement(t)&&e(t,a++)}))}},568:function(t,e,a){"use strict";var n=a(535),r=a(0),i=a.n(r),o=a(520),c=a(521),s=a(522),u=function(t){function e(){return t.apply(this,arguments)||this}return Object(n.a)(e,t),e.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},e}(i.a.Component);u.Container=o.a,u.Content=c.a,u.Pane=s.a,e.a=u},591:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(0),o=a.n(i),c=(a(577),a(474)),s=a(561),u=a(512),l=a(514),d=a(520),f=a(521),v=a(522),b=a(562);function m(t){var e=t.props,a=e.title,n=e.eventKey,r=e.disabled,i=e.tabClassName,c=e.id;return null==a?null:o.a.createElement(l.a,{as:u.a,eventKey:n,disabled:r,id:c,className:i},a)}var p=function(t){var e=Object(c.a)(t,{activeKey:"onSelect"}),a=e.id,i=e.onSelect,u=e.transition,l=e.mountOnEnter,p=e.unmountOnExit,y=e.children,x=e.activeKey,h=void 0===x?function(t){var e;return Object(b.a)(t,(function(t){null==e&&(e=t.props.eventKey)})),e}(y):x,O=Object(r.a)(e,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return o.a.createElement(d.a,{id:a,activeKey:h,onSelect:i,transition:u,mountOnEnter:l,unmountOnExit:p},o.a.createElement(s.a,Object(n.a)({},O,{role:"tablist",as:"nav"}),Object(b.b)(y,m)),o.a.createElement(f.a,null,Object(b.b)(y,(function(t){var e=Object(n.a)({},t.props);return delete e.title,delete e.disabled,delete e.tabClassName,o.a.createElement(v.a,e)}))))};p.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},p.displayName="Tabs",e.a=p},6448:function(t,e,a){"use strict";a.r(e);a(438),a(436),a(441),a(440),a(437),a(427),a(416),a(421);var n=a(407),r=a.n(n),i=a(414),o=a.n(i),c=a(415),s=a.n(c),u=a(425),l=a.n(u),d=a(418),f=a.n(d),v=a(419),b=a.n(v),m=a(417),p=a.n(m),y=a(412),x=a.n(y),h=a(0),O=(a(404),a(4173)),g=a(4172),E=a(465),j=a(591),C=a(568),N=a(509),P=a(476),w=a(493),K=a(6534),k=a(6515),S=a(4680),L=a(6397),F=a(6524),I=a(473),D=a.n(I),A=a(666),R=a.n(A),T=a(4934),X=a.n(T),M=a(4937),V=a.n(M),W=a(4940),_=a.n(W),q=a(582),B=a(490),U=a(534),H=a(494),J=a(422);function z(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function G(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?z(Object(a),!0).forEach((function(e){x()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):z(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function Q(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=p()(t);if(e){var r=p()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return b()(this,a)}}Object(J.a)("LearnDistribution");var Y=.999,Z=r()(H.a,{raw:"P(X = x_0)"}),$=r()(O.a,{i18nKey:"number-trials-until-success",ns:"LearnDistribution"},void 0,"Let ",r()(H.a,{raw:"X"})," be the number of trials until the first success."),tt=r()(O.a,{i18nKey:"number-failures-until-success",ns:"LearnDistribution"},void 0,"Let ",r()(H.a,{raw:"X"})," be the number of failures until the first success."),et=r()(K.a,{dependentAxis:!0}),at=r()(K.a,{dependentAxis:!0}),nt=r()(H.a,{raw:"P(X \\le x_0)"}),rt=r()(K.a,{dependentAxis:!0}),it=r()(K.a,{dependentAxis:!0}),ot=r()(H.a,{raw:"P(X > x_0)"}),ct=r()(K.a,{dependentAxis:!0}),st=r()(K.a,{dependentAxis:!0}),ut=r()(H.a,{raw:"P( x_0 \\le X \\le x_1)"}),lt=r()(K.a,{dependentAxis:!0}),dt=r()(K.a,{dependentAxis:!0}),ft=function(t){f()(a,t);var e=Q(a);function a(t){var n;o()(this,a),n=e.call(this,t),x()(l()(n),"handleProbChange",(function(t){for(var e=n.props.countTrials?1:0,a=R()(e,_()(Y,t),1),r=new Array(a.length),i=0;i<a.length;i++)r[i]={x:a[i],y:X()(n.props.countTrials?a[i]-1:a[i],t)};n.setState({data:r,p:t})})),x()(l()(n),"handleLowerChange",(function(t){n.setState({x0:t})})),x()(l()(n),"handleUpperChange",(function(t){n.setState({x1:t})}));for(var r=t.countTrials?1:0,i=R()(r,_()(Y,.5)+1,1),c=new Array(i.length),s=0;s<i.length;s++)c[s]={x:i[s],y:X()(t.countTrials?i[s]-1:i[s],.5)};return n.state={p:.5,x0:0,x1:1,data:c},n}return s()(a,[{key:"renderInputs",value:function(t){var e=this.props.countTrials?1:0;return r()(h.Fragment,{},void 0,r()(q.a,{legend:this.props.t("success-probability"),defaultValue:this.state.p,min:.01,step:this.props.step,max:1,onChange:this.handleProbChange},"".concat(t,"-p")),r()(q.a,{legend:"x0",defaultValue:e,min:e-1,max:_()(Y,this.state.p)+1,step:this.props.step,onChange:this.handleLowerChange},"".concat(t,"-x0")),"range"===t?r()(q.a,{legend:"x1",defaultValue:this.state.x1,min:e-1,max:_()(Y,this.state.p)+1,step:1,onChange:this.handleUpperChange}):null)}},{key:"render",value:function(){var t=this.state,e=t.x0,a=t.x1,n=t.p,i=this.props,o=i.countTrials,c=i.t,s=o?1:0;return r()(E.a,{style:G({maxWidth:1200,margin:"10px auto"},this.props.style)},void 0,r()(E.a.Header,{as:"h3"},void 0,c("geometric-distribution")),r()(E.a.Body,{},void 0,r()(j.a,{defaultActiveKey:0,id:"poisson-tabs"},void 0,r()(C.a,{eventKey:0,title:Z},void 0,r()(N.a,{},void 0,r()(P.a,{},void 0,r()(w.a,{md:5},void 0,r()(U.a,{title:c("geometric-probabilities")},void 0,r()("p",{},void 0,this.props.countTrials?$:tt),r()("span",{},void 0,c("for-success-probability")),r()(B.b,{inline:!0,legend:"p",defaultValue:.5,step:.01,max:1,min:.01,onChange:this.handleProbChange}),r()("span",{},void 0,c("we-get")),r()(H.a,{raw:"P(X=x)= \\Large \\left( 1 - ".concat(n," \\right)^{x-1} ").concat(n),displayMode:!0}),r()("span",{},void 0,c("evaluated-at")," "),r()(B.b,{inline:!0,legend:"x",defaultValue:s,step:1,max:_()(Y,n)+1,min:s,onChange:this.handleLowerChange})," ",r()("span",{},void 0,c("we-get")),r()(H.a,{raw:"P(X=".concat(e,")= \\Large \\left( 1 - ").concat(n," \\right)^{").concat(e).concat(o?"-1":"","} ").concat(n," = ").concat(X()(o?e-1:e,n).toFixed(4)),displayMode:!0}))),r()(w.a,{md:7},void 0,r()(U.a,{header:c("probability-plot")},void 0,r()(P.a,{},void 0,r()(w.a,{md:6},void 0,r()(k.a,{theme:S.a.material},void 0,et,r()(K.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(L.a,{data:this.state.data,style:{data:{fill:function(t){return t.datum.x===e?"tomato":"steelblue"}}}}))),r()(w.a,{md:6},void 0,r()(k.a,{theme:S.a.material},void 0,at,r()(K.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),r()(F.a,{samples:600,y:function(t){return V()(t.x-s,n)},domain:{x:[0,_()(Y,n)+1],y:[0,1.1]}}),r()(F.a,{data:[{x:e,y:0},{x:e,y:V()(e-s,n)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),r()(F.a,{data:[{x:0,y:V()(e-s,n)},{x:e,y:V()(e-s,n)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),r()(C.a,{eventKey:1,title:nt},void 0,r()(N.a,{},void 0,r()(P.a,{},void 0,r()(w.a,{md:4},void 0,r()(U.a,{},void 0,this.renderInputs("smaller"),r()(H.a,{raw:"P(X \\le ".concat(D()(e,-4),") = ").concat(D()(V()(e-s,n),-4))}))),r()(w.a,{md:8},void 0,r()(N.a,{},void 0,r()(P.a,{},void 0,r()(w.a,{md:6},void 0,r()(k.a,{domain:{x:[0,_()(Y,n)+2]},theme:S.a.material},void 0,rt,r()(K.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(L.a,{data:this.state.data,style:{data:{fill:function(t){return t.datum.x<=e?"tomato":"steelblue"}}}}))),r()(w.a,{md:6},void 0,r()(k.a,{theme:S.a.material},void 0,it,r()(K.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(F.a,{samples:600,y:function(t){return V()(t.x-s,n)},domain:{x:[0,_()(Y,n)+1],y:[0,1.1]}}),r()(F.a,{data:[{x:e,y:0},{x:e,y:V()(e-s,n)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),r()(F.a,{data:[{x:0,y:V()(e-s,n)},{x:e,y:V()(e-s,n)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),r()(C.a,{eventKey:2,title:ot},void 0,r()(N.a,{},void 0,r()(P.a,{},void 0,r()(w.a,{md:4},void 0,r()(U.a,{},void 0,this.renderInputs("greater"),r()(H.a,{raw:"P(X > ".concat(D()(e,-4),") = ").concat(D()(1-V()(e-s,n),-4))}))),r()(w.a,{md:8},void 0,r()(P.a,{},void 0,r()(w.a,{md:6},void 0,r()(k.a,{domain:{x:[0,_()(Y,n)+2]},theme:S.a.material},void 0,ct,r()(K.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(L.a,{data:this.state.data,style:{data:{fill:function(t){return t.datum.x>e?"tomato":"steelblue"}}}}))),r()(w.a,{md:6},void 0,r()(k.a,{theme:S.a.material},void 0,st,r()(K.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(F.a,{samples:600,y:function(t){return V()(t.x-s,n)},domain:{x:[0,_()(Y,n)+1],y:[0,1.1]}}),r()(F.a,{data:[{x:e,y:0},{x:e,y:V()(e-s,n)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),r()(F.a,{data:[{x:0,y:V()(e-s,n)},{x:e,y:V()(e-s,n)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))))),r()(C.a,{eventKey:3,title:ut},void 0,r()(N.a,{},void 0,r()(P.a,{},void 0,r()(w.a,{md:4},void 0,r()(U.a,{},void 0,this.renderInputs("range"),r()(H.a,{raw:"P( ".concat(D()(e,-4)," \\le X \\le ").concat(D()(a,-4),") = ").concat(D()(V()(a-s,n)-V()(e-s-1,n),-4))}))),r()(w.a,{md:8},void 0,r()(P.a,{},void 0,r()(w.a,{md:6},void 0,r()(k.a,{domain:{x:[0,_()(Y,n)+2]},theme:S.a.material},void 0,lt,r()(K.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(L.a,{data:this.state.data,style:{data:{fill:function(t){return e<=t.datum.x&&t.datum.x<=a?"tomato":"steelblue"}}}}))),r()(w.a,{md:6},void 0,r()(k.a,{theme:S.a.material},void 0,dt,r()(K.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(F.a,{samples:600,y:function(t){return V()(t.x-s,n)},domain:{x:[0,_()(Y,n)+1],y:[0,1.1]}})))))))))))}}]),a}(h.Component);ft.defaultProps={countTrials:!1,step:.01,style:{}},e.default=Object(g.a)("LearnDistribution")(ft)},766:function(t,e,a){"use strict";var n=a(1160);t.exports=n}}]);