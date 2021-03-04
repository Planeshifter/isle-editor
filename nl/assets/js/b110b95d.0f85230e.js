(window.webpackJsonp=window.webpackJsonp||[]).push([[1218],{243:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return c})),r.d(n,"default",(function(){return p}));var t=r(3),a=r(7),o=(r(0),r(410)),i={id:"confidence-coverage-normal",title:"Confidence Interval Coverage Normal",sidebar_label:"Confidence Interval Coverage Normal"},l={unversionedId:"learn/confidence-coverage-normal",id:"learn/confidence-coverage-normal",isDocsHomePage:!1,title:"Confidence Interval Coverage Normal",description:"Een leercomponent die de dekking van de betrouwbaarheidsintervallen voor het gemiddelde van een normale verdeling illustreert.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/learn/confidence-coverage-normal.md",slug:"/learn/confidence-coverage-normal",permalink:"/nl/docs/learn/confidence-coverage-normal",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/confidence-coverage-normal.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Confidence Interval Coverage Normal",sidebar:"docs",previous:{title:"Confidence Interval Coverage Binomial",permalink:"/nl/docs/learn/confidence-coverage-binomial"},next:{title:"Confidence Interval Coverage Sample",permalink:"/nl/docs/learn/confidence-coverage-sample"}},c=[{value:"Opties",id:"opties",children:[]},{value:"Voorbeelden",id:"voorbeelden",children:[]}],d={toc:c};function p(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},d,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Een leercomponent die de dekking van de betrouwbaarheidsintervallen voor het gemiddelde van een normale verdeling illustreert."),Object(o.b)("h2",{id:"opties"},"Opties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"intro")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(node|string)"),": overschrijft standaard (interactieve) introtekst. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"quartileNotation")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of er ",Object(o.b)("inlineCode",{parentName:"li"},"alpha/2")," als subscript voor de kritische waarde wordt gebruikt of alleen ",Object(o.b)("inlineCode",{parentName:"li"},"kritisch"),".. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"true"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"sampleStats")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": controleert of bij de berekening van de standaardafwijking van de steekproef moet worden geschakeld tussen het gebruik van de standaardafwijking van de steekproef of de bekende standaardafwijking van de populatie.. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"true"),".")),Object(o.b)("h2",{id:"voorbeelden"},"Voorbeelden"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnConfidenceCoverageNormal />\n")))}p.isMDXComponent=!0},410:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return f}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),p=function(e){var n=a.a.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=p(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=p(r),b=t,f=u["".concat(i,".").concat(b)]||u[b]||s[b]||o;return r?a.a.createElement(f,l(l({ref:n},d),{},{components:r})):a.a.createElement(f,l({ref:n},d))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);