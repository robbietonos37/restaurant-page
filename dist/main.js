(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(81),r=t.n(o),a=t(645),c=t.n(a)()(r());c.push([e.id,"* {\n    font-family: Helvetica Neue, Helvetica, sans-serif;\n    margin: 0;\n    padding: 0;\n}\n\nh1 {\n    margin-left: 20px;\n    margin-top: 5px;\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\nnav {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    background-color: brown;\n    align-content: center;\n    height: 75px;\n}\n\na {\n    text-decoration: none;\n    background-color: brown;\n    height: 55px;\n    border: none;\n    font-size: 35px;\n    color: black;\n}\n\nimg {\n    width: 300px;\n}\n\n#options {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n}\n\nbutton {\n    background-color: brown;\n    height: 55px;\n    border: none;\n    font-size: 35px;\n}\n\na:hover {\n    color: brown;\n    background-color: white;\n}\n\nli {\n    list-style: none;\n}\n\nul {\n    list-style: none;\n}\n\n#content {\n    margin-top: 50px;\n    display: flex;\n    flex-direction: column;\n    color: brown;\n}\n\nh2 {\n    text-align: center;\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\n#infoContainer {\n    margin-top: 50px;\n    display: flex;\n    flex-direction: row;\n    margin-left: 30px;\n    margin-right: 30px;\n}\n\n#pageInfo {\n    padding: 15px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n#menuContainer {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n    grid-template-rows: repeat(auto-fit, minmax(350px, 1fr));\n    gap: 40px;\n    margin-bottom: 50px;\n}\n\n.menu-item {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n}\n\n.menu-item img {\n    height: 300px;\n}\n\n.menu-item p {\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n    font-size: 37px;\n}\n\n#contactContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n}\n\n.contact-div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n}\n\n.contact-header {\n    font-size: 37px;\n}",""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<e.length;s++){var p=[].concat(e[s]);o&&c[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),n.push(p))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var d=e[i],s=o.base?d[0]+o.base:d[0],p=a[s]||0,l="".concat(s," ").concat(p);a[s]=p+1;var u=t(l),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=r(m,o);o.byIndex=i,n.splice(i,0,{identifier:l,updater:f,references:1})}c.push(l)}return c}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var d=o(e,r),s=0;s<a.length;s++){var p=t(a[s]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),c=t.n(a),i=t(565),d=t.n(i),s=t(216),p=t.n(s),l=t(589),u=t.n(l),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=c().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=p(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=t.p+"8d42d68b11937ee979fc.jpeg",g=t.p+"2b9616264b446cfa0146.jpeg",v=t.p+"c18a1d542c71b024d734.jpeg",y=t.p+"c4f182a0c576e84bd0fa.jpeg",b=t.p+"64235e70b895b421ffae.webp",C=t.p+"1e46331478cd4271db23.jpeg",x=t.p+"8524feaf1c4caf13ede1.webp",L=t.p+"2e0888677a2786752c25.jpeg";console.log("It is working ok"),(()=>{console.log("Restaraunt content regenerated");const e=document.querySelector("#content"),n=document.createElement("h2");n.innerHTML="Big Rob's Coffeeshop",e.appendChild(n);const t=document.createElement("div");t.id="infoContainer",e.appendChild(t);const o=new Image;o.src=h,t.appendChild(o);const r=document.createElement("div");r.id="pageInfo",t.appendChild(r);const a=document.createElement("p");a.innerHTML="Do you feel like you can't get through the day without enough coffee? Do you just like the taste of coffee? Or do you perhaps just like to grab coffee with a friend and happen to be in Portland, OR? If any of these are true then you should stop by Big Rob's Coffeeshop.",r.appendChild(a);const c=document.createElement("p");c.innerHTML="Established in 2037, we strive to serve all caffeine needs using coffee whether it be in the form of cold brew, espresso, old fashioned coffee, and even more.",r.appendChild(c);const i=new Image;i.src=g,t.appendChild(i)})();const w=document.querySelector("#menuButton"),E=document.querySelector("#content"),T=document.querySelector("#contactButton");w.addEventListener("click",(()=>{E.innerHTML="",(()=>{const e=document.querySelector("#content"),n=document.createElement("div");n.id="menuContainer",e.appendChild(n);const t=document.createElement("div");t.classList.add("menu-item");const o=document.createElement("p");o.innerHTML="Cold Brew",t.appendChild(o);const r=new Image;r.src=v,t.appendChild(r),n.appendChild(t);const a=document.createElement("div");a.classList.add("menu-item");const c=document.createElement("p");c.innerHTML="Cappuccino (Hot or Iced)",a.appendChild(c);const i=new Image;i.src=y,a.appendChild(i),n.appendChild(a);const d=document.createElement("div");d.classList.add("menu-item");const s=document.createElement("p");s.innerHTML="Latte (Hot or Iced)",d.appendChild(s);const p=new Image;p.src=b,d.appendChild(p),n.appendChild(d);const l=document.createElement("div");l.classList.add("menu-item");const u=document.createElement("p");u.innerHTML="Drip Coffee (Hot or Iced)",l.appendChild(u);const m=new Image;m.src=C,l.appendChild(m),n.appendChild(l);const f=document.createElement("div");f.classList.add("menu-item");const h=document.createElement("p");h.innerHTML="Americano (Hot or Iced)",f.appendChild(h);const g=new Image;g.src=x,f.appendChild(g),n.appendChild(f);const w=document.createElement("div");w.classList.add("menu-item");const E=document.createElement("p");E.innerHTML="And many more choices",w.appendChild(E);const T=new Image;T.src=L,w.appendChild(T),n.appendChild(w)})()})),T.addEventListener("click",(()=>{E.innerHTML="",(()=>{const e=document.querySelector("#content"),n=document.createElement("div");n.id="contactContainer",e.appendChild(n);const t=document.createElement("div");t.classList.add("contact-div");const o=document.createElement("p");o.classList.add("contact-header"),o.innerHTML="Address";const r=document.createElement("p");r.innerHTML="1234 Something Rd Portland, OR 97231",t.appendChild(o),t.appendChild(r),n.appendChild(t);const a=document.createElement("div");a.classList.add("contact-div");const c=document.createElement("p");c.classList.add("contact-header"),c.innerHTML="Phone Number";const i=document.createElement("p");i.innerHTML="555-555-5555",a.appendChild(c),a.appendChild(i),n.appendChild(a);const d=document.createElement("div");d.classList.add("contact-div");const s=document.createElement("p");s.classList.add("contact-header"),s.innerHTML="Email";const p=document.createElement("p");p.innerHTML="BigRobsCoffee@something.com",d.appendChild(s),d.appendChild(p),n.appendChild(d)})()}))})()})();