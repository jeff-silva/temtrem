(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{622:function(t,e,r){"use strict";r.r(e);r(36),r(26);var l={props:{value:Object},data:function(){return{products:{loading:!1,params:{business_id:this.value.id,perpage:99},results:{data:[]}}}},computed:{groupsProducts:function(){var t=JSON.parse(JSON.stringify(this.products.results.data)),e=JSON.parse(JSON.stringify(this.value.groups));return 0==(e=e.map((function(e){return e.products=t.filter((function(t){return e.products.indexOf(t.id)>=0})),e}))).length&&e.push({id:"all",name:"Todos",products:t}),e}},methods:{refresh:function(){this.loadProducts()},loadProducts:function(){var t=this;this.products.loading=!0;var e=this.products.params;e.business_id=this.value.id,this.$axios.get("/api/temtrem-product/search",{params:e}).then((function(e){t.products.loading=!1,t.products.results=e.data}))}},mounted:function(){this.refresh()}},o=r(5),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{overflow:"auto"}},[t.value.cover&&t.value.cover.url?r("img",{staticStyle:{width:"100%",height:"150px","object-fit":"cover"},attrs:{src:t.value.cover.url,alt:""}}):t._e(),t._v(" "),r("div",{staticClass:"p-3"},[r("h1",[t._v(t._s(t.value.name))]),t._v(" "),r("div",{domProps:{innerHTML:t._s(t.value.description)}}),t._v(" "),t.value.route&&t.value.district&&t.value.city&&t.value.state?r("small",{staticClass:"text-muted d-block"},[r("i",{staticClass:"fas fa-map-marker"}),t._v("  \r\n            "+t._s(t.value.route)+" "+t._s(t.value.number)+", "+t._s(t.value.district)+",\r\n            "+t._s(t.value.city)+" "+t._s(t.value.state)+"\r\n        ")]):t._e(),t._v(" "),r("div",{staticClass:"mb-4"}),t._v(" "),t._l(t.groupsProducts,(function(g){return r("div",{staticClass:"mb-4"},[g.products.length>0?[r("div",[r("small",{staticClass:"font-weight-bold"},[t._v(t._s(g.name))])]),t._v(" "),t._l(g.products,(function(p){return r("div",{staticClass:"mb-2"},[r("div",{staticClass:"d-flex align-items-center bg-white shadow-sm mb-2"},[p.cover&&p.cover.url?r("div",{staticClass:"p-1"},[r("img",{staticStyle:{width:"50px",height:"50px","object-fit":"cover"},attrs:{src:p.cover.url,alt:""}})]):t._e(),t._v(" "),r("div",{staticClass:"flex-grow-2 p-3"},[r("div",{staticClass:"font-weight-bold"},[t._v(t._s(p.name))]),t._v(" "),r("small",{staticClass:"text-muted"},[t._v(t._s(p.price)+" "+t._s(p.unity||"Unidade"))])])])])}))]:t._e()],2)}))],2)])}),[],!1,null,null,null);e.default=component.exports}}]);