(window.webpackJsonp=window.webpackJsonp||[]).push([[58,22,24,33,38,39],{585:function(e,t,r){"use strict";r.r(t);var o={props:{value:{default:!1}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},computed:{meter:function(){var e=this.props.value,t=0,r="danger";if(e){for(var o=new Object,i=0;i<e.length;i++)o[e[i]]=(o[e[i]]||0)+1,t+=5/o[e[i]];var l={digits:/\d/.test(e),lower:/[a-z]/.test(e),upper:/[A-Z]/.test(e),nonWords:/\W/.test(e)},n=0;for(var c in l)n+=1==l[c]?1:0;t+=10*(n-1),(t=parseInt(t))>=70?r="success":t>=40&&(r="primary")}return{score:t,class:r}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)}},data:function(){return{props:Object.assign({},this.$props)}}},l=r(15),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"progress",staticStyle:{height:"5px"}},[r("div",{staticClass:"progress-bar progress-bar-striped",class:"bg-"+e.meter.class,style:"width:"+e.meter.score+"%;"})])])}),[],!1,null,null,null);t.default=component.exports},586:function(e,t,r){"use strict";r.r(t);r(83);var o={props:{value:{default:function(){return{}}},method:{default:"post"},action:{default:""}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)},submit:function(){var e=this;if(this.action&&this.method&&this.$axios[this.method]){var t=this.$axios[this.method],r="get"==this.method?{params:this.props.value}:this.props.value;this.loading='<i class="fa fa-fw fa-spin fa-spinner"></i>',this.responseSuccess=!1,this.responseErrorMessage=!1,this.responseErrorFields={},t(this.action,r).then((function(t){e.loading="",e.responseSuccess=t.data,e.$emit("success",e.responseSuccess)})).catch((function(t){for(var i in e.loading="",e.responseErrorMessage=t.response.data.message||"Erro",e.responseErrorFields=t.response.data.fields||{},e.responseErrorFields)Array.isArray(e.responseErrorFields[i])&&(e.responseErrorFields[i]=e.responseErrorFields[i].join("<br>"));e.$emit("error",e.responseErrorFields)}))}this.$emit("submit",{action:this.props.action,method:this.props.method,value:this.props.value})}},data:function(){return{loading:"",responseSuccess:!1,responseErrorMessage:!1,responseErrorFields:{},props:Object.assign({},this.$props)}}},l=r(15),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"ui-form",attrs:{method:e.method,action:e.action},on:{submit:function(t){return t.preventDefault(),e.submit()}}},[e.responseSuccess&&(e.$slots.success||e.$scopedSlots.success)?r("div",{staticClass:"alert alert-success"},[e._t("success",null,{response:e.responseSuccess})],2):e._e(),e._v(" "),e.responseErrorMessage?e._t("error",(function(){return[e.responseErrorMessage?r("div",{staticClass:"alert alert-danger",domProps:{innerHTML:e._s(e.responseErrorMessage)}}):e._e()]}),{errorMessage:e.responseErrorMessage,fields:e.responseErrorFields}):e._e(),e._v(" "),e._t("default",null,{loading:e.loading,error:e.responseErrorFields,errorMessage:e.responseErrorMessage,success:e.responseSuccess})],2)}),[],!1,null,null,null);t.default=component.exports},587:function(e,t,r){"use strict";r.r(t);r(35),r(20),r(31),r(54),r(19),r(55);var o=r(16);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var c={name:"ui-password",props:{value:{default:""},placeholder:{default:""},toggleShow:{default:!0},meter:{default:!0},type:{default:"password"}},watch:{$props:{deep:!0,handler:function(e){this.props=n({},e)}}},data:function(){return{props:n({},this.$props)}}},m=r(15),component=Object(m.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-control p-0 bg-white"},[r("div",{staticClass:"input-group"},["checkbox"===e.props.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:e.props.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(e.props.value)?e._i(e.props.value,null)>-1:e.props.value},on:{input:function(t){return e.$emit("input",e.props.value)},change:function(t){var r=e.props.value,o=t.target,l=!!o.checked;if(Array.isArray(r)){var n=e._i(r,null);o.checked?n<0&&e.$set(e.props,"value",r.concat([null])):n>-1&&e.$set(e.props,"value",r.slice(0,n).concat(r.slice(n+1)))}else e.$set(e.props,"value",l)}}}):"radio"===e.props.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:e.props.placeholder,type:"radio"},domProps:{checked:e._q(e.props.value,null)},on:{input:function(t){return e.$emit("input",e.props.value)},change:function(t){return e.$set(e.props,"value",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:e.props.placeholder,type:e.props.type},domProps:{value:e.props.value},on:{input:[function(t){t.target.composing||e.$set(e.props,"value",t.target.value)},function(t){return e.$emit("input",e.props.value)}]}}),e._v(" "),e.props.toggleShow?r("div",{staticClass:"input-group-append"},[r("div",{staticClass:"input-group-btn"},[r("div",{staticClass:"btn",on:{click:function(t){e.props.type="text"==e.props.type?"password":"text"}}},[r("i",{staticClass:"fas fa-eye",class:{"fa-eye-slash":"password"==e.props.type}})])])]):e._e()]),e._v(" "),e.props.meter?r("ui-password-meter",{staticStyle:{"margin-top":"-4px"},model:{value:e.props.value,callback:function(t){e.$set(e.props,"value",t)},expression:"props.value"}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiPasswordMeter:r(585).default})},589:function(e,t,r){var content=r(596);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(44).default)("4378e08c",content,!0,{sourceMap:!1})},594:function(e,t,r){"use strict";r.r(t);var o={props:{horizontal:{default:!1},label:{default:""},help:{default:""},error:{default:""}}},l=r(15),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group row no-gutters mb-3"},[e.horizontal?[r("label",[e._v(e._s(e.label))]),e._v(" "),e._t("default"),e._v(" "),e.help?r("small",{staticClass:"d-block text-muted",domProps:{innerHTML:e._s(e.help)}}):e._e(),e._v(" "),e.error?r("small",{staticClass:"d-block text-danger",domProps:{innerHTML:e._s(e.error)}}):e._e()]:[r("div",{staticClass:"col-12 col-md-4 col-lg-3 p-2 px-0 px-md-2"},[r("div",[e._v(e._s(e.label))]),e._v(" "),e.help?r("small",{staticClass:"d-block text-muted",domProps:{innerHTML:e._s(e.help)}}):e._e()]),e._v(" "),r("div",{staticClass:"col-12 col-md-8 col-lg-9"},[e._t("default"),e._v(" "),e.error?r("small",{staticClass:"d-block text-danger mt-1 mx-1"},[e._v(e._s(e.error))]):e._e()],2)]],2)}),[],!1,null,null,null);t.default=component.exports},595:function(e,t,r){"use strict";r(589)},596:function(e,t,r){var o=r(43)(!1);o.push([e.i,".ui-modal{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.2);z-index:9999!important;display:flex;align-items:center;justify-content:center;padding:0!important}.ui-modal .card{width:600px;max-width:90vw!important;max-height:90vh;margin:0!important;overflow:auto!important}",""]),e.exports=o},599:function(e,t,r){"use strict";r.r(t);var o={props:{value:{default:!1},tag:{default:"div"}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)},toggle:function(){this.props.value=!this.props.value,this.emit()}},data:function(){return{props:Object.assign({},this.$props)}}},l=(r(595),r(15)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("transition",{attrs:{name:"custom-unique-name","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"}},[e.props.value?r("div",{staticClass:"modal fade show",staticStyle:{display:"block",background:"#00000044","animation-duration":"200ms"},attrs:{tabindex:"-1","aria-labelledby":"exampleModalLiveLabel","aria-modal":"true",role:"dialog"},on:{click:function(t){return t.target!==t.currentTarget?null:e.toggle()}}},[r("div",{staticClass:"modal-dialog"},[r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-header"},[e.$slots.header&&e.$scopedSlots.header?r("h5",{staticClass:"modal-title"},[e._t("header")],2):e._e(),e._v(" "),r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(t){return e.toggle()}}},[r("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]),e._v(" "),r("div",{staticClass:"modal-body"},[e._t("body")],2),e._v(" "),e.$slots.footer&&e.$scopedSlots.footer?r("div",{staticClass:"modal-footer"},[e._t("footer")],2):e._e()])])]):e._e()])],1)}),[],!1,null,null,null);t.default=component.exports},742:function(e,t,r){"use strict";r.r(t);var o={props:{value:Object,error:[Object,Boolean]},data:function(){return{settings:!1,emailTestLoading:0,emailTest:!1}},methods:{sendEmailTest:function(){var e=this;this.emailTestLoading++,this.$axios.post("/api/settings/email-test",this.emailTest).then((function(t){e.emailTestLoading--,e.emailTest=!1}))},defaultSettings:function(e){var t={gmail:{"mail.mailers.smtp.host":"smtp.gmail.com","mail.mailers.smtp.port":"465"}};if(t[e])for(var r in t[e])this.value[r].value=t[e][r]},getSettingsAll:function(){var e=this;this.$axios.get("/api/setting/all").then((function(t){e.settings=t.data}))}},mounted:function(){this.getSettingsAll()}},l=r(15),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.settings?e._e():r("div",[r("i",{staticClass:"fas fa-spin fa-spinner"}),e._v(" Carregando...")]),e._v(" "),e.settings?r("ui-form",{attrs:{method:"post",action:"/api/setting/save"},on:{success:function(t){return e.$swal("","Dados salvos","success")}},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.loading;t.success,t.error;return[r("ui-field",{attrs:{label:"Host / Porta"}},[r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-9"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.settings["mail.mailers.smtp.host"].value,expression:"settings['mail.mailers.smtp.host'].value"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.settings["mail.mailers.smtp.host"].value},on:{input:function(t){t.target.composing||e.$set(e.settings["mail.mailers.smtp.host"],"value",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"col-3 pl-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.settings["mail.mailers.smtp.port"].value,expression:"settings['mail.mailers.smtp.port'].value"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.settings["mail.mailers.smtp.port"].value},on:{input:function(t){t.target.composing||e.$set(e.settings["mail.mailers.smtp.port"],"value",t.target.value)}}})])])]),e._v(" "),r("ui-field",{attrs:{label:e.settings["mail.mailers.smtp.username"].description,help:e.settings["mail.mailers.smtp.username"].help}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.settings["mail.mailers.smtp.username"].value,expression:"settings['mail.mailers.smtp.username'].value"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.settings["mail.mailers.smtp.username"].value},on:{input:function(t){t.target.composing||e.$set(e.settings["mail.mailers.smtp.username"],"value",t.target.value)}}})]),e._v(" "),r("ui-field",{attrs:{label:e.settings["mail.mailers.smtp.password"].description,help:e.settings["mail.mailers.smtp.password"].help}},[r("ui-password",{attrs:{meter:!1},model:{value:e.settings["mail.mailers.smtp.password"].value,callback:function(t){e.$set(e.settings["mail.mailers.smtp.password"],"value",t)},expression:"settings['mail.mailers.smtp.password'].value"}})],1),e._v(" "),r("div",{staticClass:"text-right"},[r("button",{staticClass:"btn btn-outline-success",attrs:{type:"button"},on:{click:function(t){e.emailTest={email:e.$auth.user.email,body:"Olá, este é um e-mail de teste."}}}},[e._v("\r\n                Testar e-mail\r\n            ")])]),e._v(" "),r("br"),e._v(" "),r("ui-field",{attrs:{label:e.settings["jwt.ttl"].description}},[r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.settings["jwt.ttl"].value,expression:"settings['jwt.ttl'].value"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.settings["jwt.ttl"].value},on:{input:function(t){t.target.composing||e.$set(e.settings["jwt.ttl"],"value",t.target.value)}}}),e._v(" "),r("div",{staticClass:"input-group-append"},[r("div",{staticClass:"input-group-text"},[e._v("\r\n                    Minutos\r\n                ")])])])]),e._v(" "),r("ui-actions",[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("\r\n                Salvar "),r("span",{domProps:{innerHTML:e._s(o)}})])]),e._v(" "),r("el-collapse",{staticClass:"mt-3",attrs:{value:!1,accordion:""}},[r("el-collapse-item",{attrs:{name:"smtp",title:"SMTP"}},[r("p",[e._v("Para enviar e-mail pelo sistema, é necessário configurar uma caixa de e-mail como local de onde as mensagens partirão.")]),e._v(" "),r("p",[e._v("Você pode configurar qualquer servidor, desde que saiba corretamente os dados de host e porta, juntamente com seu login e senha.")])]),e._v(" "),r("el-collapse-item",{attrs:{name:"smtp-gmail",title:"SMTP Gmail"}},[r("p",[e._v("Uma das maneiras mais simples de configurar é utilizando sua conta Gmail.")]),e._v(" "),r("p",[e._v("Para envio de email através de autenticação SMTP Gmail, siga os passos abaixo:")]),e._v(" "),r("ol",{staticClass:"my-3 mb-0"},[r("li",[e._v("Acesse a conta de e-mail através do browser;")]),e._v(" "),r("li",[e._v("Clique em "),r("a",{attrs:{href:"https://myaccount.google.com/?utm_source=OGB&tab=mk&utm_medium=act",target:"_blank"}},[e._v("Gerenciar sua conta do Google")]),e._v(";")]),e._v(" "),r("li",[e._v("Na lateral esquerda, clique em "),r("a",{attrs:{href:"https://myaccount.google.com/security?gar=1",target:"_blank"}},[e._v("Segurança")]),e._v(";")]),e._v(" "),r("li",[e._v('Clique na opção "Verificação em duas etapas" e proceda com a confirmação de token;')]),e._v(" "),r("li",[e._v('Ao concluir, clique na opção "Senhas de app", no select que vai aparecer a seguir, selecione respectivamente "E-mail" e "Outro". Dê um nome personalizado para sua senha e clique em "Gerar".')])]),e._v(" "),r("p",[e._v("Essa será a senha que você vai precisar para que o sistema envie e-mails. "),r("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.defaultSettings("gmail")}}},[e._v("O padrão para conexão Gmail é host "),r("strong",[e._v("smtp.gmail.com")]),e._v(" porta "),r("strong",[e._v("465")])]),e._v(".")])])],1)]}}],null,!1,3489289377),model:{value:e.settings,callback:function(t){e.settings=t},expression:"settings"}}):e._e(),e._v(" "),r("ui-form",{attrs:{method:"post",action:"/api/email/test"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.loading,l=t.success;return[r("ui-modal",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("Teste de envio de e-mail")]},proxy:!0},{key:"body",fn:function(){return[l?r("div",{staticClass:"alert alert-success"},[e._v("E-mail enviado")]):e._e(),e._v(" "),r("ui-field",{attrs:{label:"E-mail"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.emailTest.email,expression:"emailTest.email"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.emailTest.email},on:{input:function(t){t.target.composing||e.$set(e.emailTest,"email",t.target.value)}}})]),e._v(" "),r("ui-field",{attrs:{label:"Assunto"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.emailTest.subject,expression:"emailTest.subject"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.emailTest.subject},on:{input:function(t){t.target.composing||e.$set(e.emailTest,"subject",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",[e._v("Mensagem")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.emailTest.body,expression:"emailTest.body"}],staticClass:"form-control",domProps:{value:e.emailTest.body},on:{input:function(t){t.target.composing||e.$set(e.emailTest,"body",t.target.value)}}})])]},proxy:!0},{key:"footer",fn:function(){return[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[o?r("span",{domProps:{innerHTML:e._s(o)}}):r("i",{staticClass:"fas fa-paper-plane mr-2"}),e._v("\r\n                    Enviar\r\n                ")])]},proxy:!0}],null,!0),model:{value:e.emailTest,callback:function(t){e.emailTest=t},expression:"emailTest"}})]}}]),model:{value:e.emailTest,callback:function(t){e.emailTest=t},expression:"emailTest"}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiField:r(594).default,UiPassword:r(587).default,UiActions:r(402).default,UiForm:r(586).default,UiModal:r(599).default})}}]);