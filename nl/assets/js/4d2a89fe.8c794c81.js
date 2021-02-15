(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(406)),o={id:"map",title:"Map",sidebar_label:"Map"},l={unversionedId:"plots/map",id:"plots/map",isDocsHomePage:!1,title:"Map",description:"Een geografische kaart die kan worden geleverd met plaatsnamen of met lengte- en breedtegraadwaarden.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/plots/map.md",slug:"/plots/map",permalink:"/nl/docs/plots/map",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/map.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613417523,sidebar_label:"Map",sidebar:"docs",previous:{title:"Line Plot",permalink:"/nl/docs/plots/lineplot"},next:{title:"Mosaic Plot",permalink:"/nl/docs/plots/mosaicplot"}},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Een geografische kaart die kan worden geleverd met plaatsnamen of met lengte- en breedtegraadwaarden."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object (required)"),": object of value arrays voor elke variabele. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"scope")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": omvang van de weer te geven kaart. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'world'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"locations")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": naam van de variabele in ",Object(i.b)("inlineCode",{parentName:"li"},"data")," die de locatienaam van het bedrijf bevat. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"locationmode")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": ofwel ",Object(i.b)("inlineCode",{parentName:"li"},"ISO-3"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Amerikaanse staten"),", of ",Object(i.b)("inlineCode",{parentName:"li"},"landnamen")," die aangeven hoe waarden in ",Object(i.b)("inlineCode",{parentName:"li"},"locaties")," worden gecodeerd.. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'country names'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"longitude")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": naam van de variabele in ",Object(i.b)("inlineCode",{parentName:"li"},"data")," die de lengtegraad heeft. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"latitude")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": naam van de variabele in ",Object(i.b)("inlineCode",{parentName:"li"},"data")," met breedtegraadwaarden. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"showLand")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": of de geografische kenmerken op de kaart moeten worden weergegeven. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),".")),Object(i.b)("h2",{id:"examples"},"Examples"))}b.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=b(n),m=a,u=d["".concat(o,".").concat(m)]||d[m]||s[m]||i;return n?r.a.createElement(u,l(l({ref:t},p),{},{components:n})):r.a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);