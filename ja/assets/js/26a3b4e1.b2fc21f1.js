(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),o=(n(0),n(410)),i=n(447),s=n(448),c={id:"question-form",title:"Question Form",sidebar_label:"Question Form"},u={unversionedId:"questions/question-form",id:"questions/question-form",isDocsHomePage:!1,title:"Question Form",description:"\u7570\u306a\u308b\u8cea\u554f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30921\u3064\u306e\u9001\u4fe1\u30dc\u30bf\u30f3\u3068\u4e00\u7dd2\u306b\u7d44\u307f\u5408\u308f\u305b\u305f\u30d5\u30a9\u30fc\u30e0\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/questions/question-form.md",slug:"/questions/question-form",permalink:"/ja/docs/questions/question-form",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/question-form.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614807536,sidebar_label:"Question Form",sidebar:"docs",previous:{title:"Order Question",permalink:"/ja/docs/questions/order-question"},next:{title:"Quiz",permalink:"/ja/docs/questions/quiz"}},l=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",children:[]},{value:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",id:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",children:[]}],b={toc:l};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u7570\u306a\u308b\u8cea\u554f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30921\u3064\u306e\u9001\u4fe1\u30dc\u30bf\u30f3\u3068\u4e00\u7dd2\u306b\u7d44\u307f\u5408\u308f\u305b\u305f\u30d5\u30a9\u30fc\u30e0\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\u3002"),Object(o.b)("h2",{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"},"\u30aa\u30d7\u30b7\u30e7\u30f3"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"buttonLabel")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": \u9001\u4fe1\u30dc\u30bf\u30f3\u306e\u30e9\u30d9\u30eb. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": \u9001\u4fe1\u30dc\u30bf\u30f3\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u305f\u3068\u304d\u306b\u547c\u3073\u51fa\u3055\u308c\u308b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),Object(o.b)("h2",{id:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"},"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),Object(o.b)(i.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Markdown",value:"withMarkdown"}],lazy:!0,mdxType:"Tabs"},Object(o.b)(s.a,{value:"minimal",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<QuestionForm>\n    <NumberQuestion\n        question="What is 2+2?"\n    />\n    <FreeTextQuestion\n        question="What is the meaning of life?"\n    />    \n</QuestionForm>\n'))),Object(o.b)(s.a,{value:"withMarkdown",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<QuestionForm>\n    <NumberQuestion\n        question={<p>What is $$2+2$$?</p>}\n    />  \n    <FreeTextQuestion\n        question={<span>What is the *meaning of life*?</span>}\n    />    \n</QuestionForm>\n")))))}m.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=l(n),p=r,d=b["".concat(i,".").concat(p)]||b[p]||m[p]||o;return n?a.a.createElement(d,s(s({ref:t},u),{},{components:n})):a.a.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},435:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},444:function(e,t,n){"use strict";var r=n(0),a=n(445);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},445:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},447:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(444),i=n(435),s=n(58),c=n.n(s);const u=37,l=39;t.a=function(e){const{lazy:t,block:n,defaultValue:s,values:b,groupId:m,className:p}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(o.a)(),[O,v]=Object(r.useState)(s),j=r.Children.toArray(e.children),y=[];if(null!=m){const e=d[m];null!=e&&e!==O&&b.some((t=>t.value===e))&&v(e)}const g=e=>{const t=e.target,n=y.indexOf(t),r=j[n].props.value;v(r),null!=m&&f(m,r)},h=e=>{var t;let n;switch(e.keyCode){case l:const t=y.indexOf(e.target)+1;n=y[t]||y[0];break;case u:const r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null===(t=n)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},p)},b.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>y.push(e),onKeyDown:h,onFocus:g,onClick:g},t)))),t?Object(r.cloneElement)(j.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},448:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function({children:e,hidden:t,className:n}){return a.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);