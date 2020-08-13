(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{193:function(t,e,r){var content=r(197);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("7b735d56",content,!0,{sourceMap:!1})},196:function(t,e,r){"use strict";var o=r(193);r.n(o).a},197:function(t,e,r){(e=r(49)(!1)).push([t.i,".ui-address .leaflet-pane{z-index:1!important}",""]),t.exports=e},210:function(t,e,r){"use strict";r.r(e);r(120);var o={props:{value:{default:function(){return{}}},reference:{default:""},refId:{default:""},showBtnSave:{default:!0}},methods:{save:function(){var t=this;this.$axios.post("/api/address/save",this.props.value).then((function(e){t.$emit("saved",e)}))},autocomplete:function(){var t=this;this.autocompleteTimeout&&clearTimeout(this.autocompleteTimeout),this.autocompleteTimeout=setTimeout((function(){t.$axios.get("https://nominatim.openstreetmap.org/search",{params:t.search.params}).then((function(e){t.search.results=e.data}))}),1e3)},selectPlace:function(t){this.$set(this.props,"value",Object.assign(this.props.value,{lat:t.lat?parseFloat(t.lat):0,lng:t.lon?parseFloat(t.lon):0,route:t.address.road,number:"",complement:"",zipcode:t.address.postcode,district:t.address.suburb,city:t.address.city,state:t.address.state,st:"",country:t.address.country,co:t.address.country_code.toUpperCase()})),this.$set(this.search.params,"q",""),this.$set(this.search,"results",[]),this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)},getAddressByLatLng:function(t){var e=this,r={format:"json",lat:t.target._latlng.lat,lon:t.target._latlng.lng,zoom:18,addressdetails:1};this.$axios.get("https://nominatim.openstreetmap.org/reverse",{params:r}).then((function(t){e.selectPlace(t.data)}))}},data:function(){var data={};return data.props=Object.assign({},this.$props),data.props.value=Object.assign({id:"",name:"",ref:this.reference,ref_id:this.refId,lat:0,lng:0,route:"",number:"",complement:"",zipcode:"",district:"",city:"",state:"",st:"",country:"",co:""},data.props.value),data.search={params:{q:"",format:"json",addressdetails:1},results:[]},data}},l=(r(196),r(16)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ui-address"},[r("l-map",{staticStyle:{height:"200px"},attrs:{zoom:16,center:[t.props.value.lat||0,t.props.value.lng||0]}},[r("l-tile-layer",{attrs:{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}}),t._v(" "),r("l-marker",{attrs:{"lat-lng":[t.props.value.lat||0,t.props.value.lng||0],draggable:!0},on:{moveend:function(e){return t.getAddressByLatLng(e)}}})],1),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 pb-3"},[r("small",{staticClass:"d-block bg-dark text-white p-2"},[t.props.value.route?r("span",[t._v(t._s(t.props.value.route)+", ")]):t._e(),t._v(" "),t.props.value.number?r("span",[t._v("Nº "+t._s(t.props.value.number)+", ")]):t._e(),t._v(" "),t.props.value.zipcode?r("span",[t._v("CEP "+t._s(t.props.value.zipcode)+", ")]):t._e(),t._v(" "),t.props.value.district?r("span",[t._v(t._s(t.props.value.district))]):t._e(),t._v(" "),t.props.value.city?r("span",[t._v("- "+t._s(t.props.value.city))]):t._e(),t._v(" "),t.props.value.state?r("span",[t._v(t._s(t.props.value.state))]):t._e()])]),t._v(" "),r("div",{staticClass:"col-12 pb-1"},[r("div",{staticClass:"input-group",staticStyle:{position:"relative","max-width":"500px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.search.params.q,expression:"search.params.q"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Buscar endereço"},domProps:{value:t.search.params.q},on:{keyup:function(e){return t.autocomplete()},input:function(e){e.target.composing||t.$set(t.search.params,"q",e.target.value)}}}),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"shadow-sm bg-white",staticStyle:{position:"absolute",top:"100%",left:"0px",width:"100%","max-height":"50vh",overflow:"auto","z-index":"2"}},t._l(t.search.results,(function(e){return r("a",{key:e.place_id,staticClass:"p-2 d-block",attrs:{href:"javascript:;"},on:{click:function(r){return t.selectPlace(e)}}},[t._v("\r\n                        "+t._s(e.address.road)+", "+t._s(e.address.suburb)+", "+t._s(e.address.city)+", "+t._s(e.address.state)+"/"+t._s(e.address.country_code.toUpperCase())+"\r\n                    ")])})),0)])]),t._v(" "),r("div",{staticClass:"col-12 pb-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value.name,expression:"props.value.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Descrição Ex.: Endereço principal, secundário, etc."},domProps:{value:t.props.value.name},on:{input:function(e){e.target.composing||t.$set(t.props.value,"name",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-8 pb-1"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value.complement,expression:"props.value.complement"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Complemento"},domProps:{value:t.props.value.complement},on:{input:function(e){e.target.composing||t.$set(t.props.value,"complement",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-4 pb-2"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value.number,expression:"props.value.number"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Número"},domProps:{value:t.props.value.number},on:{input:function(e){e.target.composing||t.$set(t.props.value,"number",e.target.value)}}})]),t._v(" "),t.showBtnSave?r("div",{staticClass:"col-12 text-right"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.save()}}},[r("i",{staticClass:"fa fa-fw fa-save"}),t._v(" Salvar\r\n            ")])]):t._e()])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-append input-group-text"},[e("i",{staticClass:"fa fa-fw fa-search"})])}],!1,null,null,null);e.default=component.exports}}]);