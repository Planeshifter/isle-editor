/*! For license information please see LearnMeanVSMedian.f53de373.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[581],{1475:function(t,e,n){var r=n(1476),a=n(530);t.exports=function(t,e,n){var o=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return a(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),r(t,e,{leading:o,maxWait:e,trailing:i})}},1476:function(t,e,n){var r=n(530),a=n(2724),o=n(1291),i=Math.max,u=Math.min;t.exports=function(t,e,n){var s,c,l,f,p,v,d=0,m=!1,y=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=s,r=c;return s=c=void 0,d=e,f=t.apply(r,n)}function b(t){return d=t,p=setTimeout(M,e),m?g(t):f}function x(t){var n=t-v;return void 0===v||n>=e||n<0||y&&t-d>=l}function M(){var t=a();if(x(t))return w(t);p=setTimeout(M,function(t){var n=e-(t-v);return y?u(n,l-(t-d)):n}(t))}function w(t){return p=void 0,h&&s?g(t):(s=c=void 0,f)}function N(){var t=a(),n=x(t);if(s=arguments,c=this,v=t,n){if(void 0===p)return b(v);if(y)return clearTimeout(p),p=setTimeout(M,e),g(v)}return void 0===p&&(p=setTimeout(M,e)),f}return e=o(e)||0,r(n)&&(m=!!n.leading,l=(y="maxWait"in n)?i(o(n.maxWait)||0,e):l,h="trailing"in n?!!n.trailing:h),N.cancel=function(){void 0!==p&&clearTimeout(p),d=0,s=v=c=p=void 0},N.flush=function(){return void 0===p?f:w(a())},N}},2724:function(t,e,n){var r=n(578);t.exports=function(){return r.Date.now()}},3840:function(t,e,n){"use strict";var r=n(3841);t.exports=r},3841:function(t,e,n){"use strict";t.exports=function(){var t,e;return t=0,e=0,function(n){if(0===arguments.length)return 0===e?null:t;return t+=(n-t)/(e+=1)}}},4219:function(t,e,n){"use strict";var r=n(423),a=n(4988);r(a,"factory",n(4989)),t.exports=a},4220:function(t,e,n){"use strict";var r=n(4992);t.exports=r},4221:function(t,e,n){"use strict";var r=n(4993);t.exports=r},4222:function(t,e,n){"use strict";var r=n(4994);t.exports=r},4223:function(t,e,n){"use strict";var r=n(4995);t.exports=r},4224:function(t,e,n){"use strict";var r=n(4996);t.exports=r},4225:function(t,e,n){"use strict";var r=n(4997);t.exports=r},4226:function(t,e,n){"use strict";var r=n(4998);t.exports=r},4227:function(t,e,n){"use strict";var r=n(4999);t.exports=r},4228:function(t,e,n){"use strict";var r=n(423),a=n(5e3);r(a,"factory",n(5001)),t.exports=a},4229:function(t,e,n){"use strict";var r=n(423),a=n(5002);r(a,"factory",n(5003)),t.exports=a},4230:function(t,e,n){"use strict";var r=n(423),a=n(5004);r(a,"factory",n(5005)),t.exports=a},424:function(t,e,n){"use strict";var r=n(405),a=n(408),o=n(409),i=n.n(o),u=n(0),s=n.n(u),c=n(411),l=n(464),f=s.a.forwardRef((function(t,e){var n=t.bsPrefix,o=t.variant,u=t.size,f=t.active,p=t.className,v=t.block,d=t.type,m=t.as,y=Object(a.a)(t,["bsPrefix","variant","size","active","className","block","type","as"]),h=Object(c.a)(n,"btn"),g=i()(p,h,f&&"active",o&&h+"-"+o,v&&h+"-block",u&&h+"-"+u);if(y.href)return s.a.createElement(l.a,Object(r.a)({},y,{as:m,ref:e,className:i()(g,y.disabled&&"disabled")}));e&&(y.ref=e),d?y.type=d:m||(y.type="button");var b=m||"button";return s.a.createElement(b,Object(r.a)({},y,{className:g}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1},e.a=f},4987:function(t,e,n){"use strict";var r=n(601),a={};r(a,"cdf",n(4219)),r(a,"LogNormal",n(4990)),r(a,"entropy",n(4220)),r(a,"kurtosis",n(4221)),r(a,"logpdf",n(4228)),r(a,"mean",n(4222)),r(a,"median",n(4223)),r(a,"mode",n(4224)),r(a,"pdf",n(4229)),r(a,"quantile",n(4230)),r(a,"skewness",n(4225)),r(a,"stdev",n(4226)),r(a,"variance",n(4227)),t.exports=a},4988:function(t,e,n){"use strict";var r=n(697),a=n(420),o=n(451);t.exports=function(t,e,n){return a(t)||a(e)||a(n)||n<=0?NaN:t<=0?0:r(o(t),e,n)}},4989:function(t,e,n){"use strict";var r=n(469),a=n(697),o=n(420),i=n(451);t.exports=function(t,e){return o(t)||o(e)||e<=0?r(NaN):function(n){if(o(n))return NaN;if(n<=0)return 0;return a(i(n),t,e)}}},4990:function(t,e,n){"use strict";var r=n(4991);t.exports=r},4991:function(t,e,n){"use strict";var r=n(690),a=n(423),o=n(575),i=n(703).isPrimitive,u=n(430).isPrimitive,s=n(455),c=n(4220),l=n(4221),f=n(4222),p=n(4223),v=n(4224),d=n(4225),m=n(4226),y=n(4227),h=n(4219),g=n(4228),b=n(4229),x=n(4230);function M(){var t,e;if(!(this instanceof M))return 0===arguments.length?new M:new M(arguments[0],arguments[1]);if(arguments.length){if(t=arguments[1],!u(e=arguments[0])||s(e))throw new TypeError("invalid argument. Location parameter `mu` must be a number primitive. Value: `"+e+"`");if(!i(t))throw new TypeError("invalid argument. Scale parameter `sigma` must be a positive number. Value: `"+t+"`")}else e=0,t=1;return r(this,"mu",{configurable:!1,enumerable:!0,get:function(){return e},set:function(t){if(!u(t)||s(t))throw new TypeError("invalid value. Must be a number primitive. Value: `"+t+"`");e=t}}),r(this,"sigma",{configurable:!1,enumerable:!0,get:function(){return t},set:function(e){if(!i(e))throw new TypeError("invalid value. Must be a positive number. Value: `"+e+"`");t=e}}),this}o(M.prototype,"entropy",(function(){return c(this.mu,this.sigma)})),o(M.prototype,"kurtosis",(function(){return l(this.mu,this.sigma)})),o(M.prototype,"mean",(function(){return f(this.mu,this.sigma)})),o(M.prototype,"median",(function(){return p(this.mu,this.sigma)})),o(M.prototype,"mode",(function(){return v(this.mu,this.sigma)})),o(M.prototype,"skewness",(function(){return d(this.mu,this.sigma)})),o(M.prototype,"stdev",(function(){return m(this.mu,this.sigma)})),o(M.prototype,"variance",(function(){return y(this.mu,this.sigma)})),a(M.prototype,"cdf",(function(t){return h(t,this.mu,this.sigma)})),a(M.prototype,"logpdf",(function(t){return g(t,this.mu,this.sigma)})),a(M.prototype,"pdf",(function(t){return b(t,this.mu,this.sigma)})),a(M.prototype,"quantile",(function(t){return x(t,this.mu,this.sigma)})),t.exports=M},4992:function(t,e,n){"use strict";var r=n(420),a=n(449),o=n(451),i=n(764);t.exports=function(t,e){return r(t)||r(e)||e<=0?NaN:o(e*a(t+.5)*i)}},4993:function(t,e,n){"use strict";var r=n(420),a=n(449);t.exports=function(t,e){var n,o;return r(t)||r(e)||e<=0?NaN:(n=a(4*(o=e*e)),n+=2*a(3*o),n+=3*a(2*o),n-=6)}},4994:function(t,e,n){"use strict";var r=n(420),a=n(449);t.exports=function(t,e){return r(t)||r(e)||e<=0?NaN:a(t+e*e/2)}},4995:function(t,e,n){"use strict";var r=n(420),a=n(449);t.exports=function(t,e){return r(t)||r(e)||e<=0?NaN:a(t)}},4996:function(t,e,n){"use strict";var r=n(420),a=n(449);t.exports=function(t,e){return r(t)||r(e)||e<=0?NaN:a(t-e*e)}},4997:function(t,e,n){"use strict";var r=n(420),a=n(433),o=n(449);t.exports=function(t,e){var n;return r(t)||r(e)||e<=0?NaN:((n=o(e*e))+2)*a(n-1)}},4998:function(t,e,n){"use strict";var r=n(420),a=n(433),o=n(449);t.exports=function(t,e){var n;return r(t)||r(e)||e<=0?NaN:a((o(n=e*e)-1)*o(2*t+n))}},4999:function(t,e,n){"use strict";var r=n(420),a=n(449);t.exports=function(t,e){var n;return r(t)||r(e)||e<=0?NaN:(a(n=e*e)-1)*a(2*t+n)}},5e3:function(t,e,n){"use strict";var r=n(420),a=n(443),o=n(451),i=n(458),u=n(566);t.exports=function(t,e,n){var s,c;return r(t)||r(e)||r(n)||n<=0?NaN:t<=0?i:(c=-1/(2*(s=a(n,2))),-.5*o(2*s*u)-o(t)+c*a(o(t)-e,2))}},5001:function(t,e,n){"use strict";var r=n(469),a=n(420),o=n(443),i=n(451),u=n(458),s=n(566);t.exports=function(t,e){var n,c,l;return a(t)||a(e)||e<=0?r(NaN):(n=o(e,2),c=-.5*i(2*n*s),l=-1/(2*n),function(e){if(a(e))return NaN;if(e<=0)return u;return c-i(e)+l*o(i(e)-t,2)})}},5002:function(t,e,n){"use strict";var r=n(420),a=n(433),o=n(449),i=n(443),u=n(451),s=n(566);t.exports=function(t,e,n){var c;return r(t)||r(e)||r(n)||n<=0?NaN:t<=0?0:(c=i(n,2),1/t*(1/a(2*c*s))*o(-1/(2*c)*i(u(t)-e,2)))}},5003:function(t,e,n){"use strict";var r=n(469),a=n(420),o=n(433),i=n(449),u=n(443),s=n(451),c=n(566);t.exports=function(t,e){var n,l,f;return a(t)||a(e)||e<=0?r(NaN):(n=u(e,2),l=1/o(2*n*c),f=-1/(2*n),function(e){if(a(e))return NaN;if(e<=0)return 0;return 1/e*l*i(f*u(s(e)-t,2))})}},5004:function(t,e,n){"use strict";var r=n(749),a=n(420),o=n(449);t.exports=function(t,e,n){return a(e)||a(n)||a(t)||n<=0||t<0||t>1?NaN:o(e+n*r(t,0,1))}},5005:function(t,e,n){"use strict";var r=n(469),a=n(749),o=n(420),i=n(449);t.exports=function(t,e){return o(t)||o(e)||e<=0?r(NaN):function(n){if(o(n)||n<0||n>1)return NaN;return i(t+e*a(n,0,1))}}},5006:function(t,e,n){var r=n(924),a=n(1129),o=n(683);t.exports=function(t,e){var n={};return e=o(e,3),a(t,(function(t,a,o){r(n,a,e(t,a,o))})),n}},6520:function(t,e,n){"use strict";n.r(e);n(427),n(416),n(421);var r=n(407),a=n.n(r),o=n(414),i=n.n(o),u=n(415),s=n.n(u),c=n(425),l=n.n(c),f=n(418),p=n.n(f),v=n(419),d=n.n(v),m=n(417),y=n.n(m),h=n(412),g=n.n(h),b=n(0),x=n.n(b),M=n(404),w=n.n(M),N=n(4172),E=n(424),C=n(509),O=n(476),L=n(493),P=n(465),D=n(694),S=n(6515),T=n(530),k=n.n(T),j=n(457),A=n.n(j),G=n(519),V=n.n(G),_=n(571),I=n(4683),R=n(4679),z=n(6440),B=n(5006),U=n.n(B),W=n(542),H=n.n(W),Y=n(1475),q=n.n(Y),J=n(826);function K(t,e,n){var r=e.a,a=e.d,o=e.e,i=e.f;return"y"===n?a*t+i:r*t+o}function X(t){if(!t.nativeEvent||void 0===t.nativeEvent.identifier){var e=function(t){return"svg"===t.nodeName?t:t.parentNode?e(t.parentNode):t};return e(t.target)}}function F(t,e,n,r){var a=t.polar,o=t.horizontal;if(a){var i=t.origin||{x:0,y:0},u=n-i.x,s=r-i.y,c=Math.abs(u*Math.sqrt(1+Math.pow(-s/u,2))),l=(-Math.atan2(s,u)+2*Math.PI)%(2*Math.PI);return{x:e.x.invert(l),y:e.y.invert(c)}}return{x:o?e.x.invert(r):e.x.invert(n),y:o?e.y.invert(n):e.y.invert(r)}}var Q={getParentSVG:X,getSVGEventCoordinates:function(t,e){if(t.nativeEvent&&void 0!==t.nativeEvent.identifier)return{x:t.nativeEvent.locationX,y:t.nativeEvent.locationY};t=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t;var n=function(t){return t.getScreenCTM().inverse()}(e=e||X(t));return{x:K(t.clientX,n,"x"),y:K(t.clientY,n,"y")}},getDomainCoordinates:function(t,e){var n=t.scale,r=t.horizontal;return e=e||{x:n.x.domain(),y:n.y.domain()},{x:r?[n.y(e.y[0]),n.y(e.y[1])]:[n.x(e.x[0]),n.x(e.x[1])],y:r?[n.x(e.x[0]),n.x(e.x[1])]:[n.y(e.y[0]),n.y(e.y[1])]}},getDataCoordinates:F,getBounds:function(t){var e=t.x1,n=t.x2,r=t.y1,a=t.y2,o=t.scale,i=F(t,o,e,r),u=F(t,o,n,a),s=function(t,e){return[J.a.getMinValue([t,e]),J.a.getMaxValue([t,e])]};return{x:s(i.x,u.x),y:s(i.y,u.y)}}};function Z(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var $={getDimension:function(t){var e=t.horizontal,n=t.cursorDimension;return e&&n?"x"===n?"y":"x":n},withinBounds:function(t,e){var n=U()(e,Number),r=n.x1,a=n.x2,o=n.y1,i=n.y2,u=U()(t,Number),s=u.x,c=u.y;return s>=Math.min(r,a)&&s<=Math.max(r,a)&&c>=Math.min(o,i)&&c<=Math.max(o,i)},onMouseMove:function(t,e){var n=e.onCursorChange,r=e.domain,a=this.getDimension(e),o=e.parentSVG||Q.getParentSVG(t),i=Q.getSVGEventCoordinates(t,o),u=Q.getDataCoordinates(e,e.scale,i.x,i.y),s=this.withinBounds(u,{x1:r.x[0],x2:r.x[1],y1:r.y[0],y2:r.y[1]});(s||(u=null),H()(n))&&(s?n(a?u[a]:u,e):u!==e.cursorValue&&n(e.defaultCursorValue||null,e));return[{target:"parent",eventKey:"parent",mutation:function(){return{cursorValue:u,parentSVG:o}}}]},onTouchEnd:function(t,e){var n=e.onCursorChange;return H()(e.onCursorChange)&&n(null,e),[{target:"parent",eventKey:"parent",mutation:function(){return{cursorValue:null}}}]}},tt=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){Z(t,e,n[e])}))}return t}({},$,{onMouseMove:q()($.onMouseMove.bind($),16,{leading:!0,trailing:!1}),onMouseLeave:$.onMouseMove.bind($),onTouchEnd:$.onTouchEnd.bind($)});function et(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){rt(t,e,n[e])}))}return t}function nt(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function rt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function at(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ot(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function it(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}var ut,st,ct,lt=(ut=I.a,ct=st=function(t){function e(){return at(this,e),it(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}var n,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),n=e,(r=[{key:"getCursorPosition",value:function(t){var e=t.cursorValue,n=t.defaultCursorValue,r=t.domain,a=t.cursorDimension;return e||("number"==typeof n?rt({x:(r.x[0]+r.x[1])/2,y:(r.y[0]+r.y[1])/2},a,n):n)}},{key:"getCursorLabelOffset",value:function(t){var e=t.cursorLabelOffset;return"number"==typeof e?{x:e,y:e}:e}},{key:"getPadding",value:function(t){if(void 0===t.padding){var e=t.children.find((function(t){return k()(t.props)&&void 0!==t.props.padding}));return _.a.getPadding(e.props)}return _.a.getPadding(t)}},{key:"getCursorElements",value:function(t){var e=t.scale,n=t.cursorLabelComponent,r=t.cursorLabel,a=t.cursorComponent,o=t.width,i=t.height,u=t.name,s=t.horizontal,c=t.theme,l=tt.getDimension(t),f=this.getCursorPosition(t),p=this.getCursorLabelOffset(t);if(!f)return[];var v=[],d=this.getPadding(t),m={x:s?e.y(f.y):e.x(f.x),y:s?e.x(f.x):e.y(f.y)};if(r){var y=V()({active:!0},n.props,{x:m.x+p.x,y:m.y+p.y,datum:f,active:!0,key:"".concat(u,"-cursor-label")});if(_.a.isTooltip(n)){var h=c&&c.tooltip||{};y=V()({},y,h)}v.push(x.a.cloneElement(n,V()({},y,{text:_.a.evaluateProp(r,y)})))}var g=A()({stroke:"black"},a.props.style);return"x"!==l&&void 0!==l||v.push(x.a.cloneElement(a,{key:"".concat(u,"-x-cursor"),x1:m.x,x2:m.x,y1:d.top,y2:i-d.bottom,style:g})),"y"!==l&&void 0!==l||v.push(x.a.cloneElement(a,{key:"".concat(u,"-y-cursor"),x1:d.left,x2:o-d.right,y1:m.y,y2:m.y,style:g})),v}},{key:"getChildren",value:function(t){return nt(x.a.Children.toArray(t.children)).concat(nt(this.getCursorElements(t)))}}])&&ot(n.prototype,r),a&&ot(n,a),e}(ut),Object.defineProperty(st,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"VictoryCursorContainer"}),Object.defineProperty(st,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:et({},I.a.propTypes,{cursorDimension:w.a.oneOf(["x","y"]),cursorLabel:w.a.func,cursorLabelComponent:w.a.element,cursorLabelOffset:w.a.oneOfType([w.a.number,w.a.shape({x:w.a.number,y:w.a.number})]),defaultCursorValue:w.a.oneOfType([w.a.number,w.a.shape({x:w.a.number,y:w.a.number})]),disable:w.a.bool,onCursorChange:w.a.func})}),Object.defineProperty(st,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:et({},I.a.defaultProps,{cursorLabelComponent:x.a.createElement(R.a,null),cursorLabelOffset:{x:5,y:-10},cursorComponent:x.a.createElement(z.a,null)})}),Object.defineProperty(st,"defaultEvents",{configurable:!0,enumerable:!0,writable:!0,value:function(t){return[{target:"parent",eventHandlers:{onMouseLeave:function(e,n){return t.disable?{}:tt.onMouseLeave(e,n)},onTouchCancel:function(){return[]},onMouseMove:function(e,n){return t.disable?{}:tt.onMouseMove(e,n)},onTouchMove:function(e,n){return t.disable?{}:tt.onMouseMove(e,n)}}}]}}),ct),ft=n(6524),pt=n(450),vt=n.n(pt),dt=n(431),mt=n.n(dt),yt=n(473),ht=n.n(yt),gt=n(1161),bt=n.n(gt),xt=n(664),Mt=n.n(xt),wt=n(4987),Nt=n.n(wt),Et=n(3840),Ct=n.n(Et),Ot=n(628),Lt=n(463),Pt=n(547),Dt=n(422);function St(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=y()(t);if(e){var a=y()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}Object(Dt.a)("LearnMeanVSMedian");var Tt=vt()("isle:mean-vs-median"),kt=a()("th",{}),jt=a()(Ot.a,{id:"mean-vs-median"}),At=function(t){p()(n,t);var e=St(n);function n(t){var r;i()(this,n),r=e.call(this,t),g()(l()(r),"medianEvaluation",(function(t){if(t.stopPropagation(),!r.state.showLognormalMedian){var e=mt()(Nt.a.median(r.state.mu,r.state.sigma)-r.state.medianLognormalGuess),n=r.props.t("a-bit-off"),a=r.state.lognormalDomain.x[1];e<a/10&&(n=r.props.t("good")),e<a/20&&(n=r.props.t("very-good")),r.singleAccMedian(e);var o=r.context;o.addNotification({title:r.props.t("score"),message:n,position:"tc",level:"success"}),o.log({id:r.props.id,type:"MEDIAN_GUESS_DISTANCE",value:e}),r.setState({showLognormalMedian:!0})}})),g()(l()(r),"meanEvaluation",(function(t){if(t.stopPropagation(),!r.state.showLognormalMean){var e=mt()(Nt.a.mean(r.state.mu,r.state.sigma)-r.state.meanLognormalGuess),n=r.props.t("a-bit-off"),a=r.state.lognormalDomain.x[1];e<a/10&&(n=r.props.t("good")),e<a/20&&(n=r.props.t("very-good")),r.singleAccMean(e);var o=r.context;o.addNotification({title:r.props.t("score"),message:n,position:"tc",level:"success"}),o.log({id:r.props.id,type:"MEAN_GUESS_DISTANCE",value:e}),r.setState({showLognormalMean:!0})}})),g()(l()(r),"generateData",(function(){var t=1*r.rand()-.5,e=2*r.rand()+.01,n=4+Nt.a.stdev(t,e),a=Mt()(0,n,80).map((function(n){return{x:n,y:Nt.a.pdf(n,t,e)}}));r.setState({lognormalData:a,mu:t,sigma:e,lognormalDomain:{x:[0,n],y:[0,Nt.a.pdf(Nt.a.mode(t,e),t,e)]},showLognormalMean:!1,showLognormalMedian:!1})})),r.state={mu:0,sigma:1,lognormalData:[],lognormalDomain:{x:[0,4],y:[0,3]},meanLognormalGuess:1,medianLognormalGuess:1,showLognormalMean:!1,showLognormalMedian:!1};var a={};return t.seed&&(a.seed=t.seed),r.rand=bt.a.factory(a),r.singleAccMean=Ct()(),r.groupAccMean=Ct()(),r.singleAccMedian=Ct()(),r.groupAccMedian=Ct()(),r}return s()(n,[{key:"componentDidMount",value:function(){var t=this;this.generateData();var e=this.context;this.unsubscribe=e.subscribe((function(e,n){if(e===Pt.n)if("MEDIAN_GUESS_DISTANCE"===n.type){var r=n.value;t.groupAccMedian(r),t.forceUpdate()}else if("MEAN_GUESS_DISTANCE"===n.type){var a=n.value;t.groupAccMean(a),t.forceUpdate()}}))}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"renderMeanPanel",value:function(){var t=this,e=this.props.t;return a()(P.a,{},void 0,a()(P.a.Header,{as:"h4"},void 0,e("mean")),a()(P.a.Body,{},void 0,a()(S.a,{domain:this.state.lognormalDomain,containerComponent:a()(lt,{events:{onClick:this.meanEvaluation},cursorDimension:"x",cursorLabel:function(t){return"".concat(ht()(t.x,-1))},onCursorChange:function(e){Tt("Received cursor change: ".concat(e)),t.state.showLognormalMean||t.setState({meanLognormalGuess:e})}})},void 0,a()(ft.a,{data:this.state.lognormalData,x:"x",y:"y"}),this.state.showLognormalMean?a()(ft.a,{data:[{x:this.state.meanLognormalGuess,y:0},{x:this.state.meanLognormalGuess,y:this.state.lognormalDomain.y[1]}],labels:["Your Guess",""]}):null,this.state.showLognormalMean?a()(ft.a,{data:[{x:Nt.a.mean(this.state.mu,this.state.sigma),y:0},{x:Nt.a.mean(this.state.mu,this.state.sigma),y:this.state.lognormalDomain.y[1]}],labels:["","True Mean"]}):null)))}},{key:"renderMedianPanel",value:function(){var t=this,e=this.props.t;return a()(P.a,{},void 0,a()(P.a.Header,{as:"h4"},void 0,e("median")),a()(P.a.Body,{},void 0,a()(S.a,{domain:this.state.lognormalDomain,containerComponent:a()(lt,{events:{onClick:this.medianEvaluation},cursorDimension:"x",cursorLabel:function(t){return"".concat(ht()(t.x,-1))},onCursorChange:function(e){t.state.showLognormalMedian||t.setState({medianLognormalGuess:e})}})},void 0,a()(ft.a,{data:this.state.lognormalData,x:"x",y:"y"}),this.state.showLognormalMedian?a()(ft.a,{data:[{x:this.state.medianLognormalGuess,y:0},{x:this.state.medianLognormalGuess,y:this.state.lognormalDomain.y[1]}],labels:["Your Guess",""]}):null,this.state.showLognormalMedian?a()(ft.a,{data:[{x:Nt.a.median(this.state.mu,this.state.sigma),y:0},{x:Nt.a.median(this.state.mu,this.state.sigma),y:this.state.lognormalDomain.y[1]}],labels:["","True Median"]}):null)))}},{key:"render",value:function(){var t=this.props.t;return a()(P.a,{style:this.props.style},void 0,a()(P.a.Header,{as:"h3"},void 0,this.props.header?this.props.header:t("measures-of-location-header")),a()(P.a.Body,{},void 0,a()(C.a,{},void 0,this.props.intro,a()(O.a,{},void 0,a()(L.a,{md:6},void 0,this.renderMeanPanel()),a()(L.a,{md:6},void 0,this.renderMedianPanel())),a()(O.a,{},void 0,a()("div",{style:{paddingTop:"20px",maxWidth:400,margin:"0 auto 10px"}},void 0,a()(E.a,{variant:"primary",size:"lg",onClick:this.generateData},void 0,t("generate-new-data")))),a()(O.a,{},void 0,this.props.showStatistics?a()(D.a,{bordered:!0},void 0,a()("thead",{},void 0,a()("tr",{},void 0,kt,a()("th",{},void 0,t("you")),a()("th",{},void 0,t("group")))),a()("tbody",{},void 0,a()("tr",{},void 0,a()("th",{},void 0,t("average-distance-from-mean")),a()("td",{},void 0,ht()(this.singleAccMean(),-2)),a()("td",{},void 0,ht()(this.groupAccMean(),-2))),a()("tr",{},void 0,a()("th",{},void 0,t("average-distance-from-median")),a()("td",{},void 0,ht()(this.singleAccMedian(),-2)),a()("td",{},void 0,ht()(this.groupAccMedian(),-2))))):null)),this.props.feedback?jt:null))}}]),n}(b.Component);At.defaultProps={feedback:!1,header:null,id:"mean_vs_median",intro:null,seed:null,showStatistics:!1,style:{}},At.contextType=Lt.a;e.default=Object(N.a)("LearnMeanVSMedian")(At)}}]);