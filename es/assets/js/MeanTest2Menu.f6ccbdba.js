/*! For license information please see MeanTest2Menu.f6ccbdba.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[729],{2739:function(e,t,a){"use strict";var n=a(2740);e.exports=n},2740:function(e,t,a){"use strict";var n=a(477),o=a(422),i=a(629),l=a(425);e.exports=function(e,t){var a,r;if(!n(e))throw new TypeError("invalid argument. First argument must be a function. Value: `"+e+"`.");if(arguments.length<2)a=i;else if(!n(a=t))throw new TypeError("invalid argument. Hash function argument must be a function. Value: `"+a+"`.");return o(s,"cache",r={}),s;function s(){var t,n,o,i;for(t=new Array(arguments.length),i=0;i<arguments.length;i++)t[i]=arguments[i];return o=a(t).toString(),l(r,o)?r[o]:(n=e.apply(null,t),r[o]=n,n)}}},4037:function(e,t,a){"use strict";a(604),a(527),a(468),a(486),a(500);var n=a(455),o=a.n(n),i=a(558),l=a.n(i);t.a=function(e,t){for(var a=[],n=0;n<e.length;n++){var i=t[e[n]];if(i)for(var r=new Set,s=0;s<i.length;s++){var u=i[s];if(l()(u)||o()(u)||""===u||r.add(u),r.size>2)break;s===i.length-1&&a.push(e[n])}}return a}},485:function(e,t,a){"use strict";var n,o=a(407),i=a.n(o),l=(a(0),a(404),a(423)),r=a(514),s=a(511),u=a(505),d=a(548);t.a=function(e){var t=i()(r.a,{id:"popover-positioned-right"},void 0,i()(s.a,{},void 0,e.title),i()(u.a,{},void 0,e.content));return i()(d.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:t},void 0,n||(n=i()(l.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,i()("div",{className:"fa fa-question"}))))}},6313:function(e,t,a){"use strict";a.r(t);var n,o=a(407),i=a.n(o),l=a(448),r=a.n(l),s=a(0),u=(a(404),a(423)),d=a(464),c=a(491),f=a(478),v=a(2739),p=a.n(v),g=a(481),h=a.n(g),b=a(488),m=a(508),w=a(493),y=a(1352),S=a(458),T=a(485),C=a(4037),j=p()(C.a,(function(e){return"".concat(e[0],"-").concat(h()(e[1]))})),O=function(e){var t=e.quantitative,a=e.categorical,o=e.data,l=e.t,v=Object(s.useState)(null),p=r()(v,2),g=p[0],h=p[1],C=Object(s.useState)(null),O=r()(C,2),V=O[0],x=O[1],k=Object(s.useState)(null),q=r()(k,2),D=q[0],P=q[1],z=Object(s.useState)(0),A=r()(z,2),E=A[0],M=A[1],N=Object(s.useState)("two-sided"),H=r()(N,2),J=H[0],Z=H[1],B=Object(s.useState)(.05),F=r()(B,2),G=F[0],I=F[1],K=Object(s.useState)("T Test"),L=r()(K,2),Q=L[0],R=L[1],U=Object(s.useState)(null),W=r()(U,2),X=W[0],Y=W[1],$=Object(s.useState)(null),_=r()($,2),ee=_[0],te=_[1],ae=Object(s.useState)([]),ne=r()(ae,2),oe=ne[0],ie=ne[1];Object(s.useEffect)((function(){ie(j(a,o))}),[a,o]);return i()(d.a,{style:{fontSize:"14px"}},void 0,i()(d.a.Header,{as:"h4"},void 0,l("Two-Sample Mean Test"),i()(T.a,{title:l("Two-Sample Mean Test"),content:l("Two-Sample Mean Test-description")})),i()(d.a.Body,{},void 0,i()(m.a,{legend:l("type-of-test"),defaultValue:Q,options:["T Test","Z Test"],onChange:R}),i()(m.a,{legend:l("variable"),defaultValue:g,options:t,onChange:h}),i()(f.a,{},void 0,i()(c.a,{md:5},void 0,i()(m.a,{legend:l("groups"),options:oe,defaultValue:V,clearable:!0,onChange:function(e){P(null),x(e)}})),i()(c.a,{md:2},void 0,i()("p",{},void 0,l("or"))),i()(c.a,{md:5},void 0,i()(m.a,{legend:l("second-variable"),options:t,defaultValue:D,clearable:!0,onChange:function(e){P(e),x(null)}}))),"Z Test"===Q?i()(f.a,{},void 0,i()(c.a,{},void 0,i()(b.b,{legend:l("1st-stdev"),defaultValue:X||1,step:"any",min:0,onChange:Y})),i()(c.a,{},void 0,i()(b.b,{legend:l("2nd-stdev"),defaultValue:ee||1,step:"any",min:0,onChange:te,tooltipPlacement:"top"}))):null,i()(f.a,{},void 0,i()(c.a,{},void 0,i()(b.b,{legend:l("difference-h0"),defaultValue:E,step:"any",onChange:M})),i()(c.a,{},void 0,i()(b.b,{legend:i()("span",{},void 0,l("significance-level"),n||(n=i()(w.a,{raw:"\\alpha"}))),defaultValue:G,min:0,max:1,step:"any",onChange:I,tooltipPlacement:"bottom"}))),i()(m.a,{legend:l("direction"),defaultValue:J,options:["less","greater","two-sided"],onChange:Z,menuPlacement:"top"}),i()(u.a,{variant:"primary",block:!0,onClick:function(){var t=e.data,a=e.showDecision;if(!D&&!V)return e.session.addNotification({title:l("action-required"),message:l("select-grouping-or-second-variable",{var:g}),level:"warning",position:"tr"});var n=i()(y.a,{x:g,group:V,y:D,diff:E,direction:J,alpha:G,type:Q,xstdev:X,ystdev:ee,data:t,showDecision:a});e.logAction(S.ab,{x:g,group:V,y:D,diff:E,direction:J,alpha:G,showDecision:a}),e.onCreated(n)},disabled:!V&&!D||!g},void 0,l("calculate"))))};O.defaultProps={categorical:null,logAction:function(){},showDecision:!0},t.default=O}}]);