(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{181:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(406)),i={id:"r-table",title:"R Table",sidebar_label:"R Table"},l={unversionedId:"r/r-table",id:"r/r-table",isDocsHomePage:!1,title:"R Table",description:"Componente para renderizar um quadro de dados R ou matriz em um display tabular.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/r/table.md",slug:"/r/r-table",permalink:"/pt/docs/r/r-table",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/r/table.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612739298,sidebar_label:"R Table",sidebar:"docs",previous:{title:"R Shell",permalink:"/pt/docs/r/r-shell"},next:{title:"Weather",permalink:"/pt/docs/weather"}},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Componente para renderizar um quadro de dados R ou matriz em um display tabular."),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"code")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": C\xf3digo R devolvendo um quadro de dados.frame contendo os dados a serem exibidos na tabela. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"''"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"libraries")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array"),": R bibliotecas que devem ser carregadas automaticamente quando o ",Object(o.b)("inlineCode",{parentName:"li"},"c\xf3digo")," de entrada \xe9 executado. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"prependCode")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(string|array)"),": R c\xf3digo ",Object(o.b)("inlineCode",{parentName:"li"},"tring")," (ou ",Object(o.b)("inlineCode",{parentName:"li"},"array")," de blocos de c\xf3digo R) a ser prepenso ao c\xf3digo armazenado no ",Object(o.b)("inlineCode",{parentName:"li"},"c\xf3digo")," ao avaliar. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"''"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"width")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": largura (entre 0 e 1). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"0.5"),".")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RTable\n    code={`data <- matrix( runif(64), nrow=8, ncol=8); \n    data`}\n/>\n")))}p.isMDXComponent=!0},406:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),p=function(e){var t=a.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),b=p(r),s=n,m=b["".concat(i,".").concat(s)]||b[s]||u[s]||o;return r?a.a.createElement(m,l(l({ref:t},d),{},{components:r})):a.a.createElement(m,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);