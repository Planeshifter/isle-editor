(window.webpackJsonp=window.webpackJsonp||[]).push([[368],{302:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(406)),l={id:"density-plot",title:"Density Plot",sidebar_label:"Density Plot"},o={unversionedId:"d3/density-plot",id:"d3/density-plot",isDocsHomePage:!1,title:"Density Plot",description:"d3\u30d9\u30fc\u30b9\u306e\u5bc6\u5ea6\u30d7\u30ed\u30c3\u30c8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/d3/density-plot.md",slug:"/d3/density-plot",permalink:"/ja/docs/d3/density-plot",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/d3/density-plot.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612738524,sidebar_label:"Density Plot"},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"d3\u30d9\u30fc\u30b9\u306e\u5bc6\u5ea6\u30d7\u30ed\u30c3\u30c8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002"),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"bandwidth")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": \u30ab\u30fc\u30cd\u30eb\u5bc6\u5ea6\u63a8\u5b9a\u5668\u306e\u5e73\u6ed1\u5316\u30d1\u30e9\u30e1\u30fc\u30bf. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"4"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"histogram")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": \u5bc6\u5ea6\u30d7\u30ed\u30c3\u30c8\u306e\u6a2a\u306b\u30d2\u30b9\u30c8\u30b0\u30e9\u30e0\u3092\u8868\u793a\u3057\u307e\u3059. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"nBins")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": \u30aa\u30fc\u30d0\u30fc\u30ec\u30a4\u3055\u308c\u305f\u30d2\u30b9\u30c8\u30b0\u30e9\u30e0\u306e\u30d3\u30f3\u6570.. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"8"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"vline")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": \u304c\u6307\u5b9a\u3055\u308c\u305f\u5834\u5408\u3001\u6307\u5b9a\u3055\u308c\u305f ",Object(i.b)("inlineCode",{parentName:"li"},"value")," \u306e\u4f4d\u7f6e\u306b\u5782\u76f4\u7dda\u3092\u8868\u793a\u3057\u3001\u6307\u5b9a\u3055\u308c\u305f ",Object(i.b)("inlineCode",{parentName:"li"},"label")," \u3068\u4e00\u7dd2\u306b\u8868\u793a\u3057\u307e\u3059\u3002. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"xlab")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \uff38\u8ef8\u30e9\u30d9\u30eb. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'value'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"xmax")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": \uff38\u8ef8\u8868\u793a\u306e\u6700\u5927\u5024. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"xmin")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": \uff38\u8ef8\u6700\u5c0f\u5024. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"0"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"ymax")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": \uff39\u8ef8\u306e\u6700\u5927\u5024. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"0.15"),".")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<DensityPlot\n    data={[ 40, 80, 20, 30, 50, 30, 40, 10, 20, 10, 20, 20 ]}\n    xmin={0}\n    xmax={100}\n    ymax={0.5}\n/>\n")))}p.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||s[d]||i;return n?a.a.createElement(m,o(o({ref:t},b),{},{components:n})):a.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);