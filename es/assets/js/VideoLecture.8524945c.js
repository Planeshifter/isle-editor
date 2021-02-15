(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{618:function(t,e,i){"use strict";var r=i(398),s=i(401),n=i(402),o=i.n(n),a=i(0),c=i.n(a),l=i(408),u=c.a.forwardRef((function(t,e){var i=t.bsPrefix,n=t.size,a=t.toggle,u=t.vertical,v=t.className,d=t.as,p=void 0===d?"div":d,h=Object(s.a)(t,["bsPrefix","size","toggle","vertical","className","as"]),f=Object(l.a)(i,"btn-group"),w=f;return u&&(w=f+"-vertical"),c.a.createElement(p,Object(r.a)({},h,{ref:e,className:o()(v,w,n&&f+"-"+n,a&&f+"-toggle")}))}));u.displayName="ButtonGroup",u.defaultProps={vertical:!1,toggle:!1,role:"group"},e.a=u},6471:function(t,e,i){"use strict";i.r(e);i(411),i(403),i(415);var r=i(507),s=i.n(r),n=i(400),o=i.n(n),a=i(407),c=i.n(a),l=i(410),u=i.n(l),v=i(420),d=i.n(v),p=i(413),h=i.n(p),f=i(414),w=i.n(f),m=i(412),b=i.n(m),g=i(404),y=i.n(g),S=i(0),k=i.n(S),N=(i(396),i(443)),I=i.n(N),V=i(4125),x=i(439),C=i.n(x),P=i(438),A=i(449),F=i(428),E=i(618),R=i(698),j=i(1129),z=i(1544),D=i(558),O=i(457),K=i(418);i(368);function W(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,r=b()(t);if(e){var s=b()(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return w()(this,i)}}Object(K.a)("Video");var H=I()("isle:video-lecture"),L=function(t){for(var e,i=new Array(t.length),r=0;r<i.length;r++)i[r]=(e=t[r])&&e.props&&e.props.question;return i},T=o()("i",{className:"fas fa-chevron-circle-left video-lecture-arrow"}),q=o()("i",{className:"fas fa-chevron-circle-right video-lecture-arrow"}),G=o()("i",{className:"fas fa-chevron-circle-left video-lecture-arrow"}),J=o()("i",{className:"fas fa-chevron-circle-right video-lecture-arrow"}),B=function(t){h()(i,t);var e=W(i);function i(t){var r;return c()(this,i),r=e.call(this,t),y()(d()(r),"incrementStep",(function(){H("Add one step to "+r.state.active),r.setState({active:r.state.active+1})})),y()(d()(r),"decrementStep",(function(){H("Go back one step from "+r.state.active),r.setState({active:r.state.active-1})})),y()(d()(r),"markCompleted",(function(t){H("Handle question submission...");var e=r.state.waitForAnswer.slice();e[r.state.active]=!1,r.setState({waitForAnswer:e})})),y()(d()(r),"toggleInstructorView",(function(){r.setState({showInstructorView:!r.state.showInstructorView})})),r.state={active:0,waitForAnswer:L(t.steps),showInstructorView:!1},r}return u()(i,[{key:"renderStep",value:function(t){var e=this.props.steps[t];if(e.props&&e.props.actionID&&e.props.show)return o()("div",{},void 0,this.state.active===t?e:null,this.state.active>0?o()("div",{onClick:this.decrementStep,role:"button",className:"video-lecture-back-button",tabIndex:0,onKeyPress:this.decrementStep},void 0,T):null,o()("div",{onClick:this.incrementStep,role:"button",className:"video-lecture-next-button",tabIndex:0,onKeyPress:this.incrementStep},void 0,q));var i=Object(P.isPrimitive)(e),r=!k.a.isValidElement(e)&&C()(e);if(i||r){var n=r?e:{id:e,url:e};return this.state.showInstructorView?o()("div",{},t,k.a.createElement(z.a,s()({},n,{controls:this.props.controls,light:!0}))):o()("div",{},void 0,this.state.active===t?k.a.createElement(z.a,s()({},n,{key:t,onEnded:this.incrementStep,controls:this.props.controls,width:this.props.videoWidth,height:this.props.videoHeight,playing:0!==this.state.active})):null,this.state.active>0?o()("div",{onClick:this.decrementStep,role:"button",className:"video-lecture-back-button",tabIndex:0,onKeyPress:this.decrementStep},void 0,G):null,o()("div",{onClick:this.incrementStep,role:"button",className:"video-lecture-next-button",tabIndex:0,onKeyPress:this.incrementStep},void 0,J))}return o()("div",{className:"video-lecture-content"},void 0,k.a.createElement(e.type,s()({},e.props,{onSubmit:this.markCompleted})),this.state.showInstructorView?null:o()(D.a,{style:{width:"90%"}},void 0,this.state.active>0?o()(F.a,{variant:"warning",size:"lg",onClick:this.decrementStep,style:{float:"left"}},void 0,this.props.t("back")):null,o()(F.a,{variant:"success",size:"lg",onClick:this.incrementStep,style:{float:"right"},disabled:this.state.waitForAnswer[this.state.active]},void 0,this.props.t("next"))))}},{key:"renderSteps",value:function(){for(var t=[],e=0;e<this.props.steps.length;e++){var i=this.state.active===e||this.state.showInstructorView?"visible-step":"invisible-step";t.push(o()("div",{className:i},e,this.renderStep(e)))}return t}},{key:"render",value:function(){var t=this,e=this.renderSteps(),i=this.context,r=this.props.t;return o()(S.Fragment,{},void 0,k.a.createElement("div",{className:"video-lecture-wrapper",ref:function(e){t.videoLectureWrapper=e},style:this.props.style},this.state.active>=this.props.steps.length&&!this.state.showInstructorView?o()(A.a,{variant:"success",className:"video-lecture-end-alert"},void 0,o()("h1",{},void 0,r("reached-end")),o()(E.a,{block:!0},void 0,o()(F.a,{variant:"secondary",size:"lg",onClick:this.decrementStep},void 0,r("to-previous")),this.props.linkToDashboard?o()("a",{href:i.server},void 0,o()(F.a,{variant:"secondary",size:"lg"},void 0,r("close-and-to-dashboard"))):null)):null,e,this.props.instructorView?o()(R.a,{owner:!0},void 0,o()(F.a,{className:"video-lecture-instructor-button",variant:"secondary",onClick:this.toggleInstructorView,block:!0},void 0,this.state.showInstructorView?r("close-instructor-view"):r("open-instructor-view"))):null),o()(j.a,{container:this.videoLectureWrapper,actions:{ArrowRight:this.incrementStep,ArrowLeft:this.decrementStep}}))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return t.steps.length!==e.waitForAnswer.length?{waitForAnswer:L(t.steps)}:null}}]),i}(S.Component);B.defaultProps={controls:!0,instructorView:!0,linkToDashboard:!1,videoWidth:"100%",videoHeight:"98vh",style:{}},B.contextType=O.a,e.default=Object(V.a)("Video")(B)}}]);