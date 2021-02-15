(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{4109:function(t,e,i){"use strict";i.r(e);i(411),i(403),i(415);var n=i(400),s=i.n(n),o=i(407),r=i.n(o),a=i(410),u=i.n(a),c=i(420),l=i.n(c),p=i(413),d=i.n(p),h=i(414),f=i.n(h),b=i(412),m=i.n(b),v=i(404),g=i.n(v),y=i(0),S=(i(396),i(443)),k=i.n(S),N=i(4125),O=i(465),x=i(600),q=i(1731),C=i(1087),j=i(823),w=i(818),P=i(679),R=i(673),I=i(969),M=i(457);i(846);var B=function(t){for(var e=t.length,i=[t=t.slice()],n=new Array(e).fill(0),s=1;s<e;)if(n[s]<s){var o=s%2&&n[s],r=t[s];t[s]=t[o],t[o]=r,n[s]=n[s]+1,s=1,i.push(t.slice())}else n[s]=0,s+=1;return i},D=i(462),F=i(418);i(332);function H(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=m()(t);if(e){var s=m()(this).constructor;i=Reflect.construct(n,arguments,s)}else i=n.apply(this,arguments);return f()(this,i)}}Object(F.a)("OrderQuestion");var Q=Object(x.a)("order-question"),T=k()("isle:order-question"),_=function(t){d()(i,t);var e=H(i);function i(t){var n;return r()(this,i),n=e.call(this,t),g()(l()(n),"handleChange",(function(t){for(var e=!0,i=0;i<t.length;i++)if(t[i].id!==i){e=!1;break}n.props.onChange(t,e),n.setState({cards:t,correct:e,submitted:!1})})),g()(l()(n),"logHint",(function(t){T("Logging hint..."),n.context.log({id:n.id,type:D.Hb,value:t})})),g()(l()(n),"sendSubmitNotification",(function(){var t=n.context;n.props.provideFeedback?n.state.correct?t.addNotification({title:n.props.t("correct"),message:n.props.successMsg||n.props.t("submission-correct"),level:"success"}):t.addNotification({title:n.props.t("incorrect"),message:n.props.failureMsg||n.props.t("submission-incorrect"),level:"error"}):t.addNotification({title:n.props.t("submitted"),message:n.props.t("submission-message"),level:"info"})})),g()(l()(n),"handleSubmit",(function(){var t=n.context;n.props.disableSubmitNotification||n.sendSubmitNotification(),n.props.onSubmit(n.state.cards,n.state.correct),n.setState({submitted:!0}),t.log({id:n.id,type:D.Ib,value:n.state.cards.map((function(t){return t.text})).join(" -> ")})})),n.id=t.id||Q(t),n.state={cards:null,correct:!1,submitted:!1,options:t.options.map((function(t,e){return{id:e,text:t}})),permutations:B(t.options)},n}return u()(i,[{key:"renderSubmitButton",value:function(){var t=this.context;return this.props.until&&t.startTime>this.props.until?s()("span",{className:"title",style:{marginLeft:4}},void 0,this.props.t("question-closed")):s()(C.a,{className:"submit-button",variant:"primary",size:"sm",onClick:this.handleSubmit,disabled:this.state.submitted&&this.state.correct},void 0,this.state.submitted?this.props.t("resubmit"):this.props.t("submit"))}},{key:"render",value:function(){var t=this.props.hints.length;return s()(O.a,{id:this.id,className:"order-question",style:this.props.style},void 0,s()(O.a.Body,{style:{width:this.props.feedback?"calc(100%-60px)":"100%",display:"inline-block"}},void 0,s()("label",{},void 0,this.props.question),s()(q.a,{shuffle:!0,data:this.state.options,onChange:this.handleChange,onInit:this.handleChange,disabled:this.state.submitted&&this.state.correct}),s()("div",{className:"order-question-toolbar"},void 0,t>0?s()(j.a,{onClick:this.logHint,hints:this.props.hints,placement:this.props.hintPlacement}):null,this.renderSubmitButton(),this.props.chat?s()(P.a,{for:this.id}):null),s()(w.a,{id:this.id,data:{type:"factor",levels:this.state.permutations.map((function(t){return t.join(" -> ")})),question:this.props.question,solution:this.props.options},info:"ORDER_QUESTION_SUBMISSION",points:this.props.points}),this.props.feedback?s()(R.a,{id:this.id+"_feedback"}):null,s()(I.a,{for:this.id,points:this.props.points})))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return t.options.length!==e.options.length?{options:t.options.map((function(t,e){return{id:e,text:t}})),permutations:B(t.options)}:null}}]),i}(y.Component);_.defaultProps={question:"",provideFeedback:!0,hints:[],hintPlacement:"bottom",feedback:!0,chat:!1,failureMsg:null,successMsg:null,disableSubmitNotification:!1,until:null,points:10,style:{},onChange:function(){},onSubmit:function(){}},_.contextType=M.a;e.default=Object(N.a)("OrderQuestion")(_)},679:function(t,e,i){"use strict";var n=i(399),s=Object(n.a)((function(){return i.e(149).then(i.bind(null,1034))}));e.a=s},823:function(t,e,i){"use strict";var n=i(399),s=Object(n.a)((function(){return i.e(178).then(i.bind(null,1179))}));e.a=s},846:function(t,e,i){var n=i(498);n(n.P,"Array",{fill:i(880)}),i(815)("fill")},969:function(t,e,i){"use strict";var n=i(399),s=Object(n.a)((function(){return Promise.all([i.e(0),i.e(6),i.e(175)]).then(i.bind(null,1527))}));e.a=s}}]);