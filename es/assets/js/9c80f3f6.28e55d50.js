(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{231:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),s=n(7),r=(n(0),n(410)),i={id:"classroom-use",title:"Using ISLE in the Classroom",sidebar_label:"Classroom Use"},o={unversionedId:"tutorials/classroom-use",id:"tutorials/classroom-use",isDocsHomePage:!1,title:"Using ISLE in the Classroom",description:"Running Labs and In-Class Activities",source:"@site/docs/tutorials/classroom-use.md",slug:"/tutorials/classroom-use",permalink:"/es/docs/tutorials/classroom-use",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tutorials/classroom-use.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1598768092,formattedLastUpdatedAt:"30/8/2020",sidebar_label:"Classroom Use",sidebar:"docs",previous:{title:"Managing the Course in ISLE",permalink:"/es/docs/tutorials/course-management"},next:{title:"Data Explorer",permalink:"/es/docs/data-explorer"}},c=[{value:"Running Labs and In-Class Activities",id:"running-labs-and-in-class-activities",children:[{value:"Viewing Student Responses and Feedback",id:"viewing-student-responses-and-feedback",children:[]},{value:"Tracking Student Progress",id:"tracking-student-progress",children:[]}]}],l={toc:c};function u(e){var t=e.components,i=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"running-labs-and-in-class-activities"},"Running Labs and In-Class Activities"),Object(r.b)("h3",{id:"viewing-student-responses-and-feedback"},"Viewing Student Responses and Feedback"),Object(r.b)("p",null,"To see student responses to a question, click the ",Object(r.b)("strong",{parentName:"p"},"Answers")," button for that question component. This displays all responses and a visualization (such as a bar chart or word cloud) of the answers. "),Object(r.b)("p",null,Object(r.b)("img",{alt:"See Answers",src:n(4784).default})),Object(r.b)("p",null,"You can change the information displayed in a number of ways:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To see all student answers (including multiple submissions for the same student), click ",Object(r.b)("em",{parentName:"p"},"Only include latest answer for any student"),". To see only the latest answer, click ",Object(r.b)("em",{parentName:"p"},"Include all answers for any student"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To see which students submitted each answer, click ",Object(r.b)("strong",{parentName:"p"},"Show Extended"),". To hide these names again, click ",Object(r.b)("strong",{parentName:"p"},"Hide Extended"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To search for specific answers, use the ",Object(r.b)("strong",{parentName:"p"},"Search")," bar at the bottom of the answer view. ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'To display only the answers for a specific cohort, use the cohorts drop-down menu at the top. The default is "All Cohorts".')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To see only the most recent answers, you can filter by time to show only the last hour, day, week, month, or year."))),Object(r.b)("p",null,"To see student feedback (if feedback buttons are provided), click ",Object(r.b)("strong",{parentName:"p"},"Responses")," next to the feedback buttons."),Object(r.b)("h3",{id:"tracking-student-progress"},"Tracking Student Progress"),Object(r.b)("p",null,"The bar under the ",Object(r.b)("strong",{parentName:"p"},"Answers")," button displays student progress on that question. The proportion filled with ",Object(r.b)("em",{parentName:"p"},"blue")," tracks the proportion of active users who have submitted an answer to that question. The proportion filled with ",Object(r.b)("em",{parentName:"p"},"orange")," tracks the number of active users who are currently working on the question."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Answers Progress",src:n(4785).default})),Object(r.b)("p",null,"For feedback buttons, red and green bars indicate the proportion of students who have indicated that they have understood the question or are confused."),Object(r.b)("p",null,"Tracking progress on all questions at once can be done with the ",Object(r.b)("strong",{parentName:"p"},"Instructor Panel"),". To access the instructor panel, click the orange arrow on the right of the screen. "),Object(r.b)("p",null,Object(r.b)("img",{alt:"Panel",src:n(4786).default})),Object(r.b)("p",null,"The instructor panel provides information about the lesson as a whole:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The ",Object(r.b)("strong",{parentName:"p"},"Active Users")," tab shows the users that are currently accessing the lab.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The ",Object(r.b)("strong",{parentName:"p"},"Activity")," tab allows you to track the progress of students on each question. It shows what fraction of active users have answered each question:"))),Object(r.b)("p",null,Object(r.b)("img",{alt:"Activity",src:n(4787).default})),Object(r.b)("p",null,"You may add custom ",Object(r.b)("inlineCode",{parentName:"p"},"id")," tags to each question so they will be used in the ",Object(r.b)("strong",{parentName:"p"},"Activity")," tab. Here is an example of a question with an ",Object(r.b)("inlineCode",{parentName:"p"},"id")," tag:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'    <MultipleChoiceQuestion\n        id="mc1"\n        solution={1}\n        answers={[\n            {content:"Quantitative", explanation:""},\n            {content:"Qualitative", explanation:""}\n        ]}\n        question={<span>Course: <i>Course Respondent was Enrolled in</i></span>}\n    />\n')),Object(r.b)("p",null,"If no custom ",Object(r.b)("inlineCode",{parentName:"p"},"id")," is supplied, an automatically generated one will be used composed of the question type and a number representing the index of the respective instance in the list of all questions of said type in the lesson. "),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"For lessons in which components are programmatically inserted, it is encouraged to assign ",Object(r.b)("inlineCode",{parentName:"p"},"id")," manually as the generated ones will not be deterministic in this case."))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("strong",{parentName:"li"},"Responses")," tab allows one to display all answers of a single student and compare them to the solutions, if supplied to the respective question components, or to the answers of another selected student.")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Responses",src:n(4788).default})),Object(r.b)("p",null,"In case a student has submitted multiple answers for a given question, clicking on their answer allows you to cycle through their different answers. The time stamp of each submission is displayed in the upper-right corner of each answer."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The ",Object(r.b)("strong",{parentName:"p"},"Active Users")," tab displays the list of currently active users. The progress bar next to the user's profile picture displays the percentage of questions in the lesson the student has answered. Next to it are buttons to initiate a text or video chat with the student. When the user is interacting with an element on the page, a button with the identifier of the component the student has in focus in displayed to the right. Clicking on it will scroll the lesson to reveal the component into view. Last but not least, clicking on the thumbnail picture of a user jumps to the user's actions in the ",Object(r.b)("strong",{parentName:"p"},"Action Log"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The ",Object(r.b)("strong",{parentName:"p"},"Action Log"),' displays all actions by all users that were collected over time. They can be filtered by time or any of the other attributes via clicking on the respective value labels. The current selection of actions, optionally restricted further to only instructor, student (i.e., users enrolled in the class), or guest data can be exported optionally with artificially generated email addresses and names (when selecting "Anonymized") as a CSV or JSON file.')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The ",Object(r.b)("strong",{parentName:"p"},"Instructor Notes")," tab contains a text editor for instructors and teaching assistants of the class to leave notes and instructions for each other."))))}u.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),s=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),u=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},d=s.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||r;return n?s.a.createElement(m,o(o({ref:t},l),{},{components:n})):s.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<r;l++)i[l]=n[l];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4784:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/view_student_answers-a97688c52bdb33d370bf69ffdb608bc6.png"},4785:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"},4786:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/instructor_panel-a9be7c3ac3690466cba9ea2c0e807af1.gif"},4787:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/instructor_panel_activity-09638dfb175c1c2e7527e600dbdd5434.png"},4788:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/instructor_panel_responses-789c076deb8c2ff5fe6e246cb816cf14.png"}}]);