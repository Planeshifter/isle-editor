(window.webpackJsonp=window.webpackJsonp||[]).push([[426],{492:function(e,a,o){"use strict";var t=o(400),n=o.n(t),i=(o(0),o(396),o(428)),l=o(529),s=o(522),d=o(515),r=o(587),u=n()(i.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,n()("div",{className:"fa fa-question"}));a.a=function(e){var a=n()(l.a,{id:"popover-positioned-right"},void 0,n()(s.a,{},void 0,e.title),n()(d.a,{},void 0,e.content));return n()(r.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:a},void 0,u)}},6345:function(e,a,o){"use strict";o.r(a);var t=o(400),n=o.n(t),i=o(453),l=o.n(i),s=o(0),d=(o(396),o(465)),r=o(428),u=o(455),c=o(495),v=o(595),g=o(518),p=o(642),f=o(791),m=o(440),b=o.n(m),h=o(470),y=o.n(h),S=o(1242),C=o(462),x=o(492),j=function(e){var a=e.variables,o=e.groupingVariables,t=e.defaultX,i=e.defaultY,m=e.t,h=Object(s.useState)(t||a[0]),j=l()(h,2),O=j[0],V=j[1],w=Object(s.useState)(i||a[1]),A=l()(w,2),M=A[0],k=A[1],H=Object(s.useState)(null),P=l()(H,2),N=P[0],X=P[1],Y=Object(s.useState)(!1),q=l()(Y,2),J=q[0],z=q[1],B=Object(s.useState)(!1),G=l()(B,2),I=G[0],D=G[1],E=Object(s.useState)(!1),F=l()(E,2),K=F[0],L=F[1],Q=Object(s.useState)(!1),R=l()(Q,2),T=R[0],U=R[1],W=Object(s.useState)([]),Z=l()(W,2),$=Z[0],_=Z[1],ee=Object(s.useState)(.66),ae=l()(ee,2),oe=ae[0],te=ae[1];return n()(d.a,{},void 0,n()(d.a.Header,{as:"h4"},void 0,m("Heat Map"),n()(x.a,{title:m("Heat Map"),content:m("Heat Map-description")})),n()(d.a.Body,{},void 0,n()(u.a,{},void 0,n()(c.a,{},void 0,n()(g.a,{legend:m("x-axis-variable"),defaultValue:O,options:a,onChange:V})),n()(c.a,{},void 0,n()(g.a,{legend:m("y-axis-variable"),defaultValue:M,options:a,onChange:k}))),n()(u.a,{},void 0,n()(c.a,{},void 0,n()(g.a,{legend:m("group-by"),options:o,clearable:!0,onChange:X,menuPlacement:"top"}))),n()(u.a,{},void 0,n()(c.a,{},void 0,n()(v.a,{legend:m("common-x-axis"),defaultValue:I,onChange:D,disabled:!N,style:{opacity:N?1:0,float:"left"}})),n()(c.a,{},void 0,n()(v.a,{legend:m("common-y-axis"),defaultValue:K,onChange:L,disabled:!N,style:{opacity:N?1:0,float:"left"}}))),n()(u.a,{},void 0,n()(c.a,{},void 0,n()(v.a,{legend:m("overlay-observations"),defaultValue:J,onChange:z})),n()(c.a,{},void 0,n()(v.a,{legend:m("alternate-color-scheme"),defaultValue:T,onChange:U}))),n()(u.a,{},void 0,n()(c.a,{},void 0,n()(g.a,{legend:m("overlay-regression-line"),multi:!0,options:["linear","smooth"],onChange:function(e){b()(e)||(e=[e]),_(e)}}))),n()(u.a,{},void 0,n()(c.a,{},void 0,n()(p.a,{legend:m("smoothing-parameter"),disabled:!y()($,"smooth"),min:.01,max:1,step:.01,defaultValue:oe,onChange:te}))),n()(r.a,{variant:"primary",block:!0,onClick:function(){var a=Object(f.a)(6),o={x:O,y:M,overlayPoints:J,regressionMethod:$,plotId:a},t=n()(S.a,{id:a,data:e.data,x:O,y:M,group:N,overlayPoints:J,commonXAxis:I,commonYAxis:K,alternateColor:T,regressionMethod:$,smoothSpan:oe,action:o,onShare:function(){e.session.addNotification({title:m("plot-shared"),message:m("plot-shared-message"),level:"success",position:"tr"}),e.logAction(C.G,o)},onSelected:e.onSelected});e.logAction(C.m,o),e.onCreated(t)}},void 0,m("generate"))))};j.defaultProps={defaultX:null,defaultY:null,groupingVariables:null,logAction:function(){},onSelected:function(){}},a.default=j}}]);