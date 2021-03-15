(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{187:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(410)),i={id:"clt-continuous",title:"Continuous CLT",sidebar_label:"Continuous CLT"},c={unversionedId:"learn/clt-continuous",id:"learn/clt-continuous",isDocsHomePage:!1,title:"Continuous CLT",description:"\u4e00\u4e2a\u5b66\u4e60\u7ec4\u4ef6\uff0c\u8bf4\u660e\u4e00\u4e2a\u9009\u5b9a\u7684\u8fde\u7eed\u5206\u5e03\u7684\u4e2d\u5fc3\u6781\u9650\u5b9a\u7406\uff08CLT\uff09\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/learn/clt-continuous.md",slug:"/learn/clt-continuous",permalink:"/zh/docs/learn/clt-continuous",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/clt-continuous.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"2021/2/21",sidebar_label:"Continuous CLT",sidebar:"docs",previous:{title:"Causality Diagram",permalink:"/zh/docs/learn/causality-diagram"},next:{title:"Discrete CLT",permalink:"/zh/docs/learn/clt-discrete"}},l=[{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],u={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u4e00\u4e2a\u5b66\u4e60\u7ec4\u4ef6\uff0c\u8bf4\u660e\u4e00\u4e2a\u9009\u5b9a\u7684\u8fde\u7eed\u5206\u5e03\u7684\u4e2d\u5fc3\u6781\u9650\u5b9a\u7406\uff08CLT\uff09\u3002"),Object(o.b)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"distributions")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array<string>"),': \u53ef\u4f9b\u9009\u62e9\u7684\u7edf\u8ba1\u5206\u5e03\uff08"\u5747\u5300"\u3001"\u6307\u6570 "\u548c/\u6216 "\u6b63\u6001"\uff09\u3002. Default: ',Object(o.b)("inlineCode",{parentName:"li"},"[\n  'uniform',\n  'exponential',\n  'normal'\n]"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"hideFormulas")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u662f\u5426\u9690\u85cf\u7ec4\u4ef6\u6587\u672c\u4e2d\u7684\u516c\u5f0f\u3002. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),".")),Object(o.b)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnContinuousCLT />\n")))}s.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(f,c(c({ref:t},u),{},{components:n})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);