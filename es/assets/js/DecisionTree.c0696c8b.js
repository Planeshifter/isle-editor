(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{1312:function(t,e){t.exports=function(t){throw new TypeError('"'+t+'" is read-only')}},4063:function(t,e,r){"use strict";r.r(e);r(437),r(433),r(425),r(424),r(434),r(411),r(403),r(415);var n=r(400),i=r.n(n),o=r(407),a=r.n(o),c=r(410),s=r.n(c),u=r(420),l=r.n(u),f=r(413),d=r.n(f),h=r(414),p=r.n(h),v=r(412),m=r.n(v),g=r(404),y=r.n(g),b=r(0),T=(r(396),r(4125)),x=r(449),O=r(428),D=r(440),C=r.n(D),w=r(489),M=r(418),j=r(4099);function N(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function P(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?N(Object(r),!0).forEach((function(e){y()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=m()(t);if(e){var i=m()(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return p()(this,r)}}Object(M.a)("StatisticalModels");var S=0,I=function(t){var e,r=t.x,n=t.y,i=t.data,o=t.type,a=t.quantitative,c=t.impurityMeasure,s=t.scoreThreshold,u=t.maxTreeDepth,l=t.minItemsCount;e=C()(r)?r:[r];try{return"Classification"===o?new j.a({response:n,predictors:e,data:i,quantitative:a,criterion:c,scoreThreshold:s,maxTreeDepth:u,minItemsCount:l}):new j.c({response:n,predictors:e,data:i,quantitative:a,scoreThreshold:s,maxTreeDepth:u,minItemsCount:l})}catch(f){return null}},R=function(t){d()(r,t);var e=k(r);function r(t){var n;a()(this,r),n=e.call(this,t),y()(l()(n),"handlePredict",(function(){n.props.onPredict(n.state.tree,S)})),S+=1;var i=n.props,o=i.x,c=i.y,s=i.data,u=i.type,f=i.quantitative,d=i.impurityMeasure,h=i.scoreThreshold,p=i.maxTreeDepth,v=i.minItemsCount;return n.state=P({tree:I({x:o,y:c,data:s,type:u,quantitative:f,impurityMeasure:d,scoreThreshold:h,maxTreeDepth:p,minItemsCount:v})},t),n}return s()(r,[{key:"render",value:function(){var t=this.state.tree,e=this.props.t;return t?i()("div",{style:{overflowX:"auto",width:"100%"}},void 0,i()("span",{className:"title"},void 0,e("decision-tree-for",{y:this.props.y,counter:S})),i()(j.d,{tree:t.root}),this.props.onPredict?i()(w.a,{tooltip:e("predictions-attached")},void 0,i()(O.a,{variant:"secondary",size:"sm",style:{marginTop:10},onClick:this.handlePredict},void 0,this.props.t("use-model-to-predict"))):null):i()(x.a,{variant:"danger"},void 0,e("missing-attributes"))}}],[{key:"getDerivedStateFromProps",value:function(t,e){if(t.y!==e.y||t.x!==e.x||t.type!==e.type||t.impurityMeasure!==e.impurityMeasure||t.data!==e.data||t.quantitative!==e.quantitative||t.scoreThreshold!==e.scoreThreshold||t.maxTreeDepth!==e.maxTreeDepth||t.minItemsCount!==e.minItemsCount){var r=t.x,n=t.y,i=t.data,o=t.type,a=t.quantitative,c=t.impurityMeasure,s=t.scoreThreshold,u=t.maxTreeDepth,l=t.minItemsCount;return P({tree:I({x:r,y:n,data:i,type:o,quantitative:a,impurityMeasure:c,scoreThreshold:s,maxTreeDepth:u,minItemsCount:l})},t)}return null}}]),r}(b.Component);R.defaultProps={impurityMeasure:"gini",scoreThreshold:.0075,maxTreeDepth:5,minItemsCount:50,onPredict:null},e.default=Object(T.a)("StatisticalModels")(R)},4099:function(t,e,r){"use strict";r.d(e,"a",(function(){return ht})),r.d(e,"c",(function(){return pt})),r.d(e,"b",(function(){return vt})),r.d(e,"d",(function(){return mt}));r(740);var n=r(1312),i=r.n(n),o=(r(794),r(904)),a=r.n(o),c=r(470),s=r.n(c),u=r(422),l=r.n(u),f=r(445),d=r.n(f),h=r(585),p=r.n(h),v=r(745),m=r.n(v),g=(r(411),r(403),r(415),r(407)),y=r.n(g),b=r(410),T=r.n(b),x=r(413),O=r.n(x),D=r(414),C=r.n(D),w=r(412),M=r.n(w),j=r(400),N=r.n(j),P=r(0),k=r.n(P),S=r(4125),I=r(4087),R=r(427),q=r(469),E=r.n(q),F=r(791),z=r(420),B=r.n(z),A=r(404),L=r.n(A),V=(r(396),r(428)),H=r(672),K=r(489);function W(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=M()(t);if(e){var i=M()(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return C()(this,r)}}var _=N()("div",{className:"fa fa-window-maximize"}),G=function(t){O()(r,t);var e=W(r);function r(){var t;return y()(this,r),t=e.call(this),L()(B()(t),"toggleFullscreen",(function(){t.setState({fullscreen:!t.state.fullscreen})})),t.state={fullscreen:!1},t}return T()(r,[{key:"render",value:function(){var t=this.props.t;return N()(P.Fragment,{},void 0,N()(K.a,{id:"fullscreen_tooltip",placement:"bottom",tooltip:t("toggle-fullscreen")},void 0,N()(V.a,{variant:"outline-danger",size:"sm",onClick:this.toggleFullscreen,style:{position:"absolute",top:"10px",right:"32px"}},void 0,_)),N()(H.a,{show:this.state.fullscreen,onHide:this.toggleFullscreen,dialogClassName:"modal-100w"},void 0,N()(H.a.Header,{closeButton:!0},void 0,N()(H.a.Title,{as:"h1"},void 0,t("decision-tree"))),N()(H.a.Body,{style:{height:.75*window.innerHeight,width:"100%",fontSize:32,overflow:"scroll"}},void 0,N()("div",{className:"decision-tree decision-tree-fullscreen"},void 0,this.props.tree)),N()(H.a.Footer,{},void 0,N()(V.a,{onClick:this.toggleFullscreen},void 0,t("close")))))}}]),r}(P.Component),J=Object(S.a)("StatisticalModels")(G);r(109);function X(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=M()(t);if(e){var i=M()(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return C()(this,r)}}var $=/^[+-]?[\d.]+e?[+-]?\d*$/;function Q(t,e){if(!t)return null;if(t.category){var r=t.category;return(Object(R.isPrimitive)(r)||$.test(r))&&(r=Number(r),E()(r)||(r=r.toFixed(6))),N()("ul",{},void 0,N()("li",{},void 0,N()("span",{className:"decision-tree-leaf"},void 0,e("predict"),": ",r," ")))}return N()("ul",{},void 0,N()("li",{},void 0,N()("span",{},void 0,N()("b",{},void 0," ",t.attribute," ",t.predicateName," ",t.pivot," ?")),N()("ul",{},void 0,N()("li",{},void 0,N()("span",{},void 0,e("no")," ( ",t.notMatchedCount," ",e("obs"),") "),Q(t.notMatch,e)),N()("li",{},void 0,N()("span",{},void 0,e("yes")," ( ",t.matchedCount," ",e("obs"),") "),Q(t.match,e)))))}var U=N()("div",{className:"fa fa-times"}),Y=function(t){O()(r,t);var e=X(r);function r(t){var n;return y()(this,r),(n=e.call(this,t)).setState({plotValue:null,plotKey:null,fullscreen:!1}),n}return T()(r,[{key:"componentDidMount",value:function(){var t=this;this.treeWrapper.scrollLeft=.4*this.tree.clientWidth,Object(I.a)(this.tree,{backgroundColor:"white",style:{fontSize:22}}).then((function(e){var r='<img src="'.concat(e,'" style="display: block; margin: 0 auto; max-width: 100%; max-height: 100%" />');t.setState({plotKey:"\x3c!--IMAGE_LOG:".concat(Object(F.a)(6),"_").concat(Object(F.a)(6),"--\x3e"),plotValue:r})}))}},{key:"render",value:function(){var t=this,e=this.props.t,r=Q(this.props.tree,e);return k.a.createElement("div",{className:"decision-tree-wrapper",ref:function(e){t.treeWrapper=e}},N()("div",{className:"decision-tree-draggable-bar",draggable:"true",onDragStart:function(e){e.dataTransfer.setData("text/html",t.state.plotValue),e.dataTransfer.setData("text/plain",t.state.plotKey)},style:{float:"left"}},void 0,e("drag-plot")),N()(J,{variant:"outline-danger",size:"sm",onClick:function(){t.setState({fullscreen:!t.state.fullscreen})},tree:r},void 0,U),k.a.createElement("div",{className:"decision-tree",ref:function(e){t.tree=e}},r))}}]),r}(P.Component),Z=Object(S.a)("StatisticalModels")(Y);var tt=function(t,e,r,n,i){for(var o=[],a=[],c=t[r],s=e.length-1;s>=0;s--){var u=e[s];n(c[u],i)?o.push(u):a.push(u)}return{match:o,notMatch:a}};function et(t,e){for(var r={},n=e.length-1;n>=0;n--){r[t[e[n]]]=0}for(var i=e.length-1;i>=0;i--){r[t[e[i]]]+=1}return r}function rt(t,e){var r,n=et(t,e),i=0;for(var o in n)n[o]>i&&(i=n[o],r=o);return r}function nt(t,e){var r=et(t,e),n=0;for(var i in r)if(l()(r,i)){var o=r[i]/e.length;n+=o*(1-o)}return n}function it(t,e){var r=et(t,e),n=0;for(var i in r)if(l()(r,i)){var o=r[i]/e.length;n+=-o*d()(o)}return n}function ot(t,e){var r=e.length,n=0,i=0,o=0,a=0;if(!r)return null;if(r<2)return 0;for(var c=0;c<r;c++){var s=t[e[c]];o+=(n=s-i)*(s-(i+=n/(a+=1)))}return o/(a-1)}function at(t,e){var r=e.length;if(!r)return null;for(var n=0,i=0;i<r;i++){n+=(t[e[i]]-n)/(i+1)}return n}var ct={"==":function(t,e){return t==e},">=":function(t,e){return t>=e}};function st(t){var e=this,r=t.data[t.response].length;this.importances={};for(var n=0;n<t.predictors.length;n++)this.importances[t.predictors[n]]=0;this.root=ut({data:t.data,response:t.response,predictors:t.predictors,indices:t.indices?t.indices:m()(0,r,1),minItemsCount:t.minItemsCount||50,minBucket:t.minBucket||p()((t.minItemsCount||50)/3),scoreThreshold:t.scoreThreshold||.01,maxTreeDepth:t.maxTreeDepth||20,quantitative:t.quantitative,criterion:"gini"===t.criterion?nt:it},this.importances),this.predict=function(r,n){if(void 0===n){for(var i=r[t.predictors[0]].length,o=new Array(i),a=0;a<i;a++)o[a]=ft(e.root,r,a);return o}return ft(e.root,r,n)}}function ut(t,e){var r=t.data,n=t.predictors,o=t.indices,c=t.response,u=t.minItemsCount,l=t.scoreThreshold,f=t.maxTreeDepth,d=t.quantitative,h=t.criterion,p=t.minBucket,v=t.nTry,m=o.length;if(0===f||m<=u)return{category:rt(r[c],o)};var g=h(r[c],o),y={},b={gain:0};v&&(i()("predictors"),n=a()(n,{size:v}));for(var T=m-1;T>=0;T--)for(var x=o[T],O=0;O<n.length;O++){var D=n[O],C=r[D][x],w=void 0,M=D+(w=s()(d,D)?">=":"==")+C;if(!y[M]){y[M]=!0;var j=ct[w],N=tt(r,o,D,j,C),P=h(r[c],N.match),k=h(r[c],N.notMatch),S=0;S+=P*N.match.length,S+=k*N.notMatch.length;var I=g-(S/=m);I>b.gain&&N.match.length>p&&N.notMatch.length>p&&((b=N).predicateName=w,b.predicate=j,b.attribute=D,b.pivot=C,b.gain=I)}}if(!b.gain||b.gain/g<l)return{category:rt(r[c],o)};t.maxTreeDepth=f-1,e[b.attribute]+=b.gain,t.indices=b.match;var R=ut(t,e);t.indices=b.notMatch;var q=ut(t,e);return{attribute:b.attribute,predicate:b.predicate,predicateName:b.predicateName,pivot:b.pivot,match:R,notMatch:q,matchedCount:b.match.length,notMatchedCount:b.notMatch.length}}function lt(t){var e=t.data,r=t.predictors,n=t.indices,o=t.response,c=t.minItemsCount,u=t.scoreThreshold,l=t.maxTreeDepth,f=t.quantitative,d=t.minBucket,h=t.nTry,p=n.length;if(0===l||p<=c)return{category:at(e[o],n)};var v=ot(e[o],n),m={},g={gain:0};h&&(i()("predictors"),r=a()(r,{size:h}));for(var y=p-1;y>=0;y--)for(var b=n[y],T=0;T<r.length;T++){var x=r[T],O=e[x][b],D=void 0,C=x+(D=s()(f,x)?">=":"==")+O;if(!m[C]){m[C]=!0;var w=ct[D],M=tt(e,n,x,w,O),j=ot(e[o],M.match),N=ot(e[o],M.notMatch),P=0;P+=j*M.match.length,P+=N*M.notMatch.length;var k=v-(P/=p);k>g.gain&&M.match.length>d&&M.notMatch.length>d&&((g=M).predicateName=D,g.predicate=w,g.attribute=x,g.pivot=O,g.gain=k)}}if(!g.gain||g.gain/v<u)return{category:at(e[o],n)};t.maxTreeDepth=l-1,t.indices=g.match;var S=lt(t);t.indices=g.notMatch;var I=lt(t);return{attribute:g.attribute,predicate:g.predicate,predicateName:g.predicateName,pivot:g.pivot,match:S,notMatch:I,matchedCount:g.match.length,notMatchedCount:g.notMatch.length}}function ft(t,e,r){for(;;){if(t.category)return t.category;var n=e[t.attribute][r];t=(0,t.predicate)(n,t.pivot)?t.match:t.notMatch}}function dt(t,e,r){for(var n={},i=0;i<t.length;i++){var o=t[i].predict(e,r);n[o]=n[o]?n[o]+1:1}var a,c=-1;for(var s in n)l()(n,s)&&n[s]>c&&(c=n[s],a=s);return a}var ht=st,pt=function(t){var e=this,r=t.data[t.response].length;this.root=lt({data:t.data,response:t.response,predictors:t.predictors,indices:t.indices?t.indices:m()(0,r,1),minItemsCount:t.minItemsCount||50,minBucket:t.minBucket||p()((t.minItemsCount||50)/3),scoreThreshold:t.scoreThreshold||.01,maxTreeDepth:t.maxTreeDepth||20,quantitative:t.quantitative}),this.predict=function(r,n){if(void 0===n){for(var i=r[t.predictors[0]].length,o=new Array(i),a=0;a<i;a++)o[a]=Number(ft(e.root,r,a));return o}return Number(ft(e.root,r,n))}},vt=function(t){var e=this;this.trees=function(t){for(var e=[],r=t.data[t.response].length,n=m()(0,r,1),i=0;i<t.nTrees;i++)e[i]=a()(n);for(var o=[],c=0;c<t.nTrees;c++){t.indices=e[c];var s=new st(t);o.push(s)}return o}(t),this.importances={};for(var r=0;r<t.predictors.length;r++){var n=t.predictors[r];this.importances[n]=0;for(var i=0;i<this.trees.length;i++)this.importances[n]+=this.trees[i].importances[n];this.importances[n]/=this.trees.length}this.predict=function(r,n){if(void 0===n){for(var i=r[t.predictors[0]].length,o=new Array(i),a=0;a<i;a++)o[a]=dt(e.trees,r,a);return o}return dt(e.trees,r,n)}},mt=Z},501:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function i(t,e){return n(t.querySelectorAll(e))}},610:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(0);function i(){return Object(n.useState)(null)}},639:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(644),i=r(0),o=function(t){var e;return"undefined"==typeof document?null:null==t?Object(n.a)().body:("function"==typeof t&&(t=t()),t&&"current"in t&&(t=t.current),(null==(e=t)?void 0:e.nodeType)&&t||null)};function a(t,e){var r=Object(i.useState)((function(){return o(t)})),n=r[0],a=r[1];if(!n){var c=o(t);c&&a(c)}return Object(i.useEffect)((function(){e&&n&&e(n)}),[e,n]),Object(i.useEffect)((function(){var e=o(t);e!==n&&a(e)}),[t,n]),n}},703:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(0);function i(t){var e,r,i=(e=t,(r=Object(n.useRef)(e)).current=e,r);Object(n.useEffect)((function(){return function(){return i.current()}}),[])}},716:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(0);function i(){var t=Object(n.useRef)(!0),e=Object(n.useRef)((function(){return t.current}));return Object(n.useEffect)((function(){return function(){t.current=!1}}),[]),e.current}},717:function(t,e,r){"use strict";function n(t,e){return t.contains?t.contains(e):t.compareDocumentPosition?t===e||!!(16&t.compareDocumentPosition(e)):void 0}r.d(e,"a",(function(){return n}))},808:function(t,e,r){"use strict";function n(t,e){return t.classList?!!e&&t.classList.contains(e):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")}r.d(e,"a",(function(){return n}))},809:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(0);function i(t){var e=Object(n.useRef)(null);return Object(n.useEffect)((function(){e.current=t})),e.current}}}]);