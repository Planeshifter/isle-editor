(window.webpackJsonp=window.webpackJsonp||[]).push([[1003],{6558:function(t,e,n){"use strict";n.r(e);n(436),n(423),n(420);var o=n(407),r=n.n(o),a=n(414),i=n.n(a),s=n(415),c=n.n(s),d=n(417),u=n.n(d),l=n(418),f=n.n(l),p=n(416),h=n.n(p),v=n(0),g=(n(404),n(592)),y=n(505),w=n(479),m=n.n(w),k=n(545),b=n.n(k),x=n(959),P=n.n(x),H=n(666),R=n.n(H),A=n(624),B=n.n(A);function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=h()(t);if(e){var r=h()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return f()(this,n)}}var D=function(t){u()(n,t);var e=C(n);function n(t){var o;return i()(this,n),(o=e.call(this,t)).state={data:null},o}return c()(n,[{key:"render",value:function(){var t=this;return r()(g.a,{onHide:this.props.onHide,show:this.props.show,id:"sketch-feedback-modal",dialogClassName:"modal-100w"},void 0,r()(g.a.Header,{closeButton:!0},void 0,r()(g.a.Title,{as:"h3"},void 0,this.props.t("feedback-modal-title",{id:this.props.id,noPages:this.props.noPages}))),r()(g.a.Body,{},void 0,r()(y.a,{data:this.state.data,removeButtons:!0,onClick:function(e){var n=e.points[0];n&&(t.props.gotoPage(n.pointIndex),t.props.onHide())},layout:{xaxis:{fixedrange:!0},yaxis:{fixedrange:!0},barmode:"relative"}})))}}],[{key:"getDerivedStateFromProps",value:function(t,e){if(b()(e.data)){for(var n=t.session.socketActions,o="".concat(t.id,"-slide-"),r={},a=0;a<n.length;a++){var i=n[a].id;P()(i,o)&&!n[a].owner&&(r[i]||(r[i]=[]),r[i].push(n[a].value))}for(var s=m()(r),c=[],d=["confused","understood"],u=0;u<d.length;u++){for(var l=new Array(s.length),f=new Array(s.length),p=0;p<t.noPages;p++){l[p]="Slide "+(p+1);var h="".concat(t.id,"-slide-").concat(t.toOriginalPage(p));if(r[h]){var v=R()(r[h],B.a);f[p]=v[d[u]],0===u&&(f[p]*=-1)}else f[p]=0}c.push({x:l,y:f,type:"bar",name:d[u],marker:{color:1===u?"rgb(40,167,69)":"rgb(220,53,69)",cursor:"pointer"}})}return{data:c}}}}]),n}(v.Component);D.defaultProps={onHide:function(){}},e.default=D}}]);