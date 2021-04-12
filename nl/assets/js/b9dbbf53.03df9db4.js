(window.webpackJsonp=window.webpackJsonp||[]).push([[1221],{247:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),i=(t(0),t(410)),l={id:"sketchpad",title:"Sketchpad",sidebar_label:"Sketchpad"},o={unversionedId:"sketchpad",id:"sketchpad",isDocsHomePage:!1,title:"Sketchpad",description:"Een schetsblok voor het maken van aantekeningen op collegeplaten of lege pagina's.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/sketchpad.md",slug:"/sketchpad",permalink:"/nl/docs/sketchpad",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/sketchpad.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1616648808,formattedLastUpdatedAt:"25-3-2021",sidebar_label:"Sketchpad",sidebar:"docs",previous:{title:"Text Editor",permalink:"/nl/docs/text-editor"},next:{title:"Lesson Submit",permalink:"/nl/docs/lesson-submit"}},b=[{value:"Opties",id:"opties",children:[]},{value:"Voorbeelden",id:"voorbeelden",children:[]}],c={toc:b};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Een schetsblok voor het maken van aantekeningen op collegeplaten of lege pagina's."),Object(i.b)("h2",{id:"opties"},"Opties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"autoSave")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of de redacteur de huidige tekst in een bepaald tijdsinterval moet opslaan in de lokale opslag van de browser. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"feedbackButtons")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of er op elke dia een feedbackknop moet worden weergegeven. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"intervalTime")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": tijd tussen de automatische besparingen. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"10000"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"hideInputButtons")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of de teken- en tekstinvoertoetsen moeten worden verborgen. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"hideNavigationButtons")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of de knoppen voor het navigeren tussen de pagina's moeten worden verborgen. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"hideSaveButtons")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of de knoppen voor het opslaan van de gegevens moeten worden verborgen. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"hideTransmitButtons")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of de knoppen voor het verzenden van gebruikersacties moeten worden verborgen. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"brushSize")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": grootte van het penseel om te schilderen met. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"4"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"color")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": kleur van het penseel en de teksten. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'#444444'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"canvasWidth")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": breedte van het doekelement (in px). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"1200"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"canvasHeight")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": hoogte van het doekelement (in px). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"700"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"fullscreen")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": regelt of het canvas automatisch wordt aangepast aan de breedte en hoogte van het browservenster. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"fill")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": als ",Object(i.b)("inlineCode",{parentName:"li"},"horizontaal"),", vul alle beschikbare horizontale ruimte op bij het tekenen van een PDF; als ",Object(i.b)("inlineCode",{parentName:"li"},"verticaal"),", wordt alle verticale ruimte gebruikt om y-asoverloop te voorkomen. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'vertical'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"disabled")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": het onderdeel alleen-lezen en het tekenen op het schetsblok verbieden. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"fontFamily")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": lettertypefamilie. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'Arial'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"fontSize")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": lettertypegrootte. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"24"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"nodes")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": componenten die moeten worden weergegeven op de top van de opgegeven dia's; ",Object(i.b)("inlineCode",{parentName:"li"},"sleutels")," moeten overeenkomen met de paginanummers, ",Object(i.b)("inlineCode",{parentName:"li"},"waarden")," met de componenten. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"noPages")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": eerste aantal pagina's. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"pdf")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": link naar PDF-bestand voor ingebakken pagina's. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"showTutorial")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": handleiding voor het schetsblok tonen bij het opstarten. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"dynamicallyHideButtons")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of de knoppen moeten worden verborgen als de breedte van de werkbalk niet voldoende is (anders wordt er een nieuwe regel gestart).. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"transmitOwner")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": de vraag of de acties van de eigenaar in real time naar andere gebruikers moeten worden doorgestuurd. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"groupMode")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controleert of alle handelingen van de gebruiker aan iedereen worden doorgegeven. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"voiceID")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": stembesturingsidentificatie. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": CSS inline-stijlen. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onChange")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": callback aangeroepen wanneer een nieuw lijnelement wordt getekend. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onChange() {}"),".")),Object(i.b)("h2",{id:"voorbeelden"},"Voorbeelden"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Sketchpad canvasWidth={750} />\n")))}p.isMDXComponent=!0},410:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,u=d["".concat(l,".").concat(m)]||d[m]||s[m]||i;return t?r.a.createElement(u,o(o({ref:n},c),{},{components:t})):r.a.createElement(u,o({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var b in n)hasOwnProperty.call(n,b)&&(o[b]=n[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);