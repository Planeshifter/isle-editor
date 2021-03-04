(window.webpackJsonp=window.webpackJsonp||[]).push([[744],{2711:function(t,e,i){"use strict";var s=i(446),n=i.n(s),r=i(565),o=i.n(r);e.a=function(t,e,i){if(o()(t)){var s=t[e];if(n()(s)&&(s=s.filter((function(t){return t.type===i}))).length>0)return s[0].value}return null}},3851:function(t,e,i){"use strict";i.r(e);i(421),i(437),i(436),i(505),i(438);var s=i(407),n=i.n(s),r=i(414),o=i.n(r),u=i(415),a=i.n(u),l=i(425),p=i.n(l),c=i(418),b=i.n(c),d=i(419),m=i.n(d),f=i(417),h=i.n(f),v=i(412),g=i.n(v),y=(i(488),i(0)),O=(i(404),i(4172)),S=i(752),j=i(807),w=i(450),N=i.n(w),P=i(429),k=i.n(P),q=i(458),x=i.n(q),T=i(473),C=i.n(T),D=i(595),R=i.n(D),B=i(430),E=i.n(B),L=i(446),F=i.n(L),H=i(554),U=i(534),A=i(931),I=i(611),K=i(583),M=i(490),Q=i(705),V=i(628),_=i(831),z=i(463),J=i(2711),W=i(547),G=i(462),X=i(422),Y=i(439);i(332);function Z(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function $(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,s=h()(t);if(e){var n=h()(this).constructor;i=Reflect.construct(s,arguments,n)}else i=s.apply(this,arguments);return m()(this,i)}}Object(X.a)("NumberQuestion");var tt=Object(H.a)("number-question"),et=N()("isle:number-question");function it(t,e){if(F()(e)){for(var i=0;i<e.length;i++)if(t===e[i])return!0;return!1}return t===e}function st(t,e,i){if(t=C()(t,-i),F()(e)){for(var s=0;s<e.length;s++)if(t===C()(e[s],-i))return!0;return!1}return t===C()(e,-i)}var nt=function(t){b()(i,t);var e=$(i);function i(t,s){var n;o()(this,i),n=e.call(this,t),g()(p()(n),"handleChange",(function(t){et("Handle change of input field..."),n.setState({value:t}),n.props.onChange(t)})),g()(p()(n),"handleKeyPress",(function(t){13===t.charCode&&(document&&document.activeElement&&(et("Trigger blur event..."),document.activeElement.blur()),setTimeout(n.submitHandler,50))})),g()(p()(n),"sendSubmitNotification",(function(t){var e=n.context;if(R()(n.props.solution))e.addNotification({title:n.state.submitted?"Answer re-submitted.":"Answer submitted.",message:n.state.submitted?n.props.t("resubmission-message"):n.props.t("submission-message"),level:"info"});else if(n.props.provideFeedback){var i,s;if(t)i=n.props.t("submission-correct"),s="success";else{var r=n.state.numSubmissions+1;i=r<n.props.nTries?n.props.t("submission-try-again")+" ("+n.props.t("tries",{count:n.props.nTries-r})+").":n.props.t("submission-incorrect"),s="error"}e.addNotification({title:n.props.t("answer-submitted"),message:i,level:s})}else e.addNotification({title:n.state.submitted?n.props.t("answer-resubmitted"):n.props.t("answer-submitted"),message:n.state.submitted?n.props.t("resubmission-message"):n.props.t("submission-message"),level:"info"})})),g()(p()(n),"submitHandler",(function(){var t=n.context,e=parseFloat(n.state.value);if(e<n.props.min||e>n.props.max)return t.addNotification({title:n.props.t("invalid-answer"),message:n.props.t("invalid-range",{min:n.props.min,max:n.props.max}),level:"error"});var i,s=n.props,r=s.digits,o=s.solution;if(!R()(o)){var u=parseFloat(n.state.value);i=null===r?it(u,o):st(u,o,r)}n.props.onSubmit(e,i),n.props.disableSubmitNotification||n.sendSubmitNotification(i),n.setState({submitted:!0,correct:i,numSubmissions:n.state.numSubmissions+1}),t.log({id:n.id,type:G.Db,value:n.state.value})})),g()(p()(n),"logHint",(function(t){et("Logging hint..."),n.context.log({id:n.id,type:G.Cb,value:t})})),n.id=t.id||tt(t);var r=s.currentUserActions,u=Object(J.a)(r,n.id,G.Db);return n.state=function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(i),!0).forEach((function(e){g()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Z(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({value:E()(u)?u:t.defaultValue,submitted:u&&R()(t.solution),numSubmissions:0,correct:t.digits?st(u,t.solution,t.digits):it(u,t.solution)},t),n}return a()(i,[{key:"componentDidMount",value:function(){var t=this,e=this.context;e&&(this.unsubscribe=e.subscribe((function(e,i){if(e===W.A){var s=i[t.id];if(F()(s)&&(s=s.filter((function(t){return t.type===G.Db}))).length>0){var n=s[0].value;t.setState({value:n,submitted:R()(t.props.solution)})}}})))}},{key:"componentWillUnmount",value:function(){this.unsubscribe&&this.unsubscribe()}},{key:"renderSubmitButton",value:function(){var t=this.context;if(this.props.until&&t.startTime>this.props.until)return n()("span",{className:"title",style:{marginLeft:4}},void 0,this.props.t("question-closed"));var e=null!==this.props.solution,i=this.state.submitted&&e&&this.state.numSubmissions>=this.props.nTries;return n()(A.a,{className:"submit-button",variant:"primary",size:"sm",disabled:i,onClick:this.submitHandler,style:{marginLeft:3}},void 0,this.state.submitted&&!this.props.solution?this.props.t("resubmit"):this.props.t("submit"))}},{key:"render",value:function(){var t=this.props.hints.length,e=null!==this.props.solution,i=this.state.submitted&&e&&this.state.numSubmissions>=this.props.nTries;return n()(U.a,{id:this.id,className:"number-question",style:this.props.style,fullscreen:!0,bodyStyle:{display:"inline-block",marginBottom:6}},void 0,this.props.question?n()("p",{},void 0,n()("label",{},void 0,this.props.question)):null,n()("div",{className:"number-question-input-wrapper"},void 0,n()(M.b,{step:"any",legend:this.props.t("your-answer"),onChange:this.handleChange,defaultValue:this.state.value,disabled:i,inline:!0,width:90,numbersOnly:!1,onKeyPress:this.handleKeyPress,tooltip:Object(M.a)(this.props)}),this.state.submitted&&e&&this.props.provideFeedback&&(this.state.correct||this.state.numSubmissions>=this.props.nTries)?n()(j.a,{variant:this.state.correct?"success":"danger",style:{fontSize:18}},void 0,"".concat(this.props.t("solution"),":   "),F()(this.props.solution)?function(t,e){var i=e("one-of");i+=t[0];for(var s=1;s<t.length-1;s++)i+=", ",i+=t[s];return i+=e(" or "),i+t[t.length-1]}(this.props.solution,this.props.t):String(this.props.solution)):null),n()(S.a,{className:"number-question-toolbar"},void 0,n()(K.a,{buttonLabel:this.props.t("answers"),id:this.id,data:{type:"number",question:this.props.question,solution:this.props.solution},info:"NUMBER_QUESTION_SUBMISSION",style:{marginLeft:3,marginRight:3},points:this.props.points}),t>0?n()(Q.a,{onClick:this.logHint,hints:this.props.hints,placement:this.props.hintPlacement,style:{marginLeft:3}}):null,this.props.chat?n()("div",{style:{display:"inline-block",marginLeft:3}},void 0,n()(I.a,{for:this.id})):null,this.renderSubmitButton()),this.props.feedback?n()(V.a,{id:this.id+"_feedback",style:{marginRight:5,marginTop:-5}}):null,n()(_.a,{for:this.id,points:this.props.points}))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return t.question!==e.question||t.solution!==e.solution?{value:void 0,submitted:!1,question:t.question,solution:t.solution}:null}}]),i}(y.Component);nt.defaultProps={question:"",hints:[],hintPlacement:"top",feedback:!0,solution:null,digits:3,max:k.a,min:x.a,defaultValue:0,provideFeedback:!0,nTries:1,disableSubmitNotification:!1,chat:!1,until:null,points:10,style:{},onChange:function(){},onSubmit:function(){}},nt.contextType=z.a,e.default=Object(O.a)("NumberQuestion")(Object(Y.a)(nt))},583:function(t,e,i){"use strict";var s=i(555),n=i.n(s),r=i(0),o=i.n(r),u=(i(404),function(t){var e=t.children,i=n()(t,["children"]);return o.a.createElement("div",i,e)});u.defaultProps={className:"",style:{}},e.a=u},611:function(t,e,i){"use strict";var s=i(406),n=Object(s.a)((function(){return i.e(189).then(i.bind(null,890))}));e.a=n},705:function(t,e,i){"use strict";var s=i(406),n=Object(s.a)((function(){return i.e(374).then(i.bind(null,1052))}));e.a=n},752:function(t,e,i){"use strict";var s=i(405),n=i(408),r=i(409),o=i.n(r),u=i(0),a=i.n(u),l=i(411),p=a.a.forwardRef((function(t,e){var i=t.bsPrefix,r=t.className,u=Object(n.a)(t,["bsPrefix","className"]),p=Object(l.a)(i,"btn-toolbar");return a.a.createElement("div",Object(s.a)({},u,{ref:e,className:o()(r,p)}))}));p.displayName="ButtonToolbar",p.defaultProps={role:"toolbar"},e.a=p},831:function(t,e,i){"use strict";var s=i(406),n=Object(s.a)((function(){return Promise.all([i.e(0),i.e(347)]).then(i.bind(null,1402))}));e.a=n}}]);