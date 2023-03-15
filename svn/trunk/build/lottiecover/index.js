(()=>{var e,t={449:(e,t,l)=>{"use strict";const a=window.wp.blocks,o=window.wp.i18n;function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},r.apply(this,arguments)}const n=window.wp.element;var i=l(184),s=l.n(i);const c=window.wp.blockEditor,u=window.wp.components,p=window.wp.data,d=window.wp.blob,m=e=>{let{attributes:t,setAttributes:l}=e;const{mode:a="normal",objectFit:r="contain",renderer:i="svg"}=t;return(0,n.createElement)(c.InspectorAdvancedControls,{key:"inspector"},(0,n.createElement)(u.SelectControl,{label:(0,o.__)("Renderer"),value:i,onChange:e=>l({renderer:e}),options:[{value:"svg",label:"SVG"},{value:"canvas",label:"Canvas"}]}),(0,n.createElement)(u.SelectControl,{label:(0,o.__)("Object fit"),value:r,onChange:e=>{l({objectFit:e})},options:[{value:"contain",label:(0,o.__)("Contain","am-lottieplayer")},{value:"cover",label:(0,o.__)("Cover","am-lottieplayer")},{value:"fill",label:(0,o.__)("Fill","am-lottieplayer")},{value:"none",label:(0,o.__)("None","am-lottieplayer")}]}),(0,n.createElement)(u.SelectControl,{label:(0,o.__)("Play mode","am-lottieplayer"),value:a,name:"mode",onChange:e=>l({mode:e}),options:[{value:"normal",label:(0,o.__)("Normal","am-lottieplayer")},{value:"bounce",label:(0,o.__)("Bounce","am-lottieplayer")}]}))},h=e=>{let{id:t="",onChange:l,subTitle:a,title:o,value:r}=e;return(0,n.createElement)(u.BaseControl,{id:t,help:a,className:"lottie-switch-label"},(0,n.createElement)(u.BaseControl.VisualLabel,null,o),(0,n.createElement)(u.FormToggle,{checked:r,onChange:()=>l(!r)}))},b=e=>{let{id:t="",onChange:l,title:a,value:o="",disabled:r,placeholder:i=""}=e;return(0,n.createElement)(u.BaseControl,{id:t,help:a,className:"lottie-number-wrapper"},(0,n.createElement)(u.TextControl,{value:o,onChange:e=>l(+e),onKeyDown:e=>{(e=>{let{ctrlKey:t,key:l,metaKey:a,shiftKey:o}=e;return o||"End"===l||"Home"===l||"Backspace"===l||"Tab"===l||"Enter"===l||"Delete"===l||(t||a)&&("a"===l||"c"===l||"v"===l||"x"===l||"z"===l||"t"===l||"r"===l)})(e)||!(e=>{let{key:t}=e;return t>=0&&t<=9})(e)&&e.preventDefault()},disabled:r,placeholder:i}))},g=e=>{let{attributes:t,setAttributes:l}=e;const{align:a,alt:r,autoplay:i,controls:s,click:c,direction:p,height:d,hover:m,loop:g,mouseout:y,speed:f=1,width:v}=t,_=(0,n.useCallback)((e=>"full"===a||"wide"===a?"100%":e&&"0"!==e?e:void 0),[a]);return(0,n.createElement)(u.Panel,null,(0,n.createElement)(u.PanelBody,{title:(0,o.__)("Animation Settings","am-lottieplayer"),initialOpen:!0},(0,n.createElement)(h,{id:"am-lottieplayer-autoplay-settings",title:(0,o.__)("Autoplay","am-lottieplayer"),value:i,onChange:e=>{l({autoplay:e})}}),(0,n.createElement)(h,{id:"am-lottieplayer-loop-settings",title:(0,o.__)("Loop","am-lottieplayer"),value:g,onChange:e=>{l({loop:e})}}),(0,n.createElement)(u.RangeControl,{label:(0,o.__)("Speed","am-lottieplayer"),min:.5,max:5,step:.5,value:f,onChange:e=>l({speed:e})}),(0,n.createElement)(h,{id:"am-lottieplayer-reverse-settings",title:(0,o.__)("Reverse","am-lottieplayer"),value:-1===p,onChange:e=>l({direction:e?-1:1})}),(0,n.createElement)(h,{id:"am-lottieplayer-controls-settings",title:(0,o.__)("Show controls","am-lottieplayer"),value:s,onChange:e=>l({controls:e})}),(0,n.createElement)(h,{id:"am-lottieplayer-click-settings",title:(0,o.__)("Play on click","am-lottieplayer"),value:c,onChange:e=>l({click:e})}),(0,n.createElement)(h,{id:"am-lottieplayer-hover-settings",title:(0,o.__)("Play on mouseover","am-lottieplayer"),value:m,onChange:e=>l({hover:e})}),(0,n.createElement)(u.SelectControl,{label:(0,o.__)("On mouseout","am-lottieplayer"),value:y,onChange:e=>l({mouseout:e}),options:[{value:"void",label:(0,o.__)("No event","am-lottieplayer")},{value:"stop",label:(0,o.__)("Stop","am-lottieplayer")},{value:"pause",label:(0,o.__)("Pause","am-lottieplayer")},{value:"reverse",label:(0,o.__)("Reverse","am-lottieplayer")}],disabled:!m}),(0,n.createElement)(u.TextareaControl,{label:(0,o.__)("Description","am-lottieplayer"),help:(0,o.__)("Describe the animation. This is helpful for screen readers and search engines.","am-lottieplayer"),value:r,onChange:e=>l({alt:e})}),(0,n.createElement)(u.PanelRow,{className:"lottie-dimensions"},(0,n.createElement)(b,{id:"am-lottieplayer-width-settings",title:(0,o.__)("Width","am-lottieplayer"),value:_(v),onChange:e=>l({width:null!=e?e:null}),disabled:"full"===a||"wide"===a,placeholder:"full"===a||"wide"===a?"100%":"auto"}),(0,n.createElement)(b,{id:"am-lottieplayer-height-settings",title:(0,o.__)("Height","am-lottieplayer"),value:d&&"0"!==d.toString()?d:null,onChange:e=>l({height:null!=e?e:null}),placeholder:"auto"}))))},y=e=>{let{attributes:t,setAttributes:l}=e;const{background:a}=t;return(0,n.createElement)(u.Panel,null,(0,n.createElement)(u.PanelBody,{title:(0,o.__)("Background Color","am-lottieplayer"),initialOpen:!1},(0,n.createElement)(u.ColorPicker,{color:a,onChangeComplete:e=>l({background:e.hex})})))};function f(e){let{attributes:t,setAttributes:l}=e;return(0,n.createElement)(c.InspectorControls,null,(0,n.createElement)(g,{attributes:t,setAttributes:l}),(0,n.createElement)(y,{attributes:t,setAttributes:l}),(0,n.createElement)(m,{attributes:t,setAttributes:l}))}function v(){return(0,n.createElement)(u.SVG,{role:"img",xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",viewBox:"0 0 80 80"},(0,n.createElement)("style",null,"\n\t\t\t\t.am-lottieplayer-path {\n\t\t\t\t\tfill: url(#a)\n\t\t\t\t}\n\t\t\t\t.block-editor-block-toolbar .am-lottieplayer-path,\n\t\t\t\t.components-panel .am-lottieplayer-path {\n\t\t\t\t\tfill: var(--wp-admin-theme-color-darker-10)\n\t\t\t\t}"),(0,n.createElement)("defs",null,(0,n.createElement)("radialGradient",{id:"a",cx:".2",cy:"1.07",r:"1.2"},(0,n.createElement)("stop",{offset:"10%"},(0,n.createElement)("animate",{attributeName:"stop-color",values:"#24708f;#e18d4c;#1f374c;#85c6e0;#24708f;",dur:"12s",repeatCount:"indefinite"})),(0,n.createElement)("stop",{offset:"90%"},(0,n.createElement)("animate",{attributeName:"stop-color",values:"#85c6e0;#24708f;#e18d4c;#1f374c;#85c6e0;",dur:"24s",repeatCount:"indefinite"})))),(0,n.createElement)(u.Path,{className:"am-lottieplayer-path",d:"M60 0H20C9 0 0 9 0 20v39.5C0 71 9 80 20 80h39.5c11 0 20.5-9 20.5-20V20C80 9 71 0 60 0zm4.9 59.7h-7.4V37.1c0-3.2.3-8.2.3-8.2h-.1s-.9 4.7-1.7 7.5l-6.8 23.3h-4l-11-30.2c-.8-2.2-2-5.8-2-5.8h-.1s-1.1 3.4-1.9 5.8L18.7 59.7H15l15-39.4h4.2l11.4 30c.3-1.4 1.2-6.1 2.4-10.2l5.6-19.8H65v39.4z"}))}function _(e){let{children:t,onSelectMedia:l,onError:a}=e;return(0,n.createElement)(c.MediaPlaceholder,{icon:(0,n.createElement)(c.BlockIcon,{icon:v}),labels:{title:(0,o.__)("AM Lottie Animation","am-lottieplayer"),instructions:(0,o.__)("Upload Lottie animations to WordPress and add them in Gutenberg.","am-lottieplayer")},onSelect:l,accept:".lottie, .json",allowedTypes:["application/json","application/zip"],onError:a},t)}function E(e){let{attributes:t}=e;const{align:l,alt:a,autoplay:o,background:r,controls:i,direction:s,height:c,loop:u,mode:p,objectFit:d,renderer:m,speed:h,src:b,width:g}=t,y=(0,n.useRef)(null),f=(0,n.useRef)(!0),v=(0,n.useCallback)((()=>{y.current&&(y.current.reload(),setTimeout((()=>{const e=y.current?.shadowRoot?.querySelector("canvas");"svg"===m&&e&&e.remove()}),100))}),[m]),_=(0,n.useCallback)((e=>"wide"===l||"full"===l?"100%":e&&"number"==typeof e?`${e}px`:null),[l]);return(0,n.useEffect)((()=>{f.current||v(),f.current=!1}),[d,v,m,h]),(0,n.useEffect)((()=>{y.current&&u&&o&&"playing"!==y.current.currentState&&y.current?.play()}),[o,u]),(0,n.createElement)("dotlottie-player",{class:"lottie-element",autoplay:o?"":null,controls:i?"":null,description:a,direction:s,loop:u?"":null,mode:p,objectfit:d,ref:y,renderer:m,speed:h,src:b,style:{width:"number"==typeof g?_(g):null,height:c&&"number"==typeof c?`${c}px`:null,backgroundColor:r,margin:"0 auto"}})}function w(e){let{attributes:t,setAttributes:l,isPlaceholder:a}=e;return(0,n.createElement)(n.Fragment,null,a?(0,n.createElement)(_,{onSelectMedia:e=>{let{id:t,url:a,alt:o}=e;l(a?{src:a,id:t,alt:o}:{src:void 0,id:null})},onError:e=>{(e=>{(0,n.createElement)(u.Notice,{status:"error"},e)})(e)},children:void 0}):(0,n.createElement)(E,{attributes:t}))}function k(e){let{className:t,onResizeStart:l,onResize:a,onResizeStop:o,showHandle:i,...c}=e;const[p,d]=(0,n.useState)(!1);return(0,n.createElement)(u.ResizableBox,r({className:s()(t,{"is-resizing":p}),enable:{top:!1,right:!1,bottom:!0,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},minHeight:10,onResizeStart:(e,t,o)=>{l(o.clientHeight),a(o.clientHeight)},onResize:(e,t,l)=>{a(l.clientHeight),p||d(!0)},onResizeStop:(e,t,l)=>{o(l.clientHeight),d(!1)},showHandle:i},c))}const C=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gb/lottiecover","title":"AM LottieCover","category":"media","description":"Add a Lottie animation with a text overlay — great for headers.","textdomain":"am-lottieplayer","attributes":{"align":{"type":"string","default":"none"},"allowedBlocks":{"type":"array","default":["core/paragraph","core/heading","core/buttons"]},"alt":{"type":"string","source":"attribute","selector":"dotlottie-player","attribute":"description","default":"","__experimentalRole":"content"},"autoplay":{"type":"boolean","source":"attribute","selector":"dotlottie-player","attribute":"autoplay","default":true},"controls":{"type":"boolean","source":"attribute","selector":"dotlottie-player","attribute":"controls"},"content":{"type":"string","default":""},"contentPosition":{"type":"string","default":""},"clickEvent":{"type":"boolean","default":false},"dimRatio":{"type":"number","default":50},"direction":{"type":"number","default":1},"focalPoint":{"type":"object","default":{}},"hasParallax":{"type":"boolean","default":false},"height":{"type":"number","default":null},"heightUnit":{"type":"string","default":"px"},"hover":{"type":"boolean","default":false},"id":{"type":"string","default":null},"isDark":{"type":"boolean","default":true},"loop":{"type":"boolean","source":"attribute","selector":"dotlottie-player","attribute":"loop","default":true},"mode":{"type":"string","default":"normal"},"objectFit":{"type":"string","default":"cover"},"overlayColor":{"type":"string","default":"transparent"},"mouseOut":{"type":"string","default":"stop"},"renderer":{"type":"string","default":"svg"},"speed":{"type":"number","default":1},"src":{"type":"string","default":""},"templateLock":{"type":["string","boolean"],"enum":["all","insert","contentOnly",false]},"width":{"type":"number","default":null}},"supports":{"anchor":true,"align":true,"html":false,"spacing":{"padding":true,"margin":["top","bottom"],"__experimentalDefaultControls":{"padding":true}},"color":{"text":false,"background":false},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}}},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');(0,a.registerBlockType)(C,{icon:v,keywords:[(0,o.__)("animation","am-lottieplayer"),"gif",(0,o.__)("motion","am-lottieplayer"),(0,o.__)("vector","am-lottieplayer"),(0,o.__)("cover","am-lottieplayer"),(0,o.__)("background","am-lottieplayer")],edit:function(e){let{attributes:t,clientId:l,isSelected:a,setAttributes:i,toggleSelection:m}=e;const{allowedBlocks:h=["core/paragraph","core/heading","core/buttons"],background:b,height:g,heightUnit:y="px",id:v,src:_,templateLock:E}=t,C=((e,t)=>!e&&(0,d.isBlobURL)(t))(v,_),S=(0,n.useRef)(),[x,P]=(0,n.useState)(!0),O=(0,c.useBlockProps)({ref:S}),R={minHeight:(g&&y?`${g}${y}`:g)||void 0},j=(0,p.useSelect)((e=>!!e(c.store).getBlock(l).innerBlocks.length),[l]),B=(e=>[["core/paragraph",{align:"center",placeholder:(0,o.__)("Write title…","am-lottieplayer"),...e}]])({fontSize:!!(0,c.useSetting)("typography.fontSizes")?.length?"large":void 0}),z=(0,c.useInnerBlocksProps)({className:"wp-block-gb-lottiecover__inner-container"},{template:j?void 0:B,templateInsertUpdatesSelection:!0,allowedBlocks:h,templateLock:E});return(0,n.useEffect)((()=>{P(!_||""===_)}),[_]),(0,n.createElement)(n.Fragment,null,(0,n.createElement)(f,{attributes:t,setAttributes:i}),(0,n.createElement)("div",r({},O,{className:s()({"is-placeholder":x},O.className),style:{...R,...O.style}}),(0,n.createElement)(k,{className:"block-library-lottiecover__resize-container",onResizeStart:()=>{i({heightUnit:"px"}),m&&m(!1)},onResize:e=>{i({height:e})},onResizeStop:e=>{i({height:e}),m&&m(!0)},showHandle:a}),(0,n.createElement)("span",{"aria-hidden":"true",className:"wp-block-gb-lottiecover__background",style:{backgroundColor:b},hidden:x}),C&&(0,n.createElement)(u.Spinner,null),(0,n.createElement)(w,{attributes:t,setAttributes:i,isPlaceholder:x}),!x&&(0,n.createElement)("div",z)))},save:function(e){let{attributes:t}=e;const{align:l,alt:a,autoplay:o,background:r,controls:i,clickEvent:s,direction:u,height:p,heightUnit:d,hover:m,loop:h,mode:b,mouseout:g,objectFit:y,renderer:f,speed:v,src:_,width:E}=t,w={minHeight:(p&&d?`${p}${d}`:p)||void 0};return(0,n.createElement)("div",c.useBlockProps.save({style:w}),(0,n.createElement)("span",{"aria-hidden":"true",className:"wp-block-gb-lottiecover__background",style:{backgroundColor:r}}),(0,n.createElement)("dotlottie-player",{class:"lottie-element",autoplay:o?"":null,controls:i?"":null,description:a,direction:u,"data-direction":u,"data-mouseover":m,"data-mouseout":g,"data-click":s,loop:h?"":null,mode:b,objectfit:y,renderer:f,speed:v,src:_,style:{width:(k=E,"wide"===l||"full"===l?"100%":k&&"number"==typeof k?`${k}px`:null),height:p&&"number"==typeof p?`${p}px`:null,backgroundColor:r}}),(0,n.createElement)("div",c.useInnerBlocksProps.save({className:"wp-block-gb-lottiecover__inner-container"})));var k}})},184:(e,t)=>{var l;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var r=typeof l;if("string"===r||"number"===r)e.push(l);else if(Array.isArray(l)){if(l.length){var n=o.apply(null,l);n&&e.push(n)}}else if("object"===r){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){e.push(l.toString());continue}for(var i in l)a.call(l,i)&&l[i]&&e.push(i)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(l=function(){return o}.apply(t,[]))||(e.exports=l)}()}},l={};function a(e){var o=l[e];if(void 0!==o)return o.exports;var r=l[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,e=[],a.O=(t,l,o,r)=>{if(!l){var n=1/0;for(u=0;u<e.length;u++){for(var[l,o,r]=e[u],i=!0,s=0;s<l.length;s++)(!1&r||n>=r)&&Object.keys(a.O).every((e=>a.O[e](l[s])))?l.splice(s--,1):(i=!1,r<n&&(n=r));if(i){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[l,o,r]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={841:0,560:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var o,r,[n,i,s]=l,c=0;if(n.some((t=>0!==e[t]))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(s)var u=s(a)}for(t&&t(l);c<n.length;c++)r=n[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},l=globalThis.webpackChunkam_lottieplayer=globalThis.webpackChunkam_lottieplayer||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var o=a.O(void 0,[560],(()=>a(449)));o=a.O(o)})();