(window.webpackJsonp=window.webpackJsonp||[]).push([[372],{424:function(e,t,a){"use strict";var n=a(405),r=a(408),c=a(409),u=a.n(c),o=a(0),s=a.n(o),i=a(411),b=a(464),l=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.variant,o=e.size,l=e.active,f=e.className,d=e.block,v=e.type,p=e.as,j=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),O=Object(i.a)(a,"btn"),m=u()(f,O,l&&"active",c&&O+"-"+c,d&&O+"-block",o&&O+"-"+o);if(j.href)return s.a.createElement(b.a,Object(n.a)({},j,{as:p,ref:t,className:u()(m,j.disabled&&"disabled")}));t&&(j.ref=t),v?j.type=v:p||(j.type="button");var k=p||"button";return s.a.createElement(k,Object(n.a)({},j,{className:m}))}));l.displayName="Button",l.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=l},6432:function(e,t,a){"use strict";a.r(t);var n=a(407),r=a.n(n),c=a(456),u=a.n(c),o=a(0),s=a.n(o),i=(a(404),a(424)),b=a(534),l=a(554),f=Object(l.a)("generator"),d=function(e){var t=e.id,a=e.autoStart,n=e.buttonLabel,c=e.onGenerate,l=Object(o.useRef)(t||f({autoStart:a,buttonLabel:n,onGenerate:c})),d=Object(o.useState)(null),v=u()(d,2),p=v[0],j=v[1],O=Object(o.useRef)();Object(o.useEffect)((function(){O.current=c}));var m=Object(o.useCallback)((function(){var e=O.current();e&&(e=s.a.cloneElement(e,{id:l.current}),j(e))}),[]);return Object(o.useEffect)((function(){a&&m()}),[a,m]),r()(b.a,{},void 0,p,r()(i.a,{block:!0,onClick:m},void 0,n))};d.defaultProps={autoStart:!0,buttonLabel:"Generate"},t.default=d}}]);