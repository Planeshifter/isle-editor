(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{3780:function(t,e,n){"use strict";n.r(e);n(411),n(403),n(415);var a=n(400),i=n.n(a),s=n(407),r=n.n(s),o=n(410),u=n.n(o),l=n(420),c=n.n(l),d=n(413),v=n.n(d),f=n(414),p=n.n(f),h=n(412),m=n.n(h),y=n(404),b=n.n(y),w=n(0),g=(n(396),n(4125)),x=n(428),S=n(465),N=n(472),k=n(495),q=n(455),R=n(4822),C=n(514),D=n(443),A=n.n(D),O=n(1117),T=n.n(O),j=n(3781),J=n.n(j),Q=n(1627),B=n.n(Q),F=n(3783),M=n.n(F),P=n(600),z=n(935),L=n(698),Y=n(818),E=n(1044),G=n(457),H=n(462),I=n(418);n(316);function K(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=m()(t);if(e){var i=m()(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return p()(this,n)}}Object(I.a)("Survey");var U=A()("isle:free-text-survey"),V=Object(P.a)("free-text-survey");var W=function(t){v()(n,t);var e=K(n);function n(t){var a;return r()(this,n),a=e.call(this,t),b()(c()(a),"submitQuestion",(function(){var t=a.props.t,e=a.context,n=function(t){t=B()(t);for(var e=M()(t),n=0;n<R.length;n++)for(var a=0;a<e.length;a++)if(e[a]===R[n])return R[n];return null}(a.state.value);n?e.addNotification({title:t("action-required"),message:t("offensive-word",{w:n}),level:"warning"}):(e.log({id:a.id,type:H.Ac,value:a.state.value,anonymous:a.props.anonymous},"members"),a.setState({submitted:!0}),e.addNotification({title:t("submitted"),message:t("answer-submitted"),level:"success"}),a.props.onSubmit(a.state.value))})),b()(c()(a),"onData",(function(t){U("FreeTextQuestion is receiving data: "+JSON.stringify(t));var e,n=J()(t),s=n.map((function(t){return{x:t[0],y:t[1]}})),r=a.props.t;e=i()("table",{className:"table table-bordered"},void 0,i()("tr",{},void 0,i()("th",{},void 0,r("category")),i()("th",{},void 0,r("count")),i()("th",{},void 0,r("relative-frequency"))),n.map((function(t,e){return i()("tr",{},e,t.map((function(t,e){return 2===e&&(t=t.toFixed(3)),i()("td",{},e,t)})))}))),a.setState({data:s,freqTable:e})})),a.id=t.id||V(t),a.state={data:[],submitted:!1,value:null},a}return u()(n,[{key:"renderChart",value:function(){return T()(this.state.data)?i()("h3",{},void 0,this.props.t("no-responses-yet")):i()(C.a,{data:[{x:this.state.data.map((function(t){return t.x})),y:this.state.data.map((function(t){return t.y})),type:"bar"}],layout:{width:400,height:300},removeButtons:!0})}},{key:"render",value:function(){var t=this,e=this.props,n=e.t,a=this.state.submitted&&!e.allowMultipleAnswers;return i()(L.a,{user:!0,banner:i()("h2",{},void 0,n("sign-in"))},void 0,i()(S.a,{id:this.id,className:this.props.className,style:this.props.style},void 0,i()(S.a.Body,{style:{overflowY:"auto"}},void 0,i()(N.a,{},void 0,i()(q.a,{},void 0,i()(k.a,{md:6},void 0,i()(S.a,{className:"free-text-survey",body:!0},void 0,i()("label",{},void 0,e.question),i()(z.a,{value:this.state.value,inline:!0,disabled:a,onChange:function(e){t.setState({value:e})},rows:this.props.rows}),i()(x.a,{size:"small",variant:"success",block:!0,fill:!0,onClick:this.submitQuestion,disabled:a},void 0,n(a?"submitted":"submit")))),i()(k.a,{md:6},void 0,i()(E.a,{for:[this.id],onData:this.onData}),this.renderChart(),this.state.freqTable))),i()(Y.a,{buttonLabel:n("Responses"),id:this.id,info:H.Ac}))))}}]),n}(w.Component);W.defaultProps={question:"",allowMultipleAnswers:!1,anonymous:!1,rows:4,className:"",style:{},onSubmit:function(){}},W.contextType=G.a,e.default=Object(g.a)("Survey")(W)}}]);