(window.webpackJsonp=window.webpackJsonp||[]).push([[524],{6439:function(t,n,e){"use strict";e.r(n);e(427),e(416),e(421);var a=e(407),r=e.n(a),i=e(414),o=e.n(i),c=e(415),u=e.n(c),f=e(418),s=e.n(f),l=e(419),d=e.n(l),v=e(417),p=e.n(v),y=e(0),h=e(6515),b=e(4678),w=e(916),m=e(2712),k=e.n(m),g=e(452),x=e.n(g);function D(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,a=p()(t);if(n){var r=p()(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return d()(this,e)}}function R(){for(var t=new Array(100),n=0;n<t.length;n++)t[n]=k()(0,1);return t}var I=function(t){s()(e,t);var n=D(e);function e(t){var a;return o()(this,e),(a=n.call(this,t)).state={points:R(),data:[]},a}return u()(e,[{key:"componentDidMount",value:function(){var t=this;this.setStateInterval=window.setInterval((function(){t.setState({data:t.getData()})}),6e3)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.setStateInterval)}},{key:"getData",value:function(){var t=["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","black"],n=["square","circle"],e=x()(k()(0,10)),a=10*(e-1),r=10*e;return this.state.points.map((function(e,i){var o=x()(i/10),c=a<=i&&i<=r;return{x:i,y:e,inTest:c,symbol:c?n[0]:n[1],fill:t[o],opacity:.6}}))}},{key:"render",value:function(){return r()("div",{},void 0,r()(h.a,{animate:{duration:2e3,easing:"bounce"}},void 0,r()(b.a,{data:this.state.data}),r()(w.a,{data:this.state.data,x:"x",y:function(t){return t.inTest?1:0},style:{data:{fill:"tomato",opacity:.4}}}),r()(w.a,{data:this.state.data,x:"x",y:function(t){return t.inTest?0:1},style:{data:{fill:"lightblue",opacity:.4}}})))}}]),e}(y.Component);n.default=I}}]);