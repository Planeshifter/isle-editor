(window.webpackJsonp=window.webpackJsonp||[]).push([[589],{6451:function(t,e,a){"use strict";a.r(e);a(438),a(436),a(441),a(440),a(437),a(427),a(416),a(421);var n=a(407),i=a.n(n),r=a(414),o=a.n(r),s=a(415),l=a.n(s),d=a(425),c=a.n(d),p=a(418),u=a.n(p),y=a(419),m=a.n(y),x=a(417),h=a.n(x),f=a(412),v=a.n(f),g=a(0),b=(a(404),a(4172)),D=a(465),w=a(509),C=a(476),O=a(493),P=a(591),k=a(568),F=a(454),S=a(6534),j=a(6515),A=a(4680),L=a(916),X=a(6524),M=a(470),R=a.n(M),I=a(482),K=a.n(I),V=a(473),W=a.n(V),_=a(934),E=a.n(_),J=a(697),U=a.n(J),q=a(490),B=a(582),H=a(534),z=a(494),G=a(422);function N(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function Q(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?N(Object(a),!0).forEach((function(e){v()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):N(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=h()(t);if(e){var i=h()(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return m()(this,a)}}Object(G.a)("LearnDistribution");var Y={data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}},Z={data:{opacity:.3,fill:"tomato"}};function $(t,e){return{x:[t-6-3*e,t+6+3*e],y:[0,100/K()(100,e)*.6]}}var tt=i()(z.a,{raw:"P(X \\le x_0)"}),et=i()(S.a,{dependentAxis:!0}),at=i()(S.a,{dependentAxis:!0}),nt=i()(z.a,{raw:"P(X > x_0)"}),it=i()(S.a,{dependentAxis:!0}),rt=i()(S.a,{dependentAxis:!0}),ot=i()(z.a,{raw:"P( x_0 \\le X \\le x_1)"}),st=i()(S.a,{dependentAxis:!0}),lt=i()(S.a,{dependentAxis:!0}),dt=function(t){u()(a,t);var e=T(a);function a(t){var n;o()(this,a),n=e.call(this,t),v()(c()(n),"handleMeanChange",(function(t){var e=n.state,a=e.sd,i=e.domain,r=3*a;t-r<i.x[0]||t+r>i.x[1]||i.x[0]<t-10*r||i.x[1]>t+10*r||E()(t,t,a)>=i.y[1]?n.setState({mean:t,domain:$(t,a)}):n.setState({mean:t})})),v()(c()(n),"handleSDChange",(function(t){var e=3*t,a=n.state,i=a.mean,r=a.domain;i-e<r.x[0]||i+e>r.x[1]||r.x[0]<i-10*e||r.x[1]>i+10*e||E()(i,i,t)>=r.y[1]?n.setState({sd:t,domain:$(i,t)}):n.setState({sd:t})})),v()(c()(n),"handleLowerChange",(function(t){n.setState({x0:t})})),v()(c()(n),"handleUpperChange",(function(t){n.setState({x1:t})}));return n.state={mean:0,sd:1,x0:0,x1:1,domain:$(0,1)},n}return l()(a,[{key:"renderInputs",value:function(t){var e=this.props.t,a=this.state,n=a.mean,r=a.sd,o=a.x0,s=a.x1;return i()(g.Fragment,{},void 0,i()(q.b,{legend:e("mean"),defaultValue:0,step:this.props.step,onChange:this.handleMeanChange},"".concat(t,"-mean")),i()(q.b,{legend:e("standard-deviation"),defaultValue:this.props.minStDev,step:this.props.step,min:this.props.minStDev,onChange:this.handleSDChange},"".concat(t,"-sd")),i()(B.a,{legend:"x0",defaultValue:o,step:this.props.step,min:n-4*r,max:n+4*r,onChange:this.handleLowerChange},"".concat(t,"-x0")),"range"===t?i()(B.a,{legend:"x1",defaultValue:s,min:n-4*r,max:n+4*r,step:this.props.step,onChange:this.handleUpperChange},"".concat(t,"-x1")):null)}},{key:"render",value:function(){var t=this.props.domain,e=this.props.tabs,a=this.state,n=a.mean,r=a.sd,o=a.x0,s=a.x1,l=this.props.t,d=R()(e,"smaller")?i()(k.a,{eventKey:"smaller",title:tt},void 0,i()(w.a,{},void 0,i()(C.a,{},void 0,i()(O.a,{},void 0,i()(H.a,{},void 0,this.renderInputs("smaller"),i()(z.a,{raw:"P(X \\le ".concat(W()(o,-4),") = ").concat(W()(U()(o,n,r),-4)),displayMode:!0,tag:""}))),i()(O.a,{},void 0,i()(j.a,{domain:t||this.state.domain,theme:A.a.material},void 0,et,i()(S.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),i()(L.a,{samples:200,interpolation:"step",y:function(t){return t.x<=o?E()(t.x,n,r):0},style:Z}),i()(X.a,{samples:200,y:function(t){return E()(t.x,n,r)}}))),this.props.hideCDF?null:i()(O.a,{},void 0,i()(j.a,{theme:A.a.material},void 0,at,i()(S.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),i()(X.a,{samples:600,y:function(t){return U()(t.x,n,r)},domain:{x:[n-4*r,n+4*r],y:[0,1.1]}}),i()(X.a,{data:[{x:o,y:0},{x:o,y:U()(o,n,r)}],style:Y}),i()(X.a,{data:[{x:0,y:U()(o,n,r)},{x:o,y:U()(o,n,r)}],style:Y})))))):null,c=R()(e,"greater")?i()(k.a,{eventKey:"greater",title:nt},void 0,i()(w.a,{},void 0,i()(C.a,{},void 0,i()(O.a,{},void 0,i()(H.a,{},void 0,this.renderInputs("greater"),i()(z.a,{raw:"P(X > ".concat(W()(o,-4),") = ").concat(W()(1-U()(o,n,r),-4)),displayMode:!0,tag:""}))),i()(O.a,{},void 0,i()(j.a,{domain:t||this.state.domain,theme:A.a.material},void 0,it,i()(S.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),i()(L.a,{samples:200,interpolation:"step",y:function(t){return t.x>o?E()(t.x,n,r):0},style:Z}),i()(X.a,{samples:200,y:function(t){return E()(t.x,n,r)}}))),this.props.hideCDF?null:i()(O.a,{},void 0,i()(j.a,{theme:A.a.material},void 0,rt,i()(S.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),i()(X.a,{samples:600,y:function(t){return U()(t.x,n,r)},domain:{x:[n-4*r,n+4*r],y:[0,1.1]}}),i()(X.a,{data:[{x:o,y:0},{x:o,y:U()(o,n,r)}],style:Y}),i()(X.a,{data:[{x:o,y:1},{x:o,y:U()(o,n,r)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),i()(X.a,{data:[{x:0,y:U()(o,n,r)},{x:o,y:U()(o,n,r)}],style:Y})))))):null,p=R()(e,"range")?i()(k.a,{eventKey:"range",title:ot},void 0,i()(w.a,{},void 0,i()(C.a,{},void 0,i()(O.a,{},void 0,i()(H.a,{},void 0,this.renderInputs("range"),s>=o?i()(z.a,{raw:"P(".concat(W()(o,-4)," \\le X \\le ").concat(W()(s,-4),") = ").concat(W()(U()(s,n,r)-U()(o,n,r),-4)),displayMode:!0,tag:""}):i()(F.a,{variant:"warning"},void 0,l("lower-bound-smaller-equal-upper-bound")))),i()(O.a,{},void 0,i()(j.a,{domain:t||this.state.domain,theme:A.a.material},void 0,st,i()(S.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),i()(L.a,{samples:200,interpolation:"step",y:function(t){return t.x>o&&t.x<s?E()(t.x,n,r):0},style:Z}),i()(X.a,{samples:200,y:function(t){return E()(t.x,n,r)}}))),this.props.hideCDF?null:i()(O.a,{},void 0,i()(j.a,{theme:A.a.material},void 0,lt,i()(S.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),i()(X.a,{samples:600,y:function(t){return U()(t.x,n,r)},domain:{x:[n-4*r,n+4*r],y:[0,1.1]}}),i()(X.a,{data:[{x:s,y:U()(o,n,r)},{x:s,y:U()(s,n,r)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),i()(X.a,{data:[{x:o,y:U()(o,n,r)},{x:s,y:U()(o,n,r)}],style:Y})))))):null;return i()(D.a,{style:Q({maxWidth:1200,margin:"10px auto"},this.props.style)},void 0,i()(D.a.Header,{as:"h3"},void 0,l("normal-distribution")),i()(D.a.Body,{},void 0,i()(P.a,{defaultActiveKey:this.props.tabs[0],id:"normal-tabs"},void 0,d,c,p)))}}]),a}(g.Component);dt.defaultProps={domain:null,hideCDF:!1,minStDev:1,step:.01,tabs:["smaller","greater","range"],style:{}},e.default=Object(b.a)("LearnDistribution")(dt)}}]);