(window.webpackJsonp=window.webpackJsonp||[]).push([[394],{1023:function(e,t,n){"use strict";n.r(t);var a=n(456),i=n.n(a),r=n(407),s=n.n(r),c=n(0),o=(n(404),n(450)),l=n.n(o),d=n(4096),u=n(913),p=n(510),f=n(735),b=n(421);Object(b.a)("HintButton");var h=l()("isle:hint-button"),v=s()("br",{}),m=s()("br",{}),w=function(e,t,n,a){return s()(p.a,{id:"".concat(n,"-hint-popover"),title:a("hints"),style:{minWidth:"400px",padding:"3px",zIndex:9999}},void 0,t.filter((function(t,n){return n<=e})).map((function(e,t){return s()("span",{},t,s()("label",{style:{marginBottom:0}},void 0,a("hint")," ",t+1,":"),v,s()("span",{},void 0,e),m)})))},j=function(e){var t=e.disabled,n=e.hints,a=e.onClick,r=e.onFinished,o=e.placement,l=e.size,d=e.style,p=e.id,b=e.t,v=Object(c.useState)(!1),m=i()(v,2),j=m[0],O=m[1],x=Object(c.useState)(0),N=i()(x,2),y=N[0],P=N[1],g=function(e,t,n,a){return a(n?e<=1?"close-hint":"close-hints":0===e?"get-hint":e===t?"show-hints":"next-hint")}(y,n.length,j,b);return s()(f.a,{trigger:"click",placement:o,overlay:w(y-1,n,p,b)},void 0,s()(u.a,{className:"hint-button",variant:"success",size:l,onClick:function(e){return h("Clicked on a hint button..."),y<n.length&&!1===j?(a(y),P(y+1),O(!0),y+1===n.length&&r(),e(!1)):(O(!1),e(j))},disabled:t,autoActivate:!1,style:d},void 0,g))};j.defaultProps={disabled:!1,onClick:function(){},onFinished:function(){},placement:"left",size:"sm",style:{}},t.default=Object(d.a)("HintButton")(j)},506:function(e,t,n){"use strict";var a=n(406),i=n(408),r=n(409),s=n.n(r),c=n(0),o=n.n(c),l=n(411),d=o.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,c=e.bsPrefix,d=e.className,u=e.children,p=Object(i.a)(e,["as","bsPrefix","className","children"]);return c=Object(l.a)(c,"popover-body"),o.a.createElement(r,Object(a.a)({ref:t},p,{className:s()(d,c)}),u)}));t.a=d},509:function(e,t,n){"use strict";var a=n(406),i=n(408),r=n(409),s=n.n(r),c=n(0),o=n.n(c),l=n(411),d=o.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,c=e.bsPrefix,d=e.className,u=e.children,p=Object(i.a)(e,["as","bsPrefix","className","children"]);return c=Object(l.a)(c,"popover-header"),o.a.createElement(r,Object(a.a)({ref:t},p,{className:s()(c,d)}),u)}));t.a=d},510:function(e,t,n){"use strict";var a=n(406),i=n(408),r=n(409),s=n.n(r),c=n(0),o=n.n(c),l=(n(594),n(411)),d=n(509),u=n(506),p=o.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.placement,c=e.className,d=e.style,p=e.children,f=e.content,b=e.arrowProps,h=(e.popper,e.show,Object(i.a)(e,["bsPrefix","placement","className","style","children","content","arrowProps","popper","show"])),v=Object(l.a)(n,"popover"),m=((null==r?void 0:r.split("-"))||[])[0];return o.a.createElement("div",Object(a.a)({ref:t,role:"tooltip",style:d,"x-placement":m,className:s()(c,v,m&&"bs-popover-"+m)},h),o.a.createElement("div",Object(a.a)({className:"arrow"},b)),f?o.a.createElement(u.a,null,p):p)}));p.defaultProps={placement:"right"},p.Title=d.a,p.Content=u.a,t.a=p}}]);