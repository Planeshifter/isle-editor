(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{6467:function(e,r,t){"use strict";t.r(r);t(437),t(433),t(425),t(424),t(403),t(434);var n=t(404),o=t.n(n),a=t(400),c=t.n(a),i=t(453),l=t.n(i),s=t(0),u=(t(396),t(1806)),p=t(449),f=t(470),b=t.n(f);t(351);function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){o()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var O=["octagon","triangle","trapezoid","parallelogram","rhombus","pentagon","hexagon","heptagon","nonagon","decagon","bevel","rabbet","left-arrow","right-arrow","left-point","right-point","left-chevron","right-chevron","star","cross","message","close","frame"],h=function(e){var r=e.children,t=e.type,n=e.src,o=e.style,a=e.onClick,i=Object(s.useState)(!1),f=l()(i,2),g=f[0],h=f[1],v=Object(u.a)("General").t;if(Object(s.useEffect)((function(){if(n){if(t){var e=new Image;e&&(e.src=e),e.onload=function(){h(!0)}}}else h(!0)}),[n,t]),t&&!b()(O,t))return c()(p.a,{variant:"danger"},void 0,v("expected-value-from-list",{field:"type",list:"`"+O.join("`, `")+"`"}));if(!g)return null;var y=d(d({},function(e){var r="var(--cp-"+e+")";return{webkitClipPath:r,clipPath:r,shapeOutside:r}}(t)),o);return n&&(b()(n,".svg")?(y.shapeOutside="url("+n+")",y.webkitClipPath="url("+n+")",y.clipPath="url("+n+")",y.backgroundImage="url("+n+")"):y.backgroundImage="url("+n+")",y.backgroundSize||(y.backgroundSize="100% 100%")),c()("div",{role:"button",tabIndex:0,onKeyPress:a,onClick:a,style:y,className:"shaped-form"},void 0,r)};h.defaultProps={type:"star",src:null,style:{},onClick:null},r.default=h}}]);