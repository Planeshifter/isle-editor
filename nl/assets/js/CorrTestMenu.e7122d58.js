(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{486:function(a,e,o){"use strict";var t=o(407),i=o.n(t),n=(o(0),o(404),o(422)),r=o(510),s=o(509),l=o(506),d=o(534),c=i()(n.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,i()("div",{className:"fa fa-question"}));e.a=function(a){var e=i()(r.a,{id:"popover-positioned-right"},void 0,i()(s.a,{},void 0,a.title),i()(l.a,{},void 0,a.content));return i()(d.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:e},void 0,c)}},6418:function(a,e,o){"use strict";o.r(e);var t=o(407),i=o.n(t),n=(o(0),o(404),o(489)),r=o(507),s=o(626),l=o(495),d=o(1306),c=o(464),u=o(486),v=i()(n.b,{legend:i()(l.a,{raw:"\\rho_0"}),defaultValue:0,step:"any",min:-1,max:1}),p=i()(l.a,{raw:"\\alpha"}),f=function(a){var e=a.quantitative,o=a.t;return i()(s.a,{title:i()("span",{},void 0,o("Correlation Test"),i()(u.a,{title:o("Correlation Test"),content:o("Correlation Test-description")})),label:o("calculate"),autoStart:!1,onGenerate:function(e,o,t,n,r){var s=a.data,l=a.showDecision,u=i()(d.a,{data:s,var1:e,var2:o,rho0:t,direction:n,alpha:r,showDecision:l});a.logAction(c.U,{var1:e,var2:o,rho0:t,direction:n,alpha:r,showDecision:l}),a.onCreated(u)}},void 0,i()(r.a,{legend:o("variable"),defaultValue:e[0],options:e}),i()(r.a,{legend:o("second-variable"),defaultValue:e[1],options:e}),v,i()(r.a,{legend:o("direction"),defaultValue:"two-sided",options:["less","greater","two-sided"]}),i()(n.b,{legend:i()("span",{},void 0,o("significance-level"),p),defaultValue:.05,min:0,max:1,step:"any"}))};f.defaultProps={logAction:function(){},showDecision:!0},e.default=f}}]);