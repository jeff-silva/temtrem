(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{548:function(e,t,r){"use strict";r.r(t);var o={name:"ui-password",props:{value:{default:""},placeholder:{default:""},toggleShow:{default:!0},meter:{default:!0},type:{default:"password"}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e,this.props)}}},data:function(){return{props:Object.assign({},this.$props)}}},n=r(22),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-control p-0 bg-white"},[r("div",{staticClass:"input-group"},["checkbox"===e.props.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:e.props.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(e.props.value)?e._i(e.props.value,null)>-1:e.props.value},on:{input:function(t){return e.$emit("input",e.props.value)},change:function(t){var r=e.props.value,o=t.target,n=!!o.checked;if(Array.isArray(r)){var l=e._i(r,null);o.checked?l<0&&e.$set(e.props,"value",r.concat([null])):l>-1&&e.$set(e.props,"value",r.slice(0,l).concat(r.slice(l+1)))}else e.$set(e.props,"value",n)}}}):"radio"===e.props.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:e.props.placeholder,type:"radio"},domProps:{checked:e._q(e.props.value,null)},on:{input:function(t){return e.$emit("input",e.props.value)},change:function(t){return e.$set(e.props,"value",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:e.props.placeholder,type:e.props.type},domProps:{value:e.props.value},on:{input:[function(t){t.target.composing||e.$set(e.props,"value",t.target.value)},function(t){return e.$emit("input",e.props.value)}]}}),e._v(" "),e.props.toggleShow?r("div",{staticClass:"input-group-append"},[r("div",{staticClass:"input-group-btn"},[r("div",{staticClass:"btn",on:{click:function(t){e.props.type="text"==e.props.type?"password":"text"}}},[r("i",{staticClass:"fas fa-eye",class:{"fa-eye-slash":"password"==e.props.type}})])])]):e._e()]),e._v(" "),e.props.meter?r("ui-password-meter",{staticStyle:{"margin-top":"-4px"},model:{value:e.props.value,callback:function(t){e.$set(e.props,"value",t)},expression:"props.value"}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiPasswordMeter:r(559).default})},558:function(e,t,r){"use strict";r.r(t);var o={props:{value:{default:function(){return{}}},method:{default:"post"},action:{default:""}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)},submit:function(){var e=this;if(this.action&&this.method&&this.$axios[this.method]){var t=this.$axios[this.method],r="get"==this.method?{params:this.props.value}:this.props.value;this.loading='<i class="fa fa-fw fa-spin fa-spinner"></i>',this.responseSuccess=!1,this.responseErrorMessage=!1,this.responseErrorFields={},t(this.action,r).then((function(t){e.loading="",e.responseSuccess=t.data,e.$emit("success",e.responseSuccess)})).catch((function(t){for(var i in e.loading="",e.responseErrorMessage=t.response.data.message||"Erro",e.responseErrorFields=t.response.data.fields||{},e.responseErrorFields)Array.isArray(e.responseErrorFields[i])&&(e.responseErrorFields[i]=e.responseErrorFields[i].join("<br>"));e.$emit("error",e.responseErrorFields)}))}this.$emit("submit",{action:this.props.action,method:this.props.method,value:this.props.value})}},data:function(){return{loading:"",responseSuccess:!1,responseErrorMessage:!1,responseErrorFields:{},props:Object.assign({},this.$props)}}},n=r(22),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"ui-form",attrs:{method:e.method,action:e.action},on:{submit:function(t){return t.preventDefault(),e.submit()}}},[e.responseSuccess&&(e.$slots.success||e.$scopedSlots.success)?r("div",{staticClass:"alert alert-success"},[e._t("success",null,{response:e.responseSuccess})],2):e._e(),e._v(" "),e.responseErrorMessage?e._t("error",[e.responseErrorMessage?r("div",{staticClass:"alert alert-danger",domProps:{innerHTML:e._s(e.responseErrorMessage)}}):e._e()],{errorMessage:e.responseErrorMessage,fields:e.responseErrorFields}):e._e(),e._v(" "),e._t("default",null,{loading:e.loading,error:e.responseErrorFields,errorMessage:e.responseErrorMessage,success:e.responseSuccess})],2)}),[],!1,null,null,null);t.default=component.exports},559:function(e,t,r){"use strict";r.r(t);var o={props:{value:{default:!1}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},computed:{meter:function(){var e=this.props.value,t=0,r="danger";if(e){for(var o=new Object,i=0;i<e.length;i++)o[e[i]]=(o[e[i]]||0)+1,t+=5/o[e[i]];var n={digits:/\d/.test(e),lower:/[a-z]/.test(e),upper:/[A-Z]/.test(e),nonWords:/\W/.test(e)},l=0;for(var c in n)l+=1==n[c]?1:0;t+=10*(l-1),(t=parseInt(t))>=70?r="success":t>=40&&(r="primary")}return{score:t,class:r}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)}},data:function(){return{props:Object.assign({},this.$props)}}},n=r(22),component=Object(n.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"progress",staticStyle:{height:"5px"}},[t("div",{staticClass:"progress-bar progress-bar-striped",class:"bg-"+this.meter.class,style:"width:"+this.meter.score+"%;"})])])}),[],!1,null,null,null);t.default=component.exports},570:function(e,t,r){"use strict";r.r(t);var o={name:"ui-auth-register",props:{value:{default:function(){return{}}}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},data:function(){return{props:Object.assign({},this.$props)}}},n=r(22),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ui-form",{attrs:{method:"post",action:"/api/user/save/"},scopedSlots:e._u([{key:"success",fn:function(t){var o=t.response;return[e._v("Olá "+e._s(o.name)+". Seu cadastro foi concluído, agora é só "),r("nuxt-link",{attrs:{to:"/auth"}},[e._v("fazer login")]),e._v(".")]}},{key:"default",fn:function(t){var o=t.loading,n=t.error;return[e._t("content",[r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value.name,expression:"props.value.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nome"},domProps:{value:e.props.value.name},on:{input:function(t){t.target.composing||e.$set(e.props.value,"name",t.target.value)}}}),e._v(" "),n.name?r("small",{staticClass:"text-danger",domProps:{innerHTML:e._s(n.name)}}):e._e()]),e._v(" "),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value.email,expression:"props.value.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"E-mail"},domProps:{value:e.props.value.email},on:{input:function(t){t.target.composing||e.$set(e.props.value,"email",t.target.value)}}}),e._v(" "),n.email?r("small",{staticClass:"text-danger",domProps:{innerHTML:e._s(n.email)}}):e._e()]),e._v(" "),r("div",{staticClass:"form-group"},[r("ui-password",{attrs:{placeholder:"Senha"},model:{value:e.props.value.password,callback:function(t){e.$set(e.props.value,"password",t)},expression:"props.value.password"}}),e._v(" "),n.password?r("small",{staticClass:"text-danger",domProps:{innerHTML:e._s(n.password)}}):e._e()],1),e._v(" "),r("div",{staticClass:"form-group"},[r("ui-password",{attrs:{meter:!1,placeholder:"Repita senha"},model:{value:e.props.value.password_confirmation,callback:function(t){e.$set(e.props.value,"password_confirmation",t)},expression:"props.value.password_confirmation"}}),e._v(" "),n.password_confirmation?r("small",{staticClass:"text-danger",domProps:{innerHTML:e._s(n.password_confirmation)}}):e._e()],1),e._v(" "),r("div",{staticClass:"form-group text-right"},[r("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[e._v("\r\n                        Cadastrar "),r("span",{domProps:{innerHTML:e._s(o)}})])])])]}}],null,!0),model:{value:e.props.value,callback:function(t){e.$set(e.props,"value",t)},expression:"props.value"}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiPassword:r(548).default,UiForm:r(558).default})},573:function(e,t,r){"use strict";r.r(t);var o={methods:{submit:function(){var e=this;this.error=!1,this.loading=!0,this.$auth.loginWith("jwt",{data:this.post}).then((function(t){e.loading=!1,t.data.access_token&&e.$emit("success",t.data)})).catch((function(t){e.error=t.response.data.message,e.loading=!1}))}},data:function(){return{loading:!1,error:!1,post:{email:"",password:""}}}},n=r(22),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("form",{on:{submit:function(t){return t.preventDefault(),e.submit()}}},[e.error?r("div",{staticClass:"alert alert-danger",domProps:{innerHTML:e._s(e.error)}}):e._e(),e._v(" "),e._t("content",[r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.post.email,expression:"post.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Seu e-mail"},domProps:{value:e.post.email},on:{input:function(t){t.target.composing||e.$set(e.post,"email",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group"},[r("ui-password",{attrs:{placeholder:"Senha",meter:!1},model:{value:e.post.password,callback:function(t){e.$set(e.post,"password",t)},expression:"post.password"}})],1),e._v(" "),r("div",{staticClass:"form-group text-right"},[r("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[e.loading?r("span",[r("i",{staticClass:"fas fa-spinner fa-spin"})]):r("span",[e._v("Login")])])])])],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiPassword:r(548).default})},574:function(e,t,r){"use strict";r.r(t);var o={props:{value:{default:!1}},methods:{passwordToken:function(){var e=this;this.$axios.post("/api/auth/password-token",this.post).then((function(t){if(t.data.error)return e.error=t.data.error;e.tokenGenerated=!0}))},passwordReset:function(){var e=this;this.error={},this.$axios.post("/api/auth/password-reset",this.post).then((function(t){if(t.data.error)return e.error=t.data.error;e.post={email:"",password:"",password_confirmation:"",token:""},e.$emit("success",t.data)}))}},data:function(){return{tokenGenerated:!1,tokenInformed:!1,passwordChanged:!1,error:{},user:{email:"",token:"",password:"",password_confirmation:""}}}},n=r(22),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.tokenGenerated?e._e():r("ui-form",{attrs:{method:"post",action:"/api/auth/password-token"},on:{success:function(t){e.tokenGenerated=!0}},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.error,n=t.loading;return[r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Informe seu e-mail"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),e._v(" "),r("div",{staticClass:"input-group-append"},[r("div",{staticClass:"input-group-btn"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[r("span",n?{domProps:{innerHTML:e._s(n)}}:[e._v("Enviar")])])])]),e._v(" "),o.token?r("small",{staticClass:"text-danger",domProps:{innerHTML:e._s(o.email)}}):e._e()])]}}],null,!1,420827506),model:{value:e.user,callback:function(t){e.user=t},expression:"user"}}),e._v(" "),e.tokenGenerated&&!e.passwordChanged?r("ui-form",{attrs:{method:"post",action:"/api/auth/password-reset"},on:{success:function(t){e.passwordChanged=!0}},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.error;return[r("div",{staticClass:"form-group"},[r("label",[e._v("Informe o token recebido por e-mail")]),e._v(" "),r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.token,expression:"user.token"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Informe o token recebido"},domProps:{value:e.user.token},on:{input:function(t){t.target.composing||e.$set(e.user,"token",t.target.value)}}}),e._v(" "),r("div",{staticClass:"input-group-append"},[r("div",{staticClass:"input-group-btn"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){e.tokenInformed=!!e.user.token}}},[e._v("Ok")])])])]),e._v(" "),o.token?r("small",{staticClass:"text-danger",domProps:{innerHTML:e._s(o.token)}}):e._e()]),e._v(" "),e.tokenInformed&&e.user.token?r("div",[r("div",{staticClass:"form-group"},[r("label",[e._v("Informe sua nova senha")]),e._v(" "),r("ui-password",{model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),e._v(" "),o.password?r("small",{staticClass:"text-danger",domProps:{innerHTML:e._s(o.password)}}):e._e()],1),e._v(" "),r("div",{staticClass:"form-group"},[r("label",[e._v("Repita a senha")]),e._v(" "),r("ui-password",{attrs:{meter:!1},model:{value:e.user.password_confirmation,callback:function(t){e.$set(e.user,"password_confirmation",t)},expression:"user.password_confirmation"}}),e._v(" "),o.password_confirmation?r("small",{staticClass:"text-danger",domProps:{innerHTML:e._s(o.password_confirmation)}}):e._e()],1),e._v(" "),r("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[e._v("\r\n                    Concluir\r\n                ")])]):e._e()]}}],null,!1,3340356037),model:{value:e.user,callback:function(t){e.user=t},expression:"user"}}):e._e(),e._v(" "),e.passwordChanged?r("div",{staticClass:"text-center"},[e._v("\r\n        Senha alterada. Por favor, faça login\r\n    ")]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiForm:r(558).default,UiPassword:r(548).default})},773:function(e,t,r){"use strict";r.r(t);var o={layout:"coreui/admin",data:function(){return{}}},n=r(22),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-12 bg-primary mb-4 text-white"},[e.$store.$auth.user?r("div",{staticClass:"d-flex p-3"},[r("div",{staticClass:"flex-grow-1"},[e._v(e._s(e.$store.$auth.user.name)+" - "+e._s(e.$store.$auth.user.email))]),e._v(" "),r("div",[r("a",{staticClass:"text-white",attrs:{href:"javascript:;"},on:{click:function(t){return e.$auth.logout()}}},[e._v("Sair")])])]):r("div",{staticClass:"p-3"},[e._v("Deslogado")])]),e._v(" "),r("div",{staticClass:"col-6 col-md-4"},[r("ui-auth-login")],1),e._v(" "),r("div",{staticClass:"col-6 col-md-4 px-1"},[r("ui-auth-register")],1),e._v(" "),r("div",{staticClass:"col-12 col-md-4"},[r("ui-auth-password")],1)])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiAuthLogin:r(573).default,UiAuthRegister:r(570).default,UiAuthPassword:r(574).default})}}]);