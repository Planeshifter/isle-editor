(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{199:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),l=(n(0),n(406)),r={id:"data-table",title:"Data Table",sidebar_label:"Data Table"},o={unversionedId:"data-table",id:"data-table",isDocsHomePage:!1,title:"Data Table",description:"A component rendering data in a tabular display. Built on top of react-table.",source:"@site/docs/data-table.md",slug:"/data-table",permalink:"/docs/data-table",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/data-table.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612731787,sidebar_label:"Data Table",sidebar:"docs",previous:{title:"Data Explorer",permalink:"/docs/data-explorer"},next:{title:"Feedback Buttons",permalink:"/docs/feedback"}},b=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:b};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"A component rendering data in a tabular display. Built on top of ",Object(l.b)("a",{parentName:"p",href:"https://react-table.js.org/"},"react-table"),"."),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"data")," | ",Object(l.b)("inlineCode",{parentName:"li"},"(array|object) (required)"),": A data object or array to be viewed. If it is an object, the keys correspond to column values while an array will expect an array of objects with a named field corresponding to each column. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"dataInfo")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": object with ",Object(l.b)("inlineCode",{parentName:"li"},"info")," string array describing the data set, the ",Object(l.b)("inlineCode",{parentName:"li"},"name")," of the dataset, an ",Object(l.b)("inlineCode",{parentName:"li"},"object")," of ",Object(l.b)("inlineCode",{parentName:"li"},"variables")," with keys corresponding to variable names and values to variable descriptions, an a ",Object(l.b)("inlineCode",{parentName:"li"},"showOnStartup")," boolean controlling whether to display the info modal on startup. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{\n  'info': [],\n  'name': '',\n  'variables': null,\n  'showOnStartup': false\n}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"deletable")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether columns for which no ",Object(l.b)("inlineCode",{parentName:"li"},"info")," exist have a button which when clicked calls the ",Object(l.b)("inlineCode",{parentName:"li"},"onColumnDelete")," callback function. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"undeletableVars")," | ",Object(l.b)("inlineCode",{parentName:"li"},"array<string>"),": array of variable names of columns which may not be deleted. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"filterable")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether columns are filterable. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"true"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"editable")," | ",Object(l.b)("inlineCode",{parentName:"li"},"array"),": array of names for columns that shall be editable. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"getTrProps")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": callback function executed for each row to customize its styling (passed table state, row info,\ncolumn, and the table instance). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onColumnDrag")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": function invoked when a column has been dragged to a different position. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onColumnDrag() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onColumnDelete")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": function invoked with the name of a column when the respective delete button for a column is clicked. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onColumnDelete() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onColumnNameChange")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": function invoked when a column has been renamed (called with the old name as first and new name as second argument). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onColumnNameChange() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onClickRemove")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": function specifying an action to take for rows removed from the data (defaults to an empty function). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onClickRemove() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onEdit")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": function invoked with the updated data set after the value of a cell was changed by the user (only applies when table is ",Object(l.b)("inlineCode",{parentName:"li"},"editable"),"). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onEdit() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onTutorialCompletion")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": function invoked when user has completed the data table tutorial. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onTutorialCompletion() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"filters")," | ",Object(l.b)("inlineCode",{parentName:"li"},"array"),": undefined. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onFilteredChange")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": function invoked with the current filters after data has been filtered by user. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onFilteredChange() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"showRemove")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": indicates whether to display checkboxes for rows to be removed. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"showIdColumn")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to show an ID column. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"true"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"disableDownload")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": whether to hide the button to download the data as a CSV or JSON file. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"className")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": class name. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"style")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": An object allowing for custom css styling. Defaults to an empty object. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<DataTable\n    showRemove\n    onClickRemove={( data ) => { console.log(data); }}\n    data={{ \n        firstName: [ 'Hans', 'Lotti', 'Fritz' ], \n        lastName: [ 'Bauer', 'M\xfcller', 'Schultz' ],\n        age: [ 37, 55, 62 ]\n    }}\n    style={{ width: 600 }}\n/>\n")))}p.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,u=d["".concat(r,".").concat(m)]||d[m]||s[m]||l;return n?i.a.createElement(u,o(o({ref:t},c),{},{components:n})):i.a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var c=2;c<l;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);