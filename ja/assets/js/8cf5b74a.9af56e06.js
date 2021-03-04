(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{226:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),l=(n(0),n(410)),i={id:"clt-sample",title:"CLT Sample",sidebar_label:"CLT Sample"},o={unversionedId:"learn/clt-sample",id:"learn/clt-sample",isDocsHomePage:!1,title:"CLT Sample",description:"\u4e0e\u3048\u3089\u308c\u305f\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u304b\u3089\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u3059\u308b\u3068\u304d\u306e\u4e2d\u5fc3\u6975\u9650\u5b9a\u7406\uff08CLT\uff09\u3092\u8aac\u660e\u3059\u308b\u5b66\u7fd2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/learn/clt-sample.md",slug:"/learn/clt-sample",permalink:"/ja/docs/learn/clt-sample",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/clt-sample.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"CLT Sample",sidebar:"docs",previous:{title:"Discrete CLT",permalink:"/ja/docs/learn/clt-discrete"},next:{title:"Conditional Probability",permalink:"/ja/docs/learn/conditional-probability"}},c=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",children:[]},{value:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",id:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",children:[]}],p={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u4e0e\u3048\u3089\u308c\u305f\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u304b\u3089\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u3059\u308b\u3068\u304d\u306e\u4e2d\u5fc3\u6975\u9650\u5b9a\u7406\uff08CLT\uff09\u3092\u8aac\u660e\u3059\u308b\u5b66\u7fd2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002"),Object(l.b)("h2",{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"},"\u30aa\u30d7\u30b7\u30e7\u30f3"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"data")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object (required)"),": \u30ad\u30fc\u3092\u6301\u3064\u30c7\u30fc\u30bf\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001\u5909\u6570\u540d\u3068\u305d\u308c\u305e\u308c\u306e\u5909\u6570\u306e\u5024\u3092\u4fdd\u6301\u3059\u308b\u5024\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u3059\u3002. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"hidePopulationStdev")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": \u6bcd\u96c6\u56e3\u6a19\u6e96\u504f\u5dee\u306e\u975e\u8868\u793a. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"samples")," | ",Object(l.b)("inlineCode",{parentName:"li"},"(array<number>|number)"),": \u63cf\u753b\u53ef\u80fd\u306a\u30b5\u30f3\u30d7\u30eb\u30b5\u30a4\u30ba\u3092\u793a\u3059\u6570\u5024\u307e\u305f\u306f\u5358\u6570\u306e\u914d\u5217. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"25"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"populationProbabilities")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": \u6bcd\u96c6\u56e3\u78ba\u7387\u306e\u8a08\u7b97\u5f0f\u3092\u8868\u793a\u3059\u308b\u304b\u3069\u3046\u304b. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"quantiles")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": \u5b9a\u91cf\u5024\u306e\u8a08\u7b97\u30c4\u30fc\u30eb\u3092\u8868\u793a\u3059\u308b\u304b\u3069\u3046\u304b. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"variables")," | ",Object(l.b)("inlineCode",{parentName:"li"},"array (required)"),": \u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u53ef\u80fd\u306a\u5909\u6570\u540d. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),".")),Object(l.b)("h2",{id:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"},"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnSampleCLT />\n")))}b.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||s[m]||l;return n?a.a.createElement(d,o(o({ref:t},p),{},{components:n})):a.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);