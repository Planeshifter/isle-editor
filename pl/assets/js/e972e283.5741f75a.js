(window.webpackJsonp=window.webpackJsonp||[]).push([[359],{293:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(406)),o=n(568),l=n(569),c={id:"weather",title:"Weather",sidebar_label:"Weather"},s={unversionedId:"weather",id:"weather",isDocsHomePage:!1,title:"Weather",description:"Komponent do wy\u015bwietlania aktualnej pogody w wyznaczonym miejscu.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/weather.md",slug:"/weather",permalink:"/pl/docs/weather",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/weather.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612739298,sidebar_label:"Weather",sidebar:"docs",previous:{title:"R Table",permalink:"/pl/docs/r/r-table"},next:{title:"Wikipedia",permalink:"/pl/docs/wikipedia"}},u=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Komponent do wy\u015bwietlania aktualnej pogody w wyznaczonym miejscu."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"location")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": nazwa lokalizacji. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"voiceID")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": identyfikator kontroli g\u0142osowej. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)(o.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Custom Styling",value:"withCSS"}],lazy:!0,mdxType:"Tabs"},Object(i.b)(l.a,{value:"minimal",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Weather\n    location="Pittsburgh"\n/>\n'))),Object(i.b)(l.a,{value:"withCSS",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Weather\n    location=\"Pittsburgh\"\n    style={{ fontFamily: 'Courier', background: 'orange' }}\n/>\n")))))}b.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return n?r.a.createElement(d,l(l({ref:t},s),{},{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},478:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},552:function(e,t,n){"use strict";var a=n(0),r=n(553);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},553:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},568:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(552),o=n(478),l=n(57),c=n.n(l);const s=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:l,values:p,groupId:b,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(i.a)(),[y,O]=Object(a.useState)(l),j=a.Children.toArray(e.children),v=[];if(null!=b){const e=d[b];null!=e&&e!==y&&p.some((t=>t.value===e))&&O(e)}const g=e=>{const t=e.target,n=v.indexOf(t),a=j[n].props.value;O(a),null!=b&&f(b,a)},h=e=>{var t;let n;switch(e.keyCode){case u:const t=v.indexOf(e.target)+1;n=v[t]||v[0];break;case s:const a=v.indexOf(e.target)-1;n=v[a]||v[v.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},p.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===e}),key:e,ref:e=>v.push(e),onKeyDown:h,onFocus:g,onClick:g},t)))),t?Object(a.cloneElement)(j.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}},569:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);