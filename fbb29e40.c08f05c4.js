(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),o=(n(0),n(180)),i={},s={id:"conflux-portal/03_API_Reference/06_Signing_Data/00_Introduction",title:"00_Introduction",description:"# Signing Data with ConfluxPortal",source:"@site/docs/conflux-portal/03_API_Reference/06_Signing_Data/00_Introduction.md",permalink:"/docs/conflux-portal/03_API_Reference/06_Signing_Data/00_Introduction",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/conflux-portal/03_API_Reference/06_Signing_Data/00_Introduction.md",lastUpdatedBy:"yqrashawn",lastUpdatedAt:1584096653},c=[{value:"A Brief History",id:"a-brief-history",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"signing-data-with-confluxportal"},"Signing Data with ConfluxPortal"),Object(o.b)("p",null,"If you'd like to jump to some working signature examples, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/danfinlay/js-eth-personal-sign-examples"}),"you can visit this\nrepository"),". "),Object(o.b)("p",null,"If you'd like to read our JavaScript implementations of these methods, they are\nall available in the npm package\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/MetaMask/eth-sig-util"}),"eth-sig-util"),". "),Object(o.b)("p",null,"Note that ConfluxPortal supports signing transactions with Trezor and Ledger\nhardware wallets. These hardware wallets currently only support signing data\nusing the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./Personal_Sign"}),Object(o.b)("inlineCode",{parentName:"a"},"personal_sign"))," method. If you have trouble logging\nin to a website or dapp when using a Ledger or Trezor, the site may be\nrequesting you sign data via an unsupported method, in which case we recommend\nusing your standard ConfluxPortal account.  "),Object(o.b)("h2",{id:"a-brief-history"},"A Brief History"),Object(o.b)("p",null,"There are currently five signing methods in ConfluxPortal, and you might wonder\nthe history of these methods. Studying the history of these methods has some\nlessons in it for the emergent lessons of decentralized standards emergence. Our\ncurrent five methods are: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"./CFX_Sign"}),Object(o.b)("inlineCode",{parentName:"a"},"cfx_sign"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"./Personal_Sign"}),Object(o.b)("inlineCode",{parentName:"a"},"personal_sign"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"./Sign_Typed_Data_v1"}),Object(o.b)("inlineCode",{parentName:"a"},"signTypedData"))," (currently identical to ",Object(o.b)("inlineCode",{parentName:"li"},"signTypedData_v1"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"./Sign_Typed_Data_v1"}),Object(o.b)("inlineCode",{parentName:"a"},"signTypedData_v1"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"./Sign_Typed_Data_v3"}),Object(o.b)("inlineCode",{parentName:"a"},"signTypedData_v3")))),Object(o.b)("p",null,"There are likely to be many more over time. When MetMask first started, the\nProvider API wasn't designed to be exposed to untrusted websites, and so some\nconsiderations weren't taken as seriously as they were later. "),Object(o.b)("p",null,"In particular, the method ",Object(o.b)("inlineCode",{parentName:"p"},"cfx_sign")," is an open-ended signing method that allows\nsigning an arbitrary hash, which means it can be used to sign transactions, or\nany other data, making it a dangerous phishing risk. "),Object(o.b)("p",null,"For this reason, we make this method show the most frightening possible message\nto the user, and generally discourage using this method in production. However,\nsome applications (usually admin panels internal to teams) use this method for\nthe sake of its ease of use, and so we have continued to support it for the sake\nof not breaking the workflows of active projects. "),Object(o.b)("p",null,"Eventually, the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ethereum/go-ethereum/pull/2940"}),Object(o.b)("inlineCode",{parentName:"a"},"personal_sign"),"\nspec")," was proposed, which added\na prefix to the data so it could not impersonate transactions. We also made this\nmethod able to display human readable text when UTF-8 encoded, making it a\npopular choice for site logins. "),Object(o.b)("p",null,"However, the text-prefix made those signatures expensive to verify on-chain, and\nso with the help of the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://0xproject.com/"}),"0xProtocol")," team and\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://spankchain.com/"}),"SpankChain"),", the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://eips.ethereum.org/EIPS/eip-712"}),"EIP\n712")," spec was written. "),Object(o.b)("p",null,"The strange part of EIP 712, and this decentralized standards ecosystem, is that\nthe proposal changed several times while retaining the same EIP. This means what\nwe initially implemented as ",Object(o.b)("inlineCode",{parentName:"p"},"signTypedData")," was the earliest proposed version,\nwhile other groups implemented later versions under the same method name. "),Object(o.b)("p",null,"To avoid compatibility issues between clients, we recommend using the\nhard-versioned method names ",Object(o.b)("inlineCode",{parentName:"p"},"signTypedData_v1")," and ",Object(o.b)("inlineCode",{parentName:"p"},"signTypedData_v3"),". The\nmissing ",Object(o.b)("inlineCode",{parentName:"p"},"v2")," represents an intermediary design that was implemented by the\nCipher browser, so that we have room to implement it if there is ever enough\ndeveloper demand for it. "),Object(o.b)("p",null,"In the future, it may help to have method names include a hash of their exact\nproposal, since in a decentralized ecosystem, there is no absolute source of\ntruth of what a given name should map to. Instead, we are forced to invent new\npatterns of collaboration, where we can drive forward and innovate, while\nsimultaneously avoiding creating a brittle ecosystem by changing our meanings\nout from under the words. "),Object(o.b)("p",null,"I hope this has been a useful introduction to the history of our signing\nmethods! "))}p.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,b=d["".concat(i,".").concat(h)]||d[h]||u[h]||o;return n?r.a.createElement(b,s({ref:t},l,{components:n})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);