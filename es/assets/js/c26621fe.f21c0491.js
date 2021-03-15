(window.webpackJsonp=window.webpackJsonp||[]).push([[1235],{257:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(410)),l={id:"multiple-choice-survey",title:"Multiple Choice Survey",sidebar_label:"Multiple Choice Survey"},o={unversionedId:"multiple-choice-survey",id:"multiple-choice-survey",isDocsHomePage:!1,title:"Multiple Choice Survey",description:"Un componente de encuesta en el que el instructor puede recoger datos de encuesta de opci\xf3n m\xfaltiple de los estudiantes en tiempo real.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/multiple-choice-survey.md",slug:"/multiple-choice-survey",permalink:"/es/docs/multiple-choice-survey",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/multiple-choice-survey.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21/2/2021",sidebar_label:"Multiple Choice Survey",sidebar:"docs",previous:{title:"Free Text Survey",permalink:"/es/docs/free-text-survey"},next:{title:"Number Survey",permalink:"/es/docs/number-survey"}},c=[{value:"Opciones",id:"opciones",children:[]},{value:"Ejemplos",id:"ejemplos",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Un componente de encuesta en el que el instructor puede recoger datos de encuesta de opci\xf3n m\xfaltiple de los estudiantes en tiempo real."),Object(i.b)("h2",{id:"opciones"},"Opciones"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"question")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|node)"),": cadena que indica la pregunta que hay que hacer a los estudiantes. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controla si se desea permitir que los estudiantes respondan a la encuesta varias veces. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"anonymous")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controla si las respuestas de los estudiantes son an\xf3nimas. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"answers")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array"),": que indica las opciones de respuesta para los estudiantes. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"multipleAnswers")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": indica si los estudiantes pueden seleccionar m\xe1s de una respuesta. Note que esto difiere de allowMultipleAnswers en que allow hace que los estudiantes puedan enviar la pregunta varias veces. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": Estilos en l\xednea CSS. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": funci\xf3n que se llamar\xe1 cuando se presente una respuesta. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),Object(i.b)("h2",{id:"ejemplos"},"Ejemplos"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MultipleChoiceSurvey\n    anonymous\n    question=\"Are you left- or right-handed\"\n    answers={[ 'Left-handed', 'Right-handed' ]}\n/>\n")))}u.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(l,".").concat(b)]||p[b]||d[b]||i;return n?a.a.createElement(m,o(o({ref:t},s),{},{components:n})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);