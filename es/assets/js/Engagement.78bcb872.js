/*! For license information please see Engagement.78bcb872.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[306],{1359:function(e,t,s){"use strict";var n=s(406),a=s(408),i=s(409),r=s.n(i),o=s(0),l=s.n(o),c=s(411),u=s(590);function p(e,t,s){var n=(e-t)/(s-t)*100;return Math.round(1e3*n)/1e3}function d(e,t){var s,i=e.min,o=e.now,c=e.max,u=e.label,d=e.srOnly,f=e.striped,v=e.animated,h=e.className,m=e.style,y=e.variant,g=e.bsPrefix,b=Object(a.a)(e,["min","now","max","label","srOnly","striped","animated","className","style","variant","bsPrefix"]);return l.a.createElement("div",Object(n.a)({ref:t},b,{role:"progressbar",className:r()(h,g+"-bar",(s={},s["bg-"+y]=y,s[g+"-bar-animated"]=v,s[g+"-bar-striped"]=v||f,s)),style:Object(n.a)({width:p(o,i,c)+"%"},m),"aria-valuenow":o,"aria-valuemin":i,"aria-valuemax":c}),d?l.a.createElement("span",{className:"sr-only"},u):u)}var f=l.a.forwardRef((function(e,t){var s=e.isChild,i=Object(a.a)(e,["isChild"]);if(i.bsPrefix=Object(c.a)(i.bsPrefix,"progress"),s)return d(i,t);var p=i.min,f=i.now,v=i.max,h=i.label,m=i.srOnly,y=i.striped,g=i.animated,b=i.bsPrefix,w=i.variant,N=i.className,R=i.children,x=Object(a.a)(i,["min","now","max","label","srOnly","striped","animated","bsPrefix","variant","className","children"]);return l.a.createElement("div",Object(n.a)({ref:t},x,{className:r()(N,b)}),R?Object(u.b)(R,(function(e){return Object(o.cloneElement)(e,{isChild:!0})})):d({min:p,now:f,max:v,label:h,srOnly:m,striped:y,animated:g,bsPrefix:b,variant:w},t))}));f.displayName="ProgressBar",f.defaultProps={min:0,max:100,animated:!1,isChild:!1,srOnly:!1,striped:!1},t.a=f},2635:function(e,t,s){"use strict";var n=s(544);s.d(t,"a",(function(){return n.a}));var a=s(489);s.d(t,"b",(function(){return a.b}));var i=s(507);s.d(t,"c",(function(){return i.a}));s(575),s(783),s(755),s(865)},2707:function(e,t,s){"use strict";var n=s(406),a=s(408),i=s(409),r=s.n(i),o=s(0),l=s.n(o),c=s(411),u=l.a.forwardRef((function(e,t){var s=e.bsPrefix,i=e.className,o=e.striped,u=e.bordered,p=e.borderless,d=e.hover,f=e.size,v=e.variant,h=e.responsive,m=Object(a.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),y=Object(c.a)(s,"table"),g=r()(i,y,v&&y+"-"+v,f&&y+"-"+f,o&&y+"-striped",u&&y+"-bordered",p&&y+"-borderless",d&&y+"-hover"),b=l.a.createElement("table",Object(n.a)({},m,{className:g,ref:t}));if(h){var w=y+"-responsive";return"string"==typeof h&&(w=w+"-"+h),l.a.createElement("div",{className:w},b)}return b}));t.a=u},467:function(e,t,s){"use strict";var n=s(406),a=s(408),i=s(409),r=s.n(i),o=s(0),l=s.n(o),c=s(411),u=["xl","lg","md","sm","xs"],p=l.a.forwardRef((function(e,t){var s=e.bsPrefix,i=e.className,o=e.noGutters,p=e.as,d=void 0===p?"div":p,f=Object(a.a)(e,["bsPrefix","className","noGutters","as"]),v=Object(c.a)(s,"row"),h=v+"-cols",m=[];return u.forEach((function(e){var t,s=f[e];delete f[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=s&&"object"==typeof s?s.cols:s)&&m.push(""+h+n+"-"+t)})),l.a.createElement(d,Object(n.a)({ref:t},f,{className:r.a.apply(void 0,[i,v,o&&"no-gutters"].concat(m))}))}));p.displayName="Row",p.defaultProps={noGutters:!1},t.a=p},590:function(e,t,s){"use strict";s.d(t,"b",(function(){return i})),s.d(t,"a",(function(){return r}));var n=s(0),a=s.n(n);function i(e,t){var s=0;return a.a.Children.map(e,(function(e){return a.a.isValidElement(e)?t(e,s++):e}))}function r(e,t){var s=0;a.a.Children.forEach(e,(function(e){a.a.isValidElement(e)&&t(e,s++)}))}},602:function(e,t,s){"use strict";var n=s(405),a=Object(n.a)((function(){return s.e(204).then(s.bind(null,878))}));t.a=a},6370:function(e,t,s){"use strict";var n=s(6371);e.exports=n},6371:function(e,t,s){"use strict";var n=s(539).isPrimitive,a=s(419);e.exports=function(e){var t,s,i,r,o;if(!n(e))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+e+"`.");return s=new Array(e),i=0,o=-1,r=0,function(n){var l;if(0===arguments.length)return 0===r?null:i;if(o=(o+1)%e,a(n))r=e,i=NaN;else if(r<e)i+=(t=n-i)/(r+=1);else if(a(s[o])){for(r=1,i=n,l=0;l<e;l++)if(l!==o){if(a(s[l])){r=e,i=NaN;break}r+=1,t=s[l]-i,i+=t/r}}else!1===a(i)&&(t=n-s[o],i+=t/e);return s[o]=n,i}}},6372:function(e,t,s){"use strict";var n=s(6373);e.exports=n},6373:function(e,t,s){"use strict";var n=s(539).isPrimitive,a=s(419),i=s(428),r=s(460);e.exports=function(e){var t,s,o,l,c;if(!n(e))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+e+"`.");return t=new Array(e),s=i,o=r,c=-1,l=0,function(n){var i,r;if(0===arguments.length)return 0===l?null:o-s;c=(c+1)%e,0===n&&(n=0);if(a(n))l=e,s=n,o=n;else if(l<e)l+=1,n<s&&(s=n),n>o&&(o=n);else if(t[c]===s&&n>s||t[c]===o&&n<o||a(t[c])){for(s=n,o=n,r=0;r<e;r++)if(r!==c){if(i=t[r],a(i)){s=i,o=i;break}i<s&&(s=i),i>o&&(o=i)}}else n<s?s=n:n>o&&(o=n);return t[c]=n,o-s}}},6575:function(e,t,s){"use strict";s.r(t);s(420);var n=s(407),a=s.n(n),i=s(414),r=s.n(i),o=s(415),l=s.n(o),c=s(417),u=s.n(c),p=s(418),d=s.n(p),f=s(416),v=s.n(f),h=s(0),m=(s(404),s(535)),y=s(464),g=(s(436),s(423),s(611),s(424)),b=s.n(g),w=s(412),N=s.n(w),R=s(450),x=s.n(R),S=s(4096),C=s(422),k=s(586),P=s(690),O=s(494),H=s(467),j=s(725),D=s(524),T=s(642),E=s(2635),q=s(783),z=s(1479),A=s(1481),V=s(1476);function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,n=v()(e);if(t){var a=v()(this).constructor;s=Reflect.construct(n,arguments,a)}else s=n.apply(this,arguments);return d()(this,s)}}var W=x()("isle:survey-generator"),B="survey-generator",F=function(e){u()(s,e);var t=M(s);function s(e){var n;return r()(this,s),n=t.call(this,e),N()(b()(n),"setQuestion",(function(e){W("Set the question text...");var t=!0;e.length>3&&(n.state.answers.length>1||"multiple-choice"!==n.state.type)&&(t=!1),n.setState({question:e,disabled:t})})),N()(b()(n),"setType",(function(e){n.setState({type:e})})),N()(b()(n),"toggleSurvey",(function(){var e=n.props.session;n.state.showSurvey?e.log({id:B,type:y.wc,value:null},"members"):e.log({id:B,type:y.sc,value:{answers:n.state.answers,type:n.state.type,question:n.state.question}},"members")})),N()(b()(n),"getAnswers",(function(e){var t=e.split("\n"),s=!0;n.state.question.length>3&&t.length>1&&(s=!1),n.setState({answers:t,disabled:s})})),N()(b()(n),"toggleAnonymous",(function(e){n.setState({anonymous:e})})),n.state={answers:[],question:"",type:"free-text",showSurvey:!1,anonymous:!0,disabled:!0},n}return l()(s,[{key:"componentDidMount",value:function(){var e=this,t=this.props.session;this.unsubscribe=t.subscribe((function(t,s){W("Received member action..."),t===m.n&&(s.type===y.sc?(W("Should start the survey..."),B===s.id&&e.setState({question:s.value.question,type:s.value.type,answers:s.value.answers,showSurvey:!0})):s.type===y.wc&&(W("Should stop the survey..."),B===s.id&&e.setState({showSurvey:!1})),e.forceUpdate())}))}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var e;e=this.state.showSurvey?a()("div",{},void 0,"multiple-choice"===this.state.type?a()(z.a,{user:!0,question:this.state.question,answers:this.state.answers,id:B+":multiple-choice-survey",anonymous:this.state.anonymous}):null,"number"===this.state.type?a()(A.a,{user:!0,question:this.state.question,id:B+":number-survey",anonymous:this.state.anonymous}):null,"free-text"===this.state.type?a()(V.a,{user:!0,question:this.state.question,answers:this.state.answers,id:B+":free-text-survey",anonymous:this.state.anonymous}):null,a()("label",{},void 0,this.state.anonymous?"":this.props.t("survey-not-anonymous")),a()(T.a,{owner:!0},void 0,a()(C.a,{disabled:this.state.disabled,onClick:this.toggleSurvey,style:{float:"right"}},void 0,this.props.t("stop-survey")))):a()(T.a,{owner:!0,banner:a()("h3",{},void 0,this.props.t("survey-not-started"))},void 0,a()(k.a,{},void 0,a()(H.a,{},void 0,a()(O.a,{md:3},void 0,a()(P.a,{htmlFor:"survey-select-input"},void 0,this.props.t("type"),":")),a()(O.a,{md:9},void 0,a()(E.c,{id:"survey-select-input",defaultValue:this.state.type,options:["multiple-choice","number","free-text"],onChange:this.setType})))),a()(k.a,{},void 0,a()(q.a,{legend:this.props.t("question"),onChange:this.setQuestion,rows:2})),"multiple-choice"===this.state.type?a()(k.a,{},void 0,a()(q.a,{legend:this.props.t("answer-options-new-line-delimited"),onChange:this.getAnswers})):null,a()(E.a,{tooltip:this.props.t("anonymous-survey-tooltip"),tooltipPlacement:"top",legend:this.props.t("anonymous-survey"),defaultValue:!0,onChange:this.toggleAnonymous}),a()(C.a,{disabled:this.state.disabled,onClick:this.toggleSurvey},void 0,this.props.t("start-survey")));var t=this.props.session;return a()(j.a,{dragHandleClassName:"card-header"},void 0,a()(D.a,{header:this.props.t("survey"),minimizable:!0,className:"survey-generator",onHide:t.isOwner()?this.props.onHide:null,hideTooltip:this.props.t("finish-survey")},void 0,e))}}]),s}(h.Component),G=Object(S.a)("Toolbar")(F),L=(s(482),s(2707)),U=s(4013),J=s(484),Q=s(602),I=Object(S.a)("Toolbar")((function(e){return a()(j.a,{dragHandleClassName:"card-header"},void 0,a()(D.a,{className:"engagement-meter-panel",header:e.t("poll-responses"),onHide:e.onHide,minimizable:!0,style:{width:400}},void 0,a()(U.a,{className:"engagement-table",showPageSizeOptions:!1,data:e.responses,resizable:!1,sortable:!1,columns:[{Header:"Pic",id:"pic",accessor:function(t){for(var s=e.session.userList,n=0;n<s.length;n++)if(s[n].name===t.name)return s[n].picture;return""},Cell:function(t){return a()("img",{className:"engagement-table-pic",alt:"User thumbnail",src:"".concat(e.session.server,"/thumbnail/").concat(t.value)})},maxWidth:38,minWidth:38,style:{color:"darkslategrey"}},{Header:e.t("name"),id:"nameCol",accessor:"name",width:180,Cell:function(e){return a()(J.a,{tooltip:"".concat(e.value," (").concat(e.original.email,")")},void 0,a()("span",{className:"engagement-table-name"},void 0,e.value))}},{Header:e.t("response"),id:"responseCol",accessor:"value",Cell:e.renderValue,maxWidth:38,minWidth:38},{Header:e.t("chat"),Cell:function(t){var s="Chat with ".concat(t.original.name);return a()(Q.a,{tooltip:e.t("chat-tooltip"),showTooltip:!1,for:s})}}],pageSize:8})))}));function Y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,n=v()(e);if(t){var a=v()(this).constructor;s=Reflect.construct(n,arguments,a)}else s=n.apply(this,arguments);return d()(this,s)}}var _="ENGAGEMENT_BINARY",K=function(e){u()(s,e);var t=Y(s);function s(e){var n;return r()(this,s),n=t.call(this,e),N()(b()(n),"toggleResponses",(function(){n.setState({showResponses:!n.state.showResponses})})),n.state={nLeft:0,nRight:0,responses:[],showResponses:!1},n}return l()(s,[{key:"componentDidMount",value:function(){var e,t,s,n=this,i=this.props.session;switch(i&&(this.unsubscribe=i.subscribe((function(e,t){if(e===m.n&&t.id===_&&t.type===y.ac){var s=n.state.responses.slice();s.push({name:t.name,email:t.email,value:t.value}),1===t.value?n.setState({nRight:n.state.nRight+1,responses:s}):-1===t.value&&n.setState({nLeft:n.state.nLeft+1,responses:s})}}))),this.props.type){case"yes:no":e="fas fa-times",t="fas fa-check",s=this.props.t("answer-yes-no");break;case"too-slow:too-fast":e="fas fa-backward",t="fas fa-forward",s=this.props.t("answer-slow-fast")}if(!i.isOwner())var r=i.addNotification({title:this.props.t("poll"),message:s,level:"info",position:"tc",dismissible:"none",autoDismiss:0,children:a()("div",{style:{marginBottom:"40px",marginTop:"10px"}},void 0,a()(C.a,{variant:"secondary",style:{float:"left"},onClick:function(){i.log({id:_,type:y.ac,value:-1}),i.removeNotification(r),i.addNotification({title:n.props.t("answer-recorded"),message:n.props.t("answer-recorded-message"),level:"success",position:"tc"})}},void 0,a()("i",{className:e})),a()(C.a,{variant:"secondary",style:{float:"right"},onClick:function(){i.log({id:_,type:y.ac,value:1}),i.removeNotification(r),i.addNotification({title:n.props.t("answer-recorded"),message:n.props.t("answer-recorded-message"),level:"success",position:"tc"})}},void 0,a()("i",{className:t})))})}},{key:"render",value:function(){var e,t;switch(this.props.type){case"yes:no":e="fas fa-times",t="fas fa-check";break;case"too-slow:too-fast":e="fas fa-backward",t="fas fa-forward"}var s=this.props.t,n=a()(L.a,{bordered:!0,size:"sm"},void 0,a()("thead",{},void 0,a()("tr",{},void 0,a()("th",{},void 0,a()("i",{className:e})),a()("th",{},void 0,a()("i",{className:t})))),a()("tbody",{},void 0,a()("tr",{},void 0,a()("td",{},void 0,this.state.nLeft),a()("td",{},void 0,this.state.nRight))));return a()(h.Fragment,{},void 0,a()(j.a,{dragHandleClassName:"card-header"},void 0,a()(T.a,{owner:!0},void 0,a()(D.a,{header:s("poll"),hideTooltip:s("finish-poll"),onHide:this.props.onHide,className:"engagement-meter-panel",minimizable:!0},void 0,n,a()(C.a,{variant:"link",onClick:this.toggleResponses},void 0,a()("small",{},void 0,s("toggle-details"))))),a()(T.a,{user:!0,notOwner:!0,header:s("poll")},void 0,a()(D.a,{header:s("poll"),className:"engagement-meter-panel",minimizable:!0},void 0,n))),this.state.showResponses?a()(I,{responses:this.state.responses,session:this.props.session,onHide:this.toggleResponses,renderValue:function(s){return-1===s.value?a()("i",{className:e}):a()("i",{className:t})}}):null)}}]),s}(h.Component),X=Object(S.a)("Toolbar")(K),Z=s(1359),$=s(6370),ee=s.n($),te=s(6372),se=s.n(te),ne=s(474),ae=s.n(ne),ie=s(780),re=s.n(ie);function oe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,n=v()(e);if(t){var a=v()(this).constructor;s=Reflect.construct(n,arguments,a)}else s=n.apply(this,arguments);return d()(this,s)}}var le=a()("div",{className:"score-setter"}),ce=function(e){u()(s,e);var t=oe(s);function s(e){var n;return r()(this,s),n=t.call(this,e),N()(b()(n),"onControlledDrag",(function(e,t){var s=t.x,a=t.y;n.setState({controlledPosition:{x:s,y:a}})})),N()(b()(n),"onControlledDragStop",(function(e,t){var s=t.x,a=t.y;n.setState({controlledPosition:{x:s,y:a},progress:(s+100)/200*100})})),N()(b()(n),"handleSubmit",(function(){n.props.onSubmit(n.state.progress)})),n.state={progress:50,controlledPosition:{x:0,y:0}},n}return l()(s,[{key:"render",value:function(){return a()(h.Fragment,{},void 0,a()("div",{className:"score-bottom"},void 0,a()(re.a,{bounds:{left:-100,right:100,top:0,bottom:0},onStop:this.onControlledDragStop,position:this.state.controlledPosition,onDrag:this.onControlledDrag},void 0,le),a()(Z.a,{style:{marginTop:23}},void 0,a()(Z.a,{animated:!0,variant:"success",now:this.state.progress}),a()(Z.a,{animated:!0,variant:"danger",now:100-this.state.progress}))),a()(C.a,{variant:"secondary",size:"sm",onClick:this.handleSubmit,style:{marginTop:10}},void 0,this.props.t("submit")))}}]),s}(h.Component);function ue(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,n=v()(e);if(t){var a=v()(this).constructor;s=Reflect.construct(n,arguments,a)}else s=n.apply(this,arguments);return d()(this,s)}}var pe=function(e){u()(s,e);var t=ue(s);function s(e){var n;return r()(this,s),n=t.call(this,e),N()(b()(n),"toggleResponses",(function(){n.setState({showResponses:!n.state.showResponses})})),n.state={mean:null,range:null,responses:[],showResponses:!1},n.id=e.id||"engagement-meter",n.meanAcc=ee()(6),n.rangeAcc=se()(6),n}return l()(s,[{key:"componentDidMount",value:function(){var e=this,t=this.props.session;if(t&&(this.unsubscribe=t.subscribe((function(t,s){if(t===m.n&&s.id===e.id&&s.type===y.ac){var n=e.meanAcc(s.value),a=e.rangeAcc(s.value),i=e.state.responses.slice();i.push({name:s.name,email:s.email,value:s.value}),e.setState({mean:n,range:a,responses:i})}}))),!t.isOwner())var s=t.addNotification({title:this.props.t("poll"),message:this.props.t("meter-prompt"),level:"info",position:"tc",dismissible:"none",autoDismiss:0,children:a()(ce,{t:this.props.t,onSubmit:function(t){var n=e.props.session;n.log({id:e.id,type:y.ac,value:t}),n.removeNotification(s),n.addNotification({title:e.props.t("answer-recorded"),message:e.props.t("answer-recorded-message"),level:"success",position:"tc"})}})})}},{key:"render",value:function(){return a()(h.Fragment,{},void 0,a()(j.a,{dragHandleClassName:"card-header"},void 0,a()(T.a,{owner:!0},void 0,a()(D.a,{header:this.props.t("poll"),hideTooltip:this.props.t("finish-poll"),onHide:this.props.onHide,className:"engagement-meter-panel",minimizable:!0},void 0,a()("div",{className:"score-bottom"},void 0,this.state.mean?a()(h.Fragment,{},void 0,a()(Z.a,{style:{marginTop:23}},void 0,a()(Z.a,{animated:!0,variant:"success",now:this.state.mean}),a()(Z.a,{animated:!0,variant:"danger",now:100-this.state.mean}))):null),this.state.mean?a()("p",{},void 0,this.props.t("mean"),": ",ae()(this.state.mean,-2)," (n: ",this.state.responses.length,")"):null,this.state.range?a()("p",{},void 0,this.props.t("range"),": ",ae()(this.state.range,-2)):null,a()(C.a,{variant:"link",onClick:this.toggleResponses},void 0,a()("small",{},void 0,this.props.t("toggle-details")))))),this.state.showResponses?a()(I,{responses:this.state.responses,session:this.props.session,onHide:this.toggleResponses,renderValue:function(e){return e.value}}):null)}}]),s}(h.Component),de=Object(S.a)("Toolbar")(pe);s(392);function fe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,n=v()(e);if(t){var a=v()(this).constructor;s=Reflect.construct(n,arguments,a)}else s=n.apply(this,arguments);return d()(this,s)}}var ve=function(e){u()(s,e);var t=fe(s);function s(e){var n;return r()(this,s),(n=t.call(this,e)).state={inProgress:!1},n}return l()(s,[{key:"componentDidMount",value:function(){var e=this,t=this.props.session;this.unsubscribe=t.subscribe((function(t,s){if(t===m.n&&"engagement"===s.id){var n=s.type;n===y.fb?e.setState({inProgress:s.value}):n===y.eb&&e.setState({inProgress:!1})}}))}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){switch(this.state.inProgress){case"yes:no":case"too-slow:too-fast":return a()(X,{type:this.state.inProgress,session:this.props.session,onHide:this.props.onHide});case"like:dislike":return a()(de,{session:this.props.session,onHide:this.props.onHide});case"survey":return a()(G,{session:this.props.session,onHide:this.props.onHide});default:return null}}}]),s}(h.Component);t.default=ve}}]);