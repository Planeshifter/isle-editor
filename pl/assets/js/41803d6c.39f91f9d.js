(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),a=(n(0),n(410)),o={id:"multiple-choice-survey",title:"Multiple Choice Survey",sidebar_label:"Multiple Choice Survey"},l={unversionedId:"multiple-choice-survey",id:"multiple-choice-survey",isDocsHomePage:!1,title:"Multiple Choice Survey",description:"Komponent ankiety, w kt\xf3rym prowadz\u0105cy mo\u017ce w czasie rzeczywistym zbiera\u0107 od student\xf3w dane z ankiety wielokrotnego wyboru.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/multiple-choice-survey.md",slug:"/multiple-choice-survey",permalink:"/pl/docs/multiple-choice-survey",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/multiple-choice-survey.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21.02.2021",sidebar_label:"Multiple Choice Survey",sidebar:"docs",previous:{title:"Free Text Survey",permalink:"/pl/docs/free-text-survey"},next:{title:"Number Survey",permalink:"/pl/docs/number-survey"}},c=[{value:"Opcje",id:"opcje",children:[]},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[]}],u={toc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Komponent ankiety, w kt\xf3rym prowadz\u0105cy mo\u017ce w czasie rzeczywistym zbiera\u0107 od student\xf3w dane z ankiety wielokrotnego wyboru."),Object(a.b)("h2",{id:"opcje"},"Opcje"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"question")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(string|node)"),": ci\u0105g znak\xf3w wskazuj\u0105cy na pytanie, kt\xf3re nale\u017cy zada\u0107 uczniom. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"''"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy chce si\u0119 zezwoli\u0107 uczniom na wielokrotne udzielanie odpowiedzi na ankiet\u0119. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"anonymous")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy odpowiedzi uczni\xf3w s\u0105 anonimowe. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"answers")," | ",Object(a.b)("inlineCode",{parentName:"li"},"array"),": tablica wskazuj\u0105ca wybory odpowiedzi dla uczni\xf3w. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"multipleAnswers")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": wskazuje, czy uczniowie mog\u0105 wybra\u0107 wi\u0119cej ni\u017c jedn\u0105 odpowied\u017a. Zwr\xf3\u0107 uwag\u0119, \u017ce r\xf3\u017cni si\u0119 to od allowMultipleAnswers tym, \u017ce pozwala to studentom na wielokrotne zadawanie pyta\u0144. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"style")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": funkcja, kt\xf3ra ma by\u0107 wywo\u0142ana po udzieleniu odpowiedzi. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),Object(a.b)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MultipleChoiceSurvey\n    anonymous\n    question=\"Are you left- or right-handed\"\n    answers={[ 'Left-handed', 'Right-handed' ]}\n/>\n")))}p.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||s[d]||a;return n?i.a.createElement(m,l(l({ref:t},u),{},{components:n})):i.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);