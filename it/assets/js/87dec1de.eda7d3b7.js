(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{201:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(3),a=n(7),l=(n(0),n(410)),r={id:"plotly",title:"Plotly",sidebar_label:"Plotly"},o={unversionedId:"plotly",id:"plotly",isDocsHomePage:!1,title:"Plotly",description:"Visualizzazione della trama.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/plotly.md",slug:"/plotly",permalink:"/it/docs/plotly",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plotly.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614613459,sidebar_label:"Plotly",sidebar:"docs",previous:{title:"Typewriter",permalink:"/it/docs/typewriter"},next:{title:"Bar Chart",permalink:"/it/docs/plots/barchart"}},c=[{value:"Opzioni",id:"opzioni",children:[]},{value:"Esempi",id:"esempi",children:[]}],b={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Visualizzazione della trama."),Object(l.b)("h2",{id:"opzioni"},"Opzioni"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"data")," | ",Object(l.b)("inlineCode",{parentName:"li"},"array (required)"),": array di dati. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"draggable")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controlla se la trama deve essere trascinabile. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"editable")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controlla se le etichette della trama creata sono modificabili. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"id")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": identificatore di componente. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"layout")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": Oggetto del layout del lotto. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"config")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": Opzioni di configurazione di Plotly (vedi: ",Object(l.b)("a",{parentName:"li",href:"https://plotly.com/javascript/configuration-options/"},"https://plotly.com/javascript/configuration-options/"),"). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"legendButtons")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controlla se visualizzare i pulsanti per la modifica della legenda. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"true"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"meta")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": trama meta-informazioni. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"revision")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": quando fornito, fa s\xec che il grafico si aggiorni quando il valore di revisione viene incrementato. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"style")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": Stili in linea CSS. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onAfterPlot")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": funzione di richiamo invocata ogni volta che viene tracciato un grafico. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onAfterPlot() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onClick")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": funzione di richiamo richiamata quando un elemento viene cliccato. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onClick() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onInitialized")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": callback invocato una volta inizializzato il grafico; chiamato con figura (oggetto con tre tasti corrispondenti ai puntelli di input: ",Object(l.b)("inlineCode",{parentName:"li"},"data"),", ",Object(l.b)("inlineCode",{parentName:"li"},"layout")," e ",Object(l.b)("inlineCode",{parentName:"li"},"frames"),") e il nodo DOM ",Object(l.b)("inlineCode",{parentName:"li"},"graphDiv"),".. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onInitialized() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onLegendClick")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": funzione di richiamo richiamata quando si fa clic sulla voce della legenda. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onLegendClick() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onLegendDoubleClick")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": funzione di richiamo richiamata quando si fa doppio clic sull'elemento della legenda. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onLegendDoubleClick() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onRelayout")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": funzione di richiamo richiamata quando il relayout \xe8 attivato. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onRelayout() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onSelected")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": funzione di richiamo richiamata quando gli elementi sono selezionati. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onSelected() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onShare")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),': funzione di richiamo richiamata quando si clicca sul pulsante "Condividi. Default: ',Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"removeButtons")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controlla se rimuovere tutti i pulsanti (a parte il pulsante a schermo intero se abilitato). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"toggleFullscreen")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controlla se consentire la visualizzazione del grafico in modalit\xe0 a schermo intero. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"true"),".")),Object(l.b)("h2",{id:"esempi"},"Esempi"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Plotly\n    data={[{\n        values: [ 24, 7, 0.5 ],\n        labels: [ 'English', 'Spanish', 'Other' ],\n        type: 'pie'\n            }]}\n    layout={{ width: 300 }}\n/>\n")))}p.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var i=n(0),a=n.n(i);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,s=u["".concat(r,".").concat(d)]||u[d]||m[d]||l;return n?a.a.createElement(s,o(o({ref:t},b),{},{components:n})):a.a.createElement(s,o({ref:t},b))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var b=2;b<l;b++)r[b]=n[b];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);