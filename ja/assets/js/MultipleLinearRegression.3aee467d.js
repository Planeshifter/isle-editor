(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{1222:function(t,e,r){"use strict";var s=r(741),i=r.n(s),a=r(427);e.a=function(t,e){var r=i()(e);if(!i()(t))throw new TypeError("invalid input argument. Must provide an array. Value: `"+t+"`.");if(!r&&!Object(a.isPrimitive)(e))throw new TypeError("invalid input argument. Second argument must either be an array or number primitive. Value: `"+e+"`.");var s=t.length,n=new Array(s);if(r){if(s!==e.length)throw new Error("invalid input argument. Array to be added must have a length equal to that of the input array.");for(var o=0;o<s;o++)n[o]=t[o]-e[o]}else for(var l=0;l<s;l++)n[l]=t[l]-e;return n}},1223:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var s=r(1061);class i extends s.a{constructor(t){super(),this.data=t,this.rows=t.length,this.columns=t[0].length}set(t,e,r){return this.data[t][e]=r,this}get(t,e){return this.data[t][e]}}},1652:function(t,e,r){"use strict";function s(t,e){let r=0;return Math.abs(t)>Math.abs(e)?(r=e/t,Math.abs(t)*Math.sqrt(1+r*r)):0!==e?(r=t/e,Math.abs(e)*Math.sqrt(1+r*r)):0}r.d(e,"a",(function(){return s}))},2878:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var s=r(1061),i=r(1223),a=r(1652);class n{constructor(t,e={}){if((t=i.a.checkMatrix(t)).isEmpty())throw new Error("Matrix must be non-empty");let r=t.rows,n=t.columns;const{computeLeftSingularVectors:o=!0,computeRightSingularVectors:l=!0,autoTranspose:u=!1}=e;let h,c=Boolean(o),f=Boolean(l),d=!1;if(r<n)if(u){h=t.transpose(),r=h.rows,n=h.columns,d=!0;let e=c;c=f,f=e}else h=t.clone(),console.warn("Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose");else h=t.clone();let g=Math.min(r,n),p=Math.min(r+1,n),m=new Float64Array(p),v=new s.b(r,g),b=new s.b(n,n),y=new Float64Array(n),w=new Float64Array(r),M=new Float64Array(p);for(let s=0;s<p;s++)M[s]=s;let x=Math.min(r-1,n),O=Math.max(0,Math.min(n-2,r)),S=Math.max(x,O);for(let s=0;s<S;s++){if(s<x){m[s]=0;for(let t=s;t<r;t++)m[s]=Object(a.a)(m[s],h.get(t,s));if(0!==m[s]){h.get(s,s)<0&&(m[s]=-m[s]);for(let t=s;t<r;t++)h.set(t,s,h.get(t,s)/m[s]);h.set(s,s,h.get(s,s)+1)}m[s]=-m[s]}for(let t=s+1;t<n;t++){if(s<x&&0!==m[s]){let e=0;for(let i=s;i<r;i++)e+=h.get(i,s)*h.get(i,t);e=-e/h.get(s,s);for(let i=s;i<r;i++)h.set(i,t,h.get(i,t)+e*h.get(i,s))}y[t]=h.get(s,t)}if(c&&s<x)for(let t=s;t<r;t++)v.set(t,s,h.get(t,s));if(s<O){y[s]=0;for(let t=s+1;t<n;t++)y[s]=Object(a.a)(y[s],y[t]);if(0!==y[s]){y[s+1]<0&&(y[s]=0-y[s]);for(let t=s+1;t<n;t++)y[t]/=y[s];y[s+1]+=1}if(y[s]=-y[s],s+1<r&&0!==y[s]){for(let t=s+1;t<r;t++)w[t]=0;for(let t=s+1;t<r;t++)for(let e=s+1;e<n;e++)w[t]+=y[e]*h.get(t,e);for(let t=s+1;t<n;t++){let e=-y[t]/y[s+1];for(let i=s+1;i<r;i++)h.set(i,t,h.get(i,t)+e*w[i])}}if(f)for(let t=s+1;t<n;t++)b.set(t,s,y[t])}}let E=Math.min(n,r+1);if(x<n&&(m[x]=h.get(x,x)),r<E&&(m[E-1]=0),O+1<E&&(y[O]=h.get(O,E-1)),y[E-1]=0,c){for(let t=x;t<g;t++){for(let e=0;e<r;e++)v.set(e,t,0);v.set(t,t,1)}for(let t=x-1;t>=0;t--)if(0!==m[t]){for(let e=t+1;e<g;e++){let s=0;for(let i=t;i<r;i++)s+=v.get(i,t)*v.get(i,e);s=-s/v.get(t,t);for(let i=t;i<r;i++)v.set(i,e,v.get(i,e)+s*v.get(i,t))}for(let e=t;e<r;e++)v.set(e,t,-v.get(e,t));v.set(t,t,1+v.get(t,t));for(let e=0;e<t-1;e++)v.set(e,t,0)}else{for(let e=0;e<r;e++)v.set(e,t,0);v.set(t,t,1)}}if(f)for(let s=n-1;s>=0;s--){if(s<O&&0!==y[s])for(let t=s+1;t<n;t++){let e=0;for(let r=s+1;r<n;r++)e+=b.get(r,s)*b.get(r,t);e=-e/b.get(s+1,s);for(let r=s+1;r<n;r++)b.set(r,t,b.get(r,t)+e*b.get(r,s))}for(let t=0;t<n;t++)b.set(t,s,0);b.set(s,s,1)}let j=E-1,q=0,P=Number.EPSILON;for(;E>0;){let t,e;for(t=E-2;t>=-1&&-1!==t;t--){const e=Number.MIN_VALUE+P*Math.abs(m[t]+Math.abs(m[t+1]));if(Math.abs(y[t])<=e||Number.isNaN(y[t])){y[t]=0;break}}if(t===E-2)e=4;else{let r;for(r=E-1;r>=t&&r!==t;r--){let e=(r!==E?Math.abs(y[r]):0)+(r!==t+1?Math.abs(y[r-1]):0);if(Math.abs(m[r])<=P*e){m[r]=0;break}}r===t?e=3:r===E-1?e=1:(e=2,t=r)}switch(t++,e){case 1:{let e=y[E-2];y[E-2]=0;for(let r=E-2;r>=t;r--){let s=Object(a.a)(m[r],e),i=m[r]/s,o=e/s;if(m[r]=s,r!==t&&(e=-o*y[r-1],y[r-1]=i*y[r-1]),f)for(let t=0;t<n;t++)s=i*b.get(t,r)+o*b.get(t,E-1),b.set(t,E-1,-o*b.get(t,r)+i*b.get(t,E-1)),b.set(t,r,s)}break}case 2:{let e=y[t-1];y[t-1]=0;for(let s=t;s<E;s++){let i=Object(a.a)(m[s],e),n=m[s]/i,o=e/i;if(m[s]=i,e=-o*y[s],y[s]=n*y[s],c)for(let e=0;e<r;e++)i=n*v.get(e,s)+o*v.get(e,t-1),v.set(e,t-1,-o*v.get(e,s)+n*v.get(e,t-1)),v.set(e,s,i)}break}case 3:{const e=Math.max(Math.abs(m[E-1]),Math.abs(m[E-2]),Math.abs(y[E-2]),Math.abs(m[t]),Math.abs(y[t])),s=m[E-1]/e,i=m[E-2]/e,o=y[E-2]/e,l=m[t]/e,u=y[t]/e,h=((i+s)*(i-s)+o*o)/2,d=s*o*(s*o);let g=0;0===h&&0===d||(g=h<0?0-Math.sqrt(h*h+d):Math.sqrt(h*h+d),g=d/(h+g));let p=(l+s)*(l-s)+g,w=l*u;for(let M=t;M<E-1;M++){let e=Object(a.a)(p,w);0===e&&(e=Number.MIN_VALUE);let s=p/e,i=w/e;if(M!==t&&(y[M-1]=e),p=s*m[M]+i*y[M],y[M]=s*y[M]-i*m[M],w=i*m[M+1],m[M+1]=s*m[M+1],f)for(let t=0;t<n;t++)e=s*b.get(t,M)+i*b.get(t,M+1),b.set(t,M+1,-i*b.get(t,M)+s*b.get(t,M+1)),b.set(t,M,e);if(e=Object(a.a)(p,w),0===e&&(e=Number.MIN_VALUE),s=p/e,i=w/e,m[M]=e,p=s*y[M]+i*m[M+1],m[M+1]=-i*y[M]+s*m[M+1],w=i*y[M+1],y[M+1]=s*y[M+1],c&&M<r-1)for(let t=0;t<r;t++)e=s*v.get(t,M)+i*v.get(t,M+1),v.set(t,M+1,-i*v.get(t,M)+s*v.get(t,M+1)),v.set(t,M,e)}y[E-2]=p,q+=1;break}case 4:if(m[t]<=0&&(m[t]=m[t]<0?-m[t]:0,f))for(let e=0;e<=j;e++)b.set(e,t,-b.get(e,t));for(;t<j&&!(m[t]>=m[t+1]);){let e=m[t];if(m[t]=m[t+1],m[t+1]=e,f&&t<n-1)for(let r=0;r<n;r++)e=b.get(r,t+1),b.set(r,t+1,b.get(r,t)),b.set(r,t,e);if(c&&t<r-1)for(let s=0;s<r;s++)e=v.get(s,t+1),v.set(s,t+1,v.get(s,t)),v.set(s,t,e);t++}q=0,E--}}if(d){let t=b;b=v,v=t}this.m=r,this.n=n,this.s=m,this.U=v,this.V=b}solve(t){let e=t,r=this.threshold,i=this.s.length,a=s.b.zeros(i,i);for(let s=0;s<i;s++)Math.abs(this.s[s])<=r?a.set(s,s,0):a.set(s,s,1/this.s[s]);let n=this.U,o=this.rightSingularVectors,l=o.mmul(a),u=o.rows,h=n.rows,c=s.b.zeros(u,h);for(let s=0;s<u;s++)for(let t=0;t<h;t++){let e=0;for(let r=0;r<i;r++)e+=l.get(s,r)*n.get(t,r);c.set(s,t,e)}return c.mmul(e)}solveForDiagonal(t){return this.solve(s.b.diag(t))}inverse(){let t=this.V,e=this.threshold,r=t.rows,i=t.columns,a=new s.b(r,this.s.length);for(let s=0;s<r;s++)for(let r=0;r<i;r++)Math.abs(this.s[r])>e&&a.set(s,r,t.get(s,r)/this.s[r]);let n=this.U,o=n.rows,l=n.columns,u=new s.b(r,o);for(let s=0;s<r;s++)for(let t=0;t<o;t++){let e=0;for(let r=0;r<l;r++)e+=a.get(s,r)*n.get(t,r);u.set(s,t,e)}return u}get condition(){return this.s[0]/this.s[Math.min(this.m,this.n)-1]}get norm2(){return this.s[0]}get rank(){let t=Math.max(this.m,this.n)*this.s[0]*Number.EPSILON,e=0,r=this.s;for(let s=0,i=r.length;s<i;s++)r[s]>t&&e++;return e}get diagonal(){return Array.from(this.s)}get threshold(){return Number.EPSILON/2*Math.max(this.m,this.n)*this.s[0]}get leftSingularVectors(){return this.U}get rightSingularVectors(){return this.V}get diagonalMatrix(){return s.b.diag(this.s)}}},4101:function(t,e,r){"use strict";r.r(e);r(437),r(433),r(425),r(424),r(434),r(411),r(403),r(415);var s=r(507),i=r.n(s),a=r(407),n=r.n(a),o=r(410),l=r.n(o),u=r(420),h=r.n(u),c=r(413),f=r.n(c),d=r(414),g=r.n(d),p=r(412),m=r.n(p),v=r(404),b=r.n(v),y=r(400),w=r.n(y),M=r(0),x=r.n(M),O=(r(396),r(4125)),S=r(1061),E=r(2878);class j{constructor(t,e,r={}){const{intercept:s=!0,statistics:i=!0}=r;if(this.statistics=i,!0===t)this.weights=e.weights,this.inputs=e.inputs,this.outputs=e.outputs,this.intercept=e.intercept;else{t=new S.b(t),e=new S.b(e),s&&t.addColumn(new Array(t.rows).fill(1));let r=t.transpose();const a=r.mmul(t),n=r.mmul(e),o=new E.a(a).inverse(),l=n.transpose().mmul(o).transpose();if(this.weights=l.to2DArray(),this.inputs=t.columns,this.outputs=e.columns,s&&this.inputs--,this.intercept=s,i){const r=t.mmul(l),s=e.clone().addM(r.neg()).to2DArray().map((t=>Math.pow(t[0],2))).reduce(((t,e)=>t+e))/(e.rows-t.columns);this.stdError=Math.sqrt(s),this.stdErrorMatrix=function(t,e=Number.EPSILON){if((t=S.b.checkMatrix(t)).isEmpty())return t.transpose();let r=new E.a(t,{autoTranspose:!0}),s=r.leftSingularVectors,i=r.rightSingularVectors,a=r.diagonal;for(let n=0;n<a.length;n++)Math.abs(a[n])>e?a[n]=1/a[n]:a[n]=0;return i.mmul(S.b.diag(a).mmul(s.transpose()))}(a).mul(s),this.stdErrors=this.stdErrorMatrix.diagonal().map((t=>Math.sqrt(t))),this.tStats=this.weights.map(((t,e)=>0===this.stdErrors[e]?0:t[0]/this.stdErrors[e]))}}}predict(t){if(Array.isArray(t)){if("number"==typeof t[0])return this._predict(t);if(Array.isArray(t[0])){const e=new Array(t.length);for(let r=0;r<t.length;r++)e[r]=this._predict(t[r]);return e}}else if(S.b.isMatrix(t)){const e=new S.b(t.rows,this.outputs);for(let r=0;r<t.rows;r++)e.setRow(r,this._predict(t.getRow(r)));return e}throw new TypeError("x must be a matrix or array of numbers")}_predict(t){const e=new Array(this.outputs);if(this.intercept)for(let r=0;r<this.outputs;r++)e[r]=this.weights[this.inputs][r];else e.fill(0);for(let r=0;r<this.inputs;r++)for(let s=0;s<this.outputs;s++)e[s]+=this.weights[r][s]*t[r];return e}score(){throw new Error("score method is not implemented yet")}toJSON(){return{name:"multivariateLinearRegression",weights:this.weights,inputs:this.inputs,outputs:this.outputs,intercept:this.intercept,summary:this.statistics?{regressionStatistics:{standardError:this.stdError,observations:this.outputs},variables:this.weights.map(((t,e)=>({label:e===this.weights.length-1?"Intercept":`X Variable ${e+1}`,coefficients:t,standardError:this.stdErrors[e],tStat:this.tStats[e]})))}:void 0}}static load(t){if("multivariateLinearRegression"!==t.name)throw new Error("not a MLR model");return new j(!0,t)}}var q=r(449),P=r(428),A=r(441),N=r.n(A),k=r(585),F=r.n(k),V=r(1552),D=r.n(V),R=r(470),L=r.n(R),_=r(440),I=r.n(_),U=r(427),C=r(665),T=r.n(C),z=r(450),J=r.n(z),B=r(429),X=r.n(B),$=r(959),G=r.n($),H=r(742),K=r(489),Q=r(514),W=r(1185),Y=r(1222),Z=r(655),tt=r(1088),et=r(418);function rt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function st(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?rt(Object(r),!0).forEach((function(e){b()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):rt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function it(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,s=m()(t);if(e){var i=m()(this).constructor;r=Reflect.construct(s,arguments,i)}else r=s.apply(this,arguments);return g()(this,r)}}Object(et.a)("StatisticalModels");var at=0,nt="R&#178;:";function ot(t){return J()(t)||T()(t)}function lt(t){return Object(U.isPrimitive)(t)&&!J()(t)}function ut(t,e,r,s,i){I()(t)||(t=[t]);for(var a=[],n=[],o={},l=r[t[0]].length,u=0;u<t.length;u++){var h=r[t[u]];if(L()(s,t[u]))n.push(t[u]);else{for(var c=Object(tt.a)(h,t[u]),f=i?1:0;f<c.length;f++)n.push("".concat(t[u],"_").concat(c[f]));o[t[u]]=c}}for(var d=0;d<l;d++){for(var g=[],p=0;p<t.length;p++){var m=r[t[p]];if(L()(s,t[p]))g.push(m[d]);else for(var v=o[t[p]],b=m[d],y=i?1:0;y<v.length;y++)g.push(b===v[y]?1:0)}a.push(g)}return{matrix:a,predictors:n,yvalues:r[e].map((function(t){return[t]})),nobs:l}}function ht(t,e,r,s,i){I()(t)||(t=[t]);for(var a=[],n=[],o={},l=[],u=0;u<t.length;u++){var h=r[t[u]];if(L()(s,t[u]))n.push(t[u]);else{for(var c=Object(tt.a)(h,t[u]),f=i?1:0;f<c.length;f++)n.push("".concat(t[u],"_").concat(c[f]));o[t[u]]=c}}for(var d=0;d<r[t[0]].length;d++){for(var g=[],p=!1,m=0;m<t.length;m++){var v=r[t[m]];if(L()(s,t[m])){if(!lt(v[d])){p=!0;break}g.push(v[d])}else{var b=v[d];if(ot(b)){p=!0;break}for(var y=o[t[m]],w=i?1:0;w<y.length;w++)g.push(b===y[w]?1:0)}}p||(a.push(g),l.push([r[e][d]]))}return{matrix:a,predictors:n,yvalues:l,nobs:l.length}}var ct=w()("th",{},void 0,"t"),ft=function(t){var e=t.x,r=t.y,s=t.intercept,i=t.omitMissing,a=t.data,n=t.quantitative,o={};try{var l=(i?ht:ut)(e,r,a,n,s),u=l.matrix,h=l.predictors,c=l.yvalues,f=l.nobs;o.result=new j(u,c,{intercept:s});var d=o.result.predict(u).map((function(t){return t[0]}));o.yhat=d;for(var g=Object(Z.a)(d),p=0,m=0;m<d.length;m++)p+=N()(d[m]-g,2);for(var v=Object(Y.a)(c,d),b=0,y=0;y<v.length;y++)b+=N()(v[y],2);var w=h.length;return o.resid=v,o.rSquared=p/(p+b),o.adjRSquared=1-(1-o.rSquared)*(f-1)/(f-w-1),o.fScore=p/w/(b/(f-w-1)),o.p=w,o.nobs=f,o.predictors=h,o}catch(M){return o}},dt=function(t){f()(r,t);var e=it(r);function r(t){var s;n()(this,r),s=e.call(this,t),b()(h()(s),"handleDiagnostics",(function(){var t=s.props,e=t.x,r=t.y,a=t.intercept,n=t.t,o=x.a.createElement(Q.a,i()({draggable:!0,editable:!0,fit:!0},Object(W.b)(s.state.resid,"residuals"),{meta:{type:"qqplot of regression residuals",x:e,y:r,intercept:a}})),l=w()(Q.a,{draggable:!0,editable:!0,fit:!0,data:[{x:s.state.yhat,y:s.state.resid,mode:"markers",type:s.state.yhat.length>2e3?"scattergl":"scatter"}],layout:{xaxis:{title:n("fitted-values")},yaxis:{title:n("residuals")},title:n("residuals-vs-fitted")},meta:{type:"regression residuals vs. fitted",x:e,y:r,intercept:a}});s.props.onDiagnostics([o,l])})),b()(h()(s),"handlePredict",(function(){var t=s.props,e=t.data,r=t.quantitative,i=t.intercept,a=s.props,n=a.x,o=a.y,l=ut(n,o,e,r,i).matrix,u=s.state.result.predict(l).map((function(t){return t[0]})),h=Object(Y.a)(e[o],u);s.props.onPredict(u,h,at)})),at+=1;var a=t.x,o=t.y,l=t.intercept,u=t.omitMissing,c=t.data,f=t.quantitative;return s.state=st(st({},ft({x:a,y:o,intercept:l,omitMissing:u,data:c,quantitative:f})),t),s}return l()(r,[{key:"render",value:function(){var t=this.state,e=t.y,r=t.predictors,s=t.nobs,i=t.result,a=t.adjRSquared,n=t.p,o=t.fScore,l=t.rSquared,u=this.props.t;return i?w()("div",{style:{overflowX:"auto",width:"100%"}},void 0,w()("span",{className:"title"},void 0,u("multiple-regression-title",{y:e,counter:at})),function(t,e,r,s,i){var a=G.a.factory(r-e.length-1);return w()(H.a,{bordered:!0,size:"sm"},void 0,w()("thead",{},void 0,w()("tr",{},void 0,w()("th",{},void 0,i("predictor")),w()("th",{},void 0,i("coefficient")),w()("th",{},void 0,i("std-error")),ct,w()("th",{},void 0,i("p-value")))),w()("tbody",{},void 0,s.intercept?w()("tr",{},void 0,w()("th",{},void 0,i("intercept")),w()("td",{},void 0,s.weights[e.length][0].toFixed(6)),w()("td",{},void 0,s.stdErrors[e.length].toFixed(4)),w()("td",{},void 0,s.tStats[e.length].toFixed(4)),w()("td",{},void 0,2*(1-a(X()(s.tStats[e.length]))).toFixed(4))):null,e.map((function(t,e){return w()("tr",{},e,w()("th",{},void 0,t),w()("td",{},void 0,s.weights[e][0].toFixed(6)),w()("td",{},void 0,s.stdErrors[e].toFixed(4)),w()("td",{},void 0,s.tStats[e].toFixed(4)),w()("td",{},void 0,2*(1-a(X()(s.tStats[e]))).toFixed(4)))}))))}(0,r,s,i,u),w()("p",{},void 0,u("residual-standard-error"),": ",F()(i.stdError)),w()("p",{},void 0,nt," ",l.toFixed(6),", ",u("adjusted")," ",nt," ",a.toFixed(6)),w()("p",{},void 0,u("f-statistic"),": ",o.toFixed(3)," ($","df",": ",s-n-1,", ",n,"), ",u("p-value"),": ",(1-D()(o,n,s-n-1)).toFixed(6)),this.props.onPredict?w()(K.a,{placement:"top",tooltip:u("use-model-to-predict-tooltip")},void 0,w()(P.a,{variant:"secondary",size:"sm",onClick:this.handlePredict},void 0,u("use-model-to-predict"))):null,this.props.onDiagnostics?w()(P.a,{variant:"secondary",size:"sm",style:{marginLeft:6},onClick:this.handleDiagnostics},void 0,u("model-diagnostics")):null):w()(q.a,{variant:"danger"},void 0,this.props.t("missing-attributes"))}}],[{key:"getDerivedStateFromProps",value:function(t,e){if(t.data!==e.data||t.quantitative!==e.quantitative||t.x!==e.x||t.y!==e.y||t.omitMissing!==e.omitMissing||t.intercept!==e.intercept){var r=t.x,s=t.y,i=t.intercept,a=t.omitMissing,n=t.data,o=t.quantitative;return st(st({},ft({x:r,y:s,intercept:i,omitMissing:a,data:n,quantitative:o})),t)}return null}}]),r}(M.Component);dt.defaultProps={omitMissing:!1,intercept:!0,onDiagnostics:null,onPredict:null};e.default=Object(O.a)("StatisticalModels")(dt)}}]);