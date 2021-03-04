(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{154:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),i=(t(0),t(410)),o={id:"word-venn-diagram",title:"Word Venn Diagram",sidebar_label:"Word Venn Diagram"},c={unversionedId:"learn/word-venn-diagram",id:"learn/word-venn-diagram",isDocsHomePage:!1,title:"Word Venn Diagram",description:"Schemat venn wizualizuj\u0105cy wsp\xf3\u0142wyst\u0119powanie s\u0142\xf3w w dokumentach dostarczonej matrycy termin-dokument.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/learn/word-venn-diagram.md",slug:"/learn/word-venn-diagram",permalink:"/pl/docs/learn/word-venn-diagram",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/word-venn-diagram.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Word Venn Diagram",sidebar:"docs",previous:{title:"Venn Diagram Builder",permalink:"/pl/docs/learn/venn-diagram-builder"},next:{title:"Beta Distribution",permalink:"/pl/docs/learn/distribution-beta"}},l=[{value:"Opcje",id:"opcje",children:[]},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[]}],d={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Schemat venn wizualizuj\u0105cy wsp\xf3\u0142wyst\u0119powanie s\u0142\xf3w w dokumentach dostarczonej matrycy termin-dokument."),Object(i.b)("h2",{id:"opcje"},"Opcje"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"height")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": wysoko\u015b\u0107 wykresu Venna w pikselach. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"350"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"nTexts")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number (required)"),": liczba \u017ar\xf3de\u0142, z kt\xf3rych zebrano tekst. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onClick")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),': Oddzwo\u0144, aby dowiedzie\u0107 si\u0119, co nale\u017cy zrobi\u0107 po klikni\u0119ciu przycisku "Rysuj diagram Wenn".. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"onClick() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"tdm")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array (required)"),": ",Object(i.b)("inlineCode",{parentName:"li"},"array"),", kt\xf3ry ma reprezentowa\u0107 ",Object(i.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Document-term_matrix"},"matryc\u0119 dokument\xf3w terminowych"),". Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"vocabulary")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array (required)"),": ",Object(i.b)("inlineCode",{parentName:"li"},"array")," w kolejno\u015bci tablicy ",Object(i.b)("inlineCode",{parentName:"li"},"tdm")," min\u0105\u0142 tak, \u017ce indeksy mog\u0105 by\u0107 dopasowane do ich s\u0142\xf3w. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"width")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": szeroko\u015b\u0107 wykresu Venna w pikselach. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"600"),".")),Object(i.b)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnWordVennDiagram />\n")))}p.isMDXComponent=!0},410:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return s}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),p=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,s=u["".concat(o,".").concat(m)]||u[m]||b[m]||i;return t?a.a.createElement(s,c(c({ref:n},d),{},{components:t})):a.a.createElement(s,c({ref:n},d))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<i;d++)o[d]=t[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);