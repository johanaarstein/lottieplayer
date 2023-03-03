(()=>{var e,t={49:(e,t,l)=>{"use strict";const a=window.wp.blocks,o=window.wp.i18n;function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},r.apply(this,arguments)}const n=window.wp.element,i=window.wp.blockEditor,s=window.wp.data;var c=l(184),u=l.n(c);const p=window.wp.components,d=e=>{let{attributes:t,setAttributes:l}=e;const{mode:a="normal",objectFit:r="contain",renderer:s="svg"}=t;return(0,n.createElement)(i.InspectorAdvancedControls,{key:"inspector"},(0,n.createElement)(p.SelectControl,{label:(0,o.__)("Renderer"),value:s,onChange:e=>l({renderer:e}),options:[{value:"svg",label:"SVG"},{value:"canvas",label:"Canvas"}]}),(0,n.createElement)(p.SelectControl,{label:(0,o.__)("Object fit"),value:r,onChange:e=>{l({objectFit:e})},options:[{value:"contain",label:(0,o.__)("Contain","am-lottieplayer")},{value:"cover",label:(0,o.__)("Cover","am-lottieplayer")},{value:"fill",label:(0,o.__)("Fill","am-lottieplayer")},{value:"none",label:(0,o.__)("None","am-lottieplayer")}]}),(0,n.createElement)(p.SelectControl,{label:(0,o.__)("Play mode","am-lottieplayer"),value:a,name:"mode",onChange:e=>l({mode:e}),options:[{value:"normal",label:(0,o.__)("Normal","am-lottieplayer")},{value:"bounce",label:(0,o.__)("Bounce","am-lottieplayer")}]}))},m=e=>{let{id:t="",onChange:l,subTitle:a,title:o,value:r}=e;return(0,n.createElement)(p.BaseControl,{id:t,help:a,className:"lottie-switch-label"},(0,n.createElement)(p.BaseControl.VisualLabel,null,o),(0,n.createElement)(p.FormToggle,{checked:r,onChange:()=>l(!r)}))},h=e=>{let{id:t="",onChange:l,title:a,value:o=null,disabled:r,placeholder:i=""}=e;return(0,n.createElement)(p.BaseControl,{id:t,help:a,className:"lottie-number-wrapper"},(0,n.createElement)(p.TextControl,{value:o,onChange:e=>l(+e),onKeyDown:e=>{(e=>{let{ctrlKey:t,key:l,metaKey:a,shiftKey:o}=e;return o||"End"===l||"Home"===l||"Backspace"===l||"Tab"===l||"Enter"===l||"Delete"===l||(t||a)&&("a"===l||"c"===l||"v"===l||"x"===l||"z"===l||"t"===l||"r"===l)})(e)||!(e=>{let{key:t}=e;return t>=0&&t<=9})(e)&&e.preventDefault()},disabled:r,placeholder:i}))},g=e=>{let{attributes:t,setAttributes:l}=e;const{align:a,alt:r,autoplay:i,controls:s,click:c,direction:u,height:d,hover:g,loop:y,mouseout:b,speed:f=1,width:v}=t,_=(0,n.useCallback)((e=>"full"===a||"wide"===a?"100%":e&&"0"!==e?e:null),[a]);return(0,n.createElement)(p.Panel,null,(0,n.createElement)(p.PanelBody,{title:(0,o.__)("Animation Settings","am-lottieplayer"),initialOpen:!0},(0,n.createElement)(m,{id:"am-lottieplayer-autoplay-settings",title:(0,o.__)("Autoplay","am-lottieplayer"),value:i,onChange:e=>{l({autoplay:e})}}),(0,n.createElement)(m,{id:"am-lottieplayer-loop-settings",title:(0,o.__)("Loop","am-lottieplayer"),value:y,onChange:e=>{l({loop:e})}}),(0,n.createElement)(p.RangeControl,{label:(0,o.__)("Speed","am-lottieplayer"),min:.5,max:5,step:.5,value:f,onChange:e=>l({speed:e})}),(0,n.createElement)(m,{id:"am-lottieplayer-reverse-settings",title:(0,o.__)("Reverse","am-lottieplayer"),value:-1===u,onChange:e=>l({direction:e?-1:1})}),(0,n.createElement)(m,{id:"am-lottieplayer-controls-settings",title:(0,o.__)("Show controls","am-lottieplayer"),value:s,onChange:e=>l({controls:e})}),(0,n.createElement)(m,{id:"am-lottieplayer-click-settings",title:(0,o.__)("Play on click","am-lottieplayer"),value:c,onChange:e=>l({click:e})}),(0,n.createElement)(m,{id:"am-lottieplayer-hover-settings",title:(0,o.__)("Play on mouseover","am-lottieplayer"),value:g,onChange:e=>l({hover:e})}),(0,n.createElement)(p.SelectControl,{label:(0,o.__)("On mouseout","am-lottieplayer"),value:b,onChange:e=>l({mouseout:e}),options:[{value:"void",label:(0,o.__)("No event","am-lottieplayer")},{value:"stop",label:(0,o.__)("Stop","am-lottieplayer")},{value:"pause",label:(0,o.__)("Pause","am-lottieplayer")},{value:"reverse",label:(0,o.__)("Reverse","am-lottieplayer")}],disabled:!g}),(0,n.createElement)(p.TextareaControl,{label:(0,o.__)("Description","am-lottieplayer"),help:(0,o.__)("Describe the animation. This is helpful for screen readers and search engines.","am-lottieplayer"),value:r,onChange:e=>l({alt:e})}),(0,n.createElement)(p.PanelRow,{className:"lottie-dimensions"},(0,n.createElement)(h,{id:"am-lottieplayer-width-settings",title:(0,o.__)("Width","am-lottieplayer"),value:_(v),onChange:e=>l({width:null!=e?e:null}),disabled:"full"===a||"wide"===a,placeholder:"full"===a||"wide"===a?"100%":"auto"}),(0,n.createElement)(h,{id:"am-lottieplayer-height-settings",title:(0,o.__)("Height","am-lottieplayer"),value:d&&"0"!==d.toString()?d:null,onChange:e=>l({height:null!=e?e:null}),placeholder:"auto"}))))},y=e=>{let{attributes:t,setAttributes:l}=e;const{background:a}=t;return(0,n.createElement)(p.Panel,null,(0,n.createElement)(p.PanelBody,{title:(0,o.__)("Background Color","am-lottieplayer"),initialOpen:!1},(0,n.createElement)(p.ColorPicker,{color:a,onChangeComplete:e=>l({background:e.hex})})))};function b(e){let{attributes:t,setAttributes:l}=e;return(0,n.createElement)(i.InspectorControls,null,(0,n.createElement)(g,{attributes:t,setAttributes:l}),(0,n.createElement)(y,{attributes:t,setAttributes:l}),(0,n.createElement)(d,{attributes:t,setAttributes:l}))}function f(){return(0,n.createElement)(p.SVG,{role:"img",xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",viewBox:"0 0 80 80"},(0,n.createElement)("style",null,"\n\t\t\t\t.am-lottieplayer-path {\n\t\t\t\t\tfill: url(#a)\n\t\t\t\t}\n\t\t\t\t.block-editor-block-toolbar .am-lottieplayer-path,\n\t\t\t\t.components-panel .am-lottieplayer-path {\n\t\t\t\t\tfill: var(--wp-admin-theme-color-darker-10)\n\t\t\t\t}"),(0,n.createElement)("defs",null,(0,n.createElement)("radialGradient",{id:"a",cx:".2",cy:"1.07",r:"1.2"},(0,n.createElement)("stop",{offset:"10%"},(0,n.createElement)("animate",{attributeName:"stop-color",values:"#24708f;#e18d4c;#1f374c;#85c6e0;#24708f;",dur:"12s",repeatCount:"indefinite"})),(0,n.createElement)("stop",{offset:"90%"},(0,n.createElement)("animate",{attributeName:"stop-color",values:"#85c6e0;#24708f;#e18d4c;#1f374c;#85c6e0;",dur:"24s",repeatCount:"indefinite"})))),(0,n.createElement)(p.Path,{className:"am-lottieplayer-path",d:"M60 0H20C9 0 0 9 0 20v39.5C0 71 9 80 20 80h39.5c11 0 20.5-9 20.5-20V20C80 9 71 0 60 0zm4.9 59.7h-7.4V37.1c0-3.2.3-8.2.3-8.2h-.1s-.9 4.7-1.7 7.5l-6.8 23.3h-4l-11-30.2c-.8-2.2-2-5.8-2-5.8h-.1s-1.1 3.4-1.9 5.8L18.7 59.7H15l15-39.4h4.2l11.4 30c.3-1.4 1.2-6.1 2.4-10.2l5.6-19.8H65v39.4z"}))}function v(e){let{children:t,onSelectMedia:l,onError:a}=e;return(0,n.createElement)(i.MediaPlaceholder,{icon:(0,n.createElement)(i.BlockIcon,{icon:f}),labels:{title:(0,o.__)("AM Lottie Animation","am-lottieplayer"),instructions:(0,o.__)("Upload Lottie animations to WordPress and add them in Gutenberg.","am-lottieplayer")},onSelect:l,accept:".lottie, .json",allowedTypes:["application/json","application/zip"],onError:a},t)}function _(){let{attributes:e={}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{align:t,alt:l,autoplay:a,background:o,controls:r,direction:i,height:s,loop:c,mode:u,objectFit:p,renderer:d,speed:m,src:h,width:g}=e,y=(0,n.useRef)(null),b=(0,n.useRef)(!0),f=(0,n.useCallback)((()=>{y.current&&(y.current.reload(),setTimeout((()=>{const e=y.current?.shadowRoot?.querySelector("canvas");"svg"===d&&e&&e.remove()}),100))}),[d]),v=(0,n.useCallback)((e=>"wide"===t||"full"===t?"100%":e&&"number"==typeof e?`${e}px`:null),[t]);return(0,n.useEffect)((()=>{b.current||f(),b.current=!1}),[p,f,d,m]),(0,n.useEffect)((()=>{y.current&&c&&a&&"playing"!==y.current.currentState&&y.current?.play()}),[a,c]),(0,n.createElement)("dotlottie-player",{class:"lottie-element",autoplay:a?"":null,controls:r?"":null,description:l,direction:i,loop:c?"":null,mode:u,objectfit:p,ref:y,renderer:d,speed:m,src:h,style:{width:v(g),height:s&&"number"==typeof s?`${s}px`:null,backgroundColor:o,margin:"0 auto"}})}function E(e){let{attributes:t,setAttributes:l,isPlaceholder:a}=e;return(0,n.createElement)(n.Fragment,null,a?(0,n.createElement)(v,{onSelectMedia:e=>{let{id:t,url:a,alt:o}=e;l(a?{src:a,id:t,alt:o}:{src:void 0,id:null})},onError:e=>{(e=>{(0,n.createElement)(p.Notice,{status:"error"},e)})(e)},children:void 0}):(0,n.createElement)(_,{attributes:t}))}function k(e){let{className:t,onResizeStart:l,onResize:a,onResizeStop:o,showHandle:i,...s}=e;const[c,d]=(0,n.useState)(!1);return(0,n.createElement)(p.ResizableBox,r({className:u()(t,{"is-resizing":c}),enable:{top:!1,right:!1,bottom:!0,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},minHeight:10,onResizeStart:(e,t,o)=>{l(o.clientHeight),a(o.clientHeight)},onResize:(e,t,l)=>{a(l.clientHeight),c||d(!0)},onResizeStop:(e,t,l)=>{o(l.clientHeight),d(!1)},showHandle:i},s))}const w=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gb/lottiecover","title":"AM LottieCover","category":"media","description":"Add a Lottie animation with a text overlay — great for headers.","textdomain":"am-lottieplayer","attributes":{"align":{"type":"string","default":"none"},"allowedBlocks":{"type":"array","default":["core/paragraph","core/heading","core/buttons"]},"alt":{"type":"string","source":"attribute","selector":"dotlottie-player","attribute":"description","default":"","__experimentalRole":"content"},"autoplay":{"type":"boolean","source":"attribute","selector":"dotlottie-player","attribute":"autoplay","default":true},"controls":{"type":"boolean","source":"attribute","selector":"dotlottie-player","attribute":"controls"},"content":{"type":"string","default":""},"contentPosition":{"type":"string","default":""},"click":{"type":"boolean","default":false},"dimRatio":{"type":"number","default":50},"direction":{"type":"number","default":1},"focalPoint":{"type":"object","default":{}},"height":{"type":"number","default":null},"heightUnit":{"type":"string","default":"px"},"hover":{"type":"boolean","default":false},"id":{"type":"string","default":null},"loop":{"type":"boolean","source":"attribute","selector":"dotlottie-player","attribute":"loop","default":true},"mode":{"type":"string","default":"normal"},"objectFit":{"type":"string","default":"cover"},"overlayColor":{"type":"string","default":"transparent"},"mouseOut":{"type":"string","default":"stop"},"renderer":{"type":"string","default":"svg"},"speed":{"type":"number","default":1},"src":{"type":"string","default":""},"templateLock":{"type":["string","boolean"],"enum":["all","insert","contentOnly",false]},"width":{"type":"number","default":null}},"supports":{"anchor":true,"align":true,"html":false,"spacing":{"padding":true,"margin":["top","bottom"],"__experimentalDefaultControls":{"padding":true}},"color":{"text":false,"background":false},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}}},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');(0,a.registerBlockType)(w,{icon:f,keywords:[(0,o.__)("animation","am-lottieplayer"),"gif",(0,o.__)("motion","am-lottieplayer"),(0,o.__)("vector","am-lottieplayer"),(0,o.__)("cover","am-lottieplayer"),(0,o.__)("background","am-lottieplayer")],edit:function(e){let{attributes:t,clientId:l,isSelected:a,setAttributes:c,toggleSelection:p}=e;const{allowedBlocks:d,background:m,height:h,heightUnit:g,src:y,templateLock:f}=t,v=(0,n.useRef)(),[_,w]=(0,n.useState)(!0),C=(0,i.useBlockProps)({ref:v}),S=(0,s.useSelect)((e=>e(i.store).getBlock(l).innerBlocks.length>0),[l]),x=(e=>[["core/paragraph",{align:"center",placeholder:(0,o.__)("Write title…","am-lottieplayer"),...e}]])({fontSize:!!(0,i.useSetting)("typography.fontSizes")?.length?"large":void 0}),P=(0,i.useInnerBlocksProps)({className:"wp-block-gb-lottiecover__inner-container"},{template:S?void 0:x,templateInsertUpdatesSelection:!0,allowedBlocks:d,templateLock:f}),O={minHeight:(h&&g?`${h}${g}`:h)||void 0};return(0,n.useEffect)((()=>{w(!y||""===y)}),[y]),(0,n.createElement)(n.Fragment,null,(0,n.createElement)(b,{attributes:t,setAttributes:c}),(0,n.createElement)("div",r({},C,{className:u()({"is-placeholder":_},C.className),style:{...O,...C.style}}),(0,n.createElement)(k,{className:"block-library-lottiecover__resize-container",onResizeStart:()=>{c({heightUnit:"px"}),p(!1)},onResize:e=>{c({height:e})},onResizeStop:e=>{c({height:e}),p(!0)},showHandle:a}),(0,n.createElement)("span",{"aria-hidden":"true",className:"wp-block-gb-lottiecover__background",style:{backgroundColor:m},hidden:_}),(0,n.createElement)(E,{attributes:t,setAttributes:c,isPlaceholder:_}),!_&&(0,n.createElement)("div",P)))},save:function(){let{attributes:e={}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{align:t,alt:l,autoplay:a,background:o,controls:r,click:s,direction:c,height:u,heightUnit:p,hover:d,loop:m,mode:h,mouseout:g,objectFit:y,renderer:b,speed:f,src:v,width:_}=e,E={minHeight:(u&&p?`${u}${p}`:u)||void 0};return(0,n.createElement)("div",i.useBlockProps.save({style:E}),(0,n.createElement)("span",{"aria-hidden":"true",className:"wp-block-gb-lottiecover__background",style:{backgroundColor:o}}),(0,n.createElement)("dotlottie-player",{class:"lottie-element",autoplay:a?"":null,controls:r?"":null,description:l,direction:c,"data-direction":c,"data-mouseover":d,"data-mouseout":g,"data-click":s,loop:m?"":null,mode:h,objectfit:y,renderer:b,speed:f,src:v,style:{width:(k=_,"wide"===t||"full"===t?"100%":k&&"number"==typeof k?`${k}px`:null),height:u&&"number"==typeof u?`${u}px`:null,backgroundColor:o}}),(0,n.createElement)("div",i.useInnerBlocksProps.save({className:"wp-block-gb-lottiecover__inner-container"})));var k}})},184:(e,t)=>{var l;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var r=typeof l;if("string"===r||"number"===r)e.push(l);else if(Array.isArray(l)){if(l.length){var n=o.apply(null,l);n&&e.push(n)}}else if("object"===r){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){e.push(l.toString());continue}for(var i in l)a.call(l,i)&&l[i]&&e.push(i)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(l=function(){return o}.apply(t,[]))||(e.exports=l)}()}},l={};function a(e){var o=l[e];if(void 0!==o)return o.exports;var r=l[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,e=[],a.O=(t,l,o,r)=>{if(!l){var n=1/0;for(u=0;u<e.length;u++){for(var[l,o,r]=e[u],i=!0,s=0;s<l.length;s++)(!1&r||n>=r)&&Object.keys(a.O).every((e=>a.O[e](l[s])))?l.splice(s--,1):(i=!1,r<n&&(n=r));if(i){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[l,o,r]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={841:0,560:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var o,r,[n,i,s]=l,c=0;if(n.some((t=>0!==e[t]))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(s)var u=s(a)}for(t&&t(l);c<n.length;c++)r=n[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},l=globalThis.webpackChunkam_lottieplayer=globalThis.webpackChunkam_lottieplayer||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var o=a.O(void 0,[560],(()=>a(49)));o=a.O(o)})();