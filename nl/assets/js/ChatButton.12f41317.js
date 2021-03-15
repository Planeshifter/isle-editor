(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{422:function(t,e,n){"use strict";var s=n(406),o=n(408),a=n(409),i=n.n(a),r=n(0),p=n.n(r),c=n(411),l=n(470),u=p.a.forwardRef((function(t,e){var n=t.bsPrefix,a=t.variant,r=t.size,u=t.active,h=t.className,f=t.block,d=t.type,b=t.as,m=Object(o.a)(t,["bsPrefix","variant","size","active","className","block","type","as"]),v=Object(c.a)(n,"btn"),y=i()(h,v,u&&"active",a&&v+"-"+a,f&&v+"-block",r&&v+"-"+r);if(m.href)return p.a.createElement(l.a,Object(s.a)({},m,{as:b,ref:e,className:i()(y,m.disabled&&"disabled")}));e&&(m.ref=e),d?m.type=d:b||(m.type="button");var k=b||"button";return p.a.createElement(k,Object(s.a)({},m,{className:y}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},e.a=u},878:function(t,e,n){"use strict";n.r(e);n(420);var s=n(407),o=n.n(s),a=n(414),i=n.n(a),r=n(415),p=n.n(r),c=n(424),l=n.n(c),u=n(417),h=n.n(u),f=n(418),d=n.n(f),b=n(416),m=n.n(b),v=n(412),y=n.n(v),k=(n(482),n(0)),w=(n(404),n(450)),S=n.n(w),g=n(4096),j=n(794),C=n(422),M=n(484),x=n(642),N=n(465),O=n(535),P=n(421);function z(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,s=m()(t);if(e){var o=m()(this).constructor;n=Reflect.construct(s,arguments,o)}else n=s.apply(this,arguments);return d()(this,n)}}var R=S()("isle:chat-button");Object(P.a)("ChatButton");var A=function(t){h()(n,t);var e=z(n);function n(t){var s;return i()(this,n),s=e.call(this,t),y()(l()(s),"hideAnimation",(function(){s.setState({showAnimation:!1})})),y()(l()(s),"handleClick",(function(t){R("Handle click to join chat...");var e=!s.state.opened;s.props.onClick(t,e),s.setState({opened:e},(function(){var t=s.context;e?(R("Should join chat for component with id '".concat(s.props.for,"'...")),t.joinChat({name:s.props.for,anonymousSubmissions:s.props.anonymousSubmissions})):(R("Should leave chat for component with id '".concat(s.props.for,"'...")),t.leaveChat(s.props.for))}))})),s.state={opened:!1,nMessages:0,nMembers:0},s}return p()(n,[{key:"componentDidMount",value:function(){var t=this,e=this.context;this.unsubscribe=e.subscribe((function(n,s){if(n!==O.D&&n!==O.s||!s||s.name!==t.props.for){if(n===O.b&&s.name===t.props.for){var o={nMessages:s.nMessages,nMembers:s.nMembers};s.nMessages>t.state.nMessages&&(o.showAnimation=!0),t.setState(o),setTimeout(t.hideAnimation,4e3)}else if(s===t.props.for){e.getChat(t.props.for)&&n!==O.E?n===O.y&&t.setState({opened:!1}):t.setState({opened:!1}),t.forceUpdate()}}else t.setState({opened:!0})}))}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var t,e,n=this.state.nMessages;t=this.props.buttonLabel?this.props.buttonLabel:this.state.opened?this.props.t("leave-chat"):this.props.t("join-chat"),e=this.props.buttonVariant?this.props.buttonVariant:this.state.nMembers>0?"success":"secondary";var s,a=o()(C.a,{className:this.props.className,variant:e,size:this.props.size,onClick:this.handleClick,style:this.props.style,"aria-label":this.props.t("toggle-chat")},void 0,o()("span",{style:{pointerEvents:"none"}},void 0,t),n?o()(j.a,{variant:"dark",style:{marginLeft:"5px",fontSize:"10px",pointerEvents:"none",animation:this.state.showAnimation?"ping 0.7s 3":"none"}},void 0,n):null);return s=this.props.tooltip?this.props.tooltip:this.state.opened?this.props.t("leave-chat-id",{id:this.props.for}):this.props.t("join-chat-id",{id:this.props.for}),this.props.showTooltip&&(a=o()(M.a,{tooltip:s,placement:this.props.tooltipPlacement},void 0,a)),o()(x.a,{user:!0},void 0,a)}}]),n}(k.Component);A.defaultProps={anonymousSubmissions:!1,buttonLabel:null,showTooltip:!0,tooltip:null,size:"sm",buttonVariant:null,tooltipPlacement:"top",onClick:function(){},className:"",style:{}},A.contextType=N.a,e.default=Object(g.a)("ChatButton")(A)}}]);