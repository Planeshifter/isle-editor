(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{4061:function(t,e,n){"use strict";n.r(e);n(411),n(403),n(415);var i=n(407),o=n.n(i),r=n(410),s=n.n(r),c=n(420),a=n.n(c),d=n(413),u=n.n(d),l=n(414),p=n.n(l),f=n(412),v=n.n(f),h=n(404),m=n.n(h),b=n(400),y=n.n(b),g=n(0),w=(n(396),n(4125)),k=n(428),S=n(909),R=n(440),x=n.n(R),C=n(860),I=n(457),D=n(578);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=v()(t);if(e){var o=v()(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return p()(this,n)}}var z=function(t,e){if(t){var n=t.map((function(t,e){return y()("tr",{},e,y()("td",{},void 0,x()(t.trigger)?t.trigger.join(", "):t.trigger),y()("td",{},void 0,t.description))}));return y()(S.a,{style:{fontSize:10},id:"voice_control_tooltip"},void 0,y()("p",{},void 0,y()("b",{},void 0,e("available-commands"))),y()("table",{className:"table table-bordered table-condensed"},void 0,y()("thead",{},void 0,y()("tr",{},void 0,y()("th",{},void 0,e("commands")),y()("th",{},void 0,e("description")))),y()("tbody",{},void 0,n)),y()("p",{},void 0,e("click-to-set-active")))}return null},A=y()("div",{className:"fa fa-phone"}),J=function(t){u()(n,t);var e=j(n);function n(t,i){var r;return o()(this,n),r=e.call(this,t),m()(a()(r),"setInactive",(function(){r.setState({active:!1})})),m()(a()(r),"setActive",(function(){r.setState({active:!0})})),m()(a()(r),"handleClick",(function(){r.state.active?r.setInactive():r.context.speechInterface.setActive(r.props.id)})),r.state={active:!1,show:!!i&&i.voiceRecordingStatus},r}return s()(n,[{key:"componentDidMount",value:function(){var t=this,e=this.context;e&&(e.speechInterface.register({name:this.props.id,reference:this.props.reference,commands:this.props.commands,control:this}),this.unsubscribe=e.subscribe((function(e,n){e===D.T&&t.setState({show:n})})))}},{key:"render",value:function(){if(!this.props.id||this.props.hide||!this.state.show)return null;var t=this.state.active?"success":"default";return y()(C.a,{placement:"left",overlay:z(this.props.commands,this.props.t)},void 0,y()(k.a,{style:{boxShadow:"none",float:"right"},variant:t,onClick:this.handleClick,size:"sm"},void 0,A,y()("span",{style:{marginLeft:4}},void 0,this.props.id)))}}]),n}(g.Component);J.defaultProps={id:null,hide:!1},J.contextType=I.a,e.default=Object(w.a)("VoiceControl")(J)}}]);