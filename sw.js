if(!self.define){let s,e={};const r=(r,i)=>(r=new URL(r+".js",i).href,e[r]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=e,document.head.appendChild(s)}else s=r,importScripts(r),e()})).then((()=>{let s=e[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(i,l)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let o={};const u=s=>r(s,n),t={module:{uri:n},exports:o,require:u};e[n]=Promise.all(i.map((s=>t[s]||u(s)))).then((s=>(l(...s),o)))}}define(["./workbox-5ffe50d4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AppStore-DMK53fVL.js",revision:null},{url:"assets/AppStore-l0VbIlT5.css",revision:null},{url:"assets/Calculator-DsWKmb9R.js",revision:null},{url:"assets/Calculator-Vi-bo_at.css",revision:null},{url:"assets/Calendar-CM55X6wP.js",revision:null},{url:"assets/Calendar-DpS_6YNf.css",revision:null},{url:"assets/index-1bay6sii.js",revision:null},{url:"assets/index-BDrZEJBe.css",revision:null},{url:"assets/latin-ext-300-CykEuWS3.css",revision:null},{url:"assets/latin-ext-400-BQAkwskX.css",revision:null},{url:"assets/latin-ext-500-Dz9r6Km9.css",revision:null},{url:"assets/latin-ext-600-B5crllHV.css",revision:null},{url:"assets/PurusProfile-BVmAbbRx.css",revision:null},{url:"assets/PurusProfile-Byiu7n_x.js",revision:null},{url:"assets/VSCode-JsB2xZsB.js",revision:null},{url:"assets/VSCode-NeBP5DiP.css",revision:null},{url:"assets/WallpaperSelectorApp-a90Ud_Hb.js",revision:null},{url:"assets/WallpaperSelectorApp-DpSy9RrU.css",revision:null},{url:"assets/Window-BvUR5sVO.css",revision:null},{url:"assets/Window-RCtLpV5V.js",revision:null},{url:"assets/workbox-window.prod.es5-p40uij6f.js",revision:null},{url:"google7cdade01e9ae4685.html",revision:"3dd225ceebdb81fc868fe80986d31bba"},{url:"index.html",revision:"8ad36e970e13185bf45e51bd3b95289d"},{url:"cover-image.png",revision:"c6820bee0a99a8539730c18f784a03fb"},{url:"robots.txt",revision:"61c27d2cd39a713f7829422c3d9edcc7"},{url:"cursors/link-select.svg",revision:"8d38b74f17f1bd68bb2d01361c9cbb48"},{url:"cursors/normal-select.svg",revision:"07d56961424c4631da8b5c9759e522d0"},{url:"cursors/text-select.svg",revision:"1f891e133089c7d9836b102a900bcd9f"},{url:"sounds/mac-startup-sound.mp3",revision:"8322c02924a4015dd46c57ff0cbb7a2c"},{url:"app-icons/finder/128.png",revision:"73215bca0bed1a7d44257f9f25387d41"},{url:"app-icons/finder/192.png",revision:"df6f4acd5578bc692684f7dd24317e55"},{url:"app-icons/finder/256.png",revision:"6128bbc66c3e74c39acba3230a7e1355"},{url:"app-icons/finder/32.png",revision:"2fb1eb1436e800697bdbfc9a9aeef4d4"},{url:"app-icons/finder/512.png",revision:"e240c0bc5e8e9cefe4017daa4ba56393"},{url:"manifest.webmanifest",revision:"3bada720fb93b62cd9fb00364867bc4e"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
