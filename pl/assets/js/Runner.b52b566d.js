(window.webpackJsonp=window.webpackJsonp||[]).push([[944],{6483:function(e,n,t){"use strict";t.r(n);var r=t(0),u=t(404),c=t.n(u),a=t(439),l=function(e){var n=e.active,t=e.interval,u=e.onEvaluate,c=Object(r.useRef)(null),a=Object(r.useRef)();return Object(r.useEffect)((function(){a.current=u})),Object(r.useEffect)((function(){return n&&(t?(c.current&&window.clearInterval(c.current),c.current=window.setInterval(a.current,t)):a.current()),function(){c.current&&window.clearInterval(c.current)}}),[n,t]),null};l.defaultProps={active:!0,interval:null,onEvaluate:function(){}},l.propTypes={active:c.a.bool,interval:c.a.number,onEvaluate:c.a.func},n.default=Object(a.a)(l)}}]);