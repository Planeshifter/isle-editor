(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{6466:function(t,e,s){"use strict";s.r(e);s(437),s(433),s(425),s(424),s(434),s(411),s(403),s(415);var n=s(400),r=s.n(n),i=s(407),o=s.n(i),a=s(410),l=s.n(a),c=s(420),u=s.n(c),p=s(413),d=s.n(p),h=s(414),m=s.n(h),b=s(412),f=s.n(b),v=s(404),w=s.n(v),g=s(0),y=s(443),O=s.n(y),S=(s(396),s(4125)),j=s(934),k=s(957),P=s(919),x=s(428),N=s(465),R=s(495),q=s(438),F=s(555),C=s.n(F),D=s(482),A=s.n(D),M=s(470),I=s.n(M),T=s(440),L=s.n(T),z=s(427),E=s(881),J=s.n(E),Q=s(600),Y=s(823),B=s(818),H=s(679),V=s(1202),_=s(673),G=s(457),K=s(462),U=s(418);s(350);function W(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function X(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?W(Object(s),!0).forEach((function(e){w()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):W(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function Z(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,n=f()(t);if(e){var r=f()(this).constructor;s=Reflect.construct(n,arguments,r)}else s=n.apply(this,arguments);return m()(this,s)}}Object(U.a)("SelectQuestionMatrix");var $=O()("isle:select-question-matrix"),tt=Object(Q.a)("select-question-matrix"),et=function(t){d()(s,t);var e=Z(s);function s(t){var n;return o()(this,s),n=e.call(this,t),w()(u()(n),"handleChangeFactory",(function(t){return function(e){$("Received a new value for ".concat(t,"..."));var s=C()(n.state.answers,1);s[t]=e.value,n.setState({answers:s})}})),w()(u()(n),"handleSubmit",(function(){for(var t=n.context,e=!0,s=A()(n.props.solution),r=0;r<s.length;r++){var i=s[r],o=n.props.solution[i],a=n.state.answers[i];Object(z.isPrimitive)(a)&&(L()(o)?I()(o,a)||(e=!1):o!==a&&(e=!1))}var l=!J()(n.props.solution);"none"!==n.props.provideFeedback&&l?e?t.addNotification({title:n.props.t("correct"),message:n.props.successMsg||n.props.t("success-message"),level:"success"}):t.addNotification({title:n.props.t("incorrect"),message:n.props.failureMsg||n.props.t("failure-message"),level:"error"}):t.addNotification({title:n.state.submitted?n.props.t("answer-resubmitted"):n.props.t("answer-submitted"),message:n.state.submitted?n.props.t("resubmit-message"):n.props.t("submit-message"),level:"info"}),t.log({id:n.id,type:K.Yb,value:n.state.answers}),n.props.onSubmit(n.state.answers,e);var c=null;n.props.provideFeedback&&l&&(c=e?"success":"danger");var u=A()(n.state.answers).length,p=A()(n.props.options).length,d=n.state.numbSubmissions+1;n.setState({submitted:!0,answerState:c,submittedAnswers:C()(n.state.answers),numbSubmissions:d,completed:(d>=n.props.nTries||"success"===c&&u===p)&&"none"!==n.props.provideFeedback&&l})})),n.id=t.id||tt(t),n.state={answers:{},submitted:!1,answerState:null,completed:!1,numbSubmissions:0,submittedAnswers:null},n}return l()(s,[{key:"renderColumnNames",value:function(){var t,e=this.props.cols.length;return t=e>7?1:e>4?2:3,r()(j.a.Row,{className:"multiple-choice-matrix-question-header"},void 0,r()(R.a,{sm:t}),this.props.cols.map((function(t,e){return r()(R.a,{},e,r()(j.a.Label,{},void 0,Object(q.isPrimitive)(t)?r()(V.a,{raw:t}):t))})))}},{key:"renderSelectInput",value:function(t,e){var s,n=t+":"+e,i=this.props.options[n]||[];i=i.map((function(t,e){return{label:t,value:e}}));var o="overall"===this.props.provideFeedback&&this.state.submitted||"individual"===this.props.provideFeedback&&this.state.submitted&&this.state.submittedAnswers[n];o&&this.props.solution[n]&&(s=this.state.submittedAnswers[n]===this.props.solution[n]?"green":"red");var a=r()(k.a,{name:"form-field-name",className:"select-field",isDisabled:this.state.completed,isSearchable:!1,options:i,onChange:this.handleChangeFactory(n),menuPlacement:"top",menuPortalTarget:document.body,styles:{menuPortal:function(t){return X(X({},t),{},{zIndex:1010})},singleValue:function(t){return X(X({},t),{},{color:s})}}},"select-".concat(t,"-").concat(e)),l=this.props.cellLabels[n];return r()(g.Fragment,{},void 0,l?r()("span",{className:"select-question-matrix-cell-label"},void 0,l):null,a,o&&this.state.completed?r()(P.a,{variant:"green"===s?"success":"danger"},void 0,this.props.t("correct-answer"),":",this.props.options[n][this.props.solution[n]]):null)}},{key:"renderRowSelects",value:function(t){for(var e=this.props.cols.length,s=new Array(e),n=0;n<e;n++)s[n]=r()(R.a,{},n,this.renderSelectInput(t,n));return r()(g.Fragment,{},void 0,s)}},{key:"renderRows",value:function(){var t,e=this,s=this.props.rows.length;return t=s>7?1:s>4?2:3,this.props.rows.map((function(s,n){return r()(j.a.Row,{style:{marginBottom:15,marginTop:15}},n,r()(R.a,{sm:t},void 0,r()(j.a.Label,{column:!0,style:{textAlign:"right"}},void 0,Object(q.isPrimitive)(s)?r()(V.a,{raw:s}):s)),e.renderRowSelects(n))}))}},{key:"render",value:function(){var t=this.props.hints.length,e=A()(this.state.answers).length,s=A()(this.props.options).length,n=0===e||e<s&&!this.props.allowIncomplete||this.state.completed;return r()(N.a,{id:this.id,border:this.state.answerState,className:"select-question-matrix ".concat(this.props.className),style:this.props.style,body:!0},void 0,this.props.question?r()("label",{},void 0,this.props.question):null,this.renderColumnNames(),this.renderRows(),r()("div",{className:"select-question-matrix-toolbar"},void 0,r()(x.a,{className:"submit-button",variant:"primary",size:"sm",onClick:this.handleSubmit,disabled:n},void 0,this.state.submitted?this.props.t("resubmit"):this.props.t("submit")),t>0?r()(Y.a,{onClick:this.logHint,hints:this.props.hints,placement:this.props.hintPlacement}):null,this.props.chat?r()(H.a,{for:this.id}):null),r()("div",{},void 0,r()(B.a,{id:this.id,data:{type:"tensor",rows:this.props.rows,cols:this.props.cols,question:this.props.question,solution:this.props.solution},info:K.Yb}),this.props.feedback?r()(_.a,{id:this.id+"_feedback",style:{float:"left"}}):null))}}]),s}(g.Component);et.defaultProps={question:"",rows:[],cols:[],solution:{},options:{},hints:[],hintPlacement:"bottom",feedback:!0,provideFeedback:"individual",allowIncomplete:!1,nTries:1,failureMsg:null,successMsg:null,cellLabels:{},chat:!1,className:"",style:{},onSubmit:function(){}},et.contextType=G.a,e.default=Object(S.a)("SelectQuestionMatrix")(et)},679:function(t,e,s){"use strict";var n=s(399),r=Object(n.a)((function(){return s.e(156).then(s.bind(null,1034))}));e.a=r},823:function(t,e,s){"use strict";var n=s(399),r=Object(n.a)((function(){return s.e(185).then(s.bind(null,1179))}));e.a=r}}]);