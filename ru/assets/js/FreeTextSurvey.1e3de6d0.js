(window.webpackJsonp=window.webpackJsonp||[]).push([[341],{3692:function(t,e,n){"use strict";n.r(e);n(420);var a=n(407),i=n.n(a),s=n(414),r=n.n(s),o=n(415),u=n.n(o),l=n(424),c=n.n(l),d=n(417),v=n.n(d),f=n(418),p=n.n(f),h=n(416),m=n.n(h),y=n(412),b=n.n(y),w=(n(458),n(0)),g=(n(404),n(4096)),x=n(422),N=n(466),S=n(483),k=n(494),q=n(467),O=n(4837),R=n(505),C=n(450),j=n.n(C),A=n(960),B=n.n(A),T=n(3693),D=n.n(T),J=n(1082),P=n.n(J),Q=n(3695),F=n.n(Q),M=n(531),z=n(783),E=n(642),L=n(576),Y=n(988),G=n(465),H=n(464),I=n(421),K=n(439);n(319);function U(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=m()(t);if(e){var i=m()(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return p()(this,n)}}Object(I.a)("Survey");var V=j()("isle:free-text-survey"),W=Object(M.a)("free-text-survey");var X=function(t){v()(n,t);var e=U(n);function n(t){var a;return r()(this,n),a=e.call(this,t),b()(c()(a),"submitQuestion",(function(){var t=a.props.t,e=a.context,n=function(t){t=P()(t);for(var e=F()(t),n=0;n<O.length;n++)for(var a=0;a<e.length;a++)if(e[a]===O[n])return O[n];return null}(a.state.value);n?e.addNotification({title:t("action-required"),message:t("offensive-word",{w:n}),level:"warning"}):(e.log({id:a.id,type:H.Ac,value:a.state.value,anonymous:a.props.anonymous},"members"),a.setState({submitted:!0}),e.addNotification({title:t("submitted"),message:t("answer-submitted"),level:"success"}),a.props.onSubmit(a.state.value))})),b()(c()(a),"onData",(function(t){V("FreeTextQuestion is receiving data: "+JSON.stringify(t));var e,n=D()(t),s=n.map((function(t){return{x:t[0],y:t[1]}})),r=a.props.t;e=i()("table",{className:"table table-bordered"},void 0,i()("tr",{},void 0,i()("th",{},void 0,r("category")),i()("th",{},void 0,r("count")),i()("th",{},void 0,r("relative-frequency"))),n.map((function(t,e){return i()("tr",{},e,t.map((function(t,e){return 2===e&&(t=t.toFixed(3)),i()("td",{},e,t)})))}))),a.setState({data:s,freqTable:e})})),a.id=t.id||W(t),a.state={data:[],submitted:!1,value:null},a}return u()(n,[{key:"renderChart",value:function(){return B()(this.state.data)?i()("h3",{},void 0,this.props.t("no-responses-yet")):i()(R.a,{data:[{x:this.state.data.map((function(t){return t.x})),y:this.state.data.map((function(t){return t.y})),type:"bar"}],layout:{width:400,height:300},removeButtons:!0})}},{key:"render",value:function(){var t=this,e=this.props,n=e.t,a=this.state.submitted&&!e.allowMultipleAnswers;return i()(E.a,{user:!0,banner:i()("h2",{},void 0,n("sign-in"))},void 0,i()(N.a,{id:this.id,className:this.props.className,style:this.props.style},void 0,i()(N.a.Body,{style:{overflowY:"auto"}},void 0,i()(S.a,{},void 0,i()(q.a,{},void 0,i()(k.a,{md:6},void 0,i()(N.a,{className:"free-text-survey",body:!0},void 0,i()("label",{},void 0,e.question),i()(z.a,{value:this.state.value,inline:!0,disabled:a,onChange:function(e){t.setState({value:e})},rows:this.props.rows}),i()(x.a,{size:"small",variant:"success",block:!0,fill:!0,onClick:this.submitQuestion,disabled:a},void 0,n(a?"submitted":"submit")))),i()(k.a,{md:6},void 0,i()(Y.a,{for:[this.id],onData:this.onData}),this.renderChart(),this.state.freqTable))),i()(L.a,{buttonLabel:n("Responses"),id:this.id,info:H.Ac}))))}}]),n}(w.Component);X.defaultProps={question:"",allowMultipleAnswers:!1,anonymous:!1,rows:4,className:"",style:{},onSubmit:function(){}},X.contextType=G.a,e.default=Object(g.a)("Survey")(Object(K.a)(X))},576:function(t,e,n){"use strict";var a=n(546),i=n.n(a),s=n(0),r=n.n(s),o=(n(404),function(t){var e=t.children,n=i()(t,["children"]);return r.a.createElement("div",n,e)});o.defaultProps={className:"",style:{}},e.a=o}}]);