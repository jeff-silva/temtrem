(window.webpackJsonp=window.webpackJsonp||[]).push([[29,43],{373:function(t,e,o){var content=o(384);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("b8d0879e",content,!0,{sourceMap:!1})},383:function(t,e,o){"use strict";var n=o(373);o.n(n).a},384:function(t,e,o){(e=o(38)(!1)).push([t.i,".ui-modal{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.2);z-index:9999!important;display:flex;align-items:center;justify-content:center;padding:0!important}.ui-modal .card{width:600px;max-width:90vw!important;max-height:90vh;margin:0!important;overflow:auto!important}",""]),t.exports=e},386:function(t,e,o){var content=o(420);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("7c467b56",content,!0,{sourceMap:!1})},389:function(t,e,o){"use strict";o.r(e);var n={props:{value:{default:!1},tag:{default:"div"}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{emit:function(){this.$emit("input",this.props.value)},toggle:function(){this.props.value=!this.props.value,this.$emit("value",this.props.value),this.emit()}},data:function(){return{props:Object.assign({},this.$props)}}},r=(o(383),o(14)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("transition",{attrs:{name:"custom-unique-name","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"}},[t.props.value?o("div",{staticClass:"modal fade show",staticStyle:{display:"block",background:"#00000044","animation-duration":"200ms"},attrs:{tabindex:"-1","aria-labelledby":"exampleModalLiveLabel","aria-modal":"true",role:"dialog"},on:{click:function(e){return e.target!==e.currentTarget?null:t.toggle()}}},[o("div",{staticClass:"modal-dialog"},[o("div",{staticClass:"modal-content"},[o("div",{staticClass:"modal-header"},[t.$slots.header&&t.$scopedSlots.header?o("h5",{staticClass:"modal-title"},[t._t("header")],2):t._e(),t._v(" "),o("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.toggle()}}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),o("div",{staticClass:"modal-body"},[t._t("body")],2),t._v(" "),t.$slots.footer&&t.$scopedSlots.footer?o("div",{staticClass:"modal-footer"},[t._t("footer")],2):t._e()])])]):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports},419:function(t,e,o){"use strict";var n=o(386);o.n(n).a},420:function(t,e,o){(e=o(38)(!1)).push([t.i,".ui-datetime .flatpickr-calendar{visibility:hidden;opacity:0;transition:all .2s ease;position:absolute;top:110%;left:0;min-width:310px;z-index:9}.ui-datetime .flatpickr-calendar *{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ui-datetime.ui-datetime-flatpickr-show .flatpickr-calendar{visibility:visible;opacity:1}",""]),t.exports=e},421:function(t,e,o){var content=o(498);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("0326657b",content,!0,{sourceMap:!1})},428:function(t,e,o){"use strict";o.r(e);var n={props:{value:{default:function(){return{}}},method:{default:"post"},action:{default:"api"}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)},submit:function(){var t=this,e=this.$axios[this.method],o="get"==this.method?{params:this.props.value}:this.props.value;console.log({method:this.method,call:e,params:o}),this.loading='<i class="fa fa-fw fa-spin fa-spinner"></i>',this.responseSuccess=!1,this.responseErrorMessage=!1,this.responseErrorFields={},e(this.action,o).then((function(e){t.loading="",t.responseSuccess=e.data,t.$emit("success",t.responseSuccess)})).catch((function(e){for(var i in t.loading="",t.responseErrorMessage=e.response.data.message||"Erro",t.responseErrorFields=e.response.data.fields||{},t.responseErrorFields)Array.isArray(t.responseErrorFields[i])&&(t.responseErrorFields[i]=t.responseErrorFields[i].join("<br>"));t.$emit("error",t.responseErrorFields)}))}},data:function(){return{loading:"",responseSuccess:!1,responseErrorMessage:!1,responseErrorFields:{},props:Object.assign({},this.$props)}}},r=o(14),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{staticClass:"ui-form",attrs:{method:t.method,action:t.action},on:{submit:function(e){return e.preventDefault(),t.submit()}}},[t.responseSuccess&&(t.$slots.success||t.$scopedSlots.success)?o("div",{staticClass:"alert alert-success"},[t._t("success",null,{response:t.responseSuccess})],2):t._e(),t._v(" "),t.responseErrorMessage&&(t.$slots.error||t.$scopedSlots.error)?o("div",{staticClass:"alert alert-danger"},[t._t("error",null,{message:t.responseErrorMessage,fields:t.responseErrorFields})],2):t._e(),t._v(" "),t._t("default",null,{loading:t.loading,error:t.responseErrorFields,success:t.responseSuccess})],2)}),[],!1,null,null,null);e.default=component.exports},432:function(t,e,o){"use strict";o.r(e);o(93);var n=o(447),r=(o(445),o(0)),l=o.n(r),c={props:{value:{default:""},time:{default:!0}},computed:{compConfig:function(){var t=this,data={};return this.props.time&&(data.inline=!0,data.enableTime=!0,data.time_24hr=!0),data.onChange=function(e,o,n){t.props.value=n.formatDate(e[0],"Y-m-d H:i:S"),t.valueFake=n.formatDate(e[0],"d/m/Y H:i:S"),t.flatpickrShowTest(),t.$refs.input.focus(),t.emit()},data.locale={weekdays:{shorthand:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],longhand:["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"]},months:{shorthand:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],longhand:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]},rangeSeparator:" até ",time_24hr:!0},data}},data:function(){return{valueFake:!1,flatpickr:!1,flatpickrShow:!1,props:Object.assign({},this.$props)}},methods:{emit:function(){this.$emit("input",this.props.value)},formattedToDate:function(t){var e=this.valueFake.split(/[^0-9]/).filter((function(t){return!!t}));e[2]&&4==e[2].length&&(this.props.value=[e[2],e[1]||"01",e[0]||"01"].join("-")+" "+[e[3]||"00",e[4]||"00",e[5]||"00"].join(":"),this.flatpickr.setDate(this.props.value))},flatpickrShowTest:function(){var t=this;setTimeout((function(){t.flatpickrShow=t.$el.contains(document.activeElement)}),100)}},mounted:function(){this.flatpickr=Object(n.a)(this.$refs.flatpickr,this.compConfig),this.valueFake=l()(this.props.value).format("DD/MM/YYYY - HH:mm")}},d=(o(419),o(14)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ui-datetime",class:{"ui-datetime-flatpickr-show":t.flatpickrShow},staticStyle:{position:"relative"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.valueFake,expression:"valueFake"},{name:"mask",rawName:"v-mask",value:["##/##/####","##/##/#### - ##:##:##"],expression:"['##/##/####', '##/##/#### - ##:##:##']"}],ref:"input",staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.valueFake},on:{keyup:function(e){t.formattedToDate(e),t.emit()},focus:function(e){return t.flatpickrShowTest()},blur:function(e){return t.flatpickrShowTest()},input:function(e){e.target.composing||(t.valueFake=e.target.value)}}}),t._v(" "),o("div",{ref:"flatpickr",staticClass:"ui-datetime-flatpickr"})])}),[],!1,null,null,null);e.default=component.exports},433:function(t,e,o){"use strict";o.r(e);o(94);var n={props:{value:{default:!1},placeholder:{default:"Buscar usuário"},showDropdown:{default:!1}},data:function(){return{loading:!1,searchParams:{search:""},search:{data:[]},user:!1,props:Object.assign({},this.$props)}},methods:{setValue:function(t){this.user=t,this.props.value=!!t&&t.id,this.$emit("input",this.props.value)},searchUsers:function(){var t=this;this.loading=!0,this.$axios.get("/api/user/search",{params:this.searchParams}).then((function(e){t.search=e.data||[],t.loading=!1}))},dropdownTest:function(){var t=this;setTimeout((function(){t.props.showDropdown=t.$el.contains(document.activeElement)}),100)}}},r=o(14),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{position:"relative"},on:{click:function(e){return t.dropdownTest()}}},[o("div",{staticClass:"input-group form-control p-0"},[t.$slots.prepend&&t.$scopedSlots.prepend?o("div",{staticClass:"input-group-prepend"},[t._t("prepend",null,{user:t.user,value:t.props.value})],2):t._e(),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.searchParams.search,expression:"searchParams.search"}],staticClass:"form-control border-0",attrs:{type:"text",placeholder:t.user?t.user.name:t.placeholder},domProps:{value:t.searchParams.search},on:{blur:function(e){return t.dropdownTest()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchUsers()},input:function(e){e.target.composing||t.$set(t.searchParams,"search",e.target.value)}}}),t._v(" "),o("div",{staticClass:"input-group-append"},[t.user?t._e():o("div",{staticClass:"input-group-btn"},[o("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(e){return t.searchUsers()}}},[t.loading?o("i",{staticClass:"fa fa-fw fa-spin fa-spinner"}):o("i",{staticClass:"fas fa-search"})])])]),t._v(" "),o("div",{staticClass:"input-group-append"},[t.user?o("div",{staticClass:"input-group-btn"},[o("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(e){return t.setValue(!1)}}},[o("i",{staticClass:"fas fa-times"})])]):t._e()]),t._v(" "),t.$slots.append&&t.$scopedSlots.append?o("div",{staticClass:"input-group-append"},[t._t("append",null,{user:t.user,value:t.props.value})],2):t._e()]),t._v(" "),t.props.showDropdown?o("div",{staticClass:"list-group bg-white shadow-sm",staticStyle:{position:"absolute",top:"100%",left:"0px",width:"100%","min-width":"300px"}},[t.loading||0!=t.search.data.length?t._e():o("div",{staticClass:"list-group-item"},[t._v("Nenhum resultado encontrado")]),t._v(" "),t._l(t.search.data,(function(u){return o("a",{staticClass:"list-group-item",attrs:{href:"javascript:void(0);"},on:{click:function(e){t.setValue(u),t.searchParams.search=""}}},[t._v(t._s(u.name))])}))],2):t._e()])}),[],!1,null,null,null);e.default=component.exports},449:function(t,e,o){"use strict";o.r(e);var n={props:{tevep:{default:function(){return{}}},node:{default:function(){return{}}},uuid:Function,tevepLoad:Function,tevepDefault:Function,tevepTitle:Function,tevepNodeDefault:Function,tevepPingpongDefault:Function},data:function(){return{pingpong:!1,pingpongInfo:!1,props:Object.assign({},this.$props)}},methods:{sendPingpong:function(){var t=this;this.$axios.post("/api/tevep/".concat(this.$route.params.id,"/pingpong/").concat(this.pingpong.to)).then((function(e){t.tevepLoad()}))}}},r=o(14),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"row no-gutters"},[t.node.title?o("div",{staticClass:"col-12 text-center"},[o("div",{staticClass:"d-flex align-items-center",staticStyle:{margin:"0px 100px"}},[o("div",{staticClass:"flex-grow-1 px-3"},[t._v("\r\n                    Início\r\n                    "),o("ui-datetime",{on:{input:function(e){return t.tevepTitle(t.node)}},model:{value:t.node.date_start,callback:function(e){t.$set(t.node,"date_start",e)},expression:"node.date_start"}})],1),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"flex-grow-1 px-3"},[t._v("\r\n                    Fim\r\n                    "),o("ui-datetime",{on:{input:function(e){return t.tevepTitle(t.node)}},model:{value:t.node.date_final,callback:function(e){t.$set(t.node,"date_final",e)},expression:"node.date_final"}})],1)]),t._v(" "),o("br"),o("br")]):t._e(),t._v(" "),o("div",{staticClass:"col-4"},[t.node.espaco?o("div",[t._m(1),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.node.piloto,expression:"node.piloto"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.node.piloto},on:{input:function(e){e.target.composing||t.$set(t.node,"piloto",e.target.value)}}})]):t._e()]),t._v(" "),o("div",{staticClass:"col-4 px-3"},[o("div",[t._v(" ")]),t._v(" "),o("div",{staticClass:"input-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.node.title,expression:"node.title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Título"},domProps:{value:t.node.title},on:{keyup:function(e){return t.tevepTitle(t.node)},input:function(e){e.target.composing||t.$set(t.node,"title",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col-4"},[t.node.espaco?o("div",[t._m(2),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.node.pessoa,expression:"node.pessoa"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.node.pessoa},on:{input:function(e){e.target.composing||t.$set(t.node,"pessoa",e.target.value)}}})]):t._e()]),t._v(" "),t.node.date_start&&t.node.date_final?o("div",{staticClass:"col-12 text-center"},[o("br"),o("br"),t._v(" "),o("img",{staticClass:"mb-3",staticStyle:{width:"200px"},attrs:{src:"/assets/icons/espaco.png",alt:""}}),t._v(" "),o("div",{staticStyle:{"max-width":"250px",margin:"0 auto"}},[o("div",{staticClass:"input-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.node.espaco,expression:"node.espaco"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.node.espaco},on:{input:function(e){e.target.composing||t.$set(t.node,"espaco",e.target.value)}}})])])]):t._e()]),t._v(" "),t.node.title&&t.node.date_start&&t.node.date_final&&t.node.espaco&&t.node.piloto&&t.node.pessoa&&0!=t.$route.params.id?o("div",[o("div",{staticClass:"text-center mt-5"},[o("a",{staticClass:"mr-4",attrs:{href:"javascript:;"},on:{click:function(e){t.pingpong=t.tevepPingpongDefault()}}},[o("img",{staticStyle:{width:"50px"},attrs:{src:"/assets/icons/raquete-preta.png",alt:""}})]),t._v(" "),t._l(t.tevep.pingpongs,(function(p){return o("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.pingpongInfo=p}}},[o("img",{staticStyle:{width:"50px"},attrs:{src:p.accepted?"/assets/icons/raquete-verde.png":"/assets/icons/raquete-vermelha.png",alt:""}})])}))],2),t._v(" "),o("ui-modal",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("Enviar pingpong para usuário")]},proxy:!0},{key:"body",fn:function(){return[o("ui-user",{scopedSlots:t._u([{key:"append",fn:function(){return[o("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.sendPingpong()}}},[o("i",{staticClass:"fas fa-fw fa-paper-plane"})])]},proxy:!0}],null,!1,3560734522),model:{value:t.pingpong.to,callback:function(e){t.$set(t.pingpong,"to",e)},expression:"pingpong.to"}})]},proxy:!0}],null,!1,3006215561),model:{value:t.pingpong,callback:function(e){t.pingpong=e},expression:"pingpong"}}),t._v(" "),o("ui-modal",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("Informações de pingpong")]},proxy:!0},{key:"body",fn:function(){return[t._v("\r\n                Para "+t._s(t.pingpongInfo.user_to_name)+" - "+t._s(t.pingpongInfo.user_to_email)+"\r\n                "),t.pingpongInfo.accepted?o("div",{staticClass:"alert alert-success m-0 mt-2"},[t._v("Aceito")]):t._e(),t._v(" "),t.pingpongInfo.accepted?t._e():o("div",{staticClass:"alert alert-danger m-0 mt-2"},[t._v("Não aceito")])]},proxy:!0}],null,!1,3772524206),model:{value:t.pingpongInfo,callback:function(e){t.pingpongInfo=e},expression:"pingpongInfo"}})],1):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticStyle:{width:"70px"},attrs:{src:"/assets/icons/evento.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("img",{staticClass:"mb-3 mr-2",staticStyle:{height:"60px"},attrs:{src:"/assets/icons/piloto.png",alt:""}}),this._v(" Pilotos")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[this._v("Público "),e("img",{staticClass:"mb-3 ml-2",staticStyle:{height:"60px"},attrs:{src:"/assets/icons/publico.png",alt:""}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{UiDatetime:o(432).default,UiUser:o(433).default,UiModal:o(389).default})},494:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAbBAMAAADv6ZCpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACRQTFRFAAAA////////////////////////////////////////////tAmN6QAAAAx0Uk5TAP+2HtNBZ4uv2pP4x3VCgAAAAKFJREFUeJyFkMsNwkAMRG2UCImTRyh8jnRAK9sBdEALdEAplMh4P95kL8wl3peMZ7IiVSqDbiPAf3DfnifYFug8AhlAkmOd5rLMIuYJ6kygySdiRdeibvRA/smOj332KUpPArxKAnImJMrh8shf9ip5XJc/cUdaOlCbwNX9BlKJSgGuPCu7WjgO/t4C0O2x+LYlVgPxro5WoF1jWFdT00fkB5/UDAo80kg/AAAAAElFTkSuQmCC"},495:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcBAMAAACE1hKaAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACRQTFRFAAAA////////////////////////////////////////////tAmN6QAAAAx0Uk5TAP9ntpMe+NqLQa/TPMBwmgAAALxJREFUeJxlUcENwjAMvCAhQHxiISCFFyN0hG7QbsAKbNBuABswKj67bioRKdGdc/bZCeBLRHKFSIKNOE0ndHkgcEHqKSG6GH/pns6WiDhd2rle9y7Xe7sTNyLcSj8nqfEbe9rrVcOYaoes8SS5NXExZSvfKAGrXGaf4FJ9bouzc09TnEaLUfaQQvvCOLvQ+e/IBqwt6zXmxyEGiAcKPmEZePUK/5zmK26Dylj5IJx4qQ98GvuVK9br+OT5A7gjDytOCcVPAAAAAElFTkSuQmCC"},496:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAmBAMAAACxJE+eAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAB5QTFRFAAAA////////////////////////////////////JHyblQAAAAp0Uk5TAP9ni0HTHq+TMH7WDE0AAACoSURBVHicnZJBDsIwDARtkEC9eaVyh5/wlJ76j/68dhxBbBepwoeomewmm7hEVoxWlOsFyDh3BQfGvhKZza5pPxSrM7wjUw3nKMqQrGauibnKVPiourl6ITleC3KQpTAs5W7tDpfIPFw09zfNJ1gtQfejR38UWlvtqSDeeyHfuzLJrE96Q/pwr2z0DozO6A7P0DZCgE2H74K5bYs1MU0735D+mun5+dwBYh0PVJL5GFsAAAAASUVORK5CYII="},497:function(t,e,o){"use strict";var n=o(421);o.n(n).a},498:function(t,e,o){(e=o(38)(!1)).push([t.i,"ul.tevep-nav *{transition:all .2s ease}ul.tevep-nav{list-style-type:none;padding:0;margin:0;width:150px}ul.tevep-nav>li{position:relative}ul.tevep-nav>li>a{display:block;text-align:center}ul.tevep-nav>li:hover>a,ul.tevep-nav>li>a.tevep-nav-active,ul.tevep-nav>li>a:active{background:hsla(0,0%,100%,.13333)}ul.tevep-nav>li>a>img{position:relative;height:70px;margin:10px}ul.tevep-nav>li>a>span{display:block;padding:25px 0}ul.tevep-nav>li>ul{list-style-type:none;padding:0;margin:0;position:absolute;top:0;left:100%;width:150px;background:var(--dark);visibility:hidden;opacity:0;z-index:10}ul.tevep-nav>li>ul>li>a{display:block;padding:5px}ul.tevep-nav>li>ul>li:hover>a,ul.tevep-nav>li>ul>li>a.tevep-nav-active{background:#fff;color:var(--dark)!important}ul.tevep-nav>li:hover>ul{visibility:visible;opacity:1}",""]),t.exports=e},544:function(t,e,o){"use strict";o.r(e);o(24),o(25),o(9),o(72);var n={layout:"admin",middleware:"auth",components:{NuxtChildDefault:o(449).default},data:function(){return{loading:!1,tevep:this.tevepDefault()}},methods:{success:function(t){this.$swal("Sucesso","Dados salvos","success"),this.$router.push({path:"/tevep/".concat(t.id),query:{node:this.$route.query.node}})},uuid:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"xxxxxxxxxx";return t+e.replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))},tevepLoad:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.loading=e,this.$axios.get("/api/tevep/find/".concat(this.$route.params.id)).then((function(e){t.tevep=t.tevepDefault(e.data||{});var o=Object.assign({},t.$route.query);o.node||(o.node=t.tevep.nodes[0].id),t.$router.push({query:o}),o.pingpong&&t.$axios.post("/api/tevep/".concat(t.tevep.id,"/pingpong-confirm/").concat(o.pingpong)).then((function(e){delete o.pingpong,t.$router.push({query:o}),t.tevep=t.tevepDefault(e.data||{})})),t.loading=!1}))},tevepTitle:function(t){t.parent||(this.tevep.title=t.title,this.tevep.date_start=t.date_start,this.tevep.date_final=t.date_final)},tevepDefault:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(e=Object.assign({user_id:this.$auth.user.id,title:"",date_start:"",date_final:"",nodes:[],pingpongs:[]},e)).user_id=e.user_id||this.$auth.user.id,0==e.nodes.length&&e.nodes.push(this.tevepNodeDefault()),e.nodes=e.nodes.map((function(e){return t.tevepNodeDefault(e)})),e},tevepNodeDefault:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if((t=Object.assign({id:this.uuid("node-"),parent:!1,title:"",level:0,date_start:"",date_final:"",tempos:[],piloto:"",pilotos:[],pessoa:"",pessoas:[],espaco:"",espacos:[],utilidades:[],inerencias:[],expectativas:[],inovacoes:[],logisticas:[],relevancias:[],complecidades:[],custos:[],entregas:[],segurancas:[],atendimentos:[],qualidades:[],materiais:[],maquinas:[],mao_de_obra:[],meio_ambientes:[],metodos:[]},t)).tempos.length<7)for(var e=1;e<=7;e++)t.tempos[e-1]||t.tempos.push({title:"T".concat(e),date_start:"",date_final:""});return t},tevepNodeAdd:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=this.tevepNodeDefault(t),this.tevep.nodes.push(t)},tevepNodeRemove:function(){},tevepNodeGetAll:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.tevep.nodes||[];return["id","parent","type"].forEach((function(o){t[o]&&(e=e.filter((function(e){return e[o]==t[o]})))})),e},tevepNodeGet:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.tevepNodeGetAll(t);return e[0]?e[0]:{}},tevepPingpongDefault:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=Object.assign({id:this.uuid("pingpong-"),from:this.$auth.user.id,to:!1,nodeId:this.$route.query.node,notificationsSent:0,accepted:!1},t)}},computed:{compBind:function(){var data={};for(var t in data.nodeId=this.$route.query.node,data.node=this.tevepNodeGet({id:data.nodeId}),data.root=this.tevepNodeGet({parent:!1}),data.parent=data.node.parent?this.tevepNodeGet({id:data.node.parent}):{},data.childs=this.tevepNodeGetAll({parent:data.nodeId}),data.tevep=this.tevep,this.$options.methods)data[t]=this.$options.methods[t];return data},compNavItems:function(){return[{title:"Princípios",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/principios/"),query:this.$route.query},children:[]},{title:"Fundamentos",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/utilidades/"),query:this.$route.query},children:[{title:"Utilidades",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/utilidades/"),query:this.$route.query},children:[]},{title:"Inerências",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/inerencias/"),query:this.$route.query},children:[]},{title:"Expectativas",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/expectativas/"),query:this.$route.query},children:[]},{title:"Inovações",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/inovacoes/"),query:this.$route.query},children:[]},{title:"Logística",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/logistica/"),query:this.$route.query},children:[]},{title:"Relevância",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/relevancia/"),query:this.$route.query},children:[]},{title:"Complexidade",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/complexidade/"),query:this.$route.query},children:[]}]},{title:"Cesaq",icon:o(494),to:{path:"/tevep/".concat(this.$route.params.id,"/custo/"),query:this.$route.query},children:[{title:"Custo",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/custo/"),query:this.$route.query},children:[]},{title:"Entrega",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/entrega/"),query:this.$route.query},children:[]},{title:"Segurança",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/seguranca/"),query:this.$route.query},children:[]},{title:"Atendimento",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/atendimento/"),query:this.$route.query},children:[]},{title:"Qualidade",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/qualidade/"),query:this.$route.query},children:[]}]},{title:"Material",icon:o(495),to:{path:"/tevep/".concat(this.$route.params.id,"/material/"),query:this.$route.query},children:[{title:"Material",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/material/"),query:this.$route.query},children:[]},{title:"Máquina",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/maquina/"),query:this.$route.query},children:[]},{title:"Mão de obra",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/mao-de-obra/"),query:this.$route.query},children:[]},{title:"Meio ambiente",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/meio-ambiente/"),query:this.$route.query},children:[]},{title:"Método",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/metodo/"),query:this.$route.query},children:[]}]},{title:"RUT",icon:o(496),to:{path:"/tevep/".concat(this.$route.params.id,"/rut/"),query:this.$route.query},children:[]}]}},mounted:function(){this.tevepLoad()}},r=(o(497),o(14)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{margin:"-30px 0px 0px -30px"}},[t.loading?o("div",{staticClass:"bg-white shadow-sm m-2 p-2"},[o("i",{staticClass:"fas fa-spin fa-spinner"}),t._v(" Carregando")]):o("div",[0==t.$route.params.id||t.tevep.id?o("ui-form",{attrs:{method:"post",action:"/api/tevep/store/"},on:{success:function(e){return t.success(e)}},model:{value:t.tevep,callback:function(e){t.tevep=e},expression:"tevep"}},[o("div",{staticClass:"d-flex",staticStyle:{overflow:"auto"}},[o("div",{staticClass:"bg-dark text-white",staticStyle:{height:"calc(100vh - 160px)"}},[o("ul",{staticClass:"tevep-nav"},t._l(t.compNavItems,(function(i){return o("li",[o("nuxt-link",{staticClass:"d-block text-white",class:{"tevep-nav-active":i.to.path==t.$route.path},attrs:{to:i.to}},[i.icon?o("img",{attrs:{src:i.icon,alt:""}}):o("span",{domProps:{innerHTML:t._s(i.title)}})]),t._v(" "),o("ul",t._l(i.children,(function(e){return o("li",[o("nuxt-link",{staticClass:"d-block text-white",class:{"tevep-nav-active":e.to.path==t.$route.path},attrs:{to:e.to},domProps:{innerHTML:t._s(e.title)}})],1)})),0)],1)})),0)]),t._v(" "),o("div",{staticClass:"flex-grow-1"},[o("div",{staticStyle:{height:"calc(100vh - 160px)","min-width":"1000px",overflow:"auto"}},[1==t.$route.matched.length?o("div",{staticClass:"text-muted p-2"},[o("nuxt-child-default",t._b({},"nuxt-child-default",t.compBind,!1,!0))],1):t._e(),t._v(" "),o("nuxt-child",t._b({staticClass:"p-1"},"nuxt-child",t.compBind,!1,!0))],1)])]),t._v(" "),o("div",{staticClass:"bg-white shadow-sm p-2 text-right"},[o("nuxt-link",{staticClass:"btn btn-link float-left",attrs:{to:"/tevep/"}},[t._v("Voltar")]),t._v(" "),o("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("\r\n                    Salvar\r\n                ")])],1)]):o("div",{staticClass:"bg-white shadow-sm m-2 p-2"},[o("div",[t._v("Este projeto não existe.")]),t._v(" "),o("nuxt-link",{attrs:{to:"/tevep/"}},[t._v("Voltar")])],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiForm:o(428).default})}}]);