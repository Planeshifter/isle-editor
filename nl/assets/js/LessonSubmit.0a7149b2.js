(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{1703:function(t,e,n){"use strict";var i=function(t,e){return t+o(e)},o=function(t){return null===t||"boolean"==typeof t||void 0===t?"":"number"==typeof t?t.toString():"string"==typeof t?t:Array.isArray(t)?t.reduce(i,""):function(t){return Object.prototype.hasOwnProperty.call(t,"props")}(t)&&Object.prototype.hasOwnProperty.call(t.props,"children")?o(t.props.children):""};o.default=o,t.exports=o},3840:function(t,e,n){"use strict";var i=n(399),o=Object(i.a)((function(){return Promise.all([n.e(6),n.e(268)]).then(n.bind(null,4478))}));e.a=o},3841:function(t,e,n){"use strict";var i=n(399),o=Object(i.a)((function(){return Promise.all([n.e(0),n.e(6),n.e(224)]).then(n.bind(null,4479))}));e.a=o},610:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(0);function o(){return Object(i.useState)(null)}},639:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(644),o=n(0),s=function(t){var e;return"undefined"==typeof document?null:null==t?Object(i.a)().body:("function"==typeof t&&(t=t()),t&&"current"in t&&(t=t.current),(null==(e=t)?void 0:e.nodeType)&&t||null)};function r(t,e){var n=Object(o.useState)((function(){return s(t)})),i=n[0],r=n[1];if(!i){var a=s(t);a&&r(a)}return Object(o.useEffect)((function(){e&&i&&e(i)}),[e,i]),Object(o.useEffect)((function(){var e=s(t);e!==i&&r(e)}),[t,i]),i}},6450:function(t,e,n){"use strict";n.r(e);n(437),n(433),n(425),n(424),n(434),n(411),n(403),n(415);var i=n(400),o=n.n(i),s=n(407),r=n.n(s),a=n(410),c=n.n(a),u=n(420),l=n.n(u),p=n(413),f=n.n(p),d=n(414),m=n.n(d),v=n(412),b=n.n(v),h=n(404),g=n.n(h),y=(n(494),n(0)),O=n(443),S=n.n(O),j=(n(396),n(4125)),w=n(1630),x=n.n(w),P=n(1703),k=n.n(P),L=n(428),N=n(672),z=n(438),C=n(881),D=n.n(C),R=n(440),U=n.n(R),E=n(585),M=n.n(E),T=n(1537),A=n(3840),q=n(3841),B=n(457),F=n(578),V=n(462),H=(n(2683),n(418));function J(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?J(Object(n),!0).forEach((function(e){g()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function I(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=b()(t);if(e){var o=b()(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return m()(this,n)}}Object(H.a)("LessonSubmit");var G=S()("isle:lesson-submit");var K=function(t){f()(n,t);var e=I(n);function n(t){var i;return r()(this,n),i=e.call(this,t),g()(l()(i),"createReponseSummaryDoc",(function(){var t=i.context,e={content:[{text:"".concat(i.props.t("responses-header")," ").concat(t.namespaceName+"/"+t.lessonName),style:"header",alignment:"center"}],styles:{header:{fontSize:24,bold:!0,margin:[0,0,0,10]},author:{fontSize:16,italics:!0,margin:[0,0,0,10],alignment:"center"},date:{fontSize:16,italics:!0,alignment:"right",margin:[0,15,0,15]},elapsed:{fontSize:16,italics:!0,alignment:"right",margin:[0,15,0,15]},subheader:{fontSize:18,bold:!0,margin:[0,30,0,10]},question:{fontSize:15,margin:[0,0,0,10],italics:!0}}};D()(t.user)||e.content.push({text:"".concat(i.props.t("by")," ").concat(t.user.name," (").concat(t.user.email,")"),style:"author"});var n=new Date;if(e.content.push({text:"".concat(n.toLocaleDateString()," - ").concat(n.toLocaleTimeString()),style:"date"}),e.content.push({text:"".concat(i.props.t("elapsed"),": ").concat(M()(t.duration/6e4),"min"),style:"elapsed"}),t.currentUserActions)for(var o=t.responseVisualizerIds,s=0;s<o.length;s++){var r=t.responseVisualizers[o[s]];e.content.push({text:o[s],style:"subheader"}),r&&function(){var n=r.type,a=r.ref.props.data.question,c=r.ref.props.data.type;e.content.push({text:Object(z.isPrimitive)(a)?a:k()(a),style:"question"});var u=t.currentUserActions[o[s]];if(u){var l=(u=(u=u.filter((function(t){return t.type===n}))).sort((function(t,e){return t.absoluteTime-e.absoluteTime})))[u.length-1];if("image"===c)e.content.push({image:l.value,width:500});else if("factor"===c){var p,f=r.ref.props.data.levels;f=f.map((function(t,e){var n=Object(z.isPrimitive)(t)?t:k()(t);return n||(n="".concat(i.props.t("choice")," ").concat(e+1)),n})),p=U()(l.value)?l.value.map((function(t){return f[t]})).join(", "):f[l.value],e.content.push({text:p})}else e.content.push({text:l.value})}}()}x.a.createPdf(e).download("responses.pdf")})),g()(l()(i),"closeUserModal",(function(){i.setState({showUserModal:!1,visibleLogin:!1,visibleSignup:!1})})),g()(l()(i),"login",(function(t){t.stopPropagation(),i.setState({visibleLogin:!0,visibleSignup:!1})})),g()(l()(i),"signup",(function(t){t.stopPropagation(),i.setState({visibleSignup:!0,visibleLogin:!1})})),g()(l()(i),"closeSignup",(function(){i.setState({visibleSignup:!1,showUserModal:!1})})),g()(l()(i),"closeLogin",(function(){i.setState({visibleLogin:!1,showUserModal:!1})})),g()(l()(i),"finalizeSession",(function(){G("Finalizing session...");for(var t=i.context,e=document.getElementsByClassName("submit-button"),n=0;n<e.length;n++)e[n].innerText===i.props.t("submit")&&e[n].click();t.finalize();var s=i.props.t("lesson-successfully-completed");if(!D()(t.user)&&i.props.sendConfirmationEmail){s+=i.props.t("confirmation-email");var r=function(t,e,n){return{text:n("lesson-completed-msg",{name:t.user.name,lessonName:t.lessonName,namespaceName:t.namespaceName,msg:e||""}),subject:"".concat(t.lessonName," ").concat(n("successfully-completed"),"!")}}(t,i.props.message,i.props.t);t.sendMail(r,t.user.email)}t.addNotification({title:i.props.t("completed"),message:s,level:"success",position:"tr",autoDismiss:0,dismissible:"button",children:o()("div",{style:{marginBottom:"40px"}},void 0,o()(L.a,{variant:"success",size:"sm",style:{float:"right",marginRight:"10px",marginTop:"10px"},onClick:i.createReponseSummaryDoc},void 0,i.props.t("download-pdf"))),onRemove:function(){i.setState({disabled:!1})}}),t.log({id:t.lessonName,type:V.tb,value:i.props.t("lesson-submitted")}),i.setState({disabled:!0}),window.removeEventListener("beforeunload",T.a)})),g()(l()(i),"handleClick",(function(){i.props.onClick();var t=i.context;if(i.props.requireLogin&&D()(t.user))return i.setState({showUserModal:!0});i.finalizeSession()})),i.state={showUserModal:!1,visibleLogin:!1,visibleSignup:!1},i}return c()(n,[{key:"componentDidMount",value:function(){var t=this,e=this.context;this.unsubsribe=e.subscribe((function(e){e!==F.x&&e!==F.j&&e!==F.k||t.forceUpdate()}))}},{key:"componentWillUnmount",value:function(){this.unsubsribe()}},{key:"render",value:function(){var t=!this.context.live||this.state.disabled;return o()("div",{className:"bg-light ".concat(this.props.className),style:W({maxWidth:400,margin:"0 auto 0px",padding:"20px",fontFamily:"Arial"},this.props.style)},void 0,o()(L.a,{disabled:t,variant:"primary",size:"large",onClick:this.handleClick,block:!0},void 0,this.props.label?this.props.label:this.props.t("finish-lesson")),o()(N.a,{show:this.state.showUserModal,onHide:this.closeUserModal},void 0,o()(N.a.Header,{closeButton:!0},void 0,o()(N.a.Title,{},void 0,this.props.t("authentication"))),o()(N.a.Body,{},void 0,o()("p",{},void 0,this.props.t("authentication-prompt"))),o()(N.a.Footer,{style:{textAlign:"center"}},void 0,o()(L.a,{variant:"primary",onClick:this.login.bind(this),style:{marginRight:"10px"}},void 0,this.props.t("login")),o()(L.a,{onClick:this.signup.bind(this)},void 0,this.props.t("signup")))),o()(q.a,{show:this.state.visibleLogin,onClose:this.closeLogin}),o()(A.a,{show:this.state.visibleSignup,onClose:this.closeSignup}))}}]),n}(y.Component);K.defaultProps={label:null,message:"",requireLogin:!0,sendConfirmationEmail:!0,className:"",style:{},onClick:function(){}},K.contextType=B.a,e.default=Object(j.a)("LessonSubmit")(K)},703:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(0);function o(t){var e,n,o=(e=t,(n=Object(i.useRef)(e)).current=e,n);Object(i.useEffect)((function(){return function(){return o.current()}}),[])}},716:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(0);function o(){var t=Object(i.useRef)(!0),e=Object(i.useRef)((function(){return t.current}));return Object(i.useEffect)((function(){return function(){t.current=!1}}),[]),e.current}},717:function(t,e,n){"use strict";function i(t,e){return t.contains?t.contains(e):t.compareDocumentPosition?t===e||!!(16&t.compareDocumentPosition(e)):void 0}n.d(e,"a",(function(){return i}))},808:function(t,e,n){"use strict";function i(t,e){return t.classList?!!e&&t.classList.contains(e):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")}n.d(e,"a",(function(){return i}))},809:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(0);function o(t){var e=Object(i.useRef)(null);return Object(i.useEffect)((function(){e.current=t})),e.current}}}]);