(window.webpackJsonp=window.webpackJsonp||[]).push([[738],{486:function(a,o,e){"use strict";var t=e(407),i=e.n(t),n=(e(0),e(404),e(424)),l=e(513),s=e(511),d=e(507),r=e(546),c=i()(n.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,i()("div",{className:"fa fa-question"}));o.a=function(a){var o=i()(l.a,{id:"popover-positioned-right"},void 0,i()(s.a,{},void 0,a.title),i()(d.a,{},void 0,a.content));return i()(r.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:o},void 0,c)}},6383:function(a,o,e){"use strict";e.r(o);var t=e(407),i=e.n(t),n=(e(0),e(404),e(476)),l=e(493),s=e(508),d=e(636),r=e(552),c=e(680),u=e(1336),p=e(462),v=e(486),g=["world","usa","europe","asia","africa","north america","south america"],f=["ISO-3","USA-states","country names"],b=i()("hr",{}),h=function(a){var o=a.variables,e=a.groupingVariables,t=a.t;return i()(d.a,{autoStart:!1,title:i()("span",{},void 0,t("Map"),i()(v.a,{title:t("Map"),content:t("Map-description")})),onGenerate:function(o,e,n,l,s,d,r){var v=Object(c.a)(6),g={variable:r,longitude:s,latitude:d,locations:o,scope:n,showLand:l,plotId:v},f=i()(u.a,{data:a.data,variable:r,locations:o,longitude:s,latitude:d,locationmode:e,scope:n,showLand:l,id:v,action:g,onShare:function(){a.session.addNotification({title:t("plot-shared"),message:t("plot-shared-message"),level:"success",position:"tr"}),a.logAction(p.J,g)}});a.logAction(p.u,g),a.onCreated(f)}},void 0,i()(n.a,{},void 0,i()(l.a,{},void 0,i()(s.a,{legend:t("locations"),options:e,clearable:!0})),i()(l.a,{},void 0,i()(s.a,{legend:t("location-encoding"),options:f,defaultValue:"country names"}))),i()(n.a,{},void 0,i()(l.a,{},void 0,i()(s.a,{legend:t("scope"),defaultValue:"world",options:g})),i()(l.a,{},void 0,i()(r.a,{legend:t("show-land"),defaultValue:!1,style:{marginTop:35}}))),i()("h4",{className:"center"},void 0,t("or")),i()(n.a,{},void 0,i()(l.a,{},void 0,i()(s.a,{legend:t("longitude"),options:o,clearable:!0})),i()(l.a,{},void 0,i()(s.a,{legend:t("latitude"),options:o,clearable:!0}))),b,i()(s.a,{legend:t("variable"),options:o,clearable:!0}))};h.defaultProps={groupingVariables:null,logAction:function(){},onCreated:function(){}},o.default=h}}]);