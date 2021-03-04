(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{204:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(410)),i=a(447),o=a(448),c={id:"polaroid",title:"Polaroid",sidebar_label:"Polaroid"},b={unversionedId:"polaroid",id:"polaroid",isDocsHomePage:!1,title:"Polaroid",description:"Element wy\u015bwietlaj\u0105cy obraz w stylu polaroida.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/polaroid.md",slug:"/polaroid",permalink:"/pl/docs/polaroid",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/polaroid.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Polaroid",sidebar:"docs",previous:{title:"Panel",permalink:"/pl/docs/panel"},next:{title:"Scrolling Text",permalink:"/pl/docs/scrolling-text"}},s=[{value:"Opcje",id:"opcje",children:[]},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[]}],u={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Element wy\u015bwietlaj\u0105cy obraz w stylu polaroida."),Object(l.b)("h2",{id:"opcje"},"Opcje"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"image")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": URL obrazu, kt\xf3ry ma by\u0107 wy\u015bwietlany w ramce polaroidowej. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"draggable")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy mo\u017cna przeci\u0105gn\u0105\u0107 polaroid wok\xf3\u0142 ekranu. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"showPin")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": kontroluje czy pokaza\u0107 pinezk\u0119. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"stain")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy pokaza\u0107 plam\u0119 po kawie. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"width")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": szeroko\u015b\u0107 polaroida (w px). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"350"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"style")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onClick")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": Event Handler wywo\u0142ywany po klikni\u0119ciu na obrazek (otrzymuje id Polaroida jako parametr). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),".")),Object(l.b)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),Object(l.b)(i.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Pin & Draggable",value:"pinnedAndDraggable"},{label:"Custom Width",value:"customWidth"},{label:"Handling Clicks",value:"handlingClicks"}],lazy:!0,mdxType:"Tabs"},Object(l.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Polaroid image="https://bit.ly/2MGl7K0" />\n'))),Object(l.b)(o.a,{value:"pinnedAndDraggable",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Polaroid showPin draggable image="https://bit.ly/2MGl7K0" />\n'))),Object(l.b)(o.a,{value:"customWidth",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Polaroid width={200}\n image="https://bit.ly/2MGl7K0" />\n'))),Object(l.b)(o.a,{value:"handlingClicks",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Polaroid image=\"https://bit.ly/2MGl7K0\" \n onClick={() => {\n     alert( 'The polaroid has been clicked...' );\n }} />\n")))))}p.isMDXComponent=!0},410:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||l;return a?r.a.createElement(m,o(o({ref:t},b),{},{components:a})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var b=2;b<l;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},435:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},444:function(e,t,a){"use strict";var n=a(0),r=a(445);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},445:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},447:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(444),i=a(435),o=a(58),c=a.n(o);const b=37,s=39;t.a=function(e){const{lazy:t,block:a,defaultValue:o,values:u,groupId:p,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(l.a)(),[j,O]=Object(n.useState)(o),y=n.Children.toArray(e.children),g=[];if(null!=p){const e=m[p];null!=e&&e!==j&&u.some((t=>t.value===e))&&O(e)}const v=e=>{const t=e.target,a=g.indexOf(t),n=y[a].props.value;O(n),null!=p&&f(p,n)},h=e=>{var t;let a;switch(e.keyCode){case s:const t=g.indexOf(e.target)+1;a=g[t]||g[0];break;case b:const n=g.indexOf(e.target)-1;a=g[n]||g[g.length-1]}null===(t=a)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},d)},u.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===e}),key:e,ref:e=>g.push(e),onKeyDown:h,onFocus:v,onClick:v},t)))),t?Object(n.cloneElement)(y.filter((e=>e.props.value===j))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}},448:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function({children:e,hidden:t,className:a}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:a},e)}}}]);