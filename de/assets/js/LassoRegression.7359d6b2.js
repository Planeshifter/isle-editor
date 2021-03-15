/*! For license information please see LassoRegression.7359d6b2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[504],{1074:function(t,e,r){"use strict";var a=r(636),i=r.n(a),n=r(429);e.a=function(t,e){var r=i()(e);if(!i()(t))throw new TypeError("invalid input argument. Must provide an array. Value: `"+t+"`.");if(!r&&!Object(n.isPrimitive)(e))throw new TypeError("invalid input argument. Second argument must either be an array or number primitive. Value: `"+e+"`.");var a=t.length,o=new Array(a);if(r){if(a!==e.length)throw new Error("invalid input argument. Array to be added must have a length equal to that of the input array.");for(var s=0;s<a;s++)o[s]=t[s]-e[s]}else for(var u=0;u<a;u++)o[u]=t[u]-e;return o}},1129:function(t,e){t.exports=function(t){throw new TypeError('"'+t+'" is read-only')},t.exports.default=t.exports,t.exports.__esModule=!0},1441:function(t,e,r){"use strict";var a=r(2708);t.exports=a},2708:function(t,e,r){"use strict";var a=r(806)(r(443));t.exports=a},3989:function(t,e,r){"use strict";r(897);e.a=function(t,e){for(var r=t.shape[0],a=t.shape[1],i=new Float64Array(r),n=0;n<r;n++){for(var o=0,s=0;s<a;s++)o+=t.get(n,s)*e[s];i[n]=o}return i}},3990:function(t,e,r){"use strict";var a=r(991),i=r.n(a)()("float64",2);e.a=function(t){var e=[t.shape[1],t.shape[0]],r=[t.strides[1],t.strides[0]],a=t.offset,n=t.order;return i(t._buffer,e,r,a,n)}},4011:function(t,e,r){"use strict";r.r(e);var a=r(414),i=r.n(a),n=r(415),o=r.n(n),s=r(424),u=r.n(s),c=r(417),v=r.n(c),l=r(418),f=r.n(l),h=r(416),p=r.n(h),d=r(412),b=r.n(d),m=r(407),y=r.n(m),g=(r(458),r(639),r(420),r(437),r(434),r(469),r(478),r(438),r(0)),w=(r(404),r(4096)),O=r(454),x=r(473),j=r.n(x),P=r(443),E=r.n(P),A=r(429),T=r.n(A),k=r(666),N=r.n(k),S=r(624),q=r.n(S),F=r(479),V=r.n(F),z=r(432),M=r.n(z),R=r(422),_=r(484),D=r(682),K=r(636),B=r.n(K);var C=function(t,e){var r=B()(e);if(!B()(t))throw new TypeError("invalid input argument. Must provide an array. Value: `"+t+"`.");if(!r&&!Object(A.isPrimitive)(e))throw new TypeError("invalid input argument. Second argument must either be an array or number primitive. Value: `"+e+"`.");var a=t.length,i=new Array(a);if(r){if(a!==e.length)throw new Error("invalid input argument. Array to be multiplied must have a length equal to that of the input array.");for(var n=0;n<a;n++)i[n]=t[n]*e[n]}else for(var o=0;o<a;o++)i[o]=t[o]*e;return i},J=r(1129),X=r.n(J),G=r(582),H=r(643),I=r(6234),L=r.n(I);var Q=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=Object(G.a)(t),i=Object(H.a)(t),n=t.length,o=new Array(n);if(e)if(r)for(var s=0;s<n;s++)o[s]=(t[s]-a)/i;else for(var u=0;u<n;u++)o[u]=t[u]-a;else if(r)for(var c=0;c<n;c++)o[c]=t[c]/i;else X()("out"),o=t.slice();return L()(o,"mu",a),L()(o,"sigma",i),o},U=r(421),W=r(439),Y=(r(496),r(897),r(450)),Z=r.n(Y),$=r(654),tt=r.n($),et=r(797),rt=r.n(et),at=r(1441),it=r.n(at),nt=r(1106),ot=r.n(nt),st=r(991),ut=r.n(st),ct=r(890),vt=r.n(ct),lt=r(430),ft=r.n(lt),ht=r(3989),pt=r(3990),dt=r(1074);var bt=function(t,e,r){var a=B()(e);if(!B()(t))throw new TypeError("invalid input argument. Must provide an array. Value: `"+t+"`.");if(!a&&!Object(A.isPrimitive)(e))throw new TypeError("invalid input argument. Second argument must either be an array or number primitive. Value: `"+e+"`.");var i=t.length,n=new Array(i);if(a){if(i!==e.length)throw new Error("invalid input argument. Array to be divided must have a length equal to that of the input array.");for(var o=0;o<i;o++)n[o]=t[o]/e[o]}else for(var s=0;s<i;s++)n[s]=t[s]/e;return n};var mt=function(t,e,r){for(var a=0,i=t.shape[0],n=0;n<i;n++){var o=t.get(n,r),s=e.get(n,r);0!==o&&0!==s&&(a+=o*s)}return a};var yt=function(t,e){for(var r=t.length,a=0,i=0;i<r;i++)a+=t[i]*e[i];return a};var gt=function(t,e){return t>e?t-e:t<-e?t+e:0},wt=Z()("isle:lasso"),Ot=ut()("generic",2),xt=1e-9,jt=function(t,e){for(var r=new Float64Array(t.shape[0]),a=0;a<r.length;a++)r[a]=t.get(a,e);return r};function Pt(t,e,r){var a=this;this.y=t,this.x=e,this.lambda=r,this.N=e.shape[0],this.p=e.shape[1],this.beta=new Float64Array(this.p),this.betast=new Float64Array(this.p),this.active=tt()(0,this.beta.length,1),this.nonactive=[],this.presid=Ot(new Float64Array(e._buffer.length),e.shape,e.strides,e.offset,e.order),this.init=function(){a.iteration=0,a.iterate()},this.init()}Pt.prototype.testKKT=function(){for(var t=this.beta,e=this.N,r=this.x,a=this.y,i=Object(dt.a)(a,Object(ht.a)(r,t)),n=bt(Object(ht.a)(Object(pt.a)(r),i),e),o=0;o<t.length;o++)if(0===t[o]){if(ft()(n[o])>this.lambda+xt)return!1}else if(t[o]>0&&n[o]-this.lambda*rt()(t[o])>xt)return!1;return!0},Pt.prototype.testActiveSet=function(){for(var t=!1,e=this.predict(this.x).residuals,r=0;r<this.nonactive.length;r++){var a=this.nonactive[r],i=jt(this.x,a);ft()(yt(i,e))/this.N>this.lambda&&(this.active.push(a),this.nonactive.splice(r,1),t=!0)}return wt("Active set changes..."),t},Pt.prototype.iterate=function(){var t=this.N,e=this.p,r=this.x,a=this.y;if(this.iteration+=1,!(this.iteration>1e4)){for(var i=!0,n=0;n<this.active.length;n++){for(var o=this.active[n],s=0;s<t;s++){for(var u=a[s],c=0;c<e;c++)u-=o!==c?r.get(s,c)*this.beta[c]:0;this.presid.set(s,o,u)}this.betast[o]=1/t*mt(r,this.presid,o);var v=this.beta[o],l=gt(this.betast[o],this.lambda);ft()(l-v)>xt&&(i=!1),this.beta[o]=l}for(var f=this.active.length-1;f>=0;f--){var h=this.active[f];ft()(this.beta[h])<xt&&(this.active.splice(f,1),this.nonactive.push(h))}(!1===i||this.testActiveSet())&&this.iterate()}},Pt.prototype.predict=function(t){it()(t)&&(t=vt()(t));for(var e=Object(ht.a)(t,this.beta),r=new Array(this.N),a=0;a<this.N;a++)r[a]=this.y[a]-e[a];return{fitted:e,residuals:r}};var Et=function(t,e,r){if(!T.a)throw new TypeError("invalid input argument. The third argument must be a number primitive. Value: `"+r+"`");if(!B()(e))throw new TypeError("invalid input argument. The second argument must be array-like. Value: `"+e+"`");if(it()(t))t=vt()(t);else if(!ot()(t)){throw new TypeError("invalid input argument. The first argument must be a matrix or an array-of-arrays. Value: `"+t+"`")}return new Pt(e,t,r)};function At(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function Tt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?At(Object(r),!0).forEach((function(e){b()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):At(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function kt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,a=p()(t);if(e){var i=p()(this).constructor;r=Reflect.construct(a,arguments,i)}else r=a.apply(this,arguments);return f()(this,r)}}Object(U.a)("StatisticalModels");var Nt=0;function St(t,e,r,a){E()(t)||(t=[t]);for(var i=[],n=[],o={},s={},u={},c=e[t[0]].length,v=0;v<t.length;v++)if(j()(r,t[v])){var l=Q(e[t[v]]);s[t[v]]=l,n.push(t[v])}else{for(var f=e[t[v]],h=N()(f,q.a),p=t[v].categories||V()(h),d=a?1:0;d<p.length;d++){var b="".concat(t[v],"_").concat(p[d]);n.push(b);var m=h[p[d]]/c;u[b]={mu:m,sigma:M()(m*(1-m))}}o[t[v]]=p}for(var y=0;y<c;y++){var g=[];a&&g.push(1);for(var w=0;w<t.length;w++)if(j()(r,t[w])){var O=s[t[w]];g.push(O[y])}else for(var x=e[t[w]],P=o[t[w]],A=x[y],T=a?1:0;T<P.length;T++){var k=u["".concat(t[w],"_").concat(P[T])],S=k.mu,F=k.sigma;g.push(A===P[T]?(1-S)/F:-S/F)}i.push(g)}return{matrix:i,predictors:n,categoricalStats:u,standardized:s}}var qt=function(t){var e=t.x,r=t.y,a=t.lambda,i=t.data,n=t.quantitative,o=t.intercept;try{var s=i[r];s=Q(s,!1,!0);var u=St(e,i,n,o),c=u.matrix,v=u.predictors,l=u.categoricalStats,f=u.standardized,h=new Et(c,s,a);if(o){for(var p=0,d=1;d<h.beta.length;d++){var b=v[d-1];j()(n,b)?(h.beta[d]*=s.sigma/f[b].sigma,p+=h.beta[d]*f[b].mu):(h.beta[d]*=s.sigma/l[b].sigma,p+=h.beta[d]*l[b].mu)}h.beta[0]=s.mu-p}else for(var m=0;m<h.beta.length;m++){var y=v[m];j()(n,y)?h.beta[m]*=s.sigma/f[y].sigma:h.beta[m]*=s.sigma/l[y].sigma}return{predictors:v,result:h,yvalues:s}}catch(g){return{}}},Ft=function(t){v()(r,t);var e=kt(r);function r(t){var a;i()(this,r),a=e.call(this,t),b()(u()(a),"handlePredict",(function(){var t=St(a.props.x,a.props.data,a.props.quantitative,a.props.intercept).matrix,e=a.state.result.predict(t),r=e.fitted,i=e.residuals;r=C(r,a.state.yvalues.sigma),i=C(i,-a.state.yvalues.sigma),a.props.onPredict(r,i,Nt)})),Nt+=1;var n=t.x,o=t.y,s=t.lambda,c=t.data,v=t.quantitative,l=t.intercept;return a.state=Tt(Tt({},qt({x:n,y:o,lambda:s,data:c,quantitative:v,intercept:l})),t),a}return o()(r,[{key:"render",value:function(){var t=this.props,e=t.y,r=t.intercept,a=t.lambda,i=t.onPredict,n=t.t,o=this.state,s=o.result,u=o.predictors;return s?Object(A.isPrimitive)(a)?y()("div",{style:{overflowX:"auto",width:"100%"}},void 0,y()("span",{className:"title"},void 0,n("lasso-title",{y:e,lambda:a.toFixed(4),counter:Nt})),function(t,e,r,a){return y()(D.a,{bordered:!0,size:"sm"},void 0,y()("thead",{},void 0,y()("tr",{},void 0,y()("th",{},void 0,a("predictor")),y()("th",{},void 0,a("coefficient")))),y()("tbody",{},void 0,e?y()("tr",{},void 0,y()("th",{},void 0,a("intercept")),y()("td",{},void 0,r.beta[0].toFixed(6))):null,t.map((function(t,a){return y()("tr",{},a,y()("th",{},void 0,t),y()("td",{},void 0,r.beta[a+Number(e)].toFixed(6)))}))))}(u,r,s,n),y()("p",{},void 0,s.testKKT()?n("kkt-satisfied"):n("kkt-not-satisfied")),i?y()(_.a,{tooltip:n("use-model-to-predict-tooltip")},void 0,y()(R.a,{variant:"secondary",size:"sm",onClick:this.handlePredict},void 0,this.props.t("use-model-to-predict"))):null):y()(O.a,{variant:"danger"},void 0,n("lambda-not-number")):y()(O.a,{variant:"danger"},void 0,n("missing-attributes"))}}],[{key:"getDerivedStateFromProps",value:function(t,e){if(t.data!==e.data||t.quantitative!==e.quantitative||t.x!==e.x||t.y!==e.y||t.intercept!==e.intercept||t.lambda!==e.lambda){var r=t.x,a=t.y,i=t.lambda,n=t.data,o=t.quantitative,s=t.intercept;return Tt(Tt({},qt({x:r,y:a,lambda:i,data:n,quantitative:o,intercept:s})),t)}return null}}]),r}(g.Component);Ft.defaultProps={lambda:.001,intercept:!0,onPredict:function(){}};e.default=Object(w.a)("StatisticalModels")(Object(W.a)(Ft))},422:function(t,e,r){"use strict";var a=r(406),i=r(408),n=r(409),o=r.n(n),s=r(0),u=r.n(s),c=r(411),v=r(470),l=u.a.forwardRef((function(t,e){var r=t.bsPrefix,n=t.variant,s=t.size,l=t.active,f=t.className,h=t.block,p=t.type,d=t.as,b=Object(i.a)(t,["bsPrefix","variant","size","active","className","block","type","as"]),m=Object(c.a)(r,"btn"),y=o()(f,m,l&&"active",n&&m+"-"+n,h&&m+"-block",s&&m+"-"+s);if(b.href)return u.a.createElement(v.a,Object(a.a)({},b,{as:d,ref:e,className:o()(y,b.disabled&&"disabled")}));e&&(b.ref=e),p?b.type=p:d||(b.type="button");var g=d||"button";return u.a.createElement(g,Object(a.a)({},b,{className:y}))}));l.displayName="Button",l.defaultProps={variant:"primary",active:!1,disabled:!1},e.a=l},6234:function(t,e,r){"use strict";var a=r(6235);t.exports=a},6235:function(t,e,r){"use strict";var a=r(678);t.exports=function(t,e,r){a(t,e,{configurable:!0,enumerable:!1,writable:!0,value:r})}},897:function(t,e,r){r(952)("Float64",8,(function(t){return function(e,r,a){return t(this,e,r,a)}}))}}]);