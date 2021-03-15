(window.webpackJsonp=window.webpackJsonp||[]).push([[746],{1414:function(t,e,i){"use strict";var a=i(405),s=Object(a.a)((function(){return i.e(1024).then(i.bind(null,2798))}));e.a=s},3752:function(t,e,i){"use strict";i.r(e);i(420);var a=i(407),s=i.n(a),n=i(414),r=i.n(n),o=i(415),c=i.n(o),l=i(424),u=i.n(l),p=i(417),d=i.n(p),h=i(418),f=i.n(h),m=i(416),v=i.n(m),b=i(412),y=i.n(b),w=(i(611),i(458),i(0)),g=(i(404),i(450)),k=i.n(g),N=i(4096),x=i(1368),S=i.n(x),C=i(431),O=i(422),R=i(466),P=i(880),j=i(494),A=i(618),T=i(1414),B=i(576),I=i(1274),E=i(465),M=i(421),q=i(464),z=i(439);i(329);function H(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,a=v()(t);if(e){var s=v()(this).constructor;i=Reflect.construct(a,arguments,s)}else i=a.apply(this,arguments);return f()(this,i)}}Object(M.a)("MultipleChoiceQuestion");var L=k()("isle:multiple-choice-matrix"),Q=function(t){d()(i,t);var e=H(i);function i(t){var a;r()(this,i),a=e.call(this,t),y()(u()(a),"handleCheckboxClick",(function(t){if("INPUT"===S()(t.target.tagName)){var e=t.target.checked,i=t.target.dataset.pos.split("-"),s=a.state.active;s[i[0]][i[1]]=e,a.setState({active:s}),a.props.onChange(s)}})),y()(u()(a),"handleRadioClick",(function(t){if("INPUT"===S()(t.target.tagName)){var e=t.target.checked,i=t.target.dataset.pos.split("-"),s=a.state.active;s[i[0]]=new Array(a.props.answers.length),s[i[0]][i[1]]=e,a.setState({active:s}),a.props.onChange(s)}})),y()(u()(a),"sendSubmitNotification",(function(){var t=a.context;a.state.submitted?t.addNotification({title:a.props.t("answer-re-submitted"),message:a.props.t("successfully-re-submitted-your-answer"),level:"success"}):t.addNotification({title:a.props.t("answer-submitted"),message:a.props.t("successfully-submitted-your-answer"),level:"success"})})),y()(u()(a),"handleSubmit",(function(){var t=a.context;L("Submit answer..."),a.props.disableSubmitNotification||a.sendSubmitNotification(),a.props.id&&t.log({id:a.props.id,type:q.yb,value:JSON.stringify(a.state.active)}),a.setState({submitted:!0}),a.props.onSubmit(a.state.active)})),y()(u()(a),"toggleSolution",(function(){}));for(var s=new Array(t.questions.length),n=0;n<s.length;n++)s[n]=new Array(t.answers.length);return a.state={submitted:!1,active:s},a}return c()(i,[{key:"renderAnswerHeader",value:function(){var t,e=this.props.answers.length;return t=e>7?3:e>4?4:6,s()(P.a.Row,{className:"multiple-choice-matrix-question-header"},void 0,s()(j.a,{sm:t}),this.props.answers.map((function(t,e){return s()(j.a,{},e,s()(P.a.Label,{},void 0,Object(C.isPrimitive)(t)?s()(I.a,{raw:t}):t))})))}},{key:"renderAnswerButtons",value:function(t){for(var e=this.props.answers.length,i=new Array(e),a=0;a<e;a++){var n=this.props.answers[a];i[a]=s()(j.a,{},a,s()(P.a.Check,{name:"radios-".concat(t),"data-pos":"".concat(t,"-").concat(a),type:this.props.type,id:"".concat(t,"-").concat(a),label:s()("span",{className:"multiple-choice-matrix-answer-text"},void 0,Object(C.isPrimitive)(n)?s()(I.a,{raw:n}):n)}))}return s()(w.Fragment,{},void 0,i)}},{key:"renderQuestionRows",value:function(){var t,e=this,i=this.props.answers.length;return t=i>7?3:i>4?4:6,this.props.questions.map((function(i,a){return s()(P.a.Row,{},a,s()(j.a,{sm:t},void 0,s()(P.a.Label,{column:!0},void 0,Object(C.isPrimitive)(i)?s()(I.a,{raw:i}):i)),e.renderAnswerButtons(a))}))}},{key:"render",value:function(){var t=this.props.solution?s()(T.a,{onClick:this.toggleSolution,disabled:!this.state.submitted}):null;return s()(R.a,{className:"multiple-choice-matrix"},void 0,this.props.title?s()(R.a.Header,{},void 0,s()(R.a.Title,{as:"h5"},void 0,this.props.title)):null,s()(R.a.Body,{},void 0,s()("i",{style:{fontSize:"0.8rem"}},void 0,"checkbox"===this.props.type?this.props.t("each-row-click-check-boxes-which-apply"):this.props.t("each-row-pick-answer-by-clicking"),"."),s()(P.a,{style:{marginTop:"12px"},onClick:"checkbox"===this.props.type?this.handleCheckboxClick:this.handleRadioClick},void 0,this.renderAnswerHeader(),this.renderQuestionRows()),s()("div",{className:"multiple-choice-matrix-controls"},void 0,t,s()(O.a,{className:"submit-button",variant:"primary",size:"sm",onClick:this.handleSubmit,style:{marginTop:"10px"}},void 0,this.state.submitted?this.props.t("resubmit"):this.props.t("submit")),s()(B.a,{id:this.props.id,data:{type:"matrix",rows:this.props.questions,cols:this.props.answers,solution:this.props.solution},info:"MULTIPLE_CHOICE_MATRIX_SUBMISSION"}),this.props.id&&this.props.feedback?s()(A.a,{id:this.props.id+"_feedback"}):null)))}}]),i}(w.Component);Q.defaultProps={title:null,solution:null,type:"radio",disableSubmitNotification:!1,onChange:function(){},onSubmit:function(){}},Q.contextType=E.a,e.default=Object(N.a)("MultipleChoiceQuestion")(Object(z.a)(Q))},422:function(t,e,i){"use strict";var a=i(406),s=i(408),n=i(409),r=i.n(n),o=i(0),c=i.n(o),l=i(411),u=i(470),p=c.a.forwardRef((function(t,e){var i=t.bsPrefix,n=t.variant,o=t.size,p=t.active,d=t.className,h=t.block,f=t.type,m=t.as,v=Object(s.a)(t,["bsPrefix","variant","size","active","className","block","type","as"]),b=Object(l.a)(i,"btn"),y=r()(d,b,p&&"active",n&&b+"-"+n,h&&b+"-block",o&&b+"-"+o);if(v.href)return c.a.createElement(u.a,Object(a.a)({},v,{as:m,ref:e,className:r()(y,v.disabled&&"disabled")}));e&&(v.ref=e),f?v.type=f:m||(v.type="button");var w=m||"button";return c.a.createElement(w,Object(a.a)({},v,{className:y}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1},e.a=p},576:function(t,e,i){"use strict";var a=i(546),s=i.n(a),n=i(0),r=i.n(n),o=(i(404),function(t){var e=t.children,i=s()(t,["children"]);return r.a.createElement("div",i,e)});o.defaultProps={className:"",style:{}},e.a=o}}]);