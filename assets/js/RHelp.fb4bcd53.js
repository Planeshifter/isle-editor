(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{501:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function o(t,n){return r(t.querySelectorAll(n))}},610:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(0);function o(){return Object(r.useState)(null)}},639:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(644),o=e(0),c=function(t){var n;return"undefined"==typeof document?null:null==t?Object(r.a)().body:("function"==typeof t&&(t=t()),t&&"current"in t&&(t=t.current),(null==(n=t)?void 0:n.nodeType)&&t||null)};function u(t,n){var e=Object(o.useState)((function(){return c(t)})),r=e[0],u=e[1];if(!r){var i=c(t);i&&u(i)}return Object(o.useEffect)((function(){n&&r&&n(r)}),[n,r]),Object(o.useEffect)((function(){var n=c(t);n!==r&&u(n)}),[t,r]),r}},6461:function(t,n,e){"use strict";e.r(n);e(411),e(403),e(415);var r=e(400),o=e.n(r),c=e(407),u=e.n(c),i=e(410),s=e.n(i),a=e(420),f=e.n(a),l=e(413),d=e.n(l),p=e(414),v=e.n(p),b=e(412),h=e.n(b),y=e(404),m=e.n(y),O=e(0),j=(e(396),e(4125)),R=e(428),w=e(672),S=e(457),M=e(418);e(345);function k(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=h()(t);if(n){var o=h()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return v()(this,e)}}Object(M.a)("R");var x=function(t){d()(e,t);var n=k(e);function e(t){var r;return u()(this,e),r=n.call(this,t),m()(f()(r),"hideModal",(function(){r.setState({visible:!1})})),m()(f()(r),"showModal",(function(){var t=r.props.func||r.props.children;""===r.state.body?r.context.getRHelp(r.props.library,t,(function(t,n,e){t||r.setState({body:e,visible:!0})})):r.setState({visible:!r.state.visible})})),r.state={visible:r.props.visible,body:""},r}return s()(e,[{key:"render",value:function(){var t=this.props.t;return o()("span",{role:"button",tabIndex:0,className:"RHelp",onClick:this.showModal,onKeyPress:this.showModal},void 0,o()(w.a,{backdrop:!1,show:this.state.visible,title:t("r-help"),onHide:this.hideModal,className:"r-help-modal",enforceFocus:!1},void 0,o()(w.a.Header,{closeButton:!0},void 0,o()(w.a.Title,{id:"contained-modal-title-lg"},void 0,t("r-help"))),o()(w.a.Body,{className:"r-help-modal-body"},void 0,o()("span",{dangerouslySetInnerHTML:{__html:this.state.body}})),o()(w.a.Footer,{},void 0,o()(R.a,{onClick:this.hideModal},void 0,t("close")))),o()("code",{style:{cursor:"pointer"}},void 0,this.props.children||this.props.func))}}]),e}(O.Component);x.defaultProps={func:"",library:"base",visible:!1},x.contextType=S.a,n.default=Object(j.a)("R")(x)},703:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(0);function o(t){var n,e,o=(n=t,(e=Object(r.useRef)(n)).current=n,e);Object(r.useEffect)((function(){return function(){return o.current()}}),[])}},716:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(0);function o(){var t=Object(r.useRef)(!0),n=Object(r.useRef)((function(){return t.current}));return Object(r.useEffect)((function(){return function(){t.current=!1}}),[]),n.current}},717:function(t,n,e){"use strict";function r(t,n){return t.contains?t.contains(n):t.compareDocumentPosition?t===n||!!(16&t.compareDocumentPosition(n)):void 0}e.d(n,"a",(function(){return r}))},808:function(t,n,e){"use strict";function r(t,n){return t.classList?!!n&&t.classList.contains(n):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+n+" ")}e.d(n,"a",(function(){return r}))},809:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(0);function o(t){var n=Object(r.useRef)(null);return Object(r.useEffect)((function(){n.current=t})),n.current}}}]);