(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{181:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(410)),i={id:"r-help",title:"R Help",sidebar_label:"R Help"},l={unversionedId:"r/r-help",id:"r/r-help",isDocsHomePage:!1,title:"R Help",description:"Fa\xe7a palavras puxar a documenta\xe7\xe3o R em uma janela modal quando clicada.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/r/help.md",slug:"/r/r-help",permalink:"/pt/docs/r/r-help",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/r/help.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"R Help",sidebar:"docs",previous:{title:"Proportions Survey",permalink:"/pt/docs/proportions-survey"},next:{title:"R Output",permalink:"/pt/docs/r/r-output"}},c=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[]},{value:"Exemplos",id:"exemplos",children:[]}],p={toc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Fa\xe7a palavras puxar a documenta\xe7\xe3o R em uma janela modal quando clicada."),Object(o.b)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"func")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),': nome da "fun\xe7\xe3oR" para a qual abrir a documenta\xe7\xe3o. Se n\xe3o for fornecido, o conte\xfado da etiqueta "Ajuda" \xe9 assumido como igual ao nome da fun\xe7\xe3o.. Default: ',Object(o.b)("inlineCode",{parentName:"li"},"''"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"library")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": nome do pacote R no qual a fun\xe7\xe3o reside. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"'base'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"visible")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": controla se a janela modal de ajuda deve ser aberta na partida. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),".")),Object(o.b)("h2",{id:"exemplos"},"Exemplos"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<span><RHelp library="graphics">hist</RHelp> is used to create a histogram.</span>\n')))}u.isMDXComponent=!0},410:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),b=n,m=s["".concat(i,".").concat(b)]||s[b]||d[b]||o;return r?a.a.createElement(m,l(l({ref:t},p),{},{components:r})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);