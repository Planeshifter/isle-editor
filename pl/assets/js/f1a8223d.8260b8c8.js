(window.webpackJsonp=window.webpackJsonp||[]).push([[1278],{300:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(410)),o={id:"causality-diagram",title:"Causality Diagram",sidebar_label:"Causality Diagram"},c={unversionedId:"learn/causality-diagram",id:"learn/causality-diagram",isDocsHomePage:!1,title:"Causality Diagram",description:"Komponent ucz\u0105cy si\u0119 ilustruj\u0105cy wp\u0142yw zagmatwanej zmiennej podczas oceny zwi\u0105zku przyczynowego mi\u0119dzy dwiema zmiennymi oraz randomizacji.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/learn/causality-diagram.md",slug:"/learn/causality-diagram",permalink:"/pl/docs/learn/causality-diagram",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/causality-diagram.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21.02.2021",sidebar_label:"Causality Diagram",sidebar:"docs",previous:{title:"Unveil",permalink:"/pl/docs/unveil"},next:{title:"Continuous CLT",permalink:"/pl/docs/learn/clt-continuous"}},l=[{value:"Opcje",id:"opcje",children:[]},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Komponent ucz\u0105cy si\u0119 ilustruj\u0105cy wp\u0142yw zagmatwanej zmiennej podczas oceny zwi\u0105zku przyczynowego mi\u0119dzy dwiema zmiennymi oraz randomizacji."),Object(i.b)("h2",{id:"opcje"},"Opcje"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"x")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|node)"),": nazwa zmiennej obja\u015bniaj\u0105cej. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'Lights at Night'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"y")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|node)"),": nazwa zmiennej odpowiedzi. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'Child Myopia'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"z")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|node)"),": nazwa zmiennej myl\u0105cej. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'Parental Myopia'"),".")),Object(i.b)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<LearnCausalityDiagram x="X" y="Y" z="Z" />\n')))}p.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return y}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,y=s["".concat(o,".").concat(m)]||s[m]||d[m]||i;return n?r.a.createElement(y,c(c({ref:t},u),{},{components:n})):r.a.createElement(y,c({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);