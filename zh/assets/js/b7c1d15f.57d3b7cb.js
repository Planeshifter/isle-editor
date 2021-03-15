(window.webpackJsonp=window.webpackJsonp||[]).push([[1227],{249:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(410)),i=n(446),s=n(447),c={id:"question-form",title:"Question Form",sidebar_label:"Question Form"},u={unversionedId:"questions/question-form",id:"questions/question-form",isDocsHomePage:!1,title:"Question Form",description:"\u4e00\u4e2a\u8868\u5355\u7ec4\u4ef6\uff0c\u5c06\u4e0d\u540c\u7684\u95ee\u9898\u7ec4\u4ef6\u4e0e\u4e00\u4e2a\u63d0\u4ea4\u6309\u94ae\u7ed3\u5408\u5728\u4e00\u8d77\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/questions/question-form.md",slug:"/questions/question-form",permalink:"/zh/docs/questions/question-form",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/question-form.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614807536,formattedLastUpdatedAt:"2021/3/3",sidebar_label:"Question Form",sidebar:"docs",previous:{title:"Order Question",permalink:"/zh/docs/questions/order-question"},next:{title:"Quiz",permalink:"/zh/docs/questions/quiz"}},l=[{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],m={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u4e00\u4e2a\u8868\u5355\u7ec4\u4ef6\uff0c\u5c06\u4e0d\u540c\u7684\u95ee\u9898\u7ec4\u4ef6\u4e0e\u4e00\u4e2a\u63d0\u4ea4\u6309\u94ae\u7ed3\u5408\u5728\u4e00\u8d77\u3002"),Object(o.b)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"buttonLabel")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": \u63d0\u4ea4\u6309\u94ae\u7684\u6807\u7b7e. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": \u70b9\u51fb\u63d0\u4ea4\u6309\u94ae\u65f6\u8c03\u7528\u7684\u56de\u8c03\u3002. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),Object(o.b)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),Object(o.b)(i.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Markdown",value:"withMarkdown"}],lazy:!0,mdxType:"Tabs"},Object(o.b)(s.a,{value:"minimal",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<QuestionForm>\n    <NumberQuestion\n        question="What is 2+2?"\n    />\n    <FreeTextQuestion\n        question="What is the meaning of life?"\n    />    \n</QuestionForm>\n'))),Object(o.b)(s.a,{value:"withMarkdown",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<QuestionForm>\n    <NumberQuestion\n        question={<p>What is $$2+2$$?</p>}\n    />  \n    <FreeTextQuestion\n        question={<span>What is the *meaning of life*?</span>}\n    />    \n</QuestionForm>\n")))))}b.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),p=r,d=m["".concat(i,".").concat(p)]||m[p]||b[p]||o;return n?a.a.createElement(d,s(s({ref:t},u),{},{components:n})):a.a.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},435:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},441:function(e,t,n){"use strict";var r=n(0),a=n(442);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},442:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},446:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(441),i=n(435),s=n(58),c=n.n(s);const u=37,l=39;t.a=function(e){const{lazy:t,block:n,defaultValue:s,values:m,groupId:b,className:p}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(o.a)(),[O,v]=Object(r.useState)(s),y=r.Children.toArray(e.children),j=[];if(null!=b){const e=d[b];null!=e&&e!==O&&m.some((t=>t.value===e))&&v(e)}const h=e=>{const t=e.target,n=j.indexOf(t),r=y[n].props.value;v(r),null!=b&&f(b,r)},g=e=>{var t;let n;switch(e.keyCode){case l:const t=j.indexOf(e.target)+1;n=j[t]||j[0];break;case u:const r=j.indexOf(e.target)-1;n=j[r]||j[j.length-1]}null===(t=n)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},p)},m.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>j.push(e),onKeyDown:g,onFocus:h,onClick:h},t)))),t?Object(r.cloneElement)(y.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},447:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function({children:e,hidden:t,className:n}){return a.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);