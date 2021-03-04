(window.webpackJsonp=window.webpackJsonp||[]).push([[1244],{269:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var i=n(3),r=n(7),a=(n(0),n(410)),o={id:"hypothesis-testing-mean",title:"Hypothesis Testing for Means",sidebar_label:"Hypothesis Testing for Means"},l={unversionedId:"learn/hypothesis-testing-mean",id:"learn/hypothesis-testing-mean",isDocsHomePage:!1,title:"Hypothesis Testing for Means",description:"Una componente di apprendimento sui test di ipotesi per una media di popolazione.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/learn/hypothesis-testing-mean.md",slug:"/learn/hypothesis-testing-mean",permalink:"/it/docs/learn/hypothesis-testing-mean",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/hypothesis-testing-mean.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Hypothesis Testing for Means",sidebar:"docs",previous:{title:"Discrete Distribution",permalink:"/it/docs/learn/discrete-distribution"},next:{title:"Hypothesis Testing for Proportions",permalink:"/it/docs/learn/hypothesis-testing-proportion"}},s=[{value:"Opzioni",id:"opzioni",children:[]},{value:"Esempi",id:"esempi",children:[]}],p={toc:s};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Una componente di apprendimento sui test di ipotesi per una media di popolazione."),Object(a.b)("h2",{id:"opzioni"},"Opzioni"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"types")," | ",Object(a.b)("inlineCode",{parentName:"li"},"array<string>"),": il tipo o i tipi di test (",Object(a.b)("inlineCode",{parentName:"li"},"One-Sample"),", ",Object(a.b)("inlineCode",{parentName:"li"},"Two-Sample"),") che il widget dovrebbe esporre. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"[\n  'One-Sample',\n  'Two-Sample'\n]"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"tests")," | ",Object(a.b)("inlineCode",{parentName:"li"},"array<string>"),": il test o i test esposti dal widget. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"[\n  'Z-Test',\n  'T-Test'\n]"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"nullHypothesisAsValue")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": visualizzare sempre l'ipotesi nulla come un unico valore. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"feedback")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": controlla se visualizzare i pulsanti di feedback. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"style")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object"),": Stili in linea CSS. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(a.b)("h2",{id:"esempi"},"Esempi"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnMeanTest />\n")))}c.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||a;return n?r.a.createElement(m,l(l({ref:t},p),{},{components:n})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);