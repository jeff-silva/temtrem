(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{204:function(t,e,o){var content=o(208);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(31).default)("113bd0ac",content,!0,{sourceMap:!1})},206:function(t,e,o){var content=o(217);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(31).default)("0572079c",content,!0,{sourceMap:!1})},207:function(t,e,o){"use strict";var r=o(204);o.n(r).a},208:function(t,e,o){(e=o(30)(!1)).push([t.i,".ui-address .leaflet-pane{z-index:1!important}.ui-address-search-results-each{border-bottom:1px solid #eee}.ui-address-search-results-each:hover{background:#eee;cursor:pointer}",""]),t.exports=e},210:function(t,e,o){"use strict";o.r(e);var r={props:{value:{default:""},label:{default:""},placeholder:{default:""},type:{default:"text"},imgMaxWidth:{default:800},imgMaxHeight:{default:600},error:{default:""}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)}},data:function(){return{props:Object.assign({},this.$props)}}},l=o(8),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-group"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-md-4 col-lg-3 p-2"},[o("div",[t._v(t._s(t.label))])]),t._v(" "),o("div",{staticClass:"col-12 col-md-8 col-lg-9"},[t.$slots.field?[t._t("field")]:"textarea"==t.type?[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control",domProps:{value:t.props.value},on:{keyup:function(e){return t.emit()},input:function(e){e.target.composing||t.$set(t.props,"value",e.target.value)}}})]:["checkbox"===t.type?o("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control",attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.props.value)?t._i(t.props.value,null)>-1:t.props.value},on:{keyup:function(e){return t.emit()},change:function(e){var o=t.props.value,r=e.target,l=!!r.checked;if(Array.isArray(o)){var n=t._i(o,null);r.checked?n<0&&t.$set(t.props,"value",o.concat([null])):n>-1&&t.$set(t.props,"value",o.slice(0,n).concat(o.slice(n+1)))}else t.$set(t.props,"value",l)}}}):"radio"===t.type?o("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control",attrs:{placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.props.value,null)},on:{keyup:function(e){return t.emit()},change:function(e){return t.$set(t.props,"value",null)}}}):o("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control",attrs:{placeholder:t.placeholder,type:t.type},domProps:{value:t.props.value},on:{keyup:function(e){return t.emit()},input:function(e){e.target.composing||t.$set(t.props,"value",e.target.value)}}})],t._v(" "),t.props.error?o("small",{staticClass:"d-block text-danger",domProps:{innerHTML:t._s(t.props.error)}}):t._e(),t._v(" "),t.$slots.hint?o("small",{staticClass:"text-muted"},[t._t("hint")],2):t._e()],2)])])}),[],!1,null,null,null);e.default=component.exports},213:function(t,e,o){"use strict";o.r(e);o(122),o(25),o(9),o(51);var r,l={props:{value:{default:function(){return{}}}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},computed:{formattedAddress:function(){var t=this.props.value,e=[];return t.route&&e.push(t.route),t.number&&e.push("Nº ".concat(t.number)),t.complement&&e.push(t.complement),t.zipcode&&e.push("CEP ".concat(t.zipcode)),t.district&&e.push(t.district),t.city&&e.push(t.city),t.state&&e.push(t.state),e.join(", ")}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)},selectPlace:function(t){if(0!=Object.keys(t).length){this.props.value=Object.assign(this.props.value,{lat:t.lat?parseFloat(t.lat):0,lng:t.lon?parseFloat(t.lon):0,route:t.address.road,number:"",complement:"",zipcode:t.address.postcode,district:t.address.suburb,city:t.address.city,state:t.address.state,st:{Acre:"AC",Alagoas:"AL","Amapá":"AP",Amazonas:"AM",Bahia:"BA","Ceará":"CE","Distrito Federal":"DF","Espírito Santo":"ES","Goiás":"GO","Maranhão":"MA","Mato Grosso":"MT","Mato Grosso do Sul":"MS","Minas Gerais":"MG","Pará":"PA","Paraíba":"PB","Paraná":"PR",Pernambuco:"PE","Piauí":"PI","Rio de Janeiro":"RJ","Rio Grande do Norte":"RN","Rio Grande do Sul":"RS","Rondônia":"RO",Roraima:"RR","Santa Catarina":"SC","São Paulo":"SP",Sergipe:"SE",Tocantins:"TO"}[t.address.state]||!1,country:t.address.country,co:t.address.country_code.toUpperCase()}),this.$set(this.props,"value",this.props.value),this.$set(this.search,"results",[]),this.emit()}},autocomplete:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e=Object.assign({delay:0,isSearch:!0,type:"zipcode"},e),r&&clearTimeout(r),r=setTimeout((function(){var o={};"address"==e.type?o.q="".concat(t.props.value.route," ").concat(t.props.value.district," ").concat(t.props.value.city).trim():"zipcode"==e.type?o.zipcode=t.props.value.zipcode:"latlng"==e.type&&(o.lat=t.props.value.lat,o.lng=t.props.value.lng),t.$axios.get("/api/addresses/autocomplete/",{params:o}).then((function(o){t.loading=!1,e.isSearch?t.$set(t.search,"results",o.data):t.selectPlace(o.data[0]||{})}))}),e.delay)},getAddressByLatLng:function(t){this.props.value.lat=t.target._latlng.lat,this.props.value.lng=t.target._latlng.lng,this.autocomplete({delay:0,isSearch:!1,type:"latlng"})},documentClickHandle:function(t){this.focused=this.$el.contains(t.target)}},data:function(){var data={loading:!1,focused:!1,search:{params:{q:"",format:"json",addressdetails:1},results:[]}};return data.props=Object.assign({},this.$props),data.props.value=Object.assign({lat:0,lng:0,route:"",number:"",complement:"",zipcode:"",district:"",city:"",state:"",st:"",country:"",co:""},data.props.value),data},mounted:function(){window.addEventListener("click",this.documentClickHandle)},beforeDestroy:function(){window.removeEventListener("click",this.documentClickHandle)}},n=(o(207),o(8)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ui-address",staticStyle:{position:"relative","z-index":"1"}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-8 col-md-8"},[o("div",{staticClass:"input-group form-control border-0 p-0"},[t._m(0),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value.zipcode,expression:"props.value.zipcode"}],staticClass:"form-control border-0",attrs:{type:"text"},domProps:{value:t.props.value.zipcode},on:{keyup:function(e){t.emit(),t.autocomplete({delay:500,isSearch:!1,type:"zipcode"})},input:function(e){e.target.composing||t.$set(t.props.value,"zipcode",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col-12"}),t._v(" "),o("div",{staticClass:"col-12 col-md-8"},[o("div",{staticClass:"input-group form-control border-0 p-0",staticStyle:{height:"auto"}},[t._m(1),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value.route,expression:"props.value.route"}],staticClass:"form-control border-0",attrs:{type:"text",placeholder:"Digite endereço, bairro e cidade para autocompletar"},domProps:{value:t.props.value.route},on:{keyup:function(e){return t.autocomplete({delay:500,isSearch:!0,type:"address"})},change:function(e){return t.emit()},input:function(e){e.target.composing||t.$set(t.props.value,"route",e.target.value)}}})]),t._v(" "),o("div",{staticStyle:{position:"relative"}},[o("div",{staticClass:"bg-white shadow-sm",staticStyle:{position:"absolute",top:"0px",left:"0px","z-index":"9","max-height":"40vh",overflow:"auto"}},t._l(t.search.results,(function(e){return o("div",{staticClass:"p-2 ui-address-search-results-each",on:{click:function(o){return t.selectPlace(e)}}},[t._v("\r\n                        "+t._s(e.display_name)+"\r\n                    ")])})),0)])]),t._v(" "),o("div",{staticClass:"col-6 col-md-4"},[o("div",{staticClass:"input-group form-control border-0 p-0"},[t._m(2),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value.number,expression:"props.value.number"}],staticClass:"form-control border-0",attrs:{type:"text"},domProps:{value:t.props.value.number},on:{change:function(e){return t.emit()},input:function(e){e.target.composing||t.$set(t.props.value,"number",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col-6 col-md-4"},[o("div",{staticClass:"input-group form-control border-0 p-0",attrs:{title:"Complemento"}},[t._m(3),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value.complement,expression:"props.value.complement"}],staticClass:"form-control border-0",attrs:{type:"text"},domProps:{value:t.props.value.complement},on:{change:function(e){return t.emit()},input:function(e){e.target.composing||t.$set(t.props.value,"complement",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col-6 col-md-4"},[o("div",{staticClass:"input-group form-control border-0 p-0"},[t._m(4),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value.city,expression:"props.value.city"}],staticClass:"form-control border-0",attrs:{type:"text"},domProps:{value:t.props.value.city},on:{keyup:function(e){return t.autocomplete({delay:500,isSearch:!0,type:"address"})},change:function(e){return t.emit()},input:function(e){e.target.composing||t.$set(t.props.value,"city",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col-6 col-md-4"},[o("div",{staticClass:"input-group form-control border-0 p-0"},[t._m(5),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.props.value.st,expression:"props.value.st"}],staticClass:"form-control border-0",on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.props.value,"st",e.target.multiple?o:o[0])},function(e){return t.emit()}]}},[o("option",{attrs:{value:""}},[t._v("Selecionar")]),t._v(" "),o("option",{attrs:{value:"AC"}},[t._v("Acre")]),t._v(" "),o("option",{attrs:{value:"AL"}},[t._v("Alagoas")]),t._v(" "),o("option",{attrs:{value:"AP"}},[t._v("Amapá")]),t._v(" "),o("option",{attrs:{value:"AM"}},[t._v("Amazonas")]),t._v(" "),o("option",{attrs:{value:"BA"}},[t._v("Bahia")]),t._v(" "),o("option",{attrs:{value:"CE"}},[t._v("Ceará")]),t._v(" "),o("option",{attrs:{value:"DF"}},[t._v("Distrito Federal")]),t._v(" "),o("option",{attrs:{value:"ES"}},[t._v("Espírito Santo")]),t._v(" "),o("option",{attrs:{value:"GO"}},[t._v("Goiás")]),t._v(" "),o("option",{attrs:{value:"MA"}},[t._v("Maranhão")]),t._v(" "),o("option",{attrs:{value:"MT"}},[t._v("Mato Grosso")]),t._v(" "),o("option",{attrs:{value:"MS"}},[t._v("Mato Grosso do Sul")]),t._v(" "),o("option",{attrs:{value:"MG"}},[t._v("Minas Gerais")]),t._v(" "),o("option",{attrs:{value:"PA"}},[t._v("Pará")]),t._v(" "),o("option",{attrs:{value:"PB"}},[t._v("Paraíba")]),t._v(" "),o("option",{attrs:{value:"PR"}},[t._v("Paraná")]),t._v(" "),o("option",{attrs:{value:"PE"}},[t._v("Pernambuco")]),t._v(" "),o("option",{attrs:{value:"PI"}},[t._v("Piauí")]),t._v(" "),o("option",{attrs:{value:"RJ"}},[t._v("Rio de Janeiro")]),t._v(" "),o("option",{attrs:{value:"RN"}},[t._v("Rio Grande do Norte")]),t._v(" "),o("option",{attrs:{value:"RS"}},[t._v("Rio Grande do Sul")]),t._v(" "),o("option",{attrs:{value:"RO"}},[t._v("Rondônia")]),t._v(" "),o("option",{attrs:{value:"RR"}},[t._v("Roraima")]),t._v(" "),o("option",{attrs:{value:"SC"}},[t._v("Santa Catarina")]),t._v(" "),o("option",{attrs:{value:"SP"}},[t._v("São Paulo")]),t._v(" "),o("option",{attrs:{value:"SE"}},[t._v("Sergipe")]),t._v(" "),o("option",{attrs:{value:"TO"}},[t._v("Tocantins")])])])])]),t._v(" "),o("l-map",{staticStyle:{height:"200px"},attrs:{zoom:16,center:[t.props.value.lat||0,t.props.value.lng||0]}},[o("l-tile-layer",{attrs:{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}}),t._v(" "),o("l-marker",{attrs:{"lat-lng":[t.props.value.lat||0,t.props.value.lng||0],draggable:!0},on:{moveend:function(e){return t.getAddressByLatLng(e)}}})],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("div",{staticClass:"input-group-text border-0",staticStyle:{width:"100px"}},[this._v("\r\n                    CEP\r\n                ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("div",{staticClass:"input-group-text border-0",staticStyle:{width:"100px"}},[this._v("\r\n                    Endereço\r\n                ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("div",{staticClass:"input-group-text border-0",staticStyle:{width:"100px"}},[this._v("\r\n                    Número\r\n                ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("div",{staticClass:"input-group-text border-0",staticStyle:{width:"100px"}},[this._v("\r\n                    Comp.\r\n                ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("div",{staticClass:"input-group-text border-0",staticStyle:{width:"100px"}},[this._v("\r\n                    Cidade\r\n                ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("div",{staticClass:"input-group-text border-0",staticStyle:{width:"100px"}},[this._v("\r\n                    Estado\r\n                ")])])}],!1,null,null,null);e.default=component.exports},216:function(t,e,o){"use strict";var r=o(206);o.n(r).a},217:function(t,e,o){(e=o(30)(!1)).push([t.i,".ui-select-item.ui-select-active,.ui-select-item:hover{background:#eee}",""]),t.exports=e},220:function(t,e,o){"use strict";o.r(e);var r={layout:"admin",middleware:"auth",props:{value:{default:function(){return{}}}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)},saved:function(t){this.$set(this.props,"value",t),this.emit(),this.$emit("saved",t)}},data:function(){var data={};return data.props=Object.assign({},this.$props),data.props.value=Object.assign(this.modelDefault("products"),data.props.value),data.props.value.user_id=data.props.value.user_id||this.$user("id"),data.productTypes=this.modelDefault("productTypes"),data.productCategories=this.modelDefault("productCategories"),data}},l=o(8),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("ui-form",{attrs:{method:"post",action:"/api/products/save/"},on:{saved:function(e){return t.saved(e)}},scopedSlots:t._u([{key:"default",fn:function(form){return[form.loading?o("div",[o("span",{domProps:{innerHTML:t._s(form.loading)}}),t._v(" Carregando...")]):t._e(),t._v(" "),o("ui-field",{attrs:{type:"text",label:"Nome"},model:{value:t.props.value.name,callback:function(e){t.$set(t.props.value,"name",e)},expression:"props.value.name"}}),t._v(" "),o("ui-field",{attrs:{type:"textarea",label:"Descrição"},model:{value:t.props.value.description,callback:function(e){t.$set(t.props.value,"description",e)},expression:"props.value.description"}}),t._v(" "),o("ui-field",{attrs:{label:"Qual a categoria do seu produto?"},scopedSlots:t._u([{key:"field",fn:function(){return[o("ui-select",{attrs:{items:t.productCategories,"item-value":"slug","item-label":"name"},scopedSlots:t._u([{key:"item",fn:function(e){var r=e.item;return[o("div",{staticClass:"d-flex"},[o("div",{style:"width:50px; height:50px; background:url("+r.photo+") center center no-repeat; background-size:cover;"}),t._v(" "),o("div",{staticClass:"pl-3"},[o("div",{staticClass:"font-weight-bold"},[t._v(t._s(r.name))]),t._v(" "),o("div",[o("small",{staticClass:"text-muted"},[t._v(t._s(r.description))])])])])]}}],null,!0),model:{value:t.props.value.category,callback:function(e){t.$set(t.props.value,"category",e)},expression:"props.value.category"}})]},proxy:!0}],null,!0),model:{value:t.props.value.category,callback:function(e){t.$set(t.props.value,"category",e)},expression:"props.value.category"}}),t._v(" "),o("ui-field",{attrs:{label:"Qual seu segmento?"},scopedSlots:t._u([{key:"field",fn:function(){return[o("ui-select",{attrs:{items:t.productTypes,"item-value":"slug","item-label":"name","show-search":!1},scopedSlots:t._u([{key:"item",fn:function(e){var r=e.item;return[o("div",{staticClass:"d-flex"},[o("div",{style:"width:50px; height:50px; background:url("+r.photo+") center center no-repeat; background-size:cover;"}),t._v(" "),o("div",{staticClass:"pl-3"},[o("div",{staticClass:"font-weight-bold"},[t._v(t._s(r.name))]),t._v(" "),o("div",[o("small",{staticClass:"text-muted"},[t._v(t._s(r.description))])])])])]}}],null,!0),model:{value:t.props.value.type,callback:function(e){t.$set(t.props.value,"type",e)},expression:"props.value.type"}})]},proxy:!0}],null,!0),model:{value:t.props.value.type,callback:function(e){t.$set(t.props.value,"type",e)},expression:"props.value.type"}}),t._v(" "),o("ui-field",{attrs:{label:"Informe o endereço"},scopedSlots:t._u([{key:"field",fn:function(){return[o("ui-address",{model:{value:t.props.value,callback:function(e){t.$set(t.props,"value",e)},expression:"props.value"}})]},proxy:!0}],null,!0),model:{value:t.props.value,callback:function(e){t.$set(t.props,"value",e)},expression:"props.value"}}),t._v(" "),o("div",{staticClass:"text-right"},[o("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(e){t.props.value=t.modelDefault("products"),t.emit()}}},[o("i",{staticClass:"fa fa-fw fa-save"}),t._v(" Limpar\r\n            ")]),t._v(" "),o("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[o("i",{staticClass:"fa fa-fw fa-save"}),t._v(" Salvar\r\n            ")])])]}}]),model:{value:t.props.value,callback:function(e){t.$set(t.props,"value",e)},expression:"props.value"}}),t._v(" "),o("pre",[t._v(t._s(t.props.value))])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiField:o(210).default,UiSelect:o(223).default,UiAddress:o(213).default,UiForm:o(224).default})},223:function(t,e,o){"use strict";o.r(e);o(124);var r={props:{value:{default:!1},items:{default:function(){return[]}},itemValue:{default:"id"},itemLabel:{default:"name"},term:{default:""},placeholder:{default:"Nenhum item selecionado"},showSearch:{default:!0}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t),this.selectByValue(this.props.value)}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)},selectByItem:function(t){this.$set(this,"selected",t),t&&t[this.itemValue]&&this.$set(this.props,"value",t[this.itemValue])},selectByValue:function(t){if(this.itemValue){for(var i in this.items){var e=this.items[i];if(e[this.itemValue]==this.props.value)return this.$set(this,"selected",e),void this.$set(this.props,"value",e[this.itemValue])}this.$set(this,"selected",!1),this.$set(this.props,"value",!1)}},select:function(t){var e=this.itemValue&&t[this.itemValue]||t;this.$set(this,"selected",t),this.$set(this,"focused",!1),this.$set(this.props,"term",""),this.$set(this.props,"value",e),this.emit()},remove:function(){this.$set(this.props,"value",!1),this.emit()},getValue:function(t){return this.itemValue&&t[this.itemValue]||t},documentClickHandle:function(t){var e=this,o=this.focused;this.focused=this.$el.contains(t.target),this.props.value&&this.focused&&!o&&setTimeout((function(){var t=!(!e.$refs.selected||!e.$refs.selected[0])&&e.$refs.selected[0];t&&(e.$refs.dropdown.scrollTop=t.offsetTop-40)}),10)}},computed:{compItems:function(){var t=this;return this.items.filter((function(e){return JSON.stringify(e).toLowerCase().match(t.props.term.toLowerCase())}))},compPlaceholder:function(){for(var i in this.items){var t=this.items[i];if(this.getValue(t)==this.props.value)return t[this.itemLabel]||t}return this.props.placeholder},compValue:function(){for(var i in this.items){var t=this.items[i];if((this.itemValue&&t[this.itemValue]||t)==this.props.value)return t[this.itemValue]||!1}return!1}},data:function(){return{focused:!1,selected:!1,props:Object.assign({},this.$props)}},mounted:function(){window.addEventListener("click",this.documentClickHandle)},beforeDestroy:function(){window.removeEventListener("click",this.documentClickHandle)}},l=(o(216),o(8)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ui-select",staticStyle:{position:"relative"}},[o("div",{staticClass:"d-block"},[o("div",{staticClass:"bg-white form-control",staticStyle:{height:"auto",cursor:"pointer"}},[t.selected?o("div",[t._t("item",[t._v(t._s(t.selected[t.itemLabel]||t.i))],{item:t.selected})],2):o("div",{staticClass:"text-muted"},[t._v(t._s(t.placeholder))])]),t._v(" "),o("transition",{attrs:{name:"custom-unique-name","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"}},[t.focused?o("div",{staticClass:"bg-white shadow-sm",staticStyle:{position:"absolute",top:"calc(100% + 5px)",left:"0px",width:"100%","animation-duration":"200ms","z-index":"9"}},[t.showSearch?o("div",{staticClass:"input-group p-0 bg-white m-0"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.props.term,expression:"props.term"}],staticClass:"form-control border-0 bg-transparent",staticStyle:{"box-shadow":"none!important"},attrs:{type:"text",placeholder:"Filtrar"},domProps:{value:t.props.term},on:{input:function(e){e.target.composing||t.$set(t.props,"term",e.target.value)}}}),t._v(" "),o("div",{staticClass:"input-group-append"},[o("div",{staticClass:"input-group-text border-0 bg-transparent"},[o("i",{staticClass:"fa fa-fw fa-search"})])])]):t._e(),t._v(" "),o("div",{ref:"dropdown",staticStyle:{"max-height":"50vh",overflow:"auto","border-top":"solid 1px #eee"}},[t._t("empty",[0==t.compItems.length?o("div",{staticClass:"p-2 text-muted"},[t._v("Nenhum item encontrado")]):t._e()]),t._v(" "),t._l(t.compItems,(function(i){return o("div",{ref:t.props.value==t.getValue(i)?"selected":null,refInFor:!0,staticClass:"ui-select-item p-2",class:{"ui-select-active":t.props.value==t.getValue(i)},on:{click:function(e){return t.select(i)}}},[t._t("item",[t._v(t._s(i[t.itemLabel]||i))],{item:i})],2)}))],2)]):t._e()])],1)])}),[],!1,null,null,null);e.default=component.exports},224:function(t,e,o){"use strict";o.r(e);var r={props:{value:{default:function(){return{}}},method:{default:"post"},action:{default:"api"}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)},submit:function(){var t=this,e=this.$axios[this.method],o="get"==this.method?{params:this.props.value}:this.props.value;this.loading='<i class="fa fa-fw fa-spin fa-spinner"></i>',e(this.action,o).then((function(e){t.loading=!1,t.$emit("saved",t.props.value)})).catch((function(e,a,b,o,r){t.loading=!1,console.log(e,a,b,o,r)}))}},data:function(){return{loading:!1,props:Object.assign({},this.$props)}}},l=o(8),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("form",{staticClass:"ui-form",attrs:{method:t.method,action:t.action},on:{submit:function(e){return e.preventDefault(),t.submit()}}},[t._t("default",null,{loading:t.loading})],2)}),[],!1,null,null,null);e.default=component.exports},229:function(t,e,o){"use strict";o.r(e);var r={layout:"admin",middleware:"auth",methods:{productsSearch:function(){var t=this;this.$axios.get("/api/products/search").then((function(e){t.products=e.data}))}},data:function(){return{product:{},products:[]}},mounted:function(){this.productsSearch()}},l=o(8),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-md-6"},[o("div",{staticClass:"list-group"},t._l(t.products,(function(p){return o("a",{staticClass:"list-group-item",attrs:{href:"javascript:;"},on:{click:function(e){t.product=p}}},[t._v("\r\n                    "+t._s(p.name||"Sem nome")+"\r\n                ")])})),0),t._v(" "),o("br")]),t._v(" "),o("div",{staticClass:"col-12 col-md-6"},[o("ui-product",{on:{saved:function(e){return t.productsSearch()}},model:{value:t.product,callback:function(e){t.product=e},expression:"product"}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiProduct:o(220).default})}}]);