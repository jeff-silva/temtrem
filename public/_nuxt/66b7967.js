(window.webpackJsonp=window.webpackJsonp||[]).push([[93,33,45,58,59],{580:function(e,t,r){"use strict";r.r(t);r(83);var o={props:{value:{default:function(){return{}}},method:{default:"post"},action:{default:""}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)},submit:function(){var e=this;if(this.action&&this.method&&this.$axios[this.method]){var t=this.$axios[this.method],r="get"==this.method?{params:this.props.value}:this.props.value;this.loading='<i class="fa fa-fw fa-spin fa-spinner"></i>',this.responseSuccess=!1,this.responseErrorMessage=!1,this.responseErrorFields={},t(this.action,r).then((function(t){e.loading="",e.responseSuccess=t.data,e.$emit("success",e.responseSuccess)})).catch((function(t){for(var i in e.loading="",e.responseErrorMessage=t.response.data.message||"Erro",e.responseErrorFields=t.response.data.fields||{},e.responseErrorFields)Array.isArray(e.responseErrorFields[i])&&(e.responseErrorFields[i]=e.responseErrorFields[i].join("<br>"));e.$emit("error",e.responseErrorFields)}))}this.$emit("submit",{action:this.props.action,method:this.props.method,value:this.props.value})}},data:function(){return{loading:"",responseSuccess:!1,responseErrorMessage:!1,responseErrorFields:{},props:Object.assign({},this.$props)}}},n=r(16),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"ui-form",attrs:{method:e.method,action:e.action},on:{submit:function(t){return t.preventDefault(),e.submit()}}},[e.responseSuccess&&(e.$slots.success||e.$scopedSlots.success)?r("div",{staticClass:"alert alert-success"},[e._t("success",null,{response:e.responseSuccess})],2):e._e(),e._v(" "),e.responseErrorMessage?e._t("error",[e.responseErrorMessage?r("div",{staticClass:"alert alert-danger",domProps:{innerHTML:e._s(e.responseErrorMessage)}}):e._e()],{errorMessage:e.responseErrorMessage,fields:e.responseErrorFields}):e._e(),e._v(" "),e._t("default",null,{loading:e.loading,error:e.responseErrorFields,errorMessage:e.responseErrorMessage,success:e.responseSuccess})],2)}),[],!1,null,null,null);t.default=component.exports},583:function(e,t,r){"use strict";r.r(t);var o={props:{value:{default:!1}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},computed:{meter:function(){var e=this.props.value,t=0,r="danger";if(e){for(var o=new Object,i=0;i<e.length;i++)o[e[i]]=(o[e[i]]||0)+1,t+=5/o[e[i]];var n={digits:/\d/.test(e),lower:/[a-z]/.test(e),upper:/[A-Z]/.test(e),nonWords:/\W/.test(e)},l=0;for(var c in n)l+=1==n[c]?1:0;t+=10*(l-1),(t=parseInt(t))>=70?r="success":t>=40&&(r="primary")}return{score:t,class:r}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)}},data:function(){return{props:Object.assign({},this.$props)}}},n=r(16),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"progress",staticStyle:{height:"5px"}},[r("div",{staticClass:"progress-bar progress-bar-striped",class:"bg-"+e.meter.class,style:"width:"+e.meter.score+"%;"})])])}),[],!1,null,null,null);t.default=component.exports},585:function(e,t,r){"use strict";r.r(t);r(35),r(20),r(31),r(54),r(19),r(55);var o=r(15);function n(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var c={name:"ui-password",props:{value:{default:""},placeholder:{default:""},toggleShow:{default:!0},meter:{default:!0},type:{default:"password"}},watch:{$props:{deep:!0,handler:function(e){this.props=l({},e)}}},data:function(){return{props:l({},this.$props)}}},d=r(16),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-control p-0 bg-white"},[r("div",{staticClass:"input-group"},["checkbox"===e.props.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:e.props.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(e.props.value)?e._i(e.props.value,null)>-1:e.props.value},on:{input:function(t){return e.$emit("input",e.props.value)},change:function(t){var r=e.props.value,o=t.target,n=!!o.checked;if(Array.isArray(r)){var l=e._i(r,null);o.checked?l<0&&e.$set(e.props,"value",r.concat([null])):l>-1&&e.$set(e.props,"value",r.slice(0,l).concat(r.slice(l+1)))}else e.$set(e.props,"value",n)}}}):"radio"===e.props.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:e.props.placeholder,type:"radio"},domProps:{checked:e._q(e.props.value,null)},on:{input:function(t){return e.$emit("input",e.props.value)},change:function(t){return e.$set(e.props,"value",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:e.props.placeholder,type:e.props.type},domProps:{value:e.props.value},on:{input:[function(t){t.target.composing||e.$set(e.props,"value",t.target.value)},function(t){return e.$emit("input",e.props.value)}]}}),e._v(" "),e.props.toggleShow?r("div",{staticClass:"input-group-append"},[r("div",{staticClass:"input-group-btn"},[r("div",{staticClass:"btn",on:{click:function(t){e.props.type="text"==e.props.type?"password":"text"}}},[r("i",{staticClass:"fas fa-eye",class:{"fa-eye-slash":"password"==e.props.type}})])])]):e._e()]),e._v(" "),e.props.meter?r("ui-password-meter",{staticStyle:{"margin-top":"-4px"},model:{value:e.props.value,callback:function(t){e.$set(e.props,"value",t)},expression:"props.value"}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiPasswordMeter:r(583).default})},598:function(e,t,r){"use strict";r.r(t);var o={name:"ui-auth-register",props:{value:{default:function(){return{}}}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},data:function(){return{props:Object.assign({},this.$props)}}},n=r(16),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ui-form",{attrs:{method:"post",action:"/api/user/save/"},scopedSlots:e._u([{key:"success",fn:function(t){var o=t.response;return[e._v("Olá "+e._s(o.name)+". Seu cadastro foi concluído, agora é só "),r("nuxt-link",{attrs:{to:"/auth"}},[e._v("fazer login")]),e._v(".")]}},{key:"default",fn:function(t){var o=t.loading,n=t.error;return[e._t("content",[r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value.name,expression:"props.value.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nome"},domProps:{value:e.props.value.name},on:{input:function(t){t.target.composing||e.$set(e.props.value,"name",t.target.value)}}}),e._v(" "),n.name?r("small",{staticClass:"text-danger",domProps:{innerHTML:e._s(n.name)}}):e._e()]),e._v(" "),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value.email,expression:"props.value.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"E-mail"},domProps:{value:e.props.value.email},on:{input:function(t){t.target.composing||e.$set(e.props.value,"email",t.target.value)}}}),e._v(" "),n.email?r("small",{staticClass:"text-danger",domProps:{innerHTML:e._s(n.email)}}):e._e()]),e._v(" "),r("div",{staticClass:"form-group"},[r("ui-password",{attrs:{placeholder:"Senha"},model:{value:e.props.value.password,callback:function(t){e.$set(e.props.value,"password",t)},expression:"props.value.password"}}),e._v(" "),n.password?r("small",{staticClass:"text-danger",domProps:{innerHTML:e._s(n.password)}}):e._e()],1),e._v(" "),r("div",{staticClass:"form-group"},[r("ui-password",{attrs:{meter:!1,placeholder:"Repita senha"},model:{value:e.props.value.password_confirmation,callback:function(t){e.$set(e.props.value,"password_confirmation",t)},expression:"props.value.password_confirmation"}}),e._v(" "),n.password_confirmation?r("small",{staticClass:"text-danger",domProps:{innerHTML:e._s(n.password_confirmation)}}):e._e()],1),e._v(" "),r("div",{staticClass:"form-group text-right"},[r("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[e._v("\r\n                        Cadastrar "),r("span",{domProps:{innerHTML:e._s(o)}})])])])]}}],null,!0),model:{value:e.props.value,callback:function(t){e.$set(e.props,"value",t)},expression:"props.value"}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiPassword:r(585).default,UiForm:r(580).default})},746:function(e,t,r){"use strict";r.r(t);var o={layout:"auth",methods:{onRegister:function(){this.$swalSuccess("Sucesso","Cadastro efetuado. Por favor, faça login."),this.$router.push({path:"/auth"})}}},n=r(16),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),e._v(" "),r("ui-auth-register",{on:{success:function(t){return e.onRegister()}}})],1)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",{staticClass:"text-center py-2"},[e._v("Faça seu cadastro "),r("br"),e._v("rápido e fácil")])}],!1,null,null,null);t.default=component.exports;installComponents(component,{UiAuthRegister:r(598).default})}}]);