(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"6l07":function(l,n,e){"use strict";e.r(n);var i=e("8Y7J");class t{}var u=e("Uqf7"),a=e("pMnS"),o=e("oBZk"),s=e("ZZ/e"),r=e("SVse"),c=e("OL44"),d=e("ddi3"),b=e("cUpR"),p=e("s7LF"),m=e("6bhV"),h=e("mrSG"),f=e("c/rV"),g=e("9B/o");class I{constructor(l,n,e,i,t){this.route=l,this.apiCommons=n,this.apiAuth=e,this.mainService=i,this.iab=t,this.uploadingFiles=[],this.callbackProcess=(function(l){return new Promise((n,e)=>{l.error?this.apiCommons.presentAlert("Error:<br>"+(l.message?l.message:"Error Unknow: "+JSON.stringify(l.error,null,2))):l.response_data&&("MARK"===l.button.command&&this.refresh(l.button.id),"EDIT"===l.button.command&&this.refresh(l.button.id)),n({next:"CLOSE"})})}).bind(this)}ngOnInit(){this.init(),this.route.queryParams.subscribe(l=>{this.refresh(l.id)})}init(){this.userInfo=this.mainService.getUserInfo()}refresh(l){this.apiAuth.getDynamicUrl(this.apiAuth.serviceUrls.RESOURCE_SERVER+"/get-idea?id="+l,!0).then(l=>{this.ideaInfo=l,this.refreshUserAction()}).catch(l=>console.log("L\u1ed7i l\u1ea5y chi ti\u1ebft",l))}refreshUserAction(){this.ideaInfo&&this.ideaInfo.likes&&this.ideaInfo.comments&&(this.ideaInfo.idea&&this.ideaInfo.idea.attach_id_list&&this.apiAuth.getDynamicUrl(this.apiAuth.serviceUrls.RESOURCE_SERVER+"/get-attach-files?id_list="+JSON.stringify(this.ideaInfo.idea.attach_id_list),!0).then(l=>{l&&Array.isArray(l.images)&&(this.ideaInfo.idea.images=l.images,this.ideaInfo.idea.images.forEach(l=>l.src=this.apiAuth.serviceUrls.RESOURCE_SERVER+"/get-file-id?id="+l.id)),l&&Array.isArray(l.files)&&(this.ideaInfo.idea.attachs=l.files)}).catch(l=>{console.log("L\u1ed7i l\u1ea5y file: ",l)}),this.ideaInfo.isUserVoted=this.ideaInfo.likes.findIndex(l=>l.user_id===this.userInfo.id&&l.activities_type>0)>=0,this.ideaInfo.isUserCommented=this.ideaInfo.comments.findIndex(l=>l.user_id===this.userInfo.id)>=0,this.ideaInfo.comments.forEach(l=>{l.attach_id_list&&this.apiAuth.getDynamicUrl(this.apiAuth.serviceUrls.RESOURCE_SERVER+"/get-attach-files?id_list="+JSON.stringify(l.attach_id_list),!0).then(n=>{n&&Array.isArray(n.images)&&(l.images=n.images,l.images.forEach(l=>l.src=this.apiAuth.serviceUrls.RESOURCE_SERVER+"/get-file-id?id="+l.id)),n&&Array.isArray(n.files)&&(l.attachs=n.files)}).catch(l=>{console.log("L\u1ed7i l\u1ea5y file: ",l)})}))}onClickSend(){if(this.message||this.uploadingFiles.length>0){this.apiCommons.showLoader("\u0110ang x\u1eed l\xfd d\u1eef li\u1ec7u tr\xean m\xe1y ch\u1ee7....");let a=new FormData;a.append("id",this.ideaInfo.idea.id),a.append("content",this.message?this.message:this.uploadingFiles.length+" files");let o=0;var l=!0,n=!1,e=void 0;try{for(var i,t=this.uploadingFiles[Symbol.iterator]();!(l=(i=t.next()).done);l=!0){let l=i.value;a.append("file_"+o++,l,l.filename)}}catch(u){n=!0,e=u}finally{try{l||null==t.return||t.return()}finally{if(n)throw e}}this.apiAuth.postDynamicFormData(this.apiAuth.serviceUrls.RESOURCE_SERVER+"/comment-idea",a,!0).then(l=>{this.apiCommons.hideLoader(),this.ideaInfo=l,this.refreshUserAction()}).catch(l=>{this.apiCommons.hideLoader()}),this.message="",this.uploadingFiles=[]}}onClickMore(l){let n=[];const e=[{id:1,name:"\u0110\xe1nh gi\xe1 \xfd t\u01b0\u1edfng n\xe0y",value:"MARK",icon:{name:"microphone",color:"warning"}},{id:2,name:"S\u1eeda \xfd t\u01b0\u1edfng n\xe0y",value:"EDIT",icon:{name:"create",color:"primary"}},{id:3,name:"Chuy\u1ec3n tr\u1ea1ng th\xe1i",value:"CHANGE",icon:{name:"hourglass",color:"primary"}},{id:4,name:"Gh\xe9p v\u1edbi ...",value:"MERGE",icon:{name:"git-merge",color:"primary"}},{id:5,name:"Ch\u01b0a ph\xf9 h\u1ee3p",value:"TRASH",icon:{name:"trash",color:"danger"}}];this.userInfo&&this.ideaInfo&&this.ideaInfo.idea&&(n=e.filter(this.ideaInfo.idea.user_id===this.userInfo.id?l=>2===l.id||3===l.id:l=>1===l.id),98===this.userInfo.role?n=n.concat(e.filter(l=>1!==l.id&&2!==l.id&&3!==l.id)):99===this.userInfo.role&&(n=e)),this.apiCommons.presentPopover(l,d.p,{type:"single-choice",title:"Th\u1ef1c thi",color:"primary",menu:n}).then(l=>{this.processDetails(l)}).catch(l=>{console.log("err: ",l)})}processDetails(l){let n=l.value;this.ideaInfo&&this.ideaInfo.idea&&("MARK"===n&&this.markIdea(this.ideaInfo.idea),"EDIT"===n&&this.editIdea(this.ideaInfo.idea),"CHANGE"===n&&this.changeStatusIdea(this.ideaInfo.idea),"MERGE"===n&&this.mergeIdea(this.ideaInfo.idea),"TRASH"===n&&this.trashIdea(this.ideaInfo.idea))}likeIdea(l){this.apiAuth.postDynamicJson(this.apiAuth.serviceUrls.RESOURCE_SERVER+"/like-idea",{id:l.id},!0).then(l=>{this.ideaInfo=l,this.refreshUserAction()}).catch(l=>console.log(l))}uploadFilesEvent(l){if(l.target&&l.target.files&&l.target.files.length){var n=!0,e=!1,i=void 0;try{for(var t,u=l.target.files[Symbol.iterator]();!(n=(t=u.next()).done);n=!0){let l=t.value;if(l.type.indexOf("image")>=0){l.isImage=!0;const n=new FileReader;n.onloadend=e=>{l.image=n.result},n.readAsDataURL(l)}this.uploadingFiles.find(n=>n.name===l.name)||this.uploadingFiles.push(l)}}catch(a){e=!0,i=a}finally{try{n||null==u.return||u.return()}finally{if(e)throw i}}}}onClickRemoveFile(l){this.uploadingFiles.splice(l,1)}onClickViewFile(l){this.iab.create(this.apiAuth.serviceUrls.RESOURCE_SERVER+"/get-file-id?id="+l,"_system")}onClickViewImage(l){this.iab.create(this.apiAuth.serviceUrls.RESOURCE_SERVER+"/get-file-id?id="+l,"_system")}markIdea(l){return h.b(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e,i,t,u,a,o,s,r,c,b,p;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,this.apiAuth.getDynamicUrl(this.apiAuth.serviceUrls.RESOURCE_SERVER+"/get-questions",!0);case 3:return e=n.sent,n.next=6,this.apiAuth.getDynamicUrl(this.apiAuth.serviceUrls.RESOURCE_SERVER+"/user-mark-idea?id="+l.id,!0);case 6:i=n.sent,n.next=11;break;case 9:n.prev=9,n.t0=n.catch(0);case 11:for(t=[],u=!0,a=!1,o=void 0,n.prev=15,s=e[Symbol.iterator]();!(u=(r=s.next()).done);u=!0)c=r.value,b=i.find(l=>l.question_id===c.id),t.push({type:"range-text",key:"question_"+c.id,name:c.question,icon:"help",disabled:!0,value:b?b.point:0,min:c.min_point,max:c.max_point});n.next=23;break;case 19:n.prev=19,n.t1=n.catch(15),a=!0,o=n.t1;case 23:n.prev=23,n.prev=24,u||null==s.return||s.return();case 26:if(n.prev=26,!a){n.next=29;break}throw o;case 29:return n.finish(26);case 30:return n.finish(23);case 31:p={title:"Ch\u1ea5m \u0111i\u1ec3m \xfd t\u01b0\u1edfng",buttons:[{color:"danger",icon:"close",next:"CLOSE"}],items:[{type:"title",name:l.title,key:"id",value:l.id},...t,{type:"button",options:[{name:"G\u1eedi \u0111\xe1nh gi\xe1",next:"CALLBACK",id:l.id,url:this.apiAuth.serviceUrls.RESOURCE_SERVER+"/mark-idea",token:!0,command:"MARK"}]}]},this.apiCommons.openModal(d.h,{parent:this,callback:this.callbackProcess,form:p});case 33:case"end":return n.stop()}}),n,this,[[0,9],[15,19,23,31],[24,,26,30]])})))}editIdea(l){return h.b(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,this.apiAuth.getDynamicUrl(this.apiAuth.serviceUrls.RESOURCE_SERVER+"/get-idea-parameters",!0);case 3:e=n.sent,n.next=8;break;case 6:n.prev=6,n.t0=n.catch(0);case 8:this.apiCommons.openModal(d.h,{parent:this,callback:this.callbackProcess,form:{title:"S\u1eeda \xfd t\u01b0\u1edfng",buttons:[{color:"danger",icon:"close",next:"CLOSE"}],items:[{type:"hidden",key:"id",value:l.id},{type:"text",key:"title",value:l.title,name:"Ch\u1ee7 \u0111\u1ec1 l\xe0 g\xec? ",hint:"Nh\u1eadp ch\u1ee7 \u0111\u1ec1 c\u1ee7a \xfd t\u01b0\u1edfng n\xe0y t\u1eeb 5-200 k\xfd t\u1ef1",input_type:"text",icon:"md-help",validators:[{required:!0,min:5,max:200}]},{type:"text_area",key:"description",value:l.description,name:"M\xf4 t\u1ea3 n\u1ed9i dung \xfd t\u01b0\u1edfng c\u1ee7a b\u1ea1n t\u1eeb 50 \u0111\u1ebfn 1000 t\u1eeb",hint:"Nh\u1eadp m\xf4 t\u1ea3 \xfd t\u01b0\u1edfng c\u1ee7a b\u1ea1n",input_type:"text",icon:"md-information-circle",validators:[{required:!0,min:10}]},{type:"select",key:"category_id",value:""+l.category_id,name:"Ph\xe2n lo\u1ea1i \xfd t\u01b0\u1edfng?",icon:"contrast",options:e&&e.ideas_categories?e.ideas_categories:[],color:"warning"},{type:"select",key:"status",value:""+l.status,name:"Tr\u1ea1ng th\xe1i c\u1ee7a \xfd t\u01b0\u1edfng?",icon:"clock",options:e&&e.ideas_statuses?e.ideas_statuses:[],color:"secondary"},{type:"button",options:[{name:"G\u1eedi s\u1eeda \xfd t\u01b0\u1edfng",id:l.id,next:"CALLBACK",url:this.apiAuth.serviceUrls.RESOURCE_SERVER+"/edit-idea",type:"FORM-DATA",token:!0,command:"EDIT"}]}]}});case 9:case"end":return n.stop()}}),n,this,[[0,6]])})))}changeStatusIdea(l){return h.b(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,this.apiAuth.getDynamicUrl(this.apiAuth.serviceUrls.RESOURCE_SERVER+"/get-idea-parameters",!0);case 3:e=n.sent,n.next=8;break;case 6:n.prev=6,n.t0=n.catch(0);case 8:this.apiCommons.openModal(d.h,{parent:this,callback:this.callbackProcess,form:{title:"Thay \u0111\u1ed5i tr\u1ea1ng th\xe1i",buttons:[{color:"danger",icon:"close",next:"CLOSE"}],items:[{type:"hidden",key:"id",value:l.id},{type:"select",key:"status",value:""+l.status,name:"Tr\u1ea1ng th\xe1i c\u1ee7a \xfd t\u01b0\u1edfng?",icon:"clock",options:e&&e.ideas_statuses?e.ideas_statuses:[],color:"warning"},{type:"button",options:[{name:"Chuy\u1ec3n tr\u1ea1ng th\xe1i \xfd t\u01b0\u1edfng n\xe0y",id:l.id,next:"CALLBACK",url:this.apiAuth.serviceUrls.RESOURCE_SERVER+"/edit-idea",type:"FORM-DATA",token:!0,command:"EDIT"}]}]}});case 9:case"end":return n.stop()}}),n,this,[[0,6]])})))}mergeIdea(l){}trashIdea(l){this.apiCommons.openModal(d.h,{parent:this,callback:this.callbackProcess,form:{title:"D\u1eebng \xfd t\u01b0\u1edfng",buttons:[{color:"danger",icon:"close",next:"CLOSE"}],items:[{type:"hidden",key:"id",value:l.id},{type:"select",key:"status",value:"0",name:"Tr\u1ea1ng th\xe1i c\u1ee7a \xfd t\u01b0\u1edfng?",icon:"clock",options:[{value:"0",name:"Tri\u1ec3n khai sau"}],color:"secondary"},{type:"button",options:[{name:"D\u1eebng \xfd t\u01b0\u1edfng n\xe0y",id:l.id,next:"CALLBACK",url:this.apiAuth.serviceUrls.RESOURCE_SERVER+"/edit-idea",type:"FORM-DATA",token:!0,command:"EDIT"}]}]}})}}var A=e("iInd"),x=i.zb({encapsulation:0,styles:[[".file-over[_ngcontent-%COMP%]{position:absolute;top:0;left:0;z-index:2;width:100%;height:100%;opacity:0;cursor:pointer}.idea-created[_ngcontent-%COMP%]{border-radius:2em;opacity:.9;margin:5px;border:1px solid gray}.input-comment[_ngcontent-%COMP%]{border-radius:2em;opacity:.9;margin:15px;box-shadow:0 3px 10px rgba(0,0,0,.5);border:1px solid green}.comment-backgound[_ngcontent-%COMP%]{position:relative;border-radius:1em;opacity:.9;padding:8px;background:#f5f5f5}.comment-list[_ngcontent-%COMP%]{margin:15px}.image-comment-size[_ngcontent-%COMP%]{max-width:200px;margin:2px;border-radius:.5em;border:1px solid #000}.image-upload-size[_ngcontent-%COMP%]{position:relative;max-width:200px;margin:2px;padding:3px;border-radius:.5em;border:1px solid #000}.image-upload-size[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]{position:absolute;top:2%;left:80%;font-size:30px}"]],data:{}});function y(l){return i.Xb(0,[(l()(),i.Bb(0,0,null,null,2,"ion-label",[["class","ion-text-wrap"]],null,null,null,o.rb,o.y)),i.Ab(1,49152,null,0,s.N,[i.j,i.p,i.F],null,null),(l()(),i.Vb(2,0,[" "," Files \u0111\xednh k\xe8m "]))],null,(function(l,n){l(n,2,0,n.component.ideaInfo.idea.attach_id_list.length)}))}function v(l){return i.Xb(0,[(l()(),i.Bb(0,0,null,null,0,"img",[["class","image-comment-size"],["tappable",""]],[[8,"src",4]],[[null,"click"]],(function(l,n,e){var i=!0;return"click"===n&&(i=!1!==l.component.onClickViewImage(l.context.$implicit.id)&&i),i}),null,null))],null,(function(l,n){l(n,0,0,i.Fb(1,"",n.context.$implicit.src,""))}))}function k(l){return i.Xb(0,[(l()(),i.Bb(0,0,null,null,5,"span",[],null,null,null,null,null)),(l()(),i.Bb(1,0,null,null,4,"ion-button",[["color","primary"],["fill","outline"],["shape","round"],["style","text-transform:none!important;"]],null,[[null,"click"]],(function(l,n,e){var i=!0;return"click"===n&&(i=!1!==l.component.onClickViewFile(l.context.$implicit.id)&&i),i}),o.W,o.d)),i.Ab(2,49152,null,0,s.k,[i.j,i.p,i.F],{color:[0,"color"],fill:[1,"fill"],shape:[2,"shape"]},null),(l()(),i.Vb(3,0,[" "," "])),(l()(),i.Bb(4,0,null,0,1,"ion-icon",[["name","eye"],["slot","end"]],null,null,null,o.nb,o.u)),i.Ab(5,49152,null,0,s.C,[i.j,i.p,i.F],{name:[0,"name"]},null)],(function(l,n){l(n,2,0,"primary","outline","round"),l(n,5,0,"eye")}),(function(l,n){l(n,3,0,n.context.$implicit.file_name)}))}function F(l){return i.Xb(0,[(l()(),i.Bb(0,0,null,null,5,"ion-item",[["lines","none"]],[[4,"padding-left",null]],null,null,o.qb,o.x)),i.Ab(1,49152,null,0,s.H,[i.j,i.p,i.F],{lines:[0,"lines"]},null),(l()(),i.Bb(2,0,null,0,3,"ion-label",[["class","ion-text-wrap"]],null,null,null,o.rb,o.y)),i.Ab(3,49152,null,0,s.N,[i.j,i.p,i.F],null,null),(l()(),i.qb(16777216,null,0,1,null,k)),i.Ab(5,278528,null,0,r.k,[i.W,i.S,i.x],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var e=n.component;l(n,1,0,"none"),l(n,5,0,null==e.ideaInfo?null:null==e.ideaInfo.idea?null:e.ideaInfo.idea.attachs)}),(function(l,n){l(n,0,0,"20px")}))}function E(l){return i.Xb(0,[(l()(),i.Bb(0,0,null,null,4,"ion-button",[["color","secondary"],["fill","outline"],["shape","round"],["style","text-transform:none!important;"]],null,[[null,"click"]],(function(l,n,e){var i=!0;return"click"===n&&(i=!1!==l.component.onClickRemoveFile(l.parent.context.index)&&i),i}),o.W,o.d)),i.Ab(1,49152,null,0,s.k,[i.j,i.p,i.F],{color:[0,"color"],fill:[1,"fill"],shape:[2,"shape"]},null),(l()(),i.Vb(2,0,[" "," "])),(l()(),i.Bb(3,0,null,0,1,"ion-icon",[["name","close"],["slot","end"]],null,null,null,o.nb,o.u)),i.Ab(4,49152,null,0,s.C,[i.j,i.p,i.F],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"secondary","outline","round"),l(n,4,0,"close")}),(function(l,n){l(n,2,0,n.parent.context.$implicit.name)}))}function R(l){return i.Xb(0,[(l()(),i.Bb(0,0,null,null,4,"div",[["class","image-upload-size"]],null,null,null,null,null)),(l()(),i.Bb(1,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),i.Bb(2,0,null,null,2,"div",[["class","close-button"],["tappable",""]],null,null,null,null,null)),(l()(),i.Bb(3,0,null,null,1,"ion-icon",[["color","medium"],["name","close"],["slot","icon-only"]],null,[[null,"click"]],(function(l,n,e){var i=!0;return"click"===n&&(i=!1!==l.component.onClickRemoveFile(l.parent.context.index)&&i),i}),o.nb,o.u)),i.Ab(4,49152,null,0,s.C,[i.j,i.p,i.F],{color:[0,"color"],name:[1,"name"]},null)],(function(l,n){l(n,4,0,"medium","close")}),(function(l,n){l(n,1,0,i.Fb(1,"",n.parent.context.$implicit.image,""))}))}function C(l){return i.Xb(0,[(l()(),i.Bb(0,0,null,null,4,"span",[],null,null,null,null,null)),(l()(),i.qb(16777216,null,null,1,null,E)),i.Ab(2,16384,null,0,r.l,[i.W,i.S],{ngIf:[0,"ngIf"]},null),(l()(),i.qb(16777216,null,null,1,null,R)),i.Ab(4,16384,null,0,r.l,[i.W,i.S],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,!n.context.$implicit.isImage),l(n,4,0,n.context.$implicit.isImage)}),null)}function B(l){return i.Xb(0,[(l()(),i.Bb(0,0,null,null,5,"ion-item",[["lines","none"]],null,null,null,o.qb,o.x)),i.Ab(1,49152,null,0,s.H,[i.j,i.p,i.F],{lines:[0,"lines"]},null),(l()(),i.Bb(2,0,null,0,3,"ion-label",[["class","ion-text-wrap"]],null,null,null,o.rb,o.y)),i.Ab(3,49152,null,0,s.N,[i.j,i.p,i.F],null,null),(l()(),i.qb(16777216,null,0,1,null,C)),i.Ab(5,278528,null,0,r.k,[i.W,i.S,i.x],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var e=n.component;l(n,1,0,"none"),l(n,5,0,e.uploadingFiles)}),null)}function _(l){return i.Xb(0,[(l()(),i.Bb(0,0,null,null,0,"img",[["class","image-comment-size"],["tappable",""]],[[8,"src",4]],[[null,"click"]],(function(l,n,e){var i=!0;return"click"===n&&(i=!1!==l.component.onClickViewImage(l.context.$implicit.id)&&i),i}),null,null))],null,(function(l,n){l(n,0,0,i.Fb(1,"",n.context.$implicit.src,""))}))}function S(l){return i.Xb(0,[(l()(),i.Bb(0,0,null,null,5,"span",[],null,null,null,null,null)),(l()(),i.Bb(1,0,null,null,4,"ion-button",[["color","dark"],["fill","outline"],["shape","round"],["style","text-transform:none!important;"]],null,[[null,"click"]],(function(l,n,e){var i=!0;return"click"===n&&(i=!1!==l.component.onClickViewFile(l.context.$implicit.id)&&i),i}),o.W,o.d)),i.Ab(2,49152,null,0,s.k,[i.j,i.p,i.F],{color:[0,"color"],fill:[1,"fill"],shape:[2,"shape"]},null),(l()(),i.Vb(3,0,[" "," "])),(l()(),i.Bb(4,0,null,0,1,"ion-icon",[["name","eye"],["slot","end"]],null,null,null,o.nb,o.u)),i.Ab(5,49152,null,0,s.C,[i.j,i.p,i.F],{name:[0,"name"]},null)],(function(l,n){l(n,2,0,"dark","outline","round"),l(n,5,0,"eye")}),(function(l,n){l(n,3,0,n.context.$implicit.file_name)}))}function L(l){return i.Xb(0,[(l()(),i.Bb(0,0,null,null,5,"ion-item",[["lines","none"]],[[4,"padding-left",null]],null,null,o.qb,o.x)),i.Ab(1,49152,null,0,s.H,[i.j,i.p,i.F],{lines:[0,"lines"]},null),(l()(),i.Bb(2,0,null,0,3,"ion-label",[["class","ion-text-wrap"]],null,null,null,o.rb,o.y)),i.Ab(3,49152,null,0,s.N,[i.j,i.p,i.F],null,null),(l()(),i.qb(16777216,null,0,1,null,S)),i.Ab(5,278528,null,0,r.k,[i.W,i.S,i.x],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,1,0,"none"),l(n,5,0,n.parent.context.$implicit.attachs)}),(function(l,n){l(n,0,0,n.parent.context.$implicit.parent_id?"80px":"60px")}))}function j(l){return i.Xb(0,[(l()(),i.Bb(0,0,null,null,25,"div",[],[[4,"padding-left",null]],null,null,null,null)),(l()(),i.Bb(1,0,null,null,14,"ion-item",[["lines","none"]],null,null,null,o.qb,o.x)),i.Ab(2,49152,null,0,s.H,[i.j,i.p,i.F],{lines:[0,"lines"]},null),(l()(),i.Bb(3,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,o.U,o.b)),i.Ab(4,49152,null,0,s.f,[i.j,i.p,i.F],null,null),(l()(),i.Bb(5,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),i.Bb(6,0,null,0,9,"ion-label",[["class","ion-text-wrap comment-backgound"]],null,null,null,o.rb,o.y)),i.Ab(7,49152,null,0,s.N,[i.j,i.p,i.F],null,null),(l()(),i.Bb(8,0,null,0,1,"strong",[["slot","start"]],null,null,null,null,null)),(l()(),i.Vb(9,null,[" "," "])),(l()(),i.Bb(10,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),i.Bb(11,0,null,0,4,"ion-label",[["class","ion-text-wrap"]],null,null,null,o.rb,o.y)),i.Ab(12,49152,null,0,s.N,[i.j,i.p,i.F],null,null),(l()(),i.Bb(13,0,null,0,2,"div",[],[[8,"innerHTML",1]],null,null,null,null)),i.Rb(14,1),i.Rb(15,1),(l()(),i.Bb(16,0,null,null,3,"ion-note",[],[[4,"padding-left",null]],null,null,o.xb,o.E)),i.Ab(17,49152,null,0,s.Y,[i.j,i.p,i.F],null,null),(l()(),i.Vb(18,0,[" "," "])),i.Pb(131072,c.a,[i.j,i.F]),(l()(),i.Bb(20,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),i.Bb(21,0,null,null,2,"div",[],[[4,"padding-left",null]],null,null,null,null)),(l()(),i.qb(16777216,null,null,1,null,_)),i.Ab(23,278528,null,0,r.k,[i.W,i.S,i.x],{ngForOf:[0,"ngForOf"]},null),(l()(),i.qb(16777216,null,null,1,null,L)),i.Ab(25,16384,null,0,r.l,[i.W,i.S],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,"none"),l(n,23,0,n.context.$implicit.images),l(n,25,0,(null==n.context.$implicit.attachs?null:n.context.$implicit.attachs.length)>0)}),(function(l,n){l(n,0,0,n.context.$implicit.parent_id?"20px":"0px"),l(n,5,0,i.Fb(1,"",n.context.$implicit.avatar,"")),l(n,9,0,n.context.$implicit.username);var e=i.Wb(n,13,0,l(n,15,0,i.Nb(n.parent,0),i.Wb(n,13,0,l(n,14,0,i.Nb(n.parent,1),n.context.$implicit.content))));l(n,13,0,e),l(n,16,0,n.context.$implicit.parent_id?"100px":"80px"),l(n,18,0,i.Wb(n,18,0,i.Nb(n,19).transform(n.context.$implicit.created_time))),l(n,21,0,n.context.$implicit.parent_id?"80px":"60px")}))}function O(l){return i.Xb(0,[i.Pb(0,d.q,[b.b]),i.Pb(0,d.m,[]),(l()(),i.Bb(2,0,null,null,11,"ion-header",[],null,null,null,o.mb,o.t)),i.Ab(3,49152,null,0,s.B,[i.j,i.p,i.F],null,null),(l()(),i.Bb(4,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,o.Lb,o.S)),i.Ab(5,49152,null,0,s.Cb,[i.j,i.p,i.F],{color:[0,"color"]},null),(l()(),i.Bb(6,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,o.X,o.e)),i.Ab(7,49152,null,0,s.l,[i.j,i.p,i.F],null,null),(l()(),i.Bb(8,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==i.Nb(l,10).onClick(e)&&t),t}),o.V,o.c)),i.Ab(9,49152,null,0,s.g,[i.j,i.p,i.F],null,null),i.Ab(10,16384,null,0,s.h,[[2,s.ib],s.Jb],null,null),(l()(),i.Bb(11,0,null,0,2,"ion-title",[],null,null,null,o.Jb,o.Q)),i.Ab(12,49152,null,0,s.Ab,[i.j,i.p,i.F],null,null),(l()(),i.Vb(-1,0,["Ch\u1ee7 \u0111\u1ec1 \xfd t\u01b0\u1edfng"])),(l()(),i.Bb(14,0,null,null,99,"ion-content",[],null,null,null,o.gb,o.n)),i.Ab(15,49152,null,0,s.u,[i.j,i.p,i.F],null,null),(l()(),i.Bb(16,0,null,0,17,"ion-item",[["class","idea-created"],["lines","none"]],null,null,null,o.qb,o.x)),i.Ab(17,49152,null,0,s.H,[i.j,i.p,i.F],{lines:[0,"lines"]},null),(l()(),i.Bb(18,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,o.U,o.b)),i.Ab(19,49152,null,0,s.f,[i.j,i.p,i.F],null,null),(l()(),i.Bb(20,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),i.Bb(21,0,null,0,8,"ion-label",[],null,null,null,o.rb,o.y)),i.Ab(22,49152,null,0,s.N,[i.j,i.p,i.F],null,null),(l()(),i.Bb(23,0,null,0,1,"strong",[["slot","start"]],null,null,null,null,null)),(l()(),i.Vb(24,null,[" "," "])),(l()(),i.Bb(25,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),i.Bb(26,0,null,0,3,"ion-note",[],null,null,null,o.xb,o.E)),i.Ab(27,49152,null,0,s.Y,[i.j,i.p,i.F],null,null),(l()(),i.Vb(28,0,["",""])),i.Pb(131072,c.a,[i.j,i.F]),(l()(),i.Bb(30,0,null,0,3,"ion-button",[["fill","clear"],["shape","round"],["size","small"],["slote","end"]],null,[[null,"click"]],(function(l,n,e){var i=!0;return"click"===n&&(i=!1!==l.component.onClickMore(e)&&i),i}),o.W,o.d)),i.Ab(31,49152,null,0,s.k,[i.j,i.p,i.F],{fill:[0,"fill"],shape:[1,"shape"],size:[2,"size"]},null),(l()(),i.Bb(32,0,null,0,1,"ion-icon",[["name","ios-more"],["slot","icon-only"]],null,null,null,o.nb,o.u)),i.Ab(33,49152,null,0,s.C,[i.j,i.p,i.F],{name:[0,"name"]},null),(l()(),i.Bb(34,0,null,0,31,"ion-list",[],null,null,null,o.tb,o.z)),i.Ab(35,49152,null,0,s.O,[i.j,i.p,i.F],null,null),(l()(),i.Bb(36,0,null,0,6,"ion-item",[],null,null,null,o.qb,o.x)),i.Ab(37,49152,null,0,s.H,[i.j,i.p,i.F],null,null),(l()(),i.Bb(38,0,null,0,1,"strong",[["slot","start"]],null,null,null,null,null)),(l()(),i.Vb(39,null,[" Ch\u1ee7 \u0111\u1ec1 #",": "])),(l()(),i.Bb(40,0,null,0,2,"ion-label",[["class","ion-text-wrap"]],null,null,null,o.rb,o.y)),i.Ab(41,49152,null,0,s.N,[i.j,i.p,i.F],null,null),(l()(),i.Vb(42,0,[" "," "])),(l()(),i.Bb(43,0,null,0,8,"ion-item",[],null,null,null,o.qb,o.x)),i.Ab(44,49152,null,0,s.H,[i.j,i.p,i.F],null,null),(l()(),i.Bb(45,0,null,0,1,"strong",[["slot","start"]],null,null,null,null,null)),(l()(),i.Vb(-1,null,[" N\u1ed9i dung: "])),(l()(),i.Bb(47,0,null,0,4,"ion-label",[["class","ion-text-wrap"]],null,null,null,o.rb,o.y)),i.Ab(48,49152,null,0,s.N,[i.j,i.p,i.F],null,null),(l()(),i.Bb(49,0,null,0,2,"div",[],[[8,"innerHTML",1]],null,null,null,null)),i.Rb(50,1),i.Rb(51,1),(l()(),i.Bb(52,0,null,0,6,"ion-item",[],null,null,null,o.qb,o.x)),i.Ab(53,49152,null,0,s.H,[i.j,i.p,i.F],null,null),(l()(),i.Bb(54,0,null,0,1,"strong",[["slot","start"]],null,null,null,null,null)),(l()(),i.Vb(-1,null,[" L\u0129nh v\u1ef1c: "])),(l()(),i.Bb(56,0,null,0,2,"ion-label",[["class","ion-text-wrap"]],null,null,null,o.rb,o.y)),i.Ab(57,49152,null,0,s.N,[i.j,i.p,i.F],null,null),(l()(),i.Vb(58,0,[" "," "])),(l()(),i.Bb(59,0,null,0,6,"ion-item",[],null,null,null,o.qb,o.x)),i.Ab(60,49152,null,0,s.H,[i.j,i.p,i.F],null,null),(l()(),i.Bb(61,0,null,0,1,"strong",[["slot","start"]],null,null,null,null,null)),(l()(),i.Vb(-1,null,[" Giai \u0111o\u1ea1n: "])),(l()(),i.Bb(63,0,null,0,2,"ion-label",[["class","ion-text-wrap"]],null,null,null,o.rb,o.y)),i.Ab(64,49152,null,0,s.N,[i.j,i.p,i.F],null,null),(l()(),i.Vb(65,0,[" "," "])),(l()(),i.Bb(66,0,null,0,12,"ion-item",[["lines","none"]],null,null,null,o.qb,o.x)),i.Ab(67,49152,null,0,s.H,[i.j,i.p,i.F],{lines:[0,"lines"]},null),(l()(),i.Bb(68,0,null,0,2,"ion-button",[["shape","round"],["size","small"],["slot","start"]],null,[[null,"click"]],(function(l,n,e){var i=!0,t=l.component;return"click"===n&&(i=!1!==t.likeIdea(null==t.ideaInfo?null:t.ideaInfo.idea)&&i),i}),o.W,o.d)),i.Ab(69,49152,null,0,s.k,[i.j,i.p,i.F],{color:[0,"color"],shape:[1,"shape"],size:[2,"size"]},null),(l()(),i.Vb(70,0,[" "," likes "])),(l()(),i.Bb(71,0,null,0,2,"ion-button",[["shape","round"],["size","small"],["slot","start"]],null,null,null,o.W,o.d)),i.Ab(72,49152,null,0,s.k,[i.j,i.p,i.F],{color:[0,"color"],shape:[1,"shape"],size:[2,"size"]},null),(l()(),i.Vb(73,0,[" "," comments "])),(l()(),i.Bb(74,0,null,0,2,"ion-button",[["shape","round"],["size","small"],["slot","start"]],null,null,null,o.W,o.d)),i.Ab(75,49152,null,0,s.k,[i.j,i.p,i.F],{color:[0,"color"],shape:[1,"shape"],size:[2,"size"]},null),(l()(),i.Vb(76,0,[" "," \u0111i\u1ec3m "])),(l()(),i.qb(16777216,null,0,1,null,y)),i.Ab(78,16384,null,0,r.l,[i.W,i.S],{ngIf:[0,"ngIf"]},null),(l()(),i.Bb(79,0,null,0,2,"div",[],[[4,"padding-left",null]],null,null,null,null)),(l()(),i.qb(16777216,null,null,1,null,v)),i.Ab(81,278528,null,0,r.k,[i.W,i.S,i.x],{ngForOf:[0,"ngForOf"]},null),(l()(),i.qb(16777216,null,0,1,null,F)),i.Ab(83,16384,null,0,r.l,[i.W,i.S],{ngIf:[0,"ngIf"]},null),(l()(),i.Bb(84,0,null,0,25,"ion-card",[["class","input-comment"]],null,null,null,o.cb,o.f)),i.Ab(85,49152,null,0,s.m,[i.j,i.p,i.F],null,null),(l()(),i.Bb(86,0,null,0,21,"ion-item",[["lines","none"]],null,null,null,o.qb,o.x)),i.Ab(87,49152,null,0,s.H,[i.j,i.p,i.F],{lines:[0,"lines"]},null),(l()(),i.Bb(88,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,o.U,o.b)),i.Ab(89,49152,null,0,s.f,[i.j,i.p,i.F],null,null),(l()(),i.Bb(90,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),i.Bb(91,0,null,0,7,"ion-textarea",[["autosize",""],["placeholder","\u0110\xf3ng g\xf3p \xfd ki\u1ebfn .... "],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"],[null,"input"]],(function(l,n,e){var t=!0,u=l.component;return"ionBlur"===n&&(t=!1!==i.Nb(l,92)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==i.Nb(l,92)._handleInputEvent(e.target)&&t),"input"===n&&(t=!1!==i.Nb(l,98).onInput(e.target)&&t),"ngModelChange"===n&&(t=!1!==(u.message=e)&&t),t}),o.Hb,o.O)),i.Ab(92,16384,null,0,s.Qb,[i.p],null,null),i.Sb(1024,null,p.e,(function(l){return[l]}),[s.Qb]),i.Ab(94,671744,null,0,p.h,[[8,null],[8,null],[8,null],[6,p.e]],{model:[0,"model"]},{update:"ngModelChange"}),i.Sb(2048,null,p.f,null,[p.h]),i.Ab(96,16384,null,0,p.g,[[4,p.f]],null,null),i.Ab(97,49152,null,0,s.yb,[i.j,i.p,i.F],{placeholder:[0,"placeholder"]},null),i.Ab(98,2768896,null,0,m.a,[i.p,i.F],null,null),(l()(),i.Bb(99,0,null,0,4,"ion-button",[["color","medium"],["fill","clear"],["shape","round"]],null,null,null,o.W,o.d)),i.Ab(100,49152,null,0,s.k,[i.j,i.p,i.F],{color:[0,"color"],fill:[1,"fill"],shape:[2,"shape"]},null),(l()(),i.Bb(101,0,null,0,0,"input",[["accept","image/gif, image/jpeg, image/png\n                  , application/pdf\n                  , .txt, .md\n                  , .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\n                  , application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["class","file-over"],["multiple","multiple"],["type","file"]],null,[[null,"change"]],(function(l,n,e){var i=!0;return"change"===n&&(i=!1!==l.component.uploadFilesEvent(e)&&i),i}),null,null)),(l()(),i.Bb(102,0,null,0,1,"ion-icon",[["name","attach"],["slot","icon-only"]],null,null,null,o.nb,o.u)),i.Ab(103,49152,null,0,s.C,[i.j,i.p,i.F],{name:[0,"name"]},null),(l()(),i.Bb(104,0,null,0,3,"ion-button",[["fill","clear"],["shape","round"]],null,[[null,"click"]],(function(l,n,e){var i=!0;return"click"===n&&(i=!1!==l.component.onClickSend()&&i),i}),o.W,o.d)),i.Ab(105,49152,null,0,s.k,[i.j,i.p,i.F],{color:[0,"color"],fill:[1,"fill"],shape:[2,"shape"]},null),(l()(),i.Bb(106,0,null,0,1,"ion-icon",[["name","send"],["slot","icon-only"]],null,null,null,o.nb,o.u)),i.Ab(107,49152,null,0,s.C,[i.j,i.p,i.F],{name:[0,"name"]},null),(l()(),i.qb(16777216,null,0,1,null,B)),i.Ab(109,16384,null,0,r.l,[i.W,i.S],{ngIf:[0,"ngIf"]},null),(l()(),i.Bb(110,0,null,0,3,"ion-list",[["class","comment-list"]],null,null,null,o.tb,o.z)),i.Ab(111,49152,null,0,s.O,[i.j,i.p,i.F],null,null),(l()(),i.qb(16777216,null,0,1,null,j)),i.Ab(113,278528,null,0,r.k,[i.W,i.S,i.x],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var e=n.component;l(n,5,0,"primary"),l(n,17,0,"none"),l(n,31,0,"clear","round","small"),l(n,33,0,"ios-more"),l(n,67,0,"none"),l(n,69,0,i.Fb(1,"",null!=e.ideaInfo&&e.ideaInfo.isUserVoted?"secondary":"light",""),"round","small"),l(n,72,0,i.Fb(1,"",null!=e.ideaInfo&&e.ideaInfo.isUserCommented?"success":"light",""),"round","small"),l(n,75,0,i.Fb(1,"",null!=e.ideaInfo&&e.ideaInfo.isUserCommented?"success":"light",""),"round","small"),l(n,78,0,(null==e.ideaInfo?null:null==e.ideaInfo.idea?null:null==e.ideaInfo.idea.attach_id_list?null:e.ideaInfo.idea.attach_id_list.length)>0),l(n,81,0,null==e.ideaInfo?null:null==e.ideaInfo.idea?null:e.ideaInfo.idea.images),l(n,83,0,(null==e.ideaInfo?null:null==e.ideaInfo.idea?null:null==e.ideaInfo.idea.attachs?null:e.ideaInfo.idea.attachs.length)>0),l(n,87,0,"none"),l(n,94,0,e.message),l(n,97,0,"\u0110\xf3ng g\xf3p \xfd ki\u1ebfn .... "),l(n,100,0,"medium","clear","round"),l(n,103,0,"attach"),l(n,105,0,i.Fb(1,"",e.message||e.uploadingFiles.length>0?"secondary":"light",""),"clear","round"),l(n,107,0,"send"),l(n,109,0,(null==e.uploadingFiles?null:e.uploadingFiles.length)>0),l(n,113,0,null==e.ideaInfo?null:e.ideaInfo.comments)}),(function(l,n){var e=n.component;l(n,20,0,i.Fb(1,"",null==e.ideaInfo?null:null==e.ideaInfo.idea?null:e.ideaInfo.idea.avatar,"")),l(n,24,0,null==e.ideaInfo?null:null==e.ideaInfo.idea?null:e.ideaInfo.idea.username),l(n,28,0,i.Wb(n,28,0,i.Nb(n,29).transform(null==e.ideaInfo?null:null==e.ideaInfo.idea?null:e.ideaInfo.idea.created_time))),l(n,39,0,null==e.ideaInfo?null:null==e.ideaInfo.idea?null:e.ideaInfo.idea.id),l(n,42,0,null==e.ideaInfo?null:null==e.ideaInfo.idea?null:e.ideaInfo.idea.title);var t=i.Wb(n,49,0,l(n,51,0,i.Nb(n,0),i.Wb(n,49,0,l(n,50,0,i.Nb(n,1),null==e.ideaInfo?null:null==e.ideaInfo.idea?null:e.ideaInfo.idea.description))));l(n,49,0,t),l(n,58,0,null==e.ideaInfo?null:null==e.ideaInfo.idea?null:e.ideaInfo.idea.category_name),l(n,65,0,null==e.ideaInfo?null:null==e.ideaInfo.idea?null:e.ideaInfo.idea.status_name),l(n,70,0,null==e.ideaInfo?null:null==e.ideaInfo.idea?null:e.ideaInfo.idea.voted_count),l(n,73,0,null==e.ideaInfo?null:null==e.ideaInfo.comments?null:e.ideaInfo.comments.length),l(n,76,0,null==e.ideaInfo?null:null==e.ideaInfo.idea?null:e.ideaInfo.idea.total_point),l(n,79,0,"20px"),l(n,90,0,i.Fb(1,"",null==e.userInfo?null:e.userInfo.avatar,"")),l(n,91,0,i.Nb(n,96).ngClassUntouched,i.Nb(n,96).ngClassTouched,i.Nb(n,96).ngClassPristine,i.Nb(n,96).ngClassDirty,i.Nb(n,96).ngClassValid,i.Nb(n,96).ngClassInvalid,i.Nb(n,96).ngClassPending)}))}var U=i.xb("app-idea-detail",I,(function(l){return i.Xb(0,[(l()(),i.Bb(0,0,null,null,1,"app-idea-detail",[],null,null,null,O,x)),i.Ab(1,114688,null,0,I,[A.a,d.g,d.b,f.a,g.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),w=e("FOYl"),V=e("IheW"),N=e("6GXZ"),M=e("YD+O"),q=e("EpeG"),D=e("7ePi"),W=e("jVYb"),P=e("d2mR");class z{}e.d(n,"IdeaDetailPageModuleNgFactory",(function(){return $}));var $=i.yb(t,[],(function(l){return i.Kb([i.Lb(512,i.m,i.jb,[[8,[u.b,u.c,u.d,u.h,u.i,u.a,u.e,u.f,u.g,a.a,U]],[3,i.m],i.D]),i.Lb(4608,r.n,r.m,[i.z,[2,r.w]]),i.Lb(4608,p.k,p.k,[]),i.Lb(4608,s.b,s.b,[i.F,i.g]),i.Lb(4608,s.Ib,s.Ib,[s.b,i.m,i.w]),i.Lb(4608,s.Mb,s.Mb,[s.b,i.m,i.w]),i.Lb(5120,w.b,w.f,[]),i.Lb(5120,w.a,w.e,[]),i.Lb(4608,V.i,V.o,[r.c,i.I,V.m]),i.Lb(4608,V.p,V.p,[V.i,V.n]),i.Lb(5120,V.a,(function(l){return[l,new d.s]}),[V.p]),i.Lb(4608,V.l,V.l,[]),i.Lb(6144,V.j,null,[V.l]),i.Lb(4608,V.h,V.h,[V.j]),i.Lb(6144,V.b,null,[V.h]),i.Lb(4608,V.f,V.k,[V.b,i.w]),i.Lb(4608,V.c,V.c,[V.f]),i.Lb(4608,N.a,N.a,[]),i.Lb(1073742336,r.b,r.b,[]),i.Lb(1073742336,p.j,p.j,[]),i.Lb(1073742336,p.b,p.b,[]),i.Lb(1073742336,s.Eb,s.Eb,[]),i.Lb(1073742336,M.b,M.b,[]),i.Lb(1073742336,q.b,q.b,[]),i.Lb(1073742336,D.b,D.b,[]),i.Lb(1073742336,W.b,W.b,[]),i.Lb(1073742336,w.c,w.c,[]),i.Lb(1073742336,V.e,V.e,[]),i.Lb(1073742336,V.d,V.d,[]),i.Lb(1073742336,d.o,d.o,[]),i.Lb(1073742336,m.b,m.b,[]),i.Lb(1073742336,P.a,P.a,[]),i.Lb(1073742336,A.p,A.p,[[2,A.u],[2,A.m]]),i.Lb(1073742336,z,z,[]),i.Lb(1073742336,t,t,[]),i.Lb(256,V.m,"XSRF-TOKEN",[]),i.Lb(256,V.n,"X-XSRF-TOKEN",[]),i.Lb(1024,A.k,(function(){return[[{path:"",component:I}]]}),[])])}))}}]);