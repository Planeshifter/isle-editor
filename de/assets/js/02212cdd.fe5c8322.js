(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(3),r=n(7),a=(n(0),n(406)),o={id:"beacon-tooltip",title:"Beacon Tooltip",sidebar_label:"Beacon Tooltip"},l={unversionedId:"beacon-tooltip",id:"beacon-tooltip",isDocsHomePage:!1,title:"Beacon Tooltip",description:'Komponente, die eine Bake in der Lektion platziert, entweder unabh\xe4ngig oder an ein "Ziel" angeh\xe4ngt. Wenn Sie den Mauszeiger \xfcber die Bake bewegen oder darauf klicken, wird eine QuickInfo angezeigt.',source:"@site/i18n/de/docusaurus-plugin-content-docs/current/beacon-tooltip.md",slug:"/beacon-tooltip",permalink:"/de/docs/beacon-tooltip",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/beacon-tooltip.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612738524,sidebar_label:"Beacon Tooltip",sidebar:"docs",previous:{title:"Two-Sample Proportion Test",permalink:"/de/docs/tests/proptest2"},next:{title:"Clock",permalink:"/de/docs/clock"}},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,'Komponente, die eine Bake in der Lektion platziert, entweder unabh\xe4ngig oder an ein "Ziel" angeh\xe4ngt. Wenn Sie den Mauszeiger \xfcber die Bake bewegen oder darauf klicken, wird eine QuickInfo angezeigt.'),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"title")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(string|node)"),": Titel, der oben in der QuickInfo angezeigt werden soll. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"content")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(string|node)"),": Tooltip-Inhalt. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'"),"content",Object(a.b)("inlineCode",{parentName:"li"}," comes here...'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"event")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": wenn auf ",Object(a.b)("inlineCode",{parentName:"li"},"click")," gesetzt, wird der Tooltip beim Klicken auf die Bake umgeschaltet; wenn auf ",Object(a.b)("inlineCode",{parentName:"li"},"hover")," gesetzt, wird der Tooltip durch Schweben aktiviert. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'click'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"placement")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": Platzierung des Tooltips relativ zu ",Object(a.b)("inlineCode",{parentName:"li"},"target")," (entweder ",Object(a.b)("inlineCode",{parentName:"li"},"top"),", ",Object(a.b)("inlineCode",{parentName:"li"},"top-start"),", ",Object(a.b)("inlineCode",{parentName:"li"},"top-end"),", ",Object(a.b)("inlineCode",{parentName:"li"},"bottom"),", ",Object(a.b)("inlineCode",{parentName:"li"},"bottom-end"),", ",Object(a.b)("inlineCode",{parentName:"li"},"left"),", ",Object(a.b)("inlineCode",{parentName:"li"},"left-start"),", ",Object(a.b)("inlineCode",{parentName:"li"},"left-end"),", ",Object(a.b)("inlineCode",{parentName:"li"},"right"),", ",Object(a.b)("inlineCode",{parentName:"li"},"right-start"),", ",Object(a.b)("inlineCode",{parentName:"li"},"right-end"),", ",Object(a.b)("inlineCode",{parentName:"li"},"auto"),", oder ",Object(a.b)("inlineCode",{parentName:"li"},"center"),"). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'left'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"target")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": Klasse oder ID-Selektor f\xfcr Element, an das Tooltip angeh\xe4ngt werden soll. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"''"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"offset")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": Abstand zwischen Tooltip und ",Object(a.b)("inlineCode",{parentName:"li"},"Target")," in Pixel. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"15"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onChange")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": Callback, der bei einer Zustands\xe4nderung des Tooltips aufgerufen wird. Erh\xe4lt zwei Argumente: die ",Object(a.b)("inlineCode",{parentName:"li"},"Action")," (",Object(a.b)("inlineCode",{parentName:"li"},"open")," oder ",Object(a.b)("inlineCode",{parentName:"li"},"close"),") und die \xfcbergebenen ",Object(a.b)("inlineCode",{parentName:"li"},"Pros"),".. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onChange() {}"),".")),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BeaconTooltip\n    content="Body of the tooltip..."\n    title="Title comes here..."\n    event="hover"\n    placement="right"\n/>\n')))}p.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=p(n),s=i,m=d["".concat(o,".").concat(s)]||d[s]||u[s]||a;return n?r.a.createElement(m,l(l({ref:t},b),{},{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var b=2;b<a;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);