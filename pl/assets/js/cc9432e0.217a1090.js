(window.webpackJsonp=window.webpackJsonp||[]).push([[1249],{275:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return u})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(410)),c=a(447),i=a(448),o={id:"frequency-table",title:"Frequency Table",sidebar_label:"Frequency Table"},u={unversionedId:"tables/frequency-table",id:"tables/frequency-table",isDocsHomePage:!1,title:"Frequency Table",description:"Tabela cz\u0119stotliwo\u015bci.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/tables/frequency-table.md",slug:"/tables/frequency-table",permalink:"/pl/docs/tables/frequency-table",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tables/frequency-table.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614628319,sidebar_label:"Frequency Table",sidebar:"docs",previous:{title:"Contingency Table",permalink:"/pl/docs/tables/contingency-table"},next:{title:"ANOVA",permalink:"/pl/docs/tests/anova"}},b=[{value:"Opcje",id:"opcje",children:[]},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[]}],s={toc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Tabela cz\u0119stotliwo\u015bci."),Object(l.b)("h2",{id:"opcje"},"Opcje"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"data")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object (required)"),": przedmiot tablice warto\u015bci. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"variable")," | ",Object(l.b)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": nazwa zmiennej kategorycznej, kt\xf3ra ma zosta\u0107 wy\u015bwietlona. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"calculateCounts")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy wy\u015bwietlane s\u0105 liczby bezwzgl\u0119dne. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"true"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"calculateRelative")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy wy\u015bwietlane s\u0105 cz\u0119stotliwo\u015bci wzgl\u0119dne. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"group")," | ",Object(l.b)("inlineCode",{parentName:"li"},"(string|Factor)"),": nazwa zmiennej grupuj\u0105cej. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"nDecimalPlaces")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": liczba miejsc po przecinku dla cz\u0119stotliwo\u015bci wzgl\u0119dnych wy\u015bwietlanych w tabeli. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"3"),".")),Object(l.b)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),Object(l.b)(c.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Relative Frequency",value:"relativeFrequency"},{label:"Grouped",value:"grouped"},{label:"Number of Decimals",value:"nDecimals"}],lazy:!0,mdxType:"Tabs"},Object(l.b)(i.a,{value:"minimal",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FrequencyTable\n    data={heartdisease} \n    variable="Drugs"\n/>\n'))),Object(l.b)(i.a,{value:"relativeFrequency",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FrequencyTable\n    data={heartdisease} \n    variable="Drugs"\n    calculateRelative\n/>\n'))),Object(l.b)(i.a,{value:"grouped",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FrequencyTable\n    data={heartdisease} \n    variable="Drugs"\n    group="Gender"\n/>\n'))),Object(l.b)(i.a,{value:"nDecimals",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FrequencyTable\n    data={heartdisease} \n    variable="Drugs"\n    calculateRelative \n    nDecimalPlaces={3}\n/>\n')))))}p.isMDXComponent=!0},410:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),b=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=b(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=b(a),m=n,d=s["".concat(c,".").concat(m)]||s[m]||p[m]||l;return a?r.a.createElement(d,i(i({ref:t},u),{},{components:a})):r.a.createElement(d,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<l;u++)c[u]=a[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},435:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},444:function(e,t,a){"use strict";var n=a(0),r=a(445);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},445:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},447:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(444),c=a(435),i=a(58),o=a.n(i);const u=37,b=39;t.a=function(e){const{lazy:t,block:a,defaultValue:i,values:s,groupId:p,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(l.a)(),[y,j]=Object(n.useState)(i),O=n.Children.toArray(e.children),v=[];if(null!=p){const e=d[p];null!=e&&e!==y&&s.some((t=>t.value===e))&&j(e)}const g=e=>{const t=e.target,a=v.indexOf(t),n=O[a].props.value;j(n),null!=p&&f(p,n)},N=e=>{var t;let a;switch(e.keyCode){case b:const t=v.indexOf(e.target)+1;a=v[t]||v[0];break;case u:const n=v.indexOf(e.target)-1;a=v[n]||v[v.length-1]}null===(t=a)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a},m)},s.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,className:Object(c.a)("tabs__item",o.a.tabItem,{"tabs__item--active":y===e}),key:e,ref:e=>v.push(e),onKeyDown:N,onFocus:g,onClick:g},t)))),t?Object(n.cloneElement)(O.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},O.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}},448:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function({children:e,hidden:t,className:a}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:a},e)}}}]);