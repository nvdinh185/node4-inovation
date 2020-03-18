function asyncGeneratorStep(t,e,r,s,o,n,i){try{var l=t[n](i),c=l.value}catch(a){return void r(a)}l.done?e(c):Promise.resolve(c).then(s,o)}function _asyncToGenerator(t){return function(){var e=this,r=arguments;return new Promise((function(s,o){var n=t.apply(e,r);function i(t){asyncGeneratorStep(n,s,o,i,l,"next",t)}function l(t){asyncGeneratorStep(n,s,o,i,l,"throw",t)}i(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{Ftzj:function(t,e,r){"use strict";r.r(e),r.d(e,"ion_reorder",(function(){return n})),r.d(e,"ion_reorder_group",(function(){return i}));var s=r("dSyh"),o=(r("AfW+"),r("opz7"));const n=class{constructor(t){Object(s.l)(this,t)}onClick(t){t.preventDefault(),t.stopImmediatePropagation()}render(){return Object(s.i)(s.a,{class:Object(s.e)(this)},Object(s.i)("slot",null,Object(s.i)("ion-icon",{name:"reorder",lazy:!1,class:"reorder-icon"})))}static get style(){return":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px;font-size:31px;opacity:.3}"}},i=class{constructor(t){Object(s.l)(this,t),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0,this.ionItemReorder=Object(s.d)(this,"ionItemReorder",7)}disabledChanged(){this.gesture&&this.gesture.setDisabled(this.disabled)}connectedCallback(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t.el.closest("ion-content"),e.t0=s,!e.t0){e.next=6;break}return e.next=5,s.getScrollElement();case 5:t.scrollEl=e.sent;case 6:return e.next=8,Promise.resolve().then(r.bind(null,"mUkt"));case 8:e.t1={el:t.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:e=>t.canStart(e),onStart:e=>t.onStart(e),onMove:e=>t.onMove(e),onEnd:()=>t.onEnd()},t.gesture=e.sent.createGesture(e.t1),t.disabledChanged();case 11:case"end":return e.stop()}}),e)})))()}disconnectedCallback(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}complete(t){return Promise.resolve(this.completeSync(t))}canStart(t){if(this.selectedItemEl||0!==this.state)return!1;const e=t.event.target.closest("ion-reorder");if(!e)return!1;const r=c(e,this.el);return!!r&&(t.data=r,!0)}onStart(t){t.event.preventDefault();const e=this.selectedItemEl=t.data,r=this.cachedHeights;r.length=0;const s=this.el,n=s.children;if(!n||0===n.length)return;let i=0;for(let o=0;o<n.length;o++){const t=n[o];i+=t.offsetHeight,r.push(i),t.$ionIndex=o}const c=s.getBoundingClientRect();if(this.containerTop=c.top,this.containerBottom=c.bottom,this.scrollEl){const t=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=t.top+a,this.scrollElBottom=t.bottom-a}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=l(e),this.selectedItemHeight=e.offsetHeight,this.state=1,e.classList.add(d),Object(o.a)()}onMove(t){const e=this.selectedItemEl;if(!e)return;const r=this.autoscroll(t.currentY),s=this.containerTop-r,n=Math.max(s,Math.min(t.currentY,this.containerBottom-r)),i=r+n-t.startY,c=this.itemIndexForTop(n-s);if(c!==this.lastToIndex){const t=l(e);this.lastToIndex=c,Object(o.b)(),this.reorderMove(t,c)}e.style.transform="translateY(".concat(i,"px)")}onEnd(){const t=this.selectedItemEl;if(this.state=2,!t)return void(this.state=0);const e=this.lastToIndex,r=l(t);e===r?this.completeSync():this.ionItemReorder.emit({from:r,to:e,complete:this.completeSync.bind(this)}),Object(o.c)()}completeSync(t){const e=this.selectedItemEl;if(e&&2===this.state){const r=this.el.children,s=r.length,o=this.lastToIndex,n=l(e);o===n||t&&!0!==t||this.el.insertBefore(e,n<o?r[o+1]:r[o]),Array.isArray(t)&&(t=u(t,n,o));for(let t=0;t<s;t++)r[t].style.transform="";e.style.transition="",e.classList.remove(d),this.selectedItemEl=void 0,this.state=0}return t}itemIndexForTop(t){const e=this.cachedHeights;let r=0;for(r=0;r<e.length&&!(e[r]>t);r++);return r}reorderMove(t,e){const r=this.selectedItemHeight,s=this.el.children;for(let o=0;o<s.length;o++){let n="";o>t&&o<=e?n="translateY(".concat(-r,"px)"):o<t&&o>=e&&(n="translateY(".concat(r,"px)")),s[o].style.transform=n}}autoscroll(t){if(!this.scrollEl)return 0;let e=0;return t<this.scrollElTop?e=-h:t>this.scrollElBottom&&(e=h),0!==e&&this.scrollEl.scrollBy(0,e),this.scrollEl.scrollTop-this.scrollElInitial}render(){const t=Object(s.e)(this);return Object(s.i)(s.a,{class:{[t]:!0,"reorder-enabled":!this.disabled,"reorder-list-active":0!==this.state}})}get el(){return Object(s.f)(this)}static get watchers(){return{disabled:["disabledChanged"]}}static get style(){return".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translateZ(0);transform:translateZ(0)}"}},l=t=>t.$ionIndex,c=(t,e)=>{let r;for(;t;){if(r=t.parentElement,r===e)return t;t=r}},a=60,h=10,d="reorder-selected",u=(t,e,r)=>{const s=t[e];return t.splice(e,1),t.splice(r,0,s),t.slice()}}}]);