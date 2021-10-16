"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[6691],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),u=a,f=h["".concat(l,".").concat(u)]||h[u]||d[u]||i;return n?o.createElement(f,r(r({ref:t},p),{},{components:n})):o.createElement(f,r({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1993:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],s={title:"FAQ"},l=void 0,c={unversionedId:"extension/FAQ",id:"extension/FAQ",isDocsHomePage:!1,title:"FAQ",description:"The list will be updated/expanded as questions come up.",source:"@site/docs/extension/FAQ.md",sourceDirName:"extension",slug:"/extension/FAQ",permalink:"/docs/extension/FAQ",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/extension/FAQ.md",tags:[],version:"current",frontMatter:{title:"FAQ"},sidebar:"reference",previous:{title:"Cookbook",permalink:"/docs/extension/cookbook"}},p=[{value:"How to report a phishing website so that the extension can warn users?",id:"how-to-report-a-phishing-website-so-that-the-extension-can-warn-users",children:[],level:2},{value:"How to help with the translation of the extension&#39;s interface?",id:"how-to-help-with-the-translation-of-the-extensions-interface",children:[],level:2},{value:"I want to send funds directly from the extension.",id:"i-want-to-send-funds-directly-from-the-extension",children:[],level:2},{value:"My addresses display differently on the extension vs a dapp.",id:"my-addresses-display-differently-on-the-extension-vs-a-dapp",children:[],level:2},{value:"What does it mean to derive an account?",id:"what-does-it-mean-to-derive-an-account",children:[],level:2},{value:"Why can&#39;t I import an account with a hex-encoded private key?",id:"why-cant-i-import-an-account-with-a-hex-encoded-private-key",children:[],level:2}],d={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The list will be updated/expanded as questions come up."),(0,i.kt)("h2",{id:"how-to-report-a-phishing-website-so-that-the-extension-can-warn-users"},"How to report a phishing website so that the extension can warn users?"),(0,i.kt)("p",null,"The extension fetches the list of denied website from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/phishing"},"https://github.com/polkadot-js/phishing"),"\nrepository. To help populate this list, please submit a pull request by editing ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/phishing/edit/master/all.json"},"all.json"),"\nand adding any new sites in alphabetical order.",(0,i.kt)("br",{parentName:"p"}),"\n","Alternatively, you can ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/phishing/issues/new"},"submit an issue"),"\nto mention any new website. "),(0,i.kt)("h2",{id:"how-to-help-with-the-translation-of-the-extensions-interface"},"How to help with the translation of the extension's interface?"),(0,i.kt)("p",null,"To add a new language, you can submit a PR to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/extension"},"extension's repository"),".\nStart by creating a new directory in ",(0,i.kt)("inlineCode",{parentName:"p"},"extension/packages/extension/public/locales/"),' named after the language code you\nwish to add (e.g "es", for spanish).',(0,i.kt)("br",{parentName:"p"}),"\n","Copy the file ",(0,i.kt)("inlineCode",{parentName:"p"},"translation.json")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/extension/blob/master/packages/extension/public/locales/en/translation.json"},"from the english directory")," to the newly created directory and fill in the blanks.\nTake a look at the other translation files to see how it works.",(0,i.kt)("br",{parentName:"p"}),"\n","Finally, add the new language in the selection menu by adding its name and code to the array returned by the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/extension/blob/master/packages/extension-ui/src/util/getLanguageOptions.ts#L12-L27"},"getLanguageOptions"),".",(0,i.kt)("br",{parentName:"p"}),"\n","Once your PR is submitted and approved, the new language will be available in the next release of the extension."),(0,i.kt)("h2",{id:"i-want-to-send-funds-directly-from-the-extension"},"I want to send funds directly from the extension."),(0,i.kt)("p",null,"The extension is not meant to be a full wallet replacement. It tries to focus on pure account management\nwhile making this as smooth as possible. The extension simply makes the stored/imported accounts available\nto any dApp that can perform transfers, allows you to vote on democracy proposals, and helps you participate\nin any features available on Polkadot and Substrate. We really aim to keep this singular account-only focus\nwith no network connectivity, leaving the hard-work of understanding chains and their intricacies over to over\nto wallets such as ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"polkadot-js/apps"),"."),(0,i.kt)("h2",{id:"my-addresses-display-differently-on-the-extension-vs-a-dapp"},"My addresses display differently on the extension vs a dapp."),(0,i.kt)("p",null,'Unlike a dapp, the extension itself does not connect to a network. The addresses are formatted with a\nnetwork-specific prefix, which on a dapp, is retrieved upon connection from the chain properties. The\nunderlying public keys can be the same, but based on the address formatting, the display could be different.\nThis does not affect operation at all. You can choose which format to display the addresses in your extension\nvia the "Options" screen.'),(0,i.kt)("h2",{id:"what-does-it-mean-to-derive-an-account"},"What does it mean to derive an account?"),(0,i.kt)("p",null,"We can imagine that accounts are stored as a tree. It allows us to structure accounts by our own needs.\nThe root account is created at first and all the new ones will be its children by default. If we want to\nderive from other accounts, it can be done by selecting Derive New Account option in the parent account\u2019s\ncontext menu. Before deriving an account, the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-signer/wiki/HDKD-on-Parity-Signer#the-form-of-path"},"HDKD derivation path"),"\ncan be provided - it is a great tool that could be used for further account structuring."),(0,i.kt)("p",null,"The format of a derivation path is ",(0,i.kt)("inlineCode",{parentName:"p"},"//<hard>/<soft>///<password>")," where"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"//hard")," means that the connection between accounts is not \u201cvisible\u201d for public addresses."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/soft")," connects accounts in a manner that can be proven."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"///password")," provides an additional (optional) encryption.")),(0,i.kt)("h2",{id:"why-cant-i-import-an-account-with-a-hex-encoded-private-key"},"Why can't I import an account with a hex-encoded private key?"),(0,i.kt)("p",null,"This is a deliberate choice since mnemonic phrases are easier to write down, to memorize or type in a field.\nThey have a checksum (not every 12/24 words list is a valid mnemonic) and constitute a much better means of\nholding un-encrypted information. Therefore, this extension does not and will not have the functionality to\nrecover an account from a hex seed phrase."))}h.isMDXComponent=!0}}]);