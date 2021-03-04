(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(410)),o={id:"installation",title:"Server Installation Guide",sidebar_label:"Installation Guide"},l={unversionedId:"server/installation",id:"server/installation",isDocsHomePage:!1,title:"Server Installation Guide",description:"Setting up the Server",source:"@site/docs/server/installation.md",slug:"/server/installation",permalink:"/zh/docs/server/installation",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/server/installation.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1599766296,sidebar_label:"Installation Guide",sidebar:"docs",previous:{title:"Continuous Uniform Distribution",permalink:"/zh/docs/learn/distribution-uniform"},next:{title:"Jitsi",permalink:"/zh/docs/server/jitsi"}},s=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Installing Node.js",id:"installing-nodejs",children:[]},{value:"Installing MongoDB",id:"installing-mongodb",children:[]},{value:"Installing git",id:"installing-git",children:[]}]},{value:"Configuration",id:"configuration",children:[]},{value:"Setting up nginx",id:"setting-up-nginx",children:[]},{value:"Serving Compressed Files",id:"serving-compressed-files",children:[]},{value:"Start the ISLE server program",id:"start-the-isle-server-program",children:[]},{value:"Automatically restart on reboot",id:"automatically-restart-on-reboot",children:[]}],c={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"setting-up-the-server"},"Setting up the Server"),Object(i.b)("p",null,"This tutorial will walk you through the steps to set up an instance of the ISLE server program to serve your students. "),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("p",null,"Running the server requires the following software tools:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://git-scm.com/"},"git"),": version control"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js"),": JavaScript runtime (version ",Object(i.b)("inlineCode",{parentName:"li"},">= 10.0"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://mongodb.com"},"MongoDB"),": NoSQL document database")),Object(i.b)("p",null,"The ISLE server should run on a POSIX-based system (preferably a Linux distribution). For this guide, we assume that you are on the latest Ubuntu LTS release. The steps will be similar for other distributions (e.g., Debian or CentOS), but might need to be slightly adapted."),Object(i.b)("h3",{id:"installing-nodejs"},"Installing Node.js"),Object(i.b)("p",null,"We will use ",Object(i.b)("inlineCode",{parentName:"p"},"nvm")," (\u201cNode.js Version Manager\u201d) to install Node.js, the JavaScript runtime used by the ISLE server. ",Object(i.b)("inlineCode",{parentName:"p"},"nvm")," allows you to install the newest versions of Node.js (which are not currently available through ",Object(i.b)("inlineCode",{parentName:"p"},"apt"),") and manage multiple installations at once. Following the official ",Object(i.b)("inlineCode",{parentName:"p"},"nvm")," ",Object(i.b)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm#installing-and-updating"},"documentation"),", we can use ",Object(i.b)("inlineCode",{parentName:"p"},"curl")," or ",Object(i.b)("inlineCode",{parentName:"p"},"wget")," to download and run a script to install ",Object(i.b)("inlineCode",{parentName:"p"},"nvm")," in your home directory (specifically to ",Object(i.b)("inlineCode",{parentName:"p"},"~/.nvm"),"):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash\n")),Object(i.b)("p",null,"To use ",Object(i.b)("inlineCode",{parentName:"p"},"nvm")," right away, you need to either log out and in again or source the ",Object(i.b)("inlineCode",{parentName:"p"},"~/.profile")," file again:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ source ~/.profile\n")),Object(i.b)("p",null,"To ensure that ",Object(i.b)("inlineCode",{parentName:"p"},"nvm")," is up and running, we can print its version"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"nvm --version\n")),Object(i.b)("p",null,"We can now install the latest LTS release of Node.js via"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ nvm install --lts\n")),Object(i.b)("p",null,"(Tip: running ",Object(i.b)("inlineCode",{parentName:"p"},"nvm ls-remote")," will print a list of all available versions)"),Object(i.b)("p",null,"This will also install ",Object(i.b)("inlineCode",{parentName:"p"},"npm"),", the official package manager used by Node.js to install external dependencies."),Object(i.b)("h3",{id:"installing-mongodb"},"Installing MongoDB"),Object(i.b)("p",null,"Let's first run the following command to update the packages list to ensure that you have the most recent version of the listings:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt update\n")),Object(i.b)("p",null,"To install MongoDB, we can use ",Object(i.b)("inlineCode",{parentName:"p"},"apt")," since Ubuntu's package repositories include an up-to-date version of MongoDB:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt install -y mongodb\n")),Object(i.b)("p",null,"After installation, the database server should automatically be started. To check, run"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ sudo systemctl status mongodb\n")),Object(i.b)("h3",{id:"installing-git"},"Installing git"),Object(i.b)("p",null,"You can install Git by running"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt-get install git-core\n")),Object(i.b)("p",null,"Afterwards, you can clone the git repository to acquire the source code:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/isle-project/isle-server\n")),Object(i.b)("p",null,"After changing into the new directory"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ cd isle-server\n")),Object(i.b)("p",null,"we can install its external dependencies via"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ npm install\n")),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"You will now need to make a few changes to the contents of the ",Object(i.b)("inlineCode",{parentName:"p"},"isle-server")," directory. For example, you might have noticed that the files in the ",Object(i.b)("inlineCode",{parentName:"p"},"credentials")," folder have been encrypted (or rather ",Object(i.b)("a",{parentName:"p",href:"https://github.com/elasticdog/transcrypt"},"transcrypted"),") to protect sensitive information. Please get in touch in case you would like to get access to our configuration."),Object(i.b)("p",null,"Otherwise, you want to override the JSON files in this folder. "),Object(i.b)("p",null,"By default, we use ",Object(i.b)("a",{parentName:"p",href:"https://www.mailgun.com/"},"Mailgun")," to send email notifications. The ",Object(i.b)("strong",{parentName:"p"},"mailgun.json")," file should look as follows:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "user": "<user>",\n    "pass": "<pass>"\n}\n')),Object(i.b)("p",null,"where ",Object(i.b)("inlineCode",{parentName:"p"},"<user>")," and ",Object(i.b)("inlineCode",{parentName:"p"},"<pass>")," are your ",Object(i.b)("a",{parentName:"p",href:"https://www.mailgun.com/"},"Mailgun")," credentials."),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"tokens.json")," file is a JSON file with two keys:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "writeAccess": "<instructor_key>",\n    "jwtKey": "<passphrase>"\n}\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"<instructor_key>")," should be replaced with a chosen key that can be handed to faculty to obtain instructor access to the server on the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/isle-project/isle-dashboard"},"isle-dashboard"),". The ",Object(i.b)("inlineCode",{parentName:"p"},"<passphrase>")," can be any confidential string. It is used to sign the JSON web tokens used for user authentication."),Object(i.b)("p",null,"Finally, you want to change the ",Object(i.b)("inlineCode",{parentName:"p"},"etc/config.json")," file. It looks like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{\n    "namespacesDirectory": "./../public",\n    "server": "https://isle.heinz.cmu.edu",\n    "certificate": "/srv/ssl/isle_heinz_cmu_edu_cert.cer",\n    "key": "/srv/ssl/isle.heinz.cmu.edu.key",\n    "mongodb": "mongodb://localhost/isle-db"\n}\n')),Object(i.b)("p",null,"You should change the ",Object(i.b)("inlineCode",{parentName:"p"},"server")," field to the server address from where your requests will be processed. Since ISLE requires HTTPS, you will need a SSL certificate and key. The paths for the certificate and key should be entered into the ",Object(i.b)("inlineCode",{parentName:"p"},"certificate")," and ",Object(i.b)("inlineCode",{parentName:"p"},"key")," fields, respectively. You will need to receive these files from a certificate authority. ",Object(i.b)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let's Encrypt")," is a popular certificate authority which generates certificates for free. You can leave the ",Object(i.b)("inlineCode",{parentName:"p"},"mongodb")," field as-is unless you desire to host your MongoDB instance on a separate database server than your ISLE application server."),Object(i.b)("h2",{id:"setting-up-nginx"},"Setting up nginx"),Object(i.b)("p",null,"We suggest to use ",Object(i.b)("a",{parentName:"p",href:"https://www.nginx.com/"},"nginx")," as the web server for the ISLE server program. You can obtain a recent version of the software via ",Object(i.b)("inlineCode",{parentName:"p"},"apt"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt install nginx\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"isle-server")," repository contains server configuration files for use with ",Object(i.b)("a",{parentName:"p",href:"https://www.nginx.com/"},"nginx")," in the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/isle-project/isle-server/tree/master/etc/nginx"},"/etc/nginx")," sub-directory. To use the contents of this configuration directory in place of the existing ",Object(i.b)("a",{parentName:"p",href:"https://www.nginx.com/"},"nginx")," confinpm install -g npmguration directory, you can copy the contents of the configuration directory to ",Object(i.b)("inlineCode",{parentName:"p"},"/etc"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ sudo cp -R /path/to/isle-server/etc/nginx /etc/nginx\n")),Object(i.b)("p",null,"Warning: you might want to backup an existing ",Object(i.b)("inlineCode",{parentName:"p"},"/etc/nginx")," directory first via ",Object(i.b)("inlineCode",{parentName:"p"},"sudo mv /etc/nginx /etc/nginx-backup"),"."),Object(i.b)("p",null,"After editing the ISLE server configuration located in ",Object(i.b)("inlineCode",{parentName:"p"},"sites-available")," to point to the correct certificate locations and changing the server name, create a symlink to enable it:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ sudo ln -s /etc/nginx/sites-available/isle /etc/nginx/sites-enabled/isle\n")),Object(i.b)("p",null,"Finally, restart ",Object(i.b)("a",{parentName:"p",href:"https://www.nginx.com/"},"nginx"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ sudo service nginx restart\n")),Object(i.b)("h2",{id:"serving-compressed-files"},"Serving Compressed Files"),Object(i.b)("p",null,"To reduce the amount of data sent over the wire, we enable the lossless brotli compression algorithm, a successor to gzip. The latter is newer and not supported in ",Object(i.b)("a",{parentName:"p",href:"https://www.nginx.com/"},"nginx")," by default. To install brotli, run the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt-add-repository -y ppa:hda-me/nginx-stable\n$ sudo apt-get update\n$ sudo apt-get install brotli nginx nginx-module-brotli\n")),Object(i.b)("p",null,"To enable the Brotli module, we uncomment the following commands in ",Object(i.b)("inlineCode",{parentName:"p"},"/etc/nginx/nginx.conf"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"    # ngx_brotli filter module - used to compress responses on-the-fly.\n    load_module modules/ngx_http_brotli_filter_module.so;\n    # ngx_brotli static module - used to serve pre-compressed files.\n    # Both modules could be used separately\n    load_module modules/ngx_http_brotli_static_module.so;\n")),Object(i.b)("p",null,"We can then add Brotli compression by adding the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"brotli on;\nbrotli_static on;\nbrotli_comp_level 11;\nbrotli_types text/plain text/css text/javascript application/javascript text/xml application/xml image/svg+xml application/json;\n")),Object(i.b)("h2",{id:"start-the-isle-server-program"},"Start the ISLE server program"),Object(i.b)("p",null,"Navigate again into the isle-server directory. To start the server program in the background, we advise to use a program like ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Unitech/pm2"},"pm2")," to ensure that the process runs continuously. As ",Object(i.b)("inlineCode",{parentName:"p"},"sudo"),", install it with the command"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm install pm2 -g\n")),Object(i.b)("p",null,"With ",Object(i.b)("inlineCode",{parentName:"p"},"pm2"),", we can start the server as follows:  "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"pm2 start lib/index.js --name isle-server\n")),Object(i.b)("h2",{id:"automatically-restart-on-reboot"},"Automatically restart on reboot"),Object(i.b)("p",null,"To restart the ISLE server on system reboot, initialize the ",Object(i.b)("inlineCode",{parentName:"p"},"pm2")," startup script via:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"pm2 startup\n")),Object(i.b)("p",null,"You can save the currently running ",Object(i.b)("inlineCode",{parentName:"p"},"pm2")," processes to the startup script via"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"pm2 save\n")),Object(i.b)("p",null,"The ISLE server should now be up and running and accept requests!"),Object(i.b)("p",null,"Afterwards, you will want to install the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/isle-project/isle-dashboard"},"isle-dashboard")," on your remote server and locally install the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/isle-project/isle-editor"},"isle-editor")," to author lessons."))}b.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);