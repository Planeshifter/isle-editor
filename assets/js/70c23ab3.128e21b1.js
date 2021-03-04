(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{197:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),l=n(7),i=(n(0),n(410)),r={id:"data-table",title:"Data Table",sidebar_label:"Data Table"},o={unversionedId:"data-table",id:"data-table",isDocsHomePage:!1,title:"Data Table",description:"A component rendering data in a tabular display. Built on top of react-table.",source:"@site/docs/data-table.md",slug:"/data-table",permalink:"/docs/data-table",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/data-table.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614613459,sidebar_label:"Data Table",sidebar:"docs",previous:{title:"Data Explorer",permalink:"/docs/data-explorer"},next:{title:"Feedback Buttons",permalink:"/docs/feedback"}},b=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:b};function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A component rendering data in a tabular display. Built on top of ",Object(i.b)("a",{parentName:"p",href:"https://react-table.js.org/"},"react-table"),"."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(array|object) (required)"),": A data object or array to be viewed. If it is an object, the keys correspond to column values while an array will expect an array of objects with a named field corresponding to each column. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"dataInfo")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": object with ",Object(i.b)("inlineCode",{parentName:"li"},"info")," string array describing the data set, the ",Object(i.b)("inlineCode",{parentName:"li"},"name")," of the dataset, an ",Object(i.b)("inlineCode",{parentName:"li"},"object")," of ",Object(i.b)("inlineCode",{parentName:"li"},"variables")," with keys corresponding to variable names and values to variable descriptions, an a ",Object(i.b)("inlineCode",{parentName:"li"},"showOnStartup")," boolean controlling whether to display the info modal on startup. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{\n  'info': [],\n  'name': '',\n  'variables': null,\n  'showOnStartup': false\n}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"deletable")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether columns for which no ",Object(i.b)("inlineCode",{parentName:"li"},"info")," exist have a button which when clicked calls the ",Object(i.b)("inlineCode",{parentName:"li"},"onColumnDelete")," callback function. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"undeletableVars")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array<string>"),": array of variable names of columns which may not be deleted. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"filterable")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether columns are filterable. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"editable")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array"),": array of names for columns that shall be editable. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"getTrProps")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": callback function executed for each row to customize its styling (passed table state, row info,\ncolumn, and the table instance). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onColumnDrag")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": function invoked when a column has been dragged to a different position. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onColumnDrag() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onColumnDelete")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": function invoked with the name of a column when the respective delete button for a column is clicked. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onColumnDelete() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onColumnNameChange")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": function invoked when a column has been renamed (called with the old name as first and new name as second argument). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onColumnNameChange() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onClickRemove")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": function specifying an action to take for rows removed from the data (defaults to an empty function). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onClickRemove() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onEdit")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": function invoked with the updated data set after the value of a cell was changed by the user (only applies when table is ",Object(i.b)("inlineCode",{parentName:"li"},"editable"),"). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onEdit() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onTutorialCompletion")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": function invoked when user has completed the data table tutorial. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onTutorialCompletion() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"filters")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array"),": array of filters. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onFilteredChange")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": function invoked with the current filters after data has been filtered by user. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onFilteredChange() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"showRemove")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": indicates whether to display checkboxes for rows to be removed. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"showIdColumn")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to show an ID column. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"disableDownload")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": whether to hide the button to download the data as a CSV or JSON file. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"className")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": class name. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": An object allowing for custom css styling. Defaults to an empty object. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<DataTable\n    showRemove\n    onClickRemove={( data ) => { console.log(data); }}\n    data={{ \n        firstName: [ 'Hans', 'Lotti', 'Fritz' ], \n        lastName: [ 'Bauer', 'M\xfcller', 'Schultz' ],\n        age: [ 37, 55, 62 ]\n    }}\n    style={{ width: 600 }}\n/>\n")))}p.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),l=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=l.a.createContext({}),p=function(e){var t=l.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,u=s["".concat(r,".").concat(m)]||s[m]||d[m]||i;return n?l.a.createElement(u,o(o({ref:t},c),{},{components:n})):l.a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var c=2;c<i;c++)r[c]=n[c];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);