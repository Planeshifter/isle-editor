/*! For license information please see Bibliography.e3be4e42.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{1569:function(t,e,r){"use strict";var n=r(1570);t.exports=n},1570:function(t,e,r){"use strict";var n=r(469).isPrimitive,i=r(438).isPrimitive;t.exports=function(t,e,r){var a,o;if(!i(t))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+t+"`.");if(!i(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!n(r))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+r+"`.");if(0===r)return 0===e.length;a=r<0?t.length+r:r}else a=t.length;if(0===e.length)return!0;if((a-=e.length)<0)return!1;for(o=0;o<e.length;o++)if(t.charCodeAt(a+o)!==e.charCodeAt(o))return!1;return!0}},6407:function(t,e,r){"use strict";r.r(e);var n=r(400),i=r.n(n),a=r(0),o=(r(396),r(4125)),c=r(1569),u=r.n(c),s=r(482),l=r.n(s),h=r(457),v=r(418);function d(t){return t?u()(t,".")?t:"".concat(t,"."):""}Object(v.a)("Bibliography");var f=function(t){var e=t.title,r=t.className,n=t.style,o=t.t,c=Object(a.useContext)(h.a).config.references,u=l()(c);u=u.sort((function(t,e){var r=c[t],n=c[e];return r&&r.author?n&&n.author&&r.author[0]>n.author[0]?1:-1:1}));for(var s=[],v=0;v<u.length;v++){var f=c[u[v]];if(f){var m=void 0;if("article"===f.type){var p=d(f.author),g=f.title?"".concat(f.title,". "):"",b=f.journal?i()("i",{},void 0,"".concat(f.journal,", ")):"",y=f.year?"".concat(f.year,"."):"",w=f.number?"(".concat(f.number,")"):"",j=f.pages?"".concat(f.volume||w?":":"").concat(f.pages,", "):"",T=f.month?" ".concat(f.month," "):"",k=i()("span",{},void 0,p," ",g,b,f.volume,w,j,T,y);m=i()("li",{},"ref-".concat(v),k)}else if("book"===f.type){var x=d(f.author),C=f.title?i()("i",{},void 0,f.title,". "):"",E=f.publisher?"".concat(f.publisher,", "):"",N=f.address?"".concat(f.address,", "):"",O=f.edition?"".concat(f.edition," ").concat(o("edition"),", "):"",P=f.month?"".concat(f.month," "):"",V=f.year?"".concat(f.year,"."):"",A=i()("span",{},void 0,x," ",C,E,N,O,P,V);m=i()("li",{},"ref-".concat(v),A)}s.push(m)}}return i()("div",{className:"outer-element ".concat(r),style:n},void 0,i()("h2",{},void 0,e||o("references")),i()("ol",{},void 0,s))};f.defaultProps={title:null,className:"",style:{}},e.default=Object(o.a)("Bibliography")(f)}}]);