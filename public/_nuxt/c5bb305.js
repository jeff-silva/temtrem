(window.webpackJsonp=window.webpackJsonp||[]).push([[66,12],{679:function(t,e,r){"use strict";r.r(e);var o={props:{value:{default:!1}},methods:{passwordToken:function(){var t=this;this.$axios.post("/api/auth/password-token",this.post).then((function(e){if(e.data.error)return t.error=e.data.error;t.tokenGenerated=!0}))},passwordReset:function(){var t=this;this.error={},this.$axios.post("/api/auth/password-reset",this.post).then((function(e){if(e.data.error)return t.error=e.data.error;t.post={email:"",password:"",password_confirmation:"",token:""},t.$emit("success",e.data)}))}},data:function(){return{tokenGenerated:!1,tokenInformed:!1,passwordChanged:!1,error:{},user:{email:"",token:"",password:"",password_confirmation:""}}}},n=r(5),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.tokenGenerated?t._e():r("ui-form",{attrs:{method:"post",action:"/api/auth/password-token"},on:{success:function(e){t.tokenGenerated=!0}},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.error,n=e.loading;return[r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Informe seu e-mail"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),t._v(" "),r("div",{staticClass:"input-group-append"},[r("div",{staticClass:"input-group-btn"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[r("span",n?{domProps:{innerHTML:t._s(n)}}:[t._v("Enviar")])])])]),t._v(" "),o.token?r("small",{staticClass:"text-danger",domProps:{innerHTML:t._s(o.email)}}):t._e()])]}}],null,!1,420827506),model:{value:t.user,callback:function(e){t.user=e},expression:"user"}}),t._v(" "),t.tokenGenerated&&!t.passwordChanged?r("ui-form",{attrs:{method:"post",action:"/api/auth/password-reset"},on:{success:function(e){t.passwordChanged=!0}},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.error;return[r("div",{staticClass:"form-group"},[r("label",[t._v("Informe o token recebido por e-mail")]),t._v(" "),r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.token,expression:"user.token"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Informe o token recebido"},domProps:{value:t.user.token},on:{input:function(e){e.target.composing||t.$set(t.user,"token",e.target.value)}}}),t._v(" "),r("div",{staticClass:"input-group-append"},[r("div",{staticClass:"input-group-btn"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.tokenInformed=!!t.user.token}}},[t._v("Ok")])])])]),t._v(" "),o.token?r("small",{staticClass:"text-danger",domProps:{innerHTML:t._s(o.token)}}):t._e()]),t._v(" "),t.tokenInformed&&t.user.token?r("div",[r("div",{staticClass:"form-group"},[r("label",[t._v("Informe sua nova senha")]),t._v(" "),r("ui-password",{model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),t._v(" "),o.password?r("small",{staticClass:"text-danger",domProps:{innerHTML:t._s(o.password)}}):t._e()],1),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("Repita a senha")]),t._v(" "),r("ui-password",{attrs:{meter:!1},model:{value:t.user.password_confirmation,callback:function(e){t.$set(t.user,"password_confirmation",e)},expression:"user.password_confirmation"}}),t._v(" "),o.password_confirmation?r("small",{staticClass:"text-danger",domProps:{innerHTML:t._s(o.password_confirmation)}}):t._e()],1),t._v(" "),r("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[t._v("\r\n                    Concluir\r\n                ")])]):t._e()]}}],null,!1,3340356037),model:{value:t.user,callback:function(e){t.user=e},expression:"user"}}):t._e(),t._v(" "),t.passwordChanged?r("div",{staticClass:"text-center"},[t._v("\r\n        Senha alterada. Por favor, faça login\r\n    ")]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiForm:r(406).default,UiPassword:r(186).default})},754:function(t,e,r){"use strict";r.r(e);var o={layout:"auth",methods:{onPassword:function(){this.$swalSuccess("Sucesso","Senha alterada. Por favor, faça login."),this.$router.push({path:"/auth"})}}},n=r(5),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"text-center py-2"},[t._v("Recuperar senha")]),t._v(" "),r("ui-auth-password",{on:{success:function(e){return t.onPassword()}}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiAuthPassword:r(679).default})}}]);