(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),i=(n(0),n(410)),l=n(446),c=n(447),o={id:"iframe",title:"IFrame",sidebar_label:"IFrame"},s={unversionedId:"iframe",id:"iframe",isDocsHomePage:!1,title:"IFrame",description:"\u4e00\u4e2aiFrame\u7ec4\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/iframe.md",slug:"/iframe",permalink:"/zh/docs/iframe",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/iframe.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"2021/2/21",sidebar_label:"IFrame",sidebar:"docs",previous:{title:"Accordion",permalink:"/zh/docs/accordion"},next:{title:"Pages",permalink:"/zh/docs/pages"}},u=[{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],b={toc:u};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u4e00\u4e2aiFrame\u7ec4\u4ef6\u3002"),Object(i.b)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"src")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string (required)"),": \u6e90\u7f51\u5740. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"fullscreen")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u662f\u5426\u5728\u5168\u5c4f\u6a21\u5f0f\u4e0b\u663e\u793aiFrame\u3002. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"title")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": iFrame\u6807\u9898. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'An iFrame'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"width")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": iFrame\u5bbd\u5ea6(\u5355\u4f4d\uff1apx). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"900"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"height")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": iFrame\u9ad8\u5ea6(\u5355\u4f4d\uff1apx). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"600"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"className")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u73ed\u540d. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": CSS\u5185\u8054\u6837\u5f0f. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(i.b)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),Object(i.b)(l.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Controlled Size",value:"controlledSize"},{label:"Custom CSS",value:"withCSS"}],lazy:!0,mdxType:"Tabs"},Object(i.b)(c.a,{value:"minimal",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<IFrame src="https://wikipedia.org" />\n'))),Object(i.b)(c.a,{value:"controlledSize",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<IFrame src="https://wikipedia.org" \n  width={600} \n  height={400} \n/>\n'))),Object(i.b)(c.a,{value:"withCSS",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<IFrame src=\"https://wikipedia.org\" \n    width={600} \n    height={600} \n    style={{ outline: '10px solid black' }}\n/>\n")))))}m.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,d=b["".concat(l,".").concat(p)]||b[p]||m[p]||i;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},435:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},441:function(e,t,n){"use strict";var a=n(0),r=n(442);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},442:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},446:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(441),l=n(435),c=n(58),o=n.n(c);const s=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:c,values:b,groupId:m,className:p}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(i.a)(),[O,j]=Object(a.useState)(c),v=a.Children.toArray(e.children),g=[];if(null!=m){const e=d[m];null!=e&&e!==O&&b.some((t=>t.value===e))&&j(e)}const y=e=>{const t=e.target,n=g.indexOf(t),a=v[n].props.value;j(a),null!=m&&f(m,a)},h=e=>{var t;let n;switch(e.keyCode){case u:const t=g.indexOf(e.target)+1;n=g[t]||g[0];break;case s:const a=g.indexOf(e.target)-1;n=g[a]||g[g.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},p)},b.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(l.a)("tabs__item",o.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>g.push(e),onKeyDown:h,onFocus:y,onClick:y},t)))),t?Object(a.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},447:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);