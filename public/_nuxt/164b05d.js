(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{624:function(e,t,r){var content=r(685);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(44).default)("450f29ec",content,!0,{sourceMap:!1})},684:function(e,t,r){"use strict";r(624)},685:function(e,t,r){var o=r(43)(!1);o.push([e.i,".ui-check{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer!important}.ui-check-input input{display:none}.ui-check-input input+div{border:5px solid red}",""]),e.exports=o},759:function(e,t,r){"use strict";r.r(t);r(61);var o={props:{value:{default:""},type:{default:"checkbox"},trueValue:{default:"1"},falseValue:{default:""},dark:{default:!0},colorClass:{default:"dark"}},watch:{$props:{deep:!0,handler:function(e){this.props=Object.assign({},e)}}},methods:{emit:function(){var e=this;setTimeout((function(){e.$emit("input",e.props.value)}),10)}},computed:{compIconBind:function(){var e={class:[],style:{fontSize:"25px"}};return"checkbox"==this.props.type?(e.class.push(this.props.dark?"fas":"far"),e.class.push(this.props.value==this.props.trueValue?"fa-check-square":"fa-square")):"radio"==this.props.type?(e.class.push(this.props.dark?"fas":"far"),e.class.push(this.props.value==this.props.trueValue?"fa-dot-circle":"fa-circle")):"toggle"==this.props.type&&(e.class.push("fas"),e.class.push(this.props.value==this.props.trueValue?"fa-toggle-on":"fa-toggle-off"),e.style.fontSize="30px"),e.class.push("text-".concat(this.props.colorClass)),e},compInputBind:function(){return{class:["d-none"],type:"checkbox"}}},data:function(){var data={};return data.props=Object.assign({},this.$props),data}},l=(r(684),r(15)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ui-check"},[r("label",{staticClass:"input-group"},[r("div",{staticClass:"input-group-prepend"},[r("div",{staticClass:"input-group-text bg-transparent border-0 p-1"},[r("i",e._b({},"i",e.compIconBind,!1)),e._v(" "),"checkbox"===e.compInputBind.type?r("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],attrs:{"true-value":e.props.trueValue,"false-value":e.props.falseValue,type:"checkbox"},domProps:{checked:Array.isArray(e.props.value)?e._i(e.props.value,null)>-1:e._q(e.props.value,e.props.trueValue)},on:{input:function(t){return e.emit()},change:function(t){var r=e.props.value,o=t.target,l=o.checked?e.props.trueValue:e.props.falseValue;if(Array.isArray(r)){var n=e._i(r,null);o.checked?n<0&&e.$set(e.props,"value",r.concat([null])):n>-1&&e.$set(e.props,"value",r.slice(0,n).concat(r.slice(n+1)))}else e.$set(e.props,"value",l)}}},"input",e.compInputBind,!1)):"radio"===e.compInputBind.type?r("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],attrs:{"true-value":e.props.trueValue,"false-value":e.props.falseValue,type:"radio"},domProps:{checked:e._q(e.props.value,null)},on:{input:function(t){return e.emit()},change:function(t){return e.$set(e.props,"value",null)}}},"input",e.compInputBind,!1)):r("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],attrs:{"true-value":e.props.trueValue,"false-value":e.props.falseValue,type:e.compInputBind.type},domProps:{value:e.props.value},on:{input:[function(t){t.target.composing||e.$set(e.props,"value",t.target.value)},function(t){return e.emit()}]}},"input",e.compInputBind,!1))])]),e._v(" "),r("div",{staticClass:"form-control bg-transparent border-0"},[e._t("default")],2)])])}),[],!1,null,null,null);t.default=component.exports}}]);