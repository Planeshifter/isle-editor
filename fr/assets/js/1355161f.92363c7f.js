(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),l=(n(0),n(406)),i={id:"r-shell",title:"R Shell",sidebar_label:"R Shell"},o={unversionedId:"r/r-shell",id:"r/r-shell",isDocsHomePage:!1,title:"R Shell",description:"Un Shell R interactif qui peut \xeatre utilis\xe9 pour ex\xe9cuter des commandes R dans le nuage en utilisant [OpenCPU] (https://www.opencpu.org/).",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/r/shell.md",slug:"/r/r-shell",permalink:"/fr/docs/r/r-shell",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/r/shell.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612738524,sidebar_label:"R Shell",sidebar:"docs",previous:{title:"R Plot",permalink:"/fr/docs/r/r-plot"},next:{title:"R Table",permalink:"/fr/docs/r/r-table"}},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Un Shell R interactif qui peut \xeatre utilis\xe9 pour ex\xe9cuter des commandes R dans le nuage en utilisant ","[OpenCPU]"," (",Object(l.b)("a",{parentName:"p",href:"https://www.opencpu.org/"},"https://www.opencpu.org/"),")."),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"code")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": Code R \xe0 \xe9valuer. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"solution")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),': pour les questions de programmation, une "cha\xeene" de code R repr\xe9sentant la solution officielle du probl\xe8me. Default: ',Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"hints")," | ",Object(l.b)("inlineCode",{parentName:"li"},"array<(string|node)>"),": pour les questions de programmation, une s\xe9rie de conseils sur la mani\xe8re d'aborder le probl\xe8me. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"addPreceding")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": s'il est configur\xe9 sur true, le shell \xe9valuera tout le code du composant actuel et tous les codes pr\xe9c\xe9dents de la le\xe7on. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"libraries")," | ",Object(l.b)("inlineCode",{parentName:"li"},"array"),': R les biblioth\xe8ques qui doivent \xeatre charg\xe9es automatiquement lorsque le "code" d\'entr\xe9e est ex\xe9cut\xe9. Default: ',Object(l.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"precompute")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si le code par d\xe9faut doit \xeatre ex\xe9cut\xe9 une fois que le composant a \xe9t\xe9 mont\xe9. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"prependCode")," | ",Object(l.b)("inlineCode",{parentName:"li"},"(string|array)"),': Une "cha\xeene" de code R (ou un "tableau" de blocs de code R) \xe0 ajouter au code stock\xe9 dans le "code" lors de l\'\xe9valuation. Default: ',Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"chat")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si la fonctionnalit\xe9 de chat de groupe doit \xeatre activ\xe9e. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"disabled")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le s'il faut d\xe9sactiver toutes les entr\xe9es de l'utilisateur et rendre le bloc de code statique. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lines")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": nombre de lignes \xe0 afficher. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"5"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"resettable")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le l'affichage d'un bouton de r\xe9initialisation pour restaurer la saisie du code par d\xe9faut. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"style")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": Styles CSS en ligne. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onChange")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": rappel invoqu\xe9 \xe0 chaque modification de la saisie du champ de texte. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onEvaluate")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),': rappel invoqu\xe9 \xe0 chaque fois que le bouton "\xc9valuer" est cliqu\xe9. Default: ',Object(l.b)("inlineCode",{parentName:"li"},"onEvaluate(){}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onResult")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": rappel invoqu\xe9 chaque fois que le r\xe9sultat de l'ex\xe9cution d'un code est obtenu \xe0 partir du nuage. Le r\xe9sultat \"cha\xeene\" est pass\xe9 comme seul argument \xe0 la fonction de rappel. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onResult() {}"),".")),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<RShell\n    code="abs(c(-2,3,-1))"\n/>\n')))}b.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),b=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,m=s["".concat(i,".").concat(d)]||s[d]||p[d]||l;return n?r.a.createElement(m,o(o({ref:t},u),{},{components:n})):r.a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);