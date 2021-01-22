(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{235:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(386)),o={id:"sortable-tree",title:"Sortable Tree",sidebar_label:"Sortable Tree"},l={unversionedId:"sortable-tree",id:"sortable-tree",isDocsHomePage:!1,title:"Sortable Tree",description:"A thin wrapper around react-sortable-tree that supports all properties of said component.",source:"@site/docs/sortable-tree.md",slug:"/sortable-tree",permalink:"/docs/sortable-tree",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/sortable-tree.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1593652114,sidebar_label:"Sortable Tree",sidebar:"docs",previous:{title:"Recorder",permalink:"/docs/recorder"},next:{title:"Expire",permalink:"/docs/expire"}},s=[{value:"Example",id:"example",children:[]},{value:"Options",id:"options",children:[]}],c={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A thin wrapper around ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/react-sortable-tree"}),"react-sortable-tree")," that supports all properties of said component."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<SortableTree \n  onlyExpandSearchedNodes \n  canDrag={false} \n  treeData={[{\n    title: 'Type of Data',\n    children: [{\n        title: 'Categorical',\n        children: [{\n          title: 'Chi-Square Test',\n          subtitle: 'Test for independence for two variables or goodness-of-fit test'\n        }]\n      },\n      {\n        title: 'Continuous',\n        children: [{\n            title: 'Group Differences',\n            children: [{\n                title: 'Between Means',\n                children: [{\n                  title: 'How many groups?',\n                  children: [{\n                      title: 'Two',\n                      children: [{\n                        title: 'Are assumptions satisfied (potentially after data transformations)?',\n                        subtitle: '1. Equal variances in both groups, 2. Data normally distributed or sufficiently large sample',\n                        children: [{\n                            title: 'If yes, can use a parametric test',\n                            subtitle: 'Student\\'s t-test (paired or unpaired)'\n                          },\n                          {\n                            title: 'If not, use a nonparametric randomization test',\n                            subtitle: 'E.g., Wilcoxon Rank Sum Test or Mann-Whitney U Test'\n                          }\n                        ]\n                      }]\n                    },\n                    {\n                      title: 'More than two',\n                      children: [{\n                        title: 'Are assumptions satisfied (potentially after data transformations)?',\n                        subtitle: '1. Equal variances in each group, 2. Data normally distributed or sufficiently large sample',\n                        children: [{\n                            title: 'If yes, can use a parametric test',\n                            subtitle: 'ANOVA (Analysis of Variance)'\n                          },\n                          {\n                            title: 'If not, use a nonparametric randomization test',\n                            subtitle: 'E.g., Kruskal-Wallis Test'\n                          }\n                        ]\n                      }]\n                    }\n                  ]\n                }]\n              },\n              {\n                title: 'Between Variances',\n                subtitle: 'Bartlett\\'s Test or Levene\\'s Test when data are normally distrubuted'\n              }\n            ]\n          },\n          {\n            title: 'Relationships between Variables',\n            children: [{\n              title: 'Regression Analysis',\n              subtitle: 'Simple linear regression for one response and one predictor,\\nmultiple regression in case of several explanatory variables.'\n            }]\n          }\n        ]\n      }\n    ]\n  }]}\n/>\n")),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"title")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": header title. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),".")))}p.isMDXComponent=!0},386:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?a.a.createElement(f,l(l({ref:t},c),{},{components:n})):a.a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);