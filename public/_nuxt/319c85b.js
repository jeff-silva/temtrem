(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{627:function(t,e,n){var content=n(666);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("f12c8f1e",content,!0,{sourceMap:!1})},644:function(t,e,n){"use strict";n.r(e);var o={components:{"ui-nav":function(){return Promise.resolve().then(n.bind(null,644))}},props:{value:Array,type:{default:"horizontal"},level:{default:0},active:Function},watch:{$props:{deep:!0,handler:function(t){this.menuItems=this.getMenuItems(t)}},$route:{deep:!0,handler:function(t){this.$forceUpdate()}}},methods:{getMenuItems:function(t){return t.map((function(t){return Object.assign({title:"",to:"",showItems:!1,items:[]},t)}))},toggleDropdown:function(t){this.menuItems.forEach((function(e){e!=t&&(e.showItems=!1)})),t.showItems=!t.showItems},getNavVerticalItemStyle:function(t){return t.showItems?"transform:scaleY(1); transform-origin:top;":"transform:scaleY(0); transform-origin:top; height:0px;"}},data:function(){return{menuItems:this.getMenuItems(this.$props.value)}}},l=(n(665),n(13)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["horizontal"==t.type?n("div",{class:"ui-nav ui-nav-horizontal ui-level-"+t.level},t._l(t.menuItems,(function(i){return n("div",{staticClass:"ui-nav-item"},[n("nuxt-link",{staticClass:"p-2 btn text-left",attrs:{to:i.to}},[t._t("link",[n("span",{attrs:{item:i},domProps:{innerHTML:t._s(i.title)}})])],2),t._v(" "),n("ui-nav",{staticClass:"ui-nav-child",attrs:{level:t.level+1},model:{value:i.items,callback:function(e){t.$set(i,"items",e)},expression:"i.items"}})],1)})),0):t._e(),t._v(" "),"vertical"==t.type?n("div",{class:"ui-nav ui-nav-vertical ui-level-"+t.level},t._l(t.menuItems,(function(i){return n("div",{staticClass:"ui-nav-item"},[n("div",{staticClass:"d-flex align-items-center"},[n("nuxt-link",{staticClass:"p-2 btn text-left flex-grow-1",attrs:{to:i.to},nativeOn:{click:function(e){i.items.length>0&&t.toggleDropdown(i)}}},[t._t("link",[n("span",{attrs:{item:i},domProps:{innerHTML:t._s(i.title)}})])],2),t._v(" "),i.items.length>0?n("div",[n("a",{staticClass:"btn",attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.toggleDropdown(i)}}},[n("i",{staticClass:"fas fa-caret-down"})])]):t._e()],1),t._v(" "),n("ui-nav",{staticClass:"ui-nav-child",style:t.getNavVerticalItemStyle(i),attrs:{level:t.level+1,type:t.type},model:{value:i.items,callback:function(e){t.$set(i,"items",e)},expression:"i.items"}})],1)})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiNav:n(644).default})},665:function(t,e,n){"use strict";var o=n(627);n.n(o).a},666:function(t,e,n){(e=n(32)(!1)).push([t.i,".ui-nav *{transition:all .2s ease}.ui-nav-horizontal{display:flex}.ui-nav-horizontal>.ui-nav-item{position:relative}.ui-nav-horizontal>.ui-nav-item>.ui-nav-child{position:absolute;top:100%;left:0}.ui-nav-horizontal.ui-level-0>.ui-nav-item .ui-nav-child{visibility:hidden;opacity:0}.ui-nav-horizontal>.ui-nav-item:active>.ui-nav-child,.ui-nav-horizontal>.ui-nav-item:hover>.ui-nav-child{visibility:visible;opacity:1}.ui-nav-horizontal.ui-level-0>.ui-nav-item>.ui-nav-child{background:#fff}.ui-nav-horizontal.ui-level-0>.ui-nav-item>.ui-nav-child>.ui-level-1>.ui-nav-item{width:200px}.ui-nav-horizontal.ui-level-0>.ui-nav-item>.ui-nav-child>.ui-level-1>.ui-nav-item>.ui-nav-child{top:0;left:100%}.ui-nav-horizontal.ui-level-0>.ui-nav-item>.ui-nav-child>.ui-level-1>.ui-nav-item>.ui-nav-child>.ui-nav-horizontal,.ui-nav-vertical,.ui-nav-vertical>.ui-nav-item{display:block}.ui-nav-vertical .ui-nav-child{padding-left:20px}",""]),t.exports=e},721:function(t,e,n){"use strict";n.r(e);n(23);var o={methods:{isActive:function(t){return location.search==t.to}},data:function(){return{items:[{to:"?route=home",title:"Home"},{to:"?route=institucional",title:"Institucional",items:[{to:"?route=nos",title:"Quem somos",items:[]},{to:"?route=diferencial",title:"Diferencial",items:[]},{to:"?route=historia",title:"Historia",items:[]},{to:"?route=midia",title:"Na mídia",items:[]}]},{to:"?route=category",title:"Categorias",items:[{to:"?route=toys",title:"Brinquedos",items:[{to:"?route=toys1",title:"Brinquedos 1",items:[]},{to:"?route=toys2",title:"Brinquedos 2",items:[]},{to:"?route=toys3",title:"Brinquedos 3",items:[]}]},{to:"?route=clothes",title:"Roupas",items:[{to:"?route=clothes1",title:"Roupas 1",items:[]},{to:"?route=clothes2",title:"Roupas 2",items:[]},{to:"?route=clothes3",title:"Roupas 3",items:[]}]},{to:"?route=electronic",title:"Eletrônicos",items:[{to:"?route=computers",title:"Computadores",items:[{to:"?route=2in1",title:"2 em 1",items:[{to:"?route=samsung",title:"Samsung",items:[]}]}]},{to:"?route=smartphones",title:"Smartphones",items:[{to:"?route=xiaomi",title:"Xiaomi",items:[]}]}]}]},{to:"?route=contact",title:"Contato"}]}}},l=n(13),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-2"},[n("ui-nav",{attrs:{type:"vertical",active:t.isActive},model:{value:t.items,callback:function(e){t.items=e},expression:"items"}})],1),t._v(" "),n("div",{staticClass:"col-10"},[n("ui-nav",{attrs:{active:t.isActive},model:{value:t.items,callback:function(e){t.items=e},expression:"items"}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiNav:n(644).default})}}]);