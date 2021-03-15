(window.webpackJsonp=window.webpackJsonp||[]).push([[1272],{294:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),o=(a(0),a(410)),i={id:"tex",title:"LaTeX Equations",sidebar_label:"LaTeX Equations"},l={unversionedId:"tex",id:"tex",isDocsHomePage:!1,title:"LaTeX Equations",description:"O TeX \xe9 um elemento ISLE que pode ser utilizado para exibir as equa\xe7\xf5es do LaTeX. Sob o cap\xf4, o componente utiliza KaTeX para uma renderiza\xe7\xe3o flamejante e r\xe1pida.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/tex.md",slug:"/tex",permalink:"/pt/docs/tex",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tex.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21/02/2021",sidebar_label:"LaTeX Equations",sidebar:"docs",previous:{title:"Link",permalink:"/pt/docs/link"},next:{title:"blockquote",permalink:"/pt/docs/html/blockquote"}},c=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[]},{value:"Exemplos",id:"exemplos",children:[]}],p={toc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"O ",Object(o.b)("inlineCode",{parentName:"p"},"TeX")," \xe9 um elemento ISLE que pode ser utilizado para exibir as equa\xe7\xf5es do LaTeX. Sob o cap\xf4, o componente utiliza ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Khan/KaTeX"},"KaTeX")," para uma renderiza\xe7\xe3o flamejante e r\xe1pida."),Object(o.b)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"raw")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(string|number) (required)"),": O literal LaTeX ",Object(o.b)("inlineCode",{parentName:"li"},"string")," para renderizar. Tamb\xe9m aceita ",Object(o.b)("inlineCode",{parentName:"li"},"numbers'.. Default: "),"none`."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"displayMode")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),': "booleano" indicando se a equa\xe7\xe3o deve ser exibida em linha ou em modo de exibi\xe7\xe3o. Default: ',Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"numbered")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": controla se deve ser exibido um n\xfamero de equa\xe7\xe3o para as equa\xe7\xf5es do modo de exibi\xe7\xe3o. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"style")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object"),": ",Object(o.b)("inlineCode",{parentName:"li"},"objeto")," com pares de valores-chave CSS a serem aplicados ao recipiente da equa\xe7\xe3o. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"tag")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": Caracteres personalizados exibidos para equa\xe7\xf5es de exibi\xe7\xe3o no lado direito. Padr\xf5es para o n\xfamero da equa\xe7\xe3o dentro da li\xe7\xe3o. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"elems")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object"),': "Objeto" com "chaves" indicando caracteres LaTeX e seus valores correspondentes sendo "objetos" de configura\xe7\xe3o para torn\xe1-los interativos. A configura\xe7\xe3o de uma op\xe7\xe3o ',Object(o.b)("inlineCode",{parentName:"li"},"tooltip"),' mostrar\xe1 uma dica de ferramenta quando pairando sobre os caracteres LaTeX. A configura\xe7\xe3o de uma propriedade "vari\xe1vel" exibir\xe1 uma barra deslizante de entrada para mudar a respectiva vari\xe1vel de estado; neste caso, propriedades adicionais "legenda", "min", "max" e "passo" s\xe3o suportadas.. Default: ',Object(o.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"popoverPlacement")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": posi\xe7\xe3o popover para os ",Object(o.b)("inlineCode",{parentName:"li"},"elems")," especificados (ou ",Object(o.b)("inlineCode",{parentName:"li"},"cabe\xe7ar"),", ",Object(o.b)("inlineCode",{parentName:"li"},"direita"),", ",Object(o.b)("inlineCode",{parentName:"li"},"bottom"),", ou ",Object(o.b)("inlineCode",{parentName:"li"},"esquerda"),"). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"'top'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onPopover")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": quando um popover de controle \xe9 ligado ou desligado; recebe o status de exibi\xe7\xe3o como um booleano como seu \xfanico argumento. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onPopover() {}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onClick")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": chamada de retorno ",Object(o.b)("inlineCode",{parentName:"li"},"fun\xe7\xe3o")," invocada sempre que um usu\xe1rio clica na equa\xe7\xe3o. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),".")),Object(o.b)("h2",{id:"exemplos"},"Exemplos"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<TeX\n    raw="2 + 3 = 5"\n    displayMode={true}\n/>\n')))}b.isMDXComponent=!0},410:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=b(a),u=n,m=d["".concat(i,".").concat(u)]||d[u]||s[u]||o;return a?r.a.createElement(m,l(l({ref:t},p),{},{components:a})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);