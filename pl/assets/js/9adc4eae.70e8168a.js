(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{235:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var i=n(3),r=n(7),a=(n(0),n(406)),o={id:"distribution-negative-binomial",title:"Negative Binomial Distribution",sidebar_label:"Negative Binomial Distribution"},l={unversionedId:"learn/distribution-negative-binomial",id:"learn/distribution-negative-binomial",isDocsHomePage:!1,title:"Negative Binomial Distribution",description:"Komponent edukacyjny do obliczania prawdopodobie\u0144stwa ujemnego rozk\u0142adu dwumianowego.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/learn/distribution-negative-binomial.md",slug:"/learn/distribution-negative-binomial",permalink:"/pl/docs/learn/distribution-negative-binomial",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-negative-binomial.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612739298,sidebar_label:"Negative Binomial Distribution",sidebar:"docs",previous:{title:"Hypergeometric Distribution",permalink:"/pl/docs/learn/distribution-hypergeometric"},next:{title:"Normal Distribution",permalink:"/pl/docs/learn/distribution-normal"}},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Komponent edukacyjny do obliczania prawdopodobie\u0144stwa ujemnego rozk\u0142adu dwumianowego."),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"countTrials")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": ustawiona jako prawdziwa, je\u017celi zamiast liczy\u0107 liczb\u0119 niepowodze\u0144 do momentu osi\u0105gni\u0119cia r-tego sukcesu, zmienna losowa z ujemnego rozk\u0142adu dwumianowego powinna by\u0107 okre\u015blona jako liczba pr\xf3b do momentu osi\u0105gni\u0119cia r-tego sukcesu. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"step")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(number|string)"),": wielko\u015b\u0107 kroku wej\u015bcia przewijania. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"0.01"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"style")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnNegativeBinomialDistribution />\n")))}s.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||a;return n?r.a.createElement(m,l(l({ref:t},u),{},{components:n})):r.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);