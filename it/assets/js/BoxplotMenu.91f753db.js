(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{485:function(e,t,a){"use strict";var o,n=a(407),i=a.n(n),l=(a(0),a(404),a(423)),r=a(514),s=a(511),u=a(505),c=a(548);t.a=function(e){var t=i()(r.a,{id:"popover-positioned-right"},void 0,i()(s.a,{},void 0,e.title),i()(u.a,{},void 0,e.content));return i()(c.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:t},void 0,o||(o=i()(l.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,i()("div",{className:"fa fa-question"}))))}},6317:function(e,t,a){"use strict";a.r(t);var o=a(407),n=a.n(o),i=a(448),l=a.n(i),r=(a(428),a(0)),s=(a(404),a(818)),u=a(464),c=a(423),d=a(589),v=a(688),p=a(508),g=a(1065),f=a(557),b=a(667),m=a(1117),h=a(458),y=a(485),C=function(e){var t=e.data,a=e.variables,o=e.groupingVariables,i=e.t,C=e.session,P=e.logAction,w=e.onCreated,S=Object(r.useState)([]),V=l()(S,2),j=V[0],O=V[1],k=Object(r.useState)([]),x=l()(k,2),B=x[0],I=x[1],N=Object(r.useState)("vertical"),q=l()(N,2),z=q[0],A=q[1],J=Object(r.useState)(!1),D=l()(J,2),G=D[0],H=D[1];return n()(u.a,{},void 0,n()(u.a.Header,{as:"h4"},void 0,i("Box Plot"),n()(y.a,{title:i("Box Plot"),content:i("Box Plot-description")})),n()(u.a.Body,{},void 0,n()(p.a,{legend:i("variable-s"),multi:!0,defaultValue:j,options:a,onChange:function(e){O(e||[]),e&&e.length>1&&I([])}}),n()(d.a,{controlId:"boxplot-form-select"},void 0,n()(v.a,{},void 0,i("group-by")),n()(s.a,{value:B,options:o.map((function(e){return{label:e,value:e}})),isClearable:!0,isMulti:!0,onChange:function(e){(!e||e.length<=2)&&I(e)},isDisabled:j.length>1,styles:g.a,menuPortalTarget:document.body,menuPlacement:"auto",menuShouldScrollIntoView:!1})),n()(p.a,{legend:i("orientation"),options:["vertical","horizontal"],defaultValue:"vertical",menuPlacement:"top",onChange:A}),n()(f.a,{legend:i("overlay-points"),defaultValue:!1,onChange:H}),n()(c.a,{variant:"primary",block:!0,onClick:function(){var e=(B||[]).map((function(e){return e.value})),a=Object(b.a)(6),o={variables:j,group:e,plotId:a},l=n()(m.a,{id:a,onShare:function(){C.addNotification({title:i("plot-shared"),message:i("plot-shared-message"),level:"success",position:"tr"}),P(h.G,o)},action:o,data:t,variable:j,group:e,orientation:z,overlayPoints:G});P(h.g,o),w(l)},disabled:!j||0===j.length},void 0,i("generate"))))};C.defaultProps={groupingVariables:null,logAction:function(){},onCreated:function(){}},t.default=C}}]);