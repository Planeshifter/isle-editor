(window.webpackJsonp=window.webpackJsonp||[]).push([[330],{264:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(406)),i={id:"runner",title:"Runner",sidebar_label:"Runner"},c={unversionedId:"runner",id:"runner",isDocsHomePage:!1,title:"Runner",description:"O componente do rotor executar\xe1 uma fun\xe7\xe3o fornecida uma vez ou em um determinado intervalo.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/runner.md",slug:"/runner",permalink:"/pt/docs/runner",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/runner.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612739298,sidebar_label:"Runner",sidebar:"docs",previous:{title:"Revealer",permalink:"/pt/docs/revealer"},next:{title:"Timer",permalink:"/pt/docs/timer"}},l=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"O componente do rotor executar\xe1 uma fun\xe7\xe3o fornecida uma vez ou em um determinado intervalo."),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"active")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),': controla se o corredor deve estar ativo. Ao ser ativada, a fun\xe7\xe3o "Avaliar" \xe9 chamada no intervalo determinado (ou uma vez).. Default: ',Object(o.b)("inlineCode",{parentName:"li"},"true"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"interval")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": n\xfamero de milissegundos entre as invoca\xe7\xf5es de ",Object(o.b)("inlineCode",{parentName:"li"},"onEvaluate'. Se nenhum intervalo for definido, a fun\xe7\xe3o s\xf3 \xe9 invocada uma vez.. Default: "),"none`."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onEvaluate")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o a ser invocada. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onEvaluate() {}"),".")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Runner\n    interval={2000}\n    onEvaluate={() => { console.log( 'Two seconds have passed...' ); }}\n/>\n")))}p.isMDXComponent=!0},406:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=r,b=s["".concat(i,".").concat(m)]||s[m]||d[m]||o;return t?a.a.createElement(b,c(c({ref:n},u),{},{components:t})):a.a.createElement(b,c({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);