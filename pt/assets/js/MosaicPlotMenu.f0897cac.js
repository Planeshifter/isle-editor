(window.webpackJsonp=window.webpackJsonp||[]).push([[756],{486:function(o,t,e){"use strict";var a=e(407),i=e.n(a),n=(e(0),e(404),e(424)),s=e(513),l=e(511),r=e(507),c=e(546),d=i()(n.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,i()("div",{className:"fa fa-question"}));t.a=function(o){var t=i()(s.a,{id:"popover-positioned-right"},void 0,i()(l.a,{},void 0,o.title),i()(r.a,{},void 0,o.content));return i()(c.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:t},void 0,d)}},6384:function(o,t,e){"use strict";e.r(t);var a=e(407),i=e.n(a),n=(e(0),e(404),e(552)),s=e(508),l=e(636),r=e(680),c=e(1144),d=e(462),u=e(486),v=["parallel to the axis","horizontal","perpendicular to the axis","vertical"],p=function(o){var t=o.data,e=o.variables,a=o.session,p=o.t,f=o.logAction,h=o.onCreated,g=o.onPlotDone;return i()(l.a,{autoStart:!1,title:i()("span",{},void 0,p("Mosaic Plot"),i()(u.a,{title:p("Mosaic Plot"),content:p("Mosaic Plot-description")})),onGenerate:function(o,e,n){if(!o||o.length<2)return a.addNotification({title:"Select Variables",message:"You need to select at least two variables for the mosaic plot",level:"warning",position:"tr"});var s=Object(r.a)(6),l={variables:o,showColors:e,plotId:s},u=i()(c.a,{data:t,variables:o,showColors:e,axisLabels:n,id:s,action:l,onShare:function(){a.addNotification({title:p("plot-shared"),message:p("plot-shared-message"),level:"success",position:"tr"}),f(d.K,{variables:o,showColors:e,plotId:s})},onPlotDone:g});f(d.v,l),h(u)},style:{minHeight:380}},void 0,i()(s.a,{legend:p("variables"),options:e,multi:!0}),i()(n.a,{legend:p("show-colors"),defaultValue:!1}),i()(s.a,{legend:p("axis-label-rotation"),options:v}))};p.defaultProps={logAction:function(){},onPlotDone:function(){}},t.default=p}}]);