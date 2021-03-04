(window.webpackJsonp=window.webpackJsonp||[]).push([[1247],{272:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(410)),i=a(447),o=a(448),c={id:"barchart",title:"Bar Chart",sidebar_label:"Bar Chart"},b={unversionedId:"plots/barchart",id:"plots/barchart",isDocsHomePage:!1,title:"Bar Chart",description:"\u6761\u5f62\u56fe\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/plots/barchart.md",slug:"/plots/barchart",permalink:"/zh/docs/plots/barchart",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/barchart.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614551296,sidebar_label:"Bar Chart",sidebar:"docs",previous:{title:"Plotly",permalink:"/zh/docs/plotly"},next:{title:"Box Plot",permalink:"/zh/docs/plots/boxplot"}},s=[{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],u={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u6761\u5f62\u56fe\u3002"),Object(l.b)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"data")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object (required)"),": \u503c\u6570\u7ec4\u5bf9\u8c61. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"variable")," | ",Object(l.b)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": \u53d8\u91cf\u663e\u793a. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"group")," | ",Object(l.b)("inlineCode",{parentName:"li"},"(string|Factor)"),": \u5206\u7ec4\u53d8\u91cf. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"yvar")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": \u53ef\u9009\u53d8\u91cf\uff0c\u7528\u4e8e\u5217\u9ad8(\u4e0e",Object(l.b)("inlineCode",{parentName:"li"},"summary"),"\u4e00\u8d77\u4f7f\u7528). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"summary")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),': \u4e3a "yvar "\u8ba1\u7b97\u5e76\u663e\u793a\u4e3a\u6bcf\u4e2a\u7c7b\u522b\u7684\u6761\u5f62\u9ad8\u5ea6\u7684\u7edf\u8ba1\u540d\u79f0(\u53ef\u4ee5\u662f ',Object(l.b)("inlineCode",{parentName:"li"},"Min"),"\u3001",Object(l.b)("inlineCode",{parentName:"li"},"Max"),"\u3001",Object(l.b)("inlineCode",{parentName:"li"},"Mean"),"\u3001",Object(l.b)("inlineCode",{parentName:"li"},"Median"),"\u3001",Object(l.b)("inlineCode",{parentName:"li"},"Sum"),"...). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"horizontal")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": \u662f\u5426\u6c34\u5e73\u663e\u793a\u6761\u5f62\u56fe. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"stackBars")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": \u5206\u7ec4\u65f6\uff0c\u63a7\u5236\u662f\u5426\u5c06\u6761\u5f62\u56fe\u53e0\u52a0\u5728\u4e00\u8d77\u3002. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"relative")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": \u662f\u5426\u8ba1\u7b97\u5404\u7ec4\u5185\u7684\u76f8\u5bf9\u9891\u7387\uff1f. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"totalPercent")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": \u662f\u5426\u5c06\u6574\u4f53\u6761\u5f62\u56fe\u663e\u793a\u4e3a\u76f8\u5bf9\u9891\u7387. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"xOrder")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),': "\u603b\u6570"\u3001"\u7c7b\u522b"\u3001"\u6700\u5c0f\u503c"\u3001"\u6700\u5927\u503c"\u3001"\u5e73\u5747\u503c "\u6216 "\u4e2d\u4f4d\u6570 "\u4e2d\u7684\u4efb\u610f\u4e00\u4e2a\u3002. Default: ',Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"direction")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),': \u5982\u4f55\u5728X\u8f74\u65c1\u6392\u5217\u67f1\u5f62\u56fe\uff08"\u5347 "\u6216 "\u964d"\uff09\uff1f. Default: ',Object(l.b)("inlineCode",{parentName:"li"},"'ascending'"),".")),Object(l.b)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),Object(l.b)(i.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Descending Order",value:"descending"},{label:"Relative Stacked Bars",value:"relativeStackedBars"}],lazy:!0,mdxType:"Tabs"},Object(l.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n/>\n'))),Object(l.b)(o.a,{value:"grouped",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    group="Gender"\n/>\n'))),Object(l.b)(o.a,{value:"descending",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    xOrder="total"\n    direction="descending"\n/>\n'))),Object(l.b)(o.a,{value:"relativeStackedBars",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    stackBars\n    relative\n    group="Gender"\n/>\n')))))}p.isMDXComponent=!0},410:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||l;return a?r.a.createElement(m,o(o({ref:t},b),{},{components:a})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var b=2;b<l;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},435:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},444:function(e,t,a){"use strict";var n=a(0),r=a(445);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},445:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},447:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(444),i=a(435),o=a(58),c=a.n(o);const b=37,s=39;t.a=function(e){const{lazy:t,block:a,defaultValue:o,values:u,groupId:p,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:O}=Object(l.a)(),[j,f]=Object(n.useState)(o),v=n.Children.toArray(e.children),g=[];if(null!=p){const e=m[p];null!=e&&e!==j&&u.some((t=>t.value===e))&&f(e)}const N=e=>{const t=e.target,a=g.indexOf(t),n=v[a].props.value;f(n),null!=p&&O(p,n)},y=e=>{var t;let a;switch(e.keyCode){case s:const t=g.indexOf(e.target)+1;a=g[t]||g[0];break;case b:const n=g.indexOf(e.target)-1;a=g[n]||g[g.length-1]}null===(t=a)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},d)},u.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===e}),key:e,ref:e=>g.push(e),onKeyDown:y,onFocus:N,onClick:N},t)))),t?Object(n.cloneElement)(v.filter((e=>e.props.value===j))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}},448:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function({children:e,hidden:t,className:a}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:a},e)}}}]);