(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{eLfv:function(t,e,i){"use strict";i.r(e),i.d(e,"ion_checkbox",(function(){return c}));var o=i("dSyh"),r=(i("AfW+"),i("aiEM")),n=i("Dl6n");const c=class{constructor(t){Object(o.l)(this,t),this.inputId="ion-cb-".concat(s++),this.name=this.inputId,this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="on",this.onClick=()=>{this.setFocus(),this.checked=!this.checked,this.indeterminate=!1},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.ionChange=Object(o.d)(this,"ionChange",7),this.ionFocus=Object(o.d)(this,"ionFocus",7),this.ionBlur=Object(o.d)(this,"ionBlur",7),this.ionStyle=Object(o.d)(this,"ionStyle",7)}componentWillLoad(){this.emitStyle()}checkedChanged(t){this.ionChange.emit({checked:t,value:this.value}),this.emitStyle()}disabledChanged(){this.emitStyle()}emitStyle(){this.ionStyle.emit({"checkbox-checked":this.checked,"interactive-disabled":this.disabled})}setFocus(){this.buttonEl&&this.buttonEl.focus()}render(){const t=this.inputId,e=this.indeterminate,i=this.disabled,c=this.checked,s=this.value,a=this.color,h=this.el,d=t+"-lbl",b=Object(o.e)(this),l=Object(r.f)(h);l&&(l.id=d),Object(r.a)(!0,h,this.name,c?s:"",i);let k=e?Object(o.i)("path",{d:"M6 12L18 12"}):Object(o.i)("path",{d:"M5.9,12.5l3.8,3.8l8.8-8.8"});return"md"===b&&(k=e?Object(o.i)("path",{d:"M2 12H22"}):Object(o.i)("path",{d:"M1.73,12.91 8.1,19.28 22.79,4.59"})),Object(o.i)(o.a,{onClick:this.onClick,role:"checkbox","aria-disabled":i?"true":null,"aria-checked":"".concat(c),"aria-labelledby":d,class:Object.assign(Object.assign({},Object(n.a)(a)),{[b]:!0,"in-item":Object(n.c)("ion-item",h),"checkbox-checked":c,"checkbox-disabled":i,"checkbox-indeterminate":e,interactive:!0})},Object(o.i)("svg",{class:"checkbox-icon",viewBox:"0 0 24 24"},k),Object(o.i)("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.disabled,ref:t=>this.buttonEl=t}))}get el(){return Object(o.f)(this)}static get watchers(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}}static get style(){return":host{--background-checked:var(--ion-color-primary,#3880ff);--border-color-checked:var(--ion-color-primary,#3880ff);--checkmark-color:var(--ion-color-primary-contrast,#fff);--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:1;opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:calc(var(--size) * .125);--border-width:2px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb,0,0,0),0.51);--background:var(--ion-item-background,var(--ion-background-color,#fff));--transition:background 180ms cubic-bezier(0.4,0,0.2,1);--size:18px;width:var(--size);height:var(--size)}.checkbox-icon path{stroke-dasharray:30;stroke-dashoffset:30;stroke-width:3}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{stroke-dashoffset:0;-webkit-transition:stroke-dashoffset 90ms linear 90ms;transition:stroke-dashoffset 90ms linear 90ms}:host(.checkbox-disabled){opacity:.3}:host(.in-item){margin-left:0;margin-right:0;margin-top:18px;margin-bottom:18px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:18px;margin-bottom:18px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}"}};let s=0}}]);