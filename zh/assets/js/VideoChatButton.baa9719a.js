(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{6278:function(t,e,o){"use strict";o.r(e);o(411),o(403),o(415);var n=o(400),s=o.n(n),i=o(407),r=o.n(i),a=o(410),p=o.n(a),c=o(420),l=o.n(c),u=o(413),h=o.n(u),d=o(414),f=o.n(d),v=o(412),b=o.n(v),m=o(404),y=o.n(m),w=o(0),C=(o(396),o(443)),V=o.n(C),j=o(4125),k=o(428),g=o(489),S=o(698),x=o(457),R=o(578);function z(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=b()(t);if(e){var s=b()(this).constructor;o=Reflect.construct(n,arguments,s)}else o=n.apply(this,arguments);return f()(this,o)}}var N=V()("isle:video-chat-button"),P=function(t){h()(o,t);var e=z(o);function o(t){var n;return r()(this,o),n=e.call(this,t),y()(l()(n),"toggleVideoChat",(function(t){var e=!n.state.opened;n.props.onClick(t,e),n.setState({opened:e},(function(){var t=n.context;e?(N("Should join chat for component with id '".concat(n.props.for,"'...")),t.joinVideoChat({name:n.props.for,subject:n.props.subject||n.props.for})):(N("Should leave chat for component with id '".concat(n.props.for,"'...")),t.leaveVideoChat(n.props.for))}))})),n.state={opened:!1},n}return p()(o,[{key:"componentDidMount",value:function(){var t=this,e=this.context;this.unsubscribe=e.subscribe((function(e,o){e===R.S&&o===t.props.for?t.setState({opened:!0}):e===R.R&&o===t.props.for?t.setState({opened:!1}):e!==R.t&&e!==R.x||t.forceUpdate()}))}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var t,e,o,n=this.context,i=this.props.t;if(t=this.props.buttonLabel?this.props.buttonLabel:this.state.opened?i("leave"):i("join"),e=this.props.buttonVariant?this.props.buttonVariant:this.state.opened?"success":"secondary",!n.jitsi)return s()(k.a,{disabled:!0,name:"Video Chat",variant:e,size:this.props.size,className:this.props.className,style:this.props.style,"aria-disabled":"true","aria-label":i("disabled")},void 0,t);o=this.props.tooltip?this.props.tooltip:this.state.opened?i("leave-id",{id:this.props.for}):i("join-id",{id:this.props.for});var r=s()(k.a,{name:"Video Chat",variant:e,size:this.props.size,className:this.props.className,onClick:this.toggleVideoChat,style:this.props.style,"aria-label":i("toggle")},void 0,s()("span",{style:{pointerEvents:"none"}},void 0,t));return this.props.showTooltip&&(r=s()(g.a,{tooltip:o,placement:this.props.tooltipPlacement},void 0,r)),s()(S.a,{user:!0},void 0,r)}}]),o}(w.Component);P.defaultProps={subject:null,buttonLabel:null,showTooltip:!0,size:"sm",buttonVariant:null,tooltipPlacement:"top",onClick:function(){},className:"",style:{}},P.contextType=x.a,e.default=Object(j.a)("Video")(P)}}]);