(window.webpackJsonp=window.webpackJsonp||[]).push([[1329],{1088:function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));var r=s(904);class a extends r.a{constructor(t){super(),this.data=t,this.rows=t.length,this.columns=t[0].length}set(t,e,s){return this.data[t][e]=s,this}get(t,e){return this.data[t][e]}}},1492:function(t,e,s){"use strict";function r(t,e){let s=0;return Math.abs(t)>Math.abs(e)?(s=e/t,Math.abs(t)*Math.sqrt(1+s*s)):0!==e?(s=t/e,Math.abs(e)*Math.sqrt(1+s*s)):0}s.d(e,"a",(function(){return r}))},2822:function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));var r=s(904),a=s(1088),o=s(1492);class i{constructor(t,e={}){if((t=a.a.checkMatrix(t)).isEmpty())throw new Error("Matrix must be non-empty");let s=t.rows,i=t.columns;const{computeLeftSingularVectors:n=!0,computeRightSingularVectors:h=!0,autoTranspose:l=!1}=e;let g,f=Boolean(n),u=Boolean(h),c=!1;if(s<i)if(l){g=t.transpose(),s=g.rows,i=g.columns,c=!0;let e=f;f=u,u=e}else g=t.clone(),console.warn("Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose");else g=t.clone();let m=Math.min(s,i),b=Math.min(s+1,i),M=new Float64Array(b),d=new r.b(s,m),w=new r.b(i,i),p=new Float64Array(i),v=new Float64Array(s),x=new Float64Array(b);for(let r=0;r<b;r++)x[r]=r;let S=Math.min(s-1,i),V=Math.max(0,Math.min(i-2,s)),y=Math.max(S,V);for(let r=0;r<y;r++){if(r<S){M[r]=0;for(let t=r;t<s;t++)M[r]=Object(o.a)(M[r],g.get(t,r));if(0!==M[r]){g.get(r,r)<0&&(M[r]=-M[r]);for(let t=r;t<s;t++)g.set(t,r,g.get(t,r)/M[r]);g.set(r,r,g.get(r,r)+1)}M[r]=-M[r]}for(let t=r+1;t<i;t++){if(r<S&&0!==M[r]){let e=0;for(let a=r;a<s;a++)e+=g.get(a,r)*g.get(a,t);e=-e/g.get(r,r);for(let a=r;a<s;a++)g.set(a,t,g.get(a,t)+e*g.get(a,r))}p[t]=g.get(r,t)}if(f&&r<S)for(let t=r;t<s;t++)d.set(t,r,g.get(t,r));if(r<V){p[r]=0;for(let t=r+1;t<i;t++)p[r]=Object(o.a)(p[r],p[t]);if(0!==p[r]){p[r+1]<0&&(p[r]=0-p[r]);for(let t=r+1;t<i;t++)p[t]/=p[r];p[r+1]+=1}if(p[r]=-p[r],r+1<s&&0!==p[r]){for(let t=r+1;t<s;t++)v[t]=0;for(let t=r+1;t<s;t++)for(let e=r+1;e<i;e++)v[t]+=p[e]*g.get(t,e);for(let t=r+1;t<i;t++){let e=-p[t]/p[r+1];for(let a=r+1;a<s;a++)g.set(a,t,g.get(a,t)+e*v[a])}}if(u)for(let t=r+1;t<i;t++)w.set(t,r,p[t])}}let E=Math.min(i,s+1);if(S<i&&(M[S]=g.get(S,S)),s<E&&(M[E-1]=0),V+1<E&&(p[V]=g.get(V,E-1)),p[E-1]=0,f){for(let t=S;t<m;t++){for(let e=0;e<s;e++)d.set(e,t,0);d.set(t,t,1)}for(let t=S-1;t>=0;t--)if(0!==M[t]){for(let e=t+1;e<m;e++){let r=0;for(let a=t;a<s;a++)r+=d.get(a,t)*d.get(a,e);r=-r/d.get(t,t);for(let a=t;a<s;a++)d.set(a,e,d.get(a,e)+r*d.get(a,t))}for(let e=t;e<s;e++)d.set(e,t,-d.get(e,t));d.set(t,t,1+d.get(t,t));for(let e=0;e<t-1;e++)d.set(e,t,0)}else{for(let e=0;e<s;e++)d.set(e,t,0);d.set(t,t,1)}}if(u)for(let r=i-1;r>=0;r--){if(r<V&&0!==p[r])for(let t=r+1;t<i;t++){let e=0;for(let s=r+1;s<i;s++)e+=w.get(s,r)*w.get(s,t);e=-e/w.get(r+1,r);for(let s=r+1;s<i;s++)w.set(s,t,w.get(s,t)+e*w.get(s,r))}for(let t=0;t<i;t++)w.set(t,r,0);w.set(r,r,1)}let N=E-1,U=0,A=Number.EPSILON;for(;E>0;){let t,e;for(t=E-2;t>=-1&&-1!==t;t--){const e=Number.MIN_VALUE+A*Math.abs(M[t]+Math.abs(M[t+1]));if(Math.abs(p[t])<=e||Number.isNaN(p[t])){p[t]=0;break}}if(t===E-2)e=4;else{let s;for(s=E-1;s>=t&&s!==t;s--){let e=(s!==E?Math.abs(p[s]):0)+(s!==t+1?Math.abs(p[s-1]):0);if(Math.abs(M[s])<=A*e){M[s]=0;break}}s===t?e=3:s===E-1?e=1:(e=2,t=s)}switch(t++,e){case 1:{let e=p[E-2];p[E-2]=0;for(let s=E-2;s>=t;s--){let r=Object(o.a)(M[s],e),a=M[s]/r,n=e/r;if(M[s]=r,s!==t&&(e=-n*p[s-1],p[s-1]=a*p[s-1]),u)for(let t=0;t<i;t++)r=a*w.get(t,s)+n*w.get(t,E-1),w.set(t,E-1,-n*w.get(t,s)+a*w.get(t,E-1)),w.set(t,s,r)}break}case 2:{let e=p[t-1];p[t-1]=0;for(let r=t;r<E;r++){let a=Object(o.a)(M[r],e),i=M[r]/a,n=e/a;if(M[r]=a,e=-n*p[r],p[r]=i*p[r],f)for(let e=0;e<s;e++)a=i*d.get(e,r)+n*d.get(e,t-1),d.set(e,t-1,-n*d.get(e,r)+i*d.get(e,t-1)),d.set(e,r,a)}break}case 3:{const e=Math.max(Math.abs(M[E-1]),Math.abs(M[E-2]),Math.abs(p[E-2]),Math.abs(M[t]),Math.abs(p[t])),r=M[E-1]/e,a=M[E-2]/e,n=p[E-2]/e,h=M[t]/e,l=p[t]/e,g=((a+r)*(a-r)+n*n)/2,c=r*n*(r*n);let m=0;0===g&&0===c||(m=g<0?0-Math.sqrt(g*g+c):Math.sqrt(g*g+c),m=c/(g+m));let b=(h+r)*(h-r)+m,v=h*l;for(let x=t;x<E-1;x++){let e=Object(o.a)(b,v);0===e&&(e=Number.MIN_VALUE);let r=b/e,a=v/e;if(x!==t&&(p[x-1]=e),b=r*M[x]+a*p[x],p[x]=r*p[x]-a*M[x],v=a*M[x+1],M[x+1]=r*M[x+1],u)for(let t=0;t<i;t++)e=r*w.get(t,x)+a*w.get(t,x+1),w.set(t,x+1,-a*w.get(t,x)+r*w.get(t,x+1)),w.set(t,x,e);if(e=Object(o.a)(b,v),0===e&&(e=Number.MIN_VALUE),r=b/e,a=v/e,M[x]=e,b=r*p[x]+a*M[x+1],M[x+1]=-a*p[x]+r*M[x+1],v=a*p[x+1],p[x+1]=r*p[x+1],f&&x<s-1)for(let t=0;t<s;t++)e=r*d.get(t,x)+a*d.get(t,x+1),d.set(t,x+1,-a*d.get(t,x)+r*d.get(t,x+1)),d.set(t,x,e)}p[E-2]=b,U+=1;break}case 4:if(M[t]<=0&&(M[t]=M[t]<0?-M[t]:0,u))for(let e=0;e<=N;e++)w.set(e,t,-w.get(e,t));for(;t<N&&!(M[t]>=M[t+1]);){let e=M[t];if(M[t]=M[t+1],M[t+1]=e,u&&t<i-1)for(let s=0;s<i;s++)e=w.get(s,t+1),w.set(s,t+1,w.get(s,t)),w.set(s,t,e);if(f&&t<s-1)for(let r=0;r<s;r++)e=d.get(r,t+1),d.set(r,t+1,d.get(r,t)),d.set(r,t,e);t++}U=0,E--}}if(c){let t=w;w=d,d=t}this.m=s,this.n=i,this.s=M,this.U=d,this.V=w}solve(t){let e=t,s=this.threshold,a=this.s.length,o=r.b.zeros(a,a);for(let r=0;r<a;r++)Math.abs(this.s[r])<=s?o.set(r,r,0):o.set(r,r,1/this.s[r]);let i=this.U,n=this.rightSingularVectors,h=n.mmul(o),l=n.rows,g=i.rows,f=r.b.zeros(l,g);for(let r=0;r<l;r++)for(let t=0;t<g;t++){let e=0;for(let s=0;s<a;s++)e+=h.get(r,s)*i.get(t,s);f.set(r,t,e)}return f.mmul(e)}solveForDiagonal(t){return this.solve(r.b.diag(t))}inverse(){let t=this.V,e=this.threshold,s=t.rows,a=t.columns,o=new r.b(s,this.s.length);for(let r=0;r<s;r++)for(let s=0;s<a;s++)Math.abs(this.s[s])>e&&o.set(r,s,t.get(r,s)/this.s[s]);let i=this.U,n=i.rows,h=i.columns,l=new r.b(s,n);for(let r=0;r<s;r++)for(let t=0;t<n;t++){let e=0;for(let s=0;s<h;s++)e+=o.get(r,s)*i.get(t,s);l.set(r,t,e)}return l}get condition(){return this.s[0]/this.s[Math.min(this.m,this.n)-1]}get norm2(){return this.s[0]}get rank(){let t=Math.max(this.m,this.n)*this.s[0]*Number.EPSILON,e=0,s=this.s;for(let r=0,a=s.length;r<a;r++)s[r]>t&&e++;return e}get diagonal(){return Array.from(this.s)}get threshold(){return Number.EPSILON/2*Math.max(this.m,this.n)*this.s[0]}get leftSingularVectors(){return this.U}get rightSingularVectors(){return this.V}get diagonalMatrix(){return r.b.diag(this.s)}}},6333:function(t,e,s){"use strict";s.d(e,"a",(function(){return u}));var r=s(904);class a extends r.a{constructor(t,e,s){super(),this.matrix=t,this.rows=e,this.columns=s}}class o extends a{constructor(t){super(t,t.columns,t.rows)}set(t,e,s){return this.matrix.set(e,t,s),this}get(t,e){return this.matrix.get(e,t)}}var i=s(2822),n=s(1088),h=s(1492);class l{constructor(t,e={}){const{assumeSymmetric:s=!1}=e;if(!(t=n.a.checkMatrix(t)).isSquare())throw new Error("Matrix is not a square matrix");if(t.isEmpty())throw new Error("Matrix must be non-empty");let a,o,i=t.columns,l=new r.b(i,i),f=new Float64Array(i),u=new Float64Array(i),c=t,m=!1;if(m=!!s||t.isSymmetric(),m){for(a=0;a<i;a++)for(o=0;o<i;o++)l.set(a,o,c.get(a,o));!function(t,e,s,r){let a,o,i,n,h,l,g,f;for(h=0;h<t;h++)s[h]=r.get(t-1,h);for(n=t-1;n>0;n--){for(f=0,i=0,l=0;l<n;l++)f+=Math.abs(s[l]);if(0===f)for(e[n]=s[n-1],h=0;h<n;h++)s[h]=r.get(n-1,h),r.set(n,h,0),r.set(h,n,0);else{for(l=0;l<n;l++)s[l]/=f,i+=s[l]*s[l];for(a=s[n-1],o=Math.sqrt(i),a>0&&(o=-o),e[n]=f*o,i-=a*o,s[n-1]=a-o,h=0;h<n;h++)e[h]=0;for(h=0;h<n;h++){for(a=s[h],r.set(h,n,a),o=e[h]+r.get(h,h)*a,l=h+1;l<=n-1;l++)o+=r.get(l,h)*s[l],e[l]+=r.get(l,h)*a;e[h]=o}for(a=0,h=0;h<n;h++)e[h]/=i,a+=e[h]*s[h];for(g=a/(i+i),h=0;h<n;h++)e[h]-=g*s[h];for(h=0;h<n;h++){for(a=s[h],o=e[h],l=h;l<=n-1;l++)r.set(l,h,r.get(l,h)-(a*e[l]+o*s[l]));s[h]=r.get(n-1,h),r.set(n,h,0)}}s[n]=i}for(n=0;n<t-1;n++){if(r.set(t-1,n,r.get(n,n)),r.set(n,n,1),i=s[n+1],0!==i){for(l=0;l<=n;l++)s[l]=r.get(l,n+1)/i;for(h=0;h<=n;h++){for(o=0,l=0;l<=n;l++)o+=r.get(l,n+1)*r.get(l,h);for(l=0;l<=n;l++)r.set(l,h,r.get(l,h)-o*s[l])}}for(l=0;l<=n;l++)r.set(l,n+1,0)}for(h=0;h<t;h++)s[h]=r.get(t-1,h),r.set(t-1,h,0);r.set(t-1,t-1,1),e[0]=0}(i,u,f,l),function(t,e,s,r){let a,o,i,n,l,g,f,u,c,m,b,M,d,w,p,v,x;for(i=1;i<t;i++)e[i-1]=e[i];e[t-1]=0;let S=0,V=0,y=Number.EPSILON;for(g=0;g<t;g++){for(V=Math.max(V,Math.abs(s[g])+Math.abs(e[g])),f=g;f<t&&!(Math.abs(e[f])<=y*V);)f++;if(f>g){x=0;do{for(x+=1,a=s[g],u=(s[g+1]-a)/(2*e[g]),c=Object(h.a)(u,1),u<0&&(c=-c),s[g]=e[g]/(u+c),s[g+1]=e[g]*(u+c),m=s[g+1],o=a-s[g],i=g+2;i<t;i++)s[i]-=o;for(S+=o,u=s[f],b=1,M=b,d=b,w=e[g+1],p=0,v=0,i=f-1;i>=g;i--)for(d=M,M=b,v=p,a=b*e[i],o=b*u,c=Object(h.a)(u,e[i]),e[i+1]=p*c,p=e[i]/c,b=u/c,u=b*s[i]-p*a,s[i+1]=o+p*(b*a+p*s[i]),l=0;l<t;l++)o=r.get(l,i+1),r.set(l,i+1,p*r.get(l,i)+b*o),r.set(l,i,b*r.get(l,i)-p*o);u=-p*v*d*w*e[g]/m,e[g]=p*u,s[g]=b*u}while(Math.abs(e[g])>y*V)}s[g]=s[g]+S,e[g]=0}for(i=0;i<t-1;i++){for(l=i,u=s[i],n=i+1;n<t;n++)s[n]<u&&(l=n,u=s[n]);if(l!==i)for(s[l]=s[i],s[i]=u,n=0;n<t;n++)u=r.get(n,i),r.set(n,i,r.get(n,l)),r.set(n,l,u)}}(i,u,f,l)}else{let t=new r.b(i,i),e=new Float64Array(i);for(o=0;o<i;o++)for(a=0;a<i;a++)t.set(a,o,c.get(a,o));!function(t,e,s,r){let a,o,i,n,h,l,g,f=0,u=t-1;for(l=f+1;l<=u-1;l++){for(g=0,n=l;n<=u;n++)g+=Math.abs(e.get(n,l-1));if(0!==g){for(i=0,n=u;n>=l;n--)s[n]=e.get(n,l-1)/g,i+=s[n]*s[n];for(o=Math.sqrt(i),s[l]>0&&(o=-o),i-=s[l]*o,s[l]=s[l]-o,h=l;h<t;h++){for(a=0,n=u;n>=l;n--)a+=s[n]*e.get(n,h);for(a/=i,n=l;n<=u;n++)e.set(n,h,e.get(n,h)-a*s[n])}for(n=0;n<=u;n++){for(a=0,h=u;h>=l;h--)a+=s[h]*e.get(n,h);for(a/=i,h=l;h<=u;h++)e.set(n,h,e.get(n,h)-a*s[h])}s[l]=g*s[l],e.set(l,l-1,g*o)}}for(n=0;n<t;n++)for(h=0;h<t;h++)r.set(n,h,n===h?1:0);for(l=u-1;l>=f+1;l--)if(0!==e.get(l,l-1)){for(n=l+1;n<=u;n++)s[n]=e.get(n,l-1);for(h=l;h<=u;h++){for(o=0,n=l;n<=u;n++)o+=s[n]*r.get(n,h);for(o=o/s[l]/e.get(l,l-1),n=l;n<=u;n++)r.set(n,h,r.get(n,h)+o*s[n])}}}(i,t,e,l),function(t,e,s,r,a){let o,i,n,h,l,f,u,c,m,b,M,d,w,p,v,x=t-1,S=0,V=t-1,y=Number.EPSILON,E=0,N=0,U=0,A=0,k=0,F=0,R=0,C=0;for(o=0;o<t;o++)for((o<S||o>V)&&(s[o]=a.get(o,o),e[o]=0),i=Math.max(o-1,0);i<t;i++)N+=Math.abs(a.get(o,i));for(;x>=S;){for(h=x;h>S&&(F=Math.abs(a.get(h-1,h-1))+Math.abs(a.get(h,h)),0===F&&(F=N),!(Math.abs(a.get(h,h-1))<y*F));)h--;if(h===x)a.set(x,x,a.get(x,x)+E),s[x]=a.get(x,x),e[x]=0,x--,C=0;else if(h===x-1){if(u=a.get(x,x-1)*a.get(x-1,x),U=(a.get(x-1,x-1)-a.get(x,x))/2,A=U*U+u,R=Math.sqrt(Math.abs(A)),a.set(x,x,a.get(x,x)+E),a.set(x-1,x-1,a.get(x-1,x-1)+E),c=a.get(x,x),A>=0){for(R=U>=0?U+R:U-R,s[x-1]=c+R,s[x]=s[x-1],0!==R&&(s[x]=c-u/R),e[x-1]=0,e[x]=0,c=a.get(x,x-1),F=Math.abs(c)+Math.abs(R),U=c/F,A=R/F,k=Math.sqrt(U*U+A*A),U/=k,A/=k,i=x-1;i<t;i++)R=a.get(x-1,i),a.set(x-1,i,A*R+U*a.get(x,i)),a.set(x,i,A*a.get(x,i)-U*R);for(o=0;o<=x;o++)R=a.get(o,x-1),a.set(o,x-1,A*R+U*a.get(o,x)),a.set(o,x,A*a.get(o,x)-U*R);for(o=S;o<=V;o++)R=r.get(o,x-1),r.set(o,x-1,A*R+U*r.get(o,x)),r.set(o,x,A*r.get(o,x)-U*R)}else s[x-1]=c+U,s[x]=c+U,e[x-1]=R,e[x]=-R;x-=2,C=0}else{if(c=a.get(x,x),m=0,u=0,h<x&&(m=a.get(x-1,x-1),u=a.get(x,x-1)*a.get(x-1,x)),10===C){for(E+=c,o=S;o<=x;o++)a.set(o,o,a.get(o,o)-c);F=Math.abs(a.get(x,x-1))+Math.abs(a.get(x-1,x-2)),c=m=.75*F,u=-.4375*F*F}if(30===C&&(F=(m-c)/2,F=F*F+u,F>0)){for(F=Math.sqrt(F),m<c&&(F=-F),F=c-u/((m-c)/2+F),o=S;o<=x;o++)a.set(o,o,a.get(o,o)-F);E+=F,c=m=u=.964}for(C+=1,l=x-2;l>=h&&(R=a.get(l,l),k=c-R,F=m-R,U=(k*F-u)/a.get(l+1,l)+a.get(l,l+1),A=a.get(l+1,l+1)-R-k-F,k=a.get(l+2,l+1),F=Math.abs(U)+Math.abs(A)+Math.abs(k),U/=F,A/=F,k/=F,l!==h)&&!(Math.abs(a.get(l,l-1))*(Math.abs(A)+Math.abs(k))<y*(Math.abs(U)*(Math.abs(a.get(l-1,l-1))+Math.abs(R)+Math.abs(a.get(l+1,l+1)))));)l--;for(o=l+2;o<=x;o++)a.set(o,o-2,0),o>l+2&&a.set(o,o-3,0);for(n=l;n<=x-1&&(p=n!==x-1,n!==l&&(U=a.get(n,n-1),A=a.get(n+1,n-1),k=p?a.get(n+2,n-1):0,c=Math.abs(U)+Math.abs(A)+Math.abs(k),0!==c&&(U/=c,A/=c,k/=c)),0!==c);n++)if(F=Math.sqrt(U*U+A*A+k*k),U<0&&(F=-F),0!==F){for(n!==l?a.set(n,n-1,-F*c):h!==l&&a.set(n,n-1,-a.get(n,n-1)),U+=F,c=U/F,m=A/F,R=k/F,A/=U,k/=U,i=n;i<t;i++)U=a.get(n,i)+A*a.get(n+1,i),p&&(U+=k*a.get(n+2,i),a.set(n+2,i,a.get(n+2,i)-U*R)),a.set(n,i,a.get(n,i)-U*c),a.set(n+1,i,a.get(n+1,i)-U*m);for(o=0;o<=Math.min(x,n+3);o++)U=c*a.get(o,n)+m*a.get(o,n+1),p&&(U+=R*a.get(o,n+2),a.set(o,n+2,a.get(o,n+2)-U*k)),a.set(o,n,a.get(o,n)-U),a.set(o,n+1,a.get(o,n+1)-U*A);for(o=S;o<=V;o++)U=c*r.get(o,n)+m*r.get(o,n+1),p&&(U+=R*r.get(o,n+2),r.set(o,n+2,r.get(o,n+2)-U*k)),r.set(o,n,r.get(o,n)-U),r.set(o,n+1,r.get(o,n+1)-U*A)}}}if(0===N)return;for(x=t-1;x>=0;x--)if(U=s[x],A=e[x],0===A)for(h=x,a.set(x,x,1),o=x-1;o>=0;o--){for(u=a.get(o,o)-U,k=0,i=h;i<=x;i++)k+=a.get(o,i)*a.get(i,x);if(e[o]<0)R=u,F=k;else if(h=o,0===e[o]?a.set(o,x,0!==u?-k/u:-k/(y*N)):(c=a.get(o,o+1),m=a.get(o+1,o),A=(s[o]-U)*(s[o]-U)+e[o]*e[o],f=(c*F-R*k)/A,a.set(o,x,f),a.set(o+1,x,Math.abs(c)>Math.abs(R)?(-k-u*f)/c:(-F-m*f)/R)),f=Math.abs(a.get(o,x)),y*f*f>1)for(i=o;i<=x;i++)a.set(i,x,a.get(i,x)/f)}else if(A<0)for(h=x-1,Math.abs(a.get(x,x-1))>Math.abs(a.get(x-1,x))?(a.set(x-1,x-1,A/a.get(x,x-1)),a.set(x-1,x,-(a.get(x,x)-U)/a.get(x,x-1))):(v=g(0,-a.get(x-1,x),a.get(x-1,x-1)-U,A),a.set(x-1,x-1,v[0]),a.set(x-1,x,v[1])),a.set(x,x-1,0),a.set(x,x,1),o=x-2;o>=0;o--){for(b=0,M=0,i=h;i<=x;i++)b+=a.get(o,i)*a.get(i,x-1),M+=a.get(o,i)*a.get(i,x);if(u=a.get(o,o)-U,e[o]<0)R=u,k=b,F=M;else if(h=o,0===e[o]?(v=g(-b,-M,u,A),a.set(o,x-1,v[0]),a.set(o,x,v[1])):(c=a.get(o,o+1),m=a.get(o+1,o),d=(s[o]-U)*(s[o]-U)+e[o]*e[o]-A*A,w=2*(s[o]-U)*A,0===d&&0===w&&(d=y*N*(Math.abs(u)+Math.abs(A)+Math.abs(c)+Math.abs(m)+Math.abs(R))),v=g(c*k-R*b+A*M,c*F-R*M-A*b,d,w),a.set(o,x-1,v[0]),a.set(o,x,v[1]),Math.abs(c)>Math.abs(R)+Math.abs(A)?(a.set(o+1,x-1,(-b-u*a.get(o,x-1)+A*a.get(o,x))/c),a.set(o+1,x,(-M-u*a.get(o,x)-A*a.get(o,x-1))/c)):(v=g(-k-m*a.get(o,x-1),-F-m*a.get(o,x),R,A),a.set(o+1,x-1,v[0]),a.set(o+1,x,v[1]))),f=Math.max(Math.abs(a.get(o,x-1)),Math.abs(a.get(o,x))),y*f*f>1)for(i=o;i<=x;i++)a.set(i,x-1,a.get(i,x-1)/f),a.set(i,x,a.get(i,x)/f)}for(o=0;o<t;o++)if(o<S||o>V)for(i=o;i<t;i++)r.set(o,i,a.get(o,i));for(i=t-1;i>=S;i--)for(o=S;o<=V;o++){for(R=0,n=S;n<=Math.min(i,V);n++)R+=r.get(o,n)*a.get(n,i);r.set(o,i,R)}}(i,u,f,l,t)}this.n=i,this.e=u,this.d=f,this.V=l}get realEigenvalues(){return Array.from(this.d)}get imaginaryEigenvalues(){return Array.from(this.e)}get eigenvectorMatrix(){return this.V}get diagonalMatrix(){let t,e,s=this.n,a=this.e,o=this.d,i=new r.b(s,s);for(t=0;t<s;t++){for(e=0;e<s;e++)i.set(t,e,0);i.set(t,t,o[t]),a[t]>0?i.set(t,t+1,a[t]):a[t]<0&&i.set(t,t-1,a[t])}return i}}function g(t,e,s,r){let a,o;return Math.abs(s)>Math.abs(r)?(a=r/s,o=s+a*r,[(t+a*e)/o,(e-a*t)/o]):(a=s/r,o=r+a*s,[(a*t+e)/o,(a*e-t)/o])}class f{constructor(t,e={}){t=n.a.checkMatrix(t);let{Y:s}=e;const{scaleScores:a=!1,maxIterations:o=1e3,terminationCriteria:i=1e-10}=e;let h;if(s){if(s=Array.isArray(s)&&"number"==typeof s[0]?r.b.columnVector(s):n.a.checkMatrix(s),!s.isColumnVector()||s.rows!==t.rows)throw new Error("Y must be a column vector of length X.rows");h=s}else h=t.getColumnVector(0);let l,g,f,u,c=1;for(let r=0;r<o&&c>i;r++)f=t.transpose().mmul(h).div(h.transpose().mmul(h).get(0,0)),f=f.div(f.norm()),l=t.mmul(f).div(f.transpose().mmul(f).get(0,0)),r>0&&(c=l.clone().sub(u).pow(2).sum()),u=l.clone(),s?(g=s.transpose().mmul(l).div(l.transpose().mmul(l).get(0,0)),g=g.div(g.norm()),h=s.mmul(g).div(g.transpose().mmul(g).get(0,0))):h=l;if(s){let e=t.transpose().mmul(l).div(l.transpose().mmul(l).get(0,0));e=e.div(e.norm());let r=t.clone().sub(l.clone().mmul(e.transpose())),a=h.transpose().mmul(l).div(l.transpose().mmul(l).get(0,0)),o=s.clone().sub(l.clone().mulS(a.get(0,0)).mmul(g.transpose()));this.t=l,this.p=e.transpose(),this.w=f.transpose(),this.q=g,this.u=h,this.s=l.transpose().mmul(l),this.xResidual=r,this.yResidual=o,this.betas=a}else this.w=f.transpose(),this.s=l.transpose().mmul(l).sqrt(),this.t=a?l.clone().div(this.s.get(0,0)):l,this.xResidual=t.sub(l.mmul(f.transpose()))}}class u{constructor(t,e={}){if(!0===t){const t=e;return this.center=t.center,this.scale=t.scale,this.means=t.means,this.stdevs=t.stdevs,this.U=r.b.checkMatrix(t.U),this.S=t.S,this.R=t.R,void(this.excludedFeatures=t.excludedFeatures||[])}t=new r.b(t);const{isCovarianceMatrix:s=!1,method:a="SVD",nCompNIPALS:n=2,center:h=!0,scale:l=!1,ignoreZeroVariance:g=!1}=e;if(this.center=h,this.scale=l,this.means=null,this.stdevs=null,this.excludedFeatures=[],s)this._computeFromCovarianceMatrix(t);else switch(this._adjust(t,g),a){case"covarianceMatrix":{const e=new o(t).mmul(t).div(t.rows-1);this._computeFromCovarianceMatrix(e);break}case"NIPALS":this._computeWithNIPALS(t,n);break;case"SVD":{const e=new i.a(t,{computeLeftSingularVectors:!1,computeRightSingularVectors:!0,autoTranspose:!0});this.U=e.rightSingularVectors;const s=e.diagonal,r=[];for(const a of s)r.push(a*a/(t.rows-1));this.S=r;break}default:throw new Error(`unknown method: ${a}`)}}static load(t){if("string"!=typeof t.name)throw new TypeError("model must have a name property");if("PCA"!==t.name)throw new RangeError(`invalid model: ${t.name}`);return new u(!0,t)}predict(t,e={}){const{nComponents:s=this.U.columns}=e;if(t=new r.b(t),this.center&&(t.subRowVector(this.means),this.scale)){for(let e of this.excludedFeatures)t.removeColumn(e);t.divRowVector(this.stdevs)}var a=t.mmul(this.U);return a.subMatrix(0,a.rows-1,0,s-1)}invert(t){var e=(t=r.b.checkMatrix(t)).mmul(this.U.transpose());return this.center&&(this.scale&&e.mulRowVector(this.stdevs),e.addRowVector(this.means)),e}getExplainedVariance(){var t=0;for(const e of this.S)t+=e;return this.S.map((e=>e/t))}getCumulativeVariance(){for(var t=this.getExplainedVariance(),e=1;e<t.length;e++)t[e]+=t[e-1];return t}getEigenvectors(){return this.U}getEigenvalues(){return this.S}getStandardDeviations(){return this.S.map((t=>Math.sqrt(t)))}getLoadings(){return this.U.transpose()}toJSON(){return{name:"PCA",center:this.center,scale:this.scale,means:this.means,stdevs:this.stdevs,U:this.U,S:this.S,excludedFeatures:this.excludedFeatures}}_adjust(t,e){if(this.center){const s=t.mean("column"),r=this.scale?t.standardDeviation("column",{mean:s}):null;if(this.means=s,t.subRowVector(s),this.scale){for(let s=0;s<r.length;s++)if(0===r[s]){if(!e)throw new RangeError(`Cannot scale the dataset (standard deviation is zero at index ${s}`);t.removeColumn(s),r.splice(s,1),this.excludedFeatures.push(s),s--}this.stdevs=r,t.divRowVector(r)}}}_computeFromCovarianceMatrix(t){const e=new l(t,{assumeSymmetric:!0});this.U=e.eigenvectorMatrix,this.U.flipRows(),this.S=e.realEigenvalues,this.S.reverse()}_computeWithNIPALS(t,e){this.U=new r.b(e,t.columns),this.S=[];let s=t;for(let r=0;r<e;r++){let t=new f(s);this.U.setRow(r,t.w.transpose()),this.S.push(Math.pow(t.s.get(0,0),2)),s=t.xResidual}this.U=this.U.transpose()}}}}]);