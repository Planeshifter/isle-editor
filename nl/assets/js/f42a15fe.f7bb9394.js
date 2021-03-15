(window.webpackJsonp=window.webpackJsonp||[]).push([[1273],{295:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),i=(t(0),t(410)),o={id:"random-forest",title:"Random Forest",sidebar_label:"Random Forest"},l={unversionedId:"models/random-forest",id:"models/random-forest",isDocsHomePage:!1,title:"Random Forest",description:"Regressie- en classificatiebomen.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/models/random-forest.md",slug:"/models/random-forest",permalink:"/nl/docs/models/random-forest",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/random-forest.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614613459,formattedLastUpdatedAt:"1-3-2021",sidebar_label:"Random Forest",sidebar:"docs",previous:{title:"Principal Component Analysis",permalink:"/nl/docs/models/principal-component-analysis"},next:{title:"Simple Linear Regression",permalink:"/nl/docs/models/simple-linear-regression"}},c=[{value:"Opties",id:"opties",children:[]},{value:"Voorbeelden",id:"voorbeelden",children:[]}],b={toc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Regressie- en classificatiebomen."),Object(i.b)("h2",{id:"opties"},"Opties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object (required)"),": object van waardevermeerdering. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"y")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": resultaatvariabele. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"x")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(array<(string|Factor)>|string|Factor) (required)"),": een of meer voorspellende variabelen. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"type")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": op dit moment wordt alleen ",Object(i.b)("inlineCode",{parentName:"li"},"Classificatie")," voor categorische antwoorden ondersteund. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'Classification'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"quantitative")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array<string> (required)"),": array van variabelen in ",Object(i.b)("inlineCode",{parentName:"li"},"data")," die ",Object(i.b)("inlineCode",{parentName:"li"},"kwantitatief")," zijn. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"nTrees")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": aantal bomen. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"50"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"nTry")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": aantal te controleren voorspellers bij elke splitsing. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"impurityMeasure")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": onzuiverheidsmaatregel (",Object(i.b)("inlineCode",{parentName:"li"},"gini")," of ",Object(i.b)("inlineCode",{parentName:"li"},"entropie"),"). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'gini'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"scoreThreshold")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": scoringsdrempel voor splitsing. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"0.01"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"maxTreeDepth")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": maximale boomdiepte. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"20"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"minItemsCount")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": minimum # van de waarnemingen in bladknopen. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"50"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onPredict")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": callback aangeroepen met modelobject bij het klikken op de voorspellingsknop. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),".")),Object(i.b)("h2",{id:"voorbeelden"},"Voorbeelden"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RandomForest \n    data={heartdisease} \n    type=\"Classification\"\n    y=\"Complications\"\n    x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}\n    quantitative={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}s.isMDXComponent=!0},410:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return u}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),s=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,u=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return t?a.a.createElement(u,l(l({ref:n},b),{},{components:t})):a.a.createElement(u,l({ref:n},b))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<i;b++)o[b]=t[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);