(window.webpackJsonp=window.webpackJsonp||[]).push([[488],{486:function(e,t,a){"use strict";var n=a(407),o=a.n(n),i=(a(0),a(404),a(424)),r=a(513),l=a(511),u=a(507),d=a(546),s=o()(i.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,o()("div",{className:"fa fa-question"}));t.a=function(e){var t=o()(r.a,{id:"popover-positioned-right"},void 0,o()(l.a,{},void 0,e.title),o()(u.a,{},void 0,e.content));return o()(d.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:t},void 0,s)}},6361:function(e,t,a){"use strict";a.r(t);var n=a(407),o=a.n(n),i=(a(0),a(404),a(730)),r=a.n(i),l=a(470),u=a.n(l),d=a(517),s=a.n(d),c=a(494),p=a(508),v=a(552),f=a(582),m=a(636),g=a(1368),S=a(462),w=a(486),y=o()("span",{},void 0,"L1 Penalty Term ",o()(c.a,{raw:"\\lambda"})),b=function(e){var t=e.data,a=e.categorical,n=e.quantitative,i=e.t,l=e.logAction,d=e.onCreated,c=e.onGenerate;return o()(m.a,{title:o()("span",{},void 0,i("LASSO"),o()(w.a,{title:i("LASSO"),content:i("LASSO-description")})),autoStart:!1,onGenerate:function(e,a,i,r){var p=o()(g.a,{x:a,y:e,lambda:i,intercept:r,data:t,quantitative:n,onPredict:function(e,a,o){var i=s()(t,1),r=n.slice(),l="pred_lasso"+o;i[l]=e,u()(r,l)||r.push(l),i[l="resid_lasso"+o]=a,u()(r,l)||r.push(l),c(r,i)}});l(S.q,{y:e,x:a,intercept:r,lambda:i}),d(p)}},void 0,o()(p.a,{legend:i("outcome-y"),options:n,defaultValue:n[0]}),o()(p.a,{legend:i("predictors-x"),multi:!0,options:r()(n.concat(a)),defaultValue:n[1],closeMenuOnSelect:!1}),o()(f.a,{legend:y,defaultValue:.001,min:1e-12,max:1,step:"any",rangeInputStyle:{width:260},numberInputStyle:{width:120}}),o()(v.a,{legend:i("include-intercept"),defaultValue:!0}))};b.defaultProps={logAction:function(){}},t.default=b}}]);