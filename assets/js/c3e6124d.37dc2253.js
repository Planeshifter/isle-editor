(window.webpackJsonp=window.webpackJsonp||[]).push([[1234],{259:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),l=(n(0),n(410)),o=n(447),i=n(448),c={id:"feedback",title:"Feedback Buttons",sidebar_label:"Feedback Buttons"},s={unversionedId:"feedback",id:"feedback",isDocsHomePage:!1,title:"Feedback Buttons",description:"Buttons to collect user feedback.",source:"@site/docs/feedback.md",slug:"/feedback",permalink:"/docs/feedback",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/feedback.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613424021,sidebar_label:"Feedback Buttons",sidebar:"docs",previous:{title:"Data Table",permalink:"/docs/data-table"},next:{title:"Gate",permalink:"/docs/gate"}},b=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:b};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Buttons to collect user feedback."),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"confusedMsg")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": message to be displayed in tooltip for confused button. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"feedbackMsg")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": message to be displayed in tooltip for detailed feedback button. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"understoodMsg")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": message to be displayed in tooltip for understood button. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"customFeedback")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether the component accepts custom feedback. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"true"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"vertical")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": buttons are displayed vertically if set to ",Object(l.b)("inlineCode",{parentName:"li"},"true"),". Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"className")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": class name. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"style")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": CSS inline styles. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)(o.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Vertical",value:"Vertical"},{label:"Feedback Everywhere",value:"feedbackEverywhere"},{label:"Customized Style and Labels",value:"fullyCustomized"}],lazy:!0,mdxType:"Tabs"},Object(l.b)(i.a,{value:"minimal",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Panel>\n  A panel with user feedback....\n  <FeedbackButtons\n    id="my_feedback" \n  />\n</Panel>\n'))),Object(l.b)(i.a,{value:"Vertical",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Panel>\n  Lorem ipsum....\n  <FeedbackButtons\n    id="my_feedback" \n    vertical\n  />\n</Panel>\n'))),Object(l.b)(i.a,{value:"feedbackEverywhere",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Panel style={{ width: 680}}>\n\n<VideoPlayer\n    url="https://youtu.be/Lkj8b25ppZo"\n    controls\n/>\n\n  to get some user feedback....\n  <FeedbackButtons\n    id="my_feedback" \n  />\n\n</Panel>\n'))),Object(l.b)(i.a,{value:"fullyCustomized",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Panel>\n  Lorem ipsum....\n  <FeedbackButtons\n    style={{ boxShadow: \'0 0 12px red\' }}\n    id="my_feedback"  \n    feedbackMsg="You can customize the feedback tooltip!"\n    understoodMsg="Tell me you got it!" \n    confusedMsg="Click me if your are confused!" \n  />\n</Panel>\n')))))}d.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),p=a,m=u["".concat(o,".").concat(p)]||u[p]||d[p]||l;return n?r.a.createElement(m,i(i({ref:t},s),{},{components:n})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},435:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},444:function(e,t,n){"use strict";var a=n(0),r=n(445);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},445:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},447:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(444),o=n(435),i=n(58),c=n.n(i);const s=37,b=39;t.a=function(e){const{lazy:t,block:n,defaultValue:i,values:u,groupId:d,className:p}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(l.a)(),[O,j]=Object(a.useState)(i),y=a.Children.toArray(e.children),v=[];if(null!=d){const e=m[d];null!=e&&e!==O&&u.some((t=>t.value===e))&&j(e)}const g=e=>{const t=e.target,n=v.indexOf(t),a=y[n].props.value;j(a),null!=d&&f(d,a)},N=e=>{var t;let n;switch(e.keyCode){case b:const t=v.indexOf(e.target)+1;n=v[t]||v[0];break;case s:const a=v.indexOf(e.target)-1;n=v[a]||v[v.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},p)},u.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>v.push(e),onKeyDown:N,onFocus:g,onClick:g},t)))),t?Object(a.cloneElement)(y.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},448:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);