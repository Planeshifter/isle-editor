(window.webpackJsonp=window.webpackJsonp||[]).push([[330],{264:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),o=(n(0),n(406)),a={id:"distribution-poisson",title:"Poisson Distribution",sidebar_label:"Poisson Distribution"},s={unversionedId:"learn/distribution-poisson",id:"learn/distribution-poisson",isDocsHomePage:!1,title:"Poisson Distribution",description:"Eine Lernkomponente zur Berechnung von Wahrscheinlichkeiten einer Poisson-Verteilung.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/learn/distribution-poisson.md",slug:"/learn/distribution-poisson",permalink:"/de/docs/learn/distribution-poisson",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-poisson.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612738524,sidebar_label:"Poisson Distribution",sidebar:"docs",previous:{title:"Normal Distribution",permalink:"/de/docs/learn/distribution-normal"},next:{title:"Student's t Distribution",permalink:"/de/docs/learn/distribution-t"}},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Eine Lernkomponente zur Berechnung von Wahrscheinlichkeiten einer Poisson-Verteilung."),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"step")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(number|string)"),": Schrittweite des Scrolleingangs. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"0.1"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"style")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnPoissonDistribution />\n")))}u.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(a,".").concat(d)]||p[d]||b[d]||o;return n?i.a.createElement(m,s(s({ref:t},l),{},{components:n})):i.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);