(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{240:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(406)),o={id:"random-forest",title:"Random Forest",sidebar_label:"Random Forest"},l={unversionedId:"models/random-forest",id:"models/random-forest",isDocsHomePage:!1,title:"Random Forest",description:"\xc1rvores de regress\xe3o e classifica\xe7\xe3o.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/models/random-forest.md",slug:"/models/random-forest",permalink:"/pt/docs/models/random-forest",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/random-forest.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613423749,sidebar_label:"Random Forest",sidebar:"docs",previous:{title:"Principal Component Analysis",permalink:"/pt/docs/models/principal-component-analysis"},next:{title:"Simple Linear Regression",permalink:"/pt/docs/models/simple-linear-regression"}},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\xc1rvores de regress\xe3o e classifica\xe7\xe3o."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object (required)"),": objeto de arrays de valor. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"y")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string (required)"),": vari\xe1vel de resultado. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"x")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(array<string>|string) (required)"),": uma ou mais vari\xe1veis preditoras. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"type")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),': atualmente somente a "Classifica\xe7\xe3o" para respostas categ\xf3ricas \xe9 suportada. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"'Classification'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"quantitative")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array<string> (required)"),': conjunto de vari\xe1veis em "dados" que s\xe3o "quantitativas".. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"nTrees")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": n\xfamero de \xe1rvores. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"50"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"nTry")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": n\xfamero de preditores a verificar em cada divis\xe3o. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"impurityMeasure")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": medida de impureza (",Object(i.b)("inlineCode",{parentName:"li"},"gini")," ou ",Object(i.b)("inlineCode",{parentName:"li"},"entropy"),"). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'gini'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"scoreThreshold")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": limiar de pontua\xe7\xe3o para a divis\xe3o. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"0.01"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"maxTreeDepth")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": profundidade m\xe1xima das \xe1rvores. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"20"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"minItemsCount")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": m\xednimo # de observa\xe7\xf5es em n\xf3s de folhas. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"50"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onPredict")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": chamada de retorno invocada com o objeto modelo ao clicar no bot\xe3o de previs\xe3o. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),".")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RandomForest \n    data={heartdisease} \n    type=\"Classification\"\n    y=\"Complications\"\n    x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}\n    quantitative={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}b.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,u=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return n?a.a.createElement(u,l(l({ref:t},s),{},{components:n})):a.a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);