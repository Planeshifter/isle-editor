(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{6509:function(e,n,t){"use strict";t.r(n);t(437),t(433),t(425),t(424),t(403),t(434);var r=t(404),o=t.n(r),i=t(400),a=t.n(i),c=t(453),u=t.n(c),s=t(0),l=t.n(s),p=(t(396),t(443)),b=t.n(p),f=t(4125),m=t(449),d=t(428),O=t(589),v=t.n(O),g=t(457),j=t(439),y=t.n(j);var h=function(e){return y()(e)&&e.props&&e.props.tagName&&e.props.startColumn&&e.props.endColumn&&e.props.startLineNumber&&e.props.endLineNumber},w=t(418);t(339);function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}Object(w.a)("QuestionForm");var k=b()("isle:question-form"),C=function(e){var n,t=e.buttonLabel,r=e.onSubmit,i=e.children,c=e.t,p=Object(s.useContext)(g.a),b=Object(s.useState)({}),f=u()(b,2),O=f[0],j=f[1];if(!i)return a()(m.a,{variant:"danger"},void 0,c("missing-children"));var y=function(e,n){return l.a.cloneElement(e,{disableSubmitNotification:!0,onChange:function(){var e=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach((function(n){o()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},O);e[n]=!0,j(e)},key:n})},w=l.a.Children.map(i,(function(e,n){return v()(e)?e:h(e)?(k("Encountered a line wrapper, go one level deeper..."),l.a.cloneElement(e,{children:y(e.props.children,n),key:n})):y(e,n)})),C=0;for(var E in O)O[E]&&(C+=1);var N=C!==w.length&&!p.isOwner();return l.a.createElement("div",{ref:function(e){n=e},className:"question-form"},w,a()(d.a,{disabled:N,onClick:function(){for(var e=n.getElementsByClassName("submit-button"),t=0;t<e.length;t++)e[t].click();r()},style:{float:"right"}},void 0,t||c("submit")))};C.defaultProps={buttonLabel:null,onSubmit:function(){}};n.default=Object(f.a)("QuestionForm")(C)}}]);