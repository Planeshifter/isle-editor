/*! For license information please see SimpleLinearRegression.81b4f455.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[979],{3992:function(t,e,i){"use strict";i.r(e);i(420);var o,r,a=i(493),n=i.n(a),s=i(456),d=i.n(s),l=i(407),v=i.n(l),u=i(414),c=i.n(u),p=i(415),f=i.n(p),g=i(417),y=i.n(g),h=i(418),b=i.n(h),x=i(416),m=i.n(x),F=(i(897),i(0)),w=i.n(F),O=(i(404),i(4096)),j=i(454),k=i(422),P=i(682),M=i(484),z=i(429),A=i(588),C=i.n(A),q=i(455),D=i.n(q),R=i(1487),N=i.n(R),E=i(1488),B=i.n(E),S=i(6241),J=i.n(S),L=i(819),X=i.n(L),G=i(430),H=i.n(G),I=i(432),K=i.n(I),Q=i(582),T=i(505),U=i(1030),V=i(915),W=i(619),Y=i(421),Z=i(439);i(496);function $(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=m()(t);if(e){var r=m()(this).constructor;i=Reflect.construct(o,arguments,r)}else i=o.apply(this,arguments);return b()(this,i)}}Object(Y.a)("StatisticalModels");var _=0;function tt(t,e){for(var i=Object(Q.a)(t),o=Object(Q.a)(e),r=0,a=0,n=t.length,s=0;s<n;s++){var d=t[s]-i;r+=d*d,a+=d*(e[s]-o)}var l=a/r;return{yint:o-l*i,slope:l,xg:t,yg:e}}function et(t){return D()(t)||C()(t)}function it(t){return Object(z.isPrimitive)(t)&&!D()(t)}function ot(t){var e=t.x,i=t.y,o=t.data,r=t.group,a=t.omitMissing,n=o[e],s=o[i],d=o[r];if(a){var l=[],v=[],u=[];if(d)for(var c=0;c<n.length;c++)!et(d[c])&&it(n[c])&&it(s[c])&&(l.push(n[c]),v.push(s[c]),u.push(d[c]));else for(var p=0;p<n.length;p++)it(n[p])&&it(s[p])&&(l.push(n[p]),v.push(s[p]));return{xd:l,yd:v,groups:u}}return{xd:n,yd:s,groups:d}}var rt=function(t){y()(i,t);var e=$(i);function i(t){var o;c()(this,i),o=e.call(this,t),_+=1;var r=t.x,a=t.y,n=t.data,s=t.group,d=t.omitMissing;return o.state=ot({x:r,y:a,data:n,group:s,omitMissing:d}),o}return f()(i,[{key:"render",value:function(){var t,e,i,a=this,s=this.state,l=s.xd,u=s.yd,c=s.groups,p=this.props,f=p.x,g=p.y,y=p.group,h=p.data,b=p.t;try{if(y){var x=Object(W.a)(l,c,Q.a),m=Object(V.a)(l,u,c,tt);i=v()("div",{style:{overflowX:"auto",width:"100%"}},void 0,v()("label",{},void 0,b("regression-y-on-x",{x:f,y:g})),v()("p",{},void 0,v()("i",{},void 0,b("grouped-by")," ",y,":")),N()(B()(m,(function(e,i){for(var r=e.yint,a=e.slope,n=e.xg,s=e.yg,d=J()(),l=J()(),u=J()(),c=X.a.factory(s.length-2),p=0;p<s.length;p++){d(r+a*n[p]-s[p]),l(n[p]),u(n[p]-x[i])}var g=d()/(s.length-2),y=g/u(),h=K()(y),m=1/s.length*g*l()/u(),F=K()(m),w=a/h,O=r/F;return v()("div",{},void 0,v()("label",{},void 0,i,":"),v()(P.a,{bordered:!0,size:"sm"},void 0,v()("thead",{},void 0,v()("tr",{},void 0,v()("th",{},void 0,b("variable")),v()("th",{},void 0,b("coefficient")),v()("th",{},void 0,b("std-error")),o||(o=v()("th",{},void 0,"t")),v()("th",{},void 0,b("p-value")))),v()("tbody",{},void 0,v()("tr",{},void 0,v()("td",{},void 0,b("intercept")),v()("td",{},void 0,r.toFixed(4)),v()("td",{},void 0,F.toFixed(4)),v()("td",{},void 0,O.toFixed(4)),v()("td",{},void 0,2*(1-c(H()(O))).toFixed(4))),v()("tr",{},void 0,t||(t=v()("td",{},void 0,f)),v()("td",{},void 0,a.toFixed(4)),v()("td",{},void 0,h.toFixed(4)),v()("td",{},void 0,w.toFixed(4)),v()("td",{},void 0,2*(1-c(H()(w))).toFixed(4))))))}))),this.props.onPredict?v()(M.a,{tooltip:b("use-model-to-predict-tooltip")},void 0,v()(k.a,{variant:"secondary",size:"sm",onClick:function(){for(var t=h[f],e=h[g],i=new Float64Array(e.length),o=new Float64Array(e.length),r=h[y],n=0;n<i.length;n++){var s=d()(m[r[n]],2),l=s[0],v=s[1];i[n]=l+v*t[n],o[n]=e[n]-i[n]}a.props.onPredict(i,o,_)}},void 0,this.props.t("use-model-to-predict"))):null,this.props.onDiagnostics?v()(k.a,{variant:"secondary",size:"sm",style:{marginLeft:6},onClick:function(){for(var t=h[f],e=h[g],i=new Float64Array(e.length),o=new Float64Array(e.length),r=h[y],s=0;s<i.length;s++){var l=d()(m[r[s]],2),u=l[0],c=l[1];i[s]=u+c*t[s],o[s]=e[s]-i[s]}var p={variable:b("qq-plot-of-residuals"),type:"Chart",value:w.a.createElement(T.a,n()({draggable:!0,editable:!0,fit:!0},Object(U.b)(o,"residuals"),{meta:{type:"qqplot of regression residuals",x:t,y:e}}))},x={variable:b("residuals-vs-fitted"),type:"Chart",value:v()(T.a,{draggable:!0,editable:!0,fit:!0,data:[{x:i,y:o,mode:"markers"}],layout:{xaxis:{title:b("fitted-values")},yaxis:{title:b("residuals")},title:b("residuals-vs-fitted")},meta:{type:"regression residuals vs. fitted",x:t,y:e}})};a.props.onDiagnostics([p,x])}},void 0,b("model-diagnostics")):null)}else{for(var F=tt(l,u),O=F.yint,z=F.slope,A=J()(),C=J()(),q=J()(),D=Object(Q.a)(l),R=X.a.factory(u.length-2),E=0;E<u.length;E++){A(O+z*l[E]-u[E]),C(l[E]),q(l[E]-D)}var S=A()/(u.length-2),L=S/q(),G=K()(L),I=1/u.length*S*C()/q(),Y=K()(I),Z=z/G,$=O/Y;i=v()("div",{style:{overflowX:"auto",width:"100%"}},void 0,v()("label",{},void 0,b("simple-regression-title",{x:f,y:g,counter:_})),v()(P.a,{bordered:!0,size:"sm"},void 0,v()("thead",{},void 0,v()("tr",{},void 0,v()("th",{},void 0,b("variable")),v()("th",{},void 0,b("coefficient")),v()("th",{},void 0,b("std-error")),r||(r=v()("th",{},void 0,"t")),v()("th",{},void 0,b("p-value")))),v()("tbody",{},void 0,v()("tr",{},void 0,v()("td",{},void 0,b("intercept")),v()("td",{},void 0,O.toFixed(4)),v()("td",{},void 0,Y.toFixed(4)),v()("td",{},void 0,$.toFixed(4)),v()("td",{},void 0,2*(1-R(H()($))).toFixed(4))),v()("tr",{},void 0,e||(e=v()("td",{},void 0,f)),v()("td",{},void 0,z.toFixed(4)),v()("td",{},void 0,G.toFixed(4)),v()("td",{},void 0,Z.toFixed(4)),v()("td",{},void 0,2*(1-R(H()(Z))).toFixed(4))))),this.props.onPredict?v()(M.a,{tooltip:b("use-model-to-predict-tooltip")},void 0,v()(k.a,{variant:"secondary",size:"sm",onClick:function(){for(var t=h[f],e=h[g],i=new Array(e.length),o=new Array(e.length),r=0;r<i.length;r++)i[r]=O+z*t[r],o[r]=e[r]-i[r];a.props.onPredict(i,o,_)}},void 0,this.props.t("use-model-to-predict"))):null,this.props.onDiagnostics?v()(k.a,{variant:"secondary",size:"sm",style:{marginLeft:6},onClick:function(){for(var t=h[f],e=h[g],i=new Array(e.length),o=new Array(e.length),r=0;r<i.length;r++)i[r]=O+z*t[r],o[r]=e[r]-i[r];var s=w.a.createElement(T.a,n()({draggable:!0,editable:!0,fit:!0},Object(U.b)(o,"residuals"),{meta:{type:"qqplot of regression residuals",x:t,y:e}})),d=v()(T.a,{draggable:!0,editable:!0,fit:!0,data:[{x:i,y:o,mode:"markers",type:i.length>2e3?"scattergl":"scatter"}],layout:{xaxis:{title:b("fitted-values")},yaxis:{title:b("residuals")},title:b("residuals-vs-fitted")},meta:{type:"regression residuals vs. fitted",x:t,y:e}});a.props.onDiagnostics([s,d])}},void 0,b("model-diagnostics")):null)}return i}catch(et){return v()(j.a,{variant:"danger"},void 0,b("missing-attributes"))}}}],[{key:"getDerivedStateFromProps",value:function(t,e){return t.data!==e.data||t.x!==e.x||t.y!==e.y||t.group!==e.group||t.omitMissing!==e.omitMissing?ot({x:t.x,y:t.y,intercept:t.intercept,omitMissing:t.omitMissing,data:t.data,group:t.group}):null}}]),i}(F.Component);rt.defaultProps={group:null,omitMissing:!1,onDiagnostics:null,onPredict:null},e.default=Object(O.a)("StatisticalModels")(Object(Z.a)(rt))},422:function(t,e,i){"use strict";var o=i(406),r=i(408),a=i(409),n=i.n(a),s=i(0),d=i.n(s),l=i(411),v=i(470),u=d.a.forwardRef((function(t,e){var i=t.bsPrefix,a=t.variant,s=t.size,u=t.active,c=t.className,p=t.block,f=t.type,g=t.as,y=Object(r.a)(t,["bsPrefix","variant","size","active","className","block","type","as"]),h=Object(l.a)(i,"btn"),b=n()(c,h,u&&"active",a&&h+"-"+a,p&&h+"-block",s&&h+"-"+s);if(y.href)return d.a.createElement(v.a,Object(o.a)({},y,{as:g,ref:e,className:n()(b,y.disabled&&"disabled")}));e&&(y.ref=e),f?y.type=f:g||(y.type="button");var x=g||"button";return d.a.createElement(x,Object(o.a)({},y,{className:b}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},e.a=u},6241:function(t,e,i){"use strict";var o=i(6242);t.exports=o},6242:function(t,e,i){"use strict";t.exports=function(){var t,e=0;return function(i){if(0===arguments.length)return t?e:null;return t=!0,e+=i*i}}},897:function(t,e,i){i(952)("Float64",8,(function(t){return function(e,i,o){return t(this,e,i,o)}}))}}]);