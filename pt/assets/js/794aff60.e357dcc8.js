(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{219:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(410)),i=n(443),l=n(444),c={id:"blockquote",title:"blockquote",sidebar_label:"blockquote"},s={unversionedId:"html/blockquote",id:"html/blockquote",isDocsHomePage:!1,title:"blockquote",description:"Componente que exibe uma cota\xe7\xe3o estendida.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/html/blockquote.md",slug:"/html/blockquote",permalink:"/pt/docs/html/blockquote",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/html/blockquote.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614809571,formattedLastUpdatedAt:"03/03/2021",sidebar_label:"blockquote",sidebar:"docs",previous:{title:"LaTeX Equations",permalink:"/pt/docs/tex"},next:{title:"div",permalink:"/pt/docs/html/div"}},u=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[]},{value:"Exemplos",id:"exemplos",children:[]}],b={toc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Componente que exibe uma cota\xe7\xe3o estendida."),Object(o.b)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"cite")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": fonte para a cita\xe7\xe3o. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"className")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": nome da classe. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"''"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"style")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object"),": Estilos em linha CSS. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(o.b)("h2",{id:"exemplos"},"Exemplos"),Object(o.b)(i.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Markdown",value:"withMarkdown"},{label:"Cite",value:"cite"},{label:"Styled",value:"styled"}],lazy:!0,mdxType:"Tabs"},Object(o.b)(l.a,{value:"minimal",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<blockquote>\nAfter all is said and done, more is said than done.\n</blockquote>\n"))),Object(o.b)(l.a,{value:"withMarkdown",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<blockquote>\n\n# A Markdown Quote\n\nAfter all is **said** and **done**, more is said than done. \n\n[Francis Crick](https://en.wikipedia.org/wiki/Francis_Crick)\n</blockquote>\n"))),Object(o.b)(l.a,{value:"cite",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<blockquote cite="https://de.wikipedia.org/wiki/Francis_Crick">\nAfter all is said and done, more is said than done.(Francis Crick)\n<p style={{ fontSize: 14, marginTop: 20}}>The cite property is just for search daemons</p>\n</blockquote>\n'))),Object(o.b)(l.a,{value:"styled",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<blockquote \n  style={{ color: 'red',\n    fontFamily: 'Palatino',\n    fontSize: 26, \n    fontStyle: 'italic',\n    background: 'gold',\n    borderLeft: '30px solid red',\n    quotes: \"red\"\n  }}\n>\n    After all is said and done, more is said than done.\n    <br />(Francis Crick)\n</blockquote>\n")))))}d.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,m=b["".concat(i,".").concat(p)]||b[p]||d[p]||o;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},434:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},440:function(e,t,n){"use strict";var a=n(0),r=n(441);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},441:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},443:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(440),i=n(434),l=n(57),c=n.n(l);const s=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:l,values:b,groupId:d,className:p}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(o.a)(),[v,O]=Object(a.useState)(l),j=a.Children.toArray(e.children),y=[];if(null!=d){const e=m[d];null!=e&&e!==v&&b.some((t=>t.value===e))&&O(e)}const g=e=>{const t=e.target,n=y.indexOf(t),a=j[n].props.value;O(a),null!=d&&(f(d,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:r}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:i}=window;return t>=0&&r<=i&&a<=o&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((()=>t.classList.remove(c.a.tabItemActive)),2e3))}),150))},h=e=>{var t;let n;switch(e.keyCode){case u:{const t=y.indexOf(e.target)+1;n=y[t]||y[0];break}case s:{const t=y.indexOf(e.target)-1;n=y[t]||y[y.length-1];break}}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},p)},b.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:v===e?0:-1,"aria-selected":v===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:e=>y.push(e),onKeyDown:h,onFocus:g,onClick:g},t)))),t?Object(a.cloneElement)(j.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}},444:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);