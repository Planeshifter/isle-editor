(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{242:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),a=(n(0),n(406)),o={id:"distribution-chisquare",title:"Chi-squared Distribution",sidebar_label:"Chi-squared Distribution"},l={unversionedId:"learn/distribution-chisquare",id:"learn/distribution-chisquare",isDocsHomePage:!1,title:"Chi-squared Distribution",description:"Eine Lernkomponente zur Berechnung von Wahrscheinlichkeiten einer Chi-Quadrat-Verteilung.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/learn/distribution-chisquare.md",slug:"/learn/distribution-chisquare",permalink:"/de/docs/learn/distribution-chisquare",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-chisquare.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612738524,sidebar_label:"Chi-squared Distribution",sidebar:"docs",previous:{title:"Binomial Distribution",permalink:"/de/docs/learn/distribution-binomial"},next:{title:"Exponential Distribution",permalink:"/de/docs/learn/distribution-exponential"}},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Eine Lernkomponente zur Berechnung von Wahrscheinlichkeiten einer Chi-Quadrat-Verteilung."),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"step")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(number|string)"),": Schrittweite des Scrolleingangs. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"0.01"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"maxDF")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": maximale Freiheitsgrade, die im Eingabefeld gew\xe4hlt werden k\xf6nnen. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"50"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"minDF")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": minimale Freiheitsgrade, die im Eingabefeld gew\xe4hlt werden k\xf6nnen. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"1"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"style")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnChisquareDistribution />\n")))}s.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||a;return n?i.a.createElement(m,l(l({ref:t},u),{},{components:n})):i.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);