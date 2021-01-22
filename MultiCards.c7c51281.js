/*! For license information please see MultiCards.c7c51281.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{457:function(t,e,r){"use strict";var n=r(487);t.exports=n},487:function(t,e,r){"use strict";var n=Math.ceil;t.exports=n},6771:function(t,e,r){"use strict";r.r(e);r(415),r(412),r(410),r(382),r(384),r(502);var n=r(368),i=r.n(n),s=(r(792),r(826),r(1303),r(401),r(400),r(370),r(374)),a=r.n(s),o=r(375),c=r.n(o),u=r(390),h=r.n(u),l=r(379),d=r.n(l),f=r(380),p=r.n(f),v=r(378),g=r.n(v),m=r(372),y=r.n(m),w=r(0),k=(r(360),r(420)),C=r.n(k),b=r(629),S=r.n(b),L=r(1611),O=r(440),P=r(1105),x=C()("isle:multi-cards:memory");var D=function(t,e){var r=this;return this.pairs=[],this.drawCt=0,this.counter=0,this.solved=[],this.init=function(){r.values=t;for(var e=0;e<t.length;e++){var n=t[e];void 0!==n.type&&r.establishPairs(n.type)}},this.resetGame=function(){r.solved=[],r.drawCt=0,r.counter=0,r.storedCard=null},this.establishPairs=function(t){for(var e=!1,n=0;n<r.pairs.length;n++){var i=r.pairs[n];i.first===t&&(e=!0,i.second=t)}if(!1===e){var s={first:t};r.pairs.push(s)}},this.checkPair=function(t,e,n){if(0!==r.drawCt)return r.drawCt=0,r.storedCard.type===t&&(r.solved.push(e),r.solved.push(r.storedCard.ndx),x("Solved cards: "+r.solved),r.checkSuccess(n),!0);r.drawCt+=1,r.storedCard={type:t,ndx:e}},this.checkSuccess=function(t){if(r.counter+=1,r.counter===r.pairs.length){for(var e=[],n=0;n<r.pairs.length;n++)e.push(2*n),e.push(2*n+1);t(e),r.resetGame()}},this.checkDouble=function(t){return 1===r.drawCt&&t===r.storedCard.ndx},this.checkSolved=function(t){for(var e=!1,n=0;n<r.solved.length;n++)t===r.solved[n]&&(e=!0);return e},this.draw=function(t,n,i){if(t.type){if(!0===r.checkDouble(n))return x("Card is already opened..."),e(n),null;if(!0===r.checkSolved(n))return x("Clicked on an already solved pair..."),e(n),null;if(!1===r.checkPair(t.type,n,i))return x("The two selected cards did not match..."),i([r.storedCard.ndx,n])}},this.init(),this},j=r(815),R=r.n(j),T=r(490),E=r.n(T),F=r(751),M=r.n(F),G=C()("isle:multi-cards:bingo");var K=function(t,e){var r=this;return this.rows=[!1,!1,!1,!1,!1],this.cols=[!1,!1,!1,!1,!1],this.clicked=[],this.diagRight=!1,this.diagLeft=!1,this.draw=function(n,i,s){if(E()(r.clicked,i))return t(i),null;r.clicked.push(i);for(var a=r.cols.length,o=r.rows.length,c=[],u=0;u<o;u++){var h=0+u*a,l=a*(u+1);!0===r.checkLine(s.slice(h,l))&&!1===r.rows[u]&&(r.rows[u]=!0,G("Checked all elements in row "+u),c=c.concat(M()(h,l,1)))}for(var d=function(t){var e=[],n=s.filter((function(r,n){var i=n-t;return i>=0&&i%o==0&&(e.push(n),!0)}));!0===r.checkLine(n)&&!1===r.cols[t]&&(r.cols[t]=!0,G("Checked all elements in column "+t),c=c.concat(e))},f=0;f<a;f++)d(f);for(var p=[],v=[],g=0;g<o;g++){var m=0+g*(a+1);v.push(m),p.push(s[m])}!0===r.checkLine(p)&&!1===r.diagLeft&&(r.diagLeft=!0,c=c.concat(v)),p=[],v=[];for(var y=0;y<o;y++){var w=a-1+y*(a-1);v.push(w),p.push(s[w])}!0===r.checkLine(p)&&!1===r.diagRight&&(r.diagRight=!0,c=c.concat(v)),R()(c),c.length>0&&(G("Completed: "+c),e(c))},this.checkLine=function(t){for(var e=!0,r=0;r<t.length;r++)!1===t[r]&&(e=!1);return e},this};function V(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function B(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?V(Object(r),!0).forEach((function(e){y()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function J(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=g()(t);if(e){var i=g()(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return p()(this,r)}}var A=C()("isle:multi-cards");function I(t){for(var e=[],r=0;r<t;r++)e.push(!1);return e}var N=function(t){d()(r,t);var e=J(r);function r(t){var n;return a()(this,r),n=e.call(this,t),y()(h()(n),"shake",(function(t){n.setState({shaking:t}),setTimeout((function(){n.setState({shaking:[]})}),1300)})),y()(h()(n),"flipCard",(function(t){A("Flip card at index: "+t);var e=n.state.cardList.slice(0);e[t]=!e[t],n.setState({cardList:e},(function(){n.props.onChange(e)}))})),y()(h()(n),"resetCards",(function(t){setTimeout((function(){for(var e=n.state.cardList.slice(0),r=0;r<t.length;r++){var i=t[r];e[i]=!e[i]}n.props.onChange(e),n.setState({cardList:e})}),1500)})),y()(h()(n),"changeFactory",(function(t){return function(e){var r=n.state.cardList.slice(0);r[t]=e,n.setState({cardList:r},(function(){void 0!==n.props.game&&n.gameDraw(t),n.props.onChange(n.state.cardList)}))}})),y()(h()(n),"trigger",(function(t){A("Received text: ".concat(t,":"));for(var e=0;e<n.props.values.length;e++){var r=n.props.values[e];if(r.voiceKey){var i=r.voiceKey;-1!==t.search(i)&&(A("Received ".concat(i,". This should flip card number ").concat(e,".")),n.changeFactory(e)(!0))}}})),n.state={cardList:I(n.props.values.length),shaking:[]},n}return c()(r,[{key:"componentDidMount",value:function(){"memory"===this.props.game?this.Memory=new D(this.props.values,this.flipCard):"bingo"===this.props.game&&(this.Bingo=new K(this.flipCard,this.shake))}},{key:"getCard",value:function(t){var e=this.props.id+"_"+t,r=this.props.values,n="front value not defined",s="back value not defined";r[t]&&(r[t].front&&(n=r[t].front),r[t].back&&(s=r[t].back));var a=S()(this.props.cardStyles);return this.state.shaking.includes(t)&&(a.container.animation="shake-top 1.2s"),i()(L.a,{value:this.state.cardList[t],cardStyles:a,onChange:this.changeFactory(t),oneTime:this.props.oneTime,id:e},t,i()("div",{},void 0,n),i()("div",{},void 0,s))}},{key:"gameDraw",value:function(t){var e=this.props.values[t];"memory"===this.props.game?this.Memory.draw(e,t,this.resetCards):"bingo"===this.props.game&&this.Bingo.draw(e,t,this.state.cardList)}},{key:"renderCards",value:function(){for(var t=[],e=!1,r=0;r<this.props.values.length;r++)t.push(this.getCard(r)),this.props.values[r].voiceKey&&(e=!0);return e&&t.push(i()(P.a,{mode:"none",autorecord:!0,language:this.props.language,onSegment:this.trigger})),t}},{key:"render",value:function(){var t=B(B({overflow:"auto"},{animationName:this.props.animation.name,animationDuration:this.props.animation.duration}),this.props.style);return i()("div",{style:t},void 0,this.renderCards())}}]),r}(w.Component);N.defaultProps={animation:{},cardStyles:{container:{},front:{},back:{}},game:null,onChange:function(){},language:"en-US",oneTime:!1,values:[],style:{}},N.contextType=O.a;e.default=N},751:function(t,e,r){"use strict";var n=r(901);t.exports=n},792:function(t,e,r){"use strict";var n=r(512),i=r(1208)(!0);n(n.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(858)("includes")},815:function(t,e,r){"use strict";t.exports=function(t,e,r){return 0===t.length?t:e?(r||t.sort(e),function(t,e){for(var r=1,n=t.length,i=t[0],s=t[0],a=1;a<n;++a)if(s=i,e(i=t[a],s)){if(a===r){r++;continue}t[r++]=i}return t.length=r,t}(t,e)):(r||t.sort(),function(t){for(var e=1,r=t.length,n=t[0],i=t[0],s=1;s<r;++s,i=n)if(i=n,(n=t[s])!==i){if(s===e){e++;continue}t[e++]=n}return t.length=e,t}(t))}},826:function(t,e,r){"use strict";var n=r(512),i=r(1210),s="includes";n(n.P+n.F*r(1211)(s),"String",{includes:function(t){return!!~i(this,t,s).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},901:function(t,e,r){"use strict";var n=r(457),i=r(414).isPrimitive,s=r(364),a=r(1037);t.exports=function(t,e,r){var o,c,u,h;if(!i(t)||s(t))throw new TypeError("invalid argument. Start must be numeric. Value: `"+t+"`.");if(!i(e)||s(e))throw new TypeError("invalid argument. Stop must be numeric. Value: `"+e+"`.");if(arguments.length<3)u=1;else if(!i(u=r)||s(u))throw new TypeError("invalid argument. Increment must be numeric. Value: `"+u+"`.");if((c=n((e-t)/u))>a)throw new RangeError("invalid arguments. Generated array exceeds maximum array length.");if(c<=1)return[t];for((o=[]).push(t),h=1;h<c;h++)o.push(t+u*h);return o}}}]);