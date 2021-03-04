(window.webpackJsonp=window.webpackJsonp||[]).push([[1242],{267:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return b})),t.d(a,"default",(function(){return p}));var n=t(3),r=t(7),l=(t(0),t(410)),i=t(447),o=t(448),c={id:"barchart",title:"Bar Chart",sidebar_label:"Bar Chart"},s={unversionedId:"plots/barchart",id:"plots/barchart",isDocsHomePage:!1,title:"Bar Chart",description:"Gr\xe1fico de barras.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/plots/barchart.md",slug:"/plots/barchart",permalink:"/es/docs/plots/barchart",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/barchart.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614551296,sidebar_label:"Bar Chart",sidebar:"docs",previous:{title:"Plotly",permalink:"/es/docs/plotly"},next:{title:"Box Plot",permalink:"/es/docs/plots/boxplot"}},b=[{value:"Opciones",id:"opciones",children:[]},{value:"Ejemplos",id:"ejemplos",children:[]}],u={toc:b};function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},u,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Gr\xe1fico de barras."),Object(l.b)("h2",{id:"opciones"},"Opciones"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"data")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object (required)"),": objeto de las matrices de valor. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"variable")," | ",Object(l.b)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": variable a mostrar. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"group")," | ",Object(l.b)("inlineCode",{parentName:"li"},"(string|Factor)"),": variable de agrupaci\xf3n. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"yvar")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": variable opcional utilizada para las alturas de las columnas (junto con ",Object(l.b)("inlineCode",{parentName:"li"},"summary"),"). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"summary")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": nombre de la estad\xedstica a calcular para ",Object(l.b)("inlineCode",{parentName:"li"},"yvar")," y a mostrar como altura de barra para cada categor\xeda (ya sea ",Object(l.b)("inlineCode",{parentName:"li"},"Min"),", ",Object(l.b)("inlineCode",{parentName:"li"},"Max"),", ",Object(l.b)("inlineCode",{parentName:"li"},"Mean"),", ",Object(l.b)("inlineCode",{parentName:"li"},"Median"),", ",Object(l.b)("inlineCode",{parentName:"li"},"Sum"),", ...). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"horizontal")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": si mostrar las barras horizontalmente. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"stackBars")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": cuando se agrupan, controla si se apilan las barras una encima de la otra. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"relative")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": si calcular las frecuencias relativas dentro de cada grupo. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"totalPercent")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": si mostrar las barras generales como frecuencias relativas. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"xOrder")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),': ya sea "total", "categor\xeda", "min", "m\xe1ximo", "medio", o "medio".. Default: ',Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"direction")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": c\xf3mo ordenar las barras a lo largo del eje x (",Object(l.b)("inlineCode",{parentName:"li"},"ascendente")," o ",Object(l.b)("inlineCode",{parentName:"li"},"descendente"),"). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"'ascending'"),".")),Object(l.b)("h2",{id:"ejemplos"},"Ejemplos"),Object(l.b)(i.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Descending Order",value:"descending"},{label:"Relative Stacked Bars",value:"relativeStackedBars"}],lazy:!0,mdxType:"Tabs"},Object(l.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n/>\n'))),Object(l.b)(o.a,{value:"grouped",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    group="Gender"\n/>\n'))),Object(l.b)(o.a,{value:"descending",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    xOrder="total"\n    direction="descending"\n/>\n'))),Object(l.b)(o.a,{value:"relativeStackedBars",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    stackBars\n    relative\n    group="Gender"\n/>\n')))))}p.isMDXComponent=!0},410:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return m}));var n=t(0),r=t.n(n);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),b=function(e){var a=r.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=b(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(t),d=n,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||l;return t?r.a.createElement(m,o(o({ref:a},s),{},{components:t})):r.a.createElement(m,o({ref:a},s))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},435:function(e,a,t){"use strict";function n(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}a.a=function(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(r&&(r+=" "),r+=a);return r}},444:function(e,a,t){"use strict";var n=t(0),r=t(445);a.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},445:function(e,a,t){"use strict";var n=t(0);const r=Object(n.createContext)(void 0);a.a=r},447:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(444),i=t(435),o=t(58),c=t.n(o);const s=37,b=39;a.a=function(e){const{lazy:a,block:t,defaultValue:o,values:u,groupId:p,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:O}=Object(l.a)(),[j,f]=Object(n.useState)(o),v=n.Children.toArray(e.children),g=[];if(null!=p){const e=m[p];null!=e&&e!==j&&u.some((a=>a.value===e))&&f(e)}const N=e=>{const a=e.target,t=g.indexOf(a),n=v[t].props.value;f(n),null!=p&&O(p,n)},y=e=>{var a;let t;switch(e.keyCode){case b:const a=g.indexOf(e.target)+1;t=g[a]||g[0];break;case s:const n=g.indexOf(e.target)-1;t=g[n]||g[g.length-1]}null===(a=t)||void 0===a||a.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},d)},u.map((({value:e,label:a})=>r.a.createElement("li",{role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===e}),key:e,ref:e=>g.push(e),onKeyDown:y,onFocus:N,onClick:N},a)))),a?Object(n.cloneElement)(v.filter((e=>e.props.value===j))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map(((e,a)=>Object(n.cloneElement)(e,{key:a,hidden:e.props.value!==j})))))}},448:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function({children:e,hidden:a,className:t}){return r.a.createElement("div",{role:"tabpanel",hidden:a,className:t},e)}}}]);