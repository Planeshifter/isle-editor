(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{182:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return r})),n.d(a,"metadata",(function(){return o})),n.d(a,"toc",(function(){return c})),n.d(a,"default",(function(){return u}));var t=n(3),i=n(7),l=(n(0),n(410)),r={id:"data-table",title:"Data Table",sidebar_label:"Data Table"},o={unversionedId:"data-table",id:"data-table",isDocsHomePage:!1,title:"Data Table",description:"Komponent renderuj\u0105cy dane w formie tabelarycznej. Wbudowany na g\xf3rze [tabela reaktywna] (https://react-table.js.org/).",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/data-table.md",slug:"/data-table",permalink:"/pl/docs/data-table",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/data-table.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614613459,formattedLastUpdatedAt:"1.03.2021",sidebar_label:"Data Table",sidebar:"docs",previous:{title:"Data Explorer",permalink:"/pl/docs/data-explorer"},next:{title:"Feedback Buttons",permalink:"/pl/docs/feedback"}},c=[{value:"Opcje",id:"opcje",children:[]},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[]}],b={toc:c};function u(e){var a=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(t.a)({},b,n,{components:a,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Komponent renderuj\u0105cy dane w formie tabelarycznej. Wbudowany na g\xf3rze ","[tabela reaktywna]"," (",Object(l.b)("a",{parentName:"p",href:"https://react-table.js.org/"},"https://react-table.js.org/"),")."),Object(l.b)("h2",{id:"opcje"},"Opcje"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"data")," | ",Object(l.b)("inlineCode",{parentName:"li"},"(array|object) (required)"),": Obiekt lub tablica danych, kt\xf3re maj\u0105 by\u0107 przegl\u0105dane. Je\u015bli jest to obiekt, to klucze odpowiadaj\u0105 warto\u015bciom kolumn, podczas gdy tablica b\u0119dzie oczekiwa\u0142a tablicy obiekt\xf3w z nazwanym polem odpowiadaj\u0105cym ka\u017cdej kolumnie. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"dataInfo")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": obiekt z tablic\u0105 \u0142a\u0144cuch\xf3w ",Object(l.b)("inlineCode",{parentName:"li"},"info")," opisuj\u0105c\u0105 zbi\xf3r danych, ",Object(l.b)("inlineCode",{parentName:"li"},"nazw\u0105")," zbioru danych, ",Object(l.b)("inlineCode",{parentName:"li"},"obiektem")," ze zmiennymi",Object(l.b)("inlineCode",{parentName:"li"},"z klawiszami odpowiadaj\u0105cymi nazwom i warto\u015bciom zmiennych do opis\xf3w zmiennych,"),"wy\u015bwietlaniemOnStartup",Object(l.b)("inlineCode",{parentName:"li"},"boolean kontroluj\u0105cym, czy przy uruchamianiu wy\u015bwietli\u0107 modal informacyjny. Default:"),"{\n'info': [],\n'name': '',\n'variables': null,\n'showOnStartup': false\n}`."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"deletable")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy kolumny, dla kt\xf3rych nie istniej\u0105 ",Object(l.b)("inlineCode",{parentName:"li"},"info")," posiadaj\u0105 przycisk, kt\xf3ry po klikni\u0119ciu wywo\u0142uje funkcj\u0119 ",Object(l.b)("inlineCode",{parentName:"li"},"onColumnDelete")," callback. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"undeletableVars")," | ",Object(l.b)("inlineCode",{parentName:"li"},"array<string>"),": tablica nazw zmiennych w kolumnach, kt\xf3re nie mog\u0105 zosta\u0107 usuni\u0119te. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"filterable")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy kolumny s\u0105 filtrowalne. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"true"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"editable")," | ",Object(l.b)("inlineCode",{parentName:"li"},"array"),": szereg nazw dla kolumn, kt\xf3re maj\u0105 by\u0107 edytowalne. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"getTrProps")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": Funkcja wywo\u0142ania zwrotnego wykonana dla ka\u017cdego wiersza w celu dostosowania jego stylizacji (stan tabeli, informacje o wierszu,\nkolumna, oraz instancja tabelaryczna). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onColumnDrag")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": funkcja wywo\u0142ywana po przeci\u0105gni\u0119ciu kolumny do innej pozycji. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onColumnDrag() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onColumnDelete")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": funkcja wywo\u0142ywana z nazw\u0105 kolumny po klikni\u0119ciu odpowiedniego przycisku usuwania dla danej kolumny. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onColumnDelete() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onColumnNameChange")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": funkcja wywo\u0142ywana po zmianie nazwy kolumny (wywo\u0142ywana ze star\u0105 nazw\u0105 jako pierwsz\u0105 i now\u0105 jako drugim argumentem). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onColumnNameChange() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onClickRemove")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": funkcja okre\u015blaj\u0105ca akcj\u0119, kt\xf3r\u0105 nale\u017cy wykona\u0107 dla wierszy usuni\u0119tych z danych (domy\u015blnie funkcja pusta). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onClickRemove() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onEdit")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": funkcja wywo\u0142ywana z aktualnym zestawem danych po zmianie warto\u015bci kom\xf3rki przez u\u017cytkownika (dotyczy tylko sytuacji, gdy tabela jest ",Object(l.b)("inlineCode",{parentName:"li"},"edytowalna"),"). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onEdit() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onTutorialCompletion")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": funkcja wywo\u0142ywana po wype\u0142nieniu przez u\u017cytkownika tutorialu tabeli danych. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onTutorialCompletion() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"filters")," | ",Object(l.b)("inlineCode",{parentName:"li"},"array"),": tablica filtr\xf3w. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onFilteredChange")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": funkcja wywo\u0142ywana przy pomocy aktualnych filtr\xf3w po przefiltrowaniu danych przez u\u017cytkownika. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onFilteredChange() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"showRemove")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": wskazuje, czy maj\u0105 by\u0107 wy\u015bwietlane pola wyboru dla wierszy, kt\xf3re maj\u0105 by\u0107 usuni\u0119te. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"showIdColumn")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy pokazywana jest kolumna ID. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"true"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"disableDownload")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": czy ukry\u0107 przycisk do pobrania danych jako plik CSV lub JSON. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"className")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": nazwa klasy. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"style")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": Obiekt pozwalaj\u0105cy na niestandardow\u0105 stylizacj\u0119 css. Domy\u015blna warto\u015b\u0107 dla pustego obiektu. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(l.b)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<DataTable\n    showRemove\n    onClickRemove={( data ) => { console.log(data); }}\n    data={{ \n        firstName: [ 'Hans', 'Lotti', 'Fritz' ], \n        lastName: [ 'Bauer', 'M\xfcller', 'Schultz' ],\n        age: [ 37, 55, 62 ]\n    }}\n    style={{ width: 600 }}\n/>\n")))}u.isMDXComponent=!0},410:function(e,a,n){"use strict";n.d(a,"a",(function(){return p})),n.d(a,"b",(function(){return j}));var t=n(0),i=n.n(t);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),u=function(e){var a=i.a.useContext(b),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},p=function(e){var a=u(e.components);return i.a.createElement(b.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},d=i.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,l=e.originalType,r=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=t,j=p["".concat(r,".").concat(d)]||p[d]||m[d]||l;return n?i.a.createElement(j,o(o({ref:a},b),{},{components:n})):i.a.createElement(j,o({ref:a},b))}));function j(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"==typeof e?e:t,r[1]=o;for(var b=2;b<l;b++)r[b]=n[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);