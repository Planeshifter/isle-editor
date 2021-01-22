(window.webpackJsonp=window.webpackJsonp||[]).push([[324],{247:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(386)),o={id:"tex",title:"LaTeX Equations",sidebar_label:"LaTeX Equations"},l={unversionedId:"tex",id:"tex",isDocsHomePage:!1,title:"LaTeX Equations",description:"TeX is an ISLE element that can be used to display LaTeX equations. Under the hood, the component uses KaTeX for blazingly fast rendering.",source:"@site/docs/tex.md",slug:"/tex",permalink:"/docs/tex",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tex.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1605324395,sidebar_label:"LaTeX Equations",sidebar:"docs",previous:{title:"Link",permalink:"/docs/link"},next:{title:"blockquote",permalink:"/docs/html/blockquote"}},c=[{value:"Example",id:"example",children:[]},{value:"Options",id:"options",children:[]}],b={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"TeX")," is an ISLE element that can be used to display LaTeX equations. Under the hood, the component uses ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Khan/KaTeX"}),"KaTeX")," for blazingly fast rendering."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<TeX\n    raw="2 + 3 = 5"\n    displayMode={true}\n/>\n')),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"raw")," | ",Object(r.b)("inlineCode",{parentName:"li"},"(string|number) (required)"),": The literal LaTeX ",Object(r.b)("inlineCode",{parentName:"li"},"string")," to render. Also accepts ",Object(r.b)("inlineCode",{parentName:"li"},"numbers"),". Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"displayMode")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": ",Object(r.b)("inlineCode",{parentName:"li"},"boolean")," indicating whether to display the equation inline or in display mode. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"numbered")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to display an equation number for display mode equations. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"style")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": ",Object(r.b)("inlineCode",{parentName:"li"},"object")," with CSS key-value pairs to be applied to the equation container. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"tag")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": Custom characters displayed for display equations at the right side. Defaults to the number of the equation inside the lesson. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"elems")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": ",Object(r.b)("inlineCode",{parentName:"li"},"object")," with ",Object(r.b)("inlineCode",{parentName:"li"},"keys")," denoting LaTeX characters and their corresponding values being configuration ",Object(r.b)("inlineCode",{parentName:"li"},"objects")," to make them interactive. Setting a ",Object(r.b)("inlineCode",{parentName:"li"},"tooltip")," option will show a tooltip when hovering over the LaTeX characters. Setting a ",Object(r.b)("inlineCode",{parentName:"li"},"variable")," property will display an input slider to change the respective state variable; in this case, additional properties ",Object(r.b)("inlineCode",{parentName:"li"},"legend"),", ",Object(r.b)("inlineCode",{parentName:"li"},"min"),", ",Object(r.b)("inlineCode",{parentName:"li"},"max"),", and ",Object(r.b)("inlineCode",{parentName:"li"},"step")," are supported. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"popoverPlacement")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": popover position for the specified ",Object(r.b)("inlineCode",{parentName:"li"},"elems")," (either ",Object(r.b)("inlineCode",{parentName:"li"},"top"),", ",Object(r.b)("inlineCode",{parentName:"li"},"right"),", ",Object(r.b)("inlineCode",{parentName:"li"},"bottom"),", or ",Object(r.b)("inlineCode",{parentName:"li"},"left"),"). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'top'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onPopover")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": callback ",Object(r.b)("inlineCode",{parentName:"li"},"function")," when a control popover is toggled on or off; receives the display status as a boolean as its sole argument. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onPopover() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onClick")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": callback ",Object(r.b)("inlineCode",{parentName:"li"},"function")," invoked whenever a user clicks on the equation. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),".")))}p.isMDXComponent=!0},386:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),p=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,m=s["".concat(o,".").concat(u)]||s[u]||d[u]||r;return n?i.a.createElement(m,l(l({ref:t},b),{},{components:n})):i.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<r;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);