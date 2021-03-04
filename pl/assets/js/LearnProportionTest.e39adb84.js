/*! For license information please see LearnProportionTest.e39adb84.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[605],{4217:function(e,t,a){"use strict";var n=a(430).isPrimitive,o=a(647);e.exports=function(e){return n(e)&&o(e)}},4218:function(e,t,a){"use strict";var n=a(430).isObject,o=a(647);e.exports=function(e){return n(e)&&o(e.valueOf())}},4985:function(e,t,a){"use strict";var n=a(423),o=a(4986),r=a(4217),i=a(4218);n(o,"isPrimitive",r),n(o,"isObject",i),e.exports=o},4986:function(e,t,a){"use strict";var n=a(4217),o=a(4218);e.exports=function(e){return n(e)||o(e)}},6463:function(e,t,a){"use strict";a.r(t);a(438),a(436),a(441),a(440),a(437),a(427),a(416),a(421);var n=a(407),o=a.n(n),r=a(414),i=a.n(r),l=a(415),c=a.n(l),s=a(425),p=a.n(s),u=a(418),d=a.n(u),f=a(419),y=a.n(f),m=a(417),b=a.n(m),h=a(412),v=a.n(h),g=a(0),P=(a(404),a(4172)),w=a(509),O=a(476),x=a(493),_=a(807),j=a(465),S=a(6515),C=a(6524),D=a(916),k=a(450),T=a.n(k),z=a(431),E=a.n(z),R=a(433),H=a.n(R),M=a(473),V=a.n(M),G=a(664),Z=a.n(G),A=a(4985),I=a.n(A),B=a(455),N=a.n(B),F=a(934),W=a.n(F),L=a(697),q=a.n(L),K=a(628),J=a(490),U=a(508),X=a(1090),Y=a(494),Q=a(422);function $(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ee(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?$(Object(a),!0).forEach((function(t){v()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):$(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function te(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=b()(e);if(t){var o=b()(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return y()(this,a)}}Object(Q.a)("LearnHypothesisTesting");var ae={data:{fill:"tomato",stroke:"tomato",opacity:.3}},ne=T()("isle:learn:hypothesis-testing-proportion");function oe(e){return{x:e,y:W()(e,0,1)}}var re=o()(_.a,{variant:"secondary"},void 0,"First Sample"),ie=o()(_.a,{variant:"secondary"},void 0,"Second Sample"),le=o()("br",{}),ce=o()(K.a,{id:"hypothesisTestingProportion"}),se=function(e){d()(a,e);var t=te(a);function a(e){var n;return i()(this,a),n=t.call(this,e),v()(p()(n),"onGenerate",(function(){ne("Should generate new values...");var e,t,a,o,r,i,l=n.state,c=l.p0,s=l.phat,p=l.phat2,u=l.n,d=l.n2,f=l.samples,y=l.type;if(e=(e=Z()(-3.5,3.5,300)).map((function(e){return{x:e,y:W()(e,0,1)}})),"Two-Sample"===f){var m=s*(1-s)/u,b=p*(1-p)/d;r=H()(m+b),i=V()((s-p-c)/r,-3)}else i=V()((s-c)/H()(c*(1-c)/u),-3);switch(y){case 2:t=I()(i)||N()(i)?Z()(-3,3,200).map(oe):Z()(-3,i,200).map(oe),o="P( Z < ".concat(i,") = ").concat(V()(q()(i,0,1),-3));break;case 1:t=I()(i)||N()(i)?Z()(-3,3,200).map(oe):Z()(i,3,200).map(oe),o="P( Z > ".concat(i,") = ").concat(V()(1-q()(i,0,1),-3));break;case 0:I()(i)||N()(i)?(t=Z()(0,3,200).map(oe),a=Z()(-3,0,200).map(oe)):(t=Z()(E()(i),3,200).map(oe),a=Z()(-3,-E()(i),200).map(oe)),o="P( |Z| > ".concat(E()(i),") = ").concat(V()(1-q()(E()(i),0,1)+q()(-E()(i),0,1),-3))}var h={n:u,n2:d,p0:c,phat:s,phat2:p,pStat:i,areaData:t,areaData2:a,pdfData:e,probFormula:o,stderr:r};n.setState(h)})),v()(p()(n),"onDirectionChange",(function(e){var t,a,o,r=n.state.pStat;switch(e){case 0:t=Z()(E()(r),3,200).map((function(e){return{x:e,y:W()(e,0,1)}})),a=Z()(-3,-E()(r),200).map((function(e){return{x:e,y:W()(e,0,1)}})),o="P( |Z| > ".concat(E()(r),") = ").concat(V()(1-q()(E()(r),0,1)+q()(-E()(r),0,1),-3));break;case 1:t=Z()(r||0,3,200).map((function(e){return{x:e,y:W()(e,0,1)}})),o="P( Z > ".concat(r,") = ").concat(V()(1-q()(r,0,1),-3));break;case 2:t=Z()(-3,r,200).map((function(e){return{x:e,y:W()(e,0,1)}})),o="P( Z < ".concat(r,") = ").concat(V()(q()(r,0,1),-3))}n.setState({type:e,probFormula:o,areaData:t,areaData2:a})})),n.state={n:5,n2:5,p0:.5,phat:0,phat2:.001,pStat:0,probFormula:"",pdfData:null,areaData:null,areaData2:null,type:0,samples:n.props.types[0]},n}return c()(a,[{key:"componentDidMount",value:function(){this.onGenerate()}},{key:"renderParametersPanel",value:function(){var e=this,t=this.state,a=t.p0,n=t.samples,r=this.props.t,i=o()("div",{},void 0,"Two-Sample"===n?re:null,o()(J.b,{legend:r("sample-proportion"),defaultValue:this.state.phat,step:.001,min:0,max:1,onChange:function(t){e.setState({phat:t},e.onGenerate)}}),o()(J.b,{legend:r("sample-size"),defaultValue:this.state.n,step:1,min:1,onChange:function(t){e.setState({n:t},e.onGenerate)}})),l=o()("div",{},void 0,"Two-Sample"===n?ie:null,o()(J.b,{legend:r("sample-proportion"),defaultValue:this.state.phat2,step:.001,min:.001,max:.999,onChange:function(t){e.setState({phat2:t},e.onGenerate)}}),o()(J.b,{legend:r("sample-size"),defaultValue:this.state.n2,step:1,min:1,onChange:function(t){e.setState({n2:t},e.onGenerate)}})),c="Two-Sample"===n?"p_1 - p_2":"p",s=this.props.nullHypothesisAsValue;return o()(j.a,{maxWidth:1600},void 0,o()(j.a.Header,{as:"h4"},void 0,r("parameters")),o()(j.a.Body,{},void 0,o()(j.a,{body:!0,className:"bg-light"},void 0,o()(U.a,{options:this.props.types,defaultValue:n,onChange:function(t){e.setState({samples:t,p0:"Two-Sample"===t?0:.5},e.onGenerate)}}),o()(J.b,{legend:"".concat("Two-Sample"===n?"Difference in proportions":"Hypothesized proportion"," (null hypothesis)"),defaultValue:a,step:.001,min:0,max:1,onChange:function(t){e.setState({p0:t},e.onGenerate)}})),r("lets-assume"),o()(j.a,{body:!0,className:"bg-light"},void 0,i,"Two-Sample"===n?l:null),o()("p",{},void 0,r("conduct-the-following-test")),o()(X.a,{onChange:this.onDirectionChange,style:{width:"100%"}},void 0,o()(Y.a,{displayMode:!0,tag:"",raw:"H_0: ".concat(c," = ").concat(a," \\; vs. \\; H_1: ").concat(c," \\ne ").concat(a)}),o()(Y.a,{displayMode:!0,tag:"",raw:"H_0: ".concat(c," ").concat(s?"=":"\\le"," ").concat(a," \\; vs. \\; H_1: ").concat(c," > ").concat(a)}),o()(Y.a,{displayMode:!0,tag:"",raw:"H_0: ".concat(c," ").concat(s?"=":"\\ge"," ").concat(a," \\; vs. \\; H_1: ").concat(c," < ").concat(a)})),o()("p",{},void 0,r("calculate-test-statistic")),o()(Y.a,"Two-Sample"===n?{displayMode:!0,tag:"",style:{fontSize:"1.5em"},raw:"z  = \\frac{(\\hat p_1 - \\hat p_2) - (p_1 - p_2)}{\\sqrt{\\tfrac{\\hat p_1 (1- \\hat p_1)}{n_1} + \\tfrac{\\hat p_2 (1 - \\hat p_2)}{n_2} }}",elems:{n:{tooltip:r("sample-size")},p:{tooltip:r("proportion")},z:{tooltip:r("test-statistic")}}}:{displayMode:!0,tag:"",style:{fontSize:"1.5em"},raw:"z = \\frac{\\hat p - p}{\\sqrt{p (1-p) / n}}",elems:{n:{tooltip:r("sample-size")},p:{tooltip:r("proportion")},z:{tooltip:r("test-statistic")}}})))}},{key:"renderResultPanel",value:function(){var e=this.state,t=e.p0,a=e.phat,n=e.phat2,r=e.pStat,i=e.samples,l=e.n,c=e.stderr,s=this.props.t;return o()(j.a,{},void 0,o()(j.a.Header,{as:"h4"},void 0,s("test-result")),o()(j.a.Body,{},void 0,o()("p",{},void 0,s("plugging-in")),o()(Y.a,"Two-Sample"===i?{tag:"",displayMode:!0,raw:"z  = \\frac{".concat(V()(a-n,-3)," - ").concat(t,"}{\\sqrt{").concat(V()(c*c,-5),"}} = ").concat(r)}:{tag:"",displayMode:!0,raw:"z  = \\frac{".concat(a," - ").concat(t,"}{\\sqrt{\\frac{").concat(V()(t,-3)," \\cdot ").concat(V()(1-t,-3),"}{").concat(l,"} }} = ").concat(r)}),o()("p",{},void 0,s("calculate-p-value")),o()(Y.a,{raw:this.state.probFormula}),o()(S.a,{domain:{x:[-3,3]}},void 0,o()(C.a,{data:this.state.pdfData}),o()(D.a,{data:this.state.areaData,style:ae}),this.state.areaData2?o()(D.a,{data:this.state.areaData2,style:ae}):null)))}},{key:"render",value:function(){return o()(w.a,{style:ee({paddingTop:20,paddingBottom:20},this.props.style)},void 0,o()(O.a,{},void 0,o()(x.a,{md:6},void 0,this.renderParametersPanel()),o()(x.a,{md:6},void 0,this.renderResultPanel(),le,this.props.feedback?ce:null)))}}]),a}(g.Component);se.defaultProps={types:["One-Sample","Two-Sample"],feedback:!1,nullHypothesisAsValue:!1,style:{}},t.default=Object(P.a)("LearnHypothesisTesting")(se)},916:function(e,t,a){"use strict";var n=a(404),o=a.n(n),r=a(0),i=a.n(r),l=a(581),c=a.n(l),s=a(457),p=a.n(s),u=a(2885),d=a(1506),f=a(826),y=a(571),m=a(4201),b=a(2124),h=function(e){var t=e.polar,a=y.a.getDefaultStyles(e,"area"),n=y.a.getStyles(e.style,a),o={x:y.a.getRange(e,"x"),y:y.a.getRange(e,"y")},r={x:m.a.getDomainWithZero(e,"x"),y:m.a.getDomainWithZero(e,"y")},i={x:d.a.getBaseScale(e,"x").domain(r.x).range(e.horizontal?o.y:o.x),y:d.a.getBaseScale(e,"y").domain(r.y).range(e.horizontal?o.x:o.y)},l=t?e.origin||y.a.getPolarOrigin(e):void 0;return{style:n,data:function(e,t){var a=u.a.getData(e);a.length<2&&(a=[]);var n=function(e){var a="log"===d.a.getType(t[e])?1/Number.MAX_SAFE_INTEGER:0,n=t[e].domain(),o=f.a.getMinValue(n),r=f.a.getMaxValue(n),i=a;return o<0&&r<=0?i=r:o>=0&&r>0&&(i=o),f.a.containsDates(n)?new Date(i):i};return a.map((function(e){var t=void 0!==e._y1?e._y1:e._y,a=void 0!==e._y0?e._y0:n("y"),o=void 0!==e._x1?e._x1:e._x,r=void 0!==e._x0?e._x0:n("x");return p()({},e,{_y0:a,_y1:t,_x0:r,_x1:o})}))}(e,i),scale:i,domain:r,origin:l}},v=a(2812),g=a(617),P=a(2811),w=a(3777),O=a(3778),x=a(1292),_=a(1524);function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){S(e,t,a[t])}))}return e}function S(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var C=function(e){var t=void 0!==e._y1?e._y1:e._y;return null!=t&&null!==e._y0},D=function(e){return function(t){return e.x(void 0!==t._x1?t._x1:t._x)}},k=function(e){return function(t){return e.y(void 0!==t._y1?t._y1:t._y)}},T=function(e){return function(t){return e.y(t._y0)}},z=function(e){return function(t){return-1*e.x(void 0!==t._x1?t._x1:t._x)+Math.PI/2}},E=function(e){var t;return"curve".concat((t=e)&&t[0].toUpperCase()+t.slice(1))},R=function(e){var t=e.polar,a=e.scale,n="function"==typeof e.interpolation&&e.interpolation,o="string"==typeof e.interpolation&&E(e.interpolation),r=n||o;return t?O.a().defined(C).curve(n||g["".concat(o,"Closed")]).angle(z(a)).outerRadius(k(a)).innerRadius(T(a)):function(e,t){var a=e.horizontal,n=e.scale,o="function"==typeof t&&t,r="string"==typeof t&&t;return a?w.a().defined(C).curve(o||g[r]).x0(T(n)).x1(k(n)).y(D(n)):w.a().defined(C).curve(o||g[r]).x(D(n)).y1(k(n)).y0(T(n))}(e,r)},H=function(e){var t=e=function(e){var t=y.a.evaluateProp(e.ariaLabel,e),a=y.a.evaluateProp(e.desc,e),n=y.a.evaluateProp(e.id,e),o=y.a.evaluateStyle(p()({fill:"black"},e.style),e),r=y.a.evaluateProp(e.tabIndex,e);return p()({},e,{ariaLabel:t,desc:a,id:n,style:o,tabIndex:r})}(e),a=t.ariaLabel,n=t.role,o=t.shapeRendering,r=t.className,l=t.polar,c=t.origin,s=t.data,u=t.pathComponent,d=t.events,f=t.groupComponent,m=t.clipPath,b=t.id,h=t.style,w=t.desc,O=t.tabIndex,x=l&&c?"translate(".concat(c.x,", ").concat(c.y,")"):void 0,_=e.transform||x,S=h.stroke&&"none"!==h.stroke&&"transparent"!==h.stroke,T=R(e),H=S&&function(e){var t=e.polar,a=e.scale,n=e.horizontal,o="function"==typeof e.interpolation&&e.interpolation,r="string"==typeof e.interpolation&&E(e.interpolation);return t?v.a().defined(C).curve(o||g["".concat(r,"Closed")]).angle(z(a)).radius(k(a)):P.a().defined(C).curve(o||g[r]).x(n?k(a):D(a)).y(n?D(a):k(a))}(e),M=h.stroke?"none":h.fill,V=j({"aria-label":a,className:r,role:n,shapeRendering:o,transform:_},d,{clipPath:m,tabIndex:O}),G=i.a.cloneElement(u,p()({key:"".concat(b,"-area"),style:p()({},h,{stroke:M}),d:T(s),desc:w,tabIndex:O},V)),Z=S?i.a.cloneElement(u,p()({key:"".concat(b,"-area-stroke"),style:p()({},h,{fill:"none"}),d:H(s)},V)):null;return S?i.a.cloneElement(f,{},[G,Z]):G};H.propTypes=j({},x.a.primitiveProps,{groupComponent:o.a.element,interpolation:o.a.oneOfType([o.a.string,o.a.func]),pathComponent:o.a.element}),H.defaultProps={groupComponent:i.a.createElement("g",null),pathComponent:i.a.createElement(_.a,null),role:"presentation",shapeRendering:"auto"};var M=H,V=a(788),G=a(4683),Z=a(4686),A=a(4679),I=a(4680),B=a(4202),N=a(4677);function F(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function W(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function q(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var K={width:450,height:300,padding:50,interpolation:"linear"},J=function(e){function t(){return W(this,t),q(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var a,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a=t,(n=[{key:"shouldAnimate",value:function(){return!!this.props.animate}},{key:"render",value:function(){var e=t.animationWhitelist,a=t.role,n=y.a.modifyProps(this.props,K,a);if(this.shouldAnimate())return this.animateComponent(n,e);var o=this.renderContinuousData(n);return n.standalone?this.renderContainer(n.containerComponent,o):o}}])&&L(a.prototype,n),o&&L(a,o),t}(i.a.Component);Object.defineProperty(J,"animationWhitelist",{configurable:!0,enumerable:!0,writable:!0,value:["data","domain","height","padding","style","width"]}),Object.defineProperty(J,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){F(e,t,a[t])}))}return e}({},x.a.baseProps,x.a.dataProps,{interpolation:o.a.oneOfType([o.a.oneOf(["basis","cardinal","catmullRom","linear","monotoneX","monotoneY","natural","step","stepAfter","stepBefore"]),o.a.func]),label:V.a.deprecated(o.a.string,"Use `labels` instead for individual data labels")})}),Object.defineProperty(J,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{containerComponent:i.a.createElement(G.a,null),dataComponent:i.a.createElement(M,null),groupComponent:i.a.createElement(Z.a,null),labelComponent:i.a.createElement(A.a,{renderInPortal:!0}),samples:50,sortKey:"x",sortOrder:"ascending",standalone:!0,theme:I.a.grayscale}}),Object.defineProperty(J,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"VictoryArea"}),Object.defineProperty(J,"role",{configurable:!0,enumerable:!0,writable:!0,value:"area"}),Object.defineProperty(J,"continuous",{configurable:!0,enumerable:!0,writable:!0,value:!0}),Object.defineProperty(J,"defaultTransitions",{configurable:!0,enumerable:!0,writable:!0,value:B.a.continuousTransitions()}),Object.defineProperty(J,"defaultPolarTransitions",{configurable:!0,enumerable:!0,writable:!0,value:B.a.continuousPolarTransitions()}),Object.defineProperty(J,"getDomain",{configurable:!0,enumerable:!0,writable:!0,value:m.a.getDomainWithZero}),Object.defineProperty(J,"getData",{configurable:!0,enumerable:!0,writable:!0,value:u.a.getData}),Object.defineProperty(J,"getBaseProps",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return function(e,t){var a=y.a.modifyProps(e,t,"area"),n=e=p()({},a,h(a)),o=n.data,r=n.domain,i=n.events,l=n.groupComponent,s=n.height,u=n.horizontal,d=n.interpolation,f=n.origin,m=n.padding,v=n.polar,g=n.scale,P=n.sharedEvents,w=n.standalone,O=n.style,x=n.theme,_=n.width,j=n.labels,S=n.name,C={parent:{style:O.parent,width:_,height:s,scale:g,data:o,domain:r,standalone:w,theme:x,polar:v,origin:f,padding:m,name:S,horizontal:u},all:{data:{horizontal:u,polar:v,origin:f,scale:g,data:o,interpolation:d,groupComponent:l,style:O.data}}};return o.reduce((function(t,a,n){return(null!=b.a.getText(e,a,n)||j&&(i||P))&&(t[c()(a.eventKey)?n:a.eventKey]={labels:b.a.getProps(e,n)}),t}),C)}(e,K)}}),Object.defineProperty(J,"expectedComponents",{configurable:!0,enumerable:!0,writable:!0,value:["dataComponent","labelComponent","groupComponent","containerComponent"]});t.a=Object(N.a)(J,{components:[{name:"parent",index:"parent"},{name:"data",index:"all"},{name:"labels"}]})}}]);