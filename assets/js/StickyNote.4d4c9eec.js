(window.webpackJsonp=window.webpackJsonp||[]).push([[1065],{2759:function(t,e,i){"use strict";var o=i(515),n=i.n(o),a=i(1113),s=i.n(a);e.a=function(t){return s()(t,"px")&&(t=parseFloat(n()(t,"px",""))),t}},3970:function(t,e,i){"use strict";i.r(e);i(421),i(437),i(436),i(505),i(438);var o=i(492),n=i.n(o),a=i(407),s=i.n(a),r=i(414),l=i.n(r),c=i(415),d=i.n(c),u=i(425),p=i.n(u),h=i(418),f=i.n(h),m=i(419),y=i.n(m),b=i(417),v=i.n(b),g=i(412),k=i.n(g),w=(i(488),i(0)),x=i.n(w),z=(i(404),i(450)),C=i.n(z),T=i(4172),B=i(442),O=i.n(B),N=i(733),S=i(463),D=i(462),R=i(2759);i(340);function P(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function j(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?P(Object(i),!0).forEach((function(e){k()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):P(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function E(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=v()(t);if(e){var n=v()(this).constructor;i=Reflect.construct(o,arguments,n)}else i=o.apply(this,arguments);return y()(this,i)}}var I=C()("isle:sticky-note"),W=s()("i",{className:"fas fa-times"}),F=s()("i",{className:"fas fa-window-minimize"}),K=function(t){f()(i,t);var e=E(i);function i(t){var o;l()(this,i),o=e.call(this,t),k()(p()(o),"handleClick",(function(){I("Handle click..."),o.state.minimized&&!o.isDragging&&(I("Maximize note..."),o.setState({minimized:!1})),o.props.onClick&&o.props.onClick(o.props.id)})),k()(p()(o),"remove",(function(t){(t.stopPropagation(),o.setState({exit:!0}),o.props.id)&&o.context.log({id:o.props.id,type:D.cb,value:!0});o.props.onDelete()})),k()(p()(o),"minimize",(function(t){t.stopPropagation(),o.setState({minimized:!0})})),k()(p()(o),"editTitle",(function(){o.setState({editTitle:!0},(function(){o.titleInputRef.current.focus()}))})),k()(p()(o),"editBody",(function(){o.setState({editBody:!0},(function(){o.textareaRef.current.focus()}))})),k()(p()(o),"showTitle",(function(){return s()("div",{role:"button",tabIndex:0,onClick:o.editTitle,onKeyPress:o.editTitle,className:"sticky-note-title editable"},void 0,o.state.title)})),k()(p()(o),"checkTitle",(function(t){if(13===t.keyCode){var e=t.target.value;if(o.props.id)o.context.log({id:o.props.id,type:D.vc,value:e});o.props.onTitleChange(e),o.setState({title:e,editTitle:!1})}})),k()(p()(o),"handleTitleBlur",(function(){o.props.id&&o.context.log({id:o.props.id,type:D.vc,value:o.state.title});o.props.onTitleChange(o.state.title),o.setState({editTitle:!1})})),k()(p()(o),"handleTitleChange",(function(t){o.setState({title:t.target.value})})),k()(p()(o),"handleDrag",(function(){o.isDragging=!0})),k()(p()(o),"handleDragStop",(function(t,e){(I("Stopped dragging..."),setTimeout((function(){o.isDragging=!1}),200),o.props.id)&&o.context.log({id:o.props.id,type:D.uc,value:{x:e.lastX,y:e.lastY}});o.props.onMove({left:e.lastX/window.innerWidth,top:e.lastY/window.innerHeight})})),k()(p()(o),"handleResizeStop",(function(t,e,i){o.props.onResize({width:Object(R.a)(i.style.width),height:Object(R.a)(i.style.height)})})),k()(p()(o),"showEditableTitle",(function(){return s()("div",{className:"sticky-note-title"},void 0,x.a.createElement("input",{className:"sticky-note-editable-title noDrag",onKeyDown:o.checkTitle,onBlur:o.handleTitleBlur,onChange:o.handleTitleChange,type:"text",name:"fname",value:o.state.title,ref:o.titleInputRef}))})),k()(p()(o),"showBody",(function(){return s()("div",{className:"sticky-note-body editable",role:"button",onClick:o.editBody,onKeyPress:o.editBody,tabIndex:0},void 0,o.state.body)})),k()(p()(o),"submitBody",(function(){var t=o.textareaRef.current.value;o.props.id&&o.context.log({id:o.props.id,type:D.tc,value:t});o.props.onBodyChange(t),o.setState({body:t,editBody:!1})})),k()(p()(o),"showEditableBody",(function(){return s()("div",{className:"sticky-note-body",style:{overflow:"hidden"}},void 0,x.a.createElement("textarea",{ref:o.textareaRef,className:"sticky-note-editable-body noDrag",cols:"28"},o.state.body),s()("input",{onClick:o.submitBody,type:"submit",value:o.props.t("save")}))})),k()(p()(o),"showEditableContent",(function(){return s()("div",{className:"sticky-note-content"},void 0,o.state.editTitle?o.showEditableTitle():o.showTitle(),o.state.editBody?o.showEditableBody():o.showBody(),o.props.watermark?s()("div",{className:"sticky-note-watermark"},void 0,o.props.t(o.props.watermark)):null)})),k()(p()(o),"removeButton",(function(){return s()("div",{className:"sticky-note-remove-button",role:"button",tabIndex:0,onClick:o.remove,onKeyPress:o.remove,title:o.props.t("click-to-remove")},void 0,W)})),o.textareaRef=x.a.createRef(),o.titleInputRef=x.a.createRef();var n=null,a=null;return t.editable&&(a=t.title||t.t("custom-title"),n=t.body||t.t("type-in-your-note")),o.state={exit:!1,minimized:t.minimized,editBody:!1,editTitle:!1,body:n,title:a},o}return d()(i,[{key:"componentDidUpdate",value:function(t){this.props.editable&!t.editable&&this.setState({title:this.props.title||this.props.t("custom-title"),body:this.props.body||this.props.t("type-in-your-note")})}},{key:"checkTransforms",value:function(){var t=j({},this.props.style);switch(t.transform&&(!0===this.state.minimized?t.transform+=" scale(0.15)":t.transform+=" scale(1)"),this.props.color){case"blue":t.WebkitFilter="hue-rotate(166deg)",t.filter="hue-rotate(166deg)";break;case"green":t.WebkitFilter="hue-rotate(88deg) saturate(70%)",t.filter="hue-rotate(88deg) saturate(70%)";break;case"pink":t.WebkitFilter="hue-rotate(220deg) saturate(70%)",t.filter="hue-rotate(220deg) saturate(70%)";break;case"red":t.WebkitFilter="hue-rotate(290deg) saturate(70%)",t.filter="hue-rotate(290deg) saturate(70%)";break;case"orange":t.WebkitFilter="hue-rotate(320deg) saturate(70%)",t.filter="hue-rotate(320deg) saturate(70%)"}return t}},{key:"showContent",value:function(){return s()("div",{className:"sticky-note-content"},void 0,s()("div",{className:"sticky-note-title"},void 0,this.props.title),s()("div",{className:"sticky-note-date"},void 0,this.props.date),s()("div",{className:"sticky-note-body"},void 0,this.props.body),this.props.watermark?s()("div",{className:"sticky-note-watermark"},void 0,this.props.t(this.props.watermark)):null)}},{key:"render",value:function(){var t=this.checkTransforms(),e="sticky-note";!0===this.state.exit&&(e+=" sticky-note-exit"),!0===this.state.minimized&&(e+=" sticky-note-minimized"),this.props.onClick&&(e+=" sticky-note-callback");var i=s()("div",{className:"sticky-note-outer",style:t},void 0,s()("div",{onClick:this.handleClick,className:e,onKeyPress:this.handleClick,tabIndex:0,role:"button"},void 0,s()("div",{className:"sticky-note-controls"},void 0,this.props.minimizable?s()("div",{onClick:this.minimize,className:"sticky-note-minimizable",tabIndex:0,role:"button",onKeyPress:this.minimize,title:this.props.t("click-to-minimize")},void 0,F):null,this.props.removable?this.removeButton():null),this.props.editable?this.showEditableContent():this.showContent())),o=O()(this.props.draggable)?this.props.draggable:{};return o.default||(o.default=j({},this.props.size)),o.default.width||(o.default.width=300),o.default.width||(o.default.height=300),x.a.createElement(N.a,n()({bounds:"#Lesson",cancel:".noDrag",onStop:this.handleDragStop,onDrag:this.handleDrag,onResizeStop:this.handleResizeStop,style:{position:"absolute"},minWidth:200,minHeight:200,maxHeight:500,maxWidth:500,disabled:!this.props.draggable,resizable:!0},o),i)}}]),i}(w.Component);K.defaultProps={title:null,body:null,watermark:null,color:null,date:"",draggable:!1,editable:!1,minimizable:!1,minimized:!1,resizable:!1,size:null,style:{},onBodyChange:function(){},onClick:null,onDelete:function(){},onMove:function(){},onResize:function(){},onTitleChange:function(){},removable:!1},K.contextType=S.a,e.default=Object(T.a)("StickyNote")(K)},733:function(t,e,i){"use strict";var o=i(406),n=Object(o.a)((function(){return Promise.all([i.e(0),i.e(6),i.e(1326),i.e(300)]).then(i.bind(null,1578))}));e.a=n}}]);