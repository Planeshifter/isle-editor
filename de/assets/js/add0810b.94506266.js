(window.webpackJsonp=window.webpackJsonp||[]).push([[329],{263:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(406)),o={id:"distribution-beta",title:"Beta Distribution",sidebar_label:"Beta Distribution"},l={unversionedId:"learn/distribution-beta",id:"learn/distribution-beta",isDocsHomePage:!1,title:"Beta Distribution",description:"Eine Lernkomponente zur Berechnung von Wahrscheinlichkeiten einer Beta-Verteilung.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/learn/distribution-beta.md",slug:"/learn/distribution-beta",permalink:"/de/docs/learn/distribution-beta",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-beta.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612738524,sidebar_label:"Beta Distribution",sidebar:"docs",previous:{title:"Word Venn Diagram",permalink:"/de/docs/learn/word-venn-diagram"},next:{title:"Binomial Distribution",permalink:"/de/docs/learn/distribution-binomial"}},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Eine Lernkomponente zur Berechnung von Wahrscheinlichkeiten einer Beta-Verteilung."),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"domain")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object"),": Objekt aus ",Object(a.b)("inlineCode",{parentName:"li"},"x")," und ",Object(a.b)("inlineCode",{parentName:"li"},"y")," Arrays mit den Anfangs- und Endpunkten f\xfcr die jeweilige Achse. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"step")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(number|string)"),": Schrittweite des Scrolleingangs. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"0.01"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"tabs")," | ",Object(a.b)("inlineCode",{parentName:"li"},"array<string>"),": welche Registerkarten angezeigt werden sollen (entweder ",Object(a.b)("inlineCode",{parentName:"li"},"kleiner"),", ",Object(a.b)("inlineCode",{parentName:"li"},"gr\xf6\xdfer"),", oder ",Object(a.b)("inlineCode",{parentName:"li"},"Bereich"),"). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"[\n  'smaller',\n  'greater',\n  'range'\n]"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"style")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnBetaDistribution />\n")))}u.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),u=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(o,".").concat(d)]||s[d]||p[d]||a;return n?i.a.createElement(m,l(l({ref:t},b),{},{components:n})):i.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<a;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);