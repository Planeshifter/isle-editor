(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{229:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(7),r=(n(0),n(410)),o={id:"multiple-choice-matrix",title:"Multiple Choice Matrix",sidebar_label:"Multiple Choice Matrix"},l={unversionedId:"questions/multiple-choice-matrix",id:"questions/multiple-choice-matrix",isDocsHomePage:!1,title:"Multiple Choice Matrix",description:"Un componente de la ISLE que hace una matriz de preguntas de opci\xf3n m\xfaltiple con las mismas respuestas.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/questions/multiple-choice-matrix.md",slug:"/questions/multiple-choice-matrix",permalink:"/es/docs/questions/multiple-choice-matrix",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/multiple-choice-matrix.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Multiple Choice Matrix"},c=[{value:"Opciones",id:"opciones",children:[]},{value:"Ejemplos",id:"ejemplos",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Un componente de la ISLE que hace una matriz de preguntas de opci\xf3n m\xfaltiple con las mismas respuestas."),Object(r.b)("h2",{id:"opciones"},"Opciones"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"questions")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array (required)"),": una serie de preguntas. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"answers")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array (required)"),": una serie de respuestas. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"title")," | ",Object(r.b)("inlineCode",{parentName:"li"},"(string|node)"),": El t\xedtulo se mostrar\xe1 en la parte superior de la matriz de preguntas. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"solution")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array<array>"),": matriz booleana cuyo elemento indica si el respectivo bot\xf3n de radio o casilla de verificaci\xf3n debe ser marcado. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"type")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": tipo de pregunta (",Object(r.b)("inlineCode",{parentName:"li"},"radio"),' corresponde a "Seleccionar uno", ',Object(r.b)("inlineCode",{parentName:"li"},"caja de selecci\xf3n"),' a "Seleccionar todos los que se aplican"). Default: ',Object(r.b)("inlineCode",{parentName:"li"},"'radio'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"disableSubmitNotification")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controla si se desactivan las notificaciones de presentaci\xf3n. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onChange")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": llamada de retorno invocada cuando el valor de una casilla de verificaci\xf3n / bot\xf3n de radio cambia; invocada con la matriz booleana bidimensional del estado activo para cada opci\xf3n de respuesta. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),': llamada de retorno invocada cuando el usuario hace clic en el bot\xf3n "Enviar"; invocada con la matriz booleana bidimensional del estado activo para cada opci\xf3n de respuesta. Default: ',Object(r.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),Object(r.b)("h2",{id:"ejemplos"},"Ejemplos"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MultipleChoiceMatrix \n    title=\"Do you think these concepts are important for an introductory statistics course, and do you (or your department) cover them in your introductory courses?\" id=\"topics\" \n    questions={[\n        'Data Visualizations',\n        'Hand calculations (e.g. standard deviation, z-scores)',\n        'Combinatorics',\n        'Basic probability theory (conditional probability, independence...)',\n        'Calculus-based probability',\n        'Sampling distributions',\n        'Confidence intervals (traditional, formula-based)',\n        'Boostrapping',\n        'Hypothesis testing (traditional, e.g. t-test or chi-square formulas and tables)',\n        'Simple linear regression',\n        'Bayesian statistics',\n        'Randomization- or simulation-based inference'\n    ]}\n    type=\"checkbox\" \n    answers={[ 'I cover it', 'I think it\\'s important' ]} \n/>\n")))}u.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||r;return n?i.a.createElement(m,l(l({ref:t},s),{},{components:n})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);