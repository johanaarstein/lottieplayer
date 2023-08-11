(()=>{"use strict";const e=window.wp.blocks,t=window.wp.element,l=window.wp.blockEditor,a=window.wp.components,n=window.wp.i18n,o=({attributes:e,setAttributes:o})=>{const{alt:r,renderer:i="svg"}=e;return(0,t.createElement)(l.InspectorAdvancedControls,null,(0,t.createElement)(a.SelectControl,{label:(0,n.__)("Renderer"),value:i,onChange:e=>o({renderer:e}),options:[{value:"svg",label:"SVG"},{value:"canvas",label:"Canvas"}]}),(0,t.createElement)(a.TextareaControl,{label:(0,n.__)("Description","am-lottieplayer"),help:(0,n.__)("Describe the animation. This is helpful for screen readers and search engines.","am-lottieplayer"),value:r,onChange:e=>o({alt:e})}))};let r=function(e){return e.Bounce="bounce",e.Normal="normal",e}({}),i=function(e){return e.Void="void",e.Stop="stop",e.Pause="pause",e.Reverse="reverse",e}({});const s=window.wp.blob,c=({id:e="",onChange:l,subTitle:n,title:o,value:r})=>(0,t.createElement)(a.BaseControl,{id:e,help:n,className:"lottie-switch-label"},(0,t.createElement)(a.BaseControl.VisualLabel,null,o),(0,t.createElement)(a.FormToggle,{checked:r,onChange:()=>l(!r)})),u=({id:e="",onChange:l,title:n,value:o="",disabled:r,placeholder:i=""})=>(0,t.createElement)(a.BaseControl,{id:e,help:n,className:"lottie-number-wrapper"},(0,t.createElement)(a.TextControl,{value:o,onChange:e=>{l(void 0===e||""===e?void 0:Number(e))},onKeyDown:e=>{(({ctrlKey:e,key:t,metaKey:l,shiftKey:a})=>!(!a&&"End"!==t&&"Home"!==t&&"Backspace"!==t&&"Tab"!==t&&"Enter"!==t&&"Delete"!==t&&(!e&&!l||"a"!==t&&"c"!==t&&"v"!==t&&"x"!==t&&"z"!==t&&"t"!==t&&"r"!==t)))(e)||!(({key:e})=>Number(e)>=0&&Number(e)<=9)(e)&&e.preventDefault()},disabled:r,placeholder:i})),m=({id:e="",onChange:l,title:n,help:o,value:r="",placeholder:i=""})=>(0,t.createElement)(a.BaseControl,{id:e,help:o,className:"lottie-number-wrapper"},(0,t.createElement)(a.BaseControl.VisualLabel,null,n),(0,t.createElement)(a.TextControl,{value:r,onChange:e=>l(e),placeholder:i})),d=({attributes:e,clientId:l,setAttributes:o})=>{const{autoplay:i,controls:s,direction:m,loop:d,mode:p=r.Normal,segment:y,speed:b=1,subframe:g}=e,h=(0,t.useRef)(),v=(0,t.useCallback)((e=>{"number"==typeof e&&(h.current=e)}),[]);return(0,t.useEffect)((()=>{const e=document.getElementById(l);e&&(v(e?.getLottie()?.totalFrames),e.addEventListener("ready",(()=>{v(e?.getLottie()?.totalFrames)})))}),[l,v]),(0,t.createElement)(a.Panel,null,(0,t.createElement)(a.PanelBody,{title:(0,n.__)("Animation Settings","am-lottieplayer"),initialOpen:!0},(0,t.createElement)(c,{id:"am-lottieplayer-controls-settings",title:(0,n.__)("Show controls","am-lottieplayer"),value:!!s,onChange:e=>o({controls:e})}),(0,t.createElement)(c,{id:"am-lottieplayer-autoplay-settings",title:(0,n.__)("Autoplay","am-lottieplayer"),value:!!i,onChange:e=>{o({autoplay:e})}}),(0,t.createElement)(c,{id:"am-lottieplayer-loop-settings",title:(0,n.__)("Loop","am-lottieplayer"),value:!!d,onChange:e=>{o({loop:e})}}),(0,t.createElement)(c,{id:"am-lottieplayer-playmode-settings",title:(0,n.__)("Boomerang","am-lottieplayer"),value:p===r.Bounce,onChange:e=>{o({mode:e?r.Bounce:r.Normal})}}),(0,t.createElement)(c,{id:"am-lottieplayer-reverse-settings",title:(0,n.__)("Reverse","am-lottieplayer"),value:-1===m,onChange:e=>o({direction:e?-1:1})}),(0,t.createElement)(c,{id:"am-lottieplayer-subframe-settings",title:(0,n.__)("Subframe","am-lottieplayer"),subTitle:(0,n.__)("Enabling this can sometimes reduce flicker","am-lottieplayer"),value:!!g,onChange:e=>o({subframe:e})}),(0,t.createElement)(a.RangeControl,{label:(0,n.__)("Speed","am-lottieplayer"),min:.5,max:5,step:.5,value:b,onChange:e=>o({speed:e})}),(0,t.createElement)(a.BaseControl.VisualLabel,null,(0,n.__)("Play only part of the animation","am-lottieplayer")),(0,t.createElement)(a.PanelRow,{className:"lottie-segment"},(0,t.createElement)(u,{id:"am-lottieplayer-segment-in",title:(0,n.__)("First frame","am-lottieplayer"),value:y?.[0],onChange:e=>{var t;return o({segment:void 0!==e?[e,null!==(t=y?.[1])&&void 0!==t?t:0]:void 0})},placeholder:"1"}),(0,t.createElement)(u,{id:"am-lottieplayer-segment-out",title:(0,n.__)("Last frame","am-lottieplayer"),value:y?.[1],onChange:e=>{var t;return o({segment:e?[null!==(t=y?.[0])&&void 0!==t?t:0,e]:void 0})},placeholder:h.current?.toString()}))))},p=({attributes:e,setAttributes:l})=>{const{background:o}=e;return(0,t.createElement)(a.Panel,null,(0,t.createElement)(a.PanelBody,{title:(0,n.__)("Background Color","am-lottieplayer"),initialOpen:!1},(0,t.createElement)(a.ColorPicker,{color:o,onChangeComplete:e=>l({background:e.hex})})))},y=({attributes:e,setAttributes:l})=>{const{clickEvent:o,hover:r,mouseout:s,once:u,scrollEvent:d,scrollDelay:p,selector:y}=e;return(0,t.createElement)(a.Panel,null,(0,t.createElement)(a.PanelBody,{title:(0,n.__)("Interactions","am-lottieplayer"),initialOpen:!0},(0,t.createElement)(c,{id:"am-lottieplayer-click-settings",title:(0,n.__)("Play on click","am-lottieplayer"),value:o,onChange:e=>l({clickEvent:e})}),(0,t.createElement)(c,{id:"am-lottieplayer-hover-settings",title:(0,n.__)("Play on mouseover","am-lottieplayer"),value:r,onChange:e=>l({hover:e})}),r&&(0,t.createElement)(a.SelectControl,{label:(0,n.__)("On mouseout","am-lottieplayer"),value:s,onChange:e=>l({mouseout:e}),options:[{value:i.Void,label:(0,n.__)("No event","am-lottieplayer")},{value:i.Stop,label:(0,n.__)("Stop","am-lottieplayer")},{value:i.Pause,label:(0,n.__)("Pause","am-lottieplayer")},{value:i.Reverse,label:(0,n.__)("Reverse","am-lottieplayer")}]}),(r||o)&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)(m,{id:"am-lottieplayer-settings",title:(0,n.__)("Trigger element","am-lottieplayer"),help:(0,n.__)("Anchor tag (id) for an element you want to trigger the animation, either by hover or click.","am-lottieplayer"),placeholder:"#",value:y?.id,onChange:e=>l({selector:{...y,id:e}})}),(0,t.createElement)(c,{id:"am-lottieplayer-selector-settings",title:(0,n.__)("Apply interaction only to trigger element","am-lottieplayer"),value:y?.exclude,onChange:e=>l({selector:{...y,exclude:e}})})),(0,t.createElement)(c,{id:"am-lottieplayer-scroll-settings",title:(0,n.__)("Play on scroll, when visible in viewport","am-lottieplayer"),value:d,onChange:e=>l({scrollEvent:e})}),d&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)(c,{id:"am-lottieplayer-once-settings",title:(0,n.__)("Play only once","am-lottieplayer"),value:u,onChange:e=>l({once:e})}),(0,t.createElement)(a.RangeControl,{label:(0,n.__)("Delay, in 10th of a second","am-lottieplayer"),min:0,max:50,step:1,value:null!=p?p:1,onChange:e=>l({scrollDelay:e})}))))},b=({attributes:e,setAttributes:l})=>{const{align:o,fullscreen:r,height:i,objectFit:s="contain",width:m}=e,d=(0,t.useCallback)((e=>"full"===o||"wide"===o?"100%":e&&"0"!==e?e:void 0),[o]);return(0,t.createElement)(a.Panel,null,(0,t.createElement)(a.PanelBody,{title:(0,n.__)("Dimensions","am-lottieplayer"),initialOpen:!0},(!r||"full"!==o)&&(0,t.createElement)(a.PanelRow,{className:"lottie-dimensions"},(0,t.createElement)(u,{id:"am-lottieplayer-width-settings",title:(0,n.__)("Width","am-lottieplayer"),value:d(m),onChange:e=>l({width:null!=e?e:null}),disabled:"full"===o||"wide"===o,placeholder:"full"===o||"wide"===o?"100%":"auto"}),(0,t.createElement)(u,{id:"am-lottieplayer-height-settings",title:(0,n.__)("Height","am-lottieplayer"),value:i&&"0"!==i.toString()?i:void 0,disabled:r,onChange:e=>l({height:e}),placeholder:"auto"})),("full"===o||"wide"===o)&&(0,t.createElement)(c,{id:"am-lottieplayer-fullscreen-settings",title:(0,n.__)("Fill screen","am-lottieplayer"),value:r,onChange:e=>l({fullscreen:e})}),(0,t.createElement)(a.SelectControl,{label:(0,n.__)("Object fit"),value:s,onChange:e=>{l({objectFit:e})},options:[{value:"contain",label:(0,n.__)("Contain","am-lottieplayer")},{value:"cover",label:(0,n.__)("Cover","am-lottieplayer")},{value:"fill",label:(0,n.__)("Fill","am-lottieplayer")},{value:"none",label:(0,n.__)("None","am-lottieplayer")}]})))};function g({attributes:e,className:a,clientId:n,context:r,isSelected:i,setAttributes:s}){return(0,t.createElement)(l.InspectorControls,null,(0,t.createElement)(d,{attributes:e,setAttributes:s,clientId:n,isSelected:i,context:r,className:a}),(0,t.createElement)(y,{attributes:e,setAttributes:s,clientId:n,isSelected:i,context:r,className:a}),(0,t.createElement)(b,{attributes:e,setAttributes:s,clientId:n,isSelected:i,context:r,className:a}),(0,t.createElement)(p,{attributes:e,setAttributes:s,clientId:n,isSelected:i,context:r,className:a}),(0,t.createElement)(o,{attributes:e,setAttributes:s,clientId:n,isSelected:i,context:r,className:a}))}function h(){return(0,t.createElement)(a.SVG,{role:"img",xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",viewBox:"0 0 80 80"},(0,t.createElement)("style",null,"\n\t\t\t\t.am-lottieplayer-path {\n\t\t\t\t\tfill: url(#a)\n\t\t\t\t}\n\t\t\t\t.block-editor-block-toolbar .am-lottieplayer-path,\n\t\t\t\t.components-panel .am-lottieplayer-path {\n\t\t\t\t\tfill: var(--wp-admin-theme-color-darker-10)\n\t\t\t\t}"),(0,t.createElement)("defs",null,(0,t.createElement)("radialGradient",{id:"a",cx:".2",cy:"1.07",r:"1.2"},(0,t.createElement)("stop",{offset:"10%"},(0,t.createElement)("animate",{attributeName:"stop-color",values:"#24708f;#e18d4c;#1f374c;#85c6e0;#24708f;",dur:"12s",repeatCount:"indefinite"})),(0,t.createElement)("stop",{offset:"90%"},(0,t.createElement)("animate",{attributeName:"stop-color",values:"#85c6e0;#24708f;#e18d4c;#1f374c;#85c6e0;",dur:"24s",repeatCount:"indefinite"})))),(0,t.createElement)(a.Path,{className:"am-lottieplayer-path",d:"M60 0H20C9 0 0 9 0 20v39.5C0 71 9 80 20 80h39.5c11 0 20.5-9 20.5-20V20C80 9 71 0 60 0zm4.9 59.7h-7.4V37.1c0-3.2.3-8.2.3-8.2h-.1s-.9 4.7-1.7 7.5l-6.8 23.3h-4l-11-30.2c-.8-2.2-2-5.8-2-5.8h-.1s-1.1 3.4-1.9 5.8L18.7 59.7H15l15-39.4h4.2l11.4 30c.3-1.4 1.2-6.1 2.4-10.2l5.6-19.8H65v39.4z"}))}function v({children:e,onSelectMedia:a,onError:o}){return(0,t.createElement)(l.MediaPlaceholder,{icon:(0,t.createElement)(l.BlockIcon,{icon:h}),labels:{title:(0,n.__)("AM Lottie Animation","am-lottieplayer"),instructions:(0,n.__)("Upload Lottie animations to WordPress and add them in Gutenberg.","am-lottieplayer")},onSelect:a,accept:".lottie, .json",allowedTypes:["application/json","application/zip"],onError:o},e)}const f=window.wp.data;function E({attributes:e,clientId:l}){const{align:a,alt:n,autoplay:o,background:r,controls:i,direction:s,height:c,loop:u,mode:m,objectFit:d,renderer:p,segment:y,speed:b,src:g,subframe:h,width:v}=e,{getBlockIndex:E}=(0,f.useSelect)((e=>e("core/block-editor")),[]),_=E(l),C=(0,t.useRef)(null),w=(0,t.useRef)(!0),k=y&&y?.[1]?JSON.stringify([y[0],y[1]]):void 0,S=(0,t.useCallback)((()=>{C.current&&(C.current.reload&&C.current.reload(),setTimeout((()=>{const e=C.current?.shadowRoot?.querySelector("canvas");"svg"===p&&e?.remove()}),100))}),[p]),N=e=>e&&"number"==typeof e?`${e}px`:null;return(0,t.useEffect)((()=>{w.current||S(),w.current=!1}),[o,_,s,u,m,d,S,p,y,b,h]),(0,t.createElement)("dotlottie-player",{id:l,class:"lottie-element",autoplay:o?"":null,controls:i?"":null,description:n,direction:s,loop:u?"":null,mode:m,objectfit:d,ref:C,renderer:p,segment:k,speed:b,subframe:h?"":null,src:g,style:{width:(x=v,"wide"===a||"full"===a?"100%":N(x)),height:N(c),backgroundColor:r,margin:"0 auto"}});var x}function _({attributes:e,clientId:l,isPlaceholder:n,setAttributes:o}){return(0,t.createElement)(t.Fragment,null,n?(0,t.createElement)(v,{onSelectMedia:({id:e,url:t,alt:l})=>{if(!t)return o({src:void 0,id:void 0});o({src:t,id:e?.toString(),alt:l})},onError:e=>{(e=>{(0,t.createElement)(a.Notice,{status:"error"},e)})(e)},children:void 0}):(0,t.createElement)(E,{attributes:e,clientId:l}))}const C=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gb/lottieplayer","title":"AM LottiePlayer","description":"Play Lottie animations on your WordPress website.","keywords":["animation","gif","motion","vector","SVG","Lottie","dotLottie"],"category":"media","supports":{"align":true,"anchor":true,"html":false},"textdomain":"am-lottieplayer","attributes":{"align":{"type":"string","default":"none"},"alt":{"type":"string","source":"attribute","selector":"dotlottie-player","attribute":"description","default":"","__experimentalRole":"content"},"autoplay":{"type":"boolean","source":"attribute","selector":"dotlottie-player","attribute":"autoplay"},"background":{"type":"string","default":"transparent"},"controls":{"type":"boolean","default":true,"source":"attribute","selector":"dotlottie-player","attribute":"controls"},"clickEvent":{"type":"boolean","default":false},"direction":{"type":"number","default":1},"height":{"type":"number","default":null},"hover":{"type":"boolean","default":false},"id":{"type":"string","default":null},"interactivityType":{"type":"string","default":"none"},"loop":{"type":"boolean","source":"attribute","selector":"dotlottie-player","attribute":"loop"},"mode":{"type":"string","default":"normal"},"mouseout":{"type":"string","default":"stop"},"objectFit":{"type":"string","default":"contain"},"once":{"type":"boolean","default":false},"renderer":{"type":"string","default":"svg"},"scrollEvent":{"type":"boolean","default":false},"scrollDelay":{"type":"number","default":null},"segment":{"type":"array","default":null},"selector":{"type":"object","default":{"id":null,"exclude":false}},"speed":{"type":"number","default":1},"src":{"type":"string","default":"","source":"attribute","selector":"dotlottie-player","attribute":"src","__experimentalRole":"content"},"subframe":{"type":"boolean","default":false},"width":{"type":"number","default":null}},"editorScript":"file:./index.js","editorStyle":"file:./index.css"}');(0,e.registerBlockType)(C,{icon:h,edit:function({attributes:e,className:n,clientId:o,context:r,isSelected:i,setAttributes:c}){const{id:u,src:m}=e,[d,p]=(0,t.useState)(!0),y=((e,t)=>!e&&(0,s.isBlobURL)(t))(u,m);return(0,t.useEffect)((()=>{p(!m||""===m)}),[m]),(0,t.createElement)(t.Fragment,null,(0,t.createElement)(g,{attributes:e,setAttributes:c,clientId:o,isSelected:i,context:r,className:n}),y&&(0,t.createElement)(a.Spinner,null),(0,t.createElement)("div",{...(0,l.useBlockProps)()},(0,t.createElement)(_,{attributes:e,setAttributes:c,isPlaceholder:d,clientId:o,isSelected:i,context:r,className:n})))},save:function({attributes:e}){const{align:a,alt:n,autoplay:o,background:r,controls:i,clickEvent:s,direction:c,height:u,hover:m,id:d,loop:p,mode:y,mouseout:b,objectFit:g,once:h,renderer:v,scrollEvent:f,scrollDelay:E,segment:_,selector:C,speed:w,src:k,subframe:S,width:N}=e,x=JSON.stringify(C),P=_&&_?.[1]?JSON.stringify([_[0],_[1]]):void 0;return(0,t.createElement)("figure",{id:d,...l.useBlockProps.save({className:`align${null!=a?a:"none"}`}),style:{backgroundColor:r,height:u&&0!==u?u:"auto",width:N&&0!==N?N:"auto",margin:"0 auto"}},(0,t.createElement)("dotlottie-player",{class:"lottie-element"+(C?.id?" has-selector":""),autoplay:o?"":null,controls:i?"":null,description:n,direction:c,"data-direction":c,"data-mouseover":m,"data-mouseout":b,"data-click":s,"data-scroll":f,"data-delay":E,"data-selector":x,"data-once":h,loop:p?"":null,mode:y,objectfit:g,renderer:v,segment:P,src:k,speed:w,subframe:S?"":null}))}})})();