(window.webpackJsonp=window.webpackJsonp||[]).push([[56,24],{604:function(e,t,l){"use strict";l.r(t);var o={props:{horizontal:{default:!1},label:{default:""},help:{default:""},error:{default:""}}},r=l(5),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"form-group row no-gutters mb-3"},[e.horizontal?[l("label",[e._v(e._s(e.label))]),e._v(" "),e._t("default"),e._v(" "),e.help?l("small",{staticClass:"d-block text-muted",domProps:{innerHTML:e._s(e.help)}}):e._e(),e._v(" "),e.error?l("small",{staticClass:"d-block text-danger",domProps:{innerHTML:e._s(e.error)}}):e._e()]:[l("div",{staticClass:"col-12 col-md-4 col-lg-3 p-2 px-0 px-md-2"},[l("div",[e._v(e._s(e.label))]),e._v(" "),e.help?l("small",{staticClass:"d-block text-muted",domProps:{innerHTML:e._s(e.help)}}):e._e()]),e._v(" "),l("div",{staticClass:"col-12 col-md-8 col-lg-9"},[e._t("default"),e._v(" "),e.error?l("small",{staticClass:"d-block text-danger mt-1 mx-1"},[e._v(e._s(e.error))]):e._e()],2)]],2)}),[],!1,null,null,null);t.default=component.exports},755:function(e,t,l){"use strict";l.r(t);var o={props:{value:Object,error:[Object,Boolean]},data:function(){return{settings:!1,emailTestLoading:0,emailTest:!1}},methods:{sendEmailTest:function(){var e=this;this.emailTestLoading++,this.$axios.post("/api/settings/email-test",this.emailTest).then((function(t){e.emailTestLoading--,e.emailTest=!1}))},defaultSettings:function(e){var t={gmail:{"mail.mailers.smtp.host":"smtp.gmail.com","mail.mailers.smtp.port":"465"}};if(t[e])for(var l in t[e])this.value[l].value=t[e][l]},getSettingsAll:function(){var e=this;this.$axios.get("/api/setting/all").then((function(t){e.settings=t.data}))}},mounted:function(){this.getSettingsAll()}},r=l(5),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[e.settings?e._e():l("div",[l("i",{staticClass:"fas fa-spin fa-spinner"}),e._v(" Carregando...")]),e._v(" "),e.settings?l("ui-form",{attrs:{method:"post",action:"/api/setting/save"},on:{success:function(t){return e.$swal("","Dados salvos","success")}},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.loading;t.success,t.error;return[l("ui-field",{attrs:{label:"Host / Porta"}},[l("div",{staticClass:"row no-gutters"},[l("div",{staticClass:"col-9"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.settings["mail.mailers.smtp.host"].value,expression:"settings['mail.mailers.smtp.host'].value"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.settings["mail.mailers.smtp.host"].value},on:{input:function(t){t.target.composing||e.$set(e.settings["mail.mailers.smtp.host"],"value",t.target.value)}}})]),e._v(" "),l("div",{staticClass:"col-3 pl-1"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.settings["mail.mailers.smtp.port"].value,expression:"settings['mail.mailers.smtp.port'].value"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.settings["mail.mailers.smtp.port"].value},on:{input:function(t){t.target.composing||e.$set(e.settings["mail.mailers.smtp.port"],"value",t.target.value)}}})])])]),e._v(" "),l("ui-field",{attrs:{label:e.settings["mail.mailers.smtp.username"].description,help:e.settings["mail.mailers.smtp.username"].help}},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.settings["mail.mailers.smtp.username"].value,expression:"settings['mail.mailers.smtp.username'].value"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.settings["mail.mailers.smtp.username"].value},on:{input:function(t){t.target.composing||e.$set(e.settings["mail.mailers.smtp.username"],"value",t.target.value)}}})]),e._v(" "),l("ui-field",{attrs:{label:e.settings["mail.mailers.smtp.password"].description,help:e.settings["mail.mailers.smtp.password"].help}},[l("ui-password",{attrs:{meter:!1},model:{value:e.settings["mail.mailers.smtp.password"].value,callback:function(t){e.$set(e.settings["mail.mailers.smtp.password"],"value",t)},expression:"settings['mail.mailers.smtp.password'].value"}})],1),e._v(" "),l("div",{staticClass:"text-right"},[l("button",{staticClass:"btn btn-outline-success",attrs:{type:"button"},on:{click:function(t){e.emailTest={email:e.$auth.user.email,body:"Olá, este é um e-mail de teste."}}}},[e._v("\r\n                Testar e-mail\r\n            ")])]),e._v(" "),l("br"),e._v(" "),l("ui-field",{attrs:{label:e.settings["jwt.ttl"].description}},[l("div",{staticClass:"input-group"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.settings["jwt.ttl"].value,expression:"settings['jwt.ttl'].value"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.settings["jwt.ttl"].value},on:{input:function(t){t.target.composing||e.$set(e.settings["jwt.ttl"],"value",t.target.value)}}}),e._v(" "),l("div",{staticClass:"input-group-append"},[l("div",{staticClass:"input-group-text"},[e._v("\r\n                    Minutos\r\n                ")])])])]),e._v(" "),l("ui-actions",[l("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("\r\n                Salvar "),l("span",{domProps:{innerHTML:e._s(o)}})])]),e._v(" "),l("el-collapse",{staticClass:"mt-3",attrs:{value:!1,accordion:""}},[l("el-collapse-item",{attrs:{name:"smtp",title:"SMTP"}},[l("p",[e._v("Para enviar e-mail pelo sistema, é necessário configurar uma caixa de e-mail como local de onde as mensagens partirão.")]),e._v(" "),l("p",[e._v("Você pode configurar qualquer servidor, desde que saiba corretamente os dados de host e porta, juntamente com seu login e senha.")])]),e._v(" "),l("el-collapse-item",{attrs:{name:"smtp-gmail",title:"SMTP Gmail"}},[l("p",[e._v("Uma das maneiras mais simples de configurar é utilizando sua conta Gmail.")]),e._v(" "),l("p",[e._v("Para envio de email através de autenticação SMTP Gmail, siga os passos abaixo:")]),e._v(" "),l("ol",{staticClass:"my-3 mb-0"},[l("li",[e._v("Acesse a conta de e-mail através do browser;")]),e._v(" "),l("li",[e._v("Clique em "),l("a",{attrs:{href:"https://myaccount.google.com/?utm_source=OGB&tab=mk&utm_medium=act",target:"_blank"}},[e._v("Gerenciar sua conta do Google")]),e._v(";")]),e._v(" "),l("li",[e._v("Na lateral esquerda, clique em "),l("a",{attrs:{href:"https://myaccount.google.com/security?gar=1",target:"_blank"}},[e._v("Segurança")]),e._v(";")]),e._v(" "),l("li",[e._v('Clique na opção "Verificação em duas etapas" e proceda com a confirmação de token;')]),e._v(" "),l("li",[e._v('Ao concluir, clique na opção "Senhas de app", no select que vai aparecer a seguir, selecione respectivamente "E-mail" e "Outro". Dê um nome personalizado para sua senha e clique em "Gerar".')])]),e._v(" "),l("p",[e._v("Essa será a senha que você vai precisar para que o sistema envie e-mails. "),l("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.defaultSettings("gmail")}}},[e._v("O padrão para conexão Gmail é host "),l("strong",[e._v("smtp.gmail.com")]),e._v(" porta "),l("strong",[e._v("465")])]),e._v(".")])])],1)]}}],null,!1,3489289377),model:{value:e.settings,callback:function(t){e.settings=t},expression:"settings"}}):e._e(),e._v(" "),l("ui-form",{attrs:{method:"post",action:"/api/email/test"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.loading,r=t.success;return[l("ui-modal",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("Teste de envio de e-mail")]},proxy:!0},{key:"body",fn:function(){return[r?l("div",{staticClass:"alert alert-success"},[e._v("E-mail enviado")]):e._e(),e._v(" "),l("ui-field",{attrs:{label:"E-mail"}},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.emailTest.email,expression:"emailTest.email"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.emailTest.email},on:{input:function(t){t.target.composing||e.$set(e.emailTest,"email",t.target.value)}}})]),e._v(" "),l("ui-field",{attrs:{label:"Assunto"}},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.emailTest.subject,expression:"emailTest.subject"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.emailTest.subject},on:{input:function(t){t.target.composing||e.$set(e.emailTest,"subject",t.target.value)}}})]),e._v(" "),l("div",{staticClass:"form-group"},[l("label",[e._v("Mensagem")]),e._v(" "),l("textarea",{directives:[{name:"model",rawName:"v-model",value:e.emailTest.body,expression:"emailTest.body"}],staticClass:"form-control",domProps:{value:e.emailTest.body},on:{input:function(t){t.target.composing||e.$set(e.emailTest,"body",t.target.value)}}})])]},proxy:!0},{key:"footer",fn:function(){return[l("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[o?l("span",{domProps:{innerHTML:e._s(o)}}):l("i",{staticClass:"fas fa-paper-plane mr-2"}),e._v("\r\n                    Enviar\r\n                ")])]},proxy:!0}],null,!0),model:{value:e.emailTest,callback:function(t){e.emailTest=t},expression:"emailTest"}})]}}]),model:{value:e.emailTest,callback:function(t){e.emailTest=t},expression:"emailTest"}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiField:l(604).default,UiPassword:l(186).default,UiActions:l(405).default,UiForm:l(406).default,UiModal:l(408).default})}}]);