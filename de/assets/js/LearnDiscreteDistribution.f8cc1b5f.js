/*! For license information please see LearnDiscreteDistribution.f8cc1b5f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[560],{2722:function(t,e,a){"use strict";var n=a(2723);t.exports=n},2723:function(t,e,a){"use strict";var n=a(475);t.exports=function(t){var e,a,r;if(!n(t))throw new TypeError("invalid argument. First argument must be a function. Value: `"+t+"`.");for(a=arguments.length-1,e=new Array(a),r=1;r<arguments.length;r++)e[r-1]=arguments[r];return i;function i(){var n,r,i;for(n=arguments.length,r=new Array(a+n),i=0;i<r.length;i++)r[i]=i>=n?e[i-n]:arguments[i];return t.apply(null,r)}}},453:function(t,e,a){"use strict";a.d(e,"b",(function(){return i}));var n=a(0),r=a.n(n).a.createContext(null),i=function(t,e){return void 0===e&&(e=null),null!=t?String(t):e||null};e.a=r},471:function(t,e,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);e.a=r},479:function(t,e,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);r.displayName="NavContext",e.a=r},497:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(t,e){return n(t.querySelectorAll(e))}},512:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),s=a(0),l=a.n(s),c=a(464),u=a(538),d=a(411),v={disabled:!1,as:c.a},f=l.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.disabled,s=t.className,c=t.href,v=t.eventKey,f=t.onSelect,b=t.as,m=Object(r.a)(t,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return a=Object(d.a)(a,"nav-link"),l.a.createElement(u.a,Object(n.a)({},m,{href:c,ref:e,eventKey:v,as:b,disabled:i,onSelect:f,className:o()(s,a,i&&"disabled")}))}));f.displayName="NavLink",f.defaultProps=v,e.a=f},514:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),s=a(0),l=a.n(s),c=a(411),u=l.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.className,s=t.children,u=t.as,d=void 0===u?"div":u,v=Object(r.a)(t,["bsPrefix","className","children","as"]);return a=Object(c.a)(a,"nav-item"),l.a.createElement(d,Object(n.a)({},v,{ref:e,className:o()(i,a)}),s)}));u.displayName="NavItem",e.a=u},520:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(474),o=a(471),s=a(453);e.a=function(t){var e=Object(i.a)(t,{activeKey:"onSelect"}),a=e.id,l=e.generateChildId,c=e.onSelect,u=e.activeKey,d=e.transition,v=e.mountOnEnter,f=e.unmountOnExit,b=e.children,m=Object(n.useMemo)((function(){return l||function(t,e){return a?a+"-"+e+"-"+t:null}}),[a,l]),x=Object(n.useMemo)((function(){return{onSelect:c,activeKey:u,transition:d,mountOnEnter:v||!1,unmountOnExit:f||!1,getControlledId:function(t){return m(t,"tabpane")},getControllerId:function(t){return m(t,"tab")}}}),[c,u,d,v,f,m]);return r.a.createElement(o.a.Provider,{value:x},r.a.createElement(s.a.Provider,{value:c||null},b))}},521:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),s=a(0),l=a.n(s),c=a(411),u=l.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.as,s=void 0===i?"div":i,u=t.className,d=Object(r.a)(t,["bsPrefix","as","className"]),v=Object(c.a)(a,"tab-content");return l.a.createElement(s,Object(n.a)({ref:e},d,{className:o()(u,v)}))}));e.a=u},522:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),s=a(0),l=a.n(s),c=a(411),u=a(471),d=a(453),v=a(626);var f=l.a.forwardRef((function(t,e){var a=function(t){var e=Object(s.useContext)(u.a);if(!e)return t;var a=e.activeKey,i=e.getControlledId,o=e.getControllerId,l=Object(r.a)(e,["activeKey","getControlledId","getControllerId"]),c=!1!==t.transition&&!1!==l.transition,f=Object(d.b)(t.eventKey);return Object(n.a)({},t,{active:null==t.active&&null!=f?Object(d.b)(a)===f:t.active,id:i(t.eventKey),"aria-labelledby":o(t.eventKey),transition:c&&(t.transition||l.transition||v.a),mountOnEnter:null!=t.mountOnEnter?t.mountOnEnter:l.mountOnEnter,unmountOnExit:null!=t.unmountOnExit?t.unmountOnExit:l.unmountOnExit})}(t),i=a.bsPrefix,f=a.className,b=a.active,m=a.onEnter,x=a.onEntering,p=a.onEntered,h=a.onExit,y=a.onExiting,O=a.onExited,E=a.mountOnEnter,P=a.unmountOnExit,g=a.transition,j=a.as,w=void 0===j?"div":j,C=(a.eventKey,Object(r.a)(a,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),k=Object(c.a)(i,"tab-pane");if(!b&&!g&&P)return null;var K=l.a.createElement(w,Object(n.a)({},C,{ref:e,role:"tabpanel","aria-hidden":!b,className:o()(f,k,{active:b})}));return g&&(K=l.a.createElement(g,{in:b,onEnter:m,onEntering:x,onEntered:p,onExit:h,onExiting:y,onExited:O,mountOnEnter:E,unmountOnExit:P},K)),l.a.createElement(u.a.Provider,{value:null},l.a.createElement(d.a.Provider,{value:null},K))}));f.displayName="TabPane",e.a=f},524:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a(0);function r(){return Object(n.useReducer)((function(t){return!t}),!1)[1]}},538:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),s=a(0),l=a.n(s),c=a(523),u=(a(532),a(479)),d=a(453),v=l.a.forwardRef((function(t,e){var a=t.active,i=t.className,v=t.eventKey,f=t.onSelect,b=t.onClick,m=t.as,x=Object(r.a)(t,["active","className","eventKey","onSelect","onClick","as"]),p=Object(d.b)(v,x.href),h=Object(s.useContext)(d.a),y=Object(s.useContext)(u.a),O=a;if(y){x.role||"tablist"!==y.role||(x.role="tab");var E=y.getControllerId(p),P=y.getControlledId(p);x["data-rb-event-key"]=p,x.id=E||x.id,x["aria-controls"]=P||x["aria-controls"],O=null==a&&null!=p?y.activeKey===p:a}"tab"===x.role&&(x.disabled&&(x.tabIndex=-1,x["aria-disabled"]=!0),x["aria-selected"]=O);var g=Object(c.a)((function(t){b&&b(t),null!=p&&(f&&f(p,t),h&&h(p,t))}));return l.a.createElement(m,Object(n.a)({},x,{ref:e,onClick:g,className:o()(i,O&&"active")}))}));v.defaultProps={disabled:!1},e.a=v},539:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(497),o=a(0),s=a.n(o),l=a(524),c=a(556),u=a(479),d=a(453),v=a(471),f=function(){},b=s.a.forwardRef((function(t,e){var a,b,m=t.as,x=void 0===m?"ul":m,p=t.onSelect,h=t.activeKey,y=t.role,O=t.onKeyDown,E=Object(r.a)(t,["as","onSelect","activeKey","role","onKeyDown"]),P=Object(l.a)(),g=Object(o.useRef)(!1),j=Object(o.useContext)(d.a),w=Object(o.useContext)(v.a);w&&(y=y||"tablist",h=w.activeKey,a=w.getControlledId,b=w.getControllerId);var C=Object(o.useRef)(null),k=function(t){var e=C.current;if(!e)return null;var a=Object(i.a)(e,"[data-rb-event-key]:not(.disabled)"),n=e.querySelector(".active");if(!n)return null;var r=a.indexOf(n);if(-1===r)return null;var o=r+t;return o>=a.length&&(o=0),o<0&&(o=a.length-1),a[o]},K=function(t,e){null!=t&&(p&&p(t,e),j&&j(t,e))};Object(o.useEffect)((function(){if(C.current&&g.current){var t=C.current.querySelector("[data-rb-event-key].active");t&&t.focus()}g.current=!1}));var N=Object(c.a)(e,C);return s.a.createElement(d.a.Provider,{value:K},s.a.createElement(u.a.Provider,{value:{role:y,activeKey:Object(d.b)(h),getControlledId:a||f,getControllerId:b||f}},s.a.createElement(x,Object(n.a)({},E,{onKeyDown:function(t){var e;switch(O&&O(t),t.key){case"ArrowLeft":case"ArrowUp":e=k(-1);break;case"ArrowRight":case"ArrowDown":e=k(1);break;default:return}e&&(t.preventDefault(),K(e.dataset.rbEventKey,t),g.current=!0,P())},ref:N,role:y}))))}));e.a=b},540:function(t,e,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);r.displayName="NavbarContext",e.a=r},561:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),s=(a(599),a(0)),l=a.n(s),c=a(474),u=a(411),d=a(540),v=a(663),f=a(539),b=a(514),m=a(512),x=l.a.forwardRef((function(t,e){var a,i,b,m=Object(c.a)(t,{activeKey:"onSelect"}),x=m.as,p=void 0===x?"div":x,h=m.bsPrefix,y=m.variant,O=m.fill,E=m.justify,P=m.navbar,g=m.className,j=m.children,w=m.activeKey,C=Object(r.a)(m,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),k=Object(u.a)(h,"nav"),K=!1,N=Object(s.useContext)(d.a),S=Object(s.useContext)(v.a);return N?(i=N.bsPrefix,K=null==P||P):S&&(b=S.cardHeaderBsPrefix),l.a.createElement(f.a,Object(n.a)({as:p,ref:e,activeKey:w,className:o()(g,(a={},a[k]=!K,a[i+"-nav"]=K,a[b+"-"+y]=!!b,a[k+"-"+y]=!!y,a[k+"-fill"]=O,a[k+"-justified"]=E,a))},C),j)}));x.displayName="Nav",x.defaultProps={justify:!1,fill:!1},x.Item=b.a,x.Link=m.a,e.a=x},562:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return o}));var n=a(0),r=a.n(n);function i(t,e){var a=0;return r.a.Children.map(t,(function(t){return r.a.isValidElement(t)?e(t,a++):t}))}function o(t,e){var a=0;r.a.Children.forEach(t,(function(t){r.a.isValidElement(t)&&e(t,a++)}))}},568:function(t,e,a){"use strict";var n=a(535),r=a(0),i=a.n(r),o=a(520),s=a(521),l=a(522),c=function(t){function e(){return t.apply(this,arguments)||this}return Object(n.a)(e,t),e.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},e}(i.a.Component);c.Container=o.a,c.Content=s.a,c.Pane=l.a,e.a=c},591:function(t,e,a){"use strict";var n=a(405),r=a(408),i=a(0),o=a.n(i),s=(a(577),a(474)),l=a(561),c=a(512),u=a(514),d=a(520),v=a(521),f=a(522),b=a(562);function m(t){var e=t.props,a=e.title,n=e.eventKey,r=e.disabled,i=e.tabClassName,s=e.id;return null==a?null:o.a.createElement(u.a,{as:c.a,eventKey:n,disabled:r,id:s,className:i},a)}var x=function(t){var e=Object(s.a)(t,{activeKey:"onSelect"}),a=e.id,i=e.onSelect,c=e.transition,u=e.mountOnEnter,x=e.unmountOnExit,p=e.children,h=e.activeKey,y=void 0===h?function(t){var e;return Object(b.a)(t,(function(t){null==e&&(e=t.props.eventKey)})),e}(p):h,O=Object(r.a)(e,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return o.a.createElement(d.a,{id:a,activeKey:y,onSelect:i,transition:c,mountOnEnter:u,unmountOnExit:x},o.a.createElement(l.a,Object(n.a)({},O,{role:"tablist",as:"nav"}),Object(b.b)(p,m)),o.a.createElement(v.a,null,Object(b.b)(p,(function(t){var e=Object(n.a)({},t.props);return delete e.title,delete e.disabled,delete e.tabClassName,o.a.createElement(f.a,e)}))))};x.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},x.displayName="Tabs",e.a=x},6461:function(t,e,a){"use strict";a.r(e);a(427),a(416),a(421);var n=a(407),r=a.n(n),i=a(414),o=a.n(i),s=a(415),l=a.n(s),c=a(425),u=a.n(c),d=a(418),v=a.n(d),f=a(419),b=a.n(f),m=a(417),x=a.n(m),p=a(412),h=a.n(p),y=a(0),O=(a(404),a(4172)),E=a(454),P=a(493),g=a(476),j=a(591),w=a(568),C=a(509),k=a(465),K=a(6534),N=a(6515),S=a(4680),A=a(6397),F=a(6524),I=a(984),R=a.n(I),V=a(548),L=a.n(V),T=a(2722),D=a.n(T),M=a(490),X=a(494),W=a(534),_=a(638),U=a(623),q=a(422);function B(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=x()(t);if(e){var r=x()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return b()(this,a)}}Object(q.a)("LearnDistribution");var G=function(t,e){for(var a=0,n=0;n<e.length;n++){var r=e[n];r.x<=t&&(a+=r.y)}return a},H=function(t,e,a){for(var n=0,r=0;r<a.length;r++){var i=a[r];t<=i.x&&i.x<=e&&(n+=i.y)}return n},J=r()(X.a,{raw:"P(X \\le x_0)"}),z=r()(K.a,{dependentAxis:!0}),Q=r()(K.a,{dependentAxis:!0}),Y=r()(X.a,{raw:"P(X < x_0)"}),Z=r()(K.a,{dependentAxis:!0}),$=r()(K.a,{dependentAxis:!0}),tt=r()(X.a,{raw:"P(X > x_0)"}),et=r()(K.a,{dependentAxis:!0}),at=r()(K.a,{dependentAxis:!0}),nt=r()(X.a,{raw:"P( x_0 \\le X \\le x_1)"}),rt=r()(K.a,{dependentAxis:!0}),it=r()(K.a,{dependentAxis:!0}),ot=function(t){v()(a,t);var e=B(a);function a(t){var n;o()(this,a),n=e.call(this,t),h()(u()(n),"pickNumDistinct",(function(t){for(var e=[],a=0;a<t;a++)e[a]={x:a,y:1/t};var r=L()(t/2),i=t-1,o=G(r,e),s=H(0,i,e);n.setState({data:e,valid:!0,lower:0,upper:i,x:r,lowerProb:o,rangeProb:s})})),h()(u()(n),"handlePopover",(function(t){n.setState({disableTabs:t})}));for(var r=[],i=0;i<t.numValues;i++)r[i]={x:i,y:1/t.numValues};var s=L()(t.numValues/2);return n.state={data:r,valid:!0,lower:0,upper:t.numValues-1,x:s,rangeProb:1,lowerProb:G(s,r),disableTabs:!1},n}return l()(a,[{key:"renderGrid",value:function(){var t=this,e=this.props.t;return r()(C.a,{fluid:!0},void 0,r()(g.a,{},void 0,r()(P.a,{md:5},void 0,r()("h3",{},void 0,e("value"),":"),this.state.data.map((function(e,a){return r()(M.b,{defaultValue:t.state.data[a].x,step:"any",width:100,onChange:function(e){var n=t.state.data.slice();n[a]={x:e,y:t.state.data[a].y};var r=G(t.state.x,n),i=H(t.state.lower,t.state.upper,n);t.setState({data:n,lowerProb:r,rangeProb:i})}},"value-".concat(a))}))),r()(P.a,{md:5},void 0,r()("h3",{},void 0,e("prob"),":"),this.state.data.map((function(e,a){return r()(M.b,{defaultValue:1/t.state.data.length,step:"any",max:1,min:0,width:100,numbersOnly:!1,onChange:function(e){var n=t.state.data.slice(),r=0;n[a]={x:t.state.data[a].x,y:e};for(var i=0;i<n.length;i++)r+=n[i].y;var o=G(t.state.x,n),s=H(t.state.lower,t.state.upper,n);t.setState({data:n,valid:R()(r,1)<=15e-9,lowerProb:o,rangeProb:s})}},"prob-".concat(a))})))))}},{key:"renderTabs",value:function(){var t=this;if(!this.state.valid)return r()(E.a,{variant:"danger"},void 0,this.props.t("must-add-to-one"),".");var e=D()(G,this.state.data),a=this.state.data.map((function(t){return t.x})),n={x:[Object(_.a)(a),Object(U.a)(a)+1],y:[0,1]};return r()(j.a,{defaultActiveKey:1,id:"discrete-distribution-tabs"},void 0,r()(w.a,{eventKey:1,title:J,disabled:this.state.disableTabs},void 0,r()(W.a,{header:this.props.t("probability-plot")},void 0,r()(X.a,{raw:"P( X \\le x = ".concat(this.state.x,") = ").concat(this.state.lowerProb.toFixed(3)),elems:{x:{variable:"x",onChange:function(e){var a=G(e,t.state.data);t.setState({lowerProb:a,x:e})},defaultValue:this.state.x,tooltip:this.props.t("click-to-change-value")}},displayMode:!0,onPopover:this.handlePopover}),r()(g.a,{},void 0,r()(P.a,{md:6},void 0,r()(N.a,{theme:S.a.material},void 0,z,r()(K.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),r()(A.a,{data:this.state.data,style:{data:{fill:function(e){return e.datum.x<=t.state.x?"tomato":"steelblue"}}}}))),r()(P.a,{md:6},void 0,r()(N.a,{theme:S.a.material},void 0,Q,r()(K.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),r()(F.a,{samples:600,domain:n,y:function(t){return e(t.x)}}),r()(F.a,{data:[{x:this.state.x,y:0},{x:this.state.x,y:e(this.state.x)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),r()(F.a,{data:[{x:0,y:e(this.state.x)},{x:this.state.x,y:e(this.state.x)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))),r()(w.a,{eventKey:2,title:Y,disabled:this.state.disableTabs},void 0,r()(W.a,{header:"Probability Plot"},void 0,r()(X.a,{raw:"P( X < x = ".concat(this.state.x,") = ").concat(e(this.state.x-1).toFixed(3)),elems:{x:{variable:"x",onChange:function(e){var a=G(e,t.state.data);t.setState({lowerProb:a,x:e})},defaultValue:this.state.x,tooltip:this.props.t("click-to-change-value")}},displayMode:!0,onPopover:this.handlePopover}),r()(g.a,{},void 0,r()(P.a,{md:6},void 0,r()(N.a,{theme:S.a.material},void 0,Z,r()(K.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),r()(A.a,{data:this.state.data,style:{data:{fill:function(e){return e.datum.x<t.state.x?"tomato":"steelblue"}}}}))),r()(P.a,{md:6},void 0,r()(N.a,{theme:S.a.material},void 0,$,r()(K.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),r()(F.a,{samples:600,domain:n,y:function(t){return e(t.x)}}),r()(F.a,{data:[{x:this.state.x,y:0},{x:this.state.x,y:e(this.state.x-1)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),r()(F.a,{data:[{x:0,y:e(this.state.x-1)},{x:this.state.x,y:e(this.state.x-1)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))),r()(w.a,{eventKey:3,title:tt,disabled:this.state.disableTabs},void 0,r()(W.a,{header:"Probability Plot"},void 0,r()(X.a,{raw:"P( X > x = ".concat(this.state.x,") = ").concat((1-this.state.lowerProb).toFixed(3)),elems:{x:{variable:"x",onChange:function(e){var a=G(e,t.state.data);t.setState({lowerProb:a,x:e})},defaultValue:this.state.x,tooltip:this.props.t("click-to-change-value")}},onPopover:this.handlePopover,displayMode:!0}),r()(g.a,{},void 0,r()(P.a,{md:6},void 0,r()(N.a,{theme:S.a.material},void 0,et,r()(K.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),r()(A.a,{data:this.state.data,style:{data:{fill:function(e){return e.datum.x>t.state.x?"tomato":"steelblue"}}}}))),r()(P.a,{md:6},void 0,r()(N.a,{theme:S.a.material},void 0,at,r()(K.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),r()(F.a,{samples:600,domain:n,y:function(t){return e(t.x)}}),r()(F.a,{data:[{x:this.state.x,y:0},{x:this.state.x,y:e(this.state.x)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),r()(F.a,{data:[{x:0,y:e(this.state.x)},{x:this.state.x,y:e(this.state.x)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))),r()(w.a,{eventKey:4,title:nt,disabled:this.state.disableTabs},void 0,r()(W.a,{header:"Probability Plot"},void 0,r()(X.a,{raw:"P( L = ".concat(this.state.lower," \\le X \\le U = ").concat(this.state.upper,") = ").concat(this.state.rangeProb.toFixed(3)),elems:{L:{variable:"L",onChange:function(e){var a=H(e,t.state.upper,t.state.data);t.setState({rangeProb:a,lower:e})},defaultValue:this.state.lower,tooltip:"Click to change lower value"},U:{variable:"U",onChange:function(e){var a=H(t.state.lower,e,t.state.data);t.setState({rangeProb:a,upper:e})},defaultValue:this.state.upper,tooltip:"Click to change upper value"}},displayMode:!0,onPopover:this.handlePopover}),r()(g.a,{},void 0,r()(P.a,{md:6},void 0,r()(N.a,{theme:S.a.material},void 0,rt,r()(K.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),r()(A.a,{data:this.state.data,style:{data:{fill:function(e){return t.state.lower<=e.datum.x&&e.datum.x<=t.state.upper?"tomato":"steelblue"}}}}))),r()(P.a,{md:6},void 0,r()(N.a,{theme:S.a.material},void 0,it,r()(K.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),r()(F.a,{samples:600,domain:n,y:function(t){return e(t.x)}})))))))}},{key:"render",value:function(){return r()(k.a,{style:{maxWidth:1200,margin:"10px auto"}},void 0,r()(k.a.Header,{as:"h2"},void 0,this.props.t("discrete-distribution-probabilities")),r()(k.a.Body,{},void 0,r()(C.a,{},void 0,r()(g.a,{},void 0,r()(P.a,{md:4},void 0,r()(M.b,{legend:this.props.t("number-distinct-values"),defaultValue:this.props.numValues,step:1,max:20,min:2,onChange:this.pickNumDistinct}),this.renderGrid()),r()(P.a,{md:8},void 0,this.renderTabs())))))}}]),a}(y.Component);ot.defaultProps={numValues:4},e.default=Object(O.a)("LearnDistribution")(ot)}}]);