(window.webpackJsonp=window.webpackJsonp||[]).push([[923],{6535:function(t,n,e){"use strict";e.r(n);e(420);var r=e(407),o=e.n(r),i=e(414),s=e.n(i),u=e(415),c=e.n(u),a=e(417),p=e.n(a),l=e(418),f=e.n(l),h=e(416),v=e.n(h),d=(e(469),e(0)),y=(e(404),e(450)),b=e.n(y),w=e(4096),m=e(454),R=e(465),k=e(560),D=e.n(k),x=e(475),I=e.n(x),U=e(535),O=e(439);function T(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=v()(t);if(n){var o=v()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return f()(this,e)}}var g=b()("isle:reaction"),j=function(t){p()(e,t);var n=T(e);function e(t){return s()(this,e),n.call(this,t)}return c()(e,[{key:"componentDidMount",value:function(){var t=this,n=this.context;this.unsubscribe=n.subscribe((function(n,e){n===U.n&&e.id===t.props.actionID&&t.forceUpdate()}))}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){g("Render component...");var t=this.context;if(!this.props.actionID)return o()(m.a,{variant:"danger"},void 0,this.props.t("supply-component-id"));if(t.currentUserActions){var n=t.responseVisualizers[this.props.actionID];if(n){var e=n.type,r=t.currentUserActions[this.props.actionID];if(r){var i=(r=(r=r.filter((function(t){return t.type===e}))).sort((function(t,n){return t.absoluteTime-n.absoluteTime})))[r.length-1];if(D()(this.props.show))return this.props.show[i.value]||this.props.show.default||null;if(I()(this.props.show))return this.props.show(i.value,i)||null}return null}}return null}}]),e}(d.Component);j.defaultProps={show:{}},j.contextType=R.a,n.default=Object(w.a)("General")(Object(O.a)(j))}}]);