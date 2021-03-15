(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{3681:function(e,t,n){"use strict";n.r(t);n(420),n(437),n(434),n(469),n(478),n(438);var r=n(407),a=n.n(r),i=n(785),o=n.n(i),s=n(414),c=n.n(s),p=n(415),l=n.n(p),u=n(424),d=n.n(u),h=n(417),f=n.n(h),b=n(418),y=n.n(b),v=n(416),m=n.n(v),g=n(412),O=n.n(g),C=(n(458),n(482),n(0)),j=n.n(C),w=(n(404),n(450)),k=n.n(w),P=n(4096),x=n(422),N=n(466),S=n(545),E=n.n(S),I=n(426),A=n.n(I),D=n(531),R=n(544),_=n(489),B=n(507),U=n(575),J=n(755),T=n(783),V=n(1447),W=n(465),z=n(464),F=n(421),G=n(439);n(309);function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){O()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var a=m()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return y()(this,n)}}Object(F.a)("Dashboard");var K=k()("isle:dashboard"),L=Object(D.a)("dashboard"),Q=a()("span",{}),X=function(e){f()(n,e);var t=q(n);function n(e){var r;c()(this,n),r=t.call(this,e),O()(d()(r),"handleClick",(function(){for(var e,t=new Array(r.nArgs),n=0;n<r.nArgs;n++)t[n]=r.state[n];r.props.autoUpdate||r.context.log({id:r.id,type:z.b,value:t});(e=r.props).onGenerate.apply(e,t)})),O()(d()(r),"getCounter",(function(){return void 0===r._counter?r._counter=0:r._counter+=1,r._counter})),O()(d()(r),"handleFieldChange",(function(e,t){K("Setting ".concat(e," to ").concat(t));var n={};n[e]=t,r.setState(n,(function(){r.props.autoUpdate&&r.handleClick()}))})),O()(d()(r),"registerChildren",(function(e,t){return e?(K("Registering ".concat(j.a.Children.count(e)," children...")),j.a.Children.map(e,(function(e){if(j.a.isValidElement(e)){var t={},n=[];if(e.type===R.a||e.type===_.b||e.type===B.a||e.type===U.a||e.type===J.a||e.type===T.a||e.type===V.a||"CheckboxInput"===e.type.name||"NumberInput"===e.type.name||"SelectInput"===e.type.name||"SliderInput"===e.type.name||"TextInput"===e.type.name||"TextArea"===e.type.name||"Input"===e.type.name||"ProportionsInput"===e.type.name){K("Encountering an input element...");var a=r.getCounter();t.onChange=function(t){r.handleFieldChange(a,t),e.props.onChange(t)}}return e.props&&e.props.children&&(n=r.registerChildren(e.props.children)),K("Clone child element with new properties..."),j.a.cloneElement.apply(j.a,[e,t].concat(o()(n)))}return e}))):null}));var a={};r.nArgs=0;return function e(t){t&&j.a.Children.forEach(t,(function(t){E()(t)||(A()(t.props,"defaultValue")&&(a[r.nArgs]=t.props.defaultValue,r.nArgs+=1),A()(t.props,"children")&&e(t.props.children))}))}(e.children),K("Initial state: %s",JSON.stringify(a)),r.id=e.id||L(e),r.state=a,r}return l()(n,[{key:"componentDidMount",value:function(){this.props.autoStart&&this.handleClick()}},{key:"render",value:function(){return this._counter=void 0,this._children=this.registerChildren(this.props.children),a()(N.a,{className:"dashboard ".concat(this.props.className),style:M({maxWidth:this.props.maxWidth},this.props.style)},void 0,this.props.title?a()(N.a.Header,{as:"h4"},void 0,this.props.title):null,a()(N.a.Body,{},void 0,a()("p",{},void 0,this.props.description),this._children,this.props.autoUpdate?Q:a()(x.a,{variant:"primary",className:"dashboard-button",disabled:this.props.disabled,onClick:this.handleClick,block:!0},void 0,this.props.label||this.props.t("generate"))))}}]),n}(C.Component);X.defaultProps={autoStart:!0,autoUpdate:!1,description:"",disabled:!1,label:null,maxWidth:600,className:"",style:{},onGenerate:function(){},title:""},X.contextType=W.a,t.default=Object(P.a)("Dashboard")(Object(G.a)(X))},422:function(e,t,n){"use strict";var r=n(406),a=n(408),i=n(409),o=n.n(i),s=n(0),c=n.n(s),p=n(411),l=n(470),u=c.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.variant,s=e.size,u=e.active,d=e.className,h=e.block,f=e.type,b=e.as,y=Object(a.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),v=Object(p.a)(n,"btn"),m=o()(d,v,u&&"active",i&&v+"-"+i,h&&v+"-block",s&&v+"-"+s);if(y.href)return c.a.createElement(l.a,Object(r.a)({},y,{as:b,ref:t,className:o()(m,y.disabled&&"disabled")}));t&&(y.ref=t),f?y.type=f:b||(y.type="button");var g=b||"button";return c.a.createElement(g,Object(r.a)({},y,{className:m}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=u}}]);