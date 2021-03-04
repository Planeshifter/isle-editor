(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{195:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a,i=n(3),r=n(7),l=(n(0),n(410)),o=n(447),c=n(448),s={id:"image-question",title:"Image Question",sidebar_label:"Image Question"},b={unversionedId:"questions/image-question",id:"questions/image-question",isDocsHomePage:!1,title:"Image Question",description:"Een vraag die de gebruiker vraagt om een afbeelding te uploaden.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/questions/image.md",slug:"/questions/image-question",permalink:"/nl/docs/questions/image-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/image.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614117474,sidebar_label:"Image Question",sidebar:"docs",previous:{title:"Free Text Question",permalink:"/nl/docs/questions/free-text-question"},next:{title:"Match List Question",permalink:"/nl/docs/questions/match-list-question"}},u=[{value:"Opties",id:"opties",children:[]},{value:"Voorbeelden",id:"voorbeelden",children:[]}],m=(a="Sketchpad",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),d={toc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(i.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Een vraag die de gebruiker vraagt om een afbeelding te uploaden."),Object(l.b)("h2",{id:"opties"},"Opties"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"question")," | ",Object(l.b)("inlineCode",{parentName:"li"},"(string|node)"),": tekst voor de vraag. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"hintPlacement")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": plaatsing van de hints (ofwel ",Object(l.b)("inlineCode",{parentName:"li"},"top"),", ",Object(l.b)("inlineCode",{parentName:"li"},"left"),", ",Object(l.b)("inlineCode",{parentName:"li"},"right"),", of ",Object(l.b)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"'bottom'"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"hints")," | ",Object(l.b)("inlineCode",{parentName:"li"},"array<(string|node)>"),": tips die een leidraad bieden voor het beantwoorden van de vraag. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"feedback")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": regelt of er terugmeldingsknoppen moeten worden weergegeven. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"true"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"chat")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of het element een ge\xefntegreerde chat moet hebben. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"disableSubmitNotification")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controleert of een melding moet worden weergegeven na het indienen van een afbeelding. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"className")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": klassennaam. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"sketchpad")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": eigenschappen die moeten worden doorgegeven aan ",Object(l.b)(m,{mdxType:"Sketchpad"})," component; om het schetsblok weer te geven, geef je ten minste een leeg object ",Object(l.b)("inlineCode",{parentName:"li"},"{}")," door. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"solution")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": beeld URL van modeloplossing. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"until")," | ",Object(l.b)("inlineCode",{parentName:"li"},"Date"),": tijd tot de studenten de gelegenheid krijgen om antwoorden in te dienen. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"points")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": maximumaantal punten voor de indeling in klassen. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"10"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"style")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": CSS inline-stijlen. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": callback ingeroepen bij het indienen van een antwoord; heeft als enige parameter een ",Object(l.b)("inlineCode",{parentName:"li"},"boolean")," die aangeeft of de elementen in de juiste volgorde zijn geplaatst. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),Object(l.b)("h2",{id:"voorbeelden"},"Voorbeelden"),Object(l.b)(o.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Sketchpad",value:"witchSketchpad"},{label:"Submit Plot",value:"submitPlot"},{label:"Solution",value:"solution"},,],lazy:!0,mdxType:"Tabs"},Object(l.b)(c.a,{value:"minimal",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ImageQuestion question="You may upload an image." feedback={false}  />\n'))),Object(l.b)(c.a,{value:"witchSketchpad",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ImageQuestion question="Please enter your signature." feedback={false} sketchpad={{ canvasHeight: 300}} />\n'))),Object(l.b)(c.a,{value:"submitPlot",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<div>\n  <ScatterPlot  data={heartdisease} xval="Age" yval="Cost" />\n  <ImageQuestion question="Please adjust the range of values to show, change the axis labels and title of the plot, and submit your result." />\n</div>\n'))),Object(l.b)(c.a,{value:"solution",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ImageQuestion solution="https://bit.ly/3utaXOb" question="Please enter the Greek letter \'Gamma\'." feedback={false} sketchpad={{ canvasHeight: 300}} />\n')))))}p.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,p=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?i.a.createElement(p,o(o({ref:t},s),{},{components:n})):i.a.createElement(p,o({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},435:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},444:function(e,t,n){"use strict";var a=n(0),i=n(445);t.a=function(){const e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},445:function(e,t,n){"use strict";var a=n(0);const i=Object(a.createContext)(void 0);t.a=i},447:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(444),l=n(435),o=n(58),c=n.n(o);const s=37,b=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:u,groupId:m,className:d}=e,{tabGroupChoices:p,setTabGroupChoices:g}=Object(r.a)(),[f,j]=Object(a.useState)(o),O=a.Children.toArray(e.children),v=[];if(null!=m){const e=p[m];null!=e&&e!==f&&u.some((t=>t.value===e))&&j(e)}const N=e=>{const t=e.target,n=v.indexOf(t),a=O[n].props.value;j(a),null!=m&&g(m,a)},h=e=>{var t;let n;switch(e.keyCode){case b:const t=v.indexOf(e.target)+1;n=v[t]||v[0];break;case s:const a=v.indexOf(e.target)-1;n=v[a]||v[v.length-1]}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},d)},u.map((({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>v.push(e),onKeyDown:h,onFocus:N,onClick:N},t)))),t?Object(a.cloneElement)(O.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},O.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},448:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function({children:e,hidden:t,className:n}){return i.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);