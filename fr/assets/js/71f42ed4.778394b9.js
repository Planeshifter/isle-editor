(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{197:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var r=n(3),i=n(7),o=(n(0),n(410)),a={id:"free-text-survey",title:"Free Text Survey",sidebar_label:"Free Text Survey"},l={unversionedId:"free-text-survey",id:"free-text-survey",isDocsHomePage:!1,title:"Free Text Survey",description:"Un volet ISLE pour les questions dont les r\xe9ponses des \xe9tudiants doivent \xeatre fournies sous forme de texte libre. Ce qui diff\xe9rencie ce composant de la FreeTextQuestion est le fait que les donn\xe9es agr\xe9g\xe9es des groupes sont affich\xe9es \xe0 tous en temps r\xe9el.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/free-text-survey.md",slug:"/free-text-survey",permalink:"/fr/docs/free-text-survey",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/free-text-survey.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Free Text Survey",sidebar:"docs",previous:{title:"Select Question Matrix",permalink:"/fr/docs/questions/select-question-matrix"},next:{title:"Multiple Choice Survey",permalink:"/fr/docs/multiple-choice-survey"}},s=[{value:"Options",id:"options",children:[]},{value:"Exemples",id:"exemples",children:[]}],u={toc:s};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Un volet ISLE pour les questions dont les r\xe9ponses des \xe9tudiants doivent \xeatre fournies sous forme de texte libre. Ce qui diff\xe9rencie ce composant de la ",Object(o.b)("strong",{parentName:"p"},"FreeTextQuestion")," est le fait que les donn\xe9es agr\xe9g\xe9es des groupes sont affich\xe9es \xe0 tous en temps r\xe9el."),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"question")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(string|node)"),": la question \xe0 poser aux \xe9tudiants. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"''"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si l'on souhaite permettre aux \xe9tudiants de r\xe9pondre plusieurs fois \xe0 l'enqu\xeate. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"anonymous")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si les r\xe9ponses des \xe9tudiants sont recueillies de mani\xe8re anonyme. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"rows")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": nombre de lignes de texte dans le champ de saisie. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"4"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"className")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": nom de la classe. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"''"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"style")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object"),": Styles CSS en ligne. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": fonction de rappel appel\xe9e lorsqu'une r\xe9ponse est soumise. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),Object(o.b)("h2",{id:"exemples"},"Exemples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextSurvey \n    question="Where are you from?"\n    anonymous\n/>\n')))}c.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),c=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,m=p["".concat(a,".").concat(d)]||p[d]||b[d]||o;return n?i.a.createElement(m,l(l({ref:t},u),{},{components:n})):i.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);