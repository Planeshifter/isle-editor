(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var i=n(3),a=n(7),r=(n(0),n(406)),l={id:"select-question-matrix",title:"Select Question Matrix",sidebar_label:"Select Question Matrix"},o={unversionedId:"select-question-matrix",id:"select-question-matrix",isDocsHomePage:!1,title:"Select Question Matrix",description:"A question with an answer consisting of multiple select boxes.",source:"@site/docs/select-question-matrix.md",slug:"/select-question-matrix",permalink:"/nl/docs/select-question-matrix",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/select-question-matrix.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1601598507,sidebar_label:"Select Question Matrix",sidebar:"docs",previous:{title:"Select Question",permalink:"/nl/docs/select-question"},next:{title:"Free Text Survey",permalink:"/nl/docs/free-text-survey"}},c=[{value:"Example",id:"example",children:[]},{value:"Options",id:"options",children:[]}],b={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A question with an answer consisting of multiple select boxes."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestionMatrix\n    rows={[ 'First Row' ]} \n    cols={[ 'First Column', 'Second Column' ]} \n    options={{ '0:0': [ 'Incorrect', 'Correct' ], '0:1':  [ 'Incorrect', 'Incorrect', 'Correct' ] }} \n    solution={{ '0:0': 1, '0:1': 2 }}\n/>\n")),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"question")," | ",Object(r.b)("inlineCode",{parentName:"li"},"(string|node)"),": question to be displayed at the top of the select question matrix. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"rows")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": undefined. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"cols")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": column labels. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"options")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": object with key-value pairs with keys having the form ",Object(r.b)("inlineCode",{parentName:"li"},"row:col"),", e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"0:0"),", ",Object(r.b)("inlineCode",{parentName:"li"},"0:1"),", ",Object(r.b)("inlineCode",{parentName:"li"},"1:0")," etc., and their corresponding values being arrays of the possible answer choices for the individual select questions. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"solution")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": solution object with key-value pairs with keys having the form ",Object(r.b)("inlineCode",{parentName:"li"},"row:col"),", e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"0:0"),", ",Object(r.b)("inlineCode",{parentName:"li"},"0:1"),", ",Object(r.b)("inlineCode",{parentName:"li"},"1:0")," etc., and their corresponding values being the index of the correct answer element from the respective ",Object(r.b)("inlineCode",{parentName:"li"},"options")," array. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hints")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array<(string|node)>"),": hints providing guidance on how to answer the question. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hintPlacement")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": placement of the hints (either ",Object(r.b)("inlineCode",{parentName:"li"},"top"),", ",Object(r.b)("inlineCode",{parentName:"li"},"left"),", ",Object(r.b)("inlineCode",{parentName:"li"},"right"),", or ",Object(r.b)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'bottom'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"feedback")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to display feedback buttons. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"provideFeedback")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": whether to provide ",Object(r.b)("inlineCode",{parentName:"li"},"none")," feedback at all, ",Object(r.b)("inlineCode",{parentName:"li"},"individual")," feedback on the submitted answer(s), or ",Object(r.b)("inlineCode",{parentName:"li"},"overall")," feedback for all questions. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'individual'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"allowIncomplete")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": whether to allow submissions without a selection made in each select box. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"nTries")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": after how many tries no further answers are accepted (if ",Object(r.b)("inlineCode",{parentName:"li"},"provideFeedback")," is not ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"1"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"failureMsg")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": notification text displayed upon submitting incorrect answers. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"successMsg")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": notification text displayed upon submitting correct answers. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"cellLabels")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": undefined. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"chat")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether the element should have an integrated chat. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"className")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": class name. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"style")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": CSS inline styles. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": callback function invoked upon submission with the answers as a first and a boolean indicating correctness as second parameter. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")))}s.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?a.a.createElement(d,o(o({ref:t},b),{},{components:n})):a.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var b=2;b<r;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);