function asyncGeneratorStep(i,e,n,t,o,a,s){try{var r=i[a](s),d=r.value}catch(c){return void n(c)}r.done?e(d):Promise.resolve(d).then(t,o)}function _asyncToGenerator(i){return function(){var e=this,n=arguments;return new Promise((function(t,o){var a=i.apply(e,n);function s(i){asyncGeneratorStep(a,t,o,s,r,"next",i)}function r(i){asyncGeneratorStep(a,t,o,s,r,"throw",i)}s(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{N3W9:function(i,e,n){"use strict";n.r(e),n.d(e,"ion_loading",(function(){return g}));var t=n("dSyh"),o=n("AfW+"),a=(n("aiEM"),n("+4pY")),s=n("pori"),r=n("Dl6n"),d=n("YtD4");const c=i=>{const e=Object(a.a)(),n=Object(a.a)(),t=Object(a.a)();return n.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,.3),t.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),e.addElement(i).easing("ease-in-out").duration(200).addAnimation([n,t])},l=i=>{const e=Object(a.a)(),n=Object(a.a)(),t=Object(a.a)();return n.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.3,0),t.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),e.addElement(i).easing("ease-in-out").duration(200).addAnimation([n,t])},p=i=>{const e=Object(a.a)(),n=Object(a.a)(),t=Object(a.a)();return n.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),t.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),e.addElement(i).easing("ease-in-out").duration(200).addAnimation([n,t])},m=i=>{const e=Object(a.a)(),n=Object(a.a)(),t=Object(a.a)();return n.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.32,0),t.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),e.addElement(i).easing("ease-in-out").duration(200).addAnimation([n,t])},g=class{constructor(i){Object(t.l)(this,i),this.presented=!1,this.mode=Object(t.e)(this),this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=()=>{this.dismiss(void 0,s.a)},Object(s.e)(this.el),this.didPresent=Object(t.d)(this,"ionLoadingDidPresent",7),this.willPresent=Object(t.d)(this,"ionLoadingWillPresent",7),this.willDismiss=Object(t.d)(this,"ionLoadingWillDismiss",7),this.didDismiss=Object(t.d)(this,"ionLoadingDidDismiss",7)}componentWillLoad(){if(void 0===this.spinner){const i=Object(t.e)(this);this.spinner=o.b.get("loadingSpinner",o.b.get("spinner","ios"===i?"lines":"crescent"))}}present(){var i=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.f)(i,"loadingEnter",c,p,void 0);case 2:i.duration>0&&(i.durationTimeout=setTimeout(()=>i.dismiss(),i.duration+10));case 3:case"end":return e.stop()}}),e)})))()}dismiss(i,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(s.g)(this,i,e,"loadingLeave",l,m)}onDidDismiss(){return Object(s.h)(this.el,"ionLoadingDidDismiss")}onWillDismiss(){return Object(s.h)(this.el,"ionLoadingWillDismiss")}render(){const i=this.message,e=this.spinner,n=Object(t.e)(this);return Object(t.i)(t.a,{onIonBackdropTap:this.onBackdropTap,style:{zIndex:"".concat(4e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(r.b)(this.cssClass)),{[n]:!0,"loading-translucent":this.translucent})},Object(t.i)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(t.i)("div",{class:"loading-wrapper",role:"dialog"},e&&Object(t.i)("div",{class:"loading-spinner"},Object(t.i)("ion-spinner",{name:e})),i&&Object(t.i)("div",{class:"loading-content",innerHTML:Object(d.a)(i)})))}get el(){return Object(t.f)(this)}static get style(){return".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-md, .spinner-circles.sc-ion-loading-md, .spinner-crescent.sc-ion-loading-md, .spinner-dots.sc-ion-loading-md, .spinner-lines.sc-ion-loading-md, .spinner-lines-small.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50,#f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary,#3880ff);color:var(--ion-color-step-850,#262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0,0,0,.4);box-shadow:0 16px 20px rgba(0,0,0,.4)}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md{margin-left:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"}}}}]);