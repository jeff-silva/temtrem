(window.webpackJsonp=window.webpackJsonp||[]).push([[43,21],{614:function(t,e,n){"use strict";n.r(e);n(19);var o={props:{value:{default:!1},shown:{default:!1}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},data:function(){var t=this,data={target:!1};return data.props=Object.assign({},this.$props),data.events=[{type:"click",handler:function(e){t.hide();var n=t.$el.closest(".ui-dropdown");(n&&n.contains(e.target)||t.target&&(e.target==t.target||t.target.contains(e.target)))&&t.show()}}],data},methods:{toggle:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.props.shown?this.hide(t):this.show(t)},show:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&(this.target=t.target||!1),this.props.shown=!0,this.$emit("shown",this.props.shown)},hide:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&(this.target=t.target||!1),this.props.shown=!1,this.$emit("shown",this.props.shown)}},mounted:function(){this.events.forEach((function(t){window.addEventListener(t.type,t.handler)}))},beforeDestroy:function(){this.events.forEach((function(t){window.removeEventListener(t.type,t.handler)}))}},r=n(15),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui-dropdown",staticStyle:{position:"relative","z-index":"9"}},[n("transition",{attrs:{name:"ui-dropdown-animation","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"}},[t.props.shown?n("div",{staticStyle:{position:"absolute",top:"0px",left:"0px",width:"100%","z-index":"9!important","animation-duration":"300ms"}},[t._t("content",(function(){return[n("div",{staticClass:"bg-white shadow-sm"},[t._v("\n                    content\n                ")])]}))],2):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports},659:function(t,e,n){var content=n(719);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("57e2356c",content,!0,{sourceMap:!1})},718:function(t,e,n){"use strict";n(659)},719:function(t,e,n){var o=n(43)(!1);o.push([t.i,".ui-select2 *{transition:all .3s ease}.ui-select2>.form-control{cursor:pointer}",""]),t.exports=o},777:function(t,e,n){"use strict";n.r(e);n(39),n(19),n(401);var o=n(1);n.n(o).a.component("ui-select2-item",{template:"<div></div>"});var r={props:{value:{default:!1},data:{default:function(){return[]}},name:{default:"some-name"},placeholder:{default:"Selecione"},dropdown:{default:!1},multiple:{default:!1}},components:{uiSelectOption:{props:{value:{default:function(){return{}}}}}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},data:function(){return{options:[],props:Object.assign({},this.$props)}},computed:{compData:function(){return this.data.map((function(t){return{id:"input-"+(t.id||btoa(JSON.stringify(t))),option:t}}))}},methods:{emit:function(){this.$emit("input",this.props.value)},setDropdown:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t=null===t?!!this.props.dropdown:t,this.props.dropdown=t},getOptions:function(){var t=[];return this.$el.querySelectorAll(".ui-select2-options>*").forEach((function(e){e.classList.add("ui-select2-option"),t.push({html:e.innerHTML,text:e.innerText})})),t},select:function(option){if(this.props.multiple){this.props.value=Array.isArray(this.props.value)?this.props.value:[];var t=this.props.value.indexOf(option);return t>=0?this.props.value.splice(t,1):this.props.value.push(option),void this.emit()}this.props.value=this.props.value!=option&&option,this.emit()},selected:function(option){return this.props.multiple?(this.props.value=Array.isArray(this.props.value)?this.props.value:[],this.props.value.indexOf(option)>=0):(this.props.value=!Array.isArray(this.props.value)&&this.props.value,this.props.value==option)}},mounted:function(){this.options=this.getOptions(),this.setDropdown()}},l=(n(718),n(15)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui-select2",staticStyle:{position:"relative"}},[n("div",{ref:"formControl",staticClass:"form-control",staticStyle:{height:"auto"},on:{click:function(e){return t.$refs.dropdown.show(e)}}},[t.props.multiple?n("div",[0==t.props.value.length?n("div",[t._t("empty",(function(){return[t._v(t._s(t.props.placeholder))]}))],2):n("div",[n("div",{staticClass:"d-flex align-items-center"},[n("div",{staticClass:"flex-grow-1",staticStyle:{overflow:"hidden","white-space":"nowrap"}},[t._l(t.props.value,(function(e){return t._t("selected",null,{option:e})}))],2),t._v(" "),t.props.value.length>1?n("div",{staticClass:"pl-2"},[t._v(t._s(t.props.value.length))]):t._e()])])]):n("div",[t.props.value?n("div",[t._t("selected",null,{option:t.props.value})],2):n("div",[t._t("empty",(function(){return[t._v(t._s(t.props.placeholder))]}))],2)])]),t._v(" "),n("ui-dropdown",{ref:"dropdown",scopedSlots:t._u([{key:"content",fn:function(){return[n("div",{staticClass:"bg-white shadow mt-1"},[t._t("options",null,{select:t.select,selected:t.selected})],2)]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiDropdown:n(614).default})}}]);