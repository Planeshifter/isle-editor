(window.webpackJsonp=window.webpackJsonp||[]).push([[1235],{260:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),i=r(7),o=(r(0),r(410)),a={id:"distribution-geometric",title:"Geometric Distribution",sidebar_label:"Geometric Distribution"},c={unversionedId:"learn/distribution-geometric",id:"learn/distribution-geometric",isDocsHomePage:!1,title:"Geometric Distribution",description:"A learning component for calculating probabilities of a geometric distribution.",source:"@site/docs/learn/distribution-geometric.md",slug:"/learn/distribution-geometric",permalink:"/docs/learn/distribution-geometric",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-geometric.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612731787,sidebar_label:"Geometric Distribution",sidebar:"docs",previous:{title:"Gamma Distribution",permalink:"/docs/learn/distribution-gamma"},next:{title:"Hypergeometric Distribution",permalink:"/docs/learn/distribution-hypergeometric"}},l=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:l};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A learning component for calculating probabilities of a geometric distribution."),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"countTrials")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": set to true if instead of counting the number of failures until the first success, a random variable from a geometric distribution should be defined as the number of trials until the first success. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"step")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(number|string)"),": step size of the scroll input. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"0.01"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"style")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object"),": CSS inline styles. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnGeometricDistribution />\n")))}u.isMDXComponent=!0},410:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(r),m=n,d=b["".concat(a,".").concat(m)]||b[m]||p[m]||o;return r?i.a.createElement(d,c(c({ref:t},s),{},{components:r})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);