(window.webpackJsonp=window.webpackJsonp||[]).push([[810],{486:function(e,a,t){"use strict";var n=t(407),o=t.n(n),i=(t(0),t(404),t(422)),l=t(510),s=t(509),r=t(506),u=t(534),c=o()(i.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,o()("div",{className:"fa fa-question"}));a.a=function(e){var a=o()(l.a,{id:"popover-positioned-right"},void 0,o()(s.a,{},void 0,e.title),o()(r.a,{},void 0,e.content));return o()(u.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:a},void 0,c)}},6431:function(e,a,t){"use strict";t.r(a);var n=t(407),o=t.n(n),i=t(493),l=t.n(i),s=t(456),r=t.n(s),u=t(0),c=t.n(u),d=(t(404),t(466)),v=t(422),p=t(507),g=t(667),f=t(1110),b=t(464),m=t(486),h=["Counts of unique values","Values from a second variable"],C=function(e){var a=e.variables,t=e.defaultValue,n=e.groupingVariables,i=e.quantitative,s=e.t,C=Object(u.useState)(t||a[0]),V=r()(C,2),y=V[0],w=V[1],j=Object(u.useState)(i[0]),O=r()(j,2),P=O[0],S=O[1],k=Object(u.useState)(null),q=r()(k,2),z=q[0],A=q[1],N=Object(u.useState)(h[0]),J=r()(N,2),B=J[0],E=J[1];return o()(d.a,{},void 0,o()(d.a.Header,{as:"h4"},void 0,s("Pie Chart"),o()(m.a,{title:s("Pie Chart"),content:s("Pie Chart-description")})),o()(d.a.Body,{},void 0,o()(p.a,{legend:s("pie-sizes-represent"),defaultValue:B,options:h,onChange:E}),o()(p.a,{legend:s("variable"),defaultValue:y,options:a,onChange:w}),B===h[1]?o()(p.a,{legend:s("set-slice-sizes"),defaultValue:P,options:i,onChange:S}):null,o()(p.a,{legend:s("group-by"),defaultValue:z,options:n,clearable:!0,menuPlacement:"top",onChange:A}),o()(v.a,{variant:"primary",block:!0,onClick:function(){var a=Object(g.a)(6),t={variable:y,group:z,plotId:a};B===h[1]&&(t.summaryVariable=P);var n=c.a.createElement(f.a,l()({id:a},e,{variable:y,group:z,summaryVariable:B===h[1]?P:null,action:t,onShare:function(){e.session.addNotification({title:s("plot-shared"),message:s("plot-shared-message"),level:"success",position:"tr"}),e.logAction(b.L,t)}}));e.logAction(b.z,t),e.onCreated(n)}},void 0,s("generate"))))};C.defaultProps={defaultValue:null,groupingVariables:null,logAction:function(){}},a.default=C}}]);