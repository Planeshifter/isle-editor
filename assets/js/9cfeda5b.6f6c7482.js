(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{236:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var a=t(3),r=t(7),i=(t(0),t(410)),o={id:"language",title:"Language",sidebar_label:"Language"},l={unversionedId:"language",id:"language",isDocsHomePage:!1,title:"Language",description:"Language component, which expects several language-specific tags (e.g., Language.Spanish) as its children. If a the component has as its child a language tag for the currently selected language, then its contents will be displayed. If no language-specific tag is available, the tag for the default language (as specified in the preamble of the ISLE lesson) or, if also not available, the first language-specific tag and its contents will be displayed.",source:"@site/docs/language.md",slug:"/language",permalink:"/docs/language",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/language.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614119449,formattedLastUpdatedAt:"2/23/2021",sidebar_label:"Language",sidebar:"docs",previous:{title:"Generator",permalink:"/docs/generator"},next:{title:"Revealer",permalink:"/docs/revealer"}},s=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:s};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Language component, which expects several language-specific tags (e.g., Language.Spanish) as its children. If a the component has as its child a language tag for the currently selected language, then its contents will be displayed. If no language-specific tag is available, the tag for the default language (as specified in the preamble of the ISLE lesson) or, if also not available, the first language-specific tag and its contents will be displayed."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("p",null,"No properties available."),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Language>\n\n<Language.English>\n\n# This is an ISLE activity.\n\n</Language.English>\n\n<Language.Spanish>\n\n# Esta es una actividad de la ISLE.\n\n</Language.Spanish>\n\n<Language.German>\n\n# Dies ist eine ISLE-Aktivit\xe4t.\n\n</Language.German>\n\n<Language.Chinese>\n\n# \u8fd9\u662f\u4e00\u9879ISLE\u6d3b\u52a8\u3002\n\n</Language.Chinese>\n\n</Language>\n")))}u.isMDXComponent=!0},410:function(e,n,t){"use strict";t.d(n,"a",(function(){return g})),t.d(n,"b",(function(){return f}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),u=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},g=function(e){var n=u(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=u(t),d=a,f=g["".concat(o,".").concat(d)]||g[d]||p[d]||i;return t?r.a.createElement(f,l(l({ref:n},c),{},{components:t})):r.a.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);