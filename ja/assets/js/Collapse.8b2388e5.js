(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{4130:function(e,t,i){"use strict";i.r(t);i(421);var s=i(407),r=i.n(s),n=i(414),l=i.n(n),a=i(415),o=i.n(a),c=i(425),u=i.n(c),p=i(418),f=i.n(p),v=i(419),d=i.n(v),h=i(417),y=i.n(h),b=i(412),m=i.n(b),N=i(0),k=(i(404),i(450)),C=i.n(k),R=i(472),g=i(553),w=i.n(g),P=i(439);i(427),i(416),i(84);function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,s=y()(e);if(t){var r=y()(this).constructor;i=Reflect.construct(s,arguments,r)}else i=s.apply(this,arguments);return d()(this,i)}}var V=function(e){f()(i,e);var t=S(i);function i(){return l()(this,i),t.apply(this,arguments)}return o()(i,[{key:"render",value:function(){return r()("button",{onClick:this.props.onClick,className:"vertical-slider-header ".concat(this.props.className),style:this.props.style},void 0,this.props.children)}}]),i}(N.Component);V.defaultProps={className:"",style:{}};var O=V;function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,s=y()(e);if(t){var r=y()(this).constructor;i=Reflect.construct(s,arguments,r)}else i=s.apply(this,arguments);return d()(this,i)}}var H=C()("isle:vertical-slider");function j(e){return!1===e?"vs-body vs-hidden":"vs-body vs-display"}var x=function(e){f()(i,e);var t=D(i);function i(e){var s;l()(this,i),s=t.call(this,e),m()(u()(s),"toggleVisibility",(function(){if(Object(R.isPrimitive)(s.props.visible))s.props.onClick(s.props.visible);else{var e=!s.state.visible;s.props.onClick(e),s.setState({visible:e,className:j(e)})}}));var r=e.visible||e.defaultVisible;return s.state={visible:r,className:j(r)},s}return o()(i,[{key:"renderHeader",value:function(){return null!==this.props.headerClassName?r()(O,{onClick:this.toggleVisibility,className:this.props.headerClassName,style:this.props.headerStyle},void 0,this.props.header):r()(O,{onClick:this.toggleVisibility,style:this.props.headerStyle},void 0,this.props.header)}},{key:"render",value:function(){return r()("div",{className:"".concat(this.props.className," vertical-slider"),style:this.props.style},void 0,this.renderHeader(),r()("div",{className:this.state.className},void 0,this.props.children))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return w()(e.visible)||e.visible===t.visible?null:(H("Override visible state..."),{visible:e.visible,className:j(e.visible)})}}]),i}(N.Component);x.defaultProps={header:"Header",headerClassName:null,headerStyle:null,defaultVisible:!1,visible:null,className:"",style:{},onClick:function(){}};t.default=Object(P.a)(x)}}]);