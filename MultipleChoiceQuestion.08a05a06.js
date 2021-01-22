(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{1161:function(e,t,n){"use strict";var r=n(366),s=Object(r.a)((function(){return Promise.all([n.e(0),n.e(6),n.e(371),n.e(163)]).then(n.bind(null,1580))}));t.a=s},1979:function(e,t,n){"use strict";var r=n(434),s=n.n(r),i=n(812),a=n.n(i);t.a=function(e,t,n){if(a()(e)){var r=e[t];if(s()(r)&&(r=r.filter((function(e){return e.type===n}))).length>0)return r[0].value}return null}},2268:function(e,t,n){"use strict";var r=n(0),s=n(420),i=n.n(s),a=n(434),o=n.n(a),c=n(459),l=n.n(c),u=n(629),p=n.n(u),d=n(545),v=n(1540),b=n(1543),h=n(1831),f=n(1541),m=n(1544),w=n(1545),g=n(1546),k=n(1547),S=i()("isle:convert-json");t.a=function e(t){S("Convert JSON ".concat(t.component," object to React element..."));var n=p()(t.children);if(o()(n))for(var s=0;s<n.length;s++){var i=n[s];l()(i)&&(n[s]=e(i))}else l()(n)&&(n=e(n));var a=t.component;switch(a){case"Fragment":a=r.Fragment;break;case"TeX":a=d.a;break;case"FreeTextQuestion":a=v.a;break;case"MultipleChoiceMatrix":a=h.a;break;case"MultipleChoiceQuestion":a=b.a;break;case"MatchListQuestion":a=f.a;break;case"NumberQuestion":a=m.a;break;case"OrderQuestion":a=w.a;break;case"RangeQuestion":a=g.a;break;case"SelectQuestion":a=k.a;break;default:a=t.component}var c=t.props||{};return Object(r.createElement)(a,c,n)}},4754:function(e,t,n){"use strict";n.r(t);n(415),n(412),n(401),n(400),n(410),n(382),n(370),n(384);var r=n(368),s=n.n(r),i=n(374),a=n.n(i),o=n(375),c=n.n(o),l=n(390),u=n.n(l),p=n(379),d=n.n(p),v=n(380),b=n.n(v),h=n(378),f=n.n(h),m=n(372),w=n.n(m),g=n(0),k=n.n(g),S=(n(360),n(6664)),y=n(397),O=n(1197),C=n(455),j=n(420),x=n.n(j),A=n(434),P=n.n(A),N=n(414),F=n(580),E=n(717),q=n.n(E),D=n(490),Q=n.n(D),M=n(967),z=n(752),R=n(976),T=n(757),I=n(1140),J=n(1161),L=n(440),B=n(1939),U=n.n(B);var H=function(e){switch(e=U()(e)){case"zeroth":case"zero":case"0":return 0;case"first":case"one":case"1":return 1;case"second":case"two":case"2":return 2;case"third":case"three":case"3":return 3;case"fourth":case"four":case"4":return 4;case"fifth":case"five":case"5":return 5;case"sixth":case"six":case"6":return 6;case"sevent":case"seven":case"7":return 7;case"eighth":case"eight":case"8":return 8;case"ninth":case"nine":case"9":return 9;case"tenth":case"ten":case"10":return 10}},W=n(646),X=n(1979),_=n(445),G=n(617),K=n(393),V=n(6192),Y=n(961),Z=n(531),$=n(459),ee=n.n($),te=n(989),ne=n(2268);n(71);var re=function(e){var t;!0===e.correct?t="success":!1===e.correct?t="danger":!0===e.solution&&(t="warning");var n,r=(n=e.answerContent,ee()(n)&&n.component?Object(ne.a)(e.answerContent):e.answerContent),i=s()(Z.a,{id:e.no},void 0,s()("strong",{},void 0,e.solution?"Correct answer":"Incorrect answer",e.answerExplanation?": ":""),e.answerExplanation);return e.disabled?s()(Y.a,{className:"multiple-choice-answer",variant:t,disabled:!0},void 0,r):e.submitted?s()(te.a,{trigger:["click","hover"],placement:"right",overlay:i},void 0,s()(Y.a,{className:"multiple-choice-answer",onClick:e.onAnswerSelected,variant:t},void 0,r)):s()(Y.a,{className:"multiple-choice-answer",onClick:e.onAnswerSelected,active:e.active},void 0,r)};re.defaultProps={correct:null};var se=re;var ie=function(e){var t;!0===e.correct?t="success":!1===e.correct&&(t="danger");var n,r=(n=e.answerContent,ee()(n)&&n.component?Object(ne.a)(e.answerContent):e.answerContent);if(e.disabled)return s()(Y.a,{className:"multiple-choice-answer",variant:t,disabled:!0},void 0,r);if(Object(F.isPrimitive)(e.correct)||e.isSolved){var i=s()(Z.a,{id:e.no},void 0,s()("strong",{},void 0,e.solution?"Correct answer":"Incorrect answer",e.answerExplanation?": ":""),e.answerExplanation);return s()(te.a,{trigger:["click","hover"],placement:"right",overlay:i},void 0,s()(Y.a,{className:"multiple-choice-answer",onClick:e.onAnswerSelected,variant:t},void 0,r))}return s()(Y.a,{className:"multiple-choice-answer",onClick:e.onAnswerSelected,active:e.active},void 0,r)};ie.defaultProps={correct:null};var ae=ie;var oe=function(e){var t;Object(F.isPrimitive)(e.correct)&&(t="info");var n,r=(n=e.answerContent,ee()(n)&&n.component?Object(ne.a)(e.answerContent):e.answerContent);return e.disabled?s()(Y.a,{className:"multiple-choice-answer",variant:t,disabled:!0},void 0,r):s()(Y.a,{className:"multiple-choice-answer",variant:t,onClick:e.onAnswerSelected,active:e.active},void 0,r)};oe.defaultProps={correct:null};var ce=oe,le=n(418),ue=s()("br",{}),pe=function(e){var t=e.content;return Object(le.isPrimitive)(t)&&(t=s()("label",{},void 0,t)),s()("span",{className:"question"},void 0,t,ue,s()("i",{style:{fontSize:"0.8rem"}},void 0,e.task,":"))};function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?de(Object(n),!0).forEach((function(t){w()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function be(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f()(e);if(t){var s=f()(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return b()(this,n)}}Object(K.a)("MultipleChoiceQuestion");var he=x()("isle:multiple-choice-question"),fe=Object(W.a)("multiple-choice-question"),me=function(e){d()(n,e);var t=be(n);function n(e,r){var i;a()(this,n),i=t.call(this,e),w()(u()(i),"logHint",(function(e){he("Logging hint..."),i.context.log({id:i.id,type:_.zb,value:e})})),w()(u()(i),"sendSubmitNotification",(function(e,t,n){var r,s=i.context,a=i.props.solution,o=!q()(a),c=o&&P()(a),l="success";"incremental"===i.props.provideFeedback&&o?e?r=i.props.t("answer-correct"):(l="error",r=0!==t&&c?n<a.length?i.props.t("answer-incorrect-incremental-missing"):n===a.length?i.props.t("answer-incorrect-incremental-equal"):i.props.t("answer-incorrect-incremental-extra"):i.props.t("answer-incorrect-incremental")):"full"===i.props.provideFeedback&&o?e?r=i.props.t("answer-correct"):(r=i.props.t("answer-incorrect-full"),function(e){for(var t=0;t<e.length;t++)if(e[t].explanation)return!0;return!1}(i.props.answers)&&(r+=i.props.t("answer-incorrect-explanations")),l="error"):r=i.props.t("answer-submitted-nofeedback"),s.addNotification({title:i.props.t("answer-submitted"),message:r,level:l})})),w()(u()(i),"submitQuestion",(function(){var e=i.props.solution,t=q()(e),n=i.context,r="incremental"!==i.props.provideFeedback||t?new Array(i.props.answers.length):i.state.correct.slice();n.log({id:i.id,type:_.Ab,value:i.state.active});var s=!1;if(P()(e)){for(var a=0;a<i.state.active.length;a++)!0===i.state.active[a]&&(Q()(e,a)?r[a]=!0:r[a]=!1);for(var o=0,c=0,l=0;l<r.length;l++)Object(F.isPrimitive)(r[l])&&(o+=1,r[l]&&(c+=1));s=!(c<e.length||o>e.length);var u=new Array(i.props.answers.length);i.props.disableSubmitNotification||i.sendSubmitNotification(s,c,o),i.setState({correct:r,submitted:!0,isSolved:s,active:u})}else{for(var p=0;p<r.length;p++)i.state.active===p&&(p===e||t?(r[p]=!0,s=!0):r[p]=!1);i.props.disableSubmitNotification||i.sendSubmitNotification(s),i.setState({correct:r,submitted:!0,active:null,isSolved:s})}i.props.onSubmit(i.state.active)})),w()(u()(i),"checkDisabledStatus",(function(){var e=P()(i.props.solution)&&P()(i.state.active);if(i.props.disabled)return!0;if(!e&&!Object(N.isPrimitive)(i.state.active))return!0;if(q()(i.props.solution))return!1;switch(i.props.provideFeedback){case"full":return e?i.state.submitted:i.state.submitted||!i.state.answerSelected;case"incremental":return!!q()(i.state.active)||!!i.state.submitted&&i.state.isSolved}return!1})),w()(u()(i),"triggerFocusEvent",(function(){var e=i.context;e.log({type:G.h,value:e.user.email,id:i.id,noSave:!0},"owners")})),w()(u()(i),"renderAnswerOptionsMultiple",(function(e,t){if("none"===i.props.provideFeedback||q()(i.props.solution))return s()(ce,{answerContent:e.content,active:i.state.active[t],correct:i.state.correct[t],disabled:i.props.disabled,onAnswerSelected:function(){i.triggerFocusEvent();var e=i.state.active.slice();e[t]=!e[t],i.setState({active:e}),i.props.onChange(e)}},"".concat(e.content,"-").concat(t));var n=Q()(i.props.solution,t),r={key:"".concat(e.content,"-").concat(t),no:t,answerContent:e.content,answerExplanation:e.explanation,active:i.state.active[t],correct:i.state.correct[t],disabled:i.props.disabled,submitted:i.state.submitted,solution:n,isSolved:i.state.isSolved,onAnswerSelected:function(){if(i.triggerFocusEvent(),!i.state.submitted||"incremental"===i.props.provideFeedback){var e=i.state.active.slice(),n=i.state.correct.slice();!1===i.state.correct[t]?n[t]=void 0:e[t]=!e[t],i.setState({correct:n,active:e}),i.props.onChange(e)}}};return"full"===i.props.provideFeedback?k.a.createElement(se,r):k.a.createElement(ae,r)})),w()(u()(i),"renderAnswerOptionsSingle",(function(e,t){if("none"===i.props.provideFeedback||q()(i.props.solution))return s()(ce,{answerContent:e.content,active:i.state.active===t,correct:i.state.correct[t],disabled:i.props.disabled,onAnswerSelected:function(){i.triggerFocusEvent(),i.setState({active:t,answerSelected:!0}),i.props.onChange(t)}},t);var n=i.props.solution===t,r={key:"".concat(e.content,"-").concat(t),no:t,answerContent:e.content,answerExplanation:e.explanation,active:i.state.active===t,correct:i.state.correct[t],disabled:i.props.disabled,submitted:i.state.submitted,solution:n,isSolved:i.state.isSolved,onAnswerSelected:function(){if(i.triggerFocusEvent(),!i.state.submitted||"incremental"===i.props.provideFeedback){var e=i.state.correct.slice();!1===i.state.correct[t]&&(e[t]=void 0),i.setState({active:t,correct:e,answerSelected:!0}),i.props.onChange(t)}}};return"full"===i.props.provideFeedback?k.a.createElement(se,r):k.a.createElement(ae,r)})),i.id=e.id||fe(e);var o=r.currentUserActions,c=Object(X.a)(o,i.id,_.Ab);return i.state={correct:new Array(e.answers.length),answerSelected:!1,question:e.question,isSolved:!1},e.displaySolution?(i.state.submitted=!0,i.state.active=i.props.solution):P()(c)||Object(N.isPrimitive)(c)?(i.state.active=c,i.state.submitted=!0):(i.state.active=P()(i.props.solution)?new Array(e.answers.length):null,i.state.submitted=!1),i}return c()(n,[{key:"componentDidMount",value:function(){var e=this;this.props.displaySolution&&this.submitQuestion();var t=this.context;t&&(this.unsubscribe=t.subscribe((function(t,n){if(t===G.A){var r=n[e.id];if(P()(r)&&(r=r.filter((function(e){return e.type===_.Ab}))).length>0){var s=r[0].value;e.setState({active:s,submitted:"none"===e.props.provideFeedback})}}})))}},{key:"componentDidUpdate",value:function(e){if(e.solution!==this.props.solution||e.answers.length!==this.props.answers.length){var t=P()(this.props.solution)?new Array(this.props.answers.length):null;this.setState({active:t})}}},{key:"componentWillUnmount",value:function(){this.unsubscribe&&this.unsubscribe()}},{key:"selectAnswer",value:function(e){he("Parse input: ".concat(e)),e=H(e)-1,he("Select answer at position ".concat(e)),this.setState({active:e,answerSelected:!0})}},{key:"renderSubmitButton",value:function(){var e,t=this.context;if(this.props.until&&t.startTime>this.props.until)return s()("span",{className:"title",style:{marginLeft:4}},void 0,this.props.t("question-closed"));if(this.state.submitted)switch(this.props.provideFeedback){case"none":e=this.props.t("resubmit");break;case"full":default:e=this.props.t("submitted");break;case"incremental":e=this.props.t("submit")}else e=this.props.t("submit");return s()(y.a,{className:"submit-button",size:"small",onClick:this.submitQuestion,disabled:this.checkDisabledStatus(),block:!0},void 0,e)}},{key:"render",value:function(){var e=this.props,t=e.answers,n=e.hints,r=e.chat,i=e.hintPlacement,a=e.question,o=P()(this.props.solution)&&P()(this.state.active),c=n.length,l={};return this.props.feedback?(l.width="calc(100%-60px)",l.display="inline-block"):l.width="100%",s()(C.a,{id:this.id,className:"multiple-choice-question-container",style:ve({},this.props.style)},void 0,s()(C.a.Body,{style:l},void 0,s()(pe,{content:a,task:o?this.props.t("chose-all-apply"):this.props.t("select-answer")}),s()(O.a,{},void 0,o?t.map(this.renderAnswerOptionsMultiple):t.map(this.renderAnswerOptionsSingle)),s()("div",{className:"multiple-choice-question-toolbar"},void 0,this.renderSubmitButton(),c>0?s()(R.a,{size:"small",onClick:this.logHint,hints:n,placement:i}):null,r&&this.id?s()("div",{style:{display:"inline-block"}},void 0,s()(z.a,{size:"small",for:this.id})):null,s()(I.a,{reference:this,id:this.props.voiceID,commands:V})),this.id?s()("div",{style:{marginTop:"6px"}},void 0,s()(M.a,{buttonLabel:this.props.t("answers"),id:this.id,data:{type:"factor",levels:this.props.answers.map((function(e){return e.content})),question:this.props.question,solution:this.props.solution},info:_.Ab,points:this.props.points}),this.props.feedback?s()(T.a,{id:this.id+"_feedback"}):null):null,s()(J.a,{for:this.id,points:this.props.points})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.question!==t.question?{submitted:!1,question:e.question}:null}}]),n}(g.Component);me.defaultProps={question:"",solution:null,hints:[],hintPlacement:"bottom",feedback:!0,disabled:!1,displaySolution:!1,chat:!1,provideFeedback:"incremental",disableSubmitNotification:!1,voiceID:null,until:null,points:10,style:{},onChange:function(){},onSubmit:function(){}},me.contextType=L.a;t.default=Object(S.a)("MultipleChoiceQuestion")(me)},6192:function(e){e.exports=JSON.parse('[{"command":"selectAnswer","trigger":["choose","pick","take"],"description":"Select an answer","params":["no"],"regexp":["/(?:choose|pick|take) (?:the )?(?<no>[\\\\s\\\\S]*) answer/i","/(?:choose|pick|take) (?:[\\\\s\\\\S]*?)?answer (?:number )?(?<no>[\\\\s\\\\S]*)/i"]},{"command":"submitQuestion","trigger":["submit"],"description":"Submit answer"}]')},752:function(e,t,n){"use strict";var r=n(366),s=Object(r.a)((function(){return n.e(137).then(n.bind(null,1179))}));t.a=s},976:function(e,t,n){"use strict";var r=n(366),s=Object(r.a)((function(){return n.e(166).then(n.bind(null,1369))}));t.a=s}}]);