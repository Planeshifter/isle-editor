(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{485:function(e,a,t){"use strict";var n,r=t(407),i=t.n(r),o=(t(0),t(404),t(423)),l=t(514),s=t(511),c=t(505),u=t(548);a.a=function(e){var a=i()(l.a,{id:"popover-positioned-right"},void 0,i()(s.a,{},void 0,e.title),i()(c.a,{},void 0,e.content));return i()(u.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:a},void 0,n||(n=i()(o.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,i()("div",{className:"fa fa-question"}))))}},6294:function(e,a,t){"use strict";t.r(a);t(421);var n=t(407),r=t.n(n),i=t(414),o=t.n(i),l=t(416),s=t.n(l),c=t(418),u=t.n(c),p=t(419),v=t.n(p),d=t(417),f=t.n(d),g=t(0),h=(t(404),t(450)),b=t.n(h),y=t(423),V=t(464),m=t(557),w=t(508),C=t(488),q=t(1330),P=t(458),R=t(485);function F(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=f()(e);if(a){var r=f()(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return v()(this,t)}}var k=b()("isle:data-explorer:contingency-table"),S=function(e){u()(t,e);var a=F(t);function t(e){var n;return o()(this,t),(n=a.call(this,e)).state={relativeFreqs:!1,rowVar:e.defaultRowVar||e.variables[0],colVar:e.defaultColVar||e.variables[1],group:null,nDecimalPlaces:3,variables:e.variables,display:[]},n}return s()(t,[{key:"generateContingencyTable",value:function(){var e=this.state,a=e.rowVar,t=e.colVar,n=e.group,i=e.relativeFreqs,o=e.nDecimalPlaces,l=e.display;if(!a||!t)return this.props.session.addNotification({title:this.props.t("select-variables"),message:this.props.t("select-row-and-column-variable"),level:"warning",position:"tr"});var s=r()(q.a,{rowVar:a,colVar:t,group:n,relativeFreqs:i,nDecimalPlaces:o,display:l,data:this.props.data});this.props.logAction(P.i,{rowVar:a,colVar:t,group:n,relativeFreqs:i,display:l}),this.props.onCreated(s)}},{key:"render",value:function(){var e=this,a=this.props,t=a.variables,n=a.groupingVariables,i=a.t;return r()(V.a,{},void 0,r()(V.a.Header,{as:"h4"},void 0,i("Contingency Table"),r()(R.a,{title:i("Contingency Table"),content:i("Contingency Table-description")})),r()(V.a.Body,{},void 0,r()(w.a,{legend:i("row-variable"),defaultValue:this.state.rowVar,options:t,onChange:function(a){e.setState({rowVar:a})}}),r()(w.a,{legend:i("column-variable"),defaultValue:this.state.colVar,options:t,onChange:function(a){e.setState({colVar:a})}}),r()(w.a,{legend:i("group-by"),options:n,clearable:!0,menuPlacement:"top",onChange:function(a){e.setState({group:a})},tooltip:i("contingency-table-group-tooltip")}),r()(m.a,{legend:i("relative-frequency"),defaultValue:!1,onChange:function(){e.setState({relativeFreqs:!e.state.relativeFreqs})}}),r()(w.a,{legend:i("display"),options:["Row Percent","Column Percent"],multi:!0,onChange:function(a){e.setState({display:a||[]})}}),this.state.relativeFreqs||this.state.display.length>0?r()("p",{},void 0,i("report-relative-frequencies"),r()(C.b,{inline:!0,width:50,max:16,min:0,defaultValue:this.state.nDecimalPlaces,onChange:function(a){e.setState({nDecimalPlaces:a})}}),i("decimal-places")):null,r()(y.a,{variant:"primary",block:!0,onClick:this.generateContingencyTable.bind(this)},void 0,i("generate"))))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return e.variables.length!==a.variables.length?(k("Available variables have changed..."),{rowVar:e.defaultRowVar||e.variables[0],colVar:e.defaultColVar||e.variables[1],variables:e.variables}):null}}]),t}(g.Component);S.defaultProps={defaultRowVar:null,defaultColVar:null,groupingVariables:null,logAction:function(){}},a.default=S}}]);