(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{375:function(e,t,o){var content=o(381);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(39).default)("b8d0879e",content,!0,{sourceMap:!1})},376:function(e,t,o){"use strict";o.r(t);var l={name:"ui-password",props:{value:{default:""},placeholder:{default:""},toggleShow:{default:!0},meter:{default:!0},type:{default:"password"}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e,this.props)}}},data:function(){return{props:Object.assign({},this.$props)}}},r=o(14),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"form-control p-0 bg-white"},[o("div",{staticClass:"input-group"},["checkbox"===e.props.type?o("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:e.props.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(e.props.value)?e._i(e.props.value,null)>-1:e.props.value},on:{input:function(t){return e.$emit("input",e.props.value)},change:function(t){var o=e.props.value,l=t.target,r=!!l.checked;if(Array.isArray(o)){var n=e._i(o,null);l.checked?n<0&&e.$set(e.props,"value",o.concat([null])):n>-1&&e.$set(e.props,"value",o.slice(0,n).concat(o.slice(n+1)))}else e.$set(e.props,"value",r)}}}):"radio"===e.props.type?o("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:e.props.placeholder,type:"radio"},domProps:{checked:e._q(e.props.value,null)},on:{input:function(t){return e.$emit("input",e.props.value)},change:function(t){return e.$set(e.props,"value",null)}}}):o("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:e.props.placeholder,type:e.props.type},domProps:{value:e.props.value},on:{input:[function(t){t.target.composing||e.$set(e.props,"value",t.target.value)},function(t){return e.$emit("input",e.props.value)}]}}),e._v(" "),e.props.toggleShow?o("div",{staticClass:"input-group-append"},[o("div",{staticClass:"input-group-btn"},[o("div",{staticClass:"btn",on:{click:function(t){e.props.type="text"==e.props.type?"password":"text"}}},[o("i",{staticClass:"fas fa-eye",class:{"fa-eye-slash":"password"==e.props.type}})])])]):e._e()]),e._v(" "),e.props.meter?o("ui-password-meter",{staticStyle:{"margin-top":"-4px"},model:{value:e.props.value,callback:function(t){e.$set(e.props,"value",t)},expression:"props.value"}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiPasswordMeter:o(379).default})},379:function(e,t,o){"use strict";o.r(t);var l={props:{value:{default:!1}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},computed:{meter:function(){var e=this.props.value,t=0,o="danger";if(e){for(var l=new Object,i=0;i<e.length;i++)l[e[i]]=(l[e[i]]||0)+1,t+=5/l[e[i]];var r={digits:/\d/.test(e),lower:/[a-z]/.test(e),upper:/[A-Z]/.test(e),nonWords:/\W/.test(e)},n=0;for(var c in r)n+=1==r[c]?1:0;t+=10*(n-1),(t=parseInt(t))>=70?o="success":t>=40&&(o="primary")}return{score:t,class:o}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)}},data:function(){return{props:Object.assign({},this.$props)}}},r=o(14),component=Object(r.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"progress",staticStyle:{height:"5px"}},[t("div",{staticClass:"progress-bar progress-bar-striped",class:"bg-"+this.meter.class,style:"width:"+this.meter.score+"%;"})])])}),[],!1,null,null,null);t.default=component.exports},380:function(e,t,o){"use strict";var l=o(375);o.n(l).a},381:function(e,t,o){(t=o(38)(!1)).push([e.i,".ui-modal{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.2);z-index:9999!important;display:flex;align-items:center;justify-content:center;padding:0!important}.ui-modal .card{width:600px;max-width:90vw!important;max-height:90vh;margin:0!important;overflow:auto!important}",""]),e.exports=t},385:function(e,t,o){"use strict";o.r(t);var l={props:{value:{default:!1},tag:{default:"div"}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)},toggle:function(){this.props.value=!this.props.value,this.emit()}},data:function(){return{props:Object.assign({},this.$props)}}},r=(o(380),o(14)),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("transition",{attrs:{name:"custom-unique-name","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"}},[e.props.value?o("div",{staticClass:"modal fade show",staticStyle:{display:"block",background:"#00000044","animation-duration":"200ms"},attrs:{tabindex:"-1","aria-labelledby":"exampleModalLiveLabel","aria-modal":"true",role:"dialog"},on:{click:function(t){return t.target!==t.currentTarget?null:e.toggle()}}},[o("div",{staticClass:"modal-dialog"},[o("div",{staticClass:"modal-content"},[o("div",{staticClass:"modal-header"},[e.$slots.header&&e.$scopedSlots.header?o("h5",{staticClass:"modal-title"},[e._t("header")],2):e._e(),e._v(" "),o("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(t){return e.toggle()}}},[o("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]),e._v(" "),o("div",{staticClass:"modal-body"},[e._t("body")],2),e._v(" "),e.$slots.footer&&e.$scopedSlots.footer?o("div",{staticClass:"modal-footer"},[e._t("footer")],2):e._e()])])]):e._e()])],1)}),[],!1,null,null,null);t.default=component.exports},422:function(e,t,o){"use strict";o.r(t);var l={props:{label:{default:""},error:{default:""}}},r=o(14),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"form-group row no-gutters"},[o("div",{staticClass:"col-12 col-md-4 col-lg-3 p-2 px-0 px-md-2"},[o("div",[e._v(e._s(e.label))])]),e._v(" "),o("div",{staticClass:"col-12 col-md-8 col-lg-9"},[e._t("default"),e._v(" "),e.error?o("small",{staticClass:"d-block text-danger mt-1 mx-1"},[e._v(e._s(e.error))]):e._e()],2)])}),[],!1,null,null,null);t.default=component.exports},474:function(e,t,o){var content=o(528);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(39).default)("10cb5511",content,!0,{sourceMap:!1})},527:function(e,t,o){"use strict";var l=o(474);o.n(l).a},528:function(e,t,o){(t=o(38)(!1)).push([e.i,"",""]),e.exports=t},545:function(e,t,o){"use strict";o.r(t);var l=o(2);o.n(l).a.component("ui-accordion-item",{props:{title:""},data:function(){return{}},computed:{indexComputed:function(){var e=0;for(var i in this.$parent.$children)if(this.$parent.$children[i]==this){e=parseInt(i);break}return e},cardBodyStyleComputed:function(){var style={};return this.$parent.props.value==this.indexComputed||(style.height="0px",style.transform="scaleY(0)",style.transformOrigin="top"),style}},template:'<div class="card m-0">\n        <div class="card-header p-0 bg-light">\n            <button class="btn btn-block text-left font-weight-bold p-2" type="button" @click="$parent.setValue(indexComputed)">\n                <i class="fas fa-angle-down float-right pt-2 pr-2" :class="{\'fa-rotate-90\':!$parent.props.value==indexComputed}" style="transition: all 200ms ease;"></i>\n                {{ title }}\n            </button>\n        </div>\n\n        <div class="collapse show" :style="cardBodyStyleComputed" style="overflow:hidden; transition: all 200ms ease; animation-duration:200ms;">\n            <div class="card-body p-3">\n                <slot></slot>\n            </div>\n        </div>\n\n    </div>'});var r={props:{value:{default:0}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},data:function(){return{props:Object.assign({},this.$props)}},methods:{setValue:function(e){this.props.value=e,this.$emit("input",this.props.value)}}},n=(o(527),o(14)),component=Object(n.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"ui-accordion"},[t("div",{staticClass:"accordion"},[this._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports},580:function(e,t,o){"use strict";o.r(t);var l={props:{value:Object,error:[Object,Boolean]},data:function(){return{emailTestLoading:0,emailTest:!1}},methods:{sendEmailTest:function(){var e=this;this.emailTestLoading++,this.$axios.post("/api/settings/email-test",this.emailTest).then((function(t){e.emailTestLoading--,e.emailTest=!1}))},defaultSettings:function(e){var t={gmail:{"mail.mailers.smtp.host":"smtp.gmail.com","mail.mailers.smtp.port":"465"}};if(t[e])for(var o in t[e])this.value[o].value=t[e][o]}}},r=o(14),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.value["mail.mailers.smtp.host"]?o("div",[o("ui-field",{attrs:{label:"Host / Porta"}},[o("div",{staticClass:"row no-gutters"},[o("div",{staticClass:"col-9"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.value["mail.mailers.smtp.host"].value,expression:"value['mail.mailers.smtp.host'].value"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.value["mail.mailers.smtp.host"].value},on:{input:function(t){t.target.composing||e.$set(e.value["mail.mailers.smtp.host"],"value",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"col-3 pl-1"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.value["mail.mailers.smtp.port"].value,expression:"value['mail.mailers.smtp.port'].value"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.value["mail.mailers.smtp.port"].value},on:{input:function(t){t.target.composing||e.$set(e.value["mail.mailers.smtp.port"],"value",t.target.value)}}})])])]),e._v(" "),o("ui-field",{attrs:{label:"Login"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.value["mail.mailers.smtp.username"].value,expression:"value['mail.mailers.smtp.username'].value"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.value["mail.mailers.smtp.username"].value},on:{input:function(t){t.target.composing||e.$set(e.value["mail.mailers.smtp.username"],"value",t.target.value)}}})]),e._v(" "),o("ui-field",{attrs:{label:"Senha"}},[o("ui-password",{attrs:{meter:!1},model:{value:e.value["mail.mailers.smtp.password"].value,callback:function(t){e.$set(e.value["mail.mailers.smtp.password"],"value",t)},expression:"value['mail.mailers.smtp.password'].value"}})],1),e._v(" "),o("div",{staticClass:"text-right"},[o("button",{staticClass:"btn btn-outline-success",attrs:{type:"button"},on:{click:function(t){e.emailTest={email:e.$auth.user.email,body:"Olá, este é um e-mail de teste."}}}},[e._v("\r\n            Testar e-mail\r\n        ")])]),e._v(" "),o("ui-accordion",{staticClass:"mt-3"},[o("ui-accordion-item",{attrs:{title:"SMTP"}},[o("p",[e._v("Para enviar e-mail pelo sistema, é necessário configurar uma caixa de e-mail como local de onde as mensagens partirão.")]),e._v(" "),o("p",[e._v("Você pode configurar qualquer servidor, desde que saiba corretamente os dados de host e porta, juntamente com seu login e senha.")])]),e._v(" "),o("ui-accordion-item",{attrs:{title:"SMTP Gmail"}},[o("p",[e._v("Uma das maneiras mais simples de configurar é utilizando sua conta Gmail.")]),e._v(" "),o("p",[e._v("Para envio de email através de autenticação SMTP Gmail, siga os passos abaixo:")]),e._v(" "),o("ol",{staticClass:"my-3 mb-0"},[o("li",[e._v("Acesse a conta de e-mail através do browser;")]),e._v(" "),o("li",[e._v("Clique em "),o("a",{attrs:{href:"https://myaccount.google.com/?utm_source=OGB&tab=mk&utm_medium=act",target:"_blank"}},[e._v("Gerenciar sua conta do Google")]),e._v(";")]),e._v(" "),o("li",[e._v("Na lateral esquerda, clique em "),o("a",{attrs:{href:"https://myaccount.google.com/security?gar=1",target:"_blank"}},[e._v("Segurança")]),e._v(";")]),e._v(" "),o("li",[e._v('Clique na opção "Verificação em duas etapas" e proceda com a confirmação de token;')]),e._v(" "),o("li",[e._v('Ao concluir, clique na opção "Senhas de app", no select que vai aparecer a seguir, selecione respectivamente "E-mail" e "Outro". Dê um nome personalizado para sua senha e clique em "Gerar".')])]),e._v(" "),o("p",[e._v("Essa será a senha que você vai precisar para que o sistema envie e-mails. "),o("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.defaultSettings("gmail")}}},[e._v("O padrão para conexão Gmail é host "),o("strong",[e._v("smtp.gmail.com")]),e._v(" porta "),o("strong",[e._v("465")])]),e._v(".")])])],1),e._v(" "),o("ui-modal",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("Teste de envio de e-mail")]},proxy:!0},{key:"body",fn:function(){return[o("ui-field",{attrs:{label:"E-mail"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.emailTest.email,expression:"emailTest.email"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.emailTest.email},on:{input:function(t){t.target.composing||e.$set(e.emailTest,"email",t.target.value)}}})]),e._v(" "),o("ui-field",{attrs:{label:"Mensagem"}},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.emailTest.body,expression:"emailTest.body"}],staticClass:"form-control",domProps:{value:e.emailTest.body},on:{input:function(t){t.target.composing||e.$set(e.emailTest,"body",t.target.value)}}})])]},proxy:!0},{key:"footer",fn:function(){return[o("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return e.sendEmailTest()}}},[e.emailTestLoading?o("div",[o("i",{staticClass:"fas fa-spin fa-spinner"}),e._v(" Enviando")]):o("div",[o("i",{staticClass:"fas fa-paper-plane mr-2"}),e._v(" Enviar")])])]},proxy:!0}],null,!1,3852495049),model:{value:e.emailTest,callback:function(t){e.emailTest=t},expression:"emailTest"}})],1):e._e()}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiField:o(422).default,UiPassword:o(376).default,UiAccordion:o(545).default,UiModal:o(385).default})}}]);