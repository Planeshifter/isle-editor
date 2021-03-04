(window.webpackJsonp=window.webpackJsonp||[]).push([[1144],{424:function(e,t,r){"use strict";var i=r(405),s=r(408),a=r(409),n=r.n(a),o=r(0),c=r.n(o),l=r(411),u=r(464),v=c.a.forwardRef((function(e,t){var r=e.bsPrefix,a=e.variant,o=e.size,v=e.active,d=e.className,p=e.block,h=e.type,f=e.as,m=Object(s.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),w=Object(l.a)(r,"btn"),b=n()(d,w,v&&"active",a&&w+"-"+a,p&&w+"-block",o&&w+"-"+o);if(m.href)return c.a.createElement(u.a,Object(i.a)({},m,{as:f,ref:t,className:n()(b,m.disabled&&"disabled")}));t&&(m.ref=t),h?m.type=h:f||(m.type="button");var g=f||"button";return c.a.createElement(g,Object(i.a)({},m,{className:b}))}));v.displayName="Button",v.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=v},558:function(e,t,r){"use strict";var i=r(405),s=r(408),a=r(409),n=r.n(a),o=r(0),c=r.n(o),l=r(411),u=c.a.forwardRef((function(e,t){var r=e.bsPrefix,a=e.size,o=e.toggle,u=e.vertical,v=e.className,d=e.as,p=void 0===d?"div":d,h=Object(s.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),f=Object(l.a)(r,"btn-group"),m=f;return u&&(m=f+"-vertical"),c.a.createElement(p,Object(i.a)({},h,{ref:t,className:n()(v,m,a&&f+"-"+a,o&&f+"-toggle")}))}));u.displayName="ButtonGroup",u.defaultProps={vertical:!1,toggle:!1,role:"group"},t.a=u},6491:function(e,t,r){"use strict";r.r(t);r(421);var i=r(492),s=r.n(i),a=r(407),n=r.n(a),o=r(414),c=r.n(o),l=r(415),u=r.n(l),v=r(425),d=r.n(v),p=r(418),h=r.n(p),f=r(419),m=r.n(f),w=r(417),b=r.n(w),g=r(412),y=r.n(g),k=(r(608),r(0)),S=r.n(k),N=(r(404),r(450)),I=r.n(N),V=r(4172),x=r(442),P=r.n(x),O=r(432),j=r(454),C=r(424),A=r(558),E=r(651),z=r(1007),F=r(1437),R=r(534),B=r(463),D=r(422),K=r(439);r(375);function W(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=b()(e);if(t){var s=b()(this).constructor;r=Reflect.construct(i,arguments,s)}else r=i.apply(this,arguments);return m()(this,r)}}Object(D.a)("Video");var H=I()("isle:video-lecture"),L=function(e){for(var t,r=new Array(e.length),i=0;i<r.length;i++)r[i]=(t=e[i])&&t.props&&t.props.question;return r},T=n()("i",{className:"fas fa-chevron-circle-left video-lecture-arrow"}),q=n()("i",{className:"fas fa-chevron-circle-right video-lecture-arrow"}),G=n()("i",{className:"fas fa-chevron-circle-left video-lecture-arrow"}),J=n()("i",{className:"fas fa-chevron-circle-right video-lecture-arrow"}),M=function(e){h()(r,e);var t=W(r);function r(e){var i;return c()(this,r),i=t.call(this,e),y()(d()(i),"incrementStep",(function(){H("Add one step to "+i.state.active),i.setState({active:i.state.active+1})})),y()(d()(i),"decrementStep",(function(){H("Go back one step from "+i.state.active),i.setState({active:i.state.active-1})})),y()(d()(i),"markCompleted",(function(e){H("Handle question submission...");var t=i.state.waitForAnswer.slice();t[i.state.active]=!1,i.setState({waitForAnswer:t})})),y()(d()(i),"toggleInstructorView",(function(){i.setState({showInstructorView:!i.state.showInstructorView})})),i.state={active:0,waitForAnswer:L(e.steps),showInstructorView:!1},i}return u()(r,[{key:"renderStep",value:function(e){var t=this.props.steps[e];if(t.props&&t.props.actionID&&t.props.show)return n()("div",{},void 0,this.state.active===e?t:null,this.state.active>0?n()("div",{onClick:this.decrementStep,role:"button",className:"video-lecture-back-button",tabIndex:0,onKeyPress:this.decrementStep},void 0,T):null,n()("div",{onClick:this.incrementStep,role:"button",className:"video-lecture-next-button",tabIndex:0,onKeyPress:this.incrementStep},void 0,q));var r=Object(O.isPrimitive)(t),i=!S.a.isValidElement(t)&&P()(t);if(r||i){var a=i?t:{id:t,url:t};return this.state.showInstructorView?n()("div",{},e,S.a.createElement(F.a,s()({},a,{controls:this.props.controls,light:!0}))):n()("div",{},void 0,this.state.active===e?S.a.createElement(F.a,s()({},a,{key:e,onEnded:this.incrementStep,controls:this.props.controls,width:this.props.videoWidth,height:this.props.videoHeight,playing:0!==this.state.active})):null,this.state.active>0?n()("div",{onClick:this.decrementStep,role:"button",className:"video-lecture-back-button",tabIndex:0,onKeyPress:this.decrementStep},void 0,G):null,n()("div",{onClick:this.incrementStep,role:"button",className:"video-lecture-next-button",tabIndex:0,onKeyPress:this.incrementStep},void 0,J))}return n()("div",{className:"video-lecture-content"},void 0,S.a.createElement(t.type,s()({},t.props,{onSubmit:this.markCompleted})),this.state.showInstructorView?null:n()(R.a,{style:{width:"90%"}},void 0,this.state.active>0?n()(C.a,{variant:"warning",size:"lg",onClick:this.decrementStep,style:{float:"left"}},void 0,this.props.t("back")):null,n()(C.a,{variant:"success",size:"lg",onClick:this.incrementStep,style:{float:"right"},disabled:this.state.waitForAnswer[this.state.active]},void 0,this.props.t("next"))))}},{key:"renderSteps",value:function(){for(var e=[],t=0;t<this.props.steps.length;t++){var r=this.state.active===t||this.state.showInstructorView?"visible-step":"invisible-step";e.push(n()("div",{className:r},t,this.renderStep(t)))}return e}},{key:"render",value:function(){var e=this,t=this.renderSteps(),r=this.context,i=this.props.t;return n()(k.Fragment,{},void 0,S.a.createElement("div",{className:"video-lecture-wrapper",ref:function(t){e.videoLectureWrapper=t},style:this.props.style},this.state.active>=this.props.steps.length&&!this.state.showInstructorView?n()(j.a,{variant:"success",className:"video-lecture-end-alert"},void 0,n()("h1",{},void 0,i("reached-end")),n()(A.a,{block:!0},void 0,n()(C.a,{variant:"secondary",size:"lg",onClick:this.decrementStep},void 0,i("to-previous")),this.props.linkToDashboard?n()("a",{href:r.server},void 0,n()(C.a,{variant:"secondary",size:"lg"},void 0,i("close-and-to-dashboard"))):null)):null,t,this.props.instructorView?n()(E.a,{owner:!0},void 0,n()(C.a,{className:"video-lecture-instructor-button",variant:"secondary",onClick:this.toggleInstructorView,block:!0},void 0,this.state.showInstructorView?i("close-instructor-view"):i("open-instructor-view"))):null),n()(z.a,{container:this.videoLectureWrapper,actions:{ArrowRight:this.incrementStep,ArrowLeft:this.decrementStep}}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.steps.length!==t.waitForAnswer.length?{waitForAnswer:L(e.steps)}:null}}]),r}(k.Component);M.defaultProps={controls:!0,instructorView:!0,linkToDashboard:!1,videoWidth:"100%",videoHeight:"98vh",style:{}},M.contextType=B.a,t.default=Object(V.a)("Video")(Object(K.a)(M))}}]);