(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(406)),i={id:"proportions-input",title:"Proportions Input",sidebar_label:"Proportions Input"},p={unversionedId:"input/proportions-input",id:"input/proportions-input",isDocsHomePage:!1,title:"Proportions Input",description:'Um componente de entrada de propor\xe7\xf5es. Pode ser usado como parte de um painel de instrumentos ISLE ou aut\xf4nomo. Neste \xfaltimo caso, voc\xea quer lidar com as mudan\xe7as atrav\xe9s do atributo "Mudar" ou ligar o valor a uma vari\xe1vel global atrav\xe9s do atributo "ligar".',source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/input/proportions.md",slug:"/input/proportions-input",permalink:"/pt/docs/input/proportions-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/proportions.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612739298,sidebar_label:"Proportions Input",sidebar:"docs",previous:{title:"Number Input",permalink:"/pt/docs/input/number-input"},next:{title:"Select Input",permalink:"/pt/docs/input/select-input"}},l=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'Um componente de entrada de propor\xe7\xf5es. Pode ser usado como parte de um painel de instrumentos ISLE ou aut\xf4nomo. Neste \xfaltimo caso, voc\xea quer lidar com as mudan\xe7as atrav\xe9s do atributo "Mudar" ou ligar o valor a uma vari\xe1vel global atrav\xe9s do atributo "ligar".'),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"colors")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array<string>"),": variedade de cores para os componentes da carta de tortas. Se n\xe3o for definida, ser\xe1 utilizada uma escala de cores personalizada. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"disabled")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": controla se o campo de entrada est\xe1 desativado. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"height")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": propor\xe7\xf5es altura de entrada (em px). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"200"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"legends")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array"),": etiquetas de grupo. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onChange")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o de chamada de retorno a ser invocada quando uma escolha \xe9 feita. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onChange(){}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"precision")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": precis\xe3o exibida dos valores de propor\xe7\xe3o. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"1"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"step")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": o passo das setas vistas ao passar o cursor por cima da caixa de entrada. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"0.1"),".")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ProportionsInput\n    user\n    id="Survey"\n    question="Decide what is important"\n    group="Group decision"\n    nElements={3}\n    colors = {[ "red", "blue", "gold" ]}\n    personalHeight={300}\n    groupHeight={200}\n    margin="80px"\n    legends={[ "bitcoin", "old", "diamonds" ]}\n/>\n')))}u.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,m=s["".concat(i,".").concat(b)]||s[b]||d[b]||o;return n?a.a.createElement(m,p(p({ref:t},c),{},{components:n})):a.a.createElement(m,p({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);