(window.webpackJsonp=window.webpackJsonp||[]).push([[825],{6409:function(e,t,o){"use strict";o.r(t);o(437),o(433),o(430),o(438),o(439);var i,n,r=o(407),a=o.n(r),c=o(412),l=o.n(c),s=o(448),u=o.n(s),d=o(0),b=(o(404),o(747)),p=o.n(b),h=o(442);o(338);function O(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}var g=function(e){var t=e.image,o=e.draggable,r=e.id,c=e.onClick,s=e.showPin,b=e.stain,h=e.width,g=e.style,w=Object(d.useState)(!1),f=u()(w,2),v=f[0],j=f[1],y=Object(d.useState)({height:"100%",width:"auto"}),k=u()(y,2),m=k[0],P=k[1],C=Object(d.useCallback)((function(){j(!0)}),[]),N=Object(d.useCallback)((function(){j(!1)}),[]),S=Object(d.useCallback)((function(){c&&c(r)}),[r,c]),D=Object(d.useCallback)((function(e){var t="100%",o="auto";"wide"===e&&(t="auto",o="100%"),P({width:t,height:o})}),[]);Object(d.useEffect)((function(){if(t){var e=new Image;e.src=t,e.onload=function(){this.height>this.width?D("high"):D("wide")}}}),[t,D]);var E={backgroundImage:"url("+t+")",backgroundSize:m.width+" "+m.height,backgroundPosition:"center"},I="polaroid";c&&(I+=" clickable-polaroid");var J="polaroid-image";!0===v&&(J="polaroid-image polaroid-touched");var M=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?O(Object(o),!0).forEach((function(t){l()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):O(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},g);M.width=h,M.height=1.1*M.width;var x=a()("div",{id:r,role:"button",tabIndex:0,onMouseOver:C,onFocus:C,onMouseOut:N,onBlur:N,onClick:S,onKeyPress:S,style:M,className:I},void 0,a()("div",{className:"polaroid-wrapper"},void 0,b?i||(i=a()("div",{className:"polaroid-stain"})):null,a()("div",{style:E,className:J}),s?n||(n=a()("div",{className:"polaroid-pin"})):null));return o?a()(p.a,{},void 0,x):x};g.defaultProps={image:null,draggable:!1,showPin:!1,stain:!1,width:350,style:{},onClick:null},t.default=Object(h.a)(g)}}]);