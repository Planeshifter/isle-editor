(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{224:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(410)),i={id:"proportions-input",title:"Proportions Input",sidebar_label:"Proportions Input"},l={unversionedId:"input/proportions-input",id:"input/proportions-input",isDocsHomePage:!1,title:"Proportions Input",description:'Un componente de entrada de proporciones. Puede ser usado como parte de un tablero de ISLE o independiente. En este \xfaltimo caso, quieres manejar los cambios a trav\xe9s del atributo "onChange" o vincular el valor a una variable global a trav\xe9s del atributo "bind".',source:"@site/i18n/es/docusaurus-plugin-content-docs/current/input/proportions.md",slug:"/input/proportions-input",permalink:"/es/docs/input/proportions-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/proportions.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Proportions Input",sidebar:"docs",previous:{title:"Number Input",permalink:"/es/docs/input/number-input"},next:{title:"Select Input",permalink:"/es/docs/input/select-input"}},p=[{value:"Opciones",id:"opciones",children:[]},{value:"Ejemplos",id:"ejemplos",children:[]}],c={toc:p};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,'Un componente de entrada de proporciones. Puede ser usado como parte de un tablero de ISLE o independiente. En este \xfaltimo caso, quieres manejar los cambios a trav\xe9s del atributo "onChange" o vincular el valor a una variable global a trav\xe9s del atributo "bind".'),Object(o.b)("h2",{id:"opciones"},"Opciones"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"colors")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array<string>"),": una gama de colores para los componentes del gr\xe1fico circular. Si no se define, se utilizar\xe1 una escala de colores personalizada. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"disabled")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": controla si el campo de entrada est\xe1 desactivado. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"height")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": proporciones altura de entrada (en px). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"200"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"legends")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array"),": etiquetas de grupo. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onChange")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": funci\xf3n de llamada de retorno que se invocar\xe1 cuando se haga una elecci\xf3n. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onChange(){}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"precision")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": la precisi\xf3n de los valores de proporci\xf3n mostrados. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"1"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"step")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": el paso de las flechas que se ven al pasar el cursor por encima del cuadro de entrada. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"0.1"),".")),Object(o.b)("h2",{id:"ejemplos"},"Ejemplos"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ProportionsInput\n    user\n    id="Survey"\n    question="Decide what is important"\n    group="Group decision"\n    nElements={3}\n    colors = {[ "red", "blue", "gold" ]}\n    personalHeight={300}\n    groupHeight={200}\n    margin="80px"\n    legends={[ "bitcoin", "old", "diamonds" ]}\n/>\n')))}s.isMDXComponent=!0},410:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),s=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return t?a.a.createElement(m,l(l({ref:n},c),{},{components:t})):a.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);