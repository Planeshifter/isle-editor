(window.webpackJsonp=window.webpackJsonp||[]).push([[734],{3972:function(t,n,e){"use strict";e.r(n);e(421);var i=e(407),o=e.n(i),r=e(414),s=e.n(r),u=e(415),c=e.n(u),a=e(418),f=e.n(a),l=e(419),p=e.n(l),h=e(417),v=e.n(h),d=(e(608),e(0)),b=(e(404),e(450)),y=e.n(b),m=e(598),w=e.n(m),D=e(463),k=e(547);function R(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,i=v()(t);if(n){var o=v()(this).constructor;e=Reflect.construct(i,arguments,o)}else e=i.apply(this,arguments);return p()(this,e)}}var g=y()("isle:real-time-metrics"),M=o()("div",{}),O=function(t){f()(e,t);var n=R(e);function e(){var t;return s()(this,e),(t=n.call(this)).state={actions:[]},t}return c()(e,[{key:"componentDidMount",value:function(){var t=this;this._isMounted=!0;var n=this.context;n&&(g("Listening for all actions with id: "+this.props.for),this.unsubscribe=n.subscribe((function(n,e){if(n===k.n){if(e.type===k.h||e.type===k.l)return null;var i=w()(t.props.for,e.id);if(-1!==i){var o=t.state.actions.slice();o.push(t.props.returnFullObject?e:e.value),t.setState({actions:o},(function(){g("A new value for the given IDs was submitted: "+JSON.stringify(t.state.actions)),t.props.onData(t.state.actions,i),t.props.onDatum(t.state.actions[t.state.actions.length-1],i)}))}}t._isMounted&&t.forceUpdate()})))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.unsubscribe&&this.unsubscribe()}},{key:"render",value:function(){return M}}]),e}(d.Component);O.defaultProps={onData:function(){},onDatum:function(){},returnFullObject:!1},O.contextType=D.a,n.default=O}}]);