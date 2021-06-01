(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{542:function(e,t,r){"use strict";r.r(t);var o={props:{value:{default:function(){return{}}},method:{default:"post"},action:{default:""}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)},submit:function(){var e=this;if(this.action&&this.method&&this.$axios[this.method]){var t=this.$axios[this.method],r="get"==this.method?{params:this.props.value}:this.props.value;this.loading='<i class="fa fa-fw fa-spin fa-spinner"></i>',this.responseSuccess=!1,this.responseErrorMessage=!1,this.responseErrorFields={},t(this.action,r).then((function(t){e.loading="",e.responseSuccess=t.data,e.$emit("success",e.responseSuccess)})).catch((function(t){for(var i in e.loading="",e.responseErrorMessage=t.response.data.message||"Erro",e.responseErrorFields=t.response.data.fields||{},e.responseErrorFields)Array.isArray(e.responseErrorFields[i])&&(e.responseErrorFields[i]=e.responseErrorFields[i].join("<br>"));e.$emit("error",e.responseErrorFields)}))}this.$emit("submit",{action:this.props.action,method:this.props.method,value:this.props.value})}},data:function(){return{loading:"",responseSuccess:!1,responseErrorMessage:!1,responseErrorFields:{},props:Object.assign({},this.$props)}}},n=r(13),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"ui-form",attrs:{method:e.method,action:e.action},on:{submit:function(t){return t.preventDefault(),e.submit()}}},[e.responseSuccess&&(e.$slots.success||e.$scopedSlots.success)?r("div",{staticClass:"alert alert-success"},[e._t("success",null,{response:e.responseSuccess})],2):e._e(),e._v(" "),e.responseErrorMessage?e._t("error",[e.responseErrorMessage?r("div",{staticClass:"alert alert-danger",domProps:{innerHTML:e._s(e.responseErrorMessage)}}):e._e()],{errorMessage:e.responseErrorMessage,fields:e.responseErrorFields}):e._e(),e._v(" "),e._t("default",null,{loading:e.loading,error:e.responseErrorFields,errorMessage:e.responseErrorMessage,success:e.responseSuccess})],2)}),[],!1,null,null,null);t.default=component.exports},545:function(e,t,r){"use strict";r.r(t);r(60),r(22),r(14),r(4),r(38);var o=r(15);function n(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var c={name:"ui-password",props:{value:{default:""},placeholder:{default:""},toggleShow:{default:!0},meter:{default:!0},type:{default:"password"}},watch:{$props:{deep:!0,handler:function(e){this.props=l({},e)}}},data:function(){return{props:l({},this.$props)}}},d=r(13),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-control p-0 bg-white"},[r("div",{staticClass:"input-group"},["checkbox"===e.props.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:e.props.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(e.props.value)?e._i(e.props.value,null)>-1:e.props.value},on:{input:function(t){return e.$emit("input",e.props.value)},change:function(t){var r=e.props.value,o=t.target,n=!!o.checked;if(Array.isArray(r)){var l=e._i(r,null);o.checked?l<0&&e.$set(e.props,"value",r.concat([null])):l>-1&&e.$set(e.props,"value",r.slice(0,l).concat(r.slice(l+1)))}else e.$set(e.props,"value",n)}}}):"radio"===e.props.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:e.props.placeholder,type:"radio"},domProps:{checked:e._q(e.props.value,null)},on:{input:function(t){return e.$emit("input",e.props.value)},change:function(t){return e.$set(e.props,"value",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:e.props.placeholder,type:e.props.type},domProps:{value:e.props.value},on:{input:[function(t){t.target.composing||e.$set(e.props,"value",t.target.value)},function(t){return e.$emit("input",e.props.value)}]}}),e._v(" "),e.props.toggleShow?r("div",{staticClass:"input-group-append"},[r("div",{staticClass:"input-group-btn"},[r("div",{staticClass:"btn",on:{click:function(t){e.props.type="text"==e.props.type?"password":"text"}}},[r("i",{staticClass:"fas fa-eye",class:{"fa-eye-slash":"password"==e.props.type}})])])]):e._e()]),e._v(" "),e.props.meter?r("ui-password-meter",{staticStyle:{"margin-top":"-4px"},model:{value:e.props.value,callback:function(t){e.$set(e.props,"value",t)},expression:"props.value"}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiPasswordMeter:r(547).default})},547:function(e,t,r){"use strict";r.r(t);var o={props:{value:{default:!1}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},computed:{meter:function(){var e=this.props.value,t=0,r="danger";if(e){for(var o=new Object,i=0;i<e.length;i++)o[e[i]]=(o[e[i]]||0)+1,t+=5/o[e[i]];var n={digits:/\d/.test(e),lower:/[a-z]/.test(e),upper:/[A-Z]/.test(e),nonWords:/\W/.test(e)},l=0;for(var c in n)l+=1==n[c]?1:0;t+=10*(l-1),(t=parseInt(t))>=70?r="success":t>=40&&(r="primary")}return{score:t,class:r}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)}},data:function(){return{props:Object.assign({},this.$props)}}},n=r(13),component=Object(n.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"progress",staticStyle:{height:"5px"}},[t("div",{staticClass:"progress-bar progress-bar-striped",class:"bg-"+this.meter.class,style:"width:"+this.meter.score+"%;"})])])}),[],!1,null,null,null);t.default=component.exports},548:function(e,t,r){"use strict";r.r(t);var o={props:{horizontal:{default:!1},label:{default:""},help:{default:""},error:{default:""}}},n=r(13),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group row no-gutters mb-3"},[e.horizontal?[r("label",[e._v(e._s(e.label))]),e._v(" "),e._t("default"),e._v(" "),e.help?r("small",{staticClass:"d-block text-muted",domProps:{innerHTML:e._s(e.help)}}):e._e(),e._v(" "),e.error?r("small",{staticClass:"d-block text-danger",domProps:{innerHTML:e._s(e.error)}}):e._e()]:[r("div",{staticClass:"col-12 col-md-4 col-lg-3 p-2 px-0 px-md-2"},[r("div",[e._v(e._s(e.label))]),e._v(" "),e.help?r("small",{staticClass:"d-block text-muted",domProps:{innerHTML:e._s(e.help)}}):e._e()]),e._v(" "),r("div",{staticClass:"col-12 col-md-8 col-lg-9"},[e._t("default"),e._v(" "),e.error?r("small",{staticClass:"d-block text-danger mt-1 mx-1"},[e._v(e._s(e.error))]):e._e()],2)]],2)}),[],!1,null,null,null);t.default=component.exports},763:function(e,t,r){"use strict";r.r(t);var o={layout:"admin",methods:{userFind:function(){var e=this;this.loading=!0;var t="me"==this.$route.params.id?this.$auth.user.id:this.$route.params.id;this.$axios.get("/api/user/find/".concat(t)).then((function(t){e.loading=!1,e.user=t.data}))},success:function(e){this.$swal("","Dados salvos","success"),e.id==this.$auth.user.id&&location.reload()}},data:function(){return{loading:!1,error:{},user:{}}},mounted:function(){this.userFind()}},n=r(13),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.loading?r("div",[e._v("Carregando...")]):e._e(),e._v(" "),e.user.id?r("form",{on:{submit:function(t){return t.preventDefault(),e.userStore()}}},[r("ui-form",{attrs:{method:"post",action:"/api/user/save/"},on:{success:function(t){return e.success(t)}},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.loading;t.success,t.error;return[r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-12 col-md-4 mb-4 pr-3"},[r("user-card",{scopedSlots:e._u([{key:"actions",fn:function(){return[r("a",{staticClass:"btn btn-light",attrs:{href:"javascript:;"},on:{click:function(t){return e.$refs.userPhoto.toggle()}}},[e._v("Foto")]),e._v(" "),r("a",{staticClass:"btn btn-light",attrs:{href:"javascript:;"},on:{click:function(t){return e.$refs.userBackground.toggle()}}},[e._v("Background")])]},proxy:!0}],null,!0),model:{value:e.user,callback:function(t){e.user=t},expression:"user"}})],1),e._v(" "),r("div",{staticClass:"col-12 col-md-8"},[r("ui-field",{attrs:{label:"Nome"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}})]),e._v(" "),r("ui-field",{attrs:{label:"E-mail"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),e._v(" "),r("ui-field",{attrs:{label:"Descrição"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.description,expression:"user.description"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.user.description},on:{input:function(t){t.target.composing||e.$set(e.user,"description",t.target.value)}}})]),e._v(" "),r("ui-field",{attrs:{label:"Senha"}},[r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-12 col-md-6"},[r("ui-password",{attrs:{placeholder:"Senha"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),e._v(" "),r("div",{staticClass:"col-12 col-md-6 pl-md-2"},[r("ui-password",{attrs:{placeholder:"Repita a senha",meter:!1},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1)])]),e._v(" "),r("ui-field",{attrs:{label:"Whatsapp"}},[r("ui-phone",{model:{value:e.user.whatsapp,callback:function(t){e.$set(e.user,"whatsapp",t)},expression:"user.whatsapp"}})],1)],1)]),e._v(" "),r("ui-actions",[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[r("div",o?[r("span",{domProps:{innerHTML:e._s(o)}}),e._v(" Salvando")]:[r("i",{staticClass:"fas fa-save"}),e._v(" Salvar")])])])]}}],null,!1,1238236523),model:{value:e.user,callback:function(t){e.user=t},expression:"user"}})],1):e._e()])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiField:r(548).default,UiPassword:r(545).default,UiPhone:r(589).default,UiActions:r(361).default,UiForm:r(542).default})}}]);