import{G as a,H as s,g as e,z as t,k as n,x as r,I as i,s as o,h as c,A as l,t as h,j as m,b as p,q as d,r as u,e as f,B as g}from"./index-DyutQWTG.js";function w(n,{stiffness:r=.15,damping:i=.8,precision:o=.01}){let c,l=a(s(n)),h=n,m=n,p=n,d=!1;function u(){const a=performance.now(),e=.06*Math.min(a-c,42),n=p-m,f=(m-h)/e,g=(f+(r*n-i*f))*e;h=m,Math.abs(g)<o&&Math.abs(n)<o?(t(l,s(m=p)),d=!1):(t(l,s(m+=g)),c=a,requestAnimationFrame(u))}return{get value(){return e(l)},set value(a){!function(a){p=a,d||(d=!0,c=performance.now(),requestAnimationFrame(u))}(a)}}}var b=u('<section class="container s-11htrh4"><header class="titlebar app-window-drag-handle s-11htrh4"></header> <section class="main-area s-11htrh4"><img alt="Placeholder App" class="s-11htrh4"> <br> <h1>Nothing here yet <img style="height: 1em; width: auto; transform: translateY(0.1em);" src="/macos-web/emojis/wink.png" alt="Wink Emoji" class="s-11htrh4"></h1></section></section>');function v(a,s){n(s,!0);const t=w(0,{damping:.28,stiffness:.1});r((async()=>{await i(100),t.value=1}));const u=f((()=>g.reduced_motion?"initial":`rotate(${180*(t.value+1)}deg) scale(${t.value}) translateZ(0px)`));var v=b(),x=o(c(v),2),j=c(x),y=o(j,4);l(y,"display","flex"),l(y,"align-items","center"),l(y,"gap","0.5rem"),h((()=>{m(j,"src",`/macos-web/app-icons/${s.app_id??""}/256.webp`),l(j,"transform",e(u))})),p(a,v),d()}export{v as default};