(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{6405:function(t,e,i){"use strict";i.r(e);i(411),i(403),i(415);var a=i(400),r=i.n(a),n=i(407),o=i.n(n),s=i(410),g=i.n(s),u=i(420),d=i.n(u),c=i(413),h=i.n(c),f=i(414),m=i.n(f),l=i(412),p=i.n(l),v=i(404),y=i.n(v),R=i(0),k=i.n(R),I=(i(396),i(443)),w=i.n(I);i(308);function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,a=p()(t);if(e){var r=p()(this).constructor;i=Reflect.construct(a,arguments,r)}else i=a.apply(this,arguments);return m()(this,i)}}var z=w()("isle:background"),x=function(t){h()(i,t);var e=b(i);function i(t){var a;return o()(this,i),a=e.call(this,t),y()(d()(a),"getRatio",(function(){var t=a.myRef.current.parentElement,e=t.clientWidth,i=t.clientHeight,r=parseFloat(e/i).toFixed(4);a.setState({ratio:r})})),y()(d()(a),"modifyParent",(function(){var t=a.myRef.current.parentElement;"lesson"!==t.attributes.class&&(t.style.backgroundColor="transparent",t.style.overflow="hidden",0===t.clientHeight&&(t.style.width="600px",t.style.height="320px",z("You have to define width and height for the parent element of the background")))})),y()(d()(a),"changeBackground",(function(){var t=a.state.counter;if(a.state.fading){var e=t-1,i=a.getImageRatio(t);0===t&&(e=a.props.images.length-1);var r=a.getImageRatio(e);a.setState({foregroundImage:a.props.images[t],backgroundImage:a.props.images[e],foregroundRatio:i,backgroundRatio:r,fading:!1})}else{var n=t+2;n>a.props.images.length-1&&(n=0);var o=t+1;o===a.props.images.length&&(o=a.props.images.length-1);var s=a.getImageRatio(t),g=a.getImageRatio(o);a.setState({foregroundImage:a.props.images[o],backgroundImage:a.props.images[t],foregroundRatio:s,backgroundRatio:g,fading:!0,counter:n})}setTimeout(a.changeBackground,1e3*a.props.time)})),a.myRef=k.a.createRef(),a.start=!0,a.imageList=[],a.state={ratio:1.777,fading:!0,backgroundImage:t.images[0],foregroundImage:t.images[1],foregroundRatio:1.777,backgroundRatio:1.777,counter:0,initialized:!0},a}return g()(i,[{key:"componentDidMount",value:function(){this.getRatio(),this.preload(),!0===this.props.parent&&this.modifyParent(),this.changeBackground(),window.addEventListener("resize",this.getRatio)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.getRatio)}},{key:"initialize",value:function(t){var e=this;t.onload=function(){var i=t.width/t.height;e.setState({initialized:!0,foregroundRatio:i})}}},{key:"preload",value:function(){for(var t=0;t<this.props.images.length;t++){var e=new Image;e.src=this.props.images[t],this.imageList.push(e),0===t&&this.initialize(e)}}},{key:"getImageRatio",value:function(t){if(this.imageList[t]){var e=this.imageList[t];return e.width/e.height}}},{key:"resizeImage",value:function(t){return t<this.state.ratio?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}}},{key:"startProcess",value:function(){var t={animation:this.props.in+" "+this.props.inTime+"s forwards"},e=this.resizeImage(this.state.foregroundRatio);return r()("div",{},void 0,r()("div",{className:"enter-foreground",style:t},void 0,r()("img",{style:e,alt:"",src:this.state.foregroundImage})))}},{key:"exit",value:function(){var t={animation:this.props.out+" "+this.props.outTime+"s forwards"},e=this.resizeImage(this.state.foregroundRatio),i=this.resizeImage(this.state.backgroundRatio);return r()("div",{},void 0,r()("div",{className:"exit-foreground"},void 0,r()("img",{style:e,alt:"",src:this.state.foregroundImage})),r()("div",{className:"exit-background",style:t},void 0,r()("img",{style:i,alt:"",src:this.state.backgroundImage})))}},{key:"enter",value:function(){var t={animation:this.props.in+" "+this.props.inTime+"s forwards"},e=this.resizeImage(this.state.foregroundRatio),i=this.resizeImage(this.state.backgroundRatio);return r()("div",{},void 0,r()("div",{className:"enter-foreground",style:t},void 0,r()("img",{style:e,alt:"",src:this.state.foregroundImage})),r()("div",{className:"enter-background"},void 0,r()("img",{style:i,alt:"",src:this.state.backgroundImage})))}},{key:"render",value:function(){return!1===this.state.fading?!0===this.start?!1===this.state.initialized?null:(this.start=!1,k.a.createElement("div",{ref:this.myRef},this.startProcess())):k.a.createElement("div",{ref:this.myRef},this.enter()):k.a.createElement("div",{ref:this.myRef},this.exit())}}]),i}(R.Component);x.defaultProps={images:[],time:3,in:"fade-in",out:"fade-out",parent:!1,inTime:1,outTime:1},e.default=x}}]);