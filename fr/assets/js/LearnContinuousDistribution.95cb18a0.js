(window.webpackJsonp=window.webpackJsonp||[]).push([[536],{4984:function(t){t.exports=JSON.parse('["exp","ln","pow","sqrt"]')},6528:function(t,e,a){"use strict";a.r(e);a(438),a(436),a(441),a(440),a(437),a(427),a(416),a(421);var n=a(407),r=a.n(n),i=a(414),o=a.n(i),s=a(415),l=a.n(s),c=a(425),u=a.n(c),d=a(418),p=a.n(d),h=a(419),v=a.n(h),g=a(417),f=a.n(g),m=a(412),y=a.n(m),x=a(456),b=a.n(x),w=a(1438),C=a.n(w),P=a(797),F=a.n(P),k=a(0),X=a.n(k),E=a(4172),L=a(752),S=a(558),D=a(424),R=a(454),O=a(493),A=a(476),N=a(591),z=a(568),j=a(509),U=a(465),Y=a(6534),T=a(6515),V=a(4680),q=a(6524),B=a(916),K=a(433),M=a.n(K),$=a(449),_=a.n($),I=a(451),J=a.n(I),W=a(473),G=a.n(W),H=a(2722),Q=a.n(H),Z=a(515),tt=a.n(Z),et=a(664),at=a.n(et),nt=a(898),rt=a.n(nt),it=a(4979),ot=a.n(it),st=a(4982),lt=a.n(st),ct=a(429),ut=a.n(ct),dt=a(458),pt=a.n(dt),ht=a(1151),vt=a.n(ht),gt=a(470),ft=a.n(gt),mt=a(534),yt=a(490),xt=a(763),bt=a(494),wt=a(422),Ct=a(4984),Pt=a(420),Ft=a.n(Pt),kt=a(431),Xt=a.n(kt),Et=a(450),Lt=a.n(Et)()("integrate-simpson");function St(t,e,a,n,r,i,o,s,l,c,u){if(u.nanEncountered)return NaN;var d=a-e,p=t(e+.25*d),h=t(a-.25*d);if(Ft()(p))u.nanEncountered=!0;else{if(!Ft()(h)){var v=d*(n+4*p+r)/12,g=d*(r+4*h+i)/12,f=v+g,m=(f-o)/15;if(c>l)return u.maxDepthCount++,f+m;if(Xt()(m)<s)return f+m;var y=e+.5*d,x=St(t,e,y,n,p,r,v,.5*s,l,c+1,u);if(Ft()(x))return u.nanEncountered=!0,NaN;var b=St(t,y,a,r,h,i,g,.5*s,l,c+1,u);return Ft()(b)?(u.nanEncountered=!0,NaN):x+b}u.nanEncountered=!0}}var Dt=function(t,e,a,n,r){var i={maxDepthCount:0,nanEncountered:!1};void 0===n&&(n=1e-8),void 0===r&&(r=20);var o=t(e),s=t(.5*(e+a)),l=t(a),c=St(t,e,a,o,s,l,(o+4*s+l)*(a-e)/6,n,r,1,i);return i.maxDepthCount>0&&Lt("integrate-adaptive-simpson: Warning: maximum recursion depth ("+r+") reached "+i.maxDepthCount+" times"),i.nanEncountered&&Lt("integrate-adaptive-simpson: Warning: NaN encountered. Halting early."),c};function Rt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function Ot(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?Rt(Object(a),!0).forEach((function(e){y()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Rt(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function At(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=f()(t);if(e){var r=f()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return v()(this,a)}}Object(wt.a)("LearnDistribution");var Nt=[_.a,J.a,M.a],zt=/([\S]+)\^([\S]+)/g,jt=/([^()+-/*^\s]+)\^([^()\s+-/*^]+)/g,Ut=/([^()\s]+)\^(\([^()\s]+\))/g,Yt=/(?:^|\n)([^\n]*)$/;function Tt(t,e,a){return ft()(e,"^")&&(e=tt()(e,zt,Tt)),ft()(a,"^")&&(a=tt()(a,zt,Tt)),"".concat(e," ** ").concat(a)}function Vt(t,e,a){return"{".concat(e,"}^{").concat(a,"}")}function qt(t,e,a){return ft()(e,"^")&&(e=tt()(e,jt,Vt),e=tt()(e,Ut,Vt)),ft()(a,"^")&&(a=tt()(a,jt,Vt),a=tt()(a,Ut,Vt)),"{".concat(e,"}^{").concat(a,"}")}function Bt(t,e,a,n,r,i){try{t=tt()(t,Yt,"\nreturn $1"),t=tt()(t,zt,Tt);var o=C()(Function,["x"].concat(F()(Ct),[t]));o=Q.a.apply(void 0,[o].concat(Nt));for(var s=Dt(o,e,a,1e-4),l=at()(e-1,a+1,600),c=new Array(l.length),u=!1,d=pt.a,p=ut.a,h=function(t){return t<e||t>a?0:o(t)/s},v=0;v<l.length;v++){var g=h(l[v]);g<p&&(p=g),g>d&&(d=g),c[v]={x:l[v],y:g},c[v].y<0&&(u=!0)}var f=Dt(h,e,n,1e-4),m=vt()(c,(function(t){return t.x<n})),y=b()(m,2),x=y[0],w=y[1],P=Dt(h,r,i,1e-4),k=c.filter((function(t){return r<=t.x&&t.x<=i}));return{hasNegativeValues:u,normalizingConstant:s,data:c,minY:p,maxY:d,pdf:h,lowerProb:f,upperProb:1-f,xLowerArea:x,xUpperArea:w,rangeProb:P,rangeArea:k}}catch(X){return X}}var Kt=r()("i",{className:"fas fa-times"}),Mt=r()(bt.a,{raw:"P(X \\le x_0)"}),$t=r()(Y.a,{}),_t=r()(bt.a,{raw:"P(X > x_0)"}),It=r()(Y.a,{}),Jt=r()(bt.a,{raw:"P( x_0 \\le X \\le x_1)"}),Wt=r()(Y.a,{}),Gt=function(t){p()(a,t);var e=At(a);function a(t){var n;o()(this,a),n=e.call(this,t),y()(u()(n),"insertLiteralFactory",(function(t){return function(){var e=n.state.code.substring(0,n.state.selection),a=t;e+=a,e+=n.state.code.substring(n.state.selection),n.setState({selection:n.state.selection+a.length},(function(){n.handlePDFChange(e)}))}})),y()(u()(n),"insertFuncFactory",(function(t){return function(){var e=n.state.code.substring(0,n.state.selection),a=" "+t+"()";e+=a,e+=n.state.code.substring(n.state.selection),n.setState({code:e,selection:n.state.selection+a.length-1})}})),y()(u()(n),"handlePDFChange",(function(t){if(lt()(t))return n.setState({encounteredError:new Error("Function cannot be empty "),code:"",selection:0});var e=n.state,a=Bt(t,e.lowerX,e.upperX,e.xval,e.lowerRange,e.upperRange);return rt()(a)?n.setState({code:t,encounteredError:a}):ot()(a.normalizingConstant)?void n.setState(Ot(Ot({code:t},a),{},{encounteredError:null})):n.setState({code:t,encounteredError:new Error("Integration failed.")})})),y()(u()(n),"setUpperDomain",(function(t){var e=n.state,a=e.code,r=e.lowerX,i=e.xval,o=e.lowerRange,s=e.upperRange;if(t<=r)return n.setState({upperX:t,encounteredError:new Error("Upper bound must be larger than lower bound.")});var l=Bt(a,r,t,i,o,s);return rt()(l)?n.setState({upperX:t,encounteredError:l}):ot()(l.normalizingConstant)?void n.setState(Ot(Ot({upperX:t},l),{},{encounteredError:null})):n.setState({upperX:t,encounteredError:new Error("Integration failed.")})})),y()(u()(n),"setLowerDomain",(function(t){var e=n.state,a=e.code,r=e.upperX,i=e.xval,o=e.lowerRange,s=e.upperRange;if(t>=r)return n.setState({lowerX:t,encounteredError:new Error("Lower bound must be smaller than upper bound.")});var l=Bt(a,t,r,i,o,s);return rt()(l)?n.setState({lowerX:t,encounteredError:l}):ot()(l.normalizingConstant)?void n.setState(Ot(Ot({lowerX:t},l),{},{encounteredError:null})):n.setState({lowerX:t,encounteredError:new Error("Integration failed.")})})),y()(u()(n),"handlePopover",(function(t){n.setState({disableTabs:t})}));var r=Bt("x^2",-2,2,-2,-1,1);return n.state=Ot(Ot({code:"x^2",lowerX:-2,upperX:2},r),{},{lowerRange:-1,upperRange:1,xval:-2,disableTabs:!1,selection:3}),n}return l()(a,[{key:"renderEquation",value:function(){var t,e,a="f(x) = \\begin{cases} \\frac{1}{".concat(G()(this.state.normalizingConstant,-4),"} \\cdot");return a+="\\left( ".concat((t=this.state.code,e=tt()(t,jt,Vt),e=tt()(e,Ut,qt),e=tt()(e,"*"," \\cdot "),e=tt()(e,/([+-/])/g," $1 "),e=tt()(e,"exp"," \\operatorname{exp} "),e=tt()(e,"ln"," \\operatorname{ln} "),tt()(e,/sqrt\(([^)]+)\)/g," \\sqrt{$1}"))," \\right)"),a+="& \\text{ ".concat(this.props.t("for")," } x \\in [ ").concat(this.state.lowerX,", ").concat(this.state.upperX," ] \\\\ 0 & \\text{ ").concat(this.props.t("otherwise")," } \\end{cases}"),r()(k.Fragment,{},void 0,r()("h4",{},void 0,this.props.t("normalized-pdf"),":"),r()(bt.a,{raw:a,displayMode:!0,style:{fontSize:20}}))}},{key:"renderGenerate",value:function(){var t=this;return r()("div",{},void 0,r()(yt.b,{legend:this.props.t("lower-bound"),value:this.state.lowerX,step:.1,onChange:this.setLowerDomain,max:this.state.upperX,width:120}),r()(yt.b,{legend:this.props.t("upper-bound"),value:this.state.upperX,step:.1,onChange:this.setUpperDomain,min:this.state.lowerX,width:120}),r()(mt.a,{},void 0,r()(L.a,{style:{marginBottom:5}},void 0,r()(S.a,{size:"sm",className:"mr-2"},void 0,r()(D.a,{variant:"light",onClick:this.insertLiteralFactory("x")},void 0,Kt)),r()(S.a,{size:"sm",className:"mr-10"},void 0,r()(D.a,{variant:"light",size:"sm",onClick:function(){t.handlePDFChange("x^2"),t.setState({selection:3})}},void 0,this.props.t("reset")),r()(D.a,{variant:"light",size:"sm",onClick:function(){var e=t.state.code.substring(0,t.state.selection-1);e+=t.state.code.substring(t.state.selection),t.handlePDFChange(e),t.setState({selection:t.state.selection-1})}},void 0,"\u232b"))),r()(L.a,{style:{marginBottom:5}},void 0,r()(S.a,{size:"sm",className:"mr-10"},void 0,r()(D.a,{variant:"light",onClick:this.insertLiteralFactory("0")},void 0,"0"),r()(D.a,{variant:"light",onClick:this.insertLiteralFactory("1")},void 0,"1"),r()(D.a,{variant:"light",onClick:this.insertLiteralFactory("2")},void 0,"2"),r()(D.a,{variant:"light",onClick:this.insertLiteralFactory("3")},void 0,"3"),r()(D.a,{variant:"light",onClick:this.insertLiteralFactory("4")},void 0,"4"),r()(D.a,{variant:"light",onClick:this.insertLiteralFactory("5")},void 0,"5"),r()(D.a,{variant:"light",onClick:this.insertLiteralFactory("6")},void 0,"6"),r()(D.a,{variant:"light",onClick:this.insertLiteralFactory("7")},void 0,"7"),r()(D.a,{variant:"light",onClick:this.insertLiteralFactory("8")},void 0,"8"),r()(D.a,{variant:"light",onClick:this.insertLiteralFactory("9")},void 0,"9")),r()(S.a,{size:"sm",className:"mr-2"},void 0,r()(D.a,{variant:"light",onClick:this.insertLiteralFactory(".")},void 0,"."))),r()(L.a,{style:{marginBottom:5}},void 0,r()(S.a,{size:"sm",className:"mr-2"},void 0,r()(D.a,{variant:"light",onClick:this.insertLiteralFactory(" + ")},void 0,"+"),r()(D.a,{variant:"light",onClick:this.insertLiteralFactory(" - ")},void 0,"-"),r()(D.a,{variant:"light",onClick:this.insertLiteralFactory(" * ")},void 0,"*"),r()(D.a,{variant:"light",onClick:this.insertLiteralFactory(" / ")},void 0,"/"),r()(D.a,{variant:"light",onClick:this.insertLiteralFactory("^")},void 0,"^")),r()(S.a,{},void 0,["exp","ln","sqrt"].map((function(e,a){return r()(D.a,{variant:"light",onClick:t.insertFuncFactory(e)},a,e)})))),X.a.createElement(xt.a,{ref:function(e){t.textarea=e},legend:"(".concat(this.props.t("non-normalized"),") PDF f(x)"),placeholder:"Enter formula...",defaultValue:this.state.code,onChange:this.handlePDFChange,onBlur:function(e){var a=e.target.selectionStart;t.setState({selection:a})},width:250})))}},{key:"renderTabs",value:function(){var t=this;return this.state.encounteredError?r()(R.a,{variant:"danger"},void 0,this.state.encounteredError.message):this.state.hasNegativeValues?r()(R.a,{variant:"warning"},void 0,this.props.t("no-valid-pdf")):r()(N.a,{defaultActiveKey:1,id:"continuous-distribution-tabs"},void 0,r()(z.a,{eventKey:1,title:Mt,disabled:this.state.disableTabs},void 0,r()(mt.a,{header:this.props.t("probability-density-function")},void 0,r()(bt.a,{raw:"P( X \\le x = ".concat(this.state.xval,") = ").concat(this.state.lowerProb.toFixed(3)),elems:{x:{variable:"x",onChange:function(e){var a=Dt(t.state.pdf,t.state.lowerX,e,1e-4),n=vt()(t.state.data,(function(t){return t.x<e})),r=b()(n,2),i=r[0],o=r[1];t.setState({lowerProb:a,xval:e,xLowerArea:i,xUpperArea:o})},defaultValue:this.state.xval,tooltip:"Click to change value"}},displayMode:!0,onPopover:this.handlePopover}),r()(T.a,{domain:{x:[this.state.lowerX-1,this.state.upperX+1],y:[this.state.minY-.2,this.state.maxY+.2]},theme:V.a.material},void 0,$t,r()(Y.a,{dependentAxis:!0,tickFormat:function(t){return G()(t,-3)}}),r()(q.a,{data:this.state.data,x:"x",y:"y"}),r()(B.a,{data:this.state.xLowerArea,style:{data:{opacity:.3,fill:"tomato"}}})))),r()(z.a,{eventKey:2,title:_t,disabled:this.state.disableTabs},void 0,r()(mt.a,{header:"Probability Density Function (PDF)"},void 0,r()(bt.a,{raw:"P( X > x = ".concat(this.state.xval,") = ").concat((1-this.state.lowerProb).toFixed(3)),elems:{x:{variable:"x",onChange:function(e){var a=Dt(t.state.pdf,e,t.state.upperX,1e-4),n=vt()(t.state.data,(function(t){return t.x<e})),r=b()(n,2),i=r[0],o=r[1];t.setState({lowerProb:1-a,xval:e,xLowerArea:i,xUpperArea:o})},defaultValue:this.state.xval,tooltip:"Click to change value"}},displayMode:!0,onPopover:this.handlePopover}),r()(T.a,{theme:V.a.material,domain:{x:[this.state.lowerX-1,this.state.upperX+1],y:[this.state.minY-.2,this.state.maxY+.2]}},void 0,It,r()(Y.a,{dependentAxis:!0,tickFormat:function(t){return G()(t,-3)}}),r()(q.a,{data:this.state.data,x:"x",y:"y"}),r()(B.a,{data:this.state.xUpperArea,style:{data:{opacity:.3,fill:"tomato"}}})))),r()(z.a,{eventKey:3,title:Jt,disabled:this.state.disableTabs},void 0,r()(mt.a,{header:"Probability Density Function (PDF)"},void 0,r()(bt.a,{raw:"P( L = ".concat(this.state.lowerRange," \\le X \\le U = ").concat(this.state.upperRange,") = ").concat(this.state.rangeProb.toFixed(3)),elems:{L:{variable:"L",onChange:function(e){var a=Dt(t.state.pdf,e,t.state.upperRange,1e-4),n=t.state.data.filter((function(a){return e<=a.x&&a.x<=t.state.upperRange}));t.setState({rangeArea:n,rangeProb:a,lowerRange:e})},defaultValue:this.state.lowerRange,tooltip:"Click to change lower value"},U:{variable:"U",onChange:function(e){var a=Dt(t.state.pdf,t.state.lowerRange,e,1e-4),n=t.state.data.filter((function(a){return t.state.lowerRange<=a.x&&a.x<=e}));t.setState({rangeArea:n,rangeProb:a,upperRange:e})},defaultValue:this.state.upperRange,tooltip:"Click to change upper value"}},displayMode:!0,onPopover:this.handlePopover}),r()(T.a,{domain:{x:[this.state.lowerX-1,this.state.upperX+1],y:[this.state.minY-.2,this.state.maxY+.2]},theme:V.a.material},void 0,Wt,r()(Y.a,{dependentAxis:!0,tickFormat:function(t){return G()(t,-3)}}),r()(q.a,{data:this.state.data,x:"x",y:"y"}),r()(B.a,{data:this.state.rangeArea,style:{data:{opacity:.3,fill:"tomato"}}})))))}},{key:"render",value:function(){return r()(U.a,{style:{maxWidth:1200,margin:"10px auto"}},void 0,r()(U.a.Header,{as:"h2"},void 0,this.props.t("continuous-distribution-probabilities")),r()(U.a.Body,{},void 0,r()(j.a,{},void 0,r()(A.a,{},void 0,r()(O.a,{md:7},void 0,this.renderEquation(),this.renderGenerate()),r()(O.a,{md:5},void 0,this.renderTabs())))))}}]),a}(k.Component);e.default=Object(E.a)("LearnDistribution")(Gt)}}]);