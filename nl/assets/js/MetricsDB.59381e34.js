(window.webpackJsonp=window.webpackJsonp||[]).push([[724],{423:function(t,e,n){"use strict";var a=n(405),r=n(408),c=n(409),i=n.n(c),o=n(0),s=n.n(o),u=n(411),l=n(463),f=s.a.forwardRef((function(t,e){var n=t.bsPrefix,c=t.variant,o=t.size,f=t.active,p=t.className,v=t.block,d=t.type,b=t.as,y=Object(r.a)(t,["bsPrefix","variant","size","active","className","block","type","as"]),h=Object(u.a)(n,"btn"),m=i()(p,h,f&&"active",c&&h+"-"+c,v&&h+"-block",o&&h+"-"+o);if(y.href)return s.a.createElement(l.a,Object(a.a)({},y,{as:b,ref:e,className:i()(m,y.disabled&&"disabled")}));e&&(y.ref=e),d?y.type=d:b||(y.type="button");var w=b||"button";return s.a.createElement(w,Object(a.a)({},y,{className:m}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1},e.a=f},6406:function(t,e,n){"use strict";n.r(e);n(421);var a=n(407),r=n.n(a),c=n(414),i=n.n(c),o=n(416),s=n.n(o),u=n(424),l=n.n(u),f=n(418),p=n.n(f),v=n(419),d=n.n(v),b=n(417),y=n.n(b),h=n(412),m=n.n(h),w=n(0),k=(n(404),n(423)),D=n(459);function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=y()(t);if(e){var r=y()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return d()(this,n)}}var x=function(t){p()(n,t);var e=R(n);function n(){var t;return i()(this,n),t=e.call(this),m()(l()(t),"getData",(function(){t.context.retrieveData({componentID:t.props.for},t.props.onData)})),m()(l()(t),"start",(function(){t.props.interval?t.runner=window.setInterval(t.getData,t.props.interval):t.getData()})),m()(l()(t),"stop",(function(){t.runner&&clearInterval(t.runner)})),t.state={active:!1},t}return s()(n,[{key:"componentWillUnmount",value:function(){this.runner&&clearInterval(this.runner)}},{key:"render",value:function(){var t=this;return r()(k.a,{variant:"primary",onClick:function(){t.setState({active:!t.state.active},(function(){t.state.active||!t.props.interval?t.start():t.stop()}))}},void 0,this.state.active&&this.props.interval?"Stop":"Fetch Data")}}]),n}(w.Component);x.defaultProps={interval:null,onData:function(){}},x.contextType=D.a,e.default=x}}]);