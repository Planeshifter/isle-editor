(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{6356:function(t,e,o){"use strict";o.r(e);var a=o(407),n=o.n(a),c=o(0),r=(o(404),o(4101)),i=o(1094),l=o.n(i),s=o(481),u=o.n(s),d=o(459),v=o(420);function h(t){return t?l()(t,".")?t:"".concat(t,"."):""}Object(v.a)("Bibliography");var p=function(t){var e,o=t.title,a=t.className,r=t.style,i=t.t,l=Object(c.useContext)(d.a).config.references,s=u()(l);s=s.sort((function(t,e){var o=l[t],a=l[e];return o&&o.author?a&&a.author&&o.author[0]>a.author[0]?1:-1:1}));for(var v=[],p=0;p<s.length;p++){var f=l[s[p]];if(f){var b=void 0;if("article"===f.type){var m=h(f.author),y=f.title?"".concat(f.title,". "):"",g=f.journal?n()("i",{},void 0,"".concat(f.journal,", ")):"",w=f.year?"".concat(f.year,"."):"",j=f.number?"(".concat(f.number,")"):"",k=f.pages?"".concat(f.volume||j?":":"").concat(f.pages,", "):"",N=f.month?" ".concat(f.month," "):"",O=n()("span",{},void 0,m," ",y,g,f.volume,j,k,N,w);b=n()("li",{},"ref-".concat(p),O)}else if("book"===f.type){var B=h(f.author),J=f.title?n()("i",{},void 0,f.title,". "):"",x=f.publisher?"".concat(f.publisher,", "):"",C=f.address?"".concat(f.address,", "):"",P=f.edition?"".concat(f.edition," ").concat(i("edition"),", "):"",q=f.month?"".concat(f.month," "):"",z=f.year?"".concat(f.year,"."):"",A=e||(e=n()("span",{},void 0,B," ",J,x,C,P,q,z));b=n()("li",{},"ref-".concat(p),A)}v.push(b)}}return n()("div",{className:"outer-element ".concat(a),style:r},void 0,n()("h2",{},void 0,o||i("references")),n()("ol",{},void 0,v))};p.defaultProps={title:null,className:"",style:{}},e.default=Object(r.a)("Bibliography")(p)}}]);