(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),i=n(6),a=(n(0),n(213)),l={id:"scrolling-text",title:"Scrolling Text",sidebar_label:"Scrolling Text"},o={id:"scrolling-text",isDocsHomePage:!1,title:"Scrolling Text",description:"A dynamic background component that changes a background image at a specified interval.",source:"@site/docs/scrolling-text.md",permalink:"/docs/scrolling-text",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/scrolling-text.md",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1584924745,sidebar_label:"Scrolling Text",sidebar:"docs",previous:{title:"Polaroid",permalink:"/docs/polaroid"},next:{title:"Slider",permalink:"/docs/slider"}},c=[{value:"Example",id:"example",children:[]},{value:"Options",id:"options",children:[]}],b={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A dynamic background component that changes a background image at a specified interval."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"<ScrollingText\n    list={[ 'Heading' ]}\n    style={{ fontSize: 44, color: 'red' }}\n    interval={5}\n    inTime={1.2}\n    outTime={1.2}\n    still={2}\n/>\n")),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://isle.heinz.cmu.edu/components/scrolling-text/"}),"Open interactive preview")),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"list")," | ",Object(a.b)("inlineCode",{parentName:"li"},"array<string>"),": list of image URLs to be displayed. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"loop")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": indicates whether the process shall be displayed infinitely. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"direction")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": the direction of the text flow (either ",Object(a.b)("inlineCode",{parentName:"li"},"left"),", ",Object(a.b)("inlineCode",{parentName:"li"},"right"),", ",Object(a.b)("inlineCode",{parentName:"li"},"up"),", ",Object(a.b)("inlineCode",{parentName:"li"},"down"),", ",Object(a.b)("inlineCode",{parentName:"li"},"tracking"),", ",Object(a.b)("inlineCode",{parentName:"li"},"focus"),", or ",Object(a.b)("inlineCode",{parentName:"li"},"swirl"),"). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'right'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"still")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": the time the text remains still (in seconds). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"3"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"interval")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": the interval between the calls (in seconds). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"15"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"inTime")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": time of the entrance effect (in seconds). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"0.6"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"outTime")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": time of the exit effect (in seconds). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"1"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"style")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object"),": style definition of the text. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"{}"),".")))}p.isMDXComponent=!0},213:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),p=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,u=s["".concat(l,".").concat(m)]||s[m]||d[m]||a;return n?i.a.createElement(u,o(o({ref:t},b),{},{components:n})):i.a.createElement(u,o({ref:t},b))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var b=2;b<a;b++)l[b]=n[b];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);