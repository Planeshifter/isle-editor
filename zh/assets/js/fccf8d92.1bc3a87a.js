(window.webpackJsonp=window.webpackJsonp||[]).push([[368],{302:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return c}));var r=n(3),o=n(7),i=(n(0),n(406)),a={id:"hypothesis-testing-proportion",title:"Hypothesis Testing for Proportions",sidebar_label:"Hypothesis Testing for Proportions"},l={unversionedId:"learn/hypothesis-testing-proportion",id:"learn/hypothesis-testing-proportion",isDocsHomePage:!1,title:"Hypothesis Testing for Proportions",description:"\u5173\u4e8e\u4eba\u53e3\u6bd4\u4f8b\u7684\u5047\u8bbe\u68c0\u9a8c\u7684\u5b66\u4e60\u5185\u5bb9\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/learn/hypothesis-testing-proportion.md",slug:"/learn/hypothesis-testing-proportion",permalink:"/zh/docs/learn/hypothesis-testing-proportion",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/hypothesis-testing-proportion.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613257762,sidebar_label:"Hypothesis Testing for Proportions",sidebar:"docs",previous:{title:"Hypothesis Testing for Means",permalink:"/zh/docs/learn/hypothesis-testing-mean"},next:{title:"Image Pixel Picker",permalink:"/zh/docs/learn/image-pixel-picker"}},p=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:p};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u5173\u4e8e\u4eba\u53e3\u6bd4\u4f8b\u7684\u5047\u8bbe\u68c0\u9a8c\u7684\u5b66\u4e60\u5185\u5bb9\u3002"),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"types")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array<string>"),': \u6d4b\u8bd5\u7684\u7c7b\u578b("\u4e00\u4e2a\u6837\u672c"\uff0c"\u4e24\u4e2a\u6837\u672c")\uff0c\u5c0f\u7ec4\u4ef6\u5e94\u8be5\u66b4\u9732\u51fa\u6765\u3002. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"[\n  'One-Sample',\n  'Two-Sample'\n]"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"feedback")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u662f\u5426\u663e\u793a\u53cd\u9988\u6309\u94ae. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"nullHypothesisAsValue")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": \u59cb\u7ec8\u5c06\u96f6\u5047\u8bbe\u663e\u793a\u4e3a\u4e00\u4e2a\u5355\u4e00\u7684\u503c\u3002. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": CSS\u5185\u8054\u6837\u5f0f. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnProportionTest />\n")))}c.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),c=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,m=u["".concat(a,".").concat(d)]||u[d]||b[d]||i;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);