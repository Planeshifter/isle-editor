(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{224:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),i=n(7),a=(n(0),n(410)),o={id:"proptest2",title:"Two-Sample Proportion Test",sidebar_label:"Two-Sample Proportion Test"},l={unversionedId:"tests/proptest2",id:"tests/proptest2",isDocsHomePage:!1,title:"Two-Sample Proportion Test",description:"Zwei-Stichproben-Verh\xe4ltnis-Test.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/tests/proptest2.md",slug:"/tests/proptest2",permalink:"/de/docs/tests/proptest2",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tests/proptest2.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614613459,formattedLastUpdatedAt:"1.3.2021",sidebar_label:"Two-Sample Proportion Test",sidebar:"docs",previous:{title:"One-Sample Proportion Test",permalink:"/de/docs/tests/proptest"},next:{title:"Beacon Tooltip",permalink:"/de/docs/beacon-tooltip"}},c=[{value:"Optionen",id:"optionen",children:[]},{value:"Beispiele",id:"beispiele",children:[]}],p={toc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Zwei-Stichproben-Verh\xe4ltnis-Test."),Object(a.b)("h2",{id:"optionen"},"Optionen"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"data")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object (required)"),": Objekt von Werte-Arrays. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"var1")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": Name der ersten Variablen. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"success")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string (required)"),": Erfolgskategorie von ",Object(a.b)("inlineCode",{parentName:"li"},"var1"),". Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"var2")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(string|Factor)"),": Name der zweiten Variablen (",Object(a.b)("inlineCode",{parentName:"li"},"var2")," oder ",Object(a.b)("inlineCode",{parentName:"li"},"group")," muss angegeben werden). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"group")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(string|Factor)"),": Name der Gruppierungsvariable (",Object(a.b)("inlineCode",{parentName:"li"},"var2")," oder ",Object(a.b)("inlineCode",{parentName:"li"},"group")," m\xfcssen angegeben werden). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"alpha")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": Signifikanzniveau. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"0.05"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"direction")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": Testrichtung (entweder ",Object(a.b)("inlineCode",{parentName:"li"},"weniger"),", ",Object(a.b)("inlineCode",{parentName:"li"},"gr\xf6\xdfer"),", oder ",Object(a.b)("inlineCode",{parentName:"li"},"zweiseitig"),"). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'two-sided'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"diff")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": Unterschied unter H0. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"0"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"showDecision")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob angezeigt werden soll, wenn die Nullhypothese bei dem angegebenen Signifikanzniveau abgelehnt wird. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),".")),Object(a.b)("h2",{id:"beispiele"},"Beispiele"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<PropTest2\n    data={heartdisease} \n    var1="Drugs"\n    success={2}\n    group="Complications"\n/>\n')))}b.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),b=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),d=r,m=s["".concat(o,".").concat(d)]||s[d]||u[d]||a;return n?i.a.createElement(m,l(l({ref:t},p),{},{components:n})):i.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);