(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(406)),o=n(565),c=n(566),l={id:"accordion",title:"Accordion",sidebar_label:"Accordion"},s={unversionedId:"accordion",id:"accordion",isDocsHomePage:!1,title:"Accordion",description:"\u4e00\u4e2a\u63a7\u5236\u5782\u76f4\u6ed1\u5757\u7684\u624b\u98ce\u7434\u7ec4\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/accordion.md",slug:"/accordion",permalink:"/zh/docs/accordion",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/accordion.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612739298,sidebar_label:"Accordion",sidebar:"docs",previous:{title:"Voice Input",permalink:"/zh/docs/input/voice-input"},next:{title:"IFrame",permalink:"/zh/docs/iframe"}},u=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u4e00\u4e2a\u63a7\u5236\u5782\u76f4\u6ed1\u5757\u7684\u624b\u98ce\u7434\u7ec4\u4ef6\u3002"),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"active")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": \u5f00\u5934\u7684\u6ed1\u5757\u6307\u6570. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"canCloseAll")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": \u662f\u5426\u53ef\u4ee5\u6298\u53e0\u6240\u6709\u7684\u6807\u9898. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"headers")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array<(string|node)>"),": \u5934\u540d\u6570\u7ec4. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"headerStyle")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": \u4e5f\u53ef\u4ee5\u7ed9\u5934\u6761\u6307\u5b9a\u4e00\u4e2a\u6837\u5f0f\u3002. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"headerClassName")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u8fd9\u5c06\u8986\u76d6\u7ed9\u5b9a\u7684\u6807\u9898\u7c7b\u540d\u79f0. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onChange")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": \u7528\u65b0\u7684\u6d3b\u52a8\u5782\u76f4\u6ed1\u5757\u7684\u7d22\u5f15\u8c03\u7528\u56de\u8c03\u3002. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"className")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u5916\u53f7. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": \u5916\u5c42div\u7684CSS\u5185\u8054\u6837\u5f0f. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),".")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)(o.a,{defaultValue:"firstOpened",values:[{label:"First item opened",value:"firstOpened"},{label:"All items can close",value:"allClosed"}],lazy:!0,mdxType:"Tabs"},Object(i.b)(c.a,{value:"firstOpened",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Accordion headers={[ 'First Question', 'Second Question' ]} active={0} >\n    <FreeTextQuestion />\n    <FreeTextQuestion />\n</Accordion>\n"))),Object(i.b)(c.a,{value:"allClosed",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Accordion headers={[ 'First Question', 'Second Question' ]} canCloseAll >\n    <FreeTextQuestion />\n    <FreeTextQuestion />\n</Accordion>\n")))))}p.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},478:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},552:function(e,t,n){"use strict";var r=n(0),a=n(553);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},553:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},565:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(552),o=n(478),c=n(57),l=n.n(c);const s=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:c,values:b,groupId:p,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(i.a)(),[O,j]=Object(r.useState)(c),v=r.Children.toArray(e.children),y=[];if(null!=p){const e=m[p];null!=e&&e!==O&&b.some((t=>t.value===e))&&j(e)}const g=e=>{const t=e.target,n=y.indexOf(t),r=v[n].props.value;j(r),null!=p&&f(p,r)},N=e=>{var t;let n;switch(e.keyCode){case u:const t=y.indexOf(e.target)+1;n=y[t]||y[0];break;case s:const r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null===(t=n)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},b.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>y.push(e),onKeyDown:N,onFocus:g,onClick:g},t)))),t?Object(r.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},566:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function({children:e,hidden:t,className:n}){return a.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);