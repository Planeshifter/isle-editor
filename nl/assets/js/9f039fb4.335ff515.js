(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{224:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return m}));var a,r=n(3),i=n(7),l=(n(0),n(410)),o=n(447),c=n(448),b={id:"text-area",title:"Text Area",sidebar_label:"Text Area"},s={unversionedId:"input/text-area",id:"input/text-area",isDocsHomePage:!1,title:"Text Area",description:"Een tekstveldonderdeel. Gebruikt als een stand-alone component, moeten wijzigingen worden afgehandeld via het on-Change attribuut.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/input/text-area.md",slug:"/input/text-area",permalink:"/nl/docs/input/text-area",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/text-area.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614811488,sidebar_label:"Text Area",sidebar:"docs",previous:{title:"Slider Input",permalink:"/nl/docs/input/slider-input"},next:{title:"Text Input",permalink:"/nl/docs/input/text-input"}},u=[{value:"Opties",id:"opties",children:[]},{value:"Voorbeelden",id:"voorbeelden",children:[]},{value:"Examples",id:"examples",children:[]}],d=(a="TextArea",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),p={toc:u};function m(e){var t,n=e.components,a=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,a,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Een tekstveldonderdeel. Gebruikt als een stand-alone component, moeten wijzigingen worden afgehandeld via het ",Object(l.b)("inlineCode",{parentName:"p"},"on-Change")," attribuut."),Object(l.b)("h2",{id:"opties"},"Opties"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"defaultValue")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": standaardwaarde van het tekstgebied. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"value")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": tekstwaarde (voor gecontroleerde component). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"disabled")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controleert of de tekstzone wordt uitgeschakeld. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"legend")," | ",Object(l.b)("inlineCode",{parentName:"li"},"(string|node)"),": legendatekst. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onBlur")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": terugbelfunctie die wordt aangeroepen wanneer het tekstgebied zijn focus verliest. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onBlur() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onChange")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": terugbelfunctie die met de nieuwe tekst wordt aangeroepen wanneer de gebiedstekst verandert. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"placeholder")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": plaatshoudertekst. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"resizable")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": bepaalt of het tekstgebied aanpasbaar is (kan zowel ",Object(l.b)("inlineCode",{parentName:"li"},"beide"),", ",Object(l.b)("inlineCode",{parentName:"li"},"horizontaal"),", ",Object(l.b)("inlineCode",{parentName:"li"},"verticaal")," of ",Object(l.b)("inlineCode",{parentName:"li"},"niet")," zijn). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"'none'"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"rows")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": aantal rijen. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"5"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"style")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": CSS inline-stijlen. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(l.b)("h2",{id:"voorbeelden"},"Voorbeelden"),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)(o.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Custom Style",value:"customStyle"}],lazy:!0,mdxType:"Tabs"},Object(l.b)(c.a,{value:"minimal",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<TextArea\n    legend="Please enter a few sentences"\n    placeholder="Enter text"\n/>\n'))),Object(l.b)(c.a,{value:"customStyle",mdxType:"TabItem"},Object(l.b)(d,{legend:"Please enter a few sentences",placeholder:"Enter text",style:(t={fontSize:33,fontFamily:"Georgia",boxShadow:"0 0 4px black",background:"rgb(238,174,202)"},t.background="radial-gradient(circle, rgba(255, 255, 0, 0.3) 44%, white 100%)",t),mdxType:"TextArea"}))))}m.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(n),p=a,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return n?r.a.createElement(m,o(o({ref:t},b),{},{components:n})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<i;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},435:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},444:function(e,t,n){"use strict";var a=n(0),r=n(445);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},445:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},447:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(444),l=n(435),o=n(58),c=n.n(o);const b=37,s=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:u,groupId:d,className:p}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(i.a)(),[O,j]=Object(a.useState)(o),g=a.Children.toArray(e.children),v=[];if(null!=d){const e=m[d];null!=e&&e!==O&&u.some((t=>t.value===e))&&j(e)}const y=e=>{const t=e.target,n=v.indexOf(t),a=g[n].props.value;j(a),null!=d&&f(d,a)},N=e=>{var t;let n;switch(e.keyCode){case s:const t=v.indexOf(e.target)+1;n=v[t]||v[0];break;case b:const a=v.indexOf(e.target)-1;n=v[a]||v[v.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},p)},u.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>v.push(e),onKeyDown:N,onFocus:y,onClick:y},t)))),t?Object(a.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},448:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);