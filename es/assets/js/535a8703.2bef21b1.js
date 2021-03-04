(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{170:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),l=(a(0),a(410)),o=a(447),i=a(448),c={id:"heatmap",title:"Heat Map",sidebar_label:"Heat Map"},s={unversionedId:"plots/heatmap",id:"plots/heatmap",isDocsHomePage:!1,title:"Heat Map",description:"Un mapa de calor para visualizar una relaci\xf3n entre dos variables.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/plots/heatmap.md",slug:"/plots/heatmap",permalink:"/es/docs/plots/heatmap",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/heatmap.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614546476,sidebar_label:"Heat Map",sidebar:"docs",previous:{title:"Contour Chart",permalink:"/es/docs/plots/contourchart"},next:{title:"Histogram",permalink:"/es/docs/plots/histogram"}},b=[{value:"Opciones",id:"opciones",children:[]},{value:"Ejemplos",id:"ejemplos",children:[]}],p={toc:b};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Un mapa de calor para visualizar una relaci\xf3n entre dos variables."),Object(l.b)("h2",{id:"opciones"},"Opciones"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"data")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object (required)"),": objeto de matrices de valores para cada variable. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"x")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string (required)"),": variable del eje x. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"y")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string (required)"),": variable del eje y. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"group")," | ",Object(l.b)("inlineCode",{parentName:"li"},"(string|Factor)"),": variable de agrupaci\xf3n. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"overlayPoints")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controla si se superponen puntos para cada observaci\xf3n. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"smoothSpan")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": el intervalo de suavizado. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"0.66"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"regressionMethod")," | ",Object(l.b)("inlineCode",{parentName:"li"},"array<string>"),': que contiene "lineal" y/o "suave" para superponer una l\xednea de regresi\xf3n lineal y/o suave.. Default: ',Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"alternateColor")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controla si se utiliza un esquema de color alternativo para el mapa de calor. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"commonXAxis")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controla si se utiliza un eje x com\xfan al crear m\xfaltiples mapas de calor por valor de una variable de agrupaci\xf3n. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"commonYAxis")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controla si se utiliza un eje Y com\xfan al crear m\xfaltiples mapas de calor por valor de una variable de agrupaci\xf3n. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),".")),Object(l.b)("h2",{id:"ejemplos"},"Ejemplos"),Object(l.b)(o.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Group",value:"withGroup"},{label:"Alternate Color",value:"alternateColor"},{label:"Overlay Points",value:"overlayPoints"},{label:"Regression Method",value:"regressionMethod"}],lazy:!0,mdxType:"Tabs"},Object(l.b)(i.a,{value:"minimal",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<HeatMap \n    data={heartdisease} \n    x="Interventions"\n    y="Age"\n/>\n'))),Object(l.b)(i.a,{value:"withGroup",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<HeatMap \n    data={heartdisease} \n    x="Interventions"\n    y="Age"\n    group="Gender"\n    commonXAxis\n/>\n'))),Object(l.b)(i.a,{value:"alternateColor",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<HeatMap \n    alternateColor\n    group="Gender"\n    data={heartdisease} \n    x="Interventions"\n    y="Age"\n    commonXAxis\n/>\n'))),Object(l.b)(i.a,{value:"overlayPoints",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<HeatMap \n    data={heartdisease} \n    x="Interventions"\n    y="Age"\n    overlayPoints \n/>\n'))),Object(l.b)(i.a,{value:"regressionMethod",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<HeatMap \n    data={heartdisease} \n    x=\"Interventions\"\n    y=\"Age\"\n    regressionMethod={[ 'linear', 'smooth' ]} \n/>\n")))))}u.isMDXComponent=!0},410:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,d=p["".concat(o,".").concat(m)]||p[m]||u[m]||l;return a?r.a.createElement(d,i(i({ref:t},s),{},{components:a})):r.a.createElement(d,i({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},435:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},444:function(e,t,a){"use strict";var n=a(0),r=a(445);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},445:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},447:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(444),o=a(435),i=a(58),c=a.n(i);const s=37,b=39;t.a=function(e){const{lazy:t,block:a,defaultValue:i,values:p,groupId:u,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:j}=Object(l.a)(),[O,v]=Object(n.useState)(i),f=n.Children.toArray(e.children),g=[];if(null!=u){const e=d[u];null!=e&&e!==O&&p.some((t=>t.value===e))&&v(e)}const y=e=>{const t=e.target,a=g.indexOf(t),n=f[a].props.value;v(n),null!=u&&j(u,n)},N=e=>{var t;let a;switch(e.keyCode){case b:const t=g.indexOf(e.target)+1;a=g[t]||g[0];break;case s:const n=g.indexOf(e.target)-1;a=g[n]||g[g.length-1]}null===(t=a)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},m)},p.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>g.push(e),onKeyDown:N,onFocus:y,onClick:y},t)))),t?Object(n.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},448:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function({children:e,hidden:t,className:a}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:a},e)}}}]);