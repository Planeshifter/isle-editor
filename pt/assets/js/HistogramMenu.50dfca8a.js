(window.webpackJsonp=window.webpackJsonp||[]).push([[417],{486:function(e,t,n){"use strict";var a=n(407),i=n.n(a),o=(n(0),n(404),n(424)),l=n(513),r=n(511),s=n(507),u=n(546),d=i()(o.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,i()("div",{className:"fa fa-question"}));t.a=function(e){var t=i()(l.a,{id:"popover-positioned-right"},void 0,i()(r.a,{},void 0,e.title),i()(s.a,{},void 0,e.content));return i()(u.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:t},void 0,d)}},6381:function(e,t,n){"use strict";n.r(t);n(438),n(436),n(441),n(440),n(416),n(437);var a=n(407),i=n.n(a),o=n(492),l=n.n(o),r=n(412),s=n.n(r),u=n(456),d=n.n(u),c=n(0),p=n.n(c),g=n(450),b=n.n(g),f=n(424),v=n(465),y=n(493),h=n(476),m=(n(404),n(552)),O=n(508),j=n(490),S=n(680),w=n(1111),C=n(462),V=n(486);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=b()("isle:data-explorer:histogram"),k={start:null,size:100,end:null},z=function(e){var t=Object(c.useState)(!1),n=d()(t,2),a=n[0],o=n[1],r=Object(c.useState)(null),s=d()(r,2),u=s[0],g=s[1],b=Object(c.useState)(1),D=d()(b,2),z=D[0],E=D[1],H=Object(c.useState)(e.defaultValue||e.variables[0]),N=d()(H,2),x=N[0],B=N[1],F=Object(c.useState)(null),T=d()(F,2),q=T[0],J=T[1],G=Object(c.useState)("Overlay"),I=d()(G,2),L=I[0],M=I[1],U=Object(c.useState)(2),K=d()(U,2),Q=K[0],R=K[1],W=Object(c.useState)(10),X=d()(W,2),Y=X[0],Z=X[1],$=Object(c.useState)(k),_=d()($,2),ee=_[0],te=_[1],ne=Object(c.useState)("Automatic"),ae=d()(ne,2),ie=ae[0],oe=ae[1],le=e.variables,re=e.groupingVariables,se=e.t;Object(c.useEffect)((function(){te(k)}),[ie]);return i()(v.a,{},void 0,i()(v.a.Header,{as:"h4"},void 0,se("Histogram"),i()(V.a,{title:se("Histogram"),content:se("Histogram-description")})),i()(v.a.Body,{},void 0,i()(O.a,{legend:se("variable"),defaultValue:x,options:le,onChange:B}),i()(h.a,{},void 0,i()(y.a,{md:5},void 0,i()(O.a,{legend:se("group-by"),options:re,clearable:!0,onChange:J})),i()(y.a,{md:4},void 0,q?i()(O.a,{legend:"".concat(se("mode"),":"),defaultValue:L,options:["Overlay","Facets"],onChange:M}):null),i()(y.a,{md:3},void 0,q&&"Facets"===L?i()(j.b,{legend:se("columns"),defaultValue:2,min:1,onChange:R,style:{marginTop:0},inputStyle:{width:70,marginLeft:0,marginTop:2}}):null)),i()("div",{},void 0,i()(O.a,{legend:se("binning-strategy"),options:["Automatic","Select # of bins","Set bin width"],defaultValue:ie,inline:!0,onChange:oe}),"Automatic"!==ie?i()("div",{},void 0,i()(j.b,{legend:se("start"),inline:!0,defaultValue:ee.start,onChange:function(e){var t=P({},ee);t.start=e,te(t)},step:"any",inputStyle:{width:70}}),"Select # of bins"===ie?i()(j.b,{legend:se("bins"),defaultValue:Y,min:1,step:1,onChange:Z,inline:!0,inputStyle:{width:70}}):null,"Set bin width"===ie?i()(j.b,{legend:se("size"),inline:!0,defaultValue:ee.size,onChange:function(e){var t=P({},ee);t.size=e,te(t)},step:"any",inputStyle:{width:70}}):null,i()(j.b,{legend:se("end"),inline:!0,defaultValue:ee.end,onChange:function(e){var t=P({},ee);t.end=e,te(t)},step:"any",inputStyle:{width:70}})):null),e.showDensityOption?i()("div",{},void 0,i()(m.a,{legend:se("display-density"),defaultValue:a,onChange:o}),i()(O.a,{legend:se("overlay-density-line"),options:["Data-driven","Normal","Uniform","Exponential"],disabled:!a,defaultValue:u,clearable:!0,menuPlacement:"top",onChange:g}),"Data-driven"===u?i()(j.b,{legend:se("bandwidth-adjustment"),defaultValue:z,min:0,step:.1,onChange:E}):null):null,i()(f.a,{variant:"primary",block:!0,onClick:function(){A("Generate a histogram with ".concat(Y," bins"));var t=Object(S.a)(6),n={variable:x,group:q,groupMode:L,displayDensity:a,densityType:u,binStrategy:ie};"Select # of bins"===ie&&(n.nBins=Y),n.xBins=ee,"Facets"===L&&(n.nCols=Q),"Data-driven"===u&&(n.bandwidthAdjust=z);var i=P(P({},n),{},{plotId:t}),o=p.a.createElement(w.a,l()({data:e.data},n,{id:t,action:i,onShare:function(){e.session.addNotification({title:e.t("plot-shared"),message:e.t("plot-shared-message"),level:"success",position:"tr"}),e.logAction(C.H,i)}}));e.logAction(C.o,i),e.onCreated(o)}},void 0,se("generate"))))};z.defaultProps={defaultValue:null,groupingVariables:null,logAction:function(){},showDensityOption:!0,onSelected:function(){}},t.default=z}}]);