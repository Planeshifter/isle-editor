(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{227:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(406)),l=n(565),o=n(566),c={id:"text",title:"Text",sidebar_label:"Text"},s={unversionedId:"text",id:"text",isDocsHomePage:!1,title:"Text",description:"\u6587\u672c\u7ec4\u4ef6\uff0c\u5b83\u5141\u8bb8\u5c06\u539f\u59cb\u6587\u672c\u6e32\u67d3\u4e3aMarkdown\uff0c\u5e76\u5b9e\u73b0\u8bed\u97f3\u63a7\u5236\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/text.md",slug:"/text",permalink:"/zh/docs/text",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/text.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613342465,sidebar_label:"Text",sidebar:"docs",previous:{title:"Switch Components",permalink:"/zh/docs/switch"},next:{title:"Typewriter",permalink:"/zh/docs/typewriter"}},u=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u6587\u672c\u7ec4\u4ef6\uff0c\u5b83\u5141\u8bb8\u5c06\u539f\u59cb\u6587\u672c\u6e32\u67d3\u4e3aMarkdown\uff0c\u5e76\u5b9e\u73b0\u8bed\u97f3\u63a7\u5236\u3002"),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"raw")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u5f85\u53d1\u6587\u5b57. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"className")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u73ed\u540d. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"inline")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u662f\u5426\u5c06Markdown\u6e32\u67d3\u4e3a\u5185\u8054\u6587\u672c\u3002. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": CSS\u5185\u8054\u6837\u5f0f. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"voiceID")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u58f0\u63a7\u8bc6\u522b\u5668. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),".")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)(l.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"Multi-line",value:"multiLine"}],lazy:!0,mdxType:"Tabs"},Object(i.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Text>*Markdown* formatted text comes here...</Text>\n"))),Object(i.b)(o.a,{value:"withStyle",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Text style={{ color: 'orange', fontSize: 70}}>\n*Markdown* formatted text comes here...</Text>\n"))),Object(i.b)(o.a,{value:"multiLine",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Text raw={`\n1. Text raw works for multi-line text\n2. *second line*\n3. **third line**\n`} />\n")))))}p.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,d=b["".concat(l,".").concat(m)]||b[m]||p[m]||i;return n?a.a.createElement(d,o(o({ref:t},s),{},{components:n})):a.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},478:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},552:function(e,t,n){"use strict";var r=n(0),a=n(553);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},553:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},565:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(552),l=n(478),o=n(57),c=n.n(o);const s=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:b,groupId:p,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(i.a)(),[O,j]=Object(r.useState)(o),v=r.Children.toArray(e.children),y=[];if(null!=p){const e=d[p];null!=e&&e!==O&&b.some((t=>t.value===e))&&j(e)}const g=e=>{const t=e.target,n=y.indexOf(t),r=v[n].props.value;j(r),null!=p&&f(p,r)},x=e=>{var t;let n;switch(e.keyCode){case u:const t=y.indexOf(e.target)+1;n=y[t]||y[0];break;case s:const r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null===(t=n)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},m)},b.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>y.push(e),onKeyDown:x,onFocus:g,onClick:g},t)))),t?Object(r.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},566:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function({children:e,hidden:t,className:n}){return a.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);