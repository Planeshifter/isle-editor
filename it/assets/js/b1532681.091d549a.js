(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{245:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var i=n(3),r=n(7),a=(n(0),n(406)),l={id:"slider-input",title:"Slider Input",sidebar_label:"Slider Input"},o={unversionedId:"input/slider-input",id:"input/slider-input",isDocsHomePage:!1,title:"Slider Input",description:"Un componente di ingresso a cursore. Pu\xf2 essere utilizzato come parte di un cruscotto ISLE o autonomo. In quest'ultimo caso, si vuole gestire le modifiche tramite l'attributo onChange o legare il valore ad una variabile globale tramite l'attributo bind.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/input/slider.md",slug:"/input/slider-input",permalink:"/it/docs/input/slider-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/slider.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612738524,sidebar_label:"Slider Input",sidebar:"docs",previous:{title:"Select Input",permalink:"/it/docs/input/select-input"},next:{title:"Text Area",permalink:"/it/docs/input/text-area"}},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Un componente di ingresso a cursore. Pu\xf2 essere utilizzato come parte di un cruscotto ISLE o autonomo. In quest'ultimo caso, si vuole gestire le modifiche tramite l'attributo ",Object(a.b)("inlineCode",{parentName:"p"},"onChange")," o legare il valore ad una variabile globale tramite l'attributo ",Object(a.b)("inlineCode",{parentName:"p"},"bind"),"."),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"defaultValue")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": Il valore di partenza del cursore. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"10"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"disabled")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": controlla se l'ingresso cursore \xe8 attivo o meno. Se impostato su true, il cursore sar\xe0 presente sullo schermo, anche se in grigio. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"inline")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": controlla se posizionare il cursore in linea con il testo o all'esterno. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"legend")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(string|node)"),": didascalia dell'ingresso. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"max")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": Il valore massimo del cursore. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"100"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"maxLabel")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": etichetta da visualizzare a destra del cursore al posto del valore massimo. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"min")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": Il valore minimo del cursore. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"0"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"minLabel")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": etichetta da visualizzare a sinistra del cursore invece del valore minimo. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onChange")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": richiamata con il nuovo valore quando cambia il valore dello slider. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"precision")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": arrotondamento dell'ingresso. Il valore sar\xe0 arrotondato per non avere cifre pi\xf9 significative della precisione. Per esempio, se si desidera utilizzare solo numeri interi, si utilizzer\xe0 una precisione di 10, mentre se si desidera arrotondare al centinaio, si utilizzer\xe0 una precisione di 0,001. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"10"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"step")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(number|string)"),": dimensione del passo del cursore. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"1"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"hideTooltip")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": controlla se nascondere il tooltip. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"style")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object"),": Stili in linea CSS. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"numberInputStyle")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object"),": Stili in linea CSS per il componente di input del numero. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"rangeInputStyle")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object"),": Stile CSS in linea per il componente di ingresso della gamma. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<SliderInput\n    legend="Success Probability"\n    defaultValue={0.5}\n    min={0}\n    max={1}\n    step={0.01}\n/>\n')))}s.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,d=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?r.a.createElement(d,o(o({ref:t},b),{},{components:n})):r.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var b=2;b<a;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);