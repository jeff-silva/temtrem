(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{634:function(t,n,e){var content=e(694);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(37).default)("36b6f4b6",content,!0,{sourceMap:!1})},693:function(t,n,e){"use strict";e(634)},694:function(t,n,e){var o=e(36)(!1);o.push([t.i,".ui-carousel[data-v-23014aae]{position:relative}.ui-carousel-slider[data-v-23014aae]{position:relative;z-index:1}.ui-carousel-arrows[data-v-23014aae]{position:absolute;top:0;height:100%;z-index:2;background:none;border:none;outline:0!important;color:#ccc;font-size:25px;padding:0}.ui-carousel-arrows-prev[data-v-23014aae]{left:0}.ui-carousel-arrows-next[data-v-23014aae]{right:0}.ui-carousel-navigators[data-v-23014aae]{text-align:center}.ui-carousel-navigators-each[data-v-23014aae]{display:inline-block;padding:7px;background:hsla(0,0%,100%,.6);border-radius:50%;margin:0 5px}.ui-carousel-navigators-each-active[data-v-23014aae]{background:#fff}",""]),t.exports=o},769:function(t,n,e){"use strict";e.r(n);e(61);var o={components:{Flicking:e(739).a},props:{value:{default:0},options:{default:function(){return{}}}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t),this.flickingInit()}}},data:function(){return{props:Object.assign({},this.$props),flicking:!1,itemsTotal:0}},computed:{compOptions:function(){return Object.assign({circular:!0},this.options)}},methods:{flickingInit:function(){var t=this;setTimeout((function(){try{t.flicking=t.$refs.flicking,t.itemsTotal=t.$refs.flicking.getPanelCount(),t.$refs.flicking.moveTo(t.$props.value)}catch(t){console.error(t)}}),100)},onChange:function(t){this.props.value=t.index,this.$emit("input",this.props.value)},moveTo:function(t,n){this.$refs.flicking.moveTo(t,n)},prev:function(){this.$refs.flicking.prev()},next:function(){this.$refs.flicking.next()}},mounted:function(){this.flickingInit()}},r=(e(693),e(5)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ui-carousel"},[e("flicking",{ref:"flicking",staticClass:"ui-carousel-slider",attrs:{tag:"div",options:t.compOptions},on:{change:t.onChange}},[t._t("sliders")],2),t._v(" "),t._t("arrows",(function(){return[e("button",{staticClass:"ui-carousel-arrows ui-carousel-arrows-prev",attrs:{type:"button"},on:{click:function(n){return t.prev()}}},[e("i",{staticClass:"fa fa-fw fa-chevron-left"})]),t._v(" "),e("button",{staticClass:"ui-carousel-arrows ui-carousel-arrows-next",attrs:{type:"button"},on:{click:function(n){return t.next()}}},[e("i",{staticClass:"fa fa-fw fa-chevron-right"})])]}),{flicking:t.flicking,value:t.props.value}),t._v(" "),t._t("navigators",(function(){return[e("div",{staticClass:"ui-carousel-navigators"},t._l(t.itemsTotal,(function(i){return e("a",{staticClass:"ui-carousel-navigators-each",class:{"ui-carousel-navigators-each-active":i-1==t.props.value},attrs:{href:"javascript:void(0);"},on:{click:function(n){return t.moveTo(i-1)}}})})),0)]}),{flicking:t.flicking,value:t.props.value})],2)}),[],!1,null,"23014aae",null);n.default=component.exports}}]);