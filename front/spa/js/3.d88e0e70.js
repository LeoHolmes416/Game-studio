(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"40a6":function(t,a,e){},6238:function(t,a,e){},"90e31":function(t,a,e){"use strict";e("6238")},"9bf4":function(t,a,e){"use strict";e("40a6")},a830:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"q-pa-md root-pad"},[s("q-layout",{attrs:{view:"hHh Lpr lff"}},[s("q-header",{staticClass:"my-header",staticStyle:{"border-radius":"15px"},attrs:{elevated:""}},[s("q-toolbar",{staticStyle:{"background-image":"linear-gradient(to right, #00adb5, #a8f6f6, #00adb5)"}},[s("q-btn",{staticClass:"q-mr-sm",attrs:{flat:"",round:"",icon:"menu"},on:{click:function(a){t.drawer=!t.drawer}}}),s("q-toolbar-title",{staticClass:"header-title",staticStyle:{"max-width":"250px","margin-right":"5px"}},[s("q-img",{attrs:{src:e("cf05")}})],1),s("q-input",{staticClass:"GPL__toolbar-input",attrs:{dense:"",standout:"bg-primary",placeholder:"Search"},scopedSlots:t._u([{key:"prepend",fn:function(){return[""===t.search?s("q-icon",{attrs:{name:"search"}}):s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"clear"},on:{click:function(a){t.search=""}}})]},proxy:!0}]),model:{value:t.search,callback:function(a){t.search=a},expression:"search"}}),s("q-space"),s("q-btn",{staticStyle:{color:"#393e46","font-size":"15px"},attrs:{dense:"",rounded:"",flat:"",size:"20px"}},[t._v("\n          "+t._s(t.ofc_name)+"\n          "),s("q-avatar",{attrs:{round:"",size:"55px"}},[s("img",{staticStyle:{border:"2px solid white"},attrs:{src:"https://cdn.quasar.dev/img/boy-avatar.png"}})]),s("q-tooltip",[t._v("账户信息")])],1),s("MyAvatar",{attrs:{nick:t.ofc_name}})],1)],1),s("q-drawer",{attrs:{"show-if-above":"",mini:t.miniState,"mini-to-overlay":"",width:200,breakpoint:500,"content-style":{},bordered:""},on:{mouseover:function(a){t.miniState=!1},mouseout:function(a){t.miniState=!0}},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[s("q-list",{staticClass:"menu-list",attrs:{padding:""}},[s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",active:t.active_items[0]},on:{click:function(a){return t.router_push(0,"ofc_index")}}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"inbox"}})],1),s("q-item-section",[t._v("\n            所有官方\n          ")])],1),s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",active:t.active_items[1]},on:{click:function(a){return t.router_push(1,"ofc_post")}}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"star"}})],1),s("q-item-section",[t._v("\n            发表内容\n          ")])],1),s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",active:t.active_items[2]},on:{click:function(a){return t.router_push(2,"ofc_contents")}}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"send"}})],1),s("q-item-section",[t._v("\n            我的内容\n          ")])],1)],1)],1),s("q-page-container",[s("router-view")],1)],1)],1)},i=[],r=e("d2a9"),o={name:"MainLayout",components:{MyAvatar:r["a"]},data(){return{drawer:!1,miniState:!0,active_items:[!1,!1,!1,!1,!1]}},methods:{switchDark(){this.$q.dark.toggle()},router_push(t,a){this.active_items.forEach(((t,a)=>{this.active_items[a]=!1})),this.active_items[t]=!0,this.$router.push({path:"/"+a})}},computed:{ofc_name:{get(){return this.$store.state.userstate.ofc_name},set(t){this.$store.commit("userstate/updateOfcName",t)}}}},n=o,c=(e("9bf4"),e("2877")),l=e("4d5a"),u=e("e359"),p=e("65c6"),m=e("9c40"),d=e("6ac5"),v=e("068f"),b=e("27f9"),f=e("0016"),h=e("2c91"),q=e("cb32"),g=e("05c0"),_=e("9404"),w=e("1c1c"),x=e("66e5"),k=e("4074"),y=e("09e3"),Q=e("714f"),C=e("eebe"),S=e.n(C),D=Object(c["a"])(n,s,i,!1,null,"49824780",null);a["default"]=D.exports;S()(D,"components",{QLayout:l["a"],QHeader:u["a"],QToolbar:p["a"],QBtn:m["a"],QToolbarTitle:d["a"],QImg:v["a"],QInput:b["a"],QIcon:f["a"],QSpace:h["a"],QAvatar:q["a"],QTooltip:g["a"],QDrawer:_["a"],QList:w["a"],QItem:x["a"],QItemSection:k["a"],QPageContainer:y["a"]}),S()(D,"directives",{Ripple:Q["a"]})},cf05:function(t,a,e){t.exports=e.p+"img/logo.9516f9cf.png"},d2a9:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"q-pa-md out-pad",staticStyle:{"border-radius":"15px"}},[e("q-btn-dropdown",{attrs:{rounded:"",flat:"",dense:"",color:"secondary"}},[e("div",{staticClass:"row no-wrap q-pa-md"},[e("div",{staticClass:"column glass-pad"},[e("div",{staticClass:"text-h6 q-mb-md"},[t._v("Settings")]),e("q-toggle",{attrs:{label:"Use Mobile Data"},model:{value:t.mobileData,callback:function(a){t.mobileData=a},expression:"mobileData"}}),e("q-toggle",{attrs:{label:"Bluetooth"},model:{value:t.bluetooth,callback:function(a){t.bluetooth=a},expression:"bluetooth"}})],1),e("q-separator",{staticClass:"q-mx-lg",attrs:{vertical:"",inset:""}}),e("div",{staticClass:"column items-center"},[e("q-avatar",{staticClass:"shadow-4",attrs:{size:"72px"}},[e("img",{attrs:{src:"https://cdn.quasar.dev/img/boy-avatar.png"}})]),e("div",{staticClass:"text-subtitle1 q-mt-md q-mb-xs"},[t._v(" "+t._s(t.nick)+" ")]),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"primary",label:"Logout",push:"",size:"sm"},on:{click:t.toLogin}})],1)],1)])],1)},i=[],r={name:"account-dropdown",data(){return{mobileData:!0,bluetooth:!1}},methods:{toLogin(){this.$router.push({path:"/gate"})}},props:["avatar","nick"]},o=r,n=(e("90e31"),e("2877")),c=e("f20b"),l=e("9564"),u=e("eb85"),p=e("cb32"),m=e("9c40"),d=e("7f67"),v=e("eebe"),b=e.n(v),f=Object(n["a"])(o,s,i,!1,null,"99caea2e",null);a["a"]=f.exports;b()(f,"components",{QBtnDropdown:c["a"],QToggle:l["a"],QSeparator:u["a"],QAvatar:p["a"],QBtn:m["a"]}),b()(f,"directives",{ClosePopup:d["a"]})}}]);