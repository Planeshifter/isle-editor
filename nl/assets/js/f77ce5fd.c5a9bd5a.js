(window.webpackJsonp=window.webpackJsonp||[]).push([[1277],{299:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var i=n(3),a=n(7),o=(n(0),n(410)),r={id:"beacon-tooltip",title:"Beacon Tooltip",sidebar_label:"Beacon Tooltip"},l={unversionedId:"beacon-tooltip",id:"beacon-tooltip",isDocsHomePage:!1,title:"Beacon Tooltip",description:"Onderdeel dat een baken in de les plaatst, zelfstandig of gekoppeld aan een target. Bij het zweven of klikken op het baken wordt een tooltip weergegeven.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/beacon-tooltip.md",slug:"/beacon-tooltip",permalink:"/nl/docs/beacon-tooltip",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/beacon-tooltip.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21-2-2021",sidebar_label:"Beacon Tooltip",sidebar:"docs",previous:{title:"Two-Sample Proportion Test",permalink:"/nl/docs/tests/proptest2"},next:{title:"Clock",permalink:"/nl/docs/clock"}},c=[{value:"Opties",id:"opties",children:[]},{value:"Voorbeelden",id:"voorbeelden",children:[]}],p={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Onderdeel dat een baken in de les plaatst, zelfstandig of gekoppeld aan een ",Object(o.b)("inlineCode",{parentName:"p"},"target"),". Bij het zweven of klikken op het baken wordt een tooltip weergegeven."),Object(o.b)("h2",{id:"opties"},"Opties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"title")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(string|node)"),": titel die bovenaan de tooltip moet worden weergegeven. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"content")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(string|node)"),": tooltipgehalte. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"'"),"content",Object(o.b)("inlineCode",{parentName:"li"}," comes here...'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"event")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": indien ingesteld op ",Object(o.b)("inlineCode",{parentName:"li"},"klik"),", wordt de tooltip bij het klikken op het baken omgeschakeld; indien ingesteld op ",Object(o.b)("inlineCode",{parentName:"li"},"zweven"),", wordt de tooltip geactiveerd via zweven.. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"'click'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"placement")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": plaatsing van de tooltip ten opzichte van ",Object(o.b)("inlineCode",{parentName:"li"},"target")," (ofwel ",Object(o.b)("inlineCode",{parentName:"li"},"top"),", ",Object(o.b)("inlineCode",{parentName:"li"},"top-start"),", ",Object(o.b)("inlineCode",{parentName:"li"},"top-end"),", ",Object(o.b)("inlineCode",{parentName:"li"},"bottom"),", ",Object(o.b)("inlineCode",{parentName:"li"},"bottom-end"),", ",Object(o.b)("inlineCode",{parentName:"li"},"left-start"),", ",Object(o.b)("inlineCode",{parentName:"li"},"left-start"),", ",Object(o.b)("inlineCode",{parentName:"li"},"left-end"),", ",Object(o.b)("inlineCode",{parentName:"li"},"right"),", ",Object(o.b)("inlineCode",{parentName:"li"},"right-start"),", ",Object(o.b)("inlineCode",{parentName:"li"},"right-start"),", ",Object(o.b)("inlineCode",{parentName:"li"},"auto"),", of ",Object(o.b)("inlineCode",{parentName:"li"},"center"),"). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"'left'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"target")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": klasse- of ID-selector voor element om tooltip aan te bevestigen. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"''"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"offset")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": afstand tussen de tooltip en ",Object(o.b)("inlineCode",{parentName:"li"},"target")," in pixels. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"15"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onChange")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": callback ingeroepen bij staatsverandering van de tooltip. Ontvangt twee argumenten: de ",Object(o.b)("inlineCode",{parentName:"li"},"actie")," (",Object(o.b)("inlineCode",{parentName:"li"},"openen")," of ",Object(o.b)("inlineCode",{parentName:"li"},"sluiten"),") en de gepasseerde ",Object(o.b)("inlineCode",{parentName:"li"},"props"),".. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onChange() {}"),".")),Object(o.b)("h2",{id:"voorbeelden"},"Voorbeelden"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BeaconTooltip\n    content="Body of the tooltip..."\n    title="Title comes here..."\n    event="hover"\n    placement="right"\n/>\n')))}b.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=b(n),m=i,u=d["".concat(r,".").concat(m)]||d[m]||s[m]||o;return n?a.a.createElement(u,l(l({ref:t},p),{},{components:n})):a.a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);