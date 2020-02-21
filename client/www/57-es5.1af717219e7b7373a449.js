function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function asyncGeneratorStep(e,t,n,i,r,a,o){try{var s=e[a](o),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(i,r)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var a=e.apply(t,n);function o(e){asyncGeneratorStep(a,i,r,o,s,"next",e)}function s(e){asyncGeneratorStep(a,i,r,o,s,"throw",e)}o(void 0)}))}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{GEuc:function(e,t,n){"use strict";n.r(t),n.d(t,"ion_menu",(function(){return l})),n.d(t,"ion_menu_button",(function(){return g})),n.d(t,"ion_menu_controller",(function(){return v})),n.d(t,"ion_menu_toggle",(function(){return y}));var i=n("dSyh"),r=n("AfW+"),a=n("aiEM"),o=(n("+4pY"),n("mUkt")),s=n("930v"),u=n("Dl6n"),c=n("qaSm"),l=function(){function e(t){_classCallCheck(this,e),Object(i.l)(this,t),this.lastOnEnd=0,this.blocker=o.GESTURE_CONTROLLER.createBlocker({disableScroll:!0}),this.mode=Object(i.e)(this),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50,this.ionWillOpen=Object(i.d)(this,"ionWillOpen",7),this.ionWillClose=Object(i.d)(this,"ionWillClose",7),this.ionDidOpen=Object(i.d)(this,"ionDidOpen",7),this.ionDidClose=Object(i.d)(this,"ionDidClose",7),this.ionMenuChange=Object(i.d)(this,"ionMenuChange",7)}var t,u,l,b,g;return _createClass(e,[{key:"typeChanged",value:function(e,t){var n=this.contentEl;n&&(void 0!==t&&n.classList.remove("menu-content-".concat(t)),n.classList.add("menu-content-".concat(e)),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}},{key:"disabledChanged",value:function(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}},{key:"sideChanged",value:function(){this.isEndSide=Object(a.h)(this.side)}},{key:"swipeGestureChanged",value:function(){this.updateState()}},{key:"connectedCallback",value:(g=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t,i,a=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===this.type&&(this.type=r.b.get("menuType","ios"===this.mode?"reveal":"overlay")),t=this.el.parentNode,void 0===this.contentId&&console.warn('[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the "contentId" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId="my-content"></ion-menu>\n  <div id="my-content">...</div>\n'),!(i=void 0!==this.contentId?document.getElementById(this.contentId):t&&t.querySelector&&t.querySelector("[main]"))||!i.tagName){e.next=17;break}return this.contentEl=i,i.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),s.a._register(this),e.next=12,Promise.resolve().then(n.bind(null,"mUkt"));case 12:e.t0={el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,canStart:function(e){return a.canStart(e)},onWillStart:function(){return a.onWillStart()},onStart:function(){return a.onStart()},onMove:function(e){return a.onMove(e)},onEnd:function(e){return a.onEnd(e)}},this.gesture=e.sent.createGesture(e.t0),this.updateState(),e.next=18;break;case 17:console.error('Menu: must have a "content" element to listen for drag events on.');case 18:case"end":return e.stop()}}),e,this)}))),function(){return g.apply(this,arguments)})},{key:"componentDidLoad",value:(b=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen}),this.updateState();case 1:case"end":return e.stop()}}),e,this)}))),function(){return b.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){this.blocker.destroy(),s.a._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0}},{key:"onSplitPaneChanged",value:function(e){this.isPaneVisible=e.detail.isPane(this.el),this.updateState()}},{key:"onBackdropClick",value:function(e){this._isOpen&&this.lastOnEnd<e.timeStamp-100&&e.composedPath&&!e.composedPath().includes(this.menuInnerEl)&&(e.preventDefault(),e.stopPropagation(),this.close())}},{key:"isOpen",value:function(){return Promise.resolve(this._isOpen)}},{key:"isActive",value:function(){return Promise.resolve(this._isActive())}},{key:"open",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.setOpen(!0,e)}},{key:"close",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.setOpen(!1,e)}},{key:"toggle",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.setOpen(!this._isOpen,e)}},{key:"setOpen",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return s.a._setOpen(this,e,t)}},{key:"_setOpen",value:(l=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var n,i=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=!(i.length>1&&void 0!==i[1])||i[1],e.t0=!this._isActive()||this.isAnimating||t===this._isOpen,e.t0){e.next=10;break}return this.beforeAnimation(t),e.next=6,this.loadAnimation();case 6:return e.next=8,this.startAnimation(t,n);case 8:this.afterAnimation(t),e.t0=0;case 10:return e.abrupt("return",!e.t0);case 11:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)})},{key:"loadAnimation",value:(u=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.menuInnerEl.offsetWidth,e.t0=t===this.width&&void 0!==this.animation,e.t0){e.next=10;break}return this.width=t,this.animation&&(this.animation.destroy(),this.animation=void 0),e.next=7,s.a._createAnimation(this.type,this);case 7:this.animation=e.sent,r.b.getBoolean("animated",!0)||this.animation.duration(0),this.animation.fill("both");case 10:case"end":return e.stop()}}),e,this)}))),function(){return u.apply(this,arguments)})},{key:"startAnimation",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(t,n){var i,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=!t,r=this.animation.direction(i?"reverse":"normal").easing(i?"cubic-bezier(0.4, 0.0, 0.6, 1)":"cubic-bezier(0.0, 0.0, 0.2, 1)"),!n){e.next=6;break}return e.next=4,r.playAsync();case 4:e.next=7;break;case 6:r.playSync();case 7:case"end":return e.stop()}}),e,this)}))),function(e,n){return t.apply(this,arguments)})},{key:"_isActive",value:function(){return!this.disabled&&!this.isPaneVisible}},{key:"canSwipe",value:function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}},{key:"canStart",value:function(e){return!!this.canSwipe()&&(!!this._isOpen||!s.a._getOpenSync()&&d(window,e.currentX,this.isEndSide,this.maxEdgeStart))}},{key:"onWillStart",value:function(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()}},{key:"onStart",value:function(){this.isAnimating&&this.animation?this.animation.direction(this._isOpen?"reverse":"normal").progressStart(!0):Object(a.b)(!1,"isAnimating has to be true")}},{key:"onMove",value:function(e){if(this.isAnimating&&this.animation){var t=h(e.deltaX,this._isOpen,this.isEndSide);this.animation.progressStep(t/this.width)}else Object(a.b)(!1,"isAnimating has to be true")}},{key:"onEnd",value:function(e){var t=this;if(this.isAnimating&&this.animation){var n=this._isOpen,i=this.isEndSide,r=h(e.deltaX,n,i),o=this.width,s=r/o,u=e.velocityX,l=o/2,d=u>=0&&(u>.2||e.deltaX>l),p=u<=0&&(u<-.2||e.deltaX<-l),m=n?i?d:p:i?p:d,f=!n&&m;n&&!m&&(f=!0),this.lastOnEnd=e.timeStamp;var b=m?.001:-.001,g=s<=0?.01:s;b+=Object(c.b)(new c.a(0,0),new c.a(.4,0),new c.a(.6,1),new c.a(1,1),Object(a.c)(0,g,1)),this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish((function(){return t.afterAnimation(f)}),{oneTimeCallback:!0}).progressEnd(m?1:0,b,300)}else Object(a.b)(!1,"isAnimating has to be true")}},{key:"beforeAnimation",value:function(e){Object(a.b)(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(p),this.backdropEl&&this.backdropEl.classList.add(m),this.blocker.block(),this.isAnimating=!0,e?this.ionWillOpen.emit():this.ionWillClose.emit()}},{key:"afterAnimation",value:function(e){Object(a.b)(this.isAnimating,"_before() should be called while animating"),this._isOpen=e,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),e?(this.contentEl&&this.contentEl.classList.add(f),this.ionDidOpen.emit()):(this.el.classList.remove(p),this.contentEl&&this.contentEl.classList.remove(f),this.backdropEl&&this.backdropEl.classList.remove(m),this.animation&&this.animation.stop(),this.ionDidClose.emit())}},{key:"updateState",value:function(){var e=this._isActive();this.gesture&&this.gesture.setDisabled(!e||!this.swipeGesture),!e&&this._isOpen&&this.forceClosing(),this.disabled||s.a._setActiveMenu(this),Object(a.b)(!this.isAnimating,"can not be animating")}},{key:"forceClosing",value:function(){Object(a.b)(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.direction("reverse").playSync(),this.afterAnimation(!1)}},{key:"render",value:function(){var e,t=this,n=this.isEndSide,r=this.type,a=this.disabled,o=this.mode,s=this.isPaneVisible;return Object(i.i)(i.a,{role:"navigation",class:(e={},_defineProperty(e,o,!0),_defineProperty(e,"menu-type-".concat(r),!0),_defineProperty(e,"menu-enabled",!a),_defineProperty(e,"menu-side-end",n),_defineProperty(e,"menu-side-start",!n),_defineProperty(e,"menu-pane-visible",s),e)},Object(i.i)("div",{class:"menu-inner",ref:function(e){return t.menuInnerEl=e}},Object(i.i)("slot",null)),Object(i.i)("ion-backdrop",{ref:function(e){return t.backdropEl=e},class:"menu-backdrop",tappable:!1,stopPropagation:!1}))}},{key:"el",get:function(){return Object(i.f)(this)}}],[{key:"watchers",get:function(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}}},{key:"style",get:function(){return":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}"}}]),e}(),h=function(e,t,n){return Math.max(0,t!==n?-e:e)},d=function(e,t,n,i){return n?t>=e.innerWidth-i:t<=i},p="show-menu",m="show-backdrop",f="menu-content-open",b=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get(t);case 2:if(n=e.sent,e.t0=!n,e.t0){e.next=8;break}return e.next=7,n.isActive();case 7:e.t0=!e.sent;case 8:return e.abrupt("return",!e.t0);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){function e(t){var n=this;_classCallCheck(this,e),Object(i.l)(this,t),this.visible=!1,this.disabled=!1,this.autoHide=!0,this.type="button",this.onClick=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.a.toggle(n.menu));case 1:case"end":return e.stop()}}),e)})))}var t;return _createClass(e,[{key:"componentDidLoad",value:function(){this.visibilityChanged()}},{key:"visibilityChanged",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(this.menu);case 2:this.visible=e.sent;case 3:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this.color,t=this.disabled,n=Object(i.e)(this),a=r.b.get("menuIcon","menu"),o=this.autoHide&&!this.visible,s={type:this.type};return Object(i.i)(i.a,{onClick:this.onClick,"aria-disabled":t?"true":null,"aria-hidden":o?"true":null,class:Object.assign(Object.assign(_defineProperty({},n,!0),Object(u.a)(e)),{button:!0,"menu-button-hidden":o,"menu-button-disabled":t,"ion-activatable":!0,"ion-focusable":!0})},Object(i.i)("button",Object.assign({},s,{disabled:t,class:"button-native"}),Object(i.i)("slot",null,Object(i.i)("ion-icon",{icon:a,mode:n,lazy:!1})),"md"===n&&Object(i.i)("ion-ripple-effect",{type:"unbounded"})))}}],[{key:"style",get:function(){return":host{--background:transparent;--color-focused:var(--color);--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:.5;pointer-events:none}@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host-context(ion-toolbar:not(.ion-color)){color:var(--ion-toolbar-color,var(--color))}:host{--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--border-radius:4px;--color:var(--ion-color-primary,#3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.activated){opacity:.4}@media (any-hover:hover){:host(:hover){opacity:.6}}:host(.ion-color.ion-focused) .button-native{background:rgba(var(--ion-color-base-rgb),.1)}"}}]),e}(),v=function(){function e(t){_classCallCheck(this,e),Object(i.l)(this,t)}var t;return _createClass(e,[{key:"open",value:function(e){return s.a.open(e)}},{key:"close",value:function(e){return s.a.close(e)}},{key:"toggle",value:function(e){return s.a.toggle(e)}},{key:"enable",value:function(e,t){return s.a.enable(e,t)}},{key:"swipeGesture",value:function(e,t){return s.a.swipeGesture(e,t)}},{key:"isOpen",value:function(e){return s.a.isOpen(e)}},{key:"isEnabled",value:function(e){return s.a.isEnabled(e)}},{key:"get",value:function(e){return s.a.get(e)}},{key:"getOpen",value:function(){return s.a.getOpen()}},{key:"getMenus",value:function(){return s.a.getMenus()}},{key:"isAnimating",value:function(){return s.a.isAnimating()}},{key:"registerAnimation",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.a.registerAnimation(t,n));case 1:case"end":return e.stop()}}),e)}))),function(e,n){return t.apply(this,arguments)})}]),e}(),y=function(){function e(t){var n=this;_classCallCheck(this,e),Object(i.l)(this,t),this.visible=!1,this.autoHide=!0,this.onClick=function(){return s.a.toggle(n.menu)}}var t;return _createClass(e,[{key:"connectedCallback",value:function(){this.visibilityChanged()}},{key:"visibilityChanged",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(this.menu);case 2:this.visible=e.sent;case 3:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){var e,t=Object(i.e)(this),n=this.autoHide&&!this.visible;return Object(i.i)(i.a,{onClick:this.onClick,"aria-hidden":n?"true":null,class:(e={},_defineProperty(e,t,!0),_defineProperty(e,"menu-toggle-hidden",n),e)},Object(i.i)("slot",null))}}],[{key:"style",get:function(){return":host(.menu-toggle-hidden){display:none}"}}]),e}()}}]);