(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{194:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),i=t(7),a=(t(0),t(406)),o={id:"decision-tree",title:"Decision Tree",sidebar_label:"Decision Tree"},l={unversionedId:"models/decision-tree",id:"models/decision-tree",isDocsHomePage:!1,title:"Decision Tree",description:"Regressie- en classificatiebomen.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/models/decision-tree.md",slug:"/models/decision-tree",permalink:"/nl/docs/models/decision-tree",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/decision-tree.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613423749,sidebar_label:"Decision Tree",sidebar:"docs",previous:{title:"Word Cloud",permalink:"/nl/docs/word-cloud"},next:{title:"Hierarchical Clustering",permalink:"/nl/docs/models/hierarchical-clustering"}},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:c};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Regressie- en classificatiebomen."),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"data")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object (required)"),": object van waardevermeerdering. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"y")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string (required)"),": resultaatvariabele. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"x")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(array<string>|string) (required)"),": een of meer voorspellende variabelen. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"type")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string (required)"),": Classificatie",Object(a.b)("inlineCode",{parentName:"li"},"voor categorische of"),"Regressie",Object(a.b)("inlineCode",{parentName:"li"},"voor kwantitatieve resultaten. Default:"),"none`."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"quantitative")," | ",Object(a.b)("inlineCode",{parentName:"li"},"array<string> (required)"),": array van variabelen in ",Object(a.b)("inlineCode",{parentName:"li"},"data")," die ",Object(a.b)("inlineCode",{parentName:"li"},"kwantitatief")," zijn. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"impurityMeasure")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": onzuiverheidsmaatregel (",Object(a.b)("inlineCode",{parentName:"li"},"gini")," of ",Object(a.b)("inlineCode",{parentName:"li"},"entropie"),"). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'gini'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"scoreThreshold")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": scoringsdrempel voor splitsing. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"0.0075"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"maxTreeDepth")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": maximale boomdiepte. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"5"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"minItemsCount")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": minimum # van de waarnemingen in bladknopen. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"50"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onPredict")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": callback aangeroepen met modelobject bij het klikken op de voorspellingsknop. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),".")),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<DecisionTree \n    data={heartdisease} \n    type=\"Classification\"\n    y=\"Complications\"\n    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Drugs' ]}\n    quantitative={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}s.isMDXComponent=!0},406:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var b=i.a.createContext({}),s=function(e){var n=i.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return i.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||a;return t?i.a.createElement(m,l(l({ref:n},b),{},{components:t})):i.a.createElement(m,l({ref:n},b))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<a;b++)o[b]=t[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);