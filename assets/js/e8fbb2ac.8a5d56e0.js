(window.webpackJsonp=window.webpackJsonp||[]).push([[1261],{286:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return m}));var a=n(3),i=n(7),r=(n(0),n(410)),l=n(447),o=n(448),b={id:"number-question",title:"Number Question",sidebar_label:"Number Question"},c={unversionedId:"questions/number-question",id:"questions/number-question",isDocsHomePage:!1,title:"Number Question",description:"A number question component.",source:"@site/docs/questions/number.md",slug:"/questions/number-question",permalink:"/docs/questions/number-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/number.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614808108,sidebar_label:"Number Question",sidebar:"docs",previous:{title:"Multiple Choice Question",permalink:"/docs/questions/multiple-choice-question"},next:{title:"Order Question",permalink:"/docs/questions/order-question"}},s=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:s};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A number question component."),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"question")," | ",Object(r.b)("inlineCode",{parentName:"li"},"(string|node)"),": number question. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hintPlacement")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": placement of the hints (either ",Object(r.b)("inlineCode",{parentName:"li"},"top"),", ",Object(r.b)("inlineCode",{parentName:"li"},"left"),", ",Object(r.b)("inlineCode",{parentName:"li"},"right"),", or ",Object(r.b)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'top'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hints")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array<(string|node)>"),": hints providing guidance on how to answer the question. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"feedback")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to display feedback buttons. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"solution")," | ",Object(r.b)("inlineCode",{parentName:"li"},"(number|array<number>)"),": a numeric answer to the problem (or multiple correct answers if an array is supplied). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"digits")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": number of digits for which the answer supplied by the student must match the solution to be considered correct. Set to 0 to match as an integer. If set to null it will search for an exact match.. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"3"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"max")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": maximum allowed input value. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"null"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"min")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": minimum allowed input value. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"null"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"defaultValue")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": pre-selected value of number input. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"0"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"provideFeedback")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": indicates whether feedback including the correct answer should be displayed after learners submit their answers. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"nTries")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": after how many tries feedback should be supplied (if ",Object(r.b)("inlineCode",{parentName:"li"},"provideFeedback")," is ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"1"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"disableSubmitNotification")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to disable submission notifications. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"chat")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether the element should have an integrated chat. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"until")," | ",Object(r.b)("inlineCode",{parentName:"li"},"Date"),": time until students should be allowed to submit answers. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"points")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": maximum number of points awarded in grading. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"10"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"style")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": CSS inline styles. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onChange")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": callback  which is triggered after the value of the number field changes; receives the current value as its sole argument. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": callback invoked when answer is submitted; has as first parameter a ",Object(r.b)("inlineCode",{parentName:"li"},"boolean")," indicating whether the answer was correctly answered (if applicable, ",Object(r.b)("inlineCode",{parentName:"li"},"null")," otherwise) and the supplied answer as the second parameter. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)(l.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Markdown",value:"markdownStyling"},{label:"With CSS",value:"withCSS"}],lazy:!0,mdxType:"Tabs"},Object(r.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<NumberQuestion\n    question="What is the number Pi? (include at least three digits after the decimal point)"\n    solution={3.142}\n/>\n'))),Object(r.b)(o.a,{value:"markdownStyling",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<NumberQuestion\n    question={<span>What is the number $\\pi$? (include at least _three_ digits after the decimal point)</span>}\n    solution={3.142}\n/>\n"))),Object(r.b)(o.a,{value:"withCSS",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<NumberQuestion\n    question={<span style={{ fontSize: 25, color: 'darkorange'}}>What is the number PI - three digits after the period</span>}\n    solution={3.142}\n/>\n")))))}m.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),s=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),u=s(n),p=a,d=u["".concat(l,".").concat(p)]||u[p]||m[p]||r;return n?i.a.createElement(d,o(o({ref:t},c),{},{components:n})):i.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},435:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},444:function(e,t,n){"use strict";var a=n(0),i=n(445);t.a=function(){const e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},445:function(e,t,n){"use strict";var a=n(0);const i=Object(a.createContext)(void 0);t.a=i},447:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(444),l=n(435),o=n(58),b=n.n(o);const c=37,s=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:u,groupId:m,className:p}=e,{tabGroupChoices:d,setTabGroupChoices:O}=Object(r.a)(),[f,j]=Object(a.useState)(o),h=a.Children.toArray(e.children),N=[];if(null!=m){const e=d[m];null!=e&&e!==f&&u.some((t=>t.value===e))&&j(e)}const g=e=>{const t=e.target,n=N.indexOf(t),a=h[n].props.value;j(a),null!=m&&O(m,a)},v=e=>{var t;let n;switch(e.keyCode){case s:const t=N.indexOf(e.target)+1;n=N[t]||N[0];break;case c:const a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},p)},u.map((({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:Object(l.a)("tabs__item",b.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>N.push(e),onKeyDown:v,onFocus:g,onClick:g},t)))),t?Object(a.cloneElement)(h.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},448:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function({children:e,hidden:t,className:n}){return i.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);