(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{367:function(t,e,r){"use strict";r.r(e);var o={props:{value:{default:!1}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},computed:{meter:function(){var t=this.props.value,e=0,r="danger";if(t){for(var o=new Object,i=0;i<t.length;i++)o[t[i]]=(o[t[i]]||0)+1,e+=5/o[t[i]];var n={digits:/\d/.test(t),lower:/[a-z]/.test(t),upper:/[A-Z]/.test(t),nonWords:/\W/.test(t)},l=0;for(var c in n)l+=1==n[c]?1:0;e+=10*(l-1),(e=parseInt(e))>=70?r="success":e>=40&&(r="primary")}return{score:e,class:r}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)}},data:function(){return{props:Object.assign({},this.$props)}}},n=r(15),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"progress",staticStyle:{height:"5px"}},[e("div",{staticClass:"progress-bar progress-bar-striped",class:"bg-"+this.meter.class,style:"width:"+this.meter.score+"%;"})])])}),[],!1,null,null,null);e.default=component.exports},369:function(t,e,r){var content=r(374);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("b8d0879e",content,!0,{sourceMap:!1})},372:function(t,e,r){var content=r(386);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("d8c97870",content,!0,{sourceMap:!1})},373:function(t,e,r){"use strict";var o=r(369);r.n(o).a},374:function(t,e,r){(e=r(45)(!1)).push([t.i,".ui-modal{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.2);z-index:9999!important;display:flex;align-items:center;justify-content:center;padding:0!important}.ui-modal .card{width:600px;max-width:90vw!important;max-height:90vh;margin:0!important;overflow:auto!important}",""]),t.exports=e},378:function(t,e,r){"use strict";r.r(e);var o={props:{value:{default:!1},tag:{default:"div"}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{toggle:function(){this.props.value=!this.props.value,this.$emit("value",this.props.value)}},data:function(){return{props:Object.assign({},this.$props)}}},n=(r(373),r(15)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("transition",{attrs:{name:"custom-unique-name","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"}},[t.props.value?r("div",{staticClass:"ui-modal",staticStyle:{"animation-duration":"300ms"},on:{click:function(e){if(e.target!==e.currentTarget)return null;t.props.value=!1,t.$emit("input",t.props.value)}}},[r(t.tag,{tag:"component",on:{submit:function(e){return e.preventDefault(),t.$emit("submit",e)}}},[r("div",{staticClass:"card"},[t.$slots.header?r("div",{staticClass:"card-header"},[t._t("header")],2):t._e(),t._v(" "),r("div",{staticClass:"card-body"},[t._t("body")],2),t._v(" "),t.$slots&&t.$slots.footer?r("div",{staticClass:"card-footer text-right"},[t._t("footer")],2):t._e()])])],1):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports},385:function(t,e,r){"use strict";var o=r(372);r.n(o).a},386:function(t,e,r){(e=r(45)(!1)).push([t.i,".user-card-content{height:90px;display:flex;align-items:center;justify-content:center}.user-card-actions{display:flex}.user-card-actions .btn{margin:0}.user-card-image{background:50% no-repeat #f5f5f5;background-size:cover;width:100px;height:100px;margin:-50px auto 0;border-radius:50%;border:4px solid #fff;overflow:hidden;display:flex;align-items:center;justify-content:center}.user-card-bg{background-size:cover;background-position:50%;background-repeat:no-repeat;height:200px}.user-card-pattern{--stripe:#f5f5f5;--bg:#eee;background:linear-gradient(135deg,var(--bg) 25%,transparent 0) -50px 0,linear-gradient(225deg,var(--bg) 25%,transparent 0) -50px 0,linear-gradient(315deg,var(--bg) 25%,transparent 0),linear-gradient(45deg,var(--bg) 25%,transparent 0);background-size:100px 100px;background-color:var(--stripe)}",""]),t.exports=e},394:function(t,e,r){"use strict";r.r(e);var o={name:"user-card",props:{value:{default:function(){return{}}}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},data:function(){return{props:Object.assign({},this.$props)}}},n=(r(385),r(15)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"user-card bg-white shadow-sm rounded"},[t.props.value.meta.background?r("div",{staticClass:"user-card-bg",style:"background-image:url("+t.props.value.meta.background+");"}):r("div",{staticClass:"user-card-bg user-card-pattern"}),t._v(" "),r("div",{staticClass:"user-card-image shadow-sm",style:"background-image:url("+t.props.value.meta.photo+");"},[t._t("image")],2),t._v(" "),r("div",{staticClass:"user-card-content"},[r("div",[r("div",{staticClass:"text-center font-weight-bold text-uppercase mt-2"},[r("nuxt-link",{attrs:{to:""}},[t._v(t._s(t.props.value.name))])],1),t._v(" "),r("div",{staticClass:"text-center text-muted"},[t._v(t._s(t.props.value.meta.description))]),t._v(" "),r("div",{staticClass:"text-center text-muted"},[t._v(t._s(t.props.value.email))]),t._v(" "),r("div",{staticClass:"pb-4"})])]),t._v(" "),r("div",{staticClass:"btn-group user-card-actions"},[t._t("actions")],2)])}),[],!1,null,null,null);e.default=component.exports},430:function(t,e,r){"use strict";r.r(e);var o={name:"ui-photo",props:{value:{default:""},defaultImage:{default:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjYyMS4xMjdweCIgaGVpZ2h0PSI2MjEuMTI3cHgiIHZpZXdCb3g9Ijg5LjQzNyAtMTAuNTYzIDYyMS4xMjcgNjIxLjEyNyINCgkgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyA4OS40MzcgLTEwLjU2MyA2MjEuMTI3IDYyMS4xMjciIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KCTxyZWN0IHg9IjEwOS40MzciIHk9IjEwIiBmaWxsPSIjREFEQkRDIiB3aWR0aD0iNTgxLjEyNyIgaGVpZ2h0PSI1ODAuNTYyIi8+DQoJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUuMDAwMDAwLCAtNS4wMDAwMDApIj4NCgkJPHBhdGggZmlsbD0iI0YzRjRGNCIgZD0iTTk0LjQzNy01LjU2M2g2MjEuMTI3djYyMS4xMjdIOTQuNDM3Vi01LjU2M0w5NC40MzctNS41NjN6IE00NzUuMzQ2LDI1NC4wNTdsLTguMTg1LTQ3LjgzMUwyOTkuNjMsMjM1LjY0MQ0KCQkJbDI0LjU1MywxMzkuOTA4bDE2LjYyNy0yLjgxM3YxMi4wMjFoMTcwLjA4N1YyNTQuMDU3SDQ3NS4zNDZMNDc1LjM0NiwyNTQuMDU3eiBNMzQwLjgxMSwzNTguNjY2bC01LjM3MSwxLjAyMWwtMTkuOTUtMTEyLjc5NA0KCQkJbDE0MC40MTktMjQuODEybDUuNjI4LDMxLjk3NEgzNDAuODExVjM1OC42NjZMMzQwLjgxMSwzNTguNjY2TDM0MC44MTEsMzU4LjY2NnogTTQ5Ny4wODcsMzcwLjk0M0gzNTQuNjIxVjI2Ny44NjhoMTQyLjQ2NlYzNzAuOTQzDQoJCQlMNDk3LjA4NywzNzAuOTQzeiBNMzYzLjgyOCwyNzcuMDc1djc2LjQ3NGwyOC45MDMtMTkuMTgxbDE3LjkwMywxMS4yNTJsNDMuNDgtNDcuODI5bDUuNjI5LDIuMzAxbDI4LjEzNCwzMi40ODV2LTU1LjUwMkgzNjMuODI4DQoJCQlMMzYzLjgyOCwyNzcuMDc1TDM2My44MjgsMjc3LjA3NXogTTM5MS40NTEsMzEwLjA2OGMtNi42NDgsMC0xMi4yNzYtNS42MjYtMTIuMjc2LTEyLjI3N2MwLTYuNjUsNS42MjgtMTIuMjc5LDEyLjI3Ni0xMi4yNzkNCgkJCWM2LjY1MSwwLDEyLjI3Niw1LjYyNiwxMi4yNzYsMTIuMjc5QzQwMy43MjksMzA0LjQ0MiwzOTguMTAyLDMxMC4wNjgsMzkxLjQ1MSwzMTAuMDY4TDM5MS40NTEsMzEwLjA2OEwzOTEuNDUxLDMxMC4wNjh6Ii8+DQoJPC9nPg0KPC9zdmc+DQo="}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},computed:{compUrl:function(){return this.props.value||this.defaultImage}},methods:{emit:function(){this.$emit("input",this.props.value)},toggle:function(){this.$refs.modal.toggle()},getFile:function(t){var e=this;if(t){var r=new FileReader;r.readAsDataURL(t),r.onload=function(){e.props.value=r.result,e.$emit("input",e.props.value)}}}},data:function(){return{props:Object.assign({},this.$props)}}},n=r(15),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ui-photo",attrs:{dropzone:"copy"},on:{drop:function(e){return t.onDrop(e)},dragover:function(t){return t.preventDefault()}}},[r("ui-modal",{ref:"modal",scopedSlots:t._u([{key:"body",fn:function(){return[r("div",{staticClass:"form-group"},[r("label",[t._v("Informe a URL do arquivo:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.props.value},on:{keyup:function(e){return t.$emit("input",t.props.value)},input:function(e){e.target.composing||t.$set(t.props,"value",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("Ou faça upload:")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"file"},on:{change:function(e){t.getFile(e.target.files[0]||!1),e.target.type="text",e.target.type="file",t.modal=!1}}})]),t._v(" "),r("div",{staticClass:"form-group"},[t._v("\r\n                Você também pode arrastar e soltar a imagem aqui ou diretamente na miniatura da foto fora do modal.\r\n            ")])]},proxy:!0},{key:"footer",fn:function(){return[r("a",{staticClass:"btn btn-danger float-left",attrs:{href:"javascript:;"},on:{click:function(e){t.props.value="",t.$emit("input","")}}},[t._v("Remover imagem")])]},proxy:!0}])}),t._v(" "),t.props.value?r("div",{staticStyle:{cursor:"pointer"},on:{click:function(e){t.props.value="",t.$emit("input","")}}},[t._t("has-image",[r("img",{staticStyle:{width:"100%",margin:"0px!important"},attrs:{src:t.compUrl,alt:""}}),t._v(" "),r("a",{staticClass:"btn btn-outline-danger btn-block",attrs:{href:"javascript:;"},on:{click:function(e){t.props.value="",t.$emit("input","")}}},[r("i",{staticClass:"fas fa-times"}),t._v(" Remover\r\n            ")])])],2):r("div",{staticStyle:{cursor:"pointer"},on:{click:function(e){t.props.modal=!0}}},[t._t("no-image",[r("img",{staticStyle:{width:"100%",margin:"0px!important"},attrs:{src:t.compUrl,alt:""}}),t._v(" "),r("div",{staticClass:"m-0"},[r("div",{staticClass:"btn btn-outline-primary btn-block",on:{click:function(e){t.props.modal=!0}}},[r("i",{staticClass:"fas fa-upload"}),t._v(" Upload\r\n                ")])])])],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiModal:r(378).default})},431:function(t,e,r){"use strict";r.r(e);var o={props:{value:{default:""},label:{default:""},placeholder:{default:""},type:{default:"text"},imgMaxWidth:{default:800},imgMaxHeight:{default:600},error:{default:""},layout:{default:"horizontal"}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)}},data:function(){return{props:Object.assign({},this.$props)}}},n=r(15),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-group"},["horizontal"==t.layout?r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-4 col-lg-3 p-2"},[r("div",[t._v(t._s(t.label))])]),t._v(" "),r("div",{staticClass:"col-12 col-md-8 col-lg-9"},[t.$slots.field?[t._t("field")]:"textarea"==t.type?[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control",domProps:{value:t.props.value},on:{keyup:function(e){return t.emit()},input:function(e){e.target.composing||t.$set(t.props,"value",e.target.value)}}})]:["checkbox"===t.type?r("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control",attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.props.value)?t._i(t.props.value,null)>-1:t.props.value},on:{keyup:function(e){return t.emit()},change:function(e){var r=t.props.value,o=e.target,n=!!o.checked;if(Array.isArray(r)){var l=t._i(r,null);o.checked?l<0&&t.$set(t.props,"value",r.concat([null])):l>-1&&t.$set(t.props,"value",r.slice(0,l).concat(r.slice(l+1)))}else t.$set(t.props,"value",n)}}}):"radio"===t.type?r("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control",attrs:{placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.props.value,null)},on:{keyup:function(e){return t.emit()},change:function(e){return t.$set(t.props,"value",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control",attrs:{placeholder:t.placeholder,type:t.type},domProps:{value:t.props.value},on:{keyup:function(e){return t.emit()},input:function(e){e.target.composing||t.$set(t.props,"value",e.target.value)}}})],t._v(" "),t.props.error?r("small",{staticClass:"d-block text-danger",domProps:{innerHTML:t._s(t.props.error)}}):t._e(),t._v(" "),t.$slots.hint?r("small",{staticClass:"text-muted"},[t._t("hint")],2):t._e()],2)]):"full"==t.layout?r("div",{staticClass:"form-group"},[r("label",{domProps:{innerHTML:t._s(t.label)}}),t._v(" "),t.$slots.field?[t._t("field")]:"textarea"==t.type?[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control",domProps:{value:t.props.value},on:{keyup:function(e){return t.emit()},input:function(e){e.target.composing||t.$set(t.props,"value",e.target.value)}}})]:["checkbox"===t.type?r("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control",attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.props.value)?t._i(t.props.value,null)>-1:t.props.value},on:{keyup:function(e){return t.emit()},change:function(e){var r=t.props.value,o=e.target,n=!!o.checked;if(Array.isArray(r)){var l=t._i(r,null);o.checked?l<0&&t.$set(t.props,"value",r.concat([null])):l>-1&&t.$set(t.props,"value",r.slice(0,l).concat(r.slice(l+1)))}else t.$set(t.props,"value",n)}}}):"radio"===t.type?r("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control",attrs:{placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.props.value,null)},on:{keyup:function(e){return t.emit()},change:function(e){return t.$set(t.props,"value",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control",attrs:{placeholder:t.placeholder,type:t.type},domProps:{value:t.props.value},on:{keyup:function(e){return t.emit()},input:function(e){e.target.composing||t.$set(t.props,"value",e.target.value)}}})],t._v(" "),t.props.error?r("small",{staticClass:"d-block text-danger",domProps:{innerHTML:t._s(t.props.error)}}):t._e(),t._v(" "),t.$slots.hint?r("small",{staticClass:"text-muted"},[t._t("hint")],2):t._e()],2):t._e()])}),[],!1,null,null,null);e.default=component.exports},449:function(t,e,r){"use strict";r.r(e);var o={layout:"admin",methods:{userFind:function(){var t=this;this.loading=!0;var e="me"==this.$route.params.id?this.$auth.user.id:this.$route.params.id;this.$axios.get("/api/user/find",{params:{id:e}}).then((function(e){t.loading=!1,t.user=e.data}))},userStore:function(){var t=this;this.$axios.post("/api/user/store",this.user).then((function(e){if(e.data.error)return t.error=e.data.error;t.$swalSuccess("Sucesso","Dados salvos")}))}},data:function(){return{loading:!1,error:{},user:{}}},mounted:function(){this.userFind()}},n=r(15),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.loading?r("div",[t._v("Carregando...")]):t._e(),t._v(" "),t.user.id?r("form",{on:{submit:function(e){return e.preventDefault(),t.userStore()}}},[r("ui-photo",{ref:"userPhoto",scopedSlots:t._u([{key:"has-image",fn:function(){return[t._v(" ")]},proxy:!0},{key:"no-image",fn:function(){return[t._v(" ")]},proxy:!0}],null,!1,99489010),model:{value:t.user.meta.photo,callback:function(e){t.$set(t.user.meta,"photo",e)},expression:"user.meta.photo"}}),t._v(" "),r("ui-photo",{ref:"userBackground",scopedSlots:t._u([{key:"has-image",fn:function(){return[t._v(" ")]},proxy:!0},{key:"no-image",fn:function(){return[t._v(" ")]},proxy:!0}],null,!1,99489010),model:{value:t.user.meta.background,callback:function(e){t.$set(t.user.meta,"background",e)},expression:"user.meta.background"}}),t._v(" "),r("form",{on:{submit:function(e){return e.preventDefault(),t.userStore(e)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-4 mb-4"},[r("user-card",{scopedSlots:t._u([{key:"actions",fn:function(){return[r("a",{staticClass:"btn btn-light",attrs:{href:"javascript:;"},on:{click:function(e){return t.$refs.userPhoto.toggle()}}},[t._v("Foto")]),t._v(" "),r("a",{staticClass:"btn btn-light",attrs:{href:"javascript:;"},on:{click:function(e){return t.$refs.userBackground.toggle()}}},[t._v("Background")])]},proxy:!0}],null,!1,4271057294),model:{value:t.user,callback:function(e){t.user=e},expression:"user"}})],1),t._v(" "),r("div",{staticClass:"col-12 col-md-8"},[r("div",{staticClass:"bg-white shadow-sm p-3"},[r("ui-field",t._b({attrs:{label:"Nome"},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}},"ui-field",{type:"text",layout:"full",error:t.error.name},!1)),t._v(" "),r("ui-field",t._b({attrs:{label:"E-mail"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}},"ui-field",{type:"email",layout:"full",error:t.error.email},!1)),t._v(" "),r("ui-field",t._b({attrs:{label:"Descrição"},model:{value:t.user.meta.description,callback:function(e){t.$set(t.user.meta,"description",e)},expression:"user.meta.description"}},"ui-field",{type:"text",layout:"full"},!1)),t._v(" "),r("ui-field",t._b({attrs:{label:"Senha"},scopedSlots:t._u([{key:"field",fn:function(){return[r("div",{staticClass:"row"},[r("div",{staticClass:"col-6"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),t._v(" "),r("ui-password-meter",{model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1),t._v(" "),r("div",{staticClass:"col-6"},[r("input",{staticClass:"form-control",attrs:{type:"password"}})])])]},proxy:!0}],null,!1,1436791312)},"ui-field",{layout:"full",error:t.error.password},!1)),t._v(" "),t._m(0)],1)])])])],1):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pt-3 text-right"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[this._v("\r\n                                Salvar\r\n                            ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{UiPhoto:r(430).default,UserCard:r(394).default,UiField:r(431).default,UiPasswordMeter:r(367).default})}}]);