(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{191:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return u}));var i=t(3),r=t(7),a=(t(0),t(410)),l={id:"text-input",title:"Text Input",sidebar_label:"Text Input"},o={unversionedId:"input/text-input",id:"input/text-input",isDocsHomePage:!1,title:"Text Input",description:"Eine Komponente zur Texteingabe. Kann als Teil eines ISLE Dashboards oder eigenst\xe4ndig verwendet werden. Im letzteren Fall wollen Sie \xc4nderungen \xfcber das Attribut onChange behandeln oder den Wert \xfcber das Attribut bind an eine globale Variable binden.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/input/text.md",slug:"/input/text-input",permalink:"/de/docs/input/text-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/text.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614613459,formattedLastUpdatedAt:"1.3.2021",sidebar_label:"Text Input",sidebar:"docs",previous:{title:"Text Area",permalink:"/de/docs/input/text-area"},next:{title:"Voice Input",permalink:"/de/docs/input/voice-input"}},b=[{value:"Optionen",id:"optionen",children:[]},{value:"Beispiele",id:"beispiele",children:[]}],c={toc:b};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Eine Komponente zur Texteingabe. Kann als Teil eines ISLE Dashboards oder eigenst\xe4ndig verwendet werden. Im letzteren Fall wollen Sie \xc4nderungen \xfcber das Attribut ",Object(a.b)("inlineCode",{parentName:"p"},"onChange")," behandeln oder den Wert \xfcber das Attribut ",Object(a.b)("inlineCode",{parentName:"p"},"bind")," an eine globale Variable binden."),Object(a.b)("h2",{id:"optionen"},"Optionen"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"bind")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": Name der globalen Variablen, der die Nummer zugewiesen werden soll. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"defaultValue")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": Wert, der den Standardwert des Eingangs beim Start angibt. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"''"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"value")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": Textwert (f\xfcr gesteuerte Komponente). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"legend")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(string|node)"),": String, der den neben der Zahleneingabe angezeigten Text angibt. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"''"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"inline")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": Gibt an, ob die Eingabe inline angezeigt wird. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onBlur")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": Callback-Funktion, die aufgerufen wird, wenn der Textbereich den Fokus verliert. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onBlur() {}"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onChange")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": Funktion, die aufgerufen wird, wenn ein Textwert ge\xe4ndert wird. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onKeyDown")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": Callback-Funktion, die aufgerufen wird, wenn eine beliebige Taste gedr\xfcckt wird. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onKeyDown() {}"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onKeyPress")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": Callback-Funktion, die aufgerufen wird, wenn eine beliebige Taste eingegeben wird. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onKeyPress() {}"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onKeyUp")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": Callback-Funktion, die aufgerufen wird, wenn die Taste losgelassen wird. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onKeyUp() {}"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"placeholder")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": String, der den Wert angibt, der vor einer ersten Auswahl angezeigt werden soll. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"width")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": Zahl, die die Breite des Eingangs in Pixeln angibt. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"80"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"style")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(a.b)("h2",{id:"beispiele"},"Beispiele"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<TextInput\n    legend="Your name"\n    defaultValue="Enter text"\n/>\n')))}u.isMDXComponent=!0},410:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),u=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),d=u(t),s=i,m=d["".concat(l,".").concat(s)]||d[s]||p[s]||a;return t?r.a.createElement(m,o(o({ref:n},c),{},{components:t})):r.a.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=s;var o={};for(var b in n)hasOwnProperty.call(n,b)&&(o[b]=n[b]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=t[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);