(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{3790:function(e,n,t){"use strict";var i=t(399),o=Object(i.a)((function(){return Promise.all([t.e(5),t.e(193)]).then(t.bind(null,4477))}));n.a=o},3843:function(e,n,t){"use strict";t.r(n);t(437),t(433),t(425),t(424),t(403),t(434);var i=t(507),o=t.n(i),l=t(404),a=t.n(l),r=t(453),c=t.n(r),s=t(788),d=t.n(s),u=t(400),m=t.n(u),f=t(0),p=t.n(f),b=(t(396),t(1806)),y=t(465),h=t(489),O=t(3790);t(327);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){a()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var j=function(e){var n=e.children,t=e.hideTooltip,i=e.onHide,o=e.minimizable,l=e.minimized,a=e.onMinimize,r=Object(b.a)("Panel").t;return n?m()(y.a.Header,{as:"h3"},void 0,m()("span",{className:"unselectable"},void 0,n),i?m()(h.a,{tooltip:t||r("close")},void 0,m()("button",{className:"panel-hide-button fa fa-times",onClick:i})):null,o?m()(h.a,{tooltip:r(l?"maximize":"minimize")},void 0,m()("button",{className:"panel-hide-button ".concat(l?"far fa-window-maximize":"fas fa-window-minimize"),onClick:a})):null):null},z=function(e){var n=e.className,t=e.header,i=e.footer,l=e.minimizable,a=e.fullscreen,r=e.hideTooltip,s=e.onHide,u=e.style,b=e.bodyStyle,h=e.footerStyle,v=e.children,z=(e.tReady,d()(e,["className","header","footer","minimizable","fullscreen","hideTooltip","onHide","style","bodyStyle","footerStyle","children","tReady"])),P=Object(f.useState)(!1),S=c()(P,2),g=S[0],N=S[1];return p.a.createElement(y.a,o()({},z,{className:"panel ".concat(n),style:w({height:g?"53px":void 0},u)}),a?m()(O.a,{header:t,body:v,footer:i,className:n,owner:!0}):null,m()(j,{minimizable:l,minimized:g,onMinimize:function(){N(!g)},hideTooltip:r,onHide:s},void 0,t),m()(y.a.Body,{style:w(w({},b),{},{display:g?"none":null})},void 0,v),i?m()(y.a.Footer,{style:w(w({},h),{},{display:g?"none":null})},void 0,i):null)};z.defaultProps={className:"",header:null,footer:null,minimizable:!1,fullscreen:!1,hideTooltip:null,bodyStyle:{},footerStyle:{},style:{},onHide:null},n.default=z}}]);