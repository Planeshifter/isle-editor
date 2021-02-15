(window.webpackJsonp=window.webpackJsonp||[]).push([[308],{242:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(7),i=(t(0),t(406)),o={id:"random-forest",title:"Random Forest",sidebar_label:"Random Forest"},l={unversionedId:"models/random-forest",id:"models/random-forest",isDocsHomePage:!1,title:"Random Forest",description:"\xc1rboles de regresi\xf3n y clasificaci\xf3n.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/models/random-forest.md",slug:"/models/random-forest",permalink:"/es/docs/models/random-forest",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/random-forest.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613423749,sidebar_label:"Random Forest",sidebar:"docs",previous:{title:"Principal Component Analysis",permalink:"/es/docs/models/principal-component-analysis"},next:{title:"Simple Linear Regression",permalink:"/es/docs/models/simple-linear-regression"}},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:c};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\xc1rboles de regresi\xf3n y clasificaci\xf3n."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object (required)"),": objeto de las matrices de valor. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"y")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string (required)"),": variable de resultado. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"x")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(array<string>|string) (required)"),": una o m\xe1s variables de predicci\xf3n. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"type")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),': actualmente s\xf3lo se apoya la "clasificaci\xf3n" para las respuestas categ\xf3ricas. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"'Classification'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"quantitative")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array<string> (required)"),': de variables en los "datos" que son "cuantitativos".. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"nTrees")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": n\xfamero de \xe1rboles. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"50"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"nTry")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": n\xfamero de predictores a comprobar en cada divisi\xf3n. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"impurityMeasure")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": medida de impureza (",Object(i.b)("inlineCode",{parentName:"li"},"gini")," o ",Object(i.b)("inlineCode",{parentName:"li"},"entrop\xeda"),"). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'gini'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"scoreThreshold")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": umbral de puntuaci\xf3n para la divisi\xf3n. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"0.01"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"maxTreeDepth")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": m\xe1xima profundidad del \xe1rbol. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"20"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"minItemsCount")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": m\xednimo de observaciones en los nodos de las hojas. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"50"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onPredict")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": llamada de retorno invocada con el objeto modelo al hacer clic en el bot\xf3n de predicci\xf3n. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),".")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RandomForest \n    data={heartdisease} \n    type=\"Classification\"\n    y=\"Complications\"\n    x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}\n    quantitative={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}b.isMDXComponent=!0},406:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return u}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),b=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=b(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(t),m=r,u=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return t?a.a.createElement(u,l(l({ref:n},s),{},{components:t})):a.a.createElement(u,l({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);