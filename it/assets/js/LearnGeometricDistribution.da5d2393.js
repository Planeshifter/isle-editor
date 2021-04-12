/*! For license information please see LearnGeometricDistribution.da5d2393.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[548],{1135:function(e,t,a){"use strict";var n=a(452);e.exports=function(e){return n(e)===e&&e>=0}},453:function(e,t,a){"use strict";a.d(t,"b",(function(){return i}));var n=a(0),r=a.n(n).a.createContext(null),i=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null};t.a=r},472:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);t.a=r},480:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);r.displayName="NavContext",t.a=r},4872:function(e,t,a){"use strict";var n=a(422),r=a(4873);n(r,"factory",a(4874)),e.exports=r},4873:function(e,t,a){"use strict";var n=a(748),r=a(415),i=a(446);e.exports=function(e,t){return r(e)||r(t)||t<0||t>1?NaN:n(e)?t*i(1-t,e):0}},4874:function(e,t,a){"use strict";var n=a(748),r=a(470),i=a(415),o=a(446);e.exports=function(e){return i(e)||e<0||e>1?r(NaN):function(t){if(i(t))return NaN;if(n(t))return e*o(1-e,t);return 0}}},4875:function(e,t,a){"use strict";var n=a(422),r=a(4876);n(r,"factory",a(4877)),e.exports=r},4876:function(e,t,a){"use strict";var n=a(415),r=a(452),i=a(446),o=a(427);e.exports=function(e,t){return n(e)||n(t)||t<0||t>1?NaN:e<0?0:e===o?1:(e=r(e),1-i(1-t,e+1))}},4877:function(e,t,a){"use strict";var n=a(470),r=a(415),i=a(452),o=a(446),c=a(427);e.exports=function(e){return r(e)||e<0||e>1?n(NaN):function(t){if(r(t))return NaN;if(t<0)return 0;if(t===c)return 1;return t=i(t),1-o(1-e,t+1)}}},4878:function(e,t,a){"use strict";var n=a(422),r=a(4879);n(r,"factory",a(4880)),e.exports=r},4879:function(e,t,a){"use strict";var n=a(415),r=a(541),i=a(616),o=a(482),c=a(451),s=a(427);e.exports=function(e,t){return n(t)||n(e)||t<0||t>1||e<0||e>1?NaN:1===e?s:o(0,i(c(1-e)/r(-t)-(1+1e-12)))}},4880:function(e,t,a){"use strict";var n=a(470),r=a(415),i=a(541),o=a(616),c=a(482),s=a(451),u=a(427);e.exports=function(e){return r(e)||e<0||e>1?n(NaN):function(t){if(r(t)||t<0||t>1)return NaN;if(1===t)return u;return c(0,o(s(1-t)/i(-e)-(1+1e-12)))}}},496:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(e,t){return n(e.querySelectorAll(t))}},512:function(e,t,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),u=a(463),l=a(537),d=a(411),f={disabled:!1,as:u.a},v=s.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.disabled,c=e.className,u=e.href,f=e.eventKey,v=e.onSelect,b=e.as,m=Object(r.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return a=Object(d.a)(a,"nav-link"),s.a.createElement(l.a,Object(n.a)({},m,{href:u,ref:t,eventKey:f,as:b,disabled:i,onSelect:v,className:o()(c,a,i&&"disabled")}))}));v.displayName="NavLink",v.defaultProps=f,t.a=v},513:function(e,t,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),u=a(411),l=s.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,c=e.children,l=e.as,d=void 0===l?"div":l,f=Object(r.a)(e,["bsPrefix","className","children","as"]);return a=Object(u.a)(a,"nav-item"),s.a.createElement(d,Object(n.a)({},f,{ref:t,className:o()(i,a)}),c)}));l.displayName="NavItem",t.a=l},519:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(474),o=a(472),c=a(453);t.a=function(e){var t=Object(i.a)(e,{activeKey:"onSelect"}),a=t.id,s=t.generateChildId,u=t.onSelect,l=t.activeKey,d=t.transition,f=t.mountOnEnter,v=t.unmountOnExit,b=t.children,m=Object(n.useMemo)((function(){return s||function(e,t){return a?a+"-"+t+"-"+e:null}}),[a,s]),p=Object(n.useMemo)((function(){return{onSelect:u,activeKey:l,transition:d,mountOnEnter:f||!1,unmountOnExit:v||!1,getControlledId:function(e){return m(e,"tabpane")},getControllerId:function(e){return m(e,"tab")}}}),[u,l,d,f,v,m]);return r.a.createElement(o.a.Provider,{value:p},r.a.createElement(c.a.Provider,{value:u||null},b))}},520:function(e,t,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),u=a(411),l=s.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.as,c=void 0===i?"div":i,l=e.className,d=Object(r.a)(e,["bsPrefix","as","className"]),f=Object(u.a)(a,"tab-content");return s.a.createElement(c,Object(n.a)({ref:t},d,{className:o()(l,f)}))}));t.a=l},521:function(e,t,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),u=a(411),l=a(472),d=a(453),f=a(622);var v=s.a.forwardRef((function(e,t){var a=function(e){var t=Object(c.useContext)(l.a);if(!t)return e;var a=t.activeKey,i=t.getControlledId,o=t.getControllerId,s=Object(r.a)(t,["activeKey","getControlledId","getControllerId"]),u=!1!==e.transition&&!1!==s.transition,v=Object(d.b)(e.eventKey);return Object(n.a)({},e,{active:null==e.active&&null!=v?Object(d.b)(a)===v:e.active,id:i(e.eventKey),"aria-labelledby":o(e.eventKey),transition:u&&(e.transition||s.transition||f.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:s.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:s.unmountOnExit})}(e),i=a.bsPrefix,v=a.className,b=a.active,m=a.onEnter,p=a.onEntering,y=a.onEntered,x=a.onExit,h=a.onExiting,O=a.onExited,g=a.mountOnEnter,E=a.unmountOnExit,j=a.transition,C=a.as,N=void 0===C?"div":C,P=(a.eventKey,Object(r.a)(a,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),w=Object(u.a)(i,"tab-pane");if(!b&&!j&&E)return null;var K=s.a.createElement(N,Object(n.a)({},P,{ref:t,role:"tabpanel","aria-hidden":!b,className:o()(v,w,{active:b})}));return j&&(K=s.a.createElement(j,{in:b,onEnter:m,onEntering:p,onEntered:y,onExit:x,onExiting:h,onExited:O,mountOnEnter:g,unmountOnExit:E},K)),s.a.createElement(l.a.Provider,{value:null},s.a.createElement(d.a.Provider,{value:null},K))}));v.displayName="TabPane",t.a=v},524:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(){return Object(n.useReducer)((function(e){return!e}),!1)[1]}},537:function(e,t,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=a(0),s=a.n(c),u=a(522),l=(a(535),a(480)),d=a(453),f=s.a.forwardRef((function(e,t){var a=e.active,i=e.className,f=e.eventKey,v=e.onSelect,b=e.onClick,m=e.as,p=Object(r.a)(e,["active","className","eventKey","onSelect","onClick","as"]),y=Object(d.b)(f,p.href),x=Object(c.useContext)(d.a),h=Object(c.useContext)(l.a),O=a;if(h){p.role||"tablist"!==h.role||(p.role="tab");var g=h.getControllerId(y),E=h.getControlledId(y);p["data-rb-event-key"]=y,p.id=g||p.id,p["aria-controls"]=E||p["aria-controls"],O=null==a&&null!=y?h.activeKey===y:a}"tab"===p.role&&(p.disabled&&(p.tabIndex=-1,p["aria-disabled"]=!0),p["aria-selected"]=O);var j=Object(u.a)((function(e){b&&b(e),null!=y&&(v&&v(y,e),x&&x(y,e))}));return s.a.createElement(m,Object(n.a)({},p,{ref:t,onClick:j,className:o()(i,O&&"active")}))}));f.defaultProps={disabled:!1},t.a=f},538:function(e,t,a){"use strict";var n=a(405),r=a(408),i=a(496),o=a(0),c=a.n(o),s=a(524),u=a(559),l=a(480),d=a(453),f=a(472),v=function(){},b=c.a.forwardRef((function(e,t){var a,b,m=e.as,p=void 0===m?"ul":m,y=e.onSelect,x=e.activeKey,h=e.role,O=e.onKeyDown,g=Object(r.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),E=Object(s.a)(),j=Object(o.useRef)(!1),C=Object(o.useContext)(d.a),N=Object(o.useContext)(f.a);N&&(h=h||"tablist",x=N.activeKey,a=N.getControlledId,b=N.getControllerId);var P=Object(o.useRef)(null),w=function(e){var t=P.current;if(!t)return null;var a=Object(i.a)(t,"[data-rb-event-key]:not(.disabled)"),n=t.querySelector(".active");if(!n)return null;var r=a.indexOf(n);if(-1===r)return null;var o=r+e;return o>=a.length&&(o=0),o<0&&(o=a.length-1),a[o]},K=function(e,t){null!=e&&(y&&y(e,t),C&&C(e,t))};Object(o.useEffect)((function(){if(P.current&&j.current){var e=P.current.querySelector("[data-rb-event-key].active");e&&e.focus()}j.current=!1}));var k=Object(u.a)(t,P);return c.a.createElement(d.a.Provider,{value:K},c.a.createElement(l.a.Provider,{value:{role:h,activeKey:Object(d.b)(x),getControlledId:a||v,getControllerId:b||v}},c.a.createElement(p,Object(n.a)({},g,{onKeyDown:function(e){var t;switch(O&&O(e),e.key){case"ArrowLeft":case"ArrowUp":t=w(-1);break;case"ArrowRight":case"ArrowDown":t=w(1);break;default:return}t&&(e.preventDefault(),K(t.dataset.rbEventKey,e),j.current=!0,E())},ref:k,role:h}))))}));t.a=b},539:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);r.displayName="NavbarContext",t.a=r},561:function(e,t,a){"use strict";var n=a(405),r=a(408),i=a(409),o=a.n(i),c=(a(590),a(0)),s=a.n(c),u=a(474),l=a(411),d=a(539),f=a(645),v=a(538),b=a(513),m=a(512),p=s.a.forwardRef((function(e,t){var a,i,b,m=Object(u.a)(e,{activeKey:"onSelect"}),p=m.as,y=void 0===p?"div":p,x=m.bsPrefix,h=m.variant,O=m.fill,g=m.justify,E=m.navbar,j=m.className,C=m.children,N=m.activeKey,P=Object(r.a)(m,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),w=Object(l.a)(x,"nav"),K=!1,k=Object(c.useContext)(d.a),S=Object(c.useContext)(f.a);return k?(i=k.bsPrefix,K=null==E||E):S&&(b=S.cardHeaderBsPrefix),s.a.createElement(v.a,Object(n.a)({as:y,ref:t,activeKey:N,className:o()(j,(a={},a[w]=!K,a[i+"-nav"]=K,a[b+"-"+h]=!!b,a[w+"-"+h]=!!h,a[w+"-fill"]=O,a[w+"-justified"]=g,a))},P),C)}));p.displayName="Nav",p.defaultProps={justify:!1,fill:!1},p.Item=b.a,p.Link=m.a,t.a=p},564:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n);function i(e,t){var a=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?t(e,a++):e}))}function o(e,t){var a=0;r.a.Children.forEach(e,(function(e){r.a.isValidElement(e)&&t(e,a++)}))}},569:function(e,t,a){"use strict";var n=a(540),r=a(0),i=a.n(r),o=a(519),c=a(520),s=a(521),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(i.a.Component);u.Container=o.a,u.Content=c.a,u.Pane=s.a,t.a=u},587:function(e,t,a){"use strict";var n=a(405),r=a(408),i=a(0),o=a.n(i),c=(a(576),a(474)),s=a(561),u=a(512),l=a(513),d=a(519),f=a(520),v=a(521),b=a(564);function m(e){var t=e.props,a=t.title,n=t.eventKey,r=t.disabled,i=t.tabClassName,c=t.id;return null==a?null:o.a.createElement(l.a,{as:u.a,eventKey:n,disabled:r,id:c,className:i},a)}var p=function(e){var t=Object(c.a)(e,{activeKey:"onSelect"}),a=t.id,i=t.onSelect,u=t.transition,l=t.mountOnEnter,p=t.unmountOnExit,y=t.children,x=t.activeKey,h=void 0===x?function(e){var t;return Object(b.a)(e,(function(e){null==t&&(t=e.props.eventKey)})),t}(y):x,O=Object(r.a)(t,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return o.a.createElement(d.a,{id:a,activeKey:h,onSelect:i,transition:u,mountOnEnter:l,unmountOnExit:p},o.a.createElement(s.a,Object(n.a)({},O,{role:"tablist",as:"nav"}),Object(b.b)(y,m)),o.a.createElement(f.a,null,Object(b.b)(y,(function(e){var t=Object(n.a)({},e.props);return delete t.title,delete t.disabled,delete t.tabClassName,o.a.createElement(v.a,t)}))))};p.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},p.displayName="Tabs",t.a=p},6384:function(e,t,a){"use strict";a.r(t);a(421),a(437),a(433),a(430),a(438),a(439);var n,r,i,o,c,s,u,l,d,f,v,b,m,p,y=a(407),x=a.n(y),h=a(414),O=a.n(h),g=a(416),E=a.n(g),j=a(424),C=a.n(j),N=a(418),P=a.n(N),w=a(419),K=a.n(w),k=a(417),S=a.n(k),L=a(412),F=a.n(L),I=a(0),A=(a(404),a(4102)),D=a(4101),R=a(464),T=a(587),X=a(569),M=a(506),V=a(478),W=a(491),B=a(6451),_=a(4612),q=a(6470),U=a(6334),H=a(6460),J=a(475),z=a.n(J),G=a(661),Q=a.n(G),Y=a(4872),Z=a.n(Y),$=a(4875),ee=a.n($),te=a(4878),ae=a.n(te),ne=a(581),re=a(488),ie=a(518),oe=a(493),ce=a(420);function se(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ue(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?se(Object(a),!0).forEach((function(t){F()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):se(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function le(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=S()(e);if(t){var r=S()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return K()(this,a)}}Object(ce.a)("LearnDistribution");var de=.999,fe=function(e){P()(a,e);var t=le(a);function a(e){var n;O()(this,a),n=t.call(this,e),F()(C()(n),"handleProbChange",(function(e){for(var t=n.props.countTrials?1:0,a=Q()(t,ae()(de,e),1),r=new Array(a.length),i=0;i<a.length;i++)r[i]={x:a[i],y:Z()(n.props.countTrials?a[i]-1:a[i],e)};n.setState({data:r,p:e})})),F()(C()(n),"handleLowerChange",(function(e){n.setState({x0:e})})),F()(C()(n),"handleUpperChange",(function(e){n.setState({x1:e})}));for(var r=e.countTrials?1:0,i=Q()(r,ae()(de,.5)+1,1),o=new Array(i.length),c=0;c<i.length;c++)o[c]={x:i[c],y:Z()(e.countTrials?i[c]-1:i[c],.5)};return n.state={p:.5,x0:0,x1:1,data:o},n}return E()(a,[{key:"renderInputs",value:function(e){var t=this.props.countTrials?1:0;return x()(I.Fragment,{},void 0,x()(ne.a,{legend:this.props.t("success-probability"),defaultValue:this.state.p,min:.01,step:this.props.step,max:1,onChange:this.handleProbChange},"".concat(e,"-p")),x()(ne.a,{legend:"x0",defaultValue:t,min:t-1,max:ae()(de,this.state.p)+1,step:this.props.step,onChange:this.handleLowerChange},"".concat(e,"-x0")),"range"===e?x()(ne.a,{legend:"x1",defaultValue:this.state.x1,min:t-1,max:ae()(de,this.state.p)+1,step:1,onChange:this.handleUpperChange}):null)}},{key:"render",value:function(){var e=this.state,t=e.x0,a=e.x1,y=e.p,h=this.props,O=h.countTrials,g=h.t,E=O?1:0;return x()(R.a,{style:ue({maxWidth:1200,margin:"10px auto"},this.props.style)},void 0,x()(R.a.Header,{as:"h3"},void 0,g("geometric-distribution")),x()(R.a.Body,{},void 0,x()(T.a,{defaultActiveKey:0,id:"poisson-tabs"},void 0,x()(X.a,{eventKey:0,title:n||(n=x()(oe.a,{raw:"P(X = x_0)"}))},void 0,x()(M.a,{},void 0,x()(V.a,{},void 0,x()(W.a,{md:5},void 0,x()(ie.a,{title:g("geometric-probabilities")},void 0,x()("p",{},void 0,this.props.countTrials?r||(r=x()(A.a,{i18nKey:"number-trials-until-success",ns:"LearnDistribution"},void 0,"Let ",x()(oe.a,{raw:"X"})," be the number of trials until the first success.")):i||(i=x()(A.a,{i18nKey:"number-failures-until-success",ns:"LearnDistribution"},void 0,"Let ",x()(oe.a,{raw:"X"})," be the number of failures until the first success."))),x()("span",{},void 0,g("for-success-probability")),x()(re.b,{inline:!0,legend:"p",defaultValue:.5,step:.01,max:1,min:.01,onChange:this.handleProbChange}),x()("span",{},void 0,g("we-get")),x()(oe.a,{raw:"P(X=x)= \\Large \\left( 1 - ".concat(y," \\right)^{x-1} ").concat(y),displayMode:!0}),x()("span",{},void 0,g("evaluated-at")," "),x()(re.b,{inline:!0,legend:"x",defaultValue:E,step:1,max:ae()(de,y)+1,min:E,onChange:this.handleLowerChange})," ",x()("span",{},void 0,g("we-get")),x()(oe.a,{raw:"P(X=".concat(t,")= \\Large \\left( 1 - ").concat(y," \\right)^{").concat(t).concat(O?"-1":"","} ").concat(y," = ").concat(Z()(O?t-1:t,y).toFixed(4)),displayMode:!0}))),x()(W.a,{md:7},void 0,x()(ie.a,{header:g("probability-plot")},void 0,x()(V.a,{},void 0,x()(W.a,{md:6},void 0,x()(B.a,{theme:_.a.material},void 0,o||(o=x()(q.a,{dependentAxis:!0})),x()(q.a,{label:"PMF",tickFormat:function(e){return"".concat(e)},style:{axisLabel:{padding:40}}}),x()(U.a,{data:this.state.data,style:{data:{fill:function(e){return e.datum.x===t?"tomato":"steelblue"}}}}))),x()(W.a,{md:6},void 0,x()(B.a,{theme:_.a.material},void 0,c||(c=x()(q.a,{dependentAxis:!0})),x()(q.a,{label:"CDF",tickFormat:function(e){return"".concat(e)},crossAxis:!1,style:{axisLabel:{padding:40}}}),x()(H.a,{samples:600,y:function(e){return ee()(e.x-E,y)},domain:{x:[0,ae()(de,y)+1],y:[0,1.1]}}),x()(H.a,{data:[{x:t,y:0},{x:t,y:ee()(t-E,y)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),x()(H.a,{data:[{x:0,y:ee()(t-E,y)},{x:t,y:ee()(t-E,y)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),x()(X.a,{eventKey:1,title:s||(s=x()(oe.a,{raw:"P(X \\le x_0)"}))},void 0,x()(M.a,{},void 0,x()(V.a,{},void 0,x()(W.a,{md:4},void 0,x()(ie.a,{},void 0,this.renderInputs("smaller"),x()(oe.a,{raw:"P(X \\le ".concat(z()(t,-4),") = ").concat(z()(ee()(t-E,y),-4))}))),x()(W.a,{md:8},void 0,x()(M.a,{},void 0,x()(V.a,{},void 0,x()(W.a,{md:6},void 0,x()(B.a,{domain:{x:[0,ae()(de,y)+2]},theme:_.a.material},void 0,u||(u=x()(q.a,{dependentAxis:!0})),x()(q.a,{label:"PMF",tickFormat:function(e){return"".concat(e)},style:{axisLabel:{padding:40}}}),x()(U.a,{data:this.state.data,style:{data:{fill:function(e){return e.datum.x<=t?"tomato":"steelblue"}}}}))),x()(W.a,{md:6},void 0,x()(B.a,{theme:_.a.material},void 0,l||(l=x()(q.a,{dependentAxis:!0})),x()(q.a,{label:"CDF",tickFormat:function(e){return"".concat(e)},style:{axisLabel:{padding:40}}}),x()(H.a,{samples:600,y:function(e){return ee()(e.x-E,y)},domain:{x:[0,ae()(de,y)+1],y:[0,1.1]}}),x()(H.a,{data:[{x:t,y:0},{x:t,y:ee()(t-E,y)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),x()(H.a,{data:[{x:0,y:ee()(t-E,y)},{x:t,y:ee()(t-E,y)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),x()(X.a,{eventKey:2,title:d||(d=x()(oe.a,{raw:"P(X > x_0)"}))},void 0,x()(M.a,{},void 0,x()(V.a,{},void 0,x()(W.a,{md:4},void 0,x()(ie.a,{},void 0,this.renderInputs("greater"),x()(oe.a,{raw:"P(X > ".concat(z()(t,-4),") = ").concat(z()(1-ee()(t-E,y),-4))}))),x()(W.a,{md:8},void 0,x()(V.a,{},void 0,x()(W.a,{md:6},void 0,x()(B.a,{domain:{x:[0,ae()(de,y)+2]},theme:_.a.material},void 0,f||(f=x()(q.a,{dependentAxis:!0})),x()(q.a,{label:"PMF",tickFormat:function(e){return"".concat(e)},style:{axisLabel:{padding:40}}}),x()(U.a,{data:this.state.data,style:{data:{fill:function(e){return e.datum.x>t?"tomato":"steelblue"}}}}))),x()(W.a,{md:6},void 0,x()(B.a,{theme:_.a.material},void 0,v||(v=x()(q.a,{dependentAxis:!0})),x()(q.a,{label:"CDF",tickFormat:function(e){return"".concat(e)},style:{axisLabel:{padding:40}}}),x()(H.a,{samples:600,y:function(e){return ee()(e.x-E,y)},domain:{x:[0,ae()(de,y)+1],y:[0,1.1]}}),x()(H.a,{data:[{x:t,y:0},{x:t,y:ee()(t-E,y)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),x()(H.a,{data:[{x:0,y:ee()(t-E,y)},{x:t,y:ee()(t-E,y)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))))),x()(X.a,{eventKey:3,title:b||(b=x()(oe.a,{raw:"P( x_0 \\le X \\le x_1)"}))},void 0,x()(M.a,{},void 0,x()(V.a,{},void 0,x()(W.a,{md:4},void 0,x()(ie.a,{},void 0,this.renderInputs("range"),x()(oe.a,{raw:"P( ".concat(z()(t,-4)," \\le X \\le ").concat(z()(a,-4),") = ").concat(z()(ee()(a-E,y)-ee()(t-E-1,y),-4))}))),x()(W.a,{md:8},void 0,x()(V.a,{},void 0,x()(W.a,{md:6},void 0,x()(B.a,{domain:{x:[0,ae()(de,y)+2]},theme:_.a.material},void 0,m||(m=x()(q.a,{dependentAxis:!0})),x()(q.a,{label:"PMF",tickFormat:function(e){return"".concat(e)},style:{axisLabel:{padding:40}}}),x()(U.a,{data:this.state.data,style:{data:{fill:function(e){return t<=e.datum.x&&e.datum.x<=a?"tomato":"steelblue"}}}}))),x()(W.a,{md:6},void 0,x()(B.a,{theme:_.a.material},void 0,p||(p=x()(q.a,{dependentAxis:!0})),x()(q.a,{label:"CDF",tickFormat:function(e){return"".concat(e)},style:{axisLabel:{padding:40}}}),x()(H.a,{samples:600,y:function(e){return ee()(e.x-E,y)},domain:{x:[0,ae()(de,y)+1],y:[0,1.1]}})))))))))))}}]),a}(I.Component);fe.defaultProps={countTrials:!1,step:.01,style:{}},t.default=Object(D.a)("LearnDistribution")(fe)},748:function(e,t,a){"use strict";var n=a(1135);e.exports=n}}]);