(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{Sebp:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var o=u("Uqf7"),i=u("pMnS"),s=u("oBZk"),a=u("ZZ/e"),r=u("s7LF"),b=u("6bhV"),c=u("OL44"),p=u("SVse"),h=u("ddi3"),m=u("cUpR"),g=u("c/rV");class d{constructor(l,n,u,e){this.route=l,this.apiCommons=n,this.apiAuth=u,this.mainService=e,this.chatbot={avatar:"assets/imgs/avatar-ai.jpg",username:"AI-NLP-Mobifone-C3",fullname:"T\xf4i l\xe0 m\xe1y h\u1ecdc, t\xf4i \u0111ang \u1edf \u0111\u1ed9 tu\u1ed5i \u0111i h\u1ecdc, b\u1ea1n h\xe3y d\u1ea1y cho t\xf4i h\u1ecdc nh\xe9!",created_time:Date.now()},this.conversion={},this.conversations=[],this.isRepairing=!1,this.callbackProcess=(function(l){return new Promise((n,u)=>{l.error&&this.apiCommons.presentAlert("Error:<br>"+(null!=l.error.message?l.error.message:l.message?l.message:"Error Unknow: "+JSON.stringify(l.error,null,2))),n({next:"CLOSE"})})}).bind(this)}ngOnInit(){this.init(),this.route.queryParams.subscribe(l=>{this.refresh(l)})}init(){this.userInfo=this.mainService.getUserInfo()}refresh(l){this.apiAuth.postDynamicJson(this.apiAuth.serviceUrls.SOCKET_SERVER+"/request-answer",{message:"Xin ch\xe0o"},!0).then(l=>{l&&"OK"===l.status&&this.conversations.unshift({response:l.message,created_time:Date.now()})}).catch(l=>console.log("L\u1ed7i l\u1ea5y chi ti\u1ebft",l))}onClickSend(){this.message&&(this.message=this.message.replace(/\r?\n|\r/g,""),this.message.length>0&&(this.conversion={request:this.message,created_time:Date.now()},this.apiAuth.postDynamicJson(this.apiAuth.serviceUrls.SOCKET_SERVER+"/request-answer",{message:this.message},!0).then(l=>{l&&"OK"===l.status&&(this.conversations.unshift({request:this.conversion.request,response:l.message,created_time:this.conversion.created_time}),this.conversion=this.conversations[0]),this.message=""}).catch(l=>{console.log(l),this.message=""}),this.message=""))}keyInput(){this.onClickSend()}onClickMore(l){const n=[{id:1,name:"Gi\u1ea3ng b\xe0i cho m\xe1y",value:"EDIT-INTENT",icon:{name:"create",color:"success"}},{id:2,name:"Ki\u1ec3m tra \u0111\u1ed9 ch\xednh x\xe1c",value:"VIEW-PROB",icon:{name:"checkmark-circle",color:"secondary"}},{id:3,name:"Hu\u1ea5n luy\u1ec7n cho m\xe1y",value:"TRAIN",icon:{name:"microphone",color:"warning"}}];this.userInfo||n.splice(2,1),this.conversion&&this.conversion.request||n.splice(1,1),this.apiCommons.presentPopover(l,h.p,{type:"single-choice",title:"T\xe1c v\u1ee5",color:"primary",menu:n}).then(l=>{this.processDetails(l)}).catch(l=>{})}processDetails(l){let n=l.value;"TRAIN"===n&&(this.apiCommons.showLoader("\u0110ang hu\u1ea5n luy\u1ec7n cho m\xe1y vui l\xf2ng \u0111\u1ee3i..."),this.apiAuth.postDynamicJson(this.apiAuth.serviceUrls.SOCKET_SERVER+"/run-train",{command:"run-train"},!0).then(l=>{this.apiCommons.hideLoader(),this.apiCommons.showToast(l&&l.message?l.message:"\u0110\xe3 hu\u1ea5n luy\u1ec7n th\xe0nh c\xf4ng, b\u1ea1n c\xf3 th\u1ec3 test th\u1eed nh\xe9",2e3,"success")}).catch(l=>{this.apiCommons.hideLoader(),this.apiCommons.showToast(l&&l.message?l.message:"L\u1ed7i hu\u1ea5n luy\u1ec7n cho m\xe1y",3e3,"danger")})),"VIEW-PROB"===n&&this.checkProbRequest()}onClickRepair(){!this.isRepairing||this.conversion.response&&this.conversion.intent_name?(this.isRepairing&&this.conversion.request&&this.conversion.response&&this.conversion.intent_name&&this.apiAuth.postDynamicJson(this.apiAuth.serviceUrls.SOCKET_SERVER+"/train-answer",{request:this.conversion.request,response:this.conversion.response,intent_name:this.conversion.intent_name},!0).then(l=>{this.apiCommons.showToast(l&&l.message?l.message:"So\u1ea1n b\xe0i gi\u1ea3ng cho m\xe1y th\xe0nh c\xf4ng",2e3,"success")}).catch(l=>{this.apiCommons.showToast(l&&l.message?l.message:"L\u1ed7i so\u1ea1n b\xe0i gi\u1ea3ng cho m\xe1y",3e3,"danger")}),this.isRepairing=!this.isRepairing):this.conversion.invalid=!0}onClickClose(){this.isRepairing=!1}checkProbRequest(){this.apiAuth.getDynamicUrl(this.apiAuth.serviceUrls.SOCKET_SERVER+"/get-predict?message="+this.conversion.request,!0).then(l=>{this.showResultCheck(l)}).catch(l=>{this.apiCommons.showToast(l&&l.message?l.message:"L\u1ed7i ki\u1ec3m tra x\xe1c su\u1ea5t",3e3,"danger")})}showResultCheck(l){let n={type:"details",details:[]},u="C\xe2u n\xf3i: ";for(let e=0;e<l.length;e++){let t=l[e];0===e&&(u+=t.text),n.details.push({name:t.intent&&t.intent.name?t.intent.id+"# "+t.intent.name:t.label,value:(100*t.value).toFixed(2)+"%"})}this.apiCommons.openModal(h.h,{parent:this,callback:this.callbackProcess,form:{title:"H\u1ec7 th\u1ed1ng t\xecm th\u1ea5y",buttons:[{color:"danger",icon:"close",next:"CLOSE"}],items:[{type:"title",name:u},n]}})}}var v=u("iInd"),f=e.zb({encapsulation:0,styles:[[".file-over[_ngcontent-%COMP%]{position:absolute;top:0;left:0;z-index:2;width:100%;height:100%;opacity:0;cursor:pointer}.idea-created[_ngcontent-%COMP%]{border-radius:2em;opacity:.9;margin:5px;border:1px solid gray}.background-item-round[_ngcontent-%COMP%]{margin:3px;border-radius:1.5em}.input-comment[_ngcontent-%COMP%]{border-radius:2em;opacity:.9;margin:15px;box-shadow:0 3px 10px rgba(0,0,0,.5);border:1px solid green}.input-train[_ngcontent-%COMP%]{position:relative;border-radius:2em;opacity:.9;margin:15px;box-shadow:0 3px 10px rgba(0,0,0,.5);border:1px solid red}.input-train[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]{position:absolute;z-index:99;top:0;left:90%;font-size:45px}.bot-backgound[_ngcontent-%COMP%]{position:relative;margin-right:10px;min-width:10px;border-radius:1em;opacity:.9;padding:8px;background-color:#e5e4e9;color:#363636}.user-backgound[_ngcontent-%COMP%]{margin-left:40px;min-width:10px;border-radius:1em;opacity:.7;padding:8px;background-color:#2095fe;color:#fff;text-align:right}.comment-list[_ngcontent-%COMP%]{margin:15px}.image-comment-size[_ngcontent-%COMP%]{max-width:200px;margin:2px;border-radius:.5em;border:1px solid #000}"]],data:{}});function B(l){return e.Xb(0,[(l()(),e.Bb(0,0,null,null,18,"ion-card",[["class","input-comment"]],null,null,null,s.cb,s.f)),e.Ab(1,49152,null,0,a.m,[e.j,e.p,e.F],null,null),(l()(),e.Bb(2,0,null,0,16,"ion-item",[["lines","none"]],null,null,null,s.qb,s.x)),e.Ab(3,49152,null,0,a.H,[e.j,e.p,e.F],{lines:[0,"lines"]},null),(l()(),e.Bb(4,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,s.U,s.b)),e.Ab(5,49152,null,0,a.f,[e.j,e.p,e.F],null,null),(l()(),e.Bb(6,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),e.Bb(7,0,null,0,7,"ion-textarea",[["autosize",""],["placeholder","B\u1ea1n c\xf3 y\xeau c\u1ea7u g\xec?"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup.enter"],[null,"ionBlur"],[null,"ionChange"],[null,"input"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Nb(l,8)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Nb(l,8)._handleInputEvent(u.target)&&t),"input"===n&&(t=!1!==e.Nb(l,14).onInput(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.message=u)&&t),"keyup.enter"===n&&(t=!1!==o.keyInput()&&t),t}),s.Hb,s.O)),e.Ab(8,16384,null,0,a.Qb,[e.p],null,null),e.Sb(1024,null,r.e,(function(l){return[l]}),[a.Qb]),e.Ab(10,671744,null,0,r.h,[[8,null],[8,null],[8,null],[6,r.e]],{model:[0,"model"]},{update:"ngModelChange"}),e.Sb(2048,null,r.f,null,[r.h]),e.Ab(12,16384,null,0,r.g,[[4,r.f]],null,null),e.Ab(13,49152,null,0,a.yb,[e.j,e.p,e.F],{placeholder:[0,"placeholder"]},null),e.Ab(14,2768896,null,0,b.a,[e.p,e.F],null,null),(l()(),e.Bb(15,0,null,0,3,"ion-button",[["fill","clear"],["shape","round"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onClickSend()&&e),e}),s.W,s.d)),e.Ab(16,49152,null,0,a.k,[e.j,e.p,e.F],{color:[0,"color"],fill:[1,"fill"],shape:[2,"shape"]},null),(l()(),e.Bb(17,0,null,0,1,"ion-icon",[["name","send"],["slot","icon-only"]],null,null,null,s.nb,s.u)),e.Ab(18,49152,null,0,a.C,[e.j,e.p,e.F],{name:[0,"name"]},null)],(function(l,n){var u=n.component;l(n,3,0,"none"),l(n,10,0,u.message),l(n,13,0,"B\u1ea1n c\xf3 y\xeau c\u1ea7u g\xec?"),l(n,16,0,e.Fb(1,"",u.message?"secondary":"light",""),"clear","round"),l(n,18,0,"send")}),(function(l,n){var u=n.component;l(n,6,0,e.Fb(1,"",null!=u.userInfo&&u.userInfo.avatar?u.userInfo.avatar:"assets/imgs/avatar.jpg","")),l(n,7,0,e.Nb(n,12).ngClassUntouched,e.Nb(n,12).ngClassTouched,e.Nb(n,12).ngClassPristine,e.Nb(n,12).ngClassDirty,e.Nb(n,12).ngClassValid,e.Nb(n,12).ngClassInvalid,e.Nb(n,12).ngClassPending)}))}function C(l){return e.Xb(0,[(l()(),e.Bb(0,0,null,null,19,"div",[],null,null,null,null,null)),(l()(),e.Bb(1,0,null,null,14,"ion-item",[["lines","none"]],null,null,null,s.qb,s.x)),e.Ab(2,49152,null,0,a.H,[e.j,e.p,e.F],{lines:[0,"lines"]},null),(l()(),e.Bb(3,0,null,0,2,"ion-avatar",[["slot","end"]],null,null,null,s.U,s.b)),e.Ab(4,49152,null,0,a.f,[e.j,e.p,e.F],null,null),(l()(),e.Bb(5,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),e.Bb(6,0,null,0,9,"ion-label",[["class","ion-text-wrap user-backgound"]],null,null,null,s.rb,s.y)),e.Ab(7,49152,null,0,a.N,[e.j,e.p,e.F],null,null),(l()(),e.Bb(8,0,null,0,1,"strong",[["slot","start"]],null,null,null,null,null)),(l()(),e.Vb(9,null,[" "," "])),(l()(),e.Bb(10,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Bb(11,0,null,0,4,"ion-label",[["class","ion-text-wrap"]],null,null,null,s.rb,s.y)),e.Ab(12,49152,null,0,a.N,[e.j,e.p,e.F],null,null),(l()(),e.Bb(13,0,null,0,2,"div",[],[[8,"innerHTML",1]],null,null,null,null)),e.Rb(14,1),e.Rb(15,1),(l()(),e.Bb(16,0,null,null,3,"ion-note",[],[[4,"padding-left",null]],null,null,s.xb,s.E)),e.Ab(17,49152,null,0,a.Y,[e.j,e.p,e.F],null,null),(l()(),e.Vb(18,0,[" "," "])),e.Pb(131072,c.a,[e.j,e.F])],(function(l,n){l(n,2,0,"none")}),(function(l,n){var u=n.component;l(n,5,0,e.Fb(1,"",null!=u.userInfo&&u.userInfo.avatar?u.userInfo.avatar:"assets/imgs/avatar.jpg","")),l(n,9,0,null==u.userInfo?null:u.userInfo.fullname);var t=e.Wb(n,13,0,l(n,15,0,e.Nb(n.parent,0),e.Wb(n,13,0,l(n,14,0,e.Nb(n.parent,1),u.conversion.request))));l(n,13,0,t),l(n,16,0,"100px"),l(n,18,0,e.Wb(n,18,0,e.Nb(n,19).transform(null==u.conversion?null:u.conversion.created_time)))}))}function A(l){return e.Xb(0,[(l()(),e.Bb(0,0,null,null,60,"ion-card",[["class","input-train"]],null,null,null,s.cb,s.f)),e.Ab(1,49152,null,0,a.m,[e.j,e.p,e.F],null,null),(l()(),e.Bb(2,0,null,0,2,"div",[["class","close-button"],["tappable",""]],null,null,null,null,null)),(l()(),e.Bb(3,0,null,null,1,"ion-icon",[["color","danger"],["name","close"],["slot","icon-only"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onClickClose()&&e),e}),s.nb,s.u)),e.Ab(4,49152,null,0,a.C,[e.j,e.p,e.F],{color:[0,"color"],name:[1,"name"]},null),(l()(),e.Bb(5,0,null,0,4,"ion-item",[["color","primary"]],null,null,null,s.qb,s.x)),e.Ab(6,49152,null,0,a.H,[e.j,e.p,e.F],{color:[0,"color"]},null),(l()(),e.Bb(7,0,null,0,2,"ion-label",[["color","light"]],null,null,null,s.rb,s.y)),e.Ab(8,49152,null,0,a.N,[e.j,e.p,e.F],{color:[0,"color"]},null),(l()(),e.Vb(-1,0,["D\u1ea0Y CHO M\xc1Y:"])),(l()(),e.Bb(10,0,null,0,14,"ion-item",[],null,null,null,s.qb,s.x)),e.Ab(11,49152,null,0,a.H,[e.j,e.p,e.F],null,null),(l()(),e.Bb(12,0,null,0,2,"ion-avatar",[["slot","end"]],null,null,null,s.U,s.b)),e.Ab(13,49152,null,0,a.f,[e.j,e.p,e.F],null,null),(l()(),e.Bb(14,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),e.Bb(15,0,null,0,9,"ion-label",[["class","ion-text-wrap user-backgound"]],null,null,null,s.rb,s.y)),e.Ab(16,49152,null,0,a.N,[e.j,e.p,e.F],null,null),(l()(),e.Bb(17,0,null,0,1,"strong",[["slot","start"]],null,null,null,null,null)),(l()(),e.Vb(18,null,[" "," "])),(l()(),e.Bb(19,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Bb(20,0,null,0,4,"ion-label",[["class","ion-text-wrap"]],null,null,null,s.rb,s.y)),e.Ab(21,49152,null,0,a.N,[e.j,e.p,e.F],null,null),(l()(),e.Bb(22,0,null,0,2,"div",[],[[8,"innerHTML",1]],null,null,null,null)),e.Rb(23,1),e.Rb(24,1),(l()(),e.Bb(25,0,null,0,13,"ion-item",[["class","background-item-round"]],null,null,null,s.qb,s.x)),e.Ab(26,49152,null,0,a.H,[e.j,e.p,e.F],null,null),(l()(),e.Bb(27,0,null,0,1,"ion-icon",[["color","primary"],["name","logo-reddit"],["slot","start"]],null,null,null,s.nb,s.u)),e.Ab(28,49152,null,0,a.C,[e.j,e.p,e.F],{color:[0,"color"],name:[1,"name"]},null),(l()(),e.Bb(29,0,null,0,2,"ion-label",[["class","ion-text-wrap"],["position","stacked"],["style","text-align: justify;"]],null,null,null,s.rb,s.y)),e.Ab(30,49152,null,0,a.N,[e.j,e.p,e.F],{color:[0,"color"],position:[1,"position"]},null),(l()(),e.Vb(-1,0,[" \xdd \u0111\u1ecbnh n\xe0y l\xe0 g\xec?(*) "])),(l()(),e.Bb(32,0,null,0,6,"ion-input",[["placeholder","Nh\u1eadp \xfd \u0111\u1ecbnh"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Nb(l,33)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Nb(l,33)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.conversion.intent_name=u)&&t),t}),s.pb,s.w)),e.Ab(33,16384,null,0,a.Qb,[e.p],null,null),e.Sb(1024,null,r.e,(function(l){return[l]}),[a.Qb]),e.Ab(35,671744,null,0,r.h,[[8,null],[8,null],[8,null],[6,r.e]],{model:[0,"model"]},{update:"ngModelChange"}),e.Sb(2048,null,r.f,null,[r.h]),e.Ab(37,16384,null,0,r.g,[[4,r.f]],null,null),e.Ab(38,49152,null,0,a.G,[e.j,e.p,e.F],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),e.Bb(39,0,null,0,4,"ion-item",[],null,null,null,s.qb,s.x)),e.Ab(40,49152,null,0,a.H,[e.j,e.p,e.F],null,null),(l()(),e.Bb(41,0,null,0,2,"ion-label",[["class","form-title-item"],["color","tertiary"]],null,null,null,s.rb,s.y)),e.Ab(42,49152,null,0,a.N,[e.j,e.p,e.F],{color:[0,"color"]},null),(l()(),e.Vb(-1,0,["C\xe2u tr\u1ea3 l\u1eddi d\u1ea1y cho m\xe1y (*):"])),(l()(),e.Bb(44,0,null,0,16,"ion-item",[["class","background-item-round"]],null,null,null,s.qb,s.x)),e.Ab(45,49152,null,0,a.H,[e.j,e.p,e.F],null,null),(l()(),e.Bb(46,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,s.U,s.b)),e.Ab(47,49152,null,0,a.f,[e.j,e.p,e.F],null,null),(l()(),e.Bb(48,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),e.Bb(49,0,null,0,7,"ion-textarea",[["autosize",""],["placeholder","Nh\u1eadp c\xe2u tr\u1ea3 l\u1eddi"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"],[null,"input"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Nb(l,50)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Nb(l,50)._handleInputEvent(u.target)&&t),"input"===n&&(t=!1!==e.Nb(l,56).onInput(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.conversion.response=u)&&t),t}),s.Hb,s.O)),e.Ab(50,16384,null,0,a.Qb,[e.p],null,null),e.Sb(1024,null,r.e,(function(l){return[l]}),[a.Qb]),e.Ab(52,671744,null,0,r.h,[[8,null],[8,null],[8,null],[6,r.e]],{model:[0,"model"]},{update:"ngModelChange"}),e.Sb(2048,null,r.f,null,[r.h]),e.Ab(54,16384,null,0,r.g,[[4,r.f]],null,null),e.Ab(55,49152,null,0,a.yb,[e.j,e.p,e.F],{color:[0,"color"],placeholder:[1,"placeholder"]},null),e.Ab(56,2768896,null,0,b.a,[e.p,e.F],null,null),(l()(),e.Bb(57,0,null,0,3,"ion-button",[["fill","clear"],["shape","round"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onClickRepair()&&e),e}),s.W,s.d)),e.Ab(58,49152,null,0,a.k,[e.j,e.p,e.F],{color:[0,"color"],fill:[1,"fill"],shape:[2,"shape"]},null),(l()(),e.Bb(59,0,null,0,1,"ion-icon",[["name","save"],["slot","icon-only"]],null,null,null,s.nb,s.u)),e.Ab(60,49152,null,0,a.C,[e.j,e.p,e.F],{name:[0,"name"]},null)],(function(l,n){var u=n.component;l(n,4,0,"danger","close"),l(n,6,0,"primary"),l(n,8,0,"light"),l(n,28,0,"primary","logo-reddit"),l(n,30,0,e.Fb(1,"",u.conversion.invalid?"danger":"",""),"stacked"),l(n,35,0,u.conversion.intent_name),l(n,38,0,"Nh\u1eadp \xfd \u0111\u1ecbnh","text"),l(n,42,0,"tertiary"),l(n,52,0,u.conversion.response),l(n,55,0,e.Fb(1,"",null!=u.conversion&&u.conversion.response?"":"danger",""),"Nh\u1eadp c\xe2u tr\u1ea3 l\u1eddi"),l(n,58,0,e.Fb(1,"",null!=u.conversion&&u.conversion.response?"danger":"light",""),"clear","round"),l(n,60,0,"save")}),(function(l,n){var u=n.component;l(n,14,0,e.Fb(1,"",null!=u.userInfo&&u.userInfo.avatar?u.userInfo.avatar:"assets/imgs/avatar.jpg","")),l(n,18,0,null==u.userInfo?null:u.userInfo.fullname);var t=e.Wb(n,22,0,l(n,24,0,e.Nb(n.parent,0),e.Wb(n,22,0,l(n,23,0,e.Nb(n.parent,1),null==u.conversion?null:u.conversion.request))));l(n,22,0,t),l(n,32,0,e.Nb(n,37).ngClassUntouched,e.Nb(n,37).ngClassTouched,e.Nb(n,37).ngClassPristine,e.Nb(n,37).ngClassDirty,e.Nb(n,37).ngClassValid,e.Nb(n,37).ngClassInvalid,e.Nb(n,37).ngClassPending),l(n,48,0,e.Fb(1,"",null==u.chatbot?null:u.chatbot.avatar,"")),l(n,49,0,e.Nb(n,54).ngClassUntouched,e.Nb(n,54).ngClassTouched,e.Nb(n,54).ngClassPristine,e.Nb(n,54).ngClassDirty,e.Nb(n,54).ngClassValid,e.Nb(n,54).ngClassInvalid,e.Nb(n,54).ngClassPending)}))}function y(l){return e.Xb(0,[(l()(),e.Bb(0,0,null,null,3,"ion-button",[["fill","clear"],["shape","round"],["size","small"],["slote","end"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onClickRepair()&&e),e}),s.W,s.d)),e.Ab(1,49152,null,0,a.k,[e.j,e.p,e.F],{fill:[0,"fill"],shape:[1,"shape"],size:[2,"size"]},null),(l()(),e.Bb(2,0,null,0,1,"ion-icon",[["slot","icon-only"]],null,null,null,s.nb,s.u)),e.Ab(3,49152,null,0,a.C,[e.j,e.p,e.F],{color:[0,"color"],name:[1,"name"]},null)],(function(l,n){var u=n.component;l(n,1,0,"clear","round","small"),l(n,3,0,e.Fb(1,"",u.isRepairing?"danger":"secondary",""),e.Fb(1,"",u.isRepairing?"save":"ios-create",""))}),null)}function F(l){return e.Xb(0,[(l()(),e.Bb(0,0,null,null,17,"div",[],null,null,null,null,null)),(l()(),e.Bb(1,0,null,null,16,"ion-item",[["lines","none"]],null,null,null,s.qb,s.x)),e.Ab(2,49152,null,0,a.H,[e.j,e.p,e.F],{lines:[0,"lines"]},null),(l()(),e.Bb(3,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,s.U,s.b)),e.Ab(4,49152,null,0,a.f,[e.j,e.p,e.F],null,null),(l()(),e.Bb(5,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),e.Bb(6,0,null,0,9,"ion-label",[["class","ion-text-wrap bot-backgound"]],null,null,null,s.rb,s.y)),e.Ab(7,49152,null,0,a.N,[e.j,e.p,e.F],null,null),(l()(),e.Bb(8,0,null,0,1,"strong",[["slot","start"]],null,null,null,null,null)),(l()(),e.Vb(9,null,[" "," "])),(l()(),e.Bb(10,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Bb(11,0,null,0,4,"ion-label",[["class","ion-text-wrap"]],null,null,null,s.rb,s.y)),e.Ab(12,49152,null,0,a.N,[e.j,e.p,e.F],null,null),(l()(),e.Bb(13,0,null,0,2,"div",[],[[8,"innerHTML",1]],null,null,null,null)),e.Rb(14,1),e.Rb(15,1),(l()(),e.qb(16777216,null,0,1,null,y)),e.Ab(17,16384,null,0,p.l,[e.W,e.S],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,2,0,"none"),l(n,17,0,u.conversion.created_time===n.parent.context.$implicit.created_time)}),(function(l,n){var u=n.component;l(n,5,0,e.Fb(1,"",null==u.chatbot?null:u.chatbot.avatar,"")),l(n,9,0,null==u.chatbot?null:u.chatbot.username);var t=e.Wb(n,13,0,l(n,15,0,e.Nb(n.parent.parent,0),e.Wb(n,13,0,l(n,14,0,e.Nb(n.parent.parent,1),n.parent.context.$implicit.response))));l(n,13,0,t)}))}function x(l){return e.Xb(0,[(l()(),e.Bb(0,0,null,null,19,"div",[],null,null,null,null,null)),(l()(),e.Bb(1,0,null,null,14,"ion-item",[["lines","none"]],null,null,null,s.qb,s.x)),e.Ab(2,49152,null,0,a.H,[e.j,e.p,e.F],{lines:[0,"lines"]},null),(l()(),e.Bb(3,0,null,0,2,"ion-avatar",[["slot","end"]],null,null,null,s.U,s.b)),e.Ab(4,49152,null,0,a.f,[e.j,e.p,e.F],null,null),(l()(),e.Bb(5,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),e.Bb(6,0,null,0,9,"ion-label",[["class","ion-text-wrap user-backgound"]],null,null,null,s.rb,s.y)),e.Ab(7,49152,null,0,a.N,[e.j,e.p,e.F],null,null),(l()(),e.Bb(8,0,null,0,1,"strong",[["slot","start"]],null,null,null,null,null)),(l()(),e.Vb(9,null,[" "," "])),(l()(),e.Bb(10,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Bb(11,0,null,0,4,"ion-label",[["class","ion-text-wrap"]],null,null,null,s.rb,s.y)),e.Ab(12,49152,null,0,a.N,[e.j,e.p,e.F],null,null),(l()(),e.Bb(13,0,null,0,2,"div",[],[[8,"innerHTML",1]],null,null,null,null)),e.Rb(14,1),e.Rb(15,1),(l()(),e.Bb(16,0,null,null,3,"ion-note",[],[[4,"padding-left",null]],null,null,s.xb,s.E)),e.Ab(17,49152,null,0,a.Y,[e.j,e.p,e.F],null,null),(l()(),e.Vb(18,0,[" "," "])),e.Pb(131072,c.a,[e.j,e.F])],(function(l,n){l(n,2,0,"none")}),(function(l,n){var u=n.component;l(n,5,0,e.Fb(1,"",null!=u.userInfo&&u.userInfo.avatar?u.userInfo.avatar:"assets/imgs/avatar.jpg","")),l(n,9,0,null==u.userInfo?null:u.userInfo.fullname);var t=e.Wb(n,13,0,l(n,15,0,e.Nb(n.parent.parent,0),e.Wb(n,13,0,l(n,14,0,e.Nb(n.parent.parent,1),n.parent.context.$implicit.request))));l(n,13,0,t),l(n,16,0,"100px"),l(n,18,0,e.Wb(n,18,0,e.Nb(n,19).transform(n.parent.context.$implicit.created_time)))}))}function j(l){return e.Xb(0,[(l()(),e.Bb(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),e.qb(16777216,null,null,1,null,F)),e.Ab(2,16384,null,0,p.l,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(16777216,null,null,1,null,x)),e.Ab(4,16384,null,0,p.l,[e.W,e.S],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,2,0,(null==n.context.$implicit?null:n.context.$implicit.response)&&(!u.isRepairing||u.conversion.created_time!==n.context.$implicit.created_time)),l(n,4,0,(null==n.context.$implicit?null:n.context.$implicit.request)&&(!u.isRepairing||u.conversion.created_time!==n.context.$implicit.created_time))}),null)}function N(l){return e.Xb(0,[e.Pb(0,h.q,[m.b]),e.Pb(0,h.m,[]),(l()(),e.Bb(2,0,null,null,11,"ion-header",[],null,null,null,s.mb,s.t)),e.Ab(3,49152,null,0,a.B,[e.j,e.p,e.F],null,null),(l()(),e.Bb(4,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,s.Lb,s.S)),e.Ab(5,49152,null,0,a.Cb,[e.j,e.p,e.F],{color:[0,"color"]},null),(l()(),e.Bb(6,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,s.X,s.e)),e.Ab(7,49152,null,0,a.l,[e.j,e.p,e.F],null,null),(l()(),e.Bb(8,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Nb(l,10).onClick(u)&&t),t}),s.V,s.c)),e.Ab(9,49152,null,0,a.g,[e.j,e.p,e.F],null,null),e.Ab(10,16384,null,0,a.h,[[2,a.ib],a.Jb],null,null),(l()(),e.Bb(11,0,null,0,2,"ion-title",[],null,null,null,s.Jb,s.Q)),e.Ab(12,49152,null,0,a.Ab,[e.j,e.p,e.F],null,null),(l()(),e.Vb(-1,0,["AI-Tr\xf2 chuy\xean v\u1edbi m\xe1y"])),(l()(),e.Bb(14,0,null,null,31,"ion-content",[],null,null,null,s.gb,s.n)),e.Ab(15,49152,null,0,a.u,[e.j,e.p,e.F],null,null),(l()(),e.Bb(16,0,null,0,19,"ion-item",[["class","idea-created"],["lines","none"]],null,null,null,s.qb,s.x)),e.Ab(17,49152,null,0,a.H,[e.j,e.p,e.F],{lines:[0,"lines"]},null),(l()(),e.Bb(18,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,s.U,s.b)),e.Ab(19,49152,null,0,a.f,[e.j,e.p,e.F],null,null),(l()(),e.Bb(20,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),e.Bb(21,0,null,0,10,"ion-label",[["class","ion-text-wrap"]],null,null,null,s.rb,s.y)),e.Ab(22,49152,null,0,a.N,[e.j,e.p,e.F],null,null),(l()(),e.Bb(23,0,null,0,1,"strong",[["slot","start"]],null,null,null,null,null)),(l()(),e.Vb(24,null,[" "," "])),(l()(),e.Bb(25,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Vb(26,0,[" "," "])),(l()(),e.Bb(27,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Bb(28,0,null,0,3,"ion-note",[],null,null,null,s.xb,s.E)),e.Ab(29,49152,null,0,a.Y,[e.j,e.p,e.F],null,null),(l()(),e.Vb(30,0,["",""])),e.Pb(131072,c.a,[e.j,e.F]),(l()(),e.Bb(32,0,null,0,3,"ion-button",[["fill","clear"],["shape","round"],["size","small"],["slote","end"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onClickMore(u)&&e),e}),s.W,s.d)),e.Ab(33,49152,null,0,a.k,[e.j,e.p,e.F],{fill:[0,"fill"],shape:[1,"shape"],size:[2,"size"]},null),(l()(),e.Bb(34,0,null,0,1,"ion-icon",[["name","ios-more"],["slot","icon-only"]],null,null,null,s.nb,s.u)),e.Ab(35,49152,null,0,a.C,[e.j,e.p,e.F],{name:[0,"name"]},null),(l()(),e.qb(16777216,null,0,1,null,B)),e.Ab(37,16384,null,0,p.l,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Bb(38,0,null,0,7,"ion-list",[["class","comment-list"]],null,null,null,s.tb,s.z)),e.Ab(39,49152,null,0,a.O,[e.j,e.p,e.F],null,null),(l()(),e.qb(16777216,null,0,1,null,C)),e.Ab(41,16384,null,0,p.l,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(16777216,null,0,1,null,A)),e.Ab(43,16384,null,0,p.l,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(16777216,null,0,1,null,j)),e.Ab(45,278528,null,0,p.k,[e.W,e.S,e.x],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,5,0,"primary"),l(n,17,0,"none"),l(n,33,0,"clear","round","small"),l(n,35,0,"ios-more"),l(n,37,0,!u.isRepairing),l(n,41,0,!(null!=u.conversion&&u.conversion.response)&&!u.isRepairing&&(null==u.conversion?null:u.conversion.request)),l(n,43,0,u.isRepairing),l(n,45,0,u.conversations)}),(function(l,n){var u=n.component;l(n,20,0,e.Fb(1,"",null==u.chatbot?null:u.chatbot.avatar,"")),l(n,24,0,null==u.chatbot?null:u.chatbot.username),l(n,26,0,null==u.chatbot?null:u.chatbot.fullname),l(n,30,0,e.Wb(n,30,0,e.Nb(n,31).transform(null==u.chatbot?null:u.chatbot.created_time)))}))}function k(l){return e.Xb(0,[(l()(),e.Bb(0,0,null,null,1,"app-chat-bot",[],null,null,null,N,f)),e.Ab(1,114688,null,0,d,[v.a,h.g,h.b,g.a],null,null)],(function(l,n){l(n,1,0)}),null)}var I=e.xb("app-chat-bot",d,k,{},{},[]),L=u("FOYl"),R=u("IheW"),w=u("6GXZ"),_=u("d2mR"),S=u("YD+O"),q=u("EpeG"),E=u("7ePi"),O=u("jVYb");class P{}u.d(n,"ChatBotPageModuleNgFactory",(function(){return M}));var M=e.yb(t,[],(function(l){return e.Kb([e.Lb(512,e.m,e.jb,[[8,[o.b,o.c,o.d,o.h,o.i,o.a,o.e,o.f,o.g,i.a,I]],[3,e.m],e.D]),e.Lb(4608,p.n,p.m,[e.z,[2,p.w]]),e.Lb(4608,r.k,r.k,[]),e.Lb(4608,a.b,a.b,[e.F,e.g]),e.Lb(4608,a.Ib,a.Ib,[a.b,e.m,e.w]),e.Lb(4608,a.Mb,a.Mb,[a.b,e.m,e.w]),e.Lb(5120,L.b,L.f,[]),e.Lb(5120,L.a,L.e,[]),e.Lb(4608,R.i,R.o,[p.c,e.I,R.m]),e.Lb(4608,R.p,R.p,[R.i,R.n]),e.Lb(5120,R.a,(function(l){return[l,new h.s]}),[R.p]),e.Lb(4608,R.l,R.l,[]),e.Lb(6144,R.j,null,[R.l]),e.Lb(4608,R.h,R.h,[R.j]),e.Lb(6144,R.b,null,[R.h]),e.Lb(4608,R.f,R.k,[R.b,e.w]),e.Lb(4608,R.c,R.c,[R.f]),e.Lb(4608,w.a,w.a,[]),e.Lb(1073742336,p.b,p.b,[]),e.Lb(1073742336,r.j,r.j,[]),e.Lb(1073742336,r.b,r.b,[]),e.Lb(1073742336,a.Eb,a.Eb,[]),e.Lb(1073742336,b.b,b.b,[]),e.Lb(1073742336,_.a,_.a,[]),e.Lb(1073742336,S.b,S.b,[]),e.Lb(1073742336,q.b,q.b,[]),e.Lb(1073742336,E.b,E.b,[]),e.Lb(1073742336,O.b,O.b,[]),e.Lb(1073742336,L.c,L.c,[]),e.Lb(1073742336,R.e,R.e,[]),e.Lb(1073742336,R.d,R.d,[]),e.Lb(1073742336,h.o,h.o,[]),e.Lb(1073742336,v.p,v.p,[[2,v.u],[2,v.m]]),e.Lb(1073742336,P,P,[]),e.Lb(1073742336,t,t,[]),e.Lb(256,R.m,"XSRF-TOKEN",[]),e.Lb(256,R.n,"X-XSRF-TOKEN",[]),e.Lb(1024,v.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);