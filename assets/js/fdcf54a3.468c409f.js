(window.webpackJsonp=window.webpackJsonp||[]).push([[1281],{306:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),l=(n(0),n(410)),i=n(447),o=n(448),c={id:"seal",title:"Seal",sidebar_label:"Seal"},b={unversionedId:"seal",id:"seal",isDocsHomePage:!1,title:"Seal",description:"An approval seal.",source:"@site/docs/seal.md",slug:"/seal",permalink:"/docs/seal",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/seal.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614609258,sidebar_label:"Seal",sidebar:"docs",previous:{title:"Recorder",permalink:"/docs/recorder"},next:{title:"Shaped Form",permalink:"/docs/shaped-form"}},s=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"An approval seal."),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"active")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether seal is active or grayed out. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"true"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onClick")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": callback function invoked when the note is clicked. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onClick() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"scale")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": object size (if not explicitly set, the seal is not rescaled). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"innerStyle")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": the style for the inner circle. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lower")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": the lower text. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"'The lower text'"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lowerArc")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": the arc for the lower text. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"150"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"noOrnaments")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": prevents rendering of the ornaments. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"removable")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether the note is removed when clicked. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"style")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": the style for the element. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"title")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": seal title. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"'Enter a title'"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"upper")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": the upper text. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"'The upper text'"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"upperArc")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": the arc for the upper text. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"150"),".")),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)(i.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"Removable",value:"removable"},{label:"Scaled",value:"scaled"}],lazy:!0,mdxType:"Tabs"},Object(l.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Seal title="LESSON DONE" upper="Carnegie Mellon" upperArc={120} lower="University" lowerArc={105} />\n'))),Object(l.b)(o.a,{value:"withStyle",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'\n<Seal \n  title="LESSON DONE" \n  style={{ backgroundImage: \'linear-gradient(white, silver, gainsboro)\'}}\n  innerStyle={{ backgroundImage:  \'linear-gradient(gold, silver, white)\' }}\n  upper="Carnegie Mellon"  upperArc={120} \n  lower="University" lowerArc={105}\n/>\n'))),Object(l.b)(o.a,{value:"removable",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Seal \n  title="LESSON DONE" \n  noOrnaments\n  removable\n  style={{ backgroundImage: \'linear-gradient(white, silver, gainsboro)\'}}\n  innerStyle={{ backgroundImage:  \'linear-gradient(gold, silver, white)\' }}\n  upper="Carnegie Mellon"  upperArc={120} \n  lower="University" lowerArc={105}\n/>\n'))),Object(l.b)(o.a,{value:"scaled",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Seal \n  title=\"BIG SEAL\" \n  scale={1.15}\n  style={{ fontWeight: 800, color: 'darkred', backgroundImage: 'linear-gradient(white, silver, gainsboro)'}}\n  innerStyle={{ backgroundImage:  'linear-gradient(gold, silver, white)' }}\n  upper=\"Carnegie Mellon\" upperArc={120} \n  lower=\"University\" lowerArc={105}\n/>\n")))))}u.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||l;return n?r.a.createElement(d,o(o({ref:t},b),{},{components:n})):r.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var b=2;b<l;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},435:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},444:function(e,t,n){"use strict";var a=n(0),r=n(445);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},445:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},447:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(444),i=n(435),o=n(58),c=n.n(o);const b=37,s=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:p,groupId:u,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:O}=Object(l.a)(),[f,j]=Object(a.useState)(o),g=a.Children.toArray(e.children),v=[];if(null!=u){const e=d[u];null!=e&&e!==f&&p.some((t=>t.value===e))&&j(e)}const y=e=>{const t=e.target,n=v.indexOf(t),a=g[n].props.value;j(a),null!=u&&O(u,a)},N=e=>{var t;let n;switch(e.keyCode){case s:const t=v.indexOf(e.target)+1;n=v[t]||v[0];break;case b:const a=v.indexOf(e.target)-1;n=v[a]||v[v.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},p.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>v.push(e),onKeyDown:N,onFocus:y,onClick:y},t)))),t?Object(a.cloneElement)(g.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},448:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);