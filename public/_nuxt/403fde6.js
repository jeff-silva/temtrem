(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{562:function(t,e,n){var content=n(594);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("8af52b4a",content,!0,{sourceMap:!1})},563:function(t,e,n){var content=n(596);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("4772817a",content,!0,{sourceMap:!1})},593:function(t,e,n){"use strict";var o=n(562);n.n(o).a},594:function(t,e,n){(e=n(32)(!1)).push([t.i,".ui-tabs-tab-top.ui-tabs-halign-right{justify-content:flex-end}.ui-tabs-tab-right{border-bottom:none;border-left:1px solid #dee2e6}.ui-tabs-tab-right.ui-tabs-halign-right a{text-align:right}.ui-tabs-tab-right a{display:block!important;width:100%;border-radius:0 3px 3px 0!important}.ui-tabs-tab-right a.active,.ui-tabs-tab-right a:hover{border-color:#dee2e6 #dee2e6 #dee2e6 transparent!important}.ui-tabs-tab-bottom{border-bottom:none;border-top:1px solid #dee2e6}.ui-tabs-tab-bottom.ui-tabs-halign-right{justify-content:flex-end}.ui-tabs-tab-bottom a{border-radius:0 0 3px 3px!important}.ui-tabs-tab-bottom a.active,.ui-tabs-tab-bottom a:hover{border-color:transparent #dee2e6 #dee2e6!important}.ui-tabs-tab-left{border-bottom:none;border-right:1px solid #dee2e6}.ui-tabs-tab-left.ui-tabs-halign-right a{text-align:right}.ui-tabs-tab-left a{display:block!important;width:100%;border-radius:3px 3px 0 0!important}.ui-tabs-tab-left a.active,.ui-tabs-tab-left a:hover{border-color:#dee2e6 transparent #dee2e6 #dee2e6!important}",""]),t.exports=e},595:function(t,e,n){"use strict";var o=n(563);n.n(o).a},596:function(t,e,n){(e=n(32)(!1)).push([t.i,"",""]),t.exports=e},606:function(t,e,n){"use strict";n.r(e);var o={name:"ui-tabs",props:{value:{default:0},position:{default:"top"},halign:{default:"left"}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t),this.setActive(this.props.value)}}},methods:{getHeaders:function(){var t=this,e=[];return this.$el.querySelectorAll(".ui-tabs-content > *").forEach((function(n,o){e.push({title:n.dataset.title||"Item ".concat(o),bind:{href:"javascript:void(0);",class:{"nav-link":!0,active:o==t.props.value}}})})),e},setActive:function(t){var e=this;this.props.value=t,this.$emit("input",t),this.headers=this.getHeaders(),this.$el.querySelectorAll(".ui-tabs-content > *").forEach((function(t,n){t.style.display=e.props.value==n?"block":"none"}))}},data:function(){return{headers:[],props:Object.assign({},this.$props)}},mounted:function(){this.headers=this.getHeaders(),this.setActive(this.props.value)}},r=(n(593),n(595),n(13)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui-tabs"},["top"==t.props.position?n("ul",{class:"nav nav-tabs ui-tabs-tab ui-tabs-tab-top ui-tabs-halign-"+t.props.halign},[t._l(t.headers,(function(e,o){return[n("a",{staticClass:"nav-link",class:{active:o==t.props.value},attrs:{href:"javascript:void(0);"},domProps:{innerHTML:t._s(e.title)},on:{click:function(e){return t.setActive(o)}}})]}))],2):t._e(),t._v(" "),n("div",{staticClass:"row no-gutters row-eq-height"},["left"==t.props.position?n("div",{staticClass:"col-2"},["left"==t.props.position?n("ul",{class:"nav nav-tabs ui-tabs-tab ui-tabs-tab-left ui-tabs-halign-"+t.props.halign},[t._l(t.headers,(function(e,o){return[n("a",{staticClass:"nav-link",class:{active:o==t.props.value},attrs:{href:"javascript:void(0);"},domProps:{innerHTML:t._s(e.title)},on:{click:function(e){return t.setActive(o)}}})]}))],2):t._e()]):t._e(),t._v(" "),n("div",{staticClass:"col"},[n("div",{staticClass:"ui-tabs-content p-2",class:"ui-tabs-content-"+t.props.position},[t._t("content")],2)]),t._v(" "),"right"==t.props.position?n("div",{staticClass:"col-2"},["right"==t.props.position?n("ul",{class:"nav nav-tabs ui-tabs-tab ui-tabs-tab-right ui-tabs-halign-"+t.props.halign},[t._l(t.headers,(function(e,o){return[n("a",{staticClass:"nav-link",class:{active:o==t.props.value},attrs:{href:"javascript:void(0);"},domProps:{innerHTML:t._s(e.title)},on:{click:function(e){return t.setActive(o)}}})]}))],2):t._e()]):t._e()]),t._v(" "),"bottom"==t.props.position?n("ul",{class:"nav nav-tabs ui-tabs-tab ui-tabs-tab-bottom ui-tabs-halign-"+t.props.halign},[t._l(t.headers,(function(e,o){return[n("a",{staticClass:"nav-link",class:{active:o==t.props.value},attrs:{href:"javascript:void(0);"},domProps:{innerHTML:t._s(e.title)},on:{click:function(e){return t.setActive(o)}}})]}))],2):t._e()])}),[],!1,null,null,null);e.default=component.exports},713:function(t,e,n){"use strict";n.r(e);var o={layout:"coreui/admin",data:function(){return{tabIndex:0}}},r=n(13),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-6 pb-4"},[n("ui-tabs",{staticClass:"p-1 shadow-sm bg-white",scopedSlots:t._u([{key:"content",fn:function(){return[n("div",{attrs:{"data-title":"Aaa"}},[t._v("Tabs top align left")]),t._v(" "),n("div",{attrs:{"data-title":"Bbb"}},[t._v("Bbb")]),t._v(" "),n("div",{attrs:{"data-title":"Ccc"}},[t._v("Ccc")])]},proxy:!0}]),model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}})],1),t._v(" "),n("div",{staticClass:"col-6 pb-4"},[n("ui-tabs",{staticClass:"p-1 shadow-sm bg-white",attrs:{halign:"right"},scopedSlots:t._u([{key:"content",fn:function(){return[n("div",{attrs:{"data-title":"Aaa"}},[t._v("Tabs top align right")]),t._v(" "),n("div",{attrs:{"data-title":"Bbb"}},[t._v("Bbb")]),t._v(" "),n("div",{attrs:{"data-title":"Ccc"}},[t._v("Ccc")])]},proxy:!0}]),model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}})],1),t._v(" "),n("div",{staticClass:"col-6 pb-4"},[n("ui-tabs",{staticClass:"p-1 shadow-sm bg-white",attrs:{position:"right"},scopedSlots:t._u([{key:"content",fn:function(){return[n("div",{attrs:{"data-title":"Aaa"}},[t._v("Tabs right align left")]),t._v(" "),n("div",{attrs:{"data-title":"Bbb"}},[t._v("Bbb")]),t._v(" "),n("div",{attrs:{"data-title":"Ccc"}},[t._v("Ccc")])]},proxy:!0}]),model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}})],1),t._v(" "),n("div",{staticClass:"col-6 pb-4"},[n("ui-tabs",{staticClass:"p-1 shadow-sm bg-white",attrs:{position:"right",halign:"right"},scopedSlots:t._u([{key:"content",fn:function(){return[n("div",{attrs:{"data-title":"Aaa"}},[t._v("Tabs top align right")]),t._v(" "),n("div",{attrs:{"data-title":"Bbb"}},[t._v("Bbb")]),t._v(" "),n("div",{attrs:{"data-title":"Ccc"}},[t._v("Ccc")])]},proxy:!0}]),model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}})],1),t._v(" "),n("div",{staticClass:"col-6 pb-4"},[n("ui-tabs",{staticClass:"p-1 shadow-sm bg-white",attrs:{position:"bottom",halign:"left"},scopedSlots:t._u([{key:"content",fn:function(){return[n("div",{attrs:{"data-title":"Aaa"}},[t._v("Tabs bottom align left")]),t._v(" "),n("div",{attrs:{"data-title":"Bbb"}},[t._v("Bbb")]),t._v(" "),n("div",{attrs:{"data-title":"Ccc"}},[t._v("Ccc")])]},proxy:!0}]),model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}})],1),t._v(" "),n("div",{staticClass:"col-6 pb-4"},[n("ui-tabs",{staticClass:"p-1 shadow-sm bg-white",attrs:{position:"bottom",halign:"right"},scopedSlots:t._u([{key:"content",fn:function(){return[n("div",{attrs:{"data-title":"Aaa"}},[t._v("Tabs bottom align right")]),t._v(" "),n("div",{attrs:{"data-title":"Bbb"}},[t._v("Bbb")]),t._v(" "),n("div",{attrs:{"data-title":"Ccc"}},[t._v("Ccc")])]},proxy:!0}]),model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}})],1),t._v(" "),n("div",{staticClass:"col-6 pb-4"},[n("ui-tabs",{staticClass:"p-1 shadow-sm bg-white",attrs:{position:"left",halign:"left"},scopedSlots:t._u([{key:"content",fn:function(){return[n("div",{attrs:{"data-title":"Aaa"}},[t._v("Tabs left align left")]),t._v(" "),n("div",{attrs:{"data-title":"Bbb"}},[t._v("Bbb")]),t._v(" "),n("div",{attrs:{"data-title":"Ccc"}},[t._v("Ccc")])]},proxy:!0}]),model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}})],1),t._v(" "),n("div",{staticClass:"col-6 pb-4"},[n("ui-tabs",{staticClass:"p-1 shadow-sm bg-white",attrs:{position:"left",halign:"right"},scopedSlots:t._u([{key:"content",fn:function(){return[n("div",{attrs:{"data-title":"Aaa"}},[t._v("Tabs left align right")]),t._v(" "),n("div",{attrs:{"data-title":"Bbb"}},[t._v("Bbb")]),t._v(" "),n("div",{attrs:{"data-title":"Ccc"}},[t._v("Ccc")])]},proxy:!0}]),model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiTabs:n(606).default})}}]);