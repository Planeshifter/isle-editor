(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{187:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),i=t(7),a=(t(0),t(410)),o={id:"random-forest",title:"Random Forest",sidebar_label:"Random Forest"},l={unversionedId:"models/random-forest",id:"models/random-forest",isDocsHomePage:!1,title:"Random Forest",description:"Regressions- und Klassifikationsb\xe4ume.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/models/random-forest.md",slug:"/models/random-forest",permalink:"/de/docs/models/random-forest",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/random-forest.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614613459,sidebar_label:"Random Forest",sidebar:"docs",previous:{title:"Principal Component Analysis",permalink:"/de/docs/models/principal-component-analysis"},next:{title:"Simple Linear Regression",permalink:"/de/docs/models/simple-linear-regression"}},c=[{value:"Optionen",id:"optionen",children:[]},{value:"Beispiele",id:"beispiele",children:[]}],b={toc:c};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Regressions- und Klassifikationsb\xe4ume."),Object(a.b)("h2",{id:"optionen"},"Optionen"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"data")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object (required)"),": Objekt von Werte-Arrays. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"y")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": Ergebnisvariable. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"x")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(array<(string|Factor)>|string|Factor) (required)"),": eine oder mehrere Pr\xe4diktorvariablen. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"type")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": derzeit wird nur ",Object(a.b)("inlineCode",{parentName:"li"},"Classification")," f\xfcr kategorische Antworten unterst\xfctzt. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'Classification'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"quantitative")," | ",Object(a.b)("inlineCode",{parentName:"li"},"array<string> (required)"),": Array von Variablen in ",Object(a.b)("inlineCode",{parentName:"li"},"Daten"),", die ",Object(a.b)("inlineCode",{parentName:"li"},"quantitativ")," sind. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"nTrees")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": Anzahl der B\xe4ume. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"50"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"nTry")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": Anzahl der Pr\xe4diktoren, die bei jedem Split \xfcberpr\xfcft werden. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"1"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"impurityMeasure")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": Verunreinigungsma\xdf (",Object(a.b)("inlineCode",{parentName:"li"},"Gini")," oder ",Object(a.b)("inlineCode",{parentName:"li"},"Entropie"),"). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'gini'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"scoreThreshold")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": Score-Schwelle f\xfcr Split. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"0.01"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"maxTreeDepth")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": maximale Baumtiefe. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"20"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"minItemsCount")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": minimale Anzahl von Beobachtungen in Blattknoten. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"50"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onPredict")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),': Callback, der beim Klicken auf die Schaltfl\xe4che "Vorhersage" mit dem Modellobjekt aufgerufen wird. Default: ',Object(a.b)("inlineCode",{parentName:"li"},"none"),".")),Object(a.b)("h2",{id:"beispiele"},"Beispiele"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RandomForest \n    data={heartdisease} \n    type=\"Classification\"\n    y=\"Complications\"\n    x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}\n    quantitative={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}s.isMDXComponent=!0},410:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return u}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var b=i.a.createContext({}),s=function(e){var n=i.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return i.a.createElement(b.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,u=p["".concat(o,".").concat(d)]||p[d]||m[d]||a;return t?i.a.createElement(u,l(l({ref:n},b),{},{components:t})):i.a.createElement(u,l({ref:n},b))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<a;b++)o[b]=t[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);