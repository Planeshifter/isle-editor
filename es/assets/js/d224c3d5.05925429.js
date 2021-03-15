(window.webpackJsonp=window.webpackJsonp||[]).push([[1248],{270:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(410)),l=n(446),i=n(447),c={id:"qrcode",title:"QR Code",sidebar_label:"QR Code"},s={unversionedId:"qrcode",id:"qrcode",isDocsHomePage:!1,title:"QR Code",description:"C\xf3digo QR.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/qrcode.md",slug:"/qrcode",permalink:"/es/docs/qrcode",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/qrcode.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21/2/2021",sidebar_label:"QR Code",sidebar:"docs",previous:{title:"Multi Cards",permalink:"/es/docs/multi-cards"},next:{title:"Recorder",permalink:"/es/docs/recorder"}},b=[{value:"Opciones",id:"opciones",children:[]},{value:"Ejemplos",id:"ejemplos",children:[]}],u={toc:b};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"C\xf3digo QR."),Object(o.b)("h2",{id:"opciones"},"Opciones"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"text")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": texto a codificar en el c\xf3digo QR (por defecto a la URL de la lecci\xf3n si no se establece). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"scale")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": n\xfamero de p\xedxeles por m\xf3dulos (puntos negros). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"8"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"width")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),': ancho en p\xedxeles; tiene prioridad sobre la propiedad de "escala".. Default: ',Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"showText")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": booleana determinando si mostrar el texto codificado en el c\xf3digo QR. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"center")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": booleano controlando si centrar el c\xf3digo QR. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"style")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object"),": Estilos en l\xednea CSS. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(o.b)("h2",{id:"ejemplos"},"Ejemplos"),Object(o.b)(l.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With CSS",value:"withCSS"},{label:"Visible Link",value:"visibleLink"},{label:"Scale",value:"scale"}],lazy:!0,mdxType:"Tabs"},Object(o.b)(i.a,{value:"minimal",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<QRCode />\n"))),Object(o.b)(i.a,{value:"withCSS",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<QRCode \n    center \n    text=\"https://isledocs.com/docs/qrcode\" \n    style ={{ outline: '4px grey solid' }}\n/>\n"))),Object(o.b)(i.a,{value:"visibleLink",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<QRCode \n    text="https://isledocs.com/docs/qrcode"\n    showText\n/>\n'))),Object(o.b)(i.a,{value:"scale",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<QRCode \n    text=\"https://isledocs.com/docs/qrcode\"\n    scale={12}\n    showText\n    style={{ fontFamily: 'Open Sans Condensed', color: 'red', outline: '4px black solid' }}\n/>\n")))))}d.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),p=a,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||o;return n?r.a.createElement(m,i(i({ref:t},s),{},{components:n})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},435:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},441:function(e,t,n){"use strict";var a=n(0),r=n(442);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},442:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},446:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(441),l=n(435),i=n(58),c=n.n(i);const s=37,b=39;t.a=function(e){const{lazy:t,block:n,defaultValue:i,values:u,groupId:d,className:p}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(o.a)(),[O,j]=Object(a.useState)(i),v=a.Children.toArray(e.children),y=[];if(null!=d){const e=m[d];null!=e&&e!==O&&u.some((t=>t.value===e))&&j(e)}const g=e=>{const t=e.target,n=y.indexOf(t),a=v[n].props.value;j(a),null!=d&&f(d,a)},h=e=>{var t;let n;switch(e.keyCode){case b:const t=y.indexOf(e.target)+1;n=y[t]||y[0];break;case s:const a=y.indexOf(e.target)-1;n=y[a]||y[y.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},p)},u.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>y.push(e),onKeyDown:h,onFocus:g,onClick:g},t)))),t?Object(a.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},447:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);