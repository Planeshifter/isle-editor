(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{206:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(406)),l={id:"histogram",title:"Histogram",sidebar_label:"Histogram"},o={unversionedId:"plots/histogram",id:"plots/histogram",isDocsHomePage:!1,title:"Histogram",description:"\u0413\u0438\u0441\u0442\u043e\u0433\u0440\u0430\u043c\u043c\u0430.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/plots/histogram.md",slug:"/plots/histogram",permalink:"/ru/docs/plots/histogram",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/histogram.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613417523,sidebar_label:"Histogram",sidebar:"docs",previous:{title:"Heat Map",permalink:"/ru/docs/plots/heatmap"},next:{title:"Line Plot",permalink:"/ru/docs/plots/lineplot"}},b=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u0413\u0438\u0441\u0442\u043e\u0433\u0440\u0430\u043c\u043c\u0430."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object (required)"),": \u043c\u0430\u0441\u0441\u0438\u0432\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043e\u0446\u0435\u043d\u043a\u0438. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"variable")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string (required)"),": \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"group")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0438. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"groupMode")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u043d\u0430\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0442\u044c \u043b\u0438 \u0441\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0433\u0438\u0441\u0442\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0434\u0440\u0443\u0433 \u043d\u0430 \u0434\u0440\u0443\u0433\u0430 (",Object(i.b)("inlineCode",{parentName:"li"},"\u041e\u0432\u0435\u0440\u043b\u0435\u0439"),") \u0438\u043b\u0438 \u043d\u0430 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u0433\u0440\u0430\u0444\u0438\u043a\u0438 \u0440\u044f\u0434\u043e\u043c \u0434\u0440\u0443\u0433 \u0441 \u0434\u0440\u0443\u0433\u043e\u043c (",Object(i.b)("inlineCode",{parentName:"li"},"\u0424\u0435\u0439\u0441\u044b"),").. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'Overlay'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"displayDensity")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043f\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u0438 \u0432\u043c\u0435\u0441\u0442\u043e \u043f\u043e\u0434\u0441\u0447\u0435\u0442\u043e\u0432 \u043f\u043e \u043e\u0441\u0438 Y. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"densityType")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u043f\u0440\u0438 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0438 \u043f\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u0435\u0439 \u043c\u043e\u0436\u043d\u043e \u043b\u0438\u0431\u043e \u043d\u0430\u043b\u043e\u0436\u0438\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 (",Object(i.b)("inlineCode",{parentName:"li"},"\u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e\u0435"),", ",Object(i.b)("inlineCode",{parentName:"li"},"\u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e\u0435")," \u0438\u043b\u0438 ",Object(i.b)("inlineCode",{parentName:"li"},"\u044d\u043a\u0441\u043f\u043e\u043d\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435"),"), \u043b\u0438\u0431\u043e \u043d\u0435\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u044f\u0434\u0435\u0440\u043d\u0443\u044e \u043e\u0446\u0435\u043d\u043a\u0443 \u043f\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u0438 (",Object(i.b)("inlineCode",{parentName:"li"},"\u0434\u0430\u043d\u043d\u044b\u0435-\u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435"),").. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"bandwidthAdjust")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": undefined. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"binStrategy")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f \u0431\u0438\u043d\u0438\u043d\u0433\u0430 (",Object(i.b)("inlineCode",{parentName:"li"},"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439"),", ",Object(i.b)("inlineCode",{parentName:"li"},"\u0412\u044b\u0431\u043e\u0440")," \u043c\u0443\u0441\u043e\u0440\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430",Object(i.b)("inlineCode",{parentName:"li"},", \u0438\u043b\u0438 "),"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0448\u0438\u0440\u0438\u043d\u044b \u043c\u0443\u0441\u043e\u0440\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430",Object(i.b)("inlineCode",{parentName:"li"},").. Default: "),"'Automatic'`."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"nBins")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": \u043d\u0435\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0431\u0443\u043d\u043a\u0435\u0440\u043e\u0432. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"nCols")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u043f\u0440\u0438 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0438 \u0444\u0430\u0441\u0435\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0441\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0433\u0438\u0441\u0442\u043e\u0433\u0440\u0430\u043c\u043c\u044b. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"xbins")," | ",Object(i.b)("inlineCode",{parentName:"li"},"{start,size,end}"),": undefined. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Histogram \n    data={heartdisease} \n    variable="Cost"\n    group="Drugs"\n/>\n')))}p.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,d=s["".concat(l,".").concat(m)]||s[m]||u[m]||i;return n?a.a.createElement(d,o(o({ref:t},c),{},{components:n})):a.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);