(window.webpackJsonp=window.webpackJsonp||[]).push([[1130],{4125:function(n,t,e){"use strict";e.r(t);var c=e(407),o=e.n(c),a=e(456),r=e.n(a),i=e(0),u=(e(404),e(450)),l=e.n(u),s=e(482),v=e.n(s),f=e(452),d=e.n(f);var m=function(n){var t=d()(n/60),e=n-60*t;return t=t<10?"0".concat(t):t,e=e<10?"0".concat(e):e,"".concat(t,":").concat(e)};var b=function(n){n*=-1;var t=d()(n/60),e=n-60*t;return t=t<10?"0".concat(t):t,e=e<10?"0".concat(e):e,"-".concat(t,":").concat(e)},w=(e(372),l()("isle:timer"));function p(n){return n?"timer::".concat(n):null}var g=function(n){var t=n.id,e=n.active,c=n.duration,a=n.invisible,u=n.belowZero,l=n.legend,s=n.style,f=n.onTimeUp,d=localStorage.getItem(p(t)),g=Object(i.useState)(d||c),S=r()(g,2),j=S[0],I=S[1],O=Object(i.useState)(c),h=r()(O,2),y=h[0],k=h[1],J=Object(i.useState)(!1),T=r()(J,2),U=T[0],Z=T[1],C=Object(i.useState)(null),D=r()(C,2),E=D[0],N=D[1];if(c!==y&&(w("Duration changed since last render..."),I(c),k(c)),Object(i.useEffect)((function(){if(e&&!E){w("Starting countdown...");var n=setInterval((function(){I((function(n){var e=n-1,c=p(t);return c&&localStorage.setItem(c,e),!U&&e<=0&&(u||clearInterval(E),f(),Z(!0)),e}))}),1e3);N(n)}return function(){w("Cancel the countdown on unmount of component..."),E&&clearInterval(E)}}),[e,u,E,U,t,f]),a)return null;var P=j>0?m:b;return o()("div",{style:s,className:"timer-div ".concat(j<0?"timer-danger":"timer-info")},void 0,l,P(u?j:v()(j,0)))};g.defaultProps={id:null,belowZero:!1,invisible:!1,legend:"",style:{},onTimeUp:function(){}};t.default=g}}]);