(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{180:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),i=(n(0),n(213)),o={id:"word-cloud",title:"Word Cloud",sidebar_label:"Word Cloud"},l={id:"word-cloud",isDocsHomePage:!1,title:"Word Cloud",description:"A word cloud component built on top of d3-cloud.",source:"@site/docs/word-cloud.md",permalink:"/docs/word-cloud",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/word-cloud.md",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1584924745,sidebar_label:"Word Cloud",sidebar:"docs",previous:{title:"Plotly",permalink:"/docs/plotly"},next:{title:"Beacon Tooltip",permalink:"/docs/beacon-tooltip"}},c=[{value:"Example",id:"example",children:[]},{value:"Options",id:"options",children:[]}],b={rightToc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A word cloud component built on top of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/jasondavies/d3-cloud"}),"d3-cloud"),"."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"<WordCloud data={[\n    'This is my holiday', \n    'Breakfast is great', \n    'My house is my castle', \n    'A castle for a kingdom', \n    'I am longing for breakfast',\n    'Having rolls for breakfast is a must',\n    'A horse for a kingdom',\n    'Mom like rolls',\n    'Orange juice is fine',\n    'Where is the butter',\n    'I am looking for a spoon',\n    'Coffee for coffee drinkers',\n    'Tea for the sleepy ones',\n    'The sleepy, sloppy, crazy King lives in a castle',\n    'A house for everybody'\n]} />\n")),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://isle.heinz.cmu.edu/components/word-cloud/"}),"Open interactive preview")),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array"),": either an array of texts from which to generate the word cloud or, if ",Object(i.b)("inlineCode",{parentName:"li"},"precalculated")," is set to ",Object(i.b)("inlineCode",{parentName:"li"},"true"),", and array of word count objects (with ",Object(i.b)("inlineCode",{parentName:"li"},"text")," and ",Object(i.b)("inlineCode",{parentName:"li"},"value")," keys). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"font")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|function)"),": accessor function specifying the font face for each word. Also accepts a constant instead of a function. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'serif'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"fontSizeMapper")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": accessor function indicating the font size for each word. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"( count - min + 1 ) / ( max - min + 6 ) * 30.0 + 12.0"),", where ",Object(i.b)("inlineCode",{parentName:"li"},"min")," and ",Object(i.b)("inlineCode",{parentName:"li"},"max")," denote the minimum and maximum word ",Object(i.b)("inlineCode",{parentName:"li"},"counts"),", respectively. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"height")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": height of the word clloud (in px). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"600"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"language")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": language identifier (determines the stopwords to be removed). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'en'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"minCount")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": if set, only include words that appear more than ",Object(i.b)("inlineCode",{parentName:"li"},"minCount")," times in the given data. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"saveButton")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to display a button for saving the word cloud as an image. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onClick")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": callback function invoked when a word on the word cloud is clicked. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onClick() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"padding")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(function|number)"),": accessor function or constant indicating the numerical padding for each word. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"5"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"precalculated")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether the word cloud expects an array of precalculated word counts or will generate them for given texts. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"rotate")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(function|number)"),": accessor function indicating the rotation angle (in degrees) for each word. Also accepts a constant instead of a function. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"word => word.value % 360"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"updateThreshold")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": batch size of new documents in ",Object(i.b)("inlineCode",{parentName:"li"},"data")," before the word cloud is re-rendered. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"5"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"stopwords")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array"),": additional stopwords to remove before rendering the word cloud. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"triggerRender")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": rerender when the data set is exchanged. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": CSS inline styles. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"width")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": width of the word cloud (in px). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"700"),".")))}d.isMDXComponent=!0},213:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),d=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=d(n),s=a,m=p["".concat(o,".").concat(s)]||p[s]||u[s]||i;return n?r.a.createElement(m,l(l({ref:t},b),{},{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);