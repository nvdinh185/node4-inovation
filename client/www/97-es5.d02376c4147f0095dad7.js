function asyncGeneratorStep(t,e,o,n,r,a,i){try{var s=t[a](i),c=s.value}catch(d){return void o(d)}s.done?e(c):Promise.resolve(c).then(n,r)}function _asyncToGenerator(t){return function(){var e=this,o=arguments;return new Promise((function(n,r){var a=t.apply(e,o);function i(t){asyncGeneratorStep(a,n,r,i,s,"next",t)}function s(t){asyncGeneratorStep(a,n,r,i,s,"throw",t)}i(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{"Y/uG":function(t,e,o){"use strict";o.r(e),o.d(e,"ion_toast",(function(){return u}));var n=o("dSyh"),r=(o("AfW+"),o("aiEM"),o("+4pY")),a=o("pori"),i=o("Dl6n"),s=o("YtD4");const c=(t,e)=>{const o=Object(r.a)(),n=Object(r.a)(),a=t.host||t,i=t.querySelector(".toast-wrapper");switch(n.addElement(i),e){case"top":n.fromTo("transform","translateY(-100%)","translateY(calc(10px + var(--ion-safe-area-top, 0px)))");break;case"middle":const t=Math.floor(a.clientHeight/2-i.clientHeight/2);i.style.top="".concat(t,"px"),n.fromTo("opacity",.01,1);break;default:n.fromTo("transform","translateY(100%)","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))")}return o.addElement(a).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(n)},d=(t,e)=>{const o=Object(r.a)(),n=Object(r.a)(),a=t.host||t,i=t.querySelector(".toast-wrapper");switch(n.addElement(i),e){case"top":n.fromTo("transform","translateY(calc(10px + var(--ion-safe-area-top, 0px)))","translateY(-100%)");break;case"middle":n.fromTo("opacity",.99,0);break;default:n.fromTo("transform","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))","translateY(100%)")}return o.addElement(a).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(n)},l=(t,e)=>{const o=Object(r.a)(),n=Object(r.a)(),a=t.host||t,i=t.querySelector(".toast-wrapper");switch(n.addElement(i),e){case"top":i.style.top="calc(8px + var(--ion-safe-area-top, 0px))",n.fromTo("opacity",.01,1);break;case"middle":const t=Math.floor(a.clientHeight/2-i.clientHeight/2);i.style.top="".concat(t,"px"),n.fromTo("opacity",.01,1);break;default:i.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",n.fromTo("opacity",.01,1)}return o.addElement(a).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(n)},p=t=>{const e=Object(r.a)(),o=Object(r.a)(),n=t.host||t,a=t.querySelector(".toast-wrapper");return o.addElement(a).fromTo("opacity",.99,0),e.addElement(n).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(o)},u=class{constructor(t){Object(n.l)(this,t),this.presented=!1,this.mode=Object(n.e)(this),this.duration=0,this.keyboardClose=!1,this.position="bottom",this.showCloseButton=!1,this.translucent=!1,this.animated=!0,Object(a.e)(this.el),this.didPresent=Object(n.d)(this,"ionToastDidPresent",7),this.willPresent=Object(n.d)(this,"ionToastWillPresent",7),this.willDismiss=Object(n.d)(this,"ionToastWillDismiss",7),this.didDismiss=Object(n.d)(this,"ionToastDidDismiss",7)}present(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(a.f)(t,"toastEnter",c,l,t.position);case 2:t.duration>0&&(t.durationTimeout=setTimeout(()=>t.dismiss(void 0,"timeout"),t.duration));case 3:case"end":return e.stop()}}),e)})))()}dismiss(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(a.g)(this,t,e,"toastLeave",d,p,this.position)}onDidDismiss(){return Object(a.h)(this.el,"ionToastDidDismiss")}onWillDismiss(){return Object(a.h)(this.el,"ionToastWillDismiss")}getButtons(){const t=this.buttons?this.buttons.map(t=>"string"==typeof t?{text:t}:t):[];return this.showCloseButton&&t.push({text:this.closeButtonText||"Close",handler:()=>this.dismiss(void 0,"cancel")}),t}buttonClick(t){var e=this;return _asyncToGenerator(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(n=t.role,!Object(a.j)(n)){o.next=5;break}o.t0=e.dismiss(void 0,n),o.next=13;break;case 5:return o.next=7,e.callButtonHandler(t);case 7:if(!o.sent){o.next=11;break}o.t1=e.dismiss(void 0,t.role),o.next=12;break;case 11:o.t1=Promise.resolve();case 12:o.t0=o.t1;case 13:return o.abrupt("return",o.t0);case 14:case"end":return o.stop()}}),o)})))()}callButtonHandler(t){return _asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||!t.handler){e.next=13;break}return e.prev=1,e.t0=!1,e.next=5,Object(a.p)(t.handler);case 5:if(e.t1=e.sent,e.t0!==e.t1){e.next=8;break}return e.abrupt("return",!1);case 8:e.next=13;break;case 10:e.prev=10,e.t2=e.catch(1),console.error(e.t2);case 13:return e.abrupt("return",!0);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))()}renderButtons(t,e){if(0===t.length)return;const o=Object(n.e)(this),r={"toast-button-group":!0,["toast-button-group-".concat(e)]:!0};return Object(n.i)("div",{class:r},t.map(t=>Object(n.i)("button",{type:"button",class:b(t),tabIndex:0,onClick:()=>this.buttonClick(t)},Object(n.i)("div",{class:"toast-button-inner"},t.icon&&Object(n.i)("ion-icon",{icon:t.icon,slot:void 0===t.text?"icon-only":void 0,class:"toast-icon"}),t.text),"md"===o&&Object(n.i)("ion-ripple-effect",{type:void 0!==t.icon&&void 0===t.text?"unbounded":"bounded"}))))}render(){const t=this.getButtons(),e=t.filter(t=>"start"===t.side),o=t.filter(t=>"start"!==t.side),r=Object(n.e)(this),a={"toast-wrapper":!0,["toast-".concat(this.position)]:!0};return Object(n.i)(n.a,{style:{zIndex:"".concat(6e4+this.overlayIndex)},class:Object.assign(Object.assign(Object.assign({[r]:!0},Object(i.a)(this.color)),Object(i.b)(this.cssClass)),{"toast-translucent":this.translucent})},Object(n.i)("div",{class:a},Object(n.i)("div",{class:"toast-container"},this.renderButtons(e,"start"),Object(n.i)("div",{class:"toast-content"},void 0!==this.header&&Object(n.i)("div",{class:"toast-header"},this.header),void 0!==this.message&&Object(n.i)("div",{class:"toast-message",innerHTML:Object(s.a)(this.message)})),this.renderButtons(o,"end"))))}get el(){return Object(n.f)(this)}static get style(){return":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}:host-context([dir=rtl]) .toast-wrapper,[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-container,.toast-content{display:-ms-flexbox;display:flex}.toast-content{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:pre-wrap}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover:hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800,#333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0,0,0,0.2),0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12);--button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-color-step-50,#f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:.01;z-index:10}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-header,.toast-message{line-height:20px}.toast-button-group-start{margin-left:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-button-group-end{margin-right:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:.84px;text-transform:uppercase;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100,#e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}@media (any-hover:hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb,56,128,255),.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.08)}}"}},b=t=>Object.assign({"toast-button":!0,"toast-button-icon-only":void 0!==t.icon&&void 0===t.text,["toast-button-".concat(t.role)]:void 0!==t.role,"ion-focusable":!0,"ion-activatable":!0},Object(i.b)(t.cssClass))}}]);