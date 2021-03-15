(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{226:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(3),o=t(7),i=(t(0),t(410)),r=t(446),l=t(447),s={id:"quiz",title:"Quiz",sidebar_label:"Quiz"},u={unversionedId:"questions/quiz",id:"questions/quiz",isDocsHomePage:!1,title:"Quiz",description:"Een quizcomponent met een opeenvolging van vraagcomponenten.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/questions/quiz.md",slug:"/questions/quiz",permalink:"/nl/docs/questions/quiz",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/quiz.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614117474,formattedLastUpdatedAt:"23-2-2021",sidebar_label:"Quiz",sidebar:"docs",previous:{title:"Question Form",permalink:"/nl/docs/questions/question-form"},next:{title:"Range Question",permalink:"/nl/docs/questions/range-question"}},c=[{value:"Opties",id:"opties",children:[]},{value:"Voorbeelden",id:"voorbeelden",children:[]}],b={toc:c};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Een quizcomponent met een opeenvolging van vraagcomponenten."),Object(i.b)("h2",{id:"opties"},"Opties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"confidence")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": of er een Likert-weegschaal moet worden getoond die het vertrouwen van de gebruiker vraagt. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"forceConfidence")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controleert of een gebruiker een vertrouwensniveau moet bieden voordat hij naar de volgende vraag overgaat.. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"count")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": aantal vragen om in de quiz op te nemen. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"questions")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array (required)"),": reeks vragen waaruit willekeurig gekozen zal worden. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"active")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of de timer voor de quiz actief is.. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"duration")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": duur van de quiz (in minuten); als de tijd voorbij is, wordt de overzichtspagina weergegeven.. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"skippable")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controleert of vragen in de quiz overgeslagen kunnen worden. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"footerNodes")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array"),": array van knooppunten die in de voettekst van elke vraag moeten worden weergegeven. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"nextLabel")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": label van de knop om door te gaan naar de volgende vraag. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"provideFeedback")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controleert of de leerlingen na afloop van de quiz feedback krijgen over de juistheid van hun antwoorden.. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"showFinishButton")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of de knop moet worden weergegeven om de quiz af te sluiten en direct naar de resultatenpagina te springen.. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"finishLabel")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": label van knop om de quiz af te ronden. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"downloadButton")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of er een knop moet worden weergegeven voor het downloaden van de antwoorden. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onFinished")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": terugbellen wordt aangeroepen als de quiz klaar is en de resultatenpagina wordt weergegeven. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onFinished() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": terugbellen wordt aangeroepen wanneer de gebruiker een antwoord indient. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),Object(i.b)("h2",{id:"voorbeelden"},"Voorbeelden"),Object(i.b)(r.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Subset of Questions",value:"subset"},{label:"Not Skippable",value:"notSkippable"},{label:"Confidence Check",value:"confidenceCheck"},,],lazy:!0,mdxType:"Tabs"},Object(i.b)(l.a,{value:"minimal",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Quiz\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />\n    ]}\n/>\n'))),Object(i.b)(l.a,{value:"subset",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Quiz\n    count={3}\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Portugal?" \n            rows={1} \n            solution="Lisbon" \n        />,     \n        <FreeTextQuestion \n            question="What is the capital of Egypt?" \n            rows={1} \n            solution="Cairo" \n        />\n    ]}\n/>\n'))),Object(i.b)(l.a,{value:"notSkippable",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Quiz\n    skippable={false}\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Portugal?" \n            rows={1} \n            solution="Lisbon" \n        />,     \n        <FreeTextQuestion \n            question="What is the capital of Egypt?" \n            rows={1} \n            solution="Cairo" \n        />\n    ]}\n/>\n'))),Object(i.b)(l.a,{value:"confidenceCheck",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Quiz\n    confidence\n    forceConfidence\n    count={4}\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Portugal?" \n            rows={1} \n            solution="Lisbon" \n        />,     \n        <FreeTextQuestion \n            question="What is the capital of Egypt?" \n            rows={1} \n            solution="Cairo" \n        />\n    ]}\n/>\n')))))}p.isMDXComponent=!0},410:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),o=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),c=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=c(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=c(t),d=a,m=b["".concat(r,".").concat(d)]||b[d]||p[d]||i;return t?o.a.createElement(m,l(l({ref:n},u),{},{components:t})):o.a.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=t[u];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},435:function(e,n,t){"use strict";function a(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}n.a=function(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(o&&(o+=" "),o+=n);return o}},441:function(e,n,t){"use strict";var a=t(0),o=t(442);n.a=function(){const e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},442:function(e,n,t){"use strict";var a=t(0);const o=Object(a.createContext)(void 0);n.a=o},446:function(e,n,t){"use strict";var a=t(0),o=t.n(a),i=t(441),r=t(435),l=t(58),s=t.n(l);const u=37,c=39;n.a=function(e){const{lazy:n,block:t,defaultValue:l,values:b,groupId:p,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(i.a)(),[O,g]=Object(a.useState)(l),j=a.Children.toArray(e.children),v=[];if(null!=p){const e=m[p];null!=e&&e!==O&&b.some((n=>n.value===e))&&g(e)}const N=e=>{const n=e.target,t=v.indexOf(n),a=j[t].props.value;g(a),null!=p&&f(p,a)},h=e=>{var n;let t;switch(e.keyCode){case c:const n=v.indexOf(e.target)+1;t=v[n]||v[0];break;case u:const a=v.indexOf(e.target)-1;t=v[a]||v[v.length-1]}null===(n=t)||void 0===n||n.focus()};return o.a.createElement("div",{className:"tabs-container"},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t},d)},b.map((({value:e,label:n})=>o.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(r.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>v.push(e),onKeyDown:h,onFocus:N,onClick:N},n)))),n?Object(a.cloneElement)(j.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},j.map(((e,n)=>Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==O})))))}},447:function(e,n,t){"use strict";var a=t(0),o=t.n(a);n.a=function({children:e,hidden:n,className:t}){return o.a.createElement("div",{role:"tabpanel",hidden:n,className:t},e)}}}]);