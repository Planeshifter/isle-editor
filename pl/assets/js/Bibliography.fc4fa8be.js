(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{6420:function(t,e,o){"use strict";o.r(e);var a=o(407),n=o.n(a),c=o(0),r=(o(404),o(4172)),i=o(1113),l=o.n(i),s=o(481),u=o.n(s),d=o(463),v=o(422);function h(t){return t?l()(t,".")?t:"".concat(t,"."):""}Object(v.a)("Bibliography");var p=function(t){var e=t.title,o=t.className,a=t.style,r=t.t,i=Object(c.useContext)(d.a).config.references,l=u()(i);l=l.sort((function(t,e){var o=i[t],a=i[e];return o&&o.author?a&&a.author&&o.author[0]>a.author[0]?1:-1:1}));for(var s=[],v=0;v<l.length;v++){var p=i[l[v]];if(p){var f=void 0;if("article"===p.type){var b=h(p.author),m=p.title?"".concat(p.title,". "):"",y=p.journal?n()("i",{},void 0,"".concat(p.journal,", ")):"",g=p.year?"".concat(p.year,"."):"",w=p.number?"(".concat(p.number,")"):"",j=p.pages?"".concat(p.volume||w?":":"").concat(p.pages,", "):"",k=p.month?" ".concat(p.month," "):"",N=n()("span",{},void 0,b," ",m,y,p.volume,w,j,k,g);f=n()("li",{},"ref-".concat(v),N)}else if("book"===p.type){var O=h(p.author),B=p.title?n()("i",{},void 0,p.title,". "):"",J=p.publisher?"".concat(p.publisher,", "):"",x=p.address?"".concat(p.address,", "):"",C=p.edition?"".concat(p.edition," ").concat(r("edition"),", "):"",P=p.month?"".concat(p.month," "):"",q=p.year?"".concat(p.year,"."):"",z=n()("span",{},void 0,O," ",B,J,x,C,P,q);f=n()("li",{},"ref-".concat(v),z)}s.push(f)}}return n()("div",{className:"outer-element ".concat(o),style:a},void 0,n()("h2",{},void 0,e||r("references")),n()("ol",{},void 0,s))};p.defaultProps={title:null,className:"",style:{}},e.default=Object(r.a)("Bibliography")(p)}}]);