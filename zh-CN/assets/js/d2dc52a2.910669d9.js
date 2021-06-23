(self.webpackChunk=self.webpackChunk||[]).push([[2937],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>s,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return r?a.createElement(h,o(o({ref:t},s),{},{components:r})):a.createElement(h,o({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>c,toc:()=>s,default:()=>m});var a=r(22122),n=r(19756),i=(r(67294),r(3905)),o=["components"],l={id:"learn-implementers-guide",title:"Parachain Implementer's Guide",sidebar_label:"Parachain Implementer's Guide"},p=void 0,c={unversionedId:"learn-implementers-guide",id:"learn-implementers-guide",isDocsHomePage:!1,title:"Parachain Implementer's Guide",description:"The Parachain Implementer's Guide is still heavily work in progress and maintained by Parity.",source:"@site/../docs/learn-implementers-guide.md",sourceDirName:".",slug:"/learn-implementers-guide",permalink:"/zh-CN/docs/learn-implementers-guide",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-implementers-guide.md",version:"current",lastUpdatedBy:"Nam Hoang Le",lastUpdatedAt:1624431355,formattedLastUpdatedAt:"2021/6/23",frontMatter:{id:"learn-implementers-guide",title:"Parachain Implementer's Guide",sidebar_label:"Parachain Implementer's Guide"},sidebar:"docs",previous:{title:"Parachain Development Kits (PDKs)",permalink:"/zh-CN/docs/build-pdk"},next:{title:"Cumulus",permalink:"/zh-CN/docs/build-cumulus"}},s=[{value:"Live version",id:"live-version",children:[]},{value:"Further Resources",id:"further-resources",children:[]}],u={toc:s};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Parachain Implementer's Guide is still heavily work in progress and maintained by Parity."),(0,i.kt)("h2",{id:"live-version"},"Live version"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://w3f.github.io/parachain-implementers-guide/"},(0,i.kt)("strong",{parentName:"a"},"The live version"))," is built from the source\nlocated in the official\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/tree/master/roadmap/implementers-guide"},"Polkadot repository"),"."),(0,i.kt)("h2",{id:"further-resources"},"Further Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/polkadot-network/the-path-of-a-parachain-block-47d05765d7a"},"The Path of a Parachain Block"),"\nis a Medium article that dives into how parachains work."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.crowdcast.io/e/polkadot-path-of-a-parachain-block?utm_source=profile&utm_medium=profile_web&utm_campaign=profile"},"Video - The Path of a Parachain Block")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkadot.network/polkadot-parachain-slots/"},"Polkadot Parachain Slots"),", a Medium article\nthat explores how slots work in parachains."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=fYc1yolanoE"},"Video - How to become a parachain on Polkadot"))))}m.isMDXComponent=!0}}]);