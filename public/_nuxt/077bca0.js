(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{750:function(t,n,e){"use strict";e.r(n);e(49);var o={layout:"tools",data:function(){return{input:""}},computed:{reordered:function(){return this.input.split(/\n/g).filter((function(t){return!!t})).sort((function(a,b){return a<b?-1:a>b?1:0}))}}},r=e(13),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-6"},[e("div",{staticClass:"mb-1"},[t._v("Insira o texto")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"form-control",staticStyle:{height:"300px"},domProps:{value:t.input},on:{input:function(n){n.target.composing||(t.input=n.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-12 col-md-6"},[e("div",{staticClass:"mb-1"},[t._v("Saída ordenada")]),t._v(" "),e("div",{staticClass:"bg-white shadow-sm p-2",staticStyle:{"min-height":"300px"}},t._l(t.reordered,(function(n){return e("div",[t._v("\r\n                    "+t._s(n)+"\r\n                ")])})),0)])])])}),[],!1,null,null,null);n.default=component.exports}}]);