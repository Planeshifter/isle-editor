(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{486:function(e,o,a){"use strict";var t=a(407),n=a.n(t),i=(a(0),a(404),a(424)),s=a(513),r=a(511),d=a(507),l=a(546),u=n()(i.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,n()("div",{className:"fa fa-question"}));o.a=function(e){var o=n()(s.a,{id:"popover-positioned-right"},void 0,n()(r.a,{},void 0,e.title),n()(d.a,{},void 0,e.content));return n()(l.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:o},void 0,u)}},6390:function(e,o,a){"use strict";a.r(o);var t=a(407),n=a.n(t),i=a(456),s=a.n(i),r=a(0),d=(a(404),a(424)),l=a(465),u=a(476),c=a(493),v=a(470),p=a.n(v),h=a(446),g=a.n(h),f=a(552),m=a(1139),b=a(508),C=a(582),y=a(680),S=a(462),j=a(486),w=function(e){var o=Object(r.useState)(e.variables[0]),a=s()(o,2),t=a[0],i=a[1],v=Object(r.useState)(e.variables[1]),h=s()(v,2),w=h[0],x=h[1],O=Object(r.useState)(!1),k=s()(O,2),P=k[0],V=k[1],N=Object(r.useState)([]),q=s()(N,2),A=q[0],J=q[1],M=Object(r.useState)(.66),z=s()(M,2),B=z[0],F=z[1],H=e.variables,I=e.t;return n()(l.a,{},void 0,n()(l.a.Header,{as:"h4"},void 0,I("Contour Chart"),n()(j.a,{title:I("Contour Chart"),content:I("Contour Chart-description")})),n()(l.a.Body,{},void 0,n()(u.a,{},void 0,n()(c.a,{},void 0,n()(b.a,{legend:I("x-axis-variable"),defaultValue:t,options:H,onChange:i})),n()(c.a,{},void 0,n()(b.a,{legend:I("y-axis-variable"),defaultValue:w,options:H,menuPlacement:"top",onChange:x}))),n()(u.a,{},void 0,n()(c.a,{},void 0,n()(f.a,{legend:I("overlay-observations"),defaultValue:P,onChange:function(){V(!P)}}))),n()(u.a,{},void 0,n()(c.a,{},void 0,n()(b.a,{legend:I("overlay-regression-line"),multi:!0,options:["linear","smooth"],onChange:function(e){g()(e)||(e=[e]),J(e)}}))),n()(u.a,{},void 0,n()(c.a,{},void 0,n()(C.a,{legend:I("smoothing-parameter"),min:.01,max:1,step:.01,defaultValue:B,disabled:!p()(A,"smooth"),onChange:F}))),n()(d.a,{variant:"primary",block:!0,onClick:function(){var o=e.data,a=e.onCreated,i=e.onSelected,s=e.logAction,r=e.session,d=e.t,l=Object(y.a)(6),u={x:t,y:w,overlayPoints:P,regressionMethod:A,smoothSpan:B,plotId:l},c=n()(m.a,{id:l,action:u,data:o,onShare:function(){r.addNotification({title:d("plot-shared"),message:d("plot-shared-message"),level:"success",position:"tr"}),s(S.F,u)},x:t,y:w,overlayPoints:P,regressionMethod:A,smoothSpan:B,onSelected:i});s(S.h,u),a(c)}},void 0,I("generate"))))};w.defaultProps={logAction:function(){},onSelected:function(){}},o.default=w}}]);