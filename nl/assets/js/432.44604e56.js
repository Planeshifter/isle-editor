(window.webpackJsonp=window.webpackJsonp||[]).push([[432],{492:function(e,a,t){"use strict";var n=t(400),o=t.n(n),i=(t(0),t(396),t(428)),l=t(529),s=t(522),d=t(515),u=t(587),c=o()(i.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,o()("div",{className:"fa fa-question"}));a.a=function(e){var a=o()(l.a,{id:"popover-positioned-right"},void 0,o()(s.a,{},void 0,e.title),o()(d.a,{},void 0,e.content));return o()(u.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:a},void 0,c)}},6339:function(e,a,t){"use strict";t.r(a);var n=t(400),o=t.n(n),i=t(453),l=t.n(i),s=t(0),d=(t(396),t(465)),u=t(428),c=t(495),r=t(455),v=t(503),p=t(518),f=t(502),g=t(1461),h=t(462),m=t(492),b=o()("span",{},void 0,o()(f.a,{raw:"H_0"})," mean value (",o()(f.a,{raw:"\\mu_0"}),")"),w=o()(f.a,{raw:"\\alpha"}),y=function(e){var a=e.data,t=e.showDecision,n=e.quantitative,i=e.t,f=Object(s.useState)("T Test"),y=l()(f,2),S=y[0],C=y[1],O=Object(s.useState)(null),T=l()(O,2),j=T[0],V=T[1],D=Object(s.useState)(0),k=l()(D,2),q=k[0],M=k[1],P=Object(s.useState)("two-sided"),x=l()(P,2),z=x[0],A=x[1],H=Object(s.useState)(.05),J=l()(H,2),N=J[0],Z=J[1],_=Object(s.useState)(null),B=l()(_,2),W=B[0],E=B[1],F=o()(g.a,{data:a,variable:j,showDecision:t,mu0:q,direction:z,stdev:W,type:S,alpha:N});return o()(d.a,{style:{fontSize:"14px"}},void 0,o()(d.a.Header,{as:"h4"},void 0,i("One-Sample Mean Test"),o()(m.a,{title:i("One-Sample Mean Test"),content:i("One-Sample Mean Test-description")})),o()(d.a.Body,{},void 0,o()(p.a,{legend:i("type-of-test"),defaultValue:S,options:["T Test","Z Test"],onChange:C}),o()(p.a,{legend:i("variable"),defaultValue:null,options:n,onChange:V}),"Z Test"===S?o()(v.b,{legend:i("Standard Deviation"),defaultValue:W,step:"any",min:0,onChange:E,inputStyle:{width:140}}):null,o()(r.a,{},void 0,o()(c.a,{},void 0,o()(v.b,{legend:b,defaultValue:q,step:"any",onChange:M})),o()(c.a,{},void 0,o()(v.b,{legend:o()("span",{},void 0,i("significance-level"),w),defaultValue:N,min:0,max:1,tooltipPlacement:"left",step:"any",onChange:Z}))),o()(p.a,{legend:i("direction"),defaultValue:z,options:["less","greater","two-sided"],onChange:A,menuPlacement:"top"}),o()(u.a,{variant:"primary",block:!0,onClick:function(){var a=F;e.logAction(h.W,{variable:j,mu0:q,direction:z,alpha:N,type:S,stdev:W,showDecision:t}),e.onCreated(a)},disabled:!j},void 0,i("calculate"))))};y.defaultProps={logAction:function(){},showDecision:!0},a.default=y}}]);