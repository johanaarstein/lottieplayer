(()=>{"use strict";const e=window.wp.blocks,t=window.React,l=window.wp.blockEditor,a=window.wp.components,n=window.wp.element,o=(0,n.createContext)({setAnimationContext:e=>e,animationContext:{player:null,animations:[]}}),r=()=>(0,n.useContext)(o);function i({children:e}){const[l,a]=(0,n.useState)({player:null,animations:[]});return(0,t.createElement)(o.Provider,{value:{animationContext:l,setAnimationContext:a}},e)}const s=window.wp.i18n;function c(){return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("a",{href:(0,s.__)("https://www.aarstein.media/en/am-lottieplayer/pro","am-lottieplayer"),target:"_blank",rel:"noreferrer",style:{color:"white",fontSize:".75rem",textDecoration:"none",textTransform:"none",backgroundColor:"var(--wp-admin-theme-color)",display:"inline-block",padding:".5em 1em",borderRadius:"1.5em"}},(0,t.createElement)("strong",null,"PRO")," ",(0,s.__)("feature","am-lottieplayer")))}function m(){return(0,t.createElement)("a",{href:(0,s.__)("https://www.aarstein.media/en/am-lottieplayer/pro","am-lottieplayer"),target:"_blank",rel:"noreferrer"},(0,s.__)("Read about additional features in AM LottiePlayer PRO","am-lottieplayer"),(0,t.createElement)("sup",{style:{verticalAlign:"super"}},(0,t.createElement)("span",{className:"dashicons dashicons-external",style:{fontSize:"1em"}})))}const u=({attributes:e,setAttributes:n})=>{const{alt:o,renderer:r="svg"}=e;return(0,t.createElement)(l.InspectorAdvancedControls,null,(0,t.createElement)(a.SelectControl,{label:(0,t.createElement)(t.Fragment,null,(0,t.createElement)("span",{className:"pro-feature",style:{marginRight:"1em"}},(0,s.__)("Renderer")),(0,t.createElement)(c,null)),help:(0,t.createElement)(m,null),disabled:!0,value:r,onChange:()=>console.warn("This feature is only available in the premium version"),options:[{value:"svg",label:"SVG"},{value:"canvas",label:"Canvas"}]}),(0,t.createElement)(a.TextareaControl,{label:(0,s.__)("Description","am-lottieplayer"),help:(0,s.__)("Describe the animation. This is helpful for screen readers and search engines.","am-lottieplayer"),value:o,onChange:e=>n({alt:e})}))},d=window.wp.blob;let p=function(e){return e.Void="void",e.Stop="stop",e.Pause="pause",e.Reverse="reverse",e}({});const y=({className:e="",id:l="",onChange:n,subTitle:o,title:r,value:i,disabled:s})=>(0,t.createElement)(a.BaseControl,{id:l,help:o,className:`lottie-switch-label ${e}`},(0,t.createElement)(a.BaseControl.VisualLabel,null,r),(0,t.createElement)(a.FormToggle,{checked:i,onChange:()=>n(!i),disabled:s})),g=({id:e="",onChange:l,title:n,value:o="",disabled:r,placeholder:i=""})=>(0,t.createElement)(a.BaseControl,{id:e,help:n,className:"lottie-number-wrapper"},(0,t.createElement)(a.TextControl,{value:o,onChange:e=>{l(void 0===e||""===e?void 0:Number(e))},onKeyDown:e=>{(({ctrlKey:e,key:t,metaKey:l,shiftKey:a})=>!(!a&&"End"!==t&&"Home"!==t&&"Backspace"!==t&&"Tab"!==t&&"Enter"!==t&&"Delete"!==t&&(!e&&!l||"a"!==t&&"c"!==t&&"v"!==t&&"x"!==t&&"z"!==t&&"t"!==t&&"r"!==t)))(e)||(({key:e})=>Number(e)>=0&&Number(e)<=9)(e)||e.preventDefault()},disabled:r,placeholder:i})),h=({id:e="",onChange:l,title:n,help:o,value:r="",placeholder:i="",disabled:s})=>(0,t.createElement)(a.BaseControl,{id:e,help:o,className:"lottie-number-wrapper"},(0,t.createElement)(a.BaseControl.VisualLabel,null,n),(0,t.createElement)(a.TextControl,{value:r,disabled:s,onChange:e=>l(e),placeholder:i})),b=({attributes:e,setAttributes:l})=>{const{autoplay:o,controls:i,direction:u,loop:d,segment:p,speed:h=1,subframe:b}=e,{animationContext:{animations:f,player:v}}=r(),[E,_]=(0,n.useState)({totalFrames:0,hasMultipleAnimations:!1});return(0,n.useEffect)((()=>{var e;v&&_({totalFrames:Number(null!==(e=v.getLottie()?.totalFrames)&&void 0!==e?e:0),hasMultipleAnimations:f?.length>1})}),[f?.length,v]),(0,t.createElement)(a.Panel,null,(0,t.createElement)(a.PanelBody,{title:(0,s.__)("Animation Settings","am-lottieplayer"),initialOpen:!0},E.hasMultipleAnimations&&(0,t.createElement)("div",{style:{marginBottom:"1em"}},(0,t.createElement)("p",null,(0,t.createElement)(c,null)),(0,t.createElement)("p",null,(0,s.__)("This file contains multiple animations. To control each of them individually you need to upgrade to AM LottiePlayer PRO.","am-lottieplayer"))),(0,t.createElement)(y,{id:"am-lottieplayer-controls-settings",title:(0,s.__)("Show controls","am-lottieplayer"),value:!!i,onChange:e=>l({controls:e})}),(0,t.createElement)(y,{id:"am-lottieplayer-autoplay-settings",title:(0,s.__)("Autoplay","am-lottieplayer"),value:!!o,onChange:e=>{l({autoplay:e})}}),(0,t.createElement)(y,{id:"am-lottieplayer-loop-settings",title:(0,s.__)("Loop","am-lottieplayer"),value:!!d,onChange:e=>{l({loop:e})}}),(0,t.createElement)(y,{id:"am-lottieplayer-playmode-settings",title:(0,t.createElement)(t.Fragment,null,(0,t.createElement)("span",{className:"pro-feature",style:{marginRight:"1em"}},(0,s.__)("Boomerang","am-lottieplayer")),(0,t.createElement)(c,null)),value:!1,disabled:!0,onChange:()=>console.warn("This feature is only available in the premium version")}),(0,t.createElement)(y,{id:"am-lottieplayer-reverse-settings",title:(0,s.__)("Reverse","am-lottieplayer"),value:-1===u,onChange:e=>l({direction:e?-1:1})}),(0,t.createElement)(y,{id:"am-lottieplayer-subframe-settings",title:(0,s.__)("Subframe","am-lottieplayer"),subTitle:(0,s.__)("Makes the animation smoother, at the cost of RAM usage","am-lottieplayer"),value:!!b,onChange:e=>l({subframe:e})}),(0,t.createElement)(a.RangeControl,{label:(0,s.__)("Speed","am-lottieplayer"),min:.5,max:5,step:.5,value:h,onChange:e=>l({speed:e})}),(0,t.createElement)(a.BaseControl.VisualLabel,null,(0,t.createElement)("p",null,(0,t.createElement)(c,null)),(0,t.createElement)("span",{className:"pro-feature"},(0,s.__)("Play only part of the animation","am-lottieplayer"))),(0,t.createElement)(a.PanelRow,{className:"lottie-segment"},(0,t.createElement)(g,{id:"am-lottieplayer-segment-in",title:(0,s.__)("First frame","am-lottieplayer"),value:p?.[0],disabled:!0,onChange:()=>console.warn("This feature is only available in the premium version"),placeholder:"1"}),(0,t.createElement)(g,{id:"am-lottieplayer-segment-out",title:(0,s.__)("Last frame","am-lottieplayer"),value:p?.[1],disabled:!0,onChange:()=>console.warn("This feature is only available in the premium version"),placeholder:(E.totalFrames+1).toString()})),(0,t.createElement)(m,null)))},f=({attributes:e,setAttributes:l})=>{const{background:n}=e;return(0,t.createElement)(a.Panel,null,(0,t.createElement)(a.PanelBody,{title:(0,s.__)("Background Color","am-lottieplayer"),initialOpen:!1},(0,t.createElement)(a.ColorPicker,{color:n,onChangeComplete:e=>l({background:e.hex})})))},v=({attributes:e,setAttributes:l})=>{const{clickEvent:n,hover:o,mouseout:r,once:i,scrollEvent:u,scrollDelay:d,selector:g}=e;return(0,t.createElement)(a.Panel,null,(0,t.createElement)(a.PanelBody,{title:(0,s.__)("Interactions","am-lottieplayer"),initialOpen:!0},(0,t.createElement)(y,{id:"am-lottieplayer-animateOnScroll-settings",title:(0,t.createElement)(t.Fragment,null,(0,t.createElement)("span",{className:"pro-feature",style:{marginRight:"1em"}},(0,s.__)("Animate on scroll","am-lottieplayer")),(0,t.createElement)(c,null)),value:!1,disabled:!0,onChange:()=>console.warn("This feature is only available in the premium version")}),(0,t.createElement)(y,{id:"am-lottieplayer-click-settings",title:(0,s.__)("Play on click","am-lottieplayer"),value:n,onChange:e=>l({clickEvent:e})}),(0,t.createElement)(y,{id:"am-lottieplayer-hover-settings",title:(0,s.__)("Play on mouseover","am-lottieplayer"),value:o,onChange:e=>l({hover:e})}),o&&(0,t.createElement)(a.SelectControl,{label:(0,s.__)("On mouseout","am-lottieplayer"),value:r,onChange:e=>l({mouseout:e}),options:[{value:p.Void,label:(0,s.__)("No event","am-lottieplayer")},{value:p.Stop,label:(0,s.__)("Stop","am-lottieplayer")},{value:p.Pause,label:(0,s.__)("Pause","am-lottieplayer")},{value:p.Reverse,label:(0,s.__)("Reverse","am-lottieplayer")}]}),(o||n)&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)(h,{id:"am-lottieplayer-settings",title:(0,t.createElement)(t.Fragment,null,(0,t.createElement)("span",{className:"pro-feature",style:{marginRight:"1em"}},(0,s.__)("Trigger element","am-lottieplayer")),(0,t.createElement)(c,null)),help:(0,s.__)("Anchor tag (id) for an element you want to trigger the animation, either by hover or click.","am-lottieplayer"),placeholder:"#",value:g?.id,disabled:!0,onChange:e=>l({selector:{...g,id:e}})}),(0,t.createElement)(y,{id:"am-lottieplayer-selector-settings",title:(0,t.createElement)(t.Fragment,null,(0,t.createElement)("span",{className:"pro-feature",style:{display:"block",marginBottom:"1em"}},(0,s.__)("Apply interaction only to trigger element","am-lottieplayer")),(0,t.createElement)(c,null)),value:g?.exclude,disabled:!0,onChange:e=>l({selector:{...g,exclude:e}})})),(0,t.createElement)(y,{id:"am-lottieplayer-scroll-settings",title:(0,s.__)("Play on scroll, when visible in viewport","am-lottieplayer"),value:u,onChange:e=>l({scrollEvent:e})}),u&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)(y,{id:"am-lottieplayer-once-settings",title:(0,s.__)("Play only once","am-lottieplayer"),value:i,onChange:e=>l({once:e})}),(0,t.createElement)(a.RangeControl,{label:(0,s.__)("Delay, in 10th of a second","am-lottieplayer"),min:0,max:50,step:1,value:null!=d?d:1,onChange:e=>l({scrollDelay:e})})),(0,t.createElement)(m,null)))},E=({attributes:e,setAttributes:l})=>{const{align:o,fullscreen:r,height:i,objectFit:c="contain",width:m}=e,u=(0,n.useCallback)((e=>"full"===o||"wide"===o?"100%":e&&"0"!==e?e:void 0),[o]);return(0,t.createElement)(a.Panel,null,(0,t.createElement)(a.PanelBody,{title:(0,s.__)("Dimensions","am-lottieplayer"),initialOpen:!0},(!r||"full"!==o)&&(0,t.createElement)(a.PanelRow,{className:"lottie-dimensions"},(0,t.createElement)(g,{id:"am-lottieplayer-width-settings",title:(0,s.__)("Width","am-lottieplayer"),value:u(m),onChange:e=>l({width:null!=e?e:null}),disabled:"full"===o||"wide"===o,placeholder:"full"===o||"wide"===o?"100%":"auto"}),(0,t.createElement)(g,{id:"am-lottieplayer-height-settings",title:(0,s.__)("Height","am-lottieplayer"),value:i&&"0"!==i.toString()?i:void 0,disabled:r,onChange:e=>l({height:e}),placeholder:"auto"})),("full"===o||"wide"===o)&&(0,t.createElement)(y,{id:"am-lottieplayer-fullscreen-settings",title:(0,s.__)("Fill screen","am-lottieplayer"),value:r,onChange:e=>l({fullscreen:e})}),(0,t.createElement)(a.SelectControl,{label:(0,s.__)("Object fit"),value:c,onChange:e=>{l({objectFit:e})},options:[{value:"contain",label:(0,s.__)("Contain","am-lottieplayer")},{value:"cover",label:(0,s.__)("Cover","am-lottieplayer")},{value:"fill",label:(0,s.__)("Fill","am-lottieplayer")},{value:"none",label:(0,s.__)("None","am-lottieplayer")}]})))};function _({attributes:e,className:a,clientId:o,context:i,isSelected:s,setAttributes:c}){const m=(0,n.useId)(),{animationContext:{animations:d},setAnimationContext:p}=r();return d.length||p((t=>{var l;return{...t,animations:[{id:null!==(l=e.id)&&void 0!==l?l:m,autoplay:e.autoplay,loop:e.loop,direction:e.direction,mode:e.mode,speed:e.speed}]}})),(0,t.createElement)(l.InspectorControls,null,(0,t.createElement)(b,{attributes:e,setAttributes:c,clientId:o,isSelected:s,context:i,className:a}),(0,t.createElement)(v,{attributes:e,setAttributes:c,clientId:o,isSelected:s,context:i,className:a}),(0,t.createElement)(E,{attributes:e,setAttributes:c,clientId:o,isSelected:s,context:i,className:a}),(0,t.createElement)(f,{attributes:e,setAttributes:c,clientId:o,isSelected:s,context:i,className:a}),(0,t.createElement)(u,{attributes:e,setAttributes:c,clientId:o,isSelected:s,context:i,className:a}))}function C(){return(0,t.createElement)(a.SVG,{role:"img",xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",viewBox:"0 0 80 80"},(0,t.createElement)("style",null,"\n\t\t\t\t.am-lottieplayer-path {\n\t\t\t\t\tfill: url(#a)\n\t\t\t\t}\n\t\t\t\t.block-editor-block-toolbar .am-lottieplayer-path,\n\t\t\t\t.components-panel .am-lottieplayer-path {\n\t\t\t\t\tfill: var(--wp-admin-theme-color-darker-10)\n\t\t\t\t}"),(0,t.createElement)("defs",null,(0,t.createElement)("radialGradient",{id:"a",cx:".2",cy:"1.07",r:"1.2"},(0,t.createElement)("stop",{offset:"10%"},(0,t.createElement)("animate",{attributeName:"stop-color",values:"#24708f;#e18d4c;#1f374c;#85c6e0;#24708f;",dur:"12s",repeatCount:"indefinite"})),(0,t.createElement)("stop",{offset:"90%"},(0,t.createElement)("animate",{attributeName:"stop-color",values:"#85c6e0;#24708f;#e18d4c;#1f374c;#85c6e0;",dur:"24s",repeatCount:"indefinite"})))),(0,t.createElement)(a.Path,{className:"am-lottieplayer-path",d:"M60 0H20C9 0 0 9 0 20v39.5C0 71 9 80 20 80h39.5c11 0 20.5-9 20.5-20V20C80 9 71 0 60 0zm4.9 59.7h-7.4V37.1c0-3.2.3-8.2.3-8.2h-.1s-.9 4.7-1.7 7.5l-6.8 23.3h-4l-11-30.2c-.8-2.2-2-5.8-2-5.8h-.1s-1.1 3.4-1.9 5.8L18.7 59.7H15l15-39.4h4.2l11.4 30c.3-1.4 1.2-6.1 2.4-10.2l5.6-19.8H65v39.4z"}))}function w({children:e,onSelectMedia:a,onError:o}){const[r,i]=(0,n.useState)(!1);return(0,t.createElement)(l.MediaPlaceholder,{icon:(0,t.createElement)(l.BlockIcon,{icon:C}),labels:{title:(0,s.__)("AM Lottie Animation","am-lottieplayer"),instructions:r?(0,s.__)("Dropped!","am-lottieplayer"):(0,s.__)("Upload Lottie animations to WordPress and add them in Gutenberg.","am-lottieplayer")},onHTMLDrop:()=>i(!0),onSelect:a,accept:".lottie, .json",allowedTypes:["application/json","application/zip"],onError:o},e)}const S=window.wp.data;function k({attributes:e,clientId:l}){var a;const{animationContext:{player:o},setAnimationContext:i}=r(),{segment:s}=e,{getBlockIndex:c}=(0,S.useSelect)((e=>e("core/block-editor")),[]),m=c(l),u=(0,n.useRef)(!0),d=(0,n.useRef)(null),p=s&&s?.[1]?JSON.stringify([s[0],s[1]]):void 0,y=(0,n.useCallback)((()=>{o&&(o.reload(),setTimeout((()=>{const t=o?.shadowRoot?.querySelector("canvas");"svg"===e.renderer&&t?.remove()}),100))}),[o,e.renderer]),g=e=>{if(e&&"number"==typeof e)return`${e}px`};return(0,n.useEffect)((()=>{d.current&&i((e=>({...e,player:d.current})))}),[i]),(0,n.useEffect)((()=>{o&&o.addEventListener("ready",(()=>{i((e=>{var t;return{...e,animations:null!==(t=o.getManifest()?.animations)&&void 0!==t?t:[]}}))}))}),[o,i]),(0,n.useEffect)((()=>{u.current||y(),u.current=!1}),[e.autoplay,m,e.direction,e.loop,e.mode,e.objectFit,y,e.renderer,s,e.speed,e.subframe]),(0,t.createElement)("dotlottie-player",{id:l,class:"lottie-element",autoplay:e.autoplay?"":null,controls:e.controls?"":null,description:e.alt,direction:e.direction,loop:e.loop?"":null,mode:e.mode,objectfit:e.objectFit,ref:d,renderer:e.renderer,segment:p,speed:e.speed,subframe:e.subframe?"":null,src:null!==(a=e.src)&&void 0!==a?a:"",style:{width:(h=e.width,"wide"===e.align||"full"===e.align?"100%":g(h)),height:g(e.height),backgroundColor:e.background,margin:"0 auto"}});var h}function x({attributes:e,clientId:l,setAttributes:o}){const[r,i]=(0,n.useState)(!0);return(0,n.useEffect)((()=>{i(!e.src||""===e.src)}),[e.src]),(0,t.createElement)(t.Fragment,null,r?(0,t.createElement)(w,{onSelectMedia:({id:e,url:t,alt:l})=>{if(!t)return o({src:void 0,id:void 0});o({src:t,id:e?.toString(),alt:l})},onError:e=>{(e=>{(0,t.createElement)(a.Notice,{status:"error"},e)})(e)},children:void 0}):(0,t.createElement)(k,{attributes:e,clientId:l}))}const N=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gb/lottieplayer","title":"AM LottiePlayer","description":"Play Lottie animations on your WordPress website.","keywords":["animation","gif","motion","vector","SVG","Lottie","dotLottie"],"category":"media","supports":{"align":true,"anchor":true,"html":false},"textdomain":"am-lottieplayer","attributes":{"align":{"enum":["none","left","right","center","wide","full"],"default":"none"},"alt":{"type":"string","default":""},"autoplay":{"type":"boolean"},"background":{"type":"string","default":"transparent"},"controls":{"type":"boolean","default":true},"clickEvent":{"type":"boolean","default":false},"direction":{"type":"number","default":1},"height":{"type":"number","default":null},"hover":{"type":"boolean","default":false},"id":{"type":"string"},"loop":{"type":"boolean"},"mode":{"enum":["bounce","normal"],"default":"normal"},"mouseout":{"type":"string","default":"stop"},"objectFit":{"type":"string","default":"contain"},"once":{"type":"boolean","default":false},"renderer":{"enum":["svg","canvas","html"],"default":"svg"},"scrollEvent":{"type":"boolean","default":false},"scrollDelay":{"type":"number","default":null},"segment":{"type":"array","default":null},"selector":{"type":"object","default":{"id":null,"exclude":false}},"speed":{"type":"number","default":1},"src":{"type":"string","default":""},"subframe":{"type":"boolean","default":true},"width":{"type":"number","default":null}},"editorScript":"file:./index.js","editorStyle":"file:./index.css"}');(0,e.registerBlockType)(N,{icon:C,edit:function({attributes:e,className:n,clientId:o,context:r,isSelected:s,setAttributes:c}){const m=(u=e.id,p=e.src,!u&&(0,d.isBlobURL)(p));var u,p;return(0,t.createElement)(i,null,(0,t.createElement)(_,{attributes:e,setAttributes:c,clientId:o,isSelected:s,context:r,className:n}),m&&(0,t.createElement)(a.Spinner,null),(0,t.createElement)("div",{...(0,l.useBlockProps)()},(0,t.createElement)(x,{attributes:e,setAttributes:c,clientId:o,isSelected:s,context:r,className:n})))},save:function({attributes:e}){const{align:a,alt:n,autoplay:o,background:r,controls:i,clickEvent:s,direction:c,height:m,hover:u,id:d,loop:p,mode:y,mouseout:g,objectFit:h,once:b,renderer:f,scrollEvent:v,scrollDelay:E,segment:_,selector:C,speed:w,src:S,subframe:k,width:x}=e,N=JSON.stringify(C),A=_&&_?.[1]?JSON.stringify([_[0],_[1]]):void 0;return(0,t.createElement)("figure",{id:d,...l.useBlockProps.save({className:`align${null!=a?a:"none"}`}),style:{backgroundColor:r,height:m&&0!==m?m:"auto",width:x&&0!==x?x:"auto",margin:"0 auto"}},(0,t.createElement)("dotlottie-player",{class:"lottie-element"+(C?.id?" has-selector":""),autoplay:o?"":null,controls:i?"":null,description:n,direction:c,"data-direction":c,"data-mouseover":u,"data-mouseout":g,"data-click":s,"data-scroll":v,"data-delay":E,"data-selector":N,"data-once":b,loop:p?"":null,mode:y,objectfit:h,renderer:f,segment:A,src:S,speed:w,subframe:k?"":null}))}})})();