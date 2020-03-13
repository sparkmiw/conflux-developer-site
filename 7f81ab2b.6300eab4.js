(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(1),o=n(9),a=(n(0),n(180)),c={},i={id:"conflux-portal/03_API_Reference/02_JSON_RPC_API",title:"02_JSON_RPC_API",description:"# The Conflux RPC API",source:"@site/docs/conflux-portal/03_API_Reference/02_JSON_RPC_API.md",permalink:"/docs/conflux-portal/03_API_Reference/02_JSON_RPC_API",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/conflux-portal/03_API_Reference/02_JSON_RPC_API.md",lastUpdatedBy:"yqrashawn",lastUpdatedAt:1584095669},p=[],u={rightToc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"the-conflux-rpc-api"},"The Conflux RPC API"),Object(a.b)("p",null,"ConfluxPortal uses the ",Object(a.b)("inlineCode",{parentName:"p"},"conflux.sendAsync()")," (and soon, ",Object(a.b)("inlineCode",{parentName:"p"},"conflux.send()"),") API to\nwrap an RPC API which is based on an interface exposed by all Conflux clients,\nwith some extra methods that are provided by MetaMask, as a key-holding signer.\nYou can look up how to pass these methods to the ",Object(a.b)("inlineCode",{parentName:"p"},"window.conflux")," object\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"./Conflux_Provider"}),"here"),". "),Object(a.b)("p",null,"This document is a cross-post of ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ethereum/EIPs/pull/1474/"}),"EIP\n1474"),", which aims to standardize the\ndeclaration of this interface. "),Object(a.b)("p",null,"For the full API, please see ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1474.md"}),"EIP\n1474"),". "))}l.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(n),b=r,d=s["".concat(c,".").concat(b)]||s[b]||f[b]||a;return n?o.a.createElement(d,i({ref:t},u,{components:n})):o.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);