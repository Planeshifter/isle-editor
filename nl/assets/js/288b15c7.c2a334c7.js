(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{145:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return c}));var r=t(3),i=t(7),a=(t(0),t(406)),o={id:"proportions-survey",title:"Proportions Survey",sidebar_label:"Proportions Survey"},l={unversionedId:"proportions-survey",id:"proportions-survey",isDocsHomePage:!1,title:"Proportions Survey",description:"Onderdeel dat een groep mensen in staat stelt om te stemmen over de gewichten en het belang van bepaalde opties.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/proportions-survey.md",slug:"/proportions-survey",permalink:"/nl/docs/proportions-survey",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/proportions-survey.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612739298,sidebar_label:"Proportions Survey",sidebar:"docs",previous:{title:"Number Survey",permalink:"/nl/docs/number-survey"},next:{title:"R Help",permalink:"/nl/docs/r/r-help"}},p=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:p};function c(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Onderdeel dat een groep mensen in staat stelt om te stemmen over de gewichten en het belang van bepaalde opties."),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": controleert of men de studenten wil toestaan de enqu\xeate meerdere malen te beantwoorden. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"anonymous")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": controleert of de antwoorden van de studenten geanonimiseerd zijn. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"colors")," | ",Object(a.b)("inlineCode",{parentName:"li"},"array"),": reeks van kleuren voor de taartdiagrammen. Indien niet gedefinieerd, zal een aangepaste kleurenschaal worden gebruikt. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"disabled")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": controleert of het onderzoek is gedeactiveerd. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"group")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": groepsweergavekop. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'group results'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"groupHeight")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": verhoudingen invoerhoogte voor groepsdisplay (in px). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"100"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"legends")," | ",Object(a.b)("inlineCode",{parentName:"li"},"array"),": legenda-etiketten die de te wegen opties beschrijven. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"margin")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": proportionele inputmarge (in px). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'40px'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": terugbelfunctie ingeroepen zodra de leerlingen een antwoord indienen. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"personalHeight")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": verhoudingen invoerhoogte voor individuele student (in px). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"200"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"precision")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": weergegeven nauwkeurigheid van de verhoudingen. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"2"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"question")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(string|node)"),": de te tonen vraag. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"''"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"step")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": de stap van de pijlen gezien bij het zweven met de cursor boven het invoerveld. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"0.25"),".")),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ProportionsSurvey \n    id="Survey"\n    question="Decide what is important"\n    group="Group decision"\n    nElements={3}\n    colors = {[ "red", "blue", "gold" ]}\n    personalHeight={300}\n    groupHeight={200}\n    margin="80px"\n    legends={[ "bitcoin", "old", "diamonds" ]}\n/>\n')))}c.isMDXComponent=!0},406:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var b=i.a.createContext({}),c=function(e){var n=i.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return i.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=c(t),d=r,m=s["".concat(o,".").concat(d)]||s[d]||u[d]||a;return t?i.a.createElement(m,l(l({ref:n},b),{},{components:t})):i.a.createElement(m,l({ref:n},b))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<a;b++)o[b]=t[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);