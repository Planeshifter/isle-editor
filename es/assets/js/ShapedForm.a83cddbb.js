(window.webpackJsonp=window.webpackJsonp||[]).push([[974],{6544:function(e,t,r){"use strict";r.r(t);r(437),r(434),r(469),r(478),r(438);var n=r(412),o=r.n(n),a=r(407),c=r.n(a),i=r(456),l=r.n(i),s=r(0),u=(r(404),r(1969)),p=r(454),b=r(473),f=r.n(b),g=r(439);r(354);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=["octagon","triangle","trapezoid","parallelogram","rhombus","pentagon","hexagon","heptagon","nonagon","decagon","bevel","rabbet","left-arrow","right-arrow","left-point","right-point","left-chevron","right-chevron","star","cross","message","close","frame"],v=function(e){var t=e.children,r=e.type,n=e.src,o=e.style,a=e.onClick,i=Object(s.useState)(!1),b=l()(i,2),g=b[0],d=b[1],v=Object(u.a)("General").t;if(Object(s.useEffect)((function(){if(n){if(r){var e=new Image;e&&(e.src=e),e.onload=function(){d(!0)}}}else d(!0)}),[n,r]),r&&!f()(h,r))return c()(p.a,{variant:"danger"},void 0,v("expected-value-from-list",{field:"type",list:"`"+h.join("`, `")+"`"}));if(!g)return null;var y=O(O({},function(e){var t="var(--cp-"+e+")";return{webkitClipPath:t,clipPath:t,shapeOutside:t}}(r)),o);return n&&(f()(n,".svg")?(y.shapeOutside="url("+n+")",y.webkitClipPath="url("+n+")",y.clipPath="url("+n+")",y.backgroundImage="url("+n+")"):y.backgroundImage="url("+n+")",y.backgroundSize||(y.backgroundSize="100% 100%")),c()("div",{role:"button",tabIndex:0,onKeyPress:a,onClick:a,style:y,className:"shaped-form"},void 0,t)};v.defaultProps={type:"star",src:null,style:{},onClick:null},t.default=Object(g.a)(v)}}]);