function asyncGeneratorStep(e,t,o,r,n,i,s){try{var a=e[i](s),p=a.value}catch(c){return void o(c)}a.done?t(p):Promise.resolve(p).then(r,n)}function _asyncToGenerator(e){return function(){var t=this,o=arguments;return new Promise((function(r,n){var i=e.apply(t,o);function s(e){asyncGeneratorStep(i,r,n,s,a,"next",e)}function a(e){asyncGeneratorStep(i,r,n,s,a,"throw",e)}s(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{VgKV:function(e,t,o){"use strict";o.r(t),o.d(t,"ion_popover",(function(){return u}));var r=o("dSyh"),n=(o("AfW+"),o("aiEM"),o("+4pY")),i=(o("kBU6"),o("pori")),s=o("Dl6n"),a=o("m9yc"),p=o("+veT");const c=(e,t)=>{let o="top",r="left";const i=e.querySelector(".popover-content"),s=i.getBoundingClientRect(),a=s.width,p=s.height,c=e.ownerDocument.defaultView.innerWidth,d=e.ownerDocument.defaultView.innerHeight,m=t&&t.target&&t.target.getBoundingClientRect(),h=null!=m&&"top"in m?m.top:d/2-p/2,u=null!=m&&"left"in m?m.left:c/2,v=m&&m.width||0,f=m&&m.height||0,b=e.querySelector(".popover-arrow"),g=b.getBoundingClientRect(),w=g.width,x=g.height;null==m&&(b.style.display="none");const y={top:h+f,left:u+v/2-w/2},j={top:h+f+(x-1),left:u+v/2-a/2};let O=!1,D=!1;j.left<l+25?(O=!0,j.left=l):a+l+j.left+25>c&&(D=!0,j.left=c-a-l,r="right"),h+f+p>d&&h-p>0?(y.top=h-(x+1),j.top=h-p-(x-1),e.className=e.className+" popover-bottom",o="bottom"):h+f+p>d&&(i.style.bottom=l+"%"),b.style.top=y.top+"px",b.style.left=y.left+"px",i.style.top=j.top+"px",i.style.left=j.left+"px",O&&(i.style.left="calc(".concat(j.left,"px + var(--ion-safe-area-left, 0px))")),D&&(i.style.left="calc(".concat(j.left,"px - var(--ion-safe-area-right, 0px))")),i.style.transformOrigin=o+" "+r;const k=Object(n.a)(),P=Object(n.a)(),E=Object(n.a)();return P.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.08),E.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),k.addElement(e).easing("ease").duration(100).addAnimation([P,E])},l=5,d=e=>{const t=Object(n.a)(),o=Object(n.a)(),r=Object(n.a)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.08,0),r.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([o,r])},m=(e,t)=>{const o=e.ownerDocument,r="rtl"===o.dir;let i="top",s=r?"right":"left";const a=e.querySelector(".popover-content"),p=a.getBoundingClientRect(),c=p.width,l=p.height,d=o.defaultView.innerWidth,m=o.defaultView.innerHeight,h=t&&t.target&&t.target.getBoundingClientRect(),u=null!=h&&"bottom"in h?h.bottom:m/2-l/2,v=h&&h.height||0,f={top:u,left:null!=h&&"left"in h?r?h.left-c+h.width:h.left:d/2-c/2};f.left<12?(f.left=12,s="left"):c+12+f.left>d&&(f.left=d-c-12,s="right"),u+v+l>m&&u-l>0?(f.top=u-l-v,e.className=e.className+" popover-bottom",i="bottom"):u+v+l>m&&(a.style.bottom="12px");const b=Object(n.a)(),g=Object(n.a)(),w=Object(n.a)(),x=Object(n.a)(),y=Object(n.a)();return g.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),w.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),x.addElement(a).beforeStyles({top:"".concat(f.top,"px"),left:"".concat(f.left,"px"),"transform-origin":"".concat(i," ").concat(s)}).fromTo("transform","scale(0.001)","scale(1)"),y.addElement(e.querySelector(".popover-viewport")).fromTo("opacity",.01,1),b.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([g,w,x,y])},h=e=>{const t=Object(n.a)(),o=Object(n.a)(),r=Object(n.a)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.32,0),r.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([o,r])},u=class{constructor(e){Object(r.l)(this,e),this.presented=!1,this.mode=Object(r.e)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=e=>{e.stopPropagation(),e.preventDefault(),this.dismiss()},this.onBackdropTap=()=>{this.dismiss(void 0,i.a)},this.onLifecycle=e=>{const t=this.usersElement,o=v[e.type];if(t&&o){const r=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(r)}},Object(i.e)(this.el),this.didPresent=Object(r.d)(this,"ionPopoverDidPresent",7),this.willPresent=Object(r.d)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(r.d)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(r.d)(this,"ionPopoverDidDismiss",7)}present(){var e=this;return _asyncToGenerator(regeneratorRuntime.mark((function t(){var o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.presented){t.next=2;break}return t.abrupt("return");case 2:if(o=e.el.querySelector(".popover-content")){t.next=5;break}throw new Error("container is undefined");case 5:return r=Object.assign(Object.assign({},e.componentProps),{popover:e.el}),t.next=8,Object(a.a)(e.delegate,o,e.component,["popover-viewport",e.el["s-sc"]],r);case 8:return e.usersElement=t.sent,t.next=11,Object(p.a)(e.usersElement);case 11:return t.abrupt("return",Object(i.f)(e,"popoverEnter",c,m,e.event));case 12:case"end":return t.stop()}}),t)})))()}dismiss(e,t){var o=this;return _asyncToGenerator(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(i.g)(o,e,t,"popoverLeave",d,h,o.event);case 2:if(n=r.sent,r.t0=n,!r.t0){r.next=7;break}return r.next=7,Object(a.b)(o.delegate,o.usersElement);case 7:return r.abrupt("return",n);case 8:case"end":return r.stop()}}),r)})))()}onDidDismiss(){return Object(i.h)(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return Object(i.h)(this.el,"ionPopoverWillDismiss")}render(){const e=Object(r.e)(this),t=this.onLifecycle;return Object(r.i)(r.a,{"aria-modal":"true","no-router":!0,style:{zIndex:"".concat(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(s.b)(this.cssClass)),{[e]:!0,"popover-translucent":this.translucent}),onIonPopoverDidPresent:t,onIonPopoverWillPresent:t,onIonPopoverWillDismiss:t,onIonPopoverDidDismiss:t,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},Object(r.i)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(r.i)("div",{class:"popover-wrapper"},Object(r.i)("div",{class:"popover-arrow"}),Object(r.i)("div",{class:"popover-content"})))}get el(){return Object(r.f)(this)}static get style(){return".sc-ion-popover-md-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:.1s;transition-delay:.1s}"}},v={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"}}}]);