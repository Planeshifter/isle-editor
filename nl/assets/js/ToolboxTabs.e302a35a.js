(window.webpackJsonp=window.webpackJsonp||[]).push([[1132],{6332:function(e,t,n){"use strict";n.r(t);var a=n(492),o=n.n(a),i=n(407),c=n.n(i),r=(n(478),n(0)),l=n.n(r),s=n(2049),u=n(463),d=n(406),b=n(909),g=n(561),v=n(6333),h=n(568),m=Object(d.a)((function(){return n.e(222).then(n.bind(null,6356))})),f=Object(d.a)((function(){return n.e(325).then(n.bind(null,6357))})),O=Object(d.a)((function(){return n.e(1065).then(n.bind(null,6358))})),A=Object(d.a)((function(){return Promise.all([n.e(0),n.e(1136)]).then(n.bind(null,6398))})),p=Object(d.a)((function(){return n.e(275).then(n.bind(null,6360))})),j=Object(d.a)((function(){return n.e(480).then(n.bind(null,6361))})),C=Object(d.a)((function(){return n.e(708).then(n.bind(null,6362))})),k=Object(d.a)((function(){return n.e(744).then(n.bind(null,6363))})),P=Object(d.a)((function(){return n.e(872).then(n.bind(null,6364))})),w=Object(d.a)((function(){return n.e(977).then(n.bind(null,6365))})),S=Object(d.a)((function(){return n.e(812).then(n.bind(null,6366))})),q=Object(d.a)((function(){return n.e(377).then(n.bind(null,6367))})),y=Object(d.a)((function(){return n.e(463).then(n.bind(null,6368))})),D=Object(d.a)((function(){return n.e(746).then(n.bind(null,6369))})),T=Object(d.a)((function(){return n.e(165).then(n.bind(null,6370))})),E=Object(d.a)((function(){return n.e(205).then(n.bind(null,6371))})),G=Object(d.a)((function(){return n.e(224).then(n.bind(null,6372))})),K=Object(d.a)((function(){return n.e(465).then(n.bind(null,6373))})),N=Object(d.a)((function(){return n.e(723).then(n.bind(null,6374))})),L=Object(d.a)((function(){return n.e(722).then(n.bind(null,6375))})),Q=Object(d.a)((function(){return n.e(814).then(n.bind(null,6376))})),B=Object(d.a)((function(){return n.e(813).then(n.bind(null,6377))})),M=Object(d.a)((function(){return n.e(166).then(n.bind(null,6378))})),V=Object(d.a)((function(){return n.e(180).then(n.bind(null,6379))})),H=Object(d.a)((function(){return n.e(363).then(n.bind(null,6380))})),x=Object(d.a)((function(){return n.e(388).then(n.bind(null,6381))})),F=Object(d.a)((function(){return n.e(682).then(n.bind(null,6382))})),R=Object(d.a)((function(){return n.e(709).then(n.bind(null,6383))})),I=Object(d.a)((function(){return n.e(727).then(n.bind(null,6384))})),W=Object(d.a)((function(){return n.e(797).then(n.bind(null,6385))})),J=Object(d.a)((function(){return n.e(817).then(n.bind(null,6386))})),z=Object(d.a)((function(){return n.e(936).then(n.bind(null,6387))})),U=Object(d.a)((function(){return n.e(935).then(n.bind(null,6388))})),X=Object(d.a)((function(){return n.e(1151).then(n.bind(null,6389))})),Y=Object(d.a)((function(){return n.e(223).then(n.bind(null,6390))}));t.default=function(e){var t=e.categorical,n=e.quantitative,a=e.originalQuantitative,i=e.groupingVariables,d=e.logAction,Z=e.data,$=e.statistics,_=e.tables,ee=e.models,te=e.plots,ne=e.tests,ae=e.showHistogramDensityOption,oe=e.showTestDecisions,ie=e.transformer,ce=e.onBarchartSelection,re=e.onCategoricalGenerate,le=e.onCreated,se=e.onGenerateTransformedVariable,ue=e.onHistogramSelection,de=e.onPlotDone,be=e.onQuantitativeGenerate,ge=e.onBothGenerate,ve=e.onTransformerBeingActive,he=e.on2dSelection,me=e.onQQPlotSelection,fe=$.length,Oe=Object(s.a)("DataExplorer").t,Ae=Object(r.useContext)(u.a),pe="1";0===fe&&(pe=_.length>0?"2.1":"3.1");var je={data:Z,variables:t,groupingVariables:i,onCreated:le,onPlotDone:de},Ce={data:Z,variables:n,groupingVariables:i,onCreated:le,onPlotDone:de},ke=c()("div",{className:"nav nav-tabs",role:"tablist"},void 0,fe>0?c()(g.a.Item,{className:"nav-statistics"},void 0,c()(g.a.Link,{eventKey:"1"},void 0,Oe("statistics"))):null,_.length>0&&t.length>0?c()(v.a,{title:Oe("tables"),className:"nav-tables"},void 0,_.map((function(e,t){return c()(b.a,{eventKey:"2.".concat(t+1)},t,Oe(e))}))):null,te.length>0?c()(v.a,{title:Oe("plots"),className:"nav-plots"},void 0,te.map((function(e,t){var n=c()(b.a,{eventKey:"3.".concat(t+1)},t,Oe(e));return"Histogram"===e&&"Mosaic Plot"===te[t-1]||"Line Plot"===e&&"Box Plot"===te[t-1]?c()(r.Fragment,{},t,c()(v.a.Divider,{},"".concat(t,"-div")),n):n}))):null,ne.length>0?c()(v.a,{title:Oe("tests"),className:"nav-tests"},void 0,ne.map((function(e,t){var n=c()(b.a,{eventKey:"4.".concat(t+1)},t,Oe(e));return"One-Sample Proportion Test"===e&&"One-Way ANOVA"===ne[t-1]||"Correlation Test"===e&&"Two-Sample Proportion Test"===ne[t-1]?c()(r.Fragment,{},t,c()(v.a.Divider,{},"".concat(t,"-div")),n):n}))):null,ee.length>0?c()(v.a,{title:Oe("models"),className:"nav-models"},void 0,ee.map((function(e,t){var n=c()(b.a,{eventKey:"5.".concat(t+1)},t,Oe(e));return"Decision Tree"===e&&"LASSO"===ee[t-1]||"PCA"===e&&"Naive Bayes"===ee[t-1]?c()(r.Fragment,{},t,c()(v.a.Divider,{},"".concat(t,"-div")),n):n}))):null,ie?c()(g.a.Item,{className:"nav-transform"},void 0,c()(g.a.Link,{eventKey:"6"},void 0,Oe("transform"))):null),Pe=c()(N,{onCreated:le,data:Z,quantitative:n,logAction:d,showDecision:oe,t:Oe}),we=c()(L,{onCreated:le,data:Z,quantitative:n,categorical:t,logAction:d,session:Ae,showDecision:oe,t:Oe}),Se=c()(Q,{onCreated:le,data:Z,categorical:t,logAction:d,showDecision:oe,t:Oe}),qe=c()(B,{onCreated:le,data:Z,categorical:t,logAction:d,session:Ae,showDecision:oe,t:Oe}),ye=c()(T,{onCreated:le,data:Z,quantitative:n,categorical:t,logAction:d,showDecision:oe,t:Oe}),De=c()(G,{onCreated:le,data:Z,quantitative:n,logAction:d,showDecision:oe,t:Oe}),Te=c()(E,{onCreated:le,data:Z,categorical:t,logAction:d,showDecision:oe,t:Oe}),Ee=c()(K,{onCreated:le,data:Z,quantitative:n,categorical:t,logAction:d,showDecision:oe,t:Oe}),Ge=c()(k,{categorical:t,quantitative:n,onCreated:le,data:Z,logAction:d,session:Ae,onGenerate:be,t:Oe}),Ke=c()(p,{categorical:t,quantitative:n,onCreated:le,data:Z,logAction:d,session:Ae,onGenerate:ge,t:Oe}),Ne=c()(P,{categorical:t,quantitative:n,onCreated:le,data:Z,logAction:d,session:Ae,onGenerate:ge,t:Oe}),Le=c()(j,{categorical:t,quantitative:n,onCreated:le,data:Z,logAction:d,session:Ae,onGenerate:be,t:Oe}),Qe=c()(C,{categorical:t,quantitative:n,onCreated:le,data:Z,logAction:d,session:Ae,onGenerate:ge,t:Oe}),Be=c()(w,{categorical:t,quantitative:n,onCreated:le,data:Z,logAction:d,session:Ae,onGenerate:be,t:Oe}),Me=c()(S,{quantitative:n,originalQuantitative:a,onCreated:le,onGenerate:be,data:Z,logAction:d,session:Ae,t:Oe}),Ve=c()(q,{quantitative:n,categorical:t,originalQuantitative:n,onCreated:le,onGenerate:re,data:Z,logAction:d,session:Ae,t:Oe}),He=c()(y,{quantitative:n,categorical:t,originalQuantitative:n,onCreated:le,onGenerate:re,data:Z,logAction:d,session:Ae,t:Oe}),xe=c()(D,{categorical:t,quantitative:n,onCreated:le,data:Z,logAction:d,session:Ae,onGenerate:ge,t:Oe}),Fe=c()(h.a.Content,{},void 0,c()(h.a.Pane,{eventKey:"1"},void 0,l.a.createElement(O,o()({},Ce,{statistics:$,logAction:d,t:Oe}))),_.map((function(e,t){var n=null;switch(e){case"Frequency Table":n=l.a.createElement(f,o()({},je,{logAction:d,t:Oe}));break;case"Contingency Table":n=l.a.createElement(m,o()({},je,{logAction:d,session:Ae,t:Oe}))}return c()(h.a.Pane,{eventKey:"2.".concat(t+1)},t,n)})),te.map((function(e,a){var i=null;switch(e){case"Bar Chart":i=l.a.createElement(M,o()({},je,{quantitative:n,logAction:d,session:Ae,onSelected:ce,t:Oe}));break;case"Box Plot":i=l.a.createElement(V,o()({},Ce,{logAction:d,session:Ae,t:Oe}));break;case"Contour Chart":i=l.a.createElement(Y,o()({},Ce,{logAction:d,session:Ae,onSelected:he,t:Oe}));break;case"Heat Map":i=l.a.createElement(H,o()({},Ce,{logAction:d,session:Ae,onSelected:he,t:Oe}));break;case"Histogram":i=l.a.createElement(x,o()({},Ce,{logAction:d,session:Ae,showDensityOption:ae,onSelected:ue,t:Oe}));break;case"Line Plot":i=l.a.createElement(F,o()({},Ce,{categorical:t,logAction:d,session:Ae,t:Oe}));break;case"Mosaic Plot":i=l.a.createElement(I,o()({},je,{logAction:d,session:Ae,t:Oe}));break;case"Pie Chart":i=l.a.createElement(W,o()({},je,{quantitative:n,logAction:d,session:Ae,t:Oe}));break;case"QQ Plot":i=l.a.createElement(J,o()({},Ce,{logAction:d,session:Ae,onSelected:me,t:Oe}));break;case"Scatterplot":i=l.a.createElement(z,o()({},Ce,{logAction:d,session:Ae,onSelected:he,t:Oe}));break;case"Scatterplot Matrix":i=l.a.createElement(U,o()({},Ce,{logAction:d,session:Ae,onSelected:he,t:Oe}));break;case"Violin Plot":i=l.a.createElement(X,o()({},Ce,{logAction:d,session:Ae,t:Oe}));break;case"Map":i=l.a.createElement(R,o()({},Ce,{logAction:d,session:Ae,t:Oe}))}return c()(h.a.Pane,{eventKey:"3.".concat(a+1)},a,i)})),ne.map((function(e,t){var n=null;switch(e){case"One-Sample Mean Test":n=Pe;break;case"Two-Sample Mean Test":n=we;break;case"One-Sample Proportion Test":n=Se;break;case"Two-Sample Proportion Test":n=qe;break;case"One-Way ANOVA":n=ye;break;case"Correlation Test":n=De;break;case"Chi-squared Independence Test":n=Te;break;case"Kruskal-Wallis Test":n=Ee}return c()(h.a.Pane,{eventKey:"4.".concat(t+1)},t,n)})),ee.map((function(e,t){var n=null;switch(e){case"Multiple Linear Regression":n=Ge;break;case"Decision Tree":n=Ke;break;case"Random Forest":n=Ne;break;case"LASSO":n=Le;break;case"Logistic Regression":n=Qe;break;case"Simple Linear Regression":n=Be;break;case"PCA":n=Me;break;case"Hierarchical Clustering":n=Ve;break;case"kmeans":n=He;break;case"Naive Bayes":n=xe}return c()(h.a.Pane,{eventKey:"5.".concat(t+1)},t,n)})),ie?c()(h.a.Pane,{eventKey:"6"},void 0,c()(A,{data:Z,quantitative:n,categorical:t,logAction:d,session:Ae,onGenerate:se,onActive:ve,t:Oe})):null);return c()(h.a.Container,{defaultActiveKey:pe,mountOnEnter:!0},void 0,ke,Fe)}}}]);