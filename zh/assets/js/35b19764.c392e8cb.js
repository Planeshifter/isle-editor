(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),a=(n(0),n(410)),o={id:"multiple-choice-matrix",title:"Multiple Choice Matrix",sidebar_label:"Multiple Choice Matrix"},l={unversionedId:"questions/multiple-choice-matrix",id:"questions/multiple-choice-matrix",isDocsHomePage:!1,title:"Multiple Choice Matrix",description:"\u4e00\u4e2aISLE\u7ec4\u4ef6\uff0c\u5b83\u53ef\u4ee5\u5448\u73b0\u4e00\u4e2a\u5177\u6709\u76f8\u540c\u7b54\u6848\u7684\u591a\u9009\u9898\u77e9\u9635\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/questions/multiple-choice-matrix.md",slug:"/questions/multiple-choice-matrix",permalink:"/zh/docs/questions/multiple-choice-matrix",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/multiple-choice-matrix.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"2021/2/21",sidebar_label:"Multiple Choice Matrix"},c=[{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],u={toc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u4e00\u4e2aISLE\u7ec4\u4ef6\uff0c\u5b83\u53ef\u4ee5\u5448\u73b0\u4e00\u4e2a\u5177\u6709\u76f8\u540c\u7b54\u6848\u7684\u591a\u9009\u9898\u77e9\u9635\u3002"),Object(a.b)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"questions")," | ",Object(a.b)("inlineCode",{parentName:"li"},"array (required)"),": \u5343\u5934\u4e07\u7eea. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"answers")," | ",Object(a.b)("inlineCode",{parentName:"li"},"array (required)"),": \u4e00\u7cfb\u5217\u7b54\u6848. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"title")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(string|node)"),": \u9898\u76ee\uff0c\u663e\u793a\u5728\u95ee\u9898\u6c47\u603b\u8868\u7684\u9876\u90e8. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"solution")," | ",Object(a.b)("inlineCode",{parentName:"li"},"array<array>"),": \u5e03\u5c14\u77e9\u9635\uff0c\u5176\u4e2d\u7684\u5143\u7d20\u8868\u793a\u662f\u5426\u5e94\u8be5\u52fe\u9009\u76f8\u5e94\u7684\u5355\u9009\u6309\u94ae\u6216\u590d\u9009\u6846\u3002. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"type")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),': \u95ee\u9898\u7c7b\u578b("radio "\u5bf9\u5e94 "\u9009\u62e9\u4e00\u4e2a"\uff0c"checkbox "\u5bf9\u5e94 "\u9009\u62e9\u6240\u6709\u9002\u7528\u7684"). Default: ',Object(a.b)("inlineCode",{parentName:"li"},"'radio'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"disableSubmitNotification")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u662f\u5426\u7981\u7528\u63d0\u4ea4\u901a\u77e5. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onChange")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": \u5f53\u590d\u9009\u6846/\u5355\u9009\u6309\u94ae\u7684\u503c\u53d1\u751f\u53d8\u5316\u65f6\u8c03\u7528\u7684\u56de\u8c03\uff1b\u8c03\u7528\u7684\u662f\u6bcf\u4e2a\u7b54\u6848\u9009\u9879\u7684\u6d3b\u52a8\u72b6\u6001\u7684\u4e8c\u7ef4\u5e03\u5c14\u6570\u7ec4\u3002. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),': \u5f53\u7528\u6237\u70b9\u51fb "\u63d0\u4ea4 "\u6309\u94ae\u65f6\u8c03\u7528\u7684\u56de\u8c03\uff1b\u8c03\u7528\u7684\u662f\u6bcf\u4e2a\u56de\u7b54\u9009\u9879\u7684\u6d3b\u52a8\u72b6\u6001\u7684\u4e8c\u7ef4\u5e03\u5c14\u6570\u7ec4\u3002. Default: ',Object(a.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),Object(a.b)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MultipleChoiceMatrix \n    title=\"Do you think these concepts are important for an introductory statistics course, and do you (or your department) cover them in your introductory courses?\" id=\"topics\" \n    questions={[\n        'Data Visualizations',\n        'Hand calculations (e.g. standard deviation, z-scores)',\n        'Combinatorics',\n        'Basic probability theory (conditional probability, independence...)',\n        'Calculus-based probability',\n        'Sampling distributions',\n        'Confidence intervals (traditional, formula-based)',\n        'Boostrapping',\n        'Hypothesis testing (traditional, e.g. t-test or chi-square formulas and tables)',\n        'Simple linear regression',\n        'Bayesian statistics',\n        'Randomization- or simulation-based inference'\n    ]}\n    type=\"checkbox\" \n    answers={[ 'I cover it', 'I think it\\'s important' ]} \n/>\n")))}s.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||a;return n?i.a.createElement(m,l(l({ref:t},u),{},{components:n})):i.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);