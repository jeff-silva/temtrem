(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{547:function(t,e,r){"use strict";r.r(e);r(60),r(22),r(14),r(4),r(38);var o=r(15);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={name:"ui-password",props:{value:{default:""},placeholder:{default:""},toggleShow:{default:!0},meter:{default:!0},type:{default:"password"}},watch:{$props:{deep:!0,handler:function(t){this.props=l({},t)}}},data:function(){return{props:l({},this.$props)}}},d=r(13),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-control p-0 bg-white"},[r("div",{staticClass:"input-group"},["checkbox"===t.props.type?r("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:t.props.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.props.value)?t._i(t.props.value,null)>-1:t.props.value},on:{input:function(e){return t.$emit("input",t.props.value)},change:function(e){var r=t.props.value,o=e.target,n=!!o.checked;if(Array.isArray(r)){var l=t._i(r,null);o.checked?l<0&&t.$set(t.props,"value",r.concat([null])):l>-1&&t.$set(t.props,"value",r.slice(0,l).concat(r.slice(l+1)))}else t.$set(t.props,"value",n)}}}):"radio"===t.props.type?r("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:t.props.placeholder,type:"radio"},domProps:{checked:t._q(t.props.value,null)},on:{input:function(e){return t.$emit("input",t.props.value)},change:function(e){return t.$set(t.props,"value",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control border-0 bg-transparent",attrs:{placeholder:t.props.placeholder,type:t.props.type},domProps:{value:t.props.value},on:{input:[function(e){e.target.composing||t.$set(t.props,"value",e.target.value)},function(e){return t.$emit("input",t.props.value)}]}}),t._v(" "),t.props.toggleShow?r("div",{staticClass:"input-group-append"},[r("div",{staticClass:"input-group-btn"},[r("div",{staticClass:"btn",on:{click:function(e){t.props.type="text"==t.props.type?"password":"text"}}},[r("i",{staticClass:"fas fa-eye",class:{"fa-eye-slash":"password"==t.props.type}})])])]):t._e()]),t._v(" "),t.props.meter?r("ui-password-meter",{staticStyle:{"margin-top":"-4px"},model:{value:t.props.value,callback:function(e){t.$set(t.props,"value",e)},expression:"props.value"}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiPasswordMeter:r(549).default})},549:function(t,e,r){"use strict";r.r(e);var o={props:{value:{default:!1}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},computed:{meter:function(){var t=this.props.value,e=0,r="danger";if(t){for(var o=new Object,i=0;i<t.length;i++)o[t[i]]=(o[t[i]]||0)+1,e+=5/o[t[i]];var n={digits:/\d/.test(t),lower:/[a-z]/.test(t),upper:/[A-Z]/.test(t),nonWords:/\W/.test(t)},l=0;for(var c in n)l+=1==n[c]?1:0;e+=10*(l-1),(e=parseInt(e))>=70?r="success":e>=40&&(r="primary")}return{score:e,class:r}}},methods:{emit:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)}},data:function(){return{props:Object.assign({},this.$props)}}},n=r(13),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"progress",staticStyle:{height:"5px"}},[e("div",{staticClass:"progress-bar progress-bar-striped",class:"bg-"+this.meter.class,style:"width:"+this.meter.score+"%;"})])])}),[],!1,null,null,null);e.default=component.exports},558:function(t,e,r){"use strict";r.r(e);var o={props:{value:{default:!1},shown:{default:!1}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},data:function(){var t=this,data={target:!1};return data.props=Object.assign({},this.$props),data.events=[{type:"click",handler:function(e){t.hide();var r=t.$el.closest(".ui-dropdown");(r&&r.contains(e.target)||t.target&&(e.target==t.target||t.target.contains(e.target)))&&t.show()}}],data},methods:{toggle:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.props.shown?this.hide(t):this.show(t)},show:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&(this.target=t.target||!1),this.props.shown=!0,this.$emit("shown",this.props.shown)},hide:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&(this.target=t.target||!1),this.props.shown=!1,this.$emit("shown",this.props.shown)}},mounted:function(){this.events.forEach((function(t){window.addEventListener(t.type,t.handler)}))},beforeDestroy:function(){this.events.forEach((function(t){window.removeEventListener(t.type,t.handler)}))}},n=r(13),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui-dropdown",staticStyle:{position:"relative","z-index":"9"}},[e("transition",{attrs:{name:"ui-dropdown-animation","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"}},[this.props.shown?e("div",{staticStyle:{position:"absolute",top:"0px",left:"0px",width:"100%","z-index":"9!important","animation-duration":"300ms"}},[this._t("content",[e("div",{staticClass:"bg-white shadow-sm"},[this._v("\n                    content\n                ")])])],2):this._e()])],1)}),[],!1,null,null,null);e.default=component.exports},569:function(t,e,r){"use strict";r.r(e);var o=r(590),n={components:{Compact:o.Compact,Sketch:o.Sketch,Chrome:o.Chrome,Photoshop:o.Photoshop},props:{value:{default:""},type:{default:"chrome"},display:{default:!1},showInput:{default:!0}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},data:function(){var data={};return data.props=Object.assign({},this.$props),data.tempValue=data.props.value,data},computed:{compColorStyle:function(){var style={position:"absolute",top:"100%",left:0,zIndex:9};return style}},methods:{emit:function(t){this.props.value=t.hex8,this.$emit("input",this.props.value)},show:function(t){this.$refs.dropdown.show(t)},hide:function(t){this.$refs.dropdown.hide(t)},toggle:function(t){this.$refs.dropdown.toggle(t)}}},l=r(13),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ui-color input-group",staticStyle:{position:"relative"}},[r("div",{staticClass:"input-group-prepend"},[r("div",{staticClass:"input-group-btn"},[r("a",{staticClass:"btn rounded-0",style:"background:"+t.props.value+";",attrs:{href:"javascript:;"},on:{click:function(e){return t.show(e)}}},[t._v("   ")])])]),t._v(" "),t.props.showInput?r("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.props.value},on:{focus:function(e){return t.show(e)},input:function(e){e.target.composing||t.$set(t.props,"value",e.target.value)}}}):t._e(),t._v(" "),r("ui-dropdown",{ref:"dropdown",style:t.compColorStyle,scopedSlots:t._u([{key:"content",fn:function(){return[r(t.props.type,{tag:"component",staticClass:"ui-color-component",on:{input:function(e){return t.emit(t.tempValue)}},model:{value:t.tempValue,callback:function(e){t.tempValue=e},expression:"tempValue"}})]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiDropdown:r(558).default})},761:function(t,e,r){"use strict";r.r(e);r(60),r(22),r(14),r(4),r(38);var o=r(15);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={layout:"tools",meta:{tool:{title:"QR Code",group:["encode"]}},head:function(){var t=this;return{script:[{hid:"qrcode",defer:!0,src:"https://cdn.jsdelivr.net/npm/davidshimjs-qrcodejs@0.0.2/qrcode.min.js",callback:function(){t.loading=!1,t.generate()}}]}},data:function(){return{loading:!1,base64Url:!1,params:{type:"text",text:"Hello",wifiSSID:"",wifiCrypt:"WPA",wifiPassword:"",width:402,height:402,colorDark:"#000000",colorLight:"#ffffff"}}},methods:{generate:function(){var t=l(l({},this.params),{},{correctLevel:QRCode.CorrectLevel.H});"wifi"==t.type&&(t.text="WIFI:S:".concat(t.wifiSSID,";T:").concat(t.wifiCrypt,";P:").concat(t.wifiPassword,";;"));var q=new QRCode(document.createElement("div"),t);this.base64Url=q._el.children[0].toDataURL()},toUTF8String:function(){for(var t=this.params.text,e="",i=0;i<t.length;i++){var r=t.charCodeAt(i);r<128?e+=String.fromCharCode(r):r<2048?(e+=String.fromCharCode(192|r>>6),e+=String.fromCharCode(128|63&r)):r<55296||r>=57344?(e+=String.fromCharCode(224|r>>12),e+=String.fromCharCode(128|r>>6&63),e+=String.fromCharCode(128|63&r)):(i++,r=65536+((1023&r)<<10|1023&t.charCodeAt(i)),e+=String.fromCharCode(240|r>>18),e+=String.fromCharCode(128|r>>12&63),e+=String.fromCharCode(128|r>>6&63),e+=String.fromCharCode(128|63&r))}return e}},mounted:function(){}},d=r(13),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-6"},[r("el-tabs",{attrs:{type:"border-card"},model:{value:t.params.type,callback:function(e){t.$set(t.params,"type",e)},expression:"params.type"}},[r("el-tab-pane",{attrs:{label:"Texto",name:"text"}},[r("div",{staticClass:"form-group"},[r("label",[t._v("Conteúdo")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.params.text,expression:"params.text"}],staticClass:"form-control",domProps:{value:t.params.text},on:{keyup:t.generate,input:function(e){e.target.composing||t.$set(t.params,"text",e.target.value)}}})])]),t._v(" "),r("el-tab-pane",{attrs:{label:"Wifi",name:"wifi"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 form-group"},[r("label",[t._v("Nome da rede")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.params.wifiSSID,expression:"params.wifiSSID"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.params.wifiSSID},on:{input:[function(e){e.target.composing||t.$set(t.params,"wifiSSID",e.target.value)},t.generate]}})]),t._v(" "),r("div",{staticClass:"col-6 form-group"},[r("label",[t._v("Senha")]),t._v(" "),r("ui-password",{attrs:{meter:!1},on:{input:t.generate},model:{value:t.params.wifiPassword,callback:function(e){t.$set(t.params,"wifiPassword",e)},expression:"params.wifiPassword"}})],1),t._v(" "),r("div",{staticClass:"col-6 form-group"},[r("label",[t._v("Criptografia")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.params.wifiCrypt,expression:"params.wifiCrypt"}],staticClass:"form-control",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.params,"wifiCrypt",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"WPA"}},[t._v("WPA/WPA2")]),t._v(" "),r("option",{attrs:{value:"WEP"}},[t._v("WEP")])])])])])],1),t._v(" "),r("div",{staticClass:"my-5"}),t._v(" "),r("div",{staticClass:"el-tabs el-tabs--top el-tabs--border-card"},[r("div",{staticClass:"el-tabs__content"},[r("div",{staticClass:"form-group"},[r("label",[t._v("Dimensão")]),t._v(" "),r("div",{staticClass:"input-group"},[r("div",{staticClass:"input-group-text border-0 rounded-0"},[t._v("Largura")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.params.width,expression:"params.width",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.params.width},on:{input:[function(e){e.target.composing||t.$set(t.params,"width",t._n(e.target.value))},t.generate],blur:function(e){return t.$forceUpdate()}}}),t._v(" "),r("div",{staticClass:"input-group-text border-0 rounded-0"},[t._v("X")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.params.height,expression:"params.height",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.params.height},on:{input:[function(e){e.target.composing||t.$set(t.params,"height",t._n(e.target.value))},t.generate],blur:function(e){return t.$forceUpdate()}}}),t._v(" "),r("div",{staticClass:"input-group-text border-0 rounded-0"},[t._v("Altura")])])]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",[t._v("Cores")]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-6"},[r("ui-color",{on:{input:t.generate},model:{value:t.params.colorDark,callback:function(e){t.$set(t.params,"colorDark",e)},expression:"params.colorDark"}})],1),t._v(" "),r("div",{staticClass:"col-6"},[r("ui-color",{on:{input:t.generate},model:{value:t.params.colorLight,callback:function(e){t.$set(t.params,"colorLight",e)},expression:"params.colorLight"}})],1)])])])])],1),t._v(" "),r("div",{staticClass:"col-6"},[r("pre",[t._v("toUTF8String: "+t._s(t.toUTF8String()))]),t._v(" "),r("div",{staticClass:"el-tabs el-tabs--top el-tabs--border-card"},[r("div",{staticClass:"el-tabs__content text-center"},[t.base64Url?r("img",{attrs:{src:t.base64Url,alt:""}}):t._e()])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiPassword:r(547).default,UiColor:r(569).default})}}]);