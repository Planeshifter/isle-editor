(window.webpackJsonp=window.webpackJsonp||[]).push([[876],{422:function(t,e,n){"use strict";var a=n(406),r=n(408),o=n(409),i=n.n(o),s=n(0),c=n.n(s),l=n(411),u=n(470),d=c.a.forwardRef((function(t,e){var n=t.bsPrefix,o=t.variant,s=t.size,d=t.active,f=t.className,p=t.block,b=t.type,v=t.as,h=Object(r.a)(t,["bsPrefix","variant","size","active","className","block","type","as"]),y=Object(l.a)(n,"btn"),m=i()(f,y,d&&"active",o&&y+"-"+o,p&&y+"-block",s&&y+"-"+s);if(h.href)return c.a.createElement(u.a,Object(a.a)({},h,{as:v,ref:e,className:i()(m,h.disabled&&"disabled")}));e&&(h.ref=e),b?h.type=b:v||(h.type="button");var w=v||"button";return c.a.createElement(w,Object(a.a)({},h,{className:m}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1},e.a=d},511:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(t,e){return a(t.querySelectorAll(e))}},6538:function(t,e,n){"use strict";n.r(e);n(420);var a=n(407),r=n.n(a),o=n(414),i=n.n(o),s=n(415),c=n.n(s),l=n(424),u=n.n(l),d=n(417),f=n.n(d),p=n(418),b=n.n(p),v=n(416),h=n.n(v),y=n(412),m=n.n(y),w=n(0),R=(n(404),n(4096)),O=n(422),j=n(592),k=n(465),N=n(421),M=n(439);n(348);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=h()(t);if(e){var r=h()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return b()(this,n)}}Object(N.a)("R");var P=function(t){f()(n,t);var e=x(n);function n(t){var a;return i()(this,n),a=e.call(this,t),m()(u()(a),"hideModal",(function(){a.setState({visible:!1})})),m()(u()(a),"showModal",(function(){var t=a.props.func||a.props.children;""===a.state.body?a.context.getRHelp(a.props.library,t,(function(t,e,n){t||a.setState({body:n,visible:!0})})):a.setState({visible:!a.state.visible})})),a.state={visible:a.props.visible,body:""},a}return c()(n,[{key:"render",value:function(){var t=this.props.t;return r()("span",{role:"button",tabIndex:0,className:"RHelp",onClick:this.showModal,onKeyPress:this.showModal},void 0,r()(j.a,{backdrop:!1,show:this.state.visible,title:t("r-help"),onHide:this.hideModal,className:"r-help-modal",enforceFocus:!1},void 0,r()(j.a.Header,{closeButton:!0},void 0,r()(j.a.Title,{id:"contained-modal-title-lg"},void 0,t("r-help"))),r()(j.a.Body,{className:"r-help-modal-body"},void 0,r()("span",{dangerouslySetInnerHTML:{__html:this.state.body}})),r()(j.a.Footer,{},void 0,r()(O.a,{onClick:this.hideModal},void 0,t("close")))),r()("code",{style:{cursor:"pointer"}},void 0,this.props.children||this.props.func))}}]),n}(w.Component);P.defaultProps={func:"",library:"base",visible:!1},P.contextType=k.a,e.default=Object(R.a)("R")(Object(M.a)(P))},686:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(0);function r(t){var e=Object(a.useRef)(null);return Object(a.useEffect)((function(){e.current=t})),e.current}}}]);