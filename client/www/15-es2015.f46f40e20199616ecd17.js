(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"51vy":function(n,l,o){"use strict";o.r(l);var e=o("8Y7J");class u{}var i=o("Uqf7"),t=o("pMnS"),a=o("oBZk"),r=o("ZZ/e"),c=o("ddi3"),s=o("cUpR"),b=o("SVse"),d=o("OL44");class m{constructor(){this.onClickSub=new e.r,this.demoCard={background:"#ffffff",color:"black",title:"Nh\xe2n s\u1ef1",items:[{icon:"wifi",title:"12 Nh\xe2n s\u1ef1",color:"light"},{icon:"wifi",title:"1 psc",color:"light"},{icon:"wifi",title:"7 C",color:"light"},{icon:"wifi",title:"6 s",color:"light"}],button:{color:"secondary",icon:{name:"book",color:"light"}}}}ngOnInit(){this.commandCardForm=this.cardData?this.cardData:this.demoCard,this.commandCardForm.background=this.commandCardForm.background?this.commandCardForm.background:"red"}onClickCommand(n){this.onClickSub.emit({idea:n,command:"VIEW"})}onClickLike(n){this.onClickSub.emit({idea:n,command:"LIKE"})}onClickComment(n){this.onClickSub.emit({idea:n,command:"COMMENT"})}}var p=e.zb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   .welcome-card-image-height[_ngcontent-%COMP%]{min-height:20vh;background-repeat:no-repeat;background-position:center center;background-size:cover}.main-ion-card[_ngcontent-%COMP%]{position:relative;text-align:center;border-radius:5em;opacity:.7;box-shadow:0 3px 10px rgba(0,0,0,.5)}.main-ion-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{position:absolute;top:5%;font-size:1.8em;width:100%;font-weight:700;color:#fff;opacity:.9}.main-ion-card[_ngcontent-%COMP%]   .card-subtitle[_ngcontent-%COMP%]{font-size:1em;position:absolute;top:18%;width:60%;color:#fff}.main-ion-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]{font-size:1.8em;position:absolute;top:36%;left:85%;width:30%;opacity:.8}"]],data:{}});function h(n){return e.Wb(0,[(n()(),e.Bb(0,0,null,null,0,"div",[["class","welcome-card-image-height"],["style","opacity: 0.4;"]],[[4,"background-color",null]],null,null,null,null))],null,(function(n,l){n(l,0,0,l.component.commandCardForm.background)}))}function f(n){return e.Wb(0,[(n()(),e.Bb(0,0,null,null,0,"div",[["class","welcome-card-image-height"],["style","opacity: 0.9;"]],[[4,"background-image",null]],null,null,null,null))],null,(function(n,l){n(l,0,0,"url("+l.component.commandCardForm.image+")")}))}function g(n){return e.Wb(0,[(n()(),e.Bb(0,0,null,null,39,"ion-card",[["class","main-ion-card welcome-card"]],null,null,null,a.cb,a.f)),e.Ab(1,49152,null,0,r.m,[e.j,e.p,e.F],null,null),(n()(),e.qb(16777216,null,0,1,null,h)),e.Ab(3,16384,null,0,b.k,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(n()(),e.qb(16777216,null,0,1,null,f)),e.Ab(5,16384,null,0,b.k,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(n()(),e.Bb(6,0,null,0,9,"ion-card-header",[["class","card-title"]],null,null,null,a.Z,a.h)),e.Ab(7,49152,null,0,r.o,[e.j,e.p,e.F],null,null),(n()(),e.Bb(8,0,null,0,2,"ion-card-title",[],null,null,null,a.bb,a.j)),e.Ab(9,49152,null,0,r.q,[e.j,e.p,e.F],null,null),(n()(),e.Ub(10,0,["",""])),(n()(),e.Bb(11,0,null,0,3,"ion-card-subtitle",[],null,null,null,a.ab,a.i)),e.Ab(12,49152,null,0,r.p,[e.j,e.p,e.F],null,null),(n()(),e.Ub(13,0,["",""])),e.Pb(131072,d.a,[e.j,e.F]),(n()(),e.Ub(15,0,[" "," "])),(n()(),e.Bb(16,0,null,0,19,"ion-card-content",[],null,null,null,a.Y,a.g)),e.Ab(17,49152,null,0,r.n,[e.j,e.p,e.F],null,null),(n()(),e.Bb(18,0,null,0,17,"ion-grid",[["fixed",""]],null,null,null,a.lb,a.s)),e.Ab(19,49152,null,0,r.A,[e.j,e.p,e.F],{fixed:[0,"fixed"]},null),(n()(),e.Bb(20,0,null,0,15,"ion-row",[],null,null,null,a.Db,a.K)),e.Ab(21,49152,null,0,r.jb,[e.j,e.p,e.F],null,null),(n()(),e.Bb(22,0,null,0,6,"ion-col",[["size","6"]],null,null,null,a.fb,a.m)),e.Ab(23,49152,null,0,r.t,[e.j,e.p,e.F],{size:[0,"size"]},null),(n()(),e.Bb(24,0,null,0,4,"ion-button",[["shape","round"],["size","small"]],null,[[null,"click"]],(function(n,l,o){var e=!0,u=n.component;return"click"===l&&(e=!1!==u.onClickLike(u.commandCardForm)&&e),e}),a.W,a.d)),e.Ab(25,49152,null,0,r.k,[e.j,e.p,e.F],{color:[0,"color"],shape:[1,"shape"],size:[2,"size"]},null),(n()(),e.Ub(26,0,[" ",""])),(n()(),e.Bb(27,0,null,0,1,"ion-icon",[["name","thumbs-up"],["slot","end"]],null,null,null,a.nb,a.u)),e.Ab(28,49152,null,0,r.C,[e.j,e.p,e.F],{name:[0,"name"]},null),(n()(),e.Bb(29,0,null,0,6,"ion-col",[["size","6"]],null,null,null,a.fb,a.m)),e.Ab(30,49152,null,0,r.t,[e.j,e.p,e.F],{size:[0,"size"]},null),(n()(),e.Bb(31,0,null,0,4,"ion-button",[["shape","round"],["size","small"]],null,[[null,"click"]],(function(n,l,o){var e=!0,u=n.component;return"click"===l&&(e=!1!==u.onClickComment(u.commandCardForm)&&e),e}),a.W,a.d)),e.Ab(32,49152,null,0,r.k,[e.j,e.p,e.F],{color:[0,"color"],shape:[1,"shape"],size:[2,"size"]},null),(n()(),e.Ub(33,0,[" ",""])),(n()(),e.Bb(34,0,null,0,1,"ion-icon",[["name","chatbubbles"],["slot","end"]],null,null,null,a.nb,a.u)),e.Ab(35,49152,null,0,r.C,[e.j,e.p,e.F],{name:[0,"name"]},null),(n()(),e.Bb(36,0,null,0,3,"ion-button",[["class","card-icon"],["shape","round"]],null,[[null,"click"]],(function(n,l,o){var e=!0,u=n.component;return"click"===l&&(e=!1!==u.onClickCommand(u.commandCardForm)&&e),e}),a.W,a.d)),e.Ab(37,49152,null,0,r.k,[e.j,e.p,e.F],{shape:[0,"shape"]},null),(n()(),e.Bb(38,0,null,0,1,"ion-icon",[["name","ios-arrow-forward"],["slot","start"]],null,null,null,a.nb,a.u)),e.Ab(39,49152,null,0,r.C,[e.j,e.p,e.F],{name:[0,"name"]},null)],(function(n,l){var o=l.component;n(l,3,0,!o.commandCardForm.image),n(l,5,0,o.commandCardForm.image),n(l,19,0,""),n(l,23,0,"6"),n(l,25,0,e.Fb(1,"",o.commandCardForm.isUserVoted?"secondary":"light",""),"round","small"),n(l,28,0,"thumbs-up"),n(l,30,0,"6"),n(l,32,0,e.Fb(1,"",o.commandCardForm.isUserCommented?"success":"light",""),"round","small"),n(l,35,0,"chatbubbles"),n(l,37,0,"round"),n(l,39,0,"ios-arrow-forward")}),(function(n,l){var o=l.component;n(l,10,0,o.commandCardForm.title),n(l,13,0,e.Vb(l,13,0,e.Nb(l,14).transform(o.commandCardForm.created_time))),n(l,15,0,o.commandCardForm.description.substring(0,100)),n(l,26,0,o.commandCardForm.voted_count),n(l,33,0,o.commandCardForm.commented_count)}))}function C(n){return e.Wb(0,[(n()(),e.qb(16777216,null,null,1,null,g)),e.Ab(1,16384,null,0,b.k,[e.W,e.S],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,1,0,l.component.commandCardForm)}),null)}var F=o("mrSG"),k=o("c/rV");class y{constructor(n,l,o,e){this.router=n,this.apiAuth=l,this.mainService=o,this.modalController=e,this.formIdea={title:"Ph\xf2ng \xfd t\u01b0\u1edfng",ideas:[]},this.isCardNewShow=!1}ngOnInit(){this.init(),this.refresh()}init(){return F.b(this,void 0,void 0,(function*(){this.userInfo=this.mainService.getUserInfo();try{this.parameters=yield this.apiAuth.getDynamicUrl(this.apiAuth.serviceUrls.RESOURCE_SERVER+"/get-idea-parameters",!0)}catch(o){}let n=this.parameters&&this.parameters.ideas_categories?this.parameters.ideas_categories:[],l=this.parameters&&this.parameters.ideas_statuses?this.parameters.ideas_statuses:[];this.dynamicFormInput=JSON.stringify({okButton:{icon:"save",name:"\xdd t\u01b0\u1edfng m\u1edbi c\u1ee7a b\u1ea1n l\xe0 g\xec?",color:"secondary",next:"CALLBACK",command:"ADD",url:this.apiAuth.serviceUrls.RESOURCE_SERVER+"/create-idea",token:!0},cancelButton:{icon:"close",next:"CLOSE"},items:[{type:"text",key:"title",name:"Ch\u1ee7 \u0111\u1ec1 l\xe0 g\xec? ",hint:"Nh\u1eadp ch\u1ee7 \u0111\u1ec1 c\u1ee7a \xfd t\u01b0\u1edfng n\xe0y t\u1eeb 5-200 k\xfd t\u1ef1",input_type:"text",icon:"md-help",validators:[{required:!0,min:5,max:200}]},{type:"text_area",key:"description",name:"M\xf4 t\u1ea3 n\u1ed9i dung \xfd t\u01b0\u1edfng c\u1ee7a b\u1ea1n t\u1eeb 50 \u0111\u1ebfn 1000 t\u1eeb",hint:"Nh\u1eadp m\xf4 t\u1ea3 \xfd t\u01b0\u1edfng c\u1ee7a b\u1ea1n",input_type:"text",icon:"md-information-circle",validators:[{required:!0,min:10}]},{type:"select",key:"category_id",name:"Ph\xe2n lo\u1ea1i \xfd t\u01b0\u1edfng?",icon:"contrast",options:n,color:"warning"},{type:"select",key:"status",name:"Tr\u1ea1ng th\xe1i c\u1ee7a \xfd t\u01b0\u1edfng?",icon:"clock",options:l,color:"secondary"}]}),this.dynamicFormValue=JSON.stringify({title:"",description:"",category_id:""+(n.find(n=>1===n.is_default)?n.find(n=>1===n.is_default).id:2),status:""+(l.find(n=>1===n.is_default)?l.find(n=>1===n.is_default).id:2)}),this.dynamicCallback=this.dynamicCallbackCard}))}refresh(){return F.b(this,void 0,void 0,(function*(){try{this.formIdea.ideas=yield this.apiAuth.getDynamicUrl(this.apiAuth.serviceUrls.RESOURCE_SERVER+"/get-ideas",!0),Array.isArray(this.formIdea.ideas)&&this.formIdea.ideas.forEach(n=>{n.voted_users&&n.voted_users.find(n=>n===this.userInfo.id)&&(n.isUserVoted=!0),n.commented_users&&n.commented_users.find(n=>n===this.userInfo.id)&&(n.isUserCommented=!0)})}catch(n){}}))}dynamicCallbackCard(n){return new Promise(n=>{n({key:"name",property_name:"value",new_data:"T\xean m\u1edbi thay \u0111\u1ed5i t\u1eeb ajax"})})}onSelectedFinish(n){this.formIdea.ideas=n&&n.response_data?n.response_data:this.formIdea.ideas,this.isCardNewShow=!1}onClickAddNew(){this.isCardNewShow=!0}doRefresh(n){setTimeout(()=>{this.refresh(),n.target.complete()},1e3)}onClickIdeaCard(n){n&&("VIEW"===n.command&&this.viewIdea(n.idea),"LIKE"===n.command&&this.likeIdea(n.idea),"COMMENT"===n.command&&this.commentIdea(n.idea))}viewIdea(n){this.router.navigate(["/idea-detail"],{queryParams:{id:n.id}})}likeIdea(n){this.apiAuth.postDynamicJson(this.apiAuth.serviceUrls.RESOURCE_SERVER+"/like-idea",{id:n.id},!0).then(n=>{this.refresh()}).catch(n=>console.log(n))}commentIdea(n){this.router.navigate(["/idea-detail"],{queryParams:{id:n.id}})}openModal(n,l){return F.b(this,void 0,void 0,(function*(){const o=yield this.modalController.create({component:n,componentProps:l,cssClass:"cng-custom-modal-css"});return yield o.present()}))}}var A=o("iInd"),w=e.zb({encapsulation:0,styles:[[".card-add-new[_ngcontent-%COMP%]{margin:10px;border-radius:2em}"]],data:{}});function I(n){return e.Wb(0,[(n()(),e.Bb(0,0,null,null,4,"ion-buttons",[["slot","secondary"]],null,null,null,a.X,a.e)),e.Ab(1,49152,null,0,r.l,[e.j,e.p,e.F],null,null),(n()(),e.Bb(2,0,null,0,2,"ion-button",[["shape","round"]],null,null,null,a.W,a.d)),e.Ab(3,49152,null,0,r.k,[e.j,e.p,e.F],{shape:[0,"shape"]},null),(n()(),e.Ub(4,0,["",""]))],(function(n,l){n(l,3,0,"round")}),(function(n,l){n(l,4,0,l.component.userInfo.username)}))}function j(n){return e.Wb(0,[(n()(),e.Bb(0,0,null,null,5,"ion-fab",[["horizontal","start"],["slot","fixed"],["vertical","top"]],null,null,null,a.kb,a.p)),e.Ab(1,49152,null,0,r.w,[e.j,e.p,e.F],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),e.Bb(2,0,null,0,3,"ion-fab-button",[["color","warning"]],null,[[null,"click"]],(function(n,l,o){var e=!0;return"click"===l&&(e=!1!==n.component.onClickAddNew()&&e),e}),a.ib,a.q)),e.Ab(3,49152,null,0,r.x,[e.j,e.p,e.F],{color:[0,"color"]},null),(n()(),e.Bb(4,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,a.nb,a.u)),e.Ab(5,49152,null,0,r.C,[e.j,e.p,e.F],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"start","top"),n(l,3,0,"warning"),n(l,5,0,"add")}),null)}function v(n){return e.Wb(0,[(n()(),e.Bb(0,0,null,null,15,"ion-fab",[["edge",""],["horizontal","end"],["slot","fixed"],["vertical","top"]],null,null,null,a.kb,a.p)),e.Ab(1,49152,null,0,r.w,[e.j,e.p,e.F],{edge:[0,"edge"],horizontal:[1,"horizontal"],vertical:[2,"vertical"]},null),(n()(),e.Bb(2,0,null,0,3,"ion-fab-button",[["color","secondary"]],null,null,null,a.ib,a.q)),e.Ab(3,49152,null,0,r.x,[e.j,e.p,e.F],{color:[0,"color"]},null),(n()(),e.Bb(4,0,null,0,1,"ion-icon",[["name","md-share"]],null,null,null,a.nb,a.u)),e.Ab(5,49152,null,0,r.C,[e.j,e.p,e.F],{name:[0,"name"]},null),(n()(),e.Bb(6,0,null,0,9,"ion-fab-list",[],null,null,null,a.jb,a.r)),e.Ab(7,49152,null,0,r.y,[e.j,e.p,e.F],null,null),(n()(),e.Bb(8,0,null,0,3,"ion-fab-button",[["color","warning"]],null,null,null,a.ib,a.q)),e.Ab(9,49152,null,0,r.x,[e.j,e.p,e.F],{color:[0,"color"]},null),(n()(),e.Bb(10,0,null,0,1,"ion-icon",[["name","brush"]],null,null,null,a.nb,a.u)),e.Ab(11,49152,null,0,r.C,[e.j,e.p,e.F],{name:[0,"name"]},null),(n()(),e.Bb(12,0,null,0,3,"ion-fab-button",[["color","primary"]],null,null,null,a.ib,a.q)),e.Ab(13,49152,null,0,r.x,[e.j,e.p,e.F],{color:[0,"color"]},null),(n()(),e.Bb(14,0,null,0,1,"ion-icon",[["name","logo-facebook"]],null,null,null,a.nb,a.u)),e.Ab(15,49152,null,0,r.C,[e.j,e.p,e.F],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"","end","top"),n(l,3,0,"secondary"),n(l,5,0,"md-share"),n(l,9,0,"warning"),n(l,11,0,"brush"),n(l,13,0,"primary"),n(l,15,0,"logo-facebook")}),null)}function S(n){return e.Wb(0,[(n()(),e.Bb(0,0,null,null,3,"ion-card",[["class","card-add-new"]],null,null,null,a.cb,a.f)),e.Ab(1,49152,null,0,r.m,[e.j,e.p,e.F],null,null),(n()(),e.Bb(2,0,null,0,1,"card-dynamic-form",[],null,[[null,"onSelectedFinish"]],(function(n,l,o){var e=!0;return"onSelectedFinish"===l&&(e=!1!==n.component.onSelectedFinish(o)&&e),e}),i.k,i.j)),e.Ab(3,114688,null,0,c.d,[c.g,c.b,s.b,c.r,c.j,r.Mb],{dynamicFormInput:[0,"dynamicFormInput"],dynamicFormValue:[1,"dynamicFormValue"],dynamicCallback:[2,"dynamicCallback"]},{onSelectedFinish:"onSelectedFinish"})],(function(n,l){var o=l.component;n(l,3,0,o.dynamicFormInput,o.dynamicFormValue,o.dynamicCallback)}),null)}function B(n){return e.Wb(0,[(n()(),e.Bb(0,0,null,null,3,"ion-col",[["size","12"],["size-lg","4"],["size-md","4"],["size-sm","6"],["size-xl","3"]],null,null,null,a.fb,a.m)),e.Ab(1,49152,null,0,r.t,[e.j,e.p,e.F],{size:[0,"size"]},null),(n()(),e.Bb(2,0,null,0,1,"app-idea-card",[],null,[[null,"onClickSub"]],(function(n,l,o){var e=!0;return"onClickSub"===l&&(e=!1!==n.component.onClickIdeaCard(o)&&e),e}),C,p)),e.Ab(3,114688,null,0,m,[],{cardData:[0,"cardData"]},{onClickSub:"onClickSub"})],(function(n,l){n(l,1,0,"12"),n(l,3,0,l.context.$implicit)}),null)}function L(n){return e.Wb(0,[(n()(),e.Bb(0,0,null,null,5,"ion-grid",[["fixed",""]],null,null,null,a.lb,a.s)),e.Ab(1,49152,null,0,r.A,[e.j,e.p,e.F],{fixed:[0,"fixed"]},null),(n()(),e.Bb(2,0,null,0,3,"ion-row",[],null,null,null,a.Db,a.K)),e.Ab(3,49152,null,0,r.jb,[e.j,e.p,e.F],null,null),(n()(),e.qb(16777216,null,0,1,null,B)),e.Ab(5,278528,null,0,b.j,[e.W,e.S,e.x],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var o=l.component;n(l,1,0,""),n(l,5,0,null==o.formIdea?null:o.formIdea.ideas)}),null)}function x(n){return e.Wb(0,[(n()(),e.Bb(0,0,null,null,12,"ion-header",[],null,null,null,a.mb,a.t)),e.Ab(1,49152,null,0,r.B,[e.j,e.p,e.F],null,null),(n()(),e.Bb(2,0,null,0,10,"ion-toolbar",[["color","primary"]],null,null,null,a.Lb,a.S)),e.Ab(3,49152,null,0,r.Cb,[e.j,e.p,e.F],{color:[0,"color"]},null),(n()(),e.Bb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,a.X,a.e)),e.Ab(5,49152,null,0,r.l,[e.j,e.p,e.F],null,null),(n()(),e.Bb(6,0,null,0,1,"ion-menu-button",[],null,null,null,a.ub,a.C)),e.Ab(7,49152,null,0,r.R,[e.j,e.p,e.F],null,null),(n()(),e.Bb(8,0,null,0,2,"ion-title",[],null,null,null,a.Jb,a.Q)),e.Ab(9,49152,null,0,r.Ab,[e.j,e.p,e.F],null,null),(n()(),e.Ub(10,0,["",""])),(n()(),e.qb(16777216,null,0,1,null,I)),e.Ab(12,16384,null,0,b.k,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(n()(),e.Bb(13,0,null,null,13,"ion-content",[],null,null,null,a.gb,a.n)),e.Ab(14,49152,null,0,r.u,[e.j,e.p,e.F],null,null),(n()(),e.qb(16777216,null,0,1,null,j)),e.Ab(16,16384,null,0,b.k,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(n()(),e.qb(16777216,null,0,1,null,v)),e.Ab(18,16384,null,0,b.k,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(n()(),e.qb(16777216,null,0,1,null,S)),e.Ab(20,16384,null,0,b.k,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(n()(),e.Bb(21,0,null,0,3,"ion-refresher",[["pullFactor","0.8"],["pullMax","120"],["pullMin","60"],["slot","fixed"]],null,[[null,"ionRefresh"]],(function(n,l,o){var e=!0;return"ionRefresh"===l&&(e=!1!==n.component.doRefresh(o)&&e),e}),a.Cb,a.I)),e.Ab(22,49152,null,0,r.db,[e.j,e.p,e.F],{pullFactor:[0,"pullFactor"],pullMax:[1,"pullMax"],pullMin:[2,"pullMin"]},null),(n()(),e.Bb(23,0,null,0,1,"ion-refresher-content",[["pullingIcon","arrow-dropdown"],["pullingText","K\xe9o xu\u1ed1ng \u0111\u1ec3 l\xe0m m\u1edbi"],["refreshingSpinner","bubbles"],["refreshingText","\u0110ang t\u1ea3i..."]],null,null,null,a.Bb,a.J)),e.Ab(24,49152,null,0,r.eb,[e.j,e.p,e.F],{pullingIcon:[0,"pullingIcon"],pullingText:[1,"pullingText"],refreshingSpinner:[2,"refreshingSpinner"],refreshingText:[3,"refreshingText"]},null),(n()(),e.qb(16777216,null,0,1,null,L)),e.Ab(26,16384,null,0,b.k,[e.W,e.S],{ngIf:[0,"ngIf"]},null)],(function(n,l){var o=l.component;n(l,3,0,"primary"),n(l,12,0,o.userInfo),n(l,16,0,!o.isCardNewShow),n(l,18,0,!o.isCardNewShow),n(l,20,0,o.isCardNewShow),n(l,22,0,"0.8","120","60"),n(l,24,0,"arrow-dropdown","K\xe9o xu\u1ed1ng \u0111\u1ec3 l\xe0m m\u1edbi","bubbles","\u0110ang t\u1ea3i..."),n(l,26,0,!o.isCardNewShow)}),(function(n,l){var o=l.component;n(l,10,0,null!=o.formIdea&&o.formIdea.title?o.formIdea.title:"")}))}function _(n){return e.Wb(0,[(n()(),e.Bb(0,0,null,null,1,"app-idea",[],null,null,null,x,w)),e.Ab(1,114688,null,0,y,[A.m,c.b,k.a,r.Ib],null,null)],(function(n,l){n(l,1,0)}),null)}var z=e.xb("app-idea",y,_,{},{},[]),E=o("s7LF"),O=o("FOYl"),W=o("IheW"),M=o("6GXZ"),R=o("YD+O"),U=o("EpeG"),N=o("7ePi"),q=o("jVYb"),P=o("6bhV"),V=o("d2mR");class D{}o.d(l,"IdeaPageModuleNgFactory",(function(){return T}));var T=e.yb(u,[],(function(n){return e.Kb([e.Lb(512,e.m,e.jb,[[8,[i.b,i.c,i.d,i.h,i.i,i.a,i.e,i.f,i.g,t.a,z]],[3,e.m],e.D]),e.Lb(4608,b.m,b.l,[e.z,[2,b.s]]),e.Lb(4608,E.k,E.k,[]),e.Lb(4608,r.b,r.b,[e.F,e.g]),e.Lb(4608,r.Ib,r.Ib,[r.b,e.m,e.w]),e.Lb(4608,r.Mb,r.Mb,[r.b,e.m,e.w]),e.Lb(5120,O.b,O.f,[]),e.Lb(5120,O.a,O.e,[]),e.Lb(4608,W.i,W.o,[b.c,e.I,W.m]),e.Lb(4608,W.p,W.p,[W.i,W.n]),e.Lb(5120,W.a,(function(n){return[n,new c.s]}),[W.p]),e.Lb(4608,W.l,W.l,[]),e.Lb(6144,W.j,null,[W.l]),e.Lb(4608,W.h,W.h,[W.j]),e.Lb(6144,W.b,null,[W.h]),e.Lb(4608,W.f,W.k,[W.b,e.w]),e.Lb(4608,W.c,W.c,[W.f]),e.Lb(4608,M.a,M.a,[]),e.Lb(1073742336,b.b,b.b,[]),e.Lb(1073742336,E.j,E.j,[]),e.Lb(1073742336,E.b,E.b,[]),e.Lb(1073742336,r.Eb,r.Eb,[]),e.Lb(1073742336,R.b,R.b,[]),e.Lb(1073742336,U.b,U.b,[]),e.Lb(1073742336,N.b,N.b,[]),e.Lb(1073742336,q.b,q.b,[]),e.Lb(1073742336,O.c,O.c,[]),e.Lb(1073742336,W.e,W.e,[]),e.Lb(1073742336,W.d,W.d,[]),e.Lb(1073742336,c.o,c.o,[]),e.Lb(1073742336,P.b,P.b,[]),e.Lb(1073742336,V.a,V.a,[]),e.Lb(1073742336,A.o,A.o,[[2,A.t],[2,A.m]]),e.Lb(1073742336,D,D,[]),e.Lb(1073742336,u,u,[]),e.Lb(256,W.m,"XSRF-TOKEN",[]),e.Lb(256,W.n,"X-XSRF-TOKEN",[]),e.Lb(1024,A.k,(function(){return[[{path:"",component:y}]]}),[])])}))}}]);