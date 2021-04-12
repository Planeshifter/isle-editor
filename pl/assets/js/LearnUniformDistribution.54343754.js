(window.webpackJsonp=window.webpackJsonp||[]).push([[643],{6390:function(t,e,a){"use strict";a.r(e);a(421),a(437),a(433),a(430),a(438),a(439);var n,i,r,o,s,l,c,d,u,p=a(407),y=a.n(p),x=a(414),f=a.n(x),h=a(416),m=a.n(h),v=a(424),b=a.n(v),g=a(418),w=a.n(g),C=a(419),O=a.n(C),P=a(417),k=a.n(P),F=a(412),D=a.n(F),j=a(0),A=(a(404),a(4101)),L=a(506),M=a(491),S=a(478),X=a(464),R=a(587),I=a(569),K=a(6451),V=a(4612),W=a(6470),_=a(907),B=a(6460),E=a(475),J=a.n(E),U=a(1433),H=a.n(U),q=a(2769),z=a.n(q),G=a(488),N=a(581),Q=a(518),T=a(493),Y=a(420);function Z(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function $(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(a),!0).forEach((function(e){D()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Z(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function tt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=k()(t);if(e){var i=k()(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return O()(this,a)}}Object(Y.a)("LearnDistribution");var et={data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}},at={data:{opacity:.3,fill:"tomato"}},nt=function(t){w()(a,t);var e=tt(a);function a(t){var n;f()(this,a),n=e.call(this,t),D()(b()(n),"handleMinChange",(function(t){n.setState({min:t})})),D()(b()(n),"handleMaxChange",(function(t){n.setState({max:t})})),D()(b()(n),"handleLowerChange",(function(t){n.setState({x0:t})})),D()(b()(n),"handleUpperChange",(function(t){n.setState({x1:t})}));return n.state={min:0,max:1,x0:0,x1:1},n}return m()(a,[{key:"renderInputs",value:function(t){var e=this.state,a=e.min,n=e.max,i=e.x0,r=e.x1,o=this.props.t;return y()(j.Fragment,{},void 0,y()(G.b,{legend:o("minimum"),defaultValue:a,max:n-.01,step:.1,onChange:this.handleMinChange},"".concat(t,"-min")),y()(G.b,{legend:o("maximum"),defaultValue:n,step:.1,onChange:this.handleMaxChange},"".concat(t,"-max")),y()(N.a,{legend:"x0",defaultValue:i,min:a-1,max:n+1,step:this.props.step,onChange:this.handleLowerChange},"".concat(t,"-x0")),"range"===t?y()(N.a,{legend:"x1",defaultValue:r,min:a-1,max:n+1,step:this.props.step,onChange:this.handleUpperChange},"".concat(t,"-x1")):null)}},{key:"render",value:function(){var t=this.state,e=t.min,a=t.max,p=t.x0,x=t.x1,f=this.props.t,h=H()(e,e,a);return y()(X.a,{style:$({maxWidth:1200,margin:"10px auto"},this.props.style)},void 0,y()(X.a.Header,{as:"h3"},void 0,f("uniform-distribution")),y()(X.a.Body,{},void 0,y()(R.a,{defaultActiveKey:1,id:"uniform-tabs"},void 0,y()(I.a,{eventKey:1,title:n||(n=y()(T.a,{raw:"P(X \\le x_0)"}))},void 0,y()(L.a,{},void 0,y()(S.a,{},void 0,y()(M.a,{},void 0,y()(Q.a,{},void 0,this.renderInputs("smaller"),y()(T.a,{raw:"P(X \\le ".concat(J()(p,-4),") = ").concat(J()(z()(p,e,a),-4)),displayMode:!0}))),y()(M.a,{},void 0,y()(K.a,{domain:{x:[e-1,a+1],y:[0,h+.1]},theme:V.a.material},void 0,i||(i=y()(W.a,{dependentAxis:!0})),y()(W.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),y()(_.a,{samples:200,interpolation:"step",y:function(t){return t.x<=p?H()(t.x,e,a):0},style:at}),y()(B.a,{data:[[e,0],[e,h],[a,h],[a,0]],x:function(t){return t[0]},y:function(t){return t[1]}}))),this.props.hideCDF?null:y()(M.a,{},void 0,y()(K.a,{theme:V.a.material},void 0,r||(r=y()(W.a,{dependentAxis:!0})),y()(W.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),y()(B.a,{samples:200,y:function(t){return z()(t.x,e,a)},domain:{x:[e-1,a+1],y:[0,1.1]}}),y()(B.a,{data:[{x:p,y:0},{x:p,y:z()(p,e,a)}],style:et}),y()(B.a,{data:[{x:0,y:z()(p,e,a)},{x:p,y:z()(p,e,a)}],style:et})))))),y()(I.a,{eventKey:2,title:o||(o=y()(T.a,{raw:"P(X > x_0)"}))},void 0,y()(L.a,{},void 0,y()(S.a,{},void 0,y()(M.a,{},void 0,y()(Q.a,{},void 0,this.renderInputs("greater"),y()(T.a,{raw:"P(X > ".concat(J()(p,-4),") = ").concat(J()(1-z()(p,e,a),-4)),displayMode:!0}))),y()(M.a,{},void 0,y()(K.a,{domain:{x:[e-1,a+1],y:[0,h+.1]},theme:V.a.material},void 0,s||(s=y()(W.a,{dependentAxis:!0})),y()(W.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),y()(_.a,{samples:200,interpolation:"step",y:function(t){return t.x>p?H()(t.x,e,a):0},style:at}),y()(B.a,{data:[[e,0],[e,h],[a,h],[a,0]],x:function(t){return t[0]},y:function(t){return t[1]}}))),this.props.hideCDF?null:y()(M.a,{},void 0,y()(K.a,{theme:V.a.material},void 0,l||(l=y()(W.a,{dependentAxis:!0})),y()(W.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),y()(B.a,{samples:200,y:function(t){return z()(t.x,e,a)},domain:{x:[e-1,a+1],y:[0,1.1]}}),y()(B.a,{data:[{x:p,y:0},{x:p,y:z()(p,e,a)}],style:et}),y()(B.a,{data:[{x:p,y:1},{x:p,y:z()(p,e,a)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),y()(B.a,{data:[{x:0,y:z()(p,e,a)},{x:p,y:z()(p,e,a)}],style:et})))))),y()(I.a,{eventKey:3,title:c||(c=y()(T.a,{raw:"P( x_0 \\le X \\le x_1 )"}))},void 0,y()(L.a,{},void 0,y()(S.a,{},void 0,y()(M.a,{},void 0,y()(Q.a,{},void 0,this.renderInputs("range"),y()(T.a,{raw:"P( ".concat(J()(p,-4)," \\le X \\le ").concat(J()(x,-4),") = ").concat(J()(z()(x,e,a)-z()(p,e,a),-4)),displayMode:!0}))),y()(M.a,{},void 0,y()(K.a,{domain:{x:[e-1,a+1],y:[0,h+.1]},theme:V.a.material},void 0,d||(d=y()(W.a,{dependentAxis:!0})),y()(W.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),y()(_.a,{samples:200,interpolation:"step",y:function(t){return t.x>=p&&t.x<=x?H()(t.x,e,a):0},style:at}),y()(B.a,{data:[[e,0],[e,h],[a,h],[a,0]],x:function(t){return t[0]},y:function(t){return t[1]}}))),this.props.hideCDF?null:y()(M.a,{},void 0,y()(K.a,{theme:V.a.material},void 0,u||(u=y()(W.a,{dependentAxis:!0})),y()(W.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),y()(B.a,{samples:200,y:function(t){return z()(t.x,e,a)},domain:{x:[e-1,a+1],y:[0,1.1]}}),y()(B.a,{data:[{x:x,y:z()(p,e,a)},{x:x,y:z()(x,e,a)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),y()(B.a,{data:[{x:p,y:z()(p,e,a)},{x:x,y:z()(p,e,a)}],style:et})))))))))}}]),a}(j.Component);nt.defaultProps={hideCDF:!1,step:.01,style:{}},e.default=Object(A.a)("LearnDistribution")(nt)}}]);