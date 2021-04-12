(window.webpackJsonp=window.webpackJsonp||[]).push([[1165],{423:function(e,t,r){"use strict";var i=r(405),s=r(408),a=r(409),n=r.n(a),o=r(0),c=r.n(o),l=r(411),u=r(463),v=c.a.forwardRef((function(e,t){var r=e.bsPrefix,a=e.variant,o=e.size,v=e.active,d=e.className,p=e.block,h=e.type,f=e.as,m=Object(s.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),w=Object(l.a)(r,"btn"),b=n()(d,w,v&&"active",a&&w+"-"+a,p&&w+"-block",o&&w+"-"+o);if(m.href)return c.a.createElement(u.a,Object(i.a)({},m,{as:f,ref:t,className:n()(b,m.disabled&&"disabled")}));t&&(m.ref=t),h?m.type=h:f||(m.type="button");var g=f||"button";return c.a.createElement(g,Object(i.a)({},m,{className:b}))}));v.displayName="Button",v.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=v},554:function(e,t,r){"use strict";var i=r(405),s=r(408),a=r(409),n=r.n(a),o=r(0),c=r.n(o),l=r(411),u=c.a.forwardRef((function(e,t){var r=e.bsPrefix,a=e.size,o=e.toggle,u=e.vertical,v=e.className,d=e.as,p=void 0===d?"div":d,h=Object(s.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),f=Object(l.a)(r,"btn-group"),m=f;return u&&(m=f+"-vertical"),c.a.createElement(p,Object(i.a)({},h,{ref:t,className:n()(v,m,a&&f+"-"+a,o&&f+"-toggle")}))}));u.displayName="ButtonGroup",u.defaultProps={vertical:!1,toggle:!1,role:"group"},t.a=u},6427:function(e,t,r){"use strict";r.r(t);r(421);var i,s,a,n,o=r(489),c=r.n(o),l=r(407),u=r.n(l),v=r(414),d=r.n(v),p=r(416),h=r.n(p),f=r(424),m=r.n(f),w=r(418),b=r.n(w),g=r(419),y=r.n(g),k=r(417),S=r.n(k),N=r(412),I=r.n(N),V=(r(465),r(0)),x=r.n(V),P=(r(404),r(450)),O=r.n(P),j=r(4101),C=r(445),A=r.n(C),E=r(432),z=r(454),F=r(423),R=r(554),B=r(647),D=r(990),K=r(1430),W=r(518),H=r(459),L=r(420),T=r(442);r(375);function q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=S()(e);if(t){var s=S()(this).constructor;r=Reflect.construct(i,arguments,s)}else r=i.apply(this,arguments);return y()(this,r)}}Object(L.a)("Video");var G=O()("isle:video-lecture"),J=function(e){for(var t,r=new Array(e.length),i=0;i<r.length;i++)r[i]=(t=e[i])&&t.props&&t.props.question;return r},M=function(e){b()(r,e);var t=q(r);function r(e){var i;return d()(this,r),i=t.call(this,e),I()(m()(i),"incrementStep",(function(){G("Add one step to "+i.state.active),i.setState({active:i.state.active+1})})),I()(m()(i),"decrementStep",(function(){G("Go back one step from "+i.state.active),i.setState({active:i.state.active-1})})),I()(m()(i),"markCompleted",(function(e){G("Handle question submission...");var t=i.state.waitForAnswer.slice();t[i.state.active]=!1,i.setState({waitForAnswer:t})})),I()(m()(i),"toggleInstructorView",(function(){i.setState({showInstructorView:!i.state.showInstructorView})})),i.state={active:0,waitForAnswer:J(e.steps),showInstructorView:!1},i}return h()(r,[{key:"renderStep",value:function(e){var t=this.props.steps[e];if(t.props&&t.props.actionID&&t.props.show)return u()("div",{},void 0,this.state.active===e?t:null,this.state.active>0?u()("div",{onClick:this.decrementStep,role:"button",className:"video-lecture-back-button",tabIndex:0,onKeyPress:this.decrementStep},void 0,i||(i=u()("i",{className:"fas fa-chevron-circle-left video-lecture-arrow"}))):null,u()("div",{onClick:this.incrementStep,role:"button",className:"video-lecture-next-button",tabIndex:0,onKeyPress:this.incrementStep},void 0,s||(s=u()("i",{className:"fas fa-chevron-circle-right video-lecture-arrow"}))));var r=Object(E.isPrimitive)(t),o=!x.a.isValidElement(t)&&A()(t);if(r||o){var l=o?t:{id:t,url:t};return this.state.showInstructorView?u()("div",{},e,x.a.createElement(K.a,c()({},l,{controls:this.props.controls,light:!0}))):u()("div",{},void 0,this.state.active===e?x.a.createElement(K.a,c()({},l,{key:e,onEnded:this.incrementStep,controls:this.props.controls,width:this.props.videoWidth,height:this.props.videoHeight,playing:0!==this.state.active})):null,this.state.active>0?u()("div",{onClick:this.decrementStep,role:"button",className:"video-lecture-back-button",tabIndex:0,onKeyPress:this.decrementStep},void 0,a||(a=u()("i",{className:"fas fa-chevron-circle-left video-lecture-arrow"}))):null,u()("div",{onClick:this.incrementStep,role:"button",className:"video-lecture-next-button",tabIndex:0,onKeyPress:this.incrementStep},void 0,n||(n=u()("i",{className:"fas fa-chevron-circle-right video-lecture-arrow"}))))}return u()("div",{className:"video-lecture-content"},void 0,x.a.createElement(t.type,c()({},t.props,{onSubmit:this.markCompleted})),this.state.showInstructorView?null:u()(W.a,{style:{width:"90%"}},void 0,this.state.active>0?u()(F.a,{variant:"warning",size:"lg",onClick:this.decrementStep,style:{float:"left"}},void 0,this.props.t("back")):null,u()(F.a,{variant:"success",size:"lg",onClick:this.incrementStep,style:{float:"right"},disabled:this.state.waitForAnswer[this.state.active]},void 0,this.props.t("next"))))}},{key:"renderSteps",value:function(){for(var e=[],t=0;t<this.props.steps.length;t++){var r=this.state.active===t||this.state.showInstructorView?"visible-step":"invisible-step";e.push(u()("div",{className:r},t,this.renderStep(t)))}return e}},{key:"render",value:function(){var e=this,t=this.renderSteps(),r=this.context,i=this.props.t;return u()(V.Fragment,{},void 0,x.a.createElement("div",{className:"video-lecture-wrapper",ref:function(t){e.videoLectureWrapper=t},style:this.props.style},this.state.active>=this.props.steps.length&&!this.state.showInstructorView?u()(z.a,{variant:"success",className:"video-lecture-end-alert"},void 0,u()("h1",{},void 0,i("reached-end")),u()(R.a,{block:!0},void 0,u()(F.a,{variant:"secondary",size:"lg",onClick:this.decrementStep},void 0,i("to-previous")),this.props.linkToDashboard?u()("a",{href:r.server},void 0,u()(F.a,{variant:"secondary",size:"lg"},void 0,i("close-and-to-dashboard"))):null)):null,t,this.props.instructorView?u()(B.a,{owner:!0},void 0,u()(F.a,{className:"video-lecture-instructor-button",variant:"secondary",onClick:this.toggleInstructorView,block:!0},void 0,this.state.showInstructorView?i("close-instructor-view"):i("open-instructor-view"))):null),u()(D.a,{container:this.videoLectureWrapper,actions:{ArrowRight:this.incrementStep,ArrowLeft:this.decrementStep}}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.steps.length!==t.waitForAnswer.length?{waitForAnswer:J(e.steps)}:null}}]),r}(V.Component);M.defaultProps={controls:!0,instructorView:!0,linkToDashboard:!1,videoWidth:"100%",videoHeight:"98vh",style:{}},M.contextType=H.a,t.default=Object(j.a)("Video")(Object(T.a)(M))}}]);