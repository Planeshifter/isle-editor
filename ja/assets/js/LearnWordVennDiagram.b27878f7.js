/*! For license information please see LearnWordVennDiagram.b27878f7.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[666],{3748:function(t,e,a){"use strict";a.r(e);a(420);var n,r=a(407),o=a.n(r),i=a(414),s=a.n(i),c=a(415),l=a.n(c),u=a(424),d=a.n(u),f=a(417),p=a.n(f),v=a(418),h=a.n(v),m=a(416),y=a.n(m),b=a(412),w=a.n(b),g=(a(458),a(854),a(566),a(0)),k=(a(404),a(4096)),C=a(422),A=a(549),x=a(466),B=a(4162),P=a(1131),j=a(893),N=a.n(j),W=a(1082),O=a.n(W),J=a(1161),z=a.n(J),F=a(1496),R=a.n(F),S=a(537),q=a.n(S),V=a(514),D=a.n(V),E=a(489),H=a(755),L=a(421);a(327);function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=y()(t);if(e){var r=y()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return h()(this,a)}}Object(L.a)("LearnVennDiagram");var G=function(t){p()(a,t);var e=T(a);function a(t){var n;s()(this,a),n=e.call(this,t),w()(d()(n),"drawPlot",(function(){var t,e=n.state.freqs,a=P.p("#"+n.state.id);a.select("svg").remove(),t=n.state.tooltip?n.state.tooltip:P.p("body").append("div").attr("class","venntooltip");var r=B.VennDiagram().width(n.props.width).height(n.props.height);a.datum(e).call(r),a.selectAll("g").on("mouseover",(function(e,n){B.sortAreas(a,e),t.transition().duration(400).style("opacity",.9),t.text(e.sets.join(" and ")+" ("+e.size+")"),P.p(this).transition("tooltip").duration(400).select("path").style("stroke-width",3).style("stroke","black").style("fill-opacity",1===e.sets.length?.4:.1).style("stroke-opacity",1)})).on("mousemove",(function(){t.style("left",P.event.pageX+"px").style("top",P.event.pageY-28+"px")})).on("mouseout",(function(e,a){t.transition().duration(400).style("opacity",0),P.p(this).transition("tooltip").duration(400).select("path").style("fill-opacity",1===e.sets.length?.25:0).style("stroke-opacity",0)})),n.setState({tooltip:t})})),w()(d()(n),"calculateWordFrequency",(function(t){var e=n.state,a=e.indices,r=e.minCount,o=e.tdm,i=e.words[t],s=a[t],c=[],l=0;if(o[s])for(var u=o[s].map((function(e){return e>=r[t]?1:0})),d=0;d<u.length;d++)l+=u[d],1===u[d]&&c.push(d);return{sets:[i],size:l,docIndices:c}})),w()(d()(n),"wordNumberClickFactory",(function(t){return function(){n.setState({nWords:t+1,disabled:!0,words:new Array(t+1),minCount:new Array(t+1).fill(1)})}})),w()(d()(n),"updatePlot",(function(){for(var t=[],e=0;e<n.state.nWords;e++){var a=n.calculateWordFrequency(e);t.push(a)}if(2===n.state.nWords){var r=n.calculateJointAB(0,1);t.push(r)}else if(3===n.state.nWords){var o=n.calculateJointAB(0,1);t.push(o),o=n.calculateJointAB(0,2),t.push(o),o=n.calculateJointAB(1,2),t.push(o),o=n.calculateJointABC(0,1,2),t.push(o)}n.setState({freqs:t},(function(){n.drawPlot(),n.props.onClick(n.state)}))}));var r=t.tdm.map((function(e){for(var a=new Array(t.nTexts),n=0;n<a.length;n++)a[n]=e[n]?e[n]:0;return a}));return n.state={disabled:!0,words:new Array(1),indices:new Array(1),freqs:[],minCount:[1],nWords:1,tdm:r,id:"venn"+q()(1e3*R()())},n}return l()(a,[{key:"componentDidUpdate",value:function(t,e){for(var a=!1,n=0;n<this.state.nWords;n++)e.words[n]!==this.state.words[n]&&(a=!0);if(a){for(var r=new Array(this.state.nWords),o=this.props.vocabulary,i=0;i<this.state.nWords;i++)for(var s=0;s<o.length;s++)o[s]===this.state.words[i]&&(r[i]=s);this.setState({indices:r})}}},{key:"wordChangeFactory",value:function(t){var e=this;return function(a){var n=Array.prototype.slice.call(e.state.words);n[t]=O()(z()(a))||null,e.setState({words:n,disabled:!N()(n)})}}},{key:"calculateJointAB",value:function(t,e){var a=this.state,n=a.indices,r=a.minCount,o=a.tdm,i=a.words,s=n[t],c=n[e],l=0;if(o[s]&&o[c])for(var u=o[s].map((function(e){return e>=r[t]?1:0})),d=o[c].map((function(t){return t>=r[e]?1:0})),f=0;f<u.length;f++)u[f]&&d[f]&&(l+=1);return{sets:[i[t],i[e]],size:l}}},{key:"calculateJointABC",value:function(t,e,a){var n=this.state,r=n.indices,o=n.minCount,i=n.tdm,s=n.words,c=r[t],l=r[e],u=r[a],d=0;if(i[c]&&i[l]&&i[u])for(var f=i[c].map((function(e){return e>=o[t]?1:0})),p=i[l].map((function(t){return t>=o[e]?1:0})),v=i[u].map((function(t){return t>=o[a]?1:0})),h=0;h<f.length;h++)f[h]&&p[h]&&v[h]&&(d+=1);return{sets:[s[t],s[e],s[a]],size:d}}},{key:"render",value:function(){for(var t=this,e=this.props.t,a=[],r=function(n){a[n]=o()("div",{},"outer-".concat(n),o()(H.a,{legend:"".concat(e("word")," ").concat(n+1),defaultValue:t.state.words[n],width:120,onChange:t.wordChangeFactory(n)},"text-".concat(n)),o()(E.b,{legend:e("min-of-times"),defaultValue:1,max:50,min:1,step:1,onChange:function(e){var a=D()(t.state.minCount);a[n]=e,t.setState({minCount:a})}},"number-".concat(n)))},i=0;i<this.state.nWords;i++)r(i);return o()(g.Fragment,{},void 0,o()(x.a,{},void 0,o()(x.a.Header,{as:"h4"},void 0,e("settings")),o()(x.a.Body,{},void 0,o()("p",{},void 0,o()("span",{className:"title"},void 0,e("number-of-words"))),o()(A.a,{},void 0,[e("one"),e("two"),e("three")].map((function(e,a){return o()(C.a,{variant:a===t.state.nWords-1?"success":"default",onClick:t.wordNumberClickFactory(a)},a,e)}))),a,o()(C.a,{onClick:this.updatePlot,disabled:this.state.disabled},void 0,e("draw-venn-diagram")))),n||(n=o()("br",{})),o()(x.a,{},void 0,o()(x.a.Header,{as:"h4"},void 0,e("venn-diagram")),o()(x.a.Body,{style:{minHeight:200}},void 0,o()("span",{style:{position:"absolute",right:40,top:50}},void 0,e("total-texts"),": ",this.props.nTexts),o()("div",{id:this.state.id}))))}}]),a}(g.Component);G.defaultProps={height:350,onClick:function(){},width:600},e.default=Object(k.a)("LearnVennDiagram")(G)},422:function(t,e,a){"use strict";var n=a(406),r=a(408),o=a(409),i=a.n(o),s=a(0),c=a.n(s),l=a(411),u=a(470),d=c.a.forwardRef((function(t,e){var a=t.bsPrefix,o=t.variant,s=t.size,d=t.active,f=t.className,p=t.block,v=t.type,h=t.as,m=Object(r.a)(t,["bsPrefix","variant","size","active","className","block","type","as"]),y=Object(l.a)(a,"btn"),b=i()(f,y,d&&"active",o&&y+"-"+o,p&&y+"-block",s&&y+"-"+s);if(m.href)return c.a.createElement(u.a,Object(n.a)({},m,{as:h,ref:e,className:i()(b,m.disabled&&"disabled")}));e&&(m.ref=e),v?m.type=v:h||(m.type="button");var w=h||"button";return c.a.createElement(w,Object(n.a)({},m,{className:b}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1},e.a=d},549:function(t,e,a){"use strict";var n=a(406),r=a(408),o=a(409),i=a.n(o),s=a(0),c=a.n(s),l=a(411),u=c.a.forwardRef((function(t,e){var a=t.bsPrefix,o=t.size,s=t.toggle,u=t.vertical,d=t.className,f=t.as,p=void 0===f?"div":f,v=Object(r.a)(t,["bsPrefix","size","toggle","vertical","className","as"]),h=Object(l.a)(a,"btn-group"),m=h;return u&&(m=h+"-vertical"),c.a.createElement(p,Object(n.a)({},v,{ref:e,className:i()(d,m,o&&h+"-"+o,s&&h+"-toggle")}))}));u.displayName="ButtonGroup",u.defaultProps={vertical:!1,toggle:!1,role:"group"},e.a=u},893:function(t,e,a){"use strict";var n=a(425),r=a(806),o=a(431),i=r(o);n(i,"primitives",r(o.isPrimitive)),n(i,"objects",r(o.isObject)),t.exports=i}}]);