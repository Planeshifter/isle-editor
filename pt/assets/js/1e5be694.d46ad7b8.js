(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(410)),o={id:"voice-input",title:"Voice Input",sidebar_label:"Voice Input"},l={unversionedId:"input/voice-input",id:"input/voice-input",isDocsHomePage:!1,title:"Voice Input",description:"Um componente de entrada de voz.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/input/voice.md",slug:"/input/voice-input",permalink:"/pt/docs/input/voice-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/voice.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Voice Input",sidebar:"docs",previous:{title:"Text Input",permalink:"/pt/docs/input/text-input"},next:{title:"Accordion",permalink:"/pt/docs/accordion"}},c=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[]},{value:"Exemplos",id:"exemplos",children:[]}],b={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Um componente de entrada de voz."),Object(i.b)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"autorecord")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controla se a grava\xe7\xe3o deve ser iniciada automaticamente. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"defaultValue")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": valor do texto padr\xe3o. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"grammars")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array"),": lista de gram\xe1tica de fala (sem suporte). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"legend")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|node)"),": legenda exibida na frente do campo de entrada. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"mode")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),': definir como "cheio" para exibir um campo de entrada de texto ao lado do microfone, "status" para exibir apenas uma barra de status com os textos transcritos, "microfone" para exibir apenas um bot\xe3o para alternar a grava\xe7\xe3o, ou "ningu\xe9m" quando a entrada de voz deve ser invis\xedvel e controlada puramente atrav\xe9s de teclas de atalho / comandos de voz. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"'full'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"maxAlternatives")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": n\xfamero m\xe1ximo de alternativas oferecidas por resultado de reconhecimento de fala. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onChange")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o de chamada de retorno invocada quando o valor de entrada de texto \xe9 atualizado. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onClick")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o de chamada de retorno invocada ao clicar no bot\xe3o do microfone. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onClick() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onFinalText")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o de chamada de retorno invocada uma vez que o texto final \xe9 recebido. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onFinalText() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onRecordingStart")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o de chamada de retorno invocada quando a grava\xe7\xe3o \xe9 iniciada. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onRecordingStart() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onRecordingStop")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o de chamada de retorno invocada quando a grava\xe7\xe3o \xe9 interrompida. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onRecordingStop() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onSegment")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o de chamada de retorno invocada com segmentos de texto. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onSegment() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),': fun\xe7\xe3o chamada de retorno ao enviar o valor de entrada de texto pressionando "Enter".. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"placeholder")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": espa\xe7o reservado para entrada de texto. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"remote")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),': objeto com "start", "stop", e "toggle" e teclas de atalho associadas. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"className")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": nome da classe. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": Estilos em linha CSS. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"timeout")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": n\xfamero de milissegundos ap\xf3s os quais a grava\xe7\xe3o. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"stopTooltip")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": mensagem de dica de ferramenta exibida durante a grava\xe7\xe3o. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"startTooltip")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": mensagem de dica de ferramenta exibida sem grava\xe7\xe3o. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"tooltipPlacement")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": dire\xe7\xe3o da ponta da ferramenta. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'left'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"width")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": largura de entrada de voz (em px). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"500"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"height")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": altura de entrada de voz (em px). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"36"),".")),Object(i.b)("h2",{id:"exemplos"},"Exemplos"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<VoiceInput\n    langage="en-US"\n    defaultValue="Enter text"\n/>\n')))}d.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),d=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,s=p["".concat(o,".").concat(u)]||p[u]||m[u]||i;return n?r.a.createElement(s,l(l({ref:t},b),{},{components:n})):r.a.createElement(s,l({ref:t},b))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);