(window.webpackJsonp=window.webpackJsonp||[]).push([[1257],{282:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(410)),l={id:"sunburst",title:"Sunburst Plot",sidebar_label:"Sunburst Plot"},o={unversionedId:"plots/sunburst",id:"plots/sunburst",isDocsHomePage:!1,title:"Sunburst Plot",description:"\u0421\u044e\u0436\u0435\u0442 \u0441 \u0441\u043e\u043b\u043d\u0435\u0447\u043d\u044b\u043c\u0438 \u043b\u0443\u0447\u0430\u043c\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 d3 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043f\u0443\u0442\u0435\u0439.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/plots/sunburst.md",slug:"/plots/sunburst",permalink:"/ru/docs/plots/sunburst",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/sunburst.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614551296,sidebar_label:"Sunburst Plot",sidebar:"docs",previous:{title:"Scatter Plot Matrix",permalink:"/ru/docs/plots/scatterplot-matrix"},next:{title:"Violin Plot",permalink:"/ru/docs/plots/violinplot"}},c=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[]}],u={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u0421\u044e\u0436\u0435\u0442 \u0441 \u0441\u043e\u043b\u043d\u0435\u0447\u043d\u044b\u043c\u0438 \u043b\u0443\u0447\u0430\u043c\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 d3 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043f\u0443\u0442\u0435\u0439."),Object(i.b)("h2",{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"categories")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array (required)"),": \u043c\u0430\u0441\u0441\u0438\u0432 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0439 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object (required)"),": \u043e\u0431\u044a\u0435\u043a\u0442 \u0434\u0430\u043d\u043d\u044b\u0445. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"width")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": \u0448\u0438\u0440\u0438\u043d\u0430 \u0443\u0447\u0430\u0441\u0442\u043a\u0430 (\u0432 px). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"750"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"height")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": \u0432\u044b\u0441\u043e\u0442\u0430 \u0443\u0447\u0430\u0441\u0442\u043a\u0430 (\u0432 px). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"600"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0438\u043b\u0438 CSS. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"breadcrumbs")," | ",Object(i.b)("inlineCode",{parentName:"li"},"{w,h,s,t}"),": \u043e\u0431\u044a\u0435\u043a\u0442 \u0441 \u0440\u0430\u0437\u043c\u0435\u0440\u0430\u043c\u0438: ",Object(i.b)("inlineCode",{parentName:"li"},"w")," \u0434\u043b\u044f \u0448\u0438\u0440\u0438\u043d\u044b, ",Object(i.b)("inlineCode",{parentName:"li"},"h")," \u0434\u043b\u044f \u0432\u044b\u0441\u043e\u0442\u044b, ",Object(i.b)("inlineCode",{parentName:"li"},"s")," \u0434\u043b\u044f \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u044f, ",Object(i.b)("inlineCode",{parentName:"li"},"t")," \u0434\u043b\u044f \u0448\u0438\u0440\u0438\u043d\u044b \u043d\u0430\u043a\u043e\u043d\u0435\u0447\u043d\u0438\u043a\u0430/\u0445\u0432\u043e\u0441\u0442\u0430.. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{\n  'w': 250,\n  'h': 50,\n  's': 5,\n  't': 15\n}"),".")),Object(i.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"")))}b.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(l,".").concat(d)]||p[d]||s[d]||i;return n?a.a.createElement(m,o(o({ref:t},u),{},{components:n})):a.a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);