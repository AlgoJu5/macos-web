const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Calendar-CMZos0L4.js","assets/index-BwA8BKEH.js","assets/index-oyKCalqW.css","assets/Calendar-DpS_6YNf.css","assets/VSCode-CoVHN6Uk.js","assets/VSCode-NeBP5DiP.css","assets/Calculator-DuEvCxpr.js","assets/Calculator-Vi-bo_at.css","assets/WallpaperSelectorApp-BX8aVk5I.js","assets/WallpaperSelectorApp-DpSy9RrU.css","assets/PurusProfile-ROmA_CUY.js","assets/PurusProfile-BVmAbbRx.css","assets/AppStore-CFmfMxFa.js","assets/AppStore-l0VbIlT5.css"])))=>i.map(i=>d[i]);
import{c as e,f as t,i as r,a as n,_ as a,b as o,d as i,g as s,e as l,n as d,s as c,h as u,j as p,p as g,k as f,l as h,t as v,m as _,o as m,q as w,r as b,u as y,v as x,w as E,x as k,y as S,z as A,A as C,B as D,C as P,D as M,E as L,F as z,G as R,H as j,I as V,J as $}from"./index-BwA8BKEH.js";var B={dragStart:!0},N=(e,t,r)=>Math.min(Math.max(e,t),r),T=e=>"string"==typeof e,I=(e,t)=>e.some((e=>t.some((t=>e.contains(t)))));function H(e,t){if(void 0===e)return;if(W(e))return e.getBoundingClientRect();if("object"==typeof e){const{top:t=0,left:r=0,right:n=0,bottom:a=0}=e;return{top:t,right:window.innerWidth-n,bottom:window.innerHeight-a,left:r}}if("parent"===e)return t.parentNode.getBoundingClientRect();const r=document.querySelector(e);if(null===r)throw new Error("The selector provided for bound doesn't exists in the document.");return r.getBoundingClientRect()}var O=(e,t,r)=>e.style.setProperty(t,r),W=e=>e instanceof HTMLElement,q=(e,t={})=>{let r,n,{bounds:a,axis:o="both",gpuAcceleration:i=!0,legacyTranslate:s=!0,transform:l,applyUserSelectHack:d=!0,disabled:c=!1,ignoreMultitouch:u=!1,recomputeBounds:p=B,grid:g,position:f,cancel:h,handle:v,defaultClass:_="neodrag",defaultClassDragging:m="neodrag-dragging",defaultClassDragged:w="neodrag-dragged",defaultPosition:b={x:0,y:0},onDragStart:y,onDrag:x,onDragEnd:E}=t,k=!1,S=0,A=0,C=0,D=0,P=0,M=0,{x:L,y:z}=f?{x:(null==f?void 0:f.x)??0,y:(null==f?void 0:f.y)??0}:b;J(L,z);let R,j,V,$,q,X="",Y=!!f;p={...B,...p};let U=new Set;const F=document.body.style,G=e.classList;function J(t=S,r=A){if(!l){if(s){let n=`${+t}px, ${+r}px`;return O(e,"transform",i?`translate3d(${n}, 0)`:`translate(${n})`)}return O(e,"translate",`${+t}px ${+r}px ${i?"1px":""}`)}const n=l({offsetX:t,offsetY:r,rootNode:e});T(n)&&O(e,"transform",n)}const K=(t,r)=>{const n={offsetX:S,offsetY:A,rootNode:e,currentNode:q};e.dispatchEvent(new CustomEvent(t,{detail:n})),null==r||r(n)},Q=addEventListener;Q("pointerdown",ee,!1),Q("pointerup",te,!1),Q("pointermove",re,!1),O(e,"touch-action","none");const Z=()=>{let t=e.offsetWidth/j.width;return isNaN(t)&&(t=1),t};function ee(t){if(c)return;if(2===t.button)return;if(U.add(t.pointerId),u&&U.size>1)return t.preventDefault();if(p.dragStart&&(R=H(a,e)),T(v)&&T(h)&&v===h)throw new Error("`handle` selector can't be same as `cancel` selector");if(G.add(_),V=function(e,t){if(!e)return[t];if(W(e))return[e];if(Array.isArray(e))return e;const r=t.querySelectorAll(e);if(null===r)throw new Error("Selector passed for `handle` option should be child of the element on which the action is applied");return Array.from(r.values())}(v,e),$=function(e,t){if(!e)return[];if(W(e))return[e];if(Array.isArray(e))return e;const r=t.querySelectorAll(e);if(null===r)throw new Error("Selector passed for `cancel` option should be child of the element on which the action is applied");return Array.from(r.values())}(h,e),r=/(both|x)/.test(o),n=/(both|y)/.test(o),I($,V))throw new Error("Element being dragged can't be a child of the element on which `cancel` is applied");const i=t.composedPath()[0];if(!V.some((e=>{var t;return e.contains(i)||(null==(t=e.shadowRoot)?void 0:t.contains(i))}))||I($,[i]))return;q=1===V.length?e:V.find((e=>e.contains(i))),k=!0,j=e.getBoundingClientRect(),d&&(X=F.userSelect,F.userSelect="none"),K("neodrag:start",y);const{clientX:s,clientY:l}=t,g=Z();r&&(C=s-L/g),n&&(D=l-z/g),R&&(P=s-j.left,M=l-j.top)}function te(t){U.delete(t.pointerId),k&&(p.dragEnd&&(R=H(a,e)),G.remove(m),G.add(w),d&&(F.userSelect=X),K("neodrag:end",E),r&&(C=S),n&&(D=A),k=!1)}function re(t){if(!k||u&&U.size>1)return;p.drag&&(R=H(a,e)),G.add(m),t.preventDefault(),j=e.getBoundingClientRect();let o=t.clientX,i=t.clientY;const s=Z();if(R){const e={left:R.left+P,top:R.top+M,right:R.right+P-j.width,bottom:R.bottom+M-j.height};o=N(o,e.left,e.right),i=N(i,e.top,e.bottom)}if(Array.isArray(g)){let[e,t]=g;if(isNaN(+e)||e<0)throw new Error("1st argument of `grid` must be a valid positive number");if(isNaN(+t)||t<0)throw new Error("2nd argument of `grid` must be a valid positive number");let r=o-C,n=i-D;[r,n]=(([e,t],r,n)=>{const a=(e,t)=>0===t?0:Math.ceil(e/t)*t;return[a(r,e),a(n,t)]})([e/s,t/s],r,n),o=C+r,i=D+n}r&&(S=Math.round((o-C)*s)),n&&(A=Math.round((i-D)*s)),L=S,z=A,K("neodrag",x),J()}return{destroy:()=>{const e=removeEventListener;e("pointerdown",ee,!1),e("pointerup",te,!1),e("pointermove",re,!1)},update:e=>{var t,r;o=e.axis||"both",c=e.disabled??!1,u=e.ignoreMultitouch??!1,v=e.handle,a=e.bounds,p=e.recomputeBounds??B,h=e.cancel,d=e.applyUserSelectHack??!0,g=e.grid,i=e.gpuAcceleration??!0,s=e.legacyTranslate??!0,l=e.transform;const n=G.contains(w);G.remove(_,w),_=e.defaultClass??"neodrag",m=e.defaultClassDragging??"neodrag-dragging",w=e.defaultClassDragged??"neodrag-dragged",G.add(_),n&&G.add(w),Y&&(L=S=(null==(t=e.position)?void 0:t.x)??S,z=A=(null==(r=e.position)?void 0:r.y)??A,J())}}};function X(e,t){return e>t&&([e,t]=[t,e]),e+Math.floor((t-e)*Math.random())}var Y=d('<svg width="7" height="7" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#000" stroke-width="1.2" stroke-linecap="round" d="M1.182 5.99L5.99 1.182m0 4.95L1.182 1.323"></path></svg>');var U=d('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.88 12.88"><circle cx="6.44" cy="6.44" r="6.44" fill="none"></circle><path d="M6.5,3.34V9.66M9.66,6.5H3.34" fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>');var F=d('<svg viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M4.871 3.553L9.37 8.098V3.553H4.871zm3.134 5.769L3.506 4.777v4.545h4.499z"></path><circle fill="none"></circle></svg>');function G(n,a){let i=g(a,"expandable",8);var s=e(),l=t(s);r(l,i,(e=>{!function(e){var t=U();o(e,t)}(e)}),(e=>{!function(e){var t=F(),r=c(u(t));p(r,"cx",6.438),p(r,"cy",6.438),p(r,"r",6.438),o(e,t)}(e)})),o(n,s)}var J=d('<svg fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#000" stroke-linecap="round" d="M.61.703h5.8"></path></svg>');var K=b('<div class="container s-wb3a4c"><button class="close-light s-wb3a4c"><!></button> <button class="minimize-light s-wb3a4c"><!></button> <button class="stretch-light s-wb3a4c"><!></button></div>');function Q(e,t){f(t,!0);var r=K(),n=u(r);n.__click=function(...e){var r;null==(r=t.on_close_app)||r.apply(this,e)},function(e){var t=Y();o(e,t)}(u(n));var a=c(n,2);!function(e){var t=J();p(t,"width",6),p(t,"height",1);var r=u(t);p(r,"stroke-width",2),o(e,t)}(u(a));var i=c(a,2);i.__click=function(...e){var r;null==(r=t.on_maximize_click)||r.apply(this,e)},G(u(i),{get expandable(){return h[t.app_id].expandable}}),v((()=>_(r,"unfocused",m.active!==t.app_id))),o(e,r),w()}y(["click"]);var Z=()=>{},ee=b('<section role="application" class="container s-1y22e1f" tabindex="-1"><div><!></div> <!></section>');function te(d,p){f(p,!0);let g=R(!0),b=R(!1),y=R(void 0),B=R(void 0);const{height:N,width:T}=h[p.app_id],I=1.2*+N>=window.innerHeight?24:16,H=X(-600,600),O=X(-100,100);let W={x:(document.body.clientWidth/2+H)/2,y:(100+O)/2};function Y(){m.active=p.app_id}function U(e,{duration:t=(D.reduced_motion?0:300)}={}){const r=getComputedStyle(e).transform;return{duration:t,easing:$,css:e=>`opacity: ${e}; transform: ${r} scale(${e})`}}function F(){Y(),m.is_being_dragged=!0}function G(){m.is_being_dragged=!1}x((()=>{m.active_z_index,m.active===p.app_id&&E((()=>m.z_indices[p.app_id]=m.active_z_index))})),k((()=>{var e;return null==(e=s(B))?void 0:e.focus()}));var J=ee();S(J,(e=>A(B,e)),(()=>s(B))),J.__click=Y,J.__keydown=[Z],C(J,"width",+T/I+"rem"),C(J,"height",+N/I+"rem");var K=u(J);Q(u(K),{get app_id(){return p.app_id},on_maximize_click:async function(){D.reduced_motion||(s(B).style.transition="height 0.3s ease, width 0.3s ease, transform 0.3s ease"),s(b)?(A(g,!0),s(B).style.transform=s(y),s(B).style.width=+T/I+"rem",s(B).style.height=+N/I+"rem"):(A(g,!1),A(y,j(s(B).style.transform)),s(B).style.transform="translate(0px, 0px)",s(B).style.width="100%",s(B).style.height="calc(100vh - 1.7rem)"),A(b,!s(b)),m.fullscreen[p.app_id]=s(b),await V(300),D.reduced_motion||(s(B).style.transition="")},on_close_app:function(){m.open[p.app_id]=!1,m.fullscreen[p.app_id]=!1}}),function(d,c){var u=e(),p=t(u);r(p,(()=>"calendar"===c.app_id),(r=>{var d=e(),c=t(d);n(c,(()=>a((()=>import("./Calendar-CMZos0L4.js")),__vite__mapDeps([0,1,2,3]))),null,((r,n)=>{var a=l((()=>{var{default:e}=s(n);return{Calendar:e}})),d=l((()=>s(a).Calendar)),c=e(),u=t(c);i(u,(()=>s(d)),((e,t)=>{t(e,{})})),o(r,c)})),o(r,d)}),(d=>{var u=e(),p=t(u);r(p,(()=>"vscode"===c.app_id),(r=>{var d=e(),u=t(d);n(u,(()=>a((()=>import("./VSCode-CoVHN6Uk.js")),__vite__mapDeps([4,1,2,5]))),null,((r,n)=>{var a=l((()=>{var{default:e}=s(n);return{VSCode:e}})),d=l((()=>s(a).VSCode)),u=e(),p=t(u);i(p,(()=>s(d)),((e,t)=>{t(e,{get is_being_dragged(){return c.is_being_dragged}})})),o(r,u)})),o(r,d)}),(d=>{var u=e(),p=t(u);r(p,(()=>"calculator"===c.app_id),(r=>{var d=e(),c=t(d);n(c,(()=>a((()=>import("./Calculator-DuEvCxpr.js")),__vite__mapDeps([6,1,2,7]))),null,((r,n)=>{var a=l((()=>{var{default:e}=s(n);return{Calculator:e}})),d=l((()=>s(a).Calculator)),c=e(),u=t(c);i(u,(()=>s(d)),((e,t)=>{t(e,{})})),o(r,c)})),o(r,d)}),(d=>{var u=e(),p=t(u);r(p,(()=>"wallpapers"===c.app_id),(r=>{var d=e(),c=t(d);n(c,(()=>a((()=>import("./WallpaperSelectorApp-BX8aVk5I.js")),__vite__mapDeps([8,1,2,9]))),null,((r,n)=>{var a=l((()=>{var{default:e}=s(n);return{WallpaperSelector:e}})),d=l((()=>s(a).WallpaperSelector)),c=e(),u=t(c);i(u,(()=>s(d)),((e,t)=>{t(e,{})})),o(r,c)})),o(r,d)}),(d=>{var u=e(),p=t(u);r(p,(()=>"purus-twitter"===c.app_id),(r=>{var d=e(),c=t(d);n(c,(()=>a((()=>import("./PurusProfile-ROmA_CUY.js")),__vite__mapDeps([10,1,2,11]))),null,((r,n)=>{var a=l((()=>{var{default:e}=s(n);return{PurusProfile:e}})),d=l((()=>s(a).PurusProfile)),c=e(),u=t(c);i(u,(()=>s(d)),((e,t)=>{t(e,{})})),o(r,c)})),o(r,d)}),(r=>{var d=e(),u=t(d);n(u,(()=>a((()=>import("./AppStore-CFmfMxFa.js")),__vite__mapDeps([12,1,2,13]))),null,((r,n)=>{var a=l((()=>{var{default:e}=s(n);return{AppStore:e}})),d=l((()=>s(a).AppStore)),u=e(),p=t(u);i(p,(()=>s(d)),((e,t)=>{t(e,{get app_id(){return c.app_id}})})),o(r,u)})),o(r,d)}),!0),o(d,u)}),!0),o(d,u)}),!0),o(d,u)}),!0),o(d,u)})),o(d,u)}(c(K,2),{get app_id(){return p.app_id},get is_being_dragged(){return m.is_being_dragged}}),v((()=>{_(J,"dark","dark"===D.theme.scheme),_(J,"active",m.active===p.app_id),C(J,"z-index",m.z_indices[p.app_id]),P(K,`tl-container ${p.app_id??""} s-1y22e1f`)})),M(K,((e,t)=>L(e,t)),(()=>"window-traffic-lights")),M(J,((e,t)=>q(e,t)),(()=>({defaultPosition:W,handle:".app-window-drag-handle",bounds:{bottom:-6e3,top:27.2,left:-6e3,right:-6e3},disabled:!s(g),gpuAcceleration:!1,onDragStart:F,onDragEnd:G}))),z(2,J,(()=>U)),o(d,J),w()}y(["click","keydown"]);export{te as default};
