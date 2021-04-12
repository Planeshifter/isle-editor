(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{212:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(3),r=n(7),a=(n(0),n(410)),i={id:"packaging",title:"Exporting lessons",sidebar_label:"Exporting lessons"},s={unversionedId:"overview/packaging",id:"overview/packaging",isDocsHomePage:!1,title:"Exporting lessons",description:'To bundle an ISLE lesson as a single-page application, go to the "Export" page inside the editor. Lessons can be uploaded to an ISLE course or exported locally by selecting an output directory. It is suggested to keep both the Minify and Load ISLE resources from CDN options checked as the reduction in file size due to minification is beneficial when the exported lesson is served over the Internet and using ISLE code via a CDN instead of including it in the exported bundle allows for multiple lessons to share code, further decreasing the amount of data viewers of the lessons have do download when accessing the page.',source:"@site/docs/overview/packaging.md",slug:"/overview/packaging",permalink:"/es/docs/overview/packaging",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/overview/packaging.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612555144,formattedLastUpdatedAt:"5/2/2021",sidebar_label:"Exporting lessons",sidebar:"docs",previous:{title:"Building a first ISLE lesson",permalink:"/es/docs/overview/first-lesson"},next:{title:"Components",permalink:"/es/docs/overview/components"}},c=[],l={toc:c};function d(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,'To bundle an ISLE lesson as a single-page application, go to the "Export" page inside the editor. Lessons can be uploaded to an ISLE course or exported locally by selecting an output directory. It is suggested to keep both the ',Object(a.b)("strong",{parentName:"p"},"Minify")," and ",Object(a.b)("strong",{parentName:"p"},"Load ISLE resources from CDN")," options checked as the reduction in file size due to minification is beneficial when the exported lesson is served over the Internet and using ISLE code via a CDN instead of including it in the exported bundle allows for multiple lessons to share code, further decreasing the amount of data viewers of the lessons have do download when accessing the page."),Object(a.b)("p",null,'When uploading your lesson, you may choose whether to make the lesson immediately available to students (by setting "Release to Students?" to ',Object(a.b)("inlineCode",{parentName:"p"},"active"),") or whether it should remain hidden for students for now. In the latter case, you will need to activate the lesson later on from your ISLE dashboard."),Object(a.b)("p",null,'The checkbox for "Show in Gallery?" allows you to either keep the lesson ',Object(a.b)("inlineCode",{parentName:"p"},"private")," or make it available to other instructors on the lesson gallery of the dashboard (when set to ",Object(a.b)("inlineCode",{parentName:"p"},"public"),")."),Object(a.b)("p",null,"After the export process is finished, the lesson is either available online at the chosen location or can be found the chosen output directory. The exported lesson is viewable in any major and current web browser, and can be easily hosted on personal websites, GitHub pages or any other hosting service."),Object(a.b)("p",null,Object(a.b)("img",{alt:"Export gif",src:n(4683).default})))}d.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),f=o,b=p["".concat(i,".").concat(f)]||p[f]||u[f]||a;return n?r.a.createElement(b,s(s({ref:t},l),{},{components:n})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4683:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/export-20f7d98c9e9c9ac9f3268757d594d05c.gif"}}]);