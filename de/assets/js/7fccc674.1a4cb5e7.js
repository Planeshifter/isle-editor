(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{215:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return c})),r.d(n,"default",(function(){return u}));var t=r(3),a=r(7),i=(r(0),r(410)),o={id:"word-venn-diagram",title:"Word Venn Diagram",sidebar_label:"Word Venn Diagram"},l={unversionedId:"learn/word-venn-diagram",id:"learn/word-venn-diagram",isDocsHomePage:!1,title:"Word Venn Diagram",description:"Ein Venn-Diagramm, das die Ko-Okzidenz von W\xf6rtern in Dokumenten einer gelieferten Term-Dokument-Matrix visualisiert.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/learn/word-venn-diagram.md",slug:"/learn/word-venn-diagram",permalink:"/de/docs/learn/word-venn-diagram",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/word-venn-diagram.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Word Venn Diagram",sidebar:"docs",previous:{title:"Venn Diagram Builder",permalink:"/de/docs/learn/venn-diagram-builder"},next:{title:"Beta Distribution",permalink:"/de/docs/learn/distribution-beta"}},c=[{value:"Optionen",id:"optionen",children:[]},{value:"Beispiele",id:"beispiele",children:[]}],d={toc:c};function u(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},d,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Ein Venn-Diagramm, das die Ko-Okzidenz von W\xf6rtern in Dokumenten einer gelieferten Term-Dokument-Matrix visualisiert."),Object(i.b)("h2",{id:"optionen"},"Optionen"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"height")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": H\xf6he des Venn-Diagramms in Pixel. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"350"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"nTexts")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number (required)"),": Anzahl der Quellen, aus denen der Text gesammelt wurde. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onClick")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),': Callback f\xfcr das, was getan werden soll, wenn "Venn-Diagramm zeichnen" angeklickt wird. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"onClick() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"tdm")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array (required)"),': Array", das eine ',"[Term-Dokument-Matrix]"," (",Object(i.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Document-term_matrix"},"https://en.wikipedia.org/wiki/Document-term_matrix"),") darstellen soll. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"vocabulary")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array (required)"),": ",Object(i.b)("inlineCode",{parentName:"li"},"array")," in der Reihenfolge des \xfcbergebenen ",Object(i.b)("inlineCode",{parentName:"li"},"tdm"),"-Arrays, so dass die Indizes ihren W\xf6rtern zugeordnet werden k\xf6nnen. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"width")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": Breite des Venn-Diagramms in Pixel. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"600"),".")),Object(i.b)("h2",{id:"beispiele"},"Beispiele"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnWordVennDiagram />\n")))}u.isMDXComponent=!0},410:function(e,n,r){"use strict";r.d(n,"a",(function(){return b})),r.d(n,"b",(function(){return s}));var t=r(0),a=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),u=function(e){var n=a.a.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},b=function(e){var n=u(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),b=u(r),p=t,s=b["".concat(o,".").concat(p)]||b[p]||m[p]||i;return r?a.a.createElement(s,l(l({ref:n},d),{},{components:r})):a.a.createElement(s,l({ref:n},d))}));function s(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);