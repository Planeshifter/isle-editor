(window.webpackJsonp=window.webpackJsonp||[]).push([[778],{3755:function(e,t,n){"use strict";n.r(t);var i=n(407),c=n.n(i),s=n(456),a=n.n(s),o=(n(458),n(0)),r=(n(404),n(450)),u=n.n(r),l=n(1969),d=n(466),b=n(531),f=n(1475),m=n(913),p=n(693),v=n(576),h=n(602),O=n(618),g=n(821),j=n(465),k=n(464),y=n(421),N=n(439);n(334);Object(y.a)("OrderQuestion");var S=Object(b.a)("order-question"),C=u()("isle:order-question"),q=function(e){var t=e.disableSubmitNotification,n=e.onChange,i=e.onSubmit,s=Object(o.useRef)(e.id||S(e)),r=Object(o.useContext)(j.a),u=Object(l.a)("OrderQuestion").t,b=Object(o.useState)(!1),y=a()(b,2),N=y[0],q=y[1],w=Object(o.useState)(e.options.map((function(e,t){return{id:t,text:e}}))),M=a()(w,2),x=M[0],I=M[1],P=Object(o.useState)({cards:null,correct:!1}),E=a()(P,2),F=E[0],Q=E[1];Object(o.useEffect)((function(){I(e.options.map((function(e,t){return{id:t,text:e}})))}),[e.options]);var R=Object(o.useCallback)((function(e){for(var t=!0,i=0;i<e.length;i++)if(e[i].id!==i){t=!1;break}n(e,t),Q({cards:e,correct:t}),q(!1)}),[n]),_=Object(o.useCallback)((function(e){C("Logging hint..."),r.log({id:s.current,type:k.Hb,value:e})}),[r]),B=Object(o.useCallback)((function(){e.provideFeedback?F.correct?r.addNotification({title:u("correct"),message:e.successMsg||u("submission-correct"),level:"success"}):r.addNotification({title:u("incorrect"),message:e.failureMsg||u("submission-incorrect"),level:"error"}):r.addNotification({title:u("submitted"),message:u("submission-message"),level:"info"})}),[e.failureMsg,e.successMsg,F.correct,e.provideFeedback,r,u]),J=Object(o.useCallback)((function(){t||B(),i(F.cards,F.correct),q(!0),r.log({id:s.current,type:k.Ib,value:F.cards.map((function(e){return e.text})).join(" -> ")})}),[t,B,r,F,i]),L=e.hints.length;return c()(d.a,{id:s.current,className:"order-question",style:e.style},void 0,c()(d.a.Body,{style:{width:e.feedback?"calc(100%-60px)":"100%",display:"inline-block"}},void 0,c()("label",{},void 0,e.question),c()(f.a,{shuffle:!0,data:x,onChange:R,onInit:R,disabled:N&&F.correct}),c()("div",{className:"order-question-toolbar"},void 0,L>0?c()(p.a,{onClick:_,hints:e.hints,placement:e.hintPlacement}):null,e.until&&r.startTime>e.until?c()("span",{className:"title",style:{marginLeft:4}},void 0,u("question-closed")):c()(m.a,{className:"submit-button",variant:"primary",size:"sm",onClick:J,disabled:N&&F.correct},void 0,u(N?"resubmit":"submit")),e.chat?c()(h.a,{for:s.current}):null),c()(v.a,{id:s.current,data:{type:"factor",question:e.question,solution:e.options},info:"ORDER_QUESTION_SUBMISSION",points:e.points}),e.feedback?c()(O.a,{id:s.current+"_feedback"}):null,c()(g.a,{for:s.current,points:e.points})))};q.defaultProps={question:"",provideFeedback:!0,hints:[],hintPlacement:"bottom",feedback:!0,chat:!1,failureMsg:null,successMsg:null,disableSubmitNotification:!1,until:null,points:10,style:{},onChange:function(){},onSubmit:function(){}},t.default=Object(N.a)(q)},576:function(e,t,n){"use strict";var i=n(546),c=n.n(i),s=n(0),a=n.n(s),o=(n(404),function(e){var t=e.children,n=c()(e,["children"]);return a.a.createElement("div",n,t)});o.defaultProps={className:"",style:{}},t.a=o},602:function(e,t,n){"use strict";var i=n(405),c=Object(i.a)((function(){return n.e(210).then(n.bind(null,878))}));t.a=c},693:function(e,t,n){"use strict";var i=n(405),c=Object(i.a)((function(){return n.e(395).then(n.bind(null,1023))}));t.a=c},821:function(e,t,n){"use strict";var i=n(405),c=Object(i.a)((function(){return Promise.all([n.e(0),n.e(368)]).then(n.bind(null,1360))}));t.a=c}}]);