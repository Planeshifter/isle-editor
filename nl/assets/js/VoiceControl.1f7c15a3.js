(window.webpackJsonp=window.webpackJsonp||[]).push([[1155],{3986:function(t,e,n){"use strict";n.r(e);n(436),n(423),n(420);var i=n(414),a=n.n(i),r=n(415),o=n.n(r),s=n(424),c=n.n(s),d=n(417),l=n.n(d),u=n(418),f=n.n(u),v=n(416),p=n.n(v),h=n(412),b=n.n(h),m=n(407),y=n.n(m),g=n(0),k=(n(404),n(4096)),w=n(422),x=n(775),N=n(443),R=n.n(N),S=n(735),j=n(465),C=n(535);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=p()(t);if(e){var a=p()(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return f()(this,n)}}var P=function(t,e){if(t){var n=t.map((function(t,e){return y()("tr",{},e,y()("td",{},void 0,R()(t.trigger)?t.trigger.join(", "):t.trigger),y()("td",{},void 0,t.description))}));return y()(x.a,{style:{fontSize:10},id:"voice_control_tooltip"},void 0,y()("p",{},void 0,y()("b",{},void 0,e("available-commands"))),y()("table",{className:"table table-bordered table-condensed"},void 0,y()("thead",{},void 0,y()("tr",{},void 0,y()("th",{},void 0,e("commands")),y()("th",{},void 0,e("description")))),y()("tbody",{},void 0,n)),y()("p",{},void 0,e("click-to-set-active")))}return null},z=y()("div",{className:"fa fa-phone"}),I=function(t){l()(n,t);var e=O(n);function n(t,i){var r;return a()(this,n),r=e.call(this,t),b()(c()(r),"setInactive",(function(){r.setState({active:!1})})),b()(c()(r),"setActive",(function(){r.setState({active:!0})})),b()(c()(r),"handleClick",(function(){r.state.active?r.setInactive():r.context.speechInterface.setActive(r.props.id)})),r.state={active:!1,show:!!i&&i.voiceRecordingStatus},r}return o()(n,[{key:"componentDidMount",value:function(){var t=this,e=this.context;e&&(e.speechInterface.register({name:this.props.id,reference:this.props.reference,commands:this.props.commands,control:this}),this.unsubscribe=e.subscribe((function(e,n){e===C.T&&t.setState({show:n})})))}},{key:"render",value:function(){if(!this.props.id||this.props.hide||!this.state.show)return null;var t=this.state.active?"success":"default";return y()(S.a,{placement:"left",overlay:P(this.props.commands,this.props.t)},void 0,y()(w.a,{style:{boxShadow:"none",float:"right"},variant:t,onClick:this.handleClick,size:"sm"},void 0,z,y()("span",{style:{marginLeft:4}},void 0,this.props.id)))}}]),n}(g.Component);I.defaultProps={id:null,hide:!1},I.contextType=j.a,e.default=Object(k.a)("VoiceControl")(I)},422:function(t,e,n){"use strict";var i=n(406),a=n(408),r=n(409),o=n.n(r),s=n(0),c=n.n(s),d=n(411),l=n(470),u=c.a.forwardRef((function(t,e){var n=t.bsPrefix,r=t.variant,s=t.size,u=t.active,f=t.className,v=t.block,p=t.type,h=t.as,b=Object(a.a)(t,["bsPrefix","variant","size","active","className","block","type","as"]),m=Object(d.a)(n,"btn"),y=o()(f,m,u&&"active",r&&m+"-"+r,v&&m+"-block",s&&m+"-"+s);if(b.href)return c.a.createElement(l.a,Object(i.a)({},b,{as:h,ref:e,className:o()(y,b.disabled&&"disabled")}));e&&(b.ref=e),p?b.type=p:h||(b.type="button");var g=h||"button";return c.a.createElement(g,Object(i.a)({},b,{className:y}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},e.a=u}}]);