(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{234:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),o=(n(0),n(406)),a={id:"distribution-uniform",title:"Continuous Uniform Distribution",sidebar_label:"Continuous Uniform Distribution"},u={unversionedId:"learn/distribution-uniform",id:"learn/distribution-uniform",isDocsHomePage:!1,title:"Continuous Uniform Distribution",description:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u0435\u0439 \u0440\u0430\u0432\u043d\u043e\u043c\u0435\u0440\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/learn/distribution-uniform.md",slug:"/learn/distribution-uniform",permalink:"/ru/docs/learn/distribution-uniform",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-uniform.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612739298,sidebar_label:"Continuous Uniform Distribution",sidebar:"docs",previous:{title:"Student's t Distribution",permalink:"/ru/docs/learn/distribution-t"},next:{title:"Server Installation Guide",permalink:"/ru/docs/server/installation"}},l=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u0435\u0439 \u0440\u0430\u0432\u043d\u043e\u043c\u0435\u0440\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f."),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"hideCDF")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0442\u0435\u043c, \u0441\u043a\u0440\u044b\u0432\u0430\u0442\u044c \u043b\u0438 CDF \u0441\u044e\u0436\u0435\u0442\u044b. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"step")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(number|string)"),": \u0440\u0430\u0437\u043c\u0435\u0440 \u0448\u0430\u0433\u0430 \u043f\u0440\u043e\u043a\u0440\u0443\u0442\u043a\u0438. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"0.01"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"style")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object"),": \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0438\u043b\u0438 CSS. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnUniformDistribution />\n")))}s.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),s=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(a,".").concat(d)]||p[d]||b[d]||o;return n?i.a.createElement(m,u(u({ref:t},c),{},{components:n})):i.a.createElement(m,u({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var c=2;c<o;c++)a[c]=n[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);