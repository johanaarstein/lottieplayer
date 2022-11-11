!function(){"use strict";var e,t={3:function(){var e=window.wp.blocks,t=window.wp.i18n;function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},n.apply(this,arguments)}var l=window.wp.element,o=window.wp.components,r=window.wp.blockEditor,a=function(){let{attributes:e={},setAttributes:n=(()=>{})}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{direction:a,interactivityType:i,mode:c,renderer:s,speed:u}=e;return(0,l.createElement)(r.InspectorAdvancedControls,{key:"inspector"},(0,l.createElement)(o.SelectControl,{label:(0,t.__)("Renderer"),value:s,onChange:e=>n({renderer:e}),options:[{value:"svg",label:(0,t.__)("SVG")},{value:"canvas",label:(0,t.__)("Canvas")}]}),(0,l.createElement)(o.SelectControl,{label:(0,t.__)("Play animation on"),value:i,onChange:e=>{n({interactivityType:e,autoplay:"none"===e})},options:[{value:"none",label:(0,t.__)("Page Load")},{value:"hold",label:(0,t.__)("Hover")},{value:"click",label:(0,t.__)("Click")},{value:"scroll",label:(0,t.__)("Scroll")}]}),(0,l.createElement)(o.RangeControl,{label:(0,t.__)("Speed"),min:.5,max:5,step:.5,value:u,onChange:e=>n({speed:e})}),(0,l.createElement)(o.SelectControl,{label:(0,t.__)("Play mode"),value:c,name:"mode",onChange:e=>n({mode:e}),options:[{value:"normal",label:"Normal"},{value:"bounce",label:"Bounce"}]}),(0,l.createElement)(o.SelectControl,{label:(0,t.__)("Direction"),value:a,onChange:e=>n({direction:e}),options:[{value:"1",label:(0,t.__)("Forward")},{value:"-1",label:(0,t.__)("Backward")}]}))};const i=e=>{switch(e){case"contain":default:return"xMidYMid meet";case"cover":return"xMidYMid slice";case"fill":return"none";case"none":return"xMinYMin slice"}},c=e=>{let{ctrlKey:t,key:n,metaKey:l,shiftKey:o}=e;return o||"End"===n||"Home"===n||"Backspace"===n||"Tab"===n||"Enter"===n||"Delete"===n||(t||l)&&("a"===n||"c"===n||"v"===n||"x"===n||"z"===n||"t"===n||"r"===n)},s=e=>{let{key:t}=e;return t>=0&&t<=9},u=function(){let{onChange:e=(()=>{}),subTitle:t="",title:n="",value:r=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.createElement)(o.BaseControl,{help:t,className:"lottie-switch-label"},(0,l.createElement)(o.BaseControl.VisualLabel,null,n),(0,l.createElement)(o.FormToggle,{checked:r,onChange:()=>e(!r)}))},d=function(){let{onChange:e=(()=>{}),title:t="",value:n=null,disabled:r=!1,placeholder:a=""}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const i=e=>{c(e)||!s(e)&&e.preventDefault()};return(0,l.createElement)(o.BaseControl,{help:t,className:"lottie-number-wrapper"},(0,l.createElement)(o.TextControl,{value:n,onChange:t=>e(Number(t)),onKeyDown:i,disabled:r,placeholder:a}))};var p=function(){let{attributes:e={},setAttributes:n=(()=>{})}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{align:r,controls:a,height:i,loop:c,objectFit:s,width:p}=e,m=(0,l.useCallback)((e=>"full"===r||"wide"===r?"100%":e&&"0"!==e?e:null),[r]);return(0,l.createElement)(o.Panel,null,(0,l.createElement)(o.PanelBody,{title:(0,t.__)("Animation Settings"),initialOpen:!0},(0,l.createElement)(u,{title:(0,t.__)("Loop"),subTitle:(0,t.__)("Repeat animation"),value:c,onChange:e=>{n({loop:e})}}),(0,l.createElement)(u,{title:(0,t.__)("Controls"),subTitle:(0,t.__)("Display animation controls"),value:a,onChange:e=>{n({controls:e})}}),(0,l.createElement)(o.PanelRow,{className:"lottie-dimensions"},(0,l.createElement)(d,{title:(0,t.__)("Width"),value:m(p),onChange:e=>{n({width:null!=e?e:null})},disabled:"full"===r||"wide"===r,placeholder:"full"===r||"wide"===r?"100%":"auto"}),(0,l.createElement)(d,{title:(0,t.__)("Height"),value:i&&"0"!==i?i:null,onChange:e=>{n({height:null!=e?e:null})},placeholder:"auto"})),(0,l.createElement)(o.SelectControl,{label:(0,t.__)("Object fit"),value:s,onChange:e=>{n({objectFit:e})},options:[{value:"contain",label:(0,t.__)("Contain")},{value:"cover",label:(0,t.__)("Cover")},{value:"fill",label:(0,t.__)("Fill")},{value:"none",label:(0,t.__)("None")}]})))},m=function(){let{attributes:e={},setAttributes:n=(()=>{})}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{background:r}=e;return(0,l.createElement)(o.Panel,null,(0,l.createElement)(o.PanelBody,{title:(0,t.__)("Background Color"),initialOpen:!1},(0,l.createElement)(o.ColorPicker,{color:r,onChange:e=>{n({background:e})},enableAlpha:!0})))};function b(){let{attributes:e={},setAttributes:t=(()=>{})}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.createElement)(r.InspectorControls,null,(0,l.createElement)(p,{attributes:e,setAttributes:t}),(0,l.createElement)(m,{attributes:e,setAttributes:t}),(0,l.createElement)(a,{attributes:e,setAttributes:t}))}function g(){return(0,l.createElement)("svg",{className:"custom-icon custom-icon-lottie",role:"img",xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",viewBox:"0 0 80 80"},(0,l.createElement)("path",{d:"M59.8 0H20.2C9.1 0 0 9.1 0 20.2v39.5C0 70.9 9.1 80 20.2 80h39.5C70.9 80 80 70.9 80 59.8V20.2C80 9.1 70.9 0 59.8 0z",fill:"#00ddb3"}),(0,l.createElement)("path",{d:"M60.8 17.9c-13.8 0-18.9 9.8-23 17.7l-2.7 5c-4.3 8.4-7.6 13.5-16 13.5-2.2 0-4 1.7-4 3.9s1.7 4 3.9 4h.1c13.8 0 18.9-9.8 23-17.7l2.7-5c4.3-8.4 7.6-13.5 16-13.5 2.2 0 4-1.7 4-3.9s-1.7-4-3.9-4h-.1z",fill:"#fff"}))}function v(){let{gallery:e=!1,onSelect:t=(()=>{}),render:n={}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const o=["application/json","application/zip","text/plain"];return(0,l.createElement)(r.MediaUploadCheck,null,(0,l.createElement)(r.MediaUpload,{gallery:e,onSelect:e=>{let{mime:n,url:l}=e;l&&o.includes(n)&&t(l)},allowedTypes:o,render:n}))}function h(){let{attributes:e={},className:a="",setAttributes:c=(()=>{})}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{align:s,alt:u,autoplay:d,background:p,controls:m,direction:b,height:h,loop:_,mode:f,objectFit:y,renderer:E,speed:C,src:w,width:k}=e,x=(0,l.useRef)(null),S=(0,l.useRef)(!0),A=(0,l.useCallback)((()=>{x.current.reload(),setTimeout((()=>{var e,t;const n=null==x||null===(e=x.current)||void 0===e||null===(t=e.shadowRoot)||void 0===t?void 0:t.querySelector("canvas");"svg"===E&&n&&n.remove()}),100)}),[E]),O=(0,l.useCallback)((e=>"wide"===s||"full"===s?"100%":e&&"number"==typeof e?`${e}px`:null),[s]);return(0,l.useEffect)((()=>{S.current||A(),S.current=!1}),[y,A,E,C]),(0,l.useEffect)((()=>{x.current&&_&&d&&"playing"!==x.current.currentState&&x.current.play()}),[d,_]),(0,l.createElement)("div",n({className:"w-full"},(0,r.useBlockProps)()),""!==w&&w?(0,l.createElement)("div",{className:a,style:{width:O(k),height:h&&"number"==typeof h?`${h}px`:null,backgroundColor:p}},(0,l.createElement)("dotlottie-player",{autoplay:d?"":null,controls:m?"":null,description:u,direction:b,loop:_?"":null,mode:f,preserveAspectRatio:i(y),ref:x,renderer:E,speed:C,src:w})):(0,l.createElement)("div",{className:"components-placeholder"},(0,l.createElement)("div",{className:"components-placeholder__label"},(0,l.createElement)(g,null)," ",(0,t.__)("Lottie Animation")),(0,l.createElement)("div",{className:"components-placeholder__instructions"},(0,t.__)("Upload Lottie animations to WordPress and add them in Gutenberg.")),(0,l.createElement)("div",{className:"components-placeholder__fieldset"},(0,l.createElement)("form",null,(0,l.createElement)(v,{onSelect:e=>c({src:e}),render:e=>{let{open:n}=e;return(0,l.createElement)(o.Button,{variant:"primary",onClick:n},(0,t.__)("Media Library"))}})))))}var _=JSON.parse('{"u2":"gb/lottiecover"}');(0,e.registerBlockType)(_.u2,{icon:g,keywords:[(0,t.__)("animation"),(0,t.__)("gif"),(0,t.__)("motion"),(0,t.__)("vector"),(0,t.__)("cover"),(0,t.__)("background")],attributes:{align:{type:"string",default:"none"},alt:{type:"string",default:(0,t.__)("Lottie animation")},autoplay:{type:"boolean",default:!0},controls:{type:"boolean",default:!1},content:{type:"string"},contentPosition:{type:"string"},direction:{type:"number",default:1},focalPoint:{type:"object"},height:{type:"number",default:null},id:{type:"string",default:null},loop:{type:"boolean",default:!0},minHeight:{type:"number"},minHeightUnit:{type:"string",default:"px"},mode:{type:"string",default:"normal"},objectFit:{type:"string",default:"cover"},overlayColor:{type:"string"},renderer:{type:"string",default:"svg"},speed:{type:"number",default:1},src:{type:"string"},width:{type:"number",default:null}},usesContext:["postId","postType"],supports:{anchor:!0,align:!0,html:!1,spacing:{padding:!0,margin:["top","bottom"],__experimentalDefaultControls:{padding:!0}},color:{text:!1,background:!1},typography:{fontSize:!0,lineHeight:!0,__experimentalFontFamily:!0,__experimentalFontWeight:!0,__experimentalFontStyle:!0,__experimentalTextTransform:!0,__experimentalTextDecoration:!0,__experimentalLetterSpacing:!0,__experimentalDefaultControls:{fontSize:!0}}},edit:function(){let{attributes:e={},clientId:t="",setAttributes:a=(()=>{}),isSelected:i=!1,toggleSelection:c=(()=>{})}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{content:s,minHeight:u,src:d}=e;return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(b,{attributes:e,setAttributes:a}),(0,l.createElement)("div",n({},(0,r.useBlockProps)(),{style:{minHeight:u}}),(0,l.createElement)(o.ResizableBox,{enable:{top:!1,right:!1,bottom:!0,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},minHeight:u,onResizeStop:(e,t,n,l)=>{let{height:o}=l;a({minHeight:parseInt(u+o,10)}),c(!0)},onResizeStart:()=>{c(!1)}}),(0,l.createElement)(h,{attributes:e,className:"lottie-background",setAttributes:a}),(0,l.createElement)(o.DropZoneProvider,null,(0,l.createElement)(o.DropZone,null)),""!==d&&d?(0,l.createElement)(r.BlockEdit,{attributes:{content:s},clientId:t,isSelected:i,setAttributes:a}):""))},save:function(e){let{attributes:t}=e;const{align:o,alt:a,autoplay:c,background:s,controls:u,direction:d,height:p,id:m,loop:b,mode:g,objectFit:v,src:h,width:_}=t;return(0,l.createElement)("figure",n({id:m},r.useBlockProps.save({className:`align${o}`}),{style:{backgroundColor:s,height:p&&"0"!==p?p:"auto",width:_&&"0"!==_?_:"auto"}}),(0,l.createElement)("dotlottie-player",{autoplay:c,controls:u,description:a,direction:d,loop:b,mode:g,preserveAspectRatio:i(v),src:h}))}})}},n={};function l(e){var o=n[e];if(void 0!==o)return o.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,l),r.exports}l.m=t,e=[],l.O=function(t,n,o,r){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],r=e[u][2];for(var i=!0,c=0;c<n.length;c++)(!1&r||a>=r)&&Object.keys(l.O).every((function(e){return l.O[e](n[c])}))?n.splice(c--,1):(i=!1,r<a&&(a=r));if(i){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,o,r]},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={841:0,560:0};l.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,a=n[0],i=n[1],c=n[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(o in i)l.o(i,o)&&(l.m[o]=i[o]);if(c)var u=c(l)}for(t&&t(n);s<a.length;s++)r=a[s],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(u)},n=self.webpackChunklottieplayer=self.webpackChunklottieplayer||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=l.O(void 0,[560],(function(){return l(3)}));o=l.O(o)}();