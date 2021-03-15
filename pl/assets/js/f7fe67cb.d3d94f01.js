(window.webpackJsonp=window.webpackJsonp||[]).push([[1283],{305:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(410)),o={id:"beacon-tooltip",title:"Beacon Tooltip",sidebar_label:"Beacon Tooltip"},l={unversionedId:"beacon-tooltip",id:"beacon-tooltip",isDocsHomePage:!1,title:"Beacon Tooltip",description:"Komponent umieszczaj\u0105cy latarni\u0119 nawigacyjn\u0105 na lekcji, albo samodzielnie, albo do\u0142\u0105czony do celu. Po najechaniu lub klikni\u0119ciu na latarni\u0119 nawigacyjn\u0105, wy\u015bwietlana jest etykieta z narz\u0119dziami.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/beacon-tooltip.md",slug:"/beacon-tooltip",permalink:"/pl/docs/beacon-tooltip",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/beacon-tooltip.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21.02.2021",sidebar_label:"Beacon Tooltip",sidebar:"docs",previous:{title:"Two-Sample Proportion Test",permalink:"/pl/docs/tests/proptest2"},next:{title:"Clock",permalink:"/pl/docs/clock"}},c=[{value:"Opcje",id:"opcje",children:[]},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[]}],b={toc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Komponent umieszczaj\u0105cy latarni\u0119 nawigacyjn\u0105 na lekcji, albo samodzielnie, albo do\u0142\u0105czony do ",Object(r.b)("inlineCode",{parentName:"p"},"celu"),". Po najechaniu lub klikni\u0119ciu na latarni\u0119 nawigacyjn\u0105, wy\u015bwietlana jest etykieta z narz\u0119dziami."),Object(r.b)("h2",{id:"opcje"},"Opcje"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"title")," | ",Object(r.b)("inlineCode",{parentName:"li"},"(string|node)"),": tytu\u0142, kt\xf3ry ma by\u0107 wy\u015bwietlany w g\xf3rnej cz\u0119\u015bci etykiety narz\u0119dzia. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"content")," | ",Object(r.b)("inlineCode",{parentName:"li"},"(string|node)"),": zawarto\u015b\u0107 etykiety narz\u0119dzia. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'"),"content",Object(r.b)("inlineCode",{parentName:"li"}," comes here...'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"event")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": je\u015bli jest ustawione na ",Object(r.b)("inlineCode",{parentName:"li"},"klikni\u0119cie"),", etykieta narz\u0119dzi jest prze\u0142\u0105czana po klikni\u0119ciu na sygnalizator; je\u015bli jest ustawione na ",Object(r.b)("inlineCode",{parentName:"li"},"przechylenie"),", etykieta narz\u0119dzi jest aktywowana przez najechanie kursorem myszy. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'click'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"placement")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),': umieszczenie ko\u0144c\xf3wki narz\u0119dzia wzgl\u0119dem "celu" (',Object(r.b)("inlineCode",{parentName:"li"},"top"),", ",Object(r.b)("inlineCode",{parentName:"li"},"top-start"),", ",Object(r.b)("inlineCode",{parentName:"li"},"top-end"),", ",Object(r.b)("inlineCode",{parentName:"li"},"bottom"),", ",Object(r.b)("inlineCode",{parentName:"li"},"bottom-end"),", ",Object(r.b)("inlineCode",{parentName:"li"},"left"),", ",Object(r.b)("inlineCode",{parentName:"li"},"left-start"),", ",Object(r.b)("inlineCode",{parentName:"li"},"left-end"),", ",Object(r.b)("inlineCode",{parentName:"li"},"right"),", ",Object(r.b)("inlineCode",{parentName:"li"},"right-start"),", ",Object(r.b)("inlineCode",{parentName:"li"},"right-end"),", ",Object(r.b)("inlineCode",{parentName:"li"},"auto"),", lub ",Object(r.b)("inlineCode",{parentName:"li"},"center"),"). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'left'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"target")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": selektor klasy lub ID elementu do do\u0142\u0105czenia etykiety narz\u0119dzia do. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"offset")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),': odleg\u0142o\u015b\u0107 pomi\u0119dzy ko\u0144c\xf3wk\u0105 narz\u0119dzia a "celem" w pikselach. Default: ',Object(r.b)("inlineCode",{parentName:"li"},"15"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onChange")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": wywo\u0142anie zwrotne po zmianie stanu etykiety narz\u0119dzia. Otrzymuje dwa argumenty: ",Object(r.b)("inlineCode",{parentName:"li"},"aktion")," (",Object(r.b)("inlineCode",{parentName:"li"},"otwarcie")," lub ",Object(r.b)("inlineCode",{parentName:"li"},"zamkni\u0119cie"),") oraz przekazane ",Object(r.b)("inlineCode",{parentName:"li"},"propy"),".. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onChange() {}"),".")),Object(r.b)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BeaconTooltip\n    content="Body of the tooltip..."\n    title="Title comes here..."\n    event="hover"\n    placement="right"\n/>\n')))}p.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),p=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,s=d["".concat(o,".").concat(m)]||d[m]||u[m]||r;return n?i.a.createElement(s,l(l({ref:t},b),{},{components:n})):i.a.createElement(s,l({ref:t},b))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<r;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);