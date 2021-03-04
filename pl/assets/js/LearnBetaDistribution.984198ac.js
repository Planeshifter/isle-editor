(window.webpackJsonp=window.webpackJsonp||[]).push([[491],{6442:function(t,e,a){"use strict";a.r(e);a(438),a(436),a(441),a(440),a(437),a(427),a(416),a(421);var n=a(407),r=a.n(n),i=a(414),o=a.n(i),s=a(415),l=a.n(s),c=a(425),d=a.n(c),p=a(418),u=a.n(p),y=a(419),h=a.n(y),x=a(417),f=a.n(x),m=a(412),v=a.n(m),b=a(0),g=(a(404),a(4172)),w=a(465),O=a(509),P=a(476),k=a(493),C=a(591),D=a(568),j=a(454),A=a(6534),F=a(6515),L=a(4680),S=a(916),X=a(6524),R=a(470),B=a.n(R),I=a(473),K=a.n(I),V=a(4903),W=a.n(V),_=a(4906),M=a.n(_),E=a(490),J=a(582),U=a(534),q=a(494),H=a(422);function z(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function G(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?z(Object(a),!0).forEach((function(e){v()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):z(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function N(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=f()(t);if(e){var r=f()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return h()(this,a)}}Object(H.a)("LearnDistribution");var Q={data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}},T={data:{opacity:.3,fill:"tomato"}},Y=r()(q.a,{raw:"P(X \\le x_0)"}),Z=r()(A.a,{dependentAxis:!0}),$=r()(A.a,{dependentAxis:!0}),tt=r()(q.a,{raw:"P(X > x_0)"}),et=r()(A.a,{dependentAxis:!0}),at=r()(A.a,{dependentAxis:!0}),nt=r()(q.a,{raw:"P( x_0 \\le X \\le x_1)"}),rt=r()(A.a,{dependentAxis:!0}),it=r()(A.a,{dependentAxis:!0}),ot=function(t){u()(a,t);var e=N(a);function a(t){var n;return o()(this,a),n=e.call(this,t),v()(d()(n),"handleAlphaChange",(function(t){n.setState({alpha:t})})),v()(d()(n),"handleBetaChange",(function(t){n.setState({beta:t})})),v()(d()(n),"handleLowerChange",(function(t){n.setState({x0:t})})),v()(d()(n),"handleUpperChange",(function(t){n.setState({x1:t})})),n.state={alpha:1,beta:1,x0:0,x1:1},n}return l()(a,[{key:"renderInputs",value:function(t){var e=this.state,a=e.alpha,n=e.beta,i=e.x0,o=e.x1;return r()(b.Fragment,{},void 0,r()(E.b,{legend:"Alpha",defaultValue:a,min:.001,step:this.props.step,onChange:this.handleAlphaChange},"".concat(t,"-alpha")),r()(E.b,{legend:"Beta",defaultValue:n,step:this.props.step,min:.001,onChange:this.handleBetaChange},"".concat(t,"-beta")),r()(J.a,{legend:"x0",defaultValue:i,step:this.props.step,min:-.1,max:1.1,onChange:this.handleLowerChange},"".concat(t,"-x0")),"range"===t?r()(J.a,{legend:"x1",defaultValue:o,min:-.1,max:1.1,step:this.props.step,onChange:this.handleUpperChange},"".concat(t,"-x1")):null)}},{key:"render",value:function(){var t=this.props.domain,e=this.props.tabs,a=this.state,n=a.alpha,i=a.beta,o=a.x0,s=a.x1,l=B()(e,"smaller")?r()(D.a,{eventKey:"smaller",title:Y},void 0,r()(O.a,{},void 0,r()(P.a,{},void 0,r()(k.a,{},void 0,r()(U.a,{},void 0,this.renderInputs("smaller"),r()(q.a,{raw:"P(X \\le ".concat(K()(o,-4),") = ").concat(K()(W()(o,n,i),-4)),displayMode:!0,tag:""}))),r()(k.a,{},void 0,r()(F.a,{domain:t||{x:[-.1,1.1],y:[0,n<.75||i<.75?5:2.5]},theme:L.a.material},void 0,Z,r()(A.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),r()(S.a,{samples:200,interpolation:"step",y:function(t){return t.x<=o?M()(t.x,n,i):0},style:T}),r()(X.a,{samples:200,y:function(t){return M()(t.x,n,i)}}))),r()(k.a,{},void 0,r()(F.a,{theme:L.a.material},void 0,$,r()(A.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(X.a,{samples:600,y:function(t){return W()(t.x,n,i)},domain:{x:[-.1,1.1],y:[0,1.1]}}),r()(X.a,{data:[{x:o,y:0},{x:o,y:W()(o,n,i)}],style:Q}),r()(X.a,{data:[{x:0,y:W()(o,n,i)},{x:o,y:W()(o,n,i)}],style:Q})))))):null,c=B()(e,"greater")?r()(D.a,{eventKey:"greater",title:tt},void 0,r()(O.a,{},void 0,r()(P.a,{},void 0,r()(k.a,{},void 0,r()(U.a,{},void 0,this.renderInputs("greater"),r()(q.a,{raw:"P(X > ".concat(K()(o,-4),") = ").concat(K()(1-W()(o,n,i),-4)),displayMode:!0,tag:""}))),r()(k.a,{},void 0,r()(F.a,{domain:t||{x:[-.1,1.1],y:[0,n<.75||i<.75?5:2.5]},theme:L.a.material},void 0,et,r()(A.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),r()(S.a,{samples:200,interpolation:"step",y:function(t){return t.x>o?M()(t.x,n,i):0},style:T}),r()(X.a,{samples:200,y:function(t){return M()(t.x,n,i)}}))),r()(k.a,{},void 0,r()(F.a,{theme:L.a.material,domain:{x:[-.1,1.1],y:[0,1.1]}},void 0,at,r()(A.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(X.a,{samples:600,y:function(t){return W()(t.x,n,i)}}),r()(X.a,{data:[{x:o,y:0},{x:o,y:W()(o,n,i)}],style:Q}),r()(X.a,{data:[{x:o,y:1},{x:o,y:W()(o,n,i)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),r()(X.a,{data:[{x:0,y:W()(o,n,i)},{x:o,y:W()(o,n,i)}],style:Q})))))):null,d=B()(e,"range")?r()(D.a,{eventKey:"range",title:nt},void 0,r()(O.a,{},void 0,r()(P.a,{},void 0,r()(k.a,{},void 0,r()(U.a,{},void 0,this.renderInputs("range"),s>=o?r()(q.a,{raw:"P(".concat(K()(o,-4)," \\le X \\le ").concat(K()(s,-4),") = ").concat(K()(W()(s,n,i)-W()(o,n,i),-4)),displayMode:!0,tag:""}):r()(j.a,{variant:"warning"},void 0,this.props.t("lower-bound-smaller-equal-upper-bound")))),r()(k.a,{},void 0,r()(F.a,{domain:t||{x:[-.1,1.1],y:[0,n<.75||i<.75?5:2.5]},theme:L.a.material},void 0,rt,r()(A.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),r()(S.a,{samples:200,interpolation:"step",y:function(t){return t.x>o&&t.x<s?M()(t.x,n,i):0},style:T}),r()(X.a,{samples:200,y:function(t){return M()(t.x,n,i)}}))),r()(k.a,{},void 0,r()(F.a,{theme:L.a.material},void 0,it,r()(A.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(X.a,{samples:600,y:function(t){return W()(t.x,n,i)},domain:{x:[-.1,1.1],y:[0,1.1]}}),r()(X.a,{data:[{x:s,y:W()(o,n,i)},{x:s,y:W()(s,n,i)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),r()(X.a,{data:[{x:o,y:W()(o,n,i)},{x:s,y:W()(o,n,i)}],style:Q})))))):null;return r()(w.a,{style:G({maxWidth:1200,margin:"10px auto"},this.props.style)},void 0,r()(w.a.Header,{as:"h3"},void 0,this.props.t("beta-distribution")),r()(w.a.Body,{},void 0,r()(C.a,{defaultActiveKey:this.props.tabs[0],id:"beta-tabs"},void 0,l,c,d)))}}]),a}(b.Component);ot.defaultProps={domain:null,step:.01,tabs:["smaller","greater","range"],style:{}},e.default=Object(g.a)("LearnDistribution")(ot)}}]);