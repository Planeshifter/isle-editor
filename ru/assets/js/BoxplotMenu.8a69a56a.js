(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{486:function(e,t,a){"use strict";var o=a(407),n=a.n(o),i=(a(0),a(404),a(424)),l=a(513),r=a(511),s=a(507),u=a(546),c=n()(i.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,n()("div",{className:"fa fa-question"}));t.a=function(e){var t=n()(l.a,{id:"popover-positioned-right"},void 0,n()(r.a,{},void 0,e.title),n()(s.a,{},void 0,e.content));return n()(u.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:t},void 0,c)}},6379:function(e,t,a){"use strict";a.r(t);var o=a(407),n=a.n(o),i=a(456),l=a.n(i),r=a(0),s=(a(404),a(827)),u=a(465),c=a(424),d=a(593),v=a(702),p=a(508),g=a(1083),f=a(552),b=a(680),m=a(1138),h=a(462),y=a(486),C=function(e){var t=e.data,a=e.variables,o=e.groupingVariables,i=e.t,C=e.session,P=e.logAction,w=e.onCreated,S=Object(r.useState)([]),V=l()(S,2),j=V[0],O=V[1],k=Object(r.useState)([]),x=l()(k,2),B=x[0],I=x[1],N=Object(r.useState)("vertical"),q=l()(N,2),z=q[0],A=q[1],J=Object(r.useState)(!1),D=l()(J,2),E=D[0],H=D[1];return n()(u.a,{},void 0,n()(u.a.Header,{as:"h4"},void 0,i("Box Plot"),n()(y.a,{title:i("Box Plot"),content:i("Box Plot-description")})),n()(u.a.Body,{},void 0,n()(p.a,{legend:i("variable-s"),multi:!0,defaultValue:j,options:a,onChange:function(e){O(e||[]),e&&e.length>1&&I([])}}),n()(d.a,{controlId:"boxplot-form-select"},void 0,n()(v.a,{},void 0,i("group-by")),n()(s.a,{value:B,options:o.map((function(e){return{label:e,value:e}})),isClearable:!0,isMulti:!0,onChange:function(e){(!e||e.length<=2)&&I(e)},isDisabled:j.length>1,styles:g.a,menuPortalTarget:document.body,menuPlacement:"auto",menuShouldScrollIntoView:!1})),n()(p.a,{legend:i("orientation"),options:["vertical","horizontal"],defaultValue:"vertical",menuPlacement:"top",onChange:A}),n()(f.a,{legend:i("overlay-points"),defaultValue:!1,onChange:H}),n()(c.a,{variant:"primary",block:!0,onClick:function(){var e=(B||[]).map((function(e){return e.value})),a=Object(b.a)(6),o={variables:j,group:e,plotId:a},l=n()(m.a,{id:a,onShare:function(){C.addNotification({title:i("plot-shared"),message:i("plot-shared-message"),level:"success",position:"tr"}),P(h.E,o)},action:o,data:t,variable:j,group:e,orientation:z,overlayPoints:E});P(h.e,o),w(l)},disabled:!j||0===j.length},void 0,i("generate"))))};C.defaultProps={groupingVariables:null,logAction:function(){},onCreated:function(){}},t.default=C}}]);