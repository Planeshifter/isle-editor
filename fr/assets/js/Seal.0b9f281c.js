(window.webpackJsonp=window.webpackJsonp||[]).push([[950],{3906:function(e,t,r){"use strict";r.r(t);r(421);var n,s,o,i,a=r(407),l=r.n(a),c=r(414),p=r.n(c),u=r(416),f=r.n(u),v=r(424),d=r.n(v),h=r(418),m=r.n(h),y=r(419),g=r.n(y),w=r(417),b=r.n(w),x=r(412),k=r.n(x),N=(r(664),r(430),r(0)),C=(r(404),r(734)),O=r.n(C),L=r(797),T=r.n(L),R=r(567),S=r.n(R),A=r(442);r(350);function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=b()(e);if(t){var s=b()(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return g()(this,r)}}function I(e){return O()(e*S.a/180)}function P(e){return T()(e*S.a/180)}var B=function(e){m()(r,e);var t=E(r);function r(e){var n;return p()(this,r),n=t.call(this,e),k()(d()(n),"curvedText",(function(e,t,r,n){var s=r/((e=e.split("")).length-1),o=184-r/2*-1;o-=n;var i=[],a=t/2;return e.forEach((function(e){var t=I(o),r=P(o),n=-1*o-180,c={position:"absolute",left:a*t+a+4,top:a*r+a,transformOrigin:"0% 0%",transform:n="rotate("+n+"deg)"},p=l()("p",{style:c},void 0,e);i.push(p),o-=s})),i})),k()(d()(n),"curvedInvertedText",(function(e,t,r,n){var s=r/((e=e.split("")).length-1),o=0-r/2,i=[],a=t/2;return e.forEach((function(e){var t=I(o),r=P(o),n=-1*o,c={position:"absolute",left:a*t+a+4,top:a*r+a,transformOrigin:"50% 50%",transform:n="rotate("+n+"deg)"},p=l()("p",{style:c},void 0,e);i.push(p),o+=s})),i})),k()(d()(n),"getUpperLine",(function(){var e=n.curvedText(n.props.upper,195,n.props.upperArc,0);return l()("div",{},void 0,e)})),k()(d()(n),"getLowerLine",(function(){var e=n.curvedInvertedText(n.props.lower,180,n.props.lowerArc,0);return l()("div",{},void 0,e)})),k()(d()(n),"triggerClick",(function(){n.props.onClick(),n.props.removable&&n.setState({exit:!0})})),n.state={exit:!1},n}return f()(r,[{key:"getStyle",value:function(){var e=this.props.style||{};return this.props.removable&&(this.state.exit?e.pointerEvents="none":e.cursor="pointer"),this.props.active?(e.opacity=1,e.filter="grayscale(0%)",e.WebkitFilter="grayscale(0%)",this.props.scale&&(e.transform?e.transform+="scale("+this.props.scale+")":e.transform="scale("+this.props.scale+")")):(e.WebkitFilter="grayscale(100%)",e.filter="grayscale(100%)",e.opacity=.3,this.props.scale&&(e.transform?e.transform+="scale("+this.props.scale+")":e.transform="scale("+this.props.scale+")")),e}},{key:"render",value:function(){var e=this.getStyle(),t=this.props.innerStyle,r="seal-container";return this.state.exit&&(r+=" seal-exit"),l()("div",{role:"button",tabIndex:0,onClick:this.triggerClick,onKeyPress:this.triggerClick,style:e,className:r},void 0,n||(n=l()("div",{className:"seal-outer-border"})),s||(s=l()("div",{className:"seal-fine-border"})),l()("div",{style:t,className:"seal-inner-circle"}),this.props.noOrnaments?null:o||(o=l()("div",{className:"seal-logo"})),this.props.noOrnaments?null:i||(i=l()("div",{className:"seal-lower-logo"})),l()("div",{className:"seal-wrapper"},void 0,l()("div",{className:"seal-title"},void 0,this.props.title)),l()("div",{className:"seal-lower-line"},void 0,this.getLowerLine()),l()("div",{className:"seal-upper"},void 0,this.getUpperLine()))}}]),r}(N.Component);B.defaultProps={active:!0,onClick:function(){},scale:null,lower:"The lower text",lowerArc:150,removable:!1,style:null,innerStyle:{},upper:"The upper text",upperArc:150,title:"Enter a title",noOrnaments:!1},t.default=Object(A.a)(B)}}]);