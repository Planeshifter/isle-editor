(window.webpackJsonp=window.webpackJsonp||[]).push([[823],{486:function(e,a,n){"use strict";var t=n(407),o=n.n(t),i=(n(0),n(404),n(422)),r=n(510),s=n(509),l=n(506),c=n(534),u=o()(i.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,o()("div",{className:"fa fa-question"}));a.a=function(e){var a=o()(r.a,{id:"popover-positioned-right"},void 0,o()(s.a,{},void 0,e.title),o()(l.a,{},void 0,e.content));return o()(c.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:a},void 0,u)}},6412:function(e,a,n){"use strict";n.r(a);var t=n(407),o=n.n(t),i=(n(566),n(458),n(0),n(404),n(473)),r=n.n(i),s=n(514),l=n.n(s),c=n(507),u=n(544),d=n(489),v=n(626),p=n(1332),f=n(464),m=n(486),g=function(e){var a=e.quantitative,n=e.t;return o()(v.a,{title:o()("span",{},void 0,n("Principal Component Analysis"),o()(m.a,{title:n("Principal Component Analysis"),content:n("PCA-description")})),autoStart:!1,onGenerate:function(n,t,i,s){var c=o()(p.a,{variables:n,center:t,scale:i,noComponents:s,data:e.data,onResult:function(t,o){if(s>0){for(var i=l()(e.data,1),c=a.slice(),u=n.map((function(e){return e[0]})).join(""),d=0;d<s;d++){for(var v=[],p=0;p<o.data.length;p++)v.push(o.data[p][d]);var f="PC".concat(d+1,"_").concat(u);i[f]=v,r()(c,f)||c.push(f)}e.onGenerate(c,i)}}});e.logAction(f.y,{variables:n,center:t,scale:i}),e.onCreated(c)}},void 0,o()(c.a,{legend:n("variables"),multi:!0,options:a,closeMenuOnSelect:!1}),o()(u.a,{legend:n("center-values-subtract-the-mean"),defaultValue:!0}),o()(u.a,{legend:n("scale-values"),defaultValue:!1}),o()(d.b,{legend:n("components-to-add"),min:0,defaultValue:0}))};g.defaultProps={logAction:function(){}},a.default=g}}]);