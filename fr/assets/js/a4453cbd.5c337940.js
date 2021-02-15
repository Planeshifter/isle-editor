(window.webpackJsonp=window.webpackJsonp||[]).push([[308],{243:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(406)),o={id:"tex",title:"LaTeX Equations",sidebar_label:"LaTeX Equations"},l={unversionedId:"tex",id:"tex",isDocsHomePage:!1,title:"LaTeX Equations",description:"TeX est un \xe9l\xe9ment ISLE qui peut \xeatre utilis\xe9 pour afficher des \xe9quations LaTeX. Sous le capot, le composant utilise [KaTeX] (https://github.com/Khan/KaTeX) pour un rendu ultra rapide.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tex.md",slug:"/tex",permalink:"/fr/docs/tex",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tex.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612738524,sidebar_label:"LaTeX Equations",sidebar:"docs",previous:{title:"Link",permalink:"/fr/docs/link"},next:{title:"blockquote",permalink:"/fr/docs/html/blockquote"}},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"TeX")," est un \xe9l\xe9ment ISLE qui peut \xeatre utilis\xe9 pour afficher des \xe9quations LaTeX. Sous le capot, le composant utilise ","[KaTeX]"," (",Object(i.b)("a",{parentName:"p",href:"https://github.com/Khan/KaTeX"},"https://github.com/Khan/KaTeX"),") pour un rendu ultra rapide."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"raw")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|number) (required)"),': La "cha\xeene" LaTeX litt\xe9rale \xe0 rendre. Accepte \xe9galement les ',Object(i.b)("inlineCode",{parentName:"li"},"num\xe9ros"),".. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"displayMode")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": bool\xe9en\" indiquant s'il faut afficher l'\xe9quation en ligne ou en mode d'affichage. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"numbered")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le l'affichage ou non d'un num\xe9ro d'\xe9quation pour les \xe9quations du mode d'affichage. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": objet\" avec des paires cl\xe9-valeur CSS \xe0 appliquer au conteneur de l'\xe9quation. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"tag")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": Les caract\xe8res personnalis\xe9s affich\xe9s pour les \xe9quations d'affichage sur le c\xf4t\xe9 droit. Par d\xe9faut, le num\xe9ro de l'\xe9quation \xe0 l'int\xe9rieur de la le\xe7on. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"elems")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),': objet" avec des "cl\xe9s" d\xe9signant des caract\xe8res LaTeX et leurs valeurs correspondantes \xe9tant des "objets" de configuration pour les rendre interactifs. La d\xe9finition d\'une option "tooltip" affichera une info-bulle lors du survol des caract\xe8res LaTeX. La d\xe9finition d\'une propri\xe9t\xe9 ',Object(i.b)("inlineCode",{parentName:"li"},"variable")," affichera un curseur d'entr\xe9e pour changer la variable d'\xe9tat respective ; dans ce cas, les propri\xe9t\xe9s suppl\xe9mentaires ",Object(i.b)("inlineCode",{parentName:"li"},"legend"),", ",Object(i.b)("inlineCode",{parentName:"li"},"min"),", ",Object(i.b)("inlineCode",{parentName:"li"},"max"),", et ",Object(i.b)("inlineCode",{parentName:"li"},"step")," sont support\xe9es. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"popoverPlacement")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),': la position du popover pour les "\xe9l\xe9ments" sp\xe9cifi\xe9s (soit "en haut", "\xe0 droite", "en bas" ou "\xe0 gauche"). Default: ',Object(i.b)("inlineCode",{parentName:"li"},"'top'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onPopover")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": fonction de rappel lorsqu'un popover de contr\xf4le est activ\xe9 ou d\xe9sactiv\xe9 ; re\xe7oit le statut d'affichage comme un bool\xe9en comme seul argument. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onPopover() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onClick")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": la \"fonction\" de rappel est invoqu\xe9e chaque fois qu'un utilisateur clique sur l'\xe9quation. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),".")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<TeX\n    raw="2 + 3 = 5"\n    displayMode={true}\n/>\n')))}p.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||i;return n?r.a.createElement(m,l(l({ref:t},u),{},{components:n})):r.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);