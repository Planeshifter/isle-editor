(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{157:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),i=r(7),o=(r(0),r(410)),a={id:"dice-throwing",title:"Dice Throwing",sidebar_label:"Dice Throwing"},c={unversionedId:"learn/dice-throwing",id:"learn/dice-throwing",isDocsHomePage:!1,title:"Dice Throwing",description:"\u30b5\u30a4\u30b3\u30ed\u6295\u3052\u3092\u4f7f\u3063\u3066\u5927\u304d\u306a\u6570\u306e\u6cd5\u5247\u3092\u8aac\u660e\u3059\u308b\u5b66\u7fd2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/learn/dice-throwing.md",slug:"/learn/dice-throwing",permalink:"/ja/docs/learn/dice-throwing",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/dice-throwing.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614119449,formattedLastUpdatedAt:"2021/2/23",sidebar_label:"Dice Throwing",sidebar:"docs",previous:{title:"Cross Validation",permalink:"/ja/docs/learn/cross-validation"},next:{title:"Discrete Distribution",permalink:"/ja/docs/learn/discrete-distribution"}},l=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",children:[]},{value:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",id:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",children:[]}],u={toc:l};function s(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u30b5\u30a4\u30b3\u30ed\u6295\u3052\u3092\u4f7f\u3063\u3066\u5927\u304d\u306a\u6570\u306e\u6cd5\u5247\u3092\u8aac\u660e\u3059\u308b\u5b66\u7fd2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002"),Object(o.b)("h2",{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"},"\u30aa\u30d7\u30b7\u30e7\u30f3"),Object(o.b)("p",null,"\u7269\u4ef6\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),Object(o.b)("h2",{id:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"},"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnDiceThrowing />\n")))}s.isMDXComponent=!0},410:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,f=p["".concat(a,".").concat(b)]||p[b]||d[b]||o;return r?i.a.createElement(f,c(c({ref:t},u),{},{components:r})):i.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);