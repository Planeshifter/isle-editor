(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{227:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(406)),o={id:"slider-input",title:"Slider Input",sidebar_label:"Slider Input"},l={unversionedId:"input/slider-input",id:"input/slider-input",isDocsHomePage:!1,title:"Slider Input",description:'Um componente de entrada deslizante. Pode ser usado como parte de um painel de instrumentos ISLE ou aut\xf4nomo. Neste \xfaltimo caso, voc\xea quer lidar com as mudan\xe7as atrav\xe9s do atributo "Mudar" ou ligar o valor a uma vari\xe1vel global atrav\xe9s do atributo "ligar".',source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/input/slider.md",slug:"/input/slider-input",permalink:"/pt/docs/input/slider-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/slider.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612739298,sidebar_label:"Slider Input",sidebar:"docs",previous:{title:"Select Input",permalink:"/pt/docs/input/select-input"},next:{title:"Text Area",permalink:"/pt/docs/input/text-area"}},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'Um componente de entrada deslizante. Pode ser usado como parte de um painel de instrumentos ISLE ou aut\xf4nomo. Neste \xfaltimo caso, voc\xea quer lidar com as mudan\xe7as atrav\xe9s do atributo "Mudar" ou ligar o valor a uma vari\xe1vel global atrav\xe9s do atributo "ligar".'),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"defaultValue")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": O valor inicial do controle deslizante. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"10"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"disabled")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controla se a entrada do controle deslizante est\xe1 ativa ou n\xe3o. Se definido como verdadeiro, o controle deslizante estar\xe1 presente na tela, embora acinzentado.. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"inline")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controla se a barra deslizante deve ser colocada em linha com o texto ou fora. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"legend")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|node)"),": legenda da entrada. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"max")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": O valor m\xe1ximo do controle deslizante. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"100"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"maxLabel")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": r\xf3tulo a ser exibido \xe0 direita do deslizador em vez do valor m\xe1ximo. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"min")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": O valor m\xednimo do controle deslizante. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"0"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"minLabel")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": etiqueta a ser exibida \xe0 esquerda do controle deslizante em vez do valor m\xednimo. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onChange")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": chamada de retorno invocada com o novo valor quando o valor do controle deslizante muda. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"precision")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": arredondamento da entrada. O valor ser\xe1 arredondado para n\xe3o ter d\xedgitos mais significativos do que a precis\xe3o. Por exemplo, se algu\xe9m desejar usar apenas n\xfameros inteiros, uma precis\xe3o de 10 seria usada, enquanto que se algu\xe9m desejar arredondar para o lugar das centenas, seria usada uma precis\xe3o de 0,001. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"10"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"step")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(number|string)"),": tamanho do degrau do controle deslizante. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"hideTooltip")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controla se deve ocultar a ponta das ferramentas. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": Estilos em linha CSS. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"numberInputStyle")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": Estilos de CSS em linha para componente de entrada de n\xfameros. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"rangeInputStyle")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": Estilo CSS em linha para o componente de entrada de gama. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<SliderInput\n    legend="Success Probability"\n    defaultValue={0.5}\n    min={0}\n    max={1}\n    step={0.01}\n/>\n')))}b.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),b=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=b(n),s=a,m=u["".concat(o,".").concat(s)]||u[s]||p[s]||i;return n?r.a.createElement(m,l(l({ref:t},d),{},{components:n})):r.a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);