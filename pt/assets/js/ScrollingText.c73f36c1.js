(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{6465:function(e,t,r){"use strict";r.r(t);r(437),r(433),r(425),r(424),r(403),r(434);var s=r(400),i=r.n(s),c=r(404),o=r.n(c),n=r(453),a=r.n(n),l=r(0),u=(r(396),r(438));r(348);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t,r,s){var i="",c=t+s;switch(e){case"left":i="ticker-slide-in-right ",i+=t+"s forwards",i+=", ticker-slide-out-left ",i+=r+"s "+c+"s forwards";break;case"right":i="ticker-slide-in-left ",i+=t+"s forwards",i+=", ticker-slide-out-right ",i+=r+"s "+c+"s forwards";break;case"down":i="ticker-slide-in-top ",i+=t+"s forwards",i+=", ticker-slide-out-bottom ",i+=r+"s "+c+"s forwards";break;case"up":i="ticker-slide-in-bottom ",i+=t+"s forwards",i+=", ticker-slide-out-top ",i+=r+"s "+c+"s forwards";break;case"focus":i="ticker-text-focus-in ",i+=t+"s forwards",i+=", ticker-text-blur-out ",i+=r+"s "+c+"s forwards";break;case"tracking":i="ticker-tracking-in-contract-bck ",i+=t+"s forwards",i+=", ticker-tracking-out-expand-fwd ",i+=r+"s "+c+"s forwards";break;case"swirl":i="ticker-swirl-in-fwd ",i+=t+"s forwards",i+=", ticker-swirl-out-bck ",i+=r+"s "+c+"s forwards"}return i}var b=function(e){var t=e.text,r=e.loop,s=e.direction,c=e.wait,o=e.inTime,n=e.outTime,f=e.hold,b=e.className,k=e.style,p=Object(l.useState)(0),O=a()(p,2),h=O[0],v=O[1],g=Object(l.useRef)();Object(u.isPrimitive)(t)&&(t=[t]),r&&1===t.length&&t.push(t[0]);var j=Object(l.useCallback)((function(){r?v(0):clearInterval(g.current)}),[r]),y=Object(l.useCallback)((function(){h<t.length-1?v(h+1):j()}),[h,t,j]),m=c+o+n+f;Object(l.useEffect)((function(){return g.current=setInterval(y,1e3*m),function(){g.current&&clearInterval(g.current)}}),[m,y]);var P=i()("div",{className:b,style:d({animation:w(s,o,n,f)},k)},h,t[h]);return"left"===s||"right"===s?i()("div",{style:{overflow:"hidden",width:"100%"}},void 0,P):P};b.defaultProps={text:[],loop:!1,direction:"right",hold:5,wait:3,inTime:1,outTime:1,className:"",style:{}},t.default=b}}]);