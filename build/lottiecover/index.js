!function(){var e,t={857:function(e,t,n){"use strict";var l=window.wp.blocks,o=window.wp.i18n;function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},r.apply(this,arguments)}var a=window.wp.element,i=n(184),c=n.n(i),s=window.wp.blockEditor,u=window.wp.data,d=window.wp.components,p=function(){let{attributes:e={},setAttributes:t=(()=>{})}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{direction:n,interactivityType:l,mode:r,renderer:i,speed:c}=e;return(0,a.createElement)(s.InspectorAdvancedControls,{key:"inspector"},(0,a.createElement)(d.SelectControl,{label:(0,o.__)("Renderer"),value:i,onChange:e=>t({renderer:e}),options:[{value:"svg",label:(0,o.__)("SVG")},{value:"canvas",label:(0,o.__)("Canvas")}]}),(0,a.createElement)(d.SelectControl,{label:(0,o.__)("Play animation on"),value:l,onChange:e=>{t({interactivityType:e,autoplay:"none"===e})},options:[{value:"none",label:(0,o.__)("Page Load")},{value:"hold",label:(0,o.__)("Hover")},{value:"click",label:(0,o.__)("Click")},{value:"scroll",label:(0,o.__)("Scroll")}]}),(0,a.createElement)(d.RangeControl,{label:(0,o.__)("Speed"),min:.5,max:5,step:.5,value:c,onChange:e=>t({speed:e})}),(0,a.createElement)(d.SelectControl,{label:(0,o.__)("Play mode"),value:r,name:"mode",onChange:e=>t({mode:e}),options:[{value:"normal",label:"Normal"},{value:"bounce",label:"Bounce"}]}),(0,a.createElement)(d.SelectControl,{label:(0,o.__)("Direction"),value:n,onChange:e=>t({direction:e}),options:[{value:"1",label:(0,o.__)("Forward")},{value:"-1",label:(0,o.__)("Backward")}]}))};const m=e=>{switch(e){case"contain":default:return"xMidYMid meet";case"cover":return"xMidYMid slice";case"fill":return"none";case"none":return"xMinYMin slice"}},g=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return n=>{n&&n.url?e({dimRatio:100===t?50:t,src:n.url,id:n.id,alt:null==n?void 0:n.alt}):e({src:void 0,id:void 0})}},h=e=>{let{ctrlKey:t,key:n,metaKey:l,shiftKey:o}=e;return o||"End"===n||"Home"===n||"Backspace"===n||"Tab"===n||"Enter"===n||"Delete"===n||(t||l)&&("a"===n||"c"===n||"v"===n||"x"===n||"z"===n||"t"===n||"r"===n)},b=e=>{let{key:t}=e;return t>=0&&t<=9},f=function(){let{onChange:e=(()=>{}),subTitle:t="",title:n="",value:l=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.createElement)(d.BaseControl,{help:t,className:"lottie-switch-label"},(0,a.createElement)(d.BaseControl.VisualLabel,null,n),(0,a.createElement)(d.FormToggle,{checked:l,onChange:()=>e(!l)}))},v=function(){let{onChange:e=(()=>{}),title:t="",value:n=null,disabled:l=!1,placeholder:o=""}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=e=>{h(e)||!b(e)&&e.preventDefault()};return(0,a.createElement)(d.BaseControl,{help:t,className:"lottie-number-wrapper"},(0,a.createElement)(d.TextControl,{value:n,onChange:t=>e(Number(t)),onKeyDown:r,disabled:l,placeholder:o}))};var _=function(){let{attributes:e={},setAttributes:t=(()=>{})}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{align:n,controls:l,height:r,loop:i,objectFit:c,width:s}=e,u=(0,a.useCallback)((e=>"full"===n||"wide"===n?"100%":e&&"0"!==e?e:null),[n]);return(0,a.createElement)(d.Panel,null,(0,a.createElement)(d.PanelBody,{title:(0,o.__)("Animation Settings"),initialOpen:!0},(0,a.createElement)(f,{title:(0,o.__)("Loop"),subTitle:(0,o.__)("Repeat animation"),value:i,onChange:e=>{t({loop:e})}}),(0,a.createElement)(f,{title:(0,o.__)("Controls"),subTitle:(0,o.__)("Display animation controls"),value:l,onChange:e=>{t({controls:e})}}),(0,a.createElement)(d.PanelRow,{className:"lottie-dimensions"},(0,a.createElement)(v,{title:(0,o.__)("Width"),value:u(s),onChange:e=>{t({width:null!=e?e:null})},disabled:"full"===n||"wide"===n,placeholder:"full"===n||"wide"===n?"100%":"auto"}),(0,a.createElement)(v,{title:(0,o.__)("Height"),value:r&&"0"!==r?r:null,onChange:e=>{t({height:null!=e?e:null})},placeholder:"auto"})),(0,a.createElement)(d.SelectControl,{label:(0,o.__)("Object fit"),value:c,onChange:e=>{t({objectFit:e})},options:[{value:"contain",label:(0,o.__)("Contain")},{value:"cover",label:(0,o.__)("Cover")},{value:"fill",label:(0,o.__)("Fill")},{value:"none",label:(0,o.__)("None")}]})))},y=function(){let{attributes:e={},setAttributes:t=(()=>{})}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{background:n}=e;return(0,a.createElement)(d.Panel,null,(0,a.createElement)(d.PanelBody,{title:(0,o.__)("Background Color"),initialOpen:!1},(0,a.createElement)(d.ColorPicker,{color:n,onChange:e=>{t({background:e})},enableAlpha:!0})))};function E(){let{attributes:e={},setAttributes:t=(()=>{})}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.createElement)(s.InspectorControls,null,(0,a.createElement)(_,{attributes:e,setAttributes:t}),(0,a.createElement)(y,{attributes:e,setAttributes:t}),(0,a.createElement)(p,{attributes:e,setAttributes:t}))}var w=window.wp.notices;function k(){return(0,a.createElement)("svg",{role:"img",xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",viewBox:"0 0 80 80"},(0,a.createElement)("defs",null,(0,a.createElement)("radialGradient",{id:"a",cx:".2",cy:"1.07",r:"1.2"},(0,a.createElement)("stop",{offset:"0%",stopColor:"#92003b"}),(0,a.createElement)("stop",{offset:"5%",stopColor:"#ff4a9e"}),(0,a.createElement)("stop",{offset:"45%",stopColor:"#24708f"}),(0,a.createElement)("stop",{offset:"60%",stopColor:"#24708f"}),(0,a.createElement)("stop",{offset:"90%",stopColor:"#00c1a2"}))),(0,a.createElement)("path",{fill:"url(#a)",d:"M60 0H20C9 0 0 9 0 20v39.5C0 71 9 80 20 80h39.5c11 0 20.5-9 20.5-20V20C80 9 71 0 60 0zm4.9 59.7h-7.4V37.1c0-3.2.3-8.2.3-8.2h-.1s-.9 4.7-1.7 7.5l-6.8 23.3h-4l-11-30.2c-.8-2.2-2-5.8-2-5.8h-.1s-1.1 3.4-1.9 5.8L18.7 59.7H15l15-39.4h4.2l11.4 30c.3-1.4 1.2-6.1 2.4-10.2l5.6-19.8H65v39.4z"}))}function C(){let{children:e,onSelectMedia:t=(()=>{}),onError:n=(()=>{}),disableMediaButtons:l=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.createElement)(s.MediaPlaceholder,{icon:(0,a.createElement)(s.BlockIcon,{icon:k}),labels:{title:(0,o.__)("Lottie Animation"),instructions:(0,o.__)("Upload Lottie animations to WordPress and add them in Gutenberg.")},onSelect:t,accept:".lottie, .json",allowedTypes:["application/json","application/zip","text/plain"],onError:n,disableMediaButtons:l},e)}function S(){let{attributes:e={}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{align:t,alt:n,autoplay:l,background:o,controls:r,direction:i,height:c,loop:s,mode:u,objectFit:d,renderer:p,speed:g,src:h,width:b}=e,f=(0,a.useRef)(null),v=(0,a.useRef)(!0),_=(0,a.useCallback)((()=>{f.current.reload(),setTimeout((()=>{var e,t;const n=null==f||null===(e=f.current)||void 0===e||null===(t=e.shadowRoot)||void 0===t?void 0:t.querySelector("canvas");"svg"===p&&n&&n.remove()}),100)}),[p]),y=(0,a.useCallback)((e=>"wide"===t||"full"===t?"100%":e&&"number"==typeof e?`${e}px`:null),[t]);return(0,a.useEffect)((()=>{v.current||_(),v.current=!1}),[d,_,p,g]),(0,a.useEffect)((()=>{f.current&&s&&l&&"playing"!==f.current.currentState&&f.current.play()}),[l,s]),(0,a.createElement)("dotlottie-player",{class:"lottie-element",autoplay:l?"":null,controls:r?"":null,description:n,direction:i,loop:s?"":null,mode:u,preserveAspectRatio:m(d),ref:f,renderer:p,speed:g,src:h,style:{width:y(b),height:c&&"number"==typeof c?`${c}px`:null,backgroundColor:o}})}function x(){let{attributes:e={},setAttributes:t=(()=>{}),isPlaceholder:n=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createErrorNotice:l}=(0,u.useDispatch)(w.store),o=e=>{l(e,{type:"snackbar"})},r=g(t);return(0,a.createElement)(a.Fragment,null,n?(0,a.createElement)(C,{onSelectMedia:r,onError:o,disableMediaButtons:!n}):(0,a.createElement)(S,{attributes:e}))}function B(){let{className:e="",onResizeStart:t=(()=>{}),onResize:n=(()=>{}),onResizeStop:l=(()=>{}),...o}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const[i,s]=(0,a.useState)(!1);return(0,a.createElement)(d.ResizableBox,r({className:c()(e,{"is-resizing":i}),enable:{top:!1,right:!1,bottom:!0,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},minHeight:10,onResizeStart:(e,l,o)=>{t(o.clientHeight),n(o.clientHeight)},onResize:(e,t,l)=>{n(l.clientHeight),i||s(!0)},onResizeStop:(e,t,n)=>{l(n.clientHeight),s(!1)}},o))}function R(e){return[["core/paragraph",{align:"center",placeholder:(0,o.__)("Write title…"),...e}]]}var P=JSON.parse('{"u2":"gb/lottiecover"}');(0,l.registerBlockType)(P.u2,{icon:k,keywords:[(0,o.__)("animation"),(0,o.__)("gif"),(0,o.__)("motion"),(0,o.__)("vector"),(0,o.__)("cover"),(0,o.__)("background")],attributes:{align:{type:"string",default:"none"},allowedBlocks:{type:"array",default:["core/paragraph","core/heading","core/buttons"]},alt:{type:"string",default:(0,o.__)("Lottie animation")},autoplay:{type:"boolean",default:!0},controls:{type:"boolean",default:!1},content:{type:"string"},contentPosition:{type:"string"},direction:{type:"number",default:1},focalPoint:{type:"object"},height:{type:"number",default:null},heightUnit:{type:"string",default:"px"},id:{type:"string",default:null},loop:{type:"boolean",default:!0},mode:{type:"string",default:"normal"},objectFit:{type:"string",default:"cover"},overlayColor:{type:"string"},renderer:{type:"string",default:"svg"},speed:{type:"number",default:1},src:{type:"string"},templateLock:{type:["string","boolean"],enum:["all","insert","contentOnly",!1]},width:{type:"number",default:null}},supports:{anchor:!0,align:!0,html:!1,spacing:{padding:!0,margin:["top","bottom"],__experimentalDefaultControls:{padding:!0}},color:{text:!1,background:!1},typography:{fontSize:!0,lineHeight:!0,__experimentalFontFamily:!0,__experimentalFontWeight:!0,__experimentalFontStyle:!0,__experimentalTextTransform:!0,__experimentalTextDecoration:!0,__experimentalLetterSpacing:!0,__experimentalDefaultControls:{fontSize:!0}}},edit:function(){var e;let{attributes:t={},clientId:n="",isSelected:l=!1,setAttributes:o=(()=>{}),toggleSelection:i=(()=>{})}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{allowedBlocks:d,background:p,height:m,heightUnit:g,src:h,templateLock:b}=t,f=(0,a.useRef)(!0),v=(0,a.useRef)(),_=(0,s.useBlockProps)({ref:v}),y=(0,u.useSelect)((e=>e(s.store).getBlock(n).innerBlocks.length>0),[n]),w=!(null===(e=(0,s.useSetting)("typography.fontSizes"))||void 0===e||!e.length),k=R({fontSize:w?"large":void 0}),C=(0,s.useInnerBlocksProps)({className:"wp-block-gb-lottiecover__inner-container"},{template:y?void 0:k,templateInsertUpdatesSelection:!0,allowedBlocks:d,templateLock:b}),S=m&&g?`${m}${g}`:m,P={minHeight:S||void 0};return(0,a.useEffect)((()=>{f.current=!h||""===h}),[h]),(0,a.createElement)(a.Fragment,null,(0,a.createElement)(E,{attributes:t,setAttributes:o}),(0,a.createElement)("div",r({},_,{className:c()({"is-placeholder":f.current},_.className),style:{...P,..._.style}}),(0,a.createElement)(B,{className:"block-library-lottiecover__resize-container",onResizeStart:()=>{o({heightUnit:"px"}),i(!1)},onResize:e=>{o({height:e})},onResizeStop:e=>{o({height:e}),i(!0)},showHandle:l}),(0,a.createElement)("span",{"aria-hidden":"true",className:"wp-block-gb-lottiecover__background",style:{backgroundColor:p},hidden:f.current}),(0,a.createElement)(x,{attributes:t,setAttributes:o,isPlaceholder:f.current}),!f.current&&(0,a.createElement)("div",C)))},save:function(){let{attributes:e={}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{align:t,alt:n,autoplay:l,background:o,controls:r,direction:i,height:c,heightUnit:u,loop:d,mode:p,objectFit:g,renderer:h,speed:b,src:f,width:v}=e,_=c&&u?`${c}${u}`:c,y={minHeight:_||void 0},E=e=>"wide"===t||"full"===t?"100%":e&&"number"==typeof e?`${e}px`:null;return(0,a.createElement)("div",s.useBlockProps.save({style:y}),(0,a.createElement)("span",{"aria-hidden":"true",className:"wp-block-gb-lottiecover__background",style:{backgroundColor:o}}),(0,a.createElement)("dotlottie-player",{class:"lottie-element",autoplay:l?"":null,controls:r?"":null,description:n,direction:i,loop:d?"":null,mode:p,preserveAspectRatio:m(g),renderer:h,speed:b,src:f,style:{width:E(v),height:c&&"number"==typeof c?`${c}px`:null,backgroundColor:o}}),(0,a.createElement)("div",s.useInnerBlocksProps.save({className:"wp-block-gb-lottiecover__inner-container"})))}})},184:function(e,t){var n;!function(){"use strict";var l={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===r){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)l.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}},n={};function l(e){var o=n[e];if(void 0!==o)return o.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,l),r.exports}l.m=t,e=[],l.O=function(t,n,o,r){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],r=e[u][2];for(var i=!0,c=0;c<n.length;c++)(!1&r||a>=r)&&Object.keys(l.O).every((function(e){return l.O[e](n[c])}))?n.splice(c--,1):(i=!1,r<a&&(a=r));if(i){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,o,r]},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,{a:t}),t},l.d=function(e,t){for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={841:0,560:0};l.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,a=n[0],i=n[1],c=n[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(o in i)l.o(i,o)&&(l.m[o]=i[o]);if(c)var u=c(l)}for(t&&t(n);s<a.length;s++)r=a[s],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(u)},n=self.webpackChunkam_lottieplayer=self.webpackChunkam_lottieplayer||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=l.O(void 0,[560],(function(){return l(857)}));o=l.O(o)}();