(window.webpackJsonp=window.webpackJsonp||[]).push([[1243],{268:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(410)),o=n(447),i=n(448),c={id:"hr",title:"hr",sidebar_label:"hr"},s={unversionedId:"html/hr",id:"html/hr",isDocsHomePage:!1,title:"hr",description:"Regra horizontal que define uma ruptura tem\xe1tica no documento.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/html/hr.md",slug:"/html/hr",permalink:"/pt/docs/html/hr",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/html/hr.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"hr",sidebar:"docs",previous:{title:"div",permalink:"/pt/docs/html/div"},next:{title:"p",permalink:"/pt/docs/html/p"}},u=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[]},{value:"Exemplos",id:"exemplos",children:[]}],b={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Regra horizontal que define uma ruptura tem\xe1tica no documento."),Object(l.b)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"className")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": nome da classe. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"style")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": Estilos em linha CSS. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(l.b)("h2",{id:"exemplos"},"Exemplos"),Object(l.b)(o.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With CSS",value:"withCSS"},{label:"Dashed Line",value:"dashedLine"},{label:"Dotted Line",value:"dottedLine"}],lazy:!0,mdxType:"Tabs"},Object(l.b)(i.a,{value:"minimal",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"    <hr />\n"))),Object(l.b)(i.a,{value:"withCSS",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<hr style={{\n  border: '20px solid black',\n  borderRadius: '5px'\n}}/>\n"))),Object(l.b)(i.a,{value:"dashedLine",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<hr style={{\n  background: 'transparent',\n  border: '2px dashed black',\n}}/>\n"))),Object(l.b)(i.a,{value:"dottedLine",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<hr style={{\n  background: 'transparent',\n  border: '2px dotted red',\n}}/>\n")))))}p.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||l;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},435:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},444:function(e,t,n){"use strict";var r=n(0),a=n(445);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},445:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},447:function(e,t,n){"use strict";var r=n(0),a=n.n(r),l=n(444),o=n(435),i=n(58),c=n.n(i);const s=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:i,values:b,groupId:p,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(l.a)(),[v,O]=Object(r.useState)(i),h=r.Children.toArray(e.children),j=[];if(null!=p){const e=m[p];null!=e&&e!==v&&b.some((t=>t.value===e))&&O(e)}const y=e=>{const t=e.target,n=j.indexOf(t),r=h[n].props.value;O(r),null!=p&&f(p,r)},g=e=>{var t;let n;switch(e.keyCode){case u:const t=j.indexOf(e.target)+1;n=j[t]||j[0];break;case s:const r=j.indexOf(e.target)-1;n=j[r]||j[j.length-1]}null===(t=n)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},b.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:v===e?0:-1,"aria-selected":v===e,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:e=>j.push(e),onKeyDown:g,onFocus:y,onClick:y},t)))),t?Object(r.cloneElement)(h.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}},448:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function({children:e,hidden:t,className:n}){return a.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);