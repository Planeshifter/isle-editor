(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(406)),l={id:"clt-sample",title:"CLT Sample",sidebar_label:"CLT Sample"},o={unversionedId:"learn/clt-sample",id:"learn/clt-sample",isDocsHomePage:!1,title:"CLT Sample",description:"Una componente di apprendimento che illustra il Teorema del limite centrale (CLT) quando si effettua il campionamento da un set di dati fornito.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/learn/clt-sample.md",slug:"/learn/clt-sample",permalink:"/it/docs/learn/clt-sample",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/clt-sample.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612738524,sidebar_label:"CLT Sample",sidebar:"docs",previous:{title:"Discrete CLT",permalink:"/it/docs/learn/clt-discrete"},next:{title:"Conditional Probability",permalink:"/it/docs/learn/conditional-probability"}},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Una componente di apprendimento che illustra il Teorema del limite centrale (CLT) quando si effettua il campionamento da un set di dati fornito."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object (required)"),": gli oggetti dati con le chiavi corrispondono ai nomi delle variabili e ai valori che contengono i valori delle rispettive variabili. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"hidePopulationStdev")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": nascondere la visualizzazione della deviazione standard della popolazione. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"samples")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(array<number>|number)"),": una serie di numeri o un singolo numero che indica le dimensioni del campione che pu\xf2 essere disegnato. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"25"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"populationProbabilities")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": se visualizzare le equazioni per il calcolo delle probabilit\xe0 di popolazione. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"quantiles")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": se mostrare strumento per il calcolo di eventuali quantili. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"variables")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array (required)"),": nomi di variabili che possono essere campionati da. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),".")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnSampleCLT />\n")))}s.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||i;return n?r.a.createElement(m,o(o({ref:t},p),{},{components:n})):r.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);