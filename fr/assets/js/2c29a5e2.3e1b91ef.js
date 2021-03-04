(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{158:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return c}));var i=t(3),a=t(7),r=(t(0),t(410)),l={id:"number-input",title:"Number Input",sidebar_label:"Number Input"},o={unversionedId:"input/number-input",id:"input/number-input",isDocsHomePage:!1,title:"Number Input",description:'Un \xe9l\xe9ment de saisie de chiffres. Peut \xeatre utilis\xe9 dans le cadre d\'un tableau de bord ISLE ou de mani\xe8re autonome. Dans ce dernier cas, vous souhaitez g\xe9rer les modifications via l\'attribut "onChange" ou lier la valeur \xe0 une variable globale via l\'attribut "bind".',source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/input/number.md",slug:"/input/number-input",permalink:"/fr/docs/input/number-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/number.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Number Input",sidebar:"docs",previous:{title:"Checkbox Input",permalink:"/fr/docs/input/checkbox-input"},next:{title:"Proportions Input",permalink:"/fr/docs/input/proportions-input"}},u=[{value:"Options",id:"options",children:[]},{value:"Exemples",id:"exemples",children:[]}],b={toc:u};function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,'Un \xe9l\xe9ment de saisie de chiffres. Peut \xeatre utilis\xe9 dans le cadre d\'un tableau de bord ISLE ou de mani\xe8re autonome. Dans ce dernier cas, vous souhaitez g\xe9rer les modifications via l\'attribut "onChange" ou lier la valeur \xe0 une variable globale via l\'attribut "bind".'),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"bind")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": nom de la variable globale pour le num\xe9ro \xe0 attribuer. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"defaultValue")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": valeur indiquant la valeur par d\xe9faut de l'entr\xe9e au d\xe9marrage. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"0"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"disabled")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": bool\xe9en indiquant si l'entr\xe9e est active ou non. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"inline")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": indique si l'entr\xe9e est affich\xe9e en ligne. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"legend")," | ",Object(r.b)("inlineCode",{parentName:"li"},"(string|node)"),": cha\xeene de caract\xe8res indiquant le texte affich\xe9 \xe0 c\xf4t\xe9 du num\xe9ro saisi. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"max")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": num\xe9ro indiquant la valeur maximale qui peut \xeatre ins\xe9r\xe9e. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"null"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"min")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": num\xe9ro indiquant la plus petite valeur possible qui peut \xeatre ins\xe9r\xe9e. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"null"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"numbersOnly")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si seuls les num\xe9ros sont accept\xe9s. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onBlur")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": fonction de rappel \xe0 invoquer en cas d'utilisation d'une m\xe9thode de flou. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onBlur() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onChange")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": fonction de rappel \xe0 invoquer en cas de modification de la saisie du num\xe9ro. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onKeyDown")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": fonction de rappel \xe0 invoquer en appuyant sur n'importe quelle touche. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onKeyDown() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onKeyPress")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": fonction de rappel \xe0 invoquer lors de la saisie de toute cl\xe9. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onKeyPress() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onKeyUp")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": fonction de rappel \xe0 invoquer lorsque la cl\xe9 est lib\xe9r\xe9e. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onKeyUp() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"step")," | ",Object(r.b)("inlineCode",{parentName:"li"},"(number|string)"),": num\xe9ro indiquant les changements progressifs lors de l'utilisation des fl\xe8ches d'augmentation. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"1"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"style")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": Styles CSS en ligne. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"inputStyle")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": Styles CSS en ligne pour les \xe9l\xe9ments d'entr\xe9e. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"value")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": valeur num\xe9rique (pour les composants contr\xf4l\xe9s). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"tooltip")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": cha\xeene d'info-bulle (si elle n'est pas d\xe9finie, l'info-bulle est automatiquement g\xe9n\xe9r\xe9e). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"tooltipPlacement")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": direction de l'infobulle. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'left'"),".")),Object(r.b)("h2",{id:"exemples"},"Exemples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<NumberInput\n    legend="Number of observations"\n    defaultValue={20}\n    step={5}\n/>\n')))}c.isMDXComponent=!0},410:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),c=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,b=u(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,d=p["".concat(l,".").concat(m)]||p[m]||s[m]||r;return t?a.a.createElement(d,o(o({ref:n},b),{},{components:t})):a.a.createElement(d,o({ref:n},b))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var b=2;b<r;b++)l[b]=t[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);