(window.webpackJsonp=window.webpackJsonp||[]).push([[1012],{6559:function(t,n,e){"use strict";e.r(n);e(436),e(423),e(420);var o=e(407),i=e.n(o),r=(e(482),e(414)),s=e.n(r),a=e(415),l=e.n(a),d=e(424),c=e.n(d),p=e(417),u=e.n(p),f=e(418),h=e.n(f),v=e(416),w=e.n(v),k=e(412),y=e.n(k),g=e(0),m=e(422),F=e(592),H=(e(404),e(443)),b=e.n(H);function D(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=w()(t);if(n){var i=w()(this).constructor;e=Reflect.construct(o,arguments,i)}else e=o.apply(this,arguments);return h()(this,e)}}var P=i()("br",{}),x=function(t){u()(e,t);var n=D(e);function e(t){var o;return s()(this,e),o=n.call(this,t),y()(c()(o),"clickHide",(function(){o.props.onHide()})),y()(c()(o),"handlePDFExport",(function(){o.props.saveAsPDF(),o.props.onHide()})),y()(c()(o),"handlePNGExport",(function(){o.props.saveAsPNG(),o.props.onHide()})),o.state={ownerFile:null},o}return l()(e,[{key:"componentDidMount",value:function(){var t=this;this.props.session.getLessonOwnerFiles((function(n,e){b()(e)&&e.length>0&&(e=e.filter((function(n){return n.title===t.props.id+".pdf"})),t.setState({ownerFile:e[e.length-1]}))}))}},{key:"render",value:function(){var t,n,e=this.props.session;this.state.ownerFile&&(t=new Date(this.state.ownerFile.updatedAt),n=this.state.ownerFile.name);var o=this.props.t;return i()(F.a,{onHide:this.clickHide,show:this.props.show,dialogClassName:"modal-w30"},void 0,i()(F.a.Header,{closeButton:!0},void 0,i()(F.a.Title,{as:"h4"},void 0,o("download"))),i()(F.a.Body,{},void 0,this.props.pdf?i()(m.a,{className:"sketchpad-download-link-btn",size:"large",variant:"secondary",block:!0,onClick:this.clickHide},void 0,i()("a",{className:"unstyled-link sketchpad-download-link",href:this.props.pdf,download:!0},void 0,o("download-original"))):null,this.state.ownerFile?i()(m.a,{size:"large",variant:"secondary",block:!0,onClick:this.clickHide},void 0,i()("a",{className:"unstyled-link",href:e.server+"/"+this.state.ownerFile.filename,download:!0},void 0,o("download-instructor-annotations"),P,i()("small",{},void 0,"(",o("last-updated"),": ",t.toDateString()+", "+t.toLocaleTimeString()," ",o("by")," ",n,")"))):null,i()(m.a,{variant:"secondary",size:"large",onClick:this.handlePDFExport,block:!0},void 0,o("export-pdf")),i()(m.a,{variant:"secondary",size:"large",onClick:this.handlePNGExport,block:!0},void 0,o("export-png"))))}}]),e}(g.Component);x.defaultProps={pdf:null,onHide:function(){}},n.default=x}}]);