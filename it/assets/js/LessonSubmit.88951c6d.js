(window.webpackJsonp=window.webpackJsonp||[]).push([[658],{1498:function(e,t,n){"use strict";var i=function(e,t){return e+s(t)},s=function(e){return null===e||"boolean"==typeof e||void 0===e?"":"number"==typeof e?e.toString():"string"==typeof e?e:Array.isArray(e)?e.reduce(i,""):function(e){return Object.prototype.hasOwnProperty.call(e,"props")}(e)&&Object.prototype.hasOwnProperty.call(e.props,"children")?s(e.props.children):""};s.default=s,e.exports=s},3750:function(e,t,n){"use strict";var i=n(405),s=Object(i.a)((function(){return n.e(963).then(n.bind(null,4439))}));t.a=s},3751:function(e,t,n){"use strict";var i=n(405),s=Object(i.a)((function(){return Promise.all([n.e(0),n.e(694)]).then(n.bind(null,4440))}));t.a=s},422:function(e,t,n){"use strict";var i=n(406),s=n(408),o=n(409),r=n.n(o),a=n(0),c=n.n(a),l=n(411),u=n(470),p=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.variant,a=e.size,p=e.active,f=e.className,d=e.block,m=e.type,b=e.as,v=Object(s.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),h=Object(l.a)(n,"btn"),g=r()(f,h,p&&"active",o&&h+"-"+o,d&&h+"-block",a&&h+"-"+a);if(v.href)return c.a.createElement(u.a,Object(i.a)({},v,{as:b,ref:t,className:r()(g,v.disabled&&"disabled")}));t&&(v.ref=t),m?v.type=m:b||(v.type="button");var y=b||"button";return c.a.createElement(y,Object(i.a)({},v,{className:g}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=p},6526:function(e,t,n){"use strict";n.r(t);n(420),n(437),n(434),n(478),n(438);var i=n(407),s=n.n(i),o=n(414),r=n.n(o),a=n(415),c=n.n(a),l=n(424),u=n.n(l),p=n(417),f=n.n(p),d=n(418),m=n.n(d),b=n(416),v=n.n(b),h=n(412),g=n.n(h),y=(n(482),n(469),n(458),n(0)),O=n(450),S=n.n(O),w=(n(404),n(4096)),j=n(1497),x=n.n(j),P=n(1498),k=n.n(P),N=n(422),z=n(592),L=n(431),C=n(752),R=n.n(C),U=n(443),D=n.n(U),M=n(537),E=n.n(M),B=n(1372),T=n(3750),A=n(3751),q=n(465),F=n(535),H=n(464),J=(n(2745),n(421)),V=n(439);function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function G(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=v()(e);if(t){var s=v()(this).constructor;n=Reflect.construct(i,arguments,s)}else n=i.apply(this,arguments);return m()(this,n)}}Object(J.a)("LessonSubmit");var K=S()("isle:lesson-submit");var Q=function(e){f()(n,e);var t=G(n);function n(e){var i;return r()(this,n),i=t.call(this,e),g()(u()(i),"createReponseSummaryDoc",(function(){var e=i.context,t={content:[{text:"".concat(i.props.t("responses-header")," ").concat(e.namespaceName+"/"+e.lessonName),style:"header",alignment:"center"}],styles:{header:{fontSize:24,bold:!0,margin:[0,0,0,10]},author:{fontSize:16,italics:!0,margin:[0,0,0,10],alignment:"center"},date:{fontSize:16,italics:!0,alignment:"right",margin:[0,15,0,15]},elapsed:{fontSize:16,italics:!0,alignment:"right",margin:[0,15,0,15]},subheader:{fontSize:18,bold:!0,margin:[0,30,0,10]},question:{fontSize:15,margin:[0,0,0,10],italics:!0}}};R()(e.user)||t.content.push({text:"".concat(i.props.t("by")," ").concat(e.user.name," (").concat(e.user.email,")"),style:"author"});var n=new Date;if(t.content.push({text:"".concat(n.toLocaleDateString()," - ").concat(n.toLocaleTimeString()),style:"date"}),t.content.push({text:"".concat(i.props.t("elapsed"),": ").concat(E()(e.duration/6e4),"min"),style:"elapsed"}),e.currentUserActions)for(var s=e.responseVisualizerIds,o=0;o<s.length;o++){var r=e.responseVisualizers[s[o]];t.content.push({text:s[o],style:"subheader"}),r&&function(){var n=r.type,a=r.ref.props.data.question,c=r.ref.props.data.type;t.content.push({text:Object(L.isPrimitive)(a)?a:k()(a),style:"question"});var l=e.currentUserActions[s[o]];if(l){var u=(l=(l=l.filter((function(e){return e.type===n}))).sort((function(e,t){return e.absoluteTime-t.absoluteTime})))[l.length-1];if("image"===c)t.content.push({image:u.value,width:500});else if("factor"===c){var p,f=r.ref.props.data.levels;f=f.map((function(e,t){var n=Object(L.isPrimitive)(e)?e:k()(e);return n||(n="".concat(i.props.t("choice")," ").concat(t+1)),n})),p=D()(u.value)?u.value.map((function(e){return f[e]})).join(", "):f[u.value],t.content.push({text:p})}else t.content.push({text:u.value})}}()}x.a.createPdf(t).download("responses.pdf")})),g()(u()(i),"closeUserModal",(function(){i.setState({showUserModal:!1,visibleLogin:!1,visibleSignup:!1})})),g()(u()(i),"login",(function(e){e.stopPropagation(),i.setState({visibleLogin:!0,visibleSignup:!1})})),g()(u()(i),"signup",(function(e){e.stopPropagation(),i.setState({visibleSignup:!0,visibleLogin:!1})})),g()(u()(i),"closeSignup",(function(){i.setState({visibleSignup:!1,showUserModal:!1})})),g()(u()(i),"closeLogin",(function(){i.setState({visibleLogin:!1,showUserModal:!1})})),g()(u()(i),"finalizeSession",(function(){K("Finalizing session...");for(var e=i.context,t=document.getElementsByClassName("submit-button"),n=0;n<t.length;n++)t[n].innerText===i.props.t("submit")&&t[n].click();e.finalize();var o=i.props.t("lesson-successfully-completed");if(!R()(e.user)&&i.props.sendConfirmationEmail){o+=i.props.t("confirmation-email");var r=function(e,t,n){return{text:n("lesson-completed-msg",{name:e.user.name,lessonName:e.lessonName,namespaceName:e.namespaceName,msg:t||""}),subject:"".concat(e.lessonName," ").concat(n("successfully-completed"),"!")}}(e,i.props.message,i.props.t);e.sendMail(r,e.user.email)}e.addNotification({title:i.props.t("completed"),message:o,level:"success",position:"tr",autoDismiss:0,dismissible:"button",children:s()("div",{style:{marginBottom:"40px"}},void 0,s()(N.a,{variant:"success",size:"sm",style:{float:"right",marginRight:"10px",marginTop:"10px"},onClick:i.createReponseSummaryDoc},void 0,i.props.t("download-pdf"))),onRemove:function(){i.setState({disabled:!1})}}),e.log({id:e.lessonName,type:H.tb,value:i.props.t("lesson-submitted")}),i.setState({disabled:!0}),window.removeEventListener("beforeunload",B.a)})),g()(u()(i),"handleClick",(function(){i.props.onClick();var e=i.context;if(i.props.requireLogin&&R()(e.user))return i.setState({showUserModal:!0});i.finalizeSession()})),i.state={showUserModal:!1,visibleLogin:!1,visibleSignup:!1},i}return c()(n,[{key:"componentDidMount",value:function(){var e=this,t=this.context;this.unsubsribe=t.subscribe((function(t){t!==F.x&&t!==F.j&&t!==F.k||e.forceUpdate()}))}},{key:"componentWillUnmount",value:function(){this.unsubsribe()}},{key:"render",value:function(){var e=!this.context.live||this.state.disabled;return s()("div",{className:"bg-light ".concat(this.props.className),style:I({maxWidth:400,margin:"0 auto 0px",padding:"20px",fontFamily:"Arial"},this.props.style)},void 0,s()(N.a,{disabled:e,variant:"primary",size:"large",onClick:this.handleClick,block:!0},void 0,this.props.label?this.props.label:this.props.t("finish-lesson")),s()(z.a,{show:this.state.showUserModal,onHide:this.closeUserModal},void 0,s()(z.a.Header,{closeButton:!0},void 0,s()(z.a.Title,{},void 0,this.props.t("authentication"))),s()(z.a.Body,{},void 0,s()("p",{},void 0,this.props.t("authentication-prompt"))),s()(z.a.Footer,{style:{textAlign:"center"}},void 0,s()(N.a,{variant:"primary",onClick:this.login.bind(this),style:{marginRight:"10px"}},void 0,this.props.t("login")),s()(N.a,{onClick:this.signup.bind(this)},void 0,this.props.t("signup")))),s()(A.a,{show:this.state.visibleLogin,onClose:this.closeLogin}),s()(T.a,{show:this.state.visibleSignup,onClose:this.closeSignup}))}}]),n}(y.Component);Q.defaultProps={label:null,message:"",requireLogin:!0,sendConfirmationEmail:!0,className:"",style:{},onClick:function(){}},Q.contextType=q.a,t.default=Object(w.a)("LessonSubmit")(Object(V.a)(Q))},686:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n(0);function s(e){var t=Object(i.useRef)(null);return Object(i.useEffect)((function(){t.current=e})),t.current}}}]);