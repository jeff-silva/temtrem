(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{688:function(t,n,e){"use strict";e.r(n);e(19);var o={props:{value:{default:!1},shown:{default:!1}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},data:function(){var t=this,data={target:!1};return data.props=Object.assign({},this.$props),data.events=[{type:"click",handler:function(n){t.hide();var e=t.$el.closest(".ui-dropdown");(e&&e.contains(n.target)||t.target&&(n.target==t.target||t.target.contains(n.target)))&&t.show()}}],data},methods:{toggle:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.props.shown?this.hide(t):this.show(t)},show:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&(this.target=t.target||!1),this.props.shown=!0,this.$emit("shown",this.props.shown)},hide:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&(this.target=t.target||!1),this.props.shown=!1,this.$emit("shown",this.props.shown)}},mounted:function(){this.events.forEach((function(t){window.addEventListener(t.type,t.handler)}))},beforeDestroy:function(){this.events.forEach((function(t){window.removeEventListener(t.type,t.handler)}))}},r=e(5),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ui-dropdown",staticStyle:{position:"relative","z-index":"9"}},[e("transition",{attrs:{name:"ui-dropdown-animation","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"}},[t.props.shown?e("div",{staticStyle:{position:"absolute",top:"0px",left:"0px",width:"100%","z-index":"9!important","animation-duration":"300ms"}},[t._t("content",(function(){return[e("div",{staticClass:"bg-white shadow-sm"},[t._v("\n                    content\n                ")])]}))],2):t._e()])],1)}),[],!1,null,null,null);n.default=component.exports}}]);