(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{749:function(t,e,r){"use strict";r.r(e);var n={layout:"admin",methods:{userSearch:function(){var t=this;this.user.loading=!0,this.$axios.get("/api/user/search").then((function(e){t.user.loading=!1,t.user.resp=e.data}))}},data:function(){return{user:{loading:!1,edit:!1,params:{},resp:{}}}},mounted:function(){this.userSearch()}},o=r(5),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"text-right mb-3"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.user.edit={}}}},[r("i",{staticClass:"fa fa-fw fa-plus"}),t._v(" Novo usuário\r\n        ")])]),t._v(" "),r("ui-modal",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\r\n            "+t._s(t.user.edit.name||"Criar")+"\r\n        ")]},proxy:!0},{key:"body",fn:function(){return[r("ui-auth-register",{on:{success:function(e){t.user.edit=!1,t.userSearch()}},model:{value:t.user.edit,callback:function(e){t.$set(t.user,"edit",e)},expression:"user.edit"}})]},proxy:!0}]),model:{value:t.user.edit,callback:function(e){t.$set(t.user,"edit",e)},expression:"user.edit"}}),t._v(" "),t.user.loading?r("div",{staticClass:"text-center"},[t._v("\r\n        Carregando...\r\n    ")]):t._e(),t._v(" "),r("div",{staticClass:"row"},t._l(t.user.resp.data,(function(u){return r("div",{key:u.id,staticClass:"col-12 col-md-3 mb-5",staticStyle:{position:"relative"}},[r("user-card",{staticStyle:{position:"relative",height:"100%"},attrs:{value:u},scopedSlots:t._u([{key:"actions",fn:function(){return[r("nuxt-link",{directives:[{name:"tooltip",rawName:"v-tooltip.top-center",value:"Editar",expression:"'Editar'",modifiers:{"top-center":!0}}],staticClass:"btn btn-light",attrs:{to:"/user/"+u.id}},[r("i",{staticClass:"fas fa-edit"})]),t._v(" "),r("nuxt-link",{directives:[{name:"tooltip",rawName:"v-tooltip.top-center",value:"Projetos",expression:"'Projetos'",modifiers:{"top-center":!0}}],staticClass:"btn btn-light",attrs:{to:"/tevep/?user="+u.id}},[r("i",{staticClass:"fas fa-shopping-bag"})])]},proxy:!0}],null,!0)})],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiAuthRegister:r(409).default,UiModal:r(408).default})}}]);