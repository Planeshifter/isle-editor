(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{6472:function(e,r,t){"use strict";t.r(r);t(436),t(423),t(420);var i=t(407),n=t.n(i),a=t(414),l=t.n(a),s=t(415),o=t.n(s),c=t(424),u=t.n(c),g=t(417),h=t.n(g),d=t(418),f=t.n(d),p=t(416),b=t.n(p),y=t(412),v=t.n(y),D=t(0),R=(t(404),t(1336)),m=t.n(R),w=t(514),z=t.n(w),x=t(457),S=t.n(x);function k(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,i=b()(e);if(r){var n=b()(this).constructor;t=Reflect.construct(i,arguments,n)}else t=i.apply(this,arguments);return f()(this,t)}}var H=Object(R.WidthProvider)(m.a),P=function(e){h()(t,e);var r=k(t);function t(e){var i;l()(this,t),i=r.call(this,e),v()(u()(i),"enlargeDivFactory",(function(e){return function(){var r=z()(i.state.layout),t=z()(i.state.enlarged),n=i.props,a=n.itemHeight,l=n.enlargedHeight,s=n.isDraggable,o=n.isResizable;if(i.state.enlarged[e])for(var c=0;c<r.length;c++)r[c]={i:String(c),x:4*c%12,y:S()(c/a)*a,w:4,h:a,isDraggable:s,isResizable:o},t[c]=!1;else for(var u=0;u<r.length;u++)u<e?(r[u]={i:String(u),x:4*u%12,y:S()(u/a)*a,w:4,h:a,isDraggable:s,isResizable:o},t[u]=!1):u===e?(r[u]={i:String(u),x:0,y:S()(u/a)*a,w:12,h:l,isDraggable:s,isResizable:o},t[e]=!0):(r[u]={i:String(u),x:4*(u-e)%12,y:S()(u/a)*a+l,w:4,h:a,isDraggable:s,isResizable:o},t[u]=!1);i.setState({layout:r,enlarged:t})}}));var n=e.children.map((function(r,t){var n=i.props.itemHeight;return{i:String(t),x:4*t%12,y:S()(t/n)*n,w:4,h:n,isDraggable:e.isDraggable,isResizable:e.isResizable}}));return i.state={layout:n,enlarged:[],children:e.children},i}return o()(t,[{key:"render",value:function(){var e=this;return n()(H,{className:"layout",layout:this.state.layout,cols:12,rowHeight:30},void 0,this.props.enlargeable?this.props.children.map((function(r,t){return n()("button",{onClick:e.enlargeDivFactory(t),style:{border:"2px solid darkgray",cursor:"zoom-in",background:"none"}},t,r)})):this.props.children.map((function(e,r){return n()("div",{style:{border:"2px solid darkgray"}},r,e)})))}}],[{key:"getDerivedStateFromProps",value:function(e,r){if(e.children!==r.children){var t=e.itemHeight;return{layout:e.children.map((function(r,i){return{i:String(i),x:4*i%12,y:S()(i/t)*t,w:4,h:t,isDraggable:e.isDraggable,isResizable:e.isResizable}})),children:e.children}}return null}}]),t}(D.Component);P.defaultProps={enlargeable:!0,enlargedHeight:18,isDraggable:!1,isResizable:!1,itemHeight:9},r.default=P}}]);