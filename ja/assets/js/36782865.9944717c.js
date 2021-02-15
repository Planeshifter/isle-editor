(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{170:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(7),r=(a(0),a(406)),l=a(565),o=a(566),s={id:"slider",title:"Slider",sidebar_label:"Slider"},c={unversionedId:"slider",id:"slider",isDocsHomePage:!1,title:"Slider",description:"\u30b9\u30e9\u30a4\u30c9\u30b7\u30e7\u30fc\u3084\u30ab\u30eb\u30fc\u30bb\u30eb\u3067\u5b50\u3092\u8868\u793a\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/slider.md",slug:"/slider",permalink:"/ja/docs/slider",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/slider.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613161785,sidebar_label:"Slider",sidebar:"docs",previous:{title:"Scrolling Text",permalink:"/ja/docs/scrolling-text"},next:{title:"Switch Components",permalink:"/ja/docs/switch"}},b=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:b};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u30b9\u30e9\u30a4\u30c9\u30b7\u30e7\u30fc\u3084\u30ab\u30eb\u30fc\u30bb\u30eb\u3067\u5b50\u3092\u8868\u793a\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002"),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"title")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": \u30b9\u30e9\u30a4\u30c9\u30b7\u30e7\u30fc/\u30ab\u30eb\u30fc\u30bb\u30eb\u306e\u4e0a\u90e8\u306b\u8868\u793a\u3055\u308c\u308b\u30bf\u30a4\u30c8\u30eb. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"dots")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": \u4e0b\u90e8\u306b\u30c9\u30c3\u30c8\u3092\u8868\u793a\u3057\u3066\u3001\u30b9\u30e9\u30a4\u30c9\u306b\u3059\u3070\u3084\u304f\u79fb\u52d5\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u305f\u3002. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"fade")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": \u30b9\u30e9\u30a4\u30c9\u9593\u306e\u9077\u79fb\u306b\u30d5\u30a7\u30fc\u30c9\u3092\u4f7f\u7528\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"draggable")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": \u30e6\u30fc\u30b6\u30fc\u304c\u30b9\u30e9\u30a4\u30c9\u3092\u30c9\u30e9\u30c3\u30b0\u3057\u3066\u30b9\u30e9\u30a4\u30c9\u9593\u3092\u79fb\u52d5\u3067\u304d\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"pagination")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": \u30da\u30fc\u30b8\u30cd\u30fc\u30b7\u30e7\u30f3\u3092 ",Object(r.b)("inlineCode",{parentName:"li"},"top"),", ",Object(r.b)("inlineCode",{parentName:"li"},"bottom"),", ",Object(r.b)("inlineCode",{parentName:"li"},"\u4e21\u65b9\u306b\u8868\u793a\u3059\u308b\u304b\u3069\u3046\u304b\u3002. Default: "),"'bottom'`."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"goto")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": \u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u5909\u66f4\u3055\u308c\u305f\u5834\u5408\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001\u9078\u629e\u3055\u308c\u305f\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3092\u6301\u3064\u30b9\u30e9\u30a4\u30c9\u306b\u30b8\u30e3\u30f3\u30d7\u3057\u307e\u3059\u3002. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"0"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"infinite")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": \u30b9\u30e9\u30a4\u30c9\u30b7\u30e7\u30fc\u306e\u5185\u5bb9\u3092\u30e9\u30c3\u30d7\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"interval")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": \u81ea\u52d5\u30b9\u30e9\u30a4\u30c9\u30c1\u30a7\u30f3\u30b8\u306e\u6642\u9593\u9593\u9694\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"swipe")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": \u30c9\u30e9\u30c3\u30b0/\u30b9\u30ef\u30a4\u30d7\u52d5\u4f5c\u3092\u53ef\u80fd\u306b\u3059\u308b. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"style")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": CSS\u30a4\u30f3\u30e9\u30a4\u30f3\u30b9\u30bf\u30a4\u30eb. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onClick")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": \u524d\u5f8c\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u305f\u6642\u306b\u547c\u3073\u51fa\u3055\u308c\u308b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onClick() {}"),".")),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)(l.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Customize Pagination",value:"pagination"},{label:"Slideshow",value:"slideshow"},{label:"Custom Styling",value:"customStyling"}],lazy:!0,mdxType:"Tabs"},Object(r.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Slider title=\"Questions to explore:\" >\n    <p>Try generating new samples of the Normal data. You'll notice that the points don't always lie exactly on the line. This is typical variation. As you generate more random realizations of this plot you'll get better calibrated to the kind of deviation you can expect to see from this large a sample of Normal data.</p>\n    <p>How do the normal qq plots change as you vary the df parameter for the t-distributed data?</p>\n    <p>Can you tell just by looking at the t.data histograms that the data aren't normally distributed? Is it easier to tell from the QQ plots?</p>\n    <p>How do the normal qq plots change as you vary the shape parameter in the gamma-distributed data?</p>\n</Slider>\n"))),Object(r.b)(o.a,{value:"pagination",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Slider title=\"Questions to explore:\" pagination=\"both\" dots={false} >\n    <p>Try generating new samples of the Normal data. You'll notice that the points don't always lie exactly on the line. This is typical variation. As you generate more random realizations of this plot you'll get better calibrated to the kind of deviation you can expect to see from this large a sample of Normal data.</p>\n    <p>How do the normal qq plots change as you vary the df parameter for the t-distributed data?</p>\n    <p>Can you tell just by looking at the t.data histograms that the data aren't normally distributed? Is it easier to tell from the QQ plots?</p>\n    <p>How do the normal qq plots change as you vary the shape parameter in the gamma-distributed data?</p>\n</Slider>\n")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Use pagination buttons both at the top and bottom when the height of the content exceeds the browser window and requires scrolling.")))),Object(r.b)(o.a,{value:"slideshow",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Slider style={{ height: 400, background: \'black\' }} infinite interval={2000} >\n    <img src="https://bit.ly/3aM4OU7" alt="Untersberg Mountain Salzburg (by Giuseppe Milo, CC BY 3.0)" />\n    <img src="https://bit.ly/3rCm0Cu" alt="British Landscape (by Phil Riley, Pixabay License)" />\n    <img src="https://bit.ly/3cUkibu" alt="Mountains Landscape Sunset Dusk (Pixabay License)" />\n    <img src="https://bit.ly/2Z4fqbj" alt="Landscape with Trees (CC0 - Public Domain)" /> \n</Slider>\n'))),Object(r.b)(o.a,{value:"customStyling",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Slider style={{ textShadow: '0 2px 12px black', textAlign: 'center', fontSize: 90 }} infinite interval={1000} >\n    <div>FIVE</div>\n    <div>FOUR</div>\n    <div>THREE</div>\n    <div>TWO</div>\n    <div>ONE</div>\n    <div>ZERO</div>\n</Slider>\n")))))}d.isMDXComponent=!0},406:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return a?i.a.createElement(m,o(o({ref:t},c),{},{components:a})):i.a.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<r;c++)l[c]=a[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},478:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},552:function(e,t,a){"use strict";var n=a(0),i=a(553);t.a=function(){const e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},553:function(e,t,a){"use strict";var n=a(0);const i=Object(n.createContext)(void 0);t.a=i},565:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(552),l=a(478),o=a(57),s=a.n(o);const c=37,b=39;t.a=function(e){const{lazy:t,block:a,defaultValue:o,values:p,groupId:d,className:u}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(r.a)(),[O,j]=Object(n.useState)(o),h=n.Children.toArray(e.children),g=[];if(null!=d){const e=m[d];null!=e&&e!==O&&p.some((t=>t.value===e))&&j(e)}const v=e=>{const t=e.target,a=g.indexOf(t),n=h[a].props.value;j(n),null!=d&&f(d,n)},y=e=>{var t;let a;switch(e.keyCode){case b:const t=g.indexOf(e.target)+1;a=g[t]||g[0];break;case c:const n=g.indexOf(e.target)-1;a=g[n]||g[g.length-1]}null===(t=a)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},u)},p.map((({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(l.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>g.push(e),onKeyDown:y,onFocus:v,onClick:v},t)))),t?Object(n.cloneElement)(h.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},566:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=function({children:e,hidden:t,className:a}){return i.a.createElement("div",{role:"tabpanel",hidden:t,className:a},e)}}}]);