(window.webpackJsonp=window.webpackJsonp||[]).push([[1239],{265:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),l=(n(0),n(410)),o={id:"sunburst",title:"Sunburst Plot",sidebar_label:"Sunburst Plot"},i={unversionedId:"plots/sunburst",id:"plots/sunburst",isDocsHomePage:!1,title:"Sunburst Plot",description:"Un graphique d'ensoleillement bas\xe9 sur d3 pour afficher les trajectoires.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/plots/sunburst.md",slug:"/plots/sunburst",permalink:"/fr/docs/plots/sunburst",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/sunburst.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614551296,formattedLastUpdatedAt:"28/02/2021",sidebar_label:"Sunburst Plot",sidebar:"docs",previous:{title:"Scatter Plot Matrix",permalink:"/fr/docs/plots/scatterplot-matrix"},next:{title:"Violin Plot",permalink:"/fr/docs/plots/violinplot"}},c=[{value:"Options",id:"options",children:[]},{value:"Exemples",id:"exemples",children:[]}],u={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Un graphique d'ensoleillement bas\xe9 sur d3 pour afficher les trajectoires."),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"categories")," | ",Object(l.b)("inlineCode",{parentName:"li"},"array (required)"),": tableau des noms de cat\xe9gories. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"data")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object (required)"),": objet de donn\xe9es. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"width")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": largeur de la parcelle (en px). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"750"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"height")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": hauteur de la parcelle (en px). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"600"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"style")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": Styles CSS en ligne. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"breadcrumbs")," | ",Object(l.b)("inlineCode",{parentName:"li"},"{w,h,s,t}"),": objet avec des dimensions : w pour la largeur, h pour la hauteur, s pour l'espacement, t pour la largeur de la pointe/queue. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{\n  'w': 250,\n  'h': 50,\n  's': 5,\n  't': 15\n}"),".")),Object(l.b)("h2",{id:"exemples"},"Exemples"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"")))}s.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||l;return n?a.a.createElement(m,i(i({ref:t},u),{},{components:n})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);