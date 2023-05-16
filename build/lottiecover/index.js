!function(){var e,t={159:function(e,t,l){"use strict";var a=window.wp.blocks;function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},n.apply(this,arguments)}var r=window.wp.element,o=l(184),i=l.n(o),s=window.wp.blockEditor,c=window.wp.components,u=window.wp.i18n,d=window.wp.data,m=e=>{let{attributes:t,setAttributes:l}=e;const{alt:a,renderer:n="svg"}=t;return(0,r.createElement)(s.InspectorAdvancedControls,null,(0,r.createElement)(c.SelectControl,{label:(0,u.__)("Renderer"),value:n,onChange:e=>l({renderer:e}),options:[{value:"svg",label:"SVG"},{value:"canvas",label:"Canvas"}]}),(0,r.createElement)(c.TextareaControl,{label:(0,u.__)("Description","am-lottieplayer"),help:(0,u.__)("Describe the animation. This is helpful for screen readers and search engines.","am-lottieplayer"),value:a,onChange:e=>l({alt:e})}))};let p=function(e){return e.Bounce="bounce",e.Normal="normal",e}({}),g=function(e){return e.Void="void",e.Stop="stop",e.Pause="pause",e.Reverse="reverse",e}({});var y=window.wp.blob;const f=e=>{let{id:t="",onChange:l,subTitle:a,title:n,value:o}=e;return(0,r.createElement)(c.BaseControl,{id:t,help:a,className:"lottie-switch-label"},(0,r.createElement)(c.BaseControl.VisualLabel,null,n),(0,r.createElement)(c.FormToggle,{checked:o,onChange:()=>l(!o)}))},h=e=>{let{id:t="",onChange:l,title:a,value:n="",disabled:o,placeholder:i=""}=e;return(0,r.createElement)(c.BaseControl,{id:t,help:a,className:"lottie-number-wrapper"},(0,r.createElement)(c.TextControl,{value:n,onChange:e=>{l(void 0===e||""===e?void 0:Number(e))},onKeyDown:e=>{(e=>{let{ctrlKey:t,key:l,metaKey:a,shiftKey:n}=e;return!(!n&&"End"!==l&&"Home"!==l&&"Backspace"!==l&&"Tab"!==l&&"Enter"!==l&&"Delete"!==l&&(!t&&!a||"a"!==l&&"c"!==l&&"v"!==l&&"x"!==l&&"z"!==l&&"t"!==l&&"r"!==l))})(e)||!(e=>{let{key:t}=e;return Number(t)>=0&&Number(t)<=9})(e)&&e.preventDefault()},disabled:o,placeholder:i}))},b=e=>{let{id:t="",onChange:l,title:a,help:n,value:o="",placeholder:i=""}=e;return(0,r.createElement)(c.BaseControl,{id:t,help:n,className:"lottie-number-wrapper"},(0,r.createElement)(c.BaseControl.VisualLabel,null,a),(0,r.createElement)(c.TextControl,{value:o,onChange:e=>l(e),placeholder:i}))};var v=e=>{let{attributes:t,clientId:l,setAttributes:a}=e;const{autoplay:n,controls:o,direction:i,loop:s,mode:d=p.Normal,segment:m,speed:g=1,subframe:y}=t,b=(0,r.useRef)();return(0,r.useEffect)((()=>{const e=document.getElementById(l);e&&(console.log("foo",e,e.currentState),e.addEventListener("ready",(()=>{console.log(e.getLottie().totalFrames),b.current=e.getLottie()?.totalFrames})))}),[l]),(0,r.createElement)(c.Panel,null,(0,r.createElement)(c.PanelBody,{title:(0,u.__)("Animation Settings","am-lottieplayer"),initialOpen:!0},(0,r.createElement)(f,{id:"am-lottieplayer-controls-settings",title:(0,u.__)("Show controls","am-lottieplayer"),value:!!o,onChange:e=>a({controls:e})}),(0,r.createElement)(f,{id:"am-lottieplayer-autoplay-settings",title:(0,u.__)("Autoplay","am-lottieplayer"),value:!!n,onChange:e=>{a({autoplay:e})}}),(0,r.createElement)(f,{id:"am-lottieplayer-loop-settings",title:(0,u.__)("Loop","am-lottieplayer"),value:!!s,onChange:e=>{a({loop:e})}}),(0,r.createElement)(f,{id:"am-lottieplayer-playmode-settings",title:(0,u.__)("Boomerang","am-lottieplayer"),value:d===p.Bounce,onChange:e=>{a({mode:e?p.Bounce:p.Normal})}}),(0,r.createElement)(f,{id:"am-lottieplayer-reverse-settings",title:(0,u.__)("Reverse","am-lottieplayer"),value:-1===i,onChange:e=>a({direction:e?-1:1})}),(0,r.createElement)(f,{id:"am-lottieplayer-subframe-settings",title:(0,u.__)("Subframe","am-lottieplayer"),subTitle:(0,u.__)("Enabling this can sometimes reduce flicker","am-lottieplayer"),value:!!y,onChange:e=>a({subframe:e})}),(0,r.createElement)(c.RangeControl,{label:(0,u.__)("Speed","am-lottieplayer"),min:.5,max:5,step:.5,value:g,onChange:e=>a({speed:e})}),(0,r.createElement)(c.BaseControl.VisualLabel,null,(0,u.__)("Play only part of the animation","am-lottieplayer")),(0,r.createElement)(c.PanelRow,{className:"lottie-segment"},(0,r.createElement)(h,{id:"am-lottieplayer-segment-in",title:(0,u.__)("First frame","am-lottieplayer"),value:m?.[0],onChange:e=>{var t;return a({segment:void 0!==e?[e,null!==(t=m?.[1])&&void 0!==t?t:0]:void 0})},placeholder:"1"}),(0,r.createElement)(h,{id:"am-lottieplayer-segment-out",title:(0,u.__)("Last frame","am-lottieplayer"),value:m?.[1],onChange:e=>{var t;return a({segment:e?[null!==(t=m?.[0])&&void 0!==t?t:0,e]:void 0})},placeholder:b.current?.toString()}))))},_=e=>{let{attributes:t,setAttributes:l}=e;const{background:a}=t;return(0,r.createElement)(c.Panel,null,(0,r.createElement)(c.PanelBody,{title:(0,u.__)("Background Color","am-lottieplayer"),initialOpen:!1},(0,r.createElement)(c.ColorPicker,{color:a,onChangeComplete:e=>l({background:e.hex})})))},E=e=>{let{attributes:t,setAttributes:l}=e;const{clickEvent:a,hover:n,mouseout:o,scrollEvent:i,scrollDelay:s,selector:d}=t;return(0,r.createElement)(c.Panel,null,(0,r.createElement)(c.PanelBody,{title:(0,u.__)("Interactions","am-lottieplayer"),initialOpen:!0},(0,r.createElement)(f,{id:"am-lottieplayer-click-settings",title:(0,u.__)("Play on click","am-lottieplayer"),value:a,onChange:e=>l({clickEvent:e})}),(0,r.createElement)(f,{id:"am-lottieplayer-hover-settings",title:(0,u.__)("Play on mouseover","am-lottieplayer"),value:n,onChange:e=>l({hover:e})}),n&&(0,r.createElement)(c.SelectControl,{label:(0,u.__)("On mouseout","am-lottieplayer"),value:o,onChange:e=>l({mouseout:e}),options:[{value:g.Void,label:(0,u.__)("No event","am-lottieplayer")},{value:g.Stop,label:(0,u.__)("Stop","am-lottieplayer")},{value:g.Pause,label:(0,u.__)("Pause","am-lottieplayer")},{value:g.Reverse,label:(0,u.__)("Reverse","am-lottieplayer")}]}),(n||a)&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)(b,{id:"am-lottieplayer-settings",title:(0,u.__)("Trigger element","am-lottieplayer"),help:(0,u.__)("Anchor tag (id) for an element you want to trigger the animation, either by hover or click.","am-lottieplayer"),placeholder:"#",value:d?.id,onChange:e=>l({selector:{...d,id:e}})}),(0,r.createElement)(f,{id:"am-lottieplayer-selector-settings",title:(0,u.__)("Apply interaction only to trigger element","am-lottieplayer"),value:d?.exclude,onChange:e=>l({selector:{...d,exclude:e}})})),(0,r.createElement)(f,{id:"am-lottieplayer-scroll-settings",title:(0,u.__)("Play on scroll, when visible in viewport","am-lottieplayer"),value:i,onChange:e=>l({scrollEvent:e})}),i&&(0,r.createElement)(c.RangeControl,{label:(0,u.__)("Delay, in 10th of a second","am-lottieplayer"),min:0,max:50,step:1,value:null!=s?s:1,onChange:e=>l({scrollDelay:e})})))},w=e=>{let{attributes:t,setAttributes:l}=e;const{align:a,fullscreen:n,height:o,objectFit:i="contain",width:s}=t,d=(0,r.useCallback)((e=>"full"===a||"wide"===a?"100%":e&&"0"!==e?e:void 0),[a]);return(0,r.createElement)(c.Panel,null,(0,r.createElement)(c.PanelBody,{title:(0,u.__)("Dimensions","am-lottieplayer"),initialOpen:!0},(!n||"full"!==a)&&(0,r.createElement)(c.PanelRow,{className:"lottie-dimensions"},(0,r.createElement)(h,{id:"am-lottieplayer-width-settings",title:(0,u.__)("Width","am-lottieplayer"),value:d(s),onChange:e=>l({width:null!=e?e:null}),disabled:"full"===a||"wide"===a,placeholder:"full"===a||"wide"===a?"100%":"auto"}),(0,r.createElement)(h,{id:"am-lottieplayer-height-settings",title:(0,u.__)("Height","am-lottieplayer"),value:o&&"0"!==o.toString()?o:void 0,disabled:n,onChange:e=>l({height:e}),placeholder:"auto"})),("full"===a||"wide"===a)&&(0,r.createElement)(f,{id:"am-lottieplayer-fullscreen-settings",title:(0,u.__)("Fill screen","am-lottieplayer"),value:n,onChange:e=>l({fullscreen:e})}),(0,r.createElement)(c.SelectControl,{label:(0,u.__)("Object fit"),value:i,onChange:e=>{l({objectFit:e})},options:[{value:"contain",label:(0,u.__)("Contain","am-lottieplayer")},{value:"cover",label:(0,u.__)("Cover","am-lottieplayer")},{value:"fill",label:(0,u.__)("Fill","am-lottieplayer")},{value:"none",label:(0,u.__)("None","am-lottieplayer")}]})))};function C(e){let{attributes:t,className:l,clientId:a,context:n,isSelected:o,setAttributes:i}=e;return(0,r.createElement)(s.InspectorControls,null,(0,r.createElement)(v,{attributes:t,setAttributes:i,clientId:a,isSelected:o,context:n,className:l}),(0,r.createElement)(E,{attributes:t,setAttributes:i,clientId:a,isSelected:o,context:n,className:l}),(0,r.createElement)(w,{attributes:t,setAttributes:i,clientId:a,isSelected:o,context:n,className:l}),(0,r.createElement)(_,{attributes:t,setAttributes:i,clientId:a,isSelected:o,context:n,className:l}),(0,r.createElement)(m,{attributes:t,setAttributes:i,clientId:a,isSelected:o,context:n,className:l}))}function k(){return(0,r.createElement)(c.SVG,{role:"img",xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",viewBox:"0 0 80 80"},(0,r.createElement)("style",null,"\n\t\t\t\t.am-lottieplayer-path {\n\t\t\t\t\tfill: url(#a)\n\t\t\t\t}\n\t\t\t\t.block-editor-block-toolbar .am-lottieplayer-path,\n\t\t\t\t.components-panel .am-lottieplayer-path {\n\t\t\t\t\tfill: var(--wp-admin-theme-color-darker-10)\n\t\t\t\t}"),(0,r.createElement)("defs",null,(0,r.createElement)("radialGradient",{id:"a",cx:".2",cy:"1.07",r:"1.2"},(0,r.createElement)("stop",{offset:"10%"},(0,r.createElement)("animate",{attributeName:"stop-color",values:"#24708f;#e18d4c;#1f374c;#85c6e0;#24708f;",dur:"12s",repeatCount:"indefinite"})),(0,r.createElement)("stop",{offset:"90%"},(0,r.createElement)("animate",{attributeName:"stop-color",values:"#85c6e0;#24708f;#e18d4c;#1f374c;#85c6e0;",dur:"24s",repeatCount:"indefinite"})))),(0,r.createElement)(c.Path,{className:"am-lottieplayer-path",d:"M60 0H20C9 0 0 9 0 20v39.5C0 71 9 80 20 80h39.5c11 0 20.5-9 20.5-20V20C80 9 71 0 60 0zm4.9 59.7h-7.4V37.1c0-3.2.3-8.2.3-8.2h-.1s-.9 4.7-1.7 7.5l-6.8 23.3h-4l-11-30.2c-.8-2.2-2-5.8-2-5.8h-.1s-1.1 3.4-1.9 5.8L18.7 59.7H15l15-39.4h4.2l11.4 30c.3-1.4 1.2-6.1 2.4-10.2l5.6-19.8H65v39.4z"}))}function S(e){let{children:t,onSelectMedia:l,onError:a}=e;return(0,r.createElement)(s.MediaPlaceholder,{icon:(0,r.createElement)(s.BlockIcon,{icon:k}),labels:{title:(0,u.__)("AM Lottie Animation","am-lottieplayer"),instructions:(0,u.__)("Upload Lottie animations to WordPress and add them in Gutenberg.","am-lottieplayer")},onSelect:l,accept:".lottie, .json",allowedTypes:["application/json","application/zip"],onError:a},t)}function x(e){let{attributes:t,clientId:l}=e;const{align:a,alt:n,autoplay:o,background:i,controls:s,direction:c,height:u,loop:m,mode:p,objectFit:g,renderer:y,segment:f,speed:h,src:b,subframe:v,width:_}=t,{getBlockIndex:E}=(0,d.useSelect)((e=>e("core/block-editor")),[]),w=E(l),C=(0,r.useRef)(null),k=(0,r.useRef)(!0),S=f&&f?.[1]?JSON.stringify([f[0],f[1]]):void 0,x=(0,r.useCallback)((()=>{C.current&&(C.current.reload&&C.current.reload(),setTimeout((()=>{const e=C.current?.shadowRoot?.querySelector("canvas");"svg"===y&&e?.remove()}),100))}),[y]),N=e=>e&&"number"==typeof e?`${e}px`:null;return(0,r.useEffect)((()=>{k.current||x(),k.current=!1}),[o,w,c,m,p,g,x,y,f,h,v]),(0,r.createElement)("dotlottie-player",{id:l,class:"lottie-element",autoplay:o?"":null,controls:s?"":null,description:n,direction:c,loop:m?"":null,mode:p,objectfit:g,ref:C,renderer:y,segment:S,speed:h,subframe:v?"":null,src:b,style:{width:(P=_,"wide"===a||"full"===a?"100%":N(P)),height:N(u),backgroundColor:i,margin:"0 auto"}});var P}function N(e){let{attributes:t,clientId:l,isPlaceholder:a,setAttributes:n}=e;return(0,r.createElement)(r.Fragment,null,a?(0,r.createElement)(S,{onSelectMedia:e=>{let{id:t,url:l,alt:a}=e;if(!l)return n({src:void 0,id:void 0});n({src:l,id:t?.toString(),alt:a})},onError:e=>{(e=>{(0,r.createElement)(c.Notice,{status:"error"},e)})(e)},children:void 0}):(0,r.createElement)(x,{attributes:t,clientId:l}))}function P(e){let{className:t,fullscreen:l,onResizeStart:a,onResize:o,onResizeStop:s,showHandle:u,...d}=e;const[m,p]=(0,r.useState)(!1);return(0,r.createElement)(c.ResizableBox,n({className:i()(t,{"is-resizing":m}),enable:{bottom:!l},minHeight:10,onResizeStart:a,onResize:(e,t,l)=>{o(l.clientHeight),m||p(!0)},onResizeStop:(e,t,l)=>{s(l.clientHeight),p(!1)},showHandle:u},d))}var B=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gb/lottiecover","title":"AM LottieCover","category":"media","description":"Add a Lottie animation with a text overlay — great for headers.","keywords":["animation","gif","motion","vector","SVG","Lottie","dotLottie"],"textdomain":"am-lottieplayer","attributes":{"align":{"type":"string","default":"full"},"allowedBlocks":{"type":"array","default":["core/paragraph","core/heading","core/buttons"]},"alt":{"type":"string","source":"attribute","selector":"dotlottie-player","attribute":"description","default":"","__experimentalRole":"content"},"autoplay":{"type":"boolean","source":"attribute","selector":"dotlottie-player","attribute":"autoplay","default":true},"controls":{"type":"boolean","source":"attribute","selector":"dotlottie-player","attribute":"controls"},"content":{"type":"string","default":""},"contentPosition":{"type":"string","default":""},"clickEvent":{"type":"boolean","default":false},"dimRatio":{"type":"number","default":50},"direction":{"type":"number","default":1},"focalPoint":{"type":"object","default":{}},"fullscreen":{"type":"boolean","default":false},"hasParallax":{"type":"boolean","default":false},"height":{"type":"number","default":null},"heightUnit":{"type":"string","default":"px"},"hover":{"type":"boolean","default":false},"id":{"type":"string","default":null},"isDark":{"type":"boolean","default":true},"loop":{"type":"boolean","source":"attribute","selector":"dotlottie-player","attribute":"loop","default":true},"mode":{"type":"string","default":"normal"},"objectFit":{"type":"string","default":"cover"},"overlayColor":{"type":"string","default":"transparent"},"mouseOut":{"type":"string","default":"stop"},"renderer":{"type":"string","default":"svg"},"scrollEvent":{"type":"boolean","default":false},"scrollDelay":{"type":"number","default":null},"segment":{"type":"array","default":null},"selector":{"type":"object","default":{"id":null,"exclude":false}},"speed":{"type":"number","default":1},"src":{"type":"string","default":""},"subframe":{"type":"boolean","default":false},"templateLock":{"type":["string","boolean"],"enum":["all","insert","contentOnly",false]},"width":{"type":"number","default":null}},"supports":{"anchor":true,"align":true,"html":false,"spacing":{"padding":true,"margin":["top","bottom"],"__experimentalDefaultControls":{"padding":true,"margin":true}},"color":{"text":false,"background":false},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}}},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');(0,a.registerBlockType)(B,{icon:k,edit:function(e){let{attributes:t,className:l,clientId:a,context:o,isSelected:m,setAttributes:p,toggleSelection:g}=e;const{allowedBlocks:f=["core/paragraph","core/heading","core/buttons"],background:h,fullscreen:b,height:v,heightUnit:_="px",id:E,src:w,templateLock:k}=t,S=((e,t)=>!e&&(0,y.isBlobURL)(t))(E,w),x=(0,r.useRef)(),[B,O]=(0,r.useState)(!0),R=(0,s.useBlockProps)({ref:x}),A={minHeight:b?"100vh":(v&&_?`${v}${_}`:v)||void 0},j=(0,d.useSelect)((e=>!!e(s.store)?.getBlock(a)?.innerBlocks?.length),[a]),I=(e=>[["core/paragraph",{align:"center",placeholder:(0,u.__)("Write title…","am-lottieplayer"),...e}]])({fontSize:(0,s.useSetting)("typography.fontSizes")?.length?"large":void 0}),z=(0,s.useInnerBlocksProps)({className:"wp-block-gb-lottiecover__inner-container"},{template:j?void 0:I,templateInsertUpdatesSelection:!0,allowedBlocks:f,templateLock:k});return(0,r.useEffect)((()=>{O(!w||""===w)}),[w]),(0,r.createElement)(r.Fragment,null,(0,r.createElement)(C,{attributes:t,setAttributes:p,clientId:a,isSelected:!1,context:o,className:l}),(0,r.createElement)("div",n({},R,{className:i()({"is-placeholder":B},R.className),style:{...A,...R.style}}),(0,r.createElement)(P,{className:"block-library-lottiecover__resize-container",fullscreen:b,onResizeStart:()=>{p({heightUnit:"px"}),g&&g(!1)},onResize:e=>{p({height:e})},onResizeStop:e=>{p({height:e}),g&&g(!0)},showHandle:m}),(0,r.createElement)("span",{"aria-hidden":"true",className:"wp-block-gb-lottiecover__background",style:{backgroundColor:h},hidden:B}),S&&(0,r.createElement)(c.Spinner,null),(0,r.createElement)(N,{attributes:t,setAttributes:p,isPlaceholder:B,clientId:a,isSelected:!1,context:o,className:l}),!B&&(0,r.createElement)("div",z)))},save:function(e){let{attributes:t}=e;const{align:l,alt:a,autoplay:n,background:o,controls:i,clickEvent:c,direction:u,fullscreen:d,height:m,heightUnit:p,hover:g,loop:y,mode:f,mouseout:h,objectFit:b,renderer:v,scrollEvent:_,scrollDelay:E,segment:w,selector:C,speed:k,src:S,subframe:x,width:N}=t,P={minHeight:d?"100vh":(m&&p?`${m}${p}`:m)||void 0},B=JSON.stringify(C),O=w&&w?.[1]?JSON.stringify([w[0],w[1]]):void 0;return(0,r.createElement)("div",s.useBlockProps.save({style:P}),(0,r.createElement)("span",{"aria-hidden":"true",className:"wp-block-gb-lottiecover__background",style:{backgroundColor:o}}),(0,r.createElement)("dotlottie-player",{class:"lottie-element"+(C?.id?" has-selector":""),autoplay:n?"":null,controls:i?"":null,description:a,direction:u,"data-direction":u,"data-mouseover":g,"data-mouseout":h,"data-click":c,"data-delay":E,"data-scroll":_,"data-selector":B,loop:y?"":null,mode:f,objectfit:b,renderer:v,segment:O,speed:k,src:S,style:{width:(R=N,"wide"===l||"full"===l?"100%":R&&"number"==typeof R?`${R}px`:null),height:m&&"number"==typeof m?`${m}px`:null,backgroundColor:o},subframe:x?"":null}),(0,r.createElement)("div",s.useInnerBlocksProps.save({className:"wp-block-gb-lottiecover__inner-container"})));var R}})},184:function(e,t){var l;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var r=typeof l;if("string"===r||"number"===r)e.push(l);else if(Array.isArray(l)){if(l.length){var o=n.apply(null,l);o&&e.push(o)}}else if("object"===r){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){e.push(l.toString());continue}for(var i in l)a.call(l,i)&&l[i]&&e.push(i)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(l=function(){return n}.apply(t,[]))||(e.exports=l)}()}},l={};function a(e){var n=l[e];if(void 0!==n)return n.exports;var r=l[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,e=[],a.O=function(t,l,n,r){if(!l){var o=1/0;for(u=0;u<e.length;u++){l=e[u][0],n=e[u][1],r=e[u][2];for(var i=!0,s=0;s<l.length;s++)(!1&r||o>=r)&&Object.keys(a.O).every((function(e){return a.O[e](l[s])}))?l.splice(s--,1):(i=!1,r<o&&(o=r));if(i){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[l,n,r]},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={841:0,560:0};a.O.j=function(t){return 0===e[t]};var t=function(t,l){var n,r,o=l[0],i=l[1],s=l[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(s)var u=s(a)}for(t&&t(l);c<o.length;c++)r=o[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},l=self.webpackChunkam_lottieplayer=self.webpackChunkam_lottieplayer||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var n=a.O(void 0,[560],(function(){return a(159)}));n=a.O(n)}();