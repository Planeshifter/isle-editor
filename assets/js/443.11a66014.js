(window.webpackJsonp=window.webpackJsonp||[]).push([[443],{492:function(a,e,o){"use strict";var t=o(400),n=o.n(t),i=(o(0),o(396),o(428)),l=o(529),r=o(522),s=o(515),u=o(587),d=n()(i.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,n()("div",{className:"fa fa-question"}));e.a=function(a){var e=n()(l.a,{id:"popover-positioned-right"},void 0,n()(r.a,{},void 0,a.title),n()(s.a,{},void 0,a.content));return n()(u.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:e},void 0,d)}},6354:function(a,e,o){"use strict";o.r(e);var t=o(400),n=o.n(t),i=o(453),l=o.n(i),r=o(0),s=(o(396),o(518)),u=o(595),d=o(711),c=o(791),p=o(1249),v=o(462),f=o(492),g=function(a){var e=a.data,o=a.variables,t=a.defaultValue,i=a.groupingVariables,g=a.t,b=a.session,h=a.logAction,w=a.onCreated,V=Object(r.useState)(!1),m=l()(V,2),C=m[0],P=m[1];return n()(d.a,{autoStart:!1,title:n()("span",{},void 0,g("Violin Plot"),n()(f.a,{title:g("Violin Plot"),content:""})),onGenerate:function(a,o){var t=Object(c.a)(6),i={variable:a,group:o,plotId:t},l=n()(p.a,{id:t,variable:a,group:o,data:e,onShare:function(){b.addNotification({title:g("plot-shared"),message:g("plot-shared-message"),level:"success",position:"tr"}),h(v.P,i)},action:i,showBox:C});h(v.bb,i),w(l)}},void 0,n()(s.a,{legend:g("variable"),defaultValue:t||o[0],options:o}),n()(s.a,{legend:g("group-by"),options:i,clearable:!0}),n()(u.a,{legend:g("show-boxplot"),defaultValue:C,onChange:function(){P(!C)}}))};g.defaultProps={defaultValue:null,groupingVariables:null,logAction:function(){},onCreated:function(){}},e.default=g}}]);