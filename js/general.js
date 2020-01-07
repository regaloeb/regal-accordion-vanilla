(function () {
	var w = window,
		d = document,
		e = d.documentElement,
		g = d.getElementsByTagName('body')[0];

	var windowHeight = w.innerHeight||e.clientHeight||g.clientHeight;
	var windowWidth = w.innerWidth||e.clientWidth||g.clientWidth;
	
	//------------DOMLOAD		
	document.addEventListener("DOMContentLoaded", function () {
		//console.log("DOM loaded");
		
		//accordions
		var accordions = document.querySelectorAll('.accordion');
		if(accordions){
			accordions.forEach(function(elt){
				new RegalAccordion(elt);
			});
		}
		
		//wait for page to be fully loaded 
		window.addEventListener("load", function () {
			//console.log("document loaded");
		});
	});

	//-------------- POLYFILLS
	//forEach NodeList & HTMLCollection polyfill 
	NodeList.prototype.forEach||(NodeList.prototype.forEach=Array.prototype.forEach),HTMLCollection.prototype.forEach||(HTMLCollection.prototype.forEach=Array.prototype.forEach);
	
	//classList polyfill /for IE9)
	!function(){function t(t){this.el=t;for(var n=t.className.replace(/^\s+|\s+$/g,"").split(/\s+/),i=0;i<n.length;i++)e.call(this,n[i])}function n(t,n,i){Object.defineProperty?Object.defineProperty(t,n,{get:i}):t.__defineGetter__(n,i)}if(!("undefined"==typeof window.Element||"classList"in document.documentElement)){var i=Array.prototype,e=i.push,s=i.splice,o=i.join;t.prototype={add:function(t){this.contains(t)||(e.call(this,t),this.el.className=this.toString())},contains:function(t){return-1!=this.el.className.indexOf(t)},item:function(t){return this[t]||null},remove:function(t){if(this.contains(t)){for(var n=0;n<this.length&&this[n]!=t;n++);s.call(this,n,1),this.el.className=this.toString()}},toString:function(){return o.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},window.DOMTokenList=t,n(Element.prototype,"classList",function(){return new t(this)})}}();
	
	//closest polyfill (for IE9+)
	Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;if(!document.documentElement.contains(t))return null;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1==t.nodeType);return null});
	
	//RequestAnimationFrame Polyfill
	!function(){for(var n=0,i=["ms","moz","webkit","o"],e=0;e<i.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[i[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i[e]+"CancelAnimationFrame"]||window[i[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(i){var e=(new Date).getTime(),a=Math.max(0,16-(e-n)),o=window.setTimeout(function(){i(e+a)},a);return n=e+a,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(n){clearTimeout(n)})}();
	
	//animation and transion end event
	function whichAnimationEvent(){var n,i=document.createElement("fakeelement"),t={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(n in t)if(void 0!==i.style[n])return t[n]}function whichTransitionEvent(){var n,i=document.createElement("fakeelement"),t={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(n in t)if(void 0!==i.style[n])return t[n]}var animationEvent=whichAnimationEvent(),transitionEvent=whichTransitionEvent();
	
	//intersection observer
	!function(d,_){"use strict";if("IntersectionObserver"in d&&"IntersectionObserverEntry"in d&&"intersectionRatio"in d.IntersectionObserverEntry.prototype)"isIntersecting"in d.IntersectionObserverEntry.prototype||Object.defineProperty(d.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return 0<this.intersectionRatio}});else{var e=[];t.prototype.THROTTLE_TIMEOUT=100,t.prototype.POLL_INTERVAL=null,t.prototype.USE_MUTATION_OBSERVER=!0,t.prototype.observe=function(e){if(!this._observationTargets.some(function(t){return t.element==e})){if(!e||1!=e.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:e,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},t.prototype.unobserve=function(e){this._observationTargets=this._observationTargets.filter(function(t){return t.element!=e}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},t.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},t.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},t.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||1<t)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},t.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},t.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(n(d,"resize",this._checkForIntersections,!0),n(_,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in d&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(_,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},t.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,o(d,"resize",this._checkForIntersections,!0),o(_,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},t.prototype._checkForIntersections=function(){var h=this._rootIsInDom(),c=h?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach(function(t){var e=t.element,n=m(e),o=this._rootContainsTarget(e),i=t.entry,r=h&&o&&this._computeTargetAndRootIntersection(e,c),s=t.entry=new a({time:d.performance&&performance.now&&performance.now(),target:e,boundingClientRect:n,rootBounds:c,intersectionRect:r});i?h&&o?this._hasCrossedThreshold(i,s)&&this._queuedEntries.push(s):i&&i.isIntersecting&&this._queuedEntries.push(s):this._queuedEntries.push(s)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},t.prototype._computeTargetAndRootIntersection=function(t,e){if("none"!=d.getComputedStyle(t).display){for(var n,o,i,r,s,h,c,a,u=m(t),l=v(t),p=!1;!p;){var f=null,g=1==l.nodeType?d.getComputedStyle(l):{};if("none"==g.display)return;if(l==this.root||l==_?(p=!0,f=e):l!=_.body&&l!=_.documentElement&&"visible"!=g.overflow&&(f=m(l)),f&&(n=f,o=u,void 0,i=Math.max(n.top,o.top),r=Math.min(n.bottom,o.bottom),s=Math.max(n.left,o.left),h=Math.min(n.right,o.right),a=r-i,!(u=0<=(c=h-s)&&0<=a&&{top:i,bottom:r,left:s,right:h,width:c,height:a})))break;l=v(l)}return u}},t.prototype._getRootRect=function(){var t;if(this.root)t=m(this.root);else{var e=_.documentElement,n=_.body;t={top:0,left:0,right:e.clientWidth||n.clientWidth,width:e.clientWidth||n.clientWidth,bottom:e.clientHeight||n.clientHeight,height:e.clientHeight||n.clientHeight}}return this._expandRectByRootMargin(t)},t.prototype._expandRectByRootMargin=function(n){var t=this._rootMarginValues.map(function(t,e){return"px"==t.unit?t.value:t.value*(e%2?n.width:n.height)/100}),e={top:n.top-t[0],right:n.right+t[1],bottom:n.bottom+t[2],left:n.left-t[3]};return e.width=e.right-e.left,e.height=e.bottom-e.top,e},t.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var i=0;i<this.thresholds.length;i++){var r=this.thresholds[i];if(r==n||r==o||r<n!=r<o)return!0}},t.prototype._rootIsInDom=function(){return!this.root||i(_,this.root)},t.prototype._rootContainsTarget=function(t){return i(this.root||_,t)},t.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},t.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},d.IntersectionObserver=t,d.IntersectionObserverEntry=a}function a(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,o=this.intersectionRect,i=o.width*o.height;this.intersectionRatio=n?i/n:this.isIntersecting?1:0}function t(t,e){var n,o,i,r=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(r.root&&1!=r.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),o=this.THROTTLE_TIMEOUT,i=null,function(){i||(i=setTimeout(function(){n(),i=null},o))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(r.rootMargin),this.thresholds=this._initThresholds(r.threshold),this.root=r.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function n(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function o(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function m(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function i(t,e){for(var n=e;n;){if(n==t)return!0;n=v(n)}return!1}function v(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e}}(window,document);
	
	/*!
	  * Stickyfill – `position: sticky` polyfill
	  * v. 2.1.0 | https://github.com/wilddeer/stickyfill
	  * MIT License
	  */
	!function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function d(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}function e(a){return parseFloat(a)||0}function f(a){for(var b=0;a;)b+=a.offsetTop,a=a.offsetParent;return b}function g(){function c(){a.pageXOffset!=m.left?(m.top=a.pageYOffset,m.left=a.pageXOffset,p.refreshAll()):a.pageYOffset!=m.top&&(m.top=a.pageYOffset,m.left=a.pageXOffset,n.forEach(function(a){return a._recalcPosition()}))}function d(){f=setInterval(function(){n.forEach(function(a){return a._fastCheck()})},500)}function e(){clearInterval(f)}if(!k){k=!0,c(),a.addEventListener("scroll",c),a.addEventListener("resize",p.refreshAll),a.addEventListener("orientationchange",p.refreshAll);var f=void 0,g=void 0,h=void 0;"hidden"in b?(g="hidden",h="visibilitychange"):"webkitHidden"in b&&(g="webkitHidden",h="webkitvisibilitychange"),h?(b[g]||d(),b.addEventListener(h,function(){b[g]?e():d()})):d()}}var h=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),i=!1,j="undefined"!=typeof a;j&&a.getComputedStyle?!function(){var a=b.createElement("div");["","-webkit-","-moz-","-ms-"].some(function(b){try{a.style.position=b+"sticky"}catch(a){}return""!=a.style.position})&&(i=!0)}():i=!0;var k=!1,l="undefined"!=typeof ShadowRoot,m={top:null,left:null},n=[],o=function(){function g(a){if(c(this,g),!(a instanceof HTMLElement))throw new Error("First argument must be HTMLElement");if(n.some(function(b){return b._node===a}))throw new Error("Stickyfill is already applied to this node");this._node=a,this._stickyMode=null,this._active=!1,n.push(this),this.refresh()}return h(g,[{key:"refresh",value:function(){if(!i&&!this._removed){this._active&&this._deactivate();var c=this._node,g=getComputedStyle(c),h={position:g.position,top:g.top,display:g.display,marginTop:g.marginTop,marginBottom:g.marginBottom,marginLeft:g.marginLeft,marginRight:g.marginRight,cssFloat:g.cssFloat};if(!isNaN(parseFloat(h.top))&&"table-cell"!=h.display&&"none"!=h.display){this._active=!0;var j=c.style.position;"sticky"!=g.position&&"-webkit-sticky"!=g.position||(c.style.position="static");var k=c.parentNode,m=l&&k instanceof ShadowRoot?k.host:k,n=c.getBoundingClientRect(),o=m.getBoundingClientRect(),p=getComputedStyle(m);this._parent={node:m,styles:{position:m.style.position},offsetHeight:m.offsetHeight},this._offsetToWindow={left:n.left,right:b.documentElement.clientWidth-n.right},this._offsetToParent={top:n.top-o.top-e(p.borderTopWidth),left:n.left-o.left-e(p.borderLeftWidth),right:-n.right+o.right-e(p.borderRightWidth)},this._styles={position:j,top:c.style.top,bottom:c.style.bottom,left:c.style.left,right:c.style.right,width:c.style.width,marginTop:c.style.marginTop,marginLeft:c.style.marginLeft,marginRight:c.style.marginRight};var q=e(h.top);this._limits={start:n.top+a.pageYOffset-q,end:o.top+a.pageYOffset+m.offsetHeight-e(p.borderBottomWidth)-c.offsetHeight-q-e(h.marginBottom)};var r=p.position;"absolute"!=r&&"relative"!=r&&(m.style.position="relative"),this._recalcPosition();var s=this._clone={};s.node=b.createElement("div"),d(s.node.style,{width:n.right-n.left+"px",height:n.bottom-n.top+"px",marginTop:h.marginTop,marginBottom:h.marginBottom,marginLeft:h.marginLeft,marginRight:h.marginRight,cssFloat:h.cssFloat,padding:0,border:0,borderSpacing:0,fontSize:"1em",position:"static"}),k.insertBefore(s.node,c),s.docOffsetTop=f(s.node)}}}},{key:"_recalcPosition",value:function(){if(this._active&&!this._removed){var a=m.top<=this._limits.start?"start":m.top>=this._limits.end?"end":"middle";if(this._stickyMode!=a){switch(a){case"start":d(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:this._offsetToParent.top+"px",bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"middle":d(this._node.style,{position:"fixed",left:this._offsetToWindow.left+"px",right:this._offsetToWindow.right+"px",top:this._styles.top,bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"end":d(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:"auto",bottom:0,width:"auto",marginLeft:0,marginRight:0})}this._stickyMode=a}}}},{key:"_fastCheck",value:function(){this._active&&!this._removed&&(Math.abs(f(this._clone.node)-this._clone.docOffsetTop)>1||Math.abs(this._parent.node.offsetHeight-this._parent.offsetHeight)>1)&&this.refresh()}},{key:"_deactivate",value:function(){var a=this;this._active&&!this._removed&&(this._clone.node.parentNode.removeChild(this._clone.node),delete this._clone,d(this._node.style,this._styles),delete this._styles,n.some(function(b){return b!==a&&b._parent&&b._parent.node===a._parent.node})||d(this._parent.node.style,this._parent.styles),delete this._parent,this._stickyMode=null,this._active=!1,delete this._offsetToWindow,delete this._offsetToParent,delete this._limits)}},{key:"remove",value:function(){var a=this;this._deactivate(),n.some(function(b,c){if(b._node===a._node)return n.splice(c,1),!0}),this._removed=!0}}]),g}(),p={stickies:n,Sticky:o,forceSticky:function(){i=!1,g(),this.refreshAll()},addOne:function(a){if(!(a instanceof HTMLElement)){if(!a.length||!a[0])return;a=a[0]}for(var b=0;b<n.length;b++)if(n[b]._node===a)return n[b];return new o(a)},add:function(a){if(a instanceof HTMLElement&&(a=[a]),a.length){for(var b=[],c=function(c){var d=a[c];return d instanceof HTMLElement?n.some(function(a){if(a._node===d)return b.push(a),!0})?"continue":void b.push(new o(d)):(b.push(void 0),"continue")},d=0;d<a.length;d++){c(d)}return b}},refreshAll:function(){n.forEach(function(a){return a.refresh()})},removeOne:function(a){if(!(a instanceof HTMLElement)){if(!a.length||!a[0])return;a=a[0]}n.some(function(b){if(b._node===a)return b.remove(),!0})},remove:function(a){if(a instanceof HTMLElement&&(a=[a]),a.length)for(var b=function(b){var c=a[b];n.some(function(a){if(a._node===c)return a.remove(),!0})},c=0;c<a.length;c++)b(c)},removeAll:function(){for(;n.length;)n[0].remove()}};i||g(),"undefined"!=typeof module&&module.exports?module.exports=p:j&&(a.Stickyfill=p)}(window,document);
	
	/*! npm.im/iphone-inline-video 2.2.2 */
	var enableInlineVideo=function(){"use strict";/*! npm.im/intervalometer */
	function e(e,i,n,r){function t(n){d=i(t,r),e(n-(a||n)),a=n}var d,a;return{start:function(){d||t(0)},stop:function(){n(d),d=null,a=0}}}function i(i){return e(i,requestAnimationFrame,cancelAnimationFrame)}function n(e,i,n){function r(r){n&&!n(e,i)||r.stopImmediatePropagation()}return e.addEventListener(i,r),r}function r(e,i,n,r){function t(){return n[i]}function d(e){n[i]=e}r&&d(e[i]),Object.defineProperty(e,i,{get:t,set:d})}function t(e,i,n){n.addEventListener(i,function(){return e.dispatchEvent(new Event(i))})}function d(e,i){Promise.resolve().then(function(){e.dispatchEvent(new Event(i))})}function a(e){var i=new Audio;return t(e,"play",i),t(e,"playing",i),t(e,"pause",i),i.crossOrigin=e.crossOrigin,i.src=e.src||e.currentSrc||"data:",i}function u(e,i,n){(m||0)+200<Date.now()&&(e[h]=!0,m=Date.now()),n||(e.currentTime=i),k[++T%3]=100*i|0}function o(e){return e.driver.currentTime>=e.video.duration}function s(e){var i=this;i.video.readyState>=i.video.HAVE_FUTURE_DATA?(i.hasAudio||(i.driver.currentTime=i.video.currentTime+e*i.video.playbackRate/1e3,i.video.loop&&o(i)&&(i.driver.currentTime=0)),u(i.video,i.driver.currentTime)):i.video.networkState===i.video.NETWORK_IDLE&&0===i.video.buffered.length&&i.video.load(),i.video.ended&&(delete i.video[h],i.video.pause(!0))}function c(){var e=this,i=e[g];if(e.webkitDisplayingFullscreen)return void e[E]();"data:"!==i.driver.src&&i.driver.src!==e.src&&(u(e,0,!0),i.driver.src=e.src),e.paused&&(i.paused=!1,0===e.buffered.length&&e.load(),i.driver.play(),i.updater.start(),i.hasAudio||(d(e,"play"),i.video.readyState>=i.video.HAVE_ENOUGH_DATA&&d(e,"playing")))}function v(e){var i=this,n=i[g];n.driver.pause(),n.updater.stop(),i.webkitDisplayingFullscreen&&i[w](),n.paused&&!e||(n.paused=!0,n.hasAudio||d(i,"pause"),i.ended&&!i.webkitDisplayingFullscreen&&(i[h]=!0,d(i,"ended")))}function p(e,n){var r={};e[g]=r,r.paused=!0,r.hasAudio=n,r.video=e,r.updater=i(s.bind(r)),n?r.driver=a(e):(e.addEventListener("canplay",function(){e.paused||d(e,"playing")}),r.driver={src:e.src||e.currentSrc||"data:",muted:!0,paused:!0,pause:function(){r.driver.paused=!0},play:function(){r.driver.paused=!1,o(r)&&u(e,0)},get ended(){return o(r)}}),e.addEventListener("emptied",function(){var i=!r.driver.src||"data:"===r.driver.src;r.driver.src&&r.driver.src!==e.src&&(u(e,0,!0),r.driver.src=e.src,i||!n&&e.autoplay?r.driver.play():r.updater.stop())},!1),e.addEventListener("webkitbeginfullscreen",function(){e.paused?n&&0===r.driver.buffered.length&&r.driver.load():(e.pause(),e[E]())}),n&&(e.addEventListener("webkitendfullscreen",function(){r.driver.currentTime=e.currentTime}),e.addEventListener("seeking",function(){k.indexOf(100*e.currentTime|0)<0&&(r.driver.currentTime=e.currentTime)}))}function l(e){var i=e[h];return delete e[h],!e.webkitDisplayingFullscreen&&!i}function f(e){var i=e[g];e[E]=e.play,e[w]=e.pause,e.play=c,e.pause=v,r(e,"paused",i.driver),r(e,"muted",i.driver,!0),r(e,"playbackRate",i.driver,!0),r(e,"ended",i.driver),r(e,"loop",i.driver,!0),n(e,"seeking",function(e){return!e.webkitDisplayingFullscreen}),n(e,"seeked",function(e){return!e.webkitDisplayingFullscreen}),n(e,"timeupdate",l),n(e,"ended",l)}function y(e,i){if(void 0===i&&(i={}),!e[g]){if(!i.everywhere){if(!b)return;if(!(i.iPad||i.ipad?/iPhone|iPod|iPad/:/iPhone|iPod/).test(navigator.userAgent))return}e.pause();var n=e.autoplay;e.autoplay=!1,p(e,!e.muted),f(e),e.classList.add("IIV"),e.muted&&n&&(e.play(),e.addEventListener("playing",function i(){e.autoplay=!0,e.removeEventListener("playing",i)})),/iPhone|iPod|iPad/.test(navigator.platform)||console.warn("iphone-inline-video is not guaranteed to work in emulated environments")}}var m,b="object"==typeof document&&"object-fit"in document.head.style&&!matchMedia("(-webkit-video-playable-inline)").matches,g="fregante:iphone-inline-video",h="fregante:iphone-inline-video:event",E="fregante:iphone-inline-video:nativeplay",w="fregante:iphone-inline-video:nativepause",k=[],T=0;return y}();

	//-------------- GENERIC FUNCTIONS
	//cookies
	function createCookie(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}

	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}

	function eraseCookie(name) {
		createCookie(name,"",-1);
	}
	
	/**
	 * Like jQuery's slideDown/slideUp function - uses CSS3 transitions
	 * @param  {Node} elem Element to show and hide
	 */
	function slideDown(elem) {
		var h = 0;
		elem.children.forEach(function(elt){
			h = h + elt.getBoundingClientRect().height;
		});
		elem.style.maxHeight = h + 'px';
	}
	function slideUp(elem) {
		elem.style.maxHeight = '0';
	}
	
	//flickity carousels
	var carouselArrow = 'M30.621,50.037l43.137,44.106l-5.202,5.323L20.21,50.037L68.556,0.61l5.202,5.322L30.621,50.037z';
	function slidesSameHeight(elem){
		var max = 0;
		elem.querySelectorAll('.slide').forEach(function(elt){
			var h = elt.offsetHeight;
			max = (h > max) ? h : max;
		});
		elem.querySelectorAll('.slide').forEach(function(elt){
			elt.style.height = max + 'px';
		});
		elem.style.height = max + 'px';
	};
	function initCarousel(item, adaptH, responsive, dots, forceHeight, autoplay){
		if(Flickity.data(item)){
			Flickity.data(item).destroy();
		}
		var flick = new Flickity(item, {
			cellAlign: 'left',
			wrapAround: 'fill',
			adaptiveHeight: adaptH,
			pageDots: dots,
			groupCells: true,
			autoPlay: autoplay,
			watchCSS: responsive,
			arrowShape: carouselArrow,
			contain: true
		});
		if(forceHeight){
			slidesSameHeight(item);
			window.addEventListener('resizeEnd', function() {
				slidesSameHeight(item);
			});
		}
		//masquer les dots si pas nécessaires
		if(dots){
			if(item.querySelectorAll('.dot').length <= 1){
				item.querySelector('.flickity-page-dots').style.display = 'none';
				item.classList.remove('is-draggable');
			}
		}
		//rajout texte dans next/prev
		if(item.getAttribute('data-next')){
			var texteNext = document.createElement('p');
			texteNext.innerHTML = item.getAttribute('data-next');
			texteNext.classList.add('txt');
			item.querySelector('.next').appendChild(texteNext);
		}
		if(item.getAttribute('data-prev')){
			var textePrev = document.createElement('p');
			textePrev.innerHTML = item.getAttribute('data-prev');
			textePrev.classList.add('txt');
			item.querySelector('.previous').appendChild(textePrev);
		}
	}
	function carouselInit(){
		if(document.querySelectorAll('.flickity-carousel').length){
			document.querySelectorAll('.flickity-carousel').forEach(function(elt){
				var autoplay = elt.getAttribute('data-autoplay') ? parseInt(elt.getAttribute('data-autoplay')) : false;
				var w = elt.querySelectorAll('.slide').length || elt.querySelectorAll('.carouslide').length;
				var min = elt.getAttribute('data-min') ? parseInt(elt.getAttribute('data-min')) : 0;
				if(w > min){
					initCarousel(elt, true, false, false, false, autoplay);
				}
			});
		}
	};
	//ajaxCall
	function ajaxCall(url, params, method, callback){
		var xhr = new XMLHttpRequest();
		var hurle = (method.toLowerCase() === 'get') ? url + '?' + params : url;
		xhr.open(method, hurle);
		//xhr.responseType = 'document';
		var postparams = (method.toLowerCase() === 'post') ? params : null;
		xhr.send(postparams);
		xhr.onreadystatechange = function () {
			var DONE = 4; // readyState 4 means the request is done.
			var OK = 200; // status 200 is a successful return.
			if (xhr.readyState === DONE) {
				if (xhr.status === OK) {
					//console.log(xhr.responseText); // 'This is the returned text.'
					callback(xhr.responseText);
				}
				else {
					console.log('Error: ' + xhr.status); // An error occurred during the request.
				}
			}
		};
	}
	//valid forms
	function validateEmail(email) {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}
	var regExpressions = {
		'pwd': /^[a-zA-Z0-9]{5,}$/,      /* minimum 5 caractères alphanumériques */
		'zipcode' : /^[0-9]{5}$/,      /* 5 chiffres */
		'phoneNumber' : /^[0-9]{10,}$/,      /* minimum 10 chiffres */
		'integer': /^\d+$/,      /* pas de caractères alpha */
		'email': /\S+@\S+\.\S+/,      /* e-mail simplifié */
		'empty':/^\s*$/,
		//'date': /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/	/* dd/mm/yyy 01 à 31/01 à 12/ 1900 à 2099*/,
		'date': /^^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/	/* yyyy-mm-dd */
	}
	var isEmail = function(string){
		//returns true if string is email
		//return regExpressions.email.test(string);
		return validateEmail(string);
	}
	var isEmpty = function(string){
		//returns true if string is empty
		return regExpressions.empty.test(string);
	}
	var isNumber = function(string){
		//returns true if string is a number
		return regExpressions.integer.test(string);
	}
	var isDate = function(string){
		//returns true if string is a date
		return regExpressions.date.test(string);
	}
	// Function to animate the scroll
	var runScrollAnimation;
	var smoothScroll = function (anchor, duration) {
		// Calculate how far and how fast to scroll
		var startLocation = window.pageYOffset;
		var endLocation = anchor.getBoundingClientRect().top + startLocation;
		var distance = endLocation - startLocation;
		var increments = distance/(duration/16);
		var checkAnimation;
		var w = window,
			d = document,
			e = d.documentElement,
			g = d.getElementsByTagName('body')[0];

		// Scroll the page by an increment, and check if it's time to stop
		var animateScroll = function () {
			window.scrollBy(0, increments);
			runScrollAnimation = requestAnimationFrame(animateScroll);
			checkAnimation();
		};
		var travelled;
		var docHeight = Math.max(g.scrollHeight, e.scrollHeight, g.offsetHeight, e.offsetHeight, g.clientHeight, e.clientHeight);
		var windowHeight = w.innerHeight||e.clientHeight||g.clientHeight;
		// If scrolling down
		if ( increments >= 0 ) {
			// Stop animation when you reach the anchor OR the bottom of the page
			checkAnimation = function () {
				travelled = window.pageYOffset;
				if ( (travelled >= (endLocation - increments)) || ((windowHeight + travelled) >= docHeight) ) {
					cancelAnimationFrame(runScrollAnimation);
					window.scrollTo(0, endLocation);
					scrollingFromClick = false;
				}
			};
		}
		// If scrolling up
		else {
			// Stop animation when you reach the anchor OR the top of the page
			checkAnimation = function () {
				travelled = window.pageYOffset;
				if ( travelled <= (endLocation + increments || 0) ) {
					cancelAnimationFrame(runScrollAnimation);
					window.scrollTo(0, endLocation);
					scrollingFromClick = false;
				}
			};
		}
		// Loop the animation function
		runScrollAnimation = requestAnimationFrame(animateScroll);
	};
	
	//adapt background-image mobile/desktop
	var ex, to,
		currentsize = 'mobile';
	function adapteBgs() {
		if (windowWidth > 700) {
			if (currentsize == 'desktop') {
				return
			}
			currentsize = 'desktop';
		} else {
			if (currentsize == 'mobile') {
				return
			}
			currentsize = 'mobile';
		}

		if (currentsize == 'desktop') {
			ex = 'mobile';
			to = 'desktop';
		} else {
			ex = 'desktop';
			to = 'mobile';
		}
		document.querySelectorAll('[data-responsive="true"]').forEach(function(elt){
			var bgi = elt.style.backgroundImage;
			var nioubgi = bgi.replace(ex, to);
			elt.style.backgroundImage = nioubgi;
		});
	}
	adapteBgs();
	window.addEventListener('resizeEnd', function() {
		//console.log("resizeEnd");
		adapteBgs();
	});
		
	//is mobile
	var isMobile = { 
		Android: function() { return navigator.userAgent.match(/Android/i); }, 
		BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); }, 
		iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, 
		Opera: function() { return navigator.userAgent.match(/Opera Mini/i); }, 
		Windows: function() { return navigator.userAgent.match(/IEMobile/i); }, 
		any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } 
	};
	
	//browsers detection
	var isiPad = navigator.userAgent.match(/iPad/i) != null;
	var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
	var isMac = navigator.platform.indexOf('Mac') > -1;
	var isIEorEDGE = navigator.appName == 'Microsoft Internet Explorer' || (navigator.appName == "Netscape" && navigator.appVersion.indexOf('Edge') > -1);
	//triggerEvent
	function triggerEvent(el, type){
	   if ('createEvent' in document) {
			var e = document.createEvent('HTMLEvents');
			e.initEvent(type, false, true);
			el.dispatchEvent(e);
		}
		else {
			var e = document.createEventObject();
			e.eventType = type;
			el.fireEvent('on' + e.eventType, e);
		}
	}
		
	//wait until scroll is done
	window.addEventListener('scroll', function() {
		if(this.scrollTO) clearTimeout(this.scrollTO);
		this.scrollTO = setTimeout(function() {
			triggerEvent(this, 'scrollEnd');
		}, 500);
	}, false);
	/*window.addEventListener('scrollEnd', function() {
		console.log("scrollEnd");
	});*/

	//wait until resize is done
	window.addEventListener('resize', function() {
		if(this.resizeTO) clearTimeout(this.resizeTO);
		this.resizeTO = setTimeout(function() { 
			triggerEvent(this, 'resizeEnd');
		}, 500);
	});
	window.addEventListener('resizeEnd', function() {
		//console.log("resizeEnd");
		windowHeight = w.innerHeight||e.clientHeight||g.clientHeight;
		windowWidth = w.innerWidth||e.clientWidth||g.clientWidth;
	});
	
	//Baffle text
	//https://camwiegert.github.io/baffle/
	var animText = function(){
		var el = document.querySelectorAll('.js-anim-text');
		if(el){
			el.forEach(function(elt){
				if(elt.getAttribute('data-text') && elt.getAttribute('data-text') !== ''){
					elt.innerHTML = elt.getAttribute('data-text');
				}
			});
			var b = baffle('.js-anim-text', {
				//characters: 'abcdefghijklmnopqrstuvwxyz',
				characters: '1234567890AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz~!@#$%^&*()-+=[]{}|;:,./<>?',
				speed: 75
			});
			b.reveal(700);
		}
	};
	
	//IntersectionObserver
	//XLObserver(elt, animTextRevealCallback, .1, onlyOnce);
	var XLObserver = function(elt, callback, threshold, onlyOnce){
		var thresholdVal;
		var obs;
		function createXLObserver() {
			thresholdVal = (threshold) ? threshold : 1; // 0 dès que l'elt atteint le viewport, 1: l'elt est entièrement dans le viewport, .5: à moitié visible
			var options = {
				root: null,
				rootMargin: "0px",
				threshold: thresholdVal
			};
			obs = new IntersectionObserver(handleIntersect, options);
			elt.prevRatio = 0;
			obs.observe(elt);
		}
		function killObserver(){
			obs.unobserve(elt);
		}
		
		createXLObserver();
		/*window.addEventListener('resizeEnd', function() {
			killObserver();
			createXLObserver();
		});*/
		function handleIntersect(entries, observer) {
			entries.forEach(
				function(entry) {
					//entry.boundingClientRect, entry.intersectionRatio, entry.intersectionRect, entry.isIntersecting, entry.rootBounds, entry.target, entry.time
					var elt = entry.target;
					if (entry.intersectionRatio > entry.target.prevRatio) {
						callback(elt);
						if(onlyOnce){
							killObserver();
						}
					}
					else {
						elt.classList.remove('revealed');
					}
					entry.target.prevRatio = entry.intersectionRatio;
				}
			);
		}
	};
	
	function animRevealCallback(elt){
		elt.classList.add('revealed');
	};
	function animRevealInit(){
		var elReveal = document.querySelectorAll('.js-reveal');
		if(elReveal){
			elReveal.forEach(function(elt){
				XLObserver(elt, animRevealCallback, .25, false);
			});
		}
	};
})();