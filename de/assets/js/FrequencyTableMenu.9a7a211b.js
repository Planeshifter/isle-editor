(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{486:function(e,a,t){"use strict";var n=t(407),o=t.n(n),l=(t(0),t(404),t(424)),i=t(513),u=t(511),r=t(507),c=t(546),d=o()(l.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,o()("div",{className:"fa fa-question"}));a.a=function(e){var a=o()(i.a,{id:"popover-positioned-right"},void 0,o()(u.a,{},void 0,e.title),o()(r.a,{},void 0,e.content));return o()(c.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:a},void 0,d)}},6357:function(e,a,t){"use strict";t.r(a);var n=t(407),o=t.n(n),l=t(456),i=t.n(l),u=t(0),r=(t(404),t(465)),c=t(424),d=t(493),s=t(476),v=t(552),p=t(508),b=t(490),f=t(1339),g=t(462),m=t(486),h=function(e){var a=e.defaultValue,t=e.variables,n=e.groupingVariables,l=e.t,h=Object(u.useState)(!1),y=i()(h,2),C=y[0],q=y[1],V=Object(u.useState)(!0),w=i()(V,2),j=w[0],k=w[1],O=Object(u.useState)(a||t[0]),S=i()(O,2),P=S[0],F=S[1],T=Object(u.useState)(null),A=i()(T,2),D=A[0],J=A[1],N=Object(u.useState)(3),R=i()(N,2),x=R[0],z=R[1];return o()(r.a,{},void 0,o()(r.a.Header,{as:"h4"},void 0,l("Frequency Table"),o()(m.a,{title:l("Frequency Table"),content:l("Frequency Table-description")})),o()(r.a.Body,{},void 0,o()(p.a,{legend:l("variable"),defaultValue:P,options:t,onChange:F}),o()(p.a,{legend:l("group-by"),options:n,clearable:!0,menuPlacement:"top",onChange:J,tooltip:l("freq-table-group-by-tooltip")}),o()(s.a,{},void 0,o()(d.a,{},void 0,o()(v.a,{legend:l("counts"),defaultValue:j,onChange:function(){k(!j)}})),o()(d.a,{},void 0,o()(v.a,{legend:l("relative-frequency"),defaultValue:C,onChange:function(){q(!C)}}))),C?o()("p",{},void 0,l("report-relative-frequencies"),o()(b.b,{inline:!0,width:50,max:16,min:0,defaultValue:x,onChange:z}),l("decimal-places")):null,o()(c.a,{variant:"primary",block:!0,onClick:function(){var a=o()(f.a,{variable:P,group:D,calculateCounts:j,calculateRelative:C,nDecimalPlaces:x,data:e.data});e.logAction(g.k,{variable:P,group:D,calculateRelative:C,calculateCounts:j,nDecimalPlaces:x}),e.onCreated(a)},disabled:!j&&!C},void 0,l("generate"))))};h.defaultProps={defaultValue:null,groupingVariables:null,logAction:function(){}},a.default=h}}]);