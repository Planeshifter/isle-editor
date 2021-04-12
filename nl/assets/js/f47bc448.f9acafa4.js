(window.webpackJsonp=window.webpackJsonp||[]).push([[1270],{296:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(410)),i={id:"first-lesson",title:"Building a first ISLE lesson",sidebar_label:"First Lesson"},s={unversionedId:"overview/first-lesson",id:"overview/first-lesson",isDocsHomePage:!1,title:"Building a first ISLE lesson",description:"Let us start creating a little ISLE lesson. We can use Markdown to simplify writing of text segments.",source:"@site/docs/overview/first-lesson.md",slug:"/overview/first-lesson",permalink:"/nl/docs/overview/first-lesson",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/overview/first-lesson.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1598888897,formattedLastUpdatedAt:"31-8-2020",sidebar_label:"First Lesson",sidebar:"docs",previous:{title:"Structure of an ISLE Lesson",permalink:"/nl/docs/overview/structure"},next:{title:"Exporting lessons",permalink:"/nl/docs/overview/packaging"}},l=[],c={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Let us start creating a little ISLE lesson. We can use Markdown to simplify writing of text segments. "),Object(a.b)("p",null,"Below the preamble, we will insert a header and a little description:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-markdown"},"# Examples\n\nThis lesson will contain some examples \nof interactive *ISLE* components.\n")),Object(a.b)("p",null,"Let's now look at the ",Object(a.b)("inlineCode",{parentName:"p"},"R Shell")," component, which allows the evaluation of R code."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},"## RShell\n\n<RShell />\n")),Object(a.b)("p",null,"Try out evaluating some R code in the life preview. ISLE components have each a variety of attributes, which can be controlled and govern their functionality and appearance. We can set the default code and the number of lines for the R shell as follows:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<RShell code="# Insert default code here..." lines={4} />\n')),Object(a.b)("p",null,"Let us now use the R Shell to create a little exercise:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'### Create 100 random draws from a Uniform(0,1) distribution\n\n<RShell \n    hints={["Use the runif function"]} \n    solution="runif(100)" \n/>\n')),Object(a.b)("p",null,"When adding ",Object(a.b)("inlineCode",{parentName:"p"},"solution")," or ",Object(a.b)("inlineCode",{parentName:"p"},"hints"),", new buttons appear on the R Shell, which allow users to access the hints and compare their answers to the supplied solutions."),Object(a.b)("p",null,"Let's now intercept the answer of the learner and provide a notification in case it is correct."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"### Create 100 random draws from a Uniform(0,1) distribution\n\n<RShell \n    hints={[\n        'Use the runif function'\n    ]}\n    solution=\"runif(100)\"\n    onEvaluate={( str ) => {\n        if ( /runif\\(100/.test( str ) ) {\n            session.addNotification({\n                title: 'Correct.',\n                message: 'Your answer is correct!',\n                level: 'success',\n                position: 'tr'\n            });\n        } else {\n            session.addNotification({\n                title: 'Incorrect.',\n                message: 'Your answer is incorrect!',\n                level: 'warning',\n                position: 'tr'\n            });\n        }\n    }}\n/>\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"addNotification")," method attached to the ",Object(a.b)("inlineCode",{parentName:"p"},"session")," object comes from the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/igorprado/react-notification-system"},"react-notification-system")," library and supports all its options."),Object(a.b)("p",null,"There are many other ISLE components to use. The ",Object(a.b)("inlineCode",{parentName:"p"},"ISLE Components")," section of the documentation contains examples for all of them along with detailed descriptions of their APIs."))}p.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,b=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return n?o.a.createElement(b,s(s({ref:t},c),{},{components:n})):o.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);