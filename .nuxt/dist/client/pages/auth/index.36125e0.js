(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{226:function(t,e,r){"use strict";r.r(e);r(17);var n=r(3),o={layout:"auth",data:function(){return{user:{email:"",password:""}}},methods:{loginThen:function(t){location.reload()},loginCatch:function(t){console.log(t)},login:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t.$store.dispatch("auth/login",t.user).then((function(e){t.$router.push("/dashboard")}))}catch(t){}case 1:case"end":return e.stop()}}),e)})))()}}},l=r(8),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("form",{staticStyle:{"max-width":"400px",margin:"0 auto"},attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.login()}}},[t._m(0),t._v(" "),r("div",{staticClass:"mb-3"}),t._v(" "),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control input-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control input-lg",attrs:{type:"password",placeholder:"Senha"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),t._v(" "),t._m(1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",[this._v("Cadastre-se "),e("small",[this._v("e comece a vender imediatamente.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[this._v("\r\n                Login\r\n            ")])])}],!1,null,null,null);e.default=component.exports}}]);