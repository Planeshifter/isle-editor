(window.webpackJsonp=window.webpackJsonp||[]).push([[1238],{264:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(7),r=(n(0),n(410)),l=n(447),o=n(448),s={id:"histogram",title:"Histogram",sidebar_label:"Histogram"},c={unversionedId:"plots/histogram",id:"plots/histogram",isDocsHomePage:!1,title:"Histogram",description:"Un istogramma.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/plots/histogram.md",slug:"/plots/histogram",permalink:"/it/docs/plots/histogram",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/histogram.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614551296,sidebar_label:"Histogram",sidebar:"docs",previous:{title:"Heat Map",permalink:"/it/docs/plots/heatmap"},next:{title:"Line Plot",permalink:"/it/docs/plots/lineplot"}},b=[{value:"Opzioni",id:"opzioni",children:[]},{value:"Esempi",id:"esempi",children:[]}],p={toc:b};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Un istogramma."),Object(r.b)("h2",{id:"opzioni"},"Opzioni"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"data")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object (required)"),": oggetto delle matrici di valori. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"variable")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string (required)"),": variabile da visualizzare. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"group")," | ",Object(r.b)("inlineCode",{parentName:"li"},"(string|Factor)"),": variabile di raggruppamento. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"groupMode")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": se sovrapporre istogrammi raggruppati l'uno sull'altro (",Object(r.b)("inlineCode",{parentName:"li"},"Overlay"),") o in trame separate l'una accanto all'altra (",Object(r.b)("inlineCode",{parentName:"li"},"Facets"),"). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'Overlay'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"displayDensity")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controlla se visualizzare i valori di densit\xe0 invece dei conteggi sull'asse y. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"densityType")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": quando si visualizzano le densit\xe0, si pu\xf2 sia sovrapporre una distribuzione parametrica (",Object(r.b)("inlineCode",{parentName:"li"},"Normale"),", ",Object(r.b)("inlineCode",{parentName:"li"},"Uniforme"),", o ",Object(r.b)("inlineCode",{parentName:"li"},"Exponenziale"),") sia una stima non parametrica della densit\xe0 del kernel (",Object(r.b)("inlineCode",{parentName:"li"},"Data-driven"),"). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"bandwidthAdjust")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": regolazione manuale della larghezza di banda della densit\xe0 del kernel (applicabile solo quando ",Object(r.b)("inlineCode",{parentName:"li"},"densityType")," \xe8 impostato su ",Object(r.b)("inlineCode",{parentName:"li"},"Data-driven"),"). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"1"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"binStrategy")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": strategia di binning (",Object(r.b)("inlineCode",{parentName:"li"},"Automatico"),", ",Object(r.b)("inlineCode",{parentName:"li"},"Seleziona # di bidoni"),", o ",Object(r.b)("inlineCode",{parentName:"li"},"Imposta larghezza bidone"),"). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'Automatic'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"nBins")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": numero personalizzato di bidoni. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"nCols")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": numero di colonne quando si visualizza un istogramma raggruppato sfaccettato. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"xBins")," | ",Object(r.b)("inlineCode",{parentName:"li"},"{start,size,end}"),": oggetto con propriet\xe0 ",Object(r.b)("inlineCode",{parentName:"li"},"start"),", ",Object(r.b)("inlineCode",{parentName:"li"},"size")," e ",Object(r.b)("inlineCode",{parentName:"li"},"end")," che regolano il comportamento di binning. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(r.b)("h2",{id:"esempi"},"Esempi"),Object(r.b)(l.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Facetted Plot",value:"groupModeFactes"},{label:"Display Density",value:"displayDensity"},{label:"No of Bins",value:"noBins"}],lazy:!0,mdxType:"Tabs"},Object(r.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Age"\n/>\n'))),Object(r.b)(o.a,{value:"grouped",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n/>\n'))),Object(r.b)(o.a,{value:"groupModeFactes",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n    nCols={2}\n    groupMode="Facets"\n/>\n'))),Object(r.b)(o.a,{value:"displayDensity",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n    displayDensity \n    densityType="Uniform"\n/>\n'))),Object(r.b)(o.a,{value:"noBins",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n    binStrategy="Select # of bins"\n    nBins={90}\n/>\n')))))}u.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?i.a.createElement(d,o(o({ref:t},c),{},{components:n})):i.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},435:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},444:function(e,t,n){"use strict";var a=n(0),i=n(445);t.a=function(){const e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},445:function(e,t,n){"use strict";var a=n(0);const i=Object(a.createContext)(void 0);t.a=i},447:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(444),l=n(435),o=n(58),s=n.n(o);const c=37,b=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:p,groupId:u,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:O}=Object(r.a)(),[g,j]=Object(a.useState)(o),f=a.Children.toArray(e.children),v=[];if(null!=u){const e=d[u];null!=e&&e!==g&&p.some((t=>t.value===e))&&j(e)}const N=e=>{const t=e.target,n=v.indexOf(t),a=f[n].props.value;j(a),null!=u&&O(u,a)},y=e=>{var t;let n;switch(e.keyCode){case b:const t=v.indexOf(e.target)+1;n=v[t]||v[0];break;case c:const a=v.indexOf(e.target)-1;n=v[a]||v[v.length-1]}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},m)},p.map((({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:g===e?0:-1,"aria-selected":g===e,className:Object(l.a)("tabs__item",s.a.tabItem,{"tabs__item--active":g===e}),key:e,ref:e=>v.push(e),onKeyDown:y,onFocus:N,onClick:N},t)))),t?Object(a.cloneElement)(f.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}},448:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function({children:e,hidden:t,className:n}){return i.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);