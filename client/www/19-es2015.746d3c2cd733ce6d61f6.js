(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{Da24:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J");class i{}var o=t("pMnS"),u=t("oBZk"),a=t("ZZ/e"),r=t("OL44"),b=t("ddi3"),c=t("cUpR"),p=t("SVse"),s=t("c/rV");class m{constructor(n,l,t,e){this.router=n,this.apiCommons=l,this.apiAuth=t,this.mainService=e,this.callbackProcess=(function(n){return new Promise((l,t)=>{n.error?this.apiCommons.presentAlert("Error:<br>"+(n.message?n.message:"Error Unknow: "+JSON.stringify(n.error,null,2))):n.response_data&&("ADD-REVIEW"===n.button.command&&this.refresh(),"EDIT-REVIEW"===n.button.command&&this.refresh()),l({next:"CLOSE"})})}).bind(this)}ngOnInit(){this.init(),this.refresh()}init(){this.userInfo=this.mainService.getUserInfo(),this.isMobile=this.apiCommons.isMobile()}refresh(){this.apiAuth.getDynamicUrl(this.apiAuth.serviceUrls.RESOURCE_SERVER+"/get-reviews",!0).then(n=>{this.reviewList=n}).catch(n=>{console.log(n)})}onClickEvaluate(n){this.router.navigate(["/ideas-review-detail"],{queryParams:{id:n.id}})}onClickEdit(n){this.apiCommons.openModal(b.h,{parent:this,callback:this.callbackProcess,form:{title:"S\u1eeda th\xf4ng tin k\u1ef3 h\u1ecdp",buttons:[{color:"danger",icon:"close",next:"CLOSE"}],items:[{type:"hidden",key:"id",value:n.id},{type:"text",key:"name",value:n.name,name:"T\xean k\u1ef3 h\u1ecdp",hint:"Nh\u1eadp t\xean k\u1ef3 h\u1ecdp (5-200 k\xfd t\u1ef1)",input_type:"text",icon:"md-help",validators:[{required:!0,min:5,max:200}]},{type:"text_area",key:"description",value:n.description,name:"M\xf4 t\u1ea3 \u0111\u1ee3t \u0111\xe1nh gi\xe1: th\xe0nh ph\u1ea7n, h\u1ed9i \u0111\u1ed3ng? G\xf5 n\u1ed9i dung nh\u1eadn x\xe9t c\u1ee7a h\u1ed9i \u0111\u1ed3ng",input_type:"text",icon:"md-information-circle",validators:[{required:!0,min:10}]},{type:"upload-files",name:"Th\xeam file \u0111\xednh k\xe8m",multiple:"multiple",accept:"image/gif, image/jpeg, image/png\n                , application/pdf\n                , .txt, .md, .zip, .tar\n                , .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\n                , application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"},{type:"button",options:[{name:"S\u1eeda k\u1ef3 h\u1ecdp",next:"CALLBACK",url:this.apiAuth.serviceUrls.RESOURCE_SERVER+"/add-review",type:"FORM-DATA",token:!0,command:"EDIT-REVIEW"}]}]}})}onClickAdd(){this.apiCommons.openModal(b.h,{parent:this,callback:this.callbackProcess,form:{title:"T\u1ea1o m\u1ed9t k\u1ef3 h\u1ecdp m\u1edbi",buttons:[{color:"danger",icon:"close",next:"CLOSE"}],items:[{type:"text",key:"name",value:"",name:"Nh\u1eadp t\xean c\u1ee7a k\u1ef3 h\u1ecdp? ",hint:"Nh\u1eadp t\xean k\u1ef3 h\u1ecdp (5-200 k\xfd t\u1ef1)",input_type:"text",icon:"md-help",validators:[{required:!0,min:5,max:200}]},{type:"text_area",key:"description",value:"",name:"M\xf4 t\u1ea3 \u0111\u1ee3t \u0111\xe1nh gi\xe1: th\xe0nh ph\u1ea7n, h\u1ed9i \u0111\u1ed3ng? G\xf5 n\u1ed9i dung nh\u1eadn x\xe9t c\u1ee7a h\u1ed9i \u0111\u1ed3ng",input_type:"text",icon:"md-information-circle",validators:[{required:!0,min:10}]},{type:"upload-files",name:"Files \u0111\xednh k\xe8m",multiple:"multiple",accept:"image/gif, image/jpeg, image/png\n                , application/pdf\n                , .txt, .md, .zip, .tar\n                , .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\n                , application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"},{type:"button",options:[{name:"T\u1ea1o m\u1edbi k\u1ef3 h\u1ecdp",next:"CALLBACK",url:this.apiAuth.serviceUrls.RESOURCE_SERVER+"/add-review",type:"FORM-DATA",token:!0,command:"ADD-REVIEW"}]}]}})}}var d=t("iInd"),h=e.zb({encapsulation:0,styles:[[""]],data:{}});function f(n){return e.Xb(0,[(n()(),e.Bb(0,0,null,null,6,"ion-buttons",[["slot","end"]],null,null,null,u.X,u.e)),e.Ab(1,49152,null,0,a.l,[e.j,e.p,e.F],null,null),(n()(),e.Bb(2,0,null,0,4,"ion-button",[["shape","round"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onClickAdd()&&e),e}),u.W,u.d)),e.Ab(3,49152,null,0,a.k,[e.j,e.p,e.F],{shape:[0,"shape"]},null),(n()(),e.Bb(4,0,null,0,1,"ion-icon",[["name","add"]],[[8,"slot",0]],null,null,u.nb,u.u)),e.Ab(5,49152,null,0,a.C,[e.j,e.p,e.F],{name:[0,"name"]},null),(n()(),e.Vb(6,0,[" "," "]))],(function(n,l){n(l,3,0,"round"),n(l,5,0,"add")}),(function(n,l){var t=l.component;n(l,4,0,e.Fb(1,"",t.isMobile?"icon-only":"start","")),n(l,6,0,t.isMobile?"":"T\u1ea1o k\u1ef3 h\u1ecdp")}))}function L(n){return e.Xb(0,[(n()(),e.Bb(0,0,null,null,18,"ion-item",[],null,null,null,u.qb,u.x)),e.Ab(1,49152,null,0,a.H,[e.j,e.p,e.F],null,null),(n()(),e.Bb(2,0,null,0,10,"ion-label",[["class","ion-text-wrap"],["style","text-align: justify;"]],null,null,null,u.rb,u.y)),e.Ab(3,49152,null,0,a.N,[e.j,e.p,e.F],null,null),(n()(),e.Bb(4,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),e.Vb(5,null,["",""])),(n()(),e.Bb(6,0,null,0,2,"p",[],[[8,"innerHTML",1]],null,null,null,null)),e.Rb(7,1),e.Rb(8,1),(n()(),e.Bb(9,0,null,0,3,"ion-note",[],null,null,null,u.xb,u.E)),e.Ab(10,49152,null,0,a.Y,[e.j,e.p,e.F],null,null),(n()(),e.Vb(11,0,["",""])),e.Pb(131072,r.a,[e.j,e.F]),(n()(),e.Bb(13,0,null,0,2,"ion-button",[["color","secondary"],["shape","round"],["slot","end"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onClickEvaluate(n.context.$implicit)&&e),e}),u.W,u.d)),e.Ab(14,49152,null,0,a.k,[e.j,e.p,e.F],{color:[0,"color"],shape:[1,"shape"]},null),(n()(),e.Vb(-1,0,[" \u0110\xe1nh gi\xe1 "])),(n()(),e.Bb(16,0,null,0,2,"ion-button",[["color","danger"],["shape","round"],["slot","end"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onClickEdit(n.context.$implicit)&&e),e}),u.W,u.d)),e.Ab(17,49152,null,0,a.k,[e.j,e.p,e.F],{color:[0,"color"],shape:[1,"shape"]},null),(n()(),e.Vb(-1,0,[" S\u1eeda "]))],(function(n,l){n(l,14,0,"secondary","round"),n(l,17,0,"danger","round")}),(function(n,l){n(l,5,0,l.context.$implicit.name);var t=e.Wb(l,6,0,n(l,8,0,e.Nb(l.parent,0),e.Wb(l,6,0,n(l,7,0,e.Nb(l.parent,1),l.context.$implicit.description))));n(l,6,0,t),n(l,11,0,e.Wb(l,11,0,e.Nb(l,12).transform(l.context.$implicit.created_time)))}))}function g(n){return e.Xb(0,[e.Pb(0,b.q,[c.b]),e.Pb(0,b.m,[]),(n()(),e.Bb(2,0,null,null,12,"ion-header",[],null,null,null,u.mb,u.t)),e.Ab(3,49152,null,0,a.B,[e.j,e.p,e.F],null,null),(n()(),e.Bb(4,0,null,0,10,"ion-toolbar",[["color","primary"]],null,null,null,u.Lb,u.S)),e.Ab(5,49152,null,0,a.Cb,[e.j,e.p,e.F],{color:[0,"color"]},null),(n()(),e.Bb(6,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,u.X,u.e)),e.Ab(7,49152,null,0,a.l,[e.j,e.p,e.F],null,null),(n()(),e.Bb(8,0,null,0,1,"ion-menu-button",[],null,null,null,u.ub,u.C)),e.Ab(9,49152,null,0,a.R,[e.j,e.p,e.F],null,null),(n()(),e.Bb(10,0,null,0,2,"ion-title",[],null,null,null,u.Jb,u.Q)),e.Ab(11,49152,null,0,a.Ab,[e.j,e.p,e.F],null,null),(n()(),e.Vb(-1,0,["H\u1ecdp h\u1ed9i \u0111\u1ed3ng"])),(n()(),e.qb(16777216,null,0,1,null,f)),e.Ab(14,16384,null,0,p.l,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(n()(),e.Bb(15,0,null,null,5,"ion-content",[],null,null,null,u.gb,u.n)),e.Ab(16,49152,null,0,a.u,[e.j,e.p,e.F],null,null),(n()(),e.Bb(17,0,null,0,3,"ion-list",[],null,null,null,u.tb,u.z)),e.Ab(18,49152,null,0,a.O,[e.j,e.p,e.F],null,null),(n()(),e.qb(16777216,null,0,1,null,L)),e.Ab(20,278528,null,0,p.k,[e.W,e.S,e.x],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var t=l.component;n(l,5,0,"primary"),n(l,14,0,t.userInfo),n(l,20,0,t.reviewList)}),null)}function k(n){return e.Xb(0,[(n()(),e.Bb(0,0,null,null,1,"app-ideas-review",[],null,null,null,g,h)),e.Ab(1,114688,null,0,m,[d.m,b.g,b.b,s.a],null,null)],(function(n,l){n(l,1,0)}),null)}var v=e.xb("app-ideas-review",m,k,{},{},[]),A=t("Uqf7"),E=t("s7LF"),x=t("FOYl"),y=t("IheW"),F=t("6GXZ"),w=t("6bhV"),R=t("d2mR");class j{}var C=t("YD+O"),B=t("EpeG"),S=t("7ePi"),I=t("jVYb");t.d(l,"IdeasReviewPageModuleNgFactory",(function(){return O}));var O=e.yb(i,[],(function(n){return e.Kb([e.Lb(512,e.m,e.jb,[[8,[o.a,v,A.b,A.c,A.d,A.h,A.i,A.a,A.e,A.f,A.g]],[3,e.m],e.D]),e.Lb(4608,p.n,p.m,[e.z,[2,p.w]]),e.Lb(4608,E.k,E.k,[]),e.Lb(4608,a.b,a.b,[e.F,e.g]),e.Lb(4608,a.Ib,a.Ib,[a.b,e.m,e.w]),e.Lb(4608,a.Mb,a.Mb,[a.b,e.m,e.w]),e.Lb(5120,x.b,x.f,[]),e.Lb(5120,x.a,x.e,[]),e.Lb(4608,y.i,y.o,[p.c,e.I,y.m]),e.Lb(4608,y.p,y.p,[y.i,y.n]),e.Lb(5120,y.a,(function(n){return[n,new b.s]}),[y.p]),e.Lb(4608,y.l,y.l,[]),e.Lb(6144,y.j,null,[y.l]),e.Lb(4608,y.h,y.h,[y.j]),e.Lb(6144,y.b,null,[y.h]),e.Lb(4608,y.f,y.k,[y.b,e.w]),e.Lb(4608,y.c,y.c,[y.f]),e.Lb(4608,F.a,F.a,[]),e.Lb(1073742336,p.b,p.b,[]),e.Lb(1073742336,E.j,E.j,[]),e.Lb(1073742336,E.b,E.b,[]),e.Lb(1073742336,a.Eb,a.Eb,[]),e.Lb(1073742336,w.b,w.b,[]),e.Lb(1073742336,R.a,R.a,[]),e.Lb(1073742336,d.p,d.p,[[2,d.u],[2,d.m]]),e.Lb(1073742336,j,j,[]),e.Lb(1073742336,C.b,C.b,[]),e.Lb(1073742336,B.b,B.b,[]),e.Lb(1073742336,S.b,S.b,[]),e.Lb(1073742336,I.b,I.b,[]),e.Lb(1073742336,x.c,x.c,[]),e.Lb(1073742336,y.e,y.e,[]),e.Lb(1073742336,y.d,y.d,[]),e.Lb(1073742336,b.o,b.o,[]),e.Lb(1073742336,i,i,[]),e.Lb(1024,d.k,(function(){return[[{path:"",component:m}]]}),[]),e.Lb(256,y.m,"XSRF-TOKEN",[]),e.Lb(256,y.n,"X-XSRF-TOKEN",[])])}))}}]);