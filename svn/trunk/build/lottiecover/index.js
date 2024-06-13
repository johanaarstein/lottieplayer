(()=>{var e,t={158:(e,t,l)=>{"use strict";const a=window.wp.blocks,n=window.React,r=window.wp.element,o=window.wp.blockEditor,i=window.wp.components,s=window.wp.i18n,c=window.wp.data;var u=l(500),m=l.n(u);const d=(0,r.createContext)({setAnimationContext:e=>e,animationContext:{player:null,animations:[]}}),p=()=>(0,r.useContext)(d);function y({children:e}){const[t,l]=(0,r.useState)({player:null,animations:[]});return(0,n.createElement)(d.Provider,{value:{animationContext:t,setAnimationContext:l}},e)}function g(){return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("a",{href:(0,s.__)("https://www.aarstein.media/en/am-lottieplayer/pro","am-lottieplayer"),target:"_blank",rel:"noreferrer",style:{color:"white",fontSize:".75rem",textDecoration:"none",textTransform:"none",backgroundColor:"var(--wp-admin-theme-color)",display:"inline-block",padding:".5em 1em",borderRadius:"1.5em"}},(0,n.createElement)("strong",null,"PRO")," ",(0,s.__)("feature","am-lottieplayer")))}function h(){return(0,n.createElement)("a",{href:(0,s.__)("https://www.aarstein.media/en/am-lottieplayer/pro","am-lottieplayer"),target:"_blank",rel:"noreferrer"},(0,s.__)("Read about additional features in AM LottiePlayer PRO","am-lottieplayer"),(0,n.createElement)("sup",{style:{verticalAlign:"super"}},(0,n.createElement)("span",{className:"dashicons dashicons-external",style:{fontSize:"1em"}})))}const f=({attributes:e,setAttributes:t})=>{const{alt:l,renderer:a="svg"}=e;return(0,n.createElement)(o.InspectorAdvancedControls,null,(0,n.createElement)(i.SelectControl,{label:(0,n.createElement)(n.Fragment,null,(0,n.createElement)("span",{className:"pro-feature",style:{marginRight:"1em"}},(0,s.__)("Renderer")),(0,n.createElement)(g,null)),help:(0,n.createElement)(h,null),disabled:!0,value:a,onChange:()=>console.warn("This feature is only available in the premium version"),options:[{value:"svg",label:"SVG"},{value:"canvas",label:"Canvas"}]}),(0,n.createElement)(i.TextareaControl,{label:(0,s.__)("Description","am-lottieplayer"),help:(0,s.__)("Describe the animation. This is helpful for screen readers and search engines.","am-lottieplayer"),value:l,onChange:e=>t({alt:e})}))},b=window.wp.blob;let v=function(e){return e.Center="center",e.Full="full",e.Left="left",e.None="none",e.Right="right",e.Wide="wide",e}({}),E=function(e){return e.Void="void",e.Stop="stop",e.Pause="pause",e.Reverse="reverse",e}({});const _=({className:e="",id:t="",onChange:l,subTitle:a,title:r,value:o,disabled:s})=>(0,n.createElement)(i.BaseControl,{id:t,help:a,className:`lottie-switch-label ${e}`},(0,n.createElement)(i.BaseControl.VisualLabel,null,r),(0,n.createElement)(i.FormToggle,{checked:o,onChange:()=>l(!o),disabled:s})),w=({id:e="",onChange:t,title:l,value:a="",disabled:r,placeholder:o=""})=>(0,n.createElement)(i.BaseControl,{id:e,help:l,className:"lottie-number-wrapper"},(0,n.createElement)(i.TextControl,{value:a,onChange:e=>{t(void 0===e||""===e?void 0:Number(e))},onKeyDown:e=>{(({ctrlKey:e,key:t,metaKey:l,shiftKey:a})=>!(!a&&"End"!==t&&"Home"!==t&&"Backspace"!==t&&"Tab"!==t&&"Enter"!==t&&"Delete"!==t&&(!e&&!l||"a"!==t&&"c"!==t&&"v"!==t&&"x"!==t&&"z"!==t&&"t"!==t&&"r"!==t)))(e)||(({key:e})=>Number(e)>=0&&Number(e)<=9)(e)||e.preventDefault()},disabled:r,placeholder:o})),C=({id:e="",onChange:t,title:l,help:a,value:r="",placeholder:o="",disabled:s})=>(0,n.createElement)(i.BaseControl,{id:e,help:a,className:"lottie-number-wrapper"},(0,n.createElement)(i.BaseControl.VisualLabel,null,l),(0,n.createElement)(i.TextControl,{value:r,disabled:s,onChange:e=>t(e),placeholder:o})),k=({attributes:e,setAttributes:t})=>{const{autoplay:l,controls:a,direction:o,loop:c,segment:u,speed:m=1,subframe:d}=e,{animationContext:{animations:y,player:f}}=p(),[b,v]=(0,r.useState)({totalFrames:0,hasMultipleAnimations:!1});return(0,r.useEffect)((()=>{var e;f&&v({totalFrames:Number(null!==(e=f.getLottie()?.totalFrames)&&void 0!==e?e:0),hasMultipleAnimations:y?.length>1})}),[y?.length,f]),(0,n.createElement)(i.Panel,null,(0,n.createElement)(i.PanelBody,{title:(0,s.__)("Animation Settings","am-lottieplayer"),initialOpen:!0},b.hasMultipleAnimations&&(0,n.createElement)("div",{style:{marginBottom:"1em"}},(0,n.createElement)("p",null,(0,n.createElement)(g,null)),(0,n.createElement)("p",null,(0,s.__)("This file contains multiple animations. To control each of them individually you need to upgrade to AM LottiePlayer PRO.","am-lottieplayer"))),(0,n.createElement)(_,{id:"am-lottieplayer-controls-settings",title:(0,s.__)("Show controls","am-lottieplayer"),value:!!a,onChange:e=>t({controls:e})}),(0,n.createElement)(_,{id:"am-lottieplayer-autoplay-settings",title:(0,s.__)("Autoplay","am-lottieplayer"),value:!!l,onChange:e=>{t({autoplay:e})}}),(0,n.createElement)(_,{id:"am-lottieplayer-loop-settings",title:(0,s.__)("Loop","am-lottieplayer"),value:!!c,onChange:e=>{t({loop:e})}}),(0,n.createElement)(_,{id:"am-lottieplayer-playmode-settings",title:(0,n.createElement)(n.Fragment,null,(0,n.createElement)("span",{className:"pro-feature",style:{marginRight:"1em"}},(0,s.__)("Boomerang","am-lottieplayer")),(0,n.createElement)(g,null)),value:!1,disabled:!0,onChange:()=>console.warn("This feature is only available in the premium version")}),(0,n.createElement)(_,{id:"am-lottieplayer-reverse-settings",title:(0,s.__)("Reverse","am-lottieplayer"),value:-1===o,onChange:e=>t({direction:e?-1:1})}),(0,n.createElement)(_,{id:"am-lottieplayer-subframe-settings",title:(0,s.__)("Subframe","am-lottieplayer"),subTitle:(0,s.__)("Makes the animation smoother, at the cost of RAM usage","am-lottieplayer"),value:!!d,onChange:e=>t({subframe:e})}),(0,n.createElement)(i.RangeControl,{label:(0,s.__)("Speed","am-lottieplayer"),min:.5,max:5,step:.5,value:m,onChange:e=>t({speed:e})}),(0,n.createElement)(i.BaseControl.VisualLabel,null,(0,n.createElement)("p",null,(0,n.createElement)(g,null)),(0,n.createElement)("span",{className:"pro-feature"},(0,s.__)("Play only part of the animation","am-lottieplayer"))),(0,n.createElement)(i.PanelRow,{className:"lottie-segment"},(0,n.createElement)(w,{id:"am-lottieplayer-segment-in",title:(0,s.__)("First frame","am-lottieplayer"),value:u?.[0],disabled:!0,onChange:()=>console.warn("This feature is only available in the premium version"),placeholder:"1"}),(0,n.createElement)(w,{id:"am-lottieplayer-segment-out",title:(0,s.__)("Last frame","am-lottieplayer"),value:u?.[1],disabled:!0,onChange:()=>console.warn("This feature is only available in the premium version"),placeholder:(b.totalFrames+1).toString()})),(0,n.createElement)(h,null)))},x=({attributes:e,setAttributes:t})=>{const{background:l}=e;return(0,n.createElement)(i.Panel,null,(0,n.createElement)(i.PanelBody,{title:(0,s.__)("Background Color","am-lottieplayer"),initialOpen:!1},(0,n.createElement)(i.ColorPicker,{color:l,onChangeComplete:e=>t({background:e.hex})})))},S=({attributes:e,setAttributes:t})=>{const{clickEvent:l,hover:a,mouseout:r,once:o,scrollEvent:c,scrollDelay:u,selector:m}=e;return(0,n.createElement)(i.Panel,null,(0,n.createElement)(i.PanelBody,{title:(0,s.__)("Interactions","am-lottieplayer"),initialOpen:!0},(0,n.createElement)(_,{id:"am-lottieplayer-animateOnScroll-settings",title:(0,n.createElement)(n.Fragment,null,(0,n.createElement)("span",{className:"pro-feature",style:{marginRight:"1em"}},(0,s.__)("Animate on scroll","am-lottieplayer")),(0,n.createElement)(g,null)),value:!1,disabled:!0,onChange:()=>console.warn("This feature is only available in the premium version")}),(0,n.createElement)(_,{id:"am-lottieplayer-click-settings",title:(0,s.__)("Play on click","am-lottieplayer"),value:l,onChange:e=>t({clickEvent:e})}),(0,n.createElement)(_,{id:"am-lottieplayer-hover-settings",title:(0,s.__)("Play on mouseover","am-lottieplayer"),value:a,onChange:e=>t({hover:e})}),a&&(0,n.createElement)(i.SelectControl,{label:(0,s.__)("On mouseout","am-lottieplayer"),value:r,onChange:e=>t({mouseout:e}),options:[{value:E.Void,label:(0,s.__)("No event","am-lottieplayer")},{value:E.Stop,label:(0,s.__)("Stop","am-lottieplayer")},{value:E.Pause,label:(0,s.__)("Pause","am-lottieplayer")},{value:E.Reverse,label:(0,s.__)("Reverse","am-lottieplayer")}]}),(a||l)&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)(C,{id:"am-lottieplayer-settings",title:(0,n.createElement)(n.Fragment,null,(0,n.createElement)("span",{className:"pro-feature",style:{marginRight:"1em"}},(0,s.__)("Trigger element","am-lottieplayer")),(0,n.createElement)(g,null)),help:(0,s.__)("Anchor tag (id) for an element you want to trigger the animation, either by hover or click.","am-lottieplayer"),placeholder:"#",value:m?.id,disabled:!0,onChange:e=>t({selector:{...m,id:e}})}),(0,n.createElement)(_,{id:"am-lottieplayer-selector-settings",title:(0,n.createElement)(n.Fragment,null,(0,n.createElement)("span",{className:"pro-feature",style:{display:"block",marginBottom:"1em"}},(0,s.__)("Apply interaction only to trigger element","am-lottieplayer")),(0,n.createElement)(g,null)),value:m?.exclude,disabled:!0,onChange:e=>t({selector:{...m,exclude:e}})})),(0,n.createElement)(_,{id:"am-lottieplayer-scroll-settings",title:(0,s.__)("Play on scroll, when visible in viewport","am-lottieplayer"),value:c,onChange:e=>t({scrollEvent:e})}),c&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)(_,{id:"am-lottieplayer-once-settings",title:(0,s.__)("Play only once","am-lottieplayer"),value:o,onChange:e=>t({once:e})}),(0,n.createElement)(i.RangeControl,{label:(0,s.__)("Delay, in 10th of a second","am-lottieplayer"),min:0,max:50,step:1,value:null!=u?u:1,onChange:e=>t({scrollDelay:e})})),(0,n.createElement)(h,null)))},N=({attributes:e,setAttributes:t})=>{const{align:l,fullscreen:a,height:o,objectFit:c="contain",width:u}=e,m=(0,r.useCallback)((e=>"full"===l||"wide"===l?"100%":e&&"0"!==e?e:void 0),[l]);return(0,n.createElement)(i.Panel,null,(0,n.createElement)(i.PanelBody,{title:(0,s.__)("Dimensions","am-lottieplayer"),initialOpen:!0},(!a||"full"!==l)&&(0,n.createElement)(i.PanelRow,{className:"lottie-dimensions"},(0,n.createElement)(w,{id:"am-lottieplayer-width-settings",title:(0,s.__)("Width","am-lottieplayer"),value:m(u),onChange:e=>t({width:null!=e?e:null}),disabled:"full"===l||"wide"===l,placeholder:"full"===l||"wide"===l?"100%":"auto"}),(0,n.createElement)(w,{id:"am-lottieplayer-height-settings",title:(0,s.__)("Height","am-lottieplayer"),value:o&&"0"!==o.toString()?o:void 0,disabled:a,onChange:e=>t({height:e}),placeholder:"auto"})),("full"===l||"wide"===l)&&(0,n.createElement)(_,{id:"am-lottieplayer-fullscreen-settings",title:(0,s.__)("Fill screen","am-lottieplayer"),value:a,onChange:e=>t({fullscreen:e})}),(0,n.createElement)(i.SelectControl,{label:(0,s.__)("Object fit"),value:c,onChange:e=>{t({objectFit:e})},options:[{value:"contain",label:(0,s.__)("Contain","am-lottieplayer")},{value:"cover",label:(0,s.__)("Cover","am-lottieplayer")},{value:"fill",label:(0,s.__)("Fill","am-lottieplayer")},{value:"none",label:(0,s.__)("None","am-lottieplayer")}]})))};function A({attributes:e,className:t,clientId:l,context:a,isSelected:i,setAttributes:s}){const c=(0,r.useId)(),{animationContext:{animations:u},setAnimationContext:m}=p();return u.length||m((t=>{var l;return{...t,animations:[{id:null!==(l=e.id)&&void 0!==l?l:c,autoplay:e.autoplay,loop:e.loop,direction:e.direction,mode:e.mode,speed:e.speed}]}})),(0,n.createElement)(o.InspectorControls,null,(0,n.createElement)(k,{attributes:e,setAttributes:s,clientId:l,isSelected:i,context:a,className:t}),(0,n.createElement)(S,{attributes:e,setAttributes:s,clientId:l,isSelected:i,context:a,className:t}),(0,n.createElement)(N,{attributes:e,setAttributes:s,clientId:l,isSelected:i,context:a,className:t}),(0,n.createElement)(x,{attributes:e,setAttributes:s,clientId:l,isSelected:i,context:a,className:t}),(0,n.createElement)(f,{attributes:e,setAttributes:s,clientId:l,isSelected:i,context:a,className:t}))}function P(){return(0,n.createElement)(i.SVG,{role:"img",xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",viewBox:"0 0 80 80"},(0,n.createElement)("style",null,"\n\t\t\t\t.am-lottieplayer-path {\n\t\t\t\t\tfill: url(#a)\n\t\t\t\t}\n\t\t\t\t.block-editor-block-toolbar .am-lottieplayer-path,\n\t\t\t\t.components-panel .am-lottieplayer-path {\n\t\t\t\t\tfill: var(--wp-admin-theme-color-darker-10)\n\t\t\t\t}"),(0,n.createElement)("defs",null,(0,n.createElement)("radialGradient",{id:"a",cx:".2",cy:"1.07",r:"1.2"},(0,n.createElement)("stop",{offset:"10%"},(0,n.createElement)("animate",{attributeName:"stop-color",values:"#24708f;#e18d4c;#1f374c;#85c6e0;#24708f;",dur:"12s",repeatCount:"indefinite"})),(0,n.createElement)("stop",{offset:"90%"},(0,n.createElement)("animate",{attributeName:"stop-color",values:"#85c6e0;#24708f;#e18d4c;#1f374c;#85c6e0;",dur:"24s",repeatCount:"indefinite"})))),(0,n.createElement)(i.Path,{className:"am-lottieplayer-path",d:"M60 0H20C9 0 0 9 0 20v39.5C0 71 9 80 20 80h39.5c11 0 20.5-9 20.5-20V20C80 9 71 0 60 0zm4.9 59.7h-7.4V37.1c0-3.2.3-8.2.3-8.2h-.1s-.9 4.7-1.7 7.5l-6.8 23.3h-4l-11-30.2c-.8-2.2-2-5.8-2-5.8h-.1s-1.1 3.4-1.9 5.8L18.7 59.7H15l15-39.4h4.2l11.4 30c.3-1.4 1.2-6.1 2.4-10.2l5.6-19.8H65v39.4z"}))}function R({children:e,onSelectMedia:t,onError:l}){const[a,i]=(0,r.useState)(!1);return(0,n.createElement)(o.MediaPlaceholder,{icon:(0,n.createElement)(o.BlockIcon,{icon:P}),labels:{title:(0,s.__)("AM Lottie Animation","am-lottieplayer"),instructions:a?(0,s.__)("Dropped!","am-lottieplayer"):(0,s.__)("Upload Lottie animations to WordPress and add them in Gutenberg.","am-lottieplayer")},onHTMLDrop:()=>i(!0),onSelect:t,accept:".lottie, .json",allowedTypes:["application/json","application/zip"],onError:l},e)}function B({attributes:e,clientId:t}){var l;const{animationContext:{player:a},setAnimationContext:o}=p(),{segment:i}=e,{getBlockIndex:s}=(0,c.useSelect)((e=>e("core/block-editor")),[]),u=s(t),m=(0,r.useRef)(!0),d=(0,r.useRef)(null),y=i&&i?.[1]?JSON.stringify([i[0],i[1]]):void 0,g=(0,r.useCallback)((()=>{a&&(a.reload(),setTimeout((()=>{const t=a?.shadowRoot?.querySelector("canvas");"svg"===e.renderer&&t?.remove()}),100))}),[a,e.renderer]),h=e=>{if(e&&"number"==typeof e)return`${e}px`};return(0,r.useEffect)((()=>{d.current&&o((e=>({...e,player:d.current})))}),[o]),(0,r.useEffect)((()=>{a&&a.addEventListener("ready",(()=>{o((e=>{var t;return{...e,animations:null!==(t=a.getManifest()?.animations)&&void 0!==t?t:[]}}))}))}),[a,o]),(0,r.useEffect)((()=>{m.current||g(),m.current=!1}),[e.autoplay,u,e.direction,e.loop,e.mode,e.objectFit,g,e.renderer,i,e.speed,e.subframe]),(0,n.createElement)("dotlottie-player",{id:t,class:"lottie-element",autoplay:e.autoplay?"":null,controls:e.controls?"":null,description:e.alt,direction:e.direction,loop:e.loop?"":null,mode:e.mode,objectfit:e.objectFit,ref:d,renderer:e.renderer,segment:y,speed:e.speed,subframe:e.subframe?"":null,src:null!==(l=e.src)&&void 0!==l?l:"",style:{width:(f=e.width,"wide"===e.align||"full"===e.align?"100%":h(f)),height:h(e.height),backgroundColor:e.background,margin:"0 auto"}});var f}function F({attributes:e,clientId:t,setAttributes:l}){const[a,o]=(0,r.useState)(!0);return(0,r.useEffect)((()=>{o(!e.src||""===e.src)}),[e.src]),(0,n.createElement)(n.Fragment,null,a?(0,n.createElement)(R,{onSelectMedia:({id:e,url:t,alt:a})=>{if(!t)return l({src:void 0,id:void 0});l({src:t,id:e?.toString(),alt:a})},onError:e=>{(e=>{(0,n.createElement)(i.Notice,{status:"error"},e)})(e)},children:void 0}):(0,n.createElement)(B,{attributes:e,clientId:t}))}function O({children:e,className:t,fullscreen:l,onResizeStart:a,onResize:o,onResizeStop:s,showHandle:c,...u}){const[d,p]=(0,r.useState)(!1);return(0,n.createElement)(i.ResizableBox,{className:m()(t,{"is-resizing":d}),enable:{bottom:!l},minHeight:10,onResizeStart:a,onResize:(e,t,l)=>{o(l.clientHeight),d||p(!0)},onResizeStop:(e,t,l)=>{s(l.clientHeight),p(!1)},showHandle:c,...u},e)}const T=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gb/lottiecover","title":"AM LottieCover","category":"media","description":"Add a Lottie animation with a text overlay — great for headers.","keywords":["animation","gif","motion","vector","SVG","Lottie","dotLottie"],"textdomain":"am-lottieplayer","attributes":{"align":{"enum":["none","left","right","center","wide","full"],"default":"none"},"allowedBlocks":{"type":"array","default":["core/paragraph","core/heading","core/buttons"]},"alt":{"type":"string","default":""},"autoplay":{"type":"boolean","default":true},"controls":{"type":"boolean"},"content":{"type":"string","default":""},"contentPosition":{"type":"string","default":""},"clickEvent":{"type":"boolean","default":false},"dimRatio":{"type":"number","default":50},"direction":{"type":"number","default":1},"focalPoint":{"type":"object","default":{}},"fullscreen":{"type":"boolean","default":false},"hasParallax":{"type":"boolean","default":false},"height":{"type":"number","default":null},"heightUnit":{"type":"string","default":"px"},"hover":{"type":"boolean","default":false},"id":{"type":"string","default":null},"isDark":{"type":"boolean","default":true},"loop":{"type":"boolean","default":true},"mode":{"enum":["bounce","normal"],"default":"normal"},"objectFit":{"type":"string","default":"cover"},"once":{"type":"boolean","default":false},"overlayColor":{"type":"string","default":"transparent"},"mouseOut":{"type":"string","default":"stop"},"renderer":{"enum":["svg","canvas","html"],"default":"svg"},"scrollEvent":{"type":"boolean","default":false},"scrollDelay":{"type":"number","default":null},"segment":{"type":"array","default":null},"selector":{"type":"object","default":{"id":null,"exclude":false}},"speed":{"type":"number","default":1},"src":{"type":"string","default":""},"subframe":{"type":"boolean","default":true},"templateLock":{"type":["string","boolean"],"enum":["all","insert","contentOnly",false]},"width":{"type":"number","default":null}},"supports":{"anchor":true,"align":true,"html":false,"spacing":{"padding":true,"margin":["top","bottom"],"__experimentalDefaultControls":{"padding":true,"margin":true}},"color":{"text":false,"background":false},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}}},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');(0,a.registerBlockType)(T,{icon:P,edit:function({attributes:e,className:t,clientId:l,context:a,isSelected:u,setAttributes:d,toggleSelection:p}){const{allowedBlocks:g=["core/paragraph","core/heading","core/buttons"],background:h,fullscreen:f,height:v,heightUnit:E="px",id:_,src:w,templateLock:C}=e,k=((e,t)=>!e&&(0,b.isBlobURL)(t))(_,w),x=(0,r.useRef)(),[S,N]=(0,r.useState)(!0),P=(0,o.useBlockProps)({ref:x}),R={minHeight:f?"100vh":(v&&E?`${v}${E}`:v)||void 0},B=(0,c.useSelect)((e=>!!e(o.store)?.getBlock(l)?.innerBlocks?.length),[l]),T=(e=>[["core/paragraph",{align:"center",placeholder:(0,s.__)("Write title…","am-lottieplayer"),...e}]])({fontSize:(0,o.useSetting)("typography.fontSizes")?"large":void 0}),L=(0,o.useInnerBlocksProps)({className:"wp-block-gb-lottiecover__inner-container"},{template:B?void 0:T,templateInsertUpdatesSelection:!0,allowedBlocks:g,templateLock:C});return(0,r.useEffect)((()=>{N(!w||""===w)}),[w]),(0,n.createElement)(y,null,(0,n.createElement)(A,{attributes:e,setAttributes:d,clientId:l,isSelected:!1,context:a,className:t}),(0,n.createElement)("div",{...P,className:m()({"is-placeholder":S},P.className),style:{...R,...P.style}},(0,n.createElement)(O,{className:"block-library-lottiecover__resize-container",fullscreen:f,onResizeStart:()=>{d({heightUnit:"px"}),p&&p(!1)},onResize:e=>{d({height:e})},onResizeStop:e=>{d({height:e}),p&&p(!0)},showHandle:u}),(0,n.createElement)("span",{"aria-hidden":"true",className:"wp-block-gb-lottiecover__background",style:{backgroundColor:h},hidden:S}),k&&(0,n.createElement)(i.Spinner,null),(0,n.createElement)(F,{attributes:e,setAttributes:d,clientId:l,isSelected:u,context:a,className:t}),!S&&(0,n.createElement)("div",{...L})))},save:function({attributes:e}){const{align:t,alt:l,autoplay:a,background:r,controls:i,clickEvent:s,direction:c,fullscreen:u,height:m,heightUnit:d,hover:p,loop:y,mode:g,mouseout:h,objectFit:f,once:b,renderer:E,scrollEvent:_,scrollDelay:w,segment:C,selector:k,speed:x,src:S,subframe:N,width:A}=e,P={minHeight:u?"100vh":(m&&d?`${m}${d}`:m)||void 0},R=JSON.stringify(k),B=C&&C?.[1]?JSON.stringify([C[0],C[1]]):void 0;return(0,n.createElement)("div",{...o.useBlockProps.save({style:P})},(0,n.createElement)("span",{"aria-hidden":"true",className:"wp-block-gb-lottiecover__background",style:{backgroundColor:r}}),(0,n.createElement)("dotlottie-player",{class:"lottie-element"+(k?.id?" has-selector":""),autoplay:a&&!_?"":null,controls:i?"":null,description:l,direction:c,"data-direction":c,"data-mouseover":p,"data-mouseout":h,"data-click":s,"data-delay":w,"data-scroll":_,"data-selector":R,"data-once":b,loop:y?"":null,mode:g,objectfit:f,renderer:E,segment:B,speed:x,src:S,style:{width:(F=A,t===v.Wide||t===v.Full?"100%":F&&"number"==typeof F?`${F}px`:void 0),height:m&&"number"==typeof m?`${m}px`:void 0,backgroundColor:r},subframe:N?"":null}),(0,n.createElement)("div",{...o.useInnerBlocksProps.save({className:"wp-block-gb-lottiecover__inner-container"})}));var F}})},500:(e,t)=>{var l;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=o(e,r(l)))}return e}function r(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)a.call(e,l)&&e[l]&&(t=o(t,l));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(l=function(){return n}.apply(t,[]))||(e.exports=l)}()}},l={};function a(e){var n=l[e];if(void 0!==n)return n.exports;var r=l[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,e=[],a.O=(t,l,n,r)=>{if(!l){var o=1/0;for(u=0;u<e.length;u++){for(var[l,n,r]=e[u],i=!0,s=0;s<l.length;s++)(!1&r||o>=r)&&Object.keys(a.O).every((e=>a.O[e](l[s])))?l.splice(s--,1):(i=!1,r<o&&(o=r));if(i){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[l,n,r]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={678:0,738:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var n,r,[o,i,s]=l,c=0;if(o.some((t=>0!==e[t]))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(s)var u=s(a)}for(t&&t(l);c<o.length;c++)r=o[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},l=globalThis.webpackChunkam_lottieplayer=globalThis.webpackChunkam_lottieplayer||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var n=a.O(void 0,[738],(()=>a(158)));n=a.O(n)})();