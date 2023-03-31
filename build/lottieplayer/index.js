(()=>{"use strict";const e=window.wp.blocks,t=window.wp.element,l=window.wp.blockEditor,a=window.wp.components,n=window.wp.i18n,r=e=>{let{attributes:r,setAttributes:o}=e;const{alt:i,renderer:s="svg"}=r;return(0,t.createElement)(l.InspectorAdvancedControls,null,(0,t.createElement)(a.SelectControl,{label:(0,n.__)("Renderer"),value:s,onChange:e=>o({renderer:e}),options:[{value:"svg",label:"SVG"},{value:"canvas",label:"Canvas"}]}),(0,t.createElement)(a.TextareaControl,{label:(0,n.__)("Description","am-lottieplayer"),help:(0,n.__)("Describe the animation. This is helpful for screen readers and search engines.","am-lottieplayer"),value:i,onChange:e=>o({alt:e})}))};let o=function(e){return e.Bounce="bounce",e.Normal="normal",e}({}),i=function(e){return e.Void="void",e.Stop="stop",e.Pause="pause",e.Reverse="reverse",e}({});const s=window.wp.blob,c=e=>{let{id:l="",onChange:n,subTitle:r,title:o,value:i}=e;return(0,t.createElement)(a.BaseControl,{id:l,help:r,className:"lottie-switch-label"},(0,t.createElement)(a.BaseControl.VisualLabel,null,o),(0,t.createElement)(a.FormToggle,{checked:i,onChange:()=>n(!i)}))},u=e=>{let{id:l="",onChange:n,title:r,value:o="",disabled:i,placeholder:s=""}=e;return(0,t.createElement)(a.BaseControl,{id:l,help:r,className:"lottie-number-wrapper"},(0,t.createElement)(a.TextControl,{value:o,onChange:e=>n(+e),onKeyDown:e=>{console.log(e),(e=>{let{ctrlKey:t,key:l,metaKey:a,shiftKey:n}=e;return n||"End"===l||"Home"===l||"Backspace"===l||"Tab"===l||"Enter"===l||"Delete"===l||(t||a)&&("a"===l||"c"===l||"v"===l||"x"===l||"z"===l||"t"===l||"r"===l)})(e)||!(e=>{let{key:t}=e;return t>=0&&t<=9})(e)&&e.preventDefault()},disabled:i,placeholder:s}))},m=e=>{let{id:l="",onChange:n,title:r,help:o,value:i="",placeholder:s=""}=e;return(0,t.createElement)(a.BaseControl,{id:l,help:o,className:"lottie-number-wrapper"},(0,t.createElement)(a.BaseControl.VisualLabel,null,r),(0,t.createElement)(a.TextControl,{value:i,onChange:e=>n(e),placeholder:s}))},d=e=>{let{attributes:l,setAttributes:r}=e;const{autoplay:i,controls:s,direction:m,loop:d,mode:p=o.Normal,segment:y,speed:b=1,subframe:g}=l;return(0,t.createElement)(a.Panel,null,(0,t.createElement)(a.PanelBody,{title:(0,n.__)("Animation Settings","am-lottieplayer"),initialOpen:!0},(0,t.createElement)(c,{id:"am-lottieplayer-controls-settings",title:(0,n.__)("Show controls","am-lottieplayer"),value:!!s,onChange:e=>r({controls:e})}),(0,t.createElement)(c,{id:"am-lottieplayer-autoplay-settings",title:(0,n.__)("Autoplay","am-lottieplayer"),value:!!i,onChange:e=>{r({autoplay:e})}}),(0,t.createElement)(c,{id:"am-lottieplayer-loop-settings",title:(0,n.__)("Loop","am-lottieplayer"),value:!!d,onChange:e=>{r({loop:e})}}),(0,t.createElement)(c,{id:"am-lottieplayer-playmode-settings",title:(0,n.__)("Boomerang","am-lottieplayer"),value:p===o.Bounce,onChange:e=>{r({mode:e?o.Bounce:o.Normal})}}),(0,t.createElement)(c,{id:"am-lottieplayer-reverse-settings",title:(0,n.__)("Reverse","am-lottieplayer"),value:-1===m,onChange:e=>r({direction:e?-1:1})}),(0,t.createElement)(c,{id:"am-lottieplayer-subframe-settings",title:(0,n.__)("Subframe","am-lottieplayer"),subTitle:(0,n.__)("Enabling this can sometimes reduce flicker","am-lottieplayer"),value:!!g,onChange:e=>r({subframe:e})}),(0,t.createElement)(a.RangeControl,{label:(0,n.__)("Speed","am-lottieplayer"),min:.5,max:5,step:.5,value:b,onChange:e=>r({speed:e})}),(0,t.createElement)(a.BaseControl.VisualLabel,null,(0,n.__)("Play only part of the animation","am-lottieplayer")),(0,t.createElement)(a.PanelRow,{className:"lottie-segment"},(0,t.createElement)(u,{id:"am-lottieplayer-segment-in",title:(0,n.__)("Choose where to start","am-lottieplayer"),value:y?.[0],onChange:e=>{var t;return r({segment:void 0!==e?[e,null!==(t=y?.[1])&&void 0!==t?t:0]:void 0})},placeholder:(0,n.__)("First frame","am-lottieplayer")}),(0,t.createElement)(u,{id:"am-lottieplayer-segment-out",title:(0,n.__)("And where to end","am-lottieplayer"),value:y?.[1],onChange:e=>{var t;return r({segment:void 0!==e?[null!==(t=y?.[0])&&void 0!==t?t:0,e]:void 0})},placeholder:(0,n.__)("Last frame","am-lottieplayer")}))))},p=e=>{let{attributes:l,setAttributes:r}=e;const{background:o}=l;return(0,t.createElement)(a.Panel,null,(0,t.createElement)(a.PanelBody,{title:(0,n.__)("Background Color","am-lottieplayer"),initialOpen:!1},(0,t.createElement)(a.ColorPicker,{color:o,onChangeComplete:e=>r({background:e.hex})})))},y=e=>{let{attributes:l,setAttributes:r}=e;const{clickEvent:o,hover:s,mouseout:u,selector:d}=l;return(0,t.createElement)(a.Panel,null,(0,t.createElement)(a.PanelBody,{title:(0,n.__)("Interactions","am-lottieplayer"),initialOpen:!0},(0,t.createElement)(c,{id:"am-lottieplayer-click-settings",title:(0,n.__)("Play on click","am-lottieplayer"),value:o,onChange:e=>r({clickEvent:e})}),(0,t.createElement)(c,{id:"am-lottieplayer-hover-settings",title:(0,n.__)("Play on mouseover","am-lottieplayer"),value:s,onChange:e=>r({hover:e})}),s&&(0,t.createElement)(a.SelectControl,{label:(0,n.__)("On mouseout","am-lottieplayer"),value:u,onChange:e=>r({mouseout:e}),options:[{value:i.Void,label:(0,n.__)("No event","am-lottieplayer")},{value:i.Stop,label:(0,n.__)("Stop","am-lottieplayer")},{value:i.Pause,label:(0,n.__)("Pause","am-lottieplayer")},{value:i.Reverse,label:(0,n.__)("Reverse","am-lottieplayer")}]}),(s||o)&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)(m,{id:"am-lottieplayer-settings",title:(0,n.__)("Trigger element","am-lottieplayer"),help:(0,n.__)("Anchor tag (id) for an element you want to trigger the animation, either by hover or click.","am-lottieplayer"),placeholder:"#",value:d?.id,onChange:e=>r({selector:{...d,id:e}})}),(0,t.createElement)(c,{id:"am-lottieplayer-selector-settings",title:(0,n.__)("Apply interaction only to trigger element","am-lottieplayer"),value:d?.exclude,onChange:e=>r({selector:{...d,exclude:e}})}))))},b=e=>{let{attributes:l,setAttributes:r}=e;const{align:o,fullscreen:i,height:s,objectFit:m="contain",width:d}=l,p=(0,t.useCallback)((e=>"full"===o||"wide"===o?"100%":e&&"0"!==e?e:void 0),[o]);return(0,t.createElement)(a.Panel,null,(0,t.createElement)(a.PanelBody,{title:(0,n.__)("Dimensions","am-lottieplayer"),initialOpen:!0},(!i||"full"!==o)&&(0,t.createElement)(a.PanelRow,{className:"lottie-dimensions"},(0,t.createElement)(u,{id:"am-lottieplayer-width-settings",title:(0,n.__)("Width","am-lottieplayer"),value:p(d),onChange:e=>r({width:null!=e?e:null}),disabled:"full"===o||"wide"===o,placeholder:"full"===o||"wide"===o?"100%":"auto"}),(0,t.createElement)(u,{id:"am-lottieplayer-height-settings",title:(0,n.__)("Height","am-lottieplayer"),value:s&&"0"!==s.toString()?s:void 0,disabled:i,onChange:e=>r({height:e}),placeholder:"auto"})),("full"===o||"wide"===o)&&(0,t.createElement)(c,{id:"am-lottieplayer-fullscreen-settings",title:(0,n.__)("Fill screen","am-lottieplayer"),value:i,onChange:e=>r({fullscreen:e})}),(0,t.createElement)(a.SelectControl,{label:(0,n.__)("Object fit"),value:m,onChange:e=>{r({objectFit:e})},options:[{value:"contain",label:(0,n.__)("Contain","am-lottieplayer")},{value:"cover",label:(0,n.__)("Cover","am-lottieplayer")},{value:"fill",label:(0,n.__)("Fill","am-lottieplayer")},{value:"none",label:(0,n.__)("None","am-lottieplayer")}]})))};function g(e){let{attributes:a,className:n,clientId:o,context:i,isSelected:s,setAttributes:c}=e;return(0,t.createElement)(l.InspectorControls,null,(0,t.createElement)(d,{attributes:a,setAttributes:c,clientId:o,isSelected:s,context:i,className:n}),(0,t.createElement)(y,{attributes:a,setAttributes:c,clientId:o,isSelected:s,context:i,className:n}),(0,t.createElement)(b,{attributes:a,setAttributes:c,clientId:o,isSelected:s,context:i,className:n}),(0,t.createElement)(p,{attributes:a,setAttributes:c,clientId:o,isSelected:s,context:i,className:n}),(0,t.createElement)(r,{attributes:a,setAttributes:c,clientId:o,isSelected:s,context:i,className:n}))}function h(){return(0,t.createElement)(a.SVG,{role:"img",xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",viewBox:"0 0 80 80"},(0,t.createElement)("style",null,"\n\t\t\t\t.am-lottieplayer-path {\n\t\t\t\t\tfill: url(#a)\n\t\t\t\t}\n\t\t\t\t.block-editor-block-toolbar .am-lottieplayer-path,\n\t\t\t\t.components-panel .am-lottieplayer-path {\n\t\t\t\t\tfill: var(--wp-admin-theme-color-darker-10)\n\t\t\t\t}"),(0,t.createElement)("defs",null,(0,t.createElement)("radialGradient",{id:"a",cx:".2",cy:"1.07",r:"1.2"},(0,t.createElement)("stop",{offset:"10%"},(0,t.createElement)("animate",{attributeName:"stop-color",values:"#24708f;#e18d4c;#1f374c;#85c6e0;#24708f;",dur:"12s",repeatCount:"indefinite"})),(0,t.createElement)("stop",{offset:"90%"},(0,t.createElement)("animate",{attributeName:"stop-color",values:"#85c6e0;#24708f;#e18d4c;#1f374c;#85c6e0;",dur:"24s",repeatCount:"indefinite"})))),(0,t.createElement)(a.Path,{className:"am-lottieplayer-path",d:"M60 0H20C9 0 0 9 0 20v39.5C0 71 9 80 20 80h39.5c11 0 20.5-9 20.5-20V20C80 9 71 0 60 0zm4.9 59.7h-7.4V37.1c0-3.2.3-8.2.3-8.2h-.1s-.9 4.7-1.7 7.5l-6.8 23.3h-4l-11-30.2c-.8-2.2-2-5.8-2-5.8h-.1s-1.1 3.4-1.9 5.8L18.7 59.7H15l15-39.4h4.2l11.4 30c.3-1.4 1.2-6.1 2.4-10.2l5.6-19.8H65v39.4z"}))}function v(e){let{children:a,onSelectMedia:r,onError:o}=e;return(0,t.createElement)(l.MediaPlaceholder,{icon:(0,t.createElement)(l.BlockIcon,{icon:h}),labels:{title:(0,n.__)("AM Lottie Animation","am-lottieplayer"),instructions:(0,n.__)("Upload Lottie animations to WordPress and add them in Gutenberg.","am-lottieplayer")},onSelect:r,accept:".lottie, .json",allowedTypes:["application/json","application/zip"],onError:o},a)}const f=window.wp.data;function E(e){let{attributes:l,clientId:a}=e;const{align:n,alt:r,autoplay:o,background:i,controls:s,direction:c,height:u,loop:m,mode:d,objectFit:p,renderer:y,segment:b,speed:g,src:h,subframe:v,width:E}=l,{getBlockIndex:_}=(0,f.useSelect)((e=>e("core/block-editor")),[]),C=_(a),w=(0,t.useRef)(null),k=(0,t.useRef)(!0),S=b&&b?.[1]?JSON.stringify([b[0],b[1]]):void 0,x=(0,t.useCallback)((()=>{w.current&&(w.current.reload&&w.current.reload(),setTimeout((()=>{const e=w.current?.shadowRoot?.querySelector("canvas");"svg"===y&&e?.remove()}),100))}),[y]),N=e=>e&&"number"==typeof e?`${e}px`:null;return(0,t.useEffect)((()=>{k.current||x(),k.current=!1}),[o,C,c,m,d,p,x,y,b,g,v]),(0,t.createElement)("dotlottie-player",{class:"lottie-element",autoplay:o?"":null,controls:s?"":null,description:r,direction:c,loop:m?"":null,mode:d,objectfit:p,ref:w,renderer:y,segment:S,speed:g,subframe:v?"":null,src:h,style:{width:(P=E,"wide"===n||"full"===n?"100%":N(P)),height:N(u),backgroundColor:i,margin:"0 auto"}});var P}function _(e){let{attributes:l,clientId:n,isPlaceholder:r,setAttributes:o}=e;return(0,t.createElement)(t.Fragment,null,r?(0,t.createElement)(v,{onSelectMedia:e=>{let{id:t,url:l,alt:a}=e;if(!l)return o({src:void 0,id:void 0});o({src:l,id:t,alt:a})},onError:e=>{(e=>{(0,t.createElement)(a.Notice,{status:"error"},e)})(e)},children:void 0}):(0,t.createElement)(E,{attributes:l,clientId:n}))}function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},C.apply(this,arguments)}const w=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gb/lottieplayer","title":"AM LottiePlayer","description":"Play Lottie animations on your WordPress website.","keywords":["animation","gif","motion","vector","SVG","Lottie","dotLottie"],"category":"media","supports":{"align":true,"anchor":true,"html":false},"textdomain":"am-lottieplayer","attributes":{"align":{"type":"string","default":"none"},"alt":{"type":"string","source":"attribute","selector":"dotlottie-player","attribute":"description","default":"","__experimentalRole":"content"},"autoplay":{"type":"boolean","source":"attribute","selector":"dotlottie-player","attribute":"autoplay"},"background":{"type":"string","default":"transparent"},"controls":{"type":"boolean","default":true,"source":"attribute","selector":"dotlottie-player","attribute":"controls"},"clickEvent":{"type":"boolean","default":false},"direction":{"type":"number","default":1},"height":{"type":"number","default":null},"hover":{"type":"boolean","default":false},"id":{"type":"string","default":null},"interactivityType":{"type":"string","default":"none"},"loop":{"type":"boolean","source":"attribute","selector":"dotlottie-player","attribute":"loop"},"mode":{"type":"string","default":"normal"},"mouseout":{"type":"string","default":"stop"},"objectFit":{"type":"string","default":"contain"},"renderer":{"type":"string","default":"svg"},"segment":{"type":"array","default":null},"selector":{"type":"object","default":{"id":null,"exclude":false}},"speed":{"type":"number","default":1},"src":{"type":"string","default":"","source":"attribute","selector":"dotlottie-player","attribute":"src","__experimentalRole":"content"},"subframe":{"type":"boolean","default":false},"width":{"type":"number","default":null}},"editorScript":"file:./index.js","editorStyle":"file:./index.css"}');(0,e.registerBlockType)(w,{icon:h,edit:function(e){let{attributes:n,className:r,clientId:o,context:i,isSelected:c,setAttributes:u}=e;const{id:m,src:d}=n,[p,y]=(0,t.useState)(!0),b=((e,t)=>!e&&(0,s.isBlobURL)(t))(m,d);return(0,t.useEffect)((()=>{y(!d||""===d)}),[d]),(0,t.createElement)(t.Fragment,null,(0,t.createElement)(g,{attributes:n,setAttributes:u,clientId:o,isSelected:c,context:i,className:r}),b&&(0,t.createElement)(a.Spinner,null),(0,t.createElement)("div",(0,l.useBlockProps)(),(0,t.createElement)(_,{attributes:n,setAttributes:u,isPlaceholder:p,clientId:o,isSelected:c,context:i,className:r})))},save:function(e){let{attributes:a}=e;const{align:n,alt:r,autoplay:o,background:i,controls:s,clickEvent:c,direction:u,height:m,hover:d,id:p,loop:y,mode:b,mouseout:g,objectFit:h,renderer:v,segment:f,selector:E,speed:_,src:w,subframe:k,width:S}=a,x=JSON.stringify(E),N=f&&f?.[1]?JSON.stringify([f[0],f[1]]):void 0;return(0,t.createElement)("figure",C({id:p},l.useBlockProps.save({className:`align${n}`}),{style:{backgroundColor:i,height:m&&0!==m?m:"auto",width:S&&0!==S?S:"auto",margin:"0 auto"}}),(0,t.createElement)("dotlottie-player",{class:"lottie-element "+(E?.id?"has-selector":""),autoplay:o,controls:s,description:r,direction:u,"data-direction":u,"data-mouseover":d,"data-mouseout":g,"data-click":c,"data-selector":x,loop:y,mode:b,objectfit:h,renderer:v,segment:N,src:w,speed:_,subframe:k}))}})})();