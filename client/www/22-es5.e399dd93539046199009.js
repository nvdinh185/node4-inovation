(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{yQU5:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var a=u("pMnS"),i=u("ZZ/e"),c=u("SVse"),s=u("iInd"),b=u("oBZk");class r{getPager(l,n=1,u=10){let t,e,a=Math.ceil(l/u);n<1?n=1:n>a&&(n=a),a<=10?(t=1,e=a):n<=6?(t=1,e=10):n+4>=a?(t=a-9,e=a):(t=n-5,e=n+4);let i=(n-1)*u,c=Math.min(i+u-1,l-1),s=Array.from(Array(e+1-t).keys()).map(l=>t+l);return{totalItems:l,currentPage:n,pageSize:u,totalPages:a,startPage:t,endPage:e,startIndex:i,endIndex:c,pages:s}}}class o{constructor(l,n){this.apiAuth=l,this.pageService=n,this.userNameSearch="",this.pagination={}}ngOnInit(){this.init()}setPage(l){this.pagination=this.pageService.getPager(this.userActions.length,l),this.pagedItems=this.userActions.slice(this.pagination.startIndex,this.pagination.endIndex+1)}onFilterNameString(l){if(this.userNameSearch=l.target.value,0===this.userActions.length||""===this.userNameSearch)this.userActionFilterArr=this.userActions,this.setPage(1);else{const l=[];var n=!0,u=!1,t=void 0;try{for(var e,a=this.userActions[Symbol.iterator]();!(n=(e=a.next()).done);n=!0){const n=e.value;n.fullname.toLowerCase().includes(this.userNameSearch.toLowerCase())&&l.push(n)}}catch(i){u=!0,t=i}finally{try{n||null==a.return||a.return()}finally{if(u)throw t}}this.userActionFilterArr=l}}init(){this.apiAuth.getDynamicUrl(this.apiAuth.serviceUrls.RESOURCE_SERVER+"/get-top-actions").then(l=>{console.log("Data: ",l),this.userActions=l,this.userActionFilterArr=l,this.setPage(1)}).catch(l=>{})}}var g=u("ddi3"),d=t.zb({encapsulation:0,styles:[[""]],data:{}});function p(l){return t.Xb(0,[(l()(),t.Bb(0,0,null,null,21,"tr",[],null,null,null,null,null)),(l()(),t.Bb(1,0,null,null,1,"td",[["class","d-none d-lg-table-cell text-center text-muted"],["style","width: 50px;"]],null,null,null,null,null)),(l()(),t.Vb(2,null,[" "," "])),(l()(),t.Bb(3,0,null,null,1,"td",[["class","text-center"],["style","width: 20px;"]],null,null,null,null,null)),(l()(),t.Bb(4,0,null,null,0,"img",[["alt",""],["class","rounded-circle"],["width","25"]],[[8,"src",4]],null,null,null,null)),(l()(),t.Bb(5,0,null,null,4,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.Bb(6,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Nb(l,7).onClick(u)&&e),"click"===n&&(e=!1!==t.Nb(l,8).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.Ab(7,737280,null,0,i.Ob,[c.i,i.Jb,t.p,s.m,[2,s.n]],null,null),t.Ab(8,671744,null,0,s.o,[s.m,s.a,c.i],null,null),(l()(),t.Vb(9,null,["",""])),(l()(),t.Bb(10,0,null,null,2,"td",[["class","d-none d-lg-table-cell text-center"]],null,null,null,null,null)),(l()(),t.Bb(11,0,null,null,1,"div",[["class","badge badge-pill badge-success"]],null,null,null,null,null)),(l()(),t.Vb(12,null,[" "," "])),(l()(),t.Bb(13,0,null,null,2,"td",[["class","d-none d-lg-table-cell text-center"]],null,null,null,null,null)),(l()(),t.Bb(14,0,null,null,1,"div",[["class","badge badge-pill badge-secondary"]],null,null,null,null,null)),(l()(),t.Vb(15,null,[" "," "])),(l()(),t.Bb(16,0,null,null,2,"td",[["class","d-none d-lg-table-cell text-center"]],null,null,null,null,null)),(l()(),t.Bb(17,0,null,null,1,"div",[["class","badge badge-pill badge-danger"]],null,null,null,null,null)),(l()(),t.Vb(18,null,[" "," "])),(l()(),t.Bb(19,0,null,null,2,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.Bb(20,0,null,null,1,"div",[["class","badge badge-pill badge-warning"]],null,null,null,null,null)),(l()(),t.Vb(21,null,[" "," "]))],(function(l,n){l(n,7,0)}),(function(l,n){l(n,2,0,n.context.index+1),l(n,4,0,t.Fb(1,"",null==n.context.$implicit?null:n.context.$implicit.avatar,"")),l(n,6,0,t.Nb(n,8).target,t.Nb(n,8).href),l(n,9,0,n.context.$implicit.fullname),l(n,12,0,n.context.$implicit.count_ideas),l(n,15,0,n.context.$implicit.count_voted),l(n,18,0,n.context.$implicit.count_commented),l(n,21,0,n.context.$implicit.total_action)}))}function m(l){return t.Xb(0,[(l()(),t.Bb(0,0,null,null,5,"li",[],null,null,null,null,null)),t.Sb(512,null,c.t,c.u,[t.x,t.y,t.p,t.K]),t.Ab(2,278528,null,0,c.j,[c.t],{ngClass:[0,"ngClass"]},null),t.Qb(3,{active:0}),(l()(),t.Bb(4,0,null,null,1,"a",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.setPage(l.context.$implicit)&&t),t}),null,null)),(l()(),t.Vb(5,null,["",""]))],(function(l,n){var u=l(n,3,0,n.component.pagination.currentPage===n.context.$implicit);l(n,2,0,u)}),(function(l,n){l(n,5,0,n.context.$implicit)}))}function h(l){return t.Xb(0,[(l()(),t.Bb(0,0,null,null,26,"ul",[["class","pagination"]],null,null,null,null,null)),(l()(),t.Bb(1,0,null,null,5,"li",[],null,null,null,null,null)),t.Sb(512,null,c.t,c.u,[t.x,t.y,t.p,t.K]),t.Ab(3,278528,null,0,c.j,[c.t],{ngClass:[0,"ngClass"]},null),t.Qb(4,{disabled:0}),(l()(),t.Bb(5,0,null,null,1,"a",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.setPage(1)&&t),t}),null,null)),(l()(),t.Vb(-1,null,["First"])),(l()(),t.Bb(7,0,null,null,5,"li",[],null,null,null,null,null)),t.Sb(512,null,c.t,c.u,[t.x,t.y,t.p,t.K]),t.Ab(9,278528,null,0,c.j,[c.t],{ngClass:[0,"ngClass"]},null),t.Qb(10,{disabled:0}),(l()(),t.Bb(11,0,null,null,1,"a",[],null,[[null,"click"]],(function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.setPage(e.pagination.currentPage-1)&&t),t}),null,null)),(l()(),t.Vb(-1,null,["Previous"])),(l()(),t.qb(16777216,null,null,1,null,m)),t.Ab(14,278528,null,0,c.k,[t.W,t.S,t.x],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Bb(15,0,null,null,5,"li",[],null,null,null,null,null)),t.Sb(512,null,c.t,c.u,[t.x,t.y,t.p,t.K]),t.Ab(17,278528,null,0,c.j,[c.t],{ngClass:[0,"ngClass"]},null),t.Qb(18,{disabled:0}),(l()(),t.Bb(19,0,null,null,1,"a",[],null,[[null,"click"]],(function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.setPage(e.pagination.currentPage+1)&&t),t}),null,null)),(l()(),t.Vb(-1,null,["Next"])),(l()(),t.Bb(21,0,null,null,5,"li",[],null,null,null,null,null)),t.Sb(512,null,c.t,c.u,[t.x,t.y,t.p,t.K]),t.Ab(23,278528,null,0,c.j,[c.t],{ngClass:[0,"ngClass"]},null),t.Qb(24,{disabled:0}),(l()(),t.Bb(25,0,null,null,1,"a",[],null,[[null,"click"]],(function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.setPage(e.pagination.totalPages)&&t),t}),null,null)),(l()(),t.Vb(-1,null,["Last"]))],(function(l,n){var u=n.component,t=l(n,4,0,1===u.pagination.currentPage);l(n,3,0,t);var e=l(n,10,0,1===u.pagination.currentPage);l(n,9,0,e),l(n,14,0,u.pagination.pages);var a=l(n,18,0,u.pagination.currentPage===u.pagination.totalPages);l(n,17,0,a);var i=l(n,24,0,u.pagination.currentPage===u.pagination.totalPages);l(n,23,0,i)}),null)}function B(l){return t.Xb(0,[(l()(),t.Bb(0,0,null,null,6,"ion-header",[],null,null,null,b.mb,b.t)),t.Ab(1,49152,null,0,i.B,[t.j,t.p,t.F],null,null),(l()(),t.Bb(2,0,null,0,4,"ion-toolbar",[],null,null,null,b.Lb,b.S)),t.Ab(3,49152,null,0,i.Cb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(4,0,null,0,2,"ion-title",[],null,null,null,b.Jb,b.Q)),t.Ab(5,49152,null,0,i.Ab,[t.j,t.p,t.F],null,null),(l()(),t.Vb(-1,0,["Ho\u1ea1t \u0111\u1ed9ng c\u1ee7a th\xe0nh vi\xean"])),(l()(),t.Bb(7,0,null,null,42,"ion-content",[],null,null,null,b.gb,b.n)),t.Ab(8,49152,null,0,i.u,[t.j,t.p,t.F],null,null),(l()(),t.Bb(9,0,null,0,40,"ion-row",[],null,null,null,b.Db,b.K)),t.Ab(10,49152,null,0,i.jb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(11,0,null,0,38,"ion-col",[["size-lg","12"]],null,null,null,b.fb,b.m)),t.Ab(12,49152,null,0,i.t,[t.j,t.p,t.F],null,null),(l()(),t.Bb(13,0,null,0,36,"div",[["class","main-card mb-3 card"]],null,null,null,null,null)),(l()(),t.Bb(14,0,null,null,11,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.Bb(15,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Bb(16,0,null,null,2,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),t.Bb(17,0,null,null,1,"div",[["class","card-header-title font-size-md text-capitalize font-weight-normal"]],null,null,null,null,null)),(l()(),t.Vb(-1,null,[" Ho\u1ea1t \u0111\u1ed9ng "])),(l()(),t.Bb(19,0,null,null,6,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),t.Bb(20,0,null,null,5,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),t.Bb(21,0,null,null,2,"div",[["class","text-center col-md-3 offset-2"]],null,null,null,null,null)),(l()(),t.Bb(22,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Vb(-1,null,["T\xecm ki\u1ebfm"])),(l()(),t.Bb(24,0,null,null,1,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),t.Bb(25,0,null,null,0,"input",[["class","form-control"],["type","text"]],null,[[null,"input"]],(function(l,n,u){var t=!0;return"input"===n&&(t=!1!==l.component.onFilterNameString(u)&&t),t}),null,null)),(l()(),t.Bb(26,0,null,null,20,"div",[["class","table-responsive"]],null,null,null,null,null)),(l()(),t.Bb(27,0,null,null,19,"table",[["class","align-middle text-truncate mb-0 table table-borderless table-hover"]],null,null,null,null,null)),(l()(),t.Bb(28,0,null,null,15,"thead",[],null,null,null,null,null)),(l()(),t.Bb(29,0,null,null,14,"tr",[],null,null,null,null,null)),(l()(),t.Bb(30,0,null,null,1,"th",[["class","d-none d-lg-table-cell text-center"]],null,null,null,null,null)),(l()(),t.Vb(-1,null,["#"])),(l()(),t.Bb(32,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),t.Vb(-1,null,["Avatar"])),(l()(),t.Bb(34,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),t.Vb(-1,null,["T\xean"])),(l()(),t.Bb(36,0,null,null,1,"th",[["class","d-none d-lg-table-cell text-center"]],null,null,null,null,null)),(l()(),t.Vb(-1,null,["\xdd t\u01b0\u1edfng"])),(l()(),t.Bb(38,0,null,null,1,"th",[["class","d-none d-lg-table-cell text-center"]],null,null,null,null,null)),(l()(),t.Vb(-1,null,["Vote"])),(l()(),t.Bb(40,0,null,null,1,"th",[["class","d-none d-lg-table-cell text-center"]],null,null,null,null,null)),(l()(),t.Vb(-1,null,["Comment"])),(l()(),t.Bb(42,0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),t.Vb(-1,null,["\u0110i\u1ec3m"])),(l()(),t.Bb(44,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t.qb(16777216,null,null,1,null,p)),t.Ab(46,278528,null,0,c.k,[t.W,t.S,t.x],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Bb(47,0,null,null,2,"div",[["class","d-block p-4 text-center card-footer"]],null,null,null,null,null)),(l()(),t.qb(16777216,null,null,1,null,h)),t.Ab(49,16384,null,0,c.l,[t.W,t.S],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,46,0,u.userActionFilterArr),l(n,49,0,u.pagination.pages&&u.pagination.pages.length)}),null)}var v=t.xb("app-user-activity",o,(function(l){return t.Xb(0,[(l()(),t.Bb(0,0,null,null,2,"app-user-activity",[],null,null,null,B,d)),t.Sb(512,null,r,r,[]),t.Ab(2,114688,null,0,o,[g.b,r],null,null)],(function(l,n){l(n,2,0)}),null)}),{},{},[]),f=u("s7LF");class x{}u.d(n,"UserActivityPageModuleNgFactory",(function(){return A}));var A=t.yb(e,[],(function(l){return t.Kb([t.Lb(512,t.m,t.jb,[[8,[a.a,v]],[3,t.m],t.D]),t.Lb(4608,c.n,c.m,[t.z,[2,c.w]]),t.Lb(4608,f.k,f.k,[]),t.Lb(4608,i.b,i.b,[t.F,t.g]),t.Lb(4608,i.Ib,i.Ib,[i.b,t.m,t.w]),t.Lb(4608,i.Mb,i.Mb,[i.b,t.m,t.w]),t.Lb(1073742336,c.b,c.b,[]),t.Lb(1073742336,f.j,f.j,[]),t.Lb(1073742336,f.b,f.b,[]),t.Lb(1073742336,i.Eb,i.Eb,[]),t.Lb(1073742336,s.p,s.p,[[2,s.u],[2,s.m]]),t.Lb(1073742336,x,x,[]),t.Lb(1073742336,e,e,[]),t.Lb(1024,s.k,(function(){return[[{path:"",component:o}]]}),[])])}))}}]);