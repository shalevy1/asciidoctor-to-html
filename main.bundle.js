!function(n){var o={};function e(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=o,e.d=function(n,o,t){e.o(n,o)||Object.defineProperty(n,o,{configurable:!1,enumerable:!0,get:t})},e.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},e.n=function(n){var o=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(o,"a",o),o},e.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)},e.p="/asciidoctor-to-html/",e(e.s=202)}({127:function(n,o){n.exports='\n////\nO.o\n////\n\n= hello!\n\n_daggerok@gmail.com_\n\n**Ololo-Trololo!!!**\n\n[sources,bash]\n----\necho "world!";\n----\n'},202:function(n,o,e){"use strict";e.r(o);var t=e(127),r=e.n(t);document.addEventListener("DOMContentLoaded",function(){const n=asciidoctor.convert(r.a);document.body.innerHTML=`<div>\n      ${n}\n    </div>`,console.log(r.a),console.log(n)},!1)}});