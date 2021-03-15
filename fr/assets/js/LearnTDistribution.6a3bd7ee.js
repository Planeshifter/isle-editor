(window.webpackJsonp=window.webpackJsonp||[]).push([[649],{459:function(e,t,a){"use strict";a.d(t,"b",(function(){return i}));var n=a(0),r=a.n(n).a.createContext(null),i=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null};t.a=r},490:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);t.a=r},497:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);r.displayName="NavContext",t.a=r},511:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(e,t){return n(e.querySelectorAll(t))}},540:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(){return Object(n.useReducer)((function(e){return!e}),!1)[1]}},541:function(e,t,a){"use strict";var n=a(406),r=a(408),i=a(409),o=a.n(i),c=a(0),l=a.n(c),s=a(470),u=a(557),d=a(411),f={disabled:!1,as:s.a},v=l.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.disabled,c=e.className,s=e.href,f=e.eventKey,v=e.onSelect,b=e.as,p=Object(r.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return a=Object(d.a)(a,"nav-link"),l.a.createElement(u.a,Object(n.a)({},p,{href:s,ref:t,eventKey:f,as:b,disabled:i,onSelect:v,className:o()(c,a,i&&"disabled")}))}));v.displayName="NavLink",v.defaultProps=f,t.a=v},547:function(e,t,a){"use strict";var n=a(406),r=a(408),i=a(409),o=a.n(i),c=a(0),l=a.n(c),s=a(411),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,c=e.children,u=e.as,d=void 0===u?"div":u,f=Object(r.a)(e,["bsPrefix","className","children","as"]);return a=Object(s.a)(a,"nav-item"),l.a.createElement(d,Object(n.a)({},f,{ref:t,className:o()(i,a)}),c)}));u.displayName="NavItem",t.a=u},553:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(492),o=a(490),c=a(459);t.a=function(e){var t=Object(i.a)(e,{activeKey:"onSelect"}),a=t.id,l=t.generateChildId,s=t.onSelect,u=t.activeKey,d=t.transition,f=t.mountOnEnter,v=t.unmountOnExit,b=t.children,p=Object(n.useMemo)((function(){return l||function(e,t){return a?a+"-"+t+"-"+e:null}}),[a,l]),y=Object(n.useMemo)((function(){return{onSelect:s,activeKey:u,transition:d,mountOnEnter:f||!1,unmountOnExit:v||!1,getControlledId:function(e){return p(e,"tabpane")},getControllerId:function(e){return p(e,"tab")}}}),[s,u,d,f,v,p]);return r.a.createElement(o.a.Provider,{value:y},r.a.createElement(c.a.Provider,{value:s||null},b))}},554:function(e,t,a){"use strict";var n=a(406),r=a(408),i=a(409),o=a.n(i),c=a(0),l=a.n(c),s=a(411),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.as,c=void 0===i?"div":i,u=e.className,d=Object(r.a)(e,["bsPrefix","as","className"]),f=Object(s.a)(a,"tab-content");return l.a.createElement(c,Object(n.a)({ref:t},d,{className:o()(u,f)}))}));t.a=u},555:function(e,t,a){"use strict";var n=a(406),r=a(408),i=a(409),o=a.n(i),c=a(0),l=a.n(c),s=a(411),u=a(490),d=a(459),f=a(669);var v=l.a.forwardRef((function(e,t){var a=function(e){var t=Object(c.useContext)(u.a);if(!t)return e;var a=t.activeKey,i=t.getControlledId,o=t.getControllerId,l=Object(r.a)(t,["activeKey","getControlledId","getControllerId"]),s=!1!==e.transition&&!1!==l.transition,v=Object(d.b)(e.eventKey);return Object(n.a)({},e,{active:null==e.active&&null!=v?Object(d.b)(a)===v:e.active,id:i(e.eventKey),"aria-labelledby":o(e.eventKey),transition:s&&(e.transition||l.transition||f.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:l.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:l.unmountOnExit})}(e),i=a.bsPrefix,v=a.className,b=a.active,p=a.onEnter,y=a.onEntering,m=a.onEntered,x=a.onExit,h=a.onExiting,O=a.onExited,E=a.mountOnEnter,j=a.unmountOnExit,g=a.transition,C=a.as,P=void 0===C?"div":C,k=(a.eventKey,Object(r.a)(a,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),w=Object(s.a)(i,"tab-pane");if(!b&&!g&&j)return null;var K=l.a.createElement(P,Object(n.a)({},k,{ref:t,role:"tabpanel","aria-hidden":!b,className:o()(v,w,{active:b})}));return g&&(K=l.a.createElement(g,{in:b,onEnter:p,onEntering:y,onEntered:m,onExit:x,onExiting:h,onExited:O,mountOnEnter:E,unmountOnExit:j},K)),l.a.createElement(u.a.Provider,{value:null},l.a.createElement(d.a.Provider,{value:null},K))}));v.displayName="TabPane",t.a=v},557:function(e,t,a){"use strict";var n=a(406),r=a(408),i=a(409),o=a.n(i),c=a(0),l=a.n(c),s=a(525),u=(a(536),a(497)),d=a(459),f=l.a.forwardRef((function(e,t){var a=e.active,i=e.className,f=e.eventKey,v=e.onSelect,b=e.onClick,p=e.as,y=Object(r.a)(e,["active","className","eventKey","onSelect","onClick","as"]),m=Object(d.b)(f,y.href),x=Object(c.useContext)(d.a),h=Object(c.useContext)(u.a),O=a;if(h){y.role||"tablist"!==h.role||(y.role="tab");var E=h.getControllerId(m),j=h.getControlledId(m);y["data-rb-event-key"]=m,y.id=E||y.id,y["aria-controls"]=j||y["aria-controls"],O=null==a&&null!=m?h.activeKey===m:a}"tab"===y.role&&(y.disabled&&(y.tabIndex=-1,y["aria-disabled"]=!0),y["aria-selected"]=O);var g=Object(s.a)((function(e){b&&b(e),null!=m&&(v&&v(m,e),x&&x(m,e))}));return l.a.createElement(p,Object(n.a)({},y,{ref:t,onClick:g,className:o()(i,O&&"active")}))}));f.defaultProps={disabled:!1},t.a=f},558:function(e,t,a){"use strict";var n=a(406),r=a(408),i=a(511),o=a(0),c=a.n(o),l=a(540),s=a(563),u=a(497),d=a(459),f=a(490),v=function(){},b=c.a.forwardRef((function(e,t){var a,b,p=e.as,y=void 0===p?"ul":p,m=e.onSelect,x=e.activeKey,h=e.role,O=e.onKeyDown,E=Object(r.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),j=Object(l.a)(),g=Object(o.useRef)(!1),C=Object(o.useContext)(d.a),P=Object(o.useContext)(f.a);P&&(h=h||"tablist",x=P.activeKey,a=P.getControlledId,b=P.getControllerId);var k=Object(o.useRef)(null),w=function(e){var t=k.current;if(!t)return null;var a=Object(i.a)(t,"[data-rb-event-key]:not(.disabled)"),n=t.querySelector(".active");if(!n)return null;var r=a.indexOf(n);if(-1===r)return null;var o=r+e;return o>=a.length&&(o=0),o<0&&(o=a.length-1),a[o]},K=function(e,t){null!=e&&(m&&m(e,t),C&&C(e,t))};Object(o.useEffect)((function(){if(k.current&&g.current){var e=k.current.querySelector("[data-rb-event-key].active");e&&e.focus()}g.current=!1}));var N=Object(s.a)(t,k);return c.a.createElement(d.a.Provider,{value:K},c.a.createElement(u.a.Provider,{value:{role:h,activeKey:Object(d.b)(x),getControlledId:a||v,getControllerId:b||v}},c.a.createElement(y,Object(n.a)({},E,{onKeyDown:function(e){var t;switch(O&&O(e),e.key){case"ArrowLeft":case"ArrowUp":t=w(-1);break;case"ArrowRight":case"ArrowDown":t=w(1);break;default:return}t&&(e.preventDefault(),K(t.dataset.rbEventKey,e),g.current=!0,j())},ref:N,role:h}))))}));t.a=b},559:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);r.displayName="NavbarContext",t.a=r},584:function(e,t,a){"use strict";var n=a(538),r=a(0),i=a.n(r),o=a(553),c=a(554),l=a(555),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(i.a.Component);s.Container=o.a,s.Content=c.a,s.Pane=l.a,t.a=s},589:function(e,t,a){"use strict";var n=a(406),r=a(408),i=a(409),o=a.n(i),c=(a(628),a(0)),l=a.n(c),s=a(492),u=a(411),d=a(559),f=a(717),v=a(558),b=a(547),p=a(541),y=l.a.forwardRef((function(e,t){var a,i,b,p=Object(s.a)(e,{activeKey:"onSelect"}),y=p.as,m=void 0===y?"div":y,x=p.bsPrefix,h=p.variant,O=p.fill,E=p.justify,j=p.navbar,g=p.className,C=p.children,P=p.activeKey,k=Object(r.a)(p,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),w=Object(u.a)(x,"nav"),K=!1,N=Object(c.useContext)(d.a),S=Object(c.useContext)(f.a);return N?(i=N.bsPrefix,K=null==j||j):S&&(b=S.cardHeaderBsPrefix),l.a.createElement(v.a,Object(n.a)({as:m,ref:t,activeKey:P,className:o()(g,(a={},a[w]=!K,a[i+"-nav"]=K,a[b+"-"+h]=!!b,a[w+"-"+h]=!!h,a[w+"-fill"]=O,a[w+"-justified"]=E,a))},k),C)}));y.displayName="Nav",y.defaultProps={justify:!1,fill:!1},y.Item=b.a,y.Link=p.a,t.a=y},590:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n);function i(e,t){var a=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?t(e,a++):e}))}function o(e,t){var a=0;r.a.Children.forEach(e,(function(e){r.a.isValidElement(e)&&t(e,a++)}))}},614:function(e,t,a){"use strict";var n=a(406),r=a(408),i=a(0),o=a.n(i),c=(a(594),a(492)),l=a(589),s=a(541),u=a(547),d=a(553),f=a(554),v=a(555),b=a(590);function p(e){var t=e.props,a=t.title,n=t.eventKey,r=t.disabled,i=t.tabClassName,c=t.id;return null==a?null:o.a.createElement(u.a,{as:s.a,eventKey:n,disabled:r,id:c,className:i},a)}var y=function(e){var t=Object(c.a)(e,{activeKey:"onSelect"}),a=t.id,i=t.onSelect,s=t.transition,u=t.mountOnEnter,y=t.unmountOnExit,m=t.children,x=t.activeKey,h=void 0===x?function(e){var t;return Object(b.a)(e,(function(e){null==t&&(t=e.props.eventKey)})),t}(m):x,O=Object(r.a)(t,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return o.a.createElement(d.a,{id:a,activeKey:h,onSelect:i,transition:s,mountOnEnter:u,unmountOnExit:y},o.a.createElement(l.a,Object(n.a)({},O,{role:"tablist",as:"nav"}),Object(b.b)(m,p)),o.a.createElement(f.a,null,Object(b.b)(m,(function(e){var t=Object(n.a)({},e.props);return delete t.title,delete t.disabled,delete t.tabClassName,o.a.createElement(v.a,t)}))))};y.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},y.displayName="Tabs",t.a=y},6510:function(e,t,a){"use strict";a.r(t);a(438),a(434),a(453),a(452),a(437),a(436),a(423),a(420);var n=a(407),r=a.n(n),i=a(414),o=a.n(i),c=a(415),l=a.n(c),s=a(424),u=a.n(s),d=a(417),f=a.n(d),v=a(418),b=a.n(v),p=a(416),y=a.n(p),m=a(412),x=a.n(m),h=a(0),O=(a(404),a(4096)),E=a(483),j=a(494),g=a(467),C=a(454),P=a(466),k=a(614),w=a(584),K=a(6591),N=a(6573),S=a(4612),I=a(805),D=a(924),F=a(474),A=a.n(F),R=a(4134),L=a.n(R),q=a(819),W=a.n(q),T=a(1e3),V=a.n(T),X=a(575),M=a(524),_=a(495),B=a(421);function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(Object(a),!0).forEach((function(t){x()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function J(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=y()(e);if(t){var r=y()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return b()(this,a)}}Object(B.a)("LearnDistribution");var Q=r()(K.a,{dependentAxis:!0}),z=r()(_.a,{raw:"P(X \\le x_0)"}),G=r()(K.a,{dependentAxis:!0}),Y=r()(K.a,{dependentAxis:!0}),Z=r()(_.a,{raw:"P(X > x_0)"}),$=r()(K.a,{dependentAxis:!0}),ee=r()(K.a,{dependentAxis:!0}),te=r()(_.a,{raw:"P( x_0 \\le X \\le x_1)"}),ae=r()(K.a,{dependentAxis:!0}),ne=r()(K.a,{dependentAxis:!0}),re=function(e){f()(a,e);var t=J(a);function a(e){var n;return o()(this,a),n=t.call(this,e),x()(u()(n),"handleDFChange",(function(e){n.setState({df:e})})),x()(u()(n),"handleLowerChange",(function(e){n.setState({x0:e})})),x()(u()(n),"handleUpperChange",(function(e){n.setState({x1:e})})),x()(u()(n),"handlePropChange",(function(e){n.setState({p:e})})),n.state={df:1,x0:-1,x1:1,p:.5},n}return l()(a,[{key:"renderInputs",value:function(e){var t=this.state,a=t.df,n=t.x0,i=t.x1,o=t.p,c=this.props.t;return r()(h.Fragment,{},void 0,r()(X.a,{legend:c("degrees-of-freedom"),defaultValue:a,min:.001,step:this.props.step,max:25,onChange:this.handleDFChange},"".concat(e,"-df")),"quantile"!==e?r()(X.a,{legend:"x0",defaultValue:n,min:-4,max:4,step:this.props.step,onChange:this.handleLowerChange},"".concat(e,"-x0")):r()(X.a,{legend:"p",defaultValue:o,min:0,max:1,step:this.props.step,onChange:this.handlePropChange},"".concat(e,"-p")),"range"===e?r()(X.a,{legend:"x1",defaultValue:i,min:-4,max:4,step:this.props.step,onChange:this.handleUpperChange}):null)}},{key:"renderQuantileTab",value:function(){var e=this.state,t=e.df,a=e.p,n=this.props.t,i=V()(a,t);return r()(E.a,{},void 0,r()(g.a,{},void 0,r()(j.a,{md:4},void 0,r()(M.a,{},void 0,this.renderInputs("quantile"),r()(_.a,{raw:"F^{-1}(p) = ".concat(A()(i,-4))}))),r()(j.a,{md:6},void 0,r()(N.a,{domain:{x:[.001,.999],y:[V()(.001,t),V()(.999,t)]},theme:S.a.material},void 0,Q,r()(K.a,{label:n("quantile-function"),tickFormat:function(e){return"".concat(e)},crossAxis:!1,style:{axisLabel:{padding:40}}}),r()(I.a,{samples:200,animate:{duration:500,easing:"linear"},y:function(e){return V()(e.x,t)}}),r()(I.a,{data:[{x:a,y:0},{x:a,y:i}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),r()(I.a,{data:[{x:0,y:i},{x:a,y:i}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))}},{key:"render",value:function(){var e=this.state,t=e.df,a=e.x0,n=e.x1,i=this.props.t;return r()(P.a,{style:H({maxWidth:1200,margin:"10px auto"},this.props.style)},void 0,r()(P.a.Header,{as:"h3"},void 0,i("students-t-distribution")),r()(P.a.Body,{},void 0,r()(k.a,{defaultActiveKey:1,id:"student-tabs"},void 0,r()(w.a,{eventKey:1,title:z},void 0,r()(E.a,{},void 0,r()(g.a,{},void 0,r()(j.a,{},void 0,r()(M.a,{},void 0,this.renderInputs("smaller"),r()(_.a,{raw:"P(X \\le ".concat(A()(a,-4),") = ").concat(A()(W()(a,t),-4)),displayMode:!0,tag:""}))),r()(j.a,{},void 0,r()(N.a,{domain:{x:[-4,4],y:[0,L()(0,t)]},theme:S.a.material},void 0,G,r()(K.a,{label:"PDF",tickFormat:function(e){return"".concat(e)},crossAxis:!1,style:{axisLabel:{padding:40}}}),r()(D.a,{samples:100,interpolation:"step",y:function(e){return e.x<=a?L()(e.x,t):0},style:{data:{opacity:.3,fill:"tomato"}}}),r()(I.a,{animate:{duration:500,easing:"linear"},samples:200,y:function(e){return L()(e.x,t)}}))),r()(j.a,{},void 0,r()(N.a,{theme:S.a.material},void 0,Y,r()(K.a,{label:"CDF",tickFormat:function(e){return"".concat(e)},style:{axisLabel:{padding:40}}}),r()(I.a,{samples:100,y:function(e){return W()(e.x,t)},domain:{x:[-4,4],y:[0,1.1]}}),r()(I.a,{data:[{x:a,y:0},{x:a,y:W()(a,t)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),r()(I.a,{data:[{x:0,y:W()(a,t)},{x:a,y:W()(a,t)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))),r()(w.a,{eventKey:2,title:Z},void 0,r()(E.a,{},void 0,r()(g.a,{},void 0,r()(j.a,{},void 0,r()(M.a,{},void 0,this.renderInputs("greater"),r()(_.a,{raw:"P(X > ".concat(A()(a,-4),") = ").concat(A()(1-W()(a,t),-4)),displayMode:!0,tag:""}))),r()(j.a,{},void 0,r()(N.a,{domain:{x:[-4,4],y:[0,L()(0,t)]},theme:S.a.material},void 0,$,r()(K.a,{label:"PDF",tickFormat:function(e){return"".concat(e)},crossAxis:!1,style:{axisLabel:{padding:40}}}),r()(D.a,{samples:100,interpolation:"step",y:function(e){return e.x>a?L()(e.x,t):0},style:{data:{opacity:.3,fill:"tomato"}}}),r()(I.a,{animate:{duration:500,easing:"linear"},samples:200,y:function(e){return L()(e.x,t)}}))),r()(j.a,{},void 0,r()(N.a,{theme:S.a.material},void 0,ee,r()(K.a,{label:"CDF",tickFormat:function(e){return"".concat(e)},style:{axisLabel:{padding:40}}}),r()(I.a,{samples:100,y:function(e){return W()(e.x,t)},domain:{x:[-4,4],y:[0,1.1]}}),r()(I.a,{data:[{x:a,y:0},{x:a,y:W()(a,t)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),r()(I.a,{data:[{x:a,y:1},{x:a,y:W()(a,t)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),r()(I.a,{data:[{x:0,y:W()(a,t)},{x:a,y:W()(a,t)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))),r()(w.a,{eventKey:3,title:te},void 0,r()(E.a,{},void 0,r()(g.a,{},void 0,r()(j.a,{},void 0,r()(M.a,{},void 0,this.renderInputs("range"),n>=a?r()(_.a,{raw:"P( ".concat(A()(a,-4)," \\le X \\le ").concat(A()(n,-4),") = ").concat(A()(W()(n,t)-W()(a,t),-4)),displayMode:!0,tag:""}):r()(C.a,{variant:"warning"},void 0,i("lower-bound-smaller-equal-upper-bound")))),r()(j.a,{},void 0,r()(N.a,{domain:{x:[-4,4],y:[0,L()(0,t)]},theme:S.a.material},void 0,ae,r()(K.a,{label:"PDF",tickFormat:function(e){return"".concat(e)},crossAxis:!1,style:{axisLabel:{padding:40}}}),r()(D.a,{samples:100,interpolation:"step",y:function(e){return e.x>=a&&e.x<=n?L()(e.x,t):0},style:{data:{opacity:.3,fill:"tomato"}}}),r()(I.a,{samples:200,animate:{duration:500,easing:"linear"},y:function(e){return L()(e.x,t)}}))),r()(j.a,{},void 0,r()(N.a,{theme:S.a.material},void 0,ne,r()(K.a,{label:"CDF",tickFormat:function(e){return"".concat(e)},style:{axisLabel:{padding:40}}}),r()(I.a,{samples:200,y:function(e){return W()(e.x,t)},domain:{x:[-4,4],y:[0,1.1]}}),r()(I.a,{data:[{x:n,y:W()(a,t)},{x:n,y:W()(n,t)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),r()(I.a,{data:[{x:a,y:W()(a,t)},{x:n,y:W()(a,t)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))),this.props.quantile?r()(w.a,{eventKey:4,title:i("quantile-function")},void 0,this.renderQuantileTab()):null)))}}]),a}(h.Component);re.defaultProps={step:.01,quantile:!1,style:{}},t.default=Object(O.a)("LearnDistribution")(re)}}]);