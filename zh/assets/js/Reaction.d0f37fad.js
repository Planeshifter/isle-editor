(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{6458:function(t,n,e){"use strict";e.r(n);e(411),e(403),e(415);var r=e(400),o=e.n(r),i=e(407),s=e.n(i),u=e(410),c=e.n(u),a=e(413),p=e.n(a),f=e(414),l=e.n(f),h=e(412),v=e.n(h),d=e(0),y=(e(396),e(443)),w=e.n(y),b=e(4125),m=e(449),D=e(457),R=e(619),k=e.n(R),x=e(481),I=e.n(x),U=e(578);function g(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=v()(t);if(n){var o=v()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return l()(this,e)}}var T=w()("isle:reaction"),A=function(t){p()(e,t);var n=g(e);function e(t){return s()(this,e),n.call(this,t)}return c()(e,[{key:"componentDidMount",value:function(){var t=this,n=this.context;this.unsubscribe=n.subscribe((function(n,e){n===U.n&&e.id===t.props.actionID&&t.forceUpdate()}))}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){T("Render component...");var t=this.context;if(!this.props.actionID)return o()(m.a,{variant:"danger"},void 0,this.props.t("supply-component-id"));if(t.currentUserActions){var n=t.responseVisualizers[this.props.actionID];if(n){var e=n.type,r=t.currentUserActions[this.props.actionID];if(r){var i=(r=(r=r.filter((function(t){return t.type===e}))).sort((function(t,n){return t.absoluteTime-n.absoluteTime})))[r.length-1];if(k()(this.props.show))return this.props.show[i.value]||this.props.show.default||null;if(I()(this.props.show))return this.props.show(i.value,i)||null}return null}}return null}}]),e}(d.Component);A.defaultProps={show:{}},A.contextType=D.a,n.default=Object(b.a)("General")(A)}}]);