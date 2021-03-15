(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{214:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(410)),l={id:"voice-input",title:"Voice Input",sidebar_label:"Voice Input"},o={unversionedId:"input/voice-input",id:"input/voice-input",isDocsHomePage:!1,title:"Voice Input",description:"\u4e00\u4e2a\u8bed\u97f3\u8f93\u5165\u7ec4\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/input/voice.md",slug:"/input/voice-input",permalink:"/zh/docs/input/voice-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/voice.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"2021/2/21",sidebar_label:"Voice Input",sidebar:"docs",previous:{title:"Text Input",permalink:"/zh/docs/input/text-input"},next:{title:"Accordion",permalink:"/zh/docs/accordion"}},b=[{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],c={toc:b};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u4e00\u4e2a\u8bed\u97f3\u8f93\u5165\u7ec4\u4ef6\u3002"),Object(r.b)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"autorecord")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u662f\u5426\u81ea\u52a8\u5f00\u59cb\u5f55\u5236. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"defaultValue")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": \u9ed8\u8ba4\u6587\u672c\u503c. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"grammars")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": \u8bed\u97f3\u8bed\u6cd5\u8868(\u4e0d\u652f\u6301). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"legend")," | ",Object(r.b)("inlineCode",{parentName:"li"},"(string|node)"),": \u56fe\u4f8b\u5728\u8f93\u5165\u680f\u524d\u663e\u793a. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"mode")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),': \u8bbe\u7f6e\u4e3a "full "\u5728\u9ea6\u514b\u98ce\u65c1\u663e\u793a\u6587\u672c\u8f93\u5165\u5b57\u6bb5\uff0c"status "\u53ea\u663e\u793a\u5e26\u6709\u8f6c\u5f55\u6587\u672c\u7684\u72b6\u6001\u680f\uff0c"microphone "\u53ea\u663e\u793a\u4e00\u4e2a\u6309\u94ae\u6765\u5207\u6362\u5f55\u97f3\uff0c\u6216\u8005 "none "\u5f53\u8bed\u97f3\u8f93\u5165\u5e94\u8be5\u662f\u9690\u5f62\u7684\uff0c\u7eaf\u7cb9\u901a\u8fc7\u70ed\u952e/\u8bed\u97f3\u547d\u4ee4\u6765\u63a7\u5236\u3002. Default: ',Object(r.b)("inlineCode",{parentName:"li"},"'full'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"maxAlternatives")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": \u6bcf\u4e2a\u8bed\u97f3\u8bc6\u522b\u7ed3\u679c\u63d0\u4f9b\u7684\u6700\u591a\u5907\u9009\u65b9\u6848\u6570\u91cf. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"1"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onChange")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": \u6587\u672c\u8f93\u5165\u503c\u66f4\u65b0\u65f6\u8c03\u7528\u56de\u8c03\u51fd\u6570\u3002. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onClick")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": \u70b9\u51fb\u9ea6\u514b\u98ce\u6309\u94ae\u65f6\u8c03\u7528\u7684\u56de\u8c03\u51fd\u6570\u3002. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onClick() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onFinalText")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": \u56de\u8c03\u51fd\u6570. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onFinalText() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onRecordingStart")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": \u5f00\u59cb\u5f55\u97f3\u65f6\u8c03\u7528\u7684\u56de\u8c03\u51fd\u6570. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onRecordingStart() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onRecordingStop")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": \u5f55\u5236\u505c\u6b62\u540e\u8c03\u7528\u56de\u8c03\u51fd\u6570. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onRecordingStop() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onSegment")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": \u56de\u8c03\u51fd\u6570\u4e0e\u6587\u672c\u6bb5\u8c03\u7528. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onSegment() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),': \u70b9\u51fb "Enter "\u63d0\u4ea4\u6587\u672c\u8f93\u5165\u503c\u65f6\u7684\u56de\u8c03\u51fd\u6570\u3002. Default: ',Object(r.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"placeholder")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": \u6587\u672c\u8f93\u5165\u5360\u4f4d\u7b26. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"remote")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),': \u5bf9\u8c61\u7684 "\u5f00\u59cb"\u3001"\u505c\u6b62"\u3001"\u5207\u6362 "\u548c\u76f8\u5173\u70ed\u952e\u3002. Default: ',Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"className")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": \u73ed\u540d. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"style")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": CSS\u5185\u8054\u6837\u5f0f. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"timeout")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": \u5f55\u97f3\u8d85\u65f6\u7684\u6beb\u79d2\u6570\u3002. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"stopTooltip")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": \u5f55\u5236\u65f6\u663e\u793a\u5de5\u5177\u63d0\u793a\u4fe1\u606f. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"startTooltip")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": \u4e0d\u8bb0\u5f55\u65f6\u663e\u793a\u5de5\u5177\u63d0\u793a\u4fe1\u606f. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"tooltipPlacement")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": \u5de5\u5177\u63d0\u793a\u7684\u65b9\u5411. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'left'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"width")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": \u8bed\u97f3\u8f93\u5165\u5bbd\u5ea6(\u5355\u4f4d\uff1apx). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"500"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"height")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": \u8bed\u97f3\u8f93\u5165\u9ad8\u5ea6(\u5355\u4f4d\uff1apx). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"36"),".")),Object(r.b)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<VoiceInput\n    langage="en-US"\n    defaultValue="Enter text"\n/>\n')))}p.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},O=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),u=p(n),O=a,d=u["".concat(l,".").concat(O)]||u[O]||m[O]||r;return n?i.a.createElement(d,o(o({ref:t},c),{},{components:n})):i.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=O;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);