(window.webpackJsonp=window.webpackJsonp||[]).push([[1226],{252:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return l})),t.d(a,"toc",(function(){return c})),t.d(a,"default",(function(){return u}));var n=t(3),i=t(7),r=(t(0),t(410)),o={id:"data-explorer",title:"Data Explorer",sidebar_label:"Data Explorer"},l={unversionedId:"data-explorer",id:"data-explorer",isDocsHomePage:!1,title:"Data Explorer",description:"Ten komponent jest wykorzystywany przez uczni\xf3w do kr\xf3tkiego podsumowania danych w trakcie ich prezentacji oraz do przeprowadzania r\xf3\u017cnych test\xf3w statystycznych.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/data-explorer.md",slug:"/data-explorer",permalink:"/pl/docs/data-explorer",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/data-explorer.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21.02.2021",sidebar_label:"Data Explorer",sidebar:"docs",previous:{title:"Using ISLE in the Classroom",permalink:"/pl/docs/tutorials/classroom-use"},next:{title:"Data Table",permalink:"/pl/docs/data-table"}},c=[{value:"Opcje",id:"opcje",children:[]},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[]}],b=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",a)}},p=b("TextEditor"),s=b("DataTable"),m={toc:c};function u(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},m,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Ten komponent jest wykorzystywany przez uczni\xf3w do kr\xf3tkiego podsumowania danych w trakcie ich prezentacji oraz do przeprowadzania r\xf3\u017cnych test\xf3w statystycznych."),Object(r.b)("h2",{id:"opcje"},"Opcje"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"categorical")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": tablica \u0142a\u0144cuch\xf3w wskazuj\u0105ca nazw\u0119 ka\u017cdej zmiennej kategorycznej. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"quantitative")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": szereg ci\u0105g\xf3w znak\xf3w wskazuj\u0105cych nazw\u0119 ka\u017cdej zmiennej ilo\u015bciowej. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"data")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": obiekt lub tablic\u0119 danych, kt\xf3re maj\u0105 by\u0107 przegl\u0105dane. Je\u015bli jest to obiekt, to klucze odpowiadaj\u0105 warto\u015bciom kolumn, podczas gdy tablica b\u0119dzie oczekiwa\u0142a tablicy obiekt\xf3w z nazwanym polem odpowiadaj\u0105cym ka\u017cdej kolumnie. Je\u015bli chcesz zezwoli\u0107 studentom na import pliku ",Object(r.b)("inlineCode",{parentName:"li"},".csv"),", ustaw opcj\u0119 ",Object(r.b)("inlineCode",{parentName:"li"},"data")," na ",Object(r.b)("inlineCode",{parentName:"li"},"fa\u0142szywy'.. Default: "),"{}`."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"dataInfo")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),': obiekt zawieraj\u0105cy klucze \\"name\\", kt\xf3rego warto\u015bci\u0105 jest \u0142a\u0144cuch, \\"info\\", kt\xf3rego warto\u015bci\u0105 jest tablica \u0142a\u0144cuch\xf3w, w kt\xf3rej ka\u017cdy element tablicy jest nowym wierszem oraz \\"variables\\", obiekt z kluczami jako nazwami zmiennych i warto\u015bciami jako opisami zmiennych. Default: ',Object(r.b)("inlineCode",{parentName:"li"},"{\n  'info': '',\n  'name': '',\n  'variables': null,\n  'showOnStartup': false\n}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"editor")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": boolean wskazuj\u0105cy, czy edytor ma by\u0107 pokazywany u\u017cytkownikowi. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"editorProps")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": obiekt w\u0142a\u015bciwo\u015bci, kt\xf3re maj\u0105 zosta\u0107 przekazane do ",Object(r.b)("inlineCode",{parentName:"li"},"TextEditor")," (patrz dokumentacja do ",Object(r.b)(p,{mdxType:"TextEditor"}),"). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"editorTitle")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": ci\u0105g znak\xf3w wskazuj\u0105cy tytu\u0142 badacza, kt\xf3ry ma zosta\u0107 wy\u015bwietlony. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"dataTable")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": warto\u015b\u0107 boolean wskazuj\u0105ca, czy nale\u017cy ukry\u0107 tabel\u0119 danych z widoku. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"dataTableProps")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": w\u0142a\u015bciwo\u015bci przekazane do komponentu tabeli danych (patrz dokumentacja dla ",Object(r.b)(s,{mdxType:"DataTable"}),"). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"history")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy ma by\u0107 wy\u015bwietlany dziennik historii przeprowadzonych dzia\u0142a\u0144. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"reportMode")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": kontroluje czy synchronizowa\u0107 zmiany w edytorze dla wszystkich (",Object(r.b)("inlineCode",{parentName:"li"},"wsp\xf3\u0142pracuj\u0105cych"),"), dla wszystkich u\u017cytkownik\xf3w w grupach (",Object(r.b)("inlineCode",{parentName:"li"},"grupach"),"), czy te\u017c nie (",Object(r.b)("inlineCode",{parentName:"li"},"indywidualnie"),"). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'individual'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"histogramDensities")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": warto\u015b\u0107 boolean wskazuj\u0105ca, czy maj\u0105 by\u0107 wy\u015bwietlane g\u0119sto\u015bci histogram\xf3w. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"models")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": szereg \u0142a\u0144cuch\xf3w wskazuj\u0105cych modele, kt\xf3re mog\u0105 zmie\u015bci\u0107 si\u0119 na danych. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[\n  'Simple Linear Regression',\n  'Multiple Linear Regression',\n  'LASSO',\n  'Decision Tree',\n  'Random Forest',\n  'Logistic Regression',\n  'Naive Bayes',\n  'PCA',\n  'Hierarchical Clustering',\n  'kmeans'\n]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"opened")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": strona otwierana przy uruchamianiu. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"plots")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": tablica \u0142a\u0144cuch\xf3w wskazuj\u0105ca, kt\xf3re w\u0105tki maj\u0105 by\u0107 pokazane u\u017cytkownikowi. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[\n  'Bar Chart',\n  'Pie Chart',\n  'Mosaic Plot',\n  'Histogram',\n  'Box Plot',\n  'Line Plot',\n  'Scatterplot',\n  'Scatterplot Matrix',\n  'Heat Map',\n  'Contour Chart',\n  'Violin Plot',\n  'QQ Plot'\n]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"questions")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": tablica w\u0119z\u0142\xf3w wskazuj\u0105cych otaczaj\u0105cy tekst i komponenty pyta\u0144, kt\xf3re maj\u0105 by\u0107 wy\u015bwietlane w oknie zak\u0142adkowym. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"showTestDecisions")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": boolean wskazuj\u0105cy, czy nale\u017cy wykaza\u0107 decyzje podj\u0119te dla ka\u017cdego badania w oparciu o obliczone warto\u015bci p. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"statistics")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": szereg \u0142a\u0144cuch\xf3w wskazuj\u0105cych, kt\xf3re z podsumowa\u0144 statystycznych mog\u0105 by\u0107 obliczane. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[\n  'Mean',\n  'Median',\n  'Min',\n  'Max',\n  'Range',\n  'Interquartile Range',\n  'Standard Deviation',\n  'Variance',\n  'Correlation',\n  'Correlation Matrix',\n  'Skewness',\n  'Excess Kurtosis',\n  'First Quartile',\n  'Third Quartile',\n  'Quantile',\n  'Five-Number Summary'\n]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"style")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": Style inline CSS dla kontenera g\u0142\xf3wnego. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"tables")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": tablica \u0142a\u0144cuch\xf3w wskazuj\u0105ca, kt\xf3re tabele mog\u0105 by\u0107 tworzone z danych. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[\n  'Frequency Table',\n  'Contingency Table'\n]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"tabs")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": tablica obiekt\xf3w i klawiszy wskazuj\u0105ca dowolne niestandardowe zak\u0142adki do dodania. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"tests")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": szereg sznurk\xf3w wskazuj\u0105cych, kt\xf3re hipoteza ma obj\u0105\u0107. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[\n  'One-Sample Mean Test',\n  'Two-Sample Mean Test',\n  'One-Way ANOVA',\n  'One-Sample Proportion Test',\n  'Two-Sample Proportion Test',\n  'Correlation Test',\n  'Chi-squared Independence Test',\n  'Kruskal-Wallis Test'\n]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"transformer")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": boolean wskazuj\u0105cy, czy maj\u0105 by\u0107 wy\u015bwietlane narz\u0119dzia do zmiennej transformacji. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onTutorialCompletion")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": funkcja wywo\u0142ywana po uko\u0144czeniu przez u\u017cytkownika tutorialu eksploratora danych. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onTutorialCompletion() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onTutorialStart")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": funkcja wywo\u0142ywana podczas uruchamiania przez u\u017cytkownika samouczka eksploratora danych. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onTutorialStart() {}"),".")),Object(r.b)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),Object(r.b)("p",null,"In creating a data explorer, one needs a ",Object(r.b)("em",{parentName:"p"},".json dataset. This step may be accomplished by including the following in the header of a "),".isle file:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'require:\n    dataName: "./dataName.json"\n')),Object(r.b)("p",null,'Consider a dataset called "heartdisease" with the following variables:'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Gender"),": ",Object(r.b)("em",{parentName:"li"},"Categorical")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Drugs"),": ",Object(r.b)("em",{parentName:"li"},"Categorical")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Complications"),": ",Object(r.b)("em",{parentName:"li"},"Categorical")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Cost"),": ",Object(r.b)("em",{parentName:"li"},"Quantitative")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Age"),": ",Object(r.b)("em",{parentName:"li"},"Quantitative")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Interventions"),": ",Object(r.b)("em",{parentName:"li"},"Quantitative")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"ERVisit"),": ",Object(r.b)("em",{parentName:"li"},"Quantitative")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Comorbidities"),": ",Object(r.b)("em",{parentName:"li"},"Quantitative")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Duration"),": ",Object(r.b)("em",{parentName:"li"},"Quantitative"))),Object(r.b)("p",null,"We will include the explorer with the following code:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<DataExplorer \n    id=\"heartdisease\"\n    data={heartdisease} \n    categorical={[ 'Gender', 'Drugs', 'Complications' ]}\n    quantitative={[ 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}\n    tests={[]}\n/>\n")))}u.isMDXComponent=!0},410:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return d}));var n=t(0),i=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var b=i.a.createContext({}),p=function(e){var a=i.a.useContext(b),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=p(e.components);return i.a.createElement(b.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},u=i.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(t),u=n,d=s["".concat(o,".").concat(u)]||s[u]||m[u]||r;return t?i.a.createElement(d,l(l({ref:a},b),{},{components:t})):i.a.createElement(d,l({ref:a},b))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var b=2;b<r;b++)o[b]=t[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);