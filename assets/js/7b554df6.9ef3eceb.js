"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[1500],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>y});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=r.createContext({}),p=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(i.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),d=p(n),s=o,y=d["".concat(i,".").concat(s)]||d[s]||m[s]||a;return n?r.createElement(y,l(l({ref:e},c),{},{components:n})):r.createElement(y,l({ref:e},c))}));function y(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,l=new Array(a);l[0]=s;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u[d]="string"==typeof t?t:o,l[1]=u;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7518:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},l="BuyNowButton",u={unversionedId:"components/cart/buynowbutton",id:"components/cart/buynowbutton",title:"BuyNowButton",description:"The BuyNowButton component renders a button that adds an item to the cart and redirects the customer to checkout.",source:"@site/docs/components/cart/buynowbutton.md",sourceDirName:"components/cart",slug:"/components/cart/buynowbutton",permalink:"/hydrogen-v1/components/cart/buynowbutton",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"AddToCartButton",permalink:"/hydrogen-v1/components/cart/addtocartbutton"},next:{title:"CartCheckoutButton",permalink:"/hydrogen-v1/components/cart/cartcheckoutbutton"}},i={},p=[{value:"Example code",id:"example-code",level:2},{value:"Props",id:"props",level:2},{value:"Component type",id:"component-type",level:2}],c={toc:p},d="wrapper";function m(t){let{components:e,...n}=t;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"buynowbutton"},"BuyNowButton"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"BuyNowButton")," component renders a button that adds an item to the cart and redirects the customer to checkout."),(0,o.kt)("h2",{id:"example-code"},"Example code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {BuyNowButton} from '@shopify/hydrogen';\n\nexport function MyComponent() {\n  return (\n    <BuyNowButton quantity={1} variantId={'123'}>\n      Buy it now\n    </BuyNowButton>\n  );\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// Override `onClick` default behavior\nimport {BuyNowButton} from '@shopify/hydrogen';\n\nexport function MyComponent() {\n  const handleCustomOnClick = (event) => {\n    event.preventDefault(); // prevents button from triggering default behaviour\n    // custom click handler code\n  };\n\n  return (\n    <BuyNowButton quantity={1} variantId={'123'} onClick={handleCustomOnClick}>\n      Buy it now\n    </BuyNowButton>\n  );\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// Run an async action before the default `onClick` behaviour\nimport {BuyNowButton} from '@shopify/hydrogen';\n\nexport function MyComponent() {\n  const performed = useRef();\n  const buttonRef = useRef();\n\n  const handleCustomOnClick = async (event) => {\n    if (performed.current) {\n      performed.current = false;\n      return;\n    }\n\n    event.preventDefault(); // stop default behaviour\n    console.log(`Performing custom action...`);\n    await new Promise((r) => setTimeout(r, 500));\n    console.log(`Custom action complete!`);\n\n    performed.current = true; // prevents retriggering\n    buttonRef.current.click(); // trigger button default behaviour\n  };\n\n  return (\n    <BuyNowButton\n      quantity={1}\n      variantId={'123'}\n      onClick={handleCustomOnClick}\n      buttonRef={buttonRef}\n    >\n      Buy it now\n    </BuyNowButton>\n  );\n}\n")),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"quantity?"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:null},"The item quantity. Defaults to ",(0,o.kt)("inlineCode",{parentName:"td"},"1"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"variantId"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},"The ID of the variant.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"attributes?"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Object<<wbr>string, string<wbr>>[]")),(0,o.kt)("td",{parentName:"tr",align:null},"An array of cart line attributes that belong to the item being added to the cart.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"children"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ReactNode<<wbr>Imported<wbr>>")),(0,o.kt)("td",{parentName:"tr",align:null},"Any ",(0,o.kt)("inlineCode",{parentName:"td"},"ReactNode")," elements.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"onClick?"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(event?: React.MouseEvent<<wbr>HTMLButtonElement, MouseEvent<wbr>>) => void &#124; boolean;")),(0,o.kt)("td",{parentName:"tr",align:null},"A click event handler. Default behaviour triggers the click event, unless prevented.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"buttonRef?"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Ref<<wbr>HTMLButtonElement<wbr>> ")),(0,o.kt)("td",{parentName:"tr",align:null},"A reference to the underlying button.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"as?"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"React.ElementType")," with ",(0,o.kt)("inlineCode",{parentName:"td"},"button")," as default"),(0,o.kt)("td",{parentName:"tr",align:null},"Provides a React element or component to render as the underlying button. ",(0,o.kt)("br",null),"For accessibility compliance, use either a ",(0,o.kt)("inlineCode",{parentName:"td"},"button")," element or a component that renders an underlying button.")))),(0,o.kt)("h2",{id:"component-type"},"Component type"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"BuyNowButton")," component is a shared component, which means that it renders on both the server and the client. For more information about component types, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://shopify.dev/custom-storefronts/hydrogen/react-server-components"},"React Server Components"),"."))}m.isMDXComponent=!0}}]);