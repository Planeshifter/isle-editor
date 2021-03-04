(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{225:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),l=(n(0),n(410)),i=n(447),o=n(448),c={id:"video-player",title:"Video Player",sidebar_label:"Video Player"},b={unversionedId:"video-player",id:"video-player",isDocsHomePage:!1,title:"Video Player",description:"Een component voor het afspelen van mediabestanden en content van YouTube, SoundCloud en Vimeo.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/video-player.md",slug:"/video-player",permalink:"/nl/docs/video-player",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/video-player.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Video Player",sidebar:"docs",previous:{title:"Video Lecture",permalink:"/nl/docs/video-lecture"},next:{title:"Image",permalink:"/nl/docs/image"}},u=[{value:"Opties",id:"opties",children:[]},{value:"Voorbeelden",id:"voorbeelden",children:[]}],s={toc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Een component voor het afspelen van mediabestanden en content van YouTube, SoundCloud en Vimeo."),Object(l.b)("h2",{id:"opties"},"Opties"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"url")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": URL van de video. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"controls")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": geeft aan of er bedieningselementen van de videospeler moeten worden weergegeven. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"playing")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": geeft aan of de video automatisch moet worden afgespeeld. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"volume")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": volume van de speler. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"0.8"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"center")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of de videospeler moet worden gecentreerd. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"true"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"height")," | ",Object(l.b)("inlineCode",{parentName:"li"},"(string|number)"),": hoogte van de speler. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"360"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"width")," | ",Object(l.b)("inlineCode",{parentName:"li"},"(string|number)"),": breedte van de speler. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"640"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"loop")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": regelt of de video opnieuw wordt gestart nadat deze is afgespeeld. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"voiceID")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": stembesturingsidentificatie. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"startTime")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": aantal seconden om de video te starten, of breuk als de waarde tussen 0 en 1 ligt.. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"style")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": CSS inline-stijlen. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onEnded")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": terugbellen na afloop van de video. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onEnded() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onPause")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": terugbellen aangeroepen wanneer de video pauzeert. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onPause() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onPlay")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": callback aangeroepen wanneer de video begint of hervat wordt na het pauzeren. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onPlay() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onStart")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": callback ingeroepen zodra de video pauzeert. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onStart() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onSeek")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": terugbellen wanneer de media zoekt met ",Object(l.b)("inlineCode",{parentName:"li"},"seconden")," parameter. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onSeek() {}"),".")),Object(l.b)("h2",{id:"voorbeelden"},"Voorbeelden"),Object(l.b)(i.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Autoplay",value:"Autoplay"},{label:"Start Time",value:"startTime"},{label:"Controlled Size",value:"controlledSize"},{label:"With Callback on Pause",value:"withCallback"}],lazy:!0,mdxType:"Tabs"},Object(l.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<VideoPlayer\n    url="https://www.youtube.com/watch?v=UzxYlbK2c7E"\n/>\n'))),Object(l.b)(o.a,{value:"withStyle",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<VideoPlayer\n    url="https://youtu.be/Lkj8b25ppZo"\n    playing\n    controls\n/>\n'))),Object(l.b)(o.a,{value:"startTime",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<VideoPlayer\n    url="https://youtu.be/Lkj8b25ppZo"\n    controls\n    startTime={28}\n/>\n'))),Object(l.b)(o.a,{value:"controlledSize",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<VideoPlayer\n    url=\"https://youtu.be/Lkj8b25ppZo\"\n    controls\n    width={520}\n    height={290}\n    style={{ outline: '10px solid orange', boxShadow: '0 6px 12px black'}}\n/>\n"))),Object(l.b)(o.a,{value:"withCallback",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<VideoPlayer\n    url=\"https://youtu.be/Lkj8b25ppZo\"\n    controls\n    onPause={ function(){ alert('Do it again') }}\n/>\n")))))}p.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,m=s["".concat(i,".").concat(d)]||s[d]||p[d]||l;return n?r.a.createElement(m,o(o({ref:t},b),{},{components:n})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var b=2;b<l;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},435:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},444:function(e,t,n){"use strict";var a=n(0),r=n(445);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},445:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},447:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(444),i=n(435),o=n(58),c=n.n(o);const b=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:s,groupId:p,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:O}=Object(l.a)(),[j,f]=Object(a.useState)(o),v=a.Children.toArray(e.children),g=[];if(null!=p){const e=m[p];null!=e&&e!==j&&s.some((t=>t.value===e))&&f(e)}const y=e=>{const t=e.target,n=g.indexOf(t),a=v[n].props.value;f(a),null!=p&&O(p,a)},N=e=>{var t;let n;switch(e.keyCode){case u:const t=g.indexOf(e.target)+1;n=g[t]||g[0];break;case b:const a=g.indexOf(e.target)-1;n=g[a]||g[g.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},s.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===e}),key:e,ref:e=>g.push(e),onKeyDown:N,onFocus:y,onClick:y},t)))),t?Object(a.cloneElement)(v.filter((e=>e.props.value===j))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}},448:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);