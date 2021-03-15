(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{128:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return r})),o.d(t,"metadata",(function(){return l})),o.d(t,"toc",(function(){return s})),o.d(t,"default",(function(){return u}));var n=o(3),a=o(7),i=(o(0),o(410)),r={id:"editor-images",title:"Including Images and Videos",sidebar_label:"Images"},l={unversionedId:"tutorials/editor-images",id:"tutorials/editor-images",isDocsHomePage:!1,title:"Including Images and Videos",description:"Images",source:"@site/docs/tutorials/editor-images.md",slug:"/tutorials/editor-images",permalink:"/it/docs/tutorials/editor-images",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tutorials/editor-images.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1599156245,formattedLastUpdatedAt:"3/9/2020",sidebar_label:"Images",sidebar:"docs",previous:{title:"Entering Text",permalink:"/it/docs/tutorials/editor-text"},next:{title:"How to Use Questions",permalink:"/it/docs/tutorials/question-components"}},s=[{value:"Images",id:"images",children:[{value:"Uploading Images to Course Files",id:"uploading-images-to-course-files",children:[]}]},{value:"Videos",id:"videos",children:[]}],c={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"images"},"Images"),Object(i.b)("p",null,"Markdown syntax can be used to embed images in ISLE lessons, which takes the general form"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'![Alt text](path "optional title")\n')),Object(i.b)("p",null,"This way, we can easily embed images that are hosted online in an ISLE lesson. for example, to include a picture of Paul the octopus from the 2010 World Cup, we could do"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'![Paul the octopus](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Oktopus-Orakel_Paul_mit_Schuh.JPG/1280px-Oktopus-Orakel_Paul_mit_Schuh.JPG "Paul the octopus")\n')),Object(i.b)("p",null,"which renders to"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Oktopus-Orakel_Paul_mit_Schuh.JPG/1280px-Oktopus-Orakel_Paul_mit_Schuh.JPG",alt:"Paul",title:"Paul the octopus"})),Object(i.b)("p",null,"(hover over the image to see the title provided)."),Object(i.b)("p",null,"Alternatively, images can be included with custom ",Object(i.b)("inlineCode",{parentName:"p"},"<Image />")," tags. Since Markdown ",Object(i.b)("a",{parentName:"p",href:"https://daringfireball.net/projects/markdown/syntax#img"},"does not")," support specifying image dimensions, you can use HTML ",Object(i.b)("inlineCode",{parentName:"p"},"<Image />")," syntax to include an image and customize its width and height. For example, to specify dimensions for the picture of Paul the octopus:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'<Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Oktopus-Orakel_Paul_mit_Schuh.JPG/1280px-Oktopus-Orakel_Paul_mit_Schuh.JPG" width="200px" height="200px" />\n')),Object(i.b)("p",null,"which becomes"),Object(i.b)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Oktopus-Orakel_Paul_mit_Schuh.JPG/1280px-Oktopus-Orakel_Paul_mit_Schuh.JPG",width:"200",height:"200"}),Object(i.b)("p",null,"Most commonly, you want to only set either the width or the height and set the other one to ",Object(i.b)("inlineCode",{parentName:"p"},"auto")," to not stretch the image and preserve its original aspect ratio. Common ways of setting the dimensions is as pixels (e.g.,",Object(i.b)("inlineCode",{parentName:"p"},"200px"),") or in percent of the containing block (e.g., ",Object(i.b)("inlineCode",{parentName:"p"},"20%"),")."),Object(i.b)("h3",{id:"uploading-images-to-course-files"},"Uploading Images to Course Files"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"But what if we want to use an image we've created locally, rather than one hosted on the web?")," The ISLE course dashboard provides an easy to to upload files. Suppose we have the following plot that we want to embed in our lesson:"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://isle.heinz.cmu.edu/Demo_histograms.png",alt:"histograms"})),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Go to your ISLE dashboard and select the course."),Object(i.b)("li",{parentName:"ol"},"Click the blue ",Object(i.b)("strong",{parentName:"li"},"Course Data")," button (pie-chart symbol) in the top bar."),Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)("strong",{parentName:"li"},"Owner Files"),"."),Object(i.b)("li",{parentName:"ol"},"Click the green ",Object(i.b)("strong",{parentName:"li"},"Upload file")," button; select the file you wish to upload."),Object(i.b)("li",{parentName:"ol"},"To see the uploaded file and get the url, click ",Object(i.b)("strong",{parentName:"li"},"Open")," next to the file name or use the button to directly copy the URL into your clipboard.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"Add Owner",src:o(4745).default})),Object(i.b)("p",null,"Now you can use the url of the uploaded image to embed the image in your ISLE lesson. For example, we can include the plot above by"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"![histograms](https://isle.heinz.cmu.edu/Demo_histograms.png)\n")),Object(i.b)("br",null),Object(i.b)("h2",{id:"videos"},"Videos"),Object(i.b)("p",null,"As with images, videos must be hosted online (such as on YouTube) to be embedded in an ISLE lesson. To include a video, you can use ISLE's custom ",Object(i.b)("inlineCode",{parentName:"p"},"<VideoPlayer />")," tag. For example, to include ",Object(i.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=wPqtzj5VZus"},"this")," video of Trevor Hastie speaking on gradient boosting, we could use"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'<VideoPlayer url="https://www.youtube.com/watch?v=wPqtzj5VZus" />\n')),Object(i.b)("p",null,"This tag also provides several customization options, including the dimensions of the embedded video, whether or not it plays automatically, and the start time of the video. Full details can be found in the ",Object(i.b)("a",{parentName:"p",href:"https://isledocs.com/docs/video-player"},"ISLE docs"),"."))}u.isMDXComponent=!0},410:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return m}));var n=o(0),a=o.n(n);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(o),b=n,m=p["".concat(r,".").concat(b)]||p[b]||d[b]||i;return o?a.a.createElement(m,l(l({ref:t},c),{},{components:o})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<i;c++)r[c]=o[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"},4745:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/upload_file-2003e7760bfe7627cb295219f7bea3eb.gif"}}]);