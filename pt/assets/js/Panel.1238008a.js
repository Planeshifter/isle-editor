(window.webpackJsonp=window.webpackJsonp||[]).push([[813],{3732:function(e,n,t){"use strict";var i=t(406),o=Object(i.a)((function(){return Promise.all([t.e(4),t.e(354)]).then(t.bind(null,4433))}));n.a=o},3785:function(e,n,t){"use strict";t.r(n);t(437),t(433),t(430),t(438),t(439);var i=t(489),o=t.n(i),l=t(412),a=t.n(l),r=t(448),c=t.n(r),s=t(553),d=t.n(s),u=t(407),m=t.n(u),f=t(0),b=t.n(f),p=(t(404),t(1996)),y=t(464),h=t(484),O=t(3732),v=t(442);t(336);function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){a()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var z=function(e){var n=e.children,t=e.hideTooltip,i=e.onHide,o=e.minimizable,l=e.minimized,a=e.onMinimize,r=Object(p.a)("Panel").t;return n?m()(y.a.Header,{as:"h3"},void 0,m()("span",{className:"unselectable"},void 0,n),i?m()(h.a,{tooltip:t||r("close")},void 0,m()("button",{className:"panel-hide-button fa fa-times",onClick:i})):null,o?m()(h.a,{tooltip:r(l?"maximize":"minimize")},void 0,m()("button",{className:"panel-hide-button ".concat(l?"far fa-window-maximize":"fas fa-window-minimize"),onClick:a})):null):null},P=function(e){var n=e.className,t=e.header,i=e.footer,l=e.minimizable,a=e.fullscreen,r=e.hideTooltip,s=e.onHide,u=e.style,p=e.bodyStyle,h=e.footerStyle,v=e.children,w=(e.tReady,d()(e,["className","header","footer","minimizable","fullscreen","hideTooltip","onHide","style","bodyStyle","footerStyle","children","tReady"])),P=Object(f.useState)(!1),S=c()(P,2),g=S[0],N=S[1];return b.a.createElement(y.a,o()({},w,{className:"panel ".concat(n),style:j({height:g?"53px":void 0},u)}),a?m()(O.a,{header:t,body:v,footer:i,className:n,owner:!0}):null,m()(z,{minimizable:l,minimized:g,onMinimize:function(){N(!g)},hideTooltip:r,onHide:s},void 0,t),m()(y.a.Body,{style:j(j({},p),{},{display:g?"none":null})},void 0,v),i?m()(y.a.Footer,{style:j(j({},h),{},{display:g?"none":null})},void 0,i):null)};P.defaultProps={className:"",header:null,footer:null,minimizable:!1,fullscreen:!1,hideTooltip:null,bodyStyle:{},footerStyle:{},style:{},onHide:null},n.default=Object(v.a)(P)}}]);