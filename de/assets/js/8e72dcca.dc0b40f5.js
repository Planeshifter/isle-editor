(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{232:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),a=(n(0),n(406)),l={id:"histogram",title:"Histogram",sidebar_label:"Histogram"},o={unversionedId:"plots/histogram",id:"plots/histogram",isDocsHomePage:!1,title:"Histogram",description:"Ein Histogramm.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/plots/histogram.md",slug:"/plots/histogram",permalink:"/de/docs/plots/histogram",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/histogram.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613417523,sidebar_label:"Histogram",sidebar:"docs",previous:{title:"Heat Map",permalink:"/de/docs/plots/heatmap"},next:{title:"Line Plot",permalink:"/de/docs/plots/lineplot"}},b=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:b};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Ein Histogramm."),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"data")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object (required)"),": Objekt von Werte-Arrays. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"variable")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string (required)"),": Variable zur Anzeige. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"group")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": Gruppierungsvariable. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"groupMode")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": ob gruppierte Histogramme \xfcbereinander (",Object(a.b)("inlineCode",{parentName:"li"},"Overlay"),") oder in separaten Plots nebeneinander (",Object(a.b)("inlineCode",{parentName:"li"},"Facets"),") liegen sollen. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'Overlay'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"displayDensity")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob Dichtewerte anstelle von Z\xe4hlwerten auf der y-Achse angezeigt werden sollen. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"densityType")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": bei der Darstellung von Dichten kann entweder eine parametrische Verteilung (",Object(a.b)("inlineCode",{parentName:"li"},"Normal"),", ",Object(a.b)("inlineCode",{parentName:"li"},"Uniform")," oder ",Object(a.b)("inlineCode",{parentName:"li"},"Exponential"),") oder eine nicht-parametrische Kernel-Dichte-Sch\xe4tzung (",Object(a.b)("inlineCode",{parentName:"li"},"Daten-gesteuert"),") \xfcberlagert werden. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"bandwidthAdjust")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": undefined. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"1"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"binStrategy")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": Binning-Strategie (",Object(a.b)("inlineCode",{parentName:"li"},"Automatisch"),", ",Object(a.b)("inlineCode",{parentName:"li"},"Anzahl der Bins w\xe4hlen")," oder ",Object(a.b)("inlineCode",{parentName:"li"},"Bin-Breite einstellen"),"). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'Automatic'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"nBins")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": Benutzerdefinierte Anzahl von F\xe4chern. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"nCols")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": Anzahl der Spalten bei der Anzeige eines facettierten gruppierten Histogramms. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"xbins")," | ",Object(a.b)("inlineCode",{parentName:"li"},"{start,size,end}"),": undefined. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Cost"\n    group="Drugs"\n/>\n')))}p.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,d=s["".concat(l,".").concat(m)]||s[m]||u[m]||a;return n?i.a.createElement(d,o(o({ref:t},c),{},{components:n})):i.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);