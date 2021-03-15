/*! For license information please see LearnGeometricDistribution.e19f9db2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[568],{4966:function(t,a,e){"use strict";var n=e(425),i=e(4967);n(i,"factory",e(4968)),t.exports=i},4967:function(t,a,e){"use strict";var n=e(872),i=e(419),r=e(440);t.exports=function(t,a){return i(t)||i(a)||a<0||a>1?NaN:n(t)?a*r(1-a,t):0}},4968:function(t,a,e){"use strict";var n=e(872),i=e(472),r=e(419),o=e(440);t.exports=function(t){return r(t)||t<0||t>1?i(NaN):function(a){if(r(a))return NaN;if(n(a))return t*o(1-t,a);return 0}}},4969:function(t,a,e){"use strict";var n=e(425),i=e(4970);n(i,"factory",e(4971)),t.exports=i},4970:function(t,a,e){"use strict";var n=e(419),i=e(457),r=e(440),o=e(428);t.exports=function(t,a){return n(t)||n(a)||a<0||a>1?NaN:t<0?0:t===o?1:(t=i(t),1-r(1-a,t+1))}},4971:function(t,a,e){"use strict";var n=e(472),i=e(419),r=e(457),o=e(440),s=e(428);t.exports=function(t){return i(t)||t<0||t>1?n(NaN):function(a){if(i(a))return NaN;if(a<0)return 0;if(a===s)return 1;return a=r(a),1-o(1-t,a+1)}}},4972:function(t,a,e){"use strict";var n=e(425),i=e(4973);n(i,"factory",e(4974)),t.exports=i},4973:function(t,a,e){"use strict";var n=e(419),i=e(528),r=e(612),o=e(480),s=e(451),d=e(428);t.exports=function(t,a){return n(a)||n(t)||a<0||a>1||t<0||t>1?NaN:1===t?d:o(0,r(s(1-t)/i(-a)-(1+1e-12)))}},4974:function(t,a,e){"use strict";var n=e(472),i=e(419),r=e(528),o=e(612),s=e(480),d=e(451),c=e(428);t.exports=function(t){return i(t)||t<0||t>1?n(NaN):function(a){if(i(a)||a<0||a>1)return NaN;if(1===a)return c;return s(0,o(d(1-a)/r(-t)-(1+1e-12)))}}},6505:function(t,a,e){"use strict";e.r(a);e(438),e(434),e(453),e(452),e(437),e(436),e(423),e(420);var n=e(407),i=e.n(n),r=e(414),o=e.n(r),s=e(415),d=e.n(s),c=e(424),u=e.n(c),l=e(417),p=e.n(l),f=e(418),v=e.n(f),y=e(416),m=e.n(y),h=e(412),x=e.n(h),b=e(0),g=(e(404),e(4097)),w=e(4096),P=e(466),k=e(614),L=e(584),O=e(483),C=e(467),F=e(494),N=e(6591),D=e(6573),j=e(4612),A=e(6448),X=e(805),T=e(474),K=e.n(T),W=e(654),M=e.n(W),S=e(4966),R=e.n(S),V=e(4969),_=e.n(V),I=e(4972),E=e.n(I),J=e(575),U=e(489),B=e(524),H=e(495),q=e(421);function z(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function G(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?z(Object(e),!0).forEach((function(a){x()(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):z(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function Q(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=m()(t);if(a){var i=m()(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return v()(this,e)}}Object(q.a)("LearnDistribution");var Y=.999,Z=i()(H.a,{raw:"P(X = x_0)"}),$=i()(g.a,{i18nKey:"number-trials-until-success",ns:"LearnDistribution"},void 0,"Let ",i()(H.a,{raw:"X"})," be the number of trials until the first success."),tt=i()(g.a,{i18nKey:"number-failures-until-success",ns:"LearnDistribution"},void 0,"Let ",i()(H.a,{raw:"X"})," be the number of failures until the first success."),at=i()(N.a,{dependentAxis:!0}),et=i()(N.a,{dependentAxis:!0}),nt=i()(H.a,{raw:"P(X \\le x_0)"}),it=i()(N.a,{dependentAxis:!0}),rt=i()(N.a,{dependentAxis:!0}),ot=i()(H.a,{raw:"P(X > x_0)"}),st=i()(N.a,{dependentAxis:!0}),dt=i()(N.a,{dependentAxis:!0}),ct=i()(H.a,{raw:"P( x_0 \\le X \\le x_1)"}),ut=i()(N.a,{dependentAxis:!0}),lt=i()(N.a,{dependentAxis:!0}),pt=function(t){p()(e,t);var a=Q(e);function e(t){var n;o()(this,e),n=a.call(this,t),x()(u()(n),"handleProbChange",(function(t){for(var a=n.props.countTrials?1:0,e=M()(a,E()(Y,t),1),i=new Array(e.length),r=0;r<e.length;r++)i[r]={x:e[r],y:R()(n.props.countTrials?e[r]-1:e[r],t)};n.setState({data:i,p:t})})),x()(u()(n),"handleLowerChange",(function(t){n.setState({x0:t})})),x()(u()(n),"handleUpperChange",(function(t){n.setState({x1:t})}));for(var i=t.countTrials?1:0,r=M()(i,E()(Y,.5)+1,1),s=new Array(r.length),d=0;d<r.length;d++)s[d]={x:r[d],y:R()(t.countTrials?r[d]-1:r[d],.5)};return n.state={p:.5,x0:0,x1:1,data:s},n}return d()(e,[{key:"renderInputs",value:function(t){var a=this.props.countTrials?1:0;return i()(b.Fragment,{},void 0,i()(J.a,{legend:this.props.t("success-probability"),defaultValue:this.state.p,min:.01,step:this.props.step,max:1,onChange:this.handleProbChange},"".concat(t,"-p")),i()(J.a,{legend:"x0",defaultValue:a,min:a-1,max:E()(Y,this.state.p)+1,step:this.props.step,onChange:this.handleLowerChange},"".concat(t,"-x0")),"range"===t?i()(J.a,{legend:"x1",defaultValue:this.state.x1,min:a-1,max:E()(Y,this.state.p)+1,step:1,onChange:this.handleUpperChange}):null)}},{key:"render",value:function(){var t=this.state,a=t.x0,e=t.x1,n=t.p,r=this.props,o=r.countTrials,s=r.t,d=o?1:0;return i()(P.a,{style:G({maxWidth:1200,margin:"10px auto"},this.props.style)},void 0,i()(P.a.Header,{as:"h3"},void 0,s("geometric-distribution")),i()(P.a.Body,{},void 0,i()(k.a,{defaultActiveKey:0,id:"poisson-tabs"},void 0,i()(L.a,{eventKey:0,title:Z},void 0,i()(O.a,{},void 0,i()(C.a,{},void 0,i()(F.a,{md:5},void 0,i()(B.a,{title:s("geometric-probabilities")},void 0,i()("p",{},void 0,this.props.countTrials?$:tt),i()("span",{},void 0,s("for-success-probability")),i()(U.b,{inline:!0,legend:"p",defaultValue:.5,step:.01,max:1,min:.01,onChange:this.handleProbChange}),i()("span",{},void 0,s("we-get")),i()(H.a,{raw:"P(X=x)= \\Large \\left( 1 - ".concat(n," \\right)^{x-1} ").concat(n),displayMode:!0}),i()("span",{},void 0,s("evaluated-at")," "),i()(U.b,{inline:!0,legend:"x",defaultValue:d,step:1,max:E()(Y,n)+1,min:d,onChange:this.handleLowerChange})," ",i()("span",{},void 0,s("we-get")),i()(H.a,{raw:"P(X=".concat(a,")= \\Large \\left( 1 - ").concat(n," \\right)^{").concat(a).concat(o?"-1":"","} ").concat(n," = ").concat(R()(o?a-1:a,n).toFixed(4)),displayMode:!0}))),i()(F.a,{md:7},void 0,i()(B.a,{header:s("probability-plot")},void 0,i()(C.a,{},void 0,i()(F.a,{md:6},void 0,i()(D.a,{theme:j.a.material},void 0,at,i()(N.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),i()(A.a,{data:this.state.data,style:{data:{fill:function(t){return t.datum.x===a?"tomato":"steelblue"}}}}))),i()(F.a,{md:6},void 0,i()(D.a,{theme:j.a.material},void 0,et,i()(N.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),i()(X.a,{samples:600,y:function(t){return _()(t.x-d,n)},domain:{x:[0,E()(Y,n)+1],y:[0,1.1]}}),i()(X.a,{data:[{x:a,y:0},{x:a,y:_()(a-d,n)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),i()(X.a,{data:[{x:0,y:_()(a-d,n)},{x:a,y:_()(a-d,n)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),i()(L.a,{eventKey:1,title:nt},void 0,i()(O.a,{},void 0,i()(C.a,{},void 0,i()(F.a,{md:4},void 0,i()(B.a,{},void 0,this.renderInputs("smaller"),i()(H.a,{raw:"P(X \\le ".concat(K()(a,-4),") = ").concat(K()(_()(a-d,n),-4))}))),i()(F.a,{md:8},void 0,i()(O.a,{},void 0,i()(C.a,{},void 0,i()(F.a,{md:6},void 0,i()(D.a,{domain:{x:[0,E()(Y,n)+2]},theme:j.a.material},void 0,it,i()(N.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),i()(A.a,{data:this.state.data,style:{data:{fill:function(t){return t.datum.x<=a?"tomato":"steelblue"}}}}))),i()(F.a,{md:6},void 0,i()(D.a,{theme:j.a.material},void 0,rt,i()(N.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),i()(X.a,{samples:600,y:function(t){return _()(t.x-d,n)},domain:{x:[0,E()(Y,n)+1],y:[0,1.1]}}),i()(X.a,{data:[{x:a,y:0},{x:a,y:_()(a-d,n)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),i()(X.a,{data:[{x:0,y:_()(a-d,n)},{x:a,y:_()(a-d,n)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),i()(L.a,{eventKey:2,title:ot},void 0,i()(O.a,{},void 0,i()(C.a,{},void 0,i()(F.a,{md:4},void 0,i()(B.a,{},void 0,this.renderInputs("greater"),i()(H.a,{raw:"P(X > ".concat(K()(a,-4),") = ").concat(K()(1-_()(a-d,n),-4))}))),i()(F.a,{md:8},void 0,i()(C.a,{},void 0,i()(F.a,{md:6},void 0,i()(D.a,{domain:{x:[0,E()(Y,n)+2]},theme:j.a.material},void 0,st,i()(N.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),i()(A.a,{data:this.state.data,style:{data:{fill:function(t){return t.datum.x>a?"tomato":"steelblue"}}}}))),i()(F.a,{md:6},void 0,i()(D.a,{theme:j.a.material},void 0,dt,i()(N.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),i()(X.a,{samples:600,y:function(t){return _()(t.x-d,n)},domain:{x:[0,E()(Y,n)+1],y:[0,1.1]}}),i()(X.a,{data:[{x:a,y:0},{x:a,y:_()(a-d,n)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),i()(X.a,{data:[{x:0,y:_()(a-d,n)},{x:a,y:_()(a-d,n)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))))),i()(L.a,{eventKey:3,title:ct},void 0,i()(O.a,{},void 0,i()(C.a,{},void 0,i()(F.a,{md:4},void 0,i()(B.a,{},void 0,this.renderInputs("range"),i()(H.a,{raw:"P( ".concat(K()(a,-4)," \\le X \\le ").concat(K()(e,-4),") = ").concat(K()(_()(e-d,n)-_()(a-d-1,n),-4))}))),i()(F.a,{md:8},void 0,i()(C.a,{},void 0,i()(F.a,{md:6},void 0,i()(D.a,{domain:{x:[0,E()(Y,n)+2]},theme:j.a.material},void 0,ut,i()(N.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),i()(A.a,{data:this.state.data,style:{data:{fill:function(t){return a<=t.datum.x&&t.datum.x<=e?"tomato":"steelblue"}}}}))),i()(F.a,{md:6},void 0,i()(D.a,{theme:j.a.material},void 0,lt,i()(N.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),i()(X.a,{samples:600,y:function(t){return _()(t.x-d,n)},domain:{x:[0,E()(Y,n)+1],y:[0,1.1]}})))))))))))}}]),e}(b.Component);pt.defaultProps={countTrials:!1,step:.01,style:{}},a.default=Object(w.a)("LearnDistribution")(pt)}}]);