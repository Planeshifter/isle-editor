(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{212:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(220),m=t(239),c=t(215);var o=function(e){const{nextItem:a,prevItem:t}=e;return n.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},n.a.createElement("div",{className:"pagination-nav__item"},t&&n.a.createElement(c.a,{className:"pagination-nav__link",to:t.permalink},n.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous Post"),n.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),n.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.a.createElement(c.a,{className:"pagination-nav__link",to:a.permalink},n.a.createElement("div",{className:"pagination-nav__sublabel"},"Next Post"),n.a.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))};a.default=function(e){const{content:a}=e,{frontMatter:t,metadata:r}=a,{title:c,description:i,nextItem:s,prevItem:g,editUrl:E}=r;return n.a.createElement(l.a,{title:c,description:i},a&&n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--8 col--offset-2"},n.a.createElement(m.a,{frontMatter:t,metadata:r,isBlogPostPage:!0},n.a.createElement(a,null)),n.a.createElement("div",null,E&&n.a.createElement("a",{href:E,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},n.a.createElement("g",null,n.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(s||g)&&n.a.createElement("div",{className:"margin-vert--xl"},n.a.createElement(o,{nextItem:s,prevItem:g}))))))}},221:function(e,a,t){"use strict";var r=t(2),n=t(0),l=t.n(n),m=t(218),c=t.n(m),o=t(215),i=t(214),s=t(216),g=t(92),E=t.n(g);function u({to:e,href:a,label:t,...n}){const m=Object(s.a)(e);return l.a.createElement(o.a,Object(r.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:m},n),t)}const v=({url:e,alt:a})=>l.a.createElement("img",{className:"footer__logo",alt:a,src:e});a.a=function(){const e=Object(i.a)(),{siteConfig:a={}}=e,{themeConfig:t={}}=a,{footer:r}=t,{copyright:n,links:m=[],logo:o={}}=r||{},g=Object(s.a)(o.src);return r?l.a.createElement("footer",{className:c()("footer",{"footer--dark":"dark"===r.style})},l.a.createElement("div",{className:"container"},m&&m.length>0&&l.a.createElement("div",{className:"row footer__links"},m.map((e,a)=>l.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?l.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.a.createElement("ul",{className:"footer__items"},e.items.map((e,a)=>e.html?l.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.a.createElement("li",{key:e.href||e.to,className:"footer__item"},l.a.createElement(u,e)))):null))),(o||n)&&l.a.createElement("div",{className:"text--center"},o&&o.src&&l.a.createElement("div",{className:"margin-bottom--sm"},o.href?l.a.createElement("a",{href:o.href,target:"_blank",rel:"noopener noreferrer",className:E.a.footerLogoLink},l.a.createElement(v,{alt:o.alt,url:g})):l.a.createElement(v,{alt:o.alt,url:g})),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}})))):null}},234:function(e,a,t){"use strict";var r=t(0),n=t.n(r);const l={React:n(),...n.a};a.a=l},239:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(217),m=t(213),c=t(225),o=t(215),i=t(242),s=t(216),g=t(93),E=t.n(g);const u=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:r,truncated:g,isBlogPostPage:v=!1}=e,{date:_,permalink:d,tags:p,readingTime:f}=r,{author:h,title:N,image:b}=t,k=t.author_url||t.authorURL,y=t.author_title||t.authorTitle,w=t.author_image_url||t.authorImageURL,I=Object(s.a)(b,{absolute:!0});return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,b&&n.a.createElement("meta",{property:"og:image",content:I}),b&&n.a.createElement("meta",{property:"twitter:image",content:I}),b&&n.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+N})),n.a.createElement("article",{className:v?void 0:"margin-bottom--xl"},(()=>{const e=v?"h1":"h2",a=_.substring(0,10).split("-"),t=a[0],r=u[parseInt(a[1],10)-1],m=parseInt(a[2],10);return n.a.createElement("header",null,n.a.createElement(e,{className:Object(l.a)("margin-bottom--sm",E.a.blogPostTitle)},v?N:n.a.createElement(o.a,{to:d},N)),n.a.createElement("div",{className:"margin-vert--md"},n.a.createElement("time",{dateTime:_,className:E.a.blogPostDate},r," ",m,", ",t," ",f&&n.a.createElement(n.a.Fragment,null," \xb7 ",Math.ceil(f)," min read"))),n.a.createElement("div",{className:"avatar margin-vert--md"},w&&n.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:k,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{src:w,alt:h})),n.a.createElement("div",{className:"avatar__intro"},h&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:k,target:"_blank",rel:"noreferrer noopener"},h)),n.a.createElement("small",{className:"avatar__subtitle"},y)))))})(),n.a.createElement("section",{className:"markdown"},n.a.createElement(m.a,{components:i.a},a)),(p.length>0||g)&&n.a.createElement("footer",{className:"row margin-vert--lg"},p.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),p.map(({label:e,permalink:a})=>n.a.createElement(o.a,{key:a,className:"margin-horiz--sm",to:a},e))),g&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(o.a,{to:r.permalink,"aria-label":"Read more about "+N},n.a.createElement("strong",null,"Read More"))))))}}}]);