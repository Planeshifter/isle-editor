(window.webpackJsonp=window.webpackJsonp||[]).push([[1187],{1171:function(e,a){e.exports=function(e){throw new TypeError('"'+e+'" is read-only')},e.exports.default=e.exports,e.exports.__esModule=!0},424:function(e,a,t){"use strict";var i=t(405),n=t(408),s=t(409),c=t.n(s),r=t(0),l=t.n(r),o=t(411),d=t(464),u=l.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.variant,r=e.size,u=e.active,p=e.className,b=e.block,f=e.type,v=e.as,k=Object(n.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),w=Object(o.a)(t,"btn"),m=c()(p,w,u&&"active",s&&w+"-"+s,b&&w+"-block",r&&w+"-"+r);if(k.href)return l.a.createElement(d.a,Object(i.a)({},k,{as:v,ref:a,className:c()(m,k.disabled&&"disabled")}));a&&(k.ref=a),f?k.type=f:v||(k.type="button");var g=v||"button";return l.a.createElement(g,Object(i.a)({},k,{className:m}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},a.a=u},6492:function(e,a,t){"use strict";t.r(a);var i=t(407),n=t.n(i),s=t(456),c=t.n(s),r=t(1171),l=t.n(r),o=(t(1069),t(604),t(0)),d=(t(404),t(2049)),u=t(465),p=t(424),b=t(432),f=t(877),v=t(463),k=t(422),w=t(462),m=t(439);t(377);Object(k.a)("Wikipedia");var g=n()("div",{className:"wikipedia-separator"}),y=function(e){var a=e.defaultEntry,t=e.style,i=Object(o.useState)(""),s=c()(i,2),r=s[0],m=s[1],y=Object(o.useState)(""),j=c()(y,2),O=j[0],h=j[1],N=Object(d.a)("Wikipedia").t,x=Object(o.useContext)(v.a),E=Object(o.useCallback)((function(e){var a,t,i;x.log({id:"wikipedia",type:w.Lc,value:e}),a=e,t=k.c.t("Wikipedia:about"),e=(e=-1!==(i=a.search(t))?(i+=(l()("x"),t.length+1),a.substring(i,a.length)):a).replace(" ","_"),e="https://"+k.c.language+".wikipedia.org/wiki/"+e,h(e)}),[x]);return Object(o.useEffect)((function(){Object(b.isPrimitive)(a)&&E(a)}),[a,E]),n()(u.a,{className:"wikipedia",style:t},void 0,n()(u.a.Header,{},void 0,n()(u.a.Title,{as:"h3"},void 0,N("browse-wikipedia")),Object(b.isPrimitive)(a)?n()(p.a,{className:"wikipedia-reset-button",variant:"secondary",onClick:function(){E(a)}},void 0,N("reset")):null),n()(u.a.Body,{},void 0,n()(f.a,{className:"wikipedia-voice-input",language:k.c.language,onChange:m,onSubmit:E,onFinalText:E,placeholder:N("enter-text-and-click-globe")}),n()("button",{onClick:function(){E(r)},className:"wikipedia-logo"}),g,O?n()("div",{className:"wikipedia-result"},void 0,n()("iframe",{title:N("wikipedia-page"),src:O,width:"100%",height:600})):null))};y.defaultProps={defaultEntry:null,style:{}},a.default=Object(m.a)(y)}}]);