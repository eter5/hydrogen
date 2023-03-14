"use strict";(self.webpackChunkdocs_v_1=self.webpackChunkdocs_v_1||[]).push([[386],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=d(n),u=o,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:o,i[1]=p;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={},i="Video",p={unversionedId:"components/primitive/video",id:"components/primitive/video",title:"Video",description:"The Video component renders a video for the Storefront API's Video object.",source:"@site/docs/components/primitive/video.md",sourceDirName:"components/primitive",slug:"/components/primitive/video",permalink:"/hydrogen-v1/components/primitive/video",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"hydrogen",previous:{title:"ShopPayButton",permalink:"/hydrogen-v1/components/primitive/shoppaybutton"},next:{title:"ProductOptionsProvider",permalink:"/hydrogen-v1/components/product-variant/productoptionsprovider"}},l={},d=[{value:"Example code",id:"example-code",level:2},{value:"Props",id:"props",level:2},{value:"Required fields",id:"required-fields",level:2},{value:"Component type",id:"component-type",level:2},{value:"Related components",id:"related-components",level:2}],s={toc:d},m="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"video"},"Video"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Video")," component renders a video for the Storefront API's ",(0,o.kt)("a",{parentName:"p",href:"https://shopify.dev/api/storefront/reference/products/video"},"Video object"),"."),(0,o.kt)("p",null,"The component outputs a ",(0,o.kt)("inlineCode",{parentName:"p"},"video")," element. You can ",(0,o.kt)("a",{parentName:"p",href:"/components#customizing-hydrogen-components"},"customize this component")," using passthrough props."),(0,o.kt)("h2",{id:"example-code"},"Example code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {Video, gql} from '@shopify/hydrogen';\n\nconst QUERY = gql`\n  query Products {\n    products(first: 5) {\n      edges {\n        node {\n          id\n          title\n          handle\n          media(first: 1) {\n            edges {\n              node {\n                ... on Video {\n                  mediaContentType\n                  id\n                  previewImage {\n                    url\n                  }\n                  sources {\n                    mimeType\n                    url\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n`;\n\nexport default function MyProductVideo() {\n  const {data} = useShopQuery({query: QUERY});\n\n  const firstMediaElement = data.products.edges[0].node.media.edges[0].node;\n  if (firstMediaElement.mediaContentType === 'VIDEO') {\n    return <Video data={firstMediaElement} />;\n  }\n}\n")),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"data"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"PartialDeep&#60;VideoType&#62;")),(0,o.kt)("td",{parentName:"tr",align:null},"An object with fields that correspond to the Storefront API's ",(0,o.kt)("a",{parentName:"td",href:"https://shopify.dev/api/storefront/latest/objects/video"},"Video object"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"previewImageOptions?"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ShopifyLoaderParams")),(0,o.kt)("td",{parentName:"tr",align:null},"An object of image size options for the video's ",(0,o.kt)("inlineCode",{parentName:"td"},"previewImage"),". Uses ",(0,o.kt)("inlineCode",{parentName:"td"},"shopifyImageLoader")," to generate the ",(0,o.kt)("inlineCode",{parentName:"td"},"poster")," URL.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sourceProps"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"HTMLAttributes<HtmlSourceElement> & {'data-testid'?: string}")),(0,o.kt)("td",{parentName:"tr",align:null},"Props that will be passed to the ",(0,o.kt)("inlineCode",{parentName:"td"},"video")," element's children ",(0,o.kt)("inlineCode",{parentName:"td"},"source")," elements.")))),(0,o.kt)("h2",{id:"required-fields"},"Required fields"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Video")," component requires the following fields from the Storefront API's\n",(0,o.kt)("a",{parentName:"p",href:"https://shopify.dev/api/storefront/reference/products/video"},"Video object"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  sources {\n    url\n    mimeType\n  }\n}\n")),(0,o.kt)("h2",{id:"component-type"},"Component type"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Video")," component is a shared component, which means that it renders on both the server and the client. For more information about component types, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://shopify.dev/custom-storefronts/hydrogen/react-server-components"},"React Server Components"),"."),(0,o.kt)("h2",{id:"related-components"},"Related components"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/components/primitive/mediafile/"},(0,o.kt)("inlineCode",{parentName:"a"},"MediaFile"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/components/primitive/image/"},(0,o.kt)("inlineCode",{parentName:"a"},"Image")))))}c.isMDXComponent=!0}}]);