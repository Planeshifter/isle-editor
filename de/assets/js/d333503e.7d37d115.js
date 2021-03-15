(window.webpackJsonp=window.webpackJsonp||[]).push([[1265],{287:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return c}));var r=t(3),i=t(7),a=(t(0),t(410)),o={id:"proportions-survey",title:"Proportions Survey",sidebar_label:"Proportions Survey"},l={unversionedId:"proportions-survey",id:"proportions-survey",isDocsHomePage:!1,title:"Proportions Survey",description:"Komponente, die es einer Gruppe von Personen erm\xf6glicht, \xfcber die Gewichtung und Wichtigkeit von gegebenen Optionen abzustimmen.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/proportions-survey.md",slug:"/proportions-survey",permalink:"/de/docs/proportions-survey",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/proportions-survey.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21.2.2021",sidebar_label:"Proportions Survey",sidebar:"docs",previous:{title:"Number Survey",permalink:"/de/docs/number-survey"},next:{title:"R Help",permalink:"/de/docs/r/r-help"}},b=[{value:"Optionen",id:"optionen",children:[]},{value:"Beispiele",id:"beispiele",children:[]}],p={toc:b};function c(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Komponente, die es einer Gruppe von Personen erm\xf6glicht, \xfcber die Gewichtung und Wichtigkeit von gegebenen Optionen abzustimmen."),Object(a.b)("h2",{id:"optionen"},"Optionen"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob man den Teilnehmern erlauben m\xf6chte, die Umfrage mehrfach zu beantworten. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"anonymous")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob Sch\xfclerantworten anonymisiert werden. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"colors")," | ",Object(a.b)("inlineCode",{parentName:"li"},"array"),": Array mit Farben f\xfcr die Kreisdiagrammkomponenten. Wenn nicht definiert, wird eine benutzerdefinierte Farbskala verwendet. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"disabled")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob die Umfrage deaktiviert wird. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"group")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": Gruppenanzeige \xdcberschrift. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'group results'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"groupHeight")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": Proportionen Eingangsh\xf6he f\xfcr Gruppendarstellung (in px). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"100"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"legends")," | ",Object(a.b)("inlineCode",{parentName:"li"},"array"),": Legendenbeschriftungen, die die zu w\xe4genden Optionen beschreiben. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"margin")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": Anteil Eingaberand (in px). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'40px'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": Callback-Funktion, die aufgerufen wird, sobald der Sch\xfcler eine Antwort abgeschickt hat. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"personalHeight")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": Proportionen Eingangsh\xf6he f\xfcr einzelnen Sch\xfcler (in px). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"200"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"precision")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": Angezeigte Pr\xe4zision der Anteilswerte. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"2"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"question")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(string|node)"),": die Frage, die angezeigt werden soll. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"''"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"step")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": die Stufe der Pfeile, die zu sehen sind, wenn der Cursor \xfcber dem Eingabefeld schwebt. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"0.25"),".")),Object(a.b)("h2",{id:"beispiele"},"Beispiele"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ProportionsSurvey \n    id="Survey"\n    question="Decide what is important"\n    group="Group decision"\n    nElements={3}\n    colors = {[ "red", "blue", "gold" ]}\n    personalHeight={300}\n    groupHeight={200}\n    margin="80px"\n    legends={[ "bitcoin", "old", "diamonds" ]}\n/>\n')))}c.isMDXComponent=!0},410:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),c=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,m=u["".concat(o,".").concat(d)]||u[d]||s[d]||a;return t?i.a.createElement(m,l(l({ref:n},p),{},{components:t})):i.a.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var b in n)hasOwnProperty.call(n,b)&&(l[b]=n[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);