(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(410)),o={id:"hypothesis-testing-mean",title:"Hypothesis Testing for Means",sidebar_label:"Hypothesis Testing for Means"},l={unversionedId:"learn/hypothesis-testing-mean",id:"learn/hypothesis-testing-mean",isDocsHomePage:!1,title:"Hypothesis Testing for Means",description:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043f\u043e \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e \u0433\u0438\u043f\u043e\u0442\u0435\u0437 \u0434\u043b\u044f \u0441\u0440\u0435\u0434\u043d\u0435\u0439 \u043f\u043e\u043f\u0443\u043b\u044f\u0446\u0438\u0438.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/learn/hypothesis-testing-mean.md",slug:"/learn/hypothesis-testing-mean",permalink:"/ru/docs/learn/hypothesis-testing-mean",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/hypothesis-testing-mean.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Hypothesis Testing for Means",sidebar:"docs",previous:{title:"Discrete Distribution",permalink:"/ru/docs/learn/discrete-distribution"},next:{title:"Hypothesis Testing for Proportions",permalink:"/ru/docs/learn/hypothesis-testing-proportion"}},s=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[]}],c={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043f\u043e \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e \u0433\u0438\u043f\u043e\u0442\u0435\u0437 \u0434\u043b\u044f \u0441\u0440\u0435\u0434\u043d\u0435\u0439 \u043f\u043e\u043f\u0443\u043b\u044f\u0446\u0438\u0438."),Object(i.b)("h2",{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"types")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array<string>"),": \u0442\u0438\u043f(\u044b) \u0442\u0435\u0441\u0442\u0430 (",Object(i.b)("inlineCode",{parentName:"li"},"One-Sample"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Two-Sample"),"), \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u0438\u0434\u0436\u0435\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0440\u0430\u0437\u043e\u0431\u043b\u0430\u0447\u0430\u0442\u044c. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"[\n  'One-Sample',\n  'Two-Sample'\n]"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"tests")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array<string>"),": \u0442\u0435\u0441\u0442(\u044b), \u044d\u043a\u0441\u043f\u043e\u043d\u0438\u0440\u0443\u0435\u043c\u044b\u0435 \u0432\u0438\u0434\u0436\u0435\u0442\u0430\u043c\u0438. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"[\n  'Z-Test',\n  'T-Test'\n]"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"nullHypothesisAsValue")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": \u0432\u0441\u0435\u0433\u0434\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u043d\u0443\u043b\u0435\u0432\u0443\u044e \u0433\u0438\u043f\u043e\u0442\u0435\u0437\u0443 \u0432 \u0432\u0438\u0434\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"feedback")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c \u043a\u043d\u043e\u043f\u043e\u043a \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u0438. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0438\u043b\u0438 CSS. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(i.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnMeanTest />\n")))}p.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||i;return n?a.a.createElement(d,l(l({ref:t},c),{},{components:n})):a.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);