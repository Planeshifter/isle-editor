(window.webpackJsonp=window.webpackJsonp||[]).push([[993],{6436:function(e,t,n){"use strict";n.r(t);n(421);var o=n(407),r=n.n(o),a=n(414),i=n.n(a),s=n(416),c=n.n(s),l=n(424),d=n.n(l),u=n(418),f=n.n(u),p=n(419),h=n.n(p),v=n(417),g=n.n(v),y=n(412),k=n.n(y),w=n(0),m=(n(404),n(596)),P=n(504),b=n(481),x=n.n(b),B=n(558),C=n.n(B),H=n(961),R=n.n(H),A=n(665),J=n.n(A),O=n(629),S=n.n(O);function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=g()(e);if(t){var r=g()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return h()(this,n)}}var F=function(e){f()(n,e);var t=D(n);function n(e){var o;return i()(this,n),o=t.call(this,e),k()(d()(o),"handlePlotClick",(function(e){var t=e.points[0];t&&(o.props.gotoPage(t.pointIndex),o.props.onHide())})),o.state={data:null},o}return c()(n,[{key:"render",value:function(){return r()(m.a,{onHide:this.props.onHide,show:this.props.show,id:"sketch-feedback-modal",dialogClassName:"modal-100w"},void 0,r()(m.a.Header,{closeButton:!0},void 0,r()(m.a.Title,{as:"h3"},void 0,this.props.t("feedback-modal-title",{id:this.props.id,noPages:this.props.noPages}))),r()(m.a.Body,{},void 0,r()(P.a,{data:this.state.data,removeButtons:!0,onClick:this.handlePlotClick,layout:{xaxis:{fixedrange:!0},yaxis:{fixedrange:!0},barmode:"relative"}})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(C()(t.data)){for(var n=e.session.socketActions,o="".concat(e.id,"-slide-"),r={},a=0;a<n.length;a++){var i=n[a].id;R()(i,o)&&!n[a].owner&&(r[i]||(r[i]=[]),r[i].push(n[a].value))}for(var s=x()(r),c=[],l=["confused","understood"],d=0;d<l.length;d++){for(var u=new Array(s.length),f=new Array(s.length),p=0;p<e.noPages;p++){u[p]="Slide "+(p+1);var h="".concat(e.id,"-slide-").concat(e.toOriginalPage(p));if(r[h]){var v=J()(r[h],S.a);f[p]=v[l[d]],0===d&&(f[p]*=-1)}else f[p]=0}c.push({x:u,y:f,type:"bar",name:l[d],marker:{color:1===d?"rgb(40,167,69)":"rgb(220,53,69)",cursor:"pointer"}})}return{data:c}}}}]),n}(w.Component);F.defaultProps={onHide:function(){}},t.default=F}}]);