(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{221:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),i=(n(0),n(406)),a={id:"text-editor",title:"Text Editor",sidebar_label:"Text Editor"},l={unversionedId:"text-editor",id:"text-editor",isDocsHomePage:!1,title:"Text Editor",description:"A text editor for writing notes or reports. Supports exporting of notes as HTML or PDF files, as well as automatic submission to the ISLE server.",source:"@site/docs/text-editor.md",slug:"/text-editor",permalink:"/docs/text-editor",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/text-editor.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613257762,sidebar_label:"Text Editor",sidebar:"docs",previous:{title:"Gate",permalink:"/docs/gate"},next:{title:"Sketchpad",permalink:"/docs/sketchpad"}},c=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A text editor for writing notes or reports. Supports exporting of notes as HTML or PDF files, as well as automatic submission to the ISLE server."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"allowSubmissions")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether students may submit their reports to the server. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"canLoadHTML")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to display button for loading a saved HTML file into the editor. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"defaultValue")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": default text of the editor. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"mode")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": controls text editing mode (either ",Object(i.b)("inlineCode",{parentName:"li"},"individual")," for a personal document, ",Object(i.b)("inlineCode",{parentName:"li"},"group")," for a document per groups, ",Object(i.b)("inlineCode",{parentName:"li"},"collaborative")," for a single document for everyone, or ",Object(i.b)("inlineCode",{parentName:"li"},"cohort")," for a document per cohort). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'individual'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"resetModal")," | ",Object(i.b)("inlineCode",{parentName:"li"},"{title,body,buttonLabel,notificationTitle,notification,tooltip}"),": object for customizing the modal for resetting the document (should usually not be changed). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"sendSubmissionEmails")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to send confirmation emails with PDF/HTML output upon submission. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"voiceTimeout")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": time in milliseconds after a chunk of recorded voice input is inserted. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"5000"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": CSS inline styles. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<TextEditor />\n")))}b.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(a,".").concat(d)]||p[d]||u[d]||i;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);