(window.webpackJsonp=window.webpackJsonp||[]).push([[950],{3875:function(t,e,s){"use strict";s.r(e);s(420),s(437),s(434),s(469),s(478),s(438);var i=s(407),n=s.n(i),a=s(414),r=s.n(a),o=s(415),c=s.n(o),l=s(424),u=s.n(l),p=s(417),d=s.n(p),h=s(418),f=s.n(h),b=s(416),v=s.n(b),m=s(412),y=s.n(m),g=(s(458),s(0)),O=(s(404),s(4096)),w=s(422),S=s(880),j=s(640),N=s(586),P=s(466),k=s(593),C=s.n(k),q=s(588),E=s.n(q),x=s(913),I=s(693),R=s(576),M=s(602),T=s(618),z=s(821),B=s(531),D=s(465),Q=s(464),_=s(421),F=s(439);s(352);function J(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function U(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?J(Object(s),!0).forEach((function(e){y()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):J(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function V(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,i=v()(t);if(e){var n=v()(this).constructor;s=Reflect.construct(i,arguments,n)}else s=i.apply(this,arguments);return f()(this,s)}}Object(_.a)("SelectQuestion");var H=Object(B.a)("select-question"),L=n()("i",{className:"fa fa-check-square"}),Z=function(t){d()(s,t);var e=V(s);function s(t){var i;return r()(this,s),i=e.call(this,t),y()(u()(i),"handleChange",(function(t){var e=t.target.value;i.setState({value:e,answerState:"secondary"},(function(){i.props.onChange(e)}))})),y()(u()(i),"handleSubmit",(function(){var t,e,s=i.context;!E()(i.props.solution)&&i.props.provideFeedback?(e=(t=i.props.solution===C()(i.props.options,i.state.value))?"success":"danger",t?s.addNotification({title:i.props.t("correct"),message:i.props.successMsg,level:"success"}):s.addNotification({title:i.props.t("incorrect"),message:i.props.failureMsg,level:"error"})):(e="info",s.addNotification({title:i.state.submitted?i.props.t("answer-resubmitted"):i.props.t("answer-submitted"),message:i.state.submitted?i.props.t("resubmit-message"):i.props.t("submit-message"),level:"info"})),s.log({id:i.id,type:Q.Zb,value:i.state.value}),i.props.onSubmit(i.state.value,t),i.setState({answerState:e,submitted:!0})})),i.id=t.id||H(t),i.state={value:t.options[t.preselected],answerState:"secondary"},i}return c()(s,[{key:"render",value:function(){var t=this.props.hints.length,e="success"===this.state.answerState,s="danger"===this.state.answerState,i=n()(R.a,{id:this.id,info:"SELECT_QUESTION_SUBMISSION",data:{type:"factor",levels:this.props.options,question:this.props.question,solution:this.props.solution},inline:this.props.inline,points:this.props.points});return this.props.inline?n()("span",{id:this.id,style:U({},this.props.style)},void 0,n()("span",{style:{display:"inherit"}},void 0,n()(j.a,{value:this.state.value,as:"select",placeholder:"select",onChange:this.handleChange,style:{display:"inline",width:"max-content"},isInvalid:s,isValid:e,disabled:e},void 0,this.props.options.map((function(t,e){return n()("option",{value:t},e,t)}))),n()(w.a,{size:"small",variant:"outline-".concat(this.state.answerState),disabled:e,style:{display:"inline",marginTop:-3},onClick:this.handleSubmit},void 0,L)),i):n()(P.a,{id:this.id,className:"select-question",style:this.props.style,body:!0},void 0,n()(S.a,{},void 0,n()(N.a,{controlId:"".concat(this.id,"-form")},void 0,this.props.question?n()("label",{},void 0,this.props.question):null,n()(j.a,{value:this.state.value,as:"select",placeholder:"select",onChange:this.handleChange,isInvalid:"danger"===this.state.answerState,isValid:e,disabled:e},void 0,this.props.options.map((function(t,e){return n()("option",{className:"select-question-option",value:t},e,t)}))))),n()("div",{className:"select-question-toolbar"},void 0,n()(x.a,{className:"submit-button",variant:"primary",disabled:e,size:"sm",onClick:this.handleSubmit},void 0,this.state.submitted?this.props.t("resubmit"):this.props.t("submit")),t>0?n()(I.a,{onClick:this.logHint,hints:this.props.hints,placement:this.props.hintPlacement}):null,this.props.chat?n()(M.a,{for:this.id}):null),i,this.props.feedback?n()(T.a,{id:this.id+"_feedback"}):null,n()(z.a,{for:this.id,points:this.props.points}))}}]),s}(g.Component);Z.defaultProps={question:"",preselected:0,inline:!1,hints:[],hintPlacement:"top",feedback:!0,chat:!1,provideFeedback:!0,failureMsg:"Not quite, try again!",successMsg:"That's the correct answer!",points:10,style:{},onChange:function(){},onSubmit:function(){}},Z.contextType=D.a,e.default=Object(O.a)("SelectQuestion")(Object(F.a)(Z))},422:function(t,e,s){"use strict";var i=s(406),n=s(408),a=s(409),r=s.n(a),o=s(0),c=s.n(o),l=s(411),u=s(470),p=c.a.forwardRef((function(t,e){var s=t.bsPrefix,a=t.variant,o=t.size,p=t.active,d=t.className,h=t.block,f=t.type,b=t.as,v=Object(n.a)(t,["bsPrefix","variant","size","active","className","block","type","as"]),m=Object(l.a)(s,"btn"),y=r()(d,m,p&&"active",a&&m+"-"+a,h&&m+"-block",o&&m+"-"+o);if(v.href)return c.a.createElement(u.a,Object(i.a)({},v,{as:b,ref:e,className:r()(y,v.disabled&&"disabled")}));e&&(v.ref=e),f?v.type=f:b||(v.type="button");var g=b||"button";return c.a.createElement(g,Object(i.a)({},v,{className:y}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1},e.a=p},576:function(t,e,s){"use strict";var i=s(546),n=s.n(i),a=s(0),r=s.n(a),o=(s(404),function(t){var e=t.children,s=n()(t,["children"]);return r.a.createElement("div",s,e)});o.defaultProps={className:"",style:{}},e.a=o},602:function(t,e,s){"use strict";var i=s(405),n=Object(i.a)((function(){return s.e(204).then(s.bind(null,878))}));e.a=n},693:function(t,e,s){"use strict";var i=s(405),n=Object(i.a)((function(){return s.e(389).then(s.bind(null,1023))}));e.a=n},821:function(t,e,s){"use strict";var i=s(405),n=Object(i.a)((function(){return Promise.all([s.e(0),s.e(362)]).then(s.bind(null,1360))}));e.a=n}}]);