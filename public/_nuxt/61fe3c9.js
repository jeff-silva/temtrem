(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{743:function(t,e,o){"use strict";o.r(e);var l={layout:"tools",data:function(){return{input:""}},computed:{output:function(){return{upper:this.input.toUpperCase(),lower:this.input.toLowerCase()}}}},r=o(13),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-md-4"},[o("div",{staticClass:"mb-1"},[t._v("Insira o texto")]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"form-control",staticStyle:{height:"300px"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"col-12 col-md-4"},[o("div",{staticClass:"mb-1"},[t._v("Maiúscula")]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.output.upper,expression:"output.upper"}],staticClass:"form-control",staticStyle:{height:"300px"},domProps:{value:t.output.upper},on:{input:function(e){e.target.composing||t.$set(t.output,"upper",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"col-12 col-md-4"},[o("div",{staticClass:"mb-1"},[t._v("Minúscula")]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.output.lower,expression:"output.lower"}],staticClass:"form-control",staticStyle:{height:"300px"},domProps:{value:t.output.lower},on:{input:function(e){e.target.composing||t.$set(t.output,"lower",e.target.value)}}})])])])}),[],!1,null,null,null);e.default=component.exports}}]);