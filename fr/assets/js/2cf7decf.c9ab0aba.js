(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{156:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return c})),r.d(n,"default",(function(){return d}));var t=r(3),a=r(7),i=(r(0),r(406)),o={id:"word-venn-diagram",title:"Word Venn Diagram",sidebar_label:"Word Venn Diagram"},l={unversionedId:"learn/word-venn-diagram",id:"learn/word-venn-diagram",isDocsHomePage:!1,title:"Word Venn Diagram",description:"Un diagramme de Venn visualisant la cooccurrence des mots dans les documents d'une matrice terme-document fournie.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/learn/word-venn-diagram.md",slug:"/learn/word-venn-diagram",permalink:"/fr/docs/learn/word-venn-diagram",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/word-venn-diagram.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612738524,sidebar_label:"Word Venn Diagram",sidebar:"docs",previous:{title:"Venn Diagram Builder",permalink:"/fr/docs/learn/venn-diagram-builder"},next:{title:"Beta Distribution",permalink:"/fr/docs/learn/distribution-beta"}},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:c};function d(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Un diagramme de Venn visualisant la cooccurrence des mots dans les documents d'une matrice terme-document fournie."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"height")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": hauteur du diagramme de Venn en pixels. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"350"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"nTexts")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number (required)"),": nombre de sources \xe0 partir desquelles le texte a \xe9t\xe9 recueilli. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onClick")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),': rappel de ce qui doit \xeatre fait lorsque l\'on clique sur "Dessiner le diagramme de Venn".. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"onClick() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"tdm")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array (required)"),": qui doit repr\xe9senter une ","[matrice de documents]"," (",Object(i.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Document-term_matrix"},"https://en.wikipedia.org/wiki/Document-term_matrix"),"). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"vocabulary")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array (required)"),': tableau" dans l\'ordre du tableau "tdm" pass\xe9 afin que les indices puissent correspondre \xe0 leurs mots. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"width")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": largeur du diagramme de Venn en pixels. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"600"),".")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnWordVennDiagram />\n")))}d.isMDXComponent=!0},406:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return b}));var t=r(0),a=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),d=function(e){var n=a.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=d(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=d(r),p=t,b=s["".concat(o,".").concat(p)]||s[p]||m[p]||i;return r?a.a.createElement(b,l(l({ref:n},u),{},{components:r})):a.a.createElement(b,l({ref:n},u))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);