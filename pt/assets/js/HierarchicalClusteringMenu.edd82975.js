(window.webpackJsonp=window.webpackJsonp||[]).push([[406],{486:function(a,e,t){"use strict";var n=t(407),i=t.n(n),o=(t(0),t(404),t(424)),l=t(513),r=t(511),s=t(507),c=t(546),u=i()(o.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,i()("div",{className:"fa fa-question"}));e.a=function(a){var e=i()(l.a,{id:"popover-positioned-right"},void 0,i()(r.a,{},void 0,a.title),i()(s.a,{},void 0,a.content));return i()(c.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:e},void 0,u)}},6367:function(a,e,t){"use strict";t.r(e);var n=t(407),i=t.n(n),o=(t(608),t(478),t(0),t(404),t(476)),l=t(493),r=t(470),s=t.n(r),c=t(517),u=t.n(c),d=t(666),v=t.n(d),f=t(508),g=t(552),p=t(490),h=t(636),m=t(495),b=t(1374),C=t(462),w=t(486),k=["euclidean","chebyshev","cosine","hamming","manhattan"],V=["complete","single"],q=function(a){var e=a.quantitative,t=a.t;return i()(h.a,{title:i()("span",{},void 0,t("Hierarchical Clustering"),i()(w.a,{title:t("Hierarchical Clustering"),content:t("Hierarchical Clustering-description")})),autoStart:!1,onGenerate:function(e,t,n,o,l){var r=i()(b.a,{variables:e,K:n,linkage:o,distance:l,data:a.data,onResult:function(i){if(t){var o=u()(a.data,1),l=a.categorical.slice(),r=e.map((function(a){return a[0]})).join(""),c=i.getClusterAssignments(n),d=Object(m.a)("hclust_cluster_"+r,v()(0,n,1).map((function(a){return"Cluster ".concat(a+1)})));o[d]=c,s()(l,d)||l.push(d),a.onGenerate(l,o)}}});a.logAction(C.n,{variables:e,attach:t,K:n,linkage:o,distance:l}),a.onCreated(r)}},void 0,i()(f.a,{legend:t("variables"),multi:!0,options:e}),i()(o.a,{},void 0,i()(l.a,{},void 0,i()(g.a,{legend:t("attach-clusters-table"),defaultValue:!1})),i()(l.a,{},void 0,i()(p.b,{legend:t("number-of-clusters"),min:1,inline:!0,defaultValue:3}))),i()(o.a,{},void 0,i()(l.a,{},void 0,i()(f.a,{legend:t("linkage"),defaultValue:V[0],options:V})),i()(l.a,{},void 0,i()(f.a,{legend:t("distance"),defaultValue:k[0],options:k}))))};q.defaultProps={logAction:function(){}},e.default=q}}]);