(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{686:function(t,e,o){"use strict";o.r(e);o(73),o(7),o(27),o(61),o(36);var r={props:{value:Object},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},computed:{formattedAddress:function(){var t=this.props.value,e=[];return t.route&&e.push(t.route),t.number&&e.push("Nº ".concat(t.number)),t.complement&&e.push(t.complement),t.zipcode&&e.push("CEP ".concat(t.zipcode)),t.district&&e.push(t.district),t.city&&e.push(t.city),t.state&&e.push(t.state),e.join(", ")},mapBindComp:function(){return!!(this.props.value&&this.props.value.lat&&this.props.value.lng)&&{zoom:16,center:[parseFloat(this.props.value.lat),parseFloat(this.props.value.lng)]}}},methods:{emitValue:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)},setValue:function(t){for(var i in t)this.props.value[i]=t[i];this.setStateCodeFromName(),this.emitValue()},placeToValue:function(t){return{lat:t.lat,lng:t.lon,route:t.address.road||"",number:"",complement:"",zipcode:t.address.postcode,district:t.address.suburb,city:t.address.city,state:t.address.state,state_code:"",country:t.address.country,country_code:t.address.country_code.toUpperCase()}},searchAddresses:function(){var t=this;this._searchAddressesTimeout&&clearTimeout(this._searchAddressesTimeout),this.search.loading=!0,this._searchAddressesTimeout=setTimeout((function(){t.$axios.get("https://nominatim.openstreetmap.org/search.php?format=json&addressdetails=1&extratags=1&namedetails=1&limit=10&q=".concat(t.search.params.q)).then((function(e){t.search.loading=!1,t.search.results=e.data.map((function(e){return t.placeToValue(e)}))})).catch((function(e){t.search.loading=!1}))}),1e3)},setStateCodeFromName:function(){if(this.props.value.state){this.props.value.state_code={Acre:"AC",Alagoas:"AL","Amapá":"AP",Amazonas:"AM",Bahia:"BA","Ceará":"CE","Distrito Federal":"DF","Espírito Santo":"ES","Goiás":"GO","Maranhão":"MA","Mato Grosso":"MT","Mato Grosso do Sul":"MS","Minas Gerais":"MG","Pará":"PA","Paraíba":"PB","Paraná":"PR",Pernambuco:"PE","Piauí":"PI","Rio de Janeiro":"RJ","Rio Grande do Norte":"RN","Rio Grande do Sul":"RS","Rondônia":"RO",Roraima:"RR","Santa Catarina":"SC","São Paulo":"SP",Sergipe:"SE",Tocantins:"TO"}[this.props.value.state]||"",this.emitValue()}},osmReverse:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e=Object.assign({format:"json",addressdetails:1,extratags:1,namedetails:1,limit:10,lat:0,lon:0},e),this.loading=!0,this.$axios.get("https://nominatim.openstreetmap.org/reverse",{params:e}).then((function(e){var o=t.placeToValue(e.data);t.setValue(o)}))}},data:function(){var data={search:{loading:!1,params:{q:""},results:[]},loading:!1,searchResults:[]};return data.props=Object.assign({},this.$props),data.props.value=Object.assign({lat:0,lng:0,route:"",number:"",complement:"",zipcode:"",district:"",city:"",state:"",st:"",country:"",co:""},data.props.value),data}},l=o(5),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ui-address"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-lg-8"},[o("div",{staticClass:"input-group form-control p-0"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.search.params.q,expression:"search.params.q"}],staticClass:"form-control border-0",attrs:{type:"text",autocomplete:"off-none",placeholder:"Busca"},domProps:{value:t.search.params.q},on:{keyup:function(e){return t.searchAddresses()},input:function(e){e.target.composing||t.$set(t.search.params,"q",e.target.value)}}}),t._v(" "),o("div",{staticClass:"input-group-append"},[o("div",{staticClass:"input-group-btn border-0"},[o("button",{staticClass:"btn rounded-0",attrs:{type:"button"},on:{click:function(e){return t.osmSearch({q:t.props.value.zipcode},!1)}}},[t.search.loading?o("i",{staticClass:"fa fa-fw fa-spin fa-spinner"}):o("i",{staticClass:"fa fa-fw fa-search"})])])])]),t._v(" "),o("div",{staticStyle:{position:"relative"}},[o("div",{staticClass:"list-group list-group-flush bg-white shadow-sm",staticStyle:{position:"absolute",width:"100%"}},t._l(t.search.results,(function(e){return o("a",{staticClass:"list-group-item",attrs:{href:"javascript:;"},on:{click:function(o){t.setValue(e),t.search.params.q="",t.search.results=[]}}},[t._v("\r\n                        "+t._s(e.route)+", "+t._s(e.district)+" - "+t._s(e.city)+"/"+t._s(e.state)+"\r\n                    ")])})),0)])]),t._v(" "),o("div",{staticClass:"py-0 col-12"}),t._v(" "),o("div",{staticClass:"pt-0 col-12 col-md-8"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value.route,expression:"props.value.route"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Rua"},domProps:{value:t.props.value.route},on:{keyup:function(e){return t.emitValue()},input:function(e){e.target.composing||t.$set(t.props.value,"route",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"pt-0 col-6 col-md-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value.number,expression:"props.value.number"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nº"},domProps:{value:t.props.value.number},on:{keyup:function(e){return t.emitValue()},input:function(e){e.target.composing||t.$set(t.props.value,"number",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"pt-0 col-6 col-md-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value.complement,expression:"props.value.complement"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Complemento"},domProps:{value:t.props.value.complement},on:{keyup:function(e){return t.emitValue()},input:function(e){e.target.composing||t.$set(t.props.value,"complement",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"pt-0 col-12 col-md-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value.zipcode,expression:"props.value.zipcode"},{name:"mask",rawName:"v-mask",value:"#####-###",expression:"'#####-###'"}],staticClass:"form-control",attrs:{type:"text",placeholder:"CEP"},domProps:{value:t.props.value.zipcode},on:{keyup:function(e){return t.emitValue()},input:function(e){e.target.composing||t.$set(t.props.value,"zipcode",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"pt-0 col-12 col-md-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value.city,expression:"props.value.city"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Cidade"},domProps:{value:t.props.value.city},on:{keyup:function(e){return t.emitValue()},input:function(e){e.target.composing||t.$set(t.props.value,"city",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"pt-0 col-12 col-md-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value.district,expression:"props.value.district"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Bairro"},domProps:{value:t.props.value.district},on:{keyup:function(e){return t.emitValue()},input:function(e){e.target.composing||t.$set(t.props.value,"district",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"pt-0 col-6 col-md-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value.state,expression:"props.value.state"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Estado"},domProps:{value:t.props.value.state},on:{keyup:function(e){return t.emitValue()},input:function(e){e.target.composing||t.$set(t.props.value,"state",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"pt-0 col-6 col-md-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value.country,expression:"props.value.country"}],staticClass:"form-control",attrs:{type:"text",placeholder:"País"},domProps:{value:t.props.value.country},on:{keyup:function(e){return t.emitValue()},input:function(e){e.target.composing||t.$set(t.props.value,"country",e.target.value)}}})])]),t._v(" "),t.mapBindComp?o("l-map",t._b({staticClass:"mt-2",staticStyle:{height:"200px",overflow:"hidden","z-index":"1"}},"l-map",t.mapBindComp,!1),[o("l-tile-layer",{attrs:{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}}),t._v(" "),o("l-marker",{attrs:{"lat-lng":t.mapBindComp.center,draggable:!0},on:{moveend:function(e){return t.osmReverse({lat:e.sourceTarget._latlng.lat,lon:e.sourceTarget._latlng.lng})}}})],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);