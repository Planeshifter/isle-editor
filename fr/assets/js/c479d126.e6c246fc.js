(window.webpackJsonp=window.webpackJsonp||[]).push([[1240],{266:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(3),a=n(7),r=(n(0),n(410)),o={id:"jitsi",title:"Jitsi",sidebar_label:"Jitsi"},s={unversionedId:"server/jitsi",id:"server/jitsi",isDocsHomePage:!1,title:"Jitsi",description:"Setting up Jitsi (optional)",source:"@site/docs/server/jitsi.md",slug:"/server/jitsi",permalink:"/fr/docs/server/jitsi",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/server/jitsi.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1585877412,formattedLastUpdatedAt:"02/04/2020",sidebar_label:"Jitsi",sidebar:"docs",previous:{title:"Server Installation Guide",permalink:"/fr/docs/server/installation"}},l=[{value:"Setting up Jitsi (optional)",id:"setting-up-jitsi-optional",children:[]},{value:"Jibri for Jitsi Recordings + Live Streaming (optional)",id:"jibri-for-jitsi-recordings--live-streaming-optional",children:[]},{value:"Setting up Jigasi with Asterisk/FreePBX for Dial-in &amp; Dial-Out (optional)",id:"setting-up-jigasi-with-asteriskfreepbx-for-dial-in--dial-out-optional",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"setting-up-jitsi-optional"},"Setting up Jitsi (optional)"),Object(r.b)("p",null,"To enable the video conference capabilities in ISLE, which are powered by ",Object(r.b)("a",{parentName:"p",href:"https://jitsi.org/"},"Jitsi"),", you need to connect to a specified Jitsi server. "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To setup a new Jitsi server, follow the instructions in their ",Object(r.b)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet/blob/master/doc/quick-install.md"},"Quick Install guide"),". As of March 2020, installing Jitsi on Ubuntu 16.04 should work out of the box when following these instructions; other distributions or newer Ubuntu versions yield installation issues that have to be manually resolved.",Object(r.b)("a",{parentName:"p",href:"https://github.com/isle-project/isle-server/wiki/_new"},"https://github.com/isle-project/isle-server/wiki/_new"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Install ",Object(r.b)("inlineCode",{parentName:"p"},"prosody"),":"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"wget https://packages.prosody.im/debian/pool/main/p/prosody-trunk/prosody-trunk_1nightly747-1~xenial_amd64.deb\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"dpkg -i prosody-trunk_1nightly747-1~xenial_amd64.deb\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Install ",Object(r.b)("inlineCode",{parentName:"li"},"jitsi-meet-tokens")," via command")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"apt-get install jitsi-meet-tokens\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Change the Prosody configuration to use ",Object(r.b)("a",{parentName:"p",href:"https://github.com/jitsi/lib-jitsi-meet/blob/master/doc/tokens.md"},"JSON web tokens")," for authentication. ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Make sure that the Prosody ",Object(r.b)("inlineCode",{parentName:"p"},"app_id")," and ",Object(r.b)("inlineCode",{parentName:"p"},"app_secret")," match corresponding ",Object(r.b)("inlineCode",{parentName:"p"},"appId")," and ",Object(r.b)("inlineCode",{parentName:"p"},"appSecret")," fields in the ",Object(r.b)("inlineCode",{parentName:"p"},"credentials/jitsi.json")," file of the cloned isle-server repository. ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Finally, the ",Object(r.b)("inlineCode",{parentName:"p"},"server")," field in ",Object(r.b)("inlineCode",{parentName:"p"},"credentials/jitsi.json")," should be set to the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet/blob/master/doc/quick-install.md#set-up-the-fully-qualified-domain-name-fqdn-optional"},"FQDN")," of the Jitsi Meet instance.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To change the default appearance of Jitsi meet, the ",Object(r.b)("inlineCode",{parentName:"p"},"interface_config.js")," file in ",Object(r.b)("inlineCode",{parentName:"p"},"/usr/share/jitsi-meet")," should be updated. Refer to the version of the file inside the ",Object(r.b)("inlineCode",{parentName:"p"},"etc/jitsi-meet")," folder of this repository for the Jitsi interface configuration used in ISLE."))),Object(r.b)("h2",{id:"jibri-for-jitsi-recordings--live-streaming-optional"},"Jibri for Jitsi Recordings + Live Streaming (optional)"),Object(r.b)("p",null,"The following video tutorial describes the steps involved in setting up one or more ",Object(r.b)("a",{parentName:"p",href:"https://github.com/jitsi/jibri"},"Jibri")," instances on other servers for recording Jitsi Meet sessions in ISLE:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://jitsi.org/news/learn-how-to-live-stream-and-record-on-your-jitsi-meet-install/"},"https://jitsi.org/news/learn-how-to-live-stream-and-record-on-your-jitsi-meet-install/")),Object(r.b)("p",null,"Newer versions of Chrome require an additional step. From the Jibri README.md file:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Add chrome managed policies file and set CommandLineFlagSecurityWarningsEnabled to false. It will hide warnings in Chrome. You can set it like so:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /etc/opt/chrome/policies/managed\necho '{ \"CommandLineFlagSecurityWarningsEnabled\": false }' >>/etc/opt/chrome/policies/managed/managed_policies.json\n")),Object(r.b)("p",null,"Troubleshooting: In case of Java errors encountered the logs in ",Object(r.b)("inlineCode",{parentName:"p"},"/var/log/jitsi/jibri"),", it is advised to ",Object(r.b)("a",{parentName:"p",href:"https://tecadmin.net/install-oracle-java-8-ubuntu-via-ppa/"},"install Java 8"),". "),Object(r.b)("p",null,"To set it as the default:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"sudo update-java-alternatives --list\nsudo update-java-alternatives --set java-1.8.0-openjdk-amd64\n")),Object(r.b)("h2",{id:"setting-up-jigasi-with-asteriskfreepbx-for-dial-in--dial-out-optional"},"Setting up Jigasi with Asterisk/FreePBX for Dial-in & Dial-Out (optional)"),Object(r.b)("p",null,"If you need the ability for participants to dial into ongoing video calls via their phone or to invite attendees via phone, Jigasi in conjunction with a SIP (session initiation protocol) Provider may be used. Asterisk and FreePBX, a GUI sitting on top of it, constitute a good option."),Object(r.b)("p",null,'The following series of tutorials called "Transparent Telephony" by Randall Degges provide a great overview of VOIP, how to setup Asterisk + FreePBX, and further background material:'),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://www.rdegges.com/2009/transparent-telephony-part-1-an-introduction/"},"An Introduction")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://www.rdegges.com/2010/transparent-telephony-part-2-installing-asterisk/"},"Installing Asterisk")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://www.rdegges.com/2010/transparent-telephony-part-3-making-and-receiving-calls-using-voip/"},"Making and Receiving Calls Using VoIP"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"net.java.sip.communicator.impl.protocol.sip.acc1403273890647.ACCOUNT_UID=SIP\\:<extension_id>@<host>:5060\nnet.java.sip.communicator.impl.protocol.sip.acc1403273890647.PASSWORD=<base64_encoded_secret}\nnet.java.sip.communicator.impl.protocol.sip.acc1403273890647.PROTOCOL_NAME=SIP\nnet.java.sip.communicator.impl.protocol.sip.acc1403273890647.SERVER_ADDRESS=<host>\nnet.java.sip.communicator.impl.protocol.sip.acc1403273890647.USER_ID=<extension_id>@<host>\n")),Object(r.b)("p",null,"We write the code for our extension to the file ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/asterisk/extensions_override_freepbx.conf"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'[ext-local]exten => 9999,1,Set(__RINGTIMER=${IF($["${DB(AMPUSER/9999/ringtimer)}" > "0"]?\n${DB(AMPUSER/9999/ringtimer)}:${RINGTIMER_DEFAULT})})\nexten => 9999,2(getmeeting),Playback(conf-getconfno)\nexten => 9999,3,Read(Pin,beep,20)\nexten => 9999,4,Verbose(result is: ${Pin})\nexten => 9999,5,SayDigits(${Pin},m)\nexten => 9999,6,AGI(jitsi_curling.sh,${Pin})\nexten => 9999,7,Verbose(result is: ${JITSI})\nexten => 9999,8,GotoIf($["${JITSI}" = "false}"]?invalidnum:joinmeeting)\nexten => 9999,9(invalidnum),Playback(conf-invalid)\nexten => 9999,10,Goto(getmeeting)\nexten => 9999,11(joinmeeting),Set(HASH(__SIPHEADERS,Jitsi-Conference-Room)=${JITSI})\nexten => 9999,12,Playback(auth-thankyou)\nexten => 9999,13,playback(conf-placeintoconf)\nexten => 9999,14,SayAlpha(${JITSI})\nexten => 9999,15,Macro(exten-vm,novm,9999,0,0,0)\nexten => 9999,16(dest),Set(__PICKUPMARK=)\nexten => 9999,17,Goto(${IVR_CONTEXT},return,1)\n')))}p.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=i,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||r;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);