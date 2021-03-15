/*! For license information please see MatchListQuestion.ba032201.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[729],{1009:function(t,e,n){"use strict";var i=n(425),r=n(636),o=n(431).isPrimitive,s=n(514),a=n(457),c=n(712).factory,l=n(1411),u=n(1412);t.exports=function(t){var e,n,f;if(e=s(l),arguments.length&&(f=u(e,t)))throw f;return n=t&&t.seed?c({seed:t.seed}):c(),i(p,"seed",n.seed),i(p,"PRNG",n),n=n.normalized,p;function p(t,i){var c,l,f,p,b,d,v,m,h,y;if(!r(t))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+t+"`.");if(arguments.length>1&&(b=u(p={},i)))throw b;for(f=p&&p.copy?p.copy:e.copy,(c=o(t))&&(t=t.split(""),f="none"),l=0,"shallow"===f?l+=1:"deep"===f&&(l+=2),m=t.length,d=s(t,l),h=m-1;h>0;h--)y=a(n()*(h+1)),v=d[h],d[h]=d[y],d[y]=v;return c&&(d=t.join("")),d}}},1337:function(t,e,n){"use strict";var i=n(425),r=n(1410);i(r,"factory",n(1009)),t.exports=r},1410:function(t,e,n){"use strict";var i=n(1009)();t.exports=i},1411:function(t){t.exports=JSON.parse('{"copy":"shallow"}')},1412:function(t,e,n){"use strict";var i=n(426),r=n(431).isPrimitive,o=n(448);t.exports=function(t,e){if(!o(e))return new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(i(e,"copy")){if(t.copy=e.copy,!r(t.copy))return new TypeError("invalid option. `copy` option must be a string primitive. Option: `"+t.copy+"`.");if("deep"!==t.copy&&"shallow"!==t.copy&&"none"!==t.copy)return new TypeError("invalid option. `copy` option must be `deep`, `shallow` or `none`. Value: `"+t.copy+"`.")}return null}},1414:function(t,e,n){"use strict";var i=n(405),r=Object(i.a)((function(){return n.e(1026).then(n.bind(null,2798))}));e.a=r},4030:function(t,e,n){"use strict";n.r(e);n(437),n(434),n(478),n(438);var i=n(407),r=n.n(i),o=n(412),s=n.n(o),a=n(456),c=n.n(a),l=(n(566),n(458),n(469),n(0)),u=(n(404),n(450)),f=n.n(u),p=n(1969),b=n(454),d=n(422),v=n(1337),m=n.n(v),h=n(431),y=n(1131),g=n(531),O=n(1414),j=n(602),w=n(693),k=n(484),N=n(576),P=n(618),S=n(1274),x=n(821),C=n(465),q=n(464),E=n(421),R=n(439),D=(n(436),n(423),n(420),n(414)),L=n.n(D),M=n(415),T=n.n(M),z=n(417),J=n.n(z),F=n(418),V=n.n(F),Q=n(416),Y=n.n(Q);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=Y()(t);if(e){var r=Y()(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return V()(this,n)}}var A=function(t){J()(n,t);var e=_(n);function n(t){return L()(this,n),e.call(this,t)}return T()(n,[{key:"render",value:function(){var t=this,e=this.props.shuffle?m()(this.props.options):this.props.options;this.options=this.options||e;var n=this.props,i=n.active,o=n.onSelect,s=n.answers;return r()("ul",{className:"match-list-question-ul"},void 0,this.options.map((function(e,n){if(!e)return null;var a=s.filter((function(t){return t.a===e||t.b===e})),c={};a[0]?c.backgroundColor=a[0].color:c.backgroundColor=e===i?"gainsboro":t.props.baseColor;var l=function(){return o(e)};return r()("div",{role:"button",tabIndex:0,onClick:l,onKeyPress:l},n,r()("li",{className:"match-list-question-item",style:c},void 0,e))})))}}]),n}(l.Component);A.defaultProps={active:null,baseColor:"transparent"};var B=A;n(328);function G(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function I(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?G(Object(n),!0).forEach((function(e){s()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}Object(E.a)("MatchListQuestion");var K=f()("isle:match-list-question"),H=Object(g.a)("match-list-question");function U(t){for(var e=y.m().domain([1,t]).interpolate(y.j).range([y.l("violet"),y.l("yellow")]),n=new Array(t),i=0;i<t;i++)n[i]=e(i);return m()(n)}var W=function(t){var e=t.question,n=t.elements,i=t.hints,o=t.submissionMsg,s=t.resubmissionMsg,a=t.disableSubmitNotification,u=t.onSubmit,f=t.until,v=Object(l.useRef)(t.id||H(t)),m=Object(l.useContext)(C.a),y=Object(p.a)("MatchListQuestion").t,g=Object(l.useState)(null),E=c()(g,2),R=E[0],D=E[1],L=Object(l.useState)(null),M=c()(L,2),T=M[0],z=M[1],J=Object(l.useState)(t.colorScale?t.colorScale:U(2*n.length)),F=c()(J,2),V=F[0],Q=F[1],Y=Object(l.useState)([]),_=c()(Y,2),A=_[0],G=_[1],W=Object(l.useState)(null),X=c()(W,2),Z=X[0],$=X[1],tt=Object(l.useState)(!1),et=c()(tt,2),nt=et[0],it=et[1];Object(l.useEffect)((function(){if(R&&T){var t=A.slice(),e=V.slice();t.push({a:R,b:T,color:e.pop()}),D(null),z(null),G(t),Q(e)}}),[R,T,A,V]);var rt=Object(l.useCallback)((function(t){K("Logging hint..."),m.log({id:v.current,type:q.vb,value:t})}),[m]),ot=Object(l.useCallback)((function(){nt?m.addNotification({title:y("answer-resubmitted"),message:s,level:"info"}):m.addNotification({title:y("answer-submitted"),message:o,level:"info"})}),[m,o,s,nt,y]),st=Object(l.useCallback)((function(){a||ot(),it(!0);var t=A.map((function(t){return{a:t.a,b:t.b}}));m.log({id:v.current,type:q.wb,value:JSON.stringify(t)}),u(t)}),[A,a,m,ot,u]),at=Object(l.useCallback)((function(t){return f&&m.startTime>f?r()("span",{className:"title",style:{marginLeft:4}},void 0,y("question-closed")):r()(k.a,{id:"".concat(v.current,"_tooltip"),tooltip:y("submit-tooltip")},void 0,r()("div",{style:{display:"inline-block"}},void 0,r()(d.a,{className:"submit-button",variant:"primary",size:"sm",onClick:st,style:{pointerEvents:t?"none":null},disabled:t},void 0,y(nt?"resubmit":"submit"))))}),[m,st,nt,y,f]);if(n.some((function(t){return!t.a&&!t.b})))return r()(b.a,{variant:"danger"},void 0,y("expect-a-or-b-for-each-element"));for(var ct=i.length,lt=r()(O.a,{onClick:function(){var e,n=t.elements,i=t.colorScale;e=i||U(2*n.length),m.log({id:v.current,type:q.xb,value:null}),Z?($(null),G(Z)):($(A),G(n.map((function(t,n){return t.a&&t.b?I(I({},t),{},{color:e[n]}):t}))))},disabled:!nt}),ut=[],ft=[],pt=0,bt=0;bt<n.length;bt++){var dt=n[bt],vt=dt.a,mt=dt.b;ut.push(vt||null),ft.push(mt||null),vt&&mt&&(pt+=1)}var ht=A.length!==pt;return r()("div",{id:v.current,className:"match-list-question-container ".concat(t.className),style:t.style},void 0,Object(h.isPrimitive)(e)?r()(S.a,{inline:!0,className:"question",raw:e}):r()("span",{className:"question"},void 0,e),r()("i",{style:{fontSize:"0.8rem"}},void 0,y("instructions",{complete:pt})),r()("div",{className:"match-list-question-lists"},void 0,r()(B,{options:ut,onSelect:function(t){var e=V.slice();G(A.filter((function(n){return n.a!==t&&n.b!==t||e.push(n.color),n.a!==t&&n.b!==t}))),Q(e),D(t)},answers:A,active:R,shuffle:"left"===t.shuffle||"both"===t.shuffle}),r()(B,{options:ft,onSelect:function(t){var e=V.slice();G(A.filter((function(n){return n.a!==t&&n.b!==t||e.push(n.color),n.a!==t&&n.b!==t}))),Q(e),z(t)},answers:A,active:T,baseColor:"rgb(250,250,255)",shuffle:"right"===t.shuffle||"both"===t.shuffle})),r()("div",{className:"match-list-question-controls"},void 0,at(ht),t.provideFeedback?lt:null,ct>0?r()(w.a,{onClick:rt,hints:t.hints,placement:t.hintPlacement}):null,t.chat?r()("div",{style:{display:"inline-block",marginLeft:"4px"}},void 0,r()(j.a,{for:v.current})):null,r()(N.a,{buttonLabel:y("answers"),info:q.wb,id:v.current,data:{type:"matches",left:t.elements.map((function(t){return t.a})),right:t.elements.map((function(t){return t.b})),question:t.question,solution:t.elements},points:t.points})),t.feedback?r()(P.a,{style:{marginTop:"5px",marginRight:"8px"},id:v.current+"_feedback"}):null,r()(x.a,{for:v.current,points:t.points}))};W.defaultProps={question:"",elements:[],hints:[],hintPlacement:"bottom",provideFeedback:!0,feedback:!0,chat:!1,colorScale:null,shuffle:"both",disableSubmitNotification:!1,submissionMsg:"You have successfully submitted your answer.",resubmissionMsg:"You have successfully re-submitted your answer.",until:null,points:10,className:"",style:{},onSubmit:function(){}};e.default=Object(R.a)(W)},422:function(t,e,n){"use strict";var i=n(406),r=n(408),o=n(409),s=n.n(o),a=n(0),c=n.n(a),l=n(411),u=n(470),f=c.a.forwardRef((function(t,e){var n=t.bsPrefix,o=t.variant,a=t.size,f=t.active,p=t.className,b=t.block,d=t.type,v=t.as,m=Object(r.a)(t,["bsPrefix","variant","size","active","className","block","type","as"]),h=Object(l.a)(n,"btn"),y=s()(p,h,f&&"active",o&&h+"-"+o,b&&h+"-block",a&&h+"-"+a);if(m.href)return c.a.createElement(u.a,Object(i.a)({},m,{as:v,ref:e,className:s()(y,m.disabled&&"disabled")}));e&&(m.ref=e),d?m.type=d:v||(m.type="button");var g=v||"button";return c.a.createElement(g,Object(i.a)({},m,{className:y}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1},e.a=f},576:function(t,e,n){"use strict";var i=n(546),r=n.n(i),o=n(0),s=n.n(o),a=(n(404),function(t){var e=t.children,n=r()(t,["children"]);return s.a.createElement("div",n,e)});a.defaultProps={className:"",style:{}},e.a=a},602:function(t,e,n){"use strict";var i=n(405),r=Object(i.a)((function(){return n.e(212).then(n.bind(null,878))}));e.a=r},693:function(t,e,n){"use strict";var i=n(405),r=Object(i.a)((function(){return n.e(397).then(n.bind(null,1023))}));e.a=r},821:function(t,e,n){"use strict";var i=n(405),r=Object(i.a)((function(){return Promise.all([n.e(0),n.e(370)]).then(n.bind(null,1360))}));e.a=r}}]);