(window.webpackJsonp=window.webpackJsonp||[]).push([[851],{1557:function(e,t,n){"use strict";var i=function(e,t){return e+o(t)},o=function(e){return null===e||"boolean"==typeof e||void 0===e?"":"number"==typeof e?e.toString():"string"==typeof e?e:Array.isArray(e)?e.reduce(i,""):function(e){return Object.prototype.hasOwnProperty.call(e,"props")}(e)&&Object.prototype.hasOwnProperty.call(e.props,"children")?o(e.props.children):""};o.default=o,e.exports=o},2725:function(e,t,n){"use strict";var i=n(0),o=n(450),s=n.n(o),a=n(446),r=n.n(a),c=n(442),u=n.n(c),l=n(517),d=n.n(l),p=n(494),h=n(1303),f=n(1308),v=n(1434),b=n(1307),m=n(1309),g=n(1310),y=n(1311),w=n(1313),k=s()("isle:convert-json");t.a=function e(t){k("Convert JSON ".concat(t.component," object to React element..."));var n=d()(t.children);if(r()(n))for(var o=0;o<n.length;o++){var s=n[o];u()(s)&&(n[o]=e(s))}else u()(n)&&(n=e(n));var a=t.component;switch(a){case"Fragment":a=i.Fragment;break;case"TeX":a=p.a;break;case"FreeTextQuestion":a=h.a;break;case"MultipleChoiceMatrix":a=v.a;break;case"MultipleChoiceQuestion":a=f.a;break;case"MatchListQuestion":a=b.a;break;case"NumberQuestion":a=m.a;break;case"OrderQuestion":a=g.a;break;case"RangeQuestion":a=y.a;break;case"SelectQuestion":a=w.a;break;default:a=t.component}var c=t.props||{};return Object(i.createElement)(a,c,n)}},424:function(e,t,n){"use strict";var i=n(405),o=n(408),s=n(409),a=n.n(s),r=n(0),c=n.n(r),u=n(411),l=n(464),d=c.a.forwardRef((function(e,t){var n=e.bsPrefix,s=e.variant,r=e.size,d=e.active,p=e.className,h=e.block,f=e.type,v=e.as,b=Object(o.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),m=Object(u.a)(n,"btn"),g=a()(p,m,d&&"active",s&&m+"-"+s,h&&m+"-block",r&&m+"-"+r);if(b.href)return c.a.createElement(l.a,Object(i.a)({},b,{as:v,ref:t,className:a()(g,b.disabled&&"disabled")}));t&&(b.ref=t),f?b.type=f:v||(b.type="button");var y=v||"button";return c.a.createElement(y,Object(i.a)({},b,{className:g}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=d},558:function(e,t,n){"use strict";var i=n(405),o=n(408),s=n(409),a=n.n(s),r=n(0),c=n.n(r),u=n(411),l=c.a.forwardRef((function(e,t){var n=e.bsPrefix,s=e.size,r=e.toggle,l=e.vertical,d=e.className,p=e.as,h=void 0===p?"div":p,f=Object(o.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),v=Object(u.a)(n,"btn-group"),b=v;return l&&(b=v+"-vertical"),c.a.createElement(h,Object(i.a)({},f,{ref:t,className:a()(d,b,s&&v+"-"+s,r&&v+"-toggle")}))}));l.displayName="ButtonGroup",l.defaultProps={vertical:!1,toggle:!1,role:"group"},t.a=l},6532:function(e,t,n){"use strict";n.r(t);n(421);var i=n(492),o=n.n(i),s=n(407),a=n.n(s),r=n(414),c=n.n(r),u=n(415),l=n.n(u),d=n(425),p=n.n(d),h=n(418),f=n.n(h),v=n(419),b=n.n(v),m=n(417),g=n.n(m),y=n(412),w=n.n(y),k=(n(608),n(483),n(488),n(478),n(0)),S=n.n(k),C=(n(404),n(1556)),q=n.n(C),N=n(4172),F=n(1557),x=n.n(F),O=n(593),j=n(558),z=n(424),R=n(892),Q=n(465),P=n(450),E=n.n(P),B=n(780),M=n.n(B),I=n(446),T=n.n(I),D=n(442),H=n.n(D),L=n(760),V=n.n(L),A=n(432),J=n(666),G=n.n(J),U=n(1316),X=n(1303),_=n(1308),K=n(1307),W=n(1309),Y=n(1310),Z=n(1311),$=n(1313),ee=n(651),te=n(463),ne=n(2725),ie=n(554),oe=n(462),se=n(422),ae=n(439),re=(n(427),n(416),n(597));function ce(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=g()(e);if(t){var o=g()(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return b()(this,n)}}var ue=function(e){f()(n,e);var t=ce(n);function n(){var e;c()(this,n);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return e=t.call.apply(t,[this].concat(o)),w()(p()(e),"clickHide",(function(){e.props.onHide()})),w()(p()(e),"handleClick",(function(){e.props.onSubmit(),e.props.onHide()})),e}return l()(n,[{key:"render",value:function(){return a()(re.a,{onHide:this.clickHide,show:this.props.show,dialogClassName:"modal-w30"},void 0,a()(re.a.Header,{closeButton:!0},void 0,a()(re.a.Title,{as:"h4"},void 0,this.props.t("finish"),"?")),a()(re.a.Body,{},void 0,this.props.t("finish-prompt")),a()(re.a.Footer,{},void 0,a()(z.a,{variant:"secondary",onClick:this.clickHide},void 0,this.props.t("cancel")),a()(z.a,{variant:"warning",onClick:this.handleClick},void 0,this.props.t("confirm"))))}}]),n}(k.Component);ue.defaultProps={onHide:function(){},onSubmit:function(){}};var le=ue;n(2825),n(343);function de(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=g()(e);if(t){var o=g()(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return b()(this,n)}}Object(se.a)("Quiz");var pe=E()("isle:quiz"),he=Object(ie.a)("quiz"),fe={header:{fontSize:24,bold:!0,margin:[0,0,0,10]},author:{fontSize:16,italics:!0,margin:[0,0,0,10],alignment:"center"},date:{fontSize:16,italics:!0,alignment:"right",margin:[0,15,0,15]},subheader:{fontSize:18,bold:!0,margin:[0,30,0,10]},question:{fontSize:15,margin:[0,10,0,0],italics:!0},boldTitle:{fontSize:14,margin:[0,5,0,5],bold:!0}};function ve(e){return H()(e)&&e.component}var be=a()("br",{}),me=function(e){f()(n,e);var t=de(n);function n(e){var i;c()(this,n),pe("Instantiating quiz component..."),i=t.call(this,e),w()(p()(i),"toggleFinishModal",(function(){i.setState({showFinishModal:!i.state.showFinishModal})})),w()(p()(i),"handleFinishClick",(function(){i.setState({counter:i.state.count},(function(){i.handleNextClick()}))})),w()(p()(i),"handleNextClick",(function(){for(var e=i.quizBody.getElementsByClassName("submit-button"),t=0;t<e.length;t++)e[t].click();pe("Display next question...");var n=i.state.questions[i.state.current],o=i.context;i.state.answered||o.log({id:n.props.id,type:oe.Rb,value:!0}),n.props&&n.props.id&&i.state.selectedConfidence&&o.log({id:n.props.id+"_confidence",type:oe.Qb,value:i.state.selectedConfidence}),i.props.onSubmit();var s={},a=i.state.counter;(a+=1)>=i.state.count?(pe("No further questions should be shown..."),s.finished=!0,i.props.onFinished()):(a===i.state.count-1&&(s.last=!0),s.current=i.sample()[0],pe("Selected question at index "+s.current)),s.answered=!1,s.selectedConfidence=null,s.answerSelected=!1,s.counter=a,i.setState(s)})),w()(p()(i),"markSelected",(function(){pe("Mark answer as selected..."),i.setState({answerSelected:!0})})),w()(p()(i),"handleSubmission",(function(e){var t,n,o=i.state.questions[i.state.current],s=i.state.answers.slice();if(o.props){if(T()(o.props.answers)&&void 0!==o.props.solution){t=o.props.answers[e].content;var a=o.props.solution;if(T()(a)){n="";for(var r=0;r<a.length;r++)n+=o.props.answers[a[r]],n+="; "}else n=o.props.answers[a].content}else if(T()(o.props.elements)){pe("Create answer and solution string for <MatchListQuestion />"),t="",n="";for(var c=0;c<o.props.elements.length;c++){for(var u=o.props.elements[c],l=0;l<e.length;l++){var d=e[l];if(d.a===u.a){t+="".concat(d.a,":").concat(d.b,"; ");break}}n+="".concat(u.a,":").concat(u.b,"; ")}}else if(T()(o.props.options)){t="",n="";for(var p=0;p<o.props.options.length;p++){var h=o.props.options[p],f=e[p];n+="".concat(h.text,"; "),t+="".concat(f.text,"; ")}}else t=e,n=o.props.solution,T()(n)&&(t=t.join(", "),n=n.join(", "));s[i.state.current]={question:o.props?o.props.question:null,answer:t,solution:n,counter:i.state.counter}}i.setState({answered:!0,answers:s})})),w()(p()(i),"handleConfidenceChange",(function(e){var t=e.target.value;pe("Choosing confidence: "+t);var n=i.state.confidences.slice();n[i.state.current]=t,i.setState({selectedConfidence:t,confidences:n})})),w()(p()(i),"toggleInstructorView",(function(){i.setState({showInstructorView:!i.state.showInstructorView})})),i.id=e.id||he(e);var o=e.questions;e.questions||(o=[]);var s=null;if(o.length>0){var a=G()(0,o.length,1);i.sample=M.a.factory(a,{size:1,mutate:!0,replace:!1}),s=i.sample()[0]}return i.state={answers:new Array(o.length),answered:!1,confidences:new Array(o.length),current:s,count:e.count||o.length,counter:0,finished:!1,answerSelected:!1,last:!1,selectedConfidence:null,showInstructorView:!1,showFinishModal:!1,questions:[],questionIDs:[]},i}return l()(n,[{key:"componentDidUpdate",value:function(e){if(pe("Component did update..."),this.props.count!==e.count||this.props.questions&&this.props.questions.length!==e.questions.length){pe("Resetting component...");var t=G()(0,this.props.questions.length,1);this.sample=M.a.factory(t,{size:1,mutate:!0}),this.setState({count:this.props.count||this.prop.questions.length})}}},{key:"downloadResponsesFactory",value:function(e){var t=this;return function(){var n={content:[{text:t.props.t("answer-for",{id:t.id}),style:"header",alignment:"center"}],styles:fe},i=t.context;V()(i.user)||n.content.push({text:"".concat(t.props.t("by")," ").concat(i.user.name," (").concat(i.user.email,")"),style:"author"});var o=new Date;n.content.push({text:"".concat(o.toLocaleDateString()," - ").concat(o.toLocaleTimeString()),style:"date"});for(var s=0;s<e.length;s++){var a=e[s],r=a.question,c=a.answer,u=a.solution,l=a.confidence;r=Object(A.isPrimitive)(r)?r:x()(r),c=Object(A.isPrimitive)(c)?c:x()(c),u=Object(A.isPrimitive)(u)?u:x()(u),n.content.push({text:r,style:"question"}),n.content.push({text:"".concat(t.props.t("answer"),":"),style:"boldTitle"}),n.content.push({text:c,style:{color:c===u?"#3c763d":"#d9534f",margin:[0,0,0,10]}}),l&&(n.content.push({text:"".concat(t.props.t("your-confidence"),":"),style:"boldTitle"}),n.content.push({text:l})),n.content.push({text:"".concat(t.props.t("solution"),":"),style:"boldTitle"}),n.content.push({text:Object(A.isPrimitive)(u)?u:x()(u)})}q.a.createPdf(n).download("responses.pdf")}}},{key:"renderScoreboard",value:function(){var e=this;if(pe("Rendering scoreboard..."),!this.props.provideFeedback)return a()("h3",{},void 0,this.props.t("quiz-finished"));for(var t=this.state.answers.slice(),n=0;n<t.length;n++)t[n]&&(t[n].confidence=this.state.confidences[n]);return t.sort((function(e,t){return e.counter>t.counter})),t=t.filter((function(e){return H()(e)})),a()("div",{},void 0,a()("p",{},void 0,this.props.duration?this.props.t("time-up"):this.props.t("quiz-finished"),this.props.t("summary-label"),":"),a()("table",{className:"table table-bordered"},void 0,a()("thead",{},void 0,a()("tr",{},void 0,a()("th",{},void 0,this.props.t("question")),a()("th",{},void 0,this.props.t("your-answer")),a()("th",{},void 0,this.props.t("solution")),this.props.confidence?a()("th",{},void 0,this.props.t("your-confidence")):null)),a()("tbody",{},void 0,t.map((function(t,n){var i;i=t.answer===t.solution?"quiz-right-answer":"quiz-wrong-answer";var o=t.question;ve(o)&&(o=Object(ne.a)(o));var s=t.answer;ve(s)&&(s=Object(ne.a)(s));var r=t.solution;return ve(r)&&(r=Object(ne.a)(r)),a()("tr",{className:i},n,a()("td",{},void 0,o),a()("td",{},void 0,s),a()("td",{},void 0,r),e.props.confidence?a()("td",{},void 0,t.confidence):null)})))),this.props.downloadButton?a()(z.a,{onClick:this.downloadResponsesFactory(t)},void 0,this.props.t("download-pdf")):null)}},{key:"renderQuestion",value:function(e,t){if(!e)return null;var n=e.props||{};switch(ve(n.question)&&(pe("Question property is an object, convert to JSX..."),n.question=Object(ne.a)(n.question)),e.component){case"Fragment":case"div":return Object(ne.a)(e);case"FreeTextQuestion":return S.a.createElement(X.a,o()({disableSubmitNotification:!0,feedback:!1,provideFeedback:!1},n,{onChange:this.markSelected,onSubmit:this.handleSubmission,id:t}));case"MultipleChoiceQuestion":return S.a.createElement(_.a,o()({disableSubmitNotification:!0,feedback:!1,provideFeedback:"none"},n,{onChange:this.markSelected,onSubmit:this.handleSubmission,id:t}));case"MatchListQuestion":return S.a.createElement(K.a,o()({disableSubmitNotification:!0,feedback:!1,showSolution:!1},n,{onChange:this.markSelected,onSubmit:this.handleSubmission,id:t}));case"NumberQuestion":return S.a.createElement(W.a,o()({disableSubmitNotification:!0,feedback:!1,provideFeedback:!1},n,{onChange:this.markSelected,onSubmit:this.handleSubmission,id:t}));case"OrderQuestion":return S.a.createElement(Y.a,o()({disableSubmitNotification:!0,feedback:!1,provideFeedback:!1},n,{onChange:this.markSelected,onSubmit:this.handleSubmission,id:t}));case"RangeQuestion":return S.a.createElement(Z.a,o()({disableSubmitNotification:!0,feedback:!1,provideFeedback:!1},n,{onChange:this.markSelected,onSubmit:this.handleSubmission,id:t}));case"SelectQuestion":return S.a.createElement($.a,o()({disableSubmitNotification:!0,feedback:!1,provideFeedback:!1},n,{onChange:this.markSelected,onSubmit:this.handleSubmission,id:t}));default:return S.a.createElement(e.type,o()({},e.props,n,{disableSubmitNotification:!0,feedback:!1,provideFeedback:!1,onChange:this.markSelected,onSubmit:this.handleSubmission,id:t}))}}},{key:"renderConfidenceSurvey",value:function(){return this.props.confidence?a()(Q.a,{className:"center",style:{width:"75%"}},void 0,a()(O.a,{className:"center"},void 0,a()(R.a.Label,{},void 0,this.props.t("confidence-prompt")),be,a()(R.a.Check,{type:"radio",label:this.props.t("guessed"),checked:"Guessed"===this.state.selectedConfidence,value:"Guessed",inline:!0,onClick:this.handleConfidenceChange})," ",a()(R.a.Check,{type:"radio",label:this.props.t("somewhat-sure"),checked:"Somewhat sure"===this.state.selectedConfidence,value:"Somewhat sure",inline:!0,onClick:this.handleConfidenceChange})," ",a()(R.a.Check,{type:"radio",label:this.props.t("confident"),checked:"Confident"===this.state.selectedConfidence,value:"Confident",inline:!0,onClick:this.handleConfidenceChange}))):null}},{key:"renderFooterNodes",value:function(e,t){var n,i=this;return e.props&&(n=e.props.id),n||(n="".concat(this.id,"-").concat(t)),S.a.Children.map(this.props.footerNodes,(function(e,t){return S.a.cloneElement(e,{id:"".concat(e.props.id,"-footer-").concat(n),key:"".concat(i.state.current,"-").concat(t)})}))}},{key:"render",value:function(){var e,t=this;if(pe("Rendering component..."),e=!this.state.finished&&(this.state.answered||this.state.answerSelected||this.props.skippable),this.state.showInstructorView)return a()(Q.a,{className:"quiz"},void 0,a()(Q.a.Header,{},void 0,a()("span",{},void 0,a()("h3",{style:{display:"inline-block"}},void 0,this.props.t("instructor-view")),a()(z.a,{variant:"secondary",style:{float:"right"},onClick:this.toggleInstructorView},void 0,this.props.t("close-instructor-view")))),a()(Q.a.Body,{},void 0,this.state.questions.map((function(e,n){var i=t.state.questionIDs[n];return a()("div",{},n,a()("h3",{},void 0,t.props.t("question")," ",n+1,":"),t.renderQuestion(e,i),t.renderFooterNodes(e,n))}))),a()(z.a,{className:"quiz-button",variant:"secondary",onClick:this.toggleInstructorView},void 0,this.props.t("close-instructor-view")));var n=this.state.questions[this.state.current],i=this.state.questionIDs[this.state.current];return a()(k.Fragment,{},void 0,this.props.duration?a()(U.a,{invisible:!0,id:this.id,active:this.props.active,duration:this.props.duration,onTimeUp:function(){pe("Time is up..."),t.setState({finished:!0},(function(){t.props.onFinished()}))}}):null,a()(Q.a,{className:"quiz"},void 0,a()(Q.a.Header,{},void 0,this.state.finished?a()("h3",{},void 0,this.props.t("answer-summary")):a()("h3",{},void 0,this.props.t("question")," ",this.state.counter+1,"/",this.state.count)),a()(Q.a.Body,{},void 0,S.a.createElement("div",{ref:function(e){t.quizBody=e}},this.state.finished?this.renderScoreboard():a()("span",{},this.state.current,this.renderQuestion(n,i)),this.state.finished?null:this.renderConfidenceSurvey(),n?this.renderFooterNodes(n):null,a()(j.a,{style:{float:"right"}},void 0,a()(ee.a,{owner:!0},void 0,a()(z.a,{className:"quiz-button",variant:"secondary",onClick:this.toggleInstructorView,style:{marginRight:10}},void 0,this.props.t("open-instructor-view"))),!this.props.showFinishButton&&!this.state.last||this.state.finished?null:a()(z.a,{style:{marginRight:10},className:"quiz-button",variant:"secondary",onClick:this.state.last?this.handleFinishClick:this.toggleFinishModal},void 0,this.props.finishLabel||this.props.t("finish-label")),e&&!this.state.last?a()(z.a,{className:"quiz-button",variant:"primary",onClick:this.handleNextClick,disabled:this.props.forceConfidence&&!this.state.selectedConfidence&&this.state.answerSelected},void 0,this.props.nextLabel||this.props.t("next-question")):null)))),a()(le,{show:this.state.showFinishModal,onSubmit:this.handleFinishClick,onHide:this.toggleFinishModal,t:this.props.t}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.questions&&e.questions.length!==t.questions.length){for(var n=e.questions.length,i=new Array(n),o=0;o<n;o++){var s=e.questions[o];s.props&&s.props.id?i[o]=s.props.id:i[o]="".concat(t.id,"-").concat(o)}return{questions:e.questions,questionIDs:i}}return null}}]),n}(k.Component);me.defaultProps={confidence:!1,forceConfidence:!1,count:null,active:!0,duration:null,skippable:!0,footerNodes:[],nextLabel:null,provideFeedback:!0,showFinishButton:!1,finishLabel:null,downloadButton:!0,onFinished:function(){},onSubmit:function(){}},me.contextType=te.a;t.default=Object(N.a)("Quiz")(Object(ae.a)(me))},698:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(0);function o(e){var t=Object(i.useRef)(null);return Object(i.useEffect)((function(){t.current=e})),t.current}}}]);