(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{614:function(t,e,o){var content=o(659);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(35).default)("5158fa6e",content,!0,{sourceMap:!1})},658:function(t,e,o){"use strict";var l=o(614);o.n(l).a},659:function(t,e,o){(e=o(34)(!1)).push([t.i,'.whatsapp-screen{background:#ece5dd;border-radius:5px;overflow:hidden;font-family:"Helvetica Neue",Helvetica}.whatsapp-msg{width:100%;height:auto;display:block;overflow:hidden}.whatsapp-msg .whatsapp-bubble{float:left;max-width:75%;width:auto;height:auto;display:block;background:#ebebeb;border-radius:5px;position:relative;margin:10px 0 3px 25px;box-shadow:0 2px 1px rgba(0,0,0,.2)}.whatsapp-msg .whatsapp-bubble.whatsapp-alt{margin:10px 25px 3px 0;background:#dcf8c6;float:right}.whatsapp-msg .whatsapp-bubble.whatsapp-follow{margin:2px 0 3px 25px}.whatsapp-msg .whatsapp-bubble.whatsapp-altfollow{margin:2px 25px 3px 0;background:#dcf8c6;float:right}.whatsapp-msg .whatsapp-bubble .whatsapp-txt{padding:8px 0;width:100%}.whatsapp-msg .whatsapp-bubble .whatsapp-txt .name{font-weight:600;font-size:14px;display:inline-table;padding:0 0 0 15px;margin:0 0 4px;color:#3498db}.whatsapp-msg .whatsapp-bubble .whatsapp-txt .name span{font-weight:400;color:#b3b3b3;overflow:hidden}.whatsapp-msg .whatsapp-bubble .whatsapp-txt .name.whatsapp-alt{color:#2ecc51}.whatsapp-msg .whatsapp-bubble .whatsapp-txt .whatsapp-message{font-size:14px;font-weight:500;padding:0 15px;margin:auto;color:#2b2b2b;display:table;white-space:pre}.whatsapp-msg .whatsapp-bubble .whatsapp-txt .whatsapp-timestamp{font-size:11px;margin:auto;padding:0 15px 0 0;display:table;float:right;position:relative;text-transform:uppercase;color:#999}.whatsapp-msg .whatsapp-bubble .whatsapp-bubble-arrow{position:absolute;float:left;left:-11px;top:0}.whatsapp-msg .whatsapp-bubble .whatsapp-bubble-arrow.whatsapp-alt{bottom:20px;left:auto;right:4px;float:right}.whatsapp-msg .whatsapp-bubble .whatsapp-bubble-arrow:after{content:"";position:absolute;border-top:15px solid #ebebeb;border-left:15px solid transparent;border-radius:4px 0 0 0;width:0;height:0}.whatsapp-msg .whatsapp-bubble .whatsapp-bubble-arrow.whatsapp-alt:after{border-top:15px solid #dcf8c6;transform:scaleX(-1)}@media only screen and (max-width:450px){.container{width:100%}.whatsapp-timestamp{display:none;color:red}}',""]),t.exports=e},731:function(t,e,o){"use strict";o.r(e);o(59);var l={layout:"tools",data:function(){return{phone:"",text:""}},computed:{whatsappUrls:function(){var t=this.phone.replace(/[^0-9]/g,""),text=encodeURI(this.text);if(!t&&!text)return[];var e=[];return e.push({title:"API",description:"Este link é mais utilizado para aplicações em smartphones",link:"https://api.whatsapp.com/send?phone=".concat(t,"&text=").concat(text)}),e.push({title:"Web",description:"Este tipo de link abre direto no navegador, entretanto não tem função nenhuma para dispositivos web.",link:"https://web.whatsapp.com/send?phone=".concat(t,"&text=").concat(text)}),e}}},n=(o(658),o(10)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"row no-gutters"},[o("div",{staticClass:"col-12 col-md-7 pr-md-3"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Telefone")]),t._v(" "),o("ui-phone",{model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),t._v(" "),o("div",{staticClass:"form-group"},[o("label",[t._v("Mensagem")]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),t._v(" "),o("br"),t._v(" "),t._l(t.whatsappUrls,(function(u){return o("div",{staticClass:"mt-2"},[o("div",{staticClass:"bg-white p-2"},[o("div",{staticClass:"font-weight-bold"},[t._v(t._s(u.title))]),t._v(" "),o("div",{staticClass:"text-muted"},[t._v(t._s(u.description))]),t._v(" "),o("div",{staticClass:"input-group mt-2"},[o("div",{staticClass:"form-control"},[o("a",{attrs:{href:u.link,target:"_blank"}},[t._v(t._s(u.link))])]),t._v(" "),o("div",{staticClass:"input-group-append"},[o("div",{staticClass:"input-group-btn"},[o("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.$copy(u.link).then((function(e){return t.$swal("Link copiado")}))}}},[o("i",{staticClass:"fas fa-copy"})])])])])])])}))],2),t._v(" "),o("div",{staticClass:"col-12 col-md-5"},[o("div",{staticClass:"whatsapp-screen mt-4"},[o("div",{staticClass:"p-4",staticStyle:{"margin-top":"200px"}},[t.text?o("div",{staticClass:"whatsapp-msg"},[o("div",{staticClass:"whatsapp-bubble whatsapp-altfollow"},[o("div",{staticClass:"whatsapp-txt"},[o("span",{staticClass:"whatsapp-timestamp"},[t._v("10:22 pm")]),t._v(" "),o("p",{staticClass:"whatsapp-message whatsapp-follow",domProps:{innerHTML:t._s(t.text)}})]),t._v(" "),o("div",{staticClass:"whatsapp-bubble-arrow whatsapp-alt"})])]):t._e()]),t._v(" "),t._m(0)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex align-items-center bg-white p-3"},[e("div",{},[e("i",{staticClass:"far fa-grin-alt fa-2x"})]),this._v(" "),e("div",{staticClass:"pl-3"},[e("i",{staticClass:"fas fa-paperclip fa-2x"})]),this._v(" "),e("div",{staticClass:"pl-3 flex-grow-1"}),this._v(" "),e("div",{},[e("i",{staticClass:"fas fa-microphone fa-2x"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{UiPhone:o(573).default})}}]);