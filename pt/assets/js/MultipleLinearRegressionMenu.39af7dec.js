(window.webpackJsonp=window.webpackJsonp||[]).push([[776],{486:function(e,t,n){"use strict";var i=n(407),a=n.n(i),o=(n(0),n(404),n(422)),r=n(510),s=n(509),l=n(506),u=n(534),c=a()(o.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,a()("div",{className:"fa fa-question"}));t.a=function(e){var t=a()(r.a,{id:"popover-positioned-right"},void 0,a()(s.a,{},void 0,e.title),a()(l.a,{},void 0,e.content));return a()(u.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:t},void 0,c)}},6409:function(e,t,n){"use strict";n.r(t);var i=n(407),a=n.n(i),o=(n(0),n(404),n(722)),r=n.n(o),s=n(514),l=n.n(s),u=n(473),c=n.n(u),d=n(507),p=n(544),v=n(626),f=n(1329),g=n(464),m=n(486),w=function(e){var t=e.data,n=e.categorical,i=e.quantitative,o=e.t;return a()(v.a,{title:a()("span",{},void 0,o("Multiple Linear Regression"),a()(m.a,{title:o("Multiple Linear Regression"),content:o("Multiple Linear Regression-description")})),autoStart:!1,onGenerate:function(n,o,r,s){var u=a()(f.a,{x:o,y:n,intercept:r,omitMissing:s,data:t,quantitative:i,onPredict:function(n,a,o){var r=l()(t,1),s=i.slice(),u="pred_lm"+o;r[u]=n,c()(s,u)||s.push(u),u="resid_lm"+o,c()(s,u)||s.push(u),r[u]=a,e.onGenerate(s,r)},onDiagnostics:e.onCreated}),d={y:n,x:o,intercept:r};e.logAction(g.w,d),e.onCreated(u)}},void 0,a()(d.a,{legend:o("outcome-y"),options:i,defaultValue:i[0]}),a()(d.a,{legend:o("predictors-x"),multi:!0,options:r()(i.concat(n)),defaultValue:i[1],closeMenuOnSelect:!1}),a()(p.a,{legend:o("include-intercept"),defaultValue:!0}),a()(p.a,{legend:o("omit-missing"),defaultValue:!1}))};w.defaultProps={logAction:function(){}},t.default=w}}]);