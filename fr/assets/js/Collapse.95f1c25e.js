(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{4105:function(e,t,i){"use strict";i.r(t);i(411),i(403),i(415);var r=i(400),s=i.n(r),n=i(407),l=i.n(n),a=i(410),o=i.n(a),c=i(420),u=i.n(c),p=i(413),f=i.n(p),v=i(414),d=i.n(v),h=i(412),y=i.n(h),b=i(404),m=i.n(b),N=i(0),k=(i(396),i(443)),C=i.n(k),R=i(475),g=i(589),S=i.n(g);i(86);function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=y()(e);if(t){var s=y()(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return d()(this,i)}}var P=function(e){f()(i,e);var t=w(i);function i(){return l()(this,i),t.apply(this,arguments)}return o()(i,[{key:"render",value:function(){return s()("button",{onClick:this.props.onClick,className:"vertical-slider-header ".concat(this.props.className),style:this.props.style},void 0,this.props.children)}}]),i}(N.Component);P.defaultProps={className:"",style:{}};var D=P;function V(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,r=y()(e);if(t){var s=y()(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return d()(this,i)}}var H=C()("isle:vertical-slider");function x(e){return!1===e?"vs-body vs-hidden":"vs-body vs-display"}var J=function(e){f()(i,e);var t=V(i);function i(e){var r;l()(this,i),r=t.call(this,e),m()(u()(r),"toggleVisibility",(function(){if(r.props.onClick(),!Object(R.isPrimitive)(r.props.visible)){var e=!r.state.visible;r.setState({visible:e,className:x(e)})}}));var s=e.visible||e.defaultVisible;return r.state={visible:s,className:x(s)},r}return o()(i,[{key:"renderHeader",value:function(){return null!==this.props.headerClassName?s()(D,{onClick:this.toggleVisibility,className:this.props.headerClassName,style:this.props.headerStyle},void 0,this.props.header):s()(D,{onClick:this.toggleVisibility,style:this.props.headerStyle},void 0,this.props.header)}},{key:"render",value:function(){return s()("div",{className:"vertical-slider",style:this.props.style},void 0,this.renderHeader(),s()("div",{className:this.state.className},void 0,this.props.children))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return S()(e.visible)||e.visible===t.visible?null:(H("Override visible state..."),{visible:e.visible,className:x(e.visible)})}}]),i}(N.Component);J.defaultProps={header:"Header",headerClassName:null,headerStyle:null,defaultVisible:!1,visible:null,style:{},onClick:function(){}};t.default=J}}]);