(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{131:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return b}));var r=t(3),i=t(7),a=(t(0),t(410)),o={id:"number-survey",title:"Number Survey",sidebar_label:"Number Survey"},l={unversionedId:"number-survey",id:"number-survey",isDocsHomePage:!1,title:"Number Survey",description:"Een enqu\xeateonderdeel waarbij de docent in real-time numerieke enqu\xeategegevens van studenten kan verzamelen.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/number-survey.md",slug:"/number-survey",permalink:"/nl/docs/number-survey",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/number-survey.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21-2-2021",sidebar_label:"Number Survey",sidebar:"docs",previous:{title:"Multiple Choice Survey",permalink:"/nl/docs/multiple-choice-survey"},next:{title:"Proportions Survey",permalink:"/nl/docs/proportions-survey"}},u=[{value:"Opties",id:"opties",children:[]},{value:"Voorbeelden",id:"voorbeelden",children:[]}],c={toc:u};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Een enqu\xeateonderdeel waarbij de docent in real-time numerieke enqu\xeategegevens van studenten kan verzamelen."),Object(a.b)("h2",{id:"opties"},"Opties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"question")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(string|node)"),": de te tonen vraag. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"''"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of dezelfde gebruiker (of sessie indien anoniem) meerdere antwoorden mag indienen). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"anonymous")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),': Maakt het mogelijk voor de studenten om anoniem gegevens in te dienen. Merk op dat als deze optie is ingesteld op "true", dan zullen de instructeurs niet in staat zijn om de ID van de inzendende student te zien.. Default: ',Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"step")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(number|string)"),": Een ",Object(a.b)("inlineCode",{parentName:"li"},"string")," of ",Object(a.b)("inlineCode",{parentName:"li"},"numerieke")," waarde die de stap van de pijlen aangeeft die gezien worden wanneer de cursor boven het invoerveld zweeft. Als ",Object(a.b)("inlineCode",{parentName:"li"},"'any'"),", zal de stap worden ingesteld op ",Object(a.b)("inlineCode",{parentName:"li"},"1"),".. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'any'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"style")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object"),": CSS inline-stijlen. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": terugbelfunctie ingeroepen zodra de leerlingen een antwoord indienen. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),Object(a.b)("h2",{id:"voorbeelden"},"Voorbeelden"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<NumberSurvey\n    allowMultipleAnswers={true}\n    anonymous="false"\n    id="generic_mean_question"\n    question="Submit a number"\n    defaultValue={0}\n    step="any"\n/>\n')))}b.isMDXComponent=!0},410:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),b=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=b(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=b(t),p=r,m=s["".concat(o,".").concat(p)]||s[p]||d[p]||a;return t?i.a.createElement(m,l(l({ref:n},c),{},{components:t})):i.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);