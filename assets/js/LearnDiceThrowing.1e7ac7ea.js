/*! For license information please see LearnDiceThrowing.1e7ac7ea.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[537],{2716:function(t,e,a){"use strict";var r=a(2717);t.exports=r},2717:function(t,e,a){"use strict";var r=a(549),n=a(475);t.exports=function(t,e,a){var i,s,o;if(!r(t))throw new TypeError("invalid argument. First argument must be a collection. Value: `"+t+"`.");if(!n(e))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+e+"`.");for(i=t.length,o=0;o<i;o++)s=e.call(a,t[o],o,t),i!==t.length&&(i=t.length),o<i&&(t[o]=s);return t}},424:function(t,e,a){"use strict";var r=a(405),n=a(408),i=a(409),s=a.n(i),o=a(0),c=a.n(o),l=a(411),d=a(464),u=c.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.variant,o=t.size,u=t.active,f=t.className,v=t.block,h=t.type,p=t.as,b=Object(n.a)(t,["bsPrefix","variant","size","active","className","block","type","as"]),m=Object(l.a)(a,"btn"),y=s()(f,m,u&&"active",i&&m+"-"+i,v&&m+"-block",o&&m+"-"+o);if(b.href)return c.a.createElement(d.a,Object(r.a)({},b,{as:p,ref:e,className:s()(y,b.disabled&&"disabled")}));e&&(b.ref=e),h?b.type=h:p||(b.type="button");var w=p||"button";return c.a.createElement(w,Object(r.a)({},b,{className:y}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},e.a=u},476:function(t,e,a){"use strict";var r=a(405),n=a(408),i=a(409),s=a.n(i),o=a(0),c=a.n(o),l=a(411),d=["xl","lg","md","sm","xs"],u=c.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.className,o=t.noGutters,u=t.as,f=void 0===u?"div":u,v=Object(n.a)(t,["bsPrefix","className","noGutters","as"]),h=Object(l.a)(a,"row"),p=h+"-cols",b=[];return d.forEach((function(t){var e,a=v[t];delete v[t];var r="xs"!==t?"-"+t:"";null!=(e=null!=a&&"object"==typeof a?a.cols:a)&&b.push(""+p+r+"-"+e)})),c.a.createElement(f,Object(r.a)({ref:e},v,{className:s.a.apply(void 0,[i,h,o&&"no-gutters"].concat(b))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},e.a=u},509:function(t,e,a){"use strict";var r=a(405),n=a(408),i=a(409),s=a.n(i),o=a(0),c=a.n(o),l=a(411),d=c.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.fluid,o=t.as,d=void 0===o?"div":o,u=t.className,f=Object(n.a)(t,["bsPrefix","fluid","as","className"]),v=Object(l.a)(a,"container"),h="string"==typeof i?"-"+i:"-fluid";return c.a.createElement(d,Object(r.a)({ref:e},f,{className:s()(u,i?""+v+h:v)}))}));d.displayName="Container",d.defaultProps={fluid:!1},e.a=d},558:function(t,e,a){"use strict";var r=a(405),n=a(408),i=a(409),s=a.n(i),o=a(0),c=a.n(o),l=a(411),d=c.a.forwardRef((function(t,e){var a=t.bsPrefix,i=t.size,o=t.toggle,d=t.vertical,u=t.className,f=t.as,v=void 0===f?"div":f,h=Object(n.a)(t,["bsPrefix","size","toggle","vertical","className","as"]),p=Object(l.a)(a,"btn-group"),b=p;return d&&(b=p+"-vertical"),c.a.createElement(v,Object(r.a)({},h,{ref:e,className:s()(u,b,i&&p+"-"+i,o&&p+"-toggle")}))}));d.displayName="ButtonGroup",d.defaultProps={vertical:!1,toggle:!1,role:"group"},e.a=d},6441:function(t,e,a){"use strict";a.r(e);a(427),a(416),a(421);var r=a(407),n=a.n(r),i=a(414),s=a.n(i),o=a(415),c=a.n(o),l=a(425),d=a.n(l),u=a(418),f=a.n(u),v=a(419),h=a.n(v),p=a(417),b=a.n(p),m=a(412),y=a.n(m),w=a(0),g=a(4172),x=a(424),N=a(558),P=a(493),j=a(476),O=a(509),k=a(465),T=a(2716),D=a.n(T),R=a(473),S=a.n(R),C=a(780),E=a.n(C),G=a(984),z=a.n(G),A=a(666),B=a.n(A),V=a(490),H=a(628),J=a(422);function L(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,r=b()(t);if(e){var n=b()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return h()(this,a)}}Object(J.a)("LearnDiceThrowing");var q=n()(P.a,{md:1},void 0,n()(H.a,{id:"loaded_dice",vertical:!0})),F=function(t){f()(a,t);var e=L(a);function a(t){var r;return s()(this,a),r=e.call(this,t),y()(d()(r),"chooseNSides",(function(t){var e=new Array(t),a=new Array(t);D()(a,(function(e){return 1/t})),D()(e,(function(t){return 0})),r.setState({sides:new Array(t),sideProbs:a,tally:e,valid:!0,draw:null,nThrows:0})})),y()(d()(r),"throwDice",(function(t){for(var e=B()(1,r.state.sides.length+1,1),a=E()(e,{probs:r.state.sideProbs,size:t}),n=r.state.tally.slice(),i=0;i<a.length;i++)n[a[i]-1]+=1;r.setState({draw:a,tally:n,nThrows:r.state.nThrows+t})})),r.state={sides:new Array(6),tally:[0,0,0,0,0,0],nThrows:0,sideProbs:[1/6,1/6,1/6,1/6,1/6,1/6],valid:!0},r}return c()(a,[{key:"renderGrid",value:function(){var t=this;return n()(O.a,{fluid:!0},void 0,n()(j.a,{},void 0,n()(P.a,{md:5},void 0,n()("h3",{},void 0,this.props.t("probabilities"),":"),D()(this.state.sides,(function(e,a){return n()(V.b,{legend:"Side ".concat(a+1),defaultValue:1/t.state.sides.length,step:"any",max:1,min:0,width:100,numbersOnly:!1,onChange:function(e){var r=t.state.sideProbs.slice();r[a]=e;for(var n=0,i=0;i<r.length;i++)n+=r[i];var s=new Array(r.length);D()(s,(function(t){return 0})),t.setState({sideProbs:r,valid:z()(n,1)<=15e-9,tally:s,draw:null})}},a)})),n()(x.a,{onClick:function(){t.setState({tally:t.state.tally.map((function(t){return 0})),nThrows:0})}},void 0,this.props.t("reset"))),n()(P.a,{md:6},void 0,this.renderDice()),q))}},{key:"renderDice",value:function(){var t=this;return this.state.valid?n()(k.a,{fluid:!0},void 0,n()(k.a.Header,{},void 0,this.props.t("dice")),n()(k.a.Body,{},void 0,n()(k.a,{body:!0},void 0,this.state.draw?this.state.draw.join(" - "):"X"),n()(N.a,{},void 0,n()(x.a,{onClick:function(){t.throwDice(1)}},void 0,this.props.t("throw")," \u2685 1x"),n()(x.a,{onClick:function(){t.throwDice(5)}},void 0,this.props.t("throw")," \u2685 5x"),n()(x.a,{onClick:function(){t.throwDice(10)}},void 0,this.props.t("throw")," \u2685 10x")))):n()(k.a,{body:!0},void 0,n()("h3",{},void 0,this.props.t("invalid-probs")))}},{key:"renderTable",value:function(){var t=this;return n()("table",{className:"table table-bordered table-responsive-sm"},void 0,n()("tbody",{},void 0,n()("tr",{},void 0,n()("th",{},void 0,this.props.t("side"),":"),this.state.tally.map((function(t,e){return n()("td",{},e,e+1)}))),n()("tr",{},void 0,n()("th",{},void 0,this.props.t("count"),":"),this.state.tally.map((function(t,e){return n()("td",{},e,t)}))),n()("tr",{},void 0,n()("th",{},void 0,this.props.t("relative-frequency"),":"),this.state.tally.map((function(e,a){return n()("td",{},a,S()(e/t.state.tally.reduce((function(t,e){return t+e})),-3)||"0.000")})))))}},{key:"render",value:function(){return n()(k.a,{id:"diceThrowingModule",style:{maxWidth:1200,margin:"0 auto"}},void 0,n()(k.a.Header,{as:"h4"},void 0,this.props.t("simulate-random-dice-throws")),n()(k.a.Body,{},void 0,n()(V.b,{legend:this.props.t("number-of-sides"),defaultValue:6,step:1,max:20,min:2,onChange:this.chooseNSides}),n()("p",{},void 0,this.props.t("choose-custom-probs")),this.renderGrid(),this.renderTable(),n()("p",{},void 0,this.props.t("total-number-of-throws"),": ",this.state.nThrows)))}}]),a}(w.Component);e.default=Object(g.a)("LearnDiceThrowing")(F)}}]);