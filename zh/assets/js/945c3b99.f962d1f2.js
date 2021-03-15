(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{231:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),l=(n(0),n(410)),i=n(446),c=n(447),o={id:"js-shell",title:"JavaScript Shell",sidebar_label:"JavaScript Shell"},b={unversionedId:"js-shell",id:"js-shell",isDocsHomePage:!1,title:"JavaScript Shell",description:"\u4e00\u4e2a\u53ef\u4ee5\u7528\u6765\u6267\u884cJavaScript\u547d\u4ee4\u7684\u4ea4\u4e92\u5f0fJavascript shell\u3002\u8be5shell\u5305\u542b\u4e00\u4e2a\u663e\u793a\u9519\u8bef\u4fe1\u606f\u548c\u8b66\u544a\u7b49\u7684\u63a7\u5236\u53f0\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/js-shell.md",slug:"/js-shell",permalink:"/zh/docs/js-shell",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/js-shell.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614123017,formattedLastUpdatedAt:"2021/2/23",sidebar_label:"JavaScript Shell",sidebar:"docs",previous:{title:"Flippable Card",permalink:"/zh/docs/flippable-card"},next:{title:"Likert Scale",permalink:"/zh/docs/likert-scale"}},s=[{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],u={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u4e00\u4e2a\u53ef\u4ee5\u7528\u6765\u6267\u884cJavaScript\u547d\u4ee4\u7684\u4ea4\u4e92\u5f0fJavascript shell\u3002\u8be5shell\u5305\u542b\u4e00\u4e2a\u663e\u793a\u9519\u8bef\u4fe1\u606f\u548c\u8b66\u544a\u7b49\u7684\u63a7\u5236\u53f0\u3002"),Object(l.b)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"code")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": \u8981\u8bc4\u4f30\u7684JavaScript\u4ee3\u7801. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"solution")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),': \u5bf9\u4e8e\u7f16\u7a0b\u95ee\u9898\uff0c\u4ee3\u7801 "string "\u4ee3\u8868\u95ee\u9898\u7684\u6b63\u5f0f\u89e3\u51b3\u65b9\u6848\u3002. Default: ',Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"hints")," | ",Object(l.b)("inlineCode",{parentName:"li"},"array<(string|node)>"),": \u5bf9\u4e8e\u7f16\u7a0b\u95ee\u9898\uff0c\u4e00\u7cfb\u5217\u7684\u63d0\u793a\u63d0\u4f9b\u4e86\u5982\u4f55\u5904\u7406\u95ee\u9898\u7684\u6307\u5bfc\u3002. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"precompute")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u7ec4\u4ef6\u6302\u8f7d\u540e\u662f\u5426\u5e94\u8be5\u6267\u884c\u9ed8\u8ba4\u4ee3\u7801\u3002. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"chat")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u662f\u5426\u5e94\u8be5\u542f\u7528\u7fa4\u804a\u529f\u80fd. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"check")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),': \u9644\u52a0\u7684JavaScript\u4ee3\u7801\u7528\u4e8e\u68c0\u67e5\u8981\u8bc4\u4f30\u7684 "\u4ee3\u7801"\u3002. Default: ',Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"disabled")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u662f\u5426\u7981\u7528\u6240\u6709\u7528\u6237\u8f93\u5165\u5e76\u4f7f\u4ee3\u7801\u5757\u9759\u6001\u5316\u3002. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lines")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": \u663e\u793a\u884c\u6570. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"5"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"className")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": \u73ed\u540d. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"style")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": CSS\u5185\u8054\u6837\u5f0f. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onChange")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": \u6bcf\u5f53\u6587\u672c\u5b57\u6bb5\u8f93\u5165\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u5c31\u4f1a\u8c03\u7528\u56de\u8c03\u3002. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onEvaluate")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),': \u6bcf\u5f53\u70b9\u51fb "\u8bc4\u4ef7 "\u6309\u94ae\u65f6\uff0c\u5c31\u4f1a\u8c03\u7528\u56de\u8c03\u3002. Default: ',Object(l.b)("inlineCode",{parentName:"li"},"onEvaluate() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"vars")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": \u4f5c\u7528\u57df\u5bf9\u8c61\uff0c\u5176\u4e2d\u5305\u542b\u5e94\u63d0\u4f9b\u7ed9\u88ab\u8bc4\u4f30\u7684",Object(l.b)("inlineCode",{parentName:"li"},"code"),"\u7684\u53d8\u91cf\u3002. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"voiceID")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": \u58f0\u63a7\u8bc6\u522b\u5668. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),".")),Object(l.b)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),Object(l.b)(i.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"Ten Lines",value:"mLines"}],lazy:!0,mdxType:"Tabs"},Object(l.b)(c.a,{value:"minimal",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<JSShell code = {`var a = 2; \nvar b = 2;\nconsole.log(a + b);`} />\n"))),Object(l.b)(c.a,{value:"withStyle",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<JSShell style={{ fontSize: 18, boxShadow: '0 0 4px black' }}  />\n"))),Object(l.b)(c.a,{value:"mLines",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<JSShell lines={10} />\n")))))}p.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||p[m]||l;return n?r.a.createElement(d,c(c({ref:t},b),{},{components:n})):r.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<l;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},435:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},441:function(e,t,n){"use strict";var a=n(0),r=n(442);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},442:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},446:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(441),i=n(435),c=n(58),o=n.n(c);const b=37,s=39;t.a=function(e){const{lazy:t,block:n,defaultValue:c,values:u,groupId:p,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:j}=Object(l.a)(),[O,f]=Object(a.useState)(c),v=a.Children.toArray(e.children),N=[];if(null!=p){const e=d[p];null!=e&&e!==O&&u.some((t=>t.value===e))&&f(e)}const g=e=>{const t=e.target,n=N.indexOf(t),a=v[n].props.value;f(a),null!=p&&j(p,a)},h=e=>{var t;let n;switch(e.keyCode){case s:const t=N.indexOf(e.target)+1;n=N[t]||N[0];break;case b:const a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},u.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(i.a)("tabs__item",o.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>N.push(e),onKeyDown:h,onFocus:g,onClick:g},t)))),t?Object(a.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},447:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);