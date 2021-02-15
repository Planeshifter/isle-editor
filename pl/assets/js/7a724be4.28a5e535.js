(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{208:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(7),o=(t(0),t(406)),i={id:"proportions-survey",title:"Proportions Survey",sidebar_label:"Proportions Survey"},l={unversionedId:"proportions-survey",id:"proportions-survey",isDocsHomePage:!1,title:"Proportions Survey",description:"Komponent, kt\xf3ry pozwala grupie os\xf3b g\u0142osowa\u0107 nad wag\u0105 i znaczeniem danych opcji.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/proportions-survey.md",slug:"/proportions-survey",permalink:"/pl/docs/proportions-survey",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/proportions-survey.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612739298,sidebar_label:"Proportions Survey",sidebar:"docs",previous:{title:"Number Survey",permalink:"/pl/docs/number-survey"},next:{title:"R Help",permalink:"/pl/docs/r/r-help"}},p=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:p};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Komponent, kt\xf3ry pozwala grupie os\xf3b g\u0142osowa\u0107 nad wag\u0105 i znaczeniem danych opcji."),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy chce si\u0119 zezwoli\u0107 uczniom na wielokrotne udzielanie odpowiedzi na ankiet\u0119. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"anonymous")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy odpowiedzi uczni\xf3w s\u0105 anonimowe. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"colors")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array"),": Zestawienie kolor\xf3w dla element\xf3w wykresu ko\u0142owego. Je\u015bli nie zostanie zdefiniowana, zostanie u\u017cyta niestandardowa skala kolor\xf3w. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"disabled")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy badanie jest dezaktywowane. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"group")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": pozycja wy\u015bwietlania grupowego. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"'group results'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"groupHeight")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": proporcje wysoko\u015b\u0107 wej\u015bcia dla wy\u015bwietlania grupowego (w px). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"100"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"legends")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array"),": legendarne etykiety opisuj\u0105ce opcje, kt\xf3re maj\u0105 by\u0107 wa\u017cone. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"margin")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": proporcja mar\u017cy wej\u015bciowej (w px). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"'40px'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": funkcja wywo\u0142ania zwrotnego, wywo\u0142ywana po udzieleniu odpowiedzi przez student\xf3w. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"personalHeight")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": proporcje wysoko\u015b\u0107 wej\u015bcia dla poszczeg\xf3lnych uczni\xf3w (w px). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"200"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"precision")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": wy\u015bwietlana precyzja warto\u015bci proporcji. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"2"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"question")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(string|node)"),": pytanie, kt\xf3re ma zosta\u0107 wy\u015bwietlone. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"''"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"step")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": krok strza\u0142ek widoczny po najechaniu kursorem nad pole wprowadzania danych. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"0.25"),".")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ProportionsSurvey \n    id="Survey"\n    question="Decide what is important"\n    group="Group decision"\n    nElements={3}\n    colors = {[ "red", "blue", "gold" ]}\n    personalHeight={300}\n    groupHeight={200}\n    margin="80px"\n    legends={[ "bitcoin", "old", "diamonds" ]}\n/>\n')))}b.isMDXComponent=!0},406:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),b=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=b(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=b(t),d=r,m=u["".concat(i,".").concat(d)]||u[d]||s[d]||o;return t?a.a.createElement(m,l(l({ref:n},c),{},{components:t})):a.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);