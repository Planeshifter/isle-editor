(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{169:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return u}));var a=t(3),r=t(7),i=(t(0),t(410)),o={id:"number-input",title:"Number Input",sidebar_label:"Number Input"},l={unversionedId:"input/number-input",id:"input/number-input",isDocsHomePage:!1,title:"Number Input",description:'Um n\xfamero de componentes de entrada. Pode ser usado como parte de um painel de instrumentos ISLE ou aut\xf4nomo. Neste \xfaltimo caso, voc\xea quer lidar com as mudan\xe7as atrav\xe9s do atributo "Mudar" ou ligar o valor a uma vari\xe1vel global atrav\xe9s do atributo "ligar".',source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/input/number.md",slug:"/input/number-input",permalink:"/pt/docs/input/number-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/number.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Number Input",sidebar:"docs",previous:{title:"Checkbox Input",permalink:"/pt/docs/input/checkbox-input"},next:{title:"Proportions Input",permalink:"/pt/docs/input/proportions-input"}},b=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[]},{value:"Exemplos",id:"exemplos",children:[]}],c={toc:b};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,'Um n\xfamero de componentes de entrada. Pode ser usado como parte de um painel de instrumentos ISLE ou aut\xf4nomo. Neste \xfaltimo caso, voc\xea quer lidar com as mudan\xe7as atrav\xe9s do atributo "Mudar" ou ligar o valor a uma vari\xe1vel global atrav\xe9s do atributo "ligar".'),Object(i.b)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"bind")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": nome da vari\xe1vel global para o n\xfamero a ser atribu\xeddo a. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"defaultValue")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": valor que indica o valor padr\xe3o da entrada na partida. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"0"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"disabled")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": booleano indicando se a entrada est\xe1 ativa ou n\xe3o. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"inline")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": indica se a entrada \xe9 exibida em linha. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"legend")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|node)"),": string indicando o texto exibido ao lado da entrada do n\xfamero. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"max")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": n\xfamero indicando o valor m\xe1ximo que pode ser inserido. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"null"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"min")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": n\xfamero indicando o menor valor poss\xedvel que pode ser inserido. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"null"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"numbersOnly")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controla se apenas n\xfameros s\xe3o aceitos. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onBlur")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o de chamada de retorno a ser invocada quando se utiliza um m\xe9todo de desfocagem. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onBlur() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onChange")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o de chamada de retorno a ser invocada quando a entrada do n\xfamero \xe9 alterada. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onKeyDown")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o chamada de retorno a ser invocada quando qualquer tecla \xe9 pressionada. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onKeyDown() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onKeyPress")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o de chamada de retorno a ser invocada quando qualquer chave \xe9 inserida. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onKeyPress() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onKeyUp")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o de retorno de chamada a ser invocada quando a chave \xe9 liberada. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onKeyUp() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"step")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(number|string)"),": n\xfamero que indica as mudan\xe7as incrementais ao usar as setas de incremento. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": Estilos em linha CSS. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"inputStyle")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": Estilos de CSS em linha para elemento de entrada. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"value")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": valor num\xe9rico (para componente controlado). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"tooltip")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": dica de ferramentas (se n\xe3o estiver definida, a dica de ferramentas \xe9 gerada automaticamente). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"tooltipPlacement")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": dire\xe7\xe3o da ponta da ferramenta. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'left'"),".")),Object(i.b)("h2",{id:"exemplos"},"Exemplos"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<NumberInput\n    legend="Number of observations"\n    defaultValue={20}\n    step={5}\n/>\n')))}u.isMDXComponent=!0},410:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return s}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),u=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,s=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return t?r.a.createElement(s,l(l({ref:n},c),{},{components:t})):r.a.createElement(s,l({ref:n},c))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var b in n)hasOwnProperty.call(n,b)&&(l[b]=n[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);