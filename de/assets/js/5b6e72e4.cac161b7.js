(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var i=n(3),a=n(7),r=(n(0),n(406)),o={id:"multiple-choice-matrix",title:"Multiple Choice Matrix",sidebar_label:"Multiple Choice Matrix"},l={unversionedId:"multiple-choice-matrix",id:"multiple-choice-matrix",isDocsHomePage:!1,title:"Multiple Choice Matrix",description:"An ISLE component that renders a matrix of multiple choice questions with the same answers.",source:"@site/docs/multiple-choice-matrix.md",slug:"/multiple-choice-matrix",permalink:"/de/docs/multiple-choice-matrix",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/multiple-choice-matrix.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1593652114,sidebar_label:"Multiple Choice Matrix"},c=[{value:"Example",id:"example",children:[]},{value:"Options",id:"options",children:[]}],s={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"An ISLE component that renders a matrix of multiple choice questions with the same answers."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MultipleChoiceMatrix \n    title=\"Do you think these concepts are important for an introductory statistics course, and do you (or your department) cover them in your introductory courses?\" id=\"topics\" \n    questions={[\n        'Data Visualizations',\n        'Hand calculations (e.g. standard deviation, z-scores)',\n        'Combinatorics',\n        'Basic probability theory (conditional probability, independence...)',\n        'Calculus-based probability',\n        'Sampling distributions',\n        'Confidence intervals (traditional, formula-based)',\n        'Boostrapping',\n        'Hypothesis testing (traditional, e.g. t-test or chi-square formulas and tables)',\n        'Simple linear regression',\n        'Bayesian statistics',\n        'Randomization- or simulation-based inference'\n    ]}\n    type=\"checkbox\" \n    answers={[ 'I cover it', 'I think it\\'s important' ]} \n/>\n")),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"questions")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array (required)"),": an array of questions. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"answers")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array (required)"),": an array of answers. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"title")," | ",Object(r.b)("inlineCode",{parentName:"li"},"(string|node)"),": title to be displayed on top of the question matrix. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"solution")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array<array>"),": boolean matrix the element of which indicate whether the respective radio button or checkbox should be ticked. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"type")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": question type (",Object(r.b)("inlineCode",{parentName:"li"},"radio"),' corresponds to "Select one", ',Object(r.b)("inlineCode",{parentName:"li"},"checkbox"),' to "Select all that apply"). Default: ',Object(r.b)("inlineCode",{parentName:"li"},"'radio'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"disableSubmitNotification")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to disable submission notifications. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onChange")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": callback invoked when the value of a checkbox / radio button changes; invoked with the two-dimensional boolean array of the active status for each answer option. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),': callback invoked when user clicks the "Submit" button; invoked with the two-dimensional boolean array of the active status for each answer option. Default: ',Object(r.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")))}b.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),m=i,d=p["".concat(o,".").concat(m)]||p[m]||u[m]||r;return n?a.a.createElement(d,l(l({ref:t},s),{},{components:n})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);