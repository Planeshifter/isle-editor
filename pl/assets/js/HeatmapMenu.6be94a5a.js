(window.webpackJsonp=window.webpackJsonp||[]).push([[372],{485:function(e,a,o){"use strict";var t,n=o(407),i=o.n(n),l=(o(0),o(404),o(423)),s=o(514),d=o(511),r=o(505),u=o(548);a.a=function(e){var a=i()(s.a,{id:"popover-positioned-right"},void 0,i()(d.a,{},void 0,e.title),i()(r.a,{},void 0,e.content));return i()(u.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:a},void 0,t||(t=i()(l.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,i()("div",{className:"fa fa-question"}))))}},6318:function(e,a,o){"use strict";o.r(a);var t=o(407),n=o.n(t),i=o(448),l=o.n(i),s=o(0),d=(o(404),o(464)),r=o(423),u=o(478),c=o(491),v=o(557),g=o(508),p=o(581),f=o(667),m=o(447),b=o.n(m),h=o(471),y=o.n(h),S=o(1119),C=o(458),x=o(485),j=function(e){var a=e.variables,o=e.groupingVariables,t=e.defaultX,i=e.defaultY,m=e.t,h=Object(s.useState)(t||a[0]),j=l()(h,2),O=j[0],V=j[1],w=Object(s.useState)(i||a[1]),A=l()(w,2),M=A[0],k=A[1],H=Object(s.useState)(null),P=l()(H,2),N=P[0],X=P[1],Y=Object(s.useState)(!1),q=l()(Y,2),I=q[0],J=q[1],z=Object(s.useState)(!1),B=l()(z,2),D=B[0],E=B[1],F=Object(s.useState)(!1),G=l()(F,2),K=G[0],L=G[1],Q=Object(s.useState)(!1),R=l()(Q,2),T=R[0],U=R[1],W=Object(s.useState)([]),Z=l()(W,2),$=Z[0],_=Z[1],ee=Object(s.useState)(.66),ae=l()(ee,2),oe=ae[0],te=ae[1];return n()(d.a,{},void 0,n()(d.a.Header,{as:"h4"},void 0,m("Heat Map"),n()(x.a,{title:m("Heat Map"),content:m("Heat Map-description")})),n()(d.a.Body,{},void 0,n()(u.a,{},void 0,n()(c.a,{},void 0,n()(g.a,{legend:m("x-axis-variable"),defaultValue:O,options:a,onChange:V})),n()(c.a,{},void 0,n()(g.a,{legend:m("y-axis-variable"),defaultValue:M,options:a,onChange:k}))),n()(u.a,{},void 0,n()(c.a,{},void 0,n()(g.a,{legend:m("group-by"),options:o,clearable:!0,onChange:X,menuPlacement:"top"}))),n()(u.a,{},void 0,n()(c.a,{},void 0,n()(v.a,{legend:m("common-x-axis"),defaultValue:D,onChange:E,disabled:!N,style:{opacity:N?1:0,float:"left"}})),n()(c.a,{},void 0,n()(v.a,{legend:m("common-y-axis"),defaultValue:K,onChange:L,disabled:!N,style:{opacity:N?1:0,float:"left"}}))),n()(u.a,{},void 0,n()(c.a,{},void 0,n()(v.a,{legend:m("overlay-observations"),defaultValue:I,onChange:J})),n()(c.a,{},void 0,n()(v.a,{legend:m("alternate-color-scheme"),defaultValue:T,onChange:U}))),n()(u.a,{},void 0,n()(c.a,{},void 0,n()(g.a,{legend:m("overlay-regression-line"),multi:!0,options:["linear","smooth"],onChange:function(e){b()(e)||(e=[e]),_(e)}}))),n()(u.a,{},void 0,n()(c.a,{},void 0,n()(p.a,{legend:m("smoothing-parameter"),disabled:!y()($,"smooth"),min:.01,max:1,step:.01,defaultValue:oe,onChange:te}))),n()(r.a,{variant:"primary",block:!0,onClick:function(){var a=Object(f.a)(6),o={x:O,y:M,overlayPoints:I,regressionMethod:$,plotId:a},t=n()(S.a,{id:a,data:e.data,x:O,y:M,group:N,overlayPoints:I,commonXAxis:D,commonYAxis:K,alternateColor:T,regressionMethod:$,smoothSpan:oe,action:o,onShare:function(){e.session.addNotification({title:m("plot-shared"),message:m("plot-shared-message"),level:"success",position:"tr"}),e.logAction(C.I,o)},onSelected:e.onSelected});e.logAction(C.o,o),e.onCreated(t)}},void 0,m("generate"))))};j.defaultProps={defaultX:null,defaultY:null,groupingVariables:null,logAction:function(){},onSelected:function(){}},a.default=j}}]);