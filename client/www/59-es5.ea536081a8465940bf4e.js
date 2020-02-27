function asyncGeneratorStep(e,t,n,i,r,a,o){try{var s=e[a](o),c=s.value}catch(d){return void n(d)}s.done?t(c):Promise.resolve(c).then(i,r)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var a=e.apply(t,n);function o(e){asyncGeneratorStep(a,i,r,o,s,"next",e)}function s(e){asyncGeneratorStep(a,i,r,o,s,"throw",e)}o(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{GEuc:function(e,t,n){"use strict";n.r(t),n.d(t,"ion_menu",(function(){return u})),n.d(t,"ion_menu_button",(function(){return v})),n.d(t,"ion_menu_controller",(function(){return f})),n.d(t,"ion_menu_toggle",(function(){return w}));var i=n("dSyh"),r=n("AfW+"),a=n("aiEM"),o=(n("+4pY"),n("mUkt")),s=n("930v"),c=n("Dl6n"),d=n("qaSm");const u=class{constructor(e){Object(i.l)(this,e),this.lastOnEnd=0,this.blocker=o.GESTURE_CONTROLLER.createBlocker({disableScroll:!0}),this.mode=Object(i.e)(this),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50,this.ionWillOpen=Object(i.d)(this,"ionWillOpen",7),this.ionWillClose=Object(i.d)(this,"ionWillClose",7),this.ionDidOpen=Object(i.d)(this,"ionDidOpen",7),this.ionDidClose=Object(i.d)(this,"ionDidClose",7),this.ionMenuChange=Object(i.d)(this,"ionMenuChange",7)}typeChanged(e,t){const n=this.contentEl;n&&(void 0!==t&&n.classList.remove("menu-content-".concat(t)),n.classList.add("menu-content-".concat(e)),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}disabledChanged(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}sideChanged(){this.isEndSide=Object(a.h)(this.side)}swipeGestureChanged(){this.updateState()}connectedCallback(){var e=this;return _asyncToGenerator(regeneratorRuntime.mark((function t(){var i,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===e.type&&(e.type=r.b.get("menuType","ios"===e.mode?"reveal":"overlay")),i=e.el.parentNode,void 0===e.contentId&&console.warn('[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the "contentId" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId="my-content"></ion-menu>\n  <div id="my-content">...</div>\n'),!(a=void 0!==e.contentId?document.getElementById(e.contentId):i&&i.querySelector&&i.querySelector("[main]"))||!a.tagName){t.next=17;break}return e.contentEl=a,a.classList.add("menu-content"),e.typeChanged(e.type,void 0),e.sideChanged(),s.a._register(e),t.next=12,Promise.resolve().then(n.bind(null,"mUkt"));case 12:t.t0={el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,canStart:t=>e.canStart(t),onWillStart:()=>e.onWillStart(),onStart:()=>e.onStart(),onMove:t=>e.onMove(t),onEnd:t=>e.onEnd(t)},e.gesture=t.sent.createGesture(t.t0),e.updateState(),t.next=18;break;case 17:console.error('Menu: must have a "content" element to listen for drag events on.');case 18:case"end":return t.stop()}}),t)})))()}componentDidLoad(){var e=this;return _asyncToGenerator(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.ionMenuChange.emit({disabled:e.disabled,open:e._isOpen}),e.updateState();case 1:case"end":return t.stop()}}),t)})))()}disconnectedCallback(){this.blocker.destroy(),s.a._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0}onSplitPaneChanged(e){this.isPaneVisible=e.detail.isPane(this.el),this.updateState()}onBackdropClick(e){this._isOpen&&this.lastOnEnd<e.timeStamp-100&&e.composedPath&&!e.composedPath().includes(this.menuInnerEl)&&(e.preventDefault(),e.stopPropagation(),this.close())}isOpen(){return Promise.resolve(this._isOpen)}isActive(){return Promise.resolve(this._isActive())}open(e=!0){return this.setOpen(!0,e)}close(e=!0){return this.setOpen(!1,e)}toggle(e=!0){return this.setOpen(!this._isOpen,e)}setOpen(e,t=!0){return s.a._setOpen(this,e,t)}_setOpen(e,t=!0){var n=this;return _asyncToGenerator(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(i.t0=!n._isActive()||n.isAnimating||e===n._isOpen,i.t0){i.next=9;break}return n.beforeAnimation(e),i.next=5,n.loadAnimation();case 5:return i.next=7,n.startAnimation(e,t);case 7:n.afterAnimation(e),i.t0=0;case 9:return i.abrupt("return",!i.t0);case 10:case"end":return i.stop()}}),i)})))()}loadAnimation(){var e=this;return _asyncToGenerator(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.menuInnerEl.offsetWidth,t.t0=n===e.width&&void 0!==e.animation,t.t0){t.next=10;break}return e.width=n,e.animation&&(e.animation.destroy(),e.animation=void 0),t.next=7,s.a._createAnimation(e.type,e);case 7:e.animation=t.sent,r.b.getBoolean("animated",!0)||e.animation.duration(0),e.animation.fill("both");case 10:case"end":return t.stop()}}),t)})))()}startAnimation(e,t){var n=this;return _asyncToGenerator(regeneratorRuntime.mark((function i(){var r,a;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(r=!e,a=n.animation.direction(r?"reverse":"normal").easing(r?"cubic-bezier(0.4, 0.0, 0.6, 1)":"cubic-bezier(0.0, 0.0, 0.2, 1)"),!t){i.next=6;break}return i.next=4,a.playAsync();case 4:i.next=7;break;case 6:a.playSync();case 7:case"end":return i.stop()}}),i)})))()}_isActive(){return!this.disabled&&!this.isPaneVisible}canSwipe(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}canStart(e){return!!this.canSwipe()&&(!!this._isOpen||!s.a._getOpenSync()&&l(window,e.currentX,this.isEndSide,this.maxEdgeStart))}onWillStart(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()}onStart(){this.isAnimating&&this.animation?this.animation.direction(this._isOpen?"reverse":"normal").progressStart(!0):Object(a.b)(!1,"isAnimating has to be true")}onMove(e){if(!this.isAnimating||!this.animation)return void Object(a.b)(!1,"isAnimating has to be true");const t=h(e.deltaX,this._isOpen,this.isEndSide);this.animation.progressStep(t/this.width)}onEnd(e){if(!this.isAnimating||!this.animation)return void Object(a.b)(!1,"isAnimating has to be true");const t=this._isOpen,n=this.isEndSide,i=h(e.deltaX,t,n),r=this.width,o=i/r,s=e.velocityX,c=r/2,u=s>=0&&(s>.2||e.deltaX>c),l=s<=0&&(s<-.2||e.deltaX<-c),m=t?n?u:l:n?l:u;let p=!t&&m;t&&!m&&(p=!0),this.lastOnEnd=e.timeStamp;let b=m?.001:-.001;const g=o<=0?.01:o;b+=Object(d.b)(new d.a(0,0),new d.a(.4,0),new d.a(.6,1),new d.a(1,1),Object(a.c)(0,g,1)),this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish(()=>this.afterAnimation(p),{oneTimeCallback:!0}).progressEnd(m?1:0,b,300)}beforeAnimation(e){Object(a.b)(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(m),this.backdropEl&&this.backdropEl.classList.add(p),this.blocker.block(),this.isAnimating=!0,e?this.ionWillOpen.emit():this.ionWillClose.emit()}afterAnimation(e){Object(a.b)(this.isAnimating,"_before() should be called while animating"),this._isOpen=e,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),e?(this.contentEl&&this.contentEl.classList.add(b),this.ionDidOpen.emit()):(this.el.classList.remove(m),this.contentEl&&this.contentEl.classList.remove(b),this.backdropEl&&this.backdropEl.classList.remove(p),this.animation&&this.animation.stop(),this.ionDidClose.emit())}updateState(){const e=this._isActive();this.gesture&&this.gesture.setDisabled(!e||!this.swipeGesture),!e&&this._isOpen&&this.forceClosing(),this.disabled||s.a._setActiveMenu(this),Object(a.b)(!this.isAnimating,"can not be animating")}forceClosing(){Object(a.b)(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.direction("reverse").playSync(),this.afterAnimation(!1)}render(){const e=this.isEndSide,t=this.type,n=this.disabled,r=this.mode,a=this.isPaneVisible;return Object(i.i)(i.a,{role:"navigation",class:{[r]:!0,["menu-type-".concat(t)]:!0,"menu-enabled":!n,"menu-side-end":e,"menu-side-start":!e,"menu-pane-visible":a}},Object(i.i)("div",{class:"menu-inner",ref:e=>this.menuInnerEl=e},Object(i.i)("slot",null)),Object(i.i)("ion-backdrop",{ref:e=>this.backdropEl=e,class:"menu-backdrop",tappable:!1,stopPropagation:!1}))}get el(){return Object(i.f)(this)}static get watchers(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}}static get style(){return":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}"}},h=(e,t,n)=>Math.max(0,t!==n?-e:e),l=(e,t,n,i)=>n?t>=e.innerWidth-i:t<=i,m="show-menu",p="show-backdrop",b="menu-content-open",g=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get(t);case 2:if(n=e.sent,e.t0=!n,e.t0){e.next=8;break}return e.next=7,n.isActive();case 7:e.t0=!e.sent;case 8:return e.abrupt("return",!e.t0);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=class{constructor(e){var t=this;Object(i.l)(this,e),this.visible=!1,this.disabled=!1,this.autoHide=!0,this.type="button",this.onClick=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.a.toggle(t.menu));case 1:case"end":return e.stop()}}),e)})))}componentDidLoad(){this.visibilityChanged()}visibilityChanged(){var e=this;return _asyncToGenerator(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e.menu);case 2:e.visible=t.sent;case 3:case"end":return t.stop()}}),t)})))()}render(){const e=this.color,t=this.disabled,n=Object(i.e)(this),a=r.b.get("menuIcon","menu"),o=this.autoHide&&!this.visible,s={type:this.type};return Object(i.i)(i.a,{onClick:this.onClick,"aria-disabled":t?"true":null,"aria-hidden":o?"true":null,class:Object.assign(Object.assign({[n]:!0},Object(c.a)(e)),{button:!0,"menu-button-hidden":o,"menu-button-disabled":t,"ion-activatable":!0,"ion-focusable":!0})},Object(i.i)("button",Object.assign({},s,{disabled:t,class:"button-native"}),Object(i.i)("slot",null,Object(i.i)("ion-icon",{icon:a,mode:n,lazy:!1})),"md"===n&&Object(i.i)("ion-ripple-effect",{type:"unbounded"})))}static get style(){return":host{--background:transparent;--color-focused:var(--color);--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:.5;pointer-events:none}@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host-context(ion-toolbar:not(.ion-color)){color:var(--ion-toolbar-color,var(--color))}:host{--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--border-radius:4px;--color:var(--ion-color-primary,#3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.activated){opacity:.4}@media (any-hover:hover){:host(:hover){opacity:.6}}:host(.ion-color.ion-focused) .button-native{background:rgba(var(--ion-color-base-rgb),.1)}"}},f=class{constructor(e){Object(i.l)(this,e)}open(e){return s.a.open(e)}close(e){return s.a.close(e)}toggle(e){return s.a.toggle(e)}enable(e,t){return s.a.enable(e,t)}swipeGesture(e,t){return s.a.swipeGesture(e,t)}isOpen(e){return s.a.isOpen(e)}isEnabled(e){return s.a.isEnabled(e)}get(e){return s.a.get(e)}getOpen(){return s.a.getOpen()}getMenus(){return s.a.getMenus()}isAnimating(){return s.a.isAnimating()}registerAnimation(e,t){return _asyncToGenerator(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",s.a.registerAnimation(e,t));case 1:case"end":return n.stop()}}),n)})))()}},w=class{constructor(e){Object(i.l)(this,e),this.visible=!1,this.autoHide=!0,this.onClick=()=>s.a.toggle(this.menu)}connectedCallback(){this.visibilityChanged()}visibilityChanged(){var e=this;return _asyncToGenerator(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e.menu);case 2:e.visible=t.sent;case 3:case"end":return t.stop()}}),t)})))()}render(){const e=Object(i.e)(this),t=this.autoHide&&!this.visible;return Object(i.i)(i.a,{onClick:this.onClick,"aria-hidden":t?"true":null,class:{[e]:!0,"menu-toggle-hidden":t}},Object(i.i)("slot",null))}static get style(){return":host(.menu-toggle-hidden){display:none}"}}}}]);