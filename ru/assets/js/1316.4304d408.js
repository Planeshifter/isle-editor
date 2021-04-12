/*! For license information please see 1316.4304d408.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1316],{2664:function(e,t,n){"use strict";var r=n(422),a=n(574),o=n(602),i=n(445),l=n(477),c=n(425),u=n(470),s=n(573),p=n(3763).factory,f=n(415),y=n(603),d=n(3769),m=n(3770);e.exports=function(){var e,t,n,b,g,h,v;if(0===arguments.length)t=p();else if(1===arguments.length){if(!i(n=arguments[0]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(c(n,"prng")){if(!l(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");t=p({prng:n.prng})}else t=p(n)}else{if(h=d(v=arguments[0],e=arguments[1]))throw h;if(arguments.length>2){if(!i(n=arguments[2]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(c(n,"prng")){if(!l(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");t=p({prng:n.prng})}else t=p(n)}else t=p()}return g=void 0===v?E:S,b=t.PRNG,r(g,"NAME","normal"),n&&n.prng?(r(g,"seed",null),r(g,"seedLength",null),o(g,"state",u(null),s),r(g,"stateLength",null),r(g,"byteLength",null),r(g,"toJSON",u(null))):(a(g,"seed",x),a(g,"seedLength",O),o(g,"state",j,T),a(g,"stateLength",P),a(g,"byteLength",w),r(g,"toJSON",C)),r(g,"PRNG",b),g;function x(){return b.seed}function O(){return b.seedLength}function P(){return b.stateLength}function w(){return b.byteLength}function j(){return b.state}function T(e){b.state=e}function C(){var t={type:"PRNG"};return t.name=g.NAME,t.state=y(b.state),t.params=void 0===v?[]:[v,e],t}function S(){return m(t,v,e)}function E(e,n){return f(e)||f(n)||n<=0?NaN:m(t,e,n)}}},2665:function(e,t,n){"use strict";var r=n(422),a=n(574),o=n(602),i=n(477),l=n(445),c=n(473).isPrimitive,u=n(425),s=n(1050),p=n(666).factory,f=n(470),y=n(573),d=n(452),m=n(722),b=n(603),g=n(3765);e.exports=function(e){var t,n,h,v;if(v={copy:!0},arguments.length){if(!l(e))throw new TypeError("invalid argument. Must provide an object. Value: `"+e+"`.");if(u(e,"copy")&&(v.copy=e.copy,!c(e.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+e.copy+"`.");if(u(e,"prng")){if(!i(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else if(u(e,"state")){if(v.state=e.state,!s(e.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+e.state+"`.")}else if(u(e,"seed")&&(v.seed=e.seed,void 0===e.seed))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+e.seed+"`.")}return void 0===v.state?void 0===t?t=(n=p(v)).normalized:(n=p({seed:d(1+m*t()),copy:v.copy}),v.seed=null):t=(n=p(v)).normalized,h=g(t,n),r(h,"NAME","improved-ziggurat"),null===v.seed?(r(h,"seed",null),r(h,"seedLength",null)):(a(h,"seed",x),a(h,"seedLength",O)),e&&e.prng?(o(h,"state",f(null),y),r(h,"stateLength",null),r(h,"byteLength",null),r(h,"toJSON",f(null))):(o(h,"state",j,T),a(h,"stateLength",P),a(h,"byteLength",w),r(h,"toJSON",C)),r(h,"PRNG",t),h;function x(){return n.seed}function O(){return n.seedLength}function P(){return n.stateLength}function w(){return n.byteLength}function j(){return n.state}function T(e){n.state=e}function C(){var e={type:"PRNG"};return e.name=h.NAME,e.state=b(n.state),e.params=[],e}}},3761:function(e,t,n){"use strict";var r=n(422),a=n(3762);r(a,"factory",n(2664)),e.exports=a},3762:function(e,t,n){"use strict";var r=n(2664)();e.exports=r},3763:function(e,t,n){"use strict";var r=n(422),a=n(3764);r(a,"factory",n(2665)),e.exports=a},3764:function(e,t,n){"use strict";var r=n(2665)();e.exports=r},3765:function(e,t,n){"use strict";var r=n(431),a=n(449),o=n(3766),i=n(3767),l=n(3768),c=3.442619855899,u=o(128,c),s=i(u);e.exports=function(e,t){return function(){var n,o,i,p,f,y,d;for(;;){if(f=2*e()-1,y=127&t(),r(f)<s[y])return f*u[y];if(0===y)return l(e,c,f<0);if(p=f*u[y],i=p*p,d=y+1,n=a(-.5*(u[y]*u[y]-i)),(o=a(-.5*(u[d]*u[d]-i)))+e()*(n-o)<1)return p}}}},3766:function(e,t,n){"use strict";var r=n(435),a=n(449),o=n(451),i=.00991256303526217;e.exports=function(e,t){var n,l,c;for(n=new Array(e+1),l=a(-.5*t*t),n[0]=i/l,n[1]=t,n[e]=0,c=2;c<e;c++)n[c]=r(-2*o(i/n[c-1]+l)),l=a(-.5*n[c]*n[c]);return n}},3767:function(e,t,n){"use strict";e.exports=function(e){var t,n;for(t=[],n=0;n<e.length-1;n++)t.push(e[n+1]/e[n]);return t}},3768:function(e,t,n){"use strict";var r=n(451);e.exports=function(e,t,n){var a,o;do{a=r(e())/t,o=r(e())}while(-2*o<a*a);return n?a-t:t-a}},3769:function(e,t,n){"use strict";var r=n(429).isPrimitive,a=n(689).isPrimitive,o=n(455);e.exports=function(e,t){return!r(e)||o(e)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+e+"`."):a(t)?null:new TypeError("invalid argument. `sigma` must be a positive number. Value: `"+t+"`.")}},3770:function(e,t,n){"use strict";e.exports=function(e,t,n){return t+n*e()}},4610:function(e,t,n){"use strict";var r=n(404),a=n.n(r),o=n(0),i=n.n(o),l=n(571),c=n(4130),u=n(1283),s=n(772),p=n(4615),f=n(456),y=n.n(f),d=n(1109),m=n.n(d),b={circle:function(e,t,n){return"M ".concat(e,", ").concat(t,"\n      m ").concat(-n,", 0\n      a ").concat(n,", ").concat(n," 0 1,0 ").concat(2*n,",0\n      a ").concat(n,", ").concat(n," 0 1,0 ").concat(2*-n,",0")},square:function(e,t,n){var r=.87*n,a=e-r,o=t+r,i=e+r-a;return"M ".concat(a,", ").concat(o,"\n      h").concat(i,"\n      v-").concat(i,"\n      h-").concat(i,"\n      z")},diamond:function(e,t,n){var r=.87*n,a=Math.sqrt(r*r*2);return"M ".concat(e,", ").concat(t+a,"\n      l ").concat(a,", -").concat(a,"\n      l -").concat(a,", -").concat(a,"\n      l -").concat(a,", ").concat(a,"\n      l ").concat(a,", ").concat(a,"\n      z")},triangleDown:function(e,t,n){var r=e+n,a=t-n,o=t+n/2*Math.sqrt(3);return"M ".concat(e-n,", ").concat(a,"\n      L ").concat(r,", ").concat(a,"\n      L ").concat(e,", ").concat(o,"\n      z")},triangleUp:function(e,t,n){var r=e+n,a=t-n/2*Math.sqrt(3),o=t+n;return"M ".concat(e-n,", ").concat(o,"\n      L ").concat(r,", ").concat(o,"\n      L ").concat(e,", ").concat(a,"\n      z")},plus:function(e,t,n){var r=1.1*n,a=r/1.5;return"\n      M ".concat(e-a/2,", ").concat(t+r,"\n      v-").concat(a,"\n      h-").concat(a,"\n      v-").concat(a,"\n      h").concat(a,"\n      v-").concat(a,"\n      h").concat(a,"\n      v").concat(a,"\n      h").concat(a,"\n      v").concat(a,"\n      h-").concat(a,"\n      v").concat(a,"\n      z")},cross:function(e,t,n){var r=.8*n,a=r/1.5;return"\n      M ".concat(e-a/2,", ").concat(t+r+a,"\n      v-").concat(2*a,"\n      h-").concat(a,"\n      v-").concat(a,"\n      h").concat(a,"\n      v-").concat(a,"\n      h").concat(a,"\n      v").concat(a,"\n      h").concat(a,"\n      v").concat(a,"\n      h-").concat(a,"\n      v").concat(2*a,"\n      z")},minus:function(e,t,n){var r=1.1*n,a=r-.3*r,o=e-r,i=t+a/2,l=e+r-o;return"M ".concat(o,", ").concat(i,"\n      h").concat(l,"\n      v-").concat(a,"\n      h-").concat(l,"\n      z")},star:function(e,t,n){var r=1.35*n,a=Math.PI/5,o=m()(10).map((function(n){var o=n%2==0?r:r/2;return"".concat(o*Math.sin(a*(n+1))+e,",\n        ").concat(o*Math.cos(a*(n+1))+t)}));return"M ".concat(o.join("L")," z")}},g=n(1516);function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(e){var t=e.x,n=e.y,r=e.size,a=e.symbol;if(e.getPath)return e.getPath(t,n,r);var o={circle:b.circle,square:b.square,diamond:b.diamond,triangleDown:b.triangleDown,triangleUp:b.triangleUp,plus:b.plus,minus:b.minus,star:b.star,cross:b.cross};return("function"==typeof o[a]?o[a]:o.circle)(t,n,r)},O=function(e){return e=function(e){var t=l.a.evaluateProp(e.ariaLabel,e),n=l.a.evaluateProp(e.desc,e),r=l.a.evaluateProp(e.id,e),a=l.a.evaluateProp(e.size,e),o=l.a.evaluateStyle(e.style,e),i=l.a.evaluateProp(e.symbol,e),c=l.a.evaluateProp(e.tabIndex,e);return y()({},e,{ariaLabel:t,desc:n,id:r,size:a,style:o,symbol:i,tabIndex:c})}(e),i.a.cloneElement(e.pathComponent,h({},e.events,{"aria-label":e.ariaLabel,d:x(e),style:e.style,desc:e.desc,tabIndex:e.tabIndex,role:e.role,shapeRendering:e.shapeRendering,className:e.className,transform:e.transform,clipPath:e.clipPath}))};O.propTypes=h({},u.a.primitiveProps,{datum:a.a.object,getPath:a.a.func,pathComponent:a.a.element,size:a.a.oneOfType([a.a.number,a.a.func]),symbol:a.a.oneOfType([a.a.oneOf(["circle","cross","diamond","plus","minus","square","star","triangleDown","triangleUp"]),a.a.func]),x:a.a.number,y:a.a.number}),O.defaultProps={pathComponent:i.a.createElement(g.a,null),role:"presentation",shapeRendering:"auto"};var P=O,w=n(4611),j=n(4612),T=n(4129),C=n(2831),S=n(4609),E=n(580),L=n.n(E),z=n(1058),A=n.n(z),M=n(1496),D=n(2071);function N(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var k=function(e,t){return t.bubbleProperty?"circle":e.symbol||t.symbol},R=function(e,t){var n=t.size,r=t.z;return e.size?"function"==typeof e.size?e.size:Math.max(e.size,1):"function"==typeof t.size?n:e[r]?function(e,t){var n,r=t.data,a=t.z,o=t.maxBubbleSize,i=t.minBubbleSize,c=r.map((function(e){return e[a]})),u=Math.min.apply(Math,N(c)),s=Math.max.apply(Math,N(c)),p=o||(n=Math.min.apply(Math,N(A()(l.a.getPadding(t)))),Math.max(n,5)),f=i||.1*p;if(s===u)return Math.max(f,1);var y=Math.PI*Math.pow(p,2),d=Math.PI*Math.pow(f,2),m=(e[a]-u)/(s-u)*y,b=Math.max(m,d),g=Math.sqrt(b/Math.PI);return Math.max(g,1)}(e,t):Math.max(n||0,1)},_=function(e,t){var n=l.a.modifyProps(e,t,"scatter"),r=e=y()({},n,function(e){var t=l.a.getDefaultStyles(e,"scatter"),n=l.a.getStyles(e.style,t),r=C.a.getData(e),a={x:l.a.getRange(e,"x"),y:l.a.getRange(e,"y")},o={x:T.a.getDomain(e,"x"),y:T.a.getDomain(e,"y")};return{domain:o,data:r,scale:{x:M.a.getBaseScale(e,"x").domain(o.x).range(e.horizontal?a.y:a.x),y:M.a.getBaseScale(e,"y").domain(o.y).range(e.horizontal?a.x:a.y)},style:n,origin:e.polar?e.origin||l.a.getPolarOrigin(e):void 0,z:e.bubbleProperty||"z"}}(n)),a=r.data,o=r.domain,i=r.events,c=r.height,u=r.origin,s=r.padding,p=r.polar,f=r.scale,d=r.name,m=r.sharedEvents,b=r.standalone,g=r.style,h=r.theme,v=r.width,x=r.labels,O=r.horizontal,P={parent:{style:g.parent,scale:f,domain:o,data:a,height:c,width:v,standalone:b,theme:h,origin:u,polar:p,padding:s,name:d,horizontal:O}};return a.reduce((function(t,n,r){var o=L()(n.eventKey)?r:n.eventKey,c=l.a.scalePoint(e,n),s={x:c.x,y:c.y,datum:n,data:a,index:r,scale:f,polar:p,origin:u,horizontal:O,size:R(n,e),symbol:k(n,e),style:g.data};t[o]={data:s};var y=D.a.getText(e,n,r);return(null!=y||x&&(i||m))&&(t[o].labels=D.a.getProps(e,r)),t}),P)};function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var X={width:450,height:300,padding:50,size:3,symbol:"circle"},Y=function(e){function t(){return I(this,t),V(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n=t,(r=[{key:"shouldAnimate",value:function(){return!!this.props.animate}},{key:"render",value:function(){var e=t.animationWhitelist,n=t.role,r=l.a.modifyProps(this.props,X,n);if(this.shouldAnimate())return this.animateComponent(r,e);var a=this.renderData(r);return r.standalone?this.renderContainer(r.containerComponent,a):a}}])&&B(n.prototype,r),a&&B(n,a),t}(i.a.Component);Object.defineProperty(Y,"animationWhitelist",{configurable:!0,enumerable:!0,writable:!0,value:["data","domain","height","maxBubbleSize","padding","samples","size","style","width"]}),Object.defineProperty(Y,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"VictoryScatter"}),Object.defineProperty(Y,"role",{configurable:!0,enumerable:!0,writable:!0,value:"scatter"}),Object.defineProperty(Y,"defaultTransitions",{configurable:!0,enumerable:!0,writable:!0,value:c.a.discreteTransitions()}),Object.defineProperty(Y,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){W(e,t,n[t])}))}return e}({},u.a.baseProps,u.a.dataProps,{bubbleProperty:a.a.string,maxBubbleSize:s.a.nonNegative,minBubbleSize:s.a.nonNegative,size:a.a.oneOfType([s.a.nonNegative,a.a.func]),symbol:a.a.oneOfType([a.a.oneOf(["circle","cross","diamond","plus","minus","square","star","triangleDown","triangleUp"]),a.a.func])})}),Object.defineProperty(Y,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{containerComponent:i.a.createElement(p.a,null),dataComponent:i.a.createElement(P,null),labelComponent:i.a.createElement(w.a,null),groupComponent:i.a.createElement("g",null),samples:50,sortOrder:"ascending",standalone:!0,theme:j.a.grayscale}}),Object.defineProperty(Y,"getDomain",{configurable:!0,enumerable:!0,writable:!0,value:T.a.getDomain}),Object.defineProperty(Y,"getData",{configurable:!0,enumerable:!0,writable:!0,value:C.a.getData}),Object.defineProperty(Y,"getBaseProps",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return _(e,X)}}),Object.defineProperty(Y,"expectedComponents",{configurable:!0,enumerable:!0,writable:!0,value:["dataComponent","labelComponent","groupComponent","containerComponent"]});t.a=Object(S.a)(Y)},4613:function(e,t,n){"use strict";var r=n(404),a=n.n(r),o=n(0),i=n.n(o),l=n(571),c=n(4130),u=n(1283),s=n(772),p=n(4615),f=n(4611),y=n(4612),d=n(4609),m=n(456),b=n.n(m),g=n(4840);function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(e,t,n){var r="right"===n||"left"===n;return i.a.cloneElement(e.lineComponent,h({},e.events,{role:e.role,shapeRendering:e.shapeRendering,className:e.className,style:e.style,transform:e.transform,key:"".concat(e.id,"-border-").concat(n),x1:r?t[n]:e.x-e.borderWidth,x2:r?t[n]:e.x+e.borderWidth,y1:r?e.y-e.borderWidth:t[n],y2:r?e.y+e.borderWidth:t[n]}))},O=function(e,t,n){var r="top"===n||"bottom"===n;return i.a.cloneElement(e.lineComponent,h({},e.events,{role:e.role,shapeRendering:e.shapeRendering,className:e.className,style:e.style,transform:e.transform,key:"".concat(e.id,"-cross-").concat(n),x1:e.x,x2:r?e.x:t[n],y1:e.y,y2:r?t[n]:e.y}))},P=function(e){var t=e.errorX,n=e.errorY,r={right:{error:t,errorIndex:0},left:{error:t,errorIndex:1},top:{error:n,errorIndex:1},bottom:{error:n,errorIndex:0}};return["right","left","top","bottom"].reduce((function(e,t){var n,a,o;return e[t]=(a=(n=r[t]).error,o=n.errorIndex,a?a[o]:void 0),e}),{})},w=function(e){var t=e=function(e){var t=l.a.evaluateProp(e.ariaLabel,e),n=l.a.evaluateProp(e.id,e),r=l.a.evaluateStyle(b()({stroke:"black"},e.style),e),a=l.a.evaluateProp(e.tabIndex,e);return b()({},e,{ariaLabel:t,id:n,style:r,tabIndex:a})}(e),n=t.ariaLabel,r=t.tabIndex,a=P(e),o=[a.right?x(e,a,"right"):null,a.left?x(e,a,"left"):null,a.bottom?x(e,a,"bottom"):null,a.top?x(e,a,"top"):null,a.right?O(e,a,"right"):null,a.left?O(e,a,"left"):null,a.bottom?O(e,a,"bottom"):null,a.top?O(e,a,"top"):null].filter(Boolean);return i.a.cloneElement(e.groupComponent,{"aria-label":n,tabIndex:r},o)};w.propTypes=h({},u.a.primitiveProps,{borderWidth:a.a.number,datum:a.a.object,errorX:a.a.oneOfType([a.a.number,a.a.array,a.a.bool]),errorY:a.a.oneOfType([a.a.number,a.a.array,a.a.bool]),groupComponent:a.a.element,lineComponent:a.a.element,x:a.a.number,y:a.a.number}),w.defaultProps={groupComponent:i.a.createElement("g",null),lineComponent:i.a.createElement(g.a,null),role:"presentation",shapeRendering:"auto"};var j=w,T=n(580),C=n.n(T),S=n(517),E=n.n(S),L=n(2831),z=n(4129),A=n(1496),M=n(2071),D=function(e,t,n){var r=t[{x:"_errorX",y:"_errorY"}[n]];if(0===r)return!1;var a=e.scale[n];return Array.isArray(r)?[0!==r[0]&&a(r[0]+t["_".concat(n)]),0!==r[1]&&a(t["_".concat(n)]-r[1])]:[a(r+t["_".concat(n)]),a(t["_".concat(n)]-r)]},N=function(e){var t=["x","y","errorX","errorY"];if(e.data)return L.a.formatData(e.data,e,t);var n=e.errorX||e.errorY?L.a.generateData(e):[];return L.a.formatData(n,e,t)},k=function(e,t){var n=z.a.getMinFromProps(e,t),r=z.a.getMaxFromProps(e,t),a=N(e);if(a.length<1)return void 0!==n&&void 0!==r?z.a.getDomainFromMinMax(n,r):void 0;var o="x"===t?"_errorX":"_errorY",i=function(e){var n="min"===e?1/0:-1/0,r="min"===e?1:0,i="min"===e?-1:1;return a.reduce((function(n,a){var l=Array.isArray(a[o])?a[o][r]:a[o],c=a["_".concat(t)]+i*(l||0);return n<c&&"min"===e||n>c&&"max"===e?n:c}),n)},l=void 0!==n?n:i("min"),c=void 0!==r?r:i("max");return z.a.getDomainFromMinMax(l,c)},R=function(e,t){return z.a.createDomainFunction(k)(e,t)},_=function(e,t){var n=l.a.modifyProps(e,t,"errorbar"),r=e=b()({},n,function(e){var t=l.a.getDefaultStyles(e,"errorbar"),n=l.a.getStyles(e.style,t)||{},r=N(e),a={x:l.a.getRange(e,"x"),y:l.a.getRange(e,"y")},o={x:R(e,"x"),y:R(e,"y")};return{domain:o,data:r,scale:{x:A.a.getBaseScale(e,"x").domain(o.x).range(e.horizontal?a.y:a.x),y:A.a.getBaseScale(e,"y").domain(o.y).range(e.horizontal?a.x:a.y)},style:n,origin:e.polar?e.origin||l.a.getPolarOrigin(e):void 0}}(n)),a=r.borderWidth,o=r.data,i=r.domain,c=r.events,u=r.groupComponent,s=r.height,p=r.horizontal,f=r.labels,y=r.name,d=r.origin,m=r.padding,g=r.polar,h=r.scale,v=r.sharedEvents,x=r.standalone,O=r.style,P=r.theme,w=r.width,j={parent:{data:o,domain:i,height:s,horizontal:p,name:y,origin:d,padding:m,polar:g,scale:h,standalone:x,style:O.parent,theme:P,width:w}};return o.reduce((function(t,n,r){var i=C()(n.eventKey)?r:n.eventKey,s=l.a.scalePoint(b()({},e,{scale:h}),n),y=s.x,d=s.y,m=D(e,n,"x"),g=D(e,n,"y"),x={borderWidth:a,data:o,datum:n,errorX:p?g:m,errorY:p?m:g,groupComponent:u,horizontal:p,index:r,scale:h,style:O.data,x:y,y:d};t[i]={data:x};var P=M.a.getText(e,n,r);return(null!=P||f&&(c||v))&&(t[i].labels=function(e,t,n){var r=e.x,a=e.y,o=e.index,i=e.scale,c=e.errorY,u=e.errorX,s=e.horizontal,p=e.labelComponent,f=e.theme,y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"x",n="y"===t?c:u;return(n&&Array.isArray(n)?n[0]:n)||e[t]},d=n.labels||{},m=d.padding||0,b=s?"start":"middle",g=s?"middle":"end",h={style:d,y:s?a:y("y"),x:s?y("x"):r,dy:s?0:-m,dx:s?m:0,text:t,index:o,scale:i,datum:e.datum,data:e.data,textAnchor:d.textAnchor||b,verticalAnchor:d.verticalAnchor||g,angle:d.angle,horizontal:s};if(!l.a.isTooltip(p))return h;var v=f&&f.tooltip||{};return E()({},h,l.a.omit(v,["style"]))}(b()({},e,x),P,O)),t}),j)};function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var X={width:450,height:300,padding:50},Y=function(e){function t(){return I(this,t),V(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n=t,(r=[{key:"shouldAnimate",value:function(){return!!this.props.animate}},{key:"render",value:function(){var e=t.animationWhitelist,n=t.role,r=l.a.modifyProps(this.props,X,n);if(this.shouldAnimate())return this.animateComponent(r,e);var a=this.renderData(r);return r.standalone?this.renderContainer(r.containerComponent,a):a}}])&&B(n.prototype,r),a&&B(n,a),t}(i.a.Component);Object.defineProperty(Y,"animationWhitelist",{configurable:!0,enumerable:!0,writable:!0,value:["data","domain","height","padding","samples","style","width","errorX","errorY","borderWidth"]}),Object.defineProperty(Y,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"VictoryErrorBar"}),Object.defineProperty(Y,"role",{configurable:!0,enumerable:!0,writable:!0,value:"errorbar"}),Object.defineProperty(Y,"defaultTransitions",{configurable:!0,enumerable:!0,writable:!0,value:c.a.discreteTransitions()}),Object.defineProperty(Y,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){W(e,t,n[t])}))}return e}({},u.a.baseProps,u.a.dataProps,{borderWidth:a.a.number,errorX:a.a.oneOfType([a.a.func,s.a.allOfType([s.a.integer,s.a.nonNegative]),a.a.string,a.a.arrayOf(a.a.string)]),errorY:a.a.oneOfType([a.a.func,s.a.allOfType([s.a.integer,s.a.nonNegative]),a.a.string,a.a.arrayOf(a.a.string)]),horizontal:a.a.bool})}),Object.defineProperty(Y,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{containerComponent:i.a.createElement(p.a,null),data:[{x:1,y:1,errorX:.1,errorY:.1},{x:2,y:2,errorX:.2,errorY:.2},{x:3,y:3,errorX:.3,errorY:.3},{x:4,y:4,errorX:.4,errorY:.4}],dataComponent:i.a.createElement(j,null),labelComponent:i.a.createElement(f.a,null),groupComponent:i.a.createElement("g",{role:"presentation"}),samples:50,sortOrder:"ascending",standalone:!0,theme:y.a.grayscale}}),Object.defineProperty(Y,"getDomain",{configurable:!0,enumerable:!0,writable:!0,value:R}),Object.defineProperty(Y,"getData",{configurable:!0,enumerable:!0,writable:!0,value:N}),Object.defineProperty(Y,"getBaseProps",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return _(e,X)}}),Object.defineProperty(Y,"expectedComponents",{configurable:!0,enumerable:!0,writable:!0,value:["dataComponent","labelComponent","groupComponent","containerComponent"]});t.a=Object(d.a)(Y)},6339:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var r=n(982),a=n.n(r),o=n(632),i=n.n(o),l=n(1056),c=n.n(l),u=n(517),s=n.n(u),p=n(456),f=n.n(p),y=n(0),d=n.n(y),m=n(404),b=n.n(m),g=n(2071),h=n(4612),v=n(571),x=n(2072),O=n(2073),P=n(772),w=n(4611),j=n(1283),T=n(1516);function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){S(e,t,n[t])}))}return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(e){var t=e.orientation||"top";return"left"===t||"right"===t?function(e){var t=e.pointerWidth,n=e.cornerRadius,r=e.orientation,a=e.width,o=e.height,l=e.center,c="left"===r?1:-1,u=e.x+(e.dx||0),s=e.y+(e.dy||0),p=i()(l)&&l.x,f=i()(l)&&l.y,y=p-c*(a/2),d=p+c*(a/2),m=f+o/2,b=f-o/2,g=c*(u-y)>0?0:e.pointerLength,h="left"===r?"0 0 0":"0 0 1",v="".concat(n," ").concat(n," ").concat(h);return"M ".concat(y,", ").concat(f-t/2,"\n    L ").concat(g?u:y,", ").concat(g?s:f+t/2,"\n    L ").concat(y,", ").concat(f+t/2,"\n    L ").concat(y,", ").concat(m-n,"\n    A ").concat(v," ").concat(y+c*n,", ").concat(m,"\n    L ").concat(d-c*n,", ").concat(m,"\n    A ").concat(v," ").concat(d,", ").concat(m-n,"\n    L ").concat(d,", ").concat(b+n,"\n    A ").concat(v," ").concat(d-c*n,", ").concat(b,"\n    L ").concat(y+c*n,", ").concat(b,"\n    A ").concat(v," ").concat(y,", ").concat(b+n,"\n    z")}(e):function(e){var t=e.pointerWidth,n=e.cornerRadius,r=e.orientation,a=e.width,o=e.height,l=e.center,c="bottom"===r?1:-1,u=e.x+(e.dx||0),s=e.y+(e.dy||0),p=i()(l)&&l.x,f=i()(l)&&l.y,y=f+c*(o/2),d=f-c*(o/2),m=p+a/2,b=p-a/2,g=c*(s-y)<0?0:e.pointerLength,h="bottom"===r?"0 0 0":"0 0 1",v="".concat(n," ").concat(n," ").concat(h);return"M ".concat(p-t/2,", ").concat(y,"\n    L ").concat(g?u:p+t/2,", ").concat(g?s:y,"\n    L ").concat(p+t/2,", ").concat(y,"\n    L ").concat(m-n,", ").concat(y,"\n    A ").concat(v," ").concat(m,", ").concat(y-c*n,"\n    L ").concat(m,", ").concat(d+c*n,"\n    A ").concat(v," ").concat(m-n,", ").concat(d,"\n    L ").concat(b+n,", ").concat(d,"\n    A ").concat(v," ").concat(b,", ").concat(d+c*n,"\n    L ").concat(b,", ").concat(y-c*n,"\n    A ").concat(v," ").concat(b+n,", ").concat(y,"\n    z")}(e)},L=function(e){return e=function(e){var t=v.a.evaluateProp(e.id,e),n=v.a.evaluateStyle(e.style,e);return f()({},e,{id:t,style:n})}(e),d.a.cloneElement(e.pathComponent,C({},e.events,{style:e.style,d:E(e),className:e.className,shapeRendering:e.shapeRendering,role:e.role,transform:e.transform,clipPath:e.clipPath}))};L.propTypes=C({},j.a.primitiveProps,{center:b.a.shape({x:b.a.number,y:b.a.number}),cornerRadius:b.a.number,datum:b.a.object,dx:b.a.number,dy:b.a.number,height:b.a.number,orientation:b.a.oneOf(["top","bottom","left","right"]),pathComponent:b.a.element,pointerLength:b.a.number,pointerWidth:b.a.number,width:b.a.number,x:b.a.number,y:b.a.number}),L.defaultProps={pathComponent:d.a.createElement(T.a,null),role:"presentation",shapeRendering:"auto"};var z=L;function A(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var N={cornerRadius:5,pointerLength:10,pointerWidth:10},k=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=D(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).id=void 0===e.id?c()("tooltip-"):e.id,n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n=t,(r=[{key:"getDefaultOrientation",value:function(e){var t=e.datum,n=e.horizontal;if(e.polar)return this.getPolarOrientation(e,t);var r=n?"right":"top",a=n?"left":"bottom";return t&&t.y<0?a:r}},{key:"getPolarOrientation",value:function(e,t){var n=g.a.getDegrees(e,t),r=e.labelPlacement||"vertical";return" vertical"===r?this.getVerticalOrientations(n):"parallel"===r?n<90||n>270?"right":"left":n>180?"bottom":"top"}},{key:"getVerticalOrientations",value:function(e){return e<45||e>315?"right":e>=45&&e<=135?"top":e>135&&e<225?"left":"bottom"}},{key:"getStyles",value:function(e){var t=e.theme||h.a.grayscale,n=t&&t.tooltip&&t.tooltip.style?t.tooltip.style:{},r=Array.isArray(e.style)?e.style.map((function(e){return s()({},e,n)})):s()({},e.style,n),a=t&&t.tooltip&&t.tooltip.flyoutStyle?t.tooltip.flyoutStyle:{},o=e.flyoutStyle?s()({},e.flyoutStyle,a):a,i=Array.isArray(r)?r.map((function(t){return v.a.evaluateStyle(t,e)})):v.a.evaluateStyle(r,e);return{style:i,flyoutStyle:v.a.evaluateStyle(o,f()({},e,{style:i}))}}},{key:"getEvaluatedProps",value:function(e){var t=e.cornerRadius,n=e.centerOffset,r=e.dx,a=e.dy,o=v.a.evaluateProp(e.active,e),l=v.a.evaluateProp(e.text,f()({},e,{active:o})),c=this.getStyles(f()({},e,{active:o,text:l})),u=c.style,s=c.flyoutStyle,p=v.a.evaluateProp(e.orientation,f()({},e,{active:o,text:l,style:u,flyoutStyle:s}))||this.getDefaultOrientation(e),y=v.a.evaluateProp(e.flyoutPadding,f()({},e,{active:o,text:l,style:u,flyoutStyle:s,orientation:p}))||this.getLabelPadding(u),d=v.a.getPadding({padding:y}),m=v.a.evaluateProp(e.pointerWidth,f()({},e,{active:o,text:l,style:u,flyoutStyle:s,orientation:p})),b=v.a.evaluateProp(e.pointerLength,f()({},e,{active:o,text:l,style:u,flyoutStyle:s,orientation:p})),g=x.a.approximateTextSize(l,u),h=this.getDimensions(f()({},e,{style:u,flyoutStyle:s,active:o,text:l,orientation:p,flyoutPadding:d,pointerWidth:m,pointerLength:b}),g),O=h.flyoutHeight,P=h.flyoutWidth,w=f()({},e,{active:o,text:l,style:u,flyoutStyle:s,orientation:p,flyoutHeight:O,flyoutWidth:P,flyoutPadding:d,pointerWidth:m,pointerLength:b}),j=i()(n)&&void 0!==n.x?v.a.evaluateProp(n.x,w):0,T=i()(n)&&void 0!==n.y?v.a.evaluateProp(n.y,w):0;return f()({},w,{centerOffset:{x:j,y:T},dx:void 0!==r?v.a.evaluateProp(r,w):0,dy:void 0!==a?v.a.evaluateProp(a,w):0,cornerRadius:v.a.evaluateProp(t,w)})}},{key:"getCalculatedValues",value:function(e){var t=e.style,n=e.text,r=e.flyoutStyle,a={height:e.flyoutHeight,width:e.flyoutWidth};return{style:t,flyoutStyle:r,labelSize:x.a.approximateTextSize(n,t),flyoutDimensions:a,flyoutCenter:this.getFlyoutCenter(e,a),transform:this.getTransform(e)}}},{key:"getTransform",value:function(e){var t=e.x,n=e.y,r=(e.style||{}).angle||e.angle||this.getDefaultAngle(e);return r?"rotate(".concat(r," ").concat(t," ").concat(n,")"):void 0}},{key:"getDefaultAngle",value:function(e){var t=e.polar,n=e.labelPlacement,r=e.orientation,a=e.datum;if(!t||!n||"vertical"===n)return 0;var o,i=g.a.getDegrees(e,a);return 0===i||180===i?o="top"===r&&180===i?270:90:i>0&&i<180?o=90-i:i>180&&i<360&&(o=270-i),o+(i>90&&i<180||i>270?1:-1)*("perpendicular"===n?0:90)}},{key:"constrainTooltip",value:function(e,t,n){var r=e.x,a=e.y,o=n.width,i=n.height,l=[0,t.width],c=[0,t.height],u=[r-o/2,r+o/2],s=[a-i/2,a+i/2],p=[u[0]<l[0]?l[0]-u[0]:0,u[1]>l[1]?u[1]-l[1]:0],f=[s[0]<c[0]?c[0]-s[0]:0,s[1]>c[1]?s[1]-c[1]:0];return{x:Math.round(r+p[0]-p[1]),y:Math.round(a+f[0]-f[1])}}},{key:"getFlyoutCenter",value:function(e,t){var n=e.x,r=e.y,a=e.dx,o=e.dy,l=e.pointerLength,c=e.orientation,u=e.constrainToVisibleArea,s=e.centerOffset,p=t.height,f=t.width,y="left"===c?-1:1,d="bottom"===c?-1:1,m={x:"left"===c||"right"===c?n+y*(l+f/2+y*a):n+a,y:"top"===c||"bottom"===c?r-d*(l+p/2-d*o):r+o},b=i()(e.center)&&void 0!==e.center.x?e.center.x:m.x,g=i()(e.center)&&void 0!==e.center.y?e.center.y:m.y,h={x:b+s.x,y:g+s.y};return u?this.constrainTooltip(h,e,t):h}},{key:"getLabelPadding",value:function(e){if(!e)return 0;var t=Array.isArray(e)?e.map((function(e){return e.padding})):[e.padding];return Math.max.apply(Math,A(t).concat([0]))}},{key:"getDimensions",value:function(e,t){var n,r,a,o,i=e.orientation,l=e.pointerLength,c=e.pointerWidth,u=e.flyoutHeight,s=e.flyoutWidth,p=e.flyoutPadding,f=v.a.evaluateProp(e.cornerRadius,e);return{flyoutHeight:u?v.a.evaluateProp(u,e):(a=t.height+p.top+p.bottom,o="top"===i||"bottom"===i?2*f:2*f+c,Math.max(o,a)),flyoutWidth:s?v.a.evaluateProp(s,e):(n=t.width+p.left+p.right,r="left"===i||"right"===i?2*f+l:2*f,Math.max(r,n))}}},{key:"getLabelProps",value:function(e,t){var n=t.flyoutCenter,r=t.style,a=t.labelSize,o=t.dy,i=void 0===o?0:o,l=t.dx,c=void 0===l?0:l,u=e.text,p=e.datum,f=e.activePoints,y=e.labelComponent,d=e.index,m=e.flyoutPadding,b=(Array.isArray(r)&&r.length?r[0].textAnchor:r.textAnchor)||"middle";return s()({},y.props,{key:"".concat(this.id,"-label-").concat(d),text:u,datum:p,activePoints:f,textAnchor:b,dy:i,dx:c,style:r,x:function(){if(!b||"middle"===b)return n.x;var e="end"===b?-1:1;return n.x-e*(a.width/2)}()+(m.left-m.right)/2,y:n.y+(m.top-m.bottom)/2,verticalAnchor:"middle",angle:r.angle})}},{key:"getPointerOrientation",value:function(e,t,n){var r=t.y+n.height/2,o=t.y-n.height/2,i=t.x-n.width/2,l=t.x+n.width/2,c=[{side:"top",val:o>e.y?o-e.y:-1},{side:"bottom",val:r<e.y?e.y-r:-1},{side:"right",val:l<e.x?e.x-l:-1},{side:"left",val:i>e.x?i-e.x:-1}];return a()(c,"val","desc")[0].side}},{key:"getFlyoutProps",value:function(e,t){var n=t.flyoutDimensions,r=t.flyoutStyle,a=t.flyoutCenter,o=e.x,i=e.y,l=e.dx,c=e.dy,u=e.datum,p=e.activePoints,f=e.index,y=e.pointerLength,d=e.pointerWidth,m=e.cornerRadius,b=e.events,g=e.flyoutComponent,h=v.a.evaluateProp(e.pointerOrientation,e);return s()({},g.props,{x:o,y:i,dx:l,dy:c,datum:u,activePoints:p,index:f,pointerLength:y,pointerWidth:d,cornerRadius:m,events:b,orientation:h||this.getPointerOrientation({x:o,y:i},a,n),key:"".concat(this.id,"-tooltip-").concat(f),width:n.width,height:n.height,style:r,center:a})}},{key:"renderTooltip",value:function(e){var t=this.getEvaluatedProps(e),n=t.flyoutComponent,r=t.labelComponent,a=t.groupComponent,o=t.active,i=t.renderInPortal;if(!o)return i?d.a.createElement(O.a,null,null):null;var l=this.getCalculatedValues(t),c=[d.a.cloneElement(n,this.getFlyoutProps(t,l)),d.a.cloneElement(r,this.getLabelProps(t,l))],u=d.a.cloneElement(a,{role:"presentation",transform:l.transform},c);return i?d.a.createElement(O.a,null,u):u}},{key:"render",value:function(){var e=v.a.modifyProps(this.props,N,"tooltip");return this.renderTooltip(e)}}])&&M(n.prototype,r),o&&M(n,o),t}(d.a.Component);Object.defineProperty(k,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"VictoryTooltip"}),Object.defineProperty(k,"role",{configurable:!0,enumerable:!0,writable:!0,value:"tooltip"}),Object.defineProperty(k,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{activateData:b.a.bool,active:b.a.oneOfType([b.a.bool,b.a.func]),activePoints:b.a.array,angle:b.a.number,center:b.a.shape({x:P.a.nonNegative,y:P.a.nonNegative}),centerOffset:b.a.shape({x:b.a.oneOfType([b.a.number,b.a.func]),y:b.a.oneOfType([b.a.number,b.a.func])}),constrainToVisibleArea:b.a.bool,cornerRadius:b.a.oneOfType([P.a.nonNegative,b.a.func]),data:b.a.array,datum:b.a.object,dx:b.a.oneOfType([b.a.number,b.a.func]),dy:b.a.oneOfType([b.a.number,b.a.func]),events:b.a.object,flyoutComponent:b.a.element,flyoutHeight:b.a.oneOfType([P.a.nonNegative,b.a.func]),flyoutPadding:b.a.oneOfType([b.a.func,b.a.number,b.a.shape({top:b.a.number,bottom:b.a.number,left:b.a.number,right:b.a.number})]),flyoutStyle:b.a.object,flyoutWidth:b.a.oneOfType([P.a.nonNegative,b.a.func]),groupComponent:b.a.element,height:b.a.number,horizontal:b.a.bool,id:b.a.oneOfType([b.a.number,b.a.string]),index:b.a.oneOfType([b.a.number,b.a.string]),labelComponent:b.a.element,orientation:b.a.oneOfType([b.a.oneOf(["top","bottom","left","right"]),b.a.func]),pointerLength:b.a.oneOfType([P.a.nonNegative,b.a.func]),pointerOrientation:b.a.oneOfType([b.a.oneOf(["top","bottom","left","right"]),b.a.func]),pointerWidth:b.a.oneOfType([P.a.nonNegative,b.a.func]),polar:b.a.bool,renderInPortal:b.a.bool,scale:b.a.shape({x:P.a.scale,y:P.a.scale}),style:b.a.oneOfType([b.a.object,b.a.array]),text:b.a.oneOfType([b.a.string,b.a.number,b.a.func,b.a.array]),theme:b.a.object,width:b.a.number,x:b.a.number,y:b.a.number}}),Object.defineProperty(k,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{active:!1,renderInPortal:!0,labelComponent:d.a.createElement(w.a,null),flyoutComponent:d.a.createElement(z,null),groupComponent:d.a.createElement("g",null)}}),Object.defineProperty(k,"defaultEvents",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.activateData?[{target:"labels",mutation:function(){return{active:!0}}},{target:"data",mutation:function(){return{active:!0}}}]:[{target:"labels",mutation:function(){return{active:!0}}}],n=e.activateData?[{target:"labels",mutation:function(){return{active:void 0}}},{target:"data",mutation:function(){return{active:void 0}}}]:[{target:"labels",mutation:function(){return{active:void 0}}}];return[{target:"data",eventHandlers:{onMouseOver:function(){return t},onFocus:function(){return t},onTouchStart:function(){return t},onMouseOut:function(){return n},onBlur:function(){return n},onTouchEnd:function(){return n}}}]}})}}]);