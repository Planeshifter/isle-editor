(window.webpackJsonp=window.webpackJsonp||[]).push([[950],{485:function(e,t,a){"use strict";var o,n=a(407),i=a.n(n),l=(a(0),a(404),a(423)),s=a(514),d=a(511),r=a(505),c=a(548);t.a=function(e){var t=i()(s.a,{id:"popover-positioned-right"},void 0,i()(d.a,{},void 0,e.title),i()(r.a,{},void 0,e.content));return i()(c.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:t},void 0,o||(o=i()(l.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,i()("div",{className:"fa fa-question"}))))}},6325:function(e,t,a){"use strict";a.r(t);var o=a(407),n=a.n(o),i=a(448),l=a.n(i),s=a(0),d=(a(404),a(423)),r=a(464),c=a(471),g=a.n(c),u=a(447),p=a.n(u),h=a(557),f=a(508),v=a(581),b=a(667),y=a(1151),m=a(458),w=a(485),S=function(e){var t=e.variables,a=e.groupingVariables,o=e.defaultX,i=e.defaultY,c=e.t,u=Object(s.useState)(o||t[0]),S=l()(u,2),C=S[0],O=S[1],j=Object(s.useState)(i||t[1]),x=l()(j,2),L=x[0],V=x[1],R=Object(s.useState)(null),k=l()(R,2),z=k[0],A=k[1],B=Object(s.useState)(null),N=l()(B,2),q=N[0],J=N[1],M=Object(s.useState)(null),P=l()(M,2),X=P[0],Y=P[1],E=Object(s.useState)(null),H=l()(E,2),I=H[0],W=H[1],D=Object(s.useState)(!1),F=l()(D,2),G=F[0],K=F[1],Q=Object(s.useState)(["linear"]),T=l()(Q,2),U=T[0],Z=T[1],$=Object(s.useState)(null),_=l()($,2),ee=_[0],te=_[1],ae=Object(s.useState)(.66),oe=l()(ae,2),ne=oe[0],ie=oe[1];return n()(r.a,{style:{minWidth:650}},void 0,n()(r.a.Header,{as:"h4"},void 0,c("Scatterplot"),n()(w.a,{title:c("Scatterplot"),content:c("Scatterplot-description")})),n()(r.a.Body,{},void 0,n()("div",{style:{width:"100%"}},void 0,n()(f.a,{legend:c("x-axis"),defaultValue:C,options:t,style:{float:"left",paddingRight:10,width:"33.3%"},onChange:O}),n()(f.a,{legend:c("y-axis"),defaultValue:L,style:{float:"left",paddingLeft:10,paddingRight:10,width:"33.3%"},options:t,onChange:V}),n()(f.a,{legend:"".concat(c("labels"),":"),style:{float:"left",paddingLeft:10,width:"33.3%"},clearable:!0,options:a,onChange:W})),n()("div",{style:{width:"100%"}},void 0,n()(f.a,{legend:"".concat(c("color"),":"),options:a,clearable:!0,style:{float:"left",paddingRight:10,width:"33.3%"},onChange:A}),n()(f.a,{legend:"".concat(c("type"),":"),options:a,clearable:!0,style:{float:"left",paddingLeft:10,paddingRight:10,width:"33.3%"},onChange:J}),n()(f.a,{legend:"".concat(c("size"),":"),options:t,clearable:!0,style:{float:"left",paddingLeft:10,width:"33.3%"},onChange:Y})),n()("div",{style:{clear:"both"}}),n()("div",{style:{opacity:e.showRegressionOption?1:0}},void 0,n()(h.a,{inline:!0,legend:c("show-regression-model"),defaultValue:!1,onChange:function(){K(!G)}}),n()("div",{style:{width:"100%"}},void 0,n()(f.a,{legend:"".concat(c("method"),":"),defaultValue:"linear",multi:!0,options:["linear","smooth"],style:{float:"right",paddingLeft:10,width:"45%"},disabled:!G,onChange:function(e){p()(e)||(e=[e]),Z(e)}}),n()(f.a,{legend:"".concat(c("split-by"),":"),options:e.groupingVariables,clearable:!0,style:{float:"right",paddingLeft:10,width:"45%"},disabled:!G,onChange:te}),n()(v.a,{legend:c("smoothing-parameter"),disabled:!g()(U,"smooth"),min:.01,max:1,step:.01,defaultValue:.66,onChange:ie}))),n()("div",{style:{clear:"both"}}),n()(d.a,{variant:"primary",block:!0,onClick:function(){var t=Object(b.a)(6),a={xval:C,yval:L,plotId:t};z&&(a.color=z),q&&(a.type=q),X&&(a.size=X),I&&(a.text=I),G&&(a.regressionLine=G,a.regressionMethod=U),g()(U,"smooth")&&(a.smoothSpan=ne),ee&&(a.lineBy=ee);var o=n()(y.a,{data:e.data,xval:C,yval:L,color:z,type:q,size:X,text:I,regressionLine:G,regressionMethod:U,lineBy:ee,smoothSpan:ne,id:t,action:a,onSelected:e.onSelected,onShare:function(){e.session.addNotification({title:c("plot-shared"),message:c("plot-shared-message"),level:"success",position:"tr"}),e.logAction(m.P,a)}});e.logAction(m.E,a),e.onCreated(o)}},void 0,c("generate"))))};S.defaultProps={defaultX:null,defaultY:null,groupingVariables:null,logAction:function(){},onSelected:function(){},showRegressionOption:!0},t.default=S}}]);