(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{1034:function(t,e,n){"use strict";n.r(e);n(411),n(403),n(415);var o=n(400),s=n.n(o),i=(n(494),n(407)),a=n.n(i),r=n(410),p=n.n(r),c=n(420),u=n.n(c),l=n(413),h=n.n(l),f=n(414),d=n.n(f),m=n(412),v=n.n(m),b=n(404),y=n.n(b),w=n(0),S=(n(396),n(443)),g=n.n(S),k=n(4125),C=n(919),M=n(428),j=n(489),x=n(698),A=n(457),R=n(578),z=n(418);function D(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=v()(t);if(e){var s=v()(this).constructor;n=Reflect.construct(o,arguments,s)}else n=o.apply(this,arguments);return d()(this,n)}}var L=g()("isle:chat-button");Object(z.a)("ChatButton");var P=function(t){h()(n,t);var e=D(n);function n(t){var o;return a()(this,n),o=e.call(this,t),y()(u()(o),"hideAnimation",(function(){o.setState({showAnimation:!1})})),y()(u()(o),"handleClick",(function(t){L("Handle click to join chat...");var e=!o.state.opened;o.props.onClick(t,e),o.setState({opened:e},(function(){var t=o.context;e?(L("Should join chat for component with id '".concat(o.props.for,"'...")),t.joinChat({name:o.props.for,anonymousSubmissions:o.props.anonymousSubmissions})):(L("Should leave chat for component with id '".concat(o.props.for,"'...")),t.leaveChat(o.props.for))}))})),o.state={opened:!1,nMessages:0,nMembers:0},o}return p()(n,[{key:"componentDidMount",value:function(){var t=this,e=this.context;this.unsubscribe=e.subscribe((function(n,o){if(n!==R.D&&n!==R.s||!o||o.name!==t.props.for){if(n===R.b&&o.name===t.props.for){var s={nMessages:o.nMessages,nMembers:o.nMembers};o.nMessages>t.state.nMessages&&(s.showAnimation=!0),t.setState(s),setTimeout(t.hideAnimation,4e3)}else if(o===t.props.for){e.getChat(t.props.for)&&n!==R.E?n===R.y&&t.setState({opened:!1}):t.setState({opened:!1}),t.forceUpdate()}}else t.setState({opened:!0})}))}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var t,e,n=this.state.nMessages;t=this.props.buttonLabel?this.props.buttonLabel:this.state.opened?this.props.t("leave-chat"):this.props.t("join-chat"),e=this.props.buttonVariant?this.props.buttonVariant:this.state.nMembers>0?"success":"secondary";var o,i=s()(M.a,{className:this.props.className,variant:e,size:this.props.size,onClick:this.handleClick,style:this.props.style,"aria-label":this.props.t("toggle-chat")},void 0,s()("span",{style:{pointerEvents:"none"}},void 0,t),n?s()(C.a,{variant:"dark",style:{marginLeft:"5px",fontSize:"10px",pointerEvents:"none",animation:this.state.showAnimation?"ping 0.7s 3":"none"}},void 0,n):null);return o=this.props.tooltip?this.props.tooltip:this.state.opened?this.props.t("leave-chat-id",{id:this.props.for}):this.props.t("join-chat-id",{id:this.props.for}),this.props.showTooltip&&(i=s()(j.a,{tooltip:o,placement:this.props.tooltipPlacement},void 0,i)),s()(x.a,{user:!0},void 0,i)}}]),n}(w.Component);P.defaultProps={anonymousSubmissions:!1,buttonLabel:null,showTooltip:!0,tooltip:null,size:"sm",buttonVariant:null,tooltipPlacement:"top",onClick:function(){},className:"",style:{}},P.contextType=A.a,e.default=Object(k.a)("ChatButton")(P)}}]);