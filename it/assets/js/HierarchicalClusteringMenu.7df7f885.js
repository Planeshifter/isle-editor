(window.webpackJsonp=window.webpackJsonp||[]).push([[372],{485:function(a,e,t){"use strict";var n,i=t(407),o=t.n(i),l=(t(0),t(404),t(423)),r=t(514),s=t(511),c=t(505),u=t(548);e.a=function(a){var e=o()(r.a,{id:"popover-positioned-right"},void 0,o()(s.a,{},void 0,a.title),o()(c.a,{},void 0,a.content));return o()(u.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:e},void 0,n||(n=o()(l.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,o()("div",{className:"fa fa-question"}))))}},6305:function(a,e,t){"use strict";t.r(e);var n=t(407),i=t.n(n),o=(t(465),t(428),t(0),t(404),t(478)),l=t(491),r=t(471),s=t.n(r),c=t(523),u=t.n(c),d=t(661),v=t.n(d),f=t(508),g=t(557),p=t(488),h=t(631),m=t(494),b=t(1366),C=t(458),w=t(485),k=["euclidean","chebyshev","cosine","hamming","manhattan"],V=["complete","single"],q=function(a){var e=a.quantitative,t=a.t;return i()(h.a,{title:i()("span",{},void 0,t("Hierarchical Clustering"),i()(w.a,{title:t("Hierarchical Clustering"),content:t("Hierarchical Clustering-description")})),autoStart:!1,onGenerate:function(e,t,n,o,l){var r=i()(b.a,{variables:e,K:n,linkage:o,distance:l,data:a.data,onResult:function(i){if(t){var o=u()(a.data,1),l=a.categorical.slice(),r=e.map((function(a){return a[0]})).join(""),c=i.getClusterAssignments(n),d=Object(m.a)("hclust_cluster_"+r,v()(0,n,1).map((function(a){return"Cluster ".concat(a+1)})));o[d]=c,s()(l,d)||l.push(d),a.onGenerate(l,o)}}});a.logAction(C.p,{variables:e,attach:t,K:n,linkage:o,distance:l}),a.onCreated(r)}},void 0,i()(f.a,{legend:t("variables"),multi:!0,options:e}),i()(o.a,{},void 0,i()(l.a,{},void 0,i()(g.a,{legend:t("attach-clusters-table"),defaultValue:!1})),i()(l.a,{},void 0,i()(p.b,{legend:t("number-of-clusters"),min:1,inline:!0,defaultValue:3}))),i()(o.a,{},void 0,i()(l.a,{},void 0,i()(f.a,{legend:t("linkage"),defaultValue:V[0],options:V})),i()(l.a,{},void 0,i()(f.a,{legend:t("distance"),defaultValue:k[0],options:k}))))};q.defaultProps={logAction:function(){}},e.default=q}}]);