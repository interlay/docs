"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[8935],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3518:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={title:"Initialization"},s=void 0,p={unversionedId:"ui-keyring/start/init",id:"ui-keyring/start/init",isDocsHomePage:!1,title:"Initialization",description:"To understand the initialization process, some background on the underlying libraries are required. For the Schnorrkel sr25519 a WASM library is used. This means that before sr25519 can be used, the WASM libraries needs to be loaded and initialized. This is not an issue when the keyring only uses ed25519.",source:"@site/docs/ui-keyring/start/init.md",sourceDirName:"ui-keyring/start",slug:"/ui-keyring/start/init",permalink:"/docs/ui-keyring/start/init",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/ui-keyring/start/init.md",tags:[],version:"current",frontMatter:{title:"Initialization"},sidebar:"reference",previous:{title:"Installation",permalink:"/docs/ui-keyring/start/install"},next:{title:"Accounts",permalink:"/docs/ui-keyring/start/accounts"}},d=[{value:"Create",id:"create",children:[],level:2},{value:"Using with the API",id:"using-with-the-api",children:[],level:2},{value:"Additional create options",id:"additional-create-options",children:[],level:2},{value:"Managing accounts",id:"managing-accounts",children:[],level:2}],u={toc:d};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To understand the initialization process, some background on the underlying libraries are required. For the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/schnorrkel"},"Schnorrkel sr25519")," a WASM library is used. This means that before ",(0,r.kt)("inlineCode",{parentName:"p"},"sr25519")," can be used, the WASM libraries needs to be loaded and initialized. This is not an issue when the keyring only uses ",(0,r.kt)("inlineCode",{parentName:"p"},"ed25519"),"."),(0,r.kt)("p",null,"If you have been through the ",(0,r.kt)("a",{parentName:"p",href:"../../keyring/start"},"base keyring documentation"),", you should be familiar with this process."),(0,r.kt)("h2",{id:"create"},"Create"),(0,r.kt)("p",null,"With this in mind, we take care of the initialization before we load our keyring, yielding -"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import keyring from '@polkadot/ui-keyring';\nimport { cryptoWaitReady } from '@polkadot/util-crypto';\n\ncryptoWaitReady().then(() => {\n  // load all available addresses and accounts\n  keyring.loadAll({ ss58Format: 42, type: 'sr25519' });\n\n  // additional initialization here, including rendering\n});\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"cryptoWaitReady()")," promise resolves as soon as the underlying WASM libraries have been made available. This is followed by ",(0,r.kt)("inlineCode",{parentName:"p"},"keyring.loadAll(...)")," which is the main initialization for the keyring, which"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"initializes the underlying ",(0,r.kt)("inlineCode",{parentName:"li"},"@polkadot/keyring")),(0,r.kt)("li",{parentName:"ul"},"loads all available accounts, addresses band contracts previously stored"),(0,r.kt)("li",{parentName:"ul"},"sets up the default address format with ",(0,r.kt)("inlineCode",{parentName:"li"},"42")," (This is the substrate development default. When not specified, this defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"42"),")"),(0,r.kt)("li",{parentName:"ul"},"defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"sr25519")," accounts (We can still add ",(0,r.kt)("inlineCode",{parentName:"li"},"ed25519")," accounts, more on this later. When not specified this defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"sr25519"),")")),(0,r.kt)("p",null,"Since you would generally want the keyring available before rendering the UI (although it can be done elsewhere, showing some info while loading), the following pattern is used in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/ui"},"our examples"),", both React and Vue shown here -"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"...\ncryptoWaitReady().then(() => {\n  keyring.loadAll({ ... });\n\n  // mount React and render\n  ReactDOM.render(<App />, document.getElementById('app'));\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"...\ncryptoWaitReady().then(() => {\n  keyring.loadAll({ ... });\n\n  // mount Vue and render\n  new Vue({ render: (h) => h(App) }).$mount('#app');\n});\n")),(0,r.kt)("h2",{id:"using-with-the-api"},"Using with the API"),(0,r.kt)("p",null,"When using the keyring together with the Polkadot-js API, the above would be adapted since the API itself already has a check for the WASM availability. In this case, we can adapt the interface to follow the following pattern -"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { ApiPromise } from '@polkadot/api';\nimport keyring from '@polkadot/ui-keyring';\n\n...\nApiPromise.create({ ... }).then(() => {\n  keyring.loadAll({ ... });\n\n  // additional initialization here, including rendering\n});\n")),(0,r.kt)("p",null,"The above pattern is how initialization is done in some applications such as the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"polkadot-js apps UI"),"."),(0,r.kt)("h2",{id:"additional-create-options"},"Additional create options"),(0,r.kt)("p",null,"In addition to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ss58Format")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," options (both optional), the following additional configuration options are available to the ",(0,r.kt)("inlineCode",{parentName:"p"},"loadAll(...)")," call -"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"filter?: (json: KeyringJson) => boolean")," - An optional filter that is executed on account loading. This allows us to check the loaded account and apply rules on it before including it in the keyring. Generally this would be used for advanced cases, any account that is filtered with ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," won't appear.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"genesisHash?: Hash")," - The ",(0,r.kt)("inlineCode",{parentName:"p"},"genesisHash")," of accounts to should be loaded. The meta property of the account ",(0,r.kt)("em",{parentName:"p"},"may")," contain a ",(0,r.kt)("inlineCode",{parentName:"p"},"genesisHash"),", when both are available and non-matching, the account will not be included. To populate this option, the easiest way is to pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"api.genesisHash")," property.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"isDevelopment?: boolean")," - This flag, when set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),' loads the keyring in development mode. This means that the default development accounts such as "Alice", "Bob", ..., "Ferdie" are included in the keyring. Generally you would only specify this when  actually connected to a development chain.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"store?: KeyringStore")," - An optional store to be used. By default the ",(0,r.kt)("inlineCode",{parentName:"p"},"ui-keyring")," will user browser localStorage, but with a specific store this behavior can be adjusted. For instance, for an extension we would default to the extension store (although localStorage is available) and for Electron apps, we may want to default to file storage."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// For file storage where available, e.g. in Electron environments.\n// This takes an path in the constructor, new FileStore('~./keyring-data')\n// import { FileStore } from '@polkadot/ui-keyring/stores';\n\n// When the store is not specified, it defaults to new BrowserStore()\n// import { BrowserStore } from '@polkadot/ui-keyring/stores';\n\n...\n// ExensionStore is available in https://github.com/polkadot-js/extension\nkeyring.loadAll({ store: new ExtensionStore(), ... });\n")),(0,r.kt)("h2",{id:"managing-accounts"},"Managing accounts"),(0,r.kt)("p",null,"With the keyring installed and ready for use, ",(0,r.kt)("a",{parentName:"p",href:"/docs/ui-keyring/start/accounts"},"next we will dive into adding and managing accounts"),"."))}c.isMDXComponent=!0}}]);