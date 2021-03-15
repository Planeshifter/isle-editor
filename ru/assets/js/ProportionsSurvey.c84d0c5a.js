(window.webpackJsonp=window.webpackJsonp||[]).push([[832],{422:function(e,t,s){"use strict";var r=s(406),a=s(408),n=s(409),i=s.n(n),o=s(0),l=s.n(o),u=s(411),c=s(470),p=l.a.forwardRef((function(e,t){var s=e.bsPrefix,n=e.variant,o=e.size,p=e.active,d=e.className,f=e.block,v=e.type,h=e.as,b=Object(a.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),m=Object(u.a)(s,"btn"),g=i()(d,m,p&&"active",n&&m+"-"+n,f&&m+"-block",o&&m+"-"+o);if(b.href)return l.a.createElement(c.a,Object(r.a)({},b,{as:h,ref:t,className:i()(g,b.disabled&&"disabled")}));t&&(b.ref=t),v?b.type=v:h||(b.type="button");var y=h||"button";return l.a.createElement(y,Object(r.a)({},b,{className:g}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=p},467:function(e,t,s){"use strict";var r=s(406),a=s(408),n=s(409),i=s.n(n),o=s(0),l=s.n(o),u=s(411),c=["xl","lg","md","sm","xs"],p=l.a.forwardRef((function(e,t){var s=e.bsPrefix,n=e.className,o=e.noGutters,p=e.as,d=void 0===p?"div":p,f=Object(a.a)(e,["bsPrefix","className","noGutters","as"]),v=Object(u.a)(s,"row"),h=v+"-cols",b=[];return c.forEach((function(e){var t,s=f[e];delete f[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=s&&"object"==typeof s?s.cols:s)&&b.push(""+h+r+"-"+t)})),l.a.createElement(d,Object(r.a)({ref:t},f,{className:i.a.apply(void 0,[n,v,o&&"no-gutters"].concat(b))}))}));p.displayName="Row",p.defaultProps={noGutters:!1},t.a=p},483:function(e,t,s){"use strict";var r=s(406),a=s(408),n=s(409),i=s.n(n),o=s(0),l=s.n(o),u=s(411),c=l.a.forwardRef((function(e,t){var s=e.bsPrefix,n=e.fluid,o=e.as,c=void 0===o?"div":o,p=e.className,d=Object(a.a)(e,["bsPrefix","fluid","as","className"]),f=Object(u.a)(s,"container"),v="string"==typeof n?"-"+n:"-fluid";return l.a.createElement(c,Object(r.a)({ref:t},d,{className:i()(p,n?""+f+v:f)}))}));c.displayName="Container",c.defaultProps={fluid:!1},t.a=c},576:function(e,t,s){"use strict";var r=s(546),a=s.n(r),n=s(0),i=s.n(n),o=(s(404),function(e){var t=e.children,s=a()(e,["children"]);return i.a.createElement("div",s,t)});o.defaultProps={className:"",style:{}},t.a=o},6533:function(e,t,s){"use strict";s.r(t);s(420);var r=s(407),a=s.n(r),n=s(414),i=s.n(n),o=s(415),l=s.n(o),u=s(424),c=s.n(u),p=s(417),d=s.n(p),f=s(418),v=s.n(f),h=s(416),b=s.n(h),m=s(412),g=s.n(m),y=(s(854),s(0)),N=(s(404),s(450)),w=s.n(N),O=s(4096),j=s(466),P=s(494),x=s(467),R=s(422),S=s(483),k=s(965),A=s.n(k),E=s(531),J=s(1447),C=s(642),H=s(576),z=s(988),B=s(465),D=s(464),G=s(421);s(341);function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=b()(e);if(t){var a=b()(this).constructor;s=Reflect.construct(r,arguments,a)}else s=r.apply(this,arguments);return v()(this,s)}}Object(G.a)("Survey");var V=w()("isle:proportions-survey"),q=Object(E.a)("proportions-survey");var M=function(e){d()(s,e);var t=T(s);function s(e){var r;return i()(this,s),r=t.call(this,e),g()(c()(r),"submitQuestion",(function(){V("Sending the data: "+r.state.value);var e=r.context;e.log({id:r.id,type:D.Pb,value:JSON.stringify(r.state.value),anonymous:r.props.anonymous},"members"),r.setState({submitted:!0}),e.addNotification({title:r.props.t("submitted"),message:r.props.t("answer-submitted"),level:"success"}),r.props.onSubmit(r.state.value)})),g()(c()(r),"onData",(function(e){V("ProportionsSurvey is receiving data: "+JSON.stringify(e)),e=e[r.id],r.getAverage(e)})),r.id=e.id||q(e),r.results=[],r.state={submitted:!1,value:null,resultValues:null,nResults:0},r}return l()(s,[{key:"getAverage",value:function(e){for(var t=new Array(e.length),s=0;s<e.length;s++)t[s]=JSON.parse(e[s]);for(var r=this.props.legends.length,a=new Array(r).fill(0),n=new Array(r).fill(0),i=0;i<t.length;i++)for(var o=0;o<t[i].length;o++)a[o]+=t[i][o];V("The sum is "+a);for(var l=0;l<r;l++)n[l]=a[l]/t.length;V("The mean is "+n),this.setState({resultValues:n,nResults:t.length})}},{key:"render",value:function(){var e=this,t=this.state.submitted&&!this.props.allowMultipleAnswers||this.props.disabled||A()(function(e){var t=0;if(!e)return t;for(var s=0;s<e.length;s++)t+=e[s];return t}(this.state.value),100)>.1;return a()(C.a,{user:!0,banner:a()("h2",{},void 0,this.props.t("sign-in"))},void 0,a()(S.a,{},void 0,a()(x.a,{},void 0,a()(P.a,{md:6},void 0,a()(j.a,{body:!0,className:"proportions-survey"},void 0,a()("h3",{},void 0,this.props.question),a()(J.a,{legends:this.props.legends,precision:this.props.precision,step:this.props.step,height:this.props.personalHeight,colors:this.props.colors,margin:this.props.margin,onChange:function(t){e.setState({value:t})}}),a()(R.a,{size:"small",variant:"success",block:!0,fill:!0,onClick:this.submitQuestion,disabled:t},void 0,this.props.t(t?"submitted":"submit")))),a()(P.a,{md:6},void 0,a()(j.a,{body:!0,className:"proportions-survey"},void 0,a()("h3",{},void 0,this.props.group),a()(z.a,{for:[this.id],onData:this.onData}),a()("h4",{},void 0,this.props.t("number-of-votes"),": ",this.state.nResults," "),a()(J.a,{legends:this.props.legends,precision:this.props.precision,step:this.props.step,height:this.props.groupHeight,colors:this.props.colors,disabled:!0,margin:this.props.margin,values:this.state.resultValues}))))),a()(H.a,{buttonLabel:this.props.t("responses"),id:this.id}))}}]),s}(y.Component);M.defaultProps={onSubmit:function(){},allowMultipleAnswers:!1,question:"",anonymous:!1,disabled:!1,legends:[],group:"group results",precision:2,step:.25,colors:null,personalHeight:200,groupHeight:100,margin:"40px"},M.contextType=B.a,t.default=Object(O.a)("Survey")(M)}}]);