/*! For license information please see MultipleChoiceSurvey.d7aa40ed.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[767],{3693:function(e,t,a){"use strict";var n=a(3694);e.exports=n},3694:function(e,t,a){"use strict";var n=a(562),r=a(593);e.exports=function(e){var t,a,i,s,o,c,l;if(!n(e))throw new TypeError("invalid argument. First argument must be a collection. Value: `"+e+"`.");for(t=0,a=[],s=[],i=e.length,c=0;c<i;c++)o=e[c],t+=1,-1===(l=r(a,o))?(a.push(o),s.push([o,1,0])):s[l][1]+=1;for(i=s.length,c=0;c<i;c++)s[c][2]=s[c][1]/t;return s}},4031:function(e,t,a){"use strict";a.r(t);a(420);var n=a(407),r=a.n(n),i=a(414),s=a.n(i),o=a(415),c=a.n(o),l=a(424),u=a.n(l),d=a(417),v=a.n(d),f=a(418),b=a.n(f),p=a(416),m=a.n(p),y=a(412),h=a.n(y),w=(a(458),a(566),a(0)),O=(a(404),a(4096)),j=a(422),x=a(494),C=a(467),N=a(483),g=a(917),S=a(466),k=a(450),P=a.n(k),A=a(960),R=a.n(A),E=a(3693),K=a.n(E),I=a(531),D=a(505),q=a(642),z=a(576),B=a(988),G=a(465),M=a(464),F=a(421),L=a(439),T=a(744),J=function(e){return e.disabled?r()(T.a,{},void 0,e.answerContent):r()(T.a,{onClick:e.onAnswerSelected,active:e.active},void 0,e.answerContent)};a(330);function Q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=m()(e);if(t){var r=m()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return b()(this,a)}}Object(F.a)("Survey");var U=P()("isle:multiple-choice-survey"),V=Object(I.a)("multiple-choice-survey"),Y=function(e){v()(a,e);var t=Q(a);function a(e){var n;s()(this,a),n=t.call(this,e),h()(u()(n),"submitQuestion",(function(){var e=n.props.t,t=n.context;t.log({id:n.id,type:M.Bb,value:n.state.active,anonymous:n.props.anonymous},"members"),n.props.allowMultipleAnswers||n.setState({submitted:!0}),t.addNotification({title:e("submitted"),message:e("answer-submitted"),level:"success"}),n.props.onSubmit(n.state.active)})),h()(u()(n),"onData",(function(e){var t=n.props.t;U("MultipleChoiceSurvey is receiving data: "+JSON.stringify(e));var a,i=K()(e),s=i.map((function(e){return{x:n.props.answers[e[0]],y:e[1]}}));a=r()("table",{className:"table table-bordered"},void 0,r()("tr",{},void 0,r()("th",{},void 0,t("category")),r()("th",{},void 0,t("count")),r()("th",{},void 0,t("relative-frequency"))),i.map((function(e,t){return r()("tr",{},t,e.map((function(e,a){return 0===a?e=n.props.answers[e]:2===a&&(e=e.toFixed(3)),r()("td",{},"".concat(t,":").concat(a),e)})))}))),n.setState({data:s,freqTable:a})})),h()(u()(n),"renderAnswerOptionsSingle",(function(e,t){return r()(J,{no:t,answerContent:e,active:n.state.active===t,submitted:n.state.submitted,onAnswerSelected:function(){n.state.submitted||n.setState({active:t,answerSelected:!0})}},t)})),h()(u()(n),"renderAnswerOptionsMultiple",(function(e,t){return r()(J,{no:t,answerContent:e,active:n.state.active[t],submitted:n.state.submitted,onAnswerSelected:function(){if(!n.state.submitted){var e=n.state.active.slice();e[t]=!e[t],n.setState({active:e})}}},e)}));var i=e.multipleAnswers?new Array(e.answers.length):null;return n.id=e.id||V(e),n.state={data:[],submitted:!1,active:i,answerSelected:!1},n}return c()(a,[{key:"renderChart",value:function(){var e=this.props.t;return R()(this.state.data)?r()("h3",{},void 0,e("no-responses-yet")):r()(D.a,{data:[{x:this.state.data.map((function(e){return e.x})),y:this.state.data.map((function(e){return e.y})),type:"bar"}],layout:{width:400,height:300},removeButtons:!0})}},{key:"render",value:function(){var e,t=this.props,a=t.answers,n=t.multipleAnswers,i=t.question,s=t.t;return e=n?this.state.submitted:this.state.submitted||!this.state.answerSelected,r()(q.a,{user:!0,banner:r()("h2",{},void 0,s("sign-in"))},void 0,r()(S.a,{id:this.id,style:this.props.style},void 0,r()(S.a.Body,{style:{overflowY:"auto"}},void 0,r()(N.a,{},void 0,r()(C.a,{},void 0,r()(x.a,{md:6},void 0,r()(S.a,{body:!0,className:"multiple-choice-survey"},void 0,r()("p",{},void 0,r()("label",{},void 0,i)),n?r()("span",{},void 0,s("multiple-answers")):null,r()(g.a,{fill:!0},void 0,n?a.map(this.renderAnswerOptionsMultiple):a.map(this.renderAnswerOptionsSingle)),r()(j.a,{size:"small",variant:"success",block:!0,fill:!0,onClick:this.submitQuestion,disabled:e},void 0,this.state.submitted?"Submitted":"Submit"))),r()(x.a,{md:6},void 0,r()(B.a,{for:[this.id],onData:this.onData}),this.renderChart(),r()("p",{},void 0,this.state.freqTable)))),r()(z.a,{buttonLabel:s("responses"),id:this.id,data:{type:"factor",levels:this.props.answers},info:M.Bb}))))}}]),a}(w.Component);Y.defaultProps={question:"",allowMultipleAnswers:!1,anonymous:!1,answers:[],multipleAnswers:!1,style:{},onSubmit:function(){}},Y.contextType=G.a;t.default=Object(O.a)("Survey")(Object(L.a)(Y))},422:function(e,t,a){"use strict";var n=a(406),r=a(408),i=a(409),s=a.n(i),o=a(0),c=a.n(o),l=a(411),u=a(470),d=c.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.variant,o=e.size,d=e.active,v=e.className,f=e.block,b=e.type,p=e.as,m=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=Object(l.a)(a,"btn"),h=s()(v,y,d&&"active",i&&y+"-"+i,f&&y+"-block",o&&y+"-"+o);if(m.href)return c.a.createElement(u.a,Object(n.a)({},m,{as:p,ref:t,className:s()(h,m.disabled&&"disabled")}));t&&(m.ref=t),b?m.type=b:p||(m.type="button");var w=p||"button";return c.a.createElement(w,Object(n.a)({},m,{className:h}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=d},459:function(e,t,a){"use strict";a.d(t,"b",(function(){return i}));var n=a(0),r=a.n(n).a.createContext(null),i=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null};t.a=r},467:function(e,t,a){"use strict";var n=a(406),r=a(408),i=a(409),s=a.n(i),o=a(0),c=a.n(o),l=a(411),u=["xl","lg","md","sm","xs"],d=c.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,o=e.noGutters,d=e.as,v=void 0===d?"div":d,f=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),b=Object(l.a)(a,"row"),p=b+"-cols",m=[];return u.forEach((function(e){var t,a=f[e];delete f[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&m.push(""+p+n+"-"+t)})),c.a.createElement(v,Object(n.a)({ref:t},f,{className:s.a.apply(void 0,[i,b,o&&"no-gutters"].concat(m))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},483:function(e,t,a){"use strict";var n=a(406),r=a(408),i=a(409),s=a.n(i),o=a(0),c=a.n(o),l=a(411),u=c.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.fluid,o=e.as,u=void 0===o?"div":o,d=e.className,v=Object(r.a)(e,["bsPrefix","fluid","as","className"]),f=Object(l.a)(a,"container"),b="string"==typeof i?"-"+i:"-fluid";return c.a.createElement(u,Object(n.a)({ref:t},v,{className:s()(d,i?""+f+b:f)}))}));u.displayName="Container",u.defaultProps={fluid:!1},t.a=u},490:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);t.a=r},497:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);r.displayName="NavContext",t.a=r},511:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(e,t){return n(e.querySelectorAll(t))}},540:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(){return Object(n.useReducer)((function(e){return!e}),!1)[1]}},557:function(e,t,a){"use strict";var n=a(406),r=a(408),i=a(409),s=a.n(i),o=a(0),c=a.n(o),l=a(525),u=(a(536),a(497)),d=a(459),v=c.a.forwardRef((function(e,t){var a=e.active,i=e.className,v=e.eventKey,f=e.onSelect,b=e.onClick,p=e.as,m=Object(r.a)(e,["active","className","eventKey","onSelect","onClick","as"]),y=Object(d.b)(v,m.href),h=Object(o.useContext)(d.a),w=Object(o.useContext)(u.a),O=a;if(w){m.role||"tablist"!==w.role||(m.role="tab");var j=w.getControllerId(y),x=w.getControlledId(y);m["data-rb-event-key"]=y,m.id=j||m.id,m["aria-controls"]=x||m["aria-controls"],O=null==a&&null!=y?w.activeKey===y:a}"tab"===m.role&&(m.disabled&&(m.tabIndex=-1,m["aria-disabled"]=!0),m["aria-selected"]=O);var C=Object(l.a)((function(e){b&&b(e),null!=y&&(f&&f(y,e),h&&h(y,e))}));return c.a.createElement(p,Object(n.a)({},m,{ref:t,onClick:C,className:s()(i,O&&"active")}))}));v.defaultProps={disabled:!1},t.a=v},558:function(e,t,a){"use strict";var n=a(406),r=a(408),i=a(511),s=a(0),o=a.n(s),c=a(540),l=a(563),u=a(497),d=a(459),v=a(490),f=function(){},b=o.a.forwardRef((function(e,t){var a,b,p=e.as,m=void 0===p?"ul":p,y=e.onSelect,h=e.activeKey,w=e.role,O=e.onKeyDown,j=Object(r.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),x=Object(c.a)(),C=Object(s.useRef)(!1),N=Object(s.useContext)(d.a),g=Object(s.useContext)(v.a);g&&(w=w||"tablist",h=g.activeKey,a=g.getControlledId,b=g.getControllerId);var S=Object(s.useRef)(null),k=function(e){var t=S.current;if(!t)return null;var a=Object(i.a)(t,"[data-rb-event-key]:not(.disabled)"),n=t.querySelector(".active");if(!n)return null;var r=a.indexOf(n);if(-1===r)return null;var s=r+e;return s>=a.length&&(s=0),s<0&&(s=a.length-1),a[s]},P=function(e,t){null!=e&&(y&&y(e,t),N&&N(e,t))};Object(s.useEffect)((function(){if(S.current&&C.current){var e=S.current.querySelector("[data-rb-event-key].active");e&&e.focus()}C.current=!1}));var A=Object(l.a)(t,S);return o.a.createElement(d.a.Provider,{value:P},o.a.createElement(u.a.Provider,{value:{role:w,activeKey:Object(d.b)(h),getControlledId:a||f,getControllerId:b||f}},o.a.createElement(m,Object(n.a)({},j,{onKeyDown:function(e){var t;switch(O&&O(e),e.key){case"ArrowLeft":case"ArrowUp":t=k(-1);break;case"ArrowRight":case"ArrowDown":t=k(1);break;default:return}t&&(e.preventDefault(),P(t.dataset.rbEventKey,e),C.current=!0,x())},ref:A,role:w}))))}));t.a=b},576:function(e,t,a){"use strict";var n=a(546),r=a.n(n),i=a(0),s=a.n(i),o=(a(404),function(e){var t=e.children,a=r()(e,["children"]);return s.a.createElement("div",a,t)});o.defaultProps={className:"",style:{}},t.a=o},744:function(e,t,a){"use strict";var n=a(406),r=a(408),i=a(409),s=a.n(i),o=a(0),c=a.n(o),l=a(557),u=a(459),d=a(411),v={variant:void 0,active:!1,disabled:!1},f=c.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.active,v=e.disabled,f=e.className,b=e.variant,p=e.action,m=e.as,y=e.eventKey,h=e.onClick,w=Object(r.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);a=Object(d.a)(a,"list-group-item");var O=Object(o.useCallback)((function(e){if(v)return e.preventDefault(),void e.stopPropagation();h&&h(e)}),[v,h]);return v&&void 0===w.tabIndex&&(w.tabIndex=-1,w["aria-disabled"]=!0),c.a.createElement(l.a,Object(n.a)({ref:t},w,{eventKey:Object(u.b)(y,w.href),as:m||(p?w.href?"a":"button":"div"),onClick:O,className:s()(f,a,i&&"active",v&&"disabled",b&&a+"-"+b,p&&a+"-action")}))}));f.defaultProps=v,f.displayName="ListGroupItem",t.a=f},917:function(e,t,a){"use strict";var n=a(406),r=a(408),i=a(409),s=a.n(i),o=a(0),c=a.n(o),l=(a(536),a(492)),u=a(411),d=a(558),v=a(744),f={variant:void 0,horizontal:void 0},b=c.a.forwardRef((function(e,t){var a,i=Object(l.a)(e,{activeKey:"onSelect"}),o=i.className,v=i.bsPrefix,f=i.variant,b=i.horizontal,p=i.as,m=void 0===p?"div":p,y=Object(r.a)(i,["className","bsPrefix","variant","horizontal","as"]),h=Object(u.a)(v,"list-group");return a=b?!0===b?"horizontal":"horizontal-"+b:null,c.a.createElement(d.a,Object(n.a)({ref:t},y,{as:m,className:s()(o,h,f&&h+"-"+f,a&&h+"-"+a)}))}));b.defaultProps=f,b.displayName="ListGroup",b.Item=v.a,t.a=b}}]);