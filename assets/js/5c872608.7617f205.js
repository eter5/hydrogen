"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[5466],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?o.createElement(y,s(s({ref:t},c),{},{components:r})):o.createElement(y,s({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},23:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={},s="Hydrogen examples",i={unversionedId:"tutorials/best-practices/examples",id:"tutorials/best-practices/examples",title:"Hydrogen examples",description:"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please migrate to Hydrogen 2.0 as soon as possible.",source:"@site/docs/tutorials/best-practices/examples.md",sourceDirName:"tutorials/best-practices",slug:"/tutorials/best-practices/examples",permalink:"/hydrogen-v1/tutorials/best-practices/examples",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"Accessibility best practices for Hydrogen",permalink:"/hydrogen-v1/tutorials/best-practices/accessibility"},next:{title:"Performance best practices for Hydrogen",permalink:"/hydrogen-v1/tutorials/best-practices/performance"}},l={},p=[{value:"How it works",id:"how-it-works",level:2},{value:"Official Hydrogen examples",id:"official-hydrogen-examples",level:2},{value:"Next steps",id:"next-steps",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"hydrogen-examples"},"Hydrogen examples"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Hydrogen 2.0 is out now. These archival Hydrogen 1.0 docs are provided only to assist developers during their upgrade process. Please ",(0,n.kt)("a",{parentName:"p",href:"https://shopify.dev/docs/custom-storefronts/hydrogen/migrate-hydrogen-remix"},"migrate to Hydrogen 2.0")," as soon as possible.")),(0,n.kt)("p",null,"Hydrogen includes a set of examples that demonstrate integrations and special use cases. This guide describes the available examples that you can explore."),(0,n.kt)("h2",{id:"how-it-works"},"How it works"),(0,n.kt)("p",null,"All Hydrogen examples are located in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Shopify/hydrogen/tree/main/examples/"},(0,n.kt)("inlineCode",{parentName:"a"},"/examples")," directory")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Shopify/hydrogen")," repository. Each example includes ready-to-use code that you can copy and paste."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note:\nIf you're looking for a full working implementation of a Hydrogen storefront that can be scaffolded using Shopify CLI, then refer to ",(0,n.kt)("a",{parentName:"p",href:"/tutorials/getting-started/templates/"},"Templates"),".")),(0,n.kt)("h2",{id:"official-hydrogen-examples"},"Official Hydrogen examples"),(0,n.kt)("p",null,"Shopify provides a variety of official Hydrogen examples. Check this repo's ",(0,n.kt)("a",{parentName:"p",href:"/examples"},"examples")," directory to see them."),(0,n.kt)("h2",{id:"next-steps"},"Next steps"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Learn about the different ",(0,n.kt)("a",{parentName:"li",href:"/tutorials/getting-started/templates/"},"templates")," that help you get started with Hydrogen."),(0,n.kt)("li",{parentName:"ul"},"Explore the source code of the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Shopify/hydrogen/tree/main/templates/demo-store"},"example Hydrogen demo store"),".")))}u.isMDXComponent=!0}}]);