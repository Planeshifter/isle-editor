(window.webpackJsonp=window.webpackJsonp||[]).push([[348],{282:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return i})),n.d(a,"metadata",(function(){return l})),n.d(a,"toc",(function(){return c})),n.d(a,"default",(function(){return p}));var t=n(3),r=n(7),o=(n(0),n(406)),i={id:"word-cloud",title:"Word Cloud",sidebar_label:"Word Cloud"},l={unversionedId:"word-cloud",id:"word-cloud",isDocsHomePage:!1,title:"Word Cloud",description:"Um componente de nuvem de palavras constru\xeddo em cima de d3-cloud.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/word-cloud.md",slug:"/word-cloud",permalink:"/pt/docs/word-cloud",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/word-cloud.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612739298,sidebar_label:"Word Cloud",sidebar:"docs",previous:{title:"Violin Plot",permalink:"/pt/docs/plots/violinplot"},next:{title:"Decision Tree",permalink:"/pt/docs/models/decision-tree"}},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:c};function p(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},d,n,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Um componente de nuvem de palavras constru\xeddo em cima de ",Object(o.b)("a",{parentName:"p",href:"https://github.com/jasondavies/d3-cloud"},"d3-cloud"),"."),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"data")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array"),": ou um conjunto de textos a partir dos quais se pode gerar a palavra nuvem ou, se ",Object(o.b)("inlineCode",{parentName:"li"},"precalculado' est\xe1 definido para "),"verdadeiro', e um conjunto de objetos de contagem de palavras (com teclas de ",Object(o.b)("inlineCode",{parentName:"li"},"texto' e "),"valor'). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"font")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(string|function)"),": fun\xe7\xe3o acessor especificando a face da fonte para cada palavra. Tamb\xe9m aceita uma constante ao inv\xe9s de uma fun\xe7\xe3o. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"'serif'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"fontSizeMapper")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o acessor indicando o tamanho da fonte para cada palavra. O padr\xe3o \xe9 ",Object(o.b)("inlineCode",{parentName:"li"},"( contagem - min + 1 ) / ( max - min + 6 ) * 30,0 + 12,0', onde "),"min' e ",Object(o.b)("inlineCode",{parentName:"li"},"max' denotam o m\xednimo e o m\xe1ximo de palavras "),"contas', respectivamente. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"height")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": altura da palavra nuvem (em px). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"600"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"language")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": identificador do idioma (determina as palavras de parada a serem removidas). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"'en'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"minCount")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),': se definido, incluir apenas palavras que apare\xe7am mais do que "minCount" vezes nos dados fornecidos. Default: ',Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"saveButton")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": controla se deve ser exibido um bot\xe3o para salvar a palavra nuvem como uma imagem. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"true"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onClick")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o de chamada de retorno invocada quando uma palavra \xe9 clicada na nuvem da palavra. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onClick() {}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"padding")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(function|number)"),": fun\xe7\xe3o acessor ou constante indicando o preenchimento num\xe9rico de cada palavra. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"5"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"precalculated")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": controla se a palavra nuvem espera uma s\xe9rie de palavras pr\xe9-calculadas conta ou as gerar\xe1 para determinados textos. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"rotate")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(function|number)"),": fun\xe7\xe3o acessor indicando o \xe2ngulo de rota\xe7\xe3o (em graus) para cada palavra. Tamb\xe9m aceita uma constante ao inv\xe9s de uma fun\xe7\xe3o. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"word => word.value % 360"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"updateThreshold")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": tamanho do lote de novos documentos em ",Object(o.b)("inlineCode",{parentName:"li"},"dados")," antes que a palavra nuvem seja reenviada. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"5"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"stopwords")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array"),": palavras de parada adicionais para remover antes de tornar a palavra nuvem. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"triggerRender")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": quando o conjunto de dados \xe9 trocado. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"true"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"style")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object"),": Estilos em linha CSS. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"width")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": largura da palavra nuvem (em px). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"700"),".")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<WordCloud data={[\n    'This is my holiday', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is fine',\n    'Where is the butter',\n    'I am looking for a spoon',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A house for everybody'\n]} />\n")))}p.isMDXComponent=!0},406:function(e,a,n){"use strict";n.d(a,"a",(function(){return b})),n.d(a,"b",(function(){return s}));var t=n(0),r=n.n(t);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),p=function(e){var a=r.a.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},b=function(e){var a=p(e.components);return r.a.createElement(d.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),b=p(n),m=t,s=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return n?r.a.createElement(s,l(l({ref:a},d),{},{components:n})):r.a.createElement(s,l({ref:a},d))}));function s(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);