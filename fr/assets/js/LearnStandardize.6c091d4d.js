(window.webpackJsonp=window.webpackJsonp||[]).push([[625],{6512:function(t,e,a){"use strict";a.r(e);a(436),a(423),a(420);var n=a(407),r=a.n(n),s=a(414),i=a.n(s),d=a(415),o=a.n(d),u=a(424),l=a.n(u),c=a(417),p=a.n(c),f=a(418),h=a.n(f),v=a(416),m=a.n(v),y=a(412),b=a.n(y),g=a(0),x=a(4096),z=a(483),w=a(467),P=a(494),S=a(466),k=a(422),L=a(6591),q=a(805),C=a(6573),R=a(924),U=(a(404),a(474)),V=a.n(U),A=a(916),B=a.n(A),M=a(685),D=a.n(M),H=a(652),j=a.n(H),F=a(495),I=a(489),J=a(626),N=a(421);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=m()(t);if(e){var r=m()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return h()(this,a)}}Object(N.a)("LearnStandardize");var Z=["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33"],G=j()(-30,30,200),X=r()(L.a,{dependentAxis:!0}),_=r()(L.a,{label:"x"}),E=r()(L.a,{dependentAxis:!0}),K=r()(L.a,{label:"z"}),Q=function(t){p()(a,t);var e=O(a);function a(t){var n;return i()(this,a),n=e.call(this,t),b()(l()(n),"reset",(function(){n.setState({marked:[],unstandardizedLines:[],standardizedLines:[],eqn2:""})})),b()(l()(n),"onStandardize",(function(t){var e=n.state.marked.slice();e.push(t);var a,s=e[e.length-1],i=V()((s-n.state.mean)/n.state.sd,-4);a="z = \\frac{".concat(s,"-").concat(V()(n.state.mean,-2),"}{").concat(V()(n.state.sd,-2),"} = ").concat(i);var d=e.map((function(t,e){return r()(q.a,{data:[{x:t,y:0},{x:t,y:.5}],x:function(t){return t.x},y:function(t){return t.y},style:{data:{stroke:Z[e%Z.length]}}},e)})),o=e.map((function(t,e){return r()(q.a,{data:[{x:(t-n.state.mean)/n.state.sd,y:0},{x:(t-n.state.mean)/n.state.sd,y:.5}],x:function(t){return t.x},y:function(t){return t.y},style:{data:{stroke:Z[e%Z.length]}}},e)}));n.setState({marked:e,eqn2:a,unstandardizedLines:d,standardizedLines:o})})),n.state={mean:4,sd:3,lower:-4,upper:4,rangeProb:1,area:[]},n}return o()(a,[{key:"componentDidMount",value:function(){this.generateState(this.state.mean,this.state.sd)}},{key:"generateState",value:function(t,e){var a="Z = \\frac{X-".concat(V()(t,-2),"}{").concat(V()(e,-2),"}"),n=G.map((function(a){return{x:a,y:B()(a,t,e)}}));this.setState({data:n,mean:t,sd:e,eqn:a,marked:[],eqn2:"",unstandardizedLines:[],standardizedLines:[]})}},{key:"renderNumberInputPanel",value:function(){var t=this,e=this.props.t;return r()(S.a,{style:{marginBottom:10}},void 0,r()(S.a.Header,{as:"h4"},void 0,e("normal-to-standard-normal")),r()(S.a.Body,{},void 0,r()(I.b,{legend:e("mean"),defaultValue:4,step:this.props.step,min:-25,max:25,onChange:function(e){t.generateState(e,t.state.sd)}}),r()(I.b,{legend:e("standard-deviation"),defaultValue:3,step:this.props.step,min:1,max:10,onChange:function(e){t.generateState(t.state.mean,e)}})))}},{key:"renderUnstandardizedPlot",value:function(){var t=this.props.t;return r()(S.a,{},void 0,r()(S.a.Header,{as:"h4"},void 0,t("unstandardized")),r()(S.a.Body,{},void 0,r()(C.a,{domain:{x:[-30,30],y:[0,.4]}},void 0,r()(q.a,{data:this.state.data}),X,_,this.state.unstandardizedLines),r()(k.a,{variant:"secondary",onClick:this.reset},void 0,t("reset"))))}},{key:"renderStandardizedPlot",value:function(){var t=this,e=this.props.t;return r()(S.a,{},void 0,r()(S.a.Header,{as:"h4"},void 0,e("standardized")),r()(S.a.Body,{},void 0,r()(C.a,{domain:{x:[-5,5],y:[0,.4]}},void 0,E,K,r()(q.a,{samples:200,y:function(t){return B()(t.x,0,1)}}),this.props.showProbabilities&&this.state.area.length>0?r()(R.a,{data:this.state.area,style:{data:{opacity:.3,fill:"tomato"}}}):null,this.state.standardizedLines),this.props.showProbabilities?r()(g.Fragment,{},void 0,r()("span",{},void 0,e("evaluate-probabilities")),r()(F.a,{raw:"P( L = ".concat(this.state.lower," < Z < U = ").concat(this.state.upper,") = ").concat(this.state.rangeProb.toFixed(3)),elems:{L:{variable:"L",onChange:function(e){for(var a=j()(e,t.state.upper,200),n=new Array(200),r=0;r<a.length;r++)n[r]={x:a[r],y:B()(a[r],0,1)};var s=D()(t.state.upper,0,1)-D()(e,0,1);t.setState({area:n,rangeProb:s,lower:e})},defaultValue:this.state.lower},U:{variable:"U",onChange:function(e){for(var a=j()(t.state.lower,e,200),n=new Array(200),r=0;r<a.length;r++)n[r]={x:a[r],y:B()(a[r],0,1)};var s=D()(e,0,1)-D()(t.state.lower,0,1);t.setState({area:n,rangeProb:s,upper:e})},defaultValue:this.state.upper}},popoverPlacement:"bottom",displayMode:!0})):null))}},{key:"render",value:function(){var t=this.props.t;return r()(z.a,{},void 0,r()(w.a,{},void 0,r()(P.a,{md:12},void 0,this.renderNumberInputPanel())),r()(w.a,{},void 0,r()(P.a,{md:4},void 0,this.renderUnstandardizedPlot()),r()(P.a,{md:4},void 0,r()(J.a,{autoStart:!1,title:t("standardize-values"),label:this.props.t("compute"),id:"learn_standardize",onGenerate:this.onStandardize},void 0,r()(F.a,{raw:this.state.eqn,displayMode:!0,tag:""}),r()(I.b,{legend:t("x-value"),defaultValue:0,step:this.props.step,min:-30,max:30})),r()(F.a,{raw:this.state.eqn2,displayMode:!0,tag:""})),r()(P.a,{md:4},void 0,this.renderStandardizedPlot())))}}]),a}(g.Component);Q.defaultProps={showProbabilities:!1,step:"any"},e.default=Object(x.a)("LearnStandardize")(Q)}}]);