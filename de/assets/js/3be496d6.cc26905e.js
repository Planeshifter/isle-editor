(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),r=(n(0),n(410)),l=n(446),o=n(447),s={id:"select-question",title:"Select Question",sidebar_label:"Select Question"},c={unversionedId:"questions/select-question",id:"questions/select-question",isDocsHomePage:!1,title:"Select Question",description:"Eine ausgew\xe4hlte Fragekomponente.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/questions/select.md",slug:"/questions/select-question",permalink:"/de/docs/questions/select-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/select.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614117474,formattedLastUpdatedAt:"23.2.2021",sidebar_label:"Select Question",sidebar:"docs",previous:{title:"Range Question",permalink:"/de/docs/questions/range-question"},next:{title:"Select Question Matrix",permalink:"/de/docs/questions/select-question-matrix"}},b=[{value:"Optionen",id:"optionen",children:[]},{value:"Beispiele",id:"beispiele",children:[]}],u={toc:b};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Eine ausgew\xe4hlte Fragekomponente."),Object(r.b)("h2",{id:"optionen"},"Optionen"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"question")," | ",Object(r.b)("inlineCode",{parentName:"li"},"(string|node)"),": Frage, f\xfcr die der Kursteilnehmer eine der verf\xfcgbaren Antwortm\xf6glichkeiten ausw\xe4hlen muss. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"options")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array (required)"),": verf\xfcgbare Antwortoptionen, aus denen der Kursteilnehmer w\xe4hlen kann. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"solution")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number (required)"),": Index des L\xf6sungselements in ",Object(r.b)("inlineCode",{parentName:"li"},"options"),". Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"preselected")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": Index der vorgew\xe4hlten Antwortm\xf6glichkeit. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"0"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"inline")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob die Komponente inline gerendert wird oder nicht. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hintPlacement")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": Platzierung der Hinweise (entweder ",Object(r.b)("inlineCode",{parentName:"li"},"top"),", ",Object(r.b)("inlineCode",{parentName:"li"},"left"),", ",Object(r.b)("inlineCode",{parentName:"li"},"right"),", oder ",Object(r.b)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'top'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hints")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array<(string|node)>"),": Hinweise, die bei der Beantwortung der Frage helfen. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"feedback")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob Feedback-Tasten angezeigt werden sollen. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"chat")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob das Element einen integrierten Chat haben soll. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"provideFeedback")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": gibt an, ob ein Feedback einschlie\xdflich der richtigen Antwort angezeigt werden soll, nachdem die Lerner ihre Antworten abgeschickt haben. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"failureMsg")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": Meldung, die angezeigt werden soll, wenn der Sch\xfcler eine falsche Antwort ausw\xe4hlt. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'Not quite, try again!'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"successMsg")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": Meldung, die angezeigt werden soll, wenn der Sch\xfcler die richtige Antwort ausw\xe4hlt. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'That's the correct answer!'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"points")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": maximale Anzahl von Punkten, die bei der Benotung vergeben werden. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"10"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"style")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onChange")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": Callback, der nach der Submit-Aktion ausgel\xf6st wird. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": Callback, der aufgerufen wird, wenn die Antwort abgeschickt wurde; hat als ersten Parameter ein ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),", das angibt, ob die Antwort richtig beantwortet wurde (falls zutreffend, sonst ",Object(r.b)("inlineCode",{parentName:"li"},"null"),") und die gelieferte Antwort als zweiten Parameter. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),Object(r.b)("h2",{id:"beispiele"},"Beispiele"),Object(r.b)(l.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"Inline",value:"inline"},{label:"With Hints",value:"with Hints"},{label:"Submit Function Hints",value:"submitFunction"}],lazy:!0,mdxType:"Tabs"},Object(r.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestion\n    question=\"The usual t-test is\"\n    solution={2}\n    options={[\n        'left-sided',\n        'right-sided',\n        'two-sided'\n    ]}\n/>\n"))),Object(r.b)(o.a,{value:"withStyle",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestion\n    question=\"The usual t-test is\"\n    solution={2}\n    options={[\n        'left-sided',\n        'right-sided',\n        'two-sided'\n    ]}\n    style={{ background: 'gainsboro', boxShadow: '0 0 10px black'}}\n/>\n"))),Object(r.b)(o.a,{value:"inline",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"The usual t-test is:\n<SelectQuestion\n    question=\"The usual t-test is\"\n    solution={2}\n    options={[\n        'left-sided',\n        'right-sided',\n        'two-sided'\n    ]}\n    inline\n/> ... so you can us it in the midst of a longer paragraph\n"))),Object(r.b)(o.a,{value:"withHints",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<SelectQuestion\n    question="White is "\n    solution={1}\n    options={[\n        \'a primary color\',\n        \'not a primary color\'\n    ]}\n    hints={[ "There are 3 primary colors", "Red is a primary color", "and so is yellow" ]}\n/>\n'))),Object(r.b)(o.a,{value:"submitFunction",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestion\n    question=\"Select the primary color\"\n    solution={2}\n    options={[\n        'orange',\n        'white',\n        'red'\n    ]}\n    onSubmit={(result) => {\n        switch ( result ) {\n            case 'orange':\n                alert( 'No, orange is a mix of yellow and red.' );\n            break;\n            case 'white':\n                alert( 'White does not count as a color.' );\n            break;\n            case 'red':\n                alert( 'That is correct.' );\n            break;\n        }\n    }}\n    provideFeedback={false}\n/> \n")))))}d.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(n),p=a,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||r;return n?i.a.createElement(m,o(o({ref:t},c),{},{components:n})):i.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},435:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},441:function(e,t,n){"use strict";var a=n(0),i=n(442);t.a=function(){const e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},442:function(e,t,n){"use strict";var a=n(0);const i=Object(a.createContext)(void 0);t.a=i},446:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(441),l=n(435),o=n(58),s=n.n(o);const c=37,b=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:u,groupId:d,className:p}=e,{tabGroupChoices:m,setTabGroupChoices:O}=Object(r.a)(),[j,g]=Object(a.useState)(o),f=a.Children.toArray(e.children),h=[];if(null!=d){const e=m[d];null!=e&&e!==j&&u.some((t=>t.value===e))&&g(e)}const N=e=>{const t=e.target,n=h.indexOf(t),a=f[n].props.value;g(a),null!=d&&O(d,a)},v=e=>{var t;let n;switch(e.keyCode){case b:const t=h.indexOf(e.target)+1;n=h[t]||h[0];break;case c:const a=h.indexOf(e.target)-1;n=h[a]||h[h.length-1]}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},p)},u.map((({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,className:Object(l.a)("tabs__item",s.a.tabItem,{"tabs__item--active":j===e}),key:e,ref:e=>h.push(e),onKeyDown:v,onFocus:N,onClick:N},t)))),t?Object(a.cloneElement)(f.filter((e=>e.props.value===j))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}},447:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function({children:e,hidden:t,className:n}){return i.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);