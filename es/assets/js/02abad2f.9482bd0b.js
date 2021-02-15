(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var i=n(3),r=n(7),a=(n(0),n(406)),o={id:"distribution-negative-binomial",title:"Negative Binomial Distribution",sidebar_label:"Negative Binomial Distribution"},l={unversionedId:"learn/distribution-negative-binomial",id:"learn/distribution-negative-binomial",isDocsHomePage:!1,title:"Negative Binomial Distribution",description:"Un componente de aprendizaje para calcular las probabilidades de una distribuci\xf3n binomial negativa.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/learn/distribution-negative-binomial.md",slug:"/learn/distribution-negative-binomial",permalink:"/es/docs/learn/distribution-negative-binomial",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-negative-binomial.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612738524,sidebar_label:"Negative Binomial Distribution",sidebar:"docs",previous:{title:"Hypergeometric Distribution",permalink:"/es/docs/learn/distribution-hypergeometric"},next:{title:"Normal Distribution",permalink:"/es/docs/learn/distribution-normal"}},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Un componente de aprendizaje para calcular las probabilidades de una distribuci\xf3n binomial negativa."),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"countTrials")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": se convierte en verdadera si en lugar de contar el n\xfamero de fracasos hasta el \xe9xito r-\xe9simo, una variable aleatoria de una distribuci\xf3n binomial negativa debe definirse como el n\xfamero de ensayos hasta el \xe9xito r-\xe9simo. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"step")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(number|string)"),": tama\xf1o del paso de la entrada de desplazamiento. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"0.01"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"style")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object"),": Estilos en l\xednea CSS. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnNegativeBinomialDistribution />\n")))}u.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=i,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||a;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);