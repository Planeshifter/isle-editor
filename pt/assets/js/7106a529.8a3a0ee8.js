(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{208:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(410)),i={id:"clt-continuous",title:"Continuous CLT",sidebar_label:"Continuous CLT"},c={unversionedId:"learn/clt-continuous",id:"learn/clt-continuous",isDocsHomePage:!1,title:"Continuous CLT",description:"Um componente de aprendizagem que ilustra o Teorema do Limite Central (CLT) para uma distribui\xe7\xe3o cont\xednua escolhida.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/learn/clt-continuous.md",slug:"/learn/clt-continuous",permalink:"/pt/docs/learn/clt-continuous",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/clt-continuous.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Continuous CLT",sidebar:"docs",previous:{title:"Causality Diagram",permalink:"/pt/docs/learn/causality-diagram"},next:{title:"Discrete CLT",permalink:"/pt/docs/learn/clt-discrete"}},l=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[]},{value:"Exemplos",id:"exemplos",children:[]}],u={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Um componente de aprendizagem que ilustra o Teorema do Limite Central (CLT) para uma distribui\xe7\xe3o cont\xednua escolhida."),Object(a.b)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"distributions")," | ",Object(a.b)("inlineCode",{parentName:"li"},"array<string>"),": distribui\xe7\xf5es estat\xedsticas a escolher ('uniforme', 'exponencial', e/ou 'normal'). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"[\n  'uniform',\n  'exponential',\n  'normal'\n]"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"hideFormulas")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": controla se as f\xf3rmulas devem ser ocultadas no texto componente. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),".")),Object(a.b)("h2",{id:"exemplos"},"Exemplos"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnContinuousCLT />\n")))}s.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?o.a.createElement(b,c(c({ref:t},u),{},{components:n})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);