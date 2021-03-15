(window.webpackJsonp=window.webpackJsonp||[]).push([[1257],{279:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var r=t(3),a=t(7),o=(t(0),t(410)),i={id:"revealer",title:"Revealer",sidebar_label:"Revealer"},l={unversionedId:"revealer",id:"revealer",isDocsHomePage:!1,title:"Revealer",description:"Een ISLE component die docenten kunnen gebruiken om selectief de inhoud van kinderen te onthullen of te verbergen aan alle leerlingen tijdens de les.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/revealer.md",slug:"/revealer",permalink:"/nl/docs/revealer",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/revealer.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21-2-2021",sidebar_label:"Revealer",sidebar:"docs",previous:{title:"Language",permalink:"/nl/docs/language"},next:{title:"Runner",permalink:"/nl/docs/runner"}},c=[{value:"Opties",id:"opties",children:[]},{value:"Voorbeelden",id:"voorbeelden",children:[]}],u={toc:c};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Een ISLE component die docenten kunnen gebruiken om selectief de inhoud van kinderen te onthullen of te verbergen aan alle leerlingen tijdens de les."),Object(o.b)("h2",{id:"opties"},"Opties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"message")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(string|node)"),": bericht dat moet worden weergegeven wanneer de inhoud verborgen is. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"show")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of er in eerste instantie kinderelementen moeten worden weergegeven. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),".")),Object(o.b)("h2",{id:"voorbeelden"},"Voorbeelden"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Revealer\n        id="mudgelove"\n    >\n        <div>\n            <h3>Content that will be revealed.</h3>\n        </div>\n</Revealer>\n')))}d.isMDXComponent=!0},410:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),d=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=d(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=d(t),b=r,f=s["".concat(i,".").concat(b)]||s[b]||p[b]||o;return t?a.a.createElement(f,l(l({ref:n},u),{},{components:t})):a.a.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);