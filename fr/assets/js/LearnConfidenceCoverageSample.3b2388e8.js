(window.webpackJsonp=window.webpackJsonp||[]).push([[536],{2635:function(e,t,a){"use strict";var r=a(544);a.d(t,"a",(function(){return r.a}));var n=a(489);a.d(t,"b",(function(){return n.b}));var s=a(507);a.d(t,"c",(function(){return s.a}));a(575),a(783),a(755),a(865)},422:function(e,t,a){"use strict";var r=a(406),n=a(408),s=a(409),i=a.n(s),o=a(0),l=a.n(o),c=a(411),u=a(470),p=l.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.variant,o=e.size,p=e.active,d=e.className,v=e.block,f=e.type,h=e.as,m=Object(n.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),b=Object(c.a)(a,"btn"),y=i()(d,b,p&&"active",s&&b+"-"+s,v&&b+"-block",o&&b+"-"+o);if(m.href)return l.a.createElement(u.a,Object(r.a)({},m,{as:h,ref:t,className:i()(y,m.disabled&&"disabled")}));t&&(m.ref=t),f?m.type=f:h||(m.type="button");var g=h||"button";return l.a.createElement(g,Object(r.a)({},m,{className:y}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=p},549:function(e,t,a){"use strict";var r=a(406),n=a(408),s=a(409),i=a.n(s),o=a(0),l=a.n(o),c=a(411),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.size,o=e.toggle,u=e.vertical,p=e.className,d=e.as,v=void 0===d?"div":d,f=Object(n.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),h=Object(c.a)(a,"btn-group"),m=h;return u&&(m=h+"-vertical"),l.a.createElement(v,Object(r.a)({},f,{ref:t,className:i()(p,m,s&&h+"-"+s,o&&h+"-toggle")}))}));u.displayName="ButtonGroup",u.defaultProps={vertical:!1,toggle:!1,role:"group"},t.a=u},6517:function(e,t,a){"use strict";a.r(t);a(420);var r,n,s,i=a(407),o=a.n(i),l=a(785),c=a.n(l),u=a(414),p=a.n(u),d=a(415),v=a.n(d),f=a(424),h=a.n(f),m=a(417),b=a.n(m),y=a(418),g=a.n(y),w=a(416),S=a.n(w),x=a(412),B=a.n(x),z=(a(566),a(423),a(452),a(453),a(469),a(600),a(518),a(458),a(0)),k=(a(404),a(4096)),O=a(454),j=a(422),C=a(549),L=a(483),M=a(494),N=a(467),P=a(430),T=a.n(P),H=a(432),R=a.n(H),E=a(770),J=a.n(E),Q=a(6573),V=a(4612),A=a(6591),F=a(6451),G=a(805),W=a(1e3),X=a.n(W),q=a(742),D=a.n(q),I=a(474),K=a.n(I),U=a(426),Y=a.n(U),Z=a(595),$=a.n(Z),_=a(2635),ee=a(524),te=a(495),ae=a(582),re=a(643),ne=a(421);a(63),a(64);function se(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=S()(e);if(t){var n=S()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return g()(this,a)}}Object(ne.a)("LearnConfidenceCoverage");var ie=function(e){b()(a,e);var t=se(a);function a(e){var r;return p()(this,a),r=t.call(this,e),B()(h()(r),"drawSamples",(function(e){"numeric"===r.state.type?r.drawQuantitative(e):"binary"===r.state.type&&r.drawBinary(e)})),B()(h()(r),"drawQuantitative",(function(e){for(var t=r.state,a=t.nTrapped,n=t.nLower,s=t.nHigher,i=1-r.state.level,o=r.state.errorBars.slice(),l=r.state.trueMean,c=r.state.sampleSize,u=0;u<e;u++){var p=J()(r.state.values,{size:c}),d=Object(ae.a)(p),v=Object(re.a)(p)/R()(c),f=X()(1-i/2,c-1),h=T()(v*f),m={num:o.length+1,yval:d,err:h};m.yval-m.err>l?s+=1:m.yval+m.err<l?n+=1:a+=1,o.push(m)}r.setState({nTrapped:a,nLower:n,nHigher:s,errorBars:o})})),B()(h()(r),"drawBinary",(function(e){for(var t=r.state,a=t.nTrapped,n=t.nLower,s=t.nHigher,i=1-r.state.level,o=r.state.errorBars.slice(),l=r.state.trueMean,c=0;c<e;c++){var u=J()(r.state.values,{size:r.state.sampleSize}),p=Object(ae.a)(u),d=R()(p*(1-p)/r.state.sampleSize),v={num:o.length+1,yval:p,err:T()(d*D()(1-i/2,0,1))};v.yval-v.err>l?s+=1:v.yval+v.err<l?n+=1:a+=1,o.push(v)}r.setState({nTrapped:a,nLower:n,nHigher:s,errorBars:o})})),B()(h()(r),"onSelectVariable",(function(e){var t=r.props.data[e];t=t.filter((function(e){return null!==e&&""!==e}));var a,n,s="none";if($()(t)&&(s="numeric",a=Object(ae.a)(t)),function(e){for(var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a={},r=0,n=0;n<e.length;n++){if(Y()(a,e[n])||(a[e[n]]=!0,r+=1),r>2)return!1;if(t&&n>50)break}return 2===r}(t)){s="binary",n=c()(new Set(t)).sort();for(var i=0,o=0;o<t.length;o++)t[o]===n[1]&&(i+=1);a=i/t.length}var l=r.state.sampleSize;l>t.length&&(l=t.length),r.setState({variable:e,values:t,sampleSize:l,type:s,trueMean:a})})),r.state={variable:null,type:"none",errorBars:[],nTrapped:0,nLower:0,nHigher:0,sampleSize:25,level:.95},r}return v()(a,[{key:"clear",value:function(){this.setState({errorBars:[],nTrapped:0,nLower:0,nHigher:0})}},{key:"renderChart",value:function(){var e=this.state.errorBars;if(!e||0===e.length)return null;var t=this.state.trueMean;return o()(Q.a,{padding:{top:20,bottom:30,left:40,right:20},height:2.5*this.state.errorBars.length+50,theme:V.a.material},void 0,o()(A.a,{padding:20,standalone:!1,style:{tickLabels:{fontSize:"9px"}}}),r||(r=o()(A.a,{dependentAxis:!0,padding:20,standalone:!1})),o()(F.a,{animate:{duration:100},style:{data:{stroke:function(e){return e.datum.yval-e.datum.err>t||e.datum.yval+e.datum.err<t?"darkred":"steelblue"}}},data:this.state.errorBars,x:"yval",y:"num",errorX:function(e){return e.err}}),o()(G.a,{data:[{x:t,y:0},{x:t,y:this.state.errorBars.length}]}))}},{key:"render",value:function(){var e=this,t=this.props.t,a=this.state.errorBars.length,r="numeric"===this.state.type?"mean":"proportion";return o()(L.a,{style:{maxWidth:1200}},void 0,o()(_.c,{legend:t("select-variable"),options:this.props.variables,onChange:this.onSelectVariable}),"numeric"===this.state.type||"binary"===this.state.type?o()(N.a,{},void 0,o()(M.a,{md:6},void 0,o()(ee.a,{header:o()("span",{},void 0,t("confidence-intervals-for")," ",this.state.variable),style:{height:"85vh"}},void 0,this.renderChart())),o()(M.a,{md:6},void 0,"numeric"===this.state.type||"binary"===this.state.type?o()(ee.a,{header:t("parameters")},void 0,o()(_.b,{legend:t("sample-size"),step:1,min:1,value:this.state.sampleSize,max:this.state.values.length,onChange:function(t){return e.setState({sampleSize:t})}}),o()(_.b,{legend:t("confidence-level"),step:.01,min:0,max:1,value:this.state.level,onChange:function(t){return e.setState({level:t})}}),o()(C.a,{},void 0,$()(this.props.samples)?this.props.samples.map((function(a,r){return o()(j.a,{onClick:function(){e.drawSamples(a)}},r,t("draw-samples",{n:a}))})):o()(j.a,{onClick:function(){e.drawSamples(e.props.samples)}},void 0,t("draw-samples",{n:this.props.samples})),o()(j.a,{onClick:this.clear.bind(this)},void 0,t("clear")))):null,o()(ee.a,{header:t("statistics")},void 0,t("number-of-confidence-intervals-of",{center:r}),"\xa0",o()(te.a,{raw:K()(this.state.trueMean,-3)}),": ",n||(n=o()("br",{})),o()(te.a,{raw:"\\text{".concat(t("covering-population")," ").concat(t(r),": }").concat(this.state.nTrapped," \\text{ out of } ").concat(a),displayMode:!0}),this.state.errorBars.length>0?o()(z.Fragment,{},void 0,o()(te.a,{raw:"\\text{".concat(t("coverage"),": }").concat(K()(this.state.nTrapped/a,-3),"\\%"),displayMode:!0}),t("number-of-confidence-intervals",{center:r})," ",s||(s=o()("br",{})),o()(te.a,{raw:"\\text{".concat(t("interval-above-population")," ").concat(r,": }").concat(this.state.nHigher),displayMode:!0}),o()(te.a,{raw:"\\text{".concat(t("interval-below-population")," ").concat(r,": }").concat(this.state.nLower),displayMode:!0})):null))):o()(O.a,{variant:"info",style:{fontSize:24}},void 0,t("please-sample")))}}]),a}(z.Component);ie.defaultProps={samples:25},t.default=Object(k.a)("LearnConfidenceCoverage")(ie)}}]);