!function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},o.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/asciidoctor-blog/",o(o.s=208)}({128:function(t,e,o){var n,i,r={},l=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=n.apply(this,arguments)),i}),a=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var o=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}}(),d=null,c=0,b=[],s=o(205);function p(t,e){for(var o=0;o<t.length;o++){var n=t[o],i=r[n.id];if(i){i.refs++;for(var l=0;l<i.parts.length;l++)i.parts[l](n.parts[l]);for(;l<n.parts.length;l++)i.parts.push(k(n.parts[l],e))}else{var a=[];for(l=0;l<n.parts.length;l++)a.push(k(n.parts[l],e));r[n.id]={id:n.id,refs:1,parts:a}}}}function m(t,e){for(var o=[],n={},i=0;i<t.length;i++){var r=t[i],l=e.base?r[0]+e.base:r[0],a={css:r[1],media:r[2],sourceMap:r[3]};n[l]?n[l].parts.push(a):o.push(n[l]={id:l,parts:[a]})}return o}function h(t,e){var o=a(t.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=b[b.length-1];if("top"===t.insertAt)n?n.nextSibling?o.insertBefore(e,n.nextSibling):o.appendChild(e):o.insertBefore(e,o.firstChild),b.push(e);else if("bottom"===t.insertAt)o.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=a(t.insertInto+" "+t.insertAt.before);o.insertBefore(e,i)}}function f(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=b.indexOf(t);e>=0&&b.splice(e,1)}function g(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),u(e,t.attrs),h(t,e),e}function u(t,e){Object.keys(e).forEach(function(o){t.setAttribute(o,e[o])})}function k(t,e){var o,n,i,r;if(e.transform&&t.css){if(!(r=e.transform(t.css)))return function(){};t.css=r}if(e.singleton){var l=c++;o=d||(d=g(e)),n=w.bind(null,o,l,!1),i=w.bind(null,o,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",u(e,t.attrs),h(t,e),e}(e),n=function(t,e,o){var n=o.css,i=o.sourceMap,r=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||r)&&(n=s(n));i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var l=new Blob([n],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(l),a&&URL.revokeObjectURL(a)}.bind(null,o,e),i=function(){f(o),o.href&&URL.revokeObjectURL(o.href)}):(o=g(e),n=function(t,e){var o=e.css,n=e.media;n&&t.setAttribute("media",n);if(t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}.bind(null,o),i=function(){f(o)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=l()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var o=m(t,e);return p(o,e),function(t){for(var n=[],i=0;i<o.length;i++){var l=o[i];(a=r[l.id]).refs--,n.push(a)}t&&p(m(t,e),e);for(i=0;i<n.length;i++){var a;if(0===(a=n[i]).refs){for(var d=0;d<a.parts.length;d++)a.parts[d]();delete r[a.id]}}}};var y,x=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function w(t,e,o,n){var i=o?"":n.css;if(t.styleSheet)t.styleSheet.cssText=x(e,i);else{var r=document.createTextNode(i),l=t.childNodes;l[e]&&t.removeChild(l[e]),l.length?t.insertBefore(r,l[e]):t.appendChild(r)}}},129:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=function(t,e){var o=t[1]||"",n=t[3];if(!n)return o;if(e&&"function"==typeof btoa){var i=(l=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"),r=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[o].concat(r).concat([i]).join("\n")}var l;return[o].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(n[r]=!0)}for(i=0;i<t.length;i++){var l=t[i];"number"==typeof l[0]&&n[l[0]]||(o&&!l[2]?l[2]=o:o&&(l[2]="("+l[2]+") and ("+o+")"),e.push(l))}},e}},203:function(t,e,o){(t.exports=o(129)(!1)).push([t.i,'/* Asciidoctor default stylesheet | MIT License | http://asciidoctor.org */\n/* Remove comment around @import statement below when using as a custom stylesheet */\n/*@import "https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,600italic%7CNoto+Serif:400,400italic,700,700italic%7CDroid+Sans+Mono:400,700";*/\narticle,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}\naudio,canvas,video{display:inline-block}\naudio:not([controls]){display:none;height:0}\n[hidden],template{display:none}\nscript{display:none!important}\nhtml{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}\na{background:transparent}\na:focus{outline:thin dotted}\na:active,a:hover{outline:0}\nh1{font-size:2em;margin:.67em 0}\nabbr[title]{border-bottom:1px dotted}\nb,strong{font-weight:bold}\ndfn{font-style:italic}\nhr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}\nmark{background:#ff0;color:#000}\ncode,kbd,pre,samp{font-family:monospace;font-size:1em}\npre{white-space:pre-wrap}\nq{quotes:"\\201C" "\\201D" "\\2018" "\\2019"}\nsmall{font-size:80%}\nsub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\nsup{top:-.5em}\nsub{bottom:-.25em}\nimg{border:0}\nsvg:not(:root){overflow:hidden}\nfigure{margin:0}\nfieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}\nlegend{border:0;padding:0}\nbutton,input,select,textarea{font-family:inherit;font-size:100%;margin:0}\nbutton,input{line-height:normal}\nbutton,select{text-transform:none}\nbutton,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}\nbutton[disabled],html input[disabled]{cursor:default}\ninput[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}\ninput[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}\ninput[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}\nbutton::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}\ntextarea{overflow:auto;vertical-align:top}\ntable{border-collapse:collapse;border-spacing:0}\n*,*:before,*:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}\nhtml,body{font-size:100%}\nbody{background:#fff;color:rgba(0,0,0,.8);padding:0;margin:0;font-family:"Noto Serif","DejaVu Serif",serif;font-weight:400;font-style:normal;line-height:1;position:relative;cursor:auto;tab-size:4;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}\na:hover{cursor:pointer}\nimg,object,embed{max-width:100%;height:auto}\nobject,embed{height:100%}\nimg{-ms-interpolation-mode:bicubic}\n.left{float:left!important}\n.right{float:right!important}\n.text-left{text-align:left!important}\n.text-right{text-align:right!important}\n.text-center{text-align:center!important}\n.text-justify{text-align:justify!important}\n.hide{display:none}\nimg,object,svg{display:inline-block;vertical-align:middle}\ntextarea{height:auto;min-height:50px}\nselect{width:100%}\n.center{margin-left:auto;margin-right:auto}\n.spread{width:100%}\np.lead,.paragraph.lead>p,#preamble>.sectionbody>.paragraph:first-of-type p{font-size:1.21875em;line-height:1.6}\n.subheader,.admonitionblock td.content>.title,.audioblock>.title,.exampleblock>.title,.imageblock>.title,.listingblock>.title,.literalblock>.title,.stemblock>.title,.openblock>.title,.paragraph>.title,.quoteblock>.title,table.tableblock>.title,.verseblock>.title,.videoblock>.title,.dlist>.title,.olist>.title,.ulist>.title,.qlist>.title,.hdlist>.title{line-height:1.45;color:#7a2518;font-weight:400;margin-top:0;margin-bottom:.25em}\ndiv,dl,dt,dd,ul,ol,li,h1,h2,h3,#toctitle,.sidebarblock>.content>.title,h4,h5,h6,pre,form,p,blockquote,th,td{margin:0;padding:0;direction:ltr}\na{color:#2156a5;text-decoration:underline;line-height:inherit}\na:hover,a:focus{color:#1d4b8f}\na img{border:none}\np{font-family:inherit;font-weight:400;font-size:1em;line-height:1.6;margin-bottom:1.25em;text-rendering:optimizeLegibility}\np aside{font-size:.875em;line-height:1.35;font-style:italic}\nh1,h2,h3,#toctitle,.sidebarblock>.content>.title,h4,h5,h6{font-family:"Open Sans","DejaVu Sans",sans-serif;font-weight:300;font-style:normal;color:#ba3925;text-rendering:optimizeLegibility;margin-top:1em;margin-bottom:.5em;line-height:1.0125em}\nh1 small,h2 small,h3 small,#toctitle small,.sidebarblock>.content>.title small,h4 small,h5 small,h6 small{font-size:60%;color:#e99b8f;line-height:0}\nh1{font-size:2.125em}\nh2{font-size:1.6875em}\nh3,#toctitle,.sidebarblock>.content>.title{font-size:1.375em}\nh4,h5{font-size:1.125em}\nh6{font-size:1em}\nhr{border:solid #ddddd8;border-width:1px 0 0;clear:both;margin:1.25em 0 1.1875em;height:0}\nem,i{font-style:italic;line-height:inherit}\nstrong,b{font-weight:bold;line-height:inherit}\nsmall{font-size:60%;line-height:inherit}\ncode{font-family:"Droid Sans Mono","DejaVu Sans Mono",monospace;font-weight:400;color:rgba(0,0,0,.9)}\nul,ol,dl{font-size:1em;line-height:1.6;margin-bottom:1.25em;list-style-position:outside;font-family:inherit}\nul,ol{margin-left:1.5em}\nul li ul,ul li ol{margin-left:1.25em;margin-bottom:0;font-size:1em}\nul.square li ul,ul.circle li ul,ul.disc li ul{list-style:inherit}\nul.square{list-style-type:square}\nul.circle{list-style-type:circle}\nul.disc{list-style-type:disc}\nol li ul,ol li ol{margin-left:1.25em;margin-bottom:0}\ndl dt{margin-bottom:.3125em;font-weight:bold}\ndl dd{margin-bottom:1.25em}\nabbr,acronym{text-transform:uppercase;font-size:90%;color:rgba(0,0,0,.8);border-bottom:1px dotted #ddd;cursor:help}\nabbr{text-transform:none}\nblockquote{margin:0 0 1.25em;padding:.5625em 1.25em 0 1.1875em;border-left:1px solid #ddd}\nblockquote cite{display:block;font-size:.9375em;color:rgba(0,0,0,.6)}\nblockquote cite:before{content:"\\2014    "}\nblockquote cite a,blockquote cite a:visited{color:rgba(0,0,0,.6)}\nblockquote,blockquote p{line-height:1.6;color:rgba(0,0,0,.85)}\n@media only screen and (min-width:768px){h1,h2,h3,#toctitle,.sidebarblock>.content>.title,h4,h5,h6{line-height:1.2}\nh1{font-size:2.75em}\nh2{font-size:2.3125em}\nh3,#toctitle,.sidebarblock>.content>.title{font-size:1.6875em}\nh4{font-size:1.4375em}}\ntable{background:#fff;margin-bottom:1.25em;border:solid 1px #dedede}\ntable thead,table tfoot{background:#f7f8f7;font-weight:bold}\ntable thead tr th,table thead tr td,table tfoot tr th,table tfoot tr td{padding:.5em .625em .625em;font-size:inherit;color:rgba(0,0,0,.8);text-align:left}\ntable tr th,table tr td{padding:.5625em .625em;font-size:inherit;color:rgba(0,0,0,.8)}\ntable tr.even,table tr.alt,table tr:nth-of-type(even){background:#f8f8f7}\ntable thead tr th,table tfoot tr th,table tbody tr td,table tr td,table tfoot tr td{display:table-cell;line-height:1.6}\nh1,h2,h3,#toctitle,.sidebarblock>.content>.title,h4,h5,h6{line-height:1.2;word-spacing:-.05em}\nh1 strong,h2 strong,h3 strong,#toctitle strong,.sidebarblock>.content>.title strong,h4 strong,h5 strong,h6 strong{font-weight:400}\n.clearfix:before,.clearfix:after,.float-group:before,.float-group:after{content:" ";display:table}\n.clearfix:after,.float-group:after{clear:both}\n*:not(pre)>code{font-size:.9375em;font-style:normal!important;letter-spacing:0;padding:.1em .5ex;word-spacing:-.15em;background-color:#f7f7f8;-webkit-border-radius:4px;border-radius:4px;line-height:1.45;text-rendering:optimizeSpeed;word-wrap:break-word}\n*:not(pre)>code.nobreak{word-wrap:normal}\n*:not(pre)>code.nowrap{white-space:nowrap}\npre,pre>code{line-height:1.45;color:rgba(0,0,0,.9);font-family:"Droid Sans Mono","DejaVu Sans Mono",monospace;font-weight:400;text-rendering:optimizeSpeed}\nem em{font-style:normal}\nstrong strong{font-weight:400}\n.keyseq{color:rgba(51,51,51,.8)}\nkbd{font-family:"Droid Sans Mono","DejaVu Sans Mono",monospace;display:inline-block;color:rgba(0,0,0,.8);font-size:.65em;line-height:1.45;background-color:#f7f7f7;border:1px solid #ccc;-webkit-border-radius:3px;border-radius:3px;-webkit-box-shadow:0 1px 0 rgba(0,0,0,.2),0 0 0 .1em white inset;box-shadow:0 1px 0 rgba(0,0,0,.2),0 0 0 .1em #fff inset;margin:0 .15em;padding:.2em .5em;vertical-align:middle;position:relative;top:-.1em;white-space:nowrap}\n.keyseq kbd:first-child{margin-left:0}\n.keyseq kbd:last-child{margin-right:0}\n.menuseq,.menuref{color:#000}\n.menuseq b:not(.caret),.menuref{font-weight:inherit}\n.menuseq{word-spacing:-.02em}\n.menuseq b.caret{font-size:1.25em;line-height:.8}\n.menuseq i.caret{font-weight:bold;text-align:center;width:.45em}\nb.button:before,b.button:after{position:relative;top:-1px;font-weight:400}\nb.button:before{content:"[";padding:0 3px 0 2px}\nb.button:after{content:"]";padding:0 2px 0 3px}\np a>code:hover{color:rgba(0,0,0,.9)}\n#header,#content,#footnotes,#footer{width:100%;margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;max-width:62.5em;*zoom:1;position:relative;padding-left:.9375em;padding-right:.9375em}\n#header:before,#header:after,#content:before,#content:after,#footnotes:before,#footnotes:after,#footer:before,#footer:after{content:" ";display:table}\n#header:after,#content:after,#footnotes:after,#footer:after{clear:both}\n#content{margin-top:1.25em}\n#content:before{content:none}\n#header>h1:first-child{color:rgba(0,0,0,.85);margin-top:2.25rem;margin-bottom:0}\n#header>h1:first-child+#toc{margin-top:8px;border-top:1px solid #ddddd8}\n#header>h1:only-child,body.toc2 #header>h1:nth-last-child(2){border-bottom:1px solid #ddddd8;padding-bottom:8px}\n#header .details{border-bottom:1px solid #ddddd8;line-height:1.45;padding-top:.25em;padding-bottom:.25em;padding-left:.25em;color:rgba(0,0,0,.6);display:-ms-flexbox;display:-webkit-flex;display:flex;-ms-flex-flow:row wrap;-webkit-flex-flow:row wrap;flex-flow:row wrap}\n#header .details span:first-child{margin-left:-.125em}\n#header .details span.email a{color:rgba(0,0,0,.85)}\n#header .details br{display:none}\n#header .details br+span:before{content:"\\A0\\2013\\A0"}\n#header .details br+span.author:before{content:"\\A0\\22C5\\A0";color:rgba(0,0,0,.85)}\n#header .details br+span#revremark:before{content:"\\A0|\\A0"}\n#header #revnumber{text-transform:capitalize}\n#header #revnumber:after{content:"\\A0"}\n#content>h1:first-child:not([class]){color:rgba(0,0,0,.85);border-bottom:1px solid #ddddd8;padding-bottom:8px;margin-top:0;padding-top:1rem;margin-bottom:1.25rem}\n#toc{border-bottom:1px solid #efefed;padding-bottom:.5em}\n#toc>ul{margin-left:.125em}\n#toc ul.sectlevel0>li>a{font-style:italic}\n#toc ul.sectlevel0 ul.sectlevel1{margin:.5em 0}\n#toc ul{font-family:"Open Sans","DejaVu Sans",sans-serif;list-style-type:none}\n#toc li{line-height:1.3334;margin-top:.3334em}\n#toc a{text-decoration:none}\n#toc a:active{text-decoration:underline}\n#toctitle{color:#7a2518;font-size:1.2em}\n@media only screen and (min-width:768px){#toctitle{font-size:1.375em}\nbody.toc2{padding-left:15em;padding-right:0}\n#toc.toc2{margin-top:0!important;background-color:#f8f8f7;position:fixed;width:15em;left:0;top:0;border-right:1px solid #efefed;border-top-width:0!important;border-bottom-width:0!important;z-index:1000;padding:1.25em 1em;height:100%;overflow:auto}\n#toc.toc2 #toctitle{margin-top:0;margin-bottom:.8rem;font-size:1.2em}\n#toc.toc2>ul{font-size:.9em;margin-bottom:0}\n#toc.toc2 ul ul{margin-left:0;padding-left:1em}\n#toc.toc2 ul.sectlevel0 ul.sectlevel1{padding-left:0;margin-top:.5em;margin-bottom:.5em}\nbody.toc2.toc-right{padding-left:0;padding-right:15em}\nbody.toc2.toc-right #toc.toc2{border-right-width:0;border-left:1px solid #efefed;left:auto;right:0}}\n@media only screen and (min-width:1280px){body.toc2{padding-left:20em;padding-right:0}\n#toc.toc2{width:20em}\n#toc.toc2 #toctitle{font-size:1.375em}\n#toc.toc2>ul{font-size:.95em}\n#toc.toc2 ul ul{padding-left:1.25em}\nbody.toc2.toc-right{padding-left:0;padding-right:20em}}\n#content #toc{border-style:solid;border-width:1px;border-color:#e0e0dc;margin-bottom:1.25em;padding:1.25em;background:#f8f8f7;-webkit-border-radius:4px;border-radius:4px}\n#content #toc>:first-child{margin-top:0}\n#content #toc>:last-child{margin-bottom:0}\n#footer{max-width:100%;background-color:rgba(0,0,0,.8);padding:1.25em}\n#footer-text{color:rgba(255,255,255,.8);line-height:1.44}\n.sect1{padding-bottom:.625em}\n@media only screen and (min-width:768px){.sect1{padding-bottom:1.25em}}\n.sect1+.sect1{border-top:1px solid #efefed}\n#content h1>a.anchor,h2>a.anchor,h3>a.anchor,#toctitle>a.anchor,.sidebarblock>.content>.title>a.anchor,h4>a.anchor,h5>a.anchor,h6>a.anchor{position:absolute;z-index:1001;width:1.5ex;margin-left:-1.5ex;display:block;text-decoration:none!important;visibility:hidden;text-align:center;font-weight:400}\n#content h1>a.anchor:before,h2>a.anchor:before,h3>a.anchor:before,#toctitle>a.anchor:before,.sidebarblock>.content>.title>a.anchor:before,h4>a.anchor:before,h5>a.anchor:before,h6>a.anchor:before{content:"\\A7";font-size:.85em;display:block;padding-top:.1em}\n#content h1:hover>a.anchor,#content h1>a.anchor:hover,h2:hover>a.anchor,h2>a.anchor:hover,h3:hover>a.anchor,#toctitle:hover>a.anchor,.sidebarblock>.content>.title:hover>a.anchor,h3>a.anchor:hover,#toctitle>a.anchor:hover,.sidebarblock>.content>.title>a.anchor:hover,h4:hover>a.anchor,h4>a.anchor:hover,h5:hover>a.anchor,h5>a.anchor:hover,h6:hover>a.anchor,h6>a.anchor:hover{visibility:visible}\n#content h1>a.link,h2>a.link,h3>a.link,#toctitle>a.link,.sidebarblock>.content>.title>a.link,h4>a.link,h5>a.link,h6>a.link{color:#ba3925;text-decoration:none}\n#content h1>a.link:hover,h2>a.link:hover,h3>a.link:hover,#toctitle>a.link:hover,.sidebarblock>.content>.title>a.link:hover,h4>a.link:hover,h5>a.link:hover,h6>a.link:hover{color:#a53221}\n.audioblock,.imageblock,.literalblock,.listingblock,.stemblock,.videoblock{margin-bottom:1.25em}\n.admonitionblock td.content>.title,.audioblock>.title,.exampleblock>.title,.imageblock>.title,.listingblock>.title,.literalblock>.title,.stemblock>.title,.openblock>.title,.paragraph>.title,.quoteblock>.title,table.tableblock>.title,.verseblock>.title,.videoblock>.title,.dlist>.title,.olist>.title,.ulist>.title,.qlist>.title,.hdlist>.title{text-rendering:optimizeLegibility;text-align:left;font-family:"Noto Serif","DejaVu Serif",serif;font-size:1rem;font-style:italic}\ntable.tableblock>caption.title{white-space:nowrap;overflow:visible;max-width:0}\n.paragraph.lead>p,#preamble>.sectionbody>.paragraph:first-of-type p{color:rgba(0,0,0,.85)}\ntable.tableblock #preamble>.sectionbody>.paragraph:first-of-type p{font-size:inherit}\n.admonitionblock>table{border-collapse:separate;border:0;background:none;width:100%}\n.admonitionblock>table td.icon{text-align:center;width:80px}\n.admonitionblock>table td.icon img{max-width:initial}\n.admonitionblock>table td.icon .title{font-weight:bold;font-family:"Open Sans","DejaVu Sans",sans-serif;text-transform:uppercase}\n.admonitionblock>table td.content{padding-left:1.125em;padding-right:1.25em;border-left:1px solid #ddddd8;color:rgba(0,0,0,.6)}\n.admonitionblock>table td.content>:last-child>:last-child{margin-bottom:0}\n.exampleblock>.content{border-style:solid;border-width:1px;border-color:#e6e6e6;margin-bottom:1.25em;padding:1.25em;background:#fff;-webkit-border-radius:4px;border-radius:4px}\n.exampleblock>.content>:first-child{margin-top:0}\n.exampleblock>.content>:last-child{margin-bottom:0}\n.sidebarblock{border-style:solid;border-width:1px;border-color:#e0e0dc;margin-bottom:1.25em;padding:1.25em;background:#f8f8f7;-webkit-border-radius:4px;border-radius:4px}\n.sidebarblock>:first-child{margin-top:0}\n.sidebarblock>:last-child{margin-bottom:0}\n.sidebarblock>.content>.title{color:#7a2518;margin-top:0;text-align:center}\n.exampleblock>.content>:last-child>:last-child,.exampleblock>.content .olist>ol>li:last-child>:last-child,.exampleblock>.content .ulist>ul>li:last-child>:last-child,.exampleblock>.content .qlist>ol>li:last-child>:last-child,.sidebarblock>.content>:last-child>:last-child,.sidebarblock>.content .olist>ol>li:last-child>:last-child,.sidebarblock>.content .ulist>ul>li:last-child>:last-child,.sidebarblock>.content .qlist>ol>li:last-child>:last-child{margin-bottom:0}\n.literalblock pre,.listingblock pre:not(.highlight),.listingblock pre[class="highlight"],.listingblock pre[class^="highlight "],.listingblock pre.CodeRay,.listingblock pre.prettyprint{background:#f7f7f8}\n.sidebarblock .literalblock pre,.sidebarblock .listingblock pre:not(.highlight),.sidebarblock .listingblock pre[class="highlight"],.sidebarblock .listingblock pre[class^="highlight "],.sidebarblock .listingblock pre.CodeRay,.sidebarblock .listingblock pre.prettyprint{background:#f2f1f1}\n.literalblock pre,.literalblock pre[class],.listingblock pre,.listingblock pre[class]{-webkit-border-radius:4px;border-radius:4px;word-wrap:break-word;padding:1em;font-size:.8125em}\n.literalblock pre.nowrap,.literalblock pre[class].nowrap,.listingblock pre.nowrap,.listingblock pre[class].nowrap{overflow-x:auto;white-space:pre;word-wrap:normal}\n@media only screen and (min-width:768px){.literalblock pre,.literalblock pre[class],.listingblock pre,.listingblock pre[class]{font-size:.90625em}}\n@media only screen and (min-width:1280px){.literalblock pre,.literalblock pre[class],.listingblock pre,.listingblock pre[class]{font-size:1em}}\n.literalblock.output pre{color:#f7f7f8;background-color:rgba(0,0,0,.9)}\n.listingblock pre.highlightjs{padding:0}\n.listingblock pre.highlightjs>code{padding:1em;-webkit-border-radius:4px;border-radius:4px}\n.listingblock pre.prettyprint{border-width:0}\n.listingblock>.content{position:relative}\n.listingblock code[data-lang]:before{display:none;content:attr(data-lang);position:absolute;font-size:.75em;top:.425rem;right:.5rem;line-height:1;text-transform:uppercase;color:#999}\n.listingblock:hover code[data-lang]:before{display:block}\n.listingblock.terminal pre .command:before{content:attr(data-prompt);padding-right:.5em;color:#999}\n.listingblock.terminal pre .command:not([data-prompt]):before{content:"$"}\ntable.pyhltable{border-collapse:separate;border:0;margin-bottom:0;background:none}\ntable.pyhltable td{vertical-align:top;padding-top:0;padding-bottom:0;line-height:1.45}\ntable.pyhltable td.code{padding-left:.75em;padding-right:0}\npre.pygments .lineno,table.pyhltable td:not(.code){color:#999;padding-left:0;padding-right:.5em;border-right:1px solid #ddddd8}\npre.pygments .lineno{display:inline-block;margin-right:.25em}\ntable.pyhltable .linenodiv{background:none!important;padding-right:0!important}\n.quoteblock{margin:0 1em 1.25em 1.5em;display:table}\n.quoteblock>.title{margin-left:-1.5em;margin-bottom:.75em}\n.quoteblock blockquote,.quoteblock blockquote p{color:rgba(0,0,0,.85);font-size:1.15rem;line-height:1.75;word-spacing:.1em;letter-spacing:0;font-style:italic;text-align:justify}\n.quoteblock blockquote{margin:0;padding:0;border:0}\n.quoteblock blockquote:before{content:"\\201C";float:left;font-size:2.75em;font-weight:bold;line-height:.6em;margin-left:-.6em;color:#7a2518;text-shadow:0 1px 2px rgba(0,0,0,.1)}\n.quoteblock blockquote>.paragraph:last-child p{margin-bottom:0}\n.quoteblock .attribution{margin-top:.5em;margin-right:.5ex;text-align:right}\n.quoteblock .quoteblock{margin-left:0;margin-right:0;padding:.5em 0;border-left:3px solid rgba(0,0,0,.6)}\n.quoteblock .quoteblock blockquote{padding:0 0 0 .75em}\n.quoteblock .quoteblock blockquote:before{display:none}\n.verseblock{margin:0 1em 1.25em 1em}\n.verseblock pre{font-family:"Open Sans","DejaVu Sans",sans;font-size:1.15rem;color:rgba(0,0,0,.85);font-weight:300;text-rendering:optimizeLegibility}\n.verseblock pre strong{font-weight:400}\n.verseblock .attribution{margin-top:1.25rem;margin-left:.5ex}\n.quoteblock .attribution,.verseblock .attribution{font-size:.9375em;line-height:1.45;font-style:italic}\n.quoteblock .attribution br,.verseblock .attribution br{display:none}\n.quoteblock .attribution cite,.verseblock .attribution cite{display:block;letter-spacing:-.025em;color:rgba(0,0,0,.6)}\n.quoteblock.abstract{margin:0 0 1.25em 0;display:block}\n.quoteblock.abstract blockquote,.quoteblock.abstract blockquote p{text-align:left;word-spacing:0}\n.quoteblock.abstract blockquote:before,.quoteblock.abstract blockquote p:first-of-type:before{display:none}\ntable.tableblock{max-width:100%;border-collapse:separate}\ntable.tableblock td>.paragraph:last-child p>p:last-child,table.tableblock th>p:last-child,table.tableblock td>p:last-child{margin-bottom:0}\ntable.tableblock,th.tableblock,td.tableblock{border:0 solid #dedede}\ntable.grid-all>thead>tr>.tableblock,table.grid-all>tbody>tr>.tableblock{border-width:0 1px 1px 0}\ntable.grid-all>tfoot>tr>.tableblock{border-width:1px 1px 0 0}\ntable.grid-cols>*>tr>.tableblock{border-width:0 1px 0 0}\ntable.grid-rows>thead>tr>.tableblock,table.grid-rows>tbody>tr>.tableblock{border-width:0 0 1px 0}\ntable.grid-rows>tfoot>tr>.tableblock{border-width:1px 0 0 0}\ntable.grid-all>*>tr>.tableblock:last-child,table.grid-cols>*>tr>.tableblock:last-child{border-right-width:0}\ntable.grid-all>tbody>tr:last-child>.tableblock,table.grid-all>thead:last-child>tr>.tableblock,table.grid-rows>tbody>tr:last-child>.tableblock,table.grid-rows>thead:last-child>tr>.tableblock{border-bottom-width:0}\ntable.frame-all{border-width:1px}\ntable.frame-sides{border-width:0 1px}\ntable.frame-topbot{border-width:1px 0}\nth.halign-left,td.halign-left{text-align:left}\nth.halign-right,td.halign-right{text-align:right}\nth.halign-center,td.halign-center{text-align:center}\nth.valign-top,td.valign-top{vertical-align:top}\nth.valign-bottom,td.valign-bottom{vertical-align:bottom}\nth.valign-middle,td.valign-middle{vertical-align:middle}\ntable thead th,table tfoot th{font-weight:bold}\ntbody tr th{display:table-cell;line-height:1.6;background:#f7f8f7}\ntbody tr th,tbody tr th p,tfoot tr th,tfoot tr th p{color:rgba(0,0,0,.8);font-weight:bold}\np.tableblock>code:only-child{background:none;padding:0}\np.tableblock{font-size:1em}\ntd>div.verse{white-space:pre}\nol{margin-left:1.75em}\nul li ol{margin-left:1.5em}\ndl dd{margin-left:1.125em}\ndl dd:last-child,dl dd:last-child>:last-child{margin-bottom:0}\nol>li p,ul>li p,ul dd,ol dd,.olist .olist,.ulist .ulist,.ulist .olist,.olist .ulist{margin-bottom:.625em}\nul.checklist,ul.none,ol.none,ul.no-bullet,ol.no-bullet,ol.unnumbered,ul.unstyled,ol.unstyled{list-style-type:none}\nul.no-bullet,ol.no-bullet,ol.unnumbered{margin-left:.625em}\nul.unstyled,ol.unstyled{margin-left:0}\nul.checklist{margin-left:.625em}\nul.checklist li>p:first-child>.fa-square-o:first-child,ul.checklist li>p:first-child>.fa-check-square-o:first-child{width:1.25em;font-size:.8em;position:relative;bottom:.125em}\nul.checklist li>p:first-child>input[type="checkbox"]:first-child{margin-right:.25em}\nul.inline{margin:0 auto .625em auto;margin-left:-1.375em;margin-right:0;padding:0;list-style:none;overflow:hidden}\nul.inline>li{list-style:none;float:left;margin-left:1.375em;display:block}\nul.inline>li>*{display:block}\n.unstyled dl dt{font-weight:400;font-style:normal}\nol.arabic{list-style-type:decimal}\nol.decimal{list-style-type:decimal-leading-zero}\nol.loweralpha{list-style-type:lower-alpha}\nol.upperalpha{list-style-type:upper-alpha}\nol.lowerroman{list-style-type:lower-roman}\nol.upperroman{list-style-type:upper-roman}\nol.lowergreek{list-style-type:lower-greek}\n.hdlist>table,.colist>table{border:0;background:none}\n.hdlist>table>tbody>tr,.colist>table>tbody>tr{background:none}\ntd.hdlist1,td.hdlist2{vertical-align:top;padding:0 .625em}\ntd.hdlist1{font-weight:bold;padding-bottom:1.25em}\n.literalblock+.colist,.listingblock+.colist{margin-top:-.5em}\n.colist>table tr>td:first-of-type{padding:.4em .75em 0 .75em;line-height:1;vertical-align:top}\n.colist>table tr>td:first-of-type img{max-width:initial}\n.colist>table tr>td:last-of-type{padding:.25em 0}\n.thumb,.th{line-height:0;display:inline-block;border:solid 4px #fff;-webkit-box-shadow:0 0 0 1px #ddd;box-shadow:0 0 0 1px #ddd}\n.imageblock.left,.imageblock[style*="float: left"]{margin:.25em .625em 1.25em 0}\n.imageblock.right,.imageblock[style*="float: right"]{margin:.25em 0 1.25em .625em}\n.imageblock>.title{margin-bottom:0}\n.imageblock.thumb,.imageblock.th{border-width:6px}\n.imageblock.thumb>.title,.imageblock.th>.title{padding:0 .125em}\n.image.left,.image.right{margin-top:.25em;margin-bottom:.25em;display:inline-block;line-height:0}\n.image.left{margin-right:.625em}\n.image.right{margin-left:.625em}\na.image{text-decoration:none;display:inline-block}\na.image object{pointer-events:none}\nsup.footnote,sup.footnoteref{font-size:.875em;position:static;vertical-align:super}\nsup.footnote a,sup.footnoteref a{text-decoration:none}\nsup.footnote a:active,sup.footnoteref a:active{text-decoration:underline}\n#footnotes{padding-top:.75em;padding-bottom:.75em;margin-bottom:.625em}\n#footnotes hr{width:20%;min-width:6.25em;margin:-.25em 0 .75em 0;border-width:1px 0 0 0}\n#footnotes .footnote{padding:0 .375em 0 .225em;line-height:1.3334;font-size:.875em;margin-left:1.2em;text-indent:-1.05em;margin-bottom:.2em}\n#footnotes .footnote a:first-of-type{font-weight:bold;text-decoration:none}\n#footnotes .footnote:last-of-type{margin-bottom:0}\n#content #footnotes{margin-top:-.625em;margin-bottom:0;padding:.75em 0}\n.gist .file-data>table{border:0;background:#fff;width:100%;margin-bottom:0}\n.gist .file-data>table td.line-data{width:99%}\ndiv.unbreakable{page-break-inside:avoid}\n.big{font-size:larger}\n.small{font-size:smaller}\n.underline{text-decoration:underline}\n.overline{text-decoration:overline}\n.line-through{text-decoration:line-through}\n.aqua{color:#00bfbf}\n.aqua-background{background-color:#00fafa}\n.black{color:#000}\n.black-background{background-color:#000}\n.blue{color:#0000bf}\n.blue-background{background-color:#0000fa}\n.fuchsia{color:#bf00bf}\n.fuchsia-background{background-color:#fa00fa}\n.gray{color:#606060}\n.gray-background{background-color:#7d7d7d}\n.green{color:#006000}\n.green-background{background-color:#007d00}\n.lime{color:#00bf00}\n.lime-background{background-color:#00fa00}\n.maroon{color:#600000}\n.maroon-background{background-color:#7d0000}\n.navy{color:#000060}\n.navy-background{background-color:#00007d}\n.olive{color:#606000}\n.olive-background{background-color:#7d7d00}\n.purple{color:#600060}\n.purple-background{background-color:#7d007d}\n.red{color:#bf0000}\n.red-background{background-color:#fa0000}\n.silver{color:#909090}\n.silver-background{background-color:#bcbcbc}\n.teal{color:#006060}\n.teal-background{background-color:#007d7d}\n.white{color:#bfbfbf}\n.white-background{background-color:#fafafa}\n.yellow{color:#bfbf00}\n.yellow-background{background-color:#fafa00}\nspan.icon>.fa{cursor:default}\na span.icon>.fa{cursor:inherit}\n.admonitionblock td.icon [class^="fa icon-"]{font-size:2.5em;text-shadow:1px 1px 2px rgba(0,0,0,.5);cursor:default}\n.admonitionblock td.icon .icon-note:before{content:"\\F05A";color:#19407c}\n.admonitionblock td.icon .icon-tip:before{content:"\\F0EB";text-shadow:1px 1px 2px rgba(155,155,0,.8);color:#111}\n.admonitionblock td.icon .icon-warning:before{content:"\\F071";color:#bf6900}\n.admonitionblock td.icon .icon-caution:before{content:"\\F06D";color:#bf3400}\n.admonitionblock td.icon .icon-important:before{content:"\\F06A";color:#bf0000}\n.conum[data-value]{display:inline-block;color:#fff!important;background-color:rgba(0,0,0,.8);-webkit-border-radius:100px;border-radius:100px;text-align:center;font-size:.75em;width:1.67em;height:1.67em;line-height:1.67em;font-family:"Open Sans","DejaVu Sans",sans-serif;font-style:normal;font-weight:bold}\n.conum[data-value] *{color:#fff!important}\n.conum[data-value]+b{display:none}\n.conum[data-value]:after{content:attr(data-value)}\npre .conum[data-value]{position:relative;top:-.125em}\nb.conum *{color:inherit!important}\n.conum:not([data-value]):empty{display:none}\ndt,th.tableblock,td.content,div.footnote{text-rendering:optimizeLegibility}\nh1,h2,p,td.content,span.alt{letter-spacing:-.01em}\np strong,td.content strong,div.footnote strong{letter-spacing:-.005em}\np,blockquote,dt,td.content,span.alt{font-size:1.0625rem}\np{margin-bottom:1.25rem}\n.sidebarblock p,.sidebarblock dt,.sidebarblock td.content,p.tableblock{font-size:1em}\n.exampleblock>.content{background-color:#fffef7;border-color:#e0e0dc;-webkit-box-shadow:0 1px 4px #e0e0dc;box-shadow:0 1px 4px #e0e0dc}\n.print-only{display:none!important}\n@media print{@page{margin:1.25cm .75cm}\n*{-webkit-box-shadow:none!important;box-shadow:none!important;text-shadow:none!important}\na{color:inherit!important;text-decoration:underline!important}\na.bare,a[href^="#"],a[href^="mailto:"]{text-decoration:none!important}\na[href^="http:"]:not(.bare):after,a[href^="https:"]:not(.bare):after{content:"(" attr(href) ")";display:inline-block;font-size:.875em;padding-left:.25em}\nabbr[title]:after{content:" (" attr(title) ")"}\npre,blockquote,tr,img,object,svg{page-break-inside:avoid}\nthead{display:table-header-group}\nsvg{max-width:100%}\np,blockquote,dt,td.content{font-size:1em;orphans:3;widows:3}\nh2,h3,#toctitle,.sidebarblock>.content>.title{page-break-after:avoid}\n#toc,.sidebarblock,.exampleblock>.content{background:none!important}\n#toc{border-bottom:1px solid #ddddd8!important;padding-bottom:0!important}\n.sect1{padding-bottom:0!important}\n.sect1+.sect1{border:0!important}\n#header>h1:first-child{margin-top:1.25rem}\nbody.book #header{text-align:center}\nbody.book #header>h1:first-child{border:0!important;margin:2.5em 0 1em 0}\nbody.book #header .details{border:0!important;display:block;padding:0!important}\nbody.book #header .details span:first-child{margin-left:0!important}\nbody.book #header .details br{display:block}\nbody.book #header .details br+span:before{content:none!important}\nbody.book #toc{border:0!important;text-align:left!important;padding:0!important;margin:0!important}\nbody.book #toc,body.book #preamble,body.book h1.sect0,body.book .sect1>h2{page-break-before:always}\n.listingblock code[data-lang]:before{display:block}\n#footer{background:none!important;padding:0 .9375em}\n#footer-text{color:rgba(0,0,0,.6)!important;font-size:.9em}\n.hide-on-print{display:none!important}\n.print-only{display:block!important}\n.hide-for-print{display:none!important}\n.show-for-print{display:inherit!important}}\n',""])},204:function(t,e,o){var n=o(203);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o(128)(n,i);n.locals&&(t.exports=n.locals)},205:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var o=e.protocol+"//"+e.host,n=o+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(i=0===r.indexOf("//")?r:0===r.indexOf("/")?o+r:n+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},206:function(t,e,o){(e=t.exports=o(129)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,600italic%7CNoto+Serif:400,400italic,700,700italic%7CDroid+Sans+Mono:400,700);",""]),e.push([t.i,"body {\n  padding: 0;\n  margin: 0;\n}\n",""])},207:function(t,e,o){var n=o(206);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o(128)(n,i);n.locals&&(t.exports=n.locals)},208:function(t,e,o){"use strict";o.r(e);o(207),o(204)}});