(window.webpackJsonp=window.webpackJsonp||[]).push([[826],{3993:function(t,e,n){"use strict";n.r(e);var r=n(412),a=n.n(r),o=n(414),i=n.n(o),c=n(415),s=n.n(c),u=n(417),p=n.n(u),l=n(418),d=n.n(l),v=n(416),f=n.n(v),b=n(407),m=n.n(b),h=(n(458),n(420),n(437),n(434),n(469),n(478),n(438),n(0)),y=(n(404),n(454)),O=n(6447),g=n(4096),j=n(682),w=n(654),P=n.n(w),x=n(429),C=n(455),R=n.n(C),k=n(505),D=n(421),S=n(439);function F(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?F(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function B(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=f()(t);if(e){var a=f()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}Object(D.a)("StatisticalModels");var J=m()("th",{}),M=function(t){var e,n=t.data,r=t.variables,a=t.scale,o=t.center,i=t.noComponents;try{for(var c=[],s=n[r[0]].length,u=0;u<s;u++){for(var p=[],l=!1,d=0;d<r.length;d++){var v=n[r[d]][u];if(e=v,!Object(x.isPrimitive)(e)||R()(e)){l=!0;break}p.push(v)}l||c.push(p)}var f=new O.a(c,{center:o,scale:a}),b=f.predict(c,{noComponents:i});return{pca:f,components:b}}catch(m){return{}}},V=function(t){p()(n,t);var e=B(n);function n(t){var r;i()(this,n),r=e.call(this,t);var a=t.data,o=t.variables,c=t.scale,s=t.center,u=t.noComponents,p=M({data:a,variables:o,scale:c,center:s,noComponents:u}),l=p.pca,d=p.components;return r.state=E({pca:l,components:d},t),l&&t.onResult(r.state.pca,r.state.components),r}return s()(n,[{key:"render",value:function(){var t=this.state.pca,e=this.props.t;if(!t)return m()(y.a,{variant:"danger"},void 0,e("missing-attributes"));var n=t.getStandardDeviations(),r=t.getExplainedVariance(),a=t.getCumulativeVariance(),o={x:P()(0,r.length,1),y:r,type:"scatter",name:e("proportion-of-variance")};return m()("div",{style:{overflowX:"auto",width:"100%"}},void 0,m()("span",{className:"title"},void 0,e("pca-summary")),function(t,e,n,r){return m()(j.a,{bordered:!0,size:"sm"},void 0,m()("thead",{},void 0,m()("tr",{},void 0,J,m()("th",{},void 0,r("standard-deviation")),m()("th",{},void 0,r("proportion-of-variance")),m()("th",{},void 0,r("cumulative-variance")))),m()("tbody",{},void 0,t.map((function(t,r){return m()("tr",{},r,m()("th",{},void 0," ","PC".concat(r+1)," "),m()("td",{},void 0," ",t.toFixed(3)," "),m()("td",{},void 0," ",e[r].toFixed(3)," "),m()("td",{},void 0," ",n[r].toFixed(3)," "))}))))}(n,r,a,e),m()(k.a,{editable:!0,data:[o],layout:{xaxis:{title:e("principal-component")},yaxis:{title:e("explained-proportion")}}}))}}],[{key:"getDerivedStateFromProps",value:function(t,e){if(t.data!==e.data||t.variables!==e.variables){var n=t.data,r=t.variables,a=t.scale,o=t.center,i=t.noComponents,c=E(E({},M({data:n,variables:r,scale:a,center:o,noComponents:i})),t);return c.pca&&t.onResult(c.pca,c.components),c}return null}}]),n}(h.Component);V.defaultProps={center:!0,scale:!1,noComponents:0,onResult:function(){}},e.default=Object(g.a)("StatisticalModels")(Object(S.a)(V))}}]);