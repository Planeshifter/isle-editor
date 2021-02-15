(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{241:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),l=(n(0),n(406)),o=n(565),i=n(566),c={id:"clock",title:"Clock",sidebar_label:"Clock"},s={unversionedId:"clock",id:"clock",isDocsHomePage:!1,title:"Clock",description:"Componente dell'orologio che visualizza l'ora corrente.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/clock.md",slug:"/clock",permalink:"/it/docs/clock",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/clock.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612739298,sidebar_label:"Clock",sidebar:"docs",previous:{title:"Beacon Tooltip",permalink:"/it/docs/beacon-tooltip"},next:{title:"Color Picker",permalink:"/it/docs/color-picker"}},u=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Componente dell'orologio che visualizza l'ora corrente."),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"duration")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": se impostata, viene visualizzata la durata della sessione (non l'ora effettiva). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"format")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": formato orario (sia ",Object(l.b)("inlineCode",{parentName:"li"},"HHH:MM"),", ",Object(l.b)("inlineCode",{parentName:"li"},"HHH:MM:SS"),", o ",Object(l.b)("inlineCode",{parentName:"li"},"HHH"),"). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"className")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": nome della classe. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"style")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": Stili in linea CSS. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)(o.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Duration",value:"duration"},{label:"Format",value:"format"},{label:"With CSS",value:"withCSS"}],lazy:!0,mdxType:"Tabs"},Object(l.b)(i.a,{value:"minimal",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Clock />\n"))),Object(l.b)(i.a,{value:"duration",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Clock duration />\n"))),Object(l.b)(i.a,{value:"format",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Clock format='HH:MM'/>\n"))),Object(l.b)(i.a,{value:"withCSS",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Clock format='HH:MM:SS' style={{ fontSize: 120, fontFamily: 'Open Sans Condensed'}}/>\n")))))}p.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||l;return n?r.a.createElement(d,i(i({ref:t},s),{},{components:n})):r.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},478:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},552:function(e,t,n){"use strict";var a=n(0),r=n(553);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},553:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},565:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(552),o=n(478),i=n(57),c=n.n(i);const s=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:i,values:b,groupId:p,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(l.a)(),[O,v]=Object(a.useState)(i),j=a.Children.toArray(e.children),y=[];if(null!=p){const e=d[p];null!=e&&e!==O&&b.some((t=>t.value===e))&&v(e)}const g=e=>{const t=e.target,n=y.indexOf(t),a=j[n].props.value;v(a),null!=p&&f(p,a)},C=e=>{var t;let n;switch(e.keyCode){case u:const t=y.indexOf(e.target)+1;n=y[t]||y[0];break;case s:const a=y.indexOf(e.target)-1;n=y[a]||y[y.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},b.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>y.push(e),onKeyDown:C,onFocus:g,onClick:g},t)))),t?Object(a.cloneElement)(j.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},566:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);