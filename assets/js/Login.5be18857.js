(window.webpackJsonp=window.webpackJsonp||[]).push([[710],{4440:function(e,t,a){"use strict";a.r(t);a(420);var o=a(407),s=a.n(o),n=a(414),r=a.n(n),i=a(415),l=a.n(i),p=a(424),d=a.n(p),c=a(417),u=a.n(c),h=a(418),f=a.n(h),v=a(416),m=a.n(v),w=a(412),y=a.n(w),g=(a(482),a(0)),b=a.n(g),P=a(23),I=a.n(P),O=(a(404),a(450)),C=a.n(O),T=a(4096),k=a(422),N=a(640),x=a(586),j=a(690),F=a(880),A=a(881),S=a(592),D=a(510),E=a(509),M=a(506),R=a(465),K=a(421);a(382);function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,o=m()(e);if(t){var s=m()(this).constructor;a=Reflect.construct(o,arguments,s)}else a=o.apply(this,arguments);return f()(this,a)}}var H=C()("isle:login");Object(K.a)("Login");var J=function(e){u()(a,e);var t=B(a);function a(e){var o;return r()(this,a),o=t.call(this,e),y()(d()(o),"handleInputChange",(function(e){e.stopPropagation();var t=e.target,a=t.value,s=t.name;o.setState(y()({},s,a))})),y()(d()(o),"handleForgotPassword",(function(e){(e.preventDefault(),""===o.state.email)?o.setState({showInputOverlay:!0,overlayTarget:I.a.findDOMNode(o.emailInput),invalidInputMessage:o.props.t("enter-email-before-password-reset")}):o.context.forgotPassword(o.state.email)})),y()(d()(o),"hideAfterDelay",(function(){setTimeout((function(){o.setState({showInputOverlay:!1})}),2e3)})),y()(d()(o),"handleKeyPress",(function(e){e.stopPropagation(),13===e.charCode&&o.handleSubmit(e)})),y()(d()(o),"handleSubmit",(function(e){e.preventDefault();var t={password:o.state.password,email:o.state.email};if(o.state.showTFA)return t.token=o.state.token,o.context.login(t,(function(e,t,a){e||"ok"!==a.message||o.props.onClose()}));if(""===t.email)H("Email input field is empty, show message..."),o.setState({showInputOverlay:!0,overlayTarget:I.a.findDOMNode(o.emailInput),invalidInputMessage:o.props.t("enter-email")},o.hideAfterDelay);else if(""===t.password)H("Password input field is empty, show message..."),o.setState({showInputOverlay:!0,overlayTarget:I.a.findDOMNode(o.passwordInput),invalidInputMessage:o.props.t("enter-password")},o.hideAfterDelay);else{o.context.login(t,(function(e,t,a){if(!e){var s=a.message,n=a.type;"ok"===s?o.props.onClose():"finish-login-via-tfa"===s?o.setState({showTFA:!0}):o.setState({showInputOverlay:!0,overlayTarget:"no_user"===n?o.emailInput:o.passwordInput,invalidInputMessage:s},o.hideAfterDelay)}}))}})),o.state={email:"",password:"",show:e.show,showTFA:!1,token:""},o}return l()(a,[{key:"render",value:function(){var e=this;return s()(S.a,{show:this.props.show,className:"login-modal",onHide:this.props.onClose},void 0,s()(S.a.Header,{closeButton:!0},void 0,s()(S.a.Title,{as:"h3"},void 0,this.props.t("login"))),s()(S.a.Body,{},void 0,s()(F.a,{horizontal:!0},void 0,s()(x.a,{controlId:"form-email"},void 0,s()(j.a,{},void 0,this.props.t("email")),b.a.createElement(N.a,{name:"email",type:"email",placeholder:"Email",autoComplete:"username",onChange:this.handleInputChange,onKeyPress:this.handleKeyPress,ref:function(t){e.emailInput=t},disabled:this.state.showTFA})),s()(x.a,{controlId:"form-password"},void 0,s()(j.a,{},void 0,this.props.t("password")),b.a.createElement(N.a,{name:"password",type:"password",placeholder:"Password",autoComplete:"current-password",onChange:this.handleInputChange,onKeyPress:this.handleKeyPress,ref:function(t){e.passwordInput=t},disabled:this.state.showTFA})),this.state.showTFA?s()(x.a,{controlId:"form-tfa"},void 0,s()(j.a,{},void 0,this.props.t("enter-tfa-token")),s()(N.a,{name:"token",type:"text",placeholder:this.props.t("enter-token"),onChange:this.handleInputChange,onKeyPress:this.handleKeyPress,autoFocus:!0})):null)),s()(S.a.Footer,{},void 0,s()("button",{className:"forgot-password-button",onClick:this.handleForgotPassword},void 0,this.props.t("forgot-password")),s()(k.a,{variant:"primary",type:"submit",onClick:this.handleSubmit},void 0,this.props.t("signin")),s()(k.a,{onClick:this.props.onClose},void 0,this.props.t("close"))),s()(A.a,{show:this.state.showInputOverlay,target:this.state.overlayTarget,placement:"right",containerPadding:20},void 0,s()(D.a,{id:"popover-contained"},void 0,s()(E.a,{},void 0,this.props.t("invalid")),s()(M.a,{},void 0,this.state.invalidInputMessage))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.show!==t.show?{email:"",password:"",show:e.show,showTFA:!1}:null}}]),a}(g.Component);J.defaultProps={onClose:function(){},show:!1},J.contextType=R.a,t.default=Object(T.a)("Login")(J)},506:function(e,t,a){"use strict";var o=a(406),s=a(408),n=a(409),r=a.n(n),i=a(0),l=a.n(i),p=a(411),d=l.a.forwardRef((function(e,t){var a=e.as,n=void 0===a?"div":a,i=e.bsPrefix,d=e.className,c=e.children,u=Object(s.a)(e,["as","bsPrefix","className","children"]);return i=Object(p.a)(i,"popover-body"),l.a.createElement(n,Object(o.a)({ref:t},u,{className:r()(d,i)}),c)}));t.a=d},509:function(e,t,a){"use strict";var o=a(406),s=a(408),n=a(409),r=a.n(n),i=a(0),l=a.n(i),p=a(411),d=l.a.forwardRef((function(e,t){var a=e.as,n=void 0===a?"div":a,i=e.bsPrefix,d=e.className,c=e.children,u=Object(s.a)(e,["as","bsPrefix","className","children"]);return i=Object(p.a)(i,"popover-header"),l.a.createElement(n,Object(o.a)({ref:t},u,{className:r()(i,d)}),c)}));t.a=d},510:function(e,t,a){"use strict";var o=a(406),s=a(408),n=a(409),r=a.n(n),i=a(0),l=a.n(i),p=(a(594),a(411)),d=a(509),c=a(506),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.placement,i=e.className,d=e.style,u=e.children,h=e.content,f=e.arrowProps,v=(e.popper,e.show,Object(s.a)(e,["bsPrefix","placement","className","style","children","content","arrowProps","popper","show"])),m=Object(p.a)(a,"popover"),w=((null==n?void 0:n.split("-"))||[])[0];return l.a.createElement("div",Object(o.a)({ref:t,role:"tooltip",style:d,"x-placement":w,className:r()(i,m,w&&"bs-popover-"+w)},v),l.a.createElement("div",Object(o.a)({className:"arrow"},f)),h?l.a.createElement(c.a,null,u):u)}));u.defaultProps={placement:"right"},u.Title=d.a,u.Content=c.a,t.a=u}}]);