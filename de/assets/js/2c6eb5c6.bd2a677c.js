(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),r=(n(0),n(410)),l=n(443),o=n(444),c={id:"pages",title:"Pages",sidebar_label:"Pages"},s={unversionedId:"pages",id:"pages",isDocsHomePage:!1,title:"Pages",description:"Eine ISLE-Paginierungskomponente, die es dem Benutzer erm\xf6glicht, durch eine Folge von Seiten zu bl\xe4ttern.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/pages.md",slug:"/pages",permalink:"/de/docs/pages",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/pages.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21.2.2021",sidebar_label:"Pages",sidebar:"docs",previous:{title:"IFrame",permalink:"/de/docs/iframe"},next:{title:"Panel",permalink:"/de/docs/panel"}},u=[{value:"Optionen",id:"optionen",children:[]},{value:"Beispiele",id:"beispiele",children:[]}],b={toc:u};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Eine ISLE-Paginierungskomponente, die es dem Benutzer erm\xf6glicht, durch eine Folge von Seiten zu bl\xe4ttern."),Object(r.b)("h2",{id:"optionen"},"Optionen"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"activePage")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": aktive Seite. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"1"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"disabled")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob die Navigationsleiste aktiv ist oder nicht. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"title")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": angezeigter Titel des Seitencontainers. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"pagination")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),': ob die Paginierung entweder "oben", "unten" oder "beides" angezeigt werden soll. Default: ',Object(r.b)("inlineCode",{parentName:"li"},"'top'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"size")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": Gr\xf6\xdfe der Paginierungsschaltfl\xe4chen (entweder ",Object(r.b)("inlineCode",{parentName:"li"},"default"),", ",Object(r.b)("inlineCode",{parentName:"li"},"lg"),", oder ",Object(r.b)("inlineCode",{parentName:"li"},"sm"),"). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'default'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"height")," | ",Object(r.b)("inlineCode",{parentName:"li"},"(number|string)"),": die maximale H\xf6he des Containers. Wenn eine eingebettete Seite h\xf6her ist, wird eine vertikale Bildlaufleiste hinzugef\xfcgt. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"voiceID")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": Kennung der Sprachsteuerung. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"style")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onSelect")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": Funktion, die aufgerufen wird, wenn der aktive Wechsel ge\xe4ndert wird. Erh\xe4lt den neuen aktiven Seitenindex als einzigen Parameter. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onSelect() {}"),".")),Object(r.b)("h2",{id:"beispiele"},"Beispiele"),Object(r.b)(l.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Custom Pagination",value:"customPagination"},{label:"With CSS",value:"withCSS"}],lazy:!0,mdxType:"Tabs"},Object(r.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Pages title="Pages" >\n    <div>\n        <h1>First Page</h1>\n    </div>\n    <div>\n        <h1>Second Page</h1>\n    </div>\n    <div>\n        <h1>Third Page</h1>\n    </div>\n</Pages>\n'))),Object(r.b)(o.a,{value:"customPagination",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Pages title="Questions" pagination="both" size="sm" >\n    <div>\n        <NumberQuestion\n            question="What is the number PI (at least up to three digits after the decimal point)?"\n            solution={Math.PI}\n            digits={3}\n        />\n    </div>\n    <div>\n        <FreeTextQuestion \n            question="Is this question displayed on the second page?"\n            solution="Yes" \n        />\n    </div>\n</Pages>\n'))),Object(r.b)(o.a,{value:"withCSS",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Pages \n    activePage={2}\n    style={{ background: 'lightblue', height: 420, outline: '4px solid black' }} \n    title=\"Styled Pages\"\n>\n    <div>\n        <h1>First Page</h1>\n    </div>\n    <div>\n        <h1>Second Page</h1>\n    </div>\n    <div>\n        <h1>Third Page</h1>\n    </div>\n</Pages>\n")))))}d.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,m=b["".concat(l,".").concat(p)]||b[p]||d[p]||r;return n?i.a.createElement(m,o(o({ref:t},s),{},{components:n})):i.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},434:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},440:function(e,t,n){"use strict";var a=n(0),i=n(441);t.a=function(){const e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},441:function(e,t,n){"use strict";var a=n(0);const i=Object(a.createContext)(void 0);t.a=i},443:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(440),l=n(434),o=n(57),c=n.n(o);const s=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:b,groupId:d,className:p}=e,{tabGroupChoices:m,setTabGroupChoices:g}=Object(r.a)(),[f,O]=Object(a.useState)(o),v=a.Children.toArray(e.children),j=[];if(null!=d){const e=m[d];null!=e&&e!==f&&b.some((t=>t.value===e))&&O(e)}const h=e=>{const t=e.target,n=j.indexOf(t),a=v[n].props.value;O(a),null!=d&&(g(d,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:i}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:l}=window;return t>=0&&i<=l&&a<=r&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((()=>t.classList.remove(c.a.tabItemActive)),2e3))}),150))},y=e=>{var t;let n;switch(e.keyCode){case u:{const t=j.indexOf(e.target)+1;n=j[t]||j[0];break}case s:{const t=j.indexOf(e.target)-1;n=j[t]||j[j.length-1];break}}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},p)},b.map((({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>j.push(e),onKeyDown:y,onFocus:h,onClick:h},t)))),t?Object(a.cloneElement)(v.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},444:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function({children:e,hidden:t,className:n}){return i.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);