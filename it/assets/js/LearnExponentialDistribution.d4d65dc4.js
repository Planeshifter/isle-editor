(window.webpackJsonp=window.webpackJsonp||[]).push([[549],{6502:function(t,e,a){"use strict";a.r(e);a(438),a(434),a(453),a(452),a(437),a(436),a(423),a(420);var n=a(407),i=a.n(n),r=a(414),o=a.n(r),s=a(415),d=a.n(s),l=a(424),c=a.n(l),p=a(417),u=a.n(p),y=a(418),x=a.n(y),f=a(416),h=a.n(f),m=a(412),v=a.n(m),b=a(0),g=(a(404),a(4096)),k=a(454),w=a(483),O=a(467),P=a(494),D=a(466),C=a(614),F=a(584),j=a(6591),R=a(6573),A=a(4612),L=a(924),W=a(805),S=a(474),X=a.n(S),I=a(1392),K=a.n(I),_=a(2736),M=a.n(_),V=a(3721),E=a.n(V),J=a(575),U=a(524),q=a(495),B=a(421);function H(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function z(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?H(Object(a),!0).forEach((function(e){v()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):H(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function G(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=h()(t);if(e){var i=h()(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return x()(this,a)}}Object(B.a)("LearnDistribution");var N=.999999,Q=i()(q.a,{raw:"P(X \\le x_0)"}),T=i()(j.a,{dependentAxis:!0}),Y=i()(j.a,{dependentAxis:!0}),Z=i()(q.a,{raw:"P(X > x_0)"}),$=i()(j.a,{dependentAxis:!0}),tt=i()(j.a,{dependentAxis:!0}),et=i()(q.a,{raw:"P( x_0 \\le X \\le x_1)"}),at=i()(j.a,{dependentAxis:!0}),nt=i()(j.a,{dependentAxis:!0}),it=function(t){u()(a,t);var e=G(a);function a(t){var n;return o()(this,a),n=e.call(this,t),v()(c()(n),"handleRateChange",(function(t){n.setState({rate:t})})),v()(c()(n),"handleLowerChange",(function(t){n.setState({x0:t})})),v()(c()(n),"handleUpperChange",(function(t){n.setState({x1:t})})),n.state={rate:1,x0:0,x1:1},n}return d()(a,[{key:"renderInputs",value:function(t){var e=this.state,a=e.rate,n=e.x0,r=e.x1,o=this.props.t;return i()(b.Fragment,{},void 0,i()(J.a,{legend:o("rate"),defaultValue:a,min:this.props.minRate,step:this.props.step,max:this.props.maxRate,onChange:this.handleRateChange},"".concat(t,"-rate")),i()(J.a,{legend:"x0",defaultValue:n,min:0,max:E()(N,a),step:this.props.step,onChange:this.handleLowerChange},"".concat(t,"-x0")),"range"===t?i()(J.a,{legend:"x1",defaultValue:r,min:0,max:E()(N,a),step:this.props.step,onChange:this.handleUpperChange}):null)}},{key:"render",value:function(){var t=this.state,e=t.rate,a=t.x0,n=t.x1,r=this.props.t;return i()(D.a,{style:z({maxWidth:1200,margin:"10px auto"},this.props.style)},void 0,i()(D.a.Header,{as:"h3"},void 0,r("exponential-distribution")),i()(D.a.Body,{},void 0,i()(C.a,{defaultActiveKey:1,id:"exponential-tabs"},void 0,i()(F.a,{eventKey:1,title:Q},void 0,i()(w.a,{},void 0,i()(O.a,{},void 0,i()(P.a,{},void 0,i()(U.a,{},void 0,this.renderInputs("smaller"),i()(q.a,{raw:"P(X \\le ".concat(X()(a,-4),") = ").concat(X()(M()(a,e),-4)),displayMode:!0}))),i()(P.a,{},void 0,i()(R.a,{domain:{x:[0,E()(N,e)]},theme:A.a.material},void 0,T,i()(j.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),i()(L.a,{samples:200,interpolation:"step",y:function(t){return t.x<=a?K()(t.x,e):0},style:{data:{opacity:.3,fill:"tomato"}}}),i()(W.a,{y:function(t){return K()(t.x,e)}}))),this.props.hideCDF?null:i()(P.a,{},void 0,i()(R.a,{theme:A.a.material},void 0,Y,i()(j.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),i()(W.a,{samples:600,y:function(t){return M()(t.x,e)},domain:{x:[0,E()(N,e)],y:[0,1.1]}}),i()(W.a,{data:[{x:a,y:0},{x:a,y:M()(a,e)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),i()(W.a,{data:[{x:0,y:M()(a,e)},{x:a,y:M()(a,e)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))),i()(F.a,{eventKey:2,title:Z},void 0,i()(w.a,{},void 0,i()(O.a,{},void 0,i()(P.a,{},void 0,i()(U.a,{},void 0,this.renderInputs("greater"),i()(q.a,{raw:"P(X > ".concat(X()(a,-4)," ) = ").concat(X()(1-M()(a,e),-4)),displayMode:!0}))),i()(P.a,{},void 0,i()(R.a,{domain:{x:[0,E()(N,e)]},theme:A.a.material},void 0,$,i()(j.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),i()(L.a,{samples:200,interpolation:"step",y:function(t){return t.x>a?K()(t.x,e):0},style:{data:{opacity:.3,fill:"tomato"}}}),i()(W.a,{y:function(t){return K()(t.x,e)}}))),this.props.hideCDF?null:i()(P.a,{},void 0,i()(R.a,{theme:A.a.material},void 0,tt,i()(j.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),i()(W.a,{samples:600,y:function(t){return M()(t.x,e)},domain:{x:[0,E()(N,e)],y:[0,1.1]}}),i()(W.a,{data:[{x:a,y:0},{x:a,y:M()(a,e)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),i()(W.a,{data:[{x:a,y:1},{x:a,y:M()(a,e)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),i()(W.a,{data:[{x:0,y:M()(a,e)},{x:a,y:M()(a,e)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))),i()(F.a,{eventKey:3,title:et},void 0,i()(w.a,{},void 0,i()(O.a,{},void 0,i()(P.a,{},void 0,i()(U.a,{},void 0,this.renderInputs("range"),n>=a?i()(q.a,{raw:"P( ".concat(X()(a,-4)," \\le X \\le ").concat(X()(n,-4)," ) = ").concat(X()(M()(n,e)-M()(a,e),-4)),displayMode:!0}):i()(k.a,{variant:"warning"},void 0,r("lower-bound-smaller-equal-upper-bound")))),i()(P.a,{},void 0,i()(R.a,{domain:{x:[0,E()(N,e)]},theme:A.a.material},void 0,at,i()(j.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),i()(L.a,{samples:200,interpolation:"step",y:function(t){return t.x>=a&&t.x<=n?K()(t.x,e):0},style:{data:{opacity:.3,fill:"tomato"}}}),i()(W.a,{y:function(t){return K()(t.x,e)}}))),this.props.hideCDF?null:i()(P.a,{},void 0,i()(R.a,{theme:A.a.material},void 0,nt,i()(j.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),i()(W.a,{samples:600,y:function(t){return M()(t.x,e)},domain:{x:[0,E()(N,e)],y:[0,1.1]}}),i()(W.a,{data:[{x:n,y:M()(a,e)},{x:n,y:M()(n,e)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),i()(W.a,{data:[{x:a,y:M()(a,e)},{x:n,y:M()(a,e)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))))))}}]),a}(b.Component);it.defaultProps={hideCDF:!1,maxRate:10,minRate:.001,step:.01,style:{}},e.default=Object(g.a)("LearnDistribution")(it)}}]);