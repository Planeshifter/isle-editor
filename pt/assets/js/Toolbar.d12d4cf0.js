(window.webpackJsonp=window.webpackJsonp||[]).push([[1148],{2759:function(t,e,a){"use strict";var n=a(515),o=a.n(n),s=a(1113),i=a.n(s);e.a=function(t){return i()(t,"px")&&(t=parseFloat(o()(t,"px",""))),t}},424:function(t,e,a){"use strict";var n=a(405),o=a(408),s=a(409),i=a.n(s),l=a(0),c=a.n(l),r=a(411),u=a(464),h=c.a.forwardRef((function(t,e){var a=t.bsPrefix,s=t.variant,l=t.size,h=t.active,g=t.className,p=t.block,m=t.type,d=t.as,b=Object(o.a)(t,["bsPrefix","variant","size","active","className","block","type","as"]),f=Object(r.a)(a,"btn"),v=i()(g,f,h&&"active",s&&f+"-"+s,p&&f+"-block",l&&f+"-"+l);if(b.href)return c.a.createElement(u.a,Object(n.a)({},b,{as:d,ref:e,className:i()(v,b.disabled&&"disabled")}));e&&(b.ref=e),m?b.type=m:d||(b.type="button");var k=d||"button";return c.a.createElement(k,Object(n.a)({},b,{className:v}))}));h.displayName="Button",h.defaultProps={variant:"primary",active:!1,disabled:!1},e.a=h},558:function(t,e,a){"use strict";var n=a(405),o=a(408),s=a(409),i=a.n(s),l=a(0),c=a.n(l),r=a(411),u=c.a.forwardRef((function(t,e){var a=t.bsPrefix,s=t.size,l=t.toggle,u=t.vertical,h=t.className,g=t.as,p=void 0===g?"div":g,m=Object(o.a)(t,["bsPrefix","size","toggle","vertical","className","as"]),d=Object(r.a)(a,"btn-group"),b=d;return u&&(b=d+"-vertical"),c.a.createElement(p,Object(n.a)({},m,{ref:e,className:i()(h,b,s&&d+"-"+s,l&&d+"-toggle")}))}));u.displayName="ButtonGroup",u.defaultProps={vertical:!1,toggle:!1,role:"group"},e.a=u},6516:function(t,e,a){"use strict";a.r(e);a(421);var n=a(492),o=a.n(n),s=a(407),i=a.n(s),l=a(414),c=a.n(l),r=a(415),u=a.n(r),h=a(425),g=a.n(h),p=a(418),m=a.n(p),d=a(419),b=a.n(d),f=a(417),v=a.n(f),k=a(412),y=a.n(k),N=(a(483),a(478),a(488),a(0)),w=a.n(N),P=(a(404),a(4172)),C=a(424),O=a(558),S=a(893),T=a(733),H=a(651),q=a(484),j=a(1436),x=a(534),E=a(1007),B=a(800),I=a(463),M=a(2759),W=a(422),K=a(462),Q=a(547),R=a(406),z=Object(R.a)((function(){return Promise.all([a.e(13),a.e(1317),a.e(393)]).then(a.bind(null,6519))})),F=Object(R.a)((function(){return Promise.all([a.e(0),a.e(1303),a.e(210)]).then(a.bind(null,6533))})),D=Object(R.a)((function(){return Promise.all([a.e(0),a.e(6),a.e(19),a.e(324)]).then(a.bind(null,6517))})),J=Object(R.a)((function(){return Promise.all([a.e(0),a.e(1323),a.e(1145)]).then(a.bind(null,6506))})),L=Object(R.a)((function(){return Promise.all([a.e(0),a.e(19),a.e(860)]).then(a.bind(null,6507))}));a(367);function U(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=v()(t);if(e){var o=v()(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return b()(this,a)}}var G=i()("span",{className:"fa fa-lg fa-check toolbar-icon"}),_=i()("span",{className:"fa fa-lg fa-tachometer-alt toolbar-icon"}),A=i()("span",{className:"fa fa-lg fa-thumbs-up toolbar-icon"}),V=i()("span",{className:"fa fa-lg fa-poll toolbar-icon"}),X=i()("i",{className:"fas fa-chevron-right"}),Y=i()("i",{className:"fas fa-chevron-left"}),Z=i()("span",{className:"fa fa-lg fa-calculator toolbar-icon"}),$=i()("span",{className:"fa fa-lg fa-question-circle toolbar-icon"}),tt=i()("span",{className:"fa fa-lg fa-paint-brush toolbar-icon"}),et=i()("span",{className:"fa fa-lg fa-book toolbar-icon"}),at=i()("span",{className:"fa fa-lg fa-medkit toolbar-icon"}),nt=i()("span",{className:"fa fa-lg fa-poll-h toolbar-icon"}),ot=function(t){m()(a,t);var e=U(a);function a(t){var n;c()(this,a),n=e.call(this,t),y()(g()(n),"toggleCalculator",(function(){n.setState({calculator:!n.state.calculator})})),y()(g()(n),"toggleQueue",(function(){n.setState({queue:!n.state.queue})})),y()(g()(n),"toggleSketchpad",(function(){n.setState({sketchpad:!n.state.sketchpad})})),y()(g()(n),"toggleTicketing",(function(){n.setState({ticketing:!n.state.ticketing})})),y()(g()(n),"toggleEngagement",(function(){var t=n.context;if(n.state.engagementInProgress){var e={id:"engagement",type:K.eb};return t.log(e,"members")}n.setState({engagementMenu:!n.state.engagementMenu})})),y()(g()(n),"toggleHelp",(function(){n.setState({help:!n.state.help})})),y()(g()(n),"renderEngagementButtons",(function(t){var e=n.context;return w.a.createElement(O.a,o()({vertical:!0,className:"toolbar-engagement-buttons"},t),i()(q.a,{tooltip:n.props.t("yes-no"),placement:"right"},void 0,i()(C.a,{variant:"light",className:"toolbar-button",onClick:function(){var t={id:"engagement",type:K.fb,value:"yes:no"};e.log(t,"members")},"aria-label":"".concat(n.props.t("yes-no")," ").concat(n.props.t("poll"))},void 0,G)),i()(q.a,{tooltip:n.props.t("slow-fast"),placement:"right"},void 0,i()(C.a,{variant:"light",className:"toolbar-button",onClick:function(){var t={id:"engagement",type:K.fb,value:"too-slow:too-fast"};e.log(t,"members")},"aria-label":"".concat(n.props.t("slow-fast")," ").concat(n.props.t("poll"))},void 0,_)),i()(q.a,{tooltip:n.props.t("like-dislike"),placement:"right"},void 0,i()(C.a,{variant:"light",className:"toolbar-button",onClick:function(){var t={id:"engagement",type:K.fb,value:"like:dislike"};e.log(t,"members")},"aria-label":"".concat(n.props.t("like-dislike")," ").concat(n.props.t("poll"))},void 0,A)),i()(q.a,{tooltip:n.props.t("survey"),placement:"right"},void 0,i()(C.a,{variant:"light",className:"toolbar-button",onClick:function(){var t={id:"engagement",type:K.fb,value:"survey"};e.log(t,"members")},"aria-label":n.props.t("survey")},void 0,V)))})),y()(g()(n),"toggleToolbar",(function(){n.setState({showToolbar:!n.state.showToolbar})}));var s={calculator:!1,queue:!1,help:!1,sketchpad:!1,engagementMenu:!1,engagementInProgress:!1,ticketing:!1,elements:[],showToolbar:!0,sketchpadHeight:.6*window.innerHeight,sketchpadWidth:.75*window.innerWidth};return n.state=s,n}return u()(a,[{key:"componentDidMount",value:function(){var t=this,e=this.context;this.unsubscribe=e.subscribe((function(e,a){if(e===K.Cc&&t.setState({showToolbar:!a}),e===Q.w||e===Q.O||e===Q.u||e===Q.v)t.forceUpdate();else if(e===Q.n&&"engagement"===a.id){var n=a.type;n===K.fb?t.setState({engagementInProgress:!0,engagementMenu:!1}):n===K.eb&&t.setState({engagementInProgress:!1})}}))}},{key:"componentWillUnmount",value:function(){this.unsubscribe&&this.unsubscribe()}},{key:"renderButton",value:function(t,e){var a=this,n=function(){a.setState(y()({},t.name,!a.state[t.name]))};return i()(q.a,{tooltip:"".concat(this.state[t.name]?this.props.t("close"):this.props.t("open")," ").concat(t.name),placement:"right"},e,i()(C.a,{variant:"light",className:"toolbar-button",onClick:n,onKeyPress:n},void 0,i()("span",{className:"fa fa-lg fa-".concat(t.icon," toolbar-icon")})))}},{key:"render",value:function(){var t=this,e=this.context,a=this.props.t,n=a("close"),s=a("open");return i()(N.Fragment,{},void 0,i()(q.a,{tooltip:a("show-toolbar"),placement:"top"},void 0,i()(C.a,{variant:"warning",className:"toolbar-buttongroup toolbar-toggle",onClick:this.toggleToolbar,onKeyPress:this.toggleToolbar,"aria-label":a("show-toolbar"),style:{display:this.state.showToolbar?"none":"inherit"}},void 0,X)),i()(O.a,{className:"toolbar-buttongroup",style:{display:this.state.showToolbar?"inherit":"none"}},void 0,i()(q.a,{tooltip:a("hide-toolbar"),placement:"top"},void 0,i()(C.a,{variant:"secondary",className:"toolbar-toggle",onClick:this.toggleToolbar,onKeyPress:this.toggleToolbar,"aria-label":a("hide-toolbar")},void 0,Y)),this.state.elements.filter((function(t){return!!t.component})).map((function(e,a){return t.renderButton(e,a)})),i()(q.a,{tooltip:"".concat(this.state.calculator?n:s," ").concat(a("calculator")," ").concat("(F2)"),placement:"top",onToggle:function(){Object(W.a)("Calculator")}},void 0,i()(C.a,{variant:this.state.calculator?"success":"light",className:"toolbar-button toolbar-calculator",onClick:this.toggleCalculator,onKeyPress:this.toggleCalculator,style:{display:this.state.hideCalculator?"none":"inline-block"},"aria-label":"".concat(this.state.calculator?n:s," ").concat(a("calculator"))},void 0,Z)),e.hasOwner||B.a?i()(C.a,{variant:this.state.queue?"success":"light",className:"toolbar-button toolbar-queue",onClick:this.toggleQueue,onKeyPress:this.toggleQueue,onMouseOver:function(){Object(W.a)("Queue")},style:{display:this.state.hideQueue?"none":"inline-block"},"aria-label":"".concat(this.state.queue?n:s," ").concat(a("help-queue"))},void 0,i()(q.a,{tooltip:"".concat(this.state.queue?n:s," ").concat(a("help-queue")),placement:"top"},void 0,$),i()(q.a,{placement:"right",tooltip:a("num-open-questions")},void 0,i()("span",{className:"toolbar-queue-counter"},void 0,"   ".concat(e.questions.length)))):null,i()(q.a,{tooltip:"".concat(this.state.sketchpad?n:s," ").concat(a("sketchpad")),placement:"top",onToggle:j.a.preload},void 0,i()(C.a,{variant:this.state.sketchpad?"success":"light",className:"toolbar-button toolbar-sketchpad",onClick:this.toggleSketchpad,onKeyPress:this.toggleSketchpad,style:{display:this.state.hideSketchpad?"none":"inline-block"},"aria-label":"".concat(this.state.sketchpad?n:s," ").concat(a("sketchpad"))},void 0,tt)),i()(q.a,{tooltip:"".concat(this.state.help?n:s," ").concat(a("documentation")),placement:"top",onToggle:function(){Object(W.a)("HelpPage")}},void 0,i()(C.a,{variant:this.state.help?"success":"light",className:"toolbar-button toolbar-help",onClick:this.toggleHelp,onKeyPress:this.toggleHelp,"aria-label":"".concat(this.state.help?n:s," ").concat(a("documentation")),style:{display:this.state.hideHelpPage?"none":"inline-block"}},void 0,et)),i()(H.a,{user:!0,disabled:!e.enableTicketing},void 0,i()(q.a,{tooltip:"".concat(this.state.ticketing?n:s," ").concat(a("ticketing")),placement:"top",onToggle:J.preload},void 0,i()(C.a,{variant:this.state.ticketing?"success":"light",className:"toolbar-button toolbar-ticketing",onClick:this.toggleTicketing,onKeyPress:this.toggleTicketing,"aria-label":"".concat(this.state.ticketing?n:s," ").concat(a("ticketing"))},void 0,at))),i()(H.a,{owner:!0,inline:!0,showOwnerInPresentationMode:!0},void 0,i()(q.a,{tooltip:this.state.engagementInProgress?this.props.t("finish-poll"):this.props.t("polls"),placement:"right"},void 0,w.a.createElement(C.a,{variant:this.state.engagementInProgress?"warning":this.state.engagementMenu?"success":"light",className:"toolbar-button toolbar-engagement",onClick:this.toggleEngagement,ref:function(e){t.engagementButton=e},"aria-label":this.state.engagementInProgress?this.props.t("finish-poll"):this.props.t("open-poll-menu")},nt)),i()(S.a,{placement:"top",show:this.state.engagementMenu,target:this.engagementButton,trigger:"click"},void 0,this.renderEngagementButtons()))),i()(D,{session:this.context,onHide:this.toggleEngagement}),this.state.sketchpad?i()(T.a,{resizable:!0,onResize:function(e,a,n){t.setState({sketchpadWidth:Object(M.a)(n.style.width)-50,sketchpadHeight:Object(M.a)(n.style.height)-150})},default:{width:this.state.sketchpadWidth+50,height:this.state.sketchpadHeight+150},minWidth:510,minHeight:300,cancel:".textLayer,.btn"},void 0,w.a.createElement(x.a,{title:this.props.t("sketchpad"),style:{maxWidth:"none"},header:this.props.t("sketchpad"),onHide:this.toggleSketchpad,minimizable:!0,ref:function(e){t.sketchpad=e}},i()(j.a,{id:"".concat(e.namespaceName,"-").concat(e.lessonName,"-toolbar-sketchpad"),canvasWidth:this.state.sketchpadWidth,canvasHeight:this.state.sketchpadHeight,dynamicallyHideButtons:!0,useHashSign:!1}))):null,this.state.calculator?i()(F,{show:this.state.calculator,onHide:this.toggleCalculator}):null,i()(L,{id:"main_queue",show:this.state.queue,onHide:this.toggleQueue,onNewQuestion:function(){e.addNotification({title:a("queue"),message:a("posted-to-queue"),level:"success",position:"tr",action:{label:a("open-queue"),callback:function(){t.setState({queue:!0})}}})}}),this.state.ticketing?i()(J,{show:this.state.ticketing,onHide:this.toggleTicketing,t:this.props.t,session:this.context}):null,this.state.elements.filter((function(t){return!!t.component})).map((function(e,a){var n=e.component;return t.state[e.name]?i()(T.a,{bounds:"#Lesson",cancel:".card-body,.cancel"},a,i()("div",{className:"toolbar-outer-element"},void 0,i()("div",{className:"toolbar-inner-element",tabIndex:0,role:"button"},void 0,w.a.createElement(n.type,o()({},n.props,{style:{position:"inline-block",margin:"0px"}}),n.props.children)),i()("button",{name:n.props.name,className:"toolbar-hide-button fa fa-times",onClick:function(){t.setState(y()({},e.name,!t.state[e.name]))}}))):null})),this.state.help?i()(z,{session:this.context,onClose:this.toggleHelp}):null,i()(E.a,{actions:{F2:this.toggleCalculator}}))}}],[{key:"getDerivedStateFromProps",value:function(t,e){if(t.elements&&!e.elements||t.elements.length!==e.elements.length){var a={};return t.elements.forEach((function(t){a[t.name]=!1,"queue"===t.name&&(a.hideQueue=!0),"calculator"===t.name&&(a.hideCalculator=!0),"sketchpad"===t.name&&(a.hideSketchpad=!0),"help"===t.name&&(a.hideHelpPage=!0)})),a.elements=t.elements,a}return null}}]),a}(N.Component);ot.defaultProps={elements:[]},ot.contextType=I.a;e.default=Object(P.a)("Toolbar")(ot)},733:function(t,e,a){"use strict";var n=a(406),o=Object(n.a)((function(){return Promise.all([a.e(0),a.e(6),a.e(1326),a.e(317)]).then(a.bind(null,1578))}));e.a=o}}]);