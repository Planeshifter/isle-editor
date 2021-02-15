/*! For license information please see Signup.62e402e4.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{4478:function(e,t,a){"use strict";a.r(t);a(411),a(403),a(415);var n=a(400),o=a.n(n),r=(a(793),a(861),a(494),a(407)),s=a.n(r),i=a(410),p=a.n(i),l=a(420),c=a.n(l),d=a(413),u=a.n(d),h=a(414),m=a.n(h),f=a(412),v=a.n(f),w=a(404),g=a.n(w),b=a(0),y=(a(396),a(443)),O=a.n(y),j=a(4125),P=a(428),E=a(724),C=a(662),x=a(816),S=a(934),N=a(672),R=a(812),I=a(529),k=a(522),T=a(515),V=a(6221),K=a.n(V),_=a(489),D=a(457),F=a(418);function H(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=v()(e);if(t){var o=v()(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return m()(this,a)}}var U=O()("isle:signup"),L=["name","email","password","passwordRepeat"];Object(F.a)("Signup");var B=function(e){u()(a,e);var t=H(a);function a(e){var n;return s()(this,a),n=t.call(this,e),g()(c()(n),"handleSubmit",(function(e){e.preventDefault();var t=n.context;if("success"===n.getEmailValidationState()&&"success"===n.getNameValidationState()&&"success"===n.getPasswordValidationState()){var a=K()(n.state,L);t.registerUser(a,(function(e){e||n.props.onClose()}))}else n.setState({showSubmitOverlay:!0,overlayTarget:e.target},(function(){setTimeout((function(){n.setState({showSubmitOverlay:!1})}),2e3)}));return!1})),g()(c()(n),"handleKeyPress",(function(e){e.stopPropagation(),13===e.charCode&&n.handleSubmit(e)})),g()(c()(n),"handleInputChange",(function(e){e.stopPropagation();var t=e.target,a=t.value,o=t.name;U('Update "'.concat(o,'" state to "').concat(a,'"...')),n.setState(g()({},o,a))})),g()(c()(n),"getEmailValidationState",(function(){return n.state.email.includes("@")?"success":"warning"})),g()(c()(n),"getNameValidationState",(function(){return n.state.name.length>=3?"success":"warning"})),g()(c()(n),"getPasswordValidationState",(function(){var e=n.state,t=e.password,a=e.passwordRepeat;return t.length<6?"warning":t!==a?"error":"success"})),n.state={name:"",email:"",password:"",passwordRepeat:""},n}return p()(a,[{key:"render",value:function(){var e=this.state.email&&"success"!==this.getEmailValidationState(),t=this.state.name&&"success"!==this.getNameValidationState(),a=this.getPasswordValidationState(),n=this.state.password&&"warning"===a,r=this.state.passwordRepeat&&"error"===a;return o()(N.a,{show:this.props.show,onHide:this.props.onClose,dialogClassName:"modal-60w"},void 0,o()(N.a.Header,{closeButton:!0},void 0,o()(N.a.Title,{as:"h3"},void 0,this.props.t("create-user"))),o()(N.a.Body,{},void 0,o()("p",{},void 0,this.props.t("opening-paragraph")),o()(S.a,{horizontal:!0},void 0,o()(_.a,{placement:"right",tooltip:this.props.t("enter-valid-email")},void 0,o()(C.a,{controlId:"signup-form-email"},void 0,o()(x.a,{},void 0,this.props.t("email")),o()(E.a,{name:"email",type:"email",placeholder:this.props.t("email-placeholder"),autoComplete:"username",onChange:this.handleInputChange,onKeyPress:this.handleKeyPress,isInvalid:e,value:this.state.email}),o()(E.a.Feedback,{type:"invalid"},void 0,this.props.t("invalid-email")),this.state.email?null:o()("small",{className:"form-text text-muted"},void 0,this.props.t("enter-email")))),o()(_.a,{placement:"right",tooltip:this.props.t("name-tooltip")},void 0,o()(C.a,{controlId:"signup-form-name"},void 0,o()(x.a,{},void 0,this.props.t("name")),o()(E.a,{name:"name",type:"text",placeholder:this.props.t("name-placeholder"),onChange:this.handleInputChange,onKeyPress:this.handleKeyPress,isInvalid:t,value:this.state.name}),o()(E.a.Feedback,{type:"invalid"},void 0,this.props.t("invalid-name")),this.state.name?null:o()("small",{className:"form-text text-muted"},void 0,this.props.t("enter-name")))),o()(_.a,{placement:"right",tooltip:this.props.t("password-tooltip")},void 0,o()(C.a,{controlId:"signup-form-password"},void 0,o()(x.a,{},void 0,this.props.t("password")),o()(E.a,{name:"password",type:"password",placeholder:this.props.t("password-placeholder"),autoComplete:"new-password",onChange:this.handleInputChange,onKeyPress:this.handleKeyPress,maxLength:30,minLength:6,isInvalid:n,value:this.state.password}),o()(E.a.Feedback,{type:"invalid"},void 0,this.props.t("invalid-password")))),o()(C.a,{controlId:"signup-form-password-confirmation"},void 0,o()(E.a,{name:"passwordRepeat",type:"password",placeholder:this.props.t("confirm-password"),autocomplete:"new-password",onChange:this.handleInputChange,onKeyPress:this.handleKeyPress,maxLength:30,minLength:6,isInvalid:r,value:this.state.passwordRepeat}),o()(E.a.Feedback,{type:"invalid"},void 0,this.props.t("password-no-match")))),o()(R.a,{show:this.state.showSubmitOverlay,target:this.state.overlayTarget,placement:"right",containerPadding:20},void 0,o()(I.a,{id:"popover-contained"},void 0,o()(k.a,{},void 0,this.props.t("inputs-invalid")),o()(T.a,{},void 0,this.props.t("inputs-invalid-content"))))),o()(N.a.Footer,{},void 0,o()(P.a,{variant:"primary",className:"centered",type:"submit",onClick:this.handleSubmit},void 0,this.props.t("signup")),o()(P.a,{onClick:this.props.onClose},void 0,this.props.t("close"))))}}]),a}(b.Component);B.defaultProps={onClose:function(){},show:!1},B.contextType=D.a,t.default=Object(j.a)("Signup")(B)},515:function(e,t,a){"use strict";var n=a(398),o=a(401),r=a(402),s=a.n(r),i=a(0),p=a.n(i),l=a(408),c=p.a.forwardRef((function(e,t){var a=e.as,r=void 0===a?"div":a,i=e.bsPrefix,c=e.className,d=e.children,u=Object(o.a)(e,["as","bsPrefix","className","children"]);return i=Object(l.a)(i,"popover-body"),p.a.createElement(r,Object(n.a)({ref:t},u,{className:s()(c,i)}),d)}));t.a=c},522:function(e,t,a){"use strict";var n=a(398),o=a(401),r=a(402),s=a.n(r),i=a(0),p=a.n(i),l=a(408),c=p.a.forwardRef((function(e,t){var a=e.as,r=void 0===a?"div":a,i=e.bsPrefix,c=e.className,d=e.children,u=Object(o.a)(e,["as","bsPrefix","className","children"]);return i=Object(l.a)(i,"popover-header"),p.a.createElement(r,Object(n.a)({ref:t},u,{className:s()(i,c)}),d)}));t.a=c},529:function(e,t,a){"use strict";var n=a(398),o=a(401),r=a(402),s=a.n(r),i=a(0),p=a.n(i),l=(a(635),a(408)),c=a(522),d=a(515),u=p.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.placement,i=e.className,c=e.style,u=e.children,h=e.content,m=e.arrowProps,f=(e.popper,e.show,Object(o.a)(e,["bsPrefix","placement","className","style","children","content","arrowProps","popper","show"])),v=Object(l.a)(a,"popover"),w=((null==r?void 0:r.split("-"))||[])[0];return p.a.createElement("div",Object(n.a)({ref:t,role:"tooltip",style:c,"x-placement":w,className:s()(i,v,w&&"bs-popover-"+w)},f),p.a.createElement("div",Object(n.a)({className:"arrow"},m)),h?p.a.createElement(d.a,null,u):u)}));u.defaultProps={placement:"right"},u.Title=c.a,u.Content=d.a,t.a=u},6221:function(e,t,a){"use strict";var n=a(6222);e.exports=n},6222:function(e,t,a){"use strict";var n=a(438).isPrimitive,o=a(970).primitives,r=a(422);e.exports=function(e,t){var a,s,i;if("object"!=typeof e||null===e)throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if(a={},n(t))return r(e,t)&&(a[t]=e[t]),a;if(o(t)){for(i=0;i<t.length;i++)s=t[i],r(e,s)&&(a[s]=e[s]);return a}throw new TypeError("invalid argument. Second argument must be either a string primitive or an array of string primitives. Value: `"+t+"`.")}},812:function(e,t,a){"use strict";var n=a(398),o=a(401),r=a(0),s=a.n(r),i=a(402),p=a.n(i),l=a(396),c=a.n(l),d=a(23),u=a.n(d),h=a(610),m=a(499),f=a(962),v=a(1037),w=a(1038),g=a(639),b=a(1010),y=s.a.forwardRef((function(e,t){var a=e.flip,i=e.offset,p=e.placement,l=e.containerPadding,c=void 0===l?5:l,d=e.popperConfig,f=void 0===d?{}:d,y=e.transition,O=Object(h.a)(),j=O[0],P=O[1],E=Object(h.a)(),C=E[0],x=E[1],S=Object(m.a)(P,t),N=Object(g.a)(e.container),R=Object(g.a)(e.target),I=Object(r.useState)(!e.show),k=I[0],T=I[1],V=Object(v.a)(R,j,Object(b.a)({placement:p,enableEvents:!!e.show,containerPadding:c||5,flip:a,offset:i,arrowElement:C,popperConfig:f})),K=V.styles,_=V.attributes,D=Object(o.a)(V,["styles","attributes"]);e.show?k&&T(!1):e.transition||k||T(!0);var F=e.show||y&&!k;if(Object(w.a)(j,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!F)return null;var H=e.children(Object(n.a)({},D,{show:!!e.show,props:Object(n.a)({},_.popper,{style:K.popper,ref:S}),arrowProps:Object(n.a)({},_.arrow,{style:K.arrow,ref:x})}));if(y){var U=e.onExit,L=e.onExiting,B=e.onEnter,q=e.onEntering,J=e.onEntered;H=s.a.createElement(y,{in:e.show,appear:!0,onExit:U,onExiting:L,onExited:function(){T(!0),e.onExited&&e.onExited.apply(e,arguments)},onEnter:B,onEntering:q,onEntered:J},H)}return N?u.a.createPortal(H,N):null}));y.displayName="Overlay",y.propTypes={show:c.a.bool,placement:c.a.oneOf(f.h),target:c.a.any,container:c.a.any,flip:c.a.bool,children:c.a.func.isRequired,containerPadding:c.a.number,popperConfig:c.a.object,rootClose:c.a.bool,rootCloseEvent:c.a.oneOf(["click","mousedown"]),rootCloseDisabled:c.a.bool,onHide:function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var o;return e.rootClose?(o=c.a.func).isRequired.apply(o,[e].concat(a)):c.a.func.apply(c.a,[e].concat(a))},transition:c.a.elementType,onEnter:c.a.func,onEntering:c.a.func,onEntered:c.a.func,onExit:c.a.func,onExiting:c.a.func,onExited:c.a.func};var O=y,j=a(961),P=a(1009),E=a(636),C={transition:E.a,rootClose:!1,show:!1,placement:"top"};function x(e){var t=e.children,a=e.transition,i=e.popperConfig,l=void 0===i?{}:i,c=Object(o.a)(e,["children","transition","popperConfig"]),d=Object(r.useRef)({}),u=Object(P.a)(),h=u[0],m=u[1],f=!0===a?E.a:a||null;return s.a.createElement(O,Object(n.a)({},c,{ref:h,popperConfig:Object(n.a)({},l,{modifiers:m.concat(l.modifiers||[])}),transition:f}),(function(e){var r,i=e.props,l=e.arrowProps,c=e.show,u=e.update,h=(e.forceUpdate,e.placement),m=e.state,f=Object(o.a)(e,["props","arrowProps","show","update","forceUpdate","placement","state"]);!function(e,t){var a=e.ref,n=t.ref;e.ref=a.__wrapped||(a.__wrapped=function(e){return a(Object(j.a)(e))}),t.ref=n.__wrapped||(n.__wrapped=function(e){return n(Object(j.a)(e))})}(i,l);var v=Object.assign(d.current,{state:m,scheduleUpdate:u,placement:h,outOfBoundaries:(null==m||null==(r=m.modifiersData.hide)?void 0:r.isReferenceHidden)||!1});return"function"==typeof t?t(Object(n.a)({},f,i,{placement:h,show:c,popper:v,arrowProps:l})):s.a.cloneElement(t,Object(n.a)({},f,i,{placement:h,arrowProps:l,popper:v,className:p()(t.props.className,!a&&c&&"show"),style:Object(n.a)({},t.props.style,i.style)}))}))}x.defaultProps=C;t.a=x},970:function(e,t,a){"use strict";var n=a(419),o=a(916),r=a(438),s=o(r);n(s,"primitives",o(r.isPrimitive)),n(s,"objects",o(r.isObject)),e.exports=s}}]);