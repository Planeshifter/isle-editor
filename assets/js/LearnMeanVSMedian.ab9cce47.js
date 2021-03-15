(window.webpackJsonp=window.webpackJsonp||[]).push([[583],{6521:function(a,t,e){"use strict";e.r(t);e(436),e(423),e(420);var n=e(407),o=e.n(n),s=e(414),i=e.n(s),r=e(415),d=e.n(r),l=e(424),u=e.n(l),c=e(417),m=e.n(c),h=e(418),p=e.n(h),g=e(416),v=e.n(g),f=e(412),y=e.n(f),M=e(0),x=(e(404),e(4096)),D=e(422),L=e(483),w=e(467),b=e(494),S=e(466),A=e(682),E=e(6573),G=e(6581),C=e(805),k=e(450),N=e.n(k),_=e(430),P=e.n(_),T=e(474),U=e.n(T),I=e(1496),R=e.n(I),B=e(652),H=e.n(B),j=e(5029),J=e.n(j),O=e(3740),V=e.n(O),W=e(618),Y=e(465),z=e(535),q=e(421);function F(a){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var e,n=v()(a);if(t){var o=v()(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return p()(this,e)}}Object(q.a)("LearnMeanVSMedian");var K=N()("isle:mean-vs-median"),Q=o()("th",{}),X=o()(W.a,{id:"mean-vs-median"}),Z=function(a){m()(e,a);var t=F(e);function e(a){var n;i()(this,e),n=t.call(this,a),y()(u()(n),"medianEvaluation",(function(a){if(a.stopPropagation(),!n.state.showLognormalMedian){var t=P()(J.a.median(n.state.mu,n.state.sigma)-n.state.medianLognormalGuess),e=n.props.t("a-bit-off"),o=n.state.lognormalDomain.x[1];t<o/10&&(e=n.props.t("good")),t<o/20&&(e=n.props.t("very-good")),n.singleAccMedian(t);var s=n.context;s.addNotification({title:n.props.t("score"),message:e,position:"tc",level:"success"}),s.log({id:n.props.id,type:"MEDIAN_GUESS_DISTANCE",value:t}),n.setState({showLognormalMedian:!0})}})),y()(u()(n),"meanEvaluation",(function(a){if(a.stopPropagation(),!n.state.showLognormalMean){var t=P()(J.a.mean(n.state.mu,n.state.sigma)-n.state.meanLognormalGuess),e=n.props.t("a-bit-off"),o=n.state.lognormalDomain.x[1];t<o/10&&(e=n.props.t("good")),t<o/20&&(e=n.props.t("very-good")),n.singleAccMean(t);var s=n.context;s.addNotification({title:n.props.t("score"),message:e,position:"tc",level:"success"}),s.log({id:n.props.id,type:"MEAN_GUESS_DISTANCE",value:t}),n.setState({showLognormalMean:!0})}})),y()(u()(n),"generateData",(function(){var a=1*n.rand()-.5,t=2*n.rand()+.01,e=4+J.a.stdev(a,t),o=H()(0,e,80).map((function(e){return{x:e,y:J.a.pdf(e,a,t)}}));n.setState({lognormalData:o,mu:a,sigma:t,lognormalDomain:{x:[0,e],y:[0,J.a.pdf(J.a.mode(a,t),a,t)]},showLognormalMean:!1,showLognormalMedian:!1})})),n.state={mu:0,sigma:1,lognormalData:[],lognormalDomain:{x:[0,4],y:[0,3]},meanLognormalGuess:1,medianLognormalGuess:1,showLognormalMean:!1,showLognormalMedian:!1};var o={};return a.seed&&(o.seed=a.seed),n.rand=R.a.factory(o),n.singleAccMean=V()(),n.groupAccMean=V()(),n.singleAccMedian=V()(),n.groupAccMedian=V()(),n}return d()(e,[{key:"componentDidMount",value:function(){var a=this;this.generateData();var t=this.context;this.unsubscribe=t.subscribe((function(t,e){if(t===z.n)if("MEDIAN_GUESS_DISTANCE"===e.type){var n=e.value;a.groupAccMedian(n),a.forceUpdate()}else if("MEAN_GUESS_DISTANCE"===e.type){var o=e.value;a.groupAccMean(o),a.forceUpdate()}}))}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"renderMeanPanel",value:function(){var a=this,t=this.props.t;return o()(S.a,{},void 0,o()(S.a.Header,{as:"h4"},void 0,t("mean")),o()(S.a.Body,{},void 0,o()(E.a,{domain:this.state.lognormalDomain,containerComponent:o()(G.a,{events:{onClick:this.meanEvaluation},cursorDimension:"x",cursorLabel:function(a){return"".concat(U()(a.x,-1))},onCursorChange:function(t){K("Received cursor change: ".concat(t)),a.state.showLognormalMean||a.setState({meanLognormalGuess:t})}})},void 0,o()(C.a,{data:this.state.lognormalData,x:"x",y:"y"}),this.state.showLognormalMean?o()(C.a,{data:[{x:this.state.meanLognormalGuess,y:0},{x:this.state.meanLognormalGuess,y:this.state.lognormalDomain.y[1]}],labels:["Your Guess",""]}):null,this.state.showLognormalMean?o()(C.a,{data:[{x:J.a.mean(this.state.mu,this.state.sigma),y:0},{x:J.a.mean(this.state.mu,this.state.sigma),y:this.state.lognormalDomain.y[1]}],labels:["","True Mean"]}):null)))}},{key:"renderMedianPanel",value:function(){var a=this,t=this.props.t;return o()(S.a,{},void 0,o()(S.a.Header,{as:"h4"},void 0,t("median")),o()(S.a.Body,{},void 0,o()(E.a,{domain:this.state.lognormalDomain,containerComponent:o()(G.a,{events:{onClick:this.medianEvaluation},cursorDimension:"x",cursorLabel:function(a){return"".concat(U()(a.x,-1))},onCursorChange:function(t){a.state.showLognormalMedian||a.setState({medianLognormalGuess:t})}})},void 0,o()(C.a,{data:this.state.lognormalData,x:"x",y:"y"}),this.state.showLognormalMedian?o()(C.a,{data:[{x:this.state.medianLognormalGuess,y:0},{x:this.state.medianLognormalGuess,y:this.state.lognormalDomain.y[1]}],labels:["Your Guess",""]}):null,this.state.showLognormalMedian?o()(C.a,{data:[{x:J.a.median(this.state.mu,this.state.sigma),y:0},{x:J.a.median(this.state.mu,this.state.sigma),y:this.state.lognormalDomain.y[1]}],labels:["","True Median"]}):null)))}},{key:"render",value:function(){var a=this.props.t;return o()(S.a,{style:this.props.style},void 0,o()(S.a.Header,{as:"h3"},void 0,this.props.header?this.props.header:a("measures-of-location-header")),o()(S.a.Body,{},void 0,o()(L.a,{},void 0,this.props.intro,o()(w.a,{},void 0,o()(b.a,{md:6},void 0,this.renderMeanPanel()),o()(b.a,{md:6},void 0,this.renderMedianPanel())),o()(w.a,{},void 0,o()("div",{style:{paddingTop:"20px",maxWidth:400,margin:"0 auto 10px"}},void 0,o()(D.a,{variant:"primary",size:"lg",onClick:this.generateData},void 0,a("generate-new-data")))),o()(w.a,{},void 0,this.props.showStatistics?o()(A.a,{bordered:!0},void 0,o()("thead",{},void 0,o()("tr",{},void 0,Q,o()("th",{},void 0,a("you")),o()("th",{},void 0,a("group")))),o()("tbody",{},void 0,o()("tr",{},void 0,o()("th",{},void 0,a("average-distance-from-mean")),o()("td",{},void 0,U()(this.singleAccMean(),-2)),o()("td",{},void 0,U()(this.groupAccMean(),-2))),o()("tr",{},void 0,o()("th",{},void 0,a("average-distance-from-median")),o()("td",{},void 0,U()(this.singleAccMedian(),-2)),o()("td",{},void 0,U()(this.groupAccMedian(),-2))))):null)),this.props.feedback?X:null))}}]),e}(M.Component);Z.defaultProps={feedback:!1,header:null,id:"mean_vs_median",intro:null,seed:null,showStatistics:!1,style:{}},Z.contextType=Y.a,t.default=Object(x.a)("LearnMeanVSMedian")(Z)}}]);