(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{3848:function(t,e,a){"use strict";a.r(e);a(411),a(403),a(415);var s=a(507),i=a.n(s),n=a(400),r=a.n(n),o=a(407),u=a.n(o),c=a(410),l=a.n(c),d=a(420),v=a.n(d),f=a(413),b=a.n(f),m=a(414),p=a.n(m),h=a(412),y=a.n(h),w=a(404),g=a.n(w),j=a(0),O=a.n(j),x=a(4125),N=(a(396),a(428)),S=a(495),P=a(455),R=a(472),k=a(465),C=a(443),D=a.n(C),E=a(600),F=a(1117),G=a.n(F),J=a(427),q=a(655),A=a(727),B=a(503),M=a(698),Q=a(514),T=a(818),z=a(1044),L=a(457),Y=a(462),H=a(418);a(331);function I(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,s=y()(t);if(e){var i=y()(this).constructor;a=Reflect.construct(s,arguments,i)}else a=s.apply(this,arguments);return p()(this,a)}}Object(H.a)("Survey");var K=D()("isle:number-survey"),U=Object(E.a)("number-survey"),V=function(t){b()(a,t);var e=I(a);function a(t){var s;return u()(this,a),s=e.call(this,t),g()(v()(s),"submitQuestion",(function(){var t=s.props.t,e=s.context;e.log({id:s.id,type:Y.Eb,value:s.state.value,anonymous:s.props.anonymous},"members"),s.setState({submitted:!0}),e.addNotification({title:t("submitted"),message:t("answer-submitted"),level:"success"}),s.props.onSubmit(s.state.value)})),g()(v()(s),"onData",(function(t){K("NumberSurvey is receiving data: "+JSON.stringify(t));var e=Object(q.a)(t),a=Object(A.a)(t);s.setState({data:t,avg:e,sd:a})})),s.id=t.id||U(t),s.state={data:[],submitted:!1,value:null},s}return l()(a,[{key:"renderChart",value:function(){var t=this.props.t,e=this.state.data;return G()(e)?r()("h3",{},void 0,t("no-responses-yet")):r()(Q.a,{data:[{x:this.state.data,type:"histogram"}],layout:{width:400,height:300},removeButtons:!0})}},{key:"render",value:function(){var t=this,e=this.props,a=e.t,s=this.state.submitted&&!e.allowMultipleAnswers;return r()(M.a,{user:!0,banner:r()("h2",{},void 0,a("sign-in"))},void 0,r()(k.a,{id:this.id,style:this.props.style},void 0,r()(k.a.Body,{style:{overflowY:"auto"}},void 0,r()(R.a,{},void 0,r()(P.a,{},void 0,r()(S.a,{md:6},void 0,r()(k.a,{className:"number-survey",body:!0},void 0,r()(k.a.Title,{as:"h5"},void 0,e.question),r()("label",{htmlFor:"number-survey-input-".concat(this.id)},void 0,a("your-answer"),":"),O.a.createElement(B.b,i()({},e,{inline:!0,id:"number-survey-input-".concat(this.id),disabled:s,onChange:function(e){t.setState({value:e})}})),r()(N.a,{size:"small",variant:"success",block:!0,fill:!0,onClick:this.submitQuestion,disabled:s},void 0,a(s?"submitted":"submit")))),r()(S.a,{md:6},void 0,r()(z.a,{for:[this.id],onData:this.onData}),this.renderChart(),Object(J.isPrimitive)(this.state.avg)&&Object(J.isPrimitive)(this.state.sd)?r()("p",{},void 0,a("average-is")," ",this.state.avg.toFixed(3)," (","SD",": ",this.state.sd.toFixed(3),")."):null))),r()(T.a,{buttonLabel:a("responses"),id:this.id,info:Y.Eb}))))}}]),a}(j.Component);V.defaultProps={question:"",allowMultipleAnswers:!1,anonymous:!1,step:"any",style:{},onSubmit:function(){}},V.contextType=L.a,e.default=Object(x.a)("Survey")(V)},455:function(t,e,a){"use strict";var s=a(398),i=a(401),n=a(402),r=a.n(n),o=a(0),u=a.n(o),c=a(408),l=["xl","lg","md","sm","xs"],d=u.a.forwardRef((function(t,e){var a=t.bsPrefix,n=t.className,o=t.noGutters,d=t.as,v=void 0===d?"div":d,f=Object(i.a)(t,["bsPrefix","className","noGutters","as"]),b=Object(c.a)(a,"row"),m=b+"-cols",p=[];return l.forEach((function(t){var e,a=f[t];delete f[t];var s="xs"!==t?"-"+t:"";null!=(e=null!=a&&"object"==typeof a?a.cols:a)&&p.push(""+m+s+"-"+e)})),u.a.createElement(v,Object(s.a)({ref:e},f,{className:r.a.apply(void 0,[n,b,o&&"no-gutters"].concat(p))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},e.a=d},472:function(t,e,a){"use strict";var s=a(398),i=a(401),n=a(402),r=a.n(n),o=a(0),u=a.n(o),c=a(408),l=u.a.forwardRef((function(t,e){var a=t.bsPrefix,n=t.fluid,o=t.as,l=void 0===o?"div":o,d=t.className,v=Object(i.a)(t,["bsPrefix","fluid","as","className"]),f=Object(c.a)(a,"container"),b="string"==typeof n?"-"+n:"-fluid";return u.a.createElement(l,Object(s.a)({ref:e},v,{className:r()(d,n?""+f+b:f)}))}));l.displayName="Container",l.defaultProps={fluid:!1},e.a=l}}]);