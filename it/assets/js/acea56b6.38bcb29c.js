(window.webpackJsonp=window.webpackJsonp||[]).push([[1210],{236:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return m}));var a=n(3),i=n(7),r=(n(0),n(410)),o=n(443),l=n(444),s={id:"range-question",title:"Range Question",sidebar_label:"Range Question"},c={unversionedId:"questions/range-question",id:"questions/range-question",isDocsHomePage:!1,title:"Range Question",description:"Una componente di domanda di gamma che chiede agli studenti di fornire un punto finale inferiore e superiore.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/questions/range.md",slug:"/questions/range-question",permalink:"/it/docs/questions/range-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/range.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614808281,formattedLastUpdatedAt:"3/3/2021",sidebar_label:"Range Question",sidebar:"docs",previous:{title:"Quiz",permalink:"/it/docs/questions/quiz"},next:{title:"Select Question",permalink:"/it/docs/questions/select-question"}},b=[{value:"Opzioni",id:"opzioni",children:[]},{value:"Esempi",id:"esempi",children:[]}],u={toc:b};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Una componente di domanda di gamma che chiede agli studenti di fornire un punto finale inferiore e superiore."),Object(r.b)("h2",{id:"opzioni"},"Opzioni"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"question")," | ",Object(r.b)("inlineCode",{parentName:"li"},"(string|node)"),": domanda visualizzata. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"solution")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array<number>"),": array a due elementi contenente i punti finali del corretto intervallo. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hintPlacement")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": posizionamento dei suggerimenti (in alto, a sinistra, a destra o in basso). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'top'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hints")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array<(string|node)>"),": suggerimenti che forniscono indicazioni su come rispondere alla domanda. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"labels")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),': array a due elementi di etichette personalizzate diverse da "Abbassare" e "In alto". Default: ',Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"feedback")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controlla se visualizzare i pulsanti di feedback. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"chat")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controlla se l'elemento deve avere una chat integrata. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"digits")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": numero di cifre che devono corrispondere tra la soluzione e la risposta fornita dall'utente. Se non \xe8 dato o impostato a zero, il componente verifica la stretta uguaglianza. Se impostato a 0, verifica l'uguaglianza dei numeri interi. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"3"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"max")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": valore massimo di ingresso. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"null"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"min")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": valore minimo di ingresso. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"null"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"provideFeedback")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": indica se il feedback, compresa la risposta corretta, deve essere visualizzato dopo che gli studenti hanno inviato le loro risposte. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controlla se si possono inviare pi\xf9 risposte. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"until")," | ",Object(r.b)("inlineCode",{parentName:"li"},"Date"),": il tempo necessario per consentire agli studenti di presentare le risposte. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"points")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": numero massimo di punti assegnati in classifica. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"10"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"style")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": Stili in linea CSS. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onChangeLower")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": richiamo attivato dopo che il limite inferiore \xe8 stato modificato dall'utente. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onChangeLower() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onChangeUpper")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": richiamo attivato dopo che il limite superiore \xe8 stato modificato dall'utente. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onChangeUpper() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": richiamata al momento dell'invio della risposta; ha come primo parametro un ",Object(r.b)("inlineCode",{parentName:"li"},"booleano")," che indica se la risposta \xe8 stata data correttamente (se applicabile, ",Object(r.b)("inlineCode",{parentName:"li"},"null")," altrimenti) e la risposta fornita come secondo parametro. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),Object(r.b)("h2",{id:"esempi"},"Esempi"),Object(r.b)(o.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Hints",value:"withHints"},{label:"With Style",value:"withStyle"},{label:"With Points and Feedback",value:"withPoints"}],lazy:!0,mdxType:"Tabs"},Object(r.b)(l.a,{value:"minimal",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RangeQuestion\n    style={{ fontSize: 17, }}\n    question=\"What year did the Thirty Years War broke out and when did it?\"\n    solution={[1618,1648]}\n    labels={['Start', 'End']}\n    min={1500}\n    max={2000}\n/>\n"))),Object(r.b)(l.a,{value:"withHints",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RangeQuestion\n    question=\"What year did the Thirty Years War broke out and when did it?\"\n    solution={[1618,1648]}\n    labels={['Start', 'End']}\n    min={1500}\n    max={2000}\n    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}\n/>\n"))),Object(r.b)(l.a,{value:"withStyle",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RangeQuestion\n    style={{ fontFamily: 'Georgia', boxShadow: '0 0  10px darkblue'}}\n    question=\"What year did the Thirty Years War broke out and when did it?\"\n    solution={[1618,1648]}\n    labels={['Start', 'End']}\n    min={1500}\n    max={2000}\n/>\n"))),Object(r.b)(l.a,{value:"withPoints",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RangeQuestion\n    question=\"What year did the Thirty Years War broke out and when did it?\"\n    solution={[1618,1648]}\n    labels={['Start', 'End']}\n    min={1500}\n    max={2000}\n    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}\n    points={20}\n    onSubmit={(res) => {\n     if (res === true) {\n      alert('Great, you have received 20 points');\n     }\n     else alert('sorry, this answer was wrong');\n    }}\n/>\n")))))}m.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(n),p=a,d=u["".concat(o,".").concat(p)]||u[p]||m[p]||r;return n?i.a.createElement(d,l(l({ref:t},c),{},{components:n})):i.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},434:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},440:function(e,t,n){"use strict";var a=n(0),i=n(441);t.a=function(){const e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},441:function(e,t,n){"use strict";var a=n(0);const i=Object(a.createContext)(void 0);t.a=i},443:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(440),o=n(434),l=n(57),s=n.n(l);const c=37,b=39;t.a=function(e){const{lazy:t,block:n,defaultValue:l,values:u,groupId:m,className:p}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(r.a)(),[O,j]=Object(a.useState)(l),g=a.Children.toArray(e.children),h=[];if(null!=m){const e=d[m];null!=e&&e!==O&&u.some((t=>t.value===e))&&j(e)}const N=e=>{const t=e.target,n=h.indexOf(t),a=g[n].props.value;j(a),null!=m&&(f(m,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:i}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:o}=window;return t>=0&&i<=o&&a<=r&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.a.tabItemActive),setTimeout((()=>t.classList.remove(s.a.tabItemActive)),2e3))}),150))},v=e=>{var t;let n;switch(e.keyCode){case b:{const t=h.indexOf(e.target)+1;n=h[t]||h[0];break}case c:{const t=h.indexOf(e.target)-1;n=h[t]||h[h.length-1];break}}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},p)},u.map((({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>h.push(e),onKeyDown:v,onFocus:N,onClick:N},t)))),t?Object(a.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},444:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function({children:e,hidden:t,className:n}){return i.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);