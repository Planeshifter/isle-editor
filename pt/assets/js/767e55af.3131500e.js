(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{216:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return c}));var r=n(3),a=n(7),o=(n(0),n(406)),i={id:"proptest",title:"One-Sample Proportion Test",sidebar_label:"One-Sample Proportion Test"},l={unversionedId:"tests/proptest",id:"tests/proptest",isDocsHomePage:!1,title:"One-Sample Proportion Test",description:"Teste de propor\xe7\xe3o de uma amostra.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/tests/proptest.md",slug:"/tests/proptest",permalink:"/pt/docs/tests/proptest",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tests/proptest.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613419765,sidebar_label:"One-Sample Proportion Test",sidebar:"docs",previous:{title:"Two-Sample Mean Test",permalink:"/pt/docs/tests/meantest2"},next:{title:"Two-Sample Proportion Test",permalink:"/pt/docs/tests/proptest2"}},p=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:p};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Teste de propor\xe7\xe3o de uma amostra."),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"data")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object (required)"),": objeto de arrays de valor. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"variable")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string (required)"),": nome da vari\xe1vel. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"success")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string (required)"),': categoria de sucesso da "vari\xe1vel".. Default: ',Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"alpha")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": n\xedvel de signific\xe2ncia. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"0.05"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"direction")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),': dire\xe7\xe3o de teste (ou "sem", "maior", ou "de dois lados"). Default: ',Object(o.b)("inlineCode",{parentName:"li"},"'two-sided'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"p0")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": propor\xe7\xe3o sob a hip\xf3tese nula. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"0.5"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"showDecision")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": controla se a hip\xf3tese nula deve ser rejeitada no n\xedvel de signific\xe2ncia especificado. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),".")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<PropTest\n    data={heartdisease} \n    variable="Complications"\n    success={1}\n/>\n')))}c.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),c=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=c(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=c(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);