(window.webpackJsonp=window.webpackJsonp||[]).push([[811],{485:function(e,a,t){"use strict";var n,o=t(407),i=t.n(o),l=(t(0),t(404),t(423)),s=t(514),r=t(511),u=t(505),c=t(548);a.a=function(e){var a=i()(s.a,{id:"popover-positioned-right"},void 0,i()(r.a,{},void 0,e.title),i()(u.a,{},void 0,e.content));return i()(c.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:a},void 0,n||(n=i()(l.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,i()("div",{className:"fa fa-question"}))))}},6323:function(e,a,t){"use strict";t.r(a);var n=t(407),o=t.n(n),i=t(489),l=t.n(i),s=t(448),r=t.n(s),u=t(0),c=t.n(u),d=(t(404),t(464)),v=t(423),p=t(508),g=t(667),f=t(1124),b=t(458),m=t(485),h=["Counts of unique values","Values from a second variable"],C=function(e){var a=e.variables,t=e.defaultValue,n=e.groupingVariables,i=e.quantitative,s=e.t,C=Object(u.useState)(t||a[0]),V=r()(C,2),y=V[0],w=V[1],j=Object(u.useState)(i[0]),O=r()(j,2),P=O[0],S=O[1],k=Object(u.useState)(null),q=r()(k,2),N=q[0],z=q[1],A=Object(u.useState)(h[0]),B=r()(A,2),J=B[0],E=B[1];return o()(d.a,{},void 0,o()(d.a.Header,{as:"h4"},void 0,s("Pie Chart"),o()(m.a,{title:s("Pie Chart"),content:s("Pie Chart-description")})),o()(d.a.Body,{},void 0,o()(p.a,{legend:s("pie-sizes-represent"),defaultValue:J,options:h,onChange:E}),o()(p.a,{legend:s("variable"),defaultValue:y,options:a,onChange:w}),J===h[1]?o()(p.a,{legend:s("set-slice-sizes"),defaultValue:P,options:i,onChange:S}):null,o()(p.a,{legend:s("group-by"),defaultValue:N,options:n,clearable:!0,menuPlacement:"top",onChange:z}),o()(v.a,{variant:"primary",block:!0,onClick:function(){var a=Object(g.a)(6),t={variable:y,group:N,plotId:a};J===h[1]&&(t.summaryVariable=P);var n=c.a.createElement(f.a,l()({id:a},e,{variable:y,group:N,summaryVariable:J===h[1]?P:null,action:t,onShare:function(){e.session.addNotification({title:s("plot-shared"),message:s("plot-shared-message"),level:"success",position:"tr"}),e.logAction(b.N,t)}}));e.logAction(b.B,t),e.onCreated(n)}},void 0,s("generate"))))};C.defaultProps={defaultValue:null,groupingVariables:null,logAction:function(){}},a.default=C}}]);