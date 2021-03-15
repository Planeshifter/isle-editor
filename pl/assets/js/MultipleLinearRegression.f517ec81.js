(window.webpackJsonp=window.webpackJsonp||[]).push([[756],{1074:function(t,e,r){"use strict";var s=r(636),i=r.n(s),a=r(429);e.a=function(t,e){var r=i()(e);if(!i()(t))throw new TypeError("invalid input argument. Must provide an array. Value: `"+t+"`.");if(!r&&!Object(a.isPrimitive)(e))throw new TypeError("invalid input argument. Second argument must either be an array or number primitive. Value: `"+e+"`.");var s=t.length,n=new Array(s);if(r){if(s!==e.length)throw new Error("invalid input argument. Array to be added must have a length equal to that of the input array.");for(var o=0;o<s;o++)n[o]=t[o]-e[o]}else for(var l=0;l<s;l++)n[l]=t[l]-e;return n}},1075:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var s=r(898);class i extends s.a{constructor(t){super(),this.data=t,this.rows=t.length,this.columns=t[0].length}set(t,e,r){return this.data[t][e]=r,this}get(t,e){return this.data[t][e]}}},1442:function(t,e,r){"use strict";function s(t,e){let r=0;return Math.abs(t)>Math.abs(e)?(r=e/t,Math.abs(t)*Math.sqrt(1+r*r)):0!==e?(r=t/e,Math.abs(e)*Math.sqrt(1+r*r)):0}r.d(e,"a",(function(){return s}))},2796:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var s=r(898),i=r(1075),a=r(1442);class n{constructor(t,e={}){if((t=i.a.checkMatrix(t)).isEmpty())throw new Error("Matrix must be non-empty");let r=t.rows,n=t.columns;const{computeLeftSingularVectors:o=!0,computeRightSingularVectors:l=!0,autoTranspose:u=!1}=e;let c,h=Boolean(o),f=Boolean(l),d=!1;if(r<n)if(u){c=t.transpose(),r=c.rows,n=c.columns,d=!0;let e=h;h=f,f=e}else c=t.clone(),console.warn("Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose");else c=t.clone();let p=Math.min(r,n),g=Math.min(r+1,n),m=new Float64Array(g),v=new s.b(r,p),b=new s.b(n,n),y=new Float64Array(n),w=new Float64Array(r),M=new Float64Array(g);for(let s=0;s<g;s++)M[s]=s;let x=Math.min(r-1,n),O=Math.max(0,Math.min(n-2,r)),j=Math.max(x,O);for(let s=0;s<j;s++){if(s<x){m[s]=0;for(let t=s;t<r;t++)m[s]=Object(a.a)(m[s],c.get(t,s));if(0!==m[s]){c.get(s,s)<0&&(m[s]=-m[s]);for(let t=s;t<r;t++)c.set(t,s,c.get(t,s)/m[s]);c.set(s,s,c.get(s,s)+1)}m[s]=-m[s]}for(let t=s+1;t<n;t++){if(s<x&&0!==m[s]){let e=0;for(let i=s;i<r;i++)e+=c.get(i,s)*c.get(i,t);e=-e/c.get(s,s);for(let i=s;i<r;i++)c.set(i,t,c.get(i,t)+e*c.get(i,s))}y[t]=c.get(s,t)}if(h&&s<x)for(let t=s;t<r;t++)v.set(t,s,c.get(t,s));if(s<O){y[s]=0;for(let t=s+1;t<n;t++)y[s]=Object(a.a)(y[s],y[t]);if(0!==y[s]){y[s+1]<0&&(y[s]=0-y[s]);for(let t=s+1;t<n;t++)y[t]/=y[s];y[s+1]+=1}if(y[s]=-y[s],s+1<r&&0!==y[s]){for(let t=s+1;t<r;t++)w[t]=0;for(let t=s+1;t<r;t++)for(let e=s+1;e<n;e++)w[t]+=y[e]*c.get(t,e);for(let t=s+1;t<n;t++){let e=-y[t]/y[s+1];for(let i=s+1;i<r;i++)c.set(i,t,c.get(i,t)+e*w[i])}}if(f)for(let t=s+1;t<n;t++)b.set(t,s,y[t])}}let E=Math.min(n,r+1);if(x<n&&(m[x]=c.get(x,x)),r<E&&(m[E-1]=0),O+1<E&&(y[O]=c.get(O,E-1)),y[E-1]=0,h){for(let t=x;t<p;t++){for(let e=0;e<r;e++)v.set(e,t,0);v.set(t,t,1)}for(let t=x-1;t>=0;t--)if(0!==m[t]){for(let e=t+1;e<p;e++){let s=0;for(let i=t;i<r;i++)s+=v.get(i,t)*v.get(i,e);s=-s/v.get(t,t);for(let i=t;i<r;i++)v.set(i,e,v.get(i,e)+s*v.get(i,t))}for(let e=t;e<r;e++)v.set(e,t,-v.get(e,t));v.set(t,t,1+v.get(t,t));for(let e=0;e<t-1;e++)v.set(e,t,0)}else{for(let e=0;e<r;e++)v.set(e,t,0);v.set(t,t,1)}}if(f)for(let s=n-1;s>=0;s--){if(s<O&&0!==y[s])for(let t=s+1;t<n;t++){let e=0;for(let r=s+1;r<n;r++)e+=b.get(r,s)*b.get(r,t);e=-e/b.get(s+1,s);for(let r=s+1;r<n;r++)b.set(r,t,b.get(r,t)+e*b.get(r,s))}for(let t=0;t<n;t++)b.set(t,s,0);b.set(s,s,1)}let S=E-1,P=0,N=Number.EPSILON;for(;E>0;){let t,e;for(t=E-2;t>=-1&&-1!==t;t--){const e=Number.MIN_VALUE+N*Math.abs(m[t]+Math.abs(m[t+1]));if(Math.abs(y[t])<=e||Number.isNaN(y[t])){y[t]=0;break}}if(t===E-2)e=4;else{let r;for(r=E-1;r>=t&&r!==t;r--){let e=(r!==E?Math.abs(y[r]):0)+(r!==t+1?Math.abs(y[r-1]):0);if(Math.abs(m[r])<=N*e){m[r]=0;break}}r===t?e=3:r===E-1?e=1:(e=2,t=r)}switch(t++,e){case 1:{let e=y[E-2];y[E-2]=0;for(let r=E-2;r>=t;r--){let s=Object(a.a)(m[r],e),i=m[r]/s,o=e/s;if(m[r]=s,r!==t&&(e=-o*y[r-1],y[r-1]=i*y[r-1]),f)for(let t=0;t<n;t++)s=i*b.get(t,r)+o*b.get(t,E-1),b.set(t,E-1,-o*b.get(t,r)+i*b.get(t,E-1)),b.set(t,r,s)}break}case 2:{let e=y[t-1];y[t-1]=0;for(let s=t;s<E;s++){let i=Object(a.a)(m[s],e),n=m[s]/i,o=e/i;if(m[s]=i,e=-o*y[s],y[s]=n*y[s],h)for(let e=0;e<r;e++)i=n*v.get(e,s)+o*v.get(e,t-1),v.set(e,t-1,-o*v.get(e,s)+n*v.get(e,t-1)),v.set(e,s,i)}break}case 3:{const e=Math.max(Math.abs(m[E-1]),Math.abs(m[E-2]),Math.abs(y[E-2]),Math.abs(m[t]),Math.abs(y[t])),s=m[E-1]/e,i=m[E-2]/e,o=y[E-2]/e,l=m[t]/e,u=y[t]/e,c=((i+s)*(i-s)+o*o)/2,d=s*o*(s*o);let p=0;0===c&&0===d||(p=c<0?0-Math.sqrt(c*c+d):Math.sqrt(c*c+d),p=d/(c+p));let g=(l+s)*(l-s)+p,w=l*u;for(let M=t;M<E-1;M++){let e=Object(a.a)(g,w);0===e&&(e=Number.MIN_VALUE);let s=g/e,i=w/e;if(M!==t&&(y[M-1]=e),g=s*m[M]+i*y[M],y[M]=s*y[M]-i*m[M],w=i*m[M+1],m[M+1]=s*m[M+1],f)for(let t=0;t<n;t++)e=s*b.get(t,M)+i*b.get(t,M+1),b.set(t,M+1,-i*b.get(t,M)+s*b.get(t,M+1)),b.set(t,M,e);if(e=Object(a.a)(g,w),0===e&&(e=Number.MIN_VALUE),s=g/e,i=w/e,m[M]=e,g=s*y[M]+i*m[M+1],m[M+1]=-i*y[M]+s*m[M+1],w=i*y[M+1],y[M+1]=s*y[M+1],h&&M<r-1)for(let t=0;t<r;t++)e=s*v.get(t,M)+i*v.get(t,M+1),v.set(t,M+1,-i*v.get(t,M)+s*v.get(t,M+1)),v.set(t,M,e)}y[E-2]=g,P+=1;break}case 4:if(m[t]<=0&&(m[t]=m[t]<0?-m[t]:0,f))for(let e=0;e<=S;e++)b.set(e,t,-b.get(e,t));for(;t<S&&!(m[t]>=m[t+1]);){let e=m[t];if(m[t]=m[t+1],m[t+1]=e,f&&t<n-1)for(let r=0;r<n;r++)e=b.get(r,t+1),b.set(r,t+1,b.get(r,t)),b.set(r,t,e);if(h&&t<r-1)for(let s=0;s<r;s++)e=v.get(s,t+1),v.set(s,t+1,v.get(s,t)),v.set(s,t,e);t++}P=0,E--}}if(d){let t=b;b=v,v=t}this.m=r,this.n=n,this.s=m,this.U=v,this.V=b}solve(t){let e=t,r=this.threshold,i=this.s.length,a=s.b.zeros(i,i);for(let s=0;s<i;s++)Math.abs(this.s[s])<=r?a.set(s,s,0):a.set(s,s,1/this.s[s]);let n=this.U,o=this.rightSingularVectors,l=o.mmul(a),u=o.rows,c=n.rows,h=s.b.zeros(u,c);for(let s=0;s<u;s++)for(let t=0;t<c;t++){let e=0;for(let r=0;r<i;r++)e+=l.get(s,r)*n.get(t,r);h.set(s,t,e)}return h.mmul(e)}solveForDiagonal(t){return this.solve(s.b.diag(t))}inverse(){let t=this.V,e=this.threshold,r=t.rows,i=t.columns,a=new s.b(r,this.s.length);for(let s=0;s<r;s++)for(let r=0;r<i;r++)Math.abs(this.s[r])>e&&a.set(s,r,t.get(s,r)/this.s[r]);let n=this.U,o=n.rows,l=n.columns,u=new s.b(r,o);for(let s=0;s<r;s++)for(let t=0;t<o;t++){let e=0;for(let r=0;r<l;r++)e+=a.get(s,r)*n.get(t,r);u.set(s,t,e)}return u}get condition(){return this.s[0]/this.s[Math.min(this.m,this.n)-1]}get norm2(){return this.s[0]}get rank(){let t=Math.max(this.m,this.n)*this.s[0]*Number.EPSILON,e=0,r=this.s;for(let s=0,i=r.length;s<i;s++)r[s]>t&&e++;return e}get diagonal(){return Array.from(this.s)}get threshold(){return Number.EPSILON/2*Math.max(this.m,this.n)*this.s[0]}get leftSingularVectors(){return this.U}get rightSingularVectors(){return this.V}get diagonalMatrix(){return s.b.diag(this.s)}}},4023:function(t,e,r){"use strict";r.r(e);r(420),r(437),r(434),r(469),r(478),r(438);var s=r(493),i=r.n(s),a=r(414),n=r.n(a),o=r(415),l=r.n(o),u=r(424),c=r.n(u),h=r(417),f=r.n(h),d=r(418),p=r.n(d),g=r(416),m=r.n(g),v=r(412),b=r.n(v),y=r(407),w=r.n(y),M=(r(458),r(0)),x=r.n(M),O=(r(404),r(4096)),j=r(898),E=r(2796);class S{constructor(t,e,r={}){const{intercept:s=!0,statistics:i=!0}=r;if(this.statistics=i,!0===t)this.weights=e.weights,this.inputs=e.inputs,this.outputs=e.outputs,this.intercept=e.intercept;else{t=new j.b(t),e=new j.b(e),s&&t.addColumn(new Array(t.rows).fill(1));let r=t.transpose();const a=r.mmul(t),n=r.mmul(e),o=new E.a(a).inverse(),l=n.transpose().mmul(o).transpose();if(this.weights=l.to2DArray(),this.inputs=t.columns,this.outputs=e.columns,s&&this.inputs--,this.intercept=s,i){const r=t.mmul(l),s=e.clone().addM(r.neg()).to2DArray().map((t=>Math.pow(t[0],2))).reduce(((t,e)=>t+e))/(e.rows-t.columns);this.stdError=Math.sqrt(s),this.stdErrorMatrix=function(t,e=Number.EPSILON){if((t=j.b.checkMatrix(t)).isEmpty())return t.transpose();let r=new E.a(t,{autoTranspose:!0}),s=r.leftSingularVectors,i=r.rightSingularVectors,a=r.diagonal;for(let n=0;n<a.length;n++)Math.abs(a[n])>e?a[n]=1/a[n]:a[n]=0;return i.mmul(j.b.diag(a).mmul(s.transpose()))}(a).mul(s),this.stdErrors=this.stdErrorMatrix.diagonal().map((t=>Math.sqrt(t))),this.tStats=this.weights.map(((t,e)=>0===this.stdErrors[e]?0:t[0]/this.stdErrors[e]))}}}predict(t){if(Array.isArray(t)){if("number"==typeof t[0])return this._predict(t);if(Array.isArray(t[0])){const e=new Array(t.length);for(let r=0;r<t.length;r++)e[r]=this._predict(t[r]);return e}}else if(j.b.isMatrix(t)){const e=new j.b(t.rows,this.outputs);for(let r=0;r<t.rows;r++)e.setRow(r,this._predict(t.getRow(r)));return e}throw new TypeError("x must be a matrix or array of numbers")}_predict(t){const e=new Array(this.outputs);if(this.intercept)for(let r=0;r<this.outputs;r++)e[r]=this.weights[this.inputs][r];else e.fill(0);for(let r=0;r<this.inputs;r++)for(let s=0;s<this.outputs;s++)e[s]+=this.weights[r][s]*t[r];return e}score(){throw new Error("score method is not implemented yet")}toJSON(){return{name:"multivariateLinearRegression",weights:this.weights,inputs:this.inputs,outputs:this.outputs,intercept:this.intercept,summary:this.statistics?{regressionStatistics:{standardError:this.stdError,observations:this.outputs},variables:this.weights.map(((t,e)=>({label:e===this.weights.length-1?"Intercept":`X Variable ${e+1}`,coefficients:t,standardError:this.stdErrors[e],tStat:this.tStats[e]})))}:void 0}}static load(t){if("multivariateLinearRegression"!==t.name)throw new Error("not a MLR model");return new S(!0,t)}}var P=r(454),N=r(422),q=r(440),k=r.n(q),A=r(537),F=r.n(A),V=r(1396),R=r.n(V),D=r(473),L=r.n(D),_=r(443),I=r.n(_),z=r(429),U=r(588),C=r.n(U),T=r(455),B=r.n(T),J=r(430),X=r.n(J),$=r(819),G=r.n($),H=r(682),K=r(484),Q=r(505),W=r(1030),Y=r(1074),Z=r(582),tt=r(926),et=r(421),rt=r(439);r(496);function st(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function it(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?st(Object(r),!0).forEach((function(e){b()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):st(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function at(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,s=m()(t);if(e){var i=m()(this).constructor;r=Reflect.construct(s,arguments,i)}else r=s.apply(this,arguments);return p()(this,r)}}Object(et.a)("StatisticalModels");var nt=0;function ot(t){return B()(t)||C()(t)}function lt(t){return Object(z.isPrimitive)(t)&&!B()(t)}function ut(t,e,r,s,i){I()(t)||(t=[t]);for(var a=[],n=[],o={},l=r[t[0]].length,u=0;u<t.length;u++){var c=r[t[u]];if(L()(s,t[u]))n.push(t[u]);else{for(var h=Object(tt.a)(c,t[u]),f=i?1:0;f<h.length;f++)n.push("".concat(t[u],"_").concat(h[f]));o[t[u]]=h}}for(var d=0;d<l;d++){for(var p=[],g=0;g<t.length;g++){var m=r[t[g]];if(L()(s,t[g]))p.push(m[d]);else for(var v=o[t[g]],b=m[d],y=i?1:0;y<v.length;y++)p.push(b===v[y]?1:0)}a.push(p)}return{matrix:a,predictors:n,yvalues:r[e].map((function(t){return[t]})),nobs:l}}function ct(t,e,r,s,i){I()(t)||(t=[t]);for(var a=[],n=[],o={},l=[],u=0;u<t.length;u++){var c=r[t[u]];if(L()(s,t[u]))n.push(t[u]);else{for(var h=Object(tt.a)(c,t[u]),f=i?1:0;f<h.length;f++)n.push("".concat(t[u],"_").concat(h[f]));o[t[u]]=h}}for(var d=0;d<r[t[0]].length;d++){for(var p=[],g=!1,m=0;m<t.length;m++){var v=r[t[m]];if(L()(s,t[m])){if(!lt(v[d])){g=!0;break}p.push(v[d])}else{var b=v[d];if(ot(b)){g=!0;break}for(var y=o[t[m]],w=i?1:0;w<y.length;w++)p.push(b===y[w]?1:0)}}g||(a.push(p),l.push([r[e][d]]))}return{matrix:a,predictors:n,yvalues:l,nobs:l.length}}var ht=w()("th",{},void 0,"t"),ft=function(t){var e=t.x,r=t.y,s=t.intercept,i=t.omitMissing,a=t.data,n=t.quantitative,o={};try{var l=(i?ct:ut)(e,r,a,n,s),u=l.matrix,c=l.predictors,h=l.yvalues,f=l.nobs;o.result=new S(u,h,{intercept:s});var d=o.result.predict(u).map((function(t){return t[0]}));o.yhat=d;for(var p=Object(Z.a)(d),g=0,m=0;m<d.length;m++)g+=k()(d[m]-p,2);for(var v=Object(Y.a)(h,d),b=0,y=0;y<v.length;y++)b+=k()(v[y],2);var w=c.length;return o.resid=v,o.rSquared=g/(g+b),o.adjRSquared=1-(1-o.rSquared)*(f-1)/(f-w-1),o.fScore=g/w/(b/(f-w-1)),o.p=w,o.nobs=f,o.predictors=c,o}catch(M){return o}},dt=function(t){f()(r,t);var e=at(r);function r(t){var s;n()(this,r),s=e.call(this,t),b()(c()(s),"handleDiagnostics",(function(){var t=s.props,e=t.x,r=t.y,a=t.intercept,n=t.t,o=x.a.createElement(Q.a,i()({draggable:!0,editable:!0,fit:!0},Object(W.b)(s.state.resid,"residuals"),{meta:{type:"qqplot of regression residuals",x:e,y:r,intercept:a}})),l=w()(Q.a,{draggable:!0,editable:!0,fit:!0,data:[{x:s.state.yhat,y:s.state.resid,mode:"markers",type:s.state.yhat.length>2e3?"scattergl":"scatter"}],layout:{xaxis:{title:n("fitted-values")},yaxis:{title:n("residuals")},title:n("residuals-vs-fitted")},meta:{type:"regression residuals vs. fitted",x:e,y:r,intercept:a}});s.props.onDiagnostics([o,l])})),b()(c()(s),"handlePredict",(function(){var t=s.props,e=t.data,r=t.quantitative,i=t.intercept,a=s.props,n=a.x,o=a.y,l=ut(n,o,e,r,i).matrix,u=s.state.result.predict(l).map((function(t){return t[0]})),c=Object(Y.a)(e[o],u);s.props.onPredict(u,c,nt)})),nt+=1;var a=t.x,o=t.y,l=t.intercept,u=t.omitMissing,h=t.data,f=t.quantitative;return s.state=it(it({},ft({x:a,y:o,intercept:l,omitMissing:u,data:h,quantitative:f})),t),s}return l()(r,[{key:"render",value:function(){var t=this.state,e=t.y,r=t.predictors,s=t.nobs,i=t.result,a=t.adjRSquared,n=t.p,o=t.fScore,l=t.rSquared,u=this.props.t;return i?w()("div",{style:{overflowX:"auto",width:"100%"}},void 0,w()("span",{className:"title"},void 0,u("multiple-regression-title",{y:e,counter:nt})),function(t,e,r,s,i){var a=G.a.factory(r-e.length-1);return w()(H.a,{bordered:!0,size:"sm"},void 0,w()("thead",{},void 0,w()("tr",{},void 0,w()("th",{},void 0,i("predictor")),w()("th",{},void 0,i("coefficient")),w()("th",{},void 0,i("std-error")),ht,w()("th",{},void 0,i("p-value")))),w()("tbody",{},void 0,s.intercept?w()("tr",{},void 0,w()("th",{},void 0,i("intercept")),w()("td",{},void 0,s.weights[e.length][0].toFixed(6)),w()("td",{},void 0,s.stdErrors[e.length].toFixed(4)),w()("td",{},void 0,s.tStats[e.length].toFixed(4)),w()("td",{},void 0,2*(1-a(X()(s.tStats[e.length]))).toFixed(4))):null,e.map((function(t,e){return w()("tr",{},e,w()("th",{},void 0,t),w()("td",{},void 0,s.weights[e][0].toFixed(6)),w()("td",{},void 0,s.stdErrors[e].toFixed(4)),w()("td",{},void 0,s.tStats[e].toFixed(4)),w()("td",{},void 0,2*(1-a(X()(s.tStats[e]))).toFixed(4)))}))))}(0,r,s,i,u),w()("p",{},void 0,u("residual-standard-error"),": ",F()(i.stdError)),w()("p",{},void 0,"R\xb2:"," ",l.toFixed(6),", ",u("adjusted")," ","R\xb2:"," ",a.toFixed(6)),w()("p",{},void 0,u("f-statistic"),": ",o.toFixed(3)," ($","df",": ",s-n-1,", ",n,"), ",u("p-value"),": ",(1-R()(o,n,s-n-1)).toFixed(6)),this.props.onPredict?w()(K.a,{placement:"top",tooltip:u("use-model-to-predict-tooltip")},void 0,w()(N.a,{variant:"secondary",size:"sm",onClick:this.handlePredict},void 0,u("use-model-to-predict"))):null,this.props.onDiagnostics?w()(N.a,{variant:"secondary",size:"sm",style:{marginLeft:6},onClick:this.handleDiagnostics},void 0,u("model-diagnostics")):null):w()(P.a,{variant:"danger"},void 0,this.props.t("missing-attributes"))}}],[{key:"getDerivedStateFromProps",value:function(t,e){if(t.data!==e.data||t.quantitative!==e.quantitative||t.x!==e.x||t.y!==e.y||t.omitMissing!==e.omitMissing||t.intercept!==e.intercept){var r=t.x,s=t.y,i=t.intercept,a=t.omitMissing,n=t.data,o=t.quantitative;return it(it({},ft({x:r,y:s,intercept:i,omitMissing:a,data:n,quantitative:o})),t)}return null}}]),r}(M.Component);dt.defaultProps={omitMissing:!1,intercept:!0,onDiagnostics:null,onPredict:null};e.default=Object(O.a)("StatisticalModels")(Object(rt.a)(dt))},422:function(t,e,r){"use strict";var s=r(406),i=r(408),a=r(409),n=r.n(a),o=r(0),l=r.n(o),u=r(411),c=r(470),h=l.a.forwardRef((function(t,e){var r=t.bsPrefix,a=t.variant,o=t.size,h=t.active,f=t.className,d=t.block,p=t.type,g=t.as,m=Object(i.a)(t,["bsPrefix","variant","size","active","className","block","type","as"]),v=Object(u.a)(r,"btn"),b=n()(f,v,h&&"active",a&&v+"-"+a,d&&v+"-block",o&&v+"-"+o);if(m.href)return l.a.createElement(c.a,Object(s.a)({},m,{as:g,ref:e,className:n()(b,m.disabled&&"disabled")}));e&&(m.ref=e),p?m.type=p:g||(m.type="button");var y=g||"button";return l.a.createElement(y,Object(s.a)({},m,{className:b}))}));h.displayName="Button",h.defaultProps={variant:"primary",active:!1,disabled:!1},e.a=h}}]);