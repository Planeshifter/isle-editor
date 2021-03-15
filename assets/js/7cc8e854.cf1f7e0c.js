(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{207:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),a=(t(0),t(410)),i={id:"confidence-coverage-binomial",title:"Confidence Interval Coverage Binomial",sidebar_label:"Confidence Interval Coverage Binomial"},l={unversionedId:"learn/confidence-coverage-binomial",id:"learn/confidence-coverage-binomial",isDocsHomePage:!1,title:"Confidence Interval Coverage Binomial",description:"A learning component illustrating coverage of confidence intervals for the mean of a binomial distribution.",source:"@site/docs/learn/confidence-coverage-binomial.md",slug:"/learn/confidence-coverage-binomial",permalink:"/docs/learn/confidence-coverage-binomial",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/confidence-coverage-binomial.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612731787,formattedLastUpdatedAt:"2/7/2021",sidebar_label:"Confidence Interval Coverage Binomial",sidebar:"docs",previous:{title:"Conditional Probability",permalink:"/docs/learn/conditional-probability"},next:{title:"Confidence Interval Coverage Normal",permalink:"/docs/learn/confidence-coverage-normal"}},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:c};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A learning component illustrating coverage of confidence intervals for the mean of a binomial distribution."),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"intro")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(node|string)"),": overrides default (interactive) intro text. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"quartileNotation")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to use quartile notation in intro text. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"true"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"sampleStats")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether one should be able to switch between using the sample proportion or the known population success probability when calculating the standard error. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"true"),".")),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnConfidenceCoverageBinomial />\n")))}s.isMDXComponent=!0},410:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return t?o.a.createElement(m,l(l({ref:n},p),{},{components:t})):o.a.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);