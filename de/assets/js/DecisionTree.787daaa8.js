(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{1030:function(t,e,r){"use strict";e.a=function(t){var e=document.createElement("div");e.innerHTML=t,e.style.position="fixed",e.style.opacity=0,e.style.pointerEvents="none",document.body.appendChild(e),window.getSelection().removeAllRanges();var r=document.createRange();r.selectNode(e),window.getSelection().addRange(r),document.execCommand("copy"),document.body.removeChild(e)}},1171:function(t,e){t.exports=function(t){throw new TypeError('"'+t+'" is read-only')},t.exports.default=t.exports,t.exports.__esModule=!0},4092:function(t,e,r){"use strict";r.r(e);r(421),r(437),r(436),r(488),r(505),r(438);var n=r(407),i=r.n(n),o=r(414),a=r.n(o),c=r(415),s=r.n(c),u=r(425),l=r.n(u),d=r(418),p=r.n(d),h=r(419),f=r.n(h),v=r(417),m=r.n(v),g=r(412),y=r.n(g),b=r(0),x=(r(404),r(4172)),T=r(454),C=r(424),w=r(446),M=r.n(w),D=r(484),O=r(422),j=r(4124),k=r(439);r(495);function N(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function I(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?N(Object(r),!0).forEach((function(e){y()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function P(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=m()(t);if(e){var i=m()(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return f()(this,r)}}Object(O.a)("StatisticalModels");var R=0,S=function(t){var e,r=t.x,n=t.y,i=t.data,o=t.type,a=t.quantitative,c=t.impurityMeasure,s=t.scoreThreshold,u=t.maxTreeDepth,l=t.minItemsCount;e=M()(r)?r:[r];try{return"Classification"===o?new j.a({response:n,predictors:e,data:i,quantitative:a,criterion:c,scoreThreshold:s,maxTreeDepth:u,minItemsCount:l}):new j.c({response:n,predictors:e,data:i,quantitative:a,scoreThreshold:s,maxTreeDepth:u,minItemsCount:l})}catch(d){return null}},q=function(t){p()(r,t);var e=P(r);function r(t){var n;a()(this,r),n=e.call(this,t),y()(l()(n),"handlePredict",(function(){n.props.onPredict(n.state.tree,R)})),R+=1;var i=n.props,o=i.x,c=i.y,s=i.data,u=i.type,d=i.quantitative,p=i.impurityMeasure,h=i.scoreThreshold,f=i.maxTreeDepth,v=i.minItemsCount;return n.state=I({tree:S({x:o,y:c,data:s,type:u,quantitative:d,impurityMeasure:p,scoreThreshold:h,maxTreeDepth:f,minItemsCount:v})},t),n}return s()(r,[{key:"render",value:function(){var t=this.state.tree,e=this.props.t;return t?i()("div",{style:{overflowX:"auto",width:"100%"}},void 0,i()("span",{className:"title"},void 0,e("decision-tree-for",{y:this.props.y,counter:R})),i()(j.d,{tree:t.root}),this.props.onPredict?i()(D.a,{tooltip:e("predictions-attached")},void 0,i()(C.a,{variant:"secondary",size:"sm",style:{marginTop:10},onClick:this.handlePredict},void 0,this.props.t("use-model-to-predict"))):null):i()(T.a,{variant:"danger"},void 0,e("missing-attributes"))}}],[{key:"getDerivedStateFromProps",value:function(t,e){if(t.y!==e.y||t.x!==e.x||t.type!==e.type||t.impurityMeasure!==e.impurityMeasure||t.data!==e.data||t.quantitative!==e.quantitative||t.scoreThreshold!==e.scoreThreshold||t.maxTreeDepth!==e.maxTreeDepth||t.minItemsCount!==e.minItemsCount){var r=t.x,n=t.y,i=t.data,o=t.type,a=t.quantitative,c=t.impurityMeasure,s=t.scoreThreshold,u=t.maxTreeDepth,l=t.minItemsCount;return I({tree:S({x:r,y:n,data:i,type:o,quantitative:a,impurityMeasure:c,scoreThreshold:s,maxTreeDepth:u,minItemsCount:l})},t)}return null}}]),r}(b.Component);q.defaultProps={impurityMeasure:"gini",scoreThreshold:.0075,maxTreeDepth:5,minItemsCount:50,onPredict:null},e.default=Object(x.a)("StatisticalModels")(Object(k.a)(q))},4124:function(t,e,r){"use strict";r.d(e,"a",(function(){return ft})),r.d(e,"c",(function(){return vt})),r.d(e,"b",(function(){return mt})),r.d(e,"d",(function(){return gt}));r(661);var n=r(1171),i=r.n(n),o=(r(648),r(780)),a=r.n(o),c=r(470),s=r.n(c),u=r(426),l=r.n(u),d=r(451),p=r.n(d),h=r(548),f=r.n(h),v=r(666),m=r.n(v),g=(r(427),r(416),r(421),r(414)),y=r.n(g),b=r(415),x=r.n(b),T=r(418),C=r.n(T),w=r(419),M=r.n(w),D=r(417),O=r.n(D),j=r(407),k=r.n(j),N=r(0),I=r.n(N),P=r(4172),R=r(4113),S=r(430),q=r(467),B=r.n(q),F=r(680),E=r(1030),z=r(425),A=r.n(z),_=r(412),H=r.n(_),V=(r(404),r(424)),K=r(597),L=r(484);function W(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=O()(t);if(e){var i=O()(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return M()(this,r)}}var G=k()("div",{className:"fa fa-window-maximize"}),J=function(t){C()(r,t);var e=W(r);function r(){var t;return y()(this,r),t=e.call(this),H()(A()(t),"toggleFullscreen",(function(){t.setState({fullscreen:!t.state.fullscreen})})),t.state={fullscreen:!1},t}return x()(r,[{key:"render",value:function(){var t=this.props.t;return k()(N.Fragment,{},void 0,k()(L.a,{id:"fullscreen_tooltip",placement:"bottom",tooltip:t("toggle-fullscreen")},void 0,k()(V.a,{variant:"outline-danger",size:"sm",onClick:this.toggleFullscreen,style:{position:"absolute",top:"10px",right:"32px"}},void 0,G)),k()(K.a,{show:this.state.fullscreen,onHide:this.toggleFullscreen,dialogClassName:"modal-100w"},void 0,k()(K.a.Header,{closeButton:!0},void 0,k()(K.a.Title,{as:"h1"},void 0,t("decision-tree"))),k()(K.a.Body,{style:{height:.75*window.innerHeight,width:"100%",fontSize:32,overflow:"scroll"}},void 0,k()("div",{className:"decision-tree decision-tree-fullscreen"},void 0,this.props.tree)),k()(K.a.Footer,{},void 0,k()(V.a,{onClick:this.toggleFullscreen},void 0,t("close")))))}}]),r}(N.Component),X=Object(P.a)("StatisticalModels")(J);r(107);function $(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=O()(t);if(e){var i=O()(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return M()(this,r)}}var Q=/^[+-]?[\d.]+e?[+-]?\d*$/;function U(t,e){if(!t)return null;if(t.category){var r=t.category;return(Object(S.isPrimitive)(r)||Q.test(r))&&(r=Number(r),B()(r)||(r=r.toFixed(6))),k()("ul",{},void 0,k()("li",{},void 0,k()("span",{className:"decision-tree-leaf"},void 0,e("predict"),": ",r," ")))}return k()("ul",{},void 0,k()("li",{},void 0,k()("span",{},void 0,k()("b",{},void 0," ",t.attribute," ",t.predicateName," ",t.pivot," ?")),k()("ul",{},void 0,k()("li",{},void 0,k()("span",{},void 0,e("no")," ( ",t.notMatchedCount," ",e("obs"),") "),U(t.notMatch,e)),k()("li",{},void 0,k()("span",{},void 0,e("yes")," ( ",t.matchedCount," ",e("obs"),") "),U(t.match,e)))))}var Y=k()("div",{className:"fa fa-times"}),Z=function(t){C()(r,t);var e=$(r);function r(t){var n;return y()(this,r),(n=e.call(this,t)).setState({plotValue:null,plotKey:null,fullscreen:!1}),n}return x()(r,[{key:"componentDidMount",value:function(){var t=this;this.treeWrapper.scrollLeft=.4*this.tree.clientWidth,Object(R.a)(this.tree,{backgroundColor:"white",style:{fontSize:22}}).then((function(e){var r='<img src="'.concat(e,'" style="display: block; margin: 0 auto; max-width: 100%; max-height: 100%" />');t.setState({plotKey:"\x3c!--IMAGE_LOG:".concat(Object(F.a)(6),"_").concat(Object(F.a)(6),"--\x3e"),plotValue:r})}))}},{key:"render",value:function(){var t=this,e=this.props.t,r=U(this.props.tree,e);return I.a.createElement("div",{className:"decision-tree-wrapper",ref:function(e){t.treeWrapper=e}},k()("button",{className:"decision-tree-draggable-bar",draggable:"true",onDragStart:function(e){e.dataTransfer.setData("text/html",t.state.plotValue),e.dataTransfer.setData("text/plain",t.state.plotKey)},onClick:function(){Object(E.a)(t.state.plotValue)},style:{float:"left"}},void 0,e("drag-plot")),k()(X,{variant:"outline-danger",size:"sm",onClick:function(){t.setState({fullscreen:!t.state.fullscreen})},tree:r},void 0,Y),I.a.createElement("div",{className:"decision-tree",ref:function(e){t.tree=e}},r))}}]),r}(N.Component),tt=Object(P.a)("StatisticalModels")(Z);var et=function(t,e,r,n,i){for(var o=[],a=[],c=t[r],s=e.length-1;s>=0;s--){var u=e[s];n(c[u],i)?o.push(u):a.push(u)}return{match:o,notMatch:a}};function rt(t,e){for(var r={},n=e.length-1;n>=0;n--){r[t[e[n]]]=0}for(var i=e.length-1;i>=0;i--){r[t[e[i]]]+=1}return r}function nt(t,e){var r,n=rt(t,e),i=0;for(var o in n)n[o]>i&&(i=n[o],r=o);return r}function it(t,e){var r=rt(t,e),n=0;for(var i in r)if(l()(r,i)){var o=r[i]/e.length;n+=o*(1-o)}return n}function ot(t,e){var r=rt(t,e),n=0;for(var i in r)if(l()(r,i)){var o=r[i]/e.length;n+=-o*p()(o)}return n}function at(t,e){var r=e.length,n=0,i=0,o=0,a=0;if(!r)return null;if(r<2)return 0;for(var c=0;c<r;c++){var s=t[e[c]];o+=(n=s-i)*(s-(i+=n/(a+=1)))}return o/(a-1)}function ct(t,e){var r=e.length;if(!r)return null;for(var n=0,i=0;i<r;i++){n+=(t[e[i]]-n)/(i+1)}return n}var st={"==":function(t,e){return t==e},">=":function(t,e){return t>=e}};function ut(t){var e=this,r=t.data[t.response].length;this.importances={};for(var n=0;n<t.predictors.length;n++)this.importances[t.predictors[n]]=0;this.root=lt({data:t.data,response:t.response,predictors:t.predictors,indices:t.indices?t.indices:m()(0,r,1),minItemsCount:t.minItemsCount||50,minBucket:t.minBucket||f()((t.minItemsCount||50)/3),scoreThreshold:t.scoreThreshold||.01,maxTreeDepth:t.maxTreeDepth||20,quantitative:t.quantitative,criterion:"gini"===t.criterion?it:ot},this.importances),this.predict=function(r,n){if(void 0===n){for(var i=r[t.predictors[0]].length,o=new Array(i),a=0;a<i;a++)o[a]=pt(e.root,r,a);return o}return pt(e.root,r,n)}}function lt(t,e){var r=t.data,n=t.predictors,o=t.indices,c=t.response,u=t.minItemsCount,l=t.scoreThreshold,d=t.maxTreeDepth,p=t.quantitative,h=t.criterion,f=t.minBucket,v=t.nTry,m=o.length;if(0===d||m<=u)return{category:nt(r[c],o)};var g=h(r[c],o),y={},b={gain:0};v&&(i()("predictors"),n=a()(n,{size:v}));for(var x=m-1;x>=0;x--)for(var T=o[x],C=0;C<n.length;C++){var w=n[C],M=r[w][T],D=void 0,O=w+(D=s()(p,w)?">=":"==")+M;if(!y[O]){y[O]=!0;var j=st[D],k=et(r,o,w,j,M),N=h(r[c],k.match),I=h(r[c],k.notMatch),P=0;P+=N*k.match.length,P+=I*k.notMatch.length;var R=g-(P/=m);R>b.gain&&k.match.length>f&&k.notMatch.length>f&&((b=k).predicateName=D,b.predicate=j,b.attribute=w,b.pivot=M,b.gain=R)}}if(!b.gain||b.gain/g<l)return{category:nt(r[c],o)};t.maxTreeDepth=d-1,e[b.attribute]+=b.gain,t.indices=b.match;var S=lt(t,e);t.indices=b.notMatch;var q=lt(t,e);return{attribute:b.attribute,predicate:b.predicate,predicateName:b.predicateName,pivot:b.pivot,match:S,notMatch:q,matchedCount:b.match.length,notMatchedCount:b.notMatch.length}}function dt(t){var e=t.data,r=t.predictors,n=t.indices,o=t.response,c=t.minItemsCount,u=t.scoreThreshold,l=t.maxTreeDepth,d=t.quantitative,p=t.minBucket,h=t.nTry,f=n.length;if(0===l||f<=c)return{category:ct(e[o],n)};var v=at(e[o],n),m={},g={gain:0};h&&(i()("predictors"),r=a()(r,{size:h}));for(var y=f-1;y>=0;y--)for(var b=n[y],x=0;x<r.length;x++){var T=r[x],C=e[T][b],w=void 0,M=T+(w=s()(d,T)?">=":"==")+C;if(!m[M]){m[M]=!0;var D=st[w],O=et(e,n,T,D,C),j=at(e[o],O.match),k=at(e[o],O.notMatch),N=0;N+=j*O.match.length,N+=k*O.notMatch.length;var I=v-(N/=f);I>g.gain&&O.match.length>p&&O.notMatch.length>p&&((g=O).predicateName=w,g.predicate=D,g.attribute=T,g.pivot=C,g.gain=I)}}if(!g.gain||g.gain/v<u)return{category:ct(e[o],n)};t.maxTreeDepth=l-1,t.indices=g.match;var P=dt(t);t.indices=g.notMatch;var R=dt(t);return{attribute:g.attribute,predicate:g.predicate,predicateName:g.predicateName,pivot:g.pivot,match:P,notMatch:R,matchedCount:g.match.length,notMatchedCount:g.notMatch.length}}function pt(t,e,r){for(;;){if(t.category)return t.category;var n=e[t.attribute][r];t=(0,t.predicate)(n,t.pivot)?t.match:t.notMatch}}function ht(t,e,r){for(var n={},i=0;i<t.length;i++){var o=t[i].predict(e,r);n[o]=n[o]?n[o]+1:1}var a,c=-1;for(var s in n)l()(n,s)&&n[s]>c&&(c=n[s],a=s);return a}var ft=ut,vt=function(t){var e=this,r=t.data[t.response].length;this.root=dt({data:t.data,response:t.response,predictors:t.predictors,indices:t.indices?t.indices:m()(0,r,1),minItemsCount:t.minItemsCount||50,minBucket:t.minBucket||f()((t.minItemsCount||50)/3),scoreThreshold:t.scoreThreshold||.01,maxTreeDepth:t.maxTreeDepth||20,quantitative:t.quantitative}),this.predict=function(r,n){if(void 0===n){for(var i=r[t.predictors[0]].length,o=new Array(i),a=0;a<i;a++)o[a]=Number(pt(e.root,r,a));return o}return Number(pt(e.root,r,n))}},mt=function(t){var e=this;this.trees=function(t){for(var e=[],r=t.data[t.response].length,n=m()(0,r,1),i=0;i<t.nTrees;i++)e[i]=a()(n);for(var o=[],c=0;c<t.nTrees;c++){t.indices=e[c];var s=new ut(t);o.push(s)}return o}(t),this.importances={};for(var r=0;r<t.predictors.length;r++){var n=t.predictors[r];this.importances[n]=0;for(var i=0;i<this.trees.length;i++)this.importances[n]+=this.trees[i].importances[n];this.importances[n]/=this.trees.length}this.predict=function(r,n){if(void 0===n){for(var i=r[t.predictors[0]].length,o=new Array(i),a=0;a<i;a++)o[a]=ht(e.trees,r,a);return o}return ht(e.trees,r,n)}},gt=tt},497:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function i(t,e){return n(t.querySelectorAll(e))}},698:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(0);function i(t){var e=Object(n.useRef)(null);return Object(n.useEffect)((function(){e.current=t})),e.current}}}]);