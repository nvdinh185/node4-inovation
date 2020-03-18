function asyncGeneratorStep(i,n,t,e,s,r,o){try{var l=i[r](o),c=l.value}catch(a){return void t(a)}l.done?n(c):Promise.resolve(c).then(e,s)}function _asyncToGenerator(i){return function(){var n=this,t=arguments;return new Promise((function(e,s){var r=i.apply(n,t);function o(i){asyncGeneratorStep(r,e,s,o,l,"next",i)}function l(i){asyncGeneratorStep(r,e,s,o,l,"throw",i)}o(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{nf6t:function(i,n,t){"use strict";t.r(n),t.d(n,"ion_infinite_scroll",(function(){return o})),t.d(n,"ion_infinite_scroll_content",(function(){return l}));var e=t("dSyh"),s=t("AfW+"),r=t("YtD4");const o=class{constructor(i){Object(e.l)(this,i),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom",this.onScroll=()=>{const i=this.scrollEl;if(!i||!this.canStart())return 1;const n=this.el.offsetHeight;if(0===n)return 2;const t=i.scrollTop,e=i.offsetHeight,s=0!==this.thrPc?e*this.thrPc:this.thrPx;if(("bottom"===this.position?i.scrollHeight-n-t-s-e:t-n-s)<0){if(!this.didFire)return this.isLoading=!0,this.didFire=!0,this.ionInfinite.emit(),3}else this.didFire=!1;return 4},this.ionInfinite=Object(e.d)(this,"ionInfinite",7)}thresholdChanged(){const i=this.threshold;i.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(i)/100):(this.thrPx=parseFloat(i),this.thrPc=0)}disabledChanged(){const i=this.disabled;i&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!i)}connectedCallback(){var i=this;return _asyncToGenerator(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(t=i.el.closest("ion-content"))){n.next=10;break}return n.next=4,t.getScrollElement();case 4:i.scrollEl=n.sent,i.thresholdChanged(),i.disabledChanged(),"top"===i.position&&Object(e.m)(()=>{i.scrollEl&&(i.scrollEl.scrollTop=i.scrollEl.scrollHeight-i.scrollEl.clientHeight)}),n.next=11;break;case 10:console.error("<ion-infinite-scroll> must be used inside an <ion-content>");case 11:case"end":return n.stop()}}),n)})))()}disconnectedCallback(){this.enableScrollEvents(!1),this.scrollEl=void 0}complete(){var i=this;return _asyncToGenerator(regeneratorRuntime.mark((function n(){var t,s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=i.scrollEl,i.isLoading&&t&&(i.isLoading=!1,"top"===i.position)&&(i.isBusy=!0,s=t.scrollHeight-t.scrollTop,requestAnimationFrame(()=>{Object(e.g)(()=>{const n=t.scrollHeight-s;requestAnimationFrame(()=>{Object(e.m)(()=>{t.scrollTop=n,i.isBusy=!1})})})}));case 2:case"end":return n.stop()}}),n)})))()}canStart(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)}enableScrollEvents(i){this.scrollEl&&(i?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))}render(){const i=Object(e.e)(this),n=this.disabled;return Object(e.i)(e.a,{class:{[i]:!0,"infinite-scroll-loading":this.isLoading,"infinite-scroll-enabled":!n}})}get el(){return Object(e.f)(this)}static get watchers(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}}static get style(){return"ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"}},l=class{constructor(i){Object(e.l)(this,i)}componentDidLoad(){if(void 0===this.loadingSpinner){const i=Object(e.e)(this);this.loadingSpinner=s.b.get("infiniteLoadingSpinner",s.b.get("spinner","ios"===i?"lines":"crescent"))}}render(){const i=Object(e.e)(this);return Object(e.i)(e.a,{class:{[i]:!0,["infinite-scroll-content-".concat(i)]:!0}},Object(e.i)("div",{class:"infinite-loading"},this.loadingSpinner&&Object(e.i)("div",{class:"infinite-loading-spinner"},Object(e.i)("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&Object(e.i)("div",{class:"infinite-loading-text",innerHTML:Object(r.a)(this.loadingText)})))}static get style(){return"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line{stroke:var(--ion-color-step-600,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600,#666)}"}}}}]);