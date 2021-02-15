(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{280:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(406)),o={id:"corrtest",title:"Correlation Test",sidebar_label:"Correlation Test"},l={unversionedId:"tests/corrtest",id:"tests/corrtest",isDocsHomePage:!1,title:"Correlation Test",description:"\u76f8\u95a2\u691c\u5b9a\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tests/corrtest.md",slug:"/tests/corrtest",permalink:"/ja/docs/tests/corrtest",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tests/corrtest.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613419765,sidebar_label:"Correlation Test",sidebar:"docs",previous:{title:"Correlation Test",permalink:"/ja/docs/tests/chi2"},next:{title:"Kruskal Test",permalink:"/ja/docs/tests/kruskal"}},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u76f8\u95a2\u691c\u5b9a\u3002"),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object (required)"),": \u5024\u306e\u914d\u5217\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"var1")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string (required)"),": \u5148\u982d\u5909\u6570\u540d. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"var2")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string (required)"),": \u4e8c\u756a\u76ee\u306e\u5909\u6570\u540d. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"rho0")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": \u5e30\u7121\u4eee\u8aac\u306e\u4e0b\u3067\u306e\u76f8\u95a2\u5024. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"0"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"alpha")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": \u6709\u610f\u6c34\u6e96. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"0.05"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"direction")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u30c6\u30b9\u30c8\u65b9\u5411. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'two-sided'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"showDecision")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": \u306f\uff0c\u6307\u5b9a\u3055\u308c\u305f\u6709\u610f\u6c34\u6e96\u3067\u5e30\u7121\u4eee\u8aac\u304c\u68c4\u5374\u3055\u308c\u305f\u304b\u3069\u3046\u304b\u3092\u8868\u793a\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\uff0e. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),".")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<CorrTest\n    data={heartdisease} \n    var1="Cost"\n    var2="Age"\n/>\n')))}b.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);