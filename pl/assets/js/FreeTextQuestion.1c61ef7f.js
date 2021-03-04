(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{1466:function(t,e,i){"use strict";var s=i(406),n=Object(s.a)((function(){return i.e(1017).then(i.bind(null,2879))}));e.a=n},2711:function(t,e,i){"use strict";var s=i(446),n=i.n(s),o=i(565),a=i.n(o);e.a=function(t,e,i){if(a()(t)){var s=t[e];if(n()(s)&&(s=s.filter((function(t){return t.type===i}))).length>0)return s[0].value}return null}},3799:function(t,e,i){"use strict";i.r(e);i(421);var s=i(407),n=i.n(s),o=i(414),a=i.n(o),r=i(415),l=i.n(r),u=i(425),c=i.n(u),p=i(418),d=i.n(p),h=i(419),b=i.n(h),f=i(417),m=i.n(f),v=i(412),y=i.n(v),g=i(0),x=i.n(g),k=i(23),w=i.n(k),N=(i(404),i(4172)),S=i(424),j=i(752),O=i(649),q=i(593),P=i(785),D=i(450),T=i.n(D),C=i(432),L=i(554),H=i(534),F=i(611),R=i(931),z=i(583),B=i(1466),E=i(705),A=i(828),M=i(742),U=i(628),I=i(831),J=i(463),Q=i(2711),W=i(1414),Y=i(462),_=i(547),G=i(422),K=i(439),V=i(4807);i(320);function X(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,s=m()(t);if(e){var n=m()(this).constructor;i=Reflect.construct(s,arguments,n)}else i=s.apply(this,arguments);return b()(this,i)}}Object(G.a)("FreeTextQuestion");var Z=Object(L.a)("free-text-question"),$=T()("isle:free-text-question"),tt=function(t){d()(i,t);var e=X(i);function i(t,s){var n;a()(this,i),n=e.call(this,t),y()(c()(n),"handleChange",(function(t){var e=t.target.value;n.setState({value:e}),n.beforeUnload||(window.addEventListener("beforeunload",W.a),n.beforeUnload=!0),n.props.onChange(e)})),y()(c()(n),"appendText",(function(t){n.setState({value:n.state.value+" "+t})})),y()(c()(n),"sendSubmitNotification",(function(){var t=n.context;if(n.state.submitted)t.addNotification({title:n.props.t("answer-resubmitted"),message:n.props.resubmissionMsg,level:"success"});else{var e=n.props.submissionMsg;""===e&&(e=n.props.solution&&n.props.provideFeedback?n.props.t("submission-message-solution"):n.props.t("submission-message-no-solution")),t.addNotification({title:n.props.t("answer-submitted"),message:e,level:"success"})}})),y()(c()(n),"submitHandler",(function(t){var e=n.context;n.props.disableSubmitNotification||n.sendSubmitNotification(),n.props.onSubmit(n.state.value),n.setState({submitted:!0}),window.removeEventListener("beforeunload",W.a),n.beforeUnload=!1,e.log({id:n.id,type:Y.jb,value:n.state.value})})),y()(c()(n),"handleSolutionClick",(function(){var t=n.context;n.state.solutionDisplayed?n.setState({solutionDisplayed:!1,value:n.state.studentAnswer}):(t.log({id:n.id,type:Y.hb,value:null}),n.setState({solutionDisplayed:!0,studentAnswer:n.state.value,value:n.props.solution}))})),y()(c()(n),"logHint",(function(t){$("Logging hint..."),n.context.log({id:n.id,type:Y.ib,value:t})})),$("Invoking constructor of FreeTextQuestion...");var o=s.currentUserActions;n.id=t.id||Z(t);var r=Object(Q.a)(o,n.id,Y.jb);return n.state={exhaustedHints:0===t.hints.length,value:Object(C.isPrimitive)(r)?r:"",solutionDisplayed:!1,submitted:Object(C.isPrimitive)(r),placeholder:t.placeholder,solution:t.solution,question:t.question},n}return l()(i,[{key:"componentDidMount",value:function(){var t=this,e=this.context;this.unsubscribe=e.subscribe((function(e){e===_.A&&t.setToLastAction()}))}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"setToLastAction",value:function(){var t=this.context.currentUserActions,e=Object(Q.a)(t,this.id,Y.jb);Object(C.isPrimitive)(e)&&e!==this.state.value&&this.setState({value:e,submitted:!0})}},{key:"triggerHint",value:function(){w.a.findDOMNode(this.hintButton).click()}},{key:"renderSubmitButton",value:function(){var t=this.context;return this.props.until&&t.startTime>this.props.until?n()("span",{className:"title",style:{marginLeft:4}},void 0,this.props.t("question-closed")):this.state.value.length>=1&&!this.state.solutionDisplayed?n()(R.a,{className:"submit-button",variant:"primary",size:"sm",onClick:this.submitHandler,duration:5,style:{marginLeft:"4px"}},void 0,this.state.submitted?this.props.t("resubmit"):this.props.t("submit")):n()(M.a,{placement:"top",positionLeft:100,overlay:n()(P.a,{id:"submitTooltip"},void 0,this.props.t("submit-tooltip")),rootClose:!0},void 0,n()("div",{style:{display:"inline-block"}},void 0,n()(S.a,{className:"submit-button",variant:"primary",size:"sm",style:{pointerEvents:"none",marginLeft:"4px"},disabled:!0},void 0,this.props.t("submit"))))}},{key:"render",value:function(){var t=this,e=this.props.hints.length,i=n()(B.a,{disabled:!(this.props.instantSolution||this.state.submitted&&this.state.exhaustedHints),onClick:this.handleSolutionClick,hasHints:this.props.hints.length>0});return n()(H.a,{id:this.id,className:"free-text-question ".concat(this.props.className),style:this.props.style,fullscreen:!0,bodyStyle:{width:this.props.feedback?"calc(100%-60px)":"100%",display:"inline-block"}},void 0,n()(A.a,{id:this.props.voiceID,reference:this,commands:V}),this.props.question?n()("div",{className:"title"},void 0,this.props.question):null,n()(q.a,{},void 0,n()("label",{htmlFor:"".concat(this.id,"-textarea")},void 0,this.state.solutionDisplayed?this.props.t("solution"):this.props.t("your-answer")),this.state.solutionDisplayed?n()("div",{className:"free-text-question-solution-wrapper",style:{height:"calc(".concat(1.5*this.props.rows,"rem + 14px)")}},void 0,this.state.value):n()(O.a,{id:"".concat(this.id,"-textarea"),as:"textarea",placeholder:this.props.placeholder||this.props.t("enter-your-answer-here"),onChange:this.handleChange,style:{resize:this.props.resizable?"both":"none"},maxLength:this.props.maxlength,rows:this.props.rows,value:this.state.value,disabled:this.state.solutionDisplayed})),n()(z.a,{buttonLabel:this.props.t("answers"),id:this.id,info:Y.jb,data:{question:this.props.question,solution:this.props.solution},style:{float:"left"},points:this.props.points}),n()(j.a,{className:"free-text-question-toolbar"},void 0,e>0?x.a.createElement(E.a,{id:"".concat(this.id,"-hints"),onClick:this.logHint,ref:function(e){t.hintButton=e},hints:this.props.hints,onFinished:function(){t.setState({exhaustedHints:!0})},style:{marginRight:"4px"},placement:this.props.hintPlacement}):null,this.props.provideFeedback&&this.props.solution?i:null,this.props.chat?n()("div",{style:{display:"inline-block",marginLeft:"4px"}},void 0,n()(F.a,{for:this.id})):null,this.renderSubmitButton()),this.props.feedback?n()(U.a,{id:this.id+"_feedback",style:{marginRight:5,marginTop:-5}}):null,n()(I.a,{for:this.id,points:this.props.points}))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return t.placeholder!==e.placeholder||t.solution!==e.solution||t.question!==e.question?{value:"",solutionDisplayed:!1,submitted:!1,placeholder:t.placeholder,solution:t.solution,question:t.question}:null}}]),i}(g.Component);tt.defaultProps={question:"",hints:[],hintPlacement:"top",feedback:!0,solution:"",instantSolution:!1,rows:5,chat:!1,placeholder:"",resizable:!1,disableSubmitNotification:!1,submissionMsg:"",resubmissionMsg:"You have successfully re-submitted your answer.",provideFeedback:!0,maxlength:2500,voiceID:null,until:null,points:10,className:"",style:{},onChange:function(){},onSubmit:function(){}},tt.contextType=J.a,e.default=Object(N.a)("FreeTextQuestion")(Object(K.a)(tt))},424:function(t,e,i){"use strict";var s=i(405),n=i(408),o=i(409),a=i.n(o),r=i(0),l=i.n(r),u=i(411),c=i(464),p=l.a.forwardRef((function(t,e){var i=t.bsPrefix,o=t.variant,r=t.size,p=t.active,d=t.className,h=t.block,b=t.type,f=t.as,m=Object(n.a)(t,["bsPrefix","variant","size","active","className","block","type","as"]),v=Object(u.a)(i,"btn"),y=a()(d,v,p&&"active",o&&v+"-"+o,h&&v+"-block",r&&v+"-"+r);if(m.href)return l.a.createElement(c.a,Object(s.a)({},m,{as:f,ref:e,className:a()(y,m.disabled&&"disabled")}));e&&(m.ref=e),b?m.type=b:f||(m.type="button");var g=f||"button";return l.a.createElement(g,Object(s.a)({},m,{className:y}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1},e.a=p},4807:function(t){t.exports=JSON.parse('[{"command":"appendText","trigger":"insert","description":"Dictate your answer","params":["text"],"regexp":"/insert[a-z]* (?<text>[\\\\s\\\\S]+)/i"},{"command":"handleSolutionClick","trigger":"solution","description":"Toggle the solution"},{"command":"submitHandler","trigger":"submit","description":"Submit your answer"},{"command":"triggerHint","trigger":"hint","description":"Toggle hint"}]')},583:function(t,e,i){"use strict";var s=i(555),n=i.n(s),o=i(0),a=i.n(o),r=(i(404),function(t){var e=t.children,i=n()(t,["children"]);return a.a.createElement("div",i,e)});r.defaultProps={className:"",style:{}},e.a=r},611:function(t,e,i){"use strict";var s=i(406),n=Object(s.a)((function(){return i.e(203).then(i.bind(null,890))}));e.a=n},705:function(t,e,i){"use strict";var s=i(406),n=Object(s.a)((function(){return i.e(388).then(i.bind(null,1052))}));e.a=n},752:function(t,e,i){"use strict";var s=i(405),n=i(408),o=i(409),a=i.n(o),r=i(0),l=i.n(r),u=i(411),c=l.a.forwardRef((function(t,e){var i=t.bsPrefix,o=t.className,r=Object(n.a)(t,["bsPrefix","className"]),c=Object(u.a)(i,"btn-toolbar");return l.a.createElement("div",Object(s.a)({},r,{ref:e,className:a()(o,c)}))}));c.displayName="ButtonToolbar",c.defaultProps={role:"toolbar"},e.a=c},831:function(t,e,i){"use strict";var s=i(406),n=Object(s.a)((function(){return Promise.all([i.e(0),i.e(361)]).then(i.bind(null,1402))}));e.a=n}}]);