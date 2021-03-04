(window.webpackJsonp=window.webpackJsonp||[]).push([[1231],{256:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),l=(n(0),n(410)),i=n(447),o=n(448),c={id:"flippable-card",title:"Flippable Card",sidebar_label:"Flippable Card"},b={unversionedId:"flippable-card",id:"flippable-card",isDocsHomePage:!1,title:"Flippable Card",description:"An ISLE component that allows two render two-sides.",source:"@site/docs/flippable-card.md",slug:"/flippable-card",permalink:"/docs/flippable-card",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/flippable-card.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614561866,sidebar_label:"Flippable Card",sidebar:"docs",previous:{title:"Draggable List",permalink:"/docs/draggable-list"},next:{title:"JavaScript Shell",permalink:"/docs/js-shell"}},p=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:p};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"An ISLE component that allows two render two-sides."),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"button")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": button label. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"draggable")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether the card may be dragged around. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"flipSpeedBackToFront")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": the speed by which the card turns from background to foreground, in seconds. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"1"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"flipSpeedFrontToBack")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": the speed by which the card turns from foreground to background, in seconds. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"1"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"oneTime")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": indicates whether the flip process may be executed just once. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"perspective")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": CSS property value to give 3d-positioned element a perspective. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"1000"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"size")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": size of the card (sets its ",Object(l.b)("inlineCode",{parentName:"li"},"width")," and ",Object(l.b)("inlineCode",{parentName:"li"},"height"),"). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"250"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"disabled")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether the flippable card is disabled. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"value")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": flip state of the card (for controlled component). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"defaultValue")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": initial flip state of the card. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"containerStyle")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": CSS style of the container. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"frontStyle")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": CSS style of the front card. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"backStyle")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": CSS style of the back card. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onChange")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": callback invoked once the card is flipped; receives the current flipped status as its sole argument. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onChange() {}"),".")),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)(i.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With CSS",value:"withCSS"},{label:"Slow Motion",value:"slowMo"}],lazy:!0,mdxType:"Tabs"},Object(l.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FlippableCard containerStyle={{ float: \'none\' }} size={200}>\n  <img src="https://bit.ly/2YU5EbU" />\n  <img src="https://bit.ly/3aGv9mp" />\n</FlippableCard>\n'))),Object(l.b)(o.a,{value:"withCSS",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<FlippableCard \n  containerStyle={{ float: 'none' }} \n  frontStyle={{ fontSize: 50, textAlign: 'center' }} \n  backStyle={{ fontSize: 50, textAlign: 'center', background: 'purple', color: 'white' }} \n  >\n    <div>\n      FRONT\n    </div>\n    <div>\n      BACK\n    </div>\n</FlippableCard>\n"))),Object(l.b)(o.a,{value:"slowMo",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<FlippableCard \n  flipSpeedBackToFront={7} \n  flipSpeedFrontToBack={7}   \n  containerStyle={{ float: 'none' }} \n  frontStyle={{ fontSize: 50, textAlign: 'center' }} \n  backStyle={{ fontSize: 50, textAlign: 'center', background: 'purple', color: 'white' }} \n  >\n    <div>\n      FRONT\n    </div>\n    <div>\n      BACK\n    </div>\n</FlippableCard>\n")))))}d.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,m=s["".concat(i,".").concat(u)]||s[u]||d[u]||l;return n?r.a.createElement(m,o(o({ref:t},b),{},{components:n})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var b=2;b<l;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},435:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},444:function(e,t,n){"use strict";var a=n(0),r=n(445);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},445:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},447:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(444),i=n(435),o=n(58),c=n.n(o);const b=37,p=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:s,groupId:d,className:u}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(l.a)(),[O,j]=Object(a.useState)(o),g=a.Children.toArray(e.children),v=[];if(null!=d){const e=m[d];null!=e&&e!==O&&s.some((t=>t.value===e))&&j(e)}const N=e=>{const t=e.target,n=v.indexOf(t),a=g[n].props.value;j(a),null!=d&&f(d,a)},h=e=>{var t;let n;switch(e.keyCode){case p:const t=v.indexOf(e.target)+1;n=v[t]||v[0];break;case b:const a=v.indexOf(e.target)-1;n=v[a]||v[v.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},u)},s.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>v.push(e),onKeyDown:h,onFocus:N,onClick:N},t)))),t?Object(a.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},448:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);