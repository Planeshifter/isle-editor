(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{179:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(410)),i={id:"sunburst",title:"Sunburst Plot",sidebar_label:"Sunburst Plot"},l={unversionedId:"plots/sunburst",id:"plots/sunburst",isDocsHomePage:!1,title:"Sunburst Plot",description:"Een d3-gebaseerd zonneplot voor het weergeven van paden.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/plots/sunburst.md",slug:"/plots/sunburst",permalink:"/nl/docs/plots/sunburst",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/sunburst.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614551296,sidebar_label:"Sunburst Plot",sidebar:"docs",previous:{title:"Scatter Plot Matrix",permalink:"/nl/docs/plots/scatterplot-matrix"},next:{title:"Violin Plot",permalink:"/nl/docs/plots/violinplot"}},c=[{value:"Opties",id:"opties",children:[]},{value:"Voorbeelden",id:"voorbeelden",children:[]}],b={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Een d3-gebaseerd zonneplot voor het weergeven van paden."),Object(o.b)("h2",{id:"opties"},"Opties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"categories")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array (required)"),": reeks van categorienamen. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"data")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object (required)"),": data-object. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"width")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": breedte van het perceel (in px). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"750"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"height")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": hoogte van het perceel (in px). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"600"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"style")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object"),": CSS inline stijlen. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"breadcrumbs")," | ",Object(o.b)("inlineCode",{parentName:"li"},"{w,h,s,t}"),": object met afmetingen: W' voor breedte, 'H' voor hoogte, 'S' voor afstand, 'T' voor breedte van tip/staart.. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"{\n  'w': 250,\n  'h': 50,\n  's': 5,\n  't': 15\n}"),".")),Object(o.b)("h2",{id:"voorbeelden"},"Voorbeelden"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"")))}u.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||s[d]||o;return n?a.a.createElement(m,l(l({ref:t},b),{},{components:n})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);