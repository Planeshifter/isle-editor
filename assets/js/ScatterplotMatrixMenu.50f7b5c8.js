(window.webpackJsonp=window.webpackJsonp||[]).push([[947],{486:function(e,t,o){"use strict";var a=o(407),n=o.n(a),i=(o(0),o(404),o(424)),r=o(513),l=o(511),s=o(507),c=o(546),d=n()(i.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,n()("div",{className:"fa fa-question"}));t.a=function(e){var t=n()(r.a,{id:"popover-positioned-right"},void 0,n()(l.a,{},void 0,e.title),n()(s.a,{},void 0,e.content));return n()(c.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:t},void 0,d)}},6388:function(e,t,o){"use strict";o.r(t);var a=o(407),n=o.n(a),i=o(456),r=o.n(i),l=o(0),s=(o(404),o(424)),c=o(465),d=o(680),u=o(508),v=o(1146),p=o(462),g=o(486),b=function(e){var t=e.data,o=e.t,a=Object(l.useState)(null),i=r()(a,2),b=i[0],f=i[1],h=Object(l.useState)(null),S=r()(h,2),m=S[0],w=S[1];return n()(c.a,{},void 0,n()(c.a.Header,{as:"h4"},void 0,o("Scatterplot Matrix"),n()(g.a,{title:o("Scatterplot Matrix"),content:o("Scatterplot Matrix-description")})),n()(c.a.Body,{},void 0,n()(u.a,{legend:o("variables"),options:e.variables,multi:!0,onChange:f}),n()(u.a,{legend:"".concat(o("color"),":"),options:e.groupingVariables,clearable:!0,onChange:w}),n()(s.a,{variant:"primary",block:!0,onClick:function(){var a=Object(d.a)(6),i={variables:b,color:m,plotId:a},r=n()(v.a,{id:a,data:t,variables:b,color:m,action:i,onShare:function(){e.session.addNotification({title:o("plot-shared"),message:o("plot-shared-message"),level:"success",position:"tr"}),e.logAction(p.O,i)},onSelected:e.onSelected});e.logAction(p.Q,i),e.onCreated(r)},disabled:!b||b.length<2},void 0,o("generate"))))};b.defaultProps={groupingVariables:null,logAction:function(){},onSelected:function(){}},t.default=b}}]);