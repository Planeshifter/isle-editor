(window.webpackJsonp=window.webpackJsonp||[]).push([[962],{424:function(e,t,s){"use strict";var n=s(405),r=s(408),i=s(409),a=s.n(i),o=s(0),l=s.n(o),c=s(411),u=s(464),p=l.a.forwardRef((function(e,t){var s=e.bsPrefix,i=e.variant,o=e.size,p=e.active,d=e.className,m=e.block,b=e.type,h=e.as,f=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),v=Object(c.a)(s,"btn"),w=a()(d,v,p&&"active",i&&v+"-"+i,m&&v+"-block",o&&v+"-"+o);if(f.href)return l.a.createElement(u.a,Object(n.a)({},f,{as:h,ref:t,className:a()(w,f.disabled&&"disabled")}));t&&(f.ref=t),b?f.type=b:h||(f.type="button");var y=h||"button";return l.a.createElement(y,Object(n.a)({},f,{className:w}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=p},583:function(e,t,s){"use strict";var n=s(555),r=s.n(n),i=s(0),a=s.n(i),o=(s(404),function(e){var t=e.children,s=r()(e,["children"]);return a.a.createElement("div",s,t)});o.defaultProps={className:"",style:{}},t.a=o},611:function(e,t,s){"use strict";var n=s(406),r=Object(n.a)((function(){return s.e(209).then(s.bind(null,890))}));t.a=r},6485:function(e,t,s){"use strict";s.r(t);s(421),s(437),s(436),s(488),s(505),s(438);var n=s(407),r=s.n(n),i=s(414),a=s.n(i),o=s(415),l=s.n(o),c=s(425),u=s.n(c),p=s(418),d=s.n(p),m=s(419),b=s.n(m),h=s(417),f=s.n(h),v=s(412),w=s.n(v),y=(s(478),s(0)),g=s(450),O=s.n(g),j=(s(404),s(4172)),k=s(892),P=s(827),S=s(807),N=s(424),x=s(465),R=s(493),q=s(432),F=s(517),C=s.n(F),A=s(481),M=s.n(A),D=s(470),E=s.n(D),I=s(446),T=s.n(I),z=s(430),B=s(760),L=s.n(B),J=s(554),Q=s(705),Y=s(583),H=s(611),V=s(1315),_=s(628),G=s(463),K=s(462),U=s(422),W=s(439);s(353);function X(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function Z(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?X(Object(s),!0).forEach((function(t){w()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):X(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function $(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,n=f()(e);if(t){var r=f()(this).constructor;s=Reflect.construct(n,arguments,r)}else s=n.apply(this,arguments);return b()(this,s)}}Object(U.a)("SelectQuestionMatrix");var ee=O()("isle:select-question-matrix"),te=Object(J.a)("select-question-matrix"),se=function(e){d()(s,e);var t=$(s);function s(e){var n;return a()(this,s),n=t.call(this,e),w()(u()(n),"handleChangeFactory",(function(e){return function(t){ee("Received a new value for ".concat(e,"..."));var s=C()(n.state.answers,1);s[e]=t.value,n.setState({answers:s})}})),w()(u()(n),"handleSubmit",(function(){for(var e=n.context,t=!0,s=M()(n.props.solution),r=0;r<s.length;r++){var i=s[r],a=n.props.solution[i],o=n.state.answers[i];Object(z.isPrimitive)(o)&&(T()(a)?E()(a,o)||(t=!1):a!==o&&(t=!1))}var l=!L()(n.props.solution);"none"!==n.props.provideFeedback&&l?t?e.addNotification({title:n.props.t("correct"),message:n.props.successMsg||n.props.t("success-message"),level:"success"}):e.addNotification({title:n.props.t("incorrect"),message:n.props.failureMsg||n.props.t("failure-message"),level:"error"}):e.addNotification({title:n.state.submitted?n.props.t("answer-resubmitted"):n.props.t("answer-submitted"),message:n.state.submitted?n.props.t("resubmit-message"):n.props.t("submit-message"),level:"info"}),e.log({id:n.id,type:K.Yb,value:n.state.answers}),n.props.onSubmit(n.state.answers,t);var c=null;n.props.provideFeedback&&l&&(c=t?"success":"danger");var u=M()(n.state.answers).length,p=M()(n.props.options).length,d=n.state.numbSubmissions+1;n.setState({submitted:!0,answerState:c,submittedAnswers:C()(n.state.answers),numbSubmissions:d,completed:(d>=n.props.nTries||"success"===c&&u===p)&&"none"!==n.props.provideFeedback&&l})})),n.id=e.id||te(e),n.state={answers:{},submitted:!1,answerState:null,completed:!1,numbSubmissions:0,submittedAnswers:null},n}return l()(s,[{key:"renderColumnNames",value:function(){var e,t=this.props.cols.length;return e=t>7?1:t>4?2:3,r()(k.a.Row,{className:"multiple-choice-matrix-question-header"},void 0,r()(R.a,{sm:e}),this.props.cols.map((function(e,t){return r()(R.a,{},t,r()(k.a.Label,{},void 0,Object(q.isPrimitive)(e)?r()(V.a,{raw:e}):e))})))}},{key:"renderSelectInput",value:function(e,t){var s,n=e+":"+t,i=this.props.options[n]||[];i=i.map((function(e,t){return{label:e,value:t}}));var a="overall"===this.props.provideFeedback&&this.state.submitted||"individual"===this.props.provideFeedback&&this.state.submitted&&this.state.submittedAnswers[n];a&&this.props.solution[n]&&(s=this.state.submittedAnswers[n]===this.props.solution[n]?"green":"red");var o=r()(P.a,{name:"form-field-name",className:"select-field",isDisabled:this.state.completed,isSearchable:!1,options:i,onChange:this.handleChangeFactory(n),menuPlacement:"top",menuPortalTarget:document.body,styles:{menuPortal:function(e){return Z(Z({},e),{},{zIndex:1010})},singleValue:function(e){return Z(Z({},e),{},{color:s})}}},"select-".concat(e,"-").concat(t)),l=this.props.cellLabels[n];return r()(y.Fragment,{},void 0,l?r()("span",{className:"select-question-matrix-cell-label"},void 0,l):null,o,a&&this.state.completed?r()(S.a,{variant:"green"===s?"success":"danger"},void 0,this.props.t("correct-answer"),":",this.props.options[n][this.props.solution[n]]):null)}},{key:"renderRowSelects",value:function(e){for(var t=this.props.cols.length,s=new Array(t),n=0;n<t;n++)s[n]=r()(R.a,{},n,this.renderSelectInput(e,n));return r()(y.Fragment,{},void 0,s)}},{key:"renderRows",value:function(){var e,t=this,s=this.props.rows.length;return e=s>7?1:s>4?2:3,this.props.rows.map((function(s,n){return r()(k.a.Row,{style:{marginBottom:15,marginTop:15}},n,r()(R.a,{sm:e},void 0,r()(k.a.Label,{column:!0,style:{textAlign:"right"}},void 0,Object(q.isPrimitive)(s)?r()(V.a,{raw:s}):s)),t.renderRowSelects(n))}))}},{key:"render",value:function(){var e=this.props.hints.length,t=M()(this.state.answers).length,s=M()(this.props.options).length,n=0===t||t<s&&!this.props.allowIncomplete||this.state.completed;return r()(x.a,{id:this.id,border:this.state.answerState,className:"select-question-matrix ".concat(this.props.className),style:this.props.style,body:!0},void 0,this.props.question?r()("label",{},void 0,this.props.question):null,this.renderColumnNames(),this.renderRows(),r()("div",{className:"select-question-matrix-toolbar"},void 0,r()(N.a,{className:"submit-button",variant:"primary",size:"sm",onClick:this.handleSubmit,disabled:n},void 0,this.state.submitted?this.props.t("resubmit"):this.props.t("submit")),e>0?r()(Q.a,{onClick:this.logHint,hints:this.props.hints,placement:this.props.hintPlacement}):null,this.props.chat?r()(H.a,{for:this.id}):null),r()("div",{},void 0,r()(Y.a,{id:this.id,data:{type:"tensor",rows:this.props.rows,cols:this.props.cols,question:this.props.question,solution:this.props.solution},info:K.Yb}),this.props.feedback?r()(_.a,{id:this.id+"_feedback",style:{float:"left"}}):null))}}]),s}(y.Component);se.defaultProps={question:"",rows:[],cols:[],solution:{},options:{},hints:[],hintPlacement:"bottom",feedback:!0,provideFeedback:"individual",allowIncomplete:!1,nTries:1,failureMsg:null,successMsg:null,cellLabels:{},chat:!1,className:"",style:{},onSubmit:function(){}},se.contextType=G.a,t.default=Object(j.a)("SelectQuestionMatrix")(Object(W.a)(se))},705:function(e,t,s){"use strict";var n=s(406),r=Object(n.a)((function(){return s.e(394).then(s.bind(null,1052))}));t.a=r}}]);