(window.webpackJsonp=window.webpackJsonp||[]).push([[775],{3852:function(t,e,a){"use strict";a.r(e);a(421);var s=a(492),n=a.n(s),i=a(407),r=a.n(i),o=a(414),u=a.n(o),c=a(415),l=a.n(c),d=a(425),v=a.n(d),f=a(418),b=a.n(f),m=a(419),p=a.n(m),y=a(417),h=a.n(y),O=a(412),j=a.n(O),w=a(0),N=a.n(w),g=a(4172),x=(a(404),a(424)),P=a(493),S=a(476),k=a(509),E=a(465),R=a(450),C=a.n(R),B=a(554),D=a(979),z=a.n(D),F=a(430),G=a(589),J=a(652),q=a(490),A=a(651),M=a(506),Q=a(583),T=a(1008),L=a(463),Y=a(462),H=a(422),I=a(439);a(333);function K(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,s=h()(t);if(e){var n=h()(this).constructor;a=Reflect.construct(s,arguments,n)}else a=s.apply(this,arguments);return p()(this,a)}}Object(H.a)("Survey");var U=C()("isle:number-survey"),V=Object(B.a)("number-survey"),W=function(t){b()(a,t);var e=K(a);function a(t){var s;return u()(this,a),s=e.call(this,t),j()(v()(s),"submitQuestion",(function(){var t=s.props.t,e=s.context;e.log({id:s.id,type:Y.Eb,value:s.state.value,anonymous:s.props.anonymous},"members"),s.setState({submitted:!0}),e.addNotification({title:t("submitted"),message:t("answer-submitted"),level:"success"}),s.props.onSubmit(s.state.value)})),j()(v()(s),"onData",(function(t){U("NumberSurvey is receiving data: "+JSON.stringify(t));var e=Object(G.a)(t),a=Object(J.a)(t);s.setState({data:t,avg:e,sd:a})})),s.id=t.id||V(t),s.state={data:[],submitted:!1,value:null},s}return l()(a,[{key:"renderChart",value:function(){var t=this.props.t,e=this.state.data;return z()(e)?r()("h3",{},void 0,t("no-responses-yet")):r()(M.a,{data:[{x:this.state.data,type:"histogram"}],layout:{width:400,height:300},removeButtons:!0})}},{key:"render",value:function(){var t=this,e=this.props,a=e.t,s=this.state.submitted&&!e.allowMultipleAnswers;return r()(A.a,{user:!0,banner:r()("h2",{},void 0,a("sign-in"))},void 0,r()(E.a,{id:this.id,style:this.props.style},void 0,r()(E.a.Body,{style:{overflowY:"auto"}},void 0,r()(k.a,{},void 0,r()(S.a,{},void 0,r()(P.a,{md:6},void 0,r()(E.a,{className:"number-survey",body:!0},void 0,r()(E.a.Title,{as:"h5"},void 0,e.question),r()("label",{htmlFor:"number-survey-input-".concat(this.id)},void 0,a("your-answer"),":"),N.a.createElement(q.b,n()({},e,{inline:!0,id:"number-survey-input-".concat(this.id),disabled:s,onChange:function(e){t.setState({value:e})}})),r()(x.a,{size:"small",variant:"success",block:!0,fill:!0,onClick:this.submitQuestion,disabled:s},void 0,a(s?"submitted":"submit")))),r()(P.a,{md:6},void 0,r()(T.a,{for:[this.id],onData:this.onData}),this.renderChart(),Object(F.isPrimitive)(this.state.avg)&&Object(F.isPrimitive)(this.state.sd)?r()("p",{},void 0,a("average-is")," ",this.state.avg.toFixed(3)," (","SD",": ",this.state.sd.toFixed(3),")."):null))),r()(Q.a,{buttonLabel:a("responses"),id:this.id,info:Y.Eb}))))}}]),a}(w.Component);W.defaultProps={question:"",allowMultipleAnswers:!1,anonymous:!1,step:"any",style:{},onSubmit:function(){}},W.contextType=L.a,e.default=Object(g.a)("Survey")(Object(I.a)(W))},424:function(t,e,a){"use strict";var s=a(405),n=a(408),i=a(409),r=a.n(i),o=a(0),u=a.n(o),c=a(411),l=a(464),d=u.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.variant,o=t.size,d=t.active,v=t.className,f=t.block,b=t.type,m=t.as,p=Object(n.a)(t,["bsPrefix","variant","size","active","className","block","type","as"]),y=Object(c.a)(a,"btn"),h=r()(v,y,d&&"active",i&&y+"-"+i,f&&y+"-block",o&&y+"-"+o);if(p.href)return u.a.createElement(l.a,Object(s.a)({},p,{as:m,ref:e,className:r()(h,p.disabled&&"disabled")}));e&&(p.ref=e),b?p.type=b:m||(p.type="button");var O=m||"button";return u.a.createElement(O,Object(s.a)({},p,{className:h}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1},e.a=d},476:function(t,e,a){"use strict";var s=a(405),n=a(408),i=a(409),r=a.n(i),o=a(0),u=a.n(o),c=a(411),l=["xl","lg","md","sm","xs"],d=u.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.className,o=t.noGutters,d=t.as,v=void 0===d?"div":d,f=Object(n.a)(t,["bsPrefix","className","noGutters","as"]),b=Object(c.a)(a,"row"),m=b+"-cols",p=[];return l.forEach((function(t){var e,a=f[t];delete f[t];var s="xs"!==t?"-"+t:"";null!=(e=null!=a&&"object"==typeof a?a.cols:a)&&p.push(""+m+s+"-"+e)})),u.a.createElement(v,Object(s.a)({ref:e},f,{className:r.a.apply(void 0,[i,b,o&&"no-gutters"].concat(p))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},e.a=d},509:function(t,e,a){"use strict";var s=a(405),n=a(408),i=a(409),r=a.n(i),o=a(0),u=a.n(o),c=a(411),l=u.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.fluid,o=t.as,l=void 0===o?"div":o,d=t.className,v=Object(n.a)(t,["bsPrefix","fluid","as","className"]),f=Object(c.a)(a,"container"),b="string"==typeof i?"-"+i:"-fluid";return u.a.createElement(l,Object(s.a)({ref:e},v,{className:r()(d,i?""+f+b:f)}))}));l.displayName="Container",l.defaultProps={fluid:!1},e.a=l},583:function(t,e,a){"use strict";var s=a(555),n=a.n(s),i=a(0),r=a.n(i),o=(a(404),function(t){var e=t.children,a=n()(t,["children"]);return r.a.createElement("div",a,e)});o.defaultProps={className:"",style:{}},e.a=o}}]);