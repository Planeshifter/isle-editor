(window.webpackJsonp=window.webpackJsonp||[]).push([[360],{6519:function(t,e,n){"use strict";n.r(e);n(427),n(416),n(421);var a=n(407),i=n.n(a),o=(n(604),n(414)),s=n.n(o),r=n(415),l=n.n(r),d=n(425),c=n.n(d),h=n(418),v=n.n(h),u=n(419),p=n.n(u),g=n(417),f=n.n(g),m=n(412),y=n.n(m),b=n(0),w=n.n(b),x=(n(404),n(450)),N=n.n(x),q=n(4172),D=n(1556),_=n.n(D),k=n(4084),E=n.n(k),P=n(568),C=n(424),K=n(561),S=n(465),B=n(1006),T=function(t){var e=t.t;return i()("div",{},void 0,i()("h2",{style:{textAlign:"center"}},void 0,e("data-explorer-title")),i()("p",{},void 0,e("data-explorer-p1")),i()("div",{className:"centered",style:{width:"fit-content"}},void 0,i()(B.a,{alt:"Explorer View",src:"".concat(location.origin,"/screenshots/data_explorer_view.jpg"),width:400,height:200})),i()("p",{},void 0,e("data-explorer-p2")),i()("div",{className:"centered",style:{width:"fit-content"}},void 0,i()(B.a,{className:"centered",alt:"Explorer Output",src:"".concat(location.origin,"/screenshots/data_explorer_outputs.jpg"),width:400,height:200})),i()("p",{},void 0,e("data-explorer-p3")),i()("p",{},void 0,e("data-explorer-p4")))},A=function(t){var e=t.t;return i()("div",{},void 0,i()("h2",{style:{textAlign:"center"}},void 0,e("data-table-title")),i()("p",{},void 0,e("data-table-p1")),i()("div",{className:"centered",style:{width:"fit-content"}},void 0,i()(B.a,{alt:e("data-table-title"),src:"".concat(location.origin,"/screenshots/data_table_student.png"),width:600,height:300})),i()("p",{},void 0,e("data-explorer-p2")))},I=function(t){var e=t.t;return i()("div",{style:{textAlign:"center"}},void 0,i()("h2",{},void 0,e("statusbar-title")),i()("p",{},void 0,e("statusbar-p1")))},L=function(t){var e=t.t;return i()("div",{},void 0,i()("h2",{style:{textAlign:"center"}},void 0,e("questions-title")),i()("p",{},void 0,e("questions-p1")),i()("div",{className:"centered",style:{width:"fit-content"}},void 0,i()(B.a,{alt:"Answering Questions",src:"".concat(location.origin,"/screenshots/answering_question.gif"),width:600,height:198})),i()("h3",{},void 0,e("questions-p2")),i()("p",{},void 0,e("questions-p3")),i()("h3",{},void 0,e("questions-p4")),i()("div",{className:"centered",style:{width:"fit-content"}},void 0,i()(B.a,{alt:e("questions-p4"),src:"".concat(location.origin,"/screenshots/feedback_buttons.png"),width:184,height:53})),i()("p",{},void 0,e("questions-p5")),i()("h3",{},void 0,e("questions-p6")),i()("p",{},void 0,e("questions-p7")),i()("div",{className:"centered",style:{width:"fit-content"}},void 0,i()(B.a,{alt:"Next Question Navigation",src:"".concat(location.origin,"/screenshots/question_nav_next.gif"),width:600,height:209})),i()("div",{className:"centered",style:{width:"fit-content"}},void 0,i()(B.a,{alt:"Question Number Navigation",src:"".concat(location.origin,"/screenshots/question_nav_num.gif"),width:600,height:300})))},Q=(n(2825),n(462));function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=f()(t);if(e){var i=f()(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return p()(this,n)}}var j=N()("isle:toolbar:help");var z=function(t){v()(n,t);var e=R(n);function n(t){var a;return s()(this,n),a=e.call(this,t),y()(c()(a),"handlePDFDownload",(function(){j("Preparing PDF for download...");for(var t,e,n,i=a.tabs.getElementsByTagName("img"),o=0;o<i.length;o++)i[o].src=(t=i[o],e=void 0,n=void 0,e=document.createElement("canvas"),n=e.getContext("2d"),e.width=3*t.width,e.height=3*t.height,n.drawImage(t,0,0,3*t.width,3*t.height),e.toDataURL("image/jpeg"));var s=a.props.t,r=a.tabs.innerHTML;r=r.replace('<h4 style="text-align: center; margin-top: 50%;">'+s("click-instruction")+"</h4>","");var l={content:E()(r),pageMargins:[40,60,40,60]},d=a.props.session;_.a.createPdf(l).download("ISLE_".concat(d.lessonName,"_Documentation.pdf"))})),y()(c()(a),"handleTabSelect",(function(t){var e=a.props.session,n={id:"documentation",type:Q.Fb,value:t};e.log(n)})),a.hasQuestions=document.getElementsByClassName("submit-button").length>0,a.hasDataTable=document.getElementsByClassName("data-table-wrapper").length>0,a.hasDataExplorer=document.getElementsByClassName("data-explorer").length>0,a}return l()(n,[{key:"render",value:function(){var t=this,e=this.props.session,n=!e.config.hideStatusBar&&!e.config.removeStatusBar,a=this.props.t;return i()(S.a,{body:!0,style:{width:"40%",height:"100vh",position:"fixed",right:0,top:0,zIndex:1006}},void 0,i()(P.a.Container,{id:"left-tabs-example",defaultActiveKey:"zeroth",onSelect:this.handleTabSelect},void 0,i()("h3",{},void 0,a("documentation")),i()("div",{className:"help-buttons"},void 0,i()(C.a,{variant:"outline-secondary",size:"sm",onClick:this.handlePDFDownload},void 0,a("download-pdf")),i()("button",{className:"help-close-button fa fa-times",onClick:this.props.onClose})),i()(K.a,{variant:"pills",style:{background:"#f8f9fa",padding:6}},void 0,this.hasDataTable?i()(K.a.Item,{},void 0,i()(K.a.Link,{eventKey:"data-table"},void 0,a("data-table-title"))):null,this.hasDataExplorer?i()(K.a.Item,{},void 0,i()(K.a.Link,{eventKey:"data-explorer"},void 0,a("data-explorer-title"))):null,e.config.hideStatusBar||e.config.removeStatusBar?null:i()(K.a.Item,{},void 0,i()(K.a.Link,{eventKey:"statusbar"},void 0,a("statusbar-title"))),this.hasQuestions?i()(K.a.Item,{},void 0,i()(K.a.Link,{eventKey:"questions"},void 0,a("questions-title"))):null),w.a.createElement(P.a.Content,{ref:function(e){t.tabs=e},style:{overflowY:"scroll",height:"80vh"}},i()(P.a.Pane,{eventKey:"zeroth"},void 0,i()("h4",{style:{textAlign:"center",marginTop:"50%"}},void 0,a("click-instruction"))),this.hasDataTable?i()(P.a.Pane,{eventKey:"data-table"},void 0,i()(A,{t:a})):null,this.hasDataExplorer?i()(P.a.Pane,{eventKey:"data-explorer"},void 0,i()(T,{t:a})):null,n?i()(P.a.Pane,{eventKey:"statusbar"},void 0,i()(I,{t:a})):null,this.hasQuestions?i()(P.a.Pane,{eventKey:"questions"},void 0,i()(L,{t:a})):null)))}}]),n}(b.Component);e.default=Object(q.a)("HelpPage")(z)}}]);