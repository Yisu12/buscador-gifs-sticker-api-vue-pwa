(function(e){function t(t){for(var r,a,s=t[0],i=t[1],l=t[2],u=0,f=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function s(e){return i.p+"js/"+({about:"about","gifs~stickers":"gifs~stickers",gifs:"gifs",stickers:"stickers"}[e]||e)+"."+{about:"00eed510","gifs~stickers":"49a46295",gifs:"daba6320",stickers:"7a6c03e9"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={gifs:1,stickers:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about","gifs~stickers":"gifs~stickers",gifs:"gifs",stickers:"stickers"}[e]||e)+"."+{about:"31d6cfe0","gifs~stickers":"31d6cfe0",gifs:"f3b6400a",stickers:"fe931b7e"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var l=c[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){l=f[s],u=l.getAttribute("data-href");if(u===r||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),n(c)},d.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var f=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"25d8":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={id:"nav"};function o(e,t,n,o,c,s){var i=Object(r["z"])("Header"),l=Object(r["z"])("router-view"),u=Object(r["z"])("Footer");return Object(r["s"])(),Object(r["f"])("div",a,[Object(r["j"])(i),Object(r["j"])(l),Object(r["j"])(u)])}var c={class:"navbar navbar-expand-lg navbar-dark bg-dark"},s={class:"container-fluid"},i=Object(r["i"])("Gif Router"),l=Object(r["g"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["g"])("span",{class:"navbar-toggler-icon"})],-1),u={class:"collapse navbar-collapse",id:"navbarNav"},f={class:"navbar-nav"},d={class:"nav-item"},b=Object(r["i"])("Home"),g={class:"nav-item"},v=Object(r["i"])("Gifs"),p={class:"nav-item"},j=Object(r["i"])("Stickers"),h={class:"nav-item"},O=Object(r["i"])("About");function m(e,t,n,a,o,m){var k=Object(r["z"])("router-link");return Object(r["s"])(),Object(r["f"])("nav",c,[Object(r["g"])("div",s,[Object(r["j"])(k,{to:"/",class:"navbar-brand"},{default:Object(r["F"])((function(){return[i]})),_:1}),l,Object(r["g"])("div",u,[Object(r["g"])("ul",f,[Object(r["g"])("li",d,[Object(r["j"])(k,{to:"/",class:"nav-link active","aria-current":"page"},{default:Object(r["F"])((function(){return[b]})),_:1})]),Object(r["g"])("li",g,[Object(r["j"])(k,{to:"/gifs",class:"nav-link"},{default:Object(r["F"])((function(){return[v]})),_:1})]),Object(r["g"])("li",p,[Object(r["j"])(k,{to:"/stickers",class:"nav-link"},{default:Object(r["F"])((function(){return[j]})),_:1})]),Object(r["g"])("li",h,[Object(r["j"])(k,{to:"/about",class:"nav-link"},{default:Object(r["F"])((function(){return[O]})),_:1})])])])])])}var k={},y=n("6b0d"),w=n.n(y);const x=w()(k,[["render",m]]);var _=x,A={class:"footer"},P={class:"text-center bg-dark text-white py-3"};function S(e,t,n,a,o,c){return Object(r["s"])(),Object(r["f"])("div",A,[Object(r["g"])("footer",P,[Object(r["g"])("h3",null,"© "+Object(r["B"])(e.year)+" - Yisu12",1)])])}var F={data:function(){return{year:(new Date).getFullYear()}}};n("e575");const N=w()(F,[["render",S]]);var E=N,C={components:{Header:_,Footer:E}};const H=w()(C,[["render",o]]);var T=H,B=n("9483");Object(B["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var z=n("6c02"),L={class:"home"};function G(e,t,n,a,o,c){var s=Object(r["z"])("hello-world");return Object(r["s"])(),Object(r["f"])("div",L,[Object(r["j"])(s)])}var M={class:"container mt-3"},q=Object(r["h"])('<div class="card" style="width:100%;"><div class="card-body"><h5 class="card-title">Gif Router</h5><h6 class="card-subtitle mb-2 text-muted">Hecho por: Yisu12</h6><p class="card-text" style="text-align:justify;"> Aplicación hecha con Vue 3 y Bootstrap, integrando rutas y APIs. </p></div></div>',1),D=[q];function Y(e,t){return Object(r["s"])(),Object(r["f"])("div",M,D)}const I={},J=w()(I,[["render",Y]]);var R=J,K={name:"Home",components:{HelloWorld:R}};const U=w()(K,[["render",G]]);var V=U,W=[{path:"/",name:"Home",component:V},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/gifs",name:"Gifs",component:function(){return Promise.all([n.e("gifs~stickers"),n.e("gifs")]).then(n.bind(null,"e7f0"))}},{path:"/stickers",name:"Stickers",component:function(){return Promise.all([n.e("gifs~stickers"),n.e("stickers")]).then(n.bind(null,"ab64"))}}],Q=Object(z["a"])({history:Object(z["b"])("/"),routes:W}),X=Q,Z=n("bc3a"),$=n.n(Z),ee=n("130e");Object(r["c"])(T).use(X).use(ee["a"],$.a).mount("#app")},e575:function(e,t,n){"use strict";n("25d8")}});
//# sourceMappingURL=app.5c1730d9.js.map