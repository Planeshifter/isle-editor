(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{3989:function(e,t,r){"use strict";r.r(t);r(411),r(403),r(415);var n=r(400),s=r.n(n),i=(r(660),r(407)),o=r.n(i),a=r(410),l=r.n(a),c=r(420),p=r.n(c),u=r(413),v=r.n(u),f=r(414),d=r.n(f),h=r(412),m=r.n(h),y=r(404),g=r.n(y),w=r(0),b=(r(396),r(864)),k=r.n(b),x=r(920),N=r.n(x),C=r(621),A=r.n(C);r(347);function L(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=m()(e);if(t){var s=m()(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return d()(this,r)}}function S(e){return k()(e*A.a/180)}function T(e){return N()(e*A.a/180)}var O=s()("div",{className:"seal-outer-border"}),R=s()("div",{className:"seal-fine-border"}),E=s()("div",{className:"seal-logo"}),D=s()("div",{className:"seal-lower-logo"}),I=function(e){v()(r,e);var t=L(r);function r(e){var n;return o()(this,r),n=t.call(this,e),g()(p()(n),"curvedText",(function(e,t,r,n){var i=r/((e=e.split("")).length-1),o=184-r/2*-1;o-=n;var a=[],l=t/2;return e.forEach((function(e){var t=S(o),r=T(o),n=-1*o-180,c={position:"absolute",left:l*t+l+4,top:l*r+l,transformOrigin:"0% 0%",transform:n="rotate("+n+"deg)"},p=s()("p",{style:c},void 0,e);a.push(p),o-=i})),a})),g()(p()(n),"curvedInvertedText",(function(e,t,r,n){var i=r/((e=e.split("")).length-1),o=0-r/2,a=[],l=t/2;return e.forEach((function(e){var t=S(o),r=T(o),n=-1*o,c={position:"absolute",left:l*t+l+4,top:l*r+l,transformOrigin:"50% 50%",transform:n="rotate("+n+"deg)"},p=s()("p",{style:c},void 0,e);a.push(p),o+=i})),a})),g()(p()(n),"getUpperLine",(function(){var e=n.curvedText(n.props.upper,195,n.props.upperArc,0);return s()("div",{},void 0,e)})),g()(p()(n),"getLowerLine",(function(){var e=n.curvedInvertedText(n.props.lower,180,n.props.lowerArc,0);return s()("div",{},void 0,e)})),g()(p()(n),"triggerClick",(function(){n.props.onClick(),n.props.removable&&n.setState({exit:!0})})),n.state={exit:!1},n}return l()(r,[{key:"componentDidUpdate",value:function(e){!0===this.props.active&&!1===e.active&&this.props.onActivate()}},{key:"getStyle",value:function(){var e=this.props.style||{};return this.props.removable&&(this.state.exit?e.pointerEvents="none":e.cursor="pointer"),this.props.active?(e.opacity=1,e.filter="grayscale(0%)",e.WebkitFilter="grayscale(0%)",this.props.scale&&(e.transform?e.transform+="scale("+this.props.scale+")":e.transform="scale("+this.props.scale+")")):(e.WebkitFilter="grayscale(100%)",e.filter="grayscale(100%)",e.opacity=.3,this.props.scale&&(e.transform?e.transform+="scale("+this.props.scale+")":e.transform="scale("+this.props.scale+")")),e}},{key:"render",value:function(){var e=this.getStyle(),t=this.props.innerStyle,r="seal-container";return this.state.exit&&(r+=" seal-exit"),s()("div",{role:"button",tabIndex:0,onClick:this.triggerClick,onKeyPress:this.triggerClick,style:e,className:r},void 0,O,R,s()("div",{style:t,className:"seal-inner-circle"}),this.props.noOrnaments?null:E,this.props.noOrnaments?null:D,s()("div",{className:"seal-wrapper"},void 0,s()("div",{className:"seal-title"},void 0,this.props.title)),s()("div",{className:"seal-lower-line"},void 0,this.getLowerLine()),s()("div",{className:"seal-upper"},void 0,this.getUpperLine()))}}]),r}(w.Component);I.defaultProps={active:!0,onActivate:function(){},onClick:function(){},scale:null,lower:"The lower text",lowerArc:150,removable:!1,style:null,innerStyle:{},upper:"The upper text",upperArc:150,title:"Enter a title",noOrnaments:!1},t.default=I}}]);