(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{3990:function(t,e,s){"use strict";s.r(e);s(437),s(433),s(425),s(424),s(434),s(411),s(403),s(415);var i=s(400),n=s.n(i),o=s(407),a=s.n(o),r=s(410),c=s.n(r),l=s(420),p=s.n(l),u=s(413),d=s.n(u),h=s(414),f=s.n(h),b=s(412),v=s.n(b),m=s(404),y=s.n(m),g=s(0),O=(s(396),s(4125)),S=s(428),w=s(934),j=s(724),k=s(662),P=s(465),C=s(641),q=s.n(C),N=s(665),D=s.n(N),I=s(1087),E=s(823),M=s(818),R=s(679),T=s(673),x=s(969),Q=s(600),_=s(457),z=s(462),F=s(418);s(349);function J(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function U(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?J(Object(s),!0).forEach((function(e){y()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):J(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function V(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,i=v()(t);if(e){var n=v()(this).constructor;s=Reflect.construct(i,arguments,n)}else s=i.apply(this,arguments);return f()(this,s)}}Object(F.a)("SelectQuestion");var B=Object(Q.a)("select-question"),H=n()("i",{className:"fa fa-check-square"}),L=function(t){d()(s,t);var e=V(s);function s(t){var i;return a()(this,s),i=e.call(this,t),y()(p()(i),"handleChange",(function(t){var e=t.target.value;i.setState({value:e,answerState:"secondary"},(function(){i.props.onChange(e)}))})),y()(p()(i),"handleSubmit",(function(){var t,e,s=i.context;!D()(i.props.solution)&&i.props.provideFeedback?(e=(t=i.props.solution===q()(i.props.options,i.state.value))?"success":"danger",t?s.addNotification({title:i.props.t("correct"),message:i.props.successMsg,level:"success"}):s.addNotification({title:i.props.t("incorrect"),message:i.props.failureMsg,level:"error"})):(e="info",s.addNotification({title:i.state.submitted?i.props.t("answer-resubmitted"):i.props.t("answer-submitted"),message:i.state.submitted?i.props.t("resubmit-message"):i.props.t("submit-message"),level:"info"})),s.log({id:i.id,type:z.Zb,value:i.state.value}),i.props.onSubmit(i.state.value,t),i.setState({answerState:e,submitted:!0})})),i.id=t.id||B(t),i.state={value:t.options[t.preselected],answerState:"secondary"},i}return c()(s,[{key:"render",value:function(){var t=this.props.hints.length,e="success"===this.state.answerState,s="danger"===this.state.answerState,i=n()(M.a,{id:this.id,info:"SELECT_QUESTION_SUBMISSION",data:{type:"factor",levels:this.props.options,question:this.props.question,solution:this.props.solution},inline:this.props.inline,points:this.props.points});return this.props.inline?n()("span",{id:this.id,style:U({},this.props.style)},void 0,n()("span",{style:{display:"inherit"}},void 0,n()(j.a,{value:this.state.value,as:"select",placeholder:"select",onChange:this.handleChange,style:{display:"inline",width:"max-content"},isInvalid:s,isValid:e,disabled:e},void 0,this.props.options.map((function(t,e){return n()("option",{value:t},e,t)}))),n()(S.a,{size:"small",variant:"outline-".concat(this.state.answerState),disabled:e,style:{display:"inline",marginTop:-3},onClick:this.handleSubmit},void 0,H)),i):n()(P.a,{id:this.id,className:"select-question",style:this.props.style,body:!0},void 0,n()(w.a,{},void 0,n()(k.a,{controlId:"".concat(this.id,"-form")},void 0,this.props.question?n()("label",{},void 0,this.props.question):null,n()(j.a,{value:this.state.value,as:"select",placeholder:"select",onChange:this.handleChange,isInvalid:"danger"===this.state.answerState,isValid:e,disabled:e},void 0,this.props.options.map((function(t,e){return n()("option",{className:"select-question-option",value:t},e,t)}))))),n()("div",{className:"select-question-toolbar"},void 0,n()(I.a,{className:"submit-button",variant:"primary",disabled:e,size:"sm",onClick:this.handleSubmit},void 0,this.state.submitted?this.props.t("resubmit"):this.props.t("submit")),t>0?n()(E.a,{onClick:this.logHint,hints:this.props.hints,placement:this.props.hintPlacement}):null,this.props.chat?n()(R.a,{for:this.id}):null),i,this.props.feedback?n()(T.a,{id:this.id+"_feedback"}):null,n()(x.a,{for:this.id,points:this.props.points}))}}]),s}(g.Component);L.defaultProps={question:"",preselected:0,inline:!1,hints:[],hintPlacement:"top",feedback:!0,chat:!1,provideFeedback:!0,failureMsg:"Not quite, try again!",successMsg:"That's the correct answer!",points:10,style:{},onChange:function(){},onSubmit:function(){}},L.contextType=_.a,e.default=Object(O.a)("SelectQuestion")(L)},679:function(t,e,s){"use strict";var i=s(399),n=Object(i.a)((function(){return s.e(143).then(s.bind(null,1034))}));e.a=n},823:function(t,e,s){"use strict";var i=s(399),n=Object(i.a)((function(){return s.e(172).then(s.bind(null,1179))}));e.a=n},969:function(t,e,s){"use strict";var i=s(399),n=Object(i.a)((function(){return Promise.all([s.e(0),s.e(6),s.e(169)]).then(s.bind(null,1527))}));e.a=n}}]);