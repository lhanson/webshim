var swfmini=function(){function a(){if(!B){try{var a=v.getElementsByTagName("body")[0].appendChild(l("span"));a.parentNode.removeChild(a)}catch(b){return}B=!0;for(var c=y.length,d=0;c>d;d++)y[d]()}}function b(a){B?a():y[y.length]=a}function c(){}function d(){x&&e()}function e(){var a=v.getElementsByTagName("body")[0],b=l(p);b.setAttribute("type",t);var c=a.appendChild(b);if(c){var d=0;!function(){if(typeof c.GetVariable!=o){var e=c.GetVariable("$version");e&&(e=e.split(" ")[1].split(","),D.pv=[parseInt(e[0],10),parseInt(e[1],10),parseInt(e[2],10)])}else if(10>d)return d++,setTimeout(arguments.callee,10),void 0;a.removeChild(b),c=null}()}}function f(a){var b=null,c=k(a);if(c&&"OBJECT"==c.nodeName)if(typeof c.SetVariable!=o)b=c;else{var d=c.getElementsByTagName(p)[0];d&&(b=d)}return b}function g(a,b,c){var d,e=k(c);if(D.wk&&D.wk<312)return d;if(e)if(typeof a.id==o&&(a.id=c),D.ie&&D.win){var f="";for(var g in a)a[g]!=Object.prototype[g]&&("data"==g.toLowerCase()?b.movie=a[g]:"styleclass"==g.toLowerCase()?f+=' class="'+a[g]+'"':"classid"!=g.toLowerCase()&&(f+=" "+g+'="'+a[g]+'"'));var i="";for(var j in b)b[j]!=Object.prototype[j]&&(i+='<param name="'+j+'" value="'+b[j]+'" />');e.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+f+">"+i+"</object>",z[z.length]=a.id,d=k(a.id)}else{var m=l(p);m.setAttribute("type",t);for(var n in a)a[n]!=Object.prototype[n]&&("styleclass"==n.toLowerCase()?m.setAttribute("class",a[n]):"classid"!=n.toLowerCase()&&m.setAttribute(n,a[n]));for(var q in b)b[q]!=Object.prototype[q]&&"movie"!=q.toLowerCase()&&h(m,q,b[q]);e.parentNode.replaceChild(m,e),d=m}return d}function h(a,b,c){var d=l("param");d.setAttribute("name",b),d.setAttribute("value",c),a.appendChild(d)}function i(a){var b=k(a);b&&"OBJECT"==b.nodeName&&(D.ie&&D.win?(b.style.display="none",function(){4==b.readyState?j(a):setTimeout(arguments.callee,10)}()):b.parentNode.removeChild(b))}function j(a){var b=k(a);if(b){for(var c in b)"function"==typeof b[c]&&(b[c]=null);b.parentNode.removeChild(b)}}function k(a){var b=null;try{b=v.getElementById(a)}catch(c){}return b}function l(a){return v.createElement(a)}function m(a){var b=D.pv,c=a.split(".");return c[0]=parseInt(c[0],10),c[1]=parseInt(c[1],10)||0,c[2]=parseInt(c[2],10)||0,b[0]>c[0]||b[0]==c[0]&&b[1]>c[1]||b[0]==c[0]&&b[1]==c[1]&&b[2]>=c[2]?!0:!1}function n(a,b){if(C){var c,d=b?"visible":"hidden";B&&c&&k(a)&&(k(a).style.visibility=d)}}var o="undefined",p="object",q=window.webshims,r="Shockwave Flash",s="ShockwaveFlash.ShockwaveFlash",t="application/x-shockwave-flash",u=window,v=document,w=navigator,x=!1,y=[d],z=[],A=[],B=!1,C=!0,D=function(){var a=typeof v.getElementById!=o&&typeof v.getElementsByTagName!=o&&typeof v.createElement!=o,b=w.userAgent.toLowerCase(),c=w.platform.toLowerCase(),d=c?/win/.test(c):/win/.test(b),e=c?/mac/.test(c):/mac/.test(b),f=/webkit/.test(b)?parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,g=!1,h=[0,0,0],i=null;if(typeof w.plugins!=o&&typeof w.plugins[r]==p)i=w.plugins[r].description,!i||typeof w.mimeTypes!=o&&w.mimeTypes[t]&&!w.mimeTypes[t].enabledPlugin||(x=!0,g=!1,i=i.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),h[0]=parseInt(i.replace(/^(.*)\..*$/,"$1"),10),h[1]=parseInt(i.replace(/^.*\.(.*)\s.*$/,"$1"),10),h[2]=/[a-zA-Z]/.test(i)?parseInt(i.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof u.ActiveXObject!=o)try{var j=new ActiveXObject(s);j&&(i=j.GetVariable("$version"),i&&(g=!0,i=i.split(" ")[1].split(","),h=[parseInt(i[0],10),parseInt(i[1],10),parseInt(i[2],10)]))}catch(k){}return{w3:a,pv:h,wk:f,ie:g,win:d,mac:e}}();return!function(){D.ie&&D.win&&window.attachEvent&&window.attachEvent("onunload",function(){for(var a=A.length,b=0;a>b;b++)A[b][0].detachEvent(A[b][1],A[b][2]);for(var c=z.length,d=0;c>d;d++)i(z[d]);for(var e in D)D[e]=null;D=null;for(var f in swfmini)swfmini[f]=null;swfmini=null})}(),q.ready("DOM",a),{registerObject:function(){},getObjectById:function(a){return D.w3?f(a):void 0},embedSWF:function(a,c,d,e,f,h,i,j,k,l){var q={success:!1,id:c};D.w3&&!(D.wk&&D.wk<312)&&a&&c&&d&&e&&f?(n(c,!1),b(function(){d+="",e+="";var b={};if(k&&typeof k===p)for(var h in k)b[h]=k[h];b.data=a,b.width=d,b.height=e;var r={};if(j&&typeof j===p)for(var s in j)r[s]=j[s];if(i&&typeof i===p)for(var t in i)typeof r.flashvars!=o?r.flashvars+="&"+t+"="+i[t]:r.flashvars=t+"="+i[t];if(m(f)){var u=g(b,r,c);b.id==c&&n(c,!0),q.success=!0,q.ref=u}else n(c,!0);l&&l(q)})):l&&l(q)},switchOffAutoHideShow:function(){C=!1},ua:D,getFlashPlayerVersion:function(){return{major:D.pv[0],minor:D.pv[1],release:D.pv[2]}},hasFlashPlayerVersion:m,createSWF:function(a,b,c){return D.w3?g(a,b,c):void 0},showExpressInstall:function(){},removeSWF:function(a){D.w3&&i(a)},createCSS:function(){},addDomLoadEvent:b,addLoadEvent:c,expressInstallCallback:function(){}}}();webshims.register("dom-extend",function(a,b,c,d,e){"use strict";var f=!("hrefNormalized"in a.support)||a.support.hrefNormalized,g=!("getSetAttribute"in a.support)||a.support.getSetAttribute;if(b.assumeARIA=g||Modernizr.canvas||Modernizr.video||Modernizr.boxsizing,("text"==a('<input type="email" />').attr("type")||""===a("<form />").attr("novalidate")||"required"in a("<input />")[0].attributes)&&b.error("IE browser modes are busted in IE10+. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),a.parseHTML||b.error("Webshims needs jQuery 1.8+ to work properly. Please update your jQuery version or downgrade webshims."),!b.cfg.no$Switch){var h=function(){if(!c.jQuery||c.$&&c.jQuery!=c.$||c.jQuery.webshims||(b.error("jQuery was included more than once. Make sure to include it only once or try the $.noConflict(extreme) feature! Webshims and other Plugins might not work properly. Or set webshims.cfg.no$Switch to 'true'."),c.$&&(c.$=b.$),c.jQuery=b.$),b.M!=Modernizr){b.error("Modernizr was included more than once. Make sure to include it only once! Webshims and other scripts might not work properly.");for(var a in Modernizr)a in b.M||(b.M[a]=Modernizr[a]);Modernizr=b.M}};h(),setTimeout(h,90),b.ready("DOM",h),a(h),b.ready("WINDOWLOAD",h)}var i=b.modules,j=/\s*,\s*/,k={},l={},m={},n={},o={},p=a.fn.val,q=function(b,c,d,e,f){return f?p.call(a(b)):p.call(a(b),d)};a.widget||!function(){var b=a.cleanData;a.cleanData=function(c){if(!a.widget)for(var d,e=0;null!=(d=c[e]);e++)try{a(d).triggerHandler("remove")}catch(f){}b(c)}}(),a.fn.val=function(b){var c=this[0];if(arguments.length&&null==b&&(b=""),!arguments.length)return c&&1===c.nodeType?a.prop(c,"value",b,"val",!0):p.call(this);if(a.isArray(b))return p.apply(this,arguments);var d=a.isFunction(b);return this.each(function(f){if(c=this,1===c.nodeType)if(d){var g=b.call(c,f,a.prop(c,"value",e,"val",!0));null==g&&(g=""),a.prop(c,"value",g,"val")}else a.prop(c,"value",b,"val")})},a.fn.onTrigger=function(a,b){return this.on(a,b).each(b)},a.fn.onWSOff=function(b,c,e,f){return f||(f=d),a(f)[e?"onTrigger":"on"](b,c),this.on("remove",function(d){d.originalEvent||a(f).off(b,c)}),this};var r="_webshimsLib"+Math.round(1e3*Math.random()),s=function(b,c,d){if(b=b.jquery?b[0]:b,!b)return d||{};var f=a.data(b,r);return d!==e&&(f||(f=a.data(b,r,{})),c&&(f[c]=d)),c?f&&f[c]:f};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(b){a.fn[b.name]=function(){var c=[];return this.each(function(){var d=s(this,"shadowData"),e=d&&d[b.prop]||this;-1==a.inArray(e,c)&&c.push(e)}),this.pushStack(c)}}),["removeAttr","prop","attr"].forEach(function(c){k[c]=a[c],a[c]=function(b,d,f,g,h){var i="val"==g,j=i?q:k[c];if(!b||!l[d]||1!==b.nodeType||!i&&g&&"attr"==c&&a.attrFn[d])return j(b,d,f,g,h);var n,p,r,s=(b.nodeName||"").toLowerCase(),t=m[s],u="attr"!=c||f!==!1&&null!==f?c:"removeAttr";if(t||(t=m["*"]),t&&(t=t[d]),t&&(n=t[u]),n){if("value"==d&&(p=n.isVal,n.isVal=i),"removeAttr"===u)return n.value.call(b);if(f===e)return n.get?n.get.call(b):n.value;n.set&&("attr"==c&&f===!0&&(f=d),r=n.set.call(b,f)),"value"==d&&(n.isVal=p)}else r=j(b,d,f,g,h);if((f!==e||"removeAttr"===u)&&o[s]&&o[s][d]){var v;v="removeAttr"==u?!1:"prop"==u?!!f:!0,o[s][d].forEach(function(a){(!a.only||(a.only="prop"&&"prop"==c)||"attr"==a.only&&"prop"!=c)&&a.call(b,f,v,i?"val":u,c)})}return r},n[c]=function(a,d,f){m[a]||(m[a]={}),m[a][d]||(m[a][d]={});var g=m[a][d][c],h=function(a,b,e){return b&&b[a]?b[a]:e&&e[a]?e[a]:"prop"==c&&"value"==d?function(a){var b=this;return f.isVal?q(b,d,a,!1,0===arguments.length):k[c](b,d,a)}:"prop"==c&&"value"==a&&f.value.apply?function(){var a=k[c](this,d);return a&&a.apply&&(a=a.apply(this,arguments)),a}:function(a){return k[c](this,d,a)}};m[a][d][c]=f,f.value===e&&(f.set||(f.set=f.writeable?h("set",f,g):b.cfg.useStrict&&"prop"==d?function(){throw d+" is readonly on "+a}:function(){b.info(d+" is readonly on "+a)}),f.get||(f.get=h("get",f,g))),["value","get","set"].forEach(function(a){f[a]&&(f["_sup"+a]=h(a,g))})}});var t=function(){var a=b.getPrototypeOf(d.createElement("foobar")),c=Object.prototype.hasOwnProperty,e=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(f,g,h){var i,j;if(!(e&&(i=d.createElement(f))&&(j=b.getPrototypeOf(i))&&a!==j)||i[g]&&c.call(i,g))h._supvalue=function(){var a=s(this,"propValue");return a&&a[g]&&a[g].apply?a[g].apply(this,arguments):a&&a[g]},u.extendValue(f,g,h.value);else{var k=i[g];h._supvalue=function(){return k&&k.apply?k.apply(this,arguments):k},j[g]=h.value}h.value._supvalue=h._supvalue}}(),u=function(){var c={};b.addReady(function(d,e){var f={},g=function(b){f[b]||(f[b]=a(d.getElementsByTagName(b)),e[0]&&a.nodeName(e[0],b)&&(f[b]=f[b].add(e)))};a.each(c,function(a,c){return g(a),c&&c.forEach?(c.forEach(function(b){f[a].each(b)}),void 0):(b.warn("Error: with "+a+"-property. methods: "+c),void 0)}),f=null});var e,f=a([]),g=function(b,f){c[b]?c[b].push(f):c[b]=[f],a.isDOMReady&&(e||a(d.getElementsByTagName(b))).each(f)};return{createTmpCache:function(b){return a.isDOMReady&&(e=e||a(d.getElementsByTagName(b))),e||f},flushTmpCache:function(){e=null},content:function(b,c){g(b,function(){var b=a.attr(this,c);null!=b&&a.attr(this,c,b)})},createElement:function(a,b){g(a,b)},extendValue:function(b,c,d){g(b,function(){a(this).each(function(){var a=s(this,"propValue",{});a[c]=this[c],this[c]=d})})}}}(),v=function(a,b){a.defaultValue===e&&(a.defaultValue=""),a.removeAttr||(a.removeAttr={value:function(){a[b||"prop"].set.call(this,a.defaultValue),a.removeAttr._supvalue.call(this)}}),a.attr||(a.attr={})};a.extend(b,{getID:function(){var b=(new Date).getTime();return function(c){c=a(c);var d=c.prop("id");return d||(b++,d="ID-"+b,c.eq(0).prop("id",d)),d}}(),implement:function(a,c){var d=s(a,"implemented")||s(a,"implemented",{});return d[c]?(b.warn(c+" already implemented for element #"+a.id),!1):(d[c]=!0,!0)},extendUNDEFProp:function(b,c){a.each(c,function(a,c){a in b||(b[a]=c)})},createPropDefault:v,data:s,moveToFirstEvent:function(b,c,d){var e,f=(a._data(b,"events")||{})[c];f&&f.length>1&&(e=f.pop(),d||(d="bind"),"bind"==d&&f.delegateCount?f.splice(f.delegateCount,0,e):f.unshift(e)),b=null},addShadowDom:function(){var e,f,g,h={init:!1,runs:0,test:function(){var a=h.getHeight(),b=h.getWidth();a!=h.height||b!=h.width?(h.height=a,h.width=b,h.handler({type:"docresize"}),h.runs++,h.runs<9&&setTimeout(h.test,90)):h.runs=0},handler:function(b){clearTimeout(e),e=setTimeout(function(){if("resize"==b.type){var e=a(c).width(),i=a(c).width();if(i==f&&e==g)return;f=i,g=e,h.height=h.getHeight(),h.width=h.getWidth()}a(d).triggerHandler("updateshadowdom")},"resize"==b.type?50:9)},_create:function(){a.each({Height:"getHeight",Width:"getWidth"},function(a,b){var c=d.body,e=d.documentElement;h[b]=function(){return Math.max(c["scroll"+a],e["scroll"+a],c["offset"+a],e["offset"+a],e["client"+a])}})},start:function(){!this.init&&d.body&&(this.init=!0,this._create(),this.height=h.getHeight(),this.width=h.getWidth(),setInterval(this.test,600),a(this.test),b.ready("WINDOWLOAD",this.test),a(d).on("updatelayout",this.handler),a(c).bind("resize",this.handler),function(){var b,c=a.fn.animate;a.fn.animate=function(){return clearTimeout(b),b=setTimeout(function(){h.test()},99),c.apply(this,arguments)}}())}};return b.docObserve=function(){b.ready("DOM",function(){h.start()})},function(c,d,e){if(c&&d){e=e||{},c.jquery&&(c=c[0]),d.jquery&&(d=d[0]);var f=a.data(c,r)||a.data(c,r,{}),g=a.data(d,r)||a.data(d,r,{}),h={};e.shadowFocusElement?e.shadowFocusElement&&(e.shadowFocusElement.jquery&&(e.shadowFocusElement=e.shadowFocusElement[0]),h=a.data(e.shadowFocusElement,r)||a.data(e.shadowFocusElement,r,h)):e.shadowFocusElement=d,a(c).on("remove",function(b){b.originalEvent||setTimeout(function(){a(d).remove()},4)}),f.hasShadow=d,h.nativeElement=g.nativeElement=c,h.shadowData=g.shadowData=f.shadowData={nativeElement:c,shadowElement:d,shadowFocusElement:e.shadowFocusElement},e.shadowChilds&&e.shadowChilds.each(function(){s(this,"shadowData",g.shadowData)}),e.data&&(h.shadowData.data=g.shadowData.data=f.shadowData.data=e.data),e=null}b.docObserve()}}(),propTypes:{standard:function(a){v(a),a.prop||(a.prop={set:function(b){a.attr.set.call(this,""+b)},get:function(){return a.attr.get.call(this)||a.defaultValue}})},"boolean":function(a){v(a),a.prop||(a.prop={set:function(b){b?a.attr.set.call(this,""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}})},src:function(){var b=d.createElement("a");return b.style.display="none",function(c,d){v(c),c.prop||(c.prop={set:function(a){c.attr.set.call(this,a)},get:function(){var c,e=this.getAttribute(d);if(null==e)return"";if(b.setAttribute("href",e+""),!f){try{a(b).insertAfter(this),c=b.getAttribute("href",4)}catch(g){c=b.getAttribute("href",4)}a(b).detach()}return c||b.href}})}}(),enumarated:function(a){v(a),a.prop||(a.prop={set:function(b){a.attr.set.call(this,b)},get:function(){var b=(a.attr.get.call(this)||"").toLowerCase();return b&&-1!=a.limitedTo.indexOf(b)||(b=a.defaultValue),b}})}},reflectProperties:function(c,d){"string"==typeof d&&(d=d.split(j)),d.forEach(function(d){b.defineNodeNamesProperty(c,d,{prop:{set:function(b){a.attr(this,d,b)},get:function(){return a.attr(this,d)||""}}})})},defineNodeNameProperty:function(c,d,e){return l[d]=!0,e.reflect&&(e.propType&&!b.propTypes[e.propType]?b.error("could not finde propType "+e.propType):b.propTypes[e.propType||"standard"](e,d)),["prop","attr","removeAttr"].forEach(function(f){var g=e[f];g&&(g="prop"===f?a.extend({writeable:!0},g):a.extend({},g,{writeable:!0}),n[f](c,d,g),"*"!=c&&b.cfg.extendNative&&"prop"==f&&g.value&&a.isFunction(g.value)&&t(c,d,g),e[f]=g)}),e.initAttr&&u.content(c,d),e},defineNodeNameProperties:function(a,c,d,e){for(var f in c)!e&&c[f].initAttr&&u.createTmpCache(a),d&&(c[f][d]||(c[f][d]={},["value","set","get"].forEach(function(a){a in c[f]&&(c[f][d][a]=c[f][a],delete c[f][a])}))),c[f]=b.defineNodeNameProperty(a,f,c[f]);return e||u.flushTmpCache(),c},createElement:function(c,d,e){var f;return a.isFunction(d)&&(d={after:d}),u.createTmpCache(c),d.before&&u.createElement(c,d.before),e&&(f=b.defineNodeNameProperties(c,e,!1,!0)),d.after&&u.createElement(c,d.after),u.flushTmpCache(),f},onNodeNamesPropertyModify:function(b,c,d,e){"string"==typeof b&&(b=b.split(j)),a.isFunction(d)&&(d={set:d}),b.forEach(function(a){o[a]||(o[a]={}),"string"==typeof c&&(c=c.split(j)),d.initAttr&&u.createTmpCache(a),c.forEach(function(b){o[a][b]||(o[a][b]=[],l[b]=!0),d.set&&(e&&(d.set.only=e),o[a][b].push(d.set)),d.initAttr&&u.content(a,b)}),u.flushTmpCache()})},defineNodeNamesBooleanProperty:function(c,d,f){f||(f={}),a.isFunction(f)&&(f.set=f),b.defineNodeNamesProperty(c,d,{attr:{set:function(a){this.setAttribute(d,a),f.set&&f.set.call(this,!0)},get:function(){var a=this.getAttribute(d);return null==a?e:d}},removeAttr:{value:function(){this.removeAttribute(d),f.set&&f.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:f.initAttr||!1})},contentAttr:function(a,b,c){if(a.nodeName){var d;return c===e?(d=a.attributes[b]||{},c=d.specified?d.value:null,null==c?e:c):("boolean"==typeof c?c?a.setAttribute(b,b):a.removeAttribute(b):a.setAttribute(b,c),void 0)}},activeLang:function(){var c,d,e=[],f={},g=/:\/\/|^\.*\//,h=function(c,d,e){var f;return d&&e&&-1!==a.inArray(d,e.availableLangs||e.availabeLangs||[])?(c.loading=!0,f=e.langSrc,g.test(f)||(f=b.cfg.basePath+f),b.loader.loadScript(f+d+".js",function(){c.langObj[d]?(c.loading=!1,k(c,!0)):a(function(){c.langObj[d]&&k(c,!0),c.loading=!1})}),!0):!1},j=function(a){f[a]&&f[a].forEach(function(a){a.callback(c,d,"")})},k=function(a,b){if(a.activeLang!=c&&a.activeLang!==d){var e=i[a.module].options;a.langObj[c]||d&&a.langObj[d]?(a.activeLang=c,a.callback(a.langObj[c]||a.langObj[d],c),j(a.module)):b||h(a,c,e)||h(a,d,e)||!a.langObj[""]||""===a.activeLang||(a.activeLang="",a.callback(a.langObj[""],c),j(a.module))}},l=function(b){return"string"==typeof b&&b!==c?(c=b,d=c.split("-")[0],c==d&&(d=!1),a.each(e,function(a,b){k(b)})):"object"==typeof b&&(b.register?(f[b.register]||(f[b.register]=[]),f[b.register].push(b),b.callback(c,d,"")):(b.activeLang||(b.activeLang=""),e.push(b),k(b))),c};return l}()}),a.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,c){b[a]=function(a,d,e,f){"string"==typeof a&&(a=a.split(j));var g={};return a.forEach(function(a){g[a]=b[c](a,d,e,f)}),g}}),b.isReady("webshimLocalization",!0)}),function(a,b){if(!(!a.webshims.assumeARIA||"content"in b.createElement("template")||(a(function(){var b=a("main").attr({role:"main"});b.length>1?webshims.error("only one main element allowed in document"):b.is("article *, section *")&&webshims.error("main not allowed inside of article/section elements")}),"hidden"in b.createElement("a")))){var c={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},d=function(a,b){var c=a.getAttribute("role");c||a.setAttribute("role",b)};a.webshims.addReady(function(e,f){if(a.each(c,function(b,c){for(var g=a(b,e).add(f.filter(b)),h=0,i=g.length;i>h;h++)d(g[h],c)}),e===b){var g=b.getElementsByTagName("header")[0],h=b.getElementsByTagName("footer"),i=h.length;if(g&&!a(g).closest("section, article")[0]&&d(g,"banner"),!i)return;var j=h[i-1];a(j).closest("section, article")[0]||d(j,"contentinfo")}})}}(webshims.$,document),webshims.register("form-core",function(a,b,c,d,e,f){"use strict";b.capturingEventPrevented=function(b){if(!b._isPolyfilled){var c=b.isDefaultPrevented,d=b.preventDefault;b.preventDefault=function(){return clearTimeout(a.data(b.target,b.type+"DefaultPrevented")),a.data(b.target,b.type+"DefaultPrevented",setTimeout(function(){a.removeData(b.target,b.type+"DefaultPrevented")},30)),d.apply(this,arguments)},b.isDefaultPrevented=function(){return!(!c.apply(this,arguments)&&!a.data(b.target,b.type+"DefaultPrevented"))},b._isPolyfilled=!0}},Modernizr.formvalidation&&!b.bugs.bustedValidity&&b.capturingEvents(["invalid"],!0);var g=function(b){return(a.prop(b,"validity")||{valid:1}).valid},h=function(){var c=["form-validation"];f.lazyCustomMessages&&(f.customMessages=!0,c.push("form-message")),f.customDatalist&&(f.fD=!0,c.push("form-datalist")),f.addValidators&&c.push("form-validators"),b.reTest(c),a(d).off(".lazyloadvalidation")},i=function(b){var c=!1;return a(b).jProp("elements").each(function(){return c=a(this).is(":invalid"),c?!1:void 0}),c},j=/^(?:form)$/i;a.extend(a.expr[":"],{"valid-element":function(b){return j.test(b.nodeName||"")?!i(b):!(!a.prop(b,"willValidate")||!g(b))},"invalid-element":function(b){return j.test(b.nodeName||"")?i(b):!(!a.prop(b,"willValidate")||g(b))},"required-element":function(b){return!(!a.prop(b,"willValidate")||!a.prop(b,"required"))},"user-error":function(b){return a.prop(b,"willValidate")&&a(b).hasClass("user-error")},"optional-element":function(b){return!(!a.prop(b,"willValidate")||a.prop(b,"required")!==!1)}}),["valid","invalid","required","optional"].forEach(function(b){a.expr[":"][b]=a.expr.filters[b+"-element"]});var k=a.expr[":"].focus;a.expr[":"].focus=function(){try{return k.apply(this,arguments)}catch(a){b.error(a)}return!1},b.triggerInlineForm=function(b,c){a(b).trigger(c)};var l=function(a,c,d){h(),b.ready("form-validation",function(){a[c].apply(a,d)})},m="transitionDelay"in d.documentElement.style?"":" no-transition",n=b.cfg.wspopover;n.position||n.position===!1||(n.position={at:"left bottom",my:"left top",collision:"fit flip"}),b.wsPopover={id:0,_create:function(){this.options=a.extend(!0,{},n,this.options),this.id=b.wsPopover.id++,this.eventns=".wsoverlay"+this.id,this.timers={},this.element=a('<div class="ws-popover'+m+'" tabindex="-1"><div class="ws-po-outerbox"><div class="ws-po-arrow"><div class="ws-po-arrowbox" /></div><div class="ws-po-box" /></div></div>'),this.contentElement=a(".ws-po-box",this.element),this.lastElement=a([]),this.bindElement(),this.element.data("wspopover",this)},options:{},content:function(a){this.contentElement.html(a)},bindElement:function(){var a=this,b=function(){a.stopBlur=!1};this.preventBlur=function(){a.stopBlur=!0,clearTimeout(a.timers.stopBlur),a.timers.stopBlur=setTimeout(b,9)},this.element.on({mousedown:this.preventBlur})},show:function(){l(this,"show",arguments)}},b.validityAlert={showFor:function(){l(this,"showFor",arguments)}},b.getContentValidationMessage=function(b,c,d){var e=a(b).data("errormessage")||b.getAttribute("x-moz-errormessage")||"";return d&&e[d]?e=e[d]:e&&(c=c||a.prop(b,"validity")||{valid:1},c.valid&&(e="")),"object"==typeof e&&(c=c||a.prop(b,"validity")||{valid:1},c.valid||(a.each(c,function(a,b){return b&&"valid"!=a&&e[a]?(e=e[a],!1):void 0}),"object"==typeof e&&(c.typeMismatch&&e.badInput&&(e=e.badInput),c.badInput&&e.typeMismatch&&(e=e.typeMismatch)))),"object"==typeof e&&(e=e.defaultMessage),e||""},a.fn.getErrorMessage=function(c){var d="",e=this[0];return e&&(d=b.getContentValidationMessage(e,!1,c)||a.prop(e,"customValidationMessage")||a.prop(e,"validationMessage")),d},a(d).on("focusin.lazyloadvalidation",function(b){"form"in b.target&&(b.target.list||a(b.target).is(":invalid"))&&h()}),b.ready("WINDOWLOAD",h)}),webshims.register("form-message",function(a,b,c,d,e,f){"use strict";f.lazyCustomMessages&&(f.customMessages=!0);var g=b.validityMessages,h=f.customMessages?["customValidationMessage"]:[];g.en=a.extend(!0,{typeMismatch:{defaultMessage:"Please enter a valid value.",email:"Please enter an email address.",url:"Please enter a URL."},badInput:{defaultMessage:"Please enter a valid value.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.",month:"Please enter a valid value.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},g.en||g["en-US"]||{}),"object"==typeof g.en.valueMissing&&["select","radio"].forEach(function(a){g.en.valueMissing[a]=g.en.valueMissing[a]||"Please select an option."}),"object"==typeof g.en.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(a){g.en.rangeUnderflow[a]=g.en.rangeUnderflow[a]||"Value must be at or after {%min}."}),"object"==typeof g.en.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(a){g.en.rangeOverflow[a]=g.en.rangeOverflow[a]||"Value must be at or before {%max}."}),g["en-US"]||(g["en-US"]=a.extend(!0,{},g.en)),g["en-GB"]||(g["en-GB"]=a.extend(!0,{},g.en)),g["en-AU"]||(g["en-AU"]=a.extend(!0,{},g.en)),g[""]=g[""]||g["en-US"],g.de=a.extend(!0,{typeMismatch:{defaultMessage:"{%value} ist in diesem Feld nicht zul\xe4ssig.",email:"{%value} ist keine g\xfcltige E-Mail-Adresse.",url:"{%value} ist kein(e) g\xfcltige(r) Webadresse/Pfad."},badInput:{defaultMessage:"Geben Sie einen zul\xe4ssigen Wert ein.",number:"Geben Sie eine Nummer ein.",date:"Geben Sie ein Datum ein.",time:"Geben Sie eine Uhrzeit ein.",month:"Geben Sie einen Monat mit Jahr ein.",range:"Geben Sie eine Nummer.","datetime-local":"Geben Sie ein Datum mit Uhrzeit ein."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\xf6nnen."},rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\xf6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\xe4ssig. Hier sind nur bestimmte Werte zul\xe4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\xfcr dieses Eingabefeld ein falsches Format. {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein.",checkbox:"Bitte aktivieren Sie das K\xe4stchen."}},g.de||{}),"object"==typeof g.de.valueMissing&&["select","radio"].forEach(function(a){g.de.valueMissing[a]=g.de.valueMissing[a]||"Bitte w\xe4hlen Sie eine Option aus."}),"object"==typeof g.de.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(a){g.de.rangeUnderflow[a]=g.de.rangeUnderflow[a]||"{%value} ist zu fr\xfch. {%min} ist die fr\xfcheste Zeit, die Sie benutzen k\xf6nnen."}),"object"==typeof g.de.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(a){g.de.rangeOverflow[a]=g.de.rangeOverflow[a]||"{%value} ist zu sp\xe4t. {%max} ist die sp\xe4teste Zeit, die Sie benutzen k\xf6nnen."});var i=g[""],j=function(b,c){return b&&"string"!=typeof b&&(b=b[a.prop(c,"type")]||b[(c.nodeName||"").toLowerCase()]||b.defaultMessage),b||""},k={value:1,min:1,max:1};b.createValidationMessage=function(c,d){var e,f=a.prop(c,"type"),h=j(i[d],c);return h||"badInput"!=d||(h=j(i.typeMismatch,c)),h||"typeMismatch"!=d||(h=j(i.badInput,c)),h||(h=j(g[""][d],c)||a.prop(c,"validationMessage"),b.info("could not find errormessage for: "+d+" / "+f+". in language: "+b.activeLang())),h&&["value","min","max","title","maxlength","label"].forEach(function(g){if(-1!==h.indexOf("{%"+g)){var i=("label"==g?a.trim(a('label[for="'+c.id+'"]',c.form).text()).replace(/\*$|:$/,""):a.prop(c,g))||"";"patternMismatch"!=d||"title"!=g||i||b.error("no title for patternMismatch provided. Always add a title attribute."),k[g]&&(e||(e=a(c).getShadowElement().data("wsWidget"+f)),e&&e.formatValue&&(i=e.formatValue(i,!1))),h=h.replace("{%"+g+"}",i),"value"==g&&(h=h.replace("{%valueLen}",i.length))}}),h||""},(!Modernizr.formvalidation||b.bugs.bustedValidity)&&h.push("validationMessage"),b.activeLang({langObj:g,module:"form-core",callback:function(a){i=a}}),b.activeLang({register:"form-core",callback:function(a){g[a]&&(i=g[a])}}),h.forEach(function(c){b.defineNodeNamesProperty(["fieldset","output","button"],c,{prop:{value:"",writeable:!1}}),["input","select","textarea"].forEach(function(d){var e=b.defineNodeNameProperty(d,c,{prop:{get:function(){var c=this,d="";if(!a.prop(c,"willValidate"))return d;var f=a.prop(c,"validity")||{valid:1};return f.valid?d:(d=b.getContentValidationMessage(c,f))?d:f.customError&&c.nodeName&&(d=Modernizr.formvalidation&&!b.bugs.bustedValidity&&e.prop._supget?e.prop._supget.call(c):b.data(c,"customvalidationMessage"))?d:(a.each(f,function(a,e){return"valid"!=a&&e?(d=b.createValidationMessage(c,a),d?!1:void 0):void 0}),d||"")},writeable:!1}})})})}),function(a,b){"use strict";var c,d,e=b.$,f=a.audio&&a.video,g=!1,h=b.bugs,i="mediaelement-jaris",j=function(){b.ready(i,function(){b.mediaelement.createSWF||(b.mediaelement.loadSwf=!0,b.reTest([i],f))})},k=b.cfg,l=k.mediaelement;if(!l)return b.error("mediaelement wasn't implemented but loaded"),void 0;if(f){var m=document.createElement("video");if(a.videoBuffered="buffered"in m,a.mediaDefaultMuted="defaultMuted"in m,g="loop"in m,b.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),a.videoBuffered||(b.addPolyfill("mediaelement-native-fix",{d:["dom-support"]}),b.loader.loadList(["mediaelement-native-fix"])),!l.preferFlash){var n={1:1},o=function(a){var c,f,g;!l.preferFlash&&(e(a.target).is("audio, video")||(g=a.target.parentNode)&&e("source:last",g)[0]==a.target)&&(c=e(a.target).closest("audio, video"))&&(f=c.prop("error"))&&!n[f.code]&&e(function(){d&&!l.preferFlash?(j(),b.ready("WINDOWLOAD "+i,function(){setTimeout(function(){l.preferFlash||!b.mediaelement.createSWF||c.is(".nonnative-api-active")||(l.preferFlash=!0,document.removeEventListener("error",o,!0),e("audio, video").each(function(){b.mediaelement.selectSource(this)}),b.error("switching mediaelements option to 'preferFlash', due to an error with native player: "+a.target.src+" Mediaerror: "+c.prop("error")+"first error: "+f))},9)})):document.removeEventListener("error",o,!0)})};document.addEventListener("error",o,!0),e("audio, video").each(function(){var a=e.prop(this,"error");return a&&!n[a]?(o({target:this}),!1):void 0})}}a.track&&!h.track&&!function(){if(h.track||(h.track="number"!=typeof e("<track />")[0].readyState),!h.track)try{new TextTrackCue(2,3,"")}catch(a){h.track=!0}}(),c=a.track&&!h.track,b.register("mediaelement-core",function(b,e,h,k,l,m){d=swfmini.hasFlashPlayerVersion("9.0.115"),b("html").addClass(d?"swf":"no-swf");var n=e.mediaelement;n.parseRtmp=function(a){var b,c,d,f=a.src.split("://"),g=f[1].split("/");for(a.server=f[0]+"://"+g[0]+"/",a.streamId=[],b=1,c=g.length;c>b;b++)d||-1===g[b].indexOf(":")||(g[b]=g[b].split(":")[1],d=!0),d?a.streamId.push(g[b]):a.server+=g[b]+"/";a.streamId.length||e.error("Could not parse rtmp url"),a.streamId=a.streamId.join("/")};var o=function(a,c){a=b(a);var d,e={src:a.attr("src")||"",elem:a,srcProp:a.prop("src")};return e.src?(d=a.attr("data-server"),null!=d&&(e.server=d),d=a.attr("type"),d?(e.type=d,e.container=b.trim(d.split(";")[0])):(c||(c=a[0].nodeName.toLowerCase(),"source"==c&&(c=(a.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),e.server?(e.type=c+"/rtmp",e.container=c+"/rtmp"):(d=n.getTypeForSrc(e.src,c,e),d&&(e.type=d,e.container=d))),d=a.attr("media"),d&&(e.media=d),("audio/rtmp"==e.type||"video/rtmp"==e.type)&&(e.server?e.streamId=e.src:n.parseRtmp(e)),e):e},p=!d&&"postMessage"in h&&f,q=function(){q.loaded||(q.loaded=!0,m.noAutoTrack||e.ready("WINDOWLOAD",function(){s(),e.loader.loadList(["track-ui"])}))},r=function(){var a;return function(){!a&&p&&(a=!0,e.loader.loadScript("https://www.youtube.com/player_api"),b(function(){e._polyfill(["mediaelement-yt"])}))}}(),s=function(){d?j():r()};e.addPolyfill("mediaelement-yt",{test:!p,d:["dom-support"]}),n.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},n.mimeTypes.source=b.extend({},n.mimeTypes.audio,n.mimeTypes.video),n.getTypeForSrc=function(a,c){if(-1!=a.indexOf("youtube.com/watch?")||-1!=a.indexOf("youtube.com/v/"))return"video/youtube";if(0===a.indexOf("rtmp"))return c+"/rtmp";a=a.split("?")[0].split("#")[0].split("."),a=a[a.length-1];var d;return b.each(n.mimeTypes[c],function(b,c){return-1!==c.indexOf(a)?(d=b,!1):void 0}),d},n.srces=function(a,c){if(a=b(a),!c){c=[];var d=a[0].nodeName.toLowerCase(),e=o(a,d);return e.src?c.push(e):b("source",a).each(function(){e=o(this,d),e.src&&c.push(e)}),c}a.removeAttr("src").removeAttr("type").find("source").remove(),b.isArray(c)||(c=[c]),c.forEach(function(c){"string"==typeof c&&(c={src:c}),a.append(b(k.createElement("source")).attr(c))
})},b.fn.loadMediaSrc=function(a,c){return this.each(function(){c!==l&&(b(this).removeAttr("poster"),c&&b.attr(this,"poster",c)),n.srces(this,a),b(this).mediaLoad()})},n.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","video/jarisplayer","jarisplayer/jarisplayer","video/youtube","video/rtmp","audio/rtmp"],n.canThirdPlaySrces=function(a,c){var e="";return(d||p)&&(a=b(a),c=c||n.srces(a),b.each(c,function(a,b){return b.container&&b.src&&(d&&-1!=n.swfMimeTypes.indexOf(b.container)||p&&"video/youtube"==b.container)?(e=b,!1):void 0})),e};var t={};n.canNativePlaySrces=function(a,c){var d="";if(f){a=b(a);var e=(a[0].nodeName||"").toLowerCase(),g=(t[e]||{prop:{_supvalue:!1}}).prop._supvalue||a[0].canPlayType;if(!g)return d;c=c||n.srces(a),b.each(c,function(b,c){return c.type&&g.call(a[0],c.type)?(d=c,!1):void 0})}return d};var u=/^\s*application\/octet\-stream\s*$/i,v=function(){var a=u.test(b.attr(this,"type")||"");return a&&b(this).removeAttr("type"),a};n.setError=function(a,c){if(b("source",a).filter(v).length){e.error('"application/octet-stream" is a useless mimetype for audio/video. Please change this attribute.');try{b(a).mediaLoad()}catch(d){}}else c||(c="can't play sources"),b(a).pause().data("mediaerror",c),e.error("mediaelementError: "+c),setTimeout(function(){b(a).data("mediaerror")&&b(a).addClass("media-error").trigger("mediaerror")},1)};var w=function(){var a;return function(b,c,f){e.ready(d?i:"mediaelement-yt",function(){n.createSWF?n.createSWF(b,c,f):a||(a=!0,s(),w(b,c,f))}),a||!p||n.createSWF||r()}}(),x=function(a,b,c,d,e){var f;c||c!==!1&&b&&"third"==b.isActive?(f=n.canThirdPlaySrces(a,d),f?w(a,f,b):e?n.setError(a,!1):x(a,b,!1,d,!0)):(f=n.canNativePlaySrces(a,d),f?b&&"third"==b.isActive&&n.setActive(a,"html5",b):e?(n.setError(a,!1),b&&"third"==b.isActive&&n.setActive(a,"html5",b)):x(a,b,!0,d,!0))},y=/^(?:embed|object|datalist)$/i,z=function(a,c){var d=e.data(a,"mediaelementBase")||e.data(a,"mediaelementBase",{}),f=n.srces(a),g=a.parentNode;clearTimeout(d.loadTimer),b(a).removeClass("media-error"),b.data(a,"mediaerror",!1),f.length&&g&&1==g.nodeType&&!y.test(g.nodeName||"")&&(c=c||e.data(a,"mediaelement"),n.sortMedia&&f.sort(n.sortMedia),x(a,c,m.preferFlash||l,f))};n.selectSource=z,b(k).on("ended",function(a){var c=e.data(a.target,"mediaelement");(!g||c&&"html5"!=c.isActive||b.prop(a.target,"loop"))&&setTimeout(function(){!b.prop(a.target,"paused")&&b.prop(a.target,"loop")&&b(a.target).prop("currentTime",0).play()},1)});var A=!1,B=function(){var c=function(){if(e.implement(this,"mediaelement")&&(z(this),a.mediaDefaultMuted||null==b.attr(this,"muted")||b.prop(this,"muted",!0),f&&(!g||"ActiveXObject"in h))){var c,d,i=this,j=function(){var a=b.prop(i,"buffered");if(a){for(var c="",d=0,e=a.length;e>d;d++)c+=a.end(d);return c}},k=function(){var a=j();a!=d&&(d=a,e.info("needed to trigger progress manually"),b(i).triggerHandler("progress"))};b(this).on({"play loadstart progress":function(a){"progress"==a.type&&(d=j()),clearTimeout(c),c=setTimeout(k,400)},"emptied stalled mediaerror abort suspend":function(a){"emptied"==a.type&&(d=!1),clearTimeout(c)}}),"ActiveXObject"in h&&b.prop(this,"paused")&&!b.prop(this,"readyState")&&b(this).is('audio[preload="none"][controls]:not([autoplay],.nonnative-api-active)')&&b(this).prop("preload","metadata").mediaLoad()}};e.ready("dom-support",function(){A=!0,g||e.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(a){var c;c=e.defineNodeNameProperty(a,"load",{prop:{value:function(){var a=e.data(this,"mediaelement");z(this,a),!f||a&&"html5"!=a.isActive||!c.prop._supvalue||c.prop._supvalue.apply(this,arguments)}}}),t[a]=e.defineNodeNameProperty(a,"canPlayType",{prop:{value:function(c){var e="";return f&&t[a].prop._supvalue&&(e=t[a].prop._supvalue.call(this,c),"no"==e&&(e="")),!e&&d&&(c=b.trim((c||"").split(";")[0]),-1!=n.swfMimeTypes.indexOf(c)&&(e="maybe")),e}}})}),e.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=this,b=e.data(a,"mediaelementBase")||e.data(a,"mediaelementBase",{});clearTimeout(b.loadTimer),b.loadTimer=setTimeout(function(){z(a),a=null},9)}}),e.addReady(function(a,d){var e=b("video, audio",a).add(d.filter("video, audio")).each(c);!q.loaded&&b("track",e).length&&q(),e=null})}),f&&!A&&e.addReady(function(a,c){A||b("video, audio",a).add(c.filter("video, audio")).each(function(){return n.canNativePlaySrces(this)?void 0:(s(),A=!0,!1)})})};c&&e.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}}),f?(e.isReady("mediaelement-core",!0),B(),e.ready("WINDOWLOAD mediaelement",s)):e.ready(i,B),e.ready("track",q)})}(Modernizr,webshims);