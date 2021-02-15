(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{187:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(406)),l={id:"scatterplot",title:"Scatter Plot",sidebar_label:"Scatter Plot"},o={unversionedId:"plots/scatterplot",id:"plots/scatterplot",isDocsHomePage:!1,title:"Scatter Plot",description:"\u8ba1\u7b97\u4e00\u4e2a\u6570\u7ec4\u7684\u6700\u5c0f\u503c\u548c\u6700\u5927\u503c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/plots/scatterplot.md",slug:"/plots/scatterplot",permalink:"/zh/docs/plots/scatterplot",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/scatterplot.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613417523,sidebar_label:"Scatter Plot",sidebar:"docs",previous:{title:"QQ Plot",permalink:"/zh/docs/plots/qqplot"},next:{title:"Scatter Plot Matrix",permalink:"/zh/docs/plots/scatterplot-matrix"}},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u8ba1\u7b97\u4e00\u4e2a\u6570\u7ec4\u7684\u6700\u5c0f\u503c\u548c\u6700\u5927\u503c\u3002"),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object (required)"),": \u6bcf\u4e2a\u53d8\u91cf\u7684\u503c\u6570\u7ec4\u5bf9\u8c61. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"xval")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string (required)"),": \u5728X\u8f74\u4e0a\u663e\u793a\u7684\u53d8\u91cf. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"yval")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string (required)"),": \u5728Y\u8f74\u4e0a\u663e\u793a\u7684\u53d8\u91cf. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"text")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u6bcf\u4e2a\u70b9\u65c1\u8fb9\u90fd\u6709\u6587\u5b57\u663e\u793a. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"color")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u5206\u7c7b\u53d8\u91cf\uff0c\u4ee5\u6620\u5c04\u5230\u70b9\u7684\u989c\u8272\u3002. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"type")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u5bf9\u5e94\u5230\u663e\u793a\u7684\u7b26\u53f7\u7684\u5206\u7c7b\u53d8\u91cf\u3002. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"size")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u91cf\u5316\u53d8\u91cf\uff0c\u4ee5\u6620\u5c04\u5230\u70b9\u7684\u5927\u5c0f\u3002. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"regressionLine")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u662f\u5426\u8986\u76d6\u56de\u5f52\u7ebf\u3002. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"regressionMethod")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array<string>"),": ",Object(i.b)("inlineCode",{parentName:"li"},"linear"),"\u548c/\u6216",Object(i.b)("inlineCode",{parentName:"li"},"smooth"),"\u663e\u793a\u7ebf\u6027\u56de\u5f52\u548c\u5e73\u6ed1\u7684LOWESS\u56de\u5f52\u7ebf\u3002. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"[\n  'linear'\n]"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"lineBy")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u4e3a\u6bcf\u4e00\u7c7b\u6307\u5b9a\u7684\u5206\u7c7b\u53d8\u91cf\u663e\u793a\u5355\u72ec\u7684\u56de\u5f52\u7ebf\u3002. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"smoothSpan")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": \u5e73\u6ed1\u56de\u5f52\u7ebf\u7684\u5e73\u6ed1\u8de8\u5ea6\u53c2\u6570. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"0.66"),".")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ScatterPlot \n    data={heartdisease} \n    xval="Age"\n    yval="Cost"\n/>\n')))}p.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,d=s["".concat(l,".").concat(m)]||s[m]||u[m]||i;return n?a.a.createElement(d,o(o({ref:t},b),{},{components:n})):a.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);