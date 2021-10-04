"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[726],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),h=i,f=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6604:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],s={id:"FAQ",title:"FAQ"},c=void 0,l={unversionedId:"keyring/FAQ",id:"keyring/FAQ",isDocsHomePage:!1,title:"FAQ",description:"The list will be updated/expanded as questions come up, dealing with some common issues that Keyring users find.",source:"@site/docs/keyring/FAQ.md",sourceDirName:"keyring",slug:"/keyring/FAQ",permalink:"/docs/keyring/FAQ",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/keyring/FAQ.md",tags:[],version:"current",frontMatter:{id:"FAQ",title:"FAQ"},sidebar:"reference",previous:{title:"Substrate Uri",permalink:"/docs/keyring/start/suri"},next:{title:"Overview",permalink:"/docs/util-crypto"}},p=[{value:"How do I extract the secretKey from the keypair?",id:"how-do-i-extract-the-secretkey-from-the-keypair",children:[]},{value:"My pair address does not match with my chain",id:"my-pair-address-does-not-match-with-my-chain",children:[]}],d={toc:p};function u(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The list will be updated/expanded as questions come up, dealing with some common issues that Keyring users find."),(0,o.kt)("h2",{id:"how-do-i-extract-the-secretkey-from-the-keypair"},"How do I extract the secretKey from the keypair?"),(0,o.kt)("p",null,"It is not possible. Each pair has a closure around the actual sensitive information and while it exposes functions to use the secret, it does not expose the secret itself. So while there is a ",(0,o.kt)("inlineCode",{parentName:"p"},".publicKey")," getter on a pair, the equivalent ",(0,o.kt)("inlineCode",{parentName:"p"},".secretKey")," does not exist. Doing this allows extra protection for a certain kinds of attacks and leaks of keys in all JS-based environments."),(0,o.kt)("p",null,"If the interfaces on the pair are not enough and explicit access to the secret is required, the best approach would be to explicitly derive the keys (e.g., the mnemonic). As example of an ",(0,o.kt)("a",{parentName:"p",href:"../util-crypto/examples/create-mnemonic"},"ed25519 secretKey extraction")," can be found in the util-crypto examples."),(0,o.kt)("h2",{id:"my-pair-address-does-not-match-with-my-chain"},"My pair address does not match with my chain"),(0,o.kt)("p",null,"By default the keyring will use the substrate generic 42 as an ss58Format ",(0,o.kt)("a",{parentName:"p",href:"/docs/keyring/start/create"},"when not specified"),". In these cases all addresses will start with a ",(0,o.kt)("inlineCode",{parentName:"p"},"5"),". To match with the address for a specific Substrate chain, pass the correct format as defined in the chain properties."),(0,o.kt)("p",null,"While the address ",(0,o.kt)("a",{parentName:"p",href:"/docs/keyring/start/ss58"},"represents the same underlying publicKey")," despite how it is represented, the human-readable format will be different based on the formatting provided."))}u.isMDXComponent=!0}}]);