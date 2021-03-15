(window.webpackJsonp=window.webpackJsonp||[]).push([[436],{1414:function(e,t,n){"use strict";var i=n(405),a=Object(i.a)((function(){return n.e(1032).then(n.bind(null,2798))}));t.a=a},2620:function(e,t,n){"use strict";n(610),n(423);t.a=function(e){var t=new(0,window.FileReader);return t.readAsDataURL(e),new Promise((function(e){t.onloadend=function(){e(t.result)}}))}},576:function(e,t,n){"use strict";var i=n(546),a=n.n(i),o=n(0),s=n.n(o),l=(n(404),function(e){var t=e.children,n=a()(e,["children"]);return s.a.createElement("div",n,t)});l.defaultProps={className:"",style:{}},t.a=l},602:function(e,t,n){"use strict";var i=n(405),a=Object(i.a)((function(){return n.e(218).then(n.bind(null,878))}));t.a=a},6583:function(e,t,n){"use strict";n.r(t);var i=n(493),a=n.n(i),o=n(407),s=n.n(o),l=n(456),u=n.n(l),c=(n(651),n(0)),r=n.n(c),d=(n(404),n(450)),m=n.n(d),b=n(1969),f=n(4010),h=n(466),v=n(422),p=n(473),g=n.n(p),w=n(531),y=n(986),O=n(1057),j=n(576),k=n(1414),N=n(913),C=n(693),S=n(602),q=n(1389),L=n(618),E=n(821),D=n(465),P=n(2620);var F=function(e){e.stopPropagation(),e.preventDefault()},R=n(464),x=n(421),A=n(439);n(318);Object(x.a)("ImageQuestion");var B=Object(w.a)("image-question"),z=m()("isle:image-question"),T=/src="([^"]*)"/,H=function(e){var t,n,i=Object(c.useRef)(e.id||B(e)),o=Object(c.useContext)(D.a),l=Object(b.a)("ImageQuestion").t,d=Object(c.useState)(!1),m=u()(d,2),p=m[0],w=m[1],x=Object(c.useState)(null),A=u()(x,2),H=A[0],I=A[1],U=Object(c.useState)(0===e.hints.length),J=u()(U,2),M=J[0],Q=J[1],W=Object(c.useState)(!1),_=u()(W,2),G=_[0],K=_[1],V=Object(c.useState)(!1),X=u()(V,2),Y=X[0],Z=X[1],$=Object(c.useCallback)((function(e){I(e.target.result)}),[]),ee=e.hints,te=ee.length,ne=s()(k.a,{disabled:!p||!M,onClick:function(){K(!G)},hasHints:ee.length>0}),ie=Object(c.useCallback)((function(e){z("Logging hint..."),o.log({id:i.current,type:R.mb,value:e})}),[o]),ae=Object(c.useCallback)((function(){o.addNotification({title:l("submitted"),message:l("answer-submitted"),level:"info"})}),[o,l]),oe=function(){(e.disableSubmitNotification||ae(),e.onSubmit(),w(!0),H)?o.log({id:i.current,type:R.nb,value:H}):document.getElementById(i.current+"-canvas").toBlob((function(e){Object(P.a)(e).then((function(e){o.log({id:i.current,type:R.nb,value:e}),I(e)}))}))};return Y||(n=H?s()("div",{className:"center",style:{maxWidth:600}},void 0,s()(y.a,G?{alt:l("model-solution"),src:e.solution,width:"50%",height:"auto",style:{border:"solid 1px gold"}}:{alt:l("upload"),src:H,width:"50%",height:"auto"})):s()(c.Fragment,{},void 0,s()("div",{className:"image-question-dropzone",onDrop:function(e){e.stopPropagation(),e.preventDefault(),Z(!0);var t=e.dataTransfer,n=new FileReader,i=null;if(t.items&&t.items.length>0){var a=t.items[0];"file"===a.kind?i=a.getAsFile():"string"===a.kind&&a.getAsString((function(e){if(g()(e,"<img")){var t=e.match(T);t&&(I(t[1]),Z(!1))}else if(g()(e,"<thead")){var n=document.createElement("table");n.innerHTML=e,document.body.appendChild(n),Object(f.a)(n,{backgroundColor:"white",style:{fontSize:12},width:600}).then((function(e){I(e),Z(!1),n.remove()}))}else{var i=document.createElement("pre");i.innerHTML=e,document.body.appendChild(i),Object(f.a)(i,{backgroundColor:"white",style:{fontSize:14}}).then((function(e){I(e),Z(!1),i.remove()}))}}))}else t.files&&t.files.length>0&&(i=t.files[0]);i&&i&&(n.addEventListener("load",$,!1),n.readAsDataURL(i))},onDragOver:F,onDragEnd:F},void 0,s()("span",{},void 0,l("drop-image"))),s()("p",{className:"center"},void 0,l("or")),r.a.createElement("input",{id:i.current+"-upload",className:"image-question-upload center",type:"file",accept:"image/*",onChange:function(){var e=new FileReader,n=t.files[0];e.addEventListener("load",$,!1),e.readAsDataURL(n)},ref:function(e){t=e}}),e.sketchpad?s()(c.Fragment,{},void 0,s()("p",{className:"center"},void 0,l("or")),r.a.createElement(q.a,a()({id:i.current,hideNavigationButtons:!0,hideSaveButtons:!0,hideTransmitButtons:!0,canvasWidth:900,canvasHeight:600},e.sketchpad))):null)),s()(h.a,{id:i.current,className:"image-question ".concat(e.className),style:e.style},void 0,s()(h.a.Body,{style:{width:e.feedback?"calc(100%-60px)":"100%",display:"inline-block"}},void 0,s()("label",{},void 0,e.question),s()(O.a,{running:Y,width:256,height:128}),n,e.feedback?s()(L.a,{vertical:!0,id:i.current+"_feedback",style:{position:"absolute",right:"4px",top:"4px"}}):null,s()(j.a,{buttonLabel:"Answers",id:i.current,info:R.nb,data:{question:e.question,type:"image"},points:e.points}),s()("div",{className:"image-question-toolbar"},void 0,te>0?s()(C.a,{onClick:ie,hints:e.hints,placement:e.hintPlacement,onFinished:function(){Q(!0)}}):null,H?s()(v.a,{size:"sm",variant:"warning",onClick:function(){I(null)}},void 0,l("reset")):null,e.until&&o.startTime>e.until?s()("span",{className:"title",style:{marginLeft:4}},void 0,l("question-closed")):s()(N.a,{className:"submit-button",variant:"primary",size:"sm",onClick:oe},void 0,l(p?"resubmit":"submit")),e.solution?ne:null,e.chat?s()(S.a,{for:i.current}):null),s()(E.a,{for:i.current,points:e.points})))};H.defaultProps={question:"",hints:[],hintPlacement:"bottom",feedback:!0,chat:!1,disableSubmitNotification:!1,className:"",sketchpad:null,solution:null,until:null,points:10,style:{},onSubmit:function(){}};t.default=Object(A.a)(H)},693:function(e,t,n){"use strict";var i=n(405),a=Object(i.a)((function(){return n.e(403).then(n.bind(null,1023))}));t.a=a},821:function(e,t,n){"use strict";var i=n(405),a=Object(i.a)((function(){return Promise.all([n.e(0),n.e(376)]).then(n.bind(null,1360))}));t.a=a}}]);