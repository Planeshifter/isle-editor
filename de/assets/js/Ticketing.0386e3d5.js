(window.webpackJsonp=window.webpackJsonp||[]).push([[1141],{6375:function(t,e,n){"use strict";var i=n(405),a=Object(i.a)((function(){return Promise.all([n.e(3),n.e(177)]).then(n.bind(null,6401))}));e.a=a},6564:function(t,e,n){"use strict";n.r(e),function(t){n(420);var i,a,s=n(407),o=n.n(s),r=n(785),c=n.n(r),l=n(414),h=n.n(l),u=n(415),d=n.n(u),f=n(424),p=n.n(f),m=n(417),v=n.n(m),g=n(418),C=n.n(g),k=n(416),y=n.n(k),w=n(412),N=n.n(w),S=(n(482),n(566),n(458),n(0)),b=(n(404),n(6374)),F=n.n(b),T=n(450),x=n.n(T),A=n(917),O=n(640),R=n(690),H=n(586),P=n(422),E=n(507),I=n(725),z=n(783),B=n(484),D=n(524),J=n(6375);n(393);function L(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=y()(t);if(e){var a=y()(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return C()(this,n)}}var M=x()("isle:toolbar:ticketing"),_=["General"];t.COMPONENT_LIST&&(_=_.concat(t.COMPONENT_LIST));var j=function(t){v()(n,t);var e=L(n);function n(t){var i;return h()(this,n),i=e.call(this,t),N()(p()(i),"handleTitleChange",(function(t){i.setState({title:t.target.value})})),N()(p()(i),"handleDescriptionChange",(function(t){i.setState({description:t})})),N()(p()(i),"handleComponentChange",(function(t){i.setState({component:t})})),N()(p()(i),"attachFile",(function(){var t=i.props,e=t.session,n=t.t;if(i.state.files.length>=6)return e.addNotification({title:n("maximum-num-attachments"),message:n("maximum-num-attachments-message"),level:"warning",position:"tr"});var a=document.createElement("input");a.type="file",a.onchange=function(t){var e=t.target.files,n=[].concat(c()(i.state.files),c()(e));i.setState({files:n})},a.click()})),N()(p()(i),"handleSubmit",(function(){M("Create ticket...");var t=i.props,e=t.session,n=t.t,a={title:i.state.title,description:i.state.description,component:i.state.component,platform:{name:F.a.name,version:F.a.version,product:F.a.product,manufacturer:F.a.manufacturer,os:F.a.os,description:F.a.description},files:i.state.files};e.createTicket(a).then((function(){i.setState({showAlert:!0})})).catch((function(t){e.addNotification({title:n("encountered-error"),message:t.message,level:"error",position:"tc"})}))})),N()(p()(i),"removeFileFactory",(function(t){return function(){var e=i.state.files.slice();e.splice(t,1),i.setState({files:e})}})),i.state={title:"",description:"",component:null,showAlert:!1,files:[]},i}return d()(n,[{key:"renderAttachments",value:function(){var t=this;return 0===this.state.files.length?null:o()(S.Fragment,{},void 0,o()("span",{className:"title"},void 0,this.props.t("attachments"),":"),o()(A.a,{className:"ticketing-attachment-list"},void 0,this.state.files.map((function(e,n){return o()(A.a.Item,{},"file-".concat(n),e.name,o()(P.a,{variant:"danger",size:"sm",onClick:t.removeFileFactory(n),style:{float:"right"}},void 0,i||(i=o()("i",{className:"fas fa-times"}))))}))))}},{key:"render",value:function(){var t=this,e=this.props,n=e.t;return e.show?o()(S.Fragment,{},void 0,o()(I.a,{dragHandleClassName:"card-header"},void 0,o()(D.a,{header:o()("span",{},void 0,o()("span",{className:"fa fa-lg fa-medkit",style:{marginRight:6}}),n("ticketing")),onHide:this.props.onHide,minimizable:!0,style:{maxWidth:560},bodyStyle:{maxHeight:"75vh"}},void 0,o()("p",{},void 0,n("ticketing-intro")),o()(E.a,{legend:n("component"),options:_,onChange:this.handleComponentChange}),o()(H.a,{},void 0,o()(R.a,{},void 0,n("title"),":"),o()(O.a,{type:"text",placeholder:n("title-placeholder"),onChange:this.handleTitleChange})),o()(z.a,{legend:n("description"),value:this.state.description,onChange:this.handleDescriptionChange,placeholder:n("description-placeholder")}),this.renderAttachments(),o()(B.a,{tooltip:n("attach-file")},void 0,o()(P.a,{onClick:this.attachFile},void 0,a||(a=o()("i",{className:"fas fa-paperclip"})))),o()(P.a,{onClick:this.handleSubmit,style:{float:"right"},disabled:!this.state.title||!this.state.description},void 0,n("create-ticket")))),o()(J.a,{title:n("ticket-created"),message:n("ticket-created-message"),show:this.state.showAlert,close:function(){t.setState({title:"",description:"",showAlert:!1,files:[]}),t.props.onHide()}})):null}}]),n}(S.Component);e.default=j}.call(this,n(22))}}]);