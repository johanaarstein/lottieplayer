(()=>{var e,t={822:(e,t,l)=>{"use strict";const a=window.wp.components,n=window.ReactJSXRuntime;function i(){return(0,n.jsxs)(a.SVG,{role:"img",viewBox:"0 0 80 80",xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",children:[(0,n.jsx)("style",{children:"\n\t\t\t\t.am-lottieplayer-path {\n\t\t\t\t\tfill: url(#a)\n\t\t\t\t}\n\t\t\t\t.block-editor-block-toolbar .am-lottieplayer-path,\n\t\t\t\t.components-panel .am-lottieplayer-path {\n\t\t\t\t\tfill: var(--wp-admin-theme-color-darker-10)\n\t\t\t\t}"}),(0,n.jsx)("defs",{children:(0,n.jsxs)("radialGradient",{cx:".2",cy:"1.07",id:"a",r:"1.2",children:[(0,n.jsx)("stop",{offset:"10%",children:(0,n.jsx)("animate",{attributeName:"stop-color",dur:"12s",repeatCount:"indefinite",values:"#24708f;#e18d4c;#1f374c;#85c6e0;#24708f;"})}),(0,n.jsx)("stop",{offset:"90%",children:(0,n.jsx)("animate",{attributeName:"stop-color",dur:"24s",repeatCount:"indefinite",values:"#85c6e0;#24708f;#e18d4c;#1f374c;#85c6e0;"})})]})}),(0,n.jsx)(a.Path,{className:"am-lottieplayer-path",d:"M60 0H20C9 0 0 9 0 20v39.5C0 71 9 80 20 80h39.5c11 0 20.5-9 20.5-20V20C80 9 71 0 60 0zm4.9 59.7h-7.4V37.1c0-3.2.3-8.2.3-8.2h-.1s-.9 4.7-1.7 7.5l-6.8 23.3h-4l-11-30.2c-.8-2.2-2-5.8-2-5.8h-.1s-1.1 3.4-1.9 5.8L18.7 59.7H15l15-39.4h4.2l11.4 30c.3-1.4 1.2-6.1 2.4-10.2l5.6-19.8H65v39.4z"})]})}const o=window.wp.blocks,r=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gb/lottiecover","title":"AM LottieCover","category":"media","description":"Add a Lottie animation with a text overlay — great for headers.","keywords":["animation","gif","motion","vector","SVG","Lottie","dotLottie"],"textdomain":"am-lottieplayer","attributes":{"align":{"enum":["none","left","right","center","wide","full"],"default":"none"},"allowedBlocks":{"type":"array","default":["core/paragraph","core/heading","core/buttons"]},"alt":{"type":"string","default":""},"autoplay":{"type":"boolean","default":true},"controls":{"type":"boolean"},"content":{"type":"string","default":""},"contentPosition":{"type":"string","default":""},"clickEvent":{"type":"boolean","default":false},"dimRatio":{"type":"number","default":50},"direction":{"type":"number","default":1},"focalPoint":{"type":"object","default":{}},"fullscreen":{"type":"boolean","default":false},"hasParallax":{"type":"boolean","default":false},"height":{"type":"number","default":null},"heightUnit":{"type":"string","default":"px"},"hover":{"type":"boolean","default":false},"id":{"type":"string","default":null},"intermission":{"type":"number"},"isDark":{"type":"boolean","default":true},"loop":{"type":"boolean","default":true},"mode":{"enum":["bounce","normal"],"default":"normal"},"objectFit":{"type":"string","default":"cover"},"once":{"type":"boolean","default":false},"overlayColor":{"type":"string","default":"transparent"},"mouseOut":{"type":"string","default":"stop"},"renderer":{"enum":["svg","canvas","html"],"default":"svg"},"scrollEvent":{"type":"boolean","default":false},"scrollDelay":{"type":"number","default":null},"simple":{"type":"boolean","default":true},"speed":{"type":"number","default":1},"src":{"type":"string","default":""},"subframe":{"type":"boolean","default":true},"templateLock":{"type":["string","boolean"],"enum":["all","insert","contentOnly",false]},"width":{"type":"number","default":null}},"supports":{"anchor":true,"align":true,"html":false,"spacing":{"padding":true,"margin":["top","bottom"],"__experimentalDefaultControls":{"padding":true,"margin":true}},"color":{"text":false,"background":false},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}}},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),s=window.wp.blockEditor;let c=function(e){return e.Center="center",e.Full="full",e.Left="left",e.None="none",e.Right="right",e.Wide="wide",e}({}),d=function(e){return e.Void="void",e.Stop="stop",e.Pause="pause",e.Reverse="reverse",e}({});const u=window.wp.blob,p=e=>!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e),m=window.wp.a11y,h=window.wp.data,g=window.wp.dom,y=window.wp.element,x=window.wp.i18n,b=window.wp.primitives,f=(0,n.jsx)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(b.Path,{d:"M18.5 15v3.5H13V6.7l4.5 4.1 1-1.1-6.2-5.8-5.8 5.8 1 1.1 4-4v11.7h-6V15H4v5h16v-5z"})});var v=l(500),j=l.n(v);function _({attributes:e,setAttributes:t}){const[l,o]=(0,y.useState)({externalURL:e.src||"",mediaId:Number(e.id)}),r=(0,y.useRef)(null),c=(0,h.useSelect)((e=>{try{const{getSettings:t}=e("core/block-editor");return t().mediaUpload}catch(e){console.error(e)}}),[]),d=["application/json","application/zip"],u=e=>{(0,g.__unstableStripHTML)(e);setTimeout((()=>{a.Notice}),1e3)},b=(e,l)=>{l(),(({alt:e,id:l,url:a})=>{a?(o((e=>({...e,mediaId:l}))),t({alt:e,id:l?.toString(),src:a})):t({id:void 0,src:void 0})})(e),(0,m.speak)((0,x.__)("The media file has been replaced"))},v=e=>{"ArrowDown"===e.key&&(e.preventDefault(),(e.target instanceof HTMLAnchorElement||e.target instanceof HTMLButtonElement)&&e.target.click())};return(0,y.useEffect)((()=>{p(l.externalURL)&&(l.externalURL.endsWith(".lottie")||l.externalURL.endsWith(".json"))&&t({src:l.externalURL})}),[l.externalURL,t]),(0,n.jsx)(a.Dropdown,{contentClassName:"block-editor-media-replace-flow__options",renderContent:({onClose:t})=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.NavigableMenu,{className:"block-editor-media-replace-flow__media-upload-menu",children:(0,n.jsxs)(s.MediaUploadCheck,{children:[(0,n.jsx)(s.MediaUpload,{allowedTypes:d,multiple:!1,onSelect:e=>b(e,t),render:({open:e})=>(0,n.jsx)(a.MenuItem,{icon:(0,n.jsx)(s.BlockIcon,{icon:i}),onClick:e,children:(0,x.__)("Open Media Library")}),value:l.mediaId}),(0,n.jsx)(a.FormFileUpload,{accept:".lottie,.json",onChange:e=>{(({target:e},t)=>{try{if(!c)throw new Error("Media Upload function is not set");const l=e.files;c({allowedTypes:d,filesList:l,onError:u,onFileChange:([e])=>{b(e,t)}})}catch(e){console.error(e)}})(e,t)},render:({openFileDialog:e})=>(0,n.jsx)(a.MenuItem,{icon:f,onClick:()=>{e()},children:(0,x.__)("Upload")})})]})}),(0,n.jsxs)("form",{className:j()("block-editor-media-flow__url-input",{"has-siblings":!!c}),children:[(0,n.jsx)("span",{className:"block-editor-media-replace-flow__image-url-label",children:(0,x.__)("Current media URL:")}),(0,n.jsx)(s.__experimentalLinkControl,{onChange:e=>{o((t=>({...t,externalURL:e}))),r.current?.focus()},settings:[],showSuggestions:!1,value:{url:e.src}})]})]}),renderToggle:({isOpen:e,onToggle:t})=>(0,n.jsx)(a.ToolbarButton,{"aria-expanded":e,"aria-haspopup":"true",onClick:t,onKeyDown:v,ref:r,children:(0,x.__)("Replace")})})}function w({attributes:e,setAttributes:t}){return(0,n.jsx)(s.BlockControls,{children:(0,n.jsx)(_,{attributes:e,setAttributes:t})})}const C=(0,y.createContext)({animationContext:{animations:[],player:null},setAnimationContext:e=>e}),k=()=>(0,y.useContext)(C);function S({children:e}){const[t,l]=(0,y.useState)({animations:[],player:null});return(0,n.jsx)(C.Provider,{value:{animationContext:t,setAnimationContext:l},children:e})}function R(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("a",{href:(0,x.__)("https://www.aarstein.media/en/am-lottieplayer/pro","am-lottieplayer"),rel:"noreferrer",style:{backgroundColor:"var(--wp-admin-theme-color)",borderRadius:"1.5em",color:"white",display:"inline-block",fontSize:".75rem",padding:".5em 1em",textDecoration:"none",textTransform:"none"},target:"_blank",children:[(0,n.jsx)("strong",{children:"PRO"})," ",(0,x.__)("feature","am-lottieplayer")]})})}function N(){return(0,n.jsxs)("a",{href:(0,x.__)("https://www.aarstein.media/en/am-lottieplayer/pro","am-lottieplayer"),rel:"noreferrer",target:"_blank",children:[(0,x.__)("Read about additional features in AM LottiePlayer PRO","am-lottieplayer"),(0,n.jsx)("sup",{style:{verticalAlign:"super"},children:(0,n.jsx)("span",{className:"dashicons dashicons-external",style:{fontSize:"1em"}})})]})}const L=({attributes:e,setAttributes:t})=>{const{alt:l}=e;return(0,n.jsxs)(s.InspectorAdvancedControls,{children:[(0,n.jsx)(a.SelectControl,{disabled:!0,help:(0,n.jsx)(N,{}),label:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"pro-feature",style:{marginRight:"1em"},children:(0,x.__)("Renderer")}),(0,n.jsx)(R,{})]}),onChange:()=>console.warn("This feature is only available in the premium version"),options:[{label:"SVG",value:"svg"},{label:"Canvas",value:"canvas"}],value:"svg"}),(0,n.jsx)(a.TextareaControl,{help:(0,x.__)("Describe the animation. This is helpful for screen readers and search engines.","am-lottieplayer"),label:(0,x.__)("Description","am-lottieplayer"),onChange:e=>t({alt:e}),value:l})]})},A=({className:e="",disabled:t,id:l="",onChange:i,subTitle:o,title:r,value:s})=>(0,n.jsxs)(a.BaseControl,{className:`lottie-switch-label ${e}`,help:o,id:l,children:[(0,n.jsx)(a.BaseControl.VisualLabel,{children:r}),(0,n.jsx)(a.FormToggle,{checked:s,disabled:t,onChange:()=>i(!s)})]}),P=({disabled:e,id:t="",onChange:l,placeholder:i="",title:o,value:r=""})=>(0,n.jsx)(a.BaseControl,{className:"lottie-number-wrapper",help:o,id:t,children:(0,n.jsx)(a.TextControl,{disabled:e,onChange:e=>{l(void 0===e||""===e?void 0:Number(e))},onKeyDown:e=>{(({ctrlKey:e,key:t,metaKey:l,shiftKey:a})=>!(!a&&"End"!==t&&"Home"!==t&&"Backspace"!==t&&"Tab"!==t&&"Enter"!==t&&"Delete"!==t&&(!e&&!l||"a"!==t&&"c"!==t&&"v"!==t&&"x"!==t&&"z"!==t&&"t"!==t&&"r"!==t)))(e)||(({key:e})=>Number(e)>=0&&Number(e)<=9)(e)||e.preventDefault()},placeholder:i,value:r})}),F=({disabled:e,help:t,id:l="",onChange:i,placeholder:o="",title:r,value:s=""})=>(0,n.jsxs)(a.BaseControl,{className:"lottie-number-wrapper",help:t,id:l,children:[(0,n.jsx)(a.BaseControl.VisualLabel,{children:r}),(0,n.jsx)(a.TextControl,{disabled:e,onChange:e=>i(e),placeholder:o,value:s})]}),B=({attributes:e,setAttributes:t})=>{const{segment:l}=e,{animationContext:{animations:i,player:o}}=k(),[r,s]=(0,y.useState)({hasMultipleAnimations:!1,totalFrames:0});return(0,y.useEffect)((()=>{var e;o&&s({hasMultipleAnimations:i?.length>1,totalFrames:Number(null!==(e=o.getLottie()?.totalFrames)&&void 0!==e?e:0)})}),[i?.length,o]),(0,n.jsx)(a.Panel,{children:(0,n.jsxs)(a.PanelBody,{className:"am-lottieplayer-settings",initialOpen:!0,title:(0,x.__)("Animation Settings","am-lottieplayer"),children:[r.hasMultipleAnimations&&(0,n.jsxs)("div",{style:{marginBottom:"1em"},children:[(0,n.jsx)("p",{children:(0,n.jsx)(R,{})}),(0,n.jsx)("p",{children:(0,x.__)("This file contains multiple animations. To control each of them individually you need to upgrade to AM LottiePlayer PRO.","am-lottieplayer")})]}),(0,n.jsx)(A,{id:"am-lottieplayer-controls-settings",onChange:e=>t({controls:e}),title:(0,x.__)("Show controls","am-lottieplayer"),value:!!e.controls}),(0,n.jsx)(A,{id:"am-lottieplayer-autoplay-settings",onChange:e=>{t({autoplay:e})},title:(0,x.__)("Autoplay","am-lottieplayer"),value:!!e.autoplay}),(0,n.jsx)(A,{id:"am-lottieplayer-loop-settings",onChange:e=>{t({loop:e})},title:(0,x.__)("Loop","am-lottieplayer"),value:!!e.loop}),(0,n.jsx)(A,{disabled:!0,id:"am-lottieplayer-playmode-settings",onChange:()=>console.warn("This feature is only available in the premium version"),title:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"pro-feature",style:{marginRight:"1em"},children:(0,x.__)("Boomerang","am-lottieplayer")}),(0,n.jsx)(R,{})]}),value:!1}),(0,n.jsx)(A,{id:"am-lottieplayer-reverse-settings",onChange:e=>t({direction:e?-1:1}),title:(0,x.__)("Reverse","am-lottieplayer"),value:-1===e.direction}),(0,n.jsx)(A,{id:"am-lottieplayer-subframe-settings",onChange:e=>t({subframe:e}),subTitle:(0,x.__)("Makes the animation smoother, at the cost of RAM usage","am-lottieplayer"),title:(0,x.__)("Subframe","am-lottieplayer"),value:!!e.subframe}),(0,n.jsx)(a.RangeControl,{label:(0,x.__)("Speed","am-lottieplayer"),max:5,min:.5,onChange:e=>t({speed:e}),step:.5,value:e.speed}),(0,n.jsxs)(a.BaseControl.VisualLabel,{children:[(0,n.jsx)("p",{children:(0,n.jsx)(R,{})}),(0,n.jsx)("span",{className:"pro-feature",children:(0,x.__)("Play only part of the animation","am-lottieplayer")})]}),(0,n.jsxs)(a.PanelRow,{className:"lottie-segment",children:[(0,n.jsx)(P,{disabled:!0,id:"am-lottieplayer-segment-in",onChange:()=>console.warn("This feature is only available in the premium version"),placeholder:"1",title:(0,x.__)("First frame","am-lottieplayer"),value:l?.[0]}),(0,n.jsx)(P,{disabled:!0,id:"am-lottieplayer-segment-out",onChange:()=>console.warn("This feature is only available in the premium version"),placeholder:(r.totalFrames+1).toString(),title:(0,x.__)("Last frame","am-lottieplayer"),value:l?.[1]})]}),e.loop&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.BaseControl.VisualLabel,{children:(0,x.__)("Intermission","am-lottieplayer")}),(0,n.jsx)(a.PanelRow,{className:"lottie-intermission",children:(0,n.jsx)(P,{id:"am-lottieplayer-intermission",onChange:e=>t({intermission:e}),placeholder:"0",title:(0,x.__)("Pause between loops, in miliseconds. 1s = 1000","am-lottieplayer"),value:e.intermission})})]}),(0,n.jsx)(N,{})]})})},T=({attributes:e,setAttributes:t})=>{const{background:l}=e;return(0,n.jsx)(a.Panel,{children:(0,n.jsx)(a.PanelBody,{className:"am-lottieplayer-settings",initialOpen:!0,title:(0,x.__)("Background Color","am-lottieplayer"),children:(0,n.jsx)(a.ColorPicker,{color:l,onChange:e=>t({background:e})})})})},U=({attributes:e,setAttributes:t})=>{const{align:l,fullscreen:i,height:o,objectFit:r="contain",width:s}=e,d=(0,y.useCallback)((e=>l===c.Full||l===c.Wide?"100%":e&&"0"!==e?e:void 0),[l]);return(0,n.jsx)(a.Panel,{children:(0,n.jsxs)(a.PanelBody,{className:"am-lottieplayer-settings",initialOpen:!0,title:(0,x.__)("Dimensions","am-lottieplayer"),children:[(!i||l!==c.Full)&&(0,n.jsxs)(a.PanelRow,{className:"lottie-dimensions",children:[(0,n.jsx)(P,{disabled:l===c.Full||l===c.Wide,id:"am-lottieplayer-width-settings",onChange:e=>t({width:null!=e?e:null}),placeholder:l===c.Full||l===c.Wide?"100%":"auto",title:(0,x.__)("Width","am-lottieplayer"),value:d(s)}),(0,n.jsx)(P,{disabled:i,id:"am-lottieplayer-height-settings",onChange:e=>t({height:e}),placeholder:"auto",title:(0,x.__)("Height","am-lottieplayer"),value:o&&"0"!==o.toString()?o:void 0})]}),(l===c.Full||l===c.Wide)&&(0,n.jsx)(A,{id:"am-lottieplayer-fullscreen-settings",onChange:e=>t({fullscreen:e}),title:(0,x.__)("Fill screen","am-lottieplayer"),value:i}),(0,n.jsx)(a.SelectControl,{label:(0,x.__)("Object fit"),onChange:e=>{t({objectFit:e})},options:[{label:(0,x.__)("Contain","am-lottieplayer"),value:"contain"},{label:(0,x.__)("Cover","am-lottieplayer"),value:"cover"},{label:(0,x.__)("Fill","am-lottieplayer"),value:"fill"},{label:(0,x.__)("None","am-lottieplayer"),value:"none"}],value:r})]})})},z=({attributes:e,setAttributes:t})=>{const{clickEvent:l,hover:i,mouseout:o,once:r,scrollDelay:s,scrollEvent:c,selector:u}=e;return(0,n.jsx)(a.Panel,{children:(0,n.jsxs)(a.PanelBody,{className:"am-lottieplayer-settings",initialOpen:!0,title:(0,x.__)("Interactions","am-lottieplayer"),children:[(0,n.jsx)(A,{disabled:!0,id:"am-lottieplayer-animateOnScroll-settings",onChange:()=>console.warn("This feature is only available in the premium version"),title:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"pro-feature",style:{marginRight:"1em"},children:(0,x.__)("Animate on scroll","am-lottieplayer")}),(0,n.jsx)(R,{})]}),value:!1}),(0,n.jsx)(A,{id:"am-lottieplayer-click-settings",onChange:e=>t({clickEvent:e}),title:(0,x.__)("Play on click","am-lottieplayer"),value:l}),(0,n.jsx)(A,{id:"am-lottieplayer-hover-settings",onChange:e=>t({hover:e}),title:(0,x.__)("Play on mouseover","am-lottieplayer"),value:i}),i&&(0,n.jsx)(a.SelectControl,{label:(0,x.__)("On mouseout","am-lottieplayer"),onChange:e=>t({mouseout:e}),options:[{label:(0,x.__)("No event","am-lottieplayer"),value:d.Void},{label:(0,x.__)("Stop","am-lottieplayer"),value:d.Stop},{label:(0,x.__)("Pause","am-lottieplayer"),value:d.Pause},{label:(0,x.__)("Reverse","am-lottieplayer"),value:d.Reverse}],value:o}),(i||l)&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(F,{disabled:!0,help:(0,x.__)("Anchor tag (id) for an element you want to trigger the animation, either by hover or click.","am-lottieplayer"),id:"am-lottieplayer-settings",onChange:e=>t({selector:{...u,id:e}}),placeholder:"#",title:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"pro-feature",style:{marginRight:"1em"},children:(0,x.__)("Trigger element","am-lottieplayer")}),(0,n.jsx)(R,{})]}),value:u?.id}),(0,n.jsx)(A,{disabled:!0,id:"am-lottieplayer-selector-settings",onChange:e=>t({selector:{...u,exclude:e}}),title:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"pro-feature",style:{display:"block",marginBottom:"1em"},children:(0,x.__)("Apply interaction only to trigger element","am-lottieplayer")}),(0,n.jsx)(R,{})]}),value:u?.exclude})]}),(0,n.jsx)(A,{id:"am-lottieplayer-scroll-settings",onChange:e=>t({scrollEvent:e}),title:(0,x.__)("Play on scroll, when visible in viewport","am-lottieplayer"),value:c}),c&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(A,{id:"am-lottieplayer-once-settings",onChange:e=>t({once:e}),title:(0,x.__)("Play only once","am-lottieplayer"),value:r}),(0,n.jsx)(a.RangeControl,{label:(0,x.__)("Delay, in 10th of a second","am-lottieplayer"),max:50,min:0,onChange:e=>t({scrollDelay:e}),step:1,value:null!=s?s:1})]}),(0,n.jsx)(N,{})]})})};function I({attributes:e,className:t,clientId:l,context:a,isSelected:i,setAttributes:o}){const r=(0,y.useId)(),{animationContext:{animations:c},setAnimationContext:d}=k();return c.length||d((t=>{var l;return{...t,animations:[{autoplay:e.autoplay,direction:e.direction,id:null!==(l=e.id)&&void 0!==l?l:r,loop:e.loop,mode:e.mode,speed:e.speed}]}})),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.InspectorControls,{children:[(0,n.jsx)(B,{attributes:e,className:t,clientId:l,context:a,isSelected:i,setAttributes:o}),(0,n.jsx)(z,{attributes:e,className:t,clientId:l,context:a,isSelected:i,setAttributes:o}),(0,n.jsx)(L,{attributes:e,className:t,clientId:l,context:a,isSelected:i,setAttributes:o})]}),(0,n.jsxs)(s.InspectorControls,{group:"styles",children:[(0,n.jsx)(U,{attributes:e,className:t,clientId:l,context:a,isSelected:i,setAttributes:o}),(0,n.jsx)(T,{attributes:e,className:t,clientId:l,context:a,isSelected:i,setAttributes:o})]})]})}function E({attributes:e,clientId:t}){var l;const{animationContext:{player:a},setAnimationContext:i}=k(),{getBlockIndex:o}=(0,h.useSelect)((e=>e("core/block-editor")),[]),r=o(t),s=(0,y.useRef)(!0),d=(0,y.useRef)(null),u=(0,y.useCallback)((()=>{a&&a.reload()}),[a]),p=e=>{if(e&&"number"==typeof e)return`${e}px`};return(0,y.useEffect)((()=>{d.current&&i((e=>({...e,player:d.current})))}),[i]),(0,y.useEffect)((()=>{a&&a.addEventListener("ready",(()=>{i((e=>{var t;return{...e,animations:null!==(t=a.getManifest()?.animations)&&void 0!==t?t:[]}}))}))}),[a,i]),(0,y.useEffect)((()=>{s.current,s.current=!1}),[r,e.intermission,e.src,e.objectFit,u]),(0,n.jsx)("dotlottie-player",{autoplay:e.autoplay?"":null,class:"lottie-element",controls:e.controls?"":null,description:e.alt,direction:e.direction,id:e.id,intermission:e.intermission,loop:e.loop?"":null,mode:e.mode,objectfit:e.objectFit,ref:d,simple:!0,speed:e.speed,src:null!==(l=e.src)&&void 0!==l?l:"",style:{backgroundColor:e.background,height:p(e.height),margin:"0 auto",width:(m=e.width,e.align===c.Wide||e.align===c.Full?"100%":p(m))},subframe:e.subframe?"":null});var m}function O({attributes:e,setAttributes:t}){const[l,o]=(0,y.useState)({externalURL:e.src||"",hasDropped:!1});return(0,y.useEffect)((()=>{p(l.externalURL)&&(l.externalURL.endsWith(".lottie")||l.externalURL.endsWith(".json"))&&t({src:l.externalURL})}),[l.externalURL,t]),(0,n.jsx)(s.MediaUploadCheck,{children:(0,n.jsx)(s.MediaPlaceholder,{accept:".lottie, .json",allowedTypes:["application/json","application/zip"],icon:(0,n.jsx)(s.BlockIcon,{icon:i}),labels:{instructions:l.hasDropped?(0,x.__)("Dropped!","am-lottieplayer"):(0,x.__)("Upload Lottie animations to WordPress and add them in Gutenberg.","am-lottieplayer"),title:(0,x.__)("AM Lottie Animation","am-lottieplayer")},onError:e=>{a.Notice},onHTMLDrop:()=>o((e=>({...e,hasDropped:!0}))),onSelect:({alt:e,id:l,url:a})=>{if(!a)return t({id:void 0,src:void 0});t({alt:e,id:l?.toString(),src:a})},children:(0,n.jsx)(s.URLInput,{onChange:e=>o((t=>({...t,externalURL:e}))),value:l.externalURL})})})}function D({attributes:e,clientId:t,setAttributes:l}){const[a,i]=(0,y.useState)({isPlaceholder:!0});return(0,y.useEffect)((()=>{i((t=>({...t,isPlaceholder:!e.src||""===e.src})))}),[e.src]),(0,n.jsx)(n.Fragment,{children:a.isPlaceholder?(0,n.jsx)(O,{attributes:e,setAttributes:l}):(0,n.jsx)(E,{attributes:e,clientId:t})})}function M({children:e,className:t,fullscreen:l,onResize:i,onResizeStart:o,onResizeStop:r,showHandle:s,...c}){const[d,u]=(0,y.useState)(!1);return(0,n.jsx)(a.ResizableBox,{className:j()(t,{"is-resizing":d}),enable:{bottom:!l},minHeight:10,onResize:(e,t,l)=>{i(l.clientHeight),d||u(!0)},onResizeStart:o,onResizeStop:(e,t,l)=>{r(l.clientHeight),u(!1)},showHandle:s,...c,children:e})}(0,o.registerBlockType)(r,{edit:function({attributes:e,className:t,clientId:l,context:i,isSelected:o,setAttributes:r,toggleSelection:c}){const{allowedBlocks:d=["core/paragraph","core/heading","core/buttons"],background:p,fullscreen:m,height:g,heightUnit:b="px",id:f,src:v,templateLock:_}=e,C=((e,t)=>!e&&(0,u.isBlobURL)(t))(f,v),k=(0,y.useRef)(),[R,N]=(0,y.useState)(!0),L=(0,s.useBlockProps)({ref:k}),A={minHeight:m?"100vh":(g&&b?`${g}${b}`:g)||void 0},P=(0,h.useSelect)((e=>!!e(s.store)?.getBlock(l)?.innerBlocks?.length),[l]),F=(e=>[["core/paragraph",{align:"center",placeholder:(0,x.__)("Write title…","am-lottieplayer"),...e}]])({fontSize:(0,s.useSetting)("typography.fontSizes")?"large":void 0}),B=(0,s.useInnerBlocksProps)({className:"wp-block-gb-lottiecover__inner-container"},{allowedBlocks:d,template:P?void 0:F,templateInsertUpdatesSelection:!0,templateLock:_});return(0,y.useEffect)((()=>{N(!v||""===v)}),[v]),(0,n.jsxs)(S,{children:[(0,n.jsx)(I,{attributes:e,className:t,clientId:l,context:i,isSelected:!1,setAttributes:r}),(0,n.jsxs)("div",{...L,className:j()({"is-placeholder":R},L.className),style:{...A,...L.style},children:[(0,n.jsx)(M,{className:"block-library-lottiecover__resize-container",fullscreen:m,onResize:e=>{r({height:e})},onResizeStart:()=>{r({heightUnit:"px"}),c&&c(!1)},onResizeStop:e=>{r({height:e}),c&&c(!0)},showHandle:o}),(0,n.jsx)("span",{"aria-hidden":"true",className:"wp-block-gb-lottiecover__background",hidden:R,style:{backgroundColor:p}}),C&&(0,n.jsx)(a.Spinner,{}),(0,n.jsx)(D,{attributes:e,className:t,clientId:l,context:i,isSelected:o,setAttributes:r}),(0,n.jsx)(w,{attributes:e,setAttributes:r}),!R&&(0,n.jsx)("div",{...B})]})]})},icon:i,save:function({attributes:e}){const t=e.height&&e.heightUnit?`${e.height}${e.heightUnit}`:e.height,l={minHeight:e.fullscreen?"100vh":t||void 0};return(0,n.jsxs)("div",{...s.useBlockProps.save({style:l}),children:[(0,n.jsx)("span",{"aria-hidden":"true",className:"wp-block-gb-lottiecover__background",style:{backgroundColor:e.background}}),(0,n.jsx)("dotlottie-player",{autoplay:e.autoplay&&!e.scrollEvent?"":null,class:"lottie-element"+(e.selector?.id?" has-selector":""),controls:e.controls?"":null,"data-click":e.clickEvent,"data-delay":e.scrollDelay,"data-direction":e.direction,"data-mouseout":e.mouseout,"data-mouseover":e.hover,"data-once":e.once,"data-scroll":e.scrollEvent,description:e.alt,direction:e.direction,intermission:e.intermission,loop:e.loop?"":null,mode:e.mode,objectfit:e.objectFit,simple:e.simple,speed:e.speed,src:e.src||"",style:{backgroundColor:e.background,height:e.height&&"number"==typeof e.height?`${e.height}px`:void 0,width:(a=e.width,e.align===c.Wide||e.align===c.Full?"100%":a&&"number"==typeof a?`${a}px`:void 0)},subframe:e.subframe?"":null}),(0,n.jsx)("div",{...s.useInnerBlocksProps.save({className:"wp-block-gb-lottiecover__inner-container"})})]});var a}})},500:(e,t)=>{var l;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=o(e,i(l)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)a.call(e,l)&&e[l]&&(t=o(t,l));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(l=function(){return n}.apply(t,[]))||(e.exports=l)}()}},l={};function a(e){var n=l[e];if(void 0!==n)return n.exports;var i=l[e]={exports:{}};return t[e](i,i.exports,a),i.exports}a.m=t,e=[],a.O=(t,l,n,i)=>{if(!l){var o=1/0;for(d=0;d<e.length;d++){for(var[l,n,i]=e[d],r=!0,s=0;s<l.length;s++)(!1&i||o>=i)&&Object.keys(a.O).every((e=>a.O[e](l[s])))?l.splice(s--,1):(r=!1,i<o&&(o=i));if(r){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[l,n,i]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={678:0,738:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var n,i,[o,r,s]=l,c=0;if(o.some((t=>0!==e[t]))){for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(s)var d=s(a)}for(t&&t(l);c<o.length;c++)i=o[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(d)},l=globalThis.webpackChunkam_lottieplayer=globalThis.webpackChunkam_lottieplayer||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var n=a.O(void 0,[738],(()=>a(822)));n=a.O(n)})();