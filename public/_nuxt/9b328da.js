(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{807:function(t,e,l){"use strict";l.r(e);var r=l(755),n=l(756),o=(l(620),{layout:"tools",components:{LMap:r.a,LTileLayer:n.a},data:function(){return{user:!1,params:{results:1,gender:null}}},methods:{getUser:function(){var t=this;this.$axios.get("https://randomuser.me/api/",{params:this.params}).then((function(e){t.user=e.data.results[0]}))}},mounted:function(){this.getUser()}}),v=l(22),component=Object(v.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",[l("div",{staticClass:"row"},[l("div",{staticClass:"col-4"},[l("div",{staticClass:"mb-2"},[t._v("Parâmetros")]),t._v(" "),l("el-select",{attrs:{placeholder:"Gênero"},model:{value:t.params.gender,callback:function(e){t.$set(t.params,"gender",e)},expression:"params.gender"}},[l("el-option",{attrs:{value:null}},[t._v("Tanto faz")]),t._v(" "),l("el-option",{attrs:{value:"female"}},[t._v("Feminino")]),t._v(" "),l("el-option",{attrs:{value:"male"}},[t._v("Masculino")])],1),t._v(" "),l("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.getUser()}}},[t._v("\r\n                    Gerar\r\n                ")])],1),t._v(" "),l("div",{staticClass:"col-8"},[l("div",{staticClass:"mb-2"},[t._v("Resultado")]),t._v(" "),t.user?l("div",{staticClass:"bg-white shadow-sm rounded"},[l("div",{staticClass:"d-flex align-items-center"},[l("div",[l("img",{attrs:{src:t.user.picture.large,alt:"",width:"170px"}})]),t._v(" "),l("div",{staticClass:"flex-grow-1 pl-3"},[l("div",{staticClass:"font-weight-bold text-capitalize"},[t._v(t._s(t.user.name.title)+" "+t._s(t.user.name.first)+" "+t._s(t.user.name.last))]),t._v(" "),l("div",[t._v(t._s(t.user.email))]),t._v(" "),l("div",[t._v("Telefone: "+t._s(t.user.phone))]),t._v(" "),l("div",[t._v("Celular: "+t._s(t.user.cell))])]),t._v(" "),l("div",{staticClass:"flex-grow-1 pl-3"},[l("div",{staticClass:"font-weight-bold"},[t._v("Nascimento: ")]),t._v(" "),l("div",[t._v(t._s(t._f("date")(t.user.dob.date))+" ("+t._s(t.user.dob.age)+" anos)")]),t._v(" "),l("div",{staticClass:"mb-2"}),t._v(" "),l("div",{staticClass:"font-weight-bold text-capitalize"},[t._v("Endereço")]),t._v(" "),l("div",{staticClass:"text-muted"},[l("div",[t._v(t._s(t.user.location.street.name)+", "+t._s(t.user.location.street.number))]),t._v(" "),l("div",[t._v(t._s(t.user.location.city)+", "+t._s(t.user.location.state)+" - "+t._s(t.user.location.country))])])])]),t._v(" "),l("l-map",{staticClass:"bg-dark",staticStyle:{height:"150px"},attrs:{zoom:12,center:[t.user.location.coordinates.latitude,t.user.location.coordinates.longitude]}},[l("l-tile-layer",{attrs:{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}})],1)],1):t._e()])])])])}),[],!1,null,null,null);e.default=component.exports}}]);