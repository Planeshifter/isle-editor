(window.webpackJsonp=window.webpackJsonp||[]).push([[883],{1480:function(e,t,r){"use strict";r(428);var n=r(447),o=r.n(n);t.a=function(e,t,r){var n=r.config.rshell;n&&n.libraries&&(e=e.concat(n.libraries));var c=function(e){return e.map((function(e){return"library("+e+");"})).join(" ")}(e);return n&&n.global&&(c+=n.global+"\n"),t=o()(t)?t.join("\n"):t,c+=t+="\n"}},6418:function(e,t,r){"use strict";r.r(t);var n,o=r(412),c=r.n(o),i=r(407),a=r.n(i),s=r(448),u=r.n(s),b=(r(583),r(437),r(433),r(430),r(438),r(439),r(0)),l=(r(404),r(1425)),p=r(1071),f=r(1480),O=r(459),j=r(420),d=r(442);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}Object(j.a)("R");var v=/(?:\n\s*|^)([ A-Z0-9._():=]+)\n*$/i,w=function(e){var t=e.code,r=e.libraries,o=e.prependCode,c=e.style,i=Object(b.useState)(null),s=u()(i,2),j=s[0],d=s[1],y=Object(b.useState)(!1),w=u()(y,2),h=w[0],P=w[1],m=Object(b.useContext)(O.a);return Object(b.useEffect)((function(){P(!0);var e="library( jsonlite );\n";e=e+Object(f.a)(r,o,m)+t.replace(v,"\n toJSON($1)"),m.executeRCode({code:e,onResult:function(e,t,r){d(r),P(!1)}})}),[t,r,o,m]),a()("div",{className:"rtable"},void 0,a()(p.a,{running:h,width:256,height:128}),j&&!h?a()(l.a,{data:j,style:g({marginTop:"10px",marginBottom:"10px"},c)}):n||(n=a()("span",{})))};w.defaultProps={code:"",libraries:[],prependCode:"",style:{}},t.default=Object(d.a)(w)}}]);