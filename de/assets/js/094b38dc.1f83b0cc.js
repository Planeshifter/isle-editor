(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{121:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(7),i=(t(0),t(410)),o={id:"naive-bayes",title:"Naive Bayes",sidebar_label:"Naive Bayes"},l={unversionedId:"models/naive-bayes",id:"models/naive-bayes",isDocsHomePage:!1,title:"Naive Bayes",description:"Naive Bayes unter der Annahme, dass die Pr\xe4diktoren angesichts der Klassenzugeh\xf6rigkeit einer Normalverteilung folgen.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/models/naive-bayes.md",slug:"/models/naive-bayes",permalink:"/de/docs/models/naive-bayes",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/naive-bayes.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614613459,sidebar_label:"Naive Bayes",sidebar:"docs",previous:{title:"Multiple Linear Regression",permalink:"/de/docs/models/multiple-linear-regression"},next:{title:"Principal Component Analysis",permalink:"/de/docs/models/principal-component-analysis"}},s=[{value:"Optionen",id:"optionen",children:[]},{value:"Beispiele",id:"beispiele",children:[]}],c={toc:s};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Naive Bayes unter der Annahme, dass die Pr\xe4diktoren angesichts der Klassenzugeh\xf6rigkeit einer Normalverteilung folgen."),Object(i.b)("h2",{id:"optionen"},"Optionen"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object (required)"),": Objekt von Werte-Arrays. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"y")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": Ergebnisvariable. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"x")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(array<(string|Factor)>|string|Factor) (required)"),": eine oder mehrere Pr\xe4diktorvariablen. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"quantitative")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array<string> (required)"),": Array von Variablen in ",Object(i.b)("inlineCode",{parentName:"li"},"Daten"),", die ",Object(i.b)("inlineCode",{parentName:"li"},"quantitativ")," sind. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"omitMissing")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob fehlende Werte ausgelassen werden sollen. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onPredict")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": Callback, der mit Vorhersagen und Residuen nach der Modellanpassung aufgerufen wird. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),".")),Object(i.b)("h2",{id:"beispiele"},"Beispiele"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<NaiveBayes \n    data={heartdisease} \n    y=\"Drugs\"\n    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Complications' ]}\n    quantitative={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}b.isMDXComponent=!0},410:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),b=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=b(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(t),p=r,m=u["".concat(o,".").concat(p)]||u[p]||d[p]||i;return t?a.a.createElement(m,l(l({ref:n},c),{},{components:t})):a.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);