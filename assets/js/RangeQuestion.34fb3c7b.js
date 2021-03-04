(window.webpackJsonp=window.webpackJsonp||[]).push([[898],{3971:function(e,n,t){"use strict";t.r(n);var i=t(407),a=t.n(i),s=t(456),o=t.n(s),l=t(0),u=(t(404),t(2049)),r=t(752),c=t(465),d=t(807),b=t(450),m=t.n(b),f=t(429),p=t.n(f),g=t(458),v=t.n(g),h=t(502),y=t.n(h),w=t(482),O=t.n(w),j=t(473),N=t.n(j),k=t(455),x=t.n(k),C=t(595),P=t.n(C),S=t(554),q=t(611),L=t(931),T=t(583),E=t(490),R=t(705),B=t(628),F=t(831),J=t(463),z=t(462),A=t(422),K=t(439);t(344);Object(A.a)("RangeQuestion");var M=m()("isle:range-question"),Q=Object(S.a)("range-question"),U=function(e){var n=e.id||Q(e),t=e.min,i=e.max,s=e.points,b=e.question,m=e.solution,f=e.until,p=e.feedback,g=e.style,v=e.provideFeedback,h=e.allowMultipleAnswers,w=e.hints,j=e.chat,k=e.labels,C=Object(l.useContext)(J.a),S=Object(l.useState)(t),A=o()(S,2),K=A[0],U=A[1],V=Object(l.useState)(i),_=o()(V,2),D=_[0],G=_[1],H=Object(l.useState)(!1),I=o()(H,2),W=I[0],X=I[1],Y=Object(l.useState)(!1),Z=o()(Y,2),$=Z[0],ee=Z[1],ne=Object(u.a)("RangeQuestion").t,te=function(){var t,i=e.digits,a=e.solution,s=void 0===a?[]:a,o=parseFloat(K),l=parseFloat(D);P()(s)?(e.onSubmit(null,[o,l]),C.addNotification({title:ne(W?"answer-resubmitted":"answer-submitted"),message:ne(W?"resubmission-message":"submission-message"),level:"success"})):(t=null===i?o===s[0]&&l===s[1]:N()(o,-i)===N()(s[0],-i)&&N()(l,-i)===N()(s[1],-i),e.onSubmit(t,[o,l]),v?C.addNotification({title:ne("answer-submitted"),message:ne(t?"submission-correct":"submission-incorrect"),level:t?"success":"error"}):C.addNotification({title:ne(W?"answer-resubmitted":"answer-submitted"),message:ne(W?"resubmission-message":"submission-message"),level:"info"})),X(!0),ee(t),C.log({id:n,type:z.Tb,value:JSON.stringify([K,D])})},ie=function(e){13===e.charCode&&(document&&document.activeElement&&(M("Trigger blur event..."),document.activeElement.blur()),setTimeout(te,50))};Object(l.useEffect)((function(){!m||x()(m[1])||x()(m[0])||(U(t),G(i),X(!1),ee(!1))}),[b,m,t,i]);var ae=w.length,se=null!==m;return a()(c.a,{id:n,className:"range-question",style:g},void 0,a()(c.a.Body,{style:{width:p?"calc(100%-60px)":"100%",display:"inline-block"}},void 0,b?a()("label",{},void 0,b):null,a()("div",{className:"range-question-input-wrapper"},void 0,a()(E.b,{step:"any",legend:k?k[0]:ne("lower"),onChange:function(n){U(n),e.onChangeLower(y()(n,D))},defaultValue:K,disabled:W&&!h,inline:!0,width:90,min:t,max:i,numbersOnly:!1,onBlur:function(e){e>=D&&U(D)},onKeyPress:ie}),a()(E.b,{step:"any",legend:k?k[1]:ne("upper"),onChange:function(n){G(n),e.onChangeUpper(O()(n,K))},defaultValue:D,disabled:W&&!h,inline:!0,width:90,min:t,max:i,numbersOnly:!1,onBlur:function(e){e<=K&&G(K)},onKeyPress:ie}),W&&se&&v?a()(d.a,{variant:$?"success":"danger",style:{fontSize:18}},void 0,"".concat(ne("solution"),":   "),m[0],", ",m[1]):null),a()(r.a,{className:"range-question-toolbar"},void 0,a()(T.a,{buttonLabel:ne("answers"),id:n,data:{type:"range",question:b,solution:m},info:z.Tb,style:{marginLeft:"3px",marginRight:"3px"},points:s}),ae>0?a()(R.a,{onClick:function(e){M("Logging hint..."),C.log({id:n,type:z.Sb,value:e})},hints:w,placement:e.hintPlacement}):null,j?a()("div",{style:{display:"inline-block",marginLeft:"4px"}},void 0,a()(q.a,{for:n})):null,f&&C.startTime>f?a()("span",{className:"title",style:{marginLeft:4}},void 0,ne("question-closed")):a()(L.a,{className:"submit-button",variant:"primary",size:"sm",disabled:W&&!h,onClick:te},void 0,ne(W&&h?"resubmit":"submit"))),p?a()(B.a,{id:n+"_feedback",style:{marginRight:5,marginTop:-5}}):null,a()(F.a,{for:n,points:s})))};U.defaultProps={question:"",solution:null,hints:[],hintPlacement:"top",labels:null,feedback:!0,chat:!1,digits:3,max:p.a,min:v.a,provideFeedback:!0,allowMultipleAnswers:!1,until:null,points:10,style:{},onChangeUpper:function(){},onChangeLower:function(){},onSubmit:function(){}},n.default=Object(K.a)(U)},583:function(e,n,t){"use strict";var i=t(555),a=t.n(i),s=t(0),o=t.n(s),l=(t(404),function(e){var n=e.children,t=a()(e,["children"]);return o.a.createElement("div",t,n)});l.defaultProps={className:"",style:{}},n.a=l},611:function(e,n,t){"use strict";var i=t(406),a=Object(i.a)((function(){return t.e(205).then(t.bind(null,890))}));n.a=a},705:function(e,n,t){"use strict";var i=t(406),a=Object(i.a)((function(){return t.e(390).then(t.bind(null,1052))}));n.a=a},752:function(e,n,t){"use strict";var i=t(405),a=t(408),s=t(409),o=t.n(s),l=t(0),u=t.n(l),r=t(411),c=u.a.forwardRef((function(e,n){var t=e.bsPrefix,s=e.className,l=Object(a.a)(e,["bsPrefix","className"]),c=Object(r.a)(t,"btn-toolbar");return u.a.createElement("div",Object(i.a)({},l,{ref:n,className:o()(s,c)}))}));c.displayName="ButtonToolbar",c.defaultProps={role:"toolbar"},n.a=c},831:function(e,n,t){"use strict";var i=t(406),a=Object(i.a)((function(){return Promise.all([t.e(0),t.e(363)]).then(t.bind(null,1402))}));n.a=a}}]);