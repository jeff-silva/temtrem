(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{379:function(t,e,o){"use strict";o.r(e);var r={props:{value:{default:function(){return{}}},method:{default:"post"},action:{default:"api"}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)},submit:function(){var t=this,e=this.$axios[this.method],o="get"==this.method?{params:this.props.value}:this.props.value;this.loading='<i class="fa fa-fw fa-spin fa-spinner"></i>',this.responseSuccess=!1,this.responseErrorMessage=!1,this.responseErrorFields={},e(this.action,o).then((function(e){t.loading="",t.responseSuccess=e.data,t.$emit("success",t.responseSuccess)})).catch((function(e){for(var i in t.loading="",t.responseErrorMessage=e.response.data.message||"Erro",t.responseErrorFields=e.response.data.fields||{},t.responseErrorFields)Array.isArray(t.responseErrorFields[i])&&(t.responseErrorFields[i]=t.responseErrorFields[i].join("<br>"));t.$emit("error",t.responseErrorFields)}))}},data:function(){return{loading:"",responseSuccess:!1,responseErrorMessage:!1,responseErrorFields:{},props:Object.assign({},this.$props)}}},n=o(11),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{staticClass:"ui-form",attrs:{method:t.method,action:t.action},on:{submit:function(e){return e.preventDefault(),t.submit()}}},[t.responseSuccess&&(t.$slots.success||t.$scopedSlots.success)?o("div",{staticClass:"alert alert-success"},[t._t("success",null,{response:t.responseSuccess})],2):t._e(),t._v(" "),t.responseErrorMessage?t._t("error",[t.responseErrorMessage?o("div",{staticClass:"alert alert-danger",domProps:{innerHTML:t._s(t.responseErrorMessage)}}):t._e()],{errorMessage:t.responseErrorMessage,fields:t.responseErrorFields}):t._e(),t._v(" "),t._t("default",null,{loading:t.loading,error:t.responseErrorFields,errorMessage:t.responseErrorMessage,success:t.responseSuccess})],2)}),[],!1,null,null,null);e.default=component.exports},385:function(t,e,o){var content=o(421);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("9ad8599e",content,!0,{sourceMap:!1})},420:function(t,e,o){"use strict";var r=o(385);o.n(r).a},421:function(t,e,o){(e=o(38)(!1)).push([t.i,".ui-actions-fixed{position:fixed;bottom:0;left:0;width:100%;z-index:999;box-shadow:0 -3px 3px -2px rgb(0 0 0/10%)!important}.ui-actions .d-flex>*{flex-grow:1}.ui-actions .btn{border-radius:0!important}",""]),t.exports=e},427:function(t,e,o){"use strict";o.r(e);o(420);var r=o(11),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui-actions"},[e("br"),e("br"),this._v(" "),e("div",{staticClass:"ui-actions-fixed bg-white text-center text-md-right"},[e("div",{staticClass:"d-flex d-md-block p-md-1"},[this._t("default")],2)])])}),[],!1,null,null,null);e.default=component.exports},476:function(t,e,o){var content=o(533);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("0326657b",content,!0,{sourceMap:!1})},529:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAbBAMAAADv6ZCpAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACRQTFRFAAAA////////////////////////////////////////////tAmN6QAAAAx0Uk5TAP+2HtNBZ4uv2pP4x3VCgAAAAKFJREFUeJyFkMsNwkAMRG2UCImTRyh8jnRAK9sBdEALdEAplMh4P95kL8wl3peMZ7IiVSqDbiPAf3DfnifYFug8AhlAkmOd5rLMIuYJ6kygySdiRdeibvRA/smOj332KUpPArxKAnImJMrh8shf9ip5XJc/cUdaOlCbwNX9BlKJSgGuPCu7WjgO/t4C0O2x+LYlVgPxro5WoF1jWFdT00fkB5/UDAo80kg/AAAAAElFTkSuQmCC"},530:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcBAMAAACE1hKaAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACRQTFRFAAAA////////////////////////////////////////////tAmN6QAAAAx0Uk5TAP9ntpMe+NqLQa/TPMBwmgAAALxJREFUeJxlUcENwjAMvCAhQHxiISCFFyN0hG7QbsAKbNBuABswKj67bioRKdGdc/bZCeBLRHKFSIKNOE0ndHkgcEHqKSG6GH/pns6WiDhd2rle9y7Xe7sTNyLcSj8nqfEbe9rrVcOYaoes8SS5NXExZSvfKAGrXGaf4FJ9bouzc09TnEaLUfaQQvvCOLvQ+e/IBqwt6zXmxyEGiAcKPmEZePUK/5zmK26Dylj5IJx4qQ98GvuVK9br+OT5A7gjDytOCcVPAAAAAElFTkSuQmCC"},531:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAmBAMAAACxJE+eAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAB5QTFRFAAAA////////////////////////////////////JHyblQAAAAp0Uk5TAP9ni0HTHq+TMH7WDE0AAACoSURBVHicnZJBDsIwDARtkEC9eaVyh5/wlJ76j/68dhxBbBepwoeomewmm7hEVoxWlOsFyDh3BQfGvhKZza5pPxSrM7wjUw3nKMqQrGauibnKVPiourl6ITleC3KQpTAs5W7tDpfIPFw09zfNJ1gtQfejR38UWlvtqSDeeyHfuzLJrE96Q/pwr2z0DozO6A7P0DZCgE2H74K5bYs1MU0735D+mun5+dwBYh0PVJL5GFsAAAAASUVORK5CYII="},532:function(t,e,o){"use strict";var r=o(476);o.n(r).a},533:function(t,e,o){(e=o(38)(!1)).push([t.i,".tevep-tab{margin:-30px 0 0 -30px}.tevep-tab .alert{margin:0}ul.tevep-nav *{transition:all .2s ease}ul.tevep-nav{list-style-type:none;padding:0;margin:0;width:150px}ul.tevep-nav>li{position:relative}ul.tevep-nav>li>a{display:block;text-align:center}ul.tevep-nav>li:hover>a,ul.tevep-nav>li>a.tevep-nav-active,ul.tevep-nav>li>a:active{background:hsla(0,0%,100%,.13333)}ul.tevep-nav>li>a>img{position:relative;height:70px;margin:10px}ul.tevep-nav>li>a>span{display:block;padding:25px 0}ul.tevep-nav>li>ul{list-style-type:none;padding:0;margin:0;position:absolute;top:0;left:100%;width:150px;background:var(--dark);visibility:hidden;opacity:0;z-index:10}ul.tevep-nav>li>ul>li>a{display:block;padding:5px}ul.tevep-nav>li>ul>li:hover>a,ul.tevep-nav>li>ul>li>a.tevep-nav-active{background:#fff;color:var(--dark)!important}ul.tevep-nav>li:hover>ul{visibility:visible;opacity:1}",""]),t.exports=e},591:function(t,e,o){"use strict";o.r(e);o(24),o(25),o(9),o(46);var r={layout:"admin",middleware:"auth",components:{Principios:o(495).default},data:function(){return{loading:!1,tevep:this.tevepDefault()}},methods:{success:function(t){this.$swal("Sucesso","Dados salvos","success"),this.$router.push({path:this.$route.path.replace("/0/","/".concat(t.id,"/")),query:{node:this.$route.query.node}})},uuid:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"xxxxxxxxxx";return t+e.replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))},tevepInit:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.$set(this,"tevep",this.tevepDefault(e));var o=Object.assign({},this.$route.query);o.node||(o.node=this.tevep.nodes[0].id),this.$router.push({query:o}),o.pingpong&&this.$axios.post("/api/tevep/".concat(this.tevep.id,"/pingpong-confirm/").concat(o.pingpong)).then((function(e){delete o.pingpong,t.$router.push({query:o}),t.tevep=t.tevepDefault(e.data||{})}))},tevepLoad:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];0!=this.$route.params.id?(this.loading=e,this.$axios.get("/api/tevep/find/".concat(this.$route.params.id)).then((function(e){t.loading=!1,t.tevepInit(e.data||{})}))):this.tevepInit()},tevepTitle:function(t){t.parent||(this.tevep.title=t.title,this.tevep.date_start=t.date_start,this.tevep.date_final=t.date_final)},tevepDefault:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(e=Object.assign({user_id:this.$auth.user.id,title:"",date_start:"",date_final:"",nodes:[],pingpongs:[]},e)).user_id=e.user_id||this.$auth.user.id,0==e.nodes.length&&e.nodes.push(this.tevepNodeDefault()),e.nodes=e.nodes.map((function(e){return t.tevepNodeDefault(e)})),e},tevepNodeDefault:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if((t=Object.assign({id:this.uuid("node-"),parent:!1,title:"",level:0,date_start:"",date_final:"",tempos:[],pilotos:[],pessoas:[],espacos:[],utilidades:[],inerencias:[],expectativas:[],inovacoes:[],logisticas:[],relevancias:[],complecidades:[],custos:[],entregas:[],segurancas:[],atendimentos:[],qualidades:[],materiais:[],maquinas:[],mao_de_obra:[],meio_ambientes:[],metodos:[]},t)).tempos.length<7)for(var e=1;e<=7;e++)t.tempos[e-1]||t.tempos.push({id:this.uuid("t"),title:"T".concat(e),date_start:"",date_final:""});return 0==t.espacos.length&&t.espacos.push({id:this.uuid("e"),title:""}),0==t.pilotos.length&&t.pilotos.push({id:this.uuid("p"),title:""}),0==t.pessoas.length&&t.pessoas.push({id:this.uuid("p"),title:""}),t},tevepNodeAdd:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=this.tevepNodeDefault(t),this.tevep.nodes.push(t)},tevepNodeRemove:function(){},tevepNodeGetAll:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.tevep.nodes||[];return["id","parent","type"].forEach((function(o){t[o]&&(e=e.filter((function(e){return e[o]==t[o]})))})),e},tevepNodeGet:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.tevepNodeGetAll(t);return e[0]?e[0]:{}},tevepNodeRut:function(){return{dates:[]}}},computed:{compBind:function(){var data={};for(var t in data.nodeId=this.$route.query.node,data.node=this.tevepNodeGet({id:data.nodeId}),data.root=this.tevepNodeGet({parent:!1}),data.parent=data.node.parent?this.tevepNodeGet({id:data.node.parent}):{},data.childs=this.tevepNodeGetAll({parent:data.nodeId}),data.rut=this.tevepNodeRut(),data.tevep=this.tevep,this.$options.methods)data[t]=this.$options.methods[t];return data},compNavItems:function(){return[{title:"Princípios",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/principios/"),query:this.$route.query},children:[]},{title:"Fundamentos",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/utilidades/"),query:this.$route.query},children:[{title:"Utilidades",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/utilidades/"),query:this.$route.query},children:[]},{title:"Inerências",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/inerencias/"),query:this.$route.query},children:[]},{title:"Expectativas",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/expectativas/"),query:this.$route.query},children:[]},{title:"Inovações",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/inovacoes/"),query:this.$route.query},children:[]},{title:"Logística",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/logistica/"),query:this.$route.query},children:[]},{title:"Relevância",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/relevancia/"),query:this.$route.query},children:[]},{title:"Complexidade",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/complexidade/"),query:this.$route.query},children:[]}]},{title:"Cesaq",icon:o(529),to:{path:"/tevep/".concat(this.$route.params.id,"/custo/"),query:this.$route.query},children:[{title:"Custo",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/custo/"),query:this.$route.query},children:[]},{title:"Entrega",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/entrega/"),query:this.$route.query},children:[]},{title:"Segurança",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/seguranca/"),query:this.$route.query},children:[]},{title:"Atendimento",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/atendimento/"),query:this.$route.query},children:[]},{title:"Qualidade",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/qualidade/"),query:this.$route.query},children:[]}]},{title:"Material",icon:o(530),to:{path:"/tevep/".concat(this.$route.params.id,"/material/"),query:this.$route.query},children:[{title:"Material",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/material/"),query:this.$route.query},children:[]},{title:"Máquina",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/maquina/"),query:this.$route.query},children:[]},{title:"Mão de obra",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/mao-de-obra/"),query:this.$route.query},children:[]},{title:"Meio ambiente",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/meio-ambiente/"),query:this.$route.query},children:[]},{title:"Método",icon:!1,to:{path:"/tevep/".concat(this.$route.params.id,"/metodo/"),query:this.$route.query},children:[]}]},{title:"RUT",icon:o(531),to:{path:"/tevep/".concat(this.$route.params.id,"/rut/"),query:this.$route.query},children:[]}]}},mounted:function(){this.tevepLoad()}},n=(o(532),o(11)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tevep-tab"},[t.loading?o("div",{staticClass:"bg-white shadow-sm m-2 p-2"},[o("i",{staticClass:"fas fa-spin fa-spinner"}),t._v(" Carregando")]):o("div",[0==t.$route.params.id||t.tevep.id?o("ui-form",{attrs:{method:"post",action:"/api/tevep/save/"},on:{success:function(e){return t.success(e)}},model:{value:t.tevep,callback:function(e){t.tevep=e},expression:"tevep"}},[o("div",{staticClass:"d-flex",staticStyle:{overflow:"auto"}},[o("div",{staticClass:"bg-dark text-white",staticStyle:{height:"calc(100vh - 110px)"}},[o("ul",{staticClass:"tevep-nav"},t._l(t.compNavItems,(function(i){return o("li",[o("nuxt-link",{staticClass:"d-block text-white",class:{"tevep-nav-active":i.to.path==t.$route.path},attrs:{to:i.to}},[i.icon?o("img",{attrs:{src:i.icon,alt:""}}):o("span",{domProps:{innerHTML:t._s(i.title)}})]),t._v(" "),o("ul",t._l(i.children,(function(e){return o("li",[o("nuxt-link",{staticClass:"d-block text-white",class:{"tevep-nav-active":e.to.path==t.$route.path},attrs:{to:e.to},domProps:{innerHTML:t._s(e.title)}})],1)})),0)],1)})),0)]),t._v(" "),o("div",{staticClass:"flex-grow-1"},[o("div",{staticStyle:{height:"calc(100vh - 110px)","min-width":"1000px",overflow:"auto"}},[1==t.$route.matched.length?o("div",{staticClass:"text-muted p-2"},[o("principios",t._b({},"principios",t.compBind,!1,!0))],1):t._e(),t._v(" "),o("nuxt-child",t._b({staticClass:"p-1"},"nuxt-child",t.compBind,!1,!0))],1)])]),t._v(" "),o("ui-actions",[o("nuxt-link",{staticClass:"btn btn-link",attrs:{to:"/tevep/"}},[t._v("Voltar")]),t._v(" "),o("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("\r\n                    Salvar\r\n                ")])],1)],1):o("div",{staticClass:"bg-white shadow-sm m-2 p-2"},[o("div",[t._v("Este projeto não existe.")]),t._v(" "),o("nuxt-link",{attrs:{to:"/tevep/"}},[t._v("Voltar")])],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiActions:o(427).default,UiForm:o(379).default})}}]);