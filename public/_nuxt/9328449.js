(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{536:function(t,e,r){var content=r(540);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("9ad8599e",content,!0,{sourceMap:!1})},539:function(t,e,r){"use strict";var l=r(536);r.n(l).a},540:function(t,e,r){(e=r(35)(!1)).push([t.i,".ui-actions-fixed{position:fixed;bottom:0;left:0;width:100%;z-index:9;box-shadow:0 -3px 3px -2px rgb(0 0 0/10%)!important}.ui-actions .d-flex>*{flex-grow:1}.ui-actions .btn{border-radius:0!important}",""]),t.exports=e},541:function(t,e,r){"use strict";r.r(e);r(539);var l=r(13),component=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui-actions"},[e("div",{staticClass:"ui-actions-fixed bg-white text-center text-md-right"},[e("div",{staticClass:"d-flex d-md-block p-md-1"},[this._t("default")],2)])])}),[],!1,null,null,null);e.default=component.exports},551:function(t,e,r){"use strict";r.r(e);var l={props:{label:{default:""},help:{default:""},error:{default:""}}},n=r(13),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-group row no-gutters mb-3"},[r("div",{staticClass:"col-12 col-md-4 col-lg-3 p-2 px-0 px-md-2"},[r("div",[t._v(t._s(t.label))]),t._v(" "),t.help?r("small",{staticClass:"d-block text-muted",domProps:{innerHTML:t._s(t.help)}}):t._e()]),t._v(" "),r("div",{staticClass:"col-12 col-md-8 col-lg-9"},[t._t("default"),t._v(" "),t.error?r("small",{staticClass:"d-block text-danger mt-1 mx-1"},[t._v(t._s(t.error))]):t._e()],2)])}),[],!1,null,null,null);e.default=component.exports},553:function(t,e,r){"use strict";r.r(e);var l={props:{value:String,id:String,name:String,placeholder:String,title:String},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},this.$props)}}},data:function(){return{props:Object.assign({},this.props)}}},n=r(13),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return"checkbox"===t.props.type?r("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.props.value)?t._i(t.props.value,null)>-1:t.props.value},on:{input:function(e){return t.$emit("input",t.props.value)},keyup:function(e){return t.$emit("keyup",t.props.value)},change:[function(e){var r=t.props.value,l=e.target,n=!!l.checked;if(Array.isArray(r)){var o=t._i(r,null);l.checked?o<0&&t.$set(t.props,"value",r.concat([null])):o>-1&&t.$set(t.props,"value",r.slice(0,o).concat(r.slice(o+1)))}else t.$set(t.props,"value",n)},function(e){return t.$emit("change",t.props.value)}]}},"input",t.props,!1)):"radio"===t.props.type?r("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control",attrs:{type:"radio"},domProps:{checked:t._q(t.props.value,null)},on:{input:function(e){return t.$emit("input",t.props.value)},keyup:function(e){return t.$emit("keyup",t.props.value)},change:[function(e){return t.$set(t.props,"value",null)},function(e){return t.$emit("change",t.props.value)}]}},"input",t.props,!1)):r("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control",attrs:{type:t.props.type},domProps:{value:t.props.value},on:{input:[function(e){e.target.composing||t.$set(t.props,"value",e.target.value)},function(e){return t.$emit("input",t.props.value)}],keyup:function(e){return t.$emit("keyup",t.props.value)},change:function(e){return t.$emit("change",t.props.value)}}},"input",t.props,!1))}),[],!1,null,null,null);e.default=component.exports},684:function(t,e,r){"use strict";r.r(e);var l={props:{value:Object},computed:{url:function(){return"/admin/setting/".concat(this.value.id)},backgroundStyle:function(){return"height:150px; background:url(https://img.freepik.com/vetores-gratis/fundo-abstrato-linhas-organicas_1017-26669.jpg?size=626&ext=jpg&ga=GA1.2.1052784754.1610150400) center center no-repeat; background-size:cover;"}}},n=r(13),component=Object(n.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"bg-white shadow-sm text-center rounded"},[e("nuxt-link",{staticClass:"d-block",style:this.backgroundStyle,attrs:{to:this.url}}),this._v(" "),e("div",{staticClass:"py-2"},[e("div",{staticClass:"font-weight-bold text-uppercase"},[this._v(this._s(this.value.name)+"  ")])])],1)])}),[],!1,null,null,null);e.default=component.exports},750:function(t,e,r){"use strict";r.r(e);var l={layout:"admin",middleware:"auth",head:function(){return{title:"Editar Setting"}},data:function(){return{loading:!1,error:{},edit:{}}},methods:{getModel:function(){var t=this;if(+this.$route.params.id){var e="query {\n\t\t\t\tSetting(id:".concat(this.$route.params.id,") {\n\t\t\t\t\tid, name, value, value_default, description, help \n\t\t\t\t}\n\t\t\t}");this.loading=!0,this.$graphql(e).then((function(e){t.loading=!1,t.edit=e.data.data.Setting}))}},saveModel:function(){var t=this;this.$Setting.save(this.edit).then((function(e){t.$swal("Dados salvos","","success"),t.$router.push({path:"/admin/setting/".concat(e.id)})}))}},mounted:function(){this.getModel()}},n=r(13),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("form",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],on:{submit:function(e){return e.preventDefault(),t.saveModel()}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-lg-4"},[r("ui-setting-card",{model:{value:t.edit,callback:function(e){t.edit=e},expression:"edit"}})],1),t._v(" "),r("div",{staticClass:"col-12 col-lg-8"},[r("ui-field",{attrs:{label:"Name",error:t.error.name}},[r("ui-text",t._b({model:{value:t.edit.name,callback:function(e){t.$set(t.edit,"name",e)},expression:"edit.name"}},"ui-text",{class:"form-control"},!1))],1),t._v(" "),r("ui-field",{attrs:{label:"Value",error:t.error.value}},[r("ui-text",t._b({model:{value:t.edit.value,callback:function(e){t.$set(t.edit,"value",e)},expression:"edit.value"}},"ui-text",{multiline:"true"},!1))],1),t._v(" "),r("ui-field",{attrs:{label:"Value_default",error:t.error.value_default}},[r("ui-text",t._b({model:{value:t.edit.value_default,callback:function(e){t.$set(t.edit,"value_default",e)},expression:"edit.value_default"}},"ui-text",{multiline:"true"},!1))],1),t._v(" "),r("ui-field",{attrs:{label:"Description",error:t.error.description}},[r("ui-text",t._b({model:{value:t.edit.description,callback:function(e){t.$set(t.edit,"description",e)},expression:"edit.description"}},"ui-text",{class:"form-control"},!1))],1),t._v(" "),r("ui-field",{attrs:{label:"Help",error:t.error.help}},[r("ui-text",t._b({model:{value:t.edit.help,callback:function(e){t.$set(t.edit,"help",e)},expression:"edit.help"}},"ui-text",{multiline:"true"},!1))],1)],1)]),t._v(" "),r("ui-actions",[r("nuxt-link",{staticClass:"btn",attrs:{to:"/admin/setting"}},[r("i",{staticClass:"fas fa-chevron-left"}),t._v(" Voltar\r\n\t\t\t")]),t._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[r("i",{staticClass:"fas fa-save"}),t._v(" Salvar\r\n\t\t\t")])],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiSettingCard:r(684).default,UiText:r(553).default,UiField:r(551).default,UiActions:r(541).default})}}]);