(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{3771:function(e,t,a){"use strict";a.r(t);a(437),a(433),a(425),a(424),a(403),a(434);var r=a(404),n=a.n(r),c=a(400),o=a.n(c),l=a(0),s=a.n(l),i=(a(396),a(428)),p=a(529),u=a(515),b=a(399),f=a(860);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var v=Object(b.a)((function(){return Promise.all([a.e(2),a.e(11),a.e(407)]).then(a.t.bind(null,6196,7))})),O=Object(b.a)((function(){return Promise.all([a.e(2),a.e(11),a.e(406)]).then(a.t.bind(null,6200,7))})),h=Object(b.a)((function(){return Promise.all([a.e(2),a.e(11),a.e(444)]).then(a.t.bind(null,6204,7))})),j=Object(b.a)((function(){return Promise.all([a.e(2),a.e(11),a.e(415)]).then(a.t.bind(null,6206,7))})),w=function(e){var t;switch(e.variant){case"Block":t=s.a.createElement(j,e);break;case"Compact":t=s.a.createElement(O,e);break;case"Material":t=s.a.createElement(h,e);break;case"Button":var a=o()(p.a,{id:"".concat(e.variant,"-popover")},void 0,o()(u.a,{},void 0,s.a.createElement(v,e)));t=o()(f.a,{overlay:a,placement:"bottom-end",trigger:["click"]},void 0,o()(i.a,{size:"sm",style:{backgroundColor:e.color,width:38,height:38}}));break;case"Sketch":default:t=s.a.createElement(v,e)}return o()("div",{className:e.className,style:m({width:"fit-content",margin:"0 auto"},e.style)},void 0,t)};w.defaultProps={variant:"Sketch",color:"#fff",disableAlpha:!1,presetColors:["#D0021B","#F5A623","#F8E71C","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF"],width:200,className:"",style:{},onChange:function(){},onChangeComplete:function(){}},t.default=w},515:function(e,t,a){"use strict";var r=a(398),n=a(401),c=a(402),o=a.n(c),l=a(0),s=a.n(l),i=a(408),p=s.a.forwardRef((function(e,t){var a=e.as,c=void 0===a?"div":a,l=e.bsPrefix,p=e.className,u=e.children,b=Object(n.a)(e,["as","bsPrefix","className","children"]);return l=Object(i.a)(l,"popover-body"),s.a.createElement(c,Object(r.a)({ref:t},b,{className:o()(p,l)}),u)}));t.a=p},522:function(e,t,a){"use strict";var r=a(398),n=a(401),c=a(402),o=a.n(c),l=a(0),s=a.n(l),i=a(408),p=s.a.forwardRef((function(e,t){var a=e.as,c=void 0===a?"div":a,l=e.bsPrefix,p=e.className,u=e.children,b=Object(n.a)(e,["as","bsPrefix","className","children"]);return l=Object(i.a)(l,"popover-header"),s.a.createElement(c,Object(r.a)({ref:t},b,{className:o()(l,p)}),u)}));t.a=p},529:function(e,t,a){"use strict";var r=a(398),n=a(401),c=a(402),o=a.n(c),l=a(0),s=a.n(l),i=(a(635),a(408)),p=a(522),u=a(515),b=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.placement,l=e.className,p=e.style,b=e.children,f=e.content,d=e.arrowProps,m=(e.popper,e.show,Object(n.a)(e,["bsPrefix","placement","className","style","children","content","arrowProps","popper","show"])),v=Object(i.a)(a,"popover"),O=((null==c?void 0:c.split("-"))||[])[0];return s.a.createElement("div",Object(r.a)({ref:t,role:"tooltip",style:p,"x-placement":O,className:o()(l,v,O&&"bs-popover-"+O)},m),s.a.createElement("div",Object(r.a)({className:"arrow"},d)),f?s.a.createElement(u.a,null,b):b)}));b.defaultProps={placement:"right"},b.Title=p.a,b.Content=u.a,t.a=b}}]);