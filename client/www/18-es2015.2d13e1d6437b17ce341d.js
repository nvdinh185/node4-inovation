(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"7AFQ":function(l,n,t){"use strict";t.r(n);var u=t("8Y7J");class e{}var i=t("pMnS"),o=t("oBZk"),r=t("ZZ/e"),a=t("SVse"),c=t("OL44"),b=t("mrSG"),s=t("ddi3"),p=t("c/rV");class d{constructor(l,n,t,u){this.route=l,this.apiCommons=n,this.apiAuth=t,this.mainService=u,this.callbackProcess=(function(l){return new Promise((n,t)=>{l.error?this.apiCommons.presentAlert("Error:<br>"+(l.message?l.message:"Error Unknow: "+JSON.stringify(l.error,null,2))):l.response_data&&"ADD-PRIZE"===l.button.command&&this.refresh(),n({next:"CLOSE"})})}).bind(this)}ngOnInit(){this.route.queryParams.subscribe(l=>{this.reviewId=l.id,this.refresh()}),this.init()}createHeader(){Object.keys(this.reviewDetail[0]),this.returnHeader=[{key:"title",value:"Ch\u1ee7 \u0111\u1ec1"},{key:"description",value:"M\xf4 t\u1ea3"},{key:"category_name",value:"Ch\u1ee7 \u0111\u1ec1"},{key:"status_name",value:"L\u0129nh v\u1ef1c"},{key:"created_time",value:"Ng\xe0y t\u1ea1o"},{key:"value_prize",value:"Gi\u1ea3i th\u01b0\u1edfng"}]}init(){this.userInfo=this.mainService.getUserInfo(),this.isMobile=this.apiCommons.isMobile()}refresh(){this.apiAuth.getDynamicUrl(this.apiAuth.serviceUrls.RESOURCE_SERVER+"/get-review-detail?id="+this.reviewId,!0).then(l=>{this.reviewDetail=l,this.createHeader()}).catch(l=>console.log("L\u1ed7i l\u1ea5y chi ti\u1ebft",l))}onClickSearch(){}onClickEvaluate(l){return b.b(this,void 0,void 0,(function*(){try{this.parameters=yield this.apiAuth.getDynamicUrl(this.apiAuth.serviceUrls.RESOURCE_SERVER+"/get-idea-parameters",!0)}catch(n){}this.apiCommons.openModal(s.h,{parent:this,callback:this.callbackProcess,form:{title:"\u0110\xe1nh gi\xe1 \xfd t\u01b0\u1edfng",buttons:[{color:"danger",icon:"close",next:"CLOSE"}],items:[{type:"details",details:[{name:"Ch\u1ee7 \u0111\u1ec1 #"+l.id,value:l.title},{name:"L\u0129nh v\u1ef1c:",value:l.category_name},{name:"Tr\u1ea1ng Th\xe1i:",value:l.status_name}]},{type:"hidden",key:"idea_id",value:l.id},{type:"hidden",key:"review_id",value:this.reviewId},{type:"text",key:"value_prize",value:"",name:"Nh\u1eadp gi\u1ea3i th\u01b0\u1edfng?",hint:"Nh\u1eadp gi\xe1 tr\u1ecb c\u1ee7a gi\u1ea3i th\u01b0\u1edfng (vd: 200k)",input_type:"text",icon:"md-help",validators:[{required:!0}]},{type:"text_area",key:"description",value:"",name:"Nh\u1eadp nh\u1eadn x\xe9t c\u1ee7a h\u1ed9i \u0111\u1ed3ng cho \xfd t\u01b0\u1edfng n\xe0y",input_type:"text",icon:"md-information-circle",validators:[{required:!0,min:5}]},{type:"select",key:"idea_status",value:""+l.status,name:"Tr\u1ea1ng th\xe1i c\u1ee7a \xfd t\u01b0\u1edfng?",icon:"clock",options:this.parameters&&this.parameters.ideas_statuses?this.parameters.ideas_statuses:[],color:"secondary"},{type:"button",options:[{name:"T\u1ea1o \u0111\xe1nh gi\xe1 \xfd t\u01b0\u1edfng",next:"CALLBACK",url:this.apiAuth.serviceUrls.RESOURCE_SERVER+"/add-idea-prize",token:!0,command:"ADD-PRIZE"}]}]}})}))}}var h=t("iInd"),m=u.zb({encapsulation:0,styles:[[".table-row[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]{background:#99b7f0e0!important;color:#0a0909fb!important;font-weight:700;text-align:center}.table-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{border:.1em solid #fff;font-size:1em}.table-row[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]:nth-of-type(odd){background:#fafafaf6;color:#202020;opacity:.9}.table-row[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]:nth-of-type(even){background:#e6f5f8;color:#202020;opacity:.7}.desc-text-wrap[_ngcontent-%COMP%]{display:block;display:-webkit-box;text-align:justify;max-width:400px;height:15.6em;font-size:13;line-height:1.2em;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}"]],data:{}});function f(l){return u.Xb(0,[(l()(),u.Bb(0,0,null,null,5,"ion-buttons",[["slot","end"]],null,null,null,o.X,o.e)),u.Ab(1,49152,null,0,r.l,[u.j,u.p,u.F],null,null),(l()(),u.Bb(2,0,null,0,3,"ion-button",[["shape","round"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.onClickSearch()&&u),u}),o.W,o.d)),u.Ab(3,49152,null,0,r.k,[u.j,u.p,u.F],{shape:[0,"shape"]},null),(l()(),u.Bb(4,0,null,0,1,"ion-icon",[["name","search"],["slot","icon-only"]],null,null,null,o.nb,o.u)),u.Ab(5,49152,null,0,r.C,[u.j,u.p,u.F],{name:[0,"name"]},null)],(function(l,n){l(n,3,0,"round"),l(n,5,0,"search")}),null)}function g(l){return u.Xb(0,[(l()(),u.Bb(0,0,null,null,2,"ion-col",[],null,null,null,o.fb,o.m)),u.Ab(1,49152,null,0,r.t,[u.j,u.p,u.F],null,null),(l()(),u.Vb(2,0,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit.value)}))}function v(l){return u.Xb(0,[(l()(),u.Bb(0,0,null,null,6,"ion-col",[["class","db-output"]],[[4,"text-align",null]],null,null,o.fb,o.m)),u.Sb(512,null,a.t,a.u,[u.x,u.y,u.p,u.K]),u.Ab(2,278528,null,0,a.j,[a.t],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u.Qb(3,{"desc-text-wrap":0}),u.Ab(4,49152,null,0,r.t,[u.j,u.p,u.F],null,null),(l()(),u.Vb(5,0,[" "," "])),u.Pb(131072,c.a,[u.j,u.F])],(function(l,n){var t=l(n,3,0,"description"===n.context.$implicit.key||"title"===n.context.$implicit.key);l(n,2,0,"db-output",t)}),(function(l,n){l(n,0,0,(null==n.parent.context.$implicit[n.context.$implicit]?null:n.parent.context.$implicit[n.context.$implicit].length)>0?"left":"right"),l(n,5,0,"created_time"!==n.context.$implicit.key?n.parent.context.$implicit[n.context.$implicit.key]:u.Wb(n,5,0,u.Nb(n,6).transform(n.parent.context.$implicit[n.context.$implicit.key])))}))}function y(l){return u.Xb(0,[(l()(),u.Bb(0,0,null,null,20,"ion-row",[],null,null,null,o.Db,o.K)),u.Ab(1,49152,null,0,r.jb,[u.j,u.p,u.F],null,null),(l()(),u.Bb(2,0,null,0,2,"ion-col",[["class","ion-text-right"]],null,null,null,o.fb,o.m)),u.Ab(3,49152,null,0,r.t,[u.j,u.p,u.F],null,null),(l()(),u.Vb(4,0,["",""])),(l()(),u.qb(16777216,null,0,1,null,v)),u.Ab(6,278528,null,0,a.k,[u.W,u.S,u.x],{ngForOf:[0,"ngForOf"]},null),(l()(),u.Bb(7,0,null,0,13,"ion-col",[],null,null,null,o.fb,o.m)),u.Ab(8,49152,null,0,r.t,[u.j,u.p,u.F],null,null),(l()(),u.Bb(9,0,null,0,11,"ion-row",[],null,null,null,o.Db,o.K)),u.Ab(10,49152,null,0,r.jb,[u.j,u.p,u.F],null,null),(l()(),u.Bb(11,0,null,0,4,"ion-col",[],null,null,null,o.fb,o.m)),u.Ab(12,49152,null,0,r.t,[u.j,u.p,u.F],null,null),(l()(),u.Bb(13,0,null,0,2,"ion-button",[["color","secondary"],["shape","round"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.onClickEvaluate(l.context.$implicit)&&u),u}),o.W,o.d)),u.Ab(14,49152,null,0,r.k,[u.j,u.p,u.F],{color:[0,"color"],shape:[1,"shape"]},null),(l()(),u.Vb(-1,0,[" \u0110\xe1nh gi\xe1 "])),(l()(),u.Bb(16,0,null,0,4,"ion-col",[["style","text-align: center;"]],null,null,null,o.fb,o.m)),u.Ab(17,49152,null,0,r.t,[u.j,u.p,u.F],null,null),(l()(),u.Bb(18,0,null,0,2,"ion-note",[["color","danger"]],null,null,null,o.xb,o.E)),u.Ab(19,49152,null,0,r.Y,[u.j,u.p,u.F],{color:[0,"color"]},null),(l()(),u.Vb(20,0,["",""]))],(function(l,n){l(n,6,0,n.component.returnHeader),l(n,14,0,"secondary","round"),l(n,19,0,"danger")}),(function(l,n){l(n,4,0,n.context.index+1),l(n,20,0,n.context.$implicit.value_prize?n.context.$implicit.value_prize:0)}))}function x(l){return u.Xb(0,[(l()(),u.Bb(0,0,null,null,13,"ion-grid",[["class","table-row"],["fixed",""]],null,null,null,o.lb,o.s)),u.Ab(1,49152,null,0,r.A,[u.j,u.p,u.F],{fixed:[0,"fixed"]},null),(l()(),u.Bb(2,0,null,0,9,"ion-row",[["class","table-header"]],null,null,null,o.Db,o.K)),u.Ab(3,49152,null,0,r.jb,[u.j,u.p,u.F],null,null),(l()(),u.Bb(4,0,null,0,2,"ion-col",[],null,null,null,o.fb,o.m)),u.Ab(5,49152,null,0,r.t,[u.j,u.p,u.F],null,null),(l()(),u.Vb(-1,0,["TT"])),(l()(),u.qb(16777216,null,0,1,null,g)),u.Ab(8,278528,null,0,a.k,[u.W,u.S,u.x],{ngForOf:[0,"ngForOf"]},null),(l()(),u.Bb(9,0,null,0,2,"ion-col",[],null,null,null,o.fb,o.m)),u.Ab(10,49152,null,0,r.t,[u.j,u.p,u.F],null,null),(l()(),u.Vb(-1,0,["Thao t\xe1c"])),(l()(),u.qb(16777216,null,0,1,null,y)),u.Ab(13,278528,null,0,a.k,[u.W,u.S,u.x],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,1,0,""),l(n,8,0,t.returnHeader),l(n,13,0,t.reviewDetail)}),null)}function k(l){return u.Xb(0,[(l()(),u.Bb(0,0,null,null,21,"ion-item",[],null,null,null,o.qb,o.x)),u.Ab(1,49152,null,0,r.H,[u.j,u.p,u.F],null,null),(l()(),u.Bb(2,0,null,0,9,"ion-label",[["class","ion-text-wrap"],["style","text-align: justify;"]],null,null,null,o.rb,o.y)),u.Ab(3,49152,null,0,r.N,[u.j,u.p,u.F],null,null),(l()(),u.Bb(4,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),u.Vb(5,null,["",""])),(l()(),u.Bb(6,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u.Vb(7,null,["",""])),(l()(),u.Bb(8,0,null,0,3,"ion-note",[],null,null,null,o.xb,o.E)),u.Ab(9,49152,null,0,r.Y,[u.j,u.p,u.F],null,null),(l()(),u.Vb(10,0,["",""])),u.Pb(131072,c.a,[u.j,u.F]),(l()(),u.Bb(12,0,null,0,9,"table",[["slot","end"]],null,null,null,null,null)),(l()(),u.Bb(13,0,null,null,8,"tbody",[],null,null,null,null,null)),(l()(),u.Bb(14,0,null,null,3,"tr",[],null,null,null,null,null)),(l()(),u.Bb(15,0,null,null,2,"ion-button",[["color","secondary"],["shape","round"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.onClickEvaluate(l.context.$implicit)&&u),u}),o.W,o.d)),u.Ab(16,49152,null,0,r.k,[u.j,u.p,u.F],{color:[0,"color"],shape:[1,"shape"]},null),(l()(),u.Vb(-1,0,[" \u0110\xe1nh gi\xe1 "])),(l()(),u.Bb(18,0,null,null,3,"tr",[["style","text-align: center;"]],null,null,null,null,null)),(l()(),u.Bb(19,0,null,null,2,"ion-note",[["color","danger"]],null,null,null,o.xb,o.E)),u.Ab(20,49152,null,0,r.Y,[u.j,u.p,u.F],{color:[0,"color"]},null),(l()(),u.Vb(21,0,["",""]))],(function(l,n){l(n,16,0,"secondary","round"),l(n,20,0,"danger")}),(function(l,n){l(n,5,0,n.context.$implicit.title),l(n,7,0,n.context.$implicit.description),l(n,10,0,u.Wb(n,10,0,u.Nb(n,11).transform(n.context.$implicit.created_time))),l(n,21,0,n.context.$implicit.value_prize)}))}function A(l){return u.Xb(0,[(l()(),u.Bb(0,0,null,null,3,"ion-list",[],null,null,null,o.tb,o.z)),u.Ab(1,49152,null,0,r.O,[u.j,u.p,u.F],null,null),(l()(),u.qb(16777216,null,0,1,null,k)),u.Ab(3,278528,null,0,a.k,[u.W,u.S,u.x],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,3,0,n.component.reviewDetail)}),null)}function w(l){return u.Xb(0,[(l()(),u.Bb(0,0,null,null,12,"ion-header",[],null,null,null,o.mb,o.t)),u.Ab(1,49152,null,0,r.B,[u.j,u.p,u.F],null,null),(l()(),u.Bb(2,0,null,0,10,"ion-toolbar",[["color","primary"]],null,null,null,o.Lb,o.S)),u.Ab(3,49152,null,0,r.Cb,[u.j,u.p,u.F],{color:[0,"color"]},null),(l()(),u.Bb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,o.X,o.e)),u.Ab(5,49152,null,0,r.l,[u.j,u.p,u.F],null,null),(l()(),u.Bb(6,0,null,0,1,"ion-menu-button",[],null,null,null,o.ub,o.C)),u.Ab(7,49152,null,0,r.R,[u.j,u.p,u.F],null,null),(l()(),u.Bb(8,0,null,0,2,"ion-title",[],null,null,null,o.Jb,o.Q)),u.Ab(9,49152,null,0,r.Ab,[u.j,u.p,u.F],null,null),(l()(),u.Vb(-1,0,["Danh s\xe1ch \u0111\xe1nh gi\xe1"])),(l()(),u.qb(16777216,null,0,1,null,f)),u.Ab(12,16384,null,0,a.l,[u.W,u.S],{ngIf:[0,"ngIf"]},null),(l()(),u.Bb(13,0,null,null,5,"ion-content",[],null,null,null,o.gb,o.n)),u.Ab(14,49152,null,0,r.u,[u.j,u.p,u.F],null,null),(l()(),u.qb(16777216,null,0,1,null,x)),u.Ab(16,16384,null,0,a.l,[u.W,u.S],{ngIf:[0,"ngIf"]},null),(l()(),u.qb(16777216,null,0,1,null,A)),u.Ab(18,16384,null,0,a.l,[u.W,u.S],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,3,0,"primary"),l(n,12,0,t.userInfo),l(n,16,0,!t.isMobile),l(n,18,0,t.isMobile)}),null)}function F(l){return u.Xb(0,[(l()(),u.Bb(0,0,null,null,1,"app-ideas-review-detail",[],null,null,null,w,m)),u.Ab(1,114688,null,0,d,[h.a,s.g,s.b,p.a],null,null)],(function(l,n){l(n,1,0)}),null)}var j=u.xb("app-ideas-review-detail",d,F,{},{},[]),B=t("s7LF");class C{}var _=t("6bhV"),O=t("d2mR");t.d(n,"IdeasReviewDetailPageModuleNgFactory",(function(){return E}));var E=u.yb(e,[],(function(l){return u.Kb([u.Lb(512,u.m,u.jb,[[8,[i.a,j]],[3,u.m],u.D]),u.Lb(4608,a.n,a.m,[u.z,[2,a.w]]),u.Lb(4608,B.k,B.k,[]),u.Lb(4608,r.b,r.b,[u.F,u.g]),u.Lb(4608,r.Ib,r.Ib,[r.b,u.m,u.w]),u.Lb(4608,r.Mb,r.Mb,[r.b,u.m,u.w]),u.Lb(1073742336,a.b,a.b,[]),u.Lb(1073742336,B.j,B.j,[]),u.Lb(1073742336,B.b,B.b,[]),u.Lb(1073742336,r.Eb,r.Eb,[]),u.Lb(1073742336,h.p,h.p,[[2,h.u],[2,h.m]]),u.Lb(1073742336,C,C,[]),u.Lb(1073742336,_.b,_.b,[]),u.Lb(1073742336,O.a,O.a,[]),u.Lb(1073742336,e,e,[]),u.Lb(1024,h.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);