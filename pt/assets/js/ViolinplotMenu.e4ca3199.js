(window.webpackJsonp=window.webpackJsonp||[]).push([[1180],{486:function(a,e,o){"use strict";var t=o(407),n=o.n(t),i=(o(0),o(404),o(424)),l=o(513),r=o(511),s=o(507),u=o(546),d=n()(i.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,n()("div",{className:"fa fa-question"}));e.a=function(a){var e=n()(l.a,{id:"popover-positioned-right"},void 0,n()(r.a,{},void 0,a.title),n()(s.a,{},void 0,a.content));return n()(u.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:e},void 0,d)}},6389:function(a,e,o){"use strict";o.r(e);var t=o(407),n=o.n(t),i=o(456),l=o.n(i),r=o(0),s=(o(404),o(508)),u=o(552),d=o(636),c=o(680),p=o(1147),v=o(462),f=o(486),g=function(a){var e=a.data,o=a.variables,t=a.defaultValue,i=a.groupingVariables,g=a.t,b=a.session,h=a.logAction,w=a.onCreated,V=Object(r.useState)(!1),m=l()(V,2),C=m[0],P=m[1];return n()(d.a,{autoStart:!1,title:n()("span",{},void 0,g("Violin Plot"),n()(f.a,{title:g("Violin Plot"),content:""})),onGenerate:function(a,o){var t=Object(c.a)(6),i={variable:a,group:o,plotId:t},l=n()(p.a,{id:t,variable:a,group:o,data:e,onShare:function(){b.addNotification({title:g("plot-shared"),message:g("plot-shared-message"),level:"success",position:"tr"}),h(v.P,i)},action:i,showBox:C});h(v.bb,i),w(l)}},void 0,n()(s.a,{legend:g("variable"),defaultValue:t||o[0],options:o}),n()(s.a,{legend:g("group-by"),options:i,clearable:!0}),n()(u.a,{legend:g("show-boxplot"),defaultValue:C,onChange:function(){P(!C)}}))};g.defaultProps={defaultValue:null,groupingVariables:null,logAction:function(){},onCreated:function(){}},e.default=g}}]);