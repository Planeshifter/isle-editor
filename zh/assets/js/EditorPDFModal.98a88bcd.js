(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{467:function(t,e,i){"use strict";var a=i(406),s=i(408),n=i(409),o=i.n(n),r=i(0),h=i.n(r),p=i(411),c=["xl","lg","md","sm","xs"],u=h.a.forwardRef((function(t,e){var i=t.bsPrefix,n=t.className,r=t.noGutters,u=t.as,d=void 0===u?"div":u,l=Object(s.a)(t,["bsPrefix","className","noGutters","as"]),g=Object(p.a)(i,"row"),f=g+"-cols",v=[];return c.forEach((function(t){var e,i=l[t];delete l[t];var a="xs"!==t?"-"+t:"";null!=(e=null!=i&&"object"==typeof i?i.cols:i)&&v.push(""+f+a+"-"+e)})),h.a.createElement(d,Object(a.a)({ref:e},l,{className:o.a.apply(void 0,[n,g,r&&"no-gutters"].concat(v))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},e.a=u},6341:function(t){t.exports=JSON.parse('{"LETTER":{"width":8.5,"height":11},"LEGAL":{"width":8.5,"height":14},"A4":{"width":8.3,"height":11.7},"B5":{"width":6.9,"height":9.8},"TABLOID":{"width":11,"height":17},"EXECUTIVE":{"width":7,"height":10},"POSTER":{"width":30,"height":42}}')},6563:function(t,e,i){"use strict";i.r(e);i(420);var a=i(407),s=i.n(a),n=i(414),o=i.n(n),r=i(415),h=i.n(r),p=i(424),c=i.n(p),u=i(417),d=i.n(u),l=i(418),g=i.n(l),f=i(416),v=i.n(f),m=i(412),S=i.n(m),w=i(0),O=(i(404),i(494)),b=i(467),P=i(466),E=i(422),H=i(592),T=i(507),D=i(489),x=i(6341);i(390);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,a=v()(t);if(e){var s=v()(this).constructor;i=Reflect.construct(a,arguments,s)}else i=a.apply(this,arguments);return g()(this,i)}}var C={openPDF:!1,pageSize:"LETTER",customSize:!0,showPageOptions:!1,pageOptionConfig:"Predefined",customWidth:612,customHeight:792,useString:!0,pageOrientation:"portrait",visibleWidth:8.5,visibleHeight:11},R=function(t){d()(i,t);var e=y(i);function i(t){var a;return o()(this,i),a=e.call(this,t),S()(c()(a),"togglePDFMenu",(function(){a.state.openPDF&&a.state.showPageOptions?a.setState({openPDF:!a.state.openPDF,showPageOptions:!a.state.showPageOptions}):a.setState({openPDF:!a.state.openPDF})})),S()(c()(a),"savePDF",(function(){var t={},e={};a.state.useString&&(e.width=72*x[a.state.pageSize].width,e.height=72*x[a.state.pageSize].height),a.state.useString&&"POSTER"!==a.state.pageSize||("landscape"===a.state.pageOptionOrientation?(e.height=a.state.customWidth,e.width=a.state.customHeight):(e.height=a.state.customHeight,e.width=a.state.customWidth)),t.pageSize=e,t.pageOrientation=a.state.pageOrientation,a.props.exportPDF(t)})),S()(c()(a),"clickHide",(function(){a.setState(C),a.props.onHide()})),a.state=C,a}return h()(i,[{key:"render",value:function(){var t=this;return s()(H.a,{onHide:this.clickHide,show:this.props.show,id:"save-modal"},void 0,s()(H.a.Header,{closeButton:!0},void 0,s()(H.a.Title,{},void 0,this.props.t("pdf-modal-title"))),s()(H.a.Body,{},void 0,s()(P.a,{border:"primary",id:"export-pdf-panel"},void 0,s()(P.a.Body,{},void 0,s()(b.a,{className:"predefined-letter-button"},void 0,s()(T.a,{legend:this.props.t("pick-predefined-value"),defaultValue:this.state.pageSize,options:["LETTER","LEGAL","A4","B5","TABLOID","EXECUTIVE","POSTER","CUSTOM"],onChange:function(e){"CUSTOM"!==e?t.setState({pageSize:e,useString:!0,visibleHeight:x[e].height,visibleWidth:x[e].width,customHeight:72*x[e].height,customWidth:72*x[e].width,pageOrientation:"portrait"}):t.setState({pageSize:e,useString:!1})}})),s()(b.a,{className:"dimension-select"},void 0,s()(D.b,{legend:this.props.t("pick-width"),defaultValue:this.state.visibleWidth,min:1,max:50,step:.5,onChange:function(e){t.setState({pageSize:"CUSTOM",customWidth:72*e,useString:!1,visibleWidth:e})}}),s()(D.b,{legend:this.props.t("pick-height"),defaultValue:this.state.visibleHeight,min:1,max:50,step:.5,onChange:function(e){t.setState({pageSize:"CUSTOM",customHeight:72*e,useString:!1,visibleHeight:e})}})),s()(b.a,{className:"showDimensions"},void 0,s()(O.a,{xs:6,md:6},void 0,s()(T.a,{legend:this.props.t("orientation"),defaultValue:this.state.pageOrientation,options:["portrait","landscape"],onChange:function(e){if(e!==t.state.pageOrientation){var i=t.state.visibleWidth,a=t.state.visibleHeight;t.setState({pageOrientation:e,visibleWidth:a,visibleHeight:i,customWidth:72*a,customHeight:72*i})}}}))),s()(E.a,{onClick:this.savePDF,block:!0},void 0,this.props.t("save"))))))}}]),i}(w.Component);R.defaultProps={exportPDF:function(){},onHide:function(){}},e.default=R}}]);