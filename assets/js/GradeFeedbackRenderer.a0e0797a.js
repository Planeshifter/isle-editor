(window.webpackJsonp=window.webpackJsonp||[]).push([[363],{1402:function(e,t,r){"use strict";r.r(t);r(438),r(436),r(441),r(440),r(437),r(427),r(416),r(421);var s=r(492),a=r.n(s),n=r(555),o=r.n(n),i=r(407),c=r.n(i),l=r(414),u=r.n(l),p=r(415),d=r.n(p),f=r(425),g=r.n(f),m=r(418),b=r.n(m),v=r(419),h=r.n(v),y=r(417),w=r.n(y),O=r(412),k=r.n(O),j=r(0),x=r.n(j),N=r(4172),P=(r(404),r(430)),M=r(463),D=r(807),R=r(893),S=r(424),z=r(484),E=r(2876),G=r(422);r(380);function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){k()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,s=w()(e);if(t){var a=w()(this).constructor;r=Reflect.construct(s,arguments,a)}else r=s.apply(this,arguments);return h()(this,r)}}Object(G.a)("GradeFeedbackRenderer");var F=c()("br",{}),T=c()("i",{className:"fas fa-times"}),J=c()("hr",{}),L=c()("i",{className:"fas fa-envelope-open"}),q=function(e){b()(r,e);var t=I(r);function r(e){var s;return u()(this,r),s=t.call(this,e),k()(g()(s),"toggleMessages",(function(){s.setState({showMessages:!s.state.showMessages})})),s.state={showMessages:!1},s}return d()(r,[{key:"renderMessages",value:function(){var e=this,t=this.context,r=t.user.lessonGradeMessages[t.lessonID];return r&&r[this.props.for]?c()("div",{className:"grade-feedback-renderer-messages"},void 0,r[this.props.for].map((function(r,s){return c()("div",{className:"grade-feedback-message"},s,c()("img",{className:"grade-feedback-picture unselectable",src:t.server+"/thumbnail/"+r.picture,alt:e.props.t("profile-pic")}),c()("div",{className:"grade-feedback-message-right"},void 0,c()("span",{className:"grade-feedback-user"},void 0,r.user)," - ",c()("span",{className:"grade-feedback-time"},void 0,Object(E.a)(r.time)),F,c()("span",{className:"grade-feedback-message-content"},void 0,r.content)))}))):null}},{key:"renderOverlay",value:function(){var e=this;return this.state.showMessages?c()(R.a,{target:this.messagesButton,show:this.state.showMessages,placement:"right"},void 0,(function(t){t.placement,t.arrowProps,t.show,t.popper;var r=o()(t,["placement","arrowProps","show","popper"]);return x.a.createElement("div",a()({},r,{style:C({backgroundColor:"#f8f9fa",padding:"2px 10px",color:"darkslategrey",borderRadius:6,border:"1px solid darkslategrey",width:"600px",boxShadow:"0px 0px 4px darkslategrey",zIndex:1006},r.style)}),c()("div",{style:{marginTop:6,marginBottom:6}},void 0,e.props.for,c()(S.a,{variant:"secondary",size:"sm",onClick:function(){e.setState({showMessages:!1})},style:{float:"right",marginBottom:4}},void 0,T)),J,e.renderMessages())})):null}},{key:"render",value:function(){var e=this,t=this.context;if(!t.user||!t.user.lessonGrades)return null;var r=t.user.lessonGrades[t.lessonID];if(!r||!Object(P.isPrimitive)(r[this.props.for]))return null;var s=t.user.lessonGradeMessages[t.lessonID],a=s&&s[this.props.for];return c()(j.Fragment,{},void 0,c()(D.a,{variant:"success",style:{fontSize:"1em"}},void 0,this.props.t("your-points"),": ",r[this.props.for]," / ",this.props.points),a?c()(z.a,{tooltip:this.props.t("display-instructor-feedback")},void 0,x.a.createElement(S.a,{ref:function(t){e.messagesButton=t},onClick:this.toggleMessages,size:"small",variant:"light",style:{marginLeft:12},className:"grade-feedback-button"},L)):null,this.renderOverlay())}}]),r}(j.Component);q.contextType=M.a,t.default=Object(N.a)("GradeFeedbackRenderer")(q)},2876:function(e,t,r){"use strict";t.a=function(e){return new Date(e).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",month:"short",day:"numeric"})}},424:function(e,t,r){"use strict";var s=r(405),a=r(408),n=r(409),o=r.n(n),i=r(0),c=r.n(i),l=r(411),u=r(464),p=c.a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.variant,i=e.size,p=e.active,d=e.className,f=e.block,g=e.type,m=e.as,b=Object(a.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),v=Object(l.a)(r,"btn"),h=o()(d,v,p&&"active",n&&v+"-"+n,f&&v+"-block",i&&v+"-"+i);if(b.href)return c.a.createElement(u.a,Object(s.a)({},b,{as:m,ref:t,className:o()(h,b.disabled&&"disabled")}));t&&(b.ref=t),g?b.type=g:m||(b.type="button");var y=m||"button";return c.a.createElement(y,Object(s.a)({},b,{className:h}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=p}}]);