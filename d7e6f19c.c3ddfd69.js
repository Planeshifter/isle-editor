(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{194:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(6),i=(t(0),t(213)),o={id:"multi-card",title:"MultiCard",sidebar_label:"MultiCard"},l={id:"multi-card",isDocsHomePage:!1,title:"MultiCard",description:"An ISLE component that allows you to create and control multiple flippable cards (e.g. in a game of Memory).",source:"@site/docs/multi-cards.md",permalink:"/docs/multi-card",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/multi-cards.md",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1584924745,sidebar_label:"MultiCard"},c=[{value:"Example",id:"example",children:[]},{value:"Options",id:"options",children:[]}],b={rightToc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"An ISLE component that allows you to create and control multiple flippable cards (e.g. in a game of Memory)."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"<MultiCards\n    id=\"Memory\"\n\n    onChange= {(data) => {\n        console.log(data);\n    }}\n    \n    cardStyles={{\n        container:{\n            width: 250,\n            height: 250,\n            marginBottom: 10\n        },\n        front:{\n            color:'gainsboro',\n            cursor: 'pointer',\n            textAlign: 'center',\n            boxShadow: '1px 1px 10px black',\n            backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',\n            backgroundSize: '100% auto'\n        },\n        back: {\n            color: 'blue',\n            fontSize: 20,\n            fontWeight: 800,\n            fontFamily: 'Oswald',\n            textAlign: 'left',\n            paddingLeft: '10px',\n            background: 'ghostwhite',\n            boxShadow: '1px 1px 10px black',\n        }\n    }}\n    values={[\n        { front: \"number 1\", back: 'back side of #1'},\n        { front: \"number 2\", back: 'back side of #2'},\n        { front: \"number 3\", back: 'back side of #3'},\n        { front: \"number 4\", back: 'back side of #4'},\n    ]}\n/>\n")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://isle.heinz.cmu.edu/components/multi-cards/"}),"Open interactive preview")),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"animation")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": if set the component uses an entry animation; the object contains a name (like ",Object(i.b)("inlineCode",{parentName:"li"},"anim-scale-up"),") and a duration (like ",Object(i.b)("inlineCode",{parentName:"li"},"1.7s")," = 1.7 seconds). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"cardStyles")," | ",Object(i.b)("inlineCode",{parentName:"li"},"{container,front,back}"),": allows to override the given styles. Handles objects with  ",Object(i.b)("inlineCode",{parentName:"li"},"container"),", ",Object(i.b)("inlineCode",{parentName:"li"},"front")," and ",Object(i.b)("inlineCode",{parentName:"li"},"back")," keys. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{\n  'container': {},\n  'front': {},\n  'back': {}\n}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"game")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": multi-card games. Can be either ",Object(i.b)("inlineCode",{parentName:"li"},"memory")," or ",Object(i.b)("inlineCode",{parentName:"li"},"bingo"),".. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"language")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": voice recognition language identifier. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'en-US'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onChange")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": a function that receives the matrix of the flippable cards. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"oneTime")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": indicates whether the flip process may be executed just once. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"values")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array<object>"),": the values for the respective cards, input in an array that has entry fields for a ",Object(i.b)("inlineCode",{parentName:"li"},"front")," and ",Object(i.b)("inlineCode",{parentName:"li"},"back")," value. Such a value could be a string, but also a full fledged ISLE component. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": CSS inline styles. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),".")))}p.isMDXComponent=!0},213:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),p=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,m=u["".concat(o,".").concat(d)]||u[d]||s[d]||i;return t?r.a.createElement(m,l(l({ref:n},b),{},{components:t})):r.a.createElement(m,l({ref:n},b))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=t[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);