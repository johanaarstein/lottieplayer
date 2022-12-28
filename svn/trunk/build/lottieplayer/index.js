(()=>{"use strict";const e=window.wp.blocks,t=window.wp.i18n,l=window.wp.element,n=window.wp.blockEditor,a=window.wp.components,o=e=>{let{attributes:o,setAttributes:r}=e;const{mode:i="normal",objectFit:c="contain",renderer:s="svg"}=o;return(0,l.createElement)(n.InspectorAdvancedControls,{key:"inspector"},(0,l.createElement)(a.SelectControl,{label:(0,t.__)("Renderer"),value:s,onChange:e=>r({renderer:e}),options:[{value:"svg",label:(0,t.__)("SVG")},{value:"canvas",label:(0,t.__)("Canvas")}]}),(0,l.createElement)(a.SelectControl,{label:(0,t.__)("Object fit"),value:c,onChange:e=>{r({objectFit:e})},options:[{value:"contain",label:(0,t.__)("Contain")},{value:"cover",label:(0,t.__)("Cover")},{value:"fill",label:(0,t.__)("Fill")},{value:"none",label:(0,t.__)("None")}]}),(0,l.createElement)(a.SelectControl,{label:(0,t.__)("Play mode"),value:i,name:"mode",onChange:e=>r({mode:e}),options:[{value:"normal",label:"Normal"},{value:"bounce",label:"Bounce"}]}))},r=e=>{switch(e){case"contain":case"scale-down":default:return"xMidYMid meet";case"cover":return"xMidYMid slice";case"fill":return"none";case"none":return"xMinYMin slice"}},i=e=>{let{id:t="",onChange:n,subTitle:o,title:r,value:i}=e;return(0,l.createElement)(a.BaseControl,{id:t,help:o,className:"lottie-switch-label"},(0,l.createElement)(a.BaseControl.VisualLabel,null,r),(0,l.createElement)(a.FormToggle,{checked:i,onChange:()=>n(!i)}))},c=e=>{let{id:t="",onChange:n,title:o,value:r=null,disabled:i,placeholder:c=""}=e;return(0,l.createElement)(a.BaseControl,{id:t,help:o,className:"lottie-number-wrapper"},(0,l.createElement)(a.TextControl,{value:r,onChange:e=>n(+e),onKeyDown:e=>{(e=>{let{ctrlKey:t,key:l,metaKey:n,shiftKey:a}=e;return a||"End"===l||"Home"===l||"Backspace"===l||"Tab"===l||"Enter"===l||"Delete"===l||(t||n)&&("a"===l||"c"===l||"v"===l||"x"===l||"z"===l||"t"===l||"r"===l)})(e)||!(e=>{let{key:t}=e;return t>=0&&t<=9})(e)&&e.preventDefault()},disabled:i,placeholder:c}))},s=e=>{let{attributes:n,setAttributes:o}=e;const{align:r,autoplay:s,controls:u,click:d,direction:p,height:m,hover:b,loop:h,mouseout:g,speed:v=1,width:y}=n,_=(0,l.useCallback)((e=>"full"===r||"wide"===r?"100%":e&&"0"!==e?e:null),[r]);return(0,l.createElement)(a.Panel,null,(0,l.createElement)(a.PanelBody,{title:(0,t.__)("Animation Settings"),initialOpen:!0},(0,l.createElement)(i,{id:"am-lottieplayer-autoplay-settings",title:(0,t.__)("Autoplay"),value:s,onChange:e=>{o({autoplay:e})}}),(0,l.createElement)(i,{id:"am-lottieplayer-loop-settings",title:(0,t.__)("Loop"),value:h,onChange:e=>{o({loop:e})}}),(0,l.createElement)(a.RangeControl,{label:(0,t.__)("Speed"),min:.5,max:5,step:.5,value:v,onChange:e=>o({speed:e})}),(0,l.createElement)(i,{id:"am-lottieplayer-reverse-settings",title:(0,t.__)("Reverse"),value:-1===p,onChange:e=>o({direction:e?-1:1})}),(0,l.createElement)(i,{id:"am-lottieplayer-controls-settings",title:(0,t.__)("Show controls"),value:u,onChange:e=>o({controls:e})}),(0,l.createElement)(i,{id:"am-lottieplayer-click-settings",title:(0,t.__)("Play on click"),value:d,onChange:e=>o({click:e})}),(0,l.createElement)(i,{id:"am-lottieplayer-hover-settings",title:(0,t.__)("Play on mouseover"),value:b,onChange:e=>o({hover:e})}),(0,l.createElement)(a.SelectControl,{label:(0,t.__)("On mouseout"),value:g,onChange:e=>o({mouseout:e}),options:[{value:"void",label:(0,t.__)("No event")},{value:"stop",label:(0,t.__)("Stop")},{value:"pause",label:(0,t.__)("Pause")},{value:"reverse",label:(0,t.__)("Reverse")}],disabled:!b}),(0,l.createElement)(a.PanelRow,{className:"lottie-dimensions"},(0,l.createElement)(c,{id:"am-lottieplayer-width-settings",title:(0,t.__)("Width"),value:_(y),onChange:e=>o({width:null!=e?e:null}),disabled:"full"===r||"wide"===r,placeholder:"full"===r||"wide"===r?"100%":"auto"}),(0,l.createElement)(c,{id:"am-lottieplayer-height-settings",title:(0,t.__)("Height"),value:m&&"0"!==m.toString()?m:null,onChange:e=>o({height:null!=e?e:null}),placeholder:"auto"}))))},u=e=>{let{attributes:n,setAttributes:o}=e;const{background:r}=n;return(0,l.createElement)(a.Panel,null,(0,l.createElement)(a.PanelBody,{title:(0,t.__)("Background Color"),initialOpen:!1},(0,l.createElement)(a.ColorPicker,{color:r,onChangeComplete:e=>o({background:e.hex})})))};function d(e){let{attributes:t,setAttributes:a}=e;return(0,l.createElement)(n.InspectorControls,null,(0,l.createElement)(s,{attributes:t,setAttributes:a}),(0,l.createElement)(u,{attributes:t,setAttributes:a}),(0,l.createElement)(o,{attributes:t,setAttributes:a}))}function p(){return(0,l.createElement)(a.SVG,{role:"img",xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",viewBox:"0 0 80 80"},(0,l.createElement)("style",null,"\n\t\t\t\t.am-lottieplayer-path {\n\t\t\t\t\tfill: url(#a)\n\t\t\t\t}\n\t\t\t\t.block-editor-block-toolbar .am-lottieplayer-path,\n\t\t\t\t.components-panel .am-lottieplayer-path {\n\t\t\t\t\tfill: var(--wp-admin-theme-color-darker-10)\n\t\t\t\t}"),(0,l.createElement)("defs",null,(0,l.createElement)("radialGradient",{id:"a",cx:".2",cy:"1.07",r:"1.2"},(0,l.createElement)("stop",{offset:"10%"},(0,l.createElement)("animate",{attributeName:"stop-color",values:"#24708f;#e18d4c;#1f374c;#85c6e0;#24708f;",dur:"3s",repeatCount:"indefinite"})),(0,l.createElement)("stop",{offset:"90%"},(0,l.createElement)("animate",{attributeName:"stop-color",values:"#85c6e0;#24708f;#e18d4c;#1f374c;#85c6e0;",dur:"6s",repeatCount:"indefinite"})))),(0,l.createElement)(a.Path,{className:"am-lottieplayer-path",d:"M60 0H20C9 0 0 9 0 20v39.5C0 71 9 80 20 80h39.5c11 0 20.5-9 20.5-20V20C80 9 71 0 60 0zm4.9 59.7h-7.4V37.1c0-3.2.3-8.2.3-8.2h-.1s-.9 4.7-1.7 7.5l-6.8 23.3h-4l-11-30.2c-.8-2.2-2-5.8-2-5.8h-.1s-1.1 3.4-1.9 5.8L18.7 59.7H15l15-39.4h4.2l11.4 30c.3-1.4 1.2-6.1 2.4-10.2l5.6-19.8H65v39.4z"}))}function m(e){let{children:a,onSelectMedia:o,onError:r}=e;return(0,l.createElement)(n.MediaPlaceholder,{icon:(0,l.createElement)(n.BlockIcon,{icon:p}),labels:{title:(0,t.__)("AM Lottie Animation"),instructions:(0,t.__)("Upload Lottie animations to WordPress and add them in Gutenberg.")},onSelect:o,accept:".lottie, .json",allowedTypes:["application/json","application/zip"],onError:r},a)}function b(){let{attributes:e={}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{align:t,alt:n,autoplay:a,background:o,controls:i,direction:c,height:s,loop:u,mode:d,objectFit:p,renderer:m,speed:b,src:h,width:g}=e,v=(0,l.useRef)(null),y=(0,l.useRef)(!0),_=(0,l.useCallback)((()=>{v.current&&(v.current.reload(),setTimeout((()=>{const e=v.current?.shadowRoot?.querySelector("canvas");"svg"===m&&e&&e.remove()}),100))}),[m]),f=(0,l.useCallback)((e=>"wide"===t||"full"===t?"100%":e&&"number"==typeof e?`${e}px`:null),[t]);return(0,l.useEffect)((()=>{y.current||_(),y.current=!1}),[p,_,m,b]),(0,l.useEffect)((()=>{v.current&&u&&a&&"playing"!==v.current.currentState&&v.current?.play()}),[a,u]),(0,l.createElement)("dotlottie-player",{class:"lottie-element",autoplay:a?"":null,controls:i?"":null,description:n,direction:c,loop:u?"":null,mode:d,preserveAspectRatio:r(p),ref:v,renderer:m,speed:b,src:h,style:{width:f(g),height:s&&"number"==typeof s?`${s}px`:null,backgroundColor:o,margin:"0 auto"}})}function h(e){let{attributes:t,setAttributes:n,isPlaceholder:o}=e;return(0,l.createElement)(l.Fragment,null,o?(0,l.createElement)(m,{onSelectMedia:e=>{let{id:t,url:l,alt:a}=e;n(l?{src:l,id:t,alt:a}:{src:void 0,id:null})},onError:e=>{(e=>{(0,l.createElement)(a.Notice,{status:"error"},e)})(e)},children:void 0}):(0,l.createElement)(b,{attributes:t}))}function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},g.apply(this,arguments)}const v=JSON.parse('{"u2":"gb/lottieplayer"}');(0,e.registerBlockType)(v.u2,{icon:p,keywords:[(0,t.__)("animation"),(0,t.__)("gif"),(0,t.__)("motion"),(0,t.__)("vector"),(0,t.__)("SVG"),(0,t.__)("Lottie"),(0,t.__)("dotLottie")],attributes:{align:{type:"string",default:"none"},alt:{type:"string",default:(0,t.__)("AM Lottie animation")},autoplay:{type:"boolean",default:!0},background:{type:"string",default:"transparent"},controls:{type:"boolean",default:!0},click:{type:"boolean",default:!1},direction:{type:"number",default:1},height:{type:"number",default:null},hover:{type:"boolean",default:!1},id:{type:"string",default:null},interactivityType:{type:"string",default:"none"},loop:{type:"boolean",default:!0},mode:{type:"string",default:"normal"},mouseout:{type:"string",default:"stop"},objectFit:{type:"string",default:"contain"},renderer:{type:"string",default:"svg"},speed:{type:"number",default:1},src:{type:"string",default:""},width:{type:"number",default:null}},edit:function(e){let{attributes:t,setAttributes:a}=e;const{src:o}=t,[r,i]=(0,l.useState)(!0);return(0,l.useEffect)((()=>{i(!o||""===o)}),[o]),(0,l.createElement)(l.Fragment,null,(0,l.createElement)(d,{attributes:t,setAttributes:a}),(0,l.createElement)("div",(0,n.useBlockProps)(),(0,l.createElement)(h,{attributes:t,setAttributes:a,isPlaceholder:r})))},save:function(e){let{attributes:t}=e;const{align:a,alt:o,autoplay:i,background:c,controls:s,click:u,direction:d,height:p,hover:m,id:b,loop:h,mode:v,mouseout:y,objectFit:_,renderer:f,speed:E,src:C,width:w}=t;return(0,l.createElement)("figure",g({id:b},n.useBlockProps.save({className:`align${a}`}),{style:{backgroundColor:c,height:p&&0!==p?p:"auto",width:w&&0!==w?w:"auto",margin:"0 auto"}}),(0,l.createElement)("dotlottie-player",{autoplay:i,controls:s,description:o,direction:d,"data-direction":d,"data-mouseover":m,"data-mouseout":y,"data-click":u,loop:h,mode:v,preserveAspectRatio:r(_),renderer:f,src:C,speed:E}))}})})();