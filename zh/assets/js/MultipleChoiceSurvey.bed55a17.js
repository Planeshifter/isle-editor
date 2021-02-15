/*! For license information please see MultipleChoiceSurvey.bed55a17.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{1076:function(e,t,n){"use strict";var a=n(398),r=n(401),i=n(402),s=n.n(i),o=n(0),c=n.n(o),u=(n(568),n(471)),l=n(408),d=n(563),f=n(869),v={variant:void 0,horizontal:void 0},b=c.a.forwardRef((function(e,t){var n,i=Object(u.a)(e,{activeKey:"onSelect"}),o=i.className,f=i.bsPrefix,v=i.variant,b=i.horizontal,p=i.as,m=void 0===p?"div":p,y=Object(r.a)(i,["className","bsPrefix","variant","horizontal","as"]),h=Object(l.a)(f,"list-group");return n=b?!0===b?"horizontal":"horizontal-"+b:null,c.a.createElement(d.a,Object(a.a)({ref:t},y,{as:m,className:s()(o,h,v&&h+"-"+v,n&&h+"-"+n)}))}));b.defaultProps=v,b.displayName="ListGroup",b.Item=f.a,t.a=b},3781:function(e,t,n){"use strict";var a=n(3782);e.exports=a},3782:function(e,t,n){"use strict";var a=n(581),r=n(641);e.exports=function(e){var t,n,i,s,o,c,u;if(!a(e))throw new TypeError("invalid argument. First argument must be a collection. Value: `"+e+"`.");for(t=0,n=[],s=[],i=e.length,c=0;c<i;c++)o=e[c],t+=1,-1===(u=r(n,o))?(n.push(o),s.push([o,1,0])):s[u][1]+=1;for(i=s.length,c=0;c<i;c++)s[c][2]=s[c][1]/t;return s}},4108:function(e,t,n){"use strict";n.r(t);n(411),n(403),n(415);var a=n(400),r=n.n(a),i=n(407),s=n.n(i),o=n(410),c=n.n(o),u=n(420),l=n.n(u),d=n(413),f=n.n(d),v=n(414),b=n.n(v),p=n(412),m=n.n(p),y=n(404),h=n.n(y),w=n(0),O=(n(396),n(4125)),j=n(428),x=n(495),C=n(455),g=n(472),S=n(1076),N=n(465),k=n(443),A=n.n(k),P=n(1117),R=n.n(P),K=n(3781),E=n.n(K),D=n(600),I=n(514),q=n(698),z=n(818),M=n(1044),G=n(457),B=n(462),F=n(418),L=n(869),T=function(e){return e.disabled?r()(L.a,{},void 0,e.answerContent):r()(L.a,{onClick:e.onAnswerSelected,active:e.active},void 0,e.answerContent)};n(328);function J(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=m()(e);if(t){var r=m()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return b()(this,n)}}Object(F.a)("Survey");var Q=A()("isle:multiple-choice-survey"),U=Object(D.a)("multiple-choice-survey"),V=function(e){f()(n,e);var t=J(n);function n(e){var a;s()(this,n),a=t.call(this,e),h()(l()(a),"submitQuestion",(function(){var e=a.props.t,t=a.context;t.log({id:a.id,type:B.Bb,value:a.state.active,anonymous:a.props.anonymous},"members"),a.props.allowMultipleAnswers||a.setState({submitted:!0}),t.addNotification({title:e("submitted"),message:e("answer-submitted"),level:"success"}),a.props.onSubmit(a.state.active)})),h()(l()(a),"onData",(function(e){var t=a.props.t;Q("MultipleChoiceSurvey is receiving data: "+JSON.stringify(e));var n,i=E()(e),s=i.map((function(e){return{x:a.props.answers[e[0]],y:e[1]}}));n=r()("table",{className:"table table-bordered"},void 0,r()("tr",{},void 0,r()("th",{},void 0,t("category")),r()("th",{},void 0,t("count")),r()("th",{},void 0,t("relative-frequency"))),i.map((function(e,t){return r()("tr",{},t,e.map((function(e,n){return 0===n?e=a.props.answers[e]:2===n&&(e=e.toFixed(3)),r()("td",{},"".concat(t,":").concat(n),e)})))}))),a.setState({data:s,freqTable:n})})),h()(l()(a),"renderAnswerOptionsSingle",(function(e,t){return r()(T,{no:t,answerContent:e,active:a.state.active===t,submitted:a.state.submitted,onAnswerSelected:function(){a.state.submitted||a.setState({active:t,answerSelected:!0})}},t)})),h()(l()(a),"renderAnswerOptionsMultiple",(function(e,t){return r()(T,{no:t,answerContent:e,active:a.state.active[t],submitted:a.state.submitted,onAnswerSelected:function(){if(!a.state.submitted){var e=a.state.active.slice();e[t]=!e[t],a.setState({active:e})}}},e)}));var i=e.multipleAnswers?new Array(e.answers.length):null;return a.id=e.id||U(e),a.state={data:[],submitted:!1,active:i,answerSelected:!1},a}return c()(n,[{key:"renderChart",value:function(){var e=this.props.t;return R()(this.state.data)?r()("h3",{},void 0,e("no-responses-yet")):r()(I.a,{data:[{x:this.state.data.map((function(e){return e.x})),y:this.state.data.map((function(e){return e.y})),type:"bar"}],layout:{width:400,height:300},removeButtons:!0})}},{key:"render",value:function(){var e,t=this.props,n=t.answers,a=t.multipleAnswers,i=t.question,s=t.t;return e=a?this.state.submitted:this.state.submitted||!this.state.answerSelected,r()(q.a,{user:!0,banner:r()("h2",{},void 0,s("sign-in"))},void 0,r()(N.a,{id:this.id,style:this.props.style},void 0,r()(N.a.Body,{style:{overflowY:"auto"}},void 0,r()(g.a,{},void 0,r()(C.a,{},void 0,r()(x.a,{md:6},void 0,r()(N.a,{body:!0,className:"multiple-choice-survey"},void 0,r()("p",{},void 0,r()("label",{},void 0,i)),a?r()("span",{},void 0,s("multiple-answers")):null,r()(S.a,{fill:!0},void 0,a?n.map(this.renderAnswerOptionsMultiple):n.map(this.renderAnswerOptionsSingle)),r()(j.a,{size:"small",variant:"success",block:!0,fill:!0,onClick:this.submitQuestion,disabled:e},void 0,this.state.submitted?"Submitted":"Submit"))),r()(x.a,{md:6},void 0,r()(M.a,{for:[this.id],onData:this.onData}),this.renderChart(),r()("p",{},void 0,this.state.freqTable)))),r()(z.a,{buttonLabel:s("responses"),id:this.id,data:{type:"factor",levels:this.props.answers},info:B.Bb}))))}}]),n}(w.Component);V.defaultProps={question:"",allowMultipleAnswers:!1,anonymous:!1,answers:[],multipleAnswers:!1,style:{},onSubmit:function(){}},V.contextType=G.a;t.default=Object(O.a)("Survey")(V)},446:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var a=n(0),r=n.n(a).a.createContext(null),i=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null};t.a=r},455:function(e,t,n){"use strict";var a=n(398),r=n(401),i=n(402),s=n.n(i),o=n(0),c=n.n(o),u=n(408),l=["xl","lg","md","sm","xs"],d=c.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,o=e.noGutters,d=e.as,f=void 0===d?"div":d,v=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),b=Object(u.a)(n,"row"),p=b+"-cols",m=[];return l.forEach((function(e){var t,n=v[e];delete v[e];var a="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"==typeof n?n.cols:n)&&m.push(""+p+a+"-"+t)})),c.a.createElement(f,Object(a.a)({ref:t},v,{className:s.a.apply(void 0,[i,b,o&&"no-gutters"].concat(m))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},468:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(null);t.a=r},472:function(e,t,n){"use strict";var a=n(398),r=n(401),i=n(402),s=n.n(i),o=n(0),c=n.n(o),u=n(408),l=c.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.fluid,o=e.as,l=void 0===o?"div":o,d=e.className,f=Object(r.a)(e,["bsPrefix","fluid","as","className"]),v=Object(u.a)(n,"container"),b="string"==typeof i?"-"+i:"-fluid";return c.a.createElement(l,Object(a.a)({ref:t},f,{className:s()(d,i?""+v+b:v)}))}));l.displayName="Container",l.defaultProps={fluid:!1},t.a=l},480:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(null);r.displayName="NavContext",t.a=r},499:function(e,t,n){"use strict";var a=n(0),r=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};t.a=function(e,t){return Object(a.useMemo)((function(){return function(e,t){var n=r(e),a=r(t);return function(e){n&&n(e),a&&a(e)}}(e,t)}),[e,t])}},501:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(e,t){return a(e.querySelectorAll(t))}},549:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0);function r(){return Object(a.useReducer)((function(e){return!e}),!1)[1]}},562:function(e,t,n){"use strict";var a=n(398),r=n(401),i=n(402),s=n.n(i),o=n(0),c=n.n(o),u=n(577),l=(n(568),n(480)),d=n(446),f=c.a.forwardRef((function(e,t){var n=e.active,i=e.className,f=e.eventKey,v=e.onSelect,b=e.onClick,p=e.as,m=Object(r.a)(e,["active","className","eventKey","onSelect","onClick","as"]),y=Object(d.b)(f,m.href),h=Object(o.useContext)(d.a),w=Object(o.useContext)(l.a),O=n;if(w){m.role||"tablist"!==w.role||(m.role="tab");var j=w.getControllerId(y),x=w.getControlledId(y);m["data-rb-event-key"]=y,m.id=j||m.id,m["aria-controls"]=x||m["aria-controls"],O=null==n&&null!=y?w.activeKey===y:n}"tab"===m.role&&(m.disabled&&(m.tabIndex=-1,m["aria-disabled"]=!0),m["aria-selected"]=O);var C=Object(u.a)((function(e){b&&b(e),null!=y&&(v&&v(y,e),h&&h(y,e))}));return c.a.createElement(p,Object(a.a)({},m,{ref:t,onClick:C,className:s()(i,O&&"active")}))}));f.defaultProps={disabled:!1},t.a=f},563:function(e,t,n){"use strict";var a=n(398),r=n(401),i=n(501),s=n(0),o=n.n(s),c=n(549),u=n(499),l=n(480),d=n(446),f=n(468),v=function(){},b=o.a.forwardRef((function(e,t){var n,b,p=e.as,m=void 0===p?"ul":p,y=e.onSelect,h=e.activeKey,w=e.role,O=e.onKeyDown,j=Object(r.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),x=Object(c.a)(),C=Object(s.useRef)(!1),g=Object(s.useContext)(d.a),S=Object(s.useContext)(f.a);S&&(w=w||"tablist",h=S.activeKey,n=S.getControlledId,b=S.getControllerId);var N=Object(s.useRef)(null),k=function(e){var t=N.current;if(!t)return null;var n=Object(i.a)(t,"[data-rb-event-key]:not(.disabled)"),a=t.querySelector(".active");if(!a)return null;var r=n.indexOf(a);if(-1===r)return null;var s=r+e;return s>=n.length&&(s=0),s<0&&(s=n.length-1),n[s]},A=function(e,t){null!=e&&(y&&y(e,t),g&&g(e,t))};Object(s.useEffect)((function(){if(N.current&&C.current){var e=N.current.querySelector("[data-rb-event-key].active");e&&e.focus()}C.current=!1}));var P=Object(u.a)(t,N);return o.a.createElement(d.a.Provider,{value:A},o.a.createElement(l.a.Provider,{value:{role:w,activeKey:Object(d.b)(h),getControlledId:n||v,getControllerId:b||v}},o.a.createElement(m,Object(a.a)({},j,{onKeyDown:function(e){var t;switch(O&&O(e),e.key){case"ArrowLeft":case"ArrowUp":t=k(-1);break;case"ArrowRight":case"ArrowDown":t=k(1);break;default:return}t&&(e.preventDefault(),A(t.dataset.rbEventKey,e),C.current=!0,x())},ref:P,role:w}))))}));t.a=b},869:function(e,t,n){"use strict";var a=n(398),r=n(401),i=n(402),s=n.n(i),o=n(0),c=n.n(o),u=n(562),l=n(446),d=n(408),f={variant:void 0,active:!1,disabled:!1},v=c.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.active,f=e.disabled,v=e.className,b=e.variant,p=e.action,m=e.as,y=e.eventKey,h=e.onClick,w=Object(r.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);n=Object(d.a)(n,"list-group-item");var O=Object(o.useCallback)((function(e){if(f)return e.preventDefault(),void e.stopPropagation();h&&h(e)}),[f,h]);return f&&void 0===w.tabIndex&&(w.tabIndex=-1,w["aria-disabled"]=!0),c.a.createElement(u.a,Object(a.a)({ref:t},w,{eventKey:Object(l.b)(y,w.href),as:m||(p?w.href?"a":"button":"div"),onClick:O,className:s()(v,n,i&&"active",f&&"disabled",b&&n+"-"+b,p&&n+"-action")}))}));v.defaultProps=f,v.displayName="ListGroupItem",t.a=v}}]);