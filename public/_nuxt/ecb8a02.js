(window.webpackJsonp=window.webpackJsonp||[]).push([[59,9,12,23,24,27,44,49],{603:function(e,t,o){"use strict";o.r(t);var r={props:{horizontal:{default:!1},label:{default:""},help:{default:""},error:{default:""}}},l=o(5),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"form-group row no-gutters mb-3"},[e.horizontal?[o("label",[e._v(e._s(e.label))]),e._v(" "),e._t("default"),e._v(" "),e.help?o("small",{staticClass:"d-block text-muted",domProps:{innerHTML:e._s(e.help)}}):e._e(),e._v(" "),e.error?o("small",{staticClass:"d-block text-danger",domProps:{innerHTML:e._s(e.error)}}):e._e()]:[o("div",{staticClass:"col-12 col-md-4 col-lg-3 p-2 px-0 px-md-2"},[o("div",[e._v(e._s(e.label))]),e._v(" "),e.help?o("small",{staticClass:"d-block text-muted",domProps:{innerHTML:e._s(e.help)}}):e._e()]),e._v(" "),o("div",{staticClass:"col-12 col-md-8 col-lg-9"},[e._t("default"),e._v(" "),e.error?o("small",{staticClass:"d-block text-danger mt-1 mx-1"},[e._v(e._s(e.error))]):e._e()],2)]],2)}),[],!1,null,null,null);t.default=component.exports},604:function(e,t,o){var content=o(610);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(41).default)("615b391c",content,!0,{sourceMap:!1})},607:function(e,t,o){var content=o(618);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(41).default)("8ea61a60",content,!0,{sourceMap:!1})},609:function(e,t,o){"use strict";o(604)},610:function(e,t,o){var r=o(40)(!1);r.push([e.i,".ui-file{position:relative}",""]),e.exports=r},612:function(e,t,o){"use strict";o.r(t);var r={props:{value:Object},data:function(){return{products:{loading:!1,params:{business_id:this.value.business_id,perpage:99},results:{data:[]}}}},methods:{loadProducts:function(){var e=this;this.products.loading=!0;var t=this.products.params;this.$axios.get("/api/temtrem-product/search",{params:t}).then((function(t){e.products.loading=!1,e.products.results=t.data}))}},mounted:function(){this.loadProducts()}},l=o(5),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e.value.cover&&e.value.cover.url?o("img",{staticStyle:{width:"100%",height:"150px","object-fit":"cover"},attrs:{src:e.value.cover.url,alt:""}}):e._e(),e._v(" "),o("div",{staticClass:"p-3"},[o("h1",[e._v(e._s(e.value.name))]),e._v(" "),o("div",{domProps:{innerHTML:e._s(e.value.description)}}),e._v(" "),o("small",{staticClass:"text-muted d-block"},[o("i",{staticClass:"fas fa-map-marker"}),e._v("  \r\n            "+e._s(e.value.route)+" "+e._s(e.value.number)+", "+e._s(e.value.district)+",\r\n            "+e._s(e.value.city)+" "+e._s(e.value.state)+",\r\n        ")]),e._v(" "),o("div",{staticClass:"mt-3"},e._l(e.products.results.data,(function(p){return o("div",[o("div",{staticClass:"d-flex align-items-center bg-white shadow-sm mb-2"},[p.cover&&p.cover.url?o("div",{staticClass:"p-1"},[o("img",{staticStyle:{width:"50px",height:"50px","object-fit":"cover"},attrs:{src:p.cover.url,alt:""}})]):e._e(),e._v(" "),o("div",{staticClass:"flex-grow-2 p-3"},[o("div",{staticClass:"font-weight-bold"},[e._v(e._s(p.name))])])])])})),0)])])}),[],!1,null,null,null);t.default=component.exports},613:function(e,t,o){"use strict";o.r(t);o(32),o(20),o(26),o(45),o(19),o(46);var r=o(12);o(73),o(42),o(7),o(62),o(21);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function n(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var c={props:{value:{default:Object}},watch:{$props:{deep:!0,handler:function(e){this.props=JSON.parse(JSON.stringify(e)),this.props.value=this.valueDefault(this.props.value)}}},data:function(){return{props:JSON.parse(JSON.stringify(this.$props)),showModal:!1,focused:!1}},methods:{emitValue:function(){this.$emit("input",this.props.value)},valueDefault:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n({name:"",filename:"",size:0,type:"",url:""},e=JSON.parse(JSON.stringify(e||{})))},handleFile:function(){var e=this;Object.assign(document.createElement("input"),{type:"file",onchange:function(t){var o=t.target.files[0],r=new FileReader;r.readAsDataURL(o),r.onload=function(){e.props.value={name:o.name.split(".").slice(0,-1).join("."),filename:o.name,size:o.size,type:o.type,url:r.result},e.emitValue()}}}).click()},handleFocused:function(e){this.focused=this.$el.contains(e.target)}},computed:{computedIcon:function(){var e="fa-upload";return this.props.value&&this.props.value.type&&(e="audio"==(e=this.props.value.type.split("/")[0])?"fa-file-audio":"image"==e?"fa-image":"fa-file"),e}},mounted:function(){document.addEventListener("click",this.handleFocused)}},d=(o(609),o(5)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"ui-file"},[o("div",{staticClass:"input-group form-control p-0 rounded-0"},[o("div",{staticClass:"input-group-prepend"},[o("div",{staticClass:"input-group-btn"},[o("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(t){return e.handleFile()}}},[o("i",{staticClass:"fas fa-upload"})])])]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value.name,expression:"props.value.name"}],staticClass:"form-control border-0",attrs:{type:"text",placeholder:"Descrição"},domProps:{value:e.props.value.name},on:{change:function(t){return e.emitValue()},input:function(t){t.target.composing||e.$set(e.props.value,"name",t.target.value)}}}),e._v(" "),o("div",{staticClass:"input-group-append"},[o("div",{staticClass:"input-group-btn"},[e.props.value.url?o("button",{staticClass:"btn btn-danger rounded-0 border border-danger text-white",attrs:{type:"button"},on:{click:function(t){e.props.value=e.valueDefault()}}},[o("i",{staticClass:"fas fa-times"})]):e._e()])])]),e._v(" "),o("el-collapse-transition",[e.focused?o("div",[o("div",{staticClass:"input-group"},[o("div",{staticClass:"input-group-prepend"},[o("div",{staticClass:"input-group-text rounded-0"},[e._v("URL:")])]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value.url,expression:"props.value.url"}],staticClass:"form-control rounded-0 border-top-0",attrs:{type:"text",placeholder:"URL"},domProps:{value:e.props.value.url},on:{change:function(t){return e.emitValue()},input:function(t){t.target.composing||e.$set(e.props.value,"url",t.target.value)}}})])]):e._e()]),e._v(" "),o("el-collapse-transition",[e.props.value&&e.props.value.url?o("div",{staticClass:"border border-top-0"},[o("img",{staticStyle:{width:"100%","max-height":"200px","object-fit":"contain"},attrs:{src:e.props.value.url,alt:e.props.value.name}})]):e._e()])],1)}),[],!1,null,null,null);t.default=component.exports},617:function(e,t,o){"use strict";o(607)},618:function(e,t,o){var r=o(40)(!1);r.push([e.i,".ui-html .ck-editor{border:1px solid #eee}.ui-html .ck-editor__editable,.ui-html .ck-toolbar{border:none!important;box-shadow:none!important}",""]),e.exports=r},624:function(e,t,o){"use strict";o.r(t);o(61);var r=o(631),l=o.n(r),n={props:{value:{default:""}},watch:{$props:{deep:!0,handler:function(e){var t=this;setTimeout((function(){t.props=Object.assign({},e),t.ckeditor&&!t.$el.contains(document.activeElement)&&t.ckeditor.setData(t.props.value||"")}),10)}}},data:function(){return{ckeditor:!1,props:Object.assign({},this.$props)}},methods:{ckeditorInit:function(){var e=this,t={extraPlugins:[],codeBlock:{language:"javascript"},width:this.$el.offsetWidth};l.a.create(this.$refs.textarea,t).then((function(t){e.ckeditor=t,t.setData(e.props.value||""),t.model.document.on("change:data",(function(){e.$el.contains(document.activeElement)&&(e.props.value=t.getData(),e.$emit("input",e.props.value))}))}))}},mounted:function(){this.ckeditorInit()}},c=(o(617),o(5)),component=Object(c.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"ui-html"},[t("textarea",{ref:"textarea"})])}),[],!1,null,null,null);t.default=component.exports},683:function(e,t,o){"use strict";o.r(t);o(407);var r={name:"ui-user",props:{value:{default:"",type:[Number,String,Array]},placeholder:{default:"Selecionar"},multiple:{default:!1}},watch:{$props:{deep:!0,handler:function(e){this.props=JSON.parse(JSON.stringify(e)),this.remoteSearch("",this.props.value)}}},methods:{emitValue:function(){this.$emit("input",this.props.value),this.$emit("change",this.props.value)},remoteSearch:function(){var e=this,q=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.$axios.get("/api/user/search",{params:{q:q,id:t}}).then((function(t){e.items=t.data.data}))}},data:function(){return{props:JSON.parse(JSON.stringify(this.$props)),items:[]}}},l=o(5),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-select",{staticClass:"form-control p-0",attrs:{multiple:e.props.multiple,filterable:"",remote:"",placeholder:e.props.placeholder,"reserve-keyword":"","remote-method":e.remoteSearch},on:{change:function(t){return e.emitValue()}},model:{value:e.props.value,callback:function(t){e.$set(e.props,"value",t)},expression:"props.value"}},e._l(e.items,(function(i){return o("el-option",{key:i.id,attrs:{value:i.id,label:i.name||i.id}},[e._v(e._s(i.name||i.id))])})),1)],1)}),[],!1,null,null,null);t.default=component.exports},684:function(e,t,o){"use strict";o.r(t);o(407);var r={name:"ui-temtrem-category",props:{value:{default:"",type:[Number,String,Array]},placeholder:{default:"Selecionar"},multiple:{default:!1}},watch:{$props:{deep:!0,handler:function(e){this.props=JSON.parse(JSON.stringify(e)),this.remoteSearch("",this.props.value)}}},methods:{emitValue:function(){this.$emit("input",this.props.value),this.$emit("change",this.props.value)},remoteSearch:function(){var e=this,q=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.$axios.get("/api/temtrem-category/search",{params:{q:q,id:t}}).then((function(t){e.items=t.data.data}))}},data:function(){return{props:JSON.parse(JSON.stringify(this.$props)),items:[]}}},l=o(5),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-select",{staticClass:"form-control p-0",attrs:{multiple:e.props.multiple,filterable:"",remote:"",placeholder:e.props.placeholder,"reserve-keyword":"","remote-method":e.remoteSearch},on:{change:function(t){return e.emitValue()}},model:{value:e.props.value,callback:function(t){e.$set(e.props,"value",t)},expression:"props.value"}},e._l(e.items,(function(i){return o("el-option",{key:i.id,attrs:{value:i.id,label:i.name||i.id}},[e._v(e._s(i.name||i.id))])})),1)],1)}),[],!1,null,null,null);t.default=component.exports},685:function(e,t,o){"use strict";o.r(t);o(73),o(7),o(27),o(61),o(36);var r={props:{value:Object},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},computed:{formattedAddress:function(){var e=this.props.value,t=[];return e.route&&t.push(e.route),e.number&&t.push("Nº ".concat(e.number)),e.complement&&t.push(e.complement),e.zipcode&&t.push("CEP ".concat(e.zipcode)),e.district&&t.push(e.district),e.city&&t.push(e.city),e.state&&t.push(e.state),t.join(", ")},mapBindComp:function(){return!!(this.props.value&&this.props.value.lat&&this.props.value.lng)&&{zoom:16,center:[parseFloat(this.props.value.lat),parseFloat(this.props.value.lng)]}}},methods:{emitValue:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)},setValue:function(e){for(var i in e)this.props.value[i]=e[i];this.setStateCodeFromName(),this.emitValue()},placeToValue:function(e){return{lat:e.lat,lng:e.lon,route:e.address.road||"",number:"",complement:"",zipcode:e.address.postcode,district:e.address.suburb,city:e.address.city,state:e.address.state,state_code:"",country:e.address.country,country_code:e.address.country_code.toUpperCase()}},searchAddresses:function(){var e=this;this._searchAddressesTimeout&&clearTimeout(this._searchAddressesTimeout),this.search.loading=!0,this._searchAddressesTimeout=setTimeout((function(){e.$axios.get("https://nominatim.openstreetmap.org/search.php?format=json&addressdetails=1&extratags=1&namedetails=1&limit=10&q=".concat(e.search.params.q)).then((function(t){e.search.loading=!1,e.search.results=t.data.map((function(t){return e.placeToValue(t)}))})).catch((function(t){e.search.loading=!1}))}),1e3)},setStateCodeFromName:function(){if(this.props.value.state){this.props.value.state_code={Acre:"AC",Alagoas:"AL","Amapá":"AP",Amazonas:"AM",Bahia:"BA","Ceará":"CE","Distrito Federal":"DF","Espírito Santo":"ES","Goiás":"GO","Maranhão":"MA","Mato Grosso":"MT","Mato Grosso do Sul":"MS","Minas Gerais":"MG","Pará":"PA","Paraíba":"PB","Paraná":"PR",Pernambuco:"PE","Piauí":"PI","Rio de Janeiro":"RJ","Rio Grande do Norte":"RN","Rio Grande do Sul":"RS","Rondônia":"RO",Roraima:"RR","Santa Catarina":"SC","São Paulo":"SP",Sergipe:"SE",Tocantins:"TO"}[this.props.value.state]||"",this.emitValue()}},osmReverse:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=Object.assign({format:"json",addressdetails:1,extratags:1,namedetails:1,limit:10,lat:0,lon:0},t),this.loading=!0,this.$axios.get("https://nominatim.openstreetmap.org/reverse",{params:t}).then((function(t){var o=e.placeToValue(t.data);e.setValue(o)}))}},data:function(){var data={search:{loading:!1,params:{q:""},results:[]},loading:!1,searchResults:[]};return data.props=Object.assign({},this.$props),data.props.value=Object.assign({lat:0,lng:0,route:"",number:"",complement:"",zipcode:"",district:"",city:"",state:"",st:"",country:"",co:""},data.props.value),data}},l=o(5),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"ui-address"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-lg-8"},[o("div",{staticClass:"input-group form-control p-0"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.search.params.q,expression:"search.params.q"}],staticClass:"form-control border-0",attrs:{type:"text",autocomplete:"off-none",placeholder:"Busca"},domProps:{value:e.search.params.q},on:{keyup:function(t){return e.searchAddresses()},input:function(t){t.target.composing||e.$set(e.search.params,"q",t.target.value)}}}),e._v(" "),o("div",{staticClass:"input-group-append"},[o("div",{staticClass:"input-group-btn border-0"},[o("button",{staticClass:"btn rounded-0",attrs:{type:"button"},on:{click:function(t){return e.osmSearch({q:e.props.value.zipcode},!1)}}},[e.search.loading?o("i",{staticClass:"fa fa-fw fa-spin fa-spinner"}):o("i",{staticClass:"fa fa-fw fa-search"})])])])]),e._v(" "),o("div",{staticStyle:{position:"relative"}},[o("div",{staticClass:"list-group list-group-flush bg-white shadow-sm",staticStyle:{position:"absolute",width:"100%"}},e._l(e.search.results,(function(t){return o("a",{staticClass:"list-group-item",attrs:{href:"javascript:;"},on:{click:function(o){e.setValue(t),e.search.params.q="",e.search.results=[]}}},[e._v("\r\n                        "+e._s(t.route)+", "+e._s(t.district)+" - "+e._s(t.city)+"/"+e._s(t.state)+"\r\n                    ")])})),0)])]),e._v(" "),o("div",{staticClass:"py-0 col-12"}),e._v(" "),o("div",{staticClass:"pt-0 col-12 col-md-8"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value.route,expression:"props.value.route"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Rua"},domProps:{value:e.props.value.route},on:{keyup:function(t){return e.emitValue()},input:function(t){t.target.composing||e.$set(e.props.value,"route",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"pt-0 col-6 col-md-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value.number,expression:"props.value.number"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nº"},domProps:{value:e.props.value.number},on:{keyup:function(t){return e.emitValue()},input:function(t){t.target.composing||e.$set(e.props.value,"number",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"pt-0 col-6 col-md-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value.complement,expression:"props.value.complement"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Complemento"},domProps:{value:e.props.value.complement},on:{keyup:function(t){return e.emitValue()},input:function(t){t.target.composing||e.$set(e.props.value,"complement",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"pt-0 col-12 col-md-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value.zipcode,expression:"props.value.zipcode"},{name:"mask",rawName:"v-mask",value:"#####-###",expression:"'#####-###'"}],staticClass:"form-control",attrs:{type:"text",placeholder:"CEP"},domProps:{value:e.props.value.zipcode},on:{keyup:function(t){return e.emitValue()},input:function(t){t.target.composing||e.$set(e.props.value,"zipcode",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"pt-0 col-12 col-md-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value.city,expression:"props.value.city"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Cidade"},domProps:{value:e.props.value.city},on:{keyup:function(t){return e.emitValue()},input:function(t){t.target.composing||e.$set(e.props.value,"city",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"pt-0 col-12 col-md-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value.district,expression:"props.value.district"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Bairro"},domProps:{value:e.props.value.district},on:{keyup:function(t){return e.emitValue()},input:function(t){t.target.composing||e.$set(e.props.value,"district",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"pt-0 col-6 col-md-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value.state,expression:"props.value.state"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Estado"},domProps:{value:e.props.value.state},on:{keyup:function(t){return e.emitValue()},input:function(t){t.target.composing||e.$set(e.props.value,"state",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"pt-0 col-6 col-md-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value.country,expression:"props.value.country"}],staticClass:"form-control",attrs:{type:"text",placeholder:"País"},domProps:{value:e.props.value.country},on:{keyup:function(t){return e.emitValue()},input:function(t){t.target.composing||e.$set(e.props.value,"country",t.target.value)}}})])]),e._v(" "),e.mapBindComp?o("l-map",e._b({staticClass:"mt-2",staticStyle:{height:"200px",overflow:"hidden","z-index":"1"}},"l-map",e.mapBindComp,!1),[o("l-tile-layer",{attrs:{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}}),e._v(" "),o("l-marker",{attrs:{"lat-lng":e.mapBindComp.center,draggable:!0},on:{moveend:function(t){return e.osmReverse({lat:t.sourceTarget._latlng.lat,lon:t.sourceTarget._latlng.lng})}}})],1):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},763:function(e,t,o){"use strict";o.r(t);var r={middleware:"auth",layout:"admin",data:function(){return{model:{}}},methods:{successHandler:function(e){this.$swal("","Negócio salva","success"),this.$router.push("/admin/temtrem/business/".concat(e.id))},modelLoad:function(){var e=this;+this.$route.params.id&&this.$axios.get("/api/temtrem-business/find/".concat(this.$route.params.id)).then((function(t){e.model=t.data}))}},mounted:function(){this.modelLoad()}},l=o(5),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("ui-form",{attrs:{action:"/api/temtrem-business/save",method:"post"},on:{success:function(t){return e.successHandler(t)}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.loading,l=t.error;return[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-md-8"},[o("el-tabs",{attrs:{value:"primary",type:"border-card"}},[o("el-tab-pane",{attrs:{label:"Dados do negócio",name:"primary"}},[o("ui-field",{attrs:{label:"Nome",error:l.name}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.model.name,expression:"model.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.model.name},on:{input:function(t){t.target.composing||e.$set(e.model,"name",t.target.value)}}})]),e._v(" "),"admin"==e.$auth.user.type?o("ui-field",{attrs:{label:"Proprietário",error:l.user_id}},[o("ui-user",{model:{value:e.model.user_id,callback:function(t){e.$set(e.model,"user_id",t)},expression:"model.user_id"}})],1):e._e(),e._v(" "),o("ui-field",{attrs:{label:"Categoria",error:l.category_id}},[o("ui-temtrem-category",{model:{value:e.model.category_id,callback:function(t){e.$set(e.model,"category_id",t)},expression:"model.category_id"}})],1),e._v(" "),o("ui-field",{attrs:{label:"Descrição",error:l.description}},[o("ui-html",{model:{value:e.model.description,callback:function(t){e.$set(e.model,"description",t)},expression:"model.description"}})],1),e._v(" "),o("ui-field",{attrs:{label:"Capa",error:l.cover}},[o("ui-file",{model:{value:e.model.cover,callback:function(t){e.$set(e.model,"cover",t)},expression:"model.cover"}})],1)],1),e._v(" "),o("el-tab-pane",{attrs:{label:"Endereço",name:"second"}},[o("ui-field",{attrs:{label:"Endereço"}},[o("el-switch",{staticClass:"mb-3",attrs:{"active-value":1,"inactive-value":0,"active-text":"Comério itinerante"},model:{value:e.model.nomadic,callback:function(t){e.$set(e.model,"nomadic",t)},expression:"model.nomadic"}}),e._v(" "),1==e.model.nomadic?o("div",[e._v("\r\n                                Este comércio é itinerante. Sua localização será atualizada constantemente "),o("br"),e._v("\r\n                                de acordo com a localização do dispositivo.\r\n                            ")]):e._e(),e._v(" "),1!=e.model.nomadic?o("ui-address",{model:{value:e.model,callback:function(t){e.model=t},expression:"model"}}):e._e()],1)],1)],1)],1),e._v(" "),o("div",{staticClass:"col-12 col-md-4"},[o("temtrem-business-profile",{staticClass:"bg-white shadow-sm",model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)]),e._v(" "),o("ui-actions",{staticClass:"mt-5"},[e.model.id?o("nuxt-link",{staticClass:"btn",attrs:{to:"/admin/temtrem/business/"+e.model.id+"/product"}},[e._v("\r\n                Produtos\r\n            ")]):e._e(),e._v(" "),o("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[r?o("span",{domProps:{innerHTML:e._s(r)}}):o("i",{staticClass:"fas fa-fw fa-save"}),e._v(" Salvar\r\n            ")])],1)]}}]),model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiField:o(603).default,UiUser:o(683).default,UiTemtremCategory:o(684).default,UiHtml:o(624).default,UiFile:o(613).default,UiAddress:o(685).default,TemtremBusinessProfile:o(612).default,UiActions:o(404).default,UiForm:o(406).default})}}]);