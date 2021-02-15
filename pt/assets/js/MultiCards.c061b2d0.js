/*! For license information please see MultiCards.c061b2d0.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{3772:function(e,t,n){"use strict";var o=n(3773);e.exports=o},3773:function(e,t,n){"use strict";var o=n(862)(n(619));e.exports=o},6452:function(e,t,n){"use strict";n.r(t);n(437),n(433),n(434),n(494);var o=n(404),r=n.n(o),c=n(400),a=n.n(c),i=(n(846),n(453)),l=n.n(i),d=(n(425),n(424),n(403),n(0)),s=(n(396),n(443)),u=n.n(s),f=n(1806),p=n(449),v=n(1234),b=n.n(v),y=n(745),m=n.n(y),O=n(3772),h=n.n(O),g=n(589),j=n.n(g),S=n(1540);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=u()("isle:multi-cards");var L=function(e){var t=e.id,n=e.animation,o=e.values,r=e.memory,c=e.oneTime,i=e.style,s=e.containerStyle,u=e.frontStyle,v=e.backStyle,y=e.onChange,O=e.onMemoryComplete,g=r?2*o.length:o.length,k=Object(d.useState)({cardList:new Array(g).fill({}),blocked:!1}),L=l()(k,2),P=L[0],x=L[1],D=Object(d.useState)(null),T=l()(D,2),A=T[0],E=T[1],J=Object(d.useState)(0),M=l()(J,2),_=M[0],F=M[1],G=Object(d.useRef)(r?b()(m()(0,g,1)):m()(0,g,1)),N=Object(f.a)("General").t;if(Object(d.useEffect)((function(){var e=r?2*o.length:o.length;x({cardList:new Array(e).fill({}),opened:null}),F(0),G.current=r?b()(m()(0,e,1)):m()(0,e,1)}),[r,o]),Object(d.useEffect)((function(){_===o.length&&(C("Completed memory game..."),O())}),[_,o,O]),!h()(o))return a()(p.a,{variant:"danger"},void 0,N("expected-object-array",{field:"values"}));var R=new Array(g);if(r)for(var q=function(e){for(var t=[],n=0;n<e.length;n++)t.push(e[n]),t.push(e[n]);return t}(o),z=function(e){R[G.current[e]]=a()(S.a,{value:P.cardList[e].opened,disabled:P.blocked,containerStyle:s,frontStyle:u,backStyle:v,onChange:function(t){var n=P.cardList,o=P.blocked,r=n.slice();o||r[e].solved||(r[e]=w(w({},r[e]),{},{opened:t}),x({cardList:r,blocked:!!A}),j()(A)?(C("Clicked on first card at index ".concat(e,"...")),E(e),y(r)):setTimeout((function(){C("Clicked on second card at index ".concat(e,"...")),e%2==0&&A===e+1||e%2==1&&A===e-1?(C("Found match..."),r[A]={opened:!0,solved:!0},r[e]={opened:!0,solved:!0},F(_+1)):(C("Close both opened cards (".concat(e,", ").concat(A,") as no match is found...")),r[A]={solved:!1,opened:!1},r[e]={solved:!1,opened:!1}),E(null),x({cardList:r,blocked:!1}),y(r)}),1200))},oneTime:c,id:"".concat(t,"_").concat(e)},e,a()("div",{},void 0,q[e].front),a()("div",{},void 0,q[e].back))},B=0;B<P.cardList.length;B++)z(B);else for(var H=function(e){R[G.current[e]]=a()(S.a,{value:P.cardList[e].opened,containerStyle:s,frontStyle:u,backStyle:v,onChange:function(t){var n=P.cardList.slice();n[e]={opened:t},x({cardList:n,opened:P.opened}),y(n)},oneTime:c,id:"".concat(t,"_").concat(e)},e,a()("div",{},void 0,o[e].front),a()("div",{},void 0,o[e].back))},I=0;I<o.length;I++)H(I);return a()("div",{style:w({overflow:"auto",animationName:n.name,animationDuration:n.duration},i)},void 0,R)};L.defaultProps={animation:{},memory:null,onChange:function(){},onMemoryComplete:function(){},oneTime:!1,values:[],style:{},containerStyle:{},frontStyle:{},backStyle:{}},t.default=L},846:function(e,t,n){var o=n(498);o(o.P,"Array",{fill:n(880)}),n(815)("fill")}}]);