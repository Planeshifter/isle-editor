(window.webpackJsonp=window.webpackJsonp||[]).push([[888],{486:function(t,e,n){"use strict";var a=n(407),r=n.n(a),o=(n(0),n(404),n(424)),i=n(513),s=n(511),u=n(507),c=n(546),l=r()(o.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,r()("div",{className:"fa fa-question"}));e.a=function(t){var e=r()(i.a,{id:"popover-positioned-right"},void 0,r()(s.a,{},void 0,t.title),r()(u.a,{},void 0,t.content));return r()(c.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:e},void 0,l)}},6364:function(t,e,n){"use strict";n.r(e);n(427),n(416),n(421);var a=n(407),r=n.n(a),o=n(414),i=n.n(o),s=n(415),u=n.n(s),c=n(425),l=n.n(c),p=n(418),f=n.n(p),d=n(419),h=n.n(d),m=n(417),y=n.n(m),g=n(412),v=n.n(g),C=n(0),T=(n(404),n(424)),x=n(465),S=n(730),b=n.n(S),V=n(470),q=n.n(V),w=n(446),D=n.n(w),R=n(517),k=n.n(R),I=n(452),M=n.n(I),P=n(433),z=n.n(P),N=n(508),A=n(490),B=n(1135),F=n(1371),J=n(462),_=n(486);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=y()(t);if(e){var r=y()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return h()(this,n)}}function G(t,e){return t?"Classificiation"===e?M()(z()(t.length)):t.length<3?1:M()(t.length/3):1}var H=function(t){f()(n,t);var e=j(n);function n(t){var a;return i()(this,n),a=e.call(this,t),v()(l()(a),"compute",(function(){var t=a.state,e=t.y,n=t.x,o=t.type,i=t.nTrees,s=t.nTry,u=t.impurityMeasure,c=t.scoreThreshold,l=t.maxTreeDepth,p=t.minItemsCount,f=r()(F.a,{x:n,y:e,type:o,nTrees:i,nTry:s,impurityMeasure:u,scoreThreshold:c,maxTreeDepth:l,minItemsCount:p,quantitative:a.props.quantitative,data:a.props.data,onPredict:function(t,n){var r=k()(a.props.data,1);if("Classification"===o){var i=a.props.categorical.slice(),s=t.predict(r).map((function(t){return String(t)})),u="pred_forest"+n;r[u]=s,q()(i,u)||i.push(u),u="correct_forest"+n;var c=a.props.data[e];r[u]=s.map((function(t,e){return t===String(c[e])?"Yes":"No"})),q()(i,u)||i.push(u),a.props.onGenerate(a.props.quantitative,i,r)}}});a.props.logAction(J.B,{y:e,x:n,type:o,nTrees:i,nTry:s}),a.props.onCreated(f)})),a.state={y:t.categorical[0],x:t.quantitative[0],type:"Classification",nTrees:50,nTry:1,impurityMeasure:"gini",scoreThreshold:.01,maxTreeDepth:20,minItemsCount:50},a}return u()(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.categorical,a=e.quantitative,o=e.t,i=this.state,s=i.x,u=i.y,c=i.type,l=i.nTrees,p=i.nTry;return r()(x.a,{style:{fontSize:"14px",maxWidth:600}},void 0,r()(x.a.Header,{as:"h4"},void 0,o("Random Forest"),r()(_.a,{title:o("Random Forest"),content:"Instead of growing a single decision tree, a random forest as an ensemble method constructs many decision trees at once and returns the average of the predictions (regression case) or the majority vote (classification case) of the individual trees"})),r()(x.a.Body,{},void 0,r()(N.a,{legend:o("type"),options:["Classification"],defaultValue:c,onChange:function(e){e!==t.state.type&&t.setState({type:e,y:"Classification"===e?n[0]:a[0],nTry:G(t.state.x,e)})}}),r()(N.a,{legend:o("outcome-y"),options:"Classification"===c?n:a,defaultValue:u,onChange:function(e){return t.setState({y:e})}}),r()(N.a,{legend:o("predictors-x"),multi:!0,options:b()(a.concat(n)),defaultValue:s||"",onChange:function(e){t.setState({x:e,nTry:G(e,c)})}}),r()(A.b,{legend:o("number-of-trees"),defaultValue:l,inputStyle:{float:"right"},onChange:function(e){return t.setState({nTrees:e})},tooltipPlacement:"top",min:1}),r()(A.b,{legend:o("predictors-to-check"),defaultValue:p,inputStyle:{float:"right"},onChange:function(e){return t.setState({nTry:e})},tooltipPlacement:"top",min:1,max:D()(s)?s.length:1}),r()(B.a,{header:o("change-tree-features"),headerStyle:{fontSize:"1rem"}},void 0,r()(A.b,{legend:o("score-threshold-for-split"),min:0,max:1,step:.001,defaultValue:this.state.scoreThreshold,onChange:function(e){return t.setState({scoreThreshold:e})}}),r()(A.b,{legend:o("maximum-tre-depth"),min:1,max:50,defaultValue:this.state.maxTreeDepth,onChange:function(e){return t.setState({maxTreeDepth:e})}}),r()(A.b,{legend:o("min-obs-leafs"),min:1,defaultValue:this.state.minItemsCount,onChange:function(e){return t.setState({minItemsCount:e})}})),"Classification"===c?r()(N.a,{legend:o("impurity-measure"),defaultValue:this.state.impurityMeasure,options:["gini","entropy"],onChange:function(e){return t.setState({impurityMeasure:e})}}):null,r()(T.a,{disabled:!s||0===s.length,variant:"primary",block:!0,onClick:this.compute},void 0,o("calculate"))))}}]),n}(C.Component);H.defaultProps={logAction:function(){}},e.default=H}}]);