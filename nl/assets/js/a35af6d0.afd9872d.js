(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{232:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),i=(t(0),t(406)),o={id:"checkbox-input",title:"Checkbox Input",sidebar_label:"Checkbox Input"},l={unversionedId:"input/checkbox-input",id:"input/checkbox-input",isDocsHomePage:!1,title:"Checkbox Input",description:"Een checkbox-invoercomponent. Kan worden gebruikt als onderdeel van een ISLE-dashboard of stand-alone. In het laatste geval wilt u veranderingen afhandelen via het on-Change attribuut of de waarde binden aan een globale variabele via het bind attribuut.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/input/checkbox.md",slug:"/input/checkbox-input",permalink:"/nl/docs/input/checkbox-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/checkbox.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612739298,sidebar_label:"Checkbox Input",sidebar:"docs",previous:{title:"Wikipedia",permalink:"/nl/docs/wikipedia"},next:{title:"Number Input",permalink:"/nl/docs/input/number-input"}},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Een checkbox-invoercomponent. Kan worden gebruikt als onderdeel van een ISLE-dashboard of stand-alone. In het laatste geval wilt u veranderingen afhandelen via het ",Object(i.b)("inlineCode",{parentName:"p"},"on-Change")," attribuut of de waarde binden aan een globale variabele via het ",Object(i.b)("inlineCode",{parentName:"p"},"bind")," attribuut."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"bind")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": naam van de globale variabele voor de waarde van het selectievakje dat moet worden toegewezen aan. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"defaultValue")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": booleaanse waarde die de standaardwaarde van het selectievakje aangeeft. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"value")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": waarde van het selectievakje (voor de gecontroleerde component). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"disabled")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": geeft aan of de ingang actief is of niet. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"inline")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": geeft aan of het selectievakje inline wordt weergegeven. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onChange")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": terugbelfunctie die moet worden aangeroepen wanneer het selectievakje wordt aangeklikt. De functie wordt aangeroepen met de huidige waarde van het selectievakje. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"legend")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|node)"),": tekst die naast het selectievakje wordt weergegeven. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"tooltip")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": tekst die wordt weergegeven wanneer het selectievakje wordt aangekruist. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"tooltipPlacement")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": positie van de knop tooltip. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'right'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": CSS inline-stijlen. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<CheckboxInput\n    legend="Take the logarithm"\n    defaultValue={false}\n/>\n')))}p.isMDXComponent=!0},406:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),p=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(t),s=a,m=u["".concat(o,".").concat(s)]||u[s]||d[s]||i;return t?r.a.createElement(m,l(l({ref:n},b),{},{components:t})):r.a.createElement(m,l({ref:n},b))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=t[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);