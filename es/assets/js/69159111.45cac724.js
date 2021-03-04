(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{185:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(410)),l=n(447),o=n(448),s={id:"histogram",title:"Histogram",sidebar_label:"Histogram"},c={unversionedId:"plots/histogram",id:"plots/histogram",isDocsHomePage:!1,title:"Histogram",description:"Un histograma.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/plots/histogram.md",slug:"/plots/histogram",permalink:"/es/docs/plots/histogram",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/histogram.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614551296,sidebar_label:"Histogram",sidebar:"docs",previous:{title:"Heat Map",permalink:"/es/docs/plots/heatmap"},next:{title:"Line Plot",permalink:"/es/docs/plots/lineplot"}},b=[{value:"Opciones",id:"opciones",children:[]},{value:"Ejemplos",id:"ejemplos",children:[]}],p={toc:b};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Un histograma."),Object(i.b)("h2",{id:"opciones"},"Opciones"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object (required)"),": objeto de las matrices de valor. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"variable")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string (required)"),": variable a mostrar. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"group")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|Factor)"),": variable de agrupaci\xf3n. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"groupMode")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": si superponer los histogramas agrupados unos sobre otros (",Object(i.b)("inlineCode",{parentName:"li"},"Superponer"),") o en parcelas separadas una al lado de la otra (",Object(i.b)("inlineCode",{parentName:"li"},"Facetas"),"). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'Overlay'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"displayDensity")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controla si se muestran los valores de densidad en lugar de los recuentos en el eje y. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"densityType")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": cuando se muestran las densidades, se puede superponer una distribuci\xf3n param\xe9trica (",Object(i.b)("inlineCode",{parentName:"li"},"Normal"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Uniforme"),", o ",Object(i.b)("inlineCode",{parentName:"li"},"Exponencial"),") o una estimaci\xf3n de la densidad del n\xfacleo no param\xe9trica (",Object(i.b)("inlineCode",{parentName:"li"},"Data-driven"),"). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"bandwidthAdjust")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": ajuste manual del ancho de banda de la densidad del kernel (aplicable s\xf3lo cuando ",Object(i.b)("inlineCode",{parentName:"li"},"densityType")," se establece como ",Object(i.b)("inlineCode",{parentName:"li"},"Data-driven"),"). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"binStrategy")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": la estrategia de los contenedores (",Object(i.b)("inlineCode",{parentName:"li"},"Autom\xe1tico"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Seleccionar # de contenedores"),", o ",Object(i.b)("inlineCode",{parentName:"li"},"Ajustar el ancho de los contenedores"),"). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'Automatic'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"nBins")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": n\xfamero personalizado de contenedores. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"nCols")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": n\xfamero de columnas cuando se muestra un histograma agrupado facetado. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"xBins")," | ",Object(i.b)("inlineCode",{parentName:"li"},"{start,size,end}"),': con propiedades de "inicio", "tama\xf1o" y "fin" que rigen el comportamiento de los contenedores.. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(i.b)("h2",{id:"ejemplos"},"Ejemplos"),Object(i.b)(l.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Facetted Plot",value:"groupModeFactes"},{label:"Display Density",value:"displayDensity"},{label:"No of Bins",value:"noBins"}],lazy:!0,mdxType:"Tabs"},Object(i.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Age"\n/>\n'))),Object(i.b)(o.a,{value:"grouped",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n/>\n'))),Object(i.b)(o.a,{value:"groupModeFactes",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n    nCols={2}\n    groupMode="Facets"\n/>\n'))),Object(i.b)(o.a,{value:"displayDensity",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n    displayDensity \n    densityType="Uniform"\n/>\n'))),Object(i.b)(o.a,{value:"noBins",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n    binStrategy="Select # of bins"\n    nBins={90}\n/>\n')))))}u.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return n?r.a.createElement(m,o(o({ref:t},c),{},{components:n})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},435:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},444:function(e,t,n){"use strict";var a=n(0),r=n(445);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},445:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},447:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(444),l=n(435),o=n(58),s=n.n(o);const c=37,b=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:p,groupId:u,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:j}=Object(i.a)(),[O,g]=Object(a.useState)(o),f=a.Children.toArray(e.children),v=[];if(null!=u){const e=m[u];null!=e&&e!==O&&p.some((t=>t.value===e))&&g(e)}const N=e=>{const t=e.target,n=v.indexOf(t),a=f[n].props.value;g(a),null!=u&&j(u,a)},y=e=>{var t;let n;switch(e.keyCode){case b:const t=v.indexOf(e.target)+1;n=v[t]||v[0];break;case c:const a=v.indexOf(e.target)-1;n=v[a]||v[v.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},d)},p.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(l.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>v.push(e),onKeyDown:y,onFocus:N,onClick:N},t)))),t?Object(a.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},448:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);