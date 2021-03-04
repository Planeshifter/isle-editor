(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(410)),l={id:"install",title:"Installation",sidebar_label:"Installation"},i={unversionedId:"overview/install",id:"overview/install",isDocsHomePage:!1,title:"Installation",description:"You may either download prebuilt binaries of the ISLE editor or built it yourself from the source code. The latter is only recommended in case you would like to contribute to the development of ISLE or be able to pull in the latest features.",source:"@site/docs/overview/install.md",slug:"/overview/install",permalink:"/ru/docs/overview/install",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/overview/install.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614625519,sidebar_label:"Installation",sidebar:"docs",previous:{title:"Getting Started",permalink:"/ru/docs/overview/intro"},next:{title:"ISLE Editor",permalink:"/ru/docs/overview/editor"}},c=[{value:"Binaries",id:"binaries",children:[]},{value:"Build from Source",id:"build-from-source",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Download",id:"download",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Development",id:"development",children:[]},{value:"Build",id:"build",children:[]}]}],s={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You may either download prebuilt binaries of the ISLE editor or built it yourself from the source code. The latter is only recommended in case you would like to contribute to the development of ISLE or be able to pull in the latest features."),Object(o.b)("h2",{id:"binaries"},"Binaries"),Object(o.b)("p",null,"Current version: ",Object(o.b)("em",{parentName:"p"},"v0.74.9"),"."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/isle-project/isle-editor/releases/download/v0.74.9/isle-editor-Setup-0.74.9.exe"},"Download the isle-editor for Windows (.exe)")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/isle-project/isle-editor/releases/download/v0.74.9/isle-editor-0.74.9.dmg"},"Download the isle-editor for macOS (.dmg)")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/isle-project/isle-editor/releases/download/v0.74.9/isle-editor-0.74.9-x86_64.AppImage"},"Download the isle-editor for Linux (.AppImage)")," (alternative: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/isle-project/isle-editor/releases/download/v0.74.9/isle-editor-0.74.9-amd64.deb"},".deb"),")"),Object(o.b)("h2",{id:"build-from-source"},"Build from Source"),Object(o.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"Developing and running the ISLE Editor has the following prerequisites:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://git-scm.com/"},"git"),": version control"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js"),": JavaScript runtime (version ",Object(o.b)("inlineCode",{parentName:"li"},">= 9.0"),")")),Object(o.b)("h3",{id:"download"},"Download"),Object(o.b)("p",null,"To acquire the source code, clone the git repository."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/isle-project/isle-editor\n")),Object(o.b)("h3",{id:"installation"},"Installation"),Object(o.b)("p",null,"To install development dependencies,"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ npm install\n")),Object(o.b)("h3",{id:"development"},"Development"),Object(o.b)("p",null,"To live-edit the ISLE Editor,"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ npm run dev\n")),Object(o.b)("p",null,"Editing source files will result in changes appearing directly without reloading."),Object(o.b)("h3",{id:"build"},"Build"),Object(o.b)("p",null,"To build the ",Object(o.b)("a",{parentName:"p",href:"http://electron.atom.io/"},"Electron")," application,"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ npm run build\n")),Object(o.b)("p",null,"The bundled version can be started with"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ npm start\n")),Object(o.b)("h4",{id:"package"},"Package"),Object(o.b)("p",null,"To package the editor as a standalone application for the current operating system, run "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ npm run package\n")),Object(o.b)("p",null,"To bundle for all operating systems, run"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ npm run package-all\n")),Object(o.b)("h4",{id:"tests"},"Tests"),Object(o.b)("p",null,"The ISLE editor uses ",Object(o.b)("a",{parentName:"p",href:"https://jestjs.io"},"Jest")," for unit tests. To run the tests, execute the following command in the top-level application directory:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ npm test\n")),Object(o.b)("p",null,"To only run the tests for a single component or function, use"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'$ npm run test -- -t "name-of-spec"\n')))}p.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);