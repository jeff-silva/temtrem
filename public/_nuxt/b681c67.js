(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{558:function(t,e,o){"use strict";o.r(e);var n={props:{value:{default:!1},shown:{default:!1}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},data:function(){var t=this,data={target:!1};return data.props=Object.assign({},this.$props),data.events=[{type:"click",handler:function(e){t.hide();var o=t.$el.closest(".ui-dropdown");(o&&o.contains(e.target)||t.target&&(e.target==t.target||t.target.contains(e.target)))&&t.show()}}],data},methods:{toggle:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.props.shown?this.hide(t):this.show(t)},show:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&(this.target=t.target||!1),this.props.shown=!0,this.$emit("shown",this.props.shown)},hide:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&(this.target=t.target||!1),this.props.shown=!1,this.$emit("shown",this.props.shown)}},mounted:function(){this.events.forEach((function(t){window.addEventListener(t.type,t.handler)}))},beforeDestroy:function(){this.events.forEach((function(t){window.removeEventListener(t.type,t.handler)}))}},r=o(13),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui-dropdown",staticStyle:{position:"relative","z-index":"9"}},[e("transition",{attrs:{name:"ui-dropdown-animation","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"}},[this.props.shown?e("div",{staticStyle:{position:"absolute",top:"0px",left:"0px",width:"100%","z-index":"9!important","animation-duration":"300ms"}},[this._t("content",[e("div",{staticClass:"bg-white shadow-sm"},[this._v("\n                    content\n                ")])])],2):this._e()])],1)}),[],!1,null,null,null);e.default=component.exports},568:function(t,e,o){"use strict";o.r(e);var n=o(590),r={components:{Compact:n.Compact,Sketch:n.Sketch,Chrome:n.Chrome,Photoshop:n.Photoshop},props:{value:{default:""},type:{default:"chrome"},display:{default:!1},showInput:{default:!0}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},data:function(){var data={};return data.props=Object.assign({},this.$props),data.tempValue=data.props.value,data},computed:{compColorStyle:function(){var style={position:"absolute",top:"100%",left:0,zIndex:9};return style}},methods:{emit:function(t){this.props.value=t.hex8,this.$emit("input",this.props.value)},show:function(t){this.$refs.dropdown.show(t)},hide:function(t){this.$refs.dropdown.hide(t)},toggle:function(t){this.$refs.dropdown.toggle(t)}}},l=o(13),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ui-color input-group",staticStyle:{position:"relative"}},[o("div",{staticClass:"input-group-prepend"},[o("div",{staticClass:"input-group-btn"},[o("a",{staticClass:"btn rounded-0",style:"background:"+t.props.value+";",attrs:{href:"javascript:;"},on:{click:function(e){return t.show(e)}}},[t._v("   ")])])]),t._v(" "),t.props.showInput?o("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.props.value},on:{focus:function(e){return t.show(e)},input:function(e){e.target.composing||t.$set(t.props,"value",e.target.value)}}}):t._e(),t._v(" "),o("ui-dropdown",{ref:"dropdown",style:t.compColorStyle,scopedSlots:t._u([{key:"content",fn:function(){return[o(t.props.type,{tag:"component",staticClass:"ui-color-component",on:{input:function(e){return t.emit(t.tempValue)}},model:{value:t.tempValue,callback:function(e){t.tempValue=e},expression:"tempValue"}})]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiDropdown:o(558).default})},752:function(t,e,o){"use strict";o.r(e);o(9),o(10),o(4),o(34);var n=o(11),r=o(25),l=function(){function t(e){Object(n.a)(this,t),this.r=0,this.g=0,this.b=0,this.hex="#000000",(e=e.replace(/[^0-9]/,"")).length<3||(e.length<6&&(e=""+e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),this.r=parseInt(e.slice(0,2),16),this.g=parseInt(e.slice(2,4),16),this.b=parseInt(e.slice(4,6),16))}return Object(r.a)(t,[{key:"padZero",value:function(t,e){return e=e||2,(new Array(e).join("0")+t).slice(-e)}},{key:"inverse",value:function(){return this.r=255-this.r,this.g=255-this.g,this.b=255-this.b,this.hex=this.toHex(),this}},{key:"offset",value:function(t){return this.r=(this.r+t)%255,this.g=(this.g+t)%255,this.b=(this.b+t)%255,this.hex=this.toHex(),this}},{key:"toHex",value:function(){var t=this.r.toString(16);t=1==t.length?"0"+t:t;var g=this.g.toString(16);g=1==g.length?"0"+g:g;var b=this.b.toString(16);return"#"+t+g+(b=1==b.length?"0"+b:b)}}]),t}(),c={layout:"tools",data:function(){return{color:"#FFFF00"}},computed:{colors:function(){var t=[];return t.push({label:"Cor inversa",color:new l(this.color).inverse()}),t.push({label:"Offset -50",color:new l(this.color).offset(-50)}),t.push({label:"Offset +50",color:new l(this.color).offset(50)}),t}}},h=o(13),component=Object(h.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"row"},[o("div",{staticClass:"col-6"},[o("ui-color",{model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1),t._v(" "),o("div",{staticClass:"col-6"},t._l(t.colors,(function(e){return o("div",{staticClass:"d-flex mb-1 border p-1"},[o("div",{staticClass:"p-2",staticStyle:{width:"40px"},style:{background:e.color.hex}},[t._v(" ")]),t._v(" "),o("div",{staticClass:"p-2 flex-grow-1"},[t._v(t._s(e.label))])])})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiColor:o(568).default})}}]);