(window.webpackJsonp=window.webpackJsonp||[]).push([[630],{423:function(e,t,a){"use strict";var n=a(405),r=a(408),o=a(409),i=a.n(o),l=a(0),s=a.n(l),u=a(411),d=a(463),c=s.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.variant,l=e.size,c=e.active,p=e.className,f=e.block,y=e.type,b=e.as,m=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),v=Object(u.a)(a,"btn"),h=i()(p,v,c&&"active",o&&v+"-"+o,f&&v+"-block",l&&v+"-"+l);if(m.href)return s.a.createElement(d.a,Object(n.a)({},m,{as:b,ref:t,className:i()(h,m.disabled&&"disabled")}));t&&(m.ref=t),y?m.type=y:b||(m.type="button");var g=b||"button";return s.a.createElement(g,Object(n.a)({},m,{className:h}))}));c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=c},6391:function(e,t,a){"use strict";a.r(t);a(421);var n,r,o,i,l=a(407),s=a.n(l),u=a(414),d=a.n(u),c=a(416),p=a.n(c),f=a(424),y=a.n(f),b=a(418),m=a.n(b),v=a(419),h=a.n(v),g=a(417),x=a.n(g),P=a(412),w=a.n(P),O=(a(465),a(428),a(0)),_=a(4101),j=a(506),k=a(478),C=a(491),z=a(464),S=a(423),E=a(6460),L=a(6451),R=a(6470),D=a(907),T=(a(404),a(475)),N=a.n(T),B=a(923),A=a.n(B),I=a(684),M=a.n(I),V=a(659),U=a.n(V),q=a(493),W=a(488),Z=a(631),F=a(420);function H(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=x()(e);if(t){var r=x()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return h()(this,a)}}Object(F.a)("LearnStandardize");var K=["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33"],X=U()(-30,30,200),G=function(e){m()(a,e);var t=H(a);function a(e){var n;return d()(this,a),n=t.call(this,e),w()(y()(n),"reset",(function(){n.setState({marked:[],unstandardizedLines:[],standardizedLines:[],eqn2:""})})),w()(y()(n),"onStandardize",(function(e){var t=n.state.marked.slice();t.push(e);var a,r=t[t.length-1],o=N()((r-n.state.mean)/n.state.sd,-4);a="z = \\frac{".concat(r,"-").concat(N()(n.state.mean,-2),"}{").concat(N()(n.state.sd,-2),"} = ").concat(o);var i=t.map((function(e,t){return s()(E.a,{data:[{x:e,y:0},{x:e,y:.5}],x:function(e){return e.x},y:function(e){return e.y},style:{data:{stroke:K[t%K.length]}}},t)})),l=t.map((function(e,t){return s()(E.a,{data:[{x:(e-n.state.mean)/n.state.sd,y:0},{x:(e-n.state.mean)/n.state.sd,y:.5}],x:function(e){return e.x},y:function(e){return e.y},style:{data:{stroke:K[t%K.length]}}},t)}));n.setState({marked:t,eqn2:a,unstandardizedLines:i,standardizedLines:l})})),n.state={mean:4,sd:3,lower:-4,upper:4,rangeProb:1,area:[]},n}return p()(a,[{key:"componentDidMount",value:function(){this.generateState(this.state.mean,this.state.sd)}},{key:"generateState",value:function(e,t){var a="Z = \\frac{X-".concat(N()(e,-2),"}{").concat(N()(t,-2),"}"),n=X.map((function(a){return{x:a,y:A()(a,e,t)}}));this.setState({data:n,mean:e,sd:t,eqn:a,marked:[],eqn2:"",unstandardizedLines:[],standardizedLines:[]})}},{key:"renderNumberInputPanel",value:function(){var e=this,t=this.props.t;return s()(z.a,{style:{marginBottom:10}},void 0,s()(z.a.Header,{as:"h4"},void 0,t("normal-to-standard-normal")),s()(z.a.Body,{},void 0,s()(W.b,{legend:t("mean"),defaultValue:4,step:this.props.step,min:-25,max:25,onChange:function(t){e.generateState(t,e.state.sd)}}),s()(W.b,{legend:t("standard-deviation"),defaultValue:3,step:this.props.step,min:1,max:10,onChange:function(t){e.generateState(e.state.mean,t)}})))}},{key:"renderUnstandardizedPlot",value:function(){var e=this.props.t;return s()(z.a,{},void 0,s()(z.a.Header,{as:"h4"},void 0,e("unstandardized")),s()(z.a.Body,{},void 0,s()(L.a,{domain:{x:[-30,30],y:[0,.4]}},void 0,s()(E.a,{data:this.state.data}),n||(n=s()(R.a,{dependentAxis:!0})),r||(r=s()(R.a,{label:"x"})),this.state.unstandardizedLines),s()(S.a,{variant:"secondary",onClick:this.reset},void 0,e("reset"))))}},{key:"renderStandardizedPlot",value:function(){var e=this,t=this.props.t;return s()(z.a,{},void 0,s()(z.a.Header,{as:"h4"},void 0,t("standardized")),s()(z.a.Body,{},void 0,s()(L.a,{domain:{x:[-5,5],y:[0,.4]}},void 0,o||(o=s()(R.a,{dependentAxis:!0})),i||(i=s()(R.a,{label:"z"})),s()(E.a,{samples:200,y:function(e){return A()(e.x,0,1)}}),this.props.showProbabilities&&this.state.area.length>0?s()(D.a,{data:this.state.area,style:{data:{opacity:.3,fill:"tomato"}}}):null,this.state.standardizedLines),this.props.showProbabilities?s()(O.Fragment,{},void 0,s()("span",{},void 0,t("evaluate-probabilities")),s()(q.a,{raw:"P( L = ".concat(this.state.lower," < Z < U = ").concat(this.state.upper,") = ").concat(this.state.rangeProb.toFixed(3)),elems:{L:{variable:"L",onChange:function(t){for(var a=U()(t,e.state.upper,200),n=new Array(200),r=0;r<a.length;r++)n[r]={x:a[r],y:A()(a[r],0,1)};var o=M()(e.state.upper,0,1)-M()(t,0,1);e.setState({area:n,rangeProb:o,lower:t})},defaultValue:this.state.lower},U:{variable:"U",onChange:function(t){for(var a=U()(e.state.lower,t,200),n=new Array(200),r=0;r<a.length;r++)n[r]={x:a[r],y:A()(a[r],0,1)};var o=M()(t,0,1)-M()(e.state.lower,0,1);e.setState({area:n,rangeProb:o,upper:t})},defaultValue:this.state.upper}},popoverPlacement:"bottom",displayMode:!0})):null))}},{key:"render",value:function(){var e=this.props.t;return s()(j.a,{},void 0,s()(k.a,{},void 0,s()(C.a,{md:12},void 0,this.renderNumberInputPanel())),s()(k.a,{},void 0,s()(C.a,{md:4},void 0,this.renderUnstandardizedPlot()),s()(C.a,{md:4},void 0,s()(Z.a,{autoStart:!1,title:e("standardize-values"),label:this.props.t("compute"),id:"learn_standardize",onGenerate:this.onStandardize},void 0,s()(q.a,{raw:this.state.eqn,displayMode:!0,tag:""}),s()(W.b,{legend:e("x-value"),defaultValue:0,step:this.props.step,min:-30,max:30})),s()(q.a,{raw:this.state.eqn2,displayMode:!0,tag:""})),s()(C.a,{md:4},void 0,this.renderStandardizedPlot())))}}]),a}(O.Component);G.defaultProps={showProbabilities:!1,step:"any"},t.default=Object(_.a)("LearnStandardize")(G)},907:function(e,t,a){"use strict";var n=a(404),r=a.n(n),o=a(0),i=a.n(o),l=a(580),s=a.n(l),u=a(456),d=a.n(u),c=a(2831),p=a(1496),f=a(817),y=a(571),b=a(4129),m=a(2071),v=function(e){var t=e.polar,a=y.a.getDefaultStyles(e,"area"),n=y.a.getStyles(e.style,a),r={x:y.a.getRange(e,"x"),y:y.a.getRange(e,"y")},o={x:b.a.getDomainWithZero(e,"x"),y:b.a.getDomainWithZero(e,"y")},i={x:p.a.getBaseScale(e,"x").domain(o.x).range(e.horizontal?r.y:r.x),y:p.a.getBaseScale(e,"y").domain(o.y).range(e.horizontal?r.x:r.y)},l=t?e.origin||y.a.getPolarOrigin(e):void 0;return{style:n,data:function(e,t){var a=c.a.getData(e);a.length<2&&(a=[]);var n=function(e){var a="log"===p.a.getType(t[e])?1/Number.MAX_SAFE_INTEGER:0,n=t[e].domain(),r=f.a.getMinValue(n),o=f.a.getMaxValue(n),i=a;return r<0&&o<=0?i=o:r>=0&&o>0&&(i=r),f.a.containsDates(n)?new Date(i):i};return a.map((function(e){var t=void 0!==e._y1?e._y1:e._y,a=void 0!==e._y0?e._y0:n("y"),r=void 0!==e._x1?e._x1:e._x,o=void 0!==e._x0?e._x0:n("x");return d()({},e,{_y0:a,_y1:t,_x0:o,_x1:r})}))}(e,i),scale:i,domain:o,origin:l}},h=a(2758),g=a(595),x=a(2757),P=a(3707),w=a(3708),O=a(1283),_=a(1516);function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){k(e,t,a[t])}))}return e}function k(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var C=function(e){var t=void 0!==e._y1?e._y1:e._y;return null!=t&&null!==e._y0},z=function(e){return function(t){return e.x(void 0!==t._x1?t._x1:t._x)}},S=function(e){return function(t){return e.y(void 0!==t._y1?t._y1:t._y)}},E=function(e){return function(t){return e.y(t._y0)}},L=function(e){return function(t){return-1*e.x(void 0!==t._x1?t._x1:t._x)+Math.PI/2}},R=function(e){var t;return"curve".concat((t=e)&&t[0].toUpperCase()+t.slice(1))},D=function(e){var t=e.polar,a=e.scale,n="function"==typeof e.interpolation&&e.interpolation,r="string"==typeof e.interpolation&&R(e.interpolation),o=n||r;return t?w.a().defined(C).curve(n||g["".concat(r,"Closed")]).angle(L(a)).outerRadius(S(a)).innerRadius(E(a)):function(e,t){var a=e.horizontal,n=e.scale,r="function"==typeof t&&t,o="string"==typeof t&&t;return a?P.a().defined(C).curve(r||g[o]).x0(E(n)).x1(S(n)).y(z(n)):P.a().defined(C).curve(r||g[o]).x(z(n)).y1(S(n)).y0(E(n))}(e,o)},T=function(e){var t=e=function(e){var t=y.a.evaluateProp(e.ariaLabel,e),a=y.a.evaluateProp(e.desc,e),n=y.a.evaluateProp(e.id,e),r=y.a.evaluateStyle(d()({fill:"black"},e.style),e),o=y.a.evaluateProp(e.tabIndex,e);return d()({},e,{ariaLabel:t,desc:a,id:n,style:r,tabIndex:o})}(e),a=t.ariaLabel,n=t.role,r=t.shapeRendering,o=t.className,l=t.polar,s=t.origin,u=t.data,c=t.pathComponent,p=t.events,f=t.groupComponent,b=t.clipPath,m=t.id,v=t.style,P=t.desc,w=t.tabIndex,O=l&&s?"translate(".concat(s.x,", ").concat(s.y,")"):void 0,_=e.transform||O,k=v.stroke&&"none"!==v.stroke&&"transparent"!==v.stroke,E=D(e),T=k&&function(e){var t=e.polar,a=e.scale,n=e.horizontal,r="function"==typeof e.interpolation&&e.interpolation,o="string"==typeof e.interpolation&&R(e.interpolation);return t?h.a().defined(C).curve(r||g["".concat(o,"Closed")]).angle(L(a)).radius(S(a)):x.a().defined(C).curve(r||g[o]).x(n?S(a):z(a)).y(n?z(a):S(a))}(e),N=v.stroke?"none":v.fill,B=j({"aria-label":a,className:o,role:n,shapeRendering:r,transform:_},p,{clipPath:b,tabIndex:w}),A=i.a.cloneElement(c,d()({key:"".concat(m,"-area"),style:d()({},v,{stroke:N}),d:E(u),desc:P,tabIndex:w},B)),I=k?i.a.cloneElement(c,d()({key:"".concat(m,"-area-stroke"),style:d()({},v,{fill:"none"}),d:T(u)},B)):null;return k?i.a.cloneElement(f,{},[A,I]):A};T.propTypes=j({},O.a.primitiveProps,{groupComponent:r.a.element,interpolation:r.a.oneOfType([r.a.string,r.a.func]),pathComponent:r.a.element}),T.defaultProps={groupComponent:i.a.createElement("g",null),pathComponent:i.a.createElement(_.a,null),role:"presentation",shapeRendering:"auto"};var N=T,B=a(772),A=a(4615),I=a(4618),M=a(4611),V=a(4612),U=a(4130),q=a(4609);function W(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function F(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function H(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var K={width:450,height:300,padding:50,interpolation:"linear"},X=function(e){function t(){return Z(this,t),H(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var a,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a=t,(n=[{key:"shouldAnimate",value:function(){return!!this.props.animate}},{key:"render",value:function(){var e=t.animationWhitelist,a=t.role,n=y.a.modifyProps(this.props,K,a);if(this.shouldAnimate())return this.animateComponent(n,e);var r=this.renderContinuousData(n);return n.standalone?this.renderContainer(n.containerComponent,r):r}}])&&F(a.prototype,n),r&&F(a,r),t}(i.a.Component);Object.defineProperty(X,"animationWhitelist",{configurable:!0,enumerable:!0,writable:!0,value:["data","domain","height","padding","style","width"]}),Object.defineProperty(X,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){W(e,t,a[t])}))}return e}({},O.a.baseProps,O.a.dataProps,{interpolation:r.a.oneOfType([r.a.oneOf(["basis","cardinal","catmullRom","linear","monotoneX","monotoneY","natural","step","stepAfter","stepBefore"]),r.a.func]),label:B.a.deprecated(r.a.string,"Use `labels` instead for individual data labels")})}),Object.defineProperty(X,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{containerComponent:i.a.createElement(A.a,null),dataComponent:i.a.createElement(N,null),groupComponent:i.a.createElement(I.a,null),labelComponent:i.a.createElement(M.a,{renderInPortal:!0}),samples:50,sortKey:"x",sortOrder:"ascending",standalone:!0,theme:V.a.grayscale}}),Object.defineProperty(X,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"VictoryArea"}),Object.defineProperty(X,"role",{configurable:!0,enumerable:!0,writable:!0,value:"area"}),Object.defineProperty(X,"continuous",{configurable:!0,enumerable:!0,writable:!0,value:!0}),Object.defineProperty(X,"defaultTransitions",{configurable:!0,enumerable:!0,writable:!0,value:U.a.continuousTransitions()}),Object.defineProperty(X,"defaultPolarTransitions",{configurable:!0,enumerable:!0,writable:!0,value:U.a.continuousPolarTransitions()}),Object.defineProperty(X,"getDomain",{configurable:!0,enumerable:!0,writable:!0,value:b.a.getDomainWithZero}),Object.defineProperty(X,"getData",{configurable:!0,enumerable:!0,writable:!0,value:c.a.getData}),Object.defineProperty(X,"getBaseProps",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return function(e,t){var a=y.a.modifyProps(e,t,"area"),n=e=d()({},a,v(a)),r=n.data,o=n.domain,i=n.events,l=n.groupComponent,u=n.height,c=n.horizontal,p=n.interpolation,f=n.origin,b=n.padding,h=n.polar,g=n.scale,x=n.sharedEvents,P=n.standalone,w=n.style,O=n.theme,_=n.width,j=n.labels,k=n.name,C={parent:{style:w.parent,width:_,height:u,scale:g,data:r,domain:o,standalone:P,theme:O,polar:h,origin:f,padding:b,name:k,horizontal:c},all:{data:{horizontal:c,polar:h,origin:f,scale:g,data:r,interpolation:p,groupComponent:l,style:w.data}}};return r.reduce((function(t,a,n){return(null!=m.a.getText(e,a,n)||j&&(i||x))&&(t[s()(a.eventKey)?n:a.eventKey]={labels:m.a.getProps(e,n)}),t}),C)}(e,K)}}),Object.defineProperty(X,"expectedComponents",{configurable:!0,enumerable:!0,writable:!0,value:["dataComponent","labelComponent","groupComponent","containerComponent"]});t.a=Object(q.a)(X,{components:[{name:"parent",index:"parent"},{name:"data",index:"all"},{name:"labels"}]})}}]);