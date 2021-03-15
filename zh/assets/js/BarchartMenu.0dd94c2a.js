(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{486:function(e,a,t){"use strict";var n=t(407),o=t.n(n),i=(t(0),t(404),t(422)),l=t(510),r=t(509),d=t(506),s=t(534),c=o()(i.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,o()("div",{className:"fa fa-question"}));a.a=function(e){var a=o()(l.a,{id:"popover-positioned-right"},void 0,o()(r.a,{},void 0,e.title),o()(d.a,{},void 0,e.content));return o()(s.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:a},void 0,c)}},6424:function(e,a,t){"use strict";t.r(a);var n=t(493),o=t.n(n),i=t(456),l=t.n(i),r=t(407),d=t.n(r),s=t(0),c=t.n(s),u=(t(404),t(888)),v=t(816),p=t(690),g=t(586),b=t(422),f=t(466),m=t(467),y=t(494),h=t(544),C=t(507),O=t(1051),V=t(667),S=t(1102),j=t(464),x=t(486),k=["Mean","Median","Min","Max","Sum"],M=["Counts of distinct values","Function evaluated for a variable"],B=d()("br",{}),P=function(e){return c.a.createElement(u.z.Option,e,e.data.label,B,d()("span",{style:{fontVariant:"small-caps"}},void 0,e.data.description))},w=[{label:"Total",value:"total",description:"by total count of each category"},{label:"Alphabetically",value:"category",description:"by category name"},{label:"Min",value:"min",description:"by minimum count inside each category"},{label:"Max",value:"max",description:"by maximum count inside each category"},{label:"Mean",value:"mean",description:"by mean count inside each category"},{label:"Median",value:"median",description:"by median count inside each category"}],q=function(e){var a=e.groupingVariables,t=e.variables,n=e.defaultValue,i=e.quantitative,r=e.t,u=Object(s.useState)(n||t[0]),B=l()(u,2),q=B[0],z=B[1],A=Object(s.useState)(i[0]),E=l()(A,2),N=E[0],I=E[1],J=Object(s.useState)("ascending"),D=l()(J,2),F=D[0],H=D[1],T=Object(s.useState)(k[0]),G=l()(T,2),K=G[0],L=G[1],Q=Object(s.useState)(null),R=l()(Q,2),U=R[0],W=R[1],X=Object(s.useState)(!1),Y=l()(X,2),Z=Y[0],$=Y[1],_=Object(s.useState)(M[0]),ee=l()(_,2),ae=ee[0],te=ee[1],ne=Object(s.useState)(!1),oe=l()(ne,2),ie=oe[0],le=oe[1],re=Object(s.useState)(!1),de=l()(re,2),se=de[0],ce=de[1],ue=Object(s.useState)(!1),ve=l()(ue,2),pe=ve[0],ge=ve[1],be=Object(s.useState)(null),fe=l()(be,2),me=fe[0],ye=fe[1],he=!U||pe||ae===M[1];return d()(f.a,{},void 0,d()(f.a.Header,{as:"h4"},void 0,r("Bar Chart"),d()(x.a,{title:r("Bar Chart"),content:r("Bar Chart-description")})),d()(f.a.Body,{},void 0,d()(C.a,{legend:r("bars-represent"),defaultValue:ae,options:M,onChange:te}),d()(C.a,{legend:r("variable"),defaultValue:q,options:t,onChange:z}),ae===M[1]?d()(m.a,{},void 0,d()(y.a,{},void 0,d()(C.a,{legend:r("y-axis"),defaultValue:N,options:e.quantitative,onChange:I})),d()(y.a,{},void 0,d()(C.a,{legend:r("summary-function"),defaultValue:K,options:k,onChange:L}))):null,d()(C.a,{legend:r("group-by"),clearable:!0,defaultValue:U,options:a,menuPlacement:"top",onChange:W}),d()(m.a,{},void 0,d()(y.a,{},void 0,d()(g.a,{controlId:"barchart-order-select"},void 0,d()(p.a,{},void 0,r(U?"order-outer-groups":"order-x-axis"),":"),d()(v.a,{defaultValue:me,options:w,components:{Option:P},isClearable:!0,menuPlacement:"top",onChange:function(e){ye(e?e.value:null)},styles:O.a}))),d()(y.a,{},void 0,d()(C.a,{legend:r("order-direction"),defaultValue:F,options:["ascending","descending"],menuPlacement:"top",onChange:H,style:{display:me?"inherit":"none"}}))),d()(m.a,{},void 0,d()(y.a,{},void 0,ae===M[0]?d()(h.a,{legend:r("total-percentages"),defaultValue:pe,onChange:ge,disabled:ie,style:{opacity:ie?.2:1}}):null),d()(y.a,{},void 0,d()(h.a,{legend:r("flip-coordinates"),defaultValue:Z,onChange:$}))),d()(m.a,{},void 0,d()(y.a,{},void 0,d()(h.a,{legend:r("stack-bars"),defaultValue:se,onChange:ce,disabled:!U,style:{opacity:U?1:.2}})),d()(y.a,{},void 0,d()(h.a,{legend:r("relative-frequencies-inside-each-group"),defaultValue:ie,disabled:he,onChange:le,style:{opacity:he?.2:1}}))),d()(b.a,{variant:"primary",block:!0,onClick:function(){var a=Object(V.a)(6),t={variable:q,group:U,relative:ie,totalPercent:pe,xOrder:me,direction:F,stackBars:se,plotId:a};ae===M[1]&&(t.summary=K,t.yvar=N);var n,i=function(){e.session.addNotification({title:e.t("plot-shared"),message:e.t("plot-shared-message"),level:"success",position:"tr"}),e.logAction(j.D,t)};n=ae===M[1]?c.a.createElement(S.a,o()({},e,{variable:q,group:U,horizontal:Z,relative:ie,totalPercent:pe,xOrder:me,direction:F,summary:K,yvar:N,stackBars:se,id:a,action:t,onShare:i})):c.a.createElement(S.a,o()({},e,{variable:q,group:U,horizontal:Z,relative:ie,totalPercent:pe,xOrder:me,direction:F,stackBars:se,id:a,action:t,onShare:i})),e.logAction(j.c,t),e.onCreated(n)},disabled:!q},void 0,r("generate"))))};q.defaultProps={defaultValue:null,groupingVariables:null,logAction:function(){},onCreated:function(){},onSelected:function(){}},a.default=q}}]);