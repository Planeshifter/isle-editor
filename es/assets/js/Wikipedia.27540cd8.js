(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{1312:function(e,i){e.exports=function(e){throw new TypeError('"'+e+'" is read-only')}},6472:function(e,i,a){"use strict";a.r(i);var t=a(400),n=a.n(t),o=(a(686),a(453)),c=a.n(o),s=(a(1192),a(1312)),l=a.n(s),r=a(0),d=(a(396),a(1806)),u=a(465),p=a(428),w=a(438),k=a(996),b=a(457),v=a(418),g=a(462);a(370);Object(v.a)("Wikipedia");var f=n()("div",{className:"wikipedia-separator"}),h=function(e){var i=e.defaultEntry,a=e.style,t=Object(r.useState)(""),o=c()(t,2),s=o[0],h=o[1],m=Object(r.useState)(""),y=c()(m,2),j=y[0],O=y[1],N=Object(d.a)("Wikipedia").t,x=Object(r.useContext)(b.a),C=Object(r.useCallback)((function(e){var i,a,t;x.log({id:"wikipedia",type:g.Lc,value:e}),i=e,a=v.c.t("Wikipedia:about"),e=(e=-1!==(t=i.search(a))?(t+=(l()("x"),a.length+1),i.substring(t,i.length)):i).replace(" ","_"),e="https://"+v.c.language+".wikipedia.org/wiki/"+e,O(e)}),[x]);return Object(r.useEffect)((function(){Object(w.isPrimitive)(i)&&C(i)}),[i,C]),n()(u.a,{className:"wikipedia",style:a},void 0,n()(u.a.Header,{},void 0,n()(u.a.Title,{as:"h3"},void 0,N("browse-wikipedia")),Object(w.isPrimitive)(i)?n()(p.a,{className:"wikipedia-reset-button",variant:"secondary",onClick:function(){C(i)}},void 0,N("reset")):null),n()(u.a.Body,{},void 0,n()(k.a,{className:"wikipedia-voice-input",language:v.c.language,onChange:h,onSubmit:C,onFinalText:C,placeholder:N("enter-text-and-click-globe")}),n()("button",{onClick:function(){C(s)},className:"wikipedia-logo"}),f,j?n()("div",{className:"wikipedia-result"},void 0,n()("iframe",{title:N("wikipedia-page"),src:j,width:"100%",height:600})):null))};h.defaultProps={defaultEntry:null,style:{}},i.default=h}}]);