(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(406)),l={id:"range-question",title:"Range Question",sidebar_label:"Range Question"},o={unversionedId:"range-question",id:"range-question",isDocsHomePage:!1,title:"Range Question",description:"A range question component that asks students to supply a lower and upper end point.",source:"@site/docs/range-question.md",slug:"/range-question",permalink:"/fr/docs/range-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/range-question.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1604529688,sidebar_label:"Range Question",sidebar:"docs",previous:{title:"Quiz",permalink:"/fr/docs/quiz"},next:{title:"Select Question",permalink:"/fr/docs/select-question"}},b=[{value:"Example",id:"example",children:[]},{value:"Options",id:"options",children:[]}],c={toc:b};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A range question component that asks students to supply a lower and upper end point."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<RangeQuestion\n    question="Approximately in which range lie 99% of observations drawn from a standard normal distribution?"\n    solution={[-3,3]}\n/>\n')),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"question")," | ",Object(r.b)("inlineCode",{parentName:"li"},"(string|node)"),": displayed question. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"solution")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array<number>"),": two-element array containing the endpoints of the correct range. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hintPlacement")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": placement of the hints (either ",Object(r.b)("inlineCode",{parentName:"li"},"top"),", ",Object(r.b)("inlineCode",{parentName:"li"},"left"),", ",Object(r.b)("inlineCode",{parentName:"li"},"right"),", or ",Object(r.b)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'top'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hints")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array<(string|node)>"),": hints providing guidance on how to answer the question. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"feedback")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to display feedback buttons. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"chat")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether the element should have an integrated chat. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"digits")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": number of digits that have to match between solution and user-supplied answer. If not given or set to null, the component checks for strict equality. If set to 0, checks for integer equality. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"3"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"max")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": maximum input value. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"null"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"min")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": minimum input value. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"null"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"provideFeedback")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": indicates whether feedback including the correct answer should be displayed after learners submit their answers. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether one can submit multiple answers. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"until")," | ",Object(r.b)("inlineCode",{parentName:"li"},"Date"),": time until students should be allowed to submit answers. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"points")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": maximum number of points awarded in grading. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"10"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"style")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": CSS inline styles. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onChangeLower")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": callback triggered after the lower bound is changed by the user. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onChangeLower() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onChangeUpper")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": callback triggered after the upper bound is changed by the user. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onChangeUpper() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": callback invoked when answer is submitted; has as first parameter a ",Object(r.b)("inlineCode",{parentName:"li"},"boolean")," indicating whether the answer was correctly answered (if applicable, ",Object(r.b)("inlineCode",{parentName:"li"},"null")," otherwise) and the supplied answer as the second parameter. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")))}p.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,d=s["".concat(l,".").concat(m)]||s[m]||u[m]||r;return n?i.a.createElement(d,o(o({ref:t},c),{},{components:n})):i.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);