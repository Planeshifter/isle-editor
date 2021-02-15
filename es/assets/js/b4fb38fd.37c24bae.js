(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{250:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return d}));var n=a(3),l=a(7),r=(a(0),a(406)),i=a(565),o=a(566),c={id:"flippable-card",title:"Flippable Card",sidebar_label:"Flippable Card"},b={unversionedId:"flippable-card",id:"flippable-card",isDocsHomePage:!1,title:"Flippable Card",description:"Un componente de la ISLE que permite que dos rendericen dos caras.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/flippable-card.md",slug:"/flippable-card",permalink:"/es/docs/flippable-card",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/flippable-card.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612738524,sidebar_label:"Flippable Card",sidebar:"docs",previous:{title:"Draggable List",permalink:"/es/docs/draggable-list"},next:{title:"JavaScript Shell",permalink:"/es/docs/js-shell"}},p=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:p};function d(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Un componente de la ISLE que permite que dos rendericen dos caras."),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"button")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": etiqueta del bot\xf3n. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"draggable")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controla si la tarjeta puede ser arrastrada. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"flipSpeedBackToFront")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": la velocidad con la que la tarjeta pasa de fondo a primer plano, en segundos. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"1"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"flipSpeedFrontToBack")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": La velocidad con la que la tarjeta pasa del primer plano al fondo, en segundos.. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"1"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"oneTime")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": indica si el proceso de volteo puede ser ejecutado s\xf3lo una vez. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"perspective")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": Valor de la propiedad CSS para dar una perspectiva al elemento posicionado en 3D. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"1000"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"size")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": undefined. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"250"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"disabled")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": Controla si la tarjeta desplegable est\xe1 desactivada. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"value")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": estado de giro de la tarjeta (para el componente controlado). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"defaultValue")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": estado inicial de giro de la tarjeta. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"containerStyle")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": Estilo CSS del contenedor. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"frontStyle")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": Estilo CSS de la tarjeta frontal. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"backStyle")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": Estilo CSS de la tarjeta trasera. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onChange")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": llamada de retorno invocada una vez que la tarjeta es volteada; recibe el estado actual volteado como su \xfanico argumento. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onChange() {}"),".")),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)(i.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With CSS",value:"withCSS"},{label:"Slow Motion",value:"slowMo"}],lazy:!0,mdxType:"Tabs"},Object(r.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FlippableCard containerStyle={{float: \'none\'}} size={200}>\n    <div>\n        <img src="https://bit.ly/2YU5EbU" />\n    </div>\n    <div>\n       <img src="https://bit.ly/3aGv9mp" />\n    </div>\n</FlippableCard>\n'))),Object(r.b)(o.a,{value:"withCSS",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<FlippableCard \n  containerStyle={{float: 'none'}} \n  frontStyle={{fontSize: 50, textAlign: 'center'}} \n  backStyle={{fontSize: 50, textAlign: 'center', background: 'purple', color: 'white'}} \n  >\n    <div>\n      FRONT\n    </div>\n    <div>\n      BACK\n    </div>\n</FlippableCard>\n"))),Object(r.b)(o.a,{value:"slowMo",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<FlippableCard \n  flipSpeedBackToFront={7} \n  flipSpeedFrontToBack={7}   \n  containerStyle={{float: 'none'}} \n  frontStyle={{fontSize: 50, textAlign: 'center'}} \n  backStyle={{fontSize: 50, textAlign: 'center', background: 'purple', color: 'white'}} \n  >\n    <div>\n      FRONT\n    </div>\n    <div>\n      BACK\n    </div>\n</FlippableCard>\n")))))}d.isMDXComponent=!0},406:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var b=l.a.createContext({}),p=function(e){var t=l.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return l.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(a),u=n,m=s["".concat(i,".").concat(u)]||s[u]||d[u]||r;return a?l.a.createElement(m,o(o({ref:t},b),{},{components:a})):l.a.createElement(m,o({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var b=2;b<r;b++)i[b]=a[b];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},478:function(e,t,a){"use strict";function n(e){var t,a,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(l&&(l+=" "),l+=a);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}t.a=function(){for(var e,t,a=0,l="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(l&&(l+=" "),l+=t);return l}},552:function(e,t,a){"use strict";var n=a(0),l=a(553);t.a=function(){const e=Object(n.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},553:function(e,t,a){"use strict";var n=a(0);const l=Object(n.createContext)(void 0);t.a=l},565:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(552),i=a(478),o=a(57),c=a.n(o);const b=37,p=39;t.a=function(e){const{lazy:t,block:a,defaultValue:o,values:s,groupId:d,className:u}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(r.a)(),[j,O]=Object(n.useState)(o),v=n.Children.toArray(e.children),g=[];if(null!=d){const e=m[d];null!=e&&e!==j&&s.some((t=>t.value===e))&&O(e)}const N=e=>{const t=e.target,a=g.indexOf(t),n=v[a].props.value;O(n),null!=d&&f(d,n)},y=e=>{var t;let a;switch(e.keyCode){case p:const t=g.indexOf(e.target)+1;a=g[t]||g[0];break;case b:const n=g.indexOf(e.target)-1;a=g[n]||g[g.length-1]}null===(t=a)||void 0===t||t.focus()};return l.a.createElement("div",{className:"tabs-container"},l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},u)},s.map((({value:e,label:t})=>l.a.createElement("li",{role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===e}),key:e,ref:e=>g.push(e),onKeyDown:y,onFocus:N,onClick:N},t)))),t?Object(n.cloneElement)(v.filter((e=>e.props.value===j))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}},566:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function({children:e,hidden:t,className:a}){return l.a.createElement("div",{role:"tabpanel",hidden:t,className:a},e)}}}]);