(()=>{"use strict";const e=window.wp.element,t=window.wp.i18n;window.wp.blob;const r=()=>window&&"ontouchstart"in window,n=window.ReactJSXRuntime;function o({autoplay:t,src:o,speed:i=1,subframe:l,className:a=""}){const s=(0,e.useRef)(null),c=()=>{r()||(s.current?.setDirection(-1),s.current?.play())},u=()=>{r()||(s.current?.setDirection(1),s.current?.play())},d=(0,e.useCallback)((()=>{r()&&s.current&&(s.current.getBoundingClientRect().top<150?(s.current.setDirection(1),s.current.play()):(s.current.setDirection(-1),s.current.play()))}),[]);return(0,e.useEffect)((()=>(addEventListener("scroll",d,{passive:!0,capture:!0}),s.current&&(s.current.onmouseover=u,s.current.onmouseout=c),()=>{removeEventListener("scroll",d,!0)})),[d]),(0,n.jsx)("dotlottie-player",{autoplay:t,class:a,src:null!=o?o:"",speed:i,subframe:l,ref:s})}function i(){const{pluginUrl:e}=amPhpVars;return(0,n.jsxs)("div",{style:{backgroundColor:"#22374a",color:"#FFF",overflow:"hidden",padding:"1em 0"},children:[(0,n.jsx)(o,{autoplay:!0,src:`${e}assets/banner_top.lottie`}),(0,n.jsxs)("div",{style:{margin:"1em"},children:[(0,n.jsx)("p",{children:(0,n.jsx)("strong",{children:(0,t.__)("Thank you for using AM LottiePlayer!","am-lottieplayer")})}),(0,n.jsx)("p",{children:(0,t.__)("We're proud to announce that we've launched a premium version of this plugin with even more features – like combining & controlling animations in a single file, converting JSON to dotLottie and more.","am-lottieplayer")}),(0,n.jsx)("a",{style:{color:"#d98f56"},href:(0,t.__)("https://www.aarstein.media/en/am-lottieplayer/pro","am-lottieplayer"),target:"_blank",rel:"noreferrer",children:(0,t.__)("Read more about AM LottiePlayer PRO here!","am-lottieplayer")})]})]})}const l=()=>(0,n.jsx)(i,{}),a=document.getElementById("am-lottieplayer-widget");if(!a)throw new Error("Missing root element");(0,e.createRoot)(a).render((0,n.jsx)(l,{}))})();