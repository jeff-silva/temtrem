(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{680:function(e,t,r){"use strict";r.r(t);var o={props:{value:{default:!1}},methods:{passwordToken:function(){var e=this;this.$axios.post("/api/auth/password-token",this.post).then((function(t){if(t.data.error)return e.error=t.data.error;e.tokenGenerated=!0}))},passwordReset:function(){var e=this;this.error={},this.$axios.post("/api/auth/password-reset",this.post).then((function(t){if(t.data.error)return e.error=t.data.error;e.post={email:"",password:"",password_confirmation:"",token:""},e.$emit("success",t.data)}))}},data:function(){return{tokenGenerated:!1,tokenInformed:!1,passwordChanged:!1,error:{},user:{email:"",token:"",password:"",password_confirmation:""}}}},n=r(5),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.tokenGenerated?e._e():r("ui-form",{attrs:{method:"post",action:"/api/auth/password-token"},on:{success:function(t){e.tokenGenerated=!0}},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.error,n=t.loading;return[r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Informe seu e-mail"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),e._v(" "),r("div",{staticClass:"input-group-append"},[r("div",{staticClass:"input-group-btn"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[r("span",n?{domProps:{innerHTML:e._s(n)}}:[e._v("Enviar")])])])]),e._v(" "),o.token?r("small",{staticClass:"text-danger",domProps:{innerHTML:e._s(o.email)}}):e._e()])]}}],null,!1,420827506),model:{value:e.user,callback:function(t){e.user=t},expression:"user"}}),e._v(" "),e.tokenGenerated&&!e.passwordChanged?r("ui-form",{attrs:{method:"post",action:"/api/auth/password-reset"},on:{success:function(t){e.passwordChanged=!0}},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.error;return[r("div",{staticClass:"form-group"},[r("label",[e._v("Informe o token recebido por e-mail")]),e._v(" "),r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.token,expression:"user.token"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Informe o token recebido"},domProps:{value:e.user.token},on:{input:function(t){t.target.composing||e.$set(e.user,"token",t.target.value)}}}),e._v(" "),r("div",{staticClass:"input-group-append"},[r("div",{staticClass:"input-group-btn"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){e.tokenInformed=!!e.user.token}}},[e._v("Ok")])])])]),e._v(" "),o.token?r("small",{staticClass:"text-danger",domProps:{innerHTML:e._s(o.token)}}):e._e()]),e._v(" "),e.tokenInformed&&e.user.token?r("div",[r("div",{staticClass:"form-group"},[r("label",[e._v("Informe sua nova senha")]),e._v(" "),r("ui-password",{model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),e._v(" "),o.password?r("small",{staticClass:"text-danger",domProps:{innerHTML:e._s(o.password)}}):e._e()],1),e._v(" "),r("div",{staticClass:"form-group"},[r("label",[e._v("Repita a senha")]),e._v(" "),r("ui-password",{attrs:{meter:!1},model:{value:e.user.password_confirmation,callback:function(t){e.$set(e.user,"password_confirmation",t)},expression:"user.password_confirmation"}}),e._v(" "),o.password_confirmation?r("small",{staticClass:"text-danger",domProps:{innerHTML:e._s(o.password_confirmation)}}):e._e()],1),e._v(" "),r("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[e._v("\r\n                    Concluir\r\n                ")])]):e._e()]}}],null,!1,3340356037),model:{value:e.user,callback:function(t){e.user=t},expression:"user"}}):e._e(),e._v(" "),e.passwordChanged?r("div",{staticClass:"text-center"},[e._v("\r\n        Senha alterada. Por favor, faça login\r\n    ")]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiForm:r(406).default,UiPassword:r(186).default})}}]);