(window.webpackJsonp=window.webpackJsonp||[]).push([[1104],{3680:function(t,e,o){"use strict";o.r(e);o(420);var n=o(493),r=o.n(n),a=o(407),i=o.n(a),s=o(414),l=o.n(s),p=o(415),c=o.n(p),u=o(417),h=o.n(u),d=o(418),v=o.n(d),f=o(416),m=o.n(f),y=(o(423),o(436),o(0)),g=o.n(y),b=o(23),w=(o(404),o(881)),k=o(775),T=o(510),x=o(1131),C=o(4799),P=o.n(C),E=o(460),N=o.n(E),M=o(428),S=o.n(M),O=o(479),R=o.n(O),j=o(489),q=o(429),I=o(439);o(308);function D(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=m()(t);if(e){var r=m()(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return v()(this,o)}}var B=1,H=function(t){h()(o,t);var e=D(o);function o(t){var n;l()(this,o),n=e.call(this,t);var r={legend:"",showTooltip:!1,tooltipText:"",showPopover:!1,popoverContent:null,popoverName:null};return!0===t.displayMode&&(r.id=B,B+=1),n.state=r,n}return c()(o,[{key:"componentDidMount",value:function(){this.registerElements()}},{key:"componentDidUpdate",value:function(){this.registerElements()}},{key:"componentWillUnmount",value:function(){B=1}},{key:"registerElements",value:function(){var t=Object(b.findDOMNode)(this),e=this;Object(x.p)(t).selectAll(".mord").each((function(t){var o=Object(x.p)(this);e.state.popoverTarget!==this&&o.style("color","inherit");R()(e.props.elems).forEach((function(t){var n=e.props.elems[t];o.text()===t&&(n.variable&&(o.style("cursor","pointer"),o.style("color","blue")),o.on("mouseover",(function(){o.style("color","red"),n.tooltip&&e.setState({showTooltip:!0,tooltipText:n.tooltip,tooltipTarget:this})})).on("mouseout",(function(){e.state.showPopover||o.style("color","blue"),n.tooltip&&e.setState({showTooltip:!1})})).on("click",(function(){if(n.variable){var o={legend:n.legend||n.variable,min:n.min||N.a,max:n.max||S.a,step:n.step||"any"};n.onChange?(o.onChange=n.onChange,o.defaultValue=n.defaultValue):o.bind=n.variable,e.state.popoverName!==t?(e.setState({showTooltip:!1,showPopover:!0,popoverContent:n.body,popoverTarget:this,popoverName:t,config:o}),e.props.onPopover(!0)):(e.setState({showTooltip:!1,showPopover:!1,popoverContent:null,popoverTarget:null,popoverName:null}),e.props.onPopover(!1))}})))}))}))}},{key:"render",value:function(){var t,e=this,o=Object(q.isPrimitive)(this.props.raw)?this.props.raw.toString():this.props.raw,n=i()("span",{},void 0,i()(w.a,{show:this.state.showTooltip,container:document.body,target:this.state.tooltipTarget,placement:"top"},void 0,i()(k.a,{id:"tooltip-top"},void 0,this.state.tooltipText)),i()(w.a,{show:this.state.showPopover,container:document.body,target:this.state.popoverTarget,placement:this.props.popoverPlacement},void 0,i()(T.a,{id:"popover-top"},void 0,g.a.createElement(j.b,r()({inline:!0},this.state.config)))));try{t=P.a.renderToString(o,{displayMode:this.props.displayMode})}catch(c){t=""}var a={__html:t};if(!0===this.props.displayMode){var s=this.props.numbered?i()("div",{className:"tag",style:{float:"right",marginTop:5,marginRight:5}},void 0,null!==this.props.tag?this.props.tag:"["+this.state.id+"]"):null,l=g.a.createElement("span",{ref:function(t){e.katex=t},dangerouslySetInnerHTML:a,"aria-hidden":!!a});return this.props.onClick?i()("div",{className:"tex",role:"button",tabIndex:0,style:this.props.style,onClick:this.props.onClick,onKeyPress:this.props.onClick,"aria-label":"Equation"},void 0,s,l,n):i()("div",{className:"tex",style:this.props.style,"aria-label":"Equation"},void 0,s,l,n)}var p=i()("span",{dangerouslySetInnerHTML:a,"aria-hidden":!!a,style:{whiteSpace:"nowrap"}});return this.props.onClick?g.a.createElement("span",{className:"tex",role:"button",tabIndex:0,ref:function(t){e.katex=t},style:this.props.style,onClick:this.props.onClick,onKeyPress:this.props.onClick,"aria-label":"Equation"},p,n):g.a.createElement("span",{className:"tex",ref:function(t){e.katex=t},style:this.props.style,"aria-label":"Equation"},p,n)}}]),o}(y.Component);H.defaultProps={displayMode:!1,numbered:!1,style:{},tag:null,elems:{},popoverPlacement:"top",onPopover:function(){},onClick:null},e.default=Object(I.a)(H)}}]);