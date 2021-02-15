/*! For license information please see DraggableGrid.8add02e1.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{4815:function(t,e,n){"use strict";var r=n(4816);t.exports=r},4816:function(t,e,n){"use strict";var r=n(440),i=n(555),o=n(422),c=n(4817),s=n(4818);t.exports=function(t,e,n){var a,u,l,p,f;if(!r(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");if(a=i(c),arguments.length>2&&(l=s(a,n)))throw l;for(u=a.copy?new Array(t.length):t,f=0;f<t.length;f++)null!=(p=t[f])&&o(p,e)&&(u[f]=p[e]);return u}},4817:function(t){t.exports=JSON.parse('{"copy":true}')},4818:function(t,e,n){"use strict";var r=n(439),i=n(422),o=n(475).isPrimitive;t.exports=function(t,e){return r(e)?i(e,"copy")&&(t.copy=e.copy,!o(t.copy))?new TypeError("invalid option. `copy` option must be a boolean primitive. Option: `"+t.copy+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")}},6413:function(t,e,n){"use strict";n.r(e);n(411),n(403),n(415);var r=n(400),i=n.n(r),o=n(407),c=n.n(o),s=n(410),a=n.n(s),u=n(413),l=n.n(u),p=n(414),f=n.n(p),h=n(412),d=n.n(h),y=n(0),g=(n(396),n(4125)),m=n(449),v=n(1484),x=n(440),w=n.n(x),b=n(4815),P=n.n(b),R=n(447),k=n.n(R);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d()(t);if(e){var i=d()(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return f()(this,n)}}var D=Object(v.WidthProvider)(v.Responsive),j=function(t){if(!w()(t.children))return null;var e=t.children.map((function(t,e){return{lg:{i:"cell-".concat(e),x:6*e%18,y:4*k()(e/3),w:6,h:4},md:{i:"cell-".concat(e),x:6*e%12,y:4*k()(e/2),w:6,h:4},sm:{i:"cell-".concat(e),x:6*e%12,y:4*k()(e/2),w:6,h:4},xs:{i:"cell-".concat(e),x:6*e%12,y:4*k()(e/2),w:6,h:4},xxs:{i:"cell-".concat(e),x:4*e%6,y:4*k()(e/1),w:6,h:4}}}));return e={lg:P()(e,"lg"),md:P()(e,"md"),sm:P()(e,"sm"),xs:P()(e,"xs"),xxs:P()(e,"xxs")}},z=function(t){l()(n,t);var e=O(n);function n(t){var r;return c()(this,n),(r=e.call(this,t)).state={layouts:j(t)},r}return a()(n,[{key:"render",value:function(){return w()(this.props.children)?i()(D,{layouts:this.state.layouts,breakpoints:{lg:1200,md:996,sm:768,xs:480,xxs:0},cols:{lg:18,md:12,sm:12,xs:12,xxs:6},isResizable:this.props.isResizable,isDraggable:this.props.isDraggable,rowHeight:this.props.rowHeight},void 0,this.props.children.map((function(t,e){return i()("div",{},"cell-".concat(e),t)}))):i()(m.a,{variant:"danger"},void 0,this.props.t("grid-requires-two-children"))}}],[{key:"getDerivedStateFromProps",value:function(t){return{layouts:j(t)}}}]),n}(y.Component);z.defaultProps={isDraggable:!1,isResizable:!1,rowHeight:60},e.default=Object(g.a)("General")(z)},796:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}}}]);