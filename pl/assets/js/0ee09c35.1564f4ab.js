(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{126:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),i=(a(0),a(410)),l=a(446),o=a(447),c={id:"barchart",title:"Bar Chart",sidebar_label:"Bar Chart"},b={unversionedId:"plots/barchart",id:"plots/barchart",isDocsHomePage:!1,title:"Bar Chart",description:"Wykres s\u0142upkowy.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/plots/barchart.md",slug:"/plots/barchart",permalink:"/pl/docs/plots/barchart",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/barchart.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614551296,formattedLastUpdatedAt:"28.02.2021",sidebar_label:"Bar Chart",sidebar:"docs",previous:{title:"Plotly",permalink:"/pl/docs/plotly"},next:{title:"Box Plot",permalink:"/pl/docs/plots/boxplot"}},s=[{value:"Opcje",id:"opcje",children:[]},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[]}],p={toc:s};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Wykres s\u0142upkowy."),Object(i.b)("h2",{id:"opcje"},"Opcje"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object (required)"),": przedmiot tablice warto\u015bci. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"variable")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": zmienna do wy\u015bwietlania. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"group")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|Factor)"),": zmienna grupowania. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"yvar")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": opcjonalna zmienna u\u017cywana do okre\u015blania wysoko\u015bci kolumn (w po\u0142\u0105czeniu z ",Object(i.b)("inlineCode",{parentName:"li"},"summary"),"). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"summary")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": nazwa statystyki do obliczenia dla ",Object(i.b)("inlineCode",{parentName:"li"},"yvar")," i do wy\u015bwietlenia jako wysoko\u015b\u0107 s\u0142upka dla ka\u017cdej kategorii (albo ",Object(i.b)("inlineCode",{parentName:"li"},"Min"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Max"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Mean"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Median"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Sum"),", ...). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"horizontal")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": czy wy\u015bwietla\u0107 paski w poziomie. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"stackBars")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": podczas grupowania kontroluje, czy pr\u0119ty nale\u017cy uk\u0142ada\u0107 jeden na drugim. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"relative")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": czy obliczy\u0107 cz\u0119stotliwo\u015bci wzgl\u0119dne wewn\u0105trz ka\u017cdej grupy. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"totalPercent")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": czy wy\u015bwietla\u0107 paski og\xf3lne jako cz\u0119stotliwo\u015bci wzgl\u0119dne. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"xOrder")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": ",Object(i.b)("inlineCode",{parentName:"li"},"og\xf3\u0142em"),", ",Object(i.b)("inlineCode",{parentName:"li"},"kategori\u0105"),", ",Object(i.b)("inlineCode",{parentName:"li"},"min"),", ",Object(i.b)("inlineCode",{parentName:"li"},"max"),", ",Object(i.b)("inlineCode",{parentName:"li"},"\u015brodkiem")," lub ",Object(i.b)("inlineCode",{parentName:"li"},"medianem"),". Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"direction")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": jak zamawia\u0107 pr\u0119ty wzd\u0142u\u017c osi x (",Object(i.b)("inlineCode",{parentName:"li"},"sko\u015bne")," lub ",Object(i.b)("inlineCode",{parentName:"li"},"sko\u015bne"),"). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'ascending'"),".")),Object(i.b)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),Object(i.b)(l.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Descending Order",value:"descending"},{label:"Relative Stacked Bars",value:"relativeStackedBars"}],lazy:!0,mdxType:"Tabs"},Object(i.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n/>\n'))),Object(i.b)(o.a,{value:"grouped",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    group="Gender"\n/>\n'))),Object(i.b)(o.a,{value:"descending",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    xOrder="total"\n    direction="descending"\n/>\n'))),Object(i.b)(o.a,{value:"relativeStackedBars",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    stackBars\n    relative\n    group="Gender"\n/>\n')))))}u.isMDXComponent=!0},410:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return a?r.a.createElement(m,o(o({ref:t},b),{},{components:a})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var b=2;b<i;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},435:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},441:function(e,t,a){"use strict";var n=a(0),r=a(442);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},442:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},446:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(441),l=a(435),o=a(58),c=a.n(o);const b=37,s=39;t.a=function(e){const{lazy:t,block:a,defaultValue:o,values:p,groupId:u,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:j}=Object(i.a)(),[O,f]=Object(n.useState)(o),y=n.Children.toArray(e.children),g=[];if(null!=u){const e=m[u];null!=e&&e!==O&&p.some((t=>t.value===e))&&f(e)}const v=e=>{const t=e.target,a=g.indexOf(t),n=y[a].props.value;f(n),null!=u&&j(u,n)},N=e=>{var t;let a;switch(e.keyCode){case s:const t=g.indexOf(e.target)+1;a=g[t]||g[0];break;case b:const n=g.indexOf(e.target)-1;a=g[n]||g[g.length-1]}null===(t=a)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},d)},p.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>g.push(e),onKeyDown:N,onFocus:v,onClick:v},t)))),t?Object(n.cloneElement)(y.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},447:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function({children:e,hidden:t,className:a}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:a},e)}}}]);