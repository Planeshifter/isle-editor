(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{6418:function(t,e,r){"use strict";r.r(e);r(438),r(436),r(441),r(440),r(437),r(427),r(416),r(421);var s=r(407),n=r.n(s),o=r(414),i=r.n(o),a=r(415),u=r.n(a),c=r(425),l=r.n(c),p=r(418),f=r.n(p),v=r(419),h=r.n(v),y=r(417),b=r.n(y),d=r(412),O=r.n(d),S=r(0);r(404);function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){O()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,s=b()(t);if(e){var n=b()(this).constructor;r=Reflect.construct(s,arguments,n)}else r=s.apply(this,arguments);return h()(this,r)}}var w=function(t){f()(r,t);var e=k(r);function r(t){var s;return i()(this,r),s=e.call(this,t),O()(l()(s),"readPreset",(function(){switch(s.props.preset){case"saturation":case"desaturation":s.saturation();break;case"blurred":case"deblurred":s.blurring();break;case"sepia":s.sepia();break;case"shaking":s.shaking();break;case"scaling":s.scaling()}})),O()(l()(s),"readStyles",(function(){var t=s.state.actualStyle,e=s.state.over,r=s.state.out,n=s.props.in,o=g(g({},t),n),i=s.props.over,a=g(g({},e),i),u=s.props.out,c=g(g({},r),u);s.mixin=!0,s.setState({actualStyle:o,over:a,out:c})})),O()(l()(s),"mouseOver",(function(){s.state.over&&s.setState({actualStyle:s.state.over})})),O()(l()(s),"mouseOut",(function(){s.state.out&&s.setState({actualStyle:s.state.out})})),s.mixin=!1,s.state={actualStyle:{},over:null,out:null},s}return u()(r,[{key:"componentDidMount",value:function(){""!==this.props.preset?this.readPreset():this.readStyles()}},{key:"componentDidUpdate",value:function(){!1===this.mixin&&this.readStyles()}},{key:"saturation",value:function(){var t={filter:"grayscale(0%)",transition:"2s"},e={filter:"grayscale(100%)",transition:"2s"},r=this.props.preset;"saturation"===r?this.setState({over:t,out:e}):"desaturation"===r&&this.setState({over:e,out:t})}},{key:"blurring",value:function(){var t={filter:"blur(6px)",transition:"1.2s"},e={filter:"blur(0px)",transition:"1.2s"},r=this.props.preset;"blurred"===r?this.setState({over:t,out:e}):"deblurred"===r&&this.setState({over:e,out:t})}},{key:"sepia",value:function(){"sepia"===this.props.preset&&this.setState({over:{filter:"sepia(100%)",transition:"1.2s"},out:{filter:"sepia(0%)",transition:"1.2s"}})}},{key:"shaking",value:function(){this.setState({over:{animation:"shake-bottom .5s"}})}},{key:"scaling",value:function(){"scaling"===this.props.preset&&this.setState({over:{transform:"scale(1.03)",transition:"1.2s",transformOrigin:"center center"},out:{transform:"scale(1)",transition:"1.2s"}})}},{key:"render",value:function(){return n()("div",{onMouseOut:this.mouseOut,onBlur:this.mouseOut,onMouseOver:this.mouseOver,onFocus:this.mouseOver,style:this.state.actualStyle},void 0,this.props.children)}}]),r}(S.Component);w.defaultProps={in:{},over:{},out:{},preset:""},e.default=w}}]);