/*! For license information please see PropTest2Menu.ba67f1f5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[826],{2794:function(e,n,t){"use strict";var a=t(2795);e.exports=a},2795:function(e,n,t){"use strict";var a=t(475),o=t(423),i=t(634),r=t(426);e.exports=function(e,n){var t,s;if(!a(e))throw new TypeError("invalid argument. First argument must be a function. Value: `"+e+"`.");if(arguments.length<2)t=i;else if(!a(t=n))throw new TypeError("invalid argument. Hash function argument must be a function. Value: `"+t+"`.");return o(l,"cache",s={}),l;function l(){var n,a,o,i;for(n=new Array(arguments.length),i=0;i<arguments.length;i++)n[i]=arguments[i];return o=t(n).toString(),r(s,o)?s[o]:(a=e.apply(null,n),s[o]=a,a)}}},4109:function(e,n,t){"use strict";t(441),t(440),t(416),t(527),t(607);var a=t(455),o=t.n(a),i=t(553),r=t.n(i);n.a=function(e,n){for(var t=[],a=0;a<e.length;a++){var i=n[e[a]];if(i)for(var s=new Set,l=0;l<i.length;l++){var u=i[l];if(r()(u)||o()(u)||""===u||s.add(u),s.size>2)break;l===i.length-1&&t.push(e[a])}}return t}},486:function(e,n,t){"use strict";var a=t(407),o=t.n(a),i=(t(0),t(404),t(424)),r=t(513),s=t(511),l=t(507),u=t(546),c=o()(i.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,o()("div",{className:"fa fa-question"}));n.a=function(e){var n=o()(r.a,{id:"popover-positioned-right"},void 0,o()(s.a,{},void 0,e.title),o()(l.a,{},void 0,e.content));return o()(u.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:n},void 0,c)}},6377:function(e,n,t){"use strict";t.r(n);var a=t(407),o=t.n(a),i=t(456),r=t.n(i),s=t(0),l=(t(404),t(424)),u=t(465),c=t(493),d=t(476),f=t(490),v=t(508),g=t(494),p=t(470),h=t.n(p),b=t(2794),m=t.n(b),w=t(446),S=t.n(w),j=t(730),y=t.n(j),O=t(1366),C=t(944),T=t(462),V=t(486),k=t(4109),x=m()(C.a,(function(e){return e[1]})),q=o()(g.a,{raw:"\\alpha"}),D=function(e){var n=e.categorical,t=e.data,a=e.showDecision,i=e.t,g=Object(s.useState)([]),p=r()(g,2),b=p[0],m=p[1],w=Object(s.useState)(n[0]),j=r()(w,2),D=j[0],N=j[1],P=Object(s.useState)(b[0]),z=r()(P,2),A=z[0],E=z[1],H=Object(s.useState)(null),J=r()(H,2),B=J[0],F=J[1],Z=Object(s.useState)(null),G=r()(Z,2),I=G[0],K=G[1],L=Object(s.useState)(0),M=r()(L,2),Q=M[0],R=M[1],U=Object(s.useState)("two-sided"),W=r()(U,2),X=W[0],Y=W[1],$=Object(s.useState)(.05),_=r()($,2),ee=_[0],ne=_[1];Object(s.useEffect)((function(){if(S()(n)&&n.length>0){var e=t[n[0]];e?m(x(e,n[0])):m()}}),[n,t]);var te=o()(O.a,{data:t,showDecision:a,var1:D,var2:I,group:B,diff:Q,direction:X,alpha:ee,success:A}),ae=Object(k.a)(n,t);return o()(u.a,{style:{fontSize:"14px"}},void 0,o()(u.a.Header,{as:"h4"},void 0,i("Two-Sample Proportion Test"),o()(V.a,{title:i("Two-Sample Proportion Test"),content:i("Two-Sample Proportion Test-description")})),o()(u.a.Body,{},void 0,o()(d.a,{},void 0,o()(c.a,{md:6},void 0,o()(v.a,{legend:i("variable"),defaultValue:n[0],options:n,onChange:function(e){var n=t[e],a=Object(C.a)(n,e);y()(a),N(e),m(a),E(a[0])}})),o()(c.a,{md:6},void 0,o()(v.a,{legend:i("success"),defaultValue:b[0],options:b,onChange:E}))),o()(d.a,{},void 0,o()(c.a,{md:5},void 0,o()(v.a,{legend:i("groups"),options:ae,clearable:!0,onChange:function(e){F(e),K(null)}})),o()(c.a,{md:2},void 0,o()("p",{},void 0,i("or"))),o()(c.a,{md:5},void 0,o()(v.a,{legend:i("second-variable"),options:n.filter((function(e){return h()(b,e)})),clearable:!0,onChange:function(e){F(null),K(e)}}))),o()(f.b,{legend:i("difference-h0"),defaultValue:Q,min:0,max:1,step:"any",onChange:R}),o()(v.a,{legend:i("direction"),defaultValue:X,options:["less","greater","two-sided"],onChange:Y}),o()(f.b,{legend:o()("span",{},void 0,i("significance-level"),q),defaultValue:ee,min:0,max:1,step:"any",onChange:ne}),o()(l.a,{variant:"primary",block:!0,onClick:function(){if(D===B||D===I)return e.session.addNotification({title:i("action-required"),message:i("group-variable-must-be-different"),level:"warning",position:"tr"});B||I||e.session.addNotification({title:i("action-required"),message:i("select-grouping-or-second-variable",{var:D}),level:"warning",position:"tr"});var n=te;e.logAction(T.Z,{var1:D,group:B,var2:I,success:A,diff:Q,direction:X,alpha:ee,showDecision:a}),e.onCreated(n)},disabled:!I&&!B},void 0,i("calculate"))))};D.defaultProps={categorical:null,logAction:function(){},showDecision:!0},n.default=D}}]);