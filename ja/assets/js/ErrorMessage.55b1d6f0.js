(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{6535:function(e,a,r){"use strict";r.r(a);var n=r(407),t=r.n(n),o=r(456),c=r.n(o),i=r(0),s=r(2049),l=r(558),p=r(424),d=r(465),u=r(6185),g=r.n(u),v=(r(604),r(1444)),m=r.n(v),f=r(482),b=r.n(f),y=/[\u001B\u009B][[\]()#;?]*(?:(?:(?:[a-zA-Z\d]*(?:;[a-zA-Z\d]*)*)?\u0007)|(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-ntqry=><~]))/g,N=/\((\d+):/,k=/(\n *)(\d*) \|/g,w=/<LineWrapper tagName="[a-zA-Z0-9]+" startLineNumber=\{\d+\} endLineNumber=\{\d+\} >/g,h=/<\/LineWrapper>/g,L=/<\/?React.Fragment>/g,A=/<StatusBar[^\n]+\n/,B=function(e){return e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(y,"\n")).replace(A,"\n")).replace("</Lesson>","")).replace(N,(function(e,a){return"("+String(parseInt(a,10)-9)+":"}))).replace(k,(function(e,a,r){var n=r?String(parseInt(r,10)-9):"";return a+m()(" ",b()(r.length-n.length,0))+n+" |"}))).replace(w,"")).replace(h,"")).replace(L,"")).replace("&lt;","<")).replace("&gt;",">")},S=r(484),Z=(r(378),t()("i",{className:"fas fa-layer-group"})),j=t()("i",{className:"fas fa-redo"});a.default=function(e){var a=Object(s.a)("General").t,r=Object(i.useState)(!1),n=c()(r,2),o=n[0],u=n[1],v=Object(i.useCallback)((function(){u(!o)}),[o]),m=a("error-encountered");return e.componentName&&(m+=" ".concat(a("in")," <").concat(e.componentName," />")),t()(d.a,{className:"error-boundary-message"},void 0,t()(d.a.Body,{},void 0,t()("h3",{},void 0,m),t()("pre",{},void 0,t()(g.a,{},void 0,B(o?e.error.stack:e.error.message))),t()(l.a,{style:{position:"absolute",top:12,right:22}},void 0,t()(S.a,{tooltip:a("toggle-error-stack-trace"),placement:"left"},void 0,t()(p.a,{variant:"outline-secondary",onClick:v},void 0,Z)),t()(S.a,{tooltip:a("retry")},void 0,t()(p.a,{variant:"outline-secondary",onClick:e.resetError},void 0,j)))))}}}]);