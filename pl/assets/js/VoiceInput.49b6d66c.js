(window.webpackJsonp=window.webpackJsonp||[]).push([[1174],{3781:function(e,t,n){"use strict";n.r(t),function(e){n(438),n(436),n(441),n(440),n(416),n(437);var o=n(407),r=n.n(o),c=n(412),i=n.n(c),a=n(456),l=n.n(a),s=n(0),u=(n(404),n(450)),d=n.n(u),f=n(2049),p=n(785),v=n(742),h=n(463),g=n(422),m=n(4769);n(310);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=d()("isle:voice-input");var k=function(t){var n=t.autorecord,o=t.bind,c=t.defaultValue,a=t.grammars,u=t.id,d=t.maxAlternatives,b=t.remote,k=t.startTooltip,O=t.stopTooltip,S=t.speechInterface,j=t.onChange,C=t.onClick,R=t.onFinalText,x=t.onRecordingStart,N=t.onRecordingStop,P=t.onSegment,E=t.onSubmit,T=t.timeout,D=Object(s.useState)(n),F=l()(D,2),A=F[0],z=F[1],I=Object(s.useContext)(h.a),B=Object(f.a)("Input").t,J=Object(s.useState)(o&&I.state?I.state[o]:c),V=l()(J,2),Y=V[0],G=V[1],H=Object(s.useRef)(),K=Object(s.useRef)(),L=Object(s.useCallback)((function(t){var n=t.target.value;G(n),j(n),o&&e.lesson.setState(i()({},o,n))}),[o,j]),M=Object(s.useCallback)((function(e){switch(e.keyCode){case 13:E(Y)}}),[Y,E]),q=Object(s.useCallback)((function(){y("Set `isRecording` to false..."),z(!1),H.current&&H.current.stop(),N()}),[N]),Q=Object(s.useCallback)((function(){H.current=null;var e=window.SpeechRecognition||window.webkitSpeechRecognition;if(e){var t=new e;t.lang=g.c.language,t.continuous=!0,t.interimResults=!0,t.maxAlternatives=d,t.grammars=function(e){for(var t=t||webkitSpeechGrammarList,n=new t,o=0;o<e.length;o++){var r=e[o],c=r.src,i=r.weight;n.addFromString(c,i)}return n}(a),t.onerror=function(e){if(y("Encountered an error..."),"not-allowed"===e.error||"service-not-allowed"===e.error)return z(!1),I.addNotification({title:"Not allowed",message:"No permission to use the speech recognition service",level:"error",position:"tr"});try{t.start()}catch(n){y(n)}},t.onend=function(){y("onend: %s",u),A&&t.start()},t.onstart=function(){y("onstart: %s",u),x()},t.onresult=function(e){if(y("Processing result..."),void 0!==e.results)for(var t=e.resultIndex;t<e.results.length;++t){var n=e.results[t];if(e.results[t].isFinal){T&&(K.current=setTimeout(q,T)),y("Received final text");var o=void 0;if(d>1){o=new Array(n.length);for(var r=0;r<n.length;r++)o[r]=n[r].transcript}else o=n[0].transcript;G(o),R(o),S&&S.check(o,{onStart:function(){q()},onEnd:function(){Q()}})}else{K.current&&clearTimeout(K.current);var c=void 0;if(d>1){c=new Array(n.length);for(var i=0;i<n.length;i++)c[i]=n[i].transcript}else c=n[0].transcript;G(c),P(c)}}else y("Something went wrong...")},t.start(),H.current=t}y("Set `isRecording` to true..."),z(!0)}),[a,u,A,d,x,I,S,q,T,R,P]),U=Object(s.useCallback)((function(e){return e?!0===A?O||B("click-to-stop-recording"):k||B("click-to-start-recording"):"Your browser does not support voice recognition. You may use the Chrome Browser instead"}),[A,k,O,B]);Object(s.useEffect)((function(){b&&(window.onkeydown=function(e){switch(e.keyCode){case b.stop:q();break;case b.start:A||Q();break;case b.toggle:A?q():Q()}}),n&&(y("Should record voice..."),Q())}),[n,b,A,Q,q]);var W=Object(s.useCallback)((function(e){C(e),A?q():Q()}),[A,Q,q,C]),X="voice-microphone";!0===A&&(X="voice-microphone voice-recording");var Z=U(function(){try{var e=e||webkitSpeechRecognition;return!!e}catch(t){return!1}}()),$=r()(p.a,{id:"".concat(t.id,"-voice-input-tooltip")},void 0,Z);switch(t.mode){case"full":return r()(s.Fragment,{},void 0,t.legend?r()("label",{},void 0,t.legend):null,r()("div",{className:"input voice-input ".concat(t.className),style:w({height:t.height,width:t.width},t.style)},void 0,r()("input",{className:"voice-input-text",type:"text",onKeyDown:M,onChange:L,placeholder:null!==t.placeholder?t.placeholder:B("enter-text"),value:Y}),r()(v.a,{placement:t.tooltipPlacement,overlay:$},void 0,r()(m.a,{onClick:W,className:X}))));case"status":return r()(s.Fragment,{},void 0,t.legend?r()("label",{},void 0,t.legend):null,r()("div",{className:"voice-input-status-text ".concat(t.className),style:w({height:t.height,width:t.width},t.style)},void 0,r()("div",{className:"voice-input-status"},void 0,Y),r()(v.a,{placement:"bottom",overlay:$},void 0,r()(m.a,{onClick:W,className:X}))));case"microphone":return r()(s.Fragment,{},void 0,t.legend?r()("label",{},void 0,t.legend):null,r()("div",{className:"voice-solo-microphone ".concat(t.className),style:w({height:t.height,width:t.width},t.style)},void 0,r()(v.a,{placement:"bottom",overlay:$},void 0,r()(m.a,{onClick:W,className:X}))));case"none":return null}};k.defaultProps={autorecord:!1,defaultValue:"",grammars:[],legend:"",mode:"full",maxAlternatives:1,onChange:function(){},onClick:function(){},onFinalText:function(){},onSegment:function(){},onRecordingStart:function(){},onRecordingStop:function(){},onSubmit:function(){},placeholder:null,remote:null,className:"",style:{},timeout:null,stopTooltip:null,startTooltip:null,tooltipPlacement:"left",width:500,height:36},t.default=k}.call(this,n(22))},4769:function(e,t,n){"use strict";n(427),n(416),n(421);var o=n(407),r=n.n(o),c=n(414),i=n.n(c),a=n(415),l=n.n(a),s=n(418),u=n.n(s),d=n(419),f=n.n(d),p=n(417),v=n.n(p),h=n(0),g=(n(404),n(4770)),m=n.n(g);function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=v()(e);if(t){var r=v()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return f()(this,n)}}var w=function(e){u()(n,e);var t=b(n);function n(){return i()(this,n),t.apply(this,arguments)}return l()(n,[{key:"render",value:function(){return r()("button",{onClick:this.props.onClick})}}]),n}(h.Component);w.defaultProps={onClick:function(){}},t.a=m.a||w},4770:function(e,t,n){var o=n(0);function r(e){return o.createElement("svg",e,[o.createElement("defs",{id:"defs3723",key:0}),o.createElement("path",{d:"m 75.897176,155.35465 h -20.741 c -4.834,0 -4.84,15.963 0,15.963 h 53.854004 c 4.839,0 4.833,-15.963 0,-15.963 H 88.718176 l -0.602,-10.14 c 35.693004,-3.164 48.733004,-32.896 47.931004,-63.961003 -0.198,-7.666 -13.296,-6.779 -12.443,0.979 3.413,71.099003 -86.068004,69.681003 -83.271004,-1.358 0.251,-6.389 -11.982,-6.453 -12.232,0.46 -0.598,28.619003 13.64,60.803003 48.257,63.880003 z M 107.47818,48.083647 c -0.528,-14.312 -6.628,-23.486 -14.452004,-27.655 -6.579,-3.506 -14.45,-3.5 -21.076,-0.113 -8.071,4.127 -14.504,13.346 -15.273,27.676 l 0.005,20.069 h 50.800004 z m -9.674004,-36.613 c 10.769004,5.739 19.146004,17.829 19.826004,36.254 l 0.008,44.158 c 0,12.720003 -7.705,26.975003 -18.903004,33.302003 -9.819,5.547 -21.804,5.594 -31.748,0.326 -10.292,-5.451 -18.583,-16.519 -20.432,-33.071003 l -0.031,-44.705 c 0,-14.39 7.714,-29.763 20.808,-36.458 9.579,-4.8959999 20.965,-4.8729999 30.472,0.194 z",id:"path3713",style:{clipRule:"evenodd",fillRule:"evenodd"},key:1})])}r.defaultProps={x:"0px",y:"0px",viewBox:"0 0 164 180",xmlSpace:"preserve",id:"svg3719",width:"32",height:"35"},e.exports=r,r.default=r}}]);