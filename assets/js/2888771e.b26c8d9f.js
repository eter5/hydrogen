"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[977],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return n?o.createElement(k,a(a({ref:t},c),{},{components:n})):o.createElement(k,a({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const s={},a="useSession",i={unversionedId:"hooks/framework/usesession",id:"hooks/framework/usesession",title:"useSession",description:"The useSession hook reads session data in server components.",source:"@site/docs/hooks/framework/usesession.md",sourceDirName:"hooks/framework",slug:"/hooks/framework/usesession",permalink:"/hydrogen-v1/hooks/framework/usesession",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"useRouteParams",permalink:"/hydrogen-v1/hooks/framework/userouteparams"},next:{title:"fetchSync",permalink:"/hydrogen-v1/hooks/global/fetchsync"}},l={},p=[{value:"Example code",id:"example-code",level:2},{value:"Return value",id:"return-value",level:2},{value:"Considerations",id:"considerations",level:2},{value:"Related components",id:"related-components",level:2},{value:"Related framework topics",id:"related-framework-topics",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"usesession"},"useSession"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useSession")," hook reads session data in server components."),(0,r.kt)("h2",{id:"example-code"},"Example code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="component.server.jsx"',title:'"component.server.jsx"'},"import {useSession} from '@shopify/hydrogen';\nexport default function ServerComponent() {\n  const {countryCode} = useSession();\n  return <div>The country code: {countryCode}</div>;\n}\n")),(0,r.kt)("h2",{id:"return-value"},"Return value"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useSession")," hook returns all data within the current session. The return type is an object with key value pairs."),(0,r.kt)("h2",{id:"considerations"},"Considerations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can't use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useSession")," hook in client components. If your client components need access to session data, then get the data within server components and explicitly pass the data to client components."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Caution:\nSessions typically contain privileged data. Avoid passing all session data to the client."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Don't update session data within server or client components. Instead, ",(0,r.kt)("a",{parentName:"p",href:"https://shopify.dev/docs/custom-storefronts/hydrogen/sessions/manage-sessions#reading-and-updating-session-data"},"update session data within API routes"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useSession")," hook will suspend when its called. The length of the suspense depends on where the session data is stored."))),(0,r.kt)("h2",{id:"related-components"},"Related components"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/components/framework/cookie/"},(0,r.kt)("inlineCode",{parentName:"a"},"Cookie"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/components/framework/filesessionstorage/"},(0,r.kt)("inlineCode",{parentName:"a"},"FileSessionStorage"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/components/framework/cookiesessionstorage/"},(0,r.kt)("inlineCode",{parentName:"a"},"CookieSessionStorage"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/components/framework/memorysessionstorage/"},(0,r.kt)("inlineCode",{parentName:"a"},"MemorySessionStorage")))),(0,r.kt)("h2",{id:"related-framework-topics"},"Related framework topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://shopify.dev/custom-storefronts/hydrogen/sessions"},"Session management"))))}m.isMDXComponent=!0}}]);