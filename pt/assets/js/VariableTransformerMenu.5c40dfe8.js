/*! For license information please see VariableTransformerMenu.5c40dfe8.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1165],{1380:function(e,t,a){"use strict";var n=a(423),r=a(575),o=a(605),i=a(442),s=a(475),l=a(426),c=a(469),d=a(574),u=a(679).factory,p=a(420),v=a(606),f=a(2714),h=a(2715);e.exports=function(){var e,t,a,g,m,b;if(0===arguments.length)t=u();else if(1===arguments.length){if(!i(e=arguments[0]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(l(e,"prng")){if(!s(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=u(e)}else{if(g=f(m=arguments[0],b=arguments[1]))throw g;if(arguments.length>2){if(!i(e=arguments[2]))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(l(e,"prng")){if(!s(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=u(e)}else t=u()}return n(a=void 0===m?P:O,"NAME","uniform"),e&&e.prng?(n(a,"seed",null),n(a,"seedLength",null),o(a,"state",c(null),d),n(a,"stateLength",null),n(a,"byteLength",null),n(a,"toJSON",c(null)),n(a,"PRNG",t)):(r(a,"seed",y),r(a,"seedLength",w),o(a,"state",x,k),r(a,"stateLength",N),r(a,"byteLength",C),n(a,"toJSON",V),n(a,"PRNG",t),t=t.normalized),a;function y(){return t.seed}function w(){return t.seedLength}function N(){return t.stateLength}function C(){return t.byteLength}function x(){return t.state}function k(e){t.state=e}function V(){var e={type:"PRNG"};return e.name=a.NAME,e.state=v(t.state),e.params=void 0===m?[]:[m,b],e}function O(){return h(t,m,b)}function P(e,a){return p(e)||p(a)||e>=a?NaN:h(t,e,a)}}},2708:function(e,t,a){"use strict";var n=a(2709);e.exports=n},2709:function(e,t,a){"use strict";var n=a(432).isPrimitive;e.exports=function(e){var t,a,r;if(!n(e))return!1;if(0===(t=e.length))return!1;for(r=0;r<t;r++)if((a=e.charCodeAt(r))<48||a>57)return!1;return!0}},2712:function(e,t,a){"use strict";var n=a(423),r=a(2713);n(r,"factory",a(1380)),e.exports=r},2713:function(e,t,a){"use strict";var n=a(1380)();e.exports=n},2714:function(e,t,a){"use strict";var n=a(430).isPrimitive,r=a(455);e.exports=function(e,t){return!n(e)||r(e)?new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+e+"`."):!n(t)||r(t)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+t+"`."):e>=t?new RangeError("invalid argument. Minimum support `a` must be less than maximum support `b`. Value: `["+e+","+t+"]`."):null}},2715:function(e,t,a){"use strict";e.exports=function(e,t,a){var n=e();return a*n+(1-n)*t}},2764:function(e,t,a){"use strict";t.a=function(e){e.stopPropagation()}},2791:function(e,t,a){"use strict";var n=a(405),r=a(408),o=a(409),i=a.n(o),s=a(0),l=a.n(s),c=a(411),d=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,s=e.striped,d=e.bordered,u=e.borderless,p=e.hover,v=e.size,f=e.variant,h=e.responsive,g=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),m=Object(c.a)(a,"table"),b=i()(o,m,f&&m+"-"+f,v&&m+"-"+v,s&&m+"-striped",d&&m+"-bordered",u&&m+"-borderless",p&&m+"-hover"),y=l.a.createElement("table",Object(n.a)({},g,{className:b,ref:t}));if(h){var w=m+"-responsive";return"string"==typeof h&&(w=w+"-"+h),l.a.createElement("div",{className:w},y)}return y}));t.a=d},4083:function(e,t,a){"use strict";var n=a(485),r=a(536),o=a(1066),i="startsWith",s="".startsWith;n(n.P+n.F*a(1067)(i),"String",{startsWith:function(e){var t=o(this,e,i),a=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return s?s.call(t,n,a):t.slice(a,a+n.length)===n}})},6398:function(e,t,a){"use strict";a.r(t);var n=a(407),r=a.n(n),o=a(456),i=a.n(o),s=a(0),l=a.n(s),c=(a(404),a(424)),d=(a(438),a(436),a(441),a(440),a(416),a(437),a(412)),u=a.n(d),p=a(450),v=a.n(p),f=a(649),h=a(702),g=a(593),m=a(1134),b=a(454),y=a(465),w=a(476),N=a(493),C=a(2712),x=a.n(C),k=a(481),V=a.n(k),O=a(473),P=a.n(O),S=a(517),F=a.n(S),j=a(430),G=a(490),H=a(508),q=a(763),L=a(733),A=a(506),R=a(534),T=a(494),E=a(455),D=a.n(E),z=a(495),M=a(589),K=a(638),B=a(623),I=a(462),W=a(1111),J=a(2764),Y=a(4187),$=a(4184);a(396);function X(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?X(Object(a),!0).forEach((function(t){u()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):X(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var U=v()("isle:data-explorer:variable-transformer"),Z=/shapes\[(\d)\]\.x0/,_={group:null,displayDensity:!0,densityType:"Data-driven",chooseBins:!1,nBins:null};function ee(e,t){return e-t}var te=function(e){for(var t=[],a=0;a<e.length;a++)t.push({type:"line",x0:e[a],y0:-100,x1:e[a],y1:100,line:{color:"red",width:3}});return t},ae=function(e,t){var a=new Array(t.length);t[0]?a[0]=t[0]:a[0]="(-\u221e,".concat(e[0],")");for(var n=1;n<t.length;n++)t[n]?a[n]=t[n]:a[n]="[".concat(e[n-1],",").concat(e[n],")");var r=t.length-1;return t[r]?a[r]=t[r]:a[r]="[".concat(e[e.length-1],",\u221e)"),a},ne=r()(T.a,{raw:"x < "}),re=r()(N.a,{md:1}),oe=r()(T.a,{raw:"\\le x <"}),ie=r()(T.a,{raw:"x \\ge"}),se=function(e){var t,a,n=Object(s.useState)(""),o=i()(n,2),l=o[0],d=o[1],u=Object(s.useState)(0),p=i()(u,2),v=p[0],C=p[1],k=Object(s.useState)({variable:null,configHist:null,breakpoints:null,categories:null,customNames:null}),O=i()(k,2),S=O[0],T=O[1],E=l.length<2,X=function(){var t=S.variable,a=S.categories,n=S.breakpoints,r=e.data[t],o=Object(Y.a)(r,a,n);e.logAction(I.d,{name:l,variable:t,breaks:n,categories:a});var i=Object(z.a)(l,a);e.onGenerate(i,o),e.onHide()},se=function(e){13!==e.charCode||E||X()},le=function(e){d(e.target.value)},ce=function(e){return function(t){U("Change break point...");var a=S.breakpoints.slice();a[e]=P()(t,-v),a.sort(ee);var n=F()(S.configHist);n.layout.shapes=te(a),T(Q(Q({},S),{},{configHist:n,breakpoints:a,categories:ae(a,S.customNames)}))}},de=function(e){return function(t){var a=S.categories.slice();a[e]=t;var n=S.customNames.slice();n[e]=t;var r=Q(Q({},S),{},{categories:a,customNames:n});T(r)}},ue=function(e){return function(){var t=S.breakpoints,a=S.categories,n=S.customNames;t.splice(e,1),a.splice(e,1),n.splice(e,1);var r=Q({},S.configHist);r.layout.shapes=te(t),T(Q(Q({},S),{},{configHist:r,categories:a,customNames:n,breakpoints:t}))}},pe=function(e){var t=V()(e),a=Z.exec(t[0]);if(a){var n=a[1],r=S.breakpoints.slice();r[n]=P()(e[t[0]],-v),r.sort(ee);var o=F()(S.configHist);o.layout.shapes=te(r),T(Q(Q({},S),{},{configHist:o,breakpoints:r,categories:ae(r,S.customNames)}))}},ve=function(t){U("Change variable to bin...");var a=Q({data:e.data,variable:t},_),n=Object(W.b)(a);n.layout.yaxis={range:[Object(K.a)(n.data[1].y),Object(B.a)(n.data[1].y)],fixedrange:!0},n.layout.xaxis={fixedrange:!0};var r=e.data[t];r=r.filter((function(e){return Object(j.isPrimitive)(e)&&!D()(e)}));var o=[P()(Object(M.a)(r),-v)];n.layout.shapes=te(o);var i=[!1,!1];T({variable:t,configHist:n,breakpoints:o,customNames:i,categories:ae(o,i)})},fe=function(){var t=S.breakpoints.slice(),a=e.data[S.variable];a=a.filter((function(e){return Object(j.isPrimitive)(e)&&!D()(e)}));var n=x()(.8,1.2)*Object(M.a)(a);t.push(P()(n,-v)),t.sort(ee);var r=F()(S.configHist);r.layout.shapes=te(t);var o=S.customNames;o.push(!1);var i=Q(Q({},S),{},{breakpoints:t,configHist:r,categories:ae(t,o)});T(i)};return r()(L.a,{cancel:".card-body",onDragStart:J.a,style:{zIndex:1006}},void 0,r()(R.a,{onHide:e.onHide,show:e.show,header:e.t("bin-transformer-header"),footer:r()(c.a,{onClick:X,disabled:E},void 0,e.t("create-new-variable")),bodyStyle:{maxHeight:"calc(100vh - 200px)",overflowY:"auto",position:"relative"},role:"button",tabIndex:0},void 0,(t=S.configHist,a=r()(H.a,{legend:e.t("variable-to-bin"),defaultValue:S.variable,options:e.quantitative,onChange:ve,style:{maxWidth:400}}),t?r()(s.Fragment,{},void 0,a,r()(c.a,{className:"insert-line-button",onClick:fe},void 0,e.t("insert-break-line")),r()("p",{},void 0,e.t("drag-red-bars"),"(",r()(G.b,{legend:e.t("digits-after-comma-snap"),min:0,max:9,inline:!0,defaultValue:v,onChange:C}),")"),r()("div",{style:{height:250}},void 0,r()(A.a,{data:t.data,layout:t.layout,editable:!0,fit:!0,removeButtons:!0,legendButtons:!1,onRelayout:pe})),r()("div",{},void 0,r()(y.a,{className:"mb-2"},void 0,r()(y.a.Header,{},void 0,e.t("choose-category-labels"),":"),r()(y.a.Body,{},void 0,function(){var t=[],a=S.breakpoints,n=1===a.length;if(t.push(r()(w.a,{},"div-0",r()(N.a,{md:7},void 0,ne,r()(G.b,{inline:!0,onBlur:ce(0),defaultValue:a[0],step:"any"})),r()(N.a,{md:4},void 0,r()(q.a,{legend:"".concat(e.t("label")," 1"),defaultValue:S.categories[0],onChange:de(0),style:{width:200}},0)),re)),a.length>1)for(var o=0;o<a.length-1;o++){var i=de(o+1);t.push(r()(w.a,{},"div-".concat(o+1),r()(N.a,{md:7},void 0,r()(G.b,{inline:!0,onBlur:ce(o),defaultValue:a[o],step:"any"}),oe,r()(G.b,{inline:!0,onBlur:ce(o+1),defaultValue:a[o+1],step:"any"})),r()(N.a,{md:4},void 0,r()(q.a,{legend:"".concat(e.t("label")," ").concat(o+2),defaultValue:S.categories[o+1],onChange:i,style:{width:200}},1+o)),r()(N.a,{md:1},void 0,r()($.a,{onClick:ue(o),style:{marginTop:"5px"},disabled:n,tooltipPlacement:"right"}))))}var s=a.length;return t.push(r()(w.a,{},"div-".concat(s),r()(N.a,{md:7},void 0,ie,r()(G.b,{inline:!0,onChange:ce(s-1),defaultValue:a[s-1],step:"any"})),r()(N.a,{md:4},void 0,r()(q.a,{legend:"Label ".concat(s+1),defaultValue:S.categories[s],onChange:de(s),style:{width:200}},s)),r()(N.a,{md:1},void 0,r()($.a,{onClick:ue(s-1),style:{marginTop:"5px"},disabled:n})))),t}()))),r()(g.a,{style:{width:"fit-content"}},void 0,r()(h.a,{},void 0,e.t("name-new-variable"),":"),r()(f.a,{type:"text",placeholder:e.t("select-name"),onChange:le,onKeyPress:se}),r()(m.a,{},void 0,e.t("new-variable-appended")))):r()(s.Fragment,{},void 0,a,r()(b.a,{variant:"info"},void 0,e.t("select-variable-bin"))))))};se.defaultProps={logAction:function(){},onGenerate:function(){}};var le=se,ce=(a(427),a(421),a(483),a(414)),de=a.n(ce),ue=a(415),pe=a.n(ue),ve=a(425),fe=a.n(ve),he=a(418),ge=a.n(he),me=a(419),be=a.n(me),ye=a(417),we=a.n(ye),Ne=(a(4083),a(4173)),Ce=a(2791),xe=a(558),ke=a(752),Ve=a(1110),Oe=a(1135),Pe=a(794),Se=a(484),Fe=a(666),je=a.n(Fe),Ge=a(470),He=a.n(Ge),qe=a(515),Le=a.n(qe),Ae=a(4185),Re=a(4186);a(397);function Te(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=we()(e);if(t){var r=we()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return be()(this,a)}}var Ee=je()(0,10,1),De=/(?:^|\n)([^\n]*)$/,ze=/^[0-9]/,Me=l.a.forwardRef((function(e,t){var a=e.children,n=e.style,o=e.className,c=e["aria-labelledby"],d=Object(s.useState)(""),u=i()(d,2),p=u[0],v=u[1];return l.a.createElement("div",{ref:t,style:n,className:o,"aria-labelledby":c},r()(f.a,{className:"mx-3 my-2 w-auto",placeholder:"Type to filter...",onChange:function(e){return v(e.target.value)},value:p}),r()("ul",{className:"list-unstyled"},void 0,l.a.Children.toArray(a).filter((function(e){return!p||e.props.children.toLowerCase().startsWith(p)}))))})),Ke=r()("code",{},void 0,"9/5"),Be=r()("code",{},void 0,"32"),Ie=r()("hr",{}),We=function(e){ge()(a,e);var t=Te(a);function a(e){var n;return de()(this,a),n=t.call(this,e),u()(fe()(n),"handleGenerate",(function(){var e,t=n.state,a=t.code,r=t.name;He()(a,"return ")||(a=Le()(a,De,"\nreturn $1"));try{e=Object(Ae.a)(a,n.props.data),n.props.logAction(I.ab,{code:a,name:r}),n.props.onGenerate(r,e)}catch(o){return n.props.session.addNotification({title:"Errored",message:"Encountered the following error: "+o.message,level:"error",position:"tr"})}n.props.onHide()})),u()(fe()(n),"handleNameChange",(function(e){n.setState({name:e.target.value})})),u()(fe()(n),"handleCodeChange",(function(e){n.setState({code:e})})),u()(fe()(n),"handleKeyPress",(function(e){13===e.charCode&&n.state.name.length>=2&&n.handleGenerate()})),u()(fe()(n),"insertVarFactory",(function(e){return function(){var t=n.state.code.substring(0,n.state.selection),a="datum";t+=a+=!He()(e," ")&&!He()(e,".")&&!ze.test(e)?".".concat(e):"['".concat(e,"']"),t+=n.state.code.substring(n.state.selection),n.setState({code:t,selection:n.state.selection+a.length})}})),u()(fe()(n),"insertLiteralFactory",(function(e){return function(){var t=n.state.code.substring(0,n.state.selection),a=e;t+=a,t+=n.state.code.substring(n.state.selection),n.setState({code:t,selection:n.state.selection+a.length})}})),u()(fe()(n),"insertFuncFactory",(function(e){return function(){var t=n.state.code.substring(0,n.state.selection),a=" "+e+"()";t+=a,t+=n.state.code.substring(n.state.selection),n.setState({code:t,selection:n.state.selection+a.length-1})}})),n.state={code:e.defaultCode,selection:null,name:"",showGuide:!1},n}return pe()(a,[{key:"render",value:function(){var e=this,t=this.props.t,a=this.props.quantitative.map((function(t,a){return r()(Ve.a.Item,{onClick:e.insertVarFactory(t),eventKey:a},a,t)}));return r()(L.a,{cancel:".card-body",onDragStart:function(e){e.stopPropagation()},style:{zIndex:1006}},void 0,r()(R.a,{show:this.props.show,onHide:this.props.onHide,header:this.props.t("formula-transformer-header"),footer:r()(c.a,{onClick:this.handleGenerate,disabled:this.state.name.length<2},void 0,this.props.t("create-new-variable")),role:"button",tabIndex:0,bodyStyle:{maxHeight:"calc(100vh - 200px)",overflowY:"auto",position:"relative"}},void 0,r()("div",{className:"formula-transformer-body"},void 0,r()(Oe.a,{headerClassName:"title",header:this.state.showGuide?t("hide-example-guide"):t("show-example-guide"),visible:this.state.showGuide,onClick:function(){return e.setState({showGuide:!e.state.showGuide})}},void 0,r()("p",{},void 0,t("formula-transformer-example-intro")),r()(Ce.a,{condensed:!0},void 0,r()("thead",{},void 0,r()("tr",{},void 0,r()("th",{},void 0,t("type")),r()("th",{},void 0,t("example")),r()("th",{},void 0,t("description")))),r()("tbody",{},void 0,r()("tr",{},void 0,r()("td",{},void 0,t("interaction"),":"),r()("td",{},void 0,r()("code",{},void 0,"datum.",this.props.quantitative[0]," * datum.",this.props.quantitative[1])),r()("td",{},void 0,r()(Ne.a,{i18nKey:"example-description-multiply",ns:"DataExplorer"},void 0,"Multiply values of variables ",r()("code",{},void 0,{first:this.props.quantitative[0]})," and ",r()("code",{},void 0,{second:this.props.quantitative[1]})))),r()("tr",{},void 0,r()("td",{},void 0,t("transformation"),":"),r()("td",{},void 0,r()("code",{},void 0,"exp( datum.",this.props.quantitative[0]," )")),r()("td",{},void 0,r()(Ne.a,{i18nKey:"example-description-exponential",ns:"DataExplorer"},void 0,"Natural exponential function of variable ",r()("code",{},void 0,{variable:this.props.quantitative[0]})))),r()("tr",{},void 0,r()("td",{},void 0,t("function"),":"),r()("td",{},void 0,r()("code",{},void 0,"9/5 * ",this.props.quantitative[0]," + 32")),r()("td",{},void 0,r()(Ne.a,{i18nKey:"example-description-calculation",ns:"DataExplorer"},void 0,"Multiply values of ",r()("code",{},void 0,{variable:this.props.quantitative[0]})," by ",Ke," and add ",Be)))))),Ie,r()("div",{className:"mb-2"},void 0,r()(ke.a,{style:{marginBottom:5}},void 0,r()(Ve.a,{className:"mr-2"},void 0,r()(Ve.a.Toggle,{variant:"light",id:"dropdown-custom-components"},void 0,t("quantitative")),r()(Ve.a.Menu,{variant:"light",as:Me,id:"bg-nested-dropdown"},void 0,a)),r()(Ve.a,{className:"mr-2"},void 0,r()(Ve.a.Toggle,{variant:"light",id:"dropdown-custom-components"},void 0,t("categorical")),r()(Ve.a.Menu,{variant:"light",as:Me,id:"bg-nested-dropdown"},void 0,this.props.categorical.map((function(t,a){return r()(Ve.a.Item,{onClick:e.insertVarFactory(t),eventKey:a},a,t)})))))),r()(y.a,{className:"mb-2"},void 0,r()(y.a.Body,{},void 0,r()(ke.a,{style:{marginBottom:5}},void 0,r()(xe.a,{size:"sm",className:"mr-2"},void 0,r()(c.a,{variant:"light",onClick:this.insertLiteralFactory(" < ")},void 0,"<"),r()(c.a,{variant:"light",onClick:this.insertLiteralFactory(" > ")},void 0,">"),r()(c.a,{variant:"light",onClick:this.insertLiteralFactory(" <= ")},void 0,"<="),r()(c.a,{variant:"light",onClick:this.insertLiteralFactory(" >= ")},void 0,">=")),r()(xe.a,{size:"sm",className:"mr-2"},void 0,r()(Se.a,{placement:"top",tooltip:t("open-parenthesis")},void 0,r()(c.a,{variant:"light",onClick:this.insertLiteralFactory(" ( ")},void 0,"(")),r()(Se.a,{placement:"top",tooltip:t("closing-parenthesis")},void 0,r()(c.a,{variant:"light",onClick:this.insertLiteralFactory(" ) ")},void 0,")"))),r()(xe.a,{size:"sm",className:"mr-2"},void 0,r()(Se.a,{placement:"top",tooltip:t("addition")},void 0,r()(c.a,{variant:"light",onClick:this.insertLiteralFactory(" + ")},void 0,"+")),r()(Se.a,{placement:"top",tooltip:t("subtraction")},void 0,r()(c.a,{variant:"light",onClick:this.insertLiteralFactory(" - ")},void 0,"-")),r()(Se.a,{placement:"top",tooltip:t("multiplication")},void 0,r()(c.a,{variant:"light",onClick:this.insertLiteralFactory(" * ")},void 0,"*")),r()(Se.a,{placement:"top",tooltip:t("division")},void 0,r()(c.a,{variant:"light",onClick:this.insertLiteralFactory(" / ")},void 0,"/"))),r()(xe.a,{size:"sm",className:"mr-2"},void 0,r()(c.a,{variant:"light",onClick:this.insertLiteralFactory(" && ")},void 0,t("and")),r()(c.a,{variant:"light",onClick:this.insertLiteralFactory(" || ")},void 0,t("or")),r()(c.a,{variant:"light",onClick:this.insertLiteralFactory(" !")},void 0,t("not"))),r()(xe.a,{size:"sm",className:"me-2"},void 0,Re.map((function(t,a){return r()(c.a,{variant:"light",onClick:e.insertFuncFactory(t),eventKey:a},a,t)})))),r()(ke.a,{},void 0,r()(xe.a,{size:"sm",className:"mr-2"},void 0,Ee.map((function(t,a){return r()(c.a,{variant:"light",onClick:e.insertLiteralFactory("".concat(t))},a,t)})),r()(c.a,{variant:"light",onClick:this.insertLiteralFactory(".")},void 0,"."))))),r()(y.a,{className:"mb-2"},void 0,r()(y.a.Body,{},void 0,l.a.createElement(Pe.a,{ref:function(t){e.textarea=t},legend:"".concat(t("expression"),":"),placeholder:t("enter-formula"),value:this.state.code,onChange:this.handleCodeChange,onBlur:function(t){var a=t.target.selectionStart;e.setState({selection:a})},rows:3}))),r()(g.a,{style:{margin:8}},void 0,r()(h.a,{},void 0,t("name-new-variable"),":"),r()(f.a,{type:"text",placeholder:t("select-name"),onChange:this.handleNameChange,onKeyPress:this.handleKeyPress}),r()(m.a,{},void 0,t("new-variable-appended"))))))}}]),a}(s.Component);We.defaultProps={logAction:function(){},onGenerate:function(){},defaultCode:"",session:{}};var Je=We,Ye=a(694),$e=a(678),Xe=a.n($e),Qe=a(634),Ue=a.n(Qe),Ze=a(2708),_e=a.n(Ze),et=a(552),tt=a(4188),at=a(594);a(398);function nt(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=we()(e);if(t){var r=we()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return be()(this,a)}}var rt=v()("isle:data-explorer:variable-transformer");function ot(e){return e?Le()(e,".","[dot]"):e}function it(e){for(var t=V()(e),a=!0,n=0;n<t.length;n++)_e()(e[t[n]])||(a=!1);return a}var st=r()("th",{}),lt=function(e){ge()(a,e);var t=nt(a);function a(e){var n;de()(this,a),n=t.call(this,e),u()(fe()(n),"handleFirstVariableChange",(function(e){var t,a={};if(n.state.secondVar){var r=e,o=n.state.secondVar,i=n.props.data[r];t=Xe()(i,Ue.a);for(var s=Object(at.a)(t,r),l=Object(at.a)(n.state.secondFreqs,o),c=0;c<s.length;c++)for(var d=0;d<l.length;d++){var u=s[c]+"-"+l[d];a[ot(u)]=u}}else{var p=n.props.data[e];t=Xe()(p,Ue.a);for(var v=Object(at.a)(t,e),f=0;f<v.length;f++)a[ot(v[f])]=v[f]}var h=it(a);n.setState({firstVar:e,firstFreqs:t,nameMappings:a,onlyNumbers:h})})),u()(fe()(n),"handleSecondVariableChange",(function(e){if(!e){for(var t=n.state.firstVar,a=Object(at.a)(n.state.firstFreqs,t),r={},o=0;o<a.length;o++)r[ot(a[o])]=a[o];return n.setState({secondVar:e,nameMappings:r})}for(var i={},s=n.state.firstVar,l=n.props.data[e],c=Xe()(l,Ue.a),d=Object(at.a)(n.state.firstFreqs,s),u=Object(at.a)(c,e),p=0;p<d.length;p++)for(var v=0;v<u.length;v++){var f=d[p]+"-"+u[v];i[ot(f)]=f}var h=it(i);n.setState({secondVar:e,secondFreqs:c,nameMappings:i,onlyNumbers:h})})),u()(fe()(n),"handleKeyPress",(function(e){13===e.charCode&&n.state.generatedName.length>=2&&n.makeNewVar()})),u()(fe()(n),"changeFreqFactory",(function(e){return function(t){var a=F()(n.state.nameMappings);a[ot(e)]=t.target.value;var r=it(a);n.setState({nameMappings:a,onlyNumbers:r})}})),u()(fe()(n),"changeContigencyFactory",(function(e,t){return function(a){var r=F()(n.state.nameMappings);r[ot(t)+"-"+ot(e)]=a.target.value,n.setState({nameMappings:r})}})),u()(fe()(n),"handleGeneratedNameChange",(function(e){n.setState({generatedName:e.target.value})})),u()(fe()(n),"makeNewVar",(function(){rt("Generating new categorical variable...");var e=n.state,t=e.firstVar,a=e.secondVar,r=e.nameMappings,o=e.castNumeric,i=Object(tt.a)(t,a,r,n.props.data,o);n.props.onGenerate(n.state.generatedName,i),n.props.logAction(I.f,{name:n.state.generatedName,firstVar:t,secondVar:a,nameMappings:r,castNumeric:o}),n.props.onHide()})),u()(fe()(n),"renderFrequencyTable",(function(){var e=n.state.firstVar,t=n.props.data[e],a=Xe()(t,Ue.a),o=Object(at.a)(a,e);return r()(Ye.a,{bordered:!0,style:{margin:8}},void 0,r()("thead",{},void 0,r()("tr",{},void 0,r()("th",{},void 0,n.props.t("old"),":"),o.map((function(t,a){return r()("th",{},"".concat(e,"-").concat(a,"-old"),t)})))),r()("tbody",{},void 0,r()("tr",{},void 0,r()("th",{},void 0,n.props.t("new"),":"),o.map((function(t,a){return r()("th",{},"".concat(e,"-").concat(a,"-new"),r()("input",{className:"transformer-table-input",type:"text",defaultValue:t,onChange:n.changeFreqFactory(t)}))}))),r()("tr",{style:{borderTop:"1px solid black"}},void 0,r()("th",{},void 0,n.props.t("frequencies"),":"),o.map((function(t,a){var o=n.state.firstFreqs[t];return r()("td",{},"".concat(e,"-").concat(a,"-freq"),o)})))))})),u()(fe()(n),"renderContingencyTable",(function(){var e=n.state.secondVar,t=n.state.firstVar,a=n.props.data[e],o=n.props.data[t],i=Xe()(a,Ue.a),s=Xe()(o,Ue.a),l=Object(at.a)(i,e),c=Object(at.a)(s,t);return r()(Ye.a,{bordered:!0,style:{margin:8}},void 0,r()("tr",{},void 0,st,c.map((function(e,t){return r()("th",{},"".concat(e,"-").concat(t),e)}))),l.map((function(e,t){return r()("tr",{},"".concat(e,"-").concat(t),r()("th",{},void 0,e),c.map((function(t,a){return r()("td",{},"".concat(e,"-").concat(t,"-").concat(a),r()("input",{className:"transformer-table-input",type:"text",defaultValue:"".concat(t,"-").concat(e),onChange:n.changeContigencyFactory(e,t)}))})))})))}));for(var o=e.categorical[0],i=e.data[o],s=Xe()(i,Ue.a),l=Object(at.a)(s,o),c={},d=0;d<l.length;d++)c[ot(l[d])]=l[d];return n.state={generatedName:"",firstVar:o,firstFreqs:s,nameMappings:c,secondVar:null,secondFreqs:null,castNumeric:!1,onlyNumbers:!1},n}return pe()(a,[{key:"renderTable",value:function(){return this.state.firstVar&&this.state.secondVar?this.renderContingencyTable():this.state.firstVar||this.state.secondVar?this.renderFrequencyTable():null}},{key:"render",value:function(){var e=this,t=this.props.t;return r()(L.a,{cancel:".card-body",onDragStart:function(e){e.stopPropagation()},style:{zIndex:1006}},void 0,r()(R.a,{onHide:this.props.onHide,show:this.props.show,header:t("categorical-transformer-header"),footer:r()(c.a,{onClick:this.makeNewVar,disabled:this.state.generatedName.length<2},void 0,t("create-new-variable")),bodyStyle:{maxHeight:"calc(100vh - 200px)",overflowY:"auto",position:"relative"},role:"button",tabIndex:0},void 0,r()(w.a,{},void 0,r()(N.a,{md:4},void 0,r()(H.a,{legend:t("first-variable"),defaultValue:this.state.firstVar||"",options:this.props.categorical,onChange:this.handleFirstVariableChange})),r()(N.a,{md:4},void 0,r()(H.a,{clearable:!0,legend:t("optional-second-variable"),defaultValue:this.state.secondVar||"",options:this.props.categorical,onChange:this.handleSecondVariableChange}))),r()(w.a,{style:{overflowX:"auto",width:"100%"}},void 0,this.renderTable()),r()(w.a,{},void 0,r()(Se.a,{tooltip:t("treat-labels-as-numbers-tooltip")},void 0,r()(et.a,{legend:t("treat-labels-as-numbers"),defaultValue:!1,disabled:!this.state.onlyNumbers,onChange:function(){e.setState({castNumeric:!e.state.castNumeric})}}))),r()(w.a,{},void 0,r()(g.a,{style:{margin:8}},void 0,r()(h.a,{},void 0,t("name-new-variable"),":"),r()(f.a,{type:"text",placeholder:t("select-name"),onChange:this.handleGeneratedNameChange,onKeyPress:this.handleKeyPress}),r()(m.a,{},void 0,t("new-variable-appended"))))))}}]),a}(s.Component);lt.defaultProps={logAction:function(){}};var ct=lt,dt=(a(863),a(780)),ut=a.n(dt),pt=a(984),vt=a.n(pt);function ft(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=we()(e);if(t){var r=we()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return be()(this,a)}}var ht=v()("isle:data-explorer:group-transformer"),gt=function(e){ge()(a,e);var t=ft(a);function a(e){var n;return de()(this,a),n=t.call(this,e),u()(fe()(n),"handleGeneratedNameChange",(function(e){n.setState({generatedName:e.target.value})})),u()(fe()(n),"handleGroupNumberChange",(function(e){for(var t=new Array(e).fill(1/e),a=new Array(e),r=0;r<a.length;r++)a[r]="".concat(n.props.t("group")," ").concat(r+1);n.setState({groupProbs:t,labels:a,nGroups:e})})),u()(fe()(n),"handleKeyPress",(function(e){if(13===e.charCode){for(var t=0,a=0;a<n.state.groupProbs.length;a++)t+=n.state.groupProbs[a];n.state.generatedName.length>2&&vt()(t,1)<=15e-9&&n.makeNewVar()}})),u()(fe()(n),"makeNewVar",(function(){ht("Generating new categorical variable...");var e=V()(n.props.data),t=n.props.data[e[0]].length,a=ut()(n.state.labels,{size:t,probs:n.state.groupProbs,replace:!0});n.props.onGenerate(n.state.generatedName,a),n.props.logAction(I.l,{name:n.state.generatedName,labels:n.state.labels,groupProbs:n.state.groupProbs}),n.props.onHide()})),n.state={generatedName:"",nGroups:2,groupProbs:[.5,.5],labels:["Group 1","Group 2"]},n}return pe()(a,[{key:"renderTable",value:function(){for(var e=this,t=new Array(this.state.nGroups),a=function(a){t[a]=r()(w.a,{},a,r()(N.a,{},void 0,r()(q.a,{legend:"Label for Group ".concat(a+1),defaultValue:e.state.labels[a],onChange:function(t){var n=e.state.labels.slice();n[a]=t,e.setState({labels:n})}})),r()(N.a,{},void 0,r()(G.b,{legend:e.props.t("group-proportion"),onChange:function(t){var n=e.state.groupProbs.slice();n[a]=t,e.setState({groupProbs:n})},defaultValue:e.state.groupProbs[a],step:.01,min:0,max:1,numbersOnly:!1})))},n=0;n<t.length;n++)a(n);return r()(s.Fragment,{},void 0,t,r()("p",{},void 0,this.props.t("proportions-sum-one")))}},{key:"render",value:function(){for(var e=0,t=0;t<this.state.groupProbs.length;t++)e+=this.state.groupProbs[t];var a=this.state.generatedName.length>2&&vt()(e,1)<=15e-9;return r()(L.a,{cancel:".card-body",onDragStart:function(e){e.stopPropagation()},style:{zIndex:1006}},void 0,r()(R.a,{onHide:this.props.onHide,show:this.props.show,header:this.props.t("group-transformer-header"),footer:r()(c.a,{onClick:this.makeNewVar,disabled:!a},void 0,this.props.t("create-new-variable")),role:"button",tabIndex:0,bodyStyle:{maxHeight:"calc(100vh - 200px)",overflowY:"auto",position:"relative"}},void 0,r()(w.a,{},void 0,r()(N.a,{},void 0,r()(G.b,{legend:this.props.t("number-of-groups"),onChange:this.handleGroupNumberChange,defaultValue:this.state.nGroups,step:1,min:1,max:99}))),this.renderTable(),r()(w.a,{},void 0,r()(g.a,{style:{margin:8}},void 0,r()(h.a,{},void 0,this.props.t("name-new-variable"),":"),r()(f.a,{type:"text",placeholder:this.props.t("select-name"),onChange:this.handleGeneratedNameChange,onKeyPress:this.handleKeyPress}),r()(m.a,{},void 0,this.props.t("new-variable-appended"))))))}}]),a}(s.Component);gt.defaultProps={logAction:function(){}};var mt=gt,bt=function(e){var t,a=e.data,n=e.categorical,o=e.quantitative,l=e.t,d=e.session,u=e.defaultCode,p=e.logAction,v=e.onGenerate,f=Object(s.useState)(null),h=i()(f,2),g=h[0],m=h[1],b=function(){var t="formula"===g?null:"formula";m(t),e.onActive(t)},y=function(){var t="bin"===g?null:"bin";m(t),e.onActive(t)},w=function(){var t="categorical"===g?null:"categorical";m(t),e.onActive(t)},N=function(){var t="group"===g?null:"group";m(t),e.onActive(t)};if(a)switch(g){case"bin":t=r()(le,{show:!0,onHide:y,quantitative:o,logAction:p,onGenerate:v,data:a,t:l});break;case"categorical":t=r()(ct,{show:!0,onHide:w,categorical:n,logAction:p,onGenerate:v,data:a,t:l});break;case"formula":t=r()(Je,{show:!0,onHide:b,categorical:n,quantitative:o,data:a,defaultCode:u,logAction:p,onGenerate:v,session:d,t:l});break;case"group":t=r()(mt,{show:!0,onHide:N,logAction:p,onGenerate:v,data:a,t:l})}return r()(s.Fragment,{},void 0,r()("div",{className:"well",style:{padding:15,margin:15}},void 0,r()("div",{style:{padding:12}},void 0,r()(c.a,{onClick:b,variant:"primary",block:!0,style:{fontSize:"1.2em"}},void 0,l("interactions-functions"))),r()("div",{style:{padding:12}},void 0,r()(c.a,{onClick:y,disabled:!o||0===o.length,variant:"primary",block:!0,style:{fontSize:"1.2em"}},void 0,l("bin-quantitative"))),r()("div",{style:{padding:12}},void 0,r()(c.a,{onClick:w,disabled:!n||0===n.length,variant:"primary",block:!0,style:{fontSize:"1.2em"}},void 0,l("rename-or-combine"))),r()("div",{style:{padding:12}},void 0,r()(c.a,{onClick:N,variant:"primary",block:!0,style:{fontSize:"1.2em"}},void 0,l("create-groups")))),t)};bt.defaultProps={logAction:function(){},onActive:function(){},onGenerate:function(){},defaultCode:"",session:{}};t.default=bt},752:function(e,t,a){"use strict";var n=a(405),r=a(408),o=a(409),i=a.n(o),s=a(0),l=a.n(s),c=a(411),d=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,s=Object(r.a)(e,["bsPrefix","className"]),d=Object(c.a)(a,"btn-toolbar");return l.a.createElement("div",Object(n.a)({},s,{ref:t,className:i()(o,d)}))}));d.displayName="ButtonToolbar",d.defaultProps={role:"toolbar"},t.a=d}}]);