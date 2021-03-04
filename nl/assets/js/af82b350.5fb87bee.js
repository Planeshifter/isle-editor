(window.webpackJsonp=window.webpackJsonp||[]).push([[1217],{242:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(7),i=(t(0),t(410)),o={id:"word-venn-diagram",title:"Word Venn Diagram",sidebar_label:"Word Venn Diagram"},l={unversionedId:"learn/word-venn-diagram",id:"learn/word-venn-diagram",isDocsHomePage:!1,title:"Word Venn Diagram",description:"Een venn diagram dat het samen voorkomen van woorden in documenten van een bijgeleverde term-document matrix visualiseert.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/learn/word-venn-diagram.md",slug:"/learn/word-venn-diagram",permalink:"/nl/docs/learn/word-venn-diagram",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/word-venn-diagram.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Word Venn Diagram",sidebar:"docs",previous:{title:"Venn Diagram Builder",permalink:"/nl/docs/learn/venn-diagram-builder"},next:{title:"Beta Distribution",permalink:"/nl/docs/learn/distribution-beta"}},c=[{value:"Opties",id:"opties",children:[]},{value:"Voorbeelden",id:"voorbeelden",children:[]}],d={toc:c};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Een venn diagram dat het samen voorkomen van woorden in documenten van een bijgeleverde term-document matrix visualiseert."),Object(i.b)("h2",{id:"opties"},"Opties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"height")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": hoogte van het Venn-diagram in pixels. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"350"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"nTexts")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number (required)"),": aantal bronnen waaruit tekst is verzameld. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onClick")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),': callback voor wat er gedaan moet worden als "Teken Venn Diagram" wordt aangeklikt. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"onClick() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"tdm")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array (required)"),": ",Object(i.b)("inlineCode",{parentName:"li"},"array")," dat is om een ",Object(i.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Document-term_matrix"},"term documentmatrix")," te vertegenwoordigen.. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"vocabulary")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array (required)"),": ",Object(i.b)("inlineCode",{parentName:"li"},"array")," in de volgorde van de ",Object(i.b)("inlineCode",{parentName:"li"},"tdm")," array doorgegeven, zodat de indexen overeen kunnen komen met hun woorden. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"width")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": breedte van het Venn-diagram in pixels. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"600"),".")),Object(i.b)("h2",{id:"voorbeelden"},"Voorbeelden"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnWordVennDiagram />\n")))}b.isMDXComponent=!0},410:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return s}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),b=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=b(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=b(t),p=r,s=m["".concat(o,".").concat(p)]||m[p]||u[p]||i;return t?a.a.createElement(s,l(l({ref:n},d),{},{components:t})):a.a.createElement(s,l({ref:n},d))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);