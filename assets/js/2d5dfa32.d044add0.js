(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{148:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(7),i=(t(0),t(406)),o={id:"mean-vs-median",title:"Mean vs. Median",sidebar_label:"Mean vs. Median"},l={unversionedId:"learn/mean-vs-median",id:"learn/mean-vs-median",isDocsHomePage:!1,title:"Mean vs. Median",description:"An interactive game testing student's ability in detecting the median and mean of a given distribution.",source:"@site/docs/learn/mean-vs-median.md",slug:"/learn/mean-vs-median",permalink:"/docs/learn/mean-vs-median",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/mean-vs-median.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612731787,sidebar_label:"Mean vs. Median",sidebar:"docs",previous:{title:"Image Pixel Picker",permalink:"/docs/learn/image-pixel-picker"},next:{title:"Networks",permalink:"/docs/learn/networks"}},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:c};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"An interactive game testing student's ability in detecting the median and mean of a given distribution."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"feedback")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to display feedback buttons. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"header")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": title of the panel in which the mean and the median will be generated. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"id")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": component identifier. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'mean_vs_median'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"intro")," | ",Object(i.b)("inlineCode",{parentName:"li"},"node"),": any introductory material that may be needed. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"seed")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": seed to initialize pseudorandom number generator. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"showStatistics")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to display student and group performance statistics. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": CSS inline styles. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnMeanVSMedian />\n")))}b.isMDXComponent=!0},406:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),b=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=b(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(t),m=a,u=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return t?r.a.createElement(u,l(l({ref:n},s),{},{components:t})):r.a.createElement(u,l({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);