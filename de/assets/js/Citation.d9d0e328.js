/*! For license information please see Citation.d9d0e328.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{2661:function(t,n,r){"use strict";var e=r(2662);t.exports=e},2662:function(t,n,r){"use strict";var e=r(438).isPrimitive,u=r(580),i=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;t.exports=function(t){if(!e(t))throw new TypeError("invalid argument. Must provide a string primitive. Value: `"+t+"`.");return u(t,i,"$1")}},6408:function(t,n,r){"use strict";r.r(n);r(411),r(403),r(415),r(660);var e=r(400),u=r.n(e),i=r(407),o=r.n(i),a=r(410),s=r.n(a),f=r(413),c=r.n(f),p=r(414),l=r.n(p),v=r(412),d=r.n(v),h=r(0),y=(r(396),r(4125)),b=r(2661),g=r.n(b),w=r(470),x=r.n(w),k=r(457),m=r(418);function R(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,e=d()(t);if(n){var u=d()(this).constructor;r=Reflect.construct(e,arguments,u)}else r=e.apply(this,arguments);return l()(this,r)}}Object(m.a)("Citation");var O={background:"red",color:"white"};function C(t){return t=g()(t),x()(t,",")?t.substring(0,t.indexOf(",")):t.substring(t.lastIndexOf(" ")+1)}var P=function(t){c()(r,t);var n=R(r);function r(){return o()(this,r),n.apply(this,arguments)}return s()(r,[{key:"render",value:function(){var t=this.props.t,n=this.context;if(!n.config.references)return u()("span",{style:O},void 0,t("no-references"));var r=n.config.references[this.props.citeKey];if(!r)return u()("span",{style:O},void 0,t("key-not-found"));if(!r.author)return u()("span",{style:O},void 0,t("no-author"));var e=r.author.split("and"),i="";i=e.length>2?C(e[0])+" et al.":e.length>1?C(e[0])+t("and")+C(e[1]):C(e[0]);var o=this.props.label?", ".concat(this.props.label):"";return this.props.parens?u()("span",{},void 0,"(",i,", ",r.year,o,")"):u()("span",{},void 0,i," (",r.year,o,")")}}]),r}(h.Component);P.defaultProps={parens:!1,label:""},P.contextType=k.a,n.default=Object(y.a)("Citation")(P)}}]);