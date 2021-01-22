/*! For license information please see LearnDiceThrowing.b676f1ed.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{1984:function(t,e,r){"use strict";var n=r(1985);t.exports=n},1985:function(t,e,r){"use strict";var n=r(811),a=r(491);t.exports=function(t,e,r){var i,o,s;if(!n(t))throw new TypeError("invalid argument. First argument must be a collection. Value: `"+t+"`.");if(!a(e))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+e+"`.");for(i=t.length,s=0;s<i;s++)o=e.call(r,t[s],s,t),i!==t.length&&(i=t.length),s<i&&(t[s]=o);return t}},437:function(t,e,r){"use strict";var n=r(365),a=r(363),i=r(367),o=r.n(i),s=r(0),u=r.n(s),c=r(376),l=["xl","lg","md","sm","xs"],d=u.a.forwardRef((function(t,e){var r=t.bsPrefix,i=t.className,s=t.noGutters,d=t.as,f=void 0===d?"div":d,v=Object(a.a)(t,["bsPrefix","className","noGutters","as"]),h=Object(c.a)(r,"row"),p=h+"-cols",m=[];return l.forEach((function(t){var e,r=v[t];delete v[t];var n="xs"!==t?"-"+t:"";null!=(e=null!=r&&"object"==typeof r?r.cols:r)&&m.push(""+p+n+"-"+e)})),u.a.createElement(f,Object(n.a)({ref:e},v,{className:o.a.apply(void 0,[i,h,s&&"no-gutters"].concat(m))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},e.a=d},457:function(t,e,r){"use strict";var n=r(487);t.exports=n},460:function(t,e,r){"use strict";var n=r(365),a=r(363),i=r(367),o=r.n(i),s=r(0),u=r.n(s),c=r(376),l=u.a.forwardRef((function(t,e){var r=t.bsPrefix,i=t.fluid,s=t.as,l=void 0===s?"div":s,d=t.className,f=Object(a.a)(t,["bsPrefix","fluid","as","className"]),v=Object(c.a)(r,"container"),h="string"==typeof i?"-"+i:"-fluid";return u.a.createElement(l,Object(n.a)({ref:e},f,{className:o()(d,i?""+v+h:v)}))}));l.displayName="Container",l.defaultProps={fluid:!1},e.a=l},487:function(t,e,r){"use strict";var n=Math.ceil;t.exports=n},632:function(t,e,r){"use strict";var n=r(365),a=r(363),i=r(367),o=r.n(i),s=r(0),u=r.n(s),c=r(376),l=u.a.forwardRef((function(t,e){var r=t.bsPrefix,i=t.size,s=t.toggle,l=t.vertical,d=t.className,f=t.as,v=void 0===f?"div":f,h=Object(a.a)(t,["bsPrefix","size","toggle","vertical","className","as"]),p=Object(c.a)(r,"btn-group"),m=p;return l&&(m=p+"-vertical"),u.a.createElement(v,Object(n.a)({},h,{ref:e,className:o()(d,m,i&&p+"-"+i,s&&p+"-toggle")}))}));l.displayName="ButtonGroup",l.defaultProps={vertical:!1,toggle:!1,role:"group"},e.a=l},6695:function(t,e,r){"use strict";r.r(e);r(382),r(370),r(384);var n=r(368),a=r.n(n),i=r(374),o=r.n(i),s=r(375),u=r.n(s),c=r(390),l=r.n(c),d=r(379),f=r.n(d),v=r(380),h=r.n(v),p=r(378),m=r.n(p),w=r(372),b=r.n(w),y=r(0),g=r(6664),x=r(397),P=r(632),T=r(495),N=r(437),j=r(460),O=r(455),S=r(1984),k=r.n(S),D=r(604),E=r.n(D),R=r(1136),C=r.n(R),G=r(1534),V=r.n(G),A=r(751),z=r.n(A),B=r(498),H=r(757),J=r(393);function L(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=m()(t);if(e){var a=m()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return h()(this,r)}}Object(J.a)("LearnDiceThrowing");var M=a()(T.a,{md:1},void 0,a()(H.a,{id:"loaded_dice",vertical:!0})),q=function(t){f()(r,t);var e=L(r);function r(t){var n;return o()(this,r),n=e.call(this,t),b()(l()(n),"chooseNSides",(function(t){var e=new Array(t),r=new Array(t);k()(r,(function(e){return 1/t})),k()(e,(function(t){return 0})),n.setState({sides:new Array(t),sideProbs:r,tally:e,valid:!0,draw:null,nThrows:0})})),b()(l()(n),"throwDice",(function(t){for(var e=z()(1,n.state.sides.length+1,1),r=C()(e,{probs:n.state.sideProbs,size:t}),a=n.state.tally.slice(),i=0;i<r.length;i++)a[r[i]-1]+=1;n.setState({draw:r,tally:a,nThrows:n.state.nThrows+t})})),n.state={sides:new Array(6),tally:[0,0,0,0,0,0],nThrows:0,sideProbs:[1/6,1/6,1/6,1/6,1/6,1/6],valid:!0},n}return u()(r,[{key:"renderGrid",value:function(){var t=this;return a()(j.a,{fluid:!0},void 0,a()(N.a,{},void 0,a()(T.a,{md:5},void 0,a()("h3",{},void 0,this.props.t("probabilities"),":"),k()(this.state.sides,(function(e,r){return a()(B.b,{legend:"Side ".concat(r+1),defaultValue:1/t.state.sides.length,step:"any",max:1,min:0,width:100,numbersOnly:!1,onChange:function(e){var n=t.state.sideProbs.slice();n[r]=e;for(var a=0,i=0;i<n.length;i++)a+=n[i];var o=new Array(n.length);k()(o,(function(t){return 0})),t.setState({sideProbs:n,valid:V()(a,1)<=15e-9,tally:o,draw:null})}},r)})),a()(x.a,{onClick:function(){t.setState({tally:t.state.tally.map((function(t){return 0})),nThrows:0})}},void 0,this.props.t("reset"))),a()(T.a,{md:6},void 0,this.renderDice()),M))}},{key:"renderDice",value:function(){var t=this;return this.state.valid?a()(O.a,{fluid:!0},void 0,a()(O.a.Header,{},void 0,this.props.t("dice")),a()(O.a.Body,{},void 0,a()(O.a,{body:!0},void 0,this.state.draw?this.state.draw.join(" - "):"X"),a()(P.a,{},void 0,a()(x.a,{onClick:function(){t.throwDice(1)}},void 0,this.props.t("throw")," \u2685 1x"),a()(x.a,{onClick:function(){t.throwDice(5)}},void 0,this.props.t("throw")," \u2685 5x"),a()(x.a,{onClick:function(){t.throwDice(10)}},void 0,this.props.t("throw")," \u2685 10x")))):a()(O.a,{body:!0},void 0,a()("h3",{},void 0,this.props.t("invalid-probs")))}},{key:"renderTable",value:function(){var t=this;return a()("table",{className:"table table-bordered table-responsive-sm"},void 0,a()("tbody",{},void 0,a()("tr",{},void 0,a()("th",{},void 0,this.props.t("side"),":"),this.state.tally.map((function(t,e){return a()("td",{},e,e+1)}))),a()("tr",{},void 0,a()("th",{},void 0,this.props.t("count"),":"),this.state.tally.map((function(t,e){return a()("td",{},e,t)}))),a()("tr",{},void 0,a()("th",{},void 0,this.props.t("relative-frequency"),":"),this.state.tally.map((function(e,r){return a()("td",{},r,E()(e/t.state.tally.reduce((function(t,e){return t+e})),-3)||"0.000")})))))}},{key:"render",value:function(){return a()(O.a,{id:"diceThrowingModule",style:{maxWidth:1200,margin:"0 auto"}},void 0,a()(O.a.Header,{as:"h4"},void 0,this.props.t("simulate-random-dice-throws")),a()(O.a.Body,{},void 0,a()(B.b,{legend:this.props.t("number-of-sides"),defaultValue:6,step:1,max:20,min:2,onChange:this.chooseNSides}),a()("p",{},void 0,this.props.t("choose-custom-probs")),this.renderGrid(),this.renderTable(),a()("p",{},void 0,this.props.t("total-number-of-throws"),": ",this.state.nThrows)))}}]),r}(y.Component);e.default=Object(g.a)("LearnDiceThrowing")(q)},751:function(t,e,r){"use strict";var n=r(901);t.exports=n},901:function(t,e,r){"use strict";var n=r(457),a=r(414).isPrimitive,i=r(364),o=r(1037);t.exports=function(t,e,r){var s,u,c,l;if(!a(t)||i(t))throw new TypeError("invalid argument. Start must be numeric. Value: `"+t+"`.");if(!a(e)||i(e))throw new TypeError("invalid argument. Stop must be numeric. Value: `"+e+"`.");if(arguments.length<3)c=1;else if(!a(c=r)||i(c))throw new TypeError("invalid argument. Increment must be numeric. Value: `"+c+"`.");if((u=n((e-t)/c))>o)throw new RangeError("invalid arguments. Generated array exceeds maximum array length.");if(u<=1)return[t];for((s=[]).push(t),l=1;l<u;l++)s.push(t+c*l);return s}}}]);