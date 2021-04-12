(window.webpackJsonp=window.webpackJsonp||[]).push([[1255],{281:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return c})),n.d(a,"metadata",(function(){return s})),n.d(a,"toc",(function(){return b})),n.d(a,"default",(function(){return u}));var t=n(3),r=n(7),o=(n(0),n(410)),l=n(443),i=n(444),c={id:"word-cloud",title:"Word Cloud",sidebar_label:"Word Cloud"},s={unversionedId:"word-cloud",id:"word-cloud",isDocsHomePage:!1,title:"Word Cloud",description:"Un componente de nube de palabras construido sobre d3-cloud.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/word-cloud.md",slug:"/word-cloud",permalink:"/es/docs/word-cloud",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/word-cloud.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614228315,formattedLastUpdatedAt:"24/2/2021",sidebar_label:"Word Cloud",sidebar:"docs",previous:{title:"Violin Plot",permalink:"/es/docs/plots/violinplot"},next:{title:"Decision Tree",permalink:"/es/docs/models/decision-tree"}},b=[{value:"Opciones",id:"opciones",children:[]},{value:"Ejemplos",id:"ejemplos",children:[]}],d={toc:b};function u(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},d,n,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Un componente de nube de palabras construido sobre ",Object(o.b)("a",{parentName:"p",href:"https://github.com/jasondavies/d3-cloud"},"d3-cloud"),"."),Object(o.b)("h2",{id:"opciones"},"Opciones"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"data")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array"),': o bien una matriz de textos a partir de los cuales generar la nube de palabras o, si "precalculado" se establece como "verdadero", y una matriz de objetos de conteo de palabras (con claves de "texto" y "valor"). Default: ',Object(o.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"font")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(string|function)"),": funci\xf3n de acceso especificando la fuente de cada palabra. Tambi\xe9n acepta una constante en lugar de una funci\xf3n. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"'serif'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"fontSizeMapper")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": funci\xf3n accesoria que indica el tama\xf1o de la fuente de cada palabra. Por defecto es ",Object(o.b)("inlineCode",{parentName:"li"},"( cuenta - min + 1 ) / ( max - min + 6 ) * 30.0 + 12.0"),", donde ",Object(o.b)("inlineCode",{parentName:"li"},"min")," y ",Object(o.b)("inlineCode",{parentName:"li"},"max")," denotan el m\xednimo y m\xe1ximo de la palabra ",Object(o.b)("inlineCode",{parentName:"li"},"cuenta"),", respectivamente. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"height")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": altura de la nube de la palabra (en px). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"600"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"language")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": identificador de idioma (determina las palabras de parada que se deben eliminar). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"'en'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"minCount")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),': si se establece, s\xf3lo incluye las palabras que aparecen m\xe1s de "minCount" veces en los datos dados. Default: ',Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"saveButton")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": controla si mostrar un bot\xf3n para guardar la nube de palabras como una imagen. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"true"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onClick")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": La funci\xf3n de devoluci\xf3n de llamada que se invoca cuando se hace clic en una palabra de la nube de palabras. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onClick() {}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"padding")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(function|number)"),": funci\xf3n accesoria o constante que indica el relleno num\xe9rico de cada palabra. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"5"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"precalculated")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": controla si la nube de palabras espera un conjunto de recuentos de palabras precalculados o los generar\xe1 para determinados textos. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"rotate")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(function|number)"),": funci\xf3n accesoria que indica el \xe1ngulo de rotaci\xf3n (en grados) para cada palabra. Tambi\xe9n acepta una constante en lugar de una funci\xf3n. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"word => word.value % 360"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"updateThreshold")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),': el tama\xf1o del lote de nuevos documentos en "datos" antes de que la nube de palabras sea reproducida. Default: ',Object(o.b)("inlineCode",{parentName:"li"},"5"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"stopwords")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array"),": ...palabras clave adicionales para remover antes de hacer la nube de palabras.... Default: ",Object(o.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"triggerRender")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": retransmisi\xf3n cuando se intercambie el conjunto de datos. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"true"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"style")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object"),": Estilos en l\xednea CSS. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"width")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": ancho de la palabra nube (en px). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"700"),".")),Object(o.b)("h2",{id:"ejemplos"},"Ejemplos"),Object(o.b)(l.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"With Stopwords",value:"withStopwords"}],lazy:!0,mdxType:"Tabs"},Object(o.b)(i.a,{value:"minimal",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<WordCloud data={[\n  'This is my holiday', \n  'Breakfast is great', \n  'My house is my castle', \n  'A castle for a kingdom', \n  'I am longing for breakfast',\n  'Having rolls for breakfast is a must',\n  'A horse for a kingdom',\n  'Mom like rolls',\n  'Orange juice is fine',\n  'Where is the butter',\n  'I am looking for a spoon',\n  'Coffee for coffee drinkers',\n  'Tea for the sleepy ones',\n  'The sleepy, sloppy, crazy King lives in a castle',\n  'A house for everybody'\n]} />\n"))),Object(o.b)(i.a,{value:"withStyle",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<WordCloud \n  style={{ boxShadow: '10px 0 25px black' }}\n  rotate={-7}\n  data={[\n    'This is my castle', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is a castle drink',\n    'Where is the butter',\n    'I am looking for a castle',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A holiday for everybody'\n]} />\n"))),Object(o.b)(i.a,{value:"withStopwords",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<WordCloud \n  stopwords={[ 'castle', 'crap', 'damn' ]}\n  data={[\n    'This is my holiday', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is fine',\n    'Where is the butter',\n    'I am looking for a spoon',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A house for everybody',\n    'castle castle castle castle castle castle castle castle castle castle',\n    'crap crap crap crap crap crap crap damn damn damn dam'\n]} />\n")))))}u.isMDXComponent=!0},410:function(e,a,n){"use strict";n.d(a,"a",(function(){return d})),n.d(a,"b",(function(){return m}));var t=n(0),r=n.n(t);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var a=r.a.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=b(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},p=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(n),p=t,m=d["".concat(l,".").concat(p)]||d[p]||u[p]||o;return n?r.a.createElement(m,i(i({ref:a},s),{},{components:n})):r.a.createElement(m,i({ref:a},s))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},434:function(e,a,n){"use strict";function t(e){var a,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(n=t(e[a]))&&(r&&(r+=" "),r+=n);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}a.a=function(){for(var e,a,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(a=t(e))&&(r&&(r+=" "),r+=a);return r}},440:function(e,a,n){"use strict";var t=n(0),r=n(441);a.a=function(){const e=Object(t.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},441:function(e,a,n){"use strict";var t=n(0);const r=Object(t.createContext)(void 0);a.a=r},443:function(e,a,n){"use strict";var t=n(0),r=n.n(t),o=n(440),l=n(434),i=n(57),c=n.n(i);const s=37,b=39;a.a=function(e){const{lazy:a,block:n,defaultValue:i,values:d,groupId:u,className:p}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(o.a)(),[O,j]=Object(t.useState)(i),g=t.Children.toArray(e.children),y=[];if(null!=u){const e=m[u];null!=e&&e!==O&&d.some((a=>a.value===e))&&j(e)}const v=e=>{const a=e.target,n=y.indexOf(a),t=g[n].props.value;j(t),null!=u&&(f(u,t),setTimeout((()=>{(function(e){const{top:a,left:n,bottom:t,right:r}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:l}=window;return a>=0&&r<=l&&t<=o&&n>=0})(a)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(c.a.tabItemActive),setTimeout((()=>a.classList.remove(c.a.tabItemActive)),2e3))}),150))},N=e=>{var a;let n;switch(e.keyCode){case b:{const a=y.indexOf(e.target)+1;n=y[a]||y[0];break}case s:{const a=y.indexOf(e.target)-1;n=y[a]||y[y.length-1];break}}null===(a=n)||void 0===a||a.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},p)},d.map((({value:e,label:a})=>r.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>y.push(e),onKeyDown:N,onFocus:v,onClick:v},a)))),a?Object(t.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map(((e,a)=>Object(t.cloneElement)(e,{key:a,hidden:e.props.value!==O})))))}},444:function(e,a,n){"use strict";var t=n(0),r=n.n(t);a.a=function({children:e,hidden:a,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},e)}}}]);