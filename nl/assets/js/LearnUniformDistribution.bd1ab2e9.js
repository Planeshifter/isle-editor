(window.webpackJsonp=window.webpackJsonp||[]).push([[637],{6511:function(t,e,a){"use strict";a.r(e);a(438),a(434),a(453),a(452),a(437),a(436),a(423),a(420);var n=a(407),i=a.n(n),r=a(414),o=a.n(r),s=a(415),c=a.n(s),d=a(424),l=a.n(d),u=a(417),p=a.n(u),y=a(418),x=a.n(y),f=a(416),h=a.n(f),m=a(412),v=a.n(m),b=a(0),g=(a(404),a(4096)),w=a(483),C=a(494),O=a(467),P=a(466),D=a(614),k=a(584),F=a(6591),j=a(6573),A=a(4612),L=a(924),M=a(805),S=a(474),X=a.n(S),R=a(1393),I=a.n(R),K=a(2739),V=a.n(K),W=a(489),_=a(575),E=a(524),J=a(495),U=a(421);function B(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function H(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?B(Object(a),!0).forEach((function(e){v()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):B(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function q(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=h()(t);if(e){var i=h()(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return x()(this,a)}}Object(U.a)("LearnDistribution");var z={data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}},G={data:{opacity:.3,fill:"tomato"}},N=i()(J.a,{raw:"P(X \\le x_0)"}),Q=i()(F.a,{dependentAxis:!0}),T=i()(F.a,{dependentAxis:!0}),Y=i()(J.a,{raw:"P(X > x_0)"}),Z=i()(F.a,{dependentAxis:!0}),$=i()(F.a,{dependentAxis:!0}),tt=i()(J.a,{raw:"P( x_0 \\le X \\le x_1 )"}),et=i()(F.a,{dependentAxis:!0}),at=i()(F.a,{dependentAxis:!0}),nt=function(t){p()(a,t);var e=q(a);function a(t){var n;o()(this,a),n=e.call(this,t),v()(l()(n),"handleMinChange",(function(t){n.setState({min:t})})),v()(l()(n),"handleMaxChange",(function(t){n.setState({max:t})})),v()(l()(n),"handleLowerChange",(function(t){n.setState({x0:t})})),v()(l()(n),"handleUpperChange",(function(t){n.setState({x1:t})}));return n.state={min:0,max:1,x0:0,x1:1},n}return c()(a,[{key:"renderInputs",value:function(t){var e=this.state,a=e.min,n=e.max,r=e.x0,o=e.x1,s=this.props.t;return i()(b.Fragment,{},void 0,i()(W.b,{legend:s("minimum"),defaultValue:a,max:n-.01,step:.1,onChange:this.handleMinChange},"".concat(t,"-min")),i()(W.b,{legend:s("maximum"),defaultValue:n,step:.1,onChange:this.handleMaxChange},"".concat(t,"-max")),i()(_.a,{legend:"x0",defaultValue:r,min:a-1,max:n+1,step:this.props.step,onChange:this.handleLowerChange},"".concat(t,"-x0")),"range"===t?i()(_.a,{legend:"x1",defaultValue:o,min:a-1,max:n+1,step:this.props.step,onChange:this.handleUpperChange},"".concat(t,"-x1")):null)}},{key:"render",value:function(){var t=this.state,e=t.min,a=t.max,n=t.x0,r=t.x1,o=this.props.t,s=I()(e,e,a);return i()(P.a,{style:H({maxWidth:1200,margin:"10px auto"},this.props.style)},void 0,i()(P.a.Header,{as:"h3"},void 0,o("uniform-distribution")),i()(P.a.Body,{},void 0,i()(D.a,{defaultActiveKey:1,id:"uniform-tabs"},void 0,i()(k.a,{eventKey:1,title:N},void 0,i()(w.a,{},void 0,i()(O.a,{},void 0,i()(C.a,{},void 0,i()(E.a,{},void 0,this.renderInputs("smaller"),i()(J.a,{raw:"P(X \\le ".concat(X()(n,-4),") = ").concat(X()(V()(n,e,a),-4)),displayMode:!0}))),i()(C.a,{},void 0,i()(j.a,{domain:{x:[e-1,a+1],y:[0,s+.1]},theme:A.a.material},void 0,Q,i()(F.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),i()(L.a,{samples:200,interpolation:"step",y:function(t){return t.x<=n?I()(t.x,e,a):0},style:G}),i()(M.a,{data:[[e,0],[e,s],[a,s],[a,0]],x:function(t){return t[0]},y:function(t){return t[1]}}))),this.props.hideCDF?null:i()(C.a,{},void 0,i()(j.a,{theme:A.a.material},void 0,T,i()(F.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),i()(M.a,{samples:200,y:function(t){return V()(t.x,e,a)},domain:{x:[e-1,a+1],y:[0,1.1]}}),i()(M.a,{data:[{x:n,y:0},{x:n,y:V()(n,e,a)}],style:z}),i()(M.a,{data:[{x:0,y:V()(n,e,a)},{x:n,y:V()(n,e,a)}],style:z})))))),i()(k.a,{eventKey:2,title:Y},void 0,i()(w.a,{},void 0,i()(O.a,{},void 0,i()(C.a,{},void 0,i()(E.a,{},void 0,this.renderInputs("greater"),i()(J.a,{raw:"P(X > ".concat(X()(n,-4),") = ").concat(X()(1-V()(n,e,a),-4)),displayMode:!0}))),i()(C.a,{},void 0,i()(j.a,{domain:{x:[e-1,a+1],y:[0,s+.1]},theme:A.a.material},void 0,Z,i()(F.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),i()(L.a,{samples:200,interpolation:"step",y:function(t){return t.x>n?I()(t.x,e,a):0},style:G}),i()(M.a,{data:[[e,0],[e,s],[a,s],[a,0]],x:function(t){return t[0]},y:function(t){return t[1]}}))),this.props.hideCDF?null:i()(C.a,{},void 0,i()(j.a,{theme:A.a.material},void 0,$,i()(F.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),i()(M.a,{samples:200,y:function(t){return V()(t.x,e,a)},domain:{x:[e-1,a+1],y:[0,1.1]}}),i()(M.a,{data:[{x:n,y:0},{x:n,y:V()(n,e,a)}],style:z}),i()(M.a,{data:[{x:n,y:1},{x:n,y:V()(n,e,a)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),i()(M.a,{data:[{x:0,y:V()(n,e,a)},{x:n,y:V()(n,e,a)}],style:z})))))),i()(k.a,{eventKey:3,title:tt},void 0,i()(w.a,{},void 0,i()(O.a,{},void 0,i()(C.a,{},void 0,i()(E.a,{},void 0,this.renderInputs("range"),i()(J.a,{raw:"P( ".concat(X()(n,-4)," \\le X \\le ").concat(X()(r,-4),") = ").concat(X()(V()(r,e,a)-V()(n,e,a),-4)),displayMode:!0}))),i()(C.a,{},void 0,i()(j.a,{domain:{x:[e-1,a+1],y:[0,s+.1]},theme:A.a.material},void 0,et,i()(F.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),i()(L.a,{samples:200,interpolation:"step",y:function(t){return t.x>=n&&t.x<=r?I()(t.x,e,a):0},style:G}),i()(M.a,{data:[[e,0],[e,s],[a,s],[a,0]],x:function(t){return t[0]},y:function(t){return t[1]}}))),this.props.hideCDF?null:i()(C.a,{},void 0,i()(j.a,{theme:A.a.material},void 0,at,i()(F.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),i()(M.a,{samples:200,y:function(t){return V()(t.x,e,a)},domain:{x:[e-1,a+1],y:[0,1.1]}}),i()(M.a,{data:[{x:r,y:V()(n,e,a)},{x:r,y:V()(r,e,a)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),i()(M.a,{data:[{x:n,y:V()(n,e,a)},{x:r,y:V()(n,e,a)}],style:z})))))))))}}]),a}(b.Component);nt.defaultProps={hideCDF:!1,step:.01,style:{}},e.default=Object(g.a)("LearnDistribution")(nt)}}]);