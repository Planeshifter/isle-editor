(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{268:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),l=(n(0),n(406)),i=n(565),o=n(566),s={id:"lesson-submit",title:"Lesson Submit",sidebar_label:"Lesson Submit"},c={unversionedId:"lesson-submit",id:"lesson-submit",isDocsHomePage:!1,title:"Lesson Submit",description:"\u5728\u8bfe\u7a0b\u7ed3\u675f\u65f6\u663e\u793a\u7684\u6309\u94ae\uff0c\u4f9b\u5b66\u751f\u70b9\u51fb\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8bfe\u7a0b\u7ed3\u675f\u7684\u786e\u8ba4\u4fe1\u606f\u4f1a\u53d1\u9001\u5230\u5b66\u751f\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/lesson-submit.md",slug:"/lesson-submit",permalink:"/zh/docs/lesson-submit",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/lesson-submit.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613425142,sidebar_label:"Lesson Submit",sidebar:"docs",previous:{title:"Sketchpad",permalink:"/zh/docs/sketchpad"},next:{title:"Video Lecture",permalink:"/zh/docs/video-lecture"}},b=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:b};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u5728\u8bfe\u7a0b\u7ed3\u675f\u65f6\u663e\u793a\u7684\u6309\u94ae\uff0c\u4f9b\u5b66\u751f\u70b9\u51fb\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8bfe\u7a0b\u7ed3\u675f\u7684\u786e\u8ba4\u4fe1\u606f\u4f1a\u53d1\u9001\u5230\u5b66\u751f\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u3002"),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"label")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": \u63d0\u4ea4\u6309\u94ae\u7684\u6807\u7b7e. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"message")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": \u786e\u8ba4\u90ae\u4ef6. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"requireLogin")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u662f\u5426\u9700\u8981\u7528\u6237\u767b\u5f55\u624d\u80fd\u6fc0\u6d3b\u6309\u94ae\uff08\u5bf9\u4e8e\u533f\u540d\u7528\u6237\uff0c\u4e0d\u53d1\u9001\u7535\u5b50\u90ae\u4ef6\u786e\u8ba4\uff09\u3002. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"true"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"sendConfirmationEmail")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u662f\u5426\u5728\u8bfe\u7a0b\u63d0\u4ea4\u65f6\u53d1\u9001\u786e\u8ba4\u90ae\u4ef6. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"true"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"className")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": \u73ed\u540d. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"style")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": CSS\u5185\u8054\u6837\u5f0f. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onClick")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": \u70b9\u51fb\u63d0\u4ea4\u6309\u94ae\u65f6\u8c03\u7528\u7684\u56de\u8c03\u3002. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onClick() {}"),".")),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)(i.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Custom Label",value:"customLabel"},{label:"Email Feedback",value:"emailFeedback"},{label:"With Callback",value:"withCallback"}],lazy:!0,mdxType:"Tabs"},Object(l.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LessonSubmit />\n"))),Object(l.b)(o.a,{value:"customLabel",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<LessonSubmit label="Click to submit" />\n'))),Object(l.b)(o.a,{value:"withEmail",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LessonSubmit \n    style={{ outline: '4px solid black'}}\n    message={`\n    Hi,\n    I am very glad that you solved this lesson. Congratulations! \n    It was a sophisticated one.\n    If you want some help how to use ISLE, have a look a \n    [this site](https://isledocs.com/docs/)\n    \n    Best\n    The ISLE team\n    `}\n    label=\"Click to submit\" />\n"))),Object(l.b)(o.a,{value:"withCallback",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LessonSubmit \n    requireLogin={false}\n    onClick={() => {\n        alert( 'The Button has been clicked...' );\n    }}\n    label=\"Click to submit\" />\n")))))}m.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(n),p=a,d=u["".concat(i,".").concat(p)]||u[p]||m[p]||l;return n?r.a.createElement(d,o(o({ref:t},c),{},{components:n})):r.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},478:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},552:function(e,t,n){"use strict";var a=n(0),r=n(553);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},553:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},565:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(552),i=n(478),o=n(57),s=n.n(o);const c=37,b=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:u,groupId:m,className:p}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(l.a)(),[O,j]=Object(a.useState)(o),v=a.Children.toArray(e.children),g=[];if(null!=m){const e=d[m];null!=e&&e!==O&&u.some((t=>t.value===e))&&j(e)}const y=e=>{const t=e.target,n=g.indexOf(t),a=v[n].props.value;j(a),null!=m&&f(m,a)},h=e=>{var t;let n;switch(e.keyCode){case b:const t=g.indexOf(e.target)+1;n=g[t]||g[0];break;case c:const a=g.indexOf(e.target)-1;n=g[a]||g[g.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},p)},u.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>g.push(e),onKeyDown:h,onFocus:y,onClick:y},t)))),t?Object(a.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},566:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);