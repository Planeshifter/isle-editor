(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{189:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(3),i=n(7),r=(n(0),n(410)),l={id:"sketchpad",title:"Sketchpad",sidebar_label:"Sketchpad"},o={unversionedId:"sketchpad",id:"sketchpad",isDocsHomePage:!1,title:"Sketchpad",description:"Un carnet de croquis pour la prise de notes sur les diapositives des conf\xe9rences ou les pages vides.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/sketchpad.md",slug:"/sketchpad",permalink:"/fr/docs/sketchpad",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/sketchpad.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21/02/2021",sidebar_label:"Sketchpad",sidebar:"docs",previous:{title:"Text Editor",permalink:"/fr/docs/text-editor"},next:{title:"Lesson Submit",permalink:"/fr/docs/lesson-submit"}},s=[{value:"Options",id:"options",children:[]},{value:"Exemples",id:"exemples",children:[]}],b={toc:s};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Un carnet de croquis pour la prise de notes sur les diapositives des conf\xe9rences ou les pages vides."),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"autoSave")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si l'\xe9diteur doit enregistrer le texte actuel dans la m\xe9moire locale du navigateur \xe0 un intervalle de temps donn\xe9. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"feedbackButtons")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le l'affichage ou non des boutons de r\xe9troaction sur chaque diapositive. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"intervalTime")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": temps entre les sauvegardes automatiques. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"10000"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hideInputButtons")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si les boutons de dessin et de saisie de texte doivent \xeatre masqu\xe9s. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hideNavigationButtons")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si les boutons de navigation entre les pages doivent \xeatre masqu\xe9s. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hideSaveButtons")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si les boutons de sauvegarde doivent \xeatre cach\xe9s. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hideTransmitButtons")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si les boutons de transmission des actions de l'utilisateur doivent \xeatre masqu\xe9s. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"brushSize")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": taille du pinceau pour peindre. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"4"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"color")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": la couleur du pinceau et des textes. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'#444444'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"canvasWidth")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": largeur de l'\xe9l\xe9ment de la toile (en px). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"1200"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"canvasHeight")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": hauteur de l'\xe9l\xe9ment de la toile (en px). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"700"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"fullscreen")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si la toile doit \xeatre automatiquement redimensionn\xe9e \xe0 la largeur et \xe0 la hauteur de la fen\xeatre du navigateur. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"fill")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": si \"horizontal\", remplir tout l'espace horizontal disponible lors du dessin d'un PDF ; si \"vertical\", tout l'espace vertical est utilis\xe9 pour \xe9viter le d\xe9bordement de l'axe des y. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'vertical'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"disabled")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": l'opportunit\xe9 de rendre l'\xe9l\xe9ment en lecture seule et d'interdire le dessin sur le carnet de croquis. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"fontFamily")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": famille de polices. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'Arial'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"fontSize")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": taille de la police. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"24"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"nodes")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),': les composants \xe0 rendre sur les diapositives sp\xe9cifi\xe9es ; les "cl\xe9s" doivent correspondre aux num\xe9ros de page, les "valeurs" aux composants. Default: ',Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"noPages")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": nombre initial de pages. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"1"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"pdf")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": lien vers le fichier PDF pour les fonds de page cuits. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"showTutorial")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": montrer un tutoriel pour le carnet de croquis. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"dynamicallyHideButtons")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si les boutons doivent \xeatre masqu\xe9s lorsque la largeur de la barre d'outils n'est pas suffisante (sinon, une nouvelle ligne sera lanc\xe9e). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"transmitOwner")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": si les actions du propri\xe9taire doivent \xeatre transmises aux autres utilisateurs en temps r\xe9el. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"groupMode")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si toutes les actions de l'utilisateur sont transmises \xe0 tous les autres. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"voiceID")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": identificateur de contr\xf4le vocal. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"style")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": Styles CSS en ligne. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onChange")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": rappel invoqu\xe9 \xe0 chaque fois qu'un nouvel \xe9l\xe9ment de ligne est trac\xe9. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onChange() {}"),".")),Object(r.b)("h2",{id:"exemples"},"Exemples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Sketchpad canvasWidth={750} />\n")))}c.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),c=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return n?i.a.createElement(m,o(o({ref:t},b),{},{components:n})):i.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<r;b++)l[b]=n[b];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);