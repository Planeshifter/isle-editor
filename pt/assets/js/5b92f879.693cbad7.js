(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(406)),l=n(565),o=n(566),c={id:"typewriter",title:"Typewriter",sidebar_label:"Typewriter"},s={unversionedId:"typewriter",id:"typewriter",isDocsHomePage:!1,title:"Typewriter",description:"Um componente ISLE que lhe permite criar um efeito de m\xe1quina de escrever.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/typewriter.md",slug:"/typewriter",permalink:"/pt/docs/typewriter",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/typewriter.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612739298,sidebar_label:"Typewriter",sidebar:"docs",previous:{title:"Text",permalink:"/pt/docs/text"},next:{title:"Plotly",permalink:"/pt/docs/plotly"}},u=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Um componente ISLE que lhe permite criar um efeito de m\xe1quina de escrever."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"delay")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": atraso inicial antes do in\xedcio da m\xe1quina de escrever (em milissegundos). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"hold")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": se o texto for um conjunto de cordas, segure especificado a dura\xe7\xe3o que o texto completo ser\xe1 exibido antes de passar para o pr\xf3ximo item do conjunto. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"2000"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"interval")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": o intervalo da m\xe1quina de escrever (em milissegundos). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"100"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"random")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),': se for aleat\xf3rio, os toques de tecla ser\xe3o realizados com uma certa aleatoriedade, "humana. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"sound")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": o toque de tecla digitado tamb\xe9m ser\xe1 ouvido. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": Estilos em linha CSS. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"text")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|array<string>)"),": o texto completo a ser exibido. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),".")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)(l.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Delay and Sound",value:"delayAndSound"},{label:"With CSS",value:"withCSS"},{label:"Array of Strings",value:"array"},{label:"Humanized",value:"humanized"}],lazy:!0,mdxType:"Tabs"},Object(i.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Typewriter text="Lorem ipsum" />\n'))),Object(i.b)(o.a,{value:"delayAndSound",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Typewriter text="Lorem ipsum" sound delay={2000} />\n'))),Object(i.b)(o.a,{value:"withCSS",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Typewriter text=\"Styled Text\" style={{ fontSize: 66, color: 'red'}} />\n"))),Object(i.b)(o.a,{value:"array",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Typewriter text={["First Entry", "Second Entry", "Third Entry"]}  hold={2000} />\n'))),Object(i.b)(o.a,{value:"humanized",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Typewriter text="This is a humanized performance" random interval={170} />\n')))))}p.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,d=b["".concat(l,".").concat(m)]||b[m]||p[m]||i;return n?r.a.createElement(d,o(o({ref:t},s),{},{components:n})):r.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},478:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},552:function(e,t,n){"use strict";var a=n(0),r=n(553);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},553:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},565:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(552),l=n(478),o=n(57),c=n.n(o);const s=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:b,groupId:p,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(i.a)(),[O,y]=Object(a.useState)(o),j=a.Children.toArray(e.children),v=[];if(null!=p){const e=d[p];null!=e&&e!==O&&b.some((t=>t.value===e))&&y(e)}const g=e=>{const t=e.target,n=v.indexOf(t),a=j[n].props.value;y(a),null!=p&&f(p,a)},N=e=>{var t;let n;switch(e.keyCode){case u:const t=v.indexOf(e.target)+1;n=v[t]||v[0];break;case s:const a=v.indexOf(e.target)-1;n=v[a]||v[v.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},m)},b.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>v.push(e),onKeyDown:N,onFocus:g,onClick:g},t)))),t?Object(a.cloneElement)(j.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},566:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);