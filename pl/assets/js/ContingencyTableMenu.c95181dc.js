(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{486:function(e,t,a){"use strict";var n=a(407),r=a.n(n),i=(a(0),a(404),a(424)),o=a(513),l=a(511),s=a(507),c=a(546),u=r()(i.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,r()("div",{className:"fa fa-question"}));t.a=function(e){var t=r()(o.a,{id:"popover-positioned-right"},void 0,r()(l.a,{},void 0,e.title),r()(s.a,{},void 0,e.content));return r()(c.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:t},void 0,u)}},6356:function(e,t,a){"use strict";a.r(t);a(427),a(416),a(421);var n=a(407),r=a.n(n),i=a(414),o=a.n(i),l=a(415),s=a.n(l),c=a(418),u=a.n(c),p=a(419),v=a.n(p),d=a(417),f=a.n(d),g=a(0),h=(a(404),a(450)),b=a.n(h),y=a(424),V=a(465),m=a(552),w=a(508),C=a(490),q=a(1338),P=a(462),R=a(486);function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=f()(e);if(t){var r=f()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return v()(this,a)}}var F=b()("isle:data-explorer:contingency-table"),S=function(e){u()(a,e);var t=D(a);function a(e){var n;return o()(this,a),(n=t.call(this,e)).state={relativeFreqs:!1,rowVar:e.defaultRowVar||e.variables[0],colVar:e.defaultColVar||e.variables[1],group:null,nDecimalPlaces:3,variables:e.variables,display:[]},n}return s()(a,[{key:"generateContingencyTable",value:function(){var e=this.state,t=e.rowVar,a=e.colVar,n=e.group,i=e.relativeFreqs,o=e.nDecimalPlaces,l=e.display;if(!t||!a)return this.props.session.addNotification({title:this.props.t("select-variables"),message:this.props.t("select-row-and-column-variable"),level:"warning",position:"tr"});var s=r()(q.a,{rowVar:t,colVar:a,group:n,relativeFreqs:i,nDecimalPlaces:o,display:l,data:this.props.data});this.props.logAction(P.g,{rowVar:t,colVar:a,group:n,relativeFreqs:i,display:l}),this.props.onCreated(s)}},{key:"render",value:function(){var e=this,t=this.props,a=t.variables,n=t.groupingVariables,i=t.t;return r()(V.a,{},void 0,r()(V.a.Header,{as:"h4"},void 0,i("Contingency Table"),r()(R.a,{title:i("Contingency Table"),content:i("Contingency Table-description")})),r()(V.a.Body,{},void 0,r()(w.a,{legend:i("row-variable"),defaultValue:this.state.rowVar,options:a,onChange:function(t){e.setState({rowVar:t})}}),r()(w.a,{legend:i("column-variable"),defaultValue:this.state.colVar,options:a,onChange:function(t){e.setState({colVar:t})}}),r()(w.a,{legend:i("group-by"),options:n,clearable:!0,menuPlacement:"top",onChange:function(t){e.setState({group:t})},tooltip:i("contingency-table-group-tooltip")}),r()(m.a,{legend:i("relative-frequency"),defaultValue:!1,onChange:function(){e.setState({relativeFreqs:!e.state.relativeFreqs})}}),r()(w.a,{legend:i("display"),options:["Row Percent","Column Percent"],multi:!0,onChange:function(t){e.setState({display:t||[]})}}),this.state.relativeFreqs||this.state.display.length>0?r()("p",{},void 0,i("report-relative-frequencies"),r()(C.b,{inline:!0,width:50,max:16,min:0,defaultValue:this.state.nDecimalPlaces,onChange:function(t){e.setState({nDecimalPlaces:t})}}),i("decimal-places")):null,r()(y.a,{variant:"primary",block:!0,onClick:this.generateContingencyTable.bind(this)},void 0,i("generate"))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.variables.length!==t.variables.length?(F("Available variables have changed..."),{rowVar:e.defaultRowVar||e.variables[0],colVar:e.defaultColVar||e.variables[1],variables:e.variables}):null}}]),a}(g.Component);S.defaultProps={defaultRowVar:null,defaultColVar:null,groupingVariables:null,logAction:function(){}},t.default=S}}]);