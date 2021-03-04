(window.webpackJsonp=window.webpackJsonp||[]).push([[534],{2721:function(e,t,r){"use strict";var a=r(552);r.d(t,"a",(function(){return a.a}));var n=r(490);r.d(t,"b",(function(){return n.b}));var o=r(508);r.d(t,"c",(function(){return o.a}));r(582),r(794),r(763),r(877)},424:function(e,t,r){"use strict";var a=r(405),n=r(408),o=r(409),i=r.n(o),l=r(0),s=r.n(l),c=r(411),u=r(464),p=s.a.forwardRef((function(e,t){var r=e.bsPrefix,o=e.variant,l=e.size,p=e.active,d=e.className,f=e.block,m=e.type,b=e.as,v=Object(n.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=Object(c.a)(r,"btn"),h=i()(d,y,p&&"active",o&&y+"-"+o,f&&y+"-block",l&&y+"-"+l);if(v.href)return s.a.createElement(u.a,Object(a.a)({},v,{as:b,ref:t,className:i()(h,v.disabled&&"disabled")}));t&&(v.ref=t),m?v.type=m:b||(v.type="button");var g=b||"button";return s.a.createElement(g,Object(a.a)({},v,{className:h}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=p},4681:function(e,t,r){"use strict";var a=r(404),n=r.n(a),o=r(0),i=r.n(o),l=r(571),s=r(4202),c=r(1292),u=r(788),p=r(4683),d=r(4679),f=r(4680),m=r(4677),b=r(457),v=r.n(b),y=r(4902);function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){g(e,t,r[t])}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var x=function(e,t,r){var a="right"===r||"left"===r;return i.a.cloneElement(e.lineComponent,h({},e.events,{role:e.role,shapeRendering:e.shapeRendering,className:e.className,style:e.style,transform:e.transform,key:"".concat(e.id,"-border-").concat(r),x1:a?t[r]:e.x-e.borderWidth,x2:a?t[r]:e.x+e.borderWidth,y1:a?e.y-e.borderWidth:t[r],y2:a?e.y+e.borderWidth:t[r]}))},w=function(e,t,r){var a="top"===r||"bottom"===r;return i.a.cloneElement(e.lineComponent,h({},e.events,{role:e.role,shapeRendering:e.shapeRendering,className:e.className,style:e.style,transform:e.transform,key:"".concat(e.id,"-cross-").concat(r),x1:e.x,x2:a?e.x:t[r],y1:e.y,y2:a?t[r]:e.y}))},O=function(e){var t=e.errorX,r=e.errorY,a={right:{error:t,errorIndex:0},left:{error:t,errorIndex:1},top:{error:r,errorIndex:1},bottom:{error:r,errorIndex:0}};return["right","left","top","bottom"].reduce((function(e,t){var r,n,o;return e[t]=(n=(r=a[t]).error,o=r.errorIndex,n?n[o]:void 0),e}),{})},P=function(e){var t=e=function(e){var t=l.a.evaluateProp(e.ariaLabel,e),r=l.a.evaluateProp(e.id,e),a=l.a.evaluateStyle(v()({stroke:"black"},e.style),e),n=l.a.evaluateProp(e.tabIndex,e);return v()({},e,{ariaLabel:t,id:r,style:a,tabIndex:n})}(e),r=t.ariaLabel,a=t.tabIndex,n=O(e),o=[n.right?x(e,n,"right"):null,n.left?x(e,n,"left"):null,n.bottom?x(e,n,"bottom"):null,n.top?x(e,n,"top"):null,n.right?w(e,n,"right"):null,n.left?w(e,n,"left"):null,n.bottom?w(e,n,"bottom"):null,n.top?w(e,n,"top"):null].filter(Boolean);return i.a.cloneElement(e.groupComponent,{"aria-label":r,tabIndex:a},o)};P.propTypes=h({},c.a.primitiveProps,{borderWidth:n.a.number,datum:n.a.object,errorX:n.a.oneOfType([n.a.number,n.a.array,n.a.bool]),errorY:n.a.oneOfType([n.a.number,n.a.array,n.a.bool]),groupComponent:n.a.element,lineComponent:n.a.element,x:n.a.number,y:n.a.number}),P.defaultProps={groupComponent:i.a.createElement("g",null),lineComponent:i.a.createElement(y.a,null),role:"presentation",shapeRendering:"auto"};var j=P,C=r(581),S=r.n(C),z=r(519),k=r.n(z),T=r(2885),B=r(4201),E=r(1506),_=r(2124),N=function(e,t,r){var a=t[{x:"_errorX",y:"_errorY"}[r]];if(0===a)return!1;var n=e.scale[r];return Array.isArray(a)?[0!==a[0]&&n(a[0]+t["_".concat(r)]),0!==a[1]&&n(t["_".concat(r)]-a[1])]:[n(a+t["_".concat(r)]),n(t["_".concat(r)]-a)]},M=function(e){var t=["x","y","errorX","errorY"];if(e.data)return T.a.formatData(e.data,e,t);var r=e.errorX||e.errorY?T.a.generateData(e):[];return T.a.formatData(r,e,t)},R=function(e,t){var r=B.a.getMinFromProps(e,t),a=B.a.getMaxFromProps(e,t),n=M(e);if(n.length<1)return void 0!==r&&void 0!==a?B.a.getDomainFromMinMax(r,a):void 0;var o="x"===t?"_errorX":"_errorY",i=function(e){var r="min"===e?1/0:-1/0,a="min"===e?1:0,i="min"===e?-1:1;return n.reduce((function(r,n){var l=Array.isArray(n[o])?n[o][a]:n[o],s=n["_".concat(t)]+i*(l||0);return r<s&&"min"===e||r>s&&"max"===e?r:s}),r)},l=void 0!==r?r:i("min"),s=void 0!==a?a:i("max");return B.a.getDomainFromMinMax(l,s)},X=function(e,t){return B.a.createDomainFunction(R)(e,t)},D=function(e,t){var r=l.a.modifyProps(e,t,"errorbar"),a=e=v()({},r,function(e){var t=l.a.getDefaultStyles(e,"errorbar"),r=l.a.getStyles(e.style,t)||{},a=M(e),n={x:l.a.getRange(e,"x"),y:l.a.getRange(e,"y")},o={x:X(e,"x"),y:X(e,"y")};return{domain:o,data:a,scale:{x:E.a.getBaseScale(e,"x").domain(o.x).range(e.horizontal?n.y:n.x),y:E.a.getBaseScale(e,"y").domain(o.y).range(e.horizontal?n.x:n.y)},style:r,origin:e.polar?e.origin||l.a.getPolarOrigin(e):void 0}}(r)),n=a.borderWidth,o=a.data,i=a.domain,s=a.events,c=a.groupComponent,u=a.height,p=a.horizontal,d=a.labels,f=a.name,m=a.origin,b=a.padding,y=a.polar,h=a.scale,g=a.sharedEvents,x=a.standalone,w=a.style,O=a.theme,P=a.width,j={parent:{data:o,domain:i,height:u,horizontal:p,name:f,origin:m,padding:b,polar:y,scale:h,standalone:x,style:w.parent,theme:O,width:P}};return o.reduce((function(t,r,a){var i=S()(r.eventKey)?a:r.eventKey,u=l.a.scalePoint(v()({},e,{scale:h}),r),f=u.x,m=u.y,b=N(e,r,"x"),y=N(e,r,"y"),x={borderWidth:n,data:o,datum:r,errorX:p?y:b,errorY:p?b:y,groupComponent:c,horizontal:p,index:a,scale:h,style:w.data,x:f,y:m};t[i]={data:x};var O=_.a.getText(e,r,a);return(null!=O||d&&(s||g))&&(t[i].labels=function(e,t,r){var a=e.x,n=e.y,o=e.index,i=e.scale,s=e.errorY,c=e.errorX,u=e.horizontal,p=e.labelComponent,d=e.theme,f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"x",r="y"===t?s:c;return(r&&Array.isArray(r)?r[0]:r)||e[t]},m=r.labels||{},b=m.padding||0,v=u?"start":"middle",y=u?"middle":"end",h={style:m,y:u?n:f("y"),x:u?f("x"):a,dy:u?0:-b,dx:u?b:0,text:t,index:o,scale:i,datum:e.datum,data:e.data,textAnchor:m.textAnchor||v,verticalAnchor:m.verticalAnchor||y,angle:m.angle,horizontal:u};if(!l.a.isTooltip(p))return h;var g=d&&d.tooltip||{};return k()({},h,l.a.omit(g,["style"]))}(v()({},e,x),O,w)),t}),j)};function Y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function A(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function W(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var I={width:450,height:300,padding:50},H=function(e){function t(){return A(this,t),W(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,a,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r=t,(a=[{key:"shouldAnimate",value:function(){return!!this.props.animate}},{key:"render",value:function(){var e=t.animationWhitelist,r=t.role,a=l.a.modifyProps(this.props,I,r);if(this.shouldAnimate())return this.animateComponent(a,e);var n=this.renderData(a);return a.standalone?this.renderContainer(a.containerComponent,n):n}}])&&L(r.prototype,a),n&&L(r,n),t}(i.a.Component);Object.defineProperty(H,"animationWhitelist",{configurable:!0,enumerable:!0,writable:!0,value:["data","domain","height","padding","samples","style","width","errorX","errorY","borderWidth"]}),Object.defineProperty(H,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"VictoryErrorBar"}),Object.defineProperty(H,"role",{configurable:!0,enumerable:!0,writable:!0,value:"errorbar"}),Object.defineProperty(H,"defaultTransitions",{configurable:!0,enumerable:!0,writable:!0,value:s.a.discreteTransitions()}),Object.defineProperty(H,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){Y(e,t,r[t])}))}return e}({},c.a.baseProps,c.a.dataProps,{borderWidth:n.a.number,errorX:n.a.oneOfType([n.a.func,u.a.allOfType([u.a.integer,u.a.nonNegative]),n.a.string,n.a.arrayOf(n.a.string)]),errorY:n.a.oneOfType([n.a.func,u.a.allOfType([u.a.integer,u.a.nonNegative]),n.a.string,n.a.arrayOf(n.a.string)]),horizontal:n.a.bool})}),Object.defineProperty(H,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{containerComponent:i.a.createElement(p.a,null),data:[{x:1,y:1,errorX:.1,errorY:.1},{x:2,y:2,errorX:.2,errorY:.2},{x:3,y:3,errorX:.3,errorY:.3},{x:4,y:4,errorX:.4,errorY:.4}],dataComponent:i.a.createElement(j,null),labelComponent:i.a.createElement(d.a,null),groupComponent:i.a.createElement("g",{role:"presentation"}),samples:50,sortOrder:"ascending",standalone:!0,theme:f.a.grayscale}}),Object.defineProperty(H,"getDomain",{configurable:!0,enumerable:!0,writable:!0,value:X}),Object.defineProperty(H,"getData",{configurable:!0,enumerable:!0,writable:!0,value:M}),Object.defineProperty(H,"getBaseProps",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return D(e,I)}}),Object.defineProperty(H,"expectedComponents",{configurable:!0,enumerable:!0,writable:!0,value:["dataComponent","labelComponent","groupComponent","containerComponent"]});t.a=Object(m.a)(H)},558:function(e,t,r){"use strict";var a=r(405),n=r(408),o=r(409),i=r.n(o),l=r(0),s=r.n(l),c=r(411),u=s.a.forwardRef((function(e,t){var r=e.bsPrefix,o=e.size,l=e.toggle,u=e.vertical,p=e.className,d=e.as,f=void 0===d?"div":d,m=Object(n.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),b=Object(c.a)(r,"btn-group"),v=b;return u&&(v=b+"-vertical"),s.a.createElement(f,Object(a.a)({},m,{ref:t,className:i()(p,v,o&&b+"-"+o,l&&b+"-toggle")}))}));u.displayName="ButtonGroup",u.defaultProps={vertical:!1,toggle:!1,role:"group"},t.a=u},6460:function(e,t,r){"use strict";r.r(t);r(427),r(421);var a=r(407),n=r.n(a),o=(r(527),r(607),r(797)),i=r.n(o),l=(r(441),r(440),r(416),r(414)),s=r.n(l),c=r(415),u=r.n(c),p=r(425),d=r.n(p),f=r(418),m=r.n(f),b=r(419),v=r.n(b),y=r(417),h=r.n(y),g=r(412),x=r.n(g),w=r(0),O=(r(404),r(4172)),P=r(454),j=r(424),C=r(558),S=r(509),z=r(493),k=r(476),T=r(431),B=r.n(T),E=r(433),_=r.n(E),N=r(780),M=r.n(N),R=r(6534),X=r(6515),D=r(4680),Y=r(4681),A=r(6524),L=r(1020),W=r.n(L),I=r(749),H=r.n(I),F=r(473),V=r.n(F),J=r(426),K=r.n(J),Q=r(600),G=r.n(Q),q=r(2721),U=r(534),Z=r(494),$=r(589),ee=r(652),te=r(422);r(63),r(64);function re(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=h()(e);if(t){var n=h()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return v()(this,r)}}Object(te.a)("LearnConfidenceCoverage");var ae=n()(R.a,{dependentAxis:!0,padding:20,standalone:!1}),ne=n()("br",{}),oe=n()("br",{}),ie=function(e){m()(r,e);var t=re(r);function r(e){var a;return s()(this,r),a=t.call(this,e),x()(d()(a),"drawSamples",(function(e){"numeric"===a.state.type?a.drawQuantitative(e):"binary"===a.state.type&&a.drawBinary(e)})),x()(d()(a),"drawQuantitative",(function(e){for(var t=a.state,r=t.nTrapped,n=t.nLower,o=t.nHigher,i=1-a.state.level,l=a.state.errorBars.slice(),s=a.state.trueMean,c=a.state.sampleSize,u=0;u<e;u++){var p=M()(a.state.values,{size:c}),d=Object($.a)(p),f=Object(ee.a)(p)/_()(c),m=W()(1-i/2,c-1),b=B()(f*m),v={num:l.length+1,yval:d,err:b};v.yval-v.err>s?o+=1:v.yval+v.err<s?n+=1:r+=1,l.push(v)}a.setState({nTrapped:r,nLower:n,nHigher:o,errorBars:l})})),x()(d()(a),"drawBinary",(function(e){for(var t=a.state,r=t.nTrapped,n=t.nLower,o=t.nHigher,i=1-a.state.level,l=a.state.errorBars.slice(),s=a.state.trueMean,c=0;c<e;c++){var u=M()(a.state.values,{size:a.state.sampleSize}),p=Object($.a)(u),d=_()(p*(1-p)/a.state.sampleSize),f={num:l.length+1,yval:p,err:B()(d*H()(1-i/2,0,1))};f.yval-f.err>s?o+=1:f.yval+f.err<s?n+=1:r+=1,l.push(f)}a.setState({nTrapped:r,nLower:n,nHigher:o,errorBars:l})})),x()(d()(a),"onSelectVariable",(function(e){var t=a.props.data[e];t=t.filter((function(e){return null!==e&&""!==e}));var r,n,o="none";if(G()(t)&&(o="numeric",r=Object($.a)(t)),function(e){for(var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r={},a=0,n=0;n<e.length;n++){if(K()(r,e[n])||(r[e[n]]=!0,a+=1),a>2)return!1;if(t&&n>50)break}return 2===a}(t)){o="binary",n=i()(new Set(t)).sort();for(var l=0,s=0;s<t.length;s++)t[s]===n[1]&&(l+=1);r=l/t.length}var c=a.state.sampleSize;c>t.length&&(c=t.length),a.setState({variable:e,values:t,sampleSize:c,type:o,trueMean:r})})),a.state={variable:null,type:"none",errorBars:[],nTrapped:0,nLower:0,nHigher:0,sampleSize:25,level:.95},a}return u()(r,[{key:"clear",value:function(){this.setState({errorBars:[],nTrapped:0,nLower:0,nHigher:0})}},{key:"renderChart",value:function(){var e=this.state.errorBars;if(!e||0===e.length)return null;var t=this.state.trueMean;return n()(X.a,{padding:{top:20,bottom:30,left:40,right:20},height:2.5*this.state.errorBars.length+50,theme:D.a.material},void 0,n()(R.a,{padding:20,standalone:!1,style:{tickLabels:{fontSize:"9px"}}}),ae,n()(Y.a,{animate:{duration:100},style:{data:{stroke:function(e){return e.datum.yval-e.datum.err>t||e.datum.yval+e.datum.err<t?"darkred":"steelblue"}}},data:this.state.errorBars,x:"yval",y:"num",errorX:function(e){return e.err}}),n()(A.a,{data:[{x:t,y:0},{x:t,y:this.state.errorBars.length}]}))}},{key:"render",value:function(){var e=this,t=this.props.t,r=this.state.errorBars.length,a="numeric"===this.state.type?"mean":"proportion";return n()(S.a,{style:{maxWidth:1200}},void 0,n()(q.c,{legend:t("select-variable"),options:this.props.variables,onChange:this.onSelectVariable}),"numeric"===this.state.type||"binary"===this.state.type?n()(k.a,{},void 0,n()(z.a,{md:6},void 0,n()(U.a,{header:n()("span",{},void 0,t("confidence-intervals-for")," ",this.state.variable),style:{height:"85vh"}},void 0,this.renderChart())),n()(z.a,{md:6},void 0,"numeric"===this.state.type||"binary"===this.state.type?n()(U.a,{header:t("parameters")},void 0,n()(q.b,{legend:t("sample-size"),step:1,min:1,value:this.state.sampleSize,max:this.state.values.length,onChange:function(t){return e.setState({sampleSize:t})}}),n()(q.b,{legend:t("confidence-level"),step:.01,min:0,max:1,value:this.state.level,onChange:function(t){return e.setState({level:t})}}),n()(C.a,{},void 0,G()(this.props.samples)?this.props.samples.map((function(r,a){return n()(j.a,{onClick:function(){e.drawSamples(r)}},a,t("draw-samples",{n:r}))})):n()(j.a,{onClick:function(){e.drawSamples(e.props.samples)}},void 0,t("draw-samples",{n:this.props.samples})),n()(j.a,{onClick:this.clear.bind(this)},void 0,t("clear")))):null,n()(U.a,{header:t("statistics")},void 0,t("number-of-confidence-intervals-of",{center:a}),"\xa0",n()(Z.a,{raw:V()(this.state.trueMean,-3)}),": ",ne,n()(Z.a,{raw:"\\text{".concat(t("covering-population")," ").concat(t(a),": }").concat(this.state.nTrapped," \\text{ out of } ").concat(r),displayMode:!0}),this.state.errorBars.length>0?n()(w.Fragment,{},void 0,n()(Z.a,{raw:"\\text{".concat(t("coverage"),": }").concat(V()(this.state.nTrapped/r,-3),"\\%"),displayMode:!0}),t("number-of-confidence-intervals",{center:a})," ",oe,n()(Z.a,{raw:"\\text{".concat(t("interval-above-population")," ").concat(a,": }").concat(this.state.nHigher),displayMode:!0}),n()(Z.a,{raw:"\\text{".concat(t("interval-below-population")," ").concat(a,": }").concat(this.state.nLower),displayMode:!0})):null))):n()(P.a,{variant:"info",style:{fontSize:24}},void 0,t("please-sample")))}}]),r}(w.Component);ie.defaultProps={samples:25},t.default=Object(O.a)("LearnConfidenceCoverage")(ie)}}]);