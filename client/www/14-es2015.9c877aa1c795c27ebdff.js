(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{yna7:function(n,l,u){"use strict";u.r(l);var e=u("8Y7J");class o{}var t=u("Uqf7"),r=u("pMnS"),b=u("oBZk"),i=u("ZZ/e"),a=u("SVse"),c=u("ddi3"),s=u("cUpR"),d=u("c/rV");class f{constructor(n,l,u){this.router=n,this.apiAuth=l,this.mainService=u}ngOnInit(){this.userInfo=this.mainService.getUserInfo(),this.refresh(),this.init()}init(){this.dynamicFormInput=JSON.stringify({okButton:{icon:"cube",name:"N\xe2ng c\u1ea5p CSDL",color:"danger",next:"CALLBACK",command:"RUN-SQL",url:this.apiAuth.serviceUrls.RESOURCE_SERVER+"/upgrade-database",token:!0},cancelButton:{icon:"close",next:"CLOSE"},items:[{type:"text_area",key:"sql",name:"G\xf5 c\xe2u l\u1ec7nh sql \u0111\xfang csdl \u0111ang ho\u1ea1t \u0111\u1ed9ng",hint:"Nh\u1eadp l\u1ec7nh sql",input_type:"text",icon:"md-information-circle",validators:[{required:!0}]}]})}refresh(){"cuong.dq"!==this.userInfo.username&&99!==this.userInfo.role&&this.router.navigate(["/"])}onClickLogin(){this.router.navigate(["/login"])}onSelectedFinish(n){n?(this.errorMessage=n.error&&n.message?n.message:void 0,this.returnMessage=n.response_data&&"OK"===n.response_data.status&&n.response_data.message?n.response_data.message:void 0,n.response_data&&Array.isArray(n.response_data)&&n.response_data.length>0?(this.returnArray=n.response_data,this.returnHeader=Object.keys(this.returnArray[0])):(this.returnArray=void 0,this.returnHeader=void 0)):this.router.navigate(["/"])}}var p=u("iInd"),m=e.zb({encapsulation:0,styles:[[".table-row[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]{background:#99b7f0e0!important;color:#0a0909fb!important;font-weight:700;text-align:center}.table-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{border:.1em solid #fff;font-size:1.3em}.table-row[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]:nth-of-type(odd){background:#fafafaf6;color:#202020;opacity:.9}.table-row[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]:nth-of-type(even){background:#e6f5f8;color:#202020;opacity:.7}"]],data:{}});function g(n){return e.Wb(0,[(n()(),e.Bb(0,0,null,null,6,"ion-buttons",[["slot","end"]],null,null,null,b.X,b.e)),e.Ab(1,49152,null,0,i.l,[e.j,e.p,e.F],null,null),(n()(),e.Bb(2,0,null,0,4,"ion-button",[["shape","round"]],null,[[null,"click"]],(function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.onClickLogin()&&e),e}),b.W,b.d)),e.Ab(3,49152,null,0,i.k,[e.j,e.p,e.F],{shape:[0,"shape"]},null),(n()(),e.Bb(4,0,null,0,1,"ion-icon",[["slot","start"]],null,null,null,b.nb,b.u)),e.Ab(5,49152,null,0,i.C,[e.j,e.p,e.F],{name:[0,"name"]},null),(n()(),e.Ub(6,0,[" "," "]))],(function(n,l){var u=l.component;n(l,3,0,"round"),n(l,5,0,e.Fb(1,"",u.userInfo?"contact":"log-in",""))}),(function(n,l){var u=l.component;n(l,6,0,null==u.userInfo?null:u.userInfo.username)}))}function h(n){return e.Wb(0,[(n()(),e.Bb(0,0,null,null,6,"ion-grid",[["fixed",""]],null,null,null,b.lb,b.s)),e.Ab(1,49152,null,0,i.A,[e.j,e.p,e.F],{fixed:[0,"fixed"]},null),(n()(),e.Bb(2,0,null,0,4,"ion-row",[],null,null,null,b.Db,b.K)),e.Ab(3,49152,null,0,i.jb,[e.j,e.p,e.F],null,null),(n()(),e.Bb(4,0,null,0,2,"ion-col",[["size","12"],["style","background: red;color: white"]],null,null,null,b.fb,b.m)),e.Ab(5,49152,null,0,i.t,[e.j,e.p,e.F],{size:[0,"size"]},null),(n()(),e.Ub(6,0,["",""]))],(function(n,l){n(l,1,0,""),n(l,5,0,"12")}),(function(n,l){n(l,6,0,l.component.errorMessage)}))}function L(n){return e.Wb(0,[(n()(),e.Bb(0,0,null,null,6,"ion-grid",[["fixed",""]],null,null,null,b.lb,b.s)),e.Ab(1,49152,null,0,i.A,[e.j,e.p,e.F],{fixed:[0,"fixed"]},null),(n()(),e.Bb(2,0,null,0,4,"ion-row",[],null,null,null,b.Db,b.K)),e.Ab(3,49152,null,0,i.jb,[e.j,e.p,e.F],null,null),(n()(),e.Bb(4,0,null,0,2,"ion-col",[["size","12"],["style","background-color: gray; color: darkblue;"]],null,null,null,b.fb,b.m)),e.Ab(5,49152,null,0,i.t,[e.j,e.p,e.F],{size:[0,"size"]},null),(n()(),e.Ub(6,0,["",""]))],(function(n,l){n(l,1,0,""),n(l,5,0,"12")}),(function(n,l){n(l,6,0,l.component.returnMessage)}))}function F(n){return e.Wb(0,[(n()(),e.Bb(0,0,null,null,2,"ion-col",[],null,null,null,b.fb,b.m)),e.Ab(1,49152,null,0,i.t,[e.j,e.p,e.F],null,null),(n()(),e.Ub(2,0,["",""]))],null,(function(n,l){n(l,2,0,l.context.$implicit)}))}function A(n){return e.Wb(0,[(n()(),e.Bb(0,0,null,null,2,"ion-col",[],null,null,null,b.fb,b.m)),e.Ab(1,49152,null,0,i.t,[e.j,e.p,e.F],null,null),(n()(),e.Ub(2,0,["",""]))],null,(function(n,l){n(l,2,0,l.parent.context.$implicit[l.context.$implicit])}))}function j(n){return e.Wb(0,[(n()(),e.Bb(0,0,null,null,3,"ion-row",[],null,null,null,b.Db,b.K)),e.Ab(1,49152,null,0,i.jb,[e.j,e.p,e.F],null,null),(n()(),e.qb(16777216,null,0,1,null,A)),e.Ab(3,278528,null,0,a.j,[e.W,e.S,e.x],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,3,0,l.component.returnHeader)}),null)}function y(n){return e.Wb(0,[(n()(),e.Bb(0,0,null,null,7,"ion-grid",[["class","table-row"],["fixed",""]],null,null,null,b.lb,b.s)),e.Ab(1,49152,null,0,i.A,[e.j,e.p,e.F],{fixed:[0,"fixed"]},null),(n()(),e.Bb(2,0,null,0,3,"ion-row",[["class","table-header"]],null,null,null,b.Db,b.K)),e.Ab(3,49152,null,0,i.jb,[e.j,e.p,e.F],null,null),(n()(),e.qb(16777216,null,0,1,null,F)),e.Ab(5,278528,null,0,a.j,[e.W,e.S,e.x],{ngForOf:[0,"ngForOf"]},null),(n()(),e.qb(16777216,null,0,1,null,j)),e.Ab(7,278528,null,0,a.j,[e.W,e.S,e.x],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var u=l.component;n(l,1,0,""),n(l,5,0,u.returnHeader),n(l,7,0,u.returnArray)}),null)}function k(n){return e.Wb(0,[(n()(),e.Bb(0,0,null,null,9,"ion-header",[],null,null,null,b.mb,b.t)),e.Ab(1,49152,null,0,i.B,[e.j,e.p,e.F],null,null),(n()(),e.Bb(2,0,null,0,7,"ion-toolbar",[["color","primary"]],null,null,null,b.Lb,b.S)),e.Ab(3,49152,null,0,i.Cb,[e.j,e.p,e.F],{color:[0,"color"]},null),(n()(),e.Bb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,b.X,b.e)),e.Ab(5,49152,null,0,i.l,[e.j,e.p,e.F],null,null),(n()(),e.Bb(6,0,null,0,1,"ion-menu-button",[],null,null,null,b.ub,b.C)),e.Ab(7,49152,null,0,i.R,[e.j,e.p,e.F],null,null),(n()(),e.qb(16777216,null,0,1,null,g)),e.Ab(9,16384,null,0,a.k,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(n()(),e.Bb(10,0,null,null,11,"ion-content",[],null,null,null,b.gb,b.n)),e.Ab(11,49152,null,0,i.u,[e.j,e.p,e.F],null,null),(n()(),e.Bb(12,0,null,0,3,"ion-card",[["class","card-add-new"]],null,null,null,b.cb,b.f)),e.Ab(13,49152,null,0,i.m,[e.j,e.p,e.F],null,null),(n()(),e.Bb(14,0,null,0,1,"card-dynamic-form",[],null,[[null,"onSelectedFinish"]],(function(n,l,u){var e=!0;return"onSelectedFinish"===l&&(e=!1!==n.component.onSelectedFinish(u)&&e),e}),t.k,t.j)),e.Ab(15,114688,null,0,c.d,[c.g,c.b,s.b,c.r,c.j,i.Mb],{dynamicFormInput:[0,"dynamicFormInput"],dynamicFormValue:[1,"dynamicFormValue"],dynamicCallback:[2,"dynamicCallback"]},{onSelectedFinish:"onSelectedFinish"}),(n()(),e.qb(16777216,null,0,1,null,h)),e.Ab(17,16384,null,0,a.k,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(n()(),e.qb(16777216,null,0,1,null,L)),e.Ab(19,16384,null,0,a.k,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(n()(),e.qb(16777216,null,0,1,null,y)),e.Ab(21,16384,null,0,a.k,[e.W,e.S],{ngIf:[0,"ngIf"]},null)],(function(n,l){var u=l.component;n(l,3,0,"primary"),n(l,9,0,u.userInfo),n(l,15,0,u.dynamicFormInput,u.dynamicFormValue,u.dynamicCallback),n(l,17,0,u.errorMessage),n(l,19,0,u.returnMessage),n(l,21,0,u.returnHeader)}),null)}function B(n){return e.Wb(0,[(n()(),e.Bb(0,0,null,null,1,"app-upgrade",[],null,null,null,k,m)),e.Ab(1,114688,null,0,f,[p.m,c.b,d.a],null,null)],(function(n,l){n(l,1,0)}),null)}var I=e.xb("app-upgrade",f,B,{},{},[]),S=u("s7LF"),w=u("FOYl"),O=u("IheW"),v=u("6GXZ"),x=u("YD+O"),C=u("EpeG"),M=u("7ePi"),_=u("jVYb"),W=u("6bhV"),q=u("d2mR");class U{}u.d(l,"UpgradePageModuleNgFactory",(function(){return E}));var E=e.yb(o,[],(function(n){return e.Kb([e.Lb(512,e.m,e.jb,[[8,[t.b,t.c,t.d,t.h,t.i,t.a,t.e,t.f,t.g,r.a,I]],[3,e.m],e.D]),e.Lb(4608,a.m,a.l,[e.z,[2,a.t]]),e.Lb(4608,S.k,S.k,[]),e.Lb(4608,i.b,i.b,[e.F,e.g]),e.Lb(4608,i.Ib,i.Ib,[i.b,e.m,e.w]),e.Lb(4608,i.Mb,i.Mb,[i.b,e.m,e.w]),e.Lb(5120,w.b,w.f,[]),e.Lb(5120,w.a,w.e,[]),e.Lb(4608,O.i,O.o,[a.c,e.I,O.m]),e.Lb(4608,O.p,O.p,[O.i,O.n]),e.Lb(5120,O.a,(function(n){return[n,new c.s]}),[O.p]),e.Lb(4608,O.l,O.l,[]),e.Lb(6144,O.j,null,[O.l]),e.Lb(4608,O.h,O.h,[O.j]),e.Lb(6144,O.b,null,[O.h]),e.Lb(4608,O.f,O.k,[O.b,e.w]),e.Lb(4608,O.c,O.c,[O.f]),e.Lb(4608,v.a,v.a,[]),e.Lb(1073742336,a.b,a.b,[]),e.Lb(1073742336,S.j,S.j,[]),e.Lb(1073742336,S.b,S.b,[]),e.Lb(1073742336,i.Eb,i.Eb,[]),e.Lb(1073742336,x.b,x.b,[]),e.Lb(1073742336,C.b,C.b,[]),e.Lb(1073742336,M.b,M.b,[]),e.Lb(1073742336,_.b,_.b,[]),e.Lb(1073742336,w.c,w.c,[]),e.Lb(1073742336,O.e,O.e,[]),e.Lb(1073742336,O.d,O.d,[]),e.Lb(1073742336,c.o,c.o,[]),e.Lb(1073742336,W.b,W.b,[]),e.Lb(1073742336,q.a,q.a,[]),e.Lb(1073742336,p.p,p.p,[[2,p.u],[2,p.m]]),e.Lb(1073742336,U,U,[]),e.Lb(1073742336,o,o,[]),e.Lb(256,O.m,"XSRF-TOKEN",[]),e.Lb(256,O.n,"X-XSRF-TOKEN",[]),e.Lb(1024,p.k,(function(){return[[{path:"",component:f}]]}),[])])}))}}]);