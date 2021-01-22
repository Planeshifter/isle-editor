(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{185:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var i=n(3),o=n(7),a=(n(0),n(386)),r={id:"beacon-tooltip",title:"Beacon Tooltip",sidebar_label:"Beacon Tooltip"},l={unversionedId:"beacon-tooltip",id:"beacon-tooltip",isDocsHomePage:!1,title:"Beacon Tooltip",description:"Component placing a beacon in the lesson, either independently or attached to a target. Upon hovering or clicking on the beacon, a tooltip is displayed.",source:"@site/docs/beacon-tooltip.md",slug:"/beacon-tooltip",permalink:"/docs/beacon-tooltip",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/beacon-tooltip.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1593699598,sidebar_label:"Beacon Tooltip",sidebar:"docs",previous:{title:"Word Cloud",permalink:"/docs/word-cloud"},next:{title:"Clock",permalink:"/docs/clock"}},c=[{value:"Example",id:"example",children:[]},{value:"Options",id:"options",children:[]}],p={rightToc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Component placing a beacon in the lesson, either independently or attached to a ",Object(a.b)("inlineCode",{parentName:"p"},"target"),". Upon hovering or clicking on the beacon, a tooltip is displayed."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<BeaconTooltip\n    content="Body of the tooltip..."\n    title="Title comes here..."\n    event="hover"\n    placement="right"\n/>\n')),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"title")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(string|node)"),": title to be displayed at the top of the tooltip. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"content")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(string|node)"),": tooltip content. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'"),"content",Object(a.b)("inlineCode",{parentName:"li"}," comes here...'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"event")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": if set to ",Object(a.b)("inlineCode",{parentName:"li"},"click"),", tooltip is toggled when clicking on beacon; if set to ",Object(a.b)("inlineCode",{parentName:"li"},"hover"),", the tooltip is activated via hovering. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'click'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"placement")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": placement of the tooltip relative to ",Object(a.b)("inlineCode",{parentName:"li"},"target")," (either ",Object(a.b)("inlineCode",{parentName:"li"},"top"),", ",Object(a.b)("inlineCode",{parentName:"li"},"top-start"),", ",Object(a.b)("inlineCode",{parentName:"li"},"top-end"),", ",Object(a.b)("inlineCode",{parentName:"li"},"bottom"),", ",Object(a.b)("inlineCode",{parentName:"li"},"bottom-end"),", ",Object(a.b)("inlineCode",{parentName:"li"},"left"),", ",Object(a.b)("inlineCode",{parentName:"li"},"left-start"),", ",Object(a.b)("inlineCode",{parentName:"li"},"left-end"),", ",Object(a.b)("inlineCode",{parentName:"li"},"right"),", ",Object(a.b)("inlineCode",{parentName:"li"},"right-start"),", ",Object(a.b)("inlineCode",{parentName:"li"},"right-end"),", ",Object(a.b)("inlineCode",{parentName:"li"},"auto"),", or ",Object(a.b)("inlineCode",{parentName:"li"},"center"),"). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'left'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"target")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": class or ID selector for element to attach tooltip to. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"''"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"offset")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": distance between the tooltip and ",Object(a.b)("inlineCode",{parentName:"li"},"target")," in pixels. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"15"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onChange")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": callback invoked upon state change of the tooltip. Receives two arguments: the ",Object(a.b)("inlineCode",{parentName:"li"},"action")," (",Object(a.b)("inlineCode",{parentName:"li"},"open")," or ",Object(a.b)("inlineCode",{parentName:"li"},"close"),") and the passed ",Object(a.b)("inlineCode",{parentName:"li"},"props"),". Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onChange() {}"),".")))}b.isMDXComponent=!0},386:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=b(n),m=i,u=d["".concat(r,".").concat(m)]||d[m]||s[m]||a;return n?o.a.createElement(u,l(l({ref:t},p),{},{components:n})):o.a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);