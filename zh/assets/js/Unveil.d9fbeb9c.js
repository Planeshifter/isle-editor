(window.webpackJsonp=window.webpackJsonp||[]).push([[1150],{6490:function(t,e,n){"use strict";n.r(e);n(427),n(416),n(421);var i=n(407),r=n.n(i),c=n(414),o=n.n(c),s=n(415),u=n.n(s),l=n(418),a=n.n(l),p=n(419),h=n.n(p),f=n(417),v=n.n(f),d=n(0);n(404);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=v()(t);if(e){var r=v()(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return h()(this,n)}}var y=r()("span",{}),k=function(t){a()(n,t);var e=m(n);function n(t){var i;return o()(this,n),(i=e.call(this)).state={visible:!1,children:t.children},i}return u()(n,[{key:"componentDidMount",value:function(){this.props.active&&this.setTimer()}},{key:"componentDidUpdate",value:function(t){(this.props.children!==t.children&&this.props.active||this.props.active&&this.props.active!==t.active)&&this.setTimer()}},{key:"componentWillUnmount",value:function(){clearTimeout(this._timer)}},{key:"setTimer",value:function(){var t=this;null!==this._timer&&clearTimeout(this._timer),this._timer=setTimeout((function(){t.setState({visible:!0}),t._timer=null}),this.props.delay)}},{key:"render",value:function(){return this.state.visible?r()(d.Fragment,{},void 0,this.props.children):y}}],[{key:"getDerivedStateFromProps",value:function(t,e){return t.children!==e.children?{visible:!1,children:t.children}:null}}]),n}(d.Component);k.defaultProps={active:!1,delay:1e3},e.default=k}}]);