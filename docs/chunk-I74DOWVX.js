import{A as v,B as M,C as m,D as s,E as g,F as B,G as T,K as V,L as R,M as z,N as J,O as F,P as $,Q as G,R as K,S as H,T as Z,U as q,V as Q,W,X,Y,Z as ee,a as j,b as A,e as _,h as b,i as I,j as C,ja as N,l as p,la as k,ma as U,na as x,oa as w,pa as O,q as P,qa as te,r as d,ra as ie,s as i,t as n,ta as ne,v as S,w as L,x as r,y as h,z as c}from"./chunk-QDHIP47D.js";import"./chunk-35PI25VP.js";var ve=()=>({"min-width":"50rem"});function ye(t,e){t&1&&(i(0,"tr")(1,"th"),r(2,"fecha|date:"),n(),i(3,"th"),r(4,"fecha|date:'dd/MMMM/yyyy'|uppercase:"),n(),i(5,"th"),r(6,"fecha|date:'short'"),n(),i(7,"th"),r(8,"fecha|date:'long'"),n(),i(9,"th"),r(10,"fecha|date:'long':'':'en' "),n(),i(11,"th"),r(12,"fecha|date:'long':'':'fr-CA'"),n()())}function be(t,e){if(t&1&&(i(0,"tr",11)(1,"td"),r(2),m(3,"date"),n(),i(4,"td"),r(5),m(6,"date"),m(7,"uppercase"),n(),i(8,"td"),r(9),m(10,"date"),n(),i(11,"td"),r(12),m(13,"date"),n(),i(14,"td"),r(15),m(16,"date"),n(),i(17,"td"),r(18),m(19,"date"),n()()),t&2){let u=e.$implicit,a=L();p(2),v("",u.fecha,"",s(3,12,a.fecha),""),p(3),v("",u.fecha,"",s(7,17,g(6,14,a.fecha,"dd/MMMM/yyyy")),""),p(4),v("",u.fecha," ",g(10,19,a.fecha,"short"),""),p(3),v("",u.fecha,"",g(13,22,a.fecha,"long"),""),p(3),v("",u.fecha,"",T(16,25,a.fecha,"long","","en"),""),p(3),v("",u.fecha,"",T(19,30,a.fecha,"long","","fr-CA")," ")}}var ae=(()=>{let e=class e{constructor(){this.nameLower="miguel",this.nameUpper="MIGUEL",this.fullName="MIguEL aUDe AlCarAz",this.fecha=new Date,this.properties=[this.fecha]}};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=b({type:e,selectors:[["app-basics-page"]],decls:21,vars:12,consts:[["header","Pipes Basicos",1,"p-1"],[1,"grid"],[1,"col-12","md:col-4"],["header","Uppercase"],["header","Lowercase"],["header","Titlecase"],[1,"col-12","md:col-12"],["header","Pipe-Date"],["styleClass","p-datatable-gridlines",3,"value","tableStyle"],["pTemplate","header"],["pTemplate","body"],["clas","row-accessories"]],template:function(l,o){l&1&&(i(0,"p-panel",0)(1,"p"),r(2,"Pipes incluidos en Angula r - Usualmente en el Common Module"),n()(),i(3,"div",1)(4,"div",2)(5,"p-card",3),r(6),m(7,"uppercase"),n()(),i(8,"div",2)(9,"p-card",4),r(10),m(11,"lowercase"),n()(),i(12,"div",2)(13,"p-card",5),r(14),m(15,"titlecase"),n()(),i(16,"div",6)(17,"p-card",7)(18,"p-table",8),P(19,ye,13,0,"ng-template",9)(20,be,20,35,"ng-template",10),n()()()()),l&2&&(p(6),c(" ",s(7,5,o.nameLower)," "),p(4),c(" ",s(11,7,o.nameUpper)," "),p(4),c(" ",s(15,9,o.fullName)," "),p(4),d("value",o.properties)("tableStyle",M(11,ve)))},dependencies:[k,U,x,O,$,J,F,G]});let t=e;return t})();var oe=(()=>{let e=class e{constructor(){this.totalSells=771545122554e-4,this.percent=.5411}};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=b({type:e,selectors:[["app-numbers-page"]],decls:16,vars:13,consts:[["header","Pipes Basicos",1,"p-1"],[1,"grid"],[1,"col-12","md:col-4"],["header","Ventas Netas","subheader","del precente a\xF1o"],["header","Ventas Brutas","subheader","del precente a\xF1o"],["header","Ganancia Porcentual","subheader","del precente a\xF1o"]],template:function(l,o){l&1&&(i(0,"p-panel",0)(1,"p"),r(2,"Pipes incluidos en Angular - Usualmente en el Common Module"),n()(),i(3,"div",1)(4,"div",2)(5,"p-card",3),r(6),m(7,"number"),n()(),i(8,"div",2)(9,"p-card",4),r(10),m(11,"currency"),n()(),i(12,"div",2)(13,"p-card",5),r(14),m(15,"percent"),n()()()),l&2&&(p(6),c(" ",g(7,3,o.totalSells+1235,"1.2-2")," "),p(4),c(" ",T(11,6,o.totalSells,"EUR","symbol-narrow","1.6-6")," "),p(4),c(" ",s(15,11,o.percent)," "))},dependencies:[U,x,Q,W,X]});let t=e;return t})();function Pe(t,e){if(t&1&&(i(0,"li")(1,"b"),r(2),m(3,"titlecase"),n(),r(4),m(5,"titlecase"),n()),t&2){let u=e.$implicit;p(2),c("",s(3,2,u.key),":"),p(2),c(" ",s(5,4,u.value),"")}}function Se(t,e){t&1&&(i(0,"pre"),r(1," Resolviedo obserbables"),n())}function xe(t,e){t&1&&(i(0,"pre"),r(1," Resolviedo promesa"),n())}var pe=(()=>{let e=class e{constructor(){this.name="Miguel",this.gender="Male",this.invitationMap={Male:"invitarlo",Female:"invitarla"},this.clients=["Zacarias","Manuel","Dolores","Jesus","Humberto","Ricardo","Jackeline","Alejandra"],this.clientsMap={"=0":"no tenemos ning\xFAn cliente esperando.","=1":"tenemos un cliente esperando.","=2":"tenemos 2 personas esperando.",other:"tenemos # clientes esperando."},this.person={name:"Miguel",age:"39",adderess:"Chihuahua, M\xE9xico"},this.myObserbaleTimer=j(2e3).pipe(A(a=>console.log("tap:",a))),this.pomiseValue=new Promise((a,l)=>{setTimeout(()=>{a("Tenemos data en la promesa."),console.log("Tenemos data en la promesa."),this.person.name="Otro Nombre"},3500)})}changeClient(){this.name="Maria",this.gender="Female"}deleteClient(){this.clients.shift()}};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=b({type:e,selectors:[["app-uncommon-page"]],decls:59,vars:49,consts:[["header","Pipes No Tan Comunes",1,"p-1"],[1,"grid"],[1,"col-12","md:col-6"],["legend","i18nSelect Pipe",3,"toggleable"],["label","Cambiar Persona",3,"click"],["legend","i18nPlural Pipe",3,"toggleable"],["label","Borrar Cliente",3,"click"],["legend","Slice Pipe",3,"toggleable"],["legend","Json Pipe",3,"toggleable"],["legend","KeyValue Pipe",3,"toggleable"],[4,"ngFor","ngForOf"],["legend","Async Pipe",3,"toggleable"],[4,"ngIf"]],template:function(l,o){l&1&&(i(0,"p-panel",0)(1,"p"),r(2,"Pipes incluidos en Angular - Usualmente en el Common Module"),n()(),i(3,"div",1)(4,"div",2)(5,"p-fieldset",3)(6,"p"),r(7),m(8,"i18nSelect"),n(),i(9,"p-button",4),S("click",function(){return o.changeClient()}),n()()(),i(10,"div",2)(11,"p-fieldset",5)(12,"p"),r(13),m(14,"i18nPlural"),n(),i(15,"p-button",6),S("click",function(){return o.deleteClient()}),n()()(),i(16,"div",2)(17,"p-fieldset",7)(18,"b"),r(19,"Original"),n(),i(20,"pre"),r(21),n(),i(22,"b"),r(23,"slice:0:2"),n(),i(24,"pre"),r(25),m(26,"slice"),n(),i(27,"b"),r(28,"slice:3:6"),n(),i(29,"pre"),r(30),m(31,"slice"),n(),i(32,"b"),r(33,"slice:0:-3"),n(),i(34,"pre"),r(35),m(36,"slice"),n()()(),i(37,"div",2)(38,"p-fieldset",8)(39,"pre"),r(40),m(41,"json"),n()()(),i(42,"div",2)(43,"p-fieldset",9)(44,"ul"),P(45,Pe,6,6,"li",10),m(46,"keyvalue"),n()()(),i(47,"div",2)(48,"p-fieldset",11),P(49,Se,2,0,"pre",12),m(50,"async"),i(51,"pre"),r(52),m(53,"async"),n(),P(54,xe,2,0,"pre",12),m(55,"async"),i(56,"pre"),r(57),m(58,"async"),n()()()()),l&2&&(p(5),d("toggleable",!0),p(2),v("Saludos ",o.name,", es un placer ",g(8,19,o.gender,o.invitationMap)," a nuestro evento."),p(4),d("toggleable",!0),p(2),c("Actualmente ",g(14,22,o.clients.length,o.clientsMap)," "),p(4),d("toggleable",!0),p(4),h(o.clients),p(4),h(B(26,25,o.clients,0,2)),p(5),h(B(31,29,o.clients,3,6)),p(5),h(B(36,33,o.clients,0,-3)),p(3),d("toggleable",!0),p(2),h(s(41,37,o.person)),p(3),d("toggleable",!0),p(2),d("ngForOf",s(46,39,o.person)),p(3),d("toggleable",!0),p(),d("ngIf",!s(50,41,o.myObserbaleTimer)),p(3),c(" ",s(53,43,o.myObserbaleTimer),""),p(2),d("ngIf",!s(55,45,o.pomiseValue)),p(3),c(" ",s(58,47,o.pomiseValue),""))},dependencies:[V,R,w,te,x,z,Z,Y,F,K,H,q]});let t=e;return t})();var E=function(t){return t[t.red=0]="red",t[t.black=1]="black",t[t.blue=2]="blue",t[t.green=3]="green",t}(E||{});var le=(()=>{let e=class e{transform(a,l,o){return l&&o?a.charAt(0).toUpperCase()+a.substring(1).toLocaleLowerCase():l?a.toUpperCase():o?a.toLowerCase():a}};e.\u0275fac=function(l){return new(l||e)},e.\u0275pipe=C({name:"toggleCase",type:e,pure:!0});let t=e;return t})();var me=(()=>{let e=class e{transform(a){return a?"Si vuela":"No vuela"}};e.\u0275fac=function(l){return new(l||e)},e.\u0275pipe=C({name:"CanFlyPipe",type:e,pure:!0});let t=e;return t})();var se=(()=>{let e=class e{transform(a){return a==0?"Su traje es rojo":a==1?"Su traje es negro":a==2?"Su traje es azul":a==3?"Su traje es verde":"No tiene traje"}};e.\u0275fac=function(l){return new(l||e)},e.\u0275pipe=C({name:"ColorPipe",type:e,pure:!0});let t=e;return t})();var ce=(()=>{let e=class e{transform(a,l){switch(l){case"name":return a.sort((o,f)=>o.name>f.name?1:-1);case"canFly":return a.sort((o,f)=>o.canFly>f.canFly?1:-1);case"color":return a.sort((o,f)=>o.color>f.color?1:-1);default:return a}}};e.\u0275fac=function(l){return new(l||e)},e.\u0275pipe=C({name:"SortByPipe",type:e,pure:!0});let t=e;return t})();var Ie=()=>({"min-width":"50rem"});function Me(t,e){t&1&&(i(0,"tr")(1,"th"),r(2,"Nombre"),n(),i(3,"th"),r(4,"Vuela"),n(),i(5,"th"),r(6,"Color"),n()())}function Fe(t,e){if(t&1&&(i(0,"tr")(1,"td"),r(2),n(),i(3,"td"),r(4),m(5,"CanFlyPipe"),n(),i(6,"td"),r(7),m(8,"ColorPipe"),n()()),t&2){let u=e.$implicit;p(2),h(u.name),p(2),h(s(5,3,u.canFly)),p(3),h(s(8,5,u.color))}}var de=(()=>{let e=class e{constructor(){this.isUpperCase=!1,this.heroes=[{name:"Superman",canFly:!0,color:E.blue},{name:"Batman",canFly:!1,color:E.black},{name:"Daredevil",canFly:!1,color:E.red},{name:"Robin",canFly:!1,color:E.red},{name:"Linterna Verde",canFly:!0,color:E.green}]}toggleUpperCase(){this.isUpperCase=!this.isUpperCase}changeOrder(a){this.orderBy=a}};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=b({type:e,selectors:[["products-order"]],decls:18,vars:11,consts:[["header","Pipes Personalizados",1,"p-1"],[1,"p-toolbar-group-end"],["label","ToogleCase","icon","pi pi-search",3,"click"],["label","Por nombre","icon","pi pi-sort","styleClass","p-button-success",1,"mr-2",3,"onClick"],["label","Por volar","icon","pi pi-sort","styleClass","p-button-danger",1,"mr-2",3,"onClick"],["label","Por color","icon","pi pi-sort","styleClass","p-button-help",1,"mr-2",3,"onClick"],[1,"grid"],[1,"col","mt-2"],[3,"value","tableStyle"],["pTemplate","header"],["pTemplate","body"]],template:function(l,o){l&1&&(i(0,"p-panel",0)(1,"p"),r(2),m(3,"toggleCase"),n()(),i(4,"p-toolbar")(5,"div",1)(6,"p-button",2),S("click",function(){return o.toggleUpperCase()}),n()(),i(7,"div",1)(8,"p-button",3),S("onClick",function(){return o.changeOrder("name")}),n(),i(9,"p-button",4),S("onClick",function(){return o.changeOrder("canFly")}),n(),i(10,"p-button",5),S("onClick",function(){return o.changeOrder("color")}),n()()(),i(11,"div",6)(12,"div",7)(13,"p-panel")(14,"p-table",8),m(15,"SortByPipe"),P(16,Me,7,0,"ng-template",9)(17,Fe,9,7,"ng-template",10),n()()()()),l&2&&(p(2),c("Pipes Personalizados - Creados Por ",B(3,3,"nosotros Los CuAtro",o.isUpperCase,!1),""),p(12),d("value",g(15,7,o.heroes,o.orderBy))("tableStyle",M(10,Ie)))},dependencies:[w,k,x,O,ie,le,me,se,ce],encapsulation:2});let t=e;return t})();var ke=[{path:"",component:ae},{path:"numbers",component:oe},{path:"uncommon",component:pe},{path:"custom",component:de},{path:"**",redirectTo:""}],ue=(()=>{let e=class e{};e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=I({type:e}),e.\u0275inj=_({imports:[N.forChild(ke),N]});let t=e;return t})();var dt=(()=>{let e=class e{};e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=I({type:e}),e.\u0275inj=_({imports:[ee,ne,ue]});let t=e;return t})();export{dt as ProductsModule};
