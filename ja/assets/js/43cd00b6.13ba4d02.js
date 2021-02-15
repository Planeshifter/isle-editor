(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{175:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),o=(t(0),t(406)),i={id:"confidence-coverage-binomial",title:"Confidence Interval Coverage Binomial",sidebar_label:"Confidence Interval Coverage Binomial"},c={unversionedId:"learn/confidence-coverage-binomial",id:"learn/confidence-coverage-binomial",isDocsHomePage:!1,title:"Confidence Interval Coverage Binomial",description:"\u4e8c\u9805\u5206\u5e03\u306e\u5e73\u5747\u306e\u4fe1\u983c\u533a\u9593\u306e\u30ab\u30d0\u30ec\u30c3\u30b8\u3092\u793a\u3059\u5b66\u7fd2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/learn/confidence-coverage-binomial.md",slug:"/learn/confidence-coverage-binomial",permalink:"/ja/docs/learn/confidence-coverage-binomial",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/confidence-coverage-binomial.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612738524,sidebar_label:"Confidence Interval Coverage Binomial",sidebar:"docs",previous:{title:"Conditional Probability",permalink:"/ja/docs/learn/conditional-probability"},next:{title:"Confidence Interval Coverage Normal",permalink:"/ja/docs/learn/confidence-coverage-normal"}},l=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u4e8c\u9805\u5206\u5e03\u306e\u5e73\u5747\u306e\u4fe1\u983c\u533a\u9593\u306e\u30ab\u30d0\u30ec\u30c3\u30b8\u3092\u793a\u3059\u5b66\u7fd2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002"),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"intro")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(node|string)"),": \u30c7\u30d5\u30a9\u30eb\u30c8\u306e (\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u306a) \u30a4\u30f3\u30c8\u30ed\u30c6\u30ad\u30b9\u30c8\u3092\u4e0a\u66f8\u304d\u3057\u307e\u3059\u3002. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"quartileNotation")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": \u30a4\u30f3\u30c8\u30ed\u306e\u30c6\u30ad\u30b9\u30c8\u3067\u56db\u5206\u4f4d\u8868\u8a18\u3092\u4f7f\u7528\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"true"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"sampleStats")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": \u306f\uff0c\u6a19\u6e96\u8aa4\u5dee\u3092\u8a08\u7b97\u3059\u308b\u969b\u306b\uff0c\u6a19\u672c\u306e\u6bd4\u7387\u3092\u4f7f\u7528\u3059\u308b\u304b\uff0c\u65e2\u77e5\u306e\u6bcd\u96c6\u56e3\u306e\u6210\u529f\u78ba\u7387\u3092\u4f7f\u7528\u3059\u308b\u304b\u3092\u5207\u308a\u66ff\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3059\u308b. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"true"),".")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnConfidenceCoverageBinomial />\n")))}u.isMDXComponent=!0},406:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(t),d=r,m=b["".concat(i,".").concat(d)]||b[d]||s[d]||o;return t?a.a.createElement(m,c(c({ref:n},p),{},{components:t})):a.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);