(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{657:function(t,e,n){var content=n(715);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("0829424c",content,!0,{sourceMap:!1})},714:function(t,e,n){"use strict";n(657)},715:function(t,e,n){var l=n(43)(!1);l.push([t.i,".ui-nav *{transition:all .2s ease}.ui-nav-horizontal{display:flex}.ui-nav-horizontal>.ui-nav-item{position:relative}.ui-nav-horizontal>.ui-nav-item>.ui-nav-child{position:absolute;top:100%;left:0}.ui-nav-horizontal.ui-level-0>.ui-nav-item .ui-nav-child{visibility:hidden;opacity:0}.ui-nav-horizontal>.ui-nav-item:active>.ui-nav-child,.ui-nav-horizontal>.ui-nav-item:hover>.ui-nav-child{visibility:visible;opacity:1}.ui-nav-horizontal.ui-level-0>.ui-nav-item>.ui-nav-child{background:#fff}.ui-nav-horizontal.ui-level-0>.ui-nav-item>.ui-nav-child>.ui-level-1>.ui-nav-item{width:200px}.ui-nav-horizontal.ui-level-0>.ui-nav-item>.ui-nav-child>.ui-level-1>.ui-nav-item>.ui-nav-child{top:0;left:100%}.ui-nav-horizontal.ui-level-0>.ui-nav-item>.ui-nav-child>.ui-level-1>.ui-nav-item>.ui-nav-child>.ui-nav-horizontal,.ui-nav-vertical,.ui-nav-vertical>.ui-nav-item{display:block}.ui-nav-vertical .ui-nav-child{padding-left:20px}",""]),t.exports=l},734:function(t,e,n){"use strict";n.r(e);n(4),n(27),n(33),n(39),n(19);var l={components:{"ui-nav":function(){return Promise.resolve().then(n.bind(null,734))}},props:{value:Array,type:{default:"horizontal"},level:{default:0},active:Function},watch:{$props:{deep:!0,handler:function(t){this.menuItems=this.getMenuItems(t)}},$route:{deep:!0,handler:function(t){this.$forceUpdate()}}},methods:{getMenuItems:function(t){return t.map((function(t){return Object.assign({title:"",to:"",showItems:!1,items:[]},t)}))},toggleDropdown:function(t){this.menuItems.forEach((function(e){e!=t&&(e.showItems=!1)})),t.showItems=!t.showItems},getNavVerticalItemStyle:function(t){return t.showItems?"transform:scaleY(1); transform-origin:top;":"transform:scaleY(0); transform-origin:top; height:0px;"}},data:function(){return{menuItems:this.getMenuItems(this.$props.value)}}},o=(n(714),n(15)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["horizontal"==t.type?n("div",{class:"ui-nav ui-nav-horizontal ui-level-"+t.level},t._l(t.menuItems,(function(i){return n("div",{staticClass:"ui-nav-item"},[n("nuxt-link",{staticClass:"p-2 btn text-left",attrs:{to:i.to}},[t._t("link",(function(){return[n("span",{attrs:{item:i},domProps:{innerHTML:t._s(i.title)}})]}))],2),t._v(" "),n("ui-nav",{staticClass:"ui-nav-child",attrs:{level:t.level+1},model:{value:i.items,callback:function(e){t.$set(i,"items",e)},expression:"i.items"}})],1)})),0):t._e(),t._v(" "),"vertical"==t.type?n("div",{class:"ui-nav ui-nav-vertical ui-level-"+t.level},t._l(t.menuItems,(function(i){return n("div",{staticClass:"ui-nav-item"},[n("div",{staticClass:"d-flex align-items-center"},[n("nuxt-link",{staticClass:"p-2 btn text-left flex-grow-1",attrs:{to:i.to},nativeOn:{click:function(e){i.items.length>0&&t.toggleDropdown(i)}}},[t._t("link",(function(){return[n("span",{attrs:{item:i},domProps:{innerHTML:t._s(i.title)}})]}))],2),t._v(" "),i.items.length>0?n("div",[n("a",{staticClass:"btn",attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.toggleDropdown(i)}}},[n("i",{staticClass:"fas fa-caret-down"})])]):t._e()],1),t._v(" "),n("ui-nav",{staticClass:"ui-nav-child",style:t.getNavVerticalItemStyle(i),attrs:{level:t.level+1,type:t.type},model:{value:i.items,callback:function(e){t.$set(i,"items",e)},expression:"i.items"}})],1)})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiNav:n(734).default})}}]);