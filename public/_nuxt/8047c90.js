(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{577:function(t,e,n){var content=n(626);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("4fb14fff",content,!0,{sourceMap:!1})},625:function(t,e,n){"use strict";var o=n(577);n.n(o).a},626:function(t,e,n){(e=n(36)(!1)).push([t.i,".ui-carousel[data-v-267b3cd4]{position:relative}.ui-carousel-slider[data-v-267b3cd4]{position:relative;z-index:1}.ui-carousel-arrows[data-v-267b3cd4]{position:absolute;top:0;height:100%;z-index:2;background:none;border:none;outline:0!important;color:#ccc;font-size:25px;padding:0}.ui-carousel-arrows-prev[data-v-267b3cd4]{left:0}.ui-carousel-arrows-next[data-v-267b3cd4]{right:0}.ui-carousel-navigators[data-v-267b3cd4]{text-align:center}.ui-carousel-navigators-each[data-v-267b3cd4]{display:inline-block;padding:7px;background:hsla(0,0%,100%,.6);border-radius:50%;margin:0 5px}.ui-carousel-navigators-each-active[data-v-267b3cd4]{background:#fff}",""]),t.exports=e},644:function(t,e,n){"use strict";n.r(e);var o={components:{Flicking:n(653).a},props:{value:{default:0},options:{default:function(){return{}}}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t),this.flickingInit()}}},data:function(){return{props:Object.assign({},this.$props),flicking:!1,itemsTotal:0}},computed:{compOptions:function(){return Object.assign({circular:!0},this.options)}},methods:{flickingInit:function(){var t=this;setTimeout((function(){try{t.flicking=t.$refs.flicking,t.itemsTotal=t.$refs.flicking.getPanelCount(),t.$refs.flicking.moveTo(t.$props.value)}catch(t){console.error(t)}}),100)},onChange:function(t){this.props.value=t.index,this.$emit("input",this.props.value)},moveTo:function(t,e){this.$refs.flicking.moveTo(t,e)},prev:function(){this.$refs.flicking.prev()},next:function(){this.$refs.flicking.next()}},mounted:function(){this.flickingInit()}},r=(n(625),n(22)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui-carousel"},[n("flicking",{ref:"flicking",staticClass:"ui-carousel-slider",attrs:{tag:"div",options:t.compOptions},on:{change:t.onChange}},[t._t("sliders")],2),t._v(" "),t._t("arrows",[n("button",{staticClass:"ui-carousel-arrows ui-carousel-arrows-prev",attrs:{type:"button"},on:{click:function(e){return t.prev()}}},[n("i",{staticClass:"fa fa-fw fa-chevron-left"})]),t._v(" "),n("button",{staticClass:"ui-carousel-arrows ui-carousel-arrows-next",attrs:{type:"button"},on:{click:function(e){return t.next()}}},[n("i",{staticClass:"fa fa-fw fa-chevron-right"})])],{flicking:t.flicking,value:t.props.value}),t._v(" "),t._t("navigators",[n("div",{staticClass:"ui-carousel-navigators"},t._l(t.itemsTotal,(function(i){return n("a",{staticClass:"ui-carousel-navigators-each",class:{"ui-carousel-navigators-each-active":i-1==t.props.value},attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.moveTo(i-1)}}})})),0)],{flicking:t.flicking,value:t.props.value})],2)}),[],!1,null,"267b3cd4",null);e.default=component.exports},762:function(t,e,n){"use strict";n.r(e);var o={layout:"coreui/admin",data:function(){return{carouselIndex:0,items:[0,1,2,3,4,5,6,7,8,9].map((function(t){return{id:t,text:"This is the content #".concat(t),src:"https://source.unsplash.com/random/200x200/?r=".concat(t)}}))}}},r=n(22),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row no-gutters"},[n("div",{staticClass:"col-6"},[n("ui-carousel",{scopedSlots:t._u([{key:"sliders",fn:function(){return t._l(t.items,(function(i){return n("div",{staticStyle:{width:"100%",border:"solid 5px green"}},[n("img",{attrs:{src:i.src,alt:"",width:"100%"}})])}))},proxy:!0}]),model:{value:t.carouselIndex,callback:function(e){t.carouselIndex=e},expression:"carouselIndex"}})],1),t._v(" "),n("div",{staticClass:"col-6"},[n("ui-carousel",{scopedSlots:t._u([{key:"sliders",fn:function(){return t._l(t.items,(function(i){return n("div",{staticStyle:{width:"100%",border:"solid 5px green"}},[n("img",{attrs:{src:i.src,alt:"",width:"100%"}})])}))},proxy:!0}]),model:{value:t.carouselIndex,callback:function(e){t.carouselIndex=e},expression:"carouselIndex"}})],1)]),t._v(" "),n("pre",[t._v("$data: "+t._s(t.$data))])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiCarousel:n(644).default})}}]);