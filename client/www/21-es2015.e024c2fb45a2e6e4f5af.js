(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"6T49":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var o=u("pMnS"),i=u("oBZk"),c=u("ZZ/e"),b=u("SVse"),r=u("iInd"),a=u("c/rV");class s{constructor(l,n,u){this.apiAuth=l,this.router=n,this.mainService=u,this.homeForm={title:"V\u0103n ph\xf2ng s\xe1ng t\u1ea1o",card:{image:"assets/imgs/background-idea.jpg",title:"V\u0103n ph\xf2ng s\xe1ng t\u1ea1o cho m\u1ecdi ng\u01b0\u1eddi",subtitle:"M.INOVATION",content:"Ch\u01b0\u01a1ng tr\xecnh h\u1ed7 tr\u1ee3 s\xe1ng t\u1ea1o v\xe0 qu\u1ea3n l\xfd \xfd t\u01b0\u1edfng."},list:{title:"T\xe0i li\u1ec7u:",items:[{url:"assets/docs/ManualGuide_v1.1.pdf",title:"H\u01b0\u1edbng d\u1eabn s\u1eed d\u1ee5ng ch\u01b0\u01a1ng tr\xecnh",icon:{slot:"start",color:"medium",name:"book"}}]}}}ngOnInit(){this.init()}init(){setTimeout(()=>{this.userInfo=this.mainService.getUserInfo()},1e3),this.apiAuth.getDynamicUrl(this.apiAuth.serviceUrls.RESOURCE_SERVER+"/get-top-actions").then(l=>{this.topUsersActions=l}).catch(l=>{})}onClickLogin(){this.router.navigate(["/login"])}onClickChatbot(){this.router.navigate(["/chat-bot"])}}var m=u("ddi3"),d=t.zb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}.welcome-card[_ngcontent-%COMP%]   .welcome-card-image-height[_ngcontent-%COMP%]{min-height:35vh;background-repeat:no-repeat;background-position:center center;background-size:cover}.btn-actions-pane-right[_ngcontent-%COMP%]{margin-left:auto;white-space:nowrap;padding:.75rem 0 0}"]],data:{}});function p(l){return t.Xb(0,[(l()(),t.Bb(0,0,null,null,0,"div",[["class","welcome-card-image-height"]],[[4,"background-image",null]],null,null,null,null))],null,(function(l,n){l(n,0,0,"url("+n.component.homeForm.card.image+")")}))}function g(l){return t.Xb(0,[(l()(),t.Bb(0,0,null,null,2,"ion-card-subtitle",[],null,null,null,i.ab,i.i)),t.Ab(1,49152,null,0,c.p,[t.j,t.p,t.F],null,null),(l()(),t.Vb(2,0,["",""]))],null,(function(l,n){var u=n.component;l(n,2,0,null==u.homeForm?null:null==u.homeForm.card?null:u.homeForm.card.subtitle)}))}function h(l){return t.Xb(0,[(l()(),t.Bb(0,0,null,null,2,"ion-card-title",[],null,null,null,i.bb,i.j)),t.Ab(1,49152,null,0,c.q,[t.j,t.p,t.F],null,null),(l()(),t.Vb(2,0,["",""]))],null,(function(l,n){var u=n.component;l(n,2,0,null==u.homeForm?null:null==u.homeForm.card?null:u.homeForm.card.title)}))}function f(l){return t.Xb(0,[(l()(),t.Bb(0,0,null,null,2,"ion-card-content",[],null,null,null,i.Y,i.g)),t.Ab(1,49152,null,0,c.n,[t.j,t.p,t.F],null,null),(l()(),t.Bb(2,0,null,0,0,"div",[["slot","start"]],[[8,"innerHTML",1]],null,null,null,null))],null,(function(l,n){l(n,2,0,n.component.homeForm.card.content)}))}function B(l){return t.Xb(0,[(l()(),t.Bb(0,0,null,null,13,"ion-col",[["size","12"],["size-lg","12"],["size-md","6"],["size-sm","6"],["size-xl","12"]],null,null,null,i.fb,i.m)),t.Ab(1,49152,null,0,c.t,[t.j,t.p,t.F],{size:[0,"size"]},null),(l()(),t.Bb(2,0,null,0,11,"ion-card",[["class","welcome-card"]],null,null,null,i.cb,i.f)),t.Ab(3,49152,null,0,c.m,[t.j,t.p,t.F],null,null),(l()(),t.qb(16777216,null,0,1,null,p)),t.Ab(5,16384,null,0,b.l,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.Bb(6,0,null,0,5,"ion-card-header",[],null,null,null,i.Z,i.h)),t.Ab(7,49152,null,0,c.o,[t.j,t.p,t.F],null,null),(l()(),t.qb(16777216,null,0,1,null,g)),t.Ab(9,16384,null,0,b.l,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(16777216,null,0,1,null,h)),t.Ab(11,16384,null,0,b.l,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(16777216,null,0,1,null,f)),t.Ab(13,16384,null,0,b.l,[t.W,t.S],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,1,0,"12"),l(n,5,0,null==u.homeForm?null:null==u.homeForm.card?null:u.homeForm.card.image),l(n,9,0,null==u.homeForm?null:null==u.homeForm.card?null:u.homeForm.card.subtitle),l(n,11,0,null==u.homeForm?null:null==u.homeForm.card?null:u.homeForm.card.title),l(n,13,0,null==u.homeForm?null:null==u.homeForm.card?null:u.homeForm.card.content)}),null)}function F(l){return t.Xb(0,[(l()(),t.Bb(0,0,null,null,6,"ion-item",[],null,null,null,i.qb,i.x)),t.Ab(1,49152,null,0,c.H,[t.j,t.p,t.F],{href:[0,"href"]},null),(l()(),t.Bb(2,0,null,0,1,"ion-icon",[],[[8,"slot",0]],null,null,i.nb,i.u)),t.Ab(3,49152,null,0,c.C,[t.j,t.p,t.F],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.Bb(4,0,null,0,2,"ion-label",[],null,null,null,i.rb,i.y)),t.Ab(5,49152,null,0,c.N,[t.j,t.p,t.F],null,null),(l()(),t.Vb(6,0,["",""]))],(function(l,n){l(n,1,0,t.Fb(1,"",n.context.$implicit.url,"")),l(n,3,0,t.Fb(1,"",null!=n.context.$implicit&&null!=n.context.$implicit.icon&&n.context.$implicit.icon.color?n.context.$implicit.icon.color:"medium",""),t.Fb(1,"",null!=n.context.$implicit&&null!=n.context.$implicit.icon&&n.context.$implicit.icon.name?n.context.$implicit.icon.name:null!=n.context.$implicit&&n.context.$implicit.icon?null==n.context.$implicit?null:n.context.$implicit.icon:"book",""))}),(function(l,n){l(n,2,0,t.Fb(1,"",null!=n.context.$implicit&&null!=n.context.$implicit.icon&&n.context.$implicit.icon.slot?n.context.$implicit.icon.slot:"start","")),l(n,6,0,n.context.$implicit.title)}))}function x(l){return t.Xb(0,[(l()(),t.Bb(0,0,null,null,10,"ion-col",[["size","12"],["size-lg","6"],["size-md","6"],["size-sm","6"],["size-xl","6"]],null,null,null,i.fb,i.m)),t.Ab(1,49152,null,0,c.t,[t.j,t.p,t.F],{size:[0,"size"]},null),(l()(),t.Bb(2,0,null,0,8,"ion-list",[["lines","none"]],null,null,null,i.tb,i.z)),t.Ab(3,49152,null,0,c.O,[t.j,t.p,t.F],{lines:[0,"lines"]},null),(l()(),t.Bb(4,0,null,0,4,"ion-list-header",[],null,null,null,i.sb,i.A)),t.Ab(5,49152,null,0,c.P,[t.j,t.p,t.F],null,null),(l()(),t.Bb(6,0,null,0,2,"ion-label",[],null,null,null,i.rb,i.y)),t.Ab(7,49152,null,0,c.N,[t.j,t.p,t.F],null,null),(l()(),t.Vb(8,0,["",""])),(l()(),t.qb(16777216,null,0,1,null,F)),t.Ab(10,278528,null,0,b.k,[t.W,t.S,t.x],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,1,0,"12"),l(n,3,0,"none"),l(n,10,0,u.homeForm.list.items)}),(function(l,n){var u=n.component;l(n,8,0,null==u.homeForm?null:null==u.homeForm.list?null:u.homeForm.list.title)}))}function A(l){return t.Xb(0,[(l()(),t.Bb(0,0,null,null,1,"td",[["class","text-center"],["style","width: 30px;"]],null,null,null,null,null)),(l()(),t.Bb(1,0,null,null,0,"img",[["alt",""],["class","rounded-circle"],["src","assets/imgs/1st.png"],["width","25"]],null,null,null,null,null))],null,null)}function v(l){return t.Xb(0,[(l()(),t.Bb(0,0,null,null,1,"td",[["class","text-center"],["style","width: 30px;"]],null,null,null,null,null)),(l()(),t.Bb(1,0,null,null,0,"img",[["alt",""],["class","rounded-circle"],["src","assets/imgs/2nd.png"],["width","25"]],null,null,null,null,null))],null,null)}function k(l){return t.Xb(0,[(l()(),t.Bb(0,0,null,null,1,"td",[["class","text-center"],["style","width: 30px;"]],null,null,null,null,null)),(l()(),t.Bb(1,0,null,null,0,"img",[["alt",""],["class","rounded-circle"],["src","assets/imgs/3rd.png"],["width","25"]],null,null,null,null,null))],null,null)}function j(l){return t.Xb(0,[(l()(),t.Bb(0,0,null,null,27,"tr",[],null,null,null,null,null)),(l()(),t.Bb(1,0,null,null,1,"td",[["class","d-none d-lg-table-cell text-center text-muted"],["style","width: 50px;"]],null,null,null,null,null)),(l()(),t.Vb(2,null,["",""])),(l()(),t.Bb(3,0,null,null,1,"td",[["class","text-center"],["style","width: 20px;"]],null,null,null,null,null)),(l()(),t.Bb(4,0,null,null,0,"img",[["alt",""],["class","rounded-circle"],["width","25"]],[[8,"src",4]],null,null,null,null)),(l()(),t.Bb(5,0,null,null,4,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.Bb(6,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Nb(l,7).onClick(u)&&e),"click"===n&&(e=!1!==t.Nb(l,8).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.Ab(7,737280,null,0,c.Ob,[b.i,c.Jb,t.p,r.m,[2,r.n]],null,null),t.Ab(8,671744,null,0,r.o,[r.m,r.a,b.i],null,null),(l()(),t.Vb(9,null,["",""])),(l()(),t.Bb(10,0,null,null,2,"td",[["class","d-none d-lg-table-cell text-center"]],null,null,null,null,null)),(l()(),t.Bb(11,0,null,null,1,"div",[["class","badge badge-pill badge-success"]],null,null,null,null,null)),(l()(),t.Vb(12,null,["",""])),(l()(),t.Bb(13,0,null,null,2,"td",[["class","d-none d-lg-table-cell text-center"]],null,null,null,null,null)),(l()(),t.Bb(14,0,null,null,1,"div",[["class","badge badge-pill badge-secondary"]],null,null,null,null,null)),(l()(),t.Vb(15,null,["",""])),(l()(),t.Bb(16,0,null,null,2,"td",[["class","d-none d-lg-table-cell text-center"]],null,null,null,null,null)),(l()(),t.Bb(17,0,null,null,1,"div",[["class","badge badge-pill badge-danger"]],null,null,null,null,null)),(l()(),t.Vb(18,null,["",""])),(l()(),t.Bb(19,0,null,null,2,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.Bb(20,0,null,null,1,"div",[["class","badge badge-pill badge-warning"]],null,null,null,null,null)),(l()(),t.Vb(21,null,["",""])),(l()(),t.qb(16777216,null,null,1,null,A)),t.Ab(23,16384,null,0,b.l,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(16777216,null,null,1,null,v)),t.Ab(25,16384,null,0,b.l,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(16777216,null,null,1,null,k)),t.Ab(27,16384,null,0,b.l,[t.W,t.S],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,7,0),l(n,23,0,0===n.context.index),l(n,25,0,1===n.context.index),l(n,27,0,2===n.context.index)}),(function(l,n){l(n,2,0,n.context.index+1),l(n,4,0,t.Fb(1,"",null==n.context.$implicit?null:n.context.$implicit.avatar,"")),l(n,6,0,t.Nb(n,8).target,t.Nb(n,8).href),l(n,9,0,n.context.$implicit.fullname),l(n,12,0,n.context.$implicit.count_ideas),l(n,15,0,n.context.$implicit.count_voted),l(n,18,0,n.context.$implicit.count_commented),l(n,21,0,n.context.$implicit.total_action)}))}function w(l){return t.Xb(0,[(l()(),t.Bb(0,0,null,null,17,"ion-header",[],null,null,null,i.mb,i.t)),t.Ab(1,49152,null,0,c.B,[t.j,t.p,t.F],null,null),(l()(),t.Bb(2,0,null,0,15,"ion-toolbar",[["color","primary"]],null,null,null,i.Lb,i.S)),t.Ab(3,49152,null,0,c.Cb,[t.j,t.p,t.F],{color:[0,"color"]},null),(l()(),t.Bb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,i.X,i.e)),t.Ab(5,49152,null,0,c.l,[t.j,t.p,t.F],null,null),(l()(),t.Bb(6,0,null,0,1,"ion-menu-button",[],null,null,null,i.ub,i.C)),t.Ab(7,49152,null,0,c.R,[t.j,t.p,t.F],null,null),(l()(),t.Bb(8,0,null,0,2,"ion-title",[],null,null,null,i.Jb,i.Q)),t.Ab(9,49152,null,0,c.Ab,[t.j,t.p,t.F],null,null),(l()(),t.Vb(10,0,[" "," "])),(l()(),t.Bb(11,0,null,0,6,"ion-buttons",[["slot","end"]],null,null,null,i.X,i.e)),t.Ab(12,49152,null,0,c.l,[t.j,t.p,t.F],null,null),(l()(),t.Bb(13,0,null,0,4,"ion-button",[["shape","round"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onClickLogin()&&t),t}),i.W,i.d)),t.Ab(14,49152,null,0,c.k,[t.j,t.p,t.F],{shape:[0,"shape"]},null),(l()(),t.Bb(15,0,null,0,1,"ion-icon",[["slot","start"]],null,null,null,i.nb,i.u)),t.Ab(16,49152,null,0,c.C,[t.j,t.p,t.F],{name:[0,"name"]},null),(l()(),t.Vb(17,0,[" "," "])),(l()(),t.Bb(18,0,null,null,55,"ion-content",[],null,null,null,i.gb,i.n)),t.Ab(19,49152,null,0,c.u,[t.j,t.p,t.F],null,null),(l()(),t.Bb(20,0,null,0,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,i.kb,i.p)),t.Ab(21,49152,null,0,c.w,[t.j,t.p,t.F],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),t.Bb(22,0,null,0,3,"ion-fab-button",[["color","secondary"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onClickChatbot()&&t),t}),i.ib,i.q)),t.Ab(23,49152,null,0,c.x,[t.j,t.p,t.F],{color:[0,"color"]},null),(l()(),t.Bb(24,0,null,0,1,"ion-icon",[["name","chatbubbles"]],null,null,null,i.nb,i.u)),t.Ab(25,49152,null,0,c.C,[t.j,t.p,t.F],{name:[0,"name"]},null),(l()(),t.Bb(26,0,null,0,47,"ion-grid",[],null,null,null,i.lb,i.s)),t.Ab(27,49152,null,0,c.A,[t.j,t.p,t.F],null,null),(l()(),t.Bb(28,0,null,0,5,"ion-row",[],null,null,null,i.Db,i.K)),t.Ab(29,49152,null,0,c.jb,[t.j,t.p,t.F],null,null),(l()(),t.qb(16777216,null,0,1,null,B)),t.Ab(31,16384,null,0,b.l,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(16777216,null,0,1,null,x)),t.Ab(33,16384,null,0,b.l,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.Bb(34,0,null,0,39,"ion-row",[],null,null,null,i.Db,i.K)),t.Ab(35,49152,null,0,c.jb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(36,0,null,0,37,"ion-col",[["size-lg","12"]],null,null,null,i.fb,i.m)),t.Ab(37,49152,null,0,c.t,[t.j,t.p,t.F],null,null),(l()(),t.Bb(38,0,null,0,35,"div",[["class","main-card mb-3 card"]],null,null,null,null,null)),(l()(),t.Bb(39,0,null,null,2,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.Bb(40,0,null,null,1,"div",[["class","card-header-title font-size-md text-capitalize font-weight-normal"]],null,null,null,null,null)),(l()(),t.Vb(-1,null,["Ho\u1ea1t \u0111\u1ed9ng"])),(l()(),t.Bb(42,0,null,null,23,"div",[["class","table-responsive"]],null,null,null,null,null)),(l()(),t.Bb(43,0,null,null,22,"table",[["class","align-middle text-truncate mb-0 table table-borderless table-hover"]],null,null,null,null,null)),(l()(),t.Bb(44,0,null,null,17,"thead",[],null,null,null,null,null)),(l()(),t.Bb(45,0,null,null,16,"tr",[],null,null,null,null,null)),(l()(),t.Bb(46,0,null,null,1,"th",[["class","d-none d-lg-table-cell text-center"]],null,null,null,null,null)),(l()(),t.Vb(-1,null,["#"])),(l()(),t.Bb(48,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),t.Vb(-1,null,["Avatar"])),(l()(),t.Bb(50,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),t.Vb(-1,null,["T\xean"])),(l()(),t.Bb(52,0,null,null,1,"th",[["class","d-none d-lg-table-cell text-center"]],null,null,null,null,null)),(l()(),t.Vb(-1,null,["\xdd t\u01b0\u1edfng"])),(l()(),t.Bb(54,0,null,null,1,"th",[["class","d-none d-lg-table-cell text-center"]],null,null,null,null,null)),(l()(),t.Vb(-1,null,["Vote"])),(l()(),t.Bb(56,0,null,null,1,"th",[["class","d-none d-lg-table-cell text-center"]],null,null,null,null,null)),(l()(),t.Vb(-1,null,["Comment"])),(l()(),t.Bb(58,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),t.Vb(-1,null,["\u0110i\u1ec3m"])),(l()(),t.Bb(60,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),t.Vb(-1,null,["H\u1ea1ng"])),(l()(),t.Bb(62,0,null,null,3,"tbody",[],null,null,null,null,null)),(l()(),t.qb(16777216,null,null,2,null,j)),t.Ab(64,278528,null,0,b.k,[t.W,t.S,t.x],{ngForOf:[0,"ngForOf"]},null),t.Pb(0,b.q,[]),(l()(),t.Bb(66,0,null,null,7,"div",[["class","d-block p-4 text-center card-footer"]],null,null,null,null,null)),(l()(),t.Bb(67,0,null,null,6,"button",[["class","btn-pill btn-shadow btn-wide fsize-1 btn btn-dark btn-md"],["routerLink","/user-activity"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Nb(l,68).onClick()&&e),"click"===n&&(e=!1!==t.Nb(l,69).onClick(u)&&e),e}),null,null)),t.Ab(68,16384,null,0,r.n,[r.m,r.a,[8,null],t.K,t.p],{routerLink:[0,"routerLink"]},null),t.Ab(69,737280,null,0,c.Ob,[b.i,c.Jb,t.p,r.m,[2,r.n]],null,null),(l()(),t.Bb(70,0,null,null,1,"span",[["class","mr-2 opacity-7"]],null,null,null,null,null)),(l()(),t.Bb(71,0,null,null,0,"i",[["class","fa fa-cog fa-spin"]],null,null,null,null,null)),(l()(),t.Bb(72,0,null,null,1,"span",[["class","mr-1"]],null,null,null,null,null)),(l()(),t.Vb(-1,null,["Xem ho\u1ea1t \u0111\u1ed9ng t\u1ea5t c\u1ea3 th\xe0nh vi\xean"]))],(function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,14,0,"round"),l(n,16,0,t.Fb(1,"",u.userInfo?"contact":"log-in","")),l(n,21,0,"end","bottom"),l(n,23,0,"secondary"),l(n,25,0,"chatbubbles"),l(n,31,0,null==u.homeForm?null:u.homeForm.card),l(n,33,0,null==u.homeForm?null:u.homeForm.list),l(n,64,0,t.Wb(n,64,0,t.Nb(n,65).transform(u.topUsersActions,0,10))),l(n,68,0,"/user-activity"),l(n,69,0)}),(function(l,n){var u=n.component;l(n,10,0,null==u.homeForm?null:u.homeForm.title),l(n,17,0,null==u.userInfo?null:u.userInfo.username)}))}function I(l){return t.Xb(0,[(l()(),t.Bb(0,0,null,null,1,"app-home",[],null,null,null,w,d)),t.Ab(1,114688,null,0,s,[m.b,r.m,a.a],null,null)],(function(l,n){l(n,1,0)}),null)}var V=t.xb("app-home",s,I,{},{},[]),z=u("s7LF");u.d(n,"HomePageModuleNgFactory",(function(){return $}));var $=t.yb(e,[],(function(l){return t.Kb([t.Lb(512,t.m,t.jb,[[8,[o.a,V]],[3,t.m],t.D]),t.Lb(4608,b.n,b.m,[t.z,[2,b.w]]),t.Lb(4608,z.k,z.k,[]),t.Lb(4608,c.b,c.b,[t.F,t.g]),t.Lb(4608,c.Ib,c.Ib,[c.b,t.m,t.w]),t.Lb(4608,c.Mb,c.Mb,[c.b,t.m,t.w]),t.Lb(1073742336,b.b,b.b,[]),t.Lb(1073742336,z.j,z.j,[]),t.Lb(1073742336,z.b,z.b,[]),t.Lb(1073742336,c.Eb,c.Eb,[]),t.Lb(1073742336,r.p,r.p,[[2,r.u],[2,r.m]]),t.Lb(1073742336,e,e,[]),t.Lb(1024,r.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);