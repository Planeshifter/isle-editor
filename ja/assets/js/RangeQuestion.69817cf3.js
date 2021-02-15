(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{3986:function(e,n,t){"use strict";t.r(n);var i=t(400),a=t.n(i),s=t(453),o=t.n(s),l=t(0),u=(t(396),t(4125)),r=t(871),c=t(465),d=t(919),b=t(443),m=t.n(b),f=t(426),g=t.n(f),p=t(454),v=t.n(p),h=t(508),w=t.n(h),y=t(484),O=t.n(y),j=t(477),N=t.n(j),k=t(450),x=t.n(k),C=t(665),S=t.n(C),q=t(600),P=t(679),L=t(1087),T=t(818),R=t(503),B=t(823),E=t(673),F=t(969),J=t(457),z=t(462),A=t(418);t(341);Object(A.a)("RangeQuestion");var K=m()("isle:range-question"),M=Object(q.a)("range-question"),Q=function(e){var n=e.id||M(e),t=e.min,i=e.max,s=e.points,u=e.question,b=e.solution,m=e.t,f=e.until,g=e.feedback,p=e.style,v=e.provideFeedback,h=e.allowMultipleAnswers,y=e.hints,j=e.chat,k=Object(l.useContext)(J.a),C=Object(l.useState)(t),q=o()(C,2),A=q[0],Q=q[1],U=Object(l.useState)(i),V=o()(U,2),_=V[0],D=V[1],G=Object(l.useState)(!1),H=o()(G,2),I=H[0],W=H[1],X=Object(l.useState)(!1),Y=o()(X,2),Z=Y[0],$=Y[1],ee=function(){var t,i=e.digits,a=e.solution,s=void 0===a?[]:a,o=parseFloat(A),l=parseFloat(_);S()(s)?(e.onSubmit([o,l]),k.addNotification({title:m(I?"answer-resubmitted":"answer-submitted"),message:m(I?"resubmission-message":"submission-message"),level:"success"})):(t=null===i?o===s[0]&&l===s[1]:N()(o,-i)===N()(s[0],-i)&&N()(l,-i)===N()(s[1],-i),e.onSubmit([o,l],t),v?k.addNotification({title:m("answer-submitted"),message:m(t?"submission-correct":"submission-incorrect"),level:t?"success":"error"}):k.addNotification({title:m(I?"answer-resubmitted":"answer-submitted"),message:m(I?"resubmission-message":"submission-message"),level:"info"})),W(!0),$(t),k.log({id:n,type:z.Tb,value:JSON.stringify([A,_])})},ne=function(e){13===e.charCode&&(document&&document.activeElement&&(K("Trigger blur event..."),document.activeElement.blur()),setTimeout(ee,50))};Object(l.useEffect)((function(){!b||x()(b[1])||x()(b[0])||(Q(t),D(i),W(!1),$(!1))}),[u,b,t,i]);var te=y.length,ie=null!==b;return a()(c.a,{id:n,className:"range-question",style:p},void 0,a()(c.a.Body,{style:{width:g?"calc(100%-60px)":"100%",display:"inline-block"}},void 0,u?a()("label",{},void 0,u):null,a()("div",{className:"range-question-input-wrapper"},void 0,a()(R.b,{step:"any",legend:m("lower"),onChange:function(n){Q(n),e.onChangeLower(w()(n,_))},defaultValue:A,disabled:I&&!h,inline:!0,width:90,min:t,max:i,numbersOnly:!1,onBlur:function(e){e>=_&&Q(_)},onKeyPress:ne}),a()(R.b,{step:"any",legend:m("upper"),onChange:function(n){D(n),e.onChangeUpper(O()(n,A))},defaultValue:_,disabled:I&&!h,inline:!0,width:90,min:t,max:i,numbersOnly:!1,onBlur:function(e){e<=A&&D(A)},onKeyPress:ne}),I&&ie&&v?a()(d.a,{variant:Z?"success":"danger",style:{fontSize:18}},void 0,"".concat(m("solution"),":   "),b[0],", ",b[1]):null),a()(r.a,{className:"range-question-toolbar"},void 0,a()(T.a,{buttonLabel:m("answers"),id:n,data:{type:"range",question:u,solution:b},info:z.Tb,style:{marginLeft:"3px",marginRight:"3px"},points:s}),te>0?a()(B.a,{onClick:function(e){K("Logging hint..."),k.log({id:n,type:z.Sb,value:e})},hints:y,placement:e.hintPlacement}):null,j?a()("div",{style:{display:"inline-block",marginLeft:"4px"}},void 0,a()(P.a,{for:n})):null,f&&k.startTime>f?a()("span",{className:"title",style:{marginLeft:4}},void 0,m("question-closed")):a()(L.a,{className:"submit-button",variant:"primary",size:"sm",disabled:I&&!h,onClick:ee},void 0,m(I&&h?"resubmit":"submit"))),g?a()(E.a,{id:n+"_feedback",style:{marginRight:5,marginTop:-5}}):null,a()(F.a,{for:n,points:s})))};Q.defaultProps={question:"",solution:null,hints:[],hintPlacement:"top",feedback:!0,chat:!1,digits:3,max:g.a,min:v.a,provideFeedback:!0,allowMultipleAnswers:!1,until:null,points:10,style:{},onChangeUpper:function(){},onChangeLower:function(){},onSubmit:function(){}},n.default=Object(u.a)("RangeQuestion")(Q)},679:function(e,n,t){"use strict";var i=t(399),a=Object(i.a)((function(){return t.e(160).then(t.bind(null,1034))}));n.a=a},823:function(e,n,t){"use strict";var i=t(399),a=Object(i.a)((function(){return t.e(189).then(t.bind(null,1179))}));n.a=a},871:function(e,n,t){"use strict";var i=t(398),a=t(401),s=t(402),o=t.n(s),l=t(0),u=t.n(l),r=t(408),c=u.a.forwardRef((function(e,n){var t=e.bsPrefix,s=e.className,l=Object(a.a)(e,["bsPrefix","className"]),c=Object(r.a)(t,"btn-toolbar");return u.a.createElement("div",Object(i.a)({},l,{ref:n,className:o()(s,c)}))}));c.displayName="ButtonToolbar",c.defaultProps={role:"toolbar"},n.a=c},969:function(e,n,t){"use strict";var i=t(399),a=Object(i.a)((function(){return Promise.all([t.e(0),t.e(6),t.e(186)]).then(t.bind(null,1527))}));n.a=a}}]);