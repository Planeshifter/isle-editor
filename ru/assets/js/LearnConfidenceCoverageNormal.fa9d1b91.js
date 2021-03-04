(window.webpackJsonp=window.webpackJsonp||[]).push([[530],{6459:function(t,e,a){"use strict";a.r(e);a(427),a(416),a(421);var n=a(407),r=a.n(n),o=a(414),i=a.n(o),l=a(415),s=a.n(l),d=a(425),c=a.n(d),u=a(418),m=a.n(u),p=a(419),v=a.n(p),f=a(417),h=a.n(f),y=a(412),g=a.n(y),S=a(0),b=(a(404),a(4173)),x=a(4172),w=a(509),C=a(493),k=a(465),D=a(476),q=a(6534),B=a(6403),N=a(6515),R=a(4680),T=a(4678),j=a(4681),z=a(6524),L=a(431),O=a.n(L),V=a(1020),X=a.n(V),_=a(749),A=a.n(_),G=a(3830),H=a.n(G),J=a(473),P=a.n(J),Z=a(433),F=a.n(Z),K=a(636),M=a(1090),Y=a(494),E=a(628),I=a(582),Q=a(490),U=a(589),W=a(652),$=a(422);function tt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=h()(t);if(e){var r=h()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return v()(this,a)}}Object($.a)("LearnConfidenceCoverage");var et={"\u03bc":{tooltip:"Mean"},"\u03c3":{tooltip:"Standard Deviation"},n:{tooltip:"Sample Size"},"\u03b1":{tooltip:"Significance level"},Z:{tooltip:"Standard normal quantile"},S:{tooltip:"Sample standard deviation"}},at=r()(q.a,{dependentAxis:!0,padding:20,standalone:!1}),nt=r()(B.a,{}),rt=r()(B.a,{}),ot=r()(Y.a,{raw:"X \\sim \\text{Normal}\\left( \\mu, \\sigma \\right)",elems:et}),it=r()(Y.a,{raw:"\\bar X \\sim \\text{Normal}\\left( \\mu, \\tfrac{\\sigma}{\\sqrt{n}} \\right)",elems:et}),lt=r()(b.a,{i18nKey:"normal-intro-end",ns:"LearnConfidenceCoverage"},void 0,"For our choice of sample size (n), ",r()(Y.a,{raw:"\\mu"}),", ",r()(Y.a,{raw:"\\sigma"}),", and confidence level, we will simulate 20 different samples from our normal distribution and calculate the corresponding sample means and confidence intervals."),st=r()(E.a,{id:"coverage-module-normal"}),dt=function(t){m()(a,t);var e=tt(a);function a(t){var n;return i()(this,a),n=e.call(this,t),g()(c()(n),"onGenerate",(function(t,e,a,r){for(var o=0,i=1-r,l=new Array(20),s=0;s<20;s++){for(var d=new Array(t),c=0;c<d.length;c++)d[c]=H()(e,a);var u=Object(U.a)(d),m=void 0;if(n.state.useSampleSD){var p=Object(W.a)(d)/F()(t);m=O()(p*X()(1-i/2,t-1))}else{var v=a/F()(t);m=O()(v*A()(1-i/2,0,1))}var f={num:s+1,yval:u,err:m};f.text=f.yval-f.err>e||f.yval+f.err<e?"does not contain mu":"contains mu","contains mu"===f.text&&(o+=1),f.text="[".concat(P()(f.yval-f.err,-2),", ").concat(P()(f.yval+f.err,-2),"] ")+f.text,l[s]=f}n.setState({nTrapped:o,mu:e,errorBars:l})})),n.state={errorBars:[],mu:null,nTrapped:null,useSampleSD:!1},n}return s()(a,[{key:"renderChart",value:function(){var t=this,e=this.state.errorBars;return e&&0!==e.length?r()(N.a,{padding:{top:20,bottom:30,left:40,right:20},height:180,theme:R.a.material},void 0,r()(q.a,{padding:20,standalone:!1,tickCount:20,style:{tickLabels:{fontSize:"9px"}}}),at,r()(T.a,{animate:{duration:500},data:this.state.errorBars,labelComponent:nt,style:{data:{fill:function(e){return e.datum.yval-e.datum.err>t.state.mu||e.datum.yval+e.datum.err<t.state.mu?"darkred":"steelblue"}}},x:"num",y:"yval",labels:function(t){return"Sample mean: ".concat(P()(t.datum.yval,-3))}}),r()(j.a,{animate:{duration:500},labelComponent:rt,style:{data:{stroke:function(e){return e.datum.yval-e.datum.err>t.state.mu||e.datum.yval+e.datum.err<t.state.mu?"darkred":"steelblue"}}},data:this.state.errorBars,x:"num",y:"yval",errorY:function(t){return t.err},labels:function(t){return t.datum.text}}),r()(z.a,{data:[{x:1,y:this.state.mu},{x:20,y:this.state.mu}]})):null}},{key:"render",value:function(){var t,e=this,a=this.props.t;return t=this.props.intro?this.props.intro:r()("p",{},void 0,ot,". ",a("then")," ",it,". ",a("normal-intro")," ",r()(M.a,{tooltip:"".concat(this.state.useSampleSD?a("click-pop-stdev"):a("click-sample-stdev")),active:this.props.sampleStats,onChange:function(t){e.setState({useSampleSD:1===t})}},void 0,r()(Y.a,{raw:"\\bar X \\pm Z_{".concat(this.props.quartileNotation?"\\tfrac{\\alpha}{2}":"\\text{critical}","} \\cdot \\frac{\\sigma}{\\sqrt{n}}"),elems:et}),r()(Y.a,{raw:"\\bar X \\pm t_{".concat(this.props.quartileNotation?"\\tfrac{\\alpha}{2}":"\\text{critical}","} \\cdot \\frac{S}{\\sqrt{n}}"),elems:et})),".",lt),r()(k.a,{className:"coverage-card"},void 0,r()(k.a.Header,{as:"h4"},void 0,a("confidence-interval-coverage-mean")),r()(k.a.Body,{},void 0,r()(w.a,{},void 0,r()(D.a,{},void 0,t),r()(D.a,{},void 0,r()(C.a,{md:5},void 0,r()(K.a,{title:a("change-parameters"),onGenerate:this.onGenerate,autoStart:!0,id:"confidence_coverage_normal"},void 0,r()(Q.b,{legend:"".concat(a("sample-size")," (n) "),defaultValue:30,max:100,step:1,min:1}),r()(Q.b,{legend:"".concat(a("mean")," (mu)"),defaultValue:1,max:5,min:-5,step:.1}),r()(Q.b,{legend:a("standard-deviation"),defaultValue:1,max:20,min:.1,step:.1}),r()(I.a,{legend:a("confidence-level"),defaultValue:.95,min:.01,max:.99,step:.01,fractionDigits:2})),st),r()(C.a,{md:7},void 0,r()(k.a,{},void 0,r()(k.a.Header,{as:"h4"},void 0,a("confidence-intervals")),r()(k.a.Body,{},void 0,this.renderChart(),r()("p",{},void 0,a("capture-true-proportion",{nTrapped:this.state.nTrapped})," ",r()("b",{},void 0,"(",a("coverage"),":  ",this.state.nTrapped/20,").")))))))))}}]),a}(S.Component);dt.defaultProps={intro:null,quartileNotation:!0,sampleStats:!0},e.default=Object(x.a)("LearnConfidenceCoverage")(dt)}}]);