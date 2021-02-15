/*! For license information please see LearnDiceThrowing.c4eb6aa8.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{2674:function(t,e,r){"use strict";var a=r(2675);t.exports=a},2675:function(t,e,r){"use strict";var a=r(581),n=r(481);t.exports=function(t,e,r){var i,o,s;if(!a(t))throw new TypeError("invalid argument. First argument must be a collection. Value: `"+t+"`.");if(!n(e))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+e+"`.");for(i=t.length,s=0;s<i;s++)o=e.call(r,t[s],s,t),i!==t.length&&(i=t.length),s<i&&(t[s]=o);return t}},455:function(t,e,r){"use strict";var a=r(398),n=r(401),i=r(402),o=r.n(i),s=r(0),l=r.n(s),c=r(408),d=["xl","lg","md","sm","xs"],u=l.a.forwardRef((function(t,e){var r=t.bsPrefix,i=t.className,s=t.noGutters,u=t.as,f=void 0===u?"div":u,v=Object(n.a)(t,["bsPrefix","className","noGutters","as"]),h=Object(c.a)(r,"row"),p=h+"-cols",b=[];return d.forEach((function(t){var e,r=v[t];delete v[t];var a="xs"!==t?"-"+t:"";null!=(e=null!=r&&"object"==typeof r?r.cols:r)&&b.push(""+p+a+"-"+e)})),l.a.createElement(f,Object(a.a)({ref:e},v,{className:o.a.apply(void 0,[i,h,s&&"no-gutters"].concat(b))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},e.a=u},472:function(t,e,r){"use strict";var a=r(398),n=r(401),i=r(402),o=r.n(i),s=r(0),l=r.n(s),c=r(408),d=l.a.forwardRef((function(t,e){var r=t.bsPrefix,i=t.fluid,s=t.as,d=void 0===s?"div":s,u=t.className,f=Object(n.a)(t,["bsPrefix","fluid","as","className"]),v=Object(c.a)(r,"container"),h="string"==typeof i?"-"+i:"-fluid";return l.a.createElement(d,Object(a.a)({ref:e},f,{className:o()(u,i?""+v+h:v)}))}));d.displayName="Container",d.defaultProps={fluid:!1},e.a=d},618:function(t,e,r){"use strict";var a=r(398),n=r(401),i=r(402),o=r.n(i),s=r(0),l=r.n(s),c=r(408),d=l.a.forwardRef((function(t,e){var r=t.bsPrefix,i=t.size,s=t.toggle,d=t.vertical,u=t.className,f=t.as,v=void 0===f?"div":f,h=Object(n.a)(t,["bsPrefix","size","toggle","vertical","className","as"]),p=Object(c.a)(r,"btn-group"),b=p;return d&&(b=p+"-vertical"),l.a.createElement(v,Object(a.a)({},h,{ref:e,className:o()(u,b,i&&p+"-"+i,s&&p+"-toggle")}))}));d.displayName="ButtonGroup",d.defaultProps={vertical:!1,toggle:!1,role:"group"},e.a=d},6423:function(t,e,r){"use strict";r.r(e);r(411),r(403),r(415);var a=r(400),n=r.n(a),i=r(407),o=r.n(i),s=r(410),l=r.n(s),c=r(420),d=r.n(c),u=r(413),f=r.n(u),v=r(414),h=r.n(v),p=r(412),b=r.n(p),m=r(404),w=r.n(m),y=r(0),g=r(4125),x=r(428),N=r(618),P=r(495),j=r(455),T=r(472),O=r(465),k=r(2674),D=r.n(k),R=r(477),S=r.n(R),C=r(904),E=r.n(C),G=r(1123),A=r.n(G),V=r(745),z=r.n(V),B=r(503),H=r(673),J=r(418);function L(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,a=b()(t);if(e){var n=b()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return h()(this,r)}}Object(J.a)("LearnDiceThrowing");var q=n()(P.a,{md:1},void 0,n()(H.a,{id:"loaded_dice",vertical:!0})),F=function(t){f()(r,t);var e=L(r);function r(t){var a;return o()(this,r),a=e.call(this,t),w()(d()(a),"chooseNSides",(function(t){var e=new Array(t),r=new Array(t);D()(r,(function(e){return 1/t})),D()(e,(function(t){return 0})),a.setState({sides:new Array(t),sideProbs:r,tally:e,valid:!0,draw:null,nThrows:0})})),w()(d()(a),"throwDice",(function(t){for(var e=z()(1,a.state.sides.length+1,1),r=E()(e,{probs:a.state.sideProbs,size:t}),n=a.state.tally.slice(),i=0;i<r.length;i++)n[r[i]-1]+=1;a.setState({draw:r,tally:n,nThrows:a.state.nThrows+t})})),a.state={sides:new Array(6),tally:[0,0,0,0,0,0],nThrows:0,sideProbs:[1/6,1/6,1/6,1/6,1/6,1/6],valid:!0},a}return l()(r,[{key:"renderGrid",value:function(){var t=this;return n()(T.a,{fluid:!0},void 0,n()(j.a,{},void 0,n()(P.a,{md:5},void 0,n()("h3",{},void 0,this.props.t("probabilities"),":"),D()(this.state.sides,(function(e,r){return n()(B.b,{legend:"Side ".concat(r+1),defaultValue:1/t.state.sides.length,step:"any",max:1,min:0,width:100,numbersOnly:!1,onChange:function(e){var a=t.state.sideProbs.slice();a[r]=e;for(var n=0,i=0;i<a.length;i++)n+=a[i];var o=new Array(a.length);D()(o,(function(t){return 0})),t.setState({sideProbs:a,valid:A()(n,1)<=15e-9,tally:o,draw:null})}},r)})),n()(x.a,{onClick:function(){t.setState({tally:t.state.tally.map((function(t){return 0})),nThrows:0})}},void 0,this.props.t("reset"))),n()(P.a,{md:6},void 0,this.renderDice()),q))}},{key:"renderDice",value:function(){var t=this;return this.state.valid?n()(O.a,{fluid:!0},void 0,n()(O.a.Header,{},void 0,this.props.t("dice")),n()(O.a.Body,{},void 0,n()(O.a,{body:!0},void 0,this.state.draw?this.state.draw.join(" - "):"X"),n()(N.a,{},void 0,n()(x.a,{onClick:function(){t.throwDice(1)}},void 0,this.props.t("throw")," \u2685 1x"),n()(x.a,{onClick:function(){t.throwDice(5)}},void 0,this.props.t("throw")," \u2685 5x"),n()(x.a,{onClick:function(){t.throwDice(10)}},void 0,this.props.t("throw")," \u2685 10x")))):n()(O.a,{body:!0},void 0,n()("h3",{},void 0,this.props.t("invalid-probs")))}},{key:"renderTable",value:function(){var t=this;return n()("table",{className:"table table-bordered table-responsive-sm"},void 0,n()("tbody",{},void 0,n()("tr",{},void 0,n()("th",{},void 0,this.props.t("side"),":"),this.state.tally.map((function(t,e){return n()("td",{},e,e+1)}))),n()("tr",{},void 0,n()("th",{},void 0,this.props.t("count"),":"),this.state.tally.map((function(t,e){return n()("td",{},e,t)}))),n()("tr",{},void 0,n()("th",{},void 0,this.props.t("relative-frequency"),":"),this.state.tally.map((function(e,r){return n()("td",{},r,S()(e/t.state.tally.reduce((function(t,e){return t+e})),-3)||"0.000")})))))}},{key:"render",value:function(){return n()(O.a,{id:"diceThrowingModule",style:{maxWidth:1200,margin:"0 auto"}},void 0,n()(O.a.Header,{as:"h4"},void 0,this.props.t("simulate-random-dice-throws")),n()(O.a.Body,{},void 0,n()(B.b,{legend:this.props.t("number-of-sides"),defaultValue:6,step:1,max:20,min:2,onChange:this.chooseNSides}),n()("p",{},void 0,this.props.t("choose-custom-probs")),this.renderGrid(),this.renderTable(),n()("p",{},void 0,this.props.t("total-number-of-throws"),": ",this.state.nThrows)))}}]),r}(y.Component);e.default=Object(g.a)("LearnDiceThrowing")(F)}}]);