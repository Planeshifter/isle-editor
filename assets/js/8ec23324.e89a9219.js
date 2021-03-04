(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{228:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(410)),i={id:"recorder",title:"Recorder",sidebar_label:"Recorder"},l={unversionedId:"recorder",id:"recorder",isDocsHomePage:!1,title:"Recorder",description:"An ISLE component for recording audio, screen and video.",source:"@site/docs/recorder.md",slug:"/recorder",permalink:"/docs/recorder",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/recorder.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612731787,sidebar_label:"Recorder",sidebar:"docs",previous:{title:"QR Code",permalink:"/docs/qrcode"},next:{title:"Seal",permalink:"/docs/seal"}},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"An ISLE component for recording audio, screen and video."),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"audio")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": indicates whether audio should be recorded. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"camera")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": indicates whether webcam should be recorded. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"screen")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": indicates whether the screen should be captured. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"autostart")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": indicates whether recording should start immediately. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"downloadable")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": indicates whether users should be able to download the recording. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"uploadable")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": indicates whether users should be able to upload the recording to the server. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"bitsPerSecond")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": bits per second. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"1280000"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"voiceID")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": voice control identifier. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"style")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object"),": CSS inline styles. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Recorder \n    audio\n    screen\n    downloadable\n/>\n")))}d.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),d=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=d(n),u=r,m=s["".concat(i,".").concat(u)]||s[u]||p[u]||o;return n?a.a.createElement(m,l(l({ref:t},b),{},{components:n})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);