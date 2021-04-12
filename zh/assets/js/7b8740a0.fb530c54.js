(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{202:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(410)),l=n(443),o=n(444),c={id:"r-plot",title:"R Plot",sidebar_label:"R Plot"},b={unversionedId:"r/r-plot",id:"r/r-plot",isDocsHomePage:!1,title:"R Plot",description:"\u7528\u4e8e\u5728ISLE\u8bfe\u7a0b\u4e2d\u6e32\u67d3R\u56fe\u7684\u7ec4\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/r/plot.md",slug:"/r/r-plot",permalink:"/zh/docs/r/r-plot",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/r/plot.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1617046663,formattedLastUpdatedAt:"2021/3/29",sidebar_label:"R Plot",sidebar:"docs",previous:{title:"R Output",permalink:"/zh/docs/r/r-output"},next:{title:"R Shell",permalink:"/zh/docs/r/r-shell"}},s=[{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],u={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u7528\u4e8e\u5728ISLE\u8bfe\u7a0b\u4e2d\u6e32\u67d3R\u56fe\u7684\u7ec4\u4ef6\u3002"),Object(i.b)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"code")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u751f\u6210\u56fe\u7684R\u4ee3\u7801. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"width")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(number|string)"),": \u7ed8\u56fe\u5bbd\u5ea6(\u5355\u4f4d\uff1apx). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"600"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"height")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(number|string)"),": \u7ed8\u56fe\u9ad8\u5ea6(\u5355\u4f4d\uff1apx). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'auto'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"draggable")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u60c5\u8282\u662f\u5426\u53ef\u4ee5\u62d6\u52a8. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"fileType")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u7ed8\u56fe\u7684\u6587\u4ef6\u7c7b\u578b(",Object(i.b)("inlineCode",{parentName:"li"},"png"),"\u6216",Object(i.b)("inlineCode",{parentName:"li"},"svg"),"). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'svg'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"libraries")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array"),': \u5f53\u8f93\u5165\u7684 "code "\u88ab\u6267\u884c\u65f6\uff0c\u5e94\u81ea\u52a8\u52a0\u8f7d\u7684R\u5e93\u3002. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"prependCode")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|array)"),": ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"\u6216",Object(i.b)("inlineCode",{parentName:"li"},"array"),"\u7684R\u4ee3\u7801\u7247\u65ad\uff0c\u5728\u8bc4\u4f30",Object(i.b)("inlineCode",{parentName:"li"},"code"),"\u4e2d\u5b58\u50a8\u7684\u4ee3\u7801\u65f6\uff0c\u5c06\u5176\u524d\u7f6e\u3002. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"meta")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": \u7ed8\u5236\u5143\u4fe1\u606f. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"className")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u73ed\u540d. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onDone")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": \u4e00\u65e6\u521b\u5efa\u7ed8\u56fe\uff0c\u5c31\u4f1a\u8c03\u7528\u5e26\u6709",Object(i.b)("inlineCode",{parentName:"li"},"err"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},"img"),"\u548c",Object(i.b)("inlineCode",{parentName:"li"},"body"),"\u53c2\u6570\u7684\u56de\u8c03\u3002. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onDone() {}"),".")),Object(i.b)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),Object(i.b)(l.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Draggable",value:"draggable"},{label:"Custom Dimensions",value:"customDimensions"},{label:"Using Libraries",value:"usingLibraries"}],lazy:!0,mdxType:"Tabs"},Object(i.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<RPlot code="hist( c(20,50,40,70,40,30) )" />\n'))),Object(i.b)(o.a,{value:"draggable",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<RPlot draggable code="hist( c(20,50,40,70,40,30) )" />\n'))),Object(i.b)(o.a,{value:"customDimensions",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<RPlot code="hist( c(20,50,40,70,40,30) )" width="900px" />\n'))),Object(i.b)(o.a,{value:"usingLibraries",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RPlot \n    libraries={[ 'ggplot2' ]}\n    code=\"qplot(mpg, wt, data = mtcars)\" \n/>\n")))))}p.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?r.a.createElement(d,o(o({ref:t},b),{},{components:n})):r.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<i;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},434:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},440:function(e,t,n){"use strict";var a=n(0),r=n(441);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},441:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},443:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(440),l=n(434),o=n(57),c=n.n(o);const b=37,s=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:u,groupId:p,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:O}=Object(i.a)(),[f,j]=Object(a.useState)(o),g=a.Children.toArray(e.children),v=[];if(null!=p){const e=d[p];null!=e&&e!==f&&u.some((t=>t.value===e))&&j(e)}const N=e=>{const t=e.target,n=v.indexOf(t),a=g[n].props.value;j(a),null!=p&&(O(p,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:r}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:l}=window;return t>=0&&r<=l&&a<=i&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((()=>t.classList.remove(c.a.tabItemActive)),2e3))}),150))},y=e=>{var t;let n;switch(e.keyCode){case s:{const t=v.indexOf(e.target)+1;n=v[t]||v[0];break}case b:{const t=v.indexOf(e.target)-1;n=v[t]||v[v.length-1];break}}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},m)},u.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>v.push(e),onKeyDown:y,onFocus:N,onClick:N},t)))),t?Object(a.cloneElement)(g.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},444:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);