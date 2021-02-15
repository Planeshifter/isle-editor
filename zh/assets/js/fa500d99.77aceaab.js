(window.webpackJsonp=window.webpackJsonp||[]).push([[367],{301:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),o=(t(0),t(406)),i={id:"confidence-coverage-sample",title:"Confidence Interval Coverage Sample",sidebar_label:"Confidence Interval Coverage Sample"},c={unversionedId:"learn/confidence-coverage-sample",id:"learn/confidence-coverage-sample",isDocsHomePage:!1,title:"Confidence Interval Coverage Sample",description:"\u5f53\u4ece\u63d0\u4f9b\u7684\u6570\u636e\u96c6\u4e2d\u53d6\u6837\u65f6\uff0c\u8bf4\u660e\u4e2d\u5fc3\u6781\u9650\u5b9a\u7406\uff08CLT\uff09\u7684\u5b66\u4e60\u7ec4\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/learn/confidence-coverage-sample.md",slug:"/learn/confidence-coverage-sample",permalink:"/zh/docs/learn/confidence-coverage-sample",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/confidence-coverage-sample.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612739298,sidebar_label:"Confidence Interval Coverage Sample",sidebar:"docs",previous:{title:"Confidence Interval Coverage Normal",permalink:"/zh/docs/learn/confidence-coverage-normal"},next:{title:"Continuous Distribution",permalink:"/zh/docs/learn/continuous-distribution"}},l=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u5f53\u4ece\u63d0\u4f9b\u7684\u6570\u636e\u96c6\u4e2d\u53d6\u6837\u65f6\uff0c\u8bf4\u660e\u4e2d\u5fc3\u6781\u9650\u5b9a\u7406\uff08CLT\uff09\u7684\u5b66\u4e60\u7ec4\u4ef6\u3002"),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"data")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object (required)"),": \u6570\u636e\u5bf9\u8c61\u7684\u952e\u5bf9\u5e94\u4e8e\u53d8\u91cf\u540d\uff0c\u503c\u5bf9\u5e94\u4e8e\u5404\u81ea\u53d8\u91cf\u7684\u503c\u3002. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"samples")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(array<number>|number)"),": \u6570\u7ec4\u6570\u5b57\u6216\u5355\u4e2a\u6570\u5b57\uff0c\u8868\u793a\u53ef\u4ee5\u62bd\u53d6\u7684\u6837\u672c\u91cf\u3002. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"25"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"variables")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array (required)"),": \u53d8\u91cf\u7684\u540d\u79f0\uff0c\u53ef\u4ee5\u4ece\u4e0b\u5217\u53d8\u91cf\u4e2d\u53d6\u6837\u3002. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),".")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnConfidenceCoverageSample />\n")))}u.isMDXComponent=!0},406:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),b=r,m=s["".concat(i,".").concat(b)]||s[b]||d[b]||o;return t?a.a.createElement(m,c(c({ref:n},p),{},{components:t})):a.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);