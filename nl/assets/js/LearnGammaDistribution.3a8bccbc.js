(window.webpackJsonp=window.webpackJsonp||[]).push([[555],{6504:function(t,a,e){"use strict";e.r(a);e(438),e(434),e(453),e(452),e(437),e(436),e(423),e(420);var n=e(407),s=e.n(n),r=e(414),i=e.n(r),o=e(415),l=e.n(o),p=e(424),d=e.n(p),c=e(417),u=e.n(c),h=e(418),y=e.n(h),m=e(416),x=e.n(m),f=e(412),b=e.n(f),v=e(0),g=(e(404),e(4096)),w=e(466),P=e(483),C=e(467),O=e(494),k=e(614),F=e(584),D=e(454),j=e(6591),A=e(6573),L=e(4612),S=e(924),V=e(805),X=e(473),R=e.n(X),z=e(474),B=e.n(z),I=e(1115),K=e.n(I),W=e(3717),_=e.n(W),M=e(3718),E=e.n(M),J=e(489),U=e(575),q=e(524),H=e(495),G=e(421);function N(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function Q(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?N(Object(e),!0).forEach((function(a){b()(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):N(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function T(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=x()(t);if(a){var s=x()(this).constructor;e=Reflect.construct(n,arguments,s)}else e=n.apply(this,arguments);return y()(this,e)}}Object(G.a)("LearnDistribution");var Y=.999999,Z={data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}},$={data:{opacity:.3,fill:"tomato"}},tt=s()(H.a,{raw:"k"}),at=s()(H.a,{raw:"\\theta"}),et=s()(H.a,{raw:"\\alpha"}),nt=s()(H.a,{raw:"\\beta"}),st=s()(H.a,{raw:"P(X \\le x_0)"}),rt=s()(j.a,{dependentAxis:!0}),it=s()(j.a,{dependentAxis:!0}),ot=s()(H.a,{raw:"P(X > x_0)"}),lt=s()(j.a,{dependentAxis:!0}),pt=s()(j.a,{dependentAxis:!0}),dt=s()(H.a,{raw:"P( x_0 \\le X \\le x_1)"}),ct=s()(j.a,{dependentAxis:!0}),ut=s()(j.a,{dependentAxis:!0}),ht=function(t){u()(e,t);var a=T(e);function e(t){var n;return i()(this,e),n=a.call(this,t),b()(d()(n),"handleAlphaChange",(function(t){n.setState({alpha:t})})),b()(d()(n),"handleBetaChange",(function(t){n.setState({beta:t})})),b()(d()(n),"handleLowerChange",(function(t){n.setState({x0:t})})),b()(d()(n),"handleUpperChange",(function(t){n.setState({x1:t})})),n.state={alpha:1,beta:1,x0:0,x1:1},n}return l()(e,[{key:"renderInputs",value:function(t){var a=this.state,e=a.alpha,n=a.beta,r=a.x0,i=a.x1,o=this.props.scaleParameterization?E()(Y,e,1/n)+1:E()(Y,e,n)+1;return s()(v.Fragment,{},void 0,this.props.scaleParameterization?s()(v.Fragment,{},void 0,s()(J.b,{legend:this.props.symbols?s()("span",{},void 0,tt," (",this.props.t("shape"),")"):this.props.t("shape"),defaultValue:e,min:.001,step:this.props.step,onChange:this.handleAlphaChange},"".concat(t,"-alpha")),s()(J.b,{legend:this.props.symbols?s()("span",{},void 0,at," (",this.props.t("scale"),")"):this.props.t("scale"),defaultValue:n,step:this.props.step,min:.001,onChange:this.handleBetaChange},"".concat(t,"-beta"))):s()(v.Fragment,{},void 0,s()(J.b,{legend:this.props.symbols?s()("span",{},void 0,et," (",this.props.t("shape"),")"):this.props.t("shape"),defaultValue:e,min:.001,step:this.props.step,onChange:this.handleAlphaChange},"".concat(t,"-alpha")),s()(J.b,{legend:this.props.symbols?s()("span",{},void 0,nt," (",this.props.t("rate"),")"):this.props.t("rate"),defaultValue:n,step:this.props.step,min:.001,onChange:this.handleBetaChange},"".concat(t,"-beta"))),s()(U.a,{legend:"x0",defaultValue:r,step:this.props.step,min:-.1,max:o,onChange:this.handleLowerChange},"".concat(t,"-x0")),"range"===t?s()(U.a,{legend:"x1",defaultValue:i,min:-.1,max:o,step:this.props.step,onChange:this.handleUpperChange},"".concat(t,"-x1")):null)}},{key:"render",value:function(){var t=this.props.domain,a=this.props.tabs,e=this.state,n=e.alpha,r=e.x0,i=e.x1,o=this.props.scaleParameterization?1/this.state.beta:this.state.beta,l=R()(a,"smaller")?s()(F.a,{eventKey:"smaller",title:st},void 0,s()(P.a,{},void 0,s()(C.a,{},void 0,s()(O.a,{},void 0,s()(q.a,{},void 0,this.renderInputs("smaller"),s()(H.a,{raw:"P(X \\le ".concat(B()(r,-4),") = ").concat(B()(K()(r,n,o),-4)),displayMode:!0,tag:""}))),s()(O.a,{},void 0,s()(A.a,{domain:t||{x:[-.1,E()(Y,n,o)],y:[0,n<50||o<50?2:5]},theme:L.a.material},void 0,rt,s()(j.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),s()(S.a,{samples:200,interpolation:"step",y:function(t){return t.x<=r?_()(t.x,n,o):0},style:$}),s()(V.a,{samples:200,y:function(t){return _()(t.x,n,o)}}))),s()(O.a,{},void 0,s()(A.a,{theme:L.a.material},void 0,it,s()(j.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),s()(V.a,{samples:600,y:function(t){return K()(t.x,n,o)},domain:{x:[-.1,E()(Y,n,o)],y:[0,1.1]}}),s()(V.a,{data:[{x:r,y:0},{x:r,y:K()(r,n,o)}],style:Z}),s()(V.a,{data:[{x:0,y:K()(r,n,o)},{x:r,y:K()(r,n,o)}],style:Z})))))):null,p=R()(a,"greater")?s()(F.a,{eventKey:"greater",title:ot},void 0,s()(P.a,{},void 0,s()(C.a,{},void 0,s()(O.a,{},void 0,s()(q.a,{},void 0,this.renderInputs("greater"),s()(H.a,{raw:"P(X > ".concat(B()(r,-4),") = ").concat(B()(1-K()(r,n,o),-4)),displayMode:!0,tag:""}))),s()(O.a,{},void 0,s()(A.a,{domain:t||{x:[-.1,E()(Y,n,o)],y:[0,n<50||o<50?2:5]},theme:L.a.material},void 0,lt,s()(j.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),s()(S.a,{samples:200,interpolation:"step",y:function(t){return t.x>r?_()(t.x,n,o):0},style:$}),s()(V.a,{samples:200,y:function(t){return _()(t.x,n,o)}}))),s()(O.a,{},void 0,s()(A.a,{theme:L.a.material,domain:{x:[-.1,E()(Y,n,o)],y:[0,1.1]}},void 0,pt,s()(j.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),s()(V.a,{samples:600,y:function(t){return K()(t.x,n,o)}}),s()(V.a,{data:[{x:r,y:0},{x:r,y:K()(r,n,o)}],style:Z}),s()(V.a,{data:[{x:r,y:1},{x:r,y:K()(r,n,o)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),s()(V.a,{data:[{x:0,y:K()(r,n,o)},{x:r,y:K()(r,n,o)}],style:Z})))))):null,d=R()(a,"range")?s()(F.a,{eventKey:"range",title:dt},void 0,s()(P.a,{},void 0,s()(C.a,{},void 0,s()(O.a,{},void 0,s()(q.a,{},void 0,this.renderInputs("range"),i>=r?s()(H.a,{raw:"P(".concat(B()(r,-4)," \\le X \\le ").concat(B()(i,-4),") = ").concat(B()(K()(i,n,o)-K()(r,n,o),-4)),displayMode:!0,tag:""}):s()(D.a,{variant:"warning"},void 0,this.props.t("lower-bound-smaller-equal-upper-bound")))),s()(O.a,{},void 0,s()(A.a,{domain:t||{x:[-.1,E()(Y,n,o)],y:[0,n<50||o<50?2:5]},theme:L.a.material},void 0,ct,s()(j.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),s()(S.a,{samples:200,interpolation:"step",y:function(t){return t.x>r&&t.x<i?_()(t.x,n,o):0},style:$}),s()(V.a,{samples:200,y:function(t){return _()(t.x,n,o)}}))),s()(O.a,{},void 0,s()(A.a,{theme:L.a.material},void 0,ut,s()(j.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),s()(V.a,{samples:600,y:function(t){return K()(t.x,n,o)},domain:{x:[-.1,E()(Y,n,o)],y:[0,1.1]}}),s()(V.a,{data:[{x:i,y:K()(r,n,o)},{x:i,y:K()(i,n,o)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),s()(V.a,{data:[{x:r,y:K()(r,n,o)},{x:i,y:K()(r,n,o)}],style:Z})))))):null;return s()(w.a,{style:Q({maxWidth:1200,margin:"10px auto"},this.props.style)},void 0,s()(w.a.Header,{as:"h3"},void 0,this.props.t("gamma-distribution")),s()(w.a.Body,{},void 0,s()(k.a,{defaultActiveKey:this.props.tabs[0],id:"beta-tabs"},void 0,l,p,d)))}}]),e}(v.Component);ht.defaultProps={domain:null,scaleParameterization:!1,step:.01,symbols:!0,tabs:["smaller","greater","range"],style:{}},a.default=Object(g.a)("LearnDistribution")(ht)}}]);