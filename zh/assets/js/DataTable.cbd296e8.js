(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{1075:function(t,e,n){"use strict";(function(t){n(583),n(483);var o=/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i;function a(e){t((function(){throw e}),0)}function r(t){return o.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t}var i=function(t){if(!(void 0===t||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var e=t.document.createElementNS("http://www.w3.org/1999/xhtml","a"),n="download"in e,o=/constructor/i.test(t.HTMLElement)||t.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent),l=t.setImmediate||t.setTimeout,s=d.prototype;return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(t,e,n){return e=e||t.name||"download",n||(t=r(t)),navigator.msSaveOrOpenBlob(t,e)}:(s.abort=function(){},s.readyState=s.INIT=0,s.WRITING=1,s.DONE=2,s.error=null,s.onwritestart=null,s.onprogress=null,s.onwrite=null,s.onabort=null,s.onerror=null,s.onwriteend=null,function(t,e,n){return new d(t,e||t.name||"download",n)})}function c(){return t.URL||t.webkitURL||t}function u(t){setTimeout((function(){"string"==typeof t?c().revokeObjectURL(t):t.remove()}),4e4)}function d(s,d,p){p||(s=r(s));var f,h=this,v="application/octet-stream"===s.type;function m(){!function(t,e,n){for(var o=(e=[].concat(e)).length;o--;){var r=t["on"+e[o]];if("function"==typeof r)try{r.call(t,n||t)}catch(i){a(i)}}}(h,"writestart progress write writeend".split(" "))}if(h.readyState=h.INIT,n)return f=c().createObjectURL(s),void l((function(){var t,n;e.href=f,e.download=d,t=e,n=new MouseEvent("click"),t.dispatchEvent(n),m(),u(f),h.readyState=h.DONE}),0);!function(){if((i||v&&o)&&t.FileReader){var e=new FileReader;return e.onloadend=function(){var n=i?e.result:e.result.replace(/^data:[^;]*;/,"data:attachment/file;");t.open(n,"_blank")||(t.location.href=n),n=void 0,h.readyState=h.DONE,m()},e.readAsDataURL(s),void(h.readyState=h.INIT)}f||(f=c().createObjectURL(s)),v?t.location.href=f:t.open(f,"_blank")||(t.location.href=f),h.readyState=h.DONE,m(),u(f)}()}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||(void 0).content);e.a=i}).call(this,n(897).setImmediate)},4049:function(t,e,n){"use strict";n.r(e);n(437),n(433),n(438),n(439),n(421);var o,a=n(787),r=n.n(a),i=n(414),l=n.n(i),s=n(416),c=n.n(s),u=n(424),d=n.n(u),p=n(418),f=n.n(p),h=n(419),v=n.n(h),m=n(417),b=n.n(m),g=n(412),w=n.n(g),y=n(407),O=n.n(y),S=(n(428),n(430),n(468),n(486),n(500),n(465),n(644),n(483),n(0)),C=n.n(S),N=(n(404),n(23)),x=n(450),P=n.n(x),I=n(4101),T=n(4044),j=n(713),D=n.n(j),k=n(454),R=n(736),B=n(423),E=n(596),M=n(484),V=n(1096),L=n.n(V),F=n(2653),H=n.n(F),z=n(912),A=n.n(z),U=n(425),W=n.n(U),_=n(471),J=n.n(_),G=n(1095),K=n.n(G),q=n(452),Y=n.n(q),Q=n(616),X=n.n(Q),Z=n(593),$=n.n(Z),tt=n(962),et=n.n(tt),nt=n(762),ot=n.n(nt),at=n(566),rt=n.n(at),it=n(447),lt=n.n(it),st=n(429),ct=n(558),ut=n.n(ct),dt=n(481),pt=n.n(dt),ft=n(633),ht=n(617),vt=n(544),mt=n(1075),bt=n(459),gt=n(458),wt=n(457),yt=n.n(wt),Ot=n(508),St=n(891),Ct=n(769),Nt=n(742),xt=n(1069),Pt=n(523),It=n.n(Pt),Tt=n(4715);function jt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=b()(t);if(e){var a=b()(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return v()(this,n)}}var Dt=function(t){f()(n,t);var e=jt(n);function n(t){var o;return l()(this,n),o=e.call(this,t),w()(d()(o),"startTour",(function(){o.setState({running:!o.state.running})})),o.state={running:!1},o.stepsWithId=It()(Tt,2).map((function(e){return e.target="#".concat(t.id," ")+e.target,e})),o}return c()(n,[{key:"render",value:function(){var t=this;return O()(S.Fragment,{},void 0,O()(Nt.a,{placement:"bottom",overlay:O()(Ct.a,{},void 0,this.props.t(this.state.running?"close-tutorial":"show-tutorial"))},void 0,O()(B.a,{className:"help-button",variant:"light",onClick:this.startTour},void 0,o||(o=O()("div",{className:"fa fa-question"})))),O()(xt.b,{steps:this.stepsWithId,disableScrolling:!0,showProgress:!0,run:this.state.running,callback:function(e){e.type===xt.a.TOUR_END&&(t.setState({running:!1}),t.props.onTutorialCompletion())}}))}}]),n}(S.Component),kt=n(489),Rt=n.n(kt),Bt=n(553),Et=n.n(Bt),Mt=n(832);function Vt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function Lt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Vt(Object(n),!0).forEach((function(e){w()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Vt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Ft(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=b()(t);if(e){var a=b()(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return v()(this,n)}}var Ht=function(t){f()(n,t);var e=Ft(n);function n(t){var o;return l()(this,n),o=e.call(this,t),w()(d()(o),"showTooltip",(function(){o.setState({showTooltip:!0})})),w()(d()(o),"hideTooltip",(function(){o.setState({showTooltip:!1})})),o.state={showTooltip:!1},o}return c()(n,[{key:"render",value:function(){var t=this;return O()(S.Fragment,{},void 0,O()(Mt.a,{show:this.state.showTooltip,target:this.title},void 0,(function(e){e.placement,e.scheduleUpdate,e.arrowProps,e.outOfBoundaries,e.show;var n=Et()(e,["placement","scheduleUpdate","arrowProps","outOfBoundaries","show"]);return C.a.createElement("div",Rt()({},n,{style:Lt({backgroundColor:"rgba(10, 10, 10,0.9)",padding:"2px 10px",color:"white",borderRadius:3,maxWidth:"300px",marginBottom:"10px"},n.style)}),t.props.tooltip)})),C.a.createElement("span",{ref:function(e){t.title=e},onMouseOver:this.showTooltip,onFocus:this.showTooltip,onMouseOut:this.hideTooltip,onBlur:this.hideTooltip},this.props.title))}}]),n}(S.Component);Ht.defaultProps={tooltip:""};var zt,At=Ht,Ut=n(4716),Wt=n.n(Ut),_t=n(488),Jt=n(549),Gt=n.n(Jt);function Kt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function qt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Kt(Object(n),!0).forEach((function(e){w()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Kt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Yt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=b()(t);if(e){var a=b()(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return v()(this,n)}}var Qt,Xt,Zt=function(t){f()(n,t);var e=Yt(n);function n(t){var o;return l()(this,n),o=e.call(this,t),w()(d()(o),"showRangeInput",(function(){o.setState({showRangeInput:!0})})),w()(d()(o),"hideRangeInput",(function(){o.setState({showRangeInput:!1})})),o.state={currentValue:t.defaultValue,defaultValue:t.defaultValue,showRangeInput:!1},o}return c()(n,[{key:"render",value:function(){var t=this,e=this.state.currentValue;return C.a.createElement("div",{className:"input-range-wrapper",ref:function(e){t.inputRange=e}},O()(Wt.a,{allowSameValues:!0,maxValue:this.props.maxValue,minValue:this.props.minValue,value:e,onChange:function(e){t.setState({currentValue:e})},onChangeComplete:function(e){t.props.onChange(e)},formatLabel:function(e){return O()("span",{className:"input-range-clickable-label",role:"button",tabIndex:0,onKeyPress:t.showRangeInput,onClick:t.showRangeInput,title:t.props.t("click-to-set-value")},void 0,Gt()(e))},style:{float:"left"}}),O()(Mt.a,{show:this.state.showRangeInput,target:this.inputRange},void 0,(function(n){n.placement,n.scheduleUpdate,n.arrowProps,n.outOfBoundaries,n.show;var o=Et()(n,["placement","scheduleUpdate","arrowProps","outOfBoundaries","show"]);return C.a.createElement("div",Rt()({className:"input-range-number-entry"},o,{style:qt({},o.style)}),O()(_t.b,{inline:!0,value:e.min,min:t.props.minValue,max:e.max,onChange:function(e){var n={min:Number(e),max:t.state.currentValue.max};t.setState({currentValue:n})},step:.1}),O()(_t.b,{inline:!0,value:e.max,min:e.min,max:t.props.maxValue,onChange:function(e){var n={min:t.state.currentValue.min,max:Number(e)};t.setState({currentValue:n})},step:.1}),O()(B.a,{variant:"outline-secondary",size:"sm",onClick:t.hideRangeInput},void 0,zt||(zt=O()("i",{className:"fas fa-times"}))))})))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return t.defaultValue!==e.defaultValue?{currentValue:t.defaultValue,defaultValue:t.defaultValue}:null}}]),n}(S.Component),$t=n(420),te=n(442);n(84),n(314),n(315),n(316);function ee(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=b()(t);if(e){var a=b()(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return v()(this,n)}}function ne(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function oe(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ne(Object(n),!0).forEach((function(e){w()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}Object($t.a)("DataTable");var ae=L()({html:!0,xhtmlOut:!0,breaks:!0,typographer:!1}),re=P()("isle:data-table"),ie=Object(vt.a)("data-table"),le=new Intl.Collator("en",{numeric:!0,sensitivity:"base"}),se=/[0-9.,]+/;function ce(t,e){return(t=null==t||"NA"===t?yt.a:t)-(e=null==e||"NA"===e?yt.a:e)}function ue(t,e){return t=null==t||"NA"===t?yt.a:t,e=null==e||"NA"===e?yt.a:e,le.compare(t,e)}function de(t,e){var n=e[t.id];return!(!n&&t.value)&&(lt()(t.value)?J()(t.value,n):J()(K()(n),K()(t.value)))}function pe(t,e){var n=e[t.id];return n>=t.value.min&&n<=t.value.max}function fe(t,e,n){if(!t.value||et()(t.value))return!0;var o=t.pivotId||t.id;return void 0===e[o]||(lt()(t.value)?J()(t.value,String(e[o])):String(e[o])===t.value)}var he=function(){return Qt||(Qt=O()("div",{}))};function ve(t){t.target.style.width=t.target.value.length+1+"ch"}var me=function(t){f()(o,t);var e=ee(o);function o(t){var a;l()(this,o),a=e.call(this,t),w()(d()(a),"renderEditable",(function(t){return O()("div",{style:{backgroundColor:"#fafafa"},contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(e){var n=r()(a.state.rows),o=e.target.innerHTML;n[t.index][t.column.id]=se.test(o)?Number(o):o,a.setState({rows:n},(function(){a.props.onEdit(n)}))},dangerouslySetInnerHTML:{__html:a.state.rows[t.index][t.column.id]}})})),w()(d()(a),"renderCheckboxRemovable",(function(t){return O()("input",{id:"checkBox",type:"checkbox",onClick:function(e){var n=r()(a.state.rows);n[t.index][t.column.id]=e.target.checked,a.setState({rows:n}),a.props.onClickRemove(n)}},"".concat(t.index,"-").concat(t.column.id,"-").concat(a.state.rows.length))})),w()(d()(a),"handleFilterChange",(function(t,e){Object(N.findDOMNode)(a.table).getElementsByClassName("rt-tbody")[0].scrollTop=0,a.context.log({id:a.id,type:gt.zc,value:e.id}),a.setState({filtered:t},(function(){a.props.onFilteredChange(a.state.filtered.filter((function(t){return!ut()(t.value)})))}))})),w()(d()(a),"handleSortedChange",(function(t,e){a.context.log({id:a.id,type:gt.Bc,value:e.id}),a.setState({sorted:t})})),w()(d()(a),"showDescriptions",(function(){a.setState({showVarModal:!0})})),w()(d()(a),"reset",(function(){a.context.log({id:a.id,type:gt.Ac,value:""}),a.setState({filtered:[],sorted:[]},(function(){a.props.onFilteredChange(a.state.filtered)}))})),w()(d()(a),"showInfo",(function(){re("Show dataset information..."),a.setState({showInfo:!0})})),w()(d()(a),"toggleSaveModal",(function(){a.setState({showSaveModal:!a.state.showSaveModal})})),w()(d()(a),"saveJSON",(function(){var t,e=new Blob([JSON.stringify(a.state.data)],{type:"application/json"}),n=a.props.dataInfo;t=n&&n.name?n.name:"dataset.json",Object(mt.a)(e,t)})),w()(d()(a),"saveCSV",(function(){var t=a.context;Promise.all([n.e(25),n.e(1337)]).then(n.t.bind(null,4425,7)).then((function(e){(0,e.default)(a.state.rows,{header:!0},(function(e,n){if(e)return t.addNotification({title:a.props.t("error-encountered"),message:a.props.t("error-csv")+e.message,level:"error",position:"tl"});var o,r=new Blob([n],{type:"text/plain"}),i=a.props.dataInfo;o=i&&i.name?"".concat(i.name,".csv"):"dataset.csv",Object(mt.a)(r,o)}))}))})),w()(d()(a),"handleSaveCSV",(function(){a.saveCSV(),a.toggleSaveModal()})),w()(d()(a),"handleSaveJSON",(function(){a.saveJSON(),a.toggleSaveModal()})),w()(d()(a),"hideVarModal",(function(){a.setState({showVarModal:!1})})),w()(d()(a),"hideInfoModal",(function(){a.setState({showInfo:!1})})),w()(d()(a),"handleTableProps",(function(){return{onScroll:function(t){for(var e=t.target.scrollLeft>0?t.target.scrollLeft:0,n=0;n<a.frozenElems.length;n++)a.frozenElems[n].style.left="".concat(e,"px")}}})),w()(d()(a),"handleTrProps",(function(t,e,n,o){var r;return(r=a.props.getTrProps?a.props.getTrProps(t,e,n,o):{}).style||(r.style={}),r.style.width="max-content !important",r})),re("Constructor is invoked..."),a.id=t.id||ie(t);var i=t.dataInfo||{};return a.dragged=null,a.reorder=[],a.state={showInfo:!!i.showOnStartup,dataInfo:{info:i.info||[],name:i.name||"",variables:i.variables||null,showOnStartup:i.showOnStartup||null},showSaveModal:!1},a}return c()(o,[{key:"componentDidMount",value:function(){if(re("Component has mounted..."),this.table){var t=Object(N.findDOMNode)(this.table).getElementsByClassName("rt-thead")[0],e=Object(N.findDOMNode)(this.table).getElementsByClassName("rt-thead")[1],n=Object(N.findDOMNode)(this.table).getElementsByClassName("rt-tbody")[0];n.addEventListener("scroll",(function(){t.scrollLeft=n.scrollLeft,e.scrollLeft=n.scrollLeft}))}}},{key:"componentDidUpdate",value:function(t,e){re("Component has updated...");var n={};if(!this.props.filters||this.props.filters===t.filters&&this.props.filters.length===t.filters.length||(re("Data table now has ".concat(this.props.filters.length," filters...")),n.filtered=this.props.filters),this.props.data!==t.data&&this.state.keys.length!==e.keys.length){var o=Object(N.findDOMNode)(this.table).getElementsByClassName("rt-thead")[0],a=Object(N.findDOMNode)(this.table).getElementsByClassName("rt-thead")[1],r=Object(N.findDOMNode)(this.table).getElementsByClassName("rt-tbody")[0];o.scrollLeft=o.scrollWidth,a.scrollLeft=a.scrollWidth,r.scrollLeft=r.scrollWidth}ot()(n)||(re("Trigger a state change after update..."),this.setState(n))}},{key:"render",value:function(){var t=this;re("Rendering component");var e=this.state,n=e.rows,o=e.dataInfo;if(!n)return O()(k.a,{variant:"danger"},void 0,this.props.t("no-data"));var a,r=null;this.state.showVarModal?r=O()(E.a,{dialogClassName:"modal-50w",show:this.state.showVarModal,onHide:this.hideVarModal},void 0,O()(E.a.Header,{closeButton:!0},void 0,O()(E.a.Title,{},void 0,this.props.t("variables"))),O()(E.a.Body,{},void 0,function(t,e){var n,o=[];for(var a in t)W()(t,a)&&o.push(O()("tr",{},a,n||(n=O()("td",{},void 0,a)),O()("td",{},void 0,t[a])));return O()("table",{className:"table-bordered table-condensed",style:{width:"100%"}},void 0,O()("thead",{},void 0,O()("tr",{},void 0,O()("th",{},void 0,e("name")),O()("th",{},void 0,e("description")))),O()("tbody",{},void 0,o))}(o.variables,this.props.t))):this.state.showInfo&&(re("Rendering dataset information modal..."),r=O()(E.a,{show:this.state.showInfo,dialogClassName:"modal-50w",onHide:this.hideInfoModal},void 0,O()(E.a.Header,{closeButton:!0},void 0,O()(E.a.Title,{},void 0,o.name," ",this.props.t("description"))),O()(E.a.Body,{dangerouslySetInnerHTML:{__html:ae.render(lt()(o.info)?o.info.join("\n"):o.info)}}))),a=this.props.editable.length>0?this.state.columns.map((function(e){return J()(t.props.editable,e.id)&&(e.Cell=t.renderEditable),e})):this.state.columns.slice(),this.reorder.forEach((function(t){a[t.a]=a.splice(t.b,1,a[t.a])[0]})),a=a.map((function(e,n){return"id"===e.Header?e:oe(oe({},e),{},{Header:O()("span",{className:"draggable-header",id:"header-".concat(e.id),draggable:"true",onDragStart:function(e){e.stopPropagation(),e.dataTransfer.setData("Text",n),t.dragged=n},onDrag:function(t){return t.stopPropagation},onDragEnd:function(e){e.stopPropagation(),setTimeout((function(){t.dragged=null}),100)},onDragOver:function(t){t.preventDefault(),t.dataTransfer.dropEffect="move"},onDrop:function(e){e.preventDefault();var o=n,a=t.dragged,r=t.state.columns.map((function(t){return t.id}));r.shift();var i=r[o];r[o]=r[a],r[a]=i,t.props.onColumnDrag(r),t.reorder.push({a:o,b:a}),t.forceUpdate()}},void 0,e.Header)})})),this.props.showIdColumn&&a.unshift({Header:"id",accessor:"id",className:"frozen",headerClassName:"frozen",filterable:!1,resizable:!1,width:50}),this.props.showRemove&&a.push({Header:this.props.t("remove"),accessor:"remove",Cell:this.renderCheckboxRemovable,filterable:!1}),a.push({Header:"",className:"table_last_col",filterable:!1,sortable:!1,resizable:!1,width:30});var i=O()(M.a,{placement:"bottom",tooltip:this.props.disableDownload?this.props.t("download-disabled"):this.props.t("download-data")},void 0,O()(B.a,{className:"save-button",variant:"light",onClick:this.toggleSaveModal,disabled:this.props.disableDownload},void 0,Xt||(Xt=O()("i",{className:"fas fa-download"}))));return O()(S.Fragment,{},void 0,O()("div",{className:"data-table-wrapper",id:this.id,style:this.props.style},void 0,O()("div",{className:"data-table-header-wrapper"},void 0,O()(M.a,{placement:"bottom",tooltip:this.props.t("open-description"),show:o.info.length>0},void 0,O()(B.a,{variant:"light",disabled:0===o.info.length,onClick:this.showInfo,className:"data-table-title-button",style:{cursor:o.info.length>0?"pointer":"inherit"}},void 0,O()("h4",{className:"data-table-title-button-h4"},void 0,o.name?o.name:this.props.t("data")))),i,O()(Dt,{id:this.id,session:this.context,onTutorialCompletion:this.props.onTutorialCompletion,t:this.props.t})),O()(T.a,{id:this.id,data:n,columns:a,showPagination:!0,sortable:!0,resizable:!0,filterable:this.props.filterable,filtered:this.state.filtered,sorted:this.state.sorted,showPageSizeOptions:!1,defaultPageSize:50,onFilteredChange:this.handleFilterChange,onSortedChange:this.handleSortedChange,style:this.props.style,getTableProps:this.handleTableProps,getTrProps:this.handleTrProps,previousText:this.props.t("previous"),nextText:this.props.t("next"),loadingText:this.props.t("loading"),noDataText:this.props.t("no-rows-found"),pageText:this.props.t("page"),ofText:this.props.t("of"),rowsText:this.props.t("rows")},void 0,(function(e,a,r){var i=e.sortedData.length;return C.a.createElement("div",{ref:function(e){e&&(t.table=e,t.frozenElems=Object(N.findDOMNode)(t.table).getElementsByClassName("frozen"))}},O()(R.a,{className:"data-table-header-toolbar"},void 0,o.variables?O()(M.a,{placement:"right",tooltip:t.props.t("variable-descriptions-tooltip")},void 0,O()(B.a,{onClick:t.showDescriptions,variant:"light",size:"xsmall",className:"variable-descriptions-button"},void 0,t.props.t("variable-descriptions"))):null,i!==n.length||t.state.sorted&&t.state.sorted.length>0?O()(M.a,{placement:"left",tooltip:t.props.t("reset-display-tooltip")},void 0,O()(B.a,{onClick:t.reset,variant:"light",size:"xsmall",className:"reset-button"},void 0,t.props.t("reset-display"))):null),a(),O()("label",{className:"label-number-rows"},void 0,O()("i",{},void 0,t.props.t("number-rows"),": ",i," (",t.props.t("total"),": ",n.length,")")))}))),r,this.state.showSaveModal?O()(E.a,{show:this.state.showSaveModal,onHide:this.toggleSaveModal},void 0,O()(E.a.Header,{closeButton:!0},void 0,O()(E.a.Title,{},void 0,this.props.t("download-data"))),O()(E.a.Body,{},void 0,this.props.t("download-data-body")),O()(E.a.Footer,{},void 0,O()(B.a,{onClick:this.handleSaveCSV},void 0,this.props.t("save-csv")),O()(B.a,{onClick:this.handleSaveJSON},void 0,this.props.t("save-json")))):null)}}],[{key:"getDerivedStateFromProps",value:function(t,e){re("Generating derived state...");var n=null;if(t.data!==e.data){var o,a;re("Data is new...");var r=lt()(t.data);if(r||rt()(t.data)){if(r?(o=t.data.slice(),a=pt()(o[0])):(o=function(t){if(ot()(t))return[];for(var e=pt()(t),n=t[e[0]].length,o=new Array(n),a=0;a<n;a++){o[a]={};for(var r=0;r<e.length;r++){var i=e[r];o[a][i]=t[i][a]}}return o}(t.data),a=pt()(t.data)),re("Created a `rows` array of length: "+o.length),J()(a,"id"))for(var i=0;i<o.length;i++)t.showRemove&&!o[i].remove&&(o[i].remove=!1);else{for(var l=0;l<o.length;l++)t.showRemove&&!o[l].remove&&(o[l].remove=!1),o[l].id=l+1;a.push("id")}(n={}).rows=o,n.keys=a,n.filtered=t.filters,n.showTooltip=!1,n.data=t.data,n.columns=function(t,e){re("Create columns...");var n=t.t;return e.keys.filter((function(t){return"id"!==t})).map((function(o,a){var r,i=o,l=t.dataInfo&&t.dataInfo.variables&&t.dataInfo.variables[o],s={id:o,accessor:function(t){return ut()(t[o])?"NA":String(t[o])},minWidth:l?125:150};if(l?i=O()(At,{title:o,tooltip:t.dataInfo.variables[o]}):t.deletable&&!J()(t.undeletableVars,o)&&(i=O()("div",{style:{backgroundColor:"papayawhip"}},void 0,O()(M.a,{placement:"left",tooltip:n("rename-variable")},void 0,O()("span",{},void 0,O()("input",{type:"text",className:"header-text-input",style:{width:"".concat(o.length+1,"ch")},defaultValue:o,onBlur:function(e){var n=e.target.value;document.getElementById("header-".concat(o)).setAttribute("draggable",!0),n.length>0&&o!==n&&t.onColumnNameChange(o,n)},onMouseEnter:function(t){document.getElementById("header-".concat(o)).setAttribute("draggable",!1)},onChange:ve,onClick:function(t){t.stopPropagation()}}))),O()(M.a,{placement:"left",tooltip:n("remove-variable")},void 0,O()("button",{className:"fa fa-times delete-button",onClick:function(e){e.stopPropagation(),t.onColumnDelete(o)}})))),s.Header=i,lt()(t.data)){r=new Array(e.rows.length);for(var c=0;c<e.rows.length;c++)r[c]=t.data[c][o]}else r=t.data[o].slice();if(t.filterable){var u,d=!1;if(A()(r))d=!0,u=r;else{r=r.filter((function(t){return!ut()(t)&&""!==t&&"NA"!==t})),u=D()(r);var p=t.filters.filter((function(t){return t.id===o}))[0];d=!!(p&&Object(st.isPrimitive)(p.value.min)&&Object(st.isPrimitive)(p.value.max))||$()(r)&&u.length>2}d?(s.filterMethod=pe,s.sortMethod=ce,s.style={textAlign:"right"},s.Filter=function(t){var e=t.filter,o=t.onChange,a=X()(Object(ht.a)(u)),r=Y()(Object(ft.a)(u)),i={max:a,min:r};return O()(Zt,{defaultValue:e?e.value:i,onChange:o,maxValue:a,minValue:r,t:n})}):u.length<=50?(u=u.map((function(t){return String(t)})).sort(ue),H()(u[0])&&(s.style={textAlign:"right"}),s.filterMethod=fe,s.sortMethod=ue,s.Filter=function(t){var e=t.filter,o=t.onChange;return O()(Ot.a,{onChange:function(t){t&&t.length>0&&u.length>3?s.minWidth=300:s.minWidth=125,o(t)},style:{width:"100%"},value:e?e.value:null,searchable:!1,options:u,menuPlacement:"auto",multi:!0,placeholder:n("show-all"),components:{DropdownIndicator:he,MultiValueLabel:function(t){var e=function(){o(u.filter((function(e){return e!==t.children})))};return O()(M.a,{tooltip:n("select-others"),placement:"bottom"},void 0,O()("span",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,onMouseDown:function(t){t.preventDefault(),t.stopPropagation()},style:{cursor:"cursor"}},void 0,C.a.createElement(St.z.MultiValueLabel,t)))}},escapeClearsValue:!0,closeMenuOnSelect:u.length<=2,menuPortalTarget:document.body,styles:{menuPortal:function(t){return oe(oe({},t),{},{zIndex:9999})}}})}):(s.filterMethod=de,s.sortMethod=ue)}return s}))}(t,n)}}return t.dataInfo&&e.dataInfo&&t.dataInfo.name!==e.dataInfo.name&&(re("Data information has changed..."),n||(n={}),n.dataInfo={info:t.dataInfo.info||[],name:t.dataInfo.name||"",variables:t.dataInfo.variables||null,showOnStartup:t.dataInfo.showOnStartup||null}),n}}]),o}(S.Component);me.defaultProps={dataInfo:{info:[],name:"",variables:null,showOnStartup:!1},deletable:!1,undeletableVars:[],filterable:!0,editable:[],getTrProps:void 0,onColumnDrag:function(){},onColumnDelete:function(){},onColumnNameChange:function(){},onClickRemove:function(){},onEdit:function(){},onFilteredChange:function(){},onTutorialCompletion:function(){},filters:[],showRemove:!1,showIdColumn:!0,disableDownload:!1,className:"",style:{}},me.contextType=bt.a;e.default=Object(I.a)("DataTable")(Object(te.a)(me))},4715:function(t){t.exports=JSON.parse('[{"target":".data-table-title-button","content":"On top of the data table you find the name of the data set. Clicking on it will open a modal window with a detailed description.","placement":"bottom","placementBeacon":"bottom"},{"target":".ReactTable","content":"Tabular display of the data set, with rows corresponding to individual records and columns to the different variables.","placement":"bottom","placementBeacon":"bottom"},{"target":".-header","content":"Variable names. Hovering over the names with your mouse opens a tooltip with the description of the respective variable. Clicking on any column orders the rows of the data table by the values of the chosen column. You can also select multiple columns by holding down the \\"Shift\\" key to sort by multiple columns","placement":"bottom","placementBeacon":"bottom"},{"target":".-filter","content":"Filter out rows by adjusting the filters for any column.","placement":"top","placementBeacon":"top"},{"target":".label-number-rows","content":"The number of currently displayed rows, i.e. the rows matching the specified filters, and in parentheses the total number of rows in the table.","placement":"top","placementBeacon":"top"},{"target":".reset-button","content":"Clicking on the reset button will clear all currently active filters and return the ordering of the rows to its default.","placement":"top","placementBeacon":"top"},{"target":".variable-descriptions-button","content":"The descriptions for each variable can also be accessed by clicking on this button.","placement":"top","placementBeacon":"top"}]')}}]);