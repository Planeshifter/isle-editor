(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{6453:function(e,t,o){"use strict";o.r(t);o(437),o(433),o(425),o(424),o(403),o(434);var i=o(400),n=o.n(i),r=o(404),a=o.n(r),c=o(453),l=o.n(c),s=o(0),u=(o(396),o(822)),d=o.n(u);o(335);function b(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}var p=n()("div",{className:"polaroid-stain"}),h=n()("div",{className:"polaroid-pin"}),g=function(e){var t=e.image,o=e.draggable,i=e.id,r=e.onClick,c=e.showPin,u=e.stain,g=e.width,w=e.style,O=Object(s.useState)(!1),f=l()(O,2),v=f[0],j=f[1],y=Object(s.useState)({height:"100%",width:"auto"}),k=l()(y,2),m=k[0],P=k[1],C=Object(s.useCallback)((function(){j(!0)}),[]),N=Object(s.useCallback)((function(){j(!1)}),[]),S=Object(s.useCallback)((function(){r&&r(i)}),[i,r]),D=Object(s.useCallback)((function(e){var t="100%",o="auto";"wide"===e&&(t="auto",o="100%"),P({width:t,height:o})}),[]);Object(s.useEffect)((function(){if(t){var e=new Image;e.src=t,e.onload=function(){this.height>this.width?D("high"):D("wide")}}}),[t,D]);var E={backgroundImage:"url("+t+")",backgroundSize:m.width+" "+m.height,backgroundPosition:"center"},I="polaroid";r&&(I+=" clickable-polaroid");var J="polaroid-image";!0===v&&(J="polaroid-image polaroid-touched");var M=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?b(Object(o),!0).forEach((function(t){a()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):b(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},w);M.width=g,M.height=1.1*M.width;var x=n()("div",{id:i,role:"button",tabIndex:0,onMouseOver:C,onFocus:C,onMouseOut:N,onBlur:N,onClick:S,onKeyPress:S,style:M,className:I},void 0,n()("div",{className:"polaroid-wrapper"},void 0,u?p:null,n()("div",{style:E,className:J}),c?h:null));return o?n()(d.a,{},void 0,x):x};g.defaultProps={image:null,draggable:!1,showPin:!1,stain:!1,width:350,style:{},onClick:null},t.default=g}}]);