(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{6395:function(e,r,t){"use strict";t.r(r);t(411),t(403),t(415);var n=t(400),i=t.n(n),a=t(407),l=t.n(a),o=t(410),s=t.n(o),c=t(420),u=t.n(c),g=t(413),d=t.n(g),f=t(414),h=t.n(f),p=t(412),b=t.n(p),y=t(404),v=t.n(y),m=t(0),w=(t(396),t(1484)),D=t.n(w),R=t(555),z=t.n(R),k=t(447),x=t.n(k);function S(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=b()(e);if(r){var i=b()(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return h()(this,t)}}var P=Object(w.WidthProvider)(D.a),H=function(e){d()(t,e);var r=S(t);function t(e){var n;l()(this,t),n=r.call(this,e),v()(u()(n),"enlargeDivFactory",(function(e){return function(){var r=z()(n.state.layout),t=z()(n.state.enlarged),i=n.props,a=i.itemHeight,l=i.enlargedHeight,o=i.isDraggable,s=i.isResizable;if(n.state.enlarged[e])for(var c=0;c<r.length;c++)r[c]={i:String(c),x:4*c%12,y:x()(c/a)*a,w:4,h:a,isDraggable:o,isResizable:s},t[c]=!1;else for(var u=0;u<r.length;u++)u<e?(r[u]={i:String(u),x:4*u%12,y:x()(u/a)*a,w:4,h:a,isDraggable:o,isResizable:s},t[u]=!1):u===e?(r[u]={i:String(u),x:0,y:x()(u/a)*a,w:12,h:l,isDraggable:o,isResizable:s},t[e]=!0):(r[u]={i:String(u),x:4*(u-e)%12,y:x()(u/a)*a+l,w:4,h:a,isDraggable:o,isResizable:s},t[u]=!1);n.setState({layout:r,enlarged:t})}}));var i=e.children.map((function(r,t){var i=n.props.itemHeight;return{i:String(t),x:4*t%12,y:x()(t/i)*i,w:4,h:i,isDraggable:e.isDraggable,isResizable:e.isResizable}}));return n.state={layout:i,enlarged:[],children:e.children},n}return s()(t,[{key:"render",value:function(){var e=this;return i()(P,{className:"layout",layout:this.state.layout,cols:12,rowHeight:30},void 0,this.props.enlargeable?this.props.children.map((function(r,t){return i()("button",{onClick:e.enlargeDivFactory(t),style:{border:"2px solid darkgray",cursor:"zoom-in",background:"none"}},t,r)})):this.props.children.map((function(e,r){return i()("div",{style:{border:"2px solid darkgray"}},r,e)})))}}],[{key:"getDerivedStateFromProps",value:function(e,r){if(e.children!==r.children){var t=e.itemHeight;return{layout:e.children.map((function(r,n){return{i:String(n),x:4*n%12,y:x()(n/t)*t,w:4,h:t,isDraggable:e.isDraggable,isResizable:e.isResizable}})),children:e.children}}return null}}]),t}(m.Component);H.defaultProps={enlargeable:!0,enlargedHeight:18,isDraggable:!1,isResizable:!1,itemHeight:9},r.default=H},796:function(e,r){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}}]);