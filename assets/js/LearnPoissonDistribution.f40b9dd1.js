/*! For license information please see LearnPoissonDistribution.f40b9dd1.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[609],{2632:function(t,a,e){"use strict";var n=e(3725);t.exports=n},2738:function(t,a,e){"use strict";var n=e(425),r=e(4992);n(r,"factory",e(4993)),t.exports=r},3712:function(t,a,e){"use strict";var n=e(425),r=e(3713);n(r,"factory",e(3714)),t.exports=r},3713:function(t,a,e){"use strict";var n=e(419);t.exports=function(t,a){return n(t)||n(a)?NaN:t===a?1:0}},3714:function(t,a,e){"use strict";var n=e(472),r=e(419);t.exports=function(t){return r(t)?n(NaN):function(a){if(r(a))return NaN;return a===t?1:0}}},3725:function(t,a,e){"use strict";var n=e(3726),r=e(674);t.exports=function(t){return n(t)?NaN:r(t+1)}},3726:function(t,a,e){"use strict";var n=e(3727);t.exports=n},3727:function(t,a,e){"use strict";var n=e(457);t.exports=function(t){return n(t)===t&&t<0}},4133:function(t,a,e){"use strict";var n,r=e(2738);n={left:function(t,a,e){for(;;){if(0===t||r(t-1,e)<a)return t;t-=1}},right:function(t,a,e){for(;;)if(r(t+=1,e)>=a)return t}},t.exports=n},4989:function(t,a,e){"use strict";var n=e(425),r=e(4990);n(r,"factory",e(4991)),t.exports=r},4990:function(t,a,e){"use strict";var n=e(872),r=e(2632),i=e(419),o=e(449),s=e(451),c=e(428);t.exports=function(t,a){var e;return i(t)||i(a)||a<0?NaN:0===a?0===t?1:0:n(t)&&t!==c?(e=t*s(a)-a-r(t),o(e)):0}},4991:function(t,a,e){"use strict";var n=e(872),r=e(472),i=e(2632),o=e(3712).factory,s=e(419),c=e(449),d=e(451),u=e(428);t.exports=function(t){return s(t)||t<0?r(NaN):0===t?o(0):function(a){var e;if(s(a))return NaN;if(n(a)&&a!==u)return e=a*d(t)-t-i(a),c(e);return 0}}},4992:function(t,a,e){"use strict";var n=e(796),r=e(419),i=e(457),o=e(428);t.exports=function(t,a){return r(t)||r(a)||a<0?NaN:t<0?0:0===a||t===o?1:n(a,i(t)+1,!0,!0)}},4993:function(t,a,e){"use strict";var n=e(472),r=e(1114).factory,i=e(796),o=e(419),s=e(457),c=e(428);t.exports=function(t){return o(t)||t<0?n(NaN):0===t?r(0):function(a){if(o(a))return NaN;if(a<0)return 0;if(a===c)return 1;return i(t,s(a)+1,!0,!0)}}},4994:function(t,a,e){"use strict";var n=e(425),r=e(4995);n(r,"factory",e(4996)),t.exports=r},4995:function(t,a,e){"use strict";var n=e(692),r=e(419),i=e(537),o=e(432),s=e(2738),c=e(820),d=e(428),u=e(4133);t.exports=function(t,a){var e,l,f,p;return r(a)||a<0||r(t)||t<0||t>1?NaN:0===a||0===t?0:1===t?d:(e=1/(f=o(a)),p=t<.5?-n(2*t)*c:n(2*(1-t))*c,l=i(a+f*(p+e*(p*p-1)/6)),s(l,a)>=t?u.left(l,t,a):u.right(l,t,a))}},4996:function(t,a,e){"use strict";var n=e(472),r=e(1395).factory,i=e(692),o=e(419),s=e(537),c=e(432),d=e(2738),u=e(820),l=e(428),f=e(4133);t.exports=function(t){var a,e;return o(t)||t<0?n(NaN):0===t?r(0):(e=c(t),a=1/e,function(n){var r,c;if(o(n)||n<0||n>1)return NaN;if(0===n)return 0;if(1===n)return l;c=n<.5?-i(2*n)*u:i(2*(1-n))*u;return r=s(t+e*(c+a*(c*c-1)/6)),d(r,t)>=n?f.left(r,n,t):f.right(r,n,t)})}},6509:function(t,a,e){"use strict";e.r(a);e(438),e(434),e(453),e(452),e(437),e(436),e(423),e(420);var n=e(407),r=e.n(n),i=e(414),o=e.n(i),s=e(415),c=e.n(s),d=e(424),u=e.n(d),l=e(417),f=e.n(l),p=e(418),v=e.n(p),x=e(416),h=e.n(x),y=e(412),m=e.n(y),b=e(0),g=(e(404),e(4096)),w=e(454),N=e(466),k=e(614),P=e(584),O=e(483),C=e(467),F=e(494),L=e(6591),j=e(6573),A=e(4612),D=e(6448),X=e(805),R=e(474),W=e.n(R),M=e(654),S=e.n(M),K=e(4989),V=e.n(K),_=e(2738),I=e.n(_),E=e(4994),J=e.n(E),U=e(575),q=e(489),B=e(524),H=e(495),z=e(421);function G(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function Q(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?G(Object(e),!0).forEach((function(a){m()(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):G(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function T(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=h()(t);if(a){var r=h()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return v()(this,e)}}Object(z.a)("LearnDistribution");var Y=.999,Z=r()(H.a,{raw:"P(X = x_0)"}),$=r()(H.a,{raw:"X"}),tt=r()(H.a,{raw:"\\lambda"}),at=r()(L.a,{dependentAxis:!0}),et=r()(L.a,{dependentAxis:!0}),nt=r()(H.a,{raw:"P(X \\le x_0)"}),rt=r()(L.a,{dependentAxis:!0}),it=r()(L.a,{dependentAxis:!0}),ot=r()(H.a,{raw:"P(X > x_0)"}),st=r()(L.a,{dependentAxis:!0}),ct=r()(L.a,{dependentAxis:!0}),dt=r()(H.a,{raw:"P( x_0 \\le X \\le x_1)"}),ut=r()(L.a,{dependentAxis:!0}),lt=r()(L.a,{dependentAxis:!0}),ft=function(t){f()(e,t);var a=T(e);function e(t){var n;o()(this,e),n=a.call(this,t),m()(u()(n),"handleRateChange",(function(t){for(var a=S()(0,J()(Y,t)+1,1),e=new Array(a.length),r=0;r<a.length;r++)e[r]={x:a[r],y:V()(a[r],t)};n.setState({data:e,rate:t})})),m()(u()(n),"handleLowerChange",(function(t){n.setState({x0:t})})),m()(u()(n),"handleUpperChange",(function(t){n.setState({x1:t})}));for(var r=S()(0,J()(Y,1),1),i=new Array(r.length),s=0;s<r.length;s++)i[s]={x:r[s],y:V()(r[s],1)};return n.state={rate:1,x0:0,x1:1,data:i},n}return c()(e,[{key:"renderInputs",value:function(t){var a=this.props.t;return r()(b.Fragment,{},void 0,r()(U.a,{legend:a("rate"),defaultValue:this.state.rate,min:1e-12,step:this.props.step,max:99,onChange:this.handleRateChange},"".concat(t,"-rate")),r()(U.a,{legend:"x0",defaultValue:this.state.x0,min:0,max:J()(Y,this.state.rate),step:this.props.step,onChange:this.handleLowerChange},"".concat(t,"-x0")),"range"===t?r()(U.a,{legend:"x1",defaultValue:this.state.x1,min:0,max:J()(Y,this.state.rate),step:this.props.step,onChange:this.handleUpperChange}):null)}},{key:"render",value:function(){var t=this,a=this.state,e=a.x0,n=a.x1,i=a.rate,o=this.props.t;return r()(N.a,{style:Q({maxWidth:1200,margin:"10px auto"},this.props.style)},void 0,r()(N.a.Header,{as:"h3"},void 0,o("poisson-distribution")),r()(N.a.Body,{},void 0,r()(k.a,{defaultActiveKey:0,id:"poisson-tabs"},void 0,r()(P.a,{eventKey:0,title:Z},void 0,r()(O.a,{},void 0,r()(C.a,{},void 0,r()(F.a,{md:5},void 0,r()(B.a,{title:o("poisson-probabilities")},void 0,r()("p",{},void 0,o("let")," ",$," ",o("number-of-occurrences")),r()("span",{},void 0,o("rate-parameter")),r()(q.b,{inline:!0,legend:tt,defaultValue:1,step:.01,max:99,min:0,onChange:this.handleRateChange}),r()("span",{},void 0,o("we-get")),r()(H.a,{raw:"P(X=x)= \\Large \\frac{".concat(i,"^x e^{-").concat(i,"}}{x!}"),displayMode:!0}),r()("span",{},void 0,o("evaluated-at")),r()(q.b,{inline:!0,legend:"x",defaultValue:1,step:1,max:J()(Y,i)+1,min:0,onChange:this.handleLowerChange})," ",r()("span",{},void 0,o("we-get")),r()(H.a,{raw:"P(X=".concat(e,")= \\Large \\frac{").concat(i,"^").concat(e," e^{-").concat(i,"}}{").concat(e,"!} = ").concat(V()(e,i).toFixed(4)),displayMode:!0}))),r()(F.a,{md:7},void 0,r()(B.a,{header:"Probability Plot"},void 0,r()(C.a,{},void 0,r()(F.a,{md:6},void 0,r()(j.a,{theme:A.a.material},void 0,at,r()(L.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(D.a,{data:this.state.data,style:{data:{fill:function(t){return t.datum.x===e?"tomato":"steelblue"}}}}))),r()(F.a,{md:6},void 0,r()(j.a,{theme:A.a.material},void 0,et,r()(L.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),r()(X.a,{samples:600,y:function(t){return I()(t.x,i)},domain:{x:[0,J()(Y,i)+1],y:[0,1.1]}}),r()(X.a,{data:[{x:e,y:0},{x:e,y:I()(e,i)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),r()(X.a,{data:[{x:0,y:I()(e,i)},{x:e,y:I()(e,i)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),r()(P.a,{eventKey:1,title:nt},void 0,r()(O.a,{},void 0,r()(C.a,{},void 0,r()(F.a,{md:4},void 0,r()(B.a,{},void 0,this.renderInputs("smaller"),r()(H.a,{raw:"P(X \\le ".concat(W()(e,-4),") = ").concat(W()(I()(e,i),-4))}))),r()(F.a,{md:8},void 0,r()(O.a,{},void 0,r()(C.a,{},void 0,r()(F.a,{md:6},void 0,r()(j.a,{domain:{x:[0,J()(Y,this.state.rate)+2]},theme:A.a.material},void 0,rt,r()(L.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(D.a,{data:this.state.data,style:{data:{fill:function(a){return a.datum.x<=t.state.x0?"tomato":"steelblue"}}}}))),r()(F.a,{md:6},void 0,r()(j.a,{theme:A.a.material},void 0,it,r()(L.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(X.a,{samples:600,y:function(a){return I()(a.x,t.state.rate)},domain:{x:[0,J()(Y,this.state.rate)+1],y:[0,1.1]}}),r()(X.a,{data:[{x:e,y:0},{x:e,y:I()(e,this.state.rate)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),r()(X.a,{data:[{x:0,y:I()(e,this.state.rate)},{x:e,y:I()(e,this.state.rate)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),r()(P.a,{eventKey:2,title:ot},void 0,r()(O.a,{},void 0,r()(C.a,{},void 0,r()(F.a,{md:4},void 0,r()(B.a,{},void 0,this.renderInputs("greater"),r()(H.a,{raw:"P(X > ".concat(W()(e,-4),") = ").concat(W()(1-I()(e,i),-4))}))),r()(F.a,{md:8},void 0,r()(C.a,{},void 0,r()(F.a,{md:6},void 0,r()(j.a,{domain:{x:[0,J()(Y,i)+2]},theme:A.a.material},void 0,st,r()(L.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(D.a,{data:this.state.data,style:{data:{fill:function(a){return a.datum.x>=t.state.x0?"tomato":"steelblue"}}}}))),r()(F.a,{md:6},void 0,r()(j.a,{theme:A.a.material},void 0,ct,r()(L.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(X.a,{samples:600,y:function(t){return I()(t.x,i)},domain:{x:[0,J()(Y,i)+1],y:[0,1.1]}}),r()(X.a,{data:[{x:e,y:0},{x:e,y:I()(e,i)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),r()(X.a,{data:[{x:0,y:I()(e,i)},{x:e,y:I()(e,i)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}})))))))),r()(P.a,{eventKey:3,title:dt},void 0,r()(O.a,{},void 0,r()(C.a,{},void 0,r()(F.a,{md:4},void 0,r()(B.a,{},void 0,this.renderInputs("range"),n>=e?r()(H.a,{raw:"P( ".concat(W()(e,-4)," \\le X \\le ").concat(W()(n,-4),") = ").concat(W()(I()(n,i)-I()(e-1,i),-4))}):r()(w.a,{variant:"warning"},void 0,o("lower-bound-smaller-equal-upper-bound")))),r()(F.a,{md:8},void 0,r()(C.a,{},void 0,r()(F.a,{md:6},void 0,r()(j.a,{domain:{x:[0,J()(Y,i)+2]},theme:A.a.material},void 0,ut,r()(L.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(D.a,{data:this.state.data,style:{data:{fill:function(a){return t.state.x0<=a.datum.x&&a.datum.x<=t.state.x1?"tomato":"steelblue"}}}}))),r()(F.a,{md:6},void 0,r()(j.a,{theme:A.a.material},void 0,lt,r()(L.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),r()(X.a,{samples:600,y:function(t){return I()(t.x,i)},domain:{x:[0,J()(Y,i)+1],y:[0,1.1]}})))))))))))}}]),e}(b.Component);ft.defaultProps={step:.1,style:{}},a.default=Object(g.a)("LearnDistribution")(ft)}}]);