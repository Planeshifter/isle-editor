/*! For license information please see LearnBinomialDistribution.0a639963.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[499],{2735:function(t,e,a){"use strict";var n=a(3709);t.exports=n},3709:function(t,e,a){"use strict";var n=a(674),i=a(528),r=a(583),o=a(480),s=a(502),d=a(451),c=a(1399),u=a(460),l=a(428),p=a(3710);t.exports=function(t,e){var a,f,v;return f=s(t,e),v=o(t,e),f<0?NaN:0===f?l:v===l?u:f>=10?(a=p(f)+p(v)-p(f+v),-.5*d(v)+c+a+(f-.5)*d(f/(f+v))+v*i(-f/(f+v))):v>=10?(a=p(v)-p(f+v),n(f)+a+f-f*d(f+v)+(v-.5)*i(-f/(f+v))):d(r(f)*(r(v)/r(f+v)))}},3710:function(t,e,a){"use strict";var n=a(440),i=a(3711);t.exports=function(t){return t<10?NaN:t>=3745194030963158e291?0:t<94906265.62425156?i(2*n(10/t,2)-1)/t:1/(12*t)}},3711:function(t,e,a){"use strict";var n=[1276642195630063e-46,-3.401102254316749e-30,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2.868042435334643e-20,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,9.81082564692473e-9,-1384948176067564e-20,.16663894804518634],i=n.length;t.exports=function(t){var e,a,r,o,s;if(t<-1.1||t>1.1)return NaN;for(r=0,o=0,e=2*t,s=0;s<i;s++)a=r,o=e*(r=o)-a+n[s];return.5*(o-a)}},3712:function(t,e,a){"use strict";var n=a(425),i=a(3713);n(i,"factory",a(3714)),t.exports=i},3713:function(t,e,a){"use strict";var n=a(419);t.exports=function(t,e){return n(t)||n(e)?NaN:t===e?1:0}},3714:function(t,e,a){"use strict";var n=a(472),i=a(419);t.exports=function(t){return i(t)?n(NaN):function(e){if(i(e))return NaN;return e===t?1:0}}},3715:function(t,e,a){"use strict";var n=a(3716);t.exports=n},3716:function(t,e,a){"use strict";var n=a(431).isPrimitive;t.exports=function(t){if(!n(t))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+t+"`.");return""===t?"":t.charAt(0).toUpperCase()+t.slice(1)}},4127:function(t,e,a){"use strict";var n=a(4943);t.exports=n},4940:function(t,e,a){"use strict";var n=a(425),i=a(4941);n(i,"factory",a(4944)),t.exports=i},4941:function(t,e,a){"use strict";var n=a(872),i=a(4127),r=a(419),o=a(528),s=a(449),d=a(451),c=a(428);t.exports=function(t,e,a){var u;return r(t)||r(e)||r(a)||a<0||a>1||!n(e)||e===c?NaN:n(t)?t>e?0:0===a?0===t?1:0:1===a?t===e?1:0:(u=i(e,t),u+=t*d(a)+(e-t)*o(-a),s(u)):0}},4943:function(t,e,a){"use strict";var n=a(551),i=a(419),r=a(2735),o=a(430),s=a(451),d=a(460);t.exports=function t(e,a){return i(e)||i(a)?NaN:n(e)&&n(a)?e<0?t(-e+a-1,a):a<0?d:0===a?0:1===a?s(o(e)):e<a?d:e-a<2?t(e,e-a):-s(e+1)-r(e-a+1,a+1):NaN}},4944:function(t,e,a){"use strict";var n=a(872),i=a(472),r=a(4127),o=a(3712).factory,s=a(419),d=a(528),c=a(449),u=a(451),l=a(428);t.exports=function(t,e){return s(t)||s(e)||!n(t)||t===l||e<0||e>1?i(NaN):0===e||0===t?o(0):1===e?o(t):function(a){var i;if(s(a))return NaN;if(n(a))return a>t?0:(i=r(t,a),i+=a*u(e)+(t-a)*d(-e),c(i));return 0}}},4945:function(t,e,a){"use strict";var n=a(425),i=a(4946);n(i,"factory",a(4947)),t.exports=i},4946:function(t,e,a){"use strict";var n=a(872),i=a(673),r=a(419),o=a(457),s=a(428);t.exports=function(t,e,a){return r(t)||r(e)||r(a)||a<0||a>1||!n(e)||e===s?NaN:t<0?0:t>=e?1:(t=o(t+1e-7),i(a,t+1,e-t,!0,!0))}},4947:function(t,e,a){"use strict";var n=a(872),i=a(472),r=a(673),o=a(419),s=a(457),d=a(428);t.exports=function(t,e){return o(t)||o(e)||e<0||e>1||!n(t)||t===d?i(NaN):function(a){if(o(a))return NaN;if(a<0)return 0;if(a>=t)return 1;return a=s(a+1e-7),r(e,a+1,t-a,!0,!0)}}},6500:function(t,e,a){"use strict";a.r(e);a(438),a(434),a(453),a(452),a(437),a(436),a(423),a(420);var n=a(407),i=a.n(n),r=a(414),o=a.n(r),s=a(415),d=a.n(s),c=a(424),u=a.n(c),l=a(417),p=a.n(l),f=a(418),v=a.n(f),h=a(416),x=a.n(h),y=a(412),m=a.n(y),b=a(0),g=(a(404),a(4096)),w=a(466),C=a(614),N=a(584),P=a(454),k=a(483),F=a(494),O=a(467),D=a(6591),L=a(6573),A=a(4612),j=a(6448),M=a(805),X=a(474),V=a.n(X),S=a(654),W=a.n(S),K=a(4940),R=a.n(K),_=a(4945),I=a.n(_),T=a(3715),E=a.n(T),U=a(618),J=a(489),q=a(575),B=a(524),H=a(495),z=a(421);function G(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function Q(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?G(Object(a),!0).forEach((function(e){m()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):G(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function Y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=x()(t);if(e){var i=x()(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return v()(this,a)}}Object(z.a)("LearnDistribution");var Z=i()(H.a,{raw:"P(X = x)"}),$=i()(D.a,{dependentAxis:!0}),tt=i()(D.a,{dependentAxis:!0}),et=i()(H.a,{raw:"P(X \\le x_0)"}),at=i()(D.a,{dependentAxis:!0}),nt=i()(D.a,{dependentAxis:!0}),it=i()(H.a,{raw:"P(X > x_0)"}),rt=i()(D.a,{dependentAxis:!0}),ot=i()(D.a,{dependentAxis:!0}),st=i()(H.a,{raw:"P( x_0 \\le X \\le x_1)"}),dt=i()(D.a,{dependentAxis:!0}),ct=i()(D.a,{dependentAxis:!0}),ut=i()(U.a,{id:"binomial_distribution"}),lt=function(t){p()(a,t);var e=Y(a);function a(t){var n;o()(this,a),n=e.call(this,t),m()(u()(n),"handleTrialsChange",(function(t){for(var e=W()(0,t+1,1),a=new Array(e.length),i=0;i<e.length;i++)a[i]={x:e[i],y:R()(e[i],t,n.state.p)};n.setState({data:a,n:t})})),m()(u()(n),"handlePropChange",(function(t){for(var e=W()(0,n.state.n+1,1),a=new Array(e.length),i=0;i<e.length;i++)a[i]={x:e[i],y:R()(e[i],n.state.n,n.state.p)};n.setState({data:a,p:t})})),m()(u()(n),"handleLowerChange",(function(t){n.setState({x0:t})})),m()(u()(n),"handleUpperChange",(function(t){n.setState({x1:t})}));for(var i=W()(0,11,1),r=new Array(i.length),s=0;s<i.length;s++)r[s]={x:i[s],y:R()(i[s],10,.5)};return n.state={n:10,p:.5,x0:0,x1:1,data:r},n}return d()(a,[{key:"renderInputs",value:function(t){var e=this.props.t;return i()(b.Fragment,{},void 0,i()(J.b,{legend:"".concat(e("number-of-trials")," (n)"),defaultValue:this.state.n,min:1,step:1,onChange:this.handleTrialsChange},"".concat(t,"-n")),i()(J.b,{legend:"".concat(e("success-probability")," (p)"),defaultValue:this.state.p,step:this.props.step,onChange:this.handlePropChange,min:0,max:1},"".concat(t,"-p")),i()(q.a,{legend:"x0",defaultValue:this.state.x0,step:1,min:0,max:this.state.n,onChange:this.handleLowerChange},"".concat(t,"-x0")),"range"===t?i()(q.a,{legend:"x1",defaultValue:this.state.x1,min:0,max:this.state.n,step:1,onChange:this.handleUpperChange}):null)}},{key:"render",value:function(){var t=this,e=this.state,a=e.x0,n=e.x1,r=e.n,o=e.p,s=this.props.t;return i()(w.a,{style:Q({maxWidth:1200,margin:"10px auto"},this.props.style)},void 0,i()(w.a.Header,{as:"h3"},void 0,s("binomial-distribution")),i()(w.a.Body,{},void 0,i()(C.a,{defaultActiveKey:0,id:"binomial-tabs"},void 0,i()(N.a,{eventKey:0,title:Z},void 0,i()(k.a,{},void 0,i()(O.a,{},void 0,i()(F.a,{md:5},void 0,i()(B.a,{title:s("binomial-probabilities")},void 0,i()("span",{},void 0,E()(s("for"))),i()(J.b,{inline:!0,legend:"n",defaultValue:r,step:1,min:0,max:999,onChange:this.handleTrialsChange}),i()("span",{},void 0,s("trials-and-success-probability")),i()(J.b,{inline:!0,legend:"p",defaultValue:o,step:.01,max:1,min:0,onChange:this.handlePropChange}),i()("span",{},void 0,s("we-get")),i()(H.a,{raw:"P(X=x)= \\Large \\tbinom{".concat(r,"}{x} ").concat(o,"^x ").concat(V()(1-o,-4),"^{").concat(r,"-x}"),displayMode:!0}),i()("span",{},void 0,s("evaluated-at")," "),i()(J.b,{inline:!0,legend:"x",defaultValue:0,step:1,max:r,min:0,onChange:this.handleLowerChange})," ",i()("span",{},void 0,s("we-get")),i()(H.a,{raw:"P(X=".concat(a,")= \\Large \\tbinom{").concat(r,"}{").concat(a,"} ").concat(o,"^{").concat(a,"} ").concat(V()(1-o,-4),"^{").concat(r,"-").concat(a,"} \\approx ").concat(R()(a,this.state.n,o).toFixed(4)),displayMode:!0}))),i()(F.a,{md:7},void 0,i()(B.a,{header:s("probability-plot")},void 0,i()(O.a,{},void 0,i()(F.a,{md:6},void 0,i()(L.a,{theme:A.a.material},void 0,$,i()(D.a,{label:"PMF",tickFormat:function(t){return V()(t,-2)},style:{axisLabel:{padding:40}}}),i()(j.a,{data:this.state.data,style:{data:{fill:function(t){return t.datum.x===a?"tomato":"steelblue"}}}}))),this.props.hideCDF?null:i()(F.a,{md:6},void 0,i()(L.a,{theme:A.a.material},void 0,tt,i()(D.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},crossAxis:!1,style:{axisLabel:{padding:40}}}),i()(M.a,{samples:600,y:function(t){return I()(t.x,r,o)},domain:{x:[0,r+1],y:[0,1.1]}}),i()(M.a,{data:[{x:a,y:0},{x:a,y:I()(a,r,o)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),i()(M.a,{data:[{x:0,y:I()(a,r,o)},{x:a,y:I()(a,r,o)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),i()(N.a,{eventKey:1,title:et},void 0,i()(k.a,{},void 0,i()(O.a,{},void 0,i()(F.a,{md:4},void 0,i()(B.a,{},void 0,this.renderInputs("smaller"),i()(H.a,{raw:"P(X \\le".concat(V()(a,-4),") = ").concat(V()(I()(a,r,o),-4)),displayMode:!0,tag:""}))),i()(F.a,{md:8},void 0,i()(B.a,{header:s("probability-plot")},void 0,i()(O.a,{},void 0,i()(F.a,{md:6},void 0,i()(L.a,{theme:A.a.material},void 0,at,i()(D.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),i()(j.a,{data:this.state.data,style:{data:{fill:function(t){return t.datum.x<=a?"tomato":"steelblue"}}}}))),this.props.hideCDF?null:i()(F.a,{md:6},void 0,i()(L.a,{theme:A.a.material},void 0,nt,i()(D.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),i()(M.a,{samples:600,y:function(t){return I()(t.x,r,o)},domain:{x:[0,r+1],y:[0,1.1]}}),i()(M.a,{data:[{x:a,y:0},{x:a,y:I()(a,r,o)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),i()(M.a,{data:[{x:0,y:I()(a,r,o)},{x:a,y:I()(a,r,o)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),i()(N.a,{eventKey:2,title:it},void 0,i()(k.a,{},void 0,i()(O.a,{},void 0,i()(F.a,{md:4},void 0,i()(B.a,{},void 0,this.renderInputs("greater"),i()(H.a,{raw:"P(X >".concat(V()(a,-4),") = ").concat(V()(1-I()(a,r,o),-4)),displayMode:!0,tag:""}))),i()(F.a,{md:8},void 0,i()(B.a,{header:s("probability-plot")},void 0,i()(O.a,{},void 0,i()(F.a,{md:6},void 0,i()(L.a,{theme:A.a.material},void 0,rt,i()(D.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),i()(j.a,{data:this.state.data,style:{data:{fill:function(e){return e.datum.x>t.state.x0?"tomato":"steelblue"}}}}))),this.props.hideCDF?null:i()(F.a,{md:6},void 0,i()(L.a,{theme:A.a.material},void 0,ot,i()(D.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),i()(M.a,{samples:600,y:function(t){return I()(t.x,r,o)},domain:{x:[0,r+1],y:[0,1.1]}}),i()(M.a,{data:[{x:a,y:0},{x:a,y:I()(a,r,o)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}),i()(M.a,{data:[{x:0,y:I()(a,r,o)},{x:a,y:I()(a,r,o)}],style:{data:{stroke:"#e95f46",strokeWidth:1,opacity:.5}}}))))))))),i()(N.a,{eventKey:3,title:st},void 0,i()(k.a,{},void 0,i()(O.a,{},void 0,i()(F.a,{md:4},void 0,i()(B.a,{},void 0,this.renderInputs("range"),n>=a?i()(H.a,{raw:"P(".concat(V()(a,-4)," \\le X \\le ").concat(V()(n,-4),") = ").concat(V()(I()(n,r,o)-I()(a-1,r,o),-4)),displayMode:!0,tag:""}):i()(P.a,{variant:"warning"},void 0,s("lower-bound-smaller-equal-upper-bound")))),i()(F.a,{md:8},void 0,i()(B.a,{header:s("probability-plot")},void 0,i()(O.a,{},void 0,i()(F.a,{md:6},void 0,i()(L.a,{theme:A.a.material},void 0,dt,i()(D.a,{label:"PMF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),i()(j.a,{data:this.state.data,style:{data:{fill:function(e){return t.state.x0<=e.datum.x&&e.datum.x<=t.state.x1?"tomato":"steelblue"}}}}))),this.props.hideCDF?null:i()(F.a,{md:6},void 0,i()(L.a,{theme:A.a.material},void 0,ct,i()(D.a,{label:"CDF",tickFormat:function(t){return"".concat(t)},style:{axisLabel:{padding:40}}}),i()(M.a,{samples:600,y:function(t){return I()(t.x,r,o)},domain:{x:[0,r+1],y:[0,1.1]}})))))))))),ut))}}]),a}(b.Component);lt.defaultProps={hideCDF:!1,step:.01,style:{}},e.default=Object(g.a)("LearnDistribution")(lt)}}]);