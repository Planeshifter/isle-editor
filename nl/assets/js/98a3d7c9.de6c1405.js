(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{217:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return d}));var r=t(3),a=t(7),l=(t(0),t(410)),i={id:"r-shell",title:"R Shell",sidebar_label:"R Shell"},o={unversionedId:"r/r-shell",id:"r/r-shell",isDocsHomePage:!1,title:"R Shell",description:"Een interactieve R-Shell die gebruikt kan worden om R-commando's in de cloud uit te voeren met behulp van OpenCPU.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/r/shell.md",slug:"/r/r-shell",permalink:"/nl/docs/r/r-shell",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/r/shell.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"R Shell",sidebar:"docs",previous:{title:"R Plot",permalink:"/nl/docs/r/r-plot"},next:{title:"R Table",permalink:"/nl/docs/r/r-table"}},b=[{value:"Opties",id:"opties",children:[]},{value:"Voorbeelden",id:"voorbeelden",children:[]}],c={toc:b};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Een interactieve R-Shell die gebruikt kan worden om R-commando's in de cloud uit te voeren met behulp van ",Object(l.b)("a",{parentName:"p",href:"https://www.opencpu.org/"},"OpenCPU"),"."),Object(l.b)("h2",{id:"opties"},"Opties"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"code")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": Te evalueren R-code. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"solution")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": voor programmeervragen, R-code ",Object(l.b)("inlineCode",{parentName:"li"},"string")," die de offici\xeble oplossing voor het probleem vertegenwoordigt.. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"hints")," | ",Object(l.b)("inlineCode",{parentName:"li"},"array<(string|node)>"),": voor programmeervragen, een reeks hints die een leidraad bieden voor de aanpak van het probleem. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"addPreceding")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": indien ingesteld op true, zal de commandoregel alle code van de huidige component en alle vorige die in de les voorkomen, evalueren.. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"libraries")," | ",Object(l.b)("inlineCode",{parentName:"li"},"array"),": R-bibliotheken die automatisch moeten worden geladen wanneer de invoer ",Object(l.b)("inlineCode",{parentName:"li"},"code")," wordt uitgevoerd. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"precompute")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controleert of de standaardcode moet worden uitgevoerd zodra het component is gemonteerd. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"prependCode")," | ",Object(l.b)("inlineCode",{parentName:"li"},"(string|array)"),": R-code ",Object(l.b)("inlineCode",{parentName:"li"},"string")," (of ",Object(l.b)("inlineCode",{parentName:"li"},"array")," van R-codeblokken) die bij de evaluatie moet worden voorgeprogrammeerd op de code die is opgeslagen in ",Object(l.b)("inlineCode",{parentName:"li"},"code"),".. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"chat")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of de groeps-chatfunctie moet worden ingeschakeld. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"disabled")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of alle gebruikersinvoer moet worden uitgeschakeld en of de code moet worden geblokkeerd.. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lines")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": aantal weer te geven regels. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"5"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"resettable")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": regelt of er een resetknop moet worden weergegeven voor het herstellen van de standaardcode-invoer. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"style")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": CSS inline-stijlen. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onChange")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": terugbellen wordt aangeroepen wanneer de invoer van het tekstveld verandert. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onEvaluate")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": terugbellen wordt aangeroepen wanneer op de ",Object(l.b)("inlineCode",{parentName:"li"},"Evaluate"),"-knop wordt geklikt. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onEvaluate(){}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onResult")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": callback aangeroepen wanneer het resultaat van een code-uitvoering uit de cloud wordt verkregen. Het resultaat ",Object(l.b)("inlineCode",{parentName:"li"},"string")," wordt als enige argument doorgegeven aan de callback-functie. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onResult() {}"),".")),Object(l.b)("h2",{id:"voorbeelden"},"Voorbeelden"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<RShell\n    code="abs(c(-2,3,-1))"\n/>\n')))}d.isMDXComponent=!0},410:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return s}));var r=t(0),a=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),d=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,s=p["".concat(i,".").concat(m)]||p[m]||u[m]||l;return t?a.a.createElement(s,o(o({ref:n},c),{},{components:t})):a.a.createElement(s,o({ref:n},c))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var b in n)hasOwnProperty.call(n,b)&&(o[b]=n[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);