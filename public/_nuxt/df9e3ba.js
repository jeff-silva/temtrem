(window.webpackJsonp=window.webpackJsonp||[]).push([[66,39,47,53],{590:function(t,e,n){var content=n(596);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("76496c6e",content,!0,{sourceMap:!1})},591:function(t,e,n){var content=n(600);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("28759eac",content,!0,{sourceMap:!1})},595:function(t,e,n){"use strict";n(590)},596:function(t,e,n){var r=n(43)(!1);r.push([t.i,".ui-pagination-btn{width:30px;height:30px;margin:0 2px;padding:4px 0 0;border-radius:50%}.ui-pagination-btn-active{background:#ddd}.ui-pagination-scroll{white-space:nowrap;overflow:auto;padding-bottom:3px}.ui-pagination-scroll::-webkit-scrollbar{height:4px}.ui-pagination-scroll::-webkit-scrollbar-thumb{background:#ccc;cursor:pointer}",""]),t.exports=r},597:function(t,e,n){"use strict";n.r(e);var r={props:{current_page:{default:1},from:{default:0},to:{default:0},last_page:{default:0},per_page:{default:0},total:{default:0}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{setPage:function(t){"+"==t?t=this.props.current_page+1:"-"==t&&(t=this.props.current_page-1),this.props.current_page=t,this.$emit("change",this.props)},onWheel:function(t){t.preventDefault(),(t.target.classList.contains("ui-pagination-scroll")?t.target:t.target.parentNode).scrollLeft+=t.deltaY/2}},data:function(){return{props:Object.assign({},this.$props)}}},o=(n(595),n(15)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.props.last_page>1?n("div",{staticClass:"ui-pagination"},[n("div",{staticClass:"d-flex"},[n("div",{staticClass:"pr-1"},[n("a",{staticClass:"btn btn-sm ui-pagination-btn",class:{"ui-pagination-btn-active":1==t.props.current_page},attrs:{href:"javascript:;"},on:{click:function(e){return t.setPage(1)}}},[n("i",{staticClass:"fa fa-fw fa-angle-double-left"})])]),t._v(" "),n("div",{staticClass:"pr-1"},[n("a",{staticClass:"btn btn-sm ui-pagination-btn",class:{"ui-pagination-btn-active":1==t.props.current_page},attrs:{href:"javascript:;"},on:{click:function(e){return t.setPage("-")}}},[n("i",{staticClass:"fa fa-fw fa-angle-left"})])]),t._v(" "),n("div",{staticClass:"text-center ui-pagination-scroll",on:{wheel:function(e){return t.onWheel(e)}}},t._l(t.props.last_page,(function(p){return n("a",{staticClass:"btn btn-sm ui-pagination-btn",class:{"ui-pagination-btn-active":t.props.current_page==p},attrs:{href:"javascript:;"},on:{click:function(e){return t.setPage(p)}}},[t._v("\r\n                "+t._s(p)+"\r\n            ")])})),0),t._v(" "),n("div",{staticClass:"pl-1"},[n("a",{staticClass:"btn btn-sm ui-pagination-btn",class:{"ui-pagination-btn-active":t.props.current_page==t.props.last_page},attrs:{href:"javascript:;"},on:{click:function(e){return t.setPage("+")}}},[n("i",{staticClass:"fa fa-fw fa-angle-right"})])]),t._v(" "),n("div",{staticClass:"pl-1"},[n("a",{staticClass:"btn btn-sm ui-pagination-btn",class:{"ui-pagination-btn-active":t.props.current_page==t.props.last_page},attrs:{href:"javascript:;"},on:{click:function(e){return t.setPage(t.props.last_page)}}},[n("i",{staticClass:"fa fa-fw fa-angle-double-right"})])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports},599:function(t,e,n){"use strict";n(591)},600:function(t,e,n){var r=n(43)(!1);r.push([t.i,".ui-table *{transition:all .3s ease}.ui-table table tbody td{vertical-align:middle}.ui-table-actions{position:relative;z-index:2}.ui-table-actions>.btn-group{position:absolute;top:-15px;right:0}.ui-table-actions-hidden{white-space:nowrap;opacity:0;visibility:hidden}.ui-table-actions .btn{margin-left:5px!important;border-radius:5px!important}.ui-table table tbody tr:hover .ui-table-actions-hidden{opacity:1;visibility:visible}.ui-table-fixed-header{overflow-y:scroll}.ui-table-fixed-header thead th{position:sticky;top:0;background:#f5f5f5;z-index:3}",""]),t.exports=r},601:function(t,e,n){"use strict";n.r(e);n(402),n(19),n(39);var r={props:{fixedHeader:{default:!0},select:{default:!1},loading:{default:!1},maxHeight:{default:"auto"},current_page:{default:1},from:{default:0},to:{default:0},last_page:{default:0},per_page:{default:0},total:{default:0},value:{default:function(){return[]}},data:{default:function(){return[]}}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{toggleSelect:function(t){for(var i in this.props.value)if(this.props.value[i]==t.item)return this.props.value.splice(i,1),void this.$emit("input",this.props.value);this.props.value.push(t.item),this.$emit("input",this.props.value)},toggleSelectAll:function(t){this.$el.querySelectorAll("input[type=checkbox]").forEach((function(e){t!=e&&(e.checked=t.checked,e.dispatchEvent(new Event("change")))}))},isSelected:function(t){for(var i in this.props.value)if(this.props.value[i]==t.item)return!0;return!1},getHeaders:function(){var t=this;this.headers=[],this.$el.querySelectorAll("table thead th").forEach((function(e){t.headers.push({text:e.innerText,width:e.getAttribute("width")})}))},onPaginationChange:function(t){this.props.current_page=t.current_page,this.$emit("update:current_page",this.props.current_page),this.$emit("paginate",t.current_page)}},computed:{compData:function(){return this.props.data.map((function(t,e){var n=t.id;return"number"==typeof n&&"string"==typeof n||(n=e),{_id:n,item:t}}))}},data:function(){var data={headers:[]};return data.props=Object.assign({},this.$props),data},mounted:function(){this.getHeaders()}},o=(n(599),n(15)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui-table"},[n("div",{staticStyle:{overflow:"auto"},style:{maxHeight:t.props.maxHeight}},[n("table",{staticClass:"table table-borderless table-striped bg-white shadow-sm m-0",class:{"table-hover":t.props.data.length>0,"ui-table-fixed-header":t.props.fixedHeader}},[n("thead",[n("tr",[t.select?n("th",{attrs:{width:"10px"}},[n("input",{attrs:{type:"checkbox"},on:{change:function(e){return t.toggleSelectAll(e.target)}}})]):t._e(),t._v(" "),t._t("header",(function(){return[n("th",[t._v(" ")])]})),t._v(" "),n("th",[t._v(" ")])],2)]),t._v(" "),n("tbody",[n("tr",[n("td",{staticClass:"p-0",attrs:{colspan:t.headers.length}},[t._t("loading",(function(){return[n("div",{staticStyle:{height:"5px",position:"relative"}},[t.props.loading?n("div",{staticClass:"progress rounded-0",staticStyle:{height:"100%"}},[n("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated",staticStyle:{width:"100%"},attrs:{role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"}})]):t._e()])]}))],2)]),t._v(" "),0!=t.props.data.length||t.props.loading?t._e():[n("tr",[n("td",{attrs:{colspan:t.headers.length}},[t._t("empty",(function(){return[t._v("Nenhum item carregado")]}))],2)])],t._v(" "),t._l(t.compData,(function(i){return n("tr",{key:i._id},[t.select?n("td",[n("input",{attrs:{type:"checkbox"},domProps:{checked:t.isSelected(i)},on:{change:function(e){return t.toggleSelect(i)}}})]):t._e(),t._v(" "),t._t("item",(function(){return[n("td",[n("pre",[t._v(t._s(i._id))])])]}),{item:i.item}),t._v(" "),n("td",{attrs:{width:"50px"}},[n("div",{staticClass:"ui-table-actions"},[n("div",{staticClass:"btn-group btn-group-sm"},[n("div",{staticClass:"btn-group btn-group-sm ui-table-actions-hidden"},[t._t("actions",(function(){return[t._v(" ")]}),{item:i.item})],2),t._v(" "),t._m(0,!0)])])])],2)}))],2)])]),t._v(" "),n("div",{staticClass:"bg-white"},[n("div",{staticClass:"row no-gutters align-items-center"},[n("div",{staticClass:"col-12 col-md-8 p-2"},[n("ui-pagination",t._b({on:{change:function(e){return t.onPaginationChange(e)}}},"ui-pagination",t.props,!1))],1),t._v(" "),n("div",{staticClass:"col-12 col-md-4 p-2 text-md-right"},[t._v("\r\n                Página "+t._s(t.props.current_page)+"/"+t._s(t.props.last_page)+"\r\n                  •  \r\n                "+t._s(t.props.total)+" Itens\r\n            ")])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn d-md-none",attrs:{href:"javascript:;"}},[e("i",{staticClass:"fa fa-fw fa-plus"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{UiPagination:n(597).default})},604:function(t,e,n){"use strict";n.r(e);n(6),n(36);var r={components:{TimeAgo:n(609).a},props:{value:{default:0},locale:{default:"pt_BR"},refresh:{default:60},long:{default:!0}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{validDatetime:function(t){return(t||"").replace("T"," ")}},data:function(){return{props:Object.assign({},this.$props)}}},o=n(15),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui-timeago",attrs:{title:t._f("datetime")(t.props.value)}},[t.props.value?n("time-ago",{attrs:{datetime:t.validDatetime(t.props.value),refresh:t.props.refresh,locale:t.props.locale,long:t.props.long}}):n("div",[t._v(" ")])],1)}),[],!1,null,null,null);e.default=component.exports},758:function(t,e,n){"use strict";n.r(e);var r={middleware:"auth",layout:"admin",data:function(){return{params:{q:""},results:{data:[]}}},methods:{searchBusiness:function(){var t=this;this.$axios.get("/api/temtrem-business/search").then((function(e){t.results=e.data}))}},mounted:function(){this.searchBusiness()}},o=n(15),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ui-table",t._b({scopedSlots:t._u([{key:"header",fn:function(){return[n("th",{attrs:{width:"200px"}},[t._v("Nome")]),t._v(" "),n("th",[t._v("Proprietário")]),t._v(" "),n("th",{attrs:{width:"400px"}},[t._v("Localização")]),t._v(" "),n("th",{attrs:{width:"300px"}},[t._v("Alterado em")])]},proxy:!0},{key:"item",fn:function(e){var r=e.item;return[n("td",[t._v(t._s(r.name))]),t._v(" "),n("td",[t._v(t._s(r.user?r.user.name:"Ninguém"))]),t._v(" "),n("td",[t._v(t._s(r.route)+", "+t._s(r.district)+", "+t._s(r.city))]),t._v(" "),n("td",[n("ui-timeago",{model:{value:r.updated_at,callback:function(e){t.$set(r,"updated_at",e)},expression:"item.updated_at"}})],1)]}},{key:"actions",fn:function(e){var r=e.item;return[n("nuxt-link",{staticClass:"btn btn-primary",attrs:{to:"/admin/temtrem/business/"+r.id}},[n("i",{staticClass:"fa fa-edit"})]),t._v(" "),n("button",{staticClass:"btn btn-danger",attrs:{type:"button"}},[n("i",{staticClass:"fas fa-times"})])]}}])},"ui-table",t.results,!1,!0)),t._v(" "),n("ui-actions",[n("nuxt-link",{staticClass:"btn btn-primary",attrs:{to:"/admin/temtrem/business/0"}},[t._v("\r\n            Novo negócio\r\n        ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiTimeago:n(604).default,UiTable:n(601).default,UiActions:n(401).default})}}]);