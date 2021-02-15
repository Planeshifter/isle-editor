/*! For license information please see Toolbar.a041bc16.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{1569:function(t,e,n){"use strict";var a=n(1570);t.exports=a},1570:function(t,e,n){"use strict";var a=n(469).isPrimitive,o=n(438).isPrimitive;t.exports=function(t,e,n){var i,s;if(!o(t))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+t+"`.");if(!o(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!a(n))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+n+"`.");if(0===n)return 0===e.length;i=n<0?t.length+n:n}else i=t.length;if(0===e.length)return!0;if((i-=e.length)<0)return!1;for(s=0;s<e.length;s++)if(t.charCodeAt(i+s)!==e.charCodeAt(s))return!1;return!0}},2721:function(t,e,n){"use strict";var a=n(580),o=n.n(a),i=n(1569),s=n.n(i);e.a=function(t){return s()(t,"px")&&(t=parseFloat(o()(t,"px",""))),t}},610:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(0);function o(){return Object(a.useState)(null)}},618:function(t,e,n){"use strict";var a=n(398),o=n(401),i=n(402),s=n.n(i),r=n(0),l=n.n(r),c=n(408),u=l.a.forwardRef((function(t,e){var n=t.bsPrefix,i=t.size,r=t.toggle,u=t.vertical,p=t.className,h=t.as,g=void 0===h?"div":h,f=Object(o.a)(t,["bsPrefix","size","toggle","vertical","className","as"]),d=Object(c.a)(n,"btn-group"),m=d;return u&&(m=d+"-vertical"),l.a.createElement(g,Object(a.a)({},f,{ref:e,className:s()(p,m,i&&d+"-"+i,r&&d+"-toggle")}))}));u.displayName="ButtonGroup",u.defaultProps={vertical:!1,toggle:!1,role:"group"},e.a=u},639:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n(644),o=n(0),i=function(t){var e;return"undefined"==typeof document?null:null==t?Object(a.a)().body:("function"==typeof t&&(t=t()),t&&"current"in t&&(t=t.current),(null==(e=t)?void 0:e.nodeType)&&t||null)};function s(t,e){var n=Object(o.useState)((function(){return i(t)})),a=n[0],s=n[1];if(!a){var r=i(t);r&&s(r)}return Object(o.useEffect)((function(){e&&a&&e(a)}),[e,a]),Object(o.useEffect)((function(){var e=i(t);e!==a&&s(e)}),[t,a]),a}},6495:function(t,e,n){"use strict";n.r(e);n(411),n(403),n(415),n(494);var a=n(507),o=n.n(a),i=n(400),s=n.n(i),r=n(407),l=n.n(r),c=n(410),u=n.n(c),p=n(420),h=n.n(p),g=n(413),f=n.n(g),d=n(414),m=n.n(d),b=n(412),v=n.n(b),k=n(404),y=n.n(k),w=n(0),O=n.n(w),j=(n(396),n(4125)),N=n(428),E=n(618),P=n(812),C=n(848),x=n(698),S=n(489),T=n(1542),q=n(558),H=n(1129),R=n(995),B=n(457),D=n(2721),I=n(462),W=n(578),_=n(399),K=Object(_.a)((function(){return Promise.all([n.e(15),n.e(386),n.e(179)]).then(n.bind(null,6498))})),M=Object(_.a)((function(){return Promise.all([n.e(0),n.e(378),n.e(151)]).then(n.bind(null,6511))})),Q=Object(_.a)((function(){return Promise.all([n.e(0),n.e(10),n.e(18),n.e(168)]).then(n.bind(null,6496))})),F=Object(_.a)((function(){return Promise.all([n.e(0),n.e(392),n.e(289)]).then(n.bind(null,6487))})),z=Object(_.a)((function(){return Promise.all([n.e(0),n.e(18),n.e(255)]).then(n.bind(null,6488))}));n(364);function U(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=v()(t);if(e){var o=v()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return m()(this,n)}}var L=s()("span",{className:"fa fa-lg fa-check toolbar-icon"}),V=s()("span",{className:"fa fa-lg fa-tachometer-alt toolbar-icon"}),A=s()("span",{className:"fa fa-lg fa-thumbs-up toolbar-icon"}),J=s()("span",{className:"fa fa-lg fa-poll toolbar-icon"}),G=s()("i",{className:"fas fa-chevron-right"}),X=s()("i",{className:"fas fa-chevron-left"}),Y=s()("span",{className:"fa fa-lg fa-calculator toolbar-icon"}),Z=s()("span",{className:"fa fa-lg fa-question-circle toolbar-icon"}),$=s()("span",{className:"fa fa-lg fa-paint-brush toolbar-icon"}),tt=s()("span",{className:"fa fa-lg fa-book toolbar-icon"}),et=s()("span",{className:"fa fa-lg fa-medkit toolbar-icon"}),nt=s()("span",{className:"fa fa-lg fa-poll-h toolbar-icon"}),at=function(t){f()(n,t);var e=U(n);function n(t){var a;l()(this,n),a=e.call(this,t),y()(h()(a),"toggleCalculator",(function(){a.setState({calculator:!a.state.calculator})})),y()(h()(a),"toggleQueue",(function(){a.setState({queue:!a.state.queue})})),y()(h()(a),"toggleSketchpad",(function(){a.setState({sketchpad:!a.state.sketchpad})})),y()(h()(a),"toggleTicketing",(function(){a.setState({ticketing:!a.state.ticketing})})),y()(h()(a),"toggleEngagement",(function(){var t=a.context;if(a.state.engagementInProgress){var e={id:"engagement",type:I.eb};return t.log(e,"members")}a.setState({engagementMenu:!a.state.engagementMenu})})),y()(h()(a),"toggleHelp",(function(){a.setState({help:!a.state.help})})),y()(h()(a),"renderEngagementButtons",(function(t){var e=a.context;return O.a.createElement(E.a,o()({vertical:!0,className:"toolbar-engagement-buttons"},t),s()(S.a,{tooltip:a.props.t("yes-no"),placement:"right"},void 0,s()(N.a,{variant:"light",className:"toolbar-button",onClick:function(){var t={id:"engagement",type:I.fb,value:"yes:no"};e.log(t,"members")},"aria-label":"".concat(a.props.t("yes-no")," ").concat(a.props.t("poll"))},void 0,L)),s()(S.a,{tooltip:a.props.t("slow-fast"),placement:"right"},void 0,s()(N.a,{variant:"light",className:"toolbar-button",onClick:function(){var t={id:"engagement",type:I.fb,value:"too-slow:too-fast"};e.log(t,"members")},"aria-label":"".concat(a.props.t("slow-fast")," ").concat(a.props.t("poll"))},void 0,V)),s()(S.a,{tooltip:a.props.t("like-dislike"),placement:"right"},void 0,s()(N.a,{variant:"light",className:"toolbar-button",onClick:function(){var t={id:"engagement",type:I.fb,value:"like:dislike"};e.log(t,"members")},"aria-label":"".concat(a.props.t("like-dislike")," ").concat(a.props.t("poll"))},void 0,A)),s()(S.a,{tooltip:a.props.t("survey"),placement:"right"},void 0,s()(N.a,{variant:"light",className:"toolbar-button",onClick:function(){var t={id:"engagement",type:I.fb,value:"survey"};e.log(t,"members")},"aria-label":a.props.t("survey")},void 0,J)))})),y()(h()(a),"toggleToolbar",(function(){a.setState({showToolbar:!a.state.showToolbar})}));var i={calculator:!1,queue:!1,help:!1,sketchpad:!1,engagementMenu:!1,engagementInProgress:!1,ticketing:!1,elements:[],showToolbar:!0,sketchpadHeight:.6*window.innerHeight,sketchpadWidth:.75*window.innerWidth};return a.state=i,a}return u()(n,[{key:"componentDidMount",value:function(){var t=this,e=this.context;this.unsubscribe=e.subscribe((function(e,n){if(e===I.Cc&&t.setState({showToolbar:!n}),e===W.w||e===W.O||e===W.u||e===W.v)t.forceUpdate();else if(e===W.n&&"engagement"===n.id){var a=n.type;a===I.fb?t.setState({engagementInProgress:!0,engagementMenu:!1}):a===I.eb&&t.setState({engagementInProgress:!1})}}))}},{key:"componentWillUnmount",value:function(){this.unsubscribe&&this.unsubscribe()}},{key:"renderButton",value:function(t,e){var n=this,a=function(){n.setState(y()({},t.name,!n.state[t.name]))};return s()(S.a,{tooltip:"".concat(this.state[t.name]?this.props.t("close"):this.props.t("open")," ").concat(t.name),placement:"right"},e,s()(N.a,{variant:"light",className:"toolbar-button",onClick:a,onKeyPress:a},void 0,s()("span",{className:"fa fa-lg fa-".concat(t.icon," toolbar-icon")})))}},{key:"render",value:function(){var t=this,e=this.context,n=this.props.t,a=n("close"),i=n("open");return s()(w.Fragment,{},void 0,s()(S.a,{tooltip:n("show-toolbar"),placement:"top"},void 0,s()(N.a,{variant:"warning",className:"toolbar-buttongroup toolbar-toggle",onClick:this.toggleToolbar,onKeyPress:this.toggleToolbar,style:{display:this.state.showToolbar?"none":"inherit"}},void 0,G)),s()(E.a,{className:"toolbar-buttongroup",style:{display:this.state.showToolbar?"inherit":"none"}},void 0,s()(S.a,{tooltip:n("hide-toolbar"),placement:"top"},void 0,s()(N.a,{variant:"secondary",className:"toolbar-toggle",onClick:this.toggleToolbar,onKeyPress:this.toggleToolbar},void 0,X)),this.state.elements.filter((function(t){return!!t.component})).map((function(e,n){return t.renderButton(e,n)})),s()(S.a,{tooltip:"".concat(this.state.calculator?a:i," ").concat(n("calculator")," ").concat("(F2)"),placement:"top"},void 0,s()(N.a,{variant:this.state.calculator?"success":"light",className:"toolbar-button toolbar-calculator",onClick:this.toggleCalculator,onKeyPress:this.toggleCalculator,style:{display:this.state.hideCalculator?"none":"inline-block"},"aria-label":"".concat(this.state.calculator?a:i," ").concat(n("calculator"))},void 0,Y)),e.hasOwner||R.a?s()(N.a,{variant:this.state.queue?"success":"light",className:"toolbar-button toolbar-queue",onClick:this.toggleQueue,onKeyPress:this.toggleQueue,style:{display:this.state.hideQueue?"none":"inline-block"},"aria-label":"".concat(this.state.queue?a:i," ").concat(n("help-queue"))},void 0,s()(S.a,{tooltip:"".concat(this.state.queue?a:i," ").concat(n("help-queue")),placement:"top"},void 0,Z),s()(S.a,{placement:"right",tooltip:n("num-open-questions")},void 0,s()("span",{className:"toolbar-queue-counter"},void 0,"   ".concat(e.questions.length)))):null,s()(S.a,{tooltip:"".concat(this.state.sketchpad?a:i," ").concat(n("sketchpad")),placement:"top"},void 0,s()(N.a,{variant:this.state.sketchpad?"success":"light",className:"toolbar-button toolbar-sketchpad",onClick:this.toggleSketchpad,onKeyPress:this.toggleSketchpad,style:{display:this.state.hideSketchpad?"none":"inline-block"},"aria-label":"".concat(this.state.sketchpad?a:i," ").concat(n("sketchpad"))},void 0,$)),s()(S.a,{tooltip:"".concat(this.state.help?a:i," ").concat(n("documentation")),placement:"top"},void 0,s()(N.a,{variant:this.state.help?"success":"light",className:"toolbar-button toolbar-help",onClick:this.toggleHelp,onKeyPress:this.toggleHelp,"aria-label":"".concat(this.state.help?a:i," ").concat(n("documentation"))},void 0,tt)),s()(x.a,{user:!0,disabled:!e.enableTicketing},void 0,s()(S.a,{tooltip:"".concat(this.state.ticketing?a:i," ").concat(n("ticketing")),placement:"top"},void 0,s()(N.a,{variant:this.state.ticketing?"success":"light",className:"toolbar-button toolbar-ticketing",onClick:this.toggleTicketing,onKeyPress:this.toggleTicketing,"aria-label":"".concat(this.state.ticketing?a:i," ").concat(n("ticketing"))},void 0,et))),s()(x.a,{owner:!0,inline:!0,showOwnerInPresentationMode:!0},void 0,s()(S.a,{tooltip:this.state.engagementInProgress?this.props.t("finish-poll"):this.props.t("polls"),placement:"top"},void 0,O.a.createElement(N.a,{variant:this.state.engagementInProgress?"warning":this.state.engagementMenu?"success":"light",className:"toolbar-button toolbar-engagement",onClick:this.toggleEngagement,ref:function(e){t.engagementButton=e},"aria-label":this.state.engagementInProgress?this.props.t("finish-poll"):this.props.t("open-poll-menu")},nt)),s()(P.a,{placement:"right",show:this.state.engagementMenu,target:this.engagementButton,trigger:"click"},void 0,this.renderEngagementButtons()))),s()(Q,{session:this.context,onHide:this.toggleEngagement}),this.state.sketchpad?s()(C.a,{resizable:!0,onResize:function(e,n,a){t.setState({sketchpadWidth:Object(D.a)(a.style.width)-50,sketchpadHeight:Object(D.a)(a.style.height)-150})},default:{width:this.state.sketchpadWidth+50,height:this.state.sketchpadHeight+150},minWidth:510,minHeight:300,cancel:".textLayer,.btn"},void 0,O.a.createElement(q.a,{title:this.props.t("sketchpad"),style:{maxWidth:"none"},header:this.props.t("sketchpad"),onHide:this.toggleSketchpad,minimizable:!0,ref:function(e){t.sketchpad=e}},s()(T.a,{id:"".concat(e.namespaceName,"-").concat(e.lessonName,"-toolbar-sketchpad"),canvasWidth:this.state.sketchpadWidth,canvasHeight:this.state.sketchpadHeight,dynamicallyHideButtons:!0,useHashSign:!1}))):null,this.state.calculator?s()(M,{show:this.state.calculator,onHide:this.toggleCalculator}):null,s()(z,{id:"main_queue",show:this.state.queue,onHide:this.toggleQueue,onNewQuestion:function(){e.addNotification({title:n("queue"),message:n("posted-to-queue"),level:"success",position:"tr",action:{label:n("open-queue"),callback:function(){t.setState({queue:!0})}}})}}),this.state.ticketing?s()(F,{show:this.state.ticketing,onHide:this.toggleTicketing,t:this.props.t,session:this.context}):null,this.state.elements.filter((function(t){return!!t.component})).map((function(e,n){var a=e.component;return t.state[e.name]?s()(C.a,{bounds:"#Lesson",cancel:".card-body,.cancel"},n,s()("div",{className:"toolbar-outer-element"},void 0,s()("div",{className:"toolbar-inner-element",tabIndex:0,role:"button"},void 0,O.a.createElement(a.type,o()({},a.props,{style:{position:"inline-block",margin:"0px"}}),a.props.children)),s()("button",{name:a.props.name,className:"toolbar-hide-button fa fa-times",onClick:function(){t.setState(y()({},e.name,!t.state[e.name]))}}))):null})),this.state.help?s()(K,{session:this.context,onClose:this.toggleHelp}):null,s()(H.a,{actions:{F2:this.toggleCalculator}}))}}],[{key:"getDerivedStateFromProps",value:function(t,e){if(t.elements&&!e.elements||t.elements.length!==e.elements.length){var n={};return t.elements.forEach((function(t){n[t.name]=!1,"queue"===t.name&&(n.hideQueue=!0),"calculator"===t.name&&(n.hideCalculator=!0),"sketchpad"===t.name&&(n.hideSketchpad=!0)})),n.elements=t.elements,n}return null}}]),n}(w.Component);at.defaultProps={elements:[]},at.contextType=B.a;e.default=Object(j.a)("Toolbar")(at)},716:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(0);function o(){var t=Object(a.useRef)(!0),e=Object(a.useRef)((function(){return t.current}));return Object(a.useEffect)((function(){return function(){t.current=!1}}),[]),e.current}},717:function(t,e,n){"use strict";function a(t,e){return t.contains?t.contains(e):t.compareDocumentPosition?t===e||!!(16&t.compareDocumentPosition(e)):void 0}n.d(e,"a",(function(){return a}))},808:function(t,e,n){"use strict";function a(t,e){return t.classList?!!e&&t.classList.contains(e):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")}n.d(e,"a",(function(){return a}))},812:function(t,e,n){"use strict";var a=n(398),o=n(401),i=n(0),s=n.n(i),r=n(402),l=n.n(r),c=n(396),u=n.n(c),p=n(23),h=n.n(p),g=n(610),f=n(499),d=n(962),m=n(1037),b=n(1038),v=n(639),k=n(1010),y=s.a.forwardRef((function(t,e){var n=t.flip,r=t.offset,l=t.placement,c=t.containerPadding,u=void 0===c?5:c,p=t.popperConfig,d=void 0===p?{}:p,y=t.transition,w=Object(g.a)(),O=w[0],j=w[1],N=Object(g.a)(),E=N[0],P=N[1],C=Object(f.a)(j,e),x=Object(v.a)(t.container),S=Object(v.a)(t.target),T=Object(i.useState)(!t.show),q=T[0],H=T[1],R=Object(m.a)(S,O,Object(k.a)({placement:l,enableEvents:!!t.show,containerPadding:u||5,flip:n,offset:r,arrowElement:E,popperConfig:d})),B=R.styles,D=R.attributes,I=Object(o.a)(R,["styles","attributes"]);t.show?q&&H(!1):t.transition||q||H(!0);var W=t.show||y&&!q;if(Object(b.a)(O,t.onHide,{disabled:!t.rootClose||t.rootCloseDisabled,clickTrigger:t.rootCloseEvent}),!W)return null;var _=t.children(Object(a.a)({},I,{show:!!t.show,props:Object(a.a)({},D.popper,{style:B.popper,ref:C}),arrowProps:Object(a.a)({},D.arrow,{style:B.arrow,ref:P})}));if(y){var K=t.onExit,M=t.onExiting,Q=t.onEnter,F=t.onEntering,z=t.onEntered;_=s.a.createElement(y,{in:t.show,appear:!0,onExit:K,onExiting:M,onExited:function(){H(!0),t.onExited&&t.onExited.apply(t,arguments)},onEnter:Q,onEntering:F,onEntered:z},_)}return x?h.a.createPortal(_,x):null}));y.displayName="Overlay",y.propTypes={show:u.a.bool,placement:u.a.oneOf(d.h),target:u.a.any,container:u.a.any,flip:u.a.bool,children:u.a.func.isRequired,containerPadding:u.a.number,popperConfig:u.a.object,rootClose:u.a.bool,rootCloseEvent:u.a.oneOf(["click","mousedown"]),rootCloseDisabled:u.a.bool,onHide:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var o;return t.rootClose?(o=u.a.func).isRequired.apply(o,[t].concat(n)):u.a.func.apply(u.a,[t].concat(n))},transition:u.a.elementType,onEnter:u.a.func,onEntering:u.a.func,onEntered:u.a.func,onExit:u.a.func,onExiting:u.a.func,onExited:u.a.func};var w=y,O=n(961),j=n(1009),N=n(636),E={transition:N.a,rootClose:!1,show:!1,placement:"top"};function P(t){var e=t.children,n=t.transition,r=t.popperConfig,c=void 0===r?{}:r,u=Object(o.a)(t,["children","transition","popperConfig"]),p=Object(i.useRef)({}),h=Object(j.a)(),g=h[0],f=h[1],d=!0===n?N.a:n||null;return s.a.createElement(w,Object(a.a)({},u,{ref:g,popperConfig:Object(a.a)({},c,{modifiers:f.concat(c.modifiers||[])}),transition:d}),(function(t){var i,r=t.props,c=t.arrowProps,u=t.show,h=t.update,g=(t.forceUpdate,t.placement),f=t.state,d=Object(o.a)(t,["props","arrowProps","show","update","forceUpdate","placement","state"]);!function(t,e){var n=t.ref,a=e.ref;t.ref=n.__wrapped||(n.__wrapped=function(t){return n(Object(O.a)(t))}),e.ref=a.__wrapped||(a.__wrapped=function(t){return a(Object(O.a)(t))})}(r,c);var m=Object.assign(p.current,{state:f,scheduleUpdate:h,placement:g,outOfBoundaries:(null==f||null==(i=f.modifiersData.hide)?void 0:i.isReferenceHidden)||!1});return"function"==typeof e?e(Object(a.a)({},d,r,{placement:g,show:u,popper:m,arrowProps:c})):s.a.cloneElement(e,Object(a.a)({},d,r,{placement:g,arrowProps:c,popper:m,className:l()(e.props.className,!n&&u&&"show"),style:Object(a.a)({},e.props.style,r.style)}))}))}P.defaultProps=E;e.a=P},848:function(t,e,n){"use strict";var a=n(399),o=Object(a.a)((function(){return Promise.all([n.e(0),n.e(10),n.e(396),n.e(166)]).then(n.bind(null,1723))}));e.a=o}}]);