(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{6449:function(a,t,e){"use strict";e.r(t);e(415);var n=e(400),o=e.n(n),c=(e(411),e(403),e(407)),i=e.n(c),d=e(410),r=e.n(d),s=e(420),l=e.n(s),g=e(413),u=e.n(g),m=e(414),h=e.n(m),v=e(412),f=e.n(v),p=e(404),y=e.n(p),w=e(0),I=e(472),b=e(495),k=e(455),x=e(5272),D=e.n(x),E=e(5277),S=e.n(E),C=e(5279),G=e.n(C),z=e(429),B=e.n(z),R=e(558),M=e(595),L=e(518);function A(a){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var e,n=f()(a);if(t){var o=f()(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return h()(this,e)}}var J=o()(b.a,{md:8},void 0,o()("canvas",{width:"600",height:"400",id:"picker"})),j=o()("canvas",{id:"zoom",width:"250",height:"200"}),P=function(a){u()(e,a);var t=A(e);function e(a){var n;return i()(this,e),n=t.call(this,a),y()(l()(n),"invert",(function(){for(var a=0;a<n.data.length;a+=4)n.data[a]=255-n.data[a],n.data[a+1]=255-n.data[a+1],n.data[a+2]=255-n.data[a+2];n.ctx.putImageData(n.imageData,0,0)})),y()(l()(n),"grayscale",(function(){for(var a=0;a<n.data.length;a+=4){var t=(n.data[a]+n.data[a+1]+n.data[a+2])/3;n.data[a]=t,n.data[a+1]=t,n.data[a+2]=t}n.ctx.putImageData(n.imageData,0,0),n.setState({clickedGrayscale:!0})})),y()(l()(n),"drawImage",(function(a){var t,e=new Image,o=document.getElementById("picker");switch(o.addEventListener("mousemove",n.handleMouseMove),n.canvas=o,n.ctx=o.getContext("2d"),e.onload=function(){n.ctx.drawImage(e,0,0),n.imageData=n.ctx.getImageData(0,0,o.width,o.height),n.data=n.imageData.data},a){case"Landscape":default:t=D()();break;case"Boats":t=S()();break;case"Airplane":t=G()()}e.src="data:image/jpeg;base64,".concat(t.toString("base64"));var c=document.getElementById("zoom").getContext("2d");c.imageSmoothingEnabled=!1,c.mozImageSmoothingEnabled=!1,c.webkitImageSmoothingEnabled=!1,c.msImageSmoothingEnabled=!1,n.zoomctx=c,n.setState({selectedData:!0,clickedGrayscale:!1})})),y()(l()(n),"handleMouseMove",(function(a){var t=a.layerX,e=a.layerY,o=n.ctx.getImageData(t,e,1,1).data,c="rgba("+o[0]+", "+o[1]+", "+o[2]+", "+o[3]/255+")",i=document.getElementById("color");i.style.background=c,i.textContent=c,n.zoomctx.drawImage(n.canvas,B()(t-5),B()(e-5),10,10,0,0,200,200)})),n.state={clickedGrayscale:!1,selectedData:!1},n}return r()(e,[{key:"render",value:function(){return o()(R.a,{},void 0,o()("div",{},void 0,o()(L.a,{options:["Landscape","Boats","Airplane"],onChange:this.drawImage}),this.state.selectedData?o()("span",{},void 0,o()(M.a,{inline:!0,disabled:this.state.clickedGrayscale,defaultValue:this.state.clickedGrayscale,legend:"Grayscale",onChange:this.grayscale}),o()(M.a,{inline:!0,legend:"Invert",onChange:this.invert})):null),o()(I.a,{},void 0,o()(k.a,{},void 0,J,o()(b.a,{md:3},void 0,o()("div",{id:"color",style:{width:"250px",height:"50px",color:"red"}}),j))))}}]),e}(w.Component);t.default=P}}]);