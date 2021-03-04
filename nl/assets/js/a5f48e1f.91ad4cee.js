(window.webpackJsonp=window.webpackJsonp||[]).push([[1206],{232:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var r=t(3),a=t(7),i=(t(0),t(410)),o={id:"gate",title:"Gate",sidebar_label:"Gate"},l={unversionedId:"gate",id:"gate",isDocsHomePage:!1,title:"Gate",description:"Een ISLE-component die het mogelijk maakt om zijn kinderen alleen aan een gereserveerd publiek te tonen.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/gate.md",slug:"/gate",permalink:"/nl/docs/gate",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/gate.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Gate",sidebar:"docs",previous:{title:"Feedback Buttons",permalink:"/nl/docs/feedback"},next:{title:"Text Editor",permalink:"/nl/docs/text-editor"}},c=[{value:"Opties",id:"opties",children:[]},{value:"Voorbeelden",id:"voorbeelden",children:[]}],b={toc:c};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Een ISLE-component die het mogelijk maakt om zijn kinderen alleen aan een gereserveerd publiek te tonen."),Object(i.b)("h2",{id:"opties"},"Opties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"user")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": wanneer de gated content wordt weergegeven aan gebruikers. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"notUser")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": wanneer de gated content is ingesteld wordt ",Object(i.b)("strong",{parentName:"li"},"niet")," weergegeven aan gebruikers. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"enrolled")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": wanneer de gated content wordt weergegeven aan de studenten die zijn ingeschreven in de cursus.. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"notEnrolled")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": wanneer de gated content is ingesteld, wordt ",Object(i.b)("strong",{parentName:"li"},"niet")," weergegeven aan de studenten die zijn ingeschreven voor de cursus.. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"owner")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": wanneer de gated content wordt weergegeven aan de eigenaar van de cursus (meestal de instructeur). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"notOwner")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": wanneer de gated content is ingesteld wordt ",Object(i.b)("strong",{parentName:"li"},"niet")," weergegeven aan de eigenaar van de cursus (meestal de instructeur). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"after")," | ",Object(i.b)("inlineCode",{parentName:"li"},"Date"),": tijd waarna de inhoud van de poort zichtbaar moet worden. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"until")," | ",Object(i.b)("inlineCode",{parentName:"li"},"Date"),": tijd tot de inhoud van de poort zichtbaar blijft. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"banner")," | ",Object(i.b)("inlineCode",{parentName:"li"},"node"),": een bericht dat wordt getoond aan de bezoekers voor wie de kinderen van de poort niet zichtbaar zijn vanwege het ontbreken van privileges.. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"disabled")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": als een poort is uitgeschakeld, zal de banner worden weergegeven, wat er ook gebeurt.... Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"showOwnerInPresentationMode")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controleert of de inhoud van de poort in de presentatiemodus wordt weergegeven wanneer de poort zichtbaar is voor ",Object(i.b)("inlineCode",{parentName:"li"},"eigenaars'.. Default: "),"false`."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"check")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": callback functie die een ",Object(i.b)("inlineCode",{parentName:"li"},"boolean")," retourneert en aangeeft of het hekje kinderonderdelen moet weergeven; de functie wordt aangeroepen wanneer de sessie-acties aankomen. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),".")),Object(i.b)("h2",{id:"voorbeelden"},"Voorbeelden"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate \n    banner={<h2>You have to be logged in to see the content</h2>}\n    user \n>\n    <h1>For users only</h1>\n</Gate>\n")))}d.isMDXComponent=!0},410:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),d=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=d(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=d(t),u=r,m=s["".concat(o,".").concat(u)]||s[u]||p[u]||i;return t?a.a.createElement(m,l(l({ref:n},b),{},{components:t})):a.a.createElement(m,l({ref:n},b))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<i;b++)o[b]=t[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);