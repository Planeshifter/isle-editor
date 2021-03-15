/*! For license information please see MultiCards.3d2d1678.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[727],{1009:function(e,t,n){"use strict";var o=n(425),r=n(636),i=n(431).isPrimitive,c=n(514),a=n(457),l=n(712).factory,s=n(1411),u=n(1412);e.exports=function(e){var t,n,d;if(t=c(s),arguments.length&&(d=u(t,e)))throw d;return n=e&&e.seed?l({seed:e.seed}):l(),o(p,"seed",n.seed),o(p,"PRNG",n),n=n.normalized,p;function p(e,o){var l,s,d,p,f,y,v,b,m,h;if(!r(e))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+e+"`.");if(arguments.length>1&&(f=u(p={},o)))throw f;for(d=p&&p.copy?p.copy:t.copy,(l=i(e))&&(e=e.split(""),d="none"),s=0,"shallow"===d?s+=1:"deep"===d&&(s+=2),b=e.length,y=c(e,s),m=b-1;m>0;m--)h=a(n()*(m+1)),v=y[m],y[m]=y[h],y[h]=v;return l&&(y=e.join("")),y}}},1337:function(e,t,n){"use strict";var o=n(425),r=n(1410);o(r,"factory",n(1009)),e.exports=r},1410:function(e,t,n){"use strict";var o=n(1009)();e.exports=o},1411:function(e){e.exports=JSON.parse('{"copy":"shallow"}')},1412:function(e,t,n){"use strict";var o=n(426),r=n(431).isPrimitive,i=n(448);e.exports=function(e,t){if(!i(t))return new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(o(t,"copy")){if(e.copy=t.copy,!r(e.copy))return new TypeError("invalid option. `copy` option must be a string primitive. Option: `"+e.copy+"`.");if("deep"!==e.copy&&"shallow"!==e.copy&&"none"!==e.copy)return new TypeError("invalid option. `copy` option must be `deep`, `shallow` or `none`. Value: `"+e.copy+"`.")}return null}},3684:function(e,t,n){"use strict";var o=n(3685);e.exports=o},3685:function(e,t,n){"use strict";var o=n(741)(n(560));e.exports=o},6530:function(e,t,n){"use strict";n.r(t);n(438),n(434),n(437),n(482);var o=n(412),r=n.n(o),i=n(407),c=n.n(i),a=(n(854),n(456)),l=n.n(a),s=(n(453),n(452),n(423),n(0)),u=(n(404),n(450)),d=n.n(u),p=n(1969),f=n(454),y=n(1337),v=n.n(y),b=n(654),m=n.n(b),h=n(3684),g=n.n(h),w=n(545),O=n.n(w),j=n(1386);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=d()("isle:multi-cards");var x=function(e){var t=e.id,n=e.animation,o=e.values,r=e.memory,i=e.oneTime,a=e.style,u=e.containerStyle,d=e.frontStyle,y=e.backStyle,b=e.onChange,h=e.onMemoryComplete,w=r?2*o.length:o.length,S=Object(s.useState)({cardList:new Array(w).fill({}),blocked:!1}),x=l()(S,2),C=x[0],L=x[1],T=Object(s.useState)(null),E=l()(T,2),D=E[0],A=E[1],J=Object(s.useState)(0),N=l()(J,2),V=N[0],F=N[1],G=Object(s.useRef)(r?v()(m()(0,w,1)):m()(0,w,1)),M=Object(p.a)("General").t;if(Object(s.useEffect)((function(){var e=r?2*o.length:o.length;L({cardList:new Array(e).fill({}),opened:null}),F(0),G.current=r?v()(m()(0,e,1)):m()(0,e,1)}),[r,o]),Object(s.useEffect)((function(){V===o.length&&(P("Completed memory game..."),h())}),[V,o,h]),!g()(o))return c()(f.a,{variant:"danger"},void 0,M("expected-object-array",{field:"values"}));var R=new Array(w);if(r)for(var _=function(e){for(var t=[],n=0;n<e.length;n++)t.push(e[n]),t.push(e[n]);return t}(o),z=function(e){R[G.current[e]]=c()(j.a,{value:C.cardList[e].opened,disabled:C.blocked,containerStyle:u,frontStyle:d,backStyle:y,onChange:function(t){var n=C.cardList,o=C.blocked,r=n.slice();o||r[e].solved||(r[e]=k(k({},r[e]),{},{opened:t}),L({cardList:r,blocked:!!D}),O()(D)?(P("Clicked on first card at index ".concat(e,"...")),A(e),b(r)):setTimeout((function(){P("Clicked on second card at index ".concat(e,"...")),e%2==0&&D===e+1||e%2==1&&D===e-1?(P("Found match..."),r[D]={opened:!0,solved:!0},r[e]={opened:!0,solved:!0},F(V+1)):(P("Close both opened cards (".concat(e,", ").concat(D,") as no match is found...")),r[D]={solved:!1,opened:!1},r[e]={solved:!1,opened:!1}),A(null),L({cardList:r,blocked:!1}),b(r)}),1200))},oneTime:i,id:"".concat(t,"_").concat(e)},e,c()("div",{},void 0,_[e].front),c()("div",{},void 0,_[e].back))},q=0;q<C.cardList.length;q++)z(q);else for(var B=function(e){R[G.current[e]]=c()(j.a,{value:C.cardList[e].opened,containerStyle:u,frontStyle:d,backStyle:y,onChange:function(t){var n=C.cardList.slice();n[e]={opened:t},L({cardList:n,opened:C.opened}),b(n)},oneTime:i,id:"".concat(t,"_").concat(e)},e,c()("div",{},void 0,o[e].front),c()("div",{},void 0,o[e].back))},H=0;H<o.length;H++)B(H);return c()("div",{style:k({overflow:"auto",animationName:n.name,animationDuration:n.duration},a)},void 0,R)};x.defaultProps={animation:{},memory:null,onChange:function(){},onMemoryComplete:function(){},oneTime:!1,values:[],style:{},containerStyle:{},frontStyle:{},backStyle:{}},t.default=x}}]);