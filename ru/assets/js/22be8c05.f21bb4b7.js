(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{145:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),c=(r(0),r(406)),o={id:"clt-discrete",title:"Discrete CLT",sidebar_label:"Discrete CLT"},i={unversionedId:"learn/clt-discrete",id:"learn/clt-discrete",isDocsHomePage:!1,title:"Discrete CLT",description:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442, \u0438\u043b\u043b\u044e\u0441\u0442\u0440\u0438\u0440\u0443\u044e\u0449\u0438\u0439 \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u0443\u044e \u043f\u0440\u0435\u0434\u0435\u043b\u044c\u043d\u0443\u044e \u0442\u0435\u043e\u0440\u0438\u044e (CLT) \u0434\u043b\u044f \u043a\u0430\u043d\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0434\u0438\u0441\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f, \u0431\u0438\u043d\u043e\u043c\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/learn/clt-discrete.md",slug:"/learn/clt-discrete",permalink:"/ru/docs/learn/clt-discrete",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/clt-discrete.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612739298,sidebar_label:"Discrete CLT",sidebar:"docs",previous:{title:"Continuous CLT",permalink:"/ru/docs/learn/clt-continuous"},next:{title:"CLT Sample",permalink:"/ru/docs/learn/clt-sample"}},l=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442, \u0438\u043b\u043b\u044e\u0441\u0442\u0440\u0438\u0440\u0443\u044e\u0449\u0438\u0439 \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u0443\u044e \u043f\u0440\u0435\u0434\u0435\u043b\u044c\u043d\u0443\u044e \u0442\u0435\u043e\u0440\u0438\u044e (CLT) \u0434\u043b\u044f \u043a\u0430\u043d\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0434\u0438\u0441\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f, \u0431\u0438\u043d\u043e\u043c\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435."),Object(c.b)("h2",{id:"options"},"Options"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"showPopStdev")," | ",Object(c.b)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442, \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043b\u0438 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u043e\u0442\u043a\u043b\u043e\u043d\u0435\u043d\u0438\u0435 \u043d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u044f. Default: ",Object(c.b)("inlineCode",{parentName:"li"},"true"),".")),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnDiscreteCLT />\n")))}u.isMDXComponent=!0},406:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||c;return r?a.a.createElement(f,i(i({ref:t},s),{},{components:r})):a.a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);