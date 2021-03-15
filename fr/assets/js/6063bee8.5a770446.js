(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{187:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(410)),l={id:"causality-diagram",title:"Causality Diagram",sidebar_label:"Causality Diagram"},o={unversionedId:"learn/causality-diagram",id:"learn/causality-diagram",isDocsHomePage:!1,title:"Causality Diagram",description:"Un \xe9l\xe9ment d'apprentissage illustrant l'impact d'une variable confondante lors de l'\xe9valuation d'une relation causale entre deux variables et de la randomisation.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/learn/causality-diagram.md",slug:"/learn/causality-diagram",permalink:"/fr/docs/learn/causality-diagram",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/causality-diagram.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21/02/2021",sidebar_label:"Causality Diagram",sidebar:"docs",previous:{title:"Unveil",permalink:"/fr/docs/unveil"},next:{title:"Continuous CLT",permalink:"/fr/docs/learn/clt-continuous"}},c=[{value:"Options",id:"options",children:[]},{value:"Exemples",id:"exemples",children:[]}],u={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Un \xe9l\xe9ment d'apprentissage illustrant l'impact d'une variable confondante lors de l'\xe9valuation d'une relation causale entre deux variables et de la randomisation."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"x")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|node)"),": nom de la variable explicative. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'Lights at Night'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"y")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|node)"),": nom de la variable de r\xe9ponse. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'Child Myopia'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"z")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|node)"),": nom de la variable confondante. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'Parental Myopia'"),".")),Object(i.b)("h2",{id:"exemples"},"Exemples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<LearnCausalityDiagram x="X" y="Y" z="Z" />\n')))}s.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),b=a,m=p["".concat(l,".").concat(b)]||p[b]||d[b]||i;return n?r.a.createElement(m,o(o({ref:t},u),{},{components:n})):r.a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);