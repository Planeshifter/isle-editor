(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(410)),l=n(446),o=n(447),c={id:"div",title:"div",sidebar_label:"div"},s={unversionedId:"html/div",id:"html/div",isDocsHomePage:!1,title:"div",description:"Generisches Container-Element.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/html/div.md",slug:"/html/div",permalink:"/de/docs/html/div",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/html/div.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614806718,formattedLastUpdatedAt:"3.3.2021",sidebar_label:"div",sidebar:"docs",previous:{title:"blockquote",permalink:"/de/docs/html/blockquote"},next:{title:"hr",permalink:"/de/docs/html/hr"}},u=[{value:"Optionen",id:"optionen",children:[]},{value:"Beispiele",id:"beispiele",children:[]}],d={toc:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Generisches Container-Element."),Object(i.b)("h2",{id:"optionen"},"Optionen"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"className")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": Klassenname. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(i.b)("h2",{id:"beispiele"},"Beispiele"),Object(i.b)(l.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Regular HTML",value:"regularHTML"},{label:"With Markdown",value:"withMarkdown"},{label:"With CSS",value:"withCSS"},{label:"Embedded Component",value:"embeddedISLE"}],lazy:!0,mdxType:"Tabs"},Object(i.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<div>\n    Use a div as a generic container for other content.\n</div>\n"))),Object(i.b)(o.a,{value:"regularHTML",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<div>\n    <h3>Regular HTML</h3>\n    <hr />\n    <p>So if you are accustomed to HTML, you can use ISLE like any other HTML editor</p>\n    <hr />\n</div>\n"))),Object(i.b)(o.a,{value:"withMarkdown",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<div>\n  1. Ordered List - First item\n  2. Second item\n  3. Third item\n  `var a = 77;`\n  `this is a line of code;`  \n  \n  [Link to Google](https://www.google.com)\n  ![The alternate text if you hover over the image](https://bit.ly/2MGl7K0)\n</div>\n"))),Object(i.b)(o.a,{value:"withCSS",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<div style={{ color: 'darkred', background: 'lightblue', padding: '6px'}}>\n    <h3>Regular HTML</h3>\n    <hr />\n    <p>So if you are accustomed to HTML, you can use ISLE like any other HTML editor</p>\n    <hr />\n</div>\n"))),Object(i.b)(o.a,{value:"embeddedISLE",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<div style={{ padding: '6px'}}>\n    <h3>Embedded ISLE Component</h3>\n    <hr />\n    <p>Plus - you can embed any ISLE component in here, like this R-Shell</p>\n    <hr />\n    <RShell code=\"abs(c(-2,3,-1))\" />\n</div>\n")))))}b.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(l,".").concat(p)]||d[p]||b[p]||i;return n?r.a.createElement(m,o(o({ref:t},s),{},{components:n})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},435:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},441:function(e,t,n){"use strict";var a=n(0),r=n(442);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},442:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},446:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(441),l=n(435),o=n(58),c=n.n(o);const s=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:d,groupId:b,className:p}=e,{tabGroupChoices:m,setTabGroupChoices:v}=Object(i.a)(),[f,h]=Object(a.useState)(o),O=a.Children.toArray(e.children),y=[];if(null!=b){const e=m[b];null!=e&&e!==f&&d.some((t=>t.value===e))&&h(e)}const g=e=>{const t=e.target,n=y.indexOf(t),a=O[n].props.value;h(a),null!=b&&v(b,a)},j=e=>{var t;let n;switch(e.keyCode){case u:const t=y.indexOf(e.target)+1;n=y[t]||y[0];break;case s:const a=y.indexOf(e.target)-1;n=y[a]||y[y.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},p)},d.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>y.push(e),onKeyDown:j,onFocus:g,onClick:g},t)))),t?Object(a.cloneElement)(O.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},O.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},447:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);