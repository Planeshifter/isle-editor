(window.webpackJsonp=window.webpackJsonp||[]).push([[918],{2764:function(e,a,t){"use strict";a.a=function(e){e.stopPropagation()}},424:function(e,a,t){"use strict";var r=t(405),n=t(408),c=t(409),l=t.n(c),o=t(0),i=t.n(o),s=t(411),u=t(464),v=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.variant,o=e.size,v=e.active,d=e.className,f=e.block,b=e.type,m=e.as,p=Object(n.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),h=Object(s.a)(t,"btn"),y=l()(d,h,v&&"active",c&&h+"-"+c,f&&h+"-block",o&&h+"-"+o);if(p.href)return i.a.createElement(u.a,Object(r.a)({},p,{as:m,ref:a,className:l()(y,p.disabled&&"disabled")}));a&&(p.ref=a),b?p.type=b:m||(p.type="button");var j=m||"button";return i.a.createElement(j,Object(r.a)({},p,{className:y}))}));v.displayName="Button",v.defaultProps={variant:"primary",active:!1,disabled:!1},a.a=v},6479:function(e,a,t){"use strict";t.r(a);var r=t(407),n=t.n(r),c=t(456),l=t.n(c),o=t(0),i=t(450),s=t.n(i),u=(t(404),t(2049)),v=t(424),d=t(553),f=t.n(d),b=t(534),m=t(651),p=t(554),h=t(2764),y=t(463),j=t(462),w=t(547),O=t(422);t(346);Object(O.a)("Revealer");var g=s()("isle:revealer"),N=Object(p.a)("revealer"),k=function(e){var a=e.message,t=e.show,r=e.children,c=Object(o.useRef)(e.id||N({message:a,show:t})),i=Object(o.useContext)(y.a),s=Object(u.a)("Revealer").t,d=Object(o.useState)(t),p=l()(d,2),O=p[0],k=p[1],R=Object(o.useState)(t),C=l()(R,2),P=C[0],S=C[1],x=Object(o.useState)(null),z=l()(x,2),E=z[0],H=z[1];t!==P&&(k(t),S(t)),Object(o.useEffect)((function(){var e,a=function(){if(i&&i.metadata&&i.metadata.revealer&&i.metadata.revealer[c.current]){var e=i.metadata.revealer[c.current][i.cohort];void 0===e&&(e=i.metadata.revealer[c.current].all),!0!==e&&!1!==e||k(e)}};return i&&(a(),g("Subscribe revealer with ID: "+c),e=i.subscribe((function(e,t){if(e===w.z)H(null);else if(e===w.u)a();else if(e===w.n&&t.id===c.current){var r=t.value;g("Received action for cohort ".concat(r,": ")),!r||i.cohort&&i.cohort===r?t.type===j.Ub?(g("Reveal content for ".concat(c.current,"...")),k(!0)):t.type===j.lb&&(g("Hide content for ".concat(c.current,"...")),k(!1)):E===r&&(t.type===j.Ub?(g("Reveal content of ".concat(c.current," for cohort ").concat(r,"...")),k(!0)):t.type===j.lb&&(g("Hide content of ".concat(c.current," for cohort ").concat(r,"...")),k(!1)))}}))),function(){e&&e()}}),[c,E,i]);var U=function(e){var a=e.target.value;(a!==E||"all"===a&&f()(E))&&(g("Handle cohort change: "+a),H("all"===a?null:a))},B=i.cohorts||[],J=n()("h3",{className:"center"},void 0,a||s("message"));return g("showChildren: "+O),n()(o.Fragment,{},void 0,n()(m.a,{owner:!0},void 0,n()(b.a,{className:"center revealer-panel"},void 0,n()(v.a,{className:"revealer-button",onClick:function(){var e,a=!O;k(a),e=i&&i.metadata&&i.metadata.revealer&&i.metadata.revealer[c.current]?i.metadata.revealer[c.current]:{},a?(i.log({id:c.current,type:j.Ub,value:E},"members"),e[E||"all"]=!0,i.updateMetadata("revealer",c.current,e)):(i.log({id:c.current,type:j.lb,value:E},"members"),e[E||"all"]=!1,i.updateMetadata("revealer",c.current,e))}},void 0,s(O?"hide":"reveal")),s("contents-of"),n()("i",{},void 0,c.current)," ",s(O?"from":"to"),n()("select",{className:"revealer-select",onChange:U,onBlur:U,onClick:h.a,value:E||"all"},void 0,n()("option",{value:"all"},void 0,s("all-students")),B.map((function(e,a){return n()("option",{value:e.title},a,e.title)}))))),O?null:J,n()("div",{className:"revealer outer-element",style:{display:O?"inherit":"none"}},void 0,r))};k.defaultProps={message:null,show:!1},a.default=k}}]);