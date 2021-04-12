(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(410)),i=n(443),c=n(444),l={id:"accordion",title:"Accordion",sidebar_label:"Accordion"},s={unversionedId:"accordion",id:"accordion",isDocsHomePage:!1,title:"Accordion",description:"Um componente de acorde\xe3o que controla os deslizadores verticais.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/accordion.md",slug:"/accordion",permalink:"/pt/docs/accordion",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/accordion.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21/02/2021",sidebar_label:"Accordion",sidebar:"docs",previous:{title:"Voice Input",permalink:"/pt/docs/input/voice-input"},next:{title:"IFrame",permalink:"/pt/docs/iframe"}},u=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[]},{value:"Exemplos",id:"exemplos",children:[]}],b={toc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Um componente de acorde\xe3o que controla os deslizadores verticais."),Object(o.b)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"active")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": \xedndice de deslizamento a ser aberto no in\xedcio. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"canCloseAll")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": se \xe9 poss\xedvel derrubar todos os cabe\xe7alhos. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"headers")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array<(string|node)>"),": matriz de nomes de cabe\xe7alho. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"headerStyle")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object"),": tamb\xe9m se pode atribuir um estilo \xe0s barras de cabe\xe7alho. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"headerClassName")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": isto anula o nome da classe dada dos cabe\xe7alhos. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onChange")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": chamada de retorno invocada com \xedndice de novo deslizador vertical ativo. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"className")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": nome da classe para mergulho externo. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"''"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"style")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object"),": Estilos em linha de CSS para mergulho externo. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),".")),Object(o.b)("h2",{id:"exemplos"},"Exemplos"),Object(o.b)(i.a,{defaultValue:"firstOpened",values:[{label:"First item opened",value:"firstOpened"},{label:"All items can close",value:"allClosed"}],lazy:!0,mdxType:"Tabs"},Object(o.b)(c.a,{value:"firstOpened",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Accordion headers={[ 'First Question', 'Second Question' ]} active={0} >\n    <FreeTextQuestion />\n    <FreeTextQuestion />\n</Accordion>\n"))),Object(o.b)(c.a,{value:"allClosed",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Accordion headers={[ 'First Question', 'Second Question' ]} canCloseAll >\n    <FreeTextQuestion />\n    <FreeTextQuestion />\n</Accordion>\n")))))}d.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,m=b["".concat(i,".").concat(p)]||b[p]||d[p]||o;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},434:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},440:function(e,t,n){"use strict";var a=n(0),r=n(441);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},441:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},443:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(440),i=n(434),c=n(57),l=n.n(c);const s=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:c,values:b,groupId:d,className:p}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(o.a)(),[O,j]=Object(a.useState)(c),v=a.Children.toArray(e.children),g=[];if(null!=d){const e=m[d];null!=e&&e!==O&&b.some((t=>t.value===e))&&j(e)}const y=e=>{const t=e.target,n=g.indexOf(t),a=v[n].props.value;j(a),null!=d&&(f(d,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:r}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:i}=window;return t>=0&&r<=i&&a<=o&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l.a.tabItemActive),setTimeout((()=>t.classList.remove(l.a.tabItemActive)),2e3))}),150))},h=e=>{var t;let n;switch(e.keyCode){case u:{const t=g.indexOf(e.target)+1;n=g[t]||g[0];break}case s:{const t=g.indexOf(e.target)-1;n=g[t]||g[g.length-1];break}}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},p)},b.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>g.push(e),onKeyDown:h,onFocus:y,onClick:y},t)))),t?Object(a.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},444:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);