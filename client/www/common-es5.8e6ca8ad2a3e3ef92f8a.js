function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}function _defineProperty(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function asyncGeneratorStep(e,n,t,r,a,o,i){try{var u=e[o](i),c=u.value}catch(s){return void t(s)}u.done?n(c):Promise.resolve(c).then(r,a)}function _asyncToGenerator(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function i(e){asyncGeneratorStep(o,r,a,i,u,"next",e)}function u(e){asyncGeneratorStep(o,r,a,i,u,"throw",e)}i(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+veT":function(e,n,t){"use strict";t.d(n,"a",(function(){return y})),t.d(n,"b",(function(){return x})),t.d(n,"c",(function(){return g})),t.d(n,"d",(function(){return w})),t.d(n,"e",(function(){return o}));var r=t("dSyh"),a=t("kBU6"),o=function(e){return new Promise((function(n,t){Object(r.m)((function(){i(e),u(e).then((function(t){t.animation&&t.animation.destroy(),c(e),n(t)}),(function(n){c(e),t(n)}))}))}))},i=function(e){var n=e.enteringEl,t=e.leavingEl;k(n,t,e.direction),e.showGoBack?n.classList.add("can-go-back"):n.classList.remove("can-go-back"),w(n,!1),t&&w(t,!1)},u=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(n);case 2:return t=e.sent,e.abrupt("return",t?f(t,n):l(n));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),c=function(e){var n=e.leavingEl;e.enteringEl.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")},s=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.leavingEl||!n.animated||0===n.duration){e.next=16;break}if(!n.animationBuilder){e.next=5;break}e.t0=n.animationBuilder,e.next=15;break;case 5:if("ios"!==n.mode){e.next=11;break}return e.next=8,t.e(101).then(t.bind(null,"Lu00"));case 8:e.t1=e.sent.iosTransitionAnimation,e.next=14;break;case 11:return e.next=13,t.e(102).then(t.bind(null,"wxTh"));case 13:e.t1=e.sent.mdTransitionAnimation;case 14:e.t0=e.t1;case 15:return e.abrupt("return",e.t0);case 16:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(n,r){var a,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(r,!0);case 2:return e.prev=2,e.next=5,t.e(5).then(t.bind(null,"gHMO"));case 5:return o=e.sent,e.next=8,o.create(n,r.baseEl,r);case 8:a=e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),a=n(r.baseEl,r);case 14:return v(r.enteringEl,r.leavingEl),e.next=17,h(a,r);case 17:return i=e.sent,e.abrupt("return",(r.progressCallback&&r.progressCallback(void 0),i&&m(r.enteringEl,r.leavingEl),{hasCompleted:i,animation:a}));case 19:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(n,t){return e.apply(this,arguments)}}(),l=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(n){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.enteringEl,r=n.leavingEl,e.next=3,d(n,!1);case 3:return v(t,r),m(t,r),e.abrupt("return",{hasCompleted:!0});case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(n,t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(void 0!==n.deepWait?n.deepWait:t)?[y(n.enteringEl),y(n.leavingEl)]:[b(n.enteringEl),b(n.leavingEl)],e.next=3,Promise.all(r);case 3:return e.next=5,p(n.viewIsReady,n.enteringEl);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),p=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(n,t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=n,!e.t0){e.next=4;break}return e.next=4,n(t);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),h=function(e,n){var t=n.progressCallback,r=new Promise((function(n){e.onFinish((function(t){"number"==typeof t?n(1===t):void 0!==e.hasCompleted&&n(e.hasCompleted)}))}));return t?(e.progressStart(!0),t(e)):e.play(),r},v=function(e,n){g(n,a.c),g(e,a.a)},m=function(e,n){g(e,a.b),g(n,a.d)},g=function(e,n){if(e){var t=new CustomEvent(n,{bubbles:!1,cancelable:!1});e.dispatchEvent(t)}},b=function(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()},y=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=n)){e.next=12;break}if(e.t0=null!=t.componentOnReady,!e.t0){e.next=8;break}return e.next=6,t.componentOnReady();case 6:e.t1=e.sent,e.t0=null!=e.t1;case 8:if(!e.t0){e.next=10;break}return e.abrupt("return");case 10:return e.next=12,Promise.all(Array.from(t.children).map(y));case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),w=function(e,n){n?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},k=function(e,n,t){void 0!==e&&(e.style.zIndex="back"===t?"99":"101"),void 0!==n&&(n.style.zIndex="100")},x=function(e){return e.classList.contains("ion-page")?e:e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||e}},Dl6n:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return r})),t.d(n,"d",(function(){return u}));var r=function(e,n){return null!==n.closest(e)},a=function(e){return"string"==typeof e&&e.length>0?_defineProperty({"ion-color":!0},"ion-color-".concat(e),!0):void 0},o=function(e){var n={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return n[e]=!0})),n},i=/^[a-z][a-z0-9+\-.]*:/,u=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(n,t,r){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==n||"#"===n[0]||i.test(n)){e.next=4;break}if(!(a=document.querySelector("ion-router"))){e.next=4;break}return e.abrupt("return",(null!=t&&t.preventDefault(),a.push(n,r)));case 4:return e.abrupt("return",!1);case 5:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}()},OL44:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r=function(){function e(n,t){_classCallCheck(this,e),this.changeDetectorRef=n,this.ngZone=t}return _createClass(e,[{key:"transform",value:function(e){var n=this;this.removeTimer();var t=new Date(e),r=new Date,a=Math.round(Math.abs((r.getTime()-t.getTime())/1e3)),o=Number.isNaN(a)?1e3:1e3*this.getSecondsUntilUpdate(a);this.timer=this.ngZone.runOutsideAngular((function(){return"undefined"!=typeof window?window.setTimeout((function(){n.ngZone.run((function(){return n.changeDetectorRef.markForCheck()}))}),o):null}));var i=Math.round(Math.abs(a/60)),u=Math.round(Math.abs(i/60)),c=Math.round(Math.abs(u/24)),s=Math.round(Math.abs(c/30.416)),f=Math.round(Math.abs(c/365));return Number.isNaN(a)?"":a<=45?"a few seconds ago":a<=90?"a minute ago":i<=45?i+" minutes ago":i<=90?"an hour ago":u<=22?u+" hours ago":u<=36?"a day ago":c<=25?c+" days ago":c<=45?"a month ago":c<=345?s+" months ago":c<=545?"a year ago":f+" years ago"}},{key:"ngOnDestroy",value:function(){this.removeTimer()}},{key:"removeTimer",value:function(){this.timer&&(window.clearTimeout(this.timer),this.timer=null)}},{key:"getSecondsUntilUpdate",value:function(e){return e<60?2:e<3600?30:e<86400?300:3600}}]),e}()},YtD4:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r=function(e){try{if("string"!=typeof e||""===e)return e;var n=document.createDocumentFragment(),t=document.createElement("div");n.appendChild(t),t.innerHTML=e,u.forEach((function(e){for(var t=n.querySelectorAll(e),r=t.length-1;r>=0;r--){var i=t[r];i.parentNode?i.parentNode.removeChild(i):n.removeChild(i);for(var u=o(i),c=0;c<u.length;c++)a(u[c])}}));for(var r=o(n),i=0;i<r.length;i++)a(r[i]);var c=document.createElement("div");c.appendChild(n);var s=c.querySelector("div");return null!==s?s.innerHTML:c.innerHTML}catch(f){return console.error(f),""}},a=function e(n){if(!n.nodeType||1===n.nodeType){for(var t=n.attributes.length-1;t>=0;t--){var r=n.attributes.item(t),a=r.name;if(i.includes(a.toLowerCase())){var u=r.value;null!=u&&u.toLowerCase().includes("javascript:")&&n.removeAttribute(a)}else n.removeAttribute(a)}for(var c=o(n),s=0;s<c.length;s++)e(c[s])}},o=function(e){return null!=e.children?e.children:e.childNodes},i=["class","id","href","src","name","slot"],u=["script","style","iframe","meta","link","object","embed"]},m9yc:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return a}));var r=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(n,t,r,a,o){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=2;break}return e.abrupt("return",n.attachViewToDom(t,r,o,a));case 2:if("string"==typeof r||r instanceof HTMLElement){e.next=4;break}throw new Error("framework delegate is missing");case 4:if(i="string"==typeof r?t.ownerDocument&&t.ownerDocument.createElement(r):r,a&&a.forEach((function(e){return i.classList.add(e)})),o&&Object.assign(i,o),t.appendChild(i),e.t0=i.componentOnReady,!e.t0){e.next=12;break}return e.next=12,i.componentOnReady();case 12:return e.abrupt("return",i);case 13:case"end":return e.stop()}}),e)})));return function(n,t,r,a,o){return e.apply(this,arguments)}}(),a=function(e,n){if(n){if(e)return e.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},"nN+u":function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return r}));var r=function(e,n,t){var r=new MutationObserver((function(e){t(a(e,n))}));return r.observe(e,{childList:!0,subtree:!0}),r},a=function(e,n){var t;return e.forEach((function(e){for(var r=0;r<e.addedNodes.length;r++)t=o(e.addedNodes[r],n)||t})),t},o=function(e,n){if(1===e.nodeType)return(e.tagName===n.toUpperCase()?[e]:Array.from(e.querySelectorAll(n))).find((function(e){return!0===e.checked}))}},opz7:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return i})),t.d(n,"d",(function(){return r}));var r=function(){var e=window.TapticEngine;e&&e.selection()},a=function(){var e=window.TapticEngine;e&&e.gestureSelectionStart()},o=function(){var e=window.TapticEngine;e&&e.gestureSelectionChanged()},i=function(){var e=window.TapticEngine;e&&e.gestureSelectionEnd()}},qaSm:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return a}));var r=function e(n,t){_classCallCheck(this,e),this.x=n,this.y=t},a=function(e,n,t,r,a){var u=i(e.y,n.y,t.y,r.y,a);return o(e.x,n.x,t.x,r.x,u[0])},o=function(e,n,t,r,a){return a*(3*n*Math.pow(a-1,2)+a*(-3*t*a+3*t+r*a))-e*Math.pow(a-1,3)},i=function(e,n,t,r,a){return u((r-=a)-3*(t-=a)+3*(n-=a)-(e-=a),3*t-6*n+3*e,3*n-3*e,e).filter((function(e){return e>=0&&e<=1}))},u=function(e,n,t,r){if(0===e)return function(e,n,t){var r=n*n-4*e*t;return r<0?[]:[(-n+Math.sqrt(r))/(2*e),(-n-Math.sqrt(r))/(2*e)]}(n,t,r);var a=(3*(t/=e)-(n/=e)*n)/3,o=(2*n*n*n-9*n*t+27*(r/=e))/27;if(0===a)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-a),-Math.sqrt(-a)];var i=Math.pow(o/2,2)+Math.pow(a/3,3);if(0===i)return[Math.pow(o/2,.5)-n/3];if(i>0)return[Math.pow(-o/2+Math.sqrt(i),1/3)-Math.pow(o/2+Math.sqrt(i),1/3)-n/3];var u=Math.sqrt(Math.pow(-a/3,3)),c=Math.acos(-o/(2*Math.sqrt(Math.pow(-a/3,3)))),s=2*Math.pow(u,1/3);return[s*Math.cos(c/3)-n/3,s*Math.cos((c+2*Math.PI)/3)-n/3,s*Math.cos((c+4*Math.PI)/3)-n/3]}}}]);