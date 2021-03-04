/*! For license information please see SummaryStatisticsMenu.3e86e6f5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1075],{2722:function(e,t,a){"use strict";var i=a(2723);e.exports=i},2723:function(e,t,a){"use strict";var i=a(475);e.exports=function(e){var t,a,r;if(!i(e))throw new TypeError("invalid argument. First argument must be a function. Value: `"+e+"`.");for(a=arguments.length-1,t=new Array(a),r=1;r<arguments.length;r++)t[r-1]=arguments[r];return n;function n(){var i,r,n;for(i=arguments.length,r=new Array(a+i),n=0;n<r.length;n++)r[n]=n>=i?t[n-i]:arguments[n];return e.apply(null,r)}}},486:function(e,t,a){"use strict";var i=a(407),r=a.n(i),n=(a(0),a(404),a(424)),o=a(513),s=a(511),l=a(507),u=a(546),c=r()(n.a,{size:"sm",variant:"outline-secondary",className:"question-button"},void 0,r()("div",{className:"fa fa-question"}));t.a=function(e){var t=r()(o.a,{id:"popover-positioned-right"},void 0,r()(s.a,{},void 0,e.title),r()(l.a,{},void 0,e.content));return r()(u.a,{trigger:["hover","focus"],placement:"left",rootClose:!0,overlay:t},void 0,c)}},6358:function(e,t,a){"use strict";a.r(t);a(427),a(421),a(438),a(436),a(437),a(639),a(695),a(441),a(440),a(416);var i=a(659),r=a.n(i),n=a(414),o=a.n(n),s=a(415),l=a.n(s),u=a(425),c=a.n(u),d=a(418),v=a.n(d),f=a(419),h=a.n(f),m=a(417),p=a.n(m),b=(a(621),a(412)),g=a.n(b),y=a(492),w=a.n(y),S=a(407),M=a.n(S),O=a(0),j=a.n(O),x=a(422),C=(a(404),a(903)),q=a(827),z=a(465),V=a(424),P=a(593),Q=a(702),k=a(546),D=a(513),R=a(507),F=a(508),A=a(1083),E=a(484),T=a(1586),I=a(470),N=a.n(I),W=a(481),K=a.n(W),H=a(446),J=a.n(H),X=a(2722),B=a.n(X),G=a(548),L=a.n(G),Y=a(552),Z=a(2814),U=a(486),$=a(430),_=a(455),ee=a.n(_),te=a(462),ae=a(594),ie=a(6359);function re(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,i=p()(e);if(t){var r=p()(this).constructor;a=Reflect.construct(i,arguments,r)}else a=i.apply(this,arguments);return h()(this,a)}}function ne(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}var oe=M()("span",{},void 0,"Compute various statistics of interest, i.e. summary measures of the ",M()("i",{},void 0,"quantitative")," variables in the data set."),se={numeric:!0},le=[.1,.2,.3,.4,.5,.6,.7,.8,.9].map((function(e){return{label:t=e,value:t};var t})),ue=M()("span",{className:"fa fa-question"}),ce=function(e){var t=M()(D.a,{id:"".concat(e.data.label,"-popover")},void 0,M()(R.a,{},void 0,ie[x.c.language][e.data.label]));return j.a.createElement(C.z.Option,w()({key:e.data.label},e),M()("span",{style:{opacity:e.isSelected?.5:1}},void 0,x.c.t("DataExplorer:"+e.data.label)),M()(k.a,{trigger:["hover","click"],placement:"right",rootClose:!0,overlay:t},void 0,M()(V.a,{size:"sm",variant:"outline-secondary",className:"question-button",style:{float:"right",fontSize:14},onClick:function(e){return e.stopPropagation()}},void 0,ue)))},de=function(e){return(e=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(a),!0).forEach((function(t){g()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ne(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e)).children=x.c.t("DataExplorer:"+e.children),j.a.createElement(C.z.GroupHeading,e)};var ve=function(e){v()(a,e);var t=re(a);function a(e){var i;o()(this,a),i=t.call(this,e),g()(c()(i),"createStatisticsOptions",(function(){for(var e=[],t=[],a=[],r=[],n=[],o=0;o<i.props.statistics.length;o++){var s=i.props.statistics[o];switch(s){case"Mean":case"Median":e.push({label:s,value:Object(T.a)(s)});break;case"First Quartile":case"Third Quartile":case"Quantile":case"Min":case"Max":t.push({label:s,value:Object(T.a)(s)});break;case"Five-Number Summary":t.push({label:s,value:null});break;case"Range":case"Interquartile Range":case"Standard Deviation":case"Variance":a.push({label:s,value:Object(T.a)(s)});break;case"Correlation":case"Correlation Matrix":r.push({label:s,value:Object(T.a)(s)});break;case"Skewness":case"Excess Kurtosis":n.push({label:s,value:Object(T.a)(s)})}}i.statistics=[{label:"central-tendency-measures",options:e},{label:"variation-measures",options:a},{label:"other-location-measures",options:t},{label:"relationship-measures",options:r},{label:"shape-measures",options:n}]})),g()(c()(i),"generateStatistics",(function(){var e=i.props,t=e.data,a=e.t,n=i.state,o=n.selectedStats,s=n.variables,l=n.secondVariable,u=n.group,c=n.omit;u=u?u.map((function(e){return e.value})):null;for(var d=[],v=[],f=0;f<o.length;f++){var h=o[f];if("Quantile"===h.label)for(var m=0;m<i.state.quantiles.length;m++){var p=i.state.quantiles[m].value;d.push(B()(h.value,p,5)),v.push("".concat(L()(100*p),"% ").concat(a("quantile")))}else d.push(h.value),v.push(h.label)}if("Correlation Matrix"===v[0]){var b=function(){var e,a=s.map((function(e){return t[e]}));if(u){var r;if(2===u.length){r=[];for(var n=function(e){var a=u.map((function(a){return t[a][e]})).join(":");r.push(a)},o=0;o<a[0].length;o++)n(o)}else r=t[u[0]];a=c?function(e,t){for(var a=[],i=e[0].length,r=0;r<i;r++){for(var n=!0,o=0;o<e.length;o++){var s=e[o][r];if(!Object($.isPrimitive)(s)||ee()(s)){n=!1;break}}n&&a.push(r)}for(var l={},u=0;u<e.length;u++)for(var c=0;c<a.length;c++){var d=t[a[c]];if(!l[d]){l[d]=new Array(e.length);for(var v=0;v<e.length;v++)l[d][v]=[]}var f=a[c];l[d][u].push(e[u][f])}return l}(a,r):function(e,t){for(var a={},i=e[0].length,r=0;r<e.length;r++)for(var n=0;n<i;n++){var o=t[n];if(!a[o]){a[o]=new Array(e.length);for(var s=0;s<e.length;s++)a[o][s]=[]}a[o][r].push(e[r][n])}return a}(a,r)}else c&&(a=function(e){for(var t=[],a=e[0].length,i=0;i<a;i++){for(var r=!0,n=0;n<e.length;n++){var o=e[n][i];if(!Object($.isPrimitive)(o)||ee()(o)){r=!1;break}}r&&t.push(i)}for(var s=new Array(e.length),l=0;l<e.length;l++){for(var u=new Array(t.length),c=0;c<t.length;c++){var d=t[c];u[c]=e[l][d]}s[l]=u}return s}(a));if(u)!function(){e={};for(var t=K()(a),i=function(i){e[t[i]]={value:d.map((function(e){return e.apply(null,a[t[i]])}))[0],size:a[t[i]][0].length}},r=0;r<t.length;r++)i(r)}();else{var l=d.map((function(e){return e.apply(null,a)}));e={value:l[0],size:a[0].length}}var f={variables:s,statistics:v,type:"Statistics",result:e,group:u};return i.props.logAction(te.R,{statistic:v,variables:s,group:u}),{v:i.props.onCreated(f)}}();if("object"===r()(b))return b.v}for(var g={},y=function(e){var r=void 0,n=void 0,o=void 0,f=void 0,h=s[e];if(u){if(c)if(o=[],f=[],r=[],h&&i.state.showSecondVarSelect)for(var m=t[h],p=t[l],b=function(e){if(Object($.isPrimitive)(m[e])&&!ee()(m[e])&&Object($.isPrimitive)(p[e])&&!ee()(p[e])){o.push(m[e]),f.push(p[e]);var a=u.map((function(a){return t[a][e]})).join(":");r.push(a)}},y=0;y<m.length;y++)b(y);else for(var w=t[h],S=function(e){if(Object($.isPrimitive)(w[e])&&!ee()(w[e])){o.push(w[e]);var a=u.map((function(a){return t[a][e]})).join(":");r.push(a)}},M=0;M<w.length;M++)S(M);else if(o=t[h],f=t[l],2===u.length){r=[];for(var O=function(e){var a=u.map((function(a){return t[a][e]})).join(":");r.push(a)},j=0;j<t[h].length;j++)O(j)}else r=t[u[0]];if("Correlation"===v[0]){var x=function(e,t,a,i,r){for(var n,o={},s={},l={},u=0;u<a.length;u++)J()(s[a[u]])||(s[a[u]]=[],l[a[u]]=[]),s[a[u]].push(e[u]),l[a[u]].push(t[u]);1===r.length?n=Object(ae.a)(s,r[0]):(n=K()(s)).sort((function(e,t){return e.localeCompare(t,void 0,se)}));for(var c=function(e){var t=n[e];o[t]={value:i.map((function(e){return e(s[t],l[t])})),size:s[t].length}},d=0;d<n.length;d++)c(d);return{keys:n,result:o}}(o,f,r,d,u);n=x.result;for(var C=x.keys,q=0;q<C.length;q++){var z=C[q];n[z].value=n[z].value.map((function(e){return e[0][1]}))}h="".concat(h," ").concat(a("vs")," ").concat(l)}else n=function(e,t,a,i){for(var r={},n=0;n<e.length;n++)J()(r[t[n]])||(r[t[n]]=[]),r[t[n]].push(e[n]);var o=K()(r);if(2===i.length){var s=i[0].categories,l=i[1].categories;s&&l?o.sort((function(e,t){var a=e.split(":"),i=t.split(":"),r=s.indexOf(a[0])-s.indexOf(i[0]);return 0!==r?r:r=l.indexOf(a[1])-l.indexOf(i[1])})):s?o.sort((function(e,t){var a=e.split(":"),i=t.split(":"),r=s.indexOf(a[0])-s.indexOf(i[0]);return 0!==r?r:a[1].localeCompare(i[1],void 0,se)})):l?o.sort((function(e,t){var a=e.split(":"),i=t.split(":"),r=a[0].localeCompare(i[0],void 0,se);return 0!==r?r:r=l.indexOf(a[1])-l.indexOf(i[1])})):o.sort((function(e,t){return e.localeCompare(t,void 0,se)}))}else 1===i.length&&i[0].categories?o=Object(ae.a)(r,i[0]):o.sort((function(e,t){return e.localeCompare(t,void 0,se)}));for(var u={},c=function(e){var t=o[e];u[t]={value:a.map((function(e){return e(r[t])})),size:r[t].length}},d=0;d<o.length;d++)c(d);return u}(o,r,d,u)}else{if(c)if(o=[],f=[],h&&i.state.showSecondVarSelect)for(var V=t[h],P=t[l],Q=0;Q<V.length;Q++)Object($.isPrimitive)(V[Q])&&!ee()(V[Q])&&Object($.isPrimitive)(P[Q])&&!ee()(P[Q])&&(o.push(V[Q]),f.push(P[Q]));else for(var k=t[h],D=0;D<k.length;D++)Object($.isPrimitive)(k[D])&&!ee()(k[D])&&o.push(k[D]);else o=t[h],f=t[l];if("Correlation"===v[0])n={value:d.map((function(e){return e(o,f)[0][1]})),size:o.length},h="".concat(h," ").concat(a("vs")," ").concat(l);else n={value:d.map((function(e){return e(o)})),size:o.length}}g[h]=n},w=0;w<s.length;w++)y(w);var S={variables:s,statistics:v,type:"Statistics",result:g,group:u};i.props.logAction(te.R,{statistic:v,variables:s,secondVariable:"Correlation"===v[0]?l:null,group:u}),i.props.onCreated(S)}));var n=e.defaultStatistic;return i.state={selectedStats:n?[{value:Object(T.a)(n),label:n}]:null,variables:e.defaultX?[e.defaultX]:[],secondVariable:e.defaultY,group:null,showSecondVarSelect:!1,showQuantiles:!1,quantiles:[],omit:!1},i.createStatisticsOptions(),i}return l()(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.variables,i=t.groupingVariables,r=t.t,n=this.state.selectedStats;return M()(z.a,{},void 0,M()(z.a.Header,{as:"h4"},void 0,r("summary-statistics"),M()(U.a,{title:r("summary-statistics"),content:oe})),M()(z.a.Body,{},void 0,M()(P.a,{controlId:"statistics-form-select"},void 0,M()(E.a,{tooltip:r("statistics-tooltip"),placement:"right"},void 0,M()(Q.a,{},void 0,r("statistics"),":")),M()(q.a,{value:n,options:this.statistics,isMulti:!0,components:{Option:ce,GroupHeading:de},hideSelectedOptions:!1,onChange:function(t){var a,i=-1;if(J()(t)&&t.length>0){var r=(a=t.map((function(e,t){return"Five-Number Summary"===e.label&&(i=t),e.label})))[a.length-1];if("Correlation"===r||"Correlation Matrix"===r)return e.setState({selectedStats:[{label:r,value:Object(T.a)(r)}],showSecondVarSelect:"Correlation"===r});if("Correlation"!==a[0]&&"Correlation Matrix"!==a[0]||t.shift(),i>-1){var n;t=t.slice();var o=[];N()(a,"Min")||o.push({label:"Min",value:Object(T.a)("Min")}),N()(a,"First Quartile")||o.push({label:"First Quartile",value:Object(T.a)("First Quartile")}),N()(a,"Median")||o.push({label:"Median",value:Object(T.a)("Median")}),N()(a,"Third Quartile")||o.push({label:"Third Quartile",value:Object(T.a)("Third Quartile")}),N()(a,"Max")||o.push({label:"Max",value:Object(T.a)("Max")}),(n=t).splice.apply(n,[i,1].concat(o))}}e.setState({selectedStats:t,showSecondVarSelect:!1,showQuantiles:a&&a.includes("Quantile")})},styles:A.a,menuPlacement:"auto",menuPortalTarget:document.body,menuShouldScrollIntoView:!1})),M()(F.a,{legend:r("variable-s"),defaultValue:this.state.variables,multi:!0,options:a,onChange:function(t){e.setState({variables:t||[]})},tooltip:r("variables-statistics-tooltip"),menuPortalTarget:document.body,menuPlacement:"auto",menuShouldScrollIntoView:!1}),this.state.showQuantiles?M()(P.a,{controlId:"quantiles-form-group"},void 0,M()(E.a,{tooltip:r("quantiles-tooltip"),placement:"right"},void 0,M()(Q.a,{},void 0,r("quantiles"))),M()(Z.a,{defaultValue:[],options:le,isClearable:!0,isMulti:!0,placeholder:r("quantiles-placeholder"),onChange:function(t){e.setState({quantiles:t})},styles:A.a,menuPortalTarget:document.body,menuPlacement:"auto",menuShouldScrollIntoView:!1})):null,M()(F.a,{legend:r("second-variable"),defaultValue:this.state.secondVariable,options:a,style:{display:this.state.showSecondVarSelect?"inline":"none"},onChange:function(t){e.setState({secondVariable:t})},tooltip:r("second-variable-statistic-tooltip")}),i.length>0?M()(P.a,{controlId:"stats-form-group"},void 0,M()(E.a,{tooltip:r("group-by-statistics-tooltip")},void 0,M()(Q.a,{},void 0,r("group-by"))),M()(q.a,{value:this.state.group,options:i.map((function(e){return{label:e,value:e}})),isClearable:!0,isMulti:!0,onChange:function(t){t&&0!==t.length?t.length<=2&&e.setState({group:t}):e.setState({group:null})},styles:A.a,menuPortalTarget:document.body,menuPlacement:"auto",menuShouldScrollIntoView:!1})):null,M()(Y.a,{legend:r("omit-missing"),tooltip:r("omit-missing-tooltip"),defaultValue:this.state.omit,onChange:function(t){e.setState({omit:t})}}),M()(V.a,{variant:"primary",block:!0,onClick:this.generateStatistics,disabled:!n||0===this.state.variables.length},void 0,r("calculate"))))}}]),a}(O.Component);ve.defaultProps={groupingVariables:[],defaultX:null,defaultY:null,defaultStatistic:null,logAction:function(){},statistics:["Mean","Median","Min","Max","Range","Interquartile Range","Standard Deviation","Variance","Correlation","Correlation Matrix","Skewness","Excess Kurtosis","First Quartile","Third Quartile","Quantile","Five-Number Summary"]},t.default=ve},6359:function(e){e.exports=JSON.parse('{"de":{"Mean":"Mittelwert aller Werte","Median":"Mittlerer Wert, wenn die Werte in der Reihenfolge vom kleinsten zum gr\xf6\xdften Wert aufgef\xfchrt sind (Mittelwert der beiden mittleren Werte im Falle einer ungeraden Anzahl von Werten)","First Quartile":"Median der unteren H\xe4lfte des Datensatzes, was bedeutet, dass 25% der Zahlen im Datensatz darunter und 75% dar\xfcber liegen","Five-Number Summary":"Berechnet das Minimum, das erste Quartil, den Median, das dritte Quartil und das Maximum, um die Verteilung der Daten grob zu charakterisieren","Third Quartile":"Median der oberen H\xe4lfte des Datensatzes, was bedeutet, dass 75% der Zahlen im Datensatz darunter und 25% dar\xfcber liegen","Quantile":"Quantiles divide the distribution such that there is a given proportion of observations below the quantile (special cases being the median or the first and third quartiles)","Min":"Minimaler Wert.","Max":"Maximaler Wert","Range":"Differenz zwischen Maximal- und Minimalwert","Interquartile Range":"Differenz zwischen dem dritten und dem ersten Quartil","Standard Deviation":"Quadratwurzel der Stichprobenvarianz","Variance":"Mittelwert aus der quadrierten Differenz der Einzelwerte minus deren Mittelwert","Correlation":"Pearson-Korrelationskoeffizient, der die lineare Assoziation zwischen zwei Variablen misst (nimmt Werte zwischen -1 und 1 an)","Skewness":"Ma\xdf f\xfcr die Asymmetrie einer Verteilung","Excess Kurtosis":"Positive Werte der exzessiven Kurtose signalisieren, dass die Verteilung dickere Enden als die Normalverteilung hat, negative Werte, dass die Verteilung schmaler ist"},"en":{"Mean":"Average of all values","Median":"Middle value when values are listed in order from smallest to greatest (mean of the two middle values in case of an odd number of values)","First Quartile":"Median of the lower half of the data set, which implies that 25% of the numbers in the data set lie below it and 75% are above","Five-Number Summary":"Calculates the minimum, first quartile, median, third quartile, and maximum to roughly characterize the distribution of the data","Third Quartile":"Median of the upper half of the data set, which implies that 75% of the numbers in the data set lie below it and 25% are above","Quantile":"Quantiles divide the distribution such that there is a given proportion of observations below the quantile (special cases being the median or the first and third quartiles)","Min":"Minimum value.","Max":"Maximum value.","Range":"Difference between maximum and minimum value","Interquartile Range":"Difference between the third and first quartile","Standard Deviation":"Square root of the sample variance","Variance":"Average of the squared difference of the individual values minus their mean","Correlation":"Pearson correlation coefficient measuring the linear association between two variables (takes values between -1 and 1)","Skewness":"Measure for the asymmetry of a distribution","Excess Kurtosis":"Positive values of the excess kurtosis signal that distribution has fatter tails than normal distribution, negative values that the distribution is narrower"},"es":{"Mean":"Promedio de todos los valores","Median":"Valor medio cuando los valores se enumeran en orden de menor a mayor (media de los dos valores medios en caso de un n\xfamero impar de valores)","First Quartile":"Mediana de la mitad inferior del conjunto de datos, lo que implica que el 25% de los n\xfameros del conjunto de datos est\xe1n por debajo y el 75% por encima","Five-Number Summary":"Calcula el m\xednimo, el primer cuartil, la mediana, el tercer cuartil y el m\xe1ximo para caracterizar aproximadamente la distribuci\xf3n de los datos","Third Quartile":"Mediana de la mitad superior del conjunto de datos, lo que implica que el 75% de los n\xfameros del conjunto de datos est\xe1n por debajo y el 25% por encima","Quantile":"Los cuantiles dividen la distribuci\xf3n de manera que hay una proporci\xf3n determinada de observaciones por debajo del cuantil (los casos especiales son la mediana o el primer y tercer cuartil)","Min":"Valor m\xednimo","Max":"Valor m\xe1ximo","Range":"Diferencia entre el valor m\xe1ximo y el m\xednimo","Interquartile Range":"Diferencia entre el tercer y el primer cuartil","Standard Deviation":"Ra\xedz cuadrada de la varianza de la muestra","Variance":"Promedio de la diferencia cuadrada de los valores individuales menos su media","Correlation":"Coeficiente de correlaci\xf3n de Pearson que mide la asociaci\xf3n lineal entre dos variables (toma valores entre -1 y 1)","Skewness":"Medir la asimetr\xeda de una distribuci\xf3n","Excess Kurtosis":"Los valores positivos del exceso de curtosis indican que la distribuci\xf3n tiene colas m\xe1s gordas que la distribuci\xf3n normal, los valores negativos que la distribuci\xf3n es m\xe1s estrecha"}}')}}]);