(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{4479:function(e,t,a){"use strict";a.r(t);a(411),a(403),a(415);var o=a(400),n=a.n(o),r=(a(494),a(407)),s=a.n(r),i=a(410),l=a.n(i),p=a(420),c=a.n(p),d=a(413),u=a.n(d),f=a(414),h=a.n(f),v=a(412),m=a.n(v),w=a(404),b=a.n(w),g=a(0),y=a.n(g),O=a(23),j=a.n(O),P=(a(396),a(443)),E=a.n(P),C=a(4125),I=a(428),x=a(724),T=a(662),N=a(816),k=a(934),D=a(812),R=a(672),S=a(529),A=a(522),F=a(515),_=a(457),M=a(418);a(374);function K(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,o=m()(e);if(t){var n=m()(this).constructor;a=Reflect.construct(o,arguments,n)}else a=o.apply(this,arguments);return h()(this,a)}}var H=E()("isle:login");Object(M.a)("Login");var B=function(e){u()(a,e);var t=K(a);function a(e){var o;return s()(this,a),o=t.call(this,e),b()(c()(o),"handleInputChange",(function(e){e.stopPropagation();var t=e.target,a=t.value,n=t.name;o.setState(b()({},n,a))})),b()(c()(o),"handleForgotPassword",(function(e){(e.preventDefault(),""===o.state.email)?o.setState({showInputOverlay:!0,overlayTarget:j.a.findDOMNode(o.emailInput),invalidInputMessage:o.props.t("enter-email-before-password-reset")}):o.context.forgotPassword(o.state.email)})),b()(c()(o),"hideAfterDelay",(function(){setTimeout((function(){o.setState({showInputOverlay:!1})}),2e3)})),b()(c()(o),"handleKeyPress",(function(e){e.stopPropagation(),13===e.charCode&&o.handleSubmit(e)})),b()(c()(o),"handleSubmit",(function(e){e.preventDefault();var t={password:o.state.password,email:o.state.email};if(o.state.showTFA)return t.token=o.state.token,o.context.login(t,(function(e,t,a){e||"ok"!==a.message||o.props.onClose()}));if(""===t.email)H("Email input field is empty, show message..."),o.setState({showInputOverlay:!0,overlayTarget:j.a.findDOMNode(o.emailInput),invalidInputMessage:o.props.t("enter-email")},o.hideAfterDelay);else if(""===t.password)H("Password input field is empty, show message..."),o.setState({showInputOverlay:!0,overlayTarget:j.a.findDOMNode(o.passwordInput),invalidInputMessage:o.props.t("enter-password")},o.hideAfterDelay);else{o.context.login(t,(function(e,t,a){if(!e){var n=a.message,r=a.type;"ok"===n?o.props.onClose():"finish-login-via-tfa"===n?o.setState({showTFA:!0}):o.setState({showInputOverlay:!0,overlayTarget:"no_user"===r?o.emailInput:o.passwordInput,invalidInputMessage:n},o.hideAfterDelay)}}))}})),o.state={email:"",password:"",show:e.show,showTFA:!1,token:""},o}return l()(a,[{key:"render",value:function(){var e=this;return n()(R.a,{show:this.props.show,className:"login-modal",onHide:this.props.onClose},void 0,n()(R.a.Header,{closeButton:!0},void 0,n()(R.a.Title,{as:"h3"},void 0,this.props.t("login"))),n()(R.a.Body,{},void 0,n()(k.a,{horizontal:!0},void 0,n()(T.a,{controlId:"form-email"},void 0,n()(N.a,{},void 0,this.props.t("email")),y.a.createElement(x.a,{name:"email",type:"email",placeholder:"Email",autoComplete:"username",onChange:this.handleInputChange,onKeyPress:this.handleKeyPress,ref:function(t){e.emailInput=t},disabled:this.state.showTFA})),n()(T.a,{controlId:"form-password"},void 0,n()(N.a,{},void 0,this.props.t("password")),y.a.createElement(x.a,{name:"password",type:"password",placeholder:"Password",autoComplete:"current-password",onChange:this.handleInputChange,onKeyPress:this.handleKeyPress,ref:function(t){e.passwordInput=t},disabled:this.state.showTFA})),this.state.showTFA?n()(T.a,{controlId:"form-tfa"},void 0,n()(N.a,{},void 0,this.props.t("enter-tfa-token")),n()(x.a,{name:"token",type:"text",placeholder:this.props.t("enter-token"),onChange:this.handleInputChange,onKeyPress:this.handleKeyPress,autoFocus:!0})):null)),n()(R.a.Footer,{},void 0,n()("button",{className:"forgot-password-button",onClick:this.handleForgotPassword},void 0,this.props.t("forgot-password")),n()(I.a,{variant:"primary",type:"submit",onClick:this.handleSubmit},void 0,this.props.t("signin")),n()(I.a,{onClick:this.props.onClose},void 0,this.props.t("close"))),n()(D.a,{show:this.state.showInputOverlay,target:this.state.overlayTarget,placement:"right",containerPadding:20},void 0,n()(S.a,{id:"popover-contained"},void 0,n()(A.a,{},void 0,this.props.t("invalid")),n()(F.a,{},void 0,this.state.invalidInputMessage))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.show!==t.show?{email:"",password:"",show:e.show,showTFA:!1}:null}}]),a}(g.Component);B.defaultProps={onClose:function(){},show:!1},B.contextType=_.a,t.default=Object(C.a)("Login")(B)},515:function(e,t,a){"use strict";var o=a(398),n=a(401),r=a(402),s=a.n(r),i=a(0),l=a.n(i),p=a(408),c=l.a.forwardRef((function(e,t){var a=e.as,r=void 0===a?"div":a,i=e.bsPrefix,c=e.className,d=e.children,u=Object(n.a)(e,["as","bsPrefix","className","children"]);return i=Object(p.a)(i,"popover-body"),l.a.createElement(r,Object(o.a)({ref:t},u,{className:s()(c,i)}),d)}));t.a=c},522:function(e,t,a){"use strict";var o=a(398),n=a(401),r=a(402),s=a.n(r),i=a(0),l=a.n(i),p=a(408),c=l.a.forwardRef((function(e,t){var a=e.as,r=void 0===a?"div":a,i=e.bsPrefix,c=e.className,d=e.children,u=Object(n.a)(e,["as","bsPrefix","className","children"]);return i=Object(p.a)(i,"popover-header"),l.a.createElement(r,Object(o.a)({ref:t},u,{className:s()(i,c)}),d)}));t.a=c},529:function(e,t,a){"use strict";var o=a(398),n=a(401),r=a(402),s=a.n(r),i=a(0),l=a.n(i),p=(a(635),a(408)),c=a(522),d=a(515),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.placement,i=e.className,c=e.style,u=e.children,f=e.content,h=e.arrowProps,v=(e.popper,e.show,Object(n.a)(e,["bsPrefix","placement","className","style","children","content","arrowProps","popper","show"])),m=Object(p.a)(a,"popover"),w=((null==r?void 0:r.split("-"))||[])[0];return l.a.createElement("div",Object(o.a)({ref:t,role:"tooltip",style:c,"x-placement":w,className:s()(i,m,w&&"bs-popover-"+w)},v),l.a.createElement("div",Object(o.a)({className:"arrow"},h)),f?l.a.createElement(d.a,null,u):u)}));u.defaultProps={placement:"right"},u.Title=c.a,u.Content=d.a,t.a=u},812:function(e,t,a){"use strict";var o=a(398),n=a(401),r=a(0),s=a.n(r),i=a(402),l=a.n(i),p=a(396),c=a.n(p),d=a(23),u=a.n(d),f=a(610),h=a(499),v=a(962),m=a(1037),w=a(1038),b=a(639),g=a(1010),y=s.a.forwardRef((function(e,t){var a=e.flip,i=e.offset,l=e.placement,p=e.containerPadding,c=void 0===p?5:p,d=e.popperConfig,v=void 0===d?{}:d,y=e.transition,O=Object(f.a)(),j=O[0],P=O[1],E=Object(f.a)(),C=E[0],I=E[1],x=Object(h.a)(P,t),T=Object(b.a)(e.container),N=Object(b.a)(e.target),k=Object(r.useState)(!e.show),D=k[0],R=k[1],S=Object(m.a)(N,j,Object(g.a)({placement:l,enableEvents:!!e.show,containerPadding:c||5,flip:a,offset:i,arrowElement:C,popperConfig:v})),A=S.styles,F=S.attributes,_=Object(n.a)(S,["styles","attributes"]);e.show?D&&R(!1):e.transition||D||R(!0);var M=e.show||y&&!D;if(Object(w.a)(j,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!M)return null;var K=e.children(Object(o.a)({},_,{show:!!e.show,props:Object(o.a)({},F.popper,{style:A.popper,ref:x}),arrowProps:Object(o.a)({},F.arrow,{style:A.arrow,ref:I})}));if(y){var H=e.onExit,B=e.onExiting,U=e.onEnter,q=e.onEntering,J=e.onEntered;K=s.a.createElement(y,{in:e.show,appear:!0,onExit:H,onExiting:B,onExited:function(){R(!0),e.onExited&&e.onExited.apply(e,arguments)},onEnter:U,onEntering:q,onEntered:J},K)}return T?u.a.createPortal(K,T):null}));y.displayName="Overlay",y.propTypes={show:c.a.bool,placement:c.a.oneOf(v.h),target:c.a.any,container:c.a.any,flip:c.a.bool,children:c.a.func.isRequired,containerPadding:c.a.number,popperConfig:c.a.object,rootClose:c.a.bool,rootCloseEvent:c.a.oneOf(["click","mousedown"]),rootCloseDisabled:c.a.bool,onHide:function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),o=1;o<t;o++)a[o-1]=arguments[o];var n;return e.rootClose?(n=c.a.func).isRequired.apply(n,[e].concat(a)):c.a.func.apply(c.a,[e].concat(a))},transition:c.a.elementType,onEnter:c.a.func,onEntering:c.a.func,onEntered:c.a.func,onExit:c.a.func,onExiting:c.a.func,onExited:c.a.func};var O=y,j=a(961),P=a(1009),E=a(636),C={transition:E.a,rootClose:!1,show:!1,placement:"top"};function I(e){var t=e.children,a=e.transition,i=e.popperConfig,p=void 0===i?{}:i,c=Object(n.a)(e,["children","transition","popperConfig"]),d=Object(r.useRef)({}),u=Object(P.a)(),f=u[0],h=u[1],v=!0===a?E.a:a||null;return s.a.createElement(O,Object(o.a)({},c,{ref:f,popperConfig:Object(o.a)({},p,{modifiers:h.concat(p.modifiers||[])}),transition:v}),(function(e){var r,i=e.props,p=e.arrowProps,c=e.show,u=e.update,f=(e.forceUpdate,e.placement),h=e.state,v=Object(n.a)(e,["props","arrowProps","show","update","forceUpdate","placement","state"]);!function(e,t){var a=e.ref,o=t.ref;e.ref=a.__wrapped||(a.__wrapped=function(e){return a(Object(j.a)(e))}),t.ref=o.__wrapped||(o.__wrapped=function(e){return o(Object(j.a)(e))})}(i,p);var m=Object.assign(d.current,{state:h,scheduleUpdate:u,placement:f,outOfBoundaries:(null==h||null==(r=h.modifiersData.hide)?void 0:r.isReferenceHidden)||!1});return"function"==typeof t?t(Object(o.a)({},v,i,{placement:f,show:c,popper:m,arrowProps:p})):s.a.cloneElement(t,Object(o.a)({},v,i,{placement:f,arrowProps:p,popper:m,className:l()(t.props.className,!a&&c&&"show"),style:Object(o.a)({},t.props.style,i.style)}))}))}I.defaultProps=C;t.a=I}}]);