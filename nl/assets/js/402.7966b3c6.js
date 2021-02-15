/*! For license information please see 402.7966b3c6.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[402],{2788:function(e,t,a){"use strict";var n=a(2789);e.exports=n},2789:function(e,t,a){"use strict";var n=a(481),o=a(419),i=a(709),l=a(422);e.exports=function(e,t){var a,r;if(!n(e))throw new TypeError("invalid argument. First argument must be a function. Value: `"+e+"`.");if(arguments.length<2)a=i;else if(!n(a=t))throw new TypeError("invalid argument. Hash function argument must be a function. Value: `"+a+"`.");return o(s,"cache",r={}),s;function s(){var t,n,o,i;for(t=new Array(arguments.length),i=0;i<arguments.length;i++)t[i]=arguments[i];return o=a(t).toString(),l(r,o)?r[o]:(n=e.apply(null,t),r[o]=n,n)}}},4082:function(e,t,a){"use strict";a(425),a(424),a(403),a(565),a(689);var n=a(450),o=a.n(n),i=a(589),l=a.n(i);t.a=function(e,t){for(var a=[],n=0;n<e.length;n++){var i=t[e[n]];if(i)for(var r=new Set,s=0;s<i.length;s++){var u=i[s];if(l()(u)||o()(u)||""===u||r.add(u),r.size>2)break;s===i.length-1&&a.push(e[n])}}return a}},492:function(e,t,a){"use strict";var n=a(400),o=a.n(n),i=(a(0),a(396),a(428)),l=a(529),r=a(522),s=a(515),u=a(587),d=o()(i.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,o()("div",{className:"fa fa-question"}));t.a=function(e){var t=o()(l.a,{id:"popover-positioned-right"},void 0,o()(r.a,{},void 0,e.title),o()(s.a,{},void 0,e.content));return o()(u.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:t},void 0,d)}},6340:function(e,t,a){"use strict";a.r(t);var n=a(400),o=a.n(n),i=a(453),l=a.n(i),r=a(0),s=(a(396),a(428)),u=a(465),d=a(495),c=a(455),f=a(2788),v=a.n(f),p=a(482),g=a.n(p),h=a(503),b=a(518),m=a(502),w=a(1467),y=a(462),S=a(492),T=a(4082),C=v()(T.a,(function(e){return"".concat(e[0],"-").concat(g()(e[1]))})),j=o()(m.a,{raw:"\\alpha"}),O=function(e){var t=e.quantitative,a=e.categorical,n=e.data,i=e.t,f=Object(r.useState)(null),v=l()(f,2),p=v[0],g=v[1],m=Object(r.useState)(null),T=l()(m,2),O=T[0],V=T[1],x=Object(r.useState)(null),k=l()(x,2),q=k[0],D=k[1],P=Object(r.useState)(0),z=l()(P,2),A=z[0],E=z[1],M=Object(r.useState)("two-sided"),N=l()(M,2),H=N[0],J=N[1],Z=Object(r.useState)(.05),B=l()(Z,2),F=B[0],Y=B[1],G=Object(r.useState)("T Test"),I=l()(G,2),K=I[0],L=I[1],Q=Object(r.useState)(null),R=l()(Q,2),U=R[0],W=R[1],X=Object(r.useState)(null),$=l()(X,2),_=$[0],ee=$[1],te=Object(r.useState)([]),ae=l()(te,2),ne=ae[0],oe=ae[1];Object(r.useEffect)((function(){oe(C(a,n))}),[a,n]);return o()(u.a,{style:{fontSize:"14px"}},void 0,o()(u.a.Header,{as:"h4"},void 0,i("Two-Sample Mean Test"),o()(S.a,{title:i("Two-Sample Mean Test"),content:i("Two-Sample Mean Test-description")})),o()(u.a.Body,{},void 0,o()(b.a,{legend:i("type-of-test"),defaultValue:K,options:["T Test","Z Test"],onChange:L}),o()(b.a,{legend:i("variable"),defaultValue:p,options:t,onChange:g}),o()(c.a,{},void 0,o()(d.a,{md:5},void 0,o()(b.a,{legend:i("groups"),options:ne,defaultValue:O,clearable:!0,onChange:function(e){D(null),V(e)}})),o()(d.a,{md:2},void 0,o()("p",{},void 0,i("or"))),o()(d.a,{md:5},void 0,o()(b.a,{legend:i("second-variable"),options:t,defaultValue:q,clearable:!0,onChange:function(e){D(e),V(null)}}))),"Z Test"===K?o()(c.a,{},void 0,o()(d.a,{},void 0,o()(h.b,{legend:i("1st-stdev"),defaultValue:U||1,step:"any",min:0,onChange:W})),o()(d.a,{},void 0,o()(h.b,{legend:i("2nd-stdev"),defaultValue:_||1,step:"any",min:0,onChange:ee,tooltipPlacement:"top"}))):null,o()(c.a,{},void 0,o()(d.a,{},void 0,o()(h.b,{legend:i("difference-h0"),defaultValue:A,step:"any",onChange:E})),o()(d.a,{},void 0,o()(h.b,{legend:o()("span",{},void 0,i("significance-level"),j),defaultValue:F,min:0,max:1,step:"any",onChange:Y,tooltipPlacement:"bottom"}))),o()(b.a,{legend:i("direction"),defaultValue:H,options:["less","greater","two-sided"],onChange:J,menuPlacement:"top"}),o()(s.a,{variant:"primary",block:!0,onClick:function(){var t=e.data,a=e.showDecision;if(!q&&!O)return e.session.addNotification({title:i("action-required"),message:i("select-grouping-or-second-variable",{var:p}),level:"warning",position:"tr"});var n=o()(w.a,{x:p,group:O,y:q,diff:A,direction:H,alpha:F,type:K,xstdev:U,ystdev:_,data:t,showDecision:a});e.logAction(y.Y,{x:p,group:O,y:q,diff:A,direction:H,alpha:F,showDecision:a}),e.onCreated(n)},disabled:!O&&!q||!p},void 0,i("calculate"))))};O.defaultProps={categorical:null,logAction:function(){},showDecision:!0},t.default=O}}]);