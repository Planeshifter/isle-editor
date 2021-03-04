(window.webpackJsonp=window.webpackJsonp||[]).push([[828],{424:function(t,e,s){"use strict";var r=s(405),a=s(408),i=s(409),n=s.n(i),o=s(0),l=s.n(o),u=s(411),c=s(464),p=l.a.forwardRef((function(t,e){var s=t.bsPrefix,i=t.variant,o=t.size,p=t.active,d=t.className,f=t.block,v=t.type,h=t.as,b=Object(a.a)(t,["bsPrefix","variant","size","active","className","block","type","as"]),m=Object(u.a)(s,"btn"),g=n()(d,m,p&&"active",i&&m+"-"+i,f&&m+"-block",o&&m+"-"+o);if(b.href)return l.a.createElement(c.a,Object(r.a)({},b,{as:h,ref:e,className:n()(g,b.disabled&&"disabled")}));e&&(b.ref=e),v?b.type=v:h||(b.type="button");var y=h||"button";return l.a.createElement(y,Object(r.a)({},b,{className:g}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1},e.a=p},476:function(t,e,s){"use strict";var r=s(405),a=s(408),i=s(409),n=s.n(i),o=s(0),l=s.n(o),u=s(411),c=["xl","lg","md","sm","xs"],p=l.a.forwardRef((function(t,e){var s=t.bsPrefix,i=t.className,o=t.noGutters,p=t.as,d=void 0===p?"div":p,f=Object(a.a)(t,["bsPrefix","className","noGutters","as"]),v=Object(u.a)(s,"row"),h=v+"-cols",b=[];return c.forEach((function(t){var e,s=f[t];delete f[t];var r="xs"!==t?"-"+t:"";null!=(e=null!=s&&"object"==typeof s?s.cols:s)&&b.push(""+h+r+"-"+e)})),l.a.createElement(d,Object(r.a)({ref:e},f,{className:n.a.apply(void 0,[i,v,o&&"no-gutters"].concat(b))}))}));p.displayName="Row",p.defaultProps={noGutters:!1},e.a=p},509:function(t,e,s){"use strict";var r=s(405),a=s(408),i=s(409),n=s.n(i),o=s(0),l=s.n(o),u=s(411),c=l.a.forwardRef((function(t,e){var s=t.bsPrefix,i=t.fluid,o=t.as,c=void 0===o?"div":o,p=t.className,d=Object(a.a)(t,["bsPrefix","fluid","as","className"]),f=Object(u.a)(s,"container"),v="string"==typeof i?"-"+i:"-fluid";return l.a.createElement(c,Object(r.a)({ref:e},d,{className:n()(p,i?""+f+v:f)}))}));c.displayName="Container",c.defaultProps={fluid:!1},e.a=c},583:function(t,e,s){"use strict";var r=s(555),a=s.n(r),i=s(0),n=s.n(i),o=(s(404),function(t){var e=t.children,s=a()(t,["children"]);return n.a.createElement("div",s,e)});o.defaultProps={className:"",style:{}},e.a=o},6475:function(t,e,s){"use strict";s.r(e);s(427),s(416),s(421);var r=s(407),a=s.n(r),i=(s(863),s(414)),n=s.n(i),o=s(415),l=s.n(o),u=s(425),c=s.n(u),p=s(418),d=s.n(p),f=s(419),v=s.n(f),h=s(417),b=s.n(h),m=s(412),g=s.n(m),y=s(0),N=(s(404),s(450)),w=s.n(N),O=s(4172),j=s(465),P=s(493),x=s(476),S=s(424),R=s(509),k=s(984),A=s.n(k),E=s(554),D=s(1507),J=s(651),C=s(583),H=s(1008),z=s(463),G=s(462),T=s(422);s(341);function V(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,r=b()(t);if(e){var a=b()(this).constructor;s=Reflect.construct(r,arguments,a)}else s=r.apply(this,arguments);return v()(this,s)}}Object(T.a)("Survey");var q=w()("isle:proportions-survey"),M=Object(E.a)("proportions-survey");var Q=function(t){d()(s,t);var e=V(s);function s(t){var r;return n()(this,s),r=e.call(this,t),g()(c()(r),"submitQuestion",(function(){q("Sending the data: "+r.state.value);var t=r.context;t.log({id:r.id,type:G.Pb,value:JSON.stringify(r.state.value),anonymous:r.props.anonymous},"members"),r.setState({submitted:!0}),t.addNotification({title:r.props.t("submitted"),message:r.props.t("answer-submitted"),level:"success"}),r.props.onSubmit(r.state.value)})),g()(c()(r),"onData",(function(t){q("ProportionsSurvey is receiving data: "+JSON.stringify(t)),t=t[r.id],r.getAverage(t)})),r.id=t.id||M(t),r.results=[],r.state={submitted:!1,value:null,resultValues:null,nResults:0},r}return l()(s,[{key:"getAverage",value:function(t){for(var e=new Array(t.length),s=0;s<t.length;s++)e[s]=JSON.parse(t[s]);for(var r=this.props.legends.length,a=new Array(r).fill(0),i=new Array(r).fill(0),n=0;n<e.length;n++)for(var o=0;o<e[n].length;o++)a[o]+=e[n][o];q("The sum is "+a);for(var l=0;l<r;l++)i[l]=a[l]/e.length;q("The mean is "+i),this.setState({resultValues:i,nResults:e.length})}},{key:"render",value:function(){var t=this,e=this.state.submitted&&!this.props.allowMultipleAnswers||this.props.disabled||A()(function(t){var e=0;if(!t)return e;for(var s=0;s<t.length;s++)e+=t[s];return e}(this.state.value),100)>.1;return a()(J.a,{user:!0,banner:a()("h2",{},void 0,this.props.t("sign-in"))},void 0,a()(R.a,{},void 0,a()(x.a,{},void 0,a()(P.a,{md:6},void 0,a()(j.a,{body:!0,className:"proportions-survey"},void 0,a()("h3",{},void 0,this.props.question),a()(D.a,{legends:this.props.legends,precision:this.props.precision,step:this.props.step,height:this.props.personalHeight,colors:this.props.colors,margin:this.props.margin,onChange:function(e){t.setState({value:e})}}),a()(S.a,{size:"small",variant:"success",block:!0,fill:!0,onClick:this.submitQuestion,disabled:e},void 0,this.props.t(e?"submitted":"submit")))),a()(P.a,{md:6},void 0,a()(j.a,{body:!0,className:"proportions-survey"},void 0,a()("h3",{},void 0,this.props.group),a()(H.a,{for:[this.id],onData:this.onData}),a()("h4",{},void 0,this.props.t("number-of-votes"),": ",this.state.nResults," "),a()(D.a,{legends:this.props.legends,precision:this.props.precision,step:this.props.step,height:this.props.groupHeight,colors:this.props.colors,disabled:!0,margin:this.props.margin,values:this.state.resultValues}))))),a()(C.a,{buttonLabel:this.props.t("responses"),id:this.id}))}}]),s}(y.Component);Q.defaultProps={onSubmit:function(){},allowMultipleAnswers:!1,question:"",anonymous:!1,disabled:!1,legends:[],group:"group results",precision:2,step:.25,colors:null,personalHeight:200,groupHeight:100,margin:"40px"},Q.contextType=z.a,e.default=Object(O.a)("Survey")(Q)}}]);