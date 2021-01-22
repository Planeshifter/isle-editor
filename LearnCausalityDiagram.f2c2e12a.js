/*! For license information please see LearnCausalityDiagram.f2c2e12a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{383:function(t,e,a){"use strict";var s=a(610);t.exports=s},437:function(t,e,a){"use strict";var s=a(365),i=a(363),o=a(367),r=a.n(o),n=a(0),l=a.n(n),h=a(376),c=["xl","lg","md","sm","xs"],p=l.a.forwardRef((function(t,e){var a=t.bsPrefix,o=t.className,n=t.noGutters,p=t.as,y=void 0===p?"div":p,u=Object(i.a)(t,["bsPrefix","className","noGutters","as"]),d=Object(h.a)(a,"row"),x=d+"-cols",f=[];return c.forEach((function(t){var e,a=u[t];delete u[t];var s="xs"!==t?"-"+t:"";null!=(e=null!=a&&"object"==typeof a?a.cols:a)&&f.push(""+x+s+"-"+e)})),l.a.createElement(y,Object(s.a)({ref:e},u,{className:r.a.apply(void 0,[o,d,n&&"no-gutters"].concat(f))}))}));p.displayName="Row",p.defaultProps={noGutters:!1},e.a=p},457:function(t,e,a){"use strict";var s=a(487);t.exports=s},460:function(t,e,a){"use strict";var s=a(365),i=a(363),o=a(367),r=a.n(o),n=a(0),l=a.n(n),h=a(376),c=l.a.forwardRef((function(t,e){var a=t.bsPrefix,o=t.fluid,n=t.as,c=void 0===n?"div":n,p=t.className,y=Object(i.a)(t,["bsPrefix","fluid","as","className"]),u=Object(h.a)(a,"container"),d="string"==typeof o?"-"+o:"-fluid";return l.a.createElement(c,Object(s.a)({ref:e},y,{className:r()(p,o?""+u+d:u)}))}));c.displayName="Container",c.defaultProps={fluid:!1},e.a=c},474:function(t,e,a){"use strict";var s=a(611);t.exports=s},487:function(t,e,a){"use strict";var s=Math.ceil;t.exports=s},5805:function(t,e,a){"use strict";var s=a(5806);t.exports=s},5806:function(t,e,a){"use strict";var s=a(364),i=a(383);t.exports=function(t){return s(t)?t:1/(1+i(-t))}},610:function(t,e,a){"use strict";var s=a(364),i=a(474),o=a(402),r=a(381),n=a(612),l=1.4426950408889634,h=1/(1<<28);t.exports=function(t){var e;return s(t)||t===r?t:t===o?0:t>709.782712893384?r:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<h?1+t:(e=i(t<0?l*t-.5:l*t+.5),n(t-.6931471803691238*e,1.9082149292705877e-10*e,e))}},611:function(t,e,a){"use strict";var s=a(407),i=a(457);t.exports=function(t){return t<0?i(t):s(t)}},612:function(t,e,a){"use strict";var s=a(535),i=a(613);t.exports=function(t,e,a){var o,r,n;return n=(o=t-e)-(r=o*o)*i(r),s(1-(e-o*n/(2-n)-t),a)}},613:function(t,e,a){"use strict";t.exports=function(t){return 0===t?.16666666666666602:.16666666666666602+t*(t*(6613756321437934e-20+t*(4.1381367970572385e-8*t-16533902205465252e-22))-.0027777777777015593)}},6693:function(t,e,a){"use strict";a.r(e);a(382),a(370),a(384);var s=a(368),i=a.n(s),o=a(374),r=a.n(o),n=a(375),l=a.n(n),h=a(379),c=a.n(h),p=a(380),y=a.n(p),u=a(378),d=a.n(u),x=a(0),f=(a(360),a(6664)),b=a(460),g=a(495),w=a(437),v=a(5805),m=a.n(v),z=a(679),k=a(813),D=a(718),N=a(623),E=a(393);function F(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,s=d()(t);if(e){var i=d()(this).constructor;a=Reflect.construct(s,arguments,i)}else a=s.apply(this,arguments);return y()(this,a)}}Object(E.a)("LearnCausalityDiagram");var R=function(t){c()(a,t);var e=F(a);function a(t){var s;return r()(this,a),(s=e.call(this,t)).state={alpha0:0,beta0:-2,ea0a1:null,eb0b2:null,eb0b1b2:null,ea0:.5,eb0:.11920292202211755,obsLHeight:null,obsRHeight:null,randomized:!1,alpha1:1},s}return l()(a,[{key:"renderCausalityDiagram",value:function(){return i()(z.a,{removeButtons:!0,data:[],layout:{xaxis:{showgrid:!1,zeroline:!1,visible:!1,range:[0,10],fixedrange:!0},yaxis:{showgrid:!1,zeroline:!1,visible:!1,range:[0,6],fixedrange:!0},annotations:[{x:10,y:6,text:this.props.y,mode:"text",font:{size:22,color:"darkblue"},axref:"x",ayref:"y",ax:10,ay:6,textangle:45},{x:this.state.beta1>0?9.5:0,y:6,text:this.props.x,ax:0,ay:6,font:{size:22,color:"darkblue"},axref:"x",ayref:"y",arrowsize:3,arrowwidth:1,arrowhead:1,textangle:320,showarrow:this.state.beta1>0},{x:this.state.beta2?10:5,y:this.state.beta2?5.5:2,text:this.props.z,textangle:0,ax:5,ay:2,font:{size:22,color:"darkblue"},axref:"x",ayref:"y",arrowsize:3,arrowwidth:1,arrowhead:1,showarrow:this.state.beta2>0},{x:.5,y:5.5,textangle:0,ax:5,ay:2.2,text:"",axref:"x",ayref:"y",arrowsize:3,arrowwidth:1,arrowhead:1,showarrow:this.state.alpha1>0}]}})}},{key:"renderSankeyDiagram",value:function(){return i()(z.a,{data:[{type:"sankey",orientation:"h",arrangement:"fixed",node:{pad:40,thickness:15,line:{color:"black",width:.5},label:[this.props.z,"No ".concat(this.props.z),this.props.x,"No ".concat(this.props.x),this.props.y,"No ".concat(this.props.y)],color:["#B1D0F0","#EEF19D","darkgrey","darkgrey","darkgrey","darkgrey"],x:[.1,.1,.5,.5,1,1],y:[.1,.9,.1,.9,.1,.9]},link:{source:[0,0,1,1,2,2,2,2,3,3,3,3],target:[2,3,2,3,4,4,5,5,4,4,5,5],value:[.4*this.state.ea0a1,.4*(1-this.state.ea0a1),.6*this.state.ea0,.6*(1-this.state.ea0),.6*this.state.eb0b1*this.state.ea0,.4*this.state.eb0b1b2*this.state.ea0a1,.6*(1-this.state.eb0b1)*this.state.ea0,.4*(1-this.state.eb0b1b2)*this.state.ea0a1,.6*this.state.eb0*(1-this.state.ea0),.4*this.state.eb0b2*(1-this.state.ea0a1),.6*(1-this.state.eb0)*(1-this.state.ea0),.4*(1-this.state.eb0b2)*(1-this.state.ea0a1)],color:["#B1D0F0","#B1D0F0","#EEF19D","#EEF19D","#EEF19D","#B1D0F0","#EEF19D","#B1D0F0","#EEF19D","#B1D0F0","#EEF19D","#B1D0F0"]}}],layout:{font:{size:16}}})}},{key:"renderMosaicPlots",value:function(){return i()(w.a,{},void 0,i()(g.a,{},void 0,i()(z.a,{data:[{mode:"text",type:"scatter",x:[.1,.7],y:[1.1,1.1],text:[this.props.x,"No ".concat(this.props.x)],textfont:{size:14,family:"Arial"},hoverinfo:"text"},{mode:"text",type:"scatter",x:[-.4,-.4],y:[.1,.9],text:["No ".concat(this.props.y),this.props.y],textfont:{size:14,family:"Arial"},hoverinfo:"text"}],layout:{title:this.props.z,autolayout:!0,showlegend:!1,xaxis:{showgrid:!1,zeroline:!1,showticklabels:!1,range:[-.75,1]},yaxis:{showgrid:!1,zeroline:!1,showticklabels:!1},shapes:[{x0:0,x1:this.state.ea0a1,y0:this.state.eb0b1b2,y1:0,line:{width:1},opacity:.4,type:"rect",fillcolor:"red"},{x0:this.state.ea0a1,x1:1,y0:this.state.eb0b2,y1:0,line:{width:1},opacity:.4,type:"rect",fillcolor:"blue"},{x0:0,x1:this.state.ea0a1,y0:1,y1:this.state.eb0b1b2,line:{width:1},opacity:.4,type:"rect",fillcolor:"green"},{x0:this.state.ea0a1,x1:1,y0:1,y1:this.state.eb0b2,line:{width:1},opacity:.4,type:"rect",fillcolor:"yellow"}]}})),i()(g.a,{},void 0,i()(z.a,{data:[{mode:"text",type:"scatter",x:[.1,.7],y:[1.1,1.1],text:[this.props.x,"No ".concat(this.props.x)],textfont:{size:14,family:"Arial"},hoverinfo:"text"},{mode:"text",type:"scatter",x:[-.4,-.4],y:[.1,.9],text:["No ".concat(this.props.y),this.props.y],textfont:{size:14,family:"Arial"},hoverinfo:"text"}],layout:{title:"No ".concat(this.props.z),autolayout:!0,showlegend:!1,xaxis:{showgrid:!1,zeroline:!1,showticklabels:!1,range:[-.75,1]},yaxis:{showgrid:!1,zeroline:!1,showticklabels:!1},shapes:[{x0:0,x1:this.state.ea0,y0:this.state.eb0b1,y1:0,line:{width:1},opacity:.4,type:"rect",fillcolor:"red"},{x0:this.state.ea0,x1:1,y0:this.state.eb0,y1:0,line:{width:1},opacity:.4,type:"rect",fillcolor:"blue"},{x0:0,x1:this.state.ea0,y0:1,y1:this.state.eb0b1,line:{width:1},opacity:.4,type:"rect",fillcolor:"green"},{x0:this.state.ea0,x1:1,y0:1,y1:this.state.eb0,line:{width:1},opacity:.4,type:"rect",fillcolor:"yellow"}]}})),i()(g.a,{},void 0,i()(z.a,{data:[{mode:"text",type:"scatter",x:[.1,.7],y:[1.1,1.1],text:[this.props.x,"No ".concat(this.props.x)],textfont:{size:14,family:"Arial"},hoverinfo:"text"},{mode:"text",type:"scatter",x:[-.4,-.4],y:[.1,.9],text:["No ".concat(this.props.y),this.props.y],textfont:{size:14,family:"Arial"},hoverinfo:"text"}],layout:{title:"Observed Relationship",autolayout:!0,showlegend:!1,xaxis:{showgrid:!1,zeroline:!1,showticklabels:!1,range:[-.75,1]},yaxis:{showgrid:!1,zeroline:!1,showticklabels:!1},shapes:[{x0:0,x1:this.state.obsWidth,y0:this.state.obsLHeight,y1:0,line:{width:1},opacity:.4,type:"rect",fillcolor:"red"},{x0:this.state.obsWidth,x1:1,y0:this.state.obsRHeight,y1:0,line:{width:1},opacity:.4,type:"rect",fillcolor:"blue"},{x0:0,x1:this.state.obsWidth,y0:1,y1:this.state.obsLHeight,line:{width:1},opacity:.4,type:"rect",fillcolor:"green"},{x0:this.state.obsWidth,x1:1,y0:1,y1:this.state.obsRHeight,line:{width:1},opacity:.4,type:"rect",fillcolor:"yellow"}]}})))}},{key:"render",value:function(){var t=this;return i()(b.a,{style:{backgroundColor:"white",border:"2px solid black",maxWidth:1600}},void 0,i()(w.a,{},void 0,i()(g.a,{sm:3,style:{height:"450px"}},void 0,i()(k.a,{autoUpdate:!0,onGenerate:function(e,a,s){var i=t.state,o=i.alpha0,r=i.beta0,n=i.ea0,l=i.eb0,h=i.alpha1,c=m()(o+h),p=.4*c+.6*n,y=m()(r+a),u=m()(r+a+s),d=m()(r+s),x=.6*y*n;x+=.4*u*c,x/=p;var f=.6*l*(1-n);f+=.4*d*(1-c),f/=1-p,t.setState({ea0a1:c,eb0b1b2:u,eb0b2:d,eb0b1:y,obsLHeight:x,obsRHeight:f,obsWidth:p,beta1:a,beta2:s})}},void 0,i()(N.a,{legend:"Randomized Assignment",defaultValue:this.state.randomized,onChange:function(e){t.setState({randomized:e,alpha1:e?0:1})}}),i()(D.a,{legend:i()("span",{},void 0,this.props.x," \u2192 ",this.props.y),defaultValue:1,min:0,max:5,step:"any",hideTooltip:!0,numberInputStyle:{display:"none"}}),i()(D.a,{legend:i()("span",{},void 0,this.props.z," \u2192 ",this.props.y),defaultValue:1,min:0,max:5,step:"any",hideTooltip:!0,numberInputStyle:{display:"none"}}),i()(D.a,{legend:i()("span",{},void 0,this.props.z," \u2192 ",this.props.x),defaultValue:this.state.alpha1,min:0,max:5,step:"any",hideTooltip:!0,disabled:this.state.randomized,onChange:function(e){t.setState({alpha1:e})},numberInputStyle:{display:"none"}}))),i()(g.a,{sm:3,style:{height:"450px"}},void 0,this.renderCausalityDiagram()),i()(g.a,{sm:6,style:{height:"450px"}},void 0,this.renderSankeyDiagram())),this.renderMosaicPlots())}}]),a}(x.Component);R.defaultProps={x:"Lights at Night",y:"Child Myopia",z:"Parental Myopia"},e.default=Object(f.a)("LearnCausalityDiagram")(R)}}]);