(window.webpackJsonp=window.webpackJsonp||[]).push([[1150],{6376:function(t,e,o){"use strict";o.r(e);o(436),o(423),o(420);var n=o(407),a=o.n(n),r=o(414),i=o.n(r),s=o(415),l=o.n(s),c=o(424),u=o.n(c),p=o(417),g=o.n(p),f=o(418),h=o.n(f),d=o(416),v=o.n(d),b=o(412),m=o.n(b),y=o(0),w=(o(404),o(422)),k=o(775),T=o(735),x=o(1055),C=o(514),R=o.n(C),S=o(6377);function q(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=v()(t);if(e){var a=v()(this).constructor;o=Reflect.construct(n,arguments,a)}else o=n.apply(this,arguments);return h()(this,o)}}var z=a()("div",{className:"fa fa-question"}),D=function(t){g()(o,t);var e=q(o);function o(t){var n;return i()(this,o),n=e.call(this,t),m()(u()(n),"toggleTour",(function(){n.setState({running:!n.state.running},(function(){n.state.running?n.props.onTutorialStart():n.props.onTutorialCompletion()}))})),n.state={running:!1},n.stepsWithId=R()(S,2).map((function(e){return e.target="#".concat(t.for," ")+e.target,e})),n}return l()(o,[{key:"render",value:function(){var t=this;return a()(y.Fragment,{},void 0,a()(T.a,{placement:"left",overlay:a()(k.a,{},void 0,this.props.t(this.state.running?"close-tutorial":"show-tutorial"))},void 0,a()(w.a,{variant:"secondary",size:"sm",onClick:this.toggleTour,style:{marginRight:110,float:"right"}},void 0,z)),a()(x.b,{steps:this.stepsWithId,disableScrolling:!0,showProgress:!0,run:this.state.running,callback:function(e){e.type===x.a.TOUR_END&&(t.setState({running:!1}),t.props.onTutorialCompletion())},styles:{options:{zIndex:1010}}}))}}]),o}(y.Component);e.default=D},6377:function(t){t.exports=JSON.parse('[{"target":".card-body","content":"The toolbox comes with a wide range of options to analyze one\'s data. Clicking the \'Calculate\' or \'Generate\' buttons for the chosen statistic, plot, or model will calculate it and append it to the output pane.","placement":"bottom","placementBeacon":"bottom"},{"target":".card-header","content":"Click the \'Hide toolbox\' button on the toolbox itself or the main data explorer to toggle the toolbox off. The currently opened tab is preserved when the toolbox is reopened later. Clicking the question mark button in the header closes this tutorial.","placement":"bottom","placementBeacon":"bottom"},{"target":".question-button","content":"Hovering over the question mark button for the selected tab will display a short description of the respective statistic, plot, or model."},{"target":".nav-statistics","content":"Calculate one or more statistics for a chosen variable. One may optionally designate a grouping variable to calculate the statistics for observations belonging to each category of the grouping variable."},{"target":".nav-tables","content":"Tabular displays for categorical variables."},{"target":".nav-plots","content":"Generate plots for categorical or quantitative variables."},{"target":".nav-tests","content":"Run statistical tests for your hypotheses of interest."},{"target":".nav-models","content":"Fit classification, regression, or clustering models."},{"target":".nav-transform","content":"Transform variables or generate grouping variables."}]')}}]);