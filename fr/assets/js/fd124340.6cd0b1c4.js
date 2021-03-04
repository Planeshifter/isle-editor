(window.webpackJsonp=window.webpackJsonp||[]).push([[1279],{304:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return c})),r.d(n,"default",(function(){return p}));var t=r(3),a=r(7),o=(r(0),r(410)),i={id:"confidence-coverage-normal",title:"Confidence Interval Coverage Normal",sidebar_label:"Confidence Interval Coverage Normal"},l={unversionedId:"learn/confidence-coverage-normal",id:"learn/confidence-coverage-normal",isDocsHomePage:!1,title:"Confidence Interval Coverage Normal",description:"Un \xe9l\xe9ment d'apprentissage illustrant la couverture des intervalles de confiance pour la moyenne d'une distribution normale.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/learn/confidence-coverage-normal.md",slug:"/learn/confidence-coverage-normal",permalink:"/fr/docs/learn/confidence-coverage-normal",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/confidence-coverage-normal.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Confidence Interval Coverage Normal",sidebar:"docs",previous:{title:"Confidence Interval Coverage Binomial",permalink:"/fr/docs/learn/confidence-coverage-binomial"},next:{title:"Confidence Interval Coverage Sample",permalink:"/fr/docs/learn/confidence-coverage-sample"}},c=[{value:"Options",id:"options",children:[]},{value:"Exemples",id:"exemples",children:[]}],u={toc:c};function p(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Un \xe9l\xe9ment d'apprentissage illustrant la couverture des intervalles de confiance pour la moyenne d'une distribution normale."),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"intro")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(node|string)"),": remplace le texte d'introduction par d\xe9faut (interactif). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"quartileNotation")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),': contr\xf4le si l\'on doit utiliser "alpha/2" comme indice de la valeur critique ou seulement "critique. Default: ',Object(o.b)("inlineCode",{parentName:"li"},"true"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"sampleStats")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si l'on doit pouvoir passer de l'utilisation de l'\xe9cart-type de l'\xe9chantillon \xe0 celle de l'\xe9cart-type de la population connue lors du calcul de l'erreur type. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"true"),".")),Object(o.b)("h2",{id:"exemples"},"Exemples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnConfidenceCoverageNormal />\n")))}p.isMDXComponent=!0},410:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return b}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},d=function(e){var n=p(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=t,b=d["".concat(i,".").concat(m)]||d[m]||s[m]||o;return r?a.a.createElement(b,l(l({ref:n},u),{},{components:r})):a.a.createElement(b,l({ref:n},u))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);