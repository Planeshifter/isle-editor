(window.webpackJsonp=window.webpackJsonp||[]).push([[399],{3801:function(t,e,i){"use strict";var n=i(406),r=Object(n.a)((function(){return Promise.all([i.e(4),i.e(336)]).then(i.bind(null,4505))}));e.a=r},6434:function(t,e,i){"use strict";i.r(e);i(437),i(436),i(488),i(505),i(438);var n=i(407),r=i.n(n),c=i(412),a=i.n(c),h=i(456),o=i.n(h),s=i(0),l=i(2049),d=(i(404),i(465)),w=i(454),u=i(3801),f=i(422),b=i(439);function g(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function p(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?g(Object(i),!0).forEach((function(e){a()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):g(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}Object(f.a)("Iframe");var O=function(t){var e,i=t.title,n=t.src,c=t.id,a=t.fullscreen,h=t.width,f=t.height,b=t.className,g=t.style,O=Object(s.useState)({width:h||window.innerWidth,height:f||window.innerHeight}),y=o()(O,2),j=y[0],m=y[1],v=Object(s.useState)(!1),P=o()(v,2),D=P[0],N=P[1],S=Object(l.a)("Iframe").t;return Object(s.useEffect)((function(){a?m({width:window.innerWidth,height:window.innerHeight}):j.width===h&&j.height===f||m({width:h,height:f})}),[j,a,f,h]),e=p(a?{position:"absolute",width:j.width,height:j.height,top:0,left:0}:{width:j.width,height:j.height},g),r()(d.a,{id:c,className:"center ".concat(b),style:e},void 0,D&&!a?r()(u.a,{header:"".concat(i,": ").concat(n),body:r()("iframe",{src:n,width:"100%",height:"100%",title:i}),className:b,t:S,style:{left:0},wrapInCard:!1}):null,r()("iframe",{src:n,width:j.width,height:j.height,style:{display:D?"inherit":"none"},title:i,onLoad:function(t){N(!0)}}),D?null:r()(w.a,{variant:"warning",style:{margin:0}},void 0,S("alert-message")))};O.defaultProps={title:"An iFrame",fullscreen:!1,width:900,height:600,className:"",style:{}},e.default=Object(b.a)(O)}}]);