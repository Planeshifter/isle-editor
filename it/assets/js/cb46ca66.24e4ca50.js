(window.webpackJsonp=window.webpackJsonp||[]).push([[1239],{265:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(410)),l=n(447),o=n(448),c={id:"div",title:"div",sidebar_label:"div"},s={unversionedId:"html/div",id:"html/div",isDocsHomePage:!1,title:"div",description:"Elemento generico del contenitore.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/html/div.md",slug:"/html/div",permalink:"/it/docs/html/div",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/html/div.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614806718,sidebar_label:"div",sidebar:"docs",previous:{title:"blockquote",permalink:"/it/docs/html/blockquote"},next:{title:"hr",permalink:"/it/docs/html/hr"}},u=[{value:"Opzioni",id:"opzioni",children:[]},{value:"Esempi",id:"esempi",children:[]}],d={toc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Elemento generico del contenitore."),Object(i.b)("h2",{id:"opzioni"},"Opzioni"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"className")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": nome della classe. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": Stili in linea CSS. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(i.b)("h2",{id:"esempi"},"Esempi"),Object(i.b)(l.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Regular HTML",value:"regularHTML"},{label:"With Markdown",value:"withMarkdown"},{label:"With CSS",value:"withCSS"},{label:"Embedded Component",value:"embeddedISLE"}],lazy:!0,mdxType:"Tabs"},Object(i.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<div>\n    Use a div as a generic container for other content.\n</div>\n"))),Object(i.b)(o.a,{value:"regularHTML",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<div>\n    <h3>Regular HTML</h3>\n    <hr />\n    <p>So if you are accustomed to HTML, you can use ISLE like any other HTML editor</p>\n    <hr />\n</div>\n"))),Object(i.b)(o.a,{value:"withMarkdown",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<div>\n  1. Ordered List - First item\n  2. Second item\n  3. Third item\n  `var a = 77;`\n  `this is a line of code;`  \n  \n  [Link to Google](https://www.google.com)\n  ![The alternate text if you hover over the image](https://bit.ly/2MGl7K0)\n</div>\n"))),Object(i.b)(o.a,{value:"withCSS",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<div style={{ color: 'darkred', background: 'lightblue', padding: '6px'}}>\n    <h3>Regular HTML</h3>\n    <hr />\n    <p>So if you are accustomed to HTML, you can use ISLE like any other HTML editor</p>\n    <hr />\n</div>\n"))),Object(i.b)(o.a,{value:"embeddedISLE",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<div style={{ padding: '6px'}}>\n    <h3>Embedded ISLE Component</h3>\n    <hr />\n    <p>Plus - you can embed any ISLE component in here, like this R-Shell</p>\n    <hr />\n    <RShell code=\"abs(c(-2,3,-1))\" />\n</div>\n")))))}b.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,p=d["".concat(l,".").concat(m)]||d[m]||b[m]||i;return n?a.a.createElement(p,o(o({ref:t},s),{},{components:n})):a.a.createElement(p,o({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},435:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},444:function(e,t,n){"use strict";var r=n(0),a=n(445);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},445:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},447:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(444),l=n(435),o=n(58),c=n.n(o);const s=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:d,groupId:b,className:m}=e,{tabGroupChoices:p,setTabGroupChoices:v}=Object(i.a)(),[f,h]=Object(r.useState)(o),O=r.Children.toArray(e.children),y=[];if(null!=b){const e=p[b];null!=e&&e!==f&&d.some((t=>t.value===e))&&h(e)}const g=e=>{const t=e.target,n=y.indexOf(t),r=O[n].props.value;h(r),null!=b&&v(b,r)},j=e=>{var t;let n;switch(e.keyCode){case u:const t=y.indexOf(e.target)+1;n=y[t]||y[0];break;case s:const r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null===(t=n)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},m)},d.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>y.push(e),onKeyDown:j,onFocus:g,onClick:g},t)))),t?Object(r.cloneElement)(O.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},O.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},448:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function({children:e,hidden:t,className:n}){return a.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);