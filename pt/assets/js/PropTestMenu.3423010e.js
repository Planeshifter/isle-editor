(window.webpackJsonp=window.webpackJsonp||[]).push([[843],{486:function(e,a,t){"use strict";var n=t(407),o=t.n(n),i=(t(0),t(404),t(424)),s=t(513),l=t(511),c=t(507),r=t(546),d=o()(i.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,o()("div",{className:"fa fa-question"}));a.a=function(e){var a=o()(s.a,{id:"popover-positioned-right"},void 0,o()(l.a,{},void 0,e.title),o()(c.a,{},void 0,e.content));return o()(r.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:a},void 0,d)}},6376:function(e,a,t){"use strict";t.r(a);var n=t(407),o=t.n(n),i=t(456),s=t.n(i),l=t(0),c=(t(404),t(465)),r=t(424),d=t(490),u=t(508),p=t(494),v=t(1365),f=t(944),g=t(462),b=t(486),h=o()(p.a,{raw:"p_0"}),w=o()(p.a,{raw:"\\alpha"}),m=function(e){var a=e.data,t=e.categorical,n=e.showDecision,i=e.t,p=Object(l.useState)(null),m=s()(p,2),O=m[0],S=m[1],C=Object(l.useState)(null),j=s()(C,2),y=j[0],V=j[1],k=Object(l.useState)(.5),D=s()(k,2),P=D[0],x=D[1],T=Object(l.useState)("two-sided"),q=s()(T,2),z=q[0],A=q[1],J=Object(l.useState)(.05),N=s()(J,2),B=N[0],H=N[1],X=Object(l.useState)(null),_=s()(X,2),E=_[0],F=_[1],G=o()(v.a,{data:a,variable:O,success:y,p0:P,direction:z,alpha:B,showDecision:n});return o()(c.a,{style:{fontSize:"14px"}},void 0,o()(c.a.Header,{as:"h4"},void 0,i("One-Sample Proportion Test"),o()(b.a,{title:i("One-Sample Proportion Test"),content:i("One-Sample Proportion Test-description")})),o()(c.a.Body,{},void 0,o()(u.a,{legend:i("variable"),defaultValue:O,options:t,onChange:function(a){var t=e.data[a],n=Object(f.a)(t,a);F(n),S(a),V(n[0])}}),E?o()(u.a,{legend:"".concat(i("success"),":"),defaultValue:y,options:E,onChange:V}):null,o()(d.b,{legend:h,defaultValue:P,min:.001,max:.999,step:"any",onChange:x}),o()(u.a,{legend:i("direction"),defaultValue:z,options:["less","greater","two-sided"],onChange:A}),o()(d.b,{legend:o()("span",{},void 0,i("significance-level"),w),defaultValue:B,min:0,max:1,step:"any",onChange:H}),o()(r.a,{variant:"primary",block:!0,onClick:function(){var a=G;e.logAction(g.X,{variable:O,success:y,p0:P,direction:z,alpha:B,showDecision:n}),e.onCreated(a)},disabled:!O},void 0,i("calculate"))))};m.defaultProps={categorical:null,logAction:function(){},showDecision:!0},a.default=m}}]);