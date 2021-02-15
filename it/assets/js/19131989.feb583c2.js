(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),r=(n(0),n(406)),l={id:"meantest2",title:"Two-Sample Mean Test",sidebar_label:"Two-Sample Mean Test"},o={unversionedId:"tests/meantest2",id:"tests/meantest2",isDocsHomePage:!1,title:"Two-Sample Mean Test",description:"Test della media a due campioni.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/tests/meantest2.md",slug:"/tests/meantest2",permalink:"/it/docs/tests/meantest2",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tests/meantest2.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613419765,sidebar_label:"Two-Sample Mean Test",sidebar:"docs",previous:{title:"One-Sample Mean Test",permalink:"/it/docs/tests/meantest"},next:{title:"One-Sample Proportion Test",permalink:"/it/docs/tests/proptest"}},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Test della media a due campioni."),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"data")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object (required)"),": oggetto delle matrici di valori. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"x")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string (required)"),": nome della prima variabile. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"y")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),': nome della seconda variabile (deve essere fornito "y" o "gruppo"). Default: ',Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"group")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),': nome della variabile di raggruppamento (deve essere fornito "y" o "gruppo"). Default: ',Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"type")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": tipo di test (sia ",Object(r.b)("inlineCode",{parentName:"li"},"Z Test")," o ",Object(r.b)("inlineCode",{parentName:"li"},"T Test"),"). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'T Test'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"xstdev")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": prima deviazione standard (per il ",Object(r.b)("inlineCode",{parentName:"li"},"Z Test"),"). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"ystdev")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": seconda deviazione standard (per il ",Object(r.b)("inlineCode",{parentName:"li"},"Z Test"),"). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"alpha")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": livello di significativit\xe0. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"0.05"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"direction")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": direzione di prova (sia ",Object(r.b)("inlineCode",{parentName:"li"},"less"),", ",Object(r.b)("inlineCode",{parentName:"li"},"greater"),", o ",Object(r.b)("inlineCode",{parentName:"li"},"two-sided"),"). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'two-sided'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"diff")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": differenza sotto H0. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"0"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"showDecision")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controlla se visualizzare se l'ipotesi nulla viene respinta al livello di significativit\xe0 specificato. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),".")),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MeanTest2\n    data={heartdisease} \n    x="Cost"\n    group="Gender"\n/>\n')))}b.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,u=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?i.a.createElement(u,o(o({ref:t},s),{},{components:n})):i.a.createElement(u,o({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);