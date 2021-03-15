/*! For license information please see Signup.e027af21.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[967],{4439:function(e,t,a){"use strict";a.r(t);a(436),a(423),a(420);var s=a(407),i=a.n(s),n=(a(630),a(683),a(482),a(414)),o=a.n(n),r=a(415),p=a.n(r),l=a(424),c=a.n(l),d=a(417),u=a.n(d),h=a(418),m=a.n(h),v=a(416),f=a.n(v),g=a(412),w=a.n(g),y=a(0),b=(a(404),a(450)),P=a.n(b),S=a(4096),C=a(422),x=a(640),N=a(586),j=a(690),O=a(880),R=a(592),I=a(881),V=a(510),E=a(509),k=a(506),K=a(6279),T=a.n(K),F=a(484),L=a(465),D=a(421);function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,s=f()(e);if(t){var i=f()(this).constructor;a=Reflect.construct(s,arguments,i)}else a=s.apply(this,arguments);return m()(this,a)}}var H=P()("isle:signup"),J=["name","email","password","passwordRepeat"];Object(D.a)("Signup");var U=function(e){u()(a,e);var t=B(a);function a(e){var s;return o()(this,a),s=t.call(this,e),w()(c()(s),"handleSubmit",(function(e){e.preventDefault();var t=s.context;if("success"===s.getEmailValidationState()&&"success"===s.getNameValidationState()&&"success"===s.getPasswordValidationState()){var a=T()(s.state,J);t.registerUser(a,(function(e){e||s.props.onClose()}))}else s.setState({showSubmitOverlay:!0,overlayTarget:e.target},(function(){setTimeout((function(){s.setState({showSubmitOverlay:!1})}),2e3)}));return!1})),w()(c()(s),"handleKeyPress",(function(e){e.stopPropagation(),13===e.charCode&&s.handleSubmit(e)})),w()(c()(s),"handleInputChange",(function(e){e.stopPropagation();var t=e.target,a=t.value,i=t.name;H('Update "'.concat(i,'" state to "').concat(a,'"...')),s.setState(w()({},i,a))})),w()(c()(s),"getEmailValidationState",(function(){return s.state.email.includes("@")?"success":"warning"})),w()(c()(s),"getNameValidationState",(function(){return s.state.name.length>=3?"success":"warning"})),w()(c()(s),"getPasswordValidationState",(function(){var e=s.state,t=e.password,a=e.passwordRepeat;return t.length<6?"warning":t!==a?"error":"success"})),s.state={name:"",email:"",password:"",passwordRepeat:""},s}return p()(a,[{key:"render",value:function(){var e=this.state.email&&"success"!==this.getEmailValidationState(),t=this.state.name&&"success"!==this.getNameValidationState(),a=this.getPasswordValidationState(),s=this.state.password&&"warning"===a,n=this.state.passwordRepeat&&"error"===a;return i()(R.a,{show:this.props.show,onHide:this.props.onClose,dialogClassName:"modal-60w"},void 0,i()(R.a.Header,{closeButton:!0},void 0,i()(R.a.Title,{as:"h3"},void 0,this.props.t("create-user"))),i()(R.a.Body,{},void 0,i()("p",{},void 0,this.props.t("opening-paragraph")),i()(O.a,{horizontal:!0},void 0,i()(F.a,{placement:"right",tooltip:this.props.t("enter-valid-email")},void 0,i()(N.a,{controlId:"signup-form-email"},void 0,i()(j.a,{},void 0,this.props.t("email")),i()(x.a,{name:"email",type:"email",placeholder:this.props.t("email-placeholder"),autoComplete:"username",onChange:this.handleInputChange,onKeyPress:this.handleKeyPress,isInvalid:e,value:this.state.email}),i()(x.a.Feedback,{type:"invalid"},void 0,this.props.t("invalid-email")),this.state.email?null:i()("small",{className:"form-text text-muted"},void 0,this.props.t("enter-email")))),i()(F.a,{placement:"right",tooltip:this.props.t("name-tooltip")},void 0,i()(N.a,{controlId:"signup-form-name"},void 0,i()(j.a,{},void 0,this.props.t("name")),i()(x.a,{name:"name",type:"text",placeholder:this.props.t("name-placeholder"),onChange:this.handleInputChange,onKeyPress:this.handleKeyPress,isInvalid:t,value:this.state.name}),i()(x.a.Feedback,{type:"invalid"},void 0,this.props.t("invalid-name")),this.state.name?null:i()("small",{className:"form-text text-muted"},void 0,this.props.t("enter-name")))),i()(F.a,{placement:"right",tooltip:this.props.t("password-tooltip")},void 0,i()(N.a,{controlId:"signup-form-password"},void 0,i()(j.a,{},void 0,this.props.t("password")),i()(x.a,{name:"password",type:"password",placeholder:this.props.t("password-placeholder"),autoComplete:"new-password",onChange:this.handleInputChange,onKeyPress:this.handleKeyPress,maxLength:30,minLength:6,isInvalid:s,value:this.state.password}),i()(x.a.Feedback,{type:"invalid"},void 0,this.props.t("invalid-password")))),i()(N.a,{controlId:"signup-form-password-confirmation"},void 0,i()(x.a,{name:"passwordRepeat",type:"password",placeholder:this.props.t("confirm-password"),autocomplete:"new-password",onChange:this.handleInputChange,onKeyPress:this.handleKeyPress,maxLength:30,minLength:6,isInvalid:n,value:this.state.passwordRepeat}),i()(x.a.Feedback,{type:"invalid"},void 0,this.props.t("password-no-match")))),i()(I.a,{show:this.state.showSubmitOverlay,target:this.state.overlayTarget,placement:"right",containerPadding:20},void 0,i()(V.a,{id:"popover-contained"},void 0,i()(E.a,{},void 0,this.props.t("inputs-invalid")),i()(k.a,{},void 0,this.props.t("inputs-invalid-content"))))),i()(R.a.Footer,{},void 0,i()(C.a,{variant:"primary",className:"centered",type:"submit",onClick:this.handleSubmit},void 0,this.props.t("signup")),i()(C.a,{onClick:this.props.onClose},void 0,this.props.t("close"))))}}]),a}(y.Component);U.defaultProps={onClose:function(){},show:!1},U.contextType=L.a,t.default=Object(S.a)("Signup")(U)},506:function(e,t,a){"use strict";var s=a(406),i=a(408),n=a(409),o=a.n(n),r=a(0),p=a.n(r),l=a(411),c=p.a.forwardRef((function(e,t){var a=e.as,n=void 0===a?"div":a,r=e.bsPrefix,c=e.className,d=e.children,u=Object(i.a)(e,["as","bsPrefix","className","children"]);return r=Object(l.a)(r,"popover-body"),p.a.createElement(n,Object(s.a)({ref:t},u,{className:o()(c,r)}),d)}));t.a=c},509:function(e,t,a){"use strict";var s=a(406),i=a(408),n=a(409),o=a.n(n),r=a(0),p=a.n(r),l=a(411),c=p.a.forwardRef((function(e,t){var a=e.as,n=void 0===a?"div":a,r=e.bsPrefix,c=e.className,d=e.children,u=Object(i.a)(e,["as","bsPrefix","className","children"]);return r=Object(l.a)(r,"popover-header"),p.a.createElement(n,Object(s.a)({ref:t},u,{className:o()(r,c)}),d)}));t.a=c},510:function(e,t,a){"use strict";var s=a(406),i=a(408),n=a(409),o=a.n(n),r=a(0),p=a.n(r),l=(a(594),a(411)),c=a(509),d=a(506),u=p.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.placement,r=e.className,c=e.style,u=e.children,h=e.content,m=e.arrowProps,v=(e.popper,e.show,Object(i.a)(e,["bsPrefix","placement","className","style","children","content","arrowProps","popper","show"])),f=Object(l.a)(a,"popover"),g=((null==n?void 0:n.split("-"))||[])[0];return p.a.createElement("div",Object(s.a)({ref:t,role:"tooltip",style:c,"x-placement":g,className:o()(r,f,g&&"bs-popover-"+g)},v),p.a.createElement("div",Object(s.a)({className:"arrow"},m)),h?p.a.createElement(d.a,null,u):u)}));u.defaultProps={placement:"right"},u.Title=c.a,u.Content=d.a,t.a=u},6279:function(e,t,a){"use strict";var s=a(6280);e.exports=s},6280:function(e,t,a){"use strict";var s=a(431).isPrimitive,i=a(893).primitives,n=a(426);e.exports=function(e,t){var a,o,r;if("object"!=typeof e||null===e)throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if(a={},s(t))return n(e,t)&&(a[t]=e[t]),a;if(i(t)){for(r=0;r<t.length;r++)o=t[r],n(e,o)&&(a[o]=e[o]);return a}throw new TypeError("invalid argument. Second argument must be either a string primitive or an array of string primitives. Value: `"+t+"`.")}},893:function(e,t,a){"use strict";var s=a(425),i=a(806),n=a(431),o=i(n);s(o,"primitives",i(n.isPrimitive)),s(o,"objects",i(n.isObject)),e.exports=o}}]);