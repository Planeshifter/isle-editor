(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{194:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return m}));var a,r=n(3),o=n(7),i=(n(0),n(410)),l=n(446),c=n(447),b={id:"text-area",title:"Text Area",sidebar_label:"Text Area"},s={unversionedId:"input/text-area",id:"input/text-area",isDocsHomePage:!1,title:"Text Area",description:"Komponent obszaru tekstowego. U\u017cywany jako samodzielny komponent, zmiany powinny by\u0107 obs\u0142ugiwane za pomoc\u0105 atrybutu onChange.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/input/text-area.md",slug:"/input/text-area",permalink:"/pl/docs/input/text-area",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/text-area.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614811488,formattedLastUpdatedAt:"3.03.2021",sidebar_label:"Text Area",sidebar:"docs",previous:{title:"Slider Input",permalink:"/pl/docs/input/slider-input"},next:{title:"Text Input",permalink:"/pl/docs/input/text-input"}},u=[{value:"Opcje",id:"opcje",children:[]},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[]},{value:"Examples",id:"examples",children:[]}],p=(a="TextArea",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),d={toc:u};function m(e){var t,n=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,a,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Komponent obszaru tekstowego. U\u017cywany jako samodzielny komponent, zmiany powinny by\u0107 obs\u0142ugiwane za pomoc\u0105 atrybutu ",Object(i.b)("inlineCode",{parentName:"p"},"onChange"),"."),Object(i.b)("h2",{id:"opcje"},"Opcje"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"defaultValue")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": warto\u015b\u0107 domy\u015blna obszaru tekstowego. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"value")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": warto\u015b\u0107 tekstowa (dla sk\u0142adnika kontrolowanego). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"disabled")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy pole tekstowe jest wy\u0142\u0105czone. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"legend")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|node)"),": tekst legendy. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onBlur")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": funkcja callback wywo\u0142ywana w przypadku utraty ostro\u015bci obszaru tekstowego. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onBlur() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onChange")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": funkcja callback wywo\u0142ywana z nowym tekstem, gdy tekst obszaru ulegnie zmianie. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"placeholder")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": tekst dla posiadacza miejsca zamieszkania. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"resizable")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),': kontroluje, czy obszar tekstowy jest zmienny (mo\u017ce by\u0107 zar\xf3wno "obu", "poziomy", "pionowy" lub "\u017caden"). Default: ',Object(i.b)("inlineCode",{parentName:"li"},"'none'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"rows")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": liczba rz\u0119d\xf3w. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"5"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(i.b)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)(l.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Custom Style",value:"customStyle"}],lazy:!0,mdxType:"Tabs"},Object(i.b)(c.a,{value:"minimal",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<TextArea\n    legend="Please enter a few sentences"\n    placeholder="Enter text"\n/>\n'))),Object(i.b)(c.a,{value:"customStyle",mdxType:"TabItem"},Object(i.b)(p,{legend:"Please enter a few sentences",placeholder:"Enter text",style:(t={fontSize:33,fontFamily:"Georgia",boxShadow:"0 0 4px black",background:"rgb(238,174,202)"},t.background="radial-gradient(circle, rgba(255, 255, 0, 0.3) 44%, white 100%)",t),mdxType:"TextArea"}))))}m.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return n?r.a.createElement(m,l(l({ref:t},b),{},{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},435:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},441:function(e,t,n){"use strict";var a=n(0),r=n(442);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},442:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},446:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(441),i=n(435),l=n(58),c=n.n(l);const b=37,s=39;t.a=function(e){const{lazy:t,block:n,defaultValue:l,values:u,groupId:p,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(o.a)(),[y,j]=Object(a.useState)(l),O=a.Children.toArray(e.children),g=[];if(null!=p){const e=m[p];null!=e&&e!==y&&u.some((t=>t.value===e))&&j(e)}const v=e=>{const t=e.target,n=g.indexOf(t),a=O[n].props.value;j(a),null!=p&&f(p,a)},w=e=>{var t;let n;switch(e.keyCode){case s:const t=g.indexOf(e.target)+1;n=g[t]||g[0];break;case b:const a=g.indexOf(e.target)-1;n=g[a]||g[g.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},u.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===e}),key:e,ref:e=>g.push(e),onKeyDown:w,onFocus:v,onClick:v},t)))),t?Object(a.cloneElement)(O.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},O.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}},447:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);