window.ActiveXObject&&!window.CanvasRenderingContext2D&&function(j,m){function O(a){this.code=a,this.message=ea[a]}function y(a,b,c){if(!c){c=[];for(var d=0,e=4*a*b;e>d;++d)c[d]=0}this.width=a,this.height=b,this.data=c}function fa(a){this.width=a}function P(a){this.id=a.I++}function z(a){this.O=a,this.id=a.I++}function D(a,b){this.canvas=a,this.w=b,this.f=a.uniqueID,this.J(),this.I=0,this.j=this.H="",this.c=0}function E(){if("complete"===m.readyState){m.detachEvent(Q,E);for(var a=m.getElementsByTagName(u),b=0,c=a.length;c>b;++b)F.initElement(a[b])}}function R(){var a=event.srcElement,b=a.parentNode;a.blur(),b.focus()}function G(){2&event.button&&event.srcElement.parentNode.setCapture()}function H(){2&event.button&&event.srcElement.parentNode.releaseCapture()}function S(){var a=event.propertyName;if("width"===a||"height"===a){var b=event.srcElement,c=b[a],d=parseInt(c,10);(isNaN(d)||0>d)&&(d="width"===a?300:150),c===d?(b.style[a]=d+"px",b.getContext("2d").P(b.width,b.height)):b[a]=d}}function T(){j.detachEvent(U,T);for(var a in n){var b,c=n[a],d=c.firstChild;for(b in d)"function"==typeof d[b]&&(d[b]=k);for(b in c)"function"==typeof c[b]&&(c[b]=k);d.detachEvent(V,R),d.detachEvent(I,G),c.detachEvent(J,H),c.detachEvent(W,S)}j[X]=k,j[Y]=k,j[Z]=k,j[K]=k,j[$]=k}function ga(){var a=m.getElementsByTagName("script");return a=a[a.length-1],m.documentMode>=8?a.src:a.getAttribute("src",4)}function ha(a){return a.toLowerCase()}function g(a){throw new O(a)}function aa(a){var b=parseInt(a.width,10),c=parseInt(a.height,10);(isNaN(b)||0>b)&&(b=300),(isNaN(c)||0>c)&&(c=150),a.width=b,a.height=c}var k=null,u="canvas",X="CanvasRenderingContext2D",Y="CanvasGradient",Z="CanvasPattern",K="FlashCanvas",$="G_vmlCanvasManager",V="onfocus",I="onmousedown",J="onmouseup",W="onpropertychange",Q="onreadystatechange",U="onunload",q;try{q=new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").match(/[\d,]+/)[0].replace(/,/g,".")}catch(ia){q=0}var r=j[K+"Options"]||{},ba=r.swfPath||ga().replace(/[^\/]+$/,""),x;x=parseInt(q)>9?ba+"flash10canvas.swf":ba+"flash9canvas.swf";var A={},B={},ca={},L={},v={},da={},n={},C={},l={C:"turbo"in r?r.turbo:1,B:r.delay||0,M:r.disableContextMenu||0,N:r.imageCacheSize||100,D:r.usePolicyFile||0};"10.1.53.64"===q&&(l.C=0,l.B=30),D.prototype={save:function(){this.e(15),this.L.push([this.l,this.m,this.v,this.k,this.p,this.n,this.o,this.q,this.t,this.u,this.r,this.s,this.j,this.z,this.A]),this.a.push("B")},restore:function(){var a=this.L;a.length&&(a=a.pop(),this.globalAlpha=a[0],this.globalCompositeOperation=a[1],this.strokeStyle=a[2],this.fillStyle=a[3],this.lineWidth=a[4],this.lineCap=a[5],this.lineJoin=a[6],this.miterLimit=a[7],this.shadowOffsetX=a[8],this.shadowOffsetY=a[9],this.shadowBlur=a[10],this.shadowColor=a[11],this.font=a[12],this.textAlign=a[13],this.textBaseline=a[14]),this.a.push("C")},scale:function(a,b){this.a.push("D",a,b)},rotate:function(a){this.a.push("E",a)},translate:function(a,b){this.a.push("F",a,b)},transform:function(a,b,c,d,e,f){this.a.push("G",a,b,c,d,e,f)},setTransform:function(a,b,c,d,e,f){this.a.push("H",a,b,c,d,e,f)},createLinearGradient:function(a,b,c,d){return isFinite(a)&&isFinite(b)&&isFinite(c)&&isFinite(d)||g(9),this.a.push("M",a,b,c,d),new z(this)},createRadialGradient:function(a,b,c,d,e,f){return isFinite(a)&&isFinite(b)&&isFinite(c)&&isFinite(d)&&isFinite(e)&&isFinite(f)||g(9),(0>c||0>f)&&g(1),this.a.push("N",a,b,c,d,e,f),new z(this)},createPattern:function(a,b){a||g(17);var c,d,e,f=a.tagName,h=this.f;if(f)if(f=f.toLowerCase(),"img"===f)c=a.getAttribute("src",2);else if(f===u)d=this.G(a),e=a!==this.canvas;else{if("video"===f)return;g(17)}else a.src?c=a.src:g(17);return"repeat"===b||"no-repeat"===b||"repeat-x"===b||"repeat-y"===b||""===b||b===k||g(12),d||(d=B[h][c],(e=void 0===d)&&(d=this.F(c))),this.a.push("O",d,b),e&&A[h]&&(this.g(),++v[h]),new P(this)},clearRect:function(a,b,c,d){this.a.push("X",a,b,c,d),this.b||this.d(),this.c=0},fillRect:function(a,b,c,d){this.e(1),this.a.push("Y",a,b,c,d),this.b||this.d(),this.c=0},strokeRect:function(a,b,c,d){this.e(6),this.a.push("Z",a,b,c,d),this.b||this.d(),this.c=0},beginPath:function(){this.a.push("a")},closePath:function(){this.a.push("b")},moveTo:function(a,b){this.a.push("c",a,b)},lineTo:function(a,b){this.a.push("d",a,b)},quadraticCurveTo:function(a,b,c,d){this.a.push("e",a,b,c,d)},bezierCurveTo:function(a,b,c,d,e,f){this.a.push("f",a,b,c,d,e,f)},arcTo:function(a,b,c,d,e){0>e&&isFinite(e)&&g(1),this.a.push("g",a,b,c,d,e)},rect:function(a,b,c,d){this.a.push("h",a,b,c,d)},arc:function(a,b,c,d,e,f){0>c&&isFinite(c)&&g(1),this.a.push("i",a,b,c,d,e,f?1:0)},fill:function(){this.e(1),this.a.push("j"),this.b||this.d(),this.c=0},stroke:function(){this.e(6),this.a.push("k"),this.b||this.d(),this.c=0},clip:function(){this.a.push("l")},isPointInPath:function(a,b){return this.a.push("m",a,b),"true"===this.g()},fillText:function(a,b,c,d){this.e(9),this.h.push(this.a.length+1),this.a.push("r",a,b,c,void 0===d?1/0:d),this.b||this.d(),this.c=0},strokeText:function(a,b,c,d){this.e(10),this.h.push(this.a.length+1),this.a.push("s",a,b,c,void 0===d?1/0:d),this.b||this.d(),this.c=0},measureText:function(a){var b=C[this.f];try{b.style.font=this.font}catch(c){}return b.innerText=a.replace(/[ \n\f\r]/g,"	"),new fa(b.offsetWidth)},drawImage:function(a,b,c,d,e,f,h,i,j){a||g(17);var k,l,m,n=a.tagName,o=arguments.length,p=this.f;if(n)if(n=n.toLowerCase(),"img"===n)k=a.getAttribute("src",2);else if(n===u)l=this.G(a),m=a!==this.canvas;else{if("video"===n)return;g(17)}else a.src?k=a.src:g(17);if(l||(l=B[p][k],(m=void 0===l)&&(l=this.F(k))),this.e(0),3===o)this.a.push("u",o,l,b,c);else if(5===o)this.a.push("u",o,l,b,c,d,e);else{if(9!==o)return;(0===d||0===e)&&g(1),this.a.push("u",o,l,b,c,d,e,f,h,i,j)}m&&A[p]?(this.g(),++v[p]):this.b||this.d(),this.c=0},createImageData:function(a,b){var c=Math.ceil;return 2===arguments.length?(isFinite(a)&&isFinite(b)||g(9),(0===a||0===b)&&g(1)):(a instanceof y||g(9),b=a.height,a=a.width),a=c(0>a?-a:a),b=c(0>b?-b:b),new y(a,b)},getImageData:function(a,b,c,d){return isFinite(a)&&isFinite(b)&&isFinite(c)&&isFinite(d)||g(9),(0===c||0===d)&&g(1),this.a.push("w",a,b,c,d),a=this.g(),c="object"==typeof JSON?JSON.parse(a):m.documentMode?eval(a):a.slice(1,-1).split(","),a=c.shift(),b=c.shift(),new y(a,b,c)},putImageData:function(a,b,c,d,e,f,h){a instanceof y||g(17),isFinite(b)&&isFinite(c)||g(9);var i=arguments.length,j=a.width,k=a.height,l=a.data;3===i?this.a.push("x",i,j,k,l.toString(),b,c):7===i&&(isFinite(d)&&isFinite(e)&&isFinite(f)&&isFinite(h)||g(9),this.a.push("x",i,j,k,l.toString(),b,c,d,e,f,h)),this.b||this.d(),this.c=0},J:function(){this.globalAlpha=this.l=1,this.globalCompositeOperation=this.m="source-over",this.fillStyle=this.k=this.strokeStyle=this.v="#000000",this.lineWidth=this.p=1,this.lineCap=this.n="butt",this.lineJoin=this.o="miter",this.miterLimit=this.q=10,this.shadowBlur=this.r=this.shadowOffsetY=this.u=this.shadowOffsetX=this.t=0,this.shadowColor=this.s="rgba(0, 0, 0, 0.0)",this.font=this.j="10px sans-serif",this.textAlign=this.z="start",this.textBaseline=this.A="alphabetic",this.a=[],this.L=[],this.i=[],this.h=[],this.b=k,this.K=1},e:function(a){var b,c=this.a;this.l!==this.globalAlpha&&c.push("I",this.l=this.globalAlpha),this.m!==this.globalCompositeOperation&&c.push("J",this.m=this.globalCompositeOperation),this.t!==this.shadowOffsetX&&c.push("T",this.t=this.shadowOffsetX),this.u!==this.shadowOffsetY&&c.push("U",this.u=this.shadowOffsetY),this.r!==this.shadowBlur&&c.push("V",this.r=this.shadowBlur),this.s!==this.shadowColor&&(b=this.s=this.shadowColor,(""+b).indexOf("%")>0&&this.i.push(c.length+1),c.push("W",b)),1&a&&this.k!==this.fillStyle&&(b=this.k=this.fillStyle,"object"==typeof b?b=b.id:(""+b).indexOf("%")>0&&this.i.push(c.length+1),c.push("L",b)),2&a&&this.v!==this.strokeStyle&&(b=this.v=this.strokeStyle,"object"==typeof b?b=b.id:(""+b).indexOf("%")>0&&this.i.push(c.length+1),c.push("K",b)),4&a&&(this.p!==this.lineWidth&&c.push("P",this.p=this.lineWidth),this.n!==this.lineCap&&c.push("Q",this.n=this.lineCap),this.o!==this.lineJoin&&c.push("R",this.o=this.lineJoin),this.q!==this.miterLimit&&c.push("S",this.q=this.miterLimit)),8&a&&(this.j!==this.font&&(a=C[this.f].offsetHeight,this.h.push(c.length+2),c.push("o",a,this.j=this.font)),this.z!==this.textAlign&&c.push("p",this.z=this.textAlign),this.A!==this.textBaseline&&c.push("q",this.A=this.textBaseline),this.H!==this.canvas.currentStyle.direction&&c.push("1",this.H=this.canvas.currentStyle.direction))},d:function(){var a=this;a.b=setTimeout(function(){v[a.f]?a.d():(a.b=k,a.g(l.C))},l.B)},Q:function(){clearTimeout(this.b),this.b=k},g:function(a){var b,c,d,e=this.i,f=this.h,g=this.a,h=this.w;if(g.length){if(this.b&&this.Q(),a){for(b=0,c=e.length;c>b;++b)d=e[b],g[d]=encodeURI(g[d]);for(b=0,c=f.length;c>b;++b)d=f[b],g[d]=encodeURIComponent(g[d])}else for(b=0,c=f.length;c>b;++b)d=f[b],g[d]=(""+g[d]).replace(/&/g,"&amp;").replace(/</g,"&lt;");if(b=g.join(""),this.a=[],this.i=[],this.h=[],!a)return h.CallFunction('<invoke name="executeCommand" returntype="javascript"><arguments><string>'+b+"</string></arguments></invoke>");h.flashvars="c="+b,h.width=h.clientWidth+this.K,this.K^=-2}},P:function(a,b){this.g(),this.J(),a>0&&(this.w.width=a),b>0&&(this.w.height=b),this.a.push("2",a,b),this.b||this.d(),this.c=0},G:function(a){var b=a.uniqueID,c=u+":"+b;return(0===a.width||0===a.height)&&g(11),b!==this.f&&(a=n[b].getContext("2d"),a.c||(b=++da[b],c+=":"+b,a.a.push("3",b),a.b||a.d(),a.c=1)),c},F:function(a){var b=this.f,c=B[b],d=ca[b],e=c[a]=L[b]++;return e>=l.N-1&&(L[b]=0),e in d&&delete c[d[e]],this.h.push(this.a.length+2),this.a.push("5",e,a),d[e]=a,e}},z.prototype={addColorStop:function(a,b){(isNaN(a)||0>a||a>1)&&g(1);var c=this.O,d=this.id;(""+b).indexOf("%")>0&&c.i.push(c.a.length+3),c.a.push("y",d,a,b)}},O.prototype=Error();var ea={1:"INDEX_SIZE_ERR",9:"NOT_SUPPORTED_ERR",11:"INVALID_STATE_ERR",12:"SYNTAX_ERR",17:"TYPE_MISMATCH_ERR",18:"SECURITY_ERR"},F={initElement:function(a){if(a.getContext)return a;var b=a.uniqueID,c="external"+b;A[b]=0,B[b]={},ca[b]=[],L[b]=0,v[b]=1,da[b]=0,aa(a),a.innerHTML='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+location.protocol+'//fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="100%" height="100%" id="'+c+'"><param name="allowScriptAccess" value="always"><param name="flashvars" value="id='+c+'"><param name="wmode" value="transparent"></object><span style="margin:0;padding:0;border:0;display:inline-block;position:static;height:1em;overflow:visible;white-space:nowrap"></span>',n[b]=a;var d=a.firstChild;C[b]=a.lastChild;var e=m.body.contains;if(e(a))d.movie=x;else var f=setInterval(function(){e(a)&&(clearInterval(f),d.movie=x)},0);"BackCompat"!==m.compatMode&&j.XMLHttpRequest||(C[b].style.overflow="hidden");var g=new D(a,d);return a.getContext=function(a){return"2d"===a?g:k},a.toDataURL=function(b,c){return 0===a.width||0===a.height?"data:,":("image/jpeg"===(""+b).replace(/[A-Z]+/g,ha)?g.a.push("A",b,"number"==typeof c?c:""):g.a.push("A",b),g.g().slice(1,-1))},d.attachEvent(V,R),l.M&&(d.attachEvent(I,G),a.attachEvent(J,H)),l.D&&g.a.push("4","usePolicyFile",l.D),a},saveImage:function(a){a.firstChild.saveImage()},setOptions:function(a){for(var b in a){var c=a[b];switch(b){case"turbo":l.C=c;break;case"delay":l.B=c;break;case"disableContextMenu":var d=l.M=c;c=void 0;for(c in n){var e=n[c],f=d?"attachEvent":"detachEvent";e.firstChild[f](I,G),e[f](J,H)}break;case"imageCacheSize":l.N=c;break;case"usePolicyFile":d=b,c=l.D=c?1:0,e=void 0;for(e in n)f=n[e].getContext("2d"),f.h.push(f.a.length+2),f.a.push("4",d,c)}}},trigger:function(a,b){n[a].fireEvent("on"+b)},unlock:function(a,b){if(v[a]&&--v[a],b){var c,d,e=n[a],f=e.firstChild;aa(e),c=e.width,d=e.height,e.style.width=c+"px",e.style.height=d+"px",c>0&&(f.width=c),d>0&&(f.height=d),f.resize(c,d),e.attachEvent(W,S),A[a]=1}}};m.createElement(u),m.createStyleSheet().cssText=u+"{display:inline-block;overflow:hidden;width:300px;height:150px}","complete"===m.readyState?E():m.attachEvent(Q,E),j.attachEvent(U,T),0===x.indexOf(location.protocol+"//"+location.host+"/")&&(q=new ActiveXObject("Microsoft.XMLHTTP"),q.open("GET",x,!1),q.send(k)),j[X]=D,j[Y]=z,j[Z]=P,j[K]=F,j[$]={init:function(){},init_:function(){},initElement:F.initElement}}(window,document);