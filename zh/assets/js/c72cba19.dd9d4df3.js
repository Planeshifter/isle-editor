(window.webpackJsonp=window.webpackJsonp||[]).push([[1240],{266:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(410)),i={id:"qqplot",title:"QQ Plot",sidebar_label:"QQ Plot"},l={unversionedId:"plots/qqplot",id:"plots/qqplot",isDocsHomePage:!1,title:"QQ Plot",description:"\u6bd4\u8f83\u5668\u51fd\u6570\u7528\u4e8e\u5c06\u503c\u6309\u5347\u5e8f\u6392\u5e8f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/plots/qqplot.md",slug:"/plots/qqplot",permalink:"/zh/docs/plots/qqplot",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/qqplot.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"QQ Plot",sidebar:"docs",previous:{title:"Pie Chart",permalink:"/zh/docs/plots/piechart"},next:{title:"Scatter Plot",permalink:"/zh/docs/plots/scatterplot"}},c=[{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],p={toc:c};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u6bd4\u8f83\u5668\u51fd\u6570\u7528\u4e8e\u5c06\u503c\u6309\u5347\u5e8f\u6392\u5e8f\u3002"),Object(a.b)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"data")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object (required)"),": \u503c\u6570\u7ec4\u5bf9\u8c61. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"variable")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string (required)"),": \u53d8\u91cf\u663e\u793a. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),".")),Object(a.b)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<QQPlot \n    data={heartdisease} \n    variable="Age"\n/>\n')))}u.isMDXComponent=!0},410:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,f=s["".concat(i,".").concat(d)]||s[d]||b[d]||a;return r?o.a.createElement(f,l(l({ref:t},p),{},{components:r})):o.a.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);