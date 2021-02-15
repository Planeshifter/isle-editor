(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{156:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return b}));var r=t(3),i=t(7),a=(t(0),t(406)),l={id:"timer",title:"Timer",sidebar_label:"Timer"},o={unversionedId:"timer",id:"timer",isDocsHomePage:!1,title:"Timer",description:"Zeigt einen Timer an, der einen vordefinierten Callback ausl\xf6st, wenn die Zeit abgelaufen ist. Ein Beispiel f\xfcr einen Anwendungsfall ist die Zeitmessung von Quizzen.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/timer.md",slug:"/timer",permalink:"/de/docs/timer",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/timer.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612738524,sidebar_label:"Timer",sidebar:"docs",previous:{title:"Runner",permalink:"/de/docs/runner"},next:{title:"Unveil",permalink:"/de/docs/unveil"}},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:c};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Zeigt einen Timer an, der einen vordefinierten Callback ausl\xf6st, wenn die Zeit abgelaufen ist. Ein Beispiel f\xfcr einen Anwendungsfall ist die Zeitmessung von Quizzen."),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"id")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": die eindeutige ",Object(a.b)("inlineCode",{parentName:"li"},"String"),"-ID f\xfcr den Timer. Wenn eine ID gesetzt ist, ist die Timer-Komponente \xfcber Seitenaktualisierungen hinweg best\xe4ndig. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"active")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean (required)"),": Flagge, die umgeschaltet werden kann, um den Timer zu starten oder zu pausieren. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"belowZero")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob der Timer weiterz\xe4hlt, nachdem die Dauer ersch\xf6pft ist. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"duration")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number (required)"),": Dauer in Sekunden f\xfcr den Timer. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"invisible")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob der Timer ausgeblendet werden soll. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"legend")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": Text, der vor dem Timer angezeigt wird. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"''"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"style")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onTimeUp")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": Callback, der aufgerufen wird, wenn der Timer abl\xe4uft. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onTimeUp() {}"),".")),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Timer \n    id='test-quiz'\n    active={true} \n    duration={50} \n    onTimeUp={() => {\n      alert( 'done' );\n    }}\n/>\n")))}b.isMDXComponent=!0},406:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),b=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=b(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=b(t),p=r,m=s["".concat(l,".").concat(p)]||s[p]||d[p]||a;return t?i.a.createElement(m,o(o({ref:n},u),{},{components:t})):i.a.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<a;u++)l[u]=t[u];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);