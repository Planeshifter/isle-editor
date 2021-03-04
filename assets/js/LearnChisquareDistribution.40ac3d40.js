/*! For license information please see LearnChisquareDistribution.40ac3d40.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[507],{4916:function(t,e,a){"use strict";var n=a(423),r=a(4917);n(r,"factory",a(4921)),t.exports=r},4917:function(t,e,a){"use strict";var n=a(3814);t.exports=function(t,e){return n(t,e/2,.5)}},4921:function(t,e,a){"use strict";var n=a(3814).factory;t.exports=function(t){return n(t/2,.5)}},4922:function(t,e,a){"use strict";var n=a(423),r=a(4923);n(r,"factory",a(4926)),t.exports=r},4923:function(t,e,a){"use strict";var n=a(3815);t.exports=function(t,e){return n(t,e/2,.5)}},4926:function(t,e,a){"use strict";var n=a(3815).factory;t.exports=function(t){return n(t/2,.5)}},6444:function(t,e,a){"use strict";a.r(e);a(438),a(436),a(441),a(440),a(437),a(427),a(416),a(421);var n=a(407),r=a.n(n),i=a(414),o=a.n(i),s=a(415),c=a.n(s),d=a(425),l=a.n(d),u=a(418),p=a.n(u),y=a(419),f=a.n(y),x=a(417),h=a.n(x),v=a(412),m=a.n(v),b=a(0),g=(a(404),a(4172)),k=a(454),w=a(509),D=a(476),F=a(493),O=a(465),P=a(591),j=a(568),C=a(6534),A=a(6515),L=a(4680),W=a(916),S=a(6524),X=a(473),R=a.n(X),I=a(4916),K=a.n(I),_=a(1550),q=a.n(_),M=a(4922),V=a.n(M),E=a(582),J=a(534),U=a(494),B=a(422);function H(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function z(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?H(Object(a),!0).forEach((function(e){m()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):H(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function G(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=h()(t);if(e){var r=h()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return f()(this,a)}}Object(B.a)("LearnDistribution");var N=.99999,Q=r()(U.a,{raw:"P(X \\le x_0)"}),T=r()(C.a,{dependentAxis:!0}),Y=r()(C.a,{dependentAxis:!0}),Z=r()(U.a,{raw:"P(X > x_0)"}),$=r()(C.a,{dependentAxis:!0}),tt=r()(C.a,{dependentAxis:!0}),et=r()(U.a,{raw:"P( x_0 \\le X \\le x_1)"}),at=r()(C.a,{dependentAxis:!0}),nt=r()(C.a,{dependentAxis:!0}),rt=function(t){p()(a,t);var e=G(a);function a(t){var n;return o()(this,a),n=e.call(this,t),m()(l()(n),"handleDFChange",(function(t){n.setState({df:t})})),m()(l()(n),"handleLowerChange",(function(t){n.setState({x0:t})})),m()(l()(n),"handleUpperChange",(function(t){n.setState({x1:t})})),n.state={df:1,x0:0,x1:1},n}return c()(a,[{key:"renderInputs",value:function(t){var e=this.state,a=e.df,n=e.x0,i=e.x1;return r()(b.Fragment,{},void 0,r()(E.a,{legend:this.props.t("degrees-of-freedom"),defaultValue:a,min:this.props.minDF,step:this.props.step,max:this.props.maxDF,onChange:this.handleDFChange},"".concat(t,"-df")),r()(E.a,{legend:"x0",defaultValue:n,min:0,max:V()(N,a),step:this.props.step,onChange:this.handleLowerChange},"".concat(t,"-x0")),"range"===t?r()(E.a,{legend:"x1",defaultValue:i,min:0,max:V()(N,a),step:this.props.step,onChange:this.handleUpperChange}):null)}},{key:"render",value:function(){var t=this.state,e=t.df,a=t.x0,n=t.x1;return r()(O.a,{style:z({maxWidth:1200,margin:"10px auto"},this.props.style)},void 0,r()(O.a.Header,{as:"h3"},void 0,this.props.t("chi-squared-distribution")),r()(O.a.Body,{},void 0,r()(P.a,{defaultActiveKey:1,id:"chisquared-tabs"},void 0,r()(j.a,{eventKey:1,title:Q},void 0,r()(w.a,{},void 0,r()(D.a,{},void 0,r()(F.a,{},void 0,r()(J.a,{},void 0,this.renderInputs("smaller"),r()(U.a,{raw:"P(X \\le ".concat(R()(a,-4),") = ").concat(R()(q()(a,e),-4)),displayMode:!0}))),r()(F.a,{},void 0,r()(A.a,{domain:{x:[.001,V()(N,e)],y:[0,.25]},theme:L.a.material},void 0,T,r()(C.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),r()(W.a,{samples:100,interpolation:"step",y:function(t){return t.x<=a?K()(t.x,e):0},style:{data:{opacity:.3,fill:"tomato"}}}),r()(S.a,{samples:150,y:function(t){return K()(t.x,e)}}))),r()(F.a,{},void 0,r()(A.a,{theme:L.a.material},void 0,Y,r()(C.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(S.a,{samples:100,y:function(t){return q()(t.x,e)},domain:{x:[0,V()(N,e)],y:[0,1.1]}}),r()(S.a,{data:[{x:a,y:0},{x:a,y:q()(a,e)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),r()(S.a,{data:[{x:0,y:q()(a,e)},{x:a,y:q()(a,e)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))),r()(j.a,{eventKey:2,title:Z},void 0,r()(w.a,{},void 0,r()(D.a,{},void 0,r()(F.a,{},void 0,r()(J.a,{},void 0,this.renderInputs("greater"),r()(U.a,{raw:"P(X > ".concat(R()(a,-4)," ) = ").concat(R()(1-q()(a,e),-4)),displayMode:!0}))),r()(F.a,{},void 0,r()(A.a,{domain:{x:[.001,V()(N,e)],y:[0,.25]},theme:L.a.material},void 0,$,r()(C.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),r()(W.a,{samples:100,interpolation:"step",y:function(t){return t.x>a?K()(t.x,e):0},style:{data:{opacity:.3,fill:"tomato"}}}),r()(S.a,{y:function(t){return K()(t.x,e)},samples:150}))),r()(F.a,{},void 0,r()(A.a,{theme:L.a.material},void 0,tt,r()(C.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(S.a,{samples:100,y:function(t){return q()(t.x,e)},domain:{x:[0,V()(N,e)],y:[0,1.1]}}),r()(S.a,{data:[{x:a,y:0},{x:a,y:q()(a,e)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),r()(S.a,{data:[{x:a,y:1},{x:a,y:q()(a,e)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),r()(S.a,{data:[{x:0,y:q()(a,e)},{x:a,y:q()(a,e)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))),r()(j.a,{eventKey:3,title:et},void 0,r()(w.a,{},void 0,r()(D.a,{},void 0,r()(F.a,{},void 0,r()(J.a,{},void 0,this.renderInputs("range"),n>=a?r()(U.a,{raw:"P( ".concat(R()(a,-4)," \\le X \\le ").concat(R()(n,-4)," ) = ").concat(R()(q()(n,e)-q()(a,e),-4)),displayMode:!0}):r()(k.a,{variant:"warning"},void 0,this.props.t("lower-bound-smaller-equal-upper-bound")))),r()(F.a,{},void 0,r()(A.a,{domain:{x:[.001,V()(N,e)],y:[0,.25]},theme:L.a.material},void 0,at,r()(C.a,{label:"PDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),r()(W.a,{samples:100,interpolation:"step",y:function(t){return t.x>=a&&t.x<=n?K()(t.x,e):0},style:{data:{opacity:.3,fill:"tomato"}}}),r()(S.a,{samples:150,y:function(t){return K()(t.x,e)}}))),r()(F.a,{},void 0,r()(A.a,{theme:L.a.material},void 0,nt,r()(C.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(S.a,{samples:600,y:function(t){return q()(t.x,e)},domain:{x:[0,V()(N,e)],y:[0,1.1]}}),r()(S.a,{data:[{x:n,y:q()(a,e)},{x:n,y:q()(n,e)}],style:{data:{stroke:"steelblue",strokeWidth:1,opacity:.5}}}),r()(S.a,{data:[{x:a,y:q()(a,e)},{x:n,y:q()(a,e)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))))))}}]),a}(b.Component);rt.defaultProps={maxDF:50,minDF:1,step:.01,style:{}},e.default=Object(g.a)("LearnDistribution")(rt)}}]);