(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{4074:function(t,e){},4075:function(t,e){},6317:function(t,e,n){"use strict";n.r(e);n(411),n(403),n(415);var o=n(400),r=n.n(o),i=(n(660),n(407)),a=n.n(i),s=n(410),l=n.n(s),p=n(420),d=n.n(p),c=n(413),u=n.n(c),f=n(414),h=n.n(f),v=n(412),g=n.n(v),m=n(404),y=n.n(m),x=n(0),D=n.n(x),b=(n(396),n(4125)),w=n(465),F=n(1525),R=n(6318),U=n.n(R),C=n(6320),S=n.n(C),E=n(580),k=n.n(E),A=n(589),O=n.n(A),P=n(585),T=n.n(P),V=n(457),L=n(595),j=n(418);function H(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=g()(t);if(e){var r=g()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return h()(this,n)}}Object(j.a)("SpreadsheetUpload");var J=function(t){u()(n,t);var e=H(n);function n(t){var o;return a()(this,n),o=e.call(this,t),y()(d()(o),"handleFileUpload",(function(){o.setState({uploading:!0},(function(){var t=new FileReader,e=o.fileUpload.files[0];t.addEventListener("load",o.onFileRead,!1),t.addEventListener("progress",(function(t){if(t.lengthComputable){var e=t.loaded/t.total;o.setState({percentCompleted:e})}}),!1),t.readAsText(e,"utf-8")}))})),y()(d()(o),"onFileRead",(function(t){var e,n,r=t.target.result,i=S()(r);e=O()(i)?",":i.delimiter;var a=(r=k()(r,"\r","")).indexOf("\n"),s=r.substring(0,a).split(e);o.state.header?(n=s,r=r.substring(a+1)):n=s.map((function(t,e){return"VAR_"+(e+1)})),o.setState({percentCompleted:0,uploading:!1}),U()(r,{delimiter:e,columns:n,cast:!0},(function(t,e){if(t)return o.context.addNotification({title:o.props.t("error-title"),message:"".concat(o.props.t("error-message"),": ").concat(t.message),level:"error",position:"tr"}),o.props.onUpload(t);o.props.onUpload(null,e)}))})),y()(d()(o),"ignoreDrag",(function(t){t.stopPropagation(),t.preventDefault()})),y()(d()(o),"onFileDrop",(function(t){t.stopPropagation(),t.preventDefault();var e=t.dataTransfer,n=new FileReader,r=null;if(e.items?"file"===e.items[0].kind&&(r=e.items[0].getAsFile()):r=e.files[0],r){if("text/csv"!==r.type)return o.context.addNotification({title:o.props.t("no-csv"),message:o.props.t("no-csv-message"),level:"error",position:"tr"});n.addEventListener("load",o.onFileRead,!1),n.readAsText(r,"utf-8")}})),o.state={percentCompleted:0,uploading:!1,header:!0},o}return l()(n,[{key:"render",value:function(){var t=this,e=T()(100*this.state.percentCompleted);return r()(w.a,{},void 0,r()(w.a.Header,{as:"h2"},void 0,this.props.title||this.props.t("title")),r()(w.a.Body,{},void 0,r()("label",{htmlFor:"CSVUpload"},void 0,this.props.t("csv-upload-prompt"),":"),D.a.createElement("input",{id:"CSVUpload",type:"file",accept:".csv",onChange:this.handleFileUpload,ref:function(e){t.fileUpload=e},style:{margin:"auto"}}),r()("p",{},void 0,this.props.t("or")),r()("div",{onDrop:this.onFileDrop,onDragOver:this.ignoreDrag,onDragEnd:this.ignoreDrag,style:{minHeight:"150px",width:"250px",border:"1px solid blue",padding:"10px"}},void 0,r()("span",{},void 0,this.props.t("drop-file"))),r()(L.a,{legend:this.props.t("first-row-names"),defaultValue:!0,onChange:function(e){t.setState({header:e})}}),this.state.uploading?r()(F.a,{now:e,label:"".concat(e,"%")}):null))}}]),n}(x.Component);J.defaultProps={onUpload:function(){},title:null},J.contextType=V.a,e.default=Object(b.a)("SpreadsheetUpload")(J)}}]);