(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{3764:function(t,e,n){"use strict";n.r(e);n(437),n(433),n(425),n(424),n(434),n(411),n(403),n(415);var r=n(400),o=n.n(r),a=n(914),i=n.n(a),c=(n(494),n(407)),s=n.n(c),p=n(410),l=n.n(p),u=n(420),d=n.n(u),h=n(413),f=n.n(h),y=n(414),b=n.n(y),g=n(412),v=n.n(g),m=n(404),O=n.n(m),C=n(0),w=n.n(C),j=(n(396),n(443)),k=n.n(j),P=n(4125),S=n(428),D=n(465),x=n(589),I=n.n(x),_=n(422),A=n.n(_),E=n(600),N=n(595),R=n(503),U=n(518),J=n(642),V=n(884),W=n(457),F=n(462),G=n(418);n(305);function T(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function B(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?T(Object(n),!0).forEach((function(e){O()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function H(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var o=v()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b()(this,n)}}Object(G.a)("Dashboard");var M=k()("isle:dashboard"),q=Object(E.a)("dashboard"),z=o()("span",{}),K=function(t){f()(n,t);var e=H(n);function n(t){var r;s()(this,n),r=e.call(this,t),O()(d()(r),"handleClick",(function(){for(var t,e=new Array(r.nArgs),n=0;n<r.nArgs;n++)e[n]=r.state[n];r.props.autoUpdate||r.context.log({id:r.id,type:F.b,value:e});(t=r.props).onGenerate.apply(t,e)})),O()(d()(r),"getCounter",(function(){return void 0===r._counter?r._counter=0:r._counter+=1,r._counter})),O()(d()(r),"handleFieldChange",(function(t,e){M("Setting ".concat(t," to ").concat(e));var n={};n[t]=e,r.setState(n,(function(){r.props.autoUpdate&&r.handleClick()}))})),O()(d()(r),"registerChildren",(function(t,e){return t?(M("Registering ".concat(w.a.Children.count(t)," children...")),w.a.Children.map(t,(function(t){if(w.a.isValidElement(t)){var e={},n=[];if(t.type===N.a||t.type===R.b||t.type===U.a||t.type===J.a||t.type===V.a||"CheckboxInput"===t.type.name||"NumberInput"===t.type.name||"SelectInput"===t.type.name||"SliderInput"===t.type.name||"TextInput"===t.type.name||"Input"===t.type.name){M("Encountering an input element...");var o=r.getCounter();e.onChange=function(e){r.handleFieldChange(o,e),t.props.onChange(e)}}return t.props&&t.props.children&&(n=r.registerChildren(t.props.children)),M("Clone child element with new properties..."),w.a.cloneElement.apply(w.a,[t,e].concat(i()(n)))}return t}))):null}));var o={};r.nArgs=0;return function t(e){e&&w.a.Children.forEach(e,(function(e){I()(e)||(A()(e.props,"defaultValue")&&(o[r.nArgs]=e.props.defaultValue,r.nArgs+=1),A()(e.props,"children")&&t(e.props.children))}))}(t.children),M("Initial state: %s",JSON.stringify(o)),r.id=t.id||q(t),r.state=o,r}return l()(n,[{key:"componentDidMount",value:function(){this.props.autoStart&&this.handleClick()}},{key:"render",value:function(){return this._counter=void 0,this._children=this.registerChildren(this.props.children),o()(D.a,{className:"dashboard ".concat(this.props.className),style:B({maxWidth:this.props.maxWidth},this.props.style)},void 0,this.props.title?o()(D.a.Header,{as:"h4"},void 0,this.props.title):null,o()(D.a.Body,{},void 0,o()("p",{},void 0,this.props.description),this._children,this.props.autoUpdate?z:o()(S.a,{variant:"primary",className:"dashboard-button",disabled:this.props.disabled,onClick:this.handleClick,block:!0},void 0,this.props.label||this.props.t("generate"))))}}]),n}(C.Component);K.defaultProps={autoStart:!0,autoUpdate:!1,description:"",disabled:!1,label:null,maxWidth:600,className:"",style:{},onGenerate:function(){},title:""},K.contextType=W.a,e.default=Object(P.a)("Dashboard")(K)}}]);