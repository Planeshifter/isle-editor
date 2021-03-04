(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),i=(n(0),n(410)),l=n(447),o=n(448),u={id:"number-question",title:"Number Question",sidebar_label:"Number Question"},s={unversionedId:"questions/number-question",id:"questions/number-question",isDocsHomePage:!1,title:"Number Question",description:"Un \xe9l\xe9ment de question num\xe9rique.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/questions/number.md",slug:"/questions/number-question",permalink:"/fr/docs/questions/number-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/number.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614808108,sidebar_label:"Number Question",sidebar:"docs",previous:{title:"Multiple Choice Question",permalink:"/fr/docs/questions/multiple-choice-question"},next:{title:"Order Question",permalink:"/fr/docs/questions/order-question"}},c=[{value:"Options",id:"options",children:[]},{value:"Exemples",id:"exemples",children:[]}],b={toc:c};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Un \xe9l\xe9ment de question num\xe9rique."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"question")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|node)"),": question num\xe9ro. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"hintPlacement")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),': l\'emplacement des indices (soit "en haut", "\xe0 gauche", "\xe0 droite" ou "en bas"). Default: ',Object(i.b)("inlineCode",{parentName:"li"},"'top'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"hints")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array<(string|node)>"),": des conseils sur la fa\xe7on de r\xe9pondre \xe0 la question. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"feedback")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le l'affichage des boutons de r\xe9troaction. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"solution")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(number|array<number>)"),": une r\xe9ponse num\xe9rique au probl\xe8me (ou plusieurs r\xe9ponses correctes si un tableau est fourni). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"digits")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": nombre de chiffres pour lesquels la r\xe9ponse fournie par l'\xe9tudiant doit correspondre \xe0 la solution pour \xeatre consid\xe9r\xe9e comme correcte. Mettre \xe0 0 pour correspondre comme un nombre entier. S'il est fix\xe9 \xe0 z\xe9ro, il recherchera une correspondance exacte.. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"3"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"max")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": valeur d'entr\xe9e maximale autoris\xe9e. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"null"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"min")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": valeur d'entr\xe9e minimale autoris\xe9e. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"null"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"defaultValue")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": valeur pr\xe9s\xe9lectionn\xe9e de la saisie du num\xe9ro. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"0"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"provideFeedback")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": indique si un retour d'information comprenant la bonne r\xe9ponse doit \xeatre affich\xe9 apr\xe8s que les apprenants aient soumis leurs r\xe9ponses. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"nTries")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),': apr\xe8s combien d\'essais un retour d\'information doit \xeatre fourni (si "provideFeedback" est "true"). Default: ',Object(i.b)("inlineCode",{parentName:"li"},"1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"disableSubmitNotification")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le s'il faut d\xe9sactiver les notifications de soumission. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"chat")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si l'\xe9l\xe9ment doit avoir un chat int\xe9gr\xe9. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"until")," | ",Object(i.b)("inlineCode",{parentName:"li"},"Date"),": le temps n\xe9cessaire pour permettre aux \xe9tudiants de soumettre des r\xe9ponses. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"points")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": nombre maximum de points attribu\xe9s dans le classement. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"10"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": Styles CSS en ligne. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onChange")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": rappel qui est d\xe9clench\xe9 apr\xe8s que la valeur du champ du num\xe9ro change ; re\xe7oit la valeur actuelle comme seul argument. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),': rappel invoqu\xe9 lors de la soumission de la r\xe9ponse ; a comme premier param\xe8tre un "bool\xe9en" indiquant si la r\xe9ponse a \xe9t\xe9 correctement donn\xe9e (le cas \xe9ch\xe9ant, "nul" sinon) et la r\xe9ponse fournie comme second param\xe8tre. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),Object(i.b)("h2",{id:"exemples"},"Exemples"),Object(i.b)(l.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Markdown",value:"markdownStyling"},{label:"With CSS",value:"withCSS"}],lazy:!0,mdxType:"Tabs"},Object(i.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<NumberQuestion\n    question="What is the number Pi? (include at least three digits after the decimal point)"\n    solution={3.142}\n/>\n'))),Object(i.b)(o.a,{value:"markdownStyling",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<NumberQuestion\n    question={<span>What is the number $\\pi$? (include at least _three_ digits after the decimal point)</span>}\n    solution={3.142}\n/>\n"))),Object(i.b)(o.a,{value:"withCSS",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<NumberQuestion\n    question={<span style={{ fontSize: 25, color: 'darkorange'}}>What is the number PI - three digits after the period</span>}\n    solution={3.142}\n/>\n")))))}m.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),c=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=c(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=c(n),p=a,d=b["".concat(l,".").concat(p)]||b[p]||m[p]||i;return n?r.a.createElement(d,o(o({ref:t},s),{},{components:n})):r.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},435:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},444:function(e,t,n){"use strict";var a=n(0),r=n(445);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},445:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},447:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(444),l=n(435),o=n(58),u=n.n(o);const s=37,c=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:b,groupId:m,className:p}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(i.a)(),[O,j]=Object(a.useState)(o),N=a.Children.toArray(e.children),g=[];if(null!=m){const e=d[m];null!=e&&e!==O&&b.some((t=>t.value===e))&&j(e)}const v=e=>{const t=e.target,n=g.indexOf(t),a=N[n].props.value;j(a),null!=m&&f(m,a)},h=e=>{var t;let n;switch(e.keyCode){case c:const t=g.indexOf(e.target)+1;n=g[t]||g[0];break;case s:const a=g.indexOf(e.target)-1;n=g[a]||g[g.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},p)},b.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(l.a)("tabs__item",u.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>g.push(e),onKeyDown:h,onFocus:v,onClick:v},t)))),t?Object(a.cloneElement)(N.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},N.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},448:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);