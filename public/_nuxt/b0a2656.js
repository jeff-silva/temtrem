(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{545:function(t,e,n){var content=n(552);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("eed70b5e",content,!0,{sourceMap:!1})},546:function(t,e,n){var content=n(554);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("6539bdd3",content,!0,{sourceMap:!1})},551:function(t,e,n){"use strict";var r=n(545);n.n(r).a},552:function(t,e,n){(e=n(32)(!1)).push([t.i,".ui-table *{transition:all .3s ease}.ui-table table tbody td{vertical-align:middle}.ui-table-actions{position:relative;z-index:2}.ui-table-actions>.btn-group{position:absolute;top:-15px;right:0}.ui-table-actions-hidden{white-space:nowrap;opacity:0;visibility:hidden}.ui-table-actions .btn{margin-left:5px!important;border-radius:5px!important}.ui-table table tbody tr:hover .ui-table-actions-hidden{opacity:1;visibility:visible}.ui-table-fixed-header{overflow-y:scroll}.ui-table-fixed-header thead th{position:-webkit-sticky;position:sticky;top:0;background:#f5f5f5;z-index:3}",""]),t.exports=e},553:function(t,e,n){"use strict";var r=n(546);n.n(r).a},554:function(t,e,n){(e=n(32)(!1)).push([t.i,".ui-pagination-btn{width:30px;height:30px;margin:0 2px;padding:4px 0 0;border-radius:50%}.ui-pagination-btn-active{background:#ddd}.ui-pagination-scroll{white-space:nowrap;overflow:auto;padding-bottom:3px}.ui-pagination-scroll::-webkit-scrollbar{height:4px}.ui-pagination-scroll::-webkit-scrollbar-thumb{background:#ccc;cursor:pointer}",""]),t.exports=e},556:function(t,e,n){"use strict";n.r(e);var r={props:{fixedHeader:{default:!0},select:{default:!1},loading:{default:!1},maxHeight:{default:"auto"},current_page:{default:1},from:{default:0},to:{default:0},last_page:{default:0},per_page:{default:0},total:{default:0},value:{default:function(){return[]}},data:{default:function(){return[]}}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{toggleSelect:function(t){for(var i in this.props.value)if(this.props.value[i]==t.item)return this.props.value.splice(i,1),void this.$emit("input",this.props.value);this.props.value.push(t.item),this.$emit("input",this.props.value)},toggleSelectAll:function(t){this.$el.querySelectorAll("input[type=checkbox]").forEach((function(e){t!=e&&(e.checked=t.checked,e.dispatchEvent(new Event("change")))}))},isSelected:function(t){for(var i in this.props.value)if(this.props.value[i]==t.item)return!0;return!1},getHeaders:function(){var t=this;this.headers=[],this.$el.querySelectorAll("table thead th").forEach((function(e){t.headers.push({text:e.innerText,width:e.getAttribute("width")})}))},onPaginationChange:function(t){this.props.current_page=t.current_page,this.$emit("update:current_page",this.props.current_page),this.$emit("paginate",t.current_page)}},computed:{compData:function(){return this.props.data.map((function(t,e){var n=t.id;return"number"==typeof n&&"string"==typeof n||(n=e),{_id:n,item:t}}))}},data:function(){var data={headers:[]};return data.props=Object.assign({},this.$props),data},mounted:function(){this.getHeaders()}},o=(n(551),n(13)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui-table"},[n("div",{staticStyle:{overflow:"auto"},style:{maxHeight:t.props.maxHeight}},[n("table",{staticClass:"table table-borderless table-striped bg-white shadow-sm m-0",class:{"table-hover":t.props.data.length>0,"ui-table-fixed-header":t.props.fixedHeader}},[n("thead",[n("tr",[t.select?n("th",{attrs:{width:"10px"}},[n("input",{attrs:{type:"checkbox"},on:{change:function(e){return t.toggleSelectAll(e.target)}}})]):t._e(),t._v(" "),t._t("header",[n("th",[t._v(" ")])]),t._v(" "),n("th",[t._v(" ")])],2)]),t._v(" "),n("tbody",[n("tr",[n("td",{staticClass:"p-0",attrs:{colspan:t.headers.length}},[t._t("loading",[n("div",{staticStyle:{height:"5px",position:"relative"}},[t.props.loading?n("div",{staticClass:"progress rounded-0",staticStyle:{height:"100%"}},[n("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated",staticStyle:{width:"100%"},attrs:{role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"}})]):t._e()])])],2)]),t._v(" "),0!=t.props.data.length||t.props.loading?t._e():[n("tr",[n("td",{attrs:{colspan:t.headers.length}},[t._t("empty",[t._v("Nenhum item carregado")])],2)])],t._v(" "),t._l(t.compData,(function(i){return n("tr",{key:i._id},[t.select?n("td",[n("input",{attrs:{type:"checkbox"},domProps:{checked:t.isSelected(i)},on:{change:function(e){return t.toggleSelect(i)}}})]):t._e(),t._v(" "),t._t("item",[n("td",[n("pre",[t._v(t._s(i._id))])])],{item:i.item}),t._v(" "),n("td",{attrs:{width:"50px"}},[n("div",{staticClass:"ui-table-actions"},[n("div",{staticClass:"btn-group btn-group-sm"},[n("div",{staticClass:"btn-group btn-group-sm ui-table-actions-hidden"},[t._t("actions",[t._v(" ")],{item:i.item})],2),t._v(" "),t._m(0,!0)])])])],2)}))],2)])]),t._v(" "),n("div",{staticClass:"bg-white"},[n("div",{staticClass:"row no-gutters align-items-center"},[n("div",{staticClass:"col-12 col-md-8 p-2"},[n("ui-pagination",t._b({on:{change:function(e){return t.onPaginationChange(e)}}},"ui-pagination",t.props,!1))],1),t._v(" "),n("div",{staticClass:"col-12 col-md-4 p-2 text-md-right"},[t._v("\r\n                Página "+t._s(t.props.current_page)+"/"+t._s(t.props.last_page)+"\r\n                  •  \r\n                "+t._s(t.props.total)+" Itens\r\n            ")])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn d-md-none",attrs:{href:"javascript:;"}},[e("i",{staticClass:"fa fa-fw fa-plus"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{UiPagination:n(557).default})},557:function(t,e,n){"use strict";n.r(e);var r={props:{current_page:{default:1},from:{default:0},to:{default:0},last_page:{default:0},per_page:{default:0},total:{default:0}},watch:{$props:{deep:!0,handler:function(t){this.props=Object.assign({},t)}}},methods:{setPage:function(t){"+"==t?t=this.props.current_page+1:"-"==t&&(t=this.props.current_page-1),this.props.current_page=t,this.$emit("change",this.props)},onWheel:function(t){t.preventDefault(),(t.target.classList.contains("ui-pagination-scroll")?t.target:t.target.parentNode).scrollLeft+=t.deltaY/2}},data:function(){return{props:Object.assign({},this.$props)}}},o=(n(553),n(13)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.props.last_page>1?n("div",{staticClass:"ui-pagination"},[n("div",{staticClass:"d-flex"},[n("div",{staticClass:"pr-1"},[n("a",{staticClass:"btn btn-sm ui-pagination-btn",class:{"ui-pagination-btn-active":1==t.props.current_page},attrs:{href:"javascript:;"},on:{click:function(e){return t.setPage(1)}}},[n("i",{staticClass:"fa fa-fw fa-angle-double-left"})])]),t._v(" "),n("div",{staticClass:"pr-1"},[n("a",{staticClass:"btn btn-sm ui-pagination-btn",class:{"ui-pagination-btn-active":1==t.props.current_page},attrs:{href:"javascript:;"},on:{click:function(e){return t.setPage("-")}}},[n("i",{staticClass:"fa fa-fw fa-angle-left"})])]),t._v(" "),n("div",{staticClass:"text-center ui-pagination-scroll",on:{wheel:function(e){return t.onWheel(e)}}},t._l(t.props.last_page,(function(p){return n("a",{staticClass:"btn btn-sm ui-pagination-btn",class:{"ui-pagination-btn-active":t.props.current_page==p},attrs:{href:"javascript:;"},on:{click:function(e){return t.setPage(p)}}},[t._v("\r\n                "+t._s(p)+"\r\n            ")])})),0),t._v(" "),n("div",{staticClass:"pl-1"},[n("a",{staticClass:"btn btn-sm ui-pagination-btn",class:{"ui-pagination-btn-active":t.props.current_page==t.props.last_page},attrs:{href:"javascript:;"},on:{click:function(e){return t.setPage("+")}}},[n("i",{staticClass:"fa fa-fw fa-angle-right"})])]),t._v(" "),n("div",{staticClass:"pl-1"},[n("a",{staticClass:"btn btn-sm ui-pagination-btn",class:{"ui-pagination-btn-active":t.props.current_page==t.props.last_page},attrs:{href:"javascript:;"},on:{click:function(e){return t.setPage(t.props.last_page)}}},[n("i",{staticClass:"fa fa-fw fa-angle-double-right"})])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports},739:function(t,e,n){"use strict";n.r(e);var r={layout:"admin",middleware:"auth",head:function(){return{title:"Buscar Emails"}},data:function(){return{params:{search:"",page:1,perpage:10,orderby:"id",order:"desc"},results:{loading:!1,data:[]}}},methods:{getResults:function(){var t=this;this.results.loading=!0,this.$axios("/api/email/search",{params:this.params}).then((function(e){t.results=e.data,t.results.loading=!1}))},deleteItem:function(t){var e=this;this.$confirm({title:"Deseja deletar email?"}).then((function(n){e.$axios.post("/user/delete/".concat(t.id)).then((function(t){e.$swal("email deletado","","success")}))}))}},mounted:function(){this.getResults()}},o=n(13),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{staticClass:"input-group mb-3",staticStyle:{"max-width":"300px"},on:{submit:function(e){return e.preventDefault(),t.getResults()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.params.search,expression:"params.search"}],staticClass:"form-control border-0",attrs:{type:"text",placeholder:"Buscar Emails"},domProps:{value:t.params.search},on:{input:function(e){e.target.composing||t.$set(t.params,"search",e.target.value)}}}),t._v(" "),t._m(0)]),t._v(" "),n("ui-table",t._b({on:{paginate:function(e){t.params.page=e,t.getResults()}},scopedSlots:t._u([{key:"header",fn:function(){return[n("th",[t._v("ID")]),t._v(" "),n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Subject")]),t._v(" "),n("th",[t._v("Body")]),t._v(" "),n("th",[t._v("Params")])]},proxy:!0},{key:"item",fn:function(e){var r=e.item;return[n("td",[t._v(t._s(r.id))]),t._v(" "),n("td",[t._v(t._s(r.name))]),t._v(" "),n("td",[t._v(t._s(r.subject))]),t._v(" "),n("td",[t._v(t._s(r.body))]),t._v(" "),n("td",[t._v(t._s(r.params))])]}},{key:"actions",fn:function(e){var r=e.item;return[n("nuxt-link",{staticClass:"btn btn-primary",attrs:{to:"/admin/email/"+r.id}},[n("i",{staticClass:"fas fa-edit"})]),t._v(" "),n("a",{staticClass:"btn btn-danger",attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.deleteItem(r)}}},[n("i",{staticClass:"fas fa-times"})])]}}])},"ui-table",t.results,!1,!0)),t._v(" "),n("ui-actions",[n("nuxt-link",{staticClass:"btn btn-primary",attrs:{to:"/admin/email/0"}},[t._v("Novo")])],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-append"},[e("div",{staticClass:"input-group-btn"},[e("button",{staticClass:"btn bg-white",attrs:{type:"submit"}},[e("i",{staticClass:"fas fa-search"})])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{UiTable:n(556).default,UiActions:n(363).default})}}]);