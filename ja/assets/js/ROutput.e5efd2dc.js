(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{1645:function(t,n,e){"use strict";var r=e(440),o=e.n(r);n.a=function(t,n,e){var r=e.config.rshell;r&&r.libraries&&(t=t.concat(r.libraries));var i=function(t){return t.map((function(t){return"library("+t+");"})).join(" ")}(t);return r&&r.global&&(i+=r.global+"\n"),n=o()(n)?n.join("\n"):n,i+=n+="\n"}},3988:function(t,n,e){"use strict";e.r(n);e(411),e(403),e(415);var r=e(407),o=e.n(r),i=e(410),s=e.n(i),u=e(420),a=e.n(u),c=e(413),p=e.n(c),l=e(414),f=e.n(l),d=e(412),g=e.n(d),h=e(404),v=e.n(h),R=e(400),m=e.n(R),y=e(0),b=(e(396),e(4453)),x=e.n(b),w=e(1203),k=e(1645),P=e(457),S=e(418);function j(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=g()(t);if(n){var o=g()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return f()(this,e)}}Object(S.a)("R");var C=m()("span",{}),D=m()("span",{}),T=m()("span",{}),O=function(t){p()(e,t);var n=j(e);function e(t){var r;return o()(this,e),r=n.call(this,t),v()(a()(r),"getResult",(function(t){var n;if((n=t?t.code:r.props.code)!==r.state.last){r.setState({last:r.props.code,running:!0});var e=r.context,o=Object(k.a)(r.props.libraries,r.props.prependCode,e)+n;e.executeRCode({code:o,onError:function(t){r.setState({result:t,running:!1}),r.props.onResult(t)},onPlots:r.props.onPlots,onResult:function(t,n,e){r.setState({result:e,running:!1}),r.props.onResult(t,e)}})}})),r.state={result:null,running:!1,last:""},r}return s()(e,[{key:"componentDidMount",value:function(){this.getResult(this.props)}},{key:"componentDidUpdate",value:function(){this.getResult(this.props)}},{key:"render",value:function(){return m()("span",{className:"ROutput"},void 0,this.state.result?m()("div",{style:{marginLeft:"auto",marginRight:"auto",marginTop:"10px",marginBottom:"10px"}},void 0,m()(w.a,{width:128,height:64,style:{marginTop:"8px",marginBottom:"-12px"},running:this.state.running}),this.state.running?D:function(t){if(t){var n={__html:x.a.sanitize(t)};return m()("pre",{id:"output"},void 0,m()("span",{dangerouslySetInnerHTML:n}))}return C}(this.state.result)):T)}}]),e}(y.Component);O.defaultProps={code:"",libraries:[],prependCode:"",onPlots:function(){},onResult:function(){}},O.contextType=P.a,n.default=O}}]);