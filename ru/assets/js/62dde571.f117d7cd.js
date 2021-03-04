(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(410)),l={id:"r-plot",title:"R Plot",sidebar_label:"R Plot"},o={unversionedId:"r/r-plot",id:"r/r-plot",isDocsHomePage:!1,title:"R Plot",description:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0434\u043b\u044f \u043e\u0442\u0440\u0438\u0441\u043e\u0432\u043a\u0438 R-\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u0432\u043d\u0443\u0442\u0440\u0438 \u0443\u0440\u043e\u043a\u0430 ISLE.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/r/plot.md",slug:"/r/r-plot",permalink:"/ru/docs/r/r-plot",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/r/plot.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"R Plot",sidebar:"docs",previous:{title:"R Output",permalink:"/ru/docs/r/r-output"},next:{title:"R Shell",permalink:"/ru/docs/r/r-shell"}},c=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[]}],b={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0434\u043b\u044f \u043e\u0442\u0440\u0438\u0441\u043e\u0432\u043a\u0438 R-\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u0432\u043d\u0443\u0442\u0440\u0438 \u0443\u0440\u043e\u043a\u0430 ISLE."),Object(i.b)("h2",{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"code")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": R \u043a\u043e\u0434 \u0434\u043b\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u0433\u0440\u0430\u0444\u0438\u043a\u0430. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"width")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(number|string)"),": \u0448\u0438\u0440\u0438\u043d\u0430 \u0443\u0447\u0430\u0441\u0442\u043a\u0430 (\u0432 px). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"600"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"height")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(number|string)"),": \u0432\u044b\u0441\u043e\u0442\u0430 \u0443\u0447\u0430\u0441\u0442\u043a\u0430 (\u0432 px). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'auto'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"draggable")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442, \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043b\u0438 \u043f\u0435\u0440\u0435\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u0442\u044c \u0443\u0447\u0430\u0441\u0442\u043e\u043a. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"fileType")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u0442\u0438\u043f \u0444\u0430\u0439\u043b\u0430 \u0441\u044e\u0436\u0435\u0442\u0430 (",Object(i.b)("inlineCode",{parentName:"li"},"png")," \u0438\u043b\u0438 ",Object(i.b)("inlineCode",{parentName:"li"},"svg"),"). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'svg'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"libraries")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array"),": R \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u044b \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0432\u0445\u043e\u0434\u043d\u043e\u0433\u043e ",Object(i.b)("inlineCode",{parentName:"li"},"\u043a\u043e\u0434\u0430"),".. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"prependCode")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|array)"),": ",Object(i.b)("inlineCode",{parentName:"li"},"\u0441\u0442\u0440\u043e\u043a\u0430")," \u0438\u043b\u0438 ",Object(i.b)("inlineCode",{parentName:"li"},"\u043c\u0430\u0441\u0441\u0438\u0432")," \u0438\u0437 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u043e\u0432 \u043a\u043e\u0434\u0430 R, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u044b \u043a \u043a\u043e\u0434\u0443, \u0445\u0440\u0430\u043d\u044f\u0449\u0435\u043c\u0443\u0441\u044f \u0432 ",Object(i.b)("inlineCode",{parentName:"li"},"\u043a\u043e\u0434\u0435")," \u043f\u0440\u0438 \u043e\u0446\u0435\u043d\u043a\u0435. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"meta")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": \u0441\u044e\u0436\u0435\u0442\u043d\u0430\u044f \u043c\u0435\u0442\u0430-\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"className")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043b\u0430\u0441\u0441\u0430. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onDone")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": \u0432\u044b\u0437\u043e\u0432 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0430 \u0441 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438 ",Object(i.b)("inlineCode",{parentName:"li"},"err"),", ",Object(i.b)("inlineCode",{parentName:"li"},"img")," \u0438 ",Object(i.b)("inlineCode",{parentName:"li"},"body")," \u043f\u043e\u0441\u043b\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0441\u044e\u0436\u0435\u0442\u0430.. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onDone() {}"),".")),Object(i.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<RPlot code="hist( c(20,50,40,70,40,30) )" />\n')))}p.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,s=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.a.createElement(s,o(o({ref:t},b),{},{components:n})):a.a.createElement(s,o({ref:t},b))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);