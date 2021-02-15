(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{216:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),a=(n(0),n(406)),o={id:"r-help",title:"R Help",sidebar_label:"R Help"},l={unversionedId:"r/r-help",id:"r/r-help",isDocsHomePage:!1,title:"R Help",description:"Bringen Sie W\xf6rter dazu, die R-Dokumentation in einem modalen Fenster aufzurufen, wenn sie angeklickt werden.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/r/help.md",slug:"/r/r-help",permalink:"/de/docs/r/r-help",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/r/help.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612738524,sidebar_label:"R Help",sidebar:"docs",previous:{title:"Proportions Survey",permalink:"/de/docs/proportions-survey"},next:{title:"R Output",permalink:"/de/docs/r/r-output"}},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Bringen Sie W\xf6rter dazu, die R-Dokumentation in einem modalen Fenster aufzurufen, wenn sie angeklickt werden."),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"func")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": Name der ",Object(a.b)("inlineCode",{parentName:"li"},"R-Funktion"),", f\xfcr die die Dokumentation ge\xf6ffnet werden soll. Falls nicht angegeben, wird angenommen, dass der Inhalt des ",Object(a.b)("inlineCode",{parentName:"li"},"RHelp"),"-Tags gleich dem Namen der Funktion ist. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"''"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"library")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": Name des R-Pakets, in dem sich die Funktion befindet. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'base'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"visible")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob das modale Hilfefenster beim Starten ge\xf6ffnet werden soll. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),".")),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<span><RHelp library="graphics">hist</RHelp> is used to create a histogram.</span>\n')))}s.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||a;return n?i.a.createElement(m,l(l({ref:t},p),{},{components:n})):i.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);