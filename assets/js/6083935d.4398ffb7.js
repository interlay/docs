"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[4898],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},298:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Overview",slug:"/api-contract/start"},s=void 0,p={unversionedId:"api-contract/start/intro",id:"api-contract/start/intro",isDocsHomePage:!1,title:"Overview",description:'These sections should provide you with all the information needed to install the @polkadot/api-contract package, understand the structure of the interfaces and allow you to start using it. For existing users this really should be titled "Things I wish I knew before I started using contracts" - it really aims to close the gap to allow anybody to get to grips with using the package.',source:"@site/docs/api-contract/start/intro.md",sourceDirName:"api-contract/start",slug:"/api-contract/start",permalink:"/docs/api-contract/start",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api-contract/start/intro.md",tags:[],version:"current",frontMatter:{title:"Overview",slug:"/api-contract/start"},sidebar:"reference",previous:{title:"Overview",permalink:"/docs/api-contract"},next:{title:"Installation",permalink:"/docs/api-contract/start/install"}},c=[{value:"ES2015 Usage and examples",id:"es2015-usage-and-examples",children:[],level:2},{value:"What this is not",id:"what-this-is-not",children:[],level:2},{value:"Help us help others",id:"help-us-help-others",children:[],level:2},{value:"Ready? Steady? Go!",id:"ready-steady-go",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"These sections should provide you with all the information needed to install the ",(0,o.kt)("inlineCode",{parentName:"p"},"@polkadot/api-contract"),' package, understand the structure of the interfaces and allow you to start using it. For existing users this really should be titled "Things I wish I knew before I started using contracts" - it really aims to close the gap to allow anybody to get to grips with using the package.'),(0,o.kt)("h2",{id:"es2015-usage-and-examples"},"ES2015 Usage and examples"),(0,o.kt)("p",null,"Before we jump into the guide, be aware that in all cases we are using ES2015, including using things like ",(0,o.kt)("inlineCode",{parentName:"p"},"async"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"await"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," and others. Depending on your environment, this may require some adjustments."),(0,o.kt)("p",null,"While we are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," naked in all examples (this removes boilerplate and allows us to focus on the actual libraries), and unless your environment supports top-level await, it will need to be wrapped in an ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," block. So basically to make in run-able we should wrap all samples inside a ",(0,o.kt)("inlineCode",{parentName:"p"},"async function main () { ... }")," and then just call ",(0,o.kt)("inlineCode",{parentName:"p"},"main().then(() => console.log('completed'))"),"."),(0,o.kt)("p",null,"In the case of Node.js you would change the ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," into ",(0,o.kt)("inlineCode",{parentName:"p"},"require"),", i.e."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Import\nconst { BlueprintPromise } = require('@polkadot/api-contract');\n...\n")),(0,o.kt)("p",null,"While Node.js as of later versions supports the ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," syntax, we are only exporting CommonJS modules, hence the need for require."),(0,o.kt)("h2",{id:"what-this-is-not"},"What this is not"),(0,o.kt)("p",null,"This is not line-by-line documentation of all the existing function calls available, nor it is tied to a specific environment. There will be some things in the Keyring that are probably not covered, which brings us to the next point..."),(0,o.kt)("h2",{id:"help-us-help-others"},"Help us help others"),(0,o.kt)("p",null,"If you spot gaps in the information provided, or are uncertain about any specific area, please do ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/docs/issues"},"log an issue")," or if you are that way inclined, make a pull-request. We really want to have good documentation in these areas and allow people to be productive right from the start."),(0,o.kt)("h2",{id:"ready-steady-go"},"Ready? Steady? Go!"),(0,o.kt)("p",null,"Let's get started... ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-contract/start/install"},"What should be installed, and how should we do it?")))}d.isMDXComponent=!0}}]);