(window.webpackJsonp=window.webpackJsonp||[]).push([[570],{6503:function(t,e,a){"use strict";a.r(e);a(438),a(434),a(453),a(452),a(437),a(436),a(423),a(420);var n=a(407),r=a.n(n),i=a(414),o=a.n(i),s=a(415),l=a.n(s),d=a(424),c=a.n(d),p=a(417),u=a.n(p),y=a(418),x=a.n(y),f=a(416),h=a.n(f),m=a(412),v=a.n(m),g=a(0),b=(a(404),a(4096)),w=a(466),O=a(483),P=a(467),k=a(494),C=a(614),D=a(584),j=a(454),F=a(6591),A=a(6573),L=a(4612),S=a(924),X=a(805),R=a(473),I=a.n(R),K=a(474),V=a.n(K),W=a(1396),_=a.n(W),B=a(4959),M=a.n(B),E=a(4963),J=a.n(E),U=a(502),q=a.n(U),H=a(489),z=a(575),G=a(524),N=a(495),Q=a(421);function T(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function Y(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?T(Object(a),!0).forEach((function(e){v()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):T(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function Z(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=h()(t);if(e){var r=h()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return x()(this,a)}}Object(Q.a)("LearnDistribution");var $={data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}},tt={data:{opacity:.3,fill:"tomato"}},et=.99999,at=r()(N.a,{raw:"P(X \\le x_0)"}),nt=r()(F.a,{dependentAxis:!0}),rt=r()(F.a,{dependentAxis:!0}),it=r()(N.a,{raw:"P(X > x_0)"}),ot=r()(F.a,{dependentAxis:!0}),st=r()(F.a,{dependentAxis:!0}),lt=r()(N.a,{raw:"P( x_0 \\le X \\le x_1)"}),dt=r()(F.a,{dependentAxis:!0}),ct=r()(F.a,{dependentAxis:!0}),pt=function(t){u()(a,t);var e=Z(a);function a(t){var n;return o()(this,a),n=e.call(this,t),v()(c()(n),"handleAlphaChange",(function(t){n.setState({d1:t})})),v()(c()(n),"handleBetaChange",(function(t){n.setState({d2:t})})),v()(c()(n),"handleLowerChange",(function(t){n.setState({x0:t})})),v()(c()(n),"handleUpperChange",(function(t){n.setState({x1:t})})),n.state={d1:10,d2:10,x0:0,x1:1},n}return l()(a,[{key:"renderInputs",value:function(t){var e=this.state,a=e.d1,n=e.d2,i=e.x0,o=e.x1,s=V()(J()(et,a,n),-3);return r()(g.Fragment,{},void 0,r()(H.b,{legend:"D1 ".concat(this.props.t("degrees-of-freedom")),defaultValue:a,min:.001,step:this.props.step,onChange:this.handleAlphaChange},"".concat(t,"-d1")),r()(H.b,{legend:"D2 ".concat(this.props.t("degrees-of-freedom")),defaultValue:n,step:this.props.step,min:.001,onChange:this.handleBetaChange},"".concat(t,"-d2")),r()(z.a,{legend:"x0",defaultValue:i,step:this.props.step,min:-.1,max:s,onChange:this.handleLowerChange},"".concat(t,"-x0")),"range"===t?r()(z.a,{legend:"x1",defaultValue:o,min:-.1,max:s,step:this.props.step,onChange:this.handleUpperChange},"".concat(t,"-x1")):null)}},{key:"render",value:function(){var t=this.props.domain,e=this.props.tabs,a=this.state,n=a.d1,i=a.d2,o=a.x0,s=a.x1,l=q()(J()(et,n,i),150),d=I()(e,"smaller")?r()(D.a,{eventKey:"smaller",title:at},void 0,r()(O.a,{},void 0,r()(P.a,{},void 0,r()(k.a,{},void 0,r()(G.a,{},void 0,this.renderInputs("smaller"),r()(N.a,{raw:"P(X \\le ".concat(V()(o,-4),") = ").concat(V()(_()(o,n,i),-4)),displayMode:!0,tag:""}))),r()(k.a,{},void 0,r()(A.a,{domain:t||{x:[-.1,l],y:[0,n>=999||i>=999?10:n>=99||i>=99?5:2]},theme:L.a.material},void 0,nt,r()(F.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),r()(S.a,{samples:200,interpolation:"step",y:function(t){return t.x<=o?M()(t.x,n,i):0},style:tt}),r()(X.a,{samples:200,y:function(t){return M()(t.x,n,i)}}))),r()(k.a,{},void 0,r()(A.a,{theme:L.a.material},void 0,rt,r()(F.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(X.a,{samples:600,y:function(t){return _()(t.x,n,i)},domain:{x:[-.1,l],y:[0,1.1]}}),r()(X.a,{data:[{x:o,y:0},{x:o,y:_()(o,n,i)}],style:$}),r()(X.a,{data:[{x:0,y:_()(o,n,i)},{x:o,y:_()(o,n,i)}],style:$})))))):null,c=I()(e,"greater")?r()(D.a,{eventKey:"greater",title:it},void 0,r()(O.a,{},void 0,r()(P.a,{},void 0,r()(k.a,{},void 0,r()(G.a,{},void 0,this.renderInputs("greater"),r()(N.a,{raw:"P(X > ".concat(V()(o,-4),") = ").concat(V()(1-_()(o,n,i),-4)),displayMode:!0,tag:""}))),r()(k.a,{},void 0,r()(A.a,{domain:t||{x:[-.1,l],y:[0,n>=999||i>=999?10:n>=99||i>=99?5:2]},theme:L.a.material},void 0,ot,r()(F.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),r()(S.a,{samples:200,interpolation:"step",y:function(t){return t.x>o?M()(t.x,n,i):0},style:tt}),r()(X.a,{samples:200,y:function(t){return M()(t.x,n,i)}}))),r()(k.a,{},void 0,r()(A.a,{theme:L.a.material,domain:{x:[-.1,l],y:[0,1.1]}},void 0,st,r()(F.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(X.a,{samples:600,y:function(t){return _()(t.x,n,i)}}),r()(X.a,{data:[{x:o,y:0},{x:o,y:_()(o,n,i)}],style:$}),r()(X.a,{data:[{x:o,y:1},{x:o,y:_()(o,n,i)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),r()(X.a,{data:[{x:0,y:_()(o,n,i)},{x:o,y:_()(o,n,i)}],style:$})))))):null,p=I()(e,"range")?r()(D.a,{eventKey:"range",title:lt},void 0,r()(O.a,{},void 0,r()(P.a,{},void 0,r()(k.a,{},void 0,r()(G.a,{},void 0,this.renderInputs("range"),s>=o?r()(N.a,{raw:"P(".concat(V()(o,-4)," \\le X \\le ").concat(V()(s,-4),") = ").concat(V()(_()(s,n,i)-_()(o,n,i),-4)),displayMode:!0,tag:""}):r()(j.a,{variant:"warning"},void 0,this.props.t("lower-bound-smaller-equal-upper-bound")))),r()(k.a,{},void 0,r()(A.a,{domain:t||{x:[-.1,l],y:[0,n>=999||i>=999?10:n>=99||i>=99?5:2]},theme:L.a.material},void 0,dt,r()(F.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),r()(S.a,{samples:200,interpolation:"step",y:function(t){return t.x>o&&t.x<s?M()(t.x,n,i):0},style:tt}),r()(X.a,{samples:200,y:function(t){return M()(t.x,n,i)}}))),r()(k.a,{},void 0,r()(A.a,{theme:L.a.material},void 0,ct,r()(F.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(X.a,{samples:600,y:function(t){return _()(t.x,n,i)},domain:{x:[-.1,l],y:[0,1.1]}}),r()(X.a,{data:[{x:q()(s,150),y:_()(o,n,i)},{x:q()(s,150),y:_()(q()(s,150),n,i)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),r()(X.a,{data:[{x:o,y:_()(o,n,i)},{x:q()(s,150),y:_()(o,n,i)}],style:$})))))):null;return r()(w.a,{style:Y({maxWidth:1200,margin:"10px auto"},this.props.style)},void 0,r()(w.a.Header,{as:"h3"},void 0,this.props.t("f-distribution")),r()(w.a.Body,{},void 0,r()(C.a,{defaultActiveKey:this.props.tabs[0],id:"f-tabs"},void 0,d,c,p)))}}]),a}(g.Component);pt.defaultProps={domain:null,step:.01,tabs:["smaller","greater","range"],style:{}},e.default=Object(b.a)("LearnDistribution")(pt)}}]);