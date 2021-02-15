(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{212:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(406)),o={id:"proptest2",title:"Two-Sample Proportion Test",sidebar_label:"Two-Sample Proportion Test"},l={unversionedId:"tests/proptest2",id:"tests/proptest2",isDocsHomePage:!1,title:"Two-Sample Proportion Test",description:"\u0422\u0435\u0441\u0442 \u043d\u0430 \u043f\u0440\u043e\u043f\u043e\u0440\u0446\u0438\u0438 \u0434\u0432\u0443\u0445 \u043f\u0440\u043e\u0431.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/tests/proptest2.md",slug:"/tests/proptest2",permalink:"/ru/docs/tests/proptest2",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tests/proptest2.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613419765,sidebar_label:"Two-Sample Proportion Test",sidebar:"docs",previous:{title:"One-Sample Proportion Test",permalink:"/ru/docs/tests/proptest"},next:{title:"Beacon Tooltip",permalink:"/ru/docs/beacon-tooltip"}},p=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u0422\u0435\u0441\u0442 \u043d\u0430 \u043f\u0440\u043e\u043f\u043e\u0440\u0446\u0438\u0438 \u0434\u0432\u0443\u0445 \u043f\u0440\u043e\u0431."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object (required)"),": \u043c\u0430\u0441\u0441\u0438\u0432\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043e\u0446\u0435\u043d\u043a\u0438. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"var1")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string (required)"),": \u0438\u043c\u044f \u043f\u0435\u0440\u0432\u043e\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"success")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string (required)"),": \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u0443\u0441\u043f\u0435\u0445\u0430 ",Object(i.b)("inlineCode",{parentName:"li"},"var1"),". Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"var2")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u0438\u043c\u044f \u0432\u0442\u043e\u0440\u043e\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 (",Object(i.b)("inlineCode",{parentName:"li"},"var2")," \u0438\u043b\u0438 ",Object(i.b)("inlineCode",{parentName:"li"},"group")," \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"group")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u0438\u043c\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0438 (\u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c ",Object(i.b)("inlineCode",{parentName:"li"},"var2")," \u0438\u043b\u0438 ",Object(i.b)("inlineCode",{parentName:"li"},"group"),"). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"alpha")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0437\u043d\u0430\u0447\u0438\u043c\u043e\u0441\u0442\u0438. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"0.05"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"direction")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u0430 (\u043b\u0438\u0431\u043e ",Object(i.b)("inlineCode",{parentName:"li"},"\u0431\u0435\u0437"),", ",Object(i.b)("inlineCode",{parentName:"li"},"\u0433\u0440\u044d\u0439\u0442\u0435\u0440"),", \u043b\u0438\u0431\u043e ",Object(i.b)("inlineCode",{parentName:"li"},"\u0434\u0432\u0443\u0445\u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0435\u0435"),").. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'two-sided'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"diff")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": \u0440\u0430\u0437\u043d\u0438\u0446\u0430 \u043d\u0438\u0436\u0435 H0. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"0"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"showDecision")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c \u0442\u043e\u0433\u043e, \u043e\u0442\u0432\u0435\u0440\u0433\u0430\u0435\u0442\u0441\u044f \u043b\u0438 \u043d\u0443\u043b\u0435\u0432\u0430\u044f \u0433\u0438\u043f\u043e\u0442\u0435\u0437\u0430 \u043d\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u043c \u0443\u0440\u043e\u0432\u043d\u0435 \u0437\u043d\u0430\u0447\u0438\u043c\u043e\u0441\u0442\u0438. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),".")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<PropTest2\n    data={heartdisease} \n    var1="Drugs"\n    success={2}\n    group="Complications"\n/>\n')))}b.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=b(n),m=r,d=s["".concat(o,".").concat(m)]||s[m]||u[m]||i;return n?a.a.createElement(d,l(l({ref:t},c),{},{components:n})):a.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);