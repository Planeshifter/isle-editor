(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{246:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(406)),i={id:"lineplot",title:"Line Plot",sidebar_label:"Line Plot"},l={unversionedId:"plots/lineplot",id:"plots/lineplot",isDocsHomePage:!1,title:"Line Plot",description:"A line plot.",source:"@site/docs/plots/lineplot.md",slug:"/plots/lineplot",permalink:"/docs/plots/lineplot",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/lineplot.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613417523,sidebar_label:"Line Plot",sidebar:"docs",previous:{title:"Histogram",permalink:"/docs/plots/histogram"},next:{title:"Map",permalink:"/docs/plots/map"}},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A line plot."),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"data")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object (required)"),": object of value arrays for each variable. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"x")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": x-axis variable. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"y")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string (required)"),": y-axis variable. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"group")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": grouping variable. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"showPoints")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to overlay points at each observation. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),".")),Object(a.b)("h2",{id:"examples"},"Examples"))}s.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||a;return n?o.a.createElement(m,l(l({ref:t},p),{},{components:n})):o.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);