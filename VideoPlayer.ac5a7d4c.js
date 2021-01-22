(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{1893:function(e,t,n){"use strict";t.a=function(e){return!e||null===e.offsetParent}},4736:function(e,t,n){"use strict";n.r(t);n(415),n(412),n(401),n(400),n(410),n(382),n(370),n(384);var r=n(589),o=n.n(r),i=n(368),a=n.n(i),s=n(374),l=n.n(s),c=n(375),p=n.n(c),d=n(390),u=n.n(d),y=n(379),f=n.n(y),h=n(380),v=n.n(h),g=n(378),m=n.n(g),P=n(372),w=n.n(P),b=n(0),E=n.n(b),S=(n(360),n(420)),O=n.n(S),k=n(6664),I=n(6467),j=n.n(I),V=n(618),R=n(397),D=n(1522),x=n.n(D),L=n(490),T=n.n(L),B=n(646),C=n(1140),J=n(481),N=n(440),M=n(1893),U=n(1216),z=n(445),F=n(393),H=n(6485);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var o=m()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v()(this,n)}}Object(F.a)("Video");var q=Object(B.a)("video-player"),A=O()("isle:video-player"),G=["center","startTime","voiceID","t","tReady"];var Q=a()("i",{className:"fas fa-redo"}),X=function(e){f()(n,e);var t=W(n);function n(e){var r;return l()(this,n),r=t.call(this,e),w()(u()(r),"isInViewport",(function(){if(A("Check whether video player is in viewport..."),!r.videoPlayer)return!1;var e=r.videoPlayer.getBoundingClientRect().top;r.setState({inViewport:e>=0&&e<=window.innerHeight})})),w()(u()(r),"handleStart",(function(){r.context.log({id:r.id,type:z.Mc,value:r.state.progress.playedSeconds}),r.props.onStart()})),w()(u()(r),"handlePlay",(function(){r.context.log({id:r.id,type:z.Kc,value:r.state.progress.playedSeconds}),r.props.onPlay()})),w()(u()(r),"handlePause",(function(){r.context.log({id:r.id,type:z.Jc,value:r.state.progress.playedSeconds}),r.props.onPause()})),w()(u()(r),"handleSeek",(function(e){r.context.log({id:r.id,type:z.Lc,value:e}),r.props.onSeek(e)})),w()(u()(r),"handleReady",(function(e){(r.player=e,r.props.startTime)&&r.player.getInternalPlayer().seekTo(r.props.startTime)})),w()(u()(r),"handleEnded",(function(){r.context.log({id:r.id,type:z.Ic,value:r.state.progress.playedSeconds}),r.props.onEnded()})),w()(u()(r),"handleError",(function(e){var t;switch(A("Encountered an error: "+e),e){case 150:t=r.props.t("playback-disabled");break;default:t=r.props.t("video-not-loaded")}r.setState({encounteredError:t})})),w()(u()(r),"handleProgress",(function(e){r.setState({progress:e})})),w()(u()(r),"pausePlayer",(function(){r.player.getInternalPlayer().pauseVideo()})),w()(u()(r),"startPlayer",(function(){r.player.getInternalPlayer().playVideo()})),w()(u()(r),"stopPlayer",(function(){r.player.getInternalPlayer().stopVideo()})),r.id=e.id||q(e),r.state={encounteredError:null,progress:{},inViewport:!0},r}return p()(n,[{key:"componentDidMount",value:function(){this.props.playing&&(U.a?document.getElementById("Lesson"):document).addEventListener("scroll",this.isInViewport)}},{key:"componentDidUpdate",value:function(e){this.props.playing&&!e.playing&&(U.a?document.getElementById("Lesson"):document).addEventListener("scroll",this.isInViewport)}},{key:"componentWillUnmount",value:function(){(U.a?document.getElementById("Lesson"):document).removeEventListener("scroll",this.isInViewport)}},{key:"renderError",value:function(){var e=this;if(!this.state.encounteredError)return null;var t=a()(J.a,{tooltip:this.props.t("retry")},void 0,a()(R.a,{size:"sm",variant:"light-outline",onClick:function(){e.setState({encounteredError:null})},style:{position:"absolute",top:5,right:5}},void 0,Q));return a()("div",{style:{position:"relative"}},void 0,a()("pre",{},void 0,this.state.encounteredError),t)}},{key:"render",value:function(){var e=this;if(!this.props.url)return a()(V.a,{variant:"danger"},void 0,this.props.t("url-missing"));var t=this.props,n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){w()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:t.width,height:t.height,marginTop:"10px",marginBottom:"10px"},t.style);t.center&&(n.marginLeft="auto",n.marginRight="auto"),t=x()(t,G);var r,i=Object(M.a)(this.videoPlayer);if(!this.props.playing||this.state.inViewport&&!i||this.player){var s={};T()(t.url,"yout")&&(s={youtube:{playerVars:{showinfo:0,rel:0,modestbranding:1}}}),i&&(t.playing=!1),r=a()(b.Fragment,{},void 0,a()(C.a,{reference:this,id:this.props.voiceID,commands:H}),this.state.encounteredError?this.renderError():E.a.createElement(j.a,o()({},t,{onStart:this.handleStart,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onProgress:this.handleProgress,onReady:this.handleReady,onSeek:this.handleSeek,onError:this.handleError,progressInterval:1e3,config:s})))}else r=null;return E.a.createElement("div",{id:this.id,style:n,className:"video",ref:function(t){var n,r,o;e.videoPlayer||(e.videoPlayer=t,n=e.videoPlayer,r=e.isInViewport,o={root:document.documentElement},new IntersectionObserver((function(e,t){e.forEach((function(e){r(e.intersectionRatio>0)}))}),o).observe(n))}},r)}}]),n}(b.Component);X.defaultProps={url:"",controls:!1,playing:!1,volume:.8,center:!0,height:360,width:640,loop:!1,voiceID:null,startTime:null,style:{},onEnded:function(){},onPause:function(){},onPlay:function(){},onStart:function(){},onSeek:function(){}},X.contextType=N.a,t.default=Object(k.a)("Video")(X)},6485:function(e){e.exports=JSON.parse('[{"command":"startPlayer","trigger":["start","begin","continue"],"description":"Start player"},{"command":"pausePlayer","trigger":"pause","description":"Pause player"},{"command":"stopPlayer","trigger":"stop","description":"Stop player"}]')}}]);