(window.webpackJsonp=window.webpackJsonp||[]).push([[1229],{251:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(410)),i={id:"clt-sample",title:"CLT Sample",sidebar_label:"CLT Sample"},o={unversionedId:"learn/clt-sample",id:"learn/clt-sample",isDocsHomePage:!1,title:"CLT Sample",description:"Un \xe9l\xe9ment d'apprentissage illustrant le Th\xe9or\xe8me des limites centrales (CLT) lors de l'\xe9chantillonnage \xe0 partir d'un ensemble de donn\xe9es fournies.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/learn/clt-sample.md",slug:"/learn/clt-sample",permalink:"/fr/docs/learn/clt-sample",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/clt-sample.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21/02/2021",sidebar_label:"CLT Sample",sidebar:"docs",previous:{title:"Discrete CLT",permalink:"/fr/docs/learn/clt-discrete"},next:{title:"Conditional Probability",permalink:"/fr/docs/learn/conditional-probability"}},c=[{value:"Options",id:"options",children:[]},{value:"Exemples",id:"exemples",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Un \xe9l\xe9ment d'apprentissage illustrant le Th\xe9or\xe8me des limites centrales (CLT) lors de l'\xe9chantillonnage \xe0 partir d'un ensemble de donn\xe9es fournies."),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"data")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object (required)"),": les objets de donn\xe9es avec cl\xe9s correspondent aux noms de variables et aux valeurs contenant les valeurs des variables respectives. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"hidePopulationStdev")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": cacher l'affichage de l'\xe9cart type de la population. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"samples")," | ",Object(l.b)("inlineCode",{parentName:"li"},"(array<number>|number)"),": une s\xe9rie de chiffres ou un seul chiffre indiquant la taille des \xe9chantillons qui peuvent \xeatre pr\xe9lev\xe9s. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"25"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"populationProbabilities")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": s'il faut afficher les \xe9quations pour le calcul des probabilit\xe9s de la population. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"quantiles")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": s'il faut montrer l'outil de calcul des quantiles. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"variables")," | ",Object(l.b)("inlineCode",{parentName:"li"},"array (required)"),": les noms des variables qui peuvent \xeatre \xe9chantillonn\xe9es \xe0 partir. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),".")),Object(l.b)("h2",{id:"exemples"},"Exemples"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnSampleCLT />\n")))}p.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||l;return n?a.a.createElement(m,o(o({ref:t},s),{},{components:n})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);