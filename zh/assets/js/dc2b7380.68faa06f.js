(window.webpackJsonp=window.webpackJsonp||[]).push([[1258],{283:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(410)),i={id:"r-output",title:"R Output",sidebar_label:"R Output"},l={unversionedId:"r/r-output",id:"r/r-output",isDocsHomePage:!1,title:"R Output",description:"\u7528\u4e8e\u5728ISLE\u8bfe\u7a0b\u4e2d\u6e32\u67d3R\u8f93\u51fa\u7684\u7ec4\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/r/output.md",slug:"/r/r-output",permalink:"/zh/docs/r/r-output",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/r/output.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"R Output",sidebar:"docs",previous:{title:"R Help",permalink:"/zh/docs/r/r-help"},next:{title:"R Plot",permalink:"/zh/docs/r/r-plot"}},c=[{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],u={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u7528\u4e8e\u5728ISLE\u8bfe\u7a0b\u4e2d\u6e32\u67d3R\u8f93\u51fa\u7684\u7ec4\u4ef6\u3002"),Object(o.b)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"code")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": \u7528\u4e8e\u8bc4\u4f30\u7684R\u4ee3\u7801. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"''"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"libraries")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array"),': \u5f53\u8f93\u5165\u7684 "code "\u88ab\u6267\u884c\u65f6\uff0c\u5e94\u81ea\u52a8\u52a0\u8f7d\u7684R\u5e93\u3002. Default: ',Object(o.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"prependCode")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(string|array)"),': \u5728\u8bc4\u4f30 "code "\u4e2d\u5b58\u50a8\u7684\u4ee3\u7801\u65f6\uff0c\u8981\u628aR\u4ee3\u7801\uff08\u6216\u4ee3\u7801\u5757\u7684 "\u6570\u7ec4"\uff09\u653e\u5728\u524d\u9762\u3002. Default: ',Object(o.b)("inlineCode",{parentName:"li"},"''"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onPlots")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": \u56de\u8c03\u8c03\u7528\u4efb\u4f55\u751f\u6210\u7684\u7ed8\u56fe. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onPlots() {}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onResult")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),': \u8c03\u7528 "error"(\u5982\u679c\u64cd\u4f5c\u6210\u529f\u5219\u4e3a "null")\u548c "result "\u7684\u56de\u8c03\uff0c\u4fdd\u7559R\u7684\u8f93\u51fa\u3002. Default: ',Object(o.b)("inlineCode",{parentName:"li"},"onResult() {}"),".")),Object(o.b)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ROutput code="runif(10)" />\n')))}p.isMDXComponent=!0},410:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,m=b["".concat(i,".").concat(d)]||b[d]||s[d]||o;return r?a.a.createElement(m,l(l({ref:t},u),{},{components:r})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);