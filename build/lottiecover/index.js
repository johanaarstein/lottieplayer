(()=>{var e,t={159:(e,t,l)=>{"use strict";const a=window.wp.blocks;function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},r.apply(this,arguments)}const o=window.wp.element;var n=l(184),i=l.n(n);const s=window.wp.blockEditor,c=window.wp.components,u=window.wp.i18n,p=window.wp.data,d=e=>{let{attributes:t,setAttributes:l}=e;const{alt:a,renderer:r="svg"}=t;return(0,o.createElement)(s.InspectorAdvancedControls,null,(0,o.createElement)(c.SelectControl,{label:(0,u.__)("Renderer"),value:r,onChange:e=>l({renderer:e}),options:[{value:"svg",label:"SVG"},{value:"canvas",label:"Canvas"}]}),(0,o.createElement)(c.TextareaControl,{label:(0,u.__)("Description","am-lottieplayer"),help:(0,u.__)("Describe the animation. This is helpful for screen readers and search engines.","am-lottieplayer"),value:a,onChange:e=>l({alt:e})}))},m=window.wp.blob;let h=function(e){return e.Bounce="bounce",e.Normal="normal",e}({}),b=function(e){return e.Void="void",e.Stop="stop",e.Pause="pause",e.Reverse="reverse",e}({});const y=e=>{let{id:t="",onChange:l,subTitle:a,title:r,value:n}=e;return(0,o.createElement)(c.BaseControl,{id:t,help:a,className:"lottie-switch-label"},(0,o.createElement)(c.BaseControl.VisualLabel,null,r),(0,o.createElement)(c.FormToggle,{checked:n,onChange:()=>l(!n)}))},g=e=>{let{id:t="",onChange:l,title:a,value:r="",disabled:n,placeholder:i=""}=e;return(0,o.createElement)(c.BaseControl,{id:t,help:a,className:"lottie-number-wrapper"},(0,o.createElement)(c.TextControl,{value:r,onChange:e=>l(+e),onKeyDown:e=>{(e=>{let{ctrlKey:t,key:l,metaKey:a,shiftKey:r}=e;return r||"End"===l||"Home"===l||"Backspace"===l||"Tab"===l||"Enter"===l||"Delete"===l||(t||a)&&("a"===l||"c"===l||"v"===l||"x"===l||"z"===l||"t"===l||"r"===l)})(e)||!(e=>{let{key:t}=e;return t>=0&&t<=9})(e)&&e.preventDefault()},disabled:n,placeholder:i}))},f=e=>{let{id:t="",onChange:l,title:a,help:r,value:n="",placeholder:i=""}=e;return(0,o.createElement)(c.BaseControl,{id:t,help:r,className:"lottie-number-wrapper"},(0,o.createElement)(c.BaseControl.VisualLabel,null,a),(0,o.createElement)(c.TextControl,{value:n,onChange:e=>l(e),placeholder:i}))},v=e=>{let{attributes:t,setAttributes:l}=e;const{autoplay:a,controls:r,direction:n,loop:i,mode:s=h.Normal,speed:p=1}=t;return(0,o.createElement)(c.Panel,null,(0,o.createElement)(c.PanelBody,{title:(0,u.__)("Animation Settings","am-lottieplayer"),initialOpen:!0},(0,o.createElement)(y,{id:"am-lottieplayer-autoplay-settings",title:(0,u.__)("Autoplay","am-lottieplayer"),value:a,onChange:e=>{l({autoplay:e})}}),(0,o.createElement)(y,{id:"am-lottieplayer-loop-settings",title:(0,u.__)("Loop","am-lottieplayer"),value:i,onChange:e=>{l({loop:e})}}),(0,o.createElement)(c.RangeControl,{label:(0,u.__)("Speed","am-lottieplayer"),min:.5,max:5,step:.5,value:p,onChange:e=>l({speed:e})}),(0,o.createElement)(y,{id:"am-lottieplayer-reverse-settings",title:(0,u.__)("Reverse","am-lottieplayer"),value:-1===n,onChange:e=>l({direction:e?-1:1})}),(0,o.createElement)(y,{id:"am-lottieplayer-controls-settings",title:(0,u.__)("Show controls","am-lottieplayer"),value:r,onChange:e=>l({controls:e})}),(0,o.createElement)(c.SelectControl,{label:(0,u.__)("Play mode","am-lottieplayer"),value:s,name:"mode",onChange:e=>l({mode:e}),options:[{value:h.Normal,label:(0,u.__)("Normal","am-lottieplayer")},{value:h.Bounce,label:(0,u.__)("Boomerang","am-lottieplayer")}]})))},_=e=>{let{attributes:t,setAttributes:l}=e;const{background:a}=t;return(0,o.createElement)(c.Panel,null,(0,o.createElement)(c.PanelBody,{title:(0,u.__)("Background Color","am-lottieplayer"),initialOpen:!1},(0,o.createElement)(c.ColorPicker,{color:a,onChangeComplete:e=>l({background:e.hex})})))},E=e=>{let{attributes:t,setAttributes:l}=e;const{clickEvent:a,hover:r,mouseout:n,selector:i}=t;return(0,o.createElement)(c.Panel,null,(0,o.createElement)(c.PanelBody,{title:(0,u.__)("Interactions","am-lottieplayer"),initialOpen:!0},(0,o.createElement)(y,{id:"am-lottieplayer-click-settings",title:(0,u.__)("Play on click","am-lottieplayer"),value:a,onChange:e=>l({clickEvent:e})}),(0,o.createElement)(y,{id:"am-lottieplayer-hover-settings",title:(0,u.__)("Play on mouseover","am-lottieplayer"),value:r,onChange:e=>l({hover:e})}),r&&(0,o.createElement)(c.SelectControl,{label:(0,u.__)("On mouseout","am-lottieplayer"),value:n,onChange:e=>l({mouseout:e}),options:[{value:b.Void,label:(0,u.__)("No event","am-lottieplayer")},{value:b.Stop,label:(0,u.__)("Stop","am-lottieplayer")},{value:b.Pause,label:(0,u.__)("Pause","am-lottieplayer")},{value:b.Reverse,label:(0,u.__)("Reverse","am-lottieplayer")}]}),(r||a)&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)(f,{id:"am-lottieplayer-settings",title:(0,u.__)("Selector","am-lottieplayer"),help:(0,u.__)("Anchor tag (id) for an element you want the interaction to apply to.","am-lottieplayer"),placeholder:"#",value:i?.id,onChange:e=>l({selector:{...i,id:e}})}),(0,o.createElement)(y,{id:"am-lottieplayer-selector-settings",title:(0,u.__)("Apply interaction only to selector","am-lottieplayer"),value:i?.exclude,onChange:e=>l({selector:{...i,exclude:e}})}))))},w=e=>{let{attributes:t,setAttributes:l}=e;const{align:a,fullscreen:r,height:n,objectFit:i="contain",width:s}=t,p=(0,o.useCallback)((e=>"full"===a||"wide"===a?"100%":e&&"0"!==e?e:void 0),[a]);return(0,o.createElement)(c.Panel,null,(0,o.createElement)(c.PanelBody,{title:(0,u.__)("Dimensions","am-lottieplayer"),initialOpen:!0},(!r||"full"!==a)&&(0,o.createElement)(c.PanelRow,{className:"lottie-dimensions"},(0,o.createElement)(g,{id:"am-lottieplayer-width-settings",title:(0,u.__)("Width","am-lottieplayer"),value:p(s),onChange:e=>l({width:null!=e?e:null}),disabled:"full"===a||"wide"===a,placeholder:"full"===a||"wide"===a?"100%":"auto"}),(0,o.createElement)(g,{id:"am-lottieplayer-height-settings",title:(0,u.__)("Height","am-lottieplayer"),value:n&&"0"!==n.toString()?n:void 0,disabled:r,onChange:e=>l({height:e}),placeholder:"auto"})),("full"===a||"wide"===a)&&(0,o.createElement)(y,{id:"am-lottieplayer-fullscreen-settings",title:(0,u.__)("Fill screen","am-lottieplayer"),value:r,onChange:e=>l({fullscreen:e})}),(0,o.createElement)(c.SelectControl,{label:(0,u.__)("Object fit"),value:i,onChange:e=>{l({objectFit:e})},options:[{value:"contain",label:(0,u.__)("Contain","am-lottieplayer")},{value:"cover",label:(0,u.__)("Cover","am-lottieplayer")},{value:"fill",label:(0,u.__)("Fill","am-lottieplayer")},{value:"none",label:(0,u.__)("None","am-lottieplayer")}]})))};function k(e){let{attributes:t,className:l,clientId:a,context:r,isSelected:n,setAttributes:i}=e;return(0,o.createElement)(s.InspectorControls,null,(0,o.createElement)(v,{attributes:t,setAttributes:i,clientId:a,isSelected:n,context:r,className:l}),(0,o.createElement)(E,{attributes:t,setAttributes:i,clientId:a,isSelected:n,context:r,className:l}),(0,o.createElement)(w,{attributes:t,setAttributes:i,clientId:a,isSelected:n,context:r,className:l}),(0,o.createElement)(_,{attributes:t,setAttributes:i,clientId:a,isSelected:n,context:r,className:l}),(0,o.createElement)(d,{attributes:t,setAttributes:i,clientId:a,isSelected:n,context:r,className:l}))}function C(){return(0,o.createElement)(c.SVG,{role:"img",xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",viewBox:"0 0 80 80"},(0,o.createElement)("style",null,"\n\t\t\t\t.am-lottieplayer-path {\n\t\t\t\t\tfill: url(#a)\n\t\t\t\t}\n\t\t\t\t.block-editor-block-toolbar .am-lottieplayer-path,\n\t\t\t\t.components-panel .am-lottieplayer-path {\n\t\t\t\t\tfill: var(--wp-admin-theme-color-darker-10)\n\t\t\t\t}"),(0,o.createElement)("defs",null,(0,o.createElement)("radialGradient",{id:"a",cx:".2",cy:"1.07",r:"1.2"},(0,o.createElement)("stop",{offset:"10%"},(0,o.createElement)("animate",{attributeName:"stop-color",values:"#24708f;#e18d4c;#1f374c;#85c6e0;#24708f;",dur:"12s",repeatCount:"indefinite"})),(0,o.createElement)("stop",{offset:"90%"},(0,o.createElement)("animate",{attributeName:"stop-color",values:"#85c6e0;#24708f;#e18d4c;#1f374c;#85c6e0;",dur:"24s",repeatCount:"indefinite"})))),(0,o.createElement)(c.Path,{className:"am-lottieplayer-path",d:"M60 0H20C9 0 0 9 0 20v39.5C0 71 9 80 20 80h39.5c11 0 20.5-9 20.5-20V20C80 9 71 0 60 0zm4.9 59.7h-7.4V37.1c0-3.2.3-8.2.3-8.2h-.1s-.9 4.7-1.7 7.5l-6.8 23.3h-4l-11-30.2c-.8-2.2-2-5.8-2-5.8h-.1s-1.1 3.4-1.9 5.8L18.7 59.7H15l15-39.4h4.2l11.4 30c.3-1.4 1.2-6.1 2.4-10.2l5.6-19.8H65v39.4z"}))}function S(e){let{children:t,onSelectMedia:l,onError:a}=e;return(0,o.createElement)(s.MediaPlaceholder,{icon:(0,o.createElement)(s.BlockIcon,{icon:C}),labels:{title:(0,u.__)("AM Lottie Animation","am-lottieplayer"),instructions:(0,u.__)("Upload Lottie animations to WordPress and add them in Gutenberg.","am-lottieplayer")},onSelect:l,accept:".lottie, .json",allowedTypes:["application/json","application/zip"],onError:a},t)}function x(e){let{attributes:t,clientId:l}=e;const{align:a,alt:r,autoplay:n,background:i,controls:s,direction:c,height:u,loop:d,mode:m,objectFit:h,renderer:b,speed:y,src:g,width:f}=t,{getBlockIndex:v}=(0,p.useSelect)("core/block-editor",[]),_=v(l),E=(0,o.useRef)(null),w=(0,o.useRef)(!0),k=(0,o.useCallback)((()=>{E.current&&(E.current.reload&&E.current.reload(),setTimeout((()=>{const e=E.current?.shadowRoot?.querySelector("canvas");"svg"===b&&e?.remove()}),100))}),[b]),C=(0,o.useCallback)((e=>"wide"===a||"full"===a?"100%":e&&"number"==typeof e?`${e}px`:null),[a]);return(0,o.useEffect)((()=>{w.current||k(),w.current=!1}),[_,h,k,b,y]),(0,o.useEffect)((()=>{E.current&&d&&n&&"playing"!==E.current.currentState&&E.current.play&&E.current.play()}),[n,d]),(0,o.createElement)("dotlottie-player",{class:"lottie-element",autoplay:n?"":null,controls:s?"":null,description:r,direction:c,loop:d?"":null,mode:m,objectfit:h,ref:E,renderer:b,speed:y,src:g,style:{width:"number"==typeof f?C(f):void 0,height:u&&"number"==typeof u?`${u}px`:void 0,backgroundColor:i,margin:"0 auto"}})}function N(e){let{attributes:t,clientId:l,isPlaceholder:a,setAttributes:r}=e;return(0,o.createElement)(o.Fragment,null,a?(0,o.createElement)(S,{onSelectMedia:e=>{let{id:t,url:l,alt:a}=e;if(!l)return r({src:void 0,id:void 0});r({src:l,id:t,alt:a})},onError:e=>{(e=>{(0,o.createElement)(c.Notice,{status:"error"},e)})(e)},children:void 0}):(0,o.createElement)(x,{attributes:t,clientId:l}))}function P(e){let{className:t,fullscreen:l,onResizeStart:a,onResize:n,onResizeStop:s,showHandle:u,...p}=e;const[d,m]=(0,o.useState)(!1);return(0,o.createElement)(c.ResizableBox,r({className:i()(t,{"is-resizing":d}),enable:{bottom:!l},minHeight:10,onResizeStart:a,onResize:(e,t,l)=>{n(l.clientHeight),d||m(!0)},onResizeStop:(e,t,l)=>{s(l.clientHeight),m(!1)},showHandle:u},p))}const B=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gb/lottiecover","title":"AM LottieCover","category":"media","description":"Add a Lottie animation with a text overlay — great for headers.","keywords":["animation","gif","motion","vector","SVG","Lottie","dotLottie"],"textdomain":"am-lottieplayer","attributes":{"align":{"type":"string","default":"full"},"allowedBlocks":{"type":"array","default":["core/paragraph","core/heading","core/buttons"]},"alt":{"type":"string","source":"attribute","selector":"dotlottie-player","attribute":"description","default":"","__experimentalRole":"content"},"autoplay":{"type":"boolean","source":"attribute","selector":"dotlottie-player","attribute":"autoplay","default":true},"controls":{"type":"boolean","source":"attribute","selector":"dotlottie-player","attribute":"controls"},"content":{"type":"string","default":""},"contentPosition":{"type":"string","default":""},"clickEvent":{"type":"boolean","default":false},"dimRatio":{"type":"number","default":50},"direction":{"type":"number","default":1},"focalPoint":{"type":"object","default":{}},"fullscreen":{"type":"boolean","default":false},"hasParallax":{"type":"boolean","default":false},"height":{"type":"number","default":null},"heightUnit":{"type":"string","default":"px"},"hover":{"type":"boolean","default":false},"id":{"type":"string","default":null},"isDark":{"type":"boolean","default":true},"loop":{"type":"boolean","source":"attribute","selector":"dotlottie-player","attribute":"loop","default":true},"mode":{"type":"string","default":"normal"},"objectFit":{"type":"string","default":"cover"},"overlayColor":{"type":"string","default":"transparent"},"mouseOut":{"type":"string","default":"stop"},"renderer":{"type":"string","default":"svg"},"selector":{"type":"object","default":{"id":null,"exclude":false}},"speed":{"type":"number","default":1},"src":{"type":"string","default":""},"templateLock":{"type":["string","boolean"],"enum":["all","insert","contentOnly",false]},"width":{"type":"number","default":null}},"supports":{"anchor":true,"align":true,"html":false,"spacing":{"padding":true,"margin":["top","bottom"],"__experimentalDefaultControls":{"padding":true,"margin":true}},"color":{"text":false,"background":false},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}}},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');(0,a.registerBlockType)(B,{icon:C,edit:function(e){let{attributes:t,className:l,clientId:a,context:n,isSelected:d,setAttributes:h,toggleSelection:b}=e;const{allowedBlocks:y=["core/paragraph","core/heading","core/buttons"],background:g,fullscreen:f,height:v,heightUnit:_="px",id:E,src:w,templateLock:C}=t,S=((e,t)=>!e&&(0,m.isBlobURL)(t))(E,w),x=(0,o.useRef)(),[B,O]=(0,o.useState)(!0),A=(0,s.useBlockProps)({ref:x}),j={minHeight:f?"100vh":(v&&_?`${v}${_}`:v)||void 0},R=(0,p.useSelect)((e=>!!e(s.store).getBlock(a).innerBlocks.length),[a]),z=(e=>[["core/paragraph",{align:"center",placeholder:(0,u.__)("Write title…","am-lottieplayer"),...e}]])({fontSize:!!(0,s.useSetting)("typography.fontSizes")?.length?"large":void 0}),I=(0,s.useInnerBlocksProps)({className:"wp-block-gb-lottiecover__inner-container"},{template:R?void 0:z,templateInsertUpdatesSelection:!0,allowedBlocks:y,templateLock:C});return(0,o.useEffect)((()=>{O(!w||""===w)}),[w]),(0,o.createElement)(o.Fragment,null,(0,o.createElement)(k,{attributes:t,setAttributes:h,clientId:a,isSelected:!1,context:n,className:l}),(0,o.createElement)("div",r({},A,{className:i()({"is-placeholder":B},A.className),style:{...j,...A.style}}),(0,o.createElement)(P,{className:"block-library-lottiecover__resize-container",fullscreen:f,onResizeStart:()=>{h({heightUnit:"px"}),b&&b(!1)},onResize:e=>{h({height:e})},onResizeStop:e=>{h({height:e}),b&&b(!0)},showHandle:d}),(0,o.createElement)("span",{"aria-hidden":"true",className:"wp-block-gb-lottiecover__background",style:{backgroundColor:g},hidden:B}),S&&(0,o.createElement)(c.Spinner,null),(0,o.createElement)(N,{attributes:t,setAttributes:h,isPlaceholder:B,clientId:a,isSelected:!1,context:n,className:l}),!B&&(0,o.createElement)("div",I)))},save:function(e){let{attributes:t}=e;const{align:l,alt:a,autoplay:r,background:n,controls:i,clickEvent:c,direction:u,fullscreen:p,height:d,heightUnit:m,hover:h,loop:b,mode:y,mouseout:g,objectFit:f,renderer:v,selector:_,speed:E,src:w,width:k}=t,C={minHeight:p?"100vh":(d&&m?`${d}${m}`:d)||void 0},S=JSON.stringify(_);return(0,o.createElement)("div",s.useBlockProps.save({style:C}),(0,o.createElement)("span",{"aria-hidden":"true",className:"wp-block-gb-lottiecover__background",style:{backgroundColor:n}}),(0,o.createElement)("dotlottie-player",{class:"lottie-element "+(_?.id?"has-selector":""),autoplay:r,controls:i,description:a,direction:u,"data-direction":u,"data-mouseover":h,"data-mouseout":g,"data-click":c,"data-selector":S,loop:b,mode:y,objectfit:f,renderer:v,speed:E,src:w,style:{width:(x=k,"wide"===l||"full"===l?"100%":x&&"number"==typeof x?`${x}px`:null),height:d&&"number"==typeof d?`${d}px`:null,backgroundColor:n}}),(0,o.createElement)("div",s.useInnerBlocksProps.save({className:"wp-block-gb-lottiecover__inner-container"})));var x}})},184:(e,t)=>{var l;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var o=typeof l;if("string"===o||"number"===o)e.push(l);else if(Array.isArray(l)){if(l.length){var n=r.apply(null,l);n&&e.push(n)}}else if("object"===o){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){e.push(l.toString());continue}for(var i in l)a.call(l,i)&&l[i]&&e.push(i)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(l=function(){return r}.apply(t,[]))||(e.exports=l)}()}},l={};function a(e){var r=l[e];if(void 0!==r)return r.exports;var o=l[e]={exports:{}};return t[e](o,o.exports,a),o.exports}a.m=t,e=[],a.O=(t,l,r,o)=>{if(!l){var n=1/0;for(u=0;u<e.length;u++){for(var[l,r,o]=e[u],i=!0,s=0;s<l.length;s++)(!1&o||n>=o)&&Object.keys(a.O).every((e=>a.O[e](l[s])))?l.splice(s--,1):(i=!1,o<n&&(n=o));if(i){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[l,r,o]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={841:0,560:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var r,o,[n,i,s]=l,c=0;if(n.some((t=>0!==e[t]))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(s)var u=s(a)}for(t&&t(l);c<n.length;c++)o=n[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},l=globalThis.webpackChunkam_lottieplayer=globalThis.webpackChunkam_lottieplayer||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var r=a.O(void 0,[560],(()=>a(159)));r=a.O(r)})();