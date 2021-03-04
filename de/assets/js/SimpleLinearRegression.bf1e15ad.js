/*! For license information please see SimpleLinearRegression.bf1e15ad.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[998],{4096:function(t,e,i){"use strict";i.r(e);i(421);var r=i(492),o=i.n(r),a=i(456),n=i.n(a),s=i(407),d=i.n(s),l=i(414),v=i.n(l),u=i(415),c=i.n(u),f=i(418),p=i.n(f),g=i(419),y=i.n(g),h=i(417),b=i.n(h),x=(i(912),i(0)),m=i.n(x),F=(i(404),i(4172)),w=i(454),O=i(424),j=i(694),k=i(484),P=i(430),M=i(595),z=i.n(M),A=i(455),C=i.n(A),q=i(1547),D=i.n(q),R=i(1548),N=i.n(R),E=i(6195),B=i.n(E),S=i(829),J=i.n(S),L=i(431),X=i.n(L),G=i(433),H=i.n(G),I=i(589),K=i(506),Q=i(1058),T=i(933),U=i(629),V=i(422),W=i(439);i(495);function Y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,r=b()(t);if(e){var o=b()(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return y()(this,i)}}Object(V.a)("StatisticalModels");var Z=0;function $(t,e){for(var i=Object(I.a)(t),r=Object(I.a)(e),o=0,a=0,n=t.length,s=0;s<n;s++){var d=t[s]-i;o+=d*d,a+=d*(e[s]-r)}var l=a/o;return[r-l*i,l]}function _(t){return C()(t)||z()(t)}function tt(t){return Object(P.isPrimitive)(t)&&!C()(t)}function et(t){var e=t.x,i=t.y,r=t.data,o=t.group,a=t.omitMissing,n=r[e],s=r[i],d=r[o];if(a){var l=[],v=[],u=[];if(d)for(var c=0;c<n.length;c++)!_(d[c])&&tt(n[c])&&tt(s[c])&&(l.push(n[c]),v.push(s[c]),u.push(d[c]));else for(var f=0;f<n.length;f++)tt(n[f])&&tt(s[f])&&(l.push(n[f]),v.push(s[f]));return{xd:l,yd:v,groups:u}}return{xd:n,yd:s,groups:d}}var it=d()("th",{},void 0,"t"),rt=d()("th",{},void 0,"t"),ot=function(t){p()(i,t);var e=Y(i);function i(t){var r;v()(this,i),r=e.call(this,t),Z+=1;var o=t.x,a=t.y,n=t.data,s=t.group,d=t.omitMissing;return r.state=et({x:o,y:a,data:n,group:s,omitMissing:d}),r}return c()(i,[{key:"render",value:function(){var t,e=this,i=this.state,r=i.xd,a=i.yd,s=i.groups,l=this.props,v=l.x,u=l.y,c=l.group,f=l.data,p=l.t,g=d()("td",{},void 0,v);try{if(c){var y=Object(U.a)(r,s,I.a),h=Object(T.a)(r,a,s,$);t=d()("div",{style:{overflowX:"auto",width:"100%"}},void 0,d()("label",{},void 0,p("regression-y-on-x",{x:v,y:u})),d()("p",{},void 0,d()("i",{},void 0,p("grouped-by")," ",c,":")),D()(N()(h,(function(t,e){for(var i=n()(t,2),o=i[0],s=i[1],l=B()(),v=B()(),u=B()(),c=J.a.factory(a.length-2),f=0;f<a.length;f++){l(o+s*r[f]-a[f]),v(r[f]),u(r[f]-y[e])}var h=l()/(a.length-2),b=h/u(),x=H()(b),m=1/a.length*h*v()/u(),F=H()(m),w=s/x,O=o/F;return d()("div",{},void 0,d()("label",{},void 0,e,":"),d()(j.a,{bordered:!0,size:"sm"},void 0,d()("thead",{},void 0,d()("tr",{},void 0,d()("th",{},void 0,p("variable")),d()("th",{},void 0,p("coefficient")),d()("th",{},void 0,p("std-error")),it,d()("th",{},void 0,p("p-value")))),d()("tbody",{},void 0,d()("tr",{},void 0,d()("td",{},void 0,p("intercept")),d()("td",{},void 0,o.toFixed(4)),d()("td",{},void 0,F.toFixed(4)),d()("td",{},void 0,O.toFixed(4)),d()("td",{},void 0,2*(1-c(X()(O))).toFixed(4))),d()("tr",{},void 0,g,d()("td",{},void 0,s.toFixed(4)),d()("td",{},void 0,x.toFixed(4)),d()("td",{},void 0,w.toFixed(4)),d()("td",{},void 0,2*(1-c(X()(w))).toFixed(4))))))}))),this.props.onPredict?d()(k.a,{tooltip:p("use-model-to-predict-tooltip")},void 0,d()(O.a,{variant:"secondary",size:"sm",onClick:function(){for(var t=f[v],i=f[u],r=new Float64Array(i.length),o=new Float64Array(i.length),a=f[c],s=0;s<r.length;s++){var d=n()(h[a[s]],2),l=d[0],p=d[1];r[s]=l+p*t[s],o[s]=i[s]-r[s]}e.props.onPredict(r,o,Z)}},void 0,this.props.t("use-model-to-predict"))):null,this.props.onDiagnostics?d()(O.a,{variant:"secondary",size:"sm",style:{marginLeft:6},onClick:function(){for(var t=f[v],i=f[u],r=new Float64Array(i.length),a=new Float64Array(i.length),s=f[c],l=0;l<r.length;l++){var g=n()(h[s[l]],2),y=g[0],b=g[1];r[l]=y+b*t[l],a[l]=i[l]-r[l]}var x={variable:p("qq-plot-of-residuals"),type:"Chart",value:m.a.createElement(K.a,o()({draggable:!0,editable:!0,fit:!0},Object(Q.b)(a,"residuals"),{meta:{type:"qqplot of regression residuals",x:t,y:i}}))},F={variable:p("residuals-vs-fitted"),type:"Chart",value:d()(K.a,{draggable:!0,editable:!0,fit:!0,data:[{x:r,y:a,mode:"markers"}],layout:{xaxis:{title:p("fitted-values")},yaxis:{title:p("residuals")},title:p("residuals-vs-fitted")},meta:{type:"regression residuals vs. fitted",x:t,y:i}})};e.props.onDiagnostics([x,F])}},void 0,p("model-diagnostics")):null)}else{for(var b=$(r,a),x=n()(b,2),F=x[0],P=x[1],M=B()(),z=B()(),A=B()(),C=Object(I.a)(r),q=J.a.factory(a.length-2),R=0;R<a.length;R++){M(F+P*r[R]-a[R]),z(r[R]),A(r[R]-C)}var E=M()/(a.length-2),S=E/A(),L=H()(S),G=1/a.length*E*z()/A(),V=H()(G),W=P/L,Y=F/V;t=d()("div",{style:{overflowX:"auto",width:"100%"}},void 0,d()("label",{},void 0,p("simple-regression-title",{x:v,y:u,counter:Z})),d()(j.a,{bordered:!0,size:"sm"},void 0,d()("thead",{},void 0,d()("tr",{},void 0,d()("th",{},void 0,p("variable")),d()("th",{},void 0,p("coefficient")),d()("th",{},void 0,p("std-error")),rt,d()("th",{},void 0,p("p-value")))),d()("tbody",{},void 0,d()("tr",{},void 0,d()("td",{},void 0,p("intercept")),d()("td",{},void 0,F.toFixed(4)),d()("td",{},void 0,V.toFixed(4)),d()("td",{},void 0,Y.toFixed(4)),d()("td",{},void 0,2*(1-q(X()(Y))).toFixed(4))),d()("tr",{},void 0,d()("td",{},void 0,v),d()("td",{},void 0,P.toFixed(4)),d()("td",{},void 0,L.toFixed(4)),d()("td",{},void 0,W.toFixed(4)),d()("td",{},void 0,2*(1-q(X()(W))).toFixed(4))))),this.props.onPredict?d()(k.a,{tooltip:p("use-model-to-predict-tooltip")},void 0,d()(O.a,{variant:"secondary",size:"sm",onClick:function(){for(var t=f[v],i=f[u],r=new Array(i.length),o=new Array(i.length),a=0;a<r.length;a++)r[a]=F+P*t[a],o[a]=i[a]-r[a];e.props.onPredict(r,o,Z)}},void 0,this.props.t("use-model-to-predict"))):null,this.props.onDiagnostics?d()(O.a,{variant:"secondary",size:"sm",style:{marginLeft:6},onClick:function(){for(var t=f[v],i=f[u],r=new Array(i.length),a=new Array(i.length),n=0;n<r.length;n++)r[n]=F+P*t[n],a[n]=i[n]-r[n];var s=m.a.createElement(K.a,o()({draggable:!0,editable:!0,fit:!0},Object(Q.b)(a,"residuals"),{meta:{type:"qqplot of regression residuals",x:t,y:i}})),l=d()(K.a,{draggable:!0,editable:!0,fit:!0,data:[{x:r,y:a,mode:"markers",type:r.length>2e3?"scattergl":"scatter"}],layout:{xaxis:{title:p("fitted-values")},yaxis:{title:p("residuals")},title:p("residuals-vs-fitted")},meta:{type:"regression residuals vs. fitted",x:t,y:i}});e.props.onDiagnostics([s,l])}},void 0,p("model-diagnostics")):null)}return t}catch(_){return d()(w.a,{variant:"danger"},void 0,p("missing-attributes"))}}}],[{key:"getDerivedStateFromProps",value:function(t,e){return t.data!==e.data||t.x!==e.x||t.y!==e.y||t.group!==e.group||t.omitMissing!==e.omitMissing?et({x:t.x,y:t.y,intercept:t.intercept,omitMissing:t.omitMissing,data:t.data,group:t.group}):null}}]),i}(x.Component);ot.defaultProps={group:null,omitMissing:!1,onDiagnostics:null,onPredict:null},e.default=Object(F.a)("StatisticalModels")(Object(W.a)(ot))},424:function(t,e,i){"use strict";var r=i(405),o=i(408),a=i(409),n=i.n(a),s=i(0),d=i.n(s),l=i(411),v=i(464),u=d.a.forwardRef((function(t,e){var i=t.bsPrefix,a=t.variant,s=t.size,u=t.active,c=t.className,f=t.block,p=t.type,g=t.as,y=Object(o.a)(t,["bsPrefix","variant","size","active","className","block","type","as"]),h=Object(l.a)(i,"btn"),b=n()(c,h,u&&"active",a&&h+"-"+a,f&&h+"-block",s&&h+"-"+s);if(y.href)return d.a.createElement(v.a,Object(r.a)({},y,{as:g,ref:e,className:n()(b,y.disabled&&"disabled")}));e&&(y.ref=e),p?y.type=p:g||(y.type="button");var x=g||"button";return d.a.createElement(x,Object(r.a)({},y,{className:b}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},e.a=u},6195:function(t,e,i){"use strict";var r=i(6196);t.exports=r},6196:function(t,e,i){"use strict";t.exports=function(){var t,e=0;return function(i){if(0===arguments.length)return t?e:null;return t=!0,e+=i*i}}},912:function(t,e,i){i(971)("Float64",8,(function(t){return function(e,i,r){return t(this,e,i,r)}}))}}]);