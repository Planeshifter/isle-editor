(window.webpackJsonp=window.webpackJsonp||[]).push([[951],{6484:function(e,t,r){"use strict";r.r(t);r(437),r(436),r(488),r(505),r(438);var n=r(407),c=r.n(n),s=r(412),i=r.n(s),o=r(456),a=r.n(o),u=r(0),l=r.n(u),f=(r(404),r(432)),d=r(800),b=r(439);r(351);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r,n){var c="",s=t+n;switch(e){case"left":c="ticker-slide-in-right ",c+=t+"s forwards",c+=", ticker-slide-out-left ",c+=r+"s "+s+"s forwards";break;case"right":c="ticker-slide-in-left ",c+=t+"s forwards",c+=", ticker-slide-out-right ",c+=r+"s "+s+"s forwards";break;case"down":c="ticker-slide-in-top ",c+=t+"s forwards",c+=", ticker-slide-out-bottom ",c+=r+"s "+s+"s forwards";break;case"up":c="ticker-slide-in-bottom ",c+=t+"s forwards",c+=", ticker-slide-out-top ",c+=r+"s "+s+"s forwards";break;case"focus":c="ticker-text-focus-in ",c+=t+"s forwards",c+=", ticker-text-blur-out ",c+=r+"s "+s+"s forwards";break;case"tracking":c="ticker-tracking-in-contract-bck ",c+=t+"s forwards",c+=", ticker-tracking-out-expand-fwd ",c+=r+"s "+s+"s forwards";break;case"swirl":c="ticker-swirl-in-fwd ",c+=t+"s forwards",c+=", ticker-swirl-out-bck ",c+=r+"s "+s+"s forwards"}return c}var O=function(e){var t=e.text,r=e.loop,n=e.direction,s=e.wait,i=e.inTime,o=e.outTime,b=e.hold,w=e.className,O=e.style,v=Object(u.useState)(0),g=a()(v,2),j=g[0],h=g[1],m=Object(u.useRef)(),y=Object(u.useRef)(null),P=Object(u.useState)(!1),E=a()(P,2),x=E[0],C=E[1];Object(f.isPrimitive)(t)&&(t=[t]),r&&1===t.length&&t.push(t[0]);var D=Object(u.useCallback)((function(){r?h(0):clearInterval(m.current)}),[r]),I=Object(u.useCallback)((function(){j<t.length-1?h(j+1):D()}),[j,t,D]),S=Object(u.useCallback)((function(){if(!y.current)return!1;var e=y.current.getBoundingClientRect().top;C(e>=0&&e<=window.innerHeight)}),[]);Object(u.useEffect)((function(){var e=d.a?document.getElementById("Lesson"):document;return e.addEventListener("scroll",S),function(){e.removeEventListener("scroll",S)}}),[S]);var T=s+i+o+b;Object(u.useEffect)((function(){return x&&(m.current=setInterval(I,1e3*T)),function(){m.current&&clearInterval(m.current)}}),[T,I,x]);var L=l.a.createElement("p",{className:"scrolling-text ".concat(w),ref:y,style:k({animation:p(n,i,o,b)},O),key:j},t[j]);return"left"===n||"right"===n?c()("div",{style:{overflow:"hidden",width:"100%"}},void 0,L):L};O.defaultProps={text:[],loop:!1,direction:"right",hold:5,wait:3,inTime:1,outTime:1,className:"",style:{}},t.default=Object(b.a)(O)}}]);