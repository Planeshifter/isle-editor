(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{182:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(410)),i={id:"timer",title:"Timer",sidebar_label:"Timer"},l={unversionedId:"timer",id:"timer",isDocsHomePage:!1,title:"Timer",description:"Exibe um timer que acionar\xe1 uma chamada de retorno pr\xe9-definida quando o tempo acabar. Um exemplo de caso de uso \xe9 o tempo dos question\xe1rios.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/timer.md",slug:"/timer",permalink:"/pt/docs/timer",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/timer.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21/02/2021",sidebar_label:"Timer",sidebar:"docs",previous:{title:"Runner",permalink:"/pt/docs/runner"},next:{title:"Unveil",permalink:"/pt/docs/unveil"}},c=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[]},{value:"Exemplos",id:"exemplos",children:[]}],p={toc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Exibe um timer que acionar\xe1 uma chamada de retorno pr\xe9-definida quando o tempo acabar. Um exemplo de caso de uso \xe9 o tempo dos question\xe1rios."),Object(o.b)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"id")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),': a identifica\xe7\xe3o \xfanica "string" para o temporizador. Se um ID for definido, o componente do temporizador \xe9 persistente ao longo da p\xe1gina.. Default: ',Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"active")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean (required)"),": bandeira que pode ser hasteada para iniciar ou pausar o temporizador. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"belowZero")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": controla se o temporizador continua contando depois de esgotada a dura\xe7\xe3o. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"duration")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number (required)"),": dura\xe7\xe3o em segundos para o temporizador. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"invisible")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": controla se o temporizador deve ser escondido. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"legend")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": texto exibido na frente do temporizador. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"''"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"style")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object"),": Estilos em linha CSS. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onTimeUp")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": chamada de retorno invocada quando o cron\xf4metro se esgota. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onTimeUp() {}"),".")),Object(o.b)("h2",{id:"exemplos"},"Exemplos"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Timer \n    id='test-quiz'\n    active={true} \n    duration={50} \n    onTimeUp={() => {\n      alert( 'done' );\n    }}\n/>\n")))}d.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,s=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(s,l(l({ref:t},p),{},{components:n})):a.a.createElement(s,l({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);