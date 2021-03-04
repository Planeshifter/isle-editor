(window.webpackJsonp=window.webpackJsonp||[]).push([[1252],{277:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),a=(n(0),n(410)),o={id:"timer",title:"Timer",sidebar_label:"Timer"},l={unversionedId:"timer",id:"timer",isDocsHomePage:!1,title:"Timer",description:"Wy\u015bwietla timer, kt\xf3ry po up\u0142yni\u0119ciu czasu wyzwoli predefiniowane wywo\u0142anie zwrotne. Przyk\u0142adowym przypadkiem u\u017cycia jest czas trwania quiz\xf3w.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/timer.md",slug:"/timer",permalink:"/pl/docs/timer",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/timer.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Timer",sidebar:"docs",previous:{title:"Runner",permalink:"/pl/docs/runner"},next:{title:"Unveil",permalink:"/pl/docs/unveil"}},c=[{value:"Opcje",id:"opcje",children:[]},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[]}],u={toc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Wy\u015bwietla timer, kt\xf3ry po up\u0142yni\u0119ciu czasu wyzwoli predefiniowane wywo\u0142anie zwrotne. Przyk\u0142adowym przypadkiem u\u017cycia jest czas trwania quiz\xf3w."),Object(a.b)("h2",{id:"opcje"},"Opcje"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"id")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": unikalny ",Object(a.b)("inlineCode",{parentName:"li"},"numer identyfikacyjny strun")," dla timera. Je\u015bli ID jest ustawione, komponent timera jest stale od\u015bwie\u017cany nad stron\u0105.. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"active")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean (required)"),": flaga, kt\xf3ra mo\u017ce by\u0107 prze\u0142\u0105czana w celu uruchomienia lub wstrzymania timera. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"belowZero")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy po wyczerpaniu czasu trwania liczenia licznik kontynuuje liczenie. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"duration")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number (required)"),": czas trwania w sekundach dla timera. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"invisible")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy zegar powinien by\u0107 ukryty. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"legend")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": tekst wy\u015bwietlany przed zegarem steruj\u0105cym. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"''"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"style")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onTimeUp")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": wywo\u0142anie zwrotne, gdy sko\u0144czy si\u0119 timer. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onTimeUp() {}"),".")),Object(a.b)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Timer \n    id='test-quiz'\n    active={true} \n    duration={50} \n    onTimeUp={() => {\n      alert( 'done' );\n    }}\n/>\n")))}p.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=p(n),s=r,d=b["".concat(o,".").concat(s)]||b[s]||m[s]||a;return n?i.a.createElement(d,l(l({ref:t},u),{},{components:n})):i.a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);