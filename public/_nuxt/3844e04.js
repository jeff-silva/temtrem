(window.webpackJsonp=window.webpackJsonp||[]).push([[14,26,40,41],{587:function(e,r,t){"use strict";t.r(r);var o={props:{value:{default:!1}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},computed:{meter:function(){var e=this.props.value,r=0,t="danger";if(e){for(var o=new Object,i=0;i<e.length;i++)o[e[i]]=(o[e[i]]||0)+1,r+=5/o[e[i]];var n={digits:/\d/.test(e),lower:/[a-z]/.test(e),upper:/[A-Z]/.test(e),nonWords:/\W/.test(e)},l=0;for(var c in n)l+=1==n[c]?1:0;r+=10*(l-1),(r=parseInt(r))>=70?t="success":r>=40&&(t="primary")}return{score:r,class:t}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)}},data:function(){return{props:Object.assign({},this.$props)}}},n=t(15),component=Object(n.a)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("div",{staticClass:"progress",staticStyle:{height:"5px"}},[t("div",{staticClass:"progress-bar progress-bar-striped",class:"bg-"+e.meter.class,style:"width:"+e.meter.score+"%;"})])])}),[],!1,null,null,null);r.default=component.exports},588:function(e,r,t){"use strict";t.r(r);t(83);var o={props:{value:{default:function(){return{}}},method:{default:"post"},action:{default:""}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)},submit:function(){var e=this;if(this.action&&this.method&&this.$axios[this.method]){var r=this.$axios[this.method],t="get"==this.method?{params:this.props.value}:this.props.value;this.loading='<i class="fa fa-fw fa-spin fa-spinner"></i>',this.responseSuccess=!1,this.responseErrorMessage=!1,this.responseErrorFields={},r(this.action,t).then((function(r){e.loading="",e.responseSuccess=r.data,e.$emit("success",e.responseSuccess)})).catch((function(r){for(var i in e.loading="",e.responseErrorMessage=r.response.data.message||"Erro",e.responseErrorFields=r.response.data.fields||{},e.responseErrorFields)Array.isArray(e.responseErrorFields[i])&&(e.responseErrorFields[i]=e.responseErrorFields[i].join("<br>"));e.$emit("error",e.responseErrorFields)}))}this.$emit("submit",{action:this.props.action,method:this.props.method,value:this.props.value})}},data:function(){return{loading:"",responseSuccess:!1,responseErrorMessage:!1,responseErrorFields:{},props:Object.assign({},this.$props)}}},n=t(15),component=Object(n.a)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("form",{staticClass:"ui-form",attrs:{method:e.method,action:e.action},on:{submit:function(r){return r.preventDefault(),e.submit()}}},[e.responseSuccess&&(e.$slots.success||e.$scopedSlots.success)?t("div",{staticClass:"alert alert-success"},[e._t("success",null,{response:e.responseSuccess})],2):e._e(),e._v(" "),e.responseErrorMessage?e._t("error",(function(){return[e.responseErrorMessage?t("div",{staticClass:"alert alert-danger",domProps:{innerHTML:e._s(e.responseErrorMessage)}}):e._e()]}),{errorMessage:e.responseErrorMessage,fields:e.responseErrorFields}):e._e(),e._v(" "),e._t("default",null,{loading:e.loading,error:e.responseErrorFields,errorMessage:e.responseErrorMessage,success:e.responseSuccess})],2)}),[],!1,null,null,null);r.default=component.exports},589:function(e,r,t){"use strict";t.r(r);t(35),t(20),t(31),t(54),t(19),t(55);var o=t(16);function n(object,e){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(r){Object(o.a)(e,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(source,r))}))}return e}var c={name:"ui-password",props:{value:{default:""},placeholder:{default:""},toggleShow:{default:!0},meter:{default:!0},type:{default:"password"}},watch:{$props:{deep:!0,handler:function(e){this.props=l({},e)}}},data:function(){return{props:l({},this.$props)}}},d=t(15),component=Object(d.a)(c,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"form-control p-0 bg-white"},[t("div",{staticClass:"input-group"},["checkbox"===e.props.type?t("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:e.props.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(e.props.value)?e._i(e.props.value,null)>-1:e.props.value},on:{input:function(r){return e.$emit("input",e.props.value)},change:function(r){var t=e.props.value,o=r.target,n=!!o.checked;if(Array.isArray(t)){var l=e._i(t,null);o.checked?l<0&&e.$set(e.props,"value",t.concat([null])):l>-1&&e.$set(e.props,"value",t.slice(0,l).concat(t.slice(l+1)))}else e.$set(e.props,"value",n)}}}):"radio"===e.props.type?t("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:e.props.placeholder,type:"radio"},domProps:{checked:e._q(e.props.value,null)},on:{input:function(r){return e.$emit("input",e.props.value)},change:function(r){return e.$set(e.props,"value",null)}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:e.props.placeholder,type:e.props.type},domProps:{value:e.props.value},on:{input:[function(r){r.target.composing||e.$set(e.props,"value",r.target.value)},function(r){return e.$emit("input",e.props.value)}]}}),e._v(" "),e.props.toggleShow?t("div",{staticClass:"input-group-append"},[t("div",{staticClass:"input-group-btn"},[t("div",{staticClass:"btn",on:{click:function(r){e.props.type="text"==e.props.type?"password":"text"}}},[t("i",{staticClass:"fas fa-eye",class:{"fa-eye-slash":"password"==e.props.type}})])])]):e._e()]),e._v(" "),e.props.meter?t("ui-password-meter",{staticStyle:{"margin-top":"-4px"},model:{value:e.props.value,callback:function(r){e.$set(e.props,"value",r)},expression:"props.value"}}):e._e()],1)}),[],!1,null,null,null);r.default=component.exports;installComponents(component,{UiPasswordMeter:t(587).default})},607:function(e,r,t){"use strict";t.r(r);var o={name:"ui-auth-register",props:{value:{default:function(){return{}}}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},data:function(){return{props:Object.assign({},this.$props)}}},n=t(15),component=Object(n.a)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("ui-form",{attrs:{method:"post",action:"/api/user/save/"},scopedSlots:e._u([{key:"success",fn:function(r){var o=r.response;return[e._v("Olá "+e._s(o.name)+". Seu cadastro foi concluído, agora é só "),t("nuxt-link",{attrs:{to:"/auth"}},[e._v("fazer login")]),e._v(".")]}},{key:"default",fn:function(r){var o=r.loading,n=r.error;return[e._t("content",(function(){return[t("div",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value.name,expression:"props.value.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nome"},domProps:{value:e.props.value.name},on:{input:function(r){r.target.composing||e.$set(e.props.value,"name",r.target.value)}}}),e._v(" "),n.name?t("small",{staticClass:"text-danger",domProps:{innerHTML:e._s(n.name)}}):e._e()]),e._v(" "),t("div",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value.email,expression:"props.value.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"E-mail"},domProps:{value:e.props.value.email},on:{input:function(r){r.target.composing||e.$set(e.props.value,"email",r.target.value)}}}),e._v(" "),n.email?t("small",{staticClass:"text-danger",domProps:{innerHTML:e._s(n.email)}}):e._e()]),e._v(" "),t("div",{staticClass:"form-group"},[t("ui-password",{attrs:{placeholder:"Senha"},model:{value:e.props.value.password,callback:function(r){e.$set(e.props.value,"password",r)},expression:"props.value.password"}}),e._v(" "),n.password?t("small",{staticClass:"text-danger",domProps:{innerHTML:e._s(n.password)}}):e._e()],1),e._v(" "),t("div",{staticClass:"form-group"},[t("ui-password",{attrs:{meter:!1,placeholder:"Repita senha"},model:{value:e.props.value.password_confirmation,callback:function(r){e.$set(e.props.value,"password_confirmation",r)},expression:"props.value.password_confirmation"}}),e._v(" "),n.password_confirmation?t("small",{staticClass:"text-danger",domProps:{innerHTML:e._s(n.password_confirmation)}}):e._e()],1),e._v(" "),t("div",{staticClass:"form-group text-right"},[t("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[e._v("\r\n                        Cadastrar "),t("span",{domProps:{innerHTML:e._s(o)}})])])]}))]}}],null,!0),model:{value:e.props.value,callback:function(r){e.$set(e.props,"value",r)},expression:"props.value"}})],1)}),[],!1,null,null,null);r.default=component.exports;installComponents(component,{UiPassword:t(589).default,UiForm:t(588).default})}}]);