(window.webpackJsonp=window.webpackJsonp||[]).push([[1093],{4085:function(e,t,n){"use strict";n.r(t);var o=n(407),a=n.n(o),l=n(456),i=n.n(l),c=n(0),s=n.n(c),r=(n(404),n(450)),u=n.n(r),p=n(2049),h=n(446),d=n.n(h),v=n(484),w=n(422);n(369);Object(w.a)("General");var b=u()("isle:switch"),f=function(e){var t=e.active,n=e.tooltip,o=e.tooltipPos,l=e.className,r=e.style,u=e.onChange,h=e.children,w=Object(c.useState)(0),f=i()(w,2),y=f[0],k=f[1],m=Object(p.a)("General").t,C=s.a.Children.map(h,(function(e,t){var n={style:{}};return b("Check whether idx = ".concat(t," is equal to pos = ").concat(y)),n.style.display=t!==y?"none":"inline",s.a.cloneElement(e,n)})),N=Object(c.useCallback)((function(){if(!d()(h))return null;var e=y+1;b("Handle click: New position is "+e),e>=h.length?(k(0),u(0)):(k(e),u(e))}),[h,y,u]),g=t?"switch active":"switch";if(l&&(g+=" "+l),!t)return a()("span",{className:g,style:r},void 0,C);var j=a()("span",{role:"button",tabIndex:0,className:g,onClick:N,onKeyPress:N,style:r},void 0,C);return null===n&&(n=m("click-to-cycle-through-options")),""!==n&&t?a()(v.a,{placement:o,tooltip:n},void 0,j):j};f.defaultProps={active:!0,tooltip:null,tooltipPos:"top",className:"",style:{},onChange:function(){}},t.default=f}}]);