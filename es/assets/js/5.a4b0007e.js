(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1031:function(e,t,n){try{e.exports=n(4723)}catch(r){const t={};e.exports={useAllDocsData:()=>t,useActivePluginAndVersion:()=>{}}}},2723:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},4084:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useThemeConfig=void 0;const o=r(n(15));t.useThemeConfig=function(){return o.default().siteConfig.themeConfig}},4085:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDocsPluginEnabled=void 0;const r=n(1031);t.isDocsPluginEnabled=!!r.useAllDocsData},4086:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionContext=t.DocsPreferredVersionContextProvider=void 0;const u=s(n(0)),c=n(4084),a=n(4085),l=n(1031),f=i(n(4729));function d({pluginIds:e,versionPersistence:t,allDocsData:n}){const r={};return e.forEach((e=>{r[e]=function(e){const r=f.default.read(e,t);return n[e].versions.some((e=>e.name===r))?{preferredVersionName:r}:(f.default.clear(e,t),{preferredVersionName:null})}(e)})),r}function v(){const e=l.useAllDocsData(),t=c.useThemeConfig().docs.versionPersistence,n=u.useMemo((()=>Object.keys(e)),[e]),[r,o]=u.useState((()=>function(e){const t={};return e.forEach((e=>{t[e]={preferredVersionName:null}})),t}(n)));u.useEffect((()=>{o(d({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]);return[r,u.useMemo((()=>({savePreferredVersion:function(e,n){f.default.save(e,t,n),o((t=>Object.assign(Object.assign({},t),{[e]:{preferredVersionName:n}})))}})),[o])]}const g=u.createContext(null);function p({children:e}){const t=v();return u.default.createElement(g.Provider,{value:t},e)}t.DocsPreferredVersionContextProvider=function({children:e}){return a.isDocsPluginEnabled?u.default.createElement(p,null,e):u.default.createElement(u.default.Fragment,null,e)},t.useDocsPreferredVersionContext=function(){const e=u.useContext(g);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}},435:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},4721:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useAlternatePageUtils=void 0;const o=r(n(15)),s=n(25);t.useAlternatePageUtils=function(){const{siteConfig:{baseUrl:e,url:t},i18n:{defaultLocale:n,currentLocale:r}}=o.default(),{pathname:i}=s.useLocation(),u=r===n?e:e.replace(`/${r}/`,"/"),c=i.replace(e,"");return{createUrl:function({locale:e,fullyQualified:r}){return`${r?t:""}${function(e){return e===n?`${u}`:`${u}${e}/`}(e)}${c}`}}}},4722:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.docVersionSearchTag=t.DEFAULT_SEARCH_TAG=void 0,t.DEFAULT_SEARCH_TAG="default",t.docVersionSearchTag=function(e,t){return`docs-${e}-${t}`}},4723:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;const r=n(25),o=n(4724),s=n(4725);t.useAllDocsData=()=>o.useAllPluginInstancesData("docusaurus-plugin-content-docs"),t.useDocsData=e=>o.usePluginData("docusaurus-plugin-content-docs",e),t.useActivePlugin=(e={})=>{const n=t.useAllDocsData(),{pathname:o}=r.useLocation();return s.getActivePlugin(n,o,e)},t.useActivePluginAndVersion=(e={})=>{const n=t.useActivePlugin(e),{pathname:o}=r.useLocation();if(n){return{activePlugin:n,activeVersion:s.getActiveVersion(n.pluginData,o)}}},t.useVersions=e=>t.useDocsData(e).versions,t.useLatestVersion=e=>{const n=t.useDocsData(e);return s.getLatestVersion(n)},t.useActiveVersion=e=>{const n=t.useDocsData(e),{pathname:o}=r.useLocation();return s.getActiveVersion(n,o)},t.useActiveDocContext=e=>{const n=t.useDocsData(e),{pathname:o}=r.useLocation();return s.getActiveDocContext(n,o)},t.useDocVersionSuggestions=e=>{const n=t.useDocsData(e),{pathname:o}=r.useLocation();return s.getDocVersionSuggestions(n,o)}},4724:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o})),n.d(t,"useAllPluginInstancesData",(function(){return s})),n.d(t,"usePluginData",(function(){return i}));var r=n(15);function o(){const{globalData:e}=Object(r.default)();if(!e)throw new Error("Docusaurus global data not found");return e}function s(e){const t=o()[e];if(!t)throw new Error(`Docusaurus plugin global data not found for pluginName=${e}`);return t}function i(e,t="default"){const n=s(e)[t];if(!n)throw new Error(`Docusaurus plugin global data not found for pluginName=${e} and pluginId=${t}`);return n}},4725:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;const r=n(25);t.getActivePlugin=function(e,t,n={}){const o=Object.entries(e).find((([e,n])=>!!r.matchPath(t,{path:n.path,exact:!1,strict:!1}))),s=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!s&&n.failfast)throw new Error(`Can't find active docs plugin for pathname=${t}, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(e).map((e=>e.path)).join(", ")}`);return s},t.getLatestVersion=e=>e.versions.find((e=>e.isLast)),t.getActiveVersion=(e,n)=>{const o=t.getLatestVersion(e);return[...e.versions.filter((e=>e!==o)),o].find((e=>!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})))},t.getActiveDocContext=(e,n)=>{const o=t.getActiveVersion(e,n),s=null==o?void 0:o.docs.find((e=>!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})));return{activeVersion:o,activeDoc:s,alternateDocVersions:s?function(t){const n={};return e.versions.forEach((e=>{e.docs.forEach((r=>{r.id===t&&(n[e.name]=r)}))})),n}(s.id):{}}},t.getDocVersionSuggestions=(e,n)=>{const r=t.getLatestVersion(e),o=t.getActiveDocContext(e,n),s=o.activeVersion!==r;return{latestDocSuggestion:s?null==o?void 0:o.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:s?r:void 0}}},4726:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePath=void 0,t.isSamePath=(e,t)=>{const n=e=>!e||(null==e?void 0:e.endsWith("/"))?e:`${e}/`;return n(e)===n(t)}},4727:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useTitleFormatter=void 0;const o=r(n(15));t.useTitleFormatter=e=>{const{siteConfig:t={}}=o.default(),{title:n,titleDelimiter:r="|"}=t;return e&&e.trim().length?`${e.trim()} ${r} ${n}`:n}},4728:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=void 0;const r=n(0),o=n(4086),s=n(1031),i=n(4730);t.useDocsPreferredVersion=function(e=i.DEFAULT_PLUGIN_ID){const t=s.useDocsData(e),[n,u]=o.useDocsPreferredVersionContext(),{preferredVersionName:c}=n[e];return{preferredVersion:c?t.versions.find((e=>e.name===c)):null,savePreferredVersionName:r.useCallback((t=>{u.savePreferredVersion(e,t)}),[u])}},t.useDocsPreferredVersionByPluginId=function(){const e=s.useAllDocsData(),[t]=o.useDocsPreferredVersionContext(),n=Object.keys(e),r={};return n.forEach((n=>{r[n]=function(n){const r=e[n],{preferredVersionName:o}=t[n];return o?r.versions.find((e=>e.name===o)):null}(n)})),r}},4729:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=e=>`docs-preferred-version-${e}`,o={save:(e,t,n)=>{"none"===t||window.localStorage.setItem(r(e),n)},read:(e,t)=>"none"===t?null:window.localStorage.getItem(r(e)),clear:(e,t)=>{"none"===t||window.localStorage.removeItem(r(e))}};t.default=o},4730:function(e,t,n){"use strict";n.r(t),n.d(t,"DEFAULT_PLUGIN_ID",(function(){return r}));const r="default"},608:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4084);Object.defineProperty(t,"useThemeConfig",{enumerable:!0,get:function(){return r.useThemeConfig}});var o=n(4721);Object.defineProperty(t,"useAlternatePageUtils",{enumerable:!0,get:function(){return o.useAlternatePageUtils}});var s=n(4722);Object.defineProperty(t,"docVersionSearchTag",{enumerable:!0,get:function(){return s.docVersionSearchTag}}),Object.defineProperty(t,"DEFAULT_SEARCH_TAG",{enumerable:!0,get:function(){return s.DEFAULT_SEARCH_TAG}});var i=n(4085);Object.defineProperty(t,"isDocsPluginEnabled",{enumerable:!0,get:function(){return i.isDocsPluginEnabled}});var u=n(4726);Object.defineProperty(t,"isSamePath",{enumerable:!0,get:function(){return u.isSamePath}});var c=n(4727);Object.defineProperty(t,"useTitleFormatter",{enumerable:!0,get:function(){return c.useTitleFormatter}});var a=n(4728);Object.defineProperty(t,"useDocsPreferredVersion",{enumerable:!0,get:function(){return a.useDocsPreferredVersion}}),Object.defineProperty(t,"useDocsPreferredVersionByPluginId",{enumerable:!0,get:function(){return a.useDocsPreferredVersionByPluginId}});var l=n(4086);Object.defineProperty(t,"DocsPreferredVersionContextProvider",{enumerable:!0,get:function(){return l.DocsPreferredVersionContextProvider}})},648:function(e,t,n){"use strict";var r=n(0),o=n.n(r),s=n(10),i=n(2723),u=n(8);const c=Object(r.createContext)({collectLink:()=>{}});var a=n(750),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,{isNavLink:n,to:f,href:d,activeClassName:v,isActive:g,"data-noBrokenLinkCheck":p,autoAddBaseUrl:D=!0}=e,b=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:P}=Object(a.b)(),h=Object(r.useContext)(c),m=f||d,V=Object(i.a)(m),_=null==m?void 0:m.replace("pathname://",""),A=void 0!==_?(O=_,D&&(e=>e.startsWith("/"))(O)?P(O):O):void 0;var O;const y=Object(r.useRef)(!1),j=n?s.e:s.c,w=u.a.canUseIntersectionObserver;let C;Object(r.useEffect)((()=>(!w&&V&&window.docusaurus.prefetch(A),()=>{w&&C&&C.disconnect()})),[A,w,V]);const E=null!==(t=null==A?void 0:A.startsWith("#"))&&void 0!==t&&t,L=!A||!V||E;return A&&V&&!E&&!p&&h.collectLink(A),L?o.a.createElement("a",Object.assign({href:A},m&&!V&&{target:"_blank",rel:"noopener noreferrer"},b)):o.a.createElement(j,Object.assign({},b,{onMouseEnter:()=>{y.current||(window.docusaurus.preload(A),y.current=!0)},innerRef:e=>{var t,n;w&&e&&V&&(t=e,n=()=>{window.docusaurus.prefetch(A)},C=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(C.unobserve(t),C.disconnect(),n())}))})),C.observe(t))},to:A||""},n&&{isActive:g,activeClassName:v}))}},726:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return c}));var r=n(0),o=n.n(r),s=n(28);function i({id:e,message:t}){var n;return null!==(n=s[null!=e?e:t])&&void 0!==n?n:t}function u({message:e,id:t}){const n=i({message:e,id:t});return null!=n?n:e}function c({children:e,id:t}){var n;const r=null!==(n=i({message:e,id:t}))&&void 0!==n?n:e;return o.a.createElement(o.a.Fragment,null,r)}},750:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var r=n(15),o=n(2723);function s(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:s=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=s();return n(e,t)}}}]);