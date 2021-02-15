(window.webpackJsonp=window.webpackJsonp||[]).push([[359],{293:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var i=n(3),o=n(7),a=(n(0),n(406)),r={id:"beacon-tooltip",title:"Beacon Tooltip",sidebar_label:"Beacon Tooltip"},l={unversionedId:"beacon-tooltip",id:"beacon-tooltip",isDocsHomePage:!1,title:"Beacon Tooltip",description:"Componente che posiziona un faro nella lezione, indipendentemente o collegato ad un target. Facendo hovering o cliccando sul beacon, viene visualizzato un tooltip.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/beacon-tooltip.md",slug:"/beacon-tooltip",permalink:"/it/docs/beacon-tooltip",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/beacon-tooltip.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612738524,sidebar_label:"Beacon Tooltip",sidebar:"docs",previous:{title:"Two-Sample Proportion Test",permalink:"/it/docs/tests/proptest2"},next:{title:"Clock",permalink:"/it/docs/clock"}},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Componente che posiziona un faro nella lezione, indipendentemente o collegato ad un ",Object(a.b)("inlineCode",{parentName:"p"},"target"),". Facendo hovering o cliccando sul beacon, viene visualizzato un tooltip."),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"title")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(string|node)"),": titolo da visualizzare nella parte superiore del tooltip. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"content")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(string|node)"),": contenuto del tooltip. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'"),"content",Object(a.b)("inlineCode",{parentName:"li"}," comes here...'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"event")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": se impostato su ",Object(a.b)("inlineCode",{parentName:"li"},"click"),", il tooltip viene attivato quando si clicca sul beacon; se impostato su ",Object(a.b)("inlineCode",{parentName:"li"},"hover"),", il tooltip viene attivato tramite hovering. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'click'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"placement")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),': posizionamento del tooltip relativo all\'"obiettivo" (sia ',Object(a.b)("inlineCode",{parentName:"li"},"top', "),"top-start', ",Object(a.b)("inlineCode",{parentName:"li"},"top-end', "),"top-end', ",Object(a.b)("inlineCode",{parentName:"li"},"bottom', "),"bottom-end', ",Object(a.b)("inlineCode",{parentName:"li"},"left', "),"left-start', ",Object(a.b)("inlineCode",{parentName:"li"},"left-end', "),"right', ",Object(a.b)("inlineCode",{parentName:"li"},"right-start', "),"right-end', ",Object(a.b)("inlineCode",{parentName:"li"},"auto', o "),"center'). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'left'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"target")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": selettore di classe o ID per l'elemento a cui collegare il tooltip. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"''"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"offset")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": distanza tra il tooltip e il ",Object(a.b)("inlineCode",{parentName:"li"},"target")," in pixel. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"15"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onChange")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": richiamata al cambio di stato del tooltip. Riceve due argomenti: la ",Object(a.b)("inlineCode",{parentName:"li"},"azione")," (",Object(a.b)("inlineCode",{parentName:"li"},"aperta")," o ",Object(a.b)("inlineCode",{parentName:"li"},"chiusa"),") e il ",Object(a.b)("inlineCode",{parentName:"li"},"props")," passato. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onChange() {}"),".")),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BeaconTooltip\n    content="Body of the tooltip..."\n    title="Title comes here..."\n    event="hover"\n    placement="right"\n/>\n')))}b.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),d=i,m=s["".concat(r,".").concat(d)]||s[d]||u[d]||a;return n?o.a.createElement(m,l(l({ref:t},p),{},{components:n})):o.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);