(window.webpackJsonp=window.webpackJsonp||[]).push([[1028],{6495:function(e,t,a){"use strict";a.r(t);var n=a(407),o=a.n(n),i=a(456),r=a.n(i),l=a(0),s=a.n(l),d=(a(404),a(2049)),c=a(465),u=a(1401),p=a(6221),f=a.n(p),v=a(548),b=a.n(v),g=a(463),m=a(552),h=a(422),O=a(439);function j(e){e.stopPropagation(),e.preventDefault()}Object(h.a)("SpreadsheetUpload");var w=function(e){var t=e.title,a=e.onUpload,n=Object(l.useState)(0),i=r()(n,2),p=i[0],v=i[1],h=Object(l.useState)(!1),O=r()(h,2),w=O[0],C=O[1],x=Object(l.useState)(!0),S=r()(x,2),k=S[0],y=S[1],U=Object(d.a)("SpreadsheetUpload").t,D=Object(l.useContext)(g.a),E=Object(l.useRef)(null),F=Object(l.useCallback)((function(e){var t=e.target.result;v(0),C(!1),f()({noheader:!k,checkType:!0}).fromString(t).then((function(e){a(null,e)})).catch((function(e){D.addNotification({title:U("error-title"),message:"".concat(U("error-message"),": ").concat(e.message),level:"error",position:"tr"}),a(e)}))}),[k,D,a,U]),T=Object(l.useCallback)((function(){C(!0);var e=new FileReader,t=E.current.files[0];e.addEventListener("load",F,!1),e.addEventListener("progress",(function(e){if(e.lengthComputable){var t=e.loaded/e.total;v(t)}}),!1),e.readAsText(t,"utf-8")}),[F]),A=Object(l.useCallback)((function(e){e.stopPropagation(),e.preventDefault();var t=e.dataTransfer,a=new FileReader,n=null;if(t.items?"file"===t.items[0].kind&&(n=t.items[0].getAsFile()):n=t.files[0],n){if("text/csv"!==n.type)return D.addNotification({title:U("no-csv"),message:U("no-csv-message"),level:"error",position:"tr"});a.addEventListener("load",F,!1),a.readAsText(n,"utf-8")}}),[D,F,U]),L=b()(100*p);return o()(c.a,{},void 0,o()(c.a.Header,{as:"h2"},void 0,t||U("title")),o()(c.a.Body,{},void 0,o()("label",{htmlFor:"CSVUpload"},void 0,U("csv-upload-prompt"),":"),s.a.createElement("input",{id:"CSVUpload",type:"file",accept:".csv",onChange:T,ref:E,style:{margin:"auto"}}),o()("p",{},void 0,U("or")),o()("div",{onDrop:A,onDragOver:j,onDragEnd:j,style:{minHeight:"150px",width:"250px",border:"1px solid blue",padding:"10px"}},void 0,o()("span",{},void 0,U("drop-file"))),o()(m.a,{legend:U("first-row-names"),defaultValue:!0,onChange:function(e){y(e)}}),w?o()(u.a,{now:L,label:"".concat(L,"%")}):null))};w.defaultProps={onUpload:function(){},title:null},t.default=Object(O.a)(w)}}]);