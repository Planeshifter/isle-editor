/*! For license information please see DraggableGrid.b752bf5e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{4732:function(e,n,t){"use strict";var r=t(4733);e.exports=r},4733:function(e,n,t){"use strict";var r=t(447),i=t(523),o=t(425),a=t(4734),s=t(4735);e.exports=function(e,n,t){var c,l,u,p,x;if(!r(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");if(c=i(a),arguments.length>2&&(u=s(c,t)))throw u;for(l=c.copy?new Array(e.length):e,x=0;x<e.length;x++)null!=(p=e[x])&&o(p,n)&&(l[x]=p[n]);return l}},4734:function(e){e.exports=JSON.parse('{"copy":true}')},4735:function(e,n,t){"use strict";var r=t(445),i=t(425),o=t(473).isPrimitive;e.exports=function(e,n){return r(n)?i(n,"copy")&&(e.copy=n.copy,!o(e.copy))?new TypeError("invalid option. `copy` option must be a boolean primitive. Option: `"+e.copy+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.")}},6361:function(e,n,t){"use strict";t.r(n);var r=t(407),i=t.n(r),o=t(448),a=t.n(o),s=(t(428),t(0)),c=(t(404),t(1996)),l=t(454),u=t(1369),p=t(447),x=t.n(p),g=t(4732),d=t.n(g),m=t(452),w=t.n(m),f=t(442),b=Object(u.WidthProvider)(u.Responsive),v=function(e){if(!x()(e))return null;var n=e.map((function(e,n){return{lg:{i:"cell-".concat(n),x:6*n%18,y:4*w()(n/3),w:6,h:4},md:{i:"cell-".concat(n),x:6*n%12,y:4*w()(n/2),w:6,h:4},sm:{i:"cell-".concat(n),x:6*n%12,y:4*w()(n/2),w:6,h:4},xs:{i:"cell-".concat(n),x:6*n%12,y:4*w()(n/2),w:6,h:4},xxs:{i:"cell-".concat(n),x:4*n%6,y:4*w()(n/1),w:6,h:4}}}));return n={lg:d()(n,"lg"),md:d()(n,"md"),sm:d()(n,"sm"),xs:d()(n,"xs"),xxs:d()(n,"xxs")}},y=function(e){var n=e.children,t=e.isDraggable,r=e.isResizable,o=e.rowHeight,u=Object(s.useState)(v(n)),p=a()(u,2),g=p[0],d=p[1],m=Object(c.a)("General").t;return Object(s.useEffect)((function(){var e=v(n);d(e)}),[n]),x()(n)?i()(b,{layouts:g,breakpoints:{lg:1200,md:996,sm:768,xs:480,xxs:0},cols:{lg:18,md:12,sm:12,xs:12,xxs:6},isResizable:r,isDraggable:t,rowHeight:o},void 0,n.map((function(e,n){return i()("div",{},"cell-".concat(n),e)}))):i()(l.a,{variant:"danger"},void 0,m("grid-requires-two-children"))};y.defaultProps={isDraggable:!1,isResizable:!1,rowHeight:60},n.default=Object(f.a)(y)}}]);